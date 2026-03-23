import type { CourseData, CourseModule, CourseQuiz } from './courses';

// ═══════════════════════════════════════════════════════════════════════════════
// IGCSE Literature — Drama & Prose  (Edexcel 4ET1)
// ═══════════════════════════════════════════════════════════════════════════════

const dramaProseModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — How to Approach Set Texts
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m1',
    title: 'How to Approach Set Texts',
    duration: '50 min',
    content: `
<h2>Approaching Set Texts for IGCSE Literature</h2>

<p>The Edexcel International GCSE English Literature specification (4ET1) requires you to study <strong>set texts</strong> — novels, plays, and poetry that have been selected by the exam board. Your success depends not just on knowing what happens in these texts, but on developing a <strong>critical, analytical relationship</strong> with them. This module establishes the foundational skills you will use throughout the course.</p>

<div class="key-term"><strong>Key Term: Set Text</strong> — A literary work prescribed by the exam board for detailed study. You must demonstrate close knowledge of the text in your exam responses, including specific references and quotations.</div>

<h3>Why Set Texts Matter</h3>
<p>Set texts are chosen because they offer rich opportunities for analysis. They contain complex characters, layered themes, and deliberate craft choices by the writer. The exam is not testing whether you can retell the story — it is testing whether you can <strong>analyse how and why the writer has constructed the text in a particular way</strong>, and what effects this creates for the reader or audience.</p>

<p>Think of yourself not as a passive reader but as a <strong>literary detective</strong>. Every word, image, structural choice, and character decision is a clue left by the writer. Your job is to decode these clues and explain their significance.</p>

<h3>The IGCSE Literature Assessment Objectives</h3>
<p>Every mark you earn in the exam is tied to one of four Assessment Objectives (AOs). Understanding these is essential:</p>
<ul>
  <li><strong>AO1</strong> — Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal response. Use textual references, including quotations, to support interpretations.</li>
  <li><strong>AO2</strong> — Analyse the language, form and structure used by a writer to create meanings and effects. Use relevant subject terminology where appropriate.</li>
  <li><strong>AO3</strong> — Demonstrate understanding of the relationships between texts and the contexts in which they were written.</li>
  <li><strong>AO4</strong> — Communicate clearly, effectively and imaginatively, using an appropriate register and style. Use accurate spelling, punctuation and grammar.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> AO1 and AO2 carry the most weight across the paper. Always prioritise your analysis of the writer's methods (AO2) alongside your personal interpretation (AO1). Context (AO3) should be woven into your analysis, not presented as a separate paragraph.</div>

<h3>Active Reading Strategies</h3>
<p>Passive reading — simply following the plot — will not prepare you for the exam. You need to read <strong>actively</strong>, which means engaging with the text on multiple levels simultaneously:</p>

<h4>First Read: Understanding</h4>
<p>On your first encounter with a set text, focus on comprehension. Who are the characters? What happens? What is the setting? Do not worry about analysis yet — build a solid foundation of understanding.</p>

<h4>Second Read: Annotation</h4>
<p>On your second read, annotate heavily. Mark up:</p>
<ul>
  <li><strong>Key quotations</strong> — Short, memorable phrases that capture character, theme, or mood.</li>
  <li><strong>Literary devices</strong> — Metaphors, similes, symbolism, irony, foreshadowing.</li>
  <li><strong>Structural choices</strong> — How scenes are ordered, where the climax falls, use of flashbacks or parallel scenes.</li>
  <li><strong>Shifts in tone or mood</strong> — Moments where the atmosphere changes dramatically.</li>
  <li><strong>Character development</strong> — Points where a character changes, reveals something new, or contradicts an earlier impression.</li>
</ul>

<h4>Third Read: Conceptual Thinking</h4>
<p>On your third read, start building <strong>conceptualised arguments</strong>. A conceptualised argument is an overarching interpretation that threads through your entire essay, rather than a list of disconnected points.</p>

<div class="key-term"><strong>Key Term: Conceptualised Argument</strong> — A thesis or overarching interpretation that unifies your essay. For example: "Priestley uses the Inspector as a dramatic device to expose the moral bankruptcy of capitalism" is a conceptualised argument. "The Inspector asks questions" is not.</div>

<h3>Building a Quotation Bank</h3>
<p>You will not have access to your texts in the exam (for most components), so you must memorise quotations. However, quality matters far more than quantity. Aim for <strong>10–15 short, versatile quotations</strong> per text that can be used across multiple themes and characters.</p>

<p>The best quotations are:</p>
<ul>
  <li><strong>Short</strong> — Three to eight words are ideal. You can embed them smoothly into your sentences.</li>
  <li><strong>Rich in language</strong> — They contain a metaphor, powerful verb, or striking image that you can analyse.</li>
  <li><strong>Versatile</strong> — They connect to more than one theme, so you can use them regardless of the question.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Memorising long quotations and then copying them out without analysis. A fifteen-word quotation that you cannot analyse is worth far less than a three-word phrase that you can explore in depth. Examiners reward the quality of your analysis, not the length of your quotations.</div>

<h3>From Reading to Writing: The Analysis Cycle</h3>
<p>Strong analytical writing follows a cycle. Use this framework every time you make a point:</p>
<ol>
  <li><strong>Claim</strong> — State your interpretation clearly. What is the writer doing or suggesting?</li>
  <li><strong>Evidence</strong> — Provide a quotation or specific textual reference.</li>
  <li><strong>Analysis</strong> — Examine the language, form, or structure of the evidence. What specific words or techniques create meaning?</li>
  <li><strong>Context</strong> — Where relevant, connect your point to the historical, social, or literary context.</li>
  <li><strong>Effect</strong> — Explain the impact on the reader or audience. How does this moment make us think or feel?</li>
</ol>

<p>This is not a rigid formula — the best essays move fluidly between these elements. But ensuring each paragraph touches on most of them will keep your analysis sharp and focused.</p>

<h3>Common Pitfalls to Avoid</h3>
<ul>
  <li><strong>Narrative retelling:</strong> "Macbeth kills Duncan and then becomes king" tells the examiner nothing they do not already know. Always explain <em>why</em> the writer includes a moment, not just <em>what</em> happens.</li>
  <li><strong>Feature-spotting:</strong> "Shakespeare uses a metaphor here" earns no marks on its own. You must explain <em>what</em> the metaphor means and <em>why</em> the writer chose it.</li>
  <li><strong>Ignoring the question:</strong> Every essay must respond directly to the specific question asked. Pre-learned essays that ignore the question will score poorly, even if the analysis is good.</li>
  <li><strong>Bolted-on context:</strong> "In Victorian times, women had few rights." This is not analysis — it is a history lesson. Context must be integrated into your literary argument.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Before you start writing, underline the key words in the question. If the question asks about "how the writer presents guilt", your essay must focus on the writer's methods — not just on describing guilty characters.</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m1-q1',
        question: 'What is the primary purpose of studying set texts for IGCSE Literature?',
        options: [
          'To memorise the plot so you can retell it in the exam',
          'To analyse how and why the writer has constructed the text and what effects this creates',
          'To learn historical facts about the period the text was written in',
          'To compare the set text with as many other texts as possible',
        ],
        correct: 1,
        explanation: 'The exam tests your ability to analyse the writer\'s craft — how and why they made specific choices — not your ability to retell the story. Analysis of method and effect is central to achieving high marks.',
      },
      {
        id: 'iglit-dp-m1-q2',
        question: 'Which two Assessment Objectives carry the most weight across the IGCSE Literature paper?',
        options: [
          'AO3 and AO4',
          'AO1 and AO3',
          'AO1 and AO2',
          'AO2 and AO4',
        ],
        correct: 2,
        explanation: 'AO1 (personal response with textual references) and AO2 (analysis of language, form and structure) are the most heavily weighted objectives. These should be the primary focus of your revision and essay writing.',
      },
      {
        id: 'iglit-dp-m1-q3',
        question: 'What makes a quotation "versatile" for exam purposes?',
        options: [
          'It is very long and covers an entire speech',
          'It comes from the most famous scene in the text',
          'It connects to more than one theme, so it can be used regardless of the question',
          'It contains the name of the main character',
        ],
        correct: 2,
        explanation: 'Versatile quotations connect to multiple themes and characters, meaning you can deploy them effectively no matter what question appears on the exam. Short, language-rich, multi-theme quotations are the most valuable to memorise.',
      },
      {
        id: 'iglit-dp-m1-q4',
        question: 'What is a "conceptualised argument"?',
        options: [
          'A paragraph that lists every literary device in the text',
          'An overarching thesis or interpretation that unifies the entire essay',
          'A summary of the plot written in analytical language',
          'A comparison between two different set texts',
        ],
        correct: 1,
        explanation: 'A conceptualised argument is an overarching interpretation that threads through your whole essay, giving it coherence and direction. It goes beyond listing points to present a unified, critical reading of the text.',
      },
      {
        id: 'iglit-dp-m1-q5',
        question: 'Why is "feature-spotting" a problem in Literature essays?',
        options: [
          'Examiners do not want you to identify literary devices',
          'Naming a device without explaining its meaning and effect earns no analytical marks',
          'You should only discuss plot, not techniques',
          'Feature-spotting takes too long in a timed exam',
        ],
        correct: 1,
        explanation: 'Simply identifying a metaphor or simile without analysing what it means and why the writer chose it demonstrates recognition, not analysis. Marks are awarded for explaining the effect and significance of the writer\'s choices.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Extract-Based Essay Technique
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m2',
    title: 'Extract-Based Essay Technique',
    duration: '55 min',
    content: `
<h2>Mastering the Extract-Based Essay</h2>

<p>Many questions on the Edexcel IGCSE Literature paper are <strong>extract-based</strong>. You are given a printed passage from your set text and asked to use it as a starting point for your response. This format requires a specific set of skills that differ from a purely discursive essay. Mastering extract-based technique is one of the fastest ways to improve your Literature grade.</p>

<div class="key-term"><strong>Key Term: Extract-Based Question</strong> — A question that prints a passage from the studied text and asks you to analyse it. You must refer closely to the extract but also discuss the wider text to access the highest marks.</div>

<h3>The Structure of an Extract Question</h3>
<p>A typical extract-based question will look something like this:</p>
<div class="text-extract">Read the extract from Act 3, Scene 4 of <em>Macbeth</em>.<br><br>How does Shakespeare present the theme of guilt in this extract and in the play as a whole?</div>

<p>Notice the two-part demand: <strong>"in this extract"</strong> and <strong>"in the play as a whole"</strong>. Both parts must be addressed. Candidates who only write about the extract, or who abandon the extract after the first paragraph, cannot access the top mark bands.</p>

<h3>A Recommended Approach</h3>
<p>The following structure has been refined through examiner feedback and consistently produces strong results:</p>

<h4>Step 1: Read and Annotate (5 minutes)</h4>
<p>Before writing anything, read the extract at least twice. On your second read, annotate directly on the exam paper:</p>
<ul>
  <li>Circle or underline <strong>key words and phrases</strong> that relate to the question focus.</li>
  <li>Note any <strong>literary devices</strong> — metaphors, similes, repetition, contrasts, imagery.</li>
  <li>Identify <strong>tone shifts</strong> — where the mood or attitude changes within the extract.</li>
  <li>Jot brief notes on <strong>context</strong> and <strong>wider text links</strong> in the margins.</li>
</ul>

<h4>Step 2: Plan (3–5 minutes)</h4>
<p>Sketch a brief plan with 4–5 main points. A strong plan might look like this:</p>
<ol>
  <li><strong>Opening paragraph:</strong> Thesis statement responding directly to the question. Establish your conceptualised argument.</li>
  <li><strong>Extract point 1:</strong> Close analysis of a key moment in the extract.</li>
  <li><strong>Extract point 2 + wider text link:</strong> Another moment from the extract, connected to a relevant scene elsewhere.</li>
  <li><strong>Wider text point 1:</strong> A significant moment from elsewhere that develops the theme.</li>
  <li><strong>Wider text point 2 + conclusion:</strong> A final point that draws your argument together.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best responses do not treat the extract and the wider text as separate halves of the essay. Instead, they weave between the two, using the extract as an anchor while ranging across the text to build a cohesive argument.</div>

<h4>Step 3: Write the Opening (2–3 minutes)</h4>
<p>Your opening paragraph should do three things:</p>
<ul>
  <li>Respond directly to the question — do not waste time with generic introductions.</li>
  <li>Establish your <strong>conceptualised argument</strong> — the overarching interpretation you will develop.</li>
  <li>Briefly situate the extract — where it falls in the text and why this matters.</li>
</ul>

<p><strong>Weak opening:</strong> "In this essay I will discuss how Shakespeare presents guilt in the extract and the play."</p>
<p><strong>Strong opening:</strong> "Shakespeare constructs guilt as an inescapable, corrosive force throughout <em>Macbeth</em>, and this extract — the banquet scene — represents the moment where Macbeth's internal torment becomes publicly visible, exposing the psychological cost of his 'vaulting ambition'."</p>

<h4>Step 4: Close Analysis of the Extract (15–20 minutes)</h4>
<p>This is the heart of your essay. Work through the extract carefully, selecting <strong>specific words and phrases</strong> to analyse. Do not try to cover everything — choose 3–4 rich moments and analyse them in depth.</p>

<p>For each point, follow this pattern:</p>
<ul>
  <li><strong>Identify the technique or word choice</strong> — What has the writer done?</li>
  <li><strong>Analyse the effect</strong> — What meaning does this create? What does it suggest about the character, theme, or atmosphere?</li>
  <li><strong>Connect to the question focus</strong> — How does this relate to the specific theme or idea you have been asked about?</li>
  <li><strong>Link to context where relevant</strong> — Does historical, social, or literary context illuminate this moment?</li>
</ul>

<div class="key-term"><strong>Key Term: Close Analysis</strong> — The practice of examining individual words, phrases, and sentences in fine detail, exploring their connotations, effects, and contribution to the text's wider meanings. This is the single most important skill for IGCSE Literature.</div>

<h4>Step 5: Range Across the Wider Text (10–15 minutes)</h4>
<p>After establishing your analysis of the extract, broaden your discussion to the rest of the text. Choose 2–3 moments from elsewhere that develop the same theme or idea. These should:</p>
<ul>
  <li>Show how the theme <strong>develops or changes</strong> across the text.</li>
  <li>Provide <strong>contrast or parallel</strong> with the extract — does the theme appear differently earlier or later?</li>
  <li>Include <strong>specific quotations</strong> from your memorised bank.</li>
</ul>

<p>The transition between extract analysis and wider text discussion should feel natural. Use connective phrases like:</p>
<ul>
  <li>"This moment echoes an earlier scene where..."</li>
  <li>"Shakespeare develops this idea further in Act 5, when..."</li>
  <li>"The contrast with [earlier/later moment] reveals how..."</li>
</ul>

<h4>Step 6: Conclude (2–3 minutes)</h4>
<p>A brief conclusion that synthesises your argument. Do not introduce new evidence — instead, draw your points together and offer a final evaluative statement.</p>

<h3>Common Extract-Based Pitfalls</h3>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about the extract line by line from top to bottom. This produces a commentary, not an essay. Select the most significant moments and organise them around your argument, not around the order they appear in the extract.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Abandoning the extract entirely after the first paragraph and writing a pre-prepared essay about the wider text. Examiners can tell when candidates are recycling a memorised response. Keep returning to the extract throughout your essay.</div>

<h3>Timing for Extract-Based Questions</h3>
<p>If you have approximately 45 minutes for an extract question, aim for:</p>
<ul>
  <li><strong>Reading and annotating:</strong> 5 minutes</li>
  <li><strong>Planning:</strong> 3–5 minutes</li>
  <li><strong>Writing:</strong> 30–35 minutes</li>
  <li><strong>Proofreading:</strong> 2–3 minutes</li>
</ul>

<p>This timing ensures you have enough time to develop your points fully without rushing the conclusion or skipping the proofreading stage, which is essential for AO4 marks.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Proofreading is not optional. AO4 marks for spelling, punctuation and grammar are available on every response. Two minutes of careful checking can gain you several marks that cost nothing in terms of analytical skill.</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m2-q1',
        question: 'What is the key two-part demand in most extract-based questions?',
        options: [
          'Analyse the extract and compare it to another text',
          'Summarise the extract and then give your opinion',
          'Analyse the extract and discuss the wider text',
          'Identify literary devices and list contextual facts',
        ],
        correct: 2,
        explanation: 'Extract-based questions typically ask you to analyse the given passage AND discuss the theme/character in the wider text. Both parts must be addressed to access the highest mark bands.',
      },
      {
        id: 'iglit-dp-m2-q2',
        question: 'Why should you avoid working through an extract line by line from top to bottom?',
        options: [
          'Because you will run out of time',
          'Because it produces a commentary, not an argument — you should organise points around your thesis',
          'Because examiners prefer you to start from the end of the extract',
          'Because the most important lines are always in the middle',
        ],
        correct: 1,
        explanation: 'A line-by-line approach produces a commentary rather than a structured argument. The strongest responses select the most significant moments and organise them around a conceptualised thesis.',
      },
      {
        id: 'iglit-dp-m2-q3',
        question: 'How should you transition between extract analysis and wider text discussion?',
        options: [
          'Write a new heading saying "Wider Text"',
          'Start a completely new essay after finishing the extract section',
          'Use natural connective phrases that link extract moments to relevant scenes elsewhere',
          'Stop discussing the extract entirely once you begin the wider text section',
        ],
        correct: 2,
        explanation: 'The best responses weave naturally between the extract and wider text using connective phrases. The transition should feel organic, not like two separate essays joined together.',
      },
      {
        id: 'iglit-dp-m2-q4',
        question: 'What should your opening paragraph achieve in an extract-based essay?',
        options: [
          'Summarise the entire plot of the text',
          'Respond to the question, establish your conceptualised argument, and situate the extract',
          'List all the literary devices you can find in the extract',
          'Provide a detailed biography of the writer',
        ],
        correct: 1,
        explanation: 'A strong opening responds directly to the question, establishes your overarching interpretation (conceptualised argument), and briefly situates where the extract falls in the text and why this matters.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Character Analysis Skills
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m3',
    title: 'Character Analysis Skills',
    duration: '55 min',
    content: `
<h2>Analysing Characters in Set Texts</h2>

<p>Character questions are among the most common on the IGCSE Literature paper. However, the exam does not want you to describe characters as though they were real people — it wants you to analyse them as <strong>constructs</strong> created by the writer for specific purposes. This distinction is crucial and is the single biggest factor separating mid-range responses from top-band answers.</p>

<div class="key-term"><strong>Key Term: Character as Construct</strong> — The idea that characters are deliberately created by writers to serve particular purposes — to embody themes, to create dramatic tension, to represent social groups or ideas. They are not real people but artistic tools.</div>

<h3>The Writer's Craft: Why Characters Exist</h3>
<p>Every character in a set text exists because the writer put them there for a reason. When you analyse a character, you should always be asking: <strong>What is the writer using this character to explore, challenge, or communicate?</strong></p>

<p>Consider these different functions that characters can serve:</p>
<ul>
  <li><strong>Embodying a theme:</strong> Lady Macbeth embodies the destructive nature of unchecked ambition and the subversion of gender roles.</li>
  <li><strong>Creating dramatic tension:</strong> The Inspector in <em>An Inspector Calls</em> generates tension through his methodical questioning, which gradually dismantles the Birlings' complacency.</li>
  <li><strong>Representing a social group or ideology:</strong> Mr Birling represents capitalist self-interest; Sheila represents the potential for social conscience in the younger generation.</li>
  <li><strong>Acting as a foil:</strong> Banquo serves as a foil to Macbeth — both hear the witches' prophecy, but Banquo resists temptation while Macbeth succumbs.</li>
  <li><strong>Providing a moral compass:</strong> Characters like Macduff or the Inspector function as moral benchmarks against which other characters are measured.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always refer to the writer by name. Write "Shakespeare presents Macbeth as..." or "Priestley uses the Inspector to..." rather than "Macbeth is..." or "The Inspector does...". This keeps your focus on the writer's craft and signals to the examiner that you understand characters are constructs.</div>

<h3>Tracking Character Development</h3>
<p>Many characters change over the course of a text — this is called a <strong>character arc</strong>. Tracking how a character develops is essential for exam responses that discuss the "wider text".</p>

<p>For each major character, consider:</p>
<ul>
  <li><strong>Introduction:</strong> How does the writer first present this character? What is our initial impression?</li>
  <li><strong>Development:</strong> How does the character change in response to events? What causes these changes?</li>
  <li><strong>Climax:</strong> What is the character's most significant moment? Where do they face their greatest challenge or make their most revealing choice?</li>
  <li><strong>Resolution:</strong> Where does the character end up? Has the writer's purpose been fulfilled?</li>
</ul>

<h3>Methods of Characterisation</h3>
<p>Writers reveal character through a range of techniques. You need to be able to identify and analyse these in your essays:</p>

<h4>1. Dialogue</h4>
<p>What a character says — and how they say it — reveals their personality, social status, emotional state, and relationships. Pay attention to:</p>
<ul>
  <li><strong>Register and vocabulary:</strong> Does the character use formal or informal language? Sophisticated or simple words?</li>
  <li><strong>Speech patterns:</strong> Short, clipped sentences may suggest tension or authority. Long, flowing speeches may suggest confidence or emotional overflow.</li>
  <li><strong>What is left unsaid:</strong> Pauses, interruptions, and silences can be as revealing as words.</li>
</ul>

<h4>2. Action</h4>
<p>What a character does tells us who they are. A character's choices — especially under pressure — reveal their true nature. Macbeth's decision to kill Duncan tells us more about his character than any soliloquy.</p>

<h4>3. Stage Directions and Narration</h4>
<p>In plays, stage directions control how we see characters. In novels, the narrator's descriptions shape our perception. These authorial interventions are deliberate and analysable.</p>

<h4>4. Other Characters' Reactions</h4>
<p>How other characters respond to an individual shapes our view of them. Duncan's praise of Macbeth as "noble" and "valiant" establishes his reputation before we see him succumb to ambition, making the fall more dramatic.</p>

<h4>5. Symbolism and Imagery</h4>
<p>Writers often associate characters with recurring images or symbols. Lady Macbeth's association with blood and darkness, for example, links her to guilt and moral corruption throughout the play.</p>

<div class="key-term"><strong>Key Term: Foil</strong> — A character who contrasts with another character, highlighting particular qualities. Banquo is a foil to Macbeth: both are brave soldiers who hear the witches' prophecy, but their contrasting responses highlight Macbeth's moral weakness.</div>

<h3>Writing About Characters in the Exam</h3>
<p>When writing about a character, structure your paragraphs around <strong>what the writer is doing</strong>, not around retelling what the character does:</p>

<p><strong>Weak:</strong> "Macbeth kills Duncan because he is ambitious and his wife persuades him. He then becomes king but feels guilty about it."</p>

<p><strong>Strong:</strong> "Shakespeare presents Macbeth's ambition as a destructive force that corrodes his moral integrity. The metaphor of 'vaulting ambition, which o'erleaps itself' suggests an energy that exceeds all rational bounds — the verb 'o'erleaps' connoting a reckless, uncontrolled momentum that foreshadows Macbeth's inevitable fall. By framing ambition as something that acts upon Macbeth rather than something he consciously chooses, Shakespeare raises the provocative question of whether Macbeth is agent or victim of his own desires."</p>

<p>Notice how the strong response names the writer, identifies a technique (metaphor), analyses specific words ("o'erleaps"), and explores the effect on the audience's understanding.</p>

<h3>Character Analysis Checklist</h3>
<p>Before submitting a character-focused essay, check that you have:</p>
<ul>
  <li>Referred to the writer by name throughout</li>
  <li>Analysed <em>how</em> the character is presented, not just <em>what</em> they do</li>
  <li>Discussed the character's function or purpose in the text</li>
  <li>Tracked development across the text (not just one scene)</li>
  <li>Included close analysis of specific language choices</li>
  <li>Considered the character in relation to other characters (foils, contrasts)</li>
  <li>Integrated relevant context where it illuminates meaning</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating characters as real people and making psychological speculations ("Macbeth probably felt anxious because of his childhood"). Characters are constructs — discuss what the writer intended and what effects are created, not what the character "probably felt".</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m3-q1',
        question: 'What does it mean to treat a character as a "construct"?',
        options: [
          'To describe their personality as if they were a real person',
          'To recognise they are deliberately created by the writer to serve specific purposes',
          'To focus only on their physical appearance',
          'To compare them with real historical figures',
        ],
        correct: 1,
        explanation: 'Treating a character as a construct means recognising that the writer created them deliberately to embody themes, generate tension, represent ideas, or serve other artistic purposes. This approach keeps analysis focused on the writer\'s craft.',
      },
      {
        id: 'iglit-dp-m3-q2',
        question: 'What is a "foil" character?',
        options: [
          'The villain of the story',
          'A character who appears only once',
          'A character who contrasts with another, highlighting particular qualities',
          'A character who narrates the story',
        ],
        correct: 2,
        explanation: 'A foil is a character who contrasts with another character in order to highlight specific qualities. For example, Banquo serves as a foil to Macbeth — their contrasting responses to the prophecy highlight Macbeth\'s moral weakness.',
      },
      {
        id: 'iglit-dp-m3-q3',
        question: 'Why should you always refer to the writer by name in your analysis?',
        options: [
          'Because the exam requires it for AO4 marks',
          'Because it reminds you to focus on the writer\'s craft and signals awareness that characters are constructs',
          'Because it makes your essay longer',
          'Because examiners deduct marks if you do not mention the writer',
        ],
        correct: 1,
        explanation: 'Referring to the writer by name (e.g., "Shakespeare presents...") keeps your analysis focused on authorial intent and craft. It signals to the examiner that you understand characters are deliberate constructs, not real people.',
      },
      {
        id: 'iglit-dp-m3-q4',
        question: 'Which of the following is the strongest analytical statement about a character?',
        options: [
          'Macbeth is a brave soldier who becomes evil after killing the king',
          'Shakespeare uses the metaphor of "vaulting ambition" to present Macbeth\'s desire as an uncontrollable force that will lead to his destruction',
          'Macbeth kills Duncan, Banquo, and Macduff\'s family, showing he is a bad person',
          'In the play, Macbeth changes from good to bad because of the witches',
        ],
        correct: 1,
        explanation: 'The strongest response names the writer, identifies a specific technique (metaphor), quotes precisely, and explains the effect. It analyses the writer\'s craft rather than simply describing what happens.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Theme Analysis
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m4',
    title: 'Theme Analysis',
    duration: '50 min',
    content: `
<h2>Analysing Themes Across Set Texts</h2>

<p>A <strong>theme</strong> is a central idea, message, or concern that runs through a literary text. Themes are not stated explicitly by the writer — they emerge through the interplay of characters, events, language, and structure. Learning to identify, track, and analyse themes is one of the most important skills for IGCSE Literature, because theme-based questions appear on virtually every paper.</p>

<div class="key-term"><strong>Key Term: Theme</strong> — A recurring idea or message that the writer explores through the text. Themes are abstract concepts — such as power, guilt, responsibility, love, justice — that gain meaning through the specific way the writer handles them.</div>

<h3>Themes vs Topics</h3>
<p>Students often confuse themes with topics. A <strong>topic</strong> is a subject area (e.g., "war", "family"). A <strong>theme</strong> is what the writer <em>says</em> about that subject — their message or exploration.</p>
<ul>
  <li><strong>Topic:</strong> Ambition</li>
  <li><strong>Theme:</strong> Shakespeare presents ambition as a destructive force that, when unchecked by moral conscience, leads to psychological disintegration and political chaos.</li>
</ul>
<p>Notice how the theme is an <strong>argument</strong> about the topic. The exam rewards you for articulating what the writer is communicating about a subject, not just for identifying that the subject exists in the text.</p>

<h3>How Writers Develop Themes</h3>
<p>Themes are developed through every element of a text. When analysing a theme, consider how it is communicated through:</p>

<h4>1. Character</h4>
<p>Characters often embody or explore themes. Macbeth embodies destructive ambition; the Inspector embodies social responsibility. Track how the theme is revealed through what characters say, do, and experience.</p>

<h4>2. Plot and Structure</h4>
<p>The sequence of events develops themes. The fact that Macbeth's power grows while his mental stability collapses communicates the theme that power gained through immoral means is self-destructive. Structural choices — such as the Inspector's exit and the final phone call in <em>An Inspector Calls</em> — reinforce thematic messages.</p>

<h4>3. Language and Imagery</h4>
<p>Recurring images, metaphors, and motifs carry thematic weight. Blood imagery in <em>Macbeth</em> develops the theme of guilt; light and dark imagery develops the theme of moral corruption. When you spot a pattern of imagery, you have found a <strong>motif</strong> that the writer is using to communicate a theme.</p>

<div class="key-term"><strong>Key Term: Motif</strong> — A recurring image, symbol, or idea that appears throughout a text and contributes to its themes. Blood is a motif in <em>Macbeth</em>; the telephone is a motif in <em>An Inspector Calls</em>.</div>

<h4>4. Setting and Atmosphere</h4>
<p>Settings often reflect or contrast with themes. The claustrophobic Birling dining room in <em>An Inspector Calls</em> mirrors the family's insular worldview. The storm and darkness that accompany Duncan's murder in <em>Macbeth</em> reflect the disruption of natural order.</p>

<h4>5. Context</h4>
<p>Historical and social context can illuminate why a writer chose to explore particular themes. Priestley's socialism shapes his exploration of responsibility; Shakespeare's Jacobean context shapes his treatment of kingship and the supernatural.</p>

<h3>Structuring a Theme-Based Essay</h3>
<p>Theme questions require you to trace an idea across the whole text, not just analyse one scene. A strong approach is to organise your essay around <strong>how the theme develops</strong>:</p>

<ol>
  <li><strong>Introduction:</strong> State your conceptualised argument about what the writer communicates through this theme.</li>
  <li><strong>Early in the text:</strong> How is the theme introduced? What is the starting point?</li>
  <li><strong>Development:</strong> How does the theme deepen or complicate as events unfold?</li>
  <li><strong>Climax:</strong> Where does the theme reach its most intense or significant expression?</li>
  <li><strong>Resolution:</strong> How is the theme resolved — or deliberately left unresolved — by the end?</li>
  <li><strong>Conclusion:</strong> Synthesise your argument. What is the writer's overall message about this theme?</li>
</ol>

<p>This chronological approach works well because it naturally demonstrates your knowledge of the whole text and shows how the writer develops ideas over time.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest responses go beyond describing <em>what</em> themes are present and explore <em>how</em> the writer uses them to communicate a message to the audience. Always ask: "What is the writer saying about this theme, and why does it matter?"</div>

<h3>Connecting Themes</h3>
<p>Themes do not exist in isolation — they intersect and overlap. The ability to connect themes demonstrates sophisticated understanding and can elevate your response to the highest mark bands. For example:</p>
<ul>
  <li>In <em>Macbeth</em>: Ambition connects to power, which connects to guilt, which connects to the supernatural, which connects to fate vs free will.</li>
  <li>In <em>An Inspector Calls</em>: Responsibility connects to class, which connects to gender, which connects to generational conflict.</li>
</ul>

<p>When you make these connections explicit in your essay, you demonstrate that you understand the text as a complex, interconnected whole rather than a collection of separate ideas.</p>

<h3>Using Quotations for Theme Analysis</h3>
<p>When analysing themes, your quotations should be chosen for their thematic resonance, not just their relevance to character or plot. The best thematic quotations contain <strong>language that directly embodies the theme</strong>:</p>

<p><strong>Theme: Guilt in Macbeth</strong></p>
<div class="text-extract">"Will all great Neptune's ocean wash this blood / Clean from my hand?"<div class="source">Act 2, Scene 2</div></div>
<p>This quotation is ideal for theme analysis because the imagery of blood and water directly embodies guilt as an indelible stain. The hyperbolic reference to "all great Neptune's ocean" suggests guilt on a cosmic scale that no earthly act can remedy.</p>

<p><strong>Theme: Responsibility in An Inspector Calls</strong></p>
<div class="text-extract">"We are members of one body. We are responsible for each other."<div class="source">Act 3</div></div>
<p>This quotation articulates the play's central theme directly. The metaphor of "one body" fuses individual and collective identity, making the rejection of responsibility equivalent to self-harm.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Listing themes without analysing them. Writing "The themes of Macbeth include ambition, guilt, power, and the supernatural" is a list, not analysis. For each theme, you must explain how the writer presents it and what message they communicate.</div>

<h3>Practice: Theme-Tracking Table</h3>
<p>For each set text, create a theme-tracking table with four columns:</p>
<ul>
  <li><strong>Theme</strong> — Name the theme.</li>
  <li><strong>Key moments</strong> — List 3–4 scenes or passages where the theme is prominent.</li>
  <li><strong>Key quotations</strong> — One short quotation per moment.</li>
  <li><strong>Writer's message</strong> — What is the writer saying about this theme?</li>
</ul>
<p>This table becomes an invaluable revision tool and ensures you have material ready for any theme-based question.</p>
`,
    quiz: [
      {
        id: 'iglit-dp-m4-q1',
        question: 'What is the difference between a "topic" and a "theme"?',
        options: [
          'A topic is for novels and a theme is for plays',
          'A topic is a subject area; a theme is what the writer says or argues about that subject',
          'A topic is broad and a theme is narrow — they are essentially the same',
          'A topic appears once while a theme recurs throughout the text',
        ],
        correct: 1,
        explanation: 'A topic is a subject (e.g., "ambition") while a theme is the writer\'s argument or message about that subject (e.g., "unchecked ambition leads to psychological disintegration"). The exam rewards you for articulating what the writer communicates, not just identifying a subject.',
      },
      {
        id: 'iglit-dp-m4-q2',
        question: 'What is a "motif"?',
        options: [
          'The main character of a text',
          'A moral lesson at the end of a story',
          'A recurring image, symbol, or idea that contributes to a text\'s themes',
          'The setting of a particular scene',
        ],
        correct: 2,
        explanation: 'A motif is a recurring image, symbol, or idea that appears throughout a text and helps develop its themes. Blood in Macbeth and the telephone in An Inspector Calls are examples of motifs.',
      },
      {
        id: 'iglit-dp-m4-q3',
        question: 'Why is connecting themes considered a sophisticated analytical skill?',
        options: [
          'Because it allows you to write about more than one theme in the same essay',
          'Because it demonstrates understanding of the text as a complex, interconnected whole',
          'Because examiners give extra marks for mentioning multiple themes',
          'Because connected themes are easier to remember for the exam',
        ],
        correct: 1,
        explanation: 'Connecting themes shows that you understand the text as a complex, interconnected whole rather than a collection of separate ideas. This level of conceptualised thinking is characteristic of top-band responses.',
      },
      {
        id: 'iglit-dp-m4-q4',
        question: 'What is the best way to structure a theme-based essay?',
        options: [
          'Write one paragraph per character who relates to the theme',
          'Organise around how the theme develops chronologically across the text',
          'Write a paragraph about each Assessment Objective in turn',
          'Focus entirely on one scene where the theme is most prominent',
        ],
        correct: 1,
        explanation: 'Organising chronologically — from introduction through development, climax, and resolution — naturally demonstrates your knowledge of the whole text and shows how the writer develops the theme over time.',
      },
      {
        id: 'iglit-dp-m4-q5',
        question: 'What makes a quotation particularly effective for theme analysis?',
        options: [
          'It is very long, covering several lines of the text',
          'It contains language that directly embodies the theme being discussed',
          'It comes from the opening of the text',
          'It includes the name of the theme explicitly',
        ],
        correct: 1,
        explanation: 'The best thematic quotations contain language — imagery, metaphors, powerful verbs — that directly embodies the theme. This gives you rich material for close analysis of how the writer communicates their message.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Context Integration
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m5',
    title: 'Context Integration',
    duration: '45 min',
    content: `
<h2>Integrating Context into Literary Analysis (AO3)</h2>

<p>Context is one of the most misunderstood elements of IGCSE Literature. Many students treat it as a separate task — a paragraph of historical facts dropped into an otherwise analytical essay. This approach rarely scores well. Examiners want to see context <strong>integrated</strong> into your analysis, so that it illuminates the meaning of the text rather than sitting alongside it as disconnected information.</p>

<div class="key-term"><strong>Key Term: Context (AO3)</strong> — The historical, social, cultural, and literary circumstances surrounding a text's creation and reception. Context includes when and where the text was written, the writer's background and beliefs, and how audiences have responded to the text over time.</div>

<h3>Types of Context</h3>
<p>There are several types of context you can draw on in your essays:</p>

<h4>1. Historical Context</h4>
<p>Events and conditions of the time when the text was written. For <em>Macbeth</em>, this includes the Jacobean period, the Gunpowder Plot, and the reign of James I. For <em>An Inspector Calls</em>, this includes the text being set in 1912 but written in 1945 — after two World Wars had transformed British society.</p>

<h4>2. Social Context</h4>
<p>The social structures, norms, and attitudes of the period. Class hierarchy in Edwardian England for Priestley; patriarchal gender roles in Jacobean society for Shakespeare. Social context helps explain why characters behave as they do and why the writer is challenging or reinforcing particular norms.</p>

<h4>3. Literary Context</h4>
<p>The conventions, genres, and literary traditions that the writer is working within or against. Shakespeare writes within the conventions of Jacobean tragedy; Priestley draws on the "well-made play" tradition and the morality play genre.</p>

<h4>4. Authorial Context</h4>
<p>The writer's own beliefs, experiences, and intentions. Priestley was a committed socialist who wanted to use theatre as a vehicle for social change. Shakespeare wrote for commercial audiences at the Globe Theatre and for royal patronage under James I.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to cover every type of context in every essay. Choose the contextual points that are most relevant to the specific question you are answering. One well-integrated contextual reference is worth more than five disconnected ones.</div>

<h3>The Difference Between Bolted-On and Integrated Context</h3>
<p>This is the single most important distinction for AO3. Study these examples carefully:</p>

<p><strong>Bolted-on (weak):</strong></p>
<p>"In 1912, there were big differences between the upper and lower classes. The Birlings are upper class. Eva Smith is working class."</p>

<p><strong>Integrated (strong):</strong></p>
<p>"Priestley's decision to set the play in 1912 — before the upheavals of two World Wars — allows him to expose the complacency of the Edwardian upper class. Mr Birling's confident prediction that war is impossible becomes bitterly ironic for the 1945 audience, who know the devastation that followed. By making Birling so spectacularly wrong about the future, Priestley undermines his authority on every other subject, including his dismissal of social responsibility."</p>

<p>Notice how the strong version:</p>
<ul>
  <li>Names the writer and explains their <strong>purpose</strong></li>
  <li>Connects context to a <strong>specific textual moment</strong></li>
  <li>Explains the <strong>effect</strong> on the audience</li>
  <li>Links context to the text's <strong>themes and arguments</strong></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Opening a paragraph with "In [time period], people believed/did [historical fact]" with no connection to the text. This reads as a history essay, not a literature essay. Always start with the text and bring in context to deepen your analysis.</div>

<h3>Strategies for Embedding Context</h3>
<p>Use these techniques to weave context naturally into your analysis:</p>

<h4>Strategy 1: The "Audience Response" Frame</h4>
<p>Explain how a contemporary audience would have responded to a moment, and why:</p>
<p>"A Jacobean audience, steeped in belief in the Divine Right of Kings, would have experienced Duncan's murder as not merely a political crime but a cosmic violation — which is precisely why Shakespeare has nature itself respond with storms and unnatural darkness."</p>

<h4>Strategy 2: The "Writer's Purpose" Frame</h4>
<p>Explain what the writer was trying to achieve, using context to illuminate their choices:</p>
<p>"Priestley, writing in 1945 as Britain contemplated its post-war future, uses the Inspector as a mouthpiece for the socialist values he believed should shape the new society — the message that 'we are responsible for each other' is directed as much at the audience as at the Birlings."</p>

<h4>Strategy 3: The "Challenge" Frame</h4>
<p>Explain how the writer is challenging the norms or assumptions of their time:</p>
<p>"Shakespeare's portrayal of Lady Macbeth challenges Jacobean gender expectations by presenting a woman who is more decisive, ruthless, and politically astute than her husband — yet the play ultimately punishes her transgression with madness and death, suggesting that the patriarchal order, however flawed, cannot be defied without consequence."</p>

<h4>Strategy 4: The "Contrast" Frame</h4>
<p>For texts set in a different period from when they were written (like <em>An Inspector Calls</em>), use the gap between the two periods:</p>
<p>"The dramatic irony created by Priestley's dual time-frame — setting the play in 1912 while writing for a 1945 audience — transforms Birling's optimistic speeches into devastating satire. The audience knows everything Birling does not: the Titanic will sink, the war will come, and the class system he defends will be shaken to its foundations."</p>

<h3>Context for Key IGCSE Texts</h3>
<p>Here are the most important contextual points for the two most commonly studied texts:</p>

<h4>Macbeth</h4>
<ul>
  <li>Written c. 1606 during the reign of James I</li>
  <li>James I's interest in witchcraft (<em>Daemonologie</em>, 1597)</li>
  <li>The Gunpowder Plot (1605) and fears about treason</li>
  <li>The Divine Right of Kings and the Great Chain of Being</li>
  <li>Patriarchal gender roles in Jacobean society</li>
  <li>The Globe Theatre and conventions of Jacobean tragedy</li>
</ul>

<h4>An Inspector Calls</h4>
<ul>
  <li>Set in 1912 (pre-WWI Edwardian England) but written in 1945 (post-WWII)</li>
  <li>Priestley's socialism and belief in collective responsibility</li>
  <li>The welfare state debate of the 1940s</li>
  <li>Class hierarchy in Edwardian England — rigid social stratification</li>
  <li>The suffragette movement and the status of women</li>
  <li>Dramatic irony created by the dual time-frame</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You only need 2–3 contextual references per essay, but they must be well integrated. Quality over quantity is the rule for AO3. A single contextual point that genuinely illuminates the text is worth more than a paragraph of historical facts.</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m5-q1',
        question: 'What is "bolted-on" context?',
        options: [
          'Context that is too detailed for the exam',
          'A detached statement of historical fact with no connection to the text or its meaning',
          'Context that appears in the conclusion rather than the introduction',
          'Context that refers to the writer\'s personal life',
        ],
        correct: 1,
        explanation: 'Bolted-on context is a disconnected historical fact that does not link to the text\'s meaning. It reads as a history essay rather than a literature essay. Context must be integrated into your analysis to illuminate the text.',
      },
      {
        id: 'iglit-dp-m5-q2',
        question: 'Why is the dual time-frame of An Inspector Calls significant?',
        options: [
          'It allows Priestley to include more characters',
          'It creates dramatic irony because the 1945 audience knows what the 1912 characters do not',
          'It makes the play historically accurate',
          'It was required by the exam board',
        ],
        correct: 1,
        explanation: 'The gap between the 1912 setting and the 1945 writing date creates dramatic irony. The audience knows Birling\'s predictions are wrong, which undermines his authority and reinforces Priestley\'s message about the need for social change.',
      },
      {
        id: 'iglit-dp-m5-q3',
        question: 'Which strategy starts with the text and brings in context to explain audience reaction?',
        options: [
          'The "Writer\'s Purpose" frame',
          'The "Audience Response" frame',
          'The "Challenge" frame',
          'The "Contrast" frame',
        ],
        correct: 1,
        explanation: 'The "Audience Response" frame explains how a contemporary audience would have responded to a textual moment and why, using context to illuminate the significance of the writer\'s choices.',
      },
      {
        id: 'iglit-dp-m5-q4',
        question: 'How many contextual references should you typically include per essay?',
        options: [
          'As many as possible — at least one per paragraph',
          '2–3 well-integrated references that genuinely illuminate the text',
          'Exactly one, placed in the introduction',
          'None — context is only tested in history exams',
        ],
        correct: 1,
        explanation: 'Quality over quantity is the rule for AO3. You need 2–3 contextual references per essay, but each must be well integrated into your analysis, not bolted on as disconnected historical facts.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Close Reading Skills
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m6',
    title: 'Close Reading Skills',
    duration: '50 min',
    content: `
<h2>Close Reading: The Core Skill of Literary Analysis</h2>

<p>Close reading is the foundation of every strong Literature response. It means slowing down to examine individual words, phrases, and sentences with precision, exploring their connotations, effects, and contribution to meaning. If character analysis and theme analysis are the "what" of your essay, close reading is the "how" — the mechanism by which you demonstrate genuine analytical skill.</p>

<div class="key-term"><strong>Key Term: Close Reading</strong> — The detailed, careful examination of a short passage or even a single word, exploring multiple layers of meaning including denotation, connotation, imagery, sound, rhythm, and effect on the reader.</div>

<h3>Layers of Close Reading</h3>
<p>Every word in a literary text operates on multiple levels. Strong close reading peels back these layers:</p>

<h4>Layer 1: Denotation</h4>
<p>What does the word literally mean? This is your starting point. If Shakespeare writes "scorpions", the denotation is a venomous arachnid.</p>

<h4>Layer 2: Connotation</h4>
<p>What associations, feelings, or ideas does the word carry beyond its literal meaning? "Scorpions" connotes pain, venom, danger, something that stings and poisons from within. These connotations are what make the word powerful.</p>

<h4>Layer 3: Effect</h4>
<p>What impact does the word have on the reader or audience? How does it make us feel? What does it make us think? "Full of scorpions is my mind" creates a visceral sense of Macbeth's psychological torment — his thoughts are not merely troubled but actively venomous, poisoning him from the inside.</p>

<h4>Layer 4: Purpose</h4>
<p>Why did the writer choose <em>this</em> word rather than any other? What is it achieving in the text? Shakespeare could have written "full of worries is my mind" — but "scorpions" elevates Macbeth's guilt from mere anxiety to something monstrous and self-destructive, contributing to the play's pattern of imagery linking sin with physical corruption.</p>

<h3>Analysing Language Choices</h3>
<p>When you encounter a significant word or phrase, work through these analytical questions:</p>

<ul>
  <li><strong>Word class:</strong> Is it a verb, noun, adjective, or adverb? Verbs are often the most powerful words to analyse because they convey action and energy. Strong nouns create vivid images. Adjectives and adverbs modify meaning in precise ways.</li>
  <li><strong>Connotations:</strong> What does this word suggest beyond its literal meaning? What feelings, ideas, or associations does it carry?</li>
  <li><strong>Imagery:</strong> Does the word create a mental picture? Is it part of a metaphor, simile, or other figure of speech?</li>
  <li><strong>Sound:</strong> How does the word sound when spoken? Harsh consonants (plosives like "b", "d", "k") can create aggression; soft sounds (sibilants like "s", liquids like "l") can create gentleness or menace.</li>
  <li><strong>Patterns:</strong> Does this word connect to other words or images elsewhere in the text? Is it part of a motif?</li>
</ul>

<h3>Worked Example: Close Reading in Practice</h3>
<p>Let us apply close reading to a single line from <em>Macbeth</em>:</p>

<div class="text-extract">"Look like th'innocent flower, / But be the serpent under't."<div class="source">Lady Macbeth, Act 1, Scene 5</div></div>

<p><strong>Surface meaning:</strong> Lady Macbeth tells her husband to appear innocent while concealing his murderous intent.</p>

<p><strong>Language analysis:</strong></p>
<ul>
  <li>The <strong>imperative verbs</strong> "look" and "be" reveal Lady Macbeth's commanding nature — she instructs rather than suggests, establishing her dominance in the relationship at this point.</li>
  <li>The <strong>contrast</strong> between "flower" and "serpent" encapsulates the play's central theme of appearance versus reality. The flower connotes beauty, innocence, and nature; the serpent connotes evil, temptation, and Biblical sin.</li>
  <li>The <strong>Biblical allusion</strong> to the serpent in the Garden of Eden links Macbeth's planned regicide to the original sin — the first act of disobedience against divine authority. A Jacobean audience would have recognised this immediately.</li>
  <li>The preposition <strong>"under't"</strong> suggests concealment and depth — the serpent lurks beneath the surface, invisible until it strikes. This mirrors how Macbeth must hide his ambition beneath a loyal exterior.</li>
  <li>The <strong>imagery pattern:</strong> This moment connects to the wider motif of deception throughout the play — "fair is foul", the "false face" that must hide the "false heart".</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to identify every technique in a quotation. Choose the 2–3 most interesting features and explore them in depth. Three well-developed analytical points are worth far more than six superficial ones.</div>

<h3>Analysing Form and Structure</h3>
<p>Close reading is not limited to individual words — it also applies to how the text is structured:</p>

<h4>In Drama</h4>
<ul>
  <li><strong>Soliloquies:</strong> When a character speaks alone on stage, the audience gains access to their private thoughts. Analyse what this reveals and why the playwright chose this moment for revelation.</li>
  <li><strong>Dramatic irony:</strong> When the audience knows something a character does not. This creates tension, pathos, or dark humour.</li>
  <li><strong>Stage directions:</strong> These are the playwright's direct instructions and reveal intentions about character, mood, and visual storytelling.</li>
  <li><strong>Scene juxtaposition:</strong> Placing contrasting scenes next to each other creates meaning through comparison.</li>
</ul>

<h4>In Prose</h4>
<ul>
  <li><strong>Narrative perspective:</strong> Who tells the story and what do they know? First-person narration creates intimacy but may be unreliable. Third-person omniscience provides objectivity but distance.</li>
  <li><strong>Paragraph and chapter structure:</strong> Short paragraphs can create pace and tension. Long paragraphs can build atmosphere or convey stream of consciousness.</li>
  <li><strong>Beginnings and endings:</strong> How a chapter or novel opens and closes is always deliberate. Analyse the writer's choices here.</li>
  <li><strong>Dialogue vs narration:</strong> The balance between what is shown through dialogue and what is told through narration shapes the reader's experience.</li>
</ul>

<h3>Common Close Reading Errors</h3>

<div class="common-mistake"><strong>Common Mistake:</strong> "Shakespeare uses alliteration in 'full of scorpions is my mind' to make it stand out." This is feature-spotting with a vague explanation. Instead, explain specifically what the repetition of the sibilant "s" sound achieves — it creates a hissing quality that mirrors the venomous, insidious nature of Macbeth's guilt.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing every single word in a passage, producing a long but shallow commentary. Select the most significant words and phrases and analyse them in depth. Quality always beats quantity.</div>

<h3>Building Close Reading Confidence</h3>
<p>Close reading is a skill that improves with practice. Try these exercises:</p>
<ol>
  <li><strong>Single-word analysis:</strong> Choose one word from a quotation and write 100 words about it. Explore denotation, connotation, effect, and purpose.</li>
  <li><strong>Comparison:</strong> Take a quotation and imagine the writer had used a different word. What would change? Why is the original choice better?</li>
  <li><strong>Pattern spotting:</strong> Read a scene and list every word related to a single image cluster (e.g., blood, light, animals). What pattern emerges?</li>
</ol>
`,
    quiz: [
      {
        id: 'iglit-dp-m6-q1',
        question: 'What is the difference between denotation and connotation?',
        options: [
          'Denotation is the figurative meaning; connotation is the literal meaning',
          'Denotation is the literal meaning of a word; connotation is the associations and feelings it carries',
          'Denotation applies to nouns; connotation applies to verbs',
          'There is no meaningful difference — they are synonyms',
        ],
        correct: 1,
        explanation: 'Denotation is a word\'s literal, dictionary meaning. Connotation is the web of associations, feelings, and ideas the word carries beyond its literal meaning. Strong close reading explores both layers.',
      },
      {
        id: 'iglit-dp-m6-q2',
        question: 'In "Look like th\'innocent flower, / But be the serpent under\'t", what does the Biblical allusion to the serpent suggest?',
        options: [
          'That Macbeth should be cunning like a snake',
          'That the planned regicide is linked to original sin — disobedience against divine authority',
          'That Lady Macbeth is afraid of snakes',
          'That the Garden of Eden was a real place near Scotland',
        ],
        correct: 1,
        explanation: 'The serpent alludes to the serpent in the Garden of Eden, connecting Macbeth\'s planned regicide to the original sin — the first act of disobedience against divine authority. A Jacobean audience would have recognised this link immediately.',
      },
      {
        id: 'iglit-dp-m6-q3',
        question: 'Why are verbs often the most powerful words to analyse in close reading?',
        options: [
          'Because verbs are always the longest words in a sentence',
          'Because examiners give extra marks for verb analysis',
          'Because verbs convey action and energy, revealing how things happen rather than just what happens',
          'Because verbs are the only words that have connotations',
        ],
        correct: 2,
        explanation: 'Verbs convey action and energy, so they reveal how something happens, not just what happens. This makes them rich for analysis — a verb choice can communicate force, gentleness, hesitation, violence, and much more.',
      },
      {
        id: 'iglit-dp-m6-q4',
        question: 'What is the problem with writing "Shakespeare uses alliteration to make it stand out"?',
        options: [
          'Shakespeare did not use alliteration',
          'It is feature-spotting — identifying a device without explaining its specific effect on meaning',
          'Alliteration is not a real literary device',
          'The phrase "stand out" is too informal for an exam essay',
        ],
        correct: 1,
        explanation: 'This is feature-spotting with a vague explanation. Identifying a technique without analysing its specific effect on meaning earns minimal marks. You must explain what the alliteration achieves in terms of sound, mood, or meaning.',
      },
      {
        id: 'iglit-dp-m6-q5',
        question: 'What is a "soliloquy" and why is it significant for close reading?',
        options: [
          'A conversation between two characters that reveals their relationship',
          'A speech by a character alone on stage that gives the audience access to their private thoughts',
          'A stage direction that describes the setting',
          'A song performed between acts of a play',
        ],
        correct: 1,
        explanation: 'A soliloquy is when a character speaks alone on stage, revealing their private thoughts directly to the audience. It is significant for close reading because the playwright deliberately chose this moment to give the audience privileged access to the character\'s inner world.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 — Macbeth for IGCSE: Key Scenes, Characters, Themes & Methods
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m7',
    title: 'Macbeth for IGCSE: Key Scenes, Characters, Themes & Methods',
    duration: '60 min',
    content: `
<h2>Macbeth — Complete IGCSE Study Guide</h2>

<p><em>Macbeth</em> is the most widely studied Shakespeare play for the Edexcel IGCSE Literature specification. This module provides a comprehensive guide to the key scenes, characters, themes, and methods you need for the exam, along with a curated quotation bank and model analytical approaches.</p>

<h3>Plot Overview</h3>
<p>The play follows Macbeth, a Scottish general, who receives a prophecy from three witches that he will become King of Scotland. Driven by ambition and spurred on by Lady Macbeth, he murders King Duncan and takes the throne. His reign becomes increasingly tyrannical as paranoia and guilt consume him, and he is eventually overthrown and killed by Macduff.</p>

<h3>Key Scenes for the Exam</h3>

<h4>Act 1, Scene 1 — The Witches' Opening</h4>
<p>The play opens with thunder, lightning, and the three witches. Their chant — <strong>"Fair is foul, and foul is fair"</strong> — establishes the play's central motif of moral inversion and deception. Shakespeare immediately unsettles the audience by beginning with the supernatural, signalling that this will be a world where normal moral categories are unreliable.</p>

<h4>Act 1, Scene 5 — Lady Macbeth's Soliloquy</h4>
<p>Lady Macbeth reads her husband's letter and immediately resolves that Duncan must die. Her invocation — <strong>"unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty"</strong> — is a pivotal moment. She calls on dark spirits to strip away her femininity, associating compassion with weakness and cruelty with masculine power.</p>
<div class="text-extract">"Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty."<div class="source">Act 1, Scene 5</div></div>
<p>The verb <strong>"fill"</strong> suggests she sees herself as an empty vessel to be occupied by evil — a willing surrender of identity that mirrors the demonic possession feared by Jacobean audiences. The phrase <strong>"crown to the toe"</strong> implies a total transformation, from head to foot, leaving no part of her unchanged.</p>

<h4>Act 1, Scene 7 — "If it were done" Soliloquy</h4>
<p>Macbeth wrestles with his conscience. He acknowledges Duncan's virtues and his own lack of justification, admitting he has <strong>"no spur / To prick the sides of my intent, but only / Vaulting ambition"</strong>. This is the last moment where Macbeth's moral compass is fully functional — after this scene, the murder becomes inevitable.</p>

<h4>Act 2, Scene 2 — The Murder of Duncan</h4>
<p>Macbeth returns from killing Duncan in a state of horror. The blood on his hands becomes the play's central symbol of guilt. His question — <strong>"Will all great Neptune's ocean wash this blood / Clean from my hand?"</strong> — uses hyperbole to convey guilt so profound that no earthly force can remedy it. Lady Macbeth's dismissive response — <strong>"A little water clears us of this deed"</strong> — reveals her pragmatism but also her fatal underestimation of guilt's power. By Act 5, she will be the one compulsively washing her hands.</p>

<h4>Act 3, Scene 4 — The Banquet Scene</h4>
<p>Banquo's ghost appears at the feast, visible only to Macbeth. This scene marks the collision of Macbeth's public and private worlds — his guilt literally haunts him in front of his guests. Lady Macbeth desperately tries to maintain appearances, but Macbeth's breakdown signals the beginning of his public unravelling.</p>

<h4>Act 5, Scene 1 — Lady Macbeth's Sleepwalking</h4>
<p><strong>"Out, damned spot! Out, I say!"</strong> — Lady Macbeth's fragmented, obsessive speech in this scene represents the complete reversal of her earlier confidence. The woman who dismissed blood as requiring only "a little water" is now unable to cleanse the imaginary stain from her hands. Shakespeare uses prose rather than verse for this scene, reflecting her disordered mind.</p>

<h4>Act 5, Scene 5 — "Tomorrow and tomorrow and tomorrow"</h4>
<p>Upon hearing of Lady Macbeth's death, Macbeth delivers his most famous soliloquy. <strong>"Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more"</strong> expresses existential despair. The theatrical metaphor — life as a performance by a bad actor — is deeply ironic, given that this speech is itself performed on a stage.</p>

<h3>Key Characters</h3>

<h4>Macbeth</h4>
<p>Shakespeare constructs Macbeth as a tragic hero whose fatal flaw — ambition — drives him from honour to destruction. His arc moves from brave soldier to guilty murderer to paranoid tyrant to despairing nihilist. The key analytical question is whether Macbeth is a victim of supernatural manipulation or an agent of his own destruction.</p>

<h4>Lady Macbeth</h4>
<p>Initially presented as the more decisive and ruthless partner, Lady Macbeth's arc is an inversion of her husband's: as Macbeth grows harder and more reckless, she collapses under the weight of guilt. Shakespeare uses her to explore the unsustainability of suppressing conscience and the destructive consequences of toxic ambition.</p>

<h4>Banquo</h4>
<p>Banquo functions as Macbeth's foil. Both hear the prophecy, but Banquo warns against trusting <strong>"the instruments of darkness"</strong> while Macbeth is seduced by them. Banquo's integrity highlights Macbeth's moral failure by showing that a different choice was always possible.</p>

<h4>The Witches</h4>
<p>The witches are agents of chaos who blur the boundary between fate and free will. They do not command Macbeth to kill — they merely reveal a possibility. Whether they cause his downfall or simply accelerate it is one of the play's most debatable questions.</p>

<h4>Macduff</h4>
<p>Macduff represents loyalty, justice, and legitimate masculine courage. His grief at his family's murder — <strong>"He has no children"</strong> — is one of the play's most emotionally powerful moments. His eventual killing of Macbeth restores the moral order that the play's opening disrupted.</p>

<h3>Essential Quotation Bank</h3>
<ol>
  <li><strong>"Fair is foul, and foul is fair"</strong> (1.1) — moral inversion, deception, supernatural</li>
  <li><strong>"Stars, hide your fires; let not light see my black and deep desires"</strong> (1.4) — ambition, appearance vs reality</li>
  <li><strong>"Unsex me here"</strong> (1.5) — gender, ambition, supernatural</li>
  <li><strong>"Look like th'innocent flower, but be the serpent under't"</strong> (1.5) — deception, appearance vs reality</li>
  <li><strong>"Is this a dagger which I see before me?"</strong> (2.1) — guilt, supernatural, psychological breakdown</li>
  <li><strong>"Will all great Neptune's ocean wash this blood clean from my hand?"</strong> (2.2) — guilt, blood motif</li>
  <li><strong>"Full of scorpions is my mind"</strong> (3.2) — guilt, psychological torment</li>
  <li><strong>"Out, damned spot!"</strong> (5.1) — guilt, madness, reversal of earlier confidence</li>
  <li><strong>"Life's but a walking shadow"</strong> (5.5) — nihilism, despair, theatricality</li>
  <li><strong>"By the pricking of my thumbs, something wicked this way comes"</strong> (4.1) — supernatural, moral decline</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to memorise long quotations. Short, punchy phrases of 3–6 words are easier to remember, easier to embed in your sentences, and give you more to analyse per word. "Full of scorpions is my mind" is six words but can sustain an entire paragraph of analysis.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the plot of Macbeth instead of analysing it. The examiner knows the story — they want to see what you think about Shakespeare's methods and purposes. Every paragraph should contain analysis of language, form, or structure, not a description of what happens next.</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m7-q1',
        question: 'Why does Shakespeare use prose rather than verse for Lady Macbeth\'s sleepwalking scene?',
        options: [
          'Because prose is easier for the actress to memorise',
          'Because prose reflects her disordered, fragmented mental state',
          'Because verse is only used for comedic scenes',
          'Because Lady Macbeth is lower class than Macbeth',
        ],
        correct: 1,
        explanation: 'Shakespeare typically uses verse for noble characters and prose for lower-status characters or those in disordered mental states. Lady Macbeth\'s shift to prose in the sleepwalking scene reflects her psychological breakdown.',
      },
      {
        id: 'iglit-dp-m7-q2',
        question: 'How does Banquo function as a foil to Macbeth?',
        options: [
          'He is Macbeth\'s best friend who supports all his decisions',
          'He hears the same prophecy but resists temptation, showing a different choice was possible',
          'He is a more powerful warrior than Macbeth',
          'He represents the working class in contrast to Macbeth\'s nobility',
        ],
        correct: 1,
        explanation: 'Both Macbeth and Banquo hear the witches\' prophecy, but Banquo warns against trusting "the instruments of darkness" while Macbeth is seduced. Banquo\'s integrity highlights that Macbeth could have chosen differently.',
      },
      {
        id: 'iglit-dp-m7-q3',
        question: 'What is the significance of Lady Macbeth\'s line "A little water clears us of this deed" in relation to the wider play?',
        options: [
          'It shows she is practical and efficient',
          'It foreshadows her own obsessive hand-washing in Act 5, revealing dramatic irony as guilt proves inescapable',
          'It proves she does not care about Duncan\'s death at all',
          'It is a Biblical allusion to the story of Noah',
        ],
        correct: 1,
        explanation: 'Lady Macbeth\'s confident dismissal creates dramatic irony with her Act 5 sleepwalking scene, where she compulsively tries to wash imaginary blood from her hands. Her earlier pragmatism fatally underestimated the power of guilt.',
      },
      {
        id: 'iglit-dp-m7-q4',
        question: 'What does "Vaulting ambition, which o\'erleaps itself" suggest about Macbeth\'s motivation?',
        options: [
          'That his ambition is carefully controlled and measured',
          'That his ambition is the only thing driving him, and it will inevitably lead to his downfall',
          'That he is physically athletic and can leap over obstacles',
          'That he is more ambitious than Lady Macbeth',
        ],
        correct: 1,
        explanation: 'Macbeth admits ambition is his sole motivation ("no spur... but only vaulting ambition"). The image of ambition that "o\'erleaps itself" suggests an uncontrollable force that exceeds its bounds and collapses — foreshadowing his inevitable destruction.',
      },
      {
        id: 'iglit-dp-m7-q5',
        question: 'Why is Act 3, Scene 4 (the banquet scene) a turning point in the play?',
        options: [
          'It is the scene where Macbeth first meets the witches',
          'It is where Macbeth\'s private guilt becomes publicly visible as Banquo\'s ghost appears at the feast',
          'It is where Lady Macbeth dies',
          'It is the only scene with comic relief',
        ],
        correct: 1,
        explanation: 'The banquet scene is a turning point because Macbeth\'s private guilt becomes publicly visible. Banquo\'s ghost — seen only by Macbeth — causes him to break down in front of his guests, marking the beginning of his public unravelling.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — An Inspector Calls for IGCSE
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m8',
    title: 'An Inspector Calls for IGCSE',
    duration: '60 min',
    content: `
<h2>An Inspector Calls — Complete IGCSE Study Guide</h2>

<p>J.B. Priestley's <em>An Inspector Calls</em> is one of the most popular set texts for IGCSE Literature. Written in 1945 but set in 1912, the play uses the Birling family's complicity in a young woman's death to deliver a powerful message about social responsibility, class, and the consequences of moral complacency. This module covers everything you need for the exam.</p>

<h3>The Dual Time-Frame</h3>
<p>Understanding the play's dual time-frame is essential for every response you write. The play is <strong>set in 1912</strong> — a period of rigid class hierarchy, industrial capitalism, and pre-war optimism. But it was <strong>written and first performed in 1945</strong>, when Britain was emerging from the devastation of World War II and debating what kind of society to build in its aftermath.</p>

<p>This gap creates <strong>dramatic irony</strong> on a massive scale. When Mr Birling declares that war is impossible and that the Titanic is "unsinkable", the 1945 audience knows he is catastrophically wrong. Priestley uses this irony to undermine Birling's authority and, by extension, to discredit the capitalist, individualist worldview he represents.</p>

<div class="key-term"><strong>Key Term: Dramatic Irony</strong> — When the audience knows something that the characters do not. In <em>An Inspector Calls</em>, the audience knows about both World Wars and the sinking of the Titanic, which makes Birling's confident predictions deeply ironic.</div>

<h3>Key Characters</h3>

<h4>Mr Birling</h4>
<p>Priestley constructs Mr Birling as the embodiment of capitalist self-interest. He is a prosperous manufacturer who sees workers as cheap labour, not as people. His famous speech about a man having to "look after himself and his own" is the philosophical opposite of the Inspector's message. Birling is also a social climber — his knighthood aspirations and references to the Chief Constable reveal his obsession with status.</p>
<div class="text-extract">"A man has to mind his own business and look after himself and his own — and —"<div class="source">Act 1</div></div>
<p>The interrupted dash is telling — Priestley literally cuts Birling off with the Inspector's arrival, as if the play itself cannot tolerate this philosophy.</p>

<h4>Mrs Birling</h4>
<p>Sybil Birling represents the moral blindness of the upper class. She refused Eva Smith's plea for help at the Brumley Women's Charity Organisation, judging her for using the name "Mrs Birling" and for being pregnant outside marriage. Mrs Birling shows no remorse throughout the play, declaring that the father of the child should bear <strong>"the responsibility"</strong> — not realising she is condemning her own son Eric.</p>

<h4>Sheila Birling</h4>
<p>Sheila undergoes the most significant transformation in the play. She begins as a superficial, materialistic young woman who had Eva sacked from Milwards out of jealousy. However, she quickly accepts responsibility, showing genuine remorse: <strong>"But these girls aren't cheap labour — they're people."</strong> By the end, Sheila has become the Inspector's moral ally, challenging her parents and recognising that the evening's lesson must be learned regardless of whether the Inspector was real.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Sheila is Priestley's representation of hope. She shows that the younger generation can learn and change, which reinforces Priestley's socialist message that a better society is possible if people accept responsibility for each other.</div>

<h4>Eric Birling</h4>
<p>Eric is revealed to have made Eva pregnant, stolen money from his father's business, and driven her to the Brumley Women's Charity where his mother rejected her. Like Sheila, Eric accepts responsibility: <strong>"The fact remains that I did what I did."</strong> However, his acceptance is complicated by his alcoholism and his more volatile emotional state. Eric represents the damage that a dysfunctional, image-obsessed family inflicts on its own members.</p>

<h4>Gerald Croft</h4>
<p>Gerald occupies an ambiguous moral position. His relationship with Eva/Daisy was partly compassionate — he rescued her from the Palace Bar and genuinely cared for her — but ultimately exploitative, as he discarded her when it suited him. Gerald is the first to question whether the Inspector was real, and his relief at this possibility suggests he has not fully learned the lesson that Sheila and Eric have.</p>

<h4>Inspector Goole</h4>
<p>The Inspector is Priestley's most powerful dramatic device. He functions simultaneously as a detective, a moral judge, and a prophetic voice. His systematic questioning dismantles the Birlings' complacency, and his final speech — <strong>"We are members of one body. We are responsible for each other."</strong> — articulates the play's central message. His mysterious nature (is he a real inspector? A ghost? A manifestation of collective guilt?) is deliberately left ambiguous.</p>

<div class="key-term"><strong>Key Term: Mouthpiece</strong> — A character who directly voices the writer's own views and values. Inspector Goole is widely regarded as Priestley's mouthpiece, articulating the socialist philosophy of collective responsibility that Priestley championed throughout his career.</div>

<h3>Key Themes</h3>

<h4>Social Responsibility</h4>
<p>The play's central theme. Priestley argues that we are all interconnected and that failing to take responsibility for others has devastating consequences. Each Birling family member's individual act of selfishness contributed to Eva's death, demonstrating how systemic neglect destroys vulnerable people.</p>

<h4>Class and Social Hierarchy</h4>
<p>The Birlings represent the privileged upper-middle class of Edwardian England. Their treatment of Eva — as disposable, as less than human — exposes the cruelty that underpins class hierarchy. Priestley uses the play to argue that class privilege breeds moral blindness.</p>

<h4>Generational Conflict</h4>
<p>The older Birlings (Arthur and Sybil) refuse to change. The younger generation (Sheila and Eric) accept responsibility and demand change. This generational divide embodies Priestley's hope that post-war Britain would be shaped by people willing to build a more just society.</p>

<h4>Gender</h4>
<p>Eva's fate is shaped by her gender at every stage. She is fired for demanding fair wages (a threat to male-dominated capitalism), exploited by Gerald and Eric, and judged harshly by Mrs Birling for being an unmarried mother. Priestley exposes how patriarchal society punishes women for the very situations men create.</p>

<h3>Key Structural Features</h3>
<ul>
  <li><strong>Unities of time, place, and action:</strong> The play unfolds in real time, in one room, around one investigation. This claustrophobic structure intensifies tension and prevents the characters from escaping their guilt.</li>
  <li><strong>The Inspector's method:</strong> He questions characters one at a time, building a chain of responsibility. Each revelation deepens the horror and implicates new family members.</li>
  <li><strong>The final phone call:</strong> The play ends with a phone call announcing that a real inspector is coming. This cyclical structure suggests the Birlings will face their reckoning whether they want to or not — and that society cannot avoid the consequences of inequality indefinitely.</li>
</ul>

<h3>Essential Quotation Bank</h3>
<ol>
  <li><strong>"A man has to mind his own business and look after himself"</strong> (Birling, Act 1) — capitalist individualism</li>
  <li><strong>"But these girls aren't cheap labour — they're people"</strong> (Sheila, Act 1) — social awareness, empathy</li>
  <li><strong>"We are members of one body. We are responsible for each other."</strong> (Inspector, Act 3) — collective responsibility</li>
  <li><strong>"If men will not learn that lesson, then they will be taught it in fire and blood and anguish"</strong> (Inspector, Act 3) — warning, prophecy</li>
  <li><strong>"The fact remains that I did what I did"</strong> (Eric, Act 3) — acceptance of responsibility</li>
  <li><strong>"You're not the kind of father a chap could go to when he's in trouble"</strong> (Eric, Act 3) — family dysfunction, generational conflict</li>
  <li><strong>"I'm ashamed of you as well — yes both of you"</strong> (Sheila, Act 3) — moral courage, generational divide</li>
  <li><strong>"Public men, Mr Birling, have responsibilities as well as privileges"</strong> (Inspector, Act 1) — accountability</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long debating whether the Inspector is "real". This is a thematic play, not a detective story. The Inspector's identity matters far less than his <em>function</em> — he is a device Priestley uses to expose the Birlings' guilt and deliver his message about social responsibility.</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m8-q1',
        question: 'Why does the dual time-frame of An Inspector Calls matter for analysis?',
        options: [
          'It makes the play historically accurate',
          'It creates dramatic irony because the 1945 audience knows the 1912 characters\' predictions are wrong',
          'It allows Priestley to include modern technology in the play',
          'It is required by the IGCSE specification',
        ],
        correct: 1,
        explanation: 'The gap between the 1912 setting and 1945 writing date creates massive dramatic irony. The audience knows Birling\'s predictions about war and the Titanic are wrong, which undermines his authority and discredits the capitalist worldview he represents.',
      },
      {
        id: 'iglit-dp-m8-q2',
        question: 'What is the function of Inspector Goole in the play?',
        options: [
          'He is a real police detective investigating a crime',
          'He is a dramatic device who exposes the Birlings\' guilt and voices Priestley\'s message about collective responsibility',
          'He is a ghost who haunts the Birling family',
          'He is a neighbour who dislikes the Birlings',
        ],
        correct: 1,
        explanation: 'Inspector Goole functions as Priestley\'s dramatic device — simultaneously detective, moral judge, and prophetic voice. His purpose is to expose the Birlings\' complicity and articulate the socialist message of collective responsibility.',
      },
      {
        id: 'iglit-dp-m8-q3',
        question: 'Why is Sheila considered the character who changes the most?',
        options: [
          'She goes from superficial and materialistic to genuinely accepting responsibility and challenging her parents',
          'She leaves the family home at the end of the play',
          'She is the only character who cries during the Inspector\'s visit',
          'She confesses to the most serious crime in the play',
        ],
        correct: 0,
        explanation: 'Sheila\'s arc is the most dramatic transformation in the play. She begins as a shallow, privileged young woman but ends as a moral force who accepts responsibility, shows genuine remorse, and challenges her parents\' refusal to learn.',
      },
      {
        id: 'iglit-dp-m8-q4',
        question: 'What does the final phone call at the end of the play signify?',
        options: [
          'That the Inspector was real all along',
          'That a real inspector is coming, creating a cyclical structure suggesting consequences cannot be avoided',
          'That Eva Smith is actually alive',
          'That Mr Birling has been promoted',
        ],
        correct: 1,
        explanation: 'The final phone call announces a real inspector is on the way, creating a cyclical structure. It suggests that the Birlings — and by extension, society — cannot escape the consequences of inequality and moral neglect, regardless of whether the first Inspector was "real".',
      },
      {
        id: 'iglit-dp-m8-q5',
        question: 'How does Priestley use Mr Birling to advance his socialist message?',
        options: [
          'By making Birling a sympathetic character the audience agrees with',
          'By making Birling\'s predictions spectacularly wrong, discrediting the capitalist worldview he represents',
          'By having Birling reform and accept responsibility by the end',
          'By giving Birling the play\'s most eloquent speeches',
        ],
        correct: 1,
        explanation: 'Priestley uses dramatic irony to make Birling\'s confident predictions about war and the Titanic spectacularly wrong. By discrediting Birling so thoroughly, Priestley undermines the capitalist, individualist philosophy Birling represents.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 — Essay Planning and Structure
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m9',
    title: 'Essay Planning and Structure',
    duration: '45 min',
    content: `
<h2>Planning and Structuring Literature Essays</h2>

<p>A well-structured essay is not just easier to read — it is easier to write. Students who plan their essays before writing consistently score higher than those who dive straight in, because planning forces you to <strong>think about your argument</strong> before you start articulating it. This module teaches you a reliable planning method and essay structure that you can adapt to any question on the IGCSE Literature paper.</p>

<h3>Why Planning Matters</h3>
<p>In the pressure of an exam, it is tempting to start writing immediately. But five minutes of planning saves you from:</p>
<ul>
  <li><strong>Repetition:</strong> Without a plan, students often make the same point twice in different words.</li>
  <li><strong>Irrelevance:</strong> A plan keeps you focused on the question rather than drifting into memorised material.</li>
  <li><strong>Running out of material:</strong> A plan ensures you have enough points to sustain your argument.</li>
  <li><strong>Weak conclusions:</strong> A plan means you know where your essay is heading, so your conclusion is purposeful rather than a rushed afterthought.</li>
</ul>

<h3>The 5-Minute Planning Method</h3>
<p>This method has been refined through examiner feedback and works for any IGCSE Literature question:</p>

<h4>Step 1: Decode the Question (1 minute)</h4>
<p>Underline the key words in the question. Identify:</p>
<ul>
  <li><strong>The focus:</strong> What theme, character, or idea are you being asked about?</li>
  <li><strong>The command word:</strong> "How does the writer present..." requires analysis of methods. "Explore..." requires a broader discussion. "To what extent..." requires evaluation and a balanced argument.</li>
  <li><strong>The scope:</strong> Is it about the whole text, an extract, or a specific relationship?</li>
</ul>

<h4>Step 2: Formulate Your Thesis (1 minute)</h4>
<p>Write one sentence that captures your overall argument — your <strong>conceptualised response</strong>. This thesis will appear in your introduction and guide every paragraph that follows.</p>

<p>Example question: "How does Priestley present the theme of responsibility in <em>An Inspector Calls</em>?"</p>
<p>Example thesis: "Priestley presents responsibility as an inescapable moral obligation that the privileged evade at society's peril, using the Inspector as a prophetic device to expose the devastating consequences of individualism."</p>

<h4>Step 3: Select Your Points (2 minutes)</h4>
<p>Jot down 4–5 main points, each with a supporting quotation or textual reference. Organise them in a logical order — usually chronological or from least to most significant.</p>

<h4>Step 4: Check Coverage (1 minute)</h4>
<p>Quickly check that your plan covers:</p>
<ul>
  <li>AO1 — A clear personal response with textual references</li>
  <li>AO2 — At least 2–3 moments of close language/structure analysis</li>
  <li>AO3 — At least 1–2 contextual connections</li>
  <li>The full scope of the text (not just one scene)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Write your plan on the exam paper — examiners will not mark it, but if you run out of time, they may read your plan to see where your argument was heading. A strong plan can demonstrate understanding even if your essay is incomplete.</div>

<h3>Essay Structure: The Flexible Framework</h3>
<p>The following structure works for both extract-based and discursive questions. Adapt it to suit the specific demands of each question:</p>

<h4>Introduction (3–5 minutes)</h4>
<p>Your introduction should be concise and purposeful. Include:</p>
<ul>
  <li>A direct response to the question</li>
  <li>Your thesis — the conceptualised argument you will develop</li>
  <li>Brief mention of the writer's overall purpose or approach</li>
</ul>
<p>Do <strong>not</strong> waste time with generic openings ("In this essay I will discuss...") or biographical information about the writer. Get straight to your argument.</p>

<h4>Main Body (25–35 minutes)</h4>
<p>Write 4–5 developed paragraphs. Each paragraph should follow this pattern:</p>

<p><strong>P</strong> — Point: A clear topic sentence that makes an argument related to the question.</p>
<p><strong>E</strong> — Evidence: A short, embedded quotation or specific textual reference.</p>
<p><strong>A</strong> — Analysis: Close examination of language, form, or structure. This is where AO2 marks live.</p>
<p><strong>C</strong> — Context: Where relevant, integrate a contextual connection that illuminates meaning (AO3).</p>
<p><strong>E</strong> — Effect/Evaluation: What impact does this have on the reader/audience? Link back to your thesis.</p>

<p>Not every paragraph needs every element, but most should contain at least PEAE. The goal is analytical depth, not formulaic repetition.</p>

<div class="key-term"><strong>Key Term: Topic Sentence</strong> — The opening sentence of a paragraph that states the point you are about to develop. A strong topic sentence relates directly to the question and signals the paragraph's argument. For example: "Priestley uses Sheila's transformation to embody his belief that the younger generation can lead social change."</div>

<h4>Conclusion (3–5 minutes)</h4>
<p>Your conclusion should:</p>
<ul>
  <li>Synthesise your argument — draw your points together into a final evaluative statement</li>
  <li>Return to your thesis and show how your essay has developed or refined it</li>
  <li>End with a comment on the writer's purpose or the text's wider significance</li>
</ul>
<p>Do <strong>not</strong> introduce new evidence or new points in the conclusion. Do not simply repeat your introduction in different words.</p>

<h3>Paragraph Transitions</h3>
<p>Strong essays flow from one paragraph to the next. Use transitions that show the relationship between your points:</p>
<ul>
  <li><strong>Building:</strong> "Furthermore...", "Moreover...", "This idea is developed further when..."</li>
  <li><strong>Contrasting:</strong> "However...", "In contrast...", "While this is true, Shakespeare also..."</li>
  <li><strong>Developing:</strong> "This connects to...", "Similarly...", "This is echoed in..."</li>
  <li><strong>Evaluating:</strong> "Perhaps most significantly...", "The most powerful instance of this is..."</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing paragraphs that are either too short (2–3 sentences with no development) or too long (a full page with multiple points crammed together). Each paragraph should develop one main point with evidence and analysis. Aim for 8–12 sentences per paragraph.</div>

<h3>Adapting Structure to Question Type</h3>

<h4>Extract-Based Questions</h4>
<p>Begin with the extract, then broaden to the wider text. Aim for roughly 60% extract analysis and 40% wider text discussion, but weave between the two rather than treating them as separate halves.</p>

<h4>Discursive/Whole-Text Questions</h4>
<p>Organise chronologically or thematically. Cover at least three different parts of the text to demonstrate breadth of knowledge.</p>

<h4>"To What Extent" Questions</h4>
<p>These require evaluation. Consider arguments on both sides before reaching a conclusion. You might argue "to a great extent" while acknowledging alternative readings.</p>

<h3>Time Management in the Exam</h3>
<p>For a 45-minute essay:</p>
<ul>
  <li><strong>Planning:</strong> 5 minutes</li>
  <li><strong>Introduction:</strong> 3–5 minutes</li>
  <li><strong>Main body (4–5 paragraphs):</strong> 25–30 minutes</li>
  <li><strong>Conclusion:</strong> 3–5 minutes</li>
  <li><strong>Proofreading:</strong> 2–3 minutes</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are running out of time, write a brief conclusion rather than no conclusion at all. Even two sentences that synthesise your argument will round off your essay and demonstrate that you had a coherent thesis.</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m9-q1',
        question: 'How long should you spend planning an essay in a 45-minute exam slot?',
        options: [
          '10 minutes — planning is the most important part',
          'No time — start writing immediately',
          'About 5 minutes — enough to decode the question, formulate a thesis, and select points',
          '15 minutes — you need a very detailed plan',
        ],
        correct: 2,
        explanation: 'Five minutes of planning is the optimal balance. It is enough time to decode the question, formulate a thesis, select 4–5 points with quotations, and check AO coverage — without eating into your writing time.',
      },
      {
        id: 'iglit-dp-m9-q2',
        question: 'What does PEACE stand for in the paragraph structure?',
        options: [
          'Plot, Evidence, Analysis, Context, Evaluation',
          'Point, Evidence, Analysis, Context, Effect/Evaluation',
          'Purpose, Example, Argument, Comparison, Ending',
          'Paragraph, Extract, Assessment, Comment, Explanation',
        ],
        correct: 1,
        explanation: 'PEACE stands for Point (topic sentence), Evidence (quotation), Analysis (close reading of language/structure), Context (historical/social connections), and Effect/Evaluation (impact on reader, link to thesis).',
      },
      {
        id: 'iglit-dp-m9-q3',
        question: 'What should a conclusion NOT do?',
        options: [
          'Synthesise the argument',
          'Return to the thesis',
          'Introduce new evidence or points',
          'Comment on the writer\'s purpose',
        ],
        correct: 2,
        explanation: 'A conclusion should never introduce new evidence or new points. It should synthesise the argument you have already made, return to your thesis, and offer a final evaluative comment on the writer\'s purpose or the text\'s significance.',
      },
      {
        id: 'iglit-dp-m9-q4',
        question: 'Why is writing your plan on the exam paper a good idea?',
        options: [
          'Because the examiner gives marks for having a plan',
          'Because if you run out of time, the examiner may read it to see where your argument was heading',
          'Because it looks professional',
          'Because you are required to submit a plan',
        ],
        correct: 1,
        explanation: 'While plans are not formally marked, examiners may read your plan if your essay is incomplete. A strong plan can demonstrate understanding and the direction of your argument even if you ran out of time to write it all up.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Timed Essay Practice
  // ──────────────────────────────────────────────
  {
    id: 'iglit-dp-m10',
    title: 'Timed Essay Practice',
    duration: '55 min',
    content: `
<h2>Timed Essay Practice for IGCSE Literature</h2>

<p>Knowing the theory of essay writing is not enough — you must be able to execute it under timed conditions. This module brings together everything you have learned across the course and applies it to realistic exam scenarios. We will work through model approaches to exam-style questions, identify the hallmarks of top-band responses, and provide strategies for maintaining quality under time pressure.</p>

<h3>The Reality of Timed Writing</h3>
<p>In the exam, you will not have time to write a perfect essay. Timed writing is about producing the <strong>best possible response within the constraints</strong>. This means:</p>
<ul>
  <li>Every sentence must earn its place — cut waffle ruthlessly.</li>
  <li>Your argument must be clear from the first paragraph — the examiner should never wonder what your thesis is.</li>
  <li>Quality of analysis beats quantity of points — three well-developed paragraphs outscore five superficial ones.</li>
  <li>You must practise regularly to build stamina and speed.</li>
</ul>

<h3>Model Question 1: Macbeth (Extract-Based)</h3>
<div class="text-extract"><strong>Question:</strong> Read the extract from Act 2, Scene 2 (Macbeth returns from killing Duncan). How does Shakespeare present guilt in this extract and in the play as a whole?</div>

<h4>Model Plan (5 minutes)</h4>
<p><strong>Thesis:</strong> Shakespeare presents guilt as an inescapable, corrosive force that destroys Macbeth psychologically even as his political power grows, suggesting that moral transgression carries an internal punishment more devastating than any external consequence.</p>
<ol>
  <li><strong>Extract — blood imagery:</strong> "Will all great Neptune's ocean wash this blood / Clean from my hand?" — hyperbole, guilt as indelible stain, cosmic scale.</li>
  <li><strong>Extract — auditory hallucination:</strong> "Methought I heard a voice cry, 'Sleep no more!'" — guilt manifesting as supernatural punishment, loss of peace.</li>
  <li><strong>Extract — contrast with Lady Macbeth:</strong> "A little water clears us of this deed" — her pragmatism vs his horror; dramatic irony with Act 5.</li>
  <li><strong>Wider text — banquet scene (3.4):</strong> Banquo's ghost — guilt becoming publicly visible, private torment invading public space.</li>
  <li><strong>Wider text — Lady Macbeth's sleepwalking (5.1):</strong> "Out, damned spot!" — full reversal, guilt's inescapability proven across both characters.</li>
</ol>

<h4>What Makes This Plan Strong</h4>
<ul>
  <li>The thesis is conceptualised — it offers an argument, not a description.</li>
  <li>Each point has a specific quotation ready.</li>
  <li>The plan moves from extract to wider text in a logical progression.</li>
  <li>The final point creates a satisfying structural echo with the extract.</li>
  <li>Context (Jacobean beliefs about conscience and divine punishment) can be woven into points 1 and 2.</li>
</ul>

<h3>Model Question 2: An Inspector Calls (Discursive)</h3>
<div class="text-extract"><strong>Question:</strong> How does Priestley use the character of Sheila to present ideas about responsibility?</div>

<h4>Model Plan (5 minutes)</h4>
<p><strong>Thesis:</strong> Priestley uses Sheila's transformation from complacent privilege to moral awareness as a microcosm of the social change he wanted post-war Britain to embrace, making her the play's embodiment of hope that the younger generation can build a more responsible society.</p>
<ol>
  <li><strong>Sheila's introduction:</strong> "Mummy" / ring / superficiality — Priestley establishes her as a product of upper-class complacency before her transformation.</li>
  <li><strong>The Milwards incident:</strong> Jealousy, abuse of power over Eva — Sheila's complicity in the class system's exploitation of the vulnerable.</li>
  <li><strong>Sheila's awakening:</strong> "But these girls aren't cheap labour — they're people" — the moment she breaks from her family's worldview. Contrast with Mr Birling's philosophy.</li>
  <li><strong>Sheila as moral voice:</strong> "I'm ashamed of you" — Sheila challenges her parents, aligning with the Inspector's position. Generational conflict as vehicle for Priestley's message.</li>
  <li><strong>Sheila at the end:</strong> Her insistence that the lesson matters regardless of the Inspector's identity — she has internalised the message of collective responsibility.</li>
</ol>

<h3>Hallmarks of Top-Band Responses</h3>
<p>Examiners consistently identify these features in the highest-scoring responses:</p>

<h4>1. A Conceptualised Argument</h4>
<p>The essay is built around a central thesis that is stated in the introduction and developed throughout. Every paragraph advances this argument rather than standing alone.</p>

<h4>2. Precise, Embedded Quotation</h4>
<p>Quotations are short (3–6 words), woven into the candidate's own sentences, and followed by detailed analysis. There is no "quotation dumping" — dropping in long passages without comment.</p>

<h4>3. Analysis of the Writer's Methods</h4>
<p>The response consistently focuses on <em>how</em> the writer creates meaning — through specific word choices, structural decisions, use of dramatic devices, and deployment of imagery. This is what earns AO2 marks.</p>

<h4>4. Integrated Context</h4>
<p>Contextual knowledge is seamlessly woven into analytical paragraphs, not presented as disconnected historical facts. It illuminates meaning rather than decorating the essay.</p>

<h4>5. A Personal Voice</h4>
<p>Top-band responses have a distinctive critical voice. They use evaluative language ("Perhaps most significantly...", "It could be argued...", "Shakespeare's most devastating technique here is...") and demonstrate genuine engagement with the text.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners read hundreds of essays. The ones that stand out are those with a genuine personal voice and a clear argument — not those that reproduce memorised paragraphs. Be yourself, and be specific.</div>

<h3>Strategies for Maintaining Quality Under Pressure</h3>

<h4>1. The "Traffic Light" System</h4>
<p>As you write each paragraph, mentally assign it a colour:</p>
<ul>
  <li><strong>Green:</strong> This paragraph has a clear point, embedded quotation, and detailed analysis. Move on.</li>
  <li><strong>Amber:</strong> This paragraph has a point and evidence but needs more analysis. Add one more analytical sentence before moving on.</li>
  <li><strong>Red:</strong> This paragraph is drifting into plot retelling or has no quotation. Stop, refocus on the question, and add evidence + analysis.</li>
</ul>

<h4>2. The "So What?" Test</h4>
<p>After every analytical point, ask yourself "So what?" If you cannot explain why your point matters — why it is significant for the reader, the text, or the writer's purpose — then your analysis is incomplete. Add a sentence that explains the significance.</p>

<h4>3. The "Clock Check" Routine</h4>
<p>Check the clock at these points during a 45-minute essay:</p>
<ul>
  <li><strong>5 minutes:</strong> Plan should be complete. Start writing.</li>
  <li><strong>15 minutes:</strong> Introduction and first body paragraph should be done.</li>
  <li><strong>30 minutes:</strong> You should be on your third or fourth body paragraph.</li>
  <li><strong>40 minutes:</strong> Begin your conclusion.</li>
  <li><strong>43 minutes:</strong> Start proofreading.</li>
</ul>

<h3>Common Time-Wasters to Avoid</h3>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a long introduction that summarises the plot or provides biographical information about the writer. Your introduction should be 3–5 sentences: respond to the question, state your thesis, and begin. Every sentence in the introduction that does not advance your argument is wasted time.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on your first paragraph and rushing the rest. Allocate your time evenly. A strong essay with five solid paragraphs always outscores one with a brilliant first paragraph and three rushed ones.</div>

<h3>Practice Schedule</h3>
<p>To build exam readiness, follow this practice schedule in the weeks before the exam:</p>
<ul>
  <li><strong>Week 1:</strong> Write one essay per text with no time limit. Focus on quality and structure.</li>
  <li><strong>Week 2:</strong> Write one essay per text in 50 minutes (slightly over time). Focus on planning speed.</li>
  <li><strong>Week 3:</strong> Write one essay per text in 45 minutes (exam time). Focus on maintaining quality under pressure.</li>
  <li><strong>Week 4:</strong> Write two essays back-to-back (simulating the full exam). Focus on stamina and consistency.</li>
</ul>
<p>After each practice essay, review it against the Assessment Objectives. Identify which AO is weakest and target it in your next practice.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The students who improve most between mock and final exams are those who practise timed essays regularly and review them critically. Reading model answers helps, but writing your own essays — under real conditions — is the only way to build the speed and confidence you need.</div>
`,
    quiz: [
      {
        id: 'iglit-dp-m10-q1',
        question: 'What is the most important hallmark of a top-band Literature response?',
        options: [
          'It includes at least 20 quotations',
          'It is built around a conceptualised argument that is developed throughout',
          'It covers every scene in the text',
          'It includes a long introduction with the writer\'s biography',
        ],
        correct: 1,
        explanation: 'The most important hallmark of a top-band response is a conceptualised argument — a central thesis stated in the introduction and developed through every paragraph. This gives the essay coherence, direction, and analytical depth.',
      },
      {
        id: 'iglit-dp-m10-q2',
        question: 'What is the "So What?" test?',
        options: [
          'A way of checking whether your quotations are long enough',
          'Asking yourself why your analytical point matters — its significance for the reader, text, or writer\'s purpose',
          'A method for choosing which question to answer',
          'A way of testing whether the examiner will be impressed',
        ],
        correct: 1,
        explanation: 'The "So What?" test means asking, after every analytical point, why it matters. If you cannot explain the significance of your point for the reader, the text, or the writer\'s purpose, your analysis is incomplete.',
      },
      {
        id: 'iglit-dp-m10-q3',
        question: 'In a 45-minute essay, when should you start your conclusion?',
        options: [
          'At 20 minutes',
          'At 30 minutes',
          'At 40 minutes',
          'You do not need a conclusion',
        ],
        correct: 2,
        explanation: 'At the 40-minute mark in a 45-minute essay, you should begin your conclusion. This leaves enough time to write a purposeful concluding paragraph and still have 2–3 minutes for proofreading.',
      },
      {
        id: 'iglit-dp-m10-q4',
        question: 'Why should you avoid spending too long on your first paragraph?',
        options: [
          'Because the first paragraph is not marked',
          'Because allocating time evenly produces a stronger overall essay than having one brilliant paragraph and three rushed ones',
          'Because the examiner only reads the conclusion',
          'Because the first paragraph should only be one sentence',
        ],
        correct: 1,
        explanation: 'A strong essay with five solid paragraphs always outscores one with a brilliant first paragraph and three rushed ones. Allocating time evenly ensures consistent quality throughout the entire response.',
      },
      {
        id: 'iglit-dp-m10-q5',
        question: 'What distinguishes top-band responses from mid-range ones, according to examiners?',
        options: [
          'Top-band responses are longer',
          'Top-band responses have a genuine personal voice, a clear argument, and focus on the writer\'s methods',
          'Top-band responses use more complicated vocabulary',
          'Top-band responses always agree with the question\'s premise',
        ],
        correct: 1,
        explanation: 'Examiners consistently identify a genuine personal voice, a clear conceptualised argument, and consistent focus on the writer\'s methods as the features that distinguish top-band responses from mid-range ones.',
      },
    ],
  },
];

// Assessment questions for Drama & Prose
const dramaProseAssessment: CourseQuiz[] = [
  {
    id: 'iglit-dp-a1',
    question: 'What is the primary focus of AO2 in IGCSE English Literature?',
    options: ['Understanding plot and character', 'Analysing language, form and structure', 'Demonstrating contextual knowledge', 'Using accurate spelling and grammar'],
    correct: 1,
    explanation: 'AO2 focuses on analysing the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
  },
  {
    id: 'iglit-dp-a2',
    question: 'What does it mean to treat a character as a "construct"?',
    options: ['To describe them as a real person', 'To focus on their physical appearance', 'To recognise they are deliberately created by the writer for specific purposes', 'To compare them with real historical figures'],
    correct: 2,
    explanation: 'Treating a character as a construct means understanding that the writer deliberately created them to serve artistic purposes — embodying themes, creating tension, representing ideas.',
  },
  {
    id: 'iglit-dp-a3',
    question: 'In Macbeth, what does the metaphor "full of scorpions is my mind" convey?',
    options: ['Macbeth\'s physical illness', 'The venomous, corrosive nature of his guilt and psychological torment', 'His fear of insects', 'His anger at the witches'],
    correct: 1,
    explanation: 'The scorpion metaphor conveys Macbeth\'s guilt as something venomous and self-destructive — his thoughts actively poison him from within, creating visceral imagery of psychological torment.',
  },
  {
    id: 'iglit-dp-a4',
    question: 'Why is Priestley\'s choice to set An Inspector Calls in 1912 while writing in 1945 significant?',
    options: ['It was the only period he knew about', 'It creates dramatic irony as the audience knows the characters\' predictions are wrong', 'It makes the play more historically accurate', 'It was required by the theatre company'],
    correct: 1,
    explanation: 'The dual time-frame creates dramatic irony. The 1945 audience knows Birling\'s predictions about war and the Titanic are wrong, which discredits his worldview and strengthens Priestley\'s socialist message.',
  },
  {
    id: 'iglit-dp-a5',
    question: 'What is "bolted-on" context and why should it be avoided?',
    options: ['Context placed in the conclusion', 'Historical facts presented in isolation without connection to the text\'s meaning', 'Using too much context in one essay', 'Referring to the writer\'s biography'],
    correct: 1,
    explanation: 'Bolted-on context is a disconnected historical statement that does not connect to the text or its meaning. It reads as a history lesson rather than literary analysis and scores poorly for AO3.',
  },
  {
    id: 'iglit-dp-a6',
    question: 'How does Banquo function in relation to Macbeth?',
    options: ['As his loyal supporter throughout', 'As a foil — both hear the prophecy but Banquo resists temptation, highlighting Macbeth\'s moral failure', 'As the main antagonist', 'As a comic relief character'],
    correct: 1,
    explanation: 'Banquo is Macbeth\'s foil. Both hear the witches\' prophecy, but Banquo resists temptation while Macbeth succumbs. This contrast shows that a different moral choice was always available to Macbeth.',
  },
  {
    id: 'iglit-dp-a7',
    question: 'What is a "conceptualised argument" in a Literature essay?',
    options: ['A summary of the plot', 'An overarching thesis that unifies the entire essay', 'A list of literary devices', 'A description of the historical context'],
    correct: 1,
    explanation: 'A conceptualised argument is an overarching thesis or interpretation that threads through the whole essay, giving it coherence and direction. It goes beyond listing points to present a unified critical reading.',
  },
  {
    id: 'iglit-dp-a8',
    question: 'What is the significance of Lady Macbeth\'s sleepwalking scene (Act 5, Scene 1)?',
    options: ['It shows she is physically ill', 'It reveals the complete reversal of her earlier confidence, proving guilt is inescapable', 'It is comic relief before the final battle', 'It shows she is planning another murder'],
    correct: 1,
    explanation: 'The sleepwalking scene is a devastating reversal. The woman who dismissed guilt with "a little water clears us of this deed" is now compulsively trying to wash imaginary blood from her hands, proving guilt cannot be suppressed.',
  },
  {
    id: 'iglit-dp-a9',
    question: 'Who does Inspector Goole function as in An Inspector Calls?',
    options: ['A real police detective', 'Priestley\'s mouthpiece — voicing the socialist message of collective responsibility', 'A family friend testing the Birlings', 'Eva Smith\'s father'],
    correct: 1,
    explanation: 'Inspector Goole is Priestley\'s mouthpiece, voicing the playwright\'s socialist message about collective responsibility. His function is more important than his identity — he is a dramatic device for moral reckoning.',
  },
  {
    id: 'iglit-dp-a10',
    question: 'What is the difference between denotation and connotation in close reading?',
    options: ['Denotation is for poetry, connotation for prose', 'Denotation is the literal meaning; connotation is the associations and feelings a word carries', 'They are the same thing', 'Denotation is the writer\'s meaning; connotation is the reader\'s'],
    correct: 1,
    explanation: 'Denotation is a word\'s literal, dictionary meaning. Connotation is the web of associations, feelings, and ideas it carries beyond its literal meaning. Strong analysis explores both layers.',
  },
  {
    id: 'iglit-dp-a11',
    question: 'What does the final phone call at the end of An Inspector Calls signify?',
    options: ['The play is over', 'A cyclical structure suggesting consequences cannot be escaped', 'The Inspector is returning for his hat', 'Mr Birling has been arrested'],
    correct: 1,
    explanation: 'The final phone call creates a cyclical structure, announcing that a real inspector is coming. It suggests the Birlings — and society — cannot escape accountability, reinforcing Priestley\'s warning.',
  },
  {
    id: 'iglit-dp-a12',
    question: 'In the context of Macbeth, what is the "Great Chain of Being"?',
    options: ['A physical chain used in the play', 'A Jacobean belief in a divinely ordained hierarchy where disrupting the order causes chaos', 'A metaphor for friendship between characters', 'A trade route mentioned in the play'],
    correct: 1,
    explanation: 'The Great Chain of Being was a Jacobean belief that all creation existed in a fixed, divinely ordained hierarchy. Disrupting this order — through regicide, for example — was thought to cause chaos in nature itself.',
  },
  {
    id: 'iglit-dp-a13',
    question: 'Why is Sheila considered the most transformed character in An Inspector Calls?',
    options: ['She changes her hairstyle', 'She goes from superficial privilege to genuine moral awareness, accepting responsibility and challenging her parents', 'She leaves the house at the end', 'She becomes friends with the Inspector'],
    correct: 1,
    explanation: 'Sheila transforms from a complacent, materialistic young woman into a moral voice who accepts responsibility, shows genuine remorse, and challenges her parents\' refusal to learn. She embodies Priestley\'s hope.',
  },
  {
    id: 'iglit-dp-a14',
    question: 'What is "feature-spotting" and why is it problematic?',
    options: ['Identifying too many themes in one essay', 'Naming a literary device without explaining its effect on meaning', 'Spotting errors in the text', 'Identifying contextual features'],
    correct: 1,
    explanation: 'Feature-spotting is identifying a literary device (e.g., "this is a metaphor") without analysing its meaning or effect. It demonstrates recognition but not analysis, and earns minimal marks.',
  },
  {
    id: 'iglit-dp-a15',
    question: 'What should the opening paragraph of a Literature essay achieve?',
    options: ['Summarise the entire plot', 'Respond to the question, state a thesis, and establish the direction of the argument', 'List all themes in the text', 'Provide a biography of the writer'],
    correct: 1,
    explanation: 'The opening paragraph should respond directly to the question, state your conceptualised thesis, and establish the direction of your argument. Avoid generic introductions or plot summaries.',
  },
  {
    id: 'iglit-dp-a16',
    question: 'What is a motif?',
    options: ['The main character of a text', 'A recurring image, symbol, or idea that contributes to themes', 'A type of poem', 'The moral of the story'],
    correct: 1,
    explanation: 'A motif is a recurring image, symbol, or idea that appears throughout a text and contributes to its themes. Examples include blood in Macbeth and the telephone in An Inspector Calls.',
  },
  {
    id: 'iglit-dp-a17',
    question: 'Why does Shakespeare begin Macbeth with the witches rather than with Macbeth himself?',
    options: ['Because the witches are the main characters', 'To immediately establish an atmosphere of moral inversion and supernatural unease', 'Because it was a convention to start plays with minor characters', 'Because the actor playing Macbeth was not ready'],
    correct: 1,
    explanation: 'Opening with the witches immediately establishes the play\'s atmosphere of moral inversion ("fair is foul, and foul is fair") and supernatural unease, signalling that normal moral categories will be unreliable.',
  },
  {
    id: 'iglit-dp-a18',
    question: 'How should you balance extract analysis and wider text discussion in an extract-based essay?',
    options: ['Focus entirely on the extract', 'Aim for roughly 60% extract and 40% wider text, weaving between the two', 'Write about the wider text first, then the extract', 'Ignore the extract and write about the whole text'],
    correct: 1,
    explanation: 'Aim for roughly 60% extract analysis and 40% wider text discussion, but weave between the two rather than treating them as separate halves. This balance ensures close analysis while demonstrating whole-text knowledge.',
  },
  {
    id: 'iglit-dp-a19',
    question: 'What does Mr Birling represent in An Inspector Calls?',
    options: ['The working class', 'Capitalist self-interest and moral blindness of the privileged class', 'The voice of reason', 'Priestley\'s own political views'],
    correct: 1,
    explanation: 'Mr Birling represents capitalist self-interest and the moral blindness of the privileged class. Priestley discredits his worldview through dramatic irony, making his confident predictions spectacularly wrong.',
  },
  {
    id: 'iglit-dp-a20',
    question: 'What is the "So What?" test in essay writing?',
    options: ['A way of checking if your essay is long enough', 'Asking why your analytical point matters — what its significance is for the reader, text, or writer\'s purpose', 'A way of choosing which quotation to use', 'A test the examiner applies to your conclusion'],
    correct: 1,
    explanation: 'The "So What?" test means asking, after every analytical point, why it matters. If you cannot explain the significance of your point, your analysis is incomplete and needs a sentence explaining its importance.',
  },
];


// ═══════════════════════════════════════════════════════════════════════════════
// IGCSE Literature — Poetry & Unseen  (Edexcel 4ET1)
// ═══════════════════════════════════════════════════════════════════════════════

const poetryModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — How to Approach Poetry
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m1',
    title: 'How to Approach Poetry',
    duration: '50 min',
    content: `
<h2>Approaching Poetry for IGCSE Literature</h2>

<p>Poetry can feel intimidating, but it follows the same analytical principles as drama and prose. The difference is that poetry communicates through <strong>compressed, heightened language</strong> — every word carries more weight because there are fewer of them. This module establishes the foundational approach you will use for both anthology and unseen poetry on the Edexcel IGCSE Literature paper.</p>

<div class="key-term"><strong>Key Term: Poetry</strong> — A literary form that uses condensed, musical, and often figurative language to create particular effects and communicate complex ideas, emotions, and experiences. Poetry is characterised by its attention to form, rhythm, imagery, and the sounds of words.</div>

<h3>Why Poetry Matters for IGCSE</h3>
<p>The poetry component of Edexcel IGCSE Literature tests your ability to analyse how poets use language, form, and structure to create meanings and effects. You will encounter two types of poetry question:</p>
<ul>
  <li><strong>Anthology poetry:</strong> Poems you have studied in advance and should know well. You may be asked to analyse a single poem or compare two poems.</li>
  <li><strong>Unseen poetry:</strong> A poem you have never seen before that you must analyse in the exam. This tests your transferable analytical skills rather than your knowledge of specific texts.</li>
</ul>

<h3>First Steps: Reading a Poem</h3>
<p>When you first encounter a poem — whether in class or in the exam — resist the urge to immediately hunt for literary devices. Instead, follow this sequence:</p>

<h4>Step 1: Read for Meaning (First Read)</h4>
<p>Read the poem through once without annotating. Ask yourself:</p>
<ul>
  <li>What is the poem <strong>about</strong> on a surface level? Who is speaking? What is the situation?</li>
  <li>What is the overall <strong>mood or tone</strong>? How does the poem make you feel?</li>
  <li>What is the poem's <strong>narrative or argument</strong>? Does it tell a story, describe a scene, express an emotion, or make an argument?</li>
</ul>

<h4>Step 2: Read for Method (Second Read)</h4>
<p>Read the poem again, this time focusing on <em>how</em> the poet creates meaning. Annotate:</p>
<ul>
  <li><strong>Striking images:</strong> Metaphors, similes, personification, symbolism.</li>
  <li><strong>Sound effects:</strong> Alliteration, assonance, sibilance, onomatopoeia, rhyme.</li>
  <li><strong>Structural choices:</strong> Line breaks, stanza divisions, enjambment, caesura.</li>
  <li><strong>Tone shifts:</strong> Points where the mood, perspective, or argument changes.</li>
  <li><strong>Unusual word choices:</strong> Words that surprise, disturb, or stand out.</li>
</ul>

<h4>Step 3: Read for Depth (Third Read)</h4>
<p>Read the poem a third time and consider:</p>
<ul>
  <li>What is the poet's <strong>purpose</strong>? What message, emotion, or experience are they trying to communicate?</li>
  <li>How do the methods you identified in Step 2 <strong>serve this purpose</strong>?</li>
  <li>Are there any <strong>ambiguities</strong> — moments where the poem could mean more than one thing? Ambiguity is often deliberate and worth exploring.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In the exam, you will not have time for three separate reads. Combine Steps 1 and 2 by reading carefully once while annotating. But when studying poems at home, the three-read approach builds the deep understanding you need.</div>

<h3>The Poet's Toolkit</h3>
<p>Poets have three main categories of tools at their disposal. You need to be able to discuss all three:</p>

<h4>Language</h4>
<p>The specific words the poet chooses and the effects they create. This includes vocabulary, imagery (metaphor, simile, personification), tone, and register. Language is usually the easiest element to analyse and the one students feel most confident with.</p>

<h4>Form</h4>
<p>The overall shape and type of the poem. Is it a sonnet? A free verse poem? A dramatic monologue? A ballad? The form a poet chooses communicates meaning — a sonnet's 14-line structure and volta (turn) create expectations that the poet can fulfil or subvert.</p>

<div class="key-term"><strong>Key Term: Form</strong> — The type, shape, and pattern of a poem as a whole. Common forms include the sonnet (14 lines with a volta), the ballad (narrative poem with regular rhythm and rhyme), free verse (no fixed pattern), and the dramatic monologue (a single speaker addressing a silent listener).</div>

<h4>Structure</h4>
<p>How the poem is organised internally. This includes stanza divisions, line length, enjambment, caesura, the progression of ideas, and the relationship between beginning and ending. Structure is often the element students neglect, but it is richly rewarded by examiners.</p>

<div class="key-term"><strong>Key Term: Structure</strong> — The internal organisation of a poem: how ideas are sequenced, how stanzas relate to each other, where shifts occur, and how the poem moves from beginning to end. Structure is distinct from form — form is the overall type, structure is the internal arrangement.</div>

<h3>Common Poetry Terminology</h3>
<p>You need to use subject terminology accurately. Here are the essential terms:</p>
<ul>
  <li><strong>Enjambment:</strong> When a sentence or phrase runs over from one line to the next without punctuation, creating momentum and sometimes surprise.</li>
  <li><strong>Caesura:</strong> A pause within a line of poetry, usually created by punctuation. It can create emphasis, hesitation, or a shift in thought.</li>
  <li><strong>Volta:</strong> A turn or shift in a poem — a change in argument, mood, or perspective. Sonnets typically have a volta at line 9 (Petrarchan) or before the final couplet (Shakespearean).</li>
  <li><strong>Stanza:</strong> A group of lines forming a unit within a poem (like a paragraph in prose).</li>
  <li><strong>Metre:</strong> The rhythmic pattern of stressed and unstressed syllables. Iambic pentameter (five pairs of unstressed/stressed syllables) is the most common in English poetry.</li>
  <li><strong>Rhyme scheme:</strong> The pattern of end rhymes, described using letters (ABAB, AABB, ABCABC, etc.).</li>
  <li><strong>Free verse:</strong> Poetry with no regular metre or rhyme scheme.</li>
  <li><strong>Persona:</strong> The speaker of the poem, who may or may not be the poet themselves.</li>
</ul>

<h3>Writing About Poetry: Key Principles</h3>
<ul>
  <li><strong>Always refer to the poet by name:</strong> "The poet presents..." or "Shelley uses..." — this keeps your focus on craft.</li>
  <li><strong>Quote precisely:</strong> Even single words count. "The verb 'devour' suggests..." is effective analysis.</li>
  <li><strong>Explain effect, not just technique:</strong> "The poet uses enjambment" is not analysis. "The enjambment between lines 3 and 4 creates a sense of breathless urgency that mirrors the speaker's panic" is analysis.</li>
  <li><strong>Consider multiple interpretations:</strong> Poetry is often deliberately ambiguous. Exploring more than one possible meaning demonstrates sophistication.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Paraphrasing the poem line by line without analysis. "In the first line, the poet says they are walking in the forest. In the second line, they describe the trees." This is summary, not analysis. Focus on how and why the poet writes, not just what they say.</div>
`,
    quiz: [
      {
        id: 'iglit-po-m1-q1',
        question: 'What are the three main categories of tools poets use to create meaning?',
        options: [
          'Plot, character, and setting',
          'Language, form, and structure',
          'Rhyme, rhythm, and repetition',
          'Metaphor, simile, and personification',
        ],
        correct: 1,
        explanation: 'Poets create meaning through language (word choices and imagery), form (the overall type and shape of the poem), and structure (the internal organisation and progression of ideas). All three must be discussed in strong responses.',
      },
      {
        id: 'iglit-po-m1-q2',
        question: 'What is the difference between "form" and "structure" in poetry?',
        options: [
          'They are the same thing',
          'Form is the overall type/shape of the poem; structure is its internal organisation',
          'Form is about language; structure is about rhyme',
          'Form is for sonnets; structure is for free verse',
        ],
        correct: 1,
        explanation: 'Form refers to the overall type and shape of a poem (e.g., sonnet, ballad, free verse). Structure refers to the internal organisation — how ideas are sequenced, where shifts occur, how stanzas relate to each other.',
      },
      {
        id: 'iglit-po-m1-q3',
        question: 'What is a "volta" in poetry?',
        options: [
          'The final word of a poem',
          'A type of Italian poem',
          'A turn or shift in argument, mood, or perspective',
          'A repeated line or refrain',
        ],
        correct: 2,
        explanation: 'A volta is a turn or shift in a poem — a change in argument, mood, or perspective. Sonnets typically feature a volta, but the term can apply to any poem where a significant shift occurs.',
      },
      {
        id: 'iglit-po-m1-q4',
        question: 'Why should you avoid paraphrasing a poem line by line?',
        options: [
          'Because it takes too long',
          'Because it is summary, not analysis — you need to focus on how and why the poet writes',
          'Because the examiner already has the poem in front of them',
          'Because paraphrasing is only appropriate for prose',
        ],
        correct: 1,
        explanation: 'Line-by-line paraphrasing produces summary, not analysis. The exam tests your ability to explain how the poet uses language, form, and structure to create meaning — not your ability to retell what the poem says.',
      },
      {
        id: 'iglit-po-m1-q5',
        question: 'What is "enjambment"?',
        options: [
          'A poem with no rhyme scheme',
          'When a sentence or phrase runs over from one line to the next without punctuation',
          'A pause in the middle of a line',
          'The repetition of a sound at the start of words',
        ],
        correct: 1,
        explanation: 'Enjambment occurs when a sentence or phrase runs over from one line to the next without end-stopping punctuation. It creates momentum, can generate surprise, and often emphasises the word at the start of the next line.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Analysing Form and Structure
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m2',
    title: 'Analysing Form and Structure in Poetry',
    duration: '50 min',
    content: `
<h2>Form and Structure: The Architecture of Poetry</h2>

<p>Language analysis is the skill most students feel comfortable with, but <strong>form and structure</strong> are where many candidates lose marks — or gain a significant advantage. Examiners consistently report that the best responses integrate discussion of form and structure alongside language analysis, while weaker responses focus exclusively on imagery and word choice. This module gives you the tools to analyse the architecture of a poem with confidence.</p>

<h3>Analysing Form</h3>
<p>The <strong>form</strong> of a poem is its overall type and shape. A poet's choice of form is never accidental — it communicates meaning before a single word is read.</p>

<h4>The Sonnet</h4>
<p>A 14-line poem with a specific rhyme scheme and a volta (turn). There are two main types:</p>
<ul>
  <li><strong>Petrarchan (Italian) sonnet:</strong> An octave (8 lines, ABBAABBA) followed by a sestet (6 lines, CDECDE or CDCDCD). The volta typically occurs between lines 8 and 9.</li>
  <li><strong>Shakespearean (English) sonnet:</strong> Three quatrains (4 lines each, ABAB CDCD EFEF) followed by a concluding couplet (GG). The volta typically occurs before the couplet.</li>
</ul>
<p>Sonnets are traditionally associated with love, but many poets use the form ironically or subversively. When a poet chooses the sonnet form for a poem about war, death, or oppression, the contrast between the form's associations and the poem's content creates tension that is worth analysing.</p>

<h4>The Dramatic Monologue</h4>
<p>A poem in which a single speaker addresses a silent listener, revealing their character through what they say (and what they inadvertently reveal). Robert Browning's "My Last Duchess" is the classic example. The key feature is the gap between what the speaker intends to communicate and what the reader actually perceives.</p>

<h4>Free Verse</h4>
<p>Poetry with no fixed metre, rhyme scheme, or stanza pattern. Free verse is not formless — it simply creates its own form. When a poet chooses free verse, they are rejecting the constraints of traditional forms, which may mirror themes of freedom, rebellion, or disorder. Line breaks and spacing become especially important in free verse because they are the poet's primary structural tools.</p>

<h4>The Ballad</h4>
<p>A narrative poem with a regular rhythm and rhyme scheme, traditionally used for storytelling. Ballads often use quatrains (four-line stanzas) with an ABCB rhyme scheme. The ballad form creates a sense of oral tradition and communal storytelling.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing form, always explain <em>why</em> the poet chose this form and what it contributes to meaning. Simply identifying the form ("This is a sonnet") is feature-spotting and earns minimal marks. Explain the effect: "The poet's use of the sonnet form, traditionally associated with love, creates an ironic tension with the poem's violent subject matter."</div>

<h3>Analysing Structure</h3>
<p>Structure is how the poem is organised internally — the progression of ideas, the arrangement of stanzas, and the techniques that control pace and emphasis.</p>

<h4>Stanza Organisation</h4>
<p>How is the poem divided into stanzas? Regular stanzas (all the same length) can create a sense of order and control. Irregular stanzas may reflect disorder, emotional turbulence, or shifting perspectives. A single-stanza poem (a block of text with no breaks) can create a sense of relentlessness or urgency.</p>

<h4>Enjambment</h4>
<p>When a sentence or clause runs over from one line to the next without punctuation. Enjambment creates momentum, pulls the reader forward, and can generate surprise by delaying the completion of a thought. The word at the start of the enjambed line often receives extra emphasis.</p>

<p><strong>Example:</strong></p>
<div class="text-extract">"I wandered lonely as a cloud<br>That floats on high o'er vales and hills"<div class="source">Wordsworth</div></div>
<p>The enjambment after "cloud" creates a floating, drifting effect that mirrors the content — the reader, like the cloud, is carried forward without pause.</p>

<h4>Caesura</h4>
<p>A pause within a line of poetry, usually created by punctuation (full stop, comma, dash, semicolon). Caesura can create emphasis, interrupt the rhythm, or signal a shift in thought.</p>

<p><strong>Example:</strong></p>
<div class="text-extract">"Out, damned spot! Out, I say!"<div class="source">Shakespeare, Macbeth 5.1</div></div>
<p>The exclamation marks create multiple caesurae, breaking the line into urgent, fragmented outbursts that convey Lady Macbeth's desperate, fractured mental state.</p>

<h4>Line Length and Rhythm</h4>
<p>Short lines can create pace, urgency, or isolation. Long lines can create flow, abundance, or breathlessness. Changes in line length often signal shifts in mood or meaning. Regular rhythm creates a sense of order; disrupted rhythm creates unease.</p>

<h4>The Opening and Closing</h4>
<p>How a poem begins and ends is always significant. Consider:</p>
<ul>
  <li>Does the poem open <em>in medias res</em> (in the middle of action) or with a scene-setting description?</li>
  <li>Does the ending resolve the poem's tensions or leave them open?</li>
  <li>Is there a circular structure — does the poem end where it began?</li>
  <li>Does the final line deliver a twist, a revelation, or a summary?</li>
</ul>

<h4>Progression and Shifts</h4>
<p>Track how the poem moves from beginning to end. Does it:</p>
<ul>
  <li>Build from calm to intensity?</li>
  <li>Move from past to present (or present to past)?</li>
  <li>Shift from one perspective to another?</li>
  <li>Progress from question to answer?</li>
  <li>Develop an argument with a counter-argument?</li>
</ul>

<div class="key-term"><strong>Key Term: Volta</strong> — A turn or shift in a poem's argument, mood, or perspective. While associated with sonnets, a volta can occur in any poem. Identifying where the volta occurs and what changes is a powerful analytical move.</div>

<h3>Writing About Form and Structure</h3>
<p>When writing about form and structure in your essay, always connect your observation to meaning and effect:</p>

<p><strong>Weak:</strong> "The poem uses enjambment between stanzas."</p>
<p><strong>Strong:</strong> "The enjambment between stanzas 2 and 3 propels the reader forward without pause, mirroring the relentless advance of time that the speaker is powerless to stop. The lack of a clear break between stanzas structurally enacts the poem's theme — that time respects no boundaries."</p>

<p>Notice how the strong version identifies the technique, locates it precisely, and explains both the effect on the reader and the connection to the poem's themes.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring form and structure entirely and writing only about language. Examiners specifically look for discussion of how the poem's architecture contributes to meaning. Even one well-analysed structural point can significantly improve your mark.</div>

<h3>Practice: Structural Analysis Questions</h3>
<p>When studying any poem, ask yourself these structural questions:</p>
<ol>
  <li>Why has the poet chosen this particular form?</li>
  <li>How are the stanzas organised and why?</li>
  <li>Where does the poem's volta or shift occur?</li>
  <li>How does enjambment or caesura affect pace and emphasis?</li>
  <li>What is the relationship between the poem's opening and closing?</li>
  <li>How does the poem's structure mirror or contrast with its content?</li>
</ol>
`,
    quiz: [
      {
        id: 'iglit-po-m2-q1',
        question: 'What is the key difference between a Petrarchan and a Shakespearean sonnet?',
        options: [
          'Petrarchan sonnets are longer',
          'Petrarchan sonnets have an octave/sestet structure with a volta at line 8-9; Shakespearean sonnets have three quatrains and a couplet',
          'Shakespearean sonnets do not rhyme',
          'Petrarchan sonnets are always about love',
        ],
        correct: 1,
        explanation: 'A Petrarchan sonnet has an octave (8 lines) and sestet (6 lines) with the volta typically between them. A Shakespearean sonnet has three quatrains (4 lines each) and a concluding couplet, with the volta before the couplet.',
      },
      {
        id: 'iglit-po-m2-q2',
        question: 'Why is identifying a form without explaining its effect considered "feature-spotting"?',
        options: [
          'Because identifying forms is incorrect',
          'Because it demonstrates recognition without analysis — you must explain why the poet chose the form and what it contributes to meaning',
          'Because examiners do not know what sonnets are',
          'Because form is not assessed in the exam',
        ],
        correct: 1,
        explanation: 'Simply identifying "this is a sonnet" is feature-spotting because it demonstrates recognition without analysis. You must explain why the poet chose this form and how it contributes to the poem\'s meaning and effect.',
      },
      {
        id: 'iglit-po-m2-q3',
        question: 'How does caesura typically affect the reading of a poem?',
        options: [
          'It makes the poem longer',
          'It creates a pause within a line, producing emphasis, interruption, or a shift in thought',
          'It removes the poem\'s rhyme scheme',
          'It connects two stanzas together',
        ],
        correct: 1,
        explanation: 'Caesura creates a pause within a line of poetry, usually through punctuation. This can produce emphasis on surrounding words, interrupt the rhythm to create a sense of disruption, or signal a shift in the speaker\'s thought.',
      },
      {
        id: 'iglit-po-m2-q4',
        question: 'What might a poet communicate by choosing free verse rather than a traditional form?',
        options: [
          'That they are not a skilled poet',
          'Themes of freedom, rebellion, or disorder — rejecting formal constraints mirrors the poem\'s content',
          'That the poem is not serious',
          'Nothing — free verse has no meaning',
        ],
        correct: 1,
        explanation: 'Choosing free verse is a deliberate rejection of traditional formal constraints. This can mirror themes of freedom, rebellion, individuality, or disorder within the poem\'s content. Free verse is not formless — it creates its own form.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Analysing Language and Imagery
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m3',
    title: 'Analysing Language and Imagery in Poetry',
    duration: '55 min',
    content: `
<h2>Language and Imagery: The Heart of Poetry Analysis</h2>

<p>Language analysis is the core of every poetry response. While form and structure provide the architecture, it is the <strong>specific words, images, and figures of speech</strong> that carry the poem's emotional and intellectual weight. This module equips you with a systematic approach to analysing poetic language that goes far beyond identifying techniques.</p>

<h3>Types of Imagery</h3>
<p>Imagery is language that appeals to the senses — it creates mental pictures, sounds, textures, tastes, or smells. Poets use imagery to make abstract ideas concrete and to engage the reader's imagination.</p>

<h4>Visual Imagery</h4>
<p>The most common type. Visual imagery creates pictures in the reader's mind:</p>
<div class="text-extract">"I wandered lonely as a cloud / That floats on high o'er vales and hills"<div class="source">Wordsworth, "I Wandered Lonely as a Cloud"</div></div>
<p>The simile creates a visual image of a solitary figure drifting above the landscape, establishing both the speaker's isolation and their elevated perspective.</p>

<h4>Auditory Imagery</h4>
<p>Language that evokes sound. Poets often use onomatopoeia, alliteration, and assonance to create auditory effects:</p>
<div class="text-extract">"The buzz-saw snarled and rattled in the yard"<div class="source">Frost, "Out, Out—"</div></div>
<p>The verbs "snarled" and "rattled" are onomatopoeic, creating the harsh, aggressive sound of the saw. The personification of the saw as an animal that "snarls" foreshadows the violence to come.</p>

<h4>Tactile Imagery</h4>
<p>Language that evokes touch or physical sensation — heat, cold, texture, pain, pressure. Tactile imagery often creates an intense, visceral response in the reader.</p>

<h4>Gustatory and Olfactory Imagery</h4>
<p>Language that evokes taste and smell respectively. These are less common but can be powerfully evocative when used.</p>

<h3>Figures of Speech</h3>
<p>Figures of speech are the poet's tools for creating non-literal meaning. Master these and you will be able to analyse any poem:</p>

<h4>Metaphor</h4>
<p>A direct comparison that states one thing <em>is</em> another. Metaphors create meaning by transferring the qualities of one thing to another:</p>
<div class="text-extract">"Life's but a walking shadow"<div class="source">Shakespeare, Macbeth 5.5</div></div>
<p>Life is compared directly to a shadow — something insubstantial, transient, and without independent existence. The adjective "walking" gives the shadow eerie animation, suggesting life moves but has no real substance.</p>

<h4>Simile</h4>
<p>A comparison using "like" or "as". Similes are more tentative than metaphors — they suggest a resemblance rather than asserting an identity:</p>
<p>"My love is <em>like</em> a red, red rose" — Burns. The repetition of "red" intensifies the comparison, evoking passion and beauty.</p>

<h4>Personification</h4>
<p>Giving human qualities to non-human things. Personification can make abstract concepts vivid and relatable, or it can make the natural world seem threatening or sympathetic:</p>
<p>"Death, be not proud" — Donne. By addressing Death as a person, the speaker challenges and diminishes its power.</p>

<h4>Symbolism</h4>
<p>Using an object, image, or action to represent something beyond its literal meaning. A rose may symbolise love; a storm may symbolise turmoil; darkness may symbolise ignorance or evil. Symbols gain their power from cultural associations and from the context of the poem.</p>

<h4>Pathetic Fallacy</h4>
<p>When the natural environment reflects the emotions of characters or the mood of the poem. Storms accompany turmoil; sunshine accompanies joy. This technique connects human experience to the natural world and can suggest cosmic significance.</p>

<div class="key-term"><strong>Key Term: Extended Metaphor</strong> — A metaphor that is developed over several lines or even an entire poem, with multiple aspects of the comparison explored. Also called a conceit, especially in metaphysical poetry.</div>

<h3>Sound Devices</h3>
<p>Poetry is an oral art form — it is meant to be heard as well as read. Sound devices contribute to the poem's effect in ways that are often overlooked:</p>

<h4>Alliteration</h4>
<p>Repetition of consonant sounds at the start of words. Alliteration can create rhythm, emphasis, or a particular mood. Harsh consonants (b, d, k, g) create aggression; soft consonants (l, m, n, s) create gentleness or fluidity.</p>

<h4>Sibilance</h4>
<p>Repetition of "s" sounds. Sibilance can create a hissing effect (suggesting menace or secrecy) or a soft, soothing effect (suggesting calm or whispered intimacy).</p>

<h4>Assonance</h4>
<p>Repetition of vowel sounds within words. Assonance creates internal music and can slow the pace (long vowels: "oo", "ah") or quicken it (short vowels: "i", "e").</p>

<h4>Onomatopoeia</h4>
<p>Words that sound like what they describe — "crash", "whisper", "sizzle", "murmur". Onomatopoeia creates an immediate sensory connection between sound and meaning.</p>

<h3>Tone and Register</h3>
<p>Every poem has a tone — the speaker's attitude toward their subject. Identifying and analysing tone is crucial:</p>
<ul>
  <li><strong>Tone:</strong> Angry, sorrowful, celebratory, ironic, nostalgic, defiant, tender, bitter, resigned, hopeful.</li>
  <li><strong>Register:</strong> Formal, informal, colloquial, elevated, conversational. The register a poet chooses reveals their relationship with the reader and their subject.</li>
  <li><strong>Tone shifts:</strong> Many poems shift tone at a pivotal moment. Identifying where and why the tone changes is a powerful analytical move.</li>
</ul>

<h3>Systematic Approach to Language Analysis</h3>
<p>When analysing a word or phrase, work through these steps:</p>
<ol>
  <li><strong>Identify</strong> the word, phrase, or technique.</li>
  <li><strong>Explore connotations</strong> — what associations does it carry?</li>
  <li><strong>Analyse the effect</strong> — what impact does it have on the reader?</li>
  <li><strong>Connect to the poem's themes</strong> — how does it develop the poem's meaning?</li>
  <li><strong>Consider alternatives</strong> — why did the poet choose <em>this</em> word rather than another?</li>
</ol>

<p><strong>Example:</strong></p>
<p>Analysing "devour" in a poem about time:</p>
<ul>
  <li><strong>Identify:</strong> The verb "devour" is used to describe time's effect on youth.</li>
  <li><strong>Connotations:</strong> "Devour" connotes hunger, violence, consumption — an animal tearing at prey.</li>
  <li><strong>Effect:</strong> It creates a visceral sense of aggression, making time seem predatory and merciless.</li>
  <li><strong>Theme:</strong> This develops the poem's presentation of time as a destructive, unstoppable force.</li>
  <li><strong>Alternative:</strong> The poet could have written "erode" (gradual) or "diminish" (abstract), but "devour" is violent and physical, making the threat immediate and terrifying.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The "consider alternatives" step is what separates good analysis from excellent analysis. By explaining why the poet's word choice is better than alternatives, you demonstrate deep understanding of the writer's craft.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Listing every technique in a poem without analysing any of them in depth. "The poet uses metaphor, simile, alliteration, and personification" is a list, not analysis. Choose 3–4 key moments and explore them thoroughly.</div>
`,
    quiz: [
      {
        id: 'iglit-po-m3-q1',
        question: 'What is the difference between a metaphor and a simile?',
        options: [
          'Metaphors are longer than similes',
          'A metaphor states one thing IS another; a simile compares using "like" or "as"',
          'Similes are more powerful than metaphors',
          'Metaphors are used in poetry; similes are used in prose',
        ],
        correct: 1,
        explanation: 'A metaphor makes a direct comparison by stating one thing IS another ("life\'s but a walking shadow"). A simile uses "like" or "as" to compare, making the comparison more tentative ("my love is like a red, red rose").',
      },
      {
        id: 'iglit-po-m3-q2',
        question: 'Why is considering "alternatives" a powerful analytical technique?',
        options: [
          'Because examiners want you to suggest improvements to the poem',
          'Because explaining why the poet\'s word choice is better than alternatives demonstrates deep understanding of craft',
          'Because alternative words earn extra marks',
          'Because you should always disagree with the poet\'s choices',
        ],
        correct: 1,
        explanation: 'Considering alternatives shows you understand that the poet\'s word choice is deliberate and purposeful. By explaining why "devour" is more effective than "erode" or "diminish", you demonstrate genuine engagement with the writer\'s craft.',
      },
      {
        id: 'iglit-po-m3-q3',
        question: 'What is "pathetic fallacy"?',
        options: [
          'A logical error in a poem\'s argument',
          'When the natural environment reflects the emotions of characters or the mood of the poem',
          'A type of irony where the speaker says the opposite of what they mean',
          'A poem that expresses pity for a character',
        ],
        correct: 1,
        explanation: 'Pathetic fallacy is when the natural environment mirrors emotions or mood — storms accompanying turmoil, sunshine accompanying joy. It connects human experience to the natural world and can suggest cosmic significance.',
      },
      {
        id: 'iglit-po-m3-q4',
        question: 'What effect does sibilance typically create?',
        options: [
          'A loud, explosive sound',
          'A hissing effect that can suggest menace, secrecy, or calm depending on context',
          'A rhythmic, drum-like beat',
          'A sense of order and stability',
        ],
        correct: 1,
        explanation: 'Sibilance (repetition of "s" sounds) creates a hissing effect. Depending on context, this can suggest menace or secrecy (a sinister whisper) or calm and soothing intimacy (soft, gentle sounds).',
      },
      {
        id: 'iglit-po-m3-q5',
        question: 'What is an "extended metaphor"?',
        options: [
          'A metaphor that uses very long words',
          'A metaphor developed over several lines or a whole poem, with multiple aspects explored',
          'A metaphor that appears in more than one poem',
          'A metaphor followed by a simile',
        ],
        correct: 1,
        explanation: 'An extended metaphor is a metaphor that is sustained and developed over several lines or even an entire poem. Multiple aspects of the comparison are explored, creating a rich, layered meaning. It is also called a conceit.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Anthology Poetry Skills
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m4',
    title: 'Anthology Poetry Skills',
    duration: '50 min',
    content: `
<h2>Mastering Anthology Poetry for IGCSE</h2>

<p>The anthology component of the Edexcel IGCSE Literature exam requires you to demonstrate detailed knowledge of poems you have studied in advance. Unlike unseen poetry, where you rely purely on transferable skills, anthology questions reward <strong>deep familiarity</strong> with specific poems — their language, form, structure, context, and thematic concerns. This module shows you how to prepare effectively and write strong anthology responses.</p>

<h3>What the Exam Expects</h3>
<p>Anthology questions typically take one of these forms:</p>
<ul>
  <li><strong>Single poem analysis:</strong> "How does [poet] present [theme/idea] in [poem title]?"</li>
  <li><strong>Comparison:</strong> "Compare how [theme/idea] is presented in [poem A] and one other poem from the anthology."</li>
</ul>

<p>Both formats require you to demonstrate:</p>
<ul>
  <li>Close knowledge of the poem(s) — including memorised quotations</li>
  <li>Analysis of the poet's use of language, form, and structure (AO2)</li>
  <li>A personal, critical response (AO1)</li>
  <li>Understanding of context where relevant (AO3)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For comparison questions, you must discuss both poems in roughly equal depth. A common mistake is writing extensively about one poem and then rushing through the second. Plan your time to ensure balanced coverage.</div>

<h3>How to Prepare Anthology Poems</h3>
<p>For each poem in the anthology, you should create a detailed study sheet covering:</p>

<h4>1. Overview</h4>
<ul>
  <li><strong>Subject:</strong> What is the poem about on a literal level?</li>
  <li><strong>Speaker:</strong> Who is the persona? What is their attitude?</li>
  <li><strong>Themes:</strong> What major ideas does the poem explore?</li>
  <li><strong>Tone:</strong> What is the overall mood? Does it shift?</li>
</ul>

<h4>2. Language Analysis</h4>
<ul>
  <li>Select 4–5 key quotations (short, rich in language)</li>
  <li>For each quotation, prepare analysis of at least two features</li>
  <li>Note how each quotation connects to the poem's themes</li>
</ul>

<h4>3. Form and Structure</h4>
<ul>
  <li>What form has the poet chosen and why?</li>
  <li>How are stanzas organised?</li>
  <li>Where does the volta or key shift occur?</li>
  <li>How do enjambment, caesura, and line length contribute to meaning?</li>
</ul>

<h4>4. Context</h4>
<ul>
  <li>When was the poem written? What was happening historically or socially?</li>
  <li>What do you know about the poet's life, beliefs, or intentions?</li>
  <li>How does context illuminate the poem's meaning?</li>
</ul>

<h4>5. Connections</h4>
<ul>
  <li>Which other anthology poems share similar themes?</li>
  <li>Which poems take a contrasting approach to the same theme?</li>
  <li>What are the key similarities and differences in method?</li>
</ul>

<h3>Memorising Quotations</h3>
<p>For anthology poems, you must memorise quotations because you will not have the poems in front of you in the exam. Use these strategies:</p>

<h4>Select Strategically</h4>
<p>Choose 4–5 short quotations per poem that are:</p>
<ul>
  <li><strong>Rich in analysable language</strong> — metaphors, powerful verbs, striking images</li>
  <li><strong>Thematically versatile</strong> — usable for different question angles</li>
  <li><strong>From different parts of the poem</strong> — opening, middle, and end, to show whole-poem knowledge</li>
</ul>

<h4>Use Active Recall</h4>
<p>Do not just re-read your quotations — test yourself. Cover the quotation, try to recall it, then check. Active recall is far more effective than passive review.</p>

<h4>Connect to Analysis</h4>
<p>Memorise quotations alongside your analysis of them. When you recall "full of scorpions is my mind", you should automatically recall: scorpions = venom, self-destruction, guilt as internal poison, Macbeth's psychological torment.</p>

<div class="key-term"><strong>Key Term: Anthology</strong> — A collection of poems selected by the exam board for detailed study. You are expected to know these poems thoroughly, including memorised quotations, and to be able to analyse and compare them under exam conditions.</div>

<h3>Writing a Single Poem Analysis</h3>
<p>For a single poem question, structure your essay around <strong>the poet's message and methods</strong>:</p>

<ol>
  <li><strong>Introduction:</strong> State what the poet is communicating and how — your conceptualised thesis. Briefly name the form and tone.</li>
  <li><strong>Paragraph 1:</strong> Analyse the poem's opening — how does the poet establish the subject, tone, and speaker?</li>
  <li><strong>Paragraph 2:</strong> Analyse a key moment of language — close reading of your most important quotation.</li>
  <li><strong>Paragraph 3:</strong> Analyse form and/or structure — how does the poem's architecture contribute to meaning?</li>
  <li><strong>Paragraph 4:</strong> Analyse the poem's development or shift — where does the tone, argument, or perspective change?</li>
  <li><strong>Conclusion:</strong> Synthesise your argument. What is the poet's overall message, and how effectively do they communicate it?</li>
</ol>

<h3>Writing a Comparison Essay</h3>
<p>Comparison questions require you to discuss similarities <strong>and</strong> differences between two poems. The strongest approach is to organise your essay by <strong>theme or technique</strong>, discussing both poems in each paragraph, rather than writing about one poem and then the other.</p>

<h4>The "Integrated" Approach</h4>
<p>Each paragraph compares a specific aspect of both poems:</p>
<ul>
  <li><strong>Paragraph 1:</strong> Compare how both poems introduce the theme (language analysis of both)</li>
  <li><strong>Paragraph 2:</strong> Compare the poets' use of imagery (close reading of both)</li>
  <li><strong>Paragraph 3:</strong> Compare form and structure (how each poem's architecture serves its message)</li>
  <li><strong>Paragraph 4:</strong> Compare how the poems conclude or resolve the theme</li>
</ul>

<p>Use comparative connectives throughout: "Similarly...", "In contrast...", "While [Poet A] uses... [Poet B] instead...", "Both poets... however..."</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Poem A for half the essay and then Poem B for the other half, with a brief comparison at the end. This is the "block" method and it rarely produces genuine comparison. The integrated approach, where both poems are discussed in every paragraph, is far more effective.</div>

<h3>Choosing Your Second Poem</h3>
<p>When the question asks you to choose a second poem for comparison, select one that offers:</p>
<ul>
  <li><strong>Clear thematic connection:</strong> Both poems must address the theme in the question.</li>
  <li><strong>Interesting differences:</strong> The best comparisons explore poems that share a theme but approach it differently — through different forms, contrasting perspectives, or opposing tones.</li>
  <li><strong>Material you know well:</strong> Choose a poem you can quote from accurately and analyse in depth.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Prepare comparison pairs in advance. For each major theme (conflict, love, power, identity, nature, death), identify two poems you could compare. Practise writing comparison paragraphs so the skill becomes automatic.</div>
`,
    quiz: [
      {
        id: 'iglit-po-m4-q1',
        question: 'What is the "integrated" approach to comparison essays?',
        options: [
          'Writing about both poems in a single paragraph without distinction',
          'Discussing both poems in every paragraph, organised by theme or technique rather than by poem',
          'Writing about Poem A first and then Poem B',
          'Only comparing the poems in the conclusion',
        ],
        correct: 1,
        explanation: 'The integrated approach organises each paragraph around a specific aspect (theme, technique, structure) and discusses both poems within that paragraph. This produces genuine comparison rather than two separate analyses.',
      },
      {
        id: 'iglit-po-m4-q2',
        question: 'How many key quotations should you aim to memorise per anthology poem?',
        options: [
          '1–2 long quotations',
          '4–5 short, analysable quotations from different parts of the poem',
          'As many as possible — at least 10',
          'None — you will have the poems in the exam',
        ],
        correct: 1,
        explanation: 'Aim for 4–5 short quotations per poem that are rich in language, thematically versatile, and from different parts of the poem (opening, middle, end). Quality and analysability matter more than quantity.',
      },
      {
        id: 'iglit-po-m4-q3',
        question: 'What should you look for when choosing a second poem for comparison?',
        options: [
          'The shortest poem in the anthology',
          'A poem that addresses the same theme but approaches it differently',
          'A poem by the same poet',
          'A poem that is very similar in every way',
        ],
        correct: 1,
        explanation: 'The best comparisons explore poems that share a theme but approach it through different methods — contrasting forms, opposing tones, or different perspectives. This creates rich material for discussing similarities AND differences.',
      },
      {
        id: 'iglit-po-m4-q4',
        question: 'Why is "active recall" more effective than re-reading for memorising quotations?',
        options: [
          'Because it is faster',
          'Because testing yourself strengthens memory more than passively reviewing material',
          'Because examiners can tell which method you used',
          'Because re-reading is not allowed during revision',
        ],
        correct: 1,
        explanation: 'Active recall — testing yourself by trying to remember quotations before checking — strengthens memory far more effectively than passive re-reading. The effort of retrieval is what builds strong, lasting memories.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Comparing Poems
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m5',
    title: 'Comparing Poems',
    duration: '55 min',
    content: `
<h2>Comparing Poems: Skills and Strategies</h2>

<p>Comparison is one of the highest-order skills in Literature. It requires you to hold two texts in your mind simultaneously, identifying meaningful connections and contrasts while maintaining close analysis of both. The Edexcel IGCSE exam may ask you to compare two anthology poems or, in some components, to compare an anthology poem with an unseen poem. This module teaches you how to produce genuinely comparative responses that integrate analysis of both poems throughout.</p>

<h3>What Examiners Look For</h3>
<p>Examiners assess comparison responses against these criteria:</p>
<ul>
  <li><strong>Genuine comparison:</strong> Both poems must be discussed throughout the essay, not in separate halves. Comparative language (similarly, in contrast, whereas, both, however) should appear in every paragraph.</li>
  <li><strong>Balanced coverage:</strong> Neither poem should dominate. Roughly equal analytical depth should be given to each.</li>
  <li><strong>Comparison of method, not just content:</strong> It is not enough to say "both poems are about death". You must compare <em>how</em> the poets present death — through different imagery, contrasting forms, opposing tones.</li>
  <li><strong>A clear argument:</strong> Your essay should have a thesis about how the poems relate to each other, not just a list of similarities and differences.</li>
</ul>

<div class="key-term"><strong>Key Term: Comparative Thesis</strong> — An overarching argument about how two poems relate to each other. For example: "While both poets explore the devastation of conflict, Owen presents war as senseless industrial slaughter while Tennyson glorifies it as heroic sacrifice — the contrast revealing how attitudes to war transformed between the Victorian and modern periods."</div>

<h3>Comparison Frameworks</h3>
<p>Use these frameworks to generate comparative points. For each framework, consider both similarities and differences:</p>

<h4>1. Theme and Message</h4>
<ul>
  <li>Do both poems address the same theme? If so, what does each poet <em>say</em> about it?</li>
  <li>Do the poets reach the same conclusion or opposing ones?</li>
  <li>Is the theme treated seriously in one and ironically in the other?</li>
</ul>

<h4>2. Speaker and Perspective</h4>
<ul>
  <li>Who is speaking in each poem? A first-person speaker? A third-person observer?</li>
  <li>What is the speaker's emotional relationship to the subject?</li>
  <li>Is the perspective personal and intimate, or detached and objective?</li>
</ul>

<h4>3. Imagery and Language</h4>
<ul>
  <li>What types of imagery dominate each poem? Are they similar or contrasting?</li>
  <li>Does one poem use figurative language while the other uses literal description?</li>
  <li>How do the poets' word choices differ in tone and register?</li>
</ul>

<h4>4. Form and Structure</h4>
<ul>
  <li>What forms have the poets chosen and why?</li>
  <li>How do the poems' structures differ — regular vs irregular, contained vs fragmented?</li>
  <li>Where do the poems' voltas or shifts occur, and what do they achieve?</li>
</ul>

<h4>5. Tone and Mood</h4>
<ul>
  <li>What is the prevailing tone of each poem?</li>
  <li>Do the tones contrast (one celebratory, one mournful)?</li>
  <li>Do both poems shift in tone, or does only one?</li>
</ul>

<h4>6. Context</h4>
<ul>
  <li>When were the poems written? How do their historical periods affect their perspectives?</li>
  <li>What were the poets' backgrounds and beliefs?</li>
  <li>How do contextual differences explain the poems' contrasting approaches?</li>
</ul>

<h3>Structuring a Comparison Essay</h3>
<p>The most effective structure organises paragraphs by <strong>point of comparison</strong>, not by poem. Here is a model structure:</p>

<h4>Introduction</h4>
<p>State your comparative thesis — what is the essential relationship between the two poems? How do they connect and diverge?</p>

<h4>Paragraph 1: Opening/First Impressions</h4>
<p>Compare how both poems begin. How do the poets establish their subjects, speakers, and tones? What is similar and different about their openings?</p>

<h4>Paragraph 2: Imagery and Language</h4>
<p>Compare a key moment of language from each poem. Select one quotation from each and analyse them side by side. What do the poets' contrasting imagery choices reveal?</p>

<h4>Paragraph 3: Form and Structure</h4>
<p>Compare the poems' forms and structural choices. How does each poem's architecture serve its message? What does the contrast in form reveal about the poets' different approaches?</p>

<h4>Paragraph 4: Development or Shift</h4>
<p>Compare how the poems develop or shift. Do both poems contain a volta? Do they move in the same direction or opposite directions?</p>

<h4>Paragraph 5: Conclusion/Resolution</h4>
<p>Compare how the poems conclude. Do they resolve their themes or leave them open? What is the final effect on the reader?</p>

<h4>Conclusion</h4>
<p>Synthesise your comparison. Which poem do you find more effective and why? Return to your comparative thesis and offer a final evaluative statement.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Using evaluative language strengthens your comparison. Phrases like "more effectively", "more powerfully", "while both succeed in..., [Poet A] achieves a greater sense of..." show that you are not just describing differences but assessing the relative effectiveness of each poet's choices.</div>

<h3>Comparative Language Toolkit</h3>
<p>Keep these phrases ready for your comparison essays:</p>

<h4>For Similarities</h4>
<ul>
  <li>"Similarly, [Poet B] also..."</li>
  <li>"Both poets use... to convey..."</li>
  <li>"This echoes [Poet B]'s approach in..."</li>
  <li>"Like [Poet A], [Poet B] also explores..."</li>
  <li>"The shared use of [technique] in both poems suggests..."</li>
</ul>

<h4>For Differences</h4>
<ul>
  <li>"In contrast, [Poet B]..."</li>
  <li>"While [Poet A] uses... [Poet B] instead..."</li>
  <li>"However, the poets diverge in their..."</li>
  <li>"Where [Poet A] presents... as..., [Poet B] presents it as..."</li>
  <li>"The contrast between [Poet A]'s... and [Poet B]'s... reveals..."</li>
</ul>

<h3>A Worked Example: Comparing Openings</h3>
<p>Imagine comparing two poems about conflict — one that opens with vivid, sensory description and one that opens with a direct address to the reader.</p>

<p><strong>Weak comparison:</strong> "Poem A starts with a description of a battlefield. Poem B starts by addressing the reader. They both deal with conflict."</p>

<p><strong>Strong comparison:</strong> "While [Poet A] plunges the reader into the chaos of battle through visceral sensory imagery — the 'stuttering' of rifles creating an onomatopoeic assault on the reader's ears — [Poet B] takes a markedly different approach, opening with a direct, accusatory address that implicates the reader in the conflict's consequences. Both openings are designed to unsettle, but where [Poet A] achieves this through immersive horror, [Poet B] achieves it through moral confrontation."</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "they are similar because they are both about [theme]" without explaining how the treatment of the theme differs. Thematic similarity is your starting point, not your conclusion. The interesting analysis lies in how the poets' methods diverge.</div>
`,
    quiz: [
      {
        id: 'iglit-po-m5-q1',
        question: 'What distinguishes a strong comparison from a weak one?',
        options: [
          'A strong comparison is longer',
          'A strong comparison analyses HOW the poets\' methods differ, not just WHAT themes they share',
          'A strong comparison uses more quotations',
          'A strong comparison always concludes that one poem is better',
        ],
        correct: 1,
        explanation: 'Strong comparisons go beyond identifying shared themes to analyse how the poets\' methods — imagery, form, structure, tone — differ in their treatment of those themes. Method comparison is where the sophisticated analysis lies.',
      },
      {
        id: 'iglit-po-m5-q2',
        question: 'Why should you organise a comparison essay by "point of comparison" rather than by poem?',
        options: [
          'Because it is required by the exam board',
          'Because it produces genuine, integrated comparison rather than two separate analyses with a brief connection at the end',
          'Because it is shorter',
          'Because examiners prefer shorter paragraphs',
        ],
        correct: 1,
        explanation: 'Organising by point of comparison means both poems are discussed in every paragraph, producing genuine integration. The alternative — writing about Poem A then Poem B — tends to produce two separate analyses rather than a true comparison.',
      },
      {
        id: 'iglit-po-m5-q3',
        question: 'What is a "comparative thesis"?',
        options: [
          'A list of similarities and differences',
          'An overarching argument about how two poems relate to each other',
          'A summary of both poems',
          'The final sentence of a comparison essay',
        ],
        correct: 1,
        explanation: 'A comparative thesis is an overarching argument about the relationship between two poems — how they connect and diverge in their treatment of a shared theme. It gives your comparison essay coherence and direction.',
      },
      {
        id: 'iglit-po-m5-q4',
        question: 'Which comparative phrase signals a contrast between two poems?',
        options: [
          '"Similarly, Poet B also..."',
          '"Both poets use imagery to..."',
          '"While Poet A uses... Poet B instead..."',
          '"Like Poet A, Poet B explores..."',
        ],
        correct: 2,
        explanation: '"While Poet A uses... Poet B instead..." signals a contrast, showing that the poets take different approaches. Using a range of comparative connectives throughout your essay demonstrates sophisticated comparative thinking.',
      },
      {
        id: 'iglit-po-m5-q5',
        question: 'Why is evaluative language important in comparison essays?',
        options: [
          'Because examiners require you to state which poem is better',
          'Because it shows you are assessing the relative effectiveness of each poet\'s choices, not just describing differences',
          'Because it makes your essay longer',
          'Because it is a requirement of AO4',
        ],
        correct: 1,
        explanation: 'Evaluative language ("more effectively", "achieves a greater sense of...") shows you are making critical judgements about the poets\' choices, not just listing differences. This demonstrates the sophisticated, personal critical voice that examiners reward.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Unseen Poetry Technique
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m6',
    title: 'Unseen Poetry Technique',
    duration: '55 min',
    content: `
<h2>Unseen Poetry: Confident Analysis of Unknown Texts</h2>

<p>Unseen poetry is the section of the exam that many students find most daunting. You are given a poem you have never read before and asked to analyse it under timed conditions. However, this section also offers the greatest opportunity to demonstrate genuine analytical skill — because you cannot rely on memorised material, your response must be entirely your own. This module gives you a systematic approach to unseen poetry that builds confidence and produces consistently strong responses.</p>

<div class="key-term"><strong>Key Term: Unseen Poetry</strong> — A poem presented in the exam that you have not studied before. You must analyse it using your transferable skills in language, form, and structure analysis. No prior knowledge of the specific poem is expected or required.</div>

<h3>Why Unseen Poetry is an Opportunity</h3>
<p>Unseen poetry tests your <strong>transferable analytical skills</strong> — the same skills you use for anthology poetry, but applied to new material. If you can analyse language, form, and structure effectively, you can analyse <em>any</em> poem. The skills you have developed across this course are exactly what you need.</p>

<p>In fact, unseen poetry has some advantages:</p>
<ul>
  <li>No memorisation required — the poem is in front of you.</li>
  <li>No "correct" interpretation — examiners reward any well-supported reading.</li>
  <li>No contextual knowledge needed — you analyse the poem on its own terms.</li>
  <li>A level playing field — every student encounters the same poem for the first time.</li>
</ul>

<h3>The 5-Step Unseen Poetry Method</h3>

<h4>Step 1: First Read — Grasp the Basics (2 minutes)</h4>
<p>Read the poem through once without annotating. Establish:</p>
<ul>
  <li><strong>Subject:</strong> What is the poem literally about?</li>
  <li><strong>Speaker:</strong> Who is speaking? To whom?</li>
  <li><strong>Tone:</strong> What is the overall mood? How does the poem make you feel?</li>
  <li><strong>Situation:</strong> Is there a specific scenario, memory, or moment being described?</li>
</ul>

<h4>Step 2: Second Read — Annotate (3–5 minutes)</h4>
<p>Read the poem again, this time annotating actively. Use a systematic approach — work through the poem marking:</p>
<ul>
  <li><strong>Imagery:</strong> Circle metaphors, similes, personification, symbolism.</li>
  <li><strong>Sound:</strong> Underline alliteration, sibilance, assonance, onomatopoeia.</li>
  <li><strong>Structure:</strong> Mark enjambment, caesura, stanza breaks, volta/shifts.</li>
  <li><strong>Word choices:</strong> Highlight any words that surprise, disturb, or stand out.</li>
  <li><strong>Tone shifts:</strong> Mark any point where the mood or argument changes.</li>
</ul>

<h4>Step 3: Formulate Your Response (2 minutes)</h4>
<p>Before writing, decide:</p>
<ul>
  <li>What is the poet's <strong>purpose</strong> — what message, emotion, or experience are they communicating?</li>
  <li>What is your <strong>thesis</strong> — your overarching interpretation?</li>
  <li>Which <strong>3–4 moments</strong> will you analyse in depth? Choose the richest, most analysable quotations.</li>
</ul>

<h4>Step 4: Write Your Response (25–30 minutes)</h4>
<p>Follow this structure:</p>
<ol>
  <li><strong>Introduction (3 minutes):</strong> State what the poet is communicating and your conceptualised interpretation. Mention the form and overall tone.</li>
  <li><strong>Paragraph 1 (6–7 minutes):</strong> Analyse the opening — how does the poet establish the subject and tone? Close read a key quotation.</li>
  <li><strong>Paragraph 2 (6–7 minutes):</strong> Analyse a central moment of imagery — your richest quotation. Explore connotations, effects, and connections to the poem's message.</li>
  <li><strong>Paragraph 3 (6–7 minutes):</strong> Analyse form and/or structure — how does the poem's architecture contribute to meaning? Discuss enjambment, caesura, stanza organisation, or the volta.</li>
  <li><strong>Paragraph 4 (5–6 minutes):</strong> Analyse the ending or a tone shift — how does the poem conclude, and what is the final effect?</li>
  <li><strong>Conclusion (3 minutes):</strong> Synthesise your interpretation. What is the poet's overall message and how effectively do they communicate it?</li>
</ol>

<h4>Step 5: Proofread (2–3 minutes)</h4>
<p>Check spelling, punctuation, and grammar. Ensure your quotations are copied accurately from the poem.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to identify every technique in the poem. Choose 3–4 key moments and analyse them in depth. Three well-developed points with detailed close reading will outscore six superficial observations every time.</div>

<h3>What to Do When You Are Confused</h3>
<p>Sometimes an unseen poem will be difficult to understand. Do not panic — examiners do not expect you to decode every line perfectly. Use these strategies:</p>

<ul>
  <li><strong>Start with what you understand:</strong> Even if some stanzas are confusing, others will be clearer. Analyse what you can access confidently.</li>
  <li><strong>Focus on concrete images:</strong> If the poem's abstract meaning is unclear, focus on the specific images and what they suggest.</li>
  <li><strong>Identify the tone:</strong> Even if you are unsure about meaning, you can usually identify the tone. Is the speaker angry, sad, joyful, nostalgic, conflicted? Tone gives you a way in.</li>
  <li><strong>Analyse the methods:</strong> You can always discuss how a line is written — its rhythm, imagery, word choices, sound — even if you are unsure exactly what it means.</li>
  <li><strong>Embrace ambiguity:</strong> Write "This could suggest... or alternatively..." Exploring multiple interpretations is a strength, not a weakness. Examiners reward students who acknowledge that poems can mean more than one thing.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long trying to "crack the code" of a difficult poem before writing anything. You do not need to understand everything to write a strong response. Start with what you do understand and build from there.</div>

<h3>Unseen Poetry Pitfalls</h3>
<ul>
  <li><strong>Paraphrasing:</strong> "The poet describes walking through a forest and seeing a river." This tells the examiner nothing analytical. Focus on how the poet describes, not what.</li>
  <li><strong>Feature-spotting:</strong> "The poet uses a simile in line 3." Why? What effect does it create? What does it mean?</li>
  <li><strong>Ignoring form and structure:</strong> Do not write only about language. Discuss the poem's shape, organisation, and how these contribute to meaning.</li>
  <li><strong>Making biographical assumptions:</strong> Do not assume the speaker is the poet. Refer to "the speaker" or "the persona" unless the question tells you otherwise.</li>
</ul>

<h3>Building Unseen Poetry Confidence</h3>
<p>The best way to prepare for unseen poetry is to practise regularly with poems you have not seen before. Try this weekly exercise:</p>
<ol>
  <li>Find a poem you have not read (use poetry websites, anthologies from the library, or past papers).</li>
  <li>Set a timer for 35 minutes.</li>
  <li>Apply the 5-step method and write a full response.</li>
  <li>Review your response: Did you analyse language, form, AND structure? Did you explore effects? Did you have a thesis?</li>
</ol>

<p>After four weeks of weekly practice, unseen poetry will feel far less intimidating — and you will have developed the fluency and confidence to tackle any poem the exam gives you.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The students who score highest on unseen poetry are those who respond to the specific poem in front of them with genuine, personal analysis — not those who try to apply a memorised template. Let the poem guide your response.</div>
`,
    quiz: [
      {
        id: 'iglit-po-m6-q1',
        question: 'What is the main advantage of unseen poetry compared to anthology poetry?',
        options: [
          'Unseen poetry is always easier',
          'No memorisation is required — the poem is in front of you and no specific prior knowledge is expected',
          'Unseen poetry questions are worth fewer marks',
          'You can choose which poem to analyse',
        ],
        correct: 1,
        explanation: 'Unseen poetry requires no memorisation, no contextual knowledge, and no prior study. The poem is right in front of you, and examiners reward any well-supported interpretation. It tests pure analytical skill.',
      },
      {
        id: 'iglit-po-m6-q2',
        question: 'What should you do if you find an unseen poem confusing?',
        options: [
          'Leave the question blank and move on',
          'Start with what you understand, focus on tone and imagery, and embrace ambiguity by exploring multiple interpretations',
          'Write about a different poem you know instead',
          'Copy out the poem and add a few comments',
        ],
        correct: 1,
        explanation: 'Start with what you do understand, focus on concrete images and tone, and embrace ambiguity. Exploring multiple possible meanings ("This could suggest... or alternatively...") is actually a strength that examiners reward.',
      },
      {
        id: 'iglit-po-m6-q3',
        question: 'In the 5-step method, how long should you spend annotating before writing?',
        options: [
          '10–15 minutes',
          '3–5 minutes',
          '1 minute',
          'You should not annotate — start writing immediately',
        ],
        correct: 1,
        explanation: 'Spend 3–5 minutes on your second read and annotation. This is enough time to identify key techniques, striking images, and structural features without eating into your writing time.',
      },
      {
        id: 'iglit-po-m6-q4',
        question: 'Why should you refer to "the speaker" rather than "the poet" when analysing unseen poetry?',
        options: [
          'Because it sounds more formal',
          'Because you should not assume the speaker is the poet — the voice may be a persona or character',
          'Because examiners deduct marks for saying "the poet"',
          'Because you do not know who the poet is',
        ],
        correct: 1,
        explanation: 'The speaker of a poem is not necessarily the poet themselves — many poems use a persona or character as the voice. Referring to "the speaker" avoids making biographical assumptions and keeps your analysis focused on the text.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 — Writing About Poetry Under Timed Conditions
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m7',
    title: 'Writing About Poetry Under Timed Conditions',
    duration: '45 min',
    content: `
<h2>Timed Poetry Responses: Speed Without Sacrifice</h2>

<p>Writing about poetry under exam conditions requires a delicate balance: you need the <strong>precision</strong> of close reading, the <strong>breadth</strong> of discussing language, form, and structure, and the <strong>speed</strong> to complete your response within the time limit. This module focuses on practical strategies for producing high-quality poetry analysis under pressure, building on the analytical skills you have developed throughout the course.</p>

<h3>Time Allocation for Poetry Questions</h3>
<p>The exact time available depends on your specific paper and question type. Here are the standard allocations:</p>

<h4>Single Poem Analysis (approximately 30–35 minutes)</h4>
<ul>
  <li><strong>Reading and annotating:</strong> 3–5 minutes</li>
  <li><strong>Planning:</strong> 2–3 minutes</li>
  <li><strong>Writing (4 paragraphs + introduction/conclusion):</strong> 20–25 minutes</li>
  <li><strong>Proofreading:</strong> 2 minutes</li>
</ul>

<h4>Comparison Essay (approximately 45 minutes)</h4>
<ul>
  <li><strong>Reading and annotating both poems:</strong> 5–7 minutes</li>
  <li><strong>Planning comparison points:</strong> 3–5 minutes</li>
  <li><strong>Writing (4–5 comparative paragraphs):</strong> 28–32 minutes</li>
  <li><strong>Proofreading:</strong> 2–3 minutes</li>
</ul>

<h3>Efficient Planning for Poetry Essays</h3>
<p>Your plan for a poetry response should be more concise than for a drama or prose essay, because you are working with a shorter text. Use this rapid planning template:</p>

<h4>Rapid Plan Template</h4>
<ol>
  <li><strong>Thesis:</strong> One sentence — what is the poet communicating and how?</li>
  <li><strong>Quote 1 + point:</strong> Opening/key image — what technique, what effect?</li>
  <li><strong>Quote 2 + point:</strong> Central moment — most analysable quotation</li>
  <li><strong>Form/structure point:</strong> One structural observation with significance</li>
  <li><strong>Quote 3 + point:</strong> Ending/shift — how does the poem resolve or turn?</li>
</ol>

<p>This template ensures you cover language (quotes 1 and 2), form/structure (point 3), and the poem's development (the progression from opening to ending). It can be completed in under 3 minutes.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A concise plan is better than no plan. Even a 2-minute plan consisting of three quotations and a one-sentence thesis will improve your essay significantly. Never skip planning to gain writing time — the return on investment is always positive.</div>

<h3>Writing at Speed: Techniques for Efficiency</h3>

<h4>1. Embed Quotations</h4>
<p>Embedding quotations into your own sentences is faster than introducing them separately and produces smoother prose:</p>
<p><strong>Slow:</strong> "The poet writes 'the sun was a golden coin'. This is a metaphor that suggests..."</p>
<p><strong>Fast:</strong> "The metaphor of the sun as 'a golden coin' suggests wealth and transience, as coins can be spent and lost."</p>

<h4>2. Combine AOs in Single Sentences</h4>
<p>Instead of addressing each AO in a separate sentence, combine them:</p>
<p><strong>Separate (slow):</strong> "The poet uses the metaphor 'iron curtain' (AO2). This refers to the Cold War division of Europe (AO3). It creates a sense of impenetrable separation (AO1)."</p>
<p><strong>Combined (fast):</strong> "The metaphor 'iron curtain', evoking the Cold War's ideological divide, creates a sense of impenetrable, permanent separation that the speaker seems powerless to breach."</p>

<h4>3. Use Single-Word Analysis</h4>
<p>You do not need to analyse whole phrases. Zeroing in on a single word is faster and often more impressive:</p>
<p>"The verb 'devoured' — with its connotations of hunger, violence, and consumption — transforms time from an abstract concept into a predatory force."</p>

<h4>4. Keep Introductions Short</h4>
<p>Your introduction should be 2–4 sentences maximum. State the poem's subject, your thesis, and the form. Then move straight into analysis.</p>

<h4>5. Keep Conclusions Short</h4>
<p>Your conclusion should be 2–3 sentences. Synthesise your argument and offer one final evaluative comment. Do not recap every point.</p>

<h3>The "Three Angles" Strategy</h3>
<p>If you are struggling to generate enough analysis for a single quotation, use the "three angles" approach:</p>
<ol>
  <li><strong>Angle 1 — Word level:</strong> Analyse the connotations of one key word in the quotation.</li>
  <li><strong>Angle 2 — Technique level:</strong> Identify the technique (metaphor, alliteration, etc.) and explain its effect.</li>
  <li><strong>Angle 3 — Poem level:</strong> Connect the quotation to the poem's wider theme or to another moment in the poem.</li>
</ol>

<p>This gives you three analytical sentences from a single quotation, which is usually enough for a well-developed paragraph point.</p>

<h3>Maintaining Quality Under Pressure</h3>

<h4>The Quality Checklist</h4>
<p>As you write each paragraph, mentally check:</p>
<ul>
  <li>Does this paragraph make a clear point related to the question?</li>
  <li>Does it include a quotation?</li>
  <li>Does it analyse specific language or structural choices?</li>
  <li>Does it explain the <strong>effect</strong> on the reader?</li>
</ul>
<p>If any paragraph is missing one of these elements, add it before moving on. A paragraph without a quotation is an assertion; a paragraph without analysis is description; a paragraph without effect is feature-spotting.</p>

<h4>The "One More Sentence" Rule</h4>
<p>After every analytical point, write one more sentence than you think you need. This additional sentence — usually about effect, significance, or connection to the wider poem — is often where the highest-level analysis lives.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a detailed response to the first poem in a comparison and then rushing the second because you have run out of time. Plan your time to ensure equal coverage. If necessary, write slightly less about each poem to ensure balance.</div>

<h3>Managing Exam Anxiety</h3>
<p>Poetry can trigger anxiety because of its perceived difficulty. Use these strategies to stay calm and focused:</p>
<ul>
  <li><strong>Remember:</strong> There is no single "correct" interpretation. Any reading you can support with evidence from the text is valid.</li>
  <li><strong>Start with what you know:</strong> If the poem seems difficult, begin with the most accessible image or moment. Confidence will build as you write.</li>
  <li><strong>Trust your skills:</strong> If you can analyse language, form, and structure, you can analyse any poem. The skills are the same — only the text is new.</li>
  <li><strong>Focus on the poem, not the clock:</strong> Glancing at the clock every minute increases anxiety. Check the time at planned intervals (after planning, after paragraph 2, at the 5-minutes-left mark) and focus on the poem in between.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The most common reason students underperform on poetry is not lack of skill but lack of confidence. Students who trust their analytical abilities and engage genuinely with the poem — rather than trying to apply a rigid formula — consistently produce the strongest responses.</div>
`,
    quiz: [
      {
        id: 'iglit-po-m7-q1',
        question: 'What is the "three angles" strategy for analysing a single quotation?',
        options: [
          'Reading the quotation three times before analysing',
          'Analysing at word level (connotations), technique level (device and effect), and poem level (wider theme connection)',
          'Comparing the quotation with three other quotations',
          'Writing three paragraphs about the same quotation',
        ],
        correct: 1,
        explanation: 'The three angles strategy generates depth from a single quotation: (1) analyse a key word\'s connotations, (2) identify the technique and its effect, (3) connect to the poem\'s wider theme. This produces three analytical sentences efficiently.',
      },
      {
        id: 'iglit-po-m7-q2',
        question: 'Why should introductions to poetry essays be kept short (2–4 sentences)?',
        options: [
          'Because examiners do not read introductions',
          'Because every minute spent on a long introduction is a minute lost for analysis, which is where the marks are',
          'Because introductions are not marked',
          'Because poetry essays should only be one page long',
        ],
        correct: 1,
        explanation: 'Marks are earned through analysis, not through introductions. A 2–4 sentence introduction that states your thesis and the poem\'s form is sufficient. Every additional sentence in the introduction is time you could spend on close reading.',
      },
      {
        id: 'iglit-po-m7-q3',
        question: 'What is the "one more sentence" rule?',
        options: [
          'Always write at least one sentence per paragraph',
          'After every analytical point, write one more sentence about effect, significance, or connection — this is where top-level analysis lives',
          'Add one sentence to your conclusion to make it stronger',
          'Write one more sentence than the person next to you',
        ],
        correct: 1,
        explanation: 'The "one more sentence" rule pushes you to add a sentence about effect, significance, or wider connection after every analytical point. This additional depth is often what distinguishes good analysis from excellent analysis.',
      },
      {
        id: 'iglit-po-m7-q4',
        question: 'How can you combine multiple Assessment Objectives in a single sentence?',
        options: [
          'By listing AO1, AO2, and AO3 at the end of the sentence',
          'By weaving technique identification, contextual reference, and personal response into one fluid sentence',
          'By writing "AO1/AO2/AO3" in the margin',
          'You cannot — each AO must be addressed in a separate paragraph',
        ],
        correct: 1,
        explanation: 'Combining AOs in fluid sentences is both efficient and impressive. For example: "The metaphor \'iron curtain\', evoking the Cold War\'s ideological divide [AO3], creates a sense of impenetrable separation [AO1] through its connotations of industrial permanence [AO2]."',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Practice Responses
  // ──────────────────────────────────────────────
  {
    id: 'iglit-po-m8',
    title: 'Practice Responses and Model Analysis',
    duration: '55 min',
    content: `
<h2>Practice Responses: Bringing It All Together</h2>

<p>This final module consolidates everything you have learned by walking through <strong>model approaches</strong> to the types of poetry questions you will face in the exam. We will examine what makes a response successful, analyse common weaknesses, and provide frameworks for self-assessment that you can use throughout your revision. The goal is to bridge the gap between understanding the theory and executing it under exam conditions.</p>

<h3>Model Approach 1: Single Poem Analysis</h3>

<div class="text-extract"><strong>Sample Question:</strong> How does the poet present the power of nature in the following poem?</div>

<h4>Step 1: After Reading and Annotating</h4>
<p>Imagine you have annotated a poem about a storm. You have identified:</p>
<ul>
  <li>Violent imagery — "the wind tore at the roof", "rain hammered"</li>
  <li>Personification — nature given violent, human qualities</li>
  <li>Short, fragmented lines in the middle section — mirroring chaos</li>
  <li>A shift to calm in the final stanza — contrast and resolution</li>
  <li>Free verse form — no constraints, mirroring nature's freedom</li>
</ul>

<h4>Step 2: Formulating a Thesis</h4>
<p>"The poet presents nature as an overwhelming, violent force that dwarfs human control, using aggressive personification and structural fragmentation to immerse the reader in the chaos before offering a fragile resolution that suggests nature's power is both terrifying and cyclical."</p>

<h4>Step 3: Writing the Response</h4>
<p>Here is how a top-band response might handle the opening paragraph:</p>

<p><strong>Model opening:</strong> "The poet constructs nature as an agent of violence, using sustained personification to transform a storm from a weather event into an assault. The free verse form — with no rhyme scheme or regular metre — structurally mirrors the uncontrolled power of the natural world, suggesting that nature refuses the constraints humans impose on language just as it refuses the constraints they impose on the physical world."</p>

<p>Notice how this opening:</p>
<ul>
  <li>Responds directly to the question ("presents the power of nature")</li>
  <li>Identifies a technique (personification) and its effect (nature as agent of violence)</li>
  <li>Discusses form (free verse) and connects it to the poem's theme</li>
  <li>Establishes a conceptualised thesis about the relationship between form and content</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Notice how the model opening discusses both language AND form in just two sentences. This efficiency is key under timed conditions — do not save form and structure for a separate paragraph if you can integrate them from the start.</div>

<h3>Model Approach 2: Comparison Response</h3>

<div class="text-extract"><strong>Sample Question:</strong> Compare how the poets present loss in [Poem A] and one other poem from the anthology.</div>

<h4>Comparative Planning</h4>
<p>Imagine Poem A uses extended metaphor to present loss as a journey with no destination, while Poem B uses a sonnet form to contain grief within a strict structure. Your plan might look like:</p>

<ol>
  <li><strong>Thesis:</strong> Both poets explore loss as a disorienting experience, but Poet A's use of free verse enacts the chaos of grief while Poet B's sonnet form represents an attempt to impose order on overwhelming emotion.</li>
  <li><strong>Compare openings:</strong> Poem A begins in medias res (confusion, disorientation); Poem B begins with a formal address (structured, composed).</li>
  <li><strong>Compare imagery:</strong> Poem A's journey metaphor (loss as wandering) vs Poem B's container metaphor (grief held within the self).</li>
  <li><strong>Compare form/structure:</strong> Free verse enacting disorder vs sonnet imposing control. Both are significant — but for opposite reasons.</li>
  <li><strong>Compare endings:</strong> Poem A's lack of resolution (the journey continues) vs Poem B's couplet providing fragile closure.</li>
</ol>

<h4>Model Comparative Paragraph</h4>
<p>"While both poets grapple with the disorientation of loss, their formal choices enact fundamentally different responses to grief. Poet A's free verse — with its irregular line lengths and unpredictable enjambment — structurally mirrors the chaos the speaker experiences, as though grief has shattered the very framework of language. In stark contrast, Poet B's decision to contain their grief within the rigid architecture of a Petrarchan sonnet suggests an attempt to impose order on overwhelming emotion. The fourteen-line form becomes a kind of vessel, holding what might otherwise overflow. Yet the tension between the sonnet's formal control and the raw emotion it contains creates a sense of strain — as though the form is barely holding — which is, arguably, more powerful than Poet A's explicit fragmentation."</p>

<p>Notice how this paragraph:</p>
<ul>
  <li>Discusses both poems in integrated fashion throughout</li>
  <li>Compares method (form), not just content</li>
  <li>Uses comparative language ("While both...", "In stark contrast...")</li>
  <li>Includes evaluative judgement ("arguably, more powerful")</li>
  <li>Connects form to theme — structural analysis serving thematic interpretation</li>
</ul>

<h3>Self-Assessment Framework</h3>
<p>After writing any practice response, use this framework to assess your work and identify areas for improvement:</p>

<h4>AO1: Personal Response and Textual References</h4>
<ul>
  <li>Do I have a clear thesis that I develop throughout?</li>
  <li>Do I include specific quotations (not just vague references)?</li>
  <li>Is my response genuinely personal, or does it read as formulaic?</li>
  <li>Do I respond to the specific question asked?</li>
</ul>

<h4>AO2: Language, Form, and Structure</h4>
<ul>
  <li>Do I analyse specific word choices and their effects?</li>
  <li>Do I discuss the poem's form and explain why it matters?</li>
  <li>Do I discuss structural features (enjambment, caesura, volta, stanza organisation)?</li>
  <li>Do I use subject terminology accurately?</li>
  <li>Do I explain effects, not just identify techniques?</li>
</ul>

<h4>AO3: Context (where applicable)</h4>
<ul>
  <li>Is my context integrated into analysis or bolted on?</li>
  <li>Does contextual knowledge illuminate the poem's meaning?</li>
</ul>

<h4>AO4: Communication</h4>
<ul>
  <li>Is my writing clear and well-organised?</li>
  <li>Is my spelling, punctuation, and grammar accurate?</li>
  <li>Do my paragraphs flow logically from one to the next?</li>
</ul>

<h3>Common Weaknesses and How to Fix Them</h3>

<h4>Weakness 1: "I can identify techniques but struggle to explain their effects"</h4>
<p><strong>Fix:</strong> After identifying a technique, always ask: "What does this make the reader think, feel, or imagine?" Then ask: "Why might the poet want the reader to think, feel, or imagine this?" These two questions will generate the effect and purpose that your analysis needs.</p>

<h4>Weakness 2: "I always forget to discuss form and structure"</h4>
<p><strong>Fix:</strong> Include a dedicated form/structure point in every plan. Before you start writing, identify one structural feature you will analyse. Making it a non-negotiable part of your plan ensures it appears in your essay.</p>

<h4>Weakness 3: "My comparisons feel like two separate essays"</h4>
<p><strong>Fix:</strong> In every paragraph, mention both poems. Use the comparative connectives toolkit: "Similarly...", "In contrast...", "While Poet A..., Poet B...". Practise writing single paragraphs that discuss both poems before attempting a full comparison essay.</p>

<h4>Weakness 4: "I run out of time"</h4>
<p><strong>Fix:</strong> Practise the specific timings in this module until they become automatic. Reduce the time spent on introductions and conclusions (2–3 sentences each). Write slightly shorter paragraphs with more analytical density rather than longer paragraphs with more description.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Only practising with poems you find easy or enjoyable. Exam poets are unpredictable — practise with poems that challenge you, confuse you, or fall outside your comfort zone. This builds the resilience you need for unseen poetry.</div>

<h3>Final Revision Checklist</h3>
<p>In the final weeks before the exam, ensure you can:</p>
<ul>
  <li>Apply the 5-step unseen poetry method fluently</li>
  <li>Recall 4–5 quotations per anthology poem with prepared analysis</li>
  <li>Write a comparison essay in 45 minutes with integrated discussion of both poems</li>
  <li>Identify and analyse form, structure, AND language in every response</li>
  <li>Formulate a conceptualised thesis within 2 minutes of reading a question</li>
  <li>Use subject terminology accurately and purposefully</li>
  <li>Complete a full response within the time limit, including proofreading</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The single most effective revision activity for poetry is timed practice. Read an unfamiliar poem, set a timer, and write a response. Then review it against the self-assessment framework. Repeat weekly. There is no substitute for this process — it builds the speed, confidence, and analytical fluency that the exam demands.</div>
`,
    quiz: [
      {
        id: 'iglit-po-m8-q1',
        question: 'What makes a model opening paragraph effective for a poetry essay?',
        options: [
          'It summarises the poem\'s plot in detail',
          'It responds to the question, identifies a technique with its effect, discusses form, and establishes a conceptualised thesis',
          'It provides a biography of the poet',
          'It lists all the literary devices in the poem',
        ],
        correct: 1,
        explanation: 'An effective opening responds directly to the question, identifies at least one technique and its effect, discusses form where relevant, and establishes the conceptualised thesis that the rest of the essay will develop.',
      },
      {
        id: 'iglit-po-m8-q2',
        question: 'What is the key feature of a strong comparative paragraph?',
        options: [
          'It only discusses one poem in depth',
          'It discusses both poems in integrated fashion, compares methods, uses comparative language, and includes evaluative judgement',
          'It lists all the similarities between the poems',
          'It is very long, covering an entire page',
        ],
        correct: 1,
        explanation: 'A strong comparative paragraph integrates discussion of both poems, compares methods rather than just content, uses comparative connectives, and includes evaluative judgement about relative effectiveness.',
      },
      {
        id: 'iglit-po-m8-q3',
        question: 'If you struggle to explain the effects of techniques, what two questions should you ask?',
        options: [
          '"What technique is this?" and "Where else does it appear?"',
          '"What does this make the reader think/feel/imagine?" and "Why might the poet want this?"',
          '"Is this a metaphor?" and "Is this a simile?"',
          '"How long is the poem?" and "What form is it?"',
        ],
        correct: 1,
        explanation: 'Asking "What does this make the reader think, feel, or imagine?" generates the effect. Asking "Why might the poet want this?" generates the purpose. Together, these two questions produce the analytical depth that AO2 requires.',
      },
      {
        id: 'iglit-po-m8-q4',
        question: 'Why should you practise with poems that challenge or confuse you?',
        options: [
          'Because difficult poems earn more marks',
          'Because building resilience with challenging poems prepares you for the unpredictability of unseen poetry in the exam',
          'Because examiners prefer students who like difficult poetry',
          'Because easy poems are not on the exam',
        ],
        correct: 1,
        explanation: 'Practising with challenging poems builds the resilience and analytical flexibility you need for unseen poetry, where the poem is unpredictable. If you only practise with comfortable poems, you will be underprepared for difficulty.',
      },
      {
        id: 'iglit-po-m8-q5',
        question: 'According to this module, what is the single most effective revision activity for poetry?',
        options: [
          'Re-reading your notes',
          'Memorising as many literary terms as possible',
          'Timed practice: read an unfamiliar poem, write a response under timed conditions, then review it',
          'Reading model answers written by other students',
        ],
        correct: 2,
        explanation: 'Timed practice with unfamiliar poems is the single most effective revision activity. It builds speed, confidence, and analytical fluency simultaneously. There is no substitute for the experience of writing under real conditions.',
      },
    ],
  },
];

// Assessment questions for Poetry & Unseen
const poetryAssessment: CourseQuiz[] = [
  {
    id: 'iglit-po-a1',
    question: 'What are the three main elements poets use to create meaning?',
    options: ['Plot, character, setting', 'Language, form, structure', 'Rhyme, rhythm, metre', 'Theme, tone, mood'],
    correct: 1,
    explanation: 'Poets create meaning through language (word choices, imagery), form (the overall type of poem), and structure (internal organisation). All three should be discussed in strong responses.',
  },
  {
    id: 'iglit-po-a2',
    question: 'What is "enjambment"?',
    options: ['A pause in the middle of a line', 'When a sentence runs over from one line to the next without punctuation', 'A type of rhyme scheme', 'The final line of a stanza'],
    correct: 1,
    explanation: 'Enjambment occurs when a sentence or phrase continues from one line to the next without end-stopping punctuation, creating momentum and often emphasising the word at the start of the new line.',
  },
  {
    id: 'iglit-po-a3',
    question: 'What is a "volta" in poetry?',
    options: ['The title of a poem', 'A turn or shift in argument, mood, or perspective', 'The final word of a poem', 'A type of Italian sonnet'],
    correct: 1,
    explanation: 'A volta is a turn or shift in a poem\'s argument, mood, or perspective. While traditionally associated with sonnets, the term can apply to any poem that contains a significant shift.',
  },
  {
    id: 'iglit-po-a4',
    question: 'What is the difference between a Petrarchan and Shakespearean sonnet structure?',
    options: ['Petrarchan has octave/sestet; Shakespearean has three quatrains and a couplet', 'Petrarchan is 12 lines; Shakespearean is 14', 'They are identical', 'Petrarchan uses free verse; Shakespearean uses metre'],
    correct: 0,
    explanation: 'A Petrarchan sonnet has an octave (8 lines) and sestet (6 lines) with the volta between them. A Shakespearean sonnet has three quatrains (4 lines each) and a concluding couplet, with the volta before the couplet.',
  },
  {
    id: 'iglit-po-a5',
    question: 'What is "pathetic fallacy"?',
    options: ['A logical error in a poem', 'When the natural environment reflects characters\' emotions or the poem\'s mood', 'A type of understatement', 'When a poet admits they are wrong'],
    correct: 1,
    explanation: 'Pathetic fallacy is when the natural environment mirrors emotions or mood — storms for turmoil, sunshine for joy. It connects human experience to the natural world.',
  },
  {
    id: 'iglit-po-a6',
    question: 'What distinguishes a metaphor from a simile?',
    options: ['Metaphors are longer', 'A metaphor states one thing IS another; a simile compares using "like" or "as"', 'Similes are more powerful', 'There is no difference'],
    correct: 1,
    explanation: 'A metaphor makes a direct identification ("life IS a walking shadow") while a simile uses "like" or "as" to compare ("my love is LIKE a red rose"). Metaphors are generally considered stronger because they assert identity rather than resemblance.',
  },
  {
    id: 'iglit-po-a7',
    question: 'Why is the "integrated" approach to comparison essays superior to the "block" approach?',
    options: ['It is shorter', 'It produces genuine comparison by discussing both poems in every paragraph', 'Examiners require it', 'It uses fewer quotations'],
    correct: 1,
    explanation: 'The integrated approach — discussing both poems in every paragraph organised by theme or technique — produces genuine comparative analysis. The block method (Poem A then Poem B) tends to produce two separate analyses with only superficial comparison.',
  },
  {
    id: 'iglit-po-a8',
    question: 'What should you do if an unseen poem confuses you?',
    options: ['Leave the question blank', 'Start with what you understand, focus on images and tone, and explore multiple interpretations', 'Write about a different poem', 'Ask the invigilator for help'],
    correct: 1,
    explanation: 'Start with accessible moments, focus on concrete images and tone, and embrace ambiguity by exploring multiple possible meanings. You do not need to understand everything to write a strong analytical response.',
  },
  {
    id: 'iglit-po-a9',
    question: 'What is an "extended metaphor"?',
    options: ['A very long simile', 'A metaphor sustained over several lines or an entire poem', 'A metaphor that is repeated in different poems', 'A metaphor followed by an explanation'],
    correct: 1,
    explanation: 'An extended metaphor is a metaphor developed over several lines or even a whole poem, with multiple aspects of the comparison explored. It creates layered, complex meaning.',
  },
  {
    id: 'iglit-po-a10',
    question: 'Why should you refer to "the speaker" rather than "the poet" when analysing poetry?',
    options: ['Because it sounds more academic', 'Because the voice may be a persona, not the poet themselves', 'Because examiners deduct marks for saying "the poet"', 'Because all poems use fictional characters'],
    correct: 1,
    explanation: 'Many poems use a persona or character as the speaker, not the poet\'s own voice. Referring to "the speaker" avoids biographical assumptions and keeps analysis focused on the text itself.',
  },
  {
    id: 'iglit-po-a11',
    question: 'What is "sibilance" and what effect can it create?',
    options: ['Repetition of "b" sounds creating a booming effect', 'Repetition of "s" sounds creating hissing, menace, or calm', 'Repetition of vowel sounds creating musicality', 'Words that sound like what they describe'],
    correct: 1,
    explanation: 'Sibilance is the repetition of "s" sounds. Depending on context, it can create a sinister hissing effect (suggesting menace or secrecy) or a soft, soothing quality (suggesting calm or intimacy).',
  },
  {
    id: 'iglit-po-a12',
    question: 'What does the "consider alternatives" technique involve?',
    options: ['Listing synonyms for every word', 'Explaining why the poet\'s word choice is more effective than alternatives they could have used', 'Comparing the poem with alternative poems', 'Suggesting improvements to the poem'],
    correct: 1,
    explanation: 'The "consider alternatives" technique means explaining why the poet chose this specific word over alternatives. For example, "devour" instead of "erode" — the violence of "devour" makes time seem predatory, which "erode" would not achieve.',
  },
  {
    id: 'iglit-po-a13',
    question: 'How should quotations be selected for anthology poem revision?',
    options: ['Choose the longest quotations', 'Choose short, language-rich, thematically versatile quotations from different parts of the poem', 'Choose quotations from the first stanza only', 'Choose quotations that describe the setting'],
    correct: 1,
    explanation: 'Select 4-5 short quotations per poem that are rich in analysable language, versatile across multiple themes, and from different parts of the poem (opening, middle, end) to demonstrate whole-poem knowledge.',
  },
  {
    id: 'iglit-po-a14',
    question: 'What is the "three angles" strategy?',
    options: ['Reading a poem from three perspectives', 'Analysing a quotation at word level, technique level, and poem level', 'Writing three drafts of your essay', 'Comparing three poems simultaneously'],
    correct: 1,
    explanation: 'The "three angles" strategy generates analytical depth from a single quotation: (1) word-level connotations, (2) technique identification and effect, (3) connection to wider poem themes. This efficiently produces a well-developed paragraph.',
  },
  {
    id: 'iglit-po-a15',
    question: 'What is the most effective revision activity for poetry exam preparation?',
    options: ['Re-reading notes repeatedly', 'Timed practice with unfamiliar poems followed by self-assessment', 'Memorising model answers', 'Reading as many poems as possible without analysing them'],
    correct: 1,
    explanation: 'Timed practice with unfamiliar poems, followed by self-assessment against the Assessment Objectives, is the most effective revision activity. It builds speed, confidence, and analytical fluency simultaneously.',
  },
];


// ═══════════════════════════════════════════════════════════════════════════════
// Course Definitions
// ═══════════════════════════════════════════════════════════════════════════════

const igcseLitDramaProse: CourseData = {
  id: 'igcse-lit-drama-prose',
  title: 'IGCSE Literature — Drama & Prose',
  subtitle: 'International GCSE Literature — Drama & Prose (4ET1)',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '12 weeks',
  level: 'IGCSE (Years 10-11)',
  color: '#8b5cf6',
  description:
    'The complete Edexcel IGCSE English Literature course for drama and prose set texts. Master extract-based essay technique, character and theme analysis, close reading skills, and timed essay writing — with in-depth study guides for Macbeth and An Inspector Calls, examiner-level strategies, and model analytical approaches.',
  moduleList: dramaProseModules,
  assessmentQuestions: dramaProseAssessment,
};

const igcseLitPoetry: CourseData = {
  id: 'igcse-lit-poetry',
  title: 'IGCSE Literature — Poetry & Unseen',
  subtitle: 'International GCSE Literature — Poetry & Unseen (4ET1)',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '10 weeks',
  level: 'IGCSE (Years 10-11)',
  color: '#a855f7',
  description:
    'The complete Edexcel IGCSE English Literature course for poetry and unseen texts. Master poetry analysis including form, structure, and language; develop anthology poetry skills and comparison techniques; build confidence with unseen poetry through systematic methods — with model responses, timed practice strategies, and self-assessment frameworks.',
  moduleList: poetryModules,
  assessmentQuestions: poetryAssessment,
};

export const igcseLitCourses: CourseData[] = [igcseLitDramaProse, igcseLitPoetry];
