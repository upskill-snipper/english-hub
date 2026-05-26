// @ts-nocheck
import type { CourseModule } from './courses'

export const langP2Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 - Paper 2 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m1',
    title: 'Paper 2 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>Edexcel Paper 2: Fiction, Literary Non-Fiction &amp; Imaginative Writing (1EN2/02)</h2>

<p>Paper 2 is one of two externally examined components in the Edexcel GCSE English Language specification. It accounts for <strong>50% of your total GCSE grade</strong> and is sat under timed conditions. Understanding the paper's structure inside-out is the first step to a confident performance on exam day.</p>

<div class="key-term"><strong>Key Term: 1EN2/02</strong> - The official Pearson Edexcel component code for English Language Paper 2. The paper focuses on <em>fiction</em> and <em>literary non-fiction</em> reading, plus <em>imaginative writing</em>. It is worth 80 marks and lasts 1 hour 55 minutes.</div>

<h3>Paper at a Glance</h3>
<table>
  <tr><th>Detail</th><th>Paper 2</th></tr>
  <tr><td>Duration</td><td>1 hour 55 minutes</td></tr>
  <tr><td>Total marks</td><td>80</td></tr>
  <tr><td>Weighting</td><td>50% of GCSE</td></tr>
  <tr><td>Section A</td><td>Reading - 40 marks</td></tr>
  <tr><td>Section B</td><td>Imaginative Writing - 40 marks</td></tr>
</table>

<h3>Section A: Reading (40 marks)</h3>
<p>You will be given <strong>two unseen extracts</strong>: one from a <strong>20th- or 21st-century fiction</strong> text and one from a <strong>literary non-fiction</strong> text. The questions test your ability to read closely, interpret meaning, analyse language and structure, and compare writers' perspectives.</p>

<ul>
  <li><strong>Q1-Q2</strong> (short-answer comprehension, approx. 1-3 marks each) - identify and retrieve explicit information.</li>
  <li><strong>Q3</strong> (approx. 6 marks) - analyse how language is used for effect.</li>
  <li><strong>Q4</strong> (approx. 10 marks) - analyse how structure and narrative perspective shape meaning.</li>
  <li><strong>Q5</strong> (approx. 15+ marks) - evaluate or compare across both extracts, supported by textual evidence.</li>
</ul>

<div class="key-term"><strong>Key Term: Literary Non-Fiction</strong> - Texts that are factual in origin but employ literary techniques such as imagery, rhetoric, and narrative voice. Examples include travel writing, autobiography, essays, and letters.</div>

<h3>Section B: Imaginative Writing (40 marks)</h3>
<p>You choose <strong>one</strong> writing task from a choice of two. Tasks may provide a visual stimulus (image) or a written prompt. You are assessed on <strong>content and organisation</strong> (AO5 - 24 marks) and <strong>technical accuracy</strong> (AO6 - 16 marks).</p>

<h3>Assessment Objectives Tested</h3>
<ul>
  <li><strong>AO1</strong> - Identify and interpret explicit and implicit information; select and synthesise evidence.</li>
  <li><strong>AO2</strong> - Explain, comment on and analyse how writers use language and structure for effect.</li>
  <li><strong>AO3</strong> - Compare writers' ideas and perspectives across texts.</li>
  <li><strong>AO4</strong> - Evaluate texts critically, supporting with textual references.</li>
  <li><strong>AO5</strong> - Communicate clearly, effectively and imaginatively; organise information using structural and grammatical features.</li>
  <li><strong>AO6</strong> - Use a range of vocabulary and sentence structures for clarity and effect; apply accurate spelling, punctuation and grammar.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The key difference between Paper 1 and Paper 2 is the text types and writing task. Paper 1 focuses on non-fiction and transactional writing; Paper 2 focuses on fiction, literary non-fiction, and <em>imaginative</em> writing. Do not confuse the two - creative description and narrative are Paper 2 skills.</div>

<h3>Recommended Timing Strategy</h3>
<ol>
  <li><strong>5 minutes</strong> - read both extracts carefully, annotating as you go.</li>
  <li><strong>50 minutes</strong> - Section A reading questions (allocate time roughly in proportion to marks).</li>
  <li><strong>5 minutes</strong> - plan your imaginative writing task.</li>
  <li><strong>45 minutes</strong> - write your response to Section B.</li>
  <li><strong>10 minutes</strong> - proofread and correct errors across both sections.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on Section A and rushing the 40-mark writing task. Section B carries exactly the same weight as Section A, so it deserves equal time and attention. Practise writing under timed conditions so you can produce a polished piece in 45 minutes.</div>

<p>In the modules that follow, we will work through each question type in detail, building the reading and writing skills you need to tackle every part of Paper 2 with confidence.</p>
`,
    quiz: [
      {
        id: 'edx-lp2-m1-q1',
        question: 'How long is the Edexcel Paper 2 exam, and how many marks is it worth?',
        options: [
          '1 hour 45 minutes, 64 marks',
          '1 hour 55 minutes, 80 marks',
          '2 hours, 80 marks',
          '1 hour 55 minutes, 100 marks',
        ],
        correct: 1,
        explanation:
          'Edexcel Paper 2 (1EN2/02) lasts 1 hour 55 minutes and is worth 80 marks in total - 40 for reading (Section A) and 40 for writing (Section B).',
      },
      {
        id: 'edx-lp2-m1-q2',
        question: 'Which of the following text types will you encounter in Section A of Paper 2?',
        options: [
          '19th-century non-fiction and poetry',
          '20th/21st-century fiction and literary non-fiction',
          'Shakespeare and a modern novel extract',
          'Newspaper articles and advertisements',
        ],
        correct: 1,
        explanation:
          'Section A of Paper 2 presents two unseen extracts: one from 20th- or 21st-century fiction and one from literary non-fiction.',
      },
      {
        id: 'edx-lp2-m1-q3',
        question: 'What type of writing is assessed in Section B of Paper 2?',
        options: [
          'Transactional writing (e.g., letter, speech, article)',
          'Analytical essay writing',
          'Imaginative writing (e.g., narrative, description)',
          'Summary writing',
        ],
        correct: 2,
        explanation:
          'Section B of Paper 2 tests imaginative writing - you choose one task and produce a piece of creative narrative or descriptive writing, assessed on AO5 (content and organisation) and AO6 (technical accuracy).',
      },
      {
        id: 'edx-lp2-m1-q4',
        question:
          "Which assessment objective is concerned with comparing writers' ideas and perspectives?",
        options: ['AO1', 'AO2', 'AO3', 'AO5'],
        correct: 2,
        explanation:
          "AO3 requires you to compare writers' ideas and perspectives across texts. This is typically tested in the higher-mark reading questions on Paper 2.",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 - Reading 20th/21st-Century Fiction: Comprehension & Inference
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m2',
    title: 'Reading 20th/21st-Century Fiction: Comprehension & Inference',
    duration: '50 min',
    content: `
<h2>Reading 20th/21st-Century Fiction: Comprehension &amp; Inference</h2>

<p>The opening questions on Paper 2 Section A test your ability to read a modern fiction extract closely and accurately. These short-answer questions (typically worth 1-3 marks each) reward precise retrieval and careful inference. Getting them right quickly frees up time for the higher-mark analytical questions later in the paper.</p>

<div class="key-term"><strong>Key Term: Explicit Meaning</strong> - Information that is directly stated in the text. You can point to specific words or phrases that convey it without needing to "read between the lines."</div>

<div class="key-term"><strong>Key Term: Implicit Meaning (Inference)</strong> - Information that is suggested or implied by the writer's choices. The reader must interpret clues in the text to arrive at a conclusion that is not directly stated.</div>

<h3>Practice Extract</h3>
<div class="text-extract">The bus lurched to a stop and Mariam stepped off into the grey drizzle. She pulled her school bag higher on her shoulder and stared down the street. The terraced houses stood in a long, unbroken row, their brickwork darkened by decades of rain. A fox slipped between two wheelie bins and vanished under a parked car. Somewhere above, a window slammed shut.

She walked quickly, her trainers slapping the wet pavement. At number forty-seven she paused, fishing in her pocket for the key. The front door was already ajar. A strip of light fell across the hallway carpet, and from the kitchen came the low murmur of a radio and the smell of cumin and fried onions. Mariam let out a breath she hadn't known she was holding.<div class="source">Original 21st-century-style fiction extract written for exam practice</div></div>

<h3>Answering Short-Answer Retrieval Questions (Q1-Q2 Style)</h3>
<p>These questions ask you to identify specific details from the extract. They are typically phrased as:</p>
<ul>
  <li>"Give <strong>two</strong> things you learn about the setting from lines 1-5."</li>
  <li>"What does the reader learn about Mariam in this extract?"</li>
</ul>

<p>Your answers should be <strong>brief and precise</strong>. You may quote directly or paraphrase, but every point must be rooted in the text.</p>

<h4>Example (Explicit Retrieval)</h4>
<p><em>Q: Give two things you learn about the weather from the first paragraph.</em></p>
<ol>
  <li>There is a "grey drizzle" - the weather is rainy and overcast.</li>
  <li>The brickwork has been "darkened by decades of rain" - rain is a long-standing feature of the area.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always embed a short quotation in your answer, even for 1-mark retrieval questions. It proves you are working from the text and removes ambiguity. Keep quotations concise - a few key words are enough.</div>

<h3>Moving from Retrieval to Inference</h3>
<p>Higher-mark short questions may ask what a detail <em>suggests</em> or what the reader can <em>infer</em>. To build a strong inference, follow a three-step chain:</p>

<ol>
  <li><strong>Evidence</strong> - select a quotation from the text.</li>
  <li><strong>Interpretation</strong> - explain what the detail suggests beyond its literal meaning.</li>
  <li><strong>Meaning</strong> - connect your interpretation to a wider idea about the character, setting, or mood.</li>
</ol>

<h4>Annotated Inference Example</h4>
<p><em>Q: What do the final two sentences suggest about Mariam's feelings as she arrives home?</em></p>
<p><strong>Evidence:</strong> "Mariam let out a breath she hadn't known she was holding."</p>
<p><strong>Interpretation:</strong> The involuntary held breath implies she was tense or anxious during her walk, perhaps without fully realising it herself.</p>
<p><strong>Meaning:</strong> The release of breath as she reaches the warmth and familiar sounds of the kitchen suggests a sense of <em>relief and safety</em> - home is a place of comfort after an uneasy journey.</p>

<div class="key-term"><strong>Key Term: Inference Chain</strong> - A structured approach that moves from <em>text evidence</em> → <em>interpretation of that evidence</em> → <em>wider meaning or significance</em>. This framework ensures your inference is always grounded in the text rather than speculation.</div>

<h3>Embedding Quotations Effectively</h3>
<p>Rather than dropping quotations into your answer as standalone sentences, weave them into your own phrasing:</p>
<ul>
  <li><strong>Weak:</strong> "A fox slipped between two wheelie bins." This shows urban wildlife.</li>
  <li><strong>Strong:</strong> The image of a fox that "slipped between two wheelie bins" introduces a sense of quiet, almost secretive urban life to the setting.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing long, speculative inferences that stray from the text. For example, claiming Mariam is "terrified of going home because something bad happened there" - the extract offers no evidence for this. Strong inference stays close to the evidence and acknowledges what can reasonably be deduced, not what you imagine might be true.</div>

<h3>Quick Practice</h3>
<p>Using the extract above, try these tasks:</p>
<ol>
  <li><strong>Retrieval:</strong> Give two things you learn about the street where Mariam lives.</li>
  <li><strong>Inference:</strong> What does the detail about the front door being "already ajar" suggest? Use the three-step inference chain.</li>
</ol>

<p><strong>Model answers:</strong></p>
<ol>
  <li>The street has "terraced houses" in "a long, unbroken row" - it is a densely built residential area. The brickwork is "darkened by decades of rain," suggesting an older, weathered neighbourhood.</li>
  <li><em>Evidence:</em> "The front door was already ajar." <em>Interpretation:</em> Someone inside has left the door open, possibly expecting Mariam's arrival. <em>Meaning:</em> This small detail implies care and anticipation - someone at home is looking out for her, reinforcing the sense that the house is a welcoming, safe space.</li>
</ol>

<p>Mastering retrieval and inference on these early questions builds the close-reading habits you need for every Section A response. In the next module, we will apply similar skills to <strong>language analysis</strong>, where marks - and the level of detail expected - increase significantly.</p>
`,
    quiz: [
      {
        id: 'edx-lp2-m2-q1',
        question: 'What is the difference between explicit and implicit meaning?',
        options: [
          "Explicit meaning is the writer's opinion; implicit meaning is fact",
          'Explicit meaning is directly stated; implicit meaning must be inferred from clues in the text',
          'Explicit meaning requires analysis; implicit meaning is obvious',
          'There is no real difference - the terms are interchangeable',
        ],
        correct: 1,
        explanation:
          'Explicit meaning is information directly stated in the text, while implicit meaning (inference) requires the reader to interpret clues and suggestions that the writer has embedded without stating them outright.',
      },
      {
        id: 'edx-lp2-m2-q2',
        question: 'Which of the following best demonstrates an embedded quotation?',
        options: [
          '"The bus lurched to a stop." This shows movement.',
          'The verb "lurched" suggests the bus stopped suddenly and roughly, creating an uneasy tone.',
          'Mariam got off the bus. The bus stopped.',
          'The bus stopped (line 1).',
        ],
        correct: 1,
        explanation:
          'An embedded quotation weaves a short extract from the text into the student\'s own sentence, as in: The verb "lurched" suggests the bus stopped suddenly. This is more fluent and analytical than dropping in a standalone quote.',
      },
      {
        id: 'edx-lp2-m2-q3',
        question: 'What are the three steps of an inference chain?',
        options: [
          'Quote, Technique, Effect',
          'Point, Evidence, Explanation',
          'Evidence, Interpretation, Meaning',
          'Context, Analysis, Evaluation',
        ],
        correct: 2,
        explanation:
          'The inference chain taught in this module moves from Evidence (a quotation) to Interpretation (what the detail suggests) to Meaning (the wider significance for character, setting, or mood).',
      },
      {
        id: 'edx-lp2-m2-q4',
        question:
          'A student writes: "Mariam is terrified because her home is dangerous." Using only the extract provided, why is this a weak inference?',
        options: [
          'It is too short to gain marks',
          'It does not use a quotation',
          'It speculates beyond the evidence - the extract suggests relief and safety, not terror',
          'It focuses on character rather than setting',
        ],
        correct: 2,
        explanation:
          'A strong inference stays close to the text. The extract shows Mariam releasing tension and arriving to warmth and familiar sounds - evidence of comfort, not danger. Claiming she is "terrified" speculates beyond what the text supports.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 - Reading Fiction: Language & Structure Analysis
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m3',
    title: 'Reading Fiction: Language & Structure Analysis',
    duration: '55 min',
    content: `
<h2>AO2 in Fiction - Language &amp; Structure Combined</h2>

<p>On Edexcel Paper 2 (1EN2/02), fiction extracts require you to analyse <strong>both language and structure</strong> in one response. Edexcel does <em>not</em> split these into separate questions - you must weave both skills together.</p>

<div class="key-term"><strong>AO2</strong> - Analyse how writers use language and structure to achieve effects, using relevant subject terminology.</div>

<h3>Language Techniques in Fiction</h3>
<ul>
  <li><strong>Metaphor</strong> - transforms one thing into another.</li>
  <li><strong>Simile</strong> - comparison using "like" or "as".</li>
  <li><strong>Personification</strong> - human qualities given to non-human things.</li>
  <li><strong>Semantic fields</strong> - clusters of words from one topic area building atmosphere.</li>
  <li><strong>Sensory language</strong> - appeals to sight, sound, touch, taste, or smell.</li>
  <li><strong>Connotation</strong> - associations beyond literal meaning, e.g. "trudged" connotes exhaustion.</li>
</ul>

<h3>Structure Techniques in Fiction</h3>
<ul>
  <li><strong>Narrative perspective</strong> - first person (intimacy), third person omniscient (breadth), limited third person (tension).</li>
  <li><strong>Shifts in focus/time</strong> - flashbacks, changes of character or setting.</li>
  <li><strong>Foreshadowing</strong> - early hints that suggest what is to come.</li>
  <li><strong>Cyclical structure</strong> - the text ends where it began, creating inevitability.</li>
  <li><strong>Paragraph length</strong> - short paragraphs quicken pace; long paragraphs build atmosphere.</li>
</ul>

<h3>Fiction Extract - Colour-Coded Annotations</h3>

<div class="text-extract">
<p>The house had not changed. <span style="color:#2563eb">[Metaphor]</span> <em>It crouched at the end of the lane like a creature waiting to be fed</em>, its windows <span style="color:#2563eb">[Personification]</span> <em>watching</em> the road with hollow patience.</p>
<p><span style="color:#16a34a">[Shift in time]</span> She remembered running through these rooms as a child, <span style="color:#2563eb">[Sensory]</span> <em>the smell of beeswax and lavender</em>. The floorboards had sung beneath her feet then.</p>
<p><span style="color:#16a34a">[Short paragraph]</span> Now they groaned.</p>
<p>She moved through the hallway, <span style="color:#2563eb">[Semantic field]</span> <em>past peeling paper and the dark bloom of damp</em>. <span style="color:#16a34a">[Cyclical]</span> The house had not changed - but she had.</p>
<div class="source">Original fiction extract in the style of Edexcel exam sources</div>
</div>

<p><strong>Key:</strong> <span style="color:#2563eb">Blue = language</span> &nbsp;|&nbsp; <span style="color:#16a34a">Green = structure</span></p>

<h3>The WHAT-HOW-WHY Framework</h3>
<ol>
  <li><strong>WHAT</strong> - Identify the technique and embed a quotation.</li>
  <li><strong>HOW</strong> - Explain how it works at word or sentence level.</li>
  <li><strong>WHY</strong> - Analyse the effect on the reader or link to wider meaning.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Integrate language and structure rather than treating them as separate lists. After a language point, link it to structure - e.g. "The metaphor appears in the opening line, positioning the threat from the start."</div>

<h3>Model Answer (Extract)</h3>

<p><em>"The writer opens with 'The house had not changed', establishing stagnation. This echoes in the final line - 'but she had' - creating cyclical structure that reinforces entrapment. The simile 'like a creature waiting to be fed' transforms the house into a predator; 'fed' draws on connotations of consumption, suggesting the house is alive and hungry."</em></p>

<div class="common-mistake"><strong>Common Mistake:</strong> Listing techniques without analysis - e.g. "The writer uses a metaphor and a simile." This is <em>feature-spotting</em>. Always explain <strong>how</strong> the technique works and <strong>why</strong> it was chosen.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m3-q1',
        question:
          'What is distinctive about how Edexcel Paper 2 assesses language and structure in fiction?',
        options: [
          'Language and structure are tested in two separate questions',
          'Only language is assessed; structure is not tested on Paper 2',
          'Language and structure are combined into one question',
          'Structure is only assessed through a multiple-choice question',
        ],
        correct: 2,
        explanation:
          'Unlike some other boards, Edexcel combines language and structure analysis into a single question, requiring students to integrate both skills in one response.',
      },
      {
        id: 'edx-lp2-m3-q2',
        question: 'In the WHAT-HOW-WHY framework, what does the "HOW" step require you to do?',
        options: [
          'Identify the technique and provide a quotation',
          'Explain how the technique works at word or sentence level',
          'Link the technique to the wider themes of the text',
          'Compare the technique to one used by a different writer',
        ],
        correct: 1,
        explanation:
          'The HOW step focuses on the mechanics of the technique - explaining precisely how specific words, phrases, or sentence structures create meaning and effect.',
      },
      {
        id: 'edx-lp2-m3-q3',
        question: 'Which of the following is an example of a structural technique?',
        options: [
          'A simile comparing a building to a creature',
          'A semantic field of decay running through the passage',
          'A cyclical structure where the ending echoes the opening',
          'Sensory language appealing to the sense of smell',
        ],
        correct: 2,
        explanation:
          'Cyclical structure - where the text ends by returning to its opening - is a structural technique. Simile, semantic fields, and sensory language are all language techniques.',
      },
      {
        id: 'edx-lp2-m3-q4',
        question: 'What is "feature-spotting" and why should it be avoided?',
        options: [
          'Identifying techniques without analysing their effect - it stays in lower mark bands',
          'Using too many quotations - it wastes time in the exam',
          'Writing about structure instead of language - it misses half the marks',
          'Colour-coding annotations - it is not accepted by examiners',
        ],
        correct: 0,
        explanation:
          'Feature-spotting means naming techniques (e.g. "The writer uses a metaphor") without explaining how they work or why they are effective. Examiners reward analysis, not lists of devices.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 - Reading Literary Non-Fiction: Analysis & Comparison
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m4',
    title: 'Reading Literary Non-Fiction: Analysis & Comparison',
    duration: '55 min',
    content: `
<h2>Literary Non-Fiction - Beyond the Factual</h2>

<p>Edexcel Paper 2 (1EN2/02) tests your ability to analyse <strong>literary non-fiction</strong> - texts rooted in fact but employing literary techniques. The writer's craft is as important as their content.</p>

<div class="key-term"><strong>Literary Non-Fiction</strong> - Factual writing that uses imagery, rhetoric, varied syntax, and narrative voice to engage the reader. The "literary" element distinguishes it from functional non-fiction.</div>

<h3>Types of Literary Non-Fiction</h3>
<ul>
  <li><strong>Travel writing</strong> - journeys and places, rich in sensory description.</li>
  <li><strong>Memoir</strong> - a focused account of a particular experience in the writer's life.</li>
  <li><strong>Autobiography</strong> - a broader life account in the writer's own voice.</li>
  <li><strong>Essays</strong> - discursive pieces exploring ideas or observations.</li>
  <li><strong>Published letters</strong> - personal correspondence revealing private voice and opinions.</li>
</ul>

<h3>Literary Non-Fiction Extract</h3>

<div class="text-extract">
<p>The valley opened before us like a wound in the earth, raw and red where the soil had been stripped by rain. Below, the river - swollen, furious - threw itself against the rocks with a sound like applause.</p>
<p>There is a particular silence that follows a storm. Not the absence of noise, but a held breath - the landscape pausing to examine what it has survived. The trees leaned at new angles, clinging to the earth with a stubbornness I envied. I had come here to escape the city, but nature had its own volume.</p>
<div class="source">Original literary non-fiction extract in the style of Edexcel exam sources</div>
</div>

<h3>Identifying Perspective and Bias</h3>

<p>Every literary non-fiction text is shaped by the writer's <strong>perspective</strong>. Ask: What is their <strong>attitude</strong>? What <strong>language choices</strong> reveal it? Are they <strong>biased</strong>? How do they <strong>position the reader</strong> (inclusive pronouns, direct address, rhetorical questions)?</p>

<p>In the extract, personification ("the landscape pausing") and the verb "envied" reveal admiration for nature, while contrast with the city positions nature as superior.</p>

<div class="key-term"><strong>AO3</strong> - Compare writers' ideas and perspectives, and how these are conveyed, across two or more texts.</div>

<h3>Comparison Frameworks</h3>

<table>
  <tr><th>Method</th><th>How It Works</th><th>Best For</th></tr>
  <tr><td><strong>Alternating</strong></td><td>Each point discusses Text A then compares with Text B.</td><td>Sustained comparison - <em>recommended</em>.</td></tr>
  <tr><td><strong>Block</strong></td><td>All of Text A, then all of Text B, linking back.</td><td>Easier to organise - but risks two separate essays.</td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The alternating method is strongly preferred - every paragraph should reference both texts. The block method often produces two separate analyses that will not reach higher mark bands.</div>

<h3>Comparative Connectives</h3>
<ul>
  <li><strong>Similarity:</strong> similarly, likewise, both writers, equally</li>
  <li><strong>Contrast:</strong> in contrast, whereas, conversely, however, unlike</li>
</ul>

<h3>Practice Comparison Paragraph</h3>

<p><em>"Both writers present nature as powerful, yet their perspectives diverge. Writer A uses the simile 'like a wound in the earth', positioning nature as violent and indifferent. Conversely, Writer B describes the countryside as 'a gentle quilt draped across the hills', rendering nature safe and comforting. Where Writer A's landscape is hostile, Writer B's is tamed - reflecting the difference between genuine wilderness and the curated rural ideal."</em></p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about each text separately. "Text A says X. Text B says Y." is not comparison - explicitly connect them: "While Text A presents nature as threatening, Text B offers a contrasting view…"</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m4-q1',
        question: 'What makes non-fiction "literary"?',
        options: [
          'It is published in a book rather than a newspaper',
          'It uses literary techniques such as imagery, rhetoric, and narrative voice to engage the reader',
          'It is written about literature or literary figures',
          'It contains dialogue and characters like a novel',
        ],
        correct: 1,
        explanation:
          'Literary non-fiction is factual writing that employs the craft techniques of literature - imagery, varied syntax, voice, rhetoric - to convey its content in an engaging and stylistically accomplished way.',
      },
      {
        id: 'edx-lp2-m4-q2',
        question: 'Which comparison framework do examiners recommend for the highest marks?',
        options: [
          'Block method - analyse Text A fully, then Text B',
          'Alternating (point-by-point) method - compare both texts within each paragraph',
          'Chronological method - discuss texts in the order they were written',
          'Thematic method - organise by theme without referring to specific texts',
        ],
        correct: 1,
        explanation:
          'The alternating method is preferred because it produces sustained comparison. Each paragraph addresses both texts, making the comparison explicit and integrated rather than bolted on.',
      },
      {
        id: 'edx-lp2-m4-q3',
        question: 'Which of the following is a comparative connective that signals contrast?',
        options: ['Similarly', 'Likewise', 'Conversely', 'Equally'],
        correct: 2,
        explanation:
          '"Conversely" signals a contrast or opposing point. "Similarly", "likewise", and "equally" all signal similarity between the two texts being compared.',
      },
      {
        id: 'edx-lp2-m4-q4',
        question:
          'Which of the following is NOT a type of literary non-fiction you might encounter on Edexcel Paper 2?',
        options: ['Travel writing', 'Published letters', 'Instruction manuals', 'Memoir'],
        correct: 2,
        explanation:
          'Instruction manuals are functional, transactional texts - they do not employ literary techniques and would not appear as literary non-fiction on Paper 2. Travel writing, published letters, and memoir are all literary non-fiction forms.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 - Synthesis & Evaluation Skills
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m5',
    title: 'Synthesis & Evaluation Skills',
    duration: '55 min',
    content: `
<h2>Paper 2 - Synthesis &amp; Evaluation Skills</h2>

<p>Two of the most demanding skills on Edexcel Paper 2 (1EN2/02) are <strong>synthesis</strong> and <strong>evaluation</strong>. Synthesis asks you to draw together information from <em>two</em> sources, while evaluation asks you to make a <strong>critical judgement</strong> about how successfully a writer achieves their purpose.</p>

<div class="key-term"><strong>Key Term: Synthesis (AO1/AO3)</strong> - The skill of identifying and comparing information, ideas, or perspectives across two different texts, drawing out similarities to build a unified response.</div>

<h3>How to Scan Both Texts for Common Themes</h3>
<ol>
  <li><strong>Read both sources with the question focus in mind.</strong> Underline any details relevant to the topic.</li>
  <li><strong>Create a quick comparison grid.</strong> Jot down 3-4 points where the sources share common ground, noting a brief quotation from <em>each</em> source.</li>
  <li><strong>Look for shared themes, not identical words.</strong> Source A might describe a "bustling marketplace" while Source B refers to "the chaos of the bazaar" - both convey crowded commercial spaces.</li>
  <li><strong>Prioritise the strongest connections.</strong> Three or four well-evidenced points will score higher than six vague ones.</li>
</ol>

<h3>Writing Synthesis Paragraphs</h3>
<p>The golden rule: every paragraph must reference <strong>both</strong> sources. Use connective phrases such as <em>"Both sources suggest that…"</em>, <em>"Similarly, Source B describes…"</em>, <em>"This idea is echoed in Source A, where the writer…"</em>.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Writing a paragraph entirely about Source A then one about Source B is <em>comparison</em>, not synthesis. True synthesis weaves evidence from both sources into the same paragraph.</div>

<h3>Evaluation: Critical Judgement (AO4)</h3>

<div class="key-term"><strong>Key Term: Evaluation (AO4)</strong> - Assessing how <em>effectively</em> a writer achieves a particular purpose or effect. This requires a critical judgement - not just identification or analysis of techniques.</div>

<p>Evaluation questions take the form: <em>"How successfully does the writer…"</em>. The examiner is not asking you to explain what the writer does - that is analysis. Evaluation asks you to <strong>judge how well they do it</strong>.</p>

<ul>
  <li><strong>Analysis:</strong> <em>"The writer uses the metaphor 'a blanket of silence' to suggest the quiet was total."</em></li>
  <li><strong>Evaluation:</strong> <em>"The metaphor 'a blanket of silence' is particularly effective because it transforms an abstract concept into something tangible, convincingly conveying the character's relief."</em></li>
</ul>

<h3>Evaluative Vocabulary</h3>
<p>Use these adverbs to signal evaluation: <strong>effectively</strong>, <strong>convincingly</strong>, <strong>skilfully</strong>, <strong>persuasively</strong>, <strong>successfully</strong>.</p>

<h3>Model Evaluation: Level 3 vs Level 5</h3>
<p><strong>Level 3:</strong> <em>"The writer uses short sentences like 'She stopped. She listened.' to create tension. This is effective because it makes the reader nervous."</em> - Generic judgement, undeveloped.</p>

<p><strong>Level 5:</strong> <em>"The stripped-back syntax of 'She stopped. She listened.' is remarkably effective in fracturing the narrative flow, compelling the reader to pause alongside the character. By withholding information, the writer skilfully exploits the gap between character and reader perception, generating a palpable sense of dread."</em> - Evaluates quality, explains precisely why it works.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "this engages the reader" without explaining <em>how</em> or <em>why</em>. Vague evaluative comments cap your response at Level 3. Always specify the nature of the effect.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m5-q1',
        question: 'Which assessment objectives does synthesis primarily test on Edexcel Paper 2?',
        options: ['AO1 and AO2', 'AO1 and AO3', 'AO2 and AO4', 'AO3 and AO4'],
        correct: 1,
        explanation:
          "Synthesis tests AO1 (identify and interpret information) and AO3 (compare writers' ideas and perspectives across two or more texts).",
      },
      {
        id: 'edx-lp2-m5-q2',
        question: 'What is the key difference between analysis and evaluation?',
        options: [
          'Analysis uses quotations; evaluation does not',
          'Analysis identifies and explains techniques; evaluation judges how effectively they work',
          'Analysis focuses on language; evaluation focuses on structure',
          'Analysis is for fiction texts; evaluation is for non-fiction texts',
        ],
        correct: 1,
        explanation:
          'Analysis explains what a writer does and what it means. Evaluation goes further by making a critical judgement about how successfully the technique achieves its intended effect.',
      },
      {
        id: 'edx-lp2-m5-q3',
        question: 'Which of the following is the best example of an evaluative statement?',
        options: [
          '"The writer uses alliteration in the phrase \'dark, damp dungeon.\'"',
          '"The word \'dungeon\' has connotations of imprisonment and suffering."',
          "\"The alliteration in 'dark, damp dungeon' effectively creates a claustrophobic atmosphere that convincingly mirrors the character's entrapment.\"",
          '"The writer describes the setting as a dungeon to show it is unpleasant."',
        ],
        correct: 2,
        explanation:
          'The third option combines technique identification with a judgement about effectiveness ("effectively creates", "convincingly mirrors"), demonstrating genuine evaluation rather than mere analysis or identification.',
      },
      {
        id: 'edx-lp2-m5-q4',
        question: 'What is the most important rule when writing a synthesis paragraph?',
        options: [
          'Always start with Source A before moving to Source B',
          'Use at least three quotations per paragraph',
          'Reference both sources within the same paragraph',
          'Write equal amounts about each source',
        ],
        correct: 2,
        explanation:
          'True synthesis weaves evidence from both sources into the same paragraph, demonstrating that you can hold both texts in mind simultaneously rather than treating them in isolation.',
      },
      {
        id: 'edx-lp2-m5-q5',
        question:
          'Why would the evaluative comment "this engages the reader" likely cap a response at Level 3?',
        options: [
          'Because it does not include a quotation',
          'Because it is too short',
          'Because it is vague and does not specify how or why the reader is engaged',
          'Because it uses informal language',
        ],
        correct: 2,
        explanation:
          'Saying something "engages the reader" without explaining the nature of that engagement is a generic, surface-level judgement. Level 5 responses specify precisely what kind of effect is created and why the technique is well-suited to producing it.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 - Imaginative Writing: Narrative Techniques
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m6',
    title: 'Imaginative Writing: Narrative Techniques',
    duration: '55 min',
    content: `
<h2>Paper 2 Section B - Imaginative Writing</h2>

<p>Section B of Edexcel Paper 2 (1EN2/02) tests <strong>imaginative writing</strong>. It is worth <strong>40 marks</strong>: <strong>24 for AO5</strong> (content and organisation) and <strong>16 for AO6</strong> (technical accuracy). You choose <strong>one of two tasks</strong> - a short story, description, or narrative based on a prompt.</p>

<div class="key-term"><strong>Key Term: AO5 (Content &amp; Organisation)</strong> - Communication is clear, effective, and imaginative. Ideas are organised using structural and grammatical features to support coherence and cohesion.</div>

<h3>Narrative Perspective</h3>
<ul>
  <li><strong>First person (<em>I</em>):</strong> Creates intimacy and immediacy. Works well for confessional or suspenseful writing.</li>
  <li><strong>Third person limited (<em>He/She/They</em>):</strong> Follows one character closely from the outside while accessing their inner world. The most versatile exam choice.</li>
  <li><strong>Third person omniscient:</strong> All-knowing narrator - powerful but difficult to control in a short piece.</li>
</ul>

<p><strong>Past tense</strong> is the safest choice. <strong>Present tense</strong> creates urgency but demands consistency - slipping between tenses costs AO6 marks. An <strong>unreliable narrator</strong> can be sophisticated but must be signalled through contradictions or tonal shifts.</p>

<h3>Plot Structure</h3>
<p>The best exam narratives focus on a <strong>single moment or turning point</strong>:</p>
<ol>
  <li><strong>Freytag's Pyramid:</strong> Exposition → Rising action → Climax → Falling action → Resolution. Ending at the climax can be powerful.</li>
  <li><strong>In medias res:</strong> Begin mid-action. <em>"The door slammed. I was already running."</em> Drip-feed backstory afterwards.</li>
  <li><strong>Flashback:</strong> Start in the present, move to the past. Use clear signposting: <em>"Three hours earlier…"</em></li>
  <li><strong>Circular narrative:</strong> End where you began, but with the character fundamentally changed.</li>
</ol>

<h3>Creating Tension</h3>
<ul>
  <li><strong>Short sentences:</strong> <em>"She turned. Nothing. Then - a sound."</em> Fragmented syntax mirrors panic or shock.</li>
  <li><strong>Withholding information:</strong> Let the reader sense something is wrong before the character does.</li>
  <li><strong>Cliffhangers:</strong> End a paragraph at peak uncertainty. <em>"The handle began to turn."</em></li>
</ul>

<h3>Character and Show, Don't Tell</h3>
<p>Reveal character through <strong>action and dialogue</strong>, not description. <em>"He folded the letter carefully, pressing each crease with his thumbnail, then slid it into his coat pocket without a word"</em> conveys precision and secrecy without a single adjective.</p>

<div class="key-term"><strong>Key Term: Show, Don't Tell</strong> - Convey emotions through sensory detail, action, and dialogue rather than direct statement.</div>

<p><strong>Telling:</strong> <em>"She was very nervous about the exam."</em></p>
<p><strong>Showing:</strong> <em>"Her pen trembled between her fingers. The words on the paper swam into nonsense. She swallowed hard, tasting metal, and glanced at the door - the strip of daylight beneath it bright and unreachable."</em></p>

<h3>Sample Task</h3>
<p><strong>Write about a time when everything changed.</strong></p>
<p>Plan for <strong>5 minutes</strong>, write for <strong>35-40 minutes</strong>, proofread for <strong>5 minutes</strong>. Aim for 450-600 words.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Quality beats quantity. A controlled 500-word piece with varied sentences and precise vocabulary will outscore a rambling 900-word piece.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to tell an entire life story in 40 minutes. Zoom in on a <strong>single scene or moment</strong> and explore it with depth. Think of a photograph, not a film.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m6-q1',
        question:
          'How are the 40 marks for Section B imaginative writing divided between assessment objectives?',
        options: [
          '20 marks AO5 + 20 marks AO6',
          '24 marks AO5 + 16 marks AO6',
          '30 marks AO5 + 10 marks AO6',
          '16 marks AO5 + 24 marks AO6',
        ],
        correct: 1,
        explanation:
          'The 40 marks are split into 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy - spelling, punctuation, and grammar).',
      },
      {
        id: 'edx-lp2-m6-q2',
        question:
          'Which narrative technique involves beginning a story in the middle of the action?',
        options: ['Circular narrative', "Freytag's Pyramid", 'In medias res', 'Flashback'],
        correct: 2,
        explanation:
          'In medias res (Latin for "in the middle of things") begins the narrative in the midst of the action, hooking the reader immediately and allowing backstory to be revealed gradually.',
      },
      {
        id: 'edx-lp2-m6-q3',
        question: 'Which of the following best demonstrates the "show, don\'t tell" principle?',
        options: [
          '"He was angry and wanted to shout at everyone."',
          '"His jaw tightened. He set his coffee down with a crack that silenced the room."',
          '"He felt a lot of anger because of what had happened."',
          '"The angry man walked into the room and everyone noticed."',
        ],
        correct: 1,
        explanation:
          'The second option reveals anger through physical action (jaw tightening, slamming the coffee) and its effect on the environment (silencing the room) without ever using the word "angry". This is showing rather than telling.',
      },
      {
        id: 'edx-lp2-m6-q4',
        question:
          'Why is present tense considered a riskier choice than past tense for exam narrative writing?',
        options: [
          'Present tense is not allowed on the Edexcel exam',
          'Present tense always sounds informal and colloquial',
          'Present tense demands strict consistency and slipping between tenses is a common AO6 error',
          'Present tense cannot be used with third-person narration',
        ],
        correct: 2,
        explanation:
          'Present tense creates urgency and immediacy but requires strict consistency. Under exam pressure, students frequently slip into past tense mid-paragraph, which is penalised under AO6 (technical accuracy).',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 - Imaginative Writing: Descriptive Writing
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m7',
    title: 'Imaginative Writing: Descriptive Writing',
    duration: '55 min',
    content: `
<h2>Paper 2 Section B - Descriptive Writing</h2>

<p>Section B of Paper 2 (1EN2/02) is worth <strong>40 marks</strong> - 24 for content/organisation (AO5), 16 for technical accuracy (AO6). You choose between two tasks linked to <strong>photographic stimuli</strong>. This module focuses on <em>descriptive</em> writing.</p>

<div class="key-term"><strong>Key Term: Sensory Detail</strong> - Description appealing to one or more of the five senses. The strongest descriptions engage at least three senses per paragraph.</div>

<h3>The Five-Sense Toolkit</h3>
<ul>
  <li><strong>Sight:</strong> <em>"A bruise of purple cloud spread across the horizon."</em></li>
  <li><strong>Sound:</strong> <em>"The gate shrieked on its hinge, then nothing - only the hush of rain on leaves."</em></li>
  <li><strong>Smell &amp; Taste:</strong> <em>"The air tasted of iron and damp stone."</em></li>
  <li><strong>Touch:</strong> <em>"The banister was gritty with dust beneath her fingertips."</em></li>
</ul>

<h3>Zoom In / Zoom Out</h3>
<p>Open with a <strong>wide shot</strong>, then <strong>zoom in</strong> to a single telling detail - mirroring how a camera works:</p>
<ol>
  <li><strong>Wide:</strong> <em>"The market square heaved with colour and noise."</em></li>
  <li><strong>Mid:</strong> <em>"Near the fountain, a woman arranged pyramids of spice on a trestle."</em></li>
  <li><strong>Close:</strong> <em>"Turmeric dust had settled in the creases of her knuckles like powdered gold."</em></li>
</ol>

<h3>Pathetic Fallacy, Personification &amp; Extended Metaphor</h3>
<p><strong>Pathetic fallacy</strong> projects emotion onto environment: <em>"The sky sulked, heavy and grey."</em> <strong>Personification</strong> treats setting as alive: <em>"The house watched us from behind its ivy."</em> An <strong>extended metaphor</strong> threads one image through a paragraph - if the city is a body, the roads are veins, the traffic is blood.</p>

<h3>Sentence-Level Crafting</h3>
<ul>
  <li><strong>One-word sentence:</strong> <em>"Silence."</em> - isolates a moment, forces the reader to pause.</li>
  <li><strong>List of three:</strong> <em>"The room was bare, cold, forgotten."</em> - rhythmic and emphatic.</li>
  <li><strong>Juxtaposition:</strong> <em>"A child's laughter rose from the garden; inside, the clock measured out its silence."</em></li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Edexcel provides <strong>two images</strong> as stimulus. Spend one minute studying both before choosing. Pick the image that sparks the strongest sensory response - you need enough material for 40 minutes of sustained writing.</div>

<h3>Grade 5 vs Grade 9 - Same Scene</h3>
<p>Prompt image: an abandoned fairground at dusk.</p>

<div class="text-extract"><strong>Grade 5:</strong> The fairground was empty and quiet. The Ferris wheel stood still against the darkening sky. It was a sad and lonely place.<div class="source">Relies on <em>telling</em> ("sad and lonely"). Limited sensory range.</div></div>

<div class="text-extract"><strong>Grade 9:</strong> Dusk bled into the fairground like ink into water. The Ferris wheel - skeletal, seized - held its last passengers: two crows hunched on the uppermost car. Below, a carousel horse bared its painted teeth at nothing, one glass eye catching the dying light. The whole place smelled of oil and sugar and rot, sweetness curdling into something else entirely.<div class="source">Shows rather than tells. Four senses. Metaphor, personification, juxtaposition.</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a narrative when the task says <em>describe</em>. Descriptions need no plot or dialogue - move through space, not time.</div>

<h3>Image-Based Prompt Checklist</h3>
<p>Before writing, ask: What is the <strong>dominant mood</strong>? Which <strong>three senses</strong> can I engage? What single detail will I <strong>zoom in</strong> on? What <strong>controlling metaphor</strong> could unify the piece? What <strong>contrast</strong> exists within the scene?</p>
`,
    quiz: [
      {
        id: 'edx-lp2-m7-q1',
        question: 'What does the "zoom in / zoom out" technique involve?',
        options: [
          'Starting with a close-up detail and ending with a wide shot',
          'Opening with the whole scene and narrowing to a single detail',
          'Alternating rapidly between two contrasting locations',
          'Describing only what is visible from one fixed viewpoint',
        ],
        correct: 1,
        explanation:
          'The zoom technique opens with a wide establishing shot of the scene and progressively narrows focus to a single, telling close-up detail - mirroring how a camera would frame the scene.',
      },
      {
        id: 'edx-lp2-m7-q2',
        question: 'Which of the following best illustrates pathetic fallacy?',
        options: [
          '"The house had tall windows and a red front door."',
          '"She felt anxious about the journey ahead."',
          '"The sky sulked, heavy and grey, pressing down on the rooftops."',
          '"He compared the river to a silver ribbon."',
        ],
        correct: 2,
        explanation:
          'Pathetic fallacy projects human emotions onto the environment. "The sky sulked" gives the sky a human feeling, linking weather to mood.',
      },
      {
        id: 'edx-lp2-m7-q3',
        question:
          'Why does the Grade 9 example outperform the Grade 5 example of the same fairground scene?',
        options: [
          'It is longer and uses more adjectives',
          'It tells the reader directly that the place is sad and lonely',
          'It uses a wider vocabulary and more complex sentences throughout',
          'It shows atmosphere through sensory detail, metaphor, and juxtaposition rather than telling',
        ],
        correct: 3,
        explanation:
          'The Grade 9 response earns its marks by showing rather than telling. It engages multiple senses, uses figurative language purposefully, and creates mood through imagery - not by stating emotions directly.',
      },
      {
        id: 'edx-lp2-m7-q4',
        question: 'What is a common mistake students make when given a descriptive writing task?',
        options: [
          'Using too many sensory details',
          'Writing a narrative with a plot instead of a sustained description',
          'Choosing the more difficult of the two image prompts',
          'Spending too long planning before writing',
        ],
        correct: 1,
        explanation:
          'Many students default to storytelling - introducing characters, conflict, and resolution - when the task specifically asks them to describe. A description explores a place or moment in depth without needing a plot.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 - Imaginative Writing: Advanced Craft
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m8',
    title: 'Imaginative Writing: Advanced Craft',
    duration: '55 min',
    content: `
<h2>Elevating Your Writing from Grade 7 to Grade 9</h2>

<p>The gap between Grade 7 and Grade 9 is not more techniques - it is <strong>control, subtlety, and sustained quality</strong>. AO5 Level 5 demands writing that <em>"shapes audience response with subtlety"</em> and is <em>"sophisticated and sustained"</em>.</p>

<div class="key-term"><strong>Key Term: Authorial Voice</strong> - The distinctive personality and tone in a writer's prose. At Grade 9, your writing should sound like <em>you</em> - deliberate register, rhythm, and attitude.</div>

<h3>Voice and Perspective</h3>
<ul>
  <li><strong>First person with attitude:</strong> <em>"I had been told the town was charming. Whoever said that had a generous definition of the word."</em></li>
  <li><strong>Internal monologue:</strong> <em>"The door was open. It shouldn't have been. And yet my feet carried me forward."</em></li>
  <li><strong>Second person (sparingly):</strong> <em>"You turn the corner and the sea hits you - the cold salt punch of it."</em></li>
</ul>

<h3>Symbolism and Motifs</h3>
<p>A <strong>symbol</strong> carries abstract meaning - a locked door suggests exclusion. A <strong>motif</strong> <em>recurs</em>: mention a ticking clock in your opening, return to it in your final paragraph.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> One recurring image - light, water, a colour - lifts a piece from "competent" to "crafted". Motifs show <strong>deliberate structural control</strong>.</div>

<h3>Temporal Manipulation</h3>
<ul>
  <li><strong>Slow motion:</strong> <em>"The glass turned, once, catching the lamplight - before gravity remembered its job."</em></li>
  <li><strong>Time jumps:</strong> <em>"Three years later, the garden had swallowed the path."</em></li>
  <li><strong>Compressed time:</strong> <em>"Morning came and went. So did the next, each thinner than the last."</em></li>
</ul>

<h3>Ending Techniques</h3>
<ol>
  <li><strong>Circular:</strong> Return to your opening image but shift its meaning.</li>
  <li><strong>Ambiguous:</strong> <em>"The light was on upstairs. Or perhaps it was only the moon."</em></li>
  <li><strong>Revelatory:</strong> Disclose something that reframes the whole piece.</li>
  <li><strong>Reflective:</strong> <em>"The sea went on, indifferent to the small dramas of the shore."</em></li>
</ol>

<h3>Precision Over Purple Prose</h3>
<ul>
  <li><strong>Overwrought:</strong> <em>"The resplendent orb of celestial luminescence descended..."</em></li>
  <li><strong>Precise:</strong> <em>"The sun dropped behind the ridge, and the valley dimmed like a closing eye."</em></li>
</ul>
<p>Sophistication means <strong>precision</strong>, not decoration.</p>

<h3>Paragraph as a Unit of Meaning</h3>
<p>Each paragraph does <strong>one job</strong>. A <strong>one-line paragraph</strong> after a dense passage creates emphasis:</p>
<div class="text-extract"><em>And then it stopped.</em><div class="source">White space amplifies a one-line paragraph's impact.</div></div>

<h3>Annotated Grade 8-9 Model</h3>
<div class="text-extract"><em>The street held its breath.</em> [One-sentence paragraph.] <em>Cobblestones gleamed like the backs of wet beetles. The streetlamp threw amber that ended abruptly - a full stop in a sentence the darkness had no intention of finishing.</em> [Extended metaphor.] <em>Above, a shutter creaked. A radio murmured like a lullaby meant for someone else.</em> [Sound, smell.] <em>The street held its breath. So did I.</em> [Circular ending.]<div class="source">Structural control, sustained atmosphere, distinctive voice.</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Front-loading your best writing into paragraph one. <em>"Sustained"</em> means quality from first line to last. Plan your ending before you start.</div>

<h3>AO5 Level 5 Descriptors</h3>
<ul>
  <li><em>"Fully secure, compelling voice."</em></li>
  <li><em>"Tone, style and register subtly adapted and sustained."</em></li>
  <li><em>"Shapes audience response with subtlety."</em></li>
  <li><em>"Varied and inventive use of structural features."</em></li>
</ul>
`,
    quiz: [
      {
        id: 'edx-lp2-m8-q1',
        question: 'What is the key difference between a symbol and a motif?',
        options: [
          'A symbol is visual and a motif is auditory',
          'A motif recurs throughout the piece while a symbol may appear only once',
          'A symbol is always an object while a motif is always a colour',
          'There is no meaningful difference - they are interchangeable terms',
        ],
        correct: 1,
        explanation:
          'A symbol is a concrete object carrying abstract meaning; a motif is a symbol that recurs. The repetition is what distinguishes a motif and what gives it structural power.',
      },
      {
        id: 'edx-lp2-m8-q2',
        question:
          'Which temporal manipulation technique is used in the sentence: "The glass left his hand. It turned, once, catching the lamplight - a brief, lazy revolution - before gravity remembered its job."?',
        options: ['Time jump', 'Compressed time', 'Slow motion', 'Flashback'],
        correct: 2,
        explanation:
          'The sentence expands a single second - a glass falling - into multiple clauses of detailed description. This is the slow-motion technique: stretching a brief moment to create tension and focus.',
      },
      {
        id: 'edx-lp2-m8-q3',
        question: 'Why should students avoid "purple prose" in their descriptive writing?',
        options: [
          'Examiners penalise any use of figurative language',
          'Overwrought, elaborate vocabulary sounds unnatural and obscures meaning',
          'Simple words always score higher than complex words',
          'The mark scheme specifically forbids adjectives',
        ],
        correct: 1,
        explanation:
          'Purple prose uses excessively ornate language that sounds forced and unnatural. Grade 9 writing values precision over decoration - the right word is not always the longest word.',
      },
      {
        id: 'edx-lp2-m8-q4',
        question:
          'In the annotated model answer, what technique does the ending "The street held its breath. So did I." demonstrate?',
        options: [
          'Ambiguous ending',
          'Revelatory ending',
          'Circular ending with motif callback',
          'Reflective ending with widened perspective',
        ],
        correct: 2,
        explanation:
          'The piece opens with "The street held its breath" and closes by returning to the same phrase with an addition - "So did I." This is a circular ending that also functions as a motif callback, creating structural cohesion.',
      },
      {
        id: 'edx-lp2-m8-q5',
        question:
          'According to the AO5 Level 5 descriptors, which phrase best captures what examiners look for at Grade 8-9?',
        options: [
          '"Uses a range of vocabulary and sentence structures"',
          '"Communicates ideas successfully for the intended audience"',
          '"Shapes audience response with subtlety"',
          '"Uses paragraphs to organise ideas clearly"',
        ],
        correct: 2,
        explanation:
          '"Shapes audience response with subtlety" is a Level 5 AO5 descriptor. It means the writer does not simply communicate ideas but deliberately controls how the reader feels and responds - through voice, structure, imagery, and linguistic precision.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 - SPaG & Vocabulary for Creative Writing
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m9',
    title: 'SPaG & Vocabulary for Creative Writing',
    duration: '45 min',
    content: `
<h2>SPaG &amp; Vocabulary for Creative Writing (AO6)</h2>

<p>On Paper 2, Section B awards up to <strong>16 marks for AO6</strong> - spelling, punctuation, grammar and vocabulary. These marks represent <strong>40% of the writing mark</strong> and can be the difference between a grade 5 and a grade 7.</p>

<div class="key-term"><strong>Key Term: SPaG</strong> - Spelling, Punctuation and Grammar. AO6 rewards accurate and effective use of these elements alongside varied vocabulary and sentence structures.</div>

<h3>Punctuation as a Creative Tool</h3>

<ul>
  <li><strong>Semicolons for balance:</strong> <em>"The forest was silent; not even the wind dared to stir."</em> The two halves mirror each other, reinforcing stillness.</li>
  <li><strong>Colons for revelation:</strong> <em>"She understood at once: everything she feared was true."</em> The colon acts as a hinge swinging towards the climax.</li>
  <li><strong>Ellipsis for suspense:</strong> <em>"He reached into the darkness... and felt something cold."</em> Use sparingly - overuse dilutes the effect.</li>
  <li><strong>Em-dashes for interruption:</strong> <em>"The ceremony was perfect - or it would have been, had the rain not started."</em></li>
</ul>

<h3>Dialogue Punctuation Rules</h3>

<ol>
  <li><strong>New speaker, new line</strong> - start a new paragraph each time a different character speaks.</li>
  <li><strong>Punctuation inside the speech marks:</strong> <em>"I can't believe it," she whispered.</em></li>
  <li><strong>Question/exclamation marks replace the comma:</strong> <em>"Where are you going?" he called.</em></li>
  <li><strong>Capital to start speech, lower-case for the reporting clause:</strong> <em>"Leave me alone," he muttered.</em></li>
</ol>

<h3>Ambitious Vocabulary: Upgrading Common Words</h3>

<ul>
  <li><strong>Said</strong> → murmured, declared, stammered, insisted, conceded, barked</li>
  <li><strong>Walked</strong> → trudged, strode, shuffled, staggered, ambled, crept</li>
  <li><strong>Nice</strong> → tranquil, exquisite, idyllic, serene, delightful</li>
  <li><strong>Scared</strong> → petrified, unnerved, apprehensive, paralysed, haunted</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Using a thesaurus word that does not fit the context. <em>"She murmured angrily across the room"</em> contradicts itself - murmuring is quiet and soft. Always check your word choice matches the tone of the scene.</div>

<h3>Sentence Variety for Rhythm</h3>

<p><em>"The corridor stretched ahead, its walls lined with faded portraits whose eyes seemed to follow his every step. He stopped. Something was wrong."</em></p>

<p>Short sentences after a long one create a jolt - examiners look for this at higher grade bands.</p>

<h3>Common Errors to Fix</h3>

<ul>
  <li><strong>Comma splicing:</strong> <em>"He opened the door, the room was dark"</em> - fix with a full stop, semicolon, or conjunction.</li>
  <li><strong>Tense inconsistency:</strong> If you start in past tense, stay in past tense throughout.</li>
  <li><strong>Misused apostrophes:</strong> <em>It's</em> = "it is." The possessive is <em>its</em> (no apostrophe). Watch <em>their/there/they're</em> too.</li>
</ul>

<h3>Proofreading Checklist</h3>

<ol>
  <li><strong>Read backwards</strong> sentence by sentence to catch spelling errors.</li>
  <li><strong>Circle every comma</strong> - if both sides could stand alone, use a full stop or semicolon.</li>
  <li><strong>Check tense consistency</strong> - underline five verbs at random and confirm they match.</li>
  <li><strong>Check dialogue punctuation</strong> - opening and closing speech marks, punctuation inside.</li>
  <li><strong>Scan for homophones</strong> - their/there/they're, its/it's, your/you're.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Leave at least 5 minutes for proofreading. Correcting two or three SPaG errors can move you up a mark band. Neatly cross out mistakes and write corrections above - examiners will not penalise crossings-out.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m9-q1',
        question:
          'Which punctuation mark is best described as creating a sense of "revelation" or dramatic reveal in a sentence?',
        options: ['Semicolon', 'Colon', 'Ellipsis', 'Em-dash'],
        correct: 1,
        explanation:
          'A colon introduces an explanation or dramatic reveal - it acts as a hinge that swings the sentence towards its climax. A semicolon creates balance, an ellipsis creates suspense, and an em-dash creates interruption.',
      },
      {
        id: 'edx-lp2-m9-q2',
        question: 'Which of the following sentences contains a comma splice error?',
        options: [
          '"He opened the door, and the room was dark."',
          '"He opened the door; the room was dark."',
          '"He opened the door, the room was dark."',
          '"He opened the door. The room was dark."',
        ],
        correct: 2,
        explanation:
          'A comma splice occurs when two independent clauses are joined by only a comma. The correct alternatives use a conjunction, a semicolon, or a full stop to separate the clauses.',
      },
      {
        id: 'edx-lp2-m9-q3',
        question:
          'When writing dialogue, where should the comma be placed in relation to the closing speech marks?',
        options: [
          'After the closing speech marks',
          'Before the closing speech marks',
          'It does not matter',
          'A comma is never used with speech marks',
        ],
        correct: 1,
        explanation:
          'In British English, the comma sits before the closing inverted comma: "I can\'t believe it," she whispered. Placing it after the speech marks is a common error that costs SPaG marks.',
      },
      {
        id: 'edx-lp2-m9-q4',
        question:
          'Why might using the word "murmured" be inappropriate in the sentence "She murmured angrily across the room"?',
        options: [
          'Because "murmured" is too informal for creative writing',
          'Because "murmured" implies quiet, soft speech which contradicts shouting across a room angrily',
          'Because "murmured" is an archaic word no longer in use',
          'Because you should never replace the word "said"',
        ],
        correct: 1,
        explanation:
          'Murmuring is quiet and soft, so it contradicts the ideas of anger and projecting across a room. Ambitious vocabulary must match the tone and logic of the scene to be effective.',
      },
      {
        id: 'edx-lp2-m9-q5',
        question: 'What is the most effective proofreading technique for catching spelling errors?',
        options: [
          'Reading your work from beginning to end quickly',
          'Reading your work backwards, sentence by sentence',
          'Only checking the first and last paragraphs',
          'Counting the number of words you have written',
        ],
        correct: 1,
        explanation:
          'Reading backwards, sentence by sentence, forces your brain to look at each sentence in isolation rather than anticipating what comes next. This makes spelling and punctuation errors far more visible.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 - Paper 2 Exam Strategy & Timed Practice
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m10',
    title: 'Paper 2 Exam Strategy & Timed Practice',
    duration: '60 min',
    content: `
<h2>Paper 2 Exam Strategy &amp; Timed Practice (1EN2/02)</h2>

<p>You have <strong>1 hour 55 minutes</strong> for two sections worth <strong>80 marks</strong>. Each mark is worth roughly <strong>1.4 minutes</strong>.</p>

<div class="key-term"><strong>Key Term: Mark-Per-Minute Ratio</strong> - Divide total minutes by total marks, then multiply by each question's marks to allocate time.</div>

<h3>Complete Timing Plan</h3>

<ol>
  <li><strong>0-10 min:</strong> Read both extracts. Underline key phrases, annotate tone shifts.</li>
  <li><strong>10-16 min:</strong> <strong>Q1-Q2 (3 marks)</strong> - Brief, factual answers.</li>
  <li><strong>16-28 min:</strong> <strong>Q3 (6 marks)</strong> - Language analysis on the fiction extract.</li>
  <li><strong>28-50 min:</strong> <strong>Q4 (15 marks)</strong> - Whole-text analysis: language, structure, purpose.</li>
  <li><strong>50-65 min:</strong> <strong>Q5 (16 marks)</strong> - Evaluation of literary non-fiction.</li>
  <li><strong>65-70 min:</strong> <strong>Plan Section B</strong> - choose your question, sketch 4-5 paragraphs.</li>
  <li><strong>70-105 min:</strong> <strong>Q6 (40 marks)</strong> - Creative/imaginative writing.</li>
  <li><strong>105-115 min:</strong> <strong>Proofread</strong> - SPaG check across the whole paper.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Write the target end-time for each question in your margin before you start. This turns vague urgency into a concrete schedule.</div>

<h3>Choosing Between the Two Writing Tasks</h3>

<ul>
  <li><strong>Pick the option that gives you an immediate idea</strong> - if you can picture a scene within 30 seconds, choose it.</li>
  <li><strong>Description is safer</strong> - no plot needed. Narrative demands a coherent storyline in limited space.</li>
  <li><strong>Check whether the prompt specifies a form.</strong> "Write a description" means do not tell a story.</li>
</ul>

<h3>Reading the Insert</h3>

<p>Read both extracts for general understanding first, then re-read the relevant one before each question, annotating word choices and structural shifts.</p>

<h3>Mock Walkthrough</h3>

<div class="text-extract">The train jolted forward, and Martha pressed her face against the cold glass. Outside, the city was dissolving - rooftops giving way to fields. The suitcase on her lap contained everything that mattered: two photographs, a change of clothes, and her mother's last letter. She felt she could breathe.<div class="source">Original passage in the style of Edexcel Paper 2 fiction extracts</div></div>

<ul>
  <li><strong>Q1:</strong> <em>"The train jolted forward"</em> - simple, direct, factual.</li>
  <li><strong>Q3:</strong> <em>"The city was dissolving"</em> - metaphor suggests her old life is melting away.</li>
  <li><strong>Q4:</strong> City-to-countryside shift mirrors emotional journey; suitcase tricolon creates pathos; breathing symbolises release.</li>
</ul>

<h3>Planning Example</h3>

<p>For <em>"Describe an empty railway platform at night"</em>:</p>
<ol>
  <li>Wide-angle - sodium lights, silence, mist.</li>
  <li>Detail - forgotten coffee cup, flickering display.</li>
  <li>Sound - distant rumble of a train.</li>
  <li>Human element - a single figure waiting.</li>
  <li>Cyclical close - return to silence.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Diving into writing without a plan. Even 2 minutes of planning gives your piece a coherent shape.</div>

<h3>Checklist &amp; Grade Boundaries</h3>

<ul>
  <li>Do you know the AOs (AO1, AO2, AO3, AO4, AO5, AO6) and mark tariffs (1, 2, 6, 15, 16, 40)?</li>
  <li>Have you completed at least one full timed paper?</li>
  <li>Have you memorised dialogue punctuation and your proofreading checklist?</li>
</ul>

<p>Roughly: <strong>grade 4</strong> needs <strong>45-50%</strong> (36-40/80); <strong>grade 7</strong> needs <strong>70-75%</strong> (56-60/80).</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In the final 10 minutes, proofread - do not write new content. A polished, shorter response outperforms a longer, careless one.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m10-q1',
        question:
          'According to the timing plan, approximately how many minutes should you spend on Q4 (15 marks)?',
        options: ['10 minutes', '15 minutes', '22 minutes', '30 minutes'],
        correct: 2,
        explanation:
          'The timing plan allocates minutes 28-50 for Q4, which is approximately 22 minutes. This reflects its status as the highest-tariff reading question at 15 marks.',
      },
      {
        id: 'edx-lp2-m10-q2',
        question:
          'What is the recommended approach if you cannot decide between the two Section B writing tasks?',
        options: [
          'Always choose the narrative option',
          'Pick the option that gives you an immediate idea within 30 seconds',
          'Choose whichever topic sounds more impressive',
          'Spend 10 minutes planning both and then decide',
        ],
        correct: 1,
        explanation:
          'You should pick the option that gives you an immediate idea. If you can picture a scene or character within 30 seconds, that is the right choice. Spending too long deciding wastes valuable writing time.',
      },
      {
        id: 'edx-lp2-m10-q3',
        question: 'What should you do in the final 10 minutes of the exam?',
        options: [
          'Write an additional paragraph to increase your word count',
          'Start answering any questions you skipped',
          'Proofread your work and correct SPaG errors',
          'Re-read both extracts one more time',
        ],
        correct: 2,
        explanation:
          'The final 10 minutes should be spent proofreading. Adding rushed content full of errors costs more marks than it gains. A polished, slightly shorter response outperforms a longer, careless one.',
      },
      {
        id: 'edx-lp2-m10-q4',
        question:
          'Approximately what percentage of the total mark is typically needed for a grade 7 on Edexcel English Language?',
        options: ['50-55%', '60-65%', '70-75%', '80-85%'],
        correct: 2,
        explanation:
          'A grade 7 on Edexcel GCSE English Language typically requires around 70-75% of the total mark. On an 80-mark paper, that means aiming for approximately 56-60 marks.',
      },
    ],
  },
]
