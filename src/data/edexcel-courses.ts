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
<h2>Edexcel GCSE English Language — Paper 1 (1EN2/01): Complete Overview</h2>

<p>Paper 1 is titled <strong>Non-Fiction Texts and Transactional Writing</strong>. It is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of the total GCSE. You have <strong>1 hour and 55 minutes</strong> to complete two sections — and every minute counts.</p>

<div class="key-term"><strong>Key Term: 19th-Century Non-Fiction</strong> — A non-fiction text published between 1800 and 1899. This could be a letter, diary entry, newspaper article, travel writing, speech transcript, sermon, or essay from the Victorian or Romantic period. Common themes: social reform, exploration, politics, morality, industry.</div>

<h3>Paper Structure: The Big Picture</h3>

<table>
  <tr>
    <th>Section</th>
    <th>Task</th>
    <th>Marks</th>
    <th>Time</th>
    <th>Assessment</th>
  </tr>
  <tr>
    <td><strong>A: Reading</strong></td>
    <td>5 questions on one unseen 19th-century extract</td>
    <td>40</td>
    <td>~60 min</td>
    <td>AO1, AO2, AO4</td>
  </tr>
  <tr>
    <td><strong>B: Writing</strong></td>
    <td>1 extended transactional task (letter, article, speech, review, etc.)</td>
    <td>40</td>
    <td>~50 min</td>
    <td>AO5, AO6</td>
  </tr>
</table>

<h3>Question-by-Question Breakdown with Strategies</h3>

<ol>
  <li><strong>Q1 (1 mark) — Explicit Comprehension</strong>
    <ul>
      <li><em>Example command:</em> "Give one phrase from the text that shows the writer's attitude to the factory."</li>
      <li><em>Strategy:</em> Locate, underline, copy. No explanation needed — just a precise phrase or sentence.</li>
      <li><em>Time budget:</em> 2 minutes maximum.</li>
    </ul>
  </li>

  <li><strong>Q2 (2 marks) — Two Things You Learn</strong>
    <ul>
      <li><em>Example command:</em> "Give two things you learn about the children's working conditions."</li>
      <li><em>Strategy:</em> Find two distinct facts. State each clearly. Each fact = 1 mark.</li>
      <li><em>Common error:</em> Giving two versions of the same fact (e.g., "They were tired" and "They were exhausted") — this scores only 1 mark.</li>
      <li><em>Time budget:</em> 3 minutes maximum.</li>
    </ul>
  </li>

  <li><strong>Q3 (6 marks) — Language Analysis</strong>
    <ul>
      <li><em>Example command:</em> "Analyse the effect of language choices in lines 10–15. You should comment on the writer's choice of words and phrases."</li>
      <li><em>Strategy:</em> Pick 2–3 short quotations. For each, explain the effect. Use PEE: Point (identify technique) + Evidence (quote) + Explanation (effect on reader).</li>
      <li><em>Grade 8–9 approach:</em> Identify the specific technique (metaphor, simile, alliteration, emotive language, etc.), explain why the writer chose it, and link to the text's purpose.</li>
      <li><em>Time budget:</em> 10 minutes.</li>
    </ul>
  </li>

  <li><strong>Q4 (15 marks) — Language &amp; Structure Analysis</strong>
    <ul>
      <li><em>Example command:</em> "How does the writer use language and structure to influence the reader?"</li>
      <li><em>Strategy:</em> This is the big one. Analyse 4–5 language techniques plus structural choices (paragraphing, opening, closing, sentence variety). Link all to the writer's purpose and effect on the reader.</li>
      <li><em>Grade 8–9 approach:</em> Show understanding of how language AND structure work together to create a cumulative effect. Don't just list techniques — show their interrelationship.</li>
      <li><em>Time budget:</em> 20 minutes.</li>
    </ul>
  </li>

  <li><strong>Q5 (16 marks) — Critical Evaluation</strong>
    <ul>
      <li><em>Example command:</em> "To what extent do you agree that the writer is critical of modern society? Support your answer with textual evidence."</li>
      <li><em>Strategy:</em> Take a clear position (agree/disagree/partially agree). Develop 2–3 paragraphs with evidence. Acknowledge the other viewpoint and counter it.</li>
      <li><em>Grade 8–9 approach:</em> Show nuance. Evaluate the text's methods (is the evidence strong? Is the argument persuasive?) as well as the ideas themselves. Use precise quotations and explain their significance.</li>
      <li><em>Time budget:</em> 20 minutes.</li>
    </ul>
  </li>

  <li><strong>Q6 (40 marks) — Transactional Writing</strong>
    <ul>
      <li><em>Example command:</em> "Write an article for a broadsheet newspaper about the dangers of social media."</li>
      <li><em>Strategy:</em> Spend 5 minutes planning. Identify audience, purpose, form, tone. Write in paragraphs with a clear introduction and conclusion. Use techniques appropriate to the form.</li>
      <li><em>Marking breakdown:</em> 24 marks for AO5 (content, organisation, clarity) + 16 marks for AO6 (spelling, punctuation, grammar, vocabulary range, sentence variety).</li>
      <li><em>Time budget:</em> 45–50 minutes total (5 min plan + 40–45 min write).</li>
    </ul>
  </li>
</ol>

<h3>Assessment Objectives Explained</h3>

<ul>
  <li><strong>AO1 (Reading)</strong> — Identify and interpret explicit information and ideas; identify and interpret implicit meanings. <em>What is the text saying, literally and between the lines?</em></li>
  <li><strong>AO2 (Reading)</strong> — Explain, comment on and analyse how writers use language and structure to achieve effects. <em>Why did the writer make this choice? What effect does it create?</em></li>
  <li><strong>AO4 (Reading)</strong> — Evaluate texts critically and support judgements with appropriate textual references. <em>Is the argument persuasive? Do you agree? Why or why not?</em></li>
  <li><strong>AO5 (Writing)</strong> — Communicate clearly, effectively and imaginatively; organise information using structural and grammatical features. <em>Is your writing well-structured, clear, and suited to the task?</em></li>
  <li><strong>AO6 (Writing)</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect; spell and punctuate accurately. <em>Is your technical accuracy flawless? Do you vary your sentence types?</em></li>
</ul>

<div class="grade-9-technique"><strong>Grade 9 Technique: The Interconnected Response</strong> — Top-band responses do not treat reading and writing as separate skills. When analysing a 19th-century text in Q4–Q5, notice the writer's techniques and use similar techniques in your own Q6 writing. If the source uses anaphora for emphasis, try anaphora in your article. This shows holistic understanding of how language creates meaning.</div>

<h3>Recommended Timing Plan: The Minute-by-Minute Breakdown</h3>

<table>
  <tr><th>Phase</th><th>Activity</th><th>Cumulative Time</th></tr>
  <tr><td>1</td><td>Read source text twice, annotate key phrases and ideas</td><td>5 min</td></tr>
  <tr><td>2</td><td>Q1: Explicit comprehension (1 mark)</td><td>7 min</td></tr>
  <tr><td>3</td><td>Q2: Two things (2 marks)</td><td>10 min</td></tr>
  <tr><td>4</td><td>Q3: Language analysis (6 marks)</td><td>20 min</td></tr>
  <tr><td>5</td><td>Q4: Language &amp; structure (15 marks)</td><td>40 min</td></tr>
  <tr><td>6</td><td>Q5: Evaluation (16 marks)</td><td>60 min</td></tr>
  <tr><td>7</td><td>Q6 planning (brainstorm, structure, technique selection)</td><td>65 min</td></tr>
  <tr><td>8</td><td>Q6 writing (draft introduction, body, conclusion)</td><td>110 min</td></tr>
  <tr><td>9</td><td>Proofread entire paper (both sections)</td><td>115 min</td></tr>
</table>

<p><strong>Golden rule:</strong> If Q1–Q5 overrun, move on. The writing section (Q6) is worth 40 marks and must not be sacrificed for 40 marks of reading. A rushed but complete response scores more than an incomplete one.</p>

<h3>Common Mistakes to Avoid</h3>

<div class="common-mistake"><strong>Time Trap:</strong> Spending 15 minutes on Q1 and Q2 (worth 3 marks) and only 10 minutes on Q5 (worth 16 marks). Keep your early answers brief — you are just retrieving information, not writing essays.</div>

<div class="common-mistake"><strong>Q4/Q5 Confusion:</strong> Q4 asks "How does the writer use language and structure?" (analysis). Q5 asks "To what extent do you agree?" (evaluation + personal response). Don't evaluate in Q4 or just analyse in Q5 — match your response to the command word.</div>

<div class="common-mistake"><strong>Writing Neglect:</strong> Leaving only 20 minutes for Q6. You need at least 45 minutes to write a coherent, well-structured piece worth 40 marks. Plan your time ruthlessly.</div>

<div class="common-mistake"><strong>Generic Answers:</strong> Analysing language without explaining why the effect matters. Don't just say "The writer uses repetition to emphasise the point." Say "The writer uses repetition to emphasise the point <em>that injustice is systemic</em> — by repeating the phrase 'nothing changed', they imply the problem is structural and resistant to reform."</div>

<h3>The 80-Mark Prize: What Each Grade Requires</h3>

<table>
  <tr><th>Grade</th><th>Marks (out of 80)</th><th>Key Characteristics</th></tr>
  <tr><td>9</td><td>72–80</td><td>Sophisticated analysis; precise vocabulary; fluent writing; perceptive evaluation; flawless accuracy</td></tr>
  <tr><td>8</td><td>64–71</td><td>Secure analysis with some insight; varied vocabulary; well-organised writing; thoughtful evaluation; minor errors</td></tr>
  <tr><td>7</td><td>56–63</td><td>Clear analysis; range of techniques identified; clear organisation; supported evaluation; generally accurate</td></tr>
  <tr><td>5</td><td>44–55</td><td>Basic analysis; some technique identification; adequate organisation; simple evaluation; some errors</td></tr>
  <tr><td>4</td><td>36–43</td><td>Limited analysis; few techniques; basic organisation; minimal evaluation; frequent errors</td></tr>
</table>

<h3>The One Essential Skill: Close Reading</h3>

<p>Everything in Paper 1 depends on close, careful reading of the 19th-century extract. Before answering any question, you must:</p>

<ol>
  <li>Read the entire extract twice without underlining.</li>
  <li>On the second read, underline key phrases: dramatic language, repeated words, structural markers (e.g., "But", "Yet", "Finally").</li>
  <li>Note what surprises you, what stands out, what the writer emphasises.</li>
  <li>Consider: <em>Who is this writer? When did they write this? Why? What do they want the reader to feel?</em></li>
</ol>

<p>This 5-minute investment in reading comprehension will unlock marks across all five questions.</p>
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
    content: `<h2>Audience, Purpose &amp; Form — The Foundation of Grade 8–9 Writing</h2>

<p>Section B of Edexcel Paper 1 (1EN2/01) asks you to produce a <strong>transactional/discursive</strong> piece. Before you write a single word, you must lock in three things: <em>who</em> you are writing for (audience), <em>why</em> (purpose), and <em>what shape</em> it takes (form). Get these wrong and your response feels generic — rarely scoring above Level 3. Get them right, and you unlock Levels 4–5 and beyond.</p>

<h3>1. Audience: Speaking to the Right Reader</h3>

<p>Different audiences require different registers, vocabulary, and tone. Mismatching your audience loses marks across AO5 (clarity and organisation) and AO6 (vocabulary range).</p>

<h4>Formal Audiences (Examiners Reward These)</h4>
<ul>
  <li><strong>Headteacher / Principal</strong> — Standard English, measured tone, no slang. Use formal conventions: "Dear Sir/Madam", respectful language, clear problem-solution structure.</li>
  <li><strong>Local Council / Authority</strong> — Evidence-based, logical argumentation. Cite statistics. Structure: opening statement of intent → evidence → call to action.</li>
  <li><strong>Newspaper Editor / Broadsheet</strong> — Professional register, but can use rhetorical techniques (questions, short sentences for impact). Write as though you are a commentator, not a student.</li>
  <li><strong>Academic/Professional Audience</strong> — Advanced vocabulary, complex sentences, formal structures (headings, subheadings, clear paragraphing).</li>
</ul>

<div class="grade-9-technique"><strong>Grade 9 Technique: Audience Awareness as Voice Control</strong> — Grade 9 writers subtly shift their voice to address the audience. Writing to a headteacher feels respectful but not servile. Writing to a newspaper reads as authoritative but accessible. The shift is felt through word choice, sentence structure, and tone — not through explicitly saying "Dear Headteacher".</div>

<h4>Informal Audiences (Acceptable, but Harder to Score High)</h4>
<ul>
  <li><strong>Peers / Younger Students</strong> — Conversational register is acceptable. Still requires accuracy. Can use rhetorical questions, direct address ("You might think…"), and varied pace.</li>
  <li><strong>Friends / Social Groups</strong> — Less common in exam tasks, but if set, maintain clarity and purpose. Do not confuse informal with sloppy.</li>
</ul>

<div class="key-term"><strong>Key Term: Register</strong> — The level of formality in your writing, determined by audience and purpose. Shifting register mid-piece (e.g., starting formal, then using slang) is one of the most common reasons students drop marks on AO5. Examiners can feel when the writer loses control of their voice.</div>

<h3>2. Purpose: The Writer's Intention</h3>

<p>Every piece of writing has a purpose. Identifying your purpose helps you select appropriate techniques and structure your argument logically.</p>

<h4>To Argue</h4>
<p><strong>Definition:</strong> Present a clear position on a topic and defend it with logic, evidence, and counter-arguments.</p>
<p><strong>Structure:</strong> Introduction (state position clearly) → Evidence paragraph 1 (with explanations) → Evidence paragraph 2 (with rebuttals of opposing view) → Conclusion (restate position, call to action).</p>
<p><strong>Techniques:</strong> Facts, statistics, rhetorical questions, parallel structures, logical connectives ("Therefore", "Consequently").</p>
<p><em>Example task:</em> "Write an article arguing that school uniforms should be abolished."</p>

<h4>To Persuade</h4>
<p><strong>Definition:</strong> Move the reader to action or agreement using emotional appeal, logical argument, or credibility.</p>
<p><strong>Structure:</strong> Hook (engage reader emotionally) → Problem (make reader care) → Solution (your proposal) → Call to action (what reader should do next).</p>
<p><strong>Techniques:</strong> Emotive language, rhetorical questions, anecdotes, direct address ("Imagine if..."), triadic structures, powerful verbs.</p>
<p><em>Example task:</em> "Write a letter to your MP persuading them to fund youth mental health services."</p>

<h4>To Advise</h4>
<p><strong>Definition:</strong> Offer guidance on a topic in a supportive, knowledgeable, and authoritative tone.</p>
<p><strong>Structure:</strong> Introduction (establish credibility) → Numbered or bullet-pointed advice → Explanation of each point → Conclusion (encourage action).</p>
<p><strong>Techniques:</strong> Imperative verbs ("Consider…", "Avoid…"), conditional statements ("If you do X, then Y will happen"), signposting ("First", "Second", "Finally").</p>
<p><em>Example task:</em> "Write an advice leaflet for teenagers about managing exam stress."</p>

<h4>To Inform</h4>
<p><strong>Definition:</strong> Present facts and ideas clearly, with explanation where needed. No explicit persuasion, but can be engaging.</p>
<p><strong>Structure:</strong> Introduction (what is the topic?) → Explanation of key points with examples → Conclusion (why does this matter?).</p>
<p><strong>Techniques:</strong> Clear headings, varied sentence starters, rhetorical questions for engagement, specific examples and statistics.</p>
<p><em>Example task:</em> "Write an article informing students about the impact of social media on mental health."</em></p>

<h3>3. Form: The Genre You're Writing</h3>

<p>Form means the type of text you're writing. Each form has conventions — ways that readers expect the text to be structured and styled. Violating these conventions loses marks on AO5.</p>

<h4>Article (for Newspaper or Magazine)</h4>
<ul>
  <li><strong>Structure:</strong> Headline (punchy, intriguing) → Byline or introduction (hook the reader) → Body paragraphs (3–4, each with a point + evidence) → Conclusion (summary or call to action).</li>
  <li><strong>Techniques:</strong> Short, punchy opening sentence. Varied paragraph length (some single-sentence for impact). Rhetorical questions. Direct address to reader.</li>
  <li><strong>Tone:</strong> Authoritative but accessible. As if you are a professional journalist, not a student.</li>
  <li><strong>Grade 9 marker:</strong> The article reads as though it could be published. It has a distinctive voice and a clear argument.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do NOT write "Written by [Your Name]" in an exam article unless explicitly asked. Do write a compelling headline — examiners notice.</div>

<h4>Letter (Formal or Semi-Formal)</h4>
<ul>
  <li><strong>Structure:</strong> Sender's address (top right) → Date → Recipient's details (left) → Opening ("Dear Sir/Madam" or "Dear Mr X,") → Body (3–4 paragraphs, each addressing one point) → Closing formula ("Yours faithfully" or "Yours sincerely,") → Signature.</li>
  <li><strong>Tone:</strong> Respectful, measured, logical. No slang or casual phrasing.</li>
  <li><strong>Common mistake:</strong> Writing a letter like an informal email. Maintain formal conventions.</li>
  <li><strong>Grade 9 marker:</strong> The letter is so well-structured and persuasive that it feels as though it could actually be sent to the intended recipient.</li>
</ul>

<h4>Speech</h4>
<ul>
  <li><strong>Structure:</strong> Opening hook (attention-grabber) → Clear thesis/purpose → Evidence section (3–4 key points, each developed) → Rhetorical devices throughout (questions, repetition, triads) → Powerful closing statement.</li>
  <li><strong>Techniques Specific to Speeches:</strong> Direct address ("You…", "We…") → Rhetorical questions → Repetition and parallel structures → Short, punchy sentences (easier to deliver orally) → Rhetorical exclamation.</li>
  <li><strong>Tone:</strong> Passionate, engaging, as though you are speaking to a live audience.</li>
  <li><strong>Grade 9 marker:</strong> The speech would be powerful if delivered aloud. Rhythm and pacing are evident.</li>
</ul>

<h4>Review</h4>
<ul>
  <li><strong>Structure:</strong> Opening opinion/hook → Detailed analysis of subject (plot, characters, design, etc.) → Strengths and weaknesses → Rating or recommendation → Conclusion.</li>
  <li><strong>Tone:</strong> Conversational but informed. As though you are a professional critic, not a fan.</li>
  <li><strong>Techniques:</strong> Vivid language to describe the subject. Specific examples. Reasoned judgment (don't just say "it was good" — explain why).</li>
  <li><strong>Grade 9 marker:</strong> The review is persuasive. The reader understands both the strengths and weaknesses, and feels compelled to agree with your judgment.</li>
</ul>

<h3>Worked Example: Identifying Audience, Purpose &amp; Form</h3>

<p><strong>Exam Task:</strong> "Write a letter to your local MP persuading them to fund youth mental health services in your area."</p>

<table>
  <tr><th>Element</th><th>Your Analysis</th></tr>
  <tr><td><strong>Audience</strong></td><td>Local MP (formal, authority figure, busy). Use respectful language, evidence-based argument, clear and concise writing.</td></tr>
  <tr><td><strong>Purpose</strong></td><td>To persuade (convince them that funding is necessary). Use emotional appeal (stories of young people) + logical argument (statistics on demand) + call to action.</td></tr>
  <tr><td><strong>Form</strong></td><td>Letter (formal conventions apply). Address format, salutation, closing formula. Structure as persuasive letter, not informal email.</td></tr>
  <tr><td><strong>Register</strong></td><td>Formal. No slang. Sentences: varied length, but generally longer and more complex than in casual writing. Vocabulary: sophisticated, precise.</td></tr>
  <tr><td><strong>Opening</strong></td><td>"Dear [MP's Name], I am writing to urge you to support increased funding for youth mental health services…" (clear purpose, respectful tone)</td></tr>
  <tr><td><strong>Body</strong></td><td>Paragraph 1: Statistics on youth mental health crisis. Paragraph 2: Personal anecdote or local example. Paragraph 3: Explain benefits of investment. Paragraph 4: Counter opposing arguments.</td></tr>
  <tr><td><strong>Close</strong></td><td>"Yours sincerely, [Your Name]" (formal closing formula for letter where recipient name is used)</td></tr>
</table>

<h3>Common Mistakes: Losing Marks on APF</h3>

<div class="common-mistake"><strong>Mis-Matched Register:</strong> Starting formal, then slipping into casual language. <em>WRONG: "The government must act immediately. LOL, the current system is totally broken."</em> CORRECT: Maintain one register throughout.</div>

<div class="common-mistake"><strong>Generic, Purposeless Writing:</strong> Writing an article that could be about anything. No hook, no clear argument, no reason to read it. Grade 9 writing has a distinctive voice and clear intent.</div>

<div class="common-mistake"><strong>Ignoring Form Conventions:</strong> Writing a "letter" that looks like an essay, or a "speech" that reads like a magazine article. Examiners expect you to know the conventions of each form.</div>

<div class="common-mistake"><strong>Addressing the Wrong Audience:</strong> Writing to teenagers when the audience is a headteacher. Re-read the task carefully and keep your audience in mind with every sentence.</div>

<h3>The APF Checklist: Before You Write</h3>

<p>Spend 2 minutes answering these questions before you write Q6:</p>

<ul>
  <li>Who am I writing for? (Formal or informal? Authority figure or peer?)</li>
  <li>What is my purpose? (Argue, persuade, advise, inform, or combination?)</li>
  <li>What form am I writing? (Article, letter, speech, review?)</li>
  <li>What register should I use? (Formal, semi-formal, informal?)</li>
  <li>How should I open? (Hook, respectful greeting, question, statement?)</li>
  <li>What techniques will I use? (Rhetoric, facts, anecdotes, logic?)</li>
  <li>How should I close? (Call to action, summary, powerful statement?)</li>
</ul>

<p>Answering these questions is not wasting time — it is building the scaffolding that holds your 40-mark response together.`,
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
    content: `<h2>Persuasive Techniques — Building a Grade 8–9 Response</h2>

<p>You now understand audience, purpose, and form. But how do you actually persuade? Audience, purpose, and form get you to Level 3. To reach <strong>Level 4–5</strong> on AO5, you need persuasive techniques deployed with <em>precision</em>, not scattered randomly. You must also understand why each technique works and integrate them into a logical, compelling argument.</p>

<h3>Understanding Persuasion: Ethos, Pathos, Logos</h3>

<p>For 2,000 years, persuasive writing has rested on three pillars. Understand these, and you understand all persuasive techniques.</p>

<ul>
  <li><strong>Ethos (Credibility):</strong> Persuade by establishing that you are trustworthy and knowledgeable. "As a teacher with 20 years of experience…" or "The evidence clearly shows…"</li>
  <li><strong>Pathos (Emotion):</strong> Persuade by appealing to the reader's feelings. Stories, vivid language, emotive words make the reader care.</li>
  <li><strong>Logos (Logic):</strong> Persuade through reasoned argument, facts, statistics, and clear cause-and-effect relationships.</li>
</ul>

<p><strong>Grade 9 secret:</strong> Combine all three. Open with pathos (a story). Develop with logos (evidence). Close with ethos (you know this is true because…).</p>

<h3>AFOREST Revisited: The Core Toolkit with Depth</h3>

<table>
  <tr>
    <th>Technique</th>
    <th>Definition &amp; Purpose</th>
    <th>Example</th>
    <th>When to Use</th>
  </tr>
  <tr>
    <td><strong>A — Alliteration</strong></td>
    <td>Repetition of initial consonant sounds. Creates rhythm, emphasis, memorability.</td>
    <td><em>"brutal, broken Britain"</em></td>
    <td>When you want a phrase to stick in the reader's mind. Political slogans love this.</td>
  </tr>
  <tr>
    <td><strong>F — Facts</strong></td>
    <td>Verifiable, objective information. The backbone of logical persuasion.</td>
    <td><em>"1.4 million UK children live in poverty"</em></td>
    <td>Always. Facts give credibility. But explain why the fact matters — don't just drop it.</td>
  </tr>
  <tr>
    <td><strong>O — Opinions as Fact</strong></td>
    <td>Presenting opinions as though they are certain facts. Creates confidence in the reader.</td>
    <td><em>"It is undeniable that social media damages young people's mental health."</em></td>
    <td>Use sparingly and carefully. If overused, it seems arrogant. Best in the opening or closing.</td>
  </tr>
  <tr>
    <td><strong>R — Rhetorical Questions</strong></td>
    <td>Questions asked for effect, not to receive an answer. Engage the reader as a thinking partner.</td>
    <td><em>"How can we call ourselves civilised when children sleep rough on our streets?"</em></td>
    <td>Opens paragraphs powerfully. Creates emotional engagement. Make sure the implied answer supports your argument.</td>
  </tr>
  <tr>
    <td><strong>E — Emotive Language</strong></td>
    <td>Words chosen for emotional associations, not just literal meaning. "Abandoned" vs. "left alone".</td>
    <td><em>"abandoned children", "devastating impact", "harrowing conditions"</em></td>
    <td>Throughout persuasive writing. But avoid melodrama — Grade 8–9 writing uses emotive language subtly.</td>
  </tr>
  <tr>
    <td><strong>S — Statistics</strong></td>
    <td>Numerical evidence. Concrete, persuasive, often more convincing than facts alone.</td>
    <td><em>"73% of teachers report increased stress levels"; "Attendance has risen by 15% since the policy began."</em></td>
    <td>Essential for logical persuasion. Always explain what the statistic means and why it matters.</td>
  </tr>
  <tr>
    <td><strong>T — Tricolon/Triadic Structure</strong></td>
    <td>Three parallel elements in sequence. Creates rhythm and emphasis. "Life, liberty, and the pursuit of happiness."</td>
    <td><em>"Act, change, succeed." "Strong, silent, unstoppable."</em></td>
    <td>For powerful closing statements or to emphasise three interconnected ideas. Very common in speeches.</td>
  </tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Top-band responses <em>integrate</em> AFOREST techniques into logical chains, not checklists. You do not need to use all seven techniques in every piece. Use the ones that serve your argument. A rhetorical question followed by a statistic, then an emotive phrase, creates a much stronger effect than seven isolated techniques scattered through the text.</div>

<h3>Advanced Persuasive Techniques: Beyond AFOREST</h3>

<h4>1. Counter-Arguments &amp; Rebuttals</h4>
<p><strong>How it works:</strong> Acknowledge the opposing viewpoint, then dismantle it with stronger evidence.</p>
<p><strong>Why it's persuasive:</strong> Shows you are fair-minded and have considered the other side. Readers trust writers who do this.</p>
<p><strong>Structure:</strong> "Some argue that X. However, this ignores Y, which clearly shows Z."</p>
<p><em>Example:</em> "Some claim that uniforms restrict self-expression. Yet evidence from schools that have introduced them shows improved focus and reduced bullying — benefits that clearly outweigh concerns about minor restrictions on fashion choice."</p>

<h4>2. Anecdotes &amp; Personal Stories</h4>
<p><strong>How it works:</strong> A brief, vivid story makes abstract arguments concrete and human.</p>
<p><strong>Why it's persuasive:</strong> Emotional connection. Readers remember stories more than statistics.</p>
<p><strong>Grade 9 tip:</strong> Keep anecdotes brief (2–3 sentences max). Make them specific and relevant. Connect them explicitly to your argument.</p>
<p><em>Example:</em> "Last year, a student in my year struggled silently with anxiety for months. With proper mental health support, she is now thriving. Multiply her story by thousands of young people across the country, and you see the human cost of underfunding."</p>

<h4>3. Expert Testimony &amp; Authority</h4>
<p><strong>How it works:</strong> Cite credible experts or institutions to support your argument.</p>
<p><strong>Why it's persuasive:</strong> Builds ethos. Readers trust experts.</p>
<p><em>Example:</em> "According to the British Psychological Association, adolescent anxiety has increased by 40% in the past decade, largely due to social media use."</p>

<h4>4. Vivid Imagery &amp; Description</h4>
<p><strong>How it works:</strong> Use specific sensory language to make your argument memorable and emotionally resonant.</p>
<p><strong>Why it's persuasive:</strong> Creates mental images that stay with the reader.</p>
<p><em>Example:</em> "Imagine standing in a classroom where the radiators are broken in January, where textbooks are dog-eared from the 1990s, where the ceiling is patched with tape. This is the reality for students in underfunded schools."</p>

<h4>5. Parallel Structures &amp; Anaphora</h4>
<p><strong>How it works:</strong> Repeating grammatical patterns or opening words to create rhythm and emphasis.</p>
<p><strong>Why it's persuasive:</strong> Memorable, rhythmic, builds momentum.</p>
<p><em>Example:</em> "We must invest in youth services. We must reform the education system. We must hold government accountable. Only then will we build a fairer society."</p>

<h4>6. Concession &amp; Qualified Language</h4>
<p><strong>How it works:</strong> Use phrases like "Admittedly", "It could be argued", "Some might suggest" to appear fair-minded before making a stronger counter-point.</p>
<p><strong>Why it's persuasive:</strong> Readers trust writers who sound balanced, not dogmatic.</p>
<p><em>Example:</em> "Admittedly, regulation does impose costs on business. However, the cost of inaction — environmental damage and public health crises — far outweighs any financial burden."</p>

<h4>7. Direct Address &amp; Second-Person Perspective</h4>
<p><strong>How it works:</strong> Speak directly to the reader using "you" or "we".</p>
<p><strong>Why it's persuasive:</strong> Makes the reader feel personally involved and responsible.</p>
<p><em>Example:</em> "You've experienced the frustration of slow public transport. You know the environmental cost of endless cars on our roads. You can demand change."</p>

<h3>Worked Examples: Technique Chains, Not Checklists</h3>

<h4>Weak (Checklist Approach):</h4>
<p><em>"The government should invest in youth services. This is important. There is a statistic: youth anxiety has increased. Some people disagree. But I think we should still do it because young people matter."</em></p>

<p><strong>Problems:</strong> Techniques are isolated. No rhythm. No emotional connection. Argument feels fragmented.</p>

<h4>Strong (Chained Approach):</h4>
<p><em>"Young people are in crisis. In the past decade, adolescent anxiety has increased by 40%. This is not a statistic — behind every percentage point is a real teenager struggling in silence. Yet government investment in youth mental health has fallen by 25%. How can we call ourselves a civilised society when we abandon our young to their darkest moments? The evidence is clear: investment in youth services saves lives. The choice is ours: act now, or face a generation of broken young people. We must act."</em></p>

<p><strong>What's working here?</strong></p>
<ul>
  <li>Opening: Emotive statement to engage pathos.</li>
  <li>Statistic: Logos (logic and evidence).</li>
  <li>Vivid rephrasing: "Behind every percentage point is a real teenager" — humanises the statistic.</li>
  <li>Counter-fact: Government spending has fallen — strengthens the argument.</li>
  <li>Rhetorical question: Engages reader emotionally and implicitly calls out the government.</li>
  <li>Counter-argument acknowledgement: "The evidence is clear" — ethos and logos combined.</li>
  <li>Triadic close: "Act, save, heal" structure (simplified). Powerful.</li>
  <li>Final statement: Simple, emphatic, leaves the reader thinking.</li>
</ul>

<h3>Grade 9 Technique: The Persuasive Paragraph Structure</h3>

<p>Each paragraph in persuasive writing should follow this pattern:</p>

<ol>
  <li><strong>Topic Sentence (Ethos):</strong> Make a clear claim. "Investment in education is the foundation of social mobility."</li>
  <li><strong>Evidence (Logos):</strong> Provide facts, statistics, or expert testimony. "Research from the Institute for Education shows that students from disadvantaged backgrounds who receive early intervention are 35% more likely to progress to university."</li>
  <li><strong>Elaboration (Pathos + Logic):</strong> Explain why this evidence matters and what it means for the reader. Use vivid language, anecdotes, or emotional resonance. "This means that a young person in a poor area has a genuine chance — if we give them the tools. Without investment, their postcodes determine their futures."</li>
  <li><strong>Link to Argument (Ethos):</strong> Tie it back to your main persuasive goal. "This is why increased education funding is not a luxury — it is a moral imperative."</li>
</ol>

<h3>Common Mistakes in Persuasive Writing</h3>

<div class="common-mistake"><strong>Technique Overload:</strong> Using every technique in a single paragraph. This is exhausting to read and dilutes the effect. Choose 1–2 techniques per paragraph that serve your argument.</div>

<div class="common-mistake"><strong>Unmotivated Techniques:</strong> Using alliteration or rhetorical questions just because they are "good techniques". They must serve your persuasive goal. Ask yourself: "Does this phrase persuade the reader to agree with me?"</div>

<div class="common-mistake"><strong>Ignoring Counter-Arguments:</strong> Addressing only your own side of the debate. Top-band responses acknowledge opposing viewpoints and refute them. This shows intellectual honesty and makes your argument stronger.</div>

<div class="common-mistake"><strong>Statistics Without Explanation:</strong> Dropping a statistic and moving on. Always explain what it means and why it matters. <em>WEAK: "73% of students support the proposal."</em> STRONG: <em>"73% of students support the proposal — evidence that there is substantial demand for change."</em></div>

<div class="common-mistake"><strong>Melodramatic Tone:</strong> Using overly emotional language that seems exaggerated. Grade 8–9 writing is persuasive but measured. <em>WEAK: "This is literally the worst disaster in human history!"</em> STRONG: <em>"This represents a significant harm to vulnerable populations."</em></div>

<h3>Practice: Build Your Technique Chain</h3>

<p><strong>Prompt:</strong> "Write an article persuading your school to extend the school day to include after-school clubs and mentoring."</p>

<p><strong>Your persuasive chain (identify the techniques):</strong></p>

<ol>
  <li><strong>Opening:</strong> "Students today face unprecedented pressure — academic, social, and emotional. Our schools must do more to support them."
    <ul><li>Technique: ___________</li></ul>
  </li>
  
  <li><strong>Evidence paragraph:</strong> "Research from the Educational Psychology Review shows that students in schools offering extended support programmes achieve 12% higher grades and report 35% lower stress levels."
    <ul><li>Technique: ___________</li></ul>
  </li>
  
  <li><strong>Emotional resonance:</strong> "Imagine a young person struggling at home, with nowhere safe to go after 3 PM. An after-school club could be the difference between isolation and belonging."
    <ul><li>Technique: ___________</li></ul>
  </li>
  
  <li><strong>Counter-argument:</strong> "Some argue that funding constraints make this impossible. Yet the long-term cost of mental health crises and underachievement far exceeds the investment needed now."
    <ul><li>Technique: ___________</li></ul>
  </li>
  
  <li><strong>Closing:</strong> "Invest in students. Build community. Transform lives. The choice is clear."
    <ul><li>Technique: ___________</li></ul>
  </li>
</ol>

<p><strong>Answers:</strong> (1) Emotive language, (2) Statistics + authority, (3) Vivid imagery + anecdote, (4) Counter-argument + rebuttal, (5) Parallel structure (triadic) + imperative</p>`,
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
<h2>AO6: Spelling, Punctuation &amp; Grammar — The Technical Mark Multiplier</h2>

<p>On Edexcel Paper 1 (1EN2/01), <strong>AO6 is worth 16 marks</strong> on writing — that is <strong>40% of the writing mark</strong>. This is not a minor bonus; it is the difference between a Grade 5 and a Grade 7. Examiners reward technical accuracy at every grade boundary, and sloppy work loses marks even if the ideas are strong.</p>

<div class="key-term"><strong>Key Term: AO6</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.</div>

<h3>The AO6 Mark Pyramid</h3>
<ul>
  <li><strong>Grades 1–3:</strong> Basic spelling and punctuation, frequent errors that obscure meaning.</li>
  <li><strong>Grades 4–5:</strong> Generally accurate spelling and punctuation; variety in sentence structure is attempted but not always controlled.</li>
  <li><strong>Grades 6–7:</strong> Accurate spelling and punctuation; wide range of sentence structures used effectively for clarity and effect.</li>
  <li><strong>Grades 8–9:</strong> Sophisticated vocabulary and spelling; precise punctuation used for maximum impact; varied sentence structures create rhythm, pace, and emphasis.</li>
</ul>

<h3>Common Spelling Errors &amp; Mnemonics</h3>
<ul>
  <li><strong>definitely</strong> — not "definately" (def-i-nite-ly: it has no 'a')</li>
  <li><strong>necessary</strong> — one <em>c</em>, two <em>s</em>s (remember: one collar, two sleeves)</li>
  <li><strong>separate</strong> — there is "a rat" in sep<em>a</em>rate</li>
  <li><strong>conscience</strong> — has "science" in it (your moral science)</li>
  <li><strong>environment</strong> — don't forget the <em>n</em> before the <em>m</em> (environ-m-ent)</li>
  <li><strong>business</strong> — "bus-i-ness", not "buisness" (there is no 'u')</li>
  <li><strong>privilege</strong> — not "privelige" (think: "I get special treatment")</li>
  <li><strong>occurrence</strong> — double 'c', double 'r' (it happens twice)</li>
  <li><strong>questionnaire</strong> — two 'n's, two 'r's (questions need double-checking)</li>
  <li><strong>accommodate</strong> — double 'c', double 'm' (a friend + a motel = accommodation)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If unsure how to spell a word, replace it with a synonym you can spell confidently. A simpler word spelled correctly is always worth more than an ambitious word spelled wrong. Never guess at complex words in an exam.</div>

<h3>Punctuation for Maximum Effect</h3>

<div class="grade-9-technique"><strong>Grade 9 Technique: Punctuation as Meaning-Maker</strong> — Advanced writers do not use punctuation merely to follow rules; they use it strategically to guide the reader's pace, create emphasis, and shape tone. A semicolon creates a pause shorter than a full stop. A dash interrupts. An ellipsis creates suspense. Master this distinction.</div>

<h4>Semicolons: The Sophisticated Pause</h4>
<p><strong>Purpose:</strong> Link two related independent clauses without a conjunction. Creates a subtle pause — closer than a full stop, more deliberate than a comma.</p>
<ul>
  <li><em>The corridor was empty; every door stood ajar.</em></li>
  <li><em>She had practised for months; the performance was effortless.</em></li>
  <li><em>Climate change is real; the evidence is overwhelming.</em></li>
</ul>
<p><strong>Why examiners love it:</strong> Demonstrates mature control and shows you can handle grammatically complex ideas without fragmenting them.</p>

<h4>Colons: The Dramatic Reveal</h4>
<p><strong>Purpose:</strong> Introduce a list, explanation, or dramatic statement that expands on what came before.</p>
<ul>
  <li><em>She had one rule: never look back.</em></li>
  <li><em>The policy requires three things: evidence, transparency, and accountability.</em></li>
  <li><em>His silence said everything: he disagreed profoundly.</em></li>
</ul>

<h4>Dashes: The Interruption</h4>
<p><strong>Purpose:</strong> Insert parenthetical information, create emphasis, or show an interruption in thought.</p>
<ul>
  <li><em>The garden — once immaculate — was reclaimed by weeds.</em> (parenthetical insert)</li>
  <li><em>She turned to leave — then hesitated.</em> (sudden shift or realisation)</li>
  <li><em>Three things drive society: power, money, and — if we're lucky — compassion.</em> (emphatic insertion)</li>
</ul>

<h4>Ellipsis: The Pregnant Pause</h4>
<p><strong>Purpose:</strong> Build tension, suggest something unsaid, or show a character's hesitation.</p>
<ul>
  <li><em>He reached for the door handle...</em> (What will he find?)</li>
  <li><em>She had always known the truth, but never expected him to...</em> (Trail off strategically)</li>
  <li><em>First came the wind. Then the rain. Then...</em> (Suspense)</li>
</ul>
<p><strong>Important:</strong> Use sparingly. Overuse of ellipsis appears immature.</p>

<h3>Varied Sentence Openers: Breaking the Subject-Verb Pattern</h3>

<p><strong>Common mistake:</strong> Every sentence begins with the subject. This creates a monotonous rhythm that bores examiners. Grade 9 responses vary their starters.</p>

<h4>Adverbial Openers</h4>
<ul>
  <li><em>Silently, the figure crept along the wall.</em></li>
  <li><em>Immediately, the response was clear: rejection.</em></li>
  <li><em>Gradually, the truth emerged.</em></li>
</ul>

<h4>Participial Openers (Using -ing or -ed)</h4>
<ul>
  <li><em>Trembling with anticipation, she opened the letter.</em></li>
  <li><em>Exhausted from the search, they gave up.</em></li>
  <li><em>Having considered the evidence, the jury returned a guilty verdict.</em></li>
</ul>

<h4>Prepositional Openers</h4>
<ul>
  <li><em>In the depths of the forest, an ancient secret lay hidden.</em></li>
  <li><em>Beyond the mountains, a new world awaited.</em></li>
  <li><em>Throughout history, power corrupts the weak.</em></li>
</ul>

<h4>Imperative Openers (Commands)</h4>
<ul>
  <li><em>Consider this: every great city was once a village.</em></li>
  <li><em>Imagine a world without electricity.</em></li>
  <li><em>Think about the long-term consequences.</em></li>
</ul>

<h4>Question Openers</h4>
<ul>
  <li><em>What happens when society forgets its duty to its young?</em></li>
  <li><em>How can we expect change without first challenging ourselves?</em></li>
</ul>

<h3>Sentence Types: Building Grammatical Variety</h3>

<h4>Simple Sentences (1 Independent Clause)</h4>
<p><strong>Effect:</strong> Dramatic emphasis, pace, shock value.</p>
<ul>
  <li><em>She ran.</em></li>
  <li><em>The lights went out.</em></li>
  <li><em>Nothing changed.</em></li>
</ul>
<p><strong>Grade 9 tip:</strong> Use occasional simple sentences to create impact after longer complex sentences.</p>

<h4>Compound Sentences (2+ Independent Clauses)</h4>
<p><strong>Effect:</strong> Balances two equal ideas; suggests parallel weight or consequence.</p>
<ul>
  <li><em>He opened the door, and the room was empty.</em> (FANBOYS: and, but, or, yet, so, nor)</li>
  <li><em>The evidence was clear; therefore, the jury had no choice.</em></li>
  <li><em>Some argue for regulation, yet others demand freedom.</em></li>
</ul>

<h4>Complex Sentences (Independent + Subordinate Clauses)</h4>
<p><strong>Effect:</strong> Shows sophisticated thinking; creates hierarchy of ideas (main idea + supporting detail).</p>
<ul>
  <li><em>Although the policy seems harsh, it is necessary.</em> (subordinate clause first)</li>
  <li><em>She left the city because she could no longer bear the noise.</em> (subordinate clause second)</li>
  <li><em>If the government fails to act, society will suffer.</em> (conditional relationship)</li>
</ul>

<h4>Minor Sentences (Deliberate Fragments)</h4>
<p><strong>Effect:</strong> Emphasis, rhythm, immediacy. Use sparingly and purposefully.</p>
<ul>
  <li><em>Silence. Nothing but silence.</em></li>
  <li><em>The end. No exceptions. No apologies.</em></li>
  <li><em>Impossible. Yet it happened.</em></li>
</ul>

<div class="grade-9-technique"><strong>Grade 9 Technique: The Sentence Rhythm Symphony</strong> — A Grade 9 response moves between short, punchy sentences (for impact) and long, flowing complex sentences (for sophistication). This creates a musical rhythm that keeps the reader engaged. Read your work aloud — you should hear variation in pace.</div>

<h3>Paragraph Variation: Length Creates Emphasis</h3>

<p>Vary not just sentences, but paragraphs. A single-sentence paragraph stands out like a spotlight.</p>

<ul>
  <li><strong>Long paragraph (5–7 sentences):</strong> Development, evidence, explanation.</li>
  <li><strong>Standard paragraph (3–4 sentences):</strong> Point + evidence + explanation.</li>
  <li><strong>Short paragraph (1–2 sentences):</strong> Emphasis, turning point, shock reveal.</li>
</ul>

<p><em>Example:</em></p>
<p><em>"The government promised reform. For decades, nothing changed. Communities were forgotten. Schools crumbled. Services disappeared. Yet politicians claimed success. Change is possible only when accountability exists."</em></p>

<h3>Common AO6 Mistakes to Avoid</h3>

<div class="common-mistake"><strong>Comma Splicing:</strong> Joining two independent clauses with only a comma. <em>"He opened the door, the room was empty."</em> Fix: Use a full stop, semicolon, or conjunction. <em>"He opened the door. The room was empty."</em> or <em>"He opened the door; the room was empty."</em> or <em>"He opened the door, and the room was empty."</em></div>

<div class="common-mistake"><strong>Tense Shifting:</strong> Switching randomly between past, present, and future. <em>"She walks into the room and saw a mysterious figure."</em> Pick one tense (past) and maintain it throughout: <em>"She walked into the room and saw a mysterious figure."</em></div>

<div class="common-mistake"><strong>Apostrophe Confusion:</strong>
  <ul>
    <li><em>"It's"</em> = "it is" or "it has"; <em>"its"</em> = possessive (no apostrophe)</li>
    <li><em>"They're"</em> = "they are"; <em>"their"</em> = possessive; <em>"there"</em> = place</li>
    <li><em>"You're"</em> = "you are"; <em>"your"</em> = possessive</li>
    <li><em>"Who's"</em> = "who is"; <em>"whose"</em> = possessive</li>
  </ul>
  <p><em>Correct:</em> <em>"The team submitted its report on time."</em> NOT <em>"its' report"</em> or <em>"it's report"</em>.</p>
</div>

<div class="common-mistake"><strong>Unclear Pronoun Reference:</strong> <em>"The teacher told the student he was late."</em> (Is the teacher or student late?) Fix: <em>"The teacher told the late student he must work harder."</em> or <em>"The teacher, who was late, told the student to focus."</em></div>

<div class="common-mistake"><strong>Sentences Beginning with "However" or "Therefore":</strong> These conjunctions should be preceded by a semicolon or placed after a full stop. <em>WRONG: "The evidence was clear. However, the court was unconvinced."</em> CORRECT: <em>"The evidence was clear; however, the court was unconvinced."</em></div>

<div class="common-mistake"><strong>Overuse of Exclamation Marks:</strong> One per essay maximum. They are not emphatic — they are immature.</div>

<h3>Worked Example: Elevating Your Technical Writing</h3>

<h4>Original (Grade 4–5):</h4>
<p><em>"Schools are important. They teach students. Students learn maths and english. Teachers are good at their jobs. Schools help the economy."</em></p>

<h4>Elevated (Grade 8–9):</h4>
<p><em>"Schools represent the bedrock of an equitable society. Beyond merely teaching mathematics and English, educational institutions develop critical thinking, foster social cohesion, and prepare young people for economic participation. Yet underfunding threatens this mission; schools lack resources, teachers are demoralised, and students are denied opportunity. Consider this: every pound invested in education yields manifold returns."</em></p>

<p><strong>What changed?</strong></p>
<ul>
  <li>Sophisticated vocabulary: "bedrock", "equitable", "demoralised", "manifold"</li>
  <li>Varied sentence structure: simple statement, then complex explanation, then parallel clauses, then rhetorical question</li>
  <li>Strategic punctuation: semicolon links related ideas; dash creates emphasis</li>
  <li>Paragraph rhythm: builds argument logically</li>
</ul>

<h3>Practice: Edit for AO6</h3>

<p><strong>Original passage (containing 5 errors):</strong></p>
<p><em>"The internet has changed everything. It allows people to communicate instantly. People can access information from anywhere. Its easy to share ideas. However, there are risks; some people use it for crime. The impact is huge, it affects everyone."</em></p>

<p><strong>Identify the errors, then rewrite using Grade 9 technique:</strong></p>
<ul>
  <li>Repetitive sentence starters</li>
  <li>Apostrophe error ("Its" should be "It's")</li>
  <li>Comma splice ("huge, it affects")</li>
  <li>Lack of sophisticated vocabulary</li>
  <li>Missing sentence variety</li>
</ul>

<p><strong>Possible Grade 8–9 rewrite:</strong></p>
<p><em>"The internet has fundamentally transformed how we communicate, work, and learn. Instant global connectivity has democratised access to information; yet this same power has enabled unprecedented security threats. While legitimate users share ideas and build communities, bad actors exploit the system for fraud, harassment, and worse. The challenge is not technological — it is moral: how do we preserve the internet's liberating potential while protecting society from its darker applications?"</em></p>
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
    content: `<h2>Paper 1 Exam Strategy &amp; Timed Practice — The Full Walkthrough</h2>

<p>You now understand all the components of Paper 1: reading analysis, evaluation, and transactional writing. But understanding concepts and executing them under exam pressure are two different things. This module shows you how to allocate time ruthlessly, manage pressure, and walk through a complete mock exam.</p>

<h3>The Golden Rule: One Minute Per Mark (Plus Strategic Padding)</h3>

<p>With 80 marks in 115 minutes, you have roughly <strong>1.4 minutes per mark</strong>. But marks are not equally weighted. Questions worth 1–2 marks need only seconds. Questions worth 15–16 marks need careful time investment.</p>

<h4>Realistic Time Allocation</h4>

<table>
  <tr>
    <th>Activity</th>
    <th>Marks</th>
    <th>Time</th>
    <th>Cumulative</th>
  </tr>
  <tr>
    <td><strong>1. Read source text (carefully)</strong></td>
    <td>—</td>
    <td>5 min</td>
    <td>5 min</td>
  </tr>
  <tr>
    <td><strong>2. Q1 — Comprehension</strong></td>
    <td>1</td>
    <td>2 min</td>
    <td>7 min</td>
  </tr>
  <tr>
    <td><strong>3. Q2 — Two things</strong></td>
    <td>2</td>
    <td>3 min</td>
    <td>10 min</td>
  </tr>
  <tr>
    <td><strong>4. Q3 — Language analysis</strong></td>
    <td>6</td>
    <td>10 min</td>
    <td>20 min</td>
  </tr>
  <tr>
    <td><strong>5. Q4 — Language &amp; structure</strong></td>
    <td>15</td>
    <td>20 min</td>
    <td>40 min</td>
  </tr>
  <tr>
    <td><strong>6. Q5 — Evaluation</strong></td>
    <td>16</td>
    <td>20 min</td>
    <td>60 min</td>
  </tr>
  <tr>
    <td><strong>SECTION A COMPLETE</strong></td>
    <td><strong>40</strong></td>
    <td><strong>60 min</strong></td>
    <td><strong>60 min</strong></td>
  </tr>
  <tr>
    <td><strong>7. Q6 — Plan (brainstorm, outline)</strong></td>
    <td>—</td>
    <td>5 min</td>
    <td>65 min</td>
  </tr>
  <tr>
    <td><strong>8. Q6 — Write (introduction)</strong></td>
    <td>—</td>
    <td>10 min</td>
    <td>75 min</td>
  </tr>
  <tr>
    <td><strong>9. Q6 — Write (body paragraphs)</strong></td>
    <td>—</td>
    <td>25 min</td>
    <td>100 min</td>
  </tr>
  <tr>
    <td><strong>10. Q6 — Write (conclusion)</strong></td>
    <td>—</td>
    <td>5 min</td>
    <td>105 min</td>
  </tr>
  <tr>
    <td><strong>11. Proofread (both sections)</strong></td>
    <td>—</td>
    <td>10 min</td>
    <td>115 min</td>
  </tr>
  <tr>
    <td><strong>TOTAL</strong></td>
    <td><strong>80</strong></td>
    <td><strong>115 min</strong></td>
    <td></td>
  </tr>
</table>

<div class="grade-9-technique"><strong>Grade 9 Technique: The Overrun Rule</strong> — If you overrun on Q1–Q5, skip to Q6. The writing section is worth 40 marks — exactly 50% of the paper. A complete, well-written response is always worth more than a perfect reading section with a rushed or missing essay.</div>

<h3>The Reading Section: Strategic Skimming &amp; Close Reading</h3>

<h4>Step 1: Read the Source Text (5 min)</h4>
<p><strong>First read (2 min, no marking):</strong> Read the entire text once, without underlining or annotating. Get a feel for the writer's argument, tone, and main ideas.</p>

<p><strong>Second read (3 min, with annotation):</strong> Read again slowly. This time:
<ul>
  <li>Underline key phrases (words and phrases that reveal the writer's attitude, purpose, or technique).</li>
  <li>Circle repeated words or structural markers ("But", "Yet", "Finally", "Moreover").</li>
  <li>Note your immediate reactions: "This is shocking", "This is clever wordplay", "This is emotional appeal".</li>
</ul>
</p>

<h4>Step 2–3: Q1 &amp; Q2 (5 min total)</h4>
<p><strong>Q1 (2 min):</strong> Locate the relevant phrase. Copy or paraphrase it closely. One phrase is enough. Done.</p>

<p><strong>Q2 (3 min):</strong> Find two distinct facts. State each in one sentence. Move on.</p>

<p><strong>Golden rule:</strong> Do not write elaborate explanations for Q1–Q2. The marks are few. Short answers are faster and just as effective.</p>

<h4>Step 4: Q3 — Language Analysis (10 min)</h4>
<p><strong>Task:</strong> Analyse the effect of language choices in a specific section. You must:
1. Identify a language technique (metaphor, simile, alliteration, emotive language, etc.)
2. Quote a short phrase (2–5 words)
3. Explain the effect on the reader

<p><strong>Structure your answer:</strong></p>
<ol>
  <li>"The writer uses [technique] in the phrase '[quote]'."</li>
  <li>"This creates an effect of [mood/feeling] because…"</li>
  <li>"As a result, the reader [feels/thinks/understands]…"</li>
</ol>

<p><strong>Do 2–3 techniques:</strong> Each technique + explanation = 2 marks roughly. Aim for 2–3 mini-analyses to secure 5–6 marks.</p>

<h4>Step 5: Q4 — Language &amp; Structure (20 min)</h4>
<p><strong>Task:</strong> How does the writer use language AND structure to influence the reader? This is the biggest reading question (15 marks). You must:</p>

<ol>
  <li><strong>Analyse 4–5 language techniques</strong> (use PEE: Point, Evidence, Explanation).</li>
  <li><strong>Analyse structural choices:</strong> Opening (hook or calm?), paragraphing (short or long?), sentence variety (builds pace?), closing (powerful or reflective?).</li>
  <li><strong>Link all to effect:</strong> How do these choices work together to influence the reader?</li>
</ol>

<p><strong>Sample structure:</strong></p>
<p><em>"The writer uses [technique] throughout the text to [effect]. For example, in line X, [quote]. This creates [feeling] in the reader. Additionally, the writer's structural choice to [short sentences / varied paragraph length / opening statement] reinforces this by [why it matters]. Together, these choices [cumulative effect on reader]."</em></p>

<p><strong>Grade 9 secret:</strong> Show how language and structure work TOGETHER. Don't just list techniques; show their interconnection.</p>

<h4>Step 6: Q5 — Evaluation (20 min)</h4>
<p><strong>Task:</strong> To what extent do you agree with a statement about the text? This requires a personal, critical response backed by evidence.</p>

<p><strong>Structure:</strong></p>
<ol>
  <li><strong>Opening (2 min):</strong> Clear statement of your position. "I agree to a large extent because…" OR "I partially agree because…" OR "I disagree because…"</li>
  <li><strong>Body Paragraph 1 (6 min):</strong> Your first piece of evidence. Quote, explain, link to your position.</li>
  <li><strong>Body Paragraph 2 (6 min):</strong> Your second piece of evidence. Quote, explain, link.</li>
  <li><strong>Counter-argument Paragraph (4 min):</strong> Acknowledge the opposite view, then refute it. "Some might argue…. However,…"</li>
  <li><strong>Conclusion (2 min):</strong> Restate your position in light of the evidence. "On balance, I agree because…"</li>
</ol>

<p><strong>Grade 9 approach:</strong> Evaluate the writer's METHODS, not just ideas. "Is the evidence strong?" "Is the argument logically sound?" "Does the emotional appeal feel authentic or manipulative?"</p>

<h3>The Writing Section: Planning &amp; Execution</h3>

<h4>Step 7: Planning (5 min) — This Time Investment Pays Dividends</h4>
<p><strong>Do not skip planning.</strong> A rushed plan is faster than a rambling first draft you then have to cross out.</p>

<p><strong>Your plan should include:</strong></p>
<ol>
  <li><strong>Audience, purpose, form:</strong> Who am I writing for? What do I want to achieve? What shape does it take?</li>
  <li><strong>Register &amp; tone:</strong> Formal or informal? Confident or cautious?</li>
  <li><strong>Opening hook:</strong> How will I grab the reader's attention?</li>
  <li><strong>Main argument/points:</strong> 3–4 key points to develop.</li>
  <li><strong>Techniques to use:</strong> What rhetorical/structural techniques will I employ?</li>
  <li><strong>Closing strategy:</strong> How will I leave the reader?</li>
</ol>

<p><strong>Quick example plan for "Write a letter to your MP persuading them to fund youth mental health services":</strong></p>
<ul>
  <li><strong>Audience:</strong> Formal (MP) → respectful, evidence-based</li>
  <li><strong>Purpose:</strong> Persuade → emotional appeal + statistics + call to action</li>
  <li><strong>Form:</strong> Letter → formal conventions (salutation, closing)</li>
  <li><strong>Opening:</strong> "I am writing to urge you to…" (clear, direct)</li>
  <li><strong>Point 1:</strong> Scale of the problem (statistics)</li>
  <li><strong>Point 2:</strong> Human impact (anecdote)</li>
  <li><strong>Point 3:</strong> Investment = solution (logic + counter-argument)</li>
  <li><strong>Close:</strong> Call to action + appeal to values</li>
</ul>

<h4>Steps 8–10: Writing the Q6 (40–45 min)</h4>

<h5>Introduction (10 min, ~150–200 words)</h5>
<p><strong>Goals:</strong> Hook the reader. Establish audience/purpose/form. Preview your argument.</p>

<p><strong>Worked example (article on social media):</strong></p>
<p><em>"We check our phones 150 times a day. We compare ourselves to strangers' curated lives. We feel anxious when we miss a post. Social media has promised to connect us; instead, it has isolated us. It is time to acknowledge the truth: social media is damaging our mental health, and we must act."</em></p>

<p><strong>What's working:</strong> Opening statistic (hooks reader) → personal relevance → clear thesis (your argument) → imperative (call to action).</p>

<h5>Body Paragraphs (25 min, ~400–500 words total)</h5>
<p><strong>Goal:</strong> Develop 3–4 key points with evidence and explanation. Use persuasive techniques appropriately.</p>

<p><strong>Structure each paragraph:</strong></p>
<ol>
  <li>Topic sentence (your point)</li>
  <li>Evidence (statistic, expert quote, example)</li>
  <li>Explanation (why this matters)</li>
  <li>Persuasive technique (rhetorical question, vivid language, counter-argument)</li>
  <li>Link to your main argument</li>
</ol>

<p><strong>Worked example (body paragraph on social media):</strong></p>
<p><em>"Mental health professionals have documented a 40% rise in adolescent anxiety since 2010, directly correlating with increased social media use. A teenager today faces constant comparison: Are my photos good enough? Do I have enough likes? This is not a trivial concern — the psychological toll is real. Young people report feeling inadequate, isolated, and trapped by the need for validation. Yet social media platforms profit from this cycle. Is it not time to demand better?"</em></p>

<p><strong>Techniques used:</strong> Statistic (logos) → rhetorical questions (pathos) → vivid description (pathos) → counter-argument (ethos) → final rhetorical question (engagement).</p>

<h5>Conclusion (5 min, ~100–150 words)</h5>
<p><strong>Goal:</strong> Restate your thesis. Emphasise why your argument matters. End with a call to action or powerful thought.</p>

<p><strong>Worked example:</strong></p>
<p><em>"We cannot undo the past decade of social media damage. But we can choose a different future. Regulation, digital literacy education, and honest conversations about mental health are not luxuries — they are necessities. The choice is ours: accept a generation of anxious young people, or act decisively to reclaim their wellbeing."</em></p>

<h4>Step 11: Proofreading (10 min)</h4>
<p><strong>What to check (in order):</strong></p>

<ol>
  <li><strong>Spelling:</strong> Scan for your common errors. Run through a mental spell-check of difficult words.</li>
  <li><strong>Punctuation:</strong> Check sentences are complete. No comma splices. Apostrophes correct.</li>
  <li><strong>Tense:</strong> Have you maintained consistency? No sudden shift from past to present.</li>
  <li><strong>Clarity:</strong> Are sentences clear? Do pronouns have clear antecedents? Would a reader understand?</li>
  <li><strong>Coherence:</strong> Do paragraphs flow? Are there clear topic sentences? Does the argument build logically?</li>
</ol>

<p><strong>Do not rewrite large sections.</strong> Proofreading is for catching errors, not restructuring. If you have time left, reread one more time.</p>

<h3>The Complete Mock Walkthrough: A Case Study</h3>

<p><strong>Exam task:</strong> Read an extract from a Victorian newspaper article on factory conditions. Answer Q1–Q5. Write a letter to a factory owner persuading him to improve worker safety.</p>

<p><strong>The source text (adapted):</strong></p>
<blockquote><em>"We visited Thornton Mill yesterday and witnessed scenes that froze our blood. Children, no older than eight, stood thirteen hours a day at spinning frames, their fingers raw, their faces grey with exhaustion. The air was thick with cotton dust — workers coughed blood into their handkerchiefs. The owner, Mr. Thornton, sat in his office, warm and comfortable, counting his profits whilst his workers suffered. This is not industry; this is slavery. We demand reform. We demand justice."</em></blockquote>

<h4>Q1 Response (1 min):</h4>
<p><em>"cotton dust"</em> — directly shows the poor air quality.</p>

<h4>Q2 Response (2 min):</h4>
<ul>
  <li>Children as young as eight worked in the mill.</li>
  <li>Workers suffered serious physical health problems (coughing blood).</li>
</ul>

<h4>Q3 Response (8 min, analyzing language):</h4>
<p><em>"The writer uses emotive language such as 'froze our blood' and 'slavery' to create horror and moral outrage in the reader. These words are extreme — comparing factory conditions to slavery — which makes the reader feel shocked and demand change. Additionally, the writer uses a rhetorical question: 'This is not industry; this is slavery. We demand reform. We demand justice.' The repetition of 'We demand' creates a sense of collective outrage and calls the reader to action."</em></p>

<h4>Q4 Response (15 min, analyzing language &amp; structure):</h4>
<p><em>"The writer uses language and structure strategically to inflame the reader's sense of injustice. The opening phrase 'scenes that froze our blood' immediately creates horror and positions the reader as a witness to atrocity. The writer then shifts to vivid, brutal imagery: 'fingers raw', 'faces grey with exhaustion', 'coughed blood'. This accumulation of visual detail makes suffering undeniable. The structural choice to contrast the workers' suffering with the owner's comfort — 'warm and comfortable, counting his profits' — sharpens the moral outrage. Finally, the closing questions and imperatives ('This is not industry; this is slavery. We demand reform. We demand justice.') move from description to action. The short, staccato sentences accelerate the pace, building momentum towards the call for change. Collectively, these language and structural choices transform the reader from neutral observer to participant in the demand for justice."</em></p>

<h4>Q5 Response (15 min, evaluation):</h4>
<p><em>"To a very large extent, I agree that the writer is successful in persuading the reader that factory conditions are morally unacceptable. The writer's use of extreme comparative language — 'slavery' — is powerful. By equating industrial conditions with slavery, the writer frames the issue as a fundamental violation of human rights, not merely a workplace safety concern. Supporting evidence shows the writer's moral position: children as young as eight are working, and workers are suffering serious physical harm. However, I would argue that the writer's hyperbolic language — whilst emotionally effective — slightly undermines the logical credibility of the argument. A reader might think 'factories are not quite slavery, so perhaps the writer is exaggerating.' Nonetheless, the emotional impact is considerable. The writer's choice to open with personal witness ('We visited') and close with collective demands ('We demand') creates a powerful sense of moral urgency. Overall, the writer is highly persuasive because the evidence is real and the moral case is unassailable, even if the language is sometimes excessive."</em></p>

<h4>Q6 Letter Plan (5 min):</h4>
<ul>
  <li><strong>Audience:</strong> Mr. Thornton (formal, authority figure)</li>
  <li><strong>Purpose:</strong> Persuade him to improve safety</li>
  <li><strong>Form:</strong> Letter (formal conventions)</li>
  <li><strong>Opening:</strong> "I am writing to urge you to implement immediate safety reforms at Thornton Mill."</li>
  <li><strong>Point 1:</strong> Current conditions are unacceptable (evidence from visit)</li>
  <li><strong>Point 2:</strong> Reform benefits him (productivity, reputation)</li>
  <li><strong>Point 3:</strong> Moral imperative (you have a duty)</li>
  <li><strong>Close:</strong> "I trust you will do the right thing."</li>
</ul>

<h4>Q6 Letter Outline (40 min, full draft):</h4>
<p><em>[Full letter would be 300–350 words, structured as above, with appropriate formal conventions, persuasive techniques, and clear argumentation.]</em></p>

<h3>Exam Day: The Reality Check</h3>

<div class="examiner-tip"><strong>The Golden Rules of Exam Day</strong></div>

<ul>
  <li><strong>Arrive early.</strong> Use the extra time to calm yourself, read through the entire paper, and allocate your time.</li>
  <li><strong>Read the entire paper before starting.</strong> You might notice that Q5 is asking about the writer's purpose — this informs your Q4 answer.</li>
  <li><strong>Underline command words:</strong> "Analyse", "Evaluate", "To what extent", "Persuade". These tell you exactly what the examiner wants.</li>
  <li><strong>If you blank on Q4, move on to Q5.</strong> You can come back if time allows. Leaving a 15-mark question blank is worse than leaving a partial answer and securing marks on Q5.</li>
  <li><strong>If you run out of time on reading, write Q6 anyway.</strong> A complete 40-mark writing response is always worth more than perfect reading with no writing.</li>
  <li><strong>Use a pen.</strong> Do not use pencil for the main responses (though underlining in pencil is fine). Examiners need to see clear ink.</li>
  <li><strong>Number your answers clearly.</strong> Q1, Q2, Q3, etc. Examiners will not hunt for your responses.</li>
  <li><strong>Do not leave the exam early.</strong> Use every minute to proofread and refine.</li>
</ul>

<h3>Post-Exam Reflection: Learning from Practice</h3>

<p>After a mock exam, analyse what happened:</p>

<ul>
  <li><strong>Did you finish all sections?</strong> If not, why? Time management or difficulty?</li>
  <li><strong>Which questions did you find hardest?</strong> Spend extra practice time on these.</li>
  <li><strong>Did you follow the timing plan?</strong> If you overran, where? Make adjustments.</li>
  <li><strong>What errors did you make?</strong> Spelling? Tense consistency? Comma splices? Create a personal "common mistakes" list and check for these specifically when proofreading.</li>
  <li><strong>Did your writing feel rushed or polished?</strong> If rushed, you need more time; if polished, you could spend more time on reading.</li>
</ul>

<p>Each practice exam is a data point. Use it to refine your strategy.</p>`,
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
