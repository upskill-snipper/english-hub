import type { CourseData, CourseQuiz, CourseModule } from './courses';

// ═══════════════════════════════════════════════════════════════════════════════
// Edexcel GCSE English Language — Paper 1 Modules
// ═══════════════════════════════════════════════════════════════════════════════

const paper1Modules: CourseModule[] = [
// ──────────────────────────────────────────────
  // MODULE 1 — Paper 1 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m1',
    title: 'Paper 1 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>Edexcel GCSE English Language — Paper 1 (1EN2/01)</h2>

<p>Paper 1 is titled <strong>Non-Fiction Texts and Transactional Writing</strong>. It is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of the total GCSE. You have <strong>1 hour and 55 minutes</strong> to complete two sections.</p>

<div class="key-term"><strong>Key Term: 19th-Century Non-Fiction</strong> — A non-fiction text published between 1800 and 1899. This could be a letter, diary entry, newspaper article, travel writing, speech transcript, or essay from the Victorian or Romantic period.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A — Reading (40 marks):</strong> You are given one unseen 19th-century non-fiction extract and answer five questions on it.</li>
  <li><strong>Section B — Writing (40 marks):</strong> One extended transactional writing task (e.g. letter, article, speech, review).</li>
</ul>

<h3>Question-by-Question Breakdown</h3>
<ol>
  <li><strong>Q1 (1 mark)</strong> — Short comprehension. Identify a single piece of explicit information from the text.</li>
  <li><strong>Q2 (2 marks)</strong> — Give two things you learn about a topic from the text. Brief, factual responses.</li>
  <li><strong>Q3 (6 marks)</strong> — Analyse the effect of language choices. Select relevant quotations and explain how the writer uses language to achieve an effect.</li>
  <li><strong>Q4 (15 marks)</strong> — Analyse the whole text. How does the writer use language and structure to influence the reader? This is the highest-tariff reading question.</li>
  <li><strong>Q5 (16 marks)</strong> — Evaluate critically. To what extent do you agree with a given statement about the text? Requires a personal response supported by textual evidence.</li>
  <li><strong>Q6 (40 marks)</strong> — Transactional writing. 24 marks for <strong>AO5</strong> (content and organisation) and 16 marks for <strong>AO6</strong> (technical accuracy — spelling, punctuation, grammar).</li>
</ol>

<h3>Assessment Objectives</h3>
<ul>
  <li><strong>AO1</strong> — Identify and interpret explicit and implicit information and ideas.</li>
  <li><strong>AO2</strong> — Explain, comment on and analyse how writers use language and structure to achieve effects.</li>
  <li><strong>AO4</strong> — Evaluate texts critically and support this with appropriate textual references.</li>
  <li><strong>AO5</strong> — Communicate clearly, effectively and imaginatively; organise information using structural and grammatical features.</li>
  <li><strong>AO6</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect; spell and punctuate accurately.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Spend roughly 1 hour on Section A and 50–55 minutes on Section B. Within Section A, allocate time in proportion to the marks: Q1 and Q2 should take no more than 5 minutes combined, Q3 around 10 minutes, Q4 about 20 minutes, and Q5 about 20 minutes. Leave 5 minutes at the end for checking.</div>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0–5 min:</strong> Read the source text carefully, underlining key phrases.</li>
  <li><strong>5–10 min:</strong> Answer Q1 (1 mark) and Q2 (2 marks).</li>
  <li><strong>10–20 min:</strong> Answer Q3 (6 marks).</li>
  <li><strong>20–40 min:</strong> Answer Q4 (15 marks).</li>
  <li><strong>40–60 min:</strong> Answer Q5 (16 marks).</li>
  <li><strong>60–65 min:</strong> Plan your Q6 response.</li>
  <li><strong>65–105 min:</strong> Write your Q6 response (40 marks).</li>
  <li><strong>105–115 min:</strong> Proofread both sections.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on Q1 and Q2 (which are worth only 3 marks combined) and then running out of time on Q4 and Q5, which together carry 31 marks. Always keep your low-tariff answers brief.</div>
`,
    quiz: [
      {
        id: 'edx-lp1-m1-q1',
        question:
          'How long do students have to complete Edexcel Paper 1 (1EN2/01)?',
        options: [
          '1 hour 30 minutes',
          '1 hour 45 minutes',
          '1 hour 55 minutes',
          '2 hours',
        ],
        correct: 2,
        explanation:
          'Edexcel Paper 1 is 1 hour and 55 minutes long. This must be divided carefully between 40 marks of reading and 40 marks of writing.',
      },
      {
        id: 'edx-lp1-m1-q2',
        question:
          'How many marks is the transactional writing task (Q6) worth in total?',
        options: ['24 marks', '30 marks', '40 marks', '16 marks'],
        correct: 2,
        explanation:
          'Q6 is worth 40 marks in total — 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy).',
      },
      {
        id: 'edx-lp1-m1-q3',
        question:
          'Which Assessment Objective is tested by the evaluation question (Q5)?',
        options: ['AO1', 'AO2', 'AO4', 'AO6'],
        correct: 2,
        explanation:
          'Q5 tests AO4 — the ability to evaluate texts critically and support your judgement with appropriate textual references.',
      },
      {
        id: 'edx-lp1-m1-q4',
        question:
          'What is the best approximate time to spend on Q1 and Q2 combined?',
        options: [
          '15 minutes',
          '10 minutes',
          '5 minutes',
          '20 minutes',
        ],
        correct: 2,
        explanation:
          'Q1 and Q2 are worth only 3 marks combined. Around 5 minutes is sufficient — spending longer risks taking time from higher-tariff questions.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Reading 19th-Century Non-Fiction: Comprehension & Inference
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m2',
    title: 'Reading 19th-Century Non-Fiction: Comprehension & Inference',
    duration: '50 min',
    content: `
<h2>Q1 and Q2 — Comprehension &amp; Inference from 19th-Century Texts</h2>

<p>Questions 1 and 2 on Paper 1 test your ability to read a 19th-century non-fiction extract and identify <strong>explicit information</strong> (Q1) and <strong>implicit meaning</strong> (Q2). Together they are worth only 3 marks, but getting them right builds confidence and momentum for the rest of the paper.</p>

<div class="key-term"><strong>Key Term: Explicit Information</strong> — Facts or details that are directly stated in the text. No interpretation is needed — the answer can be lifted or closely paraphrased from the source.</div>

<div class="key-term"><strong>Key Term: Inference</strong> — Reading between the lines to work out something that is suggested but not directly stated. You combine evidence from the text with your own understanding to draw a conclusion.</div>

<h3>Practice Extract</h3>

<div class="text-extract">We entered the mill at half-past five in the morning. The air was thick with cotton dust, which settled upon the lips and filled the lungs with every breath. Children, some no older than eight or nine, stood at the spinning frames with bare feet upon the cold stone floor. Their faces were pale and drawn, their eyes dulled by exhaustion. The overseer paced between the rows, a leather strap coiled in his fist, and not a child dared look up from the machinery. The noise was so tremendous that one had to shout to be heard even at arm's length. I confess that I left the building that evening with a profound sense of shame that such conditions should exist in a nation that calls itself civilised.<div class="source">Adapted from a Victorian newspaper editorial on factory conditions, c. 1842</div></div>

<h3>Answering Q1 — Identify a Phrase (1 mark)</h3>

<p>A typical Q1 might read: <em>"Give one phrase from the text that shows the air quality inside the mill was poor."</em></p>

<ol>
  <li><strong>Locate the focus</strong> — the question asks about air quality.</li>
  <li><strong>Scan the extract</strong> — find a phrase that directly describes the air.</li>
  <li><strong>Copy or closely paraphrase</strong> — <em>"thick with cotton dust"</em> is a perfect single-phrase answer.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For Q1, keep your answer short — a phrase or single sentence is ideal. You do not need to explain or analyse; the examiner simply checks whether you have identified relevant information. One clear phrase is enough for the mark.</div>

<h3>Answering Q2 — Give Two Ways (2 marks)</h3>

<p>A typical Q2 might read: <em>"Give two things you learn about the children working in the mill."</em></p>

<ol>
  <li><strong>Find two separate details</strong> about the children — each one earns 1 mark.</li>
  <li><strong>State each clearly:</strong>
    <ul>
      <li>Point 1: Some of the children were as young as eight or nine years old.</li>
      <li>Point 2: They stood at the spinning frames with bare feet on the cold stone floor.</li>
    </ul>
  </li>
  <li><strong>Do not overlap</strong> — each point must offer distinct information.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Giving two points that say essentially the same thing. For example, writing "The children were tired" and "The children were exhausted" would likely earn only 1 mark because both points address the same idea. Make sure your two points cover different aspects.</div>

<h3>Common 19th-Century Vocabulary</h3>
<ul>
  <li><strong>Hitherto</strong> — until now / up to this point.</li>
  <li><strong>Countenance</strong> — a person's face or facial expression.</li>
  <li><strong>Endeavour</strong> — to try hard to achieve something.</li>
  <li><strong>Lamentable</strong> — extremely bad or regrettable.</li>
  <li><strong>Benevolent</strong> — well-meaning, kind, charitable.</li>
  <li><strong>Forthwith</strong> — immediately, without delay.</li>
  <li><strong>Render</strong> — to cause to become; to give or provide.</li>
  <li><strong>Prevail</strong> — to prove more powerful; to be widespread.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not panic if you encounter unfamiliar Victorian vocabulary. Use the surrounding context to work out meaning. If a word appears in a sentence describing hardship, it is likely negative in tone — and that contextual understanding is often enough to answer the question correctly.</div>

<h3>Annotated Model: Putting It Together</h3>
<p>Below is an example of how a full Q1 + Q2 response might look in the exam:</p>
<ul>
  <li><strong>Q1:</strong> <em>"thick with cotton dust"</em> — a direct phrase showing poor air quality. <strong>(1/1)</strong></li>
  <li><strong>Q2, Point 1:</strong> Some children were as young as eight or nine. <strong>(1/1)</strong></li>
  <li><strong>Q2, Point 2:</strong> Their faces were pale and drawn from exhaustion. <strong>(1/1)</strong></li>
</ul>

<p>Total: <strong>3/3</strong> in approximately 3–4 minutes. This leaves maximum time for the higher-tariff questions that follow.</p>
`,
    quiz: [
      {
        id: 'edx-lp1-m2-q1',
        question:
          'Based on the extract, which of the following is a correct phrase to answer a Q1 asking about air quality in the mill?',
        options: [
          '"a profound sense of shame"',
          '"thick with cotton dust"',
          '"pale and drawn"',
          '"a leather strap coiled in his fist"',
        ],
        correct: 1,
        explanation:
          '"Thick with cotton dust" directly describes the poor air quality inside the mill. The other options relate to the writer\'s feelings, the children\'s appearance, or the overseer — not air quality.',
      },
      {
        id: 'edx-lp1-m2-q2',
        question:
          'What does "inference" mean in the context of reading comprehension?',
        options: [
          'Copying a quotation directly from the text',
          'Summarising the whole text in one sentence',
          'Working out something suggested but not directly stated',
          'Identifying the genre of the text',
        ],
        correct: 2,
        explanation:
          'Inference means reading between the lines — combining textual evidence with your own understanding to draw a conclusion about something implied rather than explicitly stated.',
      },
      {
        id: 'edx-lp1-m2-q3',
        question:
          'Why would writing "The children were tired" and "The children were exhausted" likely earn only 1 mark on Q2?',
        options: [
          'Because neither point is supported by the text',
          'Because both points express essentially the same idea',
          'Because the answer is too short',
          'Because direct quotations are required',
        ],
        correct: 1,
        explanation:
          'Both points address the same idea (fatigue), so the examiner would credit only one of them. Q2 requires two distinct pieces of information to earn both marks.',
      },
      {
        id: 'edx-lp1-m2-q4',
        question:
          'What does the 19th-century word "countenance" mean?',
        options: [
          'To count or enumerate',
          'A person\'s face or facial expression',
          'A formal agreement or contract',
          'A large country estate',
        ],
        correct: 1,
        explanation:
          '"Countenance" means a person\'s face or facial expression. It appears frequently in Victorian prose and is worth recognising for the exam.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 3 — Paper 1 Q3: Language Analysis
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m3',
    title: 'Reading 19th-Century Non-Fiction: Language Analysis',
    duration: '55 min',
    content: `
<h2>Paper 1 Question 3 — Language &amp; Structure Analysis (6 marks, AO2)</h2>

<p>Question 3 on Edexcel Paper 1 (1EN2/01) is worth <strong>6 marks</strong> and tests <strong>AO2</strong>: your ability to explain, comment on and analyse how writers use language and structure to achieve effects, using relevant subject terminology. You should spend around <strong>12–15 minutes</strong> on this question.</p>

<div class="key-term"><strong>Key Term: AO2 — Language &amp; Structure</strong> — Analyse how writers use language (word choices, imagery, rhetorical devices) and structure (sentence forms, paragraph organisation, shifts in focus) to influence the reader.</div>

<h3>The 19th-Century Non-Fiction Extract</h3>

<div class="text-extract">We had been three days upon the river when the landscape began to change in a manner most extraordinary. The lush vegetation of the lowlands gave way, by degrees, to a barren and pitiless expanse of rock. The sun beat upon us with an intensity I had not thought possible in a civilised country; it pressed upon the skull like a heated iron and drew from every man aboard a silence born not of contentment, but of endurance. The water itself seemed to thicken — sluggish, brown, reluctant to carry us further into that desolate interior. I confess I felt, for the first time, a creeping apprehension. It was not fear, precisely, but rather the dawning recognition that Nature, in these remote reaches, cared nothing for our ambitions or our comfort.<div class="source">Original passage in the style of a Victorian travel account (c. 1870)</div></div>

<h3>Identifying the Writer's Methods</h3>

<p>Before you write, annotate the extract for three categories of technique:</p>

<ul>
  <li><strong>Rhetorical devices</strong> — The tricolon "our ambitions or our comfort" and the litotes "It was not fear, precisely" create a measured, reflective tone typical of Victorian prose.</li>
  <li><strong>Emotive &amp; sensory language</strong> — "pitiless expanse," "pressed upon the skull like a heated iron," and "creeping apprehension" appeal to physical sensation and build a growing sense of unease.</li>
  <li><strong>Structural shifts</strong> — The passage moves from factual observation ("three days upon the river") to vivid description and finally to personal confession ("I confess I felt"), mirroring the narrator's loss of detachment.</li>
</ul>

<h3>The PEEL Framework for Edexcel Q3</h3>

<p>Adapt the standard PEEL paragraph to suit a 6-mark question — you need <strong>two focused paragraphs</strong>, not a full essay:</p>

<ol>
  <li><strong>Point</strong> — Name the technique and its effect in one sentence.</li>
  <li><strong>Evidence</strong> — Embed a short quotation from the extract.</li>
  <li><strong>Explain</strong> — Analyse <em>how</em> the language choice creates meaning for the reader.</li>
  <li><strong>Link</strong> — Connect back to the writer's wider purpose or the reader's response.</li>
</ol>

<h3>Annotated Example Answer</h3>

<p><em>"The writer uses the simile 'pressed upon the skull like a heated iron' to convey the extreme physical discomfort of the journey. The verb 'pressed' suggests an inescapable, oppressive force, while the image of a 'heated iron' connotes both industrial punishment and branding — implying that the landscape is actively hostile and marking the travellers. This sensory detail shifts the reader's perception of the setting from mere inconvenience to genuine threat, reinforcing the structural movement from calm observation to personal unease."</em></p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> At Level 2 (4–6 marks), examiners want to see you move beyond feature-spotting. Always explain the <em>effect</em> of a technique on the reader, not just identify it. A single well-analysed quotation is worth more than three labelled devices with no exploration.</div>

<h3>Mark Scheme Level Descriptors</h3>
<ul>
  <li><strong>Level 1 (1–3 marks):</strong> Simple awareness of language or structure; may identify features but with limited or no explanation of effect. Comments tend to be general or descriptive.</li>
  <li><strong>Level 2 (4–6 marks):</strong> Clear, explained analysis of language and/or structure. Relevant use of subject terminology. Comments on the effect of the writer's choices on the reader, supported by appropriate textual references.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about what happens in the extract rather than how it is written. Saying "The sun was very hot and the men were quiet" is summary, not analysis. Always ask yourself: <em>what technique is being used, and what does it make the reader think or feel?</em></div>

<p>Remember: two tight PEEL paragraphs with precise terminology and embedded quotation will comfortably reach Level 2. Quality of analysis, not quantity, is what earns the marks.</p>
`,
    quiz: [
      {
        id: 'edx-lp1-m3-q1',
        question:
          'How many marks is Edexcel Paper 1 Question 3 worth?',
        options: ['4 marks', '6 marks', '8 marks', '12 marks'],
        correct: 1,
        explanation:
          'Question 3 is worth 6 marks and assesses AO2 — your ability to analyse language and structure.',
      },
      {
        id: 'edx-lp1-m3-q2',
        question:
          'Which Assessment Objective does Q3 primarily test?',
        options: [
          'AO1 — Identify and interpret information',
          'AO2 — Analyse language and structure',
          'AO3 — Compare writers\' ideas',
          'AO4 — Critically evaluate texts',
        ],
        correct: 1,
        explanation:
          'Q3 tests AO2: explaining, commenting on and analysing how writers use language and structure to achieve effects and influence readers.',
      },
      {
        id: 'edx-lp1-m3-q3',
        question:
          'What is the key difference between a Level 1 and a Level 2 response on Q3?',
        options: [
          'Level 2 uses longer quotations',
          'Level 2 identifies more techniques',
          'Level 2 explains the effect of techniques on the reader',
          'Level 2 includes a conclusion paragraph',
        ],
        correct: 2,
        explanation:
          'Level 2 responses go beyond identification to explain the effect of the writer\'s choices on the reader, using appropriate subject terminology.',
      },
      {
        id: 'edx-lp1-m3-q4',
        question:
          'In the PEEL framework for Q3, what does the "E" for Explain require you to do?',
        options: [
          'Give an example from the text',
          'Explain what happens next in the extract',
          'Analyse how the language choice creates meaning for the reader',
          'Evaluate whether the technique is effective',
        ],
        correct: 2,
        explanation:
          'The Explain step requires you to analyse how the specific language choice creates meaning or an effect for the reader — this is the analytical core of your paragraph.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Paper 1 Q4: Evaluation
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m4',
    title: 'Reading 19th-Century Non-Fiction: Evaluation',
    duration: '55 min',
    content: `
<h2>Paper 1 Question 4 — Critical Evaluation (15 marks, AO4)</h2>

<p>Question 4 on Edexcel Paper 1 (1EN2/01) is the highest-tariff reading question at <strong>15 marks</strong>, testing <strong>AO4</strong>: critical evaluation. You will be given a statement from "a student" about the 19th-century extract and asked <strong>"How far do you agree?"</strong>. You should spend approximately <strong>25 minutes</strong> on this question.</p>

<div class="key-term"><strong>Key Term: Evaluation (AO4)</strong> — Making a critical judgement about a text, supported by analysis of the writer's methods. Evaluation means explaining <em>how effectively</em> the writer achieves something, not simply describing what they do.</div>

<h3>Evaluation vs Analysis — The Key Distinction</h3>

<p>Many students confuse evaluation with analysis. Here is the difference:</p>

<ul>
  <li><strong>Analysis (AO2):</strong> "The writer uses a metaphor to describe the heat." — This identifies and explains a technique.</li>
  <li><strong>Evaluation (AO4):</strong> "The writer's use of metaphor is particularly effective in conveying the heat because it forces the reader to feel the physical weight of the climate, making the statement convincing." — This <em>judges how successfully</em> the technique works.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing what happens in the text or listing techniques without ever saying whether they are effective. If your response could answer a Q3 language analysis question just as well, you are not evaluating. Every paragraph must include a judgement word: <em>effectively, convincingly, successfully, powerfully, less successfully</em>.</div>

<h3>The "Student Statement" Approach</h3>

<div class="text-extract">"A student said: 'The writer makes the journey sound truly dangerous and frightening.' How far do you agree with this statement? You should refer to the text to support your answer."<div class="source">Typical Edexcel Q4 prompt format</div></div>

<p>Your response must do three things:</p>
<ol>
  <li><strong>Engage with the statement</strong> — Do you agree, partly agree, or disagree? State your position clearly.</li>
  <li><strong>Support with the writer's methods</strong> — Select specific techniques from the extract and evaluate how effectively they achieve what the student claims.</li>
  <li><strong>Sustain a critical perspective</strong> — Maintain your evaluative voice throughout; do not slip into pure summary or description.</li>
</ol>

<h3>5-Level Mark Scheme Breakdown</h3>
<ul>
  <li><strong>Level 1 (1–3 marks):</strong> Simple, limited comment with little reference to the text. No clear evaluation.</li>
  <li><strong>Level 2 (4–6 marks):</strong> Some attempts to evaluate with general references to the text, but comments tend to be assertion rather than supported judgement.</li>
  <li><strong>Level 3 (7–9 marks):</strong> A clear attempt at evaluation supported by relevant textual references. Some awareness of the writer's methods, though analysis may be uneven.</li>
  <li><strong>Level 4 (10–12 marks):</strong> Thoughtful, developed evaluation with well-chosen references and clear analysis of the writer's methods. Sustained engagement with the statement.</li>
  <li><strong>Level 5 (13–15 marks):</strong> Perceptive, convincing evaluation with precise, discriminating references. Sophisticated analysis of the writer's methods and their effects.</li>
</ul>

<h3>Model Answer (Level 4–5)</h3>

<p><em>"I largely agree with the student's claim that the writer makes the journey sound 'truly dangerous and frightening,' though I would argue the writer achieves something more nuanced — a sense of creeping dread rather than outright terror. The personification of the landscape as 'pitiless' is highly effective in establishing danger because it suggests the environment possesses a deliberate, almost malicious intent; this is far more unsettling than a simple description of harsh terrain. Furthermore, the structural shift from objective observation — 'three days upon the river' — to the intimate confession 'I confess I felt, for the first time, a creeping apprehension' convincingly traces the narrator's psychological unravelling. The word 'creeping' is particularly well-chosen: it implies the fear is gradual and insidious rather than sudden, which makes it feel more realistic and therefore more frightening. However, the writer's use of litotes — 'It was not fear, precisely' — partially undercuts the student's claim, as it introduces intellectual restraint that tempers the emotional impact. The danger feels controlled and reflected upon rather than raw, suggesting the writer aims to convey a more complex emotional response than simple fright."</em></p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best responses are not simply "I agree" from start to finish. Examiners reward nuance — partially agreeing, qualifying the statement, or identifying where the writer is less successful shows genuine critical engagement and pushes you into Level 4 and above.</div>

<h3>Timing and Structure</h3>

<p>With <strong>25 minutes</strong> and 15 marks at stake, plan your response carefully:</p>
<ul>
  <li><strong>2–3 minutes planning:</strong> Read the statement, annotate the extract for relevant methods, decide your overall position.</li>
  <li><strong>18–20 minutes writing:</strong> Aim for 3–4 developed paragraphs. Each should contain a judgement, a method, evidence, and an explanation of effectiveness.</li>
  <li><strong>2 minutes checking:</strong> Ensure every paragraph includes an evaluative judgement, not just analysis.</li>
</ul>

<p>Question 4 is where the top marks are won and lost. The students who score highly are those who treat the extract as something to be <em>judged</em>, not just described.</p>
`,
    quiz: [
      {
        id: 'edx-lp1-m4-q1',
        question:
          'How many marks is Edexcel Paper 1 Question 4 worth?',
        options: ['6 marks', '10 marks', '12 marks', '15 marks'],
        correct: 3,
        explanation:
          'Question 4 is worth 15 marks — the highest-tariff reading question on Paper 1 — and tests AO4: critical evaluation.',
      },
      {
        id: 'edx-lp1-m4-q2',
        question:
          'What is the key difference between analysis (AO2) and evaluation (AO4)?',
        options: [
          'Evaluation uses longer quotations than analysis',
          'Analysis identifies techniques; evaluation judges how effectively they work',
          'Evaluation requires you to disagree with the writer',
          'Analysis focuses on language; evaluation focuses on structure only',
        ],
        correct: 1,
        explanation:
          'Analysis (AO2) identifies and explains techniques. Evaluation (AO4) goes further by making a critical judgement about how effectively those techniques achieve the writer\'s purpose.',
      },
      {
        id: 'edx-lp1-m4-q3',
        question:
          'Which of the following is the best evaluative statement?',
        options: [
          'The writer uses a simile to describe the sun.',
          'The passage is about a difficult river journey.',
          'The writer\'s simile is highly effective because it forces the reader to feel physical discomfort, making the danger convincing.',
          'There are many techniques in this paragraph, such as metaphor and personification.',
        ],
        correct: 2,
        explanation:
          'The best evaluative statement judges the effectiveness of the technique ("highly effective because…") and explains its impact on the reader, rather than simply identifying or describing it.',
      },
      {
        id: 'edx-lp1-m4-q4',
        question:
          'Approximately how long should you spend on Q4 in the exam?',
        options: ['10 minutes', '15 minutes', '25 minutes', '35 minutes'],
        correct: 2,
        explanation:
          'At 15 marks, Q4 is the most heavily weighted reading question. Around 25 minutes allows time for planning, 3–4 developed paragraphs, and a brief check.',
      },
      {
        id: 'edx-lp1-m4-q5',
        question:
          'What common mistake causes students to score Level 2 instead of Level 4?',
        options: [
          'Using too many quotations',
          'Writing in paragraphs that are too short',
          'Describing what happens rather than evaluating how effectively the writer achieves it',
          'Disagreeing with the student\'s statement',
        ],
        correct: 2,
        explanation:
          'The most common reason students stay at Level 2 is that they describe or analyse without evaluating. Every paragraph must include a judgement about how effectively the writer\'s methods work.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 5 — 19th-Century Non-Fiction: Context & Text Types
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m5',
    title: '19th-Century Non-Fiction: Context & Text Types',
    duration: '50 min',
    content: `
<h2>19th-Century Non-Fiction — Context &amp; Text Types</h2>

<p>Section A of Edexcel Paper 1 (1EN2/01) presents a <strong>19th-century non-fiction text</strong>. To read it confidently you need familiarity with the <em>text types</em> the exam draws from and the <em>historical context</em> that shaped how people wrote.</p>

<div class="key-term"><strong>Key Term: Non-Fiction</strong> — Writing about real people, events, or ideas. In this paper it is always from the 19th century (1800–1899).</div>

<h3>The Seven Core Text Types</h3>

<ol>
  <li><strong>Letters</strong> — Named addressee, salutation, sign-off; tone shifts with the relationship. Often reveal private opinions.</li>
  <li><strong>Diaries &amp; Journals</strong> — Dated entries, first-person voice, candid register. The writer assumes no audience.</li>
  <li><strong>Speeches</strong> — Written to be spoken aloud. Rich in rhetorical devices: tricolon, direct address, repetition, emotive language.</li>
  <li><strong>Newspaper Articles</strong> — Victorian journalism; longer sentences than modern press, informative or persuasive purpose.</li>
  <li><strong>Travel Writing</strong> — Sensory description, comparison with "home," narrative thread. Often reveals imperial attitudes.</li>
  <li><strong>Essays</strong> — Formal register, logical structure. Common in periodicals such as Dickens' <em>Household Words</em>.</li>
  <li><strong>Pamphlets</strong> — Short, persuasive, urgent tone, calls to action. Linked to social reform campaigns.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to name the text type, but recognising the form helps you anticipate conventions — e.g. a speech uses repetition <em>on purpose</em>, not as a flaw.</div>

<h3>Historical Context</h3>

<ul>
  <li><strong>Industrial Revolution</strong> — Urbanisation, factory labour, class divides; many texts argue for reform.</li>
  <li><strong>British Empire</strong> — Travel writing reflects imperial attitudes: superiority, curiosity, missionary zeal.</li>
  <li><strong>Social Reform</strong> — Abolition, suffrage, child labour laws. Campaign speeches and pamphlets appear regularly.</li>
  <li><strong>Victorian Values</strong> — Duty, morality, respectability permeate tone and register.</li>
  <li><strong>Education</strong> — The 1870 Education Act expanded schooling; newspapers targeted working-class readers.</li>
</ul>

<div class="key-term"><strong>Key Term: Context</strong> — The social, historical, and cultural circumstances in which a text was produced, influencing purpose, audience, language, and assumptions.</div>

<div class="text-extract">"I have seen the wretched hovels in which the labouring poor are compelled to live — rooms scarcely six feet square, swarming with vermin. That such scenes exist within a mile of this great Parliament is a disgrace to every man who sits within it."<div class="source">Adapted from a 19th-century Parliamentary speech on public health</div></div>

<p>The formal register suits Parliament, the emotive language ("wretched hovels," "swarming with vermin") demands reform, and the direct challenge to MPs exploits Victorian moral duty — context shapes every choice.</p>

<h3>Archaic Vocabulary Glossary</h3>

<table>
  <tr><th>Archaic</th><th>Modern</th></tr>
  <tr><td><strong>hitherto</strong></td><td>until now</td></tr>
  <tr><td><strong>whence</strong></td><td>from where</td></tr>
  <tr><td><strong>ere</strong></td><td>before</td></tr>
  <tr><td><strong>countenance</strong></td><td>face / expression</td></tr>
  <tr><td><strong>forthwith</strong></td><td>immediately</td></tr>
  <tr><td><strong>henceforth</strong></td><td>from this point on</td></tr>
  <tr><td><strong>endeavour</strong></td><td>try / attempt</td></tr>
  <tr><td><strong>perchance</strong></td><td>perhaps</td></tr>
  <tr><td><strong>whereupon</strong></td><td>after which</td></tr>
  <tr><td><strong>beseech</strong></td><td>beg / implore</td></tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming unfamiliar vocabulary means you cannot understand the text. Most archaic words can be decoded from context — read the full sentence before giving up on a word.</div>
`,
    quiz: [
      {
        id: 'edx-lp1-m5-q1',
        question:
          'Which of the following is NOT a text type that could appear in Edexcel Paper 1 Section A?',
        options: [
          'A 19th-century diary entry',
          'A 19th-century newspaper article',
          'A modern broadsheet editorial',
          'A 19th-century travel account',
        ],
        correct: 2,
        explanation:
          'Paper 1 Section A always uses a 19th-century non-fiction source. A modern broadsheet editorial belongs to Paper 2, which uses 20th/21st-century fiction and literary non-fiction.',
      },
      {
        id: 'edx-lp1-m5-q2',
        question:
          'Why is historical context important when analysing a 19th-century text?',
        options: [
          'It allows you to write a biography of the author',
          'It helps explain the writer\'s language choices, purpose, and assumptions',
          'It is required for the spelling and grammar marks',
          'It proves that the text is non-fiction rather than fiction',
        ],
        correct: 1,
        explanation:
          'Context shapes why a writer makes particular choices. Understanding the social and historical backdrop helps you explain the effect of language, structure, and tone rather than simply describing features.',
      },
      {
        id: 'edx-lp1-m5-q3',
        question:
          'What does the archaic word "ere" mean in modern English?',
        options: ['After', 'Before', 'Because', 'Although'],
        correct: 1,
        explanation:
          '"Ere" is an archaic word meaning "before." It appears frequently in 19th-century prose and poetry, for example: "Ere the sun set, we had reached the valley."',
      },
      {
        id: 'edx-lp1-m5-q4',
        question:
          'Which feature would you most expect to find in a 19th-century pamphlet?',
        options: [
          'Dated entries written in a confessional tone',
          'A direct call to action on a social or political issue',
          'Rich sensory description of a foreign landscape',
          'A formal salutation and personal sign-off',
        ],
        correct: 1,
        explanation:
          'Pamphlets were short, persuasive publications designed to rally support for a cause. A direct call to action is their defining feature. Dated entries suggest a diary, sensory description suggests travel writing, and a salutation suggests a letter.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Transactional Writing: Planning & Structure
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m6',
    title: 'Transactional Writing: Planning & Structure',
    duration: '55 min',
    content: `
<h2>Transactional Writing — Planning &amp; Structure</h2>

<p>Section B is the <strong>transactional writing</strong> task: <strong>40 marks</strong> (24 AO5 content/organisation + 16 AO6 technical accuracy). You choose <em>one of two tasks</em>, each specifying a form, audience, and purpose.</p>

<div class="key-term"><strong>Key Term: AO5 — Content &amp; Organisation</strong> — Rewards effective, engaging communication with clearly organised ideas. Worth 24 of the 40 marks.</div>

<h3>The Five Transactional Forms</h3>

<ul>
  <li><strong>Article</strong> — Headline, optional subheading, engaging opening, paragraphed body.</li>
  <li><strong>Letter</strong> — Addresses, date, salutation, formal paragraphs, sign-off ("Yours sincerely/faithfully").</li>
  <li><strong>Speech</strong> — Direct address, rhetorical devices (tricolon, anaphora), clear closing statement.</li>
  <li><strong>Review</strong> — Clear opinion, specific detail, balanced praise and criticism.</li>
  <li><strong>Guide / Leaflet</strong> — Subheadings, bullet points, direct address ("you"), helpful tone.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Read both tasks before choosing. Pick the one where you can most easily generate ideas and sustain a clear structure — not the one that merely sounds more interesting.</div>

<h3>The 5-Minute Plan</h3>

<ol>
  <li><strong>Decode the task</strong> — Underline the <em>form</em>, <em>audience</em>, and <em>purpose</em> (FAP).</li>
  <li><strong>Brain-dump</strong> — Write 6–8 ideas quickly without censoring.</li>
  <li><strong>Select and sequence</strong> — Choose 4–5 strongest ideas and number them logically.</li>
  <li><strong>Plan your opening</strong> — A bold statement, anecdote, rhetorical question, or statistic.</li>
  <li><strong>Plan your closing</strong> — A circular return, call to action, or powerful final line.</li>
</ol>

<h3>Structural Frameworks</h3>

<h4>Paragraph Organisation — TIPTOP</h4>

<div class="key-term"><strong>Key Term: TIPTOP</strong> — A mnemonic for starting new paragraphs: <strong>T</strong>ime, <strong>I</strong>dea, <strong>P</strong>erson, <strong>T</strong>opic, <strong>O</strong>pinion, <strong>P</strong>lace. Change any of these and you need a new paragraph.</div>

<p>Each paragraph should develop <strong>one main idea</strong>. Open with a topic sentence, expand with evidence or detail, and close with a link to your argument or the next paragraph.</p>

<h4>Discourse Markers</h4>
<p>Use varied connectives to signal shifts: <strong>Adding</strong> — Furthermore, Moreover, Equally; <strong>Contrasting</strong> — However, Nevertheless, Conversely; <strong>Cause/effect</strong> — Consequently, Therefore, Thus; <strong>Sequencing</strong> — First, Subsequently, Finally.</p>

<div class="text-extract"><strong>Sample Plan — "Write a speech arguing a disused car park should become a community garden."</strong><br><br><em>Form:</em> Speech | <em>Audience:</em> Council | <em>Purpose:</em> Argue<br>1. Hook — "When did this car park last serve anyone but the pigeons?"<br>2. Problem — litter, antisocial behaviour, wasted space<br>3. Solution — green space, food growing, community events<br>4. Benefits — mental health, cohesion, property values<br>5. Counter — cost? Grants, volunteers, long-term savings<br>6. Closing — call to action + circular return<div class="source">Exemplar 5-minute plan</div></div>

<h3>AO5 Mark Scheme Levels</h3>

<ul>
  <li><strong>Level 1 (1–5)</strong> — Simple, limited. Ideas listed, minimal paragraphing.</li>
  <li><strong>Level 2 (6–10)</strong> — Some attempt at purpose/audience. Basic structure.</li>
  <li><strong>Level 3 (11–15)</strong> — Clear, consistent. Organised paragraphs, appropriate register.</li>
  <li><strong>Level 4 (16–20)</strong> — Compelling, convincing. Well-crafted paragraphs, confident register.</li>
  <li><strong>Level 5 (21–24)</strong> — Sophisticated, structurally inventive with sustained reader impact.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Jumping straight into writing without a plan. Unplanned responses lose coherence after the second paragraph and repeat points. Even strong writers rarely exceed Level 3 without planning.</div>
`,
    quiz: [
      {
        id: 'edx-lp1-m6-q1',
        question:
          'How are the 40 marks for Section B divided between the two assessment objectives?',
        options: [
          '20 marks AO5 + 20 marks AO6',
          '24 marks AO5 + 16 marks AO6',
          '30 marks AO5 + 10 marks AO6',
          '16 marks AO5 + 24 marks AO6',
        ],
        correct: 1,
        explanation:
          'Section B awards 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy), totalling 40 marks.',
      },
      {
        id: 'edx-lp1-m6-q2',
        question:
          'What does the mnemonic TIPTOP help you remember?',
        options: [
          'The five transactional writing forms',
          'The order of discourse markers in an essay',
          'Reasons to start a new paragraph: Time, Idea, Person, Topic, Opinion, Place',
          'The five levels of the AO5 mark scheme',
        ],
        correct: 2,
        explanation:
          'TIPTOP stands for Time, Idea, Person, Topic, Opinion, Place. When any of these changes, you should begin a new paragraph to keep your writing clearly organised.',
      },
      {
        id: 'edx-lp1-m6-q3',
        question:
          'Which of the following is the BEST opening for a persuasive speech?',
        options: [
          '"I am going to talk about why we need more green spaces."',
          '"In this speech I will argue that parks are important."',
          '"When did we decide that concrete was more valuable than the air we breathe?"',
          '"Green spaces are quite nice and I think we should have more of them."',
        ],
        correct: 2,
        explanation:
          'A rhetorical question immediately engages the audience and establishes a compelling tone. The other options are too generic, too informal, or merely announce the topic rather than drawing the audience in.',
      },
      {
        id: 'edx-lp1-m6-q4',
        question:
          'At which AO5 level does writing become "compelling" and "convincing" with "well-crafted" paragraphs?',
        options: [
          'Level 2 (6–10 marks)',
          'Level 3 (11–15 marks)',
          'Level 4 (16–20 marks)',
          'Level 5 (21–24 marks)',
        ],
        correct: 2,
        explanation:
          'Level 4 (16–20 marks) is described as compelling, convincing writing with well-crafted paragraphs and confident use of register. Level 5 goes further, requiring sophisticated and structurally inventive writing.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 7 — Transactional Writing: Audience, Purpose & Form
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m7',
    title: 'Transactional Writing: Audience, Purpose & Form',
    duration: '55 min',
    content: `
<h2>Audience, Purpose &amp; Form — The Foundation of Section B</h2>

<p>Section B of Edexcel Paper 1 (1EN2/01) asks you to produce a <strong>transactional/discursive</strong> piece. Before writing, lock in three things: <em>who</em> you are writing for (audience), <em>why</em> (purpose), and <em>what shape</em> it takes (form). Get these wrong and your response feels generic — rarely scoring above Level 3.</p>

<h3>1. Audience</h3>
<ul>
  <li><strong>Formal</strong> (headteacher, council, editor) — Standard English, measured tone, no slang.</li>
  <li><strong>Informal</strong> (peers, younger students) — conversational register is fine, but accuracy still matters.</li>
  <li><strong>Authority figures</strong> — hedge politely (<em>"It could be argued…"</em>) and use evidence.</li>
</ul>

<div class="key-term"><strong>Key Term: Register</strong> — The level of formality in your writing, determined by audience and purpose. Shifting register mid-piece is one of the most common reasons students drop marks on AO5.</div>

<h3>2. Purpose</h3>
<ol>
  <li><strong>Argue</strong> — take a clear position and defend it with logic and evidence.</li>
  <li><strong>Persuade</strong> — move the reader to action using rhetorical techniques.</li>
  <li><strong>Advise</strong> — offer guidance in a supportive, knowledgeable tone.</li>
  <li><strong>Inform</strong> — present facts and ideas clearly, with explanation where needed.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Many tasks blend purposes — e.g. <em>"Write an article arguing that…"</em> is both argue <strong>and</strong> inform. Identify the dominant purpose, but weave in the secondary one for a sophisticated response.</div>

<h3>3. Form Conventions</h3>
<table>
  <tr><th>Form</th><th>Key Conventions</th></tr>
  <tr><td><strong>Article</strong></td><td>Headline, strapline, subheadings, opening hook, call to action.</td></tr>
  <tr><td><strong>Letter</strong></td><td>Addresses, date, salutation (<em>Dear Sir/Madam</em>), sign-off (<em>Yours faithfully</em> if unnamed, <em>Yours sincerely</em> if named).</td></tr>
  <tr><td><strong>Speech</strong></td><td>Direct address, rhetorical questions, tricolon, inclusive pronouns (<em>we, us</em>), powerful closing.</td></tr>
  <tr><td><strong>Review</strong></td><td>Star rating or verdict, balanced evaluation, personal voice, recommendation.</td></tr>
</table>

<h3>Sample Task — Two Versions Compared</h3>

<div class="text-extract"><em>"A national newspaper is inviting young people to contribute articles on whether school uniforms should be abolished. Write an article arguing your point of view."</em><div class="source">Edexcel-style transactional writing prompt</div></div>

<p><strong>Version A — Correct form:</strong></p>
<div class="text-extract">
<strong style="font-size:1.1em;">Uniforms: The Straightjacket Schools Won't Let Go Of</strong><br/>
<em>Why forcing students into identical outfits does more harm than good</em><br/><br/>
<strong>The illusion of equality</strong><br/>
Walk into any British secondary school and you will see rows of blazers and ties — a comforting image of discipline. But beneath the surface, uniforms mask inequality rather than erase it…
<div class="source">Headline, strapline, subheading, formal register</div></div>

<p><strong>Version B — Ignores form:</strong></p>
<div class="text-extract">
I think school uniforms should be abolished. They are expensive and students don't like them. In this essay I will explain why…
<div class="source">No headline, no hook — reads as a generic essay</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "In this essay I will…" is a red flag — it signals the student has ignored form. Articles need headlines and hooks, not essay introductions.</div>

<p>Version A signals <strong>craft</strong> from the first line. Version B reads as formless and will struggle to reach Level 3 on AO5.</p>
`,
    quiz: [
      {
        id: 'edx-lp1-m7-q1',
        question:
          'If a letter is addressed to "Dear Sir/Madam", which sign-off should you use?',
        options: [
          'Yours sincerely',
          'Yours faithfully',
          'Kind regards',
          'Best wishes',
        ],
        correct: 1,
        explanation:
          '"Yours faithfully" is the correct sign-off when the recipient is unnamed (Dear Sir/Madam). "Yours sincerely" is used when you know the recipient\'s name (Dear Mr Smith).',
      },
      {
        id: 'edx-lp1-m7-q2',
        question:
          'Which of the following is NOT a standard convention of a newspaper article?',
        options: [
          'A headline summarising the argument',
          'Subheadings to organise sections',
          'A salutation such as "Dear Editor"',
          'An engaging opening hook',
        ],
        correct: 2,
        explanation:
          'A salutation like "Dear Editor" belongs to a letter, not an article. Articles use headlines, straplines, subheadings, and hooks to engage the reader.',
      },
      {
        id: 'edx-lp1-m7-q3',
        question:
          'A task asks you to "write a speech to your year group persuading them to support a charity fundraiser." What is the dominant purpose?',
        options: ['Argue', 'Inform', 'Advise', 'Persuade'],
        correct: 3,
        explanation:
          'The keyword "persuading" makes persuasion the dominant purpose. While you may include factual information about the charity, the primary goal is to move your audience to action.',
      },
      {
        id: 'edx-lp1-m7-q4',
        question:
          'Which register would be most appropriate for an article written for a broadsheet newspaper?',
        options: [
          'Informal with slang and contractions',
          'Formal with Standard English and a measured tone',
          'Casual with emojis and abbreviations',
          'Poetic with extended metaphors throughout',
        ],
        correct: 1,
        explanation:
          'A broadsheet newspaper expects formal Standard English with a confident, measured tone. Slang, contractions, and overly casual language would be inappropriate for this audience.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Transactional Writing: Persuasive Techniques
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m8',
    title: 'Transactional Writing: Persuasive Techniques',
    duration: '55 min',
    content: `
<h2>Persuasive Techniques — Building a Grade 8–9 Response</h2>

<p>Audience, purpose, and form get you to Level 3. To reach <strong>Level 4–5</strong> on AO5, you need persuasive techniques deployed with <em>precision</em>, not scattered randomly.</p>

<h3>1. AFOREST — The Core Toolkit</h3>

<table>
  <tr><th>Technique</th><th>Example</th></tr>
  <tr><td><strong>A</strong>lliteration</td><td><em>"brutal, broken Britain"</em></td></tr>
  <tr><td><strong>F</strong>acts</td><td><em>"1.4 million UK children live in poverty"</em></td></tr>
  <tr><td><strong>O</strong>pinions as fact</td><td><em>"It is undeniable that…"</em></td></tr>
  <tr><td><strong>R</strong>hetorical Qs</td><td><em>"How can we call ourselves civilised…?"</em></td></tr>
  <tr><td><strong>E</strong>motive language</td><td><em>"abandoned", "devastating"</em></td></tr>
  <tr><td><strong>S</strong>tatistics</td><td><em>"73% of teachers report…"</em></td></tr>
  <tr><td><strong>T</strong>ricolon</td><td><em>"Act, change, succeed."</em></td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Top-band responses <em>integrate</em> techniques into chains — rhetorical question, then statistic, then emotive language. Orchestra, not checklist.</div>

<h3>2. Advanced Rhetoric</h3>
<ul>
  <li><strong>Counter-arguments &amp; rebuttals</strong> — Acknowledge the opposing view, then dismantle it.</li>
  <li><strong>Anecdotes</strong> — A brief story humanises your argument.</li>
  <li><strong>Expert testimony</strong> — Citing authority adds credibility.</li>
  <li><strong>Tone modulation</strong> — Shifting from calm reasoning to passion shows voice control.</li>
</ul>

<div class="key-term"><strong>Key Term: Counter-argument</strong> — Presenting and refuting the opposing view. Shows the writer has weighed multiple perspectives.</div>

<h3>3. Annotated Model Answer (Grade 8–9)</h3>

<p>Task: <em>"Write an article arguing the school day should be shortened."</em></p>

<div class="text-extract">
<strong style="font-size:1.1em;">Shorter Days, Sharper Minds</strong> <em>[Alliteration]</em><br/>
<em>Why a Victorian timetable is failing a modern generation</em> <em>[Strapline]</em><br/><br/>
Eight million children drag themselves through school gates for seven hours. <em>[Statistic + emotive verb]</em> By 2 p.m., classrooms are graveyards of concentration: eyes glazed, pens idle, minds elsewhere. <em>[Tricolon + metaphor]</em><br/><br/>
Some insist shorter days mean less learning <em>[Counter-argument]</em> — but this confuses <em>time spent</em> with <em>time well spent</em>. <em>[Rebuttal]</em><br/><br/>
We owe our children energy, not exhaustion. Curiosity, not compliance. A future, not a formula. <em>[Tricolon + antithesis]</em>
<div class="source">Annotated model — Grade 8–9</div></div>

<h3>4. AO5 Level 4–5 Descriptors</h3>
<ul>
  <li><strong>Level 5 (21–24):</strong> Compelling, ambitious vocabulary, sustained crafting, register matched to audience.</li>
  <li><strong>Level 4 (16–20):</strong> Convincing, secure register, connected ideas, effective techniques.</li>
</ul>

<h3>5. Before &amp; After Upgrade</h3>

<p><strong>Before (Level 2–3):</strong></p>
<div class="text-extract">School days are too long and students get tired. I think we should make school shorter.<div class="source">Generic, no techniques, flat vocabulary</div></div>

<p><strong>After (Level 4–5):</strong></p>
<div class="text-extract">By afternoon, the classroom is a theatre of disengagement: heads propped on hands, whispered conversations, the clock drowning out the teacher. Dr Levitin confirms the adolescent brain cannot sustain focus beyond four hours. Yet we persist with a model designed not for learning, but for childcare.<div class="source">Tricolon, expert testimony, counter-argument, emotive language</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Techniques in isolation — one rhetorical question in a flat paragraph. Examiners reward <em>sustained</em> craft, not isolated devices.</div>
`,
    quiz: [
      {
        id: 'edx-lp1-m8-q1',
        question: 'What does the "T" in AFOREST stand for?',
        options: [
          'Tone',
          'Testimony',
          'Tricolon (rule of three)',
          'Thesis statement',
        ],
        correct: 2,
        explanation:
          'The "T" stands for Tricolon, also known as the rule of three. It creates a sense of completeness and emphasis — e.g. "We must act, we must change, we must succeed."',
      },
      {
        id: 'edx-lp1-m8-q2',
        question:
          'Why is including a counter-argument a sign of high-level writing?',
        options: [
          'It makes your piece longer, which earns more marks',
          'It shows you have considered multiple perspectives before reaching a conclusion',
          'It allows you to use more quotations',
          'It is a requirement of the mark scheme at every level',
        ],
        correct: 1,
        explanation:
          'Counter-arguments demonstrate maturity and intellectual control. They show the examiner that you have weighed opposing views and can dismantle them — a hallmark of Level 4–5 writing.',
      },
      {
        id: 'edx-lp1-m8-q3',
        question:
          'Which of the following best describes "tone modulation" in persuasive writing?',
        options: [
          'Using capital letters for emphasis',
          'Writing entirely in an angry tone',
          'Shifting between registers such as measured reasoning and passionate conviction',
          'Repeating the same phrase for effect',
        ],
        correct: 2,
        explanation:
          'Tone modulation means deliberately shifting your tone — for example, moving from calm, logical reasoning to urgent, passionate conviction — to keep the reader engaged and demonstrate control.',
      },
      {
        id: 'edx-lp1-m8-q4',
        question:
          'In the annotated model answer, which technique is used in the closing line "We owe our children energy, not exhaustion. Curiosity, not compliance. A future, not a formula."?',
        options: [
          'Anecdote and expert testimony',
          'Tricolon and antithesis',
          'Alliteration and statistics',
          'Rhetorical question and counter-argument',
        ],
        correct: 1,
        explanation:
          'The closing uses tricolon (three parallel structures) combined with antithesis (contrasting pairs: energy/exhaustion, curiosity/compliance, future/formula) for a powerful, memorable finish.',
      },
      {
        id: 'edx-lp1-m8-q5',
        question:
          'According to the AO5 descriptors, what distinguishes Level 5 (21–24 marks) from Level 4?',
        options: [
          'Level 5 requires at least five paragraphs',
          'Level 5 writing is compelling with extensive, ambitious vocabulary and sustained crafting',
          'Level 5 requires the use of all AFOREST techniques',
          'Level 5 is only available to students who write more than two pages',
        ],
        correct: 1,
        explanation:
          'Level 5 is characterised by compelling, sustained crafting with extensive and ambitious vocabulary. It is about quality and sophistication, not length or technique-counting.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 9 — Spelling, Punctuation & Grammar for Paper 1
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m9',
    title: 'Spelling, Punctuation & Grammar for Paper 1',
    duration: '45 min',
    content: `
<h2>AO6: Spelling, Punctuation &amp; Grammar</h2>

<p>On Edexcel Paper 1 (1EN2/01), <strong>AO6 is worth 16 marks</strong> on writing — that is <strong>40% of the writing mark</strong>. Examiners reward technical accuracy at every grade boundary.</p>

<div class="key-term"><strong>Key Term: AO6</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.</div>

<h3>Common Spelling Errors</h3>
<ul>
  <li><strong>definitely</strong> — not "definately"</li>
  <li><strong>necessary</strong> — one <em>c</em>, two <em>s</em>s</li>
  <li><strong>separate</strong> — there is "a rat" in separate</li>
  <li><strong>conscience</strong> — has "science" in it</li>
  <li><strong>environment</strong> — don't forget the <em>n</em> before the <em>m</em></li>
  <li><strong>business</strong> — "bus-i-ness", not "buisness"</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If unsure how to spell a word, replace it with a synonym you can spell confidently. A simpler word spelled correctly is always worth more than an ambitious word spelled wrong.</div>

<h3>Punctuation for Effect</h3>
<ul>
  <li><strong>Semicolons</strong> — link related independent clauses: <em>The corridor was empty; every door stood ajar.</em></li>
  <li><strong>Colons</strong> — introduce a list or dramatic reveal: <em>She had one rule: never look back.</em></li>
  <li><strong>Dashes</strong> — parenthetical info or interruption: <em>The garden — once immaculate — was reclaimed by weeds.</em></li>
  <li><strong>Ellipsis</strong> — build tension: <em>He reached for the handle...</em></li>
</ul>

<h3>Varied Sentence Openers</h3>
<ul>
  <li><strong>Adverbial:</strong> <em>Silently, the figure crept along the wall.</em></li>
  <li><strong>Participial:</strong> <em>Trembling with anticipation, she opened the letter.</em></li>
  <li><strong>Imperative:</strong> <em>Consider this: every great city was once a village.</em></li>
</ul>

<h3>Sentence Types</h3>
<ul>
  <li><strong>Simple</strong> — one clause, dramatic emphasis: <em>She ran.</em></li>
  <li><strong>Compound</strong> — two clauses joined by FANBOYS. Balances ideas.</li>
  <li><strong>Complex</strong> — independent + subordinate clauses. Shows control.</li>
  <li><strong>Minor</strong> — a deliberate fragment: <em>Silence. Nothing but silence.</em></li>
</ul>

<p>Vary <strong>paragraph length</strong> too — a single-sentence paragraph amid longer ones creates a jolt of emphasis examiners reward.</p>

<div class="common-mistake"><strong>Common Mistake: Comma Splicing</strong> — <em>He opened the door, the room was empty.</em> Fix with a full stop, semicolon, or conjunction.</div>

<div class="common-mistake"><strong>Common Mistake: Tense Shifting</strong> — Pick one tense and maintain it. Read your work back to catch slips.</div>

<div class="common-mistake"><strong>Common Mistake: Apostrophe Errors</strong> — "It's" means "it is"; "its" is possessive. "They're" means "they are"; "their" is possessive.</div>

<h3>Quick Practice</h3>
<p>Rewrite this passage using at least three punctuation techniques from above:</p>
<p><em>"The house was old. It had broken windows. The garden was overgrown. Nobody had lived there for years. It was creepy."</em></p>
`,
    quiz: [
      {
        id: 'edx-lp1-m9-q1',
        question:
          'How many marks is AO6 worth on the Paper 1 writing section?',
        options: ['8 marks', '12 marks', '16 marks', '24 marks'],
        correct: 2,
        explanation:
          'AO6 is worth 16 marks on Paper 1 writing, which accounts for 40% of the total writing mark. Technical accuracy is heavily rewarded.',
      },
      {
        id: 'edx-lp1-m9-q2',
        question:
          'Which of the following is an example of comma splicing?',
        options: [
          'The rain fell heavily, and the streets flooded.',
          'The rain fell heavily; the streets flooded.',
          'The rain fell heavily, the streets flooded.',
          'The rain fell heavily. The streets flooded.',
        ],
        correct: 2,
        explanation:
          'Comma splicing occurs when two independent clauses are joined with only a comma and no conjunction. "The rain fell heavily, the streets flooded" needs a semicolon, full stop, or conjunction to be correct.',
      },
      {
        id: 'edx-lp1-m9-q3',
        question:
          'What type of sentence opener is used here: "Trembling with fear, the child hid under the bed"?',
        options: [
          'Adverbial opener',
          'Participial opener',
          'Prepositional opener',
          'Imperative opener',
        ],
        correct: 1,
        explanation:
          '"Trembling with fear" is a present participle phrase (participial opener). It begins with an -ing verb form that modifies the subject.',
      },
      {
        id: 'edx-lp1-m9-q4',
        question:
          'When should you use an ellipsis in creative or transactional writing?',
        options: [
          'To replace a full stop at the end of every paragraph',
          'To build tension or suggest something is left unsaid',
          'To show that you have run out of ideas',
          'To separate items in a list',
        ],
        correct: 1,
        explanation:
          'An ellipsis is used deliberately to build tension, create a pause, or imply that something remains unsaid. It should not be overused or treated as a substitute for a full stop.',
      },
      {
        id: 'edx-lp1-m9-q5',
        question:
          'Which spelling is correct?',
        options: ['definately', 'seperately', 'necessary', 'enviroment'],
        correct: 2,
        explanation:
          '"Necessary" is the only correctly spelled option. The others should be: definitely, separately, environment.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Paper 1 Exam Strategy & Timed Practice
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m10',
    title: 'Paper 1 Exam Strategy & Timed Practice',
    duration: '60 min',
    content: `
<h2>Paper 1 Exam Strategy &amp; Timed Practice</h2>

<p>Edexcel Paper 1 (1EN2/01) lasts <strong>1 hour 55 minutes</strong> and is worth 80 marks. This module gives you a timing plan, a mock walkthrough, and strategies for exam day.</p>

<h3>Recommended Timing Plan</h3>

<div class="key-term"><strong>Key Principle:</strong> Roughly one minute per mark, plus reading time and a proofread.</div>

<table>
  <tr><th>Section</th><th>Marks</th><th>Time</th></tr>
  <tr><td>Read source text</td><td>—</td><td>5 min</td></tr>
  <tr><td>Q1 — Comprehension</td><td>1</td><td>2 min</td></tr>
  <tr><td>Q2 — Two things</td><td>2</td><td>3 min</td></tr>
  <tr><td>Q3 — Language analysis</td><td>6</td><td>10 min</td></tr>
  <tr><td>Q4 — Language &amp; structure</td><td>15</td><td>20 min</td></tr>
  <tr><td>Q5 — Evaluation</td><td>16</td><td>20 min</td></tr>
  <tr><td>Q6 — Writing</td><td>40</td><td>50 min</td></tr>
  <tr><td>Proofread</td><td>—</td><td>10 min</td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If a reading question overruns, move on. The writing section carries 40 marks and must not be rushed.</div>

<h3>Exam Day Checklist</h3>
<ul>
  <li>Black pen (plus spare), highlighter, watch.</li>
  <li>Read the <strong>entire source</strong> before answering — annotate as you go.</li>
  <li>Underline command words: <em>how, explain, evaluate, to what extent</em>.</li>
  <li>Spend 5 minutes planning your writing before you begin.</li>
</ul>

<h3>Approaching the Writing Task (Q6)</h3>
<p>Spend 5 minutes planning before you write. Identify the <strong>purpose, audience and form</strong> from the prompt. Sketch a brief paragraph plan with a strong opening and a purposeful ending — strong endings secure top marks. Avoid generic openings; aim for something that immediately establishes your voice and register.</p>

<h3>Running Out of Time?</h3>
<ol>
  <li>Write a <strong>brief plan</strong> so the examiner sees your structure.</li>
  <li>Write your <strong>opening paragraph</strong> as strongly as you can.</li>
  <li>Skip to your <strong>ending</strong> — a purposeful conclusion shows control.</li>
  <li>Fill in middle paragraphs with remaining time.</li>
</ol>

<h3>Mock Walkthrough</h3>

<div class="text-extract">"The factory bell rang at half-past five, and within minutes the lane was alive with figures — men, women, and children — shuffling towards the mill. Their faces were pale, their clothing threadbare. A boy of no more than ten carried a bundle of rags under one arm. He did not speak, nor did he look up. The overseer stood at the gate, watch in hand, marking each name with a stub of pencil."<div class="source">Adapted from a 19th-century factory report</div></div>

<p><strong>Q1 (1 mark):</strong> One thing about the people: their faces were pale.</p>

<p><strong>Q2 (2 marks):</strong> Two things about the people: (1) faces pale and drawn; (2) clothing threadbare.</p>

<p><strong>Q3 (6 marks):</strong> Analyse language describing the boy — "no more than ten" (emphasises youth), "bundle of rags" (poverty), "did not speak, nor did he look up" (exhaustion/resignation).</p>

<p><strong>Q4 (15 marks):</strong> Structure moves from wide shot (lane) to close-up (boy) to the overseer — a cinematic zoom building empathy before introducing authority. Analyse how language and structure work together to influence the reader.</p>

<p><strong>Q5 (16 marks):</strong> Evaluate: agree the descriptions create sympathy; partially disagree the observational tone may distance the reader. Conclude with a clear, evidence-based judgement.</p>

<h3>Grade Boundaries &amp; Final Tips</h3>
<ul>
  <li><strong>Grade 5</strong> ≈ 59% (47/80) | <strong>Grade 7</strong> ≈ 71% (57/80) | <strong>Grade 9</strong> ≈ 83% (66/80)</li>
  <li>Practise at least two full timed papers before exam day.</li>
  <li>Read widely — 19th-century non-fiction, editorials, travel writing.</li>
  <li>Build a vocabulary bank of analytical verbs: <em>conveys, implies, evokes, reinforces, juxtaposes</em>.</li>
  <li>Study examiner reports to understand what top-band responses look like.</li>
</ul>
`,
    quiz: [
      {
        id: 'edx-lp1-m10-q1',
        question:
          'How long is Edexcel Paper 1 (1EN2/01) in total?',
        options: [
          '1 hour 30 minutes',
          '1 hour 55 minutes',
          '2 hours',
          '2 hours 15 minutes',
        ],
        correct: 1,
        explanation:
          'Edexcel GCSE English Language Paper 1 is 1 hour 55 minutes (115 minutes). Effective time management across this period is essential for accessing all the marks.',
      },
      {
        id: 'edx-lp1-m10-q2',
        question:
          'According to the recommended timing plan, how long should you spend on Q4 (the language and structure question)?',
        options: ['10 minutes', '15 minutes', '20 minutes', '25 minutes'],
        correct: 2,
        explanation:
          'Q4 is worth 15 marks and the recommended allocation is 20 minutes. This gives you roughly one minute per mark plus a small buffer for planning your response.',
      },
      {
        id: 'edx-lp1-m10-q3',
        question:
          'If you are running out of time on the writing section, what should you do first?',
        options: [
          'Write as fast as possible without planning',
          'Skip the writing section entirely and revisit reading answers',
          'Write a brief plan so the examiner can see your intended structure',
          'Copy out the question prompt to fill space',
        ],
        correct: 2,
        explanation:
          'A brief plan shows the examiner your structural intentions and can earn credit even if you do not finish. Then prioritise your opening and ending paragraphs for maximum impact.',
      },
      {
        id: 'edx-lp1-m10-q4',
        question:
          'Approximately what percentage is needed for a Grade 7 on Paper 1?',
        options: ['52%', '59%', '71%', '83%'],
        correct: 2,
        explanation:
          'A Grade 7 requires approximately 71% (around 57 out of 80 marks). This varies slightly year to year but gives a clear target for revision.',
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Edexcel GCSE English Language — Paper 2 Modules
// ═══════════════════════════════════════════════════════════════════════════════

const paper2Modules: CourseModule[] = [
// ──────────────────────────────────────────────
  // MODULE 1 — Paper 2 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m1',
    title: 'Paper 2 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>Edexcel Paper 2: Fiction, Literary Non-Fiction &amp; Imaginative Writing (1EN2/02)</h2>

<p>Paper 2 is one of two externally examined components in the Edexcel GCSE English Language specification. It accounts for <strong>50% of your total GCSE grade</strong> and is sat under timed conditions. Understanding the paper's structure inside-out is the first step to a confident performance on exam day.</p>

<div class="key-term"><strong>Key Term: 1EN2/02</strong> — The official Pearson Edexcel component code for English Language Paper 2. The paper focuses on <em>fiction</em> and <em>literary non-fiction</em> reading, plus <em>imaginative writing</em>. It is worth 80 marks and lasts 1 hour 55 minutes.</div>

<h3>Paper at a Glance</h3>
<table>
  <tr><th>Detail</th><th>Paper 2</th></tr>
  <tr><td>Duration</td><td>1 hour 55 minutes</td></tr>
  <tr><td>Total marks</td><td>80</td></tr>
  <tr><td>Weighting</td><td>50% of GCSE</td></tr>
  <tr><td>Section A</td><td>Reading — 40 marks</td></tr>
  <tr><td>Section B</td><td>Imaginative Writing — 40 marks</td></tr>
</table>

<h3>Section A: Reading (40 marks)</h3>
<p>You will be given <strong>two unseen extracts</strong>: one from a <strong>20th- or 21st-century fiction</strong> text and one from a <strong>literary non-fiction</strong> text. The questions test your ability to read closely, interpret meaning, analyse language and structure, and compare writers' perspectives.</p>

<ul>
  <li><strong>Q1–Q2</strong> (short-answer comprehension, approx. 1–3 marks each) — identify and retrieve explicit information.</li>
  <li><strong>Q3</strong> (approx. 6 marks) — analyse how language is used for effect.</li>
  <li><strong>Q4</strong> (approx. 10 marks) — analyse how structure and narrative perspective shape meaning.</li>
  <li><strong>Q5</strong> (approx. 15+ marks) — evaluate or compare across both extracts, supported by textual evidence.</li>
</ul>

<div class="key-term"><strong>Key Term: Literary Non-Fiction</strong> — Texts that are factual in origin but employ literary techniques such as imagery, rhetoric, and narrative voice. Examples include travel writing, autobiography, essays, and letters.</div>

<h3>Section B: Imaginative Writing (40 marks)</h3>
<p>You choose <strong>one</strong> writing task from a choice of two. Tasks may provide a visual stimulus (image) or a written prompt. You are assessed on <strong>content and organisation</strong> (AO5 — 24 marks) and <strong>technical accuracy</strong> (AO6 — 16 marks).</p>

<h3>Assessment Objectives Tested</h3>
<ul>
  <li><strong>AO1</strong> — Identify and interpret explicit and implicit information; select and synthesise evidence.</li>
  <li><strong>AO2</strong> — Explain, comment on and analyse how writers use language and structure for effect.</li>
  <li><strong>AO3</strong> — Compare writers' ideas and perspectives across texts.</li>
  <li><strong>AO4</strong> — Evaluate texts critically, supporting with textual references.</li>
  <li><strong>AO5</strong> — Communicate clearly, effectively and imaginatively; organise information using structural and grammatical features.</li>
  <li><strong>AO6</strong> — Use a range of vocabulary and sentence structures for clarity and effect; apply accurate spelling, punctuation and grammar.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The key difference between Paper 1 and Paper 2 is the text types and writing task. Paper 1 focuses on non-fiction and transactional writing; Paper 2 focuses on fiction, literary non-fiction, and <em>imaginative</em> writing. Do not confuse the two — creative description and narrative are Paper 2 skills.</div>

<h3>Recommended Timing Strategy</h3>
<ol>
  <li><strong>5 minutes</strong> — read both extracts carefully, annotating as you go.</li>
  <li><strong>50 minutes</strong> — Section A reading questions (allocate time roughly in proportion to marks).</li>
  <li><strong>5 minutes</strong> — plan your imaginative writing task.</li>
  <li><strong>45 minutes</strong> — write your response to Section B.</li>
  <li><strong>10 minutes</strong> — proofread and correct errors across both sections.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on Section A and rushing the 40-mark writing task. Section B carries exactly the same weight as Section A, so it deserves equal time and attention. Practise writing under timed conditions so you can produce a polished piece in 45 minutes.</div>

<p>In the modules that follow, we will work through each question type in detail, building the reading and writing skills you need to tackle every part of Paper 2 with confidence.</p>
`,
    quiz: [
      {
        id: 'edx-lp2-m1-q1',
        question:
          'How long is the Edexcel Paper 2 exam, and how many marks is it worth?',
        options: [
          '1 hour 45 minutes, 64 marks',
          '1 hour 55 minutes, 80 marks',
          '2 hours, 80 marks',
          '1 hour 55 minutes, 100 marks',
        ],
        correct: 1,
        explanation:
          'Edexcel Paper 2 (1EN2/02) lasts 1 hour 55 minutes and is worth 80 marks in total — 40 for reading (Section A) and 40 for writing (Section B).',
      },
      {
        id: 'edx-lp2-m1-q2',
        question:
          'Which of the following text types will you encounter in Section A of Paper 2?',
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
        question:
          'What type of writing is assessed in Section B of Paper 2?',
        options: [
          'Transactional writing (e.g., letter, speech, article)',
          'Analytical essay writing',
          'Imaginative writing (e.g., narrative, description)',
          'Summary writing',
        ],
        correct: 2,
        explanation:
          'Section B of Paper 2 tests imaginative writing — you choose one task and produce a piece of creative narrative or descriptive writing, assessed on AO5 (content and organisation) and AO6 (technical accuracy).',
      },
      {
        id: 'edx-lp2-m1-q4',
        question:
          'Which assessment objective is concerned with comparing writers\' ideas and perspectives?',
        options: ['AO1', 'AO2', 'AO3', 'AO5'],
        correct: 2,
        explanation:
          'AO3 requires you to compare writers\' ideas and perspectives across texts. This is typically tested in the higher-mark reading questions on Paper 2.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Reading 20th/21st-Century Fiction: Comprehension & Inference
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m2',
    title: 'Reading 20th/21st-Century Fiction: Comprehension & Inference',
    duration: '50 min',
    content: `
<h2>Reading 20th/21st-Century Fiction: Comprehension &amp; Inference</h2>

<p>The opening questions on Paper 2 Section A test your ability to read a modern fiction extract closely and accurately. These short-answer questions (typically worth 1–3 marks each) reward precise retrieval and careful inference. Getting them right quickly frees up time for the higher-mark analytical questions later in the paper.</p>

<div class="key-term"><strong>Key Term: Explicit Meaning</strong> — Information that is directly stated in the text. You can point to specific words or phrases that convey it without needing to "read between the lines."</div>

<div class="key-term"><strong>Key Term: Implicit Meaning (Inference)</strong> — Information that is suggested or implied by the writer's choices. The reader must interpret clues in the text to arrive at a conclusion that is not directly stated.</div>

<h3>Practice Extract</h3>
<div class="text-extract">The bus lurched to a stop and Mariam stepped off into the grey drizzle. She pulled her school bag higher on her shoulder and stared down the street. The terraced houses stood in a long, unbroken row, their brickwork darkened by decades of rain. A fox slipped between two wheelie bins and vanished under a parked car. Somewhere above, a window slammed shut.

She walked quickly, her trainers slapping the wet pavement. At number forty-seven she paused, fishing in her pocket for the key. The front door was already ajar. A strip of light fell across the hallway carpet, and from the kitchen came the low murmur of a radio and the smell of cumin and fried onions. Mariam let out a breath she hadn't known she was holding.<div class="source">Original 21st-century-style fiction extract written for exam practice</div></div>

<h3>Answering Short-Answer Retrieval Questions (Q1–Q2 Style)</h3>
<p>These questions ask you to identify specific details from the extract. They are typically phrased as:</p>
<ul>
  <li>"Give <strong>two</strong> things you learn about the setting from lines 1–5."</li>
  <li>"What does the reader learn about Mariam in this extract?"</li>
</ul>

<p>Your answers should be <strong>brief and precise</strong>. You may quote directly or paraphrase, but every point must be rooted in the text.</p>

<h4>Example (Explicit Retrieval)</h4>
<p><em>Q: Give two things you learn about the weather from the first paragraph.</em></p>
<ol>
  <li>There is a "grey drizzle" — the weather is rainy and overcast.</li>
  <li>The brickwork has been "darkened by decades of rain" — rain is a long-standing feature of the area.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always embed a short quotation in your answer, even for 1-mark retrieval questions. It proves you are working from the text and removes ambiguity. Keep quotations concise — a few key words are enough.</div>

<h3>Moving from Retrieval to Inference</h3>
<p>Higher-mark short questions may ask what a detail <em>suggests</em> or what the reader can <em>infer</em>. To build a strong inference, follow a three-step chain:</p>

<ol>
  <li><strong>Evidence</strong> — select a quotation from the text.</li>
  <li><strong>Interpretation</strong> — explain what the detail suggests beyond its literal meaning.</li>
  <li><strong>Meaning</strong> — connect your interpretation to a wider idea about the character, setting, or mood.</li>
</ol>

<h4>Annotated Inference Example</h4>
<p><em>Q: What do the final two sentences suggest about Mariam's feelings as she arrives home?</em></p>
<p><strong>Evidence:</strong> "Mariam let out a breath she hadn't known she was holding."</p>
<p><strong>Interpretation:</strong> The involuntary held breath implies she was tense or anxious during her walk, perhaps without fully realising it herself.</p>
<p><strong>Meaning:</strong> The release of breath as she reaches the warmth and familiar sounds of the kitchen suggests a sense of <em>relief and safety</em> — home is a place of comfort after an uneasy journey.</p>

<div class="key-term"><strong>Key Term: Inference Chain</strong> — A structured approach that moves from <em>text evidence</em> → <em>interpretation of that evidence</em> → <em>wider meaning or significance</em>. This framework ensures your inference is always grounded in the text rather than speculation.</div>

<h3>Embedding Quotations Effectively</h3>
<p>Rather than dropping quotations into your answer as standalone sentences, weave them into your own phrasing:</p>
<ul>
  <li><strong>Weak:</strong> "A fox slipped between two wheelie bins." This shows urban wildlife.</li>
  <li><strong>Strong:</strong> The image of a fox that "slipped between two wheelie bins" introduces a sense of quiet, almost secretive urban life to the setting.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing long, speculative inferences that stray from the text. For example, claiming Mariam is "terrified of going home because something bad happened there" — the extract offers no evidence for this. Strong inference stays close to the evidence and acknowledges what can reasonably be deduced, not what you imagine might be true.</div>

<h3>Quick Practice</h3>
<p>Using the extract above, try these tasks:</p>
<ol>
  <li><strong>Retrieval:</strong> Give two things you learn about the street where Mariam lives.</li>
  <li><strong>Inference:</strong> What does the detail about the front door being "already ajar" suggest? Use the three-step inference chain.</li>
</ol>

<p><strong>Model answers:</strong></p>
<ol>
  <li>The street has "terraced houses" in "a long, unbroken row" — it is a densely built residential area. The brickwork is "darkened by decades of rain," suggesting an older, weathered neighbourhood.</li>
  <li><em>Evidence:</em> "The front door was already ajar." <em>Interpretation:</em> Someone inside has left the door open, possibly expecting Mariam's arrival. <em>Meaning:</em> This small detail implies care and anticipation — someone at home is looking out for her, reinforcing the sense that the house is a welcoming, safe space.</li>
</ol>

<p>Mastering retrieval and inference on these early questions builds the close-reading habits you need for every Section A response. In the next module, we will apply similar skills to <strong>language analysis</strong>, where marks — and the level of detail expected — increase significantly.</p>
`,
    quiz: [
      {
        id: 'edx-lp2-m2-q1',
        question:
          'What is the difference between explicit and implicit meaning?',
        options: [
          'Explicit meaning is the writer\'s opinion; implicit meaning is fact',
          'Explicit meaning is directly stated; implicit meaning must be inferred from clues in the text',
          'Explicit meaning requires analysis; implicit meaning is obvious',
          'There is no real difference — the terms are interchangeable',
        ],
        correct: 1,
        explanation:
          'Explicit meaning is information directly stated in the text, while implicit meaning (inference) requires the reader to interpret clues and suggestions that the writer has embedded without stating them outright.',
      },
      {
        id: 'edx-lp2-m2-q2',
        question:
          'Which of the following best demonstrates an embedded quotation?',
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
        question:
          'What are the three steps of an inference chain?',
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
          'It speculates beyond the evidence — the extract suggests relief and safety, not terror',
          'It focuses on character rather than setting',
        ],
        correct: 2,
        explanation:
          'A strong inference stays close to the text. The extract shows Mariam releasing tension and arriving to warmth and familiar sounds — evidence of comfort, not danger. Claiming she is "terrified" speculates beyond what the text supports.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 3 — Reading Fiction: Language & Structure Analysis
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m3',
    title: 'Reading Fiction: Language & Structure Analysis',
    duration: '55 min',
    content: `
<h2>AO2 in Fiction — Language &amp; Structure Combined</h2>

<p>On Edexcel Paper 2 (1EN2/02), fiction extracts require you to analyse <strong>both language and structure</strong> in one response. Edexcel does <em>not</em> split these into separate questions — you must weave both skills together.</p>

<div class="key-term"><strong>AO2</strong> — Analyse how writers use language and structure to achieve effects, using relevant subject terminology.</div>

<h3>Language Techniques in Fiction</h3>
<ul>
  <li><strong>Metaphor</strong> — transforms one thing into another.</li>
  <li><strong>Simile</strong> — comparison using "like" or "as".</li>
  <li><strong>Personification</strong> — human qualities given to non-human things.</li>
  <li><strong>Semantic fields</strong> — clusters of words from one topic area building atmosphere.</li>
  <li><strong>Sensory language</strong> — appeals to sight, sound, touch, taste, or smell.</li>
  <li><strong>Connotation</strong> — associations beyond literal meaning, e.g. "trudged" connotes exhaustion.</li>
</ul>

<h3>Structure Techniques in Fiction</h3>
<ul>
  <li><strong>Narrative perspective</strong> — first person (intimacy), third person omniscient (breadth), limited third person (tension).</li>
  <li><strong>Shifts in focus/time</strong> — flashbacks, changes of character or setting.</li>
  <li><strong>Foreshadowing</strong> — early hints that suggest what is to come.</li>
  <li><strong>Cyclical structure</strong> — the text ends where it began, creating inevitability.</li>
  <li><strong>Paragraph length</strong> — short paragraphs quicken pace; long paragraphs build atmosphere.</li>
</ul>

<h3>Fiction Extract — Colour-Coded Annotations</h3>

<div class="text-extract">
<p>The house had not changed. <span style="color:#2563eb">[Metaphor]</span> <em>It crouched at the end of the lane like a creature waiting to be fed</em>, its windows <span style="color:#2563eb">[Personification]</span> <em>watching</em> the road with hollow patience.</p>
<p><span style="color:#16a34a">[Shift in time]</span> She remembered running through these rooms as a child, <span style="color:#2563eb">[Sensory]</span> <em>the smell of beeswax and lavender</em>. The floorboards had sung beneath her feet then.</p>
<p><span style="color:#16a34a">[Short paragraph]</span> Now they groaned.</p>
<p>She moved through the hallway, <span style="color:#2563eb">[Semantic field]</span> <em>past peeling paper and the dark bloom of damp</em>. <span style="color:#16a34a">[Cyclical]</span> The house had not changed — but she had.</p>
<div class="source">Original fiction extract in the style of Edexcel exam sources</div>
</div>

<p><strong>Key:</strong> <span style="color:#2563eb">Blue = language</span> &nbsp;|&nbsp; <span style="color:#16a34a">Green = structure</span></p>

<h3>The WHAT–HOW–WHY Framework</h3>
<ol>
  <li><strong>WHAT</strong> — Identify the technique and embed a quotation.</li>
  <li><strong>HOW</strong> — Explain how it works at word or sentence level.</li>
  <li><strong>WHY</strong> — Analyse the effect on the reader or link to wider meaning.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Integrate language and structure rather than treating them as separate lists. After a language point, link it to structure — e.g. "The metaphor appears in the opening line, positioning the threat from the start."</div>

<h3>Model Answer (Extract)</h3>

<p><em>"The writer opens with 'The house had not changed', establishing stagnation. This echoes in the final line — 'but she had' — creating cyclical structure that reinforces entrapment. The simile 'like a creature waiting to be fed' transforms the house into a predator; 'fed' draws on connotations of consumption, suggesting the house is alive and hungry."</em></p>

<div class="common-mistake"><strong>Common Mistake:</strong> Listing techniques without analysis — e.g. "The writer uses a metaphor and a simile." This is <em>feature-spotting</em>. Always explain <strong>how</strong> the technique works and <strong>why</strong> it was chosen.</div>
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
        question:
          'In the WHAT–HOW–WHY framework, what does the "HOW" step require you to do?',
        options: [
          'Identify the technique and provide a quotation',
          'Explain how the technique works at word or sentence level',
          'Link the technique to the wider themes of the text',
          'Compare the technique to one used by a different writer',
        ],
        correct: 1,
        explanation:
          'The HOW step focuses on the mechanics of the technique — explaining precisely how specific words, phrases, or sentence structures create meaning and effect.',
      },
      {
        id: 'edx-lp2-m3-q3',
        question:
          'Which of the following is an example of a structural technique?',
        options: [
          'A simile comparing a building to a creature',
          'A semantic field of decay running through the passage',
          'A cyclical structure where the ending echoes the opening',
          'Sensory language appealing to the sense of smell',
        ],
        correct: 2,
        explanation:
          'Cyclical structure — where the text ends by returning to its opening — is a structural technique. Simile, semantic fields, and sensory language are all language techniques.',
      },
      {
        id: 'edx-lp2-m3-q4',
        question:
          'What is "feature-spotting" and why should it be avoided?',
        options: [
          'Identifying techniques without analysing their effect — it stays in lower mark bands',
          'Using too many quotations — it wastes time in the exam',
          'Writing about structure instead of language — it misses half the marks',
          'Colour-coding annotations — it is not accepted by examiners',
        ],
        correct: 0,
        explanation:
          'Feature-spotting means naming techniques (e.g. "The writer uses a metaphor") without explaining how they work or why they are effective. Examiners reward analysis, not lists of devices.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Reading Literary Non-Fiction: Analysis & Comparison
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m4',
    title: 'Reading Literary Non-Fiction: Analysis & Comparison',
    duration: '55 min',
    content: `
<h2>Literary Non-Fiction — Beyond the Factual</h2>

<p>Edexcel Paper 2 (1EN2/02) tests your ability to analyse <strong>literary non-fiction</strong> — texts rooted in fact but employing literary techniques. The writer's craft is as important as their content.</p>

<div class="key-term"><strong>Literary Non-Fiction</strong> — Factual writing that uses imagery, rhetoric, varied syntax, and narrative voice to engage the reader. The "literary" element distinguishes it from functional non-fiction.</div>

<h3>Types of Literary Non-Fiction</h3>
<ul>
  <li><strong>Travel writing</strong> — journeys and places, rich in sensory description.</li>
  <li><strong>Memoir</strong> — a focused account of a particular experience in the writer's life.</li>
  <li><strong>Autobiography</strong> — a broader life account in the writer's own voice.</li>
  <li><strong>Essays</strong> — discursive pieces exploring ideas or observations.</li>
  <li><strong>Published letters</strong> — personal correspondence revealing private voice and opinions.</li>
</ul>

<h3>Literary Non-Fiction Extract</h3>

<div class="text-extract">
<p>The valley opened before us like a wound in the earth, raw and red where the soil had been stripped by rain. Below, the river — swollen, furious — threw itself against the rocks with a sound like applause.</p>
<p>There is a particular silence that follows a storm. Not the absence of noise, but a held breath — the landscape pausing to examine what it has survived. The trees leaned at new angles, clinging to the earth with a stubbornness I envied. I had come here to escape the city, but nature had its own volume.</p>
<div class="source">Original literary non-fiction extract in the style of Edexcel exam sources</div>
</div>

<h3>Identifying Perspective and Bias</h3>

<p>Every literary non-fiction text is shaped by the writer's <strong>perspective</strong>. Ask: What is their <strong>attitude</strong>? What <strong>language choices</strong> reveal it? Are they <strong>biased</strong>? How do they <strong>position the reader</strong> (inclusive pronouns, direct address, rhetorical questions)?</p>

<p>In the extract, personification ("the landscape pausing") and the verb "envied" reveal admiration for nature, while contrast with the city positions nature as superior.</p>

<div class="key-term"><strong>AO3</strong> — Compare writers' ideas and perspectives, and how these are conveyed, across two or more texts.</div>

<h3>Comparison Frameworks</h3>

<table>
  <tr><th>Method</th><th>How It Works</th><th>Best For</th></tr>
  <tr><td><strong>Alternating</strong></td><td>Each point discusses Text A then compares with Text B.</td><td>Sustained comparison — <em>recommended</em>.</td></tr>
  <tr><td><strong>Block</strong></td><td>All of Text A, then all of Text B, linking back.</td><td>Easier to organise — but risks two separate essays.</td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The alternating method is strongly preferred — every paragraph should reference both texts. The block method often produces two separate analyses that will not reach higher mark bands.</div>

<h3>Comparative Connectives</h3>
<ul>
  <li><strong>Similarity:</strong> similarly, likewise, both writers, equally</li>
  <li><strong>Contrast:</strong> in contrast, whereas, conversely, however, unlike</li>
</ul>

<h3>Practice Comparison Paragraph</h3>

<p><em>"Both writers present nature as powerful, yet their perspectives diverge. Writer A uses the simile 'like a wound in the earth', positioning nature as violent and indifferent. Conversely, Writer B describes the countryside as 'a gentle quilt draped across the hills', rendering nature safe and comforting. Where Writer A's landscape is hostile, Writer B's is tamed — reflecting the difference between genuine wilderness and the curated rural ideal."</em></p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about each text separately. "Text A says X. Text B says Y." is not comparison — explicitly connect them: "While Text A presents nature as threatening, Text B offers a contrasting view…"</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m4-q1',
        question:
          'What makes non-fiction "literary"?',
        options: [
          'It is published in a book rather than a newspaper',
          'It uses literary techniques such as imagery, rhetoric, and narrative voice to engage the reader',
          'It is written about literature or literary figures',
          'It contains dialogue and characters like a novel',
        ],
        correct: 1,
        explanation:
          'Literary non-fiction is factual writing that employs the craft techniques of literature — imagery, varied syntax, voice, rhetoric — to convey its content in an engaging and stylistically accomplished way.',
      },
      {
        id: 'edx-lp2-m4-q2',
        question:
          'Which comparison framework do examiners recommend for the highest marks?',
        options: [
          'Block method — analyse Text A fully, then Text B',
          'Alternating (point-by-point) method — compare both texts within each paragraph',
          'Chronological method — discuss texts in the order they were written',
          'Thematic method — organise by theme without referring to specific texts',
        ],
        correct: 1,
        explanation:
          'The alternating method is preferred because it produces sustained comparison. Each paragraph addresses both texts, making the comparison explicit and integrated rather than bolted on.',
      },
      {
        id: 'edx-lp2-m4-q3',
        question:
          'Which of the following is a comparative connective that signals contrast?',
        options: [
          'Similarly',
          'Likewise',
          'Conversely',
          'Equally',
        ],
        correct: 2,
        explanation:
          '"Conversely" signals a contrast or opposing point. "Similarly", "likewise", and "equally" all signal similarity between the two texts being compared.',
      },
      {
        id: 'edx-lp2-m4-q4',
        question:
          'Which of the following is NOT a type of literary non-fiction you might encounter on Edexcel Paper 2?',
        options: [
          'Travel writing',
          'Published letters',
          'Instruction manuals',
          'Memoir',
        ],
        correct: 2,
        explanation:
          'Instruction manuals are functional, transactional texts — they do not employ literary techniques and would not appear as literary non-fiction on Paper 2. Travel writing, published letters, and memoir are all literary non-fiction forms.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 5 — Synthesis & Evaluation Skills
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m5',
    title: 'Synthesis & Evaluation Skills',
    duration: '55 min',
    content: `
<h2>Paper 2 — Synthesis &amp; Evaluation Skills</h2>

<p>Two of the most demanding skills on Edexcel Paper 2 (1EN2/02) are <strong>synthesis</strong> and <strong>evaluation</strong>. Synthesis asks you to draw together information from <em>two</em> sources, while evaluation asks you to make a <strong>critical judgement</strong> about how successfully a writer achieves their purpose.</p>

<div class="key-term"><strong>Key Term: Synthesis (AO1/AO3)</strong> — The skill of identifying and comparing information, ideas, or perspectives across two different texts, drawing out similarities to build a unified response.</div>

<h3>How to Scan Both Texts for Common Themes</h3>
<ol>
  <li><strong>Read both sources with the question focus in mind.</strong> Underline any details relevant to the topic.</li>
  <li><strong>Create a quick comparison grid.</strong> Jot down 3–4 points where the sources share common ground, noting a brief quotation from <em>each</em> source.</li>
  <li><strong>Look for shared themes, not identical words.</strong> Source A might describe a "bustling marketplace" while Source B refers to "the chaos of the bazaar" — both convey crowded commercial spaces.</li>
  <li><strong>Prioritise the strongest connections.</strong> Three or four well-evidenced points will score higher than six vague ones.</li>
</ol>

<h3>Writing Synthesis Paragraphs</h3>
<p>The golden rule: every paragraph must reference <strong>both</strong> sources. Use connective phrases such as <em>"Both sources suggest that…"</em>, <em>"Similarly, Source B describes…"</em>, <em>"This idea is echoed in Source A, where the writer…"</em>.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Writing a paragraph entirely about Source A then one about Source B is <em>comparison</em>, not synthesis. True synthesis weaves evidence from both sources into the same paragraph.</div>

<h3>Evaluation: Critical Judgement (AO4)</h3>

<div class="key-term"><strong>Key Term: Evaluation (AO4)</strong> — Assessing how <em>effectively</em> a writer achieves a particular purpose or effect. This requires a critical judgement — not just identification or analysis of techniques.</div>

<p>Evaluation questions take the form: <em>"How successfully does the writer…"</em>. The examiner is not asking you to explain what the writer does — that is analysis. Evaluation asks you to <strong>judge how well they do it</strong>.</p>

<ul>
  <li><strong>Analysis:</strong> <em>"The writer uses the metaphor 'a blanket of silence' to suggest the quiet was total."</em></li>
  <li><strong>Evaluation:</strong> <em>"The metaphor 'a blanket of silence' is particularly effective because it transforms an abstract concept into something tangible, convincingly conveying the character's relief."</em></li>
</ul>

<h3>Evaluative Vocabulary</h3>
<p>Use these adverbs to signal evaluation: <strong>effectively</strong>, <strong>convincingly</strong>, <strong>skilfully</strong>, <strong>persuasively</strong>, <strong>successfully</strong>.</p>

<h3>Model Evaluation: Level 3 vs Level 5</h3>
<p><strong>Level 3:</strong> <em>"The writer uses short sentences like 'She stopped. She listened.' to create tension. This is effective because it makes the reader nervous."</em> — Generic judgement, undeveloped.</p>

<p><strong>Level 5:</strong> <em>"The stripped-back syntax of 'She stopped. She listened.' is remarkably effective in fracturing the narrative flow, compelling the reader to pause alongside the character. By withholding information, the writer skilfully exploits the gap between character and reader perception, generating a palpable sense of dread."</em> — Evaluates quality, explains precisely why it works.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "this engages the reader" without explaining <em>how</em> or <em>why</em>. Vague evaluative comments cap your response at Level 3. Always specify the nature of the effect.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m5-q1',
        question:
          'Which assessment objectives does synthesis primarily test on Edexcel Paper 2?',
        options: [
          'AO1 and AO2',
          'AO1 and AO3',
          'AO2 and AO4',
          'AO3 and AO4',
        ],
        correct: 1,
        explanation:
          'Synthesis tests AO1 (identify and interpret information) and AO3 (compare writers\' ideas and perspectives across two or more texts).',
      },
      {
        id: 'edx-lp2-m5-q2',
        question:
          'What is the key difference between analysis and evaluation?',
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
        question:
          'Which of the following is the best example of an evaluative statement?',
        options: [
          '"The writer uses alliteration in the phrase \'dark, damp dungeon.\'"',
          '"The word \'dungeon\' has connotations of imprisonment and suffering."',
          '"The alliteration in \'dark, damp dungeon\' effectively creates a claustrophobic atmosphere that convincingly mirrors the character\'s entrapment."',
          '"The writer describes the setting as a dungeon to show it is unpleasant."',
        ],
        correct: 2,
        explanation:
          'The third option combines technique identification with a judgement about effectiveness ("effectively creates", "convincingly mirrors"), demonstrating genuine evaluation rather than mere analysis or identification.',
      },
      {
        id: 'edx-lp2-m5-q4',
        question:
          'What is the most important rule when writing a synthesis paragraph?',
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
  // MODULE 6 — Imaginative Writing: Narrative Techniques
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m6',
    title: 'Imaginative Writing: Narrative Techniques',
    duration: '55 min',
    content: `
<h2>Paper 2 Section B — Imaginative Writing</h2>

<p>Section B of Edexcel Paper 2 (1EN2/02) tests <strong>imaginative writing</strong>. It is worth <strong>40 marks</strong>: <strong>24 for AO5</strong> (content and organisation) and <strong>16 for AO6</strong> (technical accuracy). You choose <strong>one of two tasks</strong> — a short story, description, or narrative based on a prompt.</p>

<div class="key-term"><strong>Key Term: AO5 (Content &amp; Organisation)</strong> — Communication is clear, effective, and imaginative. Ideas are organised using structural and grammatical features to support coherence and cohesion.</div>

<h3>Narrative Perspective</h3>
<ul>
  <li><strong>First person (<em>I</em>):</strong> Creates intimacy and immediacy. Works well for confessional or suspenseful writing.</li>
  <li><strong>Third person limited (<em>He/She/They</em>):</strong> Follows one character closely from the outside while accessing their inner world. The most versatile exam choice.</li>
  <li><strong>Third person omniscient:</strong> All-knowing narrator — powerful but difficult to control in a short piece.</li>
</ul>

<p><strong>Past tense</strong> is the safest choice. <strong>Present tense</strong> creates urgency but demands consistency — slipping between tenses costs AO6 marks. An <strong>unreliable narrator</strong> can be sophisticated but must be signalled through contradictions or tonal shifts.</p>

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
  <li><strong>Short sentences:</strong> <em>"She turned. Nothing. Then — a sound."</em> Fragmented syntax mirrors panic or shock.</li>
  <li><strong>Withholding information:</strong> Let the reader sense something is wrong before the character does.</li>
  <li><strong>Cliffhangers:</strong> End a paragraph at peak uncertainty. <em>"The handle began to turn."</em></li>
</ul>

<h3>Character and Show, Don't Tell</h3>
<p>Reveal character through <strong>action and dialogue</strong>, not description. <em>"He folded the letter carefully, pressing each crease with his thumbnail, then slid it into his coat pocket without a word"</em> conveys precision and secrecy without a single adjective.</p>

<div class="key-term"><strong>Key Term: Show, Don't Tell</strong> — Convey emotions through sensory detail, action, and dialogue rather than direct statement.</div>

<p><strong>Telling:</strong> <em>"She was very nervous about the exam."</em></p>
<p><strong>Showing:</strong> <em>"Her pen trembled between her fingers. The words on the paper swam into nonsense. She swallowed hard, tasting metal, and glanced at the door — the strip of daylight beneath it bright and unreachable."</em></p>

<h3>Sample Task</h3>
<p><strong>Write about a time when everything changed.</strong></p>
<p>Plan for <strong>5 minutes</strong>, write for <strong>35–40 minutes</strong>, proofread for <strong>5 minutes</strong>. Aim for 450–600 words.</p>

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
          'The 40 marks are split into 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy — spelling, punctuation, and grammar).',
      },
      {
        id: 'edx-lp2-m6-q2',
        question:
          'Which narrative technique involves beginning a story in the middle of the action?',
        options: [
          'Circular narrative',
          'Freytag\'s Pyramid',
          'In medias res',
          'Flashback',
        ],
        correct: 2,
        explanation:
          'In medias res (Latin for "in the middle of things") begins the narrative in the midst of the action, hooking the reader immediately and allowing backstory to be revealed gradually.',
      },
      {
        id: 'edx-lp2-m6-q3',
        question:
          'Which of the following best demonstrates the "show, don\'t tell" principle?',
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
  // MODULE 7 — Imaginative Writing: Descriptive Writing
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m7',
    title: 'Imaginative Writing: Descriptive Writing',
    duration: '55 min',
    content: `
<h2>Paper 2 Section B — Descriptive Writing</h2>

<p>Section B of Paper 2 (1EN2/02) is worth <strong>40 marks</strong> — 24 for content/organisation (AO5), 16 for technical accuracy (AO6). You choose between two tasks linked to <strong>photographic stimuli</strong>. This module focuses on <em>descriptive</em> writing.</p>

<div class="key-term"><strong>Key Term: Sensory Detail</strong> — Description appealing to one or more of the five senses. The strongest descriptions engage at least three senses per paragraph.</div>

<h3>The Five-Sense Toolkit</h3>
<ul>
  <li><strong>Sight:</strong> <em>"A bruise of purple cloud spread across the horizon."</em></li>
  <li><strong>Sound:</strong> <em>"The gate shrieked on its hinge, then nothing — only the hush of rain on leaves."</em></li>
  <li><strong>Smell &amp; Taste:</strong> <em>"The air tasted of iron and damp stone."</em></li>
  <li><strong>Touch:</strong> <em>"The banister was gritty with dust beneath her fingertips."</em></li>
</ul>

<h3>Zoom In / Zoom Out</h3>
<p>Open with a <strong>wide shot</strong>, then <strong>zoom in</strong> to a single telling detail — mirroring how a camera works:</p>
<ol>
  <li><strong>Wide:</strong> <em>"The market square heaved with colour and noise."</em></li>
  <li><strong>Mid:</strong> <em>"Near the fountain, a woman arranged pyramids of spice on a trestle."</em></li>
  <li><strong>Close:</strong> <em>"Turmeric dust had settled in the creases of her knuckles like powdered gold."</em></li>
</ol>

<h3>Pathetic Fallacy, Personification &amp; Extended Metaphor</h3>
<p><strong>Pathetic fallacy</strong> projects emotion onto environment: <em>"The sky sulked, heavy and grey."</em> <strong>Personification</strong> treats setting as alive: <em>"The house watched us from behind its ivy."</em> An <strong>extended metaphor</strong> threads one image through a paragraph — if the city is a body, the roads are veins, the traffic is blood.</p>

<h3>Sentence-Level Crafting</h3>
<ul>
  <li><strong>One-word sentence:</strong> <em>"Silence."</em> — isolates a moment, forces the reader to pause.</li>
  <li><strong>List of three:</strong> <em>"The room was bare, cold, forgotten."</em> — rhythmic and emphatic.</li>
  <li><strong>Juxtaposition:</strong> <em>"A child's laughter rose from the garden; inside, the clock measured out its silence."</em></li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Edexcel provides <strong>two images</strong> as stimulus. Spend one minute studying both before choosing. Pick the image that sparks the strongest sensory response — you need enough material for 40 minutes of sustained writing.</div>

<h3>Grade 5 vs Grade 9 — Same Scene</h3>
<p>Prompt image: an abandoned fairground at dusk.</p>

<div class="text-extract"><strong>Grade 5:</strong> The fairground was empty and quiet. The Ferris wheel stood still against the darkening sky. It was a sad and lonely place.<div class="source">Relies on <em>telling</em> ("sad and lonely"). Limited sensory range.</div></div>

<div class="text-extract"><strong>Grade 9:</strong> Dusk bled into the fairground like ink into water. The Ferris wheel — skeletal, seized — held its last passengers: two crows hunched on the uppermost car. Below, a carousel horse bared its painted teeth at nothing, one glass eye catching the dying light. The whole place smelled of oil and sugar and rot, sweetness curdling into something else entirely.<div class="source">Shows rather than tells. Four senses. Metaphor, personification, juxtaposition.</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a narrative when the task says <em>describe</em>. Descriptions need no plot or dialogue — move through space, not time.</div>

<h3>Image-Based Prompt Checklist</h3>
<p>Before writing, ask: What is the <strong>dominant mood</strong>? Which <strong>three senses</strong> can I engage? What single detail will I <strong>zoom in</strong> on? What <strong>controlling metaphor</strong> could unify the piece? What <strong>contrast</strong> exists within the scene?</p>
`,
    quiz: [
      {
        id: 'edx-lp2-m7-q1',
        question:
          'What does the "zoom in / zoom out" technique involve?',
        options: [
          'Starting with a close-up detail and ending with a wide shot',
          'Opening with the whole scene and narrowing to a single detail',
          'Alternating rapidly between two contrasting locations',
          'Describing only what is visible from one fixed viewpoint',
        ],
        correct: 1,
        explanation:
          'The zoom technique opens with a wide establishing shot of the scene and progressively narrows focus to a single, telling close-up detail — mirroring how a camera would frame the scene.',
      },
      {
        id: 'edx-lp2-m7-q2',
        question:
          'Which of the following best illustrates pathetic fallacy?',
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
          'The Grade 9 response earns its marks by showing rather than telling. It engages multiple senses, uses figurative language purposefully, and creates mood through imagery — not by stating emotions directly.',
      },
      {
        id: 'edx-lp2-m7-q4',
        question:
          'What is a common mistake students make when given a descriptive writing task?',
        options: [
          'Using too many sensory details',
          'Writing a narrative with a plot instead of a sustained description',
          'Choosing the more difficult of the two image prompts',
          'Spending too long planning before writing',
        ],
        correct: 1,
        explanation:
          'Many students default to storytelling — introducing characters, conflict, and resolution — when the task specifically asks them to describe. A description explores a place or moment in depth without needing a plot.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Imaginative Writing: Advanced Craft
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m8',
    title: 'Imaginative Writing: Advanced Craft',
    duration: '55 min',
    content: `
<h2>Elevating Your Writing from Grade 7 to Grade 9</h2>

<p>The gap between Grade 7 and Grade 9 is not more techniques — it is <strong>control, subtlety, and sustained quality</strong>. AO5 Level 5 demands writing that <em>"shapes audience response with subtlety"</em> and is <em>"sophisticated and sustained"</em>.</p>

<div class="key-term"><strong>Key Term: Authorial Voice</strong> — The distinctive personality and tone in a writer's prose. At Grade 9, your writing should sound like <em>you</em> — deliberate register, rhythm, and attitude.</div>

<h3>Voice and Perspective</h3>
<ul>
  <li><strong>First person with attitude:</strong> <em>"I had been told the town was charming. Whoever said that had a generous definition of the word."</em></li>
  <li><strong>Internal monologue:</strong> <em>"The door was open. It shouldn't have been. And yet my feet carried me forward."</em></li>
  <li><strong>Second person (sparingly):</strong> <em>"You turn the corner and the sea hits you — the cold salt punch of it."</em></li>
</ul>

<h3>Symbolism and Motifs</h3>
<p>A <strong>symbol</strong> carries abstract meaning — a locked door suggests exclusion. A <strong>motif</strong> <em>recurs</em>: mention a ticking clock in your opening, return to it in your final paragraph.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> One recurring image — light, water, a colour — lifts a piece from "competent" to "crafted". Motifs show <strong>deliberate structural control</strong>.</div>

<h3>Temporal Manipulation</h3>
<ul>
  <li><strong>Slow motion:</strong> <em>"The glass turned, once, catching the lamplight — before gravity remembered its job."</em></li>
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

<h3>Annotated Grade 8–9 Model</h3>
<div class="text-extract"><em>The street held its breath.</em> [One-sentence paragraph.] <em>Cobblestones gleamed like the backs of wet beetles. The streetlamp threw amber that ended abruptly — a full stop in a sentence the darkness had no intention of finishing.</em> [Extended metaphor.] <em>Above, a shutter creaked. A radio murmured like a lullaby meant for someone else.</em> [Sound, smell.] <em>The street held its breath. So did I.</em> [Circular ending.]<div class="source">Structural control, sustained atmosphere, distinctive voice.</div></div>

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
        question:
          'What is the key difference between a symbol and a motif?',
        options: [
          'A symbol is visual and a motif is auditory',
          'A motif recurs throughout the piece while a symbol may appear only once',
          'A symbol is always an object while a motif is always a colour',
          'There is no meaningful difference — they are interchangeable terms',
        ],
        correct: 1,
        explanation:
          'A symbol is a concrete object carrying abstract meaning; a motif is a symbol that recurs. The repetition is what distinguishes a motif and what gives it structural power.',
      },
      {
        id: 'edx-lp2-m8-q2',
        question:
          'Which temporal manipulation technique is used in the sentence: "The glass left his hand. It turned, once, catching the lamplight — a brief, lazy revolution — before gravity remembered its job."?',
        options: [
          'Time jump',
          'Compressed time',
          'Slow motion',
          'Flashback',
        ],
        correct: 2,
        explanation:
          'The sentence expands a single second — a glass falling — into multiple clauses of detailed description. This is the slow-motion technique: stretching a brief moment to create tension and focus.',
      },
      {
        id: 'edx-lp2-m8-q3',
        question:
          'Why should students avoid "purple prose" in their descriptive writing?',
        options: [
          'Examiners penalise any use of figurative language',
          'Overwrought, elaborate vocabulary sounds unnatural and obscures meaning',
          'Simple words always score higher than complex words',
          'The mark scheme specifically forbids adjectives',
        ],
        correct: 1,
        explanation:
          'Purple prose uses excessively ornate language that sounds forced and unnatural. Grade 9 writing values precision over decoration — the right word is not always the longest word.',
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
          'The piece opens with "The street held its breath" and closes by returning to the same phrase with an addition — "So did I." This is a circular ending that also functions as a motif callback, creating structural cohesion.',
      },
      {
        id: 'edx-lp2-m8-q5',
        question:
          'According to the AO5 Level 5 descriptors, which phrase best captures what examiners look for at Grade 8–9?',
        options: [
          '"Uses a range of vocabulary and sentence structures"',
          '"Communicates ideas successfully for the intended audience"',
          '"Shapes audience response with subtlety"',
          '"Uses paragraphs to organise ideas clearly"',
        ],
        correct: 2,
        explanation:
          '"Shapes audience response with subtlety" is a Level 5 AO5 descriptor. It means the writer does not simply communicate ideas but deliberately controls how the reader feels and responds — through voice, structure, imagery, and linguistic precision.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 9 — SPaG & Vocabulary for Creative Writing
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m9',
    title: 'SPaG & Vocabulary for Creative Writing',
    duration: '45 min',
    content: `
<h2>SPaG &amp; Vocabulary for Creative Writing (AO6)</h2>

<p>On Paper 2, Section B awards up to <strong>16 marks for AO6</strong> — spelling, punctuation, grammar and vocabulary. These marks represent <strong>40% of the writing mark</strong> and can be the difference between a grade 5 and a grade 7.</p>

<div class="key-term"><strong>Key Term: SPaG</strong> — Spelling, Punctuation and Grammar. AO6 rewards accurate and effective use of these elements alongside varied vocabulary and sentence structures.</div>

<h3>Punctuation as a Creative Tool</h3>

<ul>
  <li><strong>Semicolons for balance:</strong> <em>"The forest was silent; not even the wind dared to stir."</em> The two halves mirror each other, reinforcing stillness.</li>
  <li><strong>Colons for revelation:</strong> <em>"She understood at once: everything she feared was true."</em> The colon acts as a hinge swinging towards the climax.</li>
  <li><strong>Ellipsis for suspense:</strong> <em>"He reached into the darkness... and felt something cold."</em> Use sparingly — overuse dilutes the effect.</li>
  <li><strong>Em-dashes for interruption:</strong> <em>"The ceremony was perfect — or it would have been, had the rain not started."</em></li>
</ul>

<h3>Dialogue Punctuation Rules</h3>

<ol>
  <li><strong>New speaker, new line</strong> — start a new paragraph each time a different character speaks.</li>
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

<div class="common-mistake"><strong>Common Mistake:</strong> Using a thesaurus word that does not fit the context. <em>"She murmured angrily across the room"</em> contradicts itself — murmuring is quiet and soft. Always check your word choice matches the tone of the scene.</div>

<h3>Sentence Variety for Rhythm</h3>

<p><em>"The corridor stretched ahead, its walls lined with faded portraits whose eyes seemed to follow his every step. He stopped. Something was wrong."</em></p>

<p>Short sentences after a long one create a jolt — examiners look for this at higher grade bands.</p>

<h3>Common Errors to Fix</h3>

<ul>
  <li><strong>Comma splicing:</strong> <em>"He opened the door, the room was dark"</em> — fix with a full stop, semicolon, or conjunction.</li>
  <li><strong>Tense inconsistency:</strong> If you start in past tense, stay in past tense throughout.</li>
  <li><strong>Misused apostrophes:</strong> <em>It's</em> = "it is." The possessive is <em>its</em> (no apostrophe). Watch <em>their/there/they're</em> too.</li>
</ul>

<h3>Proofreading Checklist</h3>

<ol>
  <li><strong>Read backwards</strong> sentence by sentence to catch spelling errors.</li>
  <li><strong>Circle every comma</strong> — if both sides could stand alone, use a full stop or semicolon.</li>
  <li><strong>Check tense consistency</strong> — underline five verbs at random and confirm they match.</li>
  <li><strong>Check dialogue punctuation</strong> — opening and closing speech marks, punctuation inside.</li>
  <li><strong>Scan for homophones</strong> — their/there/they're, its/it's, your/you're.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Leave at least 5 minutes for proofreading. Correcting two or three SPaG errors can move you up a mark band. Neatly cross out mistakes and write corrections above — examiners will not penalise crossings-out.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m9-q1',
        question:
          'Which punctuation mark is best described as creating a sense of "revelation" or dramatic reveal in a sentence?',
        options: ['Semicolon', 'Colon', 'Ellipsis', 'Em-dash'],
        correct: 1,
        explanation:
          'A colon introduces an explanation or dramatic reveal — it acts as a hinge that swings the sentence towards its climax. A semicolon creates balance, an ellipsis creates suspense, and an em-dash creates interruption.',
      },
      {
        id: 'edx-lp2-m9-q2',
        question:
          'Which of the following sentences contains a comma splice error?',
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
        question:
          'What is the most effective proofreading technique for catching spelling errors?',
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
  // MODULE 10 — Paper 2 Exam Strategy & Timed Practice
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp2-m10',
    title: 'Paper 2 Exam Strategy & Timed Practice',
    duration: '60 min',
    content: `
<h2>Paper 2 Exam Strategy &amp; Timed Practice (1EN2/02)</h2>

<p>You have <strong>1 hour 55 minutes</strong> for two sections worth <strong>80 marks</strong>. Each mark is worth roughly <strong>1.4 minutes</strong>.</p>

<div class="key-term"><strong>Key Term: Mark-Per-Minute Ratio</strong> — Divide total minutes by total marks, then multiply by each question's marks to allocate time.</div>

<h3>Complete Timing Plan</h3>

<ol>
  <li><strong>0–10 min:</strong> Read both extracts. Underline key phrases, annotate tone shifts.</li>
  <li><strong>10–16 min:</strong> <strong>Q1–Q2 (3 marks)</strong> — Brief, factual answers.</li>
  <li><strong>16–28 min:</strong> <strong>Q3 (6 marks)</strong> — Language analysis on the fiction extract.</li>
  <li><strong>28–50 min:</strong> <strong>Q4 (15 marks)</strong> — Whole-text analysis: language, structure, purpose.</li>
  <li><strong>50–65 min:</strong> <strong>Q5 (16 marks)</strong> — Evaluation of literary non-fiction.</li>
  <li><strong>65–70 min:</strong> <strong>Plan Section B</strong> — choose your question, sketch 4–5 paragraphs.</li>
  <li><strong>70–105 min:</strong> <strong>Q6 (40 marks)</strong> — Creative/imaginative writing.</li>
  <li><strong>105–115 min:</strong> <strong>Proofread</strong> — SPaG check across the whole paper.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Write the target end-time for each question in your margin before you start. This turns vague urgency into a concrete schedule.</div>

<h3>Choosing Between the Two Writing Tasks</h3>

<ul>
  <li><strong>Pick the option that gives you an immediate idea</strong> — if you can picture a scene within 30 seconds, choose it.</li>
  <li><strong>Description is safer</strong> — no plot needed. Narrative demands a coherent storyline in limited space.</li>
  <li><strong>Check whether the prompt specifies a form.</strong> "Write a description" means do not tell a story.</li>
</ul>

<h3>Reading the Insert</h3>

<p>Read both extracts for general understanding first, then re-read the relevant one before each question, annotating word choices and structural shifts.</p>

<h3>Mock Walkthrough</h3>

<div class="text-extract">The train jolted forward, and Martha pressed her face against the cold glass. Outside, the city was dissolving — rooftops giving way to fields. The suitcase on her lap contained everything that mattered: two photographs, a change of clothes, and her mother's last letter. She felt she could breathe.<div class="source">Original passage in the style of Edexcel Paper 2 fiction extracts</div></div>

<ul>
  <li><strong>Q1:</strong> <em>"The train jolted forward"</em> — simple, direct, factual.</li>
  <li><strong>Q3:</strong> <em>"The city was dissolving"</em> — metaphor suggests her old life is melting away.</li>
  <li><strong>Q4:</strong> City-to-countryside shift mirrors emotional journey; suitcase tricolon creates pathos; breathing symbolises release.</li>
</ul>

<h3>Planning Example</h3>

<p>For <em>"Describe an empty railway platform at night"</em>:</p>
<ol>
  <li>Wide-angle — sodium lights, silence, mist.</li>
  <li>Detail — forgotten coffee cup, flickering display.</li>
  <li>Sound — distant rumble of a train.</li>
  <li>Human element — a single figure waiting.</li>
  <li>Cyclical close — return to silence.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Diving into writing without a plan. Even 2 minutes of planning gives your piece a coherent shape.</div>

<h3>Checklist &amp; Grade Boundaries</h3>

<ul>
  <li>Do you know the AOs (AO1, AO2, AO4, AO5/AO6) and mark tariffs (1, 2, 6, 15, 16, 40)?</li>
  <li>Have you completed at least one full timed paper?</li>
  <li>Have you memorised dialogue punctuation and your proofreading checklist?</li>
</ul>

<p>Roughly: <strong>grade 4</strong> needs <strong>45–50%</strong> (36–40/80); <strong>grade 7</strong> needs <strong>70–75%</strong> (56–60/80).</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In the final 10 minutes, proofread — do not write new content. A polished, shorter response outperforms a longer, careless one.</div>
`,
    quiz: [
      {
        id: 'edx-lp2-m10-q1',
        question:
          'According to the timing plan, approximately how many minutes should you spend on Q4 (15 marks)?',
        options: [
          '10 minutes',
          '15 minutes',
          '22 minutes',
          '30 minutes',
        ],
        correct: 2,
        explanation:
          'The timing plan allocates minutes 28–50 for Q4, which is approximately 22 minutes. This reflects its status as the highest-tariff reading question at 15 marks.',
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
        question:
          'What should you do in the final 10 minutes of the exam?',
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
        options: ['50–55%', '60–65%', '70–75%', '80–85%'],
        correct: 2,
        explanation:
          'A grade 7 on Edexcel GCSE English Language typically requires around 70–75% of the total mark. On an 80-mark paper, that means aiming for approximately 56–60 marks.',
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Paper 1 Assessment Questions
// ═══════════════════════════════════════════════════════════════════════════════

const paper1Assessment: CourseQuiz[] = [
  {
    id: 'edx-lp1-assess-1',
    question: 'How long is Edexcel Paper 1 (1EN2/01) and how many marks is it worth?',
    options: [
      '1 hour 30 minutes, 60 marks',
      '1 hour 55 minutes, 80 marks',
      '2 hours, 100 marks',
      '1 hour 45 minutes, 64 marks',
    ],
    correct: 1,
    explanation:
      'Edexcel Paper 1 is 1 hour 55 minutes long and worth 80 marks — 40 for reading (Section A) and 40 for writing (Section B).',
  },
  {
    id: 'edx-lp1-assess-2',
    question: 'Which Assessment Objective tests critical evaluation on Paper 1?',
    options: ['AO1', 'AO2', 'AO4', 'AO6'],
    correct: 2,
    explanation:
      'AO4 tests critical evaluation — the ability to judge how effectively a writer achieves their purpose, supported by textual evidence.',
  },
  {
    id: 'edx-lp1-assess-3',
    question: 'What type of source text appears in Section A of Paper 1?',
    options: [
      'A 20th-century fiction extract',
      'A 19th-century non-fiction text',
      'A modern newspaper article',
      'A Shakespearean speech',
    ],
    correct: 1,
    explanation:
      'Section A of Paper 1 always presents a single unseen 19th-century non-fiction text (1800–1899), such as a letter, diary entry, travel account, or speech.',
  },
  {
    id: 'edx-lp1-assess-4',
    question: 'What is the key difference between analysis (AO2) and evaluation (AO4)?',
    options: [
      'Analysis uses quotations; evaluation does not',
      'Analysis identifies and explains techniques; evaluation judges how effectively they work',
      'Analysis is for reading; evaluation is for writing',
      'There is no meaningful difference',
    ],
    correct: 1,
    explanation:
      'Analysis explains what a writer does and how. Evaluation goes further by making a critical judgement about how successfully the technique achieves its intended effect.',
  },
  {
    id: 'edx-lp1-assess-5',
    question: 'In the PEEL framework, what does the second "E" (Explain) require?',
    options: [
      'Give another example from the text',
      'Explain what happens next in the extract',
      'Analyse how the language choice creates meaning for the reader',
      'Evaluate whether the text is well written overall',
    ],
    correct: 2,
    explanation:
      'The Explain step requires you to analyse how a specific language or structural choice creates meaning or an effect for the reader — this is the analytical core of your paragraph.',
  },
  {
    id: 'edx-lp1-assess-6',
    question: 'What does the archaic 19th-century word "hitherto" mean?',
    options: ['Immediately', 'Until now', 'From where', 'Nevertheless'],
    correct: 1,
    explanation:
      '"Hitherto" means "until now" or "up to this point." Recognising common archaic vocabulary helps you read 19th-century texts more confidently.',
  },
  {
    id: 'edx-lp1-assess-7',
    question: 'How are the 40 marks for Section B (writing) divided?',
    options: [
      '20 marks AO5 + 20 marks AO6',
      '24 marks AO5 + 16 marks AO6',
      '30 marks AO5 + 10 marks AO6',
      '16 marks AO5 + 24 marks AO6',
    ],
    correct: 1,
    explanation:
      'Section B awards 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy — spelling, punctuation, grammar).',
  },
  {
    id: 'edx-lp1-assess-8',
    question: 'Which mnemonic helps you remember when to start a new paragraph?',
    options: ['AFOREST', 'PEEL', 'TIPTOP', 'FANBOYS'],
    correct: 2,
    explanation:
      'TIPTOP stands for Time, Idea, Person, Topic, Opinion, Place. When any of these changes, you should begin a new paragraph.',
  },
  {
    id: 'edx-lp1-assess-9',
    question: 'What does the "T" in the persuasive toolkit AFOREST stand for?',
    options: ['Tone', 'Testimony', 'Tricolon (rule of three)', 'Thesis'],
    correct: 2,
    explanation:
      'The "T" stands for Tricolon — a group of three parallel words, phrases, or clauses for rhythmic emphasis, e.g. "We must act, we must change, we must succeed."',
  },
  {
    id: 'edx-lp1-assess-10',
    question: 'Which of the following is a comma splice?',
    options: [
      'The rain fell heavily, and the streets flooded.',
      'The rain fell heavily; the streets flooded.',
      'The rain fell heavily, the streets flooded.',
      'The rain fell heavily. The streets flooded.',
    ],
    correct: 2,
    explanation:
      'A comma splice joins two independent clauses with only a comma. Fix it with a full stop, semicolon, or conjunction.',
  },
  {
    id: 'edx-lp1-assess-11',
    question: 'If a formal letter is addressed "Dear Sir/Madam", what is the correct sign-off?',
    options: ['Yours sincerely', 'Yours faithfully', 'Kind regards', 'Best wishes'],
    correct: 1,
    explanation:
      '"Yours faithfully" is used when the recipient is unnamed (Dear Sir/Madam). "Yours sincerely" is used when the recipient is named (Dear Mr Smith).',
  },
  {
    id: 'edx-lp1-assess-12',
    question: 'What should you do if you are running out of time on the writing section?',
    options: [
      'Write as fast as possible without planning',
      'Skip the writing section and revisit reading answers',
      'Write a brief plan, a strong opening, then skip to a purposeful conclusion',
      'Copy out the question prompt to fill space',
    ],
    correct: 2,
    explanation:
      'A brief plan shows the examiner your structure. Then prioritise your opening and ending — a purposeful conclusion demonstrates control and can rescue significant marks.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Paper 2 Assessment Questions
// ═══════════════════════════════════════════════════════════════════════════════

const paper2Assessment: CourseQuiz[] = [
  {
    id: 'edx-lp2-assess-1',
    question: 'What two text types appear in Section A of Edexcel Paper 2?',
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
    id: 'edx-lp2-assess-2',
    question: 'What type of writing is assessed in Section B of Paper 2?',
    options: [
      'Transactional writing (letter, speech, article)',
      'Analytical essay writing',
      'Imaginative writing (narrative or description)',
      'Summary writing',
    ],
    correct: 2,
    explanation:
      'Section B of Paper 2 tests imaginative writing — you choose one task and produce a creative narrative or descriptive piece.',
  },
  {
    id: 'edx-lp2-assess-3',
    question: "Which assessment objective requires you to compare writers' ideas and perspectives?",
    options: ['AO1', 'AO2', 'AO3', 'AO5'],
    correct: 2,
    explanation:
      "AO3 requires you to compare writers' ideas and perspectives across two or more texts, typically tested in higher-mark reading questions.",
  },
  {
    id: 'edx-lp2-assess-4',
    question: 'What are the three steps of an inference chain?',
    options: [
      'Quote, Technique, Effect',
      'Point, Evidence, Explanation',
      'Evidence, Interpretation, Meaning',
      'Context, Analysis, Evaluation',
    ],
    correct: 2,
    explanation:
      'The inference chain moves from Evidence (a quotation) to Interpretation (what the detail suggests) to Meaning (the wider significance for character, setting, or mood).',
  },
  {
    id: 'edx-lp2-assess-5',
    question: 'How does Edexcel Paper 2 assess language and structure in fiction?',
    options: [
      'In two separate questions',
      'Only language is assessed',
      'Combined into one question requiring integrated analysis',
      'Through a multiple-choice section',
    ],
    correct: 2,
    explanation:
      'Unlike some boards, Edexcel combines language and structure analysis into a single question, requiring students to integrate both skills.',
  },
  {
    id: 'edx-lp2-assess-6',
    question: 'Which comparison framework do examiners recommend for the highest marks?',
    options: [
      'Block method — all of Text A then Text B',
      'Alternating (point-by-point) — both texts in each paragraph',
      'Chronological method',
      'Thematic method without text references',
    ],
    correct: 1,
    explanation:
      'The alternating method produces sustained comparison. Each paragraph addresses both texts, making the comparison explicit and integrated.',
  },
  {
    id: 'edx-lp2-assess-7',
    question: 'What narrative technique involves beginning a story in the middle of the action?',
    options: ["Circular narrative", "Freytag's Pyramid", 'In medias res', 'Flashback'],
    correct: 2,
    explanation:
      'In medias res (Latin for "in the middle of things") begins mid-action, hooking the reader immediately and revealing backstory gradually.',
  },
  {
    id: 'edx-lp2-assess-8',
    question: "Which of the following best demonstrates 'show, don't tell'?",
    options: [
      '"He was angry and wanted to shout."',
      '"His jaw tightened. He set his coffee down with a crack that silenced the room."',
      '"He felt a lot of anger because of what had happened."',
      '"The angry man walked into the room."',
    ],
    correct: 1,
    explanation:
      'The second option reveals anger through action and environmental impact without stating the emotion directly — this is showing rather than telling.',
  },
  {
    id: 'edx-lp2-assess-9',
    question: 'What does the "zoom in / zoom out" descriptive technique involve?',
    options: [
      'Starting with a close-up and ending with a wide shot',
      'Opening with the whole scene and narrowing to a single detail',
      'Alternating between two locations',
      'Describing from one fixed viewpoint',
    ],
    correct: 1,
    explanation:
      'The zoom technique opens with a wide establishing shot and progressively narrows to a single telling close-up detail, mirroring how a camera frames a scene.',
  },
  {
    id: 'edx-lp2-assess-10',
    question: 'What is the key difference between a symbol and a motif?',
    options: [
      'A symbol is visual; a motif is auditory',
      'A motif recurs throughout the piece while a symbol may appear only once',
      'A symbol is always an object; a motif is always a colour',
      'They are interchangeable terms',
    ],
    correct: 1,
    explanation:
      'A symbol carries abstract meaning and may appear once. A motif is a recurring symbol, and its repetition gives it structural power across the piece.',
  },
  {
    id: 'edx-lp2-assess-11',
    question: 'Which punctuation mark creates a sense of "revelation" or dramatic reveal?',
    options: ['Semicolon', 'Colon', 'Ellipsis', 'Em-dash'],
    correct: 1,
    explanation:
      'A colon introduces an explanation or dramatic reveal — it acts as a hinge swinging the sentence towards its climax.',
  },
  {
    id: 'edx-lp2-assess-12',
    question: 'What should you do in the final 10 minutes of the Paper 2 exam?',
    options: [
      'Write an additional paragraph',
      'Start answering skipped questions',
      'Proofread your work and correct SPaG errors',
      'Re-read both extracts',
    ],
    correct: 2,
    explanation:
      'The final 10 minutes should be spent proofreading. Correcting two or three SPaG errors can move you up a mark band. A polished response outperforms a longer, careless one.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Course Definitions
// ═══════════════════════════════════════════════════════════════════════════════

const edexcelLangPaper1: CourseData = {
  id: 'edexcel-lang-paper1',
  title: 'Edexcel GCSE English Language — Paper 1',
  subtitle: 'Non-Fiction Texts & Transactional Writing (1EN2/01)',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: '1EN2',
  specCode: '1EN2/01',
  price: 0,
  duration: '12 weeks',
  level: 'GCSE (Years 10-11)',
  color: '#7c3aed',
  description:
    'Master Edexcel Paper 1: analyse 19th-century non-fiction texts and craft compelling transactional writing. Covers all question types with Edexcel-specific strategies and examiner insights.',
  moduleList: paper1Modules,
  assessmentQuestions: paper1Assessment,
};

const edexcelLangPaper2: CourseData = {
  id: 'edexcel-lang-paper2',
  title: 'Edexcel GCSE English Language — Paper 2',
  subtitle: 'Fiction, Literary Non-Fiction & Imaginative Writing (1EN2/02)',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: '1EN2',
  specCode: '1EN2/02',
  price: 0,
  duration: '12 weeks',
  level: 'GCSE (Years 10-11)',
  color: '#4f46e5',
  description:
    'Master Edexcel Paper 2: analyse modern fiction and literary non-fiction, then craft powerful imaginative writing with examiner-approved strategies.',
  moduleList: paper2Modules,
  assessmentQuestions: paper2Assessment,
};

export const edexcelCourses: CourseData[] = [edexcelLangPaper1, edexcelLangPaper2];
