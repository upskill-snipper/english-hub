// @ts-nocheck
// ─── AQA GCSE English Language Paper 1 Mock Exam Papers ─────────────────────
// 6 Complete Mock Exams: Explorations in Creative Reading and Writing
// Paper 1 (105 minutes, 80 marks): Section A (Reading, 40 marks) + Section B (Writing, 40 marks)

import type { MockExamPaper, MockExamSection, MockExamQuestion } from './mock-exams'

// ─── Section A: Reading Source Extracts ───────────────────────────────────────

/**
 * Mock 1: "The Night Train" - Contemporary fiction with gothic atmosphere
 */
const MOCK_1_EXTRACT = `The platform was empty except for the woman in the red coat. She stood beneath the station clock, which read 11:47, and did not move. Outside, beyond the glass canopy, the rain fell in sheets, transforming the street beyond into a watercolour painting of grey and silver. The woman did not look at the rain. She looked at the clock.

The 11:50 to Edinburgh was late. The information boards had said so, in their fractured, orange-letter way, for the past twenty minutes. But the woman stood as if she had been turned to stone the moment the announcement was made, her stillness absolute, her breathing so shallow it barely moved the fabric of her coat.

"Final call," said the tannoy. The woman's head turned - a minute, precise movement, like a mechanism engaging. Then she picked up her small leather suitcase and walked toward Platform 3. Her heels clicked against the platform: tap, tap, tap. Each sound was identical to the last, as if she had practised this walk a thousand times. Perhaps she had.

The train emerged from the darkness like something breathing. Its windows were dark too, except for one. In that one bright window, a face appeared. A man's face. He was looking down the platform, searching for something. When he saw the woman in the red coat, his expression did not change. It was as though he had expected to see her. As though he had been waiting.

She climbed aboard. The doors closed. The train gathered speed and disappeared into the tunnel. The platform was empty again, except for the clock, which now read 12:04.`

const MOCK_1_SOURCE = 'Original literary fiction (contemporary)'

/**
 * Mock 2: "The Last Bookshop" - Nostalgic, reflective prose
 */
const MOCK_2_EXTRACT = `The bookshop existed in a state of controlled chaos that its owner, Margaret, called "organised intuition." Shelves rose to the ceiling, their spines a spectrum of colour and time. Some volumes were pristine, their pages uncut, waiting for someone to crack them open for the first time. Others were beloved to the point of collapse, their spines cracked, their margins annotated with the thoughts and arguments of readers long dead.

Margaret knew every book. Not just their titles and authors, but their particular genius, their specific consolations. She knew which novels made people weep, which histories clarified the incomprehensible, which volumes of poetry could resurrect the human spirit when it had begun to calcify. In the forty-three years since she had opened her shop, she had become less a shopkeeper and more a custodian of meaning, a priestess of narrative.

She sat in her leather chair by the window, a cup of Earl Grey growing cold beside her, and watched the world rush past outside. People hurried, heads down, eyes fixed on glowing screens. They did not look up. They did not see the bookshop, did not see the window she had spent an hour that morning arranging, did not see the invitation implicit in everything she had built. Her shop was becoming invisible.

But then - and this happened perhaps once a week - someone would stop. A child. A woman. A man with grey at his temples. They would press their face against the glass, drawn by something they could not name. And Margaret, watching from her leather chair, would smile. These were the ones. These were the believers. And it was for them that she continued to tend to her peculiar kingdom.`

const MOCK_2_SOURCE = 'Original literary fiction (contemporary)'

/**
 * Mock 3: "The Coastal Path" - Nature and memory narrative
 */
const MOCK_3_EXTRACT = `The coast path has changed since I last walked it, twenty years ago. The cliff face has crumbled where it always threatened to crumble, taking with it a section of the path that my sister and I once ran along, our teenage bodies invincible, convinced of our immortality. The memorial bench where my mother sat to rest on her last walk here is gone - stolen, my friend Julie says, by someone who wanted the view for themselves without the encumbrance of aging knees or a grieving daughter.

But some things persist. The sea continues its ancient conversation with the rock, patient, relentless, wearing away at the world grain by grain. The same wildflowers bloom along the path in May: thrift, sea campion, bird's-foot trefoil. The names come back to me as I pass them, their syllables unlocking rooms in my memory that I had thought sealed forever. My mother, pointing: "That one there - what's it called?"

The afternoon light is doing that thing it does here, turning everything gold and amber. For a moment, it is 1987, and we are still walking this path, and my mother is still alive, and my sister still speaks to me. For a moment, the cruelty of time is suspended. The world holds its breath.

Then a dog walker passes, their labrador crashing through the undergrowth, and the spell breaks. I am standing alone on a cliff path in my middle years, and the people I loved are scattered across time like seeds on the wind, and all the grief I thought I had processed rises in my throat like a physical thing, like something I must either swallow or expel.

I swallow. I keep walking.`

const MOCK_3_SOURCE = 'Original lyrical essay (contemporary)'

/**
 * Mock 4: "The Interview" - Dialogue and tension-based narrative
 */
const MOCK_4_EXTRACT = `"You've been with the company for fifteen years," the woman across the desk said. It was not a question. She was reading from a document, her eyes not lifting to meet mine.

"Fifteen years and three months," I said. I don't know why I said this. It seemed important to be precise.

"And in that time, you've never missed a day?"

"Two days," I said. "My daughter was born. And three days when my wife had the accident."

The woman made a small mark on her document. I could not see what it was. The mark seemed disproportionately important. I wanted to ask what it meant, but I did not.

"We're restructuring," she said. "It's nothing personal. The company is making changes. There will be redundancies. Severance packages will be offered to those who qualify."

"I qualify?" I said. But I knew, of course, that I did. Everyone knows. You can feel it in the air, in the way your desk receives no new projects, in the way people stop making eye contact in the corridors.

"You're a good employee," the woman said, and now she did look at me, her gaze steady and professional and utterly devoid of apology. "Which is why we wanted you to hear it from us directly, rather than in a general announcement."

I nodded. This was, I supposed, a kindness. I tried to feel grateful.

"When?" I asked.

"Your final day is a month from Friday." She pushed an envelope across the desk. "This contains the details."

I picked up the envelope. It was heavier than I expected. It contained the rest of my life.`

const MOCK_4_SOURCE = 'Original dramatic fiction (contemporary)'

/**
 * Mock 5: "The Flood" - Crisis and environmental narrative
 */
const MOCK_5_EXTRACT = `The river had stopped being a river at some point during the night. By morning, it had become a brown tide, a roaring throat filled with everything it could take: topsoil from the upstream fields, saplings, furniture, the corrugated iron from someone's shed roof. A dead sheep rotated slowly in the current, its wool darkened to black by the water.

The village of Ashford, which had never flooded in living memory, was flooding. The Environment Agency had issued warnings, but warnings are abstract things, and no one quite believed that their particular valley, their particular stretch of water, would betray them. We are never convinced that catastrophe belongs to us.

Sarah stood in her kitchen, watching the water lap at the back door, and felt a strange detachment, as though she were observing this happening to someone else. The water was the colour of coffee. It had a particular smell - earth and decay and something else, something ancient, like the smell of things being uncovered after centuries of burial.

She had photographs in boxes upstairs. Her children's first-day-of-school uniforms. Letters from her mother, who had been dead for twelve years. A wedding album from 1994 showing a younger version of herself, someone who seemed to belong to a different species. The water was rising. By evening, it would reach the ground floor of her house, and by morning, these things would be gone or destroyed, transformed into pulp.

But standing in her kitchen, watching this happen with the detachment of catastrophe, Sarah felt something unexpected: a release. For forty years, she had kept these objects, maintained them, stored them carefully. They had become a burden, a responsibility. The river was offering her freedom.`

const MOCK_5_SOURCE = 'Original contemporary fiction'

/**
 * Mock 6: "The Last Department Store" - Social observation and critique
 */
const MOCK_6_EXTRACT = `The Edwardian building on Market Street had been transformed into a department store in 1959, back when such places were temples of consumption, cathedrals of capitalism. It had five floors and a grand staircase made of marble that had been imported from Italy. The first floor was cosmetics, where assistants wore white coats and sprayed perfume into the air with the gravity of priests performing sacred rites. The second floor was clothing, divided into sections: ladies' fashions, menswear, children's wear. The third floor was household goods: bedding, kitchenware, small appliances. The fourth floor was furniture, displayed in room-sets to help customers imagine the lives they might live. The fifth floor was a restaurant, all pink tablecloths and delicate china cups.

That was 1959. In 2024, the department store is dying. The building is mostly empty now. The ground floor has been sectioned off and let to a vaping shop and a tax accountant. The stairs to the upper floors are cordoned off with a sign: "This area is no longer in use." Most of the windows are dark. A few still contain the ghosts of old displays: dressmaker's dummies in 1990s fashions, a collection of teapots arranged in a pyramid, a children's bicycle that no one has bothered to remove.

I worked here for three summers when I was sixteen and seventeen. I wore the white coat. I sprayed perfume into the air. I gave advice to women about which foundation matched their skin tone, about the latest shades for spring. I took their money. I wrapped their purchases in tissue paper and placed them in bags with the department store's logo on the side. I was part of something that felt permanent, something that had the weight and solidity of things that would endure forever.

Nothing endures. The women I advised are now in their sixties, seventies. The merchandise I sold them is in landfills. The building itself will be demolished soon - a developer plans luxury apartments. The marble staircase will be broken into pieces and perhaps repurposed, or perhaps simply discarded. The pink restaurant will be gone. The white-coated assistants will disperse into the digital economy, into app-based work, into the gig.`

const MOCK_6_SOURCE = 'Contemporary lyrical essay'

// ─── Complete Mock Exam Papers ────────────────────────────────────────────────

export const aqaLangP1Mocks: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 1: "The Night Train"
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-mock-01',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam 1: "The Night Train"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'mock-01-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_1_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'mock-01-q1',
            questionNumber: 1,
            questionText: `Read again the extract. Choose four of the following statements which are TRUE based on what you have read.\n\nA) The woman is waiting for a train to London.\nB) The station clock shows 11:47 when the woman is waiting.\nC) It is raining outside the station.\nD) The woman is holding a leather suitcase.\nE) The information boards said the train was on time.\nF) A man is waiting on the train.\nG) The woman's heels made no sound on the platform.\nH) The extract ends with the platform being empty.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_1_EXTRACT,
            extractSource: MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'B, C, D, H - These are the four true statements. B: "which read 11:47." C: "the rain fell in sheets." D: "her small leather suitcase." H: "The platform was empty again."',
              'Grade 6-7':
                'B, C, D, H - B is explicitly stated. C: the rain outside is described in detail. D: she picks up her "small leather suitcase." H: final sentence. A is wrong (destination is Edinburgh), E is wrong (the board said late), F is technically true but misleading, G is wrong (taps are mentioned).',
              'Grade 8-9':
                'B, C, D, H - Careful textual analysis: (A) destination explicitly "Edinburgh"; (B) "11:47" verbatim; (C) "rain fell in sheets"; (D) "small leather suitcase"; (E) "late...for twenty minutes"; (F) true but distracting; (G) "tap, tap, tap" explicit; (H) final sentence confirmation.',
            },
            markScheme: [
              '1 mark for each correct statement',
              'Maximum 4 marks',
              'Only clearly marked answers accepted',
            ],
          },
          {
            id: 'mock-01-q2',
            questionNumber: 2,
            questionText: `Look in detail at the extract from "The platform was empty" to "Perhaps she had". How does the writer use language here to create tension and mystery?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_1_EXTRACT,
            extractSource: MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer creates tension through the woman's stillness and controlled movements. The repetition "tap, tap, tap" emphasizes her mechanical walking. The phrase "as if she had been turned to stone" suggests she is frozen and waiting. Her breathing is described as "so shallow it barely moved the fabric," which shows extreme control. The comment "as though she had practised this walk a thousand times" creates mystery about whether this is planned and rehearsed. The conditional "Perhaps she had" leaves this uncertain.`,
              'Grade 6-7': `The writer constructs psychological tension through physical control and narrative ambiguity. The phrase "turned to stone" metaphorically suggests petrification, implying her emotional state has become inhuman. The physiological precision - "breathing so shallow" - suggests pathological anxiety rather than normal anticipation. The auditory repetition "tap, tap, tap" creates mechanical rhythmicity; the word "identical" emphasizes non-organic precision. The simile "as though she had practised this walk a thousand times" combined with the conditional "Perhaps she had" creates interpretative uncertainty: Is this rehearsed reunion or escape? This ambiguity renders the woman simultaneously sympathetic and unsettling, generating tension.`,
              'Grade 8-9': `The writer orchestrates tension through the strategic distribution of information and the construction of affective ambiguity. Metaphorically, "turned to stone" performs petrification - not peaceful stillness but inhuman stasis. The breath passage operates at microscopic physiological register ("barely moved the fabric"), creating specificity that borders on pathological. The auditory repetition functions as metronome, while "identical" suggests mechanical rather than organic movement. Crucially, the simile "practised this walk a thousand times" and the conditional "Perhaps she had" construct what might be termed "narrative unreliability at the level of motivation": the reader cannot determine motive (reunion/escape/performance). This epistemic uncertainty is the source of affective unease. The passage demonstrates how tension emerges not from external action but from the occlusion of psychological access.`,
            },
            markScheme: [
              'Identifies language features: metaphor, repetition, simile, physiological detail',
              'Analyzes effects of specific words on the reader',
              'Explores how language creates mood and psychological tension',
              'Uses subject terminology accurately',
              'Higher bands: sophisticated analysis of ambiguity and interpretative uncertainty',
            ],
          },
          {
            id: 'mock-01-q3',
            questionNumber: 3,
            questionText: `You now need to think about the whole of the source.\n\nHow does the writer use structure to create an atmosphere of mystery and anticipation?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_1_EXTRACT,
            extractSource: MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The extract starts with the woman waiting at the station. The focus is on her stillness and her obsession with the clock. Then the train arrives and a man appears in the window. Finally, the woman boards the train and the platform is empty again. This structure creates mystery because we start confused about why the woman is waiting, then we see the man, which explains why she's there, but we still don't know why. The ending returns to emptiness, suggesting something important has happened.`,
              'Grade 6-7': `The writer constructs a three-movement structure that mirrors dramatic revelation while maintaining mystery. The opening establishes spatial constraint and temporal pressure through the station setting and obsessive focus on the clock, creating urgency within immobility. The woman's absolute stillness dominates the first half, emphasizing her separation from the world. The second section shifts toward action through the train's arrival. The revelation of the man's waiting face appears to clarify narrative meaning, yet the phrase "as though he had been waiting" reconstructs ambiguity. The final image - returning to the empty platform - creates cyclical structure that suggests inevitability rather than dramatic resolution. This structure maintains mystery even as it offers momentary clarity.`,
              'Grade 8-9': `The writer employs a structure of progressive revelation that paradoxically deepens rather than resolves mystery. The opening establishes a hermetic space where temporal obsession is foregrounded. The second and third sections introduce potential narrative clarification through the man's appearance, yet the writer's use of conditional language ("as though," "it was as though") reconstructs ambiguity at the moment of apparent resolution. Most significantly, the final sentence provides spatial closure (boarding complete) without psychological or emotional closure (motivation remains obscure). The structure creates "affective bathos" - the expectation of narrative clarification is deferred through the systematic use of conditional and suppressed interiority. The reader understands what happened but not why, generating the extract's sustained interpretative unease.`,
            },
            markScheme: [
              'Identifies structural features: opening, development, ending, shifts',
              'Analyzes how writer controls reader focus throughout',
              'Comments on effects of structural choices',
              'Explores how structure creates meaning',
              'Higher bands: sophisticated analysis of how structure generates ambiguity',
            ],
          },
          {
            id: 'mock-01-q4',
            questionNumber: 4,
            questionText: `In your view, how effectively does the writer create an atmosphere of mystery and tension in this extract? Refer closely to the text to support your view.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_1_EXTRACT,
            extractSource: MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer creates an effective atmosphere of mystery through the woman's strange behavior and the unexpected arrival of the man. She stands completely still, watching the clock, which is unusual and makes the reader curious. When the train arrives and the man appears in the lit window, it seems like they know each other, but we're not told why. The writer also uses description of the rain and empty station to create a lonely, mysterious feeling. The ending, with the woman boarding and the platform becoming empty again, leaves the reader wondering what will happen next. This is effective because it makes the reader want to know more.`,
              'Grade 6-7': `The writer effectively creates mystery and tension through the controlled deployment of withholding and precise detail. The opening establishes the woman's separateness through absolute stillness, reinforced by the external setting (rain, grey light, empty platform). Temporal markers (clock times) emphasize her obsessive focus on timing, building tension. Crucially, the introduction of the man in the illuminated window promises narrative clarification but instead deepens mystery: his expression "did not change," suggesting premeditation. The phrase "as though he had been waiting" implies a backstory we are denied. The final return to the empty platform creates cyclical structure that closes narrative explanation while opening interpretative questions. This balance between clarity of action and obscurity of motive creates effective tension.`,
              'Grade 8-9': `The writer constructs exemplary narrative mystery through what might be termed "controlled withholding" - the strategic management of information to generate interpretative unease. The opening establishes phenomenological precision (clock reading, visual transformation of rain) that creates a contract with the reader: we are given specific, reliable information. Yet the woman's behavior systematically violates expectations of psychological transparency. Her pathological stillness and mechanical precision suggest something beyond ordinary anticipation. The introduction of the man functions as pseudo-revelation: we are given facts (his existence, his expression) that should clarify motive, yet instead deepen ambiguity. Most significantly, the extract closes with spatial rather than psychological resolution. We know where the woman has gone but not why (motivation) or what happens next (futurity). This structural incompleteness generates affective power. The mystery emerges not from Gothic excess but from deliberate refusal of psychological access. This is mystery as narrative technique rather than plot device.`,
            },
            markScheme: [
              'Engages with the statement; makes clear judgement about effectiveness',
              'Supports judgement with textual references',
              'Analyzes language, form, and structure to support view',
              'Uses precise subject terminology',
              'Sustains argument throughout',
              'Higher bands: sophisticated exploration of alternative interpretations; nuanced argument',
            ],
          },
        ],
      },
      {
        id: 'mock-01-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'mock-01-q5',
            questionNumber: 5,
            questionText: `You are going to write a creative piece.\n\nEither:\n(a) Write a narrative about a mysterious meeting or reunion, OR\n(b) Write a description of a liminal space (like a station, airport, waiting room) that reveals something about human nature.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Write a narrative with clear beginning, middle, and end. Use sensory detail and descriptive language. Include dialogue if effective. Show the reader why the moment is significant. The piece should have approximately 450-500 words with mostly accurate spelling and grammar.',
              'Grade 6-7':
                'Create a well-crafted piece using specific techniques. Vary sentence structures; use short sentences for effect and longer ones for description. Consider using metaphor or imagery. Maintain consistent tone. Approximately 500 words with confident control of technical accuracy.',
              'Grade 8-9':
                'A sophisticated piece demonstrating control of form and language. Show originality in approach. Use linguistic devices purposefully. Demonstrate distinctive authorial voice. Explore psychological or thematic depth. Word choice precise and sometimes unexpected. Spelling and grammar secure throughout.',
            },
            markScheme: [
              'Content and organisation: Clear structure; effective opening and closing',
              'Vocabulary: Precise and varied word choice',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate throughout',
              'Effect on reader: Engages emotionally; creates atmosphere',
              'Higher bands: Sophisticated control; originality; thematic depth',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 2: "The Last Bookshop" (Summary)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-mock-02',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam 2: "The Last Bookshop"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'mock-02-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_2_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'mock-02-q1',
            questionNumber: 1,
            questionText: `Read again the extract. Choose four of the following statements which are TRUE.\n\nA) Margaret has owned the shop for exactly 40 years.\nB) Some books have uncut pages.\nC) Margaret dislikes reading annotations in old books.\nD) Most people notice the bookshop.\nE) Margaret sits in a leather chair.\nF) The bookshop is becoming invisible.\nG) A child once stopped to look at the window.\nH) Margaret sprays perfume into the air.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_2_EXTRACT,
            extractSource: MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'B, E, F, G - True statements with direct textual support.',
              'Grade 6-7':
                'B, E, F, G - (A) "forty-three years," (C) she values annotations, (D) contradicted: they don\'t look up, (H) wrong person.',
              'Grade 8-9':
                'B, E, F, G - Textual validation: (B) "pages uncut," (E) "leather chair," (F) "becoming invisible," (G) "A child" listed among believers.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'mock-02-q2',
            questionNumber: 2,
            questionText: `Look in detail at the description of the bookshop and Margaret's role. How does the writer use language to suggest the value and depth of the collection?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_2_EXTRACT,
            extractSource: MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes books as having "colour and time," suggesting they are valuable and old. Some are "pristine" while others are "beloved to the point of collapse." The phrase about "margins annotated with...readers long dead" shows books contain history. Margaret is called a "custodian of meaning" and "priestess of narrative," which are elevated language suggesting the bookshop is sacred.',
              'Grade 6-7':
                'The writer uses paradox ("controlled chaos") to suggest hidden order. Books "contain time" and their physical degradation charts history. "Beloved to the point of collapse" uses hyperbole to suggest emotional investment. The religious metaphors ("custodian," "priestess") elevate the work to sacred status. The phrase "margins annotated with thoughts and arguments of readers long dead" creates a palimpsestic effect where multiple voices accumulate across generations.',
              'Grade 8-9':
                'The opening paradox ("controlled chaos") contains a philosophical claim about order within apparent disorder. The temporal dimension is crucial: books "contain time," and their physical condition charts degradation as evidence of use/love. "Beloved to the point of collapse" invert conventional value - deterioration indicates significance. The phrase "margins annotated with the thoughts and arguments of readers long dead" operates simultaneously as biographical documentation, interpretative palimpsest, and memento mori. Religious language ("custodian of meaning," "priestess of narrative") asserts that textual work is sacred labor. Physical decay becomes evidence of value - use equals significance.',
            },
            markScheme: [
              'Identifies language features: paradox, metaphor, religious language',
              'Analyzes effects on reader',
              'Explores temporal and spiritual dimensions',
              'Higher bands: sophisticated understanding of how degradation signifies value',
            ],
          },
          {
            id: 'mock-02-q3',
            questionNumber: 3,
            questionText: `How does the writer structure this piece to convey a sense of loss and nostalgia?\n\nYou could write about:\n- what the writer focuses on at the beginning\n- how the focus changes\n- any other structural features.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_2_EXTRACT,
            extractSource: MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The extract starts inside the bookshop showing its beauty and value. Then it shifts to the outside world where people rush past and ignore it. Finally, it shows Margaret waiting for occasional visitors. This structure shows how the bookshop is becoming less important, which creates a sad feeling.',
              'Grade 6-7':
                'The structure moves from intimate interior (bookshop magnificence) to external indifference (world rushing past) to final acceptance (faith in remnant believers). This tripartite movement creates pathos. The contrast between careful curation and societal heedlessness is structurally significant. The final paragraph offers consolation rather than resolution - a "once a week" community. This arc from abundance to erasure to diminished hope creates melancholic tone.',
              'Grade 8-9':
                'The writer constructs three movements enacting elegiac form. The opening establishes plenitude - abundant books, Margaret\'s expertise, sacred work. The second movement introduces external temporality moving at different pace, operating on different logic, failing to perceive the bookshop. This section performs loss through narrative contrast. The final movement recalibrates expectations without restoring plenitude. Margaret\'s continued work is positioned not as triumph but as care for remnant. The phrase "once a week" quantifies loss. Structurally, the passage enacts its own thematic content through temporal architecture: past abundance, present indifference, diminished future.',
            },
            markScheme: [
              'Identifies three-part structure',
              'Analyzes movement from abundance to loss',
              'Explores how structure creates emotional effect',
              'Higher bands: sees structure as enacting theme',
            ],
          },
          {
            id: 'mock-02-q4',
            questionNumber: 4,
            questionText: `In your view, is Margaret's optimism at the end of the extract fully justified? Use evidence from the text to support your view.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_2_EXTRACT,
            extractSource: MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Margaret's optimism is not fully justified because the bookshop is dying. Most people don't notice it. Margaret only has a few believers \"once a week.\" This is not enough to keep a business running. However, Margaret seems happy to serve these few people, which shows her optimism is real emotionally, even if it's not practical.",
              'Grade 6-7':
                'Margaret\'s optimism is partially but not fully justified. The evidence shows genuine loss: the bookshop is "becoming invisible," clients are fewer, building is underutilized. The phrase "perhaps once a week" quantifies insufficient support for sustainability. However, the writer values Margaret\'s work through elevated language, and the connections she makes are portrayed as genuine. Her optimism is justified psychologically but not economically. The passage presents a tragedy where the losing battle is spiritually significant.',
              'Grade 8-9':
                'The passage constructs ambiguous position toward Margaret\'s optimism through sophisticated narrative perspective. Her faith is presented as genuine, yet the quantification "once a week" is insufficient for viability. The writer\'s valorization of her role suggests success is not measured economically but existentially. The individuated description of believers creates qualitative counter-narrative to quantitative decline. The passage enacts "justified pessimism masquerading as optimism" - Margaret\'s work is meaningful precisely because it is marginal, a resistant practice against cultural erasure. The ambiguity is not resolved; instead the passage asks whether meaning requires institutional success.',
            },
            markScheme: [
              "Clear judgment about optimism's justification",
              'Textual support for view',
              'Analysis of evidence',
              'Engagement with paradox',
              'Higher bands: recognizes ambiguity; explores alternative interpretations',
            ],
          },
        ],
      },
      {
        id: 'mock-02-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'mock-02-q5',
            questionNumber: 5,
            questionText: `Write about a place that is changing or disappearing. Explore what is being lost and what this means to those affected.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Write about a specific place with details showing what it was like and what is happening to it. Include people affected and their feelings. Use descriptive language. Roughly 450 words.',
              'Grade 6-7':
                'Use sensory detail and contrast between past and present. Include character perspective through action/dialogue. Vary sentence structures. Tone should be reflective. Roughly 500 words with secure control.',
              'Grade 8-9':
                'Sophisticated exploration moving beyond nostalgia. Use precise imagery. Control perspective and time carefully. Explore what loss reveals about values or ways of being. Spelling and grammar secure throughout.',
            },
            markScheme: [
              'Content and organisation: Clear focus on change; coherent structure',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Emotional and thematic depth',
              'Higher bands: sophisticated handling of perspective and theme',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 3: "The Coastal Path" (Summary)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-mock-03',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam 3: "The Coastal Path"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'mock-03-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_3_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'mock-03-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) The narrator walked the path twenty years ago.\nB) The memorial bench is still there.\nC) The cliff has remained unchanged.\nD) The narrator can remember flower names.\nE) The narrator's mother has recently died.\nF) A dog walker interrupts the narrator's memories.\nG) The narrator sits down to rest at the end.\nH) The final line is "I swallow. I keep walking."`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_3_EXTRACT,
            extractSource: MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'A, D, F, H - True with direct textual support.',
              'Grade 6-7':
                'A, D, F, H - (B) false: "gone," (C) false: "crumbled," (E) "dead for twelve years," (G) false: "keep walking."',
              'Grade 8-9': 'A, D, F, H - Each clearly validated from extract.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'mock-03-q2',
            questionNumber: 2,
            questionText: `Look in detail at the final section from "The afternoon light" onwards. How does the writer use language to convey the narrator's emotional response?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_3_EXTRACT,
            extractSource: MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The light creates a magical moment described as "gold and amber." The narrator imagines it is 1987 and everyone is still alive. Then grief "rises in my throat like a physical thing," which shows powerful emotion. The narrator can either "swallow or expel" it, showing they must control the feeling. The final sentence "I swallow. I keep walking" is short and simple, showing quiet strength.',
              'Grade 6-7':
                'The passage demonstrates emotional complexity through sensory detail and temporal collapse. The conditional time shift ("For a moment, it is 1987") suspends reality temporarily. The metaphor "rose in my throat like a physical thing" transforms abstract emotion into embodied physiology. The binary choice - "swallow or expel" - shows emotion threatening to overflow. The final sentence uses short, monosyllabic words with parataxis to convey numbness rather than peace. This shift from rich description to austere statement enacts emotional flattening.',
              'Grade 8-9':
                'The passage enacts "temporal melancholia" where environmental return triggers time collapse. The conditional "For a moment, it is 1987" paradoxically negates reality while asserting affective power. The metaphor "rose in my throat like a physical thing" operates at physiological register - grief threatens bodily overflow. The binary choice ("swallow or expel") eliminates processing, offering only containment. The final sentence demonstrates stylistic affective flattening through parataxis and monosyllabicity, performing not peace but mechanical continuation. The extract positions the body as site of emotional regulation and the landscape as trigger for affective archaeology.',
            },
            markScheme: [
              'Identifies language features: metaphor, conditional time, embodied emotion',
              'Analyzes physiological dimension of emotional experience',
              'Explores how syntax performs emotion',
              'Higher bands: sees form enacting theme',
            ],
          },
          {
            id: 'mock-03-q3',
            questionNumber: 3,
            questionText: `How does the writer use landscape description to explore memory and loss?\n\nYou could write about:\n- what has changed\n- what has persisted\n- how the landscape triggers emotion.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_3_EXTRACT,
            extractSource: MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The landscape has changed - the cliff has crumbled and the bench is gone. But the wildflowers still bloom, and their names come back to the narrator. This shows some things change while others persist. The landscape triggers memories of being there with family members who are now dead or distant. The path becomes a place where past and present meet, where loss is made visible.',
              'Grade 6-7':
                "The landscape functions as palimpsest of loss. Changes (crumbled cliff, missing bench) establish physical transformation mirroring temporal passage. However, wildflower persistence complicates this - while humans disappear, natural cycles continue. The sensory return of flower names demonstrates how memory operates through embodied sensation. The structure moves from external loss to internal affect. The passage differentiates types of persistence: geological erosion (inevitable), theft (human disruption), natural cycles (continuing). This suggests loss operates through different mechanisms but all converge in the narrator's emotional return.",
              'Grade 8-9':
                'The landscape functions as mnemonic device operating across multiple temporal registers. The opening establishes physical transformation through two mechanisms: inevitable natural process (cliff crumbling) and human appropriation (bench stolen). These losses are differentiated. Natural elements persist while human memorialization is vulnerable. The reintroduction of wildflowers introduces counter-temporal movement. Crucially, the recovery of flower names is not intellectual but embodied ("syllables unlocking rooms"). The passage\'s final collapse where 1987 returns enacts involuntary memory. The landscape is simultaneously proof of loss and mechanism of reclamation. Nature persists beyond personal absence; this is both consoling and desolating.',
            },
            markScheme: [
              'Identifies how landscape registers change',
              'Analyzes temporal layers in description',
              'Explores connection between landscape and memory',
              'Higher bands: sees landscape as repository of multiple time frames',
            ],
          },
          {
            id: 'mock-03-q4',
            questionNumber: 4,
            questionText: `Does the narrator's final action of "keeping walking" represent acceptance or suppression of grief? Use evidence to support your interpretation.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_3_EXTRACT,
            extractSource: MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The action could be either. Continuing the walk shows the narrator is not defeated by grief, which suggests acceptance. But the phrase "I swallow" suggests the narrator is holding feelings inside rather than dealing with them, which suggests suppression. The simple, short sentences make it seem like the narrator is numb rather than at peace. The text doesn\'t clearly tell us which interpretation is correct.',
              'Grade 6-7':
                'The textual evidence suggests suppression rather than acceptance. The binary "swallow or expel" shows grief is something that must be controlled or managed, not integrated. The verb "swallow" has physiological undertones of forcing something down. The final syntax - parataxis and monosyllabicity - conveys numbness rather than peace. The word "keep" suggests compulsion or automaticity rather than purposeful choice. This appears to be coping mechanism rather than genuine acceptance.',
              'Grade 8-9':
                'The action enacts suppression as survival strategy. The climactic moment - grief "rising like a physical thing" - positions the subject as threatened with emotional overflow. The binary choice eliminates processing, offering only containment. The narrator elects "swallowing," the more controlled option. The subsequent syntax demonstrates stylistic affective flattening. However, the passage does not condemn suppression. The act of "keeping walking" maintains forward momentum, performing quotidian discipline of continuing despite loss. This represents neither acceptance nor healing, but recognition that survival requires bodily discipline. The final action is simultaneously suppression and necessity, neither affirmed nor condemned but recognized as condition of persistence.',
            },
            markScheme: [
              'Clear judgment supported by evidence',
              'Analysis of specific language choices',
              'Engagement with ambiguity',
              'Higher bands: recognizes suppression as survival strategy; nuanced reading',
            ],
          },
        ],
      },
      {
        id: 'mock-03-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'mock-03-q5',
            questionNumber: 5,
            questionText: `Write about returning to a place after a long absence. Explore how the place has changed and how this affects your emotions and perspective. 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Describe return to familiar place, changes observed, emotional reactions. Use sensory details. Roughly 450 words with mostly accurate technical control.',
              'Grade 6-7':
                'Use contrast between past and present. Precise sensory detail. Varied sentence structures. Avoid simple nostalgia. Roughly 500 words with secure control.',
              'Grade 8-9':
                'Sophisticated exploration recognizing return is never to the same place. Control time carefully. Employ language techniques deliberately. Explore what comparison reveals about identity/resilience. Secure technical control throughout.',
            },
            markScheme: [
              'Content and organisation: Clear focus on return; effective detail',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Emotional engagement; complexity of memory',
              'Higher bands: sophisticated handling of time and perspective; thematic depth',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 4: "The Interview"
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-mock-04',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam 4: "The Interview"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'mock-04-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_4_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'mock-04-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) The narrator has been absent from work recently.\nB) The woman is reading from a document.\nC) The narrator has one daughter.\nD) The narrator's wife was in an accident.\nE) The woman describes the redundancies as personal.\nF) The narrator's final day is a month away.\nG) The narrator feels grateful for the direct communication.\nH) The envelope was heavier because it contained money.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_4_EXTRACT,
            extractSource: MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'B, D, F, G - With textual support.',
              'Grade 6-7':
                'B, D, F, G - (A) false: "never missed a day," (C) one child mentioned, (E) false: "nothing personal," (H) meaning, not literal content.',
              'Grade 8-9': 'B, D, F, G - Each clearly validated from text.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'mock-04-q2',
            questionNumber: 2,
            questionText: `Look in detail from the beginning to "but I did not". How does the writer use language to establish power dynamics between the narrator and the woman?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_4_EXTRACT,
            extractSource: MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The woman makes a statement, not a question: "You\'ve been with the company for fifteen years." This shows she is in control, not asking but telling. The narrator adds "and three months," trying to show importance, but the woman doesn\'t respond. Her eyes do "not lift" to meet his, showing she is avoiding connection. The narrator "could not see" what her mark meant, showing he lacks information and power. The woman controls what is known and what is hidden.',
              'Grade 6-7':
                'The writer constructs power through dialogue and physical gesture. The woman\'s opening statement is presented as fact, not question, establishing institutional authority. The narrator\'s addition ("and three months") demonstrates anxious precision - an attempt to assert control through exactitude. However, the woman\'s physical detachment ("eyes not lifting") negates this. She controls information (the document), leaving the narrator dependent on speculation. The phrase "I could not see what it was. The mark seemed disproportionately important" reveals his interpretative anxiety and epistemic dependence. Power operates through asymmetrical distribution of information.',
              'Grade 8-9':
                'The passage enacts institutional subjection through epistemic inequality and ocular denial. The woman\'s opening performs a performative gesture of authority - not inquiry but assertion. The narrator\'s defensive addition ("and three months") demonstrates what might be termed "compensatory precision." Crucially, the passage employs ocular restriction: "her eyes not lifting" denies reciprocal vision, enacting Lacanian objectification. She possesses the document (institutional knowledge); he cannot access it. She inscribes meaning ("small mark") that he cannot decode. This asymmetry - she knows, he speculates - demonstrates power at the level of information distribution. His thought ("The mark seemed disproportionately important") reveals paranoid interpretation produced by epistemic deprivation. Power operates not through coercion but through strategic withholding of information.',
            },
            markScheme: [
              'Identifies dialogue patterns and physical language',
              'Analyzes information asymmetry',
              'Explores ocular/bodily aspects of power',
              'Higher bands: sees power as structural/epistemic rather than individual',
            ],
          },
          {
            id: 'mock-04-q3',
            questionNumber: 3,
            questionText: `How does the writer use dialogue and the narrator's thoughts to show his emotional response to the redundancy news?\n\nYou could write about:\n- the narrator\'s dialogue compared to his thoughts\n- how his thoughts reveal his true feelings\n- the contrast between external and internal.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_4_EXTRACT,
            extractSource: MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The narrator\'s dialogue is careful and controlled. He gives measured responses, explaining his absences. But his thoughts show he is anxious. He wonders what the woman\'s mark means. He admits "Everyone knows" about the redundancy - he already expected this. At the end, thinking "It contained the rest of my life" shows he understands this is a major life change. The contrast between his calm dialogue and his anxious thoughts makes the reader understand his real emotional state.',
              'Grade 6-7':
                'The writer constructs emotional arc through dialogue and interiority. The dialogue is sparse and formal - "professional and utterly devoid of apology" - emphasizing constraint. Against this, his thoughts reveal catastrophic internal experience. His anxious elaboration ("and three months") contrasts with his admission "I don\'t know why I said this," revealing emotional dysregulation. The phrase "Everyone knows" suggests anticipatory compliance. The interpretative anxiety over the mark reveals need to impose narrative meaning on events beyond control. The final image - the envelope\'s unexpected heaviness, its metaphorical content ("the rest of my life") - operates as emotional climax. Trauma is experienced as embodied materiality.',
              'Grade 8-9':
                'The passage constructs subjective annihilation through discourse register manipulation. Dialogue operates as "institutional script" - pre-written utterances allowing the woman no personal feeling and the narrator no intervention. Her statements are declarative, not interrogative. His dialogue reveals constraint and compliance. Against this, his interiority demonstrates progressive erasure of autonomous agency. The gap between utterance and understanding ("I don\'t know why I said this") reveals alienation from his own speech. His thought "Everyone knows" enacts preemptive capitulation - he has internalized his own superfluity. Most significantly, the passage enacts what might be termed "affective bathos": where emotional access seems imminent ("I tried to feel grateful"), it is immediately qualified. The final image - the envelope, its weight, its metaphorical content - represents extreme objectification: remaining existence condensed into material form. The passage thus demonstrates how institutional capitalism operates not through violence but through systematic distribution of narratives positioning the subject as already dead, already redundant.',
            },
            markScheme: [
              'Identifies gap between dialogue and thought',
              'Analyzes how thought reveals true emotion',
              'Explores themes of control and compliance',
              'Higher bands: sees progressive subjective annihilation',
            ],
          },
          {
            id: 'mock-04-q4',
            questionNumber: 4,
            questionText: `To what extent is the narrator presented as a passive victim of circumstances beyond his control? Use evidence to support your view.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_4_EXTRACT,
            extractSource: MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The narrator is quite passive. He knows it's coming - \"Everyone knows\" - but doesn't resist. He doesn't argue or negotiate. He even tries to feel grateful, accepting the institutional narrative. The woman controls the meeting. However, he does respond with explanations about his absences, showing some attempt at agency. Overall, he is mostly passive, but not completely helpless.",
              'Grade 6-7':
                'The passage presents the narrator as substantially passive, with failed attempts at agency. He arrives knowing it is predetermined, suggesting acceptance of powerlessness. His attempt at control through precision ("and three months") is negated by the woman\'s non-response. He cannot access institutional knowledge or comprehend the process. His phrase "Everyone knows" suggests internalized defeat. However, moments of attempted meaning-making (elaborated responses, interpretation of marks, interpretation of the envelope) suggest effort to maintain narrative control. These efforts are ultimately ineffective. Most significantly, "I tried to feel grateful" reveals internalized compliance - he expects himself to appreciate his own elimination. The narrator is neither entirely passive nor active, but someone whose agency is systematically dismantled.',
              'Grade 8-9':
                'The passage constructs paradigmatic institutional subjection transcending simple passivity. The narrator does not merely fail to resist; he appears unable to conceive resistance as possible. His phrase "Everyone knows" enacts preemptive capitulation - internalization of already-determined fate. His attempts at agency (temporal precision, meaning-making attempts) all fail to register institutionally. Most significantly, the passage enacts "affective colonization" - the narrator has internalized the institution\'s logic so thoroughly that he experiences his elimination as something he should appreciate. Thus passivity is not chosen but is the objective condition produced by structural constraint. He is not weak because he lacks strength; he is weak because power is distributed in ways rendering his will irrelevant. The passage\'s final image condenses his condition: his remaining temporality is no longer his own but administered as institutional policy. The text thus presents passivity not as individual failure but as condition produced by contemporary institutional capitalism where workers internalize the logic of their own superfluity.',
            },
            markScheme: [
              'Clear judgment on passivity',
              'Textual evidence for view',
              'Analysis of failed agency',
              'Engagement with institutional dimensions',
              'Higher bands: sees passivity as structural condition rather than character weakness',
            ],
          },
        ],
      },
      {
        id: 'mock-04-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'mock-04-q5',
            questionNumber: 5,
            questionText: `Write about a moment when someone's life changes unexpectedly. Explore both external events and internal emotional response. 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Describe pivotal moment. Include events, dialogue, setting, thoughts, feelings. Use sensory detail. Show how understanding changes. Roughly 450 words.',
              'Grade 6-7':
                'Use internal and external perspectives. Include dialogue for tension. Precise sensory detail grounding reader. Varied sentence structures. Explore gap between external and internal. Roughly 500 words.',
              'Grade 8-9':
                'Sophisticated narrative exploring temporal and phenomenological dimensions. Multiple temporal frames if effective. Control point of view. Recognize major changes are often quiet rather than dramatic. Explore what moment reveals about character/values. Secure technical control.',
            },
            markScheme: [
              'Content and organisation: Clear focus on life-changing moment; effective detail',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Emotional engagement; explores internal experience',
              'Higher bands: sophisticated handling of perspective and time; originality; thematic depth',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 5: "The Flood"
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-mock-05',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam 5: "The Flood"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'mock-05-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_5_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'mock-05-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) The river had been flooding for years.\nB) Ashford had never flooded in living memory.\nC) The Environment Agency issued warnings.\nD) Sarah has children.\nE) The water was the colour of mud.\nF) Sarah felt afraid about losing possessions.\nG) The water smelled of earth and decay.\nH) Sarah felt release rather than fear.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_5_EXTRACT,
            extractSource: MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'B, C, G, H - With textual support.',
              'Grade 6-7':
                'B, C, G, H - (A) "at some point during the night," (D) correct, but not about release, (E) "colour of coffee," (F) "detachment," not fear.',
              'Grade 8-9': 'B, C, G, H - Each clearly validated.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'mock-05-q2',
            questionNumber: 2,
            questionText: `Look at the first paragraph describing the river. How does the writer use language to create a sense of destructive power?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_5_EXTRACT,
            extractSource: MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer says the river "stopped being a river" and became "a roaring throat," which makes it sound like an animal. The word "roaring" is threatening. The river is carrying everything - soil, trees, furniture, metal - showing it destroys everything. The dead sheep shows it kills. These details show the power to destroy.',
              'Grade 6-7':
                'The writer creates apocalyptic atmosphere through catalogue of displaced objects and metaphor of transformation. "Stopped being a river" performs semantic inversion - familiar becomes alien. "Roaring throat" personifies as voracious consumer. The list of objects moves from natural to domestic, showing the flood destroys all order. The dead sheep proves lethality. The colour description - "colour of coffee" - is deliberately prosaic against apocalyptic imagery, creating cognitive dissonance. The overall effect uses concrete detail to make catastrophe viscerally present.',
              'Grade 8-9':
                'The passage constructs environmental catastrophe through phenomenology of objects and temporal rupture. "Stopped being a river" enacts ontological transformation. The metaphor "roaring throat" attributes biological interiority and appetite. The catalogue of objects - topsoil, saplings, furniture, corrugated iron, dead sheep - enacts "anti-pastoral" where natural and domestic are indiscriminately mixed. Objects are incorporated into the water\'s movement ("rotated slowly"), suggesting deathly ballet. The dead sheep functions as focal point proving extinction. The colour - "colour of coffee" - is deliberately mundane, creating beauty: cognitive rupture between familiar and catastrophic. The passage thus demonstrates how environmental catastrophe operates phenomenologically: not as abstract data but as displacement of objects, transformation of familiar spaces, revelation of the river\'s agency intruding into human territories.',
            },
            markScheme: [
              'Identifies language features: metaphor, personification, list, colour',
              'Analyzes effects of specific words',
              'Explores how language creates sense of unstoppable force',
              'Higher bands: sees objects and their fate as central to meaning',
            ],
          },
          {
            id: 'mock-05-q3',
            questionNumber: 3,
            questionText: `How does the writer use Sarah's thoughts and feelings to contrast with the physical catastrophe occurring?\n\nYou could write about:\n- Sarah\'s emotional response compared to the flood\'s physical destruction\n- what her detachment reveals\n- her unexpected reaction to the loss.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_5_EXTRACT,
            extractSource: MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The flood is violent and destructive, but Sarah feels "detachment," as if watching someone else\'s life. This is opposite of what you\'d expect - panic. Instead, she catalogs what will be lost. Rather than fear, she feels "release." The objects (photos, uniforms, albums) were "burden" and "responsibility," so their loss is freedom. This contrast shows how disaster is experienced differently by different people.',
              'Grade 6-7':
                'The passage juxtaposes external catastrophe with internal emotional remoteness. The writer explicitly states Sarah feels "detachment...as though...someone else." This dissociation is psychologically acute. While describing the flood\'s progression, Sarah remains calm, cataloging what will be lost. The revelation of her unexpected response - "release" - inverts conventional disaster narrative. She has experienced these objects as burden, and the flood offers paradoxical liberation. The passage thus uses Sarah\'s interiority to suggest disaster is experienced differently than external observers might anticipate.',
              'Grade 8-9':
                'The passage enacts traumatic dissociation while deconstructing the assumption that material loss produces proportional emotional trauma. Sarah\'s explicit dissociation ("observing this happening to someone else") is classic trauma response. However, the text complicates by revealing her enumeration of losses operates as meditative listing, not anxious inventory. Most significantly, the passage inverts conventional disaster narrative through her "unexpected" response: "release." Objects were experienced as "burden" and "responsibility," their preservation requiring constant labour. The flood thus severs Sarah\'s bondage to materiality. The passage\'s achievement is refusing resolution: the flood remains catastrophe (others lose homes) while simultaneously becoming opportunity for Sarah. This differential affect is ethically complex - suggests one subject\'s emancipation requires another\'s devastation. The text thus uses Sarah\'s dissociation and release to reveal the heterogeneity of human relationships to material accumulation.',
            },
            markScheme: [
              'Identifies emotional detachment despite catastrophe',
              'Analyzes unexpected response of release',
              'Explores what dissociation reveals about relationship to objects',
              'Higher bands: sees release as inversion of conventional disaster narrative',
            ],
          },
          {
            id: 'mock-05-q4',
            questionNumber: 4,
            questionText: `Is the flood presented primarily as catastrophe or as opportunity for Sarah? Use evidence to support your view.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_5_EXTRACT,
            extractSource: MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The flood is clearly a catastrophe - the river is violent, it destroys homes and possessions. But for Sarah specifically, it might be an opportunity. She has kept objects for forty years as a "burden." The flood frees her from this responsibility. So the passage shows both aspects - the flood is terrible in general, but might be good for Sarah personally.',
              'Grade 6-7':
                "The writer effectively presents the flood with contradictory implications, resisting simple judgment. The opening paragraphs establish it as unmistakably catastrophic: transforming river, displaced objects, dead sheep, threatened homes. Yet Sarah's subjective experience presents it as potential liberation. Rather than fear, she feels detachment and release. The passage presents both perspectives fairly: objective catastrophe alongside Sarah's particular experience of potential freedom. The effectiveness lies in refusing to collapse complexity into sentimental narrative.",
              'Grade 8-9':
                'The passage achieves considerable sophistication by decentering perspective from normative disaster narrative. Conventionally, floods represent unambiguous catastrophe. The opening establishes these meanings convincingly. However, the strategic shift to Sarah\'s interiority introduces what might be termed "epistemic heterogeneity" - the flood means radically different things to different subjects. For Sarah, the flood represents potential emancipation from "cruel optimism" - attachment to objects failing to provide meaning. Her characterization of these things as "burden" and "responsibility" reveals preservation itself as labour, unwanted labour. The flood thus becomes agent of liberation. The passage\'s achievement is refusing resolution: it remains catastrophe (others devastated) while simultaneously becoming opportunity (Sarah\'s emancipation). This refusal of harmonization is ethically complex - suggests one\'s freedom requires another\'s devastation. The passage thus presents the flood not as univocal event but as rupture revealing heterogeneity of human relationships to material accumulation.',
            },
            markScheme: [
              'Clear judgment supported by evidence',
              'Analysis of contradictory dimensions',
              'Engagement with complexity and ambiguity',
              'Higher bands: recognizes differential affects and ethical complexity',
            ],
          },
        ],
      },
      {
        id: 'mock-05-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'mock-05-q5',
            questionNumber: 5,
            questionText: `Write about a natural disaster or environmental crisis from a person's perspective. Explore emotional and psychological effects, not just physical consequences. 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                "Describe disaster and person's experience. Include sensory detail. Show emotional reactions. Describe both physical effects and internal response. Roughly 450 words.",
              'Grade 6-7':
                'Use focused narrative with specific perspective. Include sensory detail and complex emotions (might feel multiple things). Vary sentence structures. Recognize disaster reveals truths about community/character. Roughly 500 words.',
              'Grade 8-9':
                'Sophisticated exploration moving beyond conventional loss narrative. Use precise imagery. Control time carefully. Explore uncomfortable truths: disaster can offer release, loss is unequal, responses contradictory. Secure technical control.',
            },
            markScheme: [
              "Content and organisation: Clear focus on person's experience; coherent structure",
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Emotional and intellectual engagement',
              'Higher bands: sophisticated handling of perspective; thematic complexity; nuance',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 6: "The Last Department Store"
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-mock-06',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam 6: "The Last Department Store"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'mock-06-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_6_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'mock-06-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) The department store was built in 1959.\nB) The building has five floors.\nC) The marble staircase was imported from Italy.\nD) The narrator worked in the children's section.\nE) Luxury apartments are planned for the site.\nF) The narrator worked there for more than one year.\nG) A vaping shop is on the second floor.\nH) The narrator considers the building permanent.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_6_EXTRACT,
            extractSource: MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'B, C, E, F - With textual support.',
              'Grade 6-7':
                'B, C, E, F - (A) "transformed into...in 1959," not built, (D) "white coat" (cosmetics), (G) "ground floor," (H) "Nothing endures."',
              'Grade 8-9': 'B, C, E, F - Each clearly validated from text.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'mock-06-q2',
            questionNumber: 2,
            questionText: `Look at the section from "That was 1959" to the description of the memorial bench. How does the writer use language to convey decline and loss?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_6_EXTRACT,
            extractSource: MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer contrasts the beautiful 1959 store (five floors, marble staircase, pink restaurant) with the present (mostly empty, cordoned stairs, dark windows). Using "That was 1959. In 2024..." creates a dramatic contrast. The phrase "ghosts of old displays" suggests what remains is spectral, not real. The phrase "no longer in use" emphasizes abandonment. The window displays that "no one has bothered to remove" shows carelessness, not careful preservation. The stolen bench shows human loss, not just building decay.',
              'Grade 6-7':
                'The writer creates elegiac tone through accumulation of decline details. The opening "That was 1959" marks temporal rupture; the present is structured as before/after comparison. The 1959 store is characterized through abundance (five floors, specialized sections, luxurious materials). Against this, the present is characterized through emptiness ("mostly empty," "no longer in use," "dark windows") and repurposing (rented to "vaping shop," "tax accountant" - less prestigious tenants). The phrase "ghosts of old displays" employs appropriate language: spectral remainders. The phrase "no one has bothered to remove" suggests indifference. The passage constructs decline through patient accumulation of small abandonments rather than dramatic catastrophe.',
              'Grade 8-9':
                'The passage enacts architectural archaeology mapping temporal strata through diminishment. The syntactic structure - "That was 1959. In 2024..." - performs temporal inversion, positioning past as anterior to degraded present. The 1959 building is characterized through material specificity (imported marble, delicate china, leather chairs) and social ritual (white coats with "gravity," suggesting ceremonial significance). Against this, contemporary building is characterized through negation and vacancy ("mostly empty," "no longer in use," "dark"). The passage employs "architectural melancholia" - the building exists but has lost its function and meaning. The "ghosts of old displays" perform double movement: materially present yet affectively absent. The verb "discarded" confirms these are trash. The final image - marble staircase awaiting demolition - enacts terminal nostalgia: the very material basis of past meaning-making will be "broken into pieces" or "simply discarded." The passage demonstrates not merely economic decline but annihilation of material substrate upon which social meaning was constructed.',
            },
            markScheme: [
              'Identifies contrast between past and present',
              'Analyzes vocabulary of abandonment and emptiness',
              'Explores metaphors of death/spectrality',
              'Higher bands: sees decline as systematic erasure of meaning',
            ],
          },
          {
            id: 'mock-06-q3',
            questionNumber: 3,
            questionText: `How does the writer use the narrator's personal memory to comment on broader social and economic change?\n\nYou could write about:\n- what the narrator remembers\n- what has happened since\n- what this suggests about capitalism and institutions.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_6_EXTRACT,
            extractSource: MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The narrator worked in the store and was part of something that felt permanent and important. But now the building is being demolished and replaced with apartments. The narrator's former customers are now elderly, and the things they bought are in landfills. By using one person's experience, the writer shows how capitalism constantly replaces old things with new things. Nothing lasts - not buildings, not merchandise, not the jobs people do.",
              'Grade 6-7':
                'The passage employs personal memory as lens for examining capitalist transformation. The narrator\'s three summers of employment become emblematic of a historical moment when department stores functioned as ritual spaces with social meaning. Her participation (wearing white coat, dispensing advice, wrapping purchases) positioned her within a meaningful economic order. Against this, the present reveals this entire formation has become superfluous. The observation that customers are "now in their sixties, seventies" and merchandise is "in landfills" enacts temporal archaeology showing the futility of consumption. The passage thus uses personal complicity within the consumer system to comment on consumption\'s inability to produce lasting meaning.',
              'Grade 8-9':
                "The passage constructs sophisticated critique of capitalist temporality by grounding it in personal narrative. The narrator's three summers become temporal anchor when she participated in a disciplinary regime of consumption: prescribed white coat, prescribed role, prescribed rituals of exchange. This was experienced as participation in something \"permanent\" with \"weight and solidity\" - what Bourdieu might call cultural capital. However, the retrospective reveals temporariness masquerading as permanence. The observations of customers' current status (aged) and purchased goods' fate (landfills) enact temporal archaeology demonstrating consumption produces neither lasting value nor durable meaning. Most provocatively, the passage suggests the social formation itself - the department store as ritual space - has been erased by subsequent capital accumulation. The planned luxury apartments represent not merely development but ontological erasure. The marble staircase's pending destruction symbolizes how contemporary capitalism systematically erases traces of previous social formations. The narrator's personal history thus becomes evidence of how capitalism produces and then erases meanings, how each generation is positioned as temporary steward of spaces it mistakenly believes permanent. The passage employs personal narrative not sentimentally but diagnostically, revealing capitalism's fundamental temporal logic: production of obsolescence.",
            },
            markScheme: [
              'Identifies personal memory as lens for broader analysis',
              'Analyzes how individual experience reflects systemic forces',
              'Explores themes of permanence/impermanence and consumption',
              'Higher bands: sees personal narrative as critique of capitalist temporality',
            ],
          },
          {
            id: 'mock-06-q4',
            questionNumber: 4,
            questionText: `The department store is presented as primarily a victim of impersonal economic forces rather than as an institution that deserves to be superseded. How far do you agree? Use evidence to support your view.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_6_EXTRACT,
            extractSource: MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The passage does present the store as a victim. It was beautiful and important, and it's being destroyed for profit. But it also shows the store was part of a consumer system that wasn't particularly good - things ended up in landfills. So the passage is ambiguous. The store is a victim, but it was also part of something wasteful. You could say both things are true.",
              'Grade 6-7':
                'The passage presents the department store with genuine ambivalence. The language used - "temples of consumption," "priestess," "weight and solidity" - creates sympathy for its loss. However, the narrator\'s retrospective view complicates nostalgia. The description "I took their money. I wrapped their purchases" is presented without romance - simple transactions within a consumer system. Crucially, the note that merchandise ended up "in landfills" suggests consumption produced waste rather than lasting value. The passage thus implies the store was both site of genuine social meaning and fundamentally embedded in capitalist logic. Neither the store nor the apartments deserve moral privilege. The passage suggests loss without sentimentality: the store was pleasant but complicit; its obsolescence is regrettable but not unjust.',
              'Grade 8-9':
                'The passage enacts sophisticated critique refusing the victim/deserving binary by demonstrating both operate within same capitalist logic. The question itself contains ideological premise: that victimhood and moral desert are inversely related. However, the passage suggests something more complex: institutions can be simultaneously sites of genuine human meaning-making and complicit in systems producing environmental destruction and capital accumulation. The language describing 1959 is elegiac - "temples," "priestess," "gravity" - generating sympathy. Yet the narrator reveals this was never separate from consumption and commodity production. "I took their money" strips away romantic narrative of service; transactions were fundamentally exchange relationships. The revelation that purchased goods ended up "in landfills" suggests consumption generates neither lasting value nor durable meaning. The passage thus presents the store as genuinely meaningful to those participating in it, yet also as fundamentally embedded in capitalist logic producing waste. The luxury apartments operate within the same capitalist logic: reduction of space to commodity, prioritization of exchange over use value, erasure of previous meanings. Neither institution deserves moral privilege. The passage\'s achievement is suggesting nostalgia for the department store, while understandable, is misplaced. The real tragedy is not the supersession of one institution by another within capitalist logic, but the fact that we continue investing meaning in institutions that are by definition temporary, fungible, structured to produce waste. The passage uses the narrator\'s personal history not to generate sympathy for the store but to reveal the temporal logic that renders all such institutions obsolete.',
            },
            markScheme: [
              'Clear judgment supported by evidence',
              "Analysis of the store's complicity in capitalism",
              'Engagement with complexity and ambivalence',
              'Higher bands: questions the victim/deserving binary; sees both as embedded in capitalist logic',
            ],
          },
        ],
      },
      {
        id: 'mock-06-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'mock-06-q5',
            questionNumber: 5,
            questionText: `Write about a building, institution, or community that is changing or disappearing. Use personal connection to explore broader significance of the change. 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Describe place significant in your life. Show what it was like in past, what it is now, what will become. Include sensory detail. Show how character feels. Roughly 450 words.',
              'Grade 6-7':
                'Use personal perspective to explore institutional change. Describe place at different temporal moments. Precise sensory detail. Avoid clichéd nostalgia. Reflective rather than sentimental tone. Roughly 500 words.',
              'Grade 8-9':
                'Sophisticated exploration using memory not sentimentally but analytically. Control time carefully. Explore complicity of past institutions in systems destroying them. Examine how meaning is produced then erased. Refuse simple nostalgia. Secure technical control.',
            },
            markScheme: [
              'Content and organisation: Clear focus on place and change; effective use of personal connection',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Engages emotionally and intellectually; explores significance beyond sentimentality',
              'Higher bands: sophisticated handling of time, memory, perspective; thematic complexity',
            ],
          },
        ],
      },
    ],
  },
]
