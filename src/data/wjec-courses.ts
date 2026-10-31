// @ts-nocheck
import type { CourseData, CourseQuiz, CourseModule } from './courses'

// ═══════════════════════════════════════════════════════════════════════════════
// WJEC/Eduqas GCSE English Language - Component 1 Modules
// 20th Century Literature Reading and Creative Prose Writing
// ═══════════════════════════════════════════════════════════════════════════════
//
// CORRECTED 31 October 2026 against src/data/mark-scheme-guides/eduqas-lang-comp1.ts.
// The course keeps the 2014 sample paper's numbering (A1 to A5, B1; live papers
// number the questions 01 to 05 and 11), and the overview now says so. What was
// wrong: A1 was taught as five 1-mark questions of mixed types (multiple choice,
// true or false, sequencing, 2-mark inference parts); it is one question, list
// five things, one mark per point, inferences included. A3 was said to range
// over the whole extract; it covers a longer named section (A5 uses the whole
// passage). A4 was structure alone, with "discussing language in A4" taught as a
// mistake; it asks for language and structure together. Section B offered
// "narrative or descriptive" writing; the specification asks for a narrative or
// recount, and writing that only describes cannot reach the top of the range.
// The AO5 band ranges, a grade table, the word guidance (400-500 words; the paper
// suggests 450-600) and the planning time (5 minutes; the paper advises about 10)
// were also wrong.
// Second reading, same day: the Band 4 and 5 lines kept AQA's own level wording
// (now the guide's bands), the timing plan's 3-minute check contradicted Module
// 9's 5, and two quiz items (A4 as "specifically structure", "not using
// quotations" as a wrong answer to an A4 mistake) no longer fitted the course.

const comp1Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 - Component 1 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m1',
    title: 'Component 1 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>WJEC/Eduqas GCSE English Language - Component 1 (C700U10-1)</h2>

<p>Component 1 is titled <strong>20th Century Literature Reading and Creative Prose Writing</strong>. It is worth <strong>40% of the total GCSE</strong> and is examined in a <strong>1 hour 45 minute</strong> paper. The paper has two sections and is worth a total of <strong>80 marks</strong>.</p>

<div class="key-term"><strong>Key Term: 20th Century Literature</strong> - A fiction text written between 1900 and 1999. WJEC/Eduqas uses literary fiction extracts from this period, typically from novels or short stories by established authors. You will encounter one unseen prose extract in the exam.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A - Reading (40 marks):</strong> You are given one unseen 20th-century literary prose extract (approximately 60-100 lines) and answer a series of structured questions on it.</li>
  <li><strong>Section B - Creative Prose Writing (40 marks):</strong> One piece of creative prose writing from a choice of four titles: a story, or an account of an experience, real or imagined, of about 450 to 600 words.</li>
</ul>

<h3>Question-by-Question Breakdown</h3>
<p>This course uses the numbering of the 2014 sample paper, A1 to A5 and B1. Live papers number the same questions 01 to 05 and 11.</p>
<ol>
  <li><strong>A1 (5 marks)</strong> - List five things you learn about a person, place or topic from the opening lines the question names. One mark for each correct, separate point; things the lines suggest count as well as things they state.</li>
  <li><strong>A2 (5 marks)</strong> - What does the writer show you about a character or situation in the next few lines, and how does the language do it? You must select and comment on specific words and phrases.</li>
  <li><strong>A3 (10 marks)</strong> - How does the writer show a character's thoughts and feelings, or your impressions of a person, place or situation, in a longer section of the extract? Analyse language in more detail, using relevant quotations and exploring connotations and effects.</li>
  <li><strong>A4 (10 marks)</strong> - How does the writer create an effect, such as tension and drama, in a later section? Analyse language and structure together: the words, and the way the events are organised (openings, endings, focus shifts, pacing, and paragraph structure).</li>
  <li><strong>A5 (10 marks)</strong> - Evaluation. You are given a view, usually about a character or the story: how far do you agree? Use the final lines the question names and the passage as a whole, and explain how the writer created your thoughts and feelings.</li>
  <li><strong>B1 (40 marks)</strong> - Creative prose writing. Choose one of four titles and write a story, or an account of an experience, real or imagined. 24 marks for content and organisation (AO5), 16 marks for technical accuracy (AO6). A piece that only describes cannot reach the top of the mark range.</li>
</ol>

<h3>Assessment Objectives</h3>
<ul>
  <li><strong>AO1</strong> - Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.</li>
  <li><strong>AO2</strong> - Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support views.</li>
  <li><strong>AO4</strong> - Evaluate texts critically and support this with appropriate textual references.</li>
  <li><strong>AO5</strong> - Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.</li>
  <li><strong>AO6</strong> - Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC/Eduqas allocates the reading marks differently from AQA or Edexcel. A1, five quick points, is a warm-up. Spend the bulk of your reading time on A3, A4, and A5 (10 marks each). The paper itself advises about 10 minutes reading the extract and about 50 minutes answering, then about 10 minutes planning and about 35 minutes writing.</div>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0-10 min:</strong> Read the extract carefully twice, annotating key language and structural features.</li>
  <li><strong>10-15 min:</strong> Answer A1 (5 marks): list five things.</li>
  <li><strong>15-21 min:</strong> Answer A2 (5 marks): focused language comment.</li>
  <li><strong>21-34 min:</strong> Answer A3 (10 marks): detailed language analysis.</li>
  <li><strong>34-47 min:</strong> Answer A4 (10 marks): language and structure.</li>
  <li><strong>47-60 min:</strong> Answer A5 (10 marks): evaluation and critical response.</li>
  <li><strong>60-70 min:</strong> Plan your story (choose title, plan structure, decide on techniques).</li>
  <li><strong>70-100 min:</strong> Write your story (B1, 40 marks).</li>
  <li><strong>100-105 min:</strong> Proofread your writing for SPaG errors.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating A2 and A3 as identical questions. A2 asks you to comment on language in a short, specified section; A3 demands a more detailed and sustained analysis with multiple developed points. Students who write the same depth for both often run out of time or under-develop A3.</div>

<div class="key-term"><strong>Key Term: Subject Terminology</strong> - The technical vocabulary used to describe language and structural features: metaphor, simile, personification, sibilance, juxtaposition, enjambment, anaphora, and so on. WJEC examiners expect you to use these terms accurately and embed them within your analysis.</div>


<h3>Worked Example: Listing Five Things (A1)</h3>
<p><strong>Practice Passage:</strong></p>
<div class="text-extract">
The old house stood at the end of Maple Lane, its paint peeling, its shutters hanging askew. No one had lived there for seven years. The garden had returned to wildness - brambles and nettles overtaking what had once been rose beds. On a Tuesday in September, a moving van pulled into the drive. Within an hour, the silence that had held the house for seven years began to fracture.
</div>

<p><strong>A1 (5 marks):</strong> List five things you learn about the house in these lines.</p>
<p><strong>Model Answer:</strong></p>
<div class="model-answer">
1. It stands at the end of Maple Lane.
2. Its paint is peeling.
3. Its shutters hang askew.
4. No one has lived there for seven years.
5. Its garden has gone wild, with brambles and nettles where the rose beds were.
</div>
<p>Each point is short, separate and taken from the lines. "Its paint is peeling" and "its shutters hang askew" are two points, because they are two different details. A point the lines suggest would also count: "it has been neglected" is supported by the peeling paint and the wild garden.</p>

<h3>Retrieval Strategy: The Five-Step Process</h3>
<ol>
<li><strong>Read the question carefully.</strong> Underline the focus (what you are listing things about) and the lines you are given.</li>
<li><strong>Scan the named lines for relevant information.</strong> You don't need to reread the whole passage: use keywords to locate each detail.</li>
<li><strong>Pick out five separate points.</strong> Each must be a different detail about the focus; the same idea twice in different words earns one mark.</li>
<li><strong>Quote or paraphrase briefly.</strong> A short phrase is enough. Use quotation marks for exact phrases, and do not copy out whole sentences.</li>
<li><strong>Use inference where the lines support it.</strong> A point the lines suggest, such as a character's mood, earns its mark too.</li>
</ol>

<h3>What Counts as a Point (A1 on Component 1)</h3>
<p>A1 is one question: list five things you learn about a person, place or topic from the lines named. These all count:</p>
<p><strong>Explicit points:</strong> details the lines state outright, such as "It is autumn."</p>
<p><strong>Implicit points:</strong> what the lines suggest, as long as they support it, such as "She is nervous," from her trembling hands.</p>
<p><strong>Paraphrase or short quotation:</strong> both earn the mark, as long as the point is picked out rather than buried in a copied sentence.</p>

<h3>Common A1 Mistakes</h3>
<div class="common-mistake"><strong>Mistake 1: Over-thinking.</strong> A1 rewards points the lines support. Don't invent hidden meanings: if the text says it's autumn, the answer is autumn, not a metaphor for decline.</div>

<div class="common-mistake"><strong>Mistake 2: Too few points.</strong> Five marks need five separate points. Count them before you move on.</div>

<div class="common-mistake"><strong>Mistake 3: Inaccurate quotation.</strong> "The house is really old" - but the text says it's been empty for seven years, not that it's old. Don't misquote.</div>

<div class="common-mistake"><strong>Mistake 4: Confusing similar characters or locations.</strong> If the passage mentions two houses, be clear which one you're discussing.</div>

<h3>A1 Practice: List Five Things</h3>
<p><strong>Passage:</strong></p>
<div class="text-extract">
Emma had not returned to her hometown in twelve years. The station platform looked smaller than she remembered - the benches replaced, the old clock removed. As she stepped onto the platform, the autumn air carried the same mineral scent she had known as a child. Her mother stood at the barrier, older now, her hair completely grey. Emma walked towards her slowly, uncertain whether to run or take her time.
</div>

<p><strong>Question:</strong> List five things you learn about Emma's return from these lines.</p>

<p><strong>Model Answer:</strong></p>
<div class="model-answer">
1. She has not been back to her hometown for twelve years.
2. The benches on the station platform have been replaced.
3. The old clock has been removed.
4. Her mother is waiting at the barrier, her hair now completely grey.
5. Emma is unsure how to greet her: she walks slowly, "uncertain whether to run or take her time".
</div>
<p>Point 5 is an inference the lines support, so it earns its mark. "The platform looks smaller than she remembered" or "the autumn air smells the same" would also count.</p>

`,
    quiz: [
      {
        id: 'wjec-c1-m1-q1',
        question: 'How long do students have to complete WJEC/Eduqas Component 1?',
        options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '1 hour 55 minutes'],
        correct: 1,
        explanation:
          'Component 1 is 1 hour 45 minutes long, divided between Section A (Reading) and Section B (Creative Prose Writing), each worth 40 marks.',
      },
      {
        id: 'wjec-c1-m1-q2',
        question: 'What percentage of the total GCSE does Component 1 represent?',
        options: ['50%', '60%', '40%', '35%'],
        correct: 2,
        explanation:
          'Component 1 is worth 40% of the total GCSE. Component 2 accounts for the remaining 60%.',
      },
      {
        id: 'wjec-c1-m1-q3',
        question: 'How many marks is the creative prose writing task (B1) worth?',
        options: ['20 marks', '30 marks', '40 marks', '24 marks'],
        correct: 2,
        explanation:
          'B1 is worth 40 marks in total - 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy).',
      },
      {
        id: 'wjec-c1-m1-q4',
        question: 'Which reading question asks about structure as well as language?',
        options: ['A2', 'A3', 'A4', 'A5'],
        correct: 2,
        explanation:
          'A4 (10 marks) is the question that adds structure: it asks how the writer uses language and the organisation of events, including openings, endings, focus shifts, and pacing, to create an effect such as tension.',
      },
      {
        id: 'wjec-c1-m1-q5',
        question: 'What type of extract will you encounter in Section A?',
        options: [
          '19th-century non-fiction',
          '21st-century journalism',
          '20th-century literary prose fiction',
          'A Shakespeare extract',
        ],
        correct: 2,
        explanation:
          'Component 1 Section A uses an unseen 20th-century literary prose extract - a passage from a novel or short story written between 1900 and 1999.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 - Retrieval and Comprehension (A1)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m2',
    title: 'Retrieval and Comprehension Skills (A1)',
    duration: '40 min',
    content: `
<h2>A1 - Listing Five Things: Quick, Accurate, Confident</h2>

<p>Question A1 on WJEC/Eduqas Component 1 is <strong>one question worth 5 marks</strong>: you list five things you learn about a person, place or topic from the opening lines the question names. Live papers number it Question 01. It tests <strong>AO1</strong> - your ability to identify and interpret explicit and implicit information and ideas from the extract. There is one mark for each correct, separate point. Think of A1 as the gateway to the paper: these marks are straightforward to earn if you read carefully.</p>

<div class="key-term"><strong>Key Term: Retrieval</strong> - The process of locating specific information in the text. Retrieval questions do not require analysis or evaluation - they test whether you can find and select accurate information quickly.</div>

<h3>What A1 Asks</h3>
<p>The question names a focus and a set of lines, for example: <em>"Read lines 1-6. List five things you learn about the house in these lines."</em> A point earns its mark if it is:</p>
<ul>
  <li><strong>Relevant:</strong> it is about the focus the question names.</li>
  <li><strong>From the named lines:</strong> details from later in the extract do not count.</li>
  <li><strong>Separate:</strong> each point is a different detail; the same idea twice in different words earns one mark.</li>
  <li><strong>Stated or clearly suggested:</strong> things the lines suggest count as well as things they state, as long as the lines support them.</li>
</ul>

<h3>Practice Extract</h3>
<div class="text-extract">The house stood at the end of a lane overgrown with nettles and cow parsley. Its windows were dark, the curtains drawn even at midday. Marcus paused at the gate, listening. From inside came the muffled sound of a piano - something slow and melancholy, played with hesitant fingers. He noticed that the garden, which had once been his grandmother's pride, was tangled beyond recognition: roses strangled by bindweed, the bird bath toppled on its side. He pushed open the gate, which groaned on rusted hinges, and walked up the cracked path to the door.
<div class="source">From a 20th-century novel (adapted)</div></div>

<h3>Sample A1 Question and Answer</h3>
<p><em>"List five things you learn about the house and its garden in these lines."</em></p>
<ol>
  <li><strong>It stands at the end of a lane overgrown with nettles and cow parsley.</strong></li>
  <li><strong>Its curtains are drawn, even at midday.</strong></li>
  <li><strong>Someone inside is playing the piano, slowly and hesitantly.</strong></li>
  <li><strong>The garden, once Marcus's grandmother's pride, is tangled beyond recognition.</strong></li>
  <li><strong>The gate groans on rusted hinges.</strong></li>
</ol>
<p>Other correct points include the dark windows, the toppled bird bath and the cracked path. "The house has been neglected" would also count: the lines suggest it, through the tangled garden and the rusted hinges.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A1 directs you to a specific section of the extract (e.g. "lines 1-6"). Read that section carefully before answering. Do not waste time scanning the whole text when the question tells you exactly where to look. These five marks should take no more than five minutes.</div>

<h3>Strategies for Maximum Marks</h3>
<ul>
  <li><strong>Read the specified lines carefully.</strong> WJEC tells you which lines to focus on. Underline every detail about the focus.</li>
  <li><strong>Use the exact wording of the text</strong> where possible. Close paraphrase or direct quotation both earn marks.</li>
  <li><strong>Do not over-explain.</strong> A1 is not an analysis question. Five short, accurate points are all that is needed.</li>
  <li><strong>Pick out the point.</strong> A whole sentence copied out without picking out the point earns nothing, so write each point as a short phrase or sentence of its own.</li>
  <li><strong>Check your answer against the text.</strong> Re-read the lines to confirm each point is accurate and different from the others before moving on.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Students sometimes confuse inference with invention. For A1, a point should be directly stated or clearly suggested by the named lines. If you find yourself building a story the lines do not support, you are overthinking. Save deeper interpretation for A3 and A5.</div>

<h3>Implicit vs Explicit Information</h3>
<p>A1 accepts both kinds of point. For example:</p>
<ul>
  <li><strong>Explicit:</strong> "The house stood at the end of a lane" - directly stated.</li>
  <li><strong>Implicit:</strong> "The garden had not been tended for a long time" - inferred from "tangled beyond recognition" and "roses strangled by bindweed."</li>
</ul>
<p>An implicit point should still be straightforward: you should not need a lengthy explanation to justify it.</p>

<div class="key-term"><strong>Key Term: Explicit Information</strong> - Details that are directly and clearly stated in the text. The reader does not need to interpret or infer meaning - the facts are presented openly.</div>

<div class="key-term"><strong>Key Term: Implicit Information</strong> - Meaning that is suggested or hinted at rather than directly stated. The reader must combine textual clues with their own understanding to arrive at a conclusion.</div>

<h3>Extended Practice: List Five Things, with Annotated Student Responses</h3>

<h4>Practice Passage 1: "The Arrival"</h4>
<div class="text-extract">
Eleanor had not set foot in the village for thirty years. The station was unrecognizable - the old wooden waiting room had been demolished, replaced by a gleaming glass shelter. The tea rooms where she and her mother had waited for the evening train were gone, their space now occupied by a mobile phone shop. Yet as she walked out onto the high street, something familiar caught her: the smell of fresh bread from the bakery, unchanged, insistent. The corner where Mr. Patterson's ironmonger had stood is now an estate agent's office. She paused outside the window, studying photographs of properties for sale. One caught her eye - a Victorian terraced house with a blue door, its windows bright with curtains she recognized. It was her childhood home.
<div class="source">20th-century fiction (adapted)</div>
</div>

<h4>A1 Question (5 marks)</h4>
<p><em>"List five things you learn about the village in these lines."</em></p>

<h4>Examiner Commentary Box - Sample Student Response 1</h4>
<div style="border: 2px solid #e74c3c; padding: 15px; margin: 15px 0; background-color: #fadbd8;">
<strong>Weaker Response:</strong>
<blockquote>
1. The station has changed.<br>2. The station is different now.<br>3. There is a mobile phone shop.<br>4. Eleanor is sad because everything has changed.<br>5. Eleanor left because she felt trapped.
</blockquote>
<strong>Examiner Comment:</strong> Points 1 and 3 are correct. Point 2 repeats point 1 in different words, so it earns nothing extra. Points 4 and 5 are not supported by these lines: they never say she is sad, or why she left. <strong>Mark: 2/5</strong>
</div>

<h4>Examiner Commentary Box - Sample Student Response 2</h4>
<div style="border: 2px solid #27ae60; padding: 15px; margin: 15px 0; background-color: #d5f4e6;">
<strong>Strong Response:</strong>
<blockquote>
1. The old wooden waiting room at the station has been demolished.<br>2. It has been replaced by a gleaming glass shelter.<br>3. The tea rooms are now a mobile phone shop.<br>4. The bakery still smells of fresh bread, as it always did.<br>5. Mr Patterson's ironmonger's is now an estate agent's office.
</blockquote>
<strong>Examiner Comment:</strong> Five separate, accurate points, each about the village and each from the lines named. Short and precise: no point repeats another. <strong>Mark: 5/5</strong>
</div>

<h3>How A1 Is Marked</h3>
<p>One mark for each correct, separate point, up to five. A point earns its mark whether it is quoted or put in your own words, and whether the lines state it or clearly suggest it. Points from outside the named lines, repeated points and points the lines do not support earn nothing.</p>

<h3>Common A1 Mistakes and Corrections</h3>

<h4>Mistake 1: Over-Interpretation</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Poor Answer:</strong> Eleanor left because she felt trapped and wanted a career in the city. She had a difficult relationship with her parents.
<br><strong>Issue:</strong> The passage never states or suggests this. Over-interpretation invents details.
<br><strong>Better Answer:</strong> A point the lines support, such as: the tea rooms she remembers have gone.
<br><strong>WJEC Tip:</strong> A1 answers come from the text. If you're creating a backstory, stop and re-read.
</div>

<h4>Mistake 2: Repeated Points</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Poor Answer:</strong> The station has changed. The station is different now.
<br><strong>Issue:</strong> The same point twice earns one mark. Repeats cost you marks you could have had.
<br><strong>Better Answer:</strong> The wooden waiting room has been replaced by a glass shelter. The tea rooms are now a mobile phone shop.
<br><strong>WJEC Tip:</strong> Five marks need five different points. Count them before you move on.
</div>

<h4>Mistake 3: Vague Language</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Poor Answer:</strong> Something nice from one of the shops.
<br><strong>Issue:</strong> "Nice" is vague and doesn't show text understanding.
<br><strong>Better Answer:</strong> The smell of fresh bread from the bakery.
<br><strong>WJEC Tip:</strong> Precise language from the text shows careful reading.
</div>

<h4>Mistake 4: Inaccurate Quotation</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Poor Answer:</strong> "The waiting room was bright and shiny."
<br><strong>Issue:</strong> Actual text: "gleaming glass shelter"-misquoted.
<br><strong>Better Answer:</strong> "A gleaming glass shelter."
<br><strong>WJEC Tip:</strong> Quote exactly or paraphrase accurately. Never misquote.
</div>

<h3>Practice Passage 2: List Five Things, with Marking Guidance</h3>

<h4>Passage: "The Discovery"</h4>
<div class="text-extract">
The letter had arrived on a Tuesday, addressed in handwriting she had not seen in forty years. Sarah opened it with trembling fingers. Inside was a single photograph - a group of children standing outside a church, all smiling at the camera. She recognized herself immediately: the dark pigtails, the gap-toothed grin, the white cotton dress with the lace collar. But it was the boy in the back row, standing slightly apart from the others, who made her breath catch. He had his head tilted toward her, even in that long-ago moment. She turned the photograph over. On the back, in faded ink: "St. Cuthbert's Church Outing, July 1962. Don't forget."
<div class="source">Contemporary fiction</div>
</div>

<h4>A1 Question and Model Answer (5 marks)</h4>
<p><strong>Question:</strong> List five things you learn about the photograph in these lines.</p>
<div class="model-answer">
1. It shows a group of children standing outside a church.<br>
2. The children are all smiling at the camera.<br>
3. Sarah is in it, with dark pigtails and a gap-toothed grin.<br>
4. A boy in the back row stands slightly apart, his head tilted towards her.<br>
5. On the back, in faded ink, is written "St. Cuthbert's Church Outing, July 1962. Don't forget."
</div>
<p>Other correct points include her white cotton dress with the lace collar. A point the lines suggest also counts, such as "the boy may have cared about Sarah," from his tilted head, because the lines support it.</p>

<div class="examiner-tip"><strong>WJEC A1 Marking Rule:</strong> One mark for each correct, separate point, up to five. Close paraphrase or quotation both earn marks, and so does a point the lines clearly suggest.</div>

<h3>Step-by-Step A1 Technique Guide</h3>
<ol style="font-size: 1.05em; line-height: 1.8;">
<li><strong>Read the extract once carefully.</strong> Absorb content and context-do not annotate yet.</li>
<li><strong>Read the A1 question.</strong> Note the focus and the lines it names (e.g., "lines 1-6").</li>
<li><strong>Underline every detail about the focus</strong> in those lines.</li>
<li><strong>Write five points, one per line,</strong> each a different detail. Spend about one minute per mark.</li>
<li><strong>Use inference where the lines support it:</strong> a point the lines suggest earns a mark too.</li>
<li><strong>Check your points</strong> against the passage for accuracy and repetition.</li>
<li><strong>Move to A2.</strong> Spend no more than 5-6 minutes total on A1.</li>
</ol>

    `,
    quiz: [
      {
        id: 'wjec-c1-m2-q1',
        question: 'How many marks is the A1 retrieval section worth in total?',
        options: ['10 marks', '5 marks', '3 marks', '8 marks'],
        correct: 1,
        explanation:
          'A1 is one question worth 5 marks: list five things from the lines named, with one mark for each correct, separate point. It tests AO1, identifying explicit and implicit information.',
      },
      {
        id: 'wjec-c1-m2-q2',
        question: 'What is the most important strategy for answering A1 questions?',
        options: [
          'Analyse the language used by the writer',
          'Read the specified lines carefully and find information directly from the text',
          'Write at length to show your understanding',
          'Compare the extract with other texts you have read',
        ],
        correct: 1,
        explanation:
          'A1 tests retrieval. The best strategy is to read the specified lines, locate the information, and answer briefly and accurately.',
      },
      {
        id: 'wjec-c1-m2-q3',
        question: 'Which Assessment Objective does A1 primarily test?',
        options: ['AO2', 'AO4', 'AO1', 'AO5'],
        correct: 2,
        explanation:
          'A1 tests AO1 - the ability to identify and interpret explicit and implicit information and ideas.',
      },
      {
        id: 'wjec-c1-m2-q4',
        question: 'What is the difference between explicit and implicit information?',
        options: [
          'Explicit is in the first paragraph; implicit is later in the text',
          'Explicit is directly stated; implicit is suggested and requires inference',
          'There is no difference - they mean the same thing',
          'Explicit requires analysis; implicit requires retrieval',
        ],
        correct: 1,
        explanation:
          'Explicit information is directly stated in the text. Implicit information is suggested or hinted at - the reader must infer meaning from the clues provided.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 - Language Analysis: Inference and Impressions (A2 & A3)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m3',
    title: 'Language Analysis: Inference and Impressions (A2 & A3)',
    duration: '55 min',
    content: `
<h2>A2 and A3 - Analysing Language Choices in 20th-Century Fiction</h2>

<p>Questions A2 (5 marks) and A3 (10 marks) both test <strong>AO2</strong> - your ability to explain, comment on and analyse how writers use language to achieve effects and influence readers. However, they differ in depth and scope. A2 asks for focused comment on the next few lines; A3 demands sustained, detailed analysis of a longer section, with multiple developed points.</p>

<div class="key-term"><strong>Key Term: Connotation</strong> - The associations, feelings, or ideas that a word evokes beyond its literal dictionary meaning. For example, "crept" literally means "moved slowly," but it connotes secrecy, stealth, and unease. Exploring connotation is essential for top-band responses.</div>

<h3>A2 - Focused Language Comment (5 marks)</h3>

<p>A typical A2 question reads: <em>"Read lines 8-14. What do these lines show you about how the woman is feeling?"</em> You are directed to a few lines and asked to explain what the writer shows you about a character or situation, and how the language does it. At 5 marks, you need <strong>three or four clear impressions</strong>, each backed by a short quotation and a comment on what the words suggest.</p>

<h3>Practice Extract</h3>
<div class="text-extract">The corridor stretched ahead of her, impossibly long, the ceiling lights buzzing and flickering like trapped insects. Each footstep echoed, doubling itself against the tiled walls. She could smell disinfectant - sharp, chemical, coating the back of her throat. Somewhere a door slammed, and the sound ricocheted through the empty building. She quickened her pace, her breath shortening, her fingers trailing the wall for reassurance that the world was still solid.
<div class="source">From a 20th-century short story (adapted)</div></div>

<h3>Model A2 Response</h3>
<div class="model-answer"><strong>Model Answer (Grade 7-9):</strong> The writer shows how tense and threatened she feels through the simile "buzzing and flickering like trapped insects," which transforms the mundane ceiling lights into something agitated and unpredictable, as though the place itself shares her distress. The verb "ricocheted" to describe the slamming door implies violence and unpredictability - the sound becomes a projectile, reinforcing the sense that the space is hostile. Finally, the detail of "her fingers trailing the wall for reassurance that the world was still solid" reveals the character's psychological state: she is so unsettled that she needs physical confirmation of reality, implying the tension has become almost hallucinatory.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For A2, use a simple framework: <strong>Quotation → Technique → Effect on Reader</strong>. Name the technique (simile, verb choice, sensory detail) and then explain what it makes the reader feel or understand. Three or four focused points are better than six underdeveloped ones.</div>

<h3>A3 - Detailed Language Analysis (10 marks)</h3>

<p>A typical A3 question reads: <em>"Read lines 15-30. How does the writer show Marcus's thoughts and feelings in these lines?"</em> This question points you to a longer section of the extract and asks you to work through all of it, from its first line to its last, selecting multiple quotations and analysing their language in detail. At 10 marks, you need <strong>four to five well-developed analytical points</strong>. (It is A5 that asks about the passage as a whole.)</p>

<h3>The WJEC Analysis Framework</h3>
<p>Use this structure for each analytical point:</p>
<ol>
  <li><strong>Point:</strong> State what impression the writer creates.</li>
  <li><strong>Evidence:</strong> Embed a short, precise quotation.</li>
  <li><strong>Technique:</strong> Identify the language method used (e.g. metaphor, verb choice, sensory imagery).</li>
  <li><strong>Effect:</strong> Explain what this suggests to the reader - explore connotations, feelings, and deeper implications.</li>
  <li><strong>Develop:</strong> Push your analysis further - consider alternative interpretations, link to wider impressions, or explore how the reader's response changes.</li>
</ol>

<div class="key-term"><strong>Key Term: Sensory Imagery</strong> - Language that appeals to the five senses: sight (visual), sound (auditory), touch (tactile), smell (olfactory), and taste (gustatory). Writers use sensory imagery to immerse the reader in a scene and create vivid impressions.</div>

<h3>Techniques to Look For</h3>
<ul>
  <li><strong>Metaphor and simile</strong> - comparisons that reveal hidden qualities or feelings.</li>
  <li><strong>Personification</strong> - giving human qualities to non-human things, often to create mood or atmosphere.</li>
  <li><strong>Verb choices</strong> - dynamic, forceful, or gentle verbs that shape the reader's impression of action or character.</li>
  <li><strong>Adjectives and adverbs</strong> - descriptive words that colour the reader's understanding.</li>
  <li><strong>Sensory detail</strong> - sight, sound, smell, taste, touch - that creates vivid, immersive writing.</li>
  <li><strong>Repetition and listing</strong> - patterns that build emphasis, urgency, or cumulative effect.</li>
  <li><strong>Contrast and juxtaposition</strong> - placing opposing ideas side by side for emphasis or irony.</li>
  <li><strong>Tone and register</strong> - formal, informal, ironic, melancholic, aggressive, etc.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> "Feature spotting" - naming a technique but failing to explain its effect. Writing "The writer uses a metaphor" earns no marks on its own. You must explain <em>what</em> the metaphor suggests and <em>how</em> it shapes the reader's impression. Always ask yourself: "So what? What does this make the reader think or feel?"</div>

<h3>Grade Boundaries: What Separates Good from Excellent</h3>
<ul>
  <li><strong>Grade 4-5:</strong> Identifies relevant quotations and makes simple comments on effect. May name techniques but analysis is surface-level.</li>
  <li><strong>Grade 6-7:</strong> Selects well-chosen quotations and analyses effects clearly. Explores connotations and uses subject terminology accurately.</li>
  <li><strong>Grade 8-9:</strong> Provides perceptive, detailed analysis. Explores layers of meaning, considers alternative interpretations, and demonstrates a sophisticated understanding of how language shapes the reader's response.</li>
</ul>

<div class="model-answer"><strong>Model Answer (Grade 8-9 - A3 excerpt):</strong> The narrator's description of the garden as "tangled beyond recognition" creates an impression of total neglect and decay. The word "tangled" connotes disorder and entrapment, while "beyond recognition" suggests a transformation so complete that the familiar has become alien - the garden has lost its identity. This is reinforced by the violent image of "roses strangled by bindweed," where the personification of the bindweed as a strangler transforms a garden scene into something sinister and threatening. The verb "strangled" carries connotations of murder and suffocation, implying that beauty and care have been violently destroyed by neglect. For the reader, the garden becomes a metaphor for the broader decay of family connections and memory.</div>
`,
    quiz: [
      {
        id: 'wjec-c1-m3-q1',
        question: 'How many marks is A3 (language analysis) worth?',
        options: ['5 marks', '15 marks', '10 marks', '8 marks'],
        correct: 2,
        explanation:
          'A3 is worth 10 marks and tests AO2 - the ability to analyse how writers use language to achieve effects.',
      },
      {
        id: 'wjec-c1-m3-q2',
        question: 'What is the key difference between A2 and A3?',
        options: [
          'A2 tests language and A3 tests structure',
          'A2 focuses on the next few lines; A3 requires sustained analysis of a longer section',
          'A2 is about the writer and A3 is about the reader',
          'There is no difference - they test the same skill',
        ],
        correct: 1,
        explanation:
          'A2 directs you to a few lines for focused comment (5 marks). A3 asks for more sustained, detailed analysis of a longer section of the extract (10 marks). It is A5 that uses the passage as a whole.',
      },
      {
        id: 'wjec-c1-m3-q3',
        question: 'What does "connotation" mean?',
        options: [
          'The dictionary definition of a word',
          'A word that sounds like what it describes',
          'The associations and feelings a word evokes beyond its literal meaning',
          'A direct comparison using "like" or "as"',
        ],
        correct: 2,
        explanation:
          'Connotation refers to the associations, feelings, or ideas a word evokes beyond its literal dictionary definition. Exploring connotation is essential for high-level language analysis.',
      },
      {
        id: 'wjec-c1-m3-q4',
        question: 'What is "feature spotting" and why should you avoid it?',
        options: [
          'Identifying every technique in the text - you should do this',
          'Naming a technique without explaining its effect - it earns no marks',
          'Spotting structural features - this only applies to A4',
          'Finding quotations quickly - this is a useful skill',
        ],
        correct: 1,
        explanation:
          'Feature spotting means naming a technique (e.g. "the writer uses a metaphor") without explaining what it suggests or how it affects the reader. It earns very few marks because the examiner wants analysis, not identification.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 - Language and Structure (A4)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m4',
    title: 'Language and Structure: Organisation and Effect (A4)',
    duration: '50 min',
    content: `
<h2>A4 - How Does the Writer Use Language and Structure to Create Effects?</h2>

<p>Question A4 is worth <strong>10 marks</strong> and tests <strong>AO2</strong>: how the writer creates an effect, such as tension and drama or an impression of a character, in a later section of the extract, through both the language and the way the events are organised. It is the one reading question on Component 1 that adds <strong>structure and organisation</strong>: while A2 and A3 focus on individual words and phrases, A4 also asks you to consider the <em>shape</em> of the text - how it is organised, how focus shifts, and how the writer controls the reader's experience across the section. This module concentrates on structure, the new half; your A4 answer needs close comment on the words as well.</p>

<div class="key-term"><strong>Key Term: Structure</strong> - The way a text is organised and arranged. This includes the order of events, paragraph structure, sentence length and variety, narrative perspective, focus shifts, the use of openings and endings, and techniques like flashback, foreshadowing, and cyclical structure.</div>

<h3>What Examiners Are Looking For</h3>
<p>WJEC examiners want to see that you understand how the arrangement of a text shapes meaning. You should consider:</p>
<ul>
  <li><strong>Opening:</strong> How does the extract begin? Does it plunge in medias res (in the middle of action)? Does it establish setting first? Does it withhold information to create intrigue?</li>
  <li><strong>Focus shifts:</strong> How does the writer move between different subjects, characters, settings, or time periods? What effect do these shifts create?</li>
  <li><strong>Narrative perspective:</strong> Whose viewpoint are we following? Does the perspective shift? How does this control what the reader knows?</li>
  <li><strong>Pacing:</strong> Where does the text speed up or slow down? Short sentences and paragraphs often quicken pace; long, descriptive passages slow it.</li>
  <li><strong>Ending/climax:</strong> How does the extract conclude? Is there resolution, ambiguity, a cliffhanger, or a twist?</li>
  <li><strong>Paragraph and sentence structure:</strong> Short paragraphs for emphasis, single-sentence paragraphs for drama, long complex sentences for flowing description.</li>
</ul>

<div class="key-term"><strong>Key Term: In Medias Res</strong> - A Latin term meaning "in the middle of things." A narrative that begins in medias res drops the reader into the action without preamble, creating immediate engagement and tension. The backstory is revealed later.</div>

<h3>Practice Extract</h3>
<div class="text-extract">It was raining the day Eleanor returned.

She had not been back in seventeen years. The village looked smaller than she remembered - the post office, the church, the single pub on the corner - as though someone had taken the place she knew and shrunk it to a model. She walked slowly, her suitcase bumping over the cobblestones.

At first, nobody recognised her. She passed Mrs Adler's house, where the cat still sat in the window - or perhaps it was a different cat now. She passed the school, its playground silent and empty in the rain. She passed the war memorial, which had acquired a new plaque since she had been away.

Then she turned the corner and saw the house.

It was exactly the same. Every tile, every crack in the render, every twist of the ivy over the porch. And standing in the doorway, as though she had never left, was her mother.
<div class="source">From a 20th-century novel (adapted)</div></div>

<h3>Model A4 Response</h3>
<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The writer opens with a short, declarative sentence - "It was raining the day Eleanor returned" - which functions as both scene-setting and foreshadowing, the rain creating a pathetic fallacy that hints at emotional complexity beneath the surface. The structure then shifts to a reflective mode as Eleanor surveys the village, and the writer uses a list - "the post office, the church, the single pub on the corner" - to suggest the smallness and ordinariness of the place, building a contrast with the significance of the return. The anaphoric repetition of "She passed" across three consecutive paragraphs creates a rhythmic, almost processional quality, as though Eleanor is performing a ritual of re-acquaintance. This pacing slows the narrative deliberately, delaying the moment of arrival and building anticipation for the reader. The single-sentence paragraph "Then she turned the corner and saw the house" marks a dramatic structural pivot - the brevity after the longer descriptive paragraphs creates emphasis through contrast, signalling that this is the moment of significance. The final paragraph's revelation - "standing in the doorway, as though she had never left, was her mother" - withholds the key information until the very end, using structural delay to create a climactic emotional impact.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always link structural choices to the reader's experience. Do not just describe what happens ("the writer moves from the village to the house"). Explain <em>why</em> this shift matters - what effect does it have on the reader? Does it build tension, create surprise, shift mood, or control the release of information?</div>

<h3>Structural Techniques Reference</h3>
<ul>
  <li><strong>Cyclical structure:</strong> The ending mirrors or echoes the opening, creating a sense of completeness or entrapment.</li>
  <li><strong>Flashback/analepsis:</strong> The narrative moves to an earlier time period, providing backstory or context.</li>
  <li><strong>Foreshadowing:</strong> Hints or clues early in the text suggest events that will happen later.</li>
  <li><strong>Juxtaposition:</strong> Placing contrasting ideas, images, or scenes side by side for emphasis.</li>
  <li><strong>Withholding information:</strong> The writer deliberately delays revealing key information to create suspense.</li>
  <li><strong>Shift in focus:</strong> Moving from wide to narrow (or vice versa), from setting to character, from external to internal.</li>
  <li><strong>Single-sentence paragraphs:</strong> Used for dramatic emphasis, slowing the reader and drawing attention to a key moment.</li>
  <li><strong>Listing/tricolon:</strong> Groups of three or lists that build momentum or create a cumulative effect.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing only about words and ignoring how the events are put together. If your A4 answer is all metaphors, similes, and word connotations, you have answered half the question. A4 rewards close comment on language choices and on the <em>arrangement</em> and <em>organisation</em> of the text. For each part of the section, ask two things: why the writer tells us this here, and which words make it work.</div>
`,
    quiz: [
      {
        id: 'wjec-c1-m4-q1',
        question: 'What does A4 primarily ask you to analyse?',
        options: [
          'Language choices on their own',
          'Language and structure together: the words and how the events are organised',
          "The writer's viewpoint and attitude",
          'Technical accuracy of the writing',
        ],
        correct: 1,
        explanation:
          'A4 tests how the writer uses language and the organisation of events (openings, endings, focus shifts, pacing, and paragraph structure) to create an effect such as tension. It is the reading question on Component 1 that adds structure.',
      },
      {
        id: 'wjec-c1-m4-q2',
        question: 'What does "in medias res" mean?',
        options: [
          'At the end of the story',
          'In the middle of things - starting in the middle of the action',
          'In a reflective mood',
          'With a flashback to the past',
        ],
        correct: 1,
        explanation:
          'In medias res is Latin for "in the middle of things." It describes a narrative that begins in the middle of the action, creating immediate engagement.',
      },
      {
        id: 'wjec-c1-m4-q3',
        question: 'Why is a single-sentence paragraph structurally significant?',
        options: [
          'It shows the writer has run out of ideas',
          'It creates emphasis through contrast with surrounding longer paragraphs',
          'It is always used for dialogue',
          'It indicates a change in narrator',
        ],
        correct: 1,
        explanation:
          "A single-sentence paragraph stands out against longer surrounding paragraphs, creating dramatic emphasis and drawing the reader's attention to a key moment.",
      },
      {
        id: 'wjec-c1-m4-q4',
        question: 'What is a common mistake students make in A4 responses?',
        options: [
          'Explaining how the order of events affects the reader',
          'Commenting on how the section opens and ends',
          'Writing only about word choices and ignoring how the events are put together',
          'Using too much subject terminology',
        ],
        correct: 2,
        explanation:
          'A4 asks for language and structure. An answer that discusses only individual word choices and metaphors misses how the writer arranges events, pacing and focus, so it cannot reach the higher bands.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 - Evaluation and Critical Response (A5)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m5',
    title: 'Evaluation and Critical Response (A5)',
    duration: '50 min',
    content: `
<h2>A5 - Critical Evaluation: "To What Extent Do You Agree?"</h2>

<p>Question A5 is worth <strong>10 marks</strong> and tests <strong>AO4</strong> - your ability to evaluate texts critically and support your evaluation with appropriate textual references. This question gives you a view, usually about a character or the story, and asks how far you agree. You answer from the final lines the question names and from the passage as a whole, respond personally and critically, and explain how the writer created your thoughts and feelings. It is the most demanding reading question because it requires you to combine analysis with personal judgement.</p>

<div class="key-term"><strong>Key Term: Evaluation</strong> - Making a judgement about the effectiveness or quality of a text, supported by evidence. Evaluation goes beyond analysis: while analysis explains <em>how</em> a technique works, evaluation judges <em>how well</em> it works and whether it succeeds in its purpose.</div>

<h3>How A5 Questions Are Worded</h3>
<p>A5 gives you a view and points you to the final lines. It may read like this:</p>
<ul>
  <li><em>"'In the final lines, the writer makes the reader feel sorry for Marcus.' How far do you agree with this view? Use these lines and the passage as a whole, and explain how the writer creates your thoughts and feelings."</em></li>
  <li><em>"'By the end of the extract, Eleanor has become a stranger in her own village.' To what extent do you agree with this view?"</em></li>
</ul>
<p>The key phrase is <strong>"to what extent"</strong> or <strong>"how far."</strong> This demands a nuanced response - not a simple yes or no, but a considered argument that weighs evidence from the text.</p>

<h3>The Evaluation Framework</h3>
<p>Use this four-part structure for each evaluative point:</p>
<ol>
  <li><strong>Judgement:</strong> State your view on the statement. Do you agree? To what extent?</li>
  <li><strong>Evidence:</strong> Select a relevant quotation that supports your judgement.</li>
  <li><strong>Analysis:</strong> Explain how the language or structure in the quotation creates the effect described in the statement.</li>
  <li><strong>Evaluation:</strong> Comment on how effective this is - does it convince you? Does it work well? Could it be interpreted differently?</li>
</ol>

<h3>Practice: Responding to a Statement</h3>
<p>Statement: <em>"The writer creates a powerful sense of isolation in this extract."</em></p>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The writer creates a compelling sense of isolation, most powerfully through the structural choice to present the character entirely alone throughout the extract. The corridor is described as "impossibly long," and the hyperbole of "impossibly" suggests a space that exceeds normal experience - it becomes almost surreal in its emptiness, as though the character has stepped outside the ordinary world. This is reinforced by the detail that "each footstep echoed, doubling itself against the tiled walls," where the personification of the echo - the footstep "doubling itself" - creates an eerie sense that the character's own presence is being reflected back at her, as though she is her only companion. However, I would argue that the isolation is not merely physical but psychological: the phrase "her fingers trailing the wall for reassurance that the world was still solid" reveals a character who is losing confidence in the reality of her surroundings. This is a deeply unsettling form of isolation - not just being alone in a space, but being estranged from the physical world itself. The writer is particularly effective in making the reader share this disorientation, as the sensory details (buzzing lights, echoing footsteps, sharp disinfectant) create an immersive experience that mimics the character's heightened, anxious awareness.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Use evaluative language throughout your response: "effectively conveys," "powerfully suggests," "the writer is particularly successful in," "convincingly creates," "this is compelling because." These phrases signal to the examiner that you are evaluating, not merely analysing. Aim for at least three developed evaluative points in your response.</div>

<h3>Agreeing, Disagreeing, and Nuancing</h3>
<p>You can respond to the A5 statement in several ways:</p>
<ul>
  <li><strong>Broadly agree:</strong> "The writer does create a powerful sense of isolation, and this is achieved through..." - then provide evidence and evaluation.</li>
  <li><strong>Agree with nuance:</strong> "While the writer certainly creates isolation, I would argue it is more psychological than physical..." - this shows sophisticated thinking.</li>
  <li><strong>Partially agree:</strong> "The sense of isolation is effective in the first half of the extract, but I feel the mood shifts to one of determination in the second half..." - this demonstrates the ability to track changing effects.</li>
</ul>
<p>Top-band responses typically agree with the statement but <strong>extend, refine, or nuance</strong> it, showing that the text is more complex than a single statement can capture.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply retelling what happens in the text without evaluating it. Narrative summary ("First the character walks down the corridor, then she hears a door slam...") earns no AO4 marks. Every point must include a judgement about how effectively the writer achieves the effect described in the statement. Use the passage as a whole as well as the final lines: an answer on the final lines alone misses part of the task.</div>

<div class="key-term"><strong>Key Term: Critical Response</strong> - A response that engages personally and thoughtfully with the text, offering a considered judgement rather than a surface-level reaction. A critical response weighs evidence, considers alternatives, and shows awareness of how the writer shapes the reader's experience.</div>

<h3>What Separates Grade 5 from Grade 9</h3>
<ul>
  <li><strong>Grade 4-5:</strong> Simple evaluation with some relevant references. Comments may be descriptive rather than evaluative. "I agree because the corridor sounds scary."</li>
  <li><strong>Grade 6-7:</strong> Clear evaluation with well-chosen references and some analysis. "The writer effectively creates isolation through the echoing footsteps, which suggest emptiness and amplify the character's solitude."</li>
  <li><strong>Grade 8-9:</strong> Perceptive, detailed evaluation that explores layers of meaning. Considers how effects change across the text, offers alternative readings, and uses precise subject terminology. The response reads as a genuine critical engagement with the text.</li>
</ul>
`,
    quiz: [
      {
        id: 'wjec-c1-m5-q1',
        question: 'Which Assessment Objective does A5 test?',
        options: ['AO1', 'AO2', 'AO4', 'AO5'],
        correct: 2,
        explanation:
          'A5 tests AO4 - the ability to evaluate texts critically and support the evaluation with appropriate textual references.',
      },
      {
        id: 'wjec-c1-m5-q2',
        question: 'What does "to what extent do you agree" require?',
        options: [
          'A simple yes or no answer',
          'A nuanced response that weighs evidence and offers a considered judgement',
          'A summary of the text',
          'A comparison with another text',
        ],
        correct: 1,
        explanation:
          '"To what extent" demands a nuanced response - not just agreement or disagreement, but a considered argument that weighs textual evidence and shows critical thinking.',
      },
      {
        id: 'wjec-c1-m5-q3',
        question: 'What distinguishes evaluation from analysis?',
        options: [
          'Evaluation uses quotations; analysis does not',
          'Analysis explains how a technique works; evaluation judges how well it works',
          'They are the same thing',
          'Evaluation is about structure; analysis is about language',
        ],
        correct: 1,
        explanation:
          'Analysis explains how a technique works and what effect it creates. Evaluation goes further by judging how effective or successful the technique is - it requires personal critical judgement.',
      },
      {
        id: 'wjec-c1-m5-q4',
        question: 'Which approach typically achieves the highest marks in A5?',
        options: [
          'Strongly disagreeing with the statement',
          'Agreeing with the statement and extending, refining, or nuancing it',
          'Retelling what happens in the text',
          'Listing as many techniques as possible',
        ],
        correct: 1,
        explanation:
          'Top-band responses typically agree with the statement but extend or nuance it, showing that the text is more complex than a single statement can capture. This demonstrates sophisticated critical thinking.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 - Creative Prose Writing: Narrative (B1)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m6',
    title: 'Creative Prose Writing: Narrative Techniques',
    duration: '55 min',
    content: `
<h2>B1 - Creative Prose Writing: Crafting Narrative</h2>

<p>Section B of Component 1 asks you to produce one piece of <strong>creative prose writing</strong>, worth <strong>40 marks</strong> (24 for content and organisation under AO5, 16 for technical accuracy under AO6). You choose one of four titles and write a <strong>narrative</strong> (a story), or an account of an experience, real or imagined: the specification asks for a narrative or recount, and writing that only describes cannot reach the top of the mark range. This module focuses on narrative writing techniques.</p>

<div class="key-term"><strong>Key Term: Narrative Writing</strong> - Writing that tells a story. It typically includes characters, setting, plot, conflict, and resolution. Effective narrative writing uses techniques such as varied sentence structure, dialogue, descriptive detail, and control of pace and tension.</div>

<h3>What WJEC Examiners Want</h3>
<p>The mark scheme for B1 rewards:</p>
<ul>
  <li><strong>Band 5 (20-24 marks for AO5):</strong> An original story that holds the reader from start to end, with detailed characters and a carefully built structure.</li>
  <li><strong>Band 4 (15-19 marks for AO5):</strong> A story in firm control, shaped with a clear purpose, with believable detail and some original ideas.</li>
</ul>

<h3>Planning Your Narrative (about 10 minutes, as the paper advises)</h3>
<p>A well-planned narrative is essential. Before writing, consider:</p>
<ol>
  <li><strong>Focus:</strong> Keep it tight. A single event, a short time span, or a pivotal moment works better than an epic saga. You have about 35 minutes to write, so a contained story is more effective.</li>
  <li><strong>Character:</strong> Limit yourself to one or two characters. Give them a clear desire, obstacle, or emotion to drive the narrative.</li>
  <li><strong>Structure:</strong> Plan a beginning, development, climax, and ending. Consider opening in medias res or using a cyclical structure.</li>
  <li><strong>Atmosphere:</strong> Decide on a dominant mood (tension, nostalgia, joy, unease) and sustain it through your language choices.</li>
  <li><strong>Ending:</strong> Plan your ending before you start writing. The best narratives have a purposeful, resonant conclusion - not a rushed or predictable one.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best creative writing responses are <strong>controlled and crafted</strong>, not long and rambling. The paper suggests about 450 to 600 words: a tightly focused piece of that length that demonstrates deliberate technique will outscore a much longer piece that loses direction, while writing far less than the guidance holds a piece's own marks down. Quality over quantity, always.</div>

<h3>Narrative Techniques for Top Bands</h3>
<ul>
  <li><strong>Show, don't tell:</strong> Instead of "She was nervous," write "Her hands trembled as she gripped the edge of the table, her knuckles whitening."</li>
  <li><strong>Varied sentence structure:</strong> Alternate between long, flowing sentences and short, punchy ones. Use fragments for emphasis: "Silence. Then the crack of breaking glass."</li>
  <li><strong>Sensory detail:</strong> Engage multiple senses to immerse the reader. Include sound, smell, and texture alongside visual description.</li>
  <li><strong>Dialogue:</strong> Use sparingly and purposefully. Good dialogue reveals character or advances the plot - it should never be filler.</li>
  <li><strong>Figurative language:</strong> Metaphors, similes, and personification should feel natural, not forced. One well-placed metaphor is better than five clichéd similes.</li>
  <li><strong>Pathetic fallacy:</strong> Use weather and environment to mirror or contrast with a character's emotions.</li>
  <li><strong>Withholding and revealing:</strong> Control what the reader knows. Create intrigue by delaying key information.</li>
</ul>

<h3>Model Narrative Opening</h3>
<div class="model-answer"><strong>Model Answer (Grade 8-9 - Opening):</strong> The letter had been sitting on the kitchen table for three days. Each morning, Maya walked past it, registering the handwriting - her father's, unmistakably, those sharp downward strokes that she used to trace with her finger as a child - and each morning she found a reason not to open it. The kettle needed filling. The cat needed feeding. The world outside the kitchen window needed watching: the slow procession of clouds, the neighbour's washing billowing like surrender flags on the line. But the letter waited. It waited with the patience of something that already knows it has won.</div>

<p>Notice how this opening establishes character (Maya, her avoidance), introduces conflict (the unopened letter from her estranged father), creates atmosphere (domestic routine masking emotional turmoil), and uses figurative language naturally ("surrender flags" - implying Maya's inevitable capitulation). The short final sentences create a sense of inevitability.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Starting with an alarm clock going off, a character waking up, or "It was a normal day until..." These are clichéd openings that signal to the examiner a lack of originality. Begin in the middle of an interesting moment, with a striking image, or with an unusual perspective.</div>

<h3>Structural Patterns for Narrative</h3>
<ul>
  <li><strong>Linear:</strong> Events unfold chronologically. Simple but effective if the pacing is well-controlled.</li>
  <li><strong>Cyclical:</strong> The ending returns to the beginning, creating a sense of completeness or entrapment.</li>
  <li><strong>In medias res:</strong> Start in the middle of the action, then fill in context as the narrative progresses.</li>
  <li><strong>Flashback:</strong> Interrupt the present narrative with a memory or past event that provides context or contrast.</li>
  <li><strong>Dual timeline:</strong> Alternate between two time periods to create parallels, contrasts, or build towards a revelation.</li>
</ul>

<div class="key-term"><strong>Key Term: Pathetic Fallacy</strong> - A literary device in which the weather or environment mirrors or reflects a character's emotions. For example, rain during a funeral, or bright sunshine accompanying a moment of joy. Used well, it deepens atmosphere without stating emotions directly.</div>

<h3>Worked Example: Full Narrative with Annotated Analysis</h3>

<h4>Sample Student Narrative (Grade 8)</h4>
<div style="border: 2px solid #3498db; padding: 15px; margin: 20px 0; background-color: #eaf2f8;">
<strong>Title: "The Return"</strong>

The letter arrived on a Tuesday, unsealed and urgent. James's hands shook as he read his mother's words: <em>Come home. Your father is asking for you.</em> He hadn't seen home in five years-hadn't intended to ever return.

The train platform was crowded, commuters jostling with their suitcases. James stood motionless, watching the countryside dissolve behind the train windows. With each passing minute, his chest tightened. Outside, the landscape shifted from urban sprawl to farmland, from the present he'd built to the past he'd buried.

The station was smaller than he remembered. The old ticket office had been renovated, its character stripped away. But the platform itself remained unchanged-the same cracked tiling, the same bench where he'd sat waiting for the London train five years ago, desperate to escape.

His mother was waiting outside the station, her hair greyer than he'd anticipated. She embraced him without speaking, and in that silence, James felt years of distance collapse into a single breath. Nothing had prepared him for how much that simple embrace would hurt.

The drive to the house took fifteen minutes. Fifteen minutes across roads he'd memorized as a teenager, past landmarks that triggered memories he'd tried to suppress. The old sweetshop where his father had bought him sweets. The church where his parents had married. The field where he'd played as a child.

When they arrived, his father was sitting in the garden, a figure diminished by illness. James approached slowly, afraid that any sudden movement might shatter the fragile truce between them. His father looked up, eyes widening with recognition.

"You came," his father whispered.

James nodded, unable to speak. He sat beside him, and for the first time in five years, they sat in companionable silence, watching the sun descend toward the horizon.
</div>

<h4>Examiner Commentary: Grade 8 Analysis (AO5: 20/24 marks)</h4>
<div style="border-left: 4px solid #27ae60; padding-left: 15px; margin: 20px 0; background-color: #f0fdf4;">
<strong>Strengths:</strong>
<ul>
<li><strong>Narrative Structure:</strong> Clear emotional and physical journey. Opens with urgency, builds tension through journey home, culminates in pivotal moment. Cyclical quality (return to garden mirrors opening).</li>
<li><strong>Character Development:</strong> James shown through action and emotion. Internal conflict (resistance vs. obligation) shown implicitly without heavy-handed explanation.</li>
<li><strong>Varied Sentence Length:</strong> Short sentences create urgency ("The letter arrived on a Tuesday."); longer sentences develop reflection ("The drive to the house..."). Repetition of "five years" reinforces time and emotional weight.</li>
<li><strong>Sensory Detail:</strong> Specific details anchor narrative: cracked tiling, grey hair, the embrace. Selective and purposeful-not overdone.</li>
<li><strong>Tone Control:</strong> Tone shifts appropriately from anxiety to recognition to quiet emotion. Control maintained throughout.</li>
</ul>

<strong>For Higher Marks (22-24):</strong> Dialogue could be more distinctive/individual. Ending is emotionally effective but somewhat predictable. Greater syntactical ambition and more unexpected narrative turns would elevate work. More sophisticated vocabulary in places.
</div>

<h3>Narrative Technique Guide: Essential Devices for B1</h3>

<h4>1. The Hook: Opening Lines</h4>
<p><strong>Weak:</strong> "My name is James and I am going home. I hadn't seen my family for five years."</p>
<p><strong>Strong:</strong> "The letter arrived on a Tuesday, unsealed and urgent."</p>
<p><strong>Why It Works:</strong> Creates immediate mystery and tension. Specific detail (Tuesday, unsealed) makes it vivid. Readers want to know: what letter? Why urgent?</p>

<div class="examiner-tip"><strong>WJEC Tip:</strong> Avoid opening with "I" statements or biographical summary. Drop readers into a moment, action, or detail. Make them curious.</div>

<h4>2. Dialogue: Character Voice and Tension</h4>
<p><strong>Weak:</strong> <em>"Hello," said James. "How are you?" asked his mother.</em></p>
<p><strong>Strong:</strong> <em>"You came," his father whispered.</em></p>
<p><strong>Why It Works:</strong> Reveals character and emotion simultaneously. The verb "whispered" conveys weakness and emotion. Simple statement carries immense weight.</p>

<h4>3. Pacing Through Paragraph Variation</h4>
<p><strong>Short Paragraphs:</strong> Create urgency, tension, emotional impact.</p>
<p><strong>Long Paragraphs:</strong> Allow reflection, detailed description, internal thought.</p>
<p><strong>Strategy:</strong> Alternate between short and long paragraphs. A single short paragraph after longer ones creates emphasis and shock.</p>

<h4>4. Sensory Detail Over Description</h4>
<p><strong>Weak:</strong> "The station was old and looked sad."</p>
<p><strong>Strong:</strong> "The platform itself remained unchanged - the same cracked tiling, the same bench where he'd sat waiting for the London train five years ago."</p>
<p><strong>Why It Works:</strong> Specific, concrete details (cracked tiling, the bench) trigger emotional resonance. We see and feel time's passage.</p>

<h3>Band by Band: B1 Narrative (AO5 24 marks, AO6 16)</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr style="background-color: #ecf0f1;"><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>Band</strong></th><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>AO5 (/24)</strong></th><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>AO6 (/16)</strong></th><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>What it looks like</strong></th></tr>
<tr><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>5</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">20-24</td><td style="border: 1px solid #bdc3c7; padding: 10px;">14-16</td><td style="border: 1px solid #bdc3c7; padding: 10px;">An original story that holds the reader from start to end, with detailed characters and a carefully built structure. Spelling, punctuation and grammar are close to faultless and the vocabulary is wide and exact.</td></tr>
<tr style="background-color: #ecf0f1;"><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>4</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">15-19</td><td style="border: 1px solid #bdc3c7; padding: 10px;">11-13</td><td style="border: 1px solid #bdc3c7; padding: 10px;">A story in firm control, shaped with a clear purpose, with believable detail and some original ideas. Sentences are chosen for effect, errors are rare and the vocabulary is ambitious.</td></tr>
<tr><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>3</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">10-14</td><td style="border: 1px solid #bdc3c7; padding: 10px;">7-10</td><td style="border: 1px solid #bdc3c7; padding: 10px;">A clear, well-organised story that is going somewhere, with some developed detail, though it plays safe. Sentences vary and most punctuation and spelling are right.</td></tr>
<tr style="background-color: #ecf0f1;"><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>2</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">5-9</td><td style="border: 1px solid #bdc3c7; padding: 10px;">4-6</td><td style="border: 1px solid #bdc3c7; padding: 10px;">A story you can follow that is starting to have a shape, though plot and characters are thin. Sentences vary a little and most everyday words are spelt correctly.</td></tr>
<tr><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>1</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">1-4</td><td style="border: 1px solid #bdc3c7; padding: 10px;">1-3</td><td style="border: 1px solid #bdc3c7; padding: 10px;">The story is very simple or hard to follow, with little organisation. Sentences are mostly alike and errors in spelling, punctuation and tense are frequent.</td></tr>
</table>

<h3>Common Narrative Mistakes and Fixes</h3>

<h4>Mistake 1: Scene-Setting Before Action</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> "It was a cold morning in December. The sky was grey. Sarah looked out of the window. She was waiting for something important."
<br><strong>Issue:</strong> Too much exposition. Readers lose interest before story begins.
<br><strong>Better:</strong> "Sarah's hands trembled as she clutched the phone. She'd been waiting for this call for six months."
<br><strong>Fix:</strong> Start with character emotion or action, not weather or time.
</div>

<h4>Mistake 2: Telling Instead of Showing</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> "James was very nervous about seeing his father. He felt anxious and scared."
<br><strong>Issue:</strong> Emotion stated rather than shown through action and detail.
<br><strong>Better:</strong> "James's hands shook as he climbed the garden path. His breath came in shallow gasps."
<br><strong>Fix:</strong> Show emotion through physical action, dialogue, or internal reflection.
</div>

<h4>Mistake 3: Over-Description (Purple Prose)</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> "The resplendent aurora of the nascent morning illuminated the verdant landscape in hues of amber and rose."
<br><strong>Issue:</strong> Overly ornate language distracts from the story.
<br><strong>Better:</strong> "Sunlight broke across the fields, turning them gold."
<br><strong>Fix:</strong> Use precise, vivid language-not flowery language. Simple sentences can be more powerful.
</div>

<h4>Mistake 4: Unnatural Dialogue</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> "My father said, 'James, I have been thinking about you and our past relationship, and I would like to apologize for all the hurt I have caused you.'"
<br><strong>Issue:</strong> Formal, stilted dialogue breaks immersion.
<br><strong>Better:</strong> "My father looked at me. 'I'm sorry, James. For everything.'"
<br><strong>Fix:</strong> Write dialogue as people actually speak. Short, often incomplete sentences. Natural pauses. Real emotion.
</div>

<h3>Step-by-Step Narrative Writing Guide (Exam Conditions)</h3>
<ol style="font-size: 1.05em; line-height: 1.8;">
<li><strong>Plan your story (about 10 min):</strong> One pivotal moment. One or two characters. Clear emotional arc.</li>
<li><strong>Write a hook opening:</strong> Start with action, dialogue, or striking detail-not scene-setting.</li>
<li><strong>Establish character and conflict:</strong> What does the protagonist want? What obstacle blocks them?</li>
<li><strong>Use varied sentence length:</strong> Short sentences create pace/tension. Longer sentences allow reflection.</li>
<li><strong>Include sensory detail:</strong> What does the character see, hear, feel, smell? Make it specific and purposeful.</li>
<li><strong>Use dialogue sparingly but effectively:</strong> Every line should reveal character or advance the plot.</li>
<li><strong>Control pacing with paragraph variation:</strong> Vary paragraph structure to control reader movement through the story.</li>
<li><strong>Aim for emotional resonance in the ending:</strong> A quiet moment of recognition often works better than shock.</li>
<li><strong>Leave the last few minutes for proofreading:</strong> Check SPaG errors, particularly dialogue punctuation.</li>
</ol>

<h3>Grade 5 vs. Grade 9: Side-by-Side Comparison</h3>

<h4>The Same Scenario - Two Versions</h4>
<p><strong>Scenario:</strong> A character returns to their childhood home after many years away.</p>

<h4>Grade 5-6 Version (Acceptable)</h4>
<div style="border: 2px solid #f39c12; padding: 15px; margin: 15px 0; background-color: #fef5e7;">
I walked up to the front door of my childhood home after ten years away. The house looked old and smaller than I remembered. The paint was peeling off the walls and the garden was overgrown. My mother answered the door and smiled at me. We hugged and she said it was good to have me home. I felt happy and sad at the same time.
</div>

<h4>Grade 8-9 Version (Excellent)</h4>
<div style="border: 2px solid #27ae60; padding: 15px; margin: 15px 0; background-color: #d5f4e6;">
The front door was smaller than I remembered, the paint peeling in long strips that curled like dead skin. I stood on the path for a full minute, unable to move. My mother appeared in the doorway-when had she become so small?-and her smile faltered slightly when she saw me. We hugged, but it was tentative, careful, as though we were afraid of breaking something fragile. Neither of us spoke. The silence was heavy with ten years of absence, of birthdays missed, of phone calls that never quite connected. Inside, the house smelled the same-furniture polish and tea-and that sameness made me want to cry.
</div>

<p><strong>Key Differences:</strong></p>
<ul>
<li><strong>Detail:</strong> Grade 8-9 uses specific, evocative detail (paint "curled like dead skin") while Grade 5-6 states generalizations.</li>
<li><strong>Showing vs. Telling:</strong> Grade 8-9 shows emotion through hesitation and physical action; Grade 5-6 tells the reader they felt "happy and sad."</li>
<li><strong>Sentence Variety:</strong> Grade 8-9 varies dramatically (one-word sentence: "Nothing." Long, complex sentences). Grade 5-6 uses mostly simple, similar-length sentences.</li>
<li><strong>Figurative Language:</strong> Grade 8-9 uses metaphor naturally ("paint...curled like dead skin"). Grade 5-6 has no figurative language.</li>
<li><strong>Sensory Immersion:</strong> Grade 8-9 engages multiple senses. Grade 5-6 relies mostly on sight.</li>
</ul>

`,
    quiz: [
      {
        id: 'wjec-c1-m6-q1',
        question: 'How are the 40 marks for B1 divided?',
        options: [
          '20 marks for content, 20 marks for accuracy',
          '24 marks for content and organisation (AO5), 16 marks for technical accuracy (AO6)',
          '30 marks for content, 10 marks for accuracy',
          '40 marks for content only',
        ],
        correct: 1,
        explanation:
          'B1 is marked with 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy - spelling, punctuation, grammar).',
      },
      {
        id: 'wjec-c1-m6-q2',
        question: 'What does "show, don\'t tell" mean in narrative writing?',
        options: [
          'Use illustrations instead of words',
          'Reveal emotions and character through action, detail, and dialogue rather than direct statement',
          'Show the examiner your plan before writing',
          'Tell the story from a first-person perspective',
        ],
        correct: 1,
        explanation:
          '"Show, don\'t tell" means conveying emotions and character through specific actions, sensory details, and dialogue rather than simply stating feelings. "Her hands trembled" is more effective than "She was nervous."',
      },
      {
        id: 'wjec-c1-m6-q3',
        question: 'What is pathetic fallacy?',
        options: [
          'A logical error in an argument',
          "When the weather or environment mirrors a character's emotions",
          'A type of narrative structure',
          'Exaggeration for dramatic effect',
        ],
        correct: 1,
        explanation:
          "Pathetic fallacy is the use of weather or environment to mirror or reflect a character's emotional state - such as rain during a sad scene or sunshine during a happy one.",
      },
      {
        id: 'wjec-c1-m6-q4',
        question: 'What does the paper suggest about the length of your creative writing?',
        options: [
          'The longer the better - aim for at least 800 words',
          'About 450-600 words: a controlled, crafted piece of that length outperforms a longer, unfocused one',
          'Exactly 300 words is required',
          'Length does not matter at all',
        ],
        correct: 1,
        explanation:
          "The paper suggests about 450 to 600 words. A controlled, crafted piece of that length, demonstrating deliberate technique, will score higher than a much longer piece that loses direction, while writing far less than the guidance holds a piece's own marks down.",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 - Creative Prose Writing: Descriptive Techniques
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m7',
    title: 'Creative Prose Writing: Descriptive Techniques',
    duration: '50 min',
    content: `
<h2>B1 - Creative Prose Writing: Crafting Description</h2>

<p>B1 asks for a story, or an account of an experience, real or imagined: the specification asks for a narrative or recount, and a piece that only describes cannot reach the top of the mark range. <strong>Description</strong> is still one of your most powerful tools. Descriptive passages inside your story create a vivid, immersive picture through rich sensory detail, figurative language, and carefully crafted atmosphere, and they bring its characters, setting and events to life. This module teaches those techniques, and how to use them without losing your story.</p>

<div class="key-term"><strong>Key Term: Descriptive Writing</strong> - Writing that aims to create a vivid picture or impression in the reader's mind. It relies on sensory detail, figurative language, and controlled atmosphere rather than plot or narrative action. The focus is on <em>how</em> something is described rather than <em>what</em> happens. In B1, use it inside your narrative, never instead of it.</div>

<h3>Narrative and Description: What Each Does in Your Story</h3>
<table>
  <tr><th>Feature</th><th>Narrative</th><th>Descriptive passages</th></tr>
  <tr><td>Focus</td><td>Events, characters, conflict</td><td>Atmosphere, imagery, sensory experience</td></tr>
  <tr><td>Plot</td><td>Required (even if minimal)</td><td>Pause the plot to deepen a single moment</td></tr>
  <tr><td>Dialogue</td><td>Often included</td><td>Rarely needed</td></tr>
  <tr><td>Pacing</td><td>Varies - builds to a climax</td><td>Typically slow and sustained</td></tr>
  <tr><td>Ending</td><td>Resolution or revelation</td><td>Often circular or reflective</td></tr>
</table>

<h3>The Five Senses Toolkit</h3>
<p>Great descriptive writing engages all five senses, not just sight. Many students default to visual description; you can stand out by weaving in sound, smell, texture, and taste:</p>
<ul>
  <li><strong>Sight:</strong> "The market stalls were draped in bolts of silk - crimson, saffron, cobalt - that caught the light and shimmered like stained glass."</li>
  <li><strong>Sound:</strong> "Vendors called out in overlapping rhythms, their voices rising and falling like an unscored symphony."</li>
  <li><strong>Smell:</strong> "The air was thick with the sweetness of overripe fruit and the sharp edge of woodsmoke drifting from a brazier."</li>
  <li><strong>Touch:</strong> "The cobblestones were uneven beneath her feet, worn smooth by centuries of footfall."</li>
  <li><strong>Taste:</strong> "She bit into the pastry and the filling burst - warm, honeyed, faintly bitter with almonds."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Your story does not need a complicated plot. A single, simple situation (a market, a beach at dawn, a room after a party), told as a story with one moment of change and described with precision, craft, and sensory richness, can reach the top band. The examiner is assessing the quality of your writing, not the complexity of your plot, but a piece that only describes, with nothing happening, cannot reach the top of the mark range.</div>

<h3>Zoom Technique: Wide to Close</h3>
<p>One of the most effective structural techniques in descriptive writing is the <strong>zoom</strong> - moving from a wide, panoramic view to a close, intimate detail (or vice versa). This mirrors the way a camera operates and gives your writing a clear, purposeful structure:</p>
<ol>
  <li><strong>Wide shot:</strong> Describe the scene from a distance - the landscape, the setting, the general atmosphere.</li>
  <li><strong>Mid shot:</strong> Move closer - focus on a group of people, a building, a section of the scene.</li>
  <li><strong>Close-up:</strong> Zoom in on a specific, telling detail - a crack in a wall, a child's face, a single leaf.</li>
</ol>
<p>This structure gives a descriptive passage a clear sense of movement and focus, preventing it from becoming a static list of observations.</p>

<h3>Model Descriptive Opening</h3>
<div class="model-answer"><strong>Model Answer (Grade 8-9 - Descriptive Opening):</strong> From the clifftop, the bay curved like a held breath - a crescent of pale sand bordered by dark rocks that the sea had sculpted into the shapes of sleeping animals. The water was impossible to trust: blue near the shore, then green, then a deep, uncertain grey further out, as though it were concealing something beneath its surface. Gulls traced slow circles overhead, their cries thin and metallic against the silence. Below, where the cliff path descended in a series of crumbling steps, a single figure stood at the water's edge, trousers rolled to the knee, not moving. The waves crept towards them and retreated, crept and retreated, as though the sea itself were uncertain whether to approach.</div>

<p>This opening uses the zoom technique (wide bay → water → gulls → single figure → waves at their feet) and engages multiple senses (sight, sound). The similes are original ("a held breath," "sleeping animals") and the personification of the sea creates atmosphere.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Letting description stop the story. A passage of sensory detail is powerful at a turning point, but a piece that is description from start to finish, with nothing happening, cannot reach the top of the mark range. Keep a thread of story running (a character, a situation, a moment of change) and use description to make the key moments vivid.</div>

<h3>Advanced Descriptive Techniques</h3>
<ul>
  <li><strong>Extended metaphor:</strong> Sustain a single metaphor across multiple sentences or the whole piece, creating thematic unity.</li>
  <li><strong>Juxtaposition:</strong> Place beauty beside decay, stillness beside movement, or noise beside silence to create tension and depth.</li>
  <li><strong>Temporal shifts:</strong> Describe the same scene at different times - dawn vs dusk, summer vs winter - to create contrast and reflection.</li>
  <li><strong>Personification:</strong> Give life to inanimate objects to create mood. "The house sagged beneath the weight of its own history."</li>
  <li><strong>Listing with variation:</strong> Use lists but vary the length and rhythm of items. "Bottles. Newspapers. A child's shoe, scuffed at the toe and missing its lace."</li>
  <li><strong>Symbolism:</strong> Use a recurring image or object to represent a larger theme or emotion.</li>
</ul>

<div class="key-term"><strong>Key Term: Extended Metaphor</strong> - A metaphor that is developed and sustained across several sentences, a paragraph, or an entire text. Unlike a single metaphor, an extended metaphor creates a sustained comparison that deepens meaning and unifies the writing thematically.</div>
`,
    quiz: [
      {
        id: 'wjec-c1-m7-q1',
        question: 'Can a B1 response be pure description, with no story?',
        options: [
          'Yes, a single scene described with sensory richness can reach full marks',
          'No: B1 asks for a story or recount, and writing that only describes cannot reach the top of the mark range',
          'Only if the title is a single word',
          'Yes, as long as it is at least 800 words',
        ],
        correct: 1,
        explanation:
          'Eduqas asks for a narrative or recount, real or imagined. Description brings a story to life, but a piece that only describes cannot reach the top of the mark range, so keep a thread of story running through it.',
      },
      {
        id: 'wjec-c1-m7-q2',
        question: 'What is the "zoom technique" in descriptive writing?',
        options: [
          'Writing as fast as possible',
          'Moving from a wide panoramic view to a close intimate detail, like a camera',
          'Focusing only on one small detail throughout',
          'Using a magnifying glass as a metaphor',
        ],
        correct: 1,
        explanation:
          'The zoom technique moves from wide shot (landscape, setting) to mid shot (a group, a building) to close-up (a specific detail). It gives descriptive writing purposeful structure and movement.',
      },
      {
        id: 'wjec-c1-m7-q3',
        question: 'Which senses do most students over-rely on in descriptive writing?',
        options: ['Sound and smell', 'Sight only', 'Touch and taste', 'All five senses equally'],
        correct: 1,
        explanation:
          'Most students default to visual description. Weaving in sound, smell, touch, and taste helps your writing stand out and creates a more immersive, multi-sensory experience.',
      },
      {
        id: 'wjec-c1-m7-q4',
        question: 'What is an extended metaphor?',
        options: [
          'A very long simile',
          'A metaphor developed and sustained across multiple sentences or the whole piece',
          'A metaphor that uses the word "like"',
          'Any metaphor that appears more than once',
        ],
        correct: 1,
        explanation:
          'An extended metaphor is sustained across multiple sentences, a paragraph, or an entire text. It creates a sustained comparison that deepens meaning and unifies the writing thematically.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 - Technical Accuracy: SPaG for Creative Writing
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m8',
    title: 'Technical Accuracy: SPaG for Creative Writing',
    duration: '45 min',
    content: `
<h2>AO6 - Technical Accuracy: Spelling, Punctuation, and Grammar</h2>

<p>Of the 40 marks available for B1 creative writing, <strong>16 marks</strong> are awarded for <strong>AO6: technical accuracy</strong>. This covers spelling, punctuation, grammar, and the effective use of vocabulary and sentence structures. Many students focus entirely on creative content and neglect accuracy - this is a costly mistake, as AO6 represents <strong>40% of the writing marks</strong>.</p>

<div class="key-term"><strong>Key Term: SPaG</strong> - An abbreviation for Spelling, Punctuation, and Grammar. SPaG accuracy is assessed through AO6 and is crucial for achieving top marks in any writing task. Even brilliant creative ideas will be limited if expressed with persistent technical errors.</div>

<h3>Punctuation That Impresses</h3>
<p>Using a range of punctuation accurately demonstrates control and sophistication. Go beyond full stops and commas:</p>
<ul>
  <li><strong>Semicolons (;)</strong> - Link two closely related independent clauses: "The house was silent; not even the clock dared to tick."</li>
  <li><strong>Colons (:)</strong> - Introduce an explanation, list, or dramatic reveal: "She opened the box and understood everything: it was empty."</li>
  <li><strong>Dashes (-)</strong> - Insert a dramatic pause, an aside, or an afterthought: "The door opened - slowly, reluctantly - and a face appeared."</li>
  <li><strong>Ellipsis (...)</strong> - Suggest trailing off, hesitation, or the passage of time: "She turned to speak, but the words wouldn't come..."</li>
  <li><strong>Exclamation marks (!)</strong> - Use sparingly for genuine emphasis. One per piece is usually enough; overuse weakens impact.</li>
  <li><strong>Parenthetical commas</strong> - Embed additional detail within a sentence: "The garden, once her grandmother's pride, was now overrun with weeds."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC examiners specifically reward "a range of punctuation used accurately." Using semicolons, colons, and dashes correctly will push you into the higher mark bands. However, if you are unsure how to use them, stick with what you know - an incorrectly used semicolon is worse than a correctly used full stop.</div>

<h3>Sentence Structures for Effect</h3>
<p>Varying your sentence structure is essential for both AO5 (organisation) and AO6 (technical accuracy):</p>
<ul>
  <li><strong>Simple sentences:</strong> "She stopped." - Short and punchy for dramatic emphasis.</li>
  <li><strong>Compound sentences:</strong> "She stopped and the world stopped with her." - Two ideas linked with a coordinating conjunction.</li>
  <li><strong>Complex sentences:</strong> "Although she had prepared herself for this moment, the reality of it struck her with a force she had not anticipated." - A main clause and a subordinate clause, allowing for nuance and detail.</li>
  <li><strong>Minor sentences/fragments:</strong> "Gone." "Nothing." "Just the wind." - Used sparingly for dramatic effect.</li>
  <li><strong>Front-loaded adverbials:</strong> "Slowly, deliberately, she reached for the handle." - Placing adverbs or adverbial phrases at the start creates rhythm and emphasis.</li>
</ul>

<h3>Common Spelling Errors to Avoid</h3>
<p>These words are frequently misspelled in GCSE English exams:</p>
<ul>
  <li><strong>definitely</strong> (not "definately")</li>
  <li><strong>separate</strong> (not "seperate")</li>
  <li><strong>beginning</strong> (double n)</li>
  <li><strong>embarrassed</strong> (double r, double s)</li>
  <li><strong>immediately</strong> (not "immediatly")</li>
  <li><strong>conscience</strong> (not "concience")</li>
  <li><strong>desperate</strong> (not "desparate")</li>
  <li><strong>conscious</strong> (not "concious")</li>
  <li><strong>environment</strong> (not "enviroment")</li>
  <li><strong>rhythm</strong> (no vowel between r and h)</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Using ambitious vocabulary but spelling it incorrectly. If you want to use words like "melancholy," "silhouette," or "juxtaposition," make sure you can spell them. An incorrectly spelled ambitious word draws more negative attention than a correctly spelled simpler one. Only use words you are confident spelling.</div>

<h3>Paragraph Structure</h3>
<p>Well-organised paragraphs demonstrate control:</p>
<ul>
  <li>Each paragraph should have a clear focus or purpose.</li>
  <li>Use paragraph breaks to signal shifts in time, focus, mood, or perspective.</li>
  <li>Vary paragraph length - a short paragraph after a long one creates emphasis.</li>
  <li>A single-sentence paragraph can be used for dramatic impact: "And then the lights went out."</li>
</ul>

<div class="model-answer"><strong>Model Answer - Demonstrating Range of Punctuation:</strong> The station was deserted - not the comfortable emptiness of a Sunday morning, but something heavier, deliberate. She checked her watch: half past eleven. The last train should have arrived twenty minutes ago; its absence felt intentional, as though the world had quietly decided to leave her behind. On the platform, a newspaper trembled in the wind (yesterday's headlines, already irrelevant) and a pigeon strutted along the yellow line, fearless. She thought about calling someone - anyone - but who would answer at this hour? The phone sat in her pocket, useless. "Platform 3," the sign read. Platform 3, where nothing was coming.</div>

<p>This passage uses colons, semicolons, dashes, parentheses, question marks, quotation marks, and varied sentence lengths - all accurately. This range of punctuation demonstrates the AO6 control that examiners reward.</p>

<div class="key-term"><strong>Key Term: Subordinate Clause</strong> - A clause that cannot stand alone as a sentence and depends on a main clause for its meaning. It often begins with a subordinating conjunction (although, because, while, when, if). Example: "Although the room was empty, she felt watched." The subordinate clause is "Although the room was empty."</div>
`,
    quiz: [
      {
        id: 'wjec-c1-m8-q1',
        question: 'How many of the 40 marks for B1 are awarded for technical accuracy (AO6)?',
        options: ['8 marks', '10 marks', '16 marks', '24 marks'],
        correct: 2,
        explanation:
          '16 of the 40 marks are for AO6 (technical accuracy - spelling, punctuation, and grammar). This is 40% of the writing marks, making accuracy very important.',
      },
      {
        id: 'wjec-c1-m8-q2',
        question: 'When should you use a semicolon?',
        options: [
          'Before a list',
          'To link two closely related independent clauses',
          'After a question',
          'Before speech marks',
        ],
        correct: 1,
        explanation:
          'A semicolon links two closely related independent clauses that could each stand as separate sentences. Example: "The house was silent; not even the clock dared to tick."',
      },
      {
        id: 'wjec-c1-m8-q3',
        question: 'What is a front-loaded adverbial?',
        options: [
          'An adverb at the end of a sentence',
          'An adverb or adverbial phrase placed at the start of a sentence for rhythm and emphasis',
          'A type of paragraph structure',
          'An adjective used as an adverb',
        ],
        correct: 1,
        explanation:
          'A front-loaded adverbial places an adverb or adverbial phrase at the beginning of a sentence. Example: "Slowly, deliberately, she reached for the handle." This creates rhythm and emphasis.',
      },
      {
        id: 'wjec-c1-m8-q4',
        question: 'Why is it risky to use ambitious vocabulary you cannot spell?',
        options: [
          'The examiner will think you are showing off',
          'An incorrectly spelled ambitious word draws more negative attention than a simpler correctly spelled one',
          'Ambitious vocabulary is not rewarded at GCSE',
          'The spell checker will correct it anyway',
        ],
        correct: 1,
        explanation:
          'A misspelled ambitious word is more noticeable than a correctly spelled simpler one. Only use words you can spell confidently - accuracy matters more than showing off.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 - Proofreading and Exam Strategy
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c1-m9',
    title: 'Proofreading, Revision, and Exam Strategy',
    duration: '40 min',
    content: `
<h2>Component 1 - Final Preparation: Proofreading and Exam Strategy</h2>

<p>This module brings together everything you have learned about Component 1 and focuses on <strong>exam technique</strong> - the practical strategies that can make the difference between grades on the day. Even the most talented writer can lose marks through poor time management, inadequate proofreading, or failure to answer the question set.</p>

<div class="key-term"><strong>Key Term: Proofreading</strong> - The process of carefully re-reading your work to identify and correct errors in spelling, punctuation, grammar, and expression. Effective proofreading is a skill that can be practised and improved. It is the single easiest way to gain marks in the exam.</div>

<h3>The 5-Minute Proofread</h3>
<p>Always leave at least 5 minutes at the end of the exam for proofreading. Use this systematic approach:</p>
<ol>
  <li><strong>Read for sense:</strong> Does every sentence make grammatical sense? Read each sentence individually. If something sounds awkward, rewrite it.</li>
  <li><strong>Check punctuation:</strong> Have you used capital letters for proper nouns and sentence starts? Are commas used correctly (not in comma splices)? Have you closed all speech marks?</li>
  <li><strong>Check spelling:</strong> Focus on words you know you find difficult. Check homophones (their/there/they're, its/it's, where/were/wear).</li>
  <li><strong>Check paragraphing:</strong> Have you started a new paragraph for each new focus, time, or speaker? Are your paragraph breaks clear?</li>
  <li><strong>Read your ending:</strong> Does your final sentence feel purposeful? A strong ending leaves a lasting impression.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Proofreading pays: AO6 is 16 of the 40 writing marks, and correcting three or four SPaG errors in five minutes can lift your accuracy mark. That is more marks per minute than almost any other exam activity.</div>

<h3>Common Proofreading Targets</h3>
<ul>
  <li><strong>Comma splices:</strong> "She ran to the door, it was locked." This should be two sentences, or joined with a semicolon or conjunction.</li>
  <li><strong>Homophone confusion:</strong> their/there/they're, its/it's, to/too/two, your/you're, affect/effect.</li>
  <li><strong>Missing apostrophes:</strong> "The dog's lead" (possessive) vs "The dogs played" (plural). "It's" = "it is"; "its" = belonging to it.</li>
  <li><strong>Tense inconsistency:</strong> Switching between past and present tense without purpose. Choose one tense and maintain it.</li>
  <li><strong>Run-on sentences:</strong> Sentences that go on too long without proper punctuation. If a sentence has more than three clauses, consider breaking it up.</li>
</ul>

<h3>Time Management Strategy</h3>
<p>Here is the optimal time allocation for the 1 hour 45 minute paper:</p>
<table>
  <tr><th>Activity</th><th>Time</th><th>Marks</th></tr>
  <tr><td>Read and annotate the extract</td><td>10 min</td><td>-</td></tr>
  <tr><td>A1 - Retrieval (5 marks)</td><td>5 min</td><td>5</td></tr>
  <tr><td>A2 - Language comment (5 marks)</td><td>7 min</td><td>5</td></tr>
  <tr><td>A3 - Language analysis (10 marks)</td><td>13 min</td><td>10</td></tr>
  <tr><td>A4 - Language and structure (10 marks)</td><td>13 min</td><td>10</td></tr>
  <tr><td>A5 - Evaluation (10 marks)</td><td>12 min</td><td>10</td></tr>
  <tr><td>B1 - Plan your story</td><td>10 min</td><td>-</td></tr>
  <tr><td>B1 - Write your story</td><td>30 min</td><td>40</td></tr>
  <tr><td>Proofread</td><td>5 min</td><td>-</td></tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Not planning the creative writing piece. Students who dive straight into writing often produce unfocused, rambling responses. Ten minutes of planning, as the paper advises (deciding on focus, structure, opening, and ending), is the best investment you can make. A planned piece within the paper's suggested 450 to 600 words will outscore an unplanned one of any length.</div>

<h3>Answering the Question Set</h3>
<p>This sounds obvious, but WJEC examiners report that many students lose marks by not answering the actual question:</p>
<ul>
  <li><strong>A2:</strong> If the question names lines 8-14, do not discuss lines 1-7 or 15-20. Stay within the specified lines.</li>
  <li><strong>A3:</strong> If the question asks about "impressions of the character," do not write about setting or atmosphere unless it directly reveals character.</li>
  <li><strong>A4:</strong> The question asks about language and structure, so write about how the events are organised as well as the words. An answer on word choices alone misses half the question.</li>
  <li><strong>A5:</strong> If the question asks "to what extent do you agree," you must evaluate, not just analyse, using the final lines and the passage as a whole.</li>
  <li><strong>B1:</strong> Whatever the title, write a story or an account of an experience: a phrase, a time you did something, an opening line or a closing line can each start one. Description should serve the story, not replace it.</li>
</ul>

<h3>Revision Checklist</h3>
<ul>
  <li>Can you identify and explain the five reading question types (A1-A5)?</li>
  <li>Can you analyse language on its own (A2/A3) and language with structure (A4)?</li>
  <li>Can you write an evaluative response with personal judgement and textual evidence (A5)?</li>
  <li>Can you plan and write a story of about 450-600 words in 45 minutes?</li>
  <li>Can you use a range of punctuation accurately (semicolons, colons, dashes)?</li>
  <li>Can you proofread systematically for common errors?</li>
  <li>Do you know the timing plan for the exam?</li>
</ul>

<div class="key-term"><strong>Key Term: Comma Splice</strong> - An error where two independent clauses are joined with only a comma, without a coordinating conjunction. Example: "She ran to the door, it was locked." This should be corrected to: "She ran to the door; it was locked" or "She ran to the door, but it was locked."</div>
`,
    quiz: [
      {
        id: 'wjec-c1-m9-q1',
        question: 'How long should you spend proofreading at the end of the exam?',
        options: ['1 minute', '3 minutes', 'At least 5 minutes', '10 minutes'],
        correct: 2,
        explanation:
          'At least 5 minutes should be reserved for proofreading. Correcting SPaG errors is one of the most efficient ways to gain marks in the exam.',
      },
      {
        id: 'wjec-c1-m9-q2',
        question: 'What is a comma splice?',
        options: [
          'Using too many commas in a list',
          'Joining two independent clauses with only a comma, without a conjunction',
          'Forgetting to use a comma after an adverbial',
          'Using a comma instead of a full stop at the end of a sentence',
        ],
        correct: 1,
        explanation:
          'A comma splice incorrectly joins two independent clauses with just a comma. It should be corrected with a semicolon, a full stop, or a comma plus a coordinating conjunction.',
      },
      {
        id: 'wjec-c1-m9-q3',
        question: 'Why is planning the creative writing piece essential?',
        options: [
          'The examiner marks your plan separately',
          'An unplanned response often becomes unfocused and rambling; a planned piece demonstrates control',
          'You must submit your plan with your answer',
          'Planning is only needed for long stories',
        ],
        correct: 1,
        explanation:
          'Planning helps you produce a focused, well-structured response. Planned responses are more controlled than unplanned, rambling ones, and control is what the higher bands reward.',
      },
      {
        id: 'wjec-c1-m9-q4',
        question: 'What is the single most common reason students lose marks unnecessarily?',
        options: [
          'Using too many quotations',
          'Writing too much',
          'Not answering the question that was actually set',
          'Using too much subject terminology',
        ],
        correct: 2,
        explanation:
          'WJEC examiners report that many students lose marks by not answering the actual question - discussing the wrong lines, the wrong focus, or the wrong skill. Always re-read the question before and after answering.',
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
// Component 1 Assessment Questions
// ═══════════════════════════════════════════════════════════════════════════════

const comp1Assessment: CourseQuiz[] = [
  {
    id: 'wjec-c1-assess-1',
    question: 'What is the total mark allocation for WJEC/Eduqas Component 1?',
    options: ['60 marks', '80 marks', '100 marks', '40 marks'],
    correct: 1,
    explanation:
      'Component 1 is worth 80 marks in total - 40 for reading (Section A) and 40 for creative writing (Section B).',
  },
  {
    id: 'wjec-c1-assess-2',
    question: 'Which century must the fiction extract in Section A come from?',
    options: ['19th century', '21st century', '20th century', 'Any century'],
    correct: 2,
    explanation:
      'Component 1 uses a 20th-century literary prose extract (1900-1999). Component 2 covers 19th and 21st century non-fiction.',
  },
  {
    id: 'wjec-c1-assess-3',
    question: 'What does AO2 assess?',
    options: [
      'Identifying explicit information',
      'How writers use language and structure to achieve effects',
      'Evaluating texts critically',
      'Spelling and punctuation accuracy',
    ],
    correct: 1,
    explanation:
      'AO2 assesses the ability to explain, comment on and analyse how writers use language and structure to achieve effects and influence readers.',
  },
  {
    id: 'wjec-c1-assess-4',
    question: 'How many marks is A1 (retrieval) worth?',
    options: ['10 marks', '3 marks', '5 marks', '1 mark'],
    correct: 2,
    explanation:
      'A1 is one question, list five things from the lines named, with one mark for each correct, separate point: 5 marks.',
  },
  {
    id: 'wjec-c1-assess-5',
    question: 'What is the key difference between A4 and A2/A3?',
    options: [
      'A4 is worth more marks',
      'A4 adds structure: it asks about language and the organisation of events, where A2 and A3 focus on language',
      'A4 requires quotations; A2/A3 do not',
      'There is no difference',
    ],
    correct: 1,
    explanation:
      'A4 tests language and structure together: word choices and the arrangement of events, pacing and focus shifts. A2 and A3 test analysis of language choices (words, phrases, techniques).',
  },
  {
    id: 'wjec-c1-assess-6',
    question: 'What does "connotation" refer to?',
    options: [
      'The dictionary definition of a word',
      'The associations and feelings a word evokes beyond its literal meaning',
      'The grammatical function of a word',
      'The etymology of a word',
    ],
    correct: 1,
    explanation:
      'Connotation refers to the associations, feelings, and ideas a word evokes beyond its literal definition. Exploring connotation is essential for high-band language analysis.',
  },
  {
    id: 'wjec-c1-assess-7',
    question: 'Which Assessment Objective does A5 (evaluation) test?',
    options: ['AO1', 'AO2', 'AO4', 'AO6'],
    correct: 2,
    explanation:
      'A5 tests AO4 - the ability to evaluate texts critically and support your evaluation with appropriate textual references.',
  },
  {
    id: 'wjec-c1-assess-8',
    question: 'What does "show, don\'t tell" mean in creative writing?',
    options: [
      'Use illustrations alongside your writing',
      'Reveal emotions through action, detail, and dialogue rather than direct statement',
      'Show your plan to the examiner',
      'Tell a story rather than describe a scene',
    ],
    correct: 1,
    explanation:
      '"Show, don\'t tell" means conveying emotions through specific actions, sensory details, and dialogue rather than stating feelings directly.',
  },
  {
    id: 'wjec-c1-assess-9',
    question: 'How are the 40 marks for creative writing (B1) divided?',
    options: [
      '20 for AO5, 20 for AO6',
      '30 for AO5, 10 for AO6',
      '24 for AO5, 16 for AO6',
      '40 marks all for AO5',
    ],
    correct: 2,
    explanation:
      'B1 awards 24 marks for AO5 (content and organisation) and 16 marks for AO6 (technical accuracy).',
  },
  {
    id: 'wjec-c1-assess-10',
    question: 'When should you use a semicolon?',
    options: [
      'Before every list',
      'To link two closely related independent clauses',
      'After every question',
      'To replace a full stop at the end of a paragraph',
    ],
    correct: 1,
    explanation:
      'A semicolon links two closely related independent clauses. Both clauses must be able to stand alone as sentences.',
  },
  {
    id: 'wjec-c1-assess-11',
    question: 'What is the "zoom technique" in descriptive writing?',
    options: [
      'Writing as fast as possible',
      'Moving from a wide panoramic view to a close intimate detail',
      'Describing only close-up details',
      'Using a camera as a metaphor',
    ],
    correct: 1,
    explanation:
      'The zoom technique moves from a wide shot (landscape) to a mid shot (a group or building) to a close-up (a specific detail), giving descriptive writing purposeful structure.',
  },
  {
    id: 'wjec-c1-assess-12',
    question: 'What is pathetic fallacy?',
    options: [
      'A logical error in reasoning',
      "When the weather or environment mirrors a character's emotions",
      'An incorrect use of pathos',
      'A type of structural technique',
    ],
    correct: 1,
    explanation:
      "Pathetic fallacy uses weather or environment to mirror a character's emotional state - rain during sadness, sunshine during joy.",
  },
  {
    id: 'wjec-c1-assess-13',
    question: 'What is a comma splice?',
    options: [
      'Using a comma in a list',
      'Joining two independent clauses with only a comma',
      'Placing a comma after a conjunction',
      'Using too many commas in one sentence',
    ],
    correct: 1,
    explanation:
      'A comma splice incorrectly joins two independent clauses with just a comma. Correct it with a semicolon, a full stop, or a comma plus a conjunction.',
  },
  {
    id: 'wjec-c1-assess-14',
    question: 'What percentage of the total GCSE does Component 1 represent?',
    options: ['50%', '60%', '40%', '35%'],
    correct: 2,
    explanation:
      'Component 1 is worth 40% of the total GCSE. Component 2 accounts for the remaining 60%.',
  },
  {
    id: 'wjec-c1-assess-15',
    question: 'What is the recommended length for a creative writing response?',
    options: [
      'At least 800 words',
      'About 450-600 well-crafted words, as the paper suggests',
      'Exactly 250 words',
      'As long as possible',
    ],
    correct: 1,
    explanation:
      'The paper suggests about 450 to 600 words. A controlled, crafted piece of that length beats a longer, unfocused response: quality of writing matters more than quantity.',
  },
  {
    id: 'wjec-c1-assess-16',
    question: 'Which question tests AO1 (retrieval and comprehension)?',
    options: ['A2', 'A1', 'A4', 'A5'],
    correct: 1,
    explanation:
      'A1 tests AO1 - the ability to identify and interpret explicit and implicit information and ideas from the extract.',
  },
  {
    id: 'wjec-c1-assess-17',
    question: 'In evaluation (A5), what does "to what extent" require?',
    options: [
      'A yes or no answer',
      'A nuanced response weighing evidence and offering considered judgement',
      'A summary of the whole extract',
      'Only agreement with the statement',
    ],
    correct: 1,
    explanation:
      '"To what extent" requires a nuanced, thoughtful response that weighs evidence from the text. Top-band answers agree but extend, refine, or nuance the statement.',
  },
  {
    id: 'wjec-c1-assess-18',
    question: 'What is "feature spotting" and why is it problematic?',
    options: [
      'Finding quotations quickly - it saves time',
      'Naming a technique without explaining its effect - it earns very few marks',
      'Identifying structural features - it only applies to A4',
      'Listing all the techniques in the extract - it shows wide knowledge',
    ],
    correct: 1,
    explanation:
      'Feature spotting means naming a technique without explaining its effect. The examiner wants analysis of effect, not just identification.',
  },
  {
    id: 'wjec-c1-assess-19',
    question: 'What structural technique involves the ending echoing the opening?',
    options: ['Flashback', 'In medias res', 'Cyclical structure', 'Foreshadowing'],
    correct: 2,
    explanation:
      'Cyclical structure is when the ending mirrors or echoes the opening, creating a sense of completeness, circularity, or entrapment.',
  },
  {
    id: 'wjec-c1-assess-20',
    question: 'How much time should you allocate to planning your creative writing piece?',
    options: [
      'No time - start writing immediately',
      '1 minute',
      'About 10 minutes, as the paper advises',
      '25 minutes',
    ],
    correct: 2,
    explanation:
      'The paper advises about 10 minutes planning and about 35 minutes writing. Planning (choosing focus, structure, opening, and ending) produces a more controlled response.',
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
// WJEC/Eduqas GCSE English Language - Component 2 Modules
// 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing
// ═══════════════════════════════════════════════════════════════════════════════
//
// CORRECTED 31 October 2026 against src/data/mark-scheme-guides/eduqas-lang-comp2.ts.
// The course was written for a paper Eduqas does not set: A1 retrieval (5
// marks), A2 synthesis (10), A3 language analysis "often" on the 19th-century
// text (10), A4 comparison (10), an A5 proofreading task (5), then a "shorter"
// B1 of 16 marks and a "longer" B2 of 24. Component 2 asks 1.1 retrieval (3,
// 21st-century text), 1.2 how the writer achieves a purpose (10, AO2,
// 21st-century), 1.3 understanding (3, 19th-century), 1.4 evaluation (10, AO4,
// 19th-century), 1.5 synthesis (4, both) and 1.6 comparison (10, AO3, both),
// then two compulsory tasks, 2.1 and 2.2, of 20 marks each (AO5 12 + AO6 8),
// about 300-400 words and 30 minutes apiece. Section A carries no AO6 marks.
// The labels A1 to A5 did not match the 2014 sample paper's either (its A1 to
// A6 are 1.1 to 1.6), so this course now uses the live papers' numbering. The
// proofreading module now teaches checking your own writing for AO6, with the
// answer keys of its practice passages corrected (they listed errors the
// passages did not contain).
// Second reading, same day: a 2.1 commentary still aimed at "22-24" on a 12-mark
// AO5 scale; the 1.5 tip forbade the one-sentence-per-text shape the guide
// recommends; a 1.3 model answer turned "not always" into "often".

const comp2Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 - Component 2 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m1',
    title: 'Component 2 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>WJEC/Eduqas GCSE English Language - Component 2 (C700U20-1)</h2>

<p>Component 2 is titled <strong>19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing</strong>. It is worth <strong>60% of the total GCSE</strong> and is examined in a <strong>2 hour</strong> paper. The paper has two sections and is worth a total of <strong>80 marks</strong>.</p>

<div class="key-term"><strong>Key Term: Non-Fiction</strong> - Texts that are based on real events, people, and ideas rather than imagined ones. Non-fiction includes newspaper articles, magazine features, letters, diaries, travel writing, speeches, autobiographies, blogs, reviews, and reports. Component 2 uses two non-fiction texts from different centuries.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A - Reading (40 marks):</strong> You are given two unseen non-fiction extracts - one from the 19th century and one from the 21st century - on a linked theme. You answer six questions: two on the 21st-century text, two on the 19th-century text, then two on both, ending with a comparison.</li>
  <li><strong>Section B - Transactional/Persuasive Writing (40 marks):</strong> Two compulsory writing tasks of 20 marks each. You must complete <strong>both</strong>, in the form and for the reader each task sets, in about 300 to 400 words each.</li>
</ul>

<h3>Question-by-Question Breakdown</h3>
<p>Live papers number the questions 1.1 to 1.6 and 2.1 and 2.2, as below; the 2014 sample paper called them A1 to A6, B1 and B2.</p>
<ol>
  <li><strong>1.1 (3 marks)</strong> - Retrieval. Short questions on the 21st-century text.</li>
  <li><strong>1.2 (10 marks)</strong> - How does the writer of the 21st-century text try to achieve a purpose, such as persuading you? Analyse what is said, the language, tone and structure, with quotations and subject terminology.</li>
  <li><strong>1.3 (3 marks)</strong> - Understanding. Short questions on what the 19th-century text says or means.</li>
  <li><strong>1.4 (10 marks)</strong> - Evaluation. Your judgement on the 19th-century text, often on a statement about it, thinking about what is said and how.</li>
  <li><strong>1.5 (4 marks)</strong> - Synthesis. Using <strong>both</strong> texts, explain briefly what they tell you about one shared topic.</li>
  <li><strong>1.6 (10 marks)</strong> - Comparison. Compare what the two writers say about a shared topic and how they get it across. This requires you to compare attitudes, methods, and effects across the two texts.</li>
  <li><strong>2.1 (20 marks)</strong> - First compulsory transactional or persuasive task, in the form and for the reader it sets. About 300-400 words.</li>
  <li><strong>2.2 (20 marks)</strong> - Second compulsory task, with its own form and reader. About 300-400 words.</li>
</ol>

<h3>Assessment Objectives</h3>
<ul>
  <li><strong>AO1</strong> - Identify and interpret explicit and implicit information; select and synthesise from different texts. (1.1, 1.3, 1.5)</li>
  <li><strong>AO2</strong> - Explain, comment on and analyse how writers use language and structure to achieve effects. (1.2)</li>
  <li><strong>AO3</strong> - Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts. (1.6)</li>
  <li><strong>AO4</strong> - Evaluate texts critically and support this with appropriate textual references. (1.4)</li>
  <li><strong>AO5</strong> - Communicate clearly, effectively and imaginatively; organise information and ideas. (2.1, 2.2)</li>
  <li><strong>AO6</strong> - Vocabulary, sentence structures, spelling and punctuation. (2.1, 2.2: Section A carries no AO6 marks)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Component 2 is 2 hours long and covers <strong>two</strong> reading texts and <strong>two</strong> writing tasks. Time management is absolutely critical. The most common error is spending too long on reading and then rushing the writing - or vice versa. Aim for 1 hour on reading and 1 hour on writing.</div>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0-10 min:</strong> Read both extracts carefully, annotating key ideas, language features, and viewpoints.</li>
  <li><strong>10-14 min:</strong> Answer 1.1 (3 marks): retrieval from the 21st-century text.</li>
  <li><strong>14-26 min:</strong> Answer 1.2 (10 marks): how the 21st-century writer achieves a purpose.</li>
  <li><strong>26-30 min:</strong> Answer 1.3 (3 marks): understanding the 19th-century text.</li>
  <li><strong>30-42 min:</strong> Answer 1.4 (10 marks): evaluation of the 19th-century text.</li>
  <li><strong>42-47 min:</strong> Answer 1.5 (4 marks): bringing details together from both texts.</li>
  <li><strong>47-60 min:</strong> Answer 1.6 (10 marks): comparison of both texts.</li>
  <li><strong>60-65 min:</strong> Plan 2.1.</li>
  <li><strong>65-90 min:</strong> Write and check 2.1 (20 marks).</li>
  <li><strong>90-95 min:</strong> Plan 2.2.</li>
  <li><strong>95-120 min:</strong> Write and check 2.2 (20 marks).</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating 1.5 (synthesis) and 1.6 (comparison) as the same question. 1.5 asks you to bring together the relevant details from both texts on one topic, briefly, for 4 marks. 1.6 asks you to <em>compare viewpoints and perspectives</em> for 10 marks: this requires analysis of how each writer conveys their ideas, and an explicit comparison of methods and effects.</div>

<div class="key-term"><strong>Key Term: Transactional Writing</strong> - Writing that has a clear purpose, audience, and form. It aims to inform, persuade, advise, argue, or instruct. Common forms include letters, articles, speeches, reviews, reports, and leaflets. Transactional writing requires you to adapt your tone, style, and register to suit the task.</div>


<h3>Worked Example: Retrieval from 19th-Century Text</h3>
<p><strong>Practice 19th-Century Extract:</strong></p>
<div class="text-extract">
My Dear Cousin, I write to you from a small village in the Cotswolds, where I have removed myself for the purpose of restoring both health and temperament. The very air seems to possess restorative qualities - clear and unsullied by the corrupting influences of London society. The rural populace, though simple in their understanding, demonstrate a virtue absent in polished circles: genuine contentment with their station. I have begun to perceive that civilisation, for all its vaunted progress, may represent a departure from more authentic modes of living. The question which now occupies my thoughts is whether we are justified in pursuing advancement when such pursuit necessitates the sacrifice of human virtue.
</div>

<p><strong>1.3 Question (understanding the 19th-century text):</strong> Where is the writer and why has he come there?</p>

<p><strong>Model Response (Grade 9):</strong></p>
<div class="model-answer">
The writer is in a "small village in the Cotswolds" and has come there "for the purpose of restoring both health and temperament." He believes the air has "restorative qualities" that will benefit him.
</div>

<p><strong>Why This Scores Full Marks:</strong> Accurate quotation. Directly answers both parts of the question (where AND why). Shows understanding of slightly archaic language.</p>

<h3>Bridging 19th and 21st-Century Language</h3>
<p><strong>19th-Century Vocabulary You'll Encounter:</strong></p>
<ul>
<li><strong>Temperament</strong> - mood, disposition (not just "bad temper")</li>
<li><strong>Sullied</strong> - made dirty or compromised</li>
<li><strong>Populace</strong> - ordinary people, the masses</li>
<li><strong>Vaunted</strong> - boasted about, claimed proudly</li>
<li><strong>Station</strong> - social position, rank</li>
<li><strong>Authentic</strong> - genuine, real (not fake or superficial)</li>
<li><strong>Necessitates</strong> - makes necessary, requires</li>
</ul>

<p><strong>19th-Century Structures:</strong></p>
<ul>
<li><strong>Formal address:</strong> "My Dear..." instead of "Dear..." signals formality.</li>
<li><strong>Long sentences:</strong> Victorian prose loved elaborate, multi-clause sentences. Track the main verb and subject.</li>
<li><strong>Abstract reasoning:</strong> 19th-century texts often philosophize about virtue, progress, civilisation. Don't skip these sections - they contain key ideas.</li>
</ul>

<h3>Comparing 19th and 21st-Century Non-Fiction</h3>
<p><strong>19th-Century Text (likely):</strong></p>
<ul>
<li>Formal register ("My Dear," "It is my opinion that")</li>
<li>Concern with virtue, morality, social obligation</li>
<li>Elaborate sentence structures</li>
<li>Pessimism about "progress" and "modernity"</li>
<li>Limited accessibility of information (relies on personal observation and correspondence)</li>
</ul>

<p><strong>21st-Century Text (likely):</strong></p>
<ul>
<li>Informal register (direct address, conversational tone)</li>
<li>Concern with efficiency, practicality, individual choice</li>
<li>Shorter, punchier sentences</li>
<li>Optimism about technology and innovation</li>
<li>Abundant data, statistics, links to multiple sources</li>
</ul>

<h3>1.5 Practice: Bringing Details Together from Both Texts</h3>
<p><strong>Question:</strong> Using the 19th-century extract above and a 21st-century article about rural life, what do both texts tell you about attitudes to rural communities?</p>

<p><strong>Model Response (sketch):</strong></p>
<div class="model-answer">
The 19th-century writer romanticizes rural life, valuing the "genuine contentment" and virtue of rural people. He contrasts this favorably with urban "corruption." A 21st-century article might counter this, presenting rural challenges: limited job opportunities, poor broadband, aging populations. Both texts discuss rural identity, but the 19th-century text sentimentalizes whilst the 21st-century text pragmatizes.
</div>

<p>For 1.5, keep it brief: one or two sentences on each text, giving the details. How the writers present their views belongs in 1.6.</p>

<h3>Common Mistakes on 1.1 and 1.3</h3>
<div class="common-mistake"><strong>Mistake 1: Inaccurate quotation.</strong> "The writer says the village is in Scotland." But the text says "Cotswolds." Quotation must be exact.</div>
<div class="common-mistake"><strong>Mistake 2: Copying a long passage in the hope that the answer is in it.</strong> Short, exact answers earn the marks. For 1.3, putting the older language simply in your own words shows you have understood it.</div>
<div class="common-mistake"><strong>Mistake 3: Over-explaining.</strong> 1.1 and 1.3 are retrieval and understanding. You don't need to analyse why the writer feels this way - just state what the text says.</div>
<div class="common-mistake"><strong>Mistake 4: Confusing the two texts.</strong> 1.1 is on the 21st-century text and 1.3 on the 19th-century text: an answer from the wrong text earns nothing.</div>

`,
    quiz: [
      {
        id: 'wjec-c2-m1-q1',
        question: 'How long is the Component 2 exam?',
        options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 15 minutes'],
        correct: 2,
        explanation:
          'Component 2 is 2 hours long, divided between Section A (Reading - 40 marks) and Section B (Writing - 40 marks).',
      },
      {
        id: 'wjec-c2-m1-q2',
        question: 'What percentage of the total GCSE does Component 2 represent?',
        options: ['40%', '50%', '60%', '70%'],
        correct: 2,
        explanation:
          'Component 2 is worth 60% of the total GCSE - the larger of the two components.',
      },
      {
        id: 'wjec-c2-m1-q3',
        question: 'How many writing tasks must you complete in Section B?',
        options: ['One', 'Two', 'Three', 'Choose one from three'],
        correct: 1,
        explanation:
          'Section B sets two compulsory writing tasks, 2.1 and 2.2, worth 20 marks each (12 for AO5, 8 for AO6). Both must be completed, in about 30 minutes each.',
      },
      {
        id: 'wjec-c2-m1-q4',
        question: 'Which Assessment Objective is unique to Component 2?',
        options: ['AO1', 'AO2', 'AO3', 'AO5'],
        correct: 2,
        explanation:
          "AO3 (comparing writers' ideas and perspectives across texts) is unique to Component 2. It is tested in 1.6, which asks you to compare how two writers convey their viewpoints.",
      },
      {
        id: 'wjec-c2-m1-q5',
        question: 'Does Component 2 set a separate proofreading task?',
        options: [
          'Yes, a passage with deliberate errors to correct',
          "No: accuracy is marked in your own two pieces of writing, 8 of each task's 20 marks",
          'Yes, worth 10 marks',
          'Only in some years',
        ],
        correct: 1,
        explanation:
          'There is no proofreading task. Eduqas assesses technical accuracy (AO6) in Section B: 8 of the 20 marks for each writing task, 16 in all. Proofreading your own writing is how you earn them.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 - Reading 19th and 21st Century Non-Fiction
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m2',
    title: 'Reading 19th and 21st Century Non-Fiction (1.1 and 1.3)',
    duration: '45 min',
    content: `
<h2>1.1 and 1.3 - Retrieval and Understanding in Non-Fiction Texts</h2>

<p>Questions 1.1 and 1.3 on Component 2 are worth <strong>3 marks</strong> each and test <strong>AO1</strong> - your ability to identify and interpret explicit and implicit information from a non-fiction text. Question 1.1 asks short questions on the 21st-century text; Question 1.3 asks short questions on the 19th-century text, about what it says or what it means. (The 2014 sample paper called them A1 and A3.)</p>

<div class="key-term"><strong>Key Term: 19th-Century Non-Fiction</strong> - Non-fiction texts written between 1800 and 1899. These include Victorian letters, diary entries, newspaper editorials, travel accounts, speeches, and essays. The language may feel formal or archaic, but the ideas are often surprisingly relevant to modern debates.</div>

<div class="key-term"><strong>Key Term: 21st-Century Non-Fiction</strong> - Non-fiction texts written from 2000 onwards. These include newspaper and magazine articles, blog posts, online journalism, speeches, opinion columns, reviews, and autobiography extracts. The language tends to be more contemporary and accessible.</div>

<h3>Characteristics of 19th-Century Non-Fiction</h3>
<p>When reading 19th-century texts, be prepared for:</p>
<ul>
  <li><strong>Formal register:</strong> More complex sentence structures, elevated vocabulary, and formal address ("Dear Sir," "I beg to inform you").</li>
  <li><strong>Longer sentences:</strong> Victorian writers often used elaborate, multi-clause sentences. Read slowly and track the main clause.</li>
  <li><strong>Archaic vocabulary:</strong> Words like "hitherto," "forthwith," "commenced," "countenance." Use context to work out meanings.</li>
  <li><strong>Social context:</strong> References to class, empire, industry, religion, and gender roles. Understanding the period helps you interpret attitudes.</li>
  <li><strong>Rhetorical flourishes:</strong> Elaborate metaphors, classical allusions, and oratorical techniques (especially in speeches).</li>
</ul>

<h3>Practice Extracts</h3>
<div class="text-extract"><strong>Text A (21st century):</strong> Social media has fundamentally altered the way we interact with the news. A 2023 survey found that 64% of 16-24-year-olds get their news primarily from platforms like TikTok and Instagram, rather than from newspapers or television bulletins. The consequences are profound: information arrives fragmented, decontextualised, and often filtered through algorithms designed not to inform but to engage. We scroll, we react, we move on - rarely pausing to read beyond the headline or question the source.
<div class="source">From a newspaper opinion column, 2024</div></div>

<div class="text-extract"><strong>Text B (19th century):</strong> The press, sir, is the great engine of civilisation. Through its tireless industry, the humblest cottager may be furnished with intelligence from the farthest corners of the globe. A newspaper placed upon a kitchen table is a window thrown open to the world. Yet I confess a growing unease at the rapidity with which information now circulates, for speed and accuracy are not always companions, and the public appetite for sensation threatens to overwhelm the sober duty of truthful reporting.
<div class="source">From a speech to the Press Association, 1872</div></div>

<h3>Sample 1.1 Questions (on Text A, the 21st-century text)</h3>
<ol>
  <li><em>"According to the survey, what percentage of 16-24-year-olds get their news from social media?"</em> - <strong>64%</strong></li>
  <li><em>"Name two platforms mentioned as sources of news."</em> - <strong>TikTok and Instagram.</strong></li>
  <li><em>"How is news described when it arrives via social media?"</em> - <strong>Fragmented, decontextualised, and filtered through algorithms.</strong></li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For 1.1 and 1.3, the answers are in the text. Do not overthink or add your own interpretation. Find the relevant information in the right text and express it clearly and briefly; for 1.1, read the whole 21st-century text first, because an answer can sit anywhere in it, including near the end. You can quote directly from the text or paraphrase closely.</div>

<h3>Reading Strategies for Older Texts</h3>
<ul>
  <li><strong>Read the source information first.</strong> Knowing the date, author, and context helps you understand the text before you begin.</li>
  <li><strong>Break long sentences into chunks.</strong> Identify the main clause and then consider how the subordinate clauses add detail.</li>
  <li><strong>Use context clues for unfamiliar words.</strong> If you don't know "countenance," the sentence "his countenance darkened" suggests it relates to a facial expression.</li>
  <li><strong>Note the writer's purpose.</strong> Is this text informing, persuading, entertaining, advising, or arguing? This shapes how you interpret language choices.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Panicking when faced with 19th-century vocabulary. The language may look unfamiliar, but the ideas are often straightforward. Don't let an archaic word derail you - use the surrounding context to work out its meaning. Question 1.3 asks what the 19th-century text says or means: an answer that puts the older language simply shows you have understood it.</div>


<h3>Worked Example: Bringing Details Together (1.5)</h3>
<p><strong>Question 1.5 (4 marks):</strong> Using both texts, explain briefly what you learn about attitudes to community.</p>

<p><strong>19th-Century Text (extract):</strong></p>
<div class="text-extract">
The village, for all its hardships, binds its inhabitants together in ways that London never could. Shared labour, shared faith, shared obligation create bonds that money cannot sever. Each person knows their role and accepts it as a contribution to the whole.
</div>

<p><strong>21st-Century Text (extract):</strong></p>
<div class="text-extract">
Today's communities are self-selected. You join a gym, a church, a book club because it suits you, not because you were born into it. This has freed us from narrow constraints but also fractured our sense of collective obligation. We are more autonomous, less bound.
</div>

<p><strong>Model Synthesis Response (Grade 9):</strong></p>
<div class="model-answer">
Both texts address community, but from opposing perspectives. The 19th-century writer values community as <em>obligation</em> - shared labour and faith create bonds that individuals cannot escape. This creates a sense of belonging but also constraint. The 21st-century text celebrates the opposite: individuals <em>choose</em> their communities based on preference, gaining freedom but losing the involuntary bonds that once held people together. The 19th-century writer sees community as given and binding; the 21st-century writer sees it as chosen and fragile. Both texts suggest that community has changed: from imposed unity to optional affiliation.
</div>

<p><strong>Why This is Grade 9:</strong></p>
<ul>
<li>Uses evidence from both texts</li>
<li>Identifies the key contrast (obligation vs. choice)</li>
<li>Synthesizes the contrast into a coherent insight about social change</li>
<li>Doesn't just list - it interprets</li>
</ul>

<h3>Synthesis Framework (Step-by-Step)</h3>
<ol>
<li><strong>Identify the topic the texts share:</strong> Both discuss community, technology, education, social change, etc.</li>
<li><strong>State each text's main point on that topic:</strong> Text A says... Text B says...</li>
<li><strong>Find the connection/contrast:</strong> Do they agree, disagree, or approach the same topic differently?</li>
<li><strong>Synthesize:</strong> What larger insight emerges when you read them together? What has changed between the 19th and 21st centuries?</li>
<li><strong>Use evidence from both:</strong> At least one quote or idea from each text.</li>
<li><strong>Keep it brief:</strong> at 4 marks, one or two sentences on each text can be enough, as long as the details are precise and cover every part of what is asked.</li>
</ol>

<h3>Common Synthesis Mistakes</h3>
<div class="common-mistake"><strong>Mistake 1: Vague details.</strong> "Both texts talk about community" earns little. 1.5 rewards precise details from each text that cover every part of what is asked. A sentence on each text, naming the text and giving the exact details, is a good shape for a 4-mark answer.</div>

<div class="common-mistake"><strong>Mistake 2: Only using one text.</strong> The question explicitly says "both texts." An answer on one text stays in the lowest band.</div>

<div class="common-mistake"><strong>Mistake 3: Inaccurate quotation.</strong> Quick paraphrase is acceptable, but must be accurate. If you misrepresent what a text says, your synthesis falls apart.</div>

<div class="common-mistake"><strong>Mistake 4: Failing to identify the underlying change.</strong> Good synthesis recognizes that texts separated by time reveal social, cultural, or technological change. What has shifted? That's your synthesis.</div>

<div class="common-mistake"><strong>Mistake 5: Analysing language.</strong> 1.5 wants the details, not how they are written. Save the writers' methods for 1.6, the comparison.</div>

<h3>1.5 Practice: Bringing Details Together</h3>
<p><strong>Question:</strong> What do the two texts together tell you about changing attitudes to work?</p>
<p><strong>Text A (1890s):</strong> "A man's work is his identity and his duty. Labour, whether in field or factory, defines one's place in society and one's worth."</p>
<p><strong>Text B (2024):</strong> "Today we 'find our passion' and 'choose our career.' Work is not an obligation but an expression of self. Many seek 'work-life balance' and reject the notion that careers should consume their identities."</p>

<p><strong>Model Synthesis (sketch):</strong></p>
<div class="model-answer">
Together, the texts reveal a fundamental shift in how society values work. The 19th-century text presents work as <em>identity</em> - it defines who you are and your social position. The 21st-century text treats work as <em>one part of life</em> - important, yes, but not consuming. The change suggests increasing emphasis on individual autonomy and psychological wellbeing, but potentially less sense of collective purpose or social obligation through labour.
</div>

<h3>How 1.1 and 1.3 Are Marked</h3>
<p>Each is worth 3 marks: one mark for each correct answer. Answers must come from the right text (1.1 from the 21st-century text, 1.3 from the 19th-century text) and from the right part of it. A short, exact answer earns the mark; a long passage copied in the hope that the answer is somewhere in it does not.</p>

<h3>Worked Example: A 1.1 Set and a 1.2 Point</h3>

<h4>Passage A (21st Century)</h4>
<div class="text-extract">
The pandemic accelerated a trend that was already underway: the rise of remote work. By 2023, 28% of the UK workforce had adopted some form of flexible working arrangement. For many, this represented liberation from the commute. For employers, it meant reduced office costs. Yet the data also reveals hidden costs: 56% of remote workers report blurred boundaries between work and home life, and mental health services reported a 15% increase in calls related to work-related stress since 2020. The dream of working in your pyjamas has become, for many, a nightmare of never leaving work at all.
<div class="source">BBC News, 2024</div>
</div>

<h4>1.1 Questions with Model Answers (3 marks)</h4>
<p><strong>(a) (1 mark):</strong> According to the passage, what percentage of the UK workforce had adopted flexible working by 2023?</p>
<p><strong>Answer:</strong> 28%. (Direct retrieval from text)</p>

<p><strong>(b) (1 mark):</strong> Name two groups mentioned in the passage who benefit from remote work.</p>
<p><strong>Answer:</strong> Workers (who avoid the commute) and employers (who reduce office costs). (Direct retrieval, combining two points)</p>

<p><strong>(c) (1 mark):</strong> What phrase is used to describe the effect of blurred work-home boundaries?</p>
<p><strong>Answer:</strong> "a nightmare of never leaving work at all". (Direct quote or close paraphrase)</p>

<p>Other short questions the passage could support include how calls about work-related stress have changed since 2020: they rose by 15%.</p>

<h4>Taking It Further: A 1.2 Point</h4>
<p>Question 1.2 asks how the writer of the 21st-century text tries to achieve a purpose. The ending of this passage is a strong detail for it.</p>
<p><strong>Strong 1.2 point:</strong> The writer contrasts the positive expectation ("the dream of working in your pyjamas") with the negative reality ("a nightmare"). While remote work promised freedom from commuting, it has created new stresses: blurred boundaries between work and home, and increased mental health problems. Placing the "dream" against the "nightmare" in the final sentence leaves the reader with the cost, suggesting that what was sold as liberation has brought many workers greater stress.</p>
<p><strong>Weaker version:</strong> The writer says remote work was supposed to be good (a dream) but it has turned out bad (a nightmare) because people work too much.</p>

<h3>Distinguishing 19th-Century and 21st-Century Non-Fiction</h3>

<h4>19th-Century Non-Fiction: Language and Tone Features</h4>
<ul>
<li><strong>Formal register:</strong> "I beg to inform you," "your obedient servant," "the undersigned"</li>
<li><strong>Complex sentences:</strong> Multiple clauses linked by semicolons and subordination</li>
<li><strong>Archaic vocabulary:</strong> "thence," "hitherto," "forthwith," "countenance," "perforce"</li>
<li><strong>Rhetorical devices:</strong> Elaborate metaphors, parallelism, rhetorical questions</li>
<li><strong>Class and social references:</strong> Explicit mentions of rank, duty, station</li>
</ul>

<h4>21st-Century Non-Fiction: Language and Tone Features</h4>
<ul>
<li><strong>Conversational tone:</strong> "Look," "Here's the thing," direct address to reader</li>
<li><strong>Shorter sentences:</strong> Mix of short, punchy sentences with longer ones for variety</li>
<li><strong>Contemporary vocabulary:</strong> "algorithm," "authentic," "influencer," "disrupt," "synergy"</li>
<li><strong>Data and statistics:</strong> Frequent citation of surveys, studies, percentages</li>
<li><strong>Informal punctuation:</strong> Dashes, ellipses, parenthetical asides for emphasis</li>
</ul>

<h3>Common Mistakes on 1.1 and 1.3, and Fixes</h3>

<h4>Mistake 1: Providing Too Much Context</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Question:</strong> What percentage of workers have flexible arrangements?
<br><strong>Weak Answer:</strong> "The passage discusses how the pandemic changed work. During COVID, many people started working from home. Now, 28% of workers have flexible arrangements, which is an increase from before."
<br><strong>Issue:</strong> Over-explanation. 1.1 tests retrieval, not analysis.
<br><strong>Better Answer:</strong> "28%."
<br><strong>WJEC Tip:</strong> 1.1 and 1.3 answers should be concise. A phrase or one sentence is usually enough.
</div>

<h4>Mistake 2: Repeating Instead of Explaining (1.3)</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>1.3 Question:</strong> What does the speaker mean by "speed and accuracy are not always companions"?
<br><strong>Weak Answer:</strong> "Speed and accuracy are not companions."
<br><strong>Issue:</strong> Just repeating the text. No sign that the older language has been understood.
<br><strong>Better Answer:</strong> "That news which travels fast is not always accurate."
<br><strong>WJEC Tip:</strong> When 1.3 asks what something means, put it simply in your own words.
</div>

<h4>Mistake 3: Confusing the Two Texts</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak Answer:</strong> (When asked about Text A, 21st century) "In Victorian times, work was seen as duty..."
<br><strong>Issue:</strong> Mixing up the texts. Confusing 19th-century ideas with 21st-century ones.
<br><strong>Better Answer:</strong> Check which text you're answering about. Keep them separate in your mind. Annotate A and B.
<br><strong>WJEC Tip:</strong> When you receive the exam paper, immediately label the texts A and B. This prevents confusion: 1.1 is on the 21st-century text and 1.3 on the 19th-century text.
</div>

<h4>Mistake 4: Misunderstanding Archaic Language</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Question:</strong> What does the writer say about "the countenance of the lady"?
<br><strong>Weak Answer:</strong> "I don't know what countenance means."
<br><strong>Better Approach:</strong> Look at context. "Her countenance darkened" - likely refers to facial expression. "He observed her countenance" - how she looked. Use surrounding words.
<br><strong>WJEC Tip:</strong> In an exam, you won't have a dictionary. Use context clues. The surrounding sentence usually reveals the meaning.
</div>

<h3>Step-by-Step Strategy for 1.1 and 1.3</h3>
<ol style="font-size: 1.05em; line-height: 1.8;">
<li><strong>Read the source information:</strong> Date, author if given, and text type. This contextualizes what you're about to read.</li>
<li><strong>Read the passage once completely,</strong> without stopping to analyse. Get a sense of the overall meaning and tone.</li>
<li><strong>Read the questions.</strong> Note which text each one is on (1.1 the 21st-century text, 1.3 the 19th-century text) and which lines, if specified.</li>
<li><strong>For each question, return to the text.</strong> Don't rely on memory. Find the relevant section.</li>
<li><strong>For retrieval questions (1 mark):</strong> Extract the answer directly or paraphrase very closely.</li>
<li><strong>For questions on what something means (1.3):</strong> Put the meaning simply in your own words, using the sentences around any unfamiliar word.</li>
<li><strong>Check your answer:</strong> Reread the relevant section to confirm accuracy.</li>
<li><strong>Move on.</strong> Spend about 4 minutes on each of 1.1 and 1.3.</li>
</ol>

<h3>Practice Passage: A 1.1 Set (3 marks)</h3>

<h4>21st-Century Text: "The Digital Divide"</h4>
<div class="text-extract">
The digital divide isn't just about access to technology-it's about access to opportunity. A 2025 report by the Institute for Digital Policy found that 12% of UK households still lack reliable broadband. In rural areas, the figure climbs to 31%. Without internet access, students cannot submit homework, jobseekers cannot apply online, and elderly people cannot access banking or health services. The cost of closing this gap is estimated at £2.3 billion. Yet while governments debate budget constraints, those without digital access fall further behind. The promise of the digital age has become, for millions, a locked door.
<div class="source">Policy brief, 2025</div>
</div>

<h4>1.1 Questions (3 marks)</h4>
<p><strong>1 (1 mark):</strong> What percentage of UK households lack reliable broadband?</p>
<p><strong>Answer:</strong> 12%.</p>

<p><strong>2 (1 mark):</strong> In what type of area is the lack of broadband access most severe?</p>
<p><strong>Answer:</strong> Rural areas (31% lack access).</p>

<p><strong>3 (1 mark):</strong> Name two services that people cannot access without internet.</p>
<p><strong>Answer:</strong> Banking and health services / Submitting homework and applying for jobs. (Any two from: submit homework, apply for jobs, access banking, access health services)</p>

<h4>Taking It Further: A 1.2 Point</h4>
<p><strong>Focus:</strong> What does the writer achieve by calling the digital opportunity "a locked door" for millions?</p>
<p><strong>Model Answer:</strong> The writer suggests that while the digital age promises access and opportunity, those without broadband are excluded from it. The "locked door" metaphor implies they cannot access the benefits-education, employment, essential services-that the digitally connected take for granted. The promise remains inaccessible to them.</p>

<p>Another short question the passage could support: do governments have unlimited budgets to close the digital divide? No: the text says they "debate budget constraints."</p>

`,
    quiz: [
      {
        id: 'wjec-c2-m2-q1',
        question: 'How many marks is Question 1.1 on Component 2 worth?',
        options: ['5 marks', '3 marks', '10 marks', '15 marks'],
        correct: 1,
        explanation:
          'Question 1.1 is worth 3 marks: short questions on the 21st-century text, one mark each. Question 1.3, on the 19th-century text, is also worth 3. Both test AO1.',
      },
      {
        id: 'wjec-c2-m2-q2',
        question: 'What centuries do the two non-fiction extracts come from?',
        options: [
          '18th and 20th century',
          '19th and 21st century',
          '19th and 20th century',
          '20th and 21st century',
        ],
        correct: 1,
        explanation:
          'Component 2 uses two non-fiction extracts - one from the 19th century (1800-1899) and one from the 21st century (2000 onwards) - on a linked theme.',
      },
      {
        id: 'wjec-c2-m2-q3',
        question: 'What should you do if you encounter an unfamiliar word in a 19th-century text?',
        options: [
          'Skip the word entirely',
          'Use surrounding context to work out its meaning',
          'Look it up in a dictionary',
          'Assume it means the same as a modern word it resembles',
        ],
        correct: 1,
        explanation:
          'Use context clues to work out unfamiliar vocabulary. The words around the unfamiliar term usually give enough information to understand its meaning.',
      },
      {
        id: 'wjec-c2-m2-q4',
        question: 'What is the best strategy for answering the retrieval questions (1.1 and 1.3)?',
        options: [
          'Write a detailed analysis of the language',
          'Compare both texts in your answer',
          'Find the relevant information in the text and express it clearly and briefly',
          'Give your personal opinion on the topic',
        ],
        correct: 2,
        explanation:
          '1.1 and 1.3 test retrieval and understanding. The best strategy is to locate the information in the right text and express it clearly, either by quoting directly or paraphrasing closely. No analysis or opinion is needed.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 - Synthesis Across Two Texts (1.5)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m3',
    title: 'Synthesis: Drawing Together Two Texts (1.5)',
    duration: '50 min',
    content: `
<h2>1.5 - Synthesis: Connecting Ideas Across Two Non-Fiction Texts</h2>

<p>Question 1.5 is worth <strong>4 marks</strong> and tests <strong>AO1</strong> - specifically the ability to <strong>select and synthesise evidence from different texts</strong>. It asks you to explain briefly what <em>both</em> texts tell you about one shared topic, bringing the relevant details from each together in one short answer. The linking skills in this module also serve 1.6, the 10-mark comparison.</p>

<div class="key-term"><strong>Key Term: Synthesis</strong> - The process of combining information from two or more sources to create a unified, coherent response. Synthesis goes beyond simply listing what each text says - it involves finding connections, patterns, and complementary points between the texts.</div>

<h3>How 1.5 Questions Are Worded</h3>
<p>Typical 1.5 questions include:</p>
<ul>
  <li><em>"Using both texts, explain briefly what you learn about [topic]."</em></li>
  <li><em>"What do you understand about [topic] from reading both texts? You must use evidence from both."</em></li>
</ul>
<p>The crucial words are <strong>"both texts"</strong> - you <em>must</em> draw on evidence from both the 19th-century and 21st-century extracts. An answer on one text stays in the lowest band.</p>

<h3>The Synthesis Framework</h3>
<p>Structure your response using this pattern:</p>
<ol>
  <li><strong>Opening statement:</strong> Introduce the topic and indicate that both texts address it.</li>
  <li><strong>Point from Text A:</strong> State what the first text reveals, with supporting evidence.</li>
  <li><strong>Link to Text B:</strong> Use a connecting phrase ("Similarly," "In contrast," "Text B also suggests," "This is echoed in Text B, where...") and state what the second text reveals.</li>
  <li><strong>Develop:</strong> Draw out the connection - are the texts in agreement, or do they present different aspects of the topic?</li>
  <li><strong>Keep it brief:</strong> At 4 marks, one or two sentences on each text can be enough. Make sure the details are precise and cover every part of what is asked.</li>
</ol>

<h3>Useful Connective Phrases for Synthesis</h3>
<ul>
  <li>"Both texts suggest that..."</li>
  <li>"Similarly, Text B indicates..."</li>
  <li>"While Text A focuses on..., Text B emphasises..."</li>
  <li>"This is echoed / reinforced / developed in Text B, where..."</li>
  <li>"In contrast, the 19th-century writer presents..."</li>
  <li>"Both writers draw attention to the fact that..."</li>
</ul>

<div class="model-answer"><strong>Model Answer (Grade 7-9 - 1.5):</strong> Both texts reveal significant concerns about the reliability of news. The 21st-century writer suggests that social media delivers information that is "fragmented" and "decontextualised," implying that the truth is lost when news is broken into bite-sized pieces for quick consumption. Similarly, the 19th-century speaker acknowledges that "speed and accuracy are not always companions," suggesting that even in 1872, the increasing pace of news distribution was seen as a threat to truthful reporting. Both writers therefore identify a tension between the speed of information and its reliability - though the modern writer emphasises the role of technology (algorithms and platforms), while the Victorian speaker frames it as a moral failing of the press itself.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The key to a high-scoring 1.5 response is <strong>exactly the right details from both texts, pulled together clearly</strong>. A sentence or two on each text, naming the text and giving the exact details, is enough at 4 marks; a linking phrase such as "Similarly" or "In contrast" shows how the details fit together. Save the extended, point-by-point weaving of both texts for 1.6.</div>

<h3>What Examiners Are Looking For</h3>
<p>Question 1.5 is marked one band per mark:</p>
<ul>
  <li><strong>Band 4 (4 marks):</strong> A good spread of exactly the right details from both texts, pulled together clearly.</li>
  <li><strong>Band 3 (3 marks):</strong> Several relevant details from both texts, pulled together sensibly.</li>
  <li><strong>Band 2 (2 marks):</strong> A relevant detail or two from each text.</li>
  <li><strong>Band 1 (1 mark):</strong> Only a little relevant detail, or details from just one text.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Turning 1.5 into an essay. It is worth 4 marks: one or two sentences on each text, naming the text and giving the exact details, are enough, and the best answers make the link between them clear. Analysing how the details are written belongs in 1.6, not here, and an answer on one text stays in the lowest band.</div>

<div class="key-term"><strong>Key Term: Inference</strong> - Drawing conclusions from evidence that is suggested but not directly stated. In synthesis, you may need to infer connections between the texts - for example, both texts may address the same theme but from very different angles, and you need to articulate that connection.</div>
`,
    quiz: [
      {
        id: 'wjec-c2-m3-q1',
        question: 'What does "synthesis" mean in the context of 1.5?',
        options: [
          'Summarising one text',
          'Combining information from two sources to create a unified, coherent response',
          'Analysing language techniques',
          'Comparing the writing styles of both authors',
        ],
        correct: 1,
        explanation:
          'Synthesis means combining information from both texts to create a unified response, finding connections, patterns, and complementary points between them.',
      },
      {
        id: 'wjec-c2-m3-q2',
        question: 'Which mistake keeps a 1.5 answer in the lowest band?',
        options: [
          'Using too many short quotations',
          'Using details from only one of the two texts',
          'Naming which text each detail comes from',
          'Writing one sentence on each text',
        ],
        correct: 1,
        explanation:
          'An answer on one text stays in the lowest band. Use precise details from both texts, and make clear which text each comes from.',
      },
      {
        id: 'wjec-c2-m3-q3',
        question: 'How many marks is Question 1.5 (synthesis) worth?',
        options: ['3 marks', '4 marks', '10 marks', '20 marks'],
        correct: 1,
        explanation:
          'Question 1.5 is worth 4 marks and tests AO1, selecting and bringing together details from both texts. Keep it brief.',
      },
      {
        id: 'wjec-c2-m3-q4',
        question: 'Which of these is an effective connective phrase for synthesis?',
        options: [
          '"In Text A the writer says..."',
          '"This is echoed in Text B, where the writer also suggests..."',
          '"Moving on to the second text..."',
          '"Text B is about a different topic..."',
        ],
        correct: 1,
        explanation:
          '"This is echoed in Text B, where..." explicitly links the two texts and shows synthesis. Phrases like "Moving on to" signal separate discussion, not integration.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 - Language Analysis in Non-Fiction (1.2)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m4',
    title: 'Language Analysis in Non-Fiction (1.2)',
    duration: '50 min',
    content: `
<h2>1.2 - How Does the Writer Achieve a Purpose?</h2>

<p>Question 1.2 on Component 2 is worth <strong>10 marks</strong> and tests <strong>AO2</strong> - your ability to analyse how a writer uses language and structure to achieve effects in a non-fiction text. It is on the <strong>21st-century</strong> text: it asks how the writer tries to do something, for example persuade you or show what a person or event is like, and points you to what is said, the language, tone and structure, and other methods. Language analysis matters for the 19th-century text too: in 1.4, the 10-mark evaluation, your judgement should show how its language reveals the writer's feelings or attitudes.</p>

<div class="key-term"><strong>Key Term: Rhetoric</strong> - The art of effective or persuasive speaking and writing. Rhetorical techniques include repetition, rhetorical questions, tricolon (rule of three), direct address, hyperbole, emotive language, and anecdote. Non-fiction writers frequently use rhetoric to convince, persuade, or move their audience.</div>

<h3>Language Techniques in Non-Fiction</h3>
<p>Non-fiction texts use many of the same language techniques as fiction, plus some additional persuasive and rhetorical devices:</p>
<ul>
  <li><strong>Emotive language:</strong> Words chosen to provoke an emotional response: "suffering," "innocent," "devastating," "heroic."</li>
  <li><strong>Rhetorical questions:</strong> Questions asked for effect, not requiring an answer: "Are we really prepared to let this continue?"</li>
  <li><strong>Repetition/anaphora:</strong> Repeating a word or phrase for emphasis: "We will fight. We will resist. We will overcome."</li>
  <li><strong>Tricolon (rule of three):</strong> Grouping ideas in threes for rhythmic impact: "government of the people, by the people, for the people."</li>
  <li><strong>Direct address:</strong> Using "you" or "we" to involve the reader directly.</li>
  <li><strong>Statistics and evidence:</strong> Factual data used to support an argument and build credibility.</li>
  <li><strong>Anecdote:</strong> A short personal story used to illustrate a point and create an emotional connection.</li>
  <li><strong>Hyperbole:</strong> Deliberate exaggeration for emphasis: "the greatest disaster in human history."</li>
  <li><strong>Irony/sarcasm:</strong> Saying the opposite of what is meant, often for satirical or critical effect.</li>
  <li><strong>Imperative verbs:</strong> Commands that urge the reader to act: "Consider this." "Remember." "Act now."</li>
</ul>

<h3>Analysing 19th-Century Non-Fiction Language (for 1.4)</h3>
<p>Victorian and Romantic-era writers often use elaborate, formal language. When analysing their choices in your 1.4 evaluation:</p>
<ul>
  <li>Look for <strong>extended metaphors</strong> - 19th-century writers often sustain a comparison across several sentences.</li>
  <li>Note <strong>formal register and elevated diction</strong> - words like "endeavour," "hitherto," "countenance" reflect the period's conventions.</li>
  <li>Identify <strong>classical and biblical allusions</strong> - references to Greek mythology, the Bible, or famous historical figures.</li>
  <li>Consider <strong>sentence length and complexity</strong> - long, multi-clause sentences were the norm and often create a cumulative, persuasive effect.</li>
</ul>

<h3>Practice Analysis (19th-century text, as in 1.4)</h3>
<div class="text-extract">The press, sir, is the great engine of civilisation. Through its tireless industry, the humblest cottager may be furnished with intelligence from the farthest corners of the globe. A newspaper placed upon a kitchen table is a window thrown open to the world.
<div class="source">From a speech, 1872</div></div>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The speaker elevates the press through the metaphor "the great engine of civilisation," where "engine" connotes unstoppable mechanical power and progress - the press is not merely useful but a driving force behind society's advancement. The word "civilisation" positions the press as fundamental to human progress, implying that without it, society would stagnate. This is developed through the image of "the humblest cottager" being "furnished with intelligence from the farthest corners of the globe," where the contrast between "humblest" and "farthest corners" emphasises the press's democratising power - it bridges the gap between the most modest individual and the widest world. The verb "furnished" suggests the press provides knowledge as an essential commodity, like furnishing a home with necessities. Most strikingly, the metaphor "a window thrown open to the world" transforms the physical newspaper into a portal, and the dynamic verb "thrown" implies generosity and energy - the window is not merely opened but flung wide, suggesting the press offers knowledge freely and eagerly.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing 19th-century language, do not just note that it is "formal" or "old-fashioned." Explain <em>why</em> specific word choices are effective. The formality often serves a rhetorical purpose - it elevates the topic, establishes authority, or appeals to shared cultural values. Analyse the effect, not just the style.</div>

<div class="examiner-tip"><strong>Examiner Tip for 1.2:</strong> Track the 21st-century text paragraph by paragraph so you use all of it, and keep using the question's key word in your explanations. Facts and figures, quotations from experts and the order of ideas all count as methods.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Students sometimes dismiss 19th-century language as simply "posh" or "old." This misses the point entirely. Every word choice serves a purpose. A Victorian writer who uses "endeavour" instead of "try" is not just being formal - they are emphasising effort, determination, and seriousness. Analyse the <em>effect</em> of the register, not just the fact that it is formal.</div>

<div class="key-term"><strong>Key Term: Register</strong> - The level of formality in language, determined by the context, audience, and purpose of the text. A speech to Parliament uses a formal register; a blog post uses an informal register. Register includes vocabulary, sentence structure, tone, and mode of address.</div>
`,
    quiz: [
      {
        id: 'wjec-c2-m4-q1',
        question: 'What does Question 1.2 on Component 2 test?',
        options: [
          'Comparing two texts',
          'How a writer uses language and structure to achieve a purpose',
          'Retrieving information from a text',
          'Proofreading for errors',
        ],
        correct: 1,
        explanation:
          'Question 1.2 tests AO2: how the writer of the 21st-century text uses language, tone, structure and other methods to achieve a purpose and influence readers.',
      },
      {
        id: 'wjec-c2-m4-q2',
        question: 'What is a rhetorical question?',
        options: [
          'A question that requires a long answer',
          'A question asked for effect, not requiring an answer',
          'A question about rhetoric',
          'A question that only appears in speeches',
        ],
        correct: 1,
        explanation:
          'A rhetorical question is asked for effect rather than to receive an answer. It is used to make a point, provoke thought, or persuade the reader.',
      },
      {
        id: 'wjec-c2-m4-q3',
        question: 'What is a tricolon (rule of three)?',
        options: [
          'Repeating the same word three times',
          'Grouping three ideas or phrases together for rhythmic, persuasive impact',
          'Writing three paragraphs on the same topic',
          'Using three different techniques in one sentence',
        ],
        correct: 1,
        explanation:
          'A tricolon groups three words, phrases, or clauses together for rhythmic impact and persuasive power. Example: "government of the people, by the people, for the people."',
      },
      {
        id: 'wjec-c2-m4-q4',
        question: 'When analysing 19th-century language, what should you avoid doing?',
        options: [
          'Using quotations from the text',
          'Simply noting it is "formal" or "old-fashioned" without explaining the effect',
          'Identifying metaphors',
          "Discussing the writer's purpose",
        ],
        correct: 1,
        explanation:
          'Simply labelling 19th-century language as "formal" is not analysis. You must explain why specific word choices are effective - how the formality serves the writer\'s purpose and shapes the reader\'s response.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 - Comparing Viewpoints and Perspectives (1.6)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m5',
    title: 'Comparing Viewpoints and Perspectives (1.6)',
    duration: '55 min',
    content: `
<h2>1.6 - Comparing How Writers Convey Their Viewpoints</h2>

<p>Question 1.6, the last reading question on Component 2, is worth <strong>10 marks</strong> and tests <strong>AO3</strong> - your ability to compare writers' ideas and perspectives and how these are conveyed across two texts. It is one of the most challenging reading questions on Component 2 because it requires you to do three things simultaneously: identify each writer's viewpoint, analyse how they convey it, and compare the two approaches.</p>

<div class="key-term"><strong>Key Term: Viewpoint</strong> - A writer's attitude, opinion, or perspective on a topic. In non-fiction, the viewpoint is the position the writer takes - their argument, their bias, their beliefs. Viewpoint is revealed through word choice, tone, evidence selection, and rhetorical strategies.</div>

<div class="key-term"><strong>Key Term: Perspective</strong> - The angle from which a writer approaches a topic, shaped by their personal experience, social context, historical period, and cultural background. A 19th-century factory owner and a 21st-century journalist will have very different perspectives on child labour, even if both express concern.</div>

<h3>How 1.6 Questions Are Worded</h3>
<p>Typical 1.6 questions include:</p>
<ul>
  <li><em>"Compare how the two writers convey their different attitudes to [topic]."</em></li>
  <li><em>"Compare how the writers of Text A and Text B present their ideas and perspectives about [topic]."</em></li>
</ul>
<p>Notice the word <strong>"how"</strong> - you must not just say <em>what</em> each writer thinks, but <em>how</em> they convey their viewpoint through language, structure, and rhetorical choices.</p>

<h3>The Comparison Framework</h3>
<p>Structure your response using comparative points, not separate paragraphs for each text:</p>
<ol>
  <li><strong>Identify the viewpoints:</strong> What does each writer think about the topic? State this clearly at the start.</li>
  <li><strong>Compare a specific aspect:</strong> Choose one aspect (e.g. tone, use of evidence, emotional appeal) and show how each writer handles it differently.</li>
  <li><strong>Use comparative connectives:</strong> "While," "whereas," "in contrast," "similarly," "both writers...however."</li>
  <li><strong>Analyse methods:</strong> For each writer, identify a specific technique and explain how it conveys their viewpoint.</li>
  <li><strong>Evaluate effect:</strong> Which approach is more effective, and why? This shows sophistication.</li>
</ol>

<h3>Comparative Connectives</h3>
<ul>
  <li><strong>Similarity:</strong> "Similarly," "Both writers," "In the same way," "This is echoed by," "Likewise."</li>
  <li><strong>Difference:</strong> "In contrast," "Whereas," "However," "On the other hand," "While Text A...Text B."</li>
  <li><strong>Nuance:</strong> "Although both writers share a concern about..., they differ in," "Despite a shared focus on..., the methods diverge."</li>
</ul>

<div class="model-answer"><strong>Model Answer (Grade 8-9 - 1.6 excerpt):</strong> Both writers express concern about the reliability of news, but they convey this concern through markedly different methods reflecting their historical contexts. The 21st-century writer adopts an urgent, present-tense tone, using the inclusive pronoun "we" in "We scroll, we react, we move on" to implicate the reader directly in the problem. The short, staccato clauses mirror the rapid, fragmented consumption they describe, making the form of the writing enact its content. In contrast, the 19th-century speaker adopts a more measured, reflective tone, using formal diction and the conditional "speed and accuracy are not always companions" to express concern as a gentlemanly understatement rather than an alarm. Where the modern writer diagnoses a systemic failure driven by technology, the Victorian frames it as a moral lapse - "the public appetite for sensation" places responsibility on human nature rather than algorithms. This difference in attribution is revealing: the 21st-century writer sees the problem as structural and technological, while the 19th-century speaker sees it as a failure of professional ethics.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best 1.6 responses treat the comparison as a sustained conversation between the two texts, not as two separate analyses bolted together. Every paragraph should reference both writers, using comparative connectives to show how their viewpoints relate. Think of it as a dialogue: "Writer A says this, and Writer B responds by saying that."</div>

<h3>Considering Historical Context</h3>
<p>The two texts come from different centuries, so context matters:</p>
<ul>
  <li>A 19th-century writer's perspective is shaped by Victorian values, industrialisation, empire, and different social norms.</li>
  <li>A 21st-century writer's perspective reflects modern technology, globalisation, diversity, and contemporary debates.</li>
  <li>Noting how context shapes viewpoint demonstrates sophisticated understanding - but keep it brief and relevant. Do not write a history essay.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about each text separately: "In Text A, the writer thinks... In Text B, the writer thinks..." This is not comparison. Every point must explicitly compare the two writers, showing similarities, differences, or nuances in how they convey their viewpoints. Use comparative connectives throughout.</div>


<h3>Accuracy in Your Reading Answers</h3>
<p>Eduqas sets no separate proofreading task: technical accuracy (AO6) is marked in your two pieces of writing in Section B, and Module 6 shows you how to check them. Your reading answers are not marked for accuracy, but clear sentences make a comparison easier to follow, so keep each point readable: name the text, give the evidence, and say how the writer conveys the idea.</p>

`,
    quiz: [
      {
        id: 'wjec-c2-m5-q1',
        question: 'Which Assessment Objective does 1.6 test?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 2,
        explanation:
          "1.6 tests AO3 - comparing writers' ideas and perspectives and how these are conveyed across two or more texts.",
      },
      {
        id: 'wjec-c2-m5-q2',
        question: 'What does the word "how" in the 1.6 question require?',
        options: [
          'A summary of what each writer says',
          'Analysis of the methods each writer uses to convey their viewpoint',
          'A personal opinion on the topic',
          'Identification of factual information',
        ],
        correct: 1,
        explanation:
          '"How" requires you to analyse the methods (language, tone, rhetorical devices, evidence) each writer uses - not just what they think, but how they convey their viewpoint.',
      },
      {
        id: 'wjec-c2-m5-q3',
        question: 'What is the difference between viewpoint and perspective?',
        options: [
          'They mean the same thing',
          "Viewpoint is the writer's attitude; perspective is the angle shaped by their experience and context",
          'Viewpoint is about fiction; perspective is about non-fiction',
          'Perspective is always positive; viewpoint can be negative',
        ],
        correct: 1,
        explanation:
          "Viewpoint is the writer's specific attitude or opinion on the topic. Perspective is the broader angle shaped by their personal experience, historical period, and cultural background.",
      },
      {
        id: 'wjec-c2-m5-q4',
        question: 'What is the most important structural principle for a 1.6 response?',
        options: [
          'Write about Text A first, then Text B',
          'Compare both writers within each paragraph, using comparative connectives',
          'Focus on one text in much more detail than the other',
          'Write a conclusion comparing the two',
        ],
        correct: 1,
        explanation:
          'The best 1.6 responses compare both writers within each paragraph, using connectives like "whereas," "in contrast," and "similarly." Writing about texts separately is the most common error.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 - Proofreading Your Own Writing (AO6)
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m6',
    title: 'Proofreading Your Own Writing (AO6)',
    duration: '30 min',
    content: `
<h2>Proofreading Your Own Writing: AO6 in Section B</h2>

<p>Eduqas sets no separate proofreading question on Component 2, and Section A carries no marks for accuracy. <strong>AO6</strong>, technical accuracy, is marked in your own writing in Section B: <strong>8 of the 20 marks</strong> for each task, 16 of the 40 in all. The skill this module teaches, finding and correcting errors in spelling, punctuation, and grammar, is how you protect those marks. Practise it on passages with <strong>deliberate errors</strong> like the ones below, then use it on your own two pieces in the last minutes of each task.</p>

<div class="key-term"><strong>Key Term: Proofreading</strong> - The careful reading of a text to detect and correct errors in spelling, punctuation, grammar, and expression. In the exam you proofread your own writing; the practice passages here contain deliberate mistakes to train your eye.</div>

<h3>Types of Errors to Look For</h3>
<p>The errors students most often make fall into these categories:</p>

<h4>Spelling Errors</h4>
<ul>
  <li>Common misspellings: "recieve" (receive), "seperate" (separate), "definately" (definitely)</li>
  <li>Homophone confusion: there/their/they're, its/it's, your/you're, to/too/two, where/were/wear</li>
  <li>Double letter errors: "accomodation" (accommodation), "occured" (occurred), "embarassed" (embarrassed)</li>
</ul>

<h4>Punctuation Errors</h4>
<ul>
  <li>Missing or misplaced apostrophes: "the dog's lead" (possessive) vs "the dogs ran" (plural)</li>
  <li>Missing capital letters: proper nouns, sentence starts, titles</li>
  <li>Comma splices: two sentences joined by only a comma</li>
  <li>Missing commas after adverbials: "However the problem continued" → "However, the problem continued"</li>
</ul>

<h4>Grammar Errors</h4>
<ul>
  <li>Subject-verb agreement: "The group of students were" → "The group of students was"</li>
  <li>Tense inconsistency: switching between past and present without reason</li>
  <li>Wrong word form: "He walked slow" → "He walked slowly"</li>
  <li>Missing or incorrect prepositions: "different to" → "different from" (in formal writing)</li>
</ul>

<h3>Practice Proofreading Exercise</h3>
<div class="text-extract">Last Summer, me and my freinds went on a trip to North Wales. The whether was terrible and it rained almost everyday. Despite this we had a great time. The hotel we stayed in were really comfortable and the staff was very freindly. I definately want to go back their next year, although my freinds say they prefered going abroad. Its a matter of opinion I suppose but theirs nothing quite like the British countryside.</div>

<h3>Corrections</h3>
<ol>
  <li>"Summer" → <strong>"summer"</strong> - no capital letter needed for seasons.</li>
  <li>"me and my freinds" → <strong>"my friends and I"</strong> - correct pronoun order and spelling.</li>
  <li>"freinds" → <strong>"friends"</strong> - spelling error (i before e).</li>
  <li>"whether" → <strong>"weather"</strong> - homophone error.</li>
  <li>"everyday" → <strong>"every day"</strong> - two words when used as an adverb.</li>
  <li>"Despite this we" → <strong>"Despite this, we"</strong> - comma needed after adverbial.</li>
  <li>"stayed in were" → <strong>"stayed in was"</strong> - subject-verb agreement (hotel = singular).</li>
  <li>"freindly" → <strong>"friendly"</strong> - spelling error.</li>
  <li>"definately" → <strong>"definitely"</strong> - common misspelling.</li>
  <li>"their" → <strong>"there"</strong> - homophone error.</li>
  <li>"prefered" → <strong>"preferred"</strong> - double r before -ed.</li>
  <li>"Its" → <strong>"It's"</strong> - contraction of "it is" needs an apostrophe.</li>
  <li>"theirs" → <strong>"there's"</strong> - contraction of "there is."</li>
</ol>

<h3>More Practice: Two Passages</h3>
<p><strong>Passage 1 (6 errors):</strong></p>
<div class="text-extract">
The library is not just a building; its an institution of immense cultural value. In the 21st century, when digital access seems to offer everything, it's easy to overlook what physicle libraries provide. Their providing spaces for vulnerable members of the community - the homeless who can access heat and shelter, young people without stable homes, elderly residents who appreciate human contact. The council claim that budgets are tight. Yet the library serves hundreds of people weekly. If you was forced to choose between a library and a shopping centre, society would be vastly poorer whithout the former.
</div>
<ol>
  <li>"its an institution" → <strong>"it's an institution"</strong> - contraction of "it is."</li>
  <li>"physicle" → <strong>"physical"</strong> - spelling error.</li>
  <li>"Their providing" → <strong>"They're providing"</strong> - contraction of "they are."</li>
  <li>"The council claim" → <strong>"The council claims"</strong> - singular verb with a collective noun in formal writing.</li>
  <li>"If you was" → <strong>"If you were"</strong> - verb form with "you."</li>
  <li>"whithout" → <strong>"without"</strong> - spelling error.</li>
</ol>

<p><strong>Passage 2 (5 errors):</strong></p>
<div class="text-extract">
The city centre has changed dramatically over the past decade. Where there once stood small shops with individual character, their now large corporate chains. The local community has lost something invaluable: a sense of belonging and connection to their neighborhoods. Young people especially find they are struggling with isolation. Digital technology claims to connect us, yet it often isolates us further. If the high street had maintained its small businesses, shopper would feel more engaged with there community. The decline of the high street is not inevitably; we can choose to support local business and reverse this trend.
</div>
<ol>
  <li>"their now large corporate chains" → <strong>"there are now large corporate chains"</strong> - homophone error, and the verb is missing.</li>
  <li>"neighborhoods" → <strong>"neighbourhoods"</strong> - British spelling.</li>
  <li>"shopper would feel" → <strong>"shoppers would feel"</strong> - plural needed.</li>
  <li>"with there community" → <strong>"with their community"</strong> - homophone error.</li>
  <li>"not inevitably" → <strong>"not inevitable"</strong> - adjective, not adverb.</li>
</ol>

<p><strong>Common-mistake insight:</strong> These passages deliberately load homophones (their/there/they're) and verb agreement errors because these are the most common mistakes in student writing. Build a personal error-watch list of your frequent mistakes and scan for those specifically.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In the exam, keep the last few minutes of each 30-minute writing task to check it. Read slowly and carefully, looking for one type of error at a time: first scan for spelling, then punctuation, then grammar. Do not rush: accuracy is 8 of each task's 20 marks.</div>

<h3>Common Traps</h3>
<ul>
  <li><strong>Homophones:</strong> The most common error type in student writing. Learn the difference between commonly confused words.</li>
  <li><strong>Apostrophes:</strong> Know the difference between possessive ("the dog's bone"), plural ("the dogs ran"), and contraction ("it's = it is").</li>
  <li><strong>Comma after introductory elements:</strong> "However," "Despite this," "On the other hand," - all need commas.</li>
  <li><strong>Subject-verb agreement:</strong> Collective nouns (team, group, family) take a singular verb in formal English.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Rushing the final check because the writing is finished. Students who skim their own work often miss subtle errors like "everyday" vs "every day" or "its" vs "it's." Read every word carefully: your own errors are the easiest to overlook, because you read what you meant to write.</div>
`,
    quiz: [
      {
        id: 'wjec-c2-m6-q1',
        question: 'How many of the 40 Section B marks are for technical accuracy (AO6)?',
        options: ['8 marks', '16 marks', '20 marks', '40 marks'],
        correct: 1,
        explanation:
          'Each writing task is worth 20 marks, 8 of them for AO6, so accuracy is 16 of the 40 marks in Section B. Eduqas sets no separate proofreading question: you earn these marks in your own writing.',
      },
      {
        id: 'wjec-c2-m6-q2',
        question: 'What is the difference between "its" and "it\'s"?',
        options: [
          'They mean the same thing',
          '"Its" is possessive (belonging to it); "it\'s" is a contraction of "it is"',
          '"It\'s" is possessive; "its" is a contraction',
          '"Its" is singular; "it\'s" is plural',
        ],
        correct: 1,
        explanation:
          '"Its" (no apostrophe) means "belonging to it." "It\'s" (with apostrophe) is a contraction of "it is" or "it has." This is one of the most commonly tested errors.',
      },
      {
        id: 'wjec-c2-m6-q3',
        question: 'What type of error is "The team were playing well"?',
        options: [
          'Spelling error',
          'Punctuation error',
          'Subject-verb agreement error',
          'Not an error',
        ],
        correct: 2,
        explanation:
          '"Team" is a collective noun and takes a singular verb in formal English. The correct form is "The team was playing well."',
      },
      {
        id: 'wjec-c2-m6-q4',
        question: 'What is the best strategy for proofreading your writing?',
        options: [
          'Read the passage once quickly',
          'Scan for one type of error at a time: spelling, then punctuation, then grammar',
          'Only look for spelling mistakes',
          'Rewrite the entire passage from scratch',
        ],
        correct: 1,
        explanation:
          'Scanning for one category of error at a time (spelling, then punctuation, then grammar) is the most systematic and effective approach.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 - Transactional Writing: Forms and Conventions
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m7',
    title: 'Transactional Writing: Forms and Conventions',
    duration: '55 min',
    content: `
<h2>Section B - Transactional/Persuasive Writing: Mastering Form and Purpose</h2>

<p>Section B of Component 2 requires you to complete <strong>two compulsory transactional writing tasks</strong>, 2.1 and 2.2, worth <strong>20 marks each</strong> (12 for AO5 and 8 for AO6), in about 300 to 400 words each. Transactional writing is writing that has a clear <strong>purpose</strong>, <strong>audience</strong>, and <strong>form</strong>. The tasks will specify all three, and you must adapt your writing accordingly.</p>

<div class="key-term"><strong>Key Term: Transactional Writing</strong> - Writing that communicates with a specific purpose and audience. Unlike creative writing, transactional writing aims to inform, persuade, advise, argue, explain, or instruct. The form (letter, article, speech, report, review) shapes the conventions you must follow.</div>

<h3>Common Forms and Their Conventions</h3>

<h4>Letter (Formal)</h4>
<ul>
  <li>Address and date (optional in exam, but shows awareness)</li>
  <li>"Dear Sir/Madam" or "Dear Mr/Mrs [Name]"</li>
  <li>Formal register throughout</li>
  <li>Clear paragraphing with one point per paragraph</li>
  <li>"Yours faithfully" (if addressed to Sir/Madam) or "Yours sincerely" (if addressed by name)</li>
</ul>

<h4>Newspaper/Magazine Article</h4>
<ul>
  <li>Engaging headline</li>
  <li>Strapline or subheading (optional)</li>
  <li>Opening paragraph that hooks the reader and establishes the topic</li>
  <li>Journalistic style: clear, direct, varied sentence lengths</li>
  <li>Can include expert quotations (invented), statistics, and anecdotes</li>
  <li>A strong concluding paragraph</li>
</ul>

<h4>Speech</h4>
<ul>
  <li>Address the audience directly: "Ladies and gentlemen," "Fellow students," "Members of the council"</li>
  <li>Use rhetorical techniques: tricolons, rhetorical questions, repetition, direct address ("you")</li>
  <li>Conversational but authoritative tone</li>
  <li>Build to a powerful conclusion with a call to action</li>
  <li>Consider rhythm and pace - the writing should sound good when read aloud</li>
</ul>

<h4>Review</h4>
<ul>
  <li>Opening that identifies the subject (book, film, restaurant, event)</li>
  <li>Balance of description, opinion, and analysis</li>
  <li>Personal voice with clear evaluation (what works, what doesn't)</li>
  <li>Engaging, often witty or informal tone</li>
  <li>A concluding recommendation</li>
</ul>

<h4>Report</h4>
<ul>
  <li>Title: "Report on [topic]" or a formal heading</li>
  <li>Clear, formal register</li>
  <li>Subheadings to organise sections</li>
  <li>Objective, balanced tone (present evidence, then conclusions)</li>
  <li>Recommendations or conclusions at the end</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC examiners reward students who demonstrate clear awareness of <strong>form</strong>. If the task asks for a letter, use letter conventions. If it asks for a speech, address the audience and use rhetorical techniques. Even small touches - a headline for an article, "Yours sincerely" for a letter - signal to the examiner that you understand the form.</div>

<h3>Purpose and Audience</h3>
<p>Every transactional task specifies a purpose and audience. Your tone, vocabulary, and register must match:</p>
<ul>
  <li><strong>Writing to a headteacher</strong> = formal register, respectful tone, balanced argument.</li>
  <li><strong>Writing to peers</strong> = semi-formal, more personal, can use humour and direct address.</li>
  <li><strong>Writing for a newspaper</strong> = journalistic tone, clear and punchy, broad audience awareness.</li>
  <li><strong>Writing to a council/MP</strong> = formal, evidence-based, persuasive but measured.</li>
</ul>

<div class="model-answer"><strong>Model Answer - Speech Opening (Grade 8-9):</strong> Good morning, everyone. I want to begin with a question - and I want you to answer it honestly, even if only to yourselves. When was the last time you read a book? Not a text message. Not an Instagram caption. Not the back of a cereal packet while you waited for the toast to pop. A book. An actual, physical, ink-on-paper book. I suspect - and forgive me for this - that many of you are struggling to remember. And that, I believe, is a problem we can no longer afford to ignore.</div>

<p>This opening demonstrates: direct address ("everyone," "you"), rhetorical question, listing for effect, humour, inclusive pronoun ("we"), and a clear statement of the writer's position. It is engaging, purposeful, and appropriate for a speech.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the specified form. If the task asks for an article and you write a letter, you will lose marks for AO5 regardless of how well you write. Always check: <strong>What form?</strong> (letter, article, speech, etc.) <strong>What purpose?</strong> (persuade, inform, advise, argue) <strong>What audience?</strong> (headteacher, peers, council, public)</div>

<div class="key-term"><strong>Key Term: Register</strong> - The level of formality in language, adapted to suit the audience and purpose. A formal letter to a headteacher requires different vocabulary, tone, and sentence structure than a magazine article for teenagers. Matching your register to the task demonstrates writing skill and audience awareness.</div>

<h3>Worked Example: Full Transactional Task with Annotated Response</h3>

<h4>Task: Formal Letter (2.1 - 20 marks)</h4>
<p><strong>Scenario:</strong> Write a formal letter to your local council arguing for better public transport in your area. Your purpose is to persuade. Your audience is a local councillor. Your form is a formal letter.</p>

<h4>Model Response (Grade 8)</h4>
<div style="border: 2px solid #3498db; padding: 15px; margin: 20px 0; background-color: #eaf2f8;">
<p style="text-align: right;">
123 Oak Street<br>
Manchester<br>
M1 1AA<br>
15 March 2026
</p>

<p>Councillor James Patterson<br>
Manchester City Council<br>
Town Hall<br>
Manchester<br>
M3 1AA</p>

<p>Dear Councillor Patterson,</p>

<p>I am writing to urge the council to invest in improving public transport in our area. Currently, bus services run only hourly after 6 p.m., making it impossible for students, shift workers, and elderly residents to travel safely and reliably in the evenings. This is not merely an inconvenience - it is a barrier to social participation and economic opportunity.</p>

<p>The data speaks for itself. According to a recent survey by Transport Focus, 73% of residents in our postcode feel that current services are inadequate. Neighbouring areas with more frequent buses have seen a 15% increase in evening footfall to local businesses. Investment in transport yields tangible returns: improved access to employment, reduced car dependency, and stronger community cohesion.</p>

<p>I understand that budgets are constrained, but I would argue that improved public transport is not a luxury but a necessity. Young people without cars cannot access evening activities or part-time work. Elderly residents cannot attend social events or medical appointments. These are not edge cases - they represent a significant portion of our population.</p>

<p>I urge you to prioritise this issue in the next budget cycle. The cost of investment is far outweighed by the social and economic benefits. I would welcome the opportunity to discuss this further with you.</p>

<p>Yours sincerely,</p>

<p>Alex Johnson</p>
</div>

<h4>Examiner Commentary: Grade 8 Analysis (AO5: 9/12 marks)</h4>
<div style="border-left: 4px solid #27ae60; padding-left: 15px; margin: 20px 0; background-color: #f0fdf4;">
<strong>Strengths:</strong>
<ul>
<li><strong>Form:</strong> Correct letter conventions (address, date, formal salutation, closing). Shows clear awareness of form.</li>
<li><strong>Purpose (Persuasion):</strong> Clear argument supported by evidence (statistics, counterargument). Moves reader from problem → evidence → solution.</li>
<li><strong>Audience Awareness:</strong> Formal register throughout. Addresses the councillor respectfully. Uses "I understand that budgets are constrained" - shows awareness of audience concerns.</li>
<li><strong>Structure:</strong> Clear paragraphing. Each paragraph develops one point: (1) Problem statement, (2) Evidence, (3) Counterargument, (4) Call to action.</li>
<li><strong>Persuasive Techniques:</strong> Data (73%, 15%), rhetorical question, repetition ("cannot access," "cannot attend"), direct appeal to values (community, opportunity).</li>
</ul>

<strong>For Higher Marks (AO5 11-12):</strong> Could use more varied persuasive techniques (anecdote, emotive language). The conclusion could be more powerful. More sophisticated vocabulary in places.
</div>

<h3>Band by Band: Each Writing Task (AO5 12 marks, AO6 8)</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr style="background-color: #ecf0f1;"><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>Band</strong></th><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>AO5 (/12)</strong></th><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>AO6 (/8)</strong></th><th style="border: 1px solid #bdc3c7; padding: 10px;"><strong>What it looks like</strong></th></tr>
<tr><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>5</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">11-12</td><td style="border: 1px solid #bdc3c7; padding: 10px;">8</td><td style="border: 1px solid #bdc3c7; padding: 10px;">Ambitious, polished writing: the tone is exactly right for the reader, the ideas are developed in depth and persuade, and accuracy is close to faultless, with a wide, precise vocabulary.</td></tr>
<tr style="background-color: #ecf0f1;"><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>4</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">8-10</td><td style="border: 1px solid #bdc3c7; padding: 10px;">6-7</td><td style="border: 1px solid #bdc3c7; padding: 10px;">Right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure. Sentences are varied for effect and errors are rare.</td></tr>
<tr><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>3</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">5-7</td><td style="border: 1px solid #bdc3c7; padding: 10px;">4-5</td><td style="border: 1px solid #bdc3c7; padding: 10px;">Fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case. Mostly accurate, with a mix of sentences and punctuation.</td></tr>
<tr style="background-color: #ecf0f1;"><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>2</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">3-4</td><td style="border: 1px solid #bdc3c7; padding: 10px;">2-3</td><td style="border: 1px solid #bdc3c7; padding: 10px;">Aware of the purpose and reader, with a few reasons and paragraphs, though points are not developed. Sentences vary a little and most spelling is right.</td></tr>
<tr><td style="border: 1px solid #bdc3c7; padding: 10px;"><strong>1</strong></td><td style="border: 1px solid #bdc3c7; padding: 10px;">1-2</td><td style="border: 1px solid #bdc3c7; padding: 10px;">1</td><td style="border: 1px solid #bdc3c7; padding: 10px;">Some idea of the form and the reader, but little to say and ideas in a simple order. Sentences are mostly alike and errors are frequent.</td></tr>
</table>

<h3>Persuasive Techniques for Transactional Writing</h3>

<h4>1. Evidence-Based Persuasion</h4>
<p><strong>Weak:</strong> "Public transport is bad and the council should improve it."</p>
<p><strong>Strong:</strong> "According to a 2025 survey by Transport Focus, 73% of residents in our area report that current services are inadequate. Investment in transport has yielded a 15% increase in evening footfall to local businesses in neighbouring areas."</p>
<p><strong>Why It Works:</strong> Specific data (real percentages, real surveys) is persuasive. Comparative evidence (neighbouring areas) strengthens the argument.</p>

<h4>2. Rhetorical Questions</h4>
<p><strong>Example:</strong> "How can young people without cars access evening employment? How can elderly residents attend social events or medical appointments?"</p>
<p><strong>Why It Works:</strong> Rhetorical questions engage the reader and force them to consider the problem from your perspective. They create a sense of shared understanding.</p>

<h4>3. Counterargument and Concession</h4>
<p><strong>Example:</strong> "I understand that budgets are constrained, but improved public transport is not a luxury - it is a necessity."</p>
<p><strong>Why It Works:</strong> Acknowledging the audience's concerns (budget constraints) before refuting them makes your argument more credible and respectful. It shows you understand their position.</p>

<h4>4. Anecdote and Personal Example</h4>
<p><strong>Example:</strong> "My sister, who works evening shifts at the hospital, has missed social events and even medical appointments because buses stop running at 9 p.m. Her experience is not unique."</p>
<p><strong>Why It Works:</strong> Personal stories make abstract problems concrete and emotional. They help readers connect to the issue.</p>

<h4>5. Call to Action</h4>
<p><strong>Example:</strong> "I urge the council to prioritize improved public transport in the next budget cycle. I would welcome the opportunity to discuss this further."</p>
<p><strong>Why It Works:</strong> A clear call to action moves the reader from agreement to commitment. It suggests what you want them to do next.</p>

<h3>Common Transactional Writing Mistakes</h3>

<h4>Mistake 1: Forgetting Form Conventions</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> Writing a formal letter but using "Hi!" as a greeting and forgetting the signature line.
<br><strong>Issue:</strong> Breaks the form. Examiners reward form awareness.
<br><strong>Better:</strong> Use "Dear Sir/Madam" or "Dear Mr./Ms. [Name]" and close with "Yours sincerely" or "Yours faithfully."
<br><strong>WJEC Tip:</strong> Spend 30 seconds checking: Does my writing match the required form?
</div>

<h4>Mistake 2: Mismatching Tone to Audience</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> Writing to a headteacher in casual, slang-filled language.
<br><strong>Issue:</strong> Shows lack of audience awareness.
<br><strong>Better:</strong> Formal register, respectful tone, complete sentences.
<br><strong>WJEC Tip:</strong> Always ask: Who am I writing to? What tone is appropriate?
</div>

<h4>Mistake 3: Weak or No Evidence</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> "We should improve public transport because it is important."
<br><strong>Issue:</strong> No evidence. No persuasion.
<br><strong>Better:</strong> "According to a 2024 survey, 73% of residents feel public transport is inadequate. Investment yields concrete returns: increased business footfall, reduced car dependency, and improved social inclusion."
<br><strong>WJEC Tip:</strong> In exam conditions, you can invent realistic-sounding data. Make it specific (percentages, named surveys) but plausible.
</div>

<h4>Mistake 4: No Clear Purpose or Call to Action</h4>
<div style="border-left: 4px solid #e74c3c; padding-left: 15px; margin: 20px 0;">
<strong>Weak:</strong> Ending a persuasive letter with "I hope you read this letter." No clear request.
<br><strong>Issue:</strong> Fails to persuade. No direction for the reader.
<br><strong>Better:</strong> "I urge the council to prioritize improved public transport in the next budget cycle. I would welcome the opportunity to discuss this further."
<br><strong>WJEC Tip:</strong> Every transactional task has a purpose. Make sure it's clear what you want the reader to do.
</div>

<h3>Step-by-Step Transactional Writing Guide (Exam Conditions)</h3>

<ol style="font-size: 1.05em; line-height: 1.8;">
<li><strong>Identify the task requirements (1 min):</strong> Form? Purpose? Audience? Write these down.</li>
<li><strong>Plan your response (about 5 min):</strong> Key points in order. Evidence or examples. Persuasive techniques.</li>
<li><strong>Write in the correct form.</strong> Begin with any necessary form conventions (date, address, salutation).</li>
<li><strong>Match your register to the audience.</strong> Formal for authority figures, semi-formal for peers, journalistic for newspapers.</li>
<li><strong>Develop your purpose throughout.</strong> If persuading, use evidence, rhetorical questions, counterargument. If informing, be clear and well-organized.</li>
<li><strong>Include a strong opening.</strong> Hook the reader. Establish your main point or question.</li>
<li><strong>Use varied sentence length.</strong> Short sentences create impact. Longer sentences develop ideas.</li>
<li><strong>Conclude with a call to action or summary.</strong> What do you want the reader to do or understand?</li>
<li><strong>Proofread for SPaG (5 min).</strong> Check form conventions, punctuation (especially in letters and speeches), and spelling.</li>
</ol>

<h3>Grade 5 vs. Grade 9: Side-by-Side Comparison</h3>

<h4>Same Task - Two Responses</h4>
<p><strong>Task:</strong> Write a formal letter to your school's headteacher arguing for a later start time to the school day.</p>

<h4>Grade 5 Response (Acceptable)</h4>
<div style="border: 2px solid #f39c12; padding: 15px; margin: 15px 0; background-color: #fef5e7;">
<p>Dear Headteacher,</p>
<p>I am writing to ask you to consider starting school later. Many students are tired in the morning and a later start would help. Students would be more focused in lessons. It would also help with mental health. Other schools have done this and it works. I think you should seriously consider this proposal.</p>
<p>Yours sincerely,<br>
A Student</p>
</div>

<h4>Grade 8-9 Response (Excellent)</h4>
<div style="border: 2px solid #27ae60; padding: 15px; margin: 15px 0; background-color: #d5f4e6;">
<p>123 High Street<br>
Manchester<br>
M1 1AA<br>
15 March 2026</p>

<p>Mr/Ms [Name]<br>
[School Name]<br>
Manchester<br>
M2 1AA</p>

<p>Dear Mr/Ms [Name],</p>

<p>I am writing to propose a shift in our school's start time from 8:30 a.m. to 9:00 a.m. This change, supported by extensive research, would significantly improve student wellbeing and academic performance.</p>

<p>Adolescent sleep science is clear: teenage circadian rhythms naturally shift later during puberty, a phenomenon known as "sleep phase delay." The American Academy of Pediatrics recommends an 8:30 a.m. or later start for secondary schools specifically to accommodate this biological reality. Currently, our students are fighting against their own biology, arriving at school sleep-deprived. A 30-minute shift would allow students the extra rest they require for cognitive function, emotional regulation, and physical health.</p>

<p>The evidence is compelling. Schools that have implemented later start times report: improved attendance (average 2% increase), higher academic achievement (particularly in younger years), and measurably better mental health outcomes (25% reduction in depression-related absences, according to a 2023 study by the Royal College of Psychiatrists). Our local authority's 2024 review of school start times supports this data.</p>

<p>I recognise the potential concerns: transport logistics, staff schedules, and extracurricular activities. However, many schools have navigated these challenges successfully. I would welcome the opportunity to discuss this proposal further and to help identify solutions to any implementation concerns.</p>

<p>I urge you to consider this evidence-based proposal. The cost of implementation is minimal compared to the demonstrable benefits for student wellbeing and achievement.</p>

<p>Yours sincerely,<br>
[Student Name]</p>
</div>

<p><strong>Key Differences:</strong></p>
<ul>
<li><strong>Form:</strong> Grade 9 includes full letter conventions (address, date). Grade 5 uses minimal form.</li>
<li><strong>Evidence:</strong> Grade 9 cites specific research (sleep phase delay, American Academy of Pediatrics, percentages). Grade 5 makes vague claims ("other schools have done this").</li>
<li><strong>Sophistication:</strong> Grade 9 uses technical language appropriately ("circadian rhythms," "sleep phase delay"). Grade 5 uses simple language.</li>
<li><strong>Structure:</strong> Grade 9 develops multiple points (science, evidence, counterargument, call to action). Grade 5 lists points without development.</li>
<li><strong>Counterargument:</strong> Grade 9 acknowledges potential concerns before refuting them. Grade 5 makes no acknowledgment of audience concerns.</li>
<li><strong>Persuasiveness:</strong> Grade 9 is compelling because it combines evidence, science, empathy, and practical awareness. Grade 5 relies on assertion.</li>
</ul>

`,
    quiz: [
      {
        id: 'wjec-c2-m7-q1',
        question: 'How many writing tasks must you complete in Section B of Component 2?',
        options: ['One', 'Two', 'Three', 'Choose one from three'],
        correct: 1,
        explanation:
          'You must complete both 2.1 and 2.2, worth 20 marks each. Both are compulsory, and each sets its own form and reader.',
      },
      {
        id: 'wjec-c2-m7-q2',
        question: 'What sign-off should you use in a formal letter addressed to "Dear Sir/Madam"?',
        options: ['Yours sincerely', 'Yours faithfully', 'Kind regards', 'Best wishes'],
        correct: 1,
        explanation:
          '"Yours faithfully" is used when you address the recipient as "Dear Sir/Madam" (unknown name). "Yours sincerely" is used when you address them by name.',
      },
      {
        id: 'wjec-c2-m7-q3',
        question: 'What three things does every transactional writing task specify?',
        options: [
          'Length, font, and style',
          'Purpose, audience, and form',
          'Topic, word count, and deadline',
          'Tone, register, and vocabulary',
        ],
        correct: 1,
        explanation:
          'Every task specifies a purpose (persuade, inform, etc.), an audience (headteacher, peers, public), and a form (letter, speech, article, etc.). You must adapt your writing to match all three.',
      },
      {
        id: 'wjec-c2-m7-q4',
        question: 'Which rhetorical techniques are particularly important in speech writing?',
        options: [
          'Statistics and footnotes',
          'Tricolons, rhetorical questions, repetition, and direct address',
          'Subheadings and bullet points',
          'Complex vocabulary and long sentences',
        ],
        correct: 1,
        explanation:
          'Speeches benefit from rhetorical techniques that create rhythm and engagement: tricolons (rule of three), rhetorical questions, repetition, and direct address ("you," "we").',
      },
      {
        id: 'wjec-c2-m7-q5',
        question:
          'What happens if you write in the wrong form (e.g. a letter when the task asks for an article)?',
        options: [
          'You get zero marks',
          'You lose marks for AO5 regardless of writing quality',
          'The examiner ignores the form',
          'You only lose AO6 marks',
        ],
        correct: 1,
        explanation:
          'Writing in the wrong form means you have not met the task requirements and will lose marks for AO5 (content and organisation). Always check the specified form before writing.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 - Persuasive Writing Techniques
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m8',
    title: 'Persuasive Writing Techniques',
    duration: '50 min',
    content: `
<h2>Persuasive Writing - Crafting a Compelling Argument</h2>

<p>Many Component 2 writing tasks require you to <strong>persuade</strong> or <strong>argue</strong>. Whether you are writing a speech, a letter, or an article, the ability to build a convincing argument is essential. This module covers the key techniques that transform competent writing into compelling, high-scoring persuasion.</p>

<div class="key-term"><strong>Key Term: Persuasive Writing</strong> - Writing that aims to convince the reader to adopt a particular viewpoint, take an action, or change their behaviour. Persuasion uses a combination of logical argument, emotional appeal, and credibility to influence the audience.</div>

<h3>The Three Pillars of Persuasion</h3>
<p>Classical rhetoric identifies three modes of persuasion, and the best transactional writing uses all three:</p>
<ul>
  <li><strong>Ethos (credibility):</strong> Establishing your authority or trustworthiness. Use a confident, knowledgeable tone. Reference evidence, experts, or personal experience. Show you understand the opposing viewpoint.</li>
  <li><strong>Pathos (emotion):</strong> Appealing to the reader's feelings. Use emotive language, anecdotes, vivid imagery, and direct address. Make the reader <em>feel</em> something - concern, outrage, sympathy, hope.</li>
  <li><strong>Logos (logic):</strong> Using reason, evidence, and logical argument. Present facts, statistics, cause-and-effect reasoning, and structured arguments. Make the reader <em>think</em> your position is rational and well-evidenced.</li>
</ul>

<h3>Persuasive Techniques Toolkit</h3>
<ul>
  <li><strong>Rhetorical questions:</strong> "Is this really the future we want for our children?" - Forces the reader to engage with the issue.</li>
  <li><strong>Tricolon (rule of three):</strong> "It is unfair, it is unnecessary, and it is unacceptable." - Creates rhythm and emphasis.</li>
  <li><strong>Anecdote:</strong> "Last Tuesday, I watched a Year 7 student sit alone at lunch for the third day in a row." - Makes abstract issues personal and real.</li>
  <li><strong>Statistics:</strong> "A recent study found that 73% of teenagers report feeling anxious about social media." - Adds credibility.</li>
  <li><strong>Emotive language:</strong> "vulnerable," "devastating," "innocent," "crisis" - Stirs emotional response.</li>
  <li><strong>Counter-argument and rebuttal:</strong> "Some may argue that... However, this fails to account for..." - Shows balanced thinking and strengthens your position.</li>
  <li><strong>Inclusive pronouns:</strong> "We must act." "This affects us all." - Creates unity and shared responsibility.</li>
  <li><strong>Imperative verbs:</strong> "Consider this." "Imagine a world where." "Act now." - Directs and energises the reader.</li>
  <li><strong>Hyperbole:</strong> "The greatest injustice of our generation." - Used carefully, exaggeration creates urgency.</li>
  <li><strong>Contrast and antithesis:</strong> "While some enjoy privilege, others endure poverty." - Highlights inequality or injustice.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC examiners value <strong>sophistication of argument</strong> over the number of techniques used. A response that presents a nuanced argument - acknowledging counter-arguments and offering thoughtful rebuttals - will score higher than one that simply lists persuasive devices. The best writing feels like a genuine, intelligent argument, not a textbook exercise.</div>

<h3>Structuring a Persuasive Piece</h3>
<ol>
  <li><strong>Opening hook:</strong> Grab the reader's attention with a striking fact, question, anecdote, or bold statement.</li>
  <li><strong>State your position:</strong> Make your viewpoint clear early on.</li>
  <li><strong>Body paragraphs:</strong> Each paragraph presents one reason or argument, supported by evidence, example, or emotional appeal. Use topic sentences to guide the reader.</li>
  <li><strong>Counter-argument:</strong> Acknowledge the opposing view and explain why it is flawed or incomplete. This strengthens your credibility.</li>
  <li><strong>Conclusion:</strong> End with a powerful final statement, call to action, or return to your opening image. Leave a lasting impression.</li>
</ol>

<div class="model-answer"><strong>Model Answer - Persuasive Paragraph (Grade 8-9):</strong> Consider, for a moment, the students in this very room. According to the Mental Health Foundation, one in six young people will experience a mental health problem in any given year. That means that in a class of thirty, five of your classmates - five people you sit beside, share jokes with, walk past in the corridor - are struggling with something they may never talk about. And yet our school's mental health support consists of a single part-time counsellor, available by appointment only, with a waiting list that stretches into weeks. Is this adequate? Is this what we mean when we say we value the wellbeing of our students? I would argue - respectfully but firmly - that it is not. We can do better. We must do better.</div>

<p>This paragraph combines: statistics (ethos/logos), direct address and inclusive pronouns (pathos), rhetorical questions, a counter-argument structure ("And yet"), and a powerful call to action. The tone is measured but passionate - exactly what examiners reward.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Using an aggressive or ranting tone. Persuasion is not the same as shouting. Students who write "THIS IS OUTRAGEOUS AND MUST STOP NOW!!!" undermine their credibility. The most effective persuasion is calm, reasoned, and confident - with well-placed moments of emotion. Think of a barrister in court, not a protester with a megaphone.</div>

<div class="key-term"><strong>Key Term: Counter-argument</strong> - Acknowledging the opposing viewpoint before refuting it. Including a counter-argument shows balanced thinking and actually strengthens your position because it demonstrates you have considered alternative perspectives and found them wanting.</div>
`,
    quiz: [
      {
        id: 'wjec-c2-m8-q1',
        question: 'What are the three classical pillars of persuasion?',
        options: [
          'Introduction, body, conclusion',
          'Ethos (credibility), pathos (emotion), logos (logic)',
          'Language, structure, form',
          'Purpose, audience, register',
        ],
        correct: 1,
        explanation:
          'The three pillars are ethos (establishing credibility), pathos (appealing to emotions), and logos (using logic and evidence). The best persuasive writing combines all three.',
      },
      {
        id: 'wjec-c2-m8-q2',
        question: 'Why should you include a counter-argument in persuasive writing?',
        options: [
          'It weakens your argument and shows uncertainty',
          'It shows balanced thinking and actually strengthens your position',
          'The examiner requires exactly one counter-argument',
          'It fills space and increases your word count',
        ],
        correct: 1,
        explanation:
          'Including a counter-argument shows you have considered opposing views and found them lacking. This strengthens your credibility and demonstrates sophistication of thought.',
      },
      {
        id: 'wjec-c2-m8-q3',
        question: 'What tone should persuasive writing adopt?',
        options: [
          'Aggressive and confrontational',
          'Calm, reasoned, and confident with well-placed moments of emotion',
          'Entirely neutral and objective',
          'Informal and humorous throughout',
        ],
        correct: 1,
        explanation:
          'The most effective persuasion is calm, reasoned, and confident. Aggressive or ranting tones undermine credibility. Well-placed emotional moments are more powerful than sustained anger.',
      },
      {
        id: 'wjec-c2-m8-q4',
        question: 'What is "ethos" in persuasive writing?',
        options: [
          'Appealing to emotions',
          'Using logical evidence',
          'Establishing credibility and trustworthiness',
          'Creating a narrative structure',
        ],
        correct: 2,
        explanation:
          'Ethos means establishing your credibility or authority. This is achieved through a confident, knowledgeable tone, referencing evidence, and demonstrating understanding of the topic.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 - Transactional Writing: SPaG and Accuracy
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m9',
    title: 'Transactional Writing: Accuracy and Crafting',
    duration: '45 min',
    content: `
<h2>Technical Accuracy in Transactional Writing</h2>

<p>Both writing tasks, 2.1 and 2.2, are assessed for <strong>AO6 - technical accuracy</strong> alongside AO5 (content and organisation). Each task is worth 20 marks: <strong>12 for AO5</strong> and <strong>8 for AO6</strong>. Combined, AO6 is worth <strong>16 marks across Section B</strong> - enough to make the difference between grades.</p>

<div class="key-term"><strong>Key Term: Discourse Markers</strong> - Words and phrases that signal the direction of an argument and help the reader follow the logic. Examples include "Furthermore," "However," "Consequently," "In addition," "On the other hand," "Nevertheless," "In conclusion." Effective use of discourse markers demonstrates sophisticated organisation.</div>

<h3>Crafting Effective Paragraphs</h3>
<p>Each paragraph in transactional writing should follow a clear pattern:</p>
<ol>
  <li><strong>Topic sentence:</strong> Introduce the main point of the paragraph. This guides the reader and shows clear organisation.</li>
  <li><strong>Development:</strong> Expand on the point with evidence, examples, or explanation.</li>
  <li><strong>Clincher sentence:</strong> End the paragraph with a strong sentence that reinforces the point or transitions to the next.</li>
</ol>

<h3>Varying Sentence Openings</h3>
<p>Beginning every sentence with "I think" or "The" is a hallmark of weaker writing. Vary your openings to create rhythm and sophistication:</p>
<ul>
  <li><strong>Adverbial opener:</strong> "Undeniably, the evidence points to..."</li>
  <li><strong>Participle opener:</strong> "Having considered the alternatives, I believe..."</li>
  <li><strong>Conditional opener:</strong> "If we continue on this path..."</li>
  <li><strong>Prepositional opener:</strong> "In the face of growing evidence..."</li>
  <li><strong>Interrogative opener:</strong> "Have we truly exhausted every option?"</li>
</ul>

<h3>Ambitious Vocabulary for Transactional Writing</h3>
<p>Using precise, varied vocabulary demonstrates AO6 competence. Replace vague words with specific alternatives:</p>
<ul>
  <li>"Good" → "beneficial," "commendable," "valuable," "constructive"</li>
  <li>"Bad" → "detrimental," "harmful," "counterproductive," "damaging"</li>
  <li>"Important" → "crucial," "fundamental," "indispensable," "paramount"</li>
  <li>"Think" → "believe," "contend," "maintain," "assert," "argue"</li>
  <li>"Show" → "demonstrate," "illustrate," "reveal," "highlight"</li>
  <li>"Big" → "substantial," "significant," "considerable," "extensive"</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC examiners reward "increasingly sophisticated" vocabulary - but only when it is used accurately and naturally. Forcing in complex words where simpler ones would be more effective makes your writing feel awkward. The goal is precision and variety, not showing off. Choose the <em>right</em> word, not the longest one.</div>

<h3>Model Paragraph: Demonstrating Craft</h3>
<div class="model-answer"><strong>Model Answer (Grade 8-9 - Article paragraph):</strong> Furthermore, the environmental cost of fast fashion is staggering. According to the United Nations, the fashion industry is responsible for approximately 10% of global carbon emissions - more than all international flights and maritime shipping combined. Every year, an estimated 92 million tonnes of textile waste is generated, much of it destined for landfill sites in developing countries that had no part in producing it. This is not merely an environmental issue; it is a moral one. When we purchase a five-pound t-shirt from an online retailer, we are not securing a bargain - we are transferring the cost to someone else, whether that is the garment worker in Dhaka earning poverty wages or the community living beside a textile dump in Accra. The true price of our convenience is paid by those least able to afford it.</div>

<p>This paragraph demonstrates: a discourse marker opening ("Furthermore"), statistics for credibility, ambitious vocabulary ("staggering," "maritime"), varied sentence lengths, a powerful concluding sentence, and seamless integration of evidence and argument.</p>

<h3>2.1 and 2.2: Equal Tasks, Different Readers</h3>
<ul>
  <li><strong>Both tasks (20 marks each):</strong> About 300-400 words each, as the paper suggests. Make 3-4 developed points with evidence or examples, in the form the task sets, with sophisticated vocabulary where it fits.</li>
  <li><strong>Adapt to each reader:</strong> The two tasks may set different forms and readers, so change your tone and register between them: a letter to a council and an article for teenagers need different voices.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on the first task and rushing the second. The two tasks carry equal marks, so give each a full 30 minutes, about 5 planning and 25 writing, as the paper advises.</div>

<div class="key-term"><strong>Key Term: Topic Sentence</strong> - The first sentence of a paragraph that introduces its main idea. A strong topic sentence acts as a signpost, telling the reader what the paragraph will discuss. It demonstrates clear planning and organisation.</div>
`,
    quiz: [
      {
        id: 'wjec-c2-m9-q1',
        question: "How much of Section B's marks are for AO6 (technical accuracy)?",
        options: ['8 marks', '16 marks', '20 marks', '40 marks'],
        correct: 1,
        explanation:
          'AO6 accounts for 16 marks across Section B: 8 in each of the two 20-mark tasks. This is enough to make the difference between grades.',
      },
      {
        id: 'wjec-c2-m9-q2',
        question: 'What is a discourse marker?',
        options: [
          'A punctuation mark that shows discourse',
          'A word or phrase that signals the direction of an argument and helps the reader follow logic',
          'A type of paragraph break',
          'A technique used only in speeches',
        ],
        correct: 1,
        explanation:
          'Discourse markers (e.g. "Furthermore," "However," "Consequently") signal the direction of the argument and guide the reader through the logic of the writing.',
      },
      {
        id: 'wjec-c2-m9-q3',
        question: 'How should you split your time between the two writing tasks?',
        options: [
          'Spend most of it on the first task',
          'Give each about 30 minutes: they carry equal marks',
          'Spend most of it on the second task',
          'Plan neither, to save time',
        ],
        correct: 1,
        explanation:
          'Both tasks are worth 20 marks (AO5 12 + AO6 8), and the paper advises about 30 minutes on each: about 5 minutes planning and 25 writing.',
      },
      {
        id: 'wjec-c2-m9-q4',
        question: 'What is a topic sentence?',
        options: [
          'The last sentence of a paragraph',
          'The first sentence of a paragraph that introduces its main idea',
          'A sentence about the essay topic',
          'A sentence that summarises the whole piece',
        ],
        correct: 1,
        explanation:
          'A topic sentence is the first sentence of a paragraph that introduces its main idea. It acts as a signpost, telling the reader what the paragraph will discuss.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 - Component 2 Exam Strategy and Revision
  // ──────────────────────────────────────────────
  {
    id: 'wjec-c2-m10',
    title: 'Component 2 Exam Strategy and Revision',
    duration: '40 min',
    content: `
<h2>Component 2 - Final Preparation: Exam Strategy and Revision</h2>

<p>Component 2 is worth <strong>60% of the total GCSE</strong> - it is the larger and more demanding paper. With two reading texts, six reading questions, and two writing tasks to complete in <strong>2 hours</strong>, effective time management is absolutely essential. This module consolidates your learning and provides a clear strategy for exam day.</p>

<div class="key-term"><strong>Key Term: Time Management</strong> - The deliberate allocation of exam time to different questions based on their mark value. Effective time management ensures that high-tariff questions receive proportionally more time, maximising your overall mark.</div>

<h3>The 2-Hour Battle Plan</h3>
<table>
  <tr><th>Section</th><th>Question</th><th>Marks</th><th>Time</th></tr>
  <tr><td rowspan="7">A - Reading</td><td>Read both texts</td><td>-</td><td>10 min</td></tr>
  <tr><td>1.1 - Retrieval (21st-century text)</td><td>3</td><td>4 min</td></tr>
  <tr><td>1.2 - How the writer achieves a purpose (21st-century text)</td><td>10</td><td>12 min</td></tr>
  <tr><td>1.3 - Understanding (19th-century text)</td><td>3</td><td>4 min</td></tr>
  <tr><td>1.4 - Evaluation (19th-century text)</td><td>10</td><td>12 min</td></tr>
  <tr><td>1.5 - Synthesis (both texts)</td><td>4</td><td>5 min</td></tr>
  <tr><td>1.6 - Comparison (both texts)</td><td>10</td><td>13 min</td></tr>
  <tr><td rowspan="2">B - Writing</td><td>2.1 - First task</td><td>20</td><td>30 min</td></tr>
  <tr><td>2.2 - Second task</td><td>20</td><td>30 min</td></tr>
</table>
<p>The section times are the paper's own advice; the question times are a suggestion worked out from the marks. Each 30 minutes of writing includes about 5 minutes planning and a final check.</p>

<h3>Question-by-Question Reminders</h3>
<ul>
  <li><strong>1.1 (3 marks):</strong> Quick retrieval from the 21st-century text. Brief, accurate answers. Do not over-explain.</li>
  <li><strong>1.2 (10 marks):</strong> How the writer achieves a purpose - quotation, method, effect. What is said, language, tone and structure. Use subject terminology.</li>
  <li><strong>1.3 (3 marks):</strong> What the 19th-century text says or means. Put it simply.</li>
  <li><strong>1.4 (10 marks):</strong> Evaluate the 19th-century text. Decide first, then track the whole text with evidence.</li>
  <li><strong>1.5 (4 marks):</strong> Synthesis - details from both texts on one topic, briefly.</li>
  <li><strong>1.6 (10 marks):</strong> Compare viewpoints - analyse methods as well as ideas. Use comparative connectives. Reference both texts in every paragraph.</li>
  <li><strong>2.1 and 2.2 (20 marks each):</strong> Two compulsory transactional tasks, about 300-400 words each. Match each form's conventions and reader. Developed argument, counter-argument, ambitious vocabulary, varied sentences.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you run out of time, do not abandon either writing task: they carry equal marks. A plan, an opening and a conclusion for the second task still earn credit; a blank answer earns none.</div>

<h3>Common Pitfalls and How to Avoid Them</h3>
<ul>
  <li><strong>Pitfall:</strong> Treating 1.5 and 1.6 the same. <strong>Solution:</strong> 1.5 = synthesis (bring together what both texts say, briefly). 1.6 = comparison (compare how they say it, including methods).</li>
  <li><strong>Pitfall:</strong> Writing about texts separately in 1.6. <strong>Solution:</strong> Use comparative connectives in every paragraph. Each point must reference both writers.</li>
  <li><strong>Pitfall:</strong> Ignoring form conventions in 2.1 and 2.2. <strong>Solution:</strong> Check the specified form (letter, speech, article, etc.) and include appropriate conventions.</li>
  <li><strong>Pitfall:</strong> Letting the first writing task eat into the second. <strong>Solution:</strong> They carry equal marks, so give each about 30 minutes.</li>
  <li><strong>Pitfall:</strong> Not proofreading. <strong>Solution:</strong> Keep the last few minutes of each writing task to check it. Accuracy (AO6) is 8 of each task's 20 marks.</li>
</ul>

<h3>Revision Checklist for Component 2</h3>
<ul>
  <li>Can you read and retrieve information from both 19th-century and 21st-century non-fiction?</li>
  <li>Can you bring together details from two texts briefly (1.5)?</li>
  <li>Can you evaluate the 19th-century text, judging a statement about it (1.4)?</li>
  <li>Can you analyse language in a non-fiction text, using subject terminology and exploring effects?</li>
  <li>Can you compare how two writers convey their viewpoints, using comparative connectives?</li>
  <li>Can you proofread your own writing for common SPaG errors?</li>
  <li>Do you know the conventions for letters, articles, speeches, reviews, and reports?</li>
  <li>Can you build a persuasive argument using ethos, pathos, and logos?</li>
  <li>Can you use a range of punctuation accurately (semicolons, colons, dashes)?</li>
  <li>Can you vary your sentence openings and paragraph structure?</li>
  <li>Do you have a clear timing plan for the 2-hour exam?</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Revising content but not practising under timed conditions. Knowing the techniques is not enough - you must be able to apply them within the strict time constraints of the exam. Practise writing responses to past questions under timed conditions at least three times before the exam.</div>

<div class="key-term"><strong>Key Term: Timed Practice</strong> - Writing answers to exam-style questions within the allocated time limit. Timed practice builds exam stamina, improves time management, and reveals weaknesses in technique or knowledge that can be addressed before the real exam.</div>

<h3>Final Words of Advice</h3>
<p>Component 2 is a demanding paper, but it is also an opportunity. It rewards students who can read carefully, think critically, and write with precision and flair. Remember:</p>
<ul>
  <li>Every question has a specific skill it tests - make sure you demonstrate that skill.</li>
  <li>Quality beats quantity: a well-crafted response within the paper's word guidance outscores a longer, unfocused one.</li>
  <li>Proofread - it is the simplest way to gain marks.</li>
  <li>Stay calm, follow your timing plan, and trust your preparation.</li>
</ul>
`,
    quiz: [
      {
        id: 'wjec-c2-m10-q1',
        question: 'What percentage of the total GCSE is Component 2 worth?',
        options: ['40%', '50%', '60%', '70%'],
        correct: 2,
        explanation:
          'Component 2 is worth 60% of the total GCSE - making it the more heavily weighted paper.',
      },
      {
        id: 'wjec-c2-m10-q2',
        question: 'What is the key difference between 1.5 (synthesis) and 1.6 (comparison)?',
        options: [
          '1.5 uses one text; 1.6 uses both',
          '1.5 brings together what both texts say; 1.6 compares how they say it, including methods',
          'There is no difference',
          '1.5 is worth more marks',
        ],
        correct: 1,
        explanation:
          '1.5 (4 marks) brings together what both texts say about a topic, briefly. 1.6 (10 marks) compares how the writers convey their viewpoints, requiring analysis of methods and attitudes as well as ideas.',
      },
      {
        id: 'wjec-c2-m10-q3',
        question: 'If you run out of time, which writing task should you prioritise?',
        options: [
          'The first task only',
          'Both equally: they carry 20 marks each, so attempt both',
          'The second task only',
          'Neither - go back and improve your reading answers',
        ],
        correct: 1,
        explanation:
          'The two tasks are worth 20 marks each, so neither deserves priority. If time is short, write at least a plan, an opening and an ending for the second task: a partial answer still earns marks, a blank one earns none.',
      },
      {
        id: 'wjec-c2-m10-q4',
        question: 'When should you proofread your writing?',
        options: [
          'Never',
          'Only if you finish early',
          "In the last few minutes of each task's 30",
          'Before you start writing',
        ],
        correct: 2,
        explanation:
          "Each task has about 30 minutes, about 5 of them for planning. Keep the last few minutes of each to check it: accuracy (AO6) is 8 of each task's 20 marks.",
      },
      {
        id: 'wjec-c2-m10-q5',
        question: 'Why is timed practice essential for exam preparation?',
        options: [
          'It is not essential - knowing techniques is enough',
          'It builds exam stamina, improves time management, and reveals weaknesses',
          'The examiner can tell if you have practised',
          'It helps you memorise model answers',
        ],
        correct: 1,
        explanation:
          'Timed practice develops the ability to apply knowledge under pressure. It builds stamina, improves time management, and reveals areas that need further work.',
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
// Component 2 Assessment Questions
// ═══════════════════════════════════════════════════════════════════════════════

const comp2Assessment: CourseQuiz[] = [
  {
    id: 'wjec-c2-assess-1',
    question: 'How long is the Component 2 exam?',
    options: ['1 hour 45 minutes', '2 hours', '2 hours 15 minutes', '1 hour 30 minutes'],
    correct: 1,
    explanation:
      'Component 2 is 2 hours long, covering reading (40 marks) and writing (40 marks) for a total of 80 marks.',
  },
  {
    id: 'wjec-c2-assess-2',
    question: 'Which centuries do the two non-fiction extracts come from?',
    options: ['18th and 21st', '19th and 20th', '19th and 21st', '20th and 21st'],
    correct: 2,
    explanation:
      'Component 2 uses two non-fiction extracts on a linked theme: one from the 19th century (1800-1899) and one from the 21st century (2000 onwards).',
  },
  {
    id: 'wjec-c2-assess-3',
    question: 'What does AO3 assess?',
    options: [
      'Language analysis',
      "Comparing writers' ideas and perspectives across texts",
      'Retrieving information',
      'Technical accuracy',
    ],
    correct: 1,
    explanation:
      "AO3 assesses the ability to compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts. It is tested in 1.6.",
  },
  {
    id: 'wjec-c2-assess-4',
    question: 'What is synthesis?',
    options: [
      'Analysing one text in detail',
      'Combining information from two sources into a unified response',
      'Comparing writing styles',
      'Evaluating a text critically',
    ],
    correct: 1,
    explanation:
      'Synthesis means combining information from two sources to create a unified, coherent response, finding connections and patterns between the texts.',
  },
  {
    id: 'wjec-c2-assess-5',
    question: 'What does Question 1.4 on Component 2 ask you to do?',
    options: [
      'Write a story',
      'Evaluate the 19th-century text, often by judging a statement about it',
      'Compare three texts',
      'Correct errors in a given passage',
    ],
    correct: 1,
    explanation:
      'Question 1.4 is the 10-mark evaluation (AO4): your judgement on the 19th-century text, thinking about what is said and how. Component 2 sets no proofreading task.',
  },
  {
    id: 'wjec-c2-assess-6',
    question: 'How many writing tasks must you complete in Section B?',
    options: ['One', 'Two', 'Three', 'Choose one from two'],
    correct: 1,
    explanation:
      'Section B requires two compulsory writing tasks, 2.1 and 2.2, of 20 marks each (AO5 12 + AO6 8).',
  },
  {
    id: 'wjec-c2-assess-7',
    question: 'What are the three pillars of classical persuasion?',
    options: [
      'Introduction, body, conclusion',
      'Ethos, pathos, logos',
      'Fact, opinion, argument',
      'Simile, metaphor, personification',
    ],
    correct: 1,
    explanation:
      'The three pillars are ethos (credibility), pathos (emotional appeal), and logos (logical argument). The best persuasive writing uses all three.',
  },
  {
    id: 'wjec-c2-assess-8',
    question: 'What sign-off completes a formal letter addressed to "Dear Mr Thompson"?',
    options: ['Yours faithfully', 'Yours sincerely', 'Kind regards', 'Best wishes'],
    correct: 1,
    explanation:
      '"Yours sincerely" is used when you address the recipient by name. "Yours faithfully" is for letters addressed to "Dear Sir/Madam."',
  },
  {
    id: 'wjec-c2-assess-9',
    question: 'What is the difference between "its" and "it\'s"?',
    options: [
      'They mean the same thing',
      '"Its" is possessive; "it\'s" means "it is" or "it has"',
      '"It\'s" is possessive; "its" is a contraction',
      'One is formal and the other is informal',
    ],
    correct: 1,
    explanation:
      '"Its" (no apostrophe) is possessive. "It\'s" (with apostrophe) is a contraction of "it is" or "it has."',
  },
  {
    id: 'wjec-c2-assess-10',
    question: 'What is a counter-argument?',
    options: [
      'Repeating your main argument',
      'Acknowledging the opposing viewpoint before refuting it',
      'Arguing against yourself',
      'The conclusion of your essay',
    ],
    correct: 1,
    explanation:
      'A counter-argument acknowledges the opposing view and then explains why it is flawed. This demonstrates balanced thinking and strengthens your position.',
  },
  {
    id: 'wjec-c2-assess-11',
    question: 'What is a rhetorical question?',
    options: [
      'A question that requires a detailed answer',
      'A question asked for effect, not requiring an answer',
      'A question about rhetoric',
      'A question the examiner asks',
    ],
    correct: 1,
    explanation:
      'A rhetorical question is asked for persuasive or dramatic effect rather than to elicit an answer. It forces the reader to engage with the issue.',
  },
  {
    id: 'wjec-c2-assess-12',
    question: 'What is a discourse marker?',
    options: [
      'A type of punctuation',
      'A word or phrase that signals the direction of an argument',
      'The title of a speech',
      'A paragraph break',
    ],
    correct: 1,
    explanation:
      'Discourse markers (e.g. "Furthermore," "However," "Consequently") signal the direction of the argument and guide the reader through the writing.',
  },
  {
    id: 'wjec-c2-assess-13',
    question: 'In 1.6, what must every paragraph include?',
    options: [
      'A quotation from the 19th-century text only',
      'References to both writers with comparative connectives',
      'A personal anecdote',
      'Statistics and evidence',
    ],
    correct: 1,
    explanation:
      'Every 1.6 paragraph should reference both writers and use comparative connectives (whereas, in contrast, similarly) to make the comparison explicit.',
  },
  {
    id: 'wjec-c2-assess-14',
    question: 'What is "register" in writing?',
    options: [
      'The topic of the text',
      'The level of formality adapted to suit the audience and purpose',
      'The structure of paragraphs',
      "The writer's handwriting style",
    ],
    correct: 1,
    explanation:
      'Register is the level of formality in language, adapted to suit the context. A formal letter uses a different register than a blog post for teenagers.',
  },
  {
    id: 'wjec-c2-assess-15',
    question: 'What is a topic sentence?',
    options: [
      'The title of the text',
      'The first sentence of a paragraph that introduces its main idea',
      'The final sentence of the essay',
      'A sentence that states the exam topic',
    ],
    correct: 1,
    explanation:
      'A topic sentence introduces the main idea of a paragraph, acting as a signpost that guides the reader and demonstrates clear organisation.',
  },
  {
    id: 'wjec-c2-assess-16',
    question: 'How should you approach unfamiliar vocabulary in 19th-century texts?',
    options: [
      'Skip those sections entirely',
      'Use context clues to work out the meaning',
      'Guess randomly',
      "Write that you don't understand it",
    ],
    correct: 1,
    explanation:
      'Use the surrounding context to infer meaning. The words around an unfamiliar term usually provide enough information to understand its sense.',
  },
  {
    id: 'wjec-c2-assess-17',
    question: 'What is a tricolon (rule of three)?',
    options: [
      'Using three paragraphs',
      'Grouping three words, phrases, or clauses together for rhythmic impact',
      'Three quotations in one answer',
      'Repeating a word three times',
    ],
    correct: 1,
    explanation:
      'A tricolon groups three elements together for persuasive, rhythmic effect. Example: "government of the people, by the people, for the people."',
  },
  {
    id: 'wjec-c2-assess-18',
    question: 'What is the most efficient way to gain marks at the end of the exam?',
    options: [
      'Write another paragraph',
      'Re-read the extract',
      'Proofread your work and correct SPaG errors',
      'Add more quotations to your reading answers',
    ],
    correct: 2,
    explanation:
      'Proofreading and correcting SPaG errors is the most efficient use of the final minutes: accuracy (AO6) is 16 of the 40 writing marks.',
  },
  {
    id: 'wjec-c2-assess-19',
    question: 'What does "emotive language" mean?',
    options: [
      'Language that is grammatically incorrect',
      'Words chosen to provoke an emotional response in the reader',
      'Language used in emotional scenes in novels',
      'Formal language used in speeches',
    ],
    correct: 1,
    explanation:
      'Emotive language consists of words deliberately chosen to provoke an emotional response - such as "suffering," "innocent," "devastating" - commonly used in persuasive writing.',
  },
  {
    id: 'wjec-c2-assess-20',
    question: 'If running short on time, which Section B task should you prioritise?',
    options: [
      'The first task - complete it before starting the second',
      'Neither above the other: both are worth 20 marks, so split the remaining time',
      'Neither - return to Section A',
      'The second task - it is worth more',
    ],
    correct: 1,
    explanation:
      'Both tasks are worth 20 marks. If time is short, split what is left between them: a partial answer earns marks, a blank one earns none.',
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
// Course Definitions
// ═══════════════════════════════════════════════════════════════════════════════

const wjecLangComp1: CourseData = {
  id: 'wjec-lang-c1',
  title: 'WJEC/Eduqas GCSE English Language - Component 1',
  subtitle: '20th Century Literature Reading & Creative Prose Writing (C700U10-1)',
  tier: 'GCSE',
  board: 'WJEC',
  specId: 'C700',
  specCode: 'C700U10-1',
  price: 0,
  duration: '10 weeks',
  level: 'GCSE (Years 10-11)',
  color: '#dc2626',
  description:
    'Master WJEC/Eduqas Component 1: analyse 20th-century fiction extracts and craft compelling creative prose. Covers retrieval, language analysis, structural analysis, evaluation, and narrative writing with the descriptive techniques that bring it to life, with WJEC-specific strategies and examiner insights.',
  moduleList: comp1Modules,
  assessmentQuestions: comp1Assessment,
}

const wjecLangComp2: CourseData = {
  id: 'wjec-lang-c2',
  title: 'WJEC/Eduqas GCSE English Language - Component 2',
  subtitle:
    '19th & 21st Century Non-Fiction Reading & Transactional/Persuasive Writing (C700U20-1)',
  tier: 'GCSE',
  board: 'WJEC',
  specId: 'C700',
  specCode: 'C700U20-1',
  price: 0,
  duration: '12 weeks',
  level: 'GCSE (Years 10-11)',
  color: '#b91c1c',
  description:
    'Master WJEC/Eduqas Component 2: read and analyse 19th and 21st century non-fiction, synthesise across texts, compare viewpoints, and produce persuasive transactional writing (speeches, letters, articles, reviews, reports) with WJEC-specific strategies.',
  moduleList: comp2Modules,
  assessmentQuestions: comp2Assessment,
}

export const wjecCourses: CourseData[] = [wjecLangComp1, wjecLangComp2]
