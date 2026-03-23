import type { CourseData, CourseModule, CourseQuiz } from './courses';

// ═══════════════════════════════════════════════════════════════════════════════
// CAIE Literature — Poetry Anthology  (0475 / 0992)
// ═══════════════════════════════════════════════════════════════════════════════

const poetryModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — The Songs of Ourselves Anthology
  // ──────────────────────────────────────────────
  {
    id: 'caie-poetry-m1',
    title: 'Approaching the Songs of Ourselves Anthology',
    duration: '55 min',
    content: `
<h2>The Songs of Ourselves Anthology: Your Foundation for CAIE Poetry</h2>

<p>The Cambridge IGCSE Literature in English syllabus (0475/0992) uses the <strong>Songs of Ourselves</strong> anthology as its core poetry text. This is a carefully curated collection of poems from a wide range of periods, cultures, and traditions. Understanding how to navigate and study this anthology is your first step toward exam success.</p>

<div class="key-term"><strong>Key Term: Anthology</strong> — A published collection of poems (or other literary works) selected by editors. The <em>Songs of Ourselves</em> anthology is divided into volumes, and your teacher will direct you to the specific section set for examination in your session.</div>

<h3>How the Anthology Works in the Exam</h3>
<p>For Paper 1 (Poetry and Prose), you will answer one question on a poem from the anthology. The question will typically present a <strong>printed extract</strong> of the poem and ask you to analyse it in detail. You are expected to demonstrate:</p>
<ul>
  <li><strong>AO1</strong> — Detailed knowledge of the poem, with well-selected textual references</li>
  <li><strong>AO2</strong> — Understanding of how meanings are shaped by context (literary, historical, cultural)</li>
  <li><strong>AO3</strong> — Analysis of language, structure, and form and how they create effects</li>
  <li><strong>AO4</strong> — A developed personal response that engages critically with the text</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For CAIE, all four Assessment Objectives carry <strong>equal weight</strong> (25% each). Unlike some UK boards, you cannot afford to neglect any single AO. Your response must balance textual knowledge, contextual understanding, language analysis, and personal engagement.</div>

<h3>Understanding the Anthology's Structure</h3>
<p>The <em>Songs of Ourselves</em> is organised into thematic or chronological groupings. Each section contains poems linked by broad themes — such as <strong>identity</strong>, <strong>conflict</strong>, <strong>nature</strong>, <strong>love</strong>, or <strong>mortality</strong>. Recognising these thematic connections is vital because exam questions often invite you to explore how a particular theme is presented.</p>

<p>The poems span centuries, from Renaissance verse to contemporary writing, and include voices from across the English-speaking world — Britain, the Caribbean, Africa, South Asia, and Australasia. This diversity is deliberate: CAIE values your ability to engage with <strong>unfamiliar perspectives</strong> and to understand how cultural context shapes meaning.</p>

<h3>A Systematic Approach to Each Poem</h3>
<p>When studying a poem from the anthology for the first time, work through these layers:</p>

<h4>Layer 1: Literal Meaning</h4>
<p>Before you can analyse a poem, you must understand what it is saying on a surface level. Read the poem through without stopping. Ask yourself: <em>Who is speaking? To whom? About what? What is the situation or scenario?</em></p>

<h4>Layer 2: Tone and Mood</h4>
<p>On your second reading, consider the emotional register. Is the speaker angry, reflective, sorrowful, celebratory, ironic? How does the tone shift across the poem? Identifying tonal shifts is one of the most effective ways to demonstrate sophisticated reading.</p>

<h4>Layer 3: Language and Imagery</h4>
<p>Now examine the poet's choices at word level. Look for patterns of imagery — are there recurring metaphors, symbols, or semantic fields? Consider the connotations of individual words, not just their denotations. Why has the poet chosen <em>this</em> word rather than a synonym?</p>

<h4>Layer 4: Form and Structure</h4>
<p>Examine how the poem is constructed. Consider stanza length, line length, rhyme scheme, metre, enjambment, caesura, and the overall shape of the poem on the page. These are not decorative features — they actively create meaning.</p>

<h4>Layer 5: Context and Connections</h4>
<p>Finally, consider the poem's context. When was it written? What cultural or historical circumstances might have influenced the poet? How does the poem connect to broader literary traditions? For CAIE, contextual understanding (AO2) is equally weighted with the other AOs, so this layer is not optional.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating contextual information as a bolt-on paragraph at the start or end of your essay. CAIE examiners want to see context <strong>integrated</strong> into your analysis — for example, explaining how a post-colonial poet's word choice reflects their cultural position, rather than simply stating biographical facts.</div>

<h3>Building Your Anthology Notes</h3>
<p>For each poem, create a one-page study sheet that includes:</p>
<ul>
  <li><strong>Summary</strong> — Two or three sentences on the poem's subject and situation</li>
  <li><strong>Key quotations</strong> — Five to eight short, analysable phrases</li>
  <li><strong>Key techniques</strong> — The three or four most important language/form/structure features</li>
  <li><strong>Themes</strong> — The two or three main themes the poem addresses</li>
  <li><strong>Context</strong> — One or two sentences on relevant background</li>
  <li><strong>Personal response</strong> — Your own reaction or interpretation, expressed critically</li>
</ul>

<p>These study sheets become your revision toolkit. Review them regularly and test yourself on quotations.</p>
`,
    quiz: [
      {
        id: 'caie-poetry-m1-q1',
        question: 'How are the four CAIE Literature Assessment Objectives weighted?',
        options: [
          'AO1 and AO2 carry more weight than AO3 and AO4',
          'AO1 carries the most weight at 40%',
          'All four AOs carry equal weight at 25% each',
          'AO3 (language analysis) is double-weighted',
        ],
        correct: 2,
        explanation: 'In the CAIE 0475/0992 specification, all four Assessment Objectives are equally weighted at 25% each. This means you must balance textual knowledge, contextual understanding, language/form/structure analysis, and personal response in every answer.',
      },
      {
        id: 'caie-poetry-m1-q2',
        question: 'What is the recommended first step when studying a new anthology poem?',
        options: [
          'Identify every literary device before reading the whole poem',
          'Read the poem through to understand its literal meaning',
          'Research the poet\'s biography in detail',
          'Compare it immediately with another poem',
        ],
        correct: 1,
        explanation: 'Understanding the literal meaning — who is speaking, to whom, about what — provides the necessary foundation for all subsequent layers of analysis. Without surface comprehension, deeper analysis will be inaccurate.',
      },
      {
        id: 'caie-poetry-m1-q3',
        question: 'Why does the Songs of Ourselves anthology include poets from across the English-speaking world?',
        options: [
          'To make the anthology longer and more impressive',
          'Because CAIE values engagement with diverse perspectives and understanding how cultural context shapes meaning',
          'Because British poetry alone is not sufficient for an exam',
          'To test whether students can read unfamiliar dialects',
        ],
        correct: 1,
        explanation: 'CAIE deliberately includes voices from Britain, the Caribbean, Africa, South Asia, and Australasia to test candidates\' ability to engage with diverse cultural perspectives and understand how context influences literary meaning.',
      },
      {
        id: 'caie-poetry-m1-q4',
        question: 'How should contextual information (AO2) be used in a CAIE Literature essay?',
        options: [
          'As a separate introductory paragraph listing historical facts',
          'Only if the question specifically asks about context',
          'Integrated into the analysis, connecting context to the poet\'s language choices',
          'As a concluding paragraph after all textual analysis is complete',
        ],
        correct: 2,
        explanation: 'CAIE examiners reward context that is woven into your analysis — for example, explaining how a post-colonial poet\'s word choice reflects their cultural position. Bolt-on context paragraphs that read like history notes do not earn strong AO2 marks.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Poetry Analysis Techniques
  // ──────────────────────────────────────────────
  {
    id: 'caie-poetry-m2',
    title: 'Poetry Analysis: Form, Structure, and Language',
    duration: '60 min',
    content: `
<h2>Mastering the Tools of Poetry Analysis</h2>

<p>At the heart of a strong CAIE Literature response is your ability to analyse <strong>how</strong> a poet creates meaning. This module equips you with the analytical vocabulary and frameworks you need to discuss form, structure, and language with precision and confidence. These skills address <strong>AO3</strong> directly, but they also support every other Assessment Objective.</p>

<h3>Language: The Poet's Word Choices</h3>
<p>Language analysis is the most immediate form of close reading. You are examining the poet's selection of individual words and phrases and explaining what effects they create.</p>

<h4>Imagery</h4>
<p>Imagery is the use of language to create pictures in the reader's mind. The major types you must know are:</p>
<ul>
  <li><strong>Simile</strong> — A direct comparison using "like" or "as". Example: "My love is like a red, red rose" (Burns). The explicitness of the comparison invites the reader to consider the qualities being transferred.</li>
  <li><strong>Metaphor</strong> — An implied comparison that states one thing <em>is</em> another. Example: "The sea is a hungry dog" (Reeves). Metaphors are generally more powerful than similes because they assert identity rather than resemblance.</li>
  <li><strong>Personification</strong> — Giving human qualities to non-human things. Example: "Death, be not proud" (Donne). This can make abstract concepts vivid and tangible.</li>
  <li><strong>Symbolism</strong> — An object, colour, or image that represents something beyond its literal meaning. Symbols can be conventional (a dove for peace) or personal to the poet.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Identifying a technique is never enough. You must explain <em>what effect</em> it creates. "The poet uses a metaphor" earns nothing. "The metaphor of the 'hungry dog' conveys the sea's relentless, predatory power, personifying it as a creature driven by instinct" — this is analysis.</div>

<h4>Diction and Connotation</h4>
<p><strong>Diction</strong> refers to the poet's word choice. Every word carries connotations — associations and emotional resonances beyond its dictionary definition. When analysing diction, consider:</p>
<ul>
  <li>Is the language <strong>formal or colloquial</strong>? What does this tell us about the speaker?</li>
  <li>Are there words from a particular <strong>semantic field</strong> (a group of words related by meaning, such as war, nature, or religion)?</li>
  <li>Does the poet use <strong>archaic</strong> or <strong>contemporary</strong> language? Why?</li>
  <li>Are there <strong>monosyllabic</strong> or <strong>polysyllabic</strong> words dominating? Monosyllables can create bluntness and force; polysyllables can create flowing musicality.</li>
</ul>

<h4>Sound Devices</h4>
<p>Poetry is an oral art form. Sound patterns contribute to meaning:</p>
<ul>
  <li><strong>Alliteration</strong> — Repetition of initial consonant sounds ("the furrow followed free"). Creates emphasis, rhythm, or connection between ideas.</li>
  <li><strong>Assonance</strong> — Repetition of vowel sounds within words ("the rain in Spain"). Creates internal harmony and musicality.</li>
  <li><strong>Sibilance</strong> — Repetition of "s" sounds. Often creates a sinister, whispering, or soothing effect depending on context.</li>
  <li><strong>Onomatopoeia</strong> — Words whose sound imitates their meaning ("buzz", "crash"). Creates sensory immediacy.</li>
  <li><strong>Plosive consonants</strong> — Hard sounds like "b", "d", "p", "t" that create a forceful, explosive effect.</li>
</ul>

<h3>Form: The Shape of the Poem</h3>
<p><strong>Form</strong> refers to the type or genre of poem and its overall design. Recognising form helps you understand the poet's intentions and the traditions they are working within — or against.</p>

<h4>Key Forms to Know</h4>
<ul>
  <li><strong>Sonnet</strong> — 14 lines, traditionally in iambic pentameter. Petrarchan (octave + sestet) or Shakespearean (three quatrains + couplet). Used for love, mortality, philosophical argument.</li>
  <li><strong>Free verse</strong> — No regular metre or rhyme scheme. The absence of formal constraint can itself be meaningful — suggesting freedom, modernity, or disruption of tradition.</li>
  <li><strong>Dramatic monologue</strong> — A single speaker addresses a silent listener. The reader must infer the full situation from what the speaker reveals (and conceals). Robert Browning is the master of this form.</li>
  <li><strong>Ballad</strong> — A narrative poem, often in quatrains with an ABAB or ABCB rhyme scheme. Traditionally oral, with repetition and a strong rhythmic pulse.</li>
  <li><strong>Ode</strong> — A formal, celebratory poem addressing a person, object, or abstract concept. Keats's odes are the most famous examples in English.</li>
  <li><strong>Lyric</strong> — A short poem expressing personal emotion. Most poems in the anthology are lyrics in the broad sense.</li>
</ul>

<div class="key-term"><strong>Key Term: Volta</strong> — A "turn" or shift in argument, tone, or perspective within a poem. In a Petrarchan sonnet, the volta typically occurs between the octave and the sestet (after line 8). In a Shakespearean sonnet, the final couplet often provides a volta. Identifying the volta shows sophisticated structural awareness.</div>

<h3>Structure: How the Poem Unfolds</h3>
<p><strong>Structure</strong> refers to the internal organisation of the poem — how ideas are sequenced, how the poem moves from beginning to end, and what patterns of repetition or contrast are established.</p>

<h4>Structural Features to Analyse</h4>
<ul>
  <li><strong>Stanza breaks</strong> — Why has the poet divided the poem here? Does a new stanza signal a shift in time, place, tone, or perspective?</li>
  <li><strong>Enjambment</strong> — When a sentence runs over from one line (or stanza) to the next without punctuation. Creates momentum, urgency, or a sense of overflow.</li>
  <li><strong>Caesura</strong> — A pause within a line, usually created by punctuation. Creates hesitation, emphasis, or a moment of reflection.</li>
  <li><strong>End-stopping</strong> — When a line ends with a natural pause or punctuation. Creates a sense of completeness, order, or finality.</li>
  <li><strong>Repetition and refrain</strong> — Repeated words, phrases, or whole lines. Creates emphasis, ritual, obsession, or musicality.</li>
  <li><strong>Juxtaposition</strong> — Placing contrasting ideas, images, or tones side by side to highlight differences or create tension.</li>
  <li><strong>Circular structure</strong> — When the poem returns to its opening image or idea, creating a sense of entrapment or resolution.</li>
</ul>

<h4>Metre and Rhythm</h4>
<p>Metre is the pattern of stressed and unstressed syllables in a line. The most common metres in English poetry are:</p>
<ul>
  <li><strong>Iambic pentameter</strong> — Five pairs of unstressed-stressed syllables (da-DUM da-DUM da-DUM da-DUM da-DUM). The "natural" rhythm of English speech. Used in sonnets, blank verse, and much formal poetry.</li>
  <li><strong>Trochaic</strong> — Stressed-unstressed (DUM-da). Creates a marching, insistent rhythm.</li>
  <li><strong>Anapaestic</strong> — Two unstressed syllables followed by a stressed (da-da-DUM). Creates a galloping, energetic rhythm.</li>
</ul>

<p>Look for moments where the metre is <strong>disrupted</strong>. A sudden irregularity in an otherwise regular rhythm draws attention to a particular word or moment — the poet is using metrical disruption as emphasis.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing form and structure without connecting them to meaning. Saying "the poem is written in free verse" is description, not analysis. Saying "the absence of a regular form mirrors the speaker's sense of dislocation and loss of identity" is analysis. Always ask: <em>why does the form matter?</em></div>

<h3>Putting It Together: An Analytical Framework</h3>
<p>When writing about a poem in the exam, use this framework to ensure you cover all AOs:</p>
<ol>
  <li><strong>What is the poem about?</strong> (AO1 — knowledge and understanding)</li>
  <li><strong>What is the context?</strong> (AO2 — meanings shaped by context)</li>
  <li><strong>How does the poet use language, form, and structure?</strong> (AO3 — analysis of writer's methods)</li>
  <li><strong>What is your personal interpretation?</strong> (AO4 — personal response)</li>
</ol>
<p>Weave these together throughout your essay rather than treating them as separate sections.</p>
`,
    quiz: [
      {
        id: 'caie-poetry-m2-q1',
        question: 'What is the difference between a metaphor and a simile?',
        options: [
          'A metaphor is longer than a simile',
          'A simile uses "like" or "as" for explicit comparison; a metaphor states one thing IS another',
          'A metaphor always involves nature; a simile does not',
          'There is no meaningful difference — they are interchangeable terms',
        ],
        correct: 1,
        explanation: 'A simile makes an explicit comparison using "like" or "as", while a metaphor asserts identity between two things. Metaphors are generally considered more powerful because they claim equivalence rather than mere resemblance.',
      },
      {
        id: 'caie-poetry-m2-q2',
        question: 'What is enjambment?',
        options: [
          'A pause in the middle of a line of poetry',
          'The repetition of consonant sounds at the start of words',
          'When a sentence runs over from one line to the next without punctuation',
          'A rhyme that occurs within a single line rather than at the end',
        ],
        correct: 2,
        explanation: 'Enjambment occurs when a sentence or phrase continues past the end of a line without punctuation, creating momentum and urgency. It contrasts with end-stopping, where each line concludes with a natural pause.',
      },
      {
        id: 'caie-poetry-m2-q3',
        question: 'What is a volta in a sonnet?',
        options: [
          'The final rhyming couplet',
          'A turn or shift in argument, tone, or perspective within the poem',
          'The opening line that establishes the theme',
          'The pattern of stressed and unstressed syllables',
        ],
        correct: 1,
        explanation: 'The volta is a "turn" — a shift in the poem\'s argument, tone, or perspective. In a Petrarchan sonnet it typically occurs between the octave and sestet (after line 8); in a Shakespearean sonnet, the couplet often provides the volta.',
      },
      {
        id: 'caie-poetry-m2-q4',
        question: 'Why is it insufficient to simply identify a technique such as "the poet uses alliteration"?',
        options: [
          'Because alliteration is not a real technique',
          'Because you must always identify at least three techniques',
          'Because identifying a technique without explaining its effect earns no analytical marks',
          'Because the examiner already knows what alliteration is',
        ],
        correct: 2,
        explanation: 'Identifying (feature-spotting) without analysis earns no AO3 marks. You must explain what effect the technique creates and why the poet chose it. Analysis means exploring meaning and impact, not just labelling.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Comparison Skills
  // ──────────────────────────────────────────────
  {
    id: 'caie-poetry-m3',
    title: 'Comparing Poems: Methods and Frameworks',
    duration: '55 min',
    content: `
<h2>Comparing Poems in the CAIE Literature Exam</h2>

<p>Comparison is a core skill for CAIE Literature. In Paper 1, you may be asked to compare two anthology poems, or an anthology poem with an unseen poem. The ability to move fluently between texts — identifying similarities and differences in theme, method, and effect — is what separates competent answers from excellent ones.</p>

<h3>Why Compare?</h3>
<p>Comparison forces you to think more deeply. When you hold two poems side by side, you notice things about each that you might miss when studying them in isolation. A poet's choice of free verse becomes more significant when you compare it with a sonnet on the same theme. A celebratory tone becomes more striking when placed alongside an elegiac treatment of the same subject.</p>

<div class="key-term"><strong>Key Term: Comparative Analysis</strong> — The process of examining two or more texts together, exploring their similarities and differences in content, method, and effect. CAIE rewards responses that make <strong>meaningful connections</strong> between texts, not those that write about each poem separately.</div>

<h3>Structuring a Comparative Response</h3>
<p>There are two main approaches to structuring comparison, and the second is strongly preferred by CAIE examiners:</p>

<h4>Approach 1: Block Method (Less Effective)</h4>
<p>Write about Poem A in full, then write about Poem B in full, with a brief comparison at the end. This approach is easy to plan but often results in two separate essays rather than a genuinely comparative response. Examiners find it harder to reward because the comparison feels superficial.</p>

<h4>Approach 2: Integrated Method (Strongly Preferred)</h4>
<p>Organise your essay by <strong>points of comparison</strong> rather than by poem. Each paragraph examines both poems together, moving between them to develop a comparative argument. This creates a much more sophisticated and rewarding essay.</p>

<p>Here is a model paragraph structure for the integrated method:</p>
<ol>
  <li><strong>Comparative point</strong> — State a similarity or difference in theme, method, or effect.</li>
  <li><strong>Evidence from Poem A</strong> — Provide a quotation and analyse it.</li>
  <li><strong>Transition</strong> — Use a comparative connective to move to Poem B.</li>
  <li><strong>Evidence from Poem B</strong> — Provide a quotation and analyse it.</li>
  <li><strong>Evaluative comment</strong> — Reflect on the significance of the comparison. Which approach is more effective? Why?</li>
</ol>

<h3>Comparative Connectives</h3>
<p>Use these phrases to create smooth transitions between poems:</p>
<ul>
  <li><strong>Similarly / In a comparable way</strong> — When the poems share a technique or theme</li>
  <li><strong>In contrast / Conversely / However</strong> — When highlighting a difference</li>
  <li><strong>While Poem A..., Poem B...</strong> — For simultaneous comparison within a sentence</li>
  <li><strong>Both poets... yet...</strong> — For identifying shared ground before distinguishing approaches</li>
  <li><strong>Where [Poet A] employs..., [Poet B] instead opts for...</strong> — For comparing methods</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest comparative essays do not merely list similarities and differences — they <strong>evaluate</strong>. Which poet's approach is more effective? Which poem creates a more powerful emotional response? Evaluation shows that you are engaging critically with the texts (AO4) rather than just describing them.</div>

<h3>What to Compare</h3>
<p>When planning your comparison, consider these dimensions:</p>

<h4>1. Theme and Subject Matter</h4>
<p>Do both poems address the same theme? If so, do they present the same perspective, or do they offer contrasting views? A poem celebrating nature and a poem lamenting its destruction share a theme but diverge in attitude.</p>

<h4>2. Tone and Mood</h4>
<p>Compare the emotional register of each poem. Is one optimistic and the other pessimistic? Is one angry and the other resigned? How does the tone shift within each poem, and are those shifts parallel or divergent?</p>

<h4>3. Poetic Voice and Perspective</h4>
<p>Who is speaking in each poem? Is the speaker a first-person persona or a detached observer? Is the voice intimate or public? Comparing poetic voices reveals how perspective shapes meaning.</p>

<h4>4. Language and Imagery</h4>
<p>Compare the poets' diction. Does one use elaborate, ornate language while the other is stark and plain? Do they draw on different semantic fields? Are the images concrete or abstract?</p>

<h4>5. Form and Structure</h4>
<p>Compare the forms chosen. Why has one poet chosen a rigid form and the other free verse? How does each poet use structural devices — enjambment, caesura, stanza breaks — and to what effect?</p>

<h4>6. Context</h4>
<p>How does each poem's context (historical, cultural, biographical) influence its content and method? Comparing contexts can illuminate why two poets approach the same theme differently.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a comparative essay that only discusses similarities. The strongest essays explore <strong>both similarities and differences</strong>, and they explain <em>why</em> the differences exist and what effect they create. A comparison that finds only agreement is rarely convincing.</div>

<h3>Planning Under Exam Conditions</h3>
<p>You will have limited time in the exam, so your planning must be efficient. Try this approach:</p>
<ol>
  <li>Read both poems carefully (5 minutes).</li>
  <li>Annotate each poem briefly, noting key techniques and effects (5 minutes).</li>
  <li>Identify three or four points of comparison (3 minutes).</li>
  <li>Write your response using the integrated method (30–35 minutes).</li>
  <li>Check and proofread (2 minutes).</li>
</ol>

<p>Three or four well-developed comparative paragraphs, plus an introduction and conclusion, will produce a strong essay within the time limit.</p>
`,
    quiz: [
      {
        id: 'caie-poetry-m3-q1',
        question: 'Which structural approach to comparative essays is preferred by CAIE examiners?',
        options: [
          'The block method — writing about each poem separately',
          'The integrated method — organising by points of comparison across both poems',
          'The chronological method — discussing whichever poem was written first',
          'The alternating method — alternating single sentences about each poem',
        ],
        correct: 1,
        explanation: 'The integrated method, where each paragraph examines both poems around a shared point of comparison, is strongly preferred. It produces a genuinely comparative response rather than two separate mini-essays.',
      },
      {
        id: 'caie-poetry-m3-q2',
        question: 'What distinguishes a strong comparative essay from a merely competent one?',
        options: [
          'Including more quotations from each poem',
          'Writing longer paragraphs with more detailed plot summary',
          'Evaluating which poet\'s approach is more effective and why',
          'Covering more points of comparison even if they are brief',
        ],
        correct: 2,
        explanation: 'Evaluation — judging which approach is more effective and explaining why — demonstrates critical engagement (AO4) and moves your essay beyond description into genuine analysis. Examiners reward this quality over quantity.',
      },
      {
        id: 'caie-poetry-m3-q3',
        question: 'Which of the following is NOT a useful dimension for comparing two poems?',
        options: [
          'Theme and subject matter',
          'The number of words in each poem',
          'Tone and mood',
          'Form and structure',
        ],
        correct: 1,
        explanation: 'While theme, tone, form, and structure are all meaningful dimensions for comparison, the raw word count of a poem is a superficial metric that does not yield analytical insight. Comparison should focus on meaning and effect.',
      },
      {
        id: 'caie-poetry-m3-q4',
        question: 'Why should comparative essays discuss both similarities AND differences?',
        options: [
          'Because the mark scheme requires an equal number of each',
          'Because finding only agreement or only disagreement is rarely convincing and limits analytical depth',
          'Because examiners deduct marks if you only discuss differences',
          'Because every pair of poems always has an equal number of similarities and differences',
        ],
        correct: 1,
        explanation: 'Exploring both similarities and differences creates a nuanced, balanced argument. An essay that only finds agreement (or only disagreement) will feel one-dimensional and miss opportunities for deeper analysis.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Unseen Poetry Method
  // ──────────────────────────────────────────────
  {
    id: 'caie-poetry-m4',
    title: 'Unseen Poetry: A Systematic Approach',
    duration: '55 min',
    content: `
<h2>Tackling Unseen Poetry with Confidence</h2>

<p>The unseen poetry component tests your ability to respond to a poem you have never studied before. This can feel daunting, but it is actually the purest test of your analytical skills — you cannot rely on memorised notes, only on your ability to read closely and think critically. The skills you build here transfer directly to every other part of the Literature exam.</p>

<h3>What Is an Unseen Poem?</h3>
<p>In the CAIE exam, you will be presented with a poem (or extract from a longer poem) that is not from the set anthology. You will be given a question that directs your response — for example, asking you to explore how the poet presents a particular theme or creates a particular effect. You will have no prior knowledge of the poem or poet.</p>

<div class="key-term"><strong>Key Term: Unseen Text</strong> — A literary text that is not part of the set syllabus, presented in the exam for the first time. You are assessed on your ability to apply analytical skills to unfamiliar material, demonstrating that your understanding of literature extends beyond your specific set texts.</div>

<h3>The Five-Stage Method</h3>
<p>Use this systematic method every time you encounter an unseen poem. It works under timed conditions and ensures you do not miss key features.</p>

<h4>Stage 1: First Reading — What Is This Poem About? (2 minutes)</h4>
<p>Read the poem through once without stopping. Do not annotate yet. Focus entirely on understanding the basic situation:</p>
<ul>
  <li>Who is the speaker?</li>
  <li>What is the subject or situation?</li>
  <li>What is the overall mood or tone?</li>
  <li>Is there a narrative (a story being told) or is it more reflective/descriptive?</li>
</ul>
<p>After this first reading, write a one-sentence summary of the poem's subject in the margin. This anchors your analysis.</p>

<h4>Stage 2: Second Reading — How Is It Written? (3 minutes)</h4>
<p>Read again, this time annotating actively. Look for:</p>
<ul>
  <li><strong>Language features</strong> — Imagery, diction, semantic fields, sound devices</li>
  <li><strong>Structural features</strong> — Stanza organisation, enjambment, caesura, repetition</li>
  <li><strong>Form features</strong> — Is it a recognised form (sonnet, ballad, free verse)? Why might the poet have chosen this form?</li>
  <li><strong>Shifts</strong> — Does the poem change direction in tone, perspective, or argument? Where does the "turn" occur?</li>
</ul>

<h4>Stage 3: Question Focus (2 minutes)</h4>
<p>Re-read the question carefully. Underline the key words. Ensure your response addresses exactly what is asked. If the question says "How does the poet present loneliness?", every paragraph must connect back to loneliness and to the poet's methods.</p>

<h4>Stage 4: Plan (3 minutes)</h4>
<p>Sketch a brief plan — three or four main points, each with a quotation and a technique to analyse. Order your points so that your argument builds logically.</p>

<h4>Stage 5: Write (25–30 minutes)</h4>
<p>Write your response, ensuring each paragraph contains:</p>
<ul>
  <li>A clear point that addresses the question</li>
  <li>A short, well-chosen quotation</li>
  <li>Analysis of the poet's method (language, form, or structure)</li>
  <li>An explanation of the effect on the reader</li>
  <li>Where possible, a comment on how context might shape meaning</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For unseen poetry, contextual knowledge (AO2) is less about specific historical facts — since you may not know the poet — and more about literary context. You can discuss the traditions the poem draws on (e.g., "This poem follows the conventions of the pastoral tradition") or make inferences about context from the poem itself.</div>

<h3>Common Unseen Poetry Traps</h3>

<h4>Trap 1: Paraphrasing Instead of Analysing</h4>
<p>The most common weakness is retelling the poem in your own words. "The poet says the sky is dark and the trees are bare" is paraphrase. "The stark monosyllables 'dark' and 'bare' create a sense of emotional desolation, as the natural world mirrors the speaker's inner emptiness" is analysis.</p>

<h4>Trap 2: Ignoring the Title</h4>
<p>The title is part of the poem. It often provides crucial context — a location, a dedication, a thematic clue, or an ironic counterpoint to the poem's content. Always consider the title in your analysis.</p>

<h4>Trap 3: Treating Every Poem as Biographical</h4>
<p>Do not assume that the speaker of the poem is the poet. Refer to "the speaker" or "the persona" rather than using the poet's name, unless the question invites biographical reading. Many poems use fictional or dramatic speakers.</p>

<h4>Trap 4: Feature-Spotting Without Purpose</h4>
<p>Listing every device you can find (alliteration here, a metaphor there, some sibilance over here) without connecting them to a coherent argument produces a fragmented response. Choose the three or four most important features and analyse them in depth.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to identify the "hidden meaning" of the poem. There is no single correct interpretation. CAIE examiners reward <strong>any interpretation that is supported by the text</strong>. If you can justify your reading with evidence, it is valid. Confidence in your own ideas — expressed precisely and supported by quotation — is exactly what AO4 (personal response) requires.</div>

<h3>Practice Strategy</h3>
<p>The best way to improve at unseen poetry is simple: practise. Read a new poem every week — from anthologies, literary magazines, or online collections. Apply the five-stage method each time. Over several months, you will develop the instinctive analytical confidence that the exam demands.</p>
`,
    quiz: [
      {
        id: 'caie-poetry-m4-q1',
        question: 'What should be your primary focus during the first reading of an unseen poem?',
        options: [
          'Identifying as many literary devices as possible',
          'Understanding the basic situation — who is speaking, about what, in what mood',
          'Planning your essay structure immediately',
          'Finding quotations to memorise',
        ],
        correct: 1,
        explanation: 'The first reading should establish basic comprehension: who is speaking, what the subject is, and the overall tone. Analytical annotation comes on the second reading, once you have a secure foundation of understanding.',
      },
      {
        id: 'caie-poetry-m4-q2',
        question: 'Why should you refer to "the speaker" rather than using the poet\'s name?',
        options: [
          'Because the exam question always says "the speaker"',
          'Because using the poet\'s name is considered rude',
          'Because many poems use fictional or dramatic speakers who are not the poet',
          'Because you might spell the poet\'s name wrong',
        ],
        correct: 2,
        explanation: 'Poems often use fictional or dramatic speakers (personas) who are distinct from the poet. Assuming the speaker is the poet is a form of biographical fallacy. Using "the speaker" or "the persona" demonstrates critical awareness of this distinction.',
      },
      {
        id: 'caie-poetry-m4-q3',
        question: 'How can you address AO2 (context) when you have no prior knowledge of the poet?',
        options: [
          'You cannot — AO2 marks are unavailable for unseen poetry',
          'By making up biographical facts about the poet',
          'By discussing literary traditions the poem draws on and making inferences about context from the poem itself',
          'By copying contextual information from the question',
        ],
        correct: 2,
        explanation: 'For unseen poetry, AO2 can be addressed through literary context — discussing the traditions, conventions, or movements the poem appears to draw on — and by making reasonable inferences about context from evidence within the poem itself.',
      },
      {
        id: 'caie-poetry-m4-q4',
        question: 'What is the difference between paraphrase and analysis?',
        options: [
          'Paraphrase is shorter; analysis is longer',
          'Paraphrase retells the content; analysis examines how language creates effects',
          'Paraphrase uses quotations; analysis does not',
          'There is no difference — they are both required equally',
        ],
        correct: 1,
        explanation: 'Paraphrase restates what the poem says in your own words, which demonstrates comprehension but not analytical skill. Analysis examines how the poet\'s specific word choices, techniques, and structural decisions create particular effects and meanings.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — CAIE Poetry Exam Technique
  // ──────────────────────────────────────────────
  {
    id: 'caie-poetry-m5',
    title: 'Passage-Based and Essay Questions for CAIE Poetry',
    duration: '55 min',
    content: `
<h2>Mastering CAIE Poetry Exam Questions</h2>

<p>The CAIE Literature exam uses two main question types for poetry: <strong>passage-based questions</strong> and <strong>essay questions</strong>. Understanding the demands of each — and how to adapt your approach accordingly — is essential for maximising your marks. This module gives you the frameworks and strategies for both.</p>

<h3>Passage-Based Questions</h3>
<p>In a passage-based question, a poem (or section of a longer poem) is printed on the exam paper. You are directed to analyse this specific text. The question will typically take a form such as:</p>
<ul>
  <li><em>"Explore how the poet presents [theme/idea] in this poem."</em></li>
  <li><em>"How does the poet use language and structure to create effects in this poem?"</em></li>
  <li><em>"In what ways does the poet convey the speaker's feelings in this poem?"</em></li>
</ul>

<h4>The Advantages of Passage-Based Questions</h4>
<p>You have the text in front of you — there is no need to recall quotations from memory. This means you can focus entirely on close analysis. However, this is also the challenge: examiners expect <strong>more detailed, more precise close reading</strong> because you have direct access to the text. Surface-level comments will not earn high marks when the text is right there for you to analyse.</p>

<h4>Strategy for Passage-Based Questions</h4>
<ol>
  <li><strong>Read the question first</strong>, then read the poem with the question in mind.</li>
  <li><strong>Annotate the poem</strong> on the exam paper — circle key words, underline striking images, note structural features in the margin.</li>
  <li><strong>Track the poem's movement</strong> — How does it begin? How does it develop? Where does it shift? How does it end? Examiners reward responses that show awareness of the poem's journey.</li>
  <li><strong>Select your evidence carefully</strong> — Choose four or five key moments that are the richest for analysis, rather than trying to comment on every single line.</li>
  <li><strong>Write a cohesive response</strong> — Your essay should build an argument, not jump randomly between observations.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For passage-based questions, try to move through the poem broadly in order — beginning, middle, end — so that your essay tracks the poem's development. This is not a rigid rule, but it helps you demonstrate awareness of structure and prevents you from cherry-picking isolated moments out of context.</div>

<h3>Essay Questions</h3>
<p>Essay questions do not provide the text. You must write from memory, using recalled quotations and detailed knowledge of the poem(s). Essay questions are typically broader and may invite comparison:</p>
<ul>
  <li><em>"How does [poet] explore the theme of [theme] in [poem title]?"</em></li>
  <li><em>"Compare the ways in which two poems from your anthology present [theme]."</em></li>
</ul>

<h4>Strategy for Essay Questions</h4>
<ol>
  <li><strong>Plan before you write</strong> — Spend five minutes organising your ideas. Jot down your key quotations and the points they support.</li>
  <li><strong>Build a thesis</strong> — Your essay needs an overarching argument, not just a list of observations. What is your central claim about how the poem(s) present the theme?</li>
  <li><strong>Use quotations precisely</strong> — Since you are recalling from memory, use short, embedded quotations (three to six words) rather than attempting long passages. Short quotations are easier to remember and easier to analyse.</li>
  <li><strong>Cover all AOs</strong> — Ensure your response addresses textual knowledge (AO1), context (AO2), language/form/structure (AO3), and personal response (AO4).</li>
  <li><strong>Conclude with purpose</strong> — Your conclusion should not simply repeat your introduction. It should offer a final evaluative insight — a considered judgement about the poem's overall achievement or significance.</li>
</ol>

<h3>Time Management</h3>
<p>In a typical CAIE Literature exam, you will have approximately 45 minutes per question. Allocate your time as follows:</p>
<table>
  <tr><th>Activity</th><th>Time</th></tr>
  <tr><td>Reading and annotating</td><td>5–7 minutes</td></tr>
  <tr><td>Planning</td><td>3–5 minutes</td></tr>
  <tr><td>Writing</td><td>30–35 minutes</td></tr>
  <tr><td>Proofreading</td><td>2–3 minutes</td></tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on the first question and rushing the second. Both questions carry equal marks, so unequal time allocation means you are sacrificing easy marks on the second question for diminishing returns on the first. Use a watch and stick to your plan.</div>

<h3>What Examiners Are Looking For</h3>
<p>CAIE examiners use a levels-based mark scheme. To reach the highest levels (Levels 5 and 6), your response must:</p>
<ul>
  <li><strong>Show critical engagement</strong> — You are not just describing the poem but arguing about it, interpreting it, evaluating it.</li>
  <li><strong>Use precise, well-selected evidence</strong> — Every quotation must serve a purpose and be analysed, not just inserted.</li>
  <li><strong>Demonstrate sophisticated understanding of method</strong> — You discuss how language, form, and structure create effects, not just what they are.</li>
  <li><strong>Sustain a coherent argument</strong> — Your essay has a clear line of reasoning from beginning to end.</li>
  <li><strong>Offer personal and original response</strong> — You bring your own interpretive voice to the analysis, rather than reproducing generic or memorised responses.</li>
</ul>

<h3>Model Opening Sentences</h3>
<p>The opening of your essay sets the tone. Here are examples of strong openings:</p>
<ul>
  <li>"In this poem, [poet] constructs a speaker whose relationship with [theme] shifts dramatically, moving from [beginning state] to [end state] through carefully controlled imagery and structural choices."</li>
  <li>"Through the interplay of [technique] and [technique], [poet] presents [theme] as both [adjective] and [adjective], creating a productive tension that runs throughout the poem."</li>
  <li>"[Poet]'s treatment of [theme] is remarkable for its ambiguity: the poem simultaneously celebrates and mourns, leaving the reader suspended between competing interpretations."</li>
</ul>
<p>Notice how each opening introduces a <strong>conceptualised argument</strong> — a clear interpretive position that the rest of the essay will develop and support.</p>
`,
    quiz: [
      {
        id: 'caie-poetry-m5-q1',
        question: 'What is the key advantage of passage-based poetry questions?',
        options: [
          'They are always easier than essay questions',
          'You have the text in front of you, so you can focus on close analysis without needing to recall quotations',
          'They require less analysis than essay questions',
          'You do not need to address all four AOs',
        ],
        correct: 1,
        explanation: 'Having the text available means you can focus entirely on close reading rather than recalling quotations. However, examiners compensate by expecting more detailed and precise analysis — surface comments earn fewer marks when you have the text in front of you.',
      },
      {
        id: 'caie-poetry-m5-q2',
        question: 'How should you begin an essay question response?',
        options: [
          'With a biography of the poet',
          'With a quotation from the poem',
          'With a conceptualised argument — a clear interpretive position your essay will develop',
          'With a definition of the key literary terms you will use',
        ],
        correct: 2,
        explanation: 'A strong opening introduces your conceptualised argument — a clear interpretive claim about how the poem presents its theme. This gives your essay direction and coherence from the outset, and tells the examiner you are arguing, not just describing.',
      },
      {
        id: 'caie-poetry-m5-q3',
        question: 'How much time should you allocate to planning in a 45-minute exam answer?',
        options: [
          'No planning time — start writing immediately',
          '3–5 minutes',
          '10–15 minutes',
          '20 minutes',
        ],
        correct: 1,
        explanation: 'Three to five minutes of planning is optimal. It is enough to organise your key points and quotations without eating into valuable writing time. Planning ensures your essay has structure and coherence rather than becoming a stream of consciousness.',
      },
      {
        id: 'caie-poetry-m5-q4',
        question: 'What characterises a Level 5/6 response in the CAIE mark scheme?',
        options: [
          'Length — the response covers at least four pages',
          'Use of advanced vocabulary and complex sentences throughout',
          'Critical engagement, precise evidence, sophisticated analysis of method, and sustained personal argument',
          'Coverage of all poems in the anthology',
        ],
        correct: 2,
        explanation: 'The highest levels reward critical engagement with the text, well-selected evidence, sophisticated understanding of how writers create effects, coherent sustained argument, and an original personal interpretive voice — not mere length or vocabulary display.',
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Poetry Assessment Questions
// ──────────────────────────────────────────────
const poetryAssessment: CourseQuiz[] = [
  {
    id: 'caie-poetry-assess-q1',
    question: 'A CAIE exam question asks you to "explore how the poet conveys a sense of loss". What should your essay primarily focus on?',
    options: [
      'Summarising every moment in the poem where something is lost',
      'Analysing the poet\'s methods — language, form, and structure — that create the sense of loss',
      'Describing the historical context of loss in the poet\'s era',
      'Listing all the literary devices present in the poem',
    ],
    correct: 1,
    explanation: 'The word "how" in the question directs you to the poet\'s methods. Your essay must analyse language, form, and structure — not just identify moments of loss or list devices. Method and effect are at the heart of a strong response.',
  },
  {
    id: 'caie-poetry-assess-q2',
    question: 'Which of the following best demonstrates the integration of context into a poetry analysis?',
    options: [
      '"The poem was written in 1965 during the Civil Rights Movement."',
      '"The poet\'s use of fractured syntax mirrors the social fragmentation of a post-colonial society struggling to forge a new identity independent of imperial language."',
      '"Many poets in this period wrote about similar themes."',
      '"The context of this poem is important to understand."',
    ],
    correct: 1,
    explanation: 'This option integrates context directly into analysis of the poet\'s technique (fractured syntax), explaining how the historical/cultural situation shapes the writer\'s language choices. The other options either state context without connecting it to the text or are too vague.',
  },
  {
    id: 'caie-poetry-assess-q3',
    question: 'In a comparative essay, what is the most effective way to structure your response?',
    options: [
      'Write everything about Poem A, then everything about Poem B',
      'Alternate between poems every sentence',
      'Organise by points of comparison, examining both poems within each paragraph',
      'Focus on one poem only and mention the other in your conclusion',
    ],
    correct: 2,
    explanation: 'The integrated method — organising by comparative points rather than by poem — produces a genuinely comparative response. Each paragraph explores both poems, making connections and distinctions that reveal deeper insight than writing about each poem separately.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// CAIE Literature — Prose Texts  (0475 / 0992)
// ═══════════════════════════════════════════════════════════════════════════════

const proseModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Approaching Prose Set Texts
  // ──────────────────────────────────────────────
  {
    id: 'caie-prose-m1',
    title: 'Approaching Prose Set Texts for CAIE',
    duration: '55 min',
    content: `
<h2>How to Study Prose Set Texts for CAIE Literature</h2>

<p>The Cambridge IGCSE Literature in English specification (0475/0992) requires you to study <strong>prose set texts</strong> — novels and short stories chosen from the CAIE set text list. These texts are examined on Paper 1 (Poetry and Prose) or Paper 2 (Drama), depending on the component. This module establishes the skills and habits you need for successful prose study.</p>

<div class="key-term"><strong>Key Term: Prose Set Text</strong> — A novel or collection of short stories prescribed by CAIE for detailed study. Unlike drama, prose is designed to be read privately. Your analysis must account for the reader's experience — how the writer controls pacing, revelation, and emotional engagement through narrative technique.</div>

<h3>The CAIE Assessment Objectives for Prose</h3>
<p>Every mark in the prose paper is tied to the same four AOs that govern the entire specification, each weighted at 25%:</p>
<ul>
  <li><strong>AO1</strong> — Show detailed knowledge of the text through well-chosen references and quotations, maintaining a critical style and informed personal response.</li>
  <li><strong>AO2</strong> — Understand how meanings and effects are shaped by context — the circumstances in which the text was written and the circumstances it depicts.</li>
  <li><strong>AO3</strong> — Analyse the writer's use of language, form, and structure to create meanings and effects.</li>
  <li><strong>AO4</strong> — Develop a personal response that engages critically and imaginatively with the text.</li>
</ul>

<h3>First Encounters: Reading the Set Text</h3>
<p>Your first reading of a prose set text should be immersive. Read the novel from start to finish without pausing to annotate — let yourself experience the text as a reader, not yet as an analyst. Note your emotional responses: moments of surprise, tension, sympathy, confusion, or delight. These responses are the raw material for AO4.</p>

<p>On your second reading, shift into analytical mode. Annotate chapter by chapter, noting:</p>
<ul>
  <li><strong>Plot developments</strong> — What happens, and what is the significance of each event?</li>
  <li><strong>Character introductions and changes</strong> — How does the writer present each character? How do they develop?</li>
  <li><strong>Setting and atmosphere</strong> — How does the writer use place and environment to create mood?</li>
  <li><strong>Narrative voice</strong> — Who is telling the story? How does the narration shape our understanding?</li>
  <li><strong>Key quotations</strong> — Short, powerful phrases that capture character, theme, or atmosphere.</li>
</ul>

<h3>Understanding Narrative Voice</h3>
<p>Narrative voice is one of the most important analytical concepts for prose. The narrator is not the author — even when using first person. Consider:</p>
<ul>
  <li><strong>First-person narration</strong> — The narrator uses "I". We see events through their perspective, which may be limited, biased, or unreliable. The writer uses this form to create intimacy but also to control what the reader knows.</li>
  <li><strong>Third-person limited</strong> — The narrator refers to characters as "he" or "she" but stays close to one character's perspective. We access that character's thoughts but not others'.</li>
  <li><strong>Third-person omniscient</strong> — The narrator knows everything — all characters' thoughts, past and future events. This creates a God-like perspective and allows the writer to move freely between viewpoints.</li>
  <li><strong>Unreliable narration</strong> — The narrator's account is deliberately flawed — through naivety, self-deception, or dishonesty. The reader must read between the lines to construct the "true" story.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Discussing narrative voice is one of the quickest routes to high marks in AO3. It shows structural awareness and understanding of how the writer crafts the reading experience. Always ask: "Why does the writer choose this particular narrator for this story?"</div>

<h3>Building a Chapter-by-Chapter Framework</h3>
<p>For each chapter or section, create brief notes covering:</p>
<ol>
  <li><strong>Summary</strong> — One to two sentences on what happens</li>
  <li><strong>Key characters</strong> — Who appears and how they are presented</li>
  <li><strong>Key themes</strong> — Which themes are advanced or complicated</li>
  <li><strong>Key quotations</strong> — Two or three short, analysable quotations</li>
  <li><strong>Writer's methods</strong> — What narrative techniques are most prominent</li>
</ol>

<p>This framework becomes an invaluable revision resource and ensures you have comprehensive knowledge across the whole text, not just your favourite scenes.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Only knowing the beginning and end of the novel. CAIE passage-based questions can select an extract from <strong>any part of the text</strong>. If you have only studied the opening and climax, you will be unprepared for a question on a quiet, transitional chapter. Cover the whole text thoroughly.</div>
`,
    quiz: [
      {
        id: 'caie-prose-m1-q1',
        question: 'Why should your first reading of a prose set text be immersive rather than analytical?',
        options: [
          'Because annotation slows you down too much',
          'Because your initial emotional responses become raw material for personal response (AO4)',
          'Because analysis is only possible on a second reading',
          'Because the examiner does not care about close reading',
        ],
        correct: 1,
        explanation: 'Your genuine emotional responses — surprise, tension, sympathy — provide the foundation for AO4 (personal response). Experiencing the text as a reader before analysing it as a student gives you authentic material for critical engagement.',
      },
      {
        id: 'caie-prose-m1-q2',
        question: 'What is an "unreliable narrator"?',
        options: [
          'A narrator who forgets details of the plot',
          'A narrator whose account is deliberately flawed through naivety, self-deception, or dishonesty',
          'A narrator who speaks in dialect',
          'A third-person narrator who does not know the characters\' thoughts',
        ],
        correct: 1,
        explanation: 'An unreliable narrator provides an account that the reader learns to question. The unreliability — whether from naivety, bias, or dishonesty — is a deliberate choice by the writer to create a gap between the narrator\'s version and the "truth" the reader must construct.',
      },
      {
        id: 'caie-prose-m1-q3',
        question: 'Why is it important to study the entire novel, not just key scenes?',
        options: [
          'Because the exam always asks about the ending',
          'Because CAIE passage-based questions can select an extract from any part of the text',
          'Because the mark scheme awards marks for word count',
          'Because you must reference every chapter in your essay',
        ],
        correct: 1,
        explanation: 'CAIE passage-based questions may present an extract from any chapter or section of the text. Students who have only studied the opening and climax will be unprepared for questions on transitional or less dramatic passages.',
      },
      {
        id: 'caie-prose-m1-q4',
        question: 'Why is narrative voice particularly valuable for achieving high AO3 marks?',
        options: [
          'Because it is the only technique that CAIE assesses',
          'Because it demonstrates structural awareness and understanding of how the writer crafts the reading experience',
          'Because narrative voice is easier to identify than other techniques',
          'Because all CAIE prose texts use the same narrative voice',
        ],
        correct: 1,
        explanation: 'Discussing narrative voice shows you understand how the writer has structured the reading experience — who tells the story, what perspective the reader has access to, and why the writer made that choice. This is sophisticated AO3 analysis.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Character Analysis
  // ──────────────────────────────────────────────
  {
    id: 'caie-prose-m2',
    title: 'Character Analysis in Prose',
    duration: '55 min',
    content: `
<h2>Analysing Characters in CAIE Prose Texts</h2>

<p>Character analysis is one of the most frequently tested skills in the CAIE Literature exam. You will often be asked how a writer <strong>presents</strong> a character — note the word "presents", which directs you to the writer's methods, not just to what the character does. This module teaches you to discuss characterisation as a <strong>craft</strong> rather than treating characters as real people.</p>

<h3>Characters as Constructs</h3>
<p>The single most important shift in thinking for literature study is this: <strong>characters are not real people</strong>. They are constructs — carefully designed by the writer to serve specific purposes within the text. Every trait, every action, every line of dialogue is a deliberate choice. When you discuss a character, you must always be discussing the writer's choices.</p>

<div class="key-term"><strong>Key Term: Characterisation</strong> — The techniques a writer uses to create and develop characters. These include direct description, dialogue, actions, thoughts (in the case of narrated interiority), other characters' reactions, and symbolic association. Strong analysis examines these techniques, not just the resulting character traits.</div>

<h3>Methods of Characterisation</h3>
<p>Writers create characters through several overlapping techniques. Being able to identify and analyse these is essential:</p>

<h4>1. Direct Description</h4>
<p>The narrator (or another character) tells us explicitly what a character is like. This is the most straightforward method. Pay attention to the specific language used — the adjectives, the comparisons, the connotations. A character described as having "sharp, restless eyes" is being characterised very differently from one with "warm, steady eyes".</p>

<h4>2. Dialogue</h4>
<p>What characters say — and how they say it — reveals personality, education, social position, emotional state, and values. Analyse:</p>
<ul>
  <li><strong>Register</strong> — Is the character formal or informal? Do they use slang, dialect, or elevated language?</li>
  <li><strong>What they avoid saying</strong> — Silence, evasion, and deflection are as revealing as speech.</li>
  <li><strong>Contrasts between speech and action</strong> — A character who says one thing and does another is being characterised through irony.</li>
  <li><strong>Speech patterns</strong> — Repetition, hesitation, interruption, and fluency all characterise the speaker.</li>
</ul>

<h4>3. Actions and Behaviour</h4>
<p>Actions speak louder than words — and in literature, they speak louder than narration. A character's choices under pressure reveal their true nature. The writer places characters in situations designed to test them, and their responses define them.</p>

<h4>4. Thoughts and Interior Life</h4>
<p>When the narration gives us access to a character's thoughts (through first person, free indirect discourse, or omniscient narration), we see the gap between public behaviour and private reality. This gap is often where the most interesting characterisation occurs.</p>

<h4>5. Other Characters' Reactions</h4>
<p>How other characters respond to a person tells us something about both parties. If every character in a novel fears a particular figure, the writer is characterising that figure through the fear they inspire.</p>

<h4>6. Symbolic Association</h4>
<p>Writers often associate characters with particular objects, colours, settings, or natural phenomena. These associations build a symbolic layer of characterisation. A character consistently associated with darkness, enclosed spaces, and predatory animals is being characterised differently from one linked with light, open landscapes, and birdsong.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The phrase "the writer presents [character] as..." is your friend in the exam. It signals to the examiner that you are discussing characterisation as a craft, not treating the character as a real person. Use it consistently.</div>

<h3>Character Development and Change</h3>
<p>Many CAIE questions focus on how a character changes across the text. When analysing change, consider:</p>
<ul>
  <li><strong>What is the character like at the beginning?</strong> — Establish their starting point.</li>
  <li><strong>What events or experiences cause change?</strong> — Identify the catalysts.</li>
  <li><strong>What is the character like at the end?</strong> — Assess the extent and nature of the change.</li>
  <li><strong>Is the change convincing?</strong> — This is an evaluative question that demonstrates AO4.</li>
  <li><strong>Why does the writer create this change?</strong> — Connect the character's development to the text's broader themes.</li>
</ul>

<h3>Static vs Dynamic Characters</h3>
<p>Not all characters change. Some are deliberately <strong>static</strong> — they remain the same throughout, often to highlight the changes in characters around them or to represent a fixed idea or value. Recognising whether a character is static or dynamic, and explaining why the writer made that choice, is a mark of sophisticated analysis.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about what a character "would have felt" or "must have been thinking" when this is not stated in the text. You can discuss a character's likely emotions, but present this as your interpretation — "The writer implies..." or "This suggests..." — not as established fact. CAIE examiners value precision and intellectual honesty.</div>
`,
    quiz: [
      {
        id: 'caie-prose-m2-q1',
        question: 'Why should you think of characters as "constructs" rather than real people?',
        options: [
          'Because characters are always unrealistic',
          'Because every trait, action, and line of dialogue is a deliberate choice by the writer to serve a purpose',
          'Because the exam does not allow you to discuss characters\' emotions',
          'Because only post-modern texts treat characters as constructs',
        ],
        correct: 1,
        explanation: 'Treating characters as constructs means recognising that every aspect of a character is a deliberate authorial choice. This shifts your analysis from "what does the character do?" to "why did the writer create this character in this way?" — which is what earns high marks.',
      },
      {
        id: 'caie-prose-m2-q2',
        question: 'Which method of characterisation involves the gap between public behaviour and private reality?',
        options: [
          'Direct description',
          'Dialogue',
          'Thoughts and interior life (narrated interiority)',
          'Symbolic association',
        ],
        correct: 2,
        explanation: 'When narration reveals a character\'s thoughts through first person, free indirect discourse, or omniscient narration, we see the often revealing gap between what a character says/does publicly and what they think privately. This gap is rich material for analysis.',
      },
      {
        id: 'caie-prose-m2-q3',
        question: 'What is a "static" character?',
        options: [
          'A character who does not move from one location',
          'A character who remains fundamentally unchanged throughout the text',
          'A boring character without interesting traits',
          'A character who only appears in one scene',
        ],
        correct: 1,
        explanation: 'A static character remains essentially the same throughout the text. This is often a deliberate choice by the writer — the static character may represent a fixed value or serve as a foil to highlight changes in dynamic characters around them.',
      },
      {
        id: 'caie-prose-m2-q4',
        question: 'Why is the phrase "the writer presents [character] as..." valuable in an exam essay?',
        options: [
          'It is a mandatory phrase required by the mark scheme',
          'It signals that you are discussing characterisation as a craft, not treating the character as a real person',
          'It makes your sentences longer and more impressive',
          'It shows you have memorised the correct analytical framework',
        ],
        correct: 1,
        explanation: 'This phrasing foregrounds the writer\'s agency and signals to the examiner that you understand characters are constructs. It keeps your analysis focused on authorial method rather than slipping into narrative retelling.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Theme Analysis
  // ──────────────────────────────────────────────
  {
    id: 'caie-prose-m3',
    title: 'Theme Analysis in Prose',
    duration: '50 min',
    content: `
<h2>Exploring Themes in CAIE Prose Texts</h2>

<p>Themes are the big ideas that run through a literary text — the abstract concepts that the writer explores through character, plot, and setting. CAIE questions frequently ask how a writer <strong>presents</strong> or <strong>explores</strong> a particular theme. This module teaches you to discuss themes analytically rather than descriptively.</p>

<h3>What Is a Theme?</h3>
<p>A theme is not the same as a subject or a plot point. The <em>subject</em> of a novel might be a family during wartime; the <em>themes</em> might include loyalty, sacrifice, the corruption of power, or the loss of innocence. Themes are the underlying ideas that the writer wants the reader to think about.</p>

<div class="key-term"><strong>Key Term: Theme</strong> — An abstract idea or concept explored throughout a literary text. Themes are not stated explicitly — they emerge from the text's characters, events, imagery, and structure. Common themes in literature include power, identity, love, mortality, justice, isolation, and social class.</div>

<h3>Identifying Themes</h3>
<p>Themes can be identified through several routes:</p>
<ul>
  <li><strong>Recurring motifs</strong> — Images, objects, or phrases that appear repeatedly often point to a central theme. A novel that repeatedly mentions walls, fences, and locked doors is likely exploring themes of confinement or division.</li>
  <li><strong>Character conflicts</strong> — The nature of a character's struggles often embodies a theme. A character torn between duty and desire embodies a theme of moral conflict.</li>
  <li><strong>Setting and atmosphere</strong> — The environments the writer creates can symbolise thematic concerns. A decaying mansion may represent moral corruption; a garden may represent innocence or renewal.</li>
  <li><strong>The writer's commentary</strong> — In omniscient narration, the narrator sometimes reflects directly on thematic questions. These moments are goldmines for analysis.</li>
  <li><strong>The title</strong> — The title of a novel is always significant. It often points directly to the central theme.</li>
</ul>

<h3>From Description to Analysis: The WHAT-HOW-WHY Framework</h3>
<p>A common weakness in thematic analysis is simply describing the theme without analysing it. To move from description to analysis, apply this framework:</p>

<h4>WHAT — What is the theme?</h4>
<p>Name the theme and explain its presence in the text. Where does it appear? Which characters and events embody it?</p>

<h4>HOW — How does the writer present it?</h4>
<p>This is the analytical core. Examine the specific techniques the writer uses: language choices, structural decisions, symbolic patterns, narrative perspective. Ground every claim in textual evidence.</p>

<h4>WHY — Why does the writer present it this way?</h4>
<p>Connect the theme to the writer's purpose. What is the writer trying to say about this idea? How does context inform the treatment of the theme? What response does the writer want from the reader?</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners can immediately tell the difference between a student who describes a theme and one who analyses it. Describing says: "The theme of power is shown when Character X becomes leader." Analysing says: "The writer presents power as inherently corrupting, using the progressive deterioration of Character X's language — from measured diplomacy to brutal imperative — to chart the psychological effects of unchecked authority."</div>

<h3>Thematic Development Across the Text</h3>
<p>Themes are not static — they develop as the text progresses. The writer's treatment of a theme at the beginning may be very different from the treatment at the end. Tracking this development demonstrates sophisticated structural awareness (AO3) and detailed textual knowledge (AO1).</p>

<p>Ask yourself:</p>
<ul>
  <li>How is the theme introduced? Is it explicit or subtle?</li>
  <li>How does the theme develop through the middle of the text? Does it become more complex, more ambiguous, more urgent?</li>
  <li>How is the theme resolved — or left unresolved — at the end? Does the writer offer a clear message, or is the reader left to decide?</li>
</ul>

<h3>Connecting Themes to Context (AO2)</h3>
<p>For CAIE, contextual understanding is equally weighted with other AOs. When discussing themes, always consider how the text's historical, cultural, or social context shapes the writer's exploration of the idea:</p>
<ul>
  <li>A Victorian novel exploring class may reflect the rigid social hierarchies of the era.</li>
  <li>A post-colonial novel exploring identity may engage with the legacy of empire and the struggle for cultural self-determination.</li>
  <li>A novel written during wartime may present morality as situational rather than absolute.</li>
</ul>

<p>The key is to integrate this contextual awareness into your analysis, not to add it as a separate paragraph.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating themes as simple, one-dimensional ideas. "The theme of love" is too broad to be useful. Be more specific: is it unrequited love? Possessive love? Love as liberation? Love as social obligation? The more precisely you define the theme, the more sophisticated your analysis becomes.</div>
`,
    quiz: [
      {
        id: 'caie-prose-m3-q1',
        question: 'What is the difference between a theme and a subject?',
        options: [
          'There is no meaningful difference',
          'A theme is the abstract idea explored; a subject is the surface-level topic or setting',
          'A theme is always one word; a subject is a sentence',
          'A subject is more important than a theme for exam purposes',
        ],
        correct: 1,
        explanation: 'The subject is the surface topic (e.g., a family during wartime), while the theme is the abstract idea explored through that topic (e.g., sacrifice, loyalty, or the corruption of power). Analysis must engage with themes, not just describe subjects.',
      },
      {
        id: 'caie-prose-m3-q2',
        question: 'In the WHAT-HOW-WHY framework, which element is the "analytical core"?',
        options: [
          'WHAT — identifying the theme',
          'HOW — examining the specific techniques the writer uses to present the theme',
          'WHY — connecting to context and purpose',
          'All three are equally the analytical core',
        ],
        correct: 1,
        explanation: 'While all three elements matter, HOW is the analytical core because it examines the writer\'s specific methods — language, structure, symbolism — that create meaning. This is where your close reading skills and AO3 analysis come into play.',
      },
      {
        id: 'caie-prose-m3-q3',
        question: 'Why should you avoid treating a theme as "simple" (e.g., just saying "the theme of love")?',
        options: [
          'Because simple themes do not exist in literature',
          'Because the mark scheme deducts marks for using the word "love"',
          'Because precise definition (unrequited love, possessive love, etc.) enables more sophisticated analysis',
          'Because examiners prefer themes to be discussed in pairs',
        ],
        correct: 2,
        explanation: 'Defining themes precisely demonstrates nuanced understanding and allows for more sophisticated analysis. "Possessive love as a form of control" is a far more productive analytical starting point than simply "the theme of love".',
      },
      {
        id: 'caie-prose-m3-q4',
        question: 'How can recurring motifs help identify themes?',
        options: [
          'Motifs are the same as themes, so they identify themselves',
          'Images, objects, or phrases that recur throughout a text often point to and reinforce central thematic concerns',
          'Motifs only appear in poetry, not prose',
          'Examiners list the motifs in the question, so you do not need to identify them',
        ],
        correct: 1,
        explanation: 'Recurring motifs — such as repeated images of walls, darkness, or water — act as thematic signals. Their repetition draws the reader\'s attention to the abstract ideas the writer is exploring and creates a pattern of meaning across the text.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Passage-Based Questions for Prose
  // ──────────────────────────────────────────────
  {
    id: 'caie-prose-m4',
    title: 'Passage-Based Questions for Prose',
    duration: '55 min',
    content: `
<h2>Tackling Passage-Based Prose Questions</h2>

<p>In the CAIE Literature exam, passage-based questions present you with an extract from your set text and ask you to analyse it in detail. This question type tests your ability to perform <strong>close reading</strong> — examining the writer's language, structure, and narrative techniques at a granular level — while also demonstrating your wider knowledge of the text as a whole.</p>

<h3>The Nature of CAIE Passage-Based Questions</h3>
<p>A typical passage-based question will:</p>
<ul>
  <li>Present an extract of approximately 20–40 lines from the set text</li>
  <li>Ask you to analyse how the writer achieves particular effects in the extract</li>
  <li>May focus on a theme, a character's presentation, the creation of mood/atmosphere, or a turning point</li>
  <li>Expect you to connect the extract to the text as a whole</li>
</ul>

<div class="key-term"><strong>Key Term: Close Reading</strong> — The detailed analysis of a short passage, examining individual word choices, sentence structures, and literary techniques. Close reading moves beyond summary to explore <em>how</em> the writing creates meaning and <em>why</em> the writer makes specific choices.</div>

<h3>Step-by-Step Approach</h3>

<h4>Step 1: Read the Question (1 minute)</h4>
<p>Read the question before the extract. Underline the key words. Knowing what you are looking for shapes your reading of the passage.</p>

<h4>Step 2: Read the Extract Twice (4 minutes)</h4>
<p>First reading: understand what is happening. Second reading: annotate, looking for features relevant to the question. Use the margins of your exam paper.</p>

<h4>Step 3: Annotate Systematically (3 minutes)</h4>
<p>On your second reading, mark up:</p>
<ul>
  <li><strong>Striking language</strong> — Powerful verbs, unusual adjectives, figurative language</li>
  <li><strong>Narrative perspective</strong> — Whose viewpoint are we in? How does this shape our understanding?</li>
  <li><strong>Sentence structure</strong> — Short sentences for impact? Long, complex sentences for flow? Fragments? Questions?</li>
  <li><strong>Dialogue</strong> — What does the speech reveal about character or tension?</li>
  <li><strong>Imagery and symbolism</strong> — What images dominate? What might they represent?</li>
  <li><strong>Shifts</strong> — Where does the tone, pace, or focus change within the extract?</li>
</ul>

<h4>Step 4: Plan Your Response (3 minutes)</h4>
<p>Select four or five key moments from the extract that offer the richest material for analysis. Order them to create a coherent argument — ideally following the passage's progression from beginning to end.</p>

<h4>Step 5: Write (30 minutes)</h4>
<p>Each analytical paragraph should include:</p>
<ol>
  <li>A clear point connected to the question</li>
  <li>A precise, short quotation from the extract</li>
  <li>Detailed analysis of the language and/or structure</li>
  <li>An explanation of the effect on the reader</li>
  <li>Where relevant, a link to the wider text or to context</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> CAIE examiners specifically reward candidates who link the extract to the <strong>wider text</strong>. If the passage shows a character in a moment of crisis, briefly reference how this compares with their earlier behaviour or foreshadows later events. This demonstrates AO1 (textual knowledge) and shows you understand the extract's significance within the whole novel.</div>

<h3>Analysing Prose Language</h3>
<p>Prose analysis requires attention to features that are sometimes overlooked in poetry study:</p>
<ul>
  <li><strong>Sentence length and rhythm</strong> — A series of short, punchy sentences creates urgency or tension. Long, flowing sentences can create contemplation or confusion. Variation in sentence length creates pace and emphasis.</li>
  <li><strong>Paragraphing</strong> — A single-sentence paragraph stands out dramatically. A long, unbroken paragraph can create a sense of claustrophobia or relentless momentum.</li>
  <li><strong>Free indirect discourse</strong> — When the narrator's voice merges with a character's thoughts without using direct speech marks. This blurs the line between narrator and character and is a sophisticated technique to analyse.</li>
  <li><strong>Reported vs direct speech</strong> — The choice between reporting what a character said and presenting their actual words creates different effects on distance and immediacy.</li>
</ul>

<h3>Connecting Extract to Whole Text</h3>
<p>The strongest responses do not treat the extract in isolation. They show awareness of:</p>
<ul>
  <li>What has happened before this extract — what led to this moment?</li>
  <li>What happens after — how does this extract set up future developments?</li>
  <li>How the extract relates to the text's major themes</li>
  <li>How the character(s) in the extract compare with their presentation elsewhere</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending the entire essay on the first few lines of the extract and running out of time before reaching the end. Ensure you cover the <strong>whole extract</strong> — beginning, middle, and end. Examiners notice when candidates only address part of the passage.</div>
`,
    quiz: [
      {
        id: 'caie-prose-m4-q1',
        question: 'Why should you read the question before reading the extract?',
        options: [
          'Because the question contains the answers',
          'Because knowing what you are looking for shapes your reading and helps you annotate relevantly',
          'Because you might not have time to read the question later',
          'Because the question tells you which paragraphs to skip',
        ],
        correct: 1,
        explanation: 'Reading the question first gives you a lens through which to read the extract. If the question asks about atmosphere, you will naturally notice sensory details and setting; if it asks about character, you will focus on dialogue and description. This focused reading produces more relevant analysis.',
      },
      {
        id: 'caie-prose-m4-q2',
        question: 'What is free indirect discourse?',
        options: [
          'When a character speaks without quotation marks around their words',
          'When the narrator\'s voice merges with a character\'s thoughts without using direct speech',
          'When the narrator addresses the reader directly',
          'When dialogue is written in a regional dialect',
        ],
        correct: 1,
        explanation: 'Free indirect discourse is a narrative technique where the narrator\'s voice blends with a character\'s thoughts, presenting the character\'s perspective without the formal markers of direct speech or explicit "she thought" tags. It creates intimacy while maintaining narrative control.',
      },
      {
        id: 'caie-prose-m4-q3',
        question: 'How should you connect the extract to the wider text?',
        options: [
          'Retell the entire plot of the novel before analysing the extract',
          'Briefly reference how the extract compares with other moments, foreshadows events, or relates to major themes',
          'Ignore the wider text entirely and focus only on the extract',
          'Write a separate paragraph at the end summarising the whole novel',
        ],
        correct: 1,
        explanation: 'Brief, integrated references to the wider text demonstrate AO1 (textual knowledge) and show you understand the extract\'s significance within the whole novel. These should be concise connections woven into your analysis, not lengthy plot summaries.',
      },
      {
        id: 'caie-prose-m4-q4',
        question: 'Why is sentence length an important feature to analyse in prose?',
        options: [
          'Because longer sentences always indicate better writing',
          'Because sentence length affects pace, rhythm, and emphasis — short sentences create urgency while long ones create flow',
          'Because the mark scheme specifically requires analysis of sentence length',
          'Because you should count the words in each sentence',
        ],
        correct: 1,
        explanation: 'Sentence length is a deliberate structural choice by the writer. Short, punchy sentences create urgency, tension, or blunt impact; long, flowing sentences create contemplation or build momentum. Variation controls the reader\'s pace and emotional experience.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Essay Questions and Context
  // ──────────────────────────────────────────────
  {
    id: 'caie-prose-m5',
    title: 'Essay Questions and Context Integration',
    duration: '55 min',
    content: `
<h2>CAIE Prose Essay Questions and Integrating Context</h2>

<p>Essay questions on CAIE prose texts require you to write from memory, demonstrating detailed knowledge of the whole text and constructing a sustained, coherent argument. Unlike passage-based questions, you must recall your own quotations and organise your response around a central thesis. This module covers essay technique and the crucial skill of integrating context.</p>

<h3>Understanding CAIE Prose Essay Questions</h3>
<p>Essay questions for prose texts typically take one of these forms:</p>
<ul>
  <li><em>"How does [writer] present the theme of [theme] in [text]?"</em></li>
  <li><em>"Explore the significance of [character/event/setting] in [text]."</em></li>
  <li><em>"'[Quotation from the text or a critical statement].' How far do you agree with this view of [text]?"</em></li>
</ul>
<p>Each question type requires a slightly different approach, but all demand the same core skills: detailed knowledge, analytical precision, and sustained argument.</p>

<h3>Building Your Argument</h3>
<p>A strong essay has a clear <strong>thesis</strong> — an overarching claim that your entire essay supports and develops. This thesis should appear in your introduction and be reinforced (not merely repeated) in your conclusion.</p>

<h4>How to Develop a Thesis</h4>
<ol>
  <li><strong>Read the question carefully</strong> — What exactly is it asking?</li>
  <li><strong>Take a position</strong> — What is your answer? Be specific, not vague.</li>
  <li><strong>Add complexity</strong> — Avoid one-dimensional claims. "The writer presents power as..." is weak. "The writer presents power as simultaneously seductive and destructive, revealing how..." is strong because it acknowledges complexity.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If the question asks "How far do you agree?", the strongest responses typically agree <em>partially</em>, identifying aspects of the text that support the statement and aspects that complicate or contradict it. A nuanced, balanced argument is far more convincing than wholesale agreement or disagreement.</div>

<h3>Structuring Your Essay</h3>
<p>A well-structured prose essay follows this pattern:</p>

<h4>Introduction (1 paragraph)</h4>
<p>State your thesis. Briefly indicate the main strands of your argument. If relevant, acknowledge the text's context in a sentence. Do not waste time with generic openings like "In this essay I will discuss..."</p>

<h4>Body Paragraphs (3–5 paragraphs)</h4>
<p>Each paragraph should develop one main point that supports your thesis. Use the structure:</p>
<ol>
  <li><strong>Topic sentence</strong> — State your point clearly, connecting it to the question and your thesis.</li>
  <li><strong>Evidence</strong> — Provide a short, embedded quotation (or precise textual reference).</li>
  <li><strong>Analysis</strong> — Examine the writer's language, form, or structure. What techniques are used? What effects are created?</li>
  <li><strong>Context</strong> — Where relevant, connect to historical, cultural, or literary context.</li>
  <li><strong>Link</strong> — Connect back to the question and your thesis.</li>
</ol>

<h4>Conclusion (1 paragraph)</h4>
<p>Do not simply repeat your introduction. Offer a final evaluative insight — a considered judgement that synthesises your argument. You might comment on the writer's overall achievement, the text's lasting significance, or the implications of your interpretation.</p>

<h3>Integrating Context (AO2)</h3>
<p>Context integration is one of the most challenging skills for CAIE candidates. Done well, it elevates your analysis to the highest levels. Done poorly, it creates awkward, bolted-on paragraphs that interrupt your argument.</p>

<h4>Types of Context</h4>
<ul>
  <li><strong>Historical context</strong> — The events, conditions, and attitudes of the period in which the text was written or set. Example: the impact of colonialism on a post-colonial novel.</li>
  <li><strong>Cultural context</strong> — The social norms, values, and traditions relevant to the text. Example: Victorian attitudes to gender in a 19th-century novel.</li>
  <li><strong>Literary context</strong> — The literary traditions, movements, and conventions the writer draws on or subverts. Example: a novel that plays with the conventions of the Gothic genre.</li>
  <li><strong>Biographical context</strong> — The writer's own experiences and circumstances, where relevant. Use sparingly — the text should be your primary focus.</li>
</ul>

<h4>How to Integrate Context</h4>
<p>The key word is <strong>integrate</strong>. Context should be woven into your analysis, not separated from it. Here is the difference:</p>

<p><strong>Weak (bolted-on):</strong> "In the 1930s, there was significant racial prejudice in America. This is shown in the novel when..."</p>

<p><strong>Strong (integrated):</strong> "The writer's decision to have [character] use the word '[specific term]' reflects the casual, systemic racism of 1930s America, and the fact that no other character challenges this language reveals the depth of the prejudice the writer seeks to expose."</p>

<p>In the strong version, the context is inseparable from the analysis — it explains <em>why</em> the writer makes a specific language choice and <em>what effect</em> that choice creates.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a "context paragraph" that contains no analysis. Paragraphs that read like history textbook entries — listing facts about the era without connecting them to the writer's choices — will not earn strong AO2 marks. Every contextual reference must serve your literary argument.</div>

<h3>Quotation Technique for Memory-Based Essays</h3>
<p>Since you will not have the text in front of you, your quotation skills must be efficient:</p>
<ul>
  <li><strong>Keep quotations short</strong> — Three to six words is ideal. Short quotations are easier to remember and easier to embed in your sentences.</li>
  <li><strong>Embed quotations grammatically</strong> — Weave them into your own sentences so they read fluently. "The writer describes him as a 'shadow of a man', suggesting..." is smoother than writing out the quotation separately.</li>
  <li><strong>If you cannot recall exact words</strong>, use precise textual references: "In Chapter 5, when [character] discovers [event], the writer emphasises..." This still demonstrates knowledge.</li>
  <li><strong>Quality over quantity</strong> — Four well-analysed quotations are worth more than ten quotations that are merely listed.</li>
</ul>
`,
    quiz: [
      {
        id: 'caie-prose-m5-q1',
        question: 'What makes a strong thesis for a CAIE Literature essay?',
        options: [
          'A single, simple claim that can be proven with one quotation',
          'A complex, specific claim that acknowledges nuance — e.g., "The writer presents power as simultaneously seductive and destructive"',
          'A thesis that agrees completely with the question without qualification',
          'A thesis that lists every theme in the novel',
        ],
        correct: 1,
        explanation: 'A strong thesis is specific, complex, and acknowledges nuance. One-dimensional claims produce one-dimensional essays. By acknowledging that a theme has multiple facets (e.g., "simultaneously seductive and destructive"), you create space for a rich, layered argument.',
      },
      {
        id: 'caie-prose-m5-q2',
        question: 'How should context be integrated into a CAIE Literature essay?',
        options: [
          'In a separate introductory paragraph before any analysis begins',
          'Woven into your analysis so that contextual references explain why the writer makes specific choices',
          'Only in the conclusion as a final reflective comment',
          'As footnotes at the bottom of each page',
        ],
        correct: 1,
        explanation: 'Context should be inseparable from your analysis — explaining why the writer makes specific language, character, or structural choices. Bolt-on context paragraphs that read like history lessons do not earn strong marks because they are not connected to literary analysis.',
      },
      {
        id: 'caie-prose-m5-q3',
        question: 'If you cannot recall an exact quotation in a memory-based essay, what should you do?',
        options: [
          'Make up a quotation that sounds plausible',
          'Skip the point entirely and move to the next paragraph',
          'Use a precise textual reference, describing the moment and the writer\'s approach',
          'Write "I cannot remember the exact quotation" and move on',
        ],
        correct: 2,
        explanation: 'A precise textual reference — describing the specific moment, chapter, and the writer\'s approach — still demonstrates detailed textual knowledge (AO1) even without the exact wording. This is far better than inventing a quotation or abandoning the point.',
      },
      {
        id: 'caie-prose-m5-q4',
        question: 'What should a conclusion do in a CAIE Literature essay?',
        options: [
          'Repeat the introduction word-for-word to reinforce the argument',
          'Introduce entirely new evidence and quotations',
          'Offer a final evaluative insight that synthesises the argument, going beyond mere repetition',
          'Summarise every paragraph of the essay in order',
        ],
        correct: 2,
        explanation: 'A strong conclusion synthesises your argument and offers a final evaluative judgement — about the writer\'s overall achievement, the text\'s significance, or the implications of your interpretation. Simply repeating the introduction wastes an opportunity to end with impact.',
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Prose Assessment Questions
// ──────────────────────────────────────────────
const proseAssessment: CourseQuiz[] = [
  {
    id: 'caie-prose-assess-q1',
    question: 'A CAIE exam question asks: "How does the writer present the relationship between [Character A] and [Character B]?" What should your essay primarily analyse?',
    options: [
      'A chronological summary of every interaction between the two characters',
      'The writer\'s methods — language, structure, dialogue, and symbolism — used to present the relationship and its significance',
      'Which character is more likeable and why',
      'The historical context of relationships in the period the novel was written',
    ],
    correct: 1,
    explanation: 'The word "how" directs you to the writer\'s methods. Your essay must analyse the techniques used to present the relationship — dialogue, narrative perspective, symbolic association, structural juxtaposition — not just describe the interactions.',
  },
  {
    id: 'caie-prose-assess-q2',
    question: 'Which of the following is the strongest example of integrated context in a prose analysis?',
    options: [
      '"The novel was written in 1960, a turbulent period in history."',
      '"The writer\'s use of dialect in [character\'s] speech positions them outside the educated elite, reflecting the rigid class structures of [era] and suggesting that linguistic exclusion mirrors social exclusion."',
      '"Context is important when studying this novel."',
      '"Many novels of this period dealt with similar themes."',
    ],
    correct: 1,
    explanation: 'This option integrates context into analysis of the writer\'s technique (use of dialect), explaining how historical social structures shape the writer\'s language choices and what effect this creates. The other options either state context without analysis or are too vague.',
  },
  {
    id: 'caie-prose-assess-q3',
    question: 'What is the key difference between passage-based and essay questions for CAIE prose?',
    options: [
      'Passage-based questions are easier and worth fewer marks',
      'Essay questions do not require quotations',
      'Passage-based questions provide the text for close reading; essay questions require you to write from memory with recalled quotations',
      'Passage-based questions only ask about language; essay questions only ask about themes',
    ],
    correct: 2,
    explanation: 'The fundamental difference is access to the text. Passage-based questions provide an extract for detailed close reading, while essay questions require you to recall quotations from memory and demonstrate broad knowledge of the whole text.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// CAIE Literature — Drama  (0475 / 0992)
// ═══════════════════════════════════════════════════════════════════════════════

const dramaModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Drama Analysis Fundamentals
  // ──────────────────────────────────────────────
  {
    id: 'caie-drama-m1',
    title: 'Drama Analysis: Foundations for CAIE',
    duration: '55 min',
    content: `
<h2>Analysing Drama for CAIE Literature</h2>

<p>Drama is literature designed for <strong>performance</strong>. This fundamental fact must underpin every aspect of your analysis for the Cambridge IGCSE Literature specification (0475/0992). Unlike prose and poetry, a play is not a finished product on the page — it is a blueprint for performance, a set of instructions for actors, directors, and designers. Your analysis must account for this dual nature: the text as written literature <strong>and</strong> the text as performed experience.</p>

<div class="key-term"><strong>Key Term: Dramatic Text</strong> — A literary work intended for performance, consisting of dialogue (words spoken by characters), stage directions (instructions for movement, tone, and setting), and implicit performance cues (rhythms, pauses, and tensions embedded in the language itself).</div>

<h3>What Makes Drama Different?</h3>
<p>When studying drama for CAIE, you must adjust your analytical approach in several key ways:</p>

<h4>1. No Narrator</h4>
<p>In prose, a narrator mediates between the reader and the story. In drama, there is no such mediation — the characters speak directly, and the audience must interpret meaning without narratorial guidance. This means <strong>everything</strong> is revealed through dialogue, action, and visual cues. When you analyse drama, you are analysing what the audience sees and hears, not what a narrator tells them.</p>

<h4>2. Dialogue as the Primary Vehicle</h4>
<p>Dialogue carries the weight of characterisation, theme, plot development, and atmosphere in drama. Analyse dialogue not just for content (what is said) but for:</p>
<ul>
  <li><strong>Subtext</strong> — What characters mean but do not say directly. Much of drama's power lies beneath the surface of the spoken words.</li>
  <li><strong>Turn-taking</strong> — Who speaks, who is silenced, who interrupts, who dominates. The distribution of dialogue reveals power dynamics.</li>
  <li><strong>Register shifts</strong> — When a character changes their speaking style (formal to informal, controlled to frantic), this signals an emotional or psychological shift.</li>
  <li><strong>Dramatic irony</strong> — When the audience knows something a character does not, creating tension, humour, or pathos. This is uniquely powerful in drama because of the audience's direct relationship with the action.</li>
</ul>

<h4>3. Stage Directions and Visual Language</h4>
<p>Stage directions are the playwright's instructions about movement, gesture, tone of voice, and setting. They are not merely practical notes — they are part of the literary text. Analyse them as carefully as you would analyse dialogue.</p>

<h4>4. Audience Awareness</h4>
<p>A dramatist writes with an audience in mind. Every dramatic choice is designed to create a specific impact on the people watching. Your analysis should regularly consider <strong>audience response</strong>: How would this moment make the audience feel? What does the playwright want the audience to think at this point?</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Using the phrase "the audience would..." or "the playwright creates a sense of... for the audience" demonstrates awareness that drama is a performed art. This is one of the simplest ways to improve your drama essays. Never refer to "the reader" when discussing drama — always "the audience" or "the spectator".</div>

<h3>The CAIE Assessment Objectives for Drama</h3>
<p>The same four AOs apply to drama, each at 25%:</p>
<ul>
  <li><strong>AO1</strong> — Detailed knowledge of the play with well-chosen textual references</li>
  <li><strong>AO2</strong> — Understanding of how context shapes meanings</li>
  <li><strong>AO3</strong> — Analysis of the playwright's use of language, form, and structure (including dramatic techniques)</li>
  <li><strong>AO4</strong> — Developed personal response</li>
</ul>

<p>For drama, AO3 should encompass specifically <strong>dramatic</strong> techniques — staging, dialogue, dramatic irony, soliloquy, asides, entrances and exits, pacing of scenes — not just the language features you would discuss in poetry or prose.</p>

<h3>Key Dramatic Concepts</h3>
<ul>
  <li><strong>Exposition</strong> — The opening section where the playwright establishes the setting, characters, and situation. How this information is delivered (naturally through dialogue vs. awkward info-dumping) reveals the playwright's skill.</li>
  <li><strong>Rising action</strong> — The escalation of conflict and tension that drives the plot toward its climax.</li>
  <li><strong>Climax</strong> — The moment of greatest tension or the turning point of the play.</li>
  <li><strong>Denouement</strong> — The resolution (or deliberate lack of resolution) that follows the climax.</li>
  <li><strong>Catharsis</strong> — The emotional release experienced by the audience, particularly in tragedy. The audience's emotional journey is a deliberate construction by the playwright.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing a play as if it were a novel. Writing "the reader feels..." or "in this paragraph..." reveals that you are not engaging with the text as drama. Always use dramatic vocabulary: "scene", "act", "the audience", "on stage", "the playwright presents". Think about how the action would look and sound in a theatre.</div>
`,
    quiz: [
      {
        id: 'caie-drama-m1-q1',
        question: 'What is the fundamental difference between drama and prose in terms of narration?',
        options: [
          'Drama always has a narrator; prose sometimes does not',
          'Drama has no narrator — meaning is conveyed entirely through dialogue, action, and visual cues',
          'Drama uses a first-person narrator; prose uses third person',
          'There is no meaningful difference in narration between drama and prose',
        ],
        correct: 1,
        explanation: 'In drama, there is no narrator to mediate between the audience and the story. Everything the audience learns comes through dialogue, action, stage directions, and visual/auditory cues. This fundamentally shapes how meaning is created and how you should analyse it.',
      },
      {
        id: 'caie-drama-m1-q2',
        question: 'Why should you refer to "the audience" rather than "the reader" when writing about drama?',
        options: [
          'Because it is a requirement of the CAIE mark scheme',
          'Because drama is designed for performance and the audience experiences the play directly, not through reading',
          'Because "the reader" is only used for non-fiction texts',
          'Because all CAIE drama texts are studied through performance, never through reading',
        ],
        correct: 1,
        explanation: 'Drama is fundamentally a performed art. Using "the audience" demonstrates awareness of this and shows you understand that the playwright creates effects for spectators who see and hear the action directly, without narratorial mediation.',
      },
      {
        id: 'caie-drama-m1-q3',
        question: 'What is "subtext" in drama?',
        options: [
          'The text printed below the stage directions',
          'What characters mean but do not say directly — the meaning beneath the surface of dialogue',
          'The footnotes added by editors to explain difficult vocabulary',
          'The secondary plot that runs alongside the main plot',
        ],
        correct: 1,
        explanation: 'Subtext is the unspoken meaning beneath dialogue — what characters imply, conceal, or avoid saying. Much of drama\'s power lies in subtext, and analysing it demonstrates sophisticated understanding of how playwrights create meaning through what is left unsaid.',
      },
      {
        id: 'caie-drama-m1-q4',
        question: 'What is dramatic irony?',
        options: [
          'When a character makes a sarcastic remark',
          'When the audience knows something a character does not, creating tension or pathos',
          'When the ending of a play is unexpected',
          'When a character says the opposite of what they mean',
        ],
        correct: 1,
        explanation: 'Dramatic irony occurs when the audience possesses knowledge that a character lacks. This creates powerful effects — tension (we know danger is coming), pathos (we understand a character\'s ignorance), or dark humour. It is uniquely powerful in drama because of the audience\'s direct relationship with the action.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Stagecraft and Performance
  // ──────────────────────────────────────────────
  {
    id: 'caie-drama-m2',
    title: 'Stagecraft and Performance Elements',
    duration: '55 min',
    content: `
<h2>Understanding Stagecraft for CAIE Literature</h2>

<p>Stagecraft — the art of creating theatrical effects — is a crucial dimension of drama analysis that many candidates neglect. For CAIE Literature, demonstrating awareness of how a play works <strong>on stage</strong> is essential for achieving high AO3 marks. This module teaches you to think like a director, analysing the playwright's implicit and explicit instructions for performance.</p>

<h3>What Is Stagecraft?</h3>
<p>Stagecraft encompasses all the elements that contribute to the theatrical experience beyond the dialogue itself. When you analyse stagecraft, you are examining how the playwright has designed the play to be <strong>seen and heard</strong>, not just read.</p>

<div class="key-term"><strong>Key Term: Stagecraft</strong> — The techniques and conventions used to create theatrical effects, including staging, blocking (character positioning), lighting, sound, set design, props, costume, entrances/exits, and the use of dramatic time and space. A playwright embeds stagecraft cues in stage directions and in the structure of the dialogue itself.</div>

<h3>Key Elements of Stagecraft</h3>

<h4>1. Setting and Stage Design</h4>
<p>The physical environment of a scene is not merely a backdrop — it creates meaning. Consider:</p>
<ul>
  <li><strong>Enclosed spaces</strong> — A single room can create claustrophobia, suggesting entrapment, intense intimacy, or inescapable confrontation.</li>
  <li><strong>Open spaces</strong> — An outdoor or expansive setting can suggest freedom, exposure, or vulnerability.</li>
  <li><strong>Changes in setting</strong> — When the action moves between locations, this often mirrors shifts in theme, power dynamics, or emotional state.</li>
  <li><strong>Symbolic settings</strong> — A courtroom suggests judgement; a garden suggests innocence or temptation; a battlefield suggests conflict. Playwrights choose settings deliberately.</li>
</ul>

<h4>2. Entrances and Exits</h4>
<p>The moment a character enters or leaves the stage is always significant. Ask:</p>
<ul>
  <li>Who is on stage when a new character arrives? What is the dynamic?</li>
  <li>Does the entrance interrupt a conversation? What is the effect of this interruption?</li>
  <li>Does a character exit voluntarily, or are they forced out? What does this reveal about power?</li>
  <li>Who is left on stage after an exit? A character left alone may deliver a soliloquy, revealing their private thoughts.</li>
</ul>

<h4>3. Proxemics (Spatial Relationships)</h4>
<p>The physical distance between characters on stage communicates relationship dynamics:</p>
<ul>
  <li><strong>Closeness</strong> suggests intimacy, conspiracy, or threat</li>
  <li><strong>Distance</strong> suggests formality, alienation, or emotional separation</li>
  <li><strong>A character alone in space</strong> suggests isolation or authority</li>
  <li><strong>Characters turning away from each other</strong> suggests conflict, shame, or rejection</li>
</ul>

<h4>4. Props and Objects</h4>
<p>Objects on stage can carry powerful symbolic meaning. A letter, a weapon, a mirror, a key — each becomes freighted with significance in the context of the drama. When a prop is mentioned or used, consider why the playwright has included it and what it represents.</p>

<h4>5. Silence and Pauses</h4>
<p>Silence is as powerful as speech in drama. A pause indicated in stage directions (or implied by the rhythm of the dialogue) creates:</p>
<ul>
  <li><strong>Tension</strong> — The audience waits, uncertain what will happen next</li>
  <li><strong>Emotional weight</strong> — A character struggles to speak, suggesting overwhelming feeling</li>
  <li><strong>Power</strong> — A character who controls the silence controls the scene</li>
  <li><strong>Subtext</strong> — What is not said may be more important than what is</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Harold Pinter famously described silences as coming in three kinds: "the silence when no word is spoken, the silence when perhaps a torrent of language is being employed, and the speech that is speaking of a language locked beneath it." When analysing CAIE drama texts, always consider what silences and pauses contribute to meaning. Discussing silence demonstrates sophisticated performance awareness.</div>

<h3>Dramatic Pace and Rhythm</h3>
<p>Plays have a rhythm — sequences of fast, intense dialogue alternate with slower, reflective moments. The playwright controls pace through:</p>
<ul>
  <li><strong>Stichomythia</strong> — Rapid, alternating single-line exchanges that create tension, conflict, or wit. Common in Shakespeare and classical drama.</li>
  <li><strong>Long speeches and monologues</strong> — Slow the pace, allowing reflection, revelation, or persuasion.</li>
  <li><strong>Interruptions</strong> — Breaking into another character's speech creates urgency, aggression, or excitement.</li>
  <li><strong>Scene transitions</strong> — The gap between scenes creates a breathing space for the audience and can signal the passage of time.</li>
</ul>

<h3>Applying Stagecraft Analysis to Your Essays</h3>
<p>When writing about drama, integrate stagecraft observations into your analysis of language and character:</p>
<p><strong>Weak:</strong> "Lady Macbeth says she wants to be cruel."</p>
<p><strong>Strong:</strong> "Lady Macbeth's soliloquy, delivered alone on stage, creates a disturbing intimacy between character and audience. The absence of other characters allows the playwright to reveal her private ambition without the social performance she maintains in public scenes. The audience becomes her only confidant, implicating them in her transgressive desires."</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating stage directions as mere instructions that have no analytical value. Stage directions are part of the literary text and can be quoted and analysed just like dialogue. A direction like "[He turns away from her]" reveals as much about the relationship as any line of speech.</div>
`,
    quiz: [
      {
        id: 'caie-drama-m2-q1',
        question: 'What is "proxemics" in the context of drama analysis?',
        options: [
          'The study of how lighting affects mood',
          'The analysis of spatial relationships between characters on stage and what they communicate',
          'The order in which characters enter the stage',
          'The volume at which characters deliver their lines',
        ],
        correct: 1,
        explanation: 'Proxemics refers to the use of physical space and distance between characters on stage. Closeness can suggest intimacy or threat; distance can suggest alienation or formality. Analysing proxemics demonstrates awareness of how staging creates meaning beyond dialogue.',
      },
      {
        id: 'caie-drama-m2-q2',
        question: 'Why are pauses and silences significant in drama?',
        options: [
          'They give actors time to remember their lines',
          'They are always mistakes by the playwright',
          'They create tension, convey emotional weight, signal subtext, and can demonstrate power dynamics',
          'They are only significant in comedies, not tragedies',
        ],
        correct: 2,
        explanation: 'Silence is a deliberate dramatic tool. Pauses create tension, convey overwhelming emotion, reveal subtext (what is left unsaid), and can demonstrate power (whoever controls the silence controls the scene). Analysing silence shows sophisticated understanding of performance.',
      },
      {
        id: 'caie-drama-m2-q3',
        question: 'What is stichomythia?',
        options: [
          'A long speech delivered to the audience',
          'Rapid, alternating single-line exchanges between characters',
          'A character speaking their thoughts aloud while alone on stage',
          'The final speech in a play',
        ],
        correct: 1,
        explanation: 'Stichomythia is a technique where characters exchange rapid, short lines of dialogue in quick succession. It creates tension, conflict, or sharp wit and is commonly found in Shakespeare and classical drama. It accelerates the pace and intensifies the dramatic moment.',
      },
      {
        id: 'caie-drama-m2-q4',
        question: 'Should stage directions be quoted and analysed in a drama essay?',
        options: [
          'No — stage directions are only practical instructions for actors',
          'Only if the question specifically asks about stage directions',
          'Yes — stage directions are part of the literary text and reveal character, mood, and meaning',
          'Only Shakespeare\'s stage directions are worth analysing',
        ],
        correct: 2,
        explanation: 'Stage directions are integral to the dramatic text. They reveal character relationships, emotional states, power dynamics, and atmosphere. A direction like "[He turns away from her]" can be analysed for its significance just as meaningfully as a line of dialogue.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Shakespeare for CAIE
  // ──────────────────────────────────────────────
  {
    id: 'caie-drama-m3',
    title: 'Shakespeare for CAIE Literature',
    duration: '60 min',
    content: `
<h2>Studying Shakespeare for CAIE Literature</h2>

<p>Shakespeare is a core component of the CAIE Literature specification. Whether you are studying <em>Othello</em>, <em>The Merchant of Venice</em>, <em>A Midsummer Night's Dream</em>, or another set text, the challenges are consistent: Early Modern English, dense poetic language, complex dramatic structures, and layered thematic concerns. This module gives you the tools to tackle Shakespeare with confidence.</p>

<h3>Understanding Shakespeare's Language</h3>
<p>The single biggest barrier for many students is Shakespeare's language. Written over 400 years ago, it uses vocabulary, syntax, and idioms unfamiliar to modern readers. However, the language is not random — it is extraordinarily precise and deliberate. Your job is to decode it.</p>

<h4>Key Language Features in Shakespeare</h4>
<ul>
  <li><strong>Verse and prose</strong> — Shakespeare alternates between blank verse (unrhymed iambic pentameter) and prose. The switch is always significant: verse is typically used by noble characters or in moments of high emotion; prose is used by lower-status characters, in comic scenes, or when a character is being deliberately informal or blunt.</li>
  <li><strong>Imagery clusters</strong> — Shakespeare often builds patterns of imagery around particular themes. In <em>Macbeth</em>, darkness and blood imagery pervade the text. In <em>Othello</em>, images of animals, poison, and sight/blindness recur. Tracking these clusters reveals thematic preoccupations.</li>
  <li><strong>Puns and wordplay</strong> — Shakespeare's wordplay is not merely humorous — it often reveals deeper meanings. A pun creates a moment where two meanings coexist, generating ambiguity and complexity.</li>
  <li><strong>Soliloquy</strong> — A speech delivered by a character alone on stage, revealing their private thoughts to the audience. Soliloquies are privileged moments of access to a character's interior life and are crucial for CAIE analysis.</li>
  <li><strong>Aside</strong> — A brief remark directed at the audience that other characters on stage cannot hear. Asides create complicity between the speaker and the audience.</li>
</ul>

<div class="key-term"><strong>Key Term: Blank Verse</strong> — Unrhymed iambic pentameter — lines of ten syllables with alternating unstressed and stressed beats (da-DUM da-DUM da-DUM da-DUM da-DUM). This is the backbone of Shakespeare's dramatic language. When the metre is disrupted, the disruption draws attention to the word or moment where it occurs.</div>

<h3>Shakespeare's Dramatic Structures</h3>
<p>Shakespeare's plays follow recognisable structural patterns that you should be able to identify and discuss:</p>

<h4>The Five-Act Structure</h4>
<ol>
  <li><strong>Act 1 — Exposition</strong>: The world of the play is established. Characters, relationships, and the central conflict are introduced.</li>
  <li><strong>Act 2 — Rising Action</strong>: The conflict intensifies. Complications arise, alliances form and shift, and tension builds.</li>
  <li><strong>Act 3 — Climax</strong>: The turning point. The central conflict reaches its peak, and the protagonist's fate is often sealed here.</li>
  <li><strong>Act 4 — Falling Action</strong>: The consequences of the climax unfold. In tragedy, the protagonist's situation worsens; in comedy, complications begin to resolve.</li>
  <li><strong>Act 5 — Resolution/Denouement</strong>: The conflict is resolved. In tragedy, this typically involves death; in comedy, marriage and reconciliation.</li>
</ol>

<h4>Parallel Plots</h4>
<p>Shakespeare frequently uses multiple plots that mirror, contrast, or comment on each other. The subplot is not filler — it deepens the audience's understanding of the main plot's themes by presenting them from a different angle.</p>

<h3>Context for Shakespeare (AO2)</h3>
<p>For CAIE, contextual understanding is worth 25% of your marks. Key contextual areas for Shakespeare include:</p>
<ul>
  <li><strong>Elizabethan/Jacobean social hierarchy</strong> — The Great Chain of Being, the divine right of kings, gender roles, and social mobility (or lack thereof).</li>
  <li><strong>Theatre conventions</strong> — The Globe Theatre, boy actors playing female roles, the relationship between the stage and the audience (groundlings, asides, direct address).</li>
  <li><strong>Religious and philosophical context</strong> — The Protestant Reformation, concepts of sin and redemption, the tension between classical and Christian thought.</li>
  <li><strong>Genre conventions</strong> — What the Elizabethan audience expected from a tragedy, a comedy, or a history play, and how Shakespeare fulfils or subverts those expectations.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing Shakespeare's context, focus on how contextual factors shape the <strong>dramatic choices</strong> in the text. For example, do not just state "women had fewer rights in Elizabethan England." Instead, explain how this context shapes the audience's response to a particular female character's defiance — why it would have been shocking, admirable, or dangerous to contemporary audiences.</div>

<h3>Close Reading Shakespeare: A Practical Method</h3>
<p>When analysing a Shakespeare passage, work through these steps:</p>
<ol>
  <li><strong>Paraphrase</strong> — Translate the passage into modern English. What is the character actually saying?</li>
  <li><strong>Identify the form</strong> — Is this verse or prose? If verse, is it regular or disrupted? Is it a soliloquy, dialogue, or aside?</li>
  <li><strong>Examine imagery</strong> — What images dominate? What semantic fields are present? How do the images connect to the play's broader thematic patterns?</li>
  <li><strong>Analyse structure</strong> — How does the speech develop? Is there a shift in tone or argument? How does the punctuation guide delivery?</li>
  <li><strong>Consider dramatic effect</strong> — How would this moment work on stage? What would the audience see, hear, and feel?</li>
  <li><strong>Connect to context</strong> — How does the passage relate to its historical/cultural context?</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Being intimidated by Shakespeare's language and retreating into plot summary. If you do not understand a specific phrase, move on to what you <em>do</em> understand and analyse that. A detailed analysis of two lines you understand fully is worth far more than a vague commentary on an entire speech you have only partly grasped.</div>
`,
    quiz: [
      {
        id: 'caie-drama-m3-q1',
        question: 'Why does Shakespeare alternate between verse and prose?',
        options: [
          'He switches randomly depending on how much he has written',
          'Verse is for noble characters and emotional moments; prose is for lower-status characters, comedy, or deliberate informality',
          'Verse is used in tragedies and prose in comedies',
          'Prose is easier to write, so he uses it when he is tired',
        ],
        correct: 1,
        explanation: 'The verse/prose distinction is deliberate and meaningful. Verse (typically blank verse) signals elevated status, emotional intensity, or formality. Prose signals lower social status, comedy, directness, or moments where a character drops their public persona. The switch between them always carries significance.',
      },
      {
        id: 'caie-drama-m3-q2',
        question: 'What is a soliloquy?',
        options: [
          'A conversation between two characters about their feelings',
          'A speech delivered by a character alone on stage, revealing their private thoughts to the audience',
          'The final speech of a play',
          'A comic scene involving wordplay and puns',
        ],
        correct: 1,
        explanation: 'A soliloquy is delivered by a character alone on stage, giving the audience direct access to their inner thoughts. It creates intimacy and trust (or distrust, if the character is a villain). Soliloquies are privileged analytical moments because they reveal what characters think privately, away from social performance.',
      },
      {
        id: 'caie-drama-m3-q3',
        question: 'In the five-act structure, what typically happens in Act 3?',
        options: [
          'The characters and setting are introduced',
          'The subplot is resolved',
          'The climax — the turning point where the central conflict reaches its peak',
          'The final resolution and marriages or deaths occur',
        ],
        correct: 2,
        explanation: 'Act 3 is typically the climax — the turning point of the play where the central conflict reaches maximum intensity. In tragedy, the protagonist\'s fate is often sealed in Act 3. Understanding this structural pattern helps you discuss how Shakespeare builds and releases dramatic tension.',
      },
      {
        id: 'caie-drama-m3-q4',
        question: 'If you do not understand a specific phrase in a Shakespeare passage, what should you do?',
        options: [
          'Skip the passage entirely and write about a different scene',
          'Guess the meaning and write confidently about your guess',
          'Focus on what you DO understand and analyse those lines in detail',
          'Write that Shakespeare\'s language is too old to be understood',
        ],
        correct: 2,
        explanation: 'A detailed analysis of lines you genuinely understand is worth far more than vague commentary on an entire speech you have only partly grasped. Focus your close reading on the language you can engage with confidently, and demonstrate your analytical skills there.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Modern Drama
  // ──────────────────────────────────────────────
  {
    id: 'caie-drama-m4',
    title: 'Modern Drama for CAIE',
    duration: '55 min',
    content: `
<h2>Studying Modern Drama for CAIE Literature</h2>

<p>The CAIE set text list includes modern plays — works written from the late 19th century onwards. Modern drama differs from Shakespeare and classical theatre in significant ways, and understanding these differences strengthens your analysis. Whether you are studying Arthur Miller, J.B. Priestley, Willy Russell, Lorraine Hansberry, or another modern dramatist, this module provides the analytical frameworks you need.</p>

<h3>What Defines Modern Drama?</h3>
<p>Modern drama emerged from a desire to represent life more realistically on stage. While Shakespeare's characters speak in verse and his plots involve kings and supernatural beings, modern dramatists sought to depict <strong>ordinary people in recognisable situations</strong>. Key features include:</p>
<ul>
  <li><strong>Realistic dialogue</strong> — Characters speak in a way that sounds like natural conversation, with hesitations, colloquialisms, and interruptions.</li>
  <li><strong>Social and political themes</strong> — Modern drama frequently engages with class, gender, race, power, justice, and family. Many modern plays are explicitly political.</li>
  <li><strong>Psychological depth</strong> — Characters have complex inner lives, and their motivations may be ambiguous or contradictory.</li>
  <li><strong>Domestic settings</strong> — Many modern plays take place in homes, workplaces, or communities rather than palaces and battlefields.</li>
  <li><strong>Subtext</strong> — Modern dramatists rely heavily on subtext — what is implied beneath the surface of dialogue — rather than having characters state their feelings directly.</li>
</ul>

<div class="key-term"><strong>Key Term: Naturalism/Realism</strong> — A dramatic movement that sought to represent life on stage as it is actually lived, with realistic settings, dialogue, and characters. Naturalism was pioneered by playwrights like Henrik Ibsen and Anton Chekhov in the late 19th century and influenced most 20th-century drama. Not all modern plays are naturalistic — some deliberately break with realism — but naturalism remains the dominant mode.</div>

<h3>Key Modern Dramatic Techniques</h3>

<h4>1. The Well-Made Play</h4>
<p>Many CAIE set texts follow the structure of the "well-made play" — a tightly plotted drama with a clear beginning, middle, and end, building to a climactic revelation or confrontation. Priestley's <em>An Inspector Calls</em> and Miller's <em>All My Sons</em> are examples. In these plays, past secrets are gradually uncovered, and the structure itself creates tension.</p>

<h4>2. The Unity of Time and Place</h4>
<p>Some modern playwrights confine their action to a single location and a compressed time period (often a single evening or day). This creates intensity — the characters cannot escape each other or the conflict. Consider why the playwright chooses this compression and what effects it creates.</p>

<h4>3. Breaking the Fourth Wall</h4>
<p>Some modern dramatists break the convention that the audience is invisible. A character may address the audience directly, narrate events, or comment on the action. This <strong>Brechtian</strong> technique disrupts the audience's emotional immersion and forces them to think critically about what they are watching.</p>

<h4>4. Symbolism in Realistic Settings</h4>
<p>Modern plays often embed symbols within realistic settings. A broken clock, a locked door, a wilting plant — these objects function simultaneously as realistic props and as symbols carrying deeper meaning. Identifying and analysing these symbols demonstrates sophisticated reading.</p>

<h4>5. The Ending</h4>
<p>Modern plays often have <strong>ambiguous endings</strong> that resist neat resolution. The playwright may leave the central question unanswered, forcing the audience to decide for themselves. This ambiguity is deliberate and should be analysed, not dismissed as a flaw.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When studying a modern play, research its first performance. Knowing when and where the play was first staged — and how the original audience responded — provides valuable contextual material for AO2. A play that shocked audiences in 1947 may seem tame today, but understanding the original impact reveals the playwright's purpose.</div>

<h3>Social and Political Context in Modern Drama</h3>
<p>Modern drama is often overtly engaged with social issues. When integrating context into your analysis, consider:</p>
<ul>
  <li><strong>Class conflict</strong> — How does the play represent different social classes? Whose perspective is privileged? Whose is marginalised?</li>
  <li><strong>Gender roles</strong> — How does the play present masculinity and femininity? Does it challenge or reinforce the gender norms of its era?</li>
  <li><strong>Racial and cultural identity</strong> — How does the play engage with questions of race, ethnicity, or cultural belonging?</li>
  <li><strong>Power structures</strong> — Who holds power in the play? How is power maintained, challenged, or transferred?</li>
  <li><strong>The individual vs. society</strong> — Does the play suggest that individuals can change society, or that social structures are too powerful to resist?</li>
</ul>

<h3>Comparing Shakespeare and Modern Drama</h3>
<p>If your CAIE programme includes both Shakespeare and modern drama, you may be asked to consider connections. Key differences to understand:</p>

<table>
  <tr><th>Feature</th><th>Shakespeare</th><th>Modern Drama</th></tr>
  <tr><td>Language</td><td>Poetic verse and prose</td><td>Realistic, naturalistic dialogue</td></tr>
  <tr><td>Characters</td><td>Kings, nobles, supernatural beings</td><td>Ordinary people in recognisable situations</td></tr>
  <tr><td>Settings</td><td>Palaces, battlefields, forests</td><td>Homes, workplaces, communities</td></tr>
  <tr><td>Structure</td><td>Five acts with subplots</td><td>Two or three acts, often compressed</td></tr>
  <tr><td>Expression</td><td>Characters articulate feelings directly</td><td>Feelings are often implied through subtext</td></tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the social message of a modern play as its entire meaning. While plays like <em>An Inspector Calls</em> have clear social themes, reducing them to "the play is about social responsibility" misses the complexity of the dramatic experience. Discuss <em>how</em> the playwright communicates the message — through character, structure, tension, irony — not just <em>what</em> the message is.</div>
`,
    quiz: [
      {
        id: 'caie-drama-m4-q1',
        question: 'What is the defining characteristic of naturalistic drama?',
        options: [
          'It uses verse and poetic language',
          'It represents life on stage as it is actually lived, with realistic dialogue, settings, and characters',
          'It always involves supernatural elements',
          'It is written exclusively for outdoor performance',
        ],
        correct: 1,
        explanation: 'Naturalism seeks to replicate real life on stage through realistic dialogue, plausible characters, and recognisable settings. Pioneered by Ibsen and Chekhov, it remains the dominant mode of modern drama and shapes most CAIE set texts.',
      },
      {
        id: 'caie-drama-m4-q2',
        question: 'Why do some modern playwrights confine their action to a single location and compressed time period?',
        options: [
          'Because they lack imagination to create multiple settings',
          'Because it reduces production costs',
          'Because the compression creates intensity — characters cannot escape each other or the conflict',
          'Because CAIE requires single-setting plays',
        ],
        correct: 2,
        explanation: 'Confining the action to one place and time creates claustrophobic intensity. Characters are forced to confront each other and the central conflict without escape. This is a deliberate dramatic choice that heightens tension and concentrates the thematic exploration.',
      },
      {
        id: 'caie-drama-m4-q3',
        question: 'What does "breaking the fourth wall" mean?',
        options: [
          'Destroying the set during a performance',
          'A character addressing the audience directly, disrupting the illusion that the audience is invisible',
          'Changing the setting between scenes',
          'An actor forgetting their lines and speaking naturally',
        ],
        correct: 1,
        explanation: 'The "fourth wall" is the imaginary barrier between the stage and the audience. Breaking it — through direct address, narration, or acknowledgment of the audience — disrupts immersion and can force the audience to think critically about the action rather than simply feeling emotions.',
      },
      {
        id: 'caie-drama-m4-q4',
        question: 'Why is it a mistake to reduce a modern play to just its social message?',
        options: [
          'Because modern plays do not have social messages',
          'Because the mark scheme does not reward discussion of social themes',
          'Because discussing only WHAT the message is, without analysing HOW the playwright communicates it through dramatic methods, misses the complexity of the text',
          'Because social messages are only relevant to context, not analysis',
        ],
        correct: 2,
        explanation: 'While social themes are important, the exam tests your ability to analyse HOW the playwright communicates meaning — through character, structure, dialogue, irony, staging, and symbolism. Reducing a play to its "message" ignores the dramatic craft that makes the message powerful.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Open-Text Exam Technique (Paper 3)
  // ──────────────────────────────────────────────
  {
    id: 'caie-drama-m5',
    title: 'Open-Text Exam Technique for CAIE Drama',
    duration: '55 min',
    content: `
<h2>Mastering the CAIE Drama Exam: Passage-Based and Essay Questions</h2>

<p>The CAIE Literature drama component is examined through Paper 2 (Drama) or as part of Paper 4 (the coursework alternative). For the exam route, you will face both passage-based and essay questions on your set drama text(s). This module teaches you the specific techniques needed to excel in both question types, with particular attention to the demands of drama analysis under exam conditions.</p>

<h3>Paper Structure</h3>
<p>For Paper 2 (Drama), the structure typically involves:</p>
<ul>
  <li>One <strong>passage-based question</strong> — An extract from your set text is printed, and you analyse it in detail.</li>
  <li>One <strong>essay question</strong> — A broader question requiring you to write about the whole play from memory.</li>
</ul>
<p>You will answer on one set text (either Shakespeare or the modern drama text, depending on the question selection). Each answer carries equal marks.</p>

<div class="key-term"><strong>Key Term: Open Text</strong> — Some CAIE components allow you to bring a clean, unannotated copy of the text into the exam. If your component is "open text", you have access to the play but must still demonstrate analytical skill — having the text does not reduce the expectation for close reading. If your component is "closed text", you must work from memory.</div>

<h3>Passage-Based Questions for Drama</h3>
<p>Drama passage-based questions require a specific approach that differs from prose passage-based work:</p>

<h4>Reading the Extract as Drama</h4>
<p>When you receive the extract, read it as a <strong>scene</strong>, not as a page of text:</p>
<ul>
  <li>Visualise the stage. Where are the characters positioned? How do they move?</li>
  <li>Hear the dialogue. What tone of voice would actors use? Where would they pause? What would they emphasise?</li>
  <li>Notice entrances and exits. Who arrives? Who leaves? What changes when they do?</li>
  <li>Consider what the audience sees vs. what individual characters know. Is there dramatic irony?</li>
</ul>

<h4>Annotating a Drama Extract</h4>
<p>Your annotations should focus on:</p>
<ul>
  <li><strong>Power dynamics</strong> — Who dominates? Who submits? How does power shift?</li>
  <li><strong>Subtext</strong> — What is implied but not stated?</li>
  <li><strong>Stagecraft</strong> — Stage directions, movement, positioning, silence</li>
  <li><strong>Language features</strong> — Imagery, rhetoric, register, verse/prose switches (for Shakespeare)</li>
  <li><strong>Dramatic tension</strong> — How does the playwright build, sustain, or release tension?</li>
  <li><strong>Links to wider text</strong> — How does this extract connect to what comes before and after?</li>
</ul>

<h3>Essay Questions for Drama</h3>
<p>Drama essay questions test your ability to construct a sustained argument about the play as a whole. Common question types include:</p>
<ul>
  <li>"How does [playwright] present [character] in [play]?"</li>
  <li>"Explore the significance of [theme] in [play]."</li>
  <li>"How does [playwright] create dramatic tension in [play]?"</li>
  <li>"To what extent is [character] a sympathetic figure?"</li>
</ul>

<h4>Planning a Drama Essay</h4>
<ol>
  <li><strong>Decode the question</strong> — Underline the key words. Note whether the question asks about "how" (method) or "what" (content) or "to what extent" (evaluation).</li>
  <li><strong>Develop your thesis</strong> — What is your central argument? Make it specific and nuanced.</li>
  <li><strong>Select your evidence</strong> — Choose four or five key moments from across the play. Ensure you cover the beginning, middle, and end to demonstrate whole-text knowledge.</li>
  <li><strong>Order your paragraphs</strong> — Structure your essay so that your argument builds. Start with your most accessible point and build toward your most sophisticated.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> CAIE examiners reward candidates who discuss the <strong>dramatic effects</strong> created by the playwright — tension, suspense, shock, empathy, alienation, catharsis — rather than simply describing what happens. The question "Why does the playwright include this moment?" is more productive than "What happens in this scene?"</div>

<h3>Writing About Dramatic Effects</h3>
<p>Strengthen your drama essays by consistently discussing effects on the audience. Use these frameworks:</p>

<h4>Tension</h4>
<p>"The playwright builds tension through [technique], creating a sense of [effect] for the audience. This is heightened by [second technique], which..."</p>

<h4>Empathy/Sympathy</h4>
<p>"The audience is positioned to sympathise with [character] at this point because the playwright reveals [information/vulnerability/injustice]. This sympathy is complicated, however, by..."</p>

<h4>Shock/Surprise</h4>
<p>"The revelation that [event/information] subverts the audience's expectations, forcing them to reassess [their understanding of a character/situation]. The playwright has prepared this reversal through..."</p>

<h4>Moral Engagement</h4>
<p>"The playwright confronts the audience with a moral question: [question]. By refusing to provide a clear answer, the dramatist forces the audience to examine their own values and assumptions."</p>

<h3>Time Management for Drama Papers</h3>
<p>For a paper with two questions (45 minutes each):</p>
<table>
  <tr><th>Phase</th><th>Passage-Based</th><th>Essay</th></tr>
  <tr><td>Reading/Planning</td><td>8 minutes</td><td>7 minutes</td></tr>
  <tr><td>Writing</td><td>34 minutes</td><td>35 minutes</td></tr>
  <tr><td>Proofreading</td><td>3 minutes</td><td>3 minutes</td></tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about what <em>you</em> would do if you were directing the play, rather than analysing what the <em>playwright</em> has done. Unless the question specifically invites a directorial response (which is rare at IGCSE), keep your analysis focused on the playwright's choices as embedded in the text. Saying "I would have the actor shout this line" is not the same as "The short, punchy syntax and exclamation mark suggest vehemence and loss of control, which the audience experiences as a disturbing eruption of the character's suppressed rage."</div>

<h3>Final Checklist for Drama Exams</h3>
<p>Before submitting your answer, check that you have:</p>
<ul>
  <li>Addressed the specific question throughout</li>
  <li>Referred to the playwright (not "the author" or "the book")</li>
  <li>Used "the audience" (not "the reader")</li>
  <li>Analysed dramatic techniques, not just language</li>
  <li>Discussed effects on the audience</li>
  <li>Integrated context where relevant (AO2)</li>
  <li>Offered a personal, evaluative response (AO4)</li>
  <li>Covered the whole text in essay questions (beginning, middle, and end)</li>
</ul>
`,
    quiz: [
      {
        id: 'caie-drama-m5-q1',
        question: 'What does "open text" mean in the context of CAIE exams?',
        options: [
          'The exam question is visible before the exam day',
          'You may bring a clean, unannotated copy of the text into the exam',
          'The text is available online during the exam',
          'You can choose any text to write about',
        ],
        correct: 1,
        explanation: 'An "open text" exam allows you to bring a clean, unannotated copy of the set text. You still need analytical skill — having the text available does not reduce expectations. If your component is "closed text", you must work entirely from memory.',
      },
      {
        id: 'caie-drama-m5-q2',
        question: 'When reading a drama extract in the exam, what should you visualise?',
        options: [
          'The cover of the published play',
          'The stage — character positions, movements, entrances, exits, and what the audience sees',
          'The historical period the play was written in',
          'A film adaptation of the play',
        ],
        correct: 1,
        explanation: 'Visualising the stage — how characters are positioned, how they move, who enters and exits — helps you analyse the extract as drama rather than as a page of text. This stage awareness is what distinguishes strong drama analysis from generic literary criticism.',
      },
      {
        id: 'caie-drama-m5-q3',
        question: 'Why is it a mistake to write about what YOU would do as a director?',
        options: [
          'Because directors are not allowed to change anything about a play',
          'Because the exam tests analysis of the playwright\'s choices as embedded in the text, not your production ideas',
          'Because directorial decisions are never interesting',
          'Because you are not a qualified director',
        ],
        correct: 1,
        explanation: 'Unless specifically invited, the exam tests your analysis of the playwright\'s textual choices — language, structure, stage directions, dramatic techniques. Your personal directorial vision is not being assessed; the playwright\'s craft is.',
      },
      {
        id: 'caie-drama-m5-q4',
        question: 'When writing a drama essay, why should you cover moments from the beginning, middle, AND end of the play?',
        options: [
          'Because the mark scheme requires exactly three quotations from each section',
          'Because covering the whole text demonstrates detailed knowledge (AO1) and shows you understand how the play develops structurally',
          'Because the beginning is always more important than the end',
          'Because you must write about every scene in order',
        ],
        correct: 1,
        explanation: 'Covering the whole text demonstrates AO1 (detailed knowledge) and shows structural awareness — how themes, characters, and tensions develop from beginning to end. An essay that only discusses Act 1 suggests incomplete study and misses the play\'s development.',
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Drama Assessment Questions
// ──────────────────────────────────────────────
const dramaAssessment: CourseQuiz[] = [
  {
    id: 'caie-drama-assess-q1',
    question: 'A CAIE exam question asks: "How does the playwright create dramatic tension in this extract?" Which of the following openings best addresses this question?',
    options: [
      '"In this extract, the characters argue about money and family."',
      '"The playwright builds tension through the strategic use of short, clipped dialogue and loaded pauses, creating a volatile atmosphere in which the audience senses that the characters\' restrained civility is about to fracture."',
      '"Dramatic tension is when the audience feels nervous about what will happen."',
      '"The playwright wrote this play in 1945, a year when many people were worried about the future."',
    ],
    correct: 1,
    explanation: 'This opening directly addresses "how" (method), identifies specific techniques (short dialogue, loaded pauses), names the effect (volatile atmosphere), and discusses audience response. It is analytical from the first sentence, setting up a sophisticated argument.',
  },
  {
    id: 'caie-drama-assess-q2',
    question: 'Which term should you use when discussing who tells the story in a play?',
    options: [
      '"The narrator"',
      '"The author"',
      'There is typically no narrator in drama — meaning is conveyed through dialogue, action, and staging',
      '"The main character"',
    ],
    correct: 2,
    explanation: 'Drama typically has no narrator. Meaning is communicated directly through dialogue, action, stage directions, and theatrical elements. Using "narrator" when discussing a play suggests you are treating it as prose rather than engaging with it as a dramatic form.',
  },
  {
    id: 'caie-drama-assess-q3',
    question: 'Why is the analysis of subtext particularly important in modern drama?',
    options: [
      'Because modern plays have fewer words than Shakespeare',
      'Because modern dramatists rely heavily on what is implied beneath dialogue rather than having characters state feelings directly',
      'Because subtext only exists in modern plays',
      'Because CAIE awards bonus marks for discussing subtext',
    ],
    correct: 1,
    explanation: 'Modern drama\'s commitment to realistic dialogue means characters often do not state their feelings directly. Meaning lies beneath the surface — in what is implied, avoided, or contradicted by action. Analysing subtext demonstrates sophisticated understanding of how modern drama creates meaning.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Course Definitions
// ═══════════════════════════════════════════════════════════════════════════════

const caieLitPoetry: CourseData = {
  id: 'caie-lit-poetry',
  title: 'CAIE Literature — Poetry Anthology',
  subtitle: 'Cambridge IGCSE Literature — Poetry (0475/0992)',
  tier: 'IGCSE',
  board: 'CAIE',
  specId: '0475',
  price: 0,
  duration: '10 weeks',
  level: 'IGCSE (Years 10-11)',
  color: '#7c3aed',
  description:
    'The complete Cambridge IGCSE Literature course for poetry and the Songs of Ourselves anthology. Master poetry analysis including form, structure, and language; develop comparison skills and unseen poetry confidence; learn passage-based and essay question techniques — with CAIE-specific AO guidance, model analytical approaches, and exam strategies.',
  moduleList: poetryModules,
  assessmentQuestions: poetryAssessment,
};

const caieLitProse: CourseData = {
  id: 'caie-lit-prose',
  title: 'CAIE Literature — Prose Texts',
  subtitle: 'Cambridge IGCSE Literature — Prose (0475/0992)',
  tier: 'IGCSE',
  board: 'CAIE',
  specId: '0475',
  price: 0,
  duration: '10 weeks',
  level: 'IGCSE (Years 10-11)',
  color: '#6d28d9',
  description:
    'The complete Cambridge IGCSE Literature course for prose set texts. Master character and theme analysis, narrative voice, passage-based close reading, essay technique, and context integration — with CAIE-specific AO guidance, model analytical frameworks, and strategies for both open-text and closed-text components.',
  moduleList: proseModules,
  assessmentQuestions: proseAssessment,
};

const caieLitDrama: CourseData = {
  id: 'caie-lit-drama',
  title: 'CAIE Literature — Drama',
  subtitle: 'Cambridge IGCSE Literature — Drama (0475/0992)',
  tier: 'IGCSE',
  board: 'CAIE',
  specId: '0475',
  price: 0,
  duration: '10 weeks',
  level: 'IGCSE (Years 10-11)',
  color: '#5b21b6',
  description:
    'The complete Cambridge IGCSE Literature course for drama texts including Shakespeare and modern drama. Master drama analysis fundamentals, stagecraft and performance awareness, Shakespeare\'s language and structure, modern dramatic techniques, and exam strategies for passage-based and essay questions — with CAIE-specific AO guidance and model approaches.',
  moduleList: dramaModules,
  assessmentQuestions: dramaAssessment,
};

export const caieLitCourses: CourseData[] = [caieLitPoetry, caieLitProse, caieLitDrama];
