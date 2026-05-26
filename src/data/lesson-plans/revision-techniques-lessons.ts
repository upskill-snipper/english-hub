// @ts-nocheck
import type { LessonPlan } from '@/types'

// ─── Lesson 1: How Memory Works - Spaced Repetition and Retrieval Practice ──

const lesson1: LessonPlan = {
  id: 'revision-01-how-memory-works',
  title: 'How Memory Works: Spaced Repetition and Retrieval Practice',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the cognitive science behind how memories are formed, stored, and retrieved.',
    'Explain the principles of spaced repetition and why it is more effective than massed practice (cramming).',
    'Apply retrieval practice strategies to their own revision planning.',
  ],
  successCriteria: [
    'I can explain the difference between short-term and long-term memory using accurate terminology.',
    'I can describe how spaced repetition strengthens memory retention over time.',
    'I can design a one-week spaced repetition schedule for a subject of my choice.',
  ],
  keywords: [
    'spaced repetition',
    'retrieval practice',
    'working memory',
    'long-term memory',
    'encoding',
    'consolidation',
    'forgetting curve',
  ],
  starterActivity: {
    title: 'The Memory Challenge',
    duration: '8 minutes',
    instructions:
      'Display a list of 20 unrelated words on the board for exactly 60 seconds. Remove the list and ask students to write down as many words as they can remember. Discuss results: most students recall 5-9 words. Introduce the concept of working memory limitations. Ask: "If our brains can only hold a few items at once, how do we ever learn anything permanently?" Use this to frame the lesson on how memory actually works.',
    differentiation: {
      support:
        'Provide a worksheet with spaces numbered 1-20 so students have a clear structure for recording.',
      core: 'Students attempt the task independently and then compare results with a partner.',
      stretch:
        'Students predict which types of words they remembered best (concrete vs abstract, first vs last) and hypothesise why.',
    },
    resources: ['Word list slide (20 words)', 'Mini-whiteboards or lined paper', 'Timer'],
  },
  mainActivities: [
    {
      title: 'The Science of Memory: Input, Storage, Retrieval',
      duration: '18 minutes',
      instructions:
        "Teacher-led explanation using a simple diagram: Information enters through sensory memory, passes into working memory, and is either forgotten or encoded into long-term memory through rehearsal and meaningful connections. Introduce Ebbinghaus's Forgetting Curve - show how we lose approximately 70% of new information within 24 hours without review. Students annotate a blank diagram of the memory process. Then introduce spaced repetition as the antidote: reviewing material at increasing intervals (1 day, 3 days, 7 days, 14 days, 30 days) dramatically improves retention. Show a graph comparing spaced vs massed practice outcomes.",
      differentiation: {
        support:
          'Provide a pre-labelled diagram with key terms; students match definitions to the correct stage.',
        core: 'Students annotate a blank diagram independently and write a one-paragraph summary of the forgetting curve.',
        stretch:
          'Students research and explain why sleep is important for memory consolidation and add this to their diagram.',
      },
      resources: [
        'Memory process diagram (blank and labelled versions)',
        'Forgetting curve graph',
        'Spaced vs massed practice comparison graph',
      ],
    },
    {
      title: 'Retrieval Practice in Action',
      duration: '22 minutes',
      instructions:
        'Explain that retrieval practice means actively recalling information from memory rather than passively re-reading notes. Demonstrate three retrieval strategies: (1) Brain Dumps - write everything you know about a topic from memory, then check against notes. (2) Self-Quizzing - cover your notes and test yourself with questions. (3) The Leitner System - a flashcard method where correctly answered cards move to a less frequent review pile. Students practise each method for 5 minutes using content from a subject they are currently studying. After each practice round, students rate the difficulty and effectiveness on a reflection sheet. Conclude by discussing the "desirable difficulty" principle: if retrieval feels hard, it is working.',
      differentiation: {
        support:
          'Provide pre-written quiz questions for self-quizzing so students can focus on the retrieval process rather than question creation.',
        core: 'Students practise all three methods and identify which they found most effective, justifying their choice.',
        stretch:
          'Students design a two-week retrieval practice schedule incorporating all three methods across multiple subjects.',
      },
      resources: [
        'Retrieval practice method cards',
        'Reflection rating sheet',
        'Leitner System diagram',
        'Blank paper for brain dumps',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Teach It Back',
    duration: '7 minutes',
    instructions:
      'Without looking at any notes, students write a brief explanation for a Year 9 student: "Why is cramming the night before an exam a bad idea, and what should you do instead?" Collect responses to assess understanding of spaced repetition and retrieval practice concepts.',
    differentiation: {
      support:
        'Sentence starter provided: "Cramming does not work because... Instead, you should..."',
      core: 'Full written response expected using at least two key terms from the lesson.',
      stretch:
        'Students include a specific example or analogy to make their explanation memorable.',
    },
  },
  homework:
    'Create a seven-day spaced repetition timetable for one GCSE subject. Include specific topics to review on each day and explain why you have spaced them the way you have.',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between working memory and long-term memory. Why is this distinction important for revision?',
      lines: 5,
      modelAnswer:
        'Working memory is the short-term system that holds a limited amount of information (around 4-7 items) for immediate processing. Long-term memory has virtually unlimited capacity and stores information permanently when it has been effectively encoded. This distinction matters for revision because simply reading notes only engages working memory temporarily. To transfer knowledge into long-term memory, students need to use active strategies like retrieval practice and spaced repetition that force the brain to strengthen neural pathways through repeated recall.',
      marks: 4,
    },
    {
      question: 'What is the "forgetting curve" and how does spaced repetition counteract it?',
      lines: 5,
      modelAnswer:
        'The forgetting curve, discovered by Hermann Ebbinghaus, shows that we forget approximately 70% of new information within 24 hours and up to 90% within a week if we do not review it. Spaced repetition counteracts this by scheduling reviews at increasing intervals - for example, after 1 day, 3 days, 7 days, and 30 days. Each review session strengthens the memory trace, making it harder to forget. Over time, the forgetting curve flattens, meaning the information stays in long-term memory with less frequent revision needed.',
      marks: 4,
    },
    {
      question:
        'Describe two retrieval practice strategies and explain why they are more effective than re-reading notes.',
      lines: 6,
      modelAnswer:
        'Brain dumps involve writing down everything you can remember about a topic from memory, then checking against your notes to identify gaps. Self-quizzing means creating or using questions to test yourself without looking at the answers first. Both strategies are more effective than re-reading because they force the brain to actively reconstruct knowledge, which strengthens the neural connections needed for recall. Re-reading creates a false sense of familiarity - recognising information is not the same as being able to recall it independently in an exam.',
      marks: 4,
    },
    {
      question: 'What is "desirable difficulty" and why is it important for effective revision?',
      lines: 4,
      modelAnswer:
        'Desirable difficulty refers to the idea that learning is most effective when it feels challenging but achievable. If revision feels too easy, it is likely that the student is simply recognising information rather than genuinely retrieving it. When retrieval feels effortful - for example, struggling to remember a definition before checking - the brain is working harder to strengthen that memory. This means that the most effective revision should feel uncomfortable, which is the opposite of what most students expect.',
      marks: 3,
    },
    {
      question:
        'Design a five-day spaced repetition plan for revising the causes of World War One. Explain your spacing choices.',
      lines: 8,
      modelAnswer:
        'Day 1: Learn all four main causes (Militarism, Alliances, Imperialism, Nationalism) using notes and create flashcards. Day 2: Retrieval practice - brain dump everything remembered about all four causes, then check and correct. Day 3: Skip (allow forgetting to occur). Day 4: Self-quiz on all four causes using flashcards, focusing extra time on any causes that were difficult to recall. Day 5: Skip. Day 6 (extension): Full brain dump under timed conditions. The gaps between sessions are deliberate - allowing some forgetting before retrieval makes the memory stronger when it is recalled. The increasing intervals mean that by Day 6, the information should be well-established in long-term memory.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson works best early in Year 10 or at the start of a revision period so students can apply techniques throughout the year.',
    'The memory challenge starter reliably produces 5-9 words recalled, which perfectly illustrates working memory limitations.',
    'Emphasise that these techniques apply to ALL subjects, not just English. Encourage cross-curricular application.',
    'Students often resist retrieval practice because it feels harder than re-reading. Normalise the discomfort.',
    'Consider revisiting spaced repetition principles at the start of subsequent lessons to model the technique.',
  ],
  targetedSkills: [
    'Metacognition',
    'Self-regulated learning',
    'Planning and organisation',
    'Evaluation of learning strategies',
  ],
}

// ─── Lesson 2: Creating Effective Revision Resources ─────────────────────────

const lesson2: LessonPlan = {
  id: 'revision-02-effective-resources',
  title: 'Creating Effective Revision Resources',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Evaluate common revision resources and identify which are most effective based on cognitive science principles.',
    'Create high-quality revision resources that promote active recall rather than passive review.',
    'Apply the principle of dual coding by combining words and images in revision materials.',
  ],
  successCriteria: [
    'I can explain why some revision resources are more effective than others using evidence from cognitive science.',
    'I can create a revision resource that uses active recall principles for a topic I am currently studying.',
    'I can use dual coding to combine verbal and visual information in a single revision resource.',
  ],
  keywords: [
    'dual coding',
    'active recall',
    'elaboration',
    'interleaving',
    'cognitive load',
    'chunking',
    'schema',
  ],
  starterActivity: {
    title: 'Revision Resource Ranking',
    duration: '8 minutes',
    instructions:
      'Display a list of ten common revision activities: highlighting notes, re-reading the textbook, making flashcards, watching YouTube videos, copying out notes, doing practice questions, creating mind maps, teaching someone else, listening to music while revising, making colourful posters. In pairs, students rank them from most to least effective. Teacher reveals the evidence-based ranking, discussing why passive strategies like highlighting and re-reading score poorly despite being the most popular.',
    differentiation: {
      support:
        'Provide a sorting card activity with descriptions of each method for physical ranking.',
      core: 'Students rank independently, then compare with a partner and justify disagreements.',
      stretch:
        'Students explain the cognitive science principle behind why each method is effective or ineffective.',
    },
    resources: [
      'Revision methods list slide',
      'Sorting cards (support tier)',
      'Evidence-based ranking reveal slide',
    ],
  },
  mainActivities: [
    {
      title: 'Anatomy of an Effective Revision Resource',
      duration: '18 minutes',
      instructions:
        'Teacher demonstrates the key principles that make revision resources effective: (1) They force retrieval, not recognition - the answer should be hidden until you actively try to recall it. (2) They use dual coding - combining words with simple diagrams, timelines, or icons. (3) They chunk information - breaking large topics into small, manageable pieces. (4) They include self-testing - built-in questions or prompts that require active thinking. Show examples of poor revision resources (a page of highlighted notes, a copied paragraph) versus strong ones (a well-designed flashcard with a question on one side and a concise answer with a diagram on the other). Students analyse three sample resources and identify what makes each effective or ineffective using a critique framework.',
      differentiation: {
        support:
          'Provide the critique framework with sentence starters: "This resource is effective/ineffective because..."',
        core: 'Students complete the critique independently and suggest one improvement for each weak resource.',
        stretch:
          'Students redesign one of the weak resources using all four principles and explain their choices.',
      },
      resources: [
        'Example revision resources (3 good, 3 poor)',
        'Critique framework worksheet',
        'Dual coding examples sheet',
      ],
    },
    {
      title: 'Resource Creation Workshop',
      duration: '22 minutes',
      instructions:
        'Students choose a topic from any GCSE subject they are currently studying and create three different revision resources: (1) A set of 5 flashcards using the question-and-answer format with dual coding. (2) A knowledge organiser for one sub-topic, including key terms, definitions, diagrams, and self-test questions. (3) A Cornell Notes summary of a topic, with questions in the left margin and key points on the right. Circulate and provide feedback, checking that resources promote active recall rather than passive review. In the final 5 minutes, students swap resources with a partner and test each other, evaluating whether the resources actually work for retrieval.',
      differentiation: {
        support:
          'Provide templates for each resource type with clear sections labelled and one completed example.',
        core: 'Students create all three resources independently using the principles discussed.',
        stretch:
          'Students create a fourth resource type of their own design, explaining which cognitive science principles it applies.',
      },
      resources: [
        'Flashcard blanks',
        'Knowledge organiser template',
        'Cornell Notes template',
        'Coloured pens',
        'Subject notes/textbooks',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Quality Check: Peer Assessment',
    duration: '7 minutes',
    instructions:
      'Students swap their best resource with a partner. The partner uses a checklist to assess: Does it force retrieval? Does it use dual coding? Is information chunked? Does it include self-testing? Each criterion is scored 1-3. Students receive their resource back with feedback and one target for improvement.',
    differentiation: {
      support: 'Checklist provided with tick boxes and a simplified three-point scale.',
      core: 'Students complete the checklist and write one specific improvement suggestion.',
      stretch:
        'Students justify each score with a specific reference to cognitive science principles.',
    },
  },
  homework:
    'Create a complete set of revision flashcards (minimum 10) for a topic you will be tested on next. Each card must use the question-answer format and include at least one visual element (diagram, symbol, or colour coding).',
  worksheetQuestions: [
    {
      question: 'Explain what "dual coding" means and why it helps revision.',
      lines: 4,
      modelAnswer:
        'Dual coding is the practice of combining verbal information (words, text) with visual information (diagrams, images, symbols) in the same revision resource. It works because the brain processes verbal and visual information through two separate channels. When both channels are used, the brain creates two memory traces for the same information, making it easier to recall. For example, a flashcard about photosynthesis that includes both a written definition and a simple diagram of a leaf will be remembered better than one with text alone.',
      marks: 3,
    },
    {
      question: 'Why is highlighting notes considered an ineffective revision strategy?',
      lines: 4,
      modelAnswer:
        'Highlighting is ineffective because it is a passive activity that creates the illusion of learning without actually promoting deep processing. When students highlight text, they are simply identifying information, not actively engaging with it or forcing themselves to recall it. Research shows that highlighting produces no significant improvement in test performance compared to simply reading. Students feel productive because the page looks colourful, but recognition (seeing something familiar) is not the same as recall (retrieving it from memory independently).',
      marks: 3,
    },
    {
      question: 'What are the key features of an effective flashcard? Give specific examples.',
      lines: 5,
      modelAnswer:
        'An effective flashcard has a clear question or prompt on one side that forces retrieval, rather than a vague topic title. The answer on the reverse should be concise - ideally one to three key points, not a full paragraph. It should use dual coding by including a simple diagram, symbol, or colour-coded elements alongside text. The question should target a specific piece of knowledge, not an entire topic. For example, rather than "Tell me about photosynthesis," an effective flashcard might ask "What are the three reactants needed for photosynthesis?" with a simple equation and leaf diagram on the answer side.',
      marks: 4,
    },
    {
      question:
        'Explain the difference between a revision resource that promotes "recognition" versus one that promotes "recall." Why does this matter for exams?',
      lines: 5,
      modelAnswer:
        'A recognition-based resource, such as highlighted notes or a poster on the wall, allows you to see information and think "yes, I know that" without actually testing whether you can retrieve it independently. A recall-based resource, such as a self-quiz or a flashcard, forces you to produce the answer from memory before checking. This matters for exams because exam questions require recall - you must retrieve information from memory without any prompts or notes. If you have only practised recognition during revision, you may find that you cannot access the information when it matters most.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Bring examples of student revision resources from previous cohorts (anonymised) to use as good and poor examples.',
    'Many students equate effort with colourful, decorative notes. Redirect this energy toward resources that actually aid recall.',
    'The resource creation workshop benefits from having subject textbooks or notes available so students work with real content.',
    'Consider displaying the best student-created resources as exemplars for the rest of the year.',
    'Link back to Lesson 1 by asking: "Which of these resources work best with spaced repetition?"',
  ],
  targetedSkills: [
    'Metacognition',
    'Resource creation',
    'Evaluation and critique',
    'Dual coding',
    'Self-regulated learning',
  ],
}

// ─── Lesson 3: Mind Maps and Visual Learning ─────────────────────────────────

const lesson3: LessonPlan = {
  id: 'revision-03-mind-maps-visual',
  title: 'Mind Maps and Visual Learning',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the principles of visual learning and how spatial organisation aids memory.',
    'Create effective mind maps that go beyond simple decoration to promote deep thinking and connections.',
    'Use mind maps as a retrieval practice tool rather than just a note-taking method.',
  ],
  successCriteria: [
    'I can explain why visual and spatial organisation helps memory retention.',
    'I can create a mind map that shows clear hierarchical relationships and cross-links between ideas.',
    'I can use a mind map from memory as a retrieval practice tool.',
  ],
  keywords: [
    'mind map',
    'spatial memory',
    'hierarchical organisation',
    'cross-links',
    'visual encoding',
    'schema',
    'categorisation',
  ],
  starterActivity: {
    title: 'The Memory Palace',
    duration: '8 minutes',
    instructions:
      'Introduce the concept of spatial memory: ask students to describe the layout of their bedroom in detail - most can recall exactly where every piece of furniture is. Explain that this demonstrates how powerful spatial and visual memory is compared to rote memorisation of text. Then display a cluttered slide of 15 history facts in a block of text and a visually organised mind map of the same facts. Give students 30 seconds to study one version, then test recall. Compare results to show that spatial organisation improves memory.',
    differentiation: {
      support:
        'Students work in pairs to describe their room layout and then discuss why spatial memory is strong.',
      core: 'Students complete the recall test independently and reflect on which version they found easier.',
      stretch:
        'Students explain the cognitive science behind why spatial organisation aids memory, linking to dual coding.',
    },
    resources: ['Text block slide', 'Mind map slide of same content', 'Timer'],
  },
  mainActivities: [
    {
      title: 'What Makes a Mind Map Effective?',
      duration: '15 minutes',
      instructions:
        'Show three mind maps: (1) A poor example - just a spider diagram with single words, no hierarchy, no images. (2) A decorative example - beautiful colours and drawings but no clear structure or connections. (3) An effective example - clear central topic, hierarchical branches, key details on sub-branches, cross-links showing connections between ideas, simple icons or symbols for dual coding. Students annotate the effective example, identifying the features that make it work. Teacher explains the key rules: start with a central image or word; use single keywords on branches, not sentences; create clear hierarchies from general to specific; add cross-links to show how ideas connect; use colour to group related ideas, not just for decoration.',
      differentiation: {
        support: 'Provide an annotated version with labels to match to features.',
        core: 'Students annotate independently and list the key rules in their own words.',
        stretch: 'Students explain why each feature works in terms of memory and cognition.',
      },
      resources: ['Three example mind maps (poor, decorative, effective)', 'Annotation worksheet'],
    },
    {
      title: 'Mind Map Creation and Retrieval Challenge',
      duration: '25 minutes',
      instructions:
        'Phase 1 (15 minutes): Students create a mind map for a topic they are currently studying, applying all the rules discussed. They should use their notes or textbook for accuracy but focus on organising information hierarchically with clear branches, sub-branches, cross-links, and simple visual elements. Phase 2 (10 minutes): The retrieval challenge. Students turn their completed mind map face down. On a blank sheet, they attempt to recreate the entire mind map from memory. After 5 minutes of recall, they flip their original and compare, highlighting any gaps in a different colour. This demonstrates that creating a mind map is useful, but recreating it from memory is where the real learning happens.',
      differentiation: {
        support:
          'Provide a partially completed mind map template with the central topic and main branches already drawn; students add sub-branches and details.',
        core: 'Students create and recreate the mind map independently, identifying gaps.',
        stretch:
          'Students recreate their mind map twice - once immediately and once at the end of the lesson - to experience the spacing effect within a single session.',
      },
      resources: [
        'Blank A3 paper',
        'Coloured pens',
        'Subject notes/textbooks',
        'Mind map template (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Gallery Walk and Reflection',
    duration: '7 minutes',
    instructions:
      'Students display their original and retrieval mind maps side by side. Class completes a brief gallery walk, identifying one mind map that demonstrates particularly effective use of hierarchy, cross-links, or visual elements. Students then write a two-sentence reflection: "The most effective thing about my mind map was... Next time I would improve..."',
    differentiation: {
      support: 'Reflection sentence starters are provided.',
      core: 'Students complete the reflection and identify one specific gap from their retrieval attempt.',
      stretch:
        'Students explain how they would use mind maps as an ongoing retrieval tool across a revision period.',
    },
  },
  homework:
    'Create a mind map for a different GCSE topic. Then, without looking at it, attempt to recreate it from memory the next day. Bring both versions to the next lesson.',
  worksheetQuestions: [
    {
      question: 'Why is spatial organisation more effective for memory than linear notes?',
      lines: 4,
      modelAnswer:
        "Spatial organisation is more effective because it engages the brain's powerful spatial memory system - the same system that allows us to remember the layout of familiar rooms. When information is arranged in a spatial layout like a mind map, the brain encodes both the content and its position, creating multiple retrieval cues. Linear notes, by contrast, present information in a single sequence, which provides fewer memory hooks. Additionally, spatial organisation visually shows the relationships between ideas, which helps the brain build schemas - organised frameworks of connected knowledge.",
      marks: 4,
    },
    {
      question: 'What is the difference between a decorative mind map and an effective one?',
      lines: 5,
      modelAnswer:
        'A decorative mind map prioritises visual appeal - elaborate drawings, excessive colour, and artistic presentation - but may lack clear structure and meaningful connections between ideas. An effective mind map uses visual elements purposefully: colour groups related ideas, simple icons provide dual coding, and the spatial layout clearly shows hierarchical relationships from general to specific. The key difference is that an effective mind map is a thinking tool that organises knowledge and reveals connections, while a decorative mind map may simply be a time-consuming way to copy information without deeply processing it.',
      marks: 4,
    },
    {
      question:
        'Explain how mind maps can be used as a retrieval practice tool, not just a note-taking method.',
      lines: 4,
      modelAnswer:
        'Mind maps become a retrieval tool when students create them from memory rather than from notes. The process involves: first, studying a completed mind map or notes; then putting all materials away; then attempting to recreate the mind map on a blank page from memory alone. Gaps in the recreated map reveal exactly which information has not been fully learned. This is far more effective than simply looking at a completed mind map, because active recall strengthens memory traces in a way that passive review cannot.',
      marks: 3,
    },
    {
      question: 'What are "cross-links" in a mind map and why are they valuable for revision?',
      lines: 4,
      modelAnswer:
        'Cross-links are connections drawn between different branches of a mind map that are not directly related through the hierarchy but share a meaningful relationship. For example, on a mind map about Macbeth, a cross-link might connect "Lady Macbeth" on one branch to "guilt" on another. Cross-links are valuable because they show that the student understands how different parts of a topic relate to each other, which is exactly what examiners reward in higher-mark responses. They also create additional retrieval pathways in memory, making the information easier to recall.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'The retrieval challenge (Phase 2) is the most important part of this lesson. Ensure students genuinely turn over their mind maps rather than peeking.',
    'Students often spend excessive time making mind maps beautiful. Redirect focus toward structure and connections.',
    'A3 paper works much better than A4 for mind maps - it allows proper spatial organisation.',
    'Consider photographing effective student examples for use in future lessons.',
    'This lesson links well to Lesson 2 (Creating Effective Revision Resources) and Lesson 1 (retrieval practice).',
  ],
  targetedSkills: [
    'Visual learning',
    'Categorisation and hierarchy',
    'Retrieval practice',
    'Dual coding',
    'Self-assessment',
  ],
}

// ─── Lesson 4: Flashcard Strategies That Actually Work ───────────────────────

const lesson4: LessonPlan = {
  id: 'revision-04-flashcard-strategies',
  title: 'Flashcard Strategies That Actually Work',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand why flashcards are effective and how they apply the principles of retrieval practice and spaced repetition.',
    'Identify common mistakes students make with flashcards and how to avoid them.',
    'Create and use flashcards effectively using the Leitner System for long-term retention.',
  ],
  successCriteria: [
    'I can explain why flashcards work in terms of active recall and spaced repetition.',
    'I can identify at least three common flashcard mistakes and explain how to fix them.',
    'I can demonstrate the Leitner System and explain how it makes revision more efficient.',
  ],
  keywords: [
    'Leitner System',
    'active recall',
    'interleaving',
    'elaborative interrogation',
    'self-testing',
    'metacognition',
    'overlearning',
  ],
  starterActivity: {
    title: 'Flashcard Myth-Busting',
    duration: '8 minutes',
    instructions:
      'Display five statements about flashcards and ask students to vote true or false: (1) "The more flashcards you have, the better." (2) "You should always put definitions on one side and terms on the other." (3) "Once you get a card right, you can remove it from the pile." (4) "Flashcards only work for vocabulary and definitions." (5) "Making flashcards is more important than using them." Reveal: all five are FALSE. Discuss why each is a myth and introduce the idea that most students use flashcards badly - this lesson will fix that.',
    differentiation: {
      support: 'Students vote using thumbs up/down and discuss in pairs before class feedback.',
      core: 'Students justify their vote for each statement before the reveal.',
      stretch:
        'Students predict the evidence-based alternative for each myth before it is revealed.',
    },
    resources: ['Myth-busting statements slide', 'Voting cards or mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'The Leitner System Masterclass',
      duration: '18 minutes',
      instructions:
        'Teacher demonstrates the Leitner System using a physical model with labelled boxes. Explain the system: all new cards start in Box 1 (reviewed daily). Cards answered correctly move to Box 2 (reviewed every 3 days). Correct again, they move to Box 3 (weekly). Then Box 4 (fortnightly) and Box 5 (monthly). Any card answered incorrectly returns to Box 1 regardless of its current position. This system automatically implements spaced repetition - well-known information is reviewed less often while difficult material gets more attention. Demonstrate with 10 sample flashcards on a topic. Then show common flashcard design mistakes: cards with too much text, cards that test recognition not recall, cards without questions (just topic titles), cards that are too vague. For each mistake, show the improved version.',
      differentiation: {
        support:
          'Provide a Leitner System diagram with labels and a step-by-step guide students can keep.',
        core: "Students draw and label their own Leitner System diagram and explain each box's review frequency.",
        stretch:
          'Students calculate the mathematical efficiency of the Leitner System - how many reviews does a card need vs daily review of every card?',
      },
      resources: [
        'Five labelled boxes or trays',
        'Sample flashcards (good and bad examples)',
        'Leitner System diagram handout',
      ],
    },
    {
      title: 'Flashcard Design and Practice Workshop',
      duration: '22 minutes',
      instructions:
        'Students create 15 flashcards for a GCSE topic they are currently studying, following these evidence-based rules: (1) One specific fact or concept per card. (2) Write the prompt as a question, not a topic title. (3) Keep answers concise - aim for the key point in one to two sentences. (4) Add a simple diagram or visual where possible (dual coding). (5) Include an "elaboration prompt" on the answer side - a "why" or "how" question to deepen understanding. After creation, students sort their cards into Leitner Box 1 and practise a full round: attempt to answer each card, sort into Box 1 (incorrect) or Box 2 (correct), then review Box 1 cards again immediately. Students track their accuracy on a simple tally chart.',
      differentiation: {
        support:
          'Provide flashcard templates with the question/answer structure pre-printed and one example card completed for their subject.',
        core: 'Students create all 15 cards independently, following the five rules, and complete the Leitner sorting process.',
        stretch:
          'Students also create five "connection cards" that link two different topics together and explain the relationship.',
      },
      resources: [
        'Blank flashcards or card stock',
        'Flashcard design rules poster',
        'Accuracy tally chart',
        'Subject notes/textbooks',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Partner Quiz and Reflection',
    duration: '7 minutes',
    instructions:
      'Students swap their flashcard set with a partner from a different subject. Partners quiz each other using the cards for 3 minutes, then provide feedback: Were the questions clear? Could I answer without having studied the topic (too easy/vague)? Was the answer side concise enough to check quickly? Students write one action point for improving their cards.',
    differentiation: {
      support: 'Feedback prompts provided on a checklist: clarity, specificity, answer length.',
      core: 'Students give and receive verbal feedback with one written improvement target.',
      stretch:
        'Students rewrite their weakest two cards based on partner feedback and explain the improvements.',
    },
  },
  homework:
    'Use your 15 flashcards in a genuine Leitner System session at home. Record which cards you got right and wrong. Bring the results next lesson and be ready to explain which topics need more work.',
  worksheetQuestions: [
    {
      question: 'Explain how the Leitner System implements spaced repetition automatically.',
      lines: 5,
      modelAnswer:
        'The Leitner System uses a series of boxes with increasing review intervals. All new cards start in Box 1 (daily review). When a card is answered correctly, it moves to the next box, which is reviewed less frequently (e.g., Box 2 every 3 days, Box 3 weekly). If a card is answered incorrectly at any point, it returns to Box 1 for daily review. This means difficult material automatically receives more frequent practice, while well-known material is reviewed less often. The system mirrors the spacing principle: information is reviewed just as it is about to be forgotten, strengthening the memory trace each time.',
      marks: 4,
    },
    {
      question:
        'List three common mistakes students make when creating flashcards and explain how to fix each one.',
      lines: 6,
      modelAnswer:
        'First, students often put too much information on one card, which makes it impossible to test specific knowledge. The fix is to limit each card to one clear question and a concise answer. Second, students write topic titles instead of questions (e.g., "Photosynthesis" instead of "What are the reactants of photosynthesis?"), which does not force retrieval. The fix is to always phrase the prompt as a specific question. Third, students stop reviewing cards once they get them right once, but a single correct answer does not mean the information is in long-term memory. The fix is to use the Leitner System so correctly answered cards are still reviewed, just less frequently.',
      marks: 6,
    },
    {
      question:
        'Why is it important to include an "elaboration prompt" on the answer side of a flashcard?',
      lines: 4,
      modelAnswer:
        'An elaboration prompt (such as "Why does this happen?" or "How does this connect to...?") deepens understanding beyond simple fact recall. When students answer the initial question and then consider the elaboration prompt, they are forced to think about the meaning and connections behind the fact. This deeper processing creates stronger, more flexible memory traces that can be applied in different exam contexts. It also helps students move beyond surface-level knowledge toward the analytical thinking that higher-mark exam questions require.',
      marks: 3,
    },
    {
      question:
        'A student says: "I made 200 flashcards last weekend and now I know everything for my biology exam." Explain what is wrong with this approach.',
      lines: 5,
      modelAnswer:
        'There are several problems with this approach. First, creating flashcards is only the first step - the real learning happens when you use them for retrieval practice over time, not just in one sitting. Second, 200 cards in one weekend suggests massed practice (cramming) rather than spaced repetition, which research shows is far less effective for long-term retention. Third, the student is confusing the effort of creation with actual learning - making cards feels productive, but without repeated retrieval over spaced intervals, most of the information will be forgotten within days. Finally, 200 cards is too many to review effectively in one session; the Leitner System would help by prioritising the most difficult cards.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Physical flashcards tend to work better than apps for this lesson because students can physically sort them into Leitner boxes.',
    'Many students will have used flashcards before but ineffectively. Frame this lesson as upgrading their technique, not starting from scratch.',
    'The partner quiz in the plenary often reveals that students write answers that are too long - use this as a teaching point.',
    'Consider providing card stock or index cards rather than asking students to cut paper - it saves time and produces better resources.',
    'Link to Lesson 1 (spaced repetition) throughout: the Leitner System is simply a practical tool for implementing the science.',
  ],
  targetedSkills: [
    'Active recall',
    'Spaced repetition application',
    'Resource creation',
    'Self-testing',
    'Metacognitive evaluation',
  ],
}

// ─── Lesson 5: Past Paper Practice - Maximising Impact ───────────────────────

const lesson5: LessonPlan = {
  id: 'revision-05-past-paper-practice',
  title: 'Past Paper Practice: Maximising Impact',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand why past paper practice is considered the most effective revision strategy and how to use it systematically.',
    'Develop a structured approach to analysing mark schemes and using them to improve future answers.',
    'Learn to identify patterns in exam questions across different papers and years.',
  ],
  successCriteria: [
    'I can explain why past paper practice is more effective than other revision strategies.',
    'I can use a mark scheme to assess a sample answer and identify specific improvements.',
    'I can identify question patterns and predict likely exam topics based on analysis of past papers.',
  ],
  keywords: [
    'mark scheme',
    'command words',
    'assessment objectives',
    'indicative content',
    'examiner report',
    'question stems',
  ],
  starterActivity: {
    title: 'Spot the Command Word',
    duration: '8 minutes',
    instructions:
      'Display ten exam questions from various GCSE subjects. Students highlight the command word in each (analyse, evaluate, explain, compare, describe, identify, justify, outline, discuss, assess). For each command word, students write one sentence explaining what the examiner expects. Teacher consolidates: the command word tells you exactly what type of thinking is required, and misreading it is the single most common reason students lose marks unnecessarily.',
    differentiation: {
      support: 'Provide a command word glossary that students match to each question.',
      core: 'Students identify command words and write their own definitions before checking against the glossary.',
      stretch:
        'Students rewrite two questions replacing the command word (e.g., change "describe" to "evaluate") and explain how the expected answer changes.',
    },
    resources: ['Ten exam questions slide', 'Command word glossary', 'Highlighters'],
  },
  mainActivities: [
    {
      title: 'Mark Scheme Masterclass',
      duration: '20 minutes',
      instructions:
        'Provide students with a sample GCSE exam question (English Literature or Language works well as all students study it) along with three student responses at different levels (Grade 3, Grade 5, Grade 7). Also provide the official mark scheme. Teacher models how to read a mark scheme: identify the assessment objectives being tested, understand the level descriptors, recognise the indicative content. Students then use the mark scheme to rank the three responses from weakest to strongest, annotating specific evidence of each level descriptor being met or missed. Class discussion: what separates each grade boundary? Students write "two stars and a wish" feedback for the Grade 5 response, identifying two strengths and one improvement target with specific reference to the mark scheme.',
      differentiation: {
        support:
          'Mark scheme is colour-coded by assessment objective, and level descriptors are simplified.',
        core: 'Students complete ranking and annotation independently, then write detailed feedback for the Grade 5 response.',
        stretch:
          "Students rewrite the Grade 5 response's weakest paragraph to meet Grade 7 criteria and annotate their improvements.",
      },
      resources: [
        'Sample exam question',
        'Three levelled student responses',
        'Official mark scheme',
        'Annotation guide',
      ],
    },
    {
      title: 'Past Paper Pattern Analysis',
      duration: '20 minutes',
      instructions:
        'Provide students with the front page and question list from five past papers (same subject, different years). Students work in groups to identify patterns: Which topics appear most frequently? Are there question types that appear every year? What is the typical structure of the paper (time allocation, mark distribution)? How do high-mark questions differ from low-mark questions in their command words? Groups record findings on a shared analysis grid. Teacher then introduces the concept of "question prediction" - while you cannot predict exact questions, you can identify highly likely topic areas and question types. Students create a personal "hit list" of five topics they expect to appear and five question types they need to practise. This becomes a strategic revision priority list.',
      differentiation: {
        support:
          'Provide a partially completed analysis grid with column headings and one example row filled in.',
        core: 'Students complete the analysis grid in groups and create their personal hit list independently.',
        stretch:
          'Students analyse examiner reports alongside the papers to identify commonly missed topics and add these to their hit list.',
      },
      resources: [
        'Five past papers (front pages and question lists)',
        'Analysis grid worksheet',
        'Examiner reports (stretch tier)',
        'Personal hit list template',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The 5-Minute Past Paper Plan',
    duration: '7 minutes',
    instructions:
      'Students create a personal "Past Paper Action Plan" answering three questions: (1) Which three past papers will I complete this week? (2) How will I use the mark scheme after each attempt? (3) What will I do with topics I identify as weak? Students share their plan with a partner who checks it is specific, realistic, and includes mark scheme analysis.',
    differentiation: {
      support: 'Template provided with sentence starters for each of the three questions.',
      core: 'Students write their action plan independently and discuss it with a partner.',
      stretch:
        'Students create a six-week past paper schedule that incorporates spaced repetition of weak topics.',
    },
  },
  homework:
    'Complete one full past paper question under timed conditions. Then use the mark scheme to self-assess, highlighting where you met each criterion and identifying two specific areas for improvement.',
  worksheetQuestions: [
    {
      question:
        'Why is completing past papers considered more effective than re-reading notes or textbooks?',
      lines: 5,
      modelAnswer:
        'Past papers are more effective because they combine several powerful learning strategies simultaneously. They provide retrieval practice (recalling knowledge under pressure), they familiarise students with the exact format and language of real exam questions, and they build exam stamina and time management skills. Unlike re-reading, which is passive and creates an illusion of knowledge, past papers reveal genuine gaps in understanding because the student cannot hide behind recognition - they must produce answers independently. Additionally, the act of checking answers against mark schemes provides immediate, targeted feedback that shows exactly what the examiner is looking for.',
      marks: 4,
    },
    {
      question:
        'Explain what a mark scheme tells you and how to use it effectively after completing a past paper.',
      lines: 5,
      modelAnswer:
        'A mark scheme shows the specific criteria an examiner uses to award marks, including the assessment objectives being tested, the level descriptors for each grade band, and the indicative content (expected points or examples). To use it effectively, students should first attempt the question fully without looking at the mark scheme, then compare their answer against the level descriptors to determine which band they would fall into. They should highlight specific points they made that match the indicative content and identify points they missed. Finally, they should note recurring weaknesses across multiple questions and target these areas in future revision.',
      marks: 4,
    },
    {
      question:
        'What are "command words" and why is understanding them essential for exam success?',
      lines: 4,
      modelAnswer:
        'Command words are the verbs in exam questions that tell students exactly what type of response is expected. For example, "describe" requires factual detail, "explain" requires reasons and causes, "evaluate" requires weighing up arguments and reaching a judgement, and "analyse" requires breaking something down into components and examining how they work. Understanding command words is essential because a student who "describes" when asked to "evaluate" will not access the higher marks, even if their factual knowledge is excellent. The command word determines the structure, depth, and focus of the answer.',
      marks: 3,
    },
    {
      question:
        'How can analysing multiple past papers help you predict what might come up in your exam?',
      lines: 5,
      modelAnswer:
        'By studying five or more past papers from the same exam board and specification, students can identify recurring patterns: certain topics appear almost every year, specific question types are always included, and the paper structure remains consistent. While exact questions cannot be predicted, students can identify high-probability topics and question formats. For example, if a particular text or theme has appeared in four of the last five papers, it is likely to feature again. Similarly, if a question type has never appeared, it is less likely to be prioritised. This analysis allows students to focus revision time strategically on the most likely content, rather than trying to cover everything equally.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Use past papers from the specific exam board your students are sitting. Generic papers are less useful for pattern analysis.',
    'The mark scheme masterclass works best with English Literature as all students take it, but adapt to your subject if preferred.',
    'Emphasise that completing a past paper without reviewing the mark scheme is only half the work - the analysis is equally important.',
    'Consider building a classroom display of command words that remains visible throughout the revision period.',
    'Examiner reports are gold dust for revision - they explicitly state where students commonly lose marks.',
  ],
  targetedSkills: [
    'Exam technique',
    'Self-assessment',
    'Analytical reading of mark schemes',
    'Strategic planning',
    'Pattern recognition',
  ],
}

// ─── Lesson 6: Time Management and Revision Timetables ───────────────────────

const lesson6: LessonPlan = {
  id: 'revision-06-time-management',
  title: 'Time Management and Revision Timetables',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Audit current use of time and identify realistic windows for revision.',
    'Create an effective revision timetable that incorporates spaced repetition, interleaving, and regular breaks.',
    'Understand the Pomodoro Technique and how structured work-rest cycles improve focus and retention.',
  ],
  successCriteria: [
    'I can honestly evaluate how I currently spend my time and identify at least five revision slots per week.',
    'I can create a revision timetable that spaces subjects, includes breaks, and covers all topics.',
    'I can explain the Pomodoro Technique and why regular breaks improve concentration.',
  ],
  keywords: [
    'Pomodoro Technique',
    'interleaving',
    'time audit',
    'prioritisation',
    'work-rest cycle',
    'procrastination',
  ],
  starterActivity: {
    title: 'The Time Audit',
    duration: '10 minutes',
    instructions:
      'Provide students with a blank 24-hour clock template for a typical school day. Students fill in their fixed commitments: school hours, sleep, travel, meals, clubs, and family time. Then highlight the remaining blank spaces - these are potential revision windows. Most students discover they have 2-4 hours of usable time that is currently spent on screens, social media, or unstructured free time. Discuss: the goal is not to eliminate leisure time but to be intentional about how some of those hours are used. Teacher emphasises that quality matters more than quantity - 3 focused hours beats 6 distracted hours.',
    differentiation: {
      support: 'Pre-printed clock template with school hours and sleep already filled in.',
      core: 'Students complete the time audit independently and identify realistic revision slots.',
      stretch:
        'Students compare weekday and weekend schedules and calculate their total available weekly revision hours.',
    },
    resources: ['24-hour clock template', 'Coloured pens for categorising activities'],
  },
  mainActivities: [
    {
      title: 'The Pomodoro Technique and Effective Scheduling',
      duration: '18 minutes',
      instructions:
        "Introduce the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute break. After four Pomodoros, take a longer 15-20 minute break. Explain the science: the brain's ability to concentrate declines after about 25-30 minutes, and short breaks allow mental refreshment and consolidation. Demonstrate how to structure a 2-hour revision session: Pomodoro 1 (Subject A - retrieval practice), break, Pomodoro 2 (Subject B - past paper), break, Pomodoro 3 (Subject A - review weak areas), break, Pomodoro 4 (Subject C - flashcards). Highlight the principle of interleaving - switching between subjects rather than blocking one subject for hours is more effective because it forces the brain to reload different schemas, strengthening retrieval. Students then experience a mini Pomodoro: 10 minutes of focused revision on any subject using any technique from previous lessons, followed by a 2-minute break, then 10 minutes on a different subject.",
      differentiation: {
        support:
          'Provide a Pomodoro session planner template with time slots pre-labelled and one completed example.',
        core: 'Students plan their own 2-hour Pomodoro session for this evening, choosing subjects and techniques.',
        stretch:
          'Students design a full Saturday revision schedule using Pomodoro blocks with interleaved subjects.',
      },
      resources: [
        'Pomodoro Technique explanation slide',
        'Session planner template',
        'Timer for mini Pomodoro exercise',
      ],
    },
    {
      title: 'Building Your Revision Timetable',
      duration: '20 minutes',
      instructions:
        'Students create a personalised two-week revision timetable using a grid template. Step 1: List all GCSE subjects and weight them by exam proximity and confidence level (high confidence = less time, low confidence = more time). Step 2: Plot fixed commitments from the time audit. Step 3: Fill in revision slots using these rules: never study the same subject for more than 50 minutes in a row; alternate between high-effort and low-effort subjects; schedule difficult subjects when you are most alert (usually morning or early evening); include at least one full day off per week; build in flexibility for unexpected events. Step 4: Add specific techniques to each slot (not just "revise maths" but "maths - past paper on trigonometry, then review mark scheme"). Students peer-assess timetables against a checklist of effective scheduling principles.',
      differentiation: {
        support:
          'Provide a simplified timetable with fewer subjects and pre-suggested slot allocations based on exam dates.',
        core: 'Students create a full two-week timetable independently and peer-assess against the checklist.',
        stretch:
          'Students create a timetable that spans from now to the exam period, building in spaced repetition cycles for each subject.',
      },
      resources: [
        'Two-week timetable grid template',
        'Subject weighting worksheet',
        'Scheduling principles checklist',
        'Exam date list',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Commitment Card',
    duration: '7 minutes',
    instructions:
      'Students write a "commitment card" with three specific pledges: (1) My first revision session this week will be on [day] at [time] studying [subject] using [technique]. (2) I will use the Pomodoro Technique by [specific plan]. (3) One distraction I will reduce is [specific distraction] by [specific strategy]. Students share one pledge with a partner who becomes their "accountability buddy" and will check in next lesson.',
    differentiation: {
      support: 'Sentence starters provided for each pledge.',
      core: 'Students write all three pledges with specific details.',
      stretch:
        'Students add a fourth pledge about reviewing and adjusting their timetable at the end of the week.',
    },
  },
  homework:
    'Follow your revision timetable for three days this week. After each session, write a brief note on what worked, what did not, and one adjustment for next time. Bring your annotated timetable to the next lesson.',
  worksheetQuestions: [
    {
      question: 'Explain the Pomodoro Technique and why it is effective for revision.',
      lines: 4,
      modelAnswer:
        'The Pomodoro Technique involves working for 25 minutes with full focus, followed by a 5-minute break, repeated in cycles. After four cycles, a longer break of 15-20 minutes is taken. It is effective because research shows that concentration naturally declines after about 25-30 minutes, so regular breaks prevent mental fatigue and maintain the quality of learning. The short breaks also give the brain time to consolidate information. Additionally, having a defined end point (25 minutes) makes it easier to start - students are less likely to procrastinate when they know they only need to focus for a short, manageable period.',
      marks: 4,
    },
    {
      question:
        'What is "interleaving" and why is it better than studying one subject for several hours?',
      lines: 5,
      modelAnswer:
        'Interleaving means alternating between different subjects or topics within a single revision session, rather than spending hours on one subject (known as blocking). It is more effective because switching topics forces the brain to repeatedly retrieve and reload different sets of knowledge, which strengthens the neural pathways for each subject. Blocking feels easier and more comfortable, which tricks students into thinking they are learning more, but research consistently shows that interleaving produces better long-term retention and exam performance. It also mirrors the experience of an exam day, where students must switch between different subjects and ways of thinking.',
      marks: 4,
    },
    {
      question:
        'A student says: "I revised for 6 hours on Saturday but I do not feel like I learned anything." What might have gone wrong and what advice would you give?',
      lines: 5,
      modelAnswer:
        'Several things may have gone wrong. First, the student likely did not take regular breaks, leading to mental fatigue and declining concentration after the first hour. Second, they may have used passive strategies like re-reading or highlighting, which feel productive but do not create lasting memories. Third, six hours on one day without any revision on other days means no spaced repetition. Advice: use the Pomodoro Technique (25 minutes on, 5 minutes off), alternate between subjects every 25-50 minutes (interleaving), use active strategies like retrieval practice and past papers, and spread the six hours across three or four days instead of cramming into one session.',
      marks: 4,
    },
    {
      question:
        'Why is it important to include specific techniques, not just subject names, in a revision timetable?',
      lines: 4,
      modelAnswer:
        'Writing "revise English" on a timetable is too vague and often leads to procrastination or passive activities like re-reading notes. Specifying the technique (e.g., "English - complete 2018 Paper 1 Question 5 under timed conditions, then self-assess with mark scheme") gives the session a clear purpose and makes it much more likely that the student will engage in active, effective revision. It also allows the student to track exactly what has been covered and identify gaps. Specific plans reduce decision-making at the start of each session, which is when students are most likely to get distracted or give up.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'The time audit can be eye-opening for students. Handle sensitively - some students have significant caring responsibilities or part-time jobs.',
    'Avoid prescribing exact hours of revision. Research suggests quality over quantity; even 30 focused minutes daily is valuable.',
    'The Pomodoro Technique works well when demonstrated live in the lesson - students often enjoy the structure.',
    'Revision timetables only work if they are realistic. Encourage students to start with fewer sessions and build up rather than creating an impossible schedule that they abandon after two days.',
    'The accountability buddy system is highly effective. Consider building check-ins into the start of future lessons.',
  ],
  targetedSkills: [
    'Time management',
    'Planning and organisation',
    'Self-regulation',
    'Prioritisation',
    'Metacognition',
  ],
}

// ─── Lesson 7: Active vs Passive Revision ────────────────────────────────────

const lesson7: LessonPlan = {
  id: 'revision-07-active-vs-passive',
  title: 'Active vs Passive Revision',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Distinguish between active and passive revision strategies and understand why active methods produce better results.',
    'Experience the difference between passive and active methods through direct comparison activities.',
    'Commit to replacing at least three passive habits with active alternatives in their own revision practice.',
  ],
  successCriteria: [
    'I can categorise revision strategies as active or passive and explain why each category is effective or ineffective.',
    'I can describe the difference in my learning after using a passive method versus an active method on the same content.',
    'I can create a personal "swap list" replacing passive habits with active alternatives.',
  ],
  keywords: [
    'active revision',
    'passive revision',
    'illusion of competence',
    'generation effect',
    'testing effect',
    'elaboration',
  ],
  starterActivity: {
    title: 'The Re-Reading Experiment',
    duration: '10 minutes',
    instructions:
      'Give students a one-page factual text on an unfamiliar topic (e.g., the history of Morse code). Group A re-reads the text three times silently (passive). Group B reads it once, then closes it and writes down everything they can remember, checks, and repeats (active). After 5 minutes of practice, all students close everything and take a 5-question quiz. Compare group scores. Group B almost always outperforms Group A, despite spending less time reading. Discuss: why did the active group learn more? Introduce the concept of the "illusion of competence" - re-reading makes information feel familiar, but familiarity is not the same as knowledge.',
    differentiation: {
      support: 'Quiz questions are multiple choice to reduce pressure.',
      core: 'Quiz questions require short written answers from recall.',
      stretch:
        'Students predict the results before the quiz and hypothesise the cognitive reason for the outcome.',
    },
    resources: ['Factual text handout (enough for all students)', 'Five-question quiz', 'Timer'],
  },
  mainActivities: [
    {
      title: 'The Active-Passive Spectrum',
      duration: '18 minutes',
      instructions:
        'Display a list of 15 revision activities. Students sort them onto a spectrum from most passive to most active: re-reading notes, highlighting, watching videos, copying notes, listening to a podcast, making flashcards, using flashcards for self-testing, doing past papers, teaching someone else, brain dumps from memory, making mind maps from notes, making mind maps from memory, writing practice essays, reading a revision guide, discussing topics with friends. Teacher reveals the evidence-based positioning and discusses why some activities that feel productive (highlighting, copying) are actually passive, while activities that feel harder (self-testing, brain dumps) are active and more effective. Introduce the "generation effect" - information you generate yourself is remembered better than information you passively receive. Students create a two-column table of "strategies I currently use" and label each as active or passive.',
      differentiation: {
        support:
          'Sorting cards provided for physical manipulation. Active/passive definitions clearly displayed.',
        core: 'Students sort independently, discuss with a partner, then compare with the evidence-based ranking.',
        stretch:
          'Students explain the cognitive science behind why each strategy is active or passive, using terms like retrieval, generation effect, and elaboration.',
      },
      resources: [
        '15 revision activities list/sorting cards',
        'Active-passive spectrum poster',
        'Two-column table worksheet',
      ],
    },
    {
      title: 'The Active Revision Transformation',
      duration: '20 minutes',
      instructions:
        'Students identify their three most-used passive revision habits (most commonly: re-reading, highlighting, copying notes). For each passive habit, they design an active alternative using a "Passive to Active Transformation" worksheet. Example: Passive habit: Re-reading biology notes. Active alternative: Read notes for 5 minutes, close them, brain dump everything on a blank page, then check and fill gaps. Students then practise their most important transformation for 10 minutes using real subject content. They note how it feels compared to the passive version (harder, slower, less comfortable) and discuss why this discomfort is actually a sign of learning. Create a personal "swap list" to display at their revision desk: three passive habits crossed out with active alternatives written alongside.',
      differentiation: {
        support:
          'Transformation worksheet includes suggested active alternatives for common passive habits.',
        core: 'Students design their own active alternatives and practise one for 10 minutes with real content.',
        stretch:
          'Students design an active revision session plan for an entire evening that eliminates all passive methods.',
      },
      resources: [
        'Passive to Active Transformation worksheet',
        'Subject notes for practice activity',
        'Swap list template',
        'Timer for practice session',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Pledge Wall',
    duration: '7 minutes',
    instructions:
      'Each student writes one passive habit they will stop and one active strategy they will start on a sticky note. These are placed on a "Pledge Wall" display. Students read three other pledges and give a thumbs-up to any they will also adopt. Quick class discussion: what is the biggest barrier to switching from passive to active revision, and how can we overcome it?',
    differentiation: {
      support: 'Sentence frame provided: "I will stop... and start... because..."',
      core: 'Students write their pledge and discuss barriers with a partner.',
      stretch:
        'Students identify a strategy for holding themselves accountable to their pledge over the next month.',
    },
  },
  homework:
    'This week, try one revision session using only active strategies (no re-reading, no highlighting, no copying). Write a short reflection: What did you do? How did it feel compared to your usual approach? What did you learn about your own revision habits?',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between active and passive revision. Give one example of each.',
      lines: 5,
      modelAnswer:
        'Passive revision involves receiving or reviewing information without actively engaging with it - the learner is an observer rather than a participant. An example is re-reading notes, where the student simply looks at information they have already written. Active revision requires the learner to generate, retrieve, or transform information through mental effort. An example is a brain dump, where the student writes everything they can remember about a topic from memory before checking against their notes. Active revision is more effective because it forces the brain to reconstruct knowledge, which strengthens the neural pathways needed for recall in exams.',
      marks: 4,
    },
    {
      question:
        'What is the "illusion of competence" and why is it dangerous for exam preparation?',
      lines: 5,
      modelAnswer:
        'The illusion of competence occurs when passive revision strategies like re-reading make information feel familiar, leading students to believe they have learned it when they have not. The brain confuses recognition (seeing something and thinking "I know this") with recall (being able to produce the information independently). This is dangerous because exams require recall, not recognition. A student who has re-read their notes multiple times may feel confident walking into the exam, only to find they cannot remember key details when faced with specific questions. The solution is to use active strategies like self-testing, which give an honest measure of what has actually been learned.',
      marks: 4,
    },
    {
      question: 'What is the "generation effect" and how can students use it in their revision?',
      lines: 4,
      modelAnswer:
        "The generation effect is the finding that information a person generates themselves is remembered significantly better than information they passively receive. For example, writing an answer from memory, creating your own examples, or explaining a concept in your own words all produce stronger memories than simply reading a textbook explanation. Students can use this in revision by always trying to produce answers before checking, creating their own questions and practice materials, teaching concepts to others, and making connections between topics in their own words rather than copying someone else's summary.",
      marks: 3,
    },
    {
      question:
        'Transform the following passive revision plan into an active one: "Tuesday evening: Re-read chapters 4-6 of the biology textbook and highlight key terms."',
      lines: 5,
      modelAnswer:
        'Active alternative: "Tuesday evening: Pomodoro 1 - Brain dump everything I remember from chapters 4-6 on a blank page, then check against the textbook and note gaps in a different colour. Pomodoro 2 - Create 10 flashcards for the key terms I struggled to recall, using questions on one side and concise answers with diagrams on the other. Pomodoro 3 - Test myself using the flashcards, sorting them into Leitner boxes based on accuracy. End of session - list three topics I need to return to in my next biology session." This plan forces retrieval, identifies genuine gaps, creates reusable resources, and builds in self-assessment.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The re-reading experiment in the starter almost always works. If results are mixed, emphasise the trend rather than individual outliers.',
    'Students often feel defensive about their current strategies. Frame the lesson as "upgrading" rather than "you have been doing it wrong."',
    'The biggest barrier to active revision is that it feels harder and less comfortable. Spend time normalising this discomfort.',
    'The pledge wall can become a powerful ongoing display if maintained throughout the revision period.',
    'This lesson consolidates all previous lessons - refer back to spaced repetition, flashcards, and mind maps as examples of active strategies.',
  ],
  targetedSkills: [
    'Metacognition',
    'Self-evaluation',
    'Strategy selection',
    'Critical thinking',
    'Self-regulated learning',
  ],
}

// ─── Lesson 8: Exam Technique - Reading Questions Carefully ──────────────────

const lesson8: LessonPlan = {
  id: 'revision-08-exam-technique',
  title: 'Exam Technique: Reading Questions Carefully',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Develop a systematic approach to reading and deconstructing exam questions before writing.',
    'Understand how marks are allocated and how to plan time accordingly within an exam.',
    'Practise structuring responses that directly address the question rather than writing everything they know about a topic.',
  ],
  successCriteria: [
    'I can deconstruct an exam question by identifying the command word, topic focus, and specific requirements.',
    'I can plan my time in an exam based on the number of marks available for each question.',
    'I can write a focused response that directly addresses the question rather than a general knowledge dump.',
  ],
  keywords: [
    'command word',
    'question deconstruction',
    'time allocation',
    'focused response',
    'rubric',
    'mark allocation',
    'topic focus',
  ],
  starterActivity: {
    title: 'The Costly Misread',
    duration: '8 minutes',
    instructions:
      'Display an exam question: "Evaluate how Shakespeare uses the character of Lady Macbeth to explore ideas about power." Then display two student openings. Student A writes about Lady Macbeth generally - her background, personality, key scenes. Student B writes specifically about how Shakespeare uses Lady Macbeth to explore power. Ask: which student will score higher and why? Reveal that Student A, despite having strong knowledge, would score poorly because they are not answering the question - they are writing about Lady Macbeth, not about how Shakespeare uses her to explore power. The command word "evaluate" and the focus on "ideas about power" are both being ignored. Discuss: how many marks are lost in exams simply because students do not read the question carefully enough?',
    differentiation: {
      support:
        'Key differences between the two responses are highlighted in colour for students to spot.',
      core: "Students identify the differences independently and explain why Student B's approach is better.",
      stretch: "Students rewrite Student A's opening to directly address the question.",
    },
    resources: ['Exam question slide', 'Two student response openings', 'Highlighters'],
  },
  mainActivities: [
    {
      title: 'The QDPC Method: Question Deconstruction',
      duration: '20 minutes',
      instructions:
        'Teach the QDPC method for deconstructing any exam question. Q - Question type: What is the command word? (Explain, Evaluate, Analyse, Compare, etc.) D - Direct focus: What specific topic or aspect does the question ask about? P - Parameters: Are there any limits or specific requirements? (A particular scene, time period, character, etc.) C - Criteria: How many marks is it worth and what does the mark scheme expect at each level? Model the QDPC method on three exam questions from different subjects, showing how the same approach works universally. Students then practise independently on six exam questions, completing a QDPC grid for each. Discuss as a class, then teach the "highlight and annotate" technique: students physically highlight command words in one colour, topic focus in another, and parameters in a third. This becomes their standard exam routine.',
      differentiation: {
        support: 'QDPC grid partially completed with the first two questions as examples.',
        core: 'Students complete all six questions independently using the QDPC grid.',
        stretch:
          'Students add a fifth column - "common mistakes" - predicting where students typically go wrong on each question type.',
      },
      resources: [
        'QDPC method explanation poster',
        'Six exam questions from different subjects',
        'QDPC grid worksheet',
        'Coloured highlighters',
      ],
    },
    {
      title: 'Time Allocation and Focused Response Practice',
      duration: '20 minutes',
      instructions:
        'Teach the time allocation formula: total exam time divided by total marks gives time per mark. For a 1-hour paper worth 60 marks, each mark is worth 1 minute. A 4-mark question should take approximately 4 minutes; a 12-mark question should take approximately 12 minutes. Students calculate time allocations for three different papers. Then practise writing a focused response: provide a 12-mark exam question and 12 minutes on the clock. Before writing, students spend 2 minutes on QDPC deconstruction and a brief plan (bullet points or spider diagram). Then 10 minutes writing. After time is called, students peer-assess: does every paragraph directly link back to the specific question? Is the command word reflected in the response? Are there any paragraphs that wander off-topic? Students highlight any "off-topic" sentences in their own work.',
      differentiation: {
        support: 'Planning template provided with sections that mirror the question requirements.',
        core: 'Students complete QDPC, plan, write, and self-assess independently.',
        stretch:
          'Students rewrite their weakest paragraph to make it more directly focused on the question.',
      },
      resources: [
        'Time allocation formula slide',
        'Three sample paper mark breakdowns',
        '12-mark exam question',
        'Planning templates',
        'Timer',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Question Reading Routine',
    duration: '7 minutes',
    instructions:
      'Students create a personal "Question Reading Routine" card - a step-by-step checklist they will follow for every exam question they encounter from now on. Steps should include: read the question twice, highlight command word and topic focus, identify parameters, check mark allocation, plan for 2 minutes before writing, check every paragraph links to the question. Students keep this card in their pencil case for use in all future assessments.',
    differentiation: {
      support: 'Pre-printed routine card with steps listed; students add personal reminders.',
      core: 'Students create their own routine card from scratch.',
      stretch:
        'Students create different routine cards for different question types (short answer, essay, data response).',
    },
  },
  homework:
    'Find three exam questions from your GCSE subjects. For each, complete a QDPC deconstruction and write a 2-minute plan (not the full answer - just the plan). Bring all three to the next lesson.',
  worksheetQuestions: [
    {
      question:
        'Using the QDPC method, deconstruct this exam question: "Analyse how Dickens presents the theme of social class in A Christmas Carol."',
      lines: 6,
      modelAnswer:
        'Q (Question type): The command word is "analyse," which means break down the text into components and examine how they work together - looking at language, structure, and form rather than just describing what happens. D (Direct focus): The specific focus is the theme of social class, not other themes like redemption or Christmas spirit. P (Parameters): The question specifies Dickens as the agent (how he presents, as a deliberate authorial choice) and limits the text to A Christmas Carol. C (Criteria): This is an analytical question, so the mark scheme will reward detailed examination of methods (language, structure, form), supported by evidence (quotations), with links to context and authorial intention.',
      marks: 4,
    },
    {
      question:
        'Explain the time allocation formula and apply it to a 1 hour 45 minute exam worth 80 marks.',
      lines: 4,
      modelAnswer:
        'The time allocation formula is: total exam time in minutes divided by total marks equals time per mark. For a 1 hour 45 minute exam (105 minutes) worth 80 marks: 105 divided by 80 = approximately 1.3 minutes per mark. This means a 4-mark question should take about 5 minutes, an 8-mark question about 10-11 minutes, and a 20-mark question about 26 minutes. Students should use this calculation at the start of every exam to plan their time and avoid spending too long on low-mark questions at the expense of high-mark ones.',
      marks: 3,
    },
    {
      question:
        'What is the difference between a "knowledge dump" and a "focused response"? Why does this distinction matter?',
      lines: 5,
      modelAnswer:
        'A knowledge dump is when a student writes everything they know about a topic without directly addressing the specific question asked. It shows knowledge but not the ability to select and apply relevant information. A focused response uses the same knowledge but selects only the information that is directly relevant to the specific question, structured around the command word and topic focus. This distinction matters because examiners award marks for answering the question, not for displaying general knowledge. A student who knows less but focuses precisely on the question will often outscore a student with broader knowledge who fails to address the specific requirements.',
      marks: 4,
    },
    {
      question:
        'Why is it worth spending 2 minutes planning before writing a longer exam response, even though it feels like wasted time?',
      lines: 4,
      modelAnswer:
        'Two minutes of planning prevents several costly problems: it ensures the response directly addresses the question (avoiding off-topic paragraphs), it creates a logical structure that is easier for the examiner to follow, it prevents the student from forgetting key points that they only remember after finishing, and it reduces anxiety because the student knows where their answer is heading. Without a plan, students often start writing immediately, realise halfway through that they have gone off-topic, or end up repeating points. The 2 minutes "lost" to planning typically saves more time than it costs and produces a higher-quality response.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'The QDPC method can be applied to any subject. Consider coordinating with other departments to reinforce the same approach.',
    'The "costly misread" starter works well because students intuitively know Student B is better but often cannot explain exactly why.',
    'Time allocation is a skill that needs repeated practice. Consider building it into every timed assessment from this point.',
    'Students often resist planning because it feels like wasted time. The 12-minute timed practice usually convinces them otherwise.',
    'The routine card is simple but effective - students report using it months later. Laminate if possible.',
  ],
  targetedSkills: [
    'Exam technique',
    'Question analysis',
    'Time management',
    'Planning and structuring',
    'Self-monitoring',
  ],
}

// ─── Lesson 9: Managing Exam Anxiety ─────────────────────────────────────────

const lesson9: LessonPlan = {
  id: 'revision-09-exam-anxiety',
  title: 'Managing Exam Anxiety',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the psychological and physiological causes of exam anxiety and recognise it as a normal response.',
    'Learn evidence-based strategies for managing anxiety before and during exams.',
    'Develop a personal anxiety management plan that can be implemented in real exam conditions.',
  ],
  successCriteria: [
    'I can explain why the body produces anxiety symptoms and how this relates to the fight-or-flight response.',
    'I can demonstrate at least two evidence-based techniques for reducing anxiety in the moment.',
    'I can create a personal anxiety management plan for use before and during exams.',
  ],
  keywords: [
    'fight-or-flight response',
    'cognitive reappraisal',
    'box breathing',
    'growth mindset',
    'self-efficacy',
    'catastrophising',
    'grounding',
  ],
  starterActivity: {
    title: 'Anxiety Symptom Mapping',
    duration: '8 minutes',
    instructions:
      'Display an outline of a human body on the board. Ask students to anonymously write on sticky notes the physical symptoms they experience when anxious about exams (racing heart, sweating, sick feeling, shaking hands, blank mind, difficulty breathing, headache, etc.). Place the sticky notes on the corresponding body part on the outline. Discuss: these symptoms are incredibly common - almost everyone experiences some of them. Introduce the fight-or-flight response: the brain perceives the exam as a threat and prepares the body to fight or run. This was useful when facing predators but is unhelpful in an exam hall. The good news: these responses can be managed with specific techniques.',
    differentiation: {
      support: 'Pre-printed symptom cards that students can select rather than writing their own.',
      core: 'Students write their own symptoms and place them, then discuss the fight-or-flight explanation.',
      stretch:
        'Students explain why each physical symptom is a logical result of the fight-or-flight response (e.g., racing heart pumps blood to muscles for running).',
    },
    resources: ['Body outline poster', 'Sticky notes', 'Fight-or-flight explanation slide'],
  },
  mainActivities: [
    {
      title: 'Evidence-Based Anxiety Management Techniques',
      duration: '22 minutes',
      instructions:
        'Teach and practise five evidence-based anxiety management strategies. (1) Box Breathing: Breathe in for 4 counts, hold for 4 counts, breathe out for 4 counts, hold for 4 counts. Repeat four times. Practise together as a class. Explain: this activates the parasympathetic nervous system, directly counteracting the fight-or-flight response. (2) Cognitive Reappraisal: Instead of "I am going to fail," reframe as "I have prepared and I will do my best" or "This feeling is my body getting ready to perform." Students write three anxious thoughts and reframe each one. (3) The 5-4-3-2-1 Grounding Technique: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This anchors the mind in the present rather than spiralling into worst-case scenarios. Practise in the classroom. (4) Expressive Writing: Spend 10 minutes before an exam writing freely about your worries. Research shows this "offloads" anxiety from working memory, freeing up cognitive resources for the exam. (5) Preparation as Prevention: The single most effective anxiety reducer is genuine preparation. When you know you have revised effectively using active strategies, anxiety decreases naturally because self-efficacy increases.',
      differentiation: {
        support: 'Techniques are demonstrated step by step with visual guides students can keep.',
        core: 'Students practise all five techniques and rank them by personal effectiveness.',
        stretch:
          'Students research the scientific evidence behind one technique and present a 30-second summary to the class.',
      },
      resources: [
        'Box breathing guide card',
        'Cognitive reappraisal worksheet',
        '5-4-3-2-1 grounding poster',
        'Lined paper for expressive writing',
        'Timer',
      ],
    },
    {
      title: 'Building Your Personal Anxiety Management Plan',
      duration: '18 minutes',
      instructions:
        'Students create a personal "Exam Anxiety Action Plan" covering three phases. Phase 1 - The Night Before: What will you do to prepare physically and mentally? (e.g., pack your bag, review key flashcards briefly, avoid last-minute cramming, go to bed at a set time, use box breathing before sleep.) Phase 2 - The Morning Of: What is your routine? (e.g., eat breakfast, arrive early, avoid anxious friends who spiral, review your routine card from Lesson 8, do a 5-4-3-2-1 grounding exercise.) Phase 3 - In the Exam: What will you do if anxiety hits during the paper? (e.g., pause, box breathe for one minute, read the question again slowly, start with a question you feel confident about, use your QDPC routine.) Students write their plan on a card they can keep. Pairs share plans and suggest additions to each other.',
      differentiation: {
        support:
          'Template provided with each phase structured and example actions listed for selection.',
        core: 'Students create their plan independently using techniques from the lesson.',
        stretch:
          'Students add a "recovery" phase - what to do between exams on the same day or after a paper that did not go well.',
      },
      resources: ['Anxiety Action Plan card template', 'Techniques summary sheet for reference'],
    },
  ],
  plenaryActivity: {
    title: 'Letter to My Future Self',
    duration: '7 minutes',
    instructions:
      'Students write a brief letter to themselves to be opened on the morning of their first GCSE exam. The letter should include: one reminder of how hard they have worked, one anxiety management technique they will use, and one encouraging statement. Teacher collects the letters and seals them in envelopes, to be distributed before the exam period. This creates a powerful emotional anchor to the strategies learned today.',
    differentiation: {
      support: 'Letter template provided with sentence starters for each section.',
      core: 'Students write freely, including all three required elements.',
      stretch:
        'Students include specific advice based on their personal anxiety triggers and most effective management techniques.',
    },
  },
  homework:
    'Practise box breathing every night this week before bed. Keep a brief log of how you feel before and after each session. Also practise the 5-4-3-2-1 grounding technique once during the school day. Bring your log to the next lesson.',
  worksheetQuestions: [
    {
      question:
        'Explain why exam anxiety causes physical symptoms like a racing heart and sweating.',
      lines: 4,
      modelAnswer:
        'Exam anxiety triggers the fight-or-flight response - a survival mechanism that evolved to protect humans from physical danger. When the brain perceives a threat (in this case, the exam), it releases stress hormones like adrenaline and cortisol. These hormones prepare the body for action: the heart rate increases to pump more blood to the muscles, breathing becomes shallow and rapid to take in more oxygen, sweating increases to cool the body, and digestion slows (causing nausea). While this response was useful for escaping predators, it is unhelpful in an exam because the "threat" requires calm thinking, not physical action.',
      marks: 4,
    },
    {
      question: 'Describe the "box breathing" technique and explain why it reduces anxiety.',
      lines: 4,
      modelAnswer:
        'Box breathing involves breathing in for 4 counts, holding for 4 counts, breathing out for 4 counts, and holding again for 4 counts, repeated in cycles. It reduces anxiety because the slow, controlled breathing activates the parasympathetic nervous system - the body\'s "rest and digest" system that directly counteracts the fight-or-flight response. By deliberately slowing the breath, the body receives a signal that there is no danger, causing the heart rate to slow, muscles to relax, and stress hormones to decrease. It can be done silently and invisibly in an exam hall.',
      marks: 3,
    },
    {
      question:
        'What is "cognitive reappraisal" and how can it help manage exam anxiety? Give an example.',
      lines: 5,
      modelAnswer:
        'Cognitive reappraisal is the technique of deliberately changing the way you interpret a situation in order to change your emotional response to it. Instead of interpreting exam nerves as a sign that something is wrong ("I am so nervous, I am going to fail"), the student reframes the interpretation in a more helpful way ("I feel nervous because this matters to me, and my body is preparing to perform at its best"). For example, a student who thinks "My mind has gone completely blank - I have forgotten everything" can reappraise this as "My mind is temporarily blocked by anxiety - if I breathe and start with what I do know, the rest will follow." This works because anxiety is driven by interpretation, not just by the situation itself.',
      marks: 4,
    },
    {
      question: 'Why is effective preparation the most powerful anxiety management strategy?',
      lines: 4,
      modelAnswer:
        'Effective preparation is the most powerful strategy because it directly addresses the root cause of exam anxiety: uncertainty about whether you know enough. When a student has genuinely revised using active strategies - retrieval practice, past papers, spaced repetition - they develop self-efficacy, which is the belief that they are capable of succeeding. This belief is based on evidence (they have tested themselves and seen results) rather than wishful thinking. While breathing techniques and cognitive reappraisal manage the symptoms of anxiety, thorough preparation reduces the anxiety itself. A student who knows they have put in genuine, effective work has less reason to feel anxious in the first place.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'This is a sensitive lesson. Some students may have clinical anxiety that requires professional support - know your referral routes.',
    'The anonymous sticky note activity allows students to share symptoms without embarrassment. Normalising anxiety is crucial.',
    'Box breathing should be practised genuinely, not rushed. Model it yourself and participate alongside students.',
    'The "letter to my future self" is very powerful. Store these carefully and ensure they are actually distributed before exams.',
    'Avoid minimising anxiety with phrases like "there is nothing to worry about." Validate the feeling and provide practical tools.',
  ],
  targetedSkills: [
    'Emotional regulation',
    'Self-awareness',
    'Stress management',
    'Cognitive reappraisal',
    'Personal planning',
  ],
}

// ─── Lesson 10: The Final Week - Consolidation Strategies ────────────────────

const lesson10: LessonPlan = {
  id: 'revision-10-final-week',
  title: 'The Final Week: Consolidation Strategies',
  text: 'Study Skills and Revision Techniques',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand what effective revision looks like in the final week before exams and what to avoid.',
    'Create a strategic final-week plan that consolidates existing knowledge rather than trying to learn new material.',
    'Develop confidence through structured review activities that demonstrate how much they already know.',
  ],
  successCriteria: [
    'I can explain why the final week should focus on consolidation, not new learning.',
    'I can create a final-week revision plan that balances review, rest, and confidence-building.',
    'I can use a "traffic light" audit to prioritise topics and allocate time efficiently.',
  ],
  keywords: [
    'consolidation',
    'traffic light audit',
    'diminishing returns',
    'confidence building',
    'strategic prioritisation',
    'exam readiness',
  ],
  starterActivity: {
    title: "Final Week Dos and Don'ts",
    duration: '8 minutes',
    instructions:
      'Display ten final-week behaviours and ask students to sort them into "Do" and "Don\'t": (1) Start learning a brand new topic. (2) Review your flashcards. (3) Stay up until 2am revising. (4) Do a brain dump of key topics. (5) Compare your progress with friends. (6) Practise one past paper per subject. (7) Skip meals to create more revision time. (8) Review your weakest topics briefly. (9) Avoid all social activities and exercise. (10) Read through your notes one final time. Reveal answers and discuss: the final week is about consolidation (strengthening what you already know), not desperation (trying to learn everything you missed). Emphasise the law of diminishing returns - the benefit of an extra hour of revision decreases sharply when you are exhausted or stressed.',
    differentiation: {
      support: 'Sorting cards provided with brief explanations of why each is a "Do" or "Don\'t."',
      core: 'Students sort independently and justify each decision to a partner.',
      stretch:
        'Students add three of their own "Dos" and "Don\'ts" with evidence-based justifications.',
    },
    resources: ["Dos and Don'ts sorting activity", 'Answer reveal slide'],
  },
  mainActivities: [
    {
      title: 'The Traffic Light Audit',
      duration: '20 minutes',
      instructions:
        'Students complete a comprehensive topic audit for each of their GCSE subjects. For every topic on the specification, they assign a traffic light colour: Green = I know this well and can recall it confidently. Amber = I know the basics but have gaps or uncertainty. Red = I do not know this well enough and need significant review. Teacher models the process using a sample specification checklist. The key rule: in the final week, spend 60% of time on Amber topics (where improvement is most achievable), 30% on Green topics (quick review to maintain confidence), and only 10% on Red topics (focus on the most essential points, not trying to learn everything). Discuss why this ratio works: Green topics need only light maintenance; Amber topics offer the best return on investment because small effort produces noticeable improvement; Red topics cannot realistically be mastered in a week, so the goal is damage limitation - learn the key facts and move on.',
      differentiation: {
        support:
          'Provide pre-printed specification checklists with topic lists already organised by unit.',
        core: 'Students complete the traffic light audit independently for at least two subjects.',
        stretch:
          'Students calculate the exact number of hours needed for their Amber and Red topics and map this against available time.',
      },
      resources: [
        'Specification checklists for each subject',
        'Traffic light coloured pens or stickers',
        'Time allocation guide',
      ],
    },
    {
      title: 'The Final Week Plan and Confidence Review',
      duration: '20 minutes',
      instructions:
        'Phase 1 (12 minutes): Using their traffic light audit, students create a detailed day-by-day plan for the final week before exams. Each day should include: morning, afternoon, and evening revision slots (no more than 3 hours total per day in the final week); specific subjects and topics with techniques attached; built-in breaks, exercise, and social time; a consistent bedtime (sleep is non-negotiable for memory consolidation); a light review only on the day before each exam, not intensive cramming. Phase 2 (8 minutes): Confidence review. Students complete a "What I Already Know" brain dump - choosing one subject and writing everything they can remember in 5 minutes without any notes. The purpose is to demonstrate how much knowledge they have already built through the course. Students count their points and discuss: you know far more than you think. This is what effective revision over time produces. The final week is about trusting that preparation, not panicking.',
      differentiation: {
        support: 'Final-week plan template provided with time slots and one example day completed.',
        core: 'Students create the full week plan and complete the confidence brain dump independently.',
        stretch:
          'Students create contingency plans for each day: "If I finish early, I will... If I feel overwhelmed, I will..."',
      },
      resources: [
        'Final-week planner template',
        'Blank paper for brain dump',
        'Timer',
        'Exam timetable',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Revision Journey Reflection',
    duration: '7 minutes',
    instructions:
      'Students complete a course reflection, answering three questions: (1) What is the single most important revision technique I have learned from these lessons? (2) What is one revision habit I have genuinely changed as a result of this course? (3) What advice would I give to a Year 9 student about to start their GCSE revision journey? Share selected responses. Teacher closes with a motivational message: effective revision is not about being the smartest person in the room - it is about using the right strategies consistently over time. You now have those strategies.',
    differentiation: {
      support: 'Reflection questions displayed with sentence starters.',
      core: 'Students write full responses to all three questions.',
      stretch:
        'Students write a fourth response: "How will I continue to use these strategies beyond GCSEs?"',
    },
  },
  homework:
    'Complete your traffic light audit for ALL GCSE subjects. Create your final-week revision plan and share it with a parent or carer. Begin implementing the plan according to your exam timetable.',
  worksheetQuestions: [
    {
      question:
        'Why should the final week focus on consolidation rather than trying to learn new material?',
      lines: 5,
      modelAnswer:
        'The final week should focus on consolidation because trying to learn new material at this stage is inefficient and counterproductive. New information requires multiple spaced repetitions over weeks to be securely stored in long-term memory - there is not enough time for this process in the final week. Additionally, attempting to learn new material increases anxiety because it highlights gaps, whereas consolidating known material builds confidence and self-efficacy. The law of diminishing returns applies: the last few days of revision produce the smallest gains if used for new learning, but can be highly effective for strengthening and maintaining existing knowledge through retrieval practice.',
      marks: 4,
    },
    {
      question:
        'Explain the traffic light audit system and the recommended time allocation for each category in the final week.',
      lines: 5,
      modelAnswer:
        "The traffic light audit involves categorising every topic as Green (confident), Amber (basics known but gaps exist), or Red (significant weaknesses). In the final week, the recommended allocation is 60% of time on Amber topics, 30% on Green, and 10% on Red. Amber topics receive the most time because they offer the best return on investment - a small amount of focused revision can move them to Green, directly increasing the student's score. Green topics need light maintenance to keep them fresh. Red topics cannot be fully mastered in one week, so the strategy is damage limitation - learn the most essential facts and key vocabulary to pick up some marks rather than attempting comprehensive coverage.",
      marks: 4,
    },
    {
      question: 'Why is sleep important during the revision period, especially in the final week?',
      lines: 4,
      modelAnswer:
        "Sleep is essential because memory consolidation - the process of transferring information from short-term to long-term memory - primarily occurs during sleep. Research shows that students who sleep well after revision sessions retain significantly more information than those who stay up late cramming. During deep sleep, the brain replays and strengthens the neural connections formed during the day's learning. In the final week, sleep deprivation also impairs concentration, decision-making, and emotional regulation, all of which are crucial for exam performance. Sacrificing sleep for extra revision time is therefore counterproductive: the student may cover more material but will remember and perform worse overall.",
      marks: 3,
    },
    {
      question:
        'A student has three exams in one week. Create a brief plan for how they should structure their final-week revision to cover all three subjects effectively.',
      lines: 6,
      modelAnswer:
        'The student should first complete a traffic light audit for all three subjects and identify the exam order. Revision should be weighted toward earlier exams at the start of the week, shifting focus as each exam passes. For example: Days 1-2 focus primarily on Subject 1 (first exam), with light review of Subjects 2 and 3. After the Subject 1 exam, shift primary focus to Subject 2 while maintaining Subject 3. Each day should include no more than 3 hours of focused revision using Pomodoro blocks, with interleaving between subjects. The evening before each exam should involve only light review - flashcards or a brain dump - not intensive new learning. Every day must include proper meals, exercise or fresh air, and 8 hours of sleep. Between exams, the student should avoid post-mortem discussions with friends about the previous paper, as this increases anxiety without any benefit.',
      marks: 5,
    },
    {
      question:
        'Reflect on the revision techniques you have learned across this course. Which three strategies do you believe will have the greatest impact on your exam results, and why?',
      lines: 8,
      modelAnswer:
        'Three highly impactful strategies are retrieval practice, past paper practice, and the Pomodoro Technique. Retrieval practice (brain dumps, self-quizzing, flashcards) is the most evidence-based learning strategy available - it forces the brain to actively reconstruct knowledge, creating far stronger memories than passive re-reading. Past paper practice is uniquely valuable because it combines retrieval practice with exam familiarisation, builds time management skills, and reveals genuine gaps through mark scheme analysis. The Pomodoro Technique transforms revision sessions from unfocused marathons into structured, sustainable blocks of high-quality work. Together, these three strategies address the most common student weaknesses: passivity, lack of exam familiarity, and poor time management. They are also practical and easy to implement, which means they are more likely to be used consistently.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson works best when delivered 2-3 weeks before the exam period, giving students time to implement their plans.',
    'The confidence brain dump is emotionally powerful - students are often surprised by how much they know. Use this to combat last-minute panic.',
    'The traffic light audit requires access to specification checklists. Prepare these in advance for each subject.',
    'Avoid adding pressure by discussing worst-case scenarios. The tone of this lesson should be calm, practical, and empowering.',
    'Consider distributing the "letters to my future self" from Lesson 9 alongside this lesson\'s final-week plan.',
    'The course reflection is valuable data. Use it to evaluate which lessons had the most impact and refine the course for future cohorts.',
  ],
  targetedSkills: [
    'Strategic planning',
    'Prioritisation',
    'Self-assessment',
    'Metacognition',
    'Confidence building',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const revisionTechniquesLessons: LessonPlan[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
]
