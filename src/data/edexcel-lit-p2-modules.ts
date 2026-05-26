// @ts-nocheck
import type { CourseModule } from './courses'

export const litP2Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 - Paper 2 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m1',
    title: 'Paper 2 Overview & Assessment Objectives',
    duration: '45 min',
    content: `
<h2>Edexcel GCSE English Literature - Paper 2</h2>

<p>Paper 2 is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of your total Literature GCSE. You have <strong>2 hours and 15 minutes</strong> to complete two sections covering the 19th-century novel and the poetry anthology. This paper tests your ability to write analytically about prose fiction and poetry, respond to an extract, sustain a longer essay argument, and compare poems - all under timed conditions.</p>

<div class="key-term"><strong>Key Term: Open Book (Poetry Anthology)</strong> - In Section B, you are provided with a clean copy of the Edexcel poetry anthology. You may refer to it during the exam, but it must not contain any annotations, highlights, or notes. This means you do not need to memorise poems word-for-word, but you <em>must</em> know them well enough to navigate them quickly.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A - 19th-Century Novel (40 marks):</strong> One question on your studied text. You are given an extract and must write an essay that analyses the extract <em>and</em> explores the wider novel. This section is <strong>closed book</strong> - no text is provided beyond the printed extract.</li>
  <li><strong>Section B Part 1 - Poetry Anthology (20 marks):</strong> One named poem from the anthology. You write an analytical response exploring how the poet presents a theme or idea.</li>
  <li><strong>Section B Part 2 - Unseen Poetry Comparison (20 marks):</strong> You are given an unseen poem and must compare it with one poem from the anthology. The comparison must cover both content and method.</li>
</ul>

<h3>Assessment Objectives Tested</h3>
<ul>
  <li><strong>AO1 (Section A &amp; B)</strong> - Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.</li>
  <li><strong>AO2 (Section A &amp; B)</strong> - Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</li>
  <li><strong>AO3 (Section A only)</strong> - Show understanding of the relationships between texts and the contexts in which they were written.</li>
  <li><strong>AO4 (Section B Part 2)</strong> - Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. <em>4 of the 20 marks in the comparison question are awarded for AO4.</em></li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Section A is worth half the paper, so it deserves half your time. A common error is spending too long on the novel and rushing the poetry. Stick to the timing plan below - practise it under timed conditions before the exam so it becomes automatic.</div>

<h3>Mark Distribution by AO</h3>
<ul>
  <li><strong>Section A (Novel):</strong> AO1 - 20 marks, AO2 - 20 marks, AO3 - woven throughout (no separate allocation; examiners reward context where it enhances analysis).</li>
  <li><strong>Section B Part 1 (Single Poem):</strong> AO1 - 10 marks, AO2 - 10 marks.</li>
  <li><strong>Section B Part 2 (Comparison):</strong> AO1 - 6 marks, AO2 - 6 marks, AO3 - 4 marks, AO4 - 4 marks.</li>
</ul>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0-5 min:</strong> Read the novel extract carefully. Annotate key words, literary devices, and links to wider themes.</li>
  <li><strong>5-55 min:</strong> Write your Section A essay (40 marks). Spend roughly half on the extract and half on the wider novel.</li>
  <li><strong>55-60 min:</strong> Read the named anthology poem in Section B Part 1. Plan three or four analytical points.</li>
  <li><strong>60-85 min:</strong> Write your single-poem response (20 marks).</li>
  <li><strong>85-90 min:</strong> Read the unseen poem. Identify points of comparison with the anthology poem.</li>
  <li><strong>90-125 min:</strong> Write your comparison essay (20 marks). Structure around similarities and differences in theme, language, and form.</li>
  <li><strong>125-135 min:</strong> Review all answers. Check quotation accuracy, spelling of authors' names, and paragraph coherence.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Section A as two separate tasks - one on the extract and one on the rest of the novel. The examiner wants a <em>unified</em> essay that moves fluidly between the extract and the wider text. Use the extract as your launchpad, then broaden your argument with references from elsewhere in the novel, before returning to the extract to reinforce your points.</div>

<h3>What "Explore" and "Analyse" Mean on This Paper</h3>
<p>The command words on Paper 2 are precise. <strong>"Explore"</strong> means you should investigate the text in depth, considering multiple interpretations and layers of meaning. <strong>"Analyse"</strong> means you should break down the writer's choices - examining <em>how</em> language, structure, and form create specific effects on the reader. Both require you to go beyond description and engage critically with the text.</p>

<p>In Section B Part 2, the word <strong>"compare"</strong> is critical. You must write about both poems throughout your response - not one and then the other. Integrated comparison is what distinguishes a top-band answer from a mid-range one.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m1-q1',
        question:
          'How long is Edexcel Literature Paper 2 and what percentage of the GCSE does it represent?',
        options: [
          '1 hour 45 minutes, 40%',
          '2 hours 15 minutes, 50%',
          '2 hours 30 minutes, 50%',
          '2 hours 15 minutes, 60%',
        ],
        correct: 1,
        explanation:
          'Paper 2 lasts 2 hours and 15 minutes and is worth 80 marks, which accounts for 50% of the total Literature GCSE.',
      },
      {
        id: 'edx-lt2-m1-q2',
        question:
          'Which Assessment Objective is tested ONLY in Section A (the 19th-century novel)?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 2,
        explanation:
          'AO3 (context) is assessed in Section A, where students must show understanding of the relationship between the novel and the context in which it was written. AO1 and AO2 appear across both sections, and AO4 appears only in Section B Part 2.',
      },
      {
        id: 'edx-lt2-m1-q3',
        question:
          'In Section B Part 2 (the comparison question), how many of the 20 marks are awarded for AO4 (quality of written expression)?',
        options: ['0 marks', '2 marks', '4 marks', '8 marks'],
        correct: 2,
        explanation:
          'Four of the 20 marks on the comparison question are awarded for AO4: vocabulary, sentence structure, spelling, and punctuation. This is the only place on Paper 2 where the quality of your written English is separately assessed.',
      },
      {
        id: 'edx-lt2-m1-q4',
        question: 'Which section of Paper 2 is "open book", and what does that mean in practice?',
        options: [
          'Section A - you receive the full novel text',
          'Section B - you receive a clean, unannotated copy of the poetry anthology',
          'Both sections - you may bring your own annotated texts',
          'Neither section - the entire paper is closed book',
        ],
        correct: 1,
        explanation:
          'Section B is open book: you are given a clean copy of the Edexcel poetry anthology with no annotations. Section A (the novel) is closed book - you only see the printed extract.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 - 19th-Century Novel: Context & Conventions (A Christmas Carol Focus)
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m2',
    title: '19th-Century Novel: Context & Conventions (A Christmas Carol Focus)',
    duration: '55 min',
    content: `
<h2>A Christmas Carol - Context, Conventions &amp; Dickens's Purpose</h2>

<p><em>A Christmas Carol</em> is by far the most popular 19th-century novel choice on Edexcel Literature Paper 2. Understanding its historical context is not optional - AO3 requires you to show how the text relates to the time in which it was written. This module equips you with the contextual knowledge examiners reward and, crucially, teaches you how to <em>integrate</em> it into analytical paragraphs rather than bolting it on.</p>

<div class="key-term"><strong>Key Term: Novella</strong> - A prose narrative longer than a short story but shorter than a full novel, typically between 15,000 and 40,000 words. <em>A Christmas Carol</em> is a novella - its compact form allows Dickens to deliver a focused moral message with an allegorical structure divided into five staves (chapters).</div>

<h3>Historical Context: Victorian London in 1843</h3>
<p>When Chapman &amp; Hall published <em>A Christmas Carol</em> on 19 December 1843, Britain was in the grip of rapid industrial change. The following contextual factors are essential for a strong AO3 response:</p>

<ul>
  <li><strong>The Poor Law Amendment Act (1834):</strong> This law created workhouses where the destitute were sent to labour in appalling conditions. The philosophy was deliberate harshness - poverty was seen as a moral failing, and relief was made as unpleasant as possible to discourage dependency. Scrooge directly echoes this attitude when he asks, <em>"Are there no prisons? Are there no workhouses?"</em></li>
  <li><strong>Malthusian Economics:</strong> Thomas Malthus argued that population growth would inevitably outstrip food supply, and that helping the poor only encouraged overpopulation. Scrooge channels Malthus when he refers to the poor dying to <em>"decrease the surplus population"</em> - a phrase Dickens uses to expose the cruelty of this ideology.</li>
  <li><strong>Industrial Capitalism:</strong> Factory owners and businessmen accumulated enormous wealth while workers - including children - endured poverty wages, long hours, and dangerous conditions. Dickens saw this inequality first-hand during a visit to Manchester's cotton mills in October 1843, just weeks before he began writing the novella.</li>
  <li><strong>Workhouse Conditions:</strong> Families were separated, food was minimal, and inmates wore uniforms. The Andover workhouse scandal of 1845 (where starving inmates gnawed on bones) was still two years away, but conditions were already notorious. Dickens had experienced poverty himself as a child, working in Warren's Blacking Factory at the age of twelve.</li>
  <li><strong>Christmas Traditions:</strong> The modern Christmas - centred on family, generosity, and feasting - was still taking shape in the 1840s. Prince Albert had popularised the Christmas tree; Christmas cards were first commercially produced in 1843. Dickens's novella played a significant role in defining the Victorian Christmas as a time of charity and goodwill.</li>
</ul>

<div class="text-extract">"If they would rather die," said Scrooge, "they had better do it, and decrease the surplus population. Besides - excuse me - I don't know that." "But you might know it," observed the gentleman. "It's not my business," Scrooge returned. "It's enough for a man to understand his own business, and not to interfere with other people's."<div class="source">Charles Dickens, <em>A Christmas Carol</em>, Stave One</div></div>

<h3>Genre and Form: Allegory, Parable, Moral Tale</h3>
<p>Understanding <em>what kind</em> of text <em>A Christmas Carol</em> is will strengthen your AO2 analysis:</p>
<ul>
  <li><strong>Allegory:</strong> The characters and events represent broader moral truths. Scrooge is not just one miser - he stands for all of industrial capitalism's selfish indifference.</li>
  <li><strong>Parable:</strong> Like a Biblical parable, the story teaches a simple moral lesson through narrative. The structure mirrors a sermon: sin (Stave One), warning (Staves Two-Four), redemption (Stave Five).</li>
  <li><strong>Ghost Story:</strong> Dickens uses the supernatural - Marley's ghost, the three Spirits - as a narrative device to compress time. The ghosts allow Scrooge (and the reader) to witness past, present, and future in a single night, making transformation feel urgent and dramatic.</li>
  <li><strong>Five Staves:</strong> Dickens calls his chapters "staves" - a musical term - reinforcing the idea that the novella is a <em>carol</em>, a song of celebration and joy. The structure itself mirrors the thematic journey from discord to harmony.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best answers do not dump context in a separate paragraph. Instead, they weave it into analysis. Compare these two approaches:<br><br><strong>Weak:</strong> "In Victorian times, there were workhouses. Scrooge mentions workhouses."<br><strong>Strong:</strong> "Dickens, writing just nine years after the Poor Law Amendment Act of 1834, uses Scrooge's dismissive reference to workhouses to expose how institutionalised cruelty had become normalised among the wealthy. The audience would have recognised this attitude as commonplace - which makes its dramatic dismantling through the Spirits all the more powerful."<br><br>The second version integrates a specific date, names the legislation, and explains its <em>effect</em> on the reader - this is what AO3 at the top band looks like.</div>

<h3>Dickens's Purpose: Social Reform</h3>
<p>Dickens did not write <em>A Christmas Carol</em> merely to entertain. He had a clear <strong>didactic purpose</strong> - to attack greed, expose the suffering of the poor, and champion generosity. Key points to remember:</p>
<ul>
  <li>He originally planned to write a political pamphlet after visiting Manchester's Field Lane Ragged School, but chose fiction as a more powerful vehicle for change.</li>
  <li>He insisted on keeping the price low (five shillings) so that working-class readers could afford it - sacrificing profit for reach.</li>
  <li>The novella's emotional power lies in its juxtaposition of wealth and poverty: the Cratchits' humble but loving Christmas dinner against Scrooge's cold, solitary existence.</li>
  <li>Dickens uses the character arc of Scrooge - from miser to philanthropist - to argue that <em>individual moral transformation</em> is possible and necessary.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "Dickens wanted to show that Christmas is important." This is far too vague for a Literature essay. Be specific: Dickens wanted to <em>challenge the Malthusian view that the poor were expendable</em>, to <em>expose the moral bankruptcy of laissez-faire capitalism</em>, and to <em>argue that personal generosity could remedy social injustice</em>. Always connect purpose to specific contextual knowledge.</div>

<h3>AO3 Sentence Starters That Examiners Reward</h3>
<p>Practise using these phrases to integrate context naturally into your paragraphs:</p>
<ul>
  <li><em>"Dickens, writing in 1843, would have been aware that..."</em></li>
  <li><em>"A contemporary reader would have recognised this as..."</em></li>
  <li><em>"This reflects the prevailing Victorian attitude that..."</em></li>
  <li><em>"Dickens uses [character/event] to challenge the belief that..."</em></li>
  <li><em>"The reference to [specific detail] directly alludes to..."</em></li>
</ul>

<p>Each of these phrases anchors your contextual point to the text and the time period simultaneously, which is precisely what AO3 demands.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m2-q1',
        question:
          'What was the Poor Law Amendment Act of 1834 designed to do, and how does Scrooge reflect its philosophy?',
        options: [
          "It abolished child labour; Scrooge exploits Bob Cratchit's children",
          'It created harsh workhouses to discourage the poor from seeking help; Scrooge dismisses the poor by asking "Are there no workhouses?"',
          'It introduced free education for all; Scrooge refuses to donate to schools',
          "It banned debtors' prisons; Scrooge threatens to imprison his debtors",
        ],
        correct: 1,
        explanation:
          'The Poor Law Amendment Act created workhouses designed to be so unpleasant that only the truly desperate would enter. Scrooge\'s question "Are there no workhouses?" shows he has internalised this cruel philosophy - he sees the workhouse as an adequate solution to poverty.',
      },
      {
        id: 'edx-lt2-m2-q2',
        question:
          'Why does Dickens call the chapters of A Christmas Carol "staves" rather than "chapters"?',
        options: [
          'To make the novella seem longer than it is',
          'Because the word "stave" means "ghost" in Victorian English',
          'Because a stave is a musical term, reinforcing that the novella is a carol - a song of celebration',
          'To confuse the reader and create a sense of mystery',
        ],
        correct: 2,
        explanation:
          'A "stave" is a set of lines in music. By using this term, Dickens reinforces the title - the text is a carol, a song of joy. The structural choice mirrors the thematic journey from discord (Scrooge\'s misery) to harmony (his redemption).',
      },
      {
        id: 'edx-lt2-m2-q3',
        question:
          'Which of the following is the strongest example of integrating context (AO3) into an analytical paragraph?',
        options: [
          '"In Victorian times, there were lots of poor people."',
          '"Dickens wrote A Christmas Carol in 1843."',
          '"Dickens, writing nine years after the Poor Law Amendment Act, uses Scrooge\'s dismissal of the poor to expose how institutional cruelty had been normalised."',
          '"The Victorians celebrated Christmas differently from us today."',
        ],
        correct: 2,
        explanation:
          "The third option integrates a specific date, names the legislation, connects it to a character's behaviour, and explains the effect - all in one sentence. This is what top-band AO3 looks like: context woven into analysis, not stated in isolation.",
      },
      {
        id: 'edx-lt2-m2-q4',
        question: "What was Dickens's primary purpose in writing A Christmas Carol?",
        options: [
          'To create an entertaining ghost story for children',
          'To popularise the Christmas tree tradition in England',
          'To challenge Malthusian economics and laissez-faire capitalism by championing personal generosity and social responsibility',
          'To write a biography of a real Victorian businessman',
        ],
        correct: 2,
        explanation:
          'Dickens had a didactic purpose: to attack greed, expose the suffering caused by Malthusian and laissez-faire attitudes, and argue that individual moral transformation - choosing generosity over selfishness - could remedy social injustice.',
      },
      {
        id: 'edx-lt2-m2-q5',
        question: 'Which literary form best describes A Christmas Carol?',
        options: [
          'A three-act tragedy',
          'An epistolary novel told through letters',
          'An allegorical novella with elements of parable and ghost story',
          'A picaresque novel following a hero on a journey',
        ],
        correct: 2,
        explanation:
          'A Christmas Carol is a novella (shorter than a novel), allegorical (Scrooge represents broader social attitudes), parabolic (it teaches a moral lesson through narrative), and uses the ghost-story genre as a device to compress time and create dramatic urgency.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 - 19th-Century Novel: Character Analysis
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m3',
    title: '19th-Century Novel: Character Analysis',
    duration: '55 min',
    content: `
<h2>A Christmas Carol - Character Analysis</h2>

<p>Every character in <em>A Christmas Carol</em> serves a <strong>moral and social purpose</strong>. In the exam, show how characters embody ideas - linking <strong>AO1</strong> (response with references) to <strong>AO3</strong> (context).</p>

<h3>Ebenezer Scrooge</h3>

<p>Scrooge's transformation from miser to benefactor is the <strong>structural backbone</strong> of the novella - Dickens's argument that <em>anyone</em> can change, and therefore society itself can be reformed.</p>

<div class="key-term"><strong>Key Term: Redemption Arc</strong> - A narrative pattern in which a morally flawed character undergoes self-discovery and emerges transformed. Scrooge's arc spans all five staves.</div>

<p><strong>Key Quotes:</strong></p>
<ul>
  <li><em>"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"</em> - Exclamatory tone establishes him as an extreme figure of avarice.</li>
  <li><em>"Are there no prisons? Are there no workhouses?"</em> - Echoes Malthusian economics; reveals callousness toward the poor.</li>
  <li><em>"I will honour Christmas in my heart, and try to keep it all the year."</em> - Stave 5 pledge marks complete moral reversal.</li>
  <li><em>"Solitary as an oyster"</em> - Hard-shelled and closed off, yet containing hidden value (the pearl within).</li>
  <li><em>"He became as good a friend, as good a master, and as good a man"</em> - Superlative repetition reinforces total transformation.</li>
</ul>

<h3>Bob Cratchit &amp; Tiny Tim</h3>

<p>Bob represents the <strong>suffering working poor</strong> - dignified and uncomplaining despite appalling conditions. His toast to <em>"Mr Scrooge, the Founder of the Feast!"</em> shows generosity even toward his oppressor. Tiny Tim is a <strong>symbol of innocence and consequence</strong>: <em>"God bless us, every one!"</em> His potential death - <em>"if these shadows remain unaltered… the child will die"</em> - makes Scrooge (and the reader) complicit in poverty's toll.</p>

<h3>The Three Ghosts</h3>

<p>Each Ghost represents a <strong>stage of moral awakening</strong>:</p>
<ul>
  <li><strong>Christmas Past</strong> - Memory and lost opportunity. Its flickering light symbolises truth Scrooge tries to extinguish.</li>
  <li><strong>Christmas Present</strong> - Abundance and joy, but also Ignorance and Want beneath its robe - Dickens's most overt social allegory.</li>
  <li><strong>Christmas Yet to Come</strong> - Silent and shrouded, evoking death. Fear achieves what nostalgia and compassion could not.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Connect each Ghost's supernatural role to Dickens's social message. They are instruments of moral education aimed at Scrooge <em>and</em> the reader.</div>

<h3>Fred &amp; Fezziwig</h3>

<p>Fred is Scrooge's <strong>foil</strong> - warm and generous despite less wealth. Fezziwig and Scrooge represent <strong>two models of capitalism</strong>: Fezziwig spends little yet creates enormous happiness. <em>"The happiness he gives, is quite as great as if it cost a fortune."</em> Employers have a <strong>moral duty</strong> beyond the financial.</p>

<h3>Model Paragraph</h3>

<div class="text-extract">Dickens presents Scrooge's transformation as both personal redemption and social argument. "Solitary as an oyster" suggests he is sealed off from humanity, yet hints at hidden potential. By Stave 5, he "knew how to keep Christmas well, if any man alive possessed the knowledge" - superlative phrasing positions him as a model. If even the most hardened miser can change, so can a society that tolerates poverty.<div class="source">Model paragraph - AO1, AO2, AO3 integrated</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as real people. Always frame analysis around what <em>Dickens</em> does: "Dickens presents Scrooge as…" not "Scrooge is a mean man who…"</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m3-q1',
        question: 'What narrative function does Tiny Tim primarily serve in A Christmas Carol?',
        options: [
          'Comic relief to lighten the darker themes',
          'A symbol of innocence whose fate exposes the consequences of social neglect',
          'A plot device to create conflict between Bob Cratchit and Scrooge',
          "A representation of Scrooge's childhood self",
        ],
        correct: 1,
        explanation:
          "Tiny Tim is a symbol of innocence and consequence. His potential death is directly linked to poverty and Scrooge's neglect, making him Dickens's tool for compelling both Scrooge and the reader to confront the human cost of greed.",
      },
      {
        id: 'edx-lt2-m3-q2',
        question: 'Why is the contrast between Fezziwig and Scrooge as employers significant?',
        options: [
          'It shows that Scrooge was always a miser, even as a young man',
          'It demonstrates that Fezziwig was wealthier than Scrooge',
          'It argues that employers have a moral duty and that small acts of generosity create great happiness',
          'It reveals that the Ghost of Christmas Past is biased against Scrooge',
        ],
        correct: 2,
        explanation:
          'Dickens uses the Fezziwig-Scrooge contrast to argue that employers bear moral responsibility for those they employ. Fezziwig spends little yet creates enormous happiness, proving that wealth alone does not determine the capacity for good.',
      },
      {
        id: 'edx-lt2-m3-q3',
        question:
          "Which of the following best describes Scrooge's redemption arc as a structural feature?",
        options: [
          'A subplot that runs alongside the main story of the Cratchit family',
          'A circular narrative that ends where it began',
          'The central organising principle of the novella, spanning all five staves',
          'A flashback sequence confined to Staves 2 and 3',
        ],
        correct: 2,
        explanation:
          "Scrooge's transformation is the structural backbone of the entire novella. It spans all five staves - from introduction of his flaws, through the three visitations, to his complete moral reversal - making it the central organising principle.",
      },
      {
        id: 'edx-lt2-m3-q4',
        question:
          'What does the simile "solitary as an oyster" suggest about Scrooge at the start of the novella?',
        options: [
          'He is physically small and insignificant',
          'He is hard-shelled and closed off from others, yet contains hidden potential',
          'He lives near the sea and works in the fishing trade',
          'He is slow-moving and lazy in his business dealings',
        ],
        correct: 1,
        explanation:
          "The oyster simile conveys Scrooge's hard exterior and self-imposed isolation. However, oysters contain pearls, hinting at the goodness hidden within him - goodness the Ghosts will eventually bring to the surface.",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 - 19th-Century Novel: Themes & Writer's Methods
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m4',
    title: "19th-Century Novel: Themes & Writer's Methods",
    duration: '55 min',
    content: `
<h2>A Christmas Carol - Themes &amp; Writer's Methods</h2>

<p>The Edexcel exam rewards you for showing how Dickens uses <strong>language, form, and structure</strong> (AO2) to present ideas, connected to <strong>context</strong> (AO3).</p>

<h3>Key Themes</h3>

<ul>
  <li><strong>Social Responsibility</strong> - The wealthy have a moral obligation to the poor. Ignorance and Want, <em>"children of Man"</em>, make neglect a collective sin.</li>
  <li><strong>Redemption</strong> - The novella argues people can change. If Scrooge can, what is the reader's excuse?</li>
  <li><strong>Poverty &amp; Wealth</strong> - The Cratchits celebrate with almost nothing; Scrooge has everything yet lives in darkness. Reflects the punitive New Poor Law of 1834.</li>
  <li><strong>Family</strong> - Cratchit dinner, Fred's party, Fezziwig's ball centre on togetherness. Belle leaves Scrooge because greed replaced love.</li>
  <li><strong>Christmas &amp; Generosity</strong> - A moral benchmark. Fred: <em>"a kind, forgiving, charitable, pleasant time."</em></li>
  <li><strong>Isolation</strong> - Both cause and consequence of greed. In Stave 4, Scrooge's death prompts no grief - only indifference.</li>
</ul>

<div class="key-term"><strong>Key Term: Allegory</strong> - A narrative where characters and events represent abstract ideas. Here, Scrooge = selfish capitalism; the Ghosts = moral education; his transformation = the possibility of societal reform.</div>

<h3>Language Methods (AO2)</h3>
<ul>
  <li><strong>Pathetic Fallacy:</strong> Cold weather in Stave 1 mirrors Scrooge's emotional state; warmth returns as he transforms.</li>
  <li><strong>Listing:</strong> Creates abundance - <em>"turkeys, geese, game, poultry, brawn, great joints of meat…"</em></li>
  <li><strong>Hyperbole:</strong> <em>"a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner"</em> - seven adjectives intensify villainy.</li>
  <li><strong>Contrast:</strong> Warmth/cold, light/dark, plenty/poverty side by side make the moral argument unmistakable.</li>
  <li><strong>The Supernatural:</strong> Ghosts function as moral teachers, not mere spectacle.</li>
  <li><strong>Naming:</strong> "Scrooge" echoes "squeeze" and "screw" - the name encodes character before any action.</li>
</ul>

<h3>Structural Methods</h3>
<ul>
  <li><strong>Time Manipulation:</strong> One night = a whole lifetime. Compression creates urgency - change must happen <em>now</em>.</li>
  <li><strong>Five-Stave Structure:</strong> "Staves" mirror a musical carol, reinforcing community - a carol is sung together, not alone.</li>
  <li><strong>Climactic Withholding (Stave 4):</strong> The gravestone delayed until the final moment builds suspense and forces confrontation with mortality.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Never write "Dickens uses a simile" and stop. Always push to <em>why</em>: what does the method make the reader think or feel? Link method to theme and context.</div>

<h3>Annotated Passage: Stave 3 (Cratchit Dinner)</h3>

<div class="text-extract"><em>"Its tenderness and flavour, size and cheapness, were the themes of universal admiration… as Mrs Cratchit said with great delight (surveying one small atom of a bone upon the dish), they hadn't ate it all at last!"</em><div class="source">Charles Dickens, <em>A Christmas Carol</em>, Stave 3</div></div>

<p><strong>"size and cheapness"</strong> - Paired nouns find abundance in scarcity; "cheapness" as a virtue dignifies poverty. <strong>"one small atom of a bone"</strong> - Hyperbolic diminution reveals how little food there was. Mrs Cratchit's "great delight" creates dramatic irony: the reader sees deprivation the family ignores.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating themes and methods as separate tasks. Weave them together: every thematic point should analyse <em>how</em> Dickens presents it. Theme = the <em>what</em>; method = the <em>how</em>.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m4-q1',
        question: 'Why does Dickens label his chapters "staves" rather than "chapters"?',
        options: [
          'Because the novella was originally published as a musical score',
          'To mirror the title - a carol is a song, and staves are sections of music, reinforcing themes of harmony and community',
          'To make the text seem shorter and more accessible to children',
          'Because Victorian publishers required this formatting for Christmas publications',
        ],
        correct: 1,
        explanation:
          'The five-stave structure mirrors the musical form of a carol. A carol is communal - sung together - and Dickens uses this structural choice to reinforce his themes of togetherness and shared social responsibility.',
      },
      {
        id: 'edx-lt2-m4-q2',
        question: 'Which of the following best explains the significance of the name "Scrooge"?',
        options: [
          'It is derived from an Old English word meaning "wealthy merchant"',
          'It was the name of a real Victorian banker Dickens knew personally',
          'It echoes words like "squeeze" and "screw," encoding the character\'s grasping nature in his very name',
          'It is an onomatopoeic word meant to sound unpleasant to the ear',
        ],
        correct: 2,
        explanation:
          'Dickens uses naming as a method. "Scrooge" evokes "squeeze" and "screw," ensuring the reader associates the character with meanness before any action occurs. This is a deliberate authorial choice that shapes first impressions.',
      },
      {
        id: 'edx-lt2-m4-q3',
        question:
          "What is the key difference between feature-spotting and genuine analysis of a writer's method?",
        options: [
          'Feature-spotting uses quotations; analysis does not',
          'Feature-spotting identifies a technique without exploring its effect, whereas analysis explains why the method is used and what it makes the reader think or feel',
          'Feature-spotting focuses on structure; analysis focuses on language',
          'There is no meaningful difference - both are acceptable in the exam',
        ],
        correct: 1,
        explanation:
          'Feature-spotting names a technique ("Dickens uses a simile") but stops there. Genuine analysis pushes further to explain the effect on the reader, connect the method to a theme, and consider why the writer made that choice.',
      },
      {
        id: 'edx-lt2-m4-q4',
        question: 'How does Dickens use time in A Christmas Carol as a structural method?',
        options: [
          'The novella unfolds in real time over five consecutive days',
          'The events span a full year, from one Christmas to the next',
          'The entire story takes place in a single night, yet Scrooge experiences a whole lifetime - creating urgency for change',
          "Time moves backwards, starting with Scrooge's death and ending with his youth",
        ],
        correct: 2,
        explanation:
          "Dickens compresses Scrooge's past, present, and future into a single night. This time manipulation creates urgency - Scrooge must change now, not later - and mirrors Dickens's broader argument that society cannot afford to delay social reform.",
      },
      {
        id: 'edx-lt2-m4-q5',
        question:
          'In the Cratchit dinner passage, why does Dickens describe Mrs Cratchit surveying "one small atom of a bone"?',
        options: [
          'To show that Mrs Cratchit is a poor cook who has overcooked the goose',
          'To use hyperbolic diminution that reveals how little food the family actually had, creating dramatic irony between their delight and their deprivation',
          'To suggest that the Cratchit family is ungrateful for what they have',
          "To foreshadow Tiny Tim's illness through imagery of smallness",
        ],
        correct: 1,
        explanation:
          'The phrase "one small atom of a bone" uses hyperbolic diminution to expose the reality beneath the family\'s cheerful celebration. Mrs Cratchit\'s "great delight" at having leftovers creates dramatic irony - the reader sees the deprivation the family willingly overlooks, which is both touching and a pointed critique of poverty.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 - 19th-Century Novel: Extract & Essay Response
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m5',
    title: '19th-Century Novel: Extract & Essay Response',
    duration: '55 min',
    content: `
<h2>The 40-Mark Novel Question - Extract + Essay</h2>

<p>The 19th-century novel question on Edexcel Paper 2 is worth <strong>40 marks</strong> and is the highest-tariff question on the paper. You are given a <strong>printed extract</strong> from your set text - typically 30-40 lines - and asked to explore a theme or character both <em>in the extract</em> and <em>across the whole text</em>.</p>

<div class="key-term"><strong>Key Term: Extract-to-Whole-Text Question</strong> - A format requiring close reading of a passage followed by discussion of how the same idea appears elsewhere in the text. Examiners reward answers that move fluently between the two.</div>

<h3>Planning (5 Minutes)</h3>
<ol>
  <li><strong>Read the extract twice.</strong> First for content, then underline key quotations and note techniques.</li>
  <li><strong>Identify the focus.</strong> Circle the key word - theme (poverty, redemption) or character (Scrooge, the Ghost)?</li>
  <li><strong>Link outward.</strong> Jot three moments elsewhere - opening, middle, ending - to show you know the narrative arc.</li>
  <li><strong>Draft a thesis.</strong> E.g. <em>"Dickens uses Scrooge's transformation to argue that compassion is a social duty."</em></li>
</ol>

<h3>Essay Structure</h3>
<ol>
  <li><strong>Introduction:</strong> Thesis, writer and text named, question focus referenced.</li>
  <li><strong>Extract Paragraph 1:</strong> Close-read a quotation - AO2 (technique), AO1 (argument), AO3 (context).</li>
  <li><strong>Extract Paragraph 2:</strong> Second quotation, different technique or contrasting idea, context woven in.</li>
  <li><strong>Wider-Text Paragraph 1:</strong> A moment elsewhere in the novel. Quote from memory and analyse.</li>
  <li><strong>Wider-Text Paragraph 2:</strong> Another moment showing how the theme develops or resolves.</li>
  <li><strong>Conclusion:</strong> Return to thesis. Link to the writer's purpose for his contemporary audience.</li>
</ol>

<h3>Hitting AO1 + AO2 + AO3 Together</h3>
<p>The mark scheme rewards <strong>integration</strong>. In every paragraph: open with an analytical point and quotation (<strong>AO1</strong>), zoom in on a word or technique and explain its effect (<strong>AO2</strong>), then connect to 19th-century context in one sentence (<strong>AO3</strong>). Never bolt context on as a separate block.</p>

<h3>Model Grade 8-9 Opening</h3>

<div class="text-extract">Dickens presents Scrooge's encounter with the Ghost of Christmas Present as a moral turning point. The imperative "Come in! and know me better, man!" signals warmth contrasting Scrooge's cold language earlier. Writing in 1843 amid urban poverty, Dickens uses the Ghost as a mouthpiece for charity the wealthy owed the poor - a shift in empathy developed across the narrative to champion social responsibility.<div class="source">Model paragraph - Grade 8-9</div></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners look for a sustained argument, not a set number of paragraphs. The structure above is a scaffold. Quality of analysis always beats quantity.</div>

<h3>Common Mistakes to Avoid</h3>

<div class="common-mistake"><strong>Retelling the Plot:</strong> "Scrooge is visited by three ghosts and then he changes" earns very few marks. Every sentence should analyse <em>how</em> or <em>why</em> the writer makes a choice, not describe <em>what</em> happens.</div>

<div class="common-mistake"><strong>Ignoring the Extract:</strong> Some students leap straight to the wider text. You must analyse the printed passage in detail - it is there for a reason and the mark scheme rewards close reading of it.</div>

<div class="common-mistake"><strong>Weak Context:</strong> Avoid "This was written in Victorian times when life was hard." Be specific: "Dickens published <em>A Christmas Carol</em> in 1843, the year a Parliamentary report exposed child labour in mines." Context should explain <em>why</em> the writer made a choice.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m5-q1',
        question: 'How many marks is the 19th-century novel question worth on Edexcel Paper 2?',
        options: ['20 marks', '30 marks', '40 marks', '50 marks'],
        correct: 2,
        explanation:
          'The 19th-century novel question is worth 40 marks, making it the highest-tariff question on the paper. It requires analysis of both the printed extract and the wider text.',
      },
      {
        id: 'edx-lt2-m5-q2',
        question:
          'In the recommended essay structure, how many paragraphs should focus on close reading of the printed extract?',
        options: ['One paragraph', 'Two paragraphs', 'Three paragraphs', 'Four paragraphs'],
        correct: 1,
        explanation:
          'The recommended structure includes two close-reading paragraphs on the extract and two wider-text paragraphs, ensuring you address both parts of the question.',
      },
      {
        id: 'edx-lt2-m5-q3',
        question:
          'Which of the following best describes how AO3 (context) should appear in a paragraph?',
        options: [
          'As a separate paragraph at the end of the essay',
          'As a one-line footnote after each quotation',
          'Woven into the analysis to explain why the writer made a particular choice',
          'Only in the introduction and conclusion',
        ],
        correct: 2,
        explanation:
          "AO3 is most effective when integrated into your analysis - it should deepen your point by explaining the social, historical, or biographical reasons behind the writer's choices.",
      },
      {
        id: 'edx-lt2-m5-q4',
        question:
          'Which of these is a common mistake students make on the 19th-century novel question?',
        options: [
          'Using short embedded quotations',
          "Retelling the plot instead of analysing the writer's choices",
          'Writing a one-sentence thesis in the introduction',
          'Referring to the writer by name',
        ],
        correct: 1,
        explanation:
          'Retelling the plot is one of the most common mistakes. The examiner knows the story - every sentence should focus on how or why the writer makes a particular choice, not what happens.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 - Poetry Anthology: Approaching Anthology Poems
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m6',
    title: 'Poetry Anthology: Approaching Anthology Poems',
    duration: '55 min',
    content: `
<h2>The Edexcel Poetry Anthology - How It Works</h2>

<p>Section B tests your <strong>poetry anthology</strong>. Your school chooses one cluster - <strong>Relationships</strong> or <strong>Conflict</strong>. In the exam you analyse <strong>one named poem</strong> for <strong>20 marks</strong>. You are provided with a clean, unannotated copy of the anthology, so you do not need to memorise poems word-for-word - but you must know them well enough to navigate them quickly.</p>

<div class="key-term"><strong>Key Term: Poetry Cluster</strong> - A thematic grouping of poems where each poet approaches the theme differently in form, voice, and perspective.</div>

<h3>The Two Clusters (15 Poems Each)</h3>

<p><strong>Conflict:</strong> A Poison Tree (Blake), The Destruction of Sennacherib (Byron), Extract from The Prelude (Wordsworth), The Man He Killed (Hardy), Cousin Kate (Rossetti), Half-caste (Agard), Exposure (Owen), The Charge of the Light Brigade (Tennyson), Catrin (Clarke), War Photographer (Satyamurti), Belfast Confetti (Carson), The Class Game (Casey), Poppies (Weir), No Problem (Zephaniah), What Were They Like? (Levertov).</p>

<p><strong>Time and Place:</strong> To Autumn (Keats), Composed Upon Westminster Bridge (Wordsworth), London (Blake), I started Early - Took my Dog (Dickinson), Where the Picnic was (Hardy), Adlestrop (Thomas), Home Thoughts from Abroad (Browning), First Flight (Fanthorpe), Stewart Island (Adcock), Presents from my Aunts in Pakistan (Alvi), Hurricane Hits England (Nichols), Nothing's Changed (Afrika), Postcard from a Travel Snob (Hannah), In Romney Marsh (Davidson), Absence (Jennings).</p>

<h3>The SMILE Framework</h3>
<ol>
  <li><strong>S - Structure:</strong> Stanza length, rhyme scheme, enjambment, caesura. Does form mirror meaning?</li>
  <li><strong>M - Meaning:</strong> Literal summary first, then deeper ideas beneath the surface.</li>
  <li><strong>I - Imagery:</strong> Similes, metaphors, personification, symbols - how do they connect to themes?</li>
  <li><strong>L - Language:</strong> Word choices, register, semantic fields, repetition, connotation.</li>
  <li><strong>E - Effect:</strong> What response is the poet provoking - sympathy, anger, admiration, unease?</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always start with literal meaning. If you misread the poem, every analytical point crumbles. Spend the first minute understanding the surface story.</div>

<h3>Annotating a Poem</h3>
<p>Three passes: first write a one-sentence summary, then circle images and note techniques in the margin, finally connect ideas with arrows and mark tone shifts.</p>

<h3>Practice - "Sonnet 43" (Relationships)</h3>

<div class="text-extract"><em>How do I love thee? Let me count the ways.<br/>
I love thee to the depth and breadth and height<br/>
My soul can reach, when feeling out of sight<br/>
For the ends of being and ideal grace.</em><div class="source">Barrett Browning, <em>Sonnets from the Portuguese</em> (1850)</div></div>

<p><strong>S:</strong> Petrarchan sonnet; iambic pentameter mirrors certainty. <strong>I:</strong> "Depth and breadth and height" - spatial imagery fills every dimension. <strong>L:</strong> Anaphora ("I love thee") creates prayer-like incantation; religious register ("soul", "grace"). <strong>Context:</strong> Written during Barrett Browning's secret courtship, defying her father.</p>

<h3>Practice - "The Charge of the Light Brigade" (Conflict)</h3>

<div class="text-extract"><em>Half a league, half a league,<br/>
Half a league onward,<br/>
All in the valley of Death<br/>
Rode the six hundred.</em><div class="source">Tennyson (1854), stanza 1</div></div>

<p><strong>S:</strong> Anapaestic dimeter (mostly) with dactylic refrain ("Rode the six hundred") - together they create the galloping rhythm; end-stopped lines and repetition propel the reader forward. <strong>I:</strong> "Valley of Death" alludes to Psalm 23; capitalised "Death" personifies a waiting presence. <strong>L:</strong> "Half a league" repeated - relentless motion; "onward" reinforces duty. <strong>Context:</strong> Battle of Balaclava, 25 October 1854 (Crimean War) - a miscommunicated order sent the Light Brigade into Russian artillery. Tennyson, then Poet Laureate, wrote the poem within weeks, turning a military blunder into a celebration of courage.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating every poem identically. Some are best approached through imagery, others through voice or structure. Use SMILE as a checklist, but let the poem guide your focus.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m6-q1',
        question: 'How many marks is the single-poem anthology question worth on Edexcel Paper 2?',
        options: ['10 marks', '15 marks', '20 marks', '30 marks'],
        correct: 2,
        explanation:
          'The anthology question is worth 20 marks. You are given the name of one poem and a clean copy of the anthology to refer to, but you must know the poems well enough to locate quotations quickly under timed conditions.',
      },
      {
        id: 'edx-lt2-m6-q2',
        question: 'In the SMILE framework, what does the "I" stand for?',
        options: ['Intention', 'Imagery', 'Interpretation', 'Irony'],
        correct: 1,
        explanation:
          'The "I" in SMILE stands for Imagery - identifying similes, metaphors, personification, and symbols that the poet uses to create vivid pictures and convey meaning.',
      },
      {
        id: 'edx-lt2-m6-q3',
        question: 'Which cluster does "Sonnet 43" by Elizabeth Barrett Browning belong to?',
        options: ['Conflict', 'Relationships', 'Power and Identity', 'Time and Place'],
        correct: 1,
        explanation:
          '"Sonnet 43" is part of the Relationships cluster. It is a Petrarchan sonnet exploring the depth and nature of romantic love, written during Barrett Browning\'s courtship with Robert Browning.',
      },
      {
        id: 'edx-lt2-m6-q4',
        question: 'When annotating a poem, what should you do on the very first read?',
        options: [
          'Highlight every literary technique you can find',
          'Read aloud or silently mouth it and write a one-sentence summary',
          'Immediately look up the historical context',
          'Identify the rhyme scheme and metre',
        ],
        correct: 1,
        explanation:
          'The first read should focus on understanding the poem as a whole. Read it aloud (or mouth it silently) and write a one-sentence summary at the top before diving into technical analysis.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 - Poetry: Language, Form & Structure
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m7',
    title: 'Poetry: Language, Form & Structure',
    duration: '55 min',
    content: `
<h2>Poetry: Language, Form &amp; Structure - AO2</h2>

<p>AO2 asks you to <strong>analyse how writers use language, form and structure to create meanings and effects</strong>. Examiners reward candidates who explain <em>why</em> a poet made a choice and <em>how</em> it shapes the reader's experience - not those who spot features.</p>

<div class="key-term"><strong>Key Term: AO2</strong> - Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</div>

<h3>Language: The Poet's Toolkit</h3>

<p><strong>Imagery</strong> appeals to the senses - <strong>visual</strong> ("sun bled crimson"), <strong>auditory</strong> ("bells clanged"), <strong>tactile</strong> ("calloused fingers traced the bark"). <strong>Figurative language</strong> (simile, metaphor, personification) draws unexpected connections - ask: <em>what is being compared, and what does it suggest?</em></p>

<p><strong>Tone and diction:</strong> diction is word choice; tone is the attitude those choices create. Watch for <strong>connotation</strong> - associations beyond literal meaning.</p>

<h3>Sound Devices</h3>
<ul>
  <li><strong>Alliteration</strong> - repeated initial consonants ("blazing bright") - emphasis or musical harmony.</li>
  <li><strong>Sibilance</strong> - repeated 's'/'sh' sounds - whispering, sinister, or soothing.</li>
  <li><strong>Assonance</strong> - repeated vowel sounds ("the low moan of the old road") - creates internal rhyme.</li>
  <li><strong>Onomatopoeia</strong> - words imitating sounds ("crackle", "hiss") - the reader <em>hears</em> the poem.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Never just name a device - explain its effect. "The sibilance in 'softly she slipped away' creates a hushed tone mirroring stealth." Without effect, you are describing, not analysing.</div>

<h3>Form: How the Poem Is Shaped</h3>
<ul>
  <li><strong>Sonnet</strong> - 14 lines with a volta. Traditionally love, but poets subvert this for irony.</li>
  <li><strong>Dramatic monologue</strong> - one speaker addresses a silent listener, creating dramatic irony.</li>
  <li><strong>Free verse</strong> - no regular rhyme or metre. Reflects freedom, chaos, or natural speech.</li>
  <li><strong>Ballad</strong> - narrative poem with regular stanzas and refrain; oral tradition.</li>
  <li><strong>Elegy</strong> - poem of mourning, moving from grief towards acceptance.</li>
</ul>

<h3>Structure</h3>
<ul>
  <li><strong>Enjambment vs end-stopping</strong> - enjambment creates urgency; end-stopping gives control and finality.</li>
  <li><strong>Caesura</strong> - a mid-line pause suggesting hesitation, thought-shift, or impact.</li>
  <li><strong>Volta</strong> - the "turn" where argument or mood shifts. Line 9 (Petrarchan) or before the final couplet (Shakespearean). Often the key to unlocking a poem.</li>
  <li><strong>Stanza breaks</strong> - signal changes in time, place, or mood.</li>
  <li><strong>Repetition/refrain</strong> - emphasis and a sense of obsession or inevitability.</li>
</ul>

<h3>Metre</h3>

<p><strong>Iambic pentameter</strong> (da-DUM x5) mirrors natural speech. When a poet <em>breaks</em> the pattern - a stressed opening or extra beat - the irregularity signals heightened emotion or disruption.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> "The poet uses alliteration, enjambment and a metaphor" - feature-spotting. Select one or two techniques and explore their effect in depth, connecting to meaning.</div>

<h3>Practice: Annotate This Extract</h3>

<div class="text-extract">Half-caste? Explain yuself,<br/>wha yu mean<br/>when yu say half-caste -<br/>yu mean when Picasso<br/>mix red an green<br/>is a half-caste canvas?<div class="source">John Agard, 'Half-Caste'</div></div>

<p>Consider: the rhetorical questions' effect; how phonetic dialect creates voice; the Picasso analogy; enjambment across short lines building confrontational rhythm.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m7-q1',
        question: 'What does AO2 require you to do when writing about poetry?',
        options: [
          "Retell the poem's story in your own words",
          'Analyse language, form and structure and their effects on meaning',
          'Compare two poems from the anthology',
          "Evaluate how far you agree with the poet's viewpoint",
        ],
        correct: 1,
        explanation:
          'AO2 focuses on analysing how writers use language, form and structure to create meanings and effects. It is the key assessment objective for the poetry questions on Paper 2.',
      },
      {
        id: 'edx-lt2-m7-q2',
        question: 'Which of the following best describes a "volta" in poetry?',
        options: [
          'A repeated line or phrase at the end of each stanza',
          'A pause in the middle of a line created by punctuation',
          "A turn or shift in the poem's argument, mood, or perspective",
          'The use of iambic pentameter to create a regular rhythm',
        ],
        correct: 2,
        explanation:
          'A volta is the "turn" in a poem - the point where the direction of thought, emotion, or argument shifts. In sonnets it typically appears at line 9 (Petrarchan) or before the final couplet (Shakespearean).',
      },
      {
        id: 'edx-lt2-m7-q3',
        question: 'What effect does enjambment typically create in a poem?',
        options: [
          'A sense of finality and control',
          'A whispering, secretive tone',
          'Urgency, momentum, or breathlessness',
          'A regular, heartbeat-like rhythm',
        ],
        correct: 2,
        explanation:
          'Enjambment - where a sentence runs over the line break without punctuation - propels the reader forward, creating a sense of urgency, momentum, or breathlessness that contrasts with the deliberate pause of end-stopping.',
      },
      {
        id: 'edx-lt2-m7-q4',
        question: 'Why is "feature-spotting" considered a weak approach in poetry analysis?',
        options: [
          'Because examiners only want you to discuss content, not technique',
          'Because it identifies techniques without explaining their effect on meaning',
          'Because you should only discuss one technique per paragraph',
          'Because sound devices are not relevant to AO2',
        ],
        correct: 1,
        explanation:
          'Feature-spotting means listing techniques without analysing their effect. Examiners reward responses that explain how and why a technique creates meaning, not responses that simply name devices like a checklist.',
      },
      {
        id: 'edx-lt2-m7-q5',
        question: 'Which of the following is an example of sibilance?',
        options: [
          '"The blazing bright beacon burned"',
          '"Softly she slipped through the silent shadows"',
          '"The clock ticked and tocked relentlessly"',
          '"The low moan of the old road echoed"',
        ],
        correct: 1,
        explanation:
          'Sibilance is the repetition of "s" and "sh" sounds. "Softly she slipped through the silent shadows" repeats the "s" and "sh" sounds throughout, creating a hushed, whispering quality.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 - Poetry: Comparison Techniques
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m8',
    title: 'Poetry: Comparison Techniques',
    duration: '55 min',
    content: `
<h2>Poetry: Comparison Techniques - The 20-Mark Question</h2>

<p>This <strong>20-mark</strong> question asks you to compare a <strong>named anthology poem</strong> with an <strong>unseen poem</strong>. You must analyse a poem you have never seen, then build an integrated comparison under timed conditions.</p>

<div class="key-term"><strong>Key Term: Integrated Comparison</strong> - Discussing both poems within the same paragraphs, moving fluently between them, rather than writing about each separately.</div>

<h3>Approaching the Unseen Poem</h3>

<p>Spend <strong>3-4 minutes reading</strong> before you plan or write:</p>
<ol>
  <li><strong>First read - meaning:</strong> What is this about? What is the speaker's situation and mood? Do not worry about techniques yet.</li>
  <li><strong>Second read - technique:</strong> Underline key choices - imagery, tone shifts, structural features, sound patterns. Note connections to the named poem.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If a phrase puzzles you, move on and analyse what you <em>can</em>. Examiners want thoughtful analysis, not a perfect paraphrase.</div>

<h3>Comparison Frameworks</h3>

<p><strong>Thematic Threads:</strong> Identify 2-3 shared themes. For each, compare <em>how</em> the poets explore it - different methods, different effects.</p>

<p><strong>Point-by-Point Methods:</strong> Choose a shared method (imagery, structure, tone), compare how each poet uses it, then move to the next.</p>

<p>Either works. The key rule: <strong>both poems must appear in every paragraph</strong>.</p>

<h3>Comparative Vocabulary</h3>
<ul>
  <li><strong>Similarity:</strong> similarly, both poets, likewise, this is mirrored in...</li>
  <li><strong>Contrast:</strong> in contrast, whereas, unlike X who..., while, conversely...</li>
  <li><strong>Nuance:</strong> although both poets explore..., they differ in...; while X presents..., Y instead suggests...</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Vague comparisons - "Both poems are about nature." Be specific: "Both use natural imagery, but Wordsworth presents renewal while Hughes depicts predation." Compare <em>treatment</em>, not topic.</div>

<h3>Integrated Paragraph Structure</h3>
<ol>
  <li><strong>Comparative topic sentence</strong> - "Both poets explore separation, but through contrasting structures."</li>
  <li><strong>Evidence + analysis, Poem A</strong> - embed a quotation, analyse method and effect.</li>
  <li><strong>Pivot to Poem B</strong> - "In contrast, the unseen poet..."</li>
  <li><strong>Evidence + analysis, Poem B</strong> - quotation, method, different or similar effect.</li>
  <li><strong>Concluding comment</strong> - what does the comparison reveal?</li>
</ol>

<div class="text-extract"><strong>Model:</strong> Both poets present memory as haunting. Armitage repeats "probably armed, possibly not" - uncertainty suggests guilt festers because truth cannot be confirmed. Similarly, the unseen poet's "photograph curling at the edges" implies memories deteriorate, yet "cannot stop turning it over" uses enjambment to propel the reader forward. While Armitage's torment stems from a single violent act, the unseen poet's grief is quieter, rooted in slow erosion.<div class="source">Grade 8/9 model comparison paragraph</div></div>

<h3>Planning in 5 Minutes</h3>

<p><strong>Venn Diagram:</strong> Left = anthology poem, right = unseen, overlap = shared themes/methods. Paragraphs draw from the overlap; unique features highlight contrasts.</p>

<p><strong>Comparison Grid:</strong> Columns: <strong>Aspect</strong> | <strong>Poem A</strong> | <strong>Poem B</strong>. List 3-4 aspects (imagery, tone, structure) with brief notes - a ready-made plan.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Aim for 3-4 developed paragraphs, not 5-6 thin ones. Depth outscores breadth. Each paragraph needs a quotation from each poem and a clear comparative point.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m8-q1',
        question: 'What does "integrated comparison" mean in a poetry essay?',
        options: [
          'Writing about Poem A in the first half and Poem B in the second half',
          'Discussing both poems within the same paragraphs, moving between them fluidly',
          'Analysing only the techniques the two poems share in common',
          'Quoting from both poems in your introduction',
        ],
        correct: 1,
        explanation:
          'An integrated comparison discusses both poems within each paragraph, weaving between them with comparative vocabulary. This is the approach that earns the highest marks, as it demonstrates genuine comparison rather than two separate analyses.',
      },
      {
        id: 'edx-lt2-m8-q2',
        question: 'What should your first reading of the unseen poem focus on?',
        options: [
          'Identifying every poetic technique used',
          'Understanding the overall meaning, situation, and mood',
          'Finding quotations that link to the named poem',
          'Counting the number of stanzas and working out the rhyme scheme',
        ],
        correct: 1,
        explanation:
          "Your first reading should focus on grasping the poem's overall meaning - who is speaking, what the situation is, and what the general mood or tone feels like. Technical analysis comes on the second, more detailed reading.",
      },
      {
        id: 'edx-lt2-m8-q3',
        question: 'Which of the following is the strongest comparative sentence?',
        options: [
          '"Both poems are about conflict."',
          '"The first poem uses metaphor and the second poem uses simile."',
          '"Both poets use natural imagery, but whereas one presents nature as consoling, the other depicts it as threatening."',
          '"The poems are very different from each other in many ways."',
        ],
        correct: 2,
        explanation:
          'The strongest comparative sentence identifies a shared method (natural imagery), then explains how the two poets use it to different effect (consoling vs threatening). This goes beyond topic to compare treatment and meaning.',
      },
      {
        id: 'edx-lt2-m8-q4',
        question:
          'How many well-developed comparative paragraphs should you aim for in a 20-mark comparison response?',
        options: [
          '1-2 very long paragraphs',
          '3-4 well-developed paragraphs',
          '6-8 short paragraphs',
          'As many as possible in the time available',
        ],
        correct: 1,
        explanation:
          'Aim for 3-4 well-developed comparative paragraphs. Depth of analysis always scores higher than breadth. Each paragraph should contain quotations from both poems and a clear comparative point.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 - Poetry: Writing the Comparison Essay
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m9',
    title: 'Poetry: Writing the Comparison Essay',
    duration: '55 min',
    content: `
<h2>Writing the 20-Mark Comparison Essay</h2>

<p>The comparison question on Edexcel GCSE English Literature Paper 2 is worth <strong>20 marks</strong> and asks you to compare an anthology poem you have studied with an <strong>unseen poem</strong> printed on the paper. This is the question that separates competent responses from truly impressive ones - and it all comes down to <strong>structure, balance, and genuine comparison</strong>.</p>

<div class="key-term"><strong>Key Term: Comparison</strong> - A comparison essay does not simply analyse two poems one after the other. It identifies points of similarity and difference and weaves both poems together throughout every paragraph.</div>

<h3>Essay Structure: The Blueprint</h3>

<p>A strong comparison essay follows a clear, efficient structure:</p>

<ol>
  <li><strong>Brief introduction (2-3 sentences):</strong> Name both poems, identify the shared theme or subject, and offer a thesis statement about how the poets approach the subject similarly or differently. For example: <em>"Both 'War Photographer' and the unseen poem explore the aftermath of conflict, yet Duffy focuses on the psychological toll on a civilian observer while the unseen poet foregrounds the physical landscape of destruction."</em></li>
  <li><strong>3-4 comparative paragraphs:</strong> Each paragraph tackles one point of comparison (e.g. tone, imagery, structure, perspective) and draws evidence from <strong>both</strong> poems. This is where most of your marks are earned.</li>
  <li><strong>Brief conclusion (2-3 sentences):</strong> Summarise how the poets' approaches differ or align, and offer a final evaluative comment about the overall effect on the reader.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not write a long introduction. Two or three sentences are enough. The examiner wants to see comparison and analysis, not scene-setting. Get into your first comparative point by the end of the first third of a page.</div>

<h3>The PETER Framework for Comparison</h3>

<p>Use the <strong>PETER</strong> framework to build each comparative paragraph:</p>

<ul>
  <li><strong>P - Point:</strong> State your comparative point clearly. <em>"Both poets use natural imagery to convey loss, but they do so to very different effect."</em></li>
  <li><strong>E - Evidence from Poem 1:</strong> Embed a quotation from the anthology poem. <em>"In 'Remains', Armitage describes the soldier's memory as 'his bloody life in my bloody hands', where the repetition of 'bloody' shifts from literal to metaphorical."</em></li>
  <li><strong>T - Technique:</strong> Identify and analyse the method. <em>"The pun on 'bloody' creates a dual meaning that mirrors the soldier's inability to separate the physical act from its psychological aftermath."</em></li>
  <li><strong>E - Evidence from Poem 2:</strong> Now bring in the unseen poem with a quotation and analysis. <em>"By contrast, the unseen poet writes of 'petals falling like shrapnel', using a simile that inverts expectations - beauty becomes violence."</em></li>
  <li><strong>R - Response / Comparison:</strong> Draw the two together. <em>"While Armitage's language traps the reader inside the soldier's guilt, the unseen poet externalises destruction through the landscape, creating a more detached but equally haunting effect."</em></li>
</ul>

<div class="key-term"><strong>Key Term: Connectives of Comparison</strong> - Use linking phrases to signal comparison: <em>similarly, likewise, in the same way, both poets</em> (for similarity); <em>however, by contrast, whereas, conversely, on the other hand</em> (for difference). These words are the glue that holds a comparison essay together.</div>

<h3>Balancing the Known and the Unseen</h3>

<p>One of the biggest challenges is balancing your <strong>anthology poem</strong> (where you have prepared quotations and context) with the <strong>unseen poem</strong> (which you are reading for the first time). Here is how to manage it:</p>

<ul>
  <li><strong>Anthology poem:</strong> You can deploy pre-learned quotations and contextual knowledge. Use this confidence to anchor each paragraph - start with the poem you know, then pivot to the unseen.</li>
  <li><strong>Unseen poem:</strong> Read it twice before writing. On the first read, identify the subject and tone. On the second, underline striking words, images, and structural features. You do not need to identify every technique - two or three well-analysed quotations are enough.</li>
  <li><strong>Aim for roughly equal coverage.</strong> If you write fifteen lines on the anthology poem and three lines on the unseen, the examiner will see an unbalanced response. Each PETER paragraph should give comparable space to both texts.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing two separate mini-essays - one on each poem - and calling it a comparison. This "poem A then poem B" approach will cap your mark. Every paragraph must discuss both poems and make explicit comparative points.</div>

<h3>Time Management</h3>

<p>You have approximately <strong>40 minutes</strong> for this question. Divide your time like this:</p>

<table>
  <tr><th>Phase</th><th>Time</th><th>What to do</th></tr>
  <tr><td>Read &amp; Plan</td><td>5 min</td><td>Read the unseen poem twice. Annotate both poems. Jot down 3-4 comparison points.</td></tr>
  <tr><td>Write</td><td>30 min</td><td>Introduction + 3-4 PETER paragraphs + conclusion.</td></tr>
  <tr><td>Review</td><td>5 min</td><td>Check that every paragraph compares both poems. Fix any missing connectives or unclear analysis.</td></tr>
</table>

<h3>Grade 5 vs Grade 9: What Is the Difference?</h3>

<p>Understanding the grade boundaries helps you target your revision:</p>

<ul>
  <li><strong>Grade 5</strong> responses identify similarities and differences and support points with quotations, but the comparison may feel mechanical - "Poem A does this. Poem B does that." Analysis tends to name techniques without fully exploring their effects.</li>
  <li><strong>Grade 7</strong> responses integrate comparison throughout, use the PETER structure fluently, and begin to explore how context and form shape meaning. Connectives of comparison appear naturally rather than being bolted on.</li>
  <li><strong>Grade 9</strong> responses offer a <strong>conceptualised</strong> comparison - a sophisticated argument about how and why the poets' approaches differ. They explore ambiguity, alternative interpretations, and the effect of structural choices. The comparison feels like a genuine conversation between the two poems, not a checklist.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> To push from Grade 7 to Grade 9, try opening a paragraph with a conceptual point rather than a technique: <em>"Both poets interrogate the idea that memory is a burden, yet they arrive at opposing conclusions."</em> This shows the examiner you are thinking about the poems as whole texts, not just hunting for devices.</div>

<h3>Quick Practice</h3>

<p>Take any anthology poem you have studied and imagine comparing it with a poem on a similar theme. Write a single PETER paragraph in no more than eight minutes. Check: does your paragraph mention both poems? Does it include at least one quotation from each? Does it end with a genuine comparative statement? If all three answers are yes, you are on the right track.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m9-q1',
        question: 'What does the R in the PETER framework stand for?',
        options: ['Repetition', 'Response / Comparison', 'Review', 'Reference to context'],
        correct: 1,
        explanation:
          'R stands for Response / Comparison - the crucial step where you draw both poems together and make an explicit comparative judgement about their effects or approaches.',
      },
      {
        id: 'edx-lt2-m9-q2',
        question: 'What is the biggest structural mistake students make in the comparison essay?',
        options: [
          'Writing too many paragraphs',
          'Using too many quotations from the unseen poem',
          'Writing two separate mini-essays instead of integrating comparison throughout',
          'Spending too long on the conclusion',
        ],
        correct: 2,
        explanation:
          'The "poem A then poem B" approach is the most common structural error. Every paragraph must discuss both poems and make explicit comparative points to access the higher mark bands.',
      },
      {
        id: 'edx-lt2-m9-q3',
        question:
          'According to the recommended timing, how long should you spend writing the comparison essay (excluding reading and review)?',
        options: ['20 minutes', '25 minutes', '30 minutes', '35 minutes'],
        correct: 2,
        explanation:
          'The recommended writing phase is 30 minutes, with 5 minutes for reading and planning the unseen poem and 5 minutes for reviewing your response.',
      },
      {
        id: 'edx-lt2-m9-q4',
        question: 'What distinguishes a Grade 9 comparison from a Grade 5 comparison?',
        options: [
          'A Grade 9 response uses longer quotations',
          'A Grade 9 response analyses only the unseen poem in detail',
          'A Grade 9 response offers a conceptualised argument exploring ambiguity and alternative interpretations',
          'A Grade 9 response always includes historical context for both poems',
        ],
        correct: 2,
        explanation:
          "Grade 9 responses are conceptualised - they present a sophisticated argument about how and why the poets' approaches differ, explore ambiguity, and treat the comparison as a genuine conversation between the two texts.",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 - Paper 2 Exam Strategy & Practice
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m10',
    title: 'Paper 2 Exam Strategy & Practice',
    duration: '60 min',
    content: `
<h2>Paper 2 Exam Strategy &amp; Practice</h2>

<p>Edexcel GCSE English Literature Paper 2 lasts <strong>2 hours 15 minutes</strong> and covers your 19th-century novel, the poetry anthology, and an unseen poem comparison. With <strong>80 marks</strong> across three distinct tasks, time management is everything. This module gives you a complete timing plan, open-book strategy, common pitfalls, and a revision toolkit to take into exam season.</p>

<h3>Full Paper 2 Timing Plan</h3>

<div class="key-term"><strong>Key Principle:</strong> The paper is long, but every minute is accounted for. Stick to the plan and you will have time for every question - deviate and you risk losing marks on the section you rush.</div>

<table>
  <tr><th>Section</th><th>Task</th><th>Marks</th><th>Time</th><th>Breakdown</th></tr>
  <tr><td>A - Novel</td><td>19th-century novel response</td><td>40</td><td>55 min</td><td>5 min plan, 45 min write, 5 min check</td></tr>
  <tr><td>B Part 1</td><td>Single anthology poem</td><td>20</td><td>30 min</td><td>5 min read/plan, 22 min write, 3 min check</td></tr>
  <tr><td>B Part 2</td><td>Comparison (anthology + unseen)</td><td>20</td><td>40 min</td><td>8 min read unseen + plan, 28 min write, 4 min check</td></tr>
  <tr><td colspan="3"><strong>Final review</strong></td><td>10 min</td><td>Re-read all three responses; fix SPaG errors and add missing analysis</td></tr>
</table>

<p>This totals <strong>135 minutes</strong> - exactly the time available. There is no spare time built in, which is why discipline with the plan is critical.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Wear a watch or position yourself to see a clock. Write your target finish times at the top of each section before you begin. For example: "Novel - finish by 10:20. Single poem - finish by 10:50. Comparison - finish by 11:30."</div>

<h3>Open-Book Strategy</h3>

<p>Paper 2 is an <strong>open-book exam</strong> for the poetry section - you will have the anthology in front of you. This is a double-edged sword: it removes the pressure of memorising every quotation, but it can also waste your time if you are not strategic.</p>

<ul>
  <li><strong>Know your poems' page locations.</strong> The clean anthology is given to you in the exam room. Familiarise yourself with the order and page numbers during revision so you can turn straight to the right poem without wasting time searching.</li>
  <li><strong>Do not re-read familiar poems line by line.</strong> You should already know them well enough to locate quotations quickly. A quick scan to refresh is fine - a full re-read is wasted time.</li>
  <li><strong>Use the anthology as a reference, not a crutch.</strong> The best responses demonstrate that you have internalised the poems. Glancing down to check a word or line number is efficient; hunting for quotations you have never noticed before is not.</li>
  <li><strong>For the unseen poem,</strong> you have no prior knowledge - read it twice, annotate heavily, and trust your analytical instincts.</li>
</ul>

<h3>Section A: Novel - Getting It Right</h3>

<p>The 19th-century novel question is worth <strong>40 marks</strong> - the single biggest chunk of the paper. You will be given an extract and asked to analyse a character, theme, or relationship, then extend your discussion to the wider novel.</p>

<ul>
  <li><strong>Start with the extract:</strong> Spend your first two paragraphs on close language analysis of the printed passage. Embed quotations and analyse methods.</li>
  <li><strong>Move to the wider novel:</strong> Your next two or three paragraphs should explore how the theme or character develops elsewhere. Reference specific moments - chapter, scene, key quotation.</li>
  <li><strong>Context matters:</strong> Weave in relevant social, historical, or literary context where it illuminates the text. Do not bolt on context as a separate paragraph - integrate it naturally.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on the novel and rushing the poetry. The novel is worth 40 marks, but the two poetry questions together are worth 40 marks too. If you spend 70 minutes on the novel, you have only 55 minutes for two poetry essays - a recipe for underperformance.</div>

<h3>Common Mistakes to Avoid</h3>

<ul>
  <li><strong>Unbalanced comparisons:</strong> In the comparison essay, writing extensively about the anthology poem and barely mentioning the unseen poem (or vice versa). Aim for roughly equal coverage in every paragraph.</li>
  <li><strong>Feature-spotting without analysis:</strong> Identifying a metaphor or simile but not explaining its effect on the reader. Always ask: <em>so what? What does this make the reader think or feel?</em></li>
  <li><strong>Ignoring structure:</strong> Students often focus on language and forget about structural features - enjambment, stanza breaks, volta, narrative arc. These are easy marks if you address them.</li>
  <li><strong>Running out of time on the final question:</strong> The comparison essay is last, and fatigued students often write half a response. Stick to the timing plan.</li>
  <li><strong>Retelling the story:</strong> In the novel section, narrating the plot instead of analysing how the writer creates meaning. The examiner knows the story - they want to see your analytical skill.</li>
</ul>

<h3>Revision Techniques</h3>

<p>The weeks before the exam should be focused and strategic:</p>

<ol>
  <li><strong>Quotation flash cards:</strong> For each anthology poem, create cards with 5-6 key quotations on one side and analysis (technique + effect) on the other. For the novel, create cards for key themes with supporting quotations.</li>
  <li><strong>Theme grids:</strong> Draw a grid with poems along the top and themes down the side (power, conflict, identity, nature, loss). Tick where each poem connects. This makes it easy to find comparison pairs for any theme the exam might ask about.</li>
  <li><strong>Timed practice:</strong> Write at least two full Paper 2 responses under timed conditions before exam day. Mark them against the mark scheme or swap with a study partner.</li>
  <li><strong>Examiner reports:</strong> Read the published examiner reports for past Edexcel Literature papers. They tell you exactly what students did well and where they lost marks - this is insider knowledge freely available.</li>
  <li><strong>Quotation reduction:</strong> Can you express your analysis of a poem in just three quotations? Forcing yourself to select the most versatile quotations builds the kind of focused thinking the exam rewards.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The single most effective revision activity is <strong>timed practice under exam conditions</strong>. Reading notes and highlighting textbooks feels productive, but it does not prepare you for the pressure of writing three essays in 135 minutes. Practise the way you will perform.</div>

<h3>Final Exam Day Checklist</h3>

<ul>
  <li>Black ink pen (plus a spare) and a watch. You will be given a clean, unannotated copy of the poetry anthology in the exam.</li>
  <li>Write your timing targets at the top of the answer booklet before the exam starts.</li>
  <li>Read every question fully before you begin writing - underline command words and key terms.</li>
  <li>For the novel: start with the extract, then move to the wider text. Do not skip the extract.</li>
  <li>For the single poem: plan before you write. Identify 3-4 key points and supporting quotations.</li>
  <li>For the comparison: read the unseen poem twice. Annotate it. Plan your comparison points before writing.</li>
  <li>In the final 10 minutes: re-read all three responses. Fix spelling errors, add missing connectives, and check that every paragraph includes analysis - not just quotation.</li>
  <li>If you finish early, add an extra analytical point to your weakest response rather than sitting idle.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Leaving the exam hall early. Use every minute. Even five minutes of proofreading can catch errors that cost marks - a missing comparative connective, a misspelled character name, or an incomplete sentence at the end of a paragraph.</div>

<p>You have studied the texts, practised the skills, and learned the frameworks. Trust your preparation, manage your time, and show the examiner what you know. Good luck.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m10-q1',
        question: 'How long is Edexcel Literature Paper 2 in total?',
        options: ['1 hour 45 minutes', '2 hours', '2 hours 15 minutes', '2 hours 30 minutes'],
        correct: 2,
        explanation:
          'Paper 2 is 2 hours 15 minutes (135 minutes). Every minute must be accounted for across the novel response, single poem analysis, and comparison essay.',
      },
      {
        id: 'edx-lt2-m10-q2',
        question:
          'According to the timing plan, how long should you spend reading the unseen poem and planning your comparison essay?',
        options: ['3 minutes', '5 minutes', '8 minutes', '12 minutes'],
        correct: 2,
        explanation:
          'The recommended plan allocates 8 minutes to reading the unseen poem twice, annotating it, and planning your comparison points before you begin writing.',
      },
      {
        id: 'edx-lt2-m10-q3',
        question: 'What is the most common timing mistake students make on Paper 2?',
        options: [
          'Spending too long on the single poem and rushing the novel',
          'Spending too long on the novel and rushing the poetry questions',
          'Spending too long on the comparison and skipping the final review',
          'Spending too long reading the unseen poem',
        ],
        correct: 1,
        explanation:
          'The novel section (40 marks) tempts students to overwrite, but the two poetry questions are also worth 40 marks combined. Sticking to the 55-minute novel allocation is essential.',
      },
      {
        id: 'edx-lt2-m10-q4',
        question:
          'Which revision technique involves mapping poems against themes in a grid format?',
        options: ['Quotation flash cards', 'Theme grids', 'Timed practice', 'Quotation reduction'],
        correct: 1,
        explanation:
          'Theme grids list poems along one axis and themes along the other, allowing you to quickly identify comparison pairs for any theme the exam might ask about.',
      },
    ],
  },
]
