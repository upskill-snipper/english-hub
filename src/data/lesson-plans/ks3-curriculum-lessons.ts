import type { LessonPlan } from '@/types';

export const ks3CurriculumLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 — TERM 1: CHARACTER & THEME (Fox Girl & White Gazelle)
  // Analytical Writing Focus — Lessons 1-5
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 1: Explicit Reading — Fox Girl: Character Introduction ──────────
  {
    id: 'ks3-cur-01-fox-girl-explicit-reading',
    title: 'Fox Girl: Exploring Character Through Explicit Reading',
    text: 'Year 7 Term 1: Character & Theme',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Read aloud with accurate pronunciation and expression, modelling fluent reading (7R.1)',
      'Identify how writers use language to create character impressions (7R.3)',
      'Understand the concept of authorial intent when presenting characters (7R.5)',
      'Begin to select relevant textual evidence to support initial character observations (7W.1)',
    ],
    successCriteria: [
      'I can read aloud with appropriate expression and pronunciation',
      'I can identify at least three details the writer uses to introduce a character',
      'I can explain what the writer wants the reader to think or feel about a character',
      'I can select a quotation and begin to explain its effect',
    ],
    keywords: [
      'characterisation',
      'authorial intent',
      'impression',
      'connotation',
      'description',
      'inference',
      'first person',
      'protagonist',
    ],
    starterActivity: {
      title: 'First Impressions Gallery',
      duration: '8 minutes',
      instructions:
        'Display four images of different characters (illustrated, not photographic) on the board. Students write three adjectives for each image in 90 seconds. Teacher then asks: "What details made you choose those words?" Introduce the term "impression" and explain that writers create character impressions through deliberate choices. Bridge to the lesson focus: today we will read the opening of Fox Girl and explore how the writer creates our first impression of the protagonist.',
      differentiation: {
        support: 'Provide an adjective bank on tables for students who struggle with vocabulary retrieval.',
        core: 'Students generate their own adjectives and justify their choices verbally to a partner.',
        stretch: 'Students consider what is deliberately left ambiguous in each image and why a creator might do that.',
      },
      resources: ['Character images slide (4 images)', 'Adjective bank cards (support tier)'],
    },
    mainActivities: [
      {
        title: 'Teacher-Led Reading: Fox Girl Opening Extract',
        duration: '18 minutes',
        instructions:
          'Teacher reads the opening extract of Fox Girl aloud (approximately 400 words), modelling pronunciation of unfamiliar vocabulary and expressive reading. Pause at three pre-planned points to think aloud: "What impression am I getting of this character?" Students follow on their own copies, underlining words or phrases that stand out. After the full reading, teacher re-reads the first paragraph and models annotating it on the board: circling key words, writing marginal notes about connotation and impression. Students then annotate the second paragraph independently. Cold-call three students to share their annotations.',
        differentiation: {
          support: 'Pre-highlight five key words in the extract for students to focus their annotations on.',
          core: 'Students annotate independently, identifying language choices and their effects.',
          stretch: 'Students annotate with a focus on what is implied but not directly stated — what must we infer about the character?',
        },
        resources: ['Fox Girl opening extract (printed copies)', 'Annotation guide bookmark'],
      },
      {
        title: 'Character Impression Mind Map',
        duration: '15 minutes',
        instructions:
          'Students create a mind map with the protagonist at the centre. Four branches: Appearance, Personality, Situation, Feelings. Students find at least two quotations from the extract for each branch and write them on the mind map with brief annotations explaining what each quotation suggests. Teacher circulates and identifies strong examples to share under the visualiser. In the final five minutes, teacher introduces the key vocabulary word "characterisation" and defines it as the methods a writer uses to reveal what a character is like.',
        differentiation: {
          support: 'Provide a pre-structured mind map template with the four branches and sentence starters for annotations.',
          core: 'Students create their own mind map with at least two quotations per branch.',
          stretch: 'Students add a fifth branch — "Reader Response" — and explain how the writer makes us feel about the character and why.',
        },
        resources: ['A3 mind map paper or template', 'Coloured pens', 'Extract (from previous activity)'],
      },
      {
        title: 'Shared Annotation: Vocabulary Focus',
        duration: '12 minutes',
        instructions:
          'Teacher selects six challenging words from the extract and displays them on the board. For each word: teacher models pronunciation, students repeat chorally, teacher provides a student-friendly definition, and students write the word and definition in their vocabulary log. Students then return to their extract and re-read, checking whether knowing these words changes or deepens their understanding of the character. Cold-call pairs to share any changed impressions.',
        differentiation: {
          support: 'Provide a pre-printed vocabulary sheet with definitions and space for students to write example sentences.',
          core: 'Students write definitions and use each word in a sentence about the character.',
          stretch: 'Students identify the connotations of each word and explain why the writer chose it over a synonym.',
        },
        resources: ['Vocabulary slide (6 words)', 'Vocabulary log / exercise books'],
      },
    ],
    plenaryActivity: {
      title: 'One-Sentence Summary',
      duration: '7 minutes',
      instructions:
        'Students write one sentence summarising the impression the writer creates of the protagonist, using at least one keyword from the lesson. Students share with a partner, then three are selected via lollipop sticks to share with the class. Teacher annotates the strongest example on the board, highlighting effective use of vocabulary and textual reference. Exit ticket: students rate their confidence in identifying characterisation methods (1-5) on a sticky note.',
      differentiation: {
        support: 'Provide a sentence starter: "The writer creates the impression that the protagonist is... because..."',
        core: 'Students write independently using lesson keywords.',
        stretch: 'Students write two sentences — one about what is revealed and one about what is concealed about the character.',
      },
    },
    homework:
      'Re-read the Fox Girl extract at home. Choose three quotations that reveal something about the protagonist and write a sentence for each explaining what it suggests about her character. Use the vocabulary from today\'s lesson.',
    worksheetQuestions: [
      {
        question: 'What does the word "characterisation" mean? Give two methods a writer might use to characterise a person.',
        lines: 4,
        modelAnswer:
          'Characterisation is the way a writer reveals what a character is like. Two methods include: describing their appearance to suggest personality traits, and showing their actions or behaviour to reveal their nature without telling the reader directly.',
        marks: 3,
      },
      {
        question: 'Choose one quotation from the extract that creates a strong impression of the protagonist. Write it out and explain what it suggests.',
        lines: 5,
        modelAnswer:
          'The quotation chosen should be accurately copied from the extract. The explanation should go beyond surface meaning to explore connotation — for example, if the character is described through animal imagery, the student should explain what qualities of that animal are being transferred to the character and what impression this creates for the reader.',
        marks: 4,
      },
      {
        question: 'What is the difference between what a writer tells us directly about a character and what we must infer? Give an example of each from the extract.',
        lines: 5,
        modelAnswer:
          'Direct characterisation is when the writer states something explicitly, such as describing a character as "nervous." Inference is when the reader must work out a character trait from clues, such as a character repeatedly looking over their shoulder, which implies they are anxious or afraid. Examples should be taken from the studied extract.',
        marks: 4,
      },
      {
        question: 'Why do you think the writer chose to open the story with this particular scene? What does it establish for the reader?',
        lines: 4,
        modelAnswer:
          'The opening scene establishes the protagonist\'s situation and creates an initial impression that hooks the reader. It introduces key themes and raises questions that make the reader want to continue. The answer should reference specific details from the extract to support the explanation.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is the first lesson in the sequence — focus on building confidence with the text rather than rushing to analysis. Students need exposure before understanding.',
      'Model pronunciation carefully for any culturally specific names or terms in Fox Girl. Mispronunciation can alienate students from the text.',
      'Use the reading assessment opportunity to note students who struggle with fluency or decoding — this information should inform reading intervention groupings.',
      'The vocabulary focus is essential: explicitly teaching key words before expecting students to analyse is a non-negotiable in this curriculum sequence.',
      'Collect exit tickets to identify students who need additional support in Lesson 2.',
    ],
    targetedSkills: [
      'Reading Fluency',
      'Characterisation Analysis',
      'Vocabulary Acquisition',
      'Textual Evidence Selection',
      'Annotation',
    ],
  },

  // ── Lesson 2: Reading & Discussion — Deepening Character Understanding ─────
  {
    id: 'ks3-cur-02-fox-girl-reading-discussion',
    title: 'Fox Girl & White Gazelle: Deepening Character Through Discussion',
    text: 'Year 7 Term 1: Character & Theme',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Compare how two writers present characters from different cultural backgrounds (7R.4)',
      'Use discussion to deepen understanding of character motivation and theme (7R.6)',
      'Identify thematic connections between two texts (7R.5)',
      'Develop spoken responses using evidence from both texts (7S.1)',
    ],
    successCriteria: [
      'I can explain how each writer presents their protagonist differently',
      'I can identify at least one shared theme between Fox Girl and White Gazelle',
      'I can use evidence from both texts to support my spoken contributions',
      'I can build on another student\'s idea during class discussion',
    ],
    keywords: [
      'comparison',
      'theme',
      'motivation',
      'cultural context',
      'perspective',
      'protagonist',
      'empathy',
      'identity',
    ],
    starterActivity: {
      title: 'Recall and Connect',
      duration: '7 minutes',
      instructions:
        'Display three key quotations from last lesson\'s Fox Girl extract. Students write one sentence explaining what each quotation reveals about the character. Then display the title and cover of White Gazelle. Students predict: "Based on the title and cover, what do you think this text might be about? What kind of character might the protagonist be?" Teacher collects predictions and explains that today we will read an extract from White Gazelle and compare it with Fox Girl.',
      differentiation: {
        support: 'Provide the quotations with sentence starters for the explanation task.',
        core: 'Students recall and explain independently before making predictions.',
        stretch: 'Students predict possible thematic connections between the two texts based on titles alone.',
      },
      resources: ['Quotation recall slide', 'White Gazelle cover image slide'],
    },
    mainActivities: [
      {
        title: 'Shared Reading: White Gazelle Extract',
        duration: '15 minutes',
        instructions:
          'Teacher reads the opening extract of White Gazelle aloud, pausing to clarify vocabulary and cultural context where needed. Students follow along and use dual-coding: they draw quick sketches in the margin to represent what they visualise at key moments. After the reading, teacher asks: "What is your first impression of this protagonist? How does this compare with your first impression of the Fox Girl protagonist?" Students write a short comparison in their books (3-4 sentences). Share three examples.',
        differentiation: {
          support: 'Provide a comparison sentence frame: "The protagonist in Fox Girl seems... whereas the protagonist in White Gazelle seems... because..."',
          core: 'Students write an independent comparison using evidence from both texts.',
          stretch: 'Students consider how the cultural context of each text shapes the way the protagonist is presented.',
        },
        resources: ['White Gazelle opening extract (printed copies)', 'Fox Girl extract from Lesson 1'],
      },
      {
        title: 'Discussion Carousel: Character and Theme',
        duration: '20 minutes',
        instructions:
          'Set up four discussion stations around the room, each with a different question on A3 paper: (1) How do both protagonists deal with challenge or difficulty? (2) What role does identity play in each text? (3) How do the writers make us care about their characters? (4) What themes connect these two texts? Students spend four minutes at each station in groups of four, discussing and writing key ideas on the A3 paper. Each group uses a different colour pen so contributions are trackable. After the carousel, teacher leads a whole-class debrief, drawing out the strongest points from each station.',
        differentiation: {
          support: 'Provide discussion prompt cards at each station with sentence starters and key vocabulary.',
          core: 'Students discuss independently, using evidence from both texts.',
          stretch: 'Students are assigned the role of "challenger" — they must offer an alternative interpretation at each station.',
        },
        resources: ['A3 discussion station papers (x4)', 'Coloured marker pens (one per group)', 'Discussion prompt cards (support tier)'],
      },
      {
        title: 'Written Reflection: What Connects These Characters?',
        duration: '10 minutes',
        instructions:
          'Students return to their seats and write a paragraph answering: "What is one important similarity or difference between the protagonists of Fox Girl and White Gazelle?" Teacher models the opening sentence on the board, demonstrating how to set up a comparison. Students write independently for 8 minutes. Teacher selects two students to read their paragraph aloud and leads brief feedback focused on use of evidence.',
        differentiation: {
          support: 'Provide a writing frame with sentence starters for comparison (similarly, in contrast, both characters).',
          core: 'Students write a full paragraph independently with at least one quotation from each text.',
          stretch: 'Students write two paragraphs — one on similarity and one on difference — linking to theme.',
        },
        resources: ['Exercise books', 'Comparison writing frame (support tier)'],
      },
    ],
    plenaryActivity: {
      title: 'Think-Pair-Share: Big Question',
      duration: '8 minutes',
      instructions:
        'Display the question: "Why do you think your teacher chose to study these two texts together?" Students think silently for one minute, discuss with a partner for two minutes, then share with the class. Teacher draws out the concept of thematic pairing and explains how comparing texts deepens our understanding of each one. Final reflection: students write one thing they now understand better about character or theme because of today\'s discussion.',
      differentiation: {
        support: 'Provide a cloze sentence for the final reflection: "Comparing the two texts helped me understand that..."',
        core: 'Students articulate their reflection independently.',
        stretch: 'Students suggest what other text or type of text could be added to this pairing and why.',
      },
    },
    homework:
      'Write a paragraph comparing how the two protagonists respond to a challenge they face. Use at least one quotation from each text. Focus on what this reveals about their character.',
    worksheetQuestions: [
      {
        question: 'What is meant by a "theme" in a text? Give one example of a theme that appears in both Fox Girl and White Gazelle.',
        lines: 4,
        modelAnswer:
          'A theme is a central idea or message that runs through a text. One theme that appears in both Fox Girl and White Gazelle is identity — both protagonists are navigating who they are in situations that challenge their sense of self.',
        marks: 3,
      },
      {
        question: 'How does the writer of White Gazelle create sympathy for the protagonist in the opening? Use a quotation to support your answer.',
        lines: 5,
        modelAnswer:
          'The writer creates sympathy by showing the protagonist in a vulnerable situation. The quotation should be accurately copied and the explanation should address how the language choices make the reader feel protective of or concerned for the character.',
        marks: 4,
      },
      {
        question: 'Compare how the two writers introduce their protagonists. What is similar and what is different about their approaches?',
        lines: 6,
        modelAnswer:
          'Both writers use first-person narration to create a close connection between the reader and the protagonist. However, the tone differs: Fox Girl has a more reflective, introspective opening while White Gazelle is more immediate and action-driven. The similarity creates empathy in both cases, while the difference reflects the distinct situations each character faces.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The discussion carousel works best with pre-established discussion norms. Spend a moment at the start reminding students of active listening expectations.',
      'Cultural sensitivity is important when discussing White Gazelle — ensure context is provided factually and respectfully. Pre-teach any unfamiliar cultural references.',
      'This lesson builds the comparison skills students will need for their analytical writing in Lessons 3-5. Emphasise the language of comparison throughout.',
      'Monitor discussion stations closely and note which students contribute confidently and which need support — this informs future groupings.',
    ],
    targetedSkills: [
      'Comparative Analysis',
      'Discussion Skills',
      'Thematic Understanding',
      'Evidence Selection',
      'Cultural Awareness',
    ],
  },

  // ── Lesson 3: Writing — Modelling Analytical Writing (Character Analysis) ──
  {
    id: 'ks3-cur-03-character-analytical-writing',
    title: 'Writing About Character: Modelling Analytical Paragraphs',
    text: 'Year 7 Term 1: Character & Theme',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Write an analytical paragraph about character using the PEEL structure (7W.2)',
      'Embed quotations fluently within analytical sentences (7W.3)',
      'Use subject-specific vocabulary accurately in analytical writing (7W.5)',
      'Apply correct spelling, punctuation, and grammar in formal analytical writing (7G.1)',
    ],
    successCriteria: [
      'I can write a PEEL paragraph analysing how a writer presents a character',
      'I can embed a quotation within my own sentence rather than dropping it in',
      'I can use analytical vocabulary such as "suggests", "implies", "connotes"',
      'I can check my writing for accurate punctuation of quotations',
    ],
    keywords: [
      'embed',
      'analytical',
      'connotes',
      'implies',
      'suggests',
      'PEEL',
      'quotation marks',
      'formal register',
    ],
    starterActivity: {
      title: 'Spot the Difference: Dropped vs Embedded Quotations',
      duration: '8 minutes',
      instructions:
        'Display two versions of the same analytical sentence on the board — one with a dropped quotation ("The writer describes the character. \'She was trembling.\' This shows she is scared.") and one with an embedded quotation ("The writer reveals the character\'s fear through the image of her \'trembling\', which suggests vulnerability and anxiety."). Students discuss in pairs: which is more effective and why? Teacher explains the concept of embedding quotations and why it demonstrates higher-level analysis. Students practise converting two more dropped quotations into embedded ones.',
      differentiation: {
        support: 'Provide a sentence frame for embedding: "The writer uses the [technique] \'[quotation]\' to suggest..."',
        core: 'Students convert the dropped quotations independently.',
        stretch: 'Students write their own embedded quotation sentence from scratch using the Fox Girl extract.',
      },
      resources: ['Dropped vs embedded slide', 'Practice sentences handout'],
    },
    mainActivities: [
      {
        title: 'Live Modelling: Writing an Analytical PEEL Paragraph',
        duration: '18 minutes',
        instructions:
          'Teacher displays the question: "How does the writer present the protagonist as resilient in Fox Girl?" Teacher writes a full PEEL paragraph on the board in real time, thinking aloud about every decision: choosing the point, selecting the best quotation, embedding it, choosing analytical verbs (suggests, implies, reveals, connotes), writing the explanation, and crafting the link. Crucially, teacher also models SPAG checking — punctuating the quotation correctly, checking subject-verb agreement, and ensuring formal register throughout. Students copy the model paragraph into their books and annotate each PEEL component in the margin.',
        differentiation: {
          support: 'Students copy the model and annotate with teacher guidance, using a colour-coded system.',
          core: 'Students copy, annotate independently, and note one technique they want to replicate in their own writing.',
          stretch: 'Students evaluate the model: is there anything they would improve? They write an improved version of the explanation sentence.',
        },
        resources: ['Visualiser or interactive whiteboard', 'Fox Girl extract', 'PEEL annotation guide'],
      },
      {
        title: 'Guided Practice: Writing Your Own Analytical Paragraph',
        duration: '22 minutes',
        instructions:
          'Students write their own PEEL paragraph responding to: "How does the writer present the protagonist of White Gazelle as determined?" Teacher provides a step-by-step scaffold on the board: Step 1 — Write your point sentence (2 mins). Step 2 — Choose your quotation and embed it (4 mins). Step 3 — Write your explanation using analytical verbs (6 mins). Step 4 — Write your link sentence (3 mins). Step 5 — SPAG check: quotation marks, capital letters, spelling of keywords (3 mins). During writing, teacher circulates and provides targeted feedback to at least six students. After writing, students swap books with a partner and peer-assess using a checklist: Is there a clear point? Is the quotation embedded? Does the explanation analyse language? Is there a link? Are quotation marks used correctly?',
        differentiation: {
          support: 'Provide a writing frame with sentence starters for each PEEL component and a pre-selected quotation to use.',
          core: 'Students write independently following the stepped scaffold, choosing their own quotation.',
          stretch: 'Students write two PEEL paragraphs and attempt to link them with a connective that shows progression of argument.',
        },
        resources: ['White Gazelle extract', 'PEEL writing frame (support tier)', 'Peer assessment checklist', 'Analytical verbs word mat'],
      },
    ],
    plenaryActivity: {
      title: 'SPAG Focus: Punctuating Quotations Correctly',
      duration: '7 minutes',
      instructions:
        'Display four sentences with quotation punctuation errors on the board. Students identify and correct each error in their books. Teacher reveals the correct versions and explains the rules: quotation marks around the exact words from the text, full stop placement, integration with the student\'s own sentence. Students then check their own paragraph from the main activity and correct any quotation punctuation errors. Three students share one correction they made.',
      differentiation: {
        support: 'Provide a quotation punctuation rules card for reference.',
        core: 'Students correct the errors and apply the rules to their own writing.',
        stretch: 'Students write a brief rule explanation for each correction, suitable for teaching a younger student.',
      },
    },
    homework:
      'Write a PEEL paragraph responding to: "How does the writer of Fox Girl present the protagonist\'s relationship with her family?" Embed at least one quotation and check quotation punctuation before submitting.',
    worksheetQuestions: [
      {
        question: 'What is the difference between a "dropped" quotation and an "embedded" quotation? Write an example of each.',
        lines: 5,
        modelAnswer:
          'A dropped quotation is placed as a standalone sentence, disconnected from the student\'s own writing, such as: "The character is scared. \'She trembled.\' This shows fear." An embedded quotation is woven into the student\'s own sentence: "The character\'s \'trembling\' suggests deep-seated fear and vulnerability." Embedded quotations demonstrate more sophisticated analysis.',
        marks: 3,
      },
      {
        question: 'List four analytical verbs you could use instead of "shows" when explaining the effect of a quotation.',
        lines: 3,
        modelAnswer:
          'Four analytical verbs: suggests, implies, connotes, reveals. Others include: conveys, emphasises, highlights, demonstrates, reinforces, reflects.',
        marks: 4,
      },
      {
        question: 'Correct the quotation punctuation in this sentence: The writer says she was like a shadow creeping through the doorway to show that she is secretive.',
        lines: 3,
        modelAnswer:
          'The writer says she was "like a shadow creeping through the doorway" to show that she is secretive. Alternatively: The writer describes her as "like a shadow creeping through the doorway," suggesting she is secretive and unnoticed.',
        marks: 2,
      },
      {
        question: 'Write a PEEL paragraph analysing how the writer presents the setting in either Fox Girl or White Gazelle. Embed at least one quotation.',
        lines: 8,
        modelAnswer:
          'The paragraph should contain a clear point about the setting, an embedded quotation from the chosen text, an explanation that analyses specific language choices (word-level analysis of connotation), and a link that connects the setting to character or theme. Quotation marks should be used correctly and analytical vocabulary should be evident.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Live modelling is the most powerful part of this lesson — do not rush it. Students need to see the thinking process, not just the product.',
      'Common SPAG errors to watch for: missing quotation marks, quotation marks around paraphrased content, full stops outside quotation marks when they should be inside.',
      'The peer assessment should be brief and focused — students assess one specific skill, not everything. This keeps it manageable and useful.',
      'Collect books after this lesson to assess paragraphs and provide written feedback before the application lesson (Lesson 4).',
      'Display the analytical verbs word mat permanently in the classroom — students should be building this vocabulary across all analytical writing.',
    ],
    targetedSkills: [
      'Analytical Writing',
      'Quotation Embedding',
      'PEEL Structure',
      'SPAG — Quotation Punctuation',
      'Formal Register',
    ],
  },

  // ── Lesson 4: Application — Guided Practice (Reading to Writing) ───────────
  {
    id: 'ks3-cur-04-character-guided-application',
    title: 'Applying Analytical Skills: Character Comparison Paragraphs',
    text: 'Year 7 Term 1: Character & Theme',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Apply PEEL paragraph skills to a comparative character analysis task (7W.2)',
      'Use comparative connectives to structure a comparison paragraph (7W.4)',
      'Transfer reading comprehension into structured analytical writing (7R.5)',
      'Self-assess and improve analytical writing using success criteria (7W.6)',
    ],
    successCriteria: [
      'I can write a comparison paragraph that discusses both texts',
      'I can use comparative connectives such as "similarly", "in contrast", "whereas"',
      'I can embed quotations from both texts within my comparison',
      'I can identify and improve a weakness in my own analytical writing',
    ],
    keywords: [
      'comparison',
      'similarly',
      'in contrast',
      'whereas',
      'both writers',
      'juxtaposition',
      'analytical',
      'self-assessment',
    ],
    starterActivity: {
      title: 'Comparative Connective Sort',
      duration: '7 minutes',
      instructions:
        'Provide students with a list of twelve connectives on a handout. Students sort them into three categories: Similarity (similarly, likewise, both, in the same way), Difference (however, in contrast, whereas, on the other hand), and Development (furthermore, moreover, additionally, as a result). Teacher reveals the correct categories and students glue or write the sorted list in their books. Teacher explains that today students will use these connectives to write comparison paragraphs about character across the two texts.',
      differentiation: {
        support: 'Provide the three category headings and a worked example for each.',
        core: 'Students sort independently and justify their choices.',
        stretch: 'Students write an example sentence using a connective from each category, applied to the two studied texts.',
      },
      resources: ['Connective sort handout', 'Glue sticks'],
    },
    mainActivities: [
      {
        title: 'Deconstructing a Model Comparison Paragraph',
        duration: '12 minutes',
        instructions:
          'Display a model comparison paragraph on the board that compares how both writers present their protagonists as outsiders. Teacher reads it aloud and then guides students through annotation: highlight the point (which addresses both texts), underline evidence from Text A, double-underline evidence from Text B, circle the comparative connective, box the analytical vocabulary. Students note the structure in their books: Point (about both) → Evidence A + Explanation → Comparative Connective → Evidence B + Explanation → Link. Teacher emphasises that the comparison must be integrated, not two separate paragraphs stuck together.',
        differentiation: {
          support: 'Provide a pre-annotated version with two elements already identified; students complete the remaining annotations.',
          core: 'Students annotate independently and note the structural pattern.',
          stretch: 'Students evaluate whether the paragraph gives equal weight to both texts and suggest improvements if not.',
        },
        resources: ['Model comparison paragraph (printed and displayed)', 'Highlighters'],
      },
      {
        title: 'Guided Writing: Comparative Character Paragraph',
        duration: '25 minutes',
        instructions:
          'Students write a comparison paragraph responding to: "Compare how the writers of Fox Girl and White Gazelle present their protagonists as brave." Teacher provides a planning scaffold on the board: Step 1 — Choose one quotation from each text that shows bravery (3 mins). Step 2 — Write your point sentence addressing both texts (3 mins). Step 3 — Analyse your first quotation with embedded evidence (5 mins). Step 4 — Use a comparative connective to transition to the second text (1 min). Step 5 — Analyse your second quotation with embedded evidence (5 mins). Step 6 — Write your link sentence drawing the comparison together (3 mins). Step 7 — SPAG and quality check (3 mins). Teacher circulates throughout, providing live feedback. At the 20-minute mark, pause for a "mid-write check": students re-read their paragraph against the success criteria and identify one area to strengthen before continuing.',
        differentiation: {
          support: 'Provide a structured writing frame with sentence starters for each step and pre-selected quotations.',
          core: 'Students follow the scaffold independently, selecting their own quotations.',
          stretch: 'Students write a second comparison paragraph on a different aspect of character (e.g., vulnerability) and link the two paragraphs together.',
        },
        resources: ['Both extracts', 'Writing scaffold slide', 'Comparison writing frame (support tier)', 'Success criteria checklist'],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Target Setting',
      duration: '8 minutes',
      instructions:
        'Students re-read their comparison paragraph and use the success criteria checklist to traffic-light each criterion. They then write a specific target for improvement at the bottom of their work, using the format: "Next time I will... because..." Teacher cold-calls three students to share their targets. Teacher collects books for marking, explaining that feedback will focus on the comparison element specifically.',
      differentiation: {
        support: 'Provide sentence starters for the target: "Next time I will focus on... because my paragraph currently..."',
        core: 'Students self-assess and set a specific, actionable target.',
        stretch: 'Students rewrite their weakest sentence to demonstrate improvement before submitting.',
      },
    },
    homework:
      'Using the feedback from your self-assessment, rewrite or improve one section of your comparison paragraph. Bring the improved version to the next lesson for comparison with the original.',
    worksheetQuestions: [
      {
        question: 'List three comparative connectives and write a sentence using each one to compare the two protagonists.',
        lines: 6,
        modelAnswer:
          'Similarly, both protagonists face challenges that test their courage. In contrast, while the Fox Girl protagonist responds to difficulty with quiet determination, the White Gazelle protagonist is more openly defiant. Whereas Fox Girl uses internal monologue to show resilience, White Gazelle demonstrates it through action.',
        marks: 3,
      },
      {
        question: 'What is the difference between writing two separate paragraphs about two texts and writing one integrated comparison paragraph?',
        lines: 4,
        modelAnswer:
          'Two separate paragraphs discuss each text in isolation, which does not demonstrate the ability to compare. An integrated comparison paragraph discusses both texts within the same paragraph, using comparative connectives to draw out similarities and differences. This shows a deeper understanding of both texts and how they relate to each other.',
        marks: 3,
      },
      {
        question: 'Write a comparison paragraph about how both writers use setting to reflect their protagonists\' emotions. Use evidence from both texts.',
        lines: 8,
        modelAnswer:
          'The paragraph should contain a clear comparative point, embedded quotations from both texts, analytical vocabulary, at least one comparative connective, and a link that draws the comparison together. The analysis should explore how setting mirrors or contrasts with character emotion in each text.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is the "control" phase of the sequence — students have been exposed to the skill (Lesson 3) and are now applying it with support. Do not remove scaffolds too quickly.',
      'The mid-write check is essential — it prevents students from writing an entire paragraph with a fundamental structural error.',
      'Common issues at this stage: students writing about each text separately instead of integrating the comparison, and students forgetting to analyse the second quotation (just identifying it instead).',
      'Marking priority: focus feedback on the comparison structure rather than SPAG at this point. SPAG was the focus of Lesson 3.',
    ],
    targetedSkills: [
      'Comparative Writing',
      'PEEL Application',
      'Quotation Embedding',
      'Comparative Connectives',
      'Self-Assessment',
    ],
  },

  // ── Lesson 5: Assessment — Independent Character & Theme Essay ─────────────
  {
    id: 'ks3-cur-05-character-theme-assessment',
    title: 'Assessment: Independent Character & Theme Analysis',
    text: 'Year 7 Term 1: Character & Theme',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Independently produce an extended analytical response comparing character and theme (7W.2)',
      'Demonstrate ability to structure a multi-paragraph analytical essay (7W.4)',
      'Apply all skills from the unit: PEEL, embedding, comparative connectives, analytical vocabulary (7W.5)',
      'Write with accuracy in spelling, punctuation, and grammar under timed conditions (7G.2)',
    ],
    successCriteria: [
      'I can write at least two PEEL paragraphs comparing character presentation across both texts',
      'I can embed quotations from both Fox Girl and White Gazelle',
      'I can use comparative connectives and analytical vocabulary throughout',
      'I can maintain formal register and accurate SPAG throughout my response',
    ],
    keywords: [
      'assessment',
      'independence',
      'extended response',
      'essay',
      'comparative',
      'analytical',
      'formal register',
      'proofreading',
    ],
    starterActivity: {
      title: 'Planning Under Timed Conditions',
      duration: '10 minutes',
      instructions:
        'Display the assessment question: "Compare how the writers of Fox Girl and White Gazelle present their protagonists as characters who overcome adversity. You should consider the writers\' use of language and the themes they explore." Students spend 10 minutes planning their response. Teacher displays a planning template on the board: Introduction (brief context), Paragraph 1 focus, Paragraph 2 focus, Paragraph 3 focus (if time), Conclusion. Students should note their chosen quotations in the plan. Teacher reminds students of the skills practised across the unit and refers them to the success criteria displayed on the wall.',
      differentiation: {
        support: 'Provide a printed planning template with guided prompts and a keyword bank.',
        core: 'Students plan independently using the displayed template.',
        stretch: 'Students plan a three-paragraph response with a conceptual introduction that addresses the idea of "adversity" more broadly.',
      },
      resources: ['Assessment question slide', 'Planning template (support tier)', 'Both extracts (clean copies, no annotations)'],
    },
    mainActivities: [
      {
        title: 'Independent Extended Writing',
        duration: '40 minutes',
        instructions:
          'Students write their assessment response independently under timed conditions. Teacher circulates silently, noting general patterns but not providing individual feedback during the assessment. The room should be quiet with assessment conditions maintained. At the 20-minute mark, teacher gives a brief time check: "You should be finishing your first paragraph and starting your second." At the 35-minute mark: "You have five minutes remaining — begin proofreading if you have finished, or write a brief conclusion if you are still writing." Students should aim for two full PEEL comparison paragraphs as a minimum, with a brief introduction and conclusion if time allows.',
        differentiation: {
          support: 'Provide a word mat with analytical vocabulary and comparative connectives. Allow access to the planning template but not to annotated extracts.',
          core: 'Students write independently with access to clean extracts only.',
          stretch: 'Students aim for three comparison paragraphs and a conceptual introduction that engages with the theme of adversity beyond the two texts.',
        },
        resources: ['Clean copies of both extracts', 'Lined paper or exercise books', 'Word mat (support tier)'],
      },
    ],
    plenaryActivity: {
      title: 'Reflection and Self-Evaluation',
      duration: '10 minutes',
      instructions:
        'Students put pens down and complete a brief reflection sheet: (1) Which skill from this unit did you apply most confidently? (2) Which skill do you still find challenging? (3) Rate your effort out of 5. (4) What would you do differently if you had more time? Teacher collects assessment responses and reflection sheets. Brief whole-class discussion: "What have you learned about character and theme across this unit that you did not know before?" Three students share.',
      differentiation: {
        support: 'Provide reflection sentence starters to scaffold the self-evaluation.',
        core: 'Students complete the reflection independently and honestly.',
        stretch: 'Students write a brief paragraph explaining how their analytical writing has improved since Lesson 1 and what specific changes they made.',
      },
    },
    homework:
      'No written homework this week. Students should re-read their assessment plan and reflect on whether their plan helped or hindered their writing. Come to the next lesson ready to discuss what they would change about their planning process.',
    worksheetQuestions: [
      {
        question: 'This assessment question asks you to "compare." What does this mean you must do in your response?',
        lines: 3,
        modelAnswer:
          'To compare means to identify and discuss both similarities and differences between the two texts. The response must address both texts in an integrated way, using comparative connectives, rather than writing about each text separately.',
        marks: 2,
      },
      {
        question: 'What is "adversity"? Give an example of adversity faced by each protagonist.',
        lines: 4,
        modelAnswer:
          'Adversity means difficulty or hardship. Examples should be drawn from the specific texts studied, identifying a challenge each protagonist faces and briefly explaining how they respond to it.',
        marks: 3,
      },
      {
        question: 'Write the opening sentence of a comparison paragraph about how both writers present their protagonists as determined. This sentence should address both texts.',
        lines: 3,
        modelAnswer:
          'Both the writers of Fox Girl and White Gazelle present their protagonists as fundamentally determined characters who refuse to be defined by the adversity they face, though the nature of their determination manifests in markedly different ways.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This is the independence phase — resist the urge to scaffold during the assessment. The whole point is to see what students can do independently.',
      'Mark against the success criteria and provide feedback that is actionable: one strength (What Went Well) and one target (Even Better If) per student.',
      'Use the reflection sheets alongside the assessments to identify students who need additional support before the next unit.',
      'If students finish very early, they may be rushing — encourage proofreading and improvement rather than "finishing."',
      'This assessment data should be used to inform groupings and intervention for the next term\'s unit.',
    ],
    targetedSkills: [
      'Independent Writing',
      'Extended Response',
      'Comparative Analysis',
      'PEEL Under Timed Conditions',
      'Proofreading',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 — TERM 2: FINDING MY VOICE
  // Creative Writing, Identity, Voice — Lessons 6-10
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 6: Explicit Reading — Voice and Identity in Poetry ──────────────
  {
    id: 'ks3-cur-06-voice-identity-reading',
    title: 'Finding My Voice: Exploring Voice and Identity Through Poetry',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Read a selection of identity poems aloud with expression and awareness of voice (7R.1)',
      'Identify how poets use voice and persona to explore themes of identity (7R.3)',
      'Understand the difference between the poet and the speaker/persona (7R.5)',
      'Begin to explore how form and structure contribute to meaning in poetry (7R.2)',
    ],
    successCriteria: [
      'I can read a poem aloud with appropriate expression that reflects the speaker\'s voice',
      'I can identify who the speaker is in a poem and what we learn about them',
      'I can explain the difference between the poet and the speaker',
      'I can identify one structural choice the poet has made and suggest why',
    ],
    keywords: [
      'voice',
      'persona',
      'speaker',
      'identity',
      'tone',
      'form',
      'stanza',
      'first person',
    ],
    starterActivity: {
      title: 'Whose Voice Is This?',
      duration: '8 minutes',
      instructions:
        'Play three short audio clips (30 seconds each) of people speaking — a child, an elderly person, and a public figure. Students write down three things they can tell about each speaker from their voice alone (age, mood, confidence, background). Teacher asks: "How do you learn so much about a person just from their voice?" Introduce the concept that writers create "voices" in their writing too, and today we will explore how poets use voice to express identity.',
      differentiation: {
        support: 'Provide a listening grid with categories (age, mood, confidence) for students to complete during each clip.',
        core: 'Students make independent observations and justify them.',
        stretch: 'Students consider what the speaker might be trying to convey about themselves and whether voice can be performed or constructed.',
      },
      resources: ['Three audio clips (pre-loaded)', 'Listening grid (support tier)'],
    },
    mainActivities: [
      {
        title: 'Shared Reading: Identity Poems',
        duration: '20 minutes',
        instructions:
          'Teacher reads aloud two identity poems (e.g., "Half-Caste" by John Agard and "Search for My Tongue" by Sujata Bhatt — or similar curriculum-appropriate poems about identity and voice). For the first poem, teacher models reading with expression, pausing to annotate: Who is the speaker? What is their tone? What do we learn about their identity? For the second poem, students read in pairs and annotate independently. Teacher then leads a whole-class discussion comparing the two speakers: How are their experiences of identity similar or different? Key vocabulary explicitly taught: voice, persona, speaker, tone.',
        differentiation: {
          support: 'Provide a guided annotation sheet with specific questions for each stanza.',
          core: 'Students annotate independently and contribute to discussion.',
          stretch: 'Students consider how the form of each poem (layout, structure, line breaks) contributes to the expression of voice.',
        },
        resources: ['Two identity poems (printed copies)', 'Annotation guide sheet (support tier)'],
      },
      {
        title: 'Voice Analysis: What Makes a Voice Distinctive?',
        duration: '15 minutes',
        instructions:
          'Students work in groups of three. Each group receives a short extract from a different text — one poem, one prose extract, and one speech transcript — all on the theme of identity. Groups must answer: (1) Who is speaking? (2) What three words would you use to describe their voice? (3) What specific language choices create that voice? Groups present their findings to the class in one minute each. Teacher synthesises: "Voice is created through word choice, sentence structure, tone, and what the speaker chooses to share or hide."',
        differentiation: {
          support: 'Provide a structured analysis sheet with guiding questions for each extract.',
          core: 'Groups analyse independently and present clearly.',
          stretch: 'Groups compare the three voices and explain which feels most authentic and why.',
        },
        resources: ['Three text extracts (one per group)', 'Voice analysis sheet'],
      },
      {
        title: 'Personal Vocabulary Collection',
        duration: '10 minutes',
        instructions:
          'Students create a "Voice Vocabulary Bank" in their books — a dedicated page for this unit. They record six keywords from today\'s lesson with definitions and example sentences. They also write three words or phrases from the poems that struck them as powerful and explain why. This vocabulary bank will be built upon throughout the unit and used in their creative writing.',
        differentiation: {
          support: 'Provide a printed vocabulary bank template with definitions to complete.',
          core: 'Students create their own vocabulary bank with definitions and examples.',
          stretch: 'Students add synonyms and antonyms for each keyword and note how changing the word choice would change the voice.',
        },
        resources: ['Exercise books', 'Vocabulary bank template (support tier)'],
      },
    ],
    plenaryActivity: {
      title: 'Exit Ticket: Voice in One Line',
      duration: '7 minutes',
      instructions:
        'Students write one line of original writing in which they try to create a distinctive voice. The line should reveal something about the speaker without stating it directly. Students share with a partner, who guesses what kind of person is speaking. Three volunteers share with the class. Teacher praises effective use of voice and previews the next lesson: "Next time we will explore how you can develop your own voice in creative writing."',
      differentiation: {
        support: 'Provide a prompt: "Write one line spoken by a character who is [nervous/angry/excited] without using that word."',
        core: 'Students write independently and aim for subtlety.',
        stretch: 'Students write two contrasting lines — the same message delivered in two very different voices.',
      },
    },
    homework:
      'Find a poem, song, or piece of writing that you feel expresses identity strongly. Bring it to the next lesson and be prepared to explain what makes the voice distinctive. Write three sentences about why you chose it.',
    worksheetQuestions: [
      {
        question: 'What is the difference between the "poet" and the "speaker" in a poem?',
        lines: 3,
        modelAnswer:
          'The poet is the real person who wrote the poem. The speaker (or persona) is the character or voice within the poem who is narrating or speaking. They may share the poet\'s views or experiences, but they are not necessarily the same person — the poet may have created a fictional speaker.',
        marks: 3,
      },
      {
        question: 'What is meant by "tone" in a poem? Give two examples of different tones a poet might use.',
        lines: 3,
        modelAnswer:
          'Tone is the attitude or feeling conveyed by the speaker\'s voice. Examples include: angry and confrontational, reflective and nostalgic, celebratory and proud, melancholic and sorrowful.',
        marks: 3,
      },
      {
        question: 'Choose one of the poems studied today. How does the speaker express their identity? Use a quotation to support your answer.',
        lines: 6,
        modelAnswer:
          'The answer should identify the speaker, name a specific aspect of identity explored (culture, language, heritage), provide an accurately quoted piece of evidence, and explain how the language choices convey that aspect of identity. The explanation should move beyond surface meaning to consider connotation and effect on the reader.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson introduces the creative writing unit through reading — students must hear and analyse voices before they can create their own.',
      'Be sensitive to the personal nature of identity poetry. Some students may connect deeply with themes of belonging, difference, or cultural identity.',
      'The vocabulary bank is a running resource — remind students to add to it in every lesson this term.',
      'If using poems about language or bilingualism, celebrate multilingualism in the classroom and invite students to share their own language experiences.',
    ],
    targetedSkills: [
      'Poetry Reading',
      'Voice Analysis',
      'Vocabulary Building',
      'Speaking and Listening',
      'Identity Exploration',
    ],
  },

  // ── Lesson 7: Reading & Discussion — Developing Voice and Perspective ──────
  {
    id: 'ks3-cur-07-voice-perspective-discussion',
    title: 'Finding My Voice: Perspective, Audience, and Purpose',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand how a writer\'s choice of perspective shapes the reader\'s experience (7R.4)',
      'Analyse how writers adapt voice for different audiences and purposes (7R.6)',
      'Discuss the relationship between identity and the way we present ourselves in writing (7S.2)',
      'Develop understanding of first, second, and third person perspectives (7R.2)',
    ],
    successCriteria: [
      'I can identify and explain the effect of first, second, and third person perspectives',
      'I can explain how changing the perspective changes the reader\'s experience',
      'I can discuss how writers adapt their voice depending on audience and purpose',
      'I can articulate my own ideas about identity and voice in a discussion',
    ],
    keywords: [
      'perspective',
      'first person',
      'second person',
      'third person',
      'audience',
      'purpose',
      'adapt',
      'register',
    ],
    starterActivity: {
      title: 'Same Event, Three Perspectives',
      duration: '8 minutes',
      instructions:
        'Display a brief description of an event — a student arriving late to school — written in three perspectives: first person ("I pushed through the doors..."), second person ("You push through the doors..."), and third person ("She pushed through the doors..."). Students read all three and discuss in pairs: How does each version feel different? Which draws you in most? Why? Teacher collects responses and introduces the focus: today we explore how perspective and voice choices shape the reader\'s experience.',
      differentiation: {
        support: 'Provide a response grid with sentence starters for each perspective.',
        core: 'Students discuss and articulate preferences independently.',
        stretch: 'Students consider which perspective creates the most empathy and which creates the most distance, and why a writer might choose each.',
      },
      resources: ['Three perspectives slide'],
    },
    mainActivities: [
      {
        title: 'Analysing Voice Shifts in Mentor Texts',
        duration: '18 minutes',
        instructions:
          'Provide students with three short mentor texts (approximately 100 words each) by published writers — each written in a distinctly different voice (e.g., a confident, assertive voice; a quiet, reflective voice; a humorous, irreverent voice). Students read each text and complete a voice analysis grid: Who is the speaker? What is their tone? What specific word choices create this voice? What perspective is used and why? Teacher leads discussion after each text, drawing out how voice is constructed through deliberate choices. Introduce the concept of "register" — how formal or informal the voice is — and discuss why register matters.',
        differentiation: {
          support: 'Provide the voice analysis grid pre-filled with the first text as a model.',
          core: 'Students complete the grid independently for all three texts.',
          stretch: 'Students rank the three voices from most to least effective for engaging a teenage audience and justify their ranking.',
        },
        resources: ['Three mentor text extracts', 'Voice analysis grid handout'],
      },
      {
        title: 'Discussion: Who Am I When I Write?',
        duration: '18 minutes',
        instructions:
          'Structured discussion activity. Teacher poses the question: "Do we always write in our own voice, or do we create a version of ourselves?" Students first write silently for three minutes (their initial thoughts). Then, in groups of four, students share their ideas using the "Talking Chips" protocol — each student places a chip in the centre when they speak, and cannot speak again until all chips are placed. Teacher circulates, noting insightful contributions. Whole-class debrief: teacher draws out the idea that voice in writing can be authentic, performed, or a mixture. Link to the identity poems from Lesson 6.',
        differentiation: {
          support: 'Provide discussion stems: "I think we write in our own voice because...", "I think we create a character because..."',
          core: 'Students participate in the structured discussion protocol independently.',
          stretch: 'Students consider examples from social media — how do people construct different "voices" or identities online?',
        },
        resources: ['Talking Chips (counters or tokens, 4 per student)', 'Discussion question slide'],
      },
      {
        title: 'Voice Experiment: Rewriting in a Different Voice',
        duration: '10 minutes',
        instructions:
          'Students take one of the three mentor texts from earlier and rewrite the opening two sentences in a completely different voice. For example, rewriting the confident, assertive text in a quiet, uncertain voice. Students share their rewrites with a partner and discuss: what specific changes did you make? How does changing the voice change the meaning? Teacher selects two strong examples to display under the visualiser.',
        differentiation: {
          support: 'Provide a word bank of alternative vocabulary to support the voice shift.',
          core: 'Students rewrite independently with a clear shift in tone and register.',
          stretch: 'Students rewrite the same text twice — in two contrasting voices — and explain the effect of each.',
        },
        resources: ['Mentor texts from earlier activity', 'Exercise books'],
      },
    ],
    plenaryActivity: {
      title: 'Voice Continuum',
      duration: '6 minutes',
      instructions:
        'Draw a line on the board: one end labelled "Authentic Voice" and the other "Performed Voice." Read out five brief writing examples. Students stand on an imaginary line in the room to show where they think each example falls on the continuum. Teacher asks students at different positions to justify their placement. Conclude: in creative writing, we often blend authenticity with performance — and that is the skill we will develop in the next lesson.',
      differentiation: {
        support: 'Students can work in pairs to discuss placement before committing.',
        core: 'Students make independent judgements and articulate reasoning.',
        stretch: 'Students explain why the distinction between authentic and performed voice is not always clear-cut.',
      },
    },
    homework:
      'Write a short paragraph (5-7 sentences) describing your journey to school this morning in two different voices: (1) your natural voice, and (2) a character voice that is very different from your own. Bring both versions to the next lesson.',
    worksheetQuestions: [
      {
        question: 'Explain the difference between first person, second person, and third person perspectives. Give an example sentence for each.',
        lines: 6,
        modelAnswer:
          'First person uses "I/we" and gives direct access to the narrator\'s thoughts, e.g., "I walked into the room and immediately felt uneasy." Second person uses "you" and places the reader inside the experience, e.g., "You walk into the room and immediately feel uneasy." Third person uses "he/she/they" and provides an external viewpoint, e.g., "She walked into the room and immediately felt uneasy."',
        marks: 3,
      },
      {
        question: 'What is "register" in writing? Why might a writer change their register?',
        lines: 4,
        modelAnswer:
          'Register is the level of formality in writing. A writer might use formal register in an essay or speech to convey authority and professionalism, and informal register in a personal blog or dialogue to create a sense of closeness and relatability with the reader. Changing register can also signal a shift in character, mood, or situation.',
        marks: 3,
      },
      {
        question: 'Choose one of the mentor texts from today\'s lesson. What specific word choices or sentence structures help create the voice? Explain how they achieve this effect.',
        lines: 5,
        modelAnswer:
          'The answer should identify specific language features (short sentences for urgency, slang for informality, complex sentences for reflection) and explain how they contribute to the overall voice and tone. The explanation should connect word-level choices to the impression created for the reader.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The Talking Chips protocol is excellent for ensuring all students contribute to discussion — insist on the protocol being followed properly.',
      'This lesson is deliberately discussion-heavy to build the thinking students need before they write creatively in Lesson 8.',
      'The rewriting activity gives students a safe, low-stakes way to experiment with voice before they have to create from scratch.',
      'Social media is a powerful hook for discussing performed identity — but keep the discussion focused on writing voice rather than drifting into a general social media debate.',
    ],
    targetedSkills: [
      'Perspective Analysis',
      'Voice Construction',
      'Discussion Skills',
      'Register Awareness',
      'Creative Experimentation',
    ],
  },

  // ── Lesson 8: Writing — Modelling Creative Writing with Voice ──────────────
  {
    id: 'ks3-cur-08-creative-writing-voice',
    title: 'Finding My Voice: Crafting Creative Writing with Distinctive Voice',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Write a creative piece with a clear and distinctive narrative voice (7W.1)',
      'Apply knowledge of perspective, tone, and register to craft engaging opening paragraphs (7W.3)',
      'Use varied sentence structures to create rhythm and pace in creative writing (7W.5)',
      'Apply accurate spelling and punctuation, with focus on sentence demarcation (7G.1)',
    ],
    successCriteria: [
      'I can write a creative opening with a clear and consistent voice',
      'I can vary my sentence structures to create effect (short for impact, long for description)',
      'I can choose vocabulary that reflects my narrator\'s personality and tone',
      'I can punctuate my sentences accurately, including speech if used',
    ],
    keywords: [
      'narrative voice',
      'sentence variety',
      'short sentence',
      'complex sentence',
      'crafting',
      'deliberate choice',
      'rhythm',
      'pace',
    ],
    starterActivity: {
      title: 'Sentence Surgery',
      duration: '8 minutes',
      instructions:
        'Display a bland, voice-free paragraph on the board: "I went to the shop. It was raining. I bought some bread. I went home." Students rewrite this paragraph in the voice of a specific character (angry teenager, excitable child, world-weary adult — assigned by table). After four minutes, one representative from each table reads their version. Class discusses: what specific changes created the voice? Teacher draws out the key lesson: voice comes from word choice, sentence length, and what details the narrator chooses to include or leave out.',
      differentiation: {
        support: 'Provide a character profile card with three adjectives and suggested vocabulary to use.',
        core: 'Students rewrite independently in the assigned voice.',
        stretch: 'Students rewrite the paragraph twice in two contrasting voices and explain the key differences.',
      },
      resources: ['Bland paragraph slide', 'Character profile cards (support tier)'],
    },
    mainActivities: [
      {
        title: 'Teacher Models: Writing a Creative Opening with Voice',
        duration: '18 minutes',
        instructions:
          'Teacher writes the opening paragraph of a creative piece on the board in real time, narrating every decision. The prompt: "Write the opening of a story about a young person leaving home for the first time." Teacher thinks aloud about: choosing first or third person, selecting a tone (nostalgic? excited? fearful?), opening with a short punchy sentence or a longer reflective one, choosing specific sensory details that reveal character, varying sentence length for rhythm. Teacher explicitly models SPAG: demonstrating correct sentence demarcation, comma usage in complex sentences, and consistent tense. Students copy the model and annotate: circle short sentences, underline sensory details, highlight voice-revealing vocabulary.',
        differentiation: {
          support: 'Students copy and annotate with guided prompts from the teacher.',
          core: 'Students annotate independently and note one technique to use in their own writing.',
          stretch: 'Students suggest improvements to the model paragraph — is there a stronger word choice or a better sentence structure?',
        },
        resources: ['Visualiser or interactive whiteboard'],
      },
      {
        title: 'Creative Writing: My Voice, My Story',
        duration: '25 minutes',
        instructions:
          'Students write the opening two paragraphs of their own creative piece. Prompt: "Write about a moment that changed how you see yourself. You can write about yourself or create a fictional character." Students should apply the techniques from the model: a clear narrative voice, varied sentence structures, sensory details, and accurate SPAG. Teacher provides a writing checklist on the board: (1) Does my opening hook the reader? (2) Is my voice consistent? (3) Have I varied my sentence lengths? (4) Have I included sensory detail? (5) Have I checked my sentence demarcation? Teacher circulates, providing brief verbal feedback focused on voice. At 20 minutes, teacher pauses class for a "read-aloud check" — students read their work silently to themselves, listening for the voice. Does it sound like a real person? Adjust if needed.',
        differentiation: {
          support: 'Provide a writing scaffold with an opening sentence starter and a checklist of techniques to include.',
          core: 'Students write independently, applying the modelled techniques.',
          stretch: 'Students experiment with an unusual structural choice — beginning in medias res, using second person, or starting with dialogue.',
        },
        resources: ['Exercise books or lined paper', 'Writing checklist slide', 'Writing scaffold (support tier)'],
      },
    ],
    plenaryActivity: {
      title: 'Read-Aloud Showcase',
      duration: '7 minutes',
      instructions:
        'Five volunteers read their opening paragraph aloud to the class. After each reading, the class identifies: (1) What voice did you hear? (2) What specific word or sentence created that voice? Teacher praises effective voice choices and identifies one common area for improvement across the class. Students write one personal target for improving their creative voice in their next draft.',
      differentiation: {
        support: 'Students can read to a partner instead of the whole class if they prefer.',
        core: 'Students read aloud and receive feedback from peers.',
        stretch: 'Students offer specific, constructive feedback using the language of the lesson (voice, tone, register, sentence variety).',
      },
    },
    homework:
      'Continue your creative writing piece — write a third and fourth paragraph. Focus on maintaining a consistent voice throughout and varying your sentence structures. Underline three sentences where you have deliberately chosen a short sentence for impact or a long sentence for description.',
    worksheetQuestions: [
      {
        question: 'Why is sentence variety important in creative writing? Give an example of when a short sentence might be effective and when a long sentence might be effective.',
        lines: 5,
        modelAnswer:
          'Sentence variety creates rhythm and prevents monotony. A short sentence might be used for impact, shock, or emphasis — for example, "She stopped." after a long descriptive passage creates a sudden halt that mirrors the character\'s surprise. A long, complex sentence might be used for flowing description or to convey a character\'s racing thoughts.',
        marks: 3,
      },
      {
        question: 'What is a "narrative voice"? How is it different from your normal speaking voice?',
        lines: 4,
        modelAnswer:
          'A narrative voice is the personality and style of the narrator in a piece of writing. It includes their tone, vocabulary, perspective, and the details they choose to share. It differs from a speaking voice because it is deliberately crafted — the writer makes conscious choices about every word, whereas speech is often spontaneous.',
        marks: 3,
      },
      {
        question: 'Rewrite the following sentence to give it a stronger voice: "I walked down the street and it was cold." Write two versions: one in an anxious voice and one in a defiant voice.',
        lines: 5,
        modelAnswer:
          'Anxious voice: "I crept along the pavement, the cold biting at my fingers as every shadow seemed to shift and stretch towards me." Defiant voice: "I stormed down the street. The cold hit me full force — and I didn\'t care. Let it try." The key is that each version uses different vocabulary, sentence structures, and details to convey a distinct emotional state.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The live modelling is the centrepiece of this lesson — students cannot write with voice until they see the decision-making process behind it.',
      'Encourage students to write about genuine experiences if they feel comfortable, but always offer the fictional option. Never pressure personal disclosure.',
      'The "read-aloud check" is a powerful self-editing technique — train students to use it regularly. If it does not sound like a voice, it needs revision.',
      'Common issue: students write in a very flat, report-like style. Counter this by emphasising that creative writing should sound like a person, not a textbook.',
    ],
    targetedSkills: [
      'Creative Writing',
      'Voice Construction',
      'Sentence Variety',
      'SPAG — Sentence Demarcation',
      'Self-Editing',
    ],
  },

  // ── Lesson 9: Application — Guided Creative Writing Practice ───────────────
  {
    id: 'ks3-cur-09-creative-writing-application',
    title: 'Finding My Voice: Developing and Refining Creative Writing',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Develop a sustained piece of creative writing with a consistent narrative voice (7W.1)',
      'Edit and improve drafts using peer and self-assessment feedback (7W.6)',
      'Apply descriptive techniques including sensory language and figurative language (7W.3)',
      'Demonstrate accurate paragraphing, including single-sentence paragraphs for effect (7G.2)',
    ],
    successCriteria: [
      'I can sustain a consistent voice across multiple paragraphs',
      'I can use sensory language (sight, sound, touch, taste, smell) to enhance description',
      'I can identify and improve weaknesses in my draft through editing',
      'I can paragraph accurately, including using short paragraphs for effect',
    ],
    keywords: [
      'draft',
      'edit',
      'sensory language',
      'figurative language',
      'simile',
      'metaphor',
      'paragraphing',
      'sustained',
    ],
    starterActivity: {
      title: 'Sensory Snapshot',
      duration: '7 minutes',
      instructions:
        'Display an evocative image on the board (a busy market, a stormy sea, a quiet forest). Students have four minutes to write a descriptive paragraph using all five senses. Teacher models the first sentence, then students write independently. After writing, teacher cold-calls students to share their most effective sensory detail. Introduce the focus: today we will develop our creative writing from last lesson, adding sensory detail and figurative language.',
      differentiation: {
        support: 'Provide a five senses grid to structure the sensory details before writing the paragraph.',
        core: 'Students write a flowing paragraph integrating all five senses.',
        stretch: 'Students include a simile or metaphor in their sensory writing.',
      },
      resources: ['Evocative image slide', 'Five senses grid (support tier)'],
    },
    mainActivities: [
      {
        title: 'Peer Review: Voice and Technique Check',
        duration: '15 minutes',
        instructions:
          'Students swap their creative writing drafts from Lessons 8-9 homework with a partner. Using a structured peer review sheet, partners read the draft and provide feedback on: (1) Voice — is there a clear and consistent voice? Can you describe it in three words? (2) Sensory detail — are there moments where you can see, hear, or feel what the narrator describes? (3) Sentence variety — are there both short and long sentences? (4) SPAG — underline any errors you notice. Partners discuss their feedback for three minutes, then return the drafts. Students highlight one piece of feedback they will act on.',
        differentiation: {
          support: 'Provide a simplified peer review sheet with tick-box criteria and space for one comment per area.',
          core: 'Students use the full peer review sheet and provide specific, constructive comments.',
          stretch: 'Students provide one "model sentence" — rewriting one of their partner\'s sentences to demonstrate how it could be improved.',
        },
        resources: ['Peer review sheets', 'Students\' draft writing from Lessons 8-9'],
      },
      {
        title: 'Guided Editing and Development',
        duration: '25 minutes',
        instructions:
          'Students revise and extend their creative writing using the peer feedback. Teacher provides three focused mini-tasks displayed on the board: (1) Add one simile or metaphor to enhance a descriptive moment (5 mins). (2) Find your longest paragraph and check — should it be split? Add a paragraph break or a single-sentence paragraph for effect (5 mins). (3) Read your opening sentence aloud — does it hook the reader? Rewrite it if not (5 mins). Remaining 10 minutes: students continue writing, aiming for a complete piece of 300-500 words. Teacher circulates, providing targeted one-to-one feedback to at least eight students.',
        differentiation: {
          support: 'Provide a figurative language examples card and a paragraphing rules reminder.',
          core: 'Students complete all three mini-tasks and extend their writing independently.',
          stretch: 'Students add a structural twist — a shift in time, a change in perspective, or a circular ending that echoes the opening.',
        },
        resources: ['Students\' drafts', 'Figurative language examples card (support tier)', 'Paragraphing rules reminder'],
      },
      {
        title: 'Polishing: Final SPAG Check',
        duration: '8 minutes',
        instructions:
          'Students complete a final SPAG check of their writing using a proofreading checklist: capital letters, full stops, comma splices, tense consistency, spelling of key vocabulary, paragraphing. Teacher reads aloud three common errors found during circulation and explains the correction on the board. Students make final corrections in a different coloured pen so improvements are visible.',
        differentiation: {
          support: 'Provide a focused checklist of the three most common errors only.',
          core: 'Students use the full proofreading checklist.',
          stretch: 'Students also check for ambitious vocabulary and upgrade one "ordinary" word to a more precise or evocative alternative.',
        },
        resources: ['Proofreading checklist', 'Coloured pens (different from writing pen)'],
      },
    ],
    plenaryActivity: {
      title: 'Before and After',
      duration: '5 minutes',
      instructions:
        'Three students share their original opening sentence and their revised opening sentence. Class votes on which is more effective and explains why. Teacher summarises: "Good writing is rewriting. The editing process is where your voice becomes stronger." Students write one sentence reflecting on how their writing improved through the editing process today.',
      differentiation: {
        support: 'Students share with a partner rather than the class.',
        core: 'Students share and explain what they changed and why.',
        stretch: 'Students explain the specific technique that made the biggest difference to their writing.',
      },
    },
    homework:
      'Complete a final draft of your creative writing piece (300-500 words). This should be your best work — fully edited, proofread, and polished. Write a brief reflection (3-4 sentences) explaining what you are most proud of in your writing and what you found most challenging.',
    worksheetQuestions: [
      {
        question: 'What is the difference between a simile and a metaphor? Write one of each describing a stormy sky.',
        lines: 4,
        modelAnswer:
          'A simile compares two things using "like" or "as": "The sky was like a bruise, dark and swollen with unspent fury." A metaphor states that something is something else: "The sky was a battlefield, clouds clashing in violent streaks of grey."',
        marks: 3,
      },
      {
        question: 'Why might a writer use a single-sentence paragraph? Give an example.',
        lines: 3,
        modelAnswer:
          'A single-sentence paragraph creates dramatic emphasis. It forces the reader to pause and gives the sentence more weight. Example: after a long descriptive paragraph about running, the writer might use "I stopped." as its own paragraph to convey the sudden halt with maximum impact.',
        marks: 3,
      },
      {
        question: 'Read your creative writing draft. Identify one sentence you are proud of and explain why it is effective. Then identify one sentence that needs improvement and rewrite it.',
        lines: 6,
        modelAnswer:
          'The strong sentence should demonstrate deliberate craft — voice, imagery, sentence structure, or word choice. The improvement should address a specific weakness (flat vocabulary, unclear meaning, grammatical error) and the rewrite should clearly demonstrate the improvement.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The peer review must be structured — without a clear focus, peer feedback often becomes vague ("it was good"). The review sheet keeps it specific and useful.',
      'The mini-tasks prevent the editing session from becoming aimless. Students need targeted activities to make meaningful improvements.',
      'Collect final drafts for assessment after this lesson or after the homework deadline. Mark for voice, technique, and SPAG.',
      'Celebrate improvement rather than just attainment — students who have significantly improved their draft should be recognised.',
    ],
    targetedSkills: [
      'Editing and Drafting',
      'Figurative Language',
      'Paragraphing',
      'Peer Assessment',
      'SPAG Accuracy',
    ],
  },

  // ── Lesson 10: Assessment — Independent Creative Writing ───────────────────
  {
    id: 'ks3-cur-10-creative-writing-assessment',
    title: 'Assessment: Independent Creative Writing — Finding My Voice',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Independently produce a sustained piece of creative writing with a distinctive voice (7W.1)',
      'Apply all skills from the unit: voice, perspective, sentence variety, sensory and figurative language (7W.3)',
      'Structure writing effectively with deliberate paragraphing choices (7W.4)',
      'Write with accuracy in spelling, punctuation, and grammar under timed conditions (7G.2)',
    ],
    successCriteria: [
      'I can write a creative piece of at least 300 words with a distinctive and sustained voice',
      'I can use a range of descriptive techniques including sensory and figurative language',
      'I can vary my sentence structures and paragraph lengths deliberately for effect',
      'I can maintain accurate SPAG throughout my writing',
    ],
    keywords: [
      'assessment',
      'independence',
      'voice',
      'sustained',
      'creative',
      'technique',
      'proofreading',
      'crafting',
    ],
    starterActivity: {
      title: 'Choosing and Planning',
      duration: '10 minutes',
      instructions:
        'Display two assessment prompts on the board: (1) "Write about a time when you had to be brave. You can write about yourself or create a fictional character." (2) "Write the opening of a story called \'The Voice.\'" Students choose one prompt and spend 10 minutes planning. Teacher displays a planning prompt: Think about — Who is your narrator? What is their voice like? What is the mood/tone? What key moments will you include? Students jot down a brief plan and three vocabulary choices they want to include.',
      differentiation: {
        support: 'Provide a printed planning template with guided prompts and a vocabulary bank of descriptive words.',
        core: 'Students plan independently using the displayed prompts.',
        stretch: 'Students plan a piece with a deliberate structural feature (non-linear timeline, shifting perspective, or circular structure).',
      },
      resources: ['Assessment prompts slide', 'Planning template (support tier)', 'Vocabulary bank (support tier)'],
    },
    mainActivities: [
      {
        title: 'Independent Creative Writing Assessment',
        duration: '40 minutes',
        instructions:
          'Students write their creative piece independently under timed conditions. Assessment conditions: quiet room, no talking, no access to previous work or notes (vocabulary bank allowed for support tier only). Teacher circulates silently, noting effort and engagement but not providing content feedback. Time checks at 15 minutes ("You should have your opening paragraph complete"), 25 minutes ("You should be developing your middle section"), and 35 minutes ("Begin wrapping up or proofreading"). Minimum expectation: 300 words. Students who finish early should proofread and polish rather than adding unnecessary content.',
        differentiation: {
          support: 'Allow access to a vocabulary bank and a techniques reminder card. Minimum 200 words.',
          core: 'Students write independently. Minimum 300 words.',
          stretch: 'Students aim for 400+ words with a sophisticated structural choice and at least three different descriptive techniques.',
        },
        resources: ['Lined paper or exercise books', 'Vocabulary bank and techniques card (support tier only)'],
      },
    ],
    plenaryActivity: {
      title: 'Unit Reflection',
      duration: '10 minutes',
      instructions:
        'Students complete a unit reflection sheet: (1) What was the most important thing you learned about voice and identity in this unit? (2) What is one skill you improved? (3) What is one skill you want to continue developing? (4) How has reading other writers\' voices helped your own writing? Teacher collects assessments and reflection sheets. Brief class discussion: three students share their reflections. Teacher previews the next unit.',
      differentiation: {
        support: 'Provide reflection sentence starters.',
        core: 'Students reflect independently and honestly.',
        stretch: 'Students write a brief paragraph explaining how their understanding of "voice" has changed since the start of the unit.',
      },
    },
    homework:
      'No written homework. Reflect on the unit and bring one question or observation about creative writing voice to the start of next term.',
    worksheetQuestions: [
      {
        question: 'Before you begin writing, outline your plan: Who is your narrator? What tone will you use? What is your opening line?',
        lines: 5,
        modelAnswer:
          'The plan should identify a clear narrator with a describable voice (e.g., "a quiet, observant teenager" or "a confident, slightly sarcastic narrator"), a specific tone (reflective, tense, humorous), and an opening line that hooks the reader and establishes the voice.',
        marks: 2,
      },
      {
        question: 'After writing, list three techniques you used in your piece and give one example of each from your writing.',
        lines: 6,
        modelAnswer:
          'Three techniques might include: simile ("the rain fell like needles"), short sentence for impact ("I ran."), sensory detail ("the sharp tang of salt air stung my nostrils"), varied sentence openings, or deliberate paragraphing. Each should have a specific example quoted from the student\'s own work.',
        marks: 3,
      },
      {
        question: 'What was the most challenging part of writing with a distinctive voice? What would you do differently next time?',
        lines: 4,
        modelAnswer:
          'The response should demonstrate genuine reflection on the writing process. Common challenges include maintaining consistency, choosing the right vocabulary, and avoiding slipping into a flat or generic tone. The improvement should be specific and actionable.',
        marks: 2,
      },
    ],
    teacherNotes: [
      'This assessment tests independence — do not scaffold during the writing time. The support tier vocabulary bank is the only permitted resource.',
      'Mark using a rubric that weighs voice and technique above quantity. A 250-word piece with stunning voice is better than a 500-word piece with no discernible voice.',
      'Use the reflection sheets to track student self-awareness — students who can identify their strengths and weaknesses are developing metacognitive skills.',
      'This assessment data feeds into reporting and should also inform planning for Term 3.',
    ],
    targetedSkills: [
      'Independent Creative Writing',
      'Voice and Tone',
      'Descriptive Techniques',
      'Structural Choices',
      'Proofreading Under Pressure',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 7 — TERM 3: SHAPING MEANING
  // Stories and Poetry Analysis — Lessons 11-15
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 11: Explicit Reading — How Writers Shape Meaning ────────────────
  {
    id: 'ks3-cur-11-shaping-meaning-reading',
    title: 'Shaping Meaning: How Writers Use Language and Structure',
    text: 'Year 7 Term 3: Shaping Meaning',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Read a short story extract with focus on how the writer shapes the reader\'s response (7R.1)',
      'Identify how writers use structural features to create meaning and effect (7R.2)',
      'Analyse how language choices create specific effects on the reader (7R.3)',
      'Develop vocabulary for discussing structural techniques (7R.4)',
    ],
    successCriteria: [
      'I can identify at least two structural features in a short story extract',
      'I can explain how a writer\'s language choices create a specific effect',
      'I can use terminology such as "exposition", "climax", and "shift" accurately',
      'I can begin to explain how structure and language work together to shape meaning',
    ],
    keywords: [
      'structure',
      'exposition',
      'climax',
      'shift',
      'tension',
      'resolution',
      'narrative arc',
      'foreshadowing',
    ],
    starterActivity: {
      title: 'Story Shape',
      duration: '8 minutes',
      instructions:
        'Display Freytag\'s Pyramid on the board (exposition, rising action, climax, falling action, resolution). Tell students a well-known fairy tale in two minutes and ask them to map it onto the pyramid. Then ask: "What if the writer changed the structure — started at the climax, or removed the resolution?" Students discuss in pairs how this would change the reader\'s experience. Introduce the focus: writers make deliberate structural choices to shape how we experience a story.',
      differentiation: {
        support: 'Provide the fairy tale stages pre-listed and students match to the pyramid.',
        core: 'Students map the fairy tale independently and discuss structural changes.',
        stretch: 'Students suggest a text or film that does not follow the traditional pyramid and explain its alternative structure.',
      },
      resources: ['Freytag\'s Pyramid slide'],
    },
    mainActivities: [
      {
        title: 'Shared Reading and Structural Analysis',
        duration: '20 minutes',
        instructions:
          'Teacher reads a short story extract aloud (approximately 500 words — a story with a clear structural shift, e.g., a moment of realisation or a twist). Students follow on printed copies. After reading, teacher divides the extract into three sections on the board and labels them: Beginning (exposition/set-up), Middle (shift/development), End (climax/impact). For each section, teacher models identifying one structural feature and one language feature, explaining how they work together. Students then annotate their own copies, identifying one additional feature in each section. Share and discuss.',
        differentiation: {
          support: 'Provide a structural features word bank and pre-divided sections on the extract.',
          core: 'Students annotate independently using the teacher\'s model as a guide.',
          stretch: 'Students analyse how the shift between sections is created — what specific moment marks the change and how does the writer signal it?',
        },
        resources: ['Short story extract (printed copies)', 'Structural features word bank'],
      },
      {
        title: 'Language and Structure Working Together',
        duration: '15 minutes',
        instructions:
          'Focus on the most powerful moment in the extract (the shift or climax). Teacher highlights three specific language choices in this moment and models explaining how they create effect. Students then work in pairs to find two more language choices in the same section and write a sentence explaining each one\'s effect. Pairs share their best example with another pair, creating groups of four. Each group selects their strongest analysis to share with the class.',
        differentiation: {
          support: 'Provide sentence starters for explaining effect: "This creates the effect of... because..."',
          core: 'Students identify and explain independently.',
          stretch: 'Students explain how the language choices at this moment differ from the language used earlier in the extract and why the writer made this shift.',
        },
        resources: ['Extract (annotated from previous activity)', 'Sentence starters card (support tier)'],
      },
      {
        title: 'Vocabulary Building: Structure Terminology',
        duration: '10 minutes',
        instructions:
          'Teacher explicitly teaches six structural terms: exposition, foreshadowing, shift/volta, climax, resolution, cyclical structure. For each term: definition, example from a well-known text, and an example from today\'s extract where possible. Students record these in their vocabulary log with definitions and examples. Quick-fire quiz: teacher describes a structural feature and students hold up the correct term written on a mini-whiteboard.',
        differentiation: {
          support: 'Provide a printed terminology sheet with definitions and examples.',
          core: 'Students write definitions and examples from memory after the teaching.',
          stretch: 'Students create their own quiz questions for a partner using the new terminology.',
        },
        resources: ['Terminology slides', 'Mini-whiteboards and pens', 'Vocabulary logs'],
      },
    ],
    plenaryActivity: {
      title: 'One Thing I Noticed',
      duration: '7 minutes',
      instructions:
        'Students write one sentence about the most interesting structural or language choice they noticed in today\'s extract and explain its effect. Share in a quick whole-class whip-round (one sentence per student, no repeats). Teacher captures the key points on the board as a class summary. Exit question: "Why do you think studying structure is important, not just language?"',
      differentiation: {
        support: 'Provide a sentence frame: "I noticed that the writer used [feature] in the [section] which created the effect of..."',
        core: 'Students write independently.',
        stretch: 'Students answer the exit question in writing, connecting structure analysis to deeper understanding of meaning.',
      },
    },
    homework:
      'Read a short story, article, or chapter from a novel at home. Identify the structural "shape" of the text: where does it begin, where does it shift, and how does it end? Write a short paragraph describing the structure using at least two terms from today\'s lesson.',
    worksheetQuestions: [
      {
        question: 'Define the following terms: exposition, climax, foreshadowing.',
        lines: 5,
        modelAnswer:
          'Exposition is the opening section of a narrative where the setting, characters, and situation are established. Climax is the moment of highest tension or the turning point in a story. Foreshadowing is when a writer includes hints or clues earlier in the text that suggest what will happen later.',
        marks: 3,
      },
      {
        question: 'Why do writers make structural choices? Give one example of how a structural choice can affect the reader\'s experience.',
        lines: 4,
        modelAnswer:
          'Writers make structural choices to control how the reader experiences the story — what they learn and when they learn it. For example, starting a story at the climax (in medias res) immediately creates tension and hooks the reader, whereas starting with exposition builds gradually and allows the reader to become invested in the characters first.',
        marks: 3,
      },
      {
        question: 'Choose one moment from today\'s extract where language and structure work together to create effect. Analyse how they work together using evidence.',
        lines: 6,
        modelAnswer:
          'The answer should identify a specific moment, provide evidence (quotation), and explain how both a language feature and a structural feature contribute to the effect at that point. For example, the use of short sentences (structural) combined with harsh, monosyllabic vocabulary (language) at the climax creates a sense of finality and shock.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Structure is often the neglected partner to language analysis — this lesson gives it equal weight and shows how the two interact.',
      'Choose a short story extract with a very clear structural shift so students can identify it easily. Ambiguous structures can come later.',
      'The vocabulary building section is essential — students cannot discuss structure without the terminology.',
      'This lesson lays the foundation for the poetry analysis in Lessons 12-13, where structural analysis becomes even more important.',
    ],
    targetedSkills: [
      'Structural Analysis',
      'Language Analysis',
      'Terminology Acquisition',
      'Close Reading',
      'Annotation',
    ],
  },

  // ── Lesson 12: Reading & Discussion — Poetry: Language and Structure ────────
  {
    id: 'ks3-cur-12-poetry-language-structure',
    title: 'Shaping Meaning: Analysing Language and Structure in Poetry',
    text: 'Year 7 Term 3: Shaping Meaning',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Analyse how poets use language and structure to shape meaning in poetry (7R.3)',
      'Identify and discuss the effect of poetic techniques including imagery and sound (7R.4)',
      'Explore how form contributes to the meaning of a poem (7R.2)',
      'Develop spoken analysis using tentative language and alternative interpretations (7S.1)',
    ],
    successCriteria: [
      'I can identify at least three language or structural techniques in a poem',
      'I can explain the effect of each technique on the reader',
      'I can discuss alternative interpretations of a poem\'s meaning',
      'I can use tentative language such as "perhaps", "this could suggest", "alternatively"',
    ],
    keywords: [
      'imagery',
      'enjambment',
      'caesura',
      'volta',
      'sibilance',
      'assonance',
      'interpretation',
      'tentative',
    ],
    starterActivity: {
      title: 'Sound and Sense',
      duration: '7 minutes',
      instructions:
        'Display two short lines of poetry — one with harsh, plosive sounds and one with soft, sibilant sounds. Read both aloud. Students discuss: how does the sound of each line match its meaning? Teacher introduces the concept that poets choose words for their sound as well as their meaning. Key terms explicitly taught: sibilance, plosive, assonance. Students practise identifying these in three further examples.',
      differentiation: {
        support: 'Provide a sound techniques guide with definitions and examples.',
        core: 'Students identify techniques independently in the practice examples.',
        stretch: 'Students explain why poets might choose specific sounds — what is the relationship between sound and meaning?',
      },
      resources: ['Poetry sound examples slide', 'Sound techniques guide (support tier)'],
    },
    mainActivities: [
      {
        title: 'Close Reading: Poem Analysis',
        duration: '20 minutes',
        instructions:
          'Teacher distributes a poem that uses both language and structural techniques effectively (e.g., a poem about nature, conflict, or memory with clear imagery and structural features). Teacher reads the poem aloud twice — first for meaning, second for analysis. After the first reading, students write a one-sentence summary of what the poem is about. After the second reading, teacher models annotating the first stanza: identifying imagery, sound techniques, enjambment or caesura, and explaining their effects. Students then annotate the remaining stanzas in pairs, using the teacher\'s model as a guide. Teacher circulates and supports.',
        differentiation: {
          support: 'Provide a guided annotation sheet with specific prompts for each stanza.',
          core: 'Students annotate independently in pairs using the modelled approach.',
          stretch: 'Students identify the volta (turn or shift) in the poem and explain how the poem\'s meaning changes at that point.',
        },
        resources: ['Poem (printed copies, double-spaced for annotation)', 'Guided annotation sheet (support tier)'],
      },
      {
        title: 'Discussion: Multiple Interpretations',
        duration: '15 minutes',
        instructions:
          'Teacher poses the question: "What is this poem really about?" and provides two contrasting interpretations. For example: "Is this poem about nature, or is it using nature as a metaphor for something else?" Students discuss in groups of three, using tentative language (perhaps, it could be argued, an alternative reading is). Each group must prepare one argument for each interpretation, supported by evidence from the poem. Groups share their strongest arguments. Teacher draws out the key lesson: good analysis considers multiple interpretations, and the best analysts explain why evidence supports one reading over another.',
        differentiation: {
          support: 'Provide the two interpretations written out with key evidence highlighted.',
          core: 'Students develop arguments for both interpretations independently.',
          stretch: 'Students propose a third interpretation of their own and defend it with evidence.',
        },
        resources: ['Discussion question slide', 'Tentative language word mat'],
      },
      {
        title: 'Written Analysis: Explaining Effect',
        duration: '10 minutes',
        instructions:
          'Students write one analytical paragraph about a technique in the poem, explaining its effect on the reader. Teacher provides the structure on the board: Identify the technique → Quote the evidence → Explain the effect → Consider an alternative interpretation. Students write independently for 8 minutes, then swap with a partner who checks: is there an embedded quotation? Is the explanation specific, not vague? Does it consider an alternative reading?',
        differentiation: {
          support: 'Provide a writing frame with sentence starters for each step.',
          core: 'Students write independently using the displayed structure.',
          stretch: 'Students include two interpretations within their paragraph, using "however" or "alternatively" to introduce the second.',
        },
        resources: ['Exercise books', 'Writing frame (support tier)'],
      },
    ],
    plenaryActivity: {
      title: 'Technique Bingo',
      duration: '8 minutes',
      instructions:
        'Students create a 3x3 bingo grid and fill it with nine techniques from the lesson (imagery, enjambment, caesura, volta, sibilance, assonance, simile, metaphor, personification). Teacher reads out definitions — students cross off the matching technique. First to complete a line wins. Teacher then asks the winner to give an example of each technique in their line from today\'s poem.',
      differentiation: {
        support: 'Provide the list of nine techniques to choose from.',
        core: 'Students recall and write the nine techniques from memory.',
        stretch: 'Students must provide an example from the poem as well as crossing off the technique.',
      },
    },
    homework:
      'Read the poem again at home. Choose one technique you did not analyse in class and write a PEEL paragraph explaining its effect. Use tentative language to consider more than one interpretation.',
    worksheetQuestions: [
      {
        question: 'Define enjambment and caesura. Explain the effect each might have on the reader.',
        lines: 5,
        modelAnswer:
          'Enjambment is when a sentence or phrase runs over from one line to the next without punctuation, creating a sense of flow, urgency, or continuation. Caesura is a pause within a line of poetry, created by punctuation, which can create a sense of hesitation, reflection, or a dramatic break. Both are structural techniques that control the pace and rhythm of a poem.',
        marks: 4,
      },
      {
        question: 'Why is it important to consider more than one interpretation of a poem? How does this strengthen your analysis?',
        lines: 4,
        modelAnswer:
          'Considering multiple interpretations shows that you understand poetry is often deliberately ambiguous and layered. It strengthens analysis because it demonstrates critical thinking and the ability to weigh evidence for different readings. It also shows awareness that the poet may have intended multiple meanings.',
        marks: 3,
      },
      {
        question: 'Choose one image from the poem studied today. Write a paragraph analysing how it contributes to the poem\'s meaning. Consider more than one interpretation.',
        lines: 6,
        modelAnswer:
          'The paragraph should identify a specific image, quote it accurately, explain its literal and figurative meanings, consider at least one alternative interpretation, and link it to the poem\'s overall theme or message. Tentative language should be used throughout.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The discussion about multiple interpretations is crucial — it moves students beyond "finding the right answer" towards genuine analytical thinking.',
      'Tentative language must be explicitly taught and modelled. Students often write "the poet is saying..." instead of "the poet could be suggesting..."',
      'Choose a poem that rewards close reading — one where the meaning is not immediately obvious, so students have to work to uncover it.',
      'The technique bingo is a quick, enjoyable way to consolidate terminology — but make sure students can define and exemplify, not just recognise.',
    ],
    targetedSkills: [
      'Poetry Analysis',
      'Structural Analysis',
      'Multiple Interpretations',
      'Tentative Language',
      'Close Reading',
    ],
  },

  // ── Lesson 13: Writing — Analytical Essay on Poetry ────────────────────────
  {
    id: 'ks3-cur-13-poetry-analytical-writing',
    title: 'Shaping Meaning: Writing an Analytical Essay on Poetry',
    text: 'Year 7 Term 3: Shaping Meaning',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Write a multi-paragraph analytical response about a poem (7W.2)',
      'Structure an essay with an introduction, analytical paragraphs, and a conclusion (7W.4)',
      'Integrate analysis of both language and structure within paragraphs (7W.3)',
      'Use formal academic register and subject-specific terminology accurately (7W.5)',
    ],
    successCriteria: [
      'I can write an introduction that addresses the question and introduces my argument',
      'I can write at least two PEEL paragraphs analysing different aspects of the poem',
      'I can analyse both language and structural techniques in my response',
      'I can maintain formal register and use at least four subject-specific terms accurately',
    ],
    keywords: [
      'introduction',
      'argument',
      'thesis',
      'formal register',
      'academic',
      'terminology',
      'conclusion',
      'cohesion',
    ],
    starterActivity: {
      title: 'Model Introduction Deconstruction',
      duration: '8 minutes',
      instructions:
        'Display a model introduction to a poetry essay on the board. Students read it and identify: (1) the question being addressed, (2) the poem and poet named, (3) the main argument or thesis, (4) a preview of the points to be made. Teacher explains the function of an introduction: it tells the reader what you will argue and how. Students then write their own introduction to the question that will form the main activity, using the model as a guide.',
      differentiation: {
        support: 'Provide a fill-in-the-blanks introduction template.',
        core: 'Students write their introduction independently using the model as a guide.',
        stretch: 'Students write an introduction that includes a conceptual opening — starting with a broader idea about poetry or the theme before narrowing to the specific poem.',
      },
      resources: ['Model introduction slide', 'Introduction template (support tier)'],
    },
    mainActivities: [
      {
        title: 'Teacher Model: Integrating Language and Structure Analysis',
        duration: '15 minutes',
        instructions:
          'Teacher models writing one analytical paragraph that integrates both language and structure analysis. Question: "How does the poet use language and structure to explore the theme of [relevant theme] in [poem title]?" Teacher thinks aloud about: making a point about how language creates meaning at a specific moment, then explaining how the structural positioning of that moment enhances its impact. For example: "The poet\'s use of [metaphor/imagery] in the [opening/final] stanza is particularly effective because the structural placement [at the start/after the volta/in the final line] means the reader encounters it [before they understand the context/after the shift in tone/as the lasting impression]." Students copy and annotate.',
        differentiation: {
          support: 'Students copy and annotate with teacher guidance, focusing on identifying where language and structure analysis each appear.',
          core: 'Students annotate independently and plan how to apply the same integration in their own paragraph.',
          stretch: 'Students evaluate the model and suggest how the integration of language and structure could be made even more seamless.',
        },
        resources: ['Visualiser or whiteboard', 'Poem text'],
      },
      {
        title: 'Extended Writing: Analytical Essay',
        duration: '30 minutes',
        instructions:
          'Students write a full analytical response to the question, building on the introduction written in the starter. The response should include: introduction (already written), two or three PEEL paragraphs analysing different aspects of the poem (each integrating language and structure where possible), and a brief conclusion. Teacher displays a progress guide: minutes 1-5 (review and improve introduction), minutes 6-15 (first analytical paragraph), minutes 16-25 (second analytical paragraph), minutes 26-28 (conclusion or third paragraph), minutes 29-30 (proofread for SPAG and terminology). Teacher circulates, providing targeted feedback on integration of language and structure analysis.',
        differentiation: {
          support: 'Provide a writing frame with sentence starters for each paragraph section and a terminology bank.',
          core: 'Students write independently using the progress guide.',
          stretch: 'Students aim for three analytical paragraphs and a conclusion that offers a final evaluative judgement about the poet\'s success.',
        },
        resources: ['Poem text', 'Writing frame (support tier)', 'Terminology bank', 'Progress guide slide'],
      },
    ],
    plenaryActivity: {
      title: 'Terminology Check',
      duration: '7 minutes',
      instructions:
        'Students circle every subject-specific term they used in their essay and count them. Teacher asks: "How many different terms did you use?" Aim for at least four. Students who used fewer than four identify which terms they could add and where. Teacher reads one strong paragraph from a student (with permission) and the class identifies the terminology used. Final target: students write one thing they will improve when they return to this essay for the application lesson.',
      differentiation: {
        support: 'Students check against the terminology bank to identify terms they could have included.',
        core: 'Students self-assess their terminology usage and set a target.',
        stretch: 'Students check whether their terminology is used accurately — not just present but correctly applied.',
      },
    },
    homework:
      'Re-read your essay and highlight your analysis of structure in one colour and your analysis of language in another. If one colour dominates, add a sentence to your weaker area to balance the analysis.',
    worksheetQuestions: [
      {
        question: 'What should an introduction to a poetry essay include?',
        lines: 4,
        modelAnswer:
          'An introduction should name the poet and poem, address the question directly, state the main argument or thesis, and briefly preview the points that will be explored in the body paragraphs. It should be written in formal register and set the tone for the analysis.',
        marks: 3,
      },
      {
        question: 'Explain how you can analyse both language and structure within the same paragraph. Give a brief example.',
        lines: 5,
        modelAnswer:
          'You can integrate language and structure by analysing a specific language choice and then explaining how its structural positioning enhances its effect. For example: "The metaphor of the storm in the final stanza is made more powerful by its placement after the calm imagery of the preceding stanzas — the structural shift mirrors the thematic shift from peace to turmoil."',
        marks: 4,
      },
      {
        question: 'Write a conclusion for your essay that summarises your argument and offers a final evaluation of the poet\'s techniques.',
        lines: 5,
        modelAnswer:
          'The conclusion should briefly restate the main argument without repeating exactly the same words, synthesise the key analytical points made in the body paragraphs, and offer a final evaluative comment about the effectiveness of the poet\'s choices in conveying the theme.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The integration of language and structure is a challenging skill — most students will default to analysing them separately. The model must show clearly how they interact.',
      'The progress guide prevents students from spending too long on the introduction or first paragraph at the expense of the rest.',
      'Collect essays for formative marking — focus feedback on integration of language and structure, as this is the new skill.',
      'If students struggle with conclusions, teach a simple formula: restate argument + summarise key evidence + evaluative comment.',
    ],
    targetedSkills: [
      'Essay Writing',
      'Integrated Analysis',
      'Formal Register',
      'Terminology Usage',
      'Essay Structure',
    ],
  },

  // ── Lesson 14: Application — Reading to Writing Transfer ───────────────────
  {
    id: 'ks3-cur-14-shaping-meaning-application',
    title: 'Shaping Meaning: Applying Analysis to an Unseen Text',
    text: 'Year 7 Term 3: Shaping Meaning',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Apply language and structure analysis skills to an unseen poem or extract (7R.3)',
      'Plan and write an analytical response under guided conditions (7W.2)',
      'Transfer skills learned from studying familiar texts to unfamiliar ones (7R.5)',
      'Self-assess analytical writing using specific success criteria (7W.6)',
    ],
    successCriteria: [
      'I can approach an unseen text confidently using the reading strategies learned this term',
      'I can plan a multi-paragraph response within a limited time',
      'I can analyse both language and structure in an unfamiliar text',
      'I can self-assess my work and identify specific areas for improvement',
    ],
    keywords: [
      'unseen',
      'transfer',
      'approach',
      'strategy',
      'annotation',
      'planning',
      'timed writing',
      'self-assessment',
    ],
    starterActivity: {
      title: 'Reading Strategy Recap',
      duration: '8 minutes',
      instructions:
        'Teacher displays the question: "You are given a text you have never seen before and asked to analyse it. What steps do you take?" Students brainstorm in pairs and then share. Teacher builds a class list of strategies on the board: (1) Read once for meaning, (2) Read again for technique, (3) Annotate language and structure, (4) Identify the key moment or shift, (5) Plan before writing. Teacher emphasises: "These strategies work for any text — you have practised them all term. Today you will apply them independently to a text you have not seen before."',
      differentiation: {
        support: 'Provide the strategy list on a printed card for reference during the lesson.',
        core: 'Students recall and articulate the strategies from memory.',
        stretch: 'Students rank the strategies in order of importance and justify their ranking.',
      },
      resources: ['Strategy list slide', 'Printed strategy card (support tier)'],
    },
    mainActivities: [
      {
        title: 'Unseen Text: Reading and Annotation',
        duration: '15 minutes',
        instructions:
          'Distribute an unseen poem or short prose extract (one students have not studied before). Students read it twice following the strategy list. First reading: what is the text about? Write a one-sentence summary. Second reading: annotate for language techniques, structural features, and the key moment/shift. Teacher circulates but does not guide — this is a chance to observe students\' independent reading strategies. After 12 minutes, brief pair discussion: "What did you notice? What is the most interesting feature of this text?"',
        differentiation: {
          support: 'Provide guided annotation prompts in the margin of the printed text.',
          core: 'Students annotate independently using the practised strategies.',
          stretch: 'Students identify the poet\'s or writer\'s overall intention and how language and structure work together to achieve it.',
        },
        resources: ['Unseen text (printed copies, double-spaced)', 'Annotation prompt sheet (support tier)'],
      },
      {
        title: 'Planning and Writing: Analytical Response',
        duration: '30 minutes',
        instructions:
          'Students plan and write an analytical response to: "How does the writer use language and structure to [relevant question about the unseen text]?" Planning time: 5 minutes. Students plan using a method of their choice (mind map, bullet points, numbered points). Writing time: 25 minutes. Students write an introduction and two PEEL paragraphs. Teacher provides time checks at 10, 20, and 25 minutes. Teacher circulates, noting common strengths and areas for development but not providing individual content feedback.',
        differentiation: {
          support: 'Provide a planning template and writing frame. Allow access to the strategy card and terminology bank.',
          core: 'Students plan and write independently.',
          stretch: 'Students aim for three paragraphs and a conclusion, with at least one paragraph integrating both language and structure analysis.',
        },
        resources: ['Exercise books or lined paper', 'Planning template (support tier)', 'Writing frame (support tier)', 'Terminology bank'],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment Against Success Criteria',
      duration: '7 minutes',
      instructions:
        'Students re-read their response and self-assess against the four success criteria using a traffic light system (green/amber/red). They write a specific target for each amber or red criterion. Teacher asks: "What was most challenging about working with an unseen text?" Class discussion to surface common difficulties and strategies for overcoming them. Teacher collects work for formative assessment.',
      differentiation: {
        support: 'Provide a self-assessment grid with the criteria pre-printed and space for traffic lighting.',
        core: 'Students self-assess and write specific, actionable targets.',
        stretch: 'Students compare their response to this unseen text with their Lesson 13 essay — what skills transferred well and what was harder without familiarity?',
      },
    },
    homework:
      'Find a short poem online or in a book. Read it twice, annotate it using the strategies from class, and write three bullet points about what you found most interesting. Bring the annotated poem to the next lesson.',
    worksheetQuestions: [
      {
        question: 'List the five reading strategies discussed at the start of the lesson in order.',
        lines: 5,
        modelAnswer:
          '1. Read once for meaning (what is the text about?). 2. Read again for technique (what methods does the writer use?). 3. Annotate language and structure. 4. Identify the key moment or shift. 5. Plan before writing.',
        marks: 5,
      },
      {
        question: 'What is the difference between analysing a studied text and an unseen text? What makes unseen texts more challenging?',
        lines: 4,
        modelAnswer:
          'With a studied text, you have time to build understanding through discussion and re-reading. With an unseen text, you must apply all your skills independently and form an interpretation quickly. The challenge is that you cannot rely on prior knowledge of the text — you must trust your analytical skills.',
        marks: 3,
      },
      {
        question: 'Write one analytical paragraph about a technique used in today\'s unseen text. Embed a quotation and explain its effect.',
        lines: 6,
        modelAnswer:
          'The paragraph should follow PEEL structure, embed a quotation from the unseen text, use analytical vocabulary, explain the effect of the technique on the reader, and ideally consider structure as well as language. Subject-specific terminology should be used accurately.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson tests whether students can transfer skills to unfamiliar contexts — this is the true measure of learning.',
      'Resist the urge to support too heavily — the point is to see what students can do independently before the assessment.',
      'Choose an unseen text that is accessible but rewards close reading. Avoid texts that are too obscure or culturally unfamiliar.',
      'The self-assessment is a crucial metacognitive activity — it helps students understand what they know and what they need to work on before the assessment.',
    ],
    targetedSkills: [
      'Unseen Text Analysis',
      'Skill Transfer',
      'Independent Analysis',
      'Planning Under Time Pressure',
      'Self-Assessment',
    ],
  },

  // ── Lesson 15: Assessment — Shaping Meaning Extended Response ──────────────
  {
    id: 'ks3-cur-15-shaping-meaning-assessment',
    title: 'Assessment: Shaping Meaning — Language and Structure Analysis',
    text: 'Year 7 Term 3: Shaping Meaning',
    board: 'Edexcel',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Independently analyse how a writer uses language and structure to create meaning (7R.3)',
      'Write a structured, multi-paragraph analytical essay under timed conditions (7W.2)',
      'Demonstrate accurate use of subject-specific terminology (7W.5)',
      'Apply all analytical skills developed across the term (7W.4)',
    ],
    successCriteria: [
      'I can write at least two analytical paragraphs with embedded quotations',
      'I can analyse both language and structural choices',
      'I can use at least five subject-specific terms accurately',
      'I can write with accurate SPAG and formal register throughout',
    ],
    keywords: [
      'assessment',
      'independence',
      'analytical',
      'terminology',
      'integration',
      'formal register',
      'proofreading',
      'essay',
    ],
    starterActivity: {
      title: 'Assessment Preparation',
      duration: '10 minutes',
      instructions:
        'Distribute the unseen assessment text (a poem or prose extract not previously studied). Students read it twice and spend 10 minutes planning their response to the assessment question. Teacher displays the question and success criteria on the board and reminds students of the strategies practised throughout the term. No further guidance is given. Students produce a written plan.',
      differentiation: {
        support: 'Provide a planning template. Allow access to a terminology bank but not to writing frames.',
        core: 'Students plan independently.',
        stretch: 'Students plan a response that integrates analysis of how language and structure work together at key moments.',
      },
      resources: ['Assessment text (unseen, printed copies)', 'Planning template (support tier)', 'Terminology bank (support tier)'],
    },
    mainActivities: [
      {
        title: 'Independent Analytical Essay',
        duration: '40 minutes',
        instructions:
          'Students write their assessment response independently under timed conditions. Assessment conditions: quiet room, no talking, no access to previous work or teacher support. Time checks at 15, 25, and 35 minutes. Students should aim for: an introduction, two to three analytical paragraphs, and a brief conclusion. The final five minutes should be reserved for proofreading.',
        differentiation: {
          support: 'Allow access to terminology bank only. Minimum two paragraphs.',
          core: 'Students write independently. Minimum two paragraphs plus introduction.',
          stretch: 'Students aim for three paragraphs with integrated language and structure analysis, plus a conceptual introduction and evaluative conclusion.',
        },
        resources: ['Lined paper or exercise books', 'Assessment text', 'Terminology bank (support tier only)'],
      },
    ],
    plenaryActivity: {
      title: 'End-of-Year Reflection',
      duration: '10 minutes',
      instructions:
        'Students complete a Year 7 English reflection: (1) What is the most important skill you developed this year? (2) What text or topic did you enjoy most and why? (3) What is one area you want to improve in Year 8? (4) Rate your confidence as a reader (1-5) and as a writer (1-5). Teacher collects assessments and reflections. Brief celebration of the year\'s progress — teacher highlights general improvements observed across the class.',
      differentiation: {
        support: 'Provide reflection sentence starters.',
        core: 'Students reflect independently.',
        stretch: 'Students write a letter to their Year 8 self giving advice about how to succeed in English.',
      },
    },
    homework:
      'No homework. Enjoy the break and read something for pleasure over the holidays.',
    worksheetQuestions: [
      {
        question: 'Read the assessment text and write a one-sentence summary of what it is about.',
        lines: 2,
        modelAnswer:
          'The summary should capture the main subject, theme, or event of the text in one clear sentence, demonstrating comprehension.',
        marks: 1,
      },
      {
        question: 'Identify two language techniques and two structural features in the assessment text. Name each and provide the evidence.',
        lines: 6,
        modelAnswer:
          'Language techniques might include metaphor, simile, personification, alliteration, or specific word choices. Structural features might include enjambment, caesura, volta, repetition, or the ordering of ideas. Each should be named, evidenced with a quotation, and briefly labelled.',
        marks: 4,
      },
      {
        question: 'Which technique do you think is most effective in shaping the reader\'s response? Write a paragraph explaining why.',
        lines: 8,
        modelAnswer:
          'The paragraph should follow PEEL structure, embed a quotation, use analytical vocabulary and tentative language, explain the effect on the reader in detail, and ideally consider how the technique interacts with the text\'s structure. The explanation should be specific and demonstrate personal engagement with the text.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is the final assessment of Year 7 — it should capture the full range of analytical skills developed across the three terms.',
      'Mark holistically as well as against specific criteria. Note overall progress from the Term 1 assessment to identify value-added.',
      'The reflection is important data for the Year 8 teacher — share it during handover.',
      'Celebrate student progress publicly. Year 7 students benefit enormously from knowing their improvement has been noticed.',
    ],
    targetedSkills: [
      'Independent Analysis',
      'Essay Writing',
      'Terminology Application',
      'Timed Writing',
      'Reflective Practice',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 8 — TERM 1: SOCIAL JUSTICE (The Hunger Games)
  // Power, Inequality, Analytical Focus — Lessons 16-20
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 16: Explicit Reading — Introducing Dystopia and Power ────────────
  {
    id: 'ks3-cur-16-hunger-games-explicit-reading',
    title: 'The Hunger Games: Exploring Dystopia, Power, and Inequality',
    text: 'Year 8 Term 1: Social Justice',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Read an extract from The Hunger Games with fluency and comprehension (8R.1)',
      'Understand the concept of dystopia and its conventions (8R.5)',
      'Identify how Collins presents themes of power and inequality through language (8R.3)',
      'Begin to connect textual analysis with broader social and political contexts (8R.6)',
    ],
    successCriteria: [
      'I can define "dystopia" and identify at least three conventions of the genre',
      'I can identify how the writer presents the theme of power in the extract',
      'I can select relevant quotations about inequality and explain their significance',
      'I can begin to make connections between the text and real-world issues of power',
    ],
    keywords: [
      'dystopia',
      'totalitarian',
      'oppression',
      'inequality',
      'surveillance',
      'propaganda',
      'control',
      'resistance',
    ],
    starterActivity: {
      title: 'What If? Dystopian Scenarios',
      duration: '8 minutes',
      instructions:
        'Pose three "What if?" scenarios on the board: "What if the government controlled what you eat?", "What if only the richest people could go to school?", "What if your name was entered into a lottery where the prize is survival?" Students discuss each in pairs and rate them from most to least disturbing, explaining why. Teacher introduces the term "dystopia" — a society where life is extremely bad due to oppression, deprivation, or terror. Link to The Hunger Games: "The world of Panem is a dystopia. Today we will explore how."',
      differentiation: {
        support: 'Provide a definition of dystopia on the table and discuss each scenario as a guided class activity.',
        core: 'Students discuss independently and articulate their reasoning.',
        stretch: 'Students consider: what makes dystopian fiction compelling? Why do we enjoy reading about terrible societies?',
      },
      resources: ['What If? scenarios slide'],
    },
    mainActivities: [
      {
        title: 'Teacher-Led Reading: The Reaping Extract',
        duration: '18 minutes',
        instructions:
          'Teacher reads the Reaping scene from The Hunger Games aloud, modelling expressive reading that conveys the tension and fear of the scene. Students follow on printed copies. Teacher pauses at three key moments to ask: "What does this tell us about who has power in this society?" and "How does the writer make us feel the inequality between the Capitol and the Districts?" After reading, teacher models annotating the first section, identifying: language choices that convey power (e.g., Effie\'s cheerfulness vs. the crowd\'s terror), structural choices (e.g., the build-up of tension through the Reaping process), and vocabulary that reveals inequality. Students annotate the remaining sections independently.',
        differentiation: {
          support: 'Pre-highlight key quotations and provide guiding questions for each section.',
          core: 'Students annotate independently, focusing on language and power.',
          stretch: 'Students analyse the narrative perspective — how does Katniss\'s first-person voice shape our understanding of the power dynamics?',
        },
        resources: ['The Reaping extract (printed copies)', 'Annotation guide'],
      },
      {
        title: 'Concept Map: Power and Inequality in Panem',
        duration: '15 minutes',
        instructions:
          'Students create a concept map showing the power structures in the extract. Central concept: POWER. Branches: Who has power? How is power maintained? Who lacks power? How is inequality shown? Students support each branch with at least one quotation from the extract. Teacher circulates and discusses key ideas with students, challenging them to think about the methods of control (fear, spectacle, ritual, deprivation). In the final five minutes, teacher leads a brief discussion: "How is the power structure in Panem similar to or different from power structures in the real world?"',
        differentiation: {
          support: 'Provide a partially completed concept map with guiding labels and one quotation as a model.',
          core: 'Students create the concept map independently with quotation evidence.',
          stretch: 'Students add a branch for "Resistance" — how does Katniss challenge or resist the power structure, even subtly?',
        },
        resources: ['A3 paper or template', 'Extract', 'Coloured pens'],
      },
      {
        title: 'Vocabulary Focus: The Language of Power',
        duration: '12 minutes',
        instructions:
          'Teacher explicitly teaches eight key vocabulary words for this unit: dystopia, totalitarian, oppression, inequality, surveillance, propaganda, control, resistance. For each word: teacher provides a clear definition, an example from The Hunger Games, and an example from the real world. Students record these in their vocabulary log. Quick-fire application: students use three of the words in sentences about the extract.',
        differentiation: {
          support: 'Provide a pre-printed vocabulary sheet with definitions; students add the examples.',
          core: 'Students record definitions and both examples independently.',
          stretch: 'Students identify which vocabulary words could apply to other texts they have studied and explain the connections.',
        },
        resources: ['Vocabulary slides', 'Vocabulary logs'],
      },
    ],
    plenaryActivity: {
      title: 'Big Question Exit Ticket',
      duration: '7 minutes',
      instructions:
        'Students respond to the exit question: "In one sentence, how does Suzanne Collins make the reader feel that the society in The Hunger Games is unjust?" Students write their response, share with a partner, and three are selected to share with the class. Teacher identifies common themes in responses and previews the next lesson: "Next time we will explore how Collins develops the theme of social justice further and why this matters beyond the novel."',
      differentiation: {
        support: 'Provide a sentence starter: "Collins makes the reader feel the society is unjust by..."',
        core: 'Students write independently using at least one keyword from the lesson.',
        stretch: 'Students explain why Collins chose to write a dystopian novel rather than a factual text about inequality.',
      },
    },
    homework:
      'Read a chapter of The Hunger Games at home (assigned chapter). Find three quotations that reveal the power imbalance between the Capitol and the Districts. For each, write one sentence explaining what it reveals about inequality.',
    worksheetQuestions: [
      {
        question: 'Define "dystopia" and list three conventions (features) of dystopian fiction.',
        lines: 4,
        modelAnswer:
          'A dystopia is an imagined society where life is extremely bad, usually due to government oppression, inequality, or loss of freedom. Three conventions: a controlling government or authority, a protagonist who questions the system, and a society divided into distinct classes or groups with unequal power.',
        marks: 4,
      },
      {
        question: 'How does Collins create tension during the Reaping scene? Use a quotation to support your answer.',
        lines: 5,
        modelAnswer:
          'Collins creates tension through the contrast between Effie Trinket\'s forced cheerfulness and the crowd\'s visible fear. The structural pacing — the slow build-up as names are drawn — increases anxiety. A relevant quotation should be embedded and analysed at word level to explain how it creates tension.',
        marks: 4,
      },
      {
        question: 'What connections can you make between the power structures in The Hunger Games and real-world examples of inequality? Explain one connection.',
        lines: 5,
        modelAnswer:
          'A strong answer will draw a specific parallel — for example, the Capitol\'s extraction of resources from the Districts mirrors historical colonialism or economic exploitation. The connection should be explained with reference to both the text and the real-world example, demonstrating understanding of how the novel uses fiction to comment on reality.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The Hunger Games is highly engaging for Year 8 students but ensure the focus remains on analytical reading rather than plot retelling.',
      'The real-world connections are important but must be handled sensitively — allow students to make connections without forcing specific political interpretations.',
      'This is the exposure phase — students need to understand the text and its themes before they can analyse them. Do not rush to essay writing.',
      'The vocabulary is essential for the analytical writing later in the sequence. Ensure students use these words accurately, not just frequently.',
      'If students have already read the novel, redirect their energy towards analysis rather than plot prediction.',
    ],
    targetedSkills: [
      'Dystopian Genre Knowledge',
      'Thematic Analysis',
      'Contextual Understanding',
      'Vocabulary Acquisition',
      'Evidence Selection',
    ],
  },

  // ── Lesson 17: Reading & Discussion — Power, Oppression, and Resistance ────
  {
    id: 'ks3-cur-17-hunger-games-discussion',
    title: 'The Hunger Games: Debating Power, Oppression, and Resistance',
    text: 'Year 8 Term 1: Social Justice',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Analyse how Collins presents the relationship between oppression and resistance (8R.4)',
      'Evaluate the effectiveness of different forms of resistance in the novel (8R.6)',
      'Develop extended spoken responses in a structured debate format (8S.1)',
      'Connect textual themes to wider social justice issues (8R.5)',
    ],
    successCriteria: [
      'I can explain how Collins presents different forms of resistance in the novel',
      'I can support my spoken arguments with evidence from the text',
      'I can evaluate an argument and offer a counter-argument',
      'I can make connections between the novel\'s themes and real-world social justice issues',
    ],
    keywords: [
      'oppression',
      'resistance',
      'rebellion',
      'conformity',
      'sacrifice',
      'solidarity',
      'debate',
      'counter-argument',
    ],
    starterActivity: {
      title: 'Agree or Disagree Continuum',
      duration: '7 minutes',
      instructions:
        'Read out three statements: (1) "It is always right to resist injustice." (2) "Individuals cannot change unfair systems." (3) "Entertainment can be used as a weapon of control." Students move to positions on an imaginary agree-disagree line in the room and justify their positions. Teacher facilitates brief exchanges between students at opposite ends. Bridge to the lesson: "Today we will explore these ideas through The Hunger Games and debate the role of resistance."',
      differentiation: {
        support: 'Allow students to discuss with a partner before choosing their position.',
        core: 'Students take and justify positions independently.',
        stretch: 'Students position themselves in the middle and explain the complexity — why both sides have merit.',
      },
      resources: ['Three statements slide'],
    },
    mainActivities: [
      {
        title: 'Text Analysis: Forms of Resistance',
        duration: '15 minutes',
        instructions:
          'Students work in pairs to identify different forms of resistance shown in the extract and wider text. Teacher provides a framework: Physical resistance (fighting, escaping), Emotional resistance (refusing to be broken, maintaining humanity), Symbolic resistance (the Mockingjay salute, the berries), Intellectual resistance (strategy, planning). Students find quotation evidence for each type. Share findings as a class, building a collaborative evidence board on the whiteboard.',
        differentiation: {
          support: 'Provide the four types with example quotations for the first type; students complete the rest.',
          core: 'Students identify evidence for all four types independently.',
          stretch: 'Students rank the types of resistance from most to least effective in the novel and prepare to defend their ranking in the debate.',
        },
        resources: ['Extract and notes from previous lessons', 'Resistance framework handout'],
      },
      {
        title: 'Structured Debate: Is Katniss a True Rebel?',
        duration: '25 minutes',
        instructions:
          'Formal debate. Motion: "Katniss Everdeen is a true rebel who fights for justice." Class divided into two teams (proposition and opposition). Preparation (10 mins): each team prepares three arguments supported by textual evidence. Each team selects two speakers. Debate (12 mins): Opening arguments (2 mins each), rebuttals (1 min each), audience questions (4 mins), closing statements (1 min each). After the debate, audience members vote. Teacher summarises the key arguments and draws out: "How does Collins present the complexity of resistance? Is Katniss a rebel by choice or by circumstance?"',
        differentiation: {
          support: 'Provide debate sentence starters and a planning frame for arguments.',
          core: 'Students prepare and deliver arguments independently.',
          stretch: 'Students deliver rebuttals that directly engage with and dismantle the opposing team\'s arguments.',
        },
        resources: ['Debate planning frame', 'Sentence starters (support tier)', 'Timer'],
      },
      {
        title: 'Written Reflection: What Does Resistance Look Like?',
        duration: '8 minutes',
        instructions:
          'Students write a paragraph reflecting on the debate and connecting it to broader themes: "What does The Hunger Games teach us about resistance? Can you think of a real-world example where ordinary people resisted injustice?" Students write independently. Three share their reflections. Teacher draws connections between fictional and real-world resistance, reinforcing the unit\'s social justice focus.',
        differentiation: {
          support: 'Provide a sentence frame for the reflection paragraph.',
          core: 'Students write independently, making a text-to-world connection.',
          stretch: 'Students evaluate whether fiction like The Hunger Games can inspire real-world change.',
        },
        resources: ['Exercise books'],
      },
    ],
    plenaryActivity: {
      title: 'Key Quotation Gallery',
      duration: '5 minutes',
      instructions:
        'Students write their strongest quotation from today\'s lesson on a sticky note with a one-sentence explanation of why it matters. Stick these on the wall to create a growing quotation gallery for the unit. Teacher selects three to discuss briefly, reinforcing the themes of power, resistance, and social justice.',
      differentiation: {
        support: 'Students can choose from a provided list of key quotations.',
        core: 'Students select and explain their own quotation.',
        stretch: 'Students explain how their quotation connects to a specific aspect of social justice.',
      },
    },
    homework:
      'Write a persuasive paragraph arguing either for or against the statement: "Katniss Everdeen is a hero." Use at least two quotations from the text to support your argument.',
    worksheetQuestions: [
      {
        question: 'What are the four types of resistance discussed in today\'s lesson? Give an example from the text for each.',
        lines: 6,
        modelAnswer:
          'Physical resistance (Katniss volunteering, fighting in the arena), Emotional resistance (refusing to show weakness, caring for Rue), Symbolic resistance (the Mockingjay salute, the berries at the end), Intellectual resistance (forming alliances, using strategy to survive). Each should be supported by specific reference to the text.',
        marks: 4,
      },
      {
        question: 'Why might Collins have chosen to present Katniss as a reluctant rebel rather than a deliberate revolutionary? What effect does this have on the reader?',
        lines: 5,
        modelAnswer:
          'Collins may have made Katniss reluctant to make her more relatable — she is an ordinary person thrust into extraordinary circumstances, which makes the reader empathise with her. It also suggests that resistance does not require grand plans — it can begin with small acts of defiance motivated by love and survival.',
        marks: 4,
      },
      {
        question: 'Connect one theme from The Hunger Games to a real-world issue. Explain the connection and why you think Collins included this theme.',
        lines: 5,
        modelAnswer:
          'A strong answer will draw a specific parallel between a theme in the novel (inequality, surveillance, media manipulation, sacrifice) and a real-world issue, explaining how Collins uses fiction to comment on society. The explanation should show understanding of both the fictional and real contexts.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The debate is the centrepiece of this lesson — invest time in preparation to ensure quality. Brief students on debate etiquette before starting.',
      'Real-world connections should emerge naturally from the discussion. Avoid imposing specific political readings but encourage critical engagement.',
      'The quotation gallery is a running resource — add to it throughout the unit and use it as a revision tool.',
      'This lesson builds the argumentative and evaluative skills needed for the analytical writing in Lessons 18-19.',
    ],
    targetedSkills: [
      'Debate Skills',
      'Argumentative Reasoning',
      'Textual Evidence',
      'Social Justice Analysis',
      'Evaluation',
    ],
  },

  // ── Lesson 18: Writing — Social Justice Analytical Writing ─────────────────
  {
    id: 'ks3-cur-18-social-justice-writing',
    title: 'Writing About Social Justice: Analytical Paragraphs on Power and Inequality',
    text: 'Year 8 Term 1: Social Justice',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Write analytical paragraphs exploring how Collins presents social inequality (8W.2)',
      'Develop a sustained argument across multiple paragraphs with clear topic sentences (8W.4)',
      'Use subject-specific and conceptual vocabulary to enhance analytical writing (8W.5)',
      'Apply accurate SPAG with a focus on complex sentence construction (8G.1)',
    ],
    successCriteria: [
      'I can write analytical paragraphs with clear topic sentences that address the question',
      'I can use conceptual vocabulary (oppression, inequality, resistance, power) accurately',
      'I can develop my analysis beyond identifying techniques to explaining significance',
      'I can construct complex sentences accurately using subordinate clauses',
    ],
    keywords: [
      'topic sentence',
      'conceptual vocabulary',
      'significance',
      'subordinate clause',
      'complex sentence',
      'argument',
      'sustained',
      'evaluative',
    ],
    starterActivity: {
      title: 'Topic Sentence Workshop',
      duration: '8 minutes',
      instructions:
        'Display three weak topic sentences on the board (e.g., "Collins uses lots of techniques", "This paragraph is about power", "The writer shows inequality"). Students rewrite each as a strong, assertive topic sentence that makes a clear argument (e.g., "Collins constructs a society built on systematic inequality, where the Capitol\'s opulence is deliberately contrasted with the Districts\' deprivation"). Teacher reveals model improvements and explains: a strong topic sentence does two things — it makes an argument and it addresses the question directly.',
      differentiation: {
        support: 'Provide a topic sentence formula: "[Author] presents [theme] as [argument] through [method]."',
        core: 'Students rewrite independently and compare with the models.',
        stretch: 'Students write their own topic sentence for their first analytical paragraph, ready for the main activity.',
      },
      resources: ['Weak topic sentences slide', 'Topic sentence formula card (support tier)'],
    },
    mainActivities: [
      {
        title: 'Teacher Model: Analytical Writing with Conceptual Vocabulary',
        duration: '15 minutes',
        instructions:
          'Teacher models writing one analytical paragraph responding to: "How does Collins present social inequality in The Hunger Games?" Teacher demonstrates: a strong topic sentence with a clear argument, an embedded quotation, analysis that goes beyond technique identification to discuss significance and authorial intent, use of conceptual vocabulary (oppression, exploitation, dehumanisation), and a link to the broader theme. SPAG focus: teacher models constructing complex sentences using subordinate clauses (e.g., "Although the Capitol presents the Hunger Games as entertainment, Collins reveals it to be a mechanism of control that dehumanises the tributes"). Students copy and annotate.',
        differentiation: {
          support: 'Students copy and annotate with teacher guidance, focusing on identifying the topic sentence and conceptual vocabulary.',
          core: 'Students annotate independently and note techniques to replicate.',
          stretch: 'Students evaluate the model\'s analysis — does it go deep enough? How could the significance be explored further?',
        },
        resources: ['Visualiser or whiteboard'],
      },
      {
        title: 'Extended Analytical Writing',
        duration: '28 minutes',
        instructions:
          'Students write two analytical paragraphs responding to: "How does Collins present social inequality in The Hunger Games? You should consider her use of language, structure, and the themes she explores." Progress guide: Minutes 1-12 — First paragraph (topic sentence + evidence + analysis + significance + link). Minutes 13-24 — Second paragraph on a different aspect of inequality. Minutes 25-28 — SPAG check, focusing on complex sentence construction and accurate use of conceptual vocabulary. Teacher circulates and provides targeted feedback, particularly on the depth of analysis and use of conceptual vocabulary.',
        differentiation: {
          support: 'Provide a writing frame with sentence starters and a conceptual vocabulary bank.',
          core: 'Students write independently using the progress guide.',
          stretch: 'Students write a third paragraph that evaluates Collins\'s overall success in presenting social inequality, considering why she chose the dystopian genre.',
        },
        resources: ['Exercise books', 'Writing frame (support tier)', 'Conceptual vocabulary bank', 'Extracts from previous lessons'],
      },
    ],
    plenaryActivity: {
      title: 'Complex Sentence Check',
      duration: '7 minutes',
      instructions:
        'Students identify and underline every complex sentence in their writing (sentences containing a subordinate clause). If they have fewer than three, they upgrade one of their simple sentences into a complex sentence. Teacher displays three examples of complex sentences from student work (anonymised) and explains what makes them effective. Students set one SPAG target for their next piece of writing.',
      differentiation: {
        support: 'Provide a reminder of what a subordinate clause is with examples.',
        core: 'Students identify and count independently.',
        stretch: 'Students vary their subordinate clause positions (beginning, middle, end of sentence) for stylistic effect.',
      },
    },
    homework:
      'Write a third analytical paragraph on a different aspect of inequality in The Hunger Games (e.g., the role of the media, the contrast between Districts, or the symbolism of the Games themselves). Include at least two complex sentences and three pieces of conceptual vocabulary.',
    worksheetQuestions: [
      {
        question: 'What makes a strong topic sentence? Rewrite this weak example: "The writer shows inequality."',
        lines: 4,
        modelAnswer:
          'A strong topic sentence makes a clear argument that directly addresses the question. Improved version: "Collins exposes the brutal inequality at the heart of Panem\'s society, where the Capitol\'s excessive wealth is sustained through the systematic exploitation and deprivation of the Districts."',
        marks: 3,
      },
      {
        question: 'What is a subordinate clause? Write a complex sentence about The Hunger Games that includes one.',
        lines: 4,
        modelAnswer:
          'A subordinate clause is a part of a sentence that adds information but cannot stand alone as a complete sentence. It is introduced by a conjunction such as "although", "because", "when", or "while". Example: "Although Katniss initially fights only for survival, her defiance of the Capitol\'s rules transforms her into a symbol of resistance."',
        marks: 3,
      },
      {
        question: 'Write an analytical paragraph about how Collins uses the character of Effie Trinket to highlight inequality. Use conceptual vocabulary and embed a quotation.',
        lines: 8,
        modelAnswer:
          'The paragraph should contain a strong topic sentence making an argument about Effie\'s role, an embedded quotation showing her behaviour or appearance, analysis of how this contrasts with the Districts\' experience, use of conceptual vocabulary (inequality, privilege, obliviousness, complicity), and a link to the broader theme of social injustice. The analysis should explore significance — what does Effie represent about those who benefit from unjust systems?',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Conceptual vocabulary is the step up from Year 7 — students should move from "the writer shows" to "Collins exposes the systematic inequality."',
      'Complex sentence construction is the SPAG focus. Model it explicitly and check for accuracy — students often create comma splices instead of true complex sentences.',
      'The depth of analysis is key at Year 8. Push students beyond "this shows" to "this reveals the significance of" and "this is important because."',
      'Collect books for marking after this lesson. Feedback should focus on depth of analysis and use of conceptual vocabulary.',
    ],
    targetedSkills: [
      'Analytical Writing',
      'Conceptual Vocabulary',
      'Complex Sentences',
      'Topic Sentences',
      'Depth of Analysis',
    ],
  },

  // ── Lesson 19: Application — Comparative Social Justice Analysis ───────────
  {
    id: 'ks3-cur-19-social-justice-application',
    title: 'Applying Analysis: Comparing Social Justice Across Texts',
    text: 'Year 8 Term 1: Social Justice',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Apply analytical skills to compare how two texts explore social justice themes (8W.2)',
      'Write a comparative essay linking The Hunger Games to a non-fiction text about inequality (8W.4)',
      'Evaluate how fiction and non-fiction address the same theme differently (8R.6)',
      'Demonstrate increasing independence in planning and writing analytical responses (8W.6)',
    ],
    successCriteria: [
      'I can compare how fiction and non-fiction present social justice issues',
      'I can write an integrated comparison using evidence from both texts',
      'I can evaluate the effectiveness of different text types in conveying a message about inequality',
      'I can plan and execute an analytical response with increasing independence',
    ],
    keywords: [
      'fiction',
      'non-fiction',
      'comparison',
      'evaluate',
      'effectiveness',
      'rhetorical',
      'emotive',
      'perspective',
    ],
    starterActivity: {
      title: 'Fiction vs Non-Fiction: Which Is More Powerful?',
      duration: '8 minutes',
      instructions:
        'Display two brief extracts side by side: one from The Hunger Games (fiction depicting inequality) and one from a non-fiction source (a speech, article, or report about real inequality). Students read both and vote: which is more powerful in making you care about inequality? Brief class discussion: teacher draws out the strengths of each — fiction creates empathy through character, non-fiction provides evidence and urgency. Introduce the lesson focus: comparing how fiction and non-fiction address the same theme.',
      differentiation: {
        support: 'Provide guided questions for comparing the two extracts.',
        core: 'Students compare independently and articulate their preferences with reasoning.',
        stretch: 'Students consider whether the most effective approach might combine elements of both fiction and non-fiction.',
      },
      resources: ['Two extracts slide (fiction and non-fiction)'],
    },
    mainActivities: [
      {
        title: 'Analysing the Non-Fiction Text',
        duration: '15 minutes',
        instructions:
          'Students read the non-fiction text in full and annotate it for: rhetorical techniques (repetition, direct address, emotive language, facts and statistics), the writer\'s purpose and intended audience, how it presents the theme of inequality. Teacher models annotating the first section, then students work independently. Brief class discussion: how does this text make its argument differently from Collins? Students note three key differences between the fiction and non-fiction approaches.',
        differentiation: {
          support: 'Provide an annotation guide with specific techniques to look for in non-fiction.',
          core: 'Students annotate independently and identify differences.',
          stretch: 'Students evaluate which techniques are most effective in the non-fiction text and why.',
        },
        resources: ['Non-fiction text (printed copies)', 'Non-fiction annotation guide (support tier)'],
      },
      {
        title: 'Comparative Writing: Fiction and Non-Fiction on Social Justice',
        duration: '28 minutes',
        instructions:
          'Students plan and write a comparative response: "Compare how The Hunger Games and [non-fiction text] present the theme of inequality. Which do you find more effective and why?" Planning (5 mins): students note their key comparison points and evidence. Writing (20 mins): students write an introduction and two comparison paragraphs. The final paragraph should be evaluative — which text is more effective and why? Final 3 mins: proofread. Teacher circulates with minimal intervention — this is a guided independence task.',
        differentiation: {
          support: 'Provide a planning template and comparison connectives sheet.',
          core: 'Students plan and write independently.',
          stretch: 'Students write a sophisticated evaluative conclusion that considers how the two texts serve different but complementary purposes in raising awareness of inequality.',
        },
        resources: ['Both texts', 'Planning template (support tier)', 'Comparison connectives sheet'],
      },
    ],
    plenaryActivity: {
      title: 'Peer Feedback: Evaluation Focus',
      duration: '7 minutes',
      instructions:
        'Students swap their writing with a partner. Partners read specifically for: (1) Is there a clear comparison between the two texts? (2) Is there an evaluative judgement about which is more effective? (3) Is the evaluation supported by evidence? Partners write one "What Went Well" and one "Even Better If" on a sticky note. Students read their feedback and write one improvement target.',
      differentiation: {
        support: 'Provide a simplified peer feedback form with tick boxes and one comment space.',
        core: 'Students provide specific, constructive written feedback.',
        stretch: 'Students rewrite their partner\'s weakest paragraph to demonstrate how it could be improved.',
      },
    },
    homework:
      'Revise your comparative response using the peer feedback. Focus particularly on strengthening your evaluative conclusion. Add at least one more piece of evidence if you can.',
    worksheetQuestions: [
      {
        question: 'What are the key differences between how fiction and non-fiction present a theme like inequality?',
        lines: 5,
        modelAnswer:
          'Fiction presents inequality through character, narrative, and emotional engagement — the reader experiences it through the protagonist. Non-fiction presents inequality through evidence, argument, and direct address — the reader is informed and persuaded. Fiction creates empathy; non-fiction provides urgency. Both are valuable but work through different mechanisms.',
        marks: 4,
      },
      {
        question: 'What does it mean to "evaluate" a text? How is evaluation different from analysis?',
        lines: 4,
        modelAnswer:
          'Analysis examines how a text works — identifying techniques and explaining their effects. Evaluation goes further by making a judgement about how effective those techniques are and why. It involves weighing up strengths and limitations and offering a considered opinion supported by evidence.',
        marks: 3,
      },
      {
        question: 'Write an evaluative paragraph comparing the effectiveness of the two texts in conveying a message about inequality.',
        lines: 8,
        modelAnswer:
          'The paragraph should compare specific techniques from each text, make a clear evaluative judgement about effectiveness, support the judgement with evidence from both texts, and consider how each text serves a different purpose or audience. Conceptual vocabulary should be used throughout.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The fiction/non-fiction comparison is a powerful way to deepen students\' understanding of both text types and the social justice theme.',
      'The evaluative element is new at this level — students may default to "I like this one more." Push them to explain why with reference to techniques and purpose.',
      'Choose a non-fiction text that is accessible but substantive — a speech or opinion piece works well as it has clear rhetorical features.',
      'This lesson prepares students for the assessment in Lesson 20, where they will write independently.',
    ],
    targetedSkills: [
      'Comparative Analysis',
      'Evaluative Writing',
      'Non-Fiction Analysis',
      'Fiction-Non-Fiction Comparison',
      'Independence',
    ],
  },

  // ── Lesson 20: Assessment — Social Justice Extended Essay ──────────────────
  {
    id: 'ks3-cur-20-social-justice-assessment',
    title: 'Assessment: Social Justice — Power, Inequality, and Resistance',
    text: 'Year 8 Term 1: Social Justice',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Independently produce an extended analytical response on the theme of social justice (8W.2)',
      'Demonstrate the ability to analyse language, structure, and theme in an integrated way (8W.4)',
      'Apply conceptual vocabulary and formal academic register accurately (8W.5)',
      'Write with accuracy and sophistication in SPAG under timed conditions (8G.2)',
    ],
    successCriteria: [
      'I can write a sustained analytical essay of at least three paragraphs with an introduction and conclusion',
      'I can use conceptual vocabulary accurately and consistently',
      'I can analyse how the writer presents themes of power and inequality through language and structure',
      'I can maintain formal register and accurate SPAG throughout',
    ],
    keywords: [
      'assessment',
      'independence',
      'sustained argument',
      'conceptual',
      'evaluative',
      'academic register',
      'proofreading',
      'essay',
    ],
    starterActivity: {
      title: 'Assessment Planning',
      duration: '10 minutes',
      instructions:
        'Display the assessment question: "How does Collins present themes of power and inequality in The Hunger Games? You should consider her use of language, structure, and the wider significance of her themes." Students plan independently for 10 minutes, choosing their key quotations and argument structure. No teacher guidance on content.',
      differentiation: {
        support: 'Provide a planning template and conceptual vocabulary bank.',
        core: 'Students plan independently.',
        stretch: 'Students plan a response with a conceptual introduction and evaluative conclusion that considers the significance of the novel beyond its story.',
      },
      resources: ['Assessment question slide', 'Planning template (support tier)', 'Vocabulary bank (support tier)', 'Clean extract copies'],
    },
    mainActivities: [
      {
        title: 'Independent Extended Essay',
        duration: '40 minutes',
        instructions:
          'Students write their assessment response independently under timed, quiet conditions. No teacher feedback during writing. Time checks at 15, 25, and 35 minutes. Minimum expectation: introduction + three analytical paragraphs. Final five minutes for proofreading.',
        differentiation: {
          support: 'Allow access to vocabulary bank only. Minimum introduction + two paragraphs.',
          core: 'Full independence. Introduction + three paragraphs.',
          stretch: 'Introduction + three paragraphs + evaluative conclusion. Integrated language-structure analysis throughout.',
        },
        resources: ['Lined paper or exercise books', 'Clean text extracts', 'Vocabulary bank (support tier only)'],
      },
    ],
    plenaryActivity: {
      title: 'Unit Reflection and Self-Evaluation',
      duration: '10 minutes',
      instructions:
        'Students complete a unit reflection: (1) What did you learn about social justice from studying The Hunger Games? (2) How has your analytical writing improved since the start of this unit? (3) What specific skill do you want to develop further? (4) What connection between the novel and the real world do you think is most important? Teacher collects assessments and reflections.',
      differentiation: {
        support: 'Provide reflection prompts with sentence starters.',
        core: 'Students reflect independently.',
        stretch: 'Students write a recommendation: should The Hunger Games be studied in schools to teach about social justice? Why or why not?',
      },
    },
    homework:
      'No written homework. Reflect on the unit and consider: has this unit changed how you think about power and inequality in the world around you?',
    worksheetQuestions: [
      {
        question: 'What is your thesis — your main argument — about how Collins presents power and inequality?',
        lines: 3,
        modelAnswer:
          'A strong thesis makes a clear, arguable claim, e.g., "Collins presents inequality not merely as a backdrop but as the engine of her dystopia, using the Hunger Games as a microcosm of the systematic exploitation that sustains the Capitol\'s power."',
        marks: 2,
      },
      {
        question: 'List three conceptual vocabulary words you plan to use in your essay and write a sentence using each.',
        lines: 6,
        modelAnswer:
          'Three appropriate words might include: oppression ("The Districts exist in a state of oppression, their resources extracted to sustain the Capitol"), dehumanisation ("The tributes are dehumanised by the Games, reduced from children to spectacles"), and resistance ("Katniss\'s small acts of resistance accumulate into a threat to the entire power structure").',
        marks: 3,
      },
      {
        question: 'After completing your essay, rate your confidence in each success criterion (1-5) and explain one area you want to improve.',
        lines: 4,
        modelAnswer:
          'The self-assessment should be honest and specific. The improvement area should identify a concrete skill (e.g., "I need to develop my analysis beyond technique identification to explore significance") rather than a vague statement (e.g., "I need to be better").',
        marks: 2,
      },
    ],
    teacherNotes: [
      'This assessment measures progress from Year 7 — look for: increased depth of analysis, use of conceptual vocabulary, integration of language and structure, and evaluative rather than descriptive responses.',
      'Mark against the success criteria and provide one specific strength and one actionable target per student.',
      'Compare results with the Year 7 Term 3 assessment to track progress in analytical writing.',
      'Use the reflections to inform planning for Term 2 and to identify students who need additional support.',
    ],
    targetedSkills: [
      'Independent Essay Writing',
      'Conceptual Vocabulary',
      'Sustained Argument',
      'Integrated Analysis',
      'Self-Evaluation',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 8 — TERM 2: CONFLICT POETRY & SHAKESPEARE
  // Comparison, Language Analysis — Lessons 21-25
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 21: Explicit Reading — Introduction to Conflict Poetry ──────────
  {
    id: 'ks3-cur-21-conflict-poetry-reading',
    title: 'Conflict Poetry: Reading and Responding to War Poetry',
    text: 'Year 8 Term 2: Conflict Poetry & Shakespeare',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Read conflict poems aloud with appropriate expression and understanding of tone (8R.1)',
      'Analyse how poets use language to convey the reality of conflict (8R.3)',
      'Understand the historical context of conflict poetry and how it shapes meaning (8R.5)',
      'Develop personal responses to poetry that move beyond surface-level interpretation (8R.4)',
    ],
    successCriteria: [
      'I can read a conflict poem aloud with expression that conveys its tone and mood',
      'I can identify how poets use specific language choices to convey the reality of war',
      'I can explain how knowing the historical context deepens my understanding of a poem',
      'I can offer a personal response to a poem that goes beyond "I liked it" or "it was sad"',
    ],
    keywords: [
      'conflict',
      'juxtaposition',
      'irony',
      'propaganda',
      'reality',
      'suffering',
      'duty',
      'sacrifice',
    ],
    starterActivity: {
      title: 'Images of Conflict',
      duration: '7 minutes',
      instructions:
        'Display four images related to war and conflict (historical paintings, memorial, poppy field, modern photojournalism). Students write one word for each image that describes the feeling it evokes. Teacher collects words on the board and groups them: do they tend towards glory and honour, or suffering and waste? Introduce the lesson: conflict poets often challenged romanticised views of war. Today we will read two conflict poems and explore how they present the reality of war.',
      differentiation: {
        support: 'Provide an emotion vocabulary bank to support word selection.',
        core: 'Students select words independently and justify to a partner.',
        stretch: 'Students consider why different people might respond to the same image with very different words — what does this tell us about perspective?',
      },
      resources: ['Conflict images slide', 'Emotion vocabulary bank (support tier)'],
    },
    mainActivities: [
      {
        title: 'Shared Reading: Two Conflict Poems',
        duration: '20 minutes',
        instructions:
          'Teacher reads two conflict poems aloud (e.g., Wilfred Owen\'s "Exposure" and a modern conflict poem). For each poem: teacher reads aloud with expression, briefly provides historical context, then reads a second time while students annotate for language techniques, tone, and mood. Teacher models annotating three key quotations from the first poem. Students annotate the second poem independently. Brief comparison discussion: How do the two poems present conflict differently? What tone does each adopt? Key vocabulary taught: juxtaposition, irony.',
        differentiation: {
          support: 'Provide a guided annotation sheet with specific questions for each stanza.',
          core: 'Students annotate independently using the modelled approach.',
          stretch: 'Students compare the poets\' intentions — are both anti-war, or does one present a more complex view?',
        },
        resources: ['Two conflict poems (printed copies)', 'Historical context information sheet', 'Annotation guide (support tier)'],
      },
      {
        title: 'Close Analysis: Language Under the Microscope',
        duration: '18 minutes',
        instructions:
          'Focus on one poem. Teacher selects four key quotations and displays them on the board. Students work in pairs to analyse each quotation: What technique is used? What is the literal meaning? What is the deeper or implied meaning? How does it make the reader feel about conflict? Each pair writes their analysis on a mini-whiteboard and holds it up. Teacher selects the strongest analyses to discuss, modelling how to move from technique identification to exploration of deeper significance. Emphasis on the idea that these poems were written to change how people think about war.',
        differentiation: {
          support: 'Provide sentence starters for each level of analysis.',
          core: 'Students analyse independently in pairs.',
          stretch: 'Students consider how the quotation would have been received by its original audience compared to a modern reader.',
        },
        resources: ['Key quotations slide', 'Mini-whiteboards', 'Sentence starters (support tier)'],
      },
      {
        title: 'Personal Response Writing',
        duration: '10 minutes',
        instructions:
          'Students write a personal response paragraph: "Which poem affected you more strongly and why? Use specific evidence from the poem to support your response." Teacher models the opening sentence, demonstrating how to combine personal response with analytical vocabulary: "Owen\'s brutal imagery of suffering in \'Exposure\' affected me more powerfully because..." Students write independently for 8 minutes. Three share with the class.',
        differentiation: {
          support: 'Provide a sentence frame for the personal response.',
          core: 'Students write independently with evidence from the poem.',
          stretch: 'Students explain how their response might differ from someone reading the poem when it was first published.',
        },
        resources: ['Exercise books', 'Poems (for reference)'],
      },
    ],
    plenaryActivity: {
      title: 'Context Connection',
      duration: '5 minutes',
      instructions:
        'Exit question: "Why does knowing the historical context of a conflict poem matter? How does it change your reading?" Students write two sentences and share with a partner. Teacher collects three responses and links to the next lesson: comparison will deepen our understanding further.',
      differentiation: {
        support: 'Provide a sentence starter: "Context matters because..."',
        core: 'Students articulate independently.',
        stretch: 'Students consider whether a poem can be fully understood without knowing its context.',
      },
    },
    homework:
      'Research the historical context of one of the poems studied today. Write five facts about the conflict it describes and explain how knowing this changes or deepens your understanding of the poem.',
    worksheetQuestions: [
      {
        question: 'What is "juxtaposition"? Give an example from one of the conflict poems studied today.',
        lines: 4,
        modelAnswer:
          'Juxtaposition is placing two contrasting ideas, images, or words close together to highlight their differences. An example from conflict poetry might be the contrast between the beauty of nature and the horror of war, which emphasises the destruction caused by conflict.',
        marks: 3,
      },
      {
        question: 'Why might a poet use irony when writing about war? Give an example from today\'s lesson.',
        lines: 4,
        modelAnswer:
          'A poet might use irony to challenge the gap between how war is presented (glorious, noble, heroic) and the reality of suffering and death. Irony exposes the lies told about war and makes the reader question propaganda. An appropriate example should be provided from the studied poems.',
        marks: 4,
      },
      {
        question: 'Choose one quotation from either poem. Write a paragraph analysing how it presents the reality of conflict.',
        lines: 6,
        modelAnswer:
          'The paragraph should follow PEEL structure, embed the quotation, identify the technique, explain the literal and deeper meaning, and connect the analysis to the poet\'s purpose in presenting the reality of conflict. Conceptual vocabulary should be used.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Conflict poetry can be emotionally affecting — be aware of students who may have personal connections to war or conflict. Handle the topic with sensitivity.',
      'Historical context is not optional decoration — it is essential for understanding why these poems were written and what they were responding to.',
      'The personal response activity teaches students that analysis and personal engagement are not opposites — the best responses combine both.',
      'Choose poems that represent different perspectives on conflict, not just Western front poetry.',
    ],
    targetedSkills: [
      'Poetry Reading',
      'Contextual Understanding',
      'Language Analysis',
      'Personal Response',
      'Close Reading',
    ],
  },

  // ── Lesson 22: Reading & Discussion — Shakespeare and Conflict ─────────────
  {
    id: 'ks3-cur-22-shakespeare-conflict',
    title: 'Shakespeare and Conflict: Exploring Power and Language',
    text: 'Year 8 Term 2: Conflict Poetry & Shakespeare',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Read and understand a Shakespeare extract about conflict or power (8R.1)',
      'Analyse Shakespeare\'s use of language to present conflict between characters (8R.3)',
      'Discuss how Shakespeare\'s presentation of conflict connects to conflict poetry themes (8R.5)',
      'Develop confidence in reading and interpreting Shakespearean language (8R.2)',
    ],
    successCriteria: [
      'I can understand the meaning of a Shakespeare extract with support from glossary and context',
      'I can identify how Shakespeare uses language techniques to convey conflict',
      'I can make connections between Shakespeare\'s presentation of conflict and the conflict poetry studied',
      'I can read Shakespeare aloud with confidence and expression',
    ],
    keywords: [
      'soliloquy',
      'dramatic irony',
      'rhetoric',
      'iambic pentameter',
      'blank verse',
      'prose',
      'power',
      'ambition',
    ],
    starterActivity: {
      title: 'Shakespeare Translation Challenge',
      duration: '8 minutes',
      instructions:
        'Display five short Shakespearean phrases or sentences with a glossary of difficult words. Students work in pairs to "translate" each into modern English. Teacher reveals the meanings, praising accurate translations and correcting misunderstandings. Key message: Shakespeare is not a foreign language — it is English, and with practice, it becomes accessible. The key is slowing down and using context clues.',
      differentiation: {
        support: 'Provide a glossary with all difficult words defined and a partially completed translation.',
        core: 'Students use the glossary to translate independently.',
        stretch: 'Students attempt to translate before checking the glossary, using context clues alone.',
      },
      resources: ['Shakespeare phrases slide with glossary'],
    },
    mainActivities: [
      {
        title: 'Shared Reading: Shakespeare Conflict Extract',
        duration: '20 minutes',
        instructions:
          'Teacher reads a Shakespeare extract aloud (e.g., a speech about conflict, power, or ambition from a play studied at KS3 level). Teacher pauses to explain unfamiliar language, using the glossary and modern paraphrasing. Students follow on copies with glossary notes in the margin. After the first reading, teacher re-reads and students annotate: circle words or phrases about power, underline words about conflict, highlight language techniques. Teacher models analysing two key quotations, showing how Shakespeare uses metaphor, imagery, and rhetoric to convey ideas about power and conflict.',
        differentiation: {
          support: 'Provide a heavily glossed extract with modern English paraphrase alongside the original.',
          core: 'Students use the standard glossary and annotate independently after the modelled analysis.',
          stretch: 'Students analyse the verse form — how does Shakespeare use iambic pentameter or shifts to prose to convey meaning?',
        },
        resources: ['Shakespeare extract (with marginal glossary)', 'Heavily glossed version (support tier)'],
      },
      {
        title: 'Making Connections: Shakespeare and Conflict Poetry',
        duration: '18 minutes',
        instructions:
          'Students work in groups of three to create a comparison grid: Shakespeare vs. Conflict Poetry. Categories: How is conflict presented? What language techniques are used? What is the writer\'s attitude to power? What themes are shared? Students complete the grid using evidence from both the Shakespeare extract and the conflict poems studied in Lesson 21. Each group presents one key finding to the class. Teacher synthesises: despite the centuries between them, these writers share concerns about power, conflict, and human nature.',
        differentiation: {
          support: 'Provide a partially completed comparison grid with one example per category.',
          core: 'Students complete the grid independently in groups.',
          stretch: 'Groups consider how the historical and cultural contexts differ and whether this changes the meaning of shared themes.',
        },
        resources: ['Comparison grid handout', 'Shakespeare extract and conflict poems for reference'],
      },
      {
        title: 'Performance Reading',
        duration: '8 minutes',
        instructions:
          'In groups of three, students rehearse reading 8-10 lines of the Shakespeare extract aloud with expression. They should consider: pace, emphasis, tone, and pauses. Two groups perform for the class. Teacher and class discuss: how did the performance help convey the meaning of the language?',
        differentiation: {
          support: 'Provide a performance script with suggested pauses and emphases marked.',
          core: 'Students decide on performance choices independently.',
          stretch: 'Students perform and then explain the reasoning behind their performance choices — why did they emphasise specific words?',
        },
        resources: ['Extract copies', 'Performance script (support tier)'],
      },
    ],
    plenaryActivity: {
      title: 'One Line Analysis',
      duration: '6 minutes',
      instructions:
        'Each student chooses one line from the Shakespeare extract and writes a sentence analysing its effect. Share in a quick whip-round. Teacher praises effective analysis and corrects any misunderstandings about meaning. Exit question: "What surprised you about reading Shakespeare today?"',
      differentiation: {
        support: 'Students can choose from three pre-selected lines with guiding questions.',
        core: 'Students choose and analyse independently.',
        stretch: 'Students analyse how the chosen line connects to a theme in the conflict poetry.',
      },
    },
    homework:
      'Learn 4-6 lines from the Shakespeare extract by heart. Be prepared to recite them in the next lesson and explain what they mean in your own words.',
    worksheetQuestions: [
      {
        question: 'What is a soliloquy? Why might Shakespeare use a soliloquy to explore a character\'s feelings about conflict?',
        lines: 4,
        modelAnswer:
          'A soliloquy is when a character speaks their thoughts aloud to the audience while alone on stage. Shakespeare uses soliloquies to give the audience direct access to a character\'s inner turmoil, doubts, or motivations. In scenes of conflict, this allows the audience to understand the personal cost of power struggles beyond what characters reveal to each other.',
        marks: 3,
      },
      {
        question: 'Identify one similarity and one difference between how Shakespeare and a modern conflict poet present the theme of power.',
        lines: 5,
        modelAnswer:
          'A similarity might be that both use imagery of violence and destruction to show the consequences of power. A difference might be in form — Shakespeare uses dramatic verse spoken by a character within a play, while the conflict poet speaks directly to the reader through lyric poetry. The different forms create different kinds of engagement.',
        marks: 4,
      },
      {
        question: 'Choose one quotation from the Shakespeare extract. Explain what it means in your own words and analyse how the language creates a specific effect.',
        lines: 6,
        modelAnswer:
          'The answer should accurately paraphrase the quotation, identify a language technique, and explain the effect on the audience. The analysis should go beyond surface meaning to explore what the language reveals about the character, theme, or dramatic situation.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Shakespeare can be intimidating for Year 8 students — normalise difficulty and celebrate effort. The glossary and paraphrase support are essential.',
      'The performance reading is a powerful way to build confidence — it makes Shakespeare feel alive rather than like a puzzle to decode.',
      'The comparison with conflict poetry shows students that literature across centuries explores similar human concerns — this is a key insight.',
      'Choose a Shakespeare extract that is genuinely about conflict or power, not just any extract. The thematic connection to the unit must be clear.',
    ],
    targetedSkills: [
      'Shakespeare Reading',
      'Language Analysis',
      'Comparative Thinking',
      'Performance Skills',
      'Contextual Understanding',
    ],
  },

  // ── Lesson 23: Writing — Comparative Essay: Poetry and Shakespeare ─────────
  {
    id: 'ks3-cur-23-comparative-writing',
    title: 'Comparative Writing: Conflict Poetry and Shakespeare',
    text: 'Year 8 Term 2: Conflict Poetry & Shakespeare',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Write a comparative analytical essay exploring the theme of conflict across poetry and Shakespeare (8W.2)',
      'Structure a comparison essay with integrated analysis of both texts (8W.4)',
      'Use subject-specific terminology for both poetry and drama analysis (8W.5)',
      'Apply accurate SPAG with a focus on semi-colon usage for balanced sentences (8G.1)',
    ],
    successCriteria: [
      'I can write an integrated comparison that discusses both texts within each paragraph',
      'I can use terminology appropriate to both poetry (imagery, enjambment) and drama (soliloquy, rhetoric)',
      'I can analyse how the same theme is presented differently across different literary forms',
      'I can use semi-colons to create balanced sentences that express comparison',
    ],
    keywords: [
      'comparative',
      'integrated',
      'form',
      'genre',
      'semi-colon',
      'balanced sentence',
      'thesis',
      'synthesis',
    ],
    starterActivity: {
      title: 'Semi-Colon Masterclass',
      duration: '8 minutes',
      instructions:
        'Teacher explicitly teaches the semi-colon for comparison: it joins two related independent clauses and is perfect for balanced comparative sentences. Display three examples: "Owen presents conflict as brutal and dehumanising; Shakespeare, by contrast, presents it as a path to power and glory." Students practise writing three semi-colon sentences comparing the texts studied. Teacher checks and corrects. This SPAG skill will be applied throughout the main writing activity.',
      differentiation: {
        support: 'Provide a sentence frame with the semi-colon position marked: "[Text A point]; [Text B contrast]."',
        core: 'Students write three semi-colon sentences independently.',
        stretch: 'Students use the semi-colon within a complex sentence that also contains a subordinate clause.',
      },
      resources: ['Semi-colon examples slide', 'Practice sentences handout'],
    },
    mainActivities: [
      {
        title: 'Teacher Model: Integrated Comparison Paragraph',
        duration: '15 minutes',
        instructions:
          'Teacher models writing one comparison paragraph that integrates analysis of a conflict poem and the Shakespeare extract. The question: "Compare how the theme of conflict is presented in [poem] and [Shakespeare extract]." Teacher demonstrates: a thesis-driven topic sentence addressing both texts, embedded evidence from both texts within the same paragraph, analysis of how each writer uses form and language differently to convey the same theme, a semi-colon sentence for balanced comparison, and a synthesis link that draws the comparison together. Students copy and annotate, identifying the key structural moves.',
        differentiation: {
          support: 'Students copy and annotate with teacher guidance.',
          core: 'Students annotate independently and plan their first paragraph.',
          stretch: 'Students suggest how the model could be improved — is there a deeper comparison or a more nuanced argument?',
        },
        resources: ['Visualiser or whiteboard', 'Both texts for reference'],
      },
      {
        title: 'Extended Comparative Writing',
        duration: '30 minutes',
        instructions:
          'Students write a comparative essay: Introduction (state your thesis about how conflict is presented across both texts) + two comparison paragraphs (each addressing a different aspect of the theme, both texts discussed in each) + brief conclusion. Progress guide on the board. Teacher circulates, focusing feedback on integration (are students writing about both texts together, or slipping into two separate analyses?). SPAG focus: students must include at least two semi-colon sentences.',
        differentiation: {
          support: 'Provide a writing frame with sentence starters and a terminology bank covering both poetry and drama terms.',
          core: 'Students write independently using the progress guide.',
          stretch: 'Students write a third paragraph comparing how the different forms (lyric poetry vs. dramatic verse) shape the presentation of conflict, and an evaluative conclusion.',
        },
        resources: ['Exercise books', 'Writing frame (support tier)', 'Terminology bank', 'Both texts'],
      },
    ],
    plenaryActivity: {
      title: 'Semi-Colon Check and Share',
      duration: '7 minutes',
      instructions:
        'Students highlight every semi-colon in their essay. Are they used correctly? Teacher reads three student semi-colon sentences aloud (with permission) and the class evaluates whether they are used correctly and effectively. Students set a SPAG target for their homework revision.',
      differentiation: {
        support: 'Teacher provides individual feedback on semi-colon usage.',
        core: 'Students self-check and correct.',
        stretch: 'Students explain the grammatical rule for semi-colon usage in their own words.',
      },
    },
    homework:
      'Revise your comparative essay. Add one more piece of evidence to each paragraph if possible. Check all semi-colons are used correctly. Write a brief conclusion if you did not finish one in class.',
    worksheetQuestions: [
      {
        question: 'What does "integrated comparison" mean? How is it different from writing about each text separately?',
        lines: 4,
        modelAnswer:
          'An integrated comparison discusses both texts within the same paragraph, using comparative connectives and semi-colons to draw out similarities and differences directly. Writing about each text separately fails to demonstrate the ability to compare — it produces two separate analyses rather than a genuine comparison.',
        marks: 3,
      },
      {
        question: 'Write a semi-colon sentence comparing how the conflict poem and the Shakespeare extract present the theme of power.',
        lines: 3,
        modelAnswer:
          'Example: "The conflict poet presents power as destructive and dehumanising, stripping soldiers of their agency; Shakespeare, however, presents power as a corrupting ambition that consumes the individual who pursues it." The semi-colon correctly joins two related independent clauses.',
        marks: 3,
      },
      {
        question: 'Why does comparing texts from different literary forms (poetry and drama) deepen our understanding of a shared theme?',
        lines: 5,
        modelAnswer:
          'Comparing different forms shows us that the same theme can be explored in multiple ways. Poetry often conveys a personal, concentrated emotional response, while drama shows conflict through dialogue, action, and character interaction. Seeing the same theme through different lenses deepens our understanding of its complexity and universality.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Integration is the hardest comparison skill — expect students to struggle and prepare to re-model during circulation.',
      'The semi-colon focus is a practical, memorable SPAG skill that students can apply immediately and see the impact in their writing.',
      'Choose texts that share a genuine thematic connection — forced comparisons produce weak writing.',
      'Collect essays for marking. Feedback should prioritise integration and depth of comparison.',
    ],
    targetedSkills: [
      'Comparative Essay Writing',
      'Integrated Analysis',
      'Semi-Colon Usage',
      'Cross-Form Comparison',
      'Academic Writing',
    ],
  },

  // ── Lesson 24: Application — Guided Independent Comparison ─────────────────
  {
    id: 'ks3-cur-24-comparison-application',
    title: 'Applying Comparison Skills: Independent Practice',
    text: 'Year 8 Term 2: Conflict Poetry & Shakespeare',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Apply comparative analysis skills to a new pairing of texts with increased independence (8W.2)',
      'Plan and execute a comparison essay under semi-guided conditions (8W.4)',
      'Self-assess and refine analytical writing before submission (8W.6)',
      'Demonstrate confident use of both poetry and drama terminology (8W.5)',
    ],
    successCriteria: [
      'I can independently plan and write a comparison of two texts on the theme of conflict',
      'I can maintain an integrated comparison structure throughout',
      'I can use terminology from both poetry and drama confidently and accurately',
      'I can self-assess my work and make at least one specific improvement before submitting',
    ],
    keywords: [
      'independence',
      'application',
      'refinement',
      'accuracy',
      'fluency',
      'self-assessment',
      'improvement',
      'confidence',
    ],
    starterActivity: {
      title: 'Text Selection and Quick Annotation',
      duration: '10 minutes',
      instructions:
        'Provide students with a new conflict poem they have not analysed in depth (but have encountered during reading). Students read it twice and make quick annotations: key techniques, tone, themes, one strong quotation. They will compare this poem with the Shakespeare extract in their essay. This is a speed annotation task — students should apply the reading strategies learned throughout the unit without teacher modelling.',
      differentiation: {
        support: 'Provide two or three guiding annotation questions in the margin of the poem.',
        core: 'Students annotate independently using practised strategies.',
        stretch: 'Students identify how this poem connects to and differs from the other conflict poems studied in the unit.',
      },
      resources: ['New conflict poem (printed, double-spaced)', 'Shakespeare extract (from Lesson 22)'],
    },
    mainActivities: [
      {
        title: 'Independent Planning',
        duration: '8 minutes',
        instructions:
          'Students plan their comparison essay independently. The question: "Compare how [new poem] and [Shakespeare extract] present the theme of conflict." Students plan using their preferred method from the unit. Teacher does not provide a planning template — this tests whether students can plan effectively without scaffolding.',
        differentiation: {
          support: 'Allow access to the planning template from previous lessons if requested.',
          core: 'Students plan independently without scaffolding.',
          stretch: 'Students plan a response with a nuanced thesis that acknowledges both similarities and differences in how the texts treat conflict.',
        },
        resources: ['Exercise books', 'Both texts'],
      },
      {
        title: 'Independent Comparative Writing',
        duration: '30 minutes',
        instructions:
          'Students write their comparison essay. Minimum: introduction + two integrated comparison paragraphs. This is semi-independent — teacher circulates and provides brief verbal feedback to students who are struggling, but does not model or teach new content. The focus is on application of everything learned in the unit. Time checks at 10 and 20 minutes.',
        differentiation: {
          support: 'Teacher provides brief verbal prompts if students are stuck, and allows access to the terminology bank.',
          core: 'Students write independently.',
          stretch: 'Students include an evaluative paragraph and aim for 500+ words.',
        },
        resources: ['Lined paper or exercise books', 'Both texts', 'Terminology bank (support tier)'],
      },
      {
        title: 'Self-Assessment and Improvement',
        duration: '8 minutes',
        instructions:
          'Students re-read their essay and self-assess against the success criteria. They must identify one specific improvement and make it in a different coloured pen so it is visible. The improvement could be: adding a piece of evidence, strengthening analysis, fixing a SPAG error, or adding a semi-colon sentence. Teacher asks three students to share what they improved and why.',
        differentiation: {
          support: 'Provide the success criteria as a checklist with tick boxes.',
          core: 'Students self-assess and improve independently.',
          stretch: 'Students make two improvements and explain how each one strengthens their essay.',
        },
        resources: ['Coloured pens', 'Success criteria checklist'],
      },
    ],
    plenaryActivity: {
      title: 'Readiness Check',
      duration: '4 minutes',
      instructions:
        'Quick show of hands: "How ready do you feel for the assessment next lesson?" (1-5 fingers). Teacher identifies any students at 1-2 and offers brief reassurance. Teacher previews the assessment: "Next lesson you will write an independent comparative essay. You have all the skills you need — you demonstrated them today." Students write one thing they will revise before the assessment.',
      differentiation: {
        support: 'Teacher speaks briefly with students who rated themselves low to discuss specific support.',
        core: 'Students honestly self-evaluate.',
        stretch: 'Students identify the specific skill they will practise in their revision.',
      },
    },
    homework:
      'Revise for the assessment by re-reading your notes on conflict poetry and Shakespeare. Practise writing one comparison paragraph from memory. Bring your best analytical vocabulary ready for tomorrow.',
    worksheetQuestions: [
      {
        question: 'List five key terms you should use in a comparative essay on conflict poetry and Shakespeare.',
        lines: 3,
        modelAnswer:
          'Five terms might include: juxtaposition, imagery, rhetoric, soliloquy, irony, iambic pentameter, enjambment, caesura, dramatic irony, metaphor. The terms should span both poetry and drama.',
        marks: 5,
      },
      {
        question: 'What is the most important thing to remember when writing an integrated comparison?',
        lines: 3,
        modelAnswer:
          'The most important thing is to discuss both texts within the same paragraph using comparative connectives and semi-colons, rather than writing about each text separately. Every paragraph should contain evidence from both texts and draw out the comparison explicitly.',
        marks: 2,
      },
      {
        question: 'Write the opening sentence of a comparison paragraph that addresses both the new poem and the Shakespeare extract.',
        lines: 3,
        modelAnswer:
          'The sentence should make a clear comparative point about both texts, e.g., "Both [poet] and Shakespeare present conflict as fundamentally dehumanising, yet while [poet] emphasises the physical toll through visceral imagery, Shakespeare explores the psychological corruption of those who pursue power through conflict."',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This is the final practice before the assessment — resist over-scaffolding. Students need to experience independence before the assessment.',
      'The self-assessment and improvement activity is essential — it teaches students that good writing involves revision, not just first drafts.',
      'Use the readiness check to identify any students who need a brief intervention before the assessment.',
      'If a significant number of students are struggling, consider a brief recap at the start of the next lesson before the assessment begins.',
    ],
    targetedSkills: [
      'Independent Comparison',
      'Application of Skills',
      'Self-Assessment',
      'Terminology Confidence',
      'Revision',
    ],
  },

  // ── Lesson 25: Assessment — Comparative Conflict Analysis ──────────────────
  {
    id: 'ks3-cur-25-conflict-comparison-assessment',
    title: 'Assessment: Comparative Analysis — Conflict Poetry and Shakespeare',
    text: 'Year 8 Term 2: Conflict Poetry & Shakespeare',
    board: 'Edexcel',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Independently produce a comparative analytical essay on the theme of conflict (8W.2)',
      'Demonstrate integrated comparison skills across poetry and drama (8W.4)',
      'Apply all analytical skills developed in the unit: language analysis, structural analysis, contextual understanding, terminology (8W.5)',
      'Write with accuracy, sophistication, and formal register under timed conditions (8G.2)',
    ],
    successCriteria: [
      'I can write a sustained comparative essay with at least two integrated comparison paragraphs',
      'I can analyse both language and structure in each text',
      'I can use subject-specific terminology for both poetry and drama accurately',
      'I can maintain formal register, accurate SPAG, and include semi-colon sentences',
    ],
    keywords: [
      'assessment',
      'independence',
      'comparison',
      'sustained',
      'terminology',
      'integration',
      'formal register',
      'timed',
    ],
    starterActivity: {
      title: 'Assessment Preparation',
      duration: '10 minutes',
      instructions:
        'Display the assessment question and the two texts (a conflict poem and the Shakespeare extract). Students read both texts and plan their response for 10 minutes. No teacher guidance on content. Students produce a written plan with key quotations noted.',
      differentiation: {
        support: 'Allow access to terminology bank only.',
        core: 'Full independence.',
        stretch: 'Plan a response that includes contextual analysis and an evaluative conclusion.',
      },
      resources: ['Assessment texts (printed, clean copies)', 'Terminology bank (support tier only)'],
    },
    mainActivities: [
      {
        title: 'Independent Comparative Essay',
        duration: '40 minutes',
        instructions:
          'Students write their comparative essay independently under timed, quiet conditions. No teacher feedback during writing. Time checks at 15, 25, and 35 minutes. Minimum: introduction + two integrated comparison paragraphs + brief conclusion. Final five minutes for proofreading.',
        differentiation: {
          support: 'Allow access to terminology bank. Minimum: introduction + two paragraphs.',
          core: 'Full independence. Introduction + two paragraphs + conclusion.',
          stretch: 'Three integrated paragraphs + contextual analysis + evaluative conclusion. Semi-colon sentences throughout.',
        },
        resources: ['Lined paper', 'Assessment texts', 'Terminology bank (support tier only)'],
      },
    ],
    plenaryActivity: {
      title: 'Term 2 Reflection',
      duration: '10 minutes',
      instructions:
        'Students complete a Term 2 reflection: (1) How confident are you now with comparison writing compared to the start of the term? (2) What was the most challenging skill this term? (3) What is one thing you learned about conflict from studying these texts? (4) How has your reading of Shakespeare improved? Teacher collects assessments and reflections.',
      differentiation: {
        support: 'Provide reflection sentence starters.',
        core: 'Students reflect independently.',
        stretch: 'Students write a recommendation for which texts should be studied next year and why.',
      },
    },
    homework:
      'No homework. Read for pleasure over the break.',
    worksheetQuestions: [
      {
        question: 'Write your thesis statement for this essay — one sentence that captures your main argument about how conflict is presented across both texts.',
        lines: 3,
        modelAnswer:
          'A strong thesis might be: "While both texts present conflict as a force that reveals the extremes of human nature, [poet] focuses on the suffering of those caught in war, whereas Shakespeare explores the ambition and moral corruption of those who seek power through conflict."',
        marks: 2,
      },
      {
        question: 'Which text did you find more challenging to analyse? Why?',
        lines: 3,
        modelAnswer:
          'The response should demonstrate honest self-reflection about the challenges of analysing different text types. Students might identify Shakespeare\'s language as more challenging, or might find the emotional weight of the conflict poem harder to analyse objectively.',
        marks: 2,
      },
      {
        question: 'After completing your essay, identify one paragraph you are proud of and explain why it demonstrates strong comparative analysis.',
        lines: 5,
        modelAnswer:
          'The student should identify a specific paragraph and explain what makes it effective: integrated comparison, use of both texts, specific terminology, semi-colon sentences, depth of analysis, and connection to broader themes.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This assessment should demonstrate significant progress from the start of Year 8 — look for: depth of analysis, integration, conceptual vocabulary, and confidence with Shakespeare.',
      'Compare with the Term 1 assessment to track progress. Are students writing more developed arguments? Using more sophisticated vocabulary?',
      'The reflection data is useful for Year 9 transition planning — share with the next teacher.',
      'Celebrate achievements publicly. Year 8 students responding to both poetry and Shakespeare with confidence is a significant accomplishment.',
    ],
    targetedSkills: [
      'Independent Comparative Essay',
      'Cross-Genre Analysis',
      'Terminology Application',
      'Timed Writing',
      'Reflective Practice',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 9 — TERM 1: A CHRISTMAS CAROL
  // Themes, Context, Conceptual Interpretation — Lessons 26-30
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 26: Explicit Reading — Dickens, Context, and Character ──────────
  {
    id: 'ks3-cur-26-christmas-carol-reading',
    title: 'A Christmas Carol: Dickens, Victorian Context, and Scrooge',
    text: 'Year 9 Term 1: A Christmas Carol',
    board: 'Edexcel',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Read the opening of A Christmas Carol with fluency and understanding of Dickens\'s style (9R.1)',
      'Understand the Victorian social context and Dickens\'s purpose in writing the novella (9R.5)',
      'Analyse how Dickens presents Scrooge as a symbol of Victorian greed and selfishness (9R.3)',
      'Begin to develop conceptual interpretations that connect text to context (9R.6)',
    ],
    successCriteria: [
      'I can explain at least three aspects of Victorian society that influenced Dickens\'s writing',
      'I can identify how Dickens uses language to present Scrooge negatively in the opening',
      'I can begin to explain Scrooge as a symbol rather than just a character',
      'I can use contextual knowledge to deepen my analysis of the text',
    ],
    keywords: [
      'Victorian',
      'workhouse',
      'Malthusian',
      'capitalism',
      'allegory',
      'symbol',
      'didactic',
      'redemption',
    ],
    starterActivity: {
      title: 'Victorian Poverty Gallery Walk',
      duration: '8 minutes',
      instructions:
        'Display six images or facts about Victorian poverty on the walls of the classroom (workhouses, child labour, wealth gap, the Poor Law, Dickens\'s own childhood, social reform movements). Students walk around the room reading/viewing each station and note three things that shock or surprise them. Teacher gathers responses and explains: "Dickens lived in this world. He saw this poverty firsthand. A Christmas Carol was his response." Introduce key vocabulary: workhouse, Malthusian economics, capitalism, didactic (a text that teaches a moral lesson).',
      differentiation: {
        support: 'Provide a gallery walk recording sheet with guided questions for each station.',
        core: 'Students record observations independently and make connections.',
        stretch: 'Students consider: why might Dickens have chosen fiction rather than non-fiction to campaign for social change?',
      },
      resources: ['Gallery walk stations (printed images/facts, x6)', 'Recording sheet (support tier)'],
    },
    mainActivities: [
      {
        title: 'Teacher-Led Reading: Stave One Opening',
        duration: '18 minutes',
        instructions:
          'Teacher reads the opening of Stave One aloud, modelling expressive reading and pausing to explain Dickens\'s narrative voice (irony, humour, direct address to the reader). Students follow on copies and annotate. Teacher focuses on the descriptions of Scrooge, modelling analysis of three key quotations: how does each one present Scrooge? What techniques does Dickens use? What impression is created for the Victorian reader? Key concepts introduced: Dickens uses Scrooge as a symbol of everything wrong with Victorian attitudes to the poor. He is not just a character — he represents an ideology that Dickens wants to challenge.',
        differentiation: {
          support: 'Pre-highlight three key quotations and provide annotation prompts for each.',
          core: 'Students annotate independently, focusing on Dickens\'s presentation of Scrooge.',
          stretch: 'Students analyse Dickens\'s narrative voice — how does the narrator\'s tone towards Scrooge guide the reader\'s response?',
        },
        resources: ['A Christmas Carol Stave One extract (printed copies)', 'Annotation prompts (support tier)'],
      },
      {
        title: 'Conceptual Analysis: Scrooge as Symbol',
        duration: '18 minutes',
        instructions:
          'Teacher introduces the concept of reading characters as symbols or representatives of ideas. Scrooge is not just a miserly old man — he represents Victorian capitalism\'s disregard for the poor. Students create a dual-layer analysis chart: one column for "Character" (what Scrooge does, says, and is described as) and one column for "Symbol" (what this represents about Victorian society). Students find at least three quotations and complete both columns. Teacher models the first example, then students work in pairs. Share and discuss: how does Dickens use Scrooge to make a political argument?',
        differentiation: {
          support: 'Provide the chart template with the first example completed and guided prompts for the next two.',
          core: 'Students complete the chart independently in pairs.',
          stretch: 'Students consider Scrooge\'s statement "Are there no prisons? Are there no workhouses?" — what does this reveal about Malthusian attitudes, and why does Dickens include it?',
        },
        resources: ['Dual-layer analysis chart', 'Extract', 'Contextual reference sheet'],
      },
      {
        title: 'Vocabulary and Context Cards',
        duration: '10 minutes',
        instructions:
          'Students create context cards for this unit: eight vocabulary words, each with a definition, a connection to A Christmas Carol, and a connection to Victorian society. Words: Victorian, workhouse, Malthusian, capitalism, allegory, symbol, didactic, redemption. These cards will be used throughout the unit as revision tools. Teacher quizzes three words orally to check understanding.',
        differentiation: {
          support: 'Provide pre-printed definitions; students add the connections.',
          core: 'Students create full cards from the lesson content.',
          stretch: 'Students add a quotation from the text that connects to each vocabulary word.',
        },
        resources: ['Card stock or vocabulary log', 'Definitions reference slide'],
      },
    ],
    plenaryActivity: {
      title: 'Contextual Connection',
      duration: '6 minutes',
      instructions:
        'Exit question: "Why is A Christmas Carol a political text as well as a story? How does knowing the Victorian context change how you read it?" Students write three sentences. Share with a partner. Three share with the class. Teacher reinforces: context is not decoration — it is essential for understanding Dickens\'s purpose.',
      differentiation: {
        support: 'Provide a sentence starter: "Knowing about Victorian society changes my reading because..."',
        core: 'Students write independently.',
        stretch: 'Students consider whether the novel\'s message about poverty is still relevant today and why.',
      },
    },
    homework:
      'Read the rest of Stave One at home. Write five bullet points summarising the key events and three quotations that reveal something about Scrooge\'s character. For each quotation, write one sentence about what it symbolises.',
    worksheetQuestions: [
      {
        question: 'What does "didactic" mean? Why is A Christmas Carol considered a didactic text?',
        lines: 4,
        modelAnswer:
          'Didactic means designed to teach a moral lesson. A Christmas Carol is didactic because Dickens wrote it to change Victorian attitudes towards the poor. Through Scrooge\'s transformation, Dickens teaches the reader that greed is destructive, generosity is redemptive, and society has a responsibility to care for its most vulnerable members.',
        marks: 3,
      },
      {
        question: 'What is an allegory? How might A Christmas Carol be read as an allegory for Victorian society?',
        lines: 5,
        modelAnswer:
          'An allegory is a story in which characters and events represent broader ideas or concepts. A Christmas Carol can be read as an allegory for Victorian society: Scrooge represents the wealthy who ignore poverty, the Cratchit family represents the deserving poor who suffer despite their virtue, and the Ghosts represent the forces of moral awakening that Dickens hopes will transform society.',
        marks: 4,
      },
      {
        question: 'Choose one quotation from the opening that presents Scrooge negatively. Analyse the language and explain what Scrooge symbolises.',
        lines: 6,
        modelAnswer:
          'The analysis should identify a specific quotation, analyse the language at word level (connotation, imagery, technique), explain the impression created of Scrooge as a character, and then extend to explain what he represents or symbolises about Victorian attitudes. Contextual knowledge should be woven into the analysis.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson establishes the conceptual approach that Year 9 students need for GCSE preparation — reading characters as symbols and connecting text to context.',
      'The gallery walk is an active way to introduce context without lecturing. Students engage more deeply when they discover the context themselves.',
      'Dickens\'s language can be challenging for some students — use the glossary and paraphrase approach from the Shakespeare unit.',
      'The dual-layer analysis chart is a key tool that should be used throughout the unit. It trains students to think beyond character as individual to character as representative.',
      'This is a GCSE set text — the analytical skills developed here are directly transferable to Year 10 and 11.',
    ],
    targetedSkills: [
      'Contextual Analysis',
      'Symbolic Reading',
      'Language Analysis',
      'Vocabulary Acquisition',
      'Conceptual Interpretation',
    ],
  },

  // ── Lesson 27: Reading & Discussion — Themes of Redemption and Responsibility
  {
    id: 'ks3-cur-27-christmas-carol-themes',
    title: 'A Christmas Carol: Redemption, Responsibility, and Social Change',
    text: 'Year 9 Term 1: A Christmas Carol',
    board: 'Edexcel',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Analyse how Dickens develops the themes of redemption and social responsibility across the novella (9R.4)',
      'Evaluate how Scrooge\'s transformation serves Dickens\'s didactic purpose (9R.6)',
      'Discuss the relationship between individual change and social change in the text (9S.1)',
      'Develop conceptual arguments about the text\'s message and significance (9R.5)',
    ],
    successCriteria: [
      'I can trace the theme of redemption across the novella using evidence from multiple staves',
      'I can explain how Scrooge\'s transformation supports Dickens\'s message about social responsibility',
      'I can construct a conceptual argument about the text in discussion and writing',
      'I can evaluate whether Dickens\'s message is optimistic or naive about the possibility of change',
    ],
    keywords: [
      'redemption',
      'transformation',
      'social responsibility',
      'catalyst',
      'moral awakening',
      'collective responsibility',
      'epiphany',
      'didactic',
    ],
    starterActivity: {
      title: 'Scrooge\'s Journey: Before and After',
      duration: '7 minutes',
      instructions:
        'Display two quotations about Scrooge side by side: one from Stave One (miserly, cold, isolated) and one from Stave Five (generous, warm, connected). Students write three sentences explaining the change. Then teacher asks: "Is this change believable? Is it too neat? What is Dickens trying to show by making the change so dramatic?" Students discuss in pairs. Teacher introduces the lesson focus: we will explore the themes of redemption and responsibility and evaluate Dickens\'s message.',
      differentiation: {
        support: 'Provide sentence starters for the comparison.',
        core: 'Students compare and question independently.',
        stretch: 'Students consider what the speed of Scrooge\'s transformation tells us about Dickens\'s view of human nature.',
      },
      resources: ['Before and after quotations slide'],
    },
    mainActivities: [
      {
        title: 'Theme Tracking: Redemption Across the Staves',
        duration: '18 minutes',
        instructions:
          'Students complete a theme tracking grid, finding evidence for the theme of redemption in each stave. For each stave: key quotation, what stage of transformation Scrooge is at, what Dickens is teaching the reader. Teacher models the first stave entry, then students work independently or in pairs. Whole-class discussion: how does Dickens structure the novella to create a satisfying redemption arc? What is the role of each Ghost as a catalyst for change?',
        differentiation: {
          support: 'Provide the grid with stave summaries and one quotation per stave already filled in.',
          core: 'Students complete the grid independently using their knowledge and the text.',
          stretch: 'Students analyse Dickens\'s structural choice of five staves — how does this mirror a five-act play and why?',
        },
        resources: ['Theme tracking grid', 'Full text or extract booklet'],
      },
      {
        title: 'Socratic Seminar: Is Dickens Optimistic or Naive?',
        duration: '20 minutes',
        instructions:
          'Arrange desks in a circle for a Socratic seminar. Central question: "Is Dickens optimistic or naive in suggesting that one night can transform a person — and that individual change can solve social problems?" Teacher facilitates but does not dominate. Rules: speakers must reference the text, build on or challenge previous contributions, and use tentative language. Students must contribute at least once. Teacher tracks contributions. After the seminar, students write a personal response: where do they stand on the question, and why?',
        differentiation: {
          support: 'Provide three pre-prepared talking points with quotation evidence that students can use.',
          core: 'Students prepare their own contributions and engage independently.',
          stretch: 'Students draw on wider reading or knowledge of Victorian history to support their arguments.',
        },
        resources: ['Socratic seminar rules card', 'Talking points (support tier)', 'Text for reference'],
      },
      {
        title: 'Written Response: Conceptual Argument',
        duration: '10 minutes',
        instructions:
          'Students write a paragraph presenting their conceptual argument about the text\'s message. Teacher provides the format: "Dickens presents redemption as [conceptual claim] because [evidence and analysis]. This serves his wider purpose of [connecting to Victorian context]." Students write independently for 8 minutes. Two share with the class. Teacher praises arguments that integrate text analysis with contextual understanding.',
        differentiation: {
          support: 'Provide the sentence structure as a frame.',
          core: 'Students construct their argument independently.',
          stretch: 'Students present an argument and then a counter-argument within the same paragraph.',
        },
        resources: ['Exercise books'],
      },
    ],
    plenaryActivity: {
      title: 'Key Quotation Selection',
      duration: '5 minutes',
      instructions:
        'Students select the single most important quotation for understanding the theme of redemption in the novella. They write it on a card with a one-sentence explanation of why it is the most important. Cards are collected and used to create a class display. Teacher selects three diverse choices and briefly discusses why each student might have prioritised their particular quotation.',
      differentiation: {
        support: 'Students choose from a provided list of five key quotations.',
        core: 'Students select from the full text independently.',
        stretch: 'Students explain why their quotation is more important than any alternative and what would be lost without it.',
      },
    },
    homework:
      'Write a paragraph explaining whether you think Dickens\'s message about redemption and social responsibility is still relevant today. Use at least one quotation from the text and one reference to the modern world.',
    worksheetQuestions: [
      {
        question: 'What is the role of the three Ghosts in Scrooge\'s transformation? How does each one contribute to his redemption?',
        lines: 6,
        modelAnswer:
          'The Ghost of Christmas Past forces Scrooge to confront his lost innocence and the choices that made him cold. The Ghost of Christmas Present shows him the suffering his selfishness causes in the present, particularly through the Cratchit family. The Ghost of Christmas Yet to Come shows him the ultimate consequence of his path — a lonely, unmourned death. Together they provide a complete argument for change: you were not always this way, you are causing harm now, and this is where it will end.',
        marks: 5,
      },
      {
        question: 'What does Dickens mean by "social responsibility"? How does he present this idea through the novella?',
        lines: 5,
        modelAnswer:
          'Social responsibility is the idea that individuals and society have a duty to care for others, especially the vulnerable. Dickens presents this through Scrooge\'s journey from selfishness to generosity, through the contrast between the Cratchits\' love and Scrooge\'s isolation, and through direct statements like "mankind was my business" — spoken by Marley\'s ghost as a warning that neglecting others brings eternal regret.',
        marks: 4,
      },
      {
        question: 'Do you agree with Dickens that individuals can change society by changing themselves? Evaluate this idea using evidence from the text.',
        lines: 6,
        modelAnswer:
          'The answer should present a clear evaluative argument. Students might agree, citing Scrooge\'s impact on Tiny Tim and the Cratchit family as evidence that individual generosity can save lives. Or they might challenge the idea, arguing that systemic problems like Victorian poverty require more than individual charity — they require political and structural change. The strongest answers will acknowledge the complexity and consider Dickens\'s limitations alongside his achievements.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The Socratic seminar is a high-order discussion activity — establish clear norms before starting and ensure all students contribute.',
      'The question of whether Dickens is optimistic or naive is deliberately provocative — it pushes students towards evaluation and critical thinking.',
      'Contextual knowledge must be woven into analysis at Year 9, not bolted on as a separate section. Model this integration repeatedly.',
      'This lesson prepares students for GCSE-style conceptual responses. The format of "concept + evidence + context" is the foundation of top-band GCSE writing.',
    ],
    targetedSkills: [
      'Thematic Analysis',
      'Conceptual Argument',
      'Socratic Discussion',
      'Evaluative Thinking',
      'Contextual Integration',
    ],
  },

  // ── Lesson 28: Writing — GCSE-Style Analytical Writing on A Christmas Carol ─
  {
    id: 'ks3-cur-28-christmas-carol-writing',
    title: 'A Christmas Carol: GCSE-Style Analytical Writing',
    text: 'Year 9 Term 1: A Christmas Carol',
    board: 'Edexcel',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Write a GCSE-style analytical response about Dickens\'s presentation of a theme (9W.2)',
      'Develop a sustained conceptual argument across multiple paragraphs (9W.4)',
      'Integrate contextual knowledge seamlessly within analytical paragraphs (9W.3)',
      'Apply accurate SPAG with a focus on academic register and sophisticated sentence construction (9G.1)',
    ],
    successCriteria: [
      'I can write a conceptual introduction that establishes my argument about the theme',
      'I can develop a sustained argument across at least three PEEL paragraphs',
      'I can integrate contextual knowledge within my analysis, not as a separate section',
      'I can use academic register and varied, sophisticated sentence structures',
    ],
    keywords: [
      'conceptual',
      'thesis',
      'sustained argument',
      'contextual integration',
      'academic register',
      'sophisticated',
      'nuanced',
      'evaluative',
    ],
    starterActivity: {
      title: 'Conceptual Introduction Workshop',
      duration: '10 minutes',
      instructions:
        'Teacher displays two introductions to the same question. Introduction A is basic: "Dickens presents poverty as bad. He uses lots of techniques." Introduction B is conceptual: "Dickens deploys A Christmas Carol as a vehicle for social reform, weaponising the Christmas spirit to expose the moral bankruptcy of a society that tolerates the suffering of its most vulnerable members." Students discuss: what makes Introduction B more effective? Teacher identifies the key features: a conceptual claim (not plot-based), sophisticated vocabulary, a sense of the writer\'s purpose. Students draft their own conceptual introduction to the assessment question.',
      differentiation: {
        support: 'Provide a conceptual introduction frame: "Dickens uses A Christmas Carol to [purpose], presenting [theme] as [concept] in order to [effect on reader/society]."',
        core: 'Students write independently after analysing the models.',
        stretch: 'Students write an introduction that positions Dickens within the wider Victorian social reform movement.',
      },
      resources: ['Two introductions slide', 'Introduction frame (support tier)'],
    },
    mainActivities: [
      {
        title: 'Teacher Model: Contextual Integration',
        duration: '15 minutes',
        instructions:
          'Teacher models writing one analytical paragraph that seamlessly integrates context. Question: "How does Dickens present the theme of social responsibility in A Christmas Carol?" Teacher demonstrates the technique of contextual embedding: instead of a separate "context paragraph," weave context into the analysis. For example: "Scrooge\'s dismissal of the poor as candidates for the \'surplus population\' directly echoes the Malthusian economics that Dickens despised — the belief that poverty was a natural and even necessary condition. By placing this cold ideology in the mouth of his villain, Dickens exposes its inhumanity." Students copy and annotate, identifying where context is embedded.',
        differentiation: {
          support: 'Students copy, annotate with teacher guidance, and identify the three elements: text + analysis + context.',
          core: 'Students annotate independently and plan their own contextually integrated paragraph.',
          stretch: 'Students evaluate whether the contextual integration is effective or whether it interrupts the analysis.',
        },
        resources: ['Visualiser or whiteboard'],
      },
      {
        title: 'Extended Analytical Writing',
        duration: '28 minutes',
        instructions:
          'Students write a full GCSE-style response: "How does Dickens present the theme of social responsibility in A Christmas Carol? You should consider the novella as a whole and Dickens\'s use of language, structure, form, and context." Structure: conceptual introduction (written in starter) + three analytical paragraphs (each with contextual integration) + evaluative conclusion. Progress guide: 1-8 mins (refine introduction, write paragraph 1), 9-18 mins (paragraph 2), 19-25 mins (paragraph 3), 26-28 mins (conclusion + proofread). Teacher circulates, providing minimal feedback focused on contextual integration and depth of argument.',
        differentiation: {
          support: 'Provide a paragraph planning frame and contextual prompts. Allow access to key quotations list.',
          core: 'Students write independently using the progress guide.',
          stretch: 'Students write a response that considers how Dickens\'s presentation of the theme changes across the novella — a developmental argument rather than a static one.',
        },
        resources: ['Exercise books', 'Paragraph planning frame (support tier)', 'Key quotations list (support tier)', 'Text for reference'],
      },
    ],
    plenaryActivity: {
      title: 'Context Check',
      duration: '7 minutes',
      instructions:
        'Students highlight every place in their essay where they have included contextual knowledge. Is it integrated within paragraphs or bolted on as a separate sentence? Students who have bolted-on context rewrite one sentence to integrate it. Teacher reads one strong example of contextual integration aloud. Students set one target for improving their contextual integration.',
      differentiation: {
        support: 'Teacher models rewriting a bolted-on context sentence into an integrated one.',
        core: 'Students identify and improve independently.',
        stretch: 'Students explain the difference between "bolt-on" and "integrated" context and why the latter is more effective.',
      },
    },
    homework:
      'Review your essay and improve the contextual integration. Rewrite any sentences where context is bolted on so that it is woven into the analysis. Add context to any paragraph that currently lacks it.',
    worksheetQuestions: [
      {
        question: 'What is the difference between "bolt-on" context and "integrated" context in an essay? Give an example of each.',
        lines: 5,
        modelAnswer:
          'Bolt-on context is when contextual information is placed in a separate sentence or paragraph, disconnected from the analysis: "In Victorian times, there were workhouses. Scrooge mentions workhouses." Integrated context is when contextual knowledge is woven into the analytical point: "Scrooge\'s callous reference to workhouses reflects the prevailing Victorian attitude that poverty was the fault of the individual, an ideology Dickens passionately challenged." Integration is more effective because it shows how context shapes meaning.',
        marks: 4,
      },
      {
        question: 'What is a "conceptual" argument? How is it different from a "descriptive" response to a text?',
        lines: 4,
        modelAnswer:
          'A conceptual argument engages with the big ideas behind the text — what it represents, what the writer is arguing, how it reflects or challenges society. A descriptive response merely recounts what happens or identifies techniques without explaining their significance. A conceptual response to A Christmas Carol might argue that Dickens uses Scrooge\'s redemption as a model for Victorian society\'s potential moral awakening, whereas a descriptive response would simply say "Dickens uses ghosts to scare Scrooge into being nice."',
        marks: 4,
      },
      {
        question: 'Write a paragraph about Dickens\'s presentation of poverty that integrates contextual knowledge within the analysis.',
        lines: 8,
        modelAnswer:
          'The paragraph should make a clear analytical point about poverty, embed a quotation from the text, analyse the language at word level, and integrate contextual knowledge about Victorian poverty, the Poor Law, or Malthusian economics within the same sentences as the analysis. The context should illuminate the analysis, not sit alongside it.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Contextual integration is one of the most important GCSE skills — Year 9 is the time to establish it. Many students reach Year 11 still bolting on context.',
      'The conceptual introduction is a Year 9 step-up. Students who master this are well-prepared for GCSE literature.',
      'Be explicit about what "academic register" means — show examples of informal vs formal analytical writing and help students hear the difference.',
      'Collect essays for detailed marking. This is a key assessment point that shows GCSE readiness.',
    ],
    targetedSkills: [
      'GCSE-Style Writing',
      'Contextual Integration',
      'Conceptual Argument',
      'Academic Register',
      'Sustained Analysis',
    ],
  },

  // ── Lesson 29: Application — Independent Analysis Practice ─────────────────
  {
    id: 'ks3-cur-29-christmas-carol-application',
    title: 'A Christmas Carol: Independent Analytical Practice',
    text: 'Year 9 Term 1: A Christmas Carol',
    board: 'Edexcel',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Apply all analytical skills to a new question about A Christmas Carol with independence (9W.2)',
      'Demonstrate sustained conceptual argument with contextual integration (9W.4)',
      'Self-assess against GCSE-style assessment criteria (9W.6)',
      'Prepare for the assessment by practising under realistic conditions (9W.5)',
    ],
    successCriteria: [
      'I can independently plan and write a GCSE-style response on a new aspect of the text',
      'I can maintain a conceptual argument throughout my response',
      'I can integrate context, analyse language, and discuss structure within my paragraphs',
      'I can self-assess against GCSE criteria and identify specific areas for improvement',
    ],
    keywords: [
      'independence',
      'practice',
      'GCSE criteria',
      'conceptual',
      'sustained',
      'integration',
      'self-assessment',
      'improvement',
    ],
    starterActivity: {
      title: 'GCSE Criteria Familiarisation',
      duration: '8 minutes',
      instructions:
        'Display simplified GCSE assessment criteria on the board: Level 1 (basic identification), Level 2 (clear explanation with evidence), Level 3 (detailed analysis with context), Level 4 (conceptual, exploratory, and evaluative with integrated context). Students read through and teacher explains what each level looks like in practice, using brief examples. Students identify which level their previous writing was at and set a target level for today. Teacher emphasises: "Level 3-4 responses are conceptual, contextualised, and analytical. Today you will practise writing at that level."',
      differentiation: {
        support: 'Provide the criteria as a checklist with student-friendly language.',
        core: 'Students engage with the criteria independently and set an honest target.',
        stretch: 'Students identify the specific differences between Level 3 and Level 4 and what they need to do to reach the top.',
      },
      resources: ['Simplified GCSE criteria slide', 'Criteria checklist (support tier)'],
    },
    mainActivities: [
      {
        title: 'Independent Planning and Writing',
        duration: '40 minutes',
        instructions:
          'New question: "How does Dickens use the character of the Ghost of Christmas Present to convey his message about generosity and social responsibility?" Students plan (8 mins) and write (32 mins) independently. This is a full practice under near-assessment conditions. Teacher circulates silently for the first 20 minutes, then provides brief targeted feedback to individual students in the final 12 minutes. Students aim for: conceptual introduction + three analytical paragraphs with contextual integration + evaluative conclusion.',
        differentiation: {
          support: 'Allow access to the text and a key quotations prompt sheet. Minimum: introduction + two paragraphs.',
          core: 'Full independence with text access only. Introduction + three paragraphs.',
          stretch: 'Introduction + three paragraphs + conclusion. Response should trace how the theme develops through the stave, not just identify techniques.',
        },
        resources: ['Exercise books', 'Text', 'Key quotations prompt (support tier)'],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment Against GCSE Criteria',
      duration: '12 minutes',
      instructions:
        'Students re-read their response and assess it against the GCSE criteria from the starter. They colour-code their work: highlight conceptual points in green, evidence in yellow, analysis in blue, and context in pink. Students then judge their level (1-4) with a brief justification. They write two specific targets: (1) something to maintain and (2) something to improve. Teacher asks three students to share their self-assessments. Teacher provides honest, encouraging feedback on the class\'s general performance and previews the assessment.',
      differentiation: {
        support: 'Teacher provides individual support during the self-assessment process.',
        core: 'Students self-assess independently using the colour-coding system.',
        stretch: 'Students identify one specific paragraph that best demonstrates Level 4 writing and explain why.',
      },
    },
    homework:
      'Revise for the assessment. Re-read your notes, key quotations, and contextual information. Practise writing one paragraph from memory on a theme of your choice from the novella.',
    worksheetQuestions: [
      {
        question: 'What are the key features of a Level 4 (top-band) GCSE literature response?',
        lines: 4,
        modelAnswer:
          'A Level 4 response is conceptual (engages with big ideas, not just plot), exploratory (considers multiple interpretations), evaluative (makes judgements about effectiveness), analytical at word level (examines individual word choices and their connotations), and contextually integrated (context is woven into analysis, not separate). It uses academic register and sophisticated vocabulary.',
        marks: 4,
      },
      {
        question: 'How does Dickens use the Ghost of Christmas Present to challenge Scrooge\'s worldview? Use a quotation to support your answer.',
        lines: 6,
        modelAnswer:
          'The analysis should identify how the Ghost exposes Scrooge to the reality of how others live — the Cratchit family\'s warmth despite poverty, the joy of Christmas celebrations across society, and the allegorical children Ignorance and Want. A quotation should be embedded and analysed at word level, with contextual knowledge integrated into the explanation.',
        marks: 5,
      },
      {
        question: 'After self-assessing, what is your main area for improvement? Write a specific, actionable target.',
        lines: 3,
        modelAnswer:
          'The target should be specific and actionable, such as "I need to integrate context within my analytical paragraphs rather than adding it as a separate sentence" or "I need to develop my analysis beyond identifying techniques to exploring their significance and Dickens\'s purpose." Vague targets like "write better" are not acceptable.',
        marks: 2,
      },
    ],
    teacherNotes: [
      'This lesson is full practice — treat it as a rehearsal for the assessment. The more realistic the conditions, the better prepared students will be.',
      'The self-assessment against GCSE criteria is crucial for developing metacognition. Students who can accurately judge their own level can take targeted action to improve.',
      'If the class is generally below Level 3, consider a brief intervention at the start of the assessment lesson to address the common issues.',
      'The colour-coding system makes the presence (or absence) of key elements visually obvious — students can literally see where context or analysis is missing.',
    ],
    targetedSkills: [
      'GCSE Practice',
      'Independent Writing',
      'Self-Assessment',
      'Conceptual Analysis',
      'Contextual Integration',
    ],
  },

  // ── Lesson 30: Assessment — A Christmas Carol Extended Essay ────────────────
  {
    id: 'ks3-cur-30-christmas-carol-assessment',
    title: 'Assessment: A Christmas Carol — Themes, Context, and Conceptual Analysis',
    text: 'Year 9 Term 1: A Christmas Carol',
    board: 'Edexcel',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Independently produce a GCSE-standard analytical essay on A Christmas Carol (9W.2)',
      'Demonstrate conceptual understanding of the text\'s themes, context, and significance (9R.6)',
      'Apply all analytical skills: language analysis, structural analysis, contextual integration, evaluative judgement (9W.4)',
      'Write with accuracy, sophistication, and sustained formal register (9G.2)',
    ],
    successCriteria: [
      'I can write a conceptual introduction that establishes a clear thesis about the text',
      'I can sustain a detailed analytical argument across at least three paragraphs',
      'I can integrate contextual knowledge within my analysis throughout',
      'I can write with accurate SPAG, academic register, and sophisticated vocabulary',
    ],
    keywords: [
      'assessment',
      'GCSE standard',
      'conceptual',
      'thesis',
      'sustained',
      'evaluative',
      'contextual integration',
      'proofreading',
    ],
    starterActivity: {
      title: 'Assessment Planning',
      duration: '10 minutes',
      instructions:
        'Display the assessment question: "How does Dickens present the theme of redemption in A Christmas Carol? In your response you should consider the novella as a whole, Dickens\'s use of language, structure, and form, and relevant context." Students plan independently for 10 minutes. No teacher guidance. Students may access the text but no notes or previous work. Plan should include: thesis statement, three paragraph focuses, key quotations, and contextual points to integrate.',
      differentiation: {
        support: 'Allow access to a key quotations prompt sheet alongside the text.',
        core: 'Full independence with text only.',
        stretch: 'Plan a response that traces the development of the theme across the novella, with a nuanced thesis that acknowledges complexity.',
      },
      resources: ['Assessment question slide', 'Text (clean copy)', 'Key quotations prompt (support tier only)'],
    },
    mainActivities: [
      {
        title: 'Independent Assessment Essay',
        duration: '40 minutes',
        instructions:
          'Students write their assessment essay independently under strict timed, quiet conditions. No teacher feedback or support during writing. Time checks at 12, 24, and 36 minutes. Expected output: conceptual introduction + three detailed analytical paragraphs with contextual integration + evaluative conclusion. Final five minutes reserved for proofreading. This assessment should demonstrate the full range of skills developed across the A Christmas Carol unit and reflect GCSE-level analytical writing.',
        differentiation: {
          support: 'Allow access to key quotations prompt and text. Minimum: introduction + two paragraphs + conclusion.',
          core: 'Full independence with text. Introduction + three paragraphs + conclusion.',
          stretch: 'Four paragraphs tracing the theme\'s development, with an evaluative conclusion that considers the text\'s lasting significance and Dickens\'s legacy.',
        },
        resources: ['Lined paper or exercise books', 'Text (clean copy)', 'Key quotations prompt (support tier only)'],
      },
    ],
    plenaryActivity: {
      title: 'KS3 Final Reflection',
      duration: '10 minutes',
      instructions:
        'Students complete a comprehensive KS3 reflection: (1) Looking back at Year 7, 8, and 9, what is the most important skill you have developed in English? (2) What text or unit did you find most valuable and why? (3) How confident are you as a reader and writer heading into GCSE? (4) What advice would you give to a Year 7 student starting KS3 English? (5) What is one goal for GCSE English? Teacher collects assessments and reflections. Final class discussion: celebrate the journey from Year 7 to Year 9 and the development students have achieved.',
      differentiation: {
        support: 'Provide reflection sentence starters for each question.',
        core: 'Students reflect independently and thoughtfully.',
        stretch: 'Students write a detailed reflection on how their analytical writing has evolved from simple PEE paragraphs in Year 7 to conceptual, contextualised analysis in Year 9.',
      },
    },
    homework:
      'No homework. Read for pleasure and begin thinking about your GCSE texts with confidence — you have the skills you need.',
    worksheetQuestions: [
      {
        question: 'Write your thesis statement for this assessment — one sentence that captures your conceptual argument about how Dickens presents redemption.',
        lines: 3,
        modelAnswer:
          'A strong thesis might be: "Dickens presents redemption not merely as Scrooge\'s personal salvation but as a blueprint for Victorian society\'s moral transformation, arguing that the capacity for change exists in even the most hardened individual — and that exercising that capacity is a social obligation, not a personal choice."',
        marks: 3,
      },
      {
        question: 'List three contextual points you will integrate into your analysis. For each, explain how it connects to the theme of redemption.',
        lines: 6,
        modelAnswer:
          'Three contextual points might include: (1) The Poor Law and workhouses — Scrooge\'s initial support for them shows his complicity in a system Dickens opposed; his rejection of this attitude is part of his redemption. (2) Dickens\'s own childhood poverty — his personal experience fuels the novella\'s emotional authenticity and moral urgency. (3) Victorian Christianity and the moral obligation of generosity — redemption in the novella mirrors religious redemption through repentance and good works.',
        marks: 6,
      },
      {
        question: 'After completing your essay, rate your response against the GCSE criteria (Level 1-4) and justify your rating with specific reference to your writing.',
        lines: 4,
        modelAnswer:
          'The self-assessment should be honest and specific, referencing particular features of their writing: "I believe my response is Level 3 because I have provided detailed analysis with embedded quotations and some contextual integration, but my argument could be more consistently conceptual — in my third paragraph I reverted to describing events rather than analysing their significance."',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This is the culminating assessment of KS3 — it should demonstrate the trajectory from Year 7 PEE paragraphs to Year 9 conceptual analysis.',
      'Mark against GCSE-aligned criteria to give students a realistic sense of where they stand as they enter Year 10.',
      'The KS3 reflection is valuable transition data — share it with the GCSE teacher during handover.',
      'Celebrate the end of KS3 English. Students who have completed this curriculum sequence have been systematically prepared for GCSE success.',
      'Data from this assessment should be compared with baseline data from Year 7 to calculate value-added across KS3.',
    ],
    targetedSkills: [
      'GCSE-Standard Writing',
      'Conceptual Analysis',
      'Contextual Integration',
      'Sustained Argument',
      'Evaluative Conclusion',
    ],
  },
];
