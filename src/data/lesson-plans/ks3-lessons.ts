import type { LessonPlan } from '@/types';

export const ks3Lessons: LessonPlan[] = [
  // ── Lesson 1: Introduction to Analytical Writing: PEE/PEEL Paragraphs ────
  {
    id: 'ks3-01-analytical-writing-pee-peel',
    title: 'Introduction to Analytical Writing: PEE/PEEL Paragraphs',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Understand the structure of a PEE (Point, Evidence, Explain) paragraph',
      'Develop PEE into PEEL by adding a Link sentence',
      'Apply the PEE/PEEL framework to a short text extract',
      'Identify and correct weak analytical paragraphs',
    ],
    successCriteria: [
      'I can label each part of a PEE paragraph correctly',
      'I can write my own PEE paragraph using a quotation from a given extract',
      'I can extend PEE into PEEL by writing a link sentence that connects back to the question',
      'I can peer-assess a partner\'s paragraph using the PEE/PEEL checklist',
    ],
    keywords: [
      'point',
      'evidence',
      'explain',
      'link',
      'analysis',
      'quotation',
      'embed',
      'topic sentence',
    ],
    starterActivity: {
      title: 'Paragraph Jumble',
      duration: '8 minutes',
      instructions:
        'Display a well-written PEEL paragraph on the board with the sentences jumbled. Students work in pairs to cut-and-stick (or drag-and-drop on screen) the sentences into the correct order. Once complete, label each sentence as Point, Evidence, Explain, or Link. Teacher reveals the correct order and introduces the PEEL acronym.',
      differentiation: {
        support:
          'Provide colour-coded sentence strips with the first letter of each PEEL component visible.',
        core: 'Students arrange the sentences and label them independently.',
        stretch:
          'Students explain why each sentence must go in that particular order and what happens if the order is changed.',
      },
      resources: ['Jumbled paragraph slide', 'Cut-and-stick sentence strips'],
    },
    mainActivities: [
      {
        title: 'Deconstructing a Model PEEL Paragraph',
        duration: '15 minutes',
        instructions:
          'Display a model PEEL paragraph analysing a short extract from a novel or short story (e.g. an extract describing a character). Teacher reads aloud and models how to highlight and annotate each component. Students then receive a second model paragraph and independently highlight and label each PEEL section using four different colours. Pairs compare their annotations and discuss: which part of the paragraph does the "heavy lifting"?',
        differentiation: {
          support:
            'Provide a partially annotated version with two of the four components already identified.',
          core: 'Students highlight and label all four components independently.',
          stretch:
            'Students evaluate the quality of the explanation — does it go beyond surface-level meaning? How could it be improved?',
        },
        resources: [
          'Model paragraph handout (x2 paragraphs)',
          'Colour highlighters (four colours)',
        ],
      },
      {
        title: 'Guided Writing: Building Your Own PEEL Paragraph',
        duration: '20 minutes',
        instructions:
          'Provide students with a short prose extract (approx. 150 words) and a question such as "How does the writer present the character as frightening?" Teacher models writing the Point sentence together on the board, then students select their own quotation (Evidence), write their Explain sentence, and finish with a Link. Use a writing frame for support. After 12 minutes of writing, two or three volunteers share their paragraphs under the visualiser for class feedback using "Two Stars and a Wish".',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters for each PEEL component (e.g. "The writer suggests that...", "This is shown when...", "This implies...", "Overall, this links to...").',
          core: 'Students write a full PEEL paragraph independently using the extract.',
          stretch:
            'Students write two PEEL paragraphs exploring different techniques in the extract and attempt to embed quotations within their own sentences.',
        },
        resources: [
          'Prose extract handout',
          'PEEL writing frame (support tier)',
          'Analytical sentence starters sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'PEE/PEEL Self-Assessment Traffic Light',
      duration: '7 minutes',
      instructions:
        'Students re-read their own paragraph and use a traffic light system (green/amber/red) to self-assess each component. Green = confident, Amber = partly there, Red = needs work. Students write one target for improvement on a sticky note and attach it to their book. Teacher collects a snapshot by asking for a show of hands on each colour.',
      differentiation: {
        support: 'Provide a checklist of what "green" looks like for each PEEL component.',
        core: 'Students self-assess and write a specific improvement target.',
        stretch:
          'Students rewrite their weakest PEEL component to improve it and explain what they changed and why.',
      },
    },
    homework:
      'Write a PEEL paragraph responding to: "How does the writer create a sense of tension in the opening of the extract?" using a new short extract provided on the homework sheet.',
    worksheetQuestions: [
      {
        question:
          'What does PEE stand for? Write a brief definition of each component.',
        lines: 4,
        modelAnswer:
          'PEE stands for Point, Evidence, Explain. The Point is the main argument or idea you want to make. Evidence is a quotation or reference from the text that supports your point. Explain is where you analyse the evidence and explain how it supports your point.',
        marks: 3,
      },
      {
        question:
          'What is the difference between PEE and PEEL? Why is the extra "L" useful?',
        lines: 3,
        modelAnswer:
          'PEEL adds a Link sentence at the end. The Link connects your paragraph back to the main question or forward to your next point. It is useful because it keeps your writing focused and shows the examiner that you are answering the question directly.',
        marks: 2,
      },
      {
        question:
          'Read the paragraph below and identify which PEEL component is missing. Then write the missing sentence.\n\n"The writer presents the character as dangerous. This is shown through the simile \'his eyes were like a wolf\'s\'. This suggests he is predatory and calculating, hunting his prey with cold focus."',
        lines: 5,
        modelAnswer:
          'The Link sentence is missing. A possible Link: "Overall, this reinforces the writer\'s intention to make the reader feel uneasy about this character and foreshadows the threat he poses later in the text."',
        marks: 3,
      },
      {
        question:
          'Write a full PEEL paragraph about the following sentence: "The corridor stretched ahead, dark and endless, swallowing every sound." Focus on how the writer creates atmosphere.',
        lines: 8,
        modelAnswer:
          'The writer creates an eerie and unsettling atmosphere. This is evident in the description "dark and endless, swallowing every sound." The verb "swallowing" personifies the corridor, suggesting it is alive and consuming, which makes the setting feel threatening and inescapable. The adjective "endless" emphasises the vastness and the character\'s vulnerability within it. This contributes to the writer\'s overall intention of building suspense and making the reader share the character\'s fear of the unknown.',
        marks: 5,
      },
      {
        question:
          'A student writes: "The writer uses a metaphor. \'The sea was a raging beast.\' This is effective." Explain what is wrong with this paragraph and rewrite it as a proper PEEL paragraph.',
        lines: 8,
        modelAnswer:
          'The paragraph identifies a technique but the explanation is too vague — "this is effective" does not analyse how or why. A better version: "The writer conveys the power and danger of the sea. This is demonstrated through the metaphor \'the sea was a raging beast.\' The word \'raging\' suggests uncontrollable fury, while \'beast\' implies the sea is a living predator, capable of destruction. This creates a sense of danger and helplessness, linking to the wider theme of humanity\'s vulnerability against nature."',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is a foundational lesson that should be revisited and reinforced throughout KS3. Consider displaying a PEEL poster permanently in the classroom.',
      'The extract used in the main activity can be swapped for any age-appropriate prose — choose something with clear language techniques to lower the barrier to analysis.',
      'Encourage students to move away from "The writer uses..." openings as they gain confidence. Model alternative openings like "Through the metaphor..." or "Shakespeare conveys...".',
      'Collect the self-assessment sticky notes to identify students who need targeted support next lesson.',
    ],
    targetedSkills: [
      'PEE/PEEL',
      'Analytical Writing',
      'Evidence Selection',
      'Paragraph Structure',
      'Quotation Embedding',
    ],
  },

  // ── Lesson 2: Reading Comprehension: Inference & Deduction Skills ────────
  {
    id: 'ks3-02-inference-deduction',
    title: 'Reading Comprehension: Inference & Deduction Skills',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Understand the difference between explicit and implicit information in a text',
      'Use inference to read between the lines and deduce meaning',
      'Support inferences with evidence from the text',
      'Apply inference skills to both fiction and non-fiction extracts',
    ],
    successCriteria: [
      'I can identify explicit information stated directly in a text',
      'I can make at least two inferences about a character or situation using clues from the text',
      'I can explain my inferences using evidence and reasoning',
      'I can distinguish between what the text says and what it implies',
    ],
    keywords: [
      'inference',
      'deduction',
      'explicit',
      'implicit',
      'connotation',
      'evidence',
      'interpretation',
      'clue',
    ],
    starterActivity: {
      title: 'What Can You Infer? Image Analysis',
      duration: '7 minutes',
      instructions:
        'Display a thought-provoking photograph (e.g. a person sitting alone on a bench in the rain). Ask: "What do we know for certain? What can we guess? What evidence supports our guesses?" Students discuss in pairs, then share responses. Teacher models the difference between observation (explicit) and inference (implicit), introducing the key vocabulary.',
      differentiation: {
        support:
          'Provide sentence starters: "I can see that... which suggests..." and "This makes me think...".',
        core: 'Students give at least two inferences with evidence from the image.',
        stretch:
          'Students consider alternative interpretations — could the image suggest something completely different?',
      },
      resources: ['Projected photograph/image', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Inference Detective: Fiction Extract',
        duration: '20 minutes',
        instructions:
          'Provide students with a short fiction extract (approx. 200 words) rich in implied meaning — for example, a passage where a character\'s mood is shown through actions and setting rather than stated directly. Students read the extract and complete an "Inference Grid" with three columns: "What the text says" (quotation), "What I can infer" (interpretation), "How I know" (reasoning). Teacher models the first row, then students complete three or four more rows independently. Pairs then compare grids and discuss differences in their interpretations.',
        differentiation: {
          support:
            'Pre-select quotations for the "What the text says" column so students can focus on inference and reasoning.',
          core: 'Students select their own quotations and complete the grid independently.',
          stretch:
            'Students identify where the author has deliberately withheld information and explain why, considering the effect on the reader.',
        },
        resources: [
          'Fiction extract handout',
          'Inference Grid worksheet',
          'Model row completed on the board',
        ],
      },
      {
        title: 'Non-Fiction Inference Challenge',
        duration: '18 minutes',
        instructions:
          'Provide a short non-fiction text (e.g. a newspaper article, diary entry, or letter) where bias or hidden feelings are present. Students work in groups of three to identify three explicit facts and three inferences they can make about the writer\'s attitude or purpose. Each group records their findings on a large sheet of sugar paper and presents their strongest inference to the class, explaining their reasoning. Class votes on the most convincing inference.',
        differentiation: {
          support:
            'Highlight key sentences in the text and provide a glossary for unfamiliar vocabulary.',
          core: 'Students identify facts and inferences independently within their group.',
          stretch:
            'Students compare the inferences possible from fiction versus non-fiction and discuss which text type makes inference easier and why.',
        },
        resources: [
          'Non-fiction text handout',
          'Sugar paper and markers',
          'Inference prompts card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Inference Ladder Exit Ticket',
      duration: '5 minutes',
      instructions:
        'Display a single sentence from a new, unseen text: e.g. "She placed the letter carefully in the drawer, glancing once at the door before turning the key." Students write one inference on their exit ticket and explain their reasoning in two sentences. Collect as students leave.',
      differentiation: {
        support: 'Provide the stem: "I think the character feels... because the text says...".',
        core: 'Students write a full inference with evidence and reasoning.',
        stretch:
          'Students write two possible interpretations and explain which is more likely and why.',
      },
    },
    homework:
      'Read a short extract provided on the homework sheet and complete five inference questions, using the format: "The text suggests... because...".',
    worksheetQuestions: [
      {
        question:
          'What is the difference between "explicit" and "implicit" information? Give an example of each.',
        lines: 4,
        modelAnswer:
          'Explicit information is stated directly in the text — for example, "It was raining heavily." Implicit information is suggested or hinted at — for example, "She pulled her collar tight and ducked under the awning" implies it is raining without saying so directly.',
        marks: 3,
      },
      {
        question:
          'Read: "Tom pushed his food around the plate, not meeting anyone\'s eyes." What can you infer about Tom? Use evidence to support your answer.',
        lines: 5,
        modelAnswer:
          'We can infer that Tom is upset, anxious, or troubled about something. The fact that he is "pushing his food around" suggests he has lost his appetite, which is often a sign of emotional distress. "Not meeting anyone\'s eyes" implies he is avoiding interaction, possibly because he is hiding something or feels guilty.',
        marks: 4,
      },
      {
        question:
          'Why is inference an important reading skill? Explain why writers do not always tell us things directly.',
        lines: 4,
        modelAnswer:
          'Inference is important because writers often "show" rather than "tell" to create a more engaging and immersive experience. By leaving things implied, writers allow readers to actively piece together meaning, which makes reading more rewarding and creates effects like suspense, mystery, and empathy.',
        marks: 3,
      },
      {
        question:
          'Read: "The headteacher smiled warmly at the parents, but her fingers drummed on the desk beneath it." What two things can you infer? Explain your reasoning.',
        lines: 6,
        modelAnswer:
          'First, we can infer that the headteacher wants to appear calm and welcoming, shown by her warm smile. Second, her fingers drumming on the desk suggest she is actually nervous or impatient. The contrast between the smile and the drumming implies she may be hiding her true feelings from the parents.',
        marks: 4,
      },
      {
        question:
          'Explain the difference between inference and guessing. Why must we always use evidence?',
        lines: 4,
        modelAnswer:
          'Inference is an educated interpretation based on clues in the text, whereas guessing has no evidence to support it. We must use evidence because an inference needs to be grounded in what the writer has actually written. Without evidence, our interpretation is unreliable and cannot be defended in discussion or an exam.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson works well early in Year 7 to establish inference as a core skill that underpins all reading at KS3 and beyond.',
      'Choose extracts carefully — the fiction extract should have clear implied emotions or situations. Dickens, Morpurgo, and Ness work well.',
      'The image starter is highly effective for EAL students and reluctant readers as it removes the reading barrier while teaching the same skill.',
      'Revisit inference regularly using short "inference starters" at the beginning of subsequent lessons.',
    ],
    targetedSkills: [
      'Inference',
      'Deduction',
      'Reading Comprehension',
      'Evidence Selection',
      'Critical Thinking',
    ],
  },

  // ── Lesson 3: Creative Writing: Show Don't Tell & Sensory Description ────
  {
    id: 'ks3-03-creative-writing-show-dont-tell',
    title: 'Creative Writing: Show Don\'t Tell & Sensory Description',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Understand the principle of "show don\'t tell" in creative writing',
      'Use sensory details (sight, sound, smell, touch, taste) to create vivid descriptions',
      'Transform "telling" sentences into "showing" paragraphs',
      'Apply descriptive techniques to an original piece of writing',
    ],
    successCriteria: [
      'I can explain the difference between showing and telling with an example',
      'I can rewrite a "telling" sentence using at least three senses',
      'I can use a range of descriptive techniques including simile, metaphor, and personification',
      'I can write a descriptive paragraph that creates a clear mood without naming the emotion',
    ],
    keywords: [
      'show don\'t tell',
      'sensory language',
      'imagery',
      'simile',
      'metaphor',
      'personification',
      'atmosphere',
      'mood',
    ],
    starterActivity: {
      title: 'Telling vs Showing: Spot the Difference',
      duration: '7 minutes',
      instructions:
        'Display two versions of the same scene side by side. Version A: "The man was angry." Version B: "His jaw clenched. He slammed the mug down, coffee sloshing across the counter, and turned away without a word." Students discuss in pairs: which is more effective and why? Elicit that Version B "shows" the anger through actions and details. Introduce the rule: never name the emotion — make the reader feel it.',
      differentiation: {
        support: 'Provide a simple table to record "What I notice" about each version.',
        core: 'Students explain why showing is more effective, using the word "reader".',
        stretch:
          'Students identify the specific techniques used in Version B (action, sensory detail, short sentence) and explain each one\'s effect.',
      },
      resources: ['Comparison slide with both versions'],
    },
    mainActivities: [
      {
        title: 'Sensory Stations: Five Senses Descriptive Challenge',
        duration: '15 minutes',
        instructions:
          'Set up five stations around the room, one per sense (sight, sound, smell, touch, taste). At each station, place an object, image, or audio clip as stimulus. Students spend 2 minutes at each station writing descriptive phrases using only that sense. After rotating through all five, students choose their best phrase from each sense and combine them into a short descriptive paragraph about a place (e.g. "a busy market"). Share examples and discuss which senses are most powerful for creating atmosphere.',
        differentiation: {
          support:
            'Provide sentence starters at each station, e.g. "It sounded like...", "The air tasted of...".',
          core: 'Students write original phrases at each station and combine them into a paragraph.',
          stretch:
            'Students use figurative language (simile, metaphor, personification) at each station rather than literal description.',
        },
        resources: [
          'Station objects/images/audio clips',
          'Five Senses recording sheet',
          'Figurative language prompt card',
        ],
      },
      {
        title: 'Transformation Workshop: From Telling to Showing',
        duration: '22 minutes',
        instructions:
          'Provide students with a list of ten "telling" sentences (e.g. "She was scared", "The house was old", "It was a hot day", "He was happy"). Students choose five and transform each one into a "showing" paragraph of two to three sentences, using sensory details and descriptive techniques. Teacher models the first transformation on the board, thinking aloud about choices. After writing, students swap books with a partner for peer feedback: can the partner identify the emotion or situation without being told? If yes, the showing is working.',
        differentiation: {
          support:
            'Provide a technique toolkit card listing simile, metaphor, personification, and onomatopoeia with examples. Students transform three sentences.',
          core: 'Students transform five sentences using at least two different techniques per answer.',
          stretch:
            'Students write extended "showing" paragraphs (four to five sentences) and experiment with sentence structure — short sentences for tension, longer sentences for calm descriptions.',
        },
        resources: [
          'Ten telling sentences handout',
          'Technique toolkit card (support tier)',
          'Peer feedback sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Show Don\'t Tell Showdown',
      duration: '6 minutes',
      instructions:
        'Teacher announces an emotion (e.g. "loneliness"). Students have 90 seconds to write a showing description on a mini-whiteboard without using the word itself. Volunteers hold up their boards. Class votes on the most vivid description. Repeat with one more emotion if time allows.',
      differentiation: {
        support: 'Display a word bank of useful verbs and adjectives on the board.',
        core: 'Students write independently and aim for two to three sentences.',
        stretch:
          'Students must include at least one example of figurative language in their response.',
      },
    },
    homework:
      'Write a descriptive paragraph (100-150 words) about ONE of the following: a thunderstorm, a crowded train, or a deserted beach. Use at least three senses and two descriptive techniques. Do not name the place — your reader should be able to work it out from your description.',
    worksheetQuestions: [
      {
        question:
          'Explain what "show don\'t tell" means in creative writing. Why is it important?',
        lines: 4,
        modelAnswer:
          '"Show don\'t tell" means using descriptive details, actions, and sensory language to convey emotions and settings rather than simply stating them. It is important because it creates a more immersive experience for the reader, allowing them to feel and visualise the scene rather than just being informed about it.',
        marks: 3,
      },
      {
        question:
          'Rewrite the following "telling" sentence as a "showing" paragraph: "The forest was dark and scary."',
        lines: 6,
        modelAnswer:
          'Shadows bled between the trunks, thick as ink, swallowing the path ahead. Every branch overhead knotted together like grasping fingers, blocking out the last sliver of sky. Somewhere behind me, a twig cracked — and silence flooded back, heavier than before.',
        marks: 4,
      },
      {
        question:
          'Name the five senses and give an example of descriptive language using each one to describe a bonfire.',
        lines: 6,
        modelAnswer:
          'Sight: "Flames clawed at the night sky, painting the darkness in shades of amber and gold." Sound: "The wood crackled and spat like an angry cat." Smell: "Smoke curled through the air, carrying the earthy scent of burning oak." Touch: "Heat pressed against my face like an invisible hand." Taste: "The air tasted of ash and charcoal, dry on my tongue."',
        marks: 5,
      },
      {
        question:
          'What is the difference between a simile, a metaphor, and personification? Give an example of each.',
        lines: 6,
        modelAnswer:
          'A simile compares two things using "like" or "as" — e.g. "The moon hung like a lantern in the sky." A metaphor says something is something else — e.g. "The moon was a silver coin." Personification gives human qualities to non-human things — e.g. "The moon peered down at the sleeping town."',
        marks: 4,
      },
      {
        question:
          'Write a short paragraph (3-4 sentences) showing that a character is nervous without using the word "nervous" or "scared".',
        lines: 6,
        modelAnswer:
          'Her fingers twisted the hem of her sleeve, pulling the thread loose stitch by stitch. She glanced at the clock — two minutes — then back at the door. Her mouth was dry, and no matter how many times she swallowed, the tightness in her throat wouldn\'t shift.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is extremely effective when taught early in KS3 and revisited before any creative writing assessment.',
      'The sensory stations can be adapted to fit any topic — use stimuli related to a text being studied (e.g. battlefield sounds for war poetry).',
      'Emphasise that "show don\'t tell" applies to emotions and character, not to basic information. Students should still be clear about who, where, and when.',
      'Model your own writing on the board — students respond very well to seeing a teacher write, cross out, and improve in real time.',
    ],
    targetedSkills: [
      'Creative Writing',
      'Descriptive Writing',
      'Sensory Language',
      'Figurative Language',
      'Show Don\'t Tell',
    ],
  },

  // ── Lesson 4: Grammar Foundations: Sentence Types & Punctuation ───────────
  {
    id: 'ks3-04-grammar-sentence-types-punctuation',
    title: 'Grammar Foundations: Sentence Types & Punctuation for Effect',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Identify and use the four sentence types: simple, compound, complex, and minor',
      'Understand how sentence structure choices create different effects on the reader',
      'Use punctuation (full stops, commas, semicolons, colons, dashes, ellipses) for deliberate effect',
      'Apply varied sentence structures and punctuation to improve a piece of writing',
    ],
    successCriteria: [
      'I can identify and write examples of simple, compound, complex, and minor sentences',
      'I can explain the effect of a short sentence after a long one',
      'I can use at least three different punctuation marks correctly and for effect',
      'I can improve a piece of flat writing by varying sentence types and punctuation',
    ],
    keywords: [
      'simple sentence',
      'compound sentence',
      'complex sentence',
      'minor sentence',
      'clause',
      'conjunction',
      'semicolon',
      'ellipsis',
    ],
    starterActivity: {
      title: 'Sentence Sort',
      duration: '7 minutes',
      instructions:
        'Provide students with twelve sentences on cards. Working in pairs, students sort them into four categories: simple, compound, complex, and minor. Teacher reveals the correct answers and clarifies definitions. Key teaching point: a sentence type is defined by its clause structure, not its length.',
      differentiation: {
        support:
          'Provide a definitions card with the four sentence types and one example of each to use as a reference.',
        core: 'Students sort independently and write a one-sentence definition of each type.',
        stretch:
          'After sorting, students create their own example of each type on the topic of "a journey".',
      },
      resources: ['Sentence sort cards (set per pair)', 'Definitions reference card'],
    },
    mainActivities: [
      {
        title: 'Sentence Effects: Why Writers Choose Structure',
        duration: '18 minutes',
        instructions:
          'Display four short text extracts on the board, each demonstrating a different structural choice: (1) a series of long, flowing complex sentences creating a calm mood, (2) a succession of short simple sentences creating tension, (3) a long sentence followed by a minor sentence for dramatic impact, (4) a list using semicolons for a building, cumulative effect. For each extract, students discuss the effect in pairs, then annotate a printed copy explaining why the writer chose that structure. Teacher consolidates with key rule: sentence structure is a tool — every choice creates meaning.',
        differentiation: {
          support:
            'Provide a bank of effect phrases: "This creates a sense of...", "The short sentence emphasises...", "The long sentence mirrors...".',
          core: 'Students annotate each extract independently with the structural effect.',
          stretch:
            'Students compare two extracts and write a short comparative paragraph explaining which is more effective and why.',
        },
        resources: [
          'Four extract slides',
          'Printed extracts handout for annotation',
          'Effect phrases bank (support tier)',
        ],
      },
      {
        title: 'Punctuation for Effect Workshop',
        duration: '20 minutes',
        instructions:
          'Teacher introduces or revises six punctuation marks beyond the full stop: comma, semicolon, colon, dash, ellipsis, and exclamation mark. For each, display a model sentence demonstrating its effect (e.g. "She opened the door — and screamed." vs "She opened the door. She screamed."). Students then receive a "flat" paragraph written entirely in simple sentences with full stops only. Task: rewrite the paragraph using varied sentence types and at least four different punctuation marks to create a specific mood (choose from: suspense, excitement, sadness). Share and compare different versions of the same paragraph to show how punctuation changes meaning.',
        differentiation: {
          support:
            'Provide a punctuation toolkit card with each mark, its name, and an example of its use. Students rewrite using at least two new punctuation marks.',
          core: 'Students rewrite the paragraph using at least four punctuation marks and varied sentences.',
          stretch:
            'Students rewrite the paragraph twice — once for suspense and once for comedy — then annotate how their punctuation choices changed the tone.',
        },
        resources: [
          'Punctuation model sentences slide',
          'Flat paragraph handout',
          'Punctuation toolkit card (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Sentence, Four Ways',
      duration: '5 minutes',
      instructions:
        'Display a basic idea: "The dog ran across the field." Students write it four different ways — as a simple, compound, complex, and minor sentence — on their mini-whiteboards. Volunteers share, and the class discusses how each version changes the effect.',
      differentiation: {
        support: 'Provide conjunction/subordinator word banks for compound and complex versions.',
        core: 'Students write all four versions independently.',
        stretch:
          'Students add a specific punctuation mark to each version and explain its effect.',
      },
    },
    homework:
      'Find a paragraph in any book, newspaper, or website that uses varied sentence types. Copy it out, label each sentence type, and write a short analysis (3-4 sentences) of why the writer made those choices.',
    worksheetQuestions: [
      {
        question:
          'Define the four sentence types (simple, compound, complex, minor) and give an original example of each.',
        lines: 8,
        modelAnswer:
          'A simple sentence has one clause with a subject and verb: "The rain fell." A compound sentence joins two main clauses with a coordinating conjunction (and, but, or, so, yet): "The rain fell and the streets flooded." A complex sentence has a main clause and a subordinate clause: "Although the rain fell heavily, the match continued." A minor sentence is a fragment without a main verb, used for effect: "Silence."',
        marks: 4,
      },
      {
        question:
          'Explain the effect of using a short sentence after a long one. Use an example to support your answer.',
        lines: 4,
        modelAnswer:
          'A short sentence after a long one creates emphasis and impact. The reader\'s pace quickens, drawing attention to the short sentence. For example: "The hallway stretched on and on, shadows pooling in every corner, the wallpaper peeling in long, damp strips. Then the lights went out." The short final sentence creates shock and tension.',
        marks: 3,
      },
      {
        question:
          'What is the difference between a semicolon and a colon? Give an example sentence for each.',
        lines: 4,
        modelAnswer:
          'A semicolon links two closely related independent clauses: "The sun set; the temperature dropped instantly." A colon introduces an explanation, list, or elaboration: "There was only one option: run."',
        marks: 3,
      },
      {
        question:
          'Rewrite this flat passage using varied sentence types and punctuation:\n"The boy walked into the room. The room was dark. He could not see anything. He heard a noise. He felt afraid."',
        lines: 6,
        modelAnswer:
          'The boy walked into the room — dark, impossibly dark. He could not see a thing; his hands reached out, grasping at nothing. Then he heard it. A noise. Low and scratching, like nails dragging across wood. His breath caught in his throat, and every instinct told him the same thing: leave. Now.',
        marks: 5,
      },
      {
        question:
          'Why is it important to vary your sentence structures in writing? What happens if a writer only uses one type?',
        lines: 4,
        modelAnswer:
          'Varying sentence structures keeps the reader engaged and allows the writer to control pace and tone. If a writer only uses one type, the writing becomes monotonous and flat — for example, only simple sentences sound robotic and childlike, while only complex sentences can become confusing and exhausting to read.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson is crucial for improving writing quality across all text types. Revisit frequently and reference it during any writing lesson.',
      'Avoid teaching grammar in isolation — always connect sentence types to their effect on the reader.',
      'The "flat paragraph" activity works brilliantly as students can see immediate improvement in their writing.',
      'Some students confuse sentence length with sentence type. Emphasise that a simple sentence can be long ("The tall, red-haired boy in the blue coat ran quickly across the muddy, rain-soaked field.") and a complex sentence can be short ("If it rains, we leave.").',
    ],
    targetedSkills: [
      'SPaG',
      'Sentence Structure',
      'Punctuation',
      'Writing Craft',
      'Technical Accuracy',
    ],
  },

  // ── Lesson 5: Poetry Appreciation ────────────────────────────────────────
  {
    id: 'ks3-05-poetry-form-structure-language',
    title: 'Poetry Appreciation: Understanding Form, Structure & Language',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Understand the difference between form, structure, and language in poetry',
      'Identify key poetic forms including sonnet, ballad, free verse, and haiku',
      'Analyse how structural choices (enjambment, caesura, stanza breaks) create meaning',
      'Explore how language techniques (imagery, sound devices, word choice) contribute to a poem\'s effect',
    ],
    successCriteria: [
      'I can define form, structure, and language with examples from a poem',
      'I can identify the form of a given poem and explain its significance',
      'I can spot at least two structural features and explain their effect',
      'I can analyse language choices using appropriate terminology',
    ],
    keywords: [
      'form',
      'structure',
      'enjambment',
      'caesura',
      'stanza',
      'sonnet',
      'free verse',
      'imagery',
    ],
    starterActivity: {
      title: 'Shape Poem Challenge',
      duration: '7 minutes',
      instructions:
        'Display three poems written in unusual visual forms (e.g. a concrete poem shaped like its subject, a poem with very short lines, and a poem in one solid block). Without reading the words, ask students: "What can you tell about each poem just from looking at it?" Students discuss how the shape and layout of a poem gives clues about its content and tone. Teacher introduces the key idea: form and structure are not just containers for words — they are part of the poem\'s meaning.',
      differentiation: {
        support: 'Provide three simple observations to choose from for each poem shape.',
        core: 'Students explain how the visual layout suggests meaning in each poem.',
        stretch:
          'Students predict the subject or mood of each poem based solely on its form, then justify their reasoning.',
      },
      resources: ['Three poems displayed on slides (visual forms)'],
    },
    mainActivities: [
      {
        title: 'Form, Structure, Language Toolkit',
        duration: '18 minutes',
        instructions:
          'Introduce the three "lenses" for reading poetry: Form (what type of poem is it?), Structure (how is it organised?), Language (what words and techniques are used?). Using a shared poem appropriate for the year group (e.g. "Ozymandias" for Year 9, "The Tyger" for Year 7-8), teacher models annotating the poem through each lens using three different coloured pens. Students then receive a second poem and annotate it independently using the same three colours. Create a class definition wall with key terms for each lens: Form (sonnet, ballad, free verse, haiku, elegy); Structure (enjambment, caesura, volta, stanza, repetition, refrain); Language (metaphor, simile, personification, alliteration, sibilance, onomatopoeia).',
        differentiation: {
          support:
            'Provide an annotated example and a glossary of terms with definitions and examples for each lens.',
          core: 'Students annotate the second poem independently using all three colour-coded lenses.',
          stretch:
            'Students rank the most important features found and write a paragraph arguing which lens reveals the most about the poem\'s meaning.',
        },
        resources: [
          'Shared poem handout (teacher model)',
          'Second poem handout (independent work)',
          'Three coloured pens/highlighters per student',
          'Key terms glossary',
        ],
      },
      {
        title: 'Poetry Analysis in Practice',
        duration: '20 minutes',
        instructions:
          'Students work in groups of three, each assigned one lens (Form, Structure, or Language). Each student analyses the poem through their assigned lens and writes three key points. Groups then come together to share findings and collaboratively write a short analytical paragraph (five to six sentences) that draws on all three lenses. Two or three groups share their paragraphs with the class. Teacher highlights effective examples of integrated analysis.',
        differentiation: {
          support:
            'Assign the Language lens to students who need more support (as it is the most concrete and accessible). Provide sentence starters for their three points.',
          core: 'Students complete their assigned lens independently and contribute fully to the group paragraph.',
          stretch:
            'Students evaluate how the three lenses interact — for example, how does the form support the language choices? Write an additional sentence showing this connection.',
        },
        resources: [
          'Poem handout (same as main activity 1, second poem)',
          'Group roles cards (Form Expert, Structure Expert, Language Expert)',
          'Collaborative paragraph planning sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Quick-Fire Quiz: Form, Structure, or Language?',
      duration: '5 minutes',
      instructions:
        'Teacher reads out ten features (e.g. "enjambment", "metaphor", "sonnet", "caesura", "alliteration", "free verse", "stanza break", "simile", "ballad", "repetition"). Students hold up a card labelled F, S, or L to categorise each one. Teacher clarifies any common errors, particularly where features cross categories (e.g. repetition can be structural and linguistic).',
      differentiation: {
        support: 'Provide a reference sheet that students can check between answers.',
        core: 'Students answer independently from memory.',
        stretch:
          'Students explain any that could fit into more than one category and justify why.',
      },
    },
    homework:
      'Choose any poem you enjoy (from a book, the internet, or a song lyric). Annotate it using the three lenses (form, structure, language) and write a paragraph explaining which feature you think is most important to the poem\'s meaning.',
    worksheetQuestions: [
      {
        question:
          'Define "form", "structure", and "language" in poetry. Give one example of a feature for each.',
        lines: 6,
        modelAnswer:
          'Form refers to the type of poem — for example, a sonnet is a 14-line poem often about love. Structure refers to how the poem is organised and arranged — for example, enjambment is when a sentence runs over from one line to the next without punctuation. Language refers to the words and techniques the poet uses — for example, a metaphor describes something as if it is something else.',
        marks: 3,
      },
      {
        question:
          'What is enjambment? Give an example and explain the effect it might have on a reader.',
        lines: 4,
        modelAnswer:
          'Enjambment is when a line of poetry continues into the next line without any punctuation or pause. For example: "I wandered lonely as a cloud / That floats on high o\'er vales and hills." The enjambment creates a flowing, continuous feeling that mirrors the drifting movement of the cloud.',
        marks: 3,
      },
      {
        question:
          'Name three different poetic forms and briefly describe what makes each one distinctive.',
        lines: 5,
        modelAnswer:
          'A sonnet has 14 lines, often in iambic pentameter, and usually explores love or beauty — it typically has a volta (turn) near the end. A ballad tells a story, often with a regular rhyme scheme (ABAB) and a repeated refrain — it was traditionally sung. Free verse has no set rhyme scheme, rhythm, or line length, giving the poet complete freedom to match form to content.',
        marks: 4,
      },
      {
        question:
          'What is a caesura? Find or create an example and explain why a poet might use one.',
        lines: 4,
        modelAnswer:
          'A caesura is a pause in the middle of a line of poetry, usually created by punctuation. For example: "I am — yet what I am, none cares or knows." A poet might use a caesura to create a dramatic pause, emphasise a particular word, or show a shift in the speaker\'s thoughts or emotions.',
        marks: 3,
      },
      {
        question:
          'Read the following short poem and identify one example of form, one of structure, and one of language. For each, explain its effect.\n\n"Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light."',
        lines: 8,
        modelAnswer:
          'Form: This is from a villanelle — a highly repetitive form — which mirrors the speaker\'s desperate, repeated plea. Structure: The repetition of "rage, rage" at the start of the final line creates urgency and emphasis, mimicking the insistence of the speaker\'s message. Language: The metaphor "dying of the light" represents death, with "light" symbolising life and energy. This makes death feel like a gradual fading rather than a sudden event, encouraging the reader to resist it.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'Students often conflate form and structure. Keep reinforcing: form = the type of poem, structure = how it is organised within that form.',
      'Choose age-appropriate poems. For Year 7, Blake and classic narrative poems work well. For Year 8-9, Duffy, Armitage, and the Romantics are accessible.',
      'The group jigsaw activity (each student taking one lens) is highly effective for building collaborative skills and ensuring every student has a clear role.',
      'Display a permanent "Poetry Toolkit" poster in the classroom for reference throughout the year.',
    ],
    targetedSkills: [
      'Poetry Analysis',
      'Form and Structure',
      'Language Analysis',
      'Literary Terminology',
      'Annotation',
    ],
  },

  // ── Lesson 6: Persuasive Writing: Crafting Arguments & Using AFOREST ─────
  {
    id: 'ks3-06-persuasive-writing-aforest',
    title: 'Persuasive Writing: Crafting Arguments & Using AFOREST',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Understand the purpose and features of persuasive writing',
      'Learn and apply the AFOREST techniques (Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triples)',
      'Plan and write a persuasive paragraph using at least four AFOREST techniques',
      'Identify persuasive techniques in real-world examples',
    ],
    successCriteria: [
      'I can name all seven AFOREST techniques and give an example of each',
      'I can identify persuasive techniques in a real text',
      'I can write a persuasive paragraph using at least four AFOREST techniques',
      'I can explain why a specific technique is effective for the intended audience',
    ],
    keywords: [
      'persuasion',
      'rhetoric',
      'alliteration',
      'rhetorical question',
      'emotive language',
      'statistics',
      'triple',
      'counter-argument',
    ],
    starterActivity: {
      title: 'Would You Buy It?',
      duration: '8 minutes',
      instructions:
        'Display two adverts for the same product (e.g. a phone or trainer) — one bland and factual, one using persuasive techniques. Students discuss: which would make you buy the product and why? Elicit responses and list the techniques spotted on the board. Teacher introduces the lesson focus: persuasive writing is about making choices to influence your reader. Introduce the AFOREST acronym.',
      differentiation: {
        support: 'Provide a simple "What I notice" table to structure observations.',
        core: 'Students identify at least three differences between the two adverts and explain their effect.',
        stretch:
          'Students consider the target audience of each advert and explain how the techniques are tailored to that audience.',
      },
      resources: ['Two advert slides', 'AFOREST acronym display'],
    },
    mainActivities: [
      {
        title: 'AFOREST Technique Masterclass',
        duration: '18 minutes',
        instructions:
          'Work through each AFOREST technique one at a time. For each, display a definition, a real-world example (from speeches, adverts, or articles), and a model sentence students can use as a template. After each technique is introduced, students have 60 seconds to write their own example on the topic "School should start at 10am". By the end, students have a "persuasion toolkit" of seven self-written examples in their books. Teacher highlights that the best persuasive writing combines multiple techniques rather than using them in isolation.',
        differentiation: {
          support:
            'Provide a fill-in-the-gaps toolkit sheet where students complete partially written examples for each technique.',
          core: 'Students write their own original example for each technique independently.',
          stretch:
            'Students combine two or more techniques in a single sentence and explain why the combination is more effective.',
        },
        resources: [
          'AFOREST slides with definitions and examples',
          'Toolkit recording sheet',
          'Fill-in-the-gaps sheet (support tier)',
        ],
      },
      {
        title: 'Persuasive Writing: Plan and Write',
        duration: '20 minutes',
        instructions:
          'Students choose a topic from a selection (e.g. "Should school uniform be abolished?", "Should junk food adverts be banned?", "Should homework be optional?"). Using a planning grid, they plan a persuasive paragraph: (1) opening hook (rhetorical question or bold statement), (2) main argument with evidence, (3) AFOREST techniques to use, (4) powerful closing line. Students then write their paragraph (aim: 100-150 words). Final 5 minutes: students swap with a partner who reads and highlights every AFOREST technique they can spot, writing the technique name in the margin.',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters for each part of the paragraph. Students aim to include at least three AFOREST techniques.',
          core: 'Students plan and write independently, aiming for at least four AFOREST techniques.',
          stretch:
            'Students include a counter-argument and rebuttal within their paragraph, demonstrating a more sophisticated approach to persuasion.',
        },
        resources: [
          'Topic choice cards',
          'Planning grid handout',
          'Writing frame (support tier)',
          'Peer marking highlighter pens',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Persuasion Bingo',
      duration: '4 minutes',
      instructions:
        'Give each student a bingo card with nine AFOREST techniques and persuasive features. Teacher reads out example sentences. Students identify the technique used and cross it off their card. First to complete a line wins. Quick, energetic consolidation activity.',
      differentiation: {
        support: 'Provide a reference card alongside the bingo card.',
        core: 'Students play independently from memory.',
        stretch:
          'After bingo, students write one more example sentence for the technique they found hardest to identify.',
      },
    },
    homework:
      'Find a persuasive text in the real world (advert, charity leaflet, newspaper opinion piece, or online article). Identify at least four AFOREST techniques, copy out the examples, and explain why each is effective.',
    worksheetQuestions: [
      {
        question:
          'What does AFOREST stand for? Give a brief definition of each technique.',
        lines: 8,
        modelAnswer:
          'A = Alliteration: repeating the same starting sound for emphasis (e.g. "cruel, callous, and careless"). F = Facts: true statements that add credibility. O = Opinions: presented as if widely held ("Everyone agrees..."). R = Rhetorical questions: questions not expecting an answer, designed to make the reader think. E = Emotive language: words chosen to trigger an emotional response (e.g. "innocent children suffer"). S = Statistics: numbers and data to make arguments seem factual. T = Triples/Rule of Three: listing three things for emphasis and rhythm.',
        marks: 7,
      },
      {
        question:
          'Read the following sentence and identify TWO persuasive techniques: "Surely you agree that our brave, brilliant, breathtaking NHS deserves better?"',
        lines: 4,
        modelAnswer:
          'The sentence uses alliteration ("brave, brilliant, breathtaking") to create a memorable, rhythmic effect that emphasises the positive qualities of the NHS. It also uses a rhetorical question ("Surely you agree...?") to pressure the reader into agreeing with the writer\'s position by implying the answer is obvious.',
        marks: 4,
      },
      {
        question:
          'Why is emotive language a powerful persuasive tool? Give an example and explain its effect.',
        lines: 4,
        modelAnswer:
          'Emotive language is powerful because it appeals to the reader\'s feelings rather than logic, making them more likely to be swayed. For example, "Thousands of helpless animals are cruelly abandoned every winter" uses "helpless", "cruelly", and "abandoned" to trigger sympathy and outrage, motivating the reader to act.',
        marks: 3,
      },
      {
        question:
          'What is a counter-argument and why might a persuasive writer include one?',
        lines: 4,
        modelAnswer:
          'A counter-argument is the opposing viewpoint to the writer\'s position. A persuasive writer might include one to show they have considered other perspectives, which makes their argument seem more balanced and credible. They then rebut (disprove) the counter-argument, which strengthens their original point.',
        marks: 3,
      },
      {
        question:
          'Write a persuasive opening paragraph (4-5 sentences) arguing that all students should learn to cook at school. Use at least three AFOREST techniques and label them.',
        lines: 8,
        modelAnswer:
          '[Rhetorical question] How can we expect young people to thrive as adults if they cannot even feed themselves? [Statistic] Research shows that 60% of young adults rely on takeaways because they were never taught basic cooking skills. [Emotive language] This is a generation being failed — left hungry, unhealthy, and unprepared for independence. [Triple] Cooking teaches patience, creativity, and responsibility — skills that extend far beyond the kitchen. [Opinion] It is time every school made cooking a core part of the curriculum.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'AFOREST is a useful framework but encourage students to move beyond it as they develop — genuine persuasion also involves tone, structure, and audience awareness.',
      'Real-world examples are essential. Use adverts, charity campaigns, newspaper editorials, and political speeches wherever possible.',
      'The peer-marking activity (highlighting techniques in a partner\'s work) is very effective for consolidation and for building students\' ability to identify techniques.',
      'Consider linking this lesson to Speaking & Listening by having students deliver their persuasive paragraph as a speech next lesson.',
    ],
    targetedSkills: [
      'Persuasive Writing',
      'Rhetorical Devices',
      'Transactional Writing',
      'Audience Awareness',
      'AFOREST',
    ],
  },

  // ── Lesson 7: Shakespeare Introduction ───────────────────────────────────
  {
    id: 'ks3-07-shakespeare-language-introduction',
    title: 'Shakespeare Introduction: Understanding Shakespeare\'s Language',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Overcome initial barriers to understanding Shakespeare\'s language',
      'Learn key features of Early Modern English including pronouns, verb forms, and word order',
      'Translate Shakespeare\'s language into modern English and back again',
      'Begin to appreciate why Shakespeare\'s language choices are deliberate and powerful',
    ],
    successCriteria: [
      'I can explain at least three differences between Shakespeare\'s English and modern English',
      'I can translate a short passage of Shakespeare into modern English',
      'I can identify the meaning of common Shakespearean words (thou, thee, thy, hath, doth, hence, wherefore)',
      'I can explain why Shakespeare\'s original language is more powerful than a modern translation',
    ],
    keywords: [
      'Early Modern English',
      'thou',
      'thee',
      'thy',
      'hath',
      'iambic pentameter',
      'verse',
      'prose',
    ],
    starterActivity: {
      title: 'Shakespeare or Not?',
      duration: '7 minutes',
      instructions:
        'Display ten short phrases on the board — five are genuine Shakespeare quotes and five are made-up "ye olde" phrases. Students work in pairs to decide which are real Shakespeare. Reveal answers and discuss: what surprised you? Key teaching point: Shakespeare\'s language is not random or archaic gibberish — it follows clear patterns and rules. Many of his phrases are still used today (e.g. "break the ice", "wild goose chase", "heart of gold").',
      differentiation: {
        support: 'Provide a hint for each phrase (e.g. "This one is from a famous play about a prince").',
        core: 'Students identify the real Shakespeare quotes and explain their reasoning.',
        stretch:
          'Students try to identify which play each genuine quote comes from and explain what it might mean.',
      },
      resources: ['Shakespeare or Not? quiz slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Cracking the Code: Shakespeare\'s Language Rules',
        duration: '18 minutes',
        instructions:
          'Teach the key rules of Shakespeare\'s language through a "code-breaking" approach. Display a reference sheet covering: (1) Pronouns — thou/thee/thy = you/you/your (informal/singular), (2) Verb forms — hath = has, doth = does, art = are (with thou), ist = is, (3) Common words — hence = from here, hither = to here, wherefore = why (NOT where), pray/prithee = please, ere = before, (4) Word order — Shakespeare often inverts sentences for rhythm ("Happy am I" = "I am happy"). Students practise with ten translation exercises: five Shakespeare-to-modern and five modern-to-Shakespeare. Teacher models the first of each, then students work independently.',
        differentiation: {
          support:
            'Provide a reference card to keep throughout the unit. Translation exercises have the key words underlined to guide students.',
          core: 'Students complete all ten translations using the reference sheet, then check without it.',
          stretch:
            'Students complete translations and then write three original sentences in Shakespearean English, using correct pronouns and verb forms.',
        },
        resources: [
          'Shakespeare\'s Language Rules reference sheet',
          'Translation exercises handout',
          'Reference card (support — laminated for reuse)',
        ],
      },
      {
        title: 'Shakespeare Translation Challenge: A Real Extract',
        duration: '20 minutes',
        instructions:
          'Provide students with a short, accessible Shakespeare extract (8-10 lines) — e.g. Puck\'s final speech from A Midsummer Night\'s Dream, or the balcony scene opening from Romeo and Juliet. Working in pairs, students first translate the extract line by line into modern English. Then, the crucial question: "Which version is better and why?" Teacher leads a class discussion comparing the original and translations, highlighting how Shakespeare\'s word choices, rhythm, and imagery create effects that modern English cannot replicate. Students write three sentences explaining why Shakespeare\'s language is deliberately crafted, not just "old-fashioned".',
        differentiation: {
          support:
            'Provide a glossary for the extract with difficult words pre-translated. Students translate with partner support.',
          core: 'Students translate independently and write a comparison of the two versions.',
          stretch:
            'Students identify specific techniques in the extract (e.g. metaphor, alliteration, iambic pentameter) and explain how translation loses these effects.',
        },
        resources: [
          'Shakespeare extract handout',
          'Glossary sheet (support tier)',
          'Lined comparison writing space',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Shakespearean Insult Generator',
      duration: '5 minutes',
      instructions:
        'Display three columns of Shakespearean words (Column A: adjectives like "artless", "beslubbering", "churlish"; Column B: adjectives like "beetle-headed", "clay-brained", "elf-skinned"; Column C: nouns like "barnacle", "codpiece", "maggot-pie"). Students combine one word from each column to create a Shakespearean insult: "Thou [A] [B] [C]!" Volunteers share their best insults. Fun, memorable consolidation that proves Shakespeare\'s language is creative and playful.',
      differentiation: {
        support: 'Students choose from a simplified list of six words per column.',
        core: 'Students create two insults and translate them into modern English.',
        stretch:
          'Students create an insult and write a short context: which character might say this, to whom, and why?',
      },
    },
    homework:
      'Learn the ten key Shakespearean vocabulary words from the reference sheet. Write each one in a sentence that shows you understand its meaning. Test yourself: cover the modern English column and try to recall each meaning.',
    worksheetQuestions: [
      {
        question:
          'Translate the following into modern English: "Wherefore art thou Romeo?"',
        lines: 3,
        modelAnswer:
          '"Why are you Romeo?" — Juliet is not asking where Romeo is, but why he has to be a Montague (her family\'s enemy). "Wherefore" means "why", not "where".',
        marks: 2,
      },
      {
        question:
          'What is the difference between "thou" and "you" in Shakespeare\'s time?',
        lines: 3,
        modelAnswer:
          '"Thou" was the informal, intimate form used with close friends, family, or people of lower status. "You" was the formal, respectful form used with strangers, superiors, or in polite company. A character switching from "you" to "thou" could signal a change in relationship or emotion.',
        marks: 3,
      },
      {
        question:
          'Translate the following into Shakespearean English: "Why have you come here? Your father has gone before you arrived."',
        lines: 3,
        modelAnswer:
          '"Wherefore hast thou come hither? Thy father hath gone ere thou arrived."',
        marks: 3,
      },
      {
        question:
          'Name three phrases we use in modern English that were invented by Shakespeare.',
        lines: 3,
        modelAnswer:
          'Examples include: "break the ice" (The Taming of the Shrew), "wild goose chase" (Romeo and Juliet), "heart of gold" (Henry V), "in a pickle" (The Tempest), "green-eyed monster" (Othello), "full circle" (King Lear).',
        marks: 3,
      },
      {
        question:
          'Why is it important to study Shakespeare\'s language in its original form rather than just reading a modern translation? Give at least two reasons.',
        lines: 5,
        modelAnswer:
          'First, Shakespeare\'s original language contains deliberate techniques — such as iambic pentameter, metaphor, and wordplay — that are lost in translation. The rhythm and sound of the words are part of the meaning. Second, understanding Shakespeare\'s language builds transferable reading skills: if students can decode Early Modern English, they can tackle any challenging text with confidence. Third, the original language is what is assessed at GCSE and A-Level, so early familiarity gives students an advantage.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson should be taught before students begin any Shakespeare text at KS3. It removes the language barrier and builds confidence.',
      'Emphasise throughout that Shakespeare\'s language is not "wrong" or "broken" English — it is a different but perfectly logical system.',
      'The insult generator is always a highlight. Consider displaying the best insults on a classroom wall.',
      'Laminate the reference cards for support students to keep in their books throughout the Shakespeare unit.',
      'If time allows, show a short clip of Shakespeare performed well (e.g. Globe Theatre recordings) to demonstrate that the language comes alive when spoken.',
    ],
    targetedSkills: [
      'Shakespeare',
      'Reading Comprehension',
      'Language Analysis',
      'Translation',
      'Contextual Understanding',
    ],
  },

  // ── Lesson 8: Non-Fiction Reading: Identifying Bias, Fact & Opinion ──────
  {
    id: 'ks3-08-non-fiction-bias-fact-opinion',
    title: 'Non-Fiction Reading: Identifying Bias, Fact & Opinion',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Distinguish between facts and opinions in non-fiction texts',
      'Understand what bias means and how it manifests in writing',
      'Identify techniques writers use to disguise opinions as facts',
      'Evaluate the reliability and purpose of non-fiction texts',
    ],
    successCriteria: [
      'I can correctly classify statements as fact or opinion and explain my reasoning',
      'I can identify at least two examples of bias in a non-fiction text',
      'I can explain how a writer uses language to make an opinion sound like a fact',
      'I can evaluate how reliable a text is based on its purpose, audience, and language choices',
    ],
    keywords: [
      'fact',
      'opinion',
      'bias',
      'objectivity',
      'subjectivity',
      'reliability',
      'purpose',
      'audience',
    ],
    starterActivity: {
      title: 'Fact or Opinion? Quick-Fire Round',
      duration: '7 minutes',
      instructions:
        'Display fifteen statements on the board, one at a time. Students hold up an "F" card for fact or "O" card for opinion. Start with easy examples ("Paris is the capital of France" = fact; "Pizza is the best food" = opinion) then increase difficulty with statements that blur the line ("Scientists say that exercise improves mental health" — fact or opinion?). Discuss the tricky ones as a class. Key teaching point: some statements look like facts but are actually opinions in disguise.',
      differentiation: {
        support: 'Provide a definition card for fact and opinion to refer to during the activity.',
        core: 'Students classify independently and explain their reasoning for tricky ones.',
        stretch:
          'Students rewrite three "opinion" statements to make them sound more like facts, and explain how they did it.',
      },
      resources: ['Fifteen-statement slide deck', 'F/O cards (per student)'],
    },
    mainActivities: [
      {
        title: 'Spot the Bias: Newspaper Comparison',
        duration: '20 minutes',
        instructions:
          'Provide students with two newspaper articles reporting on the same event but from different perspectives (e.g. a tabloid and a broadsheet, or two papers with different political leanings). Students read both articles and complete a comparison table: (1) What facts are included in both? (2) What facts are included in one but not the other? (3) What opinions are presented? (4) What language choices reveal the writer\'s bias? Teacher models the first row of the table, then students work in pairs to complete the rest. Class discussion: can any news report ever be completely unbiased?',
        differentiation: {
          support:
            'Pre-highlight key sentences in both articles and provide a simplified comparison table with sentence starters.',
          core: 'Students complete the comparison table independently and identify at least three examples of bias.',
          stretch:
            'Students write a paragraph evaluating which article is more reliable and why, considering purpose, audience, and ownership.',
        },
        resources: [
          'Two newspaper articles (printed handouts)',
          'Comparison table worksheet',
          'Simplified table with starters (support tier)',
        ],
      },
      {
        title: 'The Bias Detector: Language Analysis',
        duration: '18 minutes',
        instructions:
          'Focus on how language creates bias. Display six techniques writers use: (1) Emotive language to trigger feelings, (2) Loaded words with strong connotations, (3) Omission — leaving out inconvenient facts, (4) Generalisation — "everyone thinks...", (5) Expert citation used selectively, (6) Passive voice to hide responsibility ("Mistakes were made"). Students return to the newspaper articles and identify at least one example of each technique. Then, students write their own biased report (five to six sentences) about a school event, deliberately using three bias techniques. Partner reads and identifies the techniques used.',
        differentiation: {
          support:
            'Provide a bias techniques card with definitions and examples. Students identify three techniques in the articles.',
          core: 'Students identify all six techniques and write their own biased report.',
          stretch:
            'Students write the same event twice — once with positive bias and once with negative bias — then annotate the techniques used in each.',
        },
        resources: [
          'Bias techniques slide',
          'Newspaper articles (from activity 1)',
          'Bias techniques card (support tier)',
          'Lined writing paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reliability Rating',
      duration: '5 minutes',
      instructions:
        'Display four different non-fiction text types (e.g. a Wikipedia article, a charity campaign poster, a scientific journal abstract, and a social media post). Students rate each from 1 (least reliable) to 5 (most reliable) on their mini-whiteboards and explain their reasoning. Teacher consolidates: reliability depends on purpose, evidence, and how the text handles fact vs opinion.',
      differentiation: {
        support: 'Provide two reasons to choose from for each text type.',
        core: 'Students rate and give one reason for each.',
        stretch:
          'Students explain a scenario in which even the "least reliable" text might be useful.',
      },
    },
    homework:
      'Find two online articles about the same topic (e.g. a news event, a product review, or a social issue). Write a comparison (150 words) identifying how each article shows bias. Include at least three specific examples of language choices.',
    worksheetQuestions: [
      {
        question:
          'Define "fact" and "opinion". Give two examples of each.',
        lines: 4,
        modelAnswer:
          'A fact is a statement that can be proven to be true or false — e.g. "The Earth orbits the Sun" and "Water boils at 100 degrees Celsius." An opinion is a personal belief or judgement that cannot be definitively proven — e.g. "Summer is the best season" and "Dogs are better pets than cats."',
        marks: 3,
      },
      {
        question:
          'What does "bias" mean? Why is it important to identify bias in non-fiction texts?',
        lines: 4,
        modelAnswer:
          'Bias is when a writer favours one side of an argument or presents information in a way that influences the reader\'s opinion. It is important to identify bias because it helps us read critically, question what we are told, and make informed decisions rather than being manipulated by one-sided information.',
        marks: 3,
      },
      {
        question:
          'Read the following sentence: "The reckless new policy will devastate hard-working families." Identify TWO ways the writer shows bias.',
        lines: 4,
        modelAnswer:
          'First, the adjective "reckless" is a loaded word that presents the policy negatively without evidence — it is the writer\'s opinion disguised as description. Second, "hard-working families" uses emotive language to make the reader sympathise with those affected and feel that the policy is unjust.',
        marks: 4,
      },
      {
        question:
          'Explain three techniques a writer might use to make their opinion sound like a fact.',
        lines: 5,
        modelAnswer:
          'First, they might use generalisation: "Everyone knows that..." or "It is widely accepted that..." to make their opinion seem universal. Second, they might cite statistics selectively, choosing only data that supports their viewpoint. Third, they might use the passive voice ("It has been proven that...") to make a claim sound objective and authoritative even when the evidence is weak.',
        marks: 4,
      },
      {
        question:
          'Why might two newspaper articles about the same event tell very different stories? Give at least two reasons.',
        lines: 5,
        modelAnswer:
          'First, newspapers have different political leanings and owners, which influence what stories are covered and how they are presented. Second, different newspapers target different audiences (e.g. tabloids vs broadsheets), so they select details and language to appeal to their readers\' values and interests. Third, journalists make choices about which facts to include or omit, which sources to quote, and which angle to take — these choices inevitably introduce bias.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is increasingly vital for digital literacy. Students need to evaluate online content critically.',
      'Use recent, real articles where possible — students are more engaged when the topic is current and recognisable.',
      'The "write your own biased report" activity is powerful because it shows students how easy it is to manipulate language.',
      'Be sensitive to political balance in the classroom — use this as an opportunity to develop critical thinking, not to promote any viewpoint.',
      'Consider linking to PSHE/citizenship: media literacy, misinformation, and social media critical consumption.',
    ],
    targetedSkills: [
      'Reading Comprehension',
      'Critical Evaluation',
      'Non-Fiction Analysis',
      'Media Literacy',
      'Bias Detection',
    ],
  },

  // ── Lesson 9: Narrative Writing: Story Structure, Openings & Endings ─────
  {
    id: 'ks3-09-narrative-writing-story-structure',
    title: 'Narrative Writing: Story Structure, Openings & Endings',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Understand classic story structures including Freytag\'s Pyramid and the five-part narrative arc',
      'Analyse effective story openings and identify different opening techniques',
      'Explore how endings create impact: twist endings, circular structure, and ambiguous endings',
      'Plan and write an effective opening and ending for a short story',
    ],
    successCriteria: [
      'I can label the five stages of a narrative arc (exposition, rising action, climax, falling action, resolution)',
      'I can identify at least three different types of story opening and explain their effects',
      'I can write an engaging opening paragraph using a deliberate technique',
      'I can write an ending that links to my opening and leaves an impact on the reader',
    ],
    keywords: [
      'narrative arc',
      'exposition',
      'climax',
      'resolution',
      'in medias res',
      'flashback',
      'foreshadowing',
      'circular structure',
    ],
    starterActivity: {
      title: 'First Lines: Which Book Would You Read?',
      duration: '7 minutes',
      instructions:
        'Display the opening lines of six well-known books (e.g. "It was a bright cold day in April, and the clocks were striking thirteen" — 1984; "Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much" — Harry Potter). Students rank them from most to least intriguing and explain why. Class discussion: what makes a great opening line? List features on the board (mystery, action, unusual detail, voice, setting).',
      differentiation: {
        support: 'Provide a word bank for describing effects: "intriguing", "mysterious", "exciting", "unusual".',
        core: 'Students rank and explain their reasoning for their top and bottom choices.',
        stretch:
          'Students identify the specific technique each opening uses and categorise them (e.g. action opening, mystery opening, character opening).',
      },
      resources: ['Six opening lines slide'],
    },
    mainActivities: [
      {
        title: 'The Narrative Arc: Mapping Story Structure',
        duration: '15 minutes',
        instructions:
          'Introduce Freytag\'s Pyramid / the five-part narrative arc using a well-known story (e.g. a fairy tale or a film all students know). Display the arc on the board: Exposition (setting and characters) -> Rising Action (problems develop) -> Climax (turning point) -> Falling Action (consequences) -> Resolution (ending). Students then work in pairs to map a story they know well onto the arc, labelling each stage on a blank pyramid template. Two or three pairs share their examples. Teacher emphasises: knowing the arc helps you as a writer to plan a story with proper pacing — most weak stories rush the rising action and climax.',
        differentiation: {
          support:
            'Provide a completed example pyramid for a well-known fairy tale as a model. Students map a second story with guided prompts.',
          core: 'Students map their chosen story independently onto the blank pyramid.',
          stretch:
            'Students identify stories that deliberately break the arc (e.g. starting at the climax, stories without resolution) and explain why the writer made that choice.',
        },
        resources: [
          'Narrative arc diagram slide',
          'Blank pyramid template handout',
          'Completed fairy tale example (support tier)',
        ],
      },
      {
        title: 'Writing Openings & Endings Workshop',
        duration: '25 minutes',
        instructions:
          'Part 1 (12 mins): Teach five opening techniques: (1) In medias res — starting in the middle of the action, (2) Mystery/question — raising an unanswered question, (3) Setting description — establishing atmosphere, (4) Dialogue — starting with speech, (5) Flashforward/flashback — playing with time. Students choose a story idea from a prompt card and write three different opening paragraphs using three different techniques. Part 2 (13 mins): Teach three ending techniques: (1) Circular structure — echoing the opening, (2) Twist ending — surprising the reader, (3) Ambiguous ending — leaving questions unanswered. Students choose the best opening they wrote and write a matching ending paragraph using one of the three techniques. Emphasis: the opening and ending should feel connected.',
        differentiation: {
          support:
            'Provide model opening and ending paragraphs to study. Students write two openings (not three) and choose one ending technique with sentence starters.',
          core: 'Students write three openings and one ending independently, making deliberate technique choices.',
          stretch:
            'Students write all three openings and all three endings, then select the most effective combination and write a paragraph justifying their choice.',
        },
        resources: [
          'Five opening techniques handout',
          'Three ending techniques handout',
          'Story prompt cards',
          'Model paragraphs (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Opening Line Challenge',
      duration: '3 minutes',
      instructions:
        'Students write one killer opening line on a sticky note — no more than one sentence. Stick them all on the board anonymously. Teacher reads a selection aloud and the class votes on the top three. Celebrate strong examples and identify the techniques used.',
      differentiation: {
        support: 'Provide a structural template: "[Action/Description], [mystery/detail]."',
        core: 'Students write independently, aiming for maximum impact.',
        stretch:
          'Students must use a specific technique announced by the teacher (e.g. "in medias res only").',
      },
    },
    homework:
      'Write the opening (one paragraph) and ending (one paragraph) of a short story based on the prompt: "The door should never have been opened." Use a deliberate opening technique and a deliberate ending technique. Label which techniques you have used.',
    worksheetQuestions: [
      {
        question:
          'Label the five stages of the narrative arc and briefly describe what happens at each stage.',
        lines: 6,
        modelAnswer:
          'Exposition: the setting, characters, and situation are introduced. Rising Action: problems and conflicts develop, building tension. Climax: the turning point of the story — the moment of highest tension or drama. Falling Action: the consequences of the climax unfold. Resolution: the story reaches its conclusion and loose ends are tied up (or deliberately left open).',
        marks: 5,
      },
      {
        question:
          'Name three different types of story opening and give a brief example of each.',
        lines: 6,
        modelAnswer:
          'In medias res: "The glass shattered, and I ran." This opens in the middle of the action, immediately creating urgency. Mystery opening: "Nobody could explain what happened that Tuesday — and nobody ever tried." This raises an unanswered question. Dialogue opening: "\'Don\'t open that,\' she whispered." This drops the reader directly into a conversation.',
        marks: 4,
      },
      {
        question:
          'What is a "circular structure" in narrative writing? Why might a writer choose to use one?',
        lines: 4,
        modelAnswer:
          'A circular structure is when the ending echoes or mirrors the opening, bringing the story full circle. A writer might use this to create a sense of completeness and satisfaction, to show how a character has changed (or hasn\'t), or to reinforce a key theme. For example, a story that opens and closes with the same setting but with the character viewing it differently.',
        marks: 3,
      },
      {
        question:
          'What is "in medias res"? Why is it an effective way to start a story?',
        lines: 4,
        modelAnswer:
          '"In medias res" is Latin for "in the middle of things." It means starting a story in the middle of the action rather than at the beginning. It is effective because it immediately grabs the reader\'s attention, creates questions they want answered, and avoids slow, boring exposition.',
        marks: 3,
      },
      {
        question:
          'Write a twist ending (2-3 sentences) for the following story opening: "For ten years, I had been receiving letters from my brother, posted from a small village in France."',
        lines: 5,
        modelAnswer:
          'I stepped off the train in the village, clutching the most recent letter, and asked at the post office. The woman behind the counter frowned. "Monsieur, this village has been abandoned for fifteen years. No one has lived here since the flood."',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson pairs well with Lesson 3 (Creative Writing: Show Don\'t Tell) — students can apply both skills together in a longer writing assessment.',
      'Use stories and films students know to make the narrative arc accessible. Popular choices: The Hunger Games, Wonder, Harry Potter, or Disney films.',
      'Encourage students to plan their stories using the arc before writing — this prevents the common problem of starting with no idea where the story is going.',
      'The opening and ending workshop can be extended over two lessons for deeper practice if needed.',
      'Display the five opening techniques as a permanent classroom poster for reference.',
    ],
    targetedSkills: [
      'Narrative Writing',
      'Creative Writing',
      'Story Structure',
      'Writing Craft',
      'Planning',
    ],
  },

  // ── Lesson 10: Speaking & Listening ──────────────────────────────────────
  {
    id: 'ks3-10-speaking-listening-presenting-argument',
    title: 'Speaking & Listening: Presenting an Argument Confidently',
    text: 'KS3 English Skills',
    board: 'Universal',
    yearGroup: 'Year 7-9',
    duration: '60 minutes',
    objectives: [
      'Understand the key features of an effective spoken argument',
      'Plan a structured spoken argument using a clear framework (claim, reasons, evidence, conclusion)',
      'Use vocal techniques (pace, pause, emphasis, tone) and body language to enhance delivery',
      'Listen actively and respond to others\' arguments with respect and critical thinking',
    ],
    successCriteria: [
      'I can plan a one-minute spoken argument with a clear claim, at least two reasons, and evidence',
      'I can deliver my argument using at least two vocal techniques deliberately',
      'I can maintain eye contact and use open body language while speaking',
      'I can listen to a partner\'s argument and offer one piece of constructive feedback',
    ],
    keywords: [
      'argument',
      'claim',
      'evidence',
      'rhetoric',
      'pace',
      'pause',
      'emphasis',
      'body language',
    ],
    starterActivity: {
      title: 'Great Speakers: What Makes Them Effective?',
      duration: '8 minutes',
      instructions:
        'Play a 60-second clip of a powerful speech (e.g. Martin Luther King\'s "I Have a Dream", Greta Thunberg at the UN, or Marcus Rashford on child food poverty). Students watch once for content, then again focusing on delivery. In pairs, list three things the speaker does well. Class feedback: teacher categorises responses into "What they say" (content/structure) and "How they say it" (delivery/voice/body). Key message: great speaking is a skill that can be learned — it is not just about being naturally confident.',
      differentiation: {
        support: 'Provide a checklist of features to listen/watch for during the clip.',
        core: 'Students identify three features independently across content and delivery.',
        stretch:
          'Students explain why specific delivery choices (e.g. a pause before a key word) are effective, linking to audience impact.',
      },
      resources: ['Speech video clip (60 seconds)', 'Speaker analysis checklist'],
    },
    mainActivities: [
      {
        title: 'Building Your Argument: Plan & Prepare',
        duration: '18 minutes',
        instructions:
          'Students choose a debate topic from a selection (e.g. "Social media does more harm than good", "School holidays should be longer", "PE should be optional", "Zoos should be banned"). Using a planning grid, they structure their one-minute argument: (1) Opening hook — a bold statement or rhetorical question, (2) Claim — their clear position, (3) Reason 1 + evidence or example, (4) Reason 2 + evidence or example, (5) Counter-argument acknowledgement + rebuttal, (6) Powerful closing statement. Teacher models a complete plan on the board for a different topic. Students write their plan and then practise saying it aloud to themselves, timing to ensure it fits within one minute.',
        differentiation: {
          support:
            'Provide a planning grid with sentence starters for each section. Students prepare three sections (hook, one reason, closing).',
          core: 'Students plan all six sections independently and practise delivery.',
          stretch:
            'Students plan a full argument, include a counter-argument and rebuttal, and experiment with where to place a dramatic pause for maximum effect.',
        },
        resources: [
          'Debate topic cards',
          'Argument planning grid',
          'Planning grid with starters (support tier)',
          'Timers',
        ],
      },
      {
        title: 'Delivery Masterclass & Practice',
        duration: '20 minutes',
        instructions:
          'Part 1 (8 mins): Teach four key delivery techniques. (1) Pace — slow down for important points, speed up for urgency. (2) Pause — silence before or after a key point creates emphasis. (3) Emphasis — stress key words to make them stand out. (4) Eye contact and body language — stand tall, use open gestures, look at your audience. Students practise each technique with a simple sentence: "This. Must. Stop." (emphasis and pause), "We cannot keep ignoring this problem" (pace variation). Part 2 (12 mins): Students deliver their one-minute argument to a partner. Partner listens and completes a feedback form: one strength and one target, plus a score out of five for content and delivery. Students then have three minutes to refine their argument based on feedback and deliver it a second time. If time allows, two or three confident volunteers deliver to the whole class.',
        differentiation: {
          support:
            'Students can read from their plan for the first delivery. Focus on one delivery technique (e.g. eye contact only). Partner provides verbal feedback using a simple "I liked... Next time try..." frame.',
          core: 'Students deliver from notes (not reading word for word) and use at least two delivery techniques. Written feedback form.',
          stretch:
            'Students deliver without notes, incorporating all four delivery techniques. They also respond to a follow-up question from their partner after delivering.',
        },
        resources: [
          'Delivery techniques slide',
          'Partner feedback form',
          'Simple feedback frame (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Thing I Learned, One Thing I\'ll Try',
      duration: '4 minutes',
      instructions:
        'Students write on a sticky note: one thing they learned about effective speaking today, and one specific thing they will try to do next time they speak in front of others. Volunteers share. Teacher collects and uses to plan follow-up opportunities for speaking practice across the term.',
      differentiation: {
        support: 'Provide sentence stems: "I learned that... Next time I will try to...".',
        core: 'Students reflect independently and write specific, actionable targets.',
        stretch:
          'Students also write one piece of advice they would give to a younger student about public speaking.',
      },
    },
    homework:
      'Practise delivering your one-minute argument at home (to a family member, a mirror, or a phone recording). Write a short reflection (5-6 sentences): What went well? What felt awkward? What would you change? If you recorded yourself, note one thing you noticed about your delivery.',
    worksheetQuestions: [
      {
        question:
          'Name four vocal techniques a speaker can use to make their argument more persuasive.',
        lines: 4,
        modelAnswer:
          'Pace: varying speed to create urgency or emphasise importance. Pause: deliberate silence to let a key point land. Emphasis: stressing particular words to draw attention. Tone: adjusting the emotional quality of the voice (e.g. passionate, serious, calm) to match the content and engage the audience.',
        marks: 4,
      },
      {
        question:
          'Why is body language important during a spoken argument? Give two specific examples.',
        lines: 4,
        modelAnswer:
          'Body language reinforces the speaker\'s message and conveys confidence. For example, maintaining eye contact with the audience makes the speaker appear trustworthy and engaging. Standing with open posture (arms uncrossed, shoulders back) projects confidence and authority, making the audience more likely to be persuaded.',
        marks: 3,
      },
      {
        question:
          'What is the difference between hearing and active listening? Why is active listening important during a debate?',
        lines: 4,
        modelAnswer:
          'Hearing is simply receiving sound, while active listening involves focusing on what is being said, thinking about the content, and preparing a thoughtful response. Active listening is important in debate because it allows you to respond directly to your opponent\'s points, identify weaknesses in their argument, and show respect — which makes the audience more likely to respect you in return.',
        marks: 3,
      },
      {
        question:
          'Plan a short spoken argument (hook, claim, two reasons with evidence, closing) on the topic: "Reading for pleasure should be a compulsory part of every school day."',
        lines: 8,
        modelAnswer:
          'Hook: "Imagine a world where every child leaves school unable to concentrate for more than thirty seconds. That world is closer than you think." Claim: "Reading for pleasure should be compulsory in every school day." Reason 1: Research by the National Literacy Trust shows that students who read for pleasure perform better across all subjects, not just English. Reason 2: In a world dominated by screens, dedicated reading time teaches focus, empathy, and resilience — skills no app can replicate. Closing: "If we truly believe education is about preparing young people for life, then we must give them the one habit proven to change it: reading."',
        marks: 5,
      },
      {
        question:
          'A speaker says: "Um... so basically... I think, like, maybe we should probably... sort of... ban homework?" Identify three problems with this delivery and suggest how to fix each one.',
        lines: 6,
        modelAnswer:
          'First, filler words ("um", "like", "sort of") undermine confidence — fix by replacing them with pauses, which sound more deliberate and powerful. Second, hedging language ("maybe", "probably") weakens the claim — fix by stating the position boldly: "We should ban homework." Third, "so basically" and "I think" are unnecessary qualifiers — fix by removing them and starting with a strong hook or rhetorical question instead.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson works best in a space where students can stand and move. Consider using the hall or rearranging desks into a horseshoe.',
      'Speaking confidence varies enormously at KS3. Never force reluctant speakers to present to the whole class in early lessons — pair work is sufficient.',
      'The partner feedback structure is crucial. Model how to give kind, specific, and helpful feedback before students begin.',
      'Record willing volunteers (with permission) so they can self-review — this is extremely powerful for improvement.',
      'Build regular speaking opportunities into your scheme of work: class debates, discussion starters, and short presentations throughout the year.',
      'Link explicitly to Lesson 6 (Persuasive Writing) — the AFOREST techniques transfer directly to spoken arguments.',
    ],
    targetedSkills: [
      'Speaking and Listening',
      'Rhetoric',
      'Persuasive Speaking',
      'Active Listening',
      'Presentation Skills',
    ],
  },
];
