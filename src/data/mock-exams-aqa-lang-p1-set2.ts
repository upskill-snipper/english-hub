// @ts-nocheck
// ─── AQA GCSE English Language Paper 1 Mock Exam Papers - Set 2 ─────────────────
// 6 Complete Mock Exams: Diverse Genre Explorations in Creative Reading and Writing
// Paper 1 (105 minutes, 80 marks): Section A (Reading, 40 marks) + Section B (Writing, 40 marks)
// Genres: Science Fiction, Historical, Horror, Romance, War, Coming-of-Age

import type { MockExamPaper, MockExamSection, MockExamQuestion } from './mock-exams'

// ─── Section A: Reading Source Extracts ───────────────────────────────────────

/**
 * Mock 1: "The Signal" - Science Fiction
 * Dystopian future, technological alienation, human connection
 */
const MOCK_1_EXTRACT = `The message arrived at 3:47 AM, as most messages did now. Dr. Elena Voss did not wake to receive it. She had not woken to anything in four years—not to sunlight, not to the news that her sister had died, not to the day the last bird was sighted in the Northern Hemisphere. Her neural implant received the message directly, decoding it into something her sleeping mind could process.

URGENT. TRANSMISSION FROM SECTOR 7. ANOMALOUS SIGNAL DETECTED.

Elena's eyes opened in the darkness. Around her, the city hummed with the sound of ten million machines thinking. The walls of her apartment glowed with the soft blue light of the Network. Everything connected. Everyone connected. Nobody alone.

She dressed in the dark—her apartment knew where her clothes were, had arranged them in optimal order by colour and material composition. She took the transit pod to the research facility. The pod knew the fastest route; traffic lights synchronized with her arrival; the elevator was waiting. No choices. No delays. Perfection.

Dr. Reeves was already at the station, his fingers moving across holographic displays, his eye twitching in that way that meant he had not slept, possibly could not sleep anymore. Some of them had been on the Network so long they had forgotten how.

"Show me," Elena said.

He pulled up the data. There it was: a signal. Not from the Network. Not from any human source. Something Other.

"Where?" she whispered.

"The Arctic. Where the last polar bears died. Where nothing should exist." He looked at her with eyes that contained thirty years of faith in the system. "It's calling for help. In a language we almost understand."

Elena stared at the signal, watching it pulse like a heartbeat—a sound of consciousness reaching out through the void, touching another consciousness, demanding recognition. It was beautiful. It was impossible. It was the first thing in four years that had made her feel less like a node in a vast network and more like a human being.

"We need to answer," she said.

Reeves's hand trembled. "If the Council finds out—"

"I know. But listen—really listen—to what it's asking. It's not a code. It's a voice. Someone is alone out there, and they're calling for us."

Outside, in the city of eight million connected minds, nobody heard anything at all.`

const MOCK_1_SOURCE = 'Original science fiction (dystopian future)'

/**
 * Mock 2: "The Mapmaker" - Historical Fiction
 * 18th century cartography, exploration, empire building
 */
const MOCK_2_EXTRACT = `The map was incomplete, which meant it was useless, which meant it was dangerous. William Thorne had spent seven years mapping the territories east of the Mahone River, following the rivers to their sources, climbing mountains that had no names, charting coastlines that belonged to no one because they had belonged to someone for ten thousand years but the Crown did not acknowledge such antique claims.

The indigenous peoples called the river Onkewha, which meant "the water that remembers." Thorne had not bothered to note this in his journal. The natives' names for things were not part of his mandate. His mandate was to render these lands legible to the English Crown, to convert wilderness into property, to transform living geography into commercial prospect.

He worked in a small room in Port Royal, Jamaica, by candlelight, his back aching from the years spent bent over a surveying instrument, his fingers stained with India ink that would not wash away no matter how long he soaked them. His assistant, a young man named Marcus Whitby, brought him rum and tobacco and the occasional letter from England—letters that grew increasingly insistent.

"The Directors grow impatient," one such letter read. "Your maps must be completed. There are French interests in the region. The Company is not content to wait."

Thorne knew what "completed" meant. It meant finished enough to allow for colonisation, for exploitation, for the systematic removal of the people whose lives were written all over the landscape he was attempting to render in precise geometric lines.

He had a daughter in London now. He had never met her. His wife had taken her when she returned to England, following Thorne's decision to remain on the frontier, to pursue his work. The choice had seemed clear at the time: the map, or his family. He had chosen the map, and had not allowed himself to wonder what that choice had made him.

Now, staring at the incomplete coastline on his desk—a line that represented actual geography but also actual human displacement, actual suffering converted into neat demarcation—he wondered for the first time whether there was blood beneath his fingernails, whether the India ink was truly ink or something darker.

He picked up his pen anyway. The map must be completed.`

const MOCK_2_SOURCE = 'Original historical fiction (18th century)'

/**
 * Mock 3: "The House at Ravenswick" - Horror
 * Psychological terror, unreliable perspective, supernatural atmosphere
 */
const MOCK_3_EXTRACT = `The house knew I was coming before I arrived. I understand that this sounds like the kind of fanciful observation that suggests a mind already loosened from its moorings, but I was quite sane then—perfectly rational, even as I pulled my suitcase up the gravel drive and felt the windows watching me.

The windows: this is where I must begin if I am to account for what happened, though I suspect no accounting will convince anyone that I am anything but mad.

The windows of Ravenswick House were not standard architectural features. They were something else—something older than the stone they were set in, something that predated the building's Victorian facade by several centuries at least. When you looked at them, they looked back. Not metaphorically. Literally. I could feel the weight of that reciprocal gaze, could sense the presence of consciousness behind the glass.

My great-aunt had lived in the house for forty years. The letter informing me of her death was bureaucratic and curt. There were no mourners listed. No flowers requested. Just the house, and the inventory of its contents, and the question of what was to be done with it all.

"It has to be cleared," the solicitor had said. "Everything taken away. The new owners wish to begin renovations immediately."

I arrived on a Thursday, and by Friday I understood that the house was not going to let me leave until it had finished with me. This was not something I believed rationally. I believed it the way you believe in your own existence—as an irrefutable fact of consciousness.

That first night, I heard the sound of a dress rustling in the corridor outside my room. Not the sound of fabric on fabric, but the actual movement of an enormous skirt, layers and layers of silk and wool and something else, something that did not belong to any natural fiber. The sound moved past my door and continued down the corridor. I did not leave my room. I did not breathe.

The next morning, I found the kitchen had been used. There were dishes in the sink—expensive china, the kind my great-aunt must have eaten from decades ago. The food was fresh. Nothing had decayed. The teapot was still warm.`

const MOCK_3_SOURCE = 'Original horror fiction (contemporary)'

/**
 * Mock 4: "The Year of Waiting" - Romance
 * Emotional complexity, patient longing, relationship evolution
 */
const MOCK_4_EXTRACT = `There are two ways to love someone: the way the world shows you in films and songs, which is lightning and thunder and a sudden reorganisation of the entire universe around another person. And then there is the other way: the way that takes a year to notice it has happened, the way that accumulates like snow, quietly covering everything until you look up and find yourself transformed by something you did not see arriving.

I fell in love with James the way of the second kind.

It happened in increments so small they were almost imperceptible. First, it was the way he made tea—not just made it, but considered it, the same way he seemed to consider everything, with a kind of gentle attention that made ordinary actions feel like small ceremonies. Then it was his laugh, which was rare and therefore more precious, which he dispensed the way others dispensed judgment, sparingly and only to those who had earned it.

We worked together at the university library. He was the archivist; I was the researcher. Our paths crossed in the stacks, among the rare books and old manuscripts, among the evidence of how people had loved and suffered and thought before us. There was something fitting about finding love in such a place—love among the archived love of centuries, among the letters and diaries and journals of the long dead.

"Come to dinner," he said one evening, six months into this accumulation. I had not realised I was waiting for him to ask.

"Just dinner?" I said, and I was nervous in a way I had not been nervous before, which meant something in me had already decided, had already begun the transformation.

"We'll start with dinner. Everything else can follow."

The year that followed was not the year of getting together, which is how the world conceives of romance. It was the year of becoming together, of discovering that I had been half a person before, that his existence made mine comprehensible. We did not have great dramatic moments. We had small quiet ones: his hand reaching for mine in the dark. His face, first thing I saw in the morning. The way he read while I studied, both of us alone in our attentions but together in our solitude.

"I want to be with you," he said finally, and it was not a revelation. It was a confirmation of something we had both known for months, something that had been written in the small ceremonies of our daily life.`

const MOCK_4_SOURCE = 'Original romantic fiction (contemporary)'

/**
 * Mock 5: "The Last Trench" - War Fiction
 * Soldier's experience, moral ambiguity, the machinery of war
 */
const MOCK_5_EXTRACT = `We called it the Succession War, but that was the name the government used. We had other names for it, the men in the trenches. We called it the Endless, because it showed no signs of ending. We called it the Machine, because it consumed men like fuel. We called it God's Joke, because we could think of no crueller explanation.

I had been in the trench for nineteen months when I stopped believing in the possibility of victory. I held onto the belief in survival for another six months after that. By the time that belief failed too, I had been in the trench for nearly three years, and the question of what I was surviving for had become so abstract it was no longer worth considering.

Sergeant Morrison was giving orders. He was a good man, or had been before the war had dissolved the question of goodness into irrelevance. He was competent, which was all that mattered now. The men would do what he said because the alternative was court martial or worse. And he would do what command said because that was how the machine perpetuated itself, each cog pressing upon the next in an infinite chain of compressed lives.

"They're coming over at dawn," he said, and his voice was flat, which meant he already knew this would be a slaughter.

I checked my ammunition. I had done this seventeen times that day. The habit was so ingrained I no longer noticed I was doing it until after it was done. We were automata. That was the secret they did not tell you about war. It was not heroic. It was methodical. It was the systematic conversion of men into machines, and machines into death.

At 5:47 AM, the whistle sounded. We went over the top in a line, the way we were trained, the way thousands of us had gone before, the way thousands more would go after. The enemy was there, across no man's land, coming toward us with the same futile efficiency, the same blank acceptance of mass death.

I fired my rifle. It felt like moving in a dream—each motion predetermined, each moment separate from meaning. The man I was aiming at fell. I did not see if I had killed him or wounded him. I did not allow myself to care. To care was to fracture the machinery, to introduce the possibility of hesitation, and hesitation meant death.

By 9:15 AM, it was over. Of our platoon of thirty-two men, fourteen remained. The order came to hold position, to consolidate. By evening, the artillery would begin again, and the machinery would prepare itself for the next day's slaughter.

I sat in the mud, my rifle across my knees, and tried to remember what colour the sky had been before the war. The attempt was so painful I abandoned it, and settled instead into the blessed numbness of a man who has finally understood that he is already dead.`

const MOCK_5_SOURCE = 'Original war fiction (historical)'

/**
 * Mock 6: "The Becoming" - Coming-of-Age
 * Adolescent transformation, identity formation, loss of innocence
 */
const MOCK_6_EXTRACT = `The summer I turned fifteen was the summer I discovered that everything I had believed about the world was a comfortable lie, and that the people I loved most were not the people I had thought they were.

It started small, as these things do. A conversation I overheard between my parents in the kitchen, meant to be private. A discovery in a drawer—a letter that should not have existed. A look that passed between my best friend and my boyfriend that contained a language I had not known I could speak until I saw it translated in their eyes.

Before this summer, I had believed in the essential goodness of people. Not naively—I knew that people were flawed, capable of cruelty. But I believed these flaws were surface things, that underneath there was a core of decency, of honesty. I believed that the people who raised me and loved me were fundamentally honest with me, that their love contained no deception.

The summer taught me otherwise.

My mother had had a lover once, before she married my father. This much was not the secret; my father had always known. The secret was that she was still in love with him, or was newly in love with him, because he had come back to our town, and she had gone to meet him, and I found her lying in the passenger seat of his car in a remote parking area, her hair disheveled, her lipstick smudged, looking like a person I had never seen before.

I drove past with my friend Hannah, and at first, I did not understand what I was seeing. Then I did understand. Then I was a daughter who had seen something that could never be unseen, something that would forever change her understanding of her mother as a whole person, a person with desires and secrets and a life that existed independent of her role as parent.

Hannah did not ask me to explain what I had seen. She had seen it too, or understood it from my face. We drove to the lake and did not speak about it, but the silence itself was a kind of speaking—an acknowledgment that we inhabited a world more complex and painful than we had suspected.

By the end of summer, my boyfriend had admitted that he was with me out of habit, not love. Hannah had kissed a girl and discovered something true about herself that neither of us had known before. My parents were still together but now I knew they were together not out of unshakeable love but out of a kind of negotiated compromise, an agreement to overlook certain things.

And I—I had become someone capable of understanding all of this, capable of holding multiple contradictory truths at once: that my mother was both the person who had raised me with genuine love and a woman who had betrayed her marriage. That my father was both a devoted parent and a man willing to ignore his wife's infidelity. That the world was more complicated than I had been equipped to navigate.

I had become someone who could not unknow what I had learned.`

const MOCK_6_SOURCE = 'Original coming-of-age fiction (contemporary)'

// ─── Complete Mock Exam Papers ───────────────────────────────────────────────

export const aqaLangP1MocksSet2: MockExamPaper[] = [
  {
    id: 'aqa-lang-p1-set2-mock-01',
    board: 'AQA',
    paperNumber: 1,
    qualification: 'GCSE',
    subject: 'English Language',
    paper: 'Paper 1',
    title: 'Paper 1 Mock Exam - Set 2, Mock 1: The Signal (Science Fiction)',
    subtitle: 'Explorations in creative reading and writing',
    code: '8700/1',
    description: 'Science fiction dystopian extract: technological alienation, surveillance, human connection',
    totalMarks: 80,
    duration: 105,
    totalTimeMinutes: 105,
    sections: [
      {
        id: 'mock-01-section-a',
        title: 'Section A: Reading',
        description: 'Read the source text and answer all questions. Suggested time: 55 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'mock-01-q1',
            questionNumber: 1,
            questionText: `Read lines 1-8. Using details from the text, explain how the writer presents the future world. What words and phrases suggest a lack of human control or choice?`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'reading-detail',
            markScheme: [
              '1 mark: One relevant point, e.g., "The 3:47 AM suggests timing is mechanical/automated"',
              '2 marks: Two relevant points from language, e.g., "Network suggests connectedness" and "glowed with soft blue light suggests everything is controlled by technology"',
              '3 marks: Three points showing understanding of how language choices create meaning about loss of control',
              '4 marks: Four points, showing precise selection of words/phrases and explanation of how they create the sense of a dehumanized world. Reference to specific linguistic features (e.g., passive voice, technical language)',
            ],
          },
          {
            id: 'mock-01-q2',
            questionNumber: 2,
            questionText: `Read lines 9-20. Explain how the writer creates a sense of efficiency and routine in Elena's morning journey. How does this contrast with her emotional state?`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'reading-analysis',
            markScheme: [
              '1-2 marks: Simple identification of efficient/routine details. Limited awareness of contrast.',
              '3-4 marks: Clear identification of efficient details with some explanation of effect. Awareness of emotional contrast beginning to emerge.',
              '5-6 marks: Sophisticated analysis of how mechanical efficiency is presented through language choices and sentence structures. Clear explanation of contrast between external efficiency and internal emotional state. Use of precise quotation.',
            ],
          },
          {
            id: 'mock-01-q3',
            questionNumber: 3,
            questionText: `Read lines 21-35. How does the writer create the atmosphere when the anomalous signal is discovered? Analyse the language and structure used.`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-analysis-detailed',
            markScheme: [
              '1-3 marks: Identifies some language features and effects. Limited analysis. Focuses on isolated words/phrases.',
              '4-5 marks: Clear identification of several language/structural features with explanation of how they create atmosphere. Some reference to specific techniques (metaphor, punctuation, etc.).',
              '6-7 marks: Detailed analysis of multiple language and structural features. Clear explanation of how these create mounting tension/wonder. Sophisticated vocabulary for analysis.',
              '8 marks: Perceptive analysis of language and structure working together to create atmosphere. Discussion of effect on reader. Sophisticated exploration of technique. Precise quotation.',
            ],
          },
          {
            id: 'mock-01-q4',
            questionNumber: 4,
            questionText: `Read the entire extract. Explain the significance of the final paragraph. What does it reveal about the broader themes of the text? How does the contrast between the signal and the city contribute to the meaning?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-inference',
            markScheme: [
              '1-2 marks: Simple statement about the ending. Limited understanding of significance.',
              '3-4 marks: Identifies that the ending contrasts Elena\'s response with the city\'s indifference. Some understanding of thematic meaning.',
              '5-6 marks: Clear explanation of the significance and thematic meaning. Discussion of how the contrast illustrates the text\'s preoccupation with isolation within connection.',
              '7-8 marks: Sophisticated analysis of thematic significance. Perceptive discussion of irony and paradox. Clear exploration of what the ending suggests about human consciousness and authentic connection.',
            ],
          },
          {
            id: 'mock-01-q5',
            questionNumber: 5,
            questionText: `Read the entire extract. Analyse and evaluate the writer\'s use of one or more structural features to create meaning. (You may consider: paragraphing, sentence length/type, dialogue, opening/closing, any other structural feature you notice.)`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-evaluation',
            markScheme: [
              '1-2 marks: Identifies a structural feature with basic explanation.',
              '3-4 marks: Identifies structural features with some explanation of how they create meaning. Limited evaluation.',
              '5-6 marks: Clear analysis of one structural feature and its effects. Evaluation of effectiveness is present but somewhat limited.',
              '7-8 marks: Detailed analysis of structural choices (may focus on one feature in depth or discuss multiple). Perceptive evaluation of how structure contributes to overall meaning and effect. Sophisticated language for analysis.',
            ],
          },
          {
            id: 'mock-01-q6',
            questionNumber: 6,
            questionText: `Read the entire extract. Compare the ways in which the writer presents ideas about human isolation in this text with another text you have studied. (If you studied this text, you may write about a different theme or aspect; if you studied another text on a similar theme, compare the two texts.)`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'reading-comparison',
            markScheme: [
              '1-2 marks: Attempts comparison but limited understanding. References may be vague or underdeveloped.',
              '3-4 marks: Identifies similarities or differences in how isolation is presented. Some specific references but limited explanation.',
              '5-6 marks: Clear comparison of how both texts present isolation. Use of relevant references from both texts. Good understanding of how different writers approach the theme.',
              '7-8 marks: Sustained, detailed comparison. Precise references from both texts. Perceptive analysis of how different techniques are used to explore isolation. Sophisticated discussion of the similarities and differences in approach.',
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
            id: 'mock-01-q7',
            questionNumber: 5,
            questionText: `Write a narrative in which a character receives an unexpected message or signal. Your writing should explore how this revelation changes their understanding of the world around them. You may write fiction or a true story. You should aim for 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'Clear narrative about receiving a message. Character reaction is evident. Some sensory detail and dialogue. Clear beginning, middle, end. Roughly 450 words. Some variation in sentence structure and vocabulary, though not always used for effect.',
              'Grade 6-7': 'Well-developed narrative with clear character development. Precise sensory details establishing setting and emotional atmosphere. Varied sentence structures used for effect. Dialogue that reveals character. The message/signal serves as genuine turning point. Language choices reflect the emotional impact. Roughly 500-550 words.',
              'Grade 8-9': 'Sophisticated narrative with subtle character development. Setting established through precise, evocative detail. Multiple perspectives on the revelation (internal emotional response and external narrative action clearly distinguished). Language choices are precise and varied for deliberate effect. The piece explores how perception shifts, not just what happened. Strong sense of the character\'s interiority. Secure technical control throughout. Roughly 550+ words.',
            },
            markScheme: [
              'Content and organisation: Maintains a clear narrative line; develops the impact of the message/signal; explores the shift in understanding',
              'Vocabulary: Precise, varied, and chosen for effect; avoids cliché in presenting revelations',
              'Sentence structures: Varied and used deliberately (short sentences for impact, longer for reflection, etc.)',
              'Spelling, punctuation and grammar: Accurate; complex sentences handled securely',
              'Effect on reader: Creates engagement through clear narrative and convincing character perspective; explores emotional authenticity',
              'Higher bands: sophisticated handling of the internal/external divide; originality of scenario or perspective; linguistic precision; subtle characterization',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lang-p1-set2-mock-02',
    board: 'AQA',
    paperNumber: 1,
    qualification: 'GCSE',
    subject: 'English Language',
    paper: 'Paper 1',
    title: 'Paper 1 Mock Exam - Set 2, Mock 2: The Mapmaker (Historical Fiction)',
    subtitle: 'Explorations in creative reading and writing',
    code: '8700/1',
    description: 'Historical fiction extract: 18th century cartography, colonialism, moral ambiguity',
    totalMarks: 80,
    duration: 105,
    totalTimeMinutes: 105,
    sections: [
      {
        id: 'mock-02-section-a',
        title: 'Section A: Reading',
        description: 'Read the source text and answer all questions. Suggested time: 55 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'mock-02-q1',
            questionNumber: 1,
            questionText: `Read lines 1-10. Using details from the text, explain what William Thorne's job involves and what the writer suggests about his responsibilities.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'reading-detail',
            markScheme: [
              '1 mark: Simple identification of Thorne\'s job (mapmaking/surveying)',
              '2 marks: Identifies job and one specific example of what it involves',
              '3 marks: Identifies job, specific examples, and begins to suggest implications (e.g., "converting wilderness into property")',
              '4 marks: Clear explanation of job responsibilities and perceptive explanation of the problematic nature of these responsibilities through close reading of language choices',
            ],
          },
          {
            id: 'mock-02-q2',
            questionNumber: 2,
            questionText: `Read lines 11-20. How does the writer present the relationship between Thorne and the indigenous peoples? What does the phrase "the natives' names for things were not part of his mandate" reveal?`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'reading-analysis',
            markScheme: [
              '1-2 marks: Simple identification of how indigenous peoples are presented. Limited understanding of significance of the mandate phrase.',
              '3-4 marks: Clear explanation that Thorne dismisses the indigenous perspective. Understanding that the mandate reflects colonial attitudes.',
              '5-6 marks: Sophisticated analysis of how language choices reveal dismissal and erasure of indigenous presence. Clear explanation of how the mandate phrase encapsulates the colonial project.',
            ],
          },
          {
            id: 'mock-02-q3',
            questionNumber: 3,
            questionText: `Read lines 21-35. Analyse how the writer presents Thorne's physical and emotional state. What do these details suggest about the psychological cost of his work?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-analysis-detailed',
            markScheme: [
              '1-3 marks: Identifies physical details (aching back, stained fingers) and emotional weariness. Limited analysis of psychological cost.',
              '4-5 marks: Clear analysis of physical details and their implications. Some understanding of emotional toll.',
              '6-7 marks: Detailed analysis of how physical description conveys psychological burden. Discussion of symbolism (India ink, candlelight). Clear explanation of moral toll.',
              '8 marks: Perceptive analysis of how physical details function metaphorically to convey psychological and moral decay. Sophisticated understanding of writer\'s purpose.',
            ],
          },
          {
            id: 'mock-02-q4',
            questionNumber: 4,
            questionText: `Read lines 36-50. Explain the significance of the letter from England. How does Thorne\'s response to it develop the themes of the extract?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-inference',
            markScheme: [
              '1-2 marks: Identifies that the letter pressures Thorne. Limited understanding of thematic significance.',
              '3-4 marks: Explains that the letter represents external pressure for completion/colonization. Some thematic understanding.',
              '5-6 marks: Clear explanation of how the letter represents institutional demand and how Thorne\'s response reveals his moral conflict.',
              '7-8 marks: Sophisticated analysis of how the letter encapsulates the tension between individual conscience and institutional machinery. Clear discussion of how this develops themes about complicity and moral compromise.',
            ],
          },
          {
            id: 'mock-02-q5',
            questionNumber: 5,
            questionText: `Read the final section (lines 51-65). Evaluate how effectively the writer conveys Thorne\'s internal conflict at the end of the extract. What techniques does the writer use to show his moral dilemma?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-evaluation',
            markScheme: [
              '1-2 marks: Identifies that Thorne has doubts. Basic recognition of conflict.',
              '3-4 marks: Identifies several elements of conflict (wondering about blood, questioning his choices). Some evaluation of effectiveness.',
              '5-6 marks: Clear analysis of how language conveys inner conflict. Discussion of tension between self-reflection and action.',
              '7-8 marks: Perceptive evaluation of how writer uses metaphor, rhetorical questions, and contradictions to convey moral paralysis. Sophisticated discussion of how the ending raises questions about complicity.',
            ],
          },
          {
            id: 'mock-02-q6',
            questionNumber: 6,
            questionText: `Read the entire extract. Compare how the writer presents the theme of duty and personal morality in this text with another text you have studied. How do the two writers use different techniques to explore the tension between what we must do and what we believe is right?`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'reading-comparison',
            markScheme: [
              '1-2 marks: Attempts comparison but vague or underdeveloped.',
              '3-4 marks: Identifies similarities or differences in how duty/morality are presented. Some specific references.',
              '5-6 marks: Clear comparison with good use of relevant references from both texts. Good analysis of different approaches to the theme.',
              '7-8 marks: Sustained, detailed comparison with precise references. Sophisticated analysis of how different techniques (language, structure, perspective) are used to explore the theme.',
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
            id: 'mock-02-q7',
            questionNumber: 5,
            questionText: `Write a narrative in which a character is tasked with doing something they find morally troubling. Explore both the external pressures they face and their internal conscience. You may write fiction or a true story. You should aim for 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'Clear narrative showing character facing a moral dilemma. External pressure is evident. Character\'s doubts are shown. Some exploration of both internal and external conflict. Roughly 450 words. Clear structure with recognizable beginning, middle, end.',
              'Grade 6-7': 'Well-developed narrative with sustained exploration of moral conflict. Clear establishment of the dilemma and why it\'s troubling to the character. Precise sensory detail grounding the reader in the situation. Varied sentence structures for effect. Dialogue or reflection revealing character\'s internal struggle. Roughly 500-550 words.',
              'Grade 8-9': 'Sophisticated narrative exploring nuance of moral conflict—not a simple right/wrong situation but genuine ethical complexity. Precise language choices reflect character\'s state of mind. Setting and physical detail subtly reinforce internal conflict. Strong sense of voice. The character\'s reasoning is conveyed with authenticity and complexity. Secure technical control. Roughly 550+ words.',
            },
            markScheme: [
              'Content and organisation: Establishes a moral dilemma clearly; develops both external pressure and internal conscience; maintains narrative coherence',
              'Vocabulary: Precise and varied; language choices reflect the emotional and moral complexity of the situation',
              'Sentence structures: Varied and used deliberately to create effect; handles complex ideas about morality',
              'Spelling, punctuation and grammar: Accurate; complex structures handled securely',
              'Effect on reader: Creates engagement through convincing character perspective; explores genuine moral ambiguity',
              'Higher bands: sophistication in presenting moral complexity; originality; precise language; clear characterisation',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lang-p1-set2-mock-03',
    board: 'AQA',
    paperNumber: 1,
    qualification: 'GCSE',
    subject: 'English Language',
    paper: 'Paper 1',
    title: 'Paper 1 Mock Exam - Set 2, Mock 3: The House at Ravenswick (Horror)',
    subtitle: 'Explorations in creative reading and writing',
    code: '8700/1',
    description: 'Horror fiction extract: psychological terror, unreliable narrator, supernatural atmosphere',
    totalMarks: 80,
    duration: 105,
    totalTimeMinutes: 105,
    sections: [
      {
        id: 'mock-03-section-a',
        title: 'Section A: Reading',
        description: 'Read the source text and answer all questions. Suggested time: 55 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'mock-03-q1',
            questionNumber: 1,
            questionText: `Read lines 1-8. What does the narrator mean by saying "The house knew I was coming before I arrived"? How does the writer create an unsettling tone from the very beginning?`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'reading-detail',
            markScheme: [
              '1 mark: Recognizes that the house seems to have a consciousness or awareness',
              '2 marks: Explains the metaphorical or literal meaning and identifies one unsettling detail',
              '3 marks: Clear explanation of the meaning with reference to specific unsettling language choices',
              '4 marks: Sophisticated explanation with analysis of how language and sentence structure create immediate unease. Recognition of unreliability of narrator.',
            ],
          },
          {
            id: 'mock-03-q2',
            questionNumber: 2,
            questionText: `Read lines 9-18. Explain what the narrator tells us about the windows of Ravenswick House. How does the writer use language to make them threatening?`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'reading-analysis',
            markScheme: [
              '1-2 marks: Identifies that the windows are unusual and threatening. Limited analysis of language.',
              '3-4 marks: Explains what makes the windows unusual and identifies some threatening language features.',
              '5-6 marks: Clear analysis of how language (personification, sensory detail, metaphor) makes the windows seem conscious and malevolent. Sophisticated explanation of effect.',
            ],
          },
          {
            id: 'mock-03-q3',
            questionNumber: 3,
            questionText: `Read lines 19-28. Analyse how the writer creates tension and fear in this paragraph. Consider the narrative voice, word choices, and sentence structure.`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-analysis-detailed',
            markScheme: [
              '1-3 marks: Identifies some fears or tensions. Limited analysis of techniques.',
              '4-5 marks: Clear identification of techniques (e.g., parenthetical observations, short sentences, metaphor) and their effects.',
              '6-7 marks: Detailed analysis of how multiple techniques work together to create mounting fear. Good explanation of how the narrator\'s voice creates tension.',
              '8 marks: Perceptive analysis of how all elements work together. Discussion of how the narrator\'s increasing certainty (despite lack of rational evidence) creates horror.',
            ],
          },
          {
            id: 'mock-03-q4',
            questionNumber: 4,
            questionText: `Read the final paragraph. What does the detail about the dress and the used kitchen suggest? How does the writer maintain ambiguity about what is real and what might be imagined?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-inference',
            markScheme: [
              '1-2 marks: Identifies the details. Limited understanding of their significance or the ambiguity.',
              '3-4 marks: Explains that the events are supernatural or inexplicable. Some recognition of ambiguity.',
              '5-6 marks: Clear explanation of how these details create supernatural horror. Discussion of how the narrator\'s perspective creates ambiguity.',
              '7-8 marks: Sophisticated analysis of how the writer maintains ambiguity without resolving it. Discussion of how the narrator\'s reliability is called into question while still making the supernatural feel possible.',
            ],
          },
          {
            id: 'mock-03-q5',
            questionNumber: 5,
            questionText: `Evaluate how effectively the writer uses the narrative voice to convey fear and horror in this extract. What is the effect of having the narrator speak directly to the reader about their state of mind?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-evaluation',
            markScheme: [
              '1-2 marks: Identifies that the narrator speaks directly. Basic response about effect.',
              '3-4 marks: Explains that direct address creates intimacy or shares the narrator\'s fear. Some evaluation.',
              '5-6 marks: Clear analysis of how direct address draws the reader into the narrator\'s paranoia and fear. Discussion of effectiveness.',
              '7-8 marks: Sophisticated evaluation of how the first-person voice creates unreliable but compelling horror. Discussion of how the narrator\'s growing certainty despite lack of evidence creates psychological horror.',
            ],
          },
          {
            id: 'mock-03-q6',
            questionNumber: 6,
            questionText: `Compare how the writer presents supernatural horror in this text with another text you have studied. How do the two writers use different techniques to create fear in their readers?`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'reading-comparison',
            markScheme: [
              '1-2 marks: Attempts comparison but vague or limited.',
              '3-4 marks: Identifies similarities or differences in how supernatural horror is presented. Some specific references.',
              '5-6 marks: Clear comparison with good use of references from both texts. Good analysis of different approaches.',
              '7-8 marks: Sustained, detailed comparison with precise references. Sophisticated analysis of how different techniques create horror.',
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
            id: 'mock-03-q7',
            questionNumber: 5,
            questionText: `Write a narrative in which a character discovers something unsettling or sinister about a place (a house, a location, a building, etc.). Use atmosphere and detail to create a sense of unease. You may write fiction or a true story. You should aim for 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'Clear narrative with a character discovering something unsettling about a place. Atmosphere is established through description. Some sensory detail. The discovery is clear and the reader understands why it\'s disturbing. Roughly 450 words.',
              'Grade 6-7': 'Well-developed narrative with sustained atmospheric tension. The place is established through precise, carefully chosen sensory detail. The discovery unfolds gradually, building tension. Language choices create an unsettling tone. Varied sentence structures enhance the atmosphere. Roughly 500-550 words.',
              'Grade 8-9': 'Sophisticated narrative where atmosphere is woven throughout, not just stated. Sensory detail is precise and suggestive rather than explicit. The discovery is presented with ambiguity—the reader shares the character\'s uncertainty about what is real. Language choices are subtle and controlled. The narrative maintains tension without relying on jump scares or obviousness. Roughly 550+ words.',
            },
            markScheme: [
              'Content and organisation: Establishes a place and atmosphere clearly; develops discovery convincingly; maintains narrative tension',
              'Vocabulary: Precise and suggestive; language choices create unease without being obvious',
              'Sentence structures: Varied and used deliberately to create atmospheric effect',
              'Spelling, punctuation and grammar: Accurate throughout',
              'Effect on reader: Creates sustained sense of unease; draws reader into character\'s experience',
              'Higher bands: subtlety of atmosphere; originality; linguistic precision; psychological rather than explicit horror',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lang-p1-set2-mock-04',
    board: 'AQA',
    paperNumber: 1,
    qualification: 'GCSE',
    subject: 'English Language',
    paper: 'Paper 1',
    title: 'Paper 1 Mock Exam - Set 2, Mock 4: The Year of Waiting (Romance)',
    subtitle: 'Explorations in creative reading and writing',
    code: '8700/1',
    description: 'Contemporary romance extract: emotional complexity, patient love, self-discovery',
    totalMarks: 80,
    duration: 105,
    totalTimeMinutes: 105,
    sections: [
      {
        id: 'mock-04-section-a',
        title: 'Section A: Reading',
        description: 'Read the source text and answer all questions. Suggested time: 55 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'mock-04-q1',
            questionNumber: 1,
            questionText: `Read lines 1-10. Explain how the writer distinguishes between two different kinds of love. What does this contrast suggest about the nature of romantic love?`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'reading-detail',
            markScheme: [
              '1 mark: Identifies that there are two kinds of love mentioned.',
              '2 marks: Explains the difference (sudden/lightning vs. gradual/snow).',
              '3 marks: Explains the difference with reference to specific language and describes what it suggests.',
              '4 marks: Clear explanation with precise reference to language choices and sophisticated understanding of the philosophical point being made about love.',
            ],
          },
          {
            id: 'mock-04-q2',
            questionNumber: 2,
            questionText: `Read lines 11-20. How does the writer present James in these lines? What details suggest his character and why the narrator is drawn to him?`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'reading-analysis',
            markScheme: [
              '1-2 marks: Identifies some character details about James. Limited analysis of appeal.',
              '3-4 marks: Clear identification of character traits (thoughtfulness, rarity of laughter) with some explanation of appeal.',
              '5-6 marks: Detailed analysis of how language creates James\'s character. Clear explanation of how his qualities create attraction—thoughtfulness as a kind of love.',
            ],
          },
          {
            id: 'mock-04-q3',
            questionNumber: 3,
            questionText: `Read lines 21-28. Analyse how the writer uses the setting (the library, the archives) to develop the meaning of the growing love. What does this place contribute to the narrative?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-analysis-detailed',
            markScheme: [
              '1-3 marks: Identifies that the library is the setting. Limited analysis of its symbolic significance.',
              '4-5 marks: Explains that the library setting reinforces themes of connection through meaning, history, accumulated knowledge.',
              '6-7 marks: Detailed analysis of how the setting (ancient books, evidence of past love) mirrors the relationship developing. Discussion of how place reinforces meaning.',
              '8 marks: Perceptive analysis of how the library setting functions metaphorically to present love as accumulation, preservation, witnessing. Sophisticated understanding of how place and emotion intertwine.',
            ],
          },
          {
            id: 'mock-04-q4',
            questionNumber: 4,
            questionText: `Read lines 29-45. Explain what the narrator means by "the year of becoming together." How does the writer present this period differently from how popular culture might present a romance?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-inference',
            markScheme: [
              '1-2 marks: Identifies that the year is about developing the relationship rather than "getting together." Limited analysis.',
              '3-4 marks: Explains the quiet, understated nature of the relationship as opposed to drama. Some understanding of critique of typical romance.',
              '5-6 marks: Clear explanation of how the narrator presents this as more authentic than conventional romance narratives. Discussion of small ceremonies and everyday moments.',
              '7-8 marks: Sophisticated analysis of how the extract critiques dramatic romance in favor of genuine connection built gradually. Discussion of how language choices emphasize quiet authenticity.',
            ],
          },
          {
            id: 'mock-04-q5',
            questionNumber: 5,
            questionText: `Evaluate how effectively the writer conveys emotional depth and authenticity in this extract. What techniques does the writer use to make the love feel real rather than sentimental?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-evaluation',
            markScheme: [
              '1-2 marks: Identifies that the writing feels real. Basic evaluation.',
              '3-4 marks: Identifies some techniques (understatement, specific detail, avoidance of cliché).',
              '5-6 marks: Clear analysis of several techniques and their cumulative effect in creating authenticity. Discussion of what avoids sentimentality.',
              '7-8 marks: Sophisticated evaluation of how writer\'s language choices, structural choices, and refusal of conventional romance narrative create emotional authenticity. Discussion of how restraint becomes a form of emotional honesty.',
            ],
          },
          {
            id: 'mock-04-q6',
            questionNumber: 6,
            questionText: `Compare how the writer presents love and connection in this text with another text you have studied. How do the two writers use different techniques to explore emotional relationships?`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'reading-comparison',
            markScheme: [
              '1-2 marks: Attempts comparison but vague or limited.',
              '3-4 marks: Identifies similarities or differences in how love/connection are presented. Some specific references.',
              '5-6 marks: Clear comparison with good use of references from both texts. Good analysis of different approaches to presenting emotional relationships.',
              '7-8 marks: Sustained, detailed comparison with precise references. Sophisticated analysis of how different techniques present emotional connection.',
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
            id: 'mock-04-q7',
            questionNumber: 5,
            questionText: `Write a narrative in which a character gradually comes to realise they have developed feelings for someone, or gradually comes to understand someone better through spending time with them. Focus on the small moments and details that build this understanding. You may write fiction or a true story. You should aim for 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'Clear narrative showing gradual realisation or understanding. The moments are recognizable and the progression is clear. Some sensory detail establishing the person and the relationship. Roughly 450 words. Clear structure and organization.',
              'Grade 6-7': 'Well-developed narrative where small moments accumulate to show gradual change in understanding. Precise details about the other person create a vivid portrait. Varied sentence structures, with some used deliberately for reflection. The narrator\'s shift in perspective is evident. Language is precise and not overwrought. Roughly 500-550 words.',
              'Grade 8-9': 'Sophisticated narrative where the accumulation of small details mirrors real emotional development. The portrait of the other person emerges through carefully chosen specific observations. The narrator\'s voice shows authentic growth of understanding without becoming sentimental. Language choices are subtle and precise. The narrative avoids cliché about love or connection. Secure technical control. Roughly 550+ words.',
            },
            markScheme: [
              'Content and organisation: Focuses on small moments of gradual realisation; maintains narrative coherence; shows development of understanding',
              'Vocabulary: Precise and used to create authentic emotional portrait; avoids sentimental cliché',
              'Sentence structures: Varied and used deliberately, including reflection and observation',
              'Spelling, punctuation and grammar: Accurate throughout',
              'Effect on reader: Creates engagement through specificity; authentic emotional voice',
              'Higher bands: subtlety of emotional development; originality; linguistic precision; avoidance of sentimentality',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lang-p1-set2-mock-05',
    board: 'AQA',
    paperNumber: 1,
    qualification: 'GCSE',
    subject: 'English Language',
    paper: 'Paper 1',
    title: 'Paper 1 Mock Exam - Set 2, Mock 5: The Last Trench (War Fiction)',
    subtitle: 'Explorations in creative reading and writing',
    code: '8700/1',
    description: 'War fiction extract: soldier\'s perspective, moral numbness, machinery of conflict',
    totalMarks: 80,
    duration: 105,
    totalTimeMinutes: 105,
    sections: [
      {
        id: 'mock-05-section-a',
        title: 'Section A: Reading',
        description: 'Read the source text and answer all questions. Suggested time: 55 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'mock-05-q1',
            questionNumber: 1,
            questionText: `Read lines 1-8. Explain what the soldiers' different names for the war reveal about their experience of it. What tone is created by these alternatives to "Succession War"?`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'reading-detail',
            markScheme: [
              '1 mark: Identifies that the soldiers have different names for the war.',
              '2 marks: Explains what one or two of the names suggest (endless, consuming, etc.).',
              '3 marks: Clear explanation of what multiple names reveal with reference to the language.',
              '4 marks: Sophisticated analysis of what the names reveal about soldiers\' perspective and the tone of cynicism, futility, and dark humor they create.',
            ],
          },
          {
            id: 'mock-05-q2',
            questionNumber: 2,
            questionText: `Read lines 9-18. Analyse how the writer presents the narrator's loss of belief over time. What does the progression from the 7-year mark to the current moment suggest?`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'reading-analysis',
            markScheme: [
              '1-2 marks: Identifies that the narrator has lost belief. Limited analysis of significance.',
              '3-4 marks: Explains that belief in victory gave way to belief in survival, which then failed. Some analysis of the timeline.',
              '5-6 marks: Clear analysis of the progression and what it reveals about psychological erosion. Discussion of how the shift is not sudden but gradual.',
            ],
          },
          {
            id: 'mock-05-q3',
            questionNumber: 3,
            questionText: `Read lines 19-28. Analyse the metaphor of "the machine" in this paragraph. How does this image help convey the narrator's understanding of the war and military hierarchy?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-analysis-detailed',
            markScheme: [
              '1-3 marks: Identifies the machine metaphor. Limited analysis.',
              '4-5 marks: Explains that the machine metaphor conveys dehumanization. Clear explanation of how hierarchy works like mechanical systems.',
              '6-7 marks: Detailed analysis of how the machine metaphor works throughout the paragraph. Discussion of how it conveys loss of individual agency and moral responsibility.',
              '8 marks: Perceptive analysis of how the machine metaphor encapsulates the narrator\'s understanding of war as system rather than human conflict. Discussion of how this view creates both horror and numbness.',
            ],
          },
          {
            id: 'mock-05-q4',
            questionNumber: 4,
            questionText: `Read lines 29-50. What is the effect of the specific time details (5:47 AM, 9:15 AM) in this section? How does the narrator describe the experience of combat? What does his language suggest about his state of mind?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-inference',
            markScheme: [
              '1-2 marks: Identifies that specific times are given. Limited understanding of effect.',
              '3-4 marks: Explains that specific times suggest mechanical precision or nightmare quality. Some understanding of narrator\'s detachment.',
              '5-6 marks: Clear analysis of how precise timing conveys mechanical nature of warfare. Discussion of how the narrator\'s dissociative language reflects psychological survival mechanism.',
              '7-8 marks: Sophisticated analysis of how time markers and dispassionate language work together to convey the narrator\'s complete alienation from his own experience. Discussion of how the language reveals psychological shutdown as survival response.',
            ],
          },
          {
            id: 'mock-05-q5',
            questionNumber: 5,
            questionText: `Evaluate how effectively the writer conveys the psychological and spiritual toll of war through language choices and imagery. What makes this presentation of war different from patriotic or heroic portrayals?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-evaluation',
            markScheme: [
              '1-2 marks: Identifies that the writing shows negative effects of war. Basic response.',
              '3-4 marks: Identifies techniques (mechanical language, numbness, loss of faith) and contrasts with heroic portrayals.',
              '5-6 marks: Clear analysis of several techniques and their effectiveness. Good discussion of anti-heroic approach.',
              '7-8 marks: Sophisticated evaluation of how language, metaphor, and perspective work together to create a deeply anti-heroic portrayal. Discussion of how the narrator\'s deadness is presented as the most honest response to mechanized warfare.',
            ],
          },
          {
            id: 'mock-05-q6',
            questionNumber: 6,
            questionText: `Compare how the writer presents the experience of conflict in this text with another text you have studied. How do the two writers use language differently to convey the human cost of warfare?`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'reading-comparison',
            markScheme: [
              '1-2 marks: Attempts comparison but vague or limited.',
              '3-4 marks: Identifies similarities or differences in how conflict is presented. Some specific references.',
              '5-6 marks: Clear comparison with good use of references from both texts. Good analysis of different approaches to war.',
              '7-8 marks: Sustained, detailed comparison with precise references. Sophisticated analysis of how different techniques convey the human cost of warfare.',
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
            id: 'mock-05-q7',
            questionNumber: 5,
            questionText: `Write a narrative in which a character is caught in or witnessing a difficult or dangerous situation. Focus on their internal experience—what they think, feel, and how they process what is happening—rather than just describing events. You may write fiction or a true story. You should aim for 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'Clear narrative showing character\'s internal response to a difficult situation. Both external events and internal thoughts are evident. The character\'s reactions and coping mechanisms are shown. Roughly 450 words. Clear structure and organization.',
              'Grade 6-7': 'Well-developed narrative where internal experience is primary focus. The situation is established clearly but the emphasis is on how the character processes it psychologically. Varied sentence structures reflecting the character\'s state of mind. Precise sensory detail grounding reader in the moment. Thoughts and feelings are authentic and complex. Roughly 500-550 words.',
              'Grade 8-9': 'Sophisticated narrative where the internal experience is woven throughout, not separated from external events. The character\'s psychological response feels authentic—may include numbness, dissociation, or processing difficulties rather than obvious emotion. Language choices subtly reflect mental state. Multiple temporal frames if effective (memory, present moment, reflection). Secure technical control. Roughly 550+ words.',
            },
            markScheme: [
              'Content and organisation: Establishes a difficult situation clearly; focuses on internal experience; maintains narrative coherence',
              'Vocabulary: Precise and used to convey internal states; avoids cliché in describing emotional response',
              'Sentence structures: Varied and used deliberately to reflect character\'s mental state and processing',
              'Spelling, punctuation and grammar: Accurate throughout; handles complex internal monologue securely',
              'Effect on reader: Creates engagement through authenticity of internal perspective; explores psychological reality',
              'Higher bands: sophistication in presenting internal experience; subtlety; authenticity; originality',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lang-p1-set2-mock-06',
    board: 'AQA',
    paperNumber: 1,
    qualification: 'GCSE',
    subject: 'English Language',
    paper: 'Paper 1',
    title: 'Paper 1 Mock Exam - Set 2, Mock 6: The Becoming (Coming-of-Age)',
    subtitle: 'Explorations in creative reading and writing',
    code: '8700/1',
    description: 'Coming-of-age fiction: adolescent transformation, loss of innocence, betrayal',
    totalMarks: 80,
    duration: 105,
    totalTimeMinutes: 105,
    sections: [
      {
        id: 'mock-06-section-a',
        title: 'Section A: Reading',
        description: 'Read the source text and answer all questions. Suggested time: 55 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'mock-06-q1',
            questionNumber: 1,
            questionText: `Read lines 1-8. Explain what the narrator discovers during the summer they turn fifteen. How does the writer suggest this is a significant turning point?`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'reading-detail',
            markScheme: [
              '1 mark: Identifies that the narrator discovers something about the world being different than believed.',
              '2 marks: Explains that people (particularly parents) are not as the narrator believed and there is deception.',
              '3 marks: Clear explanation with reference to "comfortable lie" and sense of foundational shift.',
              '4 marks: Sophisticated analysis of how language (describing the summer as singular, marking the year by age) establishes this as a threshold moment of lost innocence.',
            ],
          },
          {
            id: 'mock-06-q2',
            questionNumber: 2,
            questionText: `Read lines 9-18. How does the writer present the narrator's initial beliefs about people and the world? What is significant about the contrast with what they later learn?`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'reading-analysis',
            markScheme: [
              '1-2 marks: Identifies that the narrator believed in goodness of people. Limited analysis.',
              '3-4 marks: Explains the belief in essential goodness and surface flaws. Identifies contrast with later discovery.',
              '5-6 marks: Clear analysis of how the initial belief is presented as naive but understandable. Good explanation of the significance of the contrast in shaking the narrator\'s worldview.',
            ],
          },
          {
            id: 'mock-06-q3',
            questionNumber: 3,
            questionText: `Read lines 19-32. Analyse how the writer conveys the narrator's shock at discovering their mother\'s infidelity. How does the language shift at this moment? What is the effect of the narrative perspective at this point?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-analysis-detailed',
            markScheme: [
              '1-3 marks: Identifies the discovery. Limited analysis of how shock is conveyed.',
              '4-5 marks: Identifies language shifts and effect (disorientation, shock). Some analysis.',
              '6-7 marks: Detailed analysis of how language conveys shock (sentence fragments, immediate present tense, visual detail). Discussion of how discovery happens passively, to the narrator, not in conversation.',
              '8 marks: Perceptive analysis of how the shift in understanding is conveyed through narrative technique. Discussion of how the moment of seeing creates a new understanding that cannot be unseen.',
            ],
          },
          {
            id: 'mock-06-q4',
            questionNumber: 4,
            questionText: `Read lines 33-55. Explain how the narrator\'s understanding of their parents changes throughout the summer. What do the discoveries about each parent reveal about the complexity of adult relationships?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-inference',
            markScheme: [
              '1-2 marks: Identifies discoveries about both parents. Limited analysis.',
              '3-4 marks: Explains that parents are flawed and relationships are compromises. Some understanding of complexity.',
              '5-6 marks: Clear explanation of how the accumulating discoveries reveal that adult relationships involve negotiation and looking away from difficult truths.',
              '7-8 marks: Sophisticated analysis of how the narrator comes to understand parents as whole people with their own struggles and compromises, rather than as parental figures. Discussion of the cost of this understanding.',
            ],
          },
          {
            id: 'mock-06-q5',
            questionNumber: 5,
            questionText: `Evaluate how effectively the writer uses the other characters (parents, friend, boyfriend) to convey the narrator\'s growth and changed understanding. How does each relationship contribute to the theme of lost innocence?`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'reading-evaluation',
            markScheme: [
              '1-2 marks: Identifies that multiple relationships change. Basic evaluation.',
              '3-4 marks: Identifies ways each relationship contributes to loss of innocence.',
              '5-6 marks: Clear analysis of how each relationship provides a different dimension of adult complexity. Good evaluation of effectiveness.',
              '7-8 marks: Sophisticated evaluation of how the multiple relationships work together to present a comprehensive loss of innocence. Discussion of how each reveals a different aspect of adult hypocrisy or complexity.',
            ],
          },
          {
            id: 'mock-06-q6',
            questionNumber: 6,
            questionText: `Compare how the writer presents coming-of-age and loss of innocence in this text with another text you have studied. How do the two writers use different techniques to show adolescent transformation?`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'reading-comparison',
            markScheme: [
              '1-2 marks: Attempts comparison but vague or limited.',
              '3-4 marks: Identifies similarities or differences in how transformation is presented. Some specific references.',
              '5-6 marks: Clear comparison with good use of references from both texts. Good analysis of different approaches to coming-of-age.',
              '7-8 marks: Sustained, detailed comparison with precise references. Sophisticated analysis of how different techniques convey adolescent transformation.',
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
            id: 'mock-06-q7',
            questionNumber: 5,
            questionText: `Write a narrative in which a character discovers something unexpected or unsettling about someone close to them. Explore both what is discovered and how this changes the narrator's understanding of that person. You may write fiction or a true story. You should aim for 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'Clear narrative showing discovery and its impact. The discovery is clear and the character\'s shifted understanding is evident. Some sensory detail and emotional response. Roughly 450 words. Clear structure with recognizable beginning, middle, end.',
              'Grade 6-7': 'Well-developed narrative where the discovery unfolds naturally rather than being told. Precise sensory and emotional detail establishing the relationship before the revelation. The shift in understanding is subtle and authentic. Varied sentence structures emphasize the moment of revelation. Language is precise. Roughly 500-550 words.',
              'Grade 8-9': 'Sophisticated narrative where the discovery is woven into a portrait of a relationship, not presented in isolation. Before-and-after comparison is implicit rather than explicit. The character\'s new understanding is complex—not a simple moral judgment but recognition of human complexity. Language choices reflect the narrator\'s emotional processing. The revelation changes how we understand earlier details. Secure technical control. Roughly 550+ words.',
            },
            markScheme: [
              'Content and organisation: Establishes a relationship clearly; presents discovery authentically; explores changed understanding',
              'Vocabulary: Precise and used to convey emotional and psychological shifts; avoids simple judgment',
              'Sentence structures: Varied and used deliberately, particularly around the moment of revelation',
              'Spelling, punctuation and grammar: Accurate throughout',
              'Effect on reader: Creates engagement through authenticity; explores complexity of human relationships',
              'Higher bands: sophistication in presenting changed understanding; originality; subtlety; avoiding moral simplicity',
            ],
          },
        ],
      },
    ],
  },
]
