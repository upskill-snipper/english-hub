import type { CourseData } from './courses';

const gcseLangReading: CourseData = {
  id: 'gcse-lang-reading',
  title: 'GCSE Language: Reading (AQA)',
  subtitle: 'Conquer AQA Paper 1 and Paper 2 reading questions with confidence.',
  tier: 'GCSE',
  board: 'AQA',
  specId: 'gcse-lang',
  specCode: '8700',
  price: 0,
  duration: '8-10 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'From identifying information to evaluating critically, master every AQA English Language reading question type across both papers. Includes model answers at every grade band.',
  color: '#10b981',
  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1 — Paper 1 Q1: Information Retrieval
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m1',
      title: 'Paper 1 Q1: Information Retrieval',
      duration: '25 mins',
      content: `
<h2>Paper 1 Question 1 — List Four Things</h2>

<p>Question 1 on AQA Paper 1 is worth <strong>4 marks</strong> and should take no more than <strong>5 minutes</strong> in the exam. You are given a specific section of the source text and asked to <em>list four things</em> about a topic — for example, a character, a setting, or an event.</p>

<div class="key-term"><strong>Key Term: Information Retrieval</strong> — The skill of locating and selecting explicit information from a text without inference or interpretation.</div>

<h3>What the Examiner Wants</h3>
<ul>
  <li>Four <strong>separate</strong> points drawn from the correct lines of the source.</li>
  <li>Each point must be clearly linked to the question focus.</li>
  <li>Direct quotation <strong>or</strong> paraphrase — both are acceptable.</li>
  <li>No analysis or explanation is needed.</li>
</ul>

<div class="text-extract">The kitchen was cold and unwelcoming. Frost clung to the inside of the window pane, and the tap dripped with a relentless, hollow rhythm. A single light bulb hung from the ceiling, casting long shadows across the cracked tiles. On the table sat a bowl of porridge, untouched and already forming a grey skin on its surface.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<h3>Step-by-Step Strategy</h3>
<ol>
  <li><strong>Read the question carefully</strong> — underline the line references and the focus word (e.g. "the kitchen").</li>
  <li><strong>Number the lines</strong> in the specified section so you stay within range.</li>
  <li><strong>Scan and highlight</strong> — look for simple, factual details. Do not overthink.</li>
  <li><strong>Write short statements</strong> — one per line. For example: <em>"The kitchen was cold and unwelcoming."</em></li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Many students lose marks by going outside the specified line range. Always double-check you are reading from the correct section before you write anything.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Giving a point that requires inference — e.g. writing "The person who lives here is poor." The question asks for explicit information, not deduction. Stick to what is directly stated in the text.</div>

<h3>Quick Practice</h3>
<p>Using the extract above, list four things you learn about the kitchen:</p>
<ol>
  <li>The kitchen was cold and unwelcoming.</li>
  <li>Frost clung to the inside of the window pane.</li>
  <li>A single light bulb hung from the ceiling.</li>
  <li>A bowl of porridge sat untouched on the table.</li>
</ol>

<p>Notice how each point is a simple, direct statement lifted from the text. That is all Q1 requires — accuracy and relevance, not flair.</p>
`,
      quiz: [
        {
          id: 'gcse-lr-m1-q1',
          question:
            'How many marks is AQA Paper 1 Question 1 worth?',
          options: ['2 marks', '4 marks', '8 marks', '12 marks'],
          correct: 1,
          explanation:
            'Paper 1 Q1 is worth 4 marks — one mark for each correct, relevant piece of information identified from the specified lines.',
        },
        {
          id: 'gcse-lr-m1-q2',
          question:
            'Which of the following would NOT be an acceptable response to a "list four things" question?',
          options: [
            'A direct quotation from the text',
            'A paraphrased statement of a fact in the text',
            'An inference about a character\'s emotions',
            'A short sentence identifying an explicit detail',
          ],
          correct: 2,
          explanation:
            'Q1 tests information retrieval — explicit details only. Inference about emotions goes beyond what is directly stated and would risk not being credited.',
        },
        {
          id: 'gcse-lr-m1-q3',
          question:
            'What is the most common reason students lose marks on Q1?',
          options: [
            'Writing too much analysis',
            'Using quotations that are too long',
            'Selecting information from outside the specified lines',
            'Not using paragraphs',
          ],
          correct: 2,
          explanation:
            'The single biggest pitfall is going outside the given line range. Any point from outside those lines will not be credited, regardless of how relevant it is.',
        },
        {
          id: 'gcse-lr-m1-q4',
          question:
            'Approximately how long should you spend on Paper 1 Q1 in the exam?',
          options: [
            '1-2 minutes',
            '5 minutes',
            '10 minutes',
            '15 minutes',
          ],
          correct: 1,
          explanation:
            'AQA recommends around 5 minutes for Q1. It is a low-tariff question and spending too long on it eats into time for the higher-mark questions.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2 — Paper 1 Q2: Language Analysis
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m2',
      title: 'Paper 1 Q2: Language Analysis',
      duration: '40 mins',
      content: `
<h2>Paper 1 Question 2 — How Does the Writer Use Language?</h2>

<p>Question 2 is worth <strong>8 marks</strong> and directs you to a specific section of the source. You must analyse how the writer uses language to achieve effects — this means exploring <strong>word choices</strong>, <strong>imagery</strong>, <strong>figurative language</strong>, and <strong>sentence forms</strong>.</p>

<div class="key-term"><strong>Key Term: Connotation</strong> — The implied or associated meaning of a word beyond its literal definition. For example, "crept" literally means moved slowly, but it connotes secrecy, stealth, or threat.</div>

<h3>The AQA Mark Scheme: What Gets Top Marks</h3>
<ul>
  <li><strong>Level 4 (7-8 marks):</strong> Perceptive, detailed analysis. Uses subject terminology accurately and precisely. Analyses effects of individual words and phrases.</li>
  <li><strong>Level 3 (5-6 marks):</strong> Clear, relevant explanations with appropriate terminology.</li>
  <li><strong>Level 2 (3-4 marks):</strong> Attempts to comment on language with some awareness of methods.</li>
  <li><strong>Level 1 (1-2 marks):</strong> Simple identification of language features with little explanation.</li>
</ul>

<div class="text-extract">The fog did not simply arrive; it devoured the street. Lamp posts became vague, ghostly sentinels, their amber glow reduced to dull smudges of warmth. Every sound was swallowed — footsteps, voices, the distant growl of traffic — all consumed by the grey, suffocating silence.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<h3>Analytical Paragraph Structure</h3>
<p>Use the <strong>What → How → Why</strong> framework:</p>
<ol>
  <li><strong>What</strong> — Identify the technique or language choice (with a short quotation).</li>
  <li><strong>How</strong> — Name the method using subject terminology.</li>
  <li><strong>Why</strong> — Explain the effect on the reader. What does it suggest, imply, or make the reader feel?</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The writer personifies the fog through the verb "devoured," which transforms a natural phenomenon into something predatory and consuming. The connotations of violent consumption suggest the fog is not merely present but actively hostile, stripping the street of its identity. This is reinforced by the metaphor "ghostly sentinels" to describe the lamp posts, which implies that familiar, reassuring objects have been rendered spectral and ineffective — guardians that can no longer protect. The cumulative effect of the listing — "footsteps, voices, the distant growl of traffic" — emphasises the totality of the fog's dominance, as every layer of human presence is systematically erased, leaving the reader with a claustrophobic sense of isolation.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Avoid "feature spotting" — simply naming a technique without explaining its effect. The examiner wants to see you explore <em>why</em> the writer chose that particular word or image and what it makes the reader think or feel.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "This creates a vivid image in the reader's mind" as your entire explanation. This is too vague. Be specific: what kind of image? What atmosphere, emotion, or idea does it convey?</div>

<h3>Key Language Methods to Revise</h3>
<ul>
  <li><strong>Metaphor and simile</strong> — comparisons that shape meaning.</li>
  <li><strong>Personification</strong> — giving human qualities to non-human things.</li>
  <li><strong>Semantic fields</strong> — groups of words from the same topic area.</li>
  <li><strong>Sensory language</strong> — sight, sound, touch, taste, smell.</li>
  <li><strong>Sentence forms</strong> — short sentences for impact, long sentences for building tension.</li>
</ul>
`,
      quiz: [
        {
          id: 'gcse-lr-m2-q1',
          question:
            'How many marks is Paper 1 Question 2 worth?',
          options: ['4 marks', '6 marks', '8 marks', '12 marks'],
          correct: 2,
          explanation:
            'Paper 1 Q2 is worth 8 marks. You should spend approximately 10-12 minutes on it.',
        },
        {
          id: 'gcse-lr-m2-q2',
          question:
            'Which analytical framework is recommended for Q2 paragraphs?',
          options: [
            'Point, Evidence, Explain',
            'What, How, Why',
            'Introduction, Body, Conclusion',
            'Describe, Compare, Evaluate',
          ],
          correct: 1,
          explanation:
            'The What-How-Why framework helps you identify a language feature (What), name the technique (How), and explain its effect on the reader (Why).',
        },
        {
          id: 'gcse-lr-m2-q3',
          question:
            'What does the term "connotation" refer to?',
          options: [
            'The dictionary definition of a word',
            'The implied or associated meaning beyond the literal definition',
            'A word that sounds like what it describes',
            'The grammatical function of a word in a sentence',
          ],
          correct: 1,
          explanation:
            'Connotation refers to the implied, associated, or suggested meanings a word carries beyond its literal dictionary definition. Exploring connotations is essential for high-level language analysis.',
        },
        {
          id: 'gcse-lr-m2-q4',
          question:
            'Which of the following is an example of "feature spotting"?',
          options: [
            '"The metaphor suggests the fog is a predatory force, creating unease."',
            '"The writer uses a metaphor."',
            '"The verb \'devoured\' connotes violent consumption, implying hostility."',
            '"Personification transforms the fog into an active, threatening presence."',
          ],
          correct: 1,
          explanation:
            'Simply stating "The writer uses a metaphor" with no explanation of its effect is feature spotting. You must always explain the impact of the technique to gain marks.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3 — Paper 1 Q3: Structural Analysis
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m3',
      title: 'Paper 1 Q3: Structural Analysis',
      duration: '40 mins',
      content: `
<h2>Paper 1 Question 3 — How Does the Writer Structure the Text?</h2>

<p>Question 3 is worth <strong>8 marks</strong> and asks you to analyse the <strong>whole source</strong> — not just a section. You must explain how the writer has structured the text to interest the reader. This is about the <em>organisation and arrangement</em> of ideas, not individual word choices.</p>

<div class="key-term"><strong>Key Term: Structural Feature</strong> — A deliberate choice about how a text is organised, including focus shifts, narrative perspective changes, the use of openings and endings, pacing, and the ordering of events.</div>

<h3>What Counts as "Structure"?</h3>
<ul>
  <li><strong>Focus shifts</strong> — moving from a wide shot to a close-up, or from external action to internal thought.</li>
  <li><strong>Openings</strong> — how the writer hooks the reader (e.g. in medias res, mystery, description).</li>
  <li><strong>Endings</strong> — how the text concludes (e.g. cliffhanger, resolution, circular structure).</li>
  <li><strong>Pacing</strong> — acceleration through short sentences/paragraphs; deceleration through long description.</li>
  <li><strong>Narrative perspective</strong> — shifts between characters or between present and past.</li>
  <li><strong>Paragraph length and arrangement</strong> — a single-sentence paragraph for emphasis, for example.</li>
</ul>

<div class="text-extract">The market square was alive. Traders bellowed prices, children darted between stalls, and the smell of roasting chestnuts mingled with engine fumes. Elena stood at the edge of it all, clutching her letter.<br><br>She unfolded it for the third time. The words had not changed. <em>We regret to inform you…</em><br><br>Around her the crowd pressed on, oblivious. A woman laughed. A dog barked. Somewhere a glass shattered.<br><br>Elena folded the letter and placed it in her coat pocket. Then she walked into the crowd and let it swallow her whole.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<h3>Approaching Q3: A Whole-Text Method</h3>
<ol>
  <li><strong>Beginning</strong> — How does the writer open? What is established? What hooks the reader?</li>
  <li><strong>Development</strong> — How does the focus shift? Does the perspective narrow or widen? Does tension build?</li>
  <li><strong>Ending</strong> — How does the writer conclude? Is there resolution, ambiguity, or a twist?</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The writer opens with a wide-angle establishing shot of the market square, using listing ("traders bellowed prices, children darted between stalls") to create a sense of bustling normality. The structural shift occurs in the second paragraph, where the focus narrows sharply to Elena and her letter, moving from the communal to the intensely personal. This contrast between the vibrant public scene and the private devastation of "We regret to inform you" creates dramatic irony — the reader understands Elena's pain while the crowd remains "oblivious." The final image of Elena letting the crowd "swallow her whole" provides a circular return to the opening's sense of the market as an overwhelming force, but the reader now perceives it differently: it is no longer alive with energy but threatening to erase Elena's individuality. The ending is deliberately ambiguous, leaving the reader uncertain whether Elena is finding comfort in anonymity or losing herself entirely.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always link structural choices to the reader's experience. Do not just describe what happens ("the writer moves from the market to Elena"). Explain <em>why</em> this shift matters — what effect does it have on the reader?</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing language instead of structure. If you find yourself discussing metaphors or adjectives, you have drifted off-task. Q3 is about how the text is arranged, not how individual words are used.</div>
`,
      quiz: [
        {
          id: 'gcse-lr-m3-q1',
          question:
            'What does Paper 1 Q3 ask you to analyse?',
          options: [
            'The writer\'s use of language in a specific section',
            'How the writer structures the whole text to interest the reader',
            'Whether you agree with the writer\'s perspective',
            'The differences between two source texts',
          ],
          correct: 1,
          explanation:
            'Q3 focuses on structure across the whole source text — how it is organised and arranged to engage the reader, including focus shifts, openings, endings, and pacing.',
        },
        {
          id: 'gcse-lr-m3-q2',
          question:
            'Which of the following is a structural feature?',
          options: [
            'A simile comparing the wind to a knife',
            'A shift in focus from a wide setting to a single character',
            'The use of alliteration in a descriptive paragraph',
            'A semantic field of darkness and decay',
          ],
          correct: 1,
          explanation:
            'A shift in focus — such as moving from a wide establishing shot to a close-up on one character — is a structural choice about how the text is organised. The other options are all language features.',
        },
        {
          id: 'gcse-lr-m3-q3',
          question:
            'What is "in medias res"?',
          options: [
            'A technique where the text ends on a cliffhanger',
            'Beginning a story in the middle of the action',
            'A circular narrative structure',
            'Using flashback to reveal backstory',
          ],
          correct: 1,
          explanation:
            'In medias res (Latin for "into the middle of things") means opening a narrative in the middle of the action, without preamble. It immediately engages the reader by creating questions.',
        },
        {
          id: 'gcse-lr-m3-q4',
          question:
            'What is the most common mistake students make on Q3?',
          options: [
            'Writing too much about the ending',
            'Analysing language features instead of structural choices',
            'Using too many quotations',
            'Forgetting to write in paragraphs',
          ],
          correct: 1,
          explanation:
            'The biggest pitfall is drifting into language analysis — discussing word choices, metaphors, or imagery. Q3 is specifically about structure: how the text is arranged and organised.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4 — Paper 1 Q4: Critical Evaluation
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m4',
      title: 'Paper 1 Q4: Critical Evaluation',
      duration: '45 mins',
      content: `
<h2>Paper 1 Question 4 — Critical Evaluation</h2>

<p>Question 4 is the highest-tariff reading question on Paper 1, worth <strong>20 marks</strong>. It gives you a statement about the text and asks: <em>"To what extent do you agree?"</em> You must evaluate the text critically, exploring how the writer's methods create specific effects.</p>

<div class="key-term"><strong>Key Term: Evaluation</strong> — Making a critical judgement about a text by weighing up how effectively the writer has achieved a particular purpose or effect, supported by analysis of specific methods.</div>

<h3>Understanding the Question</h3>
<p>A typical Q4 might read: <em>"A student said: 'The writer makes the reader feel great sympathy for the main character.' To what extent do you agree?"</em></p>
<p>You are <strong>not</strong> simply agreeing or disagreeing — you are using the text as evidence to show <em>how</em> the writer creates that effect. Most strong responses broadly agree while exploring nuance.</p>

<h3>The Evaluation Framework</h3>
<ol>
  <li><strong>State your position</strong> — agree, partially agree, or (rarely) disagree.</li>
  <li><strong>Select evidence</strong> — choose 4-5 well-chosen quotations from the specified section.</li>
  <li><strong>Analyse methods</strong> — explore language, structure, and form as tools the writer uses.</li>
  <li><strong>Judge effectiveness</strong> — explain how well the method achieves the stated effect.</li>
</ol>

<div class="text-extract">Marcus pressed his back against the wall, his breath shallow and uneven. The corridor ahead stretched into darkness, each door a closed mouth refusing to speak. He counted his heartbeats — one, two, three — and forced himself forward. His shoes squeaked against the linoleum, absurdly loud. Somewhere above, a strip light buzzed and flickered, throwing his shadow into a frantic, stuttering dance.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> I agree that the writer creates a powerful sense of fear and vulnerability. The physical description of Marcus — "breath shallow and uneven," "pressed his back against the wall" — immediately positions him as someone on the defensive, and the reader's sympathy is engaged through these visceral, bodily details that mirror the physical sensations of anxiety. The metaphor "each door a closed mouth refusing to speak" is particularly effective because it personifies the environment as deliberately withholding and hostile; the doors are not simply closed but actively refusing to help, which intensifies the reader's perception of Marcus as utterly alone. However, the writer also introduces moments of dark absurdity — the shoes that squeak "absurdly loud" — which subtly undercuts the tension and adds a layer of self-awareness to Marcus's fear. This prevents the passage from becoming melodramatic and makes the fear feel more authentic, as real terror often coexists with absurd, mundane details. The final image of the shadow in a "frantic, stuttering dance" externalises Marcus's internal panic, and the word "stuttering" connotes a loss of control, reinforcing the reader's sense that fear has overtaken both his body and the space around him.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Use evaluative verbs and phrases throughout: "effectively conveys," "successfully creates," "powerfully suggests," "this is particularly compelling because." These signal to the examiner that you are evaluating, not just analysing.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply retelling the story or describing what happens. Q4 demands critical judgement — you must assess <em>how well</em> the writer achieves the stated effect, not summarise the plot. Every paragraph should include evaluative language.</div>

<h3>Time Management</h3>
<p>At 20 marks, Q4 should take approximately <strong>20-25 minutes</strong>. Aim for 4-5 developed paragraphs. Quality of analysis always beats quantity of points.</p>
`,
      quiz: [
        {
          id: 'gcse-lr-m4-q1',
          question:
            'How many marks is Paper 1 Question 4 worth?',
          options: ['8 marks', '12 marks', '16 marks', '20 marks'],
          correct: 3,
          explanation:
            'Q4 is the highest-tariff reading question on Paper 1, worth 20 marks. It carries more weight than Q2 and Q3 combined.',
        },
        {
          id: 'gcse-lr-m4-q2',
          question:
            'What does Q4 primarily require you to do?',
          options: [
            'List information from the text',
            'Compare two different sources',
            'Evaluate how effectively the writer creates a specific effect',
            'Analyse the structure of the whole text',
          ],
          correct: 2,
          explanation:
            'Q4 is an evaluation question. You must make a critical judgement about how effectively the writer achieves the effect described in the statement, supported by analysis of methods.',
        },
        {
          id: 'gcse-lr-m4-q3',
          question:
            'Which phrase would best demonstrate evaluative writing?',
          options: [
            '"The writer uses a metaphor"',
            '"This effectively conveys the character\'s isolation because…"',
            '"In the next paragraph the writer describes the setting"',
            '"The word \'dark\' means there is no light"',
          ],
          correct: 1,
          explanation:
            'Evaluative writing requires judgement words like "effectively," "powerfully," "compellingly." The phrase "This effectively conveys… because" shows you are assessing the success of the writer\'s methods.',
        },
        {
          id: 'gcse-lr-m4-q4',
          question:
            'How long should you spend on Q4 in the exam?',
          options: [
            '5-10 minutes',
            '10-15 minutes',
            '20-25 minutes',
            '30-35 minutes',
          ],
          correct: 2,
          explanation:
            'At 20 marks, Q4 deserves approximately 20-25 minutes. This gives you time to write 4-5 well-developed evaluative paragraphs.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5 — Paper 2 Q1: True or False
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m5',
      title: 'Paper 2 Q1: True or False',
      duration: '20 mins',
      content: `
<h2>Paper 2 Question 1 — Choose Four True Statements</h2>

<p>Paper 2 Q1 is worth <strong>4 marks</strong> and is the quickest question on either paper. You are given <strong>eight statements</strong> about a section of Source A and must <strong>shade the boxes of the four that are true</strong>.</p>

<div class="key-term"><strong>Key Term: Explicit Information</strong> — Details that are directly and clearly stated in the text, requiring no inference or interpretation to understand.</div>

<h3>How It Works</h3>
<p>The exam paper presents a list of eight statements labelled A–H. Each statement makes a claim about what happens or what is described in a specified section of Source A. Exactly four statements are true and four are false. You shade the boxes next to the four you believe are true.</p>

<h3>Example Source Extract</h3>
<div class="text-extract">The expedition set out at dawn on 14th March 1897. The party consisted of seven men, two of whom had previously attempted the crossing. They carried provisions for twelve days and a single canvas tent. The weather, which had been fair for a week, turned abruptly; by noon a bitter wind swept across the plateau, reducing visibility to a few yards. Captain Hargreaves ordered a halt and the men made camp beside a frozen stream.<div class="source">Original passage in the style of AQA exam non-fiction extracts</div></div>

<h3>Example Statements</h3>
<p>Which four are true according to the extract above?</p>
<ul>
  <li>A: The expedition left in the morning. <strong>✓ TRUE</strong> — "set out at dawn"</li>
  <li>B: There were eight men in the party. <strong>✗ FALSE</strong> — there were seven.</li>
  <li>C: All the men had attempted the crossing before. <strong>✗ FALSE</strong> — only two had.</li>
  <li>D: They had enough food for twelve days. <strong>✓ TRUE</strong> — "provisions for twelve days"</li>
  <li>E: The weather had been poor for several days. <strong>✗ FALSE</strong> — it had been "fair for a week."</li>
  <li>F: Visibility became very limited. <strong>✓ TRUE</strong> — "reducing visibility to a few yards"</li>
  <li>G: The men camped near a frozen stream. <strong>✓ TRUE</strong> — "beside a frozen stream"</li>
  <li>H: Captain Hargreaves decided to continue marching. <strong>✗ FALSE</strong> — he "ordered a halt."</li>
</ul>

<h3>Top Strategies</h3>
<ol>
  <li><strong>Read the specified lines first</strong> — do not rely on memory from your initial read-through.</li>
  <li><strong>Check each statement against the text</strong> — go through A–H systematically.</li>
  <li><strong>Watch for subtle distortions</strong> — "all" versus "some," "before" versus "after," exact numbers changed slightly.</li>
  <li><strong>Do not shade more than four boxes</strong> — if you shade five or more, you automatically lose marks.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are unsure about one statement, come back to it after checking the others. Often, once you have confidently identified three true statements, the fourth becomes clearer by elimination.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Shading five boxes "just to be safe." The mark scheme explicitly penalises extra selections — if you shade five, you will be marked out of three instead of four. Always select exactly four.</div>
`,
      quiz: [
        {
          id: 'gcse-lr-m5-q1',
          question:
            'How many statements must you select as true in Paper 2 Q1?',
          options: ['Two', 'Three', 'Four', 'Five'],
          correct: 2,
          explanation:
            'You must shade exactly four boxes. Selecting more or fewer will cost you marks.',
        },
        {
          id: 'gcse-lr-m5-q2',
          question:
            'What happens if you shade five boxes instead of four?',
          options: [
            'Nothing — the examiner ignores the extra one',
            'You are marked out of three instead of four',
            'You automatically score zero',
            'Only your first four selections count',
          ],
          correct: 1,
          explanation:
            'If you shade five boxes, the mark scheme penalises you by marking out of three. Shading six means you are marked out of two, and so on.',
        },
        {
          id: 'gcse-lr-m5-q3',
          question:
            'What type of information does Q1 test?',
          options: [
            'Inferential understanding',
            'Explicit information retrieval',
            'Evaluation of writer\'s methods',
            'Comparison of two sources',
          ],
          correct: 1,
          explanation:
            'Q1 tests your ability to identify explicit, directly stated information — facts that are clearly present in the text without needing interpretation.',
        },
        {
          id: 'gcse-lr-m5-q4',
          question:
            'What is the best strategy for tackling a statement you are unsure about?',
          options: [
            'Guess and move on immediately',
            'Shade it along with a fifth statement to be safe',
            'Skip it, complete the others, and return to it using elimination',
            'Write a note to the examiner explaining your uncertainty',
          ],
          correct: 2,
          explanation:
            'The elimination strategy is most effective. Once you have confidently identified three true statements, you can compare the remaining uncertain ones more carefully.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6 — Paper 2 Q2: Summary & Synthesis
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m6',
      title: 'Paper 2 Q2: Summary & Synthesis',
      duration: '35 mins',
      content: `
<h2>Paper 2 Question 2 — Summary and Synthesis</h2>

<p>Question 2 is worth <strong>8 marks</strong> and asks you to <strong>summarise the differences (or similarities)</strong> between two sources on a specific topic. You must use evidence from <strong>both</strong> sources and make clear, comparative points.</p>

<div class="key-term"><strong>Key Term: Synthesis</strong> — The skill of combining information from two or more sources to identify points of comparison or contrast, presenting them in an integrated, connected way rather than treating each source separately.</div>

<h3>Source Extracts</h3>
<div class="text-extract"><strong>Source A (21st century):</strong> The school canteen had been transformed. Where plastic trays and beige walls once dominated, there were now bright murals, a salad bar, and a digital menu board showing the calorie count of every dish. Students queued with enthusiasm, debating the merits of the Thai curry over the halloumi wrap. Mrs Patel, the head of catering, beamed. "We listened to the students," she said. "This is their space now."<div class="source">Original passage — modern newspaper feature</div></div>

<div class="text-extract"><strong>Source B (19th century):</strong> The dining hall was a grim chamber of long wooden benches and the pervasive odour of boiled cabbage. No child spoke above a whisper. The food, such as it was, consisted of a thin broth and a heel of bread, distributed under the watchful eye of Mr Grantly, whose expression suggested that even this meagre offering was more than the boys deserved.<div class="source">Original passage — Victorian school memoir style</div></div>

<h3>How to Structure Your Response</h3>
<p>Use <strong>comparative connectives</strong> to weave the sources together:</p>
<ul>
  <li>"In Source A… whereas in Source B…"</li>
  <li>"Both sources suggest… however…"</li>
  <li>"While Source A presents… Source B conveys…"</li>
  <li>"In contrast to Source A's depiction of… Source B shows…"</li>
</ul>

<h3>Worked Example</h3>
<p><strong>Point:</strong> The two sources present very different attitudes towards students at mealtimes.</p>
<p>In Source A, the school has "listened to the students" and made the canteen "their space," suggesting respect for student voice and agency. In contrast, Source B describes a dining hall governed by fear: students dare not speak "above a whisper" under the "watchful eye" of Mr Grantly, implying that children's opinions and comfort are irrelevant. While Source A celebrates student choice through its "salad bar" and varied menu, Source B reduces eating to mere survival with "a thin broth and a heel of bread."</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You must use evidence from <strong>both</strong> sources in every paragraph. A response that discusses Source A for two paragraphs and then Source B for two paragraphs will not score highly because it lacks synthesis — the sources must be woven together.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing language in detail. Q2 is a <em>summary</em> question — you need to identify <em>what</em> the sources say, not <em>how</em> they say it. Brief references to language are fine, but extended analysis of metaphors or imagery is not what the examiner is looking for.</div>

<h3>Key Differences Between Q2 and Q3</h3>
<ul>
  <li><strong>Q2</strong> = Summary (what the sources say) — focus on content and information.</li>
  <li><strong>Q3</strong> = Language comparison (how the writers say it) — focus on methods and effects.</li>
</ul>
<p>Keeping this distinction clear is vital. Many students lose marks by accidentally doing Q3's task in Q2.</p>
`,
      quiz: [
        {
          id: 'gcse-lr-m6-q1',
          question:
            'What skill does Paper 2 Q2 primarily test?',
          options: [
            'Language analysis',
            'Structural analysis',
            'Summary and synthesis of two sources',
            'Evaluation of a single source',
          ],
          correct: 2,
          explanation:
            'Q2 tests your ability to summarise and synthesise — combining information from both sources to identify differences or similarities on a specific topic.',
        },
        {
          id: 'gcse-lr-m6-q2',
          question:
            'How should you structure your Q2 response?',
          options: [
            'Discuss Source A fully, then Source B fully',
            'Weave both sources together using comparative connectives',
            'Focus only on the source you find most interesting',
            'Write a detailed language analysis of each source',
          ],
          correct: 1,
          explanation:
            'You must integrate both sources within each paragraph using comparative connectives like "whereas," "in contrast," and "while." Treating the sources separately lacks synthesis.',
        },
        {
          id: 'gcse-lr-m6-q3',
          question:
            'What is the key difference between Paper 2 Q2 and Q3?',
          options: [
            'Q2 covers Source A only; Q3 covers both',
            'Q2 focuses on what the sources say; Q3 focuses on how they say it',
            'Q2 is worth more marks than Q3',
            'Q2 requires evaluation; Q3 requires summary',
          ],
          correct: 1,
          explanation:
            'Q2 is about content (what the sources say — summary). Q3 is about method (how the writers use language — analysis). This is one of the most important distinctions on Paper 2.',
        },
        {
          id: 'gcse-lr-m6-q4',
          question:
            'Which of the following is an effective comparative connective?',
          options: [
            '"Furthermore"',
            '"In contrast to Source A, Source B suggests…"',
            '"Another point is"',
            '"Firstly"',
          ],
          correct: 1,
          explanation:
            '"In contrast to Source A, Source B suggests…" directly links the two sources and signals a difference, which is exactly what Q2 requires.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 7 — Paper 2 Q3: Language Comparison
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m7',
      title: 'Paper 2 Q3: Language Comparison',
      duration: '40 mins',
      content: `
<h2>Paper 2 Question 3 — Comparing Writers' Use of Language</h2>

<p>Question 3 is worth <strong>12 marks</strong> and asks you to compare how the two writers use language to convey their ideas or perspectives. Unlike Q2, this question demands <strong>detailed analysis of methods</strong> — not just what the writers say, but <em>how</em> they say it.</p>

<div class="key-term"><strong>Key Term: Language Comparison</strong> — Analysing how two writers use different (or similar) language techniques to achieve their purposes, drawing out the effects of their specific word choices, imagery, and rhetorical strategies in relation to each other.</div>

<h3>Source Extracts</h3>
<div class="text-extract"><strong>Source A:</strong> The city was a machine, tireless and indifferent. Cranes swung across the skyline like the arms of giants, and the streets hummed with a restless, electric energy. People moved in streams — purposeful, hurried, eyes fixed ahead. To stand still was to be swept aside.<div class="source">Original passage — modern travel writing style</div></div>

<div class="text-extract"><strong>Source B:</strong> London presented itself to me as a monstrous labyrinth. The streets were choked with horses, carts, and the wretched souls who drove them. Smoke belched from a thousand chimneys, settling upon every surface like a funeral shroud. I confess I felt at once overwhelmed and utterly insignificant.<div class="source">Original passage — 19th-century travel memoir style</div></div>

<h3>Building Comparative Paragraphs</h3>
<p>Each paragraph should follow this pattern:</p>
<ol>
  <li><strong>Identify a shared theme or topic</strong> — e.g. both writers present the city as overwhelming.</li>
  <li><strong>Analyse Source A's language</strong> — select a quotation and explore technique + effect.</li>
  <li><strong>Compare with Source B's language</strong> — select a quotation and analyse how the approach differs or aligns.</li>
  <li><strong>Draw out the contrast or similarity</strong> — explain what this reveals about each writer's perspective.</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> Both writers present the city as an overpowering force, but they use contrasting imagery to convey this. In Source A, the metaphor "the city was a machine" frames urban life as mechanical, efficient, and impersonal — the connotations of "tireless and indifferent" suggest a system that functions without regard for individual human experience. The simile "like the arms of giants" reinforces this sense of inhuman scale, positioning the cranes as mythic, almost threatening presences. In contrast, Source B uses the metaphor "a monstrous labyrinth," which connotes confusion, entrapment, and danger rather than efficiency. Where Source A's city is coldly functional, Source B's is chaotic and hostile. The simile "like a funeral shroud" introduces connotations of death and mourning entirely absent from Source A, suggesting that the 19th-century writer perceives the city as not merely indifferent but actively destructive. This difference may reflect the writers' distinct historical contexts: Source A's modern narrator accepts the city's relentless pace as normative, while Source B's Victorian narrator is viscerally disturbed by it.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best responses do not treat the sources separately. Every analytical point about Source A should be connected to Source B through comparison. Use phrases like "Similarly," "In contrast," "Where Source A… Source B instead…" to keep the comparison explicit.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing two separate mini-essays — one about Source A and one about Source B — with a brief comparison sentence at the end. This will cap your mark at Level 2. The comparison must be embedded throughout.</div>

<h3>Useful Comparison Vocabulary</h3>
<ul>
  <li>Similarly / Likewise / In the same way</li>
  <li>In contrast / Conversely / On the other hand</li>
  <li>Where Source A… Source B instead…</li>
  <li>Both writers… however…</li>
  <li>While Source A conveys… Source B suggests…</li>
</ul>
`,
      quiz: [
        {
          id: 'gcse-lr-m7-q1',
          question:
            'How many marks is Paper 2 Question 3 worth?',
          options: ['4 marks', '8 marks', '12 marks', '16 marks'],
          correct: 2,
          explanation:
            'Paper 2 Q3 is worth 12 marks. It requires detailed comparative language analysis across both sources.',
        },
        {
          id: 'gcse-lr-m7-q2',
          question:
            'What is the key difference between Q2 and Q3 on Paper 2?',
          options: [
            'Q2 is about Source A; Q3 is about Source B',
            'Q2 summarises content; Q3 analyses language methods',
            'Q2 is multiple choice; Q3 is extended writing',
            'Q2 is worth more marks than Q3',
          ],
          correct: 1,
          explanation:
            'Q2 asks you to summarise what the sources say (content). Q3 asks you to compare how the writers use language (methods and effects). This is a crucial distinction.',
        },
        {
          id: 'gcse-lr-m7-q3',
          question:
            'What structure should each paragraph in a Q3 response follow?',
          options: [
            'Point about Source A, then point about Source B, no connection',
            'Shared theme, analyse Source A, compare Source B, draw out contrast',
            'Retell Source A, retell Source B, state which is better',
            'List techniques in Source A, list techniques in Source B',
          ],
          correct: 1,
          explanation:
            'Each paragraph should identify a shared theme, analyse one source, then compare the other, drawing out the contrast or similarity throughout.',
        },
        {
          id: 'gcse-lr-m7-q4',
          question:
            'Which response demonstrates effective embedded comparison?',
          options: [
            '"Source A uses metaphor. Source B also uses metaphor."',
            '"Where Source A frames the city as coldly mechanical, Source B instead presents it as chaotically hostile."',
            '"Source A is about a modern city. Source B is about a Victorian city."',
            '"I prefer Source A because it is more descriptive."',
          ],
          correct: 1,
          explanation:
            'This response embeds the comparison by directly contrasting the effects of each writer\'s approach within a single sentence, using "Where… instead" to link them.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 8 — Paper 2 Q4: Comparing Viewpoints
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m8',
      title: 'Paper 2 Q4: Comparing Viewpoints',
      duration: '45 mins',
      content: `
<h2>Paper 2 Question 4 — Comparing Writers' Viewpoints and Perspectives</h2>

<p>Question 4 is the most demanding question on Paper 2, worth <strong>16 marks</strong>. You must compare how the two writers convey their <strong>different viewpoints and perspectives</strong> on a shared topic. This requires you to identify what each writer thinks or feels <em>and</em> analyse the methods they use to express those views.</p>

<div class="key-term"><strong>Key Term: Viewpoint</strong> — The writer's attitude, opinion, or perspective on a subject, which may be stated directly or implied through their choice of language, tone, and methods.</div>

<h3>What Makes Q4 Different from Q3?</h3>
<ul>
  <li><strong>Q3</strong> = Compare <em>language</em> (methods and their effects).</li>
  <li><strong>Q4</strong> = Compare <em>viewpoints</em> (what the writers think/feel) AND the methods used to convey them.</li>
</ul>
<p>Q4 is broader. You can discuss language, structure, tone, rhetorical techniques, and the writers' overall attitudes. It demands both <strong>comparison</strong> and <strong>analysis</strong>.</p>

<h3>Source Extracts</h3>
<div class="text-extract"><strong>Source A:</strong> Social media has given every young person a voice. Where previous generations waited for permission to speak — through published letters, public meetings, vetted phone-ins — today's teenagers can broadcast their views to thousands in seconds. This is not narcissism; it is democracy in its purest, most accessible form.<div class="source">Original passage — modern opinion column style</div></div>

<div class="text-extract"><strong>Source B:</strong> I fear that this generation mistakes volume for value. The ease with which any opinion can be published has not elevated public discourse but debased it. When everybody shouts, nobody listens. The great democratisation of speech has produced not a chorus but a cacophony, and the young, intoxicated by the novelty of being heard, have yet to learn that having a platform is not the same as having something to say.<div class="source">Original passage — 20th/21st-century essay style</div></div>

<h3>Structuring Your Response</h3>
<ol>
  <li><strong>Opening</strong> — briefly state the core difference in viewpoints.</li>
  <li><strong>Comparative paragraphs</strong> — each paragraph addresses a shared aspect (e.g. both discuss the value of youth voice) and compares how the writers use methods to convey contrasting views.</li>
  <li><strong>Methods to discuss:</strong> tone, rhetorical questions, direct address, hyperbole, listing, emotive language, sentence structure, counter-argument, analogy.</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The two writers hold fundamentally opposing views on youth voice in the digital age. Source A celebrates social media as "democracy in its purest, most accessible form," using the superlative "purest" to frame online expression as an ideal — even utopian — development. The tricolon "published letters, public meetings, vetted phone-ins" catalogues the limitations of previous eras, implying that those barriers were gatekeeping mechanisms that excluded young people. In stark contrast, Source B dismisses digital expression through the antithesis "not a chorus but a cacophony," which suggests that increased participation has produced dissonance rather than harmony. The metaphor of intoxication — "intoxicated by the novelty of being heard" — is particularly loaded, positioning young people as reckless and lacking judgement, which directly counters Source A's respectful framing. Where Source A deliberately rejects the accusation of narcissism ("This is not narcissism"), Source B implicitly endorses it through the cutting assertion that "having a platform is not the same as having something to say." The writers' tones are equally divergent: Source A is celebratory and inclusive, while Source B adopts a weary, authoritative register that positions the writer as a wise elder correcting youthful folly.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always identify both the viewpoint (what the writer thinks) AND the method (how they express it). Stating "Source A thinks social media is good" without analysing the language used to convey this will limit you to Level 2.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Only comparing methods without stating what the viewpoints actually are. You need both: the <em>opinion</em> and the <em>technique</em>. Start each comparative point by making the viewpoint clear, then analyse how it is conveyed.</div>

<h3>Rhetorical Techniques to Look For</h3>
<ul>
  <li><strong>Direct address</strong> — "you" to engage or challenge the reader.</li>
  <li><strong>Rhetorical questions</strong> — to prompt agreement or highlight absurdity.</li>
  <li><strong>Anecdote</strong> — personal stories to build credibility or empathy.</li>
  <li><strong>Counter-argument</strong> — acknowledging the opposing view to appear balanced.</li>
  <li><strong>Hyperbole</strong> — exaggeration for emphasis or persuasion.</li>
  <li><strong>Tone shifts</strong> — moving from humour to seriousness, or calm to anger.</li>
</ul>
`,
      quiz: [
        {
          id: 'gcse-lr-m8-q1',
          question:
            'How many marks is Paper 2 Question 4 worth?',
          options: ['8 marks', '12 marks', '16 marks', '20 marks'],
          correct: 2,
          explanation:
            'Paper 2 Q4 is worth 16 marks. It is the highest-tariff reading question on Paper 2.',
        },
        {
          id: 'gcse-lr-m8-q2',
          question:
            'What must you include in every Q4 paragraph?',
          options: [
            'A quotation from Source A only',
            'Both the writers\' viewpoints and the methods used to convey them',
            'A summary of the historical context',
            'Your personal opinion on the topic',
          ],
          correct: 1,
          explanation:
            'Q4 requires both elements: what the writer thinks (viewpoint) and how they express it (methods). Missing either element will significantly limit your marks.',
        },
        {
          id: 'gcse-lr-m8-q3',
          question:
            'What is the key difference between Paper 2 Q3 and Q4?',
          options: [
            'Q3 is about one source; Q4 is about both',
            'Q3 compares language methods; Q4 compares viewpoints and the methods used to convey them',
            'Q3 is worth more marks than Q4',
            'Q3 requires quotations; Q4 does not',
          ],
          correct: 1,
          explanation:
            'Q3 focuses narrowly on language comparison. Q4 is broader — it asks you to compare the writers\' attitudes and perspectives, analysing a wider range of methods including tone, rhetoric, and structure.',
        },
        {
          id: 'gcse-lr-m8-q4',
          question:
            'Which rhetorical technique involves the writer acknowledging the opposing view?',
          options: [
            'Hyperbole',
            'Anecdote',
            'Counter-argument',
            'Direct address',
          ],
          correct: 2,
          explanation:
            'A counter-argument is when the writer acknowledges the opposing viewpoint before refuting or qualifying it. This technique creates an impression of balance and reasonableness.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS (20)
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'gcse-lr-a1',
      question:
        'Paper 1 Q1 asks you to "list four things." What type of information should you provide?',
      options: [
        'Inferences about character feelings',
        'Explicit, directly stated details from the specified lines',
        'Analytical comments on language techniques',
        'Comparisons with other parts of the text',
      ],
      correct: 1,
      explanation:
        'Q1 tests information retrieval — you must identify explicit, directly stated facts from within the specified line range. No inference or analysis is required.',
    },
    {
      id: 'gcse-lr-a2',
      question:
        'Which analytical framework is most effective for Paper 1 Q2 paragraphs?',
      options: [
        'Summarise, Compare, Evaluate',
        'What, How, Why',
        'Agree, Disagree, Conclude',
        'Describe, Narrate, Persuade',
      ],
      correct: 1,
      explanation:
        'What-How-Why: identify the language feature (What), name the technique (How), and explain its effect on the reader (Why). This ensures you analyse rather than just identify.',
    },
    {
      id: 'gcse-lr-a3',
      question:
        'A student writes: "The writer uses a metaphor and a simile." What is wrong with this response for Q2?',
      options: [
        'It uses incorrect terminology',
        'It identifies techniques without explaining their effects',
        'It includes too much quotation',
        'It discusses structure instead of language',
      ],
      correct: 1,
      explanation:
        'This is "feature spotting" — naming techniques without analysing what they suggest, imply, or make the reader feel. The examiner needs to see the effect of each method explained.',
    },
    {
      id: 'gcse-lr-a4',
      question:
        'Paper 1 Q3 asks about structure. Which of the following is a structural feature?',
      options: [
        'An alliterative phrase',
        'A shift from wide-angle description to close-up on a character',
        'A metaphor comparing the sea to a beast',
        'The use of short, punchy adjectives',
      ],
      correct: 1,
      explanation:
        'A shift in focus — from a wide establishing shot to a close-up — is a structural decision about how the text is organised. The other options are all language features.',
    },
    {
      id: 'gcse-lr-a5',
      question:
        'What does "in medias res" mean?',
      options: [
        'A story told in reverse chronological order',
        'Beginning a narrative in the middle of the action',
        'A circular structure that returns to the opening',
        'A shift from first person to third person narration',
      ],
      correct: 1,
      explanation:
        'In medias res (Latin: "into the middle of things") is an opening technique where the story begins mid-action, immediately engaging the reader by plunging them into events.',
    },
    {
      id: 'gcse-lr-a6',
      question:
        'Paper 1 Q4 is worth 20 marks. What does it require you to do?',
      options: [
        'List information from the source',
        'Analyse language techniques in detail',
        'Evaluate how effectively the writer creates a specific effect',
        'Compare two different source texts',
      ],
      correct: 2,
      explanation:
        'Q4 gives a statement about the text and asks "To what extent do you agree?" You must evaluate the writer\'s methods, judging how effectively they achieve the stated effect.',
    },
    {
      id: 'gcse-lr-a7',
      question:
        'Which phrase demonstrates evaluative writing suitable for Q4?',
      options: [
        '"The writer uses lots of description"',
        '"In the next paragraph, the character goes outside"',
        '"The metaphor powerfully conveys the character\'s desperation because…"',
        '"There are many adjectives in this extract"',
      ],
      correct: 2,
      explanation:
        'The word "powerfully" makes a judgement about effectiveness, and "because" signals that an explanation of the effect follows. This is evaluative writing.',
    },
    {
      id: 'gcse-lr-a8',
      question:
        'On Paper 2 Q1, what happens if a student shades six boxes instead of four?',
      options: [
        'They are marked out of four as normal',
        'They are marked out of two',
        'They automatically score zero',
        'The examiner selects the best four',
      ],
      correct: 1,
      explanation:
        'The penalty system deducts for extra selections: five boxes = marked out of 3, six boxes = marked out of 2, seven boxes = marked out of 1, eight boxes = 0 marks.',
    },
    {
      id: 'gcse-lr-a9',
      question:
        'Paper 2 Q2 asks you to summarise differences between two sources. What should you focus on?',
      options: [
        'The writers\' language techniques in detail',
        'The content — what each source says about the topic',
        'Your personal opinion on which source is better',
        'The historical context of each source',
      ],
      correct: 1,
      explanation:
        'Q2 is a summary question focusing on content — what the sources say. Detailed language analysis belongs in Q3, not Q2.',
    },
    {
      id: 'gcse-lr-a10',
      question:
        'Which connective is most effective for synthesising two sources in Q2?',
      options: [
        '"Furthermore"',
        '"Firstly"',
        '"In contrast to Source A, Source B suggests…"',
        '"In conclusion"',
      ],
      correct: 2,
      explanation:
        '"In contrast to Source A, Source B suggests…" directly links both sources and signals comparison, which is exactly what synthesis requires.',
    },
    {
      id: 'gcse-lr-a11',
      question:
        'What is the critical difference between Paper 2 Q2 and Paper 2 Q3?',
      options: [
        'Q2 covers Source A; Q3 covers Source B',
        'Q2 summarises what sources say; Q3 compares how writers use language',
        'Q2 is worth more marks',
        'Q2 is about viewpoints; Q3 is about structure',
      ],
      correct: 1,
      explanation:
        'Q2 = content (what). Q3 = methods (how). This is the single most important distinction on Paper 2 and confusing the two is a common cause of lost marks.',
    },
    {
      id: 'gcse-lr-a12',
      question:
        'A student writes about Q3: "Source A describes a happy city and Source B describes a sad city." Why would this score poorly?',
      options: [
        'It does not include quotations',
        'It summarises content rather than analysing language methods',
        'It is too short',
        'It does not mention the historical context',
      ],
      correct: 1,
      explanation:
        'Q3 requires analysis of how writers use language — specific techniques, word choices, imagery, and their effects. Simply summarising the mood of each source is a Q2-style response.',
    },
    {
      id: 'gcse-lr-a13',
      question:
        'Paper 2 Q4 asks you to compare viewpoints. What must every paragraph include?',
      options: [
        'A quotation from Source A only',
        'The writers\' viewpoints AND the methods used to convey them',
        'A historical comparison of the two time periods',
        'Your personal agreement or disagreement',
      ],
      correct: 1,
      explanation:
        'Q4 requires both: what the writer thinks (viewpoint) and how they express it (methods). Identifying only the viewpoint or only the method will limit your marks.',
    },
    {
      id: 'gcse-lr-a14',
      question:
        'What is a "counter-argument" in persuasive writing?',
      options: [
        'Repeating your main argument for emphasis',
        'Acknowledging the opposing viewpoint before refuting it',
        'Using emotional language to manipulate the reader',
        'Ending with a rhetorical question',
      ],
      correct: 1,
      explanation:
        'A counter-argument is when the writer acknowledges the other side of the debate before presenting reasons why their own position is stronger. It creates an impression of fairness.',
    },
    {
      id: 'gcse-lr-a15',
      question:
        'Which of the following is the correct mark allocation for Paper 1 reading questions?',
      options: [
        'Q1: 4, Q2: 8, Q3: 8, Q4: 20',
        'Q1: 8, Q2: 8, Q3: 12, Q4: 12',
        'Q1: 4, Q2: 12, Q3: 12, Q4: 12',
        'Q1: 4, Q2: 8, Q3: 12, Q4: 16',
      ],
      correct: 0,
      explanation:
        'AQA Paper 1 reading marks: Q1 = 4, Q2 = 8, Q3 = 8, Q4 = 20, totalling 40 marks for the reading section.',
    },
    {
      id: 'gcse-lr-a16',
      question:
        'What does the term "semantic field" mean?',
      options: [
        'A technique where sentences gradually get longer',
        'A group of words from the same topic or theme area',
        'The literal meaning of a word',
        'A paragraph that focuses on one specific sense',
      ],
      correct: 1,
      explanation:
        'A semantic field is a group of words related to the same theme — for example, "shadow," "darkness," "gloom," and "night" all belong to a semantic field of darkness.',
    },
    {
      id: 'gcse-lr-a17',
      question:
        'When answering Paper 1 Q3 about structure, a student analyses a metaphor in detail. What feedback would the examiner give?',
      options: [
        '"Excellent — detailed language analysis"',
        '"Off-task — Q3 is about structure, not language"',
        '"Good, but needs more quotations"',
        '"Correct approach, but needs evaluative vocabulary"',
      ],
      correct: 1,
      explanation:
        'Q3 specifically asks about structure — how the text is arranged and organised. Analysing a metaphor is a language comment and would not be credited as a structural point.',
    },
    {
      id: 'gcse-lr-a18',
      question:
        'Which is the correct mark allocation for Paper 2 reading questions?',
      options: [
        'Q1: 4, Q2: 8, Q3: 8, Q4: 20',
        'Q1: 4, Q2: 8, Q3: 12, Q4: 16',
        'Q1: 4, Q2: 12, Q3: 12, Q4: 12',
        'Q1: 8, Q2: 8, Q3: 8, Q4: 16',
      ],
      correct: 1,
      explanation:
        'AQA Paper 2 reading marks: Q1 = 4, Q2 = 8, Q3 = 12, Q4 = 16, totalling 40 marks for the reading section.',
    },
    {
      id: 'gcse-lr-a19',
      question:
        'A student\'s Q4 response only discusses what the writers think without analysing any techniques. What level would this likely achieve?',
      options: [
        'Level 4 (top band)',
        'Level 3 (clear and relevant)',
        'Level 2 (some awareness)',
        'Level 1 (simple, limited)',
      ],
      correct: 2,
      explanation:
        'Identifying viewpoints without analysing methods shows "some awareness" but lacks the detailed analytical comparison needed for Level 3 or 4. Both viewpoints and methods are essential.',
    },
    {
      id: 'gcse-lr-a20',
      question:
        'Across both papers, which skill is tested by the highest number of total marks?',
      options: [
        'Information retrieval',
        'Summary and synthesis',
        'Language analysis',
        'Evaluation and comparison of viewpoints',
      ],
      correct: 3,
      explanation:
        'Evaluation (Paper 1 Q4: 20 marks) and comparing viewpoints (Paper 2 Q4: 16 marks) together account for 36 marks — more than any other skill area. These high-tariff questions should be your top revision priority.',
    },
  ],
};

const gcseLangWriting: CourseData = {
  id: 'gcse-lang-writing',
  title: 'GCSE Language: Writing (AQA)',
  subtitle: 'Craft compelling creative and non-fiction writing for top AQA marks.',
  tier: 'GCSE',
  board: 'AQA',
  specId: 'gcse-lang',
  specCode: '8700',
  price: 0,
  duration: '7-9 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Master both AQA Paper 1 (creative writing) and Paper 2 (non-fiction writing). Learn how to plan, structure, and polish your writing to hit every mark scheme descriptor.',
  color: '#10b981',
  moduleList: [
    {
      id: 'gcse-lw-m1',
      title: 'Planning Under Pressure',
      duration: '25 mins',
      content: `<h2>Plan Fast, Write Better</h2>
<p>You have roughly 45 minutes for each writing question. Spending 5 of those minutes planning is not a luxury — it is the single most efficient way to improve your grade. Students who plan consistently outperform those who dive straight in, because their writing has direction, structure, and purpose from the first sentence.</p>

<h3>Why Plans Matter</h3>
<p>Without a plan, most students write themselves into a corner by paragraph three. They repeat ideas, lose track of their argument, or run out of story. A plan gives you a roadmap: you always know what comes next, so you never waste time staring at the page.</p>

<div class="key-term"><strong>Key Term: Conceptualised response</strong> — A piece of writing that is clearly shaped around a central idea or theme from start to finish. Examiners reward this highly because it shows deliberate craft, not just improvisation.</div>

<h3>The 5-Minute Mind Map (Paper 1 — Creative Writing)</h3>
<p>Put your central image, setting, or character in the middle. Branch out with:</p>
<ul>
<li><strong>Senses</strong> — What can be seen, heard, smelled, touched, tasted?</li>
<li><strong>Mood/atmosphere</strong> — What feeling do you want the reader to have?</li>
<li><strong>Techniques</strong> — Which 3-4 language devices will you use? (metaphor, personification, sibilance, etc.)</li>
<li><strong>Structure</strong> — Opening image, shift in focus, zoom in/out, circular ending?</li>
</ul>

<h3>The Bullet Outline (Paper 2 — Non-Fiction Writing)</h3>
<p>Non-fiction needs a clear argument. Use a simple five-point plan:</p>
<ol>
<li><strong>Hook</strong> — Anecdote, statistic, rhetorical question, or bold statement.</li>
<li><strong>Argument point 1</strong> — Your strongest reason, with evidence or example.</li>
<li><strong>Argument point 2</strong> — A different angle on the same issue.</li>
<li><strong>Counter-argument + rebuttal</strong> — Acknowledge the other side, then demolish it.</li>
<li><strong>Powerful conclusion</strong> — Call to action, return to opening image, or memorable final line.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Jot down 4-5 ambitious vocabulary words during your planning time. Having them ready means you will actually use them instead of falling back on simple language under pressure.</div>

<h3>Timing Strategy</h3>
<p>For a 45-minute writing task, aim for: <strong>5 mins planning → 35 mins writing → 5 mins proofreading</strong>. Protect your proofreading time fiercely — fixing SPaG errors in those final minutes can gain you 3-4 marks.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a plan so detailed that it becomes a first draft. Your plan should be rough, fast, and private — bullet points and single words are fine. No examiner marks the plan, so do not waste time making it neat.</div>`,
      quiz: [
        { id: 'gcse-lw-m1-q1', question: 'How long should you spend planning a 45-minute writing task?', options: ['1-2 minutes', 'About 5 minutes', '10-15 minutes', 'You should not plan at all'], correct: 1, explanation: 'Five minutes of planning is the recommended time. It is enough to create a clear structure without eating into your writing time. The ideal split is 5 mins plan, 35 mins write, 5 mins proofread.' },
        { id: 'gcse-lw-m1-q2', question: 'What is a "conceptualised response"?', options: ['A response that uses long words', 'A response shaped around a central idea from start to finish', 'A response that includes a counter-argument', 'A response written entirely in paragraphs'], correct: 1, explanation: 'A conceptualised response is one where a deliberate central idea or theme runs through the whole piece. Examiners reward this because it shows the writer has crafted the work, not just improvised.' },
        { id: 'gcse-lw-m1-q3', question: 'What should you include in a mind map plan for creative writing?', options: ['Only the plot events in order', 'Senses, mood, techniques, and structure', 'A full first draft of your opening', 'A list of every character name'], correct: 1, explanation: 'A good creative writing mind map branches into sensory details, mood/atmosphere, specific techniques you will use, and your structural approach. These ensure your writing is rich and deliberate.' },
        { id: 'gcse-lw-m1-q4', question: 'In a Paper 2 bullet outline, what goes in point 4?', options: ['Your weakest argument', 'A personal anecdote', 'A counter-argument followed by a rebuttal', 'A summary of points 1-3'], correct: 2, explanation: 'Point 4 is where you acknowledge the opposing view and then dismantle it. This shows the examiner you can consider different perspectives, which is a higher-level skill rewarded in the mark scheme.' },
      ],
    },
    {
      id: 'gcse-lw-m2',
      title: 'Paper 1 Q5: Descriptive Writing',
      duration: '45 mins',
      content: `<h2>Painting Pictures with Words</h2>
<p>Paper 1 Question 5 asks you to produce a piece of creative writing. If you choose the descriptive option, your goal is to create a vivid, atmospheric piece that makes the reader feel as though they are standing inside your scene. You are not telling a story — you are capturing a moment in rich, layered detail.</p>

<h3>The Five Senses</h3>
<p>Most students only describe what they can <em>see</em>. Top-band responses engage all five senses to create an immersive experience:</p>
<ul>
<li><strong>Sight</strong> — Colours, light, shadows, movement, shapes.</li>
<li><strong>Sound</strong> — Volume, rhythm, silence, sudden noises, distant sounds.</li>
<li><strong>Smell</strong> — Sharp, sweet, rotten, metallic, earthy.</li>
<li><strong>Touch</strong> — Temperature, texture, pressure, pain, comfort.</li>
<li><strong>Taste</strong> — Often linked to smell or atmosphere (the salt air, the dusty dryness).</li>
</ul>

<div class="key-term"><strong>Key Term: Show, don't tell</strong> — Instead of stating an emotion directly ("She was scared"), reveal it through physical details ("Her fingers tightened on the banister; each breath came shallow and quick"). This lets the reader experience the feeling rather than just being informed of it.</div>

<h3>Building Atmosphere</h3>
<p>Atmosphere is the emotional tone of a place. Every detail you choose should reinforce it. If you are describing a threatening forest, every image should contribute to unease — the twisted branches, the silence between birdcalls, the way the path narrows.</p>

<div class="model-answer"><strong>Model Excerpt — Descriptive Writing (Threatening Forest):</strong><br>
"The canopy stitched itself shut overhead, each branch reaching for its neighbour like grasping fingers. Beneath, the air sat heavy and damp, pressing against my skin with the patience of something that had been waiting a long time. Somewhere behind me, a twig gave way — a single, clean snap — and then silence flooded back, thicker than before."</div>

<p>Notice how the model answer uses <strong>personification</strong> ("grasping fingers," "the patience of something"), <strong>sensory detail</strong> (damp air pressing against skin), and <strong>short dramatic sentence</strong> ("a single, clean snap") to build tension.</p>

<h3>Figurative Language Toolkit</h3>
<ul>
<li><strong>Metaphor</strong> — "The moon was a pale coin dropped on black velvet."</li>
<li><strong>Simile</strong> — "Frost clung to the railings like white lace."</li>
<li><strong>Personification</strong> — "The wind shouldered its way through the door."</li>
<li><strong>Pathetic fallacy</strong> — Using weather or nature to mirror mood.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Quality over quantity. Three well-crafted figurative images across your whole piece are far more effective than cramming one into every sentence. Overloading imagery makes writing feel forced and cluttered.</div>

<h3>Structural Techniques for Description</h3>
<p>Even though you are not writing a plot, your description still needs shape:</p>
<ul>
<li><strong>Zoom in/out</strong> — Start wide (the landscape), then focus on a tiny detail (a single raindrop).</li>
<li><strong>Time shift</strong> — Describe the same place at dawn and then at dusk.</li>
<li><strong>Circular structure</strong> — End with the same image you opened with, but changed.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Turning a descriptive piece into a narrative. If the prompt says "Describe…", do not add a plot with dialogue and a climax. Focus on capturing the scene, not telling a story. You can have a subtle sense of movement, but the emphasis must be on atmosphere and detail.</div>`,
      quiz: [
        { id: 'gcse-lw-m2-q1', question: 'What does "show, don\'t tell" mean in descriptive writing?', options: ['Use illustrations alongside your writing', 'Reveal emotions through physical details rather than stating them directly', 'Show your plan to the examiner', 'Write in the present tense'], correct: 1, explanation: '"Show, don\'t tell" means conveying emotions, atmosphere, or character through concrete physical details and actions rather than simply labelling them. "Her hands trembled" is more powerful than "She was nervous."' },
        { id: 'gcse-lw-m2-q2', question: 'How many senses should a top-band descriptive piece engage?', options: ['Only sight', 'Sight and sound', 'At least three to five senses', 'Exactly two'], correct: 2, explanation: 'Top-band responses aim to engage multiple senses — ideally all five. This creates an immersive, textured experience for the reader and demonstrates sophisticated descriptive skill.' },
        { id: 'gcse-lw-m2-q3', question: 'What is pathetic fallacy?', options: ['A mistake in your writing', 'Using weather or nature to mirror mood or emotion', 'A type of unreliable narrator', 'A paragraph that is too short'], correct: 1, explanation: 'Pathetic fallacy is when a writer uses elements of the natural world — weather, landscape, seasons — to reflect the mood of the scene or the emotions of a character. For example, a storm during an argument.' },
        { id: 'gcse-lw-m2-q4', question: 'What is a "zoom in/out" structural technique?', options: ['Using a magnifying glass image', 'Shifting focus from a wide landscape to a tiny detail, or the reverse', 'Writing in very large and very small handwriting', 'Repeating the same sentence at different points'], correct: 1, explanation: 'Zoom in/out means moving your descriptive focus from a broad panorama to a precise detail (or the other way around). This gives your writing a cinematic quality and a clear sense of structure.' },
      ],
    },
    {
      id: 'gcse-lw-m3',
      title: 'Paper 1 Q5: Narrative Writing',
      duration: '45 mins',
      content: `<h2>Telling Stories That Score Top Marks</h2>
<p>If you choose the narrative option for Paper 1 Question 5, you need to write a short, focused story — not an epic novel. The most common mistake is trying to fit too much plot into 45 minutes. The best responses are tightly controlled, covering a short time span with rich detail and a clear structure.</p>

<h3>Story Structures That Work</h3>
<p>You do not need to invent a structure on the day. Learn two or three reliable frameworks and practise them:</p>
<ul>
<li><strong>Linear with a twist</strong> — Events unfold in order, building to a surprise or revelation at the end.</li>
<li><strong>In medias res</strong> — Start in the middle of the action, then fill in context as the story unfolds.</li>
<li><strong>Circular</strong> — End where you began, but with something changed — the character, the setting, or the reader's understanding.</li>
<li><strong>Flashback</strong> — Open in the present, shift to a past event, then return to the present with new meaning.</li>
</ul>

<div class="key-term"><strong>Key Term: In medias res</strong> — Latin for "in the middle of things." Starting your story mid-action hooks the reader immediately and avoids slow, boring openings. You can fill in backstory later through hints and details.</div>

<h3>Crafting Your Opening</h3>
<p>Your first two sentences determine whether the examiner leans in or switches off. Avoid starting with an alarm clock going off or a character waking up. Instead, try:</p>
<ul>
<li>A line of dialogue: <em>"Don't open that door."</em></li>
<li>A striking image: <em>"The letter had been sitting on the mat for three days, and nobody wanted to touch it."</em></li>
<li>A bold statement: <em>"I knew, even before the car stopped, that everything was about to change."</em></li>
</ul>

<div class="model-answer"><strong>Model Excerpt — Narrative Opening (In Medias Res):</strong><br>
"The water was at my ankles before I understood what was happening. It came not with a roar but with a whisper — a dark, patient tongue sliding across the kitchen tiles. I grabbed the photo album from the bottom shelf, held it to my chest, and climbed. Behind me, the chairs began to float."</div>

<h3>Building Tension</h3>
<p>Tension is what makes a reader want to keep reading. You build it by controlling pace:</p>
<ul>
<li><strong>Short sentences</strong> — Quicken the pace. "She ran. The gate was locked."</li>
<li><strong>Long, complex sentences</strong> — Slow the reader down, building suspense through drawn-out detail.</li>
<li><strong>Withholding information</strong> — Let the reader sense something is wrong before the character does.</li>
<li><strong>Sensory overload</strong> — Pile on physical details at the moment of crisis.</li>
</ul>

<h3>Writing Effective Dialogue</h3>
<p>Dialogue should reveal character or advance the plot — preferably both. Keep it tight:</p>
<ul>
<li>Avoid long speeches. Two or three lines of exchange are plenty.</li>
<li>Use dialogue tags sparingly: "said" is invisible and effective. Avoid "exclaimed," "retorted," "bellowed" in every line.</li>
<li>Show emotion through action around the dialogue, not through adverbs: <em>"I'm fine," she said, folding the letter into smaller and smaller squares.</em></li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Keep your story focused on ONE event, ONE character, and ONE setting. A 45-minute story that tries to cover a whole day with five characters in three locations will feel rushed and shallow. Depth beats breadth every time.</div>

<h3>Endings That Satisfy</h3>
<p>Your ending does not need to wrap everything up neatly. In fact, subtle, ambiguous endings often score higher because they show sophistication:</p>
<ul>
<li><strong>Circular ending</strong> — Return to the opening image, now seen differently.</li>
<li><strong>Moment of realisation</strong> — The character understands something new.</li>
<li><strong>Image or symbol</strong> — Close on a single powerful visual rather than explaining what happened.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Rushing the ending because you ran out of time. If you have planned properly, you know your ending before you start writing. Protect the last five minutes to write it with the same care as your opening.</div>`,
      quiz: [
        { id: 'gcse-lw-m3-q1', question: 'What does "in medias res" mean?', options: ['At the very beginning of events', 'In the middle of things', 'At the end of the story', 'In a foreign country'], correct: 1, explanation: '"In medias res" is a Latin term meaning "in the middle of things." It is a narrative technique where the story begins mid-action, hooking the reader immediately and avoiding a slow build-up.' },
        { id: 'gcse-lw-m3-q2', question: 'What is the best approach to plot scope in a 45-minute narrative?', options: ['Cover an entire year of events', 'Include at least five characters', 'Focus on one event, one character, and one setting', 'Write as many plot twists as possible'], correct: 2, explanation: 'A focused, controlled narrative scores higher than a sprawling one. Concentrating on one event, one main character, and one setting allows you to write with depth and detail within the time limit.' },
        { id: 'gcse-lw-m3-q3', question: 'How should dialogue tags be used in a narrative?', options: ['Use a different creative tag every time ("exclaimed," "bellowed," "retorted")', 'Use "said" sparingly and show emotion through surrounding action', 'Avoid dialogue entirely', 'Always use adverbs with tags ("she said angrily")'], correct: 1, explanation: '"Said" is almost invisible to readers and keeps the focus on the dialogue itself. Emotion is best conveyed through actions around the speech — for example, what the character does with their hands — rather than through constant adverbs or dramatic tags.' },
        { id: 'gcse-lw-m3-q4', question: 'Which is the strongest type of story ending for GCSE?', options: ['A long summary explaining what happened to every character', '"And then I woke up — it was all a dream"', 'A subtle, image-based or circular ending', 'A cliffhanger that leaves the entire story unresolved'], correct: 2, explanation: 'Subtle, image-based, or circular endings demonstrate sophistication and deliberate craft. "It was all a dream" endings are heavily penalised because they undermine the entire story. A good ending resonates, it does not explain.' },
      ],
    },
    {
      id: 'gcse-lw-m4',
      title: 'Paper 2 Q5: Viewpoint Writing',
      duration: '45 mins',
      content: `<h2>Writing to Persuade, Argue, and Advise</h2>
<p>Paper 2 Question 5 asks you to write non-fiction — typically an article, a speech, a letter, or a leaflet. The task will test your ability to present a clear viewpoint and influence the reader. You need to be organised, persuasive, and engaging.</p>

<h3>Know Your Forms</h3>
<p>Each form has conventions you must follow to show the examiner you understand the task:</p>
<ul>
<li><strong>Article</strong> — Headline, optional subheading, opening hook, paragraphed body, strong conclusion. Written for a specific publication (newspaper, magazine, website).</li>
<li><strong>Speech</strong> — Direct address to the audience ("Ladies and gentlemen…"), rhetorical questions, groups of three, a rousing call to action at the end.</li>
<li><strong>Letter</strong> — Addresses and date (formal), appropriate greeting and sign-off, clear paragraphing, polite but firm tone if arguing a point.</li>
<li><strong>Leaflet</strong> — Heading, subheadings, short paragraphs, bullet points where appropriate, direct and accessible tone.</li>
</ul>

<div class="key-term"><strong>Key Term: AFOREST</strong> — A mnemonic for persuasive techniques: <strong>A</strong>lliteration, <strong>F</strong>acts, <strong>O</strong>pinions, <strong>R</strong>hetorical questions, <strong>E</strong>motive language, <strong>S</strong>tatistics, <strong>T</strong>hree (rule of three). These are your core toolkit for any viewpoint writing task.</div>

<h3>Structuring Your Argument</h3>
<p>A persuasive piece needs a clear, logical flow. Use this reliable five-paragraph structure:</p>
<ol>
<li><strong>Introduction</strong> — Hook the reader and state your position clearly.</li>
<li><strong>Body paragraph 1</strong> — Your most compelling argument with evidence/example.</li>
<li><strong>Body paragraph 2</strong> — A different angle or additional argument.</li>
<li><strong>Counter-argument + rebuttal</strong> — Show you have considered the opposition, then explain why they are wrong.</li>
<li><strong>Conclusion</strong> — Summarise, call to action, or end with a memorable image/statement.</li>
</ol>

<div class="model-answer"><strong>Model Excerpt — Speech Opening (Topic: School Uniform):</strong><br>
"Every morning, 8.6 million secondary school students in this country put on the same shirt, the same tie, the same blazer — and, supposedly, the same sense of belonging. But let me ask you something: when was the last time a polyester tie made you feel like you belonged anywhere? The truth is, school uniform is not about unity. It is about control. And it is time we had an honest conversation about whether that control is helping our young people — or quietly crushing their individuality."</div>

<p>This opening uses a <strong>statistic</strong> ("8.6 million"), a <strong>rhetorical question</strong>, <strong>emotive language</strong> ("crushing their individuality"), and a <strong>direct address</strong> to the audience. It establishes the writer's position immediately.</p>

<h3>Persuasive Techniques in Practice</h3>
<ul>
<li><strong>Anecdote</strong> — "I remember the day my younger sister came home in tears because…" Personal stories make abstract arguments feel real.</li>
<li><strong>Rhetorical question</strong> — "Is this really the world we want to leave to our children?" Forces the reader to engage.</li>
<li><strong>Rule of three</strong> — "It is unfair, it is outdated, and it is unnecessary." Creates rhythm and emphasis.</li>
<li><strong>Direct address</strong> — "You might think this does not affect you. You would be wrong." Involves the reader personally.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always include a counter-argument. Examiners specifically look for this because it demonstrates mature, balanced thinking. You do not have to agree with the opposing view — just acknowledge it and explain why your position is stronger.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting the form. If the question asks for a letter, you must include addresses and a sign-off. If it asks for a speech, you must address the audience directly. Ignoring the form costs marks even if the writing itself is strong.</div>`,
      quiz: [
        { id: 'gcse-lw-m4-q1', question: 'What does the acronym AFOREST stand for?', options: ['Adjectives, Facts, Onomatopoeia, Repetition, Endings, Similes, Tension', 'Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Three (rule of three)', 'Audience, Form, Organisation, Register, Evidence, Structure, Tone', 'Argument, Formal language, Opening, Rebuttal, Example, Summary, Theme'], correct: 1, explanation: 'AFOREST stands for Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, and Three (rule of three). These are the core persuasive techniques you should use in viewpoint writing.' },
        { id: 'gcse-lw-m4-q2', question: 'Why should you include a counter-argument in viewpoint writing?', options: ['To show you cannot make up your mind', 'To fill up space', 'To demonstrate mature, balanced thinking and then strengthen your own position', 'Because the mark scheme requires exactly four paragraphs'], correct: 2, explanation: 'Including a counter-argument shows the examiner that you can consider multiple perspectives — a higher-level skill. The key is to acknowledge the opposing view and then rebut it, which actually strengthens your argument.' },
        { id: 'gcse-lw-m4-q3', question: 'If the question asks you to write a speech, what must you include?', options: ['Addresses and a date', 'Bullet points and subheadings', 'Direct address to the audience and rhetorical techniques', 'A bibliography'], correct: 2, explanation: 'A speech must directly address the audience ("Ladies and gentlemen," "you," "we") and use spoken-word techniques like rhetorical questions, repetition, and the rule of three. Ignoring the form conventions loses marks.' },
        { id: 'gcse-lw-m4-q4', question: 'What is the purpose of an anecdote in persuasive writing?', options: ['To show off your vocabulary', 'To make an abstract argument feel personal and real', 'To meet the word count', 'To prove you have done research'], correct: 1, explanation: 'Anecdotes — short personal stories — make arguments concrete and relatable. They help the reader connect emotionally to your point, which is far more persuasive than abstract reasoning alone.' },
      ],
    },
    {
      id: 'gcse-lw-m5',
      title: 'Sentences & Paragraphs for Effect',
      duration: '35 mins',
      content: `<h2>Controlling Pace, Rhythm, and Flow</h2>
<p>The mark scheme for both Paper 1 and Paper 2 rewards "a range of sentence forms for effect." This means you need to vary your sentence lengths and types deliberately — not randomly. Every sentence choice should serve your meaning.</p>

<h3>Sentence Types and Their Effects</h3>
<ul>
<li><strong>Simple sentence</strong> — One clause. Creates impact, clarity, or shock. "The door opened." Works best after a sequence of longer sentences.</li>
<li><strong>Compound sentence</strong> — Two clauses joined by a coordinating conjunction (and, but, or, so). Creates balance or contrast. "The sun was setting, but nobody moved."</li>
<li><strong>Complex sentence</strong> — A main clause with one or more subordinate clauses. Adds detail, context, or builds suspense. "Although the room appeared empty, a faint tapping echoed from behind the wall."</li>
<li><strong>Minor sentence / fragment</strong> — An incomplete sentence used for dramatic effect. "Gone." "Nothing." "Silence, at last." Use sparingly.</li>
</ul>

<div class="key-term"><strong>Key Term: Syntax</strong> — The arrangement of words and phrases to create well-formed sentences. Deliberately controlling your syntax — placing key words at the beginning or end of a sentence — is a hallmark of top-band writing.</div>

<h3>The Power of the Short Sentence</h3>
<p>A short sentence works like a punch — but only if you set it up properly. After two or three long, flowing sentences, a short one creates sudden impact:</p>

<div class="text-extract">"The corridor stretched ahead, lined with doors that had not been opened in years, the air thick with dust and the faint smell of something chemical, something wrong. I stopped."<div class="source">Student model answer</div></div>

<p>The short sentence "I stopped." lands hard precisely because everything before it was long and winding. If every sentence were short, none would have impact.</p>

<h3>Paragraph Techniques</h3>
<ul>
<li><strong>One-line paragraph</strong> — Isolates a key moment or idea for maximum impact. Use once or twice per piece.</li>
<li><strong>Long, detailed paragraph</strong> — Builds atmosphere or develops an argument thoroughly.</li>
<li><strong>Paragraph of dialogue</strong> — Breaks up dense description and quickens pace in narrative.</li>
</ul>

<h3>Discourse Markers and Cohesion</h3>
<p>Discourse markers are the signposts that guide your reader through your argument or narrative. Without them, writing feels like a list of disconnected thoughts:</p>
<ul>
<li><strong>Addition</strong> — Furthermore, moreover, in addition, equally.</li>
<li><strong>Contrast</strong> — However, nevertheless, on the other hand, conversely.</li>
<li><strong>Cause/effect</strong> — Consequently, therefore, as a result, thus.</li>
<li><strong>Sequence</strong> — Initially, subsequently, finally, meanwhile.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not start every paragraph with a discourse marker. Mix them up — sometimes start with a short statement, a question, or an image. Over-reliance on "Furthermore… However… In conclusion…" sounds formulaic and limits your mark.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using minor sentences (fragments) in every paragraph. One or two across the whole piece create impact. Five or six suggest you do not know how to write a complete sentence. The examiner needs to see range, not repetition of one trick.</div>`,
      quiz: [
        { id: 'gcse-lw-m5-q1', question: 'Why are short sentences most effective after longer ones?', options: ['Because the examiner prefers short sentences', 'Because the contrast creates sudden impact, like a punch', 'Because they save time', 'Because they are grammatically simpler'], correct: 1, explanation: 'Short sentences create impact through contrast. After long, flowing sentences, a short one creates a sudden shift in pace that catches the reader off guard. Without the contrast, the effect is lost.' },
        { id: 'gcse-lw-m5-q2', question: 'What is a discourse marker?', options: ['A type of punctuation mark', 'A word or phrase that signals the direction of your argument (e.g., "however," "furthermore")', 'A pen used for marking exams', 'A paragraph that contains only dialogue'], correct: 1, explanation: 'Discourse markers are connective words and phrases like "however," "furthermore," "consequently," and "on the other hand" that guide the reader through your argument by showing the relationship between ideas.' },
        { id: 'gcse-lw-m5-q3', question: 'How often should you use a one-line paragraph?', options: ['Every other paragraph', 'Once or twice per piece for maximum impact', 'Never — paragraphs must always be at least three sentences', 'In every paragraph to keep things concise'], correct: 1, explanation: 'A one-line paragraph isolates a moment or idea, giving it enormous weight. Using it once or twice per piece creates genuine impact. Using it constantly dilutes the effect and looks like you cannot develop ideas.' },
        { id: 'gcse-lw-m5-q4', question: 'What does the mark scheme mean by "a range of sentence forms"?', options: ['Using only complex sentences', 'Varying sentence lengths and types deliberately for effect', 'Writing at least 30 sentences', 'Starting every sentence with a different word'], correct: 1, explanation: 'The mark scheme rewards deliberate variety — using simple, compound, complex, and minor sentences where each choice serves the meaning. It is about conscious control, not random variation.' },
      ],
    },
    {
      id: 'gcse-lw-m6',
      title: 'Vocabulary & Ambitious Language',
      duration: '30 mins',
      content: `<h2>Choosing the Right Word, Not the Biggest Word</h2>
<p>The mark scheme rewards "extensive and ambitious vocabulary" — but ambitious does not mean obscure. It means choosing the most precise, evocative word for the moment. A well-placed "fractured" is worth more than ten misused long words.</p>

<h3>Connotation vs Denotation</h3>
<p>Every word has a <strong>denotation</strong> (its dictionary meaning) and <strong>connotation</strong> (the feelings and associations it carries). Top-band writers exploit connotation constantly:</p>
<ul>
<li>"House" vs "home" — same denotation, but "home" connotes warmth and belonging.</li>
<li>"Walked" vs "trudged" — both mean moved on foot, but "trudged" connotes exhaustion and reluctance.</li>
<li>"Said" vs "muttered" — "muttered" connotes secrecy, resentment, or discomfort.</li>
</ul>

<div class="key-term"><strong>Key Term: Connotation</strong> — The emotional or cultural associations a word carries beyond its literal meaning. Choosing words with strong connotations adds layers of meaning to your writing without needing extra sentences.</div>

<h3>Upgrading Common Words</h3>
<p>You do not need to replace every word, but upgrading a few key verbs and adjectives transforms flat writing into vivid writing:</p>
<ul>
<li>"Walked" → strode, ambled, staggered, crept, marched (each implies something different).</li>
<li>"Nice" → pleasant, inviting, charming, idyllic (each carries a different shade).</li>
<li>"Big" → vast, towering, sprawling, immense (scale and shape matter).</li>
<li>"Bad" → dire, grim, harrowing, toxic (severity and context matter).</li>
</ul>

<div class="model-answer"><strong>Before (bland):</strong> "The old building was big and dark. It looked scary. The windows were broken."<br><br>
<strong>After (ambitious vocabulary):</strong> "The factory loomed above the street, its blackened walls swallowing what little light the afternoon offered. Every window gaped — toothless, hollow — as though the building itself had screamed and nobody had come."</div>

<p>The "after" version uses specific nouns ("factory" not "building"), powerful verbs ("loomed," "swallowing," "gaped"), and figurative language that grows from the vocabulary rather than being bolted on.</p>

<h3>Avoiding Cliches</h3>
<p>Cliches are phrases so overused they have lost all impact. Examiners notice them immediately:</p>
<ul>
<li>"It was a dark and stormy night" — describe the storm specifically instead.</li>
<li>"Her heart pounded like a drum" — find a fresher comparison.</li>
<li>"At the end of the day" — say what you actually mean.</li>
<li>"Crystal clear" — clear in what way? Be precise.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If a phrase feels familiar — if you have read it a hundred times — it is probably a cliche. Push past your first instinct and reach for something more original. Even a slight twist makes a difference: "her heart hammered against her ribs like a fist on a locked door" is far more vivid than "her heart pounded."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using a thesaurus to find obscure words you do not fully understand. If you use a word incorrectly, the examiner will notice, and it damages your mark more than using a simpler word correctly. Only use words you genuinely know.</div>`,
      quiz: [
        { id: 'gcse-lw-m6-q1', question: 'What is the difference between connotation and denotation?', options: ['Connotation is the spelling; denotation is the pronunciation', 'Denotation is the dictionary meaning; connotation is the emotional or cultural associations', 'They are the same thing', 'Connotation only applies to nouns'], correct: 1, explanation: 'Denotation is a word\'s literal, dictionary meaning. Connotation is the feelings, associations, and implied meanings a word carries. "Home" and "house" denote the same thing, but "home" connotes warmth and belonging.' },
        { id: 'gcse-lw-m6-q2', question: 'What does the mark scheme mean by "ambitious vocabulary"?', options: ['Using the longest words you can find', 'Choosing the most precise, evocative word for each moment', 'Using at least 50 different adjectives', 'Only using words with four or more syllables'], correct: 1, explanation: 'Ambitious vocabulary means selecting words with precision and purpose — choosing the word that captures exactly the right shade of meaning. A well-chosen short word can be more ambitious than a misused long one.' },
        { id: 'gcse-lw-m6-q3', question: 'Why should you avoid cliches in your writing?', options: ['They are too short', 'They are grammatically incorrect', 'They are overused and have lost their impact', 'They are too difficult for the examiner to understand'], correct: 2, explanation: 'Cliches are phrases so familiar they no longer create any vivid picture in the reader\'s mind. They signal lazy writing. Examiners reward originality, so push past your first instinct and find a fresher way to express the idea.' },
        { id: 'gcse-lw-m6-q4', question: 'Which is the best replacement for "walked slowly"?', options: ['Perambulated leisurely', 'Trudged', 'Moved in a slow walking manner', 'Went'], correct: 1, explanation: '"Trudged" is a single, precise verb that conveys slow, heavy, reluctant movement. It is ambitious but natural. "Perambulated leisurely" is over-the-top and sounds unnatural. "Went" is too vague. A strong verb does the work of a verb and an adverb combined.' },
      ],
    },
    {
      id: 'gcse-lw-m7',
      title: 'SPaG & Proofreading',
      duration: '25 mins',
      content: `<h2>The 16 Marks You Cannot Afford to Lose</h2>
<p>On both Paper 1 and Paper 2, technical accuracy is worth 16 marks out of 40. That is 40% of your writing mark decided by spelling, punctuation, and grammar alone. Many students treat SPaG as an afterthought, but it is one of the easiest areas to improve — and the marks are there for the taking.</p>

<h3>Punctuation That Matters Most</h3>
<p>You do not need to master every obscure punctuation mark. Focus on using these correctly and deliberately:</p>
<ul>
<li><strong>Full stops</strong> — Every sentence must end with one. It sounds obvious, but comma splicing (joining sentences with a comma instead of a full stop) is the most common punctuation error at GCSE.</li>
<li><strong>Commas</strong> — After subordinate clauses ("Although it was raining, we continued"), in lists, and around embedded clauses ("The house, which had been empty for years, stood at the end of the lane").</li>
<li><strong>Apostrophes</strong> — For contraction (don't, it's) and possession (the dog's bowl, the students' work). Never use an apostrophe for plurals.</li>
<li><strong>Semi-colons</strong> — Join two closely related independent clauses: "The rain hammered the roof; inside, nobody spoke." Using even one correctly signals confidence to the examiner.</li>
<li><strong>Colons</strong> — Introduce a list, an explanation, or an elaboration: "There was only one option: run."</li>
</ul>

<div class="key-term"><strong>Key Term: Comma splice</strong> — The error of joining two complete sentences with only a comma. "It was dark, we couldn't see anything" is a comma splice. Fix it with a full stop, a semi-colon, or a conjunction: "It was dark, and we couldn't see anything."</div>

<h3>The Top 10 Spelling Mistakes at GCSE</h3>
<p>Learn these and you remove the most common spelling errors examiners see:</p>
<ol>
<li><strong>their / there / they're</strong> — possession / place / "they are"</li>
<li><strong>your / you're</strong> — possession / "you are"</li>
<li><strong>its / it's</strong> — possession / "it is"</li>
<li><strong>too / to / two</strong> — also or excessive / direction / number</li>
<li><strong>where / were / we're</strong> — place / past tense / "we are"</li>
<li><strong>definitely</strong> — not "definately"</li>
<li><strong>because</strong> — not "becuase"</li>
<li><strong>separate</strong> — not "seperate" (remember: there is "a rat" in separate)</li>
<li><strong>believe</strong> — not "beleive" (remember: never "believe" a "lie")</li>
<li><strong>necessary</strong> — one collar, two socks (one c, two s's)</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are unsure how to spell a word, use a synonym you can spell instead. It is better to write "essential" than to misspell "necessary." The examiner cannot penalise a word you never wrote.</div>

<h3>Grammar Essentials</h3>
<ul>
<li><strong>Tense consistency</strong> — Pick past or present and stick with it. Random tense shifts are one of the most jarring grammar errors.</li>
<li><strong>Subject-verb agreement</strong> — "The group of students <em>was</em>" (not "were") — the subject is "group," which is singular.</li>
<li><strong>Sentence boundaries</strong> — Every sentence needs a subject and a verb. Read your work aloud in your head; if a sentence does not make sense on its own, it is probably a fragment (unless you are using a minor sentence deliberately for effect).</li>
</ul>

<h3>The 5-Minute Proofread</h3>
<p>In your final five minutes, read through your work with a pen in hand and check for:</p>
<ol>
<li>Missing full stops or capital letters.</li>
<li>Comma splices — replace with full stops or semi-colons.</li>
<li>Spelling errors on common words (their/there, your/you're).</li>
<li>Missing or misused apostrophes.</li>
<li>Any sentence that sounds awkward when read in your head — rewrite it in the margin.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Thinking that neat crossing-out looks bad. Examiners do not penalise corrections — they reward them. A single line through a mistake with a neat correction above it shows self-editing skill, not carelessness. It is far better to correct an error than to leave it.</div>`,
      quiz: [
        { id: 'gcse-lw-m7-q1', question: 'What is a comma splice?', options: ['Using too many commas in a list', 'Joining two complete sentences with only a comma', 'Forgetting to use a comma after a name', 'Using a comma instead of an apostrophe'], correct: 1, explanation: 'A comma splice occurs when two independent clauses (complete sentences) are joined with just a comma. For example: "It was raining, we stayed inside." Fix it with a full stop, semi-colon, or conjunction.' },
        { id: 'gcse-lw-m7-q2', question: 'How many marks is technical accuracy worth on each writing paper?', options: ['8 marks', '12 marks', '16 marks', '24 marks'], correct: 2, explanation: 'Technical accuracy (spelling, punctuation, and grammar) is worth 16 out of 40 marks on the writing section — that is 40% of your mark. It is one of the easiest areas to improve with practice and careful proofreading.' },
        { id: 'gcse-lw-m7-q3', question: 'Which sentence uses a semi-colon correctly?', options: ['The dog was tired; and it slept.', 'The rain hammered the roof; inside, nobody spoke.', 'She went to the shop; milk, bread, eggs.', 'He ran fast; because he was late.'], correct: 1, explanation: 'A semi-colon correctly joins two closely related independent clauses that could each stand alone as sentences. "The rain hammered the roof" and "inside, nobody spoke" are both complete ideas linked by theme.' },
        { id: 'gcse-lw-m7-q4', question: 'What should you do if you are unsure how to spell a word in the exam?', options: ['Leave a blank space', 'Guess and hope for the best', 'Use a synonym you can spell correctly', 'Write it phonetically'], correct: 2, explanation: 'If you cannot spell a word, replace it with a synonym you are confident about. The examiner cannot penalise a word you did not write, and using a well-spelled alternative keeps your technical accuracy marks safe.' },
      ],
    },
  ],
  assessmentQuestions: [
    {
      id: 'gcse-lw-a1',
      question: 'What is the recommended time split for a 45-minute writing task?',
      options: ['5 mins plan, 35 mins write, 5 mins proofread', '10 mins plan, 35 mins write, 0 mins proofread', '0 mins plan, 40 mins write, 5 mins proofread', '5 mins plan, 40 mins write, 0 mins proofread'],
      correct: 0,
      explanation: 'The 5-35-5 split is the recommended approach. Planning ensures your writing has direction and structure, while proofreading catches SPaG errors that could cost several marks.',
    },
    {
      id: 'gcse-lw-a2',
      question: 'Which of the following best demonstrates "show, don\'t tell"?',
      options: ['She was very afraid.', 'Her fingers whitened around the door handle; she could not make herself turn it.', 'She felt fear running through her body.', 'The character experienced a feeling of intense terror.'],
      correct: 1,
      explanation: '"Show, don\'t tell" conveys emotion through physical details rather than labelling the feeling. Whitened fingers and an inability to turn the handle show fear far more vividly than stating "she was afraid."',
    },
    {
      id: 'gcse-lw-a3',
      question: 'What is a "conceptualised response"?',
      options: ['A response written entirely in bullet points', 'A response that uses difficult vocabulary throughout', 'A response shaped around a central idea or theme from start to finish', 'A response that follows the exact structure of the example in the textbook'],
      correct: 2,
      explanation: 'A conceptualised response is deliberately crafted around a unifying idea or theme. It demonstrates that the writer planned and controlled the piece rather than writing randomly.',
    },
    {
      id: 'gcse-lw-a4',
      question: 'In Paper 2, which form requires you to include addresses and a formal sign-off?',
      options: ['Article', 'Speech', 'Letter', 'Leaflet'],
      correct: 2,
      explanation: 'A formal letter requires your address (top right), the recipient\'s address (left), the date, an appropriate greeting (Dear Sir/Madam or Dear Mr/Ms), and a sign-off (Yours faithfully/sincerely). Missing these loses marks for form.',
    },
    {
      id: 'gcse-lw-a5',
      question: 'Which sentence contains a comma splice?',
      options: ['The sun set, and the stars appeared.', 'The sun set; the stars appeared.', 'The sun set, the stars appeared.', 'The sun set. The stars appeared.'],
      correct: 2,
      explanation: '"The sun set, the stars appeared" is a comma splice — two complete sentences joined by only a comma. The other options fix this with a conjunction, a semi-colon, or a full stop.',
    },
    {
      id: 'gcse-lw-a6',
      question: 'What does AFOREST stand for?',
      options: ['Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Three', 'Adjectives, Facts, Onomatopoeia, Repetition, Emotive language, Similes, Tension', 'Alliteration, Form, Organisation, Rhetoric, Evidence, Structure, Tone', 'Anecdotes, Facts, Opinions, Repetition, Examples, Statistics, Tricolon'],
      correct: 0,
      explanation: 'AFOREST is a mnemonic for persuasive techniques: Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, and Three (rule of three).',
    },
    {
      id: 'gcse-lw-a7',
      question: 'What does "in medias res" mean?',
      options: ['At the very end of events', 'In a foreign setting', 'In the middle of things', 'In the first person'],
      correct: 2,
      explanation: '"In medias res" is Latin for "in the middle of things." It means beginning a story mid-action to immediately engage the reader, rather than starting with slow background information.',
    },
    {
      id: 'gcse-lw-a8',
      question: 'Which is the best example of ambitious vocabulary replacing a weak verb?',
      options: ['He walked quickly → He moved at speed', 'He walked quickly → He sprinted', 'He walked quickly → He perambulated hastily', 'He walked quickly → He went fast'],
      correct: 1,
      explanation: '"Sprinted" is a single precise verb that replaces both a weak verb and its adverb. It is ambitious but natural. "Perambulated hastily" is over-the-top, while "went fast" and "moved at speed" are vague.',
    },
    {
      id: 'gcse-lw-a9',
      question: 'How many marks is technical accuracy (SPaG) worth out of 40 on the writing question?',
      options: ['8 marks', '12 marks', '16 marks', '24 marks'],
      correct: 2,
      explanation: 'Technical accuracy accounts for 16 out of 40 marks — 40% of your writing score. This covers spelling, punctuation, grammar, and sentence control.',
    },
    {
      id: 'gcse-lw-a10',
      question: 'What is the main problem with using too many minor sentences (fragments)?',
      options: ['They are always grammatically incorrect', 'Overuse suggests you cannot write complete sentences and reduces your demonstrated range', 'The examiner will stop reading', 'They make your writing too long'],
      correct: 1,
      explanation: 'One or two fragments create deliberate impact, but overusing them suggests a limited range of sentence forms. The mark scheme rewards variety — the examiner needs to see you can control simple, compound, and complex sentences too.',
    },
    {
      id: 'gcse-lw-a11',
      question: 'Which structural technique involves ending a piece with the same image it opened with?',
      options: ['In medias res', 'Flashback', 'Circular structure', 'Zoom in/out'],
      correct: 2,
      explanation: 'A circular structure returns to the opening image, setting, or idea at the end — but with something changed. This creates a sense of completeness and shows deliberate structural control.',
    },
    {
      id: 'gcse-lw-a12',
      question: 'What is the difference between connotation and denotation?',
      options: ['Connotation is the literal meaning; denotation is the implied meaning', 'Denotation is the dictionary meaning; connotation is the emotional associations', 'They mean the same thing', 'Connotation applies to verbs; denotation applies to nouns'],
      correct: 1,
      explanation: 'Denotation is a word\'s literal, dictionary meaning. Connotation is the emotional, cultural, or implied associations a word carries. "Home" denotes a dwelling but connotes warmth and belonging.',
    },
    {
      id: 'gcse-lw-a13',
      question: 'Why should you include a counter-argument in Paper 2 viewpoint writing?',
      options: ['To weaken your own argument', 'To fill space and reach the word count', 'To show balanced, mature thinking and then strengthen your own position', 'Because the mark scheme says you must write exactly five paragraphs'],
      correct: 2,
      explanation: 'A counter-argument demonstrates that you can engage with different perspectives — a higher-order skill. Acknowledging the opposition and then rebutting it actually makes your own argument more convincing.',
    },
    {
      id: 'gcse-lw-a14',
      question: 'Which sentence uses a semi-colon correctly?',
      options: ['She loved the garden; and the flowers.', 'The city was alive; music poured from every doorway.', 'He bought; apples, oranges, and bananas.', 'Running fast; she tripped.'],
      correct: 1,
      explanation: 'A semi-colon joins two independent clauses that are closely related. "The city was alive" and "music poured from every doorway" are both complete sentences linked by theme, making this the correct usage.',
    },
    {
      id: 'gcse-lw-a15',
      question: 'What is pathetic fallacy?',
      options: ['A logical error in an argument', 'Using weather or nature to reflect mood or emotion', 'A character who is overly emotional', 'A type of unreliable narrator'],
      correct: 1,
      explanation: 'Pathetic fallacy is when elements of the natural world — weather, seasons, landscape — are used to mirror the mood of a scene or the emotions of a character. For example, a thunderstorm during a moment of anger.',
    },
    {
      id: 'gcse-lw-a16',
      question: 'Which opening technique is most effective for a narrative?',
      options: ['The alarm clock buzzed and I got out of bed.', '"Don\'t open that door."', 'My name is Sarah and I am going to tell you a story.', 'It was a normal day, just like any other.'],
      correct: 1,
      explanation: 'A line of dialogue thrown in mid-action immediately hooks the reader and creates intrigue. The alarm clock opening is a notorious cliche. Introducing yourself or saying "it was a normal day" is flat and wastes your strongest moment.',
    },
    {
      id: 'gcse-lw-a17',
      question: 'What is the most common punctuation error at GCSE?',
      options: ['Missing exclamation marks', 'Comma splicing (joining sentences with commas)', 'Overusing semi-colons', 'Forgetting question marks'],
      correct: 1,
      explanation: 'Comma splicing — joining two independent clauses with just a comma — is the most common punctuation error examiners see at GCSE. It can be fixed with a full stop, a semi-colon, or by adding a conjunction.',
    },
    {
      id: 'gcse-lw-a18',
      question: 'When writing a speech for Paper 2, which technique is essential?',
      options: ['Including a bibliography', 'Using bullet points for every paragraph', 'Directly addressing the audience', 'Writing in the third person'],
      correct: 2,
      explanation: 'A speech must directly address the audience using "you," "we," and phrases like "Ladies and gentlemen." This distinguishes it from other forms and demonstrates that you understand the conventions of the task.',
    },
    {
      id: 'gcse-lw-a19',
      question: 'What should you do during the last 5 minutes of a writing exam?',
      options: ['Write a new concluding paragraph', 'Add more descriptive detail to your opening', 'Proofread for SPaG errors and correct mistakes', 'Start the next question early'],
      correct: 2,
      explanation: 'The final five minutes should be dedicated to proofreading. Catching and correcting spelling, punctuation, and grammar errors in this time can gain you 3-4 marks. Corrections with a single line through the mistake are perfectly acceptable.',
    },
    {
      id: 'gcse-lw-a20',
      question: 'Which of these is a cliche that should be avoided?',
      options: ['The factory loomed above the street, its walls swallowing the light.', 'Her heart pounded like a drum.', 'The silence folded itself around us like a held breath.', 'Morning arrived with the reluctance of a Monday.'],
      correct: 1,
      explanation: '"Her heart pounded like a drum" is one of the most overused similes in student writing. It no longer creates any vivid image. The other options use original figurative language that feels fresh and specific.',
    },
  ],
};

const gcseLitPoetry: CourseData = {
  id: 'gcse-lit-poetry',
  title: 'GCSE Literature: Poetry (AQA)',
  subtitle: 'Analyse unseen poetry and AQA anthology poems with precision.',
  tier: 'GCSE',
  board: 'AQA',
  specId: 'gcse-lit',
  specCode: '8702',
  price: 0,
  duration: '5-7 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'Build your confidence with unseen poetry analysis. Learn to identify techniques, explore meanings, compare poems, and write essays that examiners love. Covers both unseen poetry questions on AQA Paper 2.',
  color: '#10b981',

  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m1',
      title: 'Reading a Poem: First Steps',
      duration: '30 mins',
      content: `
<p>When you first encounter an unseen poem, it is tempting to panic. The key is to have a <span class="key-term">repeatable strategy</span> that you can rely on every time. In this module you will learn how to read, annotate, and begin analysing any poem you are given.</p>

<h3>Step 1 — Read the Poem Three Times</h3>
<p>Your first read-through should be relaxed: simply absorb the poem without writing anything. On the second reading, underline any striking words or images. On the third reading, start making marginal notes about what you think the poem is about and how the poet achieves their effects.</p>

<div class="examiner-tip">Examiners can tell when students have only read a poem once. Multiple readings show in the depth of analysis you produce.</div>

<h3>Step 2 — Annotate with SMILE</h3>
<p>Use the <span class="key-term">SMILE</span> framework to organise your annotations:</p>
<ul>
  <li><strong>S</strong> — <span class="key-term">Structure</span>: How is the poem arranged? Note stanza lengths, line lengths, and any shifts in tone or focus.</li>
  <li><strong>M</strong> — <span class="key-term">Meaning</span>: What is the poem about on the surface, and what deeper meanings can you find?</li>
  <li><strong>I</strong> — <span class="key-term">Imagery</span>: What pictures does the poet create in your mind? Look for metaphors, similes, and sensory language.</li>
  <li><strong>L</strong> — <span class="key-term">Language</span>: What specific word choices stand out? Consider connotations and tone.</li>
  <li><strong>E</strong> — <span class="key-term">Effect</span>: How does the poem make you feel? What impact do the poet's choices have on the reader?</li>
</ul>

<h3>Seeing SMILE in Action</h3>
<p>Consider the following short extract:</p>

<div class="text-extract">
  The river does not hurry, yet it arrives.<br>
  Each stone it passes learns a softer shape,<br>
  worn down by nothing more than patience.
  <div class="source">— Original example for annotation practice</div>
</div>

<p>Using SMILE: the <strong>structure</strong> is three unrhymed lines of similar length, giving a calm, unhurried feel that mirrors the subject. The <strong>meaning</strong> on the surface is about a river, but on a deeper level it suggests that persistence achieves more than force. The <strong>imagery</strong> of stones learning "a softer shape" personifies nature. The <strong>language</strong> choice of "patience" turns an abstract quality into something almost physical. The <strong>effect</strong> is contemplative — the reader is invited to slow down, just as the river does.</p>

<div class="common-mistake">Don't just list techniques — always explain <em>why</em> the poet has used them and <em>what effect</em> they create. Technique-spotting without analysis will not earn high marks.</div>

<p>By the end of this module you should feel confident picking up any poem and knowing exactly where to begin. In the next module, we will expand your toolkit of poetic techniques so that your annotations become richer and more precise.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m1-q1',
          question: 'What does the "E" in SMILE stand for?',
          options: ['Evidence', 'Effect', 'Emotion', 'Enjambment'],
          correct: 1,
          explanation:
            'In the SMILE framework, E stands for Effect — the impact the poet\'s choices have on the reader.',
        },
        {
          id: 'gcse-lp-m1-q2',
          question:
            'How many times should you ideally read an unseen poem before you begin writing your response?',
          options: ['Once', 'Twice', 'Three times', 'Four times'],
          correct: 2,
          explanation:
            'You should read the poem at least three times: once for overall impression, once to underline key words, and once to begin annotating.',
        },
        {
          id: 'gcse-lp-m1-q3',
          question:
            'What is the main danger of "technique-spotting" without further comment?',
          options: [
            'It takes too long',
            'It shows you have not read the poem',
            'It identifies techniques but fails to analyse their effect',
            'It only works with rhyming poems',
          ],
          correct: 2,
          explanation:
            'Simply naming techniques without explaining their effect on the reader will not earn high marks. Analysis means exploring why the poet made that choice.',
        },
        {
          id: 'gcse-lp-m1-q4',
          question:
            'In the river extract, what does the personification of the stones "learning" a softer shape suggest?',
          options: [
            'The stones are alive',
            'Nature is violent and destructive',
            'Change happens gradually through persistent gentle force',
            'Rivers are more powerful than oceans',
          ],
          correct: 2,
          explanation:
            'The personification suggests that gentle, patient persistence — rather than force — shapes and changes things over time.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m2',
      title: 'Poetic Techniques Toolkit',
      duration: '40 mins',
      content: `
<p>A strong poetry response depends on your ability to identify and discuss <span class="key-term">poetic techniques</span>. This module introduces the techniques you are most likely to encounter at GCSE and shows you how to write about each one with precision.</p>

<h3>Imagery Techniques</h3>
<p>A <span class="key-term">metaphor</span> states that something <em>is</em> something else: "The classroom was a furnace." A <span class="key-term">simile</span> compares using "like" or "as": "Her voice landed like a coin in an empty jar." <span class="key-term">Personification</span> gives human qualities to non-human things: "The wind muttered between the houses."</p>

<div class="text-extract">
  She wore the morning like a coat of light,<br>
  buttoned with birdsong at the throat.
  <div class="source">— Original example for technique analysis</div>
</div>

<p>Here the simile "like a coat of light" creates a vivid visual image of brightness surrounding the subject, while the metaphor of birdsong "buttoned at the throat" merges the natural world with clothing, suggesting harmony between the person and the dawn.</p>

<h3>Sound Techniques</h3>
<p><span class="key-term">Alliteration</span> is the repetition of initial consonant sounds ("crisp, cold currents"). <span class="key-term">Sibilance</span> is a specific form using 's' and 'sh' sounds ("she whispered softly through the silver mist"), often creating a sense of secrecy or calm. <span class="key-term">Assonance</span> repeats vowel sounds within words ("the low moan of the old road").</p>

<div class="examiner-tip">When discussing sound techniques, always read the line aloud in your head. Explain what the sound <em>feels</em> like — harsh, soft, rhythmic — and connect that feeling to the poem's meaning.</div>

<h3>Structural Techniques</h3>
<p><span class="key-term">Enjambment</span> occurs when a sentence runs on past the end of a line without punctuation, pulling the reader forward and creating momentum. <span class="key-term">Caesura</span> is a pause in the middle of a line, often created by punctuation — it can slow the pace or create a dramatic break.</p>

<div class="text-extract">
  I kept on walking. Nothing changed.<br>
  The road stretched on and I could not<br>
  remember why I started out at all.
  <div class="source">— Original example for structural analysis</div>
</div>

<p>The <span class="key-term">caesura</span> after "walking" forces the reader to pause, mirroring the speaker's exhaustion. The <span class="key-term">enjambment</span> between lines two and three ("could not / remember") physically splits the thought across lines, reflecting the speaker's fragmented memory.</p>

<h3>Other Key Terms</h3>
<p>A <span class="key-term">volta</span> is a turning point or shift in a poem — a change in tone, argument, or perspective. The <span class="key-term">rhyme scheme</span> is the pattern of end-rhymes (labelled ABAB, ABBA, etc.). Recognising these patterns helps you discuss how the poet controls the reader's experience.</p>

<div class="common-mistake">Avoid calling every repeated sound "alliteration." If the repeated sounds are vowels, that is assonance. If they are 's' sounds, be specific and call it sibilance. Precision earns marks.</div>
`,
      quiz: [
        {
          id: 'gcse-lp-m2-q1',
          question: 'What is the difference between a metaphor and a simile?',
          options: [
            'A metaphor uses "like" or "as"; a simile does not',
            'A simile uses "like" or "as"; a metaphor states something is something else',
            'They are exactly the same technique',
            'A metaphor only applies to people; a simile applies to objects',
          ],
          correct: 1,
          explanation:
            'A simile compares using "like" or "as," while a metaphor directly states that one thing is another.',
        },
        {
          id: 'gcse-lp-m2-q2',
          question: 'Which technique involves a pause in the middle of a line?',
          options: ['Enjambment', 'Volta', 'Caesura', 'Sibilance'],
          correct: 2,
          explanation:
            'Caesura is a pause within a line of poetry, usually created by punctuation such as a full stop, comma, or dash.',
        },
        {
          id: 'gcse-lp-m2-q3',
          question:
            'In the extract "she whispered softly through the silver mist," the repeated "s" sounds are an example of which technique?',
          options: [
            'Alliteration',
            'Assonance',
            'Sibilance',
            'Onomatopoeia',
          ],
          correct: 2,
          explanation:
            'Sibilance is the specific repetition of "s" and "sh" sounds. While it is a type of alliteration, using the precise term shows stronger knowledge.',
        },
        {
          id: 'gcse-lp-m2-q4',
          question: 'What is a volta in poetry?',
          options: [
            'A repeated refrain at the end of each stanza',
            'A turning point or shift in the poem',
            'A type of rhyme scheme',
            'A form of visual imagery',
          ],
          correct: 1,
          explanation:
            'A volta is a turning point — a shift in tone, argument, mood, or perspective. It is especially associated with sonnets but can appear in any poem.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m3',
      title: 'Analysing Meaning & Themes',
      duration: '35 mins',
      content: `
<p>Identifying techniques is only half the task. Examiners want to see that you can move beyond the surface to explore <span class="key-term">deeper meanings</span> and connect the poem to broader themes. This module will show you how to think like a literary analyst.</p>

<h3>Surface vs. Deeper Meaning</h3>
<p>The <span class="key-term">surface meaning</span> (or literal meaning) is what the poem describes on a basic level: a storm, a walk through a city, a memory of childhood. The <span class="key-term">deeper meaning</span> is what the poem is really about — its ideas, emotions, and arguments. A poem describing a storm might really be exploring anger; a poem about a locked door might address emotional isolation.</p>

<div class="text-extract">
  The garden had not changed, and yet<br>
  my hands no longer knew the gate,<br>
  its latch a language I had lost.
  <div class="source">— Original example for meaning analysis</div>
</div>

<p>On the surface, the speaker is returning to a familiar garden. The deeper meaning explores how we become estranged from places — and perhaps people — we once knew intimately. The metaphor of the latch as "a language I had lost" suggests that belonging somewhere is a skill that fades without practice.</p>

<h3>Interpreting Symbolism</h3>
<p>A <span class="key-term">symbol</span> is an object, image, or action that represents something beyond itself. Poets rarely state their meaning outright; instead they use symbols to communicate complex ideas economically. When you spot a recurring image or an object given unusual emphasis, ask yourself: <em>What could this represent?</em></p>

<div class="examiner-tip">Use tentative language when exploring meaning: "This could suggest…", "Perhaps the poet implies…", "One interpretation is…". This shows you understand that poems can have multiple valid readings.</div>

<h3>Contextual Understanding</h3>
<p>While the unseen poetry section of the exam does not require you to know the poet's background, you can still make <span class="key-term">contextual inferences</span>. If a poem mentions trenches, you can connect it to war. If it uses archaic language, you might note how the old-fashioned diction creates a sense of formality or distance. The key is to let the poem itself guide your contextual comments rather than bolting on unrelated historical facts.</p>

<h3>Thematic Connections</h3>
<p>Common themes in GCSE poetry include: <strong>power and conflict</strong>, <strong>love and relationships</strong>, <strong>nature</strong>, <strong>identity</strong>, <strong>memory and time</strong>, and <strong>loss</strong>. When you identify a theme, explain <em>what the poem says about it</em>. Saying "the theme is loss" is not analysis. Saying "the poet presents loss as something gradual and almost invisible, noticed only in small domestic details" <em>is</em> analysis.</p>

<div class="common-mistake">Avoid making sweeping claims like "The poet is angry about society." Be specific: which words reveal that anger? What aspect of society? Ground every interpretive claim in the text.</div>

<p>A useful habit is to write a single sentence summarising the poem's message before you begin your essay. This keeps your response focused and prevents you from drifting into a line-by-line paraphrase.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m3-q1',
          question:
            'In the garden extract, what does the latch described as "a language I had lost" most likely symbolise?',
          options: [
            'The speaker has forgotten how to open gates',
            'The speaker\'s loss of connection to a once-familiar place or past',
            'The garden has been locked by someone else',
            'The speaker does not speak the local language',
          ],
          correct: 1,
          explanation:
            'The metaphor of the latch as a lost language suggests that the speaker has become disconnected from a place — and by extension a past life — that was once intimately known.',
        },
        {
          id: 'gcse-lp-m3-q2',
          question:
            'Why should you use tentative language such as "perhaps" or "could suggest" when analysing poetry?',
          options: [
            'Because your answer is probably wrong',
            'Because poems can have multiple valid interpretations',
            'Because examiners prefer uncertain students',
            'Because you are not allowed to give a definite opinion',
          ],
          correct: 1,
          explanation:
            'Tentative language shows the examiner that you understand poetry is open to interpretation and that you are exploring possibilities rather than making unsupported assertions.',
        },
        {
          id: 'gcse-lp-m3-q3',
          question:
            'What is the difference between identifying a theme and analysing a theme?',
          options: [
            'There is no difference',
            'Identifying means naming the theme; analysing means explaining what the poem says about it',
            'Identifying is harder than analysing',
            'Analysing means listing every technique in the poem',
          ],
          correct: 1,
          explanation:
            'Simply naming a theme (e.g., "loss") is identification. Analysis requires you to explain the poet\'s perspective on that theme and how it is communicated through language and structure.',
        },
        {
          id: 'gcse-lp-m3-q4',
          question:
            'When can you make contextual comments in an unseen poetry response?',
          options: [
            'Never — context is irrelevant to unseen poetry',
            'Only if you recognise the poet',
            'When the poem itself provides clues that allow reasonable inferences',
            'Only if the question specifically asks for context',
          ],
          correct: 2,
          explanation:
            'You can make contextual inferences when the poem provides evidence — such as references to war, historical language, or social settings — but these must be grounded in the text, not bolted on.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m4',
      title: 'Structure & Form',
      duration: '35 mins',
      content: `
<p>Many students focus heavily on language but neglect <span class="key-term">structure and form</span>. Yet the way a poem is built — its shape on the page, its rhythm, its chosen form — is as meaningful as the words themselves. This module will teach you to read structure with confidence.</p>

<h3>Common Poetic Forms</h3>
<p>A <span class="key-term">sonnet</span> is a 14-line poem, traditionally in iambic pentameter, often exploring love or a single argument. The Shakespearean sonnet has three quatrains and a closing couplet (ABAB CDCD EFEF GG), while the Petrarchan sonnet divides into an octave (8 lines) and a sestet (6 lines). A <span class="key-term">dramatic monologue</span> is a poem written as if a single character is speaking to a silent listener — the reader discovers the speaker's personality through their own words. <span class="key-term">Free verse</span> has no regular metre or rhyme scheme, giving the poet freedom to shape the poem in ways that mirror its content.</p>

<div class="examiner-tip">If a poem uses a recognisable form, ask yourself <em>why</em>. A sonnet about war subverts the form's association with love. Free verse about grief might reflect the unpredictable nature of sorrow. Always connect form to meaning.</div>

<h3>Stanza Structure</h3>
<p>Look at how the poem is divided. Regular stanzas of equal length can suggest order, control, or ritual. A single long stanza (a <span class="key-term">block form</span>) can feel relentless or claustrophobic. A poem that begins with long stanzas and ends with a single isolated line might be dramatising loss or finality.</p>

<div class="text-extract">
  They built the wall in summer,<br>
  stone by stone by stone.<br>
  By autumn it was finished.<br>
  <br>
  Now I walk beside it, alone.
  <div class="source">— Original example for structural analysis</div>
</div>

<p>The first stanza's three lines mirror the steady, repetitive labour of building ("stone by stone by stone"). The second stanza is a single isolated line, physically separated on the page — reflecting the speaker's loneliness. The structural shift from a group of three lines to one line enacts the theme of separation.</p>

<h3>Rhythm and Metre</h3>
<p><span class="key-term">Metre</span> is the pattern of stressed and unstressed syllables in a line. <span class="key-term">Iambic pentameter</span> (five pairs of unstressed-stressed syllables: da-DUM da-DUM da-DUM da-DUM da-DUM) is the most common in English poetry and sounds close to natural speech. When the metre is disrupted — for instance, a sudden <span class="key-term">trochee</span> (DUM-da) at the start of a line — the reader stumbles, and that disruption often coincides with a moment of emotional intensity or surprise.</p>

<div class="common-mistake">Do not claim a poem is written "in iambic pentameter" unless you have checked. Count the stresses. Many students misidentify metre. If you are unsure, describe the rhythm in general terms ("the lines have a regular, steady beat") rather than using a technical term incorrectly.</div>

<p>Remember: structure is not separate from meaning. Every choice the poet makes about line length, stanza breaks, rhythm, and form is a <em>deliberate</em> decision that contributes to the poem's overall impact.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m4-q1',
          question:
            'How many lines does a sonnet have?',
          options: ['10', '12', '14', '16'],
          correct: 2,
          explanation:
            'A sonnet is a 14-line poem. Both the Shakespearean and Petrarchan forms have 14 lines, though they are structured differently.',
        },
        {
          id: 'gcse-lp-m4-q2',
          question:
            'In the wall extract, why is the final line placed in its own stanza?',
          options: [
            'Because the poet ran out of ideas',
            'To visually isolate the speaker, reflecting the theme of loneliness',
            'Because all poems must end with a short stanza',
            'To create a rhyming couplet',
          ],
          correct: 1,
          explanation:
            'The isolated final line mirrors the speaker\'s loneliness — the physical separation on the page enacts the emotional separation described in the words.',
        },
        {
          id: 'gcse-lp-m4-q3',
          question: 'What is a dramatic monologue?',
          options: [
            'A poem performed on stage with multiple actors',
            'A poem written as speech by a single character to a silent listener',
            'A poem that tells a dramatic story in the third person',
            'A poem that uses only dialogue between two speakers',
          ],
          correct: 1,
          explanation:
            'A dramatic monologue is a poem in which a single character speaks to an implied silent listener. The reader learns about the speaker through what they reveal — intentionally or not — in their words.',
        },
        {
          id: 'gcse-lp-m4-q4',
          question:
            'What is the rhythmic pattern of iambic pentameter?',
          options: [
            'Five pairs of stressed then unstressed syllables (DUM-da)',
            'Five pairs of unstressed then stressed syllables (da-DUM)',
            'Four pairs of unstressed then stressed syllables',
            'Six pairs of alternating stressed and unstressed syllables',
          ],
          correct: 1,
          explanation:
            'Iambic pentameter consists of five iambs — each iamb is an unstressed syllable followed by a stressed syllable (da-DUM), giving ten syllables per line.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m5',
      title: 'Writing a Poetry Essay',
      duration: '40 mins',
      content: `
<p>Knowing how to analyse a poem is only useful if you can communicate that analysis in a clear, structured essay. This module introduces the <span class="key-term">PETAL</span> paragraph method and shows you how to build a convincing response under timed conditions.</p>

<h3>The PETAL Paragraph</h3>
<p>Each analytical paragraph should follow this structure:</p>
<ul>
  <li><strong>P</strong> — <span class="key-term">Point</span>: State your argument clearly in one sentence.</li>
  <li><strong>E</strong> — <span class="key-term">Evidence</span>: Quote directly from the poem. Keep quotations short — a phrase or single line is usually enough.</li>
  <li><strong>T</strong> — <span class="key-term">Technique</span>: Name the technique the poet has used in your quotation.</li>
  <li><strong>A</strong> — <span class="key-term">Analysis</span>: Explain the effect of that technique on the reader. This is the most important part — it is where you demonstrate understanding.</li>
  <li><strong>L</strong> — <span class="key-term">Link</span>: Connect back to the question or forward to your next point.</li>
</ul>

<div class="text-extract">
  The clock's hands crawled across its face,<br>
  each minute thick as setting glue.
  <div class="source">— Original example for essay-writing practice</div>
</div>

<div class="model-answer">
<strong>Example PETAL paragraph:</strong><br><br>
The poet conveys an oppressive sense of time passing slowly. <strong>[P]</strong> The simile "each minute thick as setting glue" <strong>[E]</strong> compares time to a slow, sticky substance <strong>[T — simile]</strong>. The word "thick" has connotations of heaviness and difficulty, suggesting that the speaker experiences each moment as a burden rather than something that flows naturally. The comparison to "setting glue" implies that time is not merely slow but is solidifying — trapping the speaker in the present moment. <strong>[A]</strong> This reinforces the poem's wider exploration of entrapment and the desire for escape. <strong>[L]</strong>
</div>

<h3>Essay Structure</h3>
<p>For a single-poem response, aim for:</p>
<ol>
  <li>A brief introduction (2–3 sentences) stating your overall interpretation of the poem.</li>
  <li>Three or four PETAL paragraphs, each addressing a different aspect (e.g., imagery, structure, tone).</li>
  <li>A short conclusion that draws your analysis together and offers a final insight.</li>
</ol>

<div class="examiner-tip">You do not need a long introduction. Examiners would rather see you spend time on detailed analysis. One or two sentences that show you have understood the poem's main idea are sufficient.</div>

<h3>Comparing Poems</h3>
<p>When comparing, use an <span class="key-term">integrated approach</span>: discuss both poems within each paragraph rather than writing about one poem in the first half and the other in the second. Use comparative connectives: "Similarly…", "In contrast…", "While Poem A uses… Poem B instead…". This shows the examiner you are genuinely comparing, not just writing two separate analyses.</p>

<div class="common-mistake">Avoid spending so long on your first paragraph that you run out of time. Practise writing to a timer: roughly 8–10 minutes per PETAL paragraph for a 45-minute question.</div>

<p>The best poetry essays feel like a conversation with the text. You are not just describing what you see — you are arguing for an interpretation and supporting it with evidence.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m5-q1',
          question: 'What does the "A" in PETAL stand for?',
          options: ['Alliteration', 'Argument', 'Analysis', 'Assessment'],
          correct: 2,
          explanation:
            'A stands for Analysis — the part of the paragraph where you explain the effect of the technique on the reader. It is the most important element.',
        },
        {
          id: 'gcse-lp-m5-q2',
          question:
            'What is the recommended approach when comparing two poems in an essay?',
          options: [
            'Write about Poem A in full, then Poem B in full',
            'Only write about the poem you understand better',
            'Use an integrated approach, discussing both poems within each paragraph',
            'Alternate paragraphs — one on Poem A, then one on Poem B',
          ],
          correct: 2,
          explanation:
            'An integrated approach — comparing both poems within each paragraph — demonstrates genuine comparison and is rewarded more highly than a "split" structure.',
        },
        {
          id: 'gcse-lp-m5-q3',
          question: 'How long should your introduction ideally be in a poetry essay?',
          options: [
            'At least half a page',
            'Two to three sentences',
            'One full paragraph with quotations',
            'You should not write an introduction',
          ],
          correct: 1,
          explanation:
            'A brief introduction of two to three sentences is sufficient. Examiners prefer you to spend your time on detailed analysis rather than a lengthy opening.',
        },
        {
          id: 'gcse-lp-m5-q4',
          question:
            'In the model answer, why is the analysis of "setting glue" effective?',
          options: [
            'It identifies the technique as a metaphor',
            'It only explains the surface meaning of the simile',
            'It explores connotations of individual words and links them to the poem\'s wider themes',
            'It compares the poem to another poem',
          ],
          correct: 2,
          explanation:
            'The analysis is effective because it goes beyond naming the simile — it unpacks the connotations of "thick" and "setting," then connects the image to the poem\'s broader theme of entrapment.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m6',
      title: 'Unseen Poetry Comparison',
      duration: '35 mins',
      content: `
<p>The comparison question on AQA Paper 2 asks you to compare an unseen poem with a second unseen poem. This is often the question students find most challenging because they must work quickly and find meaningful links between two texts they have never seen before. This module gives you a reliable strategy.</p>

<h3>Step 1 — Read Both Poems Carefully</h3>
<p>Read Poem A and Poem B at least twice each. On your first reading, note what each poem is about. On your second reading, start identifying similarities and differences in <span class="key-term">methods</span> — the techniques, structure, and tone each poet uses.</p>

<div class="examiner-tip">The comparison question is worth fewer marks than the single-poem question, so manage your time. Aim for around 20 minutes. Two or three well-developed comparative paragraphs are better than five rushed ones.</div>

<h3>Step 2 — Find Meaningful Links</h3>
<p>Look for connections in three areas:</p>
<ul>
  <li><strong>Theme or subject:</strong> Do both poems explore a similar idea (e.g., loss, nature, identity) but from different angles?</li>
  <li><strong>Methods:</strong> Do both poets use imagery, but one favours metaphor while the other uses personification? Does one use a strict form while the other uses free verse?</li>
  <li><strong>Tone and mood:</strong> Is one poem hopeful while the other is bitter? Do they begin similarly but end in different emotional places?</li>
</ul>

<div class="text-extract">
  <strong>Poem A:</strong> The oak stood firm, its roots like fists<br>
  gripping the dark beneath the hill.<br><br>
  <strong>Poem B:</strong> The sapling bent and bowed and bent,<br>
  finding its strength in giving way.
  <div class="source">— Original paired examples for comparison practice</div>
</div>

<p>Both extracts use trees to explore strength, but they present <em>contrasting</em> ideas of what strength looks like. Poem A's oak is rigid and forceful — the simile "roots like fists" connotes aggression and resistance. Poem B's sapling finds strength in flexibility — the repetition of "bent" and the phrase "giving way" redefine strength as adaptability rather than resistance.</p>

<h3>Step 3 — Structure Your Comparison</h3>
<p>Use this paragraph template for each comparative point:</p>
<ol>
  <li>State the shared theme or area of comparison.</li>
  <li>Analyse how Poem A presents it (with a short quotation).</li>
  <li>Use a comparative connective ("In contrast," "Similarly," "However").</li>
  <li>Analyse how Poem B presents it differently or similarly (with a short quotation).</li>
  <li>Offer a concluding comment on what the difference or similarity reveals.</li>
</ol>

<div class="common-mistake">Do not simply list features of each poem side by side. The examiner wants to see you making <em>connections</em>. Every paragraph must contain a direct comparison, not just separate descriptions.</div>

<div class="model-answer">
<strong>Example comparison opening:</strong><br><br>
Both poets explore the theme of resilience through images of trees, yet they present fundamentally different views of what it means to endure. In Poem A, the oak's "roots like fists" suggest that strength lies in resistance and unyielding force. In contrast, Poem B's sapling "finding its strength in giving way" redefines endurance as flexibility. While Poem A's language is aggressive and combative, Poem B's tone is quieter, almost meditative, implying that true resilience requires adaptability rather than brute force.
</div>

<p>With practice, this comparison structure will become second nature. The key is to always write <em>about the relationship</em> between the two poems, not about each poem in isolation.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m6-q1',
          question:
            'What is the most important thing to include in every paragraph of a comparison response?',
          options: [
            'A quotation from Poem A only',
            'A direct comparison between the two poems',
            'Historical context about both poets',
            'A definition of a poetic technique',
          ],
          correct: 1,
          explanation:
            'Every paragraph must contain a direct comparison. Writing about the poems separately, without connecting them, will not earn comparison marks.',
        },
        {
          id: 'gcse-lp-m6-q2',
          question:
            'In the tree extracts, how do the two poems present different ideas of strength?',
          options: [
            'Both present strength as physical power',
            'Poem A presents strength as resistance; Poem B presents strength as flexibility',
            'Poem A presents weakness; Poem B presents strength',
            'Both present strength as giving way under pressure',
          ],
          correct: 1,
          explanation:
            'Poem A\'s oak is rigid and forceful ("roots like fists"), associating strength with resistance. Poem B\'s sapling finds strength in "giving way," redefining endurance as adaptability.',
        },
        {
          id: 'gcse-lp-m6-q3',
          question:
            'Which of the following is a useful comparative connective?',
          options: [
            '"Furthermore"',
            '"In contrast"',
            '"For example"',
            '"In conclusion"',
          ],
          correct: 1,
          explanation:
            '"In contrast" is a comparative connective that signals a difference between the two poems. Others like "Similarly" and "However" are also useful for comparison.',
        },
        {
          id: 'gcse-lp-m6-q4',
          question:
            'How much time should you approximately spend on the comparison question?',
          options: [
            '10 minutes',
            '20 minutes',
            '35 minutes',
            '45 minutes',
          ],
          correct: 1,
          explanation:
            'The comparison question carries fewer marks than the single-poem question, so around 20 minutes is appropriate. Two or three well-developed paragraphs are sufficient.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'gcse-lp-a1',
      question: 'What does SMILE stand for in poetry analysis?',
      options: [
        'Sound, Metaphor, Imagery, Language, Emotion',
        'Structure, Meaning, Imagery, Language, Effect',
        'Simile, Metaphor, Irony, Layout, Enjambment',
        'Structure, Mood, Imagery, Lines, Effect',
      ],
      correct: 1,
      explanation:
        'SMILE stands for Structure, Meaning, Imagery, Language, and Effect — a framework for organising poetry annotations.',
    },
    {
      id: 'gcse-lp-a2',
      question:
        'Which of the following is an example of personification?',
      options: [
        '"The sky was as grey as slate"',
        '"The wind whispered through the alley"',
        '"He ran like a startled deer"',
        '"The red door stood at the end of the lane"',
      ],
      correct: 1,
      explanation:
        'Personification gives human qualities to non-human things. The wind "whispering" attributes a human action to a natural force.',
    },
    {
      id: 'gcse-lp-a3',
      question: 'What is enjambment?',
      options: [
        'A pause in the middle of a line of poetry',
        'A poem written in the voice of a character',
        'When a sentence runs on past the end of a line without punctuation',
        'The repetition of consonant sounds at the start of words',
      ],
      correct: 2,
      explanation:
        'Enjambment occurs when a sentence or phrase continues beyond the end of a line without a pause or punctuation, pulling the reader forward.',
    },
    {
      id: 'gcse-lp-a4',
      question: 'What does the "T" in PETAL stand for?',
      options: ['Theme', 'Technique', 'Tone', 'Text'],
      correct: 1,
      explanation:
        'In the PETAL paragraph structure, T stands for Technique — you name the device the poet has used in your chosen quotation.',
    },
    {
      id: 'gcse-lp-a5',
      question:
        'A Shakespearean sonnet typically ends with which structural feature?',
      options: [
        'A sestet',
        'A rhyming couplet',
        'A single isolated line',
        'A repeated refrain',
      ],
      correct: 1,
      explanation:
        'A Shakespearean sonnet has three quatrains followed by a final rhyming couplet (GG), which often delivers a conclusion, twist, or resolution.',
    },
    {
      id: 'gcse-lp-a6',
      question:
        'When comparing two poems, which approach is most effective?',
      options: [
        'Write about Poem A completely, then write about Poem B completely',
        'Discuss only the poem you understand better in detail',
        'Use an integrated approach, comparing both poems within each paragraph',
        'Write a paragraph about techniques, then a paragraph about themes, for each poem separately',
      ],
      correct: 2,
      explanation:
        'An integrated approach — discussing both poems within each paragraph using comparative connectives — demonstrates genuine comparison and earns higher marks.',
    },
    {
      id: 'gcse-lp-a7',
      question:
        'Which term describes the repetition of "s" and "sh" sounds in a line of poetry?',
      options: ['Alliteration', 'Assonance', 'Sibilance', 'Onomatopoeia'],
      correct: 2,
      explanation:
        'Sibilance specifically refers to the repetition of "s" and "sh" sounds. While it is a form of alliteration, using the precise term demonstrates stronger technical knowledge.',
    },
    {
      id: 'gcse-lp-a8',
      question:
        'Why is it important to use tentative language when analysing poetry?',
      options: [
        'Because your interpretation is probably incorrect',
        'Because poems have only one correct meaning',
        'Because it shows awareness that poems can support multiple valid interpretations',
        'Because the examiner prefers students who seem uncertain',
      ],
      correct: 2,
      explanation:
        'Tentative language ("perhaps," "could suggest") shows the examiner you understand that poetry is open to multiple valid readings, a sign of mature analysis.',
    },
    {
      id: 'gcse-lp-a9',
      question: 'What is a volta in poetry?',
      options: [
        'A type of Italian sonnet',
        'A turning point or shift in the poem',
        'A repeated line at the end of each stanza',
        'The rhythm pattern of a line',
      ],
      correct: 1,
      explanation:
        'A volta is a turning point — a shift in tone, argument, or perspective. It is most associated with sonnets but can appear in any poem.',
    },
    {
      id: 'gcse-lp-a10',
      question:
        'What is the key difference between surface meaning and deeper meaning?',
      options: [
        'Surface meaning is correct; deeper meaning is a guess',
        'Surface meaning is the literal content; deeper meaning is the underlying ideas and emotions',
        'Surface meaning is for GCSE; deeper meaning is for A-Level',
        'There is no meaningful difference between the two',
      ],
      correct: 1,
      explanation:
        'Surface meaning is what the poem literally describes. Deeper meaning is the ideas, emotions, and arguments beneath the surface — what the poem is really about.',
    },
    {
      id: 'gcse-lp-a11',
      question:
        'Which of the following best describes caesura?',
      options: [
        'A run-on line with no punctuation at the end',
        'A pause within a line of poetry, often created by punctuation',
        'The final line of a sonnet',
        'A change in the rhyme scheme',
      ],
      correct: 1,
      explanation:
        'Caesura is a pause within a line of poetry, typically created by punctuation such as a full stop, comma, dash, or semicolon.',
    },
    {
      id: 'gcse-lp-a12',
      question: 'What is iambic pentameter?',
      options: [
        'A line with four stressed syllables',
        'A line with five pairs of unstressed-stressed syllables',
        'A line that always rhymes with the next',
        'A line with six pairs of stressed-unstressed syllables',
      ],
      correct: 1,
      explanation:
        'Iambic pentameter consists of five iambs (da-DUM), giving a ten-syllable line with an unstressed-stressed pattern. It is the most common metre in English poetry.',
    },
    {
      id: 'gcse-lp-a13',
      question:
        'In an essay, what is the purpose of the "L" (Link) in a PETAL paragraph?',
      options: [
        'To list additional techniques',
        'To add a quotation from a second poem',
        'To connect back to the question or forward to the next point',
        'To define the technique you have identified',
      ],
      correct: 2,
      explanation:
        'The Link connects your analysis back to the essay question or transitions to your next point, keeping your argument cohesive and focused.',
    },
    {
      id: 'gcse-lp-a14',
      question:
        'A poem written as the speech of a single character to a silent listener is called a:',
      options: [
        'Sonnet',
        'Free verse poem',
        'Dramatic monologue',
        'Ballad',
      ],
      correct: 2,
      explanation:
        'A dramatic monologue is a poem in which a single character speaks to an implied silent listener. The reader learns about the speaker through what they reveal in their words.',
    },
    {
      id: 'gcse-lp-a15',
      question:
        'Why might a poet choose to use free verse rather than a strict form?',
      options: [
        'Because free verse is easier to write',
        'Because free verse allows the shape of the poem to mirror its content without formal constraints',
        'Because strict forms are old-fashioned',
        'Because examiners prefer free verse poems',
      ],
      correct: 1,
      explanation:
        'Free verse gives the poet freedom to shape lines and stanzas in ways that mirror the poem\'s content — for example, fragmented lines for fragmented thoughts.',
    },
    {
      id: 'gcse-lp-a16',
      question:
        'Which of these is the strongest analytical statement?',
      options: [
        '"The poet uses a metaphor."',
        '"The poet uses a metaphor, which is effective."',
        '"The metaphor of the sea as a \'hungry mouth\' suggests nature\'s destructive, consuming power, creating unease in the reader."',
        '"There is a metaphor in line 3 about the sea."',
      ],
      correct: 2,
      explanation:
        'The strongest analysis names the technique, quotes the example, explains the connotations of specific words, and describes the effect on the reader.',
    },
    {
      id: 'gcse-lp-a17',
      question:
        'What is the rhyme scheme of a Shakespearean sonnet?',
      options: [
        'AABB CCDD EEFF GG',
        'ABAB CDCD EFEF GG',
        'ABBA ABBA CDE CDE',
        'ABCABC DEFDEF GG',
      ],
      correct: 1,
      explanation:
        'A Shakespearean sonnet follows the rhyme scheme ABAB CDCD EFEF GG — three quatrains with alternating rhyme, ending with a rhyming couplet.',
    },
    {
      id: 'gcse-lp-a18',
      question:
        'What is the best way to begin a comparison paragraph?',
      options: [
        'With a long quotation from Poem A',
        'With a statement about the shared theme or area you are comparing',
        'By defining a poetic technique',
        'By writing about the poet\'s biography',
      ],
      correct: 1,
      explanation:
        'Begin a comparison paragraph by identifying the shared theme or aspect you will compare. This establishes the basis for comparison before you analyse each poem.',
    },
    {
      id: 'gcse-lp-a19',
      question:
        'How many times should you ideally read an unseen poem before writing your answer?',
      options: ['Once', 'Twice', 'At least three times', 'Five times'],
      correct: 2,
      explanation:
        'Reading at least three times — once for general understanding, once for annotation, and once for deeper analysis — ensures you engage fully with the poem before writing.',
    },
    {
      id: 'gcse-lp-a20',
      question:
        'A student writes: "The theme of this poem is nature." Why is this not effective analysis?',
      options: [
        'Because nature is not a valid theme',
        'Because it identifies the theme without explaining what the poem says about it',
        'Because you should never mention themes in a poetry essay',
        'Because the student should have written about structure instead',
      ],
      correct: 1,
      explanation:
        'Simply naming a theme is identification, not analysis. Analysis requires you to explain the poet\'s perspective — for example, "The poet presents nature as an indifferent force that endures beyond human life."',
    },
  ],
};

const gcseLitProse: CourseData = {
  id: 'gcse-lit-prose',
  title: 'GCSE Literature: Prose & Drama (AQA)',
  subtitle: 'Ace your AQA set texts — Macbeth, An Inspector Calls, and prose.',
  tier: 'GCSE',
  board: 'AQA',
  specId: 'gcse-lit',
  specCode: '8702',
  price: 0,
  duration: '5-7 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Deep-dive into your GCSE set texts. Learn how to write about characters, themes, and the writer\'s craft in Macbeth, An Inspector Calls, and the 19th-century novel. Includes essay planning frameworks and model paragraphs.',
  color: '#10b981',
  moduleList: [
    {
      id: 'gcse-ld-m1',
      title: 'Macbeth: Characters & Themes',
      duration: '45 mins',
      content: `<h2>The Tragedy of Macbeth — Characters & Themes</h2>
<p>Macbeth is Shakespeare's shortest tragedy and one of the most intense. It tells the story of a brave Scottish general who, driven by ambition and spurred on by his wife, murders King Duncan to seize the throne — and is destroyed by guilt and paranoia as a result. To succeed at GCSE, you need to understand the play's major characters and the themes that run through it like veins of poison.</p>

<h3>Macbeth's Tragic Arc</h3>
<p>At the start of the play, Macbeth is a loyal, courageous warrior — described as "brave Macbeth" and "Bellona's bridegroom." By the end, he is a tyrannical murderer who has lost everything: his honour, his wife, his sanity, and his life. This downfall is what makes him a <strong>tragic hero</strong>.</p>

<div class="text-extract">"I have no spur<br>To prick the sides of my intent, but only<br>Vaulting ambition, which o'erleaps itself<br>And falls on th'other."<div class="source">Macbeth, Act 1 Scene 7</div></div>

<p>Here Macbeth admits that his only motivation is "vaulting ambition." The horse-riding metaphor suggests ambition is an uncontrollable force — it "o'erleaps itself" and causes a fall, foreshadowing his destruction.</p>

<div class="key-term"><strong>Key Term: Tragic hero</strong> — A protagonist of high status who possesses a fatal flaw (hamartia) that leads to their downfall. Macbeth's hamartia is his ambition.</div>

<h3>Lady Macbeth</h3>
<p>Lady Macbeth is one of Shakespeare's most powerful female characters. When she reads Macbeth's letter about the witches' prophecy, she immediately decides Duncan must die and fears her husband is "too full o'th' milk of human kindness" to act. She calls on dark spirits to "unsex" her, rejecting femininity so she can be ruthless enough to drive the murder.</p>

<div class="text-extract">"Come, you spirits<br>That tend on mortal thoughts, unsex me here,<br>And fill me from the crown to the toe top-full<br>Of direst cruelty."<div class="source">Lady Macbeth, Act 1 Scene 5</div></div>

<p>However, Lady Macbeth's strength is an illusion. By Act 5, guilt has overwhelmed her. She sleepwalks, obsessively trying to wash imaginary blood from her hands — "Out, damned spot! Out, I say!" — before taking her own life offstage. Her arc shows that <strong>guilt cannot be suppressed forever</strong>.</p>

<h3>Theme: Ambition</h3>
<p>Ambition is the engine of the play. The witches plant the seed, Lady Macbeth waters it, and Macbeth acts on it. Shakespeare presents ambition as inherently dangerous when it is not tempered by morality. Every murder Macbeth commits makes the next one easier, showing how unchecked ambition corrupts absolutely.</p>

<h3>Theme: Guilt & Conscience</h3>
<p>Guilt haunts both Macbeth and Lady Macbeth. Macbeth sees a phantom dagger before killing Duncan and hears a voice cry "Sleep no more! Macbeth does murder sleep." Lady Macbeth's sleepwalking scene mirrors this — the couple who plotted murder together are destroyed separately by their conscience.</p>

<h3>Theme: The Supernatural</h3>
<p>The witches, the floating dagger, Banquo's ghost — the supernatural is woven throughout the play. For a Jacobean audience who believed in witchcraft, these elements were genuinely terrifying. Shakespeare uses the supernatural to externalise Macbeth's inner turmoil and to raise the question: is Macbeth a victim of fate, or does he choose his own path?</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always link the supernatural to Macbeth's own choices. The witches predict, but they never force Macbeth to act. Examiners reward answers that explore this ambiguity.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Calling the witches "the three witches." Shakespeare calls them the "Weird Sisters" — from the Old English "wyrd," meaning fate. Using the correct term shows sophisticated knowledge.</div>`,
      quiz: [
        { id: 'gcse-ld-m1-q1', question: 'What is Macbeth\'s hamartia (tragic flaw)?', options: ['His loyalty to King Duncan', 'His vaulting ambition', 'His love for Lady Macbeth', 'His fear of the supernatural'], correct: 1, explanation: 'Macbeth himself identifies "vaulting ambition" as his only motivation. This unchecked ambition is his hamartia — the fatal flaw that drives his downfall from loyal warrior to tyrannical murderer.' },
        { id: 'gcse-ld-m1-q2', question: 'What does Lady Macbeth ask the spirits to do in Act 1 Scene 5?', options: ['Kill King Duncan for her', 'Make her invisible', 'Unsex her and fill her with cruelty', 'Give her the power to see the future'], correct: 2, explanation: 'Lady Macbeth calls on spirits to "unsex me here" and fill her with "direst cruelty." She wants to reject feminine compassion so she can drive the murder of Duncan without hesitation.' },
        { id: 'gcse-ld-m1-q3', question: 'How does Lady Macbeth\'s sleepwalking scene connect to the theme of guilt?', options: ['It shows she is physically ill from lack of sleep', 'It shows guilt cannot be suppressed and will resurface', 'It proves the witches have cursed her', 'It demonstrates that she regrets marrying Macbeth'], correct: 1, explanation: 'Lady Macbeth tried to suppress her guilt ("A little water clears us of this deed") but it erupts in her unconscious mind. Her obsessive handwashing shows guilt is inescapable, mirroring Macbeth\'s earlier vision of bloody hands.' },
        { id: 'gcse-ld-m1-q4', question: 'What is the significance of the word "wyrd" in relation to the Weird Sisters?', options: ['It means they are strange or bizarre', 'It comes from Old English meaning fate or destiny', 'It is a Scottish dialect word for witch', 'It describes their physical appearance'], correct: 1, explanation: '"Wyrd" is Old English for fate or destiny. Calling the witches "Weird Sisters" links them to the concept of fate and raises the key question of whether Macbeth\'s downfall was predestined or a result of his own choices.' },
      ],
    },
    {
      id: 'gcse-ld-m2',
      title: 'Macbeth: Writer\'s Craft',
      duration: '35 mins',
      content: `<h2>Shakespeare's Language & Dramatic Techniques in Macbeth</h2>
<p>Understanding <strong>what</strong> happens in Macbeth is only half the battle. To reach the top grades, you must analyse <strong>how</strong> Shakespeare creates meaning through his language choices, dramatic techniques, and the play's context.</p>

<h3>Soliloquies</h3>
<p>A soliloquy is a speech delivered by a character alone on stage, revealing their inner thoughts to the audience. Macbeth has several key soliloquies that expose his psychological deterioration.</p>

<div class="text-extract">"Is this a dagger which I see before me,<br>The handle toward my hand? Come, let me clutch thee.<br>I have thee not, and yet I see thee still."<div class="source">Macbeth, Act 2 Scene 1</div></div>

<p>The dagger soliloquy reveals Macbeth's fractured mental state moments before he murders Duncan. The questions and contradictions — "I have thee not, and yet I see thee still" — create a sense of a mind at war with itself. The audience witnesses Macbeth's private horror, building dramatic tension.</p>

<div class="key-term"><strong>Key Term: Soliloquy</strong> — A dramatic device in which a character speaks their thoughts aloud while alone on stage. It gives the audience privileged access to the character's psychology.</div>

<h3>Dramatic Irony</h3>
<p>Shakespeare uses dramatic irony extensively. When Duncan arrives at Macbeth's castle and says "This castle hath a pleasant seat," the audience knows he is walking into a death trap. This irony creates tension and horror — we want to warn him but cannot.</p>

<p>Similarly, when Macbeth says Banquo's absence from the feast is "the worm that's fled," the audience knows Banquo has been murdered on Macbeth's orders. These moments deepen the audience's engagement and highlight Macbeth's increasing capacity for deception.</p>

<h3>Language Techniques</h3>
<p><strong>Imagery of blood:</strong> Blood saturates the play. Duncan's murder creates blood that Macbeth fears "will rather / The multitudinous seas incarnadine, / Making the green one red." The Latin word "incarnadine" followed by the plain English "making the green one red" shows Macbeth's language shifting between high rhetoric and raw simplicity — his mind is in chaos.</p>

<p><strong>Imagery of darkness:</strong> Macbeth calls on "stars, hide your fires; / Let not light see my black and deep desires." Darkness becomes associated with evil, secrecy, and the concealment of guilt throughout the play.</p>

<p><strong>Equivocation and paradox:</strong> The witches speak in riddles — "Fair is foul, and foul is fair." This blurring of opposites reflects the play's moral confusion: nothing is what it seems. Macbeth unknowingly echoes this with "So foul and fair a day I have not seen," linking him to the witches from the outset.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing Shakespeare's language, always try to link form to meaning. For example, Macbeth often speaks in fragmented, interrupted verse after Duncan's murder — the breakdown in poetic rhythm mirrors his psychological breakdown.</div>

<h3>Jacobean Context</h3>
<p>Macbeth was written in approximately 1606, shortly after the Gunpowder Plot (1605) — a failed attempt to assassinate King James I. Shakespeare's play about the murder of a king would have resonated powerfully with its original audience. Key contextual points:</p>
<ul>
<li><strong>Divine Right of Kings:</strong> James I believed monarchs were chosen by God. Killing a king was not just treason but a sin against God — this is why the natural world erupts in chaos after Duncan's murder.</li>
<li><strong>Witchcraft:</strong> James I was fascinated by witchcraft and wrote a book called <em>Daemonologie</em>. The inclusion of the Weird Sisters would have thrilled and terrified a Jacobean audience.</li>
<li><strong>Patriarchal society:</strong> Lady Macbeth's ambition and dominance over her husband would have been deeply unsettling to an audience that expected women to be obedient and submissive.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Bolting on context as a separate paragraph. Instead, weave it into your analysis: "Shakespeare uses the chaos in nature after Duncan's murder to reflect the Jacobean belief in the Divine Right of Kings — regicide disrupts the God-given natural order."</div>`,
      quiz: [
        { id: 'gcse-ld-m2-q1', question: 'What is the purpose of Macbeth\'s dagger soliloquy (Act 2, Scene 1)?', options: ['To show Macbeth boasting about his plan', 'To reveal Macbeth\'s fractured mental state before the murder', 'To explain the history of the dagger', 'To show Macbeth communicating with the witches'], correct: 1, explanation: 'The dagger soliloquy exposes Macbeth\'s inner turmoil. His questions, contradictions, and hallucination of a bloody dagger reveal a mind at war with itself, building tension for the audience before Duncan\'s murder.' },
        { id: 'gcse-ld-m2-q2', question: 'What is dramatic irony in the context of Macbeth?', options: ['When characters make funny jokes on stage', 'When the audience knows something the characters do not', 'When the stage directions contradict the dialogue', 'When a character speaks in rhyming couplets'], correct: 1, explanation: 'Dramatic irony occurs when the audience has knowledge that a character lacks. For example, when Duncan praises Macbeth\'s castle as pleasant, the audience knows he is about to be murdered there — creating tension and horror.' },
        { id: 'gcse-ld-m2-q3', question: 'Why is the Jacobean context of the Gunpowder Plot (1605) relevant to Macbeth?', options: ['Shakespeare was involved in the plot', 'It explains why the play is set in Scotland', 'A play about regicide would have powerfully resonated with an audience who had recently survived an assassination attempt on their king', 'It is the reason the play features witches'], correct: 2, explanation: 'The Gunpowder Plot was a failed attempt to assassinate King James I in 1605. Macbeth, written around 1606, dramatises the horror of regicide and its consequences — a theme that would have felt immediate and dangerous to the original audience.' },
        { id: 'gcse-ld-m2-q4', question: '"Fair is foul, and foul is fair" is an example of which technique?', options: ['Simile', 'Onomatopoeia', 'Paradox', 'Alliteration only'], correct: 2, explanation: '"Fair is foul, and foul is fair" is a paradox — a statement that contradicts itself. It establishes the play\'s central theme that appearances are deceptive and moral boundaries are blurred. It also contains alliteration of the "f" sound, but paradox is the primary technique.' },
      ],
    },
    {
      id: 'gcse-ld-m3',
      title: 'An Inspector Calls: Characters & Themes',
      duration: '45 mins',
      content: `<h2>An Inspector Calls — Characters & Themes</h2>
<p>J.B. Priestley's <em>An Inspector Calls</em> was written in 1945 but set in 1912, just before the First World War and the sinking of the Titanic. This time gap is crucial: Priestley uses dramatic irony to expose the arrogance and moral blindness of the Edwardian upper-middle class. The play is a moral thriller in which every member of the Birling family is revealed to have played a part in the death of a young working-class woman named Eva Smith.</p>

<h3>Arthur Birling</h3>
<p>Birling is a wealthy factory owner, a "hard-headed practical man of business" who cares only about money and status. He is Priestley's mouthpiece for everything wrong with capitalism. His speech about the Titanic being "absolutely unsinkable" and his prediction that there will be no war are <strong>dramatic irony</strong> — the 1945 audience knew he was catastrophically wrong.</p>

<div class="text-extract">"The Titanic — she sails next week — forty-six thousand eight hundred tons — New York in five days — and every luxury — and unsinkable, absolutely unsinkable."<div class="source">Mr Birling, Act 1</div></div>

<p>Birling's confidence in the Titanic symbolises his misplaced faith in progress, wealth, and individual self-interest. By the end of the play he has learned nothing — he is only concerned about avoiding a "public scandal."</p>

<h3>Sheila Birling</h3>
<p>Sheila begins as a naive, privileged young woman but undergoes the most significant transformation in the play. She is genuinely horrified by her role in Eva's death (she had Eva sacked from a shop out of jealousy) and accepts responsibility fully. By the end, she refuses to pretend "nothing happened," representing Priestley's hope for the younger generation.</p>

<div class="key-term"><strong>Key Term: Dramatic irony</strong> — When the audience knows something the characters do not. In <em>An Inspector Calls</em>, Priestley uses the 1912 setting so the 1945 audience can see how wrong Birling's predictions about the future are.</div>

<h3>Eric Birling</h3>
<p>Eric is Birling's son — a heavy drinker who had a relationship with Eva Smith, got her pregnant, and stole money from his father's business to support her. Like Sheila, Eric accepts responsibility and is changed by the Inspector's visit. He challenges his parents: "You're not the kind of father a chap could go to when he's in trouble."</p>

<h3>Sybil Birling (Mrs Birling)</h3>
<p>Mrs Birling is cold, class-conscious, and utterly without empathy. As chair of a charity, she refused to help Eva (who was pregnant and desperate) because Eva had used the name "Mrs Birling," which Sybil found impertinent. She represents the cruelty of upper-class snobbery and, like her husband, refuses to accept any blame.</p>

<h3>Gerald Croft</h3>
<p>Gerald, Sheila's fiance, had an affair with Eva (whom he knew as Daisy Renton). He shows some genuine emotion but ultimately sides with the older generation, helping to discredit the Inspector rather than accepting the moral lesson.</p>

<h3>Inspector Goole</h3>
<p>The Inspector is the play's most mysterious and powerful figure. He may not be a real police inspector at all — his name "Goole" suggests "ghoul," a supernatural being. He functions as Priestley's moral voice, forcing each character to confront their responsibility.</p>

<div class="text-extract">"We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish."<div class="source">Inspector Goole, Act 3</div></div>

<p>This speech is the play's moral climax. "Fire and blood and anguish" refers to the two World Wars that the 1945 audience had just lived through. Priestley is warning that selfishness and inequality lead to catastrophe.</p>

<h3>Theme: Social Responsibility</h3>
<p>The central theme of the play. Priestley argues that we are all connected and have a duty to care for one another. The Birlings represent those who reject this idea; the Inspector embodies it.</p>

<h3>Theme: Generational Divide</h3>
<p>The older Birlings (Arthur and Sybil) refuse to change. The younger generation (Sheila and Eric) accept responsibility and are transformed. Priestley suggests that hope for a fairer society lies with the young.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always refer to Priestley's intentions. Say "Priestley presents Birling as..." or "Priestley uses Sheila to show..." This demonstrates you understand the play is a constructed text with a deliberate message, not just a story.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing the Inspector as a normal detective. He is a dramatic device — possibly supernatural — used by Priestley to expose the Birlings' guilt and deliver the play's socialist message. Treat him as a symbol, not a realistic character.</div>`,
      quiz: [
        { id: 'gcse-ld-m3-q1', question: 'Why does Priestley set the play in 1912 but write it in 1945?', options: ['Because the play is based on a true story from 1912', 'To create dramatic irony — the audience knows Birling\'s confident predictions are wrong', 'Because he wanted to write a historical drama', 'To avoid censorship laws of the 1940s'], correct: 1, explanation: 'Priestley uses the time gap to create dramatic irony. When Birling says the Titanic is "unsinkable" and predicts no war, the 1945 audience knows he is completely wrong. This undermines Birling\'s authority and exposes his arrogant worldview.' },
        { id: 'gcse-ld-m3-q2', question: 'Which character undergoes the most significant transformation in the play?', options: ['Arthur Birling', 'Mrs Birling', 'Sheila Birling', 'Gerald Croft'], correct: 2, explanation: 'Sheila changes the most dramatically. She moves from a naive, privileged young woman to someone who fully accepts responsibility, challenges her parents, and refuses to pretend "nothing happened." She represents Priestley\'s hope for the younger generation.' },
        { id: 'gcse-ld-m3-q3', question: 'What does Inspector Goole\'s final speech — "fire and blood and anguish" — refer to?', options: ['The fires that will destroy the Birling factory', 'The two World Wars that the 1945 audience had lived through', 'A biblical prophecy about the end of the world', 'The violent revolution that Priestley wanted to start'], correct: 1, explanation: 'The phrase "fire and blood and anguish" refers to the two World Wars (1914-18 and 1939-45). The 1945 audience had just experienced this. Priestley is arguing that selfishness, inequality, and refusing social responsibility lead to catastrophic consequences.' },
        { id: 'gcse-ld-m3-q4', question: 'Why is the Inspector best understood as a dramatic device rather than a realistic character?', options: ['Because he is played by a different actor in each performance', 'Because his name "Goole" suggests "ghoul," he may be supernatural, and he functions as Priestley\'s moral mouthpiece', 'Because he only appears in Act 1', 'Because he is based on a real inspector from 1912'], correct: 1, explanation: 'The Inspector is mysterious and possibly supernatural — his name suggests "ghoul." He knows everything, delivers Priestley\'s socialist message, and vanishes. He is a dramatic device designed to force the Birlings (and the audience) to examine their moral responsibility.' },
      ],
    },
    {
      id: 'gcse-ld-m4',
      title: 'An Inspector Calls: Writer\'s Craft',
      duration: '35 mins',
      content: `<h2>Priestley's Dramatic Craft in An Inspector Calls</h2>
<p>To achieve top marks, you must go beyond plot and character to analyse <strong>how</strong> Priestley constructs the play to deliver his message. This means discussing stage directions, dramatic structure, the Inspector's function, and the relationship between the 1912 setting and 1945 audience.</p>

<h3>Stage Directions</h3>
<p>Priestley's opening stage directions are essential and frequently examined. The Birlings' dining room is described with "good solid furniture" and the lighting is "pink and intimate" — suggesting warmth, comfort, and self-satisfaction. When the Inspector arrives, the lighting changes to "brighter and harder."</p>

<div class="text-extract">"The lighting should be pink and intimate until the Inspector arrives, and then it should be brighter and harder."<div class="source">Stage directions, Act 1</div></div>

<p>This lighting shift is symbolic. The "pink" light represents the Birlings' rose-tinted, comfortable view of the world. The "brighter and harder" light represents the harsh truth the Inspector brings — he forces them (and the audience) to see clearly. This is a brilliant example of Priestley using staging to reinforce his themes.</p>

<div class="key-term"><strong>Key Term: Stage directions</strong> — Instructions written by the playwright that describe how the play should be performed, including lighting, movement, tone of voice, and set design. In <em>An Inspector Calls</em>, Priestley's stage directions carry thematic significance.</div>

<h3>Dramatic Structure</h3>
<p>The play follows the classical unities: it takes place in <strong>one room</strong>, in <strong>one evening</strong>, in <strong>real time</strong>. This creates a claustrophobic, pressure-cooker atmosphere — there is no escape for the Birlings. The Inspector interrogates each character in turn, peeling back layers of guilt like an onion.</p>

<p>The structure also builds tension through <strong>revelations</strong>. Each family member's involvement with Eva is revealed one at a time, and each revelation is worse than the last. The audience is gripped because they want to know what each person did.</p>

<h3>The Inspector's Role</h3>
<p>The Inspector controls the pace of the play. He decides who speaks when, resists interruptions, and uses short, blunt sentences that contrast with Birling's pompous speeches. His language is deliberately plain — "She died in misery and agony" — because the truth needs no decoration.</p>

<p>He also uses a photograph strategically, showing it to one character at a time. This has been interpreted as suggesting that each character may have destroyed a different girl — or the same one. The ambiguity is the point: Priestley wants us to understand that the exploitation of the vulnerable is systemic, not isolated.</p>

<h3>Socialist vs Capitalist Context</h3>
<p>Priestley was a committed socialist. The play is an argument for <strong>collective responsibility</strong> (socialism) and against <strong>selfish individualism</strong> (capitalism as Birling practises it).</p>
<ul>
<li><strong>Birling represents capitalism:</strong> "A man has to mind his own business and look after himself and his own." He sees people as means to profit.</li>
<li><strong>The Inspector represents socialism:</strong> "We are members of one body. We are responsible for each other." He insists on communal duty.</li>
</ul>

<p>Priestley wrote the play in 1945, when Britain was about to elect a Labour government and create the welfare state. The play is his passionate argument for why this change was necessary.</p>

<h3>1912 vs 1945: The Time Gap</h3>
<p>The dual time frame is not just a clever trick — it is the engine of the play's message. In 1912, the Birlings feel invincible. By 1945, the audience knows that two world wars, the Depression, and the sinking of the Titanic have destroyed that complacency. Priestley is saying: <strong>we had the chance to learn, and we didn't. Will we learn now?</strong></p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing the play's ending — the phone rings with news of a real inspector on the way — link it to Priestley's message. The second chance mirrors the 1945 audience's second chance to build a fairer society after the war. If the Birlings (and the audience) ignore the lesson again, the consequences will repeat.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the play as a murder mystery. It is not a whodunit — Priestley is not interested in whether the Inspector was "real." The play is a moral parable about social responsibility. Focus your essay on Priestley's message, not on solving the mystery.</div>

<div class="model-answer"><div class="model-answer-header">MODEL PARAGRAPH</div>
<p>Priestley uses the stage direction that lighting should change from "pink and intimate" to "brighter and harder" when the Inspector arrives to symbolise the shift from comfortable ignorance to harsh moral scrutiny. The adjective "pink" connotes a rose-tinted, sheltered view of the world — the Birlings see only what they want to see. The contrasting adjectives "brighter and harder" suggest the Inspector's arrival forces an unforgiving clarity upon them, stripping away their self-satisfaction. Priestley uses this visual metaphor to argue that the privileged must be forced to confront the reality of inequality — they will not do so voluntarily.</p>
</div>`,
      quiz: [
        { id: 'gcse-ld-m4-q1', question: 'What does the lighting change from "pink and intimate" to "brighter and harder" symbolise?', options: ['The time of day changing from evening to night', 'The shift from comfortable self-deception to harsh moral scrutiny', 'The Inspector turning on more lights to search for evidence', 'The deterioration of the Birlings\' electricity supply'], correct: 1, explanation: '"Pink and intimate" represents the Birlings\' comfortable, rose-tinted worldview. "Brighter and harder" represents the harsh truth the Inspector forces them to confront. Priestley uses lighting symbolically to reinforce his theme that the privileged must face the reality of inequality.' },
        { id: 'gcse-ld-m4-q2', question: 'Why does Priestley set the entire play in one room on one evening?', options: ['Because he could not afford multiple sets', 'To create a claustrophobic, pressure-cooker atmosphere with no escape for the Birlings', 'Because the story only requires one location', 'To make the play shorter and easier to perform'], correct: 1, explanation: 'By following the classical unities (one room, one evening, real time), Priestley creates a claustrophobic atmosphere. The Birlings cannot escape the Inspector\'s questioning, which builds tension and mirrors the inescapability of moral accountability.' },
        { id: 'gcse-ld-m4-q3', question: 'What does Birling\'s line "A man has to mind his own business and look after himself" represent?', options: ['Priestley\'s own political views', 'The capitalist, individualist philosophy that Priestley is criticising', 'Good advice for the audience', 'A compromise between socialism and capitalism'], correct: 1, explanation: 'Birling\'s philosophy of selfish individualism represents the capitalist worldview that Priestley, a committed socialist, is attacking. By making Birling arrogant, wrong about the Titanic, and morally bankrupt, Priestley discredits this philosophy and promotes collective responsibility instead.' },
        { id: 'gcse-ld-m4-q4', question: 'Why is the final phone call (announcing a real inspector) significant?', options: ['It proves the first Inspector was fake', 'It sets up a sequel to the play', 'It represents a second chance to learn the lesson and mirrors the 1945 audience\'s own second chance', 'It is a plot twist designed purely for entertainment'], correct: 2, explanation: 'The final phone call gives the Birlings — and symbolically the audience — a second chance. Just as Britain in 1945 had a second chance to build a fairer society after two world wars, the Birlings have another opportunity to accept responsibility. Priestley warns that ignoring the lesson means the consequences will repeat.' },
      ],
    },
    {
      id: 'gcse-ld-m5',
      title: 'The 19th-Century Novel',
      duration: '40 mins',
      content: `<h2>Approaching the 19th-Century Novel Extract</h2>
<p>In the GCSE English Literature exam, you will face an extract from a 19th-century novel that you have <strong>not studied before</strong>. This can feel daunting, but the skills you need are the same ones you use for your set texts: analyse language, explore themes, and link to context. This module gives you a reliable framework for tackling any 19th-century prose extract.</p>

<h3>Step-by-Step Approach</h3>
<ol>
<li><strong>Read the extract twice.</strong> First for overall meaning, second for details.</li>
<li><strong>Identify the narrative voice.</strong> Is it first-person or third-person? Is the narrator reliable? What is their tone?</li>
<li><strong>Look for key themes.</strong> Victorian texts almost always deal with class, gender, morality, the supernatural, or the tension between appearance and reality.</li>
<li><strong>Analyse language closely.</strong> Pick out specific words and phrases. What are their connotations? What effects do they create?</li>
<li><strong>Link to Victorian context.</strong> What does the extract reveal about 19th-century society, attitudes, or values?</li>
</ol>

<div class="key-term"><strong>Key Term: Narrative voice</strong> — The perspective from which a story is told. A first-person narrator ("I") gives a subjective, personal account. A third-person omniscient narrator ("he/she") can see into every character's mind. The choice of narrative voice shapes how the reader experiences the story.</div>

<h3>Victorian Context: The Essentials</h3>
<p>You do not need to be a historian, but knowing these key features of 19th-century Britain will help you connect any extract to its context:</p>
<ul>
<li><strong>Social class:</strong> Society was rigidly divided. The upper classes had wealth and power; the working classes endured poverty, dangerous labour, and limited rights. Many novels expose this inequality.</li>
<li><strong>Gender roles:</strong> Women were expected to be domestic, obedient, and morally pure — the "Angel in the House" ideal. Female characters who defy this are often punished in the narrative.</li>
<li><strong>Industrialisation:</strong> The 19th century saw massive industrial growth. Cities expanded, factories exploited workers, and the gap between rich and poor widened. Dickens, Gaskell, and others wrote directly about these conditions.</li>
<li><strong>Empire and colonialism:</strong> Britain ruled a vast empire. 19th-century texts sometimes reflect attitudes of racial superiority or, occasionally, critique imperialism.</li>
<li><strong>Religion and morality:</strong> Christianity was central to Victorian life. Morality, sin, and redemption are common themes.</li>
</ul>

<h3>Gothic Conventions</h3>
<p>Many 19th-century texts use gothic elements. Learn to spot these:</p>
<ul>
<li><strong>Dark, isolated settings:</strong> castles, moors, old houses, graveyards</li>
<li><strong>The supernatural:</strong> ghosts, unexplained events, prophetic dreams</li>
<li><strong>Extreme emotions:</strong> terror, madness, obsession, despair</li>
<li><strong>The uncanny:</strong> something familiar made strange and threatening</li>
<li><strong>Pathetic fallacy:</strong> weather and landscape reflecting characters' emotions — storms for turmoil, fog for confusion</li>
</ul>

<div class="text-extract">"There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question."<div class="source">Charlotte Brontë, Jane Eyre (1847), Chapter 1</div></div>

<p>Even if you have never read <em>Jane Eyre</em>, you can analyse this opening. The pathetic fallacy — "cold winter wind," "clouds so sombre," "rain so penetrating" — creates a mood of confinement and melancholy. The word "penetrating" suggests the rain is invasive and inescapable, mirroring the emotional oppression the narrator feels. The phrase "no possibility" in the opening sentence immediately establishes restriction and lack of freedom.</p>

<h3>Social Class in 19th-Century Prose</h3>
<p>Class is everywhere in Victorian fiction. Look for how characters speak (dialect vs standard English), how they are described (clothing, homes, manners), and how the narrator treats them (with sympathy, mockery, or condemnation). Writers like Dickens use caricature and satire to attack the wealthy, while others like Hardy show the suffering of rural working people.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You will not lose marks for not knowing the specific novel the extract comes from. The examiner wants to see close language analysis and awareness of 19th-century context. Treat the extract as a standalone piece and analyse it with confidence.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the narrative voice. Always comment on WHO is telling the story and HOW their perspective shapes the reader's response. A first-person child narrator creates sympathy; an omniscient narrator can reveal hidden truths. This is an easy win for marks.</div>`,
      quiz: [
        { id: 'gcse-ld-m5-q1', question: 'What should you do FIRST when you encounter a 19th-century novel extract in the exam?', options: ['Start writing your essay immediately', 'Try to identify which novel it is from', 'Read the extract twice — once for meaning, once for detail', 'Count the number of paragraphs'], correct: 2, explanation: 'Always read the extract twice. The first reading gives you overall meaning and tone. The second allows you to notice specific language choices, techniques, and details that you can analyse in your essay.' },
        { id: 'gcse-ld-m5-q2', question: 'Which of the following is a gothic convention?', options: ['A realistic urban setting with factories', 'Humorous dialogue between characters', 'Dark, isolated settings with supernatural elements and extreme emotions', 'A happy ending with a wedding'], correct: 2, explanation: 'Gothic conventions include dark or isolated settings (castles, moors), the supernatural (ghosts, the uncanny), and extreme emotions (terror, madness, despair). These elements create an atmosphere of mystery, dread, and psychological intensity.' },
        { id: 'gcse-ld-m5-q3', question: 'What is pathetic fallacy?', options: ['When a character makes a foolish mistake', 'When weather or landscape reflects a character\'s emotions or the mood of a scene', 'When the narrator directly addresses the reader', 'When animals are given human characteristics'], correct: 1, explanation: 'Pathetic fallacy is the literary technique of using weather, landscape, or natural phenomena to reflect characters\' emotions or the mood. A storm during a moment of conflict, or fog during confusion, are classic examples found throughout 19th-century fiction.' },
        { id: 'gcse-ld-m5-q4', question: 'Why is social class an important contextual lens for analysing 19th-century texts?', options: ['Because all Victorian novels are about wealthy people', 'Because Victorian society was rigidly divided by class, and many writers used fiction to expose inequality and injustice', 'Because examiners only give marks for discussing class', 'Because there were no other important themes in the 19th century'], correct: 1, explanation: 'Victorian Britain had extreme class divisions. Many 19th-century novelists — Dickens, Gaskell, Hardy, Brontë — used their fiction to expose the suffering of the poor and critique the selfishness of the wealthy. Recognising class dynamics in an extract and linking them to this context will strengthen your analysis.' },
      ],
    },
    {
      id: 'gcse-ld-m6',
      title: 'Writing Literature Essays',
      duration: '35 mins',
      content: `<h2>How to Write a Top-Grade Literature Essay</h2>
<p>Knowing your texts is essential — but if you cannot organise your knowledge into a clear, well-structured essay, you will not achieve the grade you deserve. This module gives you a practical framework for planning and writing literature essays under timed conditions.</p>

<h3>The 5-Minute Plan</h3>
<p>Before you write a single sentence of your essay, spend five minutes planning. This is not wasted time — it is the most valuable five minutes of the exam. A planned essay is always better than an unplanned one.</p>
<ol>
<li><strong>Underline the key words</strong> in the question: the theme or character you must focus on, and the command word (how, to what extent, etc.).</li>
<li><strong>Write a thesis statement</strong> — one sentence that gives your overall argument in response to the question.</li>
<li><strong>Plan 3-4 paragraphs.</strong> For each, note: the point you will make, the quotation you will use, and the technique or context you will discuss.</li>
</ol>

<div class="key-term"><strong>Key Term: Thesis statement</strong> — A single sentence at the start of your essay that presents your overall argument. For example: "Shakespeare presents Macbeth as a character who is ultimately destroyed by his own ambition, but who retains enough self-awareness to make his downfall genuinely tragic."</div>

<h3>Topic Sentences</h3>
<p>Every paragraph should begin with a <strong>topic sentence</strong> — a clear statement that tells the examiner what the paragraph is about and how it relates to the question. Think of each topic sentence as a mini-thesis for that paragraph.</p>
<p><strong>Weak topic sentence:</strong> "In Act 1, Macbeth meets the witches."</p>
<p><strong>Strong topic sentence:</strong> "Shakespeare uses the witches' prophecy in Act 1 to ignite Macbeth's latent ambition, suggesting that his desire for power existed before their intervention."</p>
<p>The strong version makes an argument, names a technique, and links to the theme of ambition — all in one sentence.</p>

<h3>Embedding Quotations</h3>
<p>At GCSE, you must use quotations as evidence — but how you use them matters as much as which ones you choose. Embedded quotations are woven into your own sentences and flow naturally.</p>

<p><strong>Bolt-on (weaker):</strong> Macbeth feels guilty. He says, "Will all great Neptune's ocean wash this blood clean from my hand?"</p>
<p><strong>Embedded (stronger):</strong> Macbeth's guilt is so overwhelming that he believes not even "great Neptune's ocean" could "wash this blood clean" from his hands, suggesting his crime has permanently stained his soul.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to memorise dozens of long quotations. Short, precise phrases — even single words — are more effective. "Vaulting ambition," "unsex me here," "full o'th' milk of human kindness" — these are enough to build a sophisticated analysis around.</div>

<h3>Linking to Context</h3>
<p>Context should not be a separate bolt-on paragraph. It should be woven into your analysis naturally. The best way to do this is to explain WHY the writer made a particular choice by connecting it to the world they lived in.</p>
<p><strong>Bolt-on (weaker):</strong> "In Shakespeare's time, people believed in witches. James I wrote a book about witchcraft."</p>
<p><strong>Integrated (stronger):</strong> "Shakespeare's inclusion of the Weird Sisters would have resonated with a Jacobean audience who genuinely feared witchcraft — King James I himself had written <em>Daemonologie</em> (1597), lending royal authority to the belief in supernatural evil."</p>

<h3>Paragraph Structure: WHAT-HOW-WHY</h3>
<p>Each analytical paragraph should move through three levels:</p>
<ul>
<li><strong>WHAT</strong> — What is the writer doing? (Your point + quotation)</li>
<li><strong>HOW</strong> — How are they doing it? (Analyse the technique and language)</li>
<li><strong>WHY</strong> — Why are they doing it? (Link to theme, character development, context, or the writer's message)</li>
</ul>

<div class="model-answer"><div class="model-answer-header">MODEL PARAGRAPH — WHAT-HOW-WHY</div>
<p><strong>WHAT:</strong> Shakespeare presents Lady Macbeth's guilt as uncontrollable and destructive in the sleepwalking scene. She frantically tries to wash imaginary blood from her hands, crying "Out, damned spot! Out, I say!"</p>
<p><strong>HOW:</strong> The imperative "Out" and the exclamatory sentences convey desperation and loss of control. The word "damned" carries religious connotations of damnation, suggesting Lady Macbeth believes her soul is beyond redemption. The "spot" of blood is invisible to everyone except her — it exists only in her tortured conscience.</p>
<p><strong>WHY:</strong> Shakespeare uses this scene to demonstrate that guilt cannot be suppressed. Lady Macbeth, who earlier dismissed the murder with "A little water clears us of this deed," is now destroyed by the very guilt she once mocked. For a Jacobean audience, her madness would be seen as divine punishment for her role in regicide, reinforcing the play's moral framework.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a paragraph that only describes what happens ("Macbeth kills Duncan and then feels guilty"). Description earns very few marks. You must analyse HOW the writer creates meaning and WHY they make specific choices. Always ask yourself: "Am I describing or analysing?"</div>`,
      quiz: [
        { id: 'gcse-ld-m6-q1', question: 'What is a thesis statement?', options: ['The last sentence of your essay', 'A quotation from the text that proves your point', 'A single sentence at the start of your essay that presents your overall argument', 'A list of the points you will make in your essay'], correct: 2, explanation: 'A thesis statement is one clear sentence at the beginning of your essay that states your overall argument in response to the question. It gives your essay a clear direction and shows the examiner you have a focused, considered response.' },
        { id: 'gcse-ld-m6-q2', question: 'Which of the following is a strong topic sentence?', options: ['In the play, Macbeth kills Duncan.', 'Shakespeare uses the witches\' prophecy to ignite Macbeth\'s latent ambition, suggesting his desire for power existed before their intervention.', 'This paragraph is about ambition.', 'There are many themes in Macbeth such as guilt and ambition.'], correct: 1, explanation: 'A strong topic sentence makes an argument, names the writer and their technique, and links directly to the theme in the question. Option B does all three in one sentence, immediately signalling a high-quality analytical paragraph.' },
        { id: 'gcse-ld-m6-q3', question: 'In the WHAT-HOW-WHY paragraph structure, what does the "WHY" step require you to do?', options: ['Retell what happens in the scene', 'Identify the technique the writer uses', 'Explain why the writer made this choice by linking to theme, context, or their message', 'Write a quotation from the text'], correct: 2, explanation: 'The "WHY" step is where you explain the writer\'s purpose — why they made this particular choice. This is where you link to themes, context, character development, or the writer\'s overall message. It is the step that moves your answer from description to genuine analysis.' },
        { id: 'gcse-ld-m6-q4', question: 'Which is the better way to use context in a literature essay?', options: ['Write a separate paragraph at the end listing historical facts', 'Weave context into your analysis by explaining why the writer made specific choices in relation to their society', 'Mention context in your introduction and never refer to it again', 'Only include context if the question specifically asks for it'], correct: 1, explanation: 'Context should be integrated into your analysis, not bolted on as a separate paragraph. The best approach is to use context to explain WHY the writer made a particular choice: "Shakespeare\'s Jacobean audience would have viewed regicide as a sin against God, which intensifies the horror of Duncan\'s murder."' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'gcse-ld-a1', question: 'What is Macbeth\'s hamartia?', options: ['Cowardice', 'Vaulting ambition', 'Jealousy', 'Greed'], correct: 1, explanation: 'Macbeth\'s hamartia (tragic flaw) is his "vaulting ambition." He identifies this himself in Act 1 Scene 7, and it is the driving force behind every destructive choice he makes in the play.' },
    { id: 'gcse-ld-a2', question: 'What does Lady Macbeth mean when she says Macbeth is "too full o\'th\' milk of human kindness"?', options: ['He is too generous with money', 'He is too compassionate and gentle to commit murder', 'He drinks too much milk', 'He is too kind to the servants'], correct: 1, explanation: 'Lady Macbeth fears her husband is too gentle and moral — too full of natural human compassion — to seize the crown by murder. The metaphor of "milk" suggests softness, nurture, and innocence, qualities she sees as weaknesses.' },
    { id: 'gcse-ld-a3', question: 'What is the significance of the phrase "Fair is foul, and foul is fair"?', options: ['It describes the weather in Scotland', 'It is a paradox that establishes the theme that nothing is what it seems', 'It is the witches\' greeting to Macbeth', 'It describes the difference between England and Scotland'], correct: 1, explanation: 'This paradox, spoken by the witches in the opening scene, establishes a central theme: appearances are deceptive and moral boundaries are blurred. It foreshadows the play\'s events where honourable-seeming Macbeth commits terrible acts.' },
    { id: 'gcse-ld-a4', question: 'How does Shakespeare use the motif of blood in Macbeth?', options: ['Only to show physical injuries from battle', 'As a recurring symbol of guilt that cannot be washed away', 'To represent the colour of the Scottish flag', 'Only in the final battle scene'], correct: 1, explanation: 'Blood is a powerful recurring motif representing guilt. Macbeth fears "the multitudinous seas incarnadine" after Duncan\'s murder, and Lady Macbeth obsessively tries to wash imaginary blood from her hands. Both show that guilt stains the conscience permanently.' },
    { id: 'gcse-ld-a5', question: 'What is dramatic irony?', options: ['When a play contains unexpected humour', 'When the audience knows something that a character on stage does not', 'When a character says the opposite of what they mean', 'When the ending of a play is surprising'], correct: 1, explanation: 'Dramatic irony occurs when the audience possesses knowledge that characters lack. In Macbeth, when Duncan praises the castle where he will be murdered, the audience\'s awareness of his fate creates tension and horror.' },
    { id: 'gcse-ld-a6', question: 'Why is the Jacobean context of the Divine Right of Kings important to Macbeth?', options: ['It explains why Macbeth wants to be king', 'It means that killing a king was seen as a sin against God, not just a political crime, which intensifies the horror of Duncan\'s murder', 'It is why the play is set in Scotland rather than England', 'It only matters for the final scene of the play'], correct: 1, explanation: 'James I believed monarchs were appointed by God. This means Duncan\'s murder is not merely treason but a sacrilegious act that disrupts the divine order — which is why nature itself erupts in chaos afterwards. This belief intensifies the moral weight of Macbeth\'s crime for the original audience.' },
    { id: 'gcse-ld-a7', question: 'In An Inspector Calls, why does Priestley make Mr Birling predict the Titanic is "unsinkable"?', options: ['To show that Birling is interested in ships', 'To create dramatic irony that undermines Birling\'s authority and worldview', 'To provide historical information for the audience', 'To foreshadow that a character will drown'], correct: 1, explanation: 'The 1945 audience knew the Titanic sank in 1912. Birling\'s confident prediction is spectacularly wrong, creating dramatic irony that undermines everything he says. If he is wrong about the Titanic, he is probably wrong about his selfish capitalist philosophy too.' },
    { id: 'gcse-ld-a8', question: 'What does the name "Goole" suggest about the Inspector\'s nature?', options: ['He comes from the town of Goole in Yorkshire', 'It suggests "ghoul," implying he may be a supernatural or otherworldly figure', 'It is a common surname in 1912', 'It rhymes with "fool," suggesting he is easily deceived'], correct: 1, explanation: 'The name "Goole" sounds like "ghoul" — a supernatural being associated with death. This reinforces the idea that the Inspector is not a real police officer but a dramatic device, possibly supernatural, used by Priestley to deliver the play\'s moral message.' },
    { id: 'gcse-ld-a9', question: 'Which character in An Inspector Calls represents Priestley\'s hope for the younger generation?', options: ['Arthur Birling', 'Mrs Birling', 'Sheila Birling', 'Gerald Croft'], correct: 2, explanation: 'Sheila undergoes the most dramatic transformation. She fully accepts responsibility for her role in Eva\'s death, challenges her parents\' refusal to change, and refuses to pretend "nothing happened." She represents Priestley\'s belief that the young can build a more just society.' },
    { id: 'gcse-ld-a10', question: 'What does the lighting change from "pink and intimate" to "brighter and harder" symbolise in An Inspector Calls?', options: ['The time changing from evening to night', 'The shift from comfortable ignorance to the harsh light of moral truth', 'The Inspector turning on the electric lights', 'A change in the season from autumn to winter'], correct: 1, explanation: 'The pink light represents the Birlings\' rose-tinted, sheltered worldview. The brighter, harder light represents the uncomfortable truth the Inspector forces them to confront. Priestley uses this stage direction symbolically to reinforce his themes of moral responsibility and self-deception.' },
    { id: 'gcse-ld-a11', question: 'What does the Inspector\'s phrase "fire and blood and anguish" refer to?', options: ['A factory fire at Birling\'s business', 'The two World Wars that the 1945 audience had just lived through', 'A biblical description of hell', 'The Russian Revolution of 1917'], correct: 1, explanation: 'The Inspector warns that if people do not learn social responsibility, they "will be taught it in fire and blood and anguish." For the 1945 audience, this clearly refers to the devastation of two World Wars — events that proved the consequences of ignoring inequality and injustice.' },
    { id: 'gcse-ld-a12', question: 'What is the "Angel in the House" ideal in Victorian context?', options: ['A type of gothic ghost story', 'The expectation that women should be domestic, obedient, and morally pure', 'A religious movement that built houses for the poor', 'A style of Victorian architecture'], correct: 1, explanation: 'The "Angel in the House" was the Victorian ideal of femininity: women should be devoted to home and family, submissive to their husbands, and morally pure. Female characters in 19th-century novels who defy this ideal are often punished, reflecting the restrictive gender norms of the period.' },
    { id: 'gcse-ld-a13', question: 'What is pathetic fallacy?', options: ['A logical error in an argument', 'Using weather or landscape to reflect characters\' emotions or the mood of a scene', 'A character who is pathetically weak', 'A plot device where a coincidence solves the story'], correct: 1, explanation: 'Pathetic fallacy is the technique of using natural phenomena — weather, landscape, seasons — to mirror characters\' emotions or the atmosphere of a scene. Storms during conflict, fog during confusion, and sunshine during happiness are common examples in 19th-century fiction.' },
    { id: 'gcse-ld-a14', question: 'Which of the following is a gothic convention?', options: ['A realistic factory setting', 'Witty dialogue at a dinner party', 'A dark, isolated setting with supernatural elements and extreme emotions', 'A detailed description of a character\'s daily routine'], correct: 2, explanation: 'Gothic conventions include dark and isolated settings (castles, moors, graveyards), the supernatural (ghosts, the uncanny), extreme emotions (terror, madness, obsession), and pathetic fallacy. These elements create an atmosphere of dread and psychological intensity.' },
    { id: 'gcse-ld-a15', question: 'What is a thesis statement?', options: ['A quotation from the text that supports your argument', 'A single sentence at the start of your essay stating your overall argument', 'A summary of the plot', 'The topic sentence of your final paragraph'], correct: 1, explanation: 'A thesis statement is one clear sentence at the beginning of your essay that presents your overall argument in response to the question. It gives your essay direction and immediately signals to the examiner that you have a focused, analytical response.' },
    { id: 'gcse-ld-a16', question: 'What is the difference between an embedded quotation and a bolt-on quotation?', options: ['Embedded quotations are longer than bolt-on quotations', 'An embedded quotation is woven naturally into your sentence; a bolt-on sits separately', 'Bolt-on quotations are more sophisticated', 'There is no difference — they are the same thing'], correct: 1, explanation: 'An embedded quotation flows naturally within your own sentence (e.g., Macbeth\'s "vaulting ambition" drives him to murder). A bolt-on quotation sits separately and reads awkwardly (e.g., Macbeth is ambitious. "I have no spur..."). Embedded quotations are more fluent and score higher marks.' },
    { id: 'gcse-ld-a17', question: 'In the WHAT-HOW-WHY paragraph structure, what does the "HOW" step involve?', options: ['Describing what happens in the scene', 'Analysing the specific technique and language the writer uses', 'Explaining the historical context of the text', 'Giving your personal opinion about the character'], correct: 1, explanation: 'The "HOW" step requires you to analyse the writer\'s methods — the specific techniques, word choices, and structural features they use to create meaning. This is the analytical heart of the paragraph, where you demonstrate your understanding of the writer\'s craft.' },
    { id: 'gcse-ld-a18', question: 'Why should you spend 5 minutes planning before writing a literature essay?', options: ['Because the exam rules require it', 'Because a planned essay is always more structured, focused, and coherent than an unplanned one', 'Because it uses up time so you write less', 'Because examiners mark your plan separately'], correct: 1, explanation: 'Planning ensures your essay has a clear argument (thesis), logically ordered paragraphs, and relevant quotations ready to use. An unplanned essay often rambles, repeats points, or drifts away from the question. Five minutes of planning saves time and improves quality.' },
    { id: 'gcse-ld-a19', question: 'How should context best be used in a literature essay?', options: ['In a separate paragraph at the end of your essay', 'Woven into your analysis to explain why the writer made specific choices', 'Only if the question specifically mentions context', 'As a long introduction before you discuss the text'], correct: 1, explanation: 'Context should be integrated into your analysis rather than bolted on. Use it to explain WHY a writer made a specific choice: "Lady Macbeth\'s command to \'unsex me here\' would have shocked a Jacobean audience who expected women to be passive and obedient." This approach earns higher marks than listing facts separately.' },
    { id: 'gcse-ld-a20', question: 'What is the most important reason Macbeth is considered a tragic hero?', options: ['He dies at the end of the play', 'He is a character of high status whose fatal flaw leads to his downfall, and he retains enough self-awareness to understand what he has lost', 'He fights bravely in the final battle', 'He is married to Lady Macbeth'], correct: 1, explanation: 'A tragic hero is not simply someone who dies. Macbeth qualifies because he begins as a noble figure, possesses a fatal flaw (ambition) that causes his downfall, and crucially, retains self-awareness — his soliloquies show he understands the horror of what he has become, which makes his destruction genuinely tragic rather than merely deserved.' },
  ],
};

const gcseRevisionBlitz: CourseData = {
  id: 'gcse-revision-blitz',
  title: 'GCSE Revision Blitz (AQA)',
  subtitle: 'Last-minute AQA exam prep that actually works.',
  tier: 'GCSE',
  board: 'AQA',
  specId: 'gcse-lang',
  specCode: '8700',
  price: 0,
  duration: '6-8 hours',
  level: 'GCSE (Years 10-11)',
  description: 'The ultimate AQA revision sprint. Condensed lessons covering every question type across Language and Literature, with exam walkthroughs, timing strategies, and grade-boosting tips from real examiners.',
  color: '#f59e0b',
  moduleList: [
    {
      id: 'gcse-rb-m1',
      title: 'Exam Survival Guide',
      duration: '20 mins',
      content: `<h2>Your Exam Survival Guide</h2>
<p>This is it. Whether your exam is in a week, three days, or tomorrow morning, this module will give you the clearest possible picture of what you are walking into. No waffle. No padding. Just the facts you need to feel prepared.</p>

<h3>The Four Papers at a Glance</h3>
<p>You will sit <strong>four papers</strong> across English Language and English Literature. Each one tests different skills, and each one has its own rhythm:</p>
<ul>
<li><strong>Language Paper 1</strong> — Explorations in Creative Reading and Writing. One fiction extract, four reading questions, one writing task. <strong>1 hour 45 minutes.</strong></li>
<li><strong>Language Paper 2</strong> — Writers' Viewpoints and Perspectives. Two non-fiction texts, four reading questions, one writing task. <strong>1 hour 45 minutes.</strong></li>
<li><strong>Literature Paper 1</strong> — Shakespeare and the 19th-Century Novel. One Shakespeare play, one novel, extract-based and essay questions. <strong>1 hour 45 minutes.</strong></li>
<li><strong>Literature Paper 2</strong> — Modern Texts and Poetry. One modern prose/drama text, the poetry anthology, and unseen poetry. <strong>2 hours 15 minutes.</strong></li>
</ul>

<div class="key-term"><strong>Key Term: AOs (Assessment Objectives)</strong> — These are the specific skills the examiner is marking you on. Every mark on every question is tied to an AO. If you know the AOs, you know exactly what to include in your answer.</div>

<h3>Timing Is Everything</h3>
<p>More students lose marks through poor timing than through lack of knowledge. The golden rule: <strong>spend roughly one minute per mark.</strong> If a question is worth 8 marks, spend 8-10 minutes on it. If it is worth 40 marks, give it 40-45 minutes. Do not let a low-mark question steal time from a high-mark question.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Bring a watch. Wall clocks can be hard to see, and you are not allowed your phone. A simple wristwatch means you control your time. Write your planned finish time for each question in the margin before you start the paper.</div>

<h3>Equipment Checklist</h3>
<p>Pack the night before. You need: two black pens, a spare pen, a pencil, a ruler, an eraser, a highlighter, and a watch. Do not rely on borrowing from friends — they will be stressed too.</p>

<h3>Mindset: The Five-Minute Rule</h3>
<p>If you feel stuck on a question, give yourself exactly five more minutes. Write anything — bullet points, fragments, half-formed ideas. Then move on. You can always come back, and a partial answer scores far more than a blank page. Examiners <strong>want</strong> to give you marks. Give them something to work with.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending 30 minutes perfecting a 4-mark question and then rushing the 40-mark essay. Always check the marks before you write. The essay is where the big marks live — protect that time at all costs.</div>`,
      quiz: [
        { id: 'gcse-rb-m1-q1', question: 'How many papers do you sit across GCSE English Language and Literature?', options: ['Two', 'Three', 'Four', 'Six'], correct: 2, explanation: 'You sit four papers in total: Language Paper 1, Language Paper 2, Literature Paper 1, and Literature Paper 2.' },
        { id: 'gcse-rb-m1-q2', question: 'What is the recommended rule for time allocation per question?', options: ['Two minutes per mark', 'Roughly one minute per mark', 'Five minutes per question regardless of marks', 'Split time equally between all questions'], correct: 1, explanation: 'The golden rule is roughly one minute per mark. This ensures you give high-mark questions the time they deserve and do not overspend on low-mark ones.' },
        { id: 'gcse-rb-m1-q3', question: 'What are AOs?', options: ['Answer Outlines — templates for your answers', 'Assessment Objectives — the specific skills being marked', 'Automatic Options — multiple choice answers', 'Academic Overviews — summaries of each text'], correct: 1, explanation: 'AOs are Assessment Objectives. They define exactly which skills the examiner is looking for in each question. Knowing them helps you target your answer precisely.' },
        { id: 'gcse-rb-m1-q4', question: 'If you feel stuck on a question, what should you do?', options: ['Leave it completely blank and move on', 'Spend as long as it takes to finish it', 'Give yourself five more minutes, write what you can, then move on', 'Ask the invigilator for help'], correct: 2, explanation: 'The five-minute rule: write what you can — even bullet points — then move on. A partial answer always scores more than a blank space, and you protect time for other questions.' },
      ],
    },
    {
      id: 'gcse-rb-m2',
      title: 'Language Paper 1 Walkthrough',
      duration: '40 mins',
      content: `<h2>Language Paper 1: Explorations in Creative Reading and Writing</h2>
<p>This paper gives you <strong>one fiction extract</strong> (usually 20th or 21st century) and asks you to read it closely before answering four reading questions and one writing task. Total time: <strong>1 hour 45 minutes.</strong> Here is how to attack every question.</p>

<h3>Section A: Reading (1 hour recommended)</h3>

<p><strong>Question 1 (4 marks, ~5 minutes) — List four things.</strong> This is a gift. Read the specified lines, find four clear facts, and write them as short statements. No analysis. No quotation marks needed, though they do not hurt. Get your four marks and move on fast.</p>

<p><strong>Question 2 (8 marks, ~10 minutes) — How does the writer use language?</strong> Focus on specific words, phrases, and techniques. Use the What-How-Why structure: What technique is used? How does it work? Why does it affect the reader? Aim for 2-3 detailed analytical points.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> On Question 2, examiners reward you for analysing individual words. Saying "the verb 'shattered' connotes destruction and fragility" is worth more than vaguely describing the whole paragraph. Zoom in on single words.</div>

<p><strong>Question 3 (8 marks, ~10 minutes) — How does the writer use structure?</strong> Think about beginnings, shifts, focus changes, and endings. How does the writer move the reader through the text? Consider: focus shifts (wide to narrow, external to internal), pace changes, sentence length variation, paragraph structure, and cyclical patterns.</p>

<div class="key-term"><strong>Key Term: Structural shift</strong> — A deliberate change in focus, pace, tone, or perspective within a text. Identifying where and why these shifts happen is the core skill for Question 3.</div>

<p><strong>Question 4 (20 marks, ~25 minutes) — To what extent do you agree?</strong> This is your biggest reading question. You are given a statement and must evaluate it. Structure: agree with evidence, then consider a counterargument, then reach a conclusion. Use phrases like "On the other hand" and "However, it could also be argued." Write 3-4 well-developed paragraphs.</p>

<h3>Section B: Writing (45 minutes recommended)</h3>

<p><strong>Question 5 (40 marks, ~45 minutes) — Descriptive or narrative writing.</strong> You get a choice of two tasks. Pick the one that sparks ideas immediately. Plan for 5 minutes, write for 35 minutes, proofread for 5 minutes. Use varied sentence structures, ambitious vocabulary, and sensory details. Half the marks are for technical accuracy (spelling, punctuation, grammar), so proofread carefully.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a story with a huge plot for Question 5. Examiners want quality of writing, not quantity of events. A single powerful scene with rich description beats an action-packed epic every time. Slow down and describe.</div>

<div class="model-answer"><div class="model-answer-header">MODEL STRUCTURE FOR Q5 — DESCRIPTIVE</div>
<p><strong>Opening:</strong> Start with a striking image or sensory detail — drop the reader straight into the scene.</p>
<p><strong>Middle:</strong> Develop with contrasts — light/dark, sound/silence, movement/stillness. Shift perspective or zoom in/out.</p>
<p><strong>Ending:</strong> Return to an image from the opening (cyclical structure) or end on an ambiguous, thought-provoking line.</p>
</div>`,
      quiz: [
        { id: 'gcse-rb-m2-q1', question: 'How many marks is Question 1 on Language Paper 1 worth?', options: ['2 marks', '4 marks', '8 marks', '12 marks'], correct: 1, explanation: 'Question 1 is worth 4 marks. It is the simplest question — just list four things from the specified lines. Spend no more than 5 minutes on it.' },
        { id: 'gcse-rb-m2-q2', question: 'What is the key skill for Question 3 (structure)?', options: ['Identifying language techniques like metaphor', 'Spotting structural shifts and explaining how the writer moves the reader through the text', 'Comparing the text to another source', 'Writing your own creative response'], correct: 1, explanation: 'Question 3 tests your ability to analyse structure — focus shifts, pace changes, narrative perspective, beginnings and endings, and how these choices affect the reader.' },
        { id: 'gcse-rb-m2-q3', question: 'For Question 5 (creative writing), what common mistake should you avoid?', options: ['Using too many adjectives', 'Writing a huge plot with too many events instead of focusing on quality description', 'Making your writing too short', 'Using first person narration'], correct: 1, explanation: 'Examiners want quality of writing, not quantity of plot. A single well-described scene scores higher than a rushed adventure with five plot twists. Slow down and show off your language skills.' },
        { id: 'gcse-rb-m2-q4', question: 'How should you approach Question 4 (evaluation)?', options: ['Simply agree with the statement and give evidence', 'Write a balanced answer: agree with evidence, consider a counterargument, then conclude', 'Disagree completely and ignore the statement', 'Just retell the story in your own words'], correct: 1, explanation: 'Question 4 rewards a balanced evaluation. Agree with evidence, then consider an alternative interpretation, then reach a personal conclusion. This shows sophisticated critical thinking.' },
      ],
    },
    {
      id: 'gcse-rb-m3',
      title: 'Language Paper 2 Walkthrough',
      duration: '40 mins',
      content: `<h2>Language Paper 2: Writers' Viewpoints and Perspectives</h2>
<p>This paper gives you <strong>two non-fiction texts</strong> — one from the 19th century (or earlier) and one modern. You answer four reading questions and one writing task. The big difference from Paper 1? You are working with <strong>real-world texts</strong> — speeches, letters, articles, travel writing — and you must <strong>compare</strong> them.</p>

<h3>Section A: Reading (1 hour recommended)</h3>

<p><strong>Question 1 (4 marks, ~5 minutes) — True or false statements.</strong> Read Source A carefully and shade the correct boxes. This is retrieval only — no analysis needed. Do not overthink it. Read each statement against the text and check it matches exactly. Watch out for statements that are nearly true but contain a single wrong detail.</p>

<p><strong>Question 2 (8 marks, ~10 minutes) — Summarise differences (or similarities).</strong> You must use BOTH sources. Write clear comparative statements: "Source A presents... whereas Source B suggests..." Use brief evidence from each text. Aim for 3-4 clear points of comparison. Do not analyse language here — just summarise what each source says.</p>

<div class="key-term"><strong>Key Term: Synthesis</strong> — Combining information from two sources to identify patterns, differences, or connections. This is the core skill for Question 2 — you are not analysing language, you are pulling ideas together.</div>

<p><strong>Question 3 (12 marks, ~15 minutes) — How does the writer use language?</strong> This is identical in style to Paper 1, Question 2, but worth more marks. Focus on one source only (it will tell you which). Analyse specific words, phrases, and techniques. Aim for 3-4 detailed points using What-How-Why. Include subject-specific terminology: metaphor, emotive language, rhetorical questions, direct address, hyperbole.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing non-fiction language, always consider the writer's purpose and audience. A charity appeal uses emotive language to provoke guilt; a newspaper editorial uses rhetorical questions to make the reader think. Linking language to purpose shows top-level understanding.</div>

<p><strong>Question 4 (16 marks, ~25 minutes) — Compare viewpoints and methods.</strong> This is the big one for Paper 2. Compare how the two writers present their attitudes to the same topic. You MUST discuss both writers' ideas AND their methods (language, structure, tone). Use comparative connectives throughout: "Similarly," "In contrast," "While Source A...Source B..."</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Source A for three paragraphs, then Source B for three paragraphs. This is NOT comparison — it is two mini-essays. Every paragraph must discuss both sources. Weave them together throughout your answer.</div>

<h3>Section B: Writing (45 minutes recommended)</h3>

<p><strong>Question 5 (40 marks, ~45 minutes) — Writing to present a viewpoint.</strong> This could be a letter, article, speech, or essay. Read the task carefully to identify the <strong>form</strong>, <strong>audience</strong>, and <strong>purpose</strong>. Plan for 5 minutes, write for 35 minutes, proofread for 5 minutes. Use persuasive techniques: rhetorical questions, direct address, statistics (you can invent reasonable ones), anecdotes, emotive language, and a powerful concluding statement.</p>

<div class="model-answer"><div class="model-answer-header">MODEL COMPARISON PARAGRAPH (Q4)</div>
<p>Both writers present the city as overwhelming, but for different reasons. Source A describes London as a place of "unbearable noise and filth," using the adjective "unbearable" to suggest the 19th-century writer feels physically oppressed by urban life. In contrast, Source B's modern writer describes the city as "relentlessly alive," where the adverb "relentlessly" implies exhaustion but also excitement. While Source A focuses on discomfort, Source B acknowledges that the chaos is part of the city's appeal, reflecting a more ambivalent modern attitude.</p>
</div>`,
      quiz: [
        { id: 'gcse-rb-m3-q1', question: 'What is the key difference between Language Paper 1 and Paper 2?', options: ['Paper 2 has no writing section', 'Paper 2 uses two non-fiction texts and requires comparison', 'Paper 2 is shorter', 'Paper 2 only tests creative writing'], correct: 1, explanation: 'Paper 2 gives you two non-fiction texts (one older, one modern) and requires you to compare them. Paper 1 uses a single fiction extract with no comparison.' },
        { id: 'gcse-rb-m3-q2', question: 'What should you NOT do when answering Question 4 (compare viewpoints)?', options: ['Use comparative connectives', 'Discuss both writers\' methods', 'Write about Source A for half the answer, then Source B for the other half', 'Include evidence from both texts'], correct: 2, explanation: 'Writing about each source separately is not comparison. Every paragraph should discuss both sources, weaving them together with comparative connectives like "Similarly" and "In contrast."' },
        { id: 'gcse-rb-m3-q3', question: 'What skill does Question 2 test?', options: ['Language analysis', 'Synthesis — summarising and comparing information from both sources', 'Creative writing', 'Structural analysis'], correct: 1, explanation: 'Question 2 tests synthesis: pulling together information from both sources to identify similarities or differences. You summarise ideas, not analyse language.' },
        { id: 'gcse-rb-m3-q4', question: 'For Question 5 (viewpoint writing), what must you identify from the task before writing?', options: ['The number of paragraphs needed', 'Form, audience, and purpose', 'Which literary techniques to use', 'The historical context of the topic'], correct: 1, explanation: 'Every transactional writing task has a form (letter, article, speech), audience (who you are writing to), and purpose (persuade, argue, advise). These determine your tone, structure, and techniques.' },
      ],
    },
    {
      id: 'gcse-rb-m4',
      title: 'Literature Paper 1 Walkthrough',
      duration: '40 mins',
      content: `<h2>Literature Paper 1: Shakespeare and the 19th-Century Novel</h2>
<p>This paper has two sections, each on a set text you have studied in class. You have <strong>1 hour 45 minutes</strong> — split roughly 50 minutes on Shakespeare and 50 minutes on the novel, with 5 minutes for reading time at the start.</p>

<h3>Section A: Shakespeare (roughly 50 minutes)</h3>

<p>You will receive a printed extract from your Shakespeare play and a question asking how Shakespeare presents a theme or character. You MUST write about the extract AND the wider play. A good split is 60% extract, 40% wider play.</p>

<div class="key-term"><strong>Key Term: Extract-to-whole</strong> — The technique of starting your analysis with the printed extract, then broadening out to discuss how the theme or character appears elsewhere in the play. This structure shows the examiner you know the whole text, not just the passage in front of you.</div>

<p><strong>How to structure your Shakespeare answer:</strong></p>
<ul>
<li><strong>Introduction (2-3 sentences):</strong> Name the theme/character and briefly state how Shakespeare presents it overall.</li>
<li><strong>Paragraph 1-2:</strong> Analyse the extract in detail. Use specific quotations and discuss Shakespeare's language choices, dramatic techniques, and effects.</li>
<li><strong>Paragraph 3-4:</strong> Move beyond the extract. Discuss other key moments in the play that connect to the question. Show you know the whole text.</li>
<li><strong>Conclusion (2-3 sentences):</strong> Sum up Shakespeare's overall message or purpose regarding the theme.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always refer to Shakespeare by name and use phrases like "Shakespeare presents," "Shakespeare suggests," or "Shakespeare forces the audience to consider." This shows you understand that the text was crafted deliberately — it did not just happen. Examiners call this "authorial intent."</div>

<h3>Section B: 19th-Century Novel (roughly 50 minutes)</h3>

<p>Same structure: you get an extract and a question. Again, you must cover the extract AND the wider novel. Use the same extract-to-whole approach. The 19th-century context matters here — link your analysis to relevant social, historical, or cultural ideas.</p>

<div class="text-extract">"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."<div class="source">Jane Austen, Pride and Prejudice</div></div>

<p>If your text were Pride and Prejudice, you might note: Austen's ironic tone immediately signals that this "truth" is actually society's assumption, not a fact. The word "universally" is deliberately exaggerated, mocking the narrow world of the landed gentry where marriage was primarily an economic transaction.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending the entire essay on the extract and forgetting to discuss the wider text. The mark scheme explicitly rewards knowledge of the whole play or novel. Plan at least two paragraphs that move beyond the printed extract.</div>

<div class="model-answer"><div class="model-answer-header">CONTEXT — HOW TO USE IT</div>
<p>Context should be woven into your analysis, not bolted on as a separate paragraph. Bad: "In Victorian times, women had no rights." Good: "Dickens highlights the vulnerability of working-class women through Nancy's inability to escape Sikes, reflecting the limited legal protections available to women in the 1830s." The second version connects context directly to the text and the question.</p>
</div>`,
      quiz: [
        { id: 'gcse-rb-m4-q1', question: 'What does "extract-to-whole" mean in a Literature essay?', options: ['Only write about the extract provided', 'Start with the extract, then broaden to discuss the wider text', 'Ignore the extract and write about the whole play', 'Copy the extract into your answer'], correct: 1, explanation: 'Extract-to-whole means analysing the printed extract in detail first, then moving beyond it to discuss how the theme or character appears in other parts of the text. This shows full knowledge of the work.' },
        { id: 'gcse-rb-m4-q2', question: 'How should you refer to the author in a Literature essay?', options: ['Use phrases like "the text says" without naming the author', 'Use the author\'s name and phrases like "Shakespeare presents" to show authorial intent', 'Always use first names like "William" or "Charles"', 'Avoid mentioning the author at all'], correct: 1, explanation: 'Using the author\'s surname with active verbs like "presents," "suggests," or "challenges" shows you understand the text was deliberately crafted. This demonstrates awareness of authorial intent.' },
        { id: 'gcse-rb-m4-q3', question: 'How should context be used in a Literature answer?', options: ['As a separate paragraph at the end of the essay', 'Woven into your analysis and linked directly to the text and question', 'Only if the question specifically mentions context', 'By listing historical facts at the start of each paragraph'], correct: 1, explanation: 'Context is most effective when it is embedded in your analysis. Connect historical, social, or cultural ideas directly to the text and the question rather than writing a standalone "context paragraph."' },
        { id: 'gcse-rb-m4-q4', question: 'What is a good time split for Literature Paper 1?', options: ['All time on Shakespeare, rush the novel', '50 minutes Shakespeare, 50 minutes novel, 5 minutes reading', '30 minutes each with 45 minutes spare', '90 minutes on the novel only'], correct: 1, explanation: 'Roughly 50 minutes on Shakespeare, 50 minutes on the 19th-century novel, with 5 minutes at the start for reading the extracts and planning. This ensures both sections get equal attention.' },
      ],
    },
    {
      id: 'gcse-rb-m5',
      title: 'Literature Paper 2 Walkthrough',
      duration: '40 mins',
      content: `<h2>Literature Paper 2: Modern Texts and Poetry</h2>
<p>This is the longest Literature exam at <strong>2 hours 15 minutes</strong>, and it has three sections. You need to manage your time carefully across all three.</p>

<h3>Section A: Modern Text (roughly 50 minutes)</h3>

<p>You answer ONE question on your studied modern prose or drama text (e.g., An Inspector Calls, Lord of the Flies, Animal Farm). You get a choice of two questions — pick the one you can write the most about. There is <strong>no extract</strong> for this section, so you must recall quotations from memory.</p>

<div class="key-term"><strong>Key Term: Memorised quotations</strong> — For the modern text section, you have no extract to work from. You must learn key quotations by heart. Focus on short, versatile quotations that link to multiple themes — these give you the best return on your revision investment.</div>

<p><strong>Top tip:</strong> Learn 10-15 short quotations per character or theme. Short means 3-7 words — just enough to analyse but easy to memorise. Embed them into your sentences rather than writing them out separately.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you cannot remember a quotation exactly, paraphrase it and say "the writer describes..." This is better than leaving a gap. You may lose a mark for precision, but you keep all the marks for your analytical point. Never leave a blank.</div>

<h3>Section B: Poetry Anthology (roughly 45 minutes)</h3>

<p>You will receive one printed poem from your anthology and must compare it to another poem of your choice. The question will focus on a theme (power, conflict, relationships, etc.). Your job is to show how two poets present the same theme in different ways.</p>

<p><strong>Structure for the poetry comparison:</strong></p>
<ul>
<li><strong>Introduction:</strong> Name both poems and briefly state how each presents the theme.</li>
<li><strong>Paragraph 1-2:</strong> Analyse the printed poem in detail — language, structure, form.</li>
<li><strong>Paragraph 3-4:</strong> Compare with your chosen poem. Use comparative connectives throughout.</li>
<li><strong>Conclusion:</strong> Which poet's approach is more effective or striking, and why?</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Choosing a comparison poem that is too similar to the printed one. If both poems say the same thing in the same way, you have nothing to compare. Pick a poem that shares the theme but takes a different approach, tone, or perspective — this gives you much more to write about.</div>

<h3>Section C: Unseen Poetry (roughly 30 minutes)</h3>

<p>You will see a poem you have never read before and answer two questions. Question 1 (24 marks) asks you to analyse the poem. Question 2 (8 marks) asks you to compare it briefly with a second unseen poem. Do not panic — the poems chosen for unseen are always accessible. Read the poem three times: once for overall meaning, once for interesting language, once for structure and form.</p>

<div class="model-answer"><div class="model-answer-header">THREE-READ STRATEGY FOR UNSEEN POETRY</div>
<p><strong>Read 1:</strong> What is the poem about on the surface? Who is speaking? What is happening?</p>
<p><strong>Read 2:</strong> Underline striking words, images, and techniques. What patterns do you notice?</p>
<p><strong>Read 3:</strong> Look at structure — line lengths, stanza breaks, enjambment, the ending. How does the form support the meaning?</p>
</div>`,
      quiz: [
        { id: 'gcse-rb-m5-q1', question: 'What is unique about the Modern Text section compared to other Literature sections?', options: ['It is the longest section', 'There is no extract — you must recall quotations from memory', 'You must compare two texts', 'It only tests context knowledge'], correct: 1, explanation: 'The Modern Text section provides no extract. You must recall quotations from memory, which is why memorising 10-15 short quotations per character or theme is essential.' },
        { id: 'gcse-rb-m5-q2', question: 'When choosing a poem to compare with the printed anthology poem, what should you consider?', options: ['Choose the poem you know best, regardless of theme', 'Choose a poem with the same theme but a different approach or perspective', 'Always choose the shortest poem', 'Choose a poem by the same poet'], correct: 1, explanation: 'Pick a poem that shares the theme but takes a different approach. This contrast gives you plenty of material for comparison. Two poems that are too similar leave you with little to say.' },
        { id: 'gcse-rb-m5-q3', question: 'How many times should you read an unseen poem before writing?', options: ['Once quickly', 'Twice — for meaning and language', 'Three times — meaning, language, then structure', 'As many times as possible'], correct: 2, explanation: 'The three-read strategy covers all bases: Read 1 for overall meaning, Read 2 for language and techniques, Read 3 for structure and form. This systematic approach prevents you from missing key features.' },
        { id: 'gcse-rb-m5-q4', question: 'If you cannot remember an exact quotation in the Modern Text section, what should you do?', options: ['Leave a blank space', 'Make up a quotation', 'Paraphrase and say "the writer describes..."', 'Skip that point entirely'], correct: 2, explanation: 'Paraphrasing is always better than leaving a gap. You keep the marks for your analytical point even if you lose a mark for quotation precision. The examiner rewards your ideas, not just your memory.' },
      ],
    },
    {
      id: 'gcse-rb-m6',
      title: 'Grade Booster: Language',
      duration: '30 mins',
      content: `<h2>Grade Booster: 10 Quick Wins for Language Papers</h2>
<p>These are the fastest, most reliable ways to push your Language grade up. Every tip here targets something examiners actively reward — or a common error that drags marks down. Nail these and you add marks to every question.</p>

<h3>Quick Wins for Reading</h3>

<p><strong>1. Zoom in on single words.</strong> The best answers analyse individual word choices. Instead of saying "the writer uses descriptive language," say "the verb 'shattered' connotes sudden, irreversible destruction." This is the difference between Grade 5 and Grade 8.</p>

<p><strong>2. Name the effect on the reader.</strong> Every analytical point should end with the reader. "This makes the reader feel..." or "This forces the reader to consider..." The examiner wants to see you understand that texts are designed to provoke a response.</p>

<p><strong>3. Use subject terminology precisely.</strong> Do not just say "metaphor" — say what kind and why it matters. "The extended metaphor of war throughout the paragraph frames the argument as a battle, positioning the reader as an ally." Terminology must serve your analysis, not replace it.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners call it "terminology for the sake of terminology" when students label techniques without analysing them. Saying "this is a simile" earns zero marks. Saying "this simile compares X to Y, which suggests Z because..." earns full marks. Always explain the WHY.</div>

<p><strong>4. Address structure confidently.</strong> Many students skip or rush the structure question. Use this vocabulary: focus shifts, pace changes, narrative perspective, chronological/non-chronological, cyclical structure, contrast, juxtaposition, climax. Structure is about movement — how the writer takes the reader on a journey through the text.</p>

<p><strong>5. Use tentative language for evaluation.</strong> In Question 4, phrases like "it could be argued," "one interpretation is," and "perhaps the writer intends" show sophisticated thinking. Avoid being too absolute — literature is about possibilities, not certainties.</p>

<h3>Quick Wins for Writing</h3>

<p><strong>6. Vary your sentence openings.</strong> Start sentences with adverbs ("Reluctantly,"), prepositional phrases ("Beneath the surface,"), or -ing words ("Trembling, she stepped forward."). This instantly makes your writing more engaging.</p>

<p><strong>7. Use one-sentence paragraphs for impact.</strong> A single short sentence after a long descriptive paragraph creates a dramatic pause. "And then — silence." Use this technique once or twice per piece for maximum effect.</p>

<p><strong>8. Semicolons are your friend.</strong> Using a semicolon correctly shows the examiner you have a sophisticated grasp of punctuation. "The forest was silent; not even the birds dared to sing." Practise this — it is one of the easiest ways to hit the top band for technical accuracy.</p>

<div class="key-term"><strong>Key Term: Crafting</strong> — Deliberate, conscious choices in your writing. Examiners look for evidence that you have chosen words and structures for effect, not just written the first thing that came to mind. Ambitious vocabulary, varied punctuation, and purposeful structure all signal crafting.</div>

<p><strong>9. Proofread for the five killer errors.</strong> These cost the most marks: comma splices, missing apostrophes, their/there/they're confusion, inconsistent tense, and missing capital letters. Read your work backwards sentence by sentence to catch them — it forces your brain to focus on grammar rather than meaning.</p>

<p><strong>10. End powerfully.</strong> Your last sentence is the examiner's last impression. For descriptive writing, end on a striking image. For argumentative writing, end on a call to action or a provocative question. Never end with "In conclusion" — it is flat and forgettable.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Using sophisticated vocabulary incorrectly. "The protagonist was very loquacious" sounds impressive, but if you do not know what "loquacious" means and use it in the wrong context, you lose marks for accuracy. Only use words you are confident about.</div>`,
      quiz: [
        { id: 'gcse-rb-m6-q1', question: 'What is the difference between Grade 5 and Grade 8 language analysis?', options: ['Grade 8 answers are longer', 'Grade 8 answers zoom in on individual word choices and explain their effects', 'Grade 8 answers use more quotations', 'Grade 8 answers always disagree with the writer'], correct: 1, explanation: 'The key difference is precision. Grade 8 answers analyse individual words and their connotations, while Grade 5 answers tend to make general comments about "descriptive language" without zooming in.' },
        { id: 'gcse-rb-m6-q2', question: 'Which of these is a "killer error" that costs marks in writing?', options: ['Using short paragraphs', 'Comma splices', 'Starting sentences with "And"', 'Using dialogue'], correct: 1, explanation: 'Comma splices (joining two sentences with just a comma instead of a full stop, semicolon, or conjunction) are one of the five most penalised errors. They signal weak punctuation control.' },
        { id: 'gcse-rb-m6-q3', question: 'How should you use subject terminology in your answers?', options: ['Label every technique you can spot', 'Only use terminology when you can explain WHY the technique creates its effect', 'Avoid terminology completely', 'Use as many technical terms as possible in every sentence'], correct: 1, explanation: 'Terminology must serve your analysis. Labelling a technique without explaining its effect earns nothing. Always follow the technique with an explanation of why the writer chose it and how it affects the reader.' },
        { id: 'gcse-rb-m6-q4', question: 'What is the best way to proofread your writing for grammar errors?', options: ['Read it through once quickly', 'Read it backwards sentence by sentence', 'Ask the person next to you to check it', 'Only check the first paragraph'], correct: 1, explanation: 'Reading backwards forces your brain to focus on each sentence as an isolated unit, making it much easier to spot grammar and punctuation errors. Reading forwards, your brain fills in gaps and misses mistakes.' },
      ],
    },
    {
      id: 'gcse-rb-m7',
      title: 'Grade Booster: Literature',
      duration: '30 mins',
      content: `<h2>Grade Booster: 10 Quick Wins for Literature Papers</h2>
<p>Literature exams reward deep thinking, strong textual knowledge, and the ability to connect ideas to their wider context. Here are ten targeted strategies to lift your Literature grade fast.</p>

<h3>Quick Wins for Analysis</h3>

<p><strong>1. Learn short, versatile quotations.</strong> The most efficient revision strategy for Literature is memorising short quotations (3-7 words) that connect to multiple themes. For example, Lady Macbeth's "unsex me here" links to gender, power, ambition, and the supernatural — four themes from one quotation.</p>

<div class="key-term"><strong>Key Term: Versatile quotation</strong> — A short quotation that can be applied to multiple themes or characters. These are gold dust in an exam because one memorised quotation can serve you across different possible questions.</div>

<p><strong>2. Always comment on the writer's purpose.</strong> Why did the writer create this character, this scene, this ending? "Priestley uses the Inspector as a mouthpiece for socialist ideas" is stronger than "The Inspector says everyone should help each other." Show you understand the text as a constructed piece of art with a deliberate message.</p>

<p><strong>3. Use alternative interpretations.</strong> "One reading of this is...however, it could alternatively suggest..." This immediately moves you into the top mark bands. Examiners reward students who can hold two ideas in tension rather than settling for one simple reading.</p>

<p><strong>4. Link quotations in clusters.</strong> Instead of using one quotation per point, group 2-3 related quotations: "The motif of blood recurs through 'bloody instructions,' 'blood will have blood,' and Lady Macbeth's obsessive hand-washing, showing how guilt becomes inescapable." This demonstrates breadth of knowledge.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The word "perhaps" is one of the most powerful words in a Literature essay. "Perhaps Shakespeare suggests that ambition is not inherently evil, but becomes destructive when it overrides moral conscience." This shows nuanced, exploratory thinking — exactly what examiners reward at the highest levels.</div>

<h3>Quick Wins for Context</h3>

<p><strong>5. Make context earn its place.</strong> Every contextual point must connect to your analysis. Bad: "In the 1940s, there was a class divide." Good: "Priestley highlights the Birlings' wilful ignorance of working-class suffering, challenging the complacent attitudes of post-war audiences who might have held similar views." Context must illuminate the text, not sit beside it.</p>

<p><strong>6. Use authorial intent as your context vehicle.</strong> Phrases like "Shelley intends the reader to question..." or "Dickens challenges his audience to consider..." weave context naturally into your argument. The author's purpose IS context in action.</p>

<p><strong>7. Know three key contextual facts per text.</strong> You do not need an A-level history essay. Three well-chosen facts — linked to social class, gender, religion, politics, or the author's life — are enough to hit the top bands if you use them well.</p>

<h3>Quick Wins for Structure and Technique</h3>

<p><strong>8. Comment on form and genre.</strong> "Shakespeare uses the soliloquy to reveal Macbeth's private torment, allowing the audience direct access to his conscience." Discussing WHY a writer uses a particular form (sonnet, soliloquy, dramatic irony, the morality play structure) is a top-band skill that most students overlook.</p>

<p><strong>9. Track character arcs.</strong> Show how a character changes across the text. "At the start, Scrooge is presented as 'hard and sharp as flint'; by the end, he is 'as good a friend...as the good old city knew.' This transformation embodies Dickens's message that redemption is always possible." Tracking change demonstrates whole-text knowledge.</p>

<p><strong>10. Write a purposeful conclusion.</strong> Your conclusion should not just repeat your essay. Instead, zoom out: What is the writer's ultimate message? Why does it still matter today? "Ultimately, Shakespeare presents ambition as a force that consumes identity itself — a warning as relevant to modern audiences as it was in 1606." This leaves the examiner with a strong final impression.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> "Feature spotting" — listing techniques without explaining their significance. Saying "Shakespeare uses iambic pentameter" is worthless unless you explain why: "The disruption of iambic pentameter in Macbeth's later speeches mirrors his psychological disintegration." Always connect technique to meaning.</div>`,
      quiz: [
        { id: 'gcse-rb-m7-q1', question: 'What makes a quotation "versatile"?', options: ['It is very long and detailed', 'It can be applied to multiple themes or questions', 'It comes from the most important scene', 'It contains a literary technique'], correct: 1, explanation: 'A versatile quotation links to multiple themes, so one memorised quotation can serve you across different questions. This is the most efficient revision strategy for Literature.' },
        { id: 'gcse-rb-m7-q2', question: 'How should context be used in a Literature essay?', options: ['As a separate paragraph of historical facts', 'Woven into analysis and directly connected to the text and question', 'Only when the question mentions context', 'As the opening sentence of every paragraph'], correct: 1, explanation: 'Context must illuminate the text. Weave contextual points into your analysis so they directly support your argument about the text, rather than sitting as standalone historical facts.' },
        { id: 'gcse-rb-m7-q3', question: 'Why is the word "perhaps" powerful in a Literature essay?', options: ['It makes your answer longer', 'It shows tentative, exploratory thinking that considers multiple interpretations', 'It avoids the need for evidence', 'It is a command word'], correct: 1, explanation: '"Perhaps" signals nuanced thinking — you are exploring possibilities rather than making simplistic claims. This is exactly what examiners reward at the highest mark bands.' },
        { id: 'gcse-rb-m7-q4', question: 'What is "feature spotting" and why should you avoid it?', options: ['Finding hidden details in the text — it is a useful skill', 'Listing techniques without explaining their significance — it earns no marks', 'Identifying themes across multiple texts — it is too time-consuming', 'Spotting errors in the exam paper — it wastes time'], correct: 1, explanation: 'Feature spotting means labelling techniques (like "this is a metaphor") without explaining why the writer used them or what effect they create. It earns zero analytical marks.' },
      ],
    },
    {
      id: 'gcse-rb-m8',
      title: 'The Night Before: Final Checklist',
      duration: '15 mins',
      content: `<h2>The Night Before: Your Final Checklist</h2>
<p>It is the night before the exam. You have done the work. Now your job is to protect what you already know, stay calm, and set yourself up for the best possible performance tomorrow. This module is your game plan.</p>

<h3>What to Revise Tonight</h3>
<p>Do NOT try to learn anything new. Your brain cannot absorb and retain new material under pressure. Instead, do these three things:</p>
<ul>
<li><strong>Read through your quotation list</strong> — just read, do not test yourself aggressively. Let the words wash over you. Your brain will consolidate them while you sleep.</li>
<li><strong>Review your key terminology</strong> — metaphor, dramatic irony, sibilance, juxtaposition, cyclical structure. Remind yourself what they mean and when to use them.</li>
<li><strong>Re-read one model answer</strong> — ideally one you wrote yourself that scored well. This puts the right style and structure into your short-term memory.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The students who perform best on exam day are not the ones who revised until 2am. They are the ones who stopped at a sensible time, slept well, and arrived calm and alert. Sleep is when your brain transfers information from short-term to long-term memory. Cutting sleep to cram is literally counterproductive.</div>

<h3>What NOT to Cram</h3>
<p>Do not try to memorise new quotations you have never practised using. Do not re-read entire set texts. Do not start a past paper at 10pm. Do not read revision guides cover-to-cover. All of these create the illusion of productivity while actually increasing anxiety and confusion. Trust what you have already learned.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Staying up late in a panic, trying to learn everything. This destroys your concentration the next day. The marks you might gain from last-minute cramming are far fewer than the marks you will lose from fatigue, poor handwriting, and muddled thinking.</div>

<h3>Exam Day Routine</h3>
<ul>
<li><strong>Morning:</strong> Eat breakfast — your brain needs fuel. Porridge, toast, eggs — anything substantial. Avoid excess caffeine if you are not used to it; it can increase anxiety.</li>
<li><strong>Journey:</strong> Arrive 15 minutes early. Rushing raises your stress levels before you even sit down. Listen to music that calms you, not music that hypes you up.</li>
<li><strong>Before the exam:</strong> Avoid friends who are panicking. Their stress is contagious. Find a quiet spot, glance at your quotation sheet one more time, then put it away.</li>
<li><strong>In the exam room:</strong> Read the paper slowly. Do not start writing for at least two minutes. Breathe. Choose your questions carefully. Write your time plan in the margin.</li>
</ul>

<h3>Stress Management: The 4-7-8 Technique</h3>
<p>If you feel panic rising during the exam, use this breathing technique: breathe in for 4 seconds, hold for 7 seconds, breathe out for 8 seconds. Repeat three times. This activates your parasympathetic nervous system and physically reduces anxiety. It takes less than a minute and nobody will notice you doing it.</p>

<div class="key-term"><strong>Key Term: Exam readiness</strong> — The state of being mentally prepared, physically rested, and logistically organised for an exam. It is not about knowing everything — it is about being in the best possible condition to use what you know. Readiness beats last-minute cramming every time.</div>

<p><strong>One final thought:</strong> You have studied these texts for two years. You know more than you think you do. The exam is not a test of everything — it is a test of how well you apply what you know to the specific questions in front of you. Stay focused, stay calm, and show the examiner what you can do. You have got this.</p>`,
      quiz: [
        { id: 'gcse-rb-m8-q1', question: 'What should you revise the night before the exam?', options: ['New quotations you have not studied before', 'Your quotation list, key terminology, and one model answer', 'The entire set text from beginning to end', 'A brand new past paper'], correct: 1, explanation: 'The night before, review what you already know: your quotation list, key terminology, and one strong model answer. Do not try to learn new material — it will not stick and will increase anxiety.' },
        { id: 'gcse-rb-m8-q2', question: 'Why is sleep more important than late-night cramming?', options: ['It is not — you should study as late as possible', 'Sleep transfers information from short-term to long-term memory', 'You need to dream about the exam', 'Sleep only matters if the exam is in the morning'], correct: 1, explanation: 'During sleep, your brain consolidates memories and transfers them to long-term storage. Cutting sleep to cram actually undermines your ability to recall information the next day.' },
        { id: 'gcse-rb-m8-q3', question: 'What is the 4-7-8 breathing technique?', options: ['Breathe in for 4 seconds, hold for 7, breathe out for 8', 'Read the question 4 times, plan for 7 minutes, write for 8 minutes', 'Answer 4 questions in 7-8 minutes each', 'Revise for 4 hours, rest for 7, sleep for 8'], correct: 0, explanation: 'The 4-7-8 technique (breathe in 4 seconds, hold 7, out 8) activates your parasympathetic nervous system and physically reduces anxiety. It takes under a minute and can be done silently during the exam.' },
        { id: 'gcse-rb-m8-q4', question: 'What should you do in the first two minutes after receiving the exam paper?', options: ['Start writing immediately to save time', 'Read the paper slowly, breathe, choose questions carefully, and write a time plan', 'Read the hardest question first', 'Check what your classmates are doing'], correct: 1, explanation: 'Spending two minutes reading the paper, breathing, choosing questions, and writing a time plan in the margin prevents rushed mistakes and ensures you tackle the right questions in the right order.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'gcse-rb-a1', question: 'What is the recommended time allocation rule for exam questions?', options: ['Two minutes per mark', 'Roughly one minute per mark', 'Equal time for every question', 'All time on the highest-mark question'], correct: 1, explanation: 'Spending roughly one minute per mark ensures high-mark questions get the time they deserve and low-mark questions do not eat into your writing time.' },
    { id: 'gcse-rb-a2', question: 'On Language Paper 1, Question 1, what are you asked to do?', options: ['Analyse the writer\'s use of language', 'Write a creative piece', 'List four things from the text', 'Compare two sources'], correct: 2, explanation: 'Question 1 is a simple retrieval task: list four things from the specified lines. No analysis needed. It is worth 4 marks and should take about 5 minutes.' },
    { id: 'gcse-rb-a3', question: 'What is the key difference between Language Paper 1 and Paper 2?', options: ['Paper 1 is longer', 'Paper 2 uses two non-fiction texts and requires comparison', 'Paper 2 has no writing section', 'Paper 1 is only about poetry'], correct: 1, explanation: 'Paper 1 uses one fiction extract; Paper 2 uses two non-fiction texts and requires you to compare writers\' viewpoints and methods.' },
    { id: 'gcse-rb-a4', question: 'In a Language Paper 2 comparison answer, what must you avoid?', options: ['Using comparative connectives', 'Writing about Source A and Source B in separate halves instead of weaving them together', 'Discussing both writers\' methods', 'Using quotations from both texts'], correct: 1, explanation: 'Writing about each source in separate blocks is not comparison. Every paragraph should discuss both sources, using comparative connectives to weave the analysis together.' },
    { id: 'gcse-rb-a5', question: 'What does "extract-to-whole" mean in a Literature essay?', options: ['Only analyse the extract', 'Analyse the extract first, then discuss the wider text', 'Ignore the extract completely', 'Quote the entire extract in your answer'], correct: 1, explanation: 'Extract-to-whole means starting with detailed analysis of the printed extract, then broadening to discuss how the theme or character appears elsewhere in the text.' },
    { id: 'gcse-rb-a6', question: 'How should you refer to the writer in a Literature essay?', options: ['By first name only', 'By surname with active verbs like "presents" or "suggests"', 'Do not mention the writer at all', 'Use "the book says" instead'], correct: 1, explanation: 'Using the author\'s surname with deliberate verbs shows awareness of authorial intent — the understanding that the text was crafted on purpose.' },
    { id: 'gcse-rb-a7', question: 'What is a "versatile quotation"?', options: ['A very long quotation', 'A short quotation that links to multiple themes', 'A quotation from the exam paper', 'A quotation used by the examiner'], correct: 1, explanation: 'Versatile quotations are short (3-7 words) and link to multiple themes, making them useful across different possible exam questions.' },
    { id: 'gcse-rb-a8', question: 'In the Literature Paper 2 modern text section, why is memorisation important?', options: ['The exam is open book', 'There is no extract provided — you must recall quotations from memory', 'You need to write out the entire text', 'Memorisation is not important for this section'], correct: 1, explanation: 'Unlike other Literature sections, the modern text question provides no extract. You must remember quotations and use them from memory.' },
    { id: 'gcse-rb-a9', question: 'What is the three-read strategy for unseen poetry?', options: ['Read for meaning, then language, then structure', 'Read the title, the first line, and the last line', 'Read it once and start writing immediately', 'Read three different poems before choosing one'], correct: 0, explanation: 'Read 1: overall meaning. Read 2: underline striking language and techniques. Read 3: examine structure, form, and line arrangement. This systematic approach ensures thorough analysis.' },
    { id: 'gcse-rb-a10', question: 'What does "zooming in on single words" mean in language analysis?', options: ['Using a magnifying glass on the text', 'Analysing individual word choices and their connotations rather than making general comments', 'Counting how many times a word appears', 'Only quoting one word per answer'], correct: 1, explanation: 'Zooming in means selecting a single word and exploring its connotations, effects, and significance. This precision is what separates top-band answers from mid-range ones.' },
    { id: 'gcse-rb-a11', question: 'Why should every analytical point reference the reader?', options: ['Because the reader wrote the text', 'Because texts are designed to provoke a response, and examiners want to see you understand this', 'Because it makes your answer longer', 'Because it is a rule of English grammar'], correct: 1, explanation: 'Writers craft texts to affect readers. Explaining the impact on the reader ("This makes the reader feel...") shows you understand the purpose of literary techniques.' },
    { id: 'gcse-rb-a12', question: 'What are the "five killer errors" in writing?', options: ['Spelling, vocabulary, tone, length, and handwriting', 'Comma splices, missing apostrophes, their/there/they\'re, inconsistent tense, missing capitals', 'Using short sentences, repeating words, starting with "I", using "nice", ending with "The End"', 'Metaphor, simile, alliteration, personification, and onomatopoeia'], correct: 1, explanation: 'These five errors — comma splices, missing apostrophes, homophones, tense shifts, and missing capitals — are the most common technical mistakes and cost the most marks for accuracy.' },
    { id: 'gcse-rb-a13', question: 'How should context be integrated into a Literature essay?', options: ['As a standalone paragraph of historical facts', 'Woven into analysis and directly linked to the text', 'Only in the introduction', 'It should not be included at all'], correct: 1, explanation: 'Context is most effective when embedded in analysis. Connect it directly to your points about the text rather than writing a separate block of historical information.' },
    { id: 'gcse-rb-a14', question: 'What is "feature spotting" and why is it a problem?', options: ['Identifying key themes — it is helpful', 'Listing techniques without explaining their effect — it earns no analytical marks', 'Finding mistakes in the text — it wastes time', 'Memorising literary features — it is too difficult'], correct: 1, explanation: 'Feature spotting means labelling techniques without analysis. Saying "this is a metaphor" earns nothing; explaining why the metaphor was used and its effect on the reader earns marks.' },
    { id: 'gcse-rb-a15', question: 'What is the best way to end a creative writing piece?', options: ['Write "The End"', 'End with a striking image or thought-provoking line', 'Summarise everything that happened', 'End mid-sentence for dramatic effect'], correct: 1, explanation: 'A powerful final image or thought-provoking line leaves a strong lasting impression. Avoid flat endings like "In conclusion" or "The End" — make your final words memorable.' },
    { id: 'gcse-rb-a16', question: 'In Language Paper 1, Question 3, what are you analysing?', options: ['Language techniques', 'The writer\'s use of structure', 'The historical context', 'Spelling and grammar'], correct: 1, explanation: 'Question 3 focuses on structure: how the writer moves the reader through the text using focus shifts, pace changes, paragraph structure, and other organisational choices.' },
    { id: 'gcse-rb-a17', question: 'Why is the word "perhaps" valuable in a Literature essay?', options: ['It avoids the need for evidence', 'It signals exploratory, nuanced thinking that considers multiple interpretations', 'It makes sentences grammatically correct', 'It is required by the mark scheme'], correct: 1, explanation: '"Perhaps" shows you can consider multiple interpretations rather than making simplistic claims. This exploratory thinking is rewarded at the highest mark bands.' },
    { id: 'gcse-rb-a18', question: 'What should you do the night before the exam?', options: ['Stay up and learn new material', 'Review your quotation list, key terms, and one model answer, then sleep well', 'Read the entire set text cover to cover', 'Start a new past paper at 11pm'], correct: 1, explanation: 'The night before, review what you already know briefly, then prioritise sleep. Your brain consolidates memories during sleep, so rest is more productive than last-minute cramming.' },
    { id: 'gcse-rb-a19', question: 'What is the 4-7-8 breathing technique used for?', options: ['Timing your exam answers', 'Reducing anxiety during the exam by activating the parasympathetic nervous system', 'Counting paragraphs in your essay', 'Pacing your reading speed'], correct: 1, explanation: 'Breathing in for 4 seconds, holding for 7, and exhaling for 8 activates the body\'s calming response. It takes under a minute and can be done silently if panic arises during the exam.' },
    { id: 'gcse-rb-a20', question: 'For creative writing on Language Paper 1, what common mistake costs the most marks?', options: ['Using too much dialogue', 'Writing a plot-heavy story instead of focusing on quality description and language', 'Making the piece too short', 'Writing in first person'], correct: 1, explanation: 'Examiners reward quality of writing — vocabulary, sentence variety, sensory detail, crafted structure. A single well-described scene scores far higher than a rushed, plot-heavy story with five events and no descriptive depth.' },
  ],
};

export const gcseCourses: CourseData[] = [gcseLangReading, gcseLangWriting, gcseLitPoetry, gcseLitProse, gcseRevisionBlitz];
