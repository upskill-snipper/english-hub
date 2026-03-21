import type { CourseModule } from './courses';

export const langP1Modules: CourseModule[] = [
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
  <li><strong>Rhetorical devices</strong> — The paired construction "our ambitions or our comfort" and the litotes "It was not fear, precisely" create a measured, reflective tone typical of Victorian prose.</li>
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
  // MODULE 4 — Paper 1 Q5: Evaluation
  // ──────────────────────────────────────────────
  {
    id: 'edx-lp1-m4',
    title: 'Reading 19th-Century Non-Fiction: Evaluation',
    duration: '55 min',
    content: `
<h2>Paper 1 Question 5 — Critical Evaluation (16 marks, AO4)</h2>

<p>Question 5 on Edexcel Paper 1 (1EN2/01) is the highest-tariff reading question at <strong>16 marks</strong>, testing <strong>AO4</strong>: critical evaluation. You will be given a statement from "a student" about the 19th-century extract and asked <strong>"How far do you agree?"</strong>. You should spend approximately <strong>20–25 minutes</strong> on this question.</p>

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

<h3>4-Level Mark Scheme Breakdown</h3>
<ul>
  <li><strong>Level 1 (1–4 marks):</strong> Simple, limited comment with little reference to the text. No clear evaluation.</li>
  <li><strong>Level 2 (5–8 marks):</strong> Some attempts to evaluate with general references to the text, but comments tend to be assertion rather than supported judgement.</li>
  <li><strong>Level 3 (9–12 marks):</strong> A clear attempt at evaluation supported by relevant textual references. Some awareness of the writer's methods, though analysis may be uneven.</li>
  <li><strong>Level 4 (13–16 marks):</strong> Perceptive, convincing evaluation with precise, discriminating references. Sophisticated analysis of the writer's methods and their effects.</li>
</ul>

<h3>Model Answer (Level 3–4)</h3>

<p><em>"I largely agree with the student's claim that the writer makes the journey sound 'truly dangerous and frightening,' though I would argue the writer achieves something more nuanced — a sense of creeping dread rather than outright terror. The personification of the landscape as 'pitiless' is highly effective in establishing danger because it suggests the environment possesses a deliberate, almost malicious intent; this is far more unsettling than a simple description of harsh terrain. Furthermore, the structural shift from objective observation — 'three days upon the river' — to the intimate confession 'I confess I felt, for the first time, a creeping apprehension' convincingly traces the narrator's psychological unravelling. The word 'creeping' is particularly well-chosen: it implies the fear is gradual and insidious rather than sudden, which makes it feel more realistic and therefore more frightening. However, the writer's use of litotes — 'It was not fear, precisely' — partially undercuts the student's claim, as it introduces intellectual restraint that tempers the emotional impact. The danger feels controlled and reflected upon rather than raw, suggesting the writer aims to convey a more complex emotional response than simple fright."</em></p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best responses are not simply "I agree" from start to finish. Examiners reward nuance — partially agreeing, qualifying the statement, or identifying where the writer is less successful shows genuine critical engagement and pushes you into the top mark band.</div>

<h3>Timing and Structure</h3>

<p>With <strong>20–25 minutes</strong> and 16 marks at stake, plan your response carefully:</p>
<ul>
  <li><strong>2–3 minutes planning:</strong> Read the statement, annotate the extract for relevant methods, decide your overall position.</li>
  <li><strong>18–20 minutes writing:</strong> Aim for 3–4 developed paragraphs. Each should contain a judgement, a method, evidence, and an explanation of effectiveness.</li>
  <li><strong>2 minutes checking:</strong> Ensure every paragraph includes an evaluative judgement, not just analysis.</li>
</ul>

<p>Question 5 is where the top marks are won and lost. The students who score highly are those who treat the extract as something to be <em>judged</em>, not just described.</p>
`,
    quiz: [
      {
        id: 'edx-lp1-m4-q1',
        question:
          'How many marks is Edexcel Paper 1 Question 5 (evaluation) worth?',
        options: ['6 marks', '10 marks', '15 marks', '16 marks'],
        correct: 3,
        explanation:
          'Question 5 is worth 16 marks — the highest-tariff reading question on Paper 1 — and tests AO4: critical evaluation.',
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
          'Approximately how long should you spend on Q5 (evaluation) in the exam?',
        options: ['10 minutes', '15 minutes', '20–25 minutes', '35 minutes'],
        correct: 2,
        explanation:
          'At 16 marks, Q5 is the most heavily weighted reading question. Around 20–25 minutes allows time for planning, 3–4 developed paragraphs, and a brief check.',
      },
      {
        id: 'edx-lp1-m4-q5',
        question:
          'What common mistake prevents students from reaching the higher mark bands on Q5?',
        options: [
          'Using too many quotations',
          'Writing in paragraphs that are too short',
          'Describing what happens rather than evaluating how effectively the writer achieves it',
          'Disagreeing with the student\'s statement',
        ],
        correct: 2,
        explanation:
          'The most common reason students stay in the lower mark bands is that they describe or analyse without evaluating. Every paragraph must include a judgement about how effectively the writer\'s methods work.',
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
  <li><strong>Essays</strong> — Formal register, logical structure. Common in periodicals such as Dickens's <em>Household Words</em>.</li>
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
          'Paper 1 Section A always uses a 19th-century non-fiction source. A modern broadsheet editorial belongs to Paper 2, which pairs a 19th-century text with a 20th/21st-century text.',
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
  <tr><td>Q2 — Two things you learn</td><td>2</td><td>3 min</td></tr>
  <tr><td>Q3 — Language analysis</td><td>6</td><td>10 min</td></tr>
  <tr><td>Q4 — Whole-text analysis</td><td>15</td><td>20 min</td></tr>
  <tr><td>Q5 — Evaluation</td><td>16</td><td>20 min</td></tr>
  <tr><td>Q6 — Transactional writing</td><td>40</td><td>50 min</td></tr>
  <tr><td>Proofread</td><td>—</td><td>5 min</td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If a reading question overruns, move on. The writing section carries 40 marks and must not be rushed.</div>

<h3>Exam Day Checklist</h3>
<ul>
  <li>Black pen (plus spare), highlighter, watch.</li>
  <li>Read the <strong>entire source</strong> before answering — annotate as you go.</li>
  <li>Underline command words: <em>how, explain, evaluate, to what extent</em>.</li>
  <li>Spend 5 minutes planning your writing before you begin.</li>
</ul>

<h3>Choosing Your Q6 Writing Task</h3>
<p>Take 60 seconds to read both options within Q6, then pick whichever sparks an <strong>immediate idea</strong> for an opening. Avoid prompts that tempt a generic response. If both seem strong, choose the one where you can sustain a confident register throughout — strong, consistent voice secures top marks.</p>

<h3>Running Out of Time?</h3>
<ol>
  <li>Write a <strong>brief plan</strong> so the examiner sees your structure.</li>
  <li>Write your <strong>opening paragraph</strong> as strongly as you can.</li>
  <li>Skip to your <strong>ending</strong> — a purposeful conclusion shows control.</li>
  <li>Fill in middle paragraphs with remaining time.</li>
</ol>

<h3>Mock Walkthrough</h3>

<div class="text-extract">"The factory bell rang at half-past five, and within minutes the lane was alive with figures — men, women, and children — shuffling towards the mill. Their faces were pale, their clothing threadbare. A boy of no more than ten carried a bundle of rags under one arm. He did not speak, nor did he look up. The overseer stood at the gate, watch in hand, marking each name with a stub of pencil."<div class="source">Adapted from a 19th-century factory report</div></div>

<p><strong>Q1 (1 mark):</strong> Identify a phrase — e.g. "their clothing threadbare."</p>

<p><strong>Q2 (2 marks):</strong> Two things about the people: (1) faces pale; (2) clothing threadbare.</p>

<p><strong>Q3 (6 marks):</strong> Analyse language describing the boy — "no more than ten" (emphasises youth), "bundle of rags" (poverty), "did not speak, nor did he look up" (exhaustion/resignation).</p>

<p><strong>Q4 (15 marks):</strong> Structure and language across the whole text — the passage moves from wide shot (lane) to close-up (boy) to the overseer, a cinematic zoom building empathy before introducing authority.</p>

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
          '1 hour 45 minutes',
          '1 hour 55 minutes',
          '2 hours',
        ],
        correct: 2,
        explanation:
          'Edexcel GCSE English Language Paper 1 is 1 hour 55 minutes (115 minutes). Effective time management across this period is essential for accessing all the marks.',
      },
      {
        id: 'edx-lp1-m10-q2',
        question:
          'According to the recommended timing plan, how long should you spend on Q5 (the evaluation question)?',
        options: ['10 minutes', '15 minutes', '20 minutes', '25 minutes'],
        correct: 2,
        explanation:
          'Q5 is worth 16 marks and the recommended allocation is 20 minutes. This gives you roughly one minute per mark plus a small buffer for planning your response.',
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
