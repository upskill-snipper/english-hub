import type { CourseData, CourseQuiz, CourseModule } from './courses';

// ═══════════════════════════════════════════════════════════════════════════════
// OCR GCSE English Language (J351) — Component 01 Modules
// Communicating Information and Ideas
// ═══════════════════════════════════════════════════════════════════════════════

const c1Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Component 01 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m1',
    title: 'Component 01 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>OCR GCSE English Language — Component 01: Communicating Information and Ideas</h2>

<p>Component 01 is one of two examined components in the OCR GCSE English Language specification (J351). It focuses on <strong>non-fiction reading</strong> and <strong>transactional writing</strong>. The paper is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of the total GCSE. You have <strong>2 hours</strong> to complete two sections.</p>

<div class="key-term"><strong>Key Term: Transactional Writing</strong> — Writing that serves a clear, real-world purpose and addresses a specific audience. Forms include letters, articles, speeches, reports, and reviews. The writing must persuade, inform, advise, argue, or explain — always with a clear sense of audience and purpose.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A — Reading (40 marks):</strong> You are given two unseen non-fiction texts (one from the 20th century, one from the 21st century or vice versa) and answer a series of questions testing comprehension, language analysis, comparison, and evaluation.</li>
  <li><strong>Section B — Writing (40 marks):</strong> Two transactional writing tasks. You must complete <strong>both</strong> — a shorter task (16 marks) and a longer task (24 marks).</li>
</ul>

<h3>Section A — Reading Question Breakdown</h3>
<p>OCR structures the reading section around both texts. The questions progress from straightforward retrieval to more demanding analysis and comparison:</p>
<ol>
  <li><strong>Q1 (a–d) — Retrieval and inference (various marks):</strong> Short questions testing your ability to identify explicit and implicit information from Text 1.</li>
  <li><strong>Q2 — Language analysis (6–8 marks):</strong> Analyse how the writer uses language to create meaning and effect, typically focused on one of the texts.</li>
  <li><strong>Q3 — Comparison (8–10 marks):</strong> Compare how the two writers present their ideas, perspectives, or experiences on a shared theme.</li>
  <li><strong>Q4 — Evaluation (12–14 marks):</strong> Evaluate how successfully a writer achieves their purpose, supporting your judgement with evidence from the text.</li>
</ol>

<h3>Section B — Writing Question Breakdown</h3>
<ol>
  <li><strong>Q5 — Short writing task (16 marks):</strong> A focused transactional task such as a letter or a brief article (approximately 200–300 words).</li>
  <li><strong>Q6 — Extended writing task (24 marks):</strong> A longer transactional piece — often a speech, article, or report requiring sustained argument or explanation (approximately 350–500 words).</li>
</ol>

<h3>Assessment Objectives for Component 01</h3>
<ul>
  <li><strong>AO1</strong> — Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.</li>
  <li><strong>AO2</strong> — Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.</li>
  <li><strong>AO3</strong> — Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.</li>
  <li><strong>AO4</strong> — Evaluate texts critically and support this with appropriate textual references.</li>
  <li><strong>AO5</strong> — Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas using structural and grammatical features to support coherence and cohesion of texts.</li>
  <li><strong>AO6</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR Component 01 gives you 2 hours — significantly more time than some other boards. Use this to your advantage. Spend roughly 1 hour on Section A and 1 hour on Section B. Within Section B, allocate about 20 minutes for Q5 and 35–40 minutes for Q6, leaving 5 minutes for proofreading.</div>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0–10 min:</strong> Read both source texts carefully, underlining key ideas, techniques, and contrasts.</li>
  <li><strong>10–25 min:</strong> Answer Q1 retrieval and inference questions.</li>
  <li><strong>25–40 min:</strong> Answer Q2 language analysis question.</li>
  <li><strong>40–55 min:</strong> Answer Q3 comparison question.</li>
  <li><strong>55–65 min:</strong> Answer Q4 evaluation question.</li>
  <li><strong>65–70 min:</strong> Plan Q5 response.</li>
  <li><strong>70–85 min:</strong> Write Q5 response.</li>
  <li><strong>85–90 min:</strong> Plan Q6 response.</li>
  <li><strong>90–115 min:</strong> Write Q6 response.</li>
  <li><strong>115–120 min:</strong> Proofread both writing tasks.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the two writing tasks equally. Q5 is worth 16 marks and Q6 is worth 24 marks. Students who spend 30 minutes on each task are over-investing in Q5 and under-investing in Q6. Always weight your time towards the higher-tariff question.</div>

<h3>How OCR Differs from Other Boards</h3>
<p>Understanding OCR-specific features helps you tailor your revision:</p>
<ul>
  <li><strong>Two writing tasks</strong> — unlike AQA or Edexcel which have one extended writing task, OCR requires two transactional pieces of different lengths.</li>
  <li><strong>Comparison question</strong> — AO3 is directly tested in Component 01 through cross-text comparison, which is not always present in other boards' language papers.</li>
  <li><strong>Text pairing</strong> — the two non-fiction texts are always linked thematically, making comparison more accessible if you identify the shared theme early.</li>
  <li><strong>20th and 21st century texts</strong> — unlike Edexcel (which uses 19th-century texts), OCR focuses on more modern non-fiction, though some texts may be from the early 1900s.</li>
</ul>

<div class="key-term"><strong>Key Term: Synthesis</strong> — The skill of drawing together information from two or more texts to form a combined understanding. In OCR Component 01, synthesis is tested when you are asked to compare or connect ideas across the two source texts.</div>
`,
    quiz: [
      {
        id: 'ocr-lc1-m1-q1',
        question: 'How long do students have to complete OCR Component 01?',
        options: [
          '1 hour 30 minutes',
          '1 hour 45 minutes',
          '1 hour 55 minutes',
          '2 hours',
        ],
        correct: 3,
        explanation:
          'OCR Component 01 is 2 hours long (120 minutes). This should be divided carefully between 40 marks of reading (Section A) and 40 marks of writing (Section B).',
      },
      {
        id: 'ocr-lc1-m1-q2',
        question: 'How many writing tasks must you complete in Section B?',
        options: ['One', 'Two', 'Three', 'A choice of one from two'],
        correct: 1,
        explanation:
          'Section B contains two compulsory writing tasks — a shorter task worth 16 marks and a longer task worth 24 marks. Both must be completed.',
      },
      {
        id: 'ocr-lc1-m1-q3',
        question:
          'Which Assessment Objective tests cross-text comparison in Component 01?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 2,
        explanation:
          'AO3 tests comparison — the ability to compare writers\' ideas and perspectives across two or more texts. This is a distinctive feature of OCR Component 01.',
      },
      {
        id: 'ocr-lc1-m1-q4',
        question:
          'What types of non-fiction texts appear in Section A of Component 01?',
        options: [
          '19th-century texts only',
          'One 20th-century and one 21st-century text (or similar pairing)',
          'Modern newspaper articles only',
          'Pre-1800 literary essays',
        ],
        correct: 1,
        explanation:
          'OCR Component 01 uses two non-fiction texts from the 20th and/or 21st centuries, linked by a common theme. This differs from boards like Edexcel that use 19th-century sources.',
      },
      {
        id: 'ocr-lc1-m1-q5',
        question: 'How many marks is the longer writing task (Q6) worth?',
        options: ['16 marks', '20 marks', '24 marks', '40 marks'],
        correct: 2,
        explanation:
          'The longer writing task is worth 24 marks. Combined with Q5 (16 marks), Section B totals 40 marks — half of the entire paper.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Reading Non-Fiction: Retrieval & Inference
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m2',
    title: 'Reading Non-Fiction: Retrieval & Inference',
    duration: '50 min',
    content: `
<h2>Retrieval and Inference — Finding Information in Non-Fiction Texts</h2>

<p>The opening questions of OCR Component 01 test your ability to locate <strong>explicit information</strong> and make <strong>inferences</strong> from a non-fiction text. These questions carry relatively few marks individually, but they set the foundation for the more analytical questions that follow and build your confidence early in the exam.</p>

<div class="key-term"><strong>Key Term: Explicit Information</strong> — Facts, details, or ideas that are directly stated in the text. The answer can be found word-for-word or very closely paraphrased from the source material.</div>

<div class="key-term"><strong>Key Term: Inference</strong> — Drawing conclusions about something that is implied but not directly stated. You combine textual clues with your own reasoning to arrive at an understanding that goes beyond the surface meaning.</div>

<h3>Practice Extract</h3>
<div class="text-extract">The café had been open for only three months, but already it had become the unofficial meeting point for half the neighbourhood. Every morning, a queue snaked out of the door and along the pavement. The owner, Maria, greeted every customer by name — a feat that seemed increasingly impossible as word spread. The menu was handwritten on a chalkboard that changed daily, and the coffee was roasted in a cramped back room that smelled permanently of burnt sugar and cardamom. Critics from the national press had begun to take notice, though Maria claimed she had no interest in reviews. "I just want people to feel at home," she said, wiping flour from her hands onto an already flour-covered apron.<div class="source">Adapted from a newspaper feature, 2019</div></div>

<h3>Retrieval Questions — How to Approach Them</h3>
<p>A typical OCR retrieval question might read: <em>"According to the text, how long has the café been open?"</em></p>

<ol>
  <li><strong>Identify the focus</strong> — the question asks about how long the café has been open.</li>
  <li><strong>Scan the text</strong> — find the relevant sentence: "The café had been open for only three months."</li>
  <li><strong>Give a clear, concise answer</strong> — "Three months." There is no need to elaborate or analyse.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For retrieval questions, brevity is your friend. A single sentence or even a phrase is sufficient. You will not gain extra marks for explanation, and spending time elaborating means less time for higher-tariff questions.</div>

<h3>Inference Questions — Reading Between the Lines</h3>
<p>A typical OCR inference question might read: <em>"What impressions do you get of Maria from this extract? Support your answer with evidence from the text."</em></p>

<p>Strong inference answers follow a <strong>Point–Evidence–Inference</strong> structure:</p>

<div class="model-answer"><strong>Model Answer:</strong>
<p><strong>Point:</strong> Maria appears to be a warm and personal business owner who values relationships over commercial success.</p>
<p><strong>Evidence:</strong> She "greeted every customer by name" and said "I just want people to feel at home."</p>
<p><strong>Inference:</strong> The fact that she remembers customers' names despite growing numbers suggests genuine care rather than a business strategy. Her dismissal of press reviews reinforces this — she measures success through personal connection, not critical acclaim. The image of her wiping flour onto an "already flour-covered apron" implies she is hands-on and unpretentious, someone who works alongside her staff rather than delegating from a distance.</p></div>

<h3>Common Inference Pitfalls</h3>
<ul>
  <li><strong>Over-inference</strong> — Going far beyond what the text supports. For instance, concluding that Maria "must have had a difficult childhood" has no textual basis.</li>
  <li><strong>Under-inference</strong> — Simply restating what the text says without drawing any conclusions. "Maria greeted customers by name" is retrieval, not inference.</li>
  <li><strong>Unsupported claims</strong> — Making a reasonable inference but failing to anchor it to specific evidence from the text.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing retrieval and inference. If the question asks you to "identify" or "find" information, you are retrieving — give a direct answer from the text. If the question asks what you "learn" or what "impressions" you get, you need to infer — go beyond the literal meaning and explain what the details suggest.</div>

<h3>Practising with Different Non-Fiction Forms</h3>
<p>OCR can use a range of non-fiction text types. Each has characteristic features that shape how you read and infer:</p>
<ul>
  <li><strong>Newspaper articles</strong> — Look for bias in word choice, headline framing, and the selection of quoted sources.</li>
  <li><strong>Autobiographies/memoirs</strong> — The writer has a personal stake; consider how they position themselves and what they choose to include or omit.</li>
  <li><strong>Travel writing</strong> — Often blends description with personal response; infer attitudes towards places and cultures.</li>
  <li><strong>Speeches</strong> — Consider the intended audience and how the speaker builds rapport, credibility, and emotional connection.</li>
  <li><strong>Letters</strong> — The relationship between writer and recipient shapes tone; infer formality, power dynamics, and purpose.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always consider the <strong>source information</strong> provided with the extract. OCR includes a brief attribution (author, date, publication). This context helps you understand the writer's purpose and audience — both of which inform your inferences. A letter to a newspaper editor, for example, will have a very different purpose from a personal diary entry.</div>

<h3>Key Vocabulary for Inference Responses</h3>
<p>Using precise vocabulary strengthens your answers:</p>
<ul>
  <li><em>This suggests that...</em></li>
  <li><em>This implies...</em></li>
  <li><em>The reader can infer that...</em></li>
  <li><em>This gives the impression that...</em></li>
  <li><em>From this, we can deduce that...</em></li>
  <li><em>The connotations of [word] suggest...</em></li>
</ul>
`,
    quiz: [
      {
        id: 'ocr-lc1-m2-q1',
        question:
          'What is the key difference between retrieval and inference?',
        options: [
          'Retrieval requires quotations but inference does not',
          'Retrieval finds directly stated information; inference draws conclusions from implied meaning',
          'Inference is always worth more marks than retrieval',
          'Retrieval uses subject terminology but inference does not',
        ],
        correct: 1,
        explanation:
          'Retrieval involves locating information that is explicitly stated in the text. Inference requires you to read between the lines and draw conclusions about what is implied or suggested.',
      },
      {
        id: 'ocr-lc1-m2-q2',
        question:
          'Based on the practice extract, which of the following is a valid inference about Maria?',
        options: [
          'She has won national cooking awards',
          'She values personal connections over commercial recognition',
          'She cannot afford to hire staff',
          'She dislikes journalists',
        ],
        correct: 1,
        explanation:
          'Maria\'s comment "I just want people to feel at home" and her claimed disinterest in reviews suggest she prioritises personal connection. There is no evidence for awards, staffing issues, or disliking journalists.',
      },
      {
        id: 'ocr-lc1-m2-q3',
        question: 'What structure should a strong inference answer follow?',
        options: [
          'Quote–Explain–Quote',
          'Point–Evidence–Inference',
          'Introduction–Body–Conclusion',
          'Describe–Analyse–Evaluate',
        ],
        correct: 1,
        explanation:
          'Point–Evidence–Inference (PEI) is the recommended structure. State your point, support it with a quotation, then explain what the evidence implies beyond its literal meaning.',
      },
      {
        id: 'ocr-lc1-m2-q4',
        question:
          'Why should you always check the source information provided with an extract?',
        options: [
          'It tells you exactly what the examiner wants you to write',
          'It helps you understand the writer\'s purpose and audience, which informs your inferences',
          'It contains the correct answers',
          'It is only relevant for the comparison question',
        ],
        correct: 1,
        explanation:
          'Source information (author, date, publication) provides context that helps you understand why the text was written and for whom. This context strengthens your inferences about the writer\'s choices and intentions.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Language Analysis in Non-Fiction
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m3',
    title: 'Language Analysis in Non-Fiction Texts',
    duration: '55 min',
    content: `
<h2>Analysing Language in Non-Fiction — How Writers Create Meaning and Effect</h2>

<p>The language analysis question in OCR Component 01 typically asks you to examine how a writer uses language to achieve a specific effect. This question is worth <strong>6–8 marks</strong> and tests <strong>AO2</strong>: the ability to explain, comment on, and analyse how writers use language to achieve effects, using relevant subject terminology to support your views.</p>

<div class="key-term"><strong>Key Term: Language Analysis</strong> — The close examination of a writer's word choices (diction), figurative language, sentence structures, and rhetorical techniques, with a focus on explaining the <em>effect</em> these choices have on the reader.</div>

<h3>The Golden Rule: Effect Over Identification</h3>
<p>The most common weakness in language analysis is <strong>feature-spotting</strong> — identifying a technique without explaining its effect. Saying "The writer uses a metaphor" earns minimal credit. You must explain <em>what the metaphor does</em> — how it shapes the reader's understanding, emotions, or response.</p>

<h3>Practice Extract</h3>
<div class="text-extract">The river had become a graveyard of shopping trolleys and plastic bags, its surface glazed with an oily film that caught the light in sickly rainbows. Where kingfishers once darted between the willows, only rats now moved — fat, unhurried, confident in their dominion. The council's "river restoration project" sign stood at the bank, its promises peeling away in the rain like the paint that spelled them. A child's bicycle, half-submerged and rusted orange, leaned against the sign as if in weary commentary.<div class="source">Adapted from an environmental magazine article, 2021</div></div>

<h3>Step-by-Step Analysis Method</h3>
<p>Use the <strong>What–How–Why</strong> framework for every language point:</p>
<ol>
  <li><strong>What</strong> — Identify the technique or language choice (with a quotation).</li>
  <li><strong>How</strong> — Explain how the technique works at a word or phrase level.</li>
  <li><strong>Why</strong> — Analyse the effect on the reader — what does it make them think, feel, or understand?</li>
</ol>

<div class="model-answer"><strong>Model Answer (analysing the extract above):</strong>
<p>The writer uses the metaphor <em>"graveyard of shopping trolleys and plastic bags"</em> to describe the river. The word <strong>"graveyard"</strong> carries connotations of death and decay, transforming the river from a living ecosystem into a repository of human waste. This creates a tone of mourning — the river is not merely polluted but <em>dead</em>, and the trolleys and bags become grotesque tombstones marking the death of the natural world. The metaphor forces the reader to confront the irreversibility of the damage: a graveyard is a place from which nothing returns.</p>

<p>The writer further develops this tone through the image of the council sign with <em>"promises peeling away in the rain like the paint that spelled them."</em> The simile is powerfully ironic — the physical deterioration of the sign mirrors the failure of the promises it carries. The word <strong>"peeling"</strong> suggests something superficial being stripped back to reveal nothing underneath, implying the council's commitment was never more than surface-level. The effect is to undermine institutional authority and invite the reader's cynicism.</p></div>

<h3>Key Language Techniques for Non-Fiction</h3>
<p>Non-fiction writers use many of the same techniques as fiction writers, plus some specific to persuasion and argument:</p>
<ul>
  <li><strong>Metaphor and simile</strong> — Create vivid comparisons that shape the reader's understanding.</li>
  <li><strong>Emotive language</strong> — Words chosen to provoke an emotional response (e.g. "devastating," "heartbreaking").</li>
  <li><strong>Hyperbole</strong> — Exaggeration for emphasis or dramatic effect.</li>
  <li><strong>Rhetorical questions</strong> — Engage the reader and imply the answer is obvious.</li>
  <li><strong>Lists (tricolon)</strong> — Groups of three create rhythm and emphasis.</li>
  <li><strong>Contrast/juxtaposition</strong> — Placing opposing ideas side by side to highlight differences.</li>
  <li><strong>Direct address ("you")</strong> — Creates intimacy and involves the reader directly.</li>
  <li><strong>Statistics and factual evidence</strong> — Build credibility and authority.</li>
  <li><strong>Anecdote</strong> — Personal stories create relatability and emotional connection.</li>
  <li><strong>Tone shifts</strong> — Moving between tones (e.g. from humour to seriousness) to control the reader's emotional journey.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR examiners reward answers that analyse at <strong>word level</strong>. Don't just identify a metaphor — zoom into the individual words within it and explore their connotations. The best answers discuss how specific word choices create layers of meaning. A single well-analysed quotation is worth more than three quotations with surface-level comments.</div>

<h3>Sentence-Level Analysis</h3>
<p>Don't overlook how sentence structure creates effects:</p>
<ul>
  <li><strong>Short sentences</strong> — Create emphasis, tension, or finality. "The river was dead." stops the reader in their tracks.</li>
  <li><strong>Long, complex sentences</strong> — Can mirror accumulation, overwhelm, or the building of an argument.</li>
  <li><strong>Listing within sentences</strong> — Suggests abundance or, in negative contexts, relentless scale.</li>
  <li><strong>Fronted adverbials</strong> — Shift focus or set a scene: "Beneath the oily surface, nothing moved."</li>
  <li><strong>Parenthetical asides</strong> — Create intimacy, as if the writer is speaking directly to the reader.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Using vague phrases like "this makes the reader want to read on" or "this creates a vivid image." These are generic comments that could apply to almost any text. Instead, be <em>specific</em> about what the reader thinks or feels: "The juxtaposition of kingfishers and rats forces the reader to confront how dramatically the ecosystem has declined, provoking both nostalgia and disgust."</div>

<div class="key-term"><strong>Key Term: Connotation</strong> — The associations and emotional overtones that a word carries beyond its literal dictionary meaning (denotation). For example, "home" literally means a place of residence, but its connotations include warmth, safety, belonging, and family. Exploring connotations is central to effective language analysis.</div>
`,
    quiz: [
      {
        id: 'ocr-lc1-m3-q1',
        question:
          'What is the main weakness of "feature-spotting" in language analysis?',
        options: [
          'It uses too many quotations',
          'It identifies techniques without explaining their effect on the reader',
          'It focuses too much on the writer\'s biography',
          'It ignores sentence structure entirely',
        ],
        correct: 1,
        explanation:
          'Feature-spotting means identifying a technique (e.g. "The writer uses a simile") without analysing what effect it has on the reader. OCR examiners reward analysis of effect, not just identification.',
      },
      {
        id: 'ocr-lc1-m3-q2',
        question:
          'What does the What–How–Why framework help you do in a language analysis answer?',
        options: [
          'Plan the structure of a creative writing piece',
          'Identify the technique, explain how it works, and analyse its effect on the reader',
          'Compare two texts for the comparison question',
          'Evaluate whether you agree with a statement',
        ],
        correct: 1,
        explanation:
          'What–How–Why ensures you identify the technique (What), explain how it works at word level (How), and analyse the effect on the reader (Why). This structure produces detailed, analytical responses.',
      },
      {
        id: 'ocr-lc1-m3-q3',
        question: 'What is a "connotation"?',
        options: [
          'The literal dictionary definition of a word',
          'A type of metaphor used in non-fiction',
          'The associations and emotional overtones a word carries beyond its literal meaning',
          'A grammatical structure used for emphasis',
        ],
        correct: 2,
        explanation:
          'Connotation refers to the associations, emotions, and ideas that a word suggests beyond its dictionary definition. Analysing connotations is essential for effective language analysis at GCSE.',
      },
      {
        id: 'ocr-lc1-m3-q4',
        question:
          'Which Assessment Objective does the language analysis question primarily test?',
        options: ['AO1', 'AO2', 'AO3', 'AO5'],
        correct: 1,
        explanation:
          'AO2 tests your ability to explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Comparing Writers' Viewpoints and Perspectives
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m4',
    title: 'Comparing Writers\' Viewpoints and Perspectives',
    duration: '55 min',
    content: `
<h2>The Comparison Question — Comparing Writers' Viewpoints Across Two Texts</h2>

<p>The comparison question is a distinctive feature of OCR Component 01 and tests <strong>AO3</strong>: the ability to compare writers' ideas and perspectives, and how these are conveyed, across two or more texts. This question is typically worth <strong>8–10 marks</strong> and requires you to move fluently between both source texts.</p>

<div class="key-term"><strong>Key Term: Perspective</strong> — A writer's attitude, viewpoint, or position on a topic. This is shaped by their personal experience, values, purpose, and the context in which they are writing. Two writers may address the same theme but hold very different perspectives.</div>

<h3>What the Examiner Is Looking For</h3>
<p>The comparison question asks you to do three things simultaneously:</p>
<ol>
  <li><strong>Identify each writer's viewpoint</strong> — What does each writer think or feel about the topic?</li>
  <li><strong>Compare those viewpoints</strong> — Are they similar, different, or do they share some common ground while diverging on others?</li>
  <li><strong>Analyse how the viewpoints are conveyed</strong> — What methods (language, tone, structure, rhetorical devices) does each writer use to communicate their perspective?</li>
</ol>

<h3>Practice Extracts</h3>
<div class="text-extract"><strong>Text A:</strong> Technology has made us more connected than any generation in human history. I can video-call my daughter in Sydney while my son in Edinburgh sends photographs of his morning walk. The distances that once separated families for years — sometimes forever — have been collapsed into the tap of a screen. Those who complain about smartphones have forgotten what it meant to wait six weeks for a letter that might never arrive.<div class="source">Adapted from a personal column in a broadsheet newspaper, 2022</div></div>

<div class="text-extract"><strong>Text B:</strong> We sit in the same room but inhabit different worlds. My teenagers are hunched over screens, thumbs twitching, eyes glazed. I ask a question and receive, at best, a grunt filtered through earphones. The devices that were supposed to bring us closer have built invisible walls within our own home. I sometimes wonder whether my children would notice if I were replaced by a voice-activated speaker.<div class="source">Adapted from a parenting blog, 2023</div></div>

<h3>The Integrated Comparison Method</h3>
<p>The strongest comparison answers are <strong>integrated</strong> — they discuss both texts within the same paragraph rather than writing about Text A first and then Text B. Use these connective phrases to move between texts:</p>
<ul>
  <li><em>Similarly / In contrast / Conversely / On the other hand</em></li>
  <li><em>While Writer A argues that... Writer B suggests that...</em></li>
  <li><em>Both writers agree that... however, they differ in...</em></li>
  <li><em>Where Writer A presents technology as... Writer B portrays it as...</em></li>
</ul>

<div class="model-answer"><strong>Model Answer (comparing the practice extracts):</strong>
<p>Both writers address the impact of technology on family relationships, but they arrive at starkly opposing conclusions. <strong>Writer A</strong> celebrates technology as a bridge across physical distance, using the concrete image of video-calling a daughter "in Sydney" while a son "in Edinburgh sends photographs." The specificity of these locations emphasises the vast distances technology can overcome, and the warm, personal tone — referring to "my daughter" and "my son" — frames the argument through genuine family experience, lending it emotional credibility.</p>

<p><strong>Writer B</strong>, conversely, presents technology as a barrier within the same physical space. Where Writer A's family is separated by continents but connected by screens, Writer B's family is "in the same room" but emotionally distant. The metaphor of <em>"invisible walls"</em> directly inverts Writer A's image of technology as a connector — for Writer B, the devices that "were supposed to bring us closer" have achieved the opposite. The darkly humorous speculation about being "replaced by a voice-activated speaker" conveys frustration and hurt, but the exaggeration also serves to engage the reader by inviting rueful recognition.</p>

<p>The two texts are further distinguished by their rhetorical strategies. Writer A uses historical contrast — "six weeks for a letter that might never arrive" — to remind the reader how much worse communication once was, positioning critics of technology as ungrateful. Writer B, by contrast, uses present-tense immediacy — "We sit," "I ask" — to place the reader in the moment, making the isolation feel current and real. This difference in tense and temporal focus reflects their opposing arguments: Writer A looks back to justify the present; Writer B inhabits the present to expose its failures.</p></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR examiners specifically reward responses that compare <em>methods</em> as well as <em>ideas</em>. It is not enough to say "Writer A likes technology and Writer B doesn't." You must analyse <em>how</em> each writer conveys their viewpoint — through language, imagery, tone, rhetorical devices, and structural choices. The best answers weave together "what they think" and "how they show it."</div>

<h3>Structuring Your Comparison</h3>
<p>A strong comparison answer typically contains 2–3 developed comparative paragraphs. Each paragraph should:</p>
<ol>
  <li>Open with a comparative statement linking both writers.</li>
  <li>Analyse a specific technique or approach from Writer A with a quotation.</li>
  <li>Compare with a specific technique or approach from Writer B with a quotation.</li>
  <li>Comment on the differing (or similar) effects these methods create.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about each text in isolation. If your answer reads like two separate mini-essays joined by "Now I will look at Text B," you are not comparing — you are describing. True comparison means both texts appear <em>within</em> the same paragraph, connected by comparative connectives and analytical links.</div>

<h3>Types of Comparison</h3>
<p>Not all comparisons involve simple agreement or disagreement. Consider these nuances:</p>
<ul>
  <li><strong>Complete contrast</strong> — Writers hold opposing views (as in the practice texts above).</li>
  <li><strong>Shared view, different methods</strong> — Both writers agree on the topic but use different techniques to make their case.</li>
  <li><strong>Partial agreement</strong> — Writers agree on some aspects but diverge on others — often the most interesting comparison to explore.</li>
  <li><strong>Different focus</strong> — Writers address the same broad theme but emphasise different aspects of it.</li>
</ul>

<div class="key-term"><strong>Key Term: Tone</strong> — The writer's attitude or feeling as expressed through their language choices. Tone can be formal, informal, ironic, sincere, angry, celebratory, melancholic, and so on. Identifying and comparing tone is a powerful way to distinguish between two writers' perspectives.</div>
`,
    quiz: [
      {
        id: 'ocr-lc1-m4-q1',
        question:
          'What does an "integrated" comparison mean?',
        options: [
          'Writing about Text A in one essay and Text B in another',
          'Discussing both texts within the same paragraphs, connected by comparative language',
          'Only quoting from one text at a time',
          'Summarising both texts before analysing them',
        ],
        correct: 1,
        explanation:
          'An integrated comparison discusses both texts within the same paragraph, using comparative connectives to link analysis of each writer\'s methods and ideas. This is far more effective than treating the texts separately.',
      },
      {
        id: 'ocr-lc1-m4-q2',
        question: 'Which Assessment Objective does the comparison question test?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 2,
        explanation:
          'AO3 tests the ability to compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.',
      },
      {
        id: 'ocr-lc1-m4-q3',
        question:
          'What must you compare in addition to the writers\' ideas?',
        options: [
          'Their biographical backgrounds',
          'The methods they use to convey their perspectives',
          'The word count of each text',
          'The publication dates only',
        ],
        correct: 1,
        explanation:
          'OCR requires you to compare both what the writers think (ideas/perspectives) AND how they convey those views (methods — language, tone, rhetorical devices, structure). Comparing methods as well as ideas is essential for top marks.',
      },
      {
        id: 'ocr-lc1-m4-q4',
        question:
          'Which of the following is the strongest opening to a comparison paragraph?',
        options: [
          '"I will now write about Text A."',
          '"While Writer A celebrates technology as a means of connection, Writer B presents it as a source of isolation within the family."',
          '"Text A is about technology. Text B is also about technology."',
          '"The first text has lots of language techniques."',
        ],
        correct: 1,
        explanation:
          'A strong opening establishes a comparative point about both writers immediately, making the paragraph\'s direction clear and demonstrating integrated comparison from the first sentence.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Evaluating a Writer's Effectiveness
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m5',
    title: 'Evaluating a Writer\'s Effectiveness',
    duration: '55 min',
    content: `
<h2>Critical Evaluation — Judging How Successfully a Writer Achieves Their Purpose</h2>

<p>The evaluation question in OCR Component 01 is typically the highest-tariff reading question, worth <strong>12–14 marks</strong>. It tests <strong>AO4</strong>: the ability to evaluate texts critically and support your evaluation with appropriate textual references. Unlike analysis (which asks "how does the writer do this?"), evaluation asks "how <em>well</em> does the writer do this?"</p>

<div class="key-term"><strong>Key Term: Evaluation</strong> — Making a critical judgement about the effectiveness of a writer's choices. You are not simply explaining what the writer does — you are assessing how successfully their techniques achieve the intended purpose or effect.</div>

<h3>Practice Extract</h3>
<div class="text-extract">Imagine a world in which no child goes hungry. It sounds impossible — the kind of vague promise politicians make on campaign trails and quietly forget once the votes are counted. But the charity FeedForward has proved that systemic change is not only possible; it is happening. In the last three years, FeedForward has redistributed 42 million meals from supermarket surplus that would otherwise have rotted in landfill. Forty-two million. That is not a slogan. That is not a manifesto pledge. That is food on plates, in homes, in the stomachs of children who would otherwise have gone to bed hungry. And yet, astonishingly, the government has cut FeedForward's funding by 30%.<div class="source">Adapted from a charity campaign article, 2022</div></div>

<p>A typical evaluation question might read: <em>"The writer makes the reader feel strongly that the government's decision to cut funding is wrong. To what extent do you agree with this view?"</em></p>

<h3>The Evaluation Framework</h3>
<p>Strong evaluation answers follow this pattern:</p>
<ol>
  <li><strong>State your overall judgement</strong> — Do you agree, partially agree, or disagree with the statement? Take a clear position.</li>
  <li><strong>Support with evidence and analysis</strong> — For each point, quote from the text and explain <em>how effectively</em> the technique works.</li>
  <li><strong>Consider counter-arguments</strong> — Acknowledge where the writer might be less effective, or where a different reader might respond differently.</li>
  <li><strong>Conclude with a nuanced judgement</strong> — Reaffirm your position with any qualifications.</li>
</ol>

<div class="model-answer"><strong>Model Answer:</strong>
<p>I largely agree that the writer makes the reader feel the government's funding cut is wrong, and the article is highly effective in building this response through a combination of emotional appeal and factual authority.</p>

<p>The opening line — <em>"Imagine a world in which no child goes hungry"</em> — immediately engages the reader's empathy through direct address and an idealistic vision. The imperative "Imagine" invites the reader to become emotionally invested before any argument has been made. This is effective because it establishes an emotional baseline against which the government's decision will later seem callous.</p>

<p>The writer is particularly effective in their use of the statistic <em>"42 million meals."</em> The repetition — <em>"Forty-two million"</em> — followed by the tricolon <em>"That is not a slogan. That is not a manifesto pledge. That is food on plates"</em> transforms a number into something tangible and human. The anaphoric repetition of "That is not" dismisses political rhetoric before "That is food on plates" asserts reality, creating a powerful contrast between empty words and concrete action. This forces the reader to recognise FeedForward's impact as undeniable fact.</p>

<p>However, a critical reader might note that the article presents only one perspective. The reasons for the funding cut are not explored, and the emotional framing — particularly "children who would otherwise have gone to bed hungry" — could be seen as manipulative rather than informative. The writer's effectiveness depends partly on the reader's willingness to accept an emotionally charged argument without hearing the government's rationale.</p>

<p>Overall, the writer is highly effective in building outrage, though the one-sided presentation slightly undermines the article's credibility for more sceptical readers.</p></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest evaluation answers offer a <strong>balanced judgement</strong>. Examiners are not looking for you to simply agree with the statement — they reward nuanced responses that consider both how the writer succeeds and where they might be less effective. "I largely agree, but..." or "While the writer is effective in some respects..." signals critical thinking.</div>

<h3>Evaluative Language — Upgrading Your Vocabulary</h3>
<p>Avoid vague evaluative words like "good" or "nice." Use precise alternatives:</p>
<ul>
  <li><em>The writer effectively / powerfully / convincingly / subtly...</em></li>
  <li><em>This technique is particularly compelling because...</em></li>
  <li><em>The argument is somewhat undermined by...</em></li>
  <li><em>This is a highly persuasive strategy as it...</em></li>
  <li><em>The emotional appeal is undeniably powerful, though it risks...</em></li>
  <li><em>A discerning reader might question whether...</em></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a language analysis answer instead of an evaluation. If your response reads "The writer uses a metaphor which creates an image of..." you are analysing, not evaluating. Evaluation requires a <em>judgement</em>: "The writer's metaphor is particularly effective because it forces the reader to..." The word "effective" (or a synonym) should appear frequently in your answer.</div>

<h3>The Difference Between Analysis and Evaluation</h3>
<table>
  <tr><th>Analysis (AO2)</th><th>Evaluation (AO4)</th></tr>
  <tr><td>How does the writer use language?</td><td>How <em>effectively</em> does the writer use language?</td></tr>
  <tr><td>What techniques are used?</td><td>How <em>successful</em> are those techniques?</td></tr>
  <tr><td>Explains what the writer does</td><td>Judges how well the writer does it</td></tr>
  <tr><td>"The metaphor creates..."</td><td>"The metaphor is effective because..."</td></tr>
</table>

<div class="key-term"><strong>Key Term: Counter-argument</strong> — A point that opposes or qualifies your main argument. In evaluation, acknowledging a counter-argument demonstrates critical maturity. You might say: "While the statistic is persuasive, a sceptical reader might question its source."</div>
`,
    quiz: [
      {
        id: 'ocr-lc1-m5-q1',
        question:
          'What is the key difference between analysis and evaluation?',
        options: [
          'Analysis uses quotations but evaluation does not',
          'Analysis explains what the writer does; evaluation judges how effectively they do it',
          'Evaluation is always shorter than analysis',
          'Analysis focuses on structure and evaluation focuses on language',
        ],
        correct: 1,
        explanation:
          'Analysis (AO2) explains how the writer uses language and structure. Evaluation (AO4) goes further by making a critical judgement about how effectively those choices achieve the writer\'s purpose.',
      },
      {
        id: 'ocr-lc1-m5-q2',
        question:
          'Why do examiners reward balanced evaluation answers?',
        options: [
          'Because the examiner always disagrees with the statement',
          'Because balanced answers demonstrate critical thinking and the ability to consider multiple perspectives',
          'Because the mark scheme only awards marks for disagreement',
          'Because texts are always equally effective and ineffective',
        ],
        correct: 1,
        explanation:
          'Balanced answers show critical maturity. Considering where the writer succeeds and where they might be less effective demonstrates sophisticated engagement with the text, which is rewarded in the highest mark bands.',
      },
      {
        id: 'ocr-lc1-m5-q3',
        question: 'Which Assessment Objective does the evaluation question test?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 3,
        explanation:
          'AO4 tests critical evaluation — the ability to evaluate texts critically and support your evaluation with appropriate textual references.',
      },
      {
        id: 'ocr-lc1-m5-q4',
        question:
          'What is wrong with writing "The writer uses a metaphor which creates a vivid image" in an evaluation answer?',
        options: [
          'Metaphors should not be discussed in evaluation',
          'It is analysis, not evaluation — it lacks a judgement about effectiveness',
          'It is too long for an evaluation point',
          'You should never mention images in an evaluation',
        ],
        correct: 1,
        explanation:
          'This sentence analyses a technique but does not evaluate it. An evaluation would say: "The writer\'s metaphor is particularly effective because it forces the reader to..." The crucial difference is the judgement of effectiveness.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Viewpoint and Perspective Analysis
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m6',
    title: 'Analysing Viewpoint, Bias, and Perspective',
    duration: '50 min',
    content: `
<h2>Viewpoint, Bias, and Perspective — Understanding How Writers Position the Reader</h2>

<p>Every non-fiction text is shaped by the writer's perspective. Understanding viewpoint is not just about identifying <em>what</em> a writer thinks — it is about recognising <em>how</em> they attempt to position the reader to share that view. This module develops skills that cut across multiple reading questions in OCR Component 01.</p>

<div class="key-term"><strong>Key Term: Bias</strong> — A one-sided or partial perspective that favours a particular viewpoint while downplaying or ignoring opposing evidence. Bias is not always negative — all non-fiction writing reflects some degree of perspective — but recognising it is essential for critical reading.</div>

<h3>How Writers Position the Reader</h3>
<p>Writers use a range of strategies to align the reader with their perspective:</p>

<h4>1. Inclusive Language</h4>
<p>Using pronouns like <strong>"we"</strong> and <strong>"our"</strong> creates a sense of shared identity and assumes the reader already agrees. For example: <em>"We all know that the education system is failing our children"</em> — the writer assumes consensus before proving anything.</p>

<h4>2. Selective Evidence</h4>
<p>Writers choose evidence that supports their argument and omit what contradicts it. A campaign against a new road might cite traffic studies but ignore economic benefits. Recognising what is <em>absent</em> from a text is as important as analysing what is present.</p>

<h4>3. Emotive Framing</h4>
<p>The same event can be framed in starkly different ways through word choice. Compare:</p>
<ul>
  <li><em>"The protesters staged a peaceful demonstration"</em> — positive framing; "peaceful" and "demonstration" suggest legitimacy.</li>
  <li><em>"The mob disrupted the city centre"</em> — negative framing; "mob" and "disrupted" suggest chaos and threat.</li>
</ul>

<h4>4. Expert Authority</h4>
<p>Citing experts, statistics, or institutional sources lends credibility. However, the source's reliability matters: "According to leading scientists..." carries more weight than "According to an anonymous online poll..."</p>

<h4>5. Anecdotal Evidence</h4>
<p>Personal stories are emotionally compelling but may not be representative. A writer describing one family's experience of poverty creates empathy, but it doesn't prove a systemic problem. Strong critical readers recognise when anecdote is used <em>instead of</em> data.</p>

<h3>Practice Extract</h3>
<div class="text-extract">Our local library is more than a building — it is a lifeline. For Doris, 82, it is the only place she speaks to another human being all week. For Jayden, 14, it is the only quiet space where he can do his homework away from a chaotic home. For the reading group that meets every Thursday, it is proof that community still means something in a world that increasingly tells us to stay behind our screens. And yet the council, in its infinite wisdom, has decided that this building — our building — is surplus to requirements. One wonders what "requirements" they have in mind. Certainly not the requirements of Doris, or Jayden, or any of the 3,200 people who signed the petition to keep it open.<div class="source">Adapted from a local newspaper opinion column, 2023</div></div>

<h3>Analysing the Extract for Viewpoint and Bias</h3>

<div class="model-answer"><strong>Model Answer:</strong>
<p>The writer's perspective is unambiguously opposed to the library closure, and every rhetorical choice is designed to position the reader in agreement.</p>

<p>The use of <strong>named individuals</strong> — Doris and Jayden — transforms a political issue into a personal one. By specifying Doris's age (82) and Jayden's (14), the writer selects the most sympathetic demographics: the elderly and the young, both of whom society has a moral obligation to protect. This is <strong>selective evidence</strong> — the writer does not include the perspective of someone who rarely uses the library or who might benefit from the site being repurposed.</p>

<p>The sarcastic phrase <em>"in its infinite wisdom"</em> is a key indicator of bias. The writer does not engage with the council's rationale but dismisses it through irony, positioning the council as arrogant and out of touch. Similarly, the rhetorical question <em>"One wonders what 'requirements' they have in mind"</em> implies the council's definition of "requirements" excludes real people — but the writer does not actually explore what the council's reasoning might be.</p>

<p>The possessive pronoun <em>"our building"</em> is a powerful positioning device. It reframes the library from council property to community property, making the closure feel like theft rather than administrative decision-making. This inclusive language assumes the reader identifies with the community rather than the council.</p></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing viewpoint, consider what the writer has <strong>chosen not to include</strong>. The absence of counter-arguments, alternative perspectives, or qualifying language often reveals bias more clearly than what is present. Noting these omissions shows the examiner that you are reading critically, not just passively.</div>

<h3>Recognising Different Non-Fiction Purposes</h3>
<p>A writer's purpose shapes their perspective and the techniques they use:</p>
<ul>
  <li><strong>To persuade</strong> — Expects you to agree; uses emotive language, rhetorical questions, and one-sided evidence.</li>
  <li><strong>To inform</strong> — Aims for objectivity; uses facts, statistics, and neutral tone (though no text is truly neutral).</li>
  <li><strong>To advise</strong> — Positions the writer as knowledgeable; uses imperative verbs, second person, and reassuring tone.</li>
  <li><strong>To argue</strong> — Acknowledges opposing views but dismantles them; uses logical reasoning and evidence.</li>
  <li><strong>To entertain</strong> — Prioritises engagement; uses humour, vivid description, and personal voice.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming a text has only one purpose. Most non-fiction texts have a <strong>primary purpose</strong> and one or more <strong>secondary purposes</strong>. The library extract primarily aims to persuade the reader to oppose the closure, but it also informs them about the library's community role and entertains through witty sarcasm. Acknowledging multiple purposes shows sophisticated understanding.</div>

<div class="key-term"><strong>Key Term: Rhetorical Question</strong> — A question asked for effect rather than to elicit an answer. The writer assumes the reader's response will align with the writer's intended point. For example, "How can we call ourselves a caring society if we close our libraries?" implies the answer is "We cannot."</div>
`,
    quiz: [
      {
        id: 'ocr-lc1-m6-q1',
        question:
          'What does "inclusive language" do in a non-fiction text?',
        options: [
          'Excludes the reader from the argument',
          'Creates a sense of shared identity and assumes the reader agrees',
          'Makes the text more formal',
          'Introduces counter-arguments',
        ],
        correct: 1,
        explanation:
          'Inclusive language (e.g. "we," "our," "us") creates a sense of shared identity between the writer and reader. It assumes agreement and positions the reader as part of the writer\'s community or cause.',
      },
      {
        id: 'ocr-lc1-m6-q2',
        question:
          'Why is it important to consider what a writer has NOT included in their text?',
        options: [
          'Because the examiner will ask about missing paragraphs',
          'Because omissions often reveal bias — what is absent shows the writer\'s selectivity',
          'Because incomplete texts are always unreliable',
          'Because you need to write your own counter-arguments',
        ],
        correct: 1,
        explanation:
          'Recognising what is absent from a text reveals bias and selectivity. A writer who presents only one side of an argument has made deliberate choices about what to include and exclude, and noting this demonstrates critical reading.',
      },
      {
        id: 'ocr-lc1-m6-q3',
        question:
          'In the practice extract, what effect does naming "Doris, 82" and "Jayden, 14" have?',
        options: [
          'It makes the text more formal and official',
          'It transforms a political issue into a personal one by selecting sympathetic individuals',
          'It proves that the library is used by many people',
          'It provides statistical evidence for the writer\'s argument',
        ],
        correct: 1,
        explanation:
          'Naming specific individuals with their ages personalises the argument and selects the most sympathetic demographics (elderly and young). This is a form of selective evidence designed to build emotional connection.',
      },
      {
        id: 'ocr-lc1-m6-q4',
        question:
          'What is wrong with saying a text has only one purpose?',
        options: [
          'All texts have exactly three purposes',
          'Most non-fiction texts have a primary purpose and one or more secondary purposes',
          'Purpose is irrelevant to OCR Component 01',
          'Only fiction texts can have multiple purposes',
        ],
        correct: 1,
        explanation:
          'Most non-fiction texts serve multiple purposes simultaneously. Recognising a primary purpose (e.g. to persuade) alongside secondary purposes (e.g. to inform and entertain) demonstrates sophisticated understanding.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 — Transactional Writing: Letters and Articles
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m7',
    title: 'Transactional Writing: Letters and Articles',
    duration: '55 min',
    content: `
<h2>Writing Letters and Articles — Form, Purpose, and Audience</h2>

<p>Section B of OCR Component 01 requires you to produce two pieces of transactional writing. This module focuses on two of the most commonly tested forms: <strong>formal letters</strong> and <strong>newspaper/magazine articles</strong>. The writing questions collectively test <strong>AO5</strong> (content and organisation) and <strong>AO6</strong> (technical accuracy).</p>

<div class="key-term"><strong>Key Term: Form</strong> — The type or format of writing you are asked to produce. Each form has its own conventions (layout, tone, structure). In OCR Component 01, common forms include letters, articles, speeches, reports, and reviews.</div>

<h3>Part 1: Writing a Formal Letter</h3>

<p>Formal letters are a staple of OCR transactional writing tasks. You might be asked to write to a headteacher, a council, a newspaper editor, or a business. The key is adapting your tone and register to suit the audience.</p>

<h4>Formal Letter Conventions</h4>
<ul>
  <li><strong>Your address</strong> — Top right of the page (you may use a fictional address or simply write "Your address").</li>
  <li><strong>Date</strong> — Below your address.</li>
  <li><strong>Recipient's name/title</strong> — Left-aligned (e.g. "Dear Mr Hartley," or "Dear Sir/Madam,").</li>
  <li><strong>Opening paragraph</strong> — State your purpose clearly. Why are you writing?</li>
  <li><strong>Body paragraphs</strong> — Develop your argument or points with evidence and reasoning.</li>
  <li><strong>Closing paragraph</strong> — Summarise your position and state what action you expect.</li>
  <li><strong>Sign-off</strong> — "Yours sincerely," (if you used a name) or "Yours faithfully," (if you used "Sir/Madam").</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You will <em>not</em> lose marks for omitting address formatting in an exam — the examiner is primarily assessing content, organisation, and accuracy. However, including the correct sign-off (sincerely vs. faithfully) demonstrates awareness of form conventions and contributes to the impression of a well-crafted response.</div>

<div class="model-answer"><strong>Model Opening — Formal Letter to a Council:</strong>
<p><em>Dear Councillor Matthews,</em></p>
<p><em>I am writing to express my deep concern regarding the proposed closure of Greenfield Community Library, which I understand is scheduled for March 2024. As a resident of the area for over fifteen years and a regular library user, I believe this decision will have a profoundly negative impact on the local community — an impact that I do not believe the council has fully considered.</em></p>
<p>This opening is effective because it: (1) addresses the recipient by name, (2) states the purpose immediately, (3) establishes the writer's credibility ("resident for over fifteen years"), and (4) previews the argument without becoming confrontational.</p></div>

<h3>Part 2: Writing a Newspaper or Magazine Article</h3>

<p>Articles require a different approach from letters. They address a broader, unknown audience and use engaging techniques to hold the reader's attention throughout.</p>

<h4>Article Conventions</h4>
<ul>
  <li><strong>Headline</strong> — A concise, attention-grabbing title. May use wordplay, alliteration, or a provocative statement.</li>
  <li><strong>Strapline (optional)</strong> — A brief subtitle that expands on the headline.</li>
  <li><strong>Opening paragraph</strong> — Hook the reader immediately. Use a striking fact, question, anecdote, or bold statement.</li>
  <li><strong>Body paragraphs</strong> — Develop your argument or explanation with clear topic sentences, evidence, and varied rhetorical techniques.</li>
  <li><strong>Closing paragraph</strong> — End memorably — with a call to action, a thought-provoking question, or a return to your opening image.</li>
</ul>

<h4>Engaging Openings for Articles</h4>
<ul>
  <li><strong>Shocking statistic:</strong> <em>"Every year, 1.3 billion tonnes of food is wasted globally — enough to feed the world's hungry four times over."</em></li>
  <li><strong>Rhetorical question:</strong> <em>"When did we decide that convenience mattered more than our children's future?"</em></li>
  <li><strong>Anecdote:</strong> <em>"Last Tuesday, I watched a ten-year-old boy carry his own chair into a classroom because the school couldn't afford enough furniture."</em></li>
  <li><strong>Bold statement:</strong> <em>"Social media is not connecting us. It is making us lonelier than ever."</em></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Beginning an article with "In this article I am going to write about..." This is a meta-statement about the writing rather than the writing itself. It immediately undermines engagement. Instead, plunge the reader straight into your argument or story. Show, don't tell — your article should speak for itself.</div>

<h3>Tone and Register</h3>
<p>Matching your tone to the task is essential for AO5:</p>
<ul>
  <li><strong>Formal letter to a council</strong> — Measured, respectful, evidence-based. Avoid contractions ("don't" → "do not").</li>
  <li><strong>Article for a school magazine</strong> — Semi-formal. More personal voice allowed; conversational but still structured.</li>
  <li><strong>Article for a broadsheet newspaper</strong> — Formal and authoritative. Sophisticated vocabulary. May use irony or wit.</li>
  <li><strong>Letter to a friend</strong> — Informal. Contractions, colloquialisms, personal anecdotes are appropriate.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Read the task instruction very carefully. OCR will specify the audience (e.g. "Write a letter to your local MP" or "Write an article for a teen magazine"). The audience determines your register. A letter to an MP should be formal and persuasive; an article for teenagers should be accessible and engaging. Mismatching register is one of the fastest ways to lose marks.</div>

<h3>Paragraph Organisation — The Discourse Marker Toolkit</h3>
<p>Well-organised writing uses discourse markers to guide the reader through your argument:</p>
<ul>
  <li><strong>To add:</strong> Furthermore, moreover, in addition, equally important</li>
  <li><strong>To contrast:</strong> However, nevertheless, on the other hand, conversely</li>
  <li><strong>To give examples:</strong> For instance, to illustrate, a case in point</li>
  <li><strong>To conclude:</strong> Ultimately, in conclusion, it is clear that</li>
  <li><strong>To concede:</strong> Admittedly, while it is true that, granted</li>
</ul>

<div class="key-term"><strong>Key Term: Register</strong> — The level of formality in your writing, determined by the audience and purpose. Register encompasses vocabulary, sentence structure, tone, and even punctuation choices. Using the wrong register for your audience is like wearing a ball gown to a football match — technically possible, but entirely wrong for the context.</div>
`,
    quiz: [
      {
        id: 'ocr-lc1-m7-q1',
        question:
          'When should you use "Yours faithfully" to close a formal letter?',
        options: [
          'When you know the recipient\'s name',
          'When you have addressed the letter to "Dear Sir/Madam"',
          'In all formal letters',
          'Only in letters to businesses',
        ],
        correct: 1,
        explanation:
          'Use "Yours faithfully" when you do not know the recipient\'s name (Dear Sir/Madam). Use "Yours sincerely" when you have used their name (Dear Mr Hartley). This is a standard convention that demonstrates awareness of formal letter structure.',
      },
      {
        id: 'ocr-lc1-m7-q2',
        question:
          'What is wrong with opening an article with "In this article I am going to write about..."?',
        options: [
          'It is grammatically incorrect',
          'It is a meta-statement that undermines engagement — you should plunge straight into your argument',
          'Articles should never have introductions',
          'It uses too many words',
        ],
        correct: 1,
        explanation:
          '"In this article I am going to write about..." tells the reader about the writing rather than engaging them with the writing itself. Effective articles open with hooks — statistics, questions, anecdotes, or bold statements — that pull the reader in immediately.',
      },
      {
        id: 'ocr-lc1-m7-q3',
        question:
          'Which two Assessment Objectives are tested in Section B (writing)?',
        options: [
          'AO1 and AO2',
          'AO3 and AO4',
          'AO5 and AO6',
          'AO2 and AO5',
        ],
        correct: 2,
        explanation:
          'AO5 tests content and organisation (communicating clearly, effectively, and imaginatively), while AO6 tests technical accuracy (vocabulary, sentence structures, spelling, and punctuation).',
      },
      {
        id: 'ocr-lc1-m7-q4',
        question: 'What does "register" mean in the context of transactional writing?',
        options: [
          'The number of paragraphs in your writing',
          'The level of formality, determined by audience and purpose',
          'A list of techniques you should include',
          'The handwriting style you use in the exam',
        ],
        correct: 1,
        explanation:
          'Register refers to the level of formality in your writing, shaped by your audience and purpose. It encompasses vocabulary, sentence structure, tone, and punctuation choices.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Transactional Writing: Speeches, Reports, and Reviews
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m8',
    title: 'Transactional Writing: Speeches, Reports, and Reviews',
    duration: '55 min',
    content: `
<h2>Writing Speeches, Reports, and Reviews — Mastering Additional Forms</h2>

<p>In addition to letters and articles, OCR Component 01 may ask you to write a <strong>speech</strong>, <strong>report</strong>, or <strong>review</strong>. Each form has distinct conventions that you must demonstrate to access top marks for AO5. This module covers the structure, tone, and techniques for all three.</p>

<h3>Part 1: Writing a Speech</h3>

<div class="key-term"><strong>Key Term: Rhetoric</strong> — The art of persuasive speaking or writing. Classical rhetoric identified three modes of persuasion: <em>ethos</em> (credibility), <em>pathos</em> (emotion), and <em>logos</em> (logic). Effective speeches typically combine all three.</div>

<p>Speech writing tasks often take the form: <em>"Write a speech to be delivered to your year group arguing that..."</em> or <em>"Write the text of a speech for a school assembly about..."</em></p>

<h4>Speech Conventions</h4>
<ul>
  <li><strong>Direct address</strong> — Acknowledge your audience: "Ladies and gentlemen," "Fellow students," "Members of the council."</li>
  <li><strong>Rhetorical questions</strong> — Engage the audience and make them think: "How many of us have ever stopped to consider...?"</li>
  <li><strong>Repetition and anaphora</strong> — Repeat key phrases for emphasis: "We deserve better. We demand better. We will accept nothing less."</li>
  <li><strong>Tricolon (rule of three)</strong> — Group ideas in threes for rhythm and impact: "It is unfair, unnecessary, and unacceptable."</li>
  <li><strong>Personal pronouns</strong> — "I believe," "We must," "You have the power to" — create connection and urgency.</li>
  <li><strong>Varied pace</strong> — Short sentences for emphasis, longer ones for building arguments. Occasional one-word sentences: "Enough."</li>
  <li><strong>Call to action</strong> — End by telling the audience what to do: "So I ask you — sign the petition, write to your MP, make your voice heard."</li>
</ul>

<div class="model-answer"><strong>Model Speech Opening:</strong>
<p><em>Good morning, everyone. I want to start with a question — and I'd like you to answer it honestly, if only to yourselves. When was the last time you did something that genuinely frightened you? Not a horror film or a roller coaster — I mean something real. Something that made your palms sweat and your voice shake. Because today I want to talk about fear. Not the kind we run from, but the kind we should run towards.</em></p>
<p>This opening works because it uses direct address, a rhetorical question, personal pronouns, and a memorable closing idea that reframes the audience's expectations.</p></div>

<h3>Part 2: Writing a Report</h3>

<p>Reports are more formal and structured than articles or speeches. They present findings, evidence, and recommendations in a clear, organised manner.</p>

<h4>Report Conventions</h4>
<ul>
  <li><strong>Title</strong> — Clear and informative: "Report on the Proposed Changes to School Lunch Provision."</li>
  <li><strong>Subheadings</strong> — Organise sections clearly (Introduction, Findings, Recommendations).</li>
  <li><strong>Formal register</strong> — Third person where possible ("It was found that..."), objective tone.</li>
  <li><strong>Evidence-based</strong> — Use facts, statistics, and reasoned analysis rather than emotional appeals.</li>
  <li><strong>Recommendations section</strong> — Reports typically end with clear, actionable suggestions.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Reports are tested less frequently than letters, articles, and speeches, but when they do appear, students often struggle because they write an article or essay instead. The key distinguishing features of a report are <strong>subheadings</strong>, <strong>third-person voice</strong>, and a <strong>recommendations section</strong>. Including these instantly signals awareness of the form.</div>

<h3>Part 3: Writing a Review</h3>

<p>Reviews combine personal opinion with evidence and analysis. You might be asked to review a book, film, restaurant, event, or product.</p>

<h4>Review Conventions</h4>
<ul>
  <li><strong>Clear subject introduction</strong> — What are you reviewing? Provide context (title, creator, venue, etc.).</li>
  <li><strong>Balance of description and opinion</strong> — Describe key features, then evaluate them.</li>
  <li><strong>Evaluative language</strong> — "Outstanding," "disappointing," "a triumph of," "falls short of."</li>
  <li><strong>Specific detail</strong> — Avoid vague praise or criticism. Say <em>what</em> was good and <em>why</em>.</li>
  <li><strong>Rating or recommendation</strong> — End with a clear verdict: would you recommend this? To whom?</li>
  <li><strong>Engaging voice</strong> — Reviews allow personality. Wit, humour, and vivid description are assets.</li>
</ul>

<div class="model-answer"><strong>Model Review Opening:</strong>
<p><em>If you have ever wondered what it would feel like to eat a cloud, the meringue at Hartley's Bakehouse comes dangerously close. Perched on a cobbled side street that most satnav systems seem determined to ignore, this tiny café has been quietly perfecting the art of pastry for over two decades — and the results are nothing short of extraordinary.</em></p>
<p>This opening works because it opens with an imaginative simile ("eat a cloud"), provides specific context (name, location, history), and establishes an engaging, witty voice that makes the reader want to continue.</p></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a review that reads like a plot summary or a factual description. A review must include your <strong>opinion</strong> — backed up by specific evidence. Saying "The restaurant served pasta" is description. Saying "The pasta was overcooked to the point of disintegration, a cardinal sin for a restaurant charging £18 per plate" is a review.</div>

<h3>Proofreading Checklist for All Writing Tasks</h3>
<p>In the final 5 minutes of the exam, check for:</p>
<ul>
  <li><strong>Spelling</strong> — Common errors: "definitely" (not "definately"), "separate" (not "seperate"), "their/there/they're."</li>
  <li><strong>Punctuation</strong> — Apostrophes for possession and contraction. Full stops at the end of every sentence. Commas after subordinate clauses.</li>
  <li><strong>Sentence variety</strong> — Have you used a mix of simple, compound, and complex sentences?</li>
  <li><strong>Paragraphing</strong> — Every new point or shift in focus should begin a new paragraph.</li>
  <li><strong>Form conventions</strong> — Have you included the correct features for the form (e.g. sign-off for a letter, headline for an article)?</li>
</ul>

<div class="key-term"><strong>Key Term: Ethos, Pathos, Logos</strong> — The three classical modes of persuasion. <em>Ethos</em> appeals to the speaker's credibility ("As someone who has worked in education for 20 years..."). <em>Pathos</em> appeals to emotion ("Think of the children who will suffer..."). <em>Logos</em> appeals to logic and evidence ("Studies show that 73% of..."). The strongest persuasive writing uses all three.</div>


<h3>Grade 9 Technical Accuracy in Practice</h3>
<p><strong>What Separates Grade 7 from Grade 9 in AO6:</strong> Grade 7 responses are technically correct with some sentence variety. Grade 9 responses demonstrate that accuracy and sentence variety are <em>deliberate choices</em> that enhance meaning and purpose. A Grade 9 student varies sentence length because that variation serves the writing's purpose — not because they have been told to vary sentences.</p>

<h4>Worked Example: A Letter to a Local Newspaper</h4>
<p><strong>Grade 7 Response (competent but safe):</strong></p>
<div class="text-extract">
Dear Editor, I am writing to express my concern about the closure of the local library. The library provides many important services to our community. People use it for reading, studying, and learning. Children benefit from story time and computer access. It would be a loss if the library were to close. The community should fight to keep it open.
</div>

<p><strong>Issues:</strong> Correct but repetitive sentence structures. Uses simple sentences throughout. Lacks sophisticated punctuation. The content is clear but not compelling.</p>

<p><strong>Grade 9 Response (same content, elevated through control):</strong></p>
<div class="model-answer">
Dear Editor, For fifteen years, the library at the corner of Station Road has been the quiet heart of this community — not merely a building full of books, but a space where isolation turns to connection, where curiosity finds answers, where children discover worlds beyond their own. Its closure would constitute an act of cultural erasure. We would lose not just the facility itself, but the librarians who know their regulars by name; the after-school refuge for young people who might otherwise have nowhere safe to go; the public computers that bridge the digital divide for those who cannot afford their own technology. Of course, the council claims efficiency. But some institutions are too valuable to measure in spreadsheets. The cost of preserving the library is trivial compared to the cost of losing it.
</div>

<p><strong>What Elevates This to Grade 9:</strong></p>
<ul>
<li><strong>Varied sentence structure:</strong> Opening compound-complex sentence draws the reader in. Fragments ("Its closure would constitute an act of cultural erasure.") create emphasis. Longer sentences with multiple clauses build argument. Short final sentence lands with force.</li>
<li><strong>Sophisticated punctuation:</strong> Dashes create interruption and emphasis ("— not merely a building..."). Semicolon connects related but distinct ideas.</li>
<li><strong>Word choice precision:</strong> "Cultural erasure" vs. "losing the library." "Constitute" vs. "be." "Bridge the digital divide" shows specific understanding.</li>
<li><strong>Conciseness with complexity:</strong> Every sentence earns its place. No filler. Dense with meaning.</li>
</ul>

<h3>Step-by-Step Accuracy Framework</h3>
<ol>
<li><strong>Spell-check stage:</strong> Read through specifically looking for spelling. Use your knowledge of common errors (accommodate, separate, definitely, their/there/they're).</li>
<li><strong>Punctuation stage:</strong> Check sentence boundaries. Are clauses properly linked? Do you have any comma splices? Are apostrophes used correctly?</li>
<li><strong>Sentence variety stage:</strong> Read aloud. Does your writing have rhythm? Vary deliberately: one short sentence to puncture a moment, then longer sentences for development.</li>
<li><strong>Voice and register stage:</strong> Does your vocabulary and tone match your purpose and audience? A letter to the editor needs formality and clarity. A narrative needs atmosphere and immediacy.</li>
</ol>

<h3>Common AO6 Mistakes in Transactional Writing</h3>
<div class="common-mistake"><strong>Mistake 1: Inconsistent tone.</strong> A persuasive article that swings between formal and colloquial undermines its argument. Choose a register and sustain it.</div>
<div class="common-mistake"><strong>Mistake 2: Run-on sentences.</strong> "The building is old and it hasn't been updated since 2005 and the roof leaks and there is no heating in winter and students are uncomfortable." Use punctuation to separate ideas: periods, semicolons, dashes.</div>
<div class="common-mistake"><strong>Mistake 3: Passive voice overuse.</strong> "It is believed that changes should be made" is weaker than "We must make changes." Use active voice for impact.</div>
<div class="common-mistake"><strong>Mistake 4: Homophone confusion.</strong> Your/you're, their/there/they're, its/it's. These errors appear in even strong responses but cost marks. Build a personal error-watch list.</div>

<h3>AO6 Practice Task</h3>
<p><strong>Rewrite this for Grade 9 AO6:</strong></p>
<div class="text-extract">
The school should change its policy about mobile phones. Many students bring phones to school. Some students use them to cheat in tests. Some use them for bullying on social media. But some students say they need them for emergencies. The school needs to find a balance between safety and freedom.
</div>

<p><strong>Model Response:</strong></p>
<div class="model-answer">
While students cite safety concerns — emergencies, parental contact — the evidence suggests that unrestricted phone access creates more problems than it solves. Exam boards have documented instances of cheating facilitated by hidden devices. More insidiously, social media bullying now extends beyond school gates into evenings and weekends, offering bullies 24/7 access to their victims. The question, then, is not whether phones should be permitted, but on what terms. A compromise might satisfy neither camp completely, yet a staggered approach — phones permitted in designated areas, off-limits during lessons — offers a workable middle ground that acknowledges both teenage autonomy and institutional duty of care.
</div>

`,
    quiz: [
      {
        id: 'ocr-lc1-m8-q1',
        question:
          'What are the key distinguishing features of a report compared to an article?',
        options: [
          'Reports use emotive language and articles do not',
          'Reports use subheadings, third-person voice, and a recommendations section',
          'Reports are always shorter than articles',
          'Reports never include evidence or statistics',
        ],
        correct: 1,
        explanation:
          'Reports are distinguished by subheadings for clear organisation, third-person voice for objectivity, and a recommendations section proposing actions. These conventions separate reports from the more personal voice of articles.',
      },
      {
        id: 'ocr-lc1-m8-q2',
        question: 'What is "anaphora" in the context of speech writing?',
        options: [
          'A type of metaphor used in speeches',
          'The repetition of a word or phrase at the beginning of successive clauses for emphasis',
          'A formal way to address an audience',
          'The conclusion of a speech',
        ],
        correct: 1,
        explanation:
          'Anaphora is the repetition of a word or phrase at the start of successive clauses or sentences. For example: "We deserve better. We demand better. We will accept nothing less." It creates rhythm, emphasis, and emotional momentum.',
      },
      {
        id: 'ocr-lc1-m8-q3',
        question:
          'What is the difference between description and review writing?',
        options: [
          'There is no difference',
          'Description states facts; a review includes evaluative opinion supported by specific evidence',
          'Reviews are always negative and descriptions are always positive',
          'Reviews never describe anything',
        ],
        correct: 1,
        explanation:
          'Description tells the reader what something is or was. A review goes further by evaluating — giving an opinion on quality, supported by specific evidence. "The restaurant served pasta" is description; "The pasta was overcooked" is review.',
      },
      {
        id: 'ocr-lc1-m8-q4',
        question: 'What are the three classical modes of persuasion?',
        options: [
          'Simile, metaphor, personification',
          'Ethos (credibility), pathos (emotion), logos (logic)',
          'Introduction, body, conclusion',
          'Formal, informal, semi-formal',
        ],
        correct: 1,
        explanation:
          'Ethos appeals to the speaker\'s credibility, pathos appeals to the audience\'s emotions, and logos appeals to logic and evidence. Effective persuasive writing and speeches typically use all three.',
      },
      {
        id: 'ocr-lc1-m8-q5',
        question:
          'Which of the following is the most effective way to end a speech?',
        options: [
          '"That is the end of my speech, thank you."',
          '"In conclusion, I have discussed several points about this topic."',
          '"So I ask you — sign the petition, write to your MP, make your voice heard."',
          '"I hope you found this interesting."',
        ],
        correct: 2,
        explanation:
          'A strong speech ending uses a call to action — telling the audience specifically what to do. This creates urgency and gives the speech practical impact. Generic closings like "thank you" or "I hope you found this interesting" are weak and forgettable.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 — Technical Accuracy: Spelling, Punctuation, and Grammar
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m9',
    title: 'Technical Accuracy: Spelling, Punctuation, and Grammar',
    duration: '50 min',
    content: `
<h2>AO6 — Technical Accuracy in Transactional Writing</h2>

<p>In OCR Component 01, <strong>AO6</strong> accounts for a significant proportion of the writing marks. It assesses your ability to use a range of vocabulary and sentence structures for clarity, purpose, and effect, with <strong>accurate spelling and punctuation</strong>. Many students focus entirely on content (AO5) and neglect accuracy — this is a costly mistake.</p>

<div class="key-term"><strong>Key Term: AO6 — Technical Accuracy</strong> — The Assessment Objective that rewards correct spelling, punctuation, and grammar, as well as varied and effective sentence structures. In OCR Component 01, AO6 marks are embedded within both writing tasks.</div>

<h3>Punctuation That Makes a Difference</h3>

<h4>1. Semicolons</h4>
<p>A semicolon links two closely related independent clauses without a conjunction:</p>
<ul>
  <li><em>"The library is more than a building; it is the heart of the community."</em></li>
  <li><strong>Rule:</strong> Both halves must be complete sentences. If you can replace the semicolon with a full stop, it is correct.</li>
</ul>

<h4>2. Colons</h4>
<p>A colon introduces an explanation, list, or elaboration:</p>
<ul>
  <li><em>"The solution is simple: invest in education."</em></li>
  <li><em>"Three things matter most in writing: clarity, accuracy, and voice."</em></li>
</ul>

<h4>3. Dashes and Parenthetical Commas</h4>
<p>Both can embed extra information within a sentence:</p>
<ul>
  <li><em>"The council — despite repeated promises — has failed to act."</em> (dashes for emphasis)</li>
  <li><em>"The council, despite repeated promises, has failed to act."</em> (commas for a softer aside)</li>
</ul>

<h4>4. Apostrophes</h4>
<p>Common errors to avoid:</p>
<ul>
  <li><strong>It's</strong> = it is. <strong>Its</strong> = belonging to it. ("The dog wagged <em>its</em> tail.")</li>
  <li><strong>Their</strong> = belonging to them. <strong>There</strong> = a place. <strong>They're</strong> = they are.</li>
  <li><strong>Singular possession:</strong> "The student's book" (one student). <strong>Plural possession:</strong> "The students' books" (multiple students).</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners notice when a student <em>deliberately</em> uses ambitious punctuation. A well-placed semicolon or colon signals confidence and control. However, an incorrectly used semicolon is worse than not using one at all. Practise until you are confident, then deploy them sparingly for maximum impact.</div>

<h3>Sentence Structures for Variety and Effect</h3>

<p>Top-band responses demonstrate a <strong>range</strong> of sentence structures, not just correctness:</p>

<h4>Simple Sentences</h4>
<p>One main clause. Powerful for emphasis: <em>"Enough is enough."</em></p>

<h4>Compound Sentences</h4>
<p>Two main clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so): <em>"The evidence is clear, yet the government refuses to act."</em></p>

<h4>Complex Sentences</h4>
<p>A main clause and one or more subordinate clauses: <em>"Although the council has promised investment, residents have seen no evidence of change."</em></p>

<h4>Minor Sentences</h4>
<p>Grammatically incomplete but used deliberately for dramatic effect: <em>"Unacceptable."</em> <em>"Not any more."</em></p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing in a monotonous rhythm — every sentence the same length and structure. This is often caused by starting too many sentences with "I think" or "This is." Vary your openings: start with an adverbial ("Undeniably,..."), a participle clause ("Having considered the evidence,..."), a prepositional phrase ("In a society that values fairness,..."), or a short, punchy statement.</div>

<h3>Commonly Misspelled Words at GCSE</h3>
<p>Learn these — they appear frequently in transactional writing:</p>
<ul>
  <li><strong>Definitely</strong> (not "definately")</li>
  <li><strong>Separate</strong> (not "seperate")</li>
  <li><strong>Necessary</strong> (not "neccessary")</li>
  <li><strong>Government</strong> (not "goverment")</li>
  <li><strong>Environment</strong> (not "enviroment")</li>
  <li><strong>Conscience</strong> (not "concience")</li>
  <li><strong>Persuade</strong> (not "pursuade")</li>
  <li><strong>Accommodate</strong> (not "accomodate")</li>
  <li><strong>Exaggerate</strong> (not "exagerate")</li>
  <li><strong>Responsibility</strong> (not "responsability")</li>
</ul>

<h3>Vocabulary Upgrades</h3>
<p>Replace common words with more precise alternatives to demonstrate range:</p>
<ul>
  <li><strong>Good</strong> → exceptional, commendable, exemplary</li>
  <li><strong>Bad</strong> → deplorable, detrimental, catastrophic</li>
  <li><strong>Important</strong> → crucial, paramount, indispensable</li>
  <li><strong>A lot</strong> → a significant number, an abundance, a considerable proportion</li>
  <li><strong>Shows</strong> → demonstrates, illustrates, reveals, underscores</li>
  <li><strong>Big</strong> → substantial, considerable, immense</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not use ambitious vocabulary unless you are confident it is correct. Using "juxtaposition" when you mean "comparison" or "dichotomy" when you mean "difference" suggests you are reaching beyond your understanding. One precisely used word is worth more than three misused ones. Accuracy trumps ambition.</div>

<div class="key-term"><strong>Key Term: Subordinate Clause</strong> — A clause that cannot stand alone as a complete sentence and depends on a main clause for its meaning. It often begins with a subordinating conjunction (although, because, while, if, when, unless). Example: "Although the rain was heavy, the match continued." — "Although the rain was heavy" is the subordinate clause.</div>


<h3>The 80-Minute Exam Broken Down: A Worked Walkthrough</h3>
<p><strong>Scenario: You receive two non-fiction texts (one 20th century, one 21st century) and must answer all questions in Section A and complete both writing tasks in Section B.</strong></p>

<p><strong>Minutes 0–10: READ AND ANNOTATE</strong></p>
<div class="examiner-tip">Many students read the questions first, then read the text. This is inefficient. Read the texts fully and mark key ideas, techniques, and turning points. Underline surprising claims. Mark dates and sources. This takes 8 minutes but saves time later because you won't need to reread.</div>

<p><strong>Minutes 10–25: ANSWER Q1 (RETRIEVAL)</strong></p>
<p>This is your confidence-building section. Each question is worth 1–2 marks. You can earn 8–10 marks here with accuracy and care. Slow down. Use quotation marks. Be precise. If a question asks "What time did the event occur?" and the text says "at half past three," write "3:30 p.m." — not "afternoon." Precision earns marks.</p>

<p><strong>Worked Example:</strong></p>
<div class="text-extract">
Q1: According to the article, what reason does the council give for closing the library?
Text extract: "The council states that it must close the library due to insufficient funding in the 2024 budget and declining visitor numbers."
</div>

<p><strong>Good Response:</strong> The council claims there is "insufficient funding in the 2024 budget" and "declining visitor numbers."</p>

<p><strong>Minutes 25–40: ANSWER Q2 (LANGUAGE ANALYSIS)</strong></p>
<p>This question asks you to analyze a specific technique or phrase. You will use PEE: Point (what technique), Evidence (the quote), Explanation (why the writer used it and what effect it achieves).</p>

<p><strong>Worked Example:</strong></p>
<div class="text-extract">
Q2: The writer uses the phrase "the quiet heart of the community." Analyze the effect of the words "quiet" and "heart."
</div>

<p><strong>Grade 9 Response:</strong></p>
<div class="model-answer">
The word "heart" suggests the library is central to the community's survival and wellbeing — not peripheral but vital. The modifier "quiet" subverts expectation: we might expect a "beating" or "strong" heart, but "quiet" suggests that the library's most important work happens privately, without fanfare. Libraries don't shout their value; they work steadily. This combination creates pathos — the library's humility and understatement make its potential loss more tragic.
</div>

<p><strong>Minutes 40–55: ANSWER Q3 (COMPARISON)</strong></p>
<p>This asks how the two texts compare in viewpoint, tone, or approach to the same topic. Use comparative language: "whereas," "similarly," "in contrast," "both texts." Provide evidence from both texts — not one longer quote from Text A and one brief reference to Text B.</p>

<p><strong>Worked Example:</strong></p>
<div class="text-extract">
Q3: How do the two texts differ in their stance on funding public institutions?
</div>

<p><strong>Grade 9 Response (excerpt):</strong></p>
<div class="model-answer">
The 20th-century text argues that institutions like libraries are "investments in knowledge" and defends public funding as a moral obligation. By contrast, the 21st-century article adopts a cost-benefit analysis, citing "declining footfall" and "budget pressures" as the primary determinant of value. The first text values culture; the second values efficiency. This shift reflects changing attitudes toward what government should fund.
</div>

<p><strong>Minutes 55–65: ANSWER Q4 (EVALUATION)</strong></p>
<p>This is the highest-tariff question. You must judge how effectively the writer has argued their position, using evidence. Use phrases like "the writer persuades the reader through," "the evidence is convincing because," "however, this argument is weakened by."</p>

<p><strong>Worked Example:</strong></p>
<div class="text-extract">
Q4: To what extent does the writer convince you that the library closure is a mistake?
</div>

<p><strong>Grade 9 Response (excerpt):</strong></p>
<div class="model-answer">
The writer persuades through emotional appeal and logical argument. The image of the community losing "the quiet heart" generates sympathy, whilst statistical evidence about visitor demographics provides rational support. However, the argument might be strengthened by acknowledging the council's financial constraints. The writer does not engage with the opposing view, which somewhat weakens the overall persuasiveness. On balance, the personal narratives embedded in the text are most convincing: real voices of community members carry more weight than abstract argument.
</div>

<p><strong>Minutes 65–70: PLAN Q5 (SHORT WRITING TASK, 16 MARKS)</strong></p>
<p>Spend 5 minutes planning. Jot: purpose (persuade/inform/explain?), audience (who am I writing for?), form (letter/article/speech?), three key points you'll make. This prevents rambling and ensures structure.</p>

<p><strong>Minutes 70–85: WRITE Q5</strong></p>
<p>Write purposefully. Your opening line should establish voice and purpose immediately. Aim for 250–300 words. Quality over quantity. Every sentence should advance your argument or develop your idea. Do not repeat points just to fill space.</p>

<p><strong>Minutes 85–90: PLAN Q6 (EXTENDED WRITING TASK, 24 MARKS)</strong></p>
<p>This is the largest task. Spend 5 minutes planning three or four main ideas. Brief jottings. This is your scaffolding.</p>

<p><strong>Minutes 90–115: WRITE Q6</strong></p>
<p>Aim for 400–500 words. Pace yourself: roughly 8–10 minutes per main idea, including introduction and conclusion. Vary your sentence structures. Include specific evidence or examples. This is where you demonstrate control and sophistication.</p>

<p><strong>Minutes 115–120: PROOFREAD</strong></p>
<p>Spend your final 5 minutes on spelling, punctuation, and clarity. Read aloud if possible. Look specifically for:</p>
<ul>
<li>Spelling of subject-specific terms (if analyzing an article about technology, spell "algorithm" correctly)</li>
<li>Apostrophes in "it's" vs. "its"</li>
<li>Sentence boundaries (no comma splices)</li>
<li>Technical accuracy in writing tasks (AO6 marks)</li>
</ul>

<h3>Common Exam Day Mistakes</h3>
<div class="common-mistake"><strong>Mistake 1: Spending too long on reading.</strong> Don't annotate every word. Mark key claims, techniques, and turning points. Move on.</div>
<div class="common-mistake"><strong>Mistake 2: Overshooting on Q3 and Q4.</strong> Students often write 2000 words of analysis on Q4 and then rush through writing tasks. Watch your time. Q4 should be roughly 300–400 words.</div>
<div class="common-mistake"><strong>Mistake 3: Writing without planning writing tasks.</strong> A quick plan prevents structure breakdown and rambling. 5 minutes planning saves 15 minutes writing.</div>
<div class="common-mistake"><strong>Mistake 4: Skipping the final 5 minutes.</strong> Proofreading catches the careless errors that cost you marks — and they are easy to lose if you're exhausted.</div>

`,
    quiz: [
      {
        id: 'ocr-lc1-m9-q1',
        question: 'When is it correct to use a semicolon?',
        options: [
          'To introduce a list',
          'To link two closely related independent clauses',
          'To show possession',
          'After a greeting in a letter',
        ],
        correct: 1,
        explanation:
          'A semicolon links two closely related independent clauses. Both halves must be able to stand alone as complete sentences. For example: "The library is more than a building; it is the heart of the community."',
      },
      {
        id: 'ocr-lc1-m9-q2',
        question:
          'Which of the following is the correct use of "its" and "it\'s"?',
        options: [
          '"Its raining outside" and "The dog wagged it\'s tail"',
          '"It\'s raining outside" and "The dog wagged its tail"',
          'They are interchangeable',
          '"Its" is never correct',
        ],
        correct: 1,
        explanation:
          '"It\'s" is a contraction of "it is" — so "It\'s raining outside" is correct. "Its" shows possession — so "The dog wagged its tail" is correct. This is one of the most common errors in student writing.',
      },
      {
        id: 'ocr-lc1-m9-q3',
        question:
          'Why should you vary your sentence openings in transactional writing?',
        options: [
          'Because the mark scheme requires exactly five types of opening',
          'To avoid monotonous rhythm and demonstrate range of expression',
          'Because every sentence must start with a different word',
          'Varied openings are only required in creative writing',
        ],
        correct: 1,
        explanation:
          'Varying sentence openings creates rhythm, maintains reader interest, and demonstrates the range of expression that AO6 rewards. Starting every sentence with "I think" or "This is" produces a monotonous effect.',
      },
      {
        id: 'ocr-lc1-m9-q4',
        question: 'What is a subordinate clause?',
        options: [
          'A complete sentence that stands alone',
          'A clause that depends on a main clause and cannot stand alone',
          'The first clause in any sentence',
          'A clause that always begins with "and" or "but"',
        ],
        correct: 1,
        explanation:
          'A subordinate clause depends on a main clause for meaning and cannot stand alone as a sentence. It often begins with a subordinating conjunction like "although," "because," "while," or "if."',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Exam Strategy and Timed Practice
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc1-m10',
    title: 'Component 01 Exam Strategy & Timed Practice',
    duration: '50 min',
    content: `
<h2>Exam Strategy — Putting It All Together for Component 01</h2>

<p>This final module consolidates everything you have learned across the course. It provides a complete exam strategy, a full practice walkthrough, and the mindset shifts that separate confident exam performers from anxious ones. Component 01 is <strong>2 hours</strong> and worth <strong>80 marks</strong> — every minute counts.</p>

<h3>The Complete Timing Plan (Revised)</h3>
<table>
  <tr><th>Time</th><th>Task</th><th>Marks</th></tr>
  <tr><td>0–10 min</td><td>Read both source texts carefully, underlining key ideas and techniques</td><td>—</td></tr>
  <tr><td>10–25 min</td><td>Answer Q1 (retrieval and inference questions)</td><td>Varies</td></tr>
  <tr><td>25–40 min</td><td>Answer Q2 (language analysis)</td><td>6–8</td></tr>
  <tr><td>40–55 min</td><td>Answer Q3 (comparison)</td><td>8–10</td></tr>
  <tr><td>55–65 min</td><td>Answer Q4 (evaluation)</td><td>12–14</td></tr>
  <tr><td>65–70 min</td><td>Plan Q5 (short writing task)</td><td>—</td></tr>
  <tr><td>70–85 min</td><td>Write Q5</td><td>16</td></tr>
  <tr><td>85–90 min</td><td>Plan Q6 (extended writing task)</td><td>—</td></tr>
  <tr><td>90–115 min</td><td>Write Q6</td><td>24</td></tr>
  <tr><td>115–120 min</td><td>Proofread all writing</td><td>—</td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The single biggest reason students underperform on Component 01 is <strong>poor time management</strong>. Students who spend too long perfecting their reading answers leave themselves rushed for writing — which is worth <em>half the paper</em>. Set a watch on your desk and stick to the timing plan. No reading answer is worth sacrificing your writing performance for.</div>

<h3>Full Practice Walkthrough</h3>
<p>Here is how you should approach the exam from the moment you open the paper:</p>

<h4>Step 1: Read Both Texts (10 minutes)</h4>
<p>Do not rush this. Read each text twice:</p>
<ul>
  <li><strong>First read:</strong> Understand the overall meaning, topic, and tone.</li>
  <li><strong>Second read:</strong> Underline key techniques, powerful word choices, and structural features. Note differences between the texts in the margin.</li>
</ul>

<h4>Step 2: Answer Reading Questions (55 minutes)</h4>
<ul>
  <li><strong>Q1:</strong> Quick retrieval. Do not over-think. Find, quote, move on.</li>
  <li><strong>Q2:</strong> What–How–Why for 2–3 language points. Zoom into word-level analysis. Use the terminology from Module 3.</li>
  <li><strong>Q3:</strong> Integrated comparison. Discuss both texts in every paragraph. Compare methods as well as ideas (Module 4).</li>
  <li><strong>Q4:</strong> State your judgement, support with evidence, consider counter-arguments, conclude with a nuanced view (Module 5).</li>
</ul>

<h4>Step 3: Write Both Tasks (50 minutes)</h4>
<ul>
  <li><strong>Q5 (15–18 min):</strong> Plan for 3 minutes. Write 200–300 words. Match form conventions precisely.</li>
  <li><strong>Q6 (25–30 min):</strong> Plan for 5 minutes. Write 350–500 words. This is your showcase piece — deploy your best vocabulary, punctuation, and structural techniques.</li>
</ul>

<h4>Step 4: Proofread (5 minutes)</h4>
<p>Check writing tasks only (reading answers are unlikely to benefit from changes at this stage):</p>
<ul>
  <li>Spelling errors — especially commonly misspelled words (Module 9)</li>
  <li>Missing punctuation — full stops, commas, apostrophes</li>
  <li>Sentence fragments or run-on sentences</li>
  <li>Form conventions — did you include the correct features?</li>
</ul>

<h3>What to Do If You Run Out of Time</h3>
<p>If you find yourself with only 10 minutes left and have not started Q6:</p>
<ol>
  <li><strong>Write a quick plan</strong> — bullet points showing your intended structure. This can earn partial marks.</li>
  <li><strong>Write a strong opening paragraph</strong> — first impressions matter.</li>
  <li><strong>Write a strong closing paragraph</strong> — examiners notice how you end.</li>
  <li><strong>Fill the middle with key points</strong> — even abbreviated, they show your argument.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Abandoning the writing section because you ran out of time on reading. Even a partially completed writing task can earn significant marks. A well-written opening paragraph and plan might earn 10–12 marks, whereas an abandoned Q6 earns zero. Always attempt both writing tasks, even if briefly.</div>

<h3>Mindset and Exam Confidence</h3>
<ul>
  <li><strong>The texts are there to help you.</strong> You are not expected to bring outside knowledge — everything you need is in the extracts.</li>
  <li><strong>There is no single "right" interpretation.</strong> Examiners reward well-supported arguments, not specific answers.</li>
  <li><strong>Quality over quantity.</strong> Three well-developed points with close analysis will outscore six superficial ones.</li>
  <li><strong>Trust your training.</strong> If you have worked through these modules, you have the skills. The exam is simply the opportunity to demonstrate them.</li>
</ul>

<h3>Pre-Exam Checklist</h3>
<ul>
  <li>Practise at least two full timed papers before exam day.</li>
  <li>Build a bank of powerful vocabulary for transactional writing.</li>
  <li>Memorise form conventions for all five transactional forms.</li>
  <li>Review examiner reports to understand what top-band responses look like.</li>
  <li>Prepare your equipment: black pen, spare pen, watch (not a phone).</li>
</ul>

<div class="key-term"><strong>Key Term: Mark Allocation</strong> — The number of marks assigned to each question. In Component 01, marks range from 1 (simple retrieval) to 24 (extended writing). Your time and effort on each question should be proportional to its mark allocation. Spending equal time on every question is a common strategic error.</div>
`,
    quiz: [
      {
        id: 'ocr-lc1-m10-q1',
        question: 'How long is OCR Component 01 in total?',
        options: [
          '1 hour 30 minutes',
          '1 hour 55 minutes',
          '2 hours',
          '2 hours 15 minutes',
        ],
        correct: 2,
        explanation:
          'OCR Component 01 is 2 hours (120 minutes). This must be divided between reading (approximately 65 minutes) and writing (approximately 50 minutes), with 5 minutes for proofreading.',
      },
      {
        id: 'ocr-lc1-m10-q2',
        question: 'What should you do if you run out of time before starting Q6?',
        options: [
          'Skip Q6 and go back to improve reading answers',
          'Write a plan and prioritise strong opening and closing paragraphs',
          'Ask for extra time',
          'Copy text from the source materials',
        ],
        correct: 1,
        explanation:
          'A plan, strong opening, and strong closing can earn significant marks even if the response is incomplete. Abandoning Q6 entirely means losing up to 24 marks — always attempt both writing tasks.',
      },
      {
        id: 'ocr-lc1-m10-q3',
        question:
          'What is the single biggest reason students underperform on Component 01?',
        options: [
          'Not knowing enough vocabulary',
          'Poor handwriting',
          'Poor time management — spending too long on reading and rushing writing',
          'Not reading the texts carefully enough',
        ],
        correct: 2,
        explanation:
          'Poor time management is the most common cause of underperformance. Students who over-invest in reading answers leave themselves insufficient time for writing, which is worth half the paper (40 marks).',
      },
      {
        id: 'ocr-lc1-m10-q4',
        question:
          'According to the exam strategy, how long should you spend planning Q6?',
        options: ['1 minute', '3 minutes', '5 minutes', '10 minutes'],
        correct: 2,
        explanation:
          'Allow approximately 5 minutes to plan Q6. A clear plan ensures your extended writing task has a logical structure, coherent argument, and strong opening and closing — all of which are rewarded by AO5.',
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Component 01 Assessment Questions (20 questions)
// ═══════════════════════════════════════════════════════════════════════════════

const c1Assessment: CourseQuiz[] = [
  {
    id: 'ocr-lc1-assess-1',
    question: 'How long is OCR Component 01 and how many marks is it worth?',
    options: [
      '1 hour 45 minutes, 60 marks',
      '2 hours, 80 marks',
      '1 hour 55 minutes, 80 marks',
      '2 hours, 100 marks',
    ],
    correct: 1,
    explanation:
      'OCR Component 01 is 2 hours long and worth 80 marks — 40 for reading (Section A) and 40 for writing (Section B).',
  },
  {
    id: 'ocr-lc1-assess-2',
    question: 'Which Assessment Objective tests comparison across two texts?',
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correct: 2,
    explanation:
      'AO3 tests the ability to compare writers\' ideas and perspectives across two or more texts.',
  },
  {
    id: 'ocr-lc1-assess-3',
    question: 'What types of source texts appear in Section A?',
    options: [
      '19th-century fiction extracts',
      'Two non-fiction texts from the 20th and/or 21st century',
      'Shakespearean speeches',
      'Modern poetry',
    ],
    correct: 1,
    explanation:
      'OCR Component 01 Section A contains two non-fiction texts from the 20th and/or 21st century, linked by a common theme.',
  },
  {
    id: 'ocr-lc1-assess-4',
    question: 'What is the difference between retrieval and inference?',
    options: [
      'Retrieval uses quotations; inference does not',
      'Retrieval finds explicit information; inference draws conclusions from implied meaning',
      'They are the same skill',
      'Inference is easier than retrieval',
    ],
    correct: 1,
    explanation:
      'Retrieval locates directly stated information. Inference involves reading between the lines to draw conclusions about what is suggested but not explicitly stated.',
  },
  {
    id: 'ocr-lc1-assess-5',
    question: 'What framework should you use for language analysis?',
    options: [
      'Introduction–Body–Conclusion',
      'What–How–Why',
      'Point–Counterpoint–Resolution',
      'Describe–Compare–Evaluate',
    ],
    correct: 1,
    explanation:
      'What–How–Why: identify the technique (What), explain how it works at word level (How), and analyse the effect on the reader (Why).',
  },
  {
    id: 'ocr-lc1-assess-6',
    question: 'What is "feature-spotting" and why is it a problem?',
    options: [
      'Identifying key themes, which is always rewarded',
      'Naming techniques without explaining their effect, which earns minimal credit',
      'Spotting structural features, which is the highest skill',
      'Finding quotations quickly, which is a useful exam technique',
    ],
    correct: 1,
    explanation:
      'Feature-spotting means identifying a technique (e.g. "The writer uses alliteration") without analysing its effect. OCR examiners reward analysis of effect, not mere identification.',
  },
  {
    id: 'ocr-lc1-assess-7',
    question: 'What does an "integrated comparison" require?',
    options: [
      'Writing about each text in separate sections',
      'Discussing both texts within the same paragraphs using comparative connectives',
      'Only comparing the texts\' word counts',
      'Quoting from one text at a time',
    ],
    correct: 1,
    explanation:
      'An integrated comparison discusses both texts within the same paragraph, using comparative language to link analysis of each writer\'s methods and ideas.',
  },
  {
    id: 'ocr-lc1-assess-8',
    question: 'What is the key difference between analysis and evaluation?',
    options: [
      'Analysis is harder than evaluation',
      'Analysis explains what the writer does; evaluation judges how effectively they do it',
      'Evaluation uses quotations; analysis does not',
      'They test the same Assessment Objective',
    ],
    correct: 1,
    explanation:
      'Analysis (AO2) explains how techniques work. Evaluation (AO4) judges how effectively those techniques achieve the writer\'s purpose. The word "effective" should appear frequently in evaluation answers.',
  },
  {
    id: 'ocr-lc1-assess-9',
    question: 'Why do balanced evaluation answers score higher?',
    options: [
      'Because the mark scheme requires disagreement',
      'Because they demonstrate critical thinking by considering multiple perspectives',
      'Because examiners prefer long answers',
      'Because every text has equal strengths and weaknesses',
    ],
    correct: 1,
    explanation:
      'Balanced answers show critical maturity — the ability to consider where a writer succeeds and where they might be less effective, which is rewarded in the highest mark bands.',
  },
  {
    id: 'ocr-lc1-assess-10',
    question: 'What does "bias" mean in non-fiction reading?',
    options: [
      'A factual error in the text',
      'A one-sided perspective that favours a particular viewpoint while downplaying opposition',
      'The use of formal language',
      'A text written in first person',
    ],
    correct: 1,
    explanation:
      'Bias is a partial perspective that favours one viewpoint. Recognising bias — including what is omitted from a text — is essential for critical reading.',
  },
  {
    id: 'ocr-lc1-assess-11',
    question: 'How many writing tasks must you complete in Section B?',
    options: ['One', 'Two', 'Three', 'A choice from three'],
    correct: 1,
    explanation:
      'Section B requires two transactional writing tasks: a shorter task (Q5, 16 marks) and a longer task (Q6, 24 marks). Both are compulsory.',
  },
  {
    id: 'ocr-lc1-assess-12',
    question: 'When should you use "Yours faithfully" in a formal letter?',
    options: [
      'When you know the recipient\'s name',
      'When you have used "Dear Sir/Madam"',
      'In all formal letters',
      'Only in letters to friends',
    ],
    correct: 1,
    explanation:
      '"Yours faithfully" is used when you do not know the recipient\'s name (Dear Sir/Madam). "Yours sincerely" is used when you have used their name.',
  },
  {
    id: 'ocr-lc1-assess-13',
    question: 'What distinguishes a report from an article?',
    options: [
      'Reports are always shorter',
      'Reports use subheadings, third-person voice, and a recommendations section',
      'Articles are always formal',
      'There is no difference in form',
    ],
    correct: 1,
    explanation:
      'Reports are distinguished by subheadings, third-person voice, and a recommendations section. These conventions signal a formal, evidence-based approach.',
  },
  {
    id: 'ocr-lc1-assess-14',
    question: 'What are ethos, pathos, and logos?',
    options: [
      'Three types of non-fiction text',
      'Three classical modes of persuasion: credibility, emotion, and logic',
      'Three paragraph structures for essays',
      'Three punctuation rules',
    ],
    correct: 1,
    explanation:
      'Ethos (credibility), pathos (emotion), and logos (logic) are the three classical modes of persuasion. Effective persuasive writing uses all three.',
  },
  {
    id: 'ocr-lc1-assess-15',
    question: 'When is a semicolon used correctly?',
    options: [
      'To introduce a list',
      'To link two closely related independent clauses',
      'After a subordinate clause',
      'Before a conjunction',
    ],
    correct: 1,
    explanation:
      'A semicolon links two closely related independent clauses. Both sides must be able to stand as complete sentences.',
  },
  {
    id: 'ocr-lc1-assess-16',
    question: 'What is the correct use of "its" vs "it\'s"?',
    options: [
      'They are interchangeable',
      '"It\'s" = it is; "its" = belonging to it',
      '"Its" = it is; "it\'s" = belonging to it',
      '"It\'s" is always incorrect',
    ],
    correct: 1,
    explanation:
      '"It\'s" is a contraction of "it is." "Its" is the possessive form meaning "belonging to it." This is one of the most common errors in student writing.',
  },
  {
    id: 'ocr-lc1-assess-17',
    question: 'What is "register" in transactional writing?',
    options: [
      'The number of paragraphs',
      'The level of formality, determined by audience and purpose',
      'A list of techniques',
      'The topic of the writing',
    ],
    correct: 1,
    explanation:
      'Register refers to the level of formality in writing, shaped by audience and purpose. Mismatching register is one of the fastest ways to lose marks.',
  },
  {
    id: 'ocr-lc1-assess-18',
    question: 'What should you do in the first 10 minutes of the exam?',
    options: [
      'Start answering Q1 immediately',
      'Read both source texts carefully, underlining key ideas and techniques',
      'Plan your writing tasks',
      'Write your name and candidate number',
    ],
    correct: 1,
    explanation:
      'Spending 10 minutes reading both texts carefully — underlining key techniques, powerful word choices, and noting differences — provides a foundation for all reading answers.',
  },
  {
    id: 'ocr-lc1-assess-19',
    question: 'What is a "connotation"?',
    options: [
      'The dictionary definition of a word',
      'The associations and emotional overtones a word carries beyond its literal meaning',
      'A grammatical error',
      'A type of sentence structure',
    ],
    correct: 1,
    explanation:
      'Connotation refers to the associations, emotions, and ideas a word suggests beyond its literal dictionary definition (denotation). Exploring connotations is central to effective language analysis.',
  },
  {
    id: 'ocr-lc1-assess-20',
    question: 'Why is poor time management the biggest cause of underperformance?',
    options: [
      'Because students write too quickly',
      'Because students over-invest in reading answers and rush writing, which is worth half the paper',
      'Because the exam is too short',
      'Because students finish early and cannot check their work',
    ],
    correct: 1,
    explanation:
      'Students who spend too long perfecting reading answers leave insufficient time for writing, which is worth 40 marks (half the paper). A timing plan is essential.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// OCR GCSE English Language (J351) — Component 02 Modules
// Exploring Effects and Impact
// ═══════════════════════════════════════════════════════════════════════════════

const c2Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Component 02 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m1',
    title: 'Component 02 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>OCR GCSE English Language — Component 02: Exploring Effects and Impact</h2>

<p>Component 02 is the second examined component of the OCR GCSE English Language specification (J351). It focuses on <strong>fiction reading</strong> and <strong>imaginative/creative writing</strong>. The paper is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of the total GCSE. You have <strong>2 hours</strong> to complete two sections.</p>

<div class="key-term"><strong>Key Term: Imaginative/Creative Writing</strong> — Writing that prioritises originality, descriptive power, and narrative craft. This includes descriptive writing (evoking a scene, person, or atmosphere) and narrative writing (telling a story with character, setting, and plot). Unlike transactional writing, the primary purpose is to create an imaginative experience for the reader.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A — Reading (40 marks):</strong> You are given one unseen fiction extract and answer questions testing comprehension, language analysis, structural analysis, and evaluation.</li>
  <li><strong>Section B — Writing (40 marks):</strong> One extended creative/imaginative writing task — either a narrative or a descriptive piece.</li>
</ul>

<h3>Section A — Reading Question Breakdown</h3>
<p>OCR structures the fiction reading section to progress from basic comprehension to sophisticated critical analysis:</p>
<ol>
  <li><strong>Q1 (a–c) — Retrieval and inference (various marks):</strong> Short questions testing your ability to identify explicit details and draw inferences from the fiction extract.</li>
  <li><strong>Q2 — Language analysis (6–8 marks):</strong> Analyse how the writer uses language to create a specific effect (e.g. to build tension, create atmosphere, convey character).</li>
  <li><strong>Q3 — Structure analysis (6–8 marks):</strong> Analyse how the writer uses structural features to shape meaning and engage the reader.</li>
  <li><strong>Q4 — Evaluation (12–14 marks):</strong> Evaluate how effectively the writer achieves a specified purpose, supporting your judgement with textual evidence.</li>
</ol>

<h3>Section B — Writing</h3>
<p>You will be given a choice of creative writing tasks — typically one narrative prompt and one descriptive prompt. You choose <strong>one</strong>.</p>
<ul>
  <li><strong>Narrative:</strong> Write a story based on a given prompt, image, or opening line.</li>
  <li><strong>Descriptive:</strong> Write a description inspired by a given prompt, image, or scenario.</li>
</ul>

<h3>Assessment Objectives for Component 02</h3>
<ul>
  <li><strong>AO1</strong> — Identify and interpret explicit and implicit information and ideas.</li>
  <li><strong>AO2</strong> — Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.</li>
  <li><strong>AO4</strong> — Evaluate texts critically and support this with appropriate textual references.</li>
  <li><strong>AO5</strong> — Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register. Organise information and ideas using structural and grammatical features.</li>
  <li><strong>AO6</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Component 02 differs from Component 01 in that it tests <strong>structure analysis</strong> as a separate question (Q3). This means you must be able to discuss structural techniques — such as shifts in focus, narrative perspective, pacing, and the use of beginnings, middles, and endings — distinctly from language. Prepare for this by practising structural analysis as a standalone skill.</div>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0–10 min:</strong> Read the fiction extract carefully, annotating language choices and structural features.</li>
  <li><strong>10–20 min:</strong> Answer Q1 (retrieval and inference).</li>
  <li><strong>20–35 min:</strong> Answer Q2 (language analysis).</li>
  <li><strong>35–50 min:</strong> Answer Q3 (structure analysis).</li>
  <li><strong>50–65 min:</strong> Answer Q4 (evaluation).</li>
  <li><strong>65–75 min:</strong> Choose your writing task and plan it thoroughly.</li>
  <li><strong>75–115 min:</strong> Write your creative piece.</li>
  <li><strong>115–120 min:</strong> Proofread your writing.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too little time planning the creative writing task. Students who dive straight into writing often produce unfocused, rambling narratives or descriptions that lose direction. A 10-minute plan — covering structure, key images, opening, climax, and ending — is an investment that pays dividends in coherence and quality.</div>

<h3>How Component 02 Differs from Component 01</h3>
<ul>
  <li><strong>Fiction vs non-fiction</strong> — Component 02 uses fiction extracts; Component 01 uses non-fiction.</li>
  <li><strong>Structure question</strong> — Component 02 has a dedicated structural analysis question that Component 01 does not.</li>
  <li><strong>No comparison</strong> — Component 02 has only one source text, so there is no AO3 comparison question.</li>
  <li><strong>Creative vs transactional writing</strong> — Component 02 asks for imaginative/creative writing; Component 01 asks for transactional writing.</li>
  <li><strong>One writing task</strong> — Component 02 has a single extended writing task, whereas Component 01 has two.</li>
</ul>

<div class="key-term"><strong>Key Term: Structural Analysis</strong> — Examining how a writer organises and sequences their text to create effects. This includes the opening and ending, shifts in focus or perspective, pacing, chronology, paragraph length, and how the reader's attention is directed through the text.</div>


<h3>Worked Example: Character Inference in Action</h3>
<p><strong>Practice Extract:</strong></p>
<div class="text-extract">
Marcus had not spoken to his father in three years. The postcard arrived on a Tuesday — a beach scene, generic and impersonal — with a single line of handwriting. "I'm sorry." No signature. Marcus read it once, then twice, then placed it on the kitchen counter next to the empty coffee mug he'd left that morning. He left it there for a week. When his mother found it, she wept. Marcus felt nothing at all.
</div>

<p><strong>Inference Question (examiner style):</strong> What can we infer about Marcus's feelings toward his father's attempt at reconciliation?</p>

<p><strong>Model Response (Grade 9):</strong></p>
<div class="model-answer">
Marcus's decision to leave the postcard untouched on the counter suggests that a single apology — unsigned, impersonal — is insufficient to bridge three years of silence. His emotional numbness (we're told "he felt nothing at all") indicates that hurt has calcified into indifference. The contrast with his mother's tears sharpens this reading: she still grieves the relationship; he has apparently moved beyond grief into emotional distance. The fact that he leaves the postcard where she will find it, rather than disposing of it, suggests ambivalence — he cannot forgive, but he cannot quite reject the gesture either.
</div>

<p><strong>Why This Scores Well:</strong> The response uses textual evidence (specific words, actions, contrasts). It interprets those details to reveal emotional subtext. It acknowledges complexity and ambiguity rather than settling for one-dimensional conclusions.</p>

<h3>Character Inference Framework</h3>
<p><strong>When answering questions about character, follow this pattern:</strong></p>
<ol>
<li><strong>Identify what the character does/says:</strong> Quote the action or dialogue. "Marcus places the postcard on the counter."</li>
<li><strong>Consider the alternatives the character rejects:</strong> He could have read it repeatedly, framed it, hidden it, destroyed it. He does none of these. Rejection of alternatives tells us something.</li>
<li><strong>Layer in physical or emotional details:</strong> "He felt nothing at all" contradicts what we might expect — relief, anger, longing. The contradiction reveals depth.</li>
<li><strong>Consider context:</strong> Three years of silence precedes this moment. That time matters. A postcard immediately after the argument means something different than one after a decade.</li>
<li><strong>Draw your inference:</strong> Based on actions, rejections, and contrasts, what emotional truth does the character embody?</li>
</ol>

<h3>Common Inference Mistakes</h3>
<div class="common-mistake"><strong>Mistake 1: Over-interpreting.</strong> Not every detail is symbolic. A blue door is usually just a blue door. But when a blue door appears repeatedly, it might carry meaning. Ask: Is this detail repeated or emphasized?</div>
<div class="common-mistake"><strong>Mistake 2: Ignoring contradiction.</strong> If a character says they are angry but laughs, the contradiction is the point. Don't smooth it away; explore it.</div>
<div class="common-mistake"><strong>Mistake 3: Confusing what the reader knows with what the character knows.</strong> The reader might understand why the character is acting as they are, but the character might not. This gap is part of the text's meaning.</div>
<div class="common-mistake"><strong>Mistake 4: Stating the obvious.</strong> "Ellis is sad because she is crying." Grade 9 answers explain <em>why</em> she is sad and what that emotional state reveals about her character or situation.</div>

<h3>Practice: Character Inference Task</h3>
<p><strong>Extract (provided):</strong></p>
<div class="text-extract">
When the job offer arrived, Priya read the letter five times. She did not open the email with the contract. She did not call her parents. Instead, she went to the old oak tree at the end of her street — the one where she and her friends had carved their initials ten years ago — and sat on the lowest branch until dark. When she finally came home, her mother asked if she had good news. Priya smiled and said nothing.
</div>

<p><strong>Inference Question:</strong> What can we infer about Priya's emotional state regarding the job offer?</p>

<p><strong>Model Response:</strong></p>
<div class="model-answer">
Priya's reluctance to engage with the formal elements of the offer — she reads the letter repeatedly but avoids opening the contract, does not share the news with her family — suggests that this opportunity creates anxiety rather than joy. Her retreat to the oak tree, a site of nostalgic memory and lost youth, implies that she is grappling with what acceptance would mean: a departure from her past, a step into adulthood that perhaps frightens her. Her smile to her mother followed by silence indicates a performance of happiness masking ambivalence or fear. The repetition of her reading (five times) suggests she is searching for a reason to refuse it, or wrestling with a decision that feels anything but straightforward.
</div>

`,
    quiz: [
      {
        id: 'ocr-lc2-m1-q1',
        question: 'How long do students have to complete OCR Component 02?',
        options: [
          '1 hour 30 minutes',
          '1 hour 45 minutes',
          '1 hour 55 minutes',
          '2 hours',
        ],
        correct: 3,
        explanation:
          'OCR Component 02 is 2 hours long (120 minutes). This should be divided between reading (approximately 65 minutes) and writing (approximately 50 minutes), with 5 minutes for proofreading.',
      },
      {
        id: 'ocr-lc2-m1-q2',
        question: 'What type of source text appears in Section A of Component 02?',
        options: [
          'Two non-fiction texts',
          'One unseen fiction extract',
          'A poem and a prose text',
          'A non-fiction and a fiction text',
        ],
        correct: 1,
        explanation:
          'Component 02 Section A contains one unseen fiction extract. You answer a series of questions testing comprehension, language analysis, structural analysis, and evaluation.',
      },
      {
        id: 'ocr-lc2-m1-q3',
        question: 'What distinguishes Component 02 from Component 01 in terms of reading questions?',
        options: [
          'Component 02 has a comparison question',
          'Component 02 has a dedicated structural analysis question',
          'Component 02 has more retrieval questions',
          'Component 02 tests only language, not structure',
        ],
        correct: 1,
        explanation:
          'Component 02 includes a dedicated question on structural analysis (Q3), which tests how the writer organises and sequences their text. Component 01 does not have this as a separate question.',
      },
      {
        id: 'ocr-lc2-m1-q4',
        question: 'How many writing tasks must you complete in Section B of Component 02?',
        options: ['One from a choice', 'Two compulsory tasks', 'Three short tasks', 'One compulsory task'],
        correct: 0,
        explanation:
          'Section B offers a choice between a narrative and a descriptive writing task. You choose and complete one extended creative piece worth 40 marks.',
      },
      {
        id: 'ocr-lc2-m1-q5',
        question: 'Why is planning especially important for the creative writing task?',
        options: [
          'Because the examiner marks your plan separately',
          'Because unplanned writing often becomes unfocused and rambling, losing direction and coherence',
          'Because you must submit your plan with your answer',
          'Because planning takes up time that could be spent writing',
        ],
        correct: 1,
        explanation:
          'A thorough plan (covering structure, key images, opening, climax, and ending) prevents unfocused, rambling writing. It ensures coherence and quality, which are rewarded by AO5.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Reading Fiction: Comprehension & Character Inference
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m2',
    title: 'Reading Fiction: Comprehension & Character Inference',
    duration: '50 min',
    content: `
<h2>Comprehension and Inference in Fiction — Understanding Character, Setting, and Situation</h2>

<p>The opening questions of Component 02 Section A test your ability to retrieve information and make inferences from a fiction extract. Fiction inference often centres on <strong>character</strong> — what a character thinks, feels, and is like — as well as <strong>setting</strong> and <strong>atmosphere</strong>.</p>

<div class="key-term"><strong>Key Term: Characterisation</strong> — The methods a writer uses to create and reveal a character. This includes what the character says (dialogue), what they do (actions), what they think (internal monologue), how they are described (appearance), and how others respond to them (reactions).</div>

<h3>Practice Extract</h3>
<div class="text-extract">Ellis stood at the kitchen window, watching the rain slide down the glass in slow, uncertain trails. Behind her, the radio murmured the football results to an empty room. She had not moved for twenty minutes. The tea beside her had gone cold, a skin forming on its surface like a tiny frozen lake. When her phone buzzed on the counter, she flinched — then let it ring. Three times it buzzed before falling silent. She picked it up, read the name on the screen, and placed it face-down on the counter without answering. Her jaw tightened. She turned back to the window.<div class="source">From an unpublished novel extract</div></div>

<h3>Retrieval in Fiction</h3>
<p>A typical retrieval question might read: <em>"How long has Ellis been standing at the window?"</em></p>
<p>Answer: Twenty minutes. This is directly stated in the text. No elaboration needed.</p>

<h3>Inference from Character Behaviour</h3>
<p>A more demanding question might read: <em>"What impressions do you get of Ellis's state of mind? Use evidence from the text to support your answer."</em></p>

<div class="model-answer"><strong>Model Answer:</strong>
<p>Ellis appears to be in a state of emotional distress or deep preoccupation. The detail that she "had not moved for twenty minutes" suggests she is paralysed by thought or emotion — her stillness is not restful but heavy, as if she is unable to act. The cold tea with "a skin forming on its surface like a tiny frozen lake" reinforces this impression: the simile emphasises stagnation, suggesting that time has passed without Ellis engaging with the world around her.</p>

<p>Her response to the phone call is particularly revealing. The verb "flinched" implies the call startles her, but also that she associates the caller with something painful or unwanted. Her deliberate decision to let it ring, read the name, and place it "face-down on the counter" suggests avoidance — she knows who is calling and consciously refuses to engage. The physical detail of her jaw tightening conveys suppressed emotion: anger, determination, or the effort of holding back tears. The final sentence — "She turned back to the window" — returns her to her original position, creating a sense of circularity that implies she is trapped in her emotional state, unable to move forward.</p></div>

<h3>The Five Methods of Characterisation</h3>
<p>When inferring character, look for these five channels:</p>
<ol>
  <li><strong>Actions</strong> — What does the character do? Ellis places the phone face-down — a deliberate, controlled action.</li>
  <li><strong>Speech/Dialogue</strong> — What does the character say (or not say)? Ellis does not speak at all, which itself reveals isolation.</li>
  <li><strong>Thoughts</strong> — If the narrative gives access to internal monologue, what is the character thinking?</li>
  <li><strong>Appearance</strong> — Physical description can reveal emotion, status, or personality.</li>
  <li><strong>Reactions of others</strong> — How do other characters respond to them? (Not always available in short extracts.)</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In fiction extracts, <strong>what a character does NOT do</strong> can be as revealing as what they do. Ellis does not answer the phone, does not drink her tea, does not move. These absences of action are deliberate authorial choices that reveal her emotional state. The best inference answers recognise and explore these gaps.</div>

<h3>Inferring Setting and Atmosphere</h3>
<p>Fiction extracts often use setting to mirror or contrast with character emotion:</p>
<ul>
  <li><strong>Pathetic fallacy</strong> — The rain in the extract mirrors Ellis's melancholy.</li>
  <li><strong>Domestic detail</strong> — The cold tea, the murmuring radio, and the empty room create an atmosphere of loneliness and neglect.</li>
  <li><strong>Sensory detail</strong> — What can the character (and reader) see, hear, feel, smell, or taste? These details build the world of the extract.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Making inferences that are not supported by the text. It would be wrong to say "Ellis is angry because her partner has cheated on her" — the text does not provide this information. Inferences must be grounded in textual evidence. You can say "Ellis appears to be avoiding someone" because the evidence supports this, but you cannot invent backstory.</div>

<h3>Key Inference Phrases for Fiction</h3>
<ul>
  <li><em>This suggests the character feels...</em></li>
  <li><em>The writer implies that...</em></li>
  <li><em>The reader can infer from this action that...</em></li>
  <li><em>This detail conveys a sense of...</em></li>
  <li><em>The absence of [speech/movement] suggests...</em></li>
</ul>

<div class="key-term"><strong>Key Term: Pathetic Fallacy</strong> — A literary device in which the natural world (especially weather) reflects or mirrors the emotions of a character. For example, a storm during a moment of anger, or sunshine during a moment of joy. It is a subset of personification.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m2-q1',
        question: 'What are the five methods of characterisation?',
        options: [
          'Plot, setting, theme, tone, mood',
          'Actions, speech, thoughts, appearance, reactions of others',
          'Simile, metaphor, personification, alliteration, onomatopoeia',
          'First person, second person, third person limited, third person omniscient, unreliable narrator',
        ],
        correct: 1,
        explanation:
          'The five methods of characterisation are: what a character does (actions), says (speech/dialogue), thinks (thoughts), looks like (appearance), and how others respond to them (reactions).',
      },
      {
        id: 'ocr-lc2-m2-q2',
        question: 'In the practice extract, what does Ellis placing the phone "face-down" suggest?',
        options: [
          'She is tidying the kitchen',
          'She is deliberately avoiding or rejecting the caller',
          'She does not know how to use the phone',
          'The phone is broken',
        ],
        correct: 1,
        explanation:
          'Placing the phone face-down after reading the caller\'s name is a deliberate act of avoidance — she knows who is calling and consciously refuses to engage. This reveals suppressed emotion and conflict.',
      },
      {
        id: 'ocr-lc2-m2-q3',
        question: 'What is "pathetic fallacy"?',
        options: [
          'A logical error in an argument',
          'A literary device where weather or nature mirrors a character\'s emotions',
          'A type of unreliable narration',
          'Exaggeration for comic effect',
        ],
        correct: 1,
        explanation:
          'Pathetic fallacy is when the natural world (especially weather) reflects a character\'s emotions — such as rain mirroring sadness or a storm accompanying anger.',
      },
      {
        id: 'ocr-lc2-m2-q4',
        question: 'Why should you pay attention to what a character does NOT do?',
        options: [
          'Because the examiner will ask about it specifically',
          'Because absences of action are deliberate authorial choices that reveal character',
          'Because inaction is always more important than action',
          'Because it helps you write longer answers',
        ],
        correct: 1,
        explanation:
          'What a character chooses not to do (not answering a phone, not speaking, not moving) is a deliberate authorial choice that can reveal emotional state, conflict, or personality. Recognising these gaps demonstrates sophisticated reading.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Language Analysis in Fiction
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m3',
    title: 'Language Analysis in Fiction',
    duration: '55 min',
    content: `
<h2>Analysing Language in Fiction — How Writers Create Atmosphere, Character, and Tension</h2>

<p>The language analysis question in Component 02 (Q2) typically asks you to examine how a writer uses language to create a specific effect — often <strong>atmosphere</strong>, <strong>tension</strong>, or <strong>characterisation</strong>. This question is worth <strong>6–8 marks</strong> and tests <strong>AO2</strong>.</p>

<div class="key-term"><strong>Key Term: Atmosphere</strong> — The mood or feeling that pervades a scene. Writers create atmosphere through setting, word choice, imagery, and pacing. Common atmospheres include: threatening, tranquil, claustrophobic, melancholic, euphoric, eerie, and oppressive.</div>

<h3>Practice Extract</h3>
<div class="text-extract">The corridor stretched ahead of her, longer than it had any right to be. The fluorescent light above the fire exit had begun to flicker — a small, insistent pulse that turned the walls from grey to briefly, horribly white. Her footsteps sounded too loud. She was sure they had not sounded this loud on the way in. The door at the far end was closed, though she could have sworn she had left it open. She stopped. Listened. Nothing. And yet the absence of sound felt deliberate, as if the silence were holding its breath.<div class="source">From an unpublished short story</div></div>

<h3>Analysing Language for Atmosphere and Tension</h3>
<p>Use the same <strong>What–How–Why</strong> framework from Component 01, but focus on fiction-specific effects:</p>

<div class="model-answer"><strong>Model Answer:</strong>
<p>The writer creates an intensely unsettling atmosphere through language that personifies the environment and distorts the protagonist's perceptions. The corridor "stretched ahead of her, longer than it had any right to be" — the personification of the corridor having "rights" implies it is behaving unnaturally, as if the building itself is working against her. The phrase "any right to be" also carries a colloquial, almost indignant tone, which grounds the supernatural unease in a recognisable human reaction.</p>

<p>The flickering light is described as "a small, insistent pulse," and the word <strong>"pulse"</strong> is particularly effective. Its connotations of a heartbeat transform the mechanical malfunction into something organic and alive, suggesting the building has a sinister vitality. The phrase "turned the walls from grey to briefly, horribly white" uses the adverb <strong>"horribly"</strong> to inject terror into something as mundane as fluorescent lighting — the whiteness is not merely bright but actively distressing, as if the light is exposing something that should remain hidden.</p>

<p>The climax of the passage — <em>"the silence were holding its breath"</em> — is a masterful use of personification. Silence is given agency and intention; it is not merely an absence of sound but a <em>presence</em> that is waiting. The phrase "holding its breath" implies anticipation — something is about to happen. This transforms the reader from a passive observer into someone braced for an event, mirroring the protagonist's fear.</p></div>

<h3>Fiction-Specific Language Techniques</h3>
<ul>
  <li><strong>Sensory imagery</strong> — Visual, auditory, tactile, olfactory, gustatory details that immerse the reader in the scene.</li>
  <li><strong>Personification</strong> — Giving human qualities to non-human things. Particularly powerful in gothic or horror writing.</li>
  <li><strong>Pathetic fallacy</strong> — Weather/environment reflecting character emotion.</li>
  <li><strong>Symbolism</strong> — Objects or details that represent broader ideas (e.g. a closed door symbolising blocked escape).</li>
  <li><strong>Foreshadowing</strong> — Hints or clues about what will happen later. Creates dramatic irony and tension.</li>
  <li><strong>Semantic field</strong> — A group of words related to the same theme (e.g. words related to death, confinement, or nature).</li>
  <li><strong>Juxtaposition</strong> — Placing contrasting elements side by side (e.g. beauty and decay, safety and danger).</li>
  <li><strong>Shifts in register</strong> — Moving between formal and informal language to reflect character or narrative tone.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing fiction language, always connect your analysis to the <strong>reader's experience</strong>. Don't just say what the technique does in isolation — explain how it makes the reader <em>feel</em>. Fear, sympathy, unease, anticipation, disgust — these are the emotional responses that fiction is designed to create. Name the emotion and explain how the language triggers it.</div>

<h3>Analysing Dialogue</h3>
<p>Fiction extracts often include dialogue, which requires specific analytical attention:</p>
<ul>
  <li><strong>What is said</strong> — The content of the speech reveals character, conflict, and relationship dynamics.</li>
  <li><strong>How it is said</strong> — Reporting verbs (whispered, snapped, muttered) convey tone and emotion.</li>
  <li><strong>What is NOT said</strong> — Pauses, unfinished sentences, and evasive answers can be more revealing than what is spoken.</li>
  <li><strong>Power dynamics</strong> — Who speaks more? Who interrupts? Who asks questions and who gives orders?</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing language analysis with structure analysis. Language analysis focuses on <em>word-level</em> and <em>phrase-level</em> choices — the writer's diction, imagery, and figurative language. Structure analysis (covered in the next module) focuses on how the text is <em>organised</em> — paragraph order, shifts in focus, pacing, and narrative sequence. OCR tests these as separate questions, so you must keep them distinct.</div>

<h3>Building an Analytical Vocabulary for Fiction</h3>
<p>These verbs and phrases strengthen fiction language analysis:</p>
<ul>
  <li><em>The writer evokes a sense of...</em></li>
  <li><em>This imagery conjures...</em></li>
  <li><em>The diction conveys...</em></li>
  <li><em>The semantic field of [death/confinement/nature] reinforces...</em></li>
  <li><em>The personification imbues the setting with...</em></li>
  <li><em>The writer's use of [technique] unsettles the reader by...</em></li>
  <li><em>The shift in tone from... to... mirrors the character's...</em></li>
</ul>

<div class="key-term"><strong>Key Term: Semantic Field</strong> — A group of words within a text that are related in meaning and contribute to a dominant theme or atmosphere. For example, words like "pulse," "breath," "alive," and "heartbeat" form a semantic field of life/vitality, which, when applied to an inanimate building, creates an unsettling effect.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m3-q1',
        question:
          'In the practice extract, why is the word "pulse" effective in describing the flickering light?',
        options: [
          'It is a technical term for electrical faults',
          'Its connotations of a heartbeat make the building seem organic and alive',
          'It describes the speed of the flickering',
          'It is a synonym for "flash"',
        ],
        correct: 1,
        explanation:
          '"Pulse" carries connotations of a heartbeat and organic life. Applying it to a fluorescent light transforms a mechanical malfunction into something that feels alive and sinister.',
      },
      {
        id: 'ocr-lc2-m3-q2',
        question:
          'What is the difference between language analysis and structure analysis?',
        options: [
          'There is no difference — they test the same skill',
          'Language analysis focuses on word-level choices; structure analysis focuses on text organisation',
          'Structure analysis is always worth more marks',
          'Language analysis only applies to non-fiction',
        ],
        correct: 1,
        explanation:
          'Language analysis examines word-level and phrase-level choices (diction, imagery, figurative language). Structure analysis examines how the text is organised (paragraph order, shifts in focus, pacing). OCR tests these separately in Component 02.',
      },
      {
        id: 'ocr-lc2-m3-q3',
        question: 'What is a "semantic field"?',
        options: [
          'The literal meaning of a word',
          'A group of words related in meaning that contribute to a dominant theme or atmosphere',
          'A type of metaphor',
          'The setting of a fiction extract',
        ],
        correct: 1,
        explanation:
          'A semantic field is a group of related words that collectively build a particular theme or atmosphere. Identifying semantic fields is a powerful analytical technique for fiction.',
      },
      {
        id: 'ocr-lc2-m3-q4',
        question:
          'When analysing fiction language, what should you always connect your analysis to?',
        options: [
          'The writer\'s biography',
          'The reader\'s emotional experience',
          'The historical context of the text',
          'The number of techniques used',
        ],
        correct: 1,
        explanation:
          'Fiction language analysis should always connect to the reader\'s experience — naming the emotions the language creates (fear, sympathy, unease, anticipation) and explaining how specific techniques trigger those responses.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Structural Analysis in Fiction
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m4',
    title: 'Structural Analysis in Fiction',
    duration: '55 min',
    content: `
<h2>Analysing Structure — How Writers Organise Fiction to Create Effects</h2>

<p>The structure question (Q3) in Component 02 is worth <strong>6–8 marks</strong> and tests <strong>AO2</strong>, but with a specific focus on how the text is <em>organised</em> rather than how individual words create effects. This is one of the most challenging questions for students because structure can feel abstract — but with the right framework, it becomes highly accessible.</p>

<div class="key-term"><strong>Key Term: Structure</strong> — The way a text is organised and sequenced to guide the reader's experience. In fiction, structure encompasses the order of events, shifts in focus, changes in pace, narrative perspective, paragraph length, and the relationship between the opening and ending.</div>

<h3>What Structure ISN'T</h3>
<p>Before we discuss what to analyse, let's be clear about what structure analysis is <strong>not</strong>:</p>
<ul>
  <li>It is NOT language analysis — do not discuss metaphors, similes, or word connotations here.</li>
  <li>It is NOT summarising what happens — do not retell the plot.</li>
  <li>It IS about <em>how the text is arranged</em> and what effect that arrangement has on the reader.</li>
</ul>

<h3>The Five Key Structural Techniques</h3>

<h4>1. Shifts in Focus</h4>
<p>How does the writer move the reader's attention? Common shifts include:</p>
<ul>
  <li><strong>Wide to narrow</strong> — Opening with a panoramic description before zooming into a specific character or detail (cinematic zoom).</li>
  <li><strong>External to internal</strong> — Moving from describing actions and setting to revealing a character's thoughts.</li>
  <li><strong>Present to past</strong> — Using flashback to provide context or contrast.</li>
  <li><strong>Character to character</strong> — Shifting perspective between different characters.</li>
</ul>

<h4>2. Pacing</h4>
<p>How does the writer control the speed at which events unfold?</p>
<ul>
  <li><strong>Short paragraphs and sentences</strong> — Speed up the pace; create urgency or tension.</li>
  <li><strong>Long descriptive passages</strong> — Slow the pace; build atmosphere or suspense.</li>
  <li><strong>Action sequences</strong> — Fast-paced; short clauses, active verbs.</li>
  <li><strong>Reflective passages</strong> — Slow-paced; internal monologue, complex sentences.</li>
</ul>

<h4>3. Opening and Ending</h4>
<p>How does the text begin and end? Consider:</p>
<ul>
  <li><strong>In medias res</strong> — Starting in the middle of the action to immediately engage the reader.</li>
  <li><strong>Cyclical structure</strong> — Ending where you began, creating a sense of entrapment or resolution.</li>
  <li><strong>Cliffhanger</strong> — Ending with unresolved tension to leave the reader unsatisfied or eager for more.</li>
  <li><strong>Resolution</strong> — Tying up loose ends to provide closure.</li>
</ul>

<h4>4. Contrast and Juxtaposition (Structural)</h4>
<p>How does the writer place contrasting sections next to each other? For example:</p>
<ul>
  <li>A peaceful domestic scene followed by a violent intrusion.</li>
  <li>A moment of hope immediately undercut by despair.</li>
  <li>Past happiness juxtaposed with present misery.</li>
</ul>

<h4>5. Withholding and Revealing Information</h4>
<p>How does the writer control what the reader knows and when?</p>
<ul>
  <li><strong>Foreshadowing</strong> — Planting clues that create anticipation.</li>
  <li><strong>Delayed reveal</strong> — Withholding key information to build suspense.</li>
  <li><strong>Dramatic irony</strong> — The reader knows something the character does not.</li>
</ul>

<h3>Practice Extract</h3>
<div class="text-extract">The morning was bright and impossibly still. Anna walked through the park, watching the ducks glide across the pond in lazy, contented circles. A child threw bread from the bridge, laughing each time a duck lunged for it. Anna smiled. She thought of her own children — how Tom used to insist on feeding every duck individually, as if they were guests at a dinner party.

Then her phone rang.

She answered it. Listened. The park was still bright, still impossibly still, but something had shifted — some invisible gear deep inside the machinery of the day had clicked into a different position. The ducks still glided. The child still laughed. But Anna no longer heard them. She lowered the phone slowly, the way you lower something precious that has broken beyond repair.<div class="source">From an unpublished short story</div></div>

<div class="model-answer"><strong>Model Answer (structural analysis):</strong>
<p>The writer structures the extract as a <strong>before-and-after</strong> narrative, pivoting on the single-sentence paragraph: <em>"Then her phone rang."</em> This sentence is structurally isolated — set apart from the descriptive paragraphs that surround it — giving it the weight and finality of a turning point. The brevity of the paragraph mimics the abruptness of the event: the call is sudden, interrupting the leisurely pacing of the opening.</p>

<p>The opening paragraph establishes a world of <strong>tranquillity and domestic warmth</strong>: the ducks, the laughing child, and Anna's memory of her own son. The structure deliberately lulls the reader into comfort. This makes the shift that follows far more powerful — by investing in the peaceful scene, the writer ensures the disruption has maximum emotional impact.</p>

<p>After the phone call, the writer <strong>repeats the imagery from the opening</strong> — "still bright, still impossibly still," "The ducks still glided. The child still laughed" — but reframes it through Anna's changed perception. This structural repetition-with-variation shows that the external world has not changed, but Anna's internal world has been shattered. The effect on the reader is devastating: the contrast between the unchanged setting and the transformed character forces us to feel the isolation of personal grief in a world that continues regardless.</p>

<p>The final image — lowering the phone "the way you lower something precious that has broken beyond repair" — structurally mirrors the careful, gentle pacing of the opening, but where the opening's slowness suggested contentment, the ending's slowness suggests devastation. The writer uses this <strong>cyclical pacing</strong> to create symmetry between happiness and loss.</p></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A one-sentence paragraph is ALWAYS a structural choice worth commenting on. Writers isolate sentences to give them emphasis, mark a turning point, or create dramatic pause. If you see a single-sentence paragraph in your exam extract, analyse why it has been separated from the rest of the text.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the story instead of analysing structure. "First, Anna walks through the park. Then, her phone rings. Then, she is sad" is plot summary, not structural analysis. Instead, discuss <em>why</em> the writer arranges events in this order and what effect it has: "The writer establishes tranquillity before the disruption to maximise the emotional impact of the shift."</div>

<div class="key-term"><strong>Key Term: In Medias Res</strong> — A Latin term meaning "in the middle of things." A narrative technique where the story begins in the middle of the action, without exposition or background. This immediately engages the reader by plunging them into a moment of conflict or tension.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m4-q1',
        question:
          'What is structural analysis in fiction?',
        options: [
          'Analysing the writer\'s word choices and figurative language',
          'Examining how the text is organised and sequenced to create effects on the reader',
          'Summarising the plot of the extract',
          'Identifying grammar and punctuation errors',
        ],
        correct: 1,
        explanation:
          'Structural analysis examines how a text is organised — including shifts in focus, pacing, opening/ending, contrasts, and how information is revealed — and the effects these choices have on the reader.',
      },
      {
        id: 'ocr-lc2-m4-q2',
        question:
          'Why does the writer use a single-sentence paragraph ("Then her phone rang.") in the practice extract?',
        options: [
          'Because the sentence is too short for a longer paragraph',
          'To isolate the moment as a structural turning point, giving it weight and abruptness',
          'Because all phone calls should be in separate paragraphs',
          'To save space',
        ],
        correct: 1,
        explanation:
          'The single-sentence paragraph isolates the moment, giving it the weight of a turning point. Its brevity mimics the abruptness of the event, marking the shift from tranquillity to devastation.',
      },
      {
        id: 'ocr-lc2-m4-q3',
        question: 'What is "in medias res"?',
        options: [
          'A type of metaphor',
          'Starting a narrative in the middle of the action without exposition',
          'Ending a story on a cliffhanger',
          'A shift from past to present tense',
        ],
        correct: 1,
        explanation:
          'In medias res (Latin for "in the middle of things") is a technique where the story begins mid-action, immediately engaging the reader without background explanation.',
      },
      {
        id: 'ocr-lc2-m4-q4',
        question:
          'What is the difference between plot summary and structural analysis?',
        options: [
          'They are the same thing',
          'Plot summary retells events; structural analysis explains why the writer arranged them in that order and the effect this has',
          'Structural analysis is always shorter',
          'Plot summary uses quotations; structural analysis does not',
        ],
        correct: 1,
        explanation:
          'Plot summary tells you what happens. Structural analysis explains WHY the writer arranges events in a particular order and what effect that arrangement has on the reader. Examiners do not reward summary.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Evaluating Fiction Writing
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m5',
    title: 'Evaluating Fiction: Critical Judgement',
    duration: '55 min',
    content: `
<h2>Evaluating Fiction — How Effectively Does the Writer Achieve Their Purpose?</h2>

<p>The evaluation question (Q4) in Component 02 is the highest-tariff reading question, worth <strong>12–14 marks</strong>. It tests <strong>AO4</strong> and requires you to make a critical judgement about the writer's effectiveness. In fiction, this typically means evaluating how successfully the writer creates atmosphere, builds tension, conveys character, or engages the reader's emotions.</p>

<div class="key-term"><strong>Key Term: Critical Judgement</strong> — A reasoned opinion about the quality or effectiveness of a writer's work, supported by evidence. Critical judgement goes beyond "I liked it" to explain <em>why</em> something works (or doesn't) and <em>how</em> the writer achieves (or fails to achieve) their intended effect.</div>

<h3>Practice Extract</h3>
<div class="text-extract">The house had been empty for eleven years. That was the first thing you noticed — not the boarded windows or the ivy strangling the drainpipe, but the absence. The house wore its emptiness like a coat, heavy and visible. The garden, once the pride of Mrs Atherton, was a jungle of nettles and bindweed, the path lost entirely beneath a carpet of moss. A swing set — rusted, tilted, absurd — stood in the corner of the lawn, its chains locked in place by years of disuse. It was the kind of place that made you walk faster, even in daylight. Especially in daylight, when you could see everything clearly and still feel watched.<div class="source">From an unpublished novel extract</div></div>

<p>A typical evaluation question might read: <em>"A student said: 'The writer makes the reader feel uneasy about the abandoned house.' To what extent do you agree?"</em></p>

<div class="model-answer"><strong>Model Answer:</strong>
<p>I strongly agree that the writer creates a pervasive sense of unease, and the passage is highly effective in making the abandoned house feel not merely empty but <em>threatening</em>.</p>

<p>The writer's most effective technique is the personification of the house itself. The statement that the house "wore its emptiness like a coat" is compelling because it transforms absence into a tangible, visible quality — the emptiness is not something the house <em>lacks</em> but something it <em>possesses</em>. The simile "like a coat" suggests the house has dressed itself in abandonment, implying intention and agency. This is unsettling because inanimate buildings should not have agency; by granting it, the writer triggers the gothic fear of the familiar becoming unfamiliar.</p>

<p>The swing set is a particularly effective image. The three adjectives — <em>"rusted, tilted, absurd"</em> — move from physical description ("rusted") through disorientation ("tilted") to an emotional register ("absurd"). The word "absurd" is unexpected and powerful: it suggests that the swing set has become a grotesque parody of childhood play, which forces the reader to confront the contrast between what the house once was (a family home) and what it has become. The chains "locked in place by years of disuse" carry connotations of imprisonment, reinforcing the idea that the house is trapped in its past.</p>

<p>The final sentence is devastatingly effective: <em>"Especially in daylight, when you could see everything clearly and still feel watched."</em> This subverts the conventional reassurance of daylight — we expect darkness to be frightening and daylight to be safe. By inverting this expectation, the writer removes the reader's last refuge of comfort. The use of direct address ("you") implicates the reader directly in the experience, making the unease personal rather than observed.</p>

<p>A critical reader might argue that the passage relies heavily on gothic conventions (abandoned house, overgrown garden, pathetic fallacy of neglect) and that the effect is therefore somewhat predictable. However, the subversion of the daylight/safety assumption in the final line demonstrates originality that elevates the passage beyond formula.</p></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In fiction evaluation, your counter-argument can address <strong>genre conventions</strong>. Acknowledging that a horror passage uses familiar tropes, or that a romance extract follows predictable patterns, shows critical awareness. You can then argue whether the writer transcends those conventions or relies too heavily on them.</div>

<h3>Evaluation in Fiction vs Non-Fiction</h3>
<table>
  <tr><th>Fiction Evaluation</th><th>Non-Fiction Evaluation</th></tr>
  <tr><td>How effectively does the writer create atmosphere/tension/character?</td><td>How effectively does the writer persuade/inform/argue?</td></tr>
  <tr><td>Focuses on emotional response</td><td>Focuses on persuasive effectiveness</td></tr>
  <tr><td>Consider genre conventions</td><td>Consider bias and one-sidedness</td></tr>
  <tr><td>Counter-argument: "The technique is predictable/formulaic"</td><td>Counter-argument: "The argument is one-sided/manipulative"</td></tr>
</table>

<h3>Evaluative Vocabulary for Fiction</h3>
<ul>
  <li><em>The writer creates a compelling / haunting / visceral sense of...</em></li>
  <li><em>This is particularly effective because it subverts the reader's expectation of...</em></li>
  <li><em>The imagery is powerful in its specificity — rather than relying on vague description, the writer...</em></li>
  <li><em>A less accomplished writer might have... but here the choice of... elevates the passage because...</em></li>
  <li><em>The passage is somewhat diminished by its reliance on...</em></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Evaluating based on personal preference rather than textual evidence. "I found this boring" or "I liked this because I enjoy horror" are not valid evaluative points. Evaluation must be grounded in analysis of technique: "The writer is effective because the personification of the house creates a sense of threat by..."</div>

<div class="key-term"><strong>Key Term: Genre Convention</strong> — A feature, technique, or plot element that is commonly associated with a particular genre. For example, abandoned houses are a convention of gothic horror, and love triangles are a convention of romance. Recognising conventions allows you to discuss whether a writer uses them effectively or relies on them too predictably.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m5-q1',
        question:
          'What makes the final sentence of the practice extract particularly effective?',
        options: [
          'It uses alliteration',
          'It subverts the expectation that daylight is safe, removing the reader\'s last refuge of comfort',
          'It summarises the extract',
          'It introduces a new character',
        ],
        correct: 1,
        explanation:
          'The line "Especially in daylight, when you could see everything clearly and still feel watched" subverts the conventional reassurance of daylight. This unexpected inversion is highly effective because it removes the reader\'s assumed safety.',
      },
      {
        id: 'ocr-lc2-m5-q2',
        question:
          'What is a valid counter-argument in fiction evaluation?',
        options: [
          '"I found this text boring"',
          '"The passage relies heavily on gothic conventions, which makes the effect somewhat predictable"',
          '"The writer should have written in a different genre"',
          '"The extract is too short to evaluate"',
        ],
        correct: 1,
        explanation:
          'Acknowledging reliance on genre conventions is a valid counter-argument because it engages critically with the text\'s originality. Personal statements like "I found this boring" are not analytical.',
      },
      {
        id: 'ocr-lc2-m5-q3',
        question:
          'How does fiction evaluation differ from non-fiction evaluation?',
        options: [
          'Fiction evaluation never uses quotations',
          'Fiction evaluation focuses on emotional response and genre conventions; non-fiction focuses on persuasive effectiveness and bias',
          'They are identical',
          'Non-fiction evaluation never requires a judgement',
        ],
        correct: 1,
        explanation:
          'Fiction evaluation judges emotional impact (atmosphere, tension, characterisation) and considers genre. Non-fiction evaluation judges persuasive effectiveness and considers bias or one-sidedness.',
      },
      {
        id: 'ocr-lc2-m5-q4',
        question:
          'Why is "I liked this passage because I enjoy horror" NOT a valid evaluative point?',
        options: [
          'Because horror is not a real genre',
          'Because evaluation must be grounded in analysis of technique, not personal preference',
          'Because you should never say you liked a text',
          'Because the examiner does not care about your opinion',
        ],
        correct: 1,
        explanation:
          'Evaluation requires analysis of how effectively the writer\'s techniques work, not just whether you personally enjoyed the text. "I liked it" is preference; "The personification is effective because..." is evaluation.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Narrative Writing: Crafting Stories
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m6',
    title: 'Narrative Writing: Crafting Stories',
    duration: '55 min',
    content: `
<h2>Narrative Writing — Planning and Crafting Effective Stories</h2>

<p>In Section B of Component 02, you may choose to write a narrative (story). This is worth <strong>40 marks</strong> — 24 for content and organisation (AO5) and 16 for technical accuracy (AO6). The key to a strong narrative is <strong>control</strong>: a focused story with a clear structure, vivid writing, and a purposeful ending is far more effective than an ambitious epic that runs out of steam.</p>

<div class="key-term"><strong>Key Term: Narrative</strong> — A story that includes characters, setting, and a sequence of events. GCSE narratives should be tightly focused — typically covering a short time frame, a small number of characters, and a single key moment or turning point.</div>

<h3>The Golden Rules of GCSE Narrative Writing</h3>
<ol>
  <li><strong>Keep it small.</strong> A 45-minute narrative cannot cover years of plot. Focus on one scene, one moment, one shift.</li>
  <li><strong>Character over plot.</strong> Examiners reward convincing characterisation more than exciting events.</li>
  <li><strong>Show, don't tell.</strong> "She was nervous" is telling. "Her fingers found the edge of the table and held on" is showing.</li>
  <li><strong>End with purpose.</strong> Your ending should feel intentional, not abrupt. A circular, reflective, or ambiguous ending often works better than a dramatic twist.</li>
  <li><strong>Write what you can write well.</strong> Choose a scenario you can describe convincingly. Authenticity beats ambition.</li>
</ol>

<h3>Planning Your Narrative (10 minutes)</h3>
<p>A strong plan covers five elements:</p>
<ol>
  <li><strong>Opening</strong> — How will you hook the reader? (Setting description? In medias res? A striking image?)</li>
  <li><strong>Character</strong> — Who is your protagonist? What do they want or fear?</li>
  <li><strong>Rising tension</strong> — What problem, conflict, or shift occurs?</li>
  <li><strong>Climax/Turning point</strong> — The moment of greatest intensity or change.</li>
  <li><strong>Ending</strong> — How will you close? (Resolution? Reflection? Ambiguity? Circular return?)</li>
</ol>

<h3>Narrative Structures That Work</h3>

<h4>Structure 1: The Shift</h4>
<p>Begin with a normal, everyday situation. Introduce a single event or realisation that changes everything. End with the character processing the change.</p>
<p><em>Example: A student arrives at school on results day. The walk in is ordinary. They open the envelope. The walk out is different.</em></p>

<h4>Structure 2: The Circular Narrative</h4>
<p>Begin and end in the same place or with the same image, but the character (or the reader's understanding) has changed.</p>
<p><em>Example: A character sits on a park bench at the start and end. In between, a conversation occurs that changes everything. The bench is the same; they are not.</em></p>

<h4>Structure 3: The Moment</h4>
<p>Focus entirely on a single, intense moment — stretching seconds into paragraphs through detailed sensory description and internal thought.</p>
<p><em>Example: The moment before a race starts. The gun fires. The first three seconds of movement.</em></p>

<div class="model-answer"><strong>Model Narrative Opening:</strong>
<p><em>The envelope was already on the kitchen table when she came downstairs. It sat between the marmalade and the morning post like something that had always been there — ordinary, unremarkable, a rectangle of white. Except that her mother was standing at the sink with her back turned, washing the same mug for the third time, and her father had not looked up from his newspaper since she entered the room. They knew. Of course they knew. The handwriting on the envelope was not her father's. It was not her mother's. And it was addressed to her.</em></p>
<p>This opening works because it: (1) creates tension through domestic detail, (2) uses "show don't tell" to convey the parents' anxiety, (3) withholds information about the envelope's contents, and (4) ends with a short, impactful sentence that directs attention.</p></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The most common narrative mistake at GCSE is writing too much plot. Students who try to fit a car chase, a murder, and a surprise twist into 500 words invariably produce breathless, superficial writing. The best narratives at GCSE focus on a <em>small</em> moment and explore it in <em>depth</em> — three paragraphs describing how it feels to open a letter will outscore three pages of action-movie plot.</div>

<h3>Show, Don't Tell — Practical Examples</h3>
<table>
  <tr><th>Telling (weak)</th><th>Showing (strong)</th></tr>
  <tr><td>She was scared.</td><td>Her breath came in shallow gasps. She pressed her back against the wall and counted the spaces between the footsteps.</td></tr>
  <tr><td>He was angry.</td><td>He set the glass down carefully, too carefully, as if the slightest tremor might shatter everything.</td></tr>
  <tr><td>The room was messy.</td><td>Clothes cascaded from every surface — the chair, the bed, the floor — like fabric waterfalls frozen mid-flow.</td></tr>
  <tr><td>She felt lonely.</td><td>She texted "anyone free tonight?" to seven people and watched the ticks turn blue, one by one, without reply.</td></tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Ending with "and then I woke up — it was all a dream." This is universally considered a weak ending because it invalidates everything that came before. Examiners actively penalise it. If your story needs a dream ending, the story itself needs rethinking.</div>

<div class="key-term"><strong>Key Term: Show, Don't Tell</strong> — A writing principle that encourages writers to convey emotions, character traits, and atmosphere through actions, sensory details, and dialogue rather than directly stating them. "She was sad" tells the reader; "She traced circles in the condensation on the window, watching the street below without seeing it" shows the reader.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m6-q1',
        question:
          'What is the most common narrative mistake at GCSE?',
        options: [
          'Using too few characters',
          'Writing too much plot instead of focusing on a small moment in depth',
          'Making the story too short',
          'Using first-person perspective',
        ],
        correct: 1,
        explanation:
          'The most common mistake is trying to fit too much plot into a short narrative. The best GCSE narratives focus on a single moment explored in depth with vivid description and character development.',
      },
      {
        id: 'ocr-lc2-m6-q2',
        question: 'What does "show, don\'t tell" mean?',
        options: [
          'Always include dialogue in your writing',
          'Convey emotions through actions and sensory details rather than directly stating them',
          'Show your plan to the examiner',
          'Use visual descriptions only',
        ],
        correct: 1,
        explanation:
          '"Show, don\'t tell" means conveying character, emotion, and atmosphere through actions, sensory detail, and dialogue rather than stating them directly. "She was scared" tells; "Her breath came in shallow gasps" shows.',
      },
      {
        id: 'ocr-lc2-m6-q3',
        question:
          'Why is "it was all a dream" considered a weak ending?',
        options: [
          'Because dreams are not allowed in GCSE writing',
          'Because it invalidates everything that came before and is universally considered lazy',
          'Because it is too short',
          'Because the examiner cannot tell if you meant it',
        ],
        correct: 1,
        explanation:
          'An "it was all a dream" ending invalidates the narrative — nothing the reader invested in actually happened. Examiners actively penalise it as a sign of weak planning.',
      },
      {
        id: 'ocr-lc2-m6-q4',
        question:
          'How long should you spend planning your narrative before writing?',
        options: [
          '1 minute',
          '5 minutes',
          '10 minutes',
          '20 minutes',
        ],
        correct: 2,
        explanation:
          'Allow approximately 10 minutes for planning. A clear plan covering opening, character, rising tension, climax, and ending prevents unfocused writing and ensures a purposeful structure.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 — Descriptive Writing: Creating Atmosphere
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m7',
    title: 'Descriptive Writing: Creating Atmosphere',
    duration: '55 min',
    content: `
<h2>Descriptive Writing — Evoking Scenes, Senses, and Atmosphere</h2>

<p>If you choose the descriptive writing option in Section B of Component 02, your task is to create a vivid, immersive piece that evokes a scene, place, person, or moment. Unlike narrative writing, descriptive writing does <strong>not</strong> need a plot or sequence of events — its purpose is to create an <strong>atmosphere</strong> and engage the reader's senses.</p>

<div class="key-term"><strong>Key Term: Descriptive Writing</strong> — A form of creative writing focused on evoking a scene, person, or atmosphere using sensory detail, figurative language, and careful structural choices. The goal is immersion — making the reader <em>feel</em> present in the described world.</div>

<h3>The Five Senses Framework</h3>
<p>Strong descriptive writing engages multiple senses. Most students default to <strong>sight</strong> only — challenge yourself to include at least three:</p>
<ol>
  <li><strong>Sight</strong> — Colours, light, shadow, movement, shapes. <em>"The streetlamp cast a copper ring on the wet pavement."</em></li>
  <li><strong>Sound</strong> — Volume, rhythm, quality. <em>"Rain tapped against the window like impatient fingers."</em></li>
  <li><strong>Touch/Texture</strong> — Temperature, surface, pressure. <em>"The banister was cold and slightly damp beneath her palm."</em></li>
  <li><strong>Smell</strong> — Often the most evocative sense. <em>"The corridor smelled of floor polish and something older — damp stone, perhaps, or forgotten wood."</em></li>
  <li><strong>Taste</strong> — Less common but powerful when relevant. <em>"The air tasted of salt and exhaust fumes."</em></li>
</ol>

<h3>Structuring Descriptive Writing</h3>
<p>Without a plot to provide structure, descriptive writing needs deliberate organisation:</p>

<h4>Structure 1: Spatial Movement</h4>
<p>Move through a space systematically — outside to inside, far to near, ground level to sky.</p>
<p><em>Example: Describe a market — start with the distant view, move through the entrance, focus on individual stalls, end with a close-up of a single object.</em></p>

<h4>Structure 2: Temporal Movement</h4>
<p>Describe the same scene at different times — dawn to dusk, empty to crowded, before and after an event.</p>

<h4>Structure 3: Zoom Lens</h4>
<p>Begin with a wide panoramic view and gradually zoom into a single detail — or reverse (start close, pull back).</p>

<h4>Structure 4: Contrast</h4>
<p>Describe two contrasting aspects of the same place — the beauty and the decay, the noise and the silence, the surface and what lies beneath.</p>

<h3>Practice: Describing a Coastal Scene</h3>
<div class="model-answer"><strong>Model Descriptive Paragraph:</strong>
<p><em>The beach was not the postcard version. The sand was grey and littered with the debris of last night's tide — tangled seaweed, a single trainer bleached by salt, the skeleton of a crab picked clean by gulls. The sea itself moved slowly, as if exhausted, dragging itself up the shore and retreating with a long, rattling sigh that pulled pebbles back in its wake. Above, the sky sat low and heavy, a ceiling of unbroken cloud that pressed down on the water and made the horizon disappear. There was no line between sea and sky — just a gradual fading, grey into grey, until the world simply ran out.</em></p>
<p>This paragraph succeeds because it: (1) subverts expectations ("not the postcard version"), (2) uses specific, vivid detail (the trainer, the crab skeleton), (3) personifies the sea ("as if exhausted," "a long, rattling sigh"), (4) engages sight, sound, and touch, and (5) ends with a striking image of dissolution.</p></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best descriptive writing avoids cliches. "The sun beat down mercilessly" and "the waves crashed against the shore" are so overused they have lost their power. Challenge yourself to describe familiar scenes in <em>unfamiliar</em> ways. Instead of "the sky was blue," try "the sky had the hard, clean blue of a held breath" — unexpected comparisons wake the reader up.</div>

<h3>Common Descriptive Writing Pitfalls</h3>
<ul>
  <li><strong>Adjective overload</strong> — Using too many adjectives weakens rather than strengthens prose. "The dark, gloomy, sinister, ominous, frightening corridor" is exhausting. Choose one or two precise adjectives.</li>
  <li><strong>Telling emotions</strong> — "I felt peaceful" is weak. Instead, describe what creates the peace and let the reader feel it.</li>
  <li><strong>Losing structure</strong> — Without a plan, descriptive writing can become a random list of observations. Plan your movement through the scene.</li>
  <li><strong>Drifting into narrative</strong> — If you chose the descriptive option, resist the urge to introduce a plot. You can include a <em>moment</em> (a bird taking flight, a door closing) but not a <em>story</em>.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing descriptions that are entirely visual. "I could see..." repeated throughout produces flat, two-dimensional writing. Engaging smell, sound, and touch creates an immersive, three-dimensional world. Think of description as virtual reality for the reader — the more senses you activate, the more real the scene becomes.</div>

<h3>Power Techniques for Descriptive Writing</h3>
<ul>
  <li><strong>Extended metaphor</strong> — Sustain a single comparison across a paragraph or the whole piece.</li>
  <li><strong>Personification</strong> — Give life and agency to the inanimate world.</li>
  <li><strong>Specific detail</strong> — "A mug with a chipped rim and a faded logo" is more powerful than "a mug."</li>
  <li><strong>Contrast within the scene</strong> — Beauty beside decay, noise beside silence.</li>
  <li><strong>Sentence variety</strong> — Mirror your content with form: long, flowing sentences for calm; short, clipped ones for tension.</li>
</ul>

<div class="key-term"><strong>Key Term: Extended Metaphor</strong> — A metaphor that is developed and sustained across multiple sentences, a paragraph, or even an entire text. For example, describing a city as an organism — its streets as arteries, its traffic as blood flow, its buildings as bones — creates a unified and powerful comparison.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m7-q1',
        question:
          'What is the main difference between narrative and descriptive writing?',
        options: [
          'Narrative uses figurative language; descriptive does not',
          'Narrative tells a story with plot and events; descriptive evokes a scene or atmosphere without plot',
          'Descriptive writing is always longer',
          'Narrative writing cannot include description',
        ],
        correct: 1,
        explanation:
          'Narrative writing tells a story with characters and events. Descriptive writing evokes a scene, place, or atmosphere using sensory detail and figurative language, without needing a plot.',
      },
      {
        id: 'ocr-lc2-m7-q2',
        question:
          'Why should you avoid relying solely on visual description?',
        options: [
          'Because the mark scheme bans visual imagery',
          'Because engaging multiple senses creates immersive, three-dimensional writing',
          'Because sound is always more important than sight',
          'Because visual description is always cliched',
        ],
        correct: 1,
        explanation:
          'Writing that only describes what can be seen produces flat, two-dimensional prose. Engaging sound, touch, smell, and taste creates an immersive experience that places the reader in the scene.',
      },
      {
        id: 'ocr-lc2-m7-q3',
        question: 'What is an "extended metaphor"?',
        options: [
          'A very long simile',
          'A metaphor that is developed and sustained across multiple sentences or a whole text',
          'A metaphor that uses the word "like"',
          'A metaphor used only in poetry',
        ],
        correct: 1,
        explanation:
          'An extended metaphor is sustained across multiple sentences, a paragraph, or an entire text. It creates a unified, powerful comparison that gives coherence to descriptive writing.',
      },
      {
        id: 'ocr-lc2-m7-q4',
        question:
          'Why is "the sun beat down mercilessly" a weak descriptive phrase?',
        options: [
          'Because it uses personification incorrectly',
          'Because it is a cliche that has lost its power through overuse',
          'Because the sun cannot beat',
          'Because it is too short',
        ],
        correct: 1,
        explanation:
          'This phrase is a cliche — so overused that it no longer creates a vivid image. Strong descriptive writing finds original ways to express familiar experiences.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Creative Writing Techniques: Advanced Craft
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m8',
    title: 'Creative Writing Techniques: Advanced Craft',
    duration: '55 min',
    content: `
<h2>Advanced Creative Writing Techniques — Elevating Your Craft</h2>

<p>This module explores advanced techniques that distinguish competent creative writing from exceptional creative writing. These are the skills that push responses into the top mark bands for both AO5 and AO6.</p>

<h3>1. Controlling Narrative Perspective</h3>
<div class="key-term"><strong>Key Term: Narrative Perspective</strong> — The point of view from which a story or description is told. The choice of perspective shapes what the reader knows, how they relate to characters, and the overall tone of the writing.</div>

<h4>First Person ("I")</h4>
<p>Creates intimacy and immediacy. The reader experiences events through a single consciousness. Limitations: the narrator can only know their own thoughts.</p>
<p><em>"I stood at the edge of the platform and felt the ground trembling beneath my feet."</em></p>

<h4>Third Person Limited ("She/He")</h4>
<p>Follows one character closely but with slight distance. Allows description of the character from outside while still accessing their thoughts. This is often the most versatile choice for GCSE writing.</p>
<p><em>"She stood at the edge of the platform, her hands clenched at her sides, and felt the ground trembling."</em></p>

<h4>Third Person Omniscient</h4>
<p>Knows everything about all characters. Provides a god-like overview. Powerful but harder to control in a short piece.</p>

<h4>Second Person ("You")</h4>
<p>Unusual but highly effective for descriptive writing. Places the reader directly in the scene.</p>
<p><em>"You stand at the edge of the platform. The ground trembles beneath your feet. You do not move."</em></p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Whichever perspective you choose, be <strong>consistent</strong>. Accidentally shifting from third person to first person mid-paragraph is a technical error that suggests lack of control. If you deliberately shift perspective for effect, make it clear and purposeful.</div>

<h3>2. Controlling Pace Through Sentence Structure</h3>
<p>The rhythm of your sentences should mirror the mood of your content:</p>

<div class="model-answer"><strong>Slow Pace (tension building, reflection):</strong>
<p><em>"The corridor stretched ahead of her, its walls narrowing almost imperceptibly, as though the building itself were drawing a slow, deliberate breath before releasing whatever waited at its end."</em></p>
<p>The long, complex sentence with multiple subordinate clauses creates a slow, drawn-out rhythm that mirrors the character's mounting tension.</p>

<strong>Fast Pace (action, crisis):</strong>
<p><em>"She ran. The door. Locked. She slammed her shoulder against it. Again. Again. The wood cracked. She fell through."</em></p>
<p>Short sentences and fragments create urgency. The reader's eye moves quickly down the page, mirroring the speed of the action.</p></div>

<h3>3. Symbolism and Motif</h3>
<p>Using recurring images or objects to carry deeper meaning elevates your writing beyond surface-level description:</p>
<ul>
  <li><strong>A closed door</strong> — Could symbolise blocked opportunity, secrecy, or fear of the unknown.</li>
  <li><strong>Water</strong> — Can symbolise change, cleansing, danger, or the passage of time.</li>
  <li><strong>Light and darkness</strong> — The most universal symbolic contrast: knowledge/ignorance, safety/danger, hope/despair.</li>
  <li><strong>A clock or watch</strong> — Symbolises the passage of time, urgency, or mortality.</li>
</ul>

<div class="key-term"><strong>Key Term: Motif</strong> — A recurring image, symbol, or idea that runs through a text and contributes to its themes. For example, if a story repeatedly mentions birds — a caged bird, a bird in flight, a dead bird — the motif of birds carries thematic weight about freedom and captivity.</div>

<h3>4. Openings That Demand Attention</h3>
<ul>
  <li><strong>Sensory immersion:</strong> <em>"The air smelled of rust and rain. Somewhere above, a pipe dripped."</em></li>
  <li><strong>A question:</strong> <em>"How long had she been standing there?"</em></li>
  <li><strong>A contradiction:</strong> <em>"The house was silent. It was the loudest silence she had ever heard."</em></li>
  <li><strong>In medias res:</strong> <em>"She was already running when the first shot cracked across the morning."</em></li>
  <li><strong>A striking image:</strong> <em>"The tree had been struck by lightning, and now it stood in the field like a blackened hand reaching for something it would never touch."</em></li>
</ul>

<h3>5. Endings That Resonate</h3>
<ul>
  <li><strong>Circular:</strong> Return to the opening image with changed meaning.</li>
  <li><strong>Reflective:</strong> The character processes what has happened. <em>"She turned the key in the lock and thought, for the first time, that home was not a place but a decision."</em></li>
  <li><strong>Ambiguous:</strong> Leave the reader with a question. <em>"The phone rang again. This time, she reached for it."</em></li>
  <li><strong>Image-based:</strong> End on a vivid image rather than a statement. <em>"The last light caught the edge of the water, held it for a moment, and let it go."</em></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to include every technique you know. A story with a simile, a metaphor, personification, alliteration, a one-word sentence, a list of three, and a rhetorical question in every paragraph reads like a checklist, not a story. Use techniques <em>purposefully</em> — each one should serve the moment, not the mark scheme.</div>

<h3>6. The Power of Restraint</h3>
<p>Sometimes what you leave out is more powerful than what you include:</p>
<ul>
  <li><strong>Implied emotion</strong> — Rather than naming the feeling, describe the physical response and let the reader infer.</li>
  <li><strong>White space</strong> — A short paragraph surrounded by longer ones gains emphasis from its isolation.</li>
  <li><strong>Unsaid dialogue</strong> — Characters who avoid saying what they mean create tension and subtext.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners at the top mark bands look for <strong>controlled, deliberate craft</strong>. Every detail should feel chosen. If your description of a room includes a cracked mirror, the examiner will assume it is symbolic. Make sure every detail earns its place in your writing. The difference between a Grade 7 and a Grade 9 is not more techniques — it is more <em>control</em>.</div>

<div class="key-term"><strong>Key Term: Subtext</strong> — The underlying meaning beneath the surface of what is said or described. In dialogue, subtext is what characters are really thinking or feeling but not saying aloud. In description, subtext is the deeper significance of the details a writer chooses to include.</div>


<h3>7. Worked Example: Transforming Basic into Grade 9</h3>
<p><strong>Student's Original Paragraph (Grade 6):</strong></p>
<div class="text-extract">
She walked into the room. It was dark. There was a window but the curtains were closed. She felt scared. She moved slowly towards the wall to find the light switch.
</div>

<p><strong>Analysis of Weaknesses:</strong> Simple sentences with limited variety. Emotional state named rather than shown. No sensory details beyond visual. No subtext or tension.</p>

<p><strong>Grade 9 Transformation:</strong></p>
<div class="model-answer">
She stepped into the darkness and waited for her eyes to adjust. The curtains held firm against the afternoon light, reducing the room to shades of grey and black. Behind her, the door creaked as it swung shut. Her breathing shallowed. She could hear the hum of the boiler in the basement — a sound she had not noticed in daylight, now unnaturally loud. Her hand extended ahead of her, fingers splayed, searching for the light switch. The wallpaper was rough under her palm, ancient and peeling.
</div>

<p><strong>Why This is Grade 9:</strong> Sensory layering (visual, tactile, auditory). Pace variation (snappy opening, longer atmosphere-building sentences). Subtext over naming (fear shown through shallow breathing, defensive body position, hyperawareness). Every detail serves a purpose.</p>

<h3>8. Step-by-Step Framework for Grade 9</h3>
<ol>
<li><strong>Planning:</strong> Jot opening image, central character moment, closing image. What emotion? What climax?</li>
<li><strong>First draft:</strong> Write quickly for narrative shape and perspective control.</li>
<li><strong>Sensory depth:</strong> Add at least one unexpected sensory detail per paragraph. Avoid clichés.</li>
<li><strong>Sentence variety:</strong> Read aloud. Vary length. Create pace through structure.</li>
<li><strong>Subtext and symbols:</strong> What is beneath the surface? Can an image recur? Can silence create tension?</li>
<li><strong>Precision pass:</strong> Check every verb. "Walked" → "drifted"? "Blue eyes" → "eyes the color of winter water"?</li>
</ol>

<h3>9. Common Mistakes in Advanced Writing</h3>
<div class="common-mistake"><strong>Mistake 1: Over-technique.</strong> Using multiple techniques per sentence because they're "techniques" shows inexperience. Grade 9 uses them invisibly.</div>
<div class="common-mistake"><strong>Mistake 2: Telling instead of showing.</strong> "She was angry" — show the clenched jaw, let readers infer.</div>
<div class="common-mistake"><strong>Mistake 3: Unnatural vocabulary.</strong> Don't use words you wouldn't say. Precision doesn't mean formality.</div>
<div class="common-mistake"><strong>Mistake 4: Assuming busy = better.</strong> White space and pauses are often more powerful than packed paragraphs.</div>

<h3>10. Practice: Rewrite This for Grade 9</h3>
<div class="text-extract">
The beach was beautiful. The sun shone on the water and made it sparkle. She felt happy as she walked along the shore. She thought about her problems and decided that being by the sea made her feel better.
</div>

<p><strong>Model Response:</strong></p>
<div class="model-answer">
The beach smell of salt and something chemical — the ghost of last night's storm. She stood in the shallows, her trainers already waterlogged, watching the tide pull back. The wet sand held the imprint of her footprints for barely a second before the water swallowed them. She knelt down. Scooped. Let it run through her fingers. For the first time in three weeks — since the argument, the silence, the locked doors — her shoulders dropped. She was just breathing.
</div>

`,
    quiz: [
      {
        id: 'ocr-lc2-m8-q1',
        question:
          'Which narrative perspective is often the most versatile for GCSE creative writing?',
        options: [
          'First person',
          'Second person',
          'Third person limited',
          'Third person omniscient',
        ],
        correct: 2,
        explanation:
          'Third person limited follows one character closely with slight distance. It allows both external description and access to the character\'s thoughts, making it versatile for GCSE-length pieces.',
      },
      {
        id: 'ocr-lc2-m8-q2',
        question:
          'How should sentence length relate to the pace of your writing?',
        options: [
          'All sentences should be the same length',
          'Short sentences create urgency; long sentences create slow, reflective pacing',
          'Long sentences always create tension',
          'Sentence length does not affect pace',
        ],
        correct: 1,
        explanation:
          'Short sentences and fragments create fast, urgent pacing for action scenes. Long, complex sentences with subordinate clauses create slow, deliberate pacing for reflection, description, or tension building.',
      },
      {
        id: 'ocr-lc2-m8-q3',
        question: 'What is a "motif" in creative writing?',
        options: [
          'The moral of the story',
          'A recurring image, symbol, or idea that contributes to the text\'s themes',
          'The main character\'s motivation',
          'A type of paragraph structure',
        ],
        correct: 1,
        explanation:
          'A motif is a recurring image, symbol, or idea that runs through a text and contributes to its themes. Using motifs shows deliberate craft and thematic awareness.',
      },
      {
        id: 'ocr-lc2-m8-q4',
        question:
          'What is the difference between a Grade 7 and Grade 9 creative writing response?',
        options: [
          'Grade 9 responses use more techniques',
          'Grade 9 responses are longer',
          'Grade 9 responses demonstrate more control — every detail feels chosen and purposeful',
          'Grade 9 responses always use first person',
        ],
        correct: 2,
        explanation:
          'The distinction is control, not quantity. Grade 9 responses feel deliberate — every detail, technique, and structural choice serves a purpose. More techniques without control will not reach the top bands.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 — Technical Accuracy in Creative Writing
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m9',
    title: 'Technical Accuracy in Creative Writing',
    duration: '50 min',
    content: `
<h2>AO6 in Creative Writing — Accuracy, Variety, and Craft</h2>

<p>Technical accuracy in creative writing is tested through <strong>AO6</strong>, which accounts for 16 of the 40 writing marks. AO6 rewards accurate spelling and punctuation, but also — crucially — a <strong>range</strong> of vocabulary and sentence structures used for deliberate <strong>effect</strong>. In creative writing, accuracy is not just about avoiding errors; it is about deploying technical skills as creative tools.</p>

<div class="key-term"><strong>Key Term: Sentence Variety for Effect</strong> — Using different sentence types not just for correctness but as deliberate creative choices. A short sentence after a long one creates emphasis. A fragment creates drama. A complex sentence with embedded clauses creates a sense of layering or complexity.</div>

<h3>Punctuation as a Creative Tool</h3>

<h4>Ellipsis (...)</h4>
<p>Creates trailing off, hesitation, or unfinished thought:</p>
<p><em>"She opened her mouth to say something. Closed it. Tried again. 'I just...' She shook her head."</em></p>

<h4>Dash (—)</h4>
<p>Creates interruption, afterthought, or dramatic pause:</p>
<p><em>"He turned the corner — and stopped dead."</em></p>
<p><em>"The house was beautiful — or it had been, once."</em></p>

<h4>Colon (:)</h4>
<p>Builds anticipation before a reveal:</p>
<p><em>"There was only one thing left to do: run."</em></p>

<h4>Semicolon (;)</h4>
<p>Connects related images or ideas in a fluid, literary way:</p>
<p><em>"The garden was wild; the house was wilder."</em></p>

<h4>Comma for Listing (Asyndetic Listing)</h4>
<p>Omitting conjunctions from a list creates pace and accumulation:</p>
<p><em>"Books, papers, photographs, the remains of a half-eaten meal — the desk told the story of a life interrupted."</em></p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Creative writing gives you licence to break grammatical rules <strong>deliberately</strong>. A sentence fragment ("Silence."), a one-word paragraph ("Gone."), or an unconventional use of punctuation can be powerful — but only if the examiner can see it is a <em>choice</em>, not an error. Surround your deliberate rule-breaking with technically accurate prose to signal control.</div>

<h3>Paragraphing for Effect</h3>
<p>In creative writing, paragraph breaks are not just organisational — they are rhythmic and emotional:</p>
<ul>
  <li><strong>Long paragraphs</strong> — Immerse the reader in detailed description; create a sense of abundance or overwhelm.</li>
  <li><strong>Short paragraphs</strong> — Create emphasis, pause, or dramatic shift.</li>
  <li><strong>One-sentence paragraphs</strong> — Maximum impact. Use sparingly.</li>
  <li><strong>Paragraph breaks at moments of change</strong> — A new paragraph signals a shift in time, focus, tone, or speaker.</li>
</ul>

<h3>Vocabulary: Precision Over Ambition</h3>
<p>In creative writing, the right word matters more than the impressive word:</p>

<div class="model-answer"><strong>Example — Choosing the Right Verb:</strong>
<p>Consider: "She <strong>walked</strong> across the room."</p>
<p>Now consider alternatives and what each conveys:</p>
<ul>
  <li><em>She <strong>crept</strong> across the room.</em> — Stealth, fear, secrecy.</li>
  <li><em>She <strong>strode</strong> across the room.</em> — Confidence, purpose, authority.</li>
  <li><em>She <strong>drifted</strong> across the room.</em> — Absent-mindedness, dreaminess.</li>
  <li><em>She <strong>stumbled</strong> across the room.</em> — Disorientation, injury, intoxication.</li>
</ul>
<p>Each verb does the work of an entire sentence of description. Choosing precise verbs is one of the most efficient ways to improve your creative writing.</p></div>

<h3>Dialogue Punctuation</h3>
<p>Correct dialogue punctuation is essential for AO6 in narrative writing:</p>
<ul>
  <li>Speech marks around the spoken words: <em>"I don't understand," she said.</em></li>
  <li>Comma before the reporting clause: <em>"I don't understand<strong>,</strong>" she said.</em></li>
  <li>New speaker, new line: each time a different character speaks, start a new paragraph.</li>
  <li>Full stop inside the speech marks when the speech ends the sentence: <em>She whispered, "It's over<strong>.</strong>"</em></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Overusing adverbs in dialogue tags. "She said angrily," "he whispered nervously," "they shouted furiously" — these adverbs are redundant if the dialogue itself conveys the emotion. Let the words do the work: "Get out" spoken in context doesn't need "angrily" attached to it.</div>

<h3>Proofreading Strategy for Creative Writing</h3>
<ol>
  <li><strong>Read your opening sentence.</strong> Is it strong? First impressions matter.</li>
  <li><strong>Read your ending sentence.</strong> Does it resonate? Last impressions linger.</li>
  <li><strong>Check every apostrophe.</strong> Is it for contraction (it's = it is) or possession (the dog's bone)?</li>
  <li><strong>Check sentence boundaries.</strong> Does every sentence end with appropriate punctuation?</li>
  <li><strong>Check tense consistency.</strong> Have you accidentally shifted between past and present tense?</li>
  <li><strong>Check perspective consistency.</strong> Have you accidentally shifted between first and third person?</li>
</ol>

<div class="key-term"><strong>Key Term: Asyndetic Listing</strong> — A list that omits conjunctions (and, or, but), creating a sense of pace, accumulation, or overwhelm. "She packed clothes, books, photographs, letters" moves faster than "She packed clothes and books and photographs and letters." The absence of conjunctions implies there is too much to itemise — the list could go on.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m9-q1',
        question:
          'When is it acceptable to use a sentence fragment in creative writing?',
        options: [
          'Never — fragments are always errors',
          'When it is a deliberate choice for emphasis, surrounded by accurate prose that signals control',
          'Only in dialogue',
          'Only at the end of a paragraph',
        ],
        correct: 1,
        explanation:
          'Sentence fragments can be powerful creative tools ("Silence." "Gone.") when used deliberately. The key is that the examiner must recognise it as a choice, not an error — which requires accurate prose elsewhere to signal control.',
      },
      {
        id: 'ocr-lc2-m9-q2',
        question: 'Why is choosing precise verbs important in creative writing?',
        options: [
          'Because the mark scheme requires a specific number of verbs',
          'Because a precise verb does the work of an entire sentence of description',
          'Because adjectives are not allowed',
          'Because verbs are worth more marks than nouns',
        ],
        correct: 1,
        explanation:
          'A precise verb conveys character, mood, and physical action in a single word. "She crept" tells us far more than "She walked nervously" — it is more efficient and more vivid.',
      },
      {
        id: 'ocr-lc2-m9-q3',
        question: 'What is "asyndetic listing"?',
        options: [
          'A list using conjunctions between every item',
          'A list that omits conjunctions, creating pace and accumulation',
          'A list of three items',
          'A list used only in non-fiction writing',
        ],
        correct: 1,
        explanation:
          'Asyndetic listing omits conjunctions (and, or, but) from a list, creating a sense of pace, accumulation, or overwhelm. It implies there is too much to fully itemise.',
      },
      {
        id: 'ocr-lc2-m9-q4',
        question:
          'What should you check for when proofreading creative writing?',
        options: [
          'Only spelling errors',
          'Opening/ending strength, apostrophes, sentence boundaries, tense consistency, and perspective consistency',
          'Word count only',
          'Whether you used enough techniques',
        ],
        correct: 1,
        explanation:
          'A thorough proofread checks opening and ending impact, apostrophe accuracy, sentence boundaries, tense consistency, and perspective consistency. These are the most common areas where marks are lost.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Component 02 Exam Strategy & Timed Practice
  // ──────────────────────────────────────────────
  {
    id: 'ocr-lc2-m10',
    title: 'Component 02 Exam Strategy & Timed Practice',
    duration: '50 min',
    content: `
<h2>Exam Strategy — Putting It All Together for Component 02</h2>

<p>This final module brings together everything from the course into a complete exam strategy for Component 02. You have <strong>2 hours</strong> and <strong>80 marks</strong> at stake — every decision you make about time, approach, and technique matters.</p>

<h3>The Complete Timing Plan</h3>
<table>
  <tr><th>Time</th><th>Task</th><th>Marks</th></tr>
  <tr><td>0–10 min</td><td>Read the fiction extract carefully, annotating language and structural features</td><td>—</td></tr>
  <tr><td>10–20 min</td><td>Answer Q1 (retrieval and inference)</td><td>Varies</td></tr>
  <tr><td>20–35 min</td><td>Answer Q2 (language analysis)</td><td>6–8</td></tr>
  <tr><td>35–50 min</td><td>Answer Q3 (structural analysis)</td><td>6–8</td></tr>
  <tr><td>50–65 min</td><td>Answer Q4 (evaluation)</td><td>12–14</td></tr>
  <tr><td>65–75 min</td><td>Choose writing task and plan thoroughly</td><td>—</td></tr>
  <tr><td>75–115 min</td><td>Write creative piece</td><td>40</td></tr>
  <tr><td>115–120 min</td><td>Proofread writing</td><td>—</td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The creative writing task is worth <strong>half the paper</strong> (40 out of 80 marks). Treat it with the seriousness it deserves. Students who view Section B as an afterthought — something to rush through after careful reading answers — are throwing away 50% of their marks. Aim to spend at least 50 minutes on your creative piece, including planning.</div>

<h3>Reading Section: Key Reminders</h3>

<h4>Q1 — Retrieval and Inference</h4>
<ul>
  <li>Keep retrieval answers brief — a phrase or sentence.</li>
  <li>For inference, use Point–Evidence–Inference structure.</li>
  <li>Ground all inferences in textual evidence.</li>
</ul>

<h4>Q2 — Language Analysis</h4>
<ul>
  <li>Use What–How–Why framework.</li>
  <li>Zoom into word-level analysis — explore connotations.</li>
  <li>Connect analysis to the reader's emotional experience.</li>
  <li>2–3 developed points are better than 5 superficial ones.</li>
</ul>

<h4>Q3 — Structural Analysis</h4>
<ul>
  <li>Do NOT discuss language here — focus on organisation.</li>
  <li>Consider: shifts in focus, pacing, opening/ending, withholding information.</li>
  <li>Single-sentence paragraphs are always worth discussing.</li>
  <li>Explain the EFFECT of structural choices on the reader.</li>
</ul>

<h4>Q4 — Evaluation</h4>
<ul>
  <li>State your judgement clearly: agree, partially agree, or disagree.</li>
  <li>Support every point with evidence and analysis of effectiveness.</li>
  <li>Include a counter-argument for balance.</li>
  <li>Use evaluative vocabulary: "effective," "compelling," "undermined by."</li>
</ul>

<h3>Writing Section: Key Reminders</h3>

<h4>Choosing Your Task</h4>
<p>Read both options carefully. Choose based on:</p>
<ul>
  <li><strong>Which prompt sparks more vivid ideas?</strong> — Your best writing comes from genuine imaginative engagement.</li>
  <li><strong>Which form suits your strengths?</strong> — If you write strong dialogue and character, choose narrative. If you excel at imagery and atmosphere, choose descriptive.</li>
  <li><strong>Which can you structure effectively?</strong> — Can you see a clear beginning, middle, and end (or opening, development, and closing image)?</li>
</ul>

<h4>The 10-Minute Plan</h4>
<p>Your plan should include:</p>
<ul>
  <li><strong>Opening</strong> — Your first sentence or image. Write it in your plan.</li>
  <li><strong>Structure</strong> — How will you move through the piece? (Spatial? Temporal? Zoom? Contrast?)</li>
  <li><strong>Key images/moments</strong> — 3–4 vivid details or scenes you want to include.</li>
  <li><strong>Ending</strong> — Your final image or sentence. Write it in your plan.</li>
  <li><strong>Perspective and tense</strong> — Decide and commit. First person past? Third person present?</li>
</ul>

<h4>While Writing</h4>
<ul>
  <li>Aim for 400–600 words. Quality beats quantity.</li>
  <li>Vary your sentence structures deliberately.</li>
  <li>Engage at least three senses.</li>
  <li>Use techniques purposefully, not as a checklist.</li>
  <li>Write a strong opening and a strong ending — these are what the examiner remembers.</li>
</ul>

<h3>Emergency Strategies</h3>

<h4>If you run out of time on writing:</h4>
<ol>
  <li>Write a plan showing your intended structure.</li>
  <li>Write the opening paragraph with your best prose.</li>
  <li>Write the ending paragraph — even if the middle is missing, a strong ending shows craft.</li>
  <li>Bullet-point any key scenes or images between them.</li>
</ol>

<h4>If you cannot understand the fiction extract:</h4>
<ol>
  <li>Focus on what you CAN understand — atmosphere, tone, character emotions.</li>
  <li>Quote specific words and phrases and analyse their connotations.</li>
  <li>You do not need to understand every word to analyse language and structure effectively.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending the last 20 minutes improving reading answers instead of writing. Reading answers have a ceiling — once you have made your points and supported them, additional time yields diminishing returns. Writing marks, by contrast, are only limited by the quality of your prose. The last 20 minutes of your exam should <em>always</em> be spent on writing or proofreading.</div>

<h3>Final Confidence Checklist</h3>
<ul>
  <li>I can retrieve information and make inferences from fiction.</li>
  <li>I can analyse language using What–How–Why, focusing on word-level effects.</li>
  <li>I can analyse structure distinctly from language, discussing shifts, pacing, and organisation.</li>
  <li>I can evaluate a writer's effectiveness with a balanced, evidence-based judgement.</li>
  <li>I can write a controlled narrative or descriptive piece with purposeful technique.</li>
  <li>I can use punctuation as a creative tool and maintain technical accuracy.</li>
  <li>I have a timing plan and will stick to it.</li>
</ul>

<div class="key-term"><strong>Key Term: Diminishing Returns</strong> — The principle that beyond a certain point, additional effort produces less and less benefit. In exam terms, spending 5 extra minutes on a reading answer might gain 1 mark, while spending those 5 minutes on writing could gain 3–4 marks. Allocate your time where it has the greatest impact.</div>
`,
    quiz: [
      {
        id: 'ocr-lc2-m10-q1',
        question: 'How many marks is the creative writing task worth in Component 02?',
        options: ['16 marks', '24 marks', '40 marks', '80 marks'],
        correct: 2,
        explanation:
          'The creative writing task is worth 40 marks — exactly half of the total paper. It deserves at least 50 minutes of your time, including planning.',
      },
      {
        id: 'ocr-lc2-m10-q2',
        question: 'What should you include in your 10-minute writing plan?',
        options: [
          'Just the title',
          'Opening sentence, structure, key images/moments, ending sentence, perspective and tense',
          'A complete first draft',
          'A list of every technique you know',
        ],
        correct: 1,
        explanation:
          'A strong plan includes your opening, structural approach, 3–4 key images or moments, your ending, and your chosen perspective and tense. This ensures purposeful, well-structured writing.',
      },
      {
        id: 'ocr-lc2-m10-q3',
        question: 'What is the key difference between the Q2 and Q3 reading questions?',
        options: [
          'Q2 is harder than Q3',
          'Q2 analyses language (word-level choices); Q3 analyses structure (text organisation)',
          'Q3 always asks about the ending',
          'Q2 uses quotations and Q3 does not',
        ],
        correct: 1,
        explanation:
          'Q2 focuses on language analysis — word choices, imagery, figurative language. Q3 focuses on structural analysis — how the text is organised, shifts in focus, pacing, and sequencing. OCR tests these as separate skills.',
      },
      {
        id: 'ocr-lc2-m10-q4',
        question: 'If you cannot fully understand the fiction extract, what should you do?',
        options: [
          'Leave the reading section blank',
          'Focus on atmosphere and tone, quote specific words, and analyse their connotations',
          'Ask the invigilator for help',
          'Skip to the writing section immediately',
        ],
        correct: 1,
        explanation:
          'You do not need to understand every word to analyse language and structure effectively. Focus on what you can identify — atmosphere, tone, character emotions — and analyse specific words and phrases for their connotations and effects.',
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Component 02 Assessment Questions (20 questions)
// ═══════════════════════════════════════════════════════════════════════════════

const c2Assessment: CourseQuiz[] = [
  {
    id: 'ocr-lc2-assess-1',
    question: 'How long is OCR Component 02 and how many marks is it worth?',
    options: [
      '1 hour 45 minutes, 60 marks',
      '2 hours, 80 marks',
      '1 hour 55 minutes, 80 marks',
      '2 hours 15 minutes, 100 marks',
    ],
    correct: 1,
    explanation:
      'OCR Component 02 is 2 hours long and worth 80 marks — 40 for reading (Section A) and 40 for writing (Section B).',
  },
  {
    id: 'ocr-lc2-assess-2',
    question: 'What type of text appears in Section A of Component 02?',
    options: [
      'Two non-fiction texts',
      'One unseen fiction extract',
      'A Shakespeare extract',
      'A non-fiction and a fiction text',
    ],
    correct: 1,
    explanation:
      'Component 02 Section A contains one unseen fiction extract. Questions test retrieval, language analysis, structural analysis, and evaluation.',
  },
  {
    id: 'ocr-lc2-assess-3',
    question: 'Which question specifically tests structural analysis in Component 02?',
    options: ['Q1', 'Q2', 'Q3', 'Q4'],
    correct: 2,
    explanation:
      'Q3 is the dedicated structural analysis question, testing how the writer organises and sequences the text to create effects.',
  },
  {
    id: 'ocr-lc2-assess-4',
    question: 'What are the five methods of characterisation?',
    options: [
      'Simile, metaphor, personification, alliteration, onomatopoeia',
      'Actions, speech, thoughts, appearance, reactions of others',
      'Plot, setting, theme, tone, mood',
      'First person, third person, omniscient, limited, unreliable',
    ],
    correct: 1,
    explanation:
      'The five methods are: actions (what they do), speech (what they say), thoughts (what they think), appearance (how they look), and reactions of others (how people respond to them).',
  },
  {
    id: 'ocr-lc2-assess-5',
    question: 'What is "pathetic fallacy"?',
    options: [
      'A logical error in an argument',
      'Weather or nature reflecting a character\'s emotions',
      'An unreliable narrator',
      'A type of irony',
    ],
    correct: 1,
    explanation:
      'Pathetic fallacy is when the natural world (especially weather) mirrors a character\'s emotional state — such as rain accompanying sadness or sunshine reflecting joy.',
  },
  {
    id: 'ocr-lc2-assess-6',
    question: 'What is a "semantic field"?',
    options: [
      'The setting of a fiction extract',
      'A group of related words that contribute to a dominant theme or atmosphere',
      'The literal meaning of a word',
      'A type of narrative structure',
    ],
    correct: 1,
    explanation:
      'A semantic field is a group of words related in meaning that collectively build a theme or atmosphere. Identifying semantic fields demonstrates analytical sophistication.',
  },
  {
    id: 'ocr-lc2-assess-7',
    question: 'What is structural analysis NOT?',
    options: [
      'Examining shifts in focus',
      'Analysing pacing and paragraph length',
      'Discussing word-level language choices like metaphors and similes',
      'Commenting on how information is revealed or withheld',
    ],
    correct: 2,
    explanation:
      'Structural analysis focuses on text organisation (shifts, pacing, openings, endings, information control). Word-level language choices like metaphors are language analysis (Q2), not structure (Q3).',
  },
  {
    id: 'ocr-lc2-assess-8',
    question: 'What is "in medias res"?',
    options: [
      'A type of ending',
      'Starting a story in the middle of the action without exposition',
      'A shift from present to past tense',
      'An extended metaphor',
    ],
    correct: 1,
    explanation:
      'In medias res (Latin: "in the middle of things") begins the narrative mid-action, immediately engaging the reader without background explanation.',
  },
  {
    id: 'ocr-lc2-assess-9',
    question: 'What makes a strong counter-argument in fiction evaluation?',
    options: [
      '"I personally did not enjoy this text"',
      '"The passage relies on familiar genre conventions, which may make the effect predictable"',
      '"The text is too short"',
      '"I disagree with everything the writer says"',
    ],
    correct: 1,
    explanation:
      'A strong counter-argument engages critically with the text — such as noting reliance on genre conventions. Personal preference ("I didn\'t enjoy it") is not analytical evaluation.',
  },
  {
    id: 'ocr-lc2-assess-10',
    question: 'What is "show, don\'t tell"?',
    options: [
      'Using visual imagery only',
      'Conveying emotions through actions and sensory details rather than directly stating them',
      'Showing your plan to the examiner',
      'Only writing dialogue',
    ],
    correct: 1,
    explanation:
      '"Show, don\'t tell" means revealing character, emotion, and atmosphere through actions, details, and dialogue rather than explicit statements. "She was scared" tells; "Her breath came in shallow gasps" shows.',
  },
  {
    id: 'ocr-lc2-assess-11',
    question: 'What is the most common narrative writing mistake at GCSE?',
    options: [
      'Using too few characters',
      'Writing too much plot instead of exploring a single moment in depth',
      'Making the story too short',
      'Using third person instead of first person',
    ],
    correct: 1,
    explanation:
      'Trying to fit too much plot into a short piece produces superficial writing. The best GCSE narratives focus on a small moment explored with vivid detail and character depth.',
  },
  {
    id: 'ocr-lc2-assess-12',
    question: 'Why is "it was all a dream" a weak ending?',
    options: [
      'Dreams cannot be described effectively',
      'It invalidates everything the reader invested in and is considered lazy',
      'It is grammatically incorrect',
      'It is too short for an ending',
    ],
    correct: 1,
    explanation:
      'The "it was all a dream" ending makes everything that happened irrelevant, undermining the reader\'s emotional investment. Examiners actively penalise it.',
  },
  {
    id: 'ocr-lc2-assess-13',
    question: 'What should descriptive writing engage beyond visual imagery?',
    options: [
      'Only hearing',
      'Multiple senses — sound, touch, smell, and taste as well as sight',
      'Only emotions',
      'Only movement',
    ],
    correct: 1,
    explanation:
      'Strong descriptive writing engages at least three senses. Sound, touch, smell, and taste create immersive, three-dimensional scenes that place the reader in the described world.',
  },
  {
    id: 'ocr-lc2-assess-14',
    question: 'What is an "extended metaphor"?',
    options: [
      'A simile that is very long',
      'A metaphor sustained across multiple sentences, a paragraph, or a whole text',
      'A metaphor that explains itself',
      'A metaphor used only in descriptive writing',
    ],
    correct: 1,
    explanation:
      'An extended metaphor is developed and sustained across multiple sentences or more, creating a unified, powerful comparison that gives coherence and depth to writing.',
  },
  {
    id: 'ocr-lc2-assess-15',
    question: 'Which narrative perspective is often considered most versatile for GCSE?',
    options: [
      'First person',
      'Second person',
      'Third person limited',
      'Third person omniscient',
    ],
    correct: 2,
    explanation:
      'Third person limited follows one character closely with slight distance, allowing both external description and internal thought. It is versatile and easier to control than omniscient perspective.',
  },
  {
    id: 'ocr-lc2-assess-16',
    question: 'What is a "motif" in creative writing?',
    options: [
      'The main character',
      'A recurring image or symbol that contributes to themes',
      'The climax of a story',
      'A type of dialogue',
    ],
    correct: 1,
    explanation:
      'A motif is a recurring image, symbol, or idea that runs through a text and builds thematic meaning. Using motifs demonstrates deliberate craft.',
  },
  {
    id: 'ocr-lc2-assess-17',
    question: 'What is "asyndetic listing" and what effect does it create?',
    options: [
      'A list with conjunctions; creates a slow pace',
      'A list without conjunctions; creates pace and accumulation',
      'A numbered list; creates formality',
      'A list of three; creates rhythm',
    ],
    correct: 1,
    explanation:
      'Asyndetic listing omits conjunctions (and, or, but), creating pace and a sense of accumulation or overwhelm.',
  },
  {
    id: 'ocr-lc2-assess-18',
    question: 'What distinguishes a Grade 9 creative writing response from a Grade 7?',
    options: [
      'More techniques and longer length',
      'Greater control — every detail feels chosen and purposeful',
      'Use of first person only',
      'More complex vocabulary',
    ],
    correct: 1,
    explanation:
      'The difference is control, not quantity. Grade 9 responses feel deliberate and purposeful — every technique, detail, and structural choice serves the writing\'s overall effect.',
  },
  {
    id: 'ocr-lc2-assess-19',
    question: 'How many marks is the creative writing task worth?',
    options: ['16 marks', '24 marks', '40 marks', '80 marks'],
    correct: 2,
    explanation:
      'The creative writing task is worth 40 marks (24 for AO5 content/organisation + 16 for AO6 technical accuracy) — half the entire paper.',
  },
  {
    id: 'ocr-lc2-assess-20',
    question: 'What should you do if you run out of time for the writing section?',
    options: [
      'Leave it blank and focus on reading',
      'Write a plan, strong opening, and strong ending — even incomplete responses earn marks',
      'Write as fast as possible without planning',
      'Copy text from the source extract',
    ],
    correct: 1,
    explanation:
      'A plan, opening paragraph, and ending paragraph can earn significant marks even if the middle is incomplete. An abandoned writing section earns zero — always attempt it.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Course Data Objects
// ═══════════════════════════════════════════════════════════════════════════════

const ocrLangC1: CourseData = {
  id: 'ocr-lang-c1',
  title: 'OCR GCSE English Language — Component 01',
  subtitle: 'Communicating Information and Ideas (J351/01)',
  tier: 'GCSE',
  board: 'OCR',
  specId: 'J351',
  specCode: 'J351/01',
  price: 0,
  duration: '12 weeks',
  level: 'GCSE (Years 10-11)',
  color: '#0891b2',
  description:
    'Master OCR Component 01: analyse non-fiction texts, compare viewpoints, evaluate writer effectiveness, and craft compelling transactional writing across all five forms — letters, articles, speeches, reports, and reviews.',
  moduleList: c1Modules,
  assessmentQuestions: c1Assessment,
};

const ocrLangC2: CourseData = {
  id: 'ocr-lang-c2',
  title: 'OCR GCSE English Language — Component 02',
  subtitle: 'Exploring Effects and Impact (J351/02)',
  tier: 'GCSE',
  board: 'OCR',
  specId: 'J351',
  specCode: 'J351/02',
  price: 0,
  duration: '12 weeks',
  level: 'GCSE (Years 10-11)',
  color: '#0e7490',
  description:
    'Master OCR Component 02: analyse fiction extracts for language, structure, and evaluation, then craft powerful narrative and descriptive writing with advanced creative techniques.',
  moduleList: c2Modules,
  assessmentQuestions: c2Assessment,
};

export const ocrCourses: CourseData[] = [ocrLangC1, ocrLangC2];
