import type { CourseData } from './courses';

const ks3CoursesCore: CourseData[] = [
  {
    id: 'ks3-reading',
    title: 'KS3 Reading Skills',
    subtitle: 'Master comprehension, inference, and language analysis for Years 7-9.',
    tier: 'KS3',
    price: 29,
    duration: '4-6 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Build a rock-solid foundation in reading comprehension. Learn how to find evidence, analyse language, understand structure, compare texts, and read between the lines. Every skill you need before GCSE.',
    color: '#10b981',
    moduleList: [
      {
        id: 'ks3r-m1',
        title: 'Understanding the Question',
        duration: '30 mins',
        content: `<h2>What Does the Examiner Actually Want?</h2>
<p>Before you can answer a question well, you need to understand exactly what it is asking. This sounds obvious, but it is the single biggest reason students lose marks: they answer the wrong question, or they answer the right question badly because they misread it.</p>

<h3>Command Words</h3>
<p>Every exam question contains a <strong>command word</strong> that tells you what to do. Learn these and you will never waste time again:</p>
<ul>
<li><strong>Identify / List</strong> — Find information and write it down. No analysis needed.</li>
<li><strong>Explain</strong> — Say what something means AND why it matters.</li>
<li><strong>Analyse</strong> — Break something apart and examine how it works. This is where you discuss techniques, word choices, and effects on the reader.</li>
<li><strong>Compare</strong> — Find similarities AND differences between two things.</li>
<li><strong>Evaluate</strong> — Make a judgement. Do you agree? Is the writer successful? Give your opinion with evidence.</li>
</ul>

<div class="key-term"><strong>Key Term: Command word</strong> — The verb in a question that tells you exactly what skill to use. Underlining it before you start writing is a simple habit that prevents costly mistakes.</div>

<h3>How to Allocate Your Time</h3>
<p>Look at the marks available. A 4-mark question needs a shorter, more focused answer than a 20-mark question. A good rule of thumb: spend roughly one minute per mark.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Before writing anything, underline the command word, circle the number of marks, and highlight any specific focus the question asks for (e.g., "How does the writer use language to..." means you MUST discuss language techniques).</div>

<h3>Worked Example</h3>
<p>Question: <em>"How does the writer use language to create a sense of danger in lines 5-12?"</em></p>
<p>What is the command word? <strong>How</strong> — this means explain the methods.</p>
<p>What must you focus on? <strong>Language</strong> — so discuss word choices, techniques, imagery.</p>
<p>What is the theme? <strong>Danger</strong> — every point must link back to danger.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about the whole text when the question says "lines 5-12." Stick to the lines specified. Going outside them wastes time and scores zero extra marks.</div>`,
        quiz: [
          { id: 'ks3r-m1-q1', question: 'What does the command word "analyse" require you to do?', options: ['List facts from the text', 'Break something apart and examine how it works', 'Give your personal opinion', 'Retell the story in your own words'], correct: 1, explanation: '"Analyse" means you need to examine the details closely — look at techniques, word choices, and their effects on the reader. It is more detailed than "explain."' },
          { id: 'ks3r-m1-q2', question: 'A question is worth 8 marks. Roughly how many minutes should you spend on it?', options: ['4 minutes', '8 minutes', '15 minutes', '20 minutes'], correct: 1, explanation: 'The rule of thumb is one minute per mark. An 8-mark question deserves about 8 minutes of focused writing.' },
          { id: 'ks3r-m1-q3', question: 'If a question asks "How does the writer use language to create tension?", what must your answer focus on?', options: ['The plot of the story', 'The writer\'s use of language techniques', 'Your own feelings about the text', 'The historical context'], correct: 1, explanation: 'The question specifically asks about language. You must discuss word choices, techniques like metaphor or short sentences, and explain how they create tension.' },
          { id: 'ks3r-m1-q4', question: 'What should you do FIRST when you read an exam question?', options: ['Start writing immediately', 'Read the whole text again', 'Underline the command word and check the marks', 'Plan your conclusion'], correct: 2, explanation: 'Always identify the command word and marks first. This tells you exactly what to do and how long to spend. It takes 10 seconds and saves minutes of wasted effort.' },
        ],
      },
      {
        id: 'ks3r-m2',
        title: 'Finding and Using Evidence',
        duration: '35 mins',
        content: `<h2>Quotations Are Your Proof</h2>
<p>In English, every point you make must be supported by evidence from the text. No evidence = no marks. It is that simple.</p>

<h3>What Makes a Good Quotation?</h3>
<ul>
<li><strong>Short</strong> — one word to one sentence. Long quotations waste time and show you cannot select the key words.</li>
<li><strong>Relevant</strong> — it must directly support the point you are making.</li>
<li><strong>Specific</strong> — choose the most powerful word or phrase, not a vague chunk of text.</li>
</ul>

<h3>The PEE/PEEL Structure</h3>
<p>This is the backbone of every analytical paragraph:</p>
<ul>
<li><strong>P</strong>oint — State your argument clearly in one sentence.</li>
<li><strong>E</strong>vidence — Provide a quotation from the text.</li>
<li><strong>E</strong>xplain — Analyse the evidence. What does it mean? How does it work? What effect does it have?</li>
<li><strong>L</strong>ink — Connect back to the question or develop your point further.</li>
</ul>

<div class="key-term"><strong>Key Term: Embedding</strong> — Weaving a short quotation into your own sentence so it reads naturally. For example: The writer describes the fog as having "cold fingers," which creates a sense of threat through personification.</div>

<h3>Embedding vs Bolt-On Quotations</h3>
<p><strong>Bolt-on (weaker):</strong> The writer uses personification. "The fog crept across the marshes like a living thing." This shows it is dangerous.</p>
<p><strong>Embedded (stronger):</strong> The fog is personified as a predatory force that "crept" with "cold fingers," suggesting it is actively hunting the narrator.</p>

<div class="text-extract">"It was a dark and stormy night; the rain fell in torrents — except at occasional intervals, when it was checked by a violent gust of wind which swept up the streets."<div class="source">Edward Bulwer-Lytton, Paul Clifford</div></div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER</div>
<p><strong>Point:</strong> The writer creates an atmosphere of chaos and danger through the weather.</p>
<p><strong>Evidence:</strong> The rain is described as falling "in torrents," while "violent" gusts of wind "swept up the streets."</p>
<p><strong>Explain:</strong> The noun "torrents" suggests an overwhelming, unstoppable force — rain so heavy it feels like a flood. The adjective "violent" personifies the wind as aggressive and hostile, while the verb "swept" implies it is powerful enough to dominate the entire street. Together, these word choices make the storm feel threatening rather than merely unpleasant.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using quotations longer than one sentence. If your quotation is longer than about ten words, you are probably including unnecessary material. Cut it down to the key phrase.</div>`,
        quiz: [
          { id: 'ks3r-m2-q1', question: 'What does the "E" in PEEL stand for?', options: ['Example', 'Evidence and Explain', 'Evaluate', 'Engage'], correct: 1, explanation: 'PEEL stands for Point, Evidence, Explain, Link. The two E\'s are Evidence (the quotation) and Explain (your analysis of what it means).' },
          { id: 'ks3r-m2-q2', question: 'Which is an example of an embedded quotation?', options: ['The writer says "the fog was cold." This shows the weather is bad.', 'The fog is described as "cold" and threatening.', '"The fog was cold and damp" (line 3).', 'In the text it says that the fog was cold.'], correct: 1, explanation: 'An embedded quotation is woven naturally into your own sentence. Option B does this by placing "cold" inside the writer\'s analysis sentence.' },
          { id: 'ks3r-m2-q3', question: 'How long should a quotation ideally be?', options: ['A full paragraph', 'Two to three sentences', 'One word to one sentence', 'At least 20 words'], correct: 2, explanation: 'Short quotations (one word to one sentence) show you can select the most important words. Long quotations suggest you cannot identify what matters.' },
          { id: 'ks3r-m2-q4', question: 'What is the purpose of the "L" in PEEL?', options: ['To list more quotations', 'To link back to the question or extend the point', 'To end your essay', 'To identify language techniques'], correct: 1, explanation: 'The Link step connects your analysis back to the original question, or develops your point by considering wider implications. It shows you are answering the question, not just describing the text.' },
        ],
      },
      {
        id: 'ks3r-m3',
        title: 'Language Analysis',
        duration: '40 mins',
        content: `<h2>How Writers Use Language to Create Effects</h2>
<p>Language analysis is the most important skill in English. It means looking at the specific words a writer has chosen and explaining <strong>why</strong> those words were chosen and <strong>what effect</strong> they have on the reader.</p>

<h3>The Big Five Techniques</h3>
<p>You should be able to spot and analyse all of these:</p>

<p><strong>1. Metaphor</strong> — saying something IS something else. "The classroom was a zoo." This does not mean there were actual animals — it means it was chaotic and noisy.</p>

<p><strong>2. Simile</strong> — a comparison using "like" or "as." "Her voice was like honey." This suggests something sweet, smooth, and pleasant.</p>

<p><strong>3. Personification</strong> — giving human qualities to something non-human. "The wind whispered through the trees." Wind cannot whisper, but this makes it feel gentle and secretive.</p>

<p><strong>4. Alliteration</strong> — repeating the same consonant sound. "The dark, damp dungeon." The repeated "d" sounds feel heavy and oppressive.</p>

<p><strong>5. Sibilance</strong> — repeating "s" or "sh" sounds. "The snake slithered silently." The hissing sounds mirror the movement of the snake.</p>

<div class="text-extract">"The sea was angry that day, my friends — like an old man trying to send back soup in a deli."<div class="source">George Costanza (adapted for educational purposes)</div></div>

<p>This contains personification ("angry"), a simile ("like an old man"), and humour through the unexpected comparison. The effect is to make the sea seem both powerful and absurdly relatable.</p>

<div class="key-term"><strong>Key Term: Connotation</strong> — The feelings or ideas a word suggests beyond its literal meaning. "Home" literally means a building you live in, but it connotes warmth, safety, and belonging.</div>

<h3>How to Write About Language</h3>
<p>Never just spot a technique — always explain its effect:</p>
<ul>
<li><strong>Weak:</strong> "The writer uses a metaphor."</li>
<li><strong>Better:</strong> "The metaphor comparing the city to a 'concrete jungle' suggests a harsh, wild environment where people struggle to survive."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best language analysis zooms in on a single word and explores its connotations. Saying "the verb 'crept' suggests something sneaky and threatening" is more impressive than identifying three techniques without explaining any of them.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> "Feature spotting" — just naming techniques without explaining their effect. Saying "The writer uses alliteration" earns zero marks unless you explain what the alliteration DOES.</div>`,
        quiz: [
          { id: 'ks3r-m3-q1', question: '"The stars danced in the midnight sky." What technique is this?', options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'], correct: 2, explanation: 'Stars cannot literally dance — this gives them a human action. Personification makes the sky feel alive and joyful.' },
          { id: 'ks3r-m3-q2', question: 'What is a connotation?', options: ['The dictionary definition of a word', 'The feelings or ideas a word suggests', 'A type of punctuation', 'A comparison using "like"'], correct: 1, explanation: 'Connotation is the emotional or cultural meaning beyond the literal definition. "Childish" and "childlike" have the same literal meaning but very different connotations.' },
          { id: 'ks3r-m3-q3', question: '"The bitter, brutal cold bit through his coat." What sound technique is used here?', options: ['Sibilance', 'Onomatopoeia', 'Plosive alliteration', 'Rhyme'], correct: 2, explanation: 'The repeated hard "b" sounds are plosive consonants. The harsh, explosive sounds mirror the harsh, aggressive cold.' },
          { id: 'ks3r-m3-q4', question: 'Which is the BEST way to analyse language?', options: ['List every technique you can find', 'Pick one word and explore its connotations in depth', 'Describe what happens in the text', 'Quote as much as possible'], correct: 1, explanation: 'Depth beats breadth. Zooming in on a single word and exploring what it suggests in context is more impressive than listing five techniques without explanation.' },
        ],
      },
      {
        id: 'ks3r-m4',
        title: 'Structure Analysis',
        duration: '35 mins',
        content: `<h2>How Writers Organise Their Ideas</h2>
<p>Structure is about the <strong>order</strong> in which a writer presents information and ideas. It is not about what happens — it is about <strong>why things happen in that order</strong> and how the arrangement affects the reader.</p>

<h3>Whole-Text Structure</h3>
<p>Think about how the text is organised from beginning to end:</p>
<ul>
<li><strong>Beginning</strong> — What does the writer focus your attention on first? Why?</li>
<li><strong>Middle</strong> — How does the focus shift? Is there a turning point?</li>
<li><strong>End</strong> — How does the text conclude? Is there a twist, a resolution, or an open ending?</li>
</ul>

<h3>Paragraph-Level Structure</h3>
<p>Look at how individual paragraphs work:</p>
<ul>
<li><strong>Topic sentences</strong> — The first sentence often introduces the paragraph's main idea.</li>
<li><strong>Short paragraphs</strong> — Create emphasis or pace. A one-sentence paragraph stands out.</li>
<li><strong>Long paragraphs</strong> — Can create a flowing, immersive feeling or build detailed description.</li>
</ul>

<h3>Sentence-Level Structure</h3>
<ul>
<li><strong>Short sentences</strong> — Create tension, impact, urgency. "He ran. The door was locked."</li>
<li><strong>Long sentences</strong> — Build atmosphere, create a flowing rhythm, pile up details.</li>
<li><strong>Questions</strong> — Engage the reader and create uncertainty.</li>
</ul>

<div class="key-term"><strong>Key Term: Narrative perspective</strong> — Who is telling the story and what they can see. First person ("I") feels intimate and personal. Third person ("he/she") can give a wider view of events.</div>

<div class="text-extract">"The house stood alone. It had stood alone for as long as anyone could remember, and the lane leading to it was overgrown with nettles and wild grass. No one walked that way any more."<div class="source">Original composition</div></div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER</div>
<p>The writer opens with a short declarative sentence — "The house stood alone" — which immediately establishes isolation as the dominant mood. The repetition of "stood alone" in the next sentence reinforces this emptiness through structural echoing. The writer then widens the focus from the house itself to the "lane leading to it," moving the reader's eye outward to show that the isolation extends beyond the building. The final sentence — "No one walked that way any more" — ends on absence. The adverb "any more" implies that people once did walk this way, suggesting decline and abandonment. The progression from present description to implied past creates a sense of loss.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about structure, use phrases like "the writer shifts focus from... to..." or "the text moves from... towards..." This shows you are tracking how the writing develops, not just describing it.</div>`,
        quiz: [
          { id: 'ks3r-m4-q1', question: 'What effect does a very short sentence usually create?', options: ['A calm, peaceful mood', 'Emphasis, tension, or impact', 'Confusion', 'Detailed description'], correct: 1, explanation: 'Short sentences create punch. They stand out against longer sentences and force the reader to pause, creating tension or emphasis.' },
          { id: 'ks3r-m4-q2', question: 'What does "narrative perspective" mean?', options: ['How the story ends', 'Who is telling the story and what they can see', 'The moral of the story', 'The setting of the text'], correct: 1, explanation: 'Narrative perspective is the point of view from which the story is told. First person (I) gives personal intimacy; third person gives distance and a wider view.' },
          { id: 'ks3r-m4-q3', question: 'When analysing structure, what should you focus on?', options: ['Only the beginning of the text', 'The order in which ideas are presented and why', 'Rhyme and rhythm', 'Spelling and grammar'], correct: 1, explanation: 'Structure analysis means examining how a text is organised — why certain things come first, how the focus shifts, and what effect the arrangement has on the reader.' },
          { id: 'ks3r-m4-q4', question: 'A writer begins with a peaceful scene and gradually introduces threatening details. What structural technique is this?', options: ['Flashback', 'A shift from calm to tension', 'Repetition', 'First person narration'], correct: 1, explanation: 'This is a structural shift — the writer deliberately moves from peace to threat to unsettle the reader. The contrast makes the danger feel more alarming.' },
        ],
      },
      {
        id: 'ks3r-m5',
        title: 'Comparing Texts',
        duration: '35 mins',
        content: `<h2>Finding Links and Differences</h2>
<p>Comparing texts means writing about two sources at the same time, showing how they are similar and different. The key is to weave your discussion together, not write about one text and then the other.</p>

<h3>How to Structure a Comparison</h3>
<p>The strongest approach is to organise by <strong>theme or method</strong>, not by source:</p>
<ul>
<li><strong>Weak structure:</strong> "Source A says X. Source B says Y." (This is two separate summaries, not a comparison.)</li>
<li><strong>Strong structure:</strong> "Both writers address the theme of X. Source A uses technique Y to suggest..., whereas Source B takes a different approach by..."</li>
</ul>

<h3>Comparative Connectives</h3>
<p>These words and phrases signal that you are comparing:</p>
<ul>
<li><strong>Similarly / Likewise / In the same way</strong> — for similarities</li>
<li><strong>However / In contrast / Whereas / On the other hand</strong> — for differences</li>
<li><strong>While Source A... Source B...</strong> — for simultaneous comparison</li>
<li><strong>Both writers... but...</strong> — for shared ground with a difference</li>
</ul>

<div class="key-term"><strong>Key Term: Cross-referencing</strong> — Discussing both texts within the same paragraph rather than in separate sections. This is what examiners look for in a comparison.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Every paragraph in a comparison answer should mention BOTH texts. If a paragraph only discusses one text, you are not comparing — you are describing.</div>

<h3>What to Compare</h3>
<ul>
<li><strong>Theme</strong> — What are both texts about? Do they agree or disagree?</li>
<li><strong>Tone</strong> — Is one angry and the other calm? One serious and the other humorous?</li>
<li><strong>Methods</strong> — Do the writers use the same techniques for different effects?</li>
<li><strong>Audience</strong> — Who is each text written for? How does this change the language?</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Source A for half the answer and then Source B for the other half. This is not comparing — this is two mini-essays stapled together. Weave the texts together in every paragraph.</div>`,
        quiz: [
          { id: 'ks3r-m5-q1', question: 'Which is the best structure for a comparison answer?', options: ['All about Source A, then all about Source B', 'Organised by theme, discussing both texts in each paragraph', 'A summary of both texts', 'Only discuss the differences'], correct: 1, explanation: 'Organising by theme and discussing both texts together in every paragraph is the strongest approach. It shows genuine comparison, not separate descriptions.' },
          { id: 'ks3r-m5-q2', question: 'Which word signals a difference between two texts?', options: ['Similarly', 'Furthermore', 'However', 'Also'], correct: 2, explanation: '"However" signals a contrast or difference. Using comparative connectives clearly shows the examiner you are comparing, not just describing.' },
          { id: 'ks3r-m5-q3', question: 'What is cross-referencing?', options: ['Checking your spelling', 'Discussing both texts within the same paragraph', 'Using footnotes', 'Copying from the text'], correct: 1, explanation: 'Cross-referencing means bringing both texts together in the same paragraph. This is the hallmark of a strong comparison.' },
          { id: 'ks3r-m5-q4', question: 'What can you compare between two texts?', options: ['Only the language techniques', 'Theme, tone, methods, and audience', 'Only the plots', 'Only the characters'], correct: 1, explanation: 'You can compare theme (what they are about), tone (the feeling), methods (techniques used), and audience (who they are written for). The best answers compare several of these.' },
        ],
      },
      {
        id: 'ks3r-m6',
        title: 'Inference and Implicit Meaning',
        duration: '30 mins',
        content: `<h2>Reading Between the Lines</h2>
<p>Not everything a writer wants to communicate is stated directly. <strong>Inference</strong> means working out what a writer is suggesting without them saying it outright. It is one of the most important reading skills you can develop.</p>

<h3>How Inference Works</h3>
<p>A writer might not say "the character was nervous." Instead, they might write:</p>

<div class="text-extract">"She checked her watch for the third time. Her fingers drummed against the table and her coffee sat untouched, growing cold."<div class="source">Original composition</div></div>

<p>Nothing here directly says "nervous." But we can infer it from the evidence:</p>
<ul>
<li><strong>Checking her watch</strong> repeatedly — she is waiting anxiously for something.</li>
<li><strong>Fingers drumming</strong> — a physical sign of restlessness.</li>
<li><strong>Untouched coffee</strong> — she is too distracted to drink. The coffee "growing cold" suggests she has been waiting a long time.</li>
</ul>

<div class="key-term"><strong>Key Term: Inference</strong> — Drawing a conclusion based on evidence and reasoning, not on what is directly stated. "Reading between the lines."</div>

<h3>Authorial Intent</h3>
<p>Always ask yourself: <strong>why did the writer include this detail?</strong> Nothing in a well-crafted text is accidental. If a writer mentions the weather, it is probably reflecting the mood. If they describe what a character is wearing, it is probably telling you something about their personality or status.</p>

<h3>Context Clues</h3>
<p>Sometimes you can work out the meaning of an unfamiliar word from the words around it:</p>
<p>"The room was <strong>spartan</strong> — bare walls, a single chair, no decoration of any kind."</p>
<p>Even if you do not know what "spartan" means, the words around it (bare, single, no decoration) tell you it means plain, minimal, without comfort.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best inference answers use the phrase "This suggests that..." or "This implies that..." These show you are going beyond the surface meaning.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER</div>
<p>The writer implies that the character is anxious about an important meeting. The repetitive action of checking her watch "for the third time" suggests she is counting down to something, while the "untouched" coffee implies she is too preoccupied to engage in normal activities. The detail of the coffee "growing cold" subtly reinforces the passage of time, suggesting she has been in this heightened state for a while. Together, these details build a picture of someone on edge without the writer ever needing to state it directly.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing inference with guessing. Inference must always be supported by evidence from the text. "I think she is nervous" is a guess. "The repeated action of checking her watch suggests nervousness" is an inference backed by evidence.</div>`,
        quiz: [
          { id: 'ks3r-m6-q1', question: 'What does inference mean?', options: ['Copying directly from the text', 'Drawing conclusions from clues in the text', 'Making up your own story', 'Summarising what happens'], correct: 1, explanation: 'Inference means working out what the writer is suggesting based on evidence, rather than relying on what is directly stated.' },
          { id: 'ks3r-m6-q2', question: '"He slammed the door and threw his bag on the floor." What can you infer about the character?', options: ['He is happy', 'He is tired', 'He is angry or frustrated', 'He is in a hurry'], correct: 2, explanation: 'The violent actions of "slammed" and "threw" suggest strong negative emotion — most likely anger or frustration. The force behind these actions is the clue.' },
          { id: 'ks3r-m6-q3', question: 'What phrase is useful when writing about inference?', options: ['"The text says..."', '"This suggests that..."', '"In conclusion..."', '"I think maybe..."'], correct: 1, explanation: '"This suggests that..." is the perfect phrase for inference. It shows you are interpreting evidence rather than just quoting it or guessing.' },
          { id: 'ks3r-m6-q4', question: 'What is the difference between inference and guessing?', options: ['There is no difference', 'Inference is supported by evidence; guessing is not', 'Guessing is more accurate', 'Inference only works with poetry'], correct: 1, explanation: 'Inference is always grounded in evidence from the text. A guess has no support. Always show the evidence that leads to your inference.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3r-a1', question: 'What does the command word "evaluate" require you to do?', options: ['List facts', 'Make a judgement supported by evidence', 'Describe what happens', 'Compare two texts'], correct: 1, explanation: '"Evaluate" means forming a judgement — do you agree or disagree? You must support your opinion with evidence from the text.' },
      { id: 'ks3r-a2', question: 'What does PEEL stand for?', options: ['Point, Evidence, Explain, Link', 'Plan, Edit, Evaluate, Learn', 'Paragraph, Example, Effect, Language', 'Point, Extract, Examine, List'], correct: 0, explanation: 'PEEL stands for Point, Evidence, Explain, Link — the structure for analytical paragraphs.' },
      { id: 'ks3r-a3', question: '"Her smile was like sunshine after rain." What technique is this?', options: ['Metaphor', 'Personification', 'Simile', 'Alliteration'], correct: 2, explanation: 'This uses "like" to compare her smile to sunshine — a simile.' },
      { id: 'ks3r-a4', question: 'What is an embedded quotation?', options: ['A very long quotation', 'A quotation woven into your own sentence', 'A quotation at the end of an essay', 'A quotation from memory'], correct: 1, explanation: 'An embedded quotation is smoothly woven into your own sentence so it reads naturally.' },
      { id: 'ks3r-a5', question: '"The thunder growled in anger." What technique is used here?', options: ['Simile', 'Personification and pathetic fallacy', 'Onomatopoeia', 'Hyperbole'], correct: 1, explanation: 'Thunder is given the human quality of "growling in anger" (personification), and the weather reflects mood (pathetic fallacy).' },
      { id: 'ks3r-a6', question: 'What is a connotation?', options: ['The dictionary definition of a word', 'The feelings or ideas a word suggests', 'A type of sentence', 'A writing technique'], correct: 1, explanation: 'Connotation is the emotional associations a word carries beyond its literal meaning.' },
      { id: 'ks3r-a7', question: 'What effect do short sentences create?', options: ['Detailed description', 'Emphasis, tension, or impact', 'A flowing rhythm', 'Confusion'], correct: 1, explanation: 'Short sentences create punch and impact. They force the reader to pause and pay attention.' },
      { id: 'ks3r-a8', question: 'Which word would you use to signal a DIFFERENCE in a comparison?', options: ['Similarly', 'Furthermore', 'In contrast', 'Additionally'], correct: 2, explanation: '"In contrast" signals a difference between two texts or ideas.' },
      { id: 'ks3r-a9', question: 'What is inference?', options: ['Copying from the text', 'Drawing conclusions from evidence in the text', 'Summarising the plot', 'Guessing what the writer means'], correct: 1, explanation: 'Inference means drawing conclusions based on clues and evidence, not explicit statements.' },
      { id: 'ks3r-a10', question: 'What is sibilance?', options: ['Repetition of "s" or "sh" sounds', 'Repetition of "b" or "d" sounds', 'A type of rhyme', 'A narrative technique'], correct: 0, explanation: 'Sibilance is the repetition of soft "s" and "sh" sounds, often creating a sinister or soothing atmosphere.' },
      { id: 'ks3r-a11', question: 'Which is better: identifying three techniques or analysing one in depth?', options: ['Identifying three', 'Analysing one in depth', 'Neither matters', 'Both are equally valued'], correct: 1, explanation: 'Depth always beats breadth. One technique analysed in detail scores higher than three techniques just named.' },
      { id: 'ks3r-a12', question: 'What is authorial intent?', options: ['What the writer had for breakfast', 'Why the writer made specific choices', 'The publication date', 'The genre'], correct: 1, explanation: 'Authorial intent is the reason behind a writer\'s choices — why they selected specific words, structures, or techniques.' },
      { id: 'ks3r-a13', question: 'What does "narrative perspective" refer to?', options: ['The theme of the story', 'Who is telling the story', 'The length of the text', 'The setting'], correct: 1, explanation: 'Narrative perspective is the viewpoint from which the story is told — first person, third person, etc.' },
      { id: 'ks3r-a14', question: '"The bitter cold bit through his bones." What sound effect is created by the repeated "b"?', options: ['A soft, gentle feeling', 'A harsh, aggressive quality', 'A musical rhythm', 'A whispering sound'], correct: 1, explanation: 'Plosive "b" sounds are hard and percussive, creating a harsh quality that mirrors the biting cold.' },
      { id: 'ks3r-a15', question: 'When comparing texts, what should every paragraph contain?', options: ['Only Source A', 'Only Source B', 'References to both texts', 'Personal opinions only'], correct: 2, explanation: 'Every paragraph in a comparison should reference both texts to show genuine comparison.' },
      { id: 'ks3r-a16', question: 'A 4-mark question should take approximately how long?', options: ['1 minute', '4 minutes', '10 minutes', '20 minutes'], correct: 1, explanation: 'The rule of thumb is one minute per mark, so a 4-mark question should take about 4 minutes.' },
      { id: 'ks3r-a17', question: 'What is the effect of a one-sentence paragraph?', options: ['It saves space', 'It creates emphasis and draws attention', 'It shows poor planning', 'It has no particular effect'], correct: 1, explanation: 'A one-sentence paragraph stands out dramatically, creating emphasis and forcing the reader to pay attention.' },
      { id: 'ks3r-a18', question: '"All the world\'s a stage." What technique is this?', options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], correct: 1, explanation: 'This is a metaphor — it says the world IS a stage, not that it is LIKE a stage. It implies life is a performance.' },
      { id: 'ks3r-a19', question: 'What should you do BEFORE answering an exam question?', options: ['Start writing immediately', 'Underline the command word and note the marks', 'Read the whole text three times', 'Write a full essay plan'], correct: 1, explanation: 'Always identify the command word and marks first — this tells you what to do and how long to spend.' },
      { id: 'ks3r-a20', question: 'Which phrase shows you are making an inference?', options: ['"The text says..."', '"This suggests that..."', '"I think..."', '"In conclusion..."'], correct: 1, explanation: '"This suggests that..." shows you are interpreting evidence rather than just quoting or guessing.' },
    ],
  },
  {
    id: 'ks3-writing',
    title: 'KS3 Writing Skills',
    subtitle: 'Build confidence in descriptive, narrative, and persuasive writing.',
    tier: 'KS3',
    price: 29,
    duration: '4-6 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Learn to write with purpose, clarity, and style. From planning to proofreading, this course covers descriptive, narrative, and persuasive writing — the three pillars of English writing at KS3 and beyond.',
    color: '#10b981',
    moduleList: [
      {
        id: 'ks3w-m1',
        title: 'Audience and Purpose',
        duration: '30 mins',
        content: `<h2>Who Are You Writing For?</h2>
<p>Every piece of writing has two things: an <strong>audience</strong> (who reads it) and a <strong>purpose</strong> (why you are writing it). Get these right, and the rest follows naturally.</p>

<h3>Audience</h3>
<p>Your language, tone, and level of detail should change depending on who will read your work:</p>
<ul>
<li><strong>Teenagers</strong> — informal, relatable, direct. You can use contractions and modern references.</li>
<li><strong>Adults / Parents</strong> — slightly more formal, clear, respectful. Avoid slang.</li>
<li><strong>A headteacher</strong> — formal, polite, professional. Standard English, no contractions.</li>
<li><strong>Young children</strong> — simple vocabulary, short sentences, friendly tone.</li>
</ul>

<h3>Purpose</h3>
<p>The main purposes you will write for:</p>
<ul>
<li><strong>Describe</strong> — Paint a picture with words. Use the senses.</li>
<li><strong>Narrate</strong> — Tell a story with characters, setting, and plot.</li>
<li><strong>Argue / Persuade</strong> — Convince the reader of your viewpoint.</li>
<li><strong>Inform / Explain</strong> — Give clear, organised facts or instructions.</li>
<li><strong>Advise</strong> — Offer helpful suggestions with a friendly, supportive tone.</li>
</ul>

<div class="key-term"><strong>Key Term: Register</strong> — The level of formality in your writing. A text message to a friend uses informal register. A letter to a business uses formal register. Matching register to audience is a sign of strong writing.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Before you start writing, write two words at the top of your plan: your audience and your purpose. Check every paragraph against them. If a sentence does not serve your purpose or suit your audience, cut it.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using slang or text speak when writing for a formal audience. "The school should of done better" loses marks. "The school should have done better" is correct and appropriate.</div>`,
        quiz: [
          { id: 'ks3w-m1-q1', question: 'What is "register" in writing?', options: ['A list of students', 'The level of formality', 'A type of sentence', 'The topic of the text'], correct: 1, explanation: 'Register means the level of formality. You adjust your register to match your audience — informal for friends, formal for business.' },
          { id: 'ks3w-m1-q2', question: 'If your audience is a headteacher, which style is most appropriate?', options: ['Slang and abbreviations', 'Formal, polite, Standard English', 'Casual and chatty', 'Poetic and emotional'], correct: 1, explanation: 'A headteacher expects formal, professional writing. Use Standard English, full sentences, and a respectful tone.' },
          { id: 'ks3w-m1-q3', question: 'What is the purpose of persuasive writing?', options: ['To tell a story', 'To describe a scene', 'To convince the reader of your viewpoint', 'To list facts'], correct: 2, explanation: 'Persuasive writing aims to convince. It uses rhetorical devices, evidence, and emotive language to sway the reader.' },
          { id: 'ks3w-m1-q4', question: 'What two things should you identify before starting any writing task?', options: ['Title and word count', 'Audience and purpose', 'First and last sentence', 'Spelling and grammar'], correct: 1, explanation: 'Audience (who) and purpose (why) should guide every choice you make in your writing.' },
        ],
      },
      {
        id: 'ks3w-m2',
        title: 'Planning Your Writing',
        duration: '25 mins',
        content: `<h2>Why Planning Matters</h2>
<p>Students who plan their writing almost always score higher than those who do not. A plan takes five minutes and saves you from rambling, repeating yourself, or running out of ideas halfway through.</p>

<h3>Two Quick Planning Methods</h3>
<p><strong>1. Spider Diagram</strong> — Write your topic in the centre. Branch out with your main ideas. Add details, examples, or techniques to each branch. This works well for descriptive and persuasive writing.</p>

<p><strong>2. Linear Plan</strong> — Number your paragraphs. Write one sentence for each paragraph summarising what it will contain. This works well for narrative writing and arguments.</p>

<h3>How Long to Plan</h3>
<p>For a 45-minute writing task, spend <strong>5 minutes planning</strong>. That leaves 35 minutes for writing and 5 for checking. Five minutes of planning is worth more than five minutes of extra writing.</p>

<div class="key-term"><strong>Key Term: Paragraph plan</strong> — A brief outline showing what each paragraph will cover. Even just one word per paragraph helps keep your writing focused and organised.</div>

<h3>What a Good Plan Includes</h3>
<ul>
<li>Your audience and purpose (at the top)</li>
<li>An opening idea — how will you hook the reader?</li>
<li>3-4 main paragraph ideas</li>
<li>A closing idea — how will you end powerfully?</li>
<li>2-3 techniques you want to include (e.g., metaphor, rhetorical question, short sentence for impact)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Plan your ENDING before you start writing. The best writers know where they are going. A planned ending is almost always stronger than one you make up in the last minute.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Not planning at all because "there isn't time." Students who plan actually finish faster because they do not waste time figuring out what to say next. Five minutes planning saves ten minutes of rewriting.</div>`,
        quiz: [
          { id: 'ks3w-m2-q1', question: 'How long should you spend planning a 45-minute writing task?', options: ['0 minutes', '5 minutes', '15 minutes', '20 minutes'], correct: 1, explanation: '5 minutes of planning leaves 35 for writing and 5 for checking. This is the ideal split.' },
          { id: 'ks3w-m2-q2', question: 'What should you plan BEFORE you start writing the opening?', options: ['The title', 'The ending', 'The font', 'The word count'], correct: 1, explanation: 'Knowing your ending before you begin gives your writing direction and purpose. A planned ending is always stronger.' },
          { id: 'ks3w-m2-q3', question: 'Which planning method works best for narrative writing?', options: ['Spider diagram', 'Linear plan with numbered paragraphs', 'Mind map', 'No plan needed'], correct: 1, explanation: 'A linear plan with numbered paragraphs suits narrative writing because stories follow a sequence.' },
          { id: 'ks3w-m2-q4', question: 'Why does planning save time overall?', options: ['It makes you write faster', 'It prevents rambling and repetition', 'Plans count toward the word count', 'It does not save time'], correct: 1, explanation: 'Planning stops you from going off-topic, repeating yourself, or getting stuck mid-paragraph. The time invested in planning pays off.' },
        ],
      },
      {
        id: 'ks3w-m3',
        title: 'Descriptive Writing',
        duration: '40 mins',
        content: `<h2>Show, Do Not Tell</h2>
<p>The golden rule of descriptive writing: <strong>show the reader, do not tell them</strong>. Instead of writing "she was scared," describe what fear looks like, sounds like, and feels like.</p>

<p><strong>Telling:</strong> "The man was old."</p>
<p><strong>Showing:</strong> "His hands trembled as he reached for the cup, the skin stretched thin as paper over knotted knuckles."</p>

<h3>The Five Senses</h3>
<p>Great description uses more than just sight. Include:</p>
<ul>
<li><strong>Sight</strong> — colours, shapes, light, movement</li>
<li><strong>Sound</strong> — use onomatopoeia and similes for sound</li>
<li><strong>Touch</strong> — textures, temperature, pressure</li>
<li><strong>Smell</strong> — often the most evocative sense; smells trigger memories</li>
<li><strong>Taste</strong> — less common but powerful when used well</li>
</ul>

<div class="key-term"><strong>Key Term: Pathetic fallacy</strong> — Using the weather or environment to reflect a character's mood. Dark clouds for sadness. Bright sunshine for happiness. A storm for conflict.</div>

<h3>Creating Atmosphere</h3>
<p>Atmosphere is the overall feeling or mood of a piece of writing. You create it through:</p>
<ul>
<li><strong>Word choice</strong> — "gloomy" vs "shaded" vs "dark" all describe low light but feel different.</li>
<li><strong>Sentence length</strong> — long, flowing sentences feel peaceful; short, sharp sentences feel tense.</li>
<li><strong>Figurative language</strong> — metaphors and similes shape how the reader sees the world.</li>
</ul>

<div class="text-extract">"The fog comes on little cat feet. It sits looking over harbor and city on silent haunches and then moves on."<div class="source">Carl Sandburg, "Fog"</div></div>

<p>Sandburg uses an extended metaphor comparing fog to a cat. The fog does not roar in — it arrives quietly, "on little cat feet." It "sits" and "looks" — patient, silent, watchful. The whole poem creates an atmosphere of stillness and gentle mystery.</p>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER — Describing a Busy Market</div>
<p>The market roared with life. Stalls lined the narrow street like colourful teeth in an enormous jaw, each one spilling its contents onto the cobblestones: silk scarves that slithered through your fingers, pyramids of oranges bright as small suns, and fish laid out in silver rows, their dead eyes catching the light. The air was thick with the smell of roasting chestnuts and diesel fumes — sweet and sharp at once. Somewhere behind me, a radio crackled with a song I almost recognised, and a child's laughter punched through the noise like a bell.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best descriptive writing does not try to describe everything. Focus on three or four carefully chosen details. Quality always beats quantity.</div>`,
        quiz: [
          { id: 'ks3w-m3-q1', question: 'What does "show, don\'t tell" mean?', options: ['Use pictures instead of words', 'Describe how something looks/sounds/feels rather than just naming the emotion', 'Show your plan to the teacher', 'Tell a story instead of describing'], correct: 1, explanation: '"Show, don\'t tell" means using sensory details and actions to convey emotions rather than just labelling them.' },
          { id: 'ks3w-m3-q2', question: 'What is pathetic fallacy?', options: ['A logical error', 'Using weather to reflect a character\'s mood', 'A weak argument', 'A type of metaphor'], correct: 1, explanation: 'Pathetic fallacy is when the environment mirrors a character\'s emotions — rain for sadness, storms for conflict, sunshine for joy.' },
          { id: 'ks3w-m3-q3', question: 'Which sense is often described as the most evocative?', options: ['Sight', 'Sound', 'Smell', 'Touch'], correct: 2, explanation: 'Smell is strongly connected to memory and emotion, making it particularly powerful in descriptive writing.' },
          { id: 'ks3w-m3-q4', question: 'What creates the strongest descriptive writing?', options: ['Describing every single detail', 'A few carefully chosen details described vividly', 'Using as many adjectives as possible', 'Long paragraphs with no breaks'], correct: 1, explanation: 'Quality beats quantity. Three vivid, specific details are more powerful than ten vague ones.' },
        ],
      },
      {
        id: 'ks3w-m4',
        title: 'Narrative Writing',
        duration: '40 mins',
        content: `<h2>Telling a Great Story</h2>
<p>Narrative writing means telling a story. The best narratives have a clear structure, engaging characters, and a satisfying ending. You do not need a complicated plot — a simple story told brilliantly will always beat a complex story told badly.</p>

<h3>Freytag's Pyramid: Story Structure</h3>
<ul>
<li><strong>Exposition</strong> — Set the scene. Introduce the character, setting, and situation.</li>
<li><strong>Rising Action</strong> — Something changes. Tension builds. The character faces a problem.</li>
<li><strong>Climax</strong> — The most intense moment. The turning point.</li>
<li><strong>Falling Action</strong> — The consequences unfold.</li>
<li><strong>Resolution</strong> — The ending. Things settle — but they do not have to be happy.</li>
</ul>

<h3>Creating Tension</h3>
<p>Tension keeps readers turning the page. You can create it through:</p>
<ul>
<li><strong>Short sentences</strong> — "She stopped. Listened. Nothing."</li>
<li><strong>Withholding information</strong> — "Something moved in the darkness. Something large."</li>
<li><strong>Time pressure</strong> — "The clock showed 11:58. Two minutes."</li>
<li><strong>Sensory overload</strong> — pile on sounds, sights, and physical sensations.</li>
</ul>

<div class="key-term"><strong>Key Term: Dialogue</strong> — Conversation between characters. Good dialogue sounds natural, reveals character, and moves the story forward. Bad dialogue just fills space.</div>

<h3>Dialogue Rules</h3>
<ul>
<li>New speaker = new line.</li>
<li>Use speech marks: "Like this," she said.</li>
<li>Vary your speech verbs: whispered, muttered, snapped — not just "said" every time.</li>
<li>Keep it short. Real people do not speak in paragraphs.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Open with action or description, not "One day..." or "It was a normal morning..." Hook the reader in your first sentence. Drop them into the middle of something interesting.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER — Strong Opening</div>
<p>The letter arrived on a Tuesday, which was unusual because nothing ever arrived on a Tuesday. She turned it over in her hands. No return address. No stamp. Just her name — <em>Mira</em> — in handwriting she had not seen in seven years.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to fit too much plot into a short piece. In an exam, you have 45 minutes. That is enough for one scene or one moment, not an entire adventure. Keep your story focused on a single event.</div>`,
        quiz: [
          { id: 'ks3w-m4-q1', question: 'What is the climax of a story?', options: ['The beginning', 'The most intense turning point', 'The ending', 'The introduction of characters'], correct: 1, explanation: 'The climax is the peak of tension — the most intense, dramatic moment where everything changes.' },
          { id: 'ks3w-m4-q2', question: 'Which opening is strongest?', options: ['"One day, a girl went to school."', '"The letter arrived on a Tuesday."', '"This story is about a girl called Mira."', '"I am going to write about something that happened."'], correct: 1, explanation: 'This opening drops the reader into an unusual event immediately. It creates intrigue without explaining everything.' },
          { id: 'ks3w-m4-q3', question: 'How can short sentences create tension?', options: ['They make writing easier to read', 'They force pauses that build suspense', 'They save time', 'They look neater'], correct: 1, explanation: 'Short sentences create pauses. Each pause builds anticipation. The reader slows down, mirroring the character\'s heightened awareness.' },
          { id: 'ks3w-m4-q4', question: 'In a 45-minute exam, how much plot should your story contain?', options: ['An entire adventure from start to finish', 'One focused scene or moment', 'At least three subplots', 'As much as possible'], correct: 1, explanation: 'One well-told scene is always better than a rushed adventure. Focus on depth — description, emotion, tension — not breadth.' },
        ],
      },
      {
        id: 'ks3w-m5',
        title: 'Persuasive and Argument Writing',
        duration: '35 mins',
        content: `<h2>Making Your Case</h2>
<p>Persuasive writing is about changing someone's mind. Argument writing is about presenting a balanced debate and reaching a conclusion. Both require clear structure, strong evidence, and rhetorical skill.</p>

<h3>AFOREST — Your Rhetorical Toolkit</h3>
<ul>
<li><strong>A</strong>lliteration — "Cruel, callous, and completely unacceptable."</li>
<li><strong>F</strong>acts — "85% of students report feeling stressed by exams."</li>
<li><strong>O</strong>pinion (presented as fact) — "Everyone knows that homework is outdated."</li>
<li><strong>R</strong>hetorical question — "How long must we accept this?"</li>
<li><strong>E</strong>motive language — "Helpless children are being let down by the system."</li>
<li><strong>S</strong>tatistics — "One in five teenagers has experienced cyberbullying."</li>
<li><strong>T</strong>ricolon (rule of three) — "We need change. We need action. We need it now."</li>
</ul>

<h3>Structuring an Argument</h3>
<ol>
<li><strong>Introduction</strong> — State your position clearly. Hook the reader.</li>
<li><strong>Point 1</strong> — Your strongest argument, with evidence.</li>
<li><strong>Point 2</strong> — Your second argument.</li>
<li><strong>Counter-argument</strong> — Acknowledge the other side, then explain why your view is stronger.</li>
<li><strong>Conclusion</strong> — Restate your position powerfully. End with a call to action or a memorable line.</li>
</ol>

<div class="key-term"><strong>Key Term: Counter-argument</strong> — Acknowledging the opposing viewpoint before explaining why your argument is stronger. "Some may say... however..." This shows you have considered both sides and makes your argument more convincing.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Your opening sentence should be punchy and memorable. Start with a bold statement, a shocking fact, or a rhetorical question. Never start with "In this essay I will argue..." — it is dull and wastes words.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER — Strong Opening for Persuasive Writing</div>
<p>Every morning, three million British teenagers drag themselves out of bed before their brains have finished sleeping. The science is clear: adolescents need nine hours of rest, yet school start times force them to function on seven. We are not educating our children — we are exhausting them. It is time for schools to start at 10am.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting the counter-argument. If you only present your side, your argument looks one-sided and naive. Always include at least one paragraph that considers the other viewpoint — then explain why your position is stronger.</div>`,
        quiz: [
          { id: 'ks3w-m5-q1', question: 'What does AFOREST stand for?', options: ['A type of poem', 'Alliteration, Facts, Opinion, Rhetorical question, Emotive language, Statistics, Tricolon', 'A planning technique', 'A grading system'], correct: 1, explanation: 'AFOREST is a toolkit of persuasive techniques: Alliteration, Facts, Opinion, Rhetorical question, Emotive language, Statistics, Tricolon (rule of three).' },
          { id: 'ks3w-m5-q2', question: 'Why should you include a counter-argument?', options: ['To confuse the reader', 'To show you have considered both sides, making your argument stronger', 'Because the question requires it', 'To fill space'], correct: 1, explanation: 'Including a counter-argument shows maturity and balance. It actually strengthens your position because you demonstrate you can dismiss the opposition with evidence.' },
          { id: 'ks3w-m5-q3', question: '"How long must we tolerate this injustice?" What technique is this?', options: ['Statistic', 'Rhetorical question', 'Simile', 'Counter-argument'], correct: 1, explanation: 'This is a rhetorical question — asked for effect, not expecting an answer. It makes the reader feel the answer is obvious.' },
          { id: 'ks3w-m5-q4', question: 'Which opening is best for persuasive writing?', options: ['"In this essay I will argue..."', '"A shocking statistic followed by a bold claim"', '"Dear Sir or Madam"', '"Once upon a time..."'], correct: 1, explanation: 'A punchy opening grabs attention immediately. Starting with a fact, bold claim, or rhetorical question is far more effective than announcing what you will argue.' },
        ],
      },
      {
        id: 'ks3w-m6',
        title: 'Technical Accuracy',
        duration: '35 mins',
        content: `<h2>Getting the Basics Right</h2>
<p>Technical accuracy covers spelling, punctuation, and grammar (SPaG). In GCSE exams, this is worth up to 16 marks — you literally cannot afford to get it wrong. Building good habits now will pay off for years.</p>

<h3>Punctuation That Matters Most</h3>
<p><strong>Commas</strong> — Use them to separate items in a list, after introductory phrases, and to add extra information. "My brother, who is twelve, plays football."</p>
<p><strong>Apostrophes</strong> — Two uses only:</p>
<ul>
<li><em>Possession:</em> "the dog's bone" (one dog), "the dogs' bones" (multiple dogs)</li>
<li><em>Contraction:</em> "don't" = "do not," "it's" = "it is"</li>
<li><strong>NEVER</strong> for plurals: "apple's" is always wrong when you mean more than one apple.</li>
</ul>

<p><strong>Semicolons</strong> — Join two closely related sentences: "The rain stopped; the sun emerged." Both sides must be full sentences.</p>
<p><strong>Colons</strong> — Introduce a list or an explanation: "She had one goal: survival."</p>

<h3>Sentence Variety</h3>
<p>Varying your sentence length and type makes your writing more engaging:</p>
<ul>
<li><strong>Simple:</strong> "The door opened." (Impact)</li>
<li><strong>Compound:</strong> "The door opened and light flooded the room." (Connection)</li>
<li><strong>Complex:</strong> "Although she was afraid, she stepped through the door." (Sophistication)</li>
</ul>

<div class="key-term"><strong>Key Term: Sentence variety</strong> — Deliberately using different sentence lengths and types. A mix of short and long sentences creates rhythm, pace, and emphasis.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> After you finish writing, spend your last 5 minutes checking for errors. Read your work slowly, one sentence at a time. Common errors to check: apostrophes, homophones (their/there/they're), and missing full stops.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing "their," "there," and "they're." Their = belonging to them. There = a place. They're = they are. Also: "your" (belonging to you) vs "you're" (you are).</div>

<h3>Paragraphing</h3>
<p>Start a new paragraph when you change:</p>
<ul>
<li><strong>T</strong>ime — "The next morning..."</li>
<li><strong>P</strong>lace — "In the garden..."</li>
<li><strong>T</strong>opic — Moving to a new idea or argument</li>
<li><strong>S</strong>peaker — New person talking in dialogue</li>
</ul>`,
        quiz: [
          { id: 'ks3w-m6-q1', question: 'When do you use an apostrophe?', options: ['For plurals', 'For possession and contractions only', 'At the end of every sentence', 'Before any "s"'], correct: 1, explanation: 'Apostrophes have exactly two uses: possession (the dog\'s bone) and contraction (don\'t). Never for plurals.' },
          { id: 'ks3w-m6-q2', question: 'What does a semicolon do?', options: ['Ends a sentence', 'Joins two closely related complete sentences', 'Introduces a list', 'Replaces a comma'], correct: 1, explanation: 'A semicolon joins two complete sentences that are closely related: "The rain stopped; the sun emerged."' },
          { id: 'ks3w-m6-q3', question: 'Which is correct?', options: ['"Their going to the park."', '"They\'re going to the park."', '"There going to the park."', '"Theyre going to the park."'], correct: 1, explanation: '"They\'re" = "they are." "Their" = belonging to them. "There" = a place. "They\'re going to the park" is correct.' },
          { id: 'ks3w-m6-q4', question: 'When should you start a new paragraph?', options: ['Every five sentences', 'When you change time, place, topic, or speaker', 'Only at the beginning and end', 'Whenever you feel like it'], correct: 1, explanation: 'The TTPS rule: new paragraph for new Time, Place, Topic, or Speaker.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3w-a1', question: 'What is "register" in writing?', options: ['The class attendance list', 'The level of formality', 'A type of paragraph', 'The word count'], correct: 1, explanation: 'Register is the level of formality you use, which should match your audience.' },
      { id: 'ks3w-a2', question: 'How long should you spend planning a 45-minute writing task?', options: ['0 minutes', '5 minutes', '15 minutes', '25 minutes'], correct: 1, explanation: '5 minutes planning, 35 writing, 5 checking is the ideal split.' },
      { id: 'ks3w-a3', question: 'What does "show, don\'t tell" mean?', options: ['Use images instead of text', 'Use sensory details instead of naming emotions directly', 'Show your work to a partner', 'Tell a story instead of an argument'], correct: 1, explanation: 'It means describing what something looks, sounds, and feels like rather than just labelling the emotion.' },
      { id: 'ks3w-a4', question: 'What is the climax of a story?', options: ['The opening', 'The most intense turning point', 'The resolution', 'The description'], correct: 1, explanation: 'The climax is the peak moment of tension — the turning point.' },
      { id: 'ks3w-a5', question: 'What is a counter-argument?', options: ['An argument that supports your view', 'Acknowledging the opposing viewpoint', 'A fact you cannot prove', 'The conclusion'], correct: 1, explanation: 'A counter-argument considers the other side before explaining why your position is stronger.' },
      { id: 'ks3w-a6', question: 'What does a colon introduce?', options: ['A new paragraph', 'A list or explanation', 'A question', 'A dialogue'], correct: 1, explanation: 'A colon introduces what follows: a list, an explanation, or an elaboration.' },
      { id: 'ks3w-a7', question: 'Which is the best opening for a narrative?', options: ['"One normal day..."', '"I woke up and brushed my teeth."', '"The letter arrived without a stamp."', '"This story is about a boy."'], correct: 2, explanation: 'This opening creates immediate intrigue by presenting something unusual.' },
      { id: 'ks3w-a8', question: '"We need change. We need action. We need it now." What technique is this?', options: ['Alliteration', 'Tricolon and anaphora', 'Simile', 'Counter-argument'], correct: 1, explanation: 'This uses both tricolon (three items) and anaphora (repeated "We need") for powerful emphasis.' },
      { id: 'ks3w-a9', question: 'Which sense is described as the most evocative in descriptive writing?', options: ['Sight', 'Hearing', 'Smell', 'Taste'], correct: 2, explanation: 'Smell is strongly connected to memory and emotion, making it particularly powerful.' },
      { id: 'ks3w-a10', question: 'What are the two uses of apostrophes?', options: ['Plurals and possession', 'Possession and contraction', 'Questions and exclamations', 'Lists and quotations'], correct: 1, explanation: 'Apostrophes are for possession (the dog\'s bone) and contraction (don\'t). Never for plurals.' },
      { id: 'ks3w-a11', question: 'What is pathetic fallacy?', options: ['A weak argument', 'Weather reflecting a character\'s mood', 'A type of dialogue', 'An unreliable narrator'], correct: 1, explanation: 'Pathetic fallacy uses weather/environment to mirror emotions — storms for anger, sunshine for happiness.' },
      { id: 'ks3w-a12', question: 'When should you start a new paragraph?', options: ['Every 100 words', 'When changing time, place, topic, or speaker', 'Only when the teacher tells you', 'At the end of each page'], correct: 1, explanation: 'TTPS: new paragraph for new Time, Place, Topic, or Speaker.' },
      { id: 'ks3w-a13', question: 'What is the purpose of the last 5 minutes of a writing exam?', options: ['Writing your conclusion', 'Checking for errors', 'Starting a new paragraph', 'Reading the question again'], correct: 1, explanation: 'The last 5 minutes should be spent checking for spelling, punctuation, and grammar errors.' },
      { id: 'ks3w-a14', question: '"Their," "there," and "they\'re" — which means "belonging to them"?', options: ['There', 'They\'re', 'Their', 'All three'], correct: 2, explanation: '"Their" = belonging to them. "There" = a place. "They\'re" = they are.' },
      { id: 'ks3w-a15', question: 'What makes dialogue effective?', options: ['Long speeches', 'Sounding natural and revealing character', 'Using "said" every time', 'Including every word characters say'], correct: 1, explanation: 'Good dialogue sounds natural, reveals something about the characters, and moves the story forward.' },
      { id: 'ks3w-a16', question: 'What is a rhetorical question?', options: ['A question on the exam paper', 'A question asked for effect, not expecting an answer', 'A question about grammar', 'A question with multiple answers'], correct: 1, explanation: 'Rhetorical questions are asked for impact — they make the reader think without expecting a direct answer.' },
      { id: 'ks3w-a17', question: 'Which sentence type shows sophistication?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 2, explanation: 'Complex sentences (with subordinate clauses) show sophistication: "Although it was raining, she walked to school."' },
      { id: 'ks3w-a18', question: 'What should your plan include?', options: ['Full sentences for every paragraph', 'Audience, purpose, main points, and planned ending', 'Only your opening line', 'A list of techniques to use'], correct: 1, explanation: 'A good plan includes audience, purpose, main paragraph ideas, and your planned ending.' },
      { id: 'ks3w-a19', question: 'What is the AFOREST technique "E" for?', options: ['Evidence', 'Emotive language', 'Examples', 'Exaggeration'], correct: 1, explanation: 'E in AFOREST stands for Emotive language — words chosen to provoke an emotional response.' },
      { id: 'ks3w-a20', question: 'How many events should a narrative cover in a 45-minute exam?', options: ['As many as possible', 'One focused scene or moment', 'At least five', 'The entire story from birth to death'], correct: 1, explanation: 'One well-developed scene with rich description and tension is far better than a rushed adventure.' },
    ],
  },
  {
    id: 'ks3-grammar',
    title: 'KS3 Grammar & Vocabulary',
    subtitle: 'Master the building blocks of the English language.',
    tier: 'KS3',
    price: 19,
    duration: '3-4 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Understand how English works at the word and sentence level. Parts of speech, sentence types, punctuation, vocabulary building, and spelling strategies — the foundations that everything else is built on.',
    color: '#10b981',
    moduleList: [
      {
        id: 'ks3g-m1',
        title: 'Parts of Speech',
        duration: '30 mins',
        content: `<h2>The Building Blocks of Language</h2>
<p>Every word in the English language belongs to a word class (also called a "part of speech"). Understanding these classes helps you talk about language precisely — which is exactly what examiners want.</p>

<h3>The Main Word Classes</h3>
<p><strong>Nouns</strong> — Names for things. Four types:</p>
<ul>
<li><em>Proper nouns</em> — specific names: London, Shakespeare, Tuesday</li>
<li><em>Common nouns</em> — general names: city, writer, day</li>
<li><em>Abstract nouns</em> — things you cannot touch: love, fear, justice</li>
<li><em>Collective nouns</em> — groups: a flock, a crowd, a team</li>
</ul>

<p><strong>Verbs</strong> — Action or state words. "She <strong>ran</strong>." "He <strong>was</strong> tired."</p>
<ul>
<li><em>Dynamic verbs</em> — show action: run, jump, write</li>
<li><em>Stative verbs</em> — show state: believe, know, feel</li>
</ul>

<p><strong>Adjectives</strong> — Describe nouns. "The <strong>tall</strong>, <strong>dark</strong> stranger."</p>
<p><strong>Adverbs</strong> — Modify verbs, adjectives, or other adverbs. "She ran <strong>quickly</strong>." "It was <strong>extremely</strong> cold."</p>
<p><strong>Conjunctions</strong> — Join words or clauses. Coordinating: and, but, or. Subordinating: because, although, when.</p>
<p><strong>Prepositions</strong> — Show position or relationship: in, on, under, between, through.</p>

<div class="key-term"><strong>Key Term: Subject terminology</strong> — Using the correct grammatical names for things. Saying "the adjective 'cold'" is more precise than "the describing word 'cold'" and earns more marks.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing language, always name the word class. "The verb 'crept' suggests..." is much stronger than "The word 'crept' suggests..." It shows you understand grammar.</div>`,
        quiz: [
          { id: 'ks3g-m1-q1', question: '"Justice" is an example of what type of noun?', options: ['Proper noun', 'Common noun', 'Abstract noun', 'Collective noun'], correct: 2, explanation: '"Justice" is something you cannot physically touch — it is an idea, making it an abstract noun.' },
          { id: 'ks3g-m1-q2', question: 'What does an adverb modify?', options: ['Only nouns', 'Verbs, adjectives, or other adverbs', 'Only sentences', 'Only proper nouns'], correct: 1, explanation: 'Adverbs modify verbs (ran quickly), adjectives (extremely cold), or other adverbs (very slowly).' },
          { id: 'ks3g-m1-q3', question: 'Which of these is a subordinating conjunction?', options: ['And', 'But', 'Because', 'Or'], correct: 2, explanation: '"Because" is a subordinating conjunction — it introduces a subordinate clause that cannot stand alone.' },
          { id: 'ks3g-m1-q4', question: 'Why should you name word classes in your analysis?', options: ['It wastes time', 'It shows grammatical knowledge and earns more marks', 'It is only for grammar questions', 'It is not necessary'], correct: 1, explanation: 'Using correct terminology like "the adjective..." or "the verb..." shows precision and grammatical understanding.' },
        ],
      },
      {
        id: 'ks3g-m2',
        title: 'Sentence Types',
        duration: '25 mins',
        content: `<h2>Four Sentence Types</h2>
<p>Being able to identify and use different sentence types is essential for both analysis and writing. Varying your sentences makes your writing more engaging and sophisticated.</p>

<h3>1. Simple Sentence</h3>
<p>One main clause (subject + verb). "The dog barked." "She sat down."</p>
<p><strong>Effect:</strong> Direct, clear, punchy. Perfect for impact and emphasis.</p>

<h3>2. Compound Sentence</h3>
<p>Two main clauses joined by a coordinating conjunction (and, but, or, so, yet).</p>
<p>"The sun rose <strong>and</strong> the birds began to sing."</p>
<p><strong>Effect:</strong> Shows connection between two equal ideas.</p>

<h3>3. Complex Sentence</h3>
<p>A main clause + one or more subordinate clauses.</p>
<p>"<strong>Although it was raining</strong>, they went outside."</p>
<p>The subordinate clause ("although it was raining") cannot stand alone as a sentence.</p>
<p><strong>Effect:</strong> Shows the relationship between ideas. Demonstrates sophistication.</p>

<h3>4. Compound-Complex Sentence</h3>
<p>Two or more main clauses + at least one subordinate clause.</p>
<p>"<strong>When the bell rang</strong>, the students stood up <strong>and</strong> they filed out of the room."</p>

<div class="key-term"><strong>Key Term: Clause</strong> — A group of words containing a subject and a verb. A main clause can stand alone. A subordinate clause cannot.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In your own writing, use simple sentences for impact and complex sentences for sophistication. The contrast between them creates rhythm and keeps the reader engaged.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing only in simple sentences makes your work sound childish. Writing only in complex sentences makes it hard to follow. The best writing mixes all types deliberately.</div>`,
        quiz: [
          { id: 'ks3g-m2-q1', question: '"The door slammed." What type of sentence is this?', options: ['Compound', 'Complex', 'Simple', 'Compound-complex'], correct: 2, explanation: 'This has one main clause with a subject (door) and verb (slammed) — a simple sentence.' },
          { id: 'ks3g-m2-q2', question: 'What joins the two parts of a compound sentence?', options: ['A full stop', 'A subordinating conjunction', 'A coordinating conjunction', 'A comma alone'], correct: 2, explanation: 'Compound sentences use coordinating conjunctions: and, but, or, so, yet (FANBOYS).' },
          { id: 'ks3g-m2-q3', question: '"Although she was tired, she kept running." What type of sentence is this?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 2, explanation: 'This has a main clause ("she kept running") and a subordinate clause ("Although she was tired") — a complex sentence.' },
          { id: 'ks3g-m2-q4', question: 'What is the effect of using simple sentences?', options: ['They sound childish', 'They create impact, clarity, and emphasis', 'They show sophistication', 'They have no particular effect'], correct: 1, explanation: 'Simple sentences are direct and punchy. Used deliberately, they create emphasis and impact.' },
        ],
      },
      {
        id: 'ks3g-m3',
        title: 'Punctuation Mastery',
        duration: '35 mins',
        content: `<h2>Punctuation Changes Meaning</h2>
<p>Punctuation is not decoration. It changes the meaning of sentences. "Let's eat, Grandma!" means something very different from "Let's eat Grandma!" A comma saves a life.</p>

<h3>The Essential Marks</h3>
<p><strong>Full stops (.)</strong> — End a sentence. Every sentence needs one (unless it ends with ? or !).</p>

<p><strong>Commas (,)</strong> — The most misused mark. Use for:</p>
<ul>
<li>Lists: "apples, oranges, and bananas"</li>
<li>After introductory phrases: "However, she disagreed."</li>
<li>Parenthesis: "My brother, who is twelve, plays football."</li>
<li>Before coordinating conjunctions in compound sentences: "It rained, but we went out."</li>
</ul>

<p><strong>Apostrophes (')</strong> — Two uses:</p>
<ul>
<li>Possession: the cat's tail (one cat), the cats' tails (multiple cats)</li>
<li>Contraction: can't, don't, it's (it is)</li>
</ul>

<p><strong>Semicolons (;)</strong> — Join two related complete sentences: "The rain stopped; the sun emerged."</p>

<p><strong>Colons (:)</strong> — Introduce a list, explanation, or elaboration: "She needed three things: courage, patience, and luck."</p>

<p><strong>Dashes (—)</strong> — Add extra information or create a dramatic pause: "The answer was obvious — or so she thought."</p>

<p><strong>Speech marks (" ")</strong> — Surround spoken words: "I'm leaving," she said.</p>

<div class="key-term"><strong>Key Term: Its vs It's</strong> — "It's" = "it is" (contraction). "Its" = belonging to it (possession). This is the most common mistake in English and examiners specifically look for it.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using a comma to join two complete sentences without a conjunction. "She ran home, she was tired" is a comma splice. Fix it with a semicolon, full stop, or conjunction: "She ran home; she was tired" or "She ran home because she was tired."</div>`,
        quiz: [
          { id: 'ks3g-m3-q1', question: 'Which sentence uses the apostrophe correctly?', options: ['"The dog wagged it\'s tail."', '"The dog wagged its tail."', '"The dogs wagged it\'s tail."', '"The dog\'s wagged its tails."'], correct: 1, explanation: '"Its" (no apostrophe) means belonging to it. "It\'s" means "it is." The dog\'s tail belongs to the dog, so "its" is correct here.' },
          { id: 'ks3g-m3-q2', question: 'What is a comma splice?', options: ['Using too many commas', 'Joining two complete sentences with only a comma', 'Forgetting a comma', 'Using a comma before "and"'], correct: 1, explanation: 'A comma splice incorrectly joins two sentences with just a comma. Fix with a semicolon, conjunction, or full stop.' },
          { id: 'ks3g-m3-q3', question: 'When do you use a semicolon?', options: ['Before a list', 'To join two related complete sentences', 'After every clause', 'Instead of a full stop'], correct: 1, explanation: 'A semicolon joins two complete, closely related sentences: "It rained; we stayed inside."' },
          { id: 'ks3g-m3-q4', question: 'What does a colon introduce?', options: ['A new paragraph', 'A list, explanation, or elaboration', 'A question', 'Dialogue'], correct: 1, explanation: 'A colon introduces what follows — a list, an explanation, or an elaboration of the preceding statement.' },
        ],
      },
      {
        id: 'ks3g-m4',
        title: 'Building Vocabulary',
        duration: '30 mins',
        content: `<h2>Words Are Your Tools</h2>
<p>A wide vocabulary lets you express ideas with precision. Instead of saying something is "good," you can say it is <em>effective, compelling, remarkable, invaluable</em>, or <em>exemplary</em> — each with a slightly different meaning.</p>

<h3>Tier 2 and Tier 3 Vocabulary</h3>
<ul>
<li><strong>Tier 1</strong> — Everyday words: big, happy, said. You already know these.</li>
<li><strong>Tier 2</strong> — Academic words used across subjects: analyse, significant, demonstrate, convey, illustrate. These are the words that upgrade your writing.</li>
<li><strong>Tier 3</strong> — Subject-specific words: metaphor, alliteration, protagonist, semantic field. These show you know the subject.</li>
</ul>

<h3>Connotation: The Hidden Meaning</h3>
<p>Synonyms do not always mean the same thing. Consider: <em>childish</em> vs <em>childlike</em>. Both relate to children, but "childish" is negative (immature) and "childlike" is positive (innocent, pure). The connotations are completely different.</p>

<p>More examples:</p>
<ul>
<li><em>Slender</em> (positive) vs <em>skinny</em> (negative) vs <em>thin</em> (neutral)</li>
<li><em>Determined</em> (positive) vs <em>stubborn</em> (negative) vs <em>persistent</em> (neutral)</li>
</ul>

<div class="key-term"><strong>Key Term: Word family</strong> — A group of words sharing the same root. Terror → terrify → terrifying → terrified → terrorism → terrorist. Knowing one word helps you understand the whole family.</div>

<h3>How to Build Your Vocabulary</h3>
<ol>
<li><strong>Read widely</strong> — novels, newspapers, magazines, non-fiction. Every new word you encounter is a word you can use.</li>
<li><strong>Use a vocabulary journal</strong> — Write down new words with their definition and an example sentence.</li>
<li><strong>Practice using new words</strong> — Try to use one new word in your writing each week. If you can use it correctly three times, it becomes part of your vocabulary.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to use complicated words everywhere. The mark for vocabulary is about choosing the RIGHT word, not the longest word. "The cold bit through his coat" is better than "The frigid temperature permeated his outerwear."</div>`,
        quiz: [
          { id: 'ks3g-m4-q1', question: 'What is a Tier 2 word?', options: ['An everyday word like "big"', 'An academic word used across subjects like "analyse"', 'A subject-specific word like "metaphor"', 'A slang word'], correct: 1, explanation: 'Tier 2 words are academic vocabulary used across subjects — words like analyse, significant, demonstrate. They upgrade your writing.' },
          { id: 'ks3g-m4-q2', question: 'What is the difference between "childish" and "childlike"?', options: ['They mean the same thing', '"Childish" is negative; "childlike" is positive', '"Childlike" is negative; "childish" is positive', 'One is a noun and the other is an adjective'], correct: 1, explanation: '"Childish" connotes immaturity (negative). "Childlike" connotes innocence and wonder (positive). Same root, different connotations.' },
          { id: 'ks3g-m4-q3', question: 'What is a word family?', options: ['Words that rhyme', 'A group of words sharing the same root', 'Synonyms', 'Words in the same sentence'], correct: 1, explanation: 'A word family shares a root: terror → terrify → terrifying → terrified. Knowing the root helps you understand related words.' },
          { id: 'ks3g-m4-q4', question: 'Should you always use the longest, most complex word?', options: ['Yes, always', 'No — use the RIGHT word, not the longest', 'Only in conclusions', 'Only in formal writing'], correct: 1, explanation: 'Precision matters more than complexity. The right word at the right moment is more effective than a long word that does not fit.' },
        ],
      },
      {
        id: 'ks3g-m5',
        title: 'Spelling Strategies',
        duration: '25 mins',
        content: `<h2>Common Errors and How to Fix Them</h2>
<p>English spelling is notoriously tricky, but most errors follow patterns. Learn the patterns and you will eliminate the most common mistakes.</p>

<h3>The Top 10 Misspelled Words in English Exams</h3>
<ol>
<li><strong>definitely</strong> — NOT "definately." Think: definite + ly.</li>
<li><strong>separate</strong> — NOT "seperate." There is "a rat" in separate.</li>
<li><strong>because</strong> — NOT "becuase." Mnemonic: Big Elephants Can Always Understand Small Elephants.</li>
<li><strong>believe</strong> — NOT "beleive." There is a "lie" in believe.</li>
<li><strong>their / there / they're</strong> — Their = belonging. There = place. They're = they are.</li>
<li><strong>which</strong> — NOT "wich." Always starts with "wh."</li>
<li><strong>beginning</strong> — Double n: begin + ning.</li>
<li><strong>necessary</strong> — One collar (c), two socks (s): ne<strong>c</strong>e<strong>ss</strong>ary.</li>
<li><strong>embarrass</strong> — Double r, double s: emba<strong>rr</strong>a<strong>ss</strong>.</li>
<li><strong>disappear</strong> — One s, two p's: di<strong>s</strong>a<strong>pp</strong>ear.</li>
</ol>

<h3>Spelling Patterns</h3>
<p><strong>i before e, except after c</strong> (when the sound is "ee"):</p>
<ul>
<li>believe, achieve, piece — i before e</li>
<li>receive, ceiling, deceive — except after c</li>
<li>Exceptions: weird, seize, neither (yes, English is annoying)</li>
</ul>

<p><strong>Doubling consonants:</strong></p>
<ul>
<li>When adding -ing or -ed to a short word ending in a consonant, double it: run → running, stop → stopped</li>
<li>But NOT if the word ends in two consonants: jump → jumping</li>
</ul>

<div class="key-term"><strong>Key Term: Mnemonic</strong> — A memory trick that helps you remember something. "Big Elephants Can Always Understand Small Elephants" = BECAUSE.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are unsure how to spell a word in an exam, use a synonym you CAN spell. Avoid "necessary" if you are not confident — use "essential" instead. Using a simpler word correctly is always better than misspelling a complex one.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> "Should of" instead of "should have." This happens because "should've" sounds like "should of." But "of" is never correct after should/could/would. It is always "should HAVE."</div>`,
        quiz: [
          { id: 'ks3g-m5-q1', question: 'Which spelling is correct?', options: ['Definately', 'Definatly', 'Definitely', 'Definitly'], correct: 2, explanation: '"Definitely" — think "definite" + "ly." The root word is "definite" with an "i," not an "a."' },
          { id: 'ks3g-m5-q2', question: 'What is a mnemonic?', options: ['A type of poem', 'A memory trick for spelling', 'A punctuation mark', 'A word class'], correct: 1, explanation: 'A mnemonic is a memory aid — like "there is a LIE in beLIEve" or "Big Elephants Can Always Understand Small Elephants" for BECAUSE.' },
          { id: 'ks3g-m5-q3', question: 'Which is correct: "should of" or "should have"?', options: ['Should of', 'Should have', 'Both are correct', 'Neither is correct'], correct: 1, explanation: '"Should have" is always correct. "Should of" is a common error caused by the contraction "should\'ve" sounding like "should of."' },
          { id: 'ks3g-m5-q4', question: 'What should you do if you cannot spell a word in an exam?', options: ['Guess and hope for the best', 'Leave a blank space', 'Use a synonym you can spell correctly', 'Write it phonetically'], correct: 2, explanation: 'If you are unsure, use a synonym you can spell. A simpler word spelled correctly is better than a complex word spelled wrong.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3g-a1', question: '"Freedom" is an example of what type of noun?', options: ['Proper', 'Collective', 'Abstract', 'Common'], correct: 2, explanation: '"Freedom" is an abstract noun — you cannot physically touch it.' },
      { id: 'ks3g-a2', question: 'What does an adjective describe?', options: ['A verb', 'A noun', 'An adverb', 'A preposition'], correct: 1, explanation: 'Adjectives describe nouns: "the tall building," "a red car."' },
      { id: 'ks3g-a3', question: '"Although she was tired, she finished the race." What type of sentence?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 2, explanation: 'This has a subordinate clause ("Although she was tired") + main clause — complex sentence.' },
      { id: 'ks3g-a4', question: 'What is the correct use of a semicolon?', options: ['Before a list', 'Joining two related complete sentences', 'After a conjunction', 'Replacing a comma'], correct: 1, explanation: 'Semicolons join two complete, related sentences without a conjunction.' },
      { id: 'ks3g-a5', question: 'Which word is a subordinating conjunction?', options: ['And', 'But', 'Although', 'Or'], correct: 2, explanation: '"Although" introduces a subordinate clause that cannot stand alone.' },
      { id: 'ks3g-a6', question: '"It\'s" means...', options: ['Belonging to it', 'It is', 'A plural', 'It was'], correct: 1, explanation: '"It\'s" is a contraction of "it is." "Its" (no apostrophe) means belonging to it.' },
      { id: 'ks3g-a7', question: 'What is a Tier 2 word?', options: ['Slang', 'An academic word used across subjects', 'A very long word', 'A word only used in English'], correct: 1, explanation: 'Tier 2 words are academic vocabulary (analyse, significant, demonstrate) used across all subjects.' },
      { id: 'ks3g-a8', question: '"Slender" and "skinny" differ in their...', options: ['Spelling', 'Connotations', 'Pronunciation', 'Length'], correct: 1, explanation: 'Both describe thinness, but "slender" has positive connotations while "skinny" is negative.' },
      { id: 'ks3g-a9', question: 'How do you spell the word meaning "required"?', options: ['Neccesary', 'Neccessary', 'Necessary', 'Necesary'], correct: 2, explanation: '"Necessary" — one c, two s\'s. Remember: one collar, two socks.' },
      { id: 'ks3g-a10', question: 'What type of verb is "believe"?', options: ['Dynamic', 'Stative', 'Modal', 'Auxiliary'], correct: 1, explanation: '"Believe" is a stative verb — it describes a state of mind, not a physical action.' },
      { id: 'ks3g-a11', question: 'What is a comma splice?', options: ['A correctly used comma', 'Joining two sentences with only a comma', 'Using too few commas', 'A comma before "and"'], correct: 1, explanation: 'A comma splice incorrectly joins two complete sentences with just a comma.' },
      { id: 'ks3g-a12', question: 'When do you double the consonant before adding -ing?', options: ['Always', 'When the word ends in a single consonant after a short vowel', 'Never', 'Only for long words'], correct: 1, explanation: 'Double the final consonant when a short word ends consonant-vowel-consonant: run → running, stop → stopping.' },
      { id: 'ks3g-a13', question: 'A preposition shows...', options: ['Time only', 'The relationship between a noun and another word', 'Action', 'Emotion'], correct: 1, explanation: 'Prepositions show relationships of position, time, or direction: in, on, under, between, during.' },
      { id: 'ks3g-a14', question: 'Which is correct?', options: ['"They\'re books are here."', '"Their books are here."', '"There books are here."', '"Theyre books are here."'], correct: 1, explanation: '"Their" = belonging to them. The books belong to them, so "their" is correct.' },
      { id: 'ks3g-a15', question: '"She ran quickly." What word class is "quickly"?', options: ['Adjective', 'Noun', 'Adverb', 'Verb'], correct: 2, explanation: '"Quickly" modifies the verb "ran," telling us how she ran — it is an adverb.' },
      { id: 'ks3g-a16', question: 'What does a colon do?', options: ['Ends a sentence', 'Introduces a list or explanation', 'Joins equal clauses', 'Marks a question'], correct: 1, explanation: 'A colon introduces what follows: a list, explanation, or elaboration.' },
      { id: 'ks3g-a17', question: '"The dog barked and the cat hid." What type of sentence?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 1, explanation: 'Two main clauses joined by "and" (coordinating conjunction) — compound sentence.' },
      { id: 'ks3g-a18', question: 'What is the best way to build vocabulary?', options: ['Memorise the dictionary', 'Read widely and note new words', 'Only use long words', 'Avoid unfamiliar words'], correct: 1, explanation: 'Reading widely exposes you to new words in context, which is the most effective way to build vocabulary.' },
      { id: 'ks3g-a19', question: '"Should of" is...', options: ['Correct', 'Incorrect — it should be "should have"', 'Only correct in informal writing', 'An alternative spelling'], correct: 1, explanation: '"Should of" is always wrong. The correct form is "should have" (contracted: "should\'ve").' },
      { id: 'ks3g-a20', question: 'In "i before e except after c," which word is an exception?', options: ['Believe', 'Receive', 'Weird', 'Achieve'], correct: 2, explanation: '"Weird" is an exception — it has "ei" without a preceding "c" and does not follow the pattern.' },
    ],
  },
];

const ks3CoursesExtra: CourseData[] = [
  {
    id: 'ks3-poetry',
    title: 'KS3 Poetry Skills',
    subtitle: 'Explore rhythm, imagery, and the craft of poetry for Years 7-9.',
    tier: 'KS3',
    board: 'All',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Discover how poets use rhythm, rhyme, imagery, and figurative language to create powerful effects. Learn to compare poems, write confidently about poetry, and build a strong foundation for GCSE Literature.',
    color: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    moduleList: [
      {
        id: 'ks3p-m1',
        title: 'What is Poetry?',
        duration: '30 mins',
        content: `<h2>Understanding Poetry as a Literary Form</h2>
<p>Poetry is one of the oldest forms of literature. Long before novels, newspapers, or social media, human beings were telling stories, expressing emotions, and preserving their cultures through poetry. But what exactly makes a poem a poem, and why does it matter in your English studies?</p>

<h3>Poetry vs Prose</h3>
<p>The simplest distinction is that prose is written in continuous sentences and paragraphs (like a novel or newspaper article), while poetry is written in <strong>lines</strong> and often grouped into <strong>stanzas</strong> (the poetry equivalent of paragraphs). However, the differences run much deeper than layout.</p>
<p>Poetry tends to be <strong>compressed</strong> — every single word carries enormous weight. A novelist might use a whole chapter to describe loneliness; a poet might capture the same feeling in a single image. This compression is what makes poetry so powerful and so rewarding to analyse.</p>

<h3>Key Features of Poetry</h3>
<ul>
<li><strong>Line breaks</strong> — Poets choose where to end each line. A line break can create suspense, emphasis, or surprise. When a sentence runs past the end of a line into the next, it is called <strong>enjambment</strong>.</li>
<li><strong>Stanzas</strong> — Groups of lines separated by gaps, similar to paragraphs. Different stanza lengths create different effects: a couplet (two lines) feels tight and punchy; a longer stanza can build atmosphere.</li>
<li><strong>Sound</strong> — Poetry is designed to be heard as well as read. Rhythm, rhyme, alliteration, and assonance all contribute to the musicality of a poem.</li>
<li><strong>Imagery</strong> — Poets use vivid descriptions that appeal to the senses (sight, sound, touch, taste, smell) to make the reader experience something rather than just understand it.</li>
<li><strong>Figurative language</strong> — Metaphor, simile, and personification allow poets to say one thing and mean another, adding layers of meaning.</li>
</ul>

<div class="key-term"><strong>Key Term: Stanza</strong> — A group of lines in a poem, separated from other groups by a blank line. Think of it as a verse or paragraph of poetry.</div>

<h3>Why Study Poetry?</h3>
<p>Poetry sharpens every English skill you have. Because poems are short and dense, you learn to read closely, pick apart language, and explain effects — skills that transfer directly to prose analysis, writing, and even media literacy. Poetry also teaches you to listen to the music of language, which makes your own writing more sophisticated.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When you first read a poem, read it aloud (or in your head as if reading aloud). Poetry is written for the ear as well as the eye, and hearing the rhythm and sounds helps you understand the poet's choices.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating a poem like a puzzle with a single "correct answer." Poems are open to interpretation — what matters is that you support your ideas with evidence from the text.</div>`,
        quiz: [
          { id: 'ks3p-m1-q1', question: 'What is a stanza?', options: ['A type of rhyme scheme', 'A group of lines in a poem separated by a blank line', 'The title of a poem', 'A poem with exactly four lines'], correct: 1, explanation: 'A stanza is a group of lines in a poem, separated from other stanzas by a gap. It functions like a paragraph in prose.' },
          { id: 'ks3p-m1-q2', question: 'What is enjambment?', options: ['When a poem rhymes', 'When a sentence runs past the end of a line into the next', 'When a poem has no punctuation', 'When two words alliterate'], correct: 1, explanation: 'Enjambment occurs when a sentence or phrase continues beyond the end of a line without stopping. It can create momentum or surprise.' },
          { id: 'ks3p-m1-q3', question: 'Why is poetry described as "compressed"?', options: ['Because poems are printed in small font', 'Because every word carries enormous weight and meaning', 'Because poems must be shorter than 100 words', 'Because poets write quickly'], correct: 1, explanation: 'Poetry is compressed because poets pack a great deal of meaning into very few words. Each word is carefully chosen for its sound, connotations, and effect.' },
        ],
      },
      {
        id: 'ks3p-m2',
        title: 'Rhythm & Rhyme',
        duration: '35 mins',
        content: `<h2>The Music of Poetry</h2>
<p>Rhythm and rhyme are the most immediately noticeable features of many poems. They give poetry its musical quality and help create mood, pace, and emphasis. Understanding how rhythm and rhyme work will transform your ability to analyse poems.</p>

<h3>What is Rhythm?</h3>
<p>Rhythm is the pattern of stressed and unstressed syllables in a line of poetry. When you say the word "today," you naturally emphasise the second syllable: to-<strong>DAY</strong>. Poets arrange words so that stressed and unstressed syllables create a regular beat, known as <strong>metre</strong>.</p>

<p>The most common metre in English poetry is <strong>iambic pentameter</strong>: five pairs of syllables where the stress falls on the second beat. Shakespeare used it constantly: "Shall <strong>I</strong> com-<strong>PARE</strong> thee <strong>TO</strong> a <strong>SUM</strong>-mer's <strong>DAY</strong>?" This rhythm sounds natural in English because it mirrors the patterns of everyday speech.</p>

<h3>Why Rhythm Matters</h3>
<ul>
<li><strong>Regular rhythm</strong> can create a calm, controlled, or song-like feel. It suggests order and certainty.</li>
<li><strong>Irregular rhythm</strong> or a sudden break in the pattern can signal emotion, disruption, or a shift in meaning. When a poet breaks the rhythm, pay attention — they are drawing your eye to something important.</li>
<li><strong>Fast rhythm</strong> (short syllables, few pauses) creates urgency and excitement.</li>
<li><strong>Slow rhythm</strong> (long vowel sounds, lots of punctuation) creates a thoughtful or sorrowful tone.</li>
</ul>

<h3>Rhyme Schemes</h3>
<p>Rhyme is when words share the same end sound. Poets use different rhyme patterns, and we label them with letters:</p>
<ul>
<li><strong>ABAB</strong> — alternate rhyme. Line 1 rhymes with line 3, line 2 with line 4. This creates a flowing, song-like quality.</li>
<li><strong>AABB</strong> — rhyming couplets. Each pair of lines rhymes. This feels neat, decisive, and sometimes humorous.</li>
<li><strong>ABBA</strong> — enclosed rhyme. The outer lines rhyme and the inner lines rhyme. This can create a sense of containment or return.</li>
<li><strong>Free verse</strong> — no regular rhyme scheme. The poet relies on other sound effects and imagery instead.</li>
</ul>

<div class="key-term"><strong>Key Term: Metre</strong> — The regular pattern of stressed and unstressed syllables in poetry. Iambic pentameter (five pairs, stress on the second syllable) is the most common metre in English.</div>

<h3>Half-Rhyme and Internal Rhyme</h3>
<p><strong>Half-rhyme</strong> (also called slant rhyme) is when words almost rhyme but not quite: "love" and "move," or "eyes" and "memories." Half-rhyme creates a sense of unease or incompleteness — things not quite fitting together.</p>
<p><strong>Internal rhyme</strong> is rhyme that occurs within a line rather than at the end: "The rain in Spain falls mainly on the plain." Internal rhyme increases the musical quality and pace of a line.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not just identify a rhyme scheme — explain its effect. "The AABB rhyme scheme creates a sense of certainty and finality, as each idea is neatly concluded in a couplet" is far stronger than "The poem uses rhyming couplets."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Saying a poem "flows nicely" without explaining what creates that flow. Be specific: is it the regular rhythm, the rhyme scheme, the enjambment, or the long vowel sounds?</div>`,
        quiz: [
          { id: 'ks3p-m2-q1', question: 'What is iambic pentameter?', options: ['A poem with five stanzas', 'Five pairs of syllables with stress on the second beat', 'A poem that rhymes in couplets', 'A type of free verse'], correct: 1, explanation: 'Iambic pentameter consists of five iambic feet (pairs of syllables where the second is stressed). It is the most common metre in English poetry.' },
          { id: 'ks3p-m2-q2', question: 'What does an ABAB rhyme scheme mean?', options: ['Every line rhymes', 'Lines 1 and 3 rhyme, lines 2 and 4 rhyme', 'Only the last two lines rhyme', 'There is no rhyme'], correct: 1, explanation: 'ABAB means alternate rhyme: the first line rhymes with the third, and the second line rhymes with the fourth.' },
          { id: 'ks3p-m2-q3', question: 'What effect can half-rhyme create?', options: ['A perfect musical quality', 'A sense of unease or incompleteness', 'Humour', 'A fast pace'], correct: 1, explanation: 'Half-rhyme creates a feeling that something is slightly off — words almost match but do not, suggesting tension, unease, or things not fitting together.' },
        ],
      },
      {
        id: 'ks3p-m3',
        title: 'Imagery & Figurative Language',
        duration: '35 mins',
        content: `<h2>Painting Pictures with Words</h2>
<p>Imagery is the lifeblood of poetry. While prose writers can take pages to describe a scene, poets must create vivid pictures in just a few carefully chosen words. Understanding how imagery works is essential for analysing poetry at any level.</p>

<h3>Sensory Imagery</h3>
<p>The most direct form of imagery appeals to the five senses:</p>
<ul>
<li><strong>Visual imagery</strong> (sight) — "The golden leaves spiralled down like tiny suns."</li>
<li><strong>Auditory imagery</strong> (sound) — "The church bells clanged through the morning mist."</li>
<li><strong>Tactile imagery</strong> (touch) — "The rough bark scratched her palms."</li>
<li><strong>Olfactory imagery</strong> (smell) — "The sharp tang of salt filled the air."</li>
<li><strong>Gustatory imagery</strong> (taste) — "Bitterness coated her tongue."</li>
</ul>
<p>Sensory imagery pulls the reader into the poem. Instead of being told about an experience, the reader <strong>feels</strong> it. When you analyse imagery, always explain which sense is being appealed to and what atmosphere or emotion this creates.</p>

<h3>Figurative Language in Poetry</h3>
<p>Figurative language goes beyond literal description to create deeper layers of meaning:</p>

<p><strong>Metaphor</strong> — A direct comparison that says one thing IS another. "Life is a journey" does not literally mean life is a road trip, but it suggests that we travel, face obstacles, and eventually arrive somewhere. Extended metaphors sustain this comparison across several lines or even a whole poem.</p>

<p><strong>Simile</strong> — A comparison using "like" or "as." "My love is like a red, red rose" (Robert Burns) compares the beloved to a rose — beautiful, natural, and perhaps fragile or thorny. Similes keep both things separate while drawing a connection between them.</p>

<p><strong>Personification</strong> — Giving human qualities to non-human things. "Death, be not proud" (John Donne) speaks directly to death as if it were an arrogant person. This makes abstract ideas feel personal and immediate.</p>

<p><strong>Symbolism</strong> — When an object or image represents something larger. A rose might symbolise love; a storm might symbolise conflict; a journey might symbolise personal growth. Symbols add depth without the poet having to explain their meaning directly.</p>

<div class="key-term"><strong>Key Term: Extended metaphor</strong> — A metaphor that is developed over several lines or throughout an entire poem, adding detail and complexity to the comparison.</div>

<div class="text-extract">"I wandered lonely as a cloud<br/>That floats on high o'er vales and hills"<div class="source">William Wordsworth, 'I Wandered Lonely as a Cloud'</div></div>

<p>Wordsworth uses a simile to compare himself to a cloud — solitary, drifting, above the world. The image suggests both loneliness and a certain freedom, floating effortlessly without direction. The word "wandered" reinforces aimlessness, while "lonely" attaches an emotional weight to the cloud image.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing figurative language, always explain the comparison in full. Do not just say "the poet uses a simile." Explain what is being compared to what, and why this comparison is effective.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing metaphor and simile. A simile uses "like" or "as" to compare; a metaphor states that something IS something else. "He fought like a lion" is a simile; "He was a lion in battle" is a metaphor.</div>`,
        quiz: [
          { id: 'ks3p-m3-q1', question: '"The wind howled through the empty streets." What type of imagery is this?', options: ['Visual imagery', 'Auditory imagery and personification', 'Tactile imagery', 'Gustatory imagery'], correct: 1, explanation: 'The wind "howling" appeals to the sense of hearing (auditory imagery) and gives the wind a human action (personification), suggesting something wild and mournful.' },
          { id: 'ks3p-m3-q2', question: 'What is an extended metaphor?', options: ['A very long simile', 'A metaphor sustained over several lines or a whole poem', 'A metaphor using the word "like"', 'A comparison between two poems'], correct: 1, explanation: 'An extended metaphor develops a single comparison across multiple lines or an entire poem, adding layers of detail and meaning.' },
          { id: 'ks3p-m3-q3', question: 'In poetry, what does symbolism involve?', options: ['Using punctuation marks as decorations', 'An object or image representing something larger or deeper', 'Writing in a foreign language', 'Using only literal descriptions'], correct: 1, explanation: 'Symbolism is when a concrete object or image represents an abstract idea — for example, a storm symbolising conflict, or a rose symbolising love.' },
        ],
      },
      {
        id: 'ks3p-m4',
        title: 'Comparing Poems',
        duration: '35 mins',
        content: `<h2>Finding Connections Between Poems</h2>
<p>Comparing poems is a skill you will use throughout your English studies, from KS3 right through to GCSE and beyond. The key to a strong comparison is writing about both poems together, not one after the other. You need to find meaningful connections and differences, then use evidence from both texts to support your ideas.</p>

<h3>What to Compare</h3>
<p>When comparing two poems, consider these four areas:</p>
<ul>
<li><strong>Theme</strong> — What is each poem about? Do they explore the same theme differently, or do they address related but distinct ideas? For example, two poems might both be about love, but one celebrates it while the other mourns its loss.</li>
<li><strong>Tone and mood</strong> — How does each poem feel? Is one angry and the other reflective? Is one hopeful and the other despairing? Tone is created by the poet's word choices, rhythm, and imagery.</li>
<li><strong>Form and structure</strong> — How is each poem arranged? Does one use strict rhyme and metre while the other uses free verse? Is one poem in neat stanzas while the other is a single block of text? These choices reflect the poem's meaning.</li>
<li><strong>Language and imagery</strong> — What techniques does each poet use? Do they share similar images or use completely different approaches? Comparing the specific word choices is where the strongest analysis happens.</li>
</ul>

<h3>How to Structure a Poetry Comparison</h3>
<p>The strongest approach is to organise by idea, not by poem:</p>
<p><strong>Weak:</strong> "Poem A is about X. Now I will talk about Poem B, which is about Y."</p>
<p><strong>Strong:</strong> "Both poems explore the theme of X. In Poem A, the poet uses... to suggest... However, Poem B takes a contrasting approach by..."</p>

<h3>Useful Comparison Phrases</h3>
<ul>
<li>"Both poets explore the idea of... but from different perspectives."</li>
<li>"While Poet A presents X as..., Poet B suggests..."</li>
<li>"Similarly, both poets use [technique] to convey..."</li>
<li>"In contrast to Poem A's [feature], Poem B employs..."</li>
<li>"The poets diverge in their treatment of [theme]..."</li>
</ul>

<div class="key-term"><strong>Key Term: Cross-referencing</strong> — Discussing both poems within the same paragraph rather than writing about one and then the other. This is essential for a strong comparison.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER (extract)</div>
<p>Both poets explore the destructive power of nature, but they create very different emotional responses. In 'Storm on the Island,' Heaney uses short, blunt sentences — "We are prepared" — to convey resilience and determination in the face of the storm. The collective pronoun "we" suggests community strength. In contrast, Shelley's 'Ozymandias' presents nature's power as slow and inevitable: the "lone and level sands stretch far away," where the long vowel sounds and vast imagery suggest nature's patient, unstoppable erosion of human pride. While Heaney's storm is immediate and violent, Shelley's destruction is quiet and final.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Every paragraph in a comparison should mention both poems. If you write a paragraph about only one poem, you are describing, not comparing. Use connectives like "similarly," "in contrast," and "whereas" to link your points.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Poem A for half the essay and Poem B for the other half. This is two separate analyses stapled together, not a comparison. Weave the poems together throughout.</div>`,
        quiz: [
          { id: 'ks3p-m4-q1', question: 'What is the best way to structure a poetry comparison?', options: ['Write about Poem A, then Poem B', 'Organise by theme, discussing both poems in each paragraph', 'Only focus on the differences', 'Write a summary of each poem'], correct: 1, explanation: 'The strongest comparisons are organised by theme or idea, with both poems discussed in each paragraph. This shows genuine comparison, not separate descriptions.' },
          { id: 'ks3p-m4-q2', question: 'Which of these is a useful comparison connective?', options: ['"Next"', '"In contrast"', '"Finally"', '"For instance"'], correct: 1, explanation: '"In contrast" signals a difference between two poems and shows the examiner you are actively comparing. Other useful connectives include "similarly," "whereas," and "however."' },
          { id: 'ks3p-m4-q3', question: 'What four areas should you compare when analysing two poems?', options: ['Plot, characters, setting, ending', 'Theme, tone, form/structure, language/imagery', 'Length, title, author, date', 'Vocabulary, spelling, grammar, punctuation'], correct: 1, explanation: 'The four key areas for comparing poems are theme (what they are about), tone (how they feel), form and structure (how they are arranged), and language and imagery (the techniques used).' },
        ],
      },
      {
        id: 'ks3p-m5',
        title: 'Writing About Poetry',
        duration: '35 mins',
        content: `<h2>Crafting Strong Poetry Analysis</h2>
<p>Writing about poetry is a skill that improves with practice and structure. Many students find poetry analysis intimidating, but if you follow a clear method and focus on explaining effects rather than just spotting techniques, you will write confident, high-scoring responses every time.</p>

<h3>Step 1: Read the Poem Carefully</h3>
<p>Before you write anything, read the poem at least twice. On your first reading, get a general sense of what the poem is about and how it makes you feel. On your second reading, start noticing specific details: unusual word choices, patterns, imagery, and structural features. If there is a question, identify exactly what it asks you to focus on.</p>

<h3>Step 2: Plan Before You Write</h3>
<p>Even a brief plan (two to three minutes) dramatically improves the quality of your answer. Jot down three or four key points you want to make, each linked to a specific piece of evidence from the poem. Decide on an order — start with the most important or most interesting point.</p>

<h3>Step 3: Use PEEL Paragraphs</h3>
<p>The PEEL structure works brilliantly for poetry analysis:</p>
<ul>
<li><strong>Point</strong> — State what the poet does or what effect is created. Link this clearly to the question.</li>
<li><strong>Evidence</strong> — Quote from the poem. Keep quotations short and embed them in your sentences.</li>
<li><strong>Explain</strong> — This is the most important part. Analyse the language — what do specific words suggest? What are the connotations? How does the technique create meaning?</li>
<li><strong>Link</strong> — Connect back to the question or develop your point further. Consider how this relates to the poem's wider themes or the poet's intentions.</li>
</ul>

<h3>Step 4: Zoom In on Individual Words</h3>
<p>The best poetry analysis focuses on the micro level. Instead of writing broadly about "the imagery," zoom in on a single word and explore its connotations, sounds, and effects. For example, if a poet describes a sunset as "bleeding" across the sky, explore why "bleeding" — not "spreading" or "glowing" — was chosen. What does it suggest about violence, pain, or the death of the day?</p>

<h3>Step 5: Comment on Form and Structure</h3>
<p>Do not forget to discuss how the poem is put together. Comment on stanza lengths, line breaks, enjambment, caesura (a pause in the middle of a line), and the overall shape of the poem. Always link structural features to meaning: "The use of enjambment across stanzas two and three creates a sense of overflow, mirroring the speaker's uncontrollable emotions."</p>

<div class="key-term"><strong>Key Term: Caesura</strong> — A pause in the middle of a line of poetry, usually created by punctuation. It can create emphasis, a sense of interruption, or a moment of reflection.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER (single paragraph)</div>
<p>The poet uses violent imagery to convey the destructive power of the storm. The verb "rips" in "the wind rips tiles from the roof" suggests sudden, aggressive force — the storm does not gently remove but tears violently, implying a deliberate, almost malicious intent. The harsh plosive consonant in "rips" mirrors this aggression phonetically, the hard sound cutting through the line just as the wind cuts through the roof. This single word encapsulates the poem's broader theme: nature is not gentle or passive but a force that actively destroys human structures.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Use phrases like "the poet suggests," "this implies," and "the connotations of X include" to show sophisticated analysis. Avoid "the poet is trying to say" — they are not trying, they ARE saying it.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "this makes the reader want to read on." This is vague and adds nothing. Instead, be specific about the emotional effect: "This creates a sense of dread in the reader" or "This forces the reader to confront the reality of loss."</div>`,
        quiz: [
          { id: 'ks3p-m5-q1', question: 'What is a caesura?', options: ['A poem with no rhyme', 'A pause in the middle of a line of poetry', 'The last line of a stanza', 'A type of metaphor'], correct: 1, explanation: 'A caesura is a pause in the middle of a line, usually created by punctuation such as a full stop, comma, or dash. It can create emphasis or a sense of interruption.' },
          { id: 'ks3p-m5-q2', question: 'What is the most important part of a PEEL paragraph in poetry analysis?', options: ['The Point', 'The Evidence', 'The Explain section', 'The Link'], correct: 2, explanation: 'The Explain section is where you analyse the language — exploring connotations, effects, and meaning. This is where the marks are earned, not in simply quoting or identifying techniques.' },
          { id: 'ks3p-m5-q3', question: 'Which phrase should you AVOID in poetry analysis?', options: ['"The poet suggests..."', '"This implies..."', '"The poet is trying to say..."', '"The connotations of this word include..."'], correct: 2, explanation: 'Avoid "trying to say" — it implies the poet has failed to communicate clearly. Use confident phrases like "the poet suggests" or "the poet conveys" instead.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3p-a1', question: 'What is the difference between a simile and a metaphor?', options: ['There is no difference', 'A simile uses "like" or "as"; a metaphor says something IS something else', 'A metaphor is always longer', 'A simile is used in poetry; a metaphor in prose'], correct: 1, explanation: 'A simile compares using "like" or "as" ("brave as a lion"), while a metaphor directly states something IS something else ("he was a lion"). Both create comparisons but in different ways.' },
      { id: 'ks3p-a2', question: 'What is an ABAB rhyme scheme?', options: ['Every line rhymes with every other line', 'Lines 1 and 3 rhyme; lines 2 and 4 rhyme', 'Only the first and last lines rhyme', 'There is no rhyme'], correct: 1, explanation: 'In ABAB, alternate lines rhyme: line 1 with line 3 (A), and line 2 with line 4 (B). This creates a flowing, musical quality.' },
      { id: 'ks3p-a3', question: 'What does enjambment do in a poem?', options: ['Ends the poem', 'Carries a sentence past the end of a line into the next', 'Creates a rhyme', 'Adds punctuation'], correct: 1, explanation: 'Enjambment occurs when a thought runs on past the end of a line. It can create urgency, momentum, or a sense of overflow.' },
      { id: 'ks3p-a4', question: '"The moon was a ghostly galleon tossed upon cloudy seas." What technique is this?', options: ['Simile', 'Personification', 'Metaphor', 'Alliteration'], correct: 2, explanation: 'This is a metaphor — the moon IS described as a galleon (ship). It also contains imagery of movement and mystery.' },
      { id: 'ks3p-a5', question: 'What is the effect of a regular, steady rhythm in a poem?', options: ['It always creates sadness', 'It can create a calm, controlled, or song-like quality', 'It makes the poem confusing', 'It has no effect'], correct: 1, explanation: 'A regular rhythm creates a sense of order, control, or musicality. Breaking that rhythm then becomes a powerful way to signal disruption or emotion.' },
      { id: 'ks3p-a6', question: 'When comparing poems, what should every paragraph contain?', options: ['Only Poem A', 'Only Poem B', 'References to both poems', 'A summary of the plot'], correct: 2, explanation: 'Every comparison paragraph should reference both poems, using connectives like "similarly," "in contrast," or "whereas" to link your points.' },
      { id: 'ks3p-a7', question: 'What is a caesura?', options: ['The last word in a line', 'A pause in the middle of a line of poetry', 'A type of stanza', 'A rhyme at the start of a line'], correct: 1, explanation: 'A caesura is a pause within a line, usually created by punctuation. It can create emphasis, a moment of reflection, or a dramatic break.' },
      { id: 'ks3p-a8', question: 'Which is the best approach to analysing a single word in a poem?', options: ['Define it using a dictionary', 'Explore its connotations, sounds, and effects in context', 'Simply name the technique', 'Ignore it and focus on the theme'], correct: 1, explanation: 'The best analysis zooms in on a single word and explores what it suggests (connotations), how it sounds, and what effect it creates in the context of the poem.' },
    ],
  },
  {
    id: 'ks3-shakespeare',
    title: 'KS3 Shakespeare Introduction',
    subtitle: 'Build confidence with Shakespeare\'s language, plays, and performance.',
    tier: 'KS3',
    board: 'All',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Demystify Shakespeare for KS3 students. Understand the language, explore key plays including Macbeth, Romeo and Juliet, and The Tempest, analyse characters and themes, and discover why performance matters.',
    color: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    moduleList: [
      {
        id: 'ks3s-m1',
        title: "Shakespeare's World",
        duration: '30 mins',
        content: `<h2>Who Was William Shakespeare?</h2>
<p>William Shakespeare (1564-1616) is widely regarded as the greatest writer in the English language. He wrote at least 37 plays, 154 sonnets, and several longer poems. His works have been translated into every major language and are performed more often than those of any other playwright. But to understand Shakespeare's writing, you first need to understand the world he lived in.</p>

<h3>Elizabethan and Jacobean England</h3>
<p>Shakespeare lived during the reigns of Queen Elizabeth I and King James I — a period of enormous change. England was becoming a major world power, exploration was opening up new continents, and London was growing into a bustling, exciting, and sometimes dangerous city. The theatre was the entertainment of the masses — there was no television, no cinema, no internet. Going to a play was as popular as watching a football match or streaming a show is today.</p>

<h3>The Globe Theatre</h3>
<p>Shakespeare's plays were performed at the Globe Theatre in London, a circular, open-air theatre that could hold up to 3,000 people. The cheapest tickets cost just a penny — these audience members (called <strong>groundlings</strong>) stood in the yard right in front of the stage. Wealthier patrons sat in covered galleries above. The audience was noisy, interactive, and sometimes threw things. Shakespeare had to write plays that gripped this crowd from the first line.</p>

<h3>Why Context Matters</h3>
<p>Understanding Shakespeare's world helps you understand his plays. Key contextual factors include:</p>
<ul>
<li><strong>The Divine Right of Kings</strong> — People believed monarchs were chosen by God. Killing a king was not just treason but a sin against God. This is crucial for understanding plays like Macbeth.</li>
<li><strong>Gender roles</strong> — Women could not act on stage; female parts were played by boys. Women had very limited rights and were expected to be obedient to their fathers and husbands. This adds layers to characters like Juliet and Lady Macbeth who defy these expectations.</li>
<li><strong>Superstition</strong> — Belief in witches, ghosts, and the supernatural was widespread. The witches in Macbeth would have genuinely terrified Elizabethan audiences.</li>
<li><strong>Social hierarchy</strong> — Society was rigidly structured. Your birth determined your place. Plays that challenge this order (like The Tempest) were both thrilling and controversial.</li>
</ul>

<div class="key-term"><strong>Key Term: Groundlings</strong> — The cheapest audience members at the Globe Theatre, who stood in the open yard. Shakespeare often included physical comedy and dramatic action to keep them entertained.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about Shakespeare, always consider the context. How would the original audience have reacted? What beliefs or values would have shaped their response? This shows sophisticated understanding.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Judging Shakespeare's characters by modern standards alone. While modern perspectives are valid, you should also consider how Elizabethan audiences would have understood the actions and motivations of characters.</div>`,
        quiz: [
          { id: 'ks3s-m1-q1', question: 'What were "groundlings"?', options: ['Actors who performed on the ground', 'Audience members who stood in the yard for a penny', 'Stage managers at the Globe', 'Musicians who played below the stage'], correct: 1, explanation: 'Groundlings were the cheapest ticket holders who stood in the open yard in front of the stage. They paid just one penny for admission.' },
          { id: 'ks3s-m1-q2', question: 'Why is the Divine Right of Kings important for understanding Macbeth?', options: ['It explains why Macbeth is set in Scotland', 'Because killing a king was seen as a sin against God, making Macbeth\'s crime even more horrifying', 'It explains Shakespeare\'s writing style', 'It has no relevance to Macbeth'], correct: 1, explanation: 'The belief that kings were appointed by God meant that murdering a king was not just treason but an offence against the divine order — making Macbeth\'s actions truly monstrous in the eyes of the original audience.' },
          { id: 'ks3s-m1-q3', question: 'Why were female roles played by boys in Shakespeare\'s time?', options: ['Women did not like acting', 'Women were not allowed to perform on stage', 'Boys were better actors', 'There were no female characters in the plays'], correct: 1, explanation: 'Women were forbidden from performing on stage in Elizabethan England. All female roles were played by boy actors, which adds an interesting layer to Shakespeare\'s many cross-dressing plot devices.' },
        ],
      },
      {
        id: 'ks3s-m2',
        title: 'Understanding the Language',
        duration: '35 mins',
        content: `<h2>Cracking the Code of Shakespeare's English</h2>
<p>The biggest barrier most students face with Shakespeare is the language. It can feel like reading a foreign language at first, but here is the truth: Shakespeare wrote in English — just an older version of it. With a few key strategies, you can unlock his language and discover that his writing is vivid, witty, and surprisingly modern in many ways.</p>

<h3>Why Does It Sound Different?</h3>
<p>English has changed significantly in four hundred years. Some words Shakespeare used have changed meaning, some have fallen out of use entirely, and sentence structures were more flexible. However, the core of the language is the same. Once you tune your ear to Shakespearean English, it becomes much easier to follow.</p>

<h3>Common Shakespearean Words</h3>
<p>Here are the most frequently used words that cause confusion:</p>
<ul>
<li><strong>Thou / Thee</strong> — "You" (informal, used with friends, family, or inferiors)</li>
<li><strong>Thy / Thine</strong> — "Your" / "Yours"</li>
<li><strong>Hath</strong> — "Has"</li>
<li><strong>Doth</strong> — "Does"</li>
<li><strong>Art</strong> — "Are" (when used with "thou")</li>
<li><strong>Ere</strong> — "Before"</li>
<li><strong>Hence</strong> — "From here" or "therefore"</li>
<li><strong>Wherefore</strong> — "Why" (NOT "where" — "Wherefore art thou Romeo?" means "Why are you Romeo?", not "Where are you?")</li>
<li><strong>Pray / Prithee</strong> — "Please"</li>
<li><strong>Anon</strong> — "Soon" or "coming!"</li>
<li><strong>Fie</strong> — An exclamation of disgust</li>
<li><strong>Ay</strong> — "Yes"</li>
</ul>

<h3>Strategies for Understanding</h3>
<ol>
<li><strong>Read it aloud.</strong> Shakespeare wrote for actors, not silent readers. Hearing the rhythm and stress helps you grasp the meaning.</li>
<li><strong>Look for the verb.</strong> Shakespeare often places the verb in unusual positions. Rearrange the sentence into modern word order: "What light through yonder window breaks?" becomes "What light breaks through that window over there?"</li>
<li><strong>Use context clues.</strong> If you do not know a word, look at the words around it. The overall situation usually makes the meaning clear.</li>
<li><strong>Focus on key words.</strong> You do not need to understand every single word. Identify the subject, verb, and object, and the meaning usually becomes clear.</li>
<li><strong>Watch for puns and wordplay.</strong> Shakespeare loved puns. Characters often say one thing and mean two. This is especially common in comedies.</li>
</ol>

<div class="key-term"><strong>Key Term: Iambic pentameter</strong> — The rhythmic pattern Shakespeare used most often: five pairs of syllables with the stress on the second beat (da-DUM da-DUM da-DUM da-DUM da-DUM). It mirrors the natural rhythm of English speech.</div>

<h3>Verse vs Prose</h3>
<p>Shakespeare switches between verse (poetry with rhythm) and prose (ordinary speech). This is deliberate:</p>
<ul>
<li><strong>Verse</strong> — Used by noble characters, in emotional moments, or in formal situations.</li>
<li><strong>Prose</strong> — Used by lower-class characters, in comic scenes, or when characters are being casual or mad.</li>
</ul>
<p>When a character switches from verse to prose (or vice versa), it signals a shift in their emotional state or social situation.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you do not understand a word, do not panic. Focus on the overall meaning of the speech. You will not lose marks for not knowing one word, but you will gain marks for showing you understand the gist and can analyse the language that you do understand.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Thinking "Wherefore art thou Romeo?" means "Where are you, Romeo?" It actually means "Why are you Romeo?" — Juliet is lamenting that the man she loves belongs to her family's enemy. This is one of the most commonly misquoted lines in all of Shakespeare.</div>`,
        quiz: [
          { id: 'ks3s-m2-q1', question: 'What does "wherefore" mean in Shakespeare?', options: ['Where', 'Why', 'When', 'How'], correct: 1, explanation: '"Wherefore" means "why." "Wherefore art thou Romeo?" means "Why are you Romeo?" — Juliet is asking why the man she loves has to be a Montague.' },
          { id: 'ks3s-m2-q2', question: 'Why does Shakespeare switch between verse and prose?', options: ['He could not decide which to use', 'Verse signals nobility, emotion, or formality; prose signals lower status, comedy, or casualness', 'There is no pattern to when he uses each', 'Prose was easier to memorise'], correct: 1, explanation: 'The switch between verse and prose is deliberate. Verse is used for noble or emotional moments; prose for comic, casual, or lower-status scenes. Shifts between the two signal changes in mood or character.' },
          { id: 'ks3s-m2-q3', question: 'What is the best first strategy for understanding a difficult Shakespeare passage?', options: ['Look up every word in a dictionary', 'Read it aloud to hear the rhythm and meaning', 'Skip it and move on', 'Memorise a modern translation'], correct: 1, explanation: 'Reading aloud is the best first step because Shakespeare wrote for performance. Hearing the rhythm, stress, and flow of the language helps the meaning emerge naturally.' },
        ],
      },
      {
        id: 'ks3s-m3',
        title: 'Key Plays Overview',
        duration: '40 mins',
        content: `<h2>Three Essential Shakespeare Plays</h2>
<p>At KS3, you are likely to encounter at least one of Shakespeare's most frequently taught plays. This module gives you an overview of three major works — Macbeth, Romeo and Juliet, and The Tempest — covering their plots, key characters, and central themes. This foundation will serve you well whether you study one of these at GCSE or encounter them in assessments.</p>

<h3>Macbeth (c. 1606)</h3>
<p><strong>Genre:</strong> Tragedy</p>
<p><strong>Plot summary:</strong> Macbeth, a brave Scottish general, meets three witches who prophesy that he will become King of Scotland. Driven by ambition and urged on by his wife, Lady Macbeth, he murders King Duncan and seizes the throne. However, guilt and paranoia consume them both. Macbeth becomes a tyrant, ordering more murders to secure his power. Lady Macbeth descends into madness and dies. Macbeth is eventually killed in battle by Macduff, and order is restored under Malcolm, Duncan's son.</p>
<p><strong>Key themes:</strong> Ambition and its consequences; the corrupting nature of power; guilt and conscience; the supernatural; appearance vs reality; the natural order and what happens when it is disrupted.</p>
<p><strong>Key characters:</strong> Macbeth (ambitious but morally conflicted), Lady Macbeth (ruthless then guilt-ridden), Duncan (the good king), Banquo (Macbeth's loyal friend, later murdered), the Witches (agents of chaos).</p>

<h3>Romeo and Juliet (c. 1595)</h3>
<p><strong>Genre:</strong> Tragedy</p>
<p><strong>Plot summary:</strong> In Verona, two wealthy families — the Montagues and the Capulets — are locked in a bitter feud. Romeo (a Montague) and Juliet (a Capulet) meet at a party, fall instantly in love, and secretly marry. When Romeo kills Juliet's cousin Tybalt in a street fight, he is banished from Verona. Juliet takes a potion to fake her death so she can escape and join Romeo, but the message explaining the plan never reaches him. Believing Juliet truly dead, Romeo poisons himself at her tomb. Juliet wakes, finds Romeo dead, and stabs herself. Their deaths finally end the feud between their families.</p>
<p><strong>Key themes:</strong> Love and hate; fate and free will; family loyalty vs individual desire; the recklessness of youth; the destructive nature of feuds; light and darkness.</p>
<p><strong>Key characters:</strong> Romeo (passionate, impulsive), Juliet (brave, determined), Mercutio (witty, loyal), Tybalt (hot-tempered), Friar Lawrence (well-meaning but flawed), the Nurse (comic, affectionate).</p>

<h3>The Tempest (c. 1611)</h3>
<p><strong>Genre:</strong> Comedy / Romance</p>
<p><strong>Plot summary:</strong> Prospero, the rightful Duke of Milan, was overthrown by his brother Antonio and cast out to sea with his young daughter Miranda. They have lived on a remote island for twelve years, where Prospero has mastered powerful magic and commands the spirit Ariel and the creature Caliban. When Antonio's ship passes nearby, Prospero conjures a storm (the tempest) to bring his enemies to the island. Through magic and manipulation, he forces them to face their guilt, forgives them, and reclaims his dukedom. He then renounces his magic and prepares to return home.</p>
<p><strong>Key themes:</strong> Power and control; forgiveness vs revenge; colonialism and exploitation; freedom and imprisonment; magic and illusion; nature vs nurture.</p>
<p><strong>Key characters:</strong> Prospero (powerful but controlling), Miranda (innocent, compassionate), Ariel (a spirit bound to serve Prospero), Caliban (the island's original inhabitant, enslaved by Prospero), Antonio (the treacherous brother).</p>

<div class="key-term"><strong>Key Term: Tragedy</strong> — A play in which the main character (the tragic hero) is brought down by a combination of their own flaws and external forces, usually ending in their death.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to memorise every plot detail. Focus on understanding the key themes and how the main characters develop. Examiners reward thematic understanding over plot retelling.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long retelling the plot in an essay. The examiner knows what happens — they want to see your analysis of HOW and WHY Shakespeare creates meaning through language, structure, and character.</div>`,
        quiz: [
          { id: 'ks3s-m3-q1', question: 'In Macbeth, who prophesies that Macbeth will become king?', options: ['Lady Macbeth', 'King Duncan', 'The three witches', 'Banquo'], correct: 2, explanation: 'The three witches (also called the Weird Sisters) prophesy that Macbeth will become Thane of Cawdor and then King of Scotland. This prophecy triggers Macbeth\'s ambition.' },
          { id: 'ks3s-m3-q2', question: 'Why do Romeo and Juliet\'s deaths end the feud?', options: ['Their parents agree to a truce before they die', 'The families are so grief-stricken that they realise the cost of their hatred', 'The Prince forces them to stop fighting', 'The families run out of money'], correct: 1, explanation: 'The deaths of their children force both families to confront the terrible consequences of their feud. The shock and grief of losing Romeo and Juliet finally motivates the Montagues and Capulets to make peace.' },
          { id: 'ks3s-m3-q3', question: 'In The Tempest, what does Prospero ultimately choose to do?', options: ['Destroy his enemies', 'Remain on the island forever', 'Forgive his enemies and renounce his magic', 'Give the island to Caliban'], correct: 2, explanation: 'Prospero chooses forgiveness over revenge. He forgives Antonio and the others, renounces his magic, and prepares to return to Milan. This choice is central to the play\'s themes.' },
        ],
      },
      {
        id: 'ks3s-m4',
        title: 'Character & Theme Analysis',
        duration: '35 mins',
        content: `<h2>Going Deeper: Characters and Themes</h2>
<p>Analysing characters and themes is at the heart of studying Shakespeare. A strong response does not simply describe what a character does — it explores WHY they behave as they do, HOW Shakespeare presents them through language and structure, and WHAT themes their actions illuminate.</p>

<h3>Analysing Character</h3>
<p>When writing about a Shakespeare character, consider these layers:</p>
<ul>
<li><strong>What they say</strong> — Their actual words reveal their thoughts, emotions, and intentions. Look at their word choices and imagery.</li>
<li><strong>What they do</strong> — Actions reveal character. Does the character act on impulse or with careful thought? Do their actions match their words?</li>
<li><strong>What others say about them</strong> — Other characters' opinions provide a different perspective. Are these views reliable or biased?</li>
<li><strong>How they change</strong> — The best characters develop throughout the play. Tracking this change (or arc) is crucial. Macbeth begins as a noble hero and ends as a tyrannical murderer — this transformation IS the story.</li>
<li><strong>Dramatic techniques</strong> — Soliloquies (speaking alone on stage) reveal inner thoughts. Asides (comments to the audience) create dramatic irony. The verse/prose switch signals emotional shifts.</li>
</ul>

<h3>Key Themes in Shakespeare</h3>
<p>Shakespeare's plays explore themes that are universal and timeless. Here are the most important ones you will encounter:</p>

<p><strong>Power and ambition</strong> — Who holds power? How do they get it? What happens when power corrupts? Macbeth is the ultimate study of ambition destroying a good person. Prospero in The Tempest shows how power can be used for control or, ultimately, relinquished.</p>

<p><strong>Love and relationships</strong> — Shakespeare explores every kind of love: romantic (Romeo and Juliet), familial (King Lear), obsessive (Othello), and platonic (Antonio and Bassanio in The Merchant of Venice). Love in Shakespeare is rarely simple — it is complicated by family, society, jealousy, and fate.</p>

<p><strong>Appearance vs reality</strong> — Things are never what they seem. Characters disguise themselves, lie, manipulate, and deceive. Lady Macbeth tells her husband to "look like the innocent flower, but be the serpent under it" — a perfect encapsulation of this theme.</p>

<p><strong>Order and disorder</strong> — Shakespeare's world valued order: God, king, nobles, commoners. When this order is disrupted (by murder, rebellion, or deception), chaos follows — storms rage, nature behaves strangely, and suffering increases until order is restored.</p>

<p><strong>Fate vs free will</strong> — Are characters in control of their destiny, or are they driven by forces beyond their control? Romeo and Juliet are described as "star-crossed lovers," suggesting fate dooms them — but their own impulsive choices also contribute to the tragedy.</p>

<div class="key-term"><strong>Key Term: Soliloquy</strong> — A speech delivered by a character who is alone on stage, revealing their innermost thoughts and feelings to the audience. It is a window into the character's mind.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER (extract)</div>
<p>Shakespeare presents Lady Macbeth as a figure who challenges Elizabethan gender roles. In her soliloquy in Act 1, Scene 5, she calls upon dark spirits to "unsex me here," demanding that her feminine compassion be stripped away so she can pursue power without moral hesitation. The verb "unsex" is violent and unnatural, suggesting that ambition of this magnitude requires the destruction of identity itself. For an Elizabethan audience, a woman rejecting her femininity to pursue political power would have been deeply unsettling, reinforcing the play's theme that Macbeth's path to the throne inverts the natural order.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always use the author's name — "Shakespeare presents..." or "Shakespeare suggests..." This reminds the examiner (and you) that these are constructed characters, not real people. It signals analytical thinking.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as if they are real people making free choices. Remember: they are constructs created by Shakespeare to explore ideas. Say "Shakespeare presents Macbeth as..." not "Macbeth decides to..."</div>`,
        quiz: [
          { id: 'ks3s-m4-q1', question: 'What is a soliloquy?', options: ['A conversation between two characters', 'A speech delivered by a character alone on stage', 'A song in a play', 'A fight scene'], correct: 1, explanation: 'A soliloquy is when a character speaks alone on stage, revealing their private thoughts to the audience. It is one of Shakespeare\'s most powerful dramatic techniques.' },
          { id: 'ks3s-m4-q2', question: 'Why should you write "Shakespeare presents..." rather than "Macbeth decides..."?', options: ['It sounds more formal', 'It reminds the reader that characters are constructs created by the playwright to explore ideas', 'It is a rule of grammar', 'The examiner prefers longer sentences'], correct: 1, explanation: 'Using "Shakespeare presents" shows you understand that characters are deliberate constructions, not real people. It signals analytical, author-focused thinking — which is what examiners reward.' },
          { id: 'ks3s-m4-q3', question: 'What does the theme "appearance vs reality" involve?', options: ['How characters look physically', 'The difference between what things seem to be and what they truly are', 'The stage set design', 'The difference between poetry and prose'], correct: 1, explanation: 'Appearance vs reality is about deception, disguise, and the gap between surface impressions and deeper truth. Characters often hide their true intentions behind a false exterior.' },
        ],
      },
      {
        id: 'ks3s-m5',
        title: 'Performing Shakespeare',
        duration: '30 mins',
        content: `<h2>From Page to Stage</h2>
<p>Shakespeare did not write his plays to be read silently in a classroom — he wrote them to be performed. Understanding how performance choices bring the text to life is an important part of studying Shakespeare, and it can transform your understanding of the language and characters.</p>

<h3>Why Performance Matters</h3>
<p>A play on the page is only half the story. The other half lives in the performance: the actor's voice, facial expressions, movements, gestures, and interactions with other performers. Two actors can speak the same line and create completely different meanings depending on how they deliver it.</p>
<p>Consider Macbeth's line: "Is this a dagger which I see before me?" An actor might deliver this in a whisper, suggesting terrified hallucination. Another might shout it, suggesting defiance. A third might say it calmly, suggesting Macbeth has already accepted his murderous path. Same words — entirely different interpretations.</p>

<h3>Key Performance Concepts</h3>
<ul>
<li><strong>Tone of voice</strong> — Is the character angry, pleading, sarcastic, afraid, commanding? Tone completely changes meaning. "Get out" can be furious, desperate, or playful depending on delivery.</li>
<li><strong>Pace</strong> — Speaking quickly suggests urgency, excitement, or anxiety. Speaking slowly suggests gravity, menace, or deep thought. Pauses create tension and give weight to the words that follow.</li>
<li><strong>Volume</strong> — Shouting suggests anger or passion. Whispering suggests secrecy, fear, or intimacy. Sudden changes in volume are particularly powerful.</li>
<li><strong>Gesture and movement</strong> — Does the character move towards or away from others? Do they make themselves large and commanding or small and submissive? Physical choices reveal power dynamics.</li>
<li><strong>Staging</strong> — Where characters stand on stage matters. A character alone at the front of the stage feels isolated. Two characters at opposite sides feel divided. Proximity suggests intimacy or confrontation.</li>
</ul>

<h3>Directing a Scene</h3>
<p>One excellent way to understand Shakespeare is to imagine you are directing a scene. Ask yourself:</p>
<ul>
<li>How should this line be delivered? What emotion is behind it?</li>
<li>Where should the characters be standing? Are they close together or far apart?</li>
<li>What is each character doing while the other speaks? (Reactions are as important as actions.)</li>
<li>Is there a moment where a pause would create maximum impact?</li>
<li>How does the mood of the scene change from beginning to end?</li>
</ul>

<div class="key-term"><strong>Key Term: Stage directions</strong> — Instructions in the script that tell actors what to do (e.g., "Enter Macbeth," "Exit, pursued by a bear"). Shakespeare used very few stage directions compared to modern playwrights, leaving much open to interpretation.</div>

<div class="text-extract">"To be, or not to be: that is the question:<br/>Whether 'tis nobler in the mind to suffer<br/>The slings and arrows of outrageous fortune,<br/>Or to take arms against a sea of troubles,<br/>And by opposing end them?"<div class="source">William Shakespeare, Hamlet (Act 3, Scene 1)</div></div>

<p>An actor must decide: does Hamlet say this calmly and philosophically, or is he on the verge of tears? Is he speaking to himself, or does he sense someone watching? These choices shape the audience's entire understanding of the character.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about Shakespeare, consider how a line might be performed. Saying "An actor might deliver this line with a tone of barely suppressed rage, pausing before 'dagger' to heighten the tension" shows sophisticated understanding of drama as performance, not just text.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting that plays are meant to be performed. If your essay only discusses the words on the page and never considers how they would sound, look, or feel on stage, you are missing a vital dimension of the text.</div>`,
        quiz: [
          { id: 'ks3s-m5-q1', question: 'Why is performance important when studying Shakespeare?', options: ['It is not important — only the text matters', 'Because Shakespeare wrote plays for performance, and delivery choices change meaning', 'Because acting is easier than reading', 'Because Shakespeare gave very detailed stage directions'], correct: 1, explanation: 'Shakespeare wrote for the stage, not the page. Performance choices — tone, pace, gesture, staging — transform the meaning of the text and reveal character in ways that silent reading cannot.' },
          { id: 'ks3s-m5-q2', question: 'How can a pause in performance create effect?', options: ['It gives the actor time to remember their lines', 'It builds tension and gives weight to the words that follow', 'It has no real effect', 'It makes the play longer'], correct: 1, explanation: 'A well-placed pause builds anticipation and tension. The audience waits for what comes next, and the silence makes the following words feel more significant and powerful.' },
          { id: 'ks3s-m5-q3', question: 'What does it mean that Shakespeare used very few stage directions?', options: ['He was lazy', 'Much is left open to interpretation by actors and directors', 'The plays were not meant to be performed', 'Actors already knew what to do'], correct: 1, explanation: 'Shakespeare\'s minimal stage directions mean that actors and directors have enormous freedom to interpret the text. This is why the same play can feel completely different in different productions.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3s-a1', question: 'What does "wherefore" mean in Shakespeare\'s language?', options: ['Where', 'Why', 'When', 'How'], correct: 1, explanation: '"Wherefore" means "why." "Wherefore art thou Romeo?" means "Why are you Romeo?" — not "Where are you?"' },
      { id: 'ks3s-a2', question: 'What is the Divine Right of Kings?', options: ['The king\'s right to write laws', 'The belief that monarchs were chosen by God', 'The king\'s right to act in plays', 'A law about royal marriages'], correct: 1, explanation: 'The Divine Right of Kings was the belief that monarchs were appointed by God, making any rebellion or regicide a sin against the divine order.' },
      { id: 'ks3s-a3', question: 'In Romeo and Juliet, what does "star-crossed" suggest about the lovers?', options: ['They are lucky', 'Their fate is doomed by forces beyond their control', 'They love astronomy', 'They met under the stars'], correct: 1, explanation: '"Star-crossed" means their destiny is controlled by the stars (fate) — suggesting they are doomed from the start, no matter what choices they make.' },
      { id: 'ks3s-a4', question: 'What is a soliloquy?', options: ['A conversation', 'A speech by a character alone on stage revealing inner thoughts', 'A type of poem', 'A stage direction'], correct: 1, explanation: 'A soliloquy is delivered when a character is alone on stage. It lets the audience hear their private thoughts, creating intimacy and dramatic irony.' },
      { id: 'ks3s-a5', question: 'Why does Shakespeare switch between verse and prose?', options: ['He ran out of ideas', 'To signal changes in character status, mood, or emotional state', 'There is no reason', 'Verse is for comedies, prose for tragedies'], correct: 1, explanation: 'Verse signals nobility, emotion, and formality. Prose signals lower status, comedy, or madness. A switch between the two marks a significant shift in mood or character.' },
      { id: 'ks3s-a6', question: 'In The Tempest, what does Prospero ultimately choose?', options: ['Revenge', 'Forgiveness', 'To stay on the island', 'To destroy Caliban'], correct: 1, explanation: 'Prospero chooses forgiveness over revenge, renounces his magic, and frees Ariel. This choice is the moral heart of the play.' },
      { id: 'ks3s-a7', question: 'What does "appearance vs reality" mean as a theme?', options: ['How characters dress', 'The gap between what things seem to be and what they truly are', 'The stage set design', 'The difference between comedy and tragedy'], correct: 1, explanation: 'Appearance vs reality explores deception, disguise, and hidden truths. Characters and situations are often not what they initially appear to be.' },
      { id: 'ks3s-a8', question: 'Why should you write "Shakespeare presents..." in essays?', options: ['Because it is grammatically correct', 'Because it shows characters are deliberate constructions, not real people', 'Because the examiner said so', 'Because Shakespeare is more important than his characters'], correct: 1, explanation: 'Using "Shakespeare presents" demonstrates that you understand characters are crafted by the playwright to explore themes and ideas — a key sign of analytical writing.' },
    ],
  },
  {
    id: 'ks3-media-literacy',
    title: 'KS3 Media Literacy',
    subtitle: 'Analyse advertisements, news, social media, and persuasive media texts.',
    tier: 'KS3',
    board: 'All',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Develop critical thinking skills for the modern media landscape. Learn to analyse advertisements, detect bias in news, understand persuasion on social media, and create your own media texts with confidence.',
    color: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    moduleList: [
      {
        id: 'ks3ml-m1',
        title: 'What is Media Literacy?',
        duration: '30 mins',
        content: `<h2>Reading the World Around You</h2>
<p>Media literacy is the ability to access, analyse, evaluate, and create media in a variety of forms. In the twenty-first century, you are surrounded by media every moment of the day: television, websites, social media posts, advertisements, news articles, podcasts, films, video games, and more. Media literacy gives you the tools to think critically about all of it.</p>

<h3>Why Does Media Literacy Matter?</h3>
<p>Every piece of media you encounter has been <strong>constructed</strong> — someone made choices about what to include, what to leave out, what language to use, and what images to select. These choices shape how you understand the world. Without media literacy, you passively absorb messages without questioning them. With media literacy, you become an active, critical thinker who can see beneath the surface.</p>

<h3>The Five Key Questions</h3>
<p>Media literacy experts use five core questions to analyse any media text:</p>
<ol>
<li><strong>Who created this message?</strong> — Every media text has an author or organisation behind it. Their identity affects the content.</li>
<li><strong>What techniques are used to attract my attention?</strong> — Colours, fonts, layout, camera angles, music, language choices — all are deliberate.</li>
<li><strong>How might different people understand this message differently?</strong> — A teenager, a parent, and a politician might all react differently to the same media text.</li>
<li><strong>What values, lifestyles, and points of view are represented — or missing?</strong> — What is shown matters, but what is left out can be even more revealing.</li>
<li><strong>Why is this message being sent?</strong> — Is the purpose to inform, persuade, entertain, or sell? Most media texts have more than one purpose.</li>
</ol>

<h3>Types of Media Text</h3>
<p>A "media text" is anything that communicates a message through media. This includes:</p>
<ul>
<li><strong>Print media</strong> — newspapers, magazines, posters, leaflets, billboards</li>
<li><strong>Broadcast media</strong> — television programmes, radio shows, podcasts</li>
<li><strong>Digital media</strong> — websites, blogs, social media posts, online videos</li>
<li><strong>Advertising</strong> — any text designed to sell a product, service, or idea</li>
</ul>

<div class="key-term"><strong>Key Term: Media text</strong> — Any piece of communication delivered through a media channel. A tweet, a billboard, a news broadcast, and a film trailer are all media texts.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing any media text, always start with the five key questions. They provide a framework that ensures you cover audience, purpose, techniques, representation, and context.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming media is neutral or objective. Every media text reflects the choices, values, and priorities of its creator. Even a "factual" news report involves decisions about what to cover, which quotes to use, and what headline to write.</div>`,
        quiz: [
          { id: 'ks3ml-m1-q1', question: 'What does media literacy enable you to do?', options: ['Watch more television', 'Access, analyse, evaluate, and create media critically', 'Memorise news headlines', 'Use social media more often'], correct: 1, explanation: 'Media literacy is the ability to critically engage with media — not just consume it passively, but analyse how it is constructed and evaluate its messages.' },
          { id: 'ks3ml-m1-q2', question: 'Why is the question "What is missing?" important in media analysis?', options: ['Because media texts always have errors', 'Because what is left out can be as revealing as what is included', 'Because media texts are always incomplete', 'Because you need to add your own content'], correct: 1, explanation: 'Asking what is missing reveals bias and perspective. If a news report only shows one side of a debate, the absence of the other side shapes the audience\'s understanding just as much as what is included.' },
          { id: 'ks3ml-m1-q3', question: 'What is a "media text"?', options: ['Only written documents', 'Any piece of communication delivered through a media channel', 'Only social media posts', 'Only television programmes'], correct: 1, explanation: 'A media text is any form of communication through media — from a tweet to a billboard to a film trailer. The term encompasses all types of media, not just written text.' },
        ],
      },
      {
        id: 'ks3ml-m2',
        title: 'Analysing Advertisements',
        duration: '35 mins',
        content: `<h2>The Art of Selling</h2>
<p>Advertising is everywhere. By the time you are an adult, you will have seen hundreds of thousands of advertisements. Understanding how advertisements work is one of the most practical and valuable media literacy skills you can develop. Once you can see the techniques, you will never look at an advert the same way again.</p>

<h3>The Purpose of Advertising</h3>
<p>The primary purpose of any advertisement is to <strong>persuade</strong>. Advertisers want you to buy a product, use a service, change your behaviour, or adopt an idea. To achieve this, they use a sophisticated range of techniques that appeal to your emotions, desires, and insecurities.</p>

<h3>Visual Techniques</h3>
<ul>
<li><strong>Colour</strong> — Red creates urgency and excitement. Blue suggests trust and calm. Gold implies luxury. Green suggests nature and health. Colour choices are never accidental.</li>
<li><strong>Camera angles</strong> — A low-angle shot makes a product or person look powerful. A close-up creates intimacy. A wide shot establishes context.</li>
<li><strong>Layout and composition</strong> — Where elements are placed matters. The most important item is usually in the centre or at a focal point. White space creates a sense of luxury and simplicity.</li>
<li><strong>Models and celebrities</strong> — Advertisers use attractive people, famous faces, or relatable "ordinary" people to create associations between the product and desirable qualities.</li>
</ul>

<h3>Language Techniques in Advertising</h3>
<ul>
<li><strong>Imperatives</strong> — Commands like "Buy now," "Try it today," or "Don't miss out" create urgency and directness.</li>
<li><strong>Rhetorical questions</strong> — "Tired of ordinary shampoo?" assumes you agree and draws you into the message.</li>
<li><strong>Superlatives</strong> — "The best," "the fastest," "the most effective" — these claim superiority, often without evidence.</li>
<li><strong>Emotive language</strong> — Words that trigger feelings: "luxury," "freedom," "family," "home," "protect."</li>
<li><strong>Repetition</strong> — Slogans and brand names are repeated to ensure you remember them. "Just Do It." "I'm Lovin' It."</li>
<li><strong>Puns and wordplay</strong> — Humour makes an advert memorable and creates a positive association with the brand.</li>
</ul>

<h3>Persuasion Strategies</h3>
<p>Beyond individual techniques, advertisers use broader strategies:</p>
<ul>
<li><strong>Bandwagon</strong> — "Everyone is buying it" pressures you to join in.</li>
<li><strong>Testimonial</strong> — A satisfied customer or celebrity endorses the product.</li>
<li><strong>Fear appeal</strong> — "Without this product, something bad will happen."</li>
<li><strong>Aspirational appeal</strong> — "Buy this and your life will be like the people in this advert."</li>
<li><strong>Nostalgia</strong> — Evoking happy memories to create warm feelings about a product.</li>
</ul>

<div class="key-term"><strong>Key Term: Target audience</strong> — The specific group of people an advertisement is designed to reach. Advertisers tailor their language, images, and platforms to appeal to this group's interests, values, and desires.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing an advertisement, always identify the target audience first. Once you know who the advert is aimed at, you can explain WHY specific techniques have been chosen — and this "why" is where the marks are.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing what you can see in an advertisement without analysing WHY it is there. "There is a picture of a family" earns nothing. "The image of a happy family creates an emotional association between the product and domestic happiness, appealing to parents who want the best for their children" is analysis.</div>`,
        quiz: [
          { id: 'ks3ml-m2-q1', question: 'What is the primary purpose of an advertisement?', options: ['To inform', 'To entertain', 'To persuade', 'To educate'], correct: 2, explanation: 'The primary purpose of advertising is to persuade — to convince you to buy, use, or believe something. While adverts may also inform or entertain, persuasion is always the core goal.' },
          { id: 'ks3ml-m2-q2', question: 'What is a "bandwagon" persuasion technique?', options: ['Using a celebrity endorsement', 'Implying everyone is doing it so you should too', 'Creating fear about not buying the product', 'Using bright colours'], correct: 1, explanation: 'The bandwagon technique pressures you to join in because "everyone else" is already doing it. It exploits the human desire to belong and not miss out.' },
          { id: 'ks3ml-m2-q3', question: 'Why do advertisers use specific colours deliberately?', options: ['Because they look nice', 'Because colours trigger specific emotions and associations', 'Because they are cheaper to print', 'Because the law requires it'], correct: 1, explanation: 'Colour psychology is a key tool in advertising. Red creates urgency, blue builds trust, gold implies luxury — every colour choice is calculated to influence how you feel about the product.' },
        ],
      },
      {
        id: 'ks3ml-m3',
        title: 'News & Bias',
        duration: '35 mins',
        content: `<h2>Is the News Truly Neutral?</h2>
<p>News is one of the most important forms of media because it shapes how we understand the world. We rely on the news to tell us what is happening, what matters, and what we should care about. But news is never simply a mirror held up to reality — it is a construction, shaped by choices, values, and pressures. Understanding how bias operates in news media is a critical skill for any informed citizen.</p>

<h3>What is Bias?</h3>
<p>Bias is a tendency to lean in a particular direction — to favour one perspective over another. In news media, bias can be deliberate (a newspaper with a clear political agenda) or unconscious (a journalist who does not realise their assumptions are affecting their reporting). Either way, it shapes the news you receive.</p>

<h3>How Bias Appears in News</h3>
<ul>
<li><strong>Selection bias</strong> — Which stories are covered and which are ignored? If a newspaper covers one political party's scandals extensively but barely mentions the other's, that is selection bias.</li>
<li><strong>Headline bias</strong> — Headlines are the first (and often only) thing people read. A headline can frame a story positively or negatively: "Government Invests in Schools" vs "Government Throws Money at Failing Schools" describe the same event very differently.</li>
<li><strong>Language bias</strong> — Word choice shapes perception. Is a group "freedom fighters" or "terrorists"? Is a politician "determined" or "stubborn"? Is a crowd a "protest" or a "mob"?</li>
<li><strong>Image bias</strong> — The photos chosen to accompany a story influence how you feel about it. A flattering photo vs an unflattering photo of the same person creates very different impressions.</li>
<li><strong>Source bias</strong> — Who is quoted in the story? Whose voices are heard and whose are missing? If only one side of a debate is represented, the story is biased by omission.</li>
<li><strong>Placement bias</strong> — Stories on the front page or at the top of a website are treated as more important. What gets buried at the bottom is implicitly dismissed.</li>
</ul>

<h3>How to Read News Critically</h3>
<ol>
<li><strong>Check the source.</strong> Who published this? Do they have a known political leaning or commercial interest?</li>
<li><strong>Read beyond the headline.</strong> Headlines are designed to attract clicks and attention. The full article often tells a more nuanced story.</li>
<li><strong>Look for loaded language.</strong> Are words being used to make you feel a certain way rather than simply inform you?</li>
<li><strong>Ask who is missing.</strong> Whose perspective is not represented? This can reveal what the journalist or editor considers unimportant.</li>
<li><strong>Compare sources.</strong> Read the same story from two or three different outlets. Where do they agree? Where do they differ? The differences reveal bias.</li>
</ol>

<div class="key-term"><strong>Key Term: Bias by omission</strong> — When a news source leaves out information that might change how the audience understands a story. What is NOT reported can be as significant as what IS reported.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing a news text, focus on language choices. A single word — "claimed" vs "stated," "regime" vs "government" — can reveal a great deal about the writer's perspective and the publication's bias.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming that a news source is automatically unbiased because it is well-known or popular. Every news outlet has a perspective, even if they strive for balance. Critical readers check multiple sources rather than trusting any single one absolutely.</div>`,
        quiz: [
          { id: 'ks3ml-m3-q1', question: 'What is "selection bias" in news?', options: ['Choosing attractive photographs', 'Deciding which stories to cover and which to ignore', 'Selecting the best journalists', 'Choosing the right font for headlines'], correct: 1, explanation: 'Selection bias occurs when editors choose to cover certain stories while ignoring others. This shapes the audience\'s understanding of what is important and what is happening in the world.' },
          { id: 'ks3ml-m3-q2', question: 'How can a headline create bias?', options: ['Headlines cannot create bias', 'By framing a story positively or negatively through word choice', 'By being too long', 'By using the wrong font'], correct: 1, explanation: 'Headlines frame stories. The same event can be presented positively or negatively depending on the words chosen. Since many people only read headlines, this framing has enormous influence.' },
          { id: 'ks3ml-m3-q3', question: 'What is the best way to identify bias in news?', options: ['Only read one source you trust', 'Compare the same story across multiple sources', 'Ignore the news entirely', 'Only read headlines'], correct: 1, explanation: 'Comparing multiple sources reveals how different outlets frame the same events differently. The differences between them expose bias that you would not notice if you only read one source.' },
        ],
      },
      {
        id: 'ks3ml-m4',
        title: 'Social Media & Persuasion',
        duration: '35 mins',
        content: `<h2>The Persuasion Machine in Your Pocket</h2>
<p>Social media is the most pervasive form of media in your life. You likely spend hours each day scrolling through posts, watching videos, and engaging with content that has been carefully curated — both by the people who create it and by the algorithms that decide what you see. Understanding how social media persuades and influences you is perhaps the most important media literacy skill for the twenty-first century.</p>

<h3>How Social Media Differs from Traditional Media</h3>
<p>Traditional media (television, newspapers) is created by professional organisations and broadcast to large audiences. Social media blurs the line between creator and consumer — anyone can publish content, and the audience can respond, share, and create their own content in return. This interactivity is powerful but also creates new challenges for critical thinking.</p>

<h3>The Algorithm: Your Invisible Editor</h3>
<p>Social media platforms use algorithms — complex mathematical systems — to decide what content appears in your feed. These algorithms are designed to keep you scrolling for as long as possible, because more time on the platform means more advertising revenue. The algorithm learns what you engage with (like, share, comment on, watch for a long time) and shows you more of the same. This creates a <strong>filter bubble</strong> — a personalised reality where you mainly see content that confirms your existing views and interests.</p>

<h3>Persuasion Techniques on Social Media</h3>
<ul>
<li><strong>Influencer marketing</strong> — Content creators are paid to promote products, often in ways that look like personal recommendations rather than advertisements. The line between genuine opinion and paid promotion is deliberately blurred.</li>
<li><strong>Social proof</strong> — High follower counts, likes, and shares signal popularity. We tend to trust content that appears popular, even if those numbers can be artificially inflated.</li>
<li><strong>FOMO (Fear of Missing Out)</strong> — Limited-time offers, exclusive content, and trending topics create anxiety about being left behind, pressuring quick, emotional decisions.</li>
<li><strong>Emotional content</strong> — Posts that trigger strong emotions (anger, joy, outrage, amusement) get more engagement. Creators and algorithms both favour emotional content over balanced, nuanced information.</li>
<li><strong>Clickbait</strong> — Headlines or thumbnails that promise something sensational to get you to click: "You won't BELIEVE what happened next!" The content rarely matches the promise.</li>
<li><strong>Parasocial relationships</strong> — You feel you "know" a content creator because you watch them daily, but the relationship is one-directional. This perceived intimacy makes their recommendations feel like advice from a friend.</li>
</ul>

<h3>Misinformation and Disinformation</h3>
<p><strong>Misinformation</strong> is false information spread without malicious intent — someone shares something inaccurate because they believe it is true. <strong>Disinformation</strong> is false information spread deliberately to deceive. Social media makes both spread rapidly because content can be shared millions of times before anyone checks whether it is true.</p>

<div class="key-term"><strong>Key Term: Filter bubble</strong> — The personalised information environment created by algorithms, which shows you content similar to what you have already engaged with, potentially limiting your exposure to diverse perspectives.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing social media content, always consider the platform, the creator's motivation, and the algorithm's role. A post that appears on your feed has been filtered through multiple layers of selection before reaching you.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating social media content as spontaneous and authentic by default. Much of what appears casual and unscripted on social media is carefully planned, filmed, edited, and strategically posted for maximum engagement.</div>`,
        quiz: [
          { id: 'ks3ml-m4-q1', question: 'What is a "filter bubble"?', options: ['A type of photo filter', 'A personalised information environment that limits exposure to diverse perspectives', 'A way to block unwanted content', 'A social media privacy setting'], correct: 1, explanation: 'A filter bubble is created by algorithms that show you content similar to what you already engage with. Over time, this can limit your exposure to different viewpoints and create a narrow view of reality.' },
          { id: 'ks3ml-m4-q2', question: 'What is the difference between misinformation and disinformation?', options: ['There is no difference', 'Misinformation is accidental; disinformation is deliberate', 'Misinformation is online; disinformation is in print', 'Misinformation is harmless; disinformation is illegal'], correct: 1, explanation: 'Misinformation is false information shared by someone who believes it is true (accidental). Disinformation is false information created and spread deliberately to deceive. Both are harmful, but disinformation is intentionally malicious.' },
          { id: 'ks3ml-m4-q3', question: 'Why do social media algorithms favour emotional content?', options: ['Because it is more accurate', 'Because emotional content gets more engagement, keeping users on the platform longer', 'Because algorithms have emotions too', 'Because calm content is boring'], correct: 1, explanation: 'Algorithms are designed to maximise engagement (and therefore advertising revenue). Content that triggers strong emotions — outrage, joy, surprise — gets more likes, comments, and shares, so the algorithm promotes it.' },
        ],
      },
      {
        id: 'ks3ml-m5',
        title: 'Creating Your Own Media Text',
        duration: '35 mins',
        content: `<h2>From Consumer to Creator</h2>
<p>The final step in media literacy is not just understanding media — it is creating it. When you produce your own media text, you experience first-hand the choices that creators make: what to include, what to leave out, what language to use, and how to target your audience. This practical understanding deepens your analytical skills immensely.</p>

<h3>Planning Your Media Text</h3>
<p>Before you create anything, answer these four questions:</p>
<ol>
<li><strong>What is my purpose?</strong> — Am I trying to inform, persuade, entertain, or a combination? My purpose drives every other decision.</li>
<li><strong>Who is my audience?</strong> — Am I targeting teenagers, parents, a specific community? My audience determines my language, tone, and platform.</li>
<li><strong>What form will it take?</strong> — A poster? A social media post? A news article? A video script? The form dictates the conventions I need to follow.</li>
<li><strong>What message do I want to communicate?</strong> — What is the single most important thing I want my audience to think, feel, or do after encountering my text?</li>
</ol>

<h3>Design Principles</h3>
<p>Whether you are creating a poster, a webpage, or a social media campaign, these principles apply:</p>
<ul>
<li><strong>Hierarchy</strong> — The most important information should be the most prominent (largest, boldest, highest on the page). Guide the reader's eye from the most critical message to the supporting details.</li>
<li><strong>Simplicity</strong> — Less is more. A cluttered design with too much text, too many images, and too many colours overwhelms the audience. The most effective media texts are often the simplest.</li>
<li><strong>Consistency</strong> — Use the same fonts, colours, and style throughout. Consistency creates a professional, trustworthy appearance and reinforces your brand or message.</li>
<li><strong>Contrast</strong> — Use differences in size, colour, or font to make key elements stand out. A bold headline against a plain background draws the eye immediately.</li>
</ul>

<h3>Writing for Different Media Forms</h3>
<p><strong>Poster or advertisement:</strong> Use a bold headline, striking image, minimal text, and a clear call to action. Every word must earn its place — there is no room for waffle.</p>
<p><strong>News article:</strong> Use the inverted pyramid structure — the most important information goes first, with details following in decreasing order of importance. Write a headline that is informative and attention-grabbing. Include quotes from relevant sources.</p>
<p><strong>Social media post:</strong> Hook the reader in the first line. Use language appropriate to the platform (formal on LinkedIn, casual on Instagram). Include a call to action (like, share, comment, visit). Consider the visual element — images and videos dramatically increase engagement.</p>
<p><strong>Blog or opinion piece:</strong> Establish your point of view early. Use evidence and examples to support your arguments. Address potential counterarguments. Write with personality — blogs and opinion pieces allow a more individual voice than news reporting.</p>

<h3>Reflecting on Your Choices</h3>
<p>After creating your media text, reflect on the choices you made. Why did you choose those words? Why that image? Why that layout? This reflection is where your media literacy skills are demonstrated. Being able to articulate WHY you made specific choices — and what effect they create — shows genuine understanding of how media works.</p>

<div class="key-term"><strong>Key Term: Call to action</strong> — A direct instruction telling the audience what to do next: "Buy now," "Share this post," "Sign the petition," "Visit our website." An effective media text almost always includes one.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are asked to create a media text in an assessment, spend a few minutes planning before you start. Identify your purpose, audience, and form. Then choose techniques that are appropriate for all three. A well-planned response is always stronger than one that is rushed.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Cramming too much information into a media text. The most effective advertisements, posters, and social media posts communicate a single clear message. If you try to say everything, you end up saying nothing.</div>`,
        quiz: [
          { id: 'ks3ml-m5-q1', question: 'What should you decide FIRST when creating a media text?', options: ['The colour scheme', 'The purpose and audience', 'The font', 'The number of images'], correct: 1, explanation: 'Purpose and audience are the foundation of every media text. Your purpose (inform, persuade, entertain) and your audience (who you are targeting) determine every other choice you make.' },
          { id: 'ks3ml-m5-q2', question: 'What is a "call to action"?', options: ['A type of camera angle', 'A direct instruction telling the audience what to do next', 'The title of a media text', 'A persuasion technique used only in news'], correct: 1, explanation: 'A call to action is a clear, direct instruction — "Buy now," "Share this post," "Sign up today." It tells the audience exactly what step to take next and is a crucial element of persuasive media.' },
          { id: 'ks3ml-m5-q3', question: 'Why is reflecting on your choices important after creating a media text?', options: ['It is not important', 'Because articulating WHY you made specific choices demonstrates genuine understanding of how media works', 'Because you need to write a bibliography', 'Because the teacher requires it'], correct: 1, explanation: 'Reflecting on your choices shows that you understand the relationship between technique and effect. Being able to explain WHY you chose specific words, images, or layouts demonstrates deep media literacy.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3ml-a1', question: 'What are the five key questions of media literacy?', options: ['Who, what, when, where, why', 'Who created it, what techniques are used, how might people interpret it differently, what is represented or missing, why was it sent', 'Is it true, is it fair, is it legal, is it ethical, is it useful', 'Who is the audience, what is the format, when was it published, where was it shown, how much did it cost'], correct: 1, explanation: 'The five key questions focus on authorship, techniques, interpretation, representation, and purpose. They provide a complete framework for analysing any media text.' },
      { id: 'ks3ml-a2', question: 'What is the primary purpose of advertising?', options: ['To inform', 'To entertain', 'To persuade', 'To educate'], correct: 2, explanation: 'While adverts may inform or entertain, their primary purpose is always to persuade — to convince you to buy, use, or believe something.' },
      { id: 'ks3ml-a3', question: 'What is "bias by omission"?', options: ['Writing biased headlines', 'Leaving out information that would change how the audience understands a story', 'Using biased photographs', 'Interviewing only one source'], correct: 1, explanation: 'Bias by omission occurs when important information is left out. What is NOT reported can shape understanding just as powerfully as what IS reported.' },
      { id: 'ks3ml-a4', question: 'What is a filter bubble?', options: ['A privacy setting on social media', 'An algorithm-created environment that limits exposure to diverse perspectives', 'A type of content filter for children', 'A method of blocking advertisements'], correct: 1, explanation: 'A filter bubble is created when algorithms show you content similar to what you already engage with, gradually narrowing your information environment and potentially reinforcing existing beliefs.' },
      { id: 'ks3ml-a5', question: 'What is the difference between misinformation and disinformation?', options: ['They mean the same thing', 'Misinformation is accidental; disinformation is deliberately deceptive', 'Misinformation is online; disinformation is offline', 'Misinformation is opinion; disinformation is fact'], correct: 1, explanation: 'Misinformation is false information shared without malicious intent. Disinformation is false information deliberately created and spread to deceive. The key difference is intent.' },
      { id: 'ks3ml-a6', question: 'Why do social media algorithms favour emotional content?', options: ['Because emotional content is more truthful', 'Because emotional content generates more engagement, keeping users on the platform longer', 'Because algorithms understand emotions', 'Because emotional content is easier to create'], correct: 1, explanation: 'Algorithms prioritise engagement. Emotional content (outrage, joy, surprise) generates more likes, shares, and comments, which keeps users on the platform and increases advertising revenue.' },
      { id: 'ks3ml-a7', question: 'What is a "call to action" in a media text?', options: ['A dramatic scene in a film', 'A direct instruction telling the audience what to do next', 'A type of news headline', 'A protest or demonstration'], correct: 1, explanation: 'A call to action directly instructs the audience: "Buy now," "Sign up," "Share this." It is a crucial element of persuasive media texts, turning passive viewers into active participants.' },
      { id: 'ks3ml-a8', question: 'When creating a media text, what should you decide first?', options: ['The images to use', 'The purpose and target audience', 'The colour scheme', 'The platform'], correct: 1, explanation: 'Purpose and audience are the foundation of any media text. Every other decision — language, images, layout, platform — flows from knowing why you are creating it and who it is for.' },
    ],
  },
];

export const ks3Courses: CourseData[] = [...ks3CoursesCore, ...ks3CoursesExtra];
