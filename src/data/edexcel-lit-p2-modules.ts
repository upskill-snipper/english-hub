// @ts-nocheck
import type { CourseModule } from './courses'

export const litP2Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 - Paper 2 Overview & what markers look for
  // ──────────────────────────────────────────────
  {
    // Rewritten 2 October 2026. This overview described a paper Pearson does not set: Section B
    // open book with a clean anthology, Part 1 a single named poem, Part 2 an unseen poem
    // compared with an anthology poem, context (AO3) in Section A and 4 AO4 marks in Section B.
    // The 1ET0 specification (Issue 2) has Paper 2 closed book; Section A one two-part question,
    // (a) an extract for AO2 20 and (b) the whole novel for AO1 20; Section B Part 1 the named
    // poem, printed, compared with another from the same collection (AO2 15, AO3 5); Part 2 two
    // unseen poems compared (AO1 8, AO2 12); no AO4 anywhere on the paper. Modules 6 to 10 and
    // the assessment questions are corrected to match. Modules 2 to 5, on the novel, still teach
    // context as if Section A assessed it: that is a separate correction. The same text is in
    // edexcel-lit-p2-modules.ts, which nothing imports.
    id: 'edx-lt2-m1',
    title: 'Paper 2 Overview & what markers look for',
    duration: '45 min',
    content: `
<h2>Edexcel GCSE English Literature - Paper 2</h2>

<p>Paper 2 is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of your total Literature GCSE. You have <strong>2 hours and 15 minutes</strong> to complete two sections: the 19th-century novel, and poetry. You answer four questions, each worth 20 marks. The paper tests your ability to analyse an extract closely, write about a novel as a whole, and compare poems: two from your anthology collection, and two you have never seen before.</p>

<div class="key-term"><strong>Key Term: Closed Book</strong> - Texts are not allowed in the exam. The paper prints an extract of about 400 words from your novel, the named poem from your anthology collection and the two unseen poems. Everything else - the rest of the novel, and the second anthology poem you choose to write about - you must know well enough to quote from memory.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A - 19th-Century Novel (40 marks):</strong> One two-part question on your novel. Part (a) asks you to explore an extract of about 400 words, printed on the paper (20 marks). Part (b) is an essay on the novel as a whole (20 marks).</li>
  <li><strong>Section B Part 1 - Anthology Poetry (20 marks):</strong> One question on the collection you studied. One poem is named and printed on the paper, and you compare it with another poem of your choice from the same collection.</li>
  <li><strong>Section B Part 2 - Unseen Poetry (20 marks):</strong> One question comparing two contemporary poems you have not seen before. Both are printed on the paper, and they are linked by a theme.</li>
</ul>

<h3>What Markers Look For</h3>
<ul>
  <li><strong>AO1</strong> - Read, understand and respond to texts: maintain a critical style, develop an informed personal response, and use textual references, including quotations, to support and illustrate interpretations. Assessed in Section A part (b) and in Section B Part 2.</li>
  <li><strong>AO2</strong> - Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology. Assessed in Section A part (a) and in both parts of Section B.</li>
  <li><strong>AO3</strong> - Show understanding of the relationships between texts and the contexts in which they were written. Assessed in Section B Part 1 only.</li>
  <li><strong>AO4</strong> (spelling, punctuation and grammar) is <em>not</em> assessed on Paper 2. All 8 of its marks are on Paper 1.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Section A and Section B are worth 40 marks each, so they deserve roughly equal time. A common error is spending too long on the novel and rushing the poetry. Stick to the timing plan below - practise it under timed conditions before the exam so it becomes automatic.</div>

<h3>Mark Distribution by AO</h3>
<ul>
  <li><strong>Section A part (a) (Extract):</strong> Writer's methods (AO2) - 20 marks.</li>
  <li><strong>Section A part (b) (Whole novel):</strong> AO1 - 20 marks.</li>
  <li><strong>Section B Part 1 (Anthology comparison):</strong> Writer's methods (AO2) - 15 marks, Context (AO3) - 5 marks.</li>
  <li><strong>Section B Part 2 (Unseen comparison):</strong> AO1 - 8 marks, Writer's methods (AO2) - 12 marks.</li>
</ul>

<p>Two things follow. Context earns marks only in Section B Part 1, so in Section A use it only where it helps you explain the novel. And no marks on this paper are given for spelling, punctuation and grammar, though clear writing is still how your ideas reach the marker.</p>

<h3>Recommended Timing Plan</h3>
<p>Pearson sets only the total time. This plan divides it roughly by marks, with a little extra for Section B, where you have three poems on the paper to read.</p>
<ol>
  <li><strong>0-30 min:</strong> Section A part (a). Read the extract and the question, annotate key words and methods, and write about the extract (20 marks).</li>
  <li><strong>30-60 min:</strong> Section A part (b). Plan, then write about the novel as a whole (20 marks).</li>
  <li><strong>60-95 min:</strong> Section B Part 1. Read the named poem, choose the poem you will compare it with, plan three or four points of comparison and write (20 marks).</li>
  <li><strong>95-130 min:</strong> Section B Part 2. Read both unseen poems twice, annotate them, then plan and write your comparison (20 marks).</li>
  <li><strong>130-135 min:</strong> Review all four answers. Check quotation accuracy, the spelling of writers' names, and that every poetry paragraph compares.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Section A as one essay. Parts (a) and (b) are separate questions, marked separately for different things: part (a) for close analysis of the extract's language, form and structure (AO2), part (b) for your response to the novel as a whole, supported by references (AO1). Answer each question as it is asked.</div>

<h3>What "Explore" and "Analyse" Mean on This Paper</h3>
<p>The command words on Paper 2 are precise. <strong>"Explore"</strong> means you should investigate the text in depth, considering multiple interpretations and layers of meaning. <strong>"Analyse"</strong> means you should break down the writer's choices - examining <em>how</em> language, structure, and form create specific effects on the reader. Both require you to go beyond description and engage critically with the text.</p>

<p>In both parts of Section B, the word <strong>"compare"</strong> is critical. You must write about both poems throughout your response - not one and then the other. Integrated comparison is what distinguishes a top-band answer from a mid-range one.</p>
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
          'Which assessment objective is tested ONLY in Section B Part 1 (the anthology comparison)?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 2,
        explanation:
          'Context (AO3) is worth 5 marks on Paper 2, all of them in Section B Part 1, where you compare two poems from your anthology collection. Section A assesses AO2 (the extract) and AO1 (the whole novel), Section B Part 2 assesses AO1 and AO2, and AO4 is not assessed on Paper 2 at all.',
      },
      {
        id: 'edx-lt2-m1-q3',
        question:
          'How many marks on Paper 2 are awarded for spelling, punctuation and grammar (AO4)?',
        options: ['0 marks', '4 marks', '5 marks', '8 marks'],
        correct: 0,
        explanation:
          'None. AO4 is assessed only on Paper 1, where it is worth 8 marks. On Paper 2, clear and accurate writing still helps the marker follow your argument, but it earns no separate marks.',
      },
      {
        id: 'edx-lt2-m1-q4',
        question: 'Which texts will you have in front of you in the Paper 2 exam?',
        options: [
          'A clean copy of the whole poetry anthology',
          'Your own annotated copies of the novel and the anthology',
          'Only what the paper prints: the novel extract, the named anthology poem and the two unseen poems',
          'The whole novel, but no poems',
        ],
        correct: 2,
        explanation:
          'Paper 2 is closed book: texts are not allowed in the exam. The paper prints an extract of about 400 words from your novel, the named poem from your collection and the two unseen poems. The rest of the novel, and the second anthology poem you choose, you quote from memory.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 - 19th-Century Novel: Context & Conventions (A Christmas Carol Focus)
  // ──────────────────────────────────────────────
  {
    // Quotations corrected 2 October 2026 against the held edition (Project Gutenberg #46,
    // src/data/full-texts/a-christmas-carol.ts): Scrooge's Stave One questions are "Are there
    // no prisons?" and "And the Union workhouses?" ("Are there no workhouses?" is the Spirit's,
    // in Stave Three), and the edition prints "grind-stone". The same text is in
    // edexcel-lit-courses.ts.
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
  <li><strong>The Poor Law Amendment Act (1834):</strong> This law created workhouses where the destitute were sent to labour in appalling conditions. The philosophy was deliberate harshness - poverty was seen as a moral failing, and relief was made as unpleasant as possible to discourage dependency. Scrooge directly echoes this attitude when he asks, <em>"Are there no prisons? ... And the Union workhouses?"</em></li>
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
  <li><em>"Oh! But he was a tight-fisted hand at the grind-stone, Scrooge!"</em> - Exclamatory tone establishes him as an extreme figure of avarice.</li>
  <li><em>"Are there no prisons? ... And the Union workhouses?"</em> - Echoes Malthusian economics; reveals callousness toward the poor.</li>
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
    // Until 2 October 2026 this module said the school chooses one of two clusters,
    // Relationships or Conflict, while listing Conflict and Time and Place, and that the exam
    // asks for one named poem, not printed, analysed from memory. Pearson's anthology (Issue 4)
    // has four collections, and Section B Part 1 prints the named poem and asks for a comparison
    // with another from the same collection; see module 1. Sonnet 43 is now quoted as the
    // anthology prints it, and the Charge's metre is dactylic, not anapaestic.
    id: 'edx-lt2-m6',
    title: 'Poetry Anthology: Approaching Anthology Poems',
    duration: '55 min',
    content: `
<h2>The Edexcel Poetry Anthology - How It Works</h2>

<p>Section B Part 1 tests your <strong>poetry anthology</strong>. Pearson's anthology has four collections of 15 poems - <strong>Relationships</strong>, <strong>Conflict</strong>, <strong>Time and Place</strong> and <strong>Belonging</strong> - and your school chooses one. In the exam, one poem from your collection is <strong>named and printed</strong> on the paper, and you compare it with <strong>another poem of your choice from the same collection</strong>, for <strong>20 marks</strong>. Your second poem is <em>not</em> printed: the paper is closed book, so you must know it well enough to quote from memory.</p>

<div class="key-term"><strong>Key Term: Collection</strong> - Pearson's name for each thematic group of 15 poems in the anthology. Each poet approaches the theme differently in form, voice and perspective, which is what gives you something to compare.</div>

<h3>The Four Collections (15 Poems Each)</h3>

<p><strong>Relationships:</strong> La Belle Dame Sans Merci (Keats), A Child to his Sick Grandfather (Baillie), She Walks in Beauty (Byron), A Complaint (Wordsworth), Neutral Tones (Hardy), Sonnet 43 (Barrett Browning), My Last Duchess (Robert Browning), 1st Date - She and 1st Date - He (Cope), Valentine (Duffy), One Flesh (Jennings), i wanna be yours (Cooper Clarke), Love's Dog (Hadfield), Nettles (Scannell), The Manhunt (Armitage), My Father Would Not Show Us (de Kok).</p>

<p><strong>Conflict:</strong> A Poison Tree (Blake), The Destruction of Sennacherib (Byron), Extract from The Prelude (Wordsworth), The Man He Killed (Hardy), Cousin Kate (Rossetti), Half-caste (Agard), Exposure (Owen), The Charge of the Light Brigade (Tennyson), Catrin (Clarke), War Photographer (Satyamurti), Belfast Confetti (Carson), The Class Game (Casey), Poppies (Weir), No Problem (Zephaniah), What Were They Like? (Levertov).</p>

<p><strong>Time and Place:</strong> To Autumn (Keats), Composed upon Westminster Bridge (Wordsworth), London (Blake), I started Early - Took my Dog (Dickinson), Where the Picnic was (Hardy), Adlestrop (Thomas), Home Thoughts from Abroad (Browning), First Flight (Fanthorpe), Stewart Island (Adcock), Presents from my Aunts in Pakistan (Alvi), Hurricane Hits England (Nichols), Nothing's Changed (Afrika), Postcard from a Travel Snob (Hannah), In Romney Marsh (Davidson), Absence (Jennings).</p>

<p><strong>Belonging:</strong> Peckham Rye Lane (Blakemore), Us (Kunial), In Wales, wanting to be Italian (Dharker), Kumukanda (Chingonyi), Jamaican British (Antrobus), My Mother's Kitchen (Hardi), The Émigrée (Rumens), To My Sister (Wordsworth), Sunday Dip (Clare), Mild the Mist Upon the Hill (Emily Brontë), Captain Cook (To My Brother) (Landon), Clear and Gentle Stream (Bridges), I Remember, I Remember (Hood), Island Man (Nichols), We Refugees (Zephaniah).</p>

<h3>Choosing Your Second Poem</h3>

<p>You cannot know in advance which poem will be named, so prepare pairings. For every poem in your collection, know two or three others you could compare it with, and why: a shared theme handled through contrasting methods, or a similar method put to different ends. In the exam, choose the partner that gives you the most to say about the question's theme, not simply your favourite poem. You need context for both poems, because 5 of the 20 marks are for context (AO3).</p>

<h3>The SMILE Framework</h3>
<ol>
  <li><strong>S - Structure:</strong> Stanza length, rhyme scheme, enjambment, caesura. Does form mirror meaning?</li>
  <li><strong>M - Meaning:</strong> Literal summary first, then deeper ideas beneath the surface.</li>
  <li><strong>I - Imagery:</strong> Similes, metaphors, personification, symbols - how do they connect to themes?</li>
  <li><strong>L - Language:</strong> Word choices, register, semantic fields, repetition, connotation.</li>
  <li><strong>E - Effect:</strong> What response is the poet provoking - sympathy, anger, admiration, unease?</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> Always start with literal meaning. If you misread the poem, every analytical point crumbles. Spend the first minute understanding the surface story.</div>

<h3>Annotating a Poem</h3>
<p>Three passes: first write a one-sentence summary, then circle images and note techniques in the margin, finally connect ideas with arrows and mark tone shifts.</p>

<h3>Practice - "Sonnet 43" (Relationships)</h3>

<div class="text-extract"><em>How do I love thee? Let me count the ways! –<br/>
I love thee to the depth and breadth and height<br/>
My soul can reach, when feeling out of sight<br/>
For the ends of Being and Ideal Grace.</em><div class="source">Barrett Browning, <em>Sonnets from the Portuguese</em> (1850)</div></div>

<p><strong>S:</strong> Petrarchan sonnet; iambic pentameter mirrors certainty. <strong>I:</strong> "Depth and breadth and height" - spatial imagery fills every dimension. <strong>L:</strong> Anaphora ("I love thee") creates prayer-like incantation; religious register ("soul", "Grace"). <strong>Context:</strong> Written during Barrett Browning's secret courtship, defying her father.</p>

<h3>Practice - "The Charge of the Light Brigade" (Conflict)</h3>

<div class="text-extract"><em>Half a league, half a league,<br/>
Half a league onward,<br/>
All in the valley of Death<br/>
Rode the six hundred.</em><div class="source">Tennyson (1854), stanza 1</div></div>

<p><strong>S:</strong> Dactylic dimeter - two beats a line, each a stressed syllable followed by two unstressed ("HALF a league, HALF a league") - creates the galloping rhythm; end-stopped lines and repetition propel the reader forward. <strong>I:</strong> "Valley of Death" alludes to Psalm 23; capitalised "Death" personifies a waiting presence. <strong>L:</strong> "Half a league" repeated - relentless motion; "onward" reinforces duty. <strong>Context:</strong> Battle of Balaclava, 25 October 1854 (Crimean War) - a miscommunicated order sent the Light Brigade into Russian artillery. Tennyson, then Poet Laureate, wrote the poem within weeks, turning a military blunder into a celebration of courage.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating every poem identically. Some are best approached through imagery, others through voice or structure. Use SMILE as a checklist, but let the poem guide your focus.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m6-q1',
        question: 'In Section B Part 1, what does the question ask you to do?',
        options: [
          'Analyse one named anthology poem on its own, from memory',
          'Compare the named poem, printed on the paper, with another poem of your choice from the same collection',
          'Compare an anthology poem with an unseen poem',
          'Choose any two poems from a clean copy of the anthology',
        ],
        correct: 1,
        explanation:
          'One poem from your collection is named and printed on the paper. You compare it with a second poem of your choice from the same collection, which is not printed, so you quote it from memory. The question is worth 20 marks: 15 for language, form and structure (AO2) and 5 for context (AO3).',
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
        question: 'Which collection does "Sonnet 43" by Elizabeth Barrett Browning belong to?',
        options: ['Conflict', 'Relationships', 'Belonging', 'Time and Place'],
        correct: 1,
        explanation:
          '"Sonnet 43" is in the Relationships collection. It is a Petrarchan sonnet exploring the depth and nature of romantic love, written during Barrett Browning\'s courtship with Robert Browning.',
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
    // Until 2 October 2026 the practice extract quoted six lines of Half-caste in words that
    // are not Agard's as Pearson's anthology prints them: it opened "Half-caste? Explain
    // yuself," and ended on a question mark where the poem has none. It is now two short
    // quotations from the anthology.
    id: 'edx-lt2-m7',
    title: 'Poetry: Language, Form & Structure',
    duration: '55 min',
    content: `
<h2>Poetry: Language, Form &amp; Structure - AO2</h2>

<p>Writer's methods (AO2) asks you to <strong>analyse how writers use language, form and structure to create meanings and effects</strong>. Markers reward students who explain <em>why</em> a poet made a choice and <em>how</em> it shapes the reader's experience - not those who spot features.</p>

<div class="key-term"><strong>Key Term: Writer's Methods (AO2)</strong> - Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</div>

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

<div class="examiner-tip"><strong>Top Tip:</strong> Never just name a device - explain its effect. "The sibilance in 'softly she slipped away' creates a hushed tone mirroring stealth." Without effect, you are describing, not analysing.</div>

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

<div class="text-extract">Explain yuself<br/>wha yu mean<div class="source">John Agard, 'Half-caste'</div></div>

<p>Consider: the questions the speaker puts to the listener, which the poem prints without question marks; how phonetic spelling creates a spoken voice; the Picasso analogy ("mix red an green / is a half-caste canvas/"); the slashes where you might expect full stops; and enjambment across short lines building a confrontational rhythm.</p>
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
          "Writer's methods (AO2) focuses on analysing how writers use language, form and structure to create meanings and effects. It is the key skill tested in the poetry questions on Paper 2.",
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
          'Because markers only want you to discuss content, not technique',
          'Because it identifies techniques without explaining their effect on meaning',
          'Because you should only discuss one technique per paragraph',
          'Because sound devices are not relevant to AO2',
        ],
        correct: 1,
        explanation:
          'Feature-spotting means listing techniques without analysing their effect. Markers reward responses that explain how and why a technique creates meaning, not responses that simply name devices like a checklist.',
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
    // Until 2 October 2026 this module said the 20-mark question compares a named anthology
    // poem with an unseen poem, and its model paragraph quoted Armitage's Remains, which is in
    // AQA's anthology, not Pearson's. Section B has two comparisons; see module 1.
    id: 'edx-lt2-m8',
    title: 'Poetry: Comparison Techniques',
    duration: '55 min',
    content: `
<h2>Poetry: Comparison Techniques - The Two 20-Mark Questions</h2>

<p>Both questions in Section B are comparisons, each worth <strong>20 marks</strong>. In <strong>Part 1</strong> you compare the <strong>named anthology poem</strong>, printed on the paper, with <strong>another poem from your collection</strong>, quoted from memory. In <strong>Part 2</strong> you compare <strong>two unseen poems</strong>, both printed on the paper, which you have never read before. The same comparison skills serve both questions.</p>

<div class="key-term"><strong>Key Term: Integrated Comparison</strong> - Discussing both poems within the same paragraphs, moving fluently between them, rather than writing about each separately.</div>

<h3>Approaching the Unseen Poems (Part 2)</h3>

<p>Spend about <strong>5 minutes reading</strong> before you plan or write. Read each poem twice:</p>
<ol>
  <li><strong>First read - meaning:</strong> What is this about? What is the speaker's situation and mood? Do not worry about techniques yet.</li>
  <li><strong>Second read - technique:</strong> Underline key choices - imagery, tone shifts, structural features, sound patterns. Note where the two poems meet and where they differ.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> If a phrase puzzles you, move on and analyse what you <em>can</em>. Markers are looking for thoughtful analysis, not a perfect paraphrase.</div>

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

<div class="common-mistake"><strong>Common Mistake:</strong> Vague comparisons - "Both poems are about war." Be specific: "Both poets write about soldiers under orders, but Tennyson honours the charge as glorious while Owen shows men freezing as they wait, where 'nothing happens'." Compare <em>treatment</em>, not topic.</div>

<h3>Integrated Paragraph Structure</h3>
<ol>
  <li><strong>Comparative topic sentence</strong> - "Both poets explore separation, but through contrasting structures."</li>
  <li><strong>Evidence + analysis, Poem A</strong> - embed a quotation, analyse method and effect.</li>
  <li><strong>Pivot to Poem B</strong> - "In contrast, the second poet..."</li>
  <li><strong>Evidence + analysis, Poem B</strong> - quotation, method, different or similar effect.</li>
  <li><strong>Concluding comment</strong> - what does the comparison reveal?</li>
</ol>

<div class="text-extract"><strong>Model (Part 1, Conflict):</strong> Both poets present soldiers who obey without question, but to opposite ends. Tennyson turns obedience into heroism: the anaphora of "Their's not to reason why, / Their's but to do and die" makes duty sound like a law, and the galloping rhythm carries the men forward as if the poem itself were cheering them on. Owen's soldiers obey too, yet their only duty is to wait: the refrain "But nothing happens" closes four of the poem's eight stanzas, so the structure enacts the waiting that kills them. Where Tennyson, writing as Poet Laureate weeks after Balaclava, calls on the reader to "Honour the Light Brigade", Owen, an officer who had served on the Western Front, denies his men even a battle: it is the frost, not the enemy, that kills them, and "All their eyes are ice".<div class="source">Grade 8/9 model comparison paragraph</div></div>

<h3>Planning in 5 Minutes</h3>

<p><strong>Venn Diagram:</strong> Left = first poem, right = second poem, overlap = shared themes/methods. Paragraphs draw from the overlap; unique features highlight contrasts.</p>

<p><strong>Comparison Grid:</strong> Columns: <strong>Aspect</strong> | <strong>Poem A</strong> | <strong>Poem B</strong>. List 3-4 aspects (imagery, tone, structure) with brief notes - a ready-made plan.</p>

<div class="examiner-tip"><strong>Top Tip:</strong> Aim for 3-4 developed paragraphs, not 5-6 thin ones. Depth outscores breadth. Each paragraph needs a quotation from each poem and a clear comparative point.</div>
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
        question: 'What should your first reading of each unseen poem focus on?',
        options: [
          'Identifying every poetic technique used',
          'Understanding the overall meaning, situation, and mood',
          'Finding quotations that link the two poems',
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
    // Until 2 October 2026 this module said the 20-mark comparison sets an anthology poem
    // against an unseen poem, and its model introduction gave 'War Photographer' to Duffy:
    // Edexcel's is Carole Satyamurti's (Duffy's is in AQA's anthology). Section B asks for two
    // comparisons, Part 1 the named anthology poem with another from the same collection and
    // Part 2 two unseen poems; see module 1. The examples now pair two Conflict poems, quoted as
    // Pearson's anthology prints them.
    id: 'edx-lt2-m9',
    title: 'Poetry: Writing the Comparison Essay',
    duration: '55 min',
    content: `
<h2>Writing the 20-Mark Comparison Essay</h2>

<p>Section B of Edexcel GCSE English Literature Paper 2 asks for two comparison essays, each worth <strong>20 marks</strong>. In <strong>Part 1</strong> you compare the named anthology poem, printed on the paper, with another poem from the same collection; the marks are for language, form and structure (AO2, 15 marks) and context (AO3, 5 marks). In <strong>Part 2</strong> you compare two <strong>unseen poems</strong>, both printed on the paper; the marks are for your response, supported by references (AO1, 8 marks), and for language, form and structure (AO2, 12 marks). The same essay shape serves both, and it all comes down to <strong>structure, balance, and genuine comparison</strong>.</p>

<div class="key-term"><strong>Key Term: Comparison</strong> - A comparison essay does not simply analyse two poems one after the other. It identifies points of similarity and difference and weaves both poems together throughout every paragraph.</div>

<h3>Essay Structure: The Blueprint</h3>

<p>A strong comparison essay follows a clear, efficient structure:</p>

<ol>
  <li><strong>Brief introduction (2-3 sentences):</strong> Name both poems, identify the shared theme or subject, and offer a thesis statement about how the poets approach the subject similarly or differently. For example: <em>"Both 'The Charge of the Light Brigade' and 'Exposure' show soldiers carrying out orders, yet Tennyson celebrates their obedience as glorious while Owen exposes the slow suffering of men who can only wait."</em></li>
  <li><strong>3-4 comparative paragraphs:</strong> Each paragraph tackles one point of comparison (e.g. tone, imagery, structure, perspective) and draws evidence from <strong>both</strong> poems. This is where most of your marks are earned.</li>
  <li><strong>Brief conclusion (2-3 sentences):</strong> Summarise how the poets' approaches differ or align, and offer a final evaluative comment about the overall effect on the reader.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> Do not write a long introduction. Two or three sentences are enough. Markers are looking for comparison and analysis, not scene-setting. Get into your first comparative point by the end of the first third of a page.</div>

<h3>The PETER Framework for Comparison</h3>

<p>Use the <strong>PETER</strong> framework to build each comparative paragraph. The example compares two poems from the Conflict collection, as Part 1 asks you to:</p>

<ul>
  <li><strong>P - Point:</strong> State your comparative point clearly. <em>"Both poets show soldiers under attack, but they disagree about who, or what, the enemy is."</em></li>
  <li><strong>E - Evidence from Poem 1:</strong> Embed a quotation from the first poem. <em>"In 'Exposure', Owen describes 'the merciless iced east winds that knive us', where the invented verb 'knive' turns the weather into a weapon."</em></li>
  <li><strong>T - Technique:</strong> Identify and analyse the method. <em>"Making a verb of 'knive' gives the wind the violence of an attacker, so that the soldiers' real enemy is the weather rather than the men opposite."</em></li>
  <li><strong>E - Evidence from Poem 2:</strong> Now bring in the second poem with a quotation and analysis. <em>"Tennyson's enemy is human and on every side: 'Cannon to right of them, / Cannon to left of them' hems the riders in with repetition, as the guns hem in the men."</em></li>
  <li><strong>R - Response / Comparison:</strong> Draw the two together. <em>"Tennyson's soldiers face an enemy they can charge, so they can be heroes; Owen, who served on the Western Front, gives his men an enemy they cannot fight, and leaves them nothing to do but endure."</em></li>
</ul>

<p>In Part 2 the shape is the same, but both quotations come from the unseen poems on the paper, and context earns no marks there: put your effort into the poets' methods and your own response.</p>

<div class="key-term"><strong>Key Term: Connectives of Comparison</strong> - Use linking phrases to signal comparison: <em>similarly, likewise, in the same way, both poets</em> (for similarity); <em>however, by contrast, whereas, conversely, on the other hand</em> (for difference). These words are the glue that holds a comparison essay together.</div>

<h3>Balancing the Two Poems</h3>

<p>Each question brings its own risk of imbalance. Here is how to manage it:</p>

<ul>
  <li><strong>Part 1 - the printed poem and the remembered one:</strong> The named poem is in front of you, so it is easy to quote it at length and neglect your second poem, which you must quote from memory. Learn short quotations from every poem in your collection, and bring in context for both poems where it explains a poet's choices: that is where the 5 context marks come from.</li>
  <li><strong>Part 2 - two unseen poems:</strong> Read each poem twice before writing. On the first read, identify the subject and tone. On the second, underline striking words, images, and structural features. You do not need to identify every technique - two or three well-analysed quotations from each poem are enough. Context is not assessed in this part.</li>
  <li><strong>Aim for roughly equal coverage.</strong> If you write fifteen lines on one poem and three lines on the other, markers will see an unbalanced response. Each PETER paragraph should give comparable space to both texts.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing two separate mini-essays - one on each poem - and calling it a comparison. This "poem A then poem B" approach will cap your mark. Every paragraph must discuss both poems and make explicit comparative points.</div>

<h3>Time Management</h3>

<p>You have about <strong>35 minutes</strong> for each question. Divide your time like this:</p>

<table>
  <tr><th>Phase</th><th>Time</th><th>What to do</th></tr>
  <tr><td>Read &amp; Plan</td><td>7 min</td><td>Part 1: read the named poem and the question, choose your second poem, and jot down 3-4 comparison points with a contextual link for each poem. Part 2: read both poems twice, annotate them, and jot down 3-4 comparison points.</td></tr>
  <tr><td>Write</td><td>25 min</td><td>Introduction + 3-4 PETER paragraphs + conclusion.</td></tr>
  <tr><td>Review</td><td>3 min</td><td>Check that every paragraph compares both poems. Fix any missing connectives or unclear analysis.</td></tr>
</table>

<h3>Grade 5 vs Grade 9: What Is the Difference?</h3>

<p>Understanding the grade boundaries helps you target your revision:</p>

<ul>
  <li><strong>Grade 5</strong> responses identify similarities and differences and support points with quotations, but the comparison may feel mechanical - "Poem A does this. Poem B does that." Analysis tends to name techniques without fully exploring their effects.</li>
  <li><strong>Grade 7</strong> responses integrate comparison throughout, use the PETER structure fluently, and begin to explore how form shapes meaning - and, in Part 1, how context does. Connectives of comparison appear naturally rather than being bolted on.</li>
  <li><strong>Grade 9</strong> responses offer a <strong>conceptualised</strong> comparison - a sophisticated argument about how and why the poets' approaches differ. They explore ambiguity, alternative interpretations, and the effect of structural choices. The comparison feels like a genuine conversation between the two poems, not a checklist.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> To push from Grade 7 to Grade 9, try opening a paragraph with a conceptual point rather than a technique: <em>"Both poets interrogate the idea that memory is a burden, yet they arrive at opposing conclusions."</em> This shows markers you are thinking about the poems as whole texts, not just hunting for devices.</div>

<h3>Quick Practice</h3>

<p>Take any poem from your collection and choose a second poem from the same collection to compare it with. Write a single PETER paragraph in no more than eight minutes. Check: does your paragraph mention both poems? Does it include at least one quotation from each? Does it end with a genuine comparative statement? If all three answers are yes, you are on the right track.</p>
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
          'Using too many quotations from one poem',
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
          'According to the recommended timing, how long should you spend writing each comparison essay (excluding reading and review)?',
        options: ['20 minutes', '25 minutes', '30 minutes', '35 minutes'],
        correct: 1,
        explanation:
          'The recommended writing phase is 25 of the 35 minutes for each question, with 7 minutes for reading and planning and 3 minutes for reviewing your response.',
      },
      {
        id: 'edx-lt2-m9-q4',
        question: 'What distinguishes a Grade 9 comparison from a Grade 5 comparison?',
        options: [
          'A Grade 9 response uses longer quotations',
          'A Grade 9 response analyses only one of the two poems in detail',
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
    // Until 2 October 2026 this module gave Paper 2 96 marks and an open-book poetry section,
    // timed a single novel essay, a single anthology poem and an anthology-and-unseen
    // comparison, and advised bookmarking an annotated anthology. See module 1 for the paper.
    id: 'edx-lt2-m10',
    title: 'Paper 2 Exam Strategy & Practice',
    duration: '60 min',
    content: `
<h2>Paper 2 Exam Strategy &amp; Practice</h2>

<p>Edexcel GCSE English Literature Paper 2 lasts <strong>2 hours 15 minutes</strong> and covers your 19th-century novel, a comparison of two poems from your anthology collection, and a comparison of two unseen poems. With <strong>80 marks</strong> across four 20-mark questions, time management is everything. This module gives you a complete timing plan, a strategy for a closed-book paper, common pitfalls, and a revision toolkit to take into exam season.</p>

<h3>Full Paper 2 Timing Plan</h3>

<div class="key-term"><strong>Key Principle:</strong> The paper is long, but every minute is accounted for. Stick to the plan and you will have time for every question - deviate and you risk losing marks on the section you rush.</div>

<table>
  <tr><th>Section</th><th>Task</th><th>Marks</th><th>Time</th><th>Breakdown</th></tr>
  <tr><td>A (a)</td><td>The extract</td><td>20</td><td>30 min</td><td>5 min read and annotate, 22 min write, 3 min check</td></tr>
  <tr><td>A (b)</td><td>The novel as a whole</td><td>20</td><td>30 min</td><td>5 min plan, 22 min write, 3 min check</td></tr>
  <tr><td>B Part 1</td><td>Anthology comparison (named poem + one of your choice)</td><td>20</td><td>35 min</td><td>7 min read and plan, 25 min write, 3 min check</td></tr>
  <tr><td>B Part 2</td><td>Unseen comparison (two unseen poems)</td><td>20</td><td>35 min</td><td>7 min read both poems and plan, 25 min write, 3 min check</td></tr>
  <tr><td colspan="3"><strong>Final review</strong></td><td>5 min</td><td>Re-read all four answers; fix slips and add missing analysis</td></tr>
</table>

<p>This totals <strong>135 minutes</strong> - exactly the time available. Pearson sets only the total; this split follows the marks, with a little extra for Section B, where three poems on the paper have to be read. There is no spare time built in, which is why discipline with the plan is critical.</p>

<div class="examiner-tip"><strong>Top Tip:</strong> Wear a watch or position yourself to see a clock. Write your target finish times at the top of each section before you begin. For example, for a 9:00 start: "Extract - 9:30. Whole novel - 10:00. Anthology comparison - 10:35. Unseen comparison - 11:10."</div>

<h3>Closed-Book Strategy</h3>

<p>Paper 2 is <strong>closed book</strong>: you may not take the novel or the anthology into the exam. The paper prints the novel extract, the named anthology poem and the two unseen poems; everything else comes from memory.</p>

<ul>
  <li><strong>Learn short quotations.</strong> For the novel and for every poem in your collection, learn a handful of short, versatile quotations that work for more than one theme. Three words you remember exactly are worth more than a line you half-remember.</li>
  <li><strong>Prepare your pairings.</strong> For each poem in your collection, know two or three others you could compare it with. Whichever poem is named, you will have a partner ready.</li>
  <li><strong>Use what is printed.</strong> The extract and the named poem are in front of you, so quote them closely and precisely. Save your memorised quotations for the rest of the novel and for the poem you choose.</li>
  <li><strong>For the unseen poems,</strong> you have no prior knowledge - read each twice, annotate heavily, and trust your analytical instincts.</li>
</ul>

<h3>Section A: Novel - Getting It Right</h3>

<p>Section A is worth <strong>40 marks</strong> - half the paper - in two parts of 20 marks. Part (a) gives you an extract of about 400 words and asks you to explore it; part (b) asks an essay question about the novel as a whole.</p>

<ul>
  <li><strong>Part (a), the extract:</strong> Stay with the printed passage. Close-read its language, form and structure (AO2): embed short quotations and explain the effect of the writer's choices.</li>
  <li><strong>Part (b), the whole novel:</strong> Range across the novel. Build an argument that answers the question and support it with specific moments - scenes, chapters, key quotations - from the beginning, middle and end (AO1).</li>
  <li><strong>Context:</strong> Section A carries no marks for context (AO3). A brief reference that helps you explain the novel does no harm, but it should never replace analysis. The place context earns marks on this paper is Section B Part 1.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on the novel and rushing the poetry. The novel is worth 40 marks, but the two poetry questions together are worth 40 marks too. If you spend 70 minutes on the novel, you have about an hour left for two poetry comparisons, one of them on poems you have never seen - a recipe for underperformance.</div>

<h3>Common Mistakes to Avoid</h3>

<ul>
  <li><strong>Unbalanced comparisons:</strong> In either comparison, writing extensively about one poem and barely mentioning the other - in Part 1, usually the printed poem at the expense of the one you chose. Aim for roughly equal coverage in every paragraph.</li>
  <li><strong>Feature-spotting without analysis:</strong> Identifying a metaphor or simile but not explaining its effect on the reader. Always ask: <em>so what? What does this make the reader think or feel?</em></li>
  <li><strong>Ignoring structure:</strong> Students often focus on language and forget about structural features - enjambment, stanza breaks, volta, narrative arc. These are easy marks if you address them.</li>
  <li><strong>Running out of time on the final question:</strong> The unseen comparison is last, and fatigued students often write half a response. Stick to the timing plan.</li>
  <li><strong>Retelling the story:</strong> In the novel section, narrating the plot instead of analysing how the writer creates meaning. Markers know the story - they want to see your analytical skill.</li>
</ul>

<h3>Revision Techniques</h3>

<p>The weeks before the exam should be focused and strategic:</p>

<ol>
  <li><strong>Quotation flash cards:</strong> For each anthology poem, create cards with 5-6 key quotations on one side and analysis (technique + effect) on the other. For the novel, create cards for key themes with supporting quotations.</li>
  <li><strong>Theme grids:</strong> Draw a grid with poems along the top and themes down the side (power, conflict, identity, nature, loss). Tick where each poem connects. This makes it easy to find comparison pairs for any theme the exam might ask about.</li>
  <li><strong>Timed practice:</strong> Write at least two full Paper 2 responses under timed conditions before exam day. Mark them against the marking guide or swap with a study partner.</li>
  <li><strong>Marker reports:</strong> Read the published marker reports for past Edexcel Literature papers. They tell you exactly what students did well and where they lost marks - this is insider knowledge freely available.</li>
  <li><strong>Quotation reduction:</strong> Can you express your analysis of a poem in just three quotations? Forcing yourself to select the most versatile quotations builds the kind of focused thinking the exam rewards.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> The single most effective revision activity is <strong>timed practice under exam conditions</strong>. Reading notes and highlighting textbooks feels productive, but it does not prepare you for the pressure of writing four answers in 135 minutes. Practise the way you will perform.</div>

<h3>Final Exam Day Checklist</h3>

<ul>
  <li>Black ink pen (plus a spare) and a watch. No texts: the paper is closed book.</li>
  <li>Write your timing targets at the top of the answer booklet before the exam starts.</li>
  <li>Read every question fully before you begin writing - underline command words and key terms.</li>
  <li>For the novel: answer part (a) on the extract and part (b) on the novel as a whole. Each part is marked on its own.</li>
  <li>For the anthology comparison: read the named poem closely, choose your second poem, and plan 3-4 points of comparison before you write.</li>
  <li>For the unseen comparison: read both poems twice. Annotate them. Plan your comparison points before writing.</li>
  <li>In the final 5 minutes: re-read all four answers. Fix slips, add missing connectives, and check that every paragraph includes analysis - not just quotation.</li>
  <li>If you finish early, add an extra analytical point to your weakest response rather than sitting idle.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Leaving the exam hall early. Use every minute. Even five minutes of proofreading can catch errors that cost marks - a missing comparative connective, a misspelled character name, or an incomplete sentence at the end of a paragraph.</div>

<p>You have studied the texts, practised the skills, and learned the frameworks. Trust your preparation, manage your time, and show markers what you know. Good luck.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m10-q1',
        question: 'How long is Edexcel Literature Paper 2 in total?',
        options: ['1 hour 45 minutes', '2 hours', '2 hours 15 minutes', '2 hours 30 minutes'],
        correct: 2,
        explanation:
          'Paper 2 is 2 hours 15 minutes (135 minutes). Every minute must be accounted for across the extract question, the whole-novel essay and the two poetry comparisons.',
      },
      {
        id: 'edx-lt2-m10-q2',
        question:
          'According to the timing plan, how long should you spend reading the two unseen poems and planning your comparison?',
        options: ['3 minutes', '5 minutes', '7 minutes', '12 minutes'],
        correct: 2,
        explanation:
          'The recommended plan allocates 7 minutes to reading both unseen poems twice, annotating them, and planning your comparison points before you begin writing.',
      },
      {
        id: 'edx-lt2-m10-q3',
        question: 'What is the most common timing mistake students make on Paper 2?',
        options: [
          'Spending too long on the anthology comparison and rushing the novel',
          'Spending too long on the novel and rushing the poetry questions',
          'Spending too long on the comparison and skipping the final review',
          'Spending too long reading the unseen poems',
        ],
        correct: 1,
        explanation:
          'The novel section (40 marks) tempts students to overwrite, but the two poetry questions are also worth 40 marks combined. Keep Section A to about an hour.',
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
