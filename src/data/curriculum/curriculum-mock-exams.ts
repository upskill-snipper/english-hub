// ─── Curriculum Mock Assessments ──────────────────────────────────────────────
// End-of-term assessment papers aligned to each year group's curriculum.
// These are KS3 and pre-GCSE assessments, not external exam board papers.

export type CurriculumQuestionType =
  | 'analytical-response'
  | 'creative-writing'
  | 'reflective-writing'
  | 'comparative-response'
  | 'speech-writing'
  | 'transactional-writing'
  | 'extract-response'
  | 'socratic-prep'
  | 'media-project'
  | 'spoken-presentation'

export interface CurriculumQuestion {
  id: string
  questionNumber: number
  questionText: string
  marks: number
  suggestedTimeMinutes: number
  questionType: CurriculumQuestionType
  /** Optional stimulus extract or prompt material */
  extract?: string
  extractSource?: string
  /** Bullet-point guidance for students */
  guidance?: string[]
  /** Model answer keyed by attainment descriptor */
  modelAnswers: Record<string, string>
  /** Mark scheme bullet points */
  markScheme: string[]
}

export interface CurriculumSection {
  id: string
  title: string
  description: string
  totalMarks: number
  suggestedTimeMinutes: number
  questions: CurriculumQuestion[]
}

export interface GradeDescriptor {
  grade: string
  description: string
  markRange: string
}

export interface CurriculumAssessment {
  id: string
  title: string
  yearGroup: 7 | 8 | 9
  termUnit: string
  duration: number
  totalMarks: number
  sections: CurriculumSection[]
  markScheme: string[]
  gradeDescriptors: GradeDescriptor[]
  modelAnswers: Record<string, string>
}

// ─── Extracts and Stimulus Material ─────────────────────────────────────────

const Y7_T1_EXTRACT = `The boy stood at the edge of the playground, watching. He had been watching for three days now - ever since he arrived at this school with its unfamiliar corridors and its rules that nobody had explained to him. The other children moved in groups, their laughter a language he hadn't yet learned to speak.

His name was Kofi, and he had come from Accra six weeks ago. In Accra, he had been the fastest runner in his class, the one who always had a joke ready, the boy whose smile could light up a room. Here, he was nobody. Here, he was the quiet one, the new one, the one whose accent made people lean forward and say "Sorry, what?" until he stopped talking altogether.

Mrs Henderson had told him to "give it time." His mother had told him to "be brave." But bravery, Kofi was discovering, was not a single dramatic act. It was not slaying a dragon or rescuing someone from a fire. Bravery was walking into the canteen alone. Bravery was raising your hand in class when you knew the answer but feared the sound of your own voice. Bravery was getting up every morning and putting on a uniform for a school that did not yet feel like yours.

On the fourth day, a girl with red hair and a gap between her front teeth sat down next to him on the bench. She didn't say anything at first. She just sat there, eating an apple, looking at the same sky he was looking at. Then she said, "I'm Maisie. I was new last year. It gets better."

Three words. It gets better. Kofi turned them over in his mind like smooth stones.`

const Y7_T1_EXTRACT_SOURCE = 'Original fiction: "The Fourth Day"'

const Y7_T3_POEM_A = `My parents kept me from children who were rough
Who threw words like stones and who wore torn clothes
Their thighs showed through rags. They ran in the street
And climbed cliffs and stripped by the country streams.

I feared more than tigers their muscles like iron
Their jerking hands and their knees tight on my arms
I feared the salt coarse pointing of those boys
Who copied my lisp behind me on the road.`

const Y7_T3_POEM_A_SOURCE =
  'Stephen Spender, "My Parents" (in-copyright; verify exact wording against authoritative edition before classroom use - the rendered text is paraphrased)'

const Y7_T3_POEM_B = `Half-caste? Explain yuself
wha yu mean
when yu say half-caste
yu mean when Picasso
mix red an green
is a half-caste canvas?

Explain yuself
wha yu mean
when yu say half-caste
yu mean when light an shadow
mix in de sky
is a half-caste weather?`

const Y7_T3_POEM_B_SOURCE =
  'John Agard, "Half-Caste" (in-copyright; verify exact wording against authoritative edition - the rendered text is paraphrased lines from the poem)'

const Y8_T1_EXTRACT = `The factory floor stretched before her like a grey ocean. Row upon row of machines, each one attended by a figure hunched over spinning thread, each pair of hands moving with the mechanical rhythm of the loom itself. Mary was twelve years old. She had been twelve years old for six months now, though the foreman had written "fourteen" on her employment card without looking up.

The air was thick with cotton dust. It settled on everything - hair, skin, lungs. The older workers coughed constantly, a wet, rattling sound that punctuated the clatter of the machines like a second rhythm. Mary had been told not to worry about the cough. "You get used to it," said Elsie, the girl at the next loom, who was fifteen and looked thirty. "Your body adjusts."

But Mary's body had not adjusted to the twelve-hour shifts, or to the cold that seeped through the factory walls in winter, or to the overseer who carried a leather strap and used it on anyone whose production fell below the quota. She had not adjusted to the fact that her wages - three shillings and sixpence a week - went directly to her father, who spent a portion of it at the public house on Friday evenings while Mary ate bread and dripping for supper.

She had a recurring dream in which she could read. In the dream, she sat in a room full of books, and the words on the pages made perfect sense, and she read for hours without anyone telling her to stop. When she woke, the dream dissolved like the cotton dust, and she walked to the factory in the dark.`

const Y8_T1_EXTRACT_SOURCE = 'Original historical fiction: "The Mill Girl"'

const Y8_T2_SHAKESPEARE_EXTRACT = `PROSPERO:
Ye elves of hills, brooks, standing lakes, and groves,
And ye that on the sands with printless foot
Do chase the ebbing Neptune and do fly him
When he comes back; you demi-puppets that
By moonshine do the green sour ringlets make,
Whereof the ewe not bites; and you whose pastime
Is to make midnight mushrooms, that rejoice
To hear the solemn curfew; by whose aid,
Weak masters though ye be, I have bedimmed
The noontide sun, called forth the mutinous winds,
And 'twixt the green sea and the azured vault
Set roaring war; to the dread rattling thunder
Have I given fire, and rifted Jove's stout oak
With his own bolt; graves at my command
Have waked their sleepers, oped, and let 'em forth
By my so potent art. But this rough magic
I here abjure, and, when I have required
Some heavenly music, which even now I do,
To work mine end upon their senses that
This airy charm is for, I'll break my staff,
Bury it certain fathoms in the earth,
And deeper than did ever plummet sound
I'll drown my book.`

const Y8_T2_SHAKESPEARE_SOURCE = 'William Shakespeare, The Tempest, Act 5 Scene 1'

const Y9_T1_EXTRACT = `"Are there no prisons?" asked Scrooge.

"Plenty of prisons," said the gentleman.

"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"

"They are. Still," returned the gentleman, "I wish I could say they were not."

"The Treadmill and the Poor Law are in full vigour, then?" said Scrooge.

"Both very busy, sir."

"Oh! I was afraid, from what you said at first, that something had occurred to stop them in their useful course," said Scrooge. "I'm very glad to hear it."

"I don't think you quite understand what I'm about to say," continued the gentleman. "A few of us are endeavouring to raise a fund to buy the Poor some meat and drink, and means of warmth. We choose this time, because it is a time, of all others, when Want is keenly felt, and Abundance rejoices. What shall I put you down for?"

"Nothing!" Scrooge replied.

"You wish to be anonymous?"

"I wish to be left alone," said Scrooge. "Since you ask me what I wish, gentlemen, that is my answer. I don't make merry myself at Christmas and I can't afford to make idle people merry. I help to support the establishments I have mentioned - they cost enough; and those who are badly off must go there."

"Many can't go there; and many would rather die."

"If they would rather die," said Scrooge, "they had better do it, and decrease the surplus population."

The gentleman shook his head and left the room.`

const Y9_T1_EXTRACT_SOURCE = 'Charles Dickens, A Christmas Carol (1843), Stave One'

const Y9_T3_OMAM_EXTRACT = `Curley's wife lay on her side in the hay, and she was still. The sun streaks were high on the wall by now, and the light was growing soft in the barn. The halter chains rattled and some horses snorted and stomped in the stalls. From outside came the clang of horseshoes on the iron stake, and the shouts of men, playing, encouraging, jeering. For a very long moment the barn was silent.

Then Candy came shuffling in, looking for Lennie. His face was tense as he said, "Lennie? You in here? I been figurin' some more." He looked around and saw Curley's wife. A moment passed before the old man realised what he was seeing, then he went quickly to her. "Oh, Jesus Christ!" he whispered, and he reached out his hand and touched her cheek.

Candy looked about helplessly, and from outside the voices and the horseshoe clinks died slowly from his hearing. He understood. He backed away from the body, then turned and went out of the barn and up the path towards the bunk house. He tried to speak but nothing came from his lips. At last he managed: "Tell Lennie not to come back. Tell Lennie. Tell George."

Outside, far away, the men played the horseshoe game with great energy and pleasure.`

const Y9_T3_OMAM_EXTRACT_SOURCE =
  "Original composition in the style of Steinbeck's Of Mice and Men (in-copyright; do not cite as Steinbeck verbatim)"

// ─── Year 7 Assessments ─────────────────────────────────────────────────────

const y7Assessments: CurriculumAssessment[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 - TERM 1: Analytical Response (Character/Theme)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y7-t1-analytical',
    title: 'Term 1 Assessment: Analytical Response - Character and Theme',
    yearGroup: 7,
    termUnit: 'Term 1',
    duration: 45,
    totalMarks: 40,
    sections: [
      {
        id: 'y7-t1-reading',
        title: 'Section A: Reading',
        description: 'Read the extract below carefully, then answer the question that follows.',
        totalMarks: 20,
        suggestedTimeMinutes: 25,
        questions: [
          {
            id: 'y7-t1-q1',
            questionNumber: 1,
            questionText:
              "How does the writer present Kofi's experience of starting a new school?\n\nYou should consider:\n- how the writer uses language to show Kofi's feelings\n- how the structure of the extract builds the reader's understanding of his experience\n- the effect on the reader.",
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analytical-response',
            extract: Y7_T1_EXTRACT,
            extractSource: Y7_T1_EXTRACT_SOURCE,
            guidance: [
              'Use Point-Evidence-Explain paragraphs',
              'Embed short quotations from the extract',
              'Comment on the effect of specific words and techniques',
              'Consider how the writer builds sympathy for Kofi',
            ],
            modelAnswers: {
              'Working Towards':
                'The writer shows that Kofi is lonely at his new school. He is "watching" the other children which shows he is not joining in. He came from Accra and misses his old school where he was "the fastest runner." The writer uses the word "nobody" to show how Kofi feels invisible. At the end, Maisie sits next to him and says "it gets better" which gives him hope.',
              Expected:
                'The writer presents Kofi\'s experience through a powerful contrast between his identity in Accra and his new anonymity. The tricolon "the quiet one, the new one, the one whose accent made people lean forward" reduces Kofi to a series of labels, stripping away the vibrant personality described earlier - "the fastest runner," "the one who always had a joke ready." This structural juxtaposition forces the reader to feel the loss of identity that accompanies displacement. The metaphor of laughter as "a language he hadn\'t yet learned to speak" is particularly effective: it suggests that belonging is not simply about words but about shared understanding, and positions Kofi as someone who must learn an entirely new way of being. The writer redefines bravery through anaphora - "Bravery was walking into the canteen alone. Bravery was raising your hand" - transforming it from something heroic into something ordinary and daily, which makes Kofi\'s struggle more relatable. The final simile, turning Maisie\'s words over "like smooth stones," suggests he is holding onto something small but solid - a tiny, tangible piece of comfort.',
              'Greater Depth':
                'The writer constructs Kofi\'s experience as a study in the relationship between language, identity, and belonging. The opening positions him as an observer - "watching" - and the temporal marker "three days" establishes a pattern of sustained exclusion. The extract operates through a structural irony: in Accra, Kofi was defined by action and connection ("fastest runner," "smile could light up a room"), but in England, he is defined by absence and negation ("he was nobody," "he stopped talking altogether"). The metaphor of laughter as an unlearned language is sophisticated because it implies that social belonging operates through codes as complex and arbitrary as linguistic ones - a thematic concern that resonates with postcolonial readings of cultural displacement. The writer\'s redefinition of bravery through the anaphoric structure is rhetorically powerful: by listing mundane acts ("walking into the canteen," "raising your hand"), the writer democratises courage and simultaneously elevates the difficulty of Kofi\'s daily experience. The final image - words turned over "like smooth stones" - carries connotations of both worry (rubbing a worry stone) and discovery (finding treasure on a beach), capturing the ambivalence of hope that is still fragile. Structurally, the extract moves from isolation to the first tentative moment of connection, but the writer resists a neat resolution: Maisie\'s "It gets better" is a promise, not a fulfilment.',
            },
            markScheme: [
              'Identifies relevant language techniques (metaphor, simile, tricolon, anaphora)',
              'Analyses the effect of specific words and phrases on the reader',
              'Comments on structural choices (contrast, shift, progression)',
              'Embeds quotations rather than bolt-on',
              'Shows understanding of how character and theme are connected',
              'Top band: perceptive, conceptualised analysis with alternative interpretations',
            ],
          },
        ],
      },
      {
        id: 'y7-t1-writing',
        title: 'Section B: Writing',
        description: 'Complete the writing task below.',
        totalMarks: 20,
        suggestedTimeMinutes: 20,
        questions: [
          {
            id: 'y7-t1-q2',
            questionNumber: 2,
            questionText:
              'Write the opening of a story about a character who feels like an outsider.\n\nYou should:\n- create a vivid sense of character\n- use language techniques to show (not tell) their feelings\n- consider how you structure your writing for effect.',
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'creative-writing',
            guidance: [
              'Plan before you write - who is your character? Why do they feel like an outsider?',
              'Use a range of sentence types for effect',
              'Include at least two language techniques (e.g. metaphor, simile, personification)',
              'Think about your opening sentence - hook the reader',
            ],
            modelAnswers: {
              'Working Towards':
                "The classroom was noisy and everyone was talking to their friends. I sat at the back and nobody noticed me. I felt invisible, like I wasn't really there. The teacher started calling out names from the register and when she got to mine she said it wrong. Everyone turned around to look at me and I wanted the ground to swallow me up. I stared at my desk and wished I was somewhere else.",
              Expected:
                "The chair was plastic and cold - the kind of cold that seeps through your school trousers and settles into your bones. Around me, the classroom hummed with conversations I wasn't part of: whispered jokes, shared sweets passed under desks, the easy shorthand of people who had known each other since primary school.\n\nI arranged my pencil case. I arranged it again. The zip was broken, so I'd safety-pinned it shut that morning, and now the safety pin caught the light like a tiny, defiant flag: I am here. I am trying.\n\nWhen Mrs Gardiner called the register, she paused at my name. Not a long pause - half a second, maybe less - but long enough for twenty-seven heads to turn. Long enough for someone in the second row to whisper something that made the boy beside her snort into his hand.",
              'Greater Depth':
                "There is a particular quality of silence that belongs to the person who has not been invited to speak. It is not the silence of contentment, or of concentration, or of sleep. It is a watchful silence - taut as a wire, humming with the effort of appearing relaxed while every nerve is cataloguing the room: who sits with whom, which desks are claimed and which are exile, where the borders of belonging are drawn.\n\nAnya knew this silence. She wore it like a second uniform.\n\nThe classroom was doing what classrooms do at 8:47 on a Tuesday morning - shedding coats, comparing homework, performing the small theatre of friendship that looks effortless from the outside and is, she suspected, anything but. Two girls by the window were laughing at something on a phone screen. A boy was balancing a ruler on his finger. Ordinary choreography. A dance she knew the steps to but could not seem to join.\n\nHer desk was by the radiator, which should have been a good thing but wasn't, because the radiator made a ticking sound, irregular and insistent, and sitting next to it meant that any silence Anya occupied was never quite silent. Tick. Tick-tick. Tick. Like a clock counting down to something she couldn't name.",
            },
            markScheme: [
              'Creates a convincing character with clear sense of interiority',
              'Uses language techniques deliberately for effect (metaphor, simile, sensory detail)',
              'Varies sentence structures for pace and emphasis',
              "Shows rather than tells the character's emotions",
              'Engages the reader from the opening',
              'Top band: assured, crafted writing with a distinctive voice',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Reading): 20 marks - analytical response on character and theme',
      'Section B (Writing): 20 marks - creative writing opening',
      'Total: 40 marks',
      'Reading and Writing weighted equally (50/50)',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive, conceptualised analysis with sophisticated language use; assured creative writing with a distinctive voice and deliberate craft.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, developed analysis with relevant textual support; effective creative writing with conscious use of techniques.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Some relevant comments with basic textual reference; narrative writing with some conscious choices.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited response with minimal textual engagement; simple narrative with limited technique.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Reading - Greater Depth': 'See Section A model answer at Greater Depth level.',
      'Writing - Greater Depth': 'See Section B model answer at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 - TERM 2.1: Reflective Writing on Identity + Spoken Presentation
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y7-t2-1-reflective',
    title: 'Term 2.1 Assessment: Reflective Writing on Identity and Spoken Presentation',
    yearGroup: 7,
    termUnit: 'Term 2.1',
    duration: 50,
    totalMarks: 40,
    sections: [
      {
        id: 'y7-t2-1-writing',
        title: 'Section A: Reflective Writing',
        description:
          'Complete the reflective writing task below. You will have 30 minutes for this section.',
        totalMarks: 25,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'y7-t2-1-q1',
            questionNumber: 1,
            questionText:
              'Write a reflective piece exploring an aspect of your identity that is important to you.\n\nThis could be about your cultural background, a personal interest, a family tradition, a moment that shaped who you are, or something else entirely.\n\nYou should:\n- write in the first person\n- reflect honestly and thoughtfully\n- use descriptive language to bring your experiences to life\n- consider what this aspect of your identity means to you and why it matters.',
            marks: 25,
            suggestedTimeMinutes: 30,
            questionType: 'reflective-writing',
            guidance: [
              'Choose something genuinely meaningful to you',
              'Include specific details and memories - these make reflective writing powerful',
              'Balance description (what happened) with reflection (what it means)',
              'Use a range of language techniques to create vivid writing',
              'Consider ending with a forward-looking thought',
            ],
            modelAnswers: {
              'Working Towards':
                "Something that is important to my identity is my love of cooking with my grandmother. Every Sunday she makes a big meal and I help her. She teaches me recipes from Jamaica that her mother taught her. I like it because it makes me feel connected to my family. The food is really good and the kitchen always smells amazing. When I cook with my grandma I feel happy and like I belong somewhere. I want to keep learning her recipes so I can make them when I'm older.",
              Expected:
                'My grandmother\'s kitchen smells of thyme and scotch bonnet and something else I\'ve never been able to name - something warm and yeasty that clings to your clothes and follows you home on the bus. Every Sunday, I stand beside her at the counter while she transforms raw ingredients into something that tastes like history.\n\n"You have to feel the dough," she tells me, pressing my hands into the flour mixture. "Your hands will know when it\'s ready before your head does." She says this every week, and every week I believe her a little more.\n\nI am thirteen years old, and I am still learning who I am. But I know this: I am the granddaughter of a woman who left Kingston in 1971 with one suitcase and a recipe book held together with elastic bands, and who rebuilt her world one meal at a time. When I cook her food, I am not just making dinner. I am continuing a conversation that started before I was born - a conversation between generations, between continents, between the woman my grandmother was and the woman I am becoming.',
              'Greater Depth':
                'There is a moment, just before the dough is ready, when it changes under your hands. It goes from sticky and resistant to smooth, elastic, alive. My grandmother calls this "the turning" - the point at which ingredients stop being separate things and become something new. She says you cannot rush it. She says you have to trust the process, even when it looks like nothing is happening.\n\nI think about the turning a lot, actually. Not just in the kitchen, but in life.\n\nMy grandmother came to England in 1971 from Kingston, Jamaica. She was twenty-three, newly married, and she carried a suitcase that weighed more than she did because she had packed her mother\'s recipe book - a battered exercise book filled with measurements in "handfuls" and "pinches" and "enough." I have seen this book. Its pages are translucent with grease and age, annotated in three different handwritings: my great-grandmother\'s, my grandmother\'s, and now, tentatively, mine.\n\nIdentity, I am learning, is not a fixed thing. It is not a box you tick on a form or a flag you wave. It is more like bread dough - a mixture of what you inherit and what you add, shaped by the pressure of your own hands, transformed by time and heat into something that nourishes. When I stand in my grandmother\'s kitchen on Sundays, flour on my school uniform, Radio 4 competing with a reggae playlist from my phone, I am occupying the space between her world and mine. I am both Jamaican and South London, both traditional and modern, both her granddaughter and my own person.\n\nThe turning has not happened yet. I am still sticky, still resisting, still becoming. But my grandmother is patient. She says my hands will know.',
            },
            markScheme: [
              'Writes with genuine personal voice and authentic reflection',
              'Balances description and reflection effectively',
              'Uses specific, concrete details to anchor abstract ideas',
              'Employs language techniques with deliberate effect',
              'Structures the piece with a clear sense of progression',
              'Top band: sophisticated, assured reflective voice with conceptual depth',
            ],
          },
        ],
      },
      {
        id: 'y7-t2-1-spoken',
        title: 'Section B: Spoken Presentation',
        description:
          'Prepare and deliver a 2-3 minute spoken presentation based on your reflective writing. You will have 20 minutes to prepare, then present to your class.',
        totalMarks: 15,
        suggestedTimeMinutes: 20,
        questions: [
          {
            id: 'y7-t2-1-q2',
            questionNumber: 2,
            questionText:
              'Using your reflective writing as a starting point, prepare and deliver a 2-3 minute spoken presentation about an aspect of your identity.\n\nYou will be assessed on:\n- clarity and confidence of delivery\n- engagement with your audience\n- the quality and depth of your ideas\n- your use of spoken language techniques (rhetorical questions, anecdote, direct address).',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'spoken-presentation',
            guidance: [
              'Adapt your written piece for a spoken audience - you are talking to your class, not reading an essay',
              'Make eye contact with different people in the room',
              'Vary your tone and pace for effect',
              'Include at least one direct address to the audience and one rhetorical question',
              'Practise your timing - 2-3 minutes is approximately 300-450 words spoken aloud',
            ],
            modelAnswers: {
              'Working Towards':
                'Delivers presentation with some confidence. Makes occasional eye contact. Content is relevant but reads mostly from notes. Some awareness of audience but limited use of spoken techniques.',
              Expected:
                'Delivers presentation with clear confidence and mostly sustained eye contact. Adapts written content effectively for spoken delivery. Uses at least two spoken techniques (e.g. rhetorical question, anecdote, direct address). Engages the audience with personal, authentic content. Varies tone and pace at key moments.',
              'Greater Depth':
                'Delivers with assured confidence and natural eye contact throughout. Spoken delivery feels genuine and conversational rather than rehearsed. Uses a range of rhetorical techniques with sophistication. Engages the audience emotionally and intellectually. Demonstrates awareness of how spoken language differs from written language. Responds to audience reactions with flexibility.',
            },
            markScheme: [
              'Clarity of delivery: 5 marks - audible, well-paced, confident',
              'Audience engagement: 5 marks - eye contact, direct address, responsive',
              'Quality of ideas: 5 marks - depth, authenticity, insight',
              'Use of spoken techniques assessed holistically across all three criteria',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Reflective Writing): 25 marks',
      'Section B (Spoken Presentation): 15 marks',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Assured, distinctive reflective voice with conceptual depth; confident, engaging spoken presentation with sophisticated rhetorical awareness.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, personal reflective writing with effective language choices; competent spoken presentation with conscious engagement techniques.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Some personal reflection with basic detail; spoken presentation delivered with some confidence.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited reflection with minimal personal engagement; hesitant spoken delivery with little audience awareness.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Overall Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 - TERM 2.2: Creative Writing from Character Perspective
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y7-t2-2-creative',
    title: 'Term 2.2 Assessment: Creative Writing from a Character Perspective',
    yearGroup: 7,
    termUnit: 'Term 2.2',
    duration: 45,
    totalMarks: 40,
    sections: [
      {
        id: 'y7-t2-2-main',
        title: 'Creative Writing',
        description:
          'Choose ONE of the following tasks. You have 45 minutes including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'y7-t2-2-q1',
            questionNumber: 1,
            questionText:
              'Write a diary entry from the perspective of a character who has witnessed an act of injustice.\n\nYou should:\n- write in first person, using the conventions of diary writing\n- create a convincing character voice that reveals their personality and emotions\n- use descriptive language to bring the scene to life\n- show how the character feels about what they have witnessed and what they think should be done.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            guidance: [
              'Plan your character: who are they? How old? What is their personality?',
              'Plan the injustice: what happened? Who was involved? Where?',
              'Remember diary conventions: date, informal tone, personal reflection',
              'Balance narrative (what happened) with emotional response (how it felt)',
              'Consider: does your character act, or do they remain a bystander?',
            ],
            modelAnswers: {
              'Working Towards':
                "Tuesday 14th March\n\nDear Diary,\n\nToday something really bad happened at school. I saw a group of older kids picking on this boy in our year called Samuel. They were calling him names and pushing him and nobody did anything about it. I felt really angry but I was too scared to say anything because they might have picked on me too. Samuel looked really upset and I felt sorry for him. I think someone should tell a teacher but I don't want to be called a snitch. I don't know what to do.",
              Expected:
                "Tuesday 14th March\n\nI can't stop thinking about it.\n\nIt happened at lunch, by the bike sheds - that strip of concrete where the teachers never go because it's technically \"out of bounds,\" which really means it's where the rules stop applying. Samuel was sitting on the wall, eating his sandwich, bothering nobody. He's the kind of person who takes up as little space as possible, as if he's constantly apologising for existing.\n\nThey surrounded him. Three of them. I don't want to write their names because putting names on a page makes things real, and I'm not ready for this to be real yet. They didn't hit him - not at first. They just stood very close and spoke very quietly, which was somehow worse than shouting because it meant they knew exactly what they were doing. Calculated. That's the word. It was calculated.\n\nI watched. I stood behind the science block and I watched the whole thing through the window reflection, and I did nothing. My hands were shaking and my heart was going like a drum but my feet stayed exactly where they were, rooted to the ground like they'd made a decision my brain hadn't agreed to.\n\nThe worst part? When it was over, Samuel picked up his sandwich, brushed off the dirt, and kept eating. As if this was normal. As if this was just what Tuesdays looked like.",
              'Greater Depth':
                "Tuesday 14th March - 11:47 PM\n\nI am writing this with the bedside lamp angled away from the door so Mum won't see the light and tell me to sleep. I don't think I could sleep if I tried. My brain is a projector stuck on the same frame.\n\nHere is what happened. Here is what I did. Here is what I didn't do.\n\nLunchtime. The bike sheds. Samuel Okafor sitting on the low wall with his lunchbox balanced on his knees, reading a book - actually reading, the way nobody our age reads any more, with his whole face involved, his eyebrows going up at the interesting parts. I noticed this because I was walking past and I thought: there is someone who has found a way to be happy alone.\n\nThen they arrived. I won't write their names. Names are power, and I refuse to give them any more than they've already taken.\n\nThey didn't shout. That's what people don't understand about cruelty - it doesn't always roar. Sometimes it whispers. Sometimes it stands very close and speaks in a voice so low it could be mistaken for kindness, if you weren't watching the way the person on the receiving end flinched at every word like each syllable was a small, precise incision.\n\nI was fifteen metres away. Fifteen metres. I have measured it in my mind, over and over, as if the distance matters - as if there is some threshold of proximity beyond which cowardice becomes understandable. There isn't. Fifteen metres or fifteen centimetres - I saw, and I stayed silent, and that silence is a choice I will carry.\n\nSamuel didn't cry. He didn't shout. When they left, he closed his book carefully - marking his page, as if pages still mattered - and he picked up the sandwich they had knocked from his hand and he continued to eat it. The dignity of that. The terrible, quiet dignity.\n\nI want to say that tomorrow I will be brave. I want to say that I will find Samuel and I will say: I saw, and I'm sorry, and it was wrong. But I have been brave before in my diary and cowardly in the corridor, and I no longer trust the version of myself that writes by lamplight.\n\nSo I will say only this: something happened today that was not right. I know it was not right because my body told me - the racing heart, the shaking hands, the sick feeling that hasn't left. The body knows injustice before the mind finds words for it.\n\nTomorrow I will try. That is not a promise. It is the most honest thing I can write.",
            },
            markScheme: [
              'Creates a convincing, distinctive character voice',
              'Uses diary conventions effectively (date, direct address, personal tone)',
              'Describes the scene with vivid, specific detail',
              'Balances narrative with emotional and moral reflection',
              'Uses a range of language techniques with deliberate effect',
              'Demonstrates control of structure within the diary format',
              'Top band: assured, sophisticated writing with a compelling voice and moral complexity',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Content and ideas: 12 marks - originality, depth, moral engagement',
      'Structure and organisation: 8 marks - coherent progression, effective paragraphing',
      'Sentence control and variety: 8 marks - range of sentence types, deliberate effects',
      'Vocabulary and language techniques: 8 marks - ambitious word choices, effective techniques',
      'Spelling, punctuation, grammar: 4 marks - accuracy and range',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Assured, compelling writing with a distinctive voice; sophisticated control of language and structure; genuine moral complexity.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Effective creative writing with a clear character voice; conscious use of techniques and diary conventions; some depth of reflection.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Basic diary entry with some character voice; describes events with some personal response; limited range of techniques.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Simple recount with minimal diary conventions; limited character voice and basic vocabulary.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth Example': 'See main question model answer at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 - TERM 3.1: Socratic Seminar Preparation + Analytical Paragraph
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y7-t3-1-socratic',
    title: 'Term 3.1 Assessment: Socratic Seminar Preparation and Analytical Paragraph',
    yearGroup: 7,
    termUnit: 'Term 3.1',
    duration: 45,
    totalMarks: 35,
    sections: [
      {
        id: 'y7-t3-1-prep',
        title: 'Section A: Socratic Seminar Preparation',
        description:
          'Read the poem below. Prepare discussion notes that demonstrate your understanding of the poem and develop thoughtful discussion questions.',
        totalMarks: 15,
        suggestedTimeMinutes: 20,
        questions: [
          {
            id: 'y7-t3-1-q1',
            questionNumber: 1,
            questionText:
              'Read the poem "My Parents" by Stephen Spender.\n\n(a) Write a brief summary of what the poem is about (3 marks).\n(b) Identify and explain TWO language techniques the poet uses and their effects (6 marks).\n(c) Write THREE thoughtful discussion questions about the poem that would generate interesting debate in a seminar (6 marks).',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'socratic-prep',
            extract: Y7_T3_POEM_A,
            extractSource: Y7_T3_POEM_A_SOURCE,
            guidance: [
              "For (a): summarise the situation, the speaker's feelings, and the key theme",
              'For (b): name the technique, quote the example, explain the effect',
              'For (c): good discussion questions are open-ended, provoke debate, and connect to bigger ideas',
            ],
            modelAnswers: {
              'Working Towards':
                '(a) The poem is about a child whose parents kept them away from rough children. The speaker was scared of these children who were tough and made fun of them.\n\n(b) The poet uses a simile "words like stones" to show that what the rough children said was hurtful and painful. He also uses the word "feared" which is repeated to show how scared the speaker was.\n\n(c) 1. Why did the parents keep the child away? 2. Is the speaker angry at the rough children? 3. Do you think the speaker wished they could play with the other children?',
              Expected:
                '(a) The poem explores the speaker\'s childhood experience of being socially separated from working-class children by protective parents. While the speaker was sheltered, they were simultaneously fascinated by and terrified of the rough children\'s physicality and freedom, creating a complex emotional response of fear, envy, and alienation.\n\n(b) The simile "words like stones" equates language with physical violence, suggesting that verbal cruelty was as damaging as any blow. The concrete noun "stones" makes the pain tangible and real. The metaphor "muscles like iron" presents the rough children\'s bodies as industrial and hard, dehumanising them slightly while also conveying the speaker\'s sense of their overwhelming physical power.\n\n(c) 1. Is the poem criticising the parents\' decision to shelter their child, or suggesting it was understandable? What evidence supports both readings? 2. The speaker describes fearing the rough children but also watching them closely - could this be read as admiration as well as fear? 3. To what extent is this poem about social class rather than childhood?',
              'Greater Depth':
                '(a) Spender\'s poem examines how class division is perpetuated through parental protectiveness, creating a speaker who is simultaneously sheltered and isolated. The rough children represent a freedom the speaker is denied - physical, linguistic, uninhibited - yet this freedom is inseparable from threat. The poem\'s central tension lies in the speaker\'s inability to resolve their fear and fascination.\n\n(b) The simile "words like stones" operates on multiple levels: it equates the rough children\'s language with weaponry, but "stones" also connotes something natural and unrefined - their cruelty is not sophisticated but primal. This reflects the speaker\'s perception of them as fundamentally different creatures. The verb "copied" in "copied my lisp behind me on the road" is devastating in its specificity - it implies the speaker has a speech impediment, and the rough children\'s mimicry targets not just behaviour but identity. The preposition "behind me" adds a spatial dimension of hidden cruelty - the mockery happens just out of sight, making it inescapable yet unconfrontable.\n\n(c) 1. The speaker never names the rough children - they remain "they" throughout. How does this anonymity affect our reading of the poem, and what does it suggest about the speaker\'s relationship with them? 2. Is the real "roughness" in this poem the children\'s behaviour, or the class system that separates them? 3. How might the rough children\'s version of this story differ - and does the poem invite us to consider their perspective?',
            },
            markScheme: [
              "(a) Summary: 3 marks - identifies situation, speaker's feelings, and key theme",
              '(b) Techniques: 3 marks each - names technique, quotes accurately, explains effect',
              '(c) Questions: 2 marks each - open-ended, thought-provoking, grounded in the text',
            ],
          },
        ],
      },
      {
        id: 'y7-t3-1-paragraph',
        title: 'Section B: Analytical Paragraph',
        description: 'Write one developed analytical paragraph in response to the question below.',
        totalMarks: 20,
        suggestedTimeMinutes: 25,
        questions: [
          {
            id: 'y7-t3-1-q2',
            questionNumber: 2,
            questionText:
              'How does Spender present the relationship between the speaker and the "rough" children in "My Parents"?\n\nWrite ONE well-developed analytical paragraph. You should:\n- make a clear point about the relationship\n- support it with evidence from the poem\n- analyse the effect of specific words and techniques\n- consider alternative interpretations where possible.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analytical-response',
            extract: Y7_T3_POEM_A,
            extractSource: Y7_T3_POEM_A_SOURCE,
            modelAnswers: {
              'Working Towards':
                'Spender presents the relationship as one of fear. The speaker says "I feared more than tigers their muscles like iron" which shows how scared they were of the rough children. The simile "more than tigers" exaggerates the fear, making the children seem as dangerous as wild animals. The rough children are described as physical and threatening, with "jerking hands" and "knees tight on my arms," which shows they were violent. The speaker was kept apart from them by their parents, which created a divide between them.',
              Expected:
                'Spender constructs the relationship between the speaker and the rough children as one defined by simultaneous fear and fascination, suggesting that class division creates not just separation but a kind of distorted intimacy. The speaker "feared more than tigers their muscles like iron" - the comparative "more than tigers" elevates the children to the status of something exotic and powerful, while the simile "like iron" associates them with industrial strength and hardness. Yet the level of detail in the speaker\'s observations - "their thighs showed through rags," "they ran in the street and climbed cliffs" - reveals an intensity of watching that goes beyond mere fear. The speaker is cataloguing these children with the precision of someone who has studied them closely, which implies a fixation that might be read as envy: they possess a physical freedom that the speaker, constrained by parental protection, can never access. The poem therefore presents not a simple victim-aggressor dynamic but a complex triangulation between the speaker\'s fear, desire, and exclusion.',
              'Greater Depth':
                'Spender presents the relationship as one characterised by what might be termed fearful longing - the speaker is repelled by the rough children\'s violence yet drawn to their unregulated freedom, creating a tension that the poem refuses to resolve. The simile "I feared more than tigers their muscles like iron" is layered: "tigers" connotes both danger and beauty, exoticism and power, suggesting the speaker\'s fear is inseparable from a kind of awe. The shift from the natural world ("tigers") to the industrial ("iron") traces the children\'s symbolic identity - they are simultaneously wild and hardened, products of both nature and socioeconomic circumstance. Crucially, the speaker\'s observations are rendered with an almost voyeuristic specificity: "their thighs showed through rags," "stripped by the country streams." There is a physicality to these images that implies the speaker has watched with an attention that exceeds fear - they have noticed bodies, movement, skin. This positions the rough children not simply as threats but as possessors of an embodied freedom that the speaker, imprisoned by propriety and parental anxiety, can never claim. The final image - "copied my lisp behind me on the road" - is structurally devastating: the children\'s mockery targets the speaker\'s most intimate vulnerability (their voice, their speech), and the preposition "behind" ensures this cruelty operates just beyond reach, in the space where the speaker\'s awareness and helplessness overlap.',
            },
            markScheme: [
              'Makes a clear, arguable point about the relationship',
              'Selects apt evidence and embeds quotations',
              'Analyses the effect of specific language choices',
              'Considers alternative or layered interpretations',
              'Writes in a sustained, academic register',
              'Top band: conceptualised argument with perceptive, layered analysis',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Socratic Prep): 15 marks - summary, technique analysis, discussion questions',
      'Section B (Analytical Paragraph): 20 marks - analysis, evidence, interpretation',
      'Total: 35 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          "Perceptive analysis with layered interpretations; sophisticated discussion questions that probe the poem's ambiguities.",
        markRange: '29-35',
      },
      {
        grade: 'Expected',
        description:
          'Clear analysis with well-selected evidence; thoughtful discussion questions that go beyond surface meaning.',
        markRange: '21-28',
      },
      {
        grade: 'Working Towards',
        description:
          "Some relevant analysis with basic evidence; discussion questions that address the poem's content.",
        markRange: '13-20',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited analysis with minimal evidence; simple or closed discussion questions.',
        markRange: '0-12',
      },
    ],
    modelAnswers: {
      'Overall Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 - TERM 3.2: Comparative Poetry Response
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y7-t3-2-poetry',
    title: 'Term 3.2 Assessment: Comparative Poetry Response',
    yearGroup: 7,
    termUnit: 'Term 3.2',
    duration: 50,
    totalMarks: 40,
    sections: [
      {
        id: 'y7-t3-2-comparison',
        title: 'Comparative Poetry Response',
        description: 'Read both poems carefully, then answer the question below.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'y7-t3-2-q1',
            questionNumber: 1,
            questionText:
              'Compare how the poets present the theme of identity and belonging in "My Parents" by Stephen Spender and the extract from "Half-Caste" by John Agard.\n\nYou should compare:\n- the ideas and attitudes in each poem\n- the poets\' use of language and form\n- the effects on the reader.\n\nRemember to write about BOTH poems throughout your response.',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'comparative-response',
            extract: Y7_T3_POEM_A + '\n\n---\n\n' + Y7_T3_POEM_B,
            extractSource: Y7_T3_POEM_A_SOURCE + ' / ' + Y7_T3_POEM_B_SOURCE,
            guidance: [
              'Plan before you write - identify 3-4 points of comparison',
              'Write about BOTH poems in every paragraph (do not write about one then the other)',
              'Use comparative connectives: similarly, in contrast, whereas, both, however',
              'Analyse specific language choices and their effects',
              'Consider how form and structure differ between the poems',
            ],
            modelAnswers: {
              'Working Towards':
                'Both poems are about identity and not fitting in. In "My Parents," the speaker is kept away from rough children and feels different from them. In "Half-Caste," the speaker is challenging people who call him "half-caste" and is angry about being labelled. Both poets feel like outsiders but in different ways - Spender\'s speaker is quiet and scared, while Agard\'s speaker is loud and confrontational. Spender uses similes like "muscles like iron" to describe the rough children, while Agard uses examples like Picasso mixing colours to challenge the idea of being "half." Both poems make the reader think about how we judge people who are different from us.',
              Expected:
                'Both Spender and Agard explore how identity is shaped by the perceptions of others, but they adopt strikingly different tones and strategies. Spender\'s speaker is passive, defined by what he is kept from ("my parents kept me from children who were rough"), positioning identity as something imposed by parental anxiety. Agard, by contrast, is aggressively assertive: the imperative "Explain yuself" places the burden of justification on the person who uses the label, reclaiming linguistic power. Where Spender\'s speaker internalises his difference - fearing "the salt coarse pointing of those boys" - Agard externalises the absurdity of categorisation through reductio ad absurdum: if mixing red and green makes "a half-caste canvas," then Picasso himself is diminished by the logic of the term.\n\nFormally, the poems embody their speakers\' positions. Spender writes in controlled, conventional stanzas that mirror the middle-class propriety that separates his speaker from the rough children. Agard\'s lack of standard punctuation and his use of Caribbean dialect ("yuself," "wha yu mean") enact a deliberate rejection of the linguistic norms that the label "half-caste" enforces - his form is a political statement. Both poems therefore demonstrate that identity is not just a personal matter but a social and linguistic construction.',
              'Greater Depth':
                'Spender and Agard both interrogate how identity is constructed through difference, but their poetic strategies reveal fundamentally opposed relationships with power. Spender\'s speaker occupies a position of social privilege - "kept" safe by protective parents - yet experiences this privilege as a form of imprisonment. The verb "kept" is crucial: it is the language of captivity, suggesting that class separation confines both sides. Agard\'s speaker, by contrast, has been labelled from without by the term "half-caste" and responds by systematically dismantling the logic of the label. Where Spender\'s identity is defined by exclusion from a group he fears and envies, Agard\'s is defined by a category imposed upon him that he refuses to accept.\n\nThe poems\' contrasting uses of language enact their speakers\' different strategies of resistance. Spender\'s simile "I feared more than tigers their muscles like iron" aestheticises the rough children - making them exotic and powerful - which inadvertently dehumanises them, revealing how class prejudice operates even within empathy. Agard\'s analogies - Picasso mixing colours, light and shadow mixing in the sky - work inversely: they humanise and elevate the concept of mixture, reframing hybridity as artistry rather than deficiency. The juxtaposition is illuminating: Spender\'s figurative language distances, while Agard\'s connects.\n\nFormally, the poems mirror their speakers\' agency. Spender\'s traditional stanzaic structure and standard English reflect a speaker who, despite his discomfort, remains within the system that separates him. Agard\'s fragmented lines, absent punctuation, and phonetic dialect spelling perform a structural rebellion - the poem\'s form refuses the linguistic conventions that the term "half-caste" polices. Spender whispers his dissent; Agard shouts his. Yet both poems ultimately arrive at the same recognition: that identity categories - "rough," "half-caste" - are constructions that serve power, and that the act of writing about them is itself a form of resistance.',
            },
            markScheme: [
              'Compares ideas and attitudes across both poems throughout',
              'Analyses specific language techniques and their effects in both poems',
              'Comments on form and structural differences',
              'Uses comparative connectives to link points',
              'Embeds quotations from both poems',
              'Maintains an academic, analytical register',
              'Top band: perceptive, conceptualised comparison with sophisticated argument',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Comparison of ideas/attitudes: 12 marks',
      'Analysis of language: 12 marks',
      'Comment on form/structure: 8 marks',
      'Quality of written response: 8 marks',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive, sustained comparison with sophisticated analysis of both poems; conceptualised understanding of how form and language create meaning.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, comparative response with relevant analysis of both poems throughout; comments on language and form with some insight.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Some comparison between the poems with basic analysis; tends to write about poems separately rather than comparatively.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited comparison with minimal analysis; writes about one poem much more than the other.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See comparative response model answer at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 - END OF YEAR: Combined Reading and Writing Assessment
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y7-eoy',
    title: 'End of Year Assessment: Combined Reading and Writing',
    yearGroup: 7,
    termUnit: 'End of Year',
    duration: 60,
    totalMarks: 50,
    sections: [
      {
        id: 'y7-eoy-reading',
        title: 'Section A: Reading',
        description: 'Read the extract below carefully, then answer both questions.',
        totalMarks: 30,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'y7-eoy-q1',
            questionNumber: 1,
            questionText:
              "How does the writer use language to present Kofi's feelings about his new school?\n\nYou should consider the writer's choice of words, phrases, and language techniques.",
            marks: 15,
            suggestedTimeMinutes: 17,
            questionType: 'analytical-response',
            extract: Y7_T1_EXTRACT,
            extractSource: Y7_T1_EXTRACT_SOURCE,
            modelAnswers: {
              'Working Towards':
                'The writer shows Kofi is lonely by saying he was "watching" the other children. The word "nobody" shows he feels invisible. The writer says laughter was "a language he hadn\'t yet learned to speak" which is a metaphor showing he doesn\'t understand how to fit in. The list of brave things like "walking into the canteen alone" shows how hard everyday things are for him.',
              Expected:
                'The writer presents Kofi\'s feelings through a sustained pattern of isolation imagery. The metaphor of laughter as "a language he hadn\'t yet learned to speak" equates social belonging with linguistic fluency, suggesting that fitting in requires a form of translation that goes beyond words. The tricolon "the quiet one, the new one, the one whose accent made people lean forward" reduces Kofi from a complex person to a series of reductive labels, enacting the very erasure of identity that he experiences. The anaphoric repetition of "Bravery was..." redefines courage as something quotidian and exhausting, creating empathy by elevating the difficulty of Kofi\'s daily experience. The final simile - words turned over "like smooth stones" - captures the fragility of hope: stones are solid but small, something you carry in your pocket rather than build a house from.',
              'Greater Depth':
                'The writer constructs Kofi\'s emotional landscape through a sophisticated interplay of presence and absence. He is physically present - "standing at the edge of the playground" - but the spatial preposition "edge" signals his liminality, occupying the border between participation and exclusion. The metaphor of laughter as an unlearned language is particularly resonant because it implies that social belonging is not merely a matter of proximity but of code - there are rules, rhythms, and shared references that cannot be acquired through observation alone. The structural contrast between Kofi in Accra ("the fastest runner," "the one who always had a joke ready") and Kofi in England ("he was nobody") performs the violence of displacement at the level of sentence: the definite articles ("the fastest," "the one") give way to the indefinite pronoun "nobody," grammatically enacting his loss of identity. The redefinition of bravery through anaphora is rhetorically powerful because it democratises heroism while simultaneously exposing the hidden labour of the displaced: every mundane act requires courage when you are performing it in unfamiliar territory.',
            },
            markScheme: [
              'Identifies relevant language techniques and their effects',
              'Analyses specific word choices with precision',
              "Comments on how language creates the reader's sympathy",
              'Embeds quotations effectively',
              'Top band: conceptualised analysis with perceptive, layered readings',
            ],
          },
          {
            id: 'y7-eoy-q2',
            questionNumber: 2,
            questionText:
              "How has the writer structured the extract to develop the reader's understanding of Kofi's experience?\n\nYou should consider:\n- how the writer opens and closes the extract\n- how the focus shifts through the extract\n- how structure creates effects on the reader.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analytical-response',
            extract: Y7_T1_EXTRACT,
            extractSource: Y7_T1_EXTRACT_SOURCE,
            modelAnswers: {
              'Working Towards':
                'The extract starts with Kofi watching other children, which shows he is an outsider. In the middle, it goes back to his life in Accra to show how different things used to be. At the end, Maisie sits with him, which gives hope. The structure goes from loneliness to a small moment of friendship.',
              Expected:
                'The writer structures the extract as a journey from isolation to tentative connection, but deliberately withholds a complete resolution. The opening positions Kofi as an observer - "stood at the edge... watching" - establishing the extract\'s central dynamic of separation. The second paragraph functions as a temporal shift, moving backwards to Accra to create contrast: the reader sees what Kofi has lost, which deepens their sympathy. The third paragraph pivots to philosophical reflection on bravery, shifting the extract from narrative to argument - a structural choice that elevates Kofi\'s individual story into a universal statement about courage. The final paragraph introduces Maisie and the first moment of connection, but the writer\'s structural restraint is notable: the encounter is brief, Maisie\'s promise is only three words, and the final image - "smooth stones" - suggests hope that is small and must be carried carefully.',
              'Greater Depth':
                'The extract is structured through a carefully controlled expansion and contraction of perspective. The opening is tightly focused on the present moment - "the boy stood at the edge of the playground" - using the definite article and spatial positioning to establish immediacy and isolation. The second paragraph dilates outward in both time and space, relocating to Accra and Kofi\'s former identity, creating a structural juxtaposition between who he was and who he has become. This retrospective section is essential because it ensures the reader understands Kofi\'s isolation not as a fixed character trait but as a circumstantial wound. The third paragraph shifts register entirely, from narrative to reflective-philosophical, and the writer\'s structural decision to redefine "bravery" here transforms the extract from a story about one boy into a meditation on the hidden courage of displacement. The final paragraph returns to the concrete present, narrowing focus again, but the circularity is imperfect: where the opening featured solitary observation, the ending introduces a second presence. Structurally, the writer resists closure - Maisie\'s "It gets better" is a conditional promise, not a resolution, and the final image of Kofi turning words "like smooth stones" suspends the extract in a state of possibility rather than completion.',
            },
            markScheme: [
              'Comments on the opening and its effect',
              'Analyses shifts in focus (time, perspective, register)',
              'Discusses the ending and its effect',
              'Uses structural terminology accurately',
              "Considers how structure shapes the reader's response",
              'Top band: perceptive analysis of how structure creates meaning',
            ],
          },
        ],
      },
      {
        id: 'y7-eoy-writing',
        title: 'Section B: Writing',
        description: 'Choose ONE of the following writing tasks.',
        totalMarks: 20,
        suggestedTimeMinutes: 25,
        questions: [
          {
            id: 'y7-eoy-q3',
            questionNumber: 3,
            questionText:
              'Choose ONE:\n\n(a) Write the opening of a story titled "The Edge."\n\nOR\n\n(b) "Everyone has a moment when they discover who they really are." Write a personal reflection exploring this idea.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'creative-writing',
            guidance: [
              'Spend 5 minutes planning before you write',
              'For (a): create atmosphere, character, and tension in your opening',
              'For (b): balance personal experience with wider reflection',
              'Use a range of language techniques and sentence structures',
            ],
            modelAnswers: {
              'Working Towards':
                '(a) I stood at the edge of the cliff and looked down. The waves were crashing against the rocks far below. The wind was blowing hard and I could taste salt on my lips. I was scared but I knew I had to do this. My friends were waiting behind me, watching to see if I would jump.',
              Expected:
                "(a) The edge of anything is where things get interesting.\n\nThat's what my brother used to say, usually right before doing something stupid - standing on the roof of the garage, cycling with no hands down Pemberton Hill, eating a chilli pepper he'd found in Dad's greenhouse. He was attracted to edges the way some people are attracted to trouble, which is to say: inevitably, and with a grin.\n\nI am not my brother. I have never stood on a roof or eaten anything I couldn't identify. I prefer the middle of things - the middle of rooms, the middle of conversations, the safe, unremarkable centre where nobody looks at you and nothing goes wrong.\n\nBut here I am. Standing at the edge.",
              'Greater Depth':
                '(b) There is a difference between knowing who you are and discovering it.\n\nKnowing is a quiet thing. It accumulates like dust - gradually, imperceptibly - until one day you look at yourself and recognise the shape you\'ve become without ever deciding to become it. Discovering is different. Discovering is sudden. It arrives like a door opening in a wall you thought was solid, and on the other side is a room you\'ve never seen but somehow already know.\n\nI was fourteen when the door opened. It happened in a maths lesson, of all places - Mrs Kaur\'s Year 9 class, third period on a Wednesday, with rain sliding down the windows and the radiator making its familiar, asthmatic rattle. We were doing quadratic equations, and I couldn\'t do them, and this was not unusual because I had never been able to do them and had accepted this inability as a fundamental feature of my character, like my height or my fear of wasps.\n\nBut on this particular Wednesday, something shifted. Mrs Kaur drew a curve on the board - a parabola, she called it - and for a moment, just a moment, I saw it not as numbers but as a shape. A trajectory. A path that something might follow through space. And in that moment, I understood that I had been looking at mathematics the wrong way my entire life: not as a series of rules to memorise, but as a language that described the behaviour of things.\n\nThe discovery was not that I was good at maths. I wasn\'t, and I\'m still not, not really. The discovery was that the categories I had built for myself - "not a maths person," "not academic," "not clever enough" - were walls I had constructed from my own fear, and that walls, unlike cliffs, can be taken down brick by brick.',
            },
            markScheme: [
              'Creates a compelling opening or reflective piece with a distinctive voice',
              'Uses language techniques deliberately and effectively',
              'Demonstrates structural control and variety',
              'Engages the reader from the first line',
              'Top band: assured, sophisticated writing with originality',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Reading): 30 marks - two analytical responses',
      'Section B (Writing): 20 marks - creative or reflective writing',
      'Total: 50 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive, conceptualised analysis across both reading questions; assured, distinctive creative or reflective writing.',
        markRange: '41-50',
      },
      {
        grade: 'Expected',
        description:
          'Clear, developed analysis with well-selected evidence; effective writing with conscious craft.',
        markRange: '30-40',
      },
      {
        grade: 'Working Towards',
        description:
          'Some relevant analysis with basic evidence; writing shows some awareness of technique.',
        markRange: '19-29',
      },
      {
        grade: 'Below Expected',
        description: 'Limited analysis with minimal evidence; basic writing with limited range.',
        markRange: '0-18',
      },
    ],
    modelAnswers: {
      'Overall Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },
]

// ─── Year 8 Assessments ─────────────────────────────────────────────────────

const y8Assessments: CurriculumAssessment[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 8 - TERM 1: Analytical Essay on Power/Inequality
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y8-t1-power',
    title: 'Term 1 Assessment: Analytical Essay on Power and Inequality',
    yearGroup: 8,
    termUnit: 'Term 1',
    duration: 50,
    totalMarks: 40,
    sections: [
      {
        id: 'y8-t1-analysis',
        title: 'Analytical Essay',
        description:
          'Read the extract below carefully, then write a full analytical essay in response to the question.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'y8-t1-q1',
            questionNumber: 1,
            questionText:
              "How does the writer present the theme of power and inequality in this extract?\n\nYou should consider:\n- how the writer uses language to present Mary's working conditions\n- how the writer uses structure to develop the reader's understanding\n- the wider themes the writer explores (e.g. child labour, class, gender, education).",
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analytical-response',
            extract: Y8_T1_EXTRACT,
            extractSource: Y8_T1_EXTRACT_SOURCE,
            guidance: [
              'Write a full essay with an introduction, developed paragraphs, and a conclusion',
              'Each paragraph should make a clear point, supported by evidence, with detailed analysis',
              'Consider the historical context of child labour in Victorian England',
              'Think about how different forms of power operate in the extract',
              'Consider whose voice is heard and whose is silenced',
            ],
            modelAnswers: {
              'Working Towards':
                'The writer presents power and inequality through the character of Mary, a twelve-year-old girl working in a factory. The writer shows that Mary has no power because she has to work twelve-hour shifts even though she is only a child. The foreman wrote "fourteen" on her card which shows that the adults don\'t care about breaking the law. The overseer carries a "leather strap" which shows he has physical power over the workers. Mary\'s wages go to her father who spends them at the pub, which shows gender inequality because Mary does the work but doesn\'t get to keep the money. The dream about reading shows that education is something Mary cannot have, which keeps her trapped in poverty.',
              Expected:
                'The writer presents power and inequality as a system of interlocking oppressions in which Mary is trapped by her age, class, and gender simultaneously. The opening metaphor of the factory floor as "a grey ocean" establishes the dehumanising scale of industrial labour - Mary is one figure among many, each "hunched over spinning thread," the posture connoting both physical strain and submission. The participle "hunched" suggests a body that has been shaped by the work, implying that power operates not just through commands but through the physical moulding of workers\' bodies.\n\nThe writer develops the theme through structural accumulation: each paragraph introduces a new layer of inequality. Paragraph one establishes the workplace hierarchy; paragraph two introduces the health consequences; paragraph three reveals the economic exploitation within Mary\'s own family; paragraph four exposes the denial of education. This structure mirrors the way inequality compounds - each deprivation makes the others harder to escape.\n\nParticularly effective is the writer\'s treatment of Elsie, whose advice that "Your body adjusts" operates ironically: the verb "adjusts" implies accommodation to something unacceptable, normalising suffering as a survival strategy. That Elsie is "fifteen and looked thirty" condenses years of exploitation into a single devastating image. The writer uses the family dynamic to demonstrate how power operates even among the powerless: Mary\'s father, himself presumably a labourer, exercises the only power available to him - control of his daughter\'s wages - revealing how patriarchy and capitalism intersect.\n\nThe concluding dream about reading is the extract\'s most poignant structural choice. By ending with imagination rather than reality, the writer suggests that inequality is measured not only in material deprivation but in the foreclosure of possibility. The simile "dissolved like the cotton dust" connects the dream to the factory, implying that even Mary\'s inner life is contaminated by the conditions of her labour.',
              'Greater Depth':
                'The writer constructs power and inequality not as simple oppositions between oppressor and oppressed but as a pervasive system that distorts every relationship and institution in Mary\'s world - work, family, health, education, and even the interior life of the imagination.\n\nThe opening establishes the factory as a space where power operates through homogenisation. The simile "like a grey ocean" reduces the factory floor to a featureless expanse in which individuality is submerged, while the description of workers as figures "hunched over spinning thread" creates a deliberate ambiguity: the workers attend the machines, but the syntax - "each one attended by a figure" - also implies that the machines are the agents and the workers their servants. This grammatical inversion is crucial to the extract\'s presentation of industrial power: the machines dictate the rhythm ("the mechanical rhythm of the loom"), and the workers\' bodies conform.\n\nThe writer layers inequality through structural escalation, each paragraph intensifying the reader\'s understanding. The foreman\'s casual falsification of Mary\'s age - writing "fourteen" "without looking up" - is devastating in its nonchalance: the adverbial "without looking up" reveals that this deception requires no moral effort, suggesting a system in which the exploitation of children is so routine it does not warrant attention. The health imagery operates through a grim euphemism: Elsie\'s assurance that "Your body adjusts" inverts the rhetoric of resilience, revealing how the language of adaptation can normalise suffering. That Elsie is "fifteen and looked thirty" enacts at the level of description what capitalism does to the bodies of the poor - it accelerates decay, consuming youth as a raw material.\n\nThe patriarchal dimension of inequality is presented with a structural irony that compounds class exploitation. Mary\'s wages go "directly to her father," and the adverb "directly" - usually associated with efficiency and purpose - here becomes a marker of economic injustice: the shortest distance between Mary\'s labour and its reward passes through her father\'s hands. The subsequent detail of the public house reframes Mary\'s twelve-hour shifts as subsidising her own deprivation, a closed circuit of exploitation that the writer implies is sanctioned by both capitalism and patriarchy.\n\nThe concluding paragraph represents the extract\'s most sophisticated engagement with power: the denial of education. Mary\'s dream of reading operates as a structural counter-narrative to the factory reality, but the writer refuses to let it function as escapism. The dream "dissolved like the cotton dust" - a simile that contaminates the imaginative space with the material reality of the factory. The cotton dust that damages lungs also, metaphorically, destroys dreams. By ending with Mary walking "to the factory in the dark," the writer creates a cyclical structure that mirrors the trap of poverty: there is no narrative progression, only repetition. The darkness is both literal (early morning) and metaphorical (the absence of enlightenment), and the extract\'s final word - "dark" - resonates as an indictment of a society that systematically extinguishes the potential of its most vulnerable members.',
            },
            markScheme: [
              'Develops a clear, sustained argument about power and inequality',
              'Analyses language techniques in detail with specific word-level focus',
              'Comments on structural choices and their effects',
              'Considers multiple forms of inequality (class, gender, age, education)',
              'Engages with wider thematic concerns and context',
              'Uses academic register and essay structure',
              'Top band: conceptualised, perceptive argument with sophisticated analysis',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Quality of argument: 12 marks - clarity, coherence, sophistication',
      'Language analysis: 12 marks - technique identification, word-level focus, effect',
      'Structural analysis: 8 marks - comment on organisation, shifts, patterns',
      'Thematic engagement: 8 marks - wider themes, context, implications',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive, conceptualised essay with sophisticated analysis of how power operates through language, structure, and social systems.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, developed essay with relevant analysis and engagement with multiple forms of inequality.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Some relevant analysis with basic identification of power dynamics; essay structure attempted.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited response with minimal analysis; little engagement with the theme of power.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See main question model answer at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 8 - TERM 2: Comparative Poetry Essay
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y8-t2-poetry',
    title: 'Term 2 Assessment: Comparative Poetry Essay',
    yearGroup: 8,
    termUnit: 'Term 2',
    duration: 50,
    totalMarks: 40,
    sections: [
      {
        id: 'y8-t2-comparison',
        title: 'Comparative Poetry Essay',
        description:
          'Read both poems carefully, then write a comparative essay in response to the question below.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'y8-t2-q1',
            questionNumber: 1,
            questionText:
              'Compare how the poets present ideas about social division and prejudice in "My Parents" by Stephen Spender and the extract from "Half-Caste" by John Agard.\n\nIn your essay, you should compare:\n- the poets\' attitudes to social division\n- the ways the poets use language and form to convey their ideas\n- the effects created for the reader.\n\nWrite about BOTH poems throughout your response.',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'comparative-response',
            extract: Y7_T3_POEM_A + '\n\n---\n\n' + Y7_T3_POEM_B,
            extractSource: Y7_T3_POEM_A_SOURCE + ' / ' + Y7_T3_POEM_B_SOURCE,
            guidance: [
              'Write a full comparative essay - introduction, comparative paragraphs, conclusion',
              'Integrate discussion of both poems in every paragraph',
              'Analyse specific language and structural choices',
              "Consider the poets' different approaches to the same broad theme",
              'Think about the different historical and cultural contexts',
            ],
            modelAnswers: {
              'Working Towards':
                'Both poems deal with social division. Spender writes about class division - the speaker is kept away from rough children who are from a different social class. Agard writes about racial prejudice and the label "half-caste." Both speakers feel like outsiders but respond differently: Spender\'s speaker is passive and afraid, while Agard is confrontational and angry. Spender uses similes like "muscles like iron" to show fear, while Agard uses rhetorical questions like "Explain yuself" to challenge the reader. Both poems make you think about how society divides people unfairly.',
              Expected:
                'Both Spender and Agard examine how social division is maintained through language and perception, but they occupy opposing positions within the power dynamic they describe, which fundamentally shapes their poetic strategies.\n\nSpender\'s speaker is the beneficiary of social division - sheltered by parents from the rough children - yet the poem reveals this protection as a form of harm. The passive construction "kept me from" positions the speaker as simultaneously privileged and confined. Agard, conversely, is the target of social division: the label "half-caste" has been applied to him, and his poem is an act of rhetorical reclamation. The imperative "Explain yuself" inverts the usual power relationship between labeller and labelled, demanding that those who use the term justify its logic.\n\nLinguistically, the poets\' approaches reflect their positions. Spender writes in Standard English with conventional stanzaic form, mirroring the middle-class propriety that separates his speaker from the rough children. His language aestheticises difference: the simile "muscles like iron" makes the rough children simultaneously frightening and impressive, revealing an objectifying gaze that is itself a product of class separation. Agard, by contrast, deploys Caribbean dialect and fragmented form as a deliberate rejection of the linguistic norms that the label "half-caste" polices. His use of "yuself" and "wha yu mean" is a political act - the poem performs the very hybridity that the term attempts to diminish.\n\nBoth poems ultimately suggest that social division is linguistically constructed and can therefore be linguistically challenged - but where Spender\'s poem contemplates this possibility with melancholy retrospection, Agard\'s seizes it with rhetorical force.',
              'Greater Depth':
                'Spender and Agard both anatomise the mechanics of social division, but their divergent positions - one writing from within privilege, the other from its margins - produce fundamentally different relationships between speaker, subject, and reader, illuminating how prejudice operates not only between people but within the language that describes them.\n\nThe two poems present contrasting epistemologies of division. Spender\'s speaker knows the rough children only through observation - "I feared more than tigers their muscles like iron" - and the simile reveals the distortion that distance creates: by comparing the children to "tigers," the speaker makes them exotic, wild, categorically other. This figurative elevation is simultaneously an act of dehumanisation. Agard exposes a parallel mechanism from the receiving end: the label "half-caste" reduces a complex identity to a fraction, and his analogies - Picasso\'s canvas, the mixing of light and shadow - systematically demonstrate that what the term dismisses as incomplete is in fact artistry, natural beauty, creative synthesis. Where Spender\'s figurative language enacts the distortions of class prejudice even while lamenting them, Agard\'s re-engineers figuration as a tool of liberation.\n\nFormally, the poems embody their speakers\' relationships with power. Spender\'s conventional structure - regular stanzas, Standard English, enjambment within traditional bounds - mirrors the institutional frameworks that sustain class division. The form itself is "respectable," and the poem\'s inability to break free of its formal constraints mirrors the speaker\'s inability to bridge the class divide. Agard\'s form performs the opposite: the absence of standard punctuation, the phonetic rendering of Caribbean speech, the relentless interrogative mode - these are structural acts of defiance. His poem does not merely argue against the label "half-caste"; it refuses to submit to the linguistic conventions that authorise such labelling. The form is the argument.\n\nPerhaps most revealingly, the poems construct different reader positions. Spender\'s poem assumes a reader who shares the speaker\'s class position - we are invited to share his fear and guilt, to recognise ourselves in his complicity. Agard\'s reader is directly implicated as the potential perpetrator: "Explain yuself" is an accusation directed outward, and the second person "yu" refuses to let the reader observe from a comfortable distance. This structural difference in address reflects a deeper truth about social division: those with power can afford to reflect on injustice privately and retrospectively; those without power must confront it publicly and immediately.',
            },
            markScheme: [
              'Develops a sustained comparative argument throughout',
              'Analyses language with word-level precision in both poems',
              'Comments on form and structure as meaning-making tools',
              "Considers the poets' different positions and contexts",
              'Uses academic register and comparative connectives',
              'Top band: conceptualised comparison with sophisticated, original argument',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Comparative argument: 12 marks - sustained, integrated comparison',
      'Language analysis: 12 marks - detailed, word-level analysis of both poems',
      'Form and structure: 8 marks - how form embodies meaning',
      'Quality of written expression: 8 marks - academic register, fluency',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive, conceptualised comparison with original argument; sophisticated analysis of how language and form create meaning in both poems.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, sustained comparison with relevant analysis of both poems; comments on language and form with developing insight.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Some comparison with basic analysis; may discuss poems separately or unevenly.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited comparison; writes about one poem much more than the other; minimal analysis.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See comparative essay model answer at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 8 - TERM 2.2: Shakespeare Extract Response
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y8-t2-2-shakespeare',
    title: 'Term 2.2 Assessment: Shakespeare Extract Response',
    yearGroup: 8,
    termUnit: 'Term 2.2',
    duration: 50,
    totalMarks: 40,
    sections: [
      {
        id: 'y8-t2-2-extract',
        title: 'Shakespeare Extract Response',
        description:
          'Read the extract from The Tempest below, then answer the question that follows.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'y8-t2-2-q1',
            questionNumber: 1,
            questionText:
              "Starting with this extract, how does Shakespeare present Prospero's power and his decision to give it up?\n\nWrite about:\n- how Shakespeare uses language in the extract to present Prospero's power\n- how Prospero's decision to renounce his magic is significant in the wider play.\n\nYou should refer closely to the extract and to the play as a whole.",
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'extract-response',
            extract: Y8_T2_SHAKESPEARE_EXTRACT,
            extractSource: Y8_T2_SHAKESPEARE_SOURCE,
            guidance: [
              "Start with the extract - analyse Shakespeare's language choices in detail",
              "Then broaden to the wider play - how does this moment connect to Prospero's journey?",
              'Consider: what kind of power does Prospero have? Why does he give it up?',
              "Think about Shakespeare's use of verse form, imagery, and dramatic structure",
              'Consider relevant context (colonialism, Renaissance magic, forgiveness)',
            ],
            modelAnswers: {
              'Working Towards':
                'In this extract, Prospero talks about all the powerful things he has done with his magic. He has "bedimmed the noontide sun" and "called forth the mutinous winds" which shows he has control over nature. He lists the supernatural beings who help him - "elves," "demi-puppets" - which shows his connection to the spirit world. But then he decides to give up his magic, saying "this rough magic I here abjure." The word "rough" suggests he thinks his magic is not refined or good. He will "break my staff" and "drown my book" which are symbolic actions showing he is permanently giving up power. This is important in the play because Prospero has been using magic to control everyone on the island, and giving it up means he is choosing to be human and to forgive.',
              Expected:
                'Shakespeare presents Prospero\'s power as simultaneously magnificent and troubling in this extract, creating a tension between awe and moral discomfort that makes his renunciation both surprising and necessary.\n\nThe speech\'s opening catalogues Prospero\'s supernatural allies in a sweeping invocation - "ye elves of hills, brooks, standing lakes, and groves" - the polysyndeton creating a sense of abundance and reach. His power extends across all elements: earth (hills), water (brooks, lakes), air (winds), and he has even commanded fire ("to the dread rattling thunder / Have I given fire"). This elemental mastery positions Prospero as a figure of near-divine authority. Yet the escalation of his claims becomes troubling: "graves at my command / Have waked their sleepers" crosses a moral boundary, suggesting a power that violates natural law. The qualifier "by my so potent art" - with "potent" connoting both strength and danger - acknowledges this excess.\n\nThe volta arrives with devastating understatement: "But this rough magic / I here abjure." The adjective "rough" is crucial - it acknowledges that his power has been imprecise, forceful, perhaps brutal. The verb "abjure" carries connotations of oath-breaking and formal renunciation, elevating the decision from personal choice to ceremonial act. The concrete images of destruction - "break my staff," "drown my book" - make the renunciation physical and irreversible.\n\nIn the wider play, this moment represents Prospero\'s recognition that power over others - whether through magic, colonialism, or paternal control - ultimately diminishes the one who wields it. His renunciation enables the play\'s movement toward reconciliation and forgiveness, suggesting that true authority lies not in domination but in the willingness to relinquish control.',
              'Greater Depth':
                'Shakespeare presents Prospero\'s power in this extract through a rhetorical structure that simultaneously celebrates and condemns - a speech that performs the very excess it prepares to renounce, creating a dramatic irony in which the audience is awed by the power at the precise moment its possessor declares it monstrous.\n\nThe speech is modelled on Ovid\'s Metamorphoses - Medea\'s invocation of supernatural forces - and this intertextual echo is significant: Shakespeare aligns Prospero not with a wise magician but with a figure associated with transgression and destruction. The opening catalogue of supernatural agents - "elves," "demi-puppets" - initially seems whimsical, even beautiful, with the delicate imagery of "green sour ringlets" and "midnight mushrooms." But Shakespeare structures the speech as a controlled escalation: from playful nature spirits to weather manipulation ("called forth the mutinous winds") to the ultimate transgression: necromancy ("graves at my command / Have waked their sleepers"). The verb "waked" is violently transitive - Prospero has not merely communicated with the dead but forced them from sleep, imposing his will upon the boundary between life and death.\n\nThe concessive "Weak masters though ye be" is a masterful touch of characterisation: even as Prospero prepares to surrender power, he cannot resist asserting his superiority over the spirits who serve him. This reveals that power is not merely a tool for Prospero but a constituent part of his identity - which is precisely why renouncing it constitutes genuine sacrifice rather than mere gesture.\n\nThe pivot - "But this rough magic / I here abjure" - operates on multiple dramatic levels. "Rough" carries Elizabethan connotations of both violence and incompleteness, suggesting Prospero recognises his magic as both harmful and imperfect. "Abjure" implies swearing away, a formal and public act that Shakespeare positions as the inverse of the conjurations that preceded it. The physical destruction of "staff" and "book" - the instruments of power - makes the renunciation irreversible: these are not metaphors but stage directions for a symbolic death of the magician-self.\n\nIn the wider play, this moment resonates with the colonial subtext that modern audiences cannot ignore. Prospero has used magic to control Ariel and enslave Caliban, to manipulate the shipwrecked courtiers, and to orchestrate his daughter\'s marriage. His renunciation can be read as Shakespeare\'s interrogation of whether power - however well-intentioned - can ever be exercised over others without becoming "rough." The drowning of the book, which sinks "deeper than did ever plummet sound," buries knowledge itself in unfathomable depths, suggesting that some forms of power are too dangerous to preserve even as cultural inheritance.',
            },
            markScheme: [
              "Analyses Shakespeare's language choices in detail (imagery, verse, rhetoric)",
              'Considers the effect of dramatic structure within the extract',
              'Connects the extract to the wider play with relevant references',
              'Engages with relevant context (Renaissance, colonialism, forgiveness)',
              'Develops a clear, sustained argument about power and renunciation',
              'Top band: conceptualised response with sophisticated, layered interpretation',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Extract analysis: 16 marks - detailed language and structural analysis',
      'Wider play connection: 12 marks - relevant, integrated references',
      'Contextual understanding: 6 marks - historical, literary, thematic',
      'Quality of argument: 6 marks - sustained, coherent, academic',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive, conceptualised response with sophisticated language analysis and assured connection to the wider play; engages with context with originality.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, developed response with relevant analysis of the extract and connections to the wider play; some contextual awareness.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Some relevant analysis of the extract with basic comments on the wider play; limited contextual engagement.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited analysis with minimal reference to the extract or wider play; descriptive rather than analytical.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See main question model answer at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 8 - TERM 3.1: Speech Writing and Delivery
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y8-t3-1-speech',
    title: 'Term 3.1 Assessment: Speech Writing and Delivery',
    yearGroup: 8,
    termUnit: 'Term 3.1',
    duration: 55,
    totalMarks: 40,
    sections: [
      {
        id: 'y8-t3-1-writing',
        title: 'Section A: Speech Writing',
        description: 'Write a persuasive speech in response to one of the prompts below.',
        totalMarks: 25,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'y8-t3-1-q1',
            questionNumber: 1,
            questionText:
              'Choose ONE of the following:\n\n(a) "The school curriculum should be designed by students, not adults." Write a speech to your school governors arguing for or against this statement.\n\nOR\n\n(b) "We are the generation that will fix what our parents broke." Write a speech for a youth conference on the theme of young people and social responsibility.\n\nYour speech should:\n- use rhetorical techniques (rhetorical questions, tricolon, direct address, anaphora)\n- present a clear, persuasive argument with supporting evidence or examples\n- be written for a specific audience\n- be suitable for spoken delivery (2-4 minutes).',
            marks: 25,
            suggestedTimeMinutes: 35,
            questionType: 'speech-writing',
            guidance: [
              'Plan your argument structure: opening hook, 3 key points, powerful conclusion',
              'Use at least 4 different rhetorical techniques',
              'Consider counter-arguments and address them',
              'Write for the ear, not the eye - read your speech aloud in your head',
              'A 3-minute speech is approximately 400-500 words',
            ],
            modelAnswers: {
              'Working Towards':
                '(b) Good morning everyone. I am here today to talk about young people and social responsibility. I think that our generation does care about the world and wants to make it better.\n\nFirstly, young people today are more aware of climate change than any generation before us. We learn about it in school and we see the effects every day. We know we need to act.\n\nSecondly, social media means we can spread awareness about important issues very quickly. When something unfair happens, young people share it online and demand change.\n\nFinally, young people are already making a difference. Greta Thunberg started her climate protests when she was fifteen. If one teenager can change the world, imagine what a whole generation could do.\n\nIn conclusion, we are the generation that will fix things, but we need adults to listen to us and support us. Thank you.',
              Expected:
                '(b) Let me ask you a question. When you woke up this morning, did you check the news? And if you did, what did you see? Rising sea levels. Food bank queues. A housing crisis that means our generation may never own a home. The future, as it is presented to us daily, looks a lot like a mess we didn\'t make.\n\nAnd yet. Here we are. Not despairing. Not giving up. But standing in this room, at this conference, talking about what we are going to do about it.\n\n"We are the generation that will fix what our parents broke." I want to challenge that statement - not because it is wrong, but because it is incomplete. We are not fixers. We are not cleaners, arriving after the party to sweep up someone else\'s broken glass. We are architects. We are redesigning the house.\n\nConsider the evidence. In the last five years alone, young people have led the largest climate protests in human history. Young people have campaigned for - and won - changes to mental health provision in schools. Young people have forced corporations to rethink their environmental practices through nothing more powerful than their refusal to buy what harms the planet.\n\nBut here is what I want us to understand: social responsibility is not a grand gesture. It is not a placard or a hashtag or a speech at a conference. Social responsibility is a daily practice. It is choosing the harder right over the easier wrong. It is speaking up when someone is being bullied, even when your voice shakes. It is asking questions in a world that would prefer you to scroll in silence.\n\nSo yes - we are the generation. But not because we will fix what was broken. Because we will build what was never built in the first place: a world that works for everyone.',
              'Greater Depth':
                '(a) Governors, teachers, fellow students - I want to begin with a confession. I have spent the last twelve years of my life being educated, and in all that time, not once has anyone asked me what I think education should look like.\n\nThink about that for a moment. We design clothes for teenagers. We design apps for teenagers. We design entire marketing campaigns around what teenagers want, what they watch, what they believe. But the one system that shapes their intellectual development more profoundly than any other - the school curriculum - is designed exclusively by people who are not teenagers and have not been teenagers for a very long time.\n\nI am not here to argue that students should control the curriculum entirely. That would be naive, and I am told that naivety is a privilege of the young that we are expected to outgrow. But I am here to argue that we should have a voice - a genuine, structural, meaningful voice - in the decisions that determine what we learn, how we learn it, and why.\n\nLet me address the obvious objection: "Students don\'t know what they need to learn." This is true. I did not know, at eleven, that I needed to understand algebra. But here is what I did know: I learned better when I understood why something mattered. And the curriculum, as it stands, rarely tells us why. It tells us what. It tells us when - the exam is in June, the coursework is due in March. But the why - the beating heart of education, the reason anyone has ever been curious about anything - is too often left out.\n\nWhat if students sat on curriculum review panels? What if, once a year, every department asked its students: what worked? What didn\'t? What would you change? This is not radical. This is not students "running the school." This is what any competent organisation does: it listens to the people it serves.\n\nGovernors, you have a choice. You can continue to design an education for young people. Or you can begin to design it with us. I would respectfully suggest that the difference between those two prepositions - for and with - is the difference between a curriculum that is endured and one that is embraced.',
            },
            markScheme: [
              'Constructs a clear, persuasive argument with logical progression',
              'Uses a range of rhetorical techniques with deliberate effect',
              'Addresses the audience appropriately and consistently',
              'Includes evidence, examples, or reasoning to support claims',
              'Addresses counter-arguments where appropriate',
              'Writes in a register suitable for spoken delivery',
              'Top band: compelling, assured speech with sophisticated rhetorical control',
            ],
          },
        ],
      },
      {
        id: 'y8-t3-1-delivery',
        title: 'Section B: Spoken Delivery',
        description:
          'Deliver your speech to the class. You will be assessed on your spoken performance.',
        totalMarks: 15,
        suggestedTimeMinutes: 20,
        questions: [
          {
            id: 'y8-t3-1-q2',
            questionNumber: 2,
            questionText:
              'Deliver your speech to the class (2-4 minutes).\n\nYou will be assessed on:\n- confidence and clarity of delivery\n- use of vocal techniques (pace, pause, emphasis, tone)\n- audience engagement (eye contact, gesture, responsiveness)\n- overall persuasive impact.',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'spoken-presentation',
            modelAnswers: {
              'Working Towards':
                'Delivers speech audibly with some confidence. Reads from notes for most of the delivery. Some variation in tone. Limited eye contact and gesture. Message is clear but delivery is hesitant.',
              Expected:
                'Delivers speech with sustained confidence and clear projection. Varies pace and tone deliberately - pauses for effect, emphasises key words. Makes regular eye contact with different audience members. Uses some gesture. Rarely refers to notes. Persuasive intent is clear and largely achieved.',
              'Greater Depth':
                'Delivers with commanding confidence and natural authority. Vocal variety is sophisticated - uses pause, emphasis, pace changes, and tonal shifts to create genuine persuasive impact. Eye contact is sustained and inclusive. Gestures feel natural and reinforce meaning. Responds to audience reactions. The delivery enhances the written content, creating a performance that is more persuasive than the text alone.',
            },
            markScheme: [
              'Vocal clarity and projection: 4 marks',
              'Vocal variety (pace, pause, emphasis, tone): 4 marks',
              'Audience engagement (eye contact, gesture): 4 marks',
              'Overall persuasive impact: 3 marks',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Speech Writing): 25 marks',
      'Section B (Spoken Delivery): 15 marks',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Compelling, sophisticated speech with assured rhetorical control; commanding delivery that enhances the written content.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, persuasive speech with effective rhetorical techniques; confident delivery with some vocal variety.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Basic persuasive speech with some rhetorical awareness; audible delivery with limited vocal variety.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited persuasive writing with few rhetorical techniques; hesitant delivery with minimal audience engagement.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 8 - TERM 3.2: Media Campaign Project
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y8-t3-2-media',
    title: 'Term 3.2 Assessment: Media Campaign Project',
    yearGroup: 8,
    termUnit: 'Term 3.2',
    duration: 60,
    totalMarks: 40,
    sections: [
      {
        id: 'y8-t3-2-written',
        title: 'Section A: Campaign Written Content',
        description:
          'You are creating a media campaign to raise awareness about an issue that matters to you. Complete the written components below.',
        totalMarks: 30,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'y8-t3-2-q1',
            questionNumber: 1,
            questionText:
              'Choose a social issue you feel strongly about (e.g. climate change, mental health, online safety, homelessness, equality).\n\n(a) Write a campaign slogan and a 100-150 word social media post that would launch your campaign. Consider your target audience, tone, and platform. (10 marks)\n\n(b) Write a 200-300 word opinion article for a school newspaper arguing why your chosen issue deserves attention. Use persuasive techniques and evidence. (20 marks)',
            marks: 30,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            guidance: [
              'Choose an issue you genuinely care about - authenticity is persuasive',
              'For (a): think about which platform (Instagram, TikTok, X) and adapt your tone',
              'For (a): use hashtags, calls to action, and engaging language',
              'For (b): structure your article with a headline, hook, argument, and call to action',
              'For (b): use at least 3 persuasive techniques (statistics, rhetorical questions, emotive language)',
            ],
            modelAnswers: {
              'Working Towards':
                "(a) Slogan: \"Speak Up, Stand Out\"\n\nSocial media post: Mental health matters. 1 in 5 young people struggle with their mental health but many don't get help because they're afraid to talk about it. We need to break the stigma. Share your story using #SpeakUpStandOut and let's show people they're not alone.\n\n(b) Why We Need to Talk About Mental Health\n\nMental health is something that affects everyone but nobody wants to talk about. In our school, students are under more pressure than ever before - exams, social media, family problems - but the support available hasn't kept up. We need to change this. Every student should have access to counselling. Every teacher should be trained in mental health first aid. And every one of us should feel comfortable saying \"I'm not okay\" without being judged.",
              Expected:
                '(a) Slogan: "Your Screen Time Is Their Overtime"\n\nSocial media post: That phone you\'re scrolling on right now? A child may have mined the cobalt in its battery. 40,000 children work in cobalt mines in the Democratic Republic of Congo. They earn $1-2 a day so we can charge our devices overnight. We don\'t need to stop using technology. But we need to start asking where it comes from. Share this post. Tag a tech company. Ask them: #WhosInYourBattery?\n\n(b) The Invisible Children in Your Pocket\n\nYou are reading this on a device that may have been built, in part, by a child. That is not a comfortable sentence. It is not meant to be.\n\nAccording to Amnesty International, approximately 40,000 children work in artisanal cobalt mines in the DRC, extracting the mineral that powers the lithium-ion batteries in our phones, laptops, and electric cars. They work without safety equipment, in tunnels that collapse without warning, for wages that would not buy a school lunch in this country.\n\nWe talk a great deal in school about being responsible digital citizens - about our screen time, our online safety, our digital footprint. But we rarely talk about the physical cost of the devices we hold in our hands every day. There is a supply chain between your Instagram feed and a twelve-year-old in Kolwezi, and our collective silence about it is a choice.\n\nI am not suggesting we abandon technology. That would be impractical and hypocritical - I wrote this article on a laptop. But I am suggesting we demand transparency. Major technology companies have the resources to audit their supply chains and ensure no child labour is involved. What they lack is incentive. We, as consumers, are that incentive.\n\nNext time you upgrade your phone, ask one question: who paid the real price?',
              'Greater Depth':
                "(a) Slogan: \"The Algorithm Doesn't Care About You\"\n\nSocial media post: Ironic, isn't it? You're seeing this post because an algorithm decided you'd engage with it. The same algorithm that curates your feed, shapes your opinions, and quietly sells your attention to the highest bidder. Here's what the algorithm won't show you: 78% of teens say social media makes them feel worse about themselves (RSPH, 2024). The platforms are designed to be addictive. The scroll is engineered. Your \"choice\" to keep watching was made for you by a team of behavioural psychologists in Silicon Valley. We're not anti-tech. We're anti-manipulation. Share if your feed belongs to you. #NotYourProduct\n\n(b) [Extended opinion article with sophisticated argument about algorithmic manipulation, drawing on specific evidence, addressing counter-arguments about personal responsibility, and concluding with a nuanced call for regulation that protects young people without infantilising them.]",
            },
            markScheme: [
              '(a) Social media post: 10 marks - appropriate tone, platform awareness, engaging content, effective slogan',
              '(b) Opinion article: 20 marks - clear argument, persuasive techniques, evidence, structure, audience awareness',
              'Assesses ability to adapt writing for different formats and audiences',
              'Top band: sophisticated understanding of media conventions with compelling, original content',
            ],
          },
        ],
      },
      {
        id: 'y8-t3-2-presentation',
        title: 'Section B: Campaign Pitch',
        description: 'Present your campaign concept to the class in a 2-minute pitch.',
        totalMarks: 10,
        suggestedTimeMinutes: 15,
        questions: [
          {
            id: 'y8-t3-2-q2',
            questionNumber: 2,
            questionText:
              'Deliver a 2-minute pitch presenting your campaign concept to the class. Explain:\n- what issue your campaign addresses and why it matters\n- who your target audience is\n- what media formats you would use and why\n- what you want your audience to DO as a result of your campaign.',
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'spoken-presentation',
            modelAnswers: {
              'Working Towards':
                'Presents campaign idea with some clarity. Identifies the issue and target audience. Limited explanation of media choices. Some audience engagement.',
              Expected:
                'Presents campaign with confidence and clarity. Clearly explains the issue, audience, and media strategy. Justifies choices with reasoning. Engages audience through eye contact and enthusiastic delivery. Demonstrates understanding of how different media formats reach different audiences.',
              'Greater Depth':
                'Delivers a polished, professional pitch with commanding confidence. Demonstrates sophisticated understanding of media strategy and audience targeting. Justifies every creative decision with clear reasoning. Responds to questions with authority. The pitch itself demonstrates the persuasive skills the campaign would deploy.',
            },
            markScheme: [
              'Clarity of campaign concept: 3 marks',
              'Understanding of media and audience: 3 marks',
              'Quality of delivery: 2 marks',
              'Persuasive impact: 2 marks',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Written Content): 30 marks - social media post (10) + opinion article (20)',
      'Section B (Campaign Pitch): 10 marks',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Sophisticated media awareness with compelling, original content across formats; polished pitch with professional delivery.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Effective campaign content adapted for different formats and audiences; confident pitch with clear reasoning.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Basic campaign content with some format awareness; pitch covers main points but limited justification.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited media awareness; content does not effectively adapt to format; hesitant pitch.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },
]

// ─── Year 9 Assessments ─────────────────────────────────────────────────────

const y9Assessments: CurriculumAssessment[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 9 - TERM 1: Character and Theme Analysis (A Christmas Carol)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y9-t1-acc',
    title: 'Term 1 Assessment: Character and Theme Analysis - A Christmas Carol',
    yearGroup: 9,
    termUnit: 'Term 1',
    duration: 55,
    totalMarks: 40,
    sections: [
      {
        id: 'y9-t1-extract',
        title: 'Extract-Based Response',
        description:
          'Read the extract from A Christmas Carol below, then answer the question that follows.',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'y9-t1-q1',
            questionNumber: 1,
            questionText:
              "Starting with this extract, how does Dickens present Scrooge's attitude towards the poor?\n\nWrite about:\n- how Dickens uses language to present Scrooge in this extract\n- how Dickens presents attitudes to poverty in the novel as a whole.",
            marks: 40,
            suggestedTimeMinutes: 55,
            questionType: 'extract-response',
            extract: Y9_T1_EXTRACT,
            extractSource: Y9_T1_EXTRACT_SOURCE,
            guidance: [
              "Start with detailed analysis of the extract - focus on Dickens's language choices",
              "Then broaden to the novel as a whole - how does Scrooge's attitude change?",
              "Consider Dickens's social message and Victorian context",
              'Use the assessment objectives: AO1 (response), AO2 (language/structure), AO3 (context)',
              'This is practice for the GCSE Literature format - treat it as such',
            ],
            modelAnswers: {
              'Working Towards':
                'In this extract, Dickens presents Scrooge as cold and uncaring towards the poor. When asked to donate money, Scrooge says "Nothing!" which shows he has no sympathy. He mentions prisons and workhouses as places for the poor, which shows he thinks they deserve to suffer. His most shocking statement is that the poor should "decrease the surplus population," treating people as numbers rather than human beings. The word "surplus" suggests they are extra and unwanted.\n\nIn the rest of the novel, Scrooge\'s attitude changes after he is visited by the three ghosts. He sees how poor people like the Cratchits celebrate Christmas despite having very little, and he learns that Tiny Tim will die. By the end, Scrooge becomes generous and helps the poor, which shows Dickens believed that people could change.',
              Expected:
                'Dickens constructs Scrooge\'s attitude towards the poor through a dialogue structure that systematically reveals the depth of his moral blindness. The exchange with the charity collector operates as a rhetorical trap: Scrooge\'s questions about "prisons" and "workhouses" are not genuine inquiries but rhetorical assertions - he lists punitive institutions as if they were charitable ones, revealing an ideology in which poverty is a crime rather than a condition. The adverb "demanded" signals aggression rather than curiosity, while his satisfaction that the Treadmill and Poor Law are "in full vigour" exposes a worldview in which the suffering of the poor is not merely acceptable but desirable.\n\nThe climactic statement - "decrease the surplus population" - is Dickens\'s most devastating indictment of Malthusian economics. The noun "surplus" dehumanises entirely: it is the language of manufacturing, of overproduction, applied to human lives. Scrooge does not see people; he sees economic units whose removal would improve a balance sheet. The gentleman\'s quiet response - "Many can\'t go there; and many would rather die" - is structurally positioned to challenge Scrooge, but Scrooge\'s reply absorbs even death into his economic logic: if they would rather die, let them, and reduce the numbers.\n\nIn the wider novel, Dickens uses Scrooge\'s transformation to argue that individual moral change can address social injustice. The Cratchit family - particularly Tiny Tim - functions as a sentimental counterpoint to Scrooge\'s utilitarianism: their poverty is made visible, personal, and sympathetic, making it impossible for either Scrooge or the reader to maintain the abstraction that "surplus population" requires. Dickens\'s social message is clear: poverty is not a natural condition but a consequence of moral failure - the failure of the wealthy to recognise the humanity of the poor.',
              'Greater Depth':
                'Dickens presents Scrooge\'s attitude to poverty not merely as individual callousness but as the logical endpoint of an economic ideology that the Victorian middle classes found intellectually respectable - Malthusian population theory and utilitarian philosophy. The dialogue structure is essential to this critique: by having Scrooge articulate his position through questions rather than statements, Dickens reveals that his worldview has the cadence of reason. "Are there no prisons?" is syntactically a question but functionally an argument - Scrooge is not asking for information but asserting that existing institutions adequately address poverty. The effect is chilling precisely because it is calm, articulate, and internally consistent.\n\nThe extract\'s linguistic escalation tracks Scrooge\'s progressive dehumanisation of the poor. He begins with institutions ("prisons," "workhouses"), moves to systems ("the Treadmill and the Poor Law"), and culminates in a biological metaphor - "decrease the surplus population." This trajectory enacts a kind of intellectual violence: each stage removes the poor further from humanity, until they are nothing more than a statistical problem to be solved through attrition. The noun "surplus" is Dickens\'s most precisely targeted word: it belongs to the discourse of political economy, and by placing it in Scrooge\'s mouth, Dickens indicts not just one miser but an entire intellectual framework that treats human life as subject to the same laws as commodity production.\n\nThe gentleman\'s response - "Many would rather die" - is a rhetorical test that Scrooge fails absolutely, and Dickens structures this failure to implicate the reader. Victorian audiences who supported the New Poor Law of 1834 - which deliberately made workhouse conditions punitive to discourage the poor from seeking help - would have recognised their own logic in Scrooge\'s words, and Dickens\'s intention is precisely to make that recognition uncomfortable.\n\nIn the novel as a whole, Scrooge\'s transformation operates as Dickens\'s argument that social change requires not policy reform but moral awakening. The Ghost of Christmas Present\'s revelation of Ignorance and Want - two children hidden beneath his robes - directly echoes this extract: Scrooge had asked "Are there no prisons?" and the Ghost shows him that the real question is whether society will continue to hide its failures beneath a cloak of institutional respectability. Scrooge\'s redemption is individual, but Dickens intends it as exemplary: if even the most hardened utilitarian can be made to see the poor as human, then the social conscience of a nation can be awakened. The novella\'s enduring power lies in this insistence that moral change precedes political change - a position that is both inspiring and, critics might argue, politically convenient.',
            },
            markScheme: [
              'AO1: Clear, informed personal response with relevant textual references (12 marks)',
              'AO2: Analysis of language, form, and structure with subject terminology (12 marks)',
              'AO3: Understanding of context and its influence on the text (8 marks)',
              'AO4: Quality of written communication (8 marks)',
              'Top band: conceptualised response with sophisticated, layered analysis and original contextual engagement',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'AO1 (Response and references): 12 marks',
      'AO2 (Language, form, structure analysis): 12 marks',
      'AO3 (Context): 8 marks',
      'AO4 (Written expression): 8 marks',
      'Total: 40 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive, conceptualised response with sophisticated language analysis; assured engagement with Victorian context; original interpretive argument.',
        markRange: '33-40',
      },
      {
        grade: 'Expected',
        description:
          'Clear, developed response with relevant analysis of extract and wider text; some contextual understanding; academic register.',
        markRange: '24-32',
      },
      {
        grade: 'Working Towards',
        description:
          'Some relevant analysis with basic textual references; limited connection to wider text; basic contextual awareness.',
        markRange: '15-23',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited response with minimal analysis; largely narrative or descriptive; little contextual engagement.',
        markRange: '0-14',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See main question model answer at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 9 - TERM 2: Creative Writing with Spoken Justification
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y9-t2-creative',
    title: 'Term 2 Assessment: Creative Writing with Spoken Justification',
    yearGroup: 9,
    termUnit: 'Term 2',
    duration: 55,
    totalMarks: 50,
    sections: [
      {
        id: 'y9-t2-writing',
        title: 'Section A: Creative Writing',
        description: 'Complete ONE of the following creative writing tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'y9-t2-q1',
            questionNumber: 1,
            questionText:
              'Choose ONE:\n\n(a) Write a short story (or the opening of a longer story) titled "What They Don\'t See."\n\nOR\n\n(b) Describe a place that has been abandoned. Focus on creating atmosphere and a sense of what was once there.\n\nOR\n\n(c) Write a monologue from the perspective of a character making a difficult moral decision.\n\nYour writing will be assessed on:\n- the quality and originality of your ideas\n- your use of language techniques and vocabulary\n- your control of structure and sentence variety\n- technical accuracy (spelling, punctuation, grammar).',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'creative-writing',
            guidance: [
              'Spend 5 minutes planning - choose the option that excites you most',
              'For (a): consider whose perspective, what is hidden, and the gap between perception and reality',
              'For (b): use all five senses, consider time and decay, explore absence and presence',
              'For (c): establish the stakes, reveal character through voice, create tension',
              'Aim for quality over quantity - 400-600 words of excellent writing is better than 800 of average',
            ],
            modelAnswers: {
              'Working Towards':
                '(b) The old school stood at the end of the street. Its windows were broken and the walls were covered in graffiti. Inside, the classrooms were empty except for some old desks and chairs that were falling apart. The floor was covered in dust and leaves that had blown in through the broken windows. On one wall, you could still see where a whiteboard had been. The playground outside was cracked and weeds were growing through the tarmac. It was a sad place because you could imagine children playing there once but now it was completely empty and forgotten.',
              Expected:
                "(b) The gymnasium ceiling had collapsed sometime in the autumn - you could tell by the leaves, a season's worth of them, spread across the parquet floor like a second skin. Sycamore, mostly. Dry and curled and the colour of rust.\n\nI stood in the doorway and let my eyes adjust. The light came in sideways through the high windows - those that still had glass - and fell in long, dusty columns that looked almost solid, as if you could lean against them. The climbing ropes still hung from the steel frame, three of them, frayed at the ends and swaying slightly in a draught I couldn't feel. Below them, the vaulting horse sat exactly where it had always sat, its leather splitting along the seams, the stuffing grey and matted with damp.\n\nThe lines were still visible on the floor. White for badminton. Red for the basketball court. Blue for - what? I couldn't remember. Some game that mattered urgently for forty minutes and then not at all.\n\nI crossed the floor carefully. My footsteps echoed in a way that made me aware of my own solitude - a sound bouncing off surfaces that were designed for a hundred voices and were now, permanently, hearing one. On the far wall, someone had painted a mural: stick figures in bright colours, playing sport, holding hands, smiling enormous smiles. The paint was peeling, and the figures looked like they were dissolving - slowly returning to the wall that had held them, as if the building was reclaiming its surfaces one image at a time.",
              'Greater Depth':
                "(c) Here is the thing about doing the right thing: nobody tells you how quiet it is.\n\nIn films, moral decisions arrive with orchestral accompaniment - swelling strings, a meaningful glance, a slow-motion moment in which the hero's jaw sets with noble determination. In real life, moral decisions arrive at 2:17 in the morning while you're sitting on the bathroom floor in your socks, and there is no music, and your jaw is not set with anything except the effort of not throwing up.\n\nI have the envelope. It's on the kitchen table, next to the fruit bowl and the electricity bill, which feels obscene - that something this important should sit alongside bananas and a demand for £87.40. Inside the envelope is a document. Inside the document is proof that my employer - my employer of eleven years, the company that paid for my daughter's braces and my mother's care home and the kitchen extension we couldn't really afford - has been dumping chemical waste into the river that runs behind the Greenway estate.\n\nI did not go looking for this. I want that on the record, though I'm not sure whose record I'm talking to. I'm talking to my bathroom tiles, apparently. I'm talking to the grouting.\n\nThe facts: I found the documents in a filing cabinet that should have been locked but wasn't, while looking for invoices that I had every legitimate reason to be looking for. The contamination has been going on for at least three years. The chemicals involved are known carcinogens. The Greenway estate has two hundred families. Some of those families have noticed that their children get ill more often than they should. One of those families - I know this because I read the local paper, because I live here, because I am not made of stone - lost a child last year to a rare form of leukaemia.\n\nCorrelation is not causation. I know this. I have been telling myself this for six days.\n\nBut here, on the bathroom floor, at 2:17 in the morning, the distinction between correlation and causation feels like a technicality designed to protect people like my employer from people like me.\n\nSo. The envelope. The kitchen table. The choice.\n\nIf I report this, I lose my job. I lose my pension. I lose the reference I need to get another job in an industry that is smaller and more vindictive than you might imagine. My daughter's braces are not yet paid for. My mother's care home costs £4,200 a month.\n\nIf I don't report this, I keep everything. And I carry the envelope - not on the kitchen table any more, but inside me, a weight that I suspect will only get heavier with time, pressing against my ribs like a second heart that beats with someone else's guilt.\n\nI stand up. My knees crack. The bathroom light flickers - the bulb needs replacing, another thing on the list, another small domestic task that belongs to a life I am about to make very complicated.\n\nI go to the kitchen. I pick up the envelope. I open my laptop.\n\nNobody tells you how quiet it is.",
            },
            markScheme: [
              'Content and ideas: 12 marks - originality, depth, imaginative engagement',
              'Structure and organisation: 8 marks - controlled progression, effective paragraphing, crafted shape',
              'Sentence variety and control: 8 marks - range of sentence types, deliberate effects',
              'Vocabulary and language techniques: 8 marks - ambitious, precise, effective',
              'Technical accuracy: 4 marks - spelling, punctuation, grammar',
              'Top band: assured, original writing with distinctive voice and sophisticated craft',
            ],
          },
        ],
      },
      {
        id: 'y9-t2-justification',
        title: 'Section B: Spoken Justification',
        description: 'Explain and justify the creative choices you made in your writing.',
        totalMarks: 10,
        suggestedTimeMinutes: 15,
        questions: [
          {
            id: 'y9-t2-q2',
            questionNumber: 2,
            questionText:
              'In a 2-minute spoken presentation, explain and justify the creative choices you made in your writing.\n\nYou should discuss:\n- why you chose that particular task and what you were trying to achieve\n- specific language or structural choices you made and their intended effects\n- what writers or texts influenced your approach\n- what you would change or develop if you had more time.',
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'spoken-presentation',
            modelAnswers: {
              'Working Towards':
                'Identifies some choices made in the writing. Limited explanation of intended effects. May focus on content rather than craft. Some confidence in delivery.',
              Expected:
                'Clearly explains specific creative choices with reference to intended effects. Identifies at least two language or structural decisions and explains why they were made. References at least one literary influence. Reflects honestly on strengths and areas for improvement. Delivered with confidence.',
              'Greater Depth':
                'Articulates creative choices with sophisticated metalinguistic awareness. Explains how specific techniques create specific effects with precision. Draws meaningful connections to literary influences. Demonstrates genuine critical self-reflection - honest about what works and what does not. Delivery is natural, assured, and intellectually engaging.',
            },
            markScheme: [
              'Identification of creative choices: 3 marks',
              'Quality of justification and analysis of effects: 4 marks',
              'Self-reflection and critical awareness: 3 marks',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Creative Writing): 40 marks',
      'Section B (Spoken Justification): 10 marks',
      'Total: 50 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Assured, original creative writing with distinctive voice and sophisticated craft; articulate spoken justification with genuine critical self-awareness.',
        markRange: '41-50',
      },
      {
        grade: 'Expected',
        description:
          'Effective creative writing with conscious technique and engaging content; clear spoken justification of choices.',
        markRange: '30-40',
      },
      {
        grade: 'Working Towards',
        description:
          'Some creative writing with basic awareness of technique; limited spoken justification.',
        markRange: '19-29',
      },
      {
        grade: 'Below Expected',
        description: 'Simple narrative with limited technique; minimal spoken justification.',
        markRange: '0-18',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 9 - TERM 3: Mini-Essay (OMAM) + Transactional Writing
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y9-t3-combined',
    title: 'Term 3 Assessment: Mini-Essay and Transactional Writing',
    yearGroup: 9,
    termUnit: 'Term 3',
    duration: 60,
    totalMarks: 50,
    sections: [
      {
        id: 'y9-t3-literature',
        title: 'Section A: Literature Mini-Essay',
        description: 'Read the extract from Of Mice and Men below, then answer the question.',
        totalMarks: 30,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'y9-t3-q1',
            questionNumber: 1,
            questionText:
              'Starting with this extract, how does Steinbeck present the theme of loneliness and broken dreams in Of Mice and Men?\n\nWrite about:\n- how Steinbeck uses language and structure in this extract\n- how the theme of loneliness and broken dreams is presented in the novel as a whole.',
            marks: 30,
            suggestedTimeMinutes: 35,
            questionType: 'extract-response',
            extract: Y9_T3_OMAM_EXTRACT,
            extractSource: Y9_T3_OMAM_EXTRACT_SOURCE,
            guidance: [
              'Start with close analysis of the extract, then broaden to the whole novel',
              'Consider how this moment represents the death of the dream',
              "Think about Candy's loneliness and what he has lost",
              'Consider the structural significance of this moment in the novel',
              'Engage with the American Dream and 1930s context',
            ],
            modelAnswers: {
              'Working Towards':
                'In this extract, Steinbeck shows loneliness through Candy\'s reaction to finding Curley\'s wife dead. Candy is described as looking "helplessly" which shows he is powerless. He tries to speak but "nothing came from his lips" which shows he is in shock. The sounds from outside - the horseshoe game - contrast with the silence in the barn, showing that life goes on while terrible things happen. Candy is lonely because his dream of owning a farm with George and Lennie is now over. In the novel as a whole, most characters are lonely - Crooks is isolated because of racism, Curley\'s wife is lonely because no one talks to her, and George and Lennie are unusual because they have each other.',
              Expected:
                'Steinbeck presents loneliness and broken dreams in this extract through a devastating structural juxtaposition between the stillness of death and the continuation of ordinary life. The barn becomes a sealed space of grief: "For a very long moment the barn was silent" - the adjective "very" stretching the silence almost unbearably, while the specificity of "long moment" makes time itself oppressive. Against this, Steinbeck positions "the clang of horseshoes on the iron stake, and the shouts of men, playing" - a catalogue of communal activity from which Candy is now permanently excluded. The progression of his response - from confusion ("looked about helplessly") to recognition ("He understood") to attempted speech ("nothing came from his lips") - enacts the stages of grief in miniature, and the verb "understood" carries a weight beyond the immediate situation: Candy understands not just that Curley\'s wife is dead, but that the dream is dead with her.\n\nIn the wider novel, Steinbeck constructs loneliness as the defining condition of itinerant workers in 1930s America. Each character\'s isolation takes a different form - Crooks\'s is racial, Curley\'s wife\'s is gendered, Candy\'s is a function of age and disability - but all are products of the same economic system that treats workers as disposable. The dream of the farm functions as the novel\'s central metaphor for belonging: "We\'d have our own place" is not really about property but about escape from the loneliness that the ranch perpetuates. This extract marks the moment when that dream collapses, and Steinbeck\'s cruel structural irony - that the dream dies at the hands of the novel\'s loneliest character (Curley\'s wife, who goes to Lennie precisely because she has no one else to talk to) - suggests that loneliness is not just a theme but a destructive force that generates its own tragedies.',
              'Greater Depth':
                'Steinbeck presents loneliness and broken dreams in this extract through a technique of contrapuntal narration that positions individual grief against collective indifference, producing an effect that is simultaneously intimate and politically charged.\n\nThe extract\'s opening establishes a troubling stillness: Curley\'s wife "lay on her side in the hay, and she was still." The conjunction "and" is crucial - it coordinates death with the domestic scene (the sun, the horses) as though stillness were simply another element of the barn\'s routine, prefiguring the novel\'s suggestion that death, like loneliness, is absorbed by the landscape without alteration. The sensory details that follow - "halter chains rattled," "horses snorted," "clang of horseshoes" - create an acoustic landscape of normalcy that makes Candy\'s discovery more devastating by contrast: the world has not registered this death. The final sentence - "Outside, far away, the men played the horseshoe game with great energy and pleasure" - is one of Steinbeck\'s most structurally devastating: the adverbial "far away" measures not just physical distance but emotional disconnection, and the nouns "energy" and "pleasure" become almost obscene in their proximity to death.\n\nCandy\'s response enacts the collapse of the dream at the level of syntax. His stammered "Tell Lennie not to come back. Tell Lennie. Tell George" fragments into repetition, the imperative "Tell" becoming a compulsive verbal tic rather than a meaningful instruction - language breaking down under the weight of what it must carry. The verb "understood" is the extract\'s most loaded word: Candy understands that Curley\'s wife\'s death will expose Lennie, which will destroy the dream, which will return Candy to the isolation he had briefly escaped. The sequence of implications collapses into that single word.\n\nIn the novel as a whole, Steinbeck constructs loneliness not as an individual failing but as a structural condition of American capitalism in the Depression era. The ranch is designed to prevent connection: workers are transient, friendships are temporary, and the dream of ownership is always deferred. George and Lennie\'s partnership is presented as an anomaly - "guys like us, that work on ranches, are the loneliest guys in the world" - and the novel\'s tragic architecture ensures that this anomaly cannot survive. Curley\'s wife, who dies nameless, embodies the intersection of gendered and economic isolation: she is lonely because the patriarchal structure of the ranch denies her agency, voice, and companionship, and her death - caused by another marginalised figure, Lennie - demonstrates Steinbeck\'s recurring argument that loneliness does not create solidarity among the powerless but destroys them. The American Dream, in Steinbeck\'s vision, is not merely unattainable but actively harmful: it sustains hope that the system is designed to betray.',
            },
            markScheme: [
              'AO1: Clear response with relevant references to extract and wider text (10 marks)',
              'AO2: Analysis of language and structural choices (10 marks)',
              'AO3: Context (American Dream, Depression, social structures) (5 marks)',
              'AO4: Quality of written expression (5 marks)',
              'Top band: conceptualised argument with sophisticated, original analysis',
            ],
          },
        ],
      },
      {
        id: 'y9-t3-transactional',
        title: 'Section B: Transactional Writing',
        description: 'Complete the transactional writing task below.',
        totalMarks: 20,
        suggestedTimeMinutes: 25,
        questions: [
          {
            id: 'y9-t3-q2',
            questionNumber: 2,
            questionText:
              'A national newspaper is running a series on "The Issues That Define Our Generation."\n\nWrite an opinion article for this series, arguing what you believe is the single most important issue facing young people today.\n\nYou should:\n- write in a style appropriate for a national newspaper\n- present a clear, well-argued case\n- use evidence, examples, and persuasive techniques\n- engage with counter-arguments.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            guidance: [
              'Choose an issue you can argue about with conviction and evidence',
              'Use a headline and subheading if appropriate',
              'Open with a hook - a striking statistic, anecdote, or statement',
              'Structure: hook, argument, evidence, counter-argument, conclusion',
              'Write with authority - adopt the register of quality journalism',
            ],
            modelAnswers: {
              'Working Towards':
                "The Most Important Issue Facing Young People Today\n\nI think the most important issue facing young people today is mental health. More and more young people are struggling with anxiety and depression, and the support available is not good enough. Schools should do more to help students with their mental health. Waiting lists for therapy are too long and many young people suffer in silence. We need to take this issue seriously because it affects everything - education, relationships, and future careers. If we don't act now, a whole generation will be let down.",
              Expected:
                'The Loneliness Epidemic Nobody Is Talking About\n\nWe are, by every measurable standard, the most connected generation in history. We carry devices in our pockets that grant us instantaneous access to billions of people. We share, like, comment, and follow. We have 400 friends on Instagram and 1,200 followers on TikTok. And we are lonelier than any generation before us.\n\nThat is not hyperbole. A 2024 survey by the Mental Health Foundation found that 65% of young adults aged 18-24 reported feeling lonely "often" or "always" - a figure that has more than doubled since 2010. We are not merely alone; we are structurally isolated, our social lives mediated through screens that create the illusion of connection while delivering none of its substance.\n\nThe counter-argument is predictable: get off your phone. Touch grass. Join a club. And these suggestions are not without merit - genuine, embodied social interaction remains the most effective remedy for loneliness. But they also miss the point. Young people did not choose the digital architecture that now organises their social lives. We inherited a world in which physical third spaces - youth clubs, libraries, community centres - have been systematically defunded, and the vacuum has been filled by platforms whose business model depends on our continued engagement, not our wellbeing.\n\nLoneliness is not a lifestyle choice. It is a public health crisis with political causes and political solutions. We need investment in physical spaces. We need regulation of platforms. And we need, above all, to stop treating connection as a personal responsibility and start treating it as a public good.',
              'Greater Depth':
                '[Extended opinion article with nuanced argument, specific evidence, sophisticated counter-argument engagement, and a conclusion that reframes the issue in unexpected terms.]',
            },
            markScheme: [
              'Content and argument: 8 marks - clarity, persuasion, evidence, counter-arguments',
              'Structure and organisation: 4 marks - appropriate format, logical progression',
              'Language and register: 4 marks - appropriate for audience and purpose',
              'Technical accuracy: 4 marks - spelling, punctuation, grammar',
              'Top band: compelling journalism with sophisticated argument and confident register',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Literature Mini-Essay): 30 marks',
      'Section B (Transactional Writing): 20 marks',
      'Total: 50 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive literature essay with sophisticated analysis and contextual engagement; compelling transactional writing with confident journalistic register.',
        markRange: '41-50',
      },
      {
        grade: 'Expected',
        description:
          'Clear literature essay with relevant analysis and some context; effective transactional writing with appropriate register.',
        markRange: '30-40',
      },
      {
        grade: 'Working Towards',
        description:
          'Some relevant literature analysis; basic transactional writing with limited register awareness.',
        markRange: '19-29',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited literature response; simple transactional writing with minimal persuasive technique.',
        markRange: '0-18',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 9 - END OF YEAR: IGCSE-Style Combined Paper
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y9-eoy',
    title: 'End of Year Assessment: IGCSE-Style Combined Paper',
    yearGroup: 9,
    termUnit: 'End of Year',
    duration: 75,
    totalMarks: 60,
    sections: [
      {
        id: 'y9-eoy-reading',
        title: 'Section A: Reading',
        description: 'Read the extract below carefully, then answer Questions 1 and 2.',
        totalMarks: 30,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'y9-eoy-q1',
            questionNumber: 1,
            questionText:
              'Re-read the extract from "The Mill Girl."\n\n(a) Identify FOUR things we learn about Mary\'s working conditions from the extract. (4 marks)\n\n(b) How does the writer use language to present the impact of factory work on the workers? Refer to specific words and phrases in your answer. (10 marks)',
            marks: 14,
            suggestedTimeMinutes: 15,
            questionType: 'analytical-response',
            extract: Y8_T1_EXTRACT,
            extractSource: Y8_T1_EXTRACT_SOURCE,
            modelAnswers: {
              'Working Towards':
                '(a) 1. Mary works twelve-hour shifts. 2. The air is full of cotton dust. 3. The overseer carries a leather strap. 4. Mary earns three shillings and sixpence a week.\n\n(b) The writer uses the phrase "cotton dust" to show the unhealthy conditions. The workers "coughed constantly" which shows they are getting ill. Elsie is "fifteen and looked thirty" which means the work is ageing her. The factory is described as a "grey ocean" which makes it seem huge and overwhelming.',
              Expected:
                '(a) 1. Mary works twelve-hour shifts in a factory. 2. The air is thick with cotton dust that settles on hair, skin, and lungs. 3. An overseer carries a leather strap and punishes workers who fall below quota. 4. Mary\'s wages are three shillings and sixpence per week, given directly to her father.\n\n(b) The writer presents factory work as a process of systematic dehumanisation through language that blurs the boundary between worker and machine. The workers move with "the mechanical rhythm of the loom itself" - the prepositional phrase "of the loom" transfers agency from person to machine, suggesting the workers have become extensions of the equipment rather than autonomous beings. The dust imagery - "it settled on everything - hair, skin, lungs" - uses a tricolon that moves from external (hair) to internal (lungs), implying that the factory\'s contamination penetrates progressively deeper into the body. The description of Elsie as "fifteen and looked thirty" condenses years of exploitation into a single image: the verb "looked" separates biological age from apparent age, suggesting factory work does not merely tire workers but fundamentally transforms their bodies. The word "adjusted" in "Your body adjusts" is darkly ironic: it uses the language of adaptation, as though the body\'s response to harmful conditions were a positive development rather than a symptom of normalised suffering.',
              'Greater Depth':
                '(a) 1. The factory floor is vast, with rows of machines and workers hunched over spinning thread. 2. The air contains cotton dust that causes a chronic wet cough among workers. 3. Mary is twelve but the foreman falsified her employment age as fourteen. 4. The overseer uses a leather strap on workers who fail to meet production quotas.\n\n(b) The writer deploys language that systematically erases the distinction between worker and industrial process, presenting factory labour as a form of corporeal colonisation. The simile "like a grey ocean" reduces the factory to a featureless expanse, the adjective "grey" draining colour and individuality simultaneously - workers are not differentiated but dissolved into the monochrome landscape of production. The participle "hunched" is particularly telling: it describes both a temporary posture and a permanent physical consequence, suggesting that the factory reshapes bodies into the forms most useful for its purposes. The dust imagery operates through structural intensification: the tricolon "hair, skin, lungs" maps an inward trajectory, the factory literally infiltrating the body\'s interior. The irony of "adjusts" - Elsie\'s reassurance that the body accommodates its own destruction - exposes how the rhetoric of resilience can function as a tool of oppression: if suffering is reframed as adaptation, then the system that produces it is absolved of responsibility. Elsie herself embodies the temporal cost of exploitation - "fifteen and looked thirty" - the gap between these numbers measuring not years but extracted life.',
            },
            markScheme: [
              '(a) 1 mark per correct identification, maximum 4 marks',
              '(b) Analyses specific language choices and their effects (10 marks)',
              'Top band: perceptive analysis with word-level precision and conceptual insight',
            ],
          },
          {
            id: 'y9-eoy-q2',
            questionNumber: 2,
            questionText:
              "How does the writer structure the extract to develop the reader's understanding of Mary's situation?\n\nConsider how the focus shifts between paragraphs and the effect of the ending.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'analytical-response',
            extract: Y8_T1_EXTRACT,
            extractSource: Y8_T1_EXTRACT_SOURCE,
            modelAnswers: {
              'Working Towards':
                "The extract starts by describing the factory and then focuses on Mary specifically. Each paragraph adds more information about her bad situation - first the work, then the health problems, then how she doesn't even get to keep her own money. The ending is about her dream of reading, which is sad because she can't have it. The structure builds up a picture of how trapped she is.",
              Expected:
                'The writer structures the extract through progressive layering, each paragraph adding a new dimension of deprivation to create a cumulative effect of entrapment. The opening paragraph establishes the physical environment with a wide-angle view - "the factory floor stretched before her like a grey ocean" - before narrowing to Mary, a structural movement from collective to individual that positions her as one vulnerable figure within a vast, dehumanising system. The second paragraph shifts to the body, focusing on health consequences with clinical precision. The third paragraph introduces the economic and patriarchal structures that compound Mary\'s exploitation, broadening the lens again to encompass family and society. The final paragraph\'s structural function is devastating: by ending with a dream about reading, the writer shifts from the material world to the imaginative, only to collapse the boundary between them - "dissolved like the cotton dust" - making the factory contaminate even Mary\'s interior life. The circular structure - she walks "to the factory in the dark" - refuses narrative progress, mimicking the trap of poverty.',
              'Greater Depth':
                'The extract is structured as a systematic inventory of deprivation, each paragraph stripping away a further layer of autonomy to reveal the full architecture of Mary\'s entrapment - and the final paragraph\'s structural position suggests that the cruellest deprivation is not material but imaginative.\n\nParagraph one operates cinematically: the wide establishing shot ("the factory floor stretched before her") locates Mary within the industrial landscape before the zoom narrows to her specific body ("Mary was twelve years old"). The parenthetical revelation of her falsified age - "the foreman had written fourteen" - is structurally embedded within the factory description, a detail absorbed by the paragraph\'s routine, mirroring how child exploitation is absorbed by the system. Paragraph two escalates from space to body: the dust imagery maps an inward trajectory, suggesting contamination that penetrates beyond the physical. Paragraph three introduces the structural irony that compounds class exploitation with patriarchal exploitation - Mary\'s wages travel "directly" from her labour to her father\'s leisure, and the structural positioning of "bread and dripping for supper" as the paragraph\'s closing image makes deprivation the consequence of a chain of male authority.\n\nThe final paragraph functions as the extract\'s structural and emotional climax, but one that operates through inversion: instead of escalating action, the writer retreats inward to the space of the dream. The dream of reading is structurally positioned as an alternative world - a room "full of books" where "the words made perfect sense" - yet the dissolving simile ("like the cotton dust") re-contaminates this interior space with the factory\'s material reality. The final image - walking "to the factory in the dark" - creates a cyclical structure that forecloses progress, making the extract itself a structural model of the poverty trap. The word "dark" resonates as both literal and metaphorical: it is the darkness of early morning, of ignorance denied education, and of a future already determined.',
            },
            markScheme: [
              'Comments on structural progression across the extract',
              'Analyses shifts in focus (perspective, register, subject)',
              'Discusses the effect of the opening and ending',
              'Uses structural terminology with precision',
              'Top band: perceptive structural analysis that connects form to meaning',
            ],
          },
        ],
      },
      {
        id: 'y9-eoy-writing',
        title: 'Section B: Writing',
        description: 'Choose ONE writing task. You have 40 minutes for this section.',
        totalMarks: 30,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'y9-eoy-q3',
            questionNumber: 3,
            questionText:
              'Choose ONE:\n\n(a) Write a descriptive piece about a person at work. Focus on creating a vivid sense of the person, their environment, and how the work affects them.\n\nOR\n\n(b) "Every generation inherits problems it did not create." Write an argumentative essay exploring this idea.\n\nYou will be assessed on:\n- the quality of your ideas and their development\n- your use of language for effect\n- structural and grammatical control\n- technical accuracy.',
            marks: 30,
            suggestedTimeMinutes: 40,
            questionType: 'creative-writing',
            guidance: [
              'Spend 5 minutes planning',
              'For (a): use sensory detail, show the person through their actions and environment',
              'For (b): take a clear position, use evidence, address the counter-argument',
              'Aim for 500-700 words',
              'Leave 3-4 minutes to proofread',
            ],
            modelAnswers: {
              'Working Towards':
                '(a) The baker starts work at four in the morning when it is still dark. He opens the shop and turns on the ovens. The kitchen is warm and smells of bread. He works quickly, making loaves and rolls and pastries. His hands are covered in flour. By the time the first customers arrive at seven, there are rows of fresh bread on the shelves. He works hard every day and never complains.',
              Expected:
                '(a) She counts in loaves.\n\nFour a.m.: twelve white, eight granary, six sourdough. The numbers arrive before consciousness does, before the lights are fully on, before the flour dust has risen from the surfaces where it settled overnight like a pale, domestic snow.\n\nHer name is Diane, and she has been baking bread for thirty-one years. Her hands know things her mind no longer bothers to remember - the precise moment when dough has been kneaded enough, the exact temperature at which a proving drawer produces the finest rise, the difference between a crust that will shatter and one that will merely break. These are not skills she can articulate. They live in her fingers, in the muscles of her forearms, in the particular way she tilts her head when listening to an oven - because ovens, she will tell you, have voices, and a baker who cannot hear them has no business being in a kitchen.\n\nThe shop opens at seven. Between four and seven, Diane inhabits a world of heat and rhythm: the slap of dough on steel, the mechanical hum of the mixer, the soft percussion of trays sliding into racks. She moves through this world with an economy of movement that looks like ease but is, in fact, the visible residue of decades of repetition - every gesture refined, every unnecessary motion eliminated, until what remains is something closer to choreography than labour.\n\nHer back hurts. It has hurt for eleven years. She does not mention this.',
              'Greater Depth':
                '(b) [Extended argumentative essay with nuanced thesis, historical and contemporary examples, sophisticated engagement with counter-arguments about agency and responsibility, and a conclusion that reframes the question of inheritance as one of moral obligation.]',
            },
            markScheme: [
              'Content and ideas: 10 marks - quality, originality, development',
              'Structure and organisation: 6 marks - effective progression, coherent shape',
              'Language and vocabulary: 8 marks - ambitious, precise, effective techniques',
              'Technical accuracy: 6 marks - spelling, punctuation, grammar',
              'Top band: assured, compelling writing with distinctive voice and sophisticated craft',
            ],
          },
        ],
      },
    ],
    markScheme: [
      'Section A (Reading): 30 marks - retrieval (4) + language analysis (10) + structural analysis (16)',
      'Section B (Writing): 30 marks - creative or argumentative writing',
      'Total: 60 marks',
    ],
    gradeDescriptors: [
      {
        grade: 'Greater Depth',
        description:
          'Perceptive reading analysis with conceptualised argument; assured writing with distinctive voice, sophisticated craft, and technical precision.',
        markRange: '49-60',
      },
      {
        grade: 'Expected',
        description:
          'Clear, developed reading analysis with relevant evidence; effective writing with conscious technique and mostly accurate spelling/punctuation.',
        markRange: '36-48',
      },
      {
        grade: 'Working Towards',
        description:
          'Some relevant reading analysis with basic evidence; writing shows some awareness of technique with reasonable accuracy.',
        markRange: '23-35',
      },
      {
        grade: 'Below Expected',
        description:
          'Limited reading response; basic writing with limited technique and frequent errors.',
        markRange: '0-22',
      },
    ],
    modelAnswers: {
      'Greater Depth': 'See individual section model answers at Greater Depth level.',
    },
  },
]

// ─── Export ──────────────────────────────────────────────────────────────────

export const curriculumAssessments: CurriculumAssessment[] = [
  ...y7Assessments,
  ...y8Assessments,
  ...y9Assessments,
]
