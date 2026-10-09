// @ts-nocheck
import type { CourseData } from './courses'

// Macbeth is quoted here in the wording of the edition the site holds, Project
// Gutenberg #1533 (src/data/full-texts/macbeth.ts). It prints "We have scorch'd
// the snake", the Folio's reading, where many editions print "scotch'd", and
// "Tomorrow, and tomorrow, and tomorrow" without hyphens. Until 2 October 2026
// these pages used the other editions' forms, which students then memorised.
const edexcelLitPaper1: CourseData = {
  id: 'edexcel-lit-paper1',
  title: 'Edexcel GCSE English Literature \u2013 Paper 1',
  subtitle: 'Shakespeare & Post-1914 Literature',
  tier: 'GCSE',
  board: 'Edexcel',
  // 9 October 2026: these read 1ET2 and 1ET2/01. Pearson's GCSE English Literature is 1ET0.
  specId: '1ET0',
  specCode: '1ET0/01',
  price: 0,
  duration: '14 weeks',
  level: 'GCSE (Years 10-11)',
  description:
    "Master Edexcel Literature Paper 1: Shakespeare (Macbeth) and Post-1914 Literature (An Inspector Calls). Extract analysis and whole-play essays, context, character analysis, and writer's methods.",
  color: '#e11d48',
  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1 - Paper 1 Overview & what markers look for
    // ──────────────────────────────────────────────
    {
      // Rewritten 2 October 2026. This overview described both sections as extract-based
      // essays, weighted about AO1 15, AO2 15 and AO3 10 each, with "up to 4" AO4 marks on the
      // Shakespeare essay. The 1ET0 specification (Issue 2) has Section A one two-part question:
      // (a) an extract of about 30 lines, AO2 20; (b) how a theme from it is explored elsewhere
      // in the play, AO1 15 and AO3 5. Section B is ONE essay question from a choice of two,
      // opened by a short quotation rather than an extract: AO1 16, AO3 16 and AO4 8. AO4 is
      // marked on the post-1914 essay only, and AO2 not at all in Section B. Modules 3, 5 and 7
      // to 10 and the assessment questions are corrected to match.
      //
      // 9 October 2026: the key term still called Section A "two separate questions", and the
      // timing plan said "Pearson sets only the total time" and gave Section A 50 minutes. It is
      // one question in two parts, and the 1ET0/01 question paper says to spend about 55 minutes
      // on Section A, dividing the time equally between (a) and (b), and about 50 on Section B.
      // Modules 5 and 10 and assessment question a12 gave the same 50 minutes.
      id: 'edx-lt1-m1',
      title: 'Paper 1 Overview & what markers look for',
      duration: '45 min',
      content: `
<h2>Edexcel GCSE English Literature - Paper 1</h2>

<p>Paper 1 is titled <strong>Shakespeare and Post-1914 Literature</strong>. It is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of the total GCSE. You have <strong>1 hour and 45 minutes</strong> to complete two sections, each worth 40 marks. The paper is <strong>closed book</strong>: texts are not allowed in the exam.</p>

<div class="key-term"><strong>Key Term: Two-Part Question</strong> - Section A is one question in two parts on your Shakespeare play. Part (a) prints an extract of about 30 lines and asks you to analyse it closely; part (b) asks how a theme from the extract is explored elsewhere in the play. Each part is marked on its own, for different things.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A - Shakespeare (40 marks):</strong> One two-part question on your play. Part (a): close analysis of the language, form and structure of a printed extract of about 30 lines (20 marks). Part (b): how a theme from the extract is explored elsewhere in the play, with its context (20 marks).</li>
  <li><strong>Section B - Post-1914 British Play or Novel (40 marks):</strong> ONE essay question from a choice of two on your studied text. Each question opens with a short quotation from the text as a stimulus - there is no extract - and asks you to explore plot, setting, character or theme in relation to context. Your spelling, punctuation and grammar are marked here.</li>
</ul>

<h3>What Markers Look For</h3>
<p>Four AOs are tested across Paper 1, but each part of the paper assesses a different mix:</p>
<ul>
  <li><strong>Personal response (AO1)</strong> - Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations. Assessed in Section A part (b) and in Section B.</li>
  <li><strong>Writer's methods (AO2)</strong> - Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate. Assessed in Section A part (a) only.</li>
  <li><strong>Context (AO3)</strong> - Show understanding of the relationships between texts and the contexts in which they were written. Assessed in Section A part (b) and in Section B.</li>
  <li><strong>Technical accuracy (AO4)</strong> - Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. <em>Assessed on the post-1914 essay only</em>, for 8 marks.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Technical accuracy (AO4) marks are easy to lose through carelessness, and they all sit on your Section B essay. Leave a few minutes at the end of the paper purely for proofreading it.</div>

<h3>How Marks Break Down</h3>
<ul>
  <li><strong>Section A part (a), the extract:</strong> Writer's methods (AO2) - 20 marks.</li>
  <li><strong>Section A part (b), the wider play:</strong> Personal response (AO1) - 15 marks, Context (AO3) - 5 marks.</li>
  <li><strong>Section B, the post-1914 essay:</strong> Personal response (AO1) - 16 marks, Context (AO3) - 16 marks, Technical accuracy (AO4) - 8 marks.</li>
</ul>
<p>So the extract question rewards close analysis of language, while the Section B essay rewards your argument about the whole text and its context, written accurately. Writer's methods (AO2) earn no marks of their own in Section B, though noticing how the writer shapes the text can still strengthen your argument.</p>

<h3>Recommended Timing Plan</h3>
<p>The question paper tells you to spend about 55 minutes on Section A, dividing your time equally between parts (a) and (b), and about 50 minutes on Section B. This plan follows that.</p>
<ol>
  <li><strong>0-27 min:</strong> Section A part (a). Read the extract and the question, annotate key words and methods, and write about the extract (20 marks).</li>
  <li><strong>27-55 min:</strong> Section A part (b). Plan, then write about the theme elsewhere in the play, with its context (20 marks).</li>
  <li><strong>55-60 min:</strong> Section B. Read both questions, choose one, and plan your argument.</li>
  <li><strong>60-100 min:</strong> Write your post-1914 essay (40 marks), weaving context into your argument.</li>
  <li><strong>100-105 min:</strong> Proofread the Section B essay for spelling, punctuation and grammar (AO4).</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Answering Section A as one essay. Part (a) is marked only on your analysis of the extract; part (b) is about the rest of the play and its context. Write about the extract in part (a) and move beyond it in part (b), answering each question as it is asked.</div>

<h3>What "Top Band" Responses Look Like</h3>
<p>Markers describe the highest-level answers as <strong>critical, exploratory</strong> responses that:</p>
<ul>
  <li>Offer a <strong>conceptualised</strong> argument - not just a list of points, but an overarching thesis.</li>
  <li>Analyse the writer's methods using precise subject terminology (e.g. <em>soliloquy</em>, <em>dramatic irony</em>, <em>motif</em>).</li>
  <li>Embed context so that it illuminates meaning rather than appearing as a separate paragraph.</li>
  <li>Use <strong>judiciously selected</strong> quotations - short, punchy references woven into sentences.</li>
</ul>

<div class="key-term"><strong>Key Term: Conceptualised Response</strong> - An essay built around a central argument or interpretation, rather than working through the text point by point. For example, arguing that Lady Macbeth's apparent strength is Shakespeare's device for exploring the destructive nature of unchecked ambition.</div>
`,
      quiz: [
        {
          id: 'edx-lt1-m1-q1',
          question: 'How long do students have to complete Edexcel English Literature Paper 1?',
          options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 15 minutes'],
          correct: 1,
          explanation:
            'Paper 1 is 1 hour and 45 minutes long. The question paper suggests about 55 minutes for the Shakespeare section, divided equally between its two parts, and about 50 minutes for the post-1914 essay, including time to proofread it.',
        },
        {
          id: 'edx-lt1-m1-q2',
          question: 'Which assessment objective tests spelling, punctuation and grammar (SPaG)?',
          options: ['AO1', 'AO2', 'AO3', 'AO4'],
          correct: 3,
          explanation:
            'Technical accuracy (AO4) assesses SPaG. It is worth 8 marks and is marked on the post-1914 essay in Section B only.',
        },
        {
          id: 'edx-lt1-m1-q3',
          question: 'How is the Section B post-1914 question set?',
          options: [
            'As an extract to analyse, then the wider text',
            'As one essay question from a choice of two, opening with a short quotation',
            'As two short questions on two extracts',
            'As a comparison with the Shakespeare play',
          ],
          correct: 1,
          explanation:
            'Section B has no extract. You answer ONE essay question from a choice of two on your text; each opens with a short quotation as a stimulus. You must explore the question in relation to context, and your spelling, punctuation and grammar are marked.',
        },
        {
          id: 'edx-lt1-m1-q4',
          question: 'How many marks is each section of Paper 1 worth?',
          options: ['20 marks each', '30 marks each', '40 marks each', '50 marks each'],
          correct: 2,
          explanation:
            'Each section - Shakespeare (Section A) and Post-1914 Literature (Section B) - is worth 40 marks, giving a total of 80 marks for the whole paper.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2 - Shakespeare: Themes & Context (Macbeth Focus)
    // ──────────────────────────────────────────────
    {
      id: 'edx-lt1-m2',
      title: 'Shakespeare: Themes & Context (Macbeth Focus)',
      duration: '55 min',
      content: `
<h2>Macbeth - Themes &amp; Jacobean Context</h2>

<p><em>Macbeth</em> is the most widely studied Shakespeare text for Edexcel GCSE English Literature. This module maps the play's <strong>seven major themes</strong> onto the historical context you need for context (AO3), which earns marks in part (b) of the Shakespeare question (5 of its 20) - not in part (a), which is marked on the extract's language alone. It also shows you how to weave context into your argument without "bolting it on".</p>

<div class="key-term"><strong>Key Term: Jacobean</strong> - Relating to the reign of King James I of England (1603-1625). <em>Macbeth</em> was written c. 1606, shortly after James came to the throne. Understanding Jacobean beliefs and politics is essential for context (AO3).</div>

<h3>The Seven Key Themes</h3>

<h4>1. Ambition</h4>
<p>Ambition is the engine of the play. Macbeth's desire for the crown, stoked by the witches' prophecy and Lady Macbeth's goading, drives every act of violence that follows.</p>
<div class="text-extract">"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th'other."<div class="source">Act 1, Scene 7</div></div>
<p>Here Macbeth acknowledges that his sole motivation is ambition - and the verb <strong>"o'erleaps"</strong> foreshadows his downfall, suggesting ambition that exceeds its proper bounds will inevitably collapse.</p>

<h4>2. Power &amp; Corruption</h4>
<p>Shakespeare presents power as inherently corrupting. Macbeth moves from loyal thane to tyrannical king; the more power he gains, the more paranoid and violent he becomes.</p>
<div class="text-extract">"For mine own good, / All causes shall give way."<div class="source">Act 3, Scene 4</div></div>

<h4>3. Guilt &amp; Conscience</h4>
<p>Guilt manifests physically: Macbeth sees a phantom dagger, hears voices, and is haunted by Banquo's ghost. Lady Macbeth sleepwalks, compulsively washing imaginary blood from her hands.</p>
<div class="text-extract">"Will all great Neptune's ocean wash this blood / Clean from my hand?"<div class="source">Act 2, Scene 2</div></div>
<p>The hyperbole of <strong>"all great Neptune's ocean"</strong> conveys that Macbeth's guilt is cosmic in scale - no physical act can undo a moral transgression.</p>

<h4>4. The Supernatural</h4>
<p>The witches, the floating dagger, Banquo's ghost and the apparitions all blur the line between reality and the demonic. A Jacobean audience would have taken witchcraft seriously - James I himself wrote <em>Daemonologie</em> (1597).</p>
<div class="text-extract">"Fair is foul, and foul is fair."<div class="source">Act 1, Scene 1</div></div>

<h4>5. Masculinity</h4>
<p>Lady Macbeth weaponises gender to manipulate her husband, questioning his manhood whenever he hesitates. Shakespeare interrogates what it truly means to be "manly" - is it ruthlessness, or moral courage?</p>
<div class="text-extract">"When you durst do it, then you were a man."<div class="source">Act 1, Scene 7</div></div>

<h4>6. Appearance vs Reality</h4>
<p>Deception saturates the play. Duncan calls Macbeth's castle "pleasant"; Macbeth plays the loyal host while planning regicide. The motif is crystallised by Lady Macbeth's instruction:</p>
<div class="text-extract">"Look like the innocent flower, / But be the serpent under't."<div class="source">Act 1, Scene 5</div></div>

<h4>7. Fate vs Free Will</h4>
<p>Do the witches cause Macbeth's actions, or merely reveal what he already desired? This ambiguity is central to Shakespeare's design and gives you a rich line of argument for personal response (AO1).</p>

<div class="examiner-tip"><strong>Top Tip:</strong> The strongest responses treat themes as <em>interconnected</em>. For example, link ambition to masculinity - Lady Macbeth equates manliness with murderous ambition, which shows how toxic definitions of masculinity fuel the play's violence.</div>

<h3>Historical Context for the Context Skill (AO3)</h3>
<ul>
  <li><strong>James I &amp; the Divine Right of Kings:</strong> James believed monarchs were appointed by God. Killing a king (regicide) was therefore not just treason but a sin against the divine order. This makes Duncan's murder doubly horrifying to a Jacobean audience.</li>
  <li><strong>The Gunpowder Plot (1605):</strong> The failed Catholic conspiracy to blow up Parliament occurred just a year before <em>Macbeth</em> was written. Themes of treason, hidden plots, and divine punishment would have resonated powerfully.</li>
  <li><strong>The Great Chain of Being:</strong> Elizabethan and Jacobean society believed in a strict natural hierarchy - God, king, nobles, commoners. Macbeth's regicide disrupts this chain, and nature itself responds with storms and unnatural events.</li>
  <li><strong>Witch Trials:</strong> Between 1560 and 1700 thousands of people (mostly women) were tried and executed for witchcraft across Britain. James I's <em>Daemonologie</em> fuelled persecutions. The witches in <em>Macbeth</em> tapped directly into contemporary fears.</li>
</ul>

<div class="key-term"><strong>Key Term: The Great Chain of Being</strong> - A Jacobean belief that all of creation existed in a fixed, divinely ordained hierarchy. Disrupting this order - for example, by killing a king - was thought to cause chaos in nature itself.</div>

<h3>Embedding Context - Not Bolting It On</h3>
<p>A common weakness in GCSE essays is writing a detached paragraph of context that does not connect to the text. Instead, <strong>embed</strong> context into your analysis:</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "In Jacobean times people believed in witches. James I wrote a book about them." as a stand-alone sentence with no link to the text. This is "bolted-on" context and will not score highly for context (AO3).</div>

<p><strong>Weak:</strong> "In Jacobean times, people believed in the Divine Right of Kings. Macbeth kills Duncan."</p>
<p><strong>Strong:</strong> "Shakespeare makes Duncan's murder especially transgressive for a Jacobean audience who believed in the Divine Right of Kings - by killing God's appointed ruler, Macbeth does not merely commit treason but violates the sacred order, which is why nature itself convulses in response."</p>
<p>Notice how the strong version fuses the contextual point (Divine Right) with the text's events and effects in a single flowing sentence.</p>

<h3>Key Quotation Bank</h3>
<p>Memorise these short, versatile quotations. Each can be used across multiple themes:</p>
<ol>
  <li><strong>"Stars, hide your fires; / Let not light see my black and deep desires"</strong> (Act 1, Scene 4) - ambition, appearance vs reality.</li>
  <li><strong>"Full of scorpions is my mind"</strong> (Act 3, Scene 2) - guilt, psychological torment, power corrupting.</li>
  <li><strong>"Out, damned spot!"</strong> (Act 5, Scene 1) - guilt, supernatural, the inescapability of conscience.</li>
  <li><strong>"Is this a dagger which I see before me?"</strong> (Act 2, Scene 1) - supernatural, guilt, fate vs free will.</li>
  <li><strong>"Unsex me here"</strong> (Act 1, Scene 5) - masculinity, supernatural, ambition.</li>
  <li><strong>"By the pricking of my thumbs, / Something wicked this way comes"</strong> (Act 4, Scene 1) - supernatural, moral decline: even the witches now call Macbeth "wicked".</li>
</ol>
`,
      quiz: [
        {
          id: 'edx-lt1-m2-q1',
          question: 'What does "Jacobean" refer to in the context of Macbeth?',
          options: [
            'The Elizabethan period under Queen Elizabeth I',
            'The reign of King James I (1603-1625)',
            'The medieval period before the Tudors',
            'The Restoration period under Charles II',
          ],
          correct: 1,
          explanation:
            "Jacobean relates to the reign of James I. Macbeth was written c. 1606, early in James's rule, and reflects his interests in witchcraft, kingship, and the divine right of monarchs.",
        },
        {
          id: 'edx-lt1-m2-q2',
          question:
            "Why would Duncan's murder have been particularly shocking to a Jacobean audience?",
          options: [
            'Because Duncan was a popular character in earlier plays',
            'Because the Jacobean audience believed in the Divine Right of Kings, making regicide a sin against God',
            'Because murder was not commonly depicted on stage at the time',
            'Because Duncan was based on a real English king',
          ],
          correct: 1,
          explanation:
            'The Divine Right of Kings held that monarchs were appointed by God. Killing a king was not merely treason but a violation of the sacred, divinely ordained order - making it deeply transgressive for a Jacobean audience.',
        },
        {
          id: 'edx-lt1-m2-q3',
          question: 'Which quotation best illustrates the theme of guilt in Macbeth?',
          options: [
            '"Fair is foul, and foul is fair"',
            '"Look like the innocent flower, but be the serpent under\'t"',
            '"Will all great Neptune\'s ocean wash this blood clean from my hand?"',
            '"When you durst do it, then you were a man"',
          ],
          correct: 2,
          explanation:
            "Macbeth's rhetorical question about Neptune's ocean conveys the overwhelming, cosmic scale of his guilt - no amount of water can cleanse the moral stain of murder.",
        },
        {
          id: 'edx-lt1-m2-q4',
          question: 'What is "bolted-on" context, and why should you avoid it?',
          options: [
            'Context placed at the end of an essay for emphasis - it is fine to use',
            'A detached statement of historical fact with no link to the text - it scores poorly for context (AO3)',
            "Using too many quotations instead of context - it is penalised under writer's methods (AO2)",
            'Referring to a different Shakespeare play for comparison - it is irrelevant',
          ],
          correct: 1,
          explanation:
            'Bolted-on context means dropping in a historical fact (e.g. "James I believed in witches") without connecting it to the text\'s language, themes, or effects. To score well for context (AO3), you must embed context into your analysis.',
        },
        {
          id: 'edx-lt1-m2-q5',
          question:
            "Which historical event, occurring just a year before Macbeth was written, intensified the play's themes of treason and hidden plots?",
          options: [
            'The English Civil War',
            'The Spanish Armada',
            'The Gunpowder Plot of 1605',
            'The Act of Union 1707',
          ],
          correct: 2,
          explanation:
            "The Gunpowder Plot (1605) was a failed conspiracy to blow up Parliament. It occurred just before Macbeth was written (c. 1606), making the play's themes of treason, concealment, and divine retribution especially topical.",
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3 - Shakespeare: Character Analysis & Development
    // ──────────────────────────────────────────────
    {
      id: 'edx-lt1-m3',
      title: 'Shakespeare: Character Analysis & Development',
      duration: '55 min',
      content: `
<h2>Character Analysis &amp; Development in <em>Macbeth</em></h2>

<p>For the Shakespeare question on Paper 1, go beyond describing what a character does. In part (a), explain <em>how</em> Shakespeare constructs them in the extract (writer's methods, AO2); in part (b), argue <em>why</em> they matter across the play, thematically and contextually (personal response and context, AO1 and AO3).</p>

<div class="key-term"><strong>Key Term: Character Arc</strong> - The transformation a character undergoes across a text. In tragedy, the protagonist's arc traces a rise followed by a catastrophic fall.</div>

<h3>Major Character Arcs</h3>

<h4>Macbeth</h4>
<ul>
  <li><strong>Brave warrior</strong> - Praised as "brave Macbeth" who "unseam'd" the rebel "from the nave to the chops" (Act 1).</li>
  <li><strong>Ambitious but conflicted</strong> - His Act 1 Scene 7 soliloquy reveals moral horror at regicide yet inability to resist power.</li>
  <li><strong>Tyrant</strong> - Orders Banquo's and Macduff's family's murders; becomes isolated and paranoid.</li>
  <li><strong>Desperate</strong> - The nihilistic "Tomorrow and tomorrow" soliloquy (Act 5) shows fatalistic defiance.</li>
</ul>
<p><strong>Key quote:</strong> <em>"I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er."</em> - Blood as a metaphor for moral entrapment beyond the point of no return.</p>

<h4>Lady Macbeth</h4>
<ul>
  <li><strong>Ambitious</strong> - Calls on spirits to "unsex me here" (Act 1 Scene 5), rejecting femininity for power.</li>
  <li><strong>Controlling</strong> - Goads Macbeth: "When you durst do it, then you were a man."</li>
  <li><strong>Guilt-ridden</strong> - Struggles to manage Macbeth's breakdown at the banquet (Act 3 Scene 4).</li>
  <li><strong>Mad</strong> - Sleepwalking scene: "Out, damned spot!" (Act 5 Scene 1). Death reported off-stage.</li>
</ul>

<h4>Banquo &amp; Macduff</h4>
<ul>
  <li><strong>Banquo:</strong> Loyal friend who resists the prophecy, praying against "cursed thoughts." His ghost at the banquet manifests Macbeth's guilt.</li>
  <li><strong>Macduff:</strong> Loyal thane who discovers Duncan's body. After his family's slaughter, he becomes the avenging hero who restores natural order.</li>
</ul>

<h3>Writing About Character: Language Analysis (AO2)</h3>
<p>Show awareness that characters are <em>constructs</em>. Use: "Shakespeare <strong>presents</strong> Macbeth as…", "Shakespeare <strong>portrays</strong> Lady Macbeth through…", "Shakespeare <strong>constructs</strong> Banquo as a foil to…"</p>

<div class="examiner-tip"><strong>Top Tip:</strong> Treat characters as <em>vehicles for themes</em>. Macbeth is Shakespeare's exploration of unchecked ambition and the divine right of kings. Link character analysis to bigger ideas for top-band marks.</div>

<h3>Characters and Jacobean Anxieties</h3>
<ul>
  <li><strong>Macbeth's regicide</strong> violated the divine right of kings - a belief James I held deeply.</li>
  <li><strong>Lady Macbeth's ambition</strong> transgressed expected female roles, reinforcing fears about unnatural female influence.</li>
  <li><strong>Banquo's lineage</strong> was believed to lead to James I, so his nobility was politically significant.</li>
</ul>

<h3>Quotation Bank: Macbeth's Deterioration with Analysis</h3>
<div class="text-extract">
<strong>Act 1, Scene 2 (Warrior):</strong> "For brave Macbeth - well he deserves that name" - Initial heroism and martial honour.<br><br>
<strong>Act 1, Scene 7 (Conflicted):</strong> "I have no spur / To prick the sides of my intent, but only / Vaulting ambition" - Awareness of moral transgression; inability to resist. "Vaulting" suggests ambition overleaping proper bounds.<br><br>
<strong>Act 2, Scene 2 (Guilt):</strong> "Will all great Neptune's ocean wash this blood / Clean from my hand?" - Hyperbole conveys guilt as cosmic, indelible. No physical act can undo moral transgression.<br><br>
<strong>Act 3, Scene 2 (Isolation):</strong> "We have scorch'd the snake, not kill'd it" - Paranoia. Macbeth recognises that Banquo remains a threat, forcing further murders.<br><br>
<strong>Act 5, Scene 5 (Despair):</strong> "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day" - Nihilism. Meaning dissolves; life becomes meaningless repetition.
</div>

<div class="grade-9-insight"><strong>Grade 9 Insight:</strong> Trace a single image's evolution across the entire play. Blood begins as honour ("brave Macbeth"), becomes transgression (Duncan's murder), then guilt ("Will all great Neptune's ocean wash this blood / Clean from my hand?"), and finally numbness ("Out, damned spot!" in Lady Macbeth's mad scene). This unified analysis shows conceptual mastery of the play's psychological arc - the kind of argument across the play that part (b) rewards.</div>

<h3>Worked Example: Lady Macbeth's Transgression</h3>
<p><strong>Extract:</strong> "Come, you spirits / That tend on mortal thoughts, unsex me here"</p>
<div class="text-extract">
<strong>Analysis:</strong> The imperative "Come" shows Lady Macbeth actively summoning supernatural forces - she is not passive but drives her own ambition. "Unsex me" is particularly transgressive for a Jacobean audience: she explicitly rejects femininity as weakness, calling for masculine ruthlessness instead. The verb "tend" positions spirits as servants to her will, suggesting her desire supersedes natural order. For a Jacobean audience conditioned to believe women should be obedient and nurturing, this rejection of gender itself was alarming. The witch trials of the era and fears of female autonomy make this speech especially provocative. Shakespeare's point: ambition that rejects natural constraints (gender, conscience, loyalty) inevitably leads to madness and destruction, as Lady Macbeth's sleepwalking later proves.
</div>

<h3>Character Comparison Grid (for exam planning)</h3>
<table style="width:100%; border-collapse: collapse;">
<tr style="border-bottom: 2px solid #333;">
<th style="text-align: left; padding: 6px;"><strong>Character</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Initial State</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Turning Point</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Final State</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Thematic Function</strong></th>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Macbeth</strong></td>
<td style="padding: 6px;">Loyal, brave warrior</td>
<td style="padding: 6px;">Witches' prophecy + Lady's manipulation</td>
<td style="padding: 6px;">Isolated tyrant; nihilistic</td>
<td style="padding: 6px;">Ambition's corrupting power; consequences of unchecked desire</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Lady Macbeth</strong></td>
<td style="padding: 6px;">Ambitious, commanding, "unsexed"</td>
<td style="padding: 6px;">Banquet scene; Macbeth's breakdown exposes her loss of control</td>
<td style="padding: 6px;">Mad; guilty; suicidal (off-stage death)</td>
<td style="padding: 6px;">Toxic ambition; inevitability of conscience; gender transgression punished</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Banquo</strong></td>
<td style="padding: 6px;">Loyal friend; resists temptation through prayer</td>
<td style="padding: 6px;">Murdered by Macbeth to eliminate threat to lineage</td>
<td style="padding: 6px;">Supernatural ghost; manifests Macbeth's guilt</td>
<td style="padding: 6px;">Loyalty and virtue vindicated; guilt inescapable; natural order</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Macduff</strong></td>
<td style="padding: 6px;">Loyal thane; questions Macbeth's authority</td>
<td style="padding: 6px;">Family slaughtered in his absence; radicalized</td>
<td style="padding: 6px;">Avenging hero who defeats Macbeth and restores order</td>
<td style="padding: 6px;">Justice; restoration of rightful order; familial bonds</td>
</tr>
</table>

<h3>Exam Technique: Integrating Character Analysis with Context</h3>
<p><strong>Weak (bolted-on context):</strong> "Macbeth is ambitious. In Jacobean times, people believed in divine right of kings."</p>
<p><strong>Strong (integrated):</strong> "For a Jacobean audience steeped in the belief of divine right of kings, Macbeth's regicide is not merely treason but blasphemy. Shakespeare's presentation of Macbeth as ambitious yet morally aware ('I have no spur / To prick the sides of my intent, but only / Vaulting ambition') deepens the tragedy: the protagonist understands the cosmic wrongness of his act yet cannot resist. This would terrify a contemporary audience who saw political order as ordained by God and disruption as harbinger of universal chaos."</p>

<h3>Common Weak vs Strong Analysis Patterns</h3>
<table style="width:100%; border-collapse: collapse;">
<tr style="border-bottom: 2px solid #333;">
<th style="text-align: left; padding: 6px;"><strong>Weak (Character-as-Person)</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Strong (Authorial Construction)</strong></th>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;">Macbeth is ambitious and wants to be king.</td>
<td style="padding: 6px;">Shakespeare constructs Macbeth as a vehicle for exploring ambition's corrupting power, using the blood motif to track his psychological deterioration from soldier to tyrant.</td>
</tr>
<tr>
<td style="padding: 6px;">Lady Macbeth feels guilty and goes mad.</td>
<td style="padding: 6px;">Shakespeare presents Lady Macbeth's descent into madness as poetic justice - her conscious rejection of conscience in Act 1 leads inevitably to its violent eruption in her sleepwalking. The return of repressed guilt becomes irresistible.</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;">Banquo is loyal and doesn't kill the king.</td>
<td style="padding: 6px;">Shakespeare positions Banquo as a moral foil to Macbeth, resisting supernatural temptation through prayer and conscience. This emphasises Macbeth's free choice to transgress, not mere fate.</td>
</tr>
</table>

<h3>Model Answer: Full Grade 8-9 Paragraph on Character Development</h3>
<div class="text-extract">
<strong>Sample Question:</strong> "Explore how Shakespeare presents Macbeth's change from loyal warrior to paranoid tyrant."<br><br>
<strong>Model Response (c. 280 words):</strong> Shakespeare's presentation of Macbeth's moral descent is central to the tragedy's exploration of ambition's corrupting nature. In Act 1 Scene 2, the bleeding sergeant hails "brave Macbeth," establishing him as a loyal warrior whose violence serves rightful order - blood here symbolises martial honour. Yet by Act 1 Scene 7, Macbeth's soliloquy reveals internal fracture: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition." The noun "spur" traditionally signified duty or honour, but Macbeth finds only "ambition" - selfish desire divorced from legitimate cause. The verb "vaulting" (arching, overleaping) suggests ambition that exceeds its proper bounds and will inevitably collapse, foreshadowing his downfall. Lady Macbeth's manipulation - "When you durst do it, then you were a man" - weaponises masculinity against him, forcing the murder. Following Duncan's death, blood's imagery inverts. The hyperbolic "Will all great Neptune's ocean wash this blood / Clean from my hand?" reveals Macbeth's recognition that moral transgression cannot be undone by physical action. This psychological unraveling accelerates through Acts 3-5. By Act 3, Macbeth orders further murders to feel secure ("We have scorch'd the snake, not kill'd it"), revealing paranoia and moral numbness. The Act 5 soliloquy sees meaning itself dissolve: "Tomorrow, and tomorrow, and tomorrow." Shakespeare's arc demonstrates that unchecked ambition doesn't elevate; it destroys, leaving the protagonist isolated and nihilistic. For a Jacobean audience steeped in the divine right of kings, Macbeth's fall would serve as a cosmic warning: those who violate God's ordained order face not mere earthly punishment but psychological annihilation.
<div class="source">Grade 8-9 exemplar for a part (b)-style question: ~280 words of personal response (AO1) ranging across the play, supported by close reference ("vaulting," "spur"), with context (AO3, divine right)</div>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as real people. Avoid "Macbeth feels angry" - instead write "Shakespeare presents Macbeth as consumed by paranoia, reflecting the consequences of tyranny."</div>
`,
      quiz: [
        {
          id: 'edx-lt1-m3-q1',
          question:
            "Which phrase best demonstrates writer's methods (AO2)-focused writing about character?",
          options: [
            'Macbeth is a bad person who makes terrible choices',
            'Shakespeare constructs Macbeth as a vehicle for exploring unchecked ambition',
            'Macbeth kills Duncan because he is greedy for power',
            'I think Macbeth is the villain of the play',
          ],
          correct: 1,
          explanation:
            'Writer\'s methods (AO2) requires you to analyse how writers create meaning. "Shakespeare constructs Macbeth as a vehicle for…" shows awareness that the character is a deliberate authorial construction used to explore a theme.',
        },
        {
          id: 'edx-lt1-m3-q2',
          question: "What is the correct order of Macbeth's character arc?",
          options: [
            'Tyrant → warrior → desperate → conflicted',
            'Brave warrior → ambitious but conflicted → tyrant → desperate and fatalistic',
            'Ambitious → brave → guilty → mad',
            'Loyal thane → conflicted king → tyrannical ruler → ghost',
          ],
          correct: 1,
          explanation:
            "Macbeth's arc moves from brave warrior, through ambition and moral conflict, into tyranny, and finally into fatalistic despair - a classic tragic trajectory.",
        },
        {
          id: 'edx-lt1-m3-q3',
          question:
            "Why would a Jacobean audience have found Lady Macbeth's behaviour particularly shocking?",
          options: [
            'She is not a very good wife to Macbeth',
            'Her ambition and manipulation transgressed expected female roles, reinforcing fears about unnatural female influence',
            'She does not care about her children',
            'She is not loyal to the king of Scotland',
          ],
          correct: 1,
          explanation:
            'In Jacobean England, a woman openly driving political ambition and goading her husband to murder would have been seen as deeply unnatural and transgressive, tapping into contemporary anxieties about gender roles.',
        },
        {
          id: 'edx-lt1-m3-q4',
          question: "What dramatic function does Banquo's ghost serve at the banquet?",
          options: [
            'It proves that the supernatural is real in the world of the play',
            "It acts as a physical manifestation of Macbeth's guilt and the inescapability of his crimes",
            'It shows that Banquo has forgiven Macbeth for his murder',
            'It is simply there to frighten the other guests at the feast',
          ],
          correct: 1,
          explanation:
            'The ghost functions as an externalisation of Macbeth\'s guilty conscience. Whether "real" or imagined, it reveals that Macbeth cannot escape the psychological consequences of his actions.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4 - Shakespeare: Language, Form & Structure
    // ──────────────────────────────────────────────
    {
      // 9 October 2026: this module teaches part (a), but its WHAT-HOW-WHY step asked how the
      // extract connects "to themes and context", and its Top Tip rewarded a point "reflecting
      // Jacobean beliefs about divine punishment". Part (a) is marked for AO2 alone; context
      // earns marks only in part (b) (see module 1).
      id: 'edx-lt1-m4',
      title: 'Shakespeare: Language, Form & Structure',
      duration: '55 min',
      content: `
<h2>Language, Form &amp; Structure in <em>Macbeth</em></h2>

<p>Writer's methods (AO2) - the whole of part (a) of the Shakespeare question, 20 marks - requires you to analyse <em>how</em> writers use language and structure to achieve effects - not just what is said, but how and why.</p>

<div class="key-term"><strong>Key Term: Writer's Methods</strong> - Deliberate choices in language, form and structure to shape meaning: verse form, imagery, soliloquy, dramatic irony, structural patterning.</div>

<h3>Language</h3>

<h4>Iambic Pentameter &amp; When It Breaks</h4>
<p><strong>Iambic pentameter</strong> (da-DUM x5) creates rhythm linked to order. When it <strong>breaks</strong>, it signals disorder. The witches' <strong>trochaic tetrameter</strong> ("Double, double, toil and trouble") reverses the stress, creating an eerie chant.</p>

<h4>Prose vs Verse</h4>
<p><strong>Verse</strong> is for noble characters; <strong>prose</strong> for lower status or loss of control. Lady Macbeth's sleepwalking scene shifts to prose, signalling her fractured mind.</p>

<h4>Imagery Patterns</h4>
<ul>
  <li><strong>Blood</strong> - Bravery to guilt to entrapment: "Will all great Neptune's ocean wash this blood / Clean from my hand?"</li>
  <li><strong>Darkness</strong> - Evil and concealment: "thick night", "hide your fires."</li>
  <li><strong>Clothing</strong> - Ill-fitting garments symbolise stolen titles: "like our strange garments."</li>
</ul>

<h4>Soliloquies and Dramatic Irony</h4>
<p><strong>Soliloquies</strong> reveal inner thoughts - Macbeth's chart his disintegration. <strong>Dramatic irony:</strong> Duncan praises the castle while the audience knows murder awaits.</p>

<h3>Form: Tragedy Conventions</h3>
<ul>
  <li><strong>Tragic hero</strong> with <em>hamartia</em> (fatal flaw) - Macbeth's "vaulting ambition."</li>
  <li><strong>Peripeteia</strong> - Rise to king, fall to tyrant and death.</li>
  <li><strong>Anagnorisis</strong> - "Tomorrow and tomorrow" - bleak recognition.</li>
  <li><strong>Catharsis</strong> - Emotional release as Malcolm restores order.</li>
</ul>

<h3>Structure</h3>
<ul>
  <li><strong>Five-act structure:</strong> Exposition (Act 1) → Rising action (Act 2) → Climax (Act 3) → Falling action (Act 4) → Resolution (Act 5).</li>
  <li><strong>Parallel scenes:</strong> Opening battle mirrors the final battle - Macbeth moves from hero to villain.</li>
  <li><strong>Juxtaposition:</strong> Banquo and Macbeth hear the same prophecy; opposing reactions highlight personal choice.</li>
  <li><strong>Asides:</strong> Macbeth's aside (Act 1 Scene 3) reveals secret ambition, drawing the audience into complicity.</li>
</ul>

<h3>Analysing an Extract: WHAT-HOW-WHY</h3>
<ol>
  <li><strong>WHAT</strong> - What is happening?</li>
  <li><strong>HOW</strong> - What techniques does Shakespeare use? Quote precisely.</li>
  <li><strong>WHY</strong> - What effect on the audience? How does it connect to the theme in the question? (Context earns no marks in part (a): keep it for part (b).)</li>
</ol>

<div class="text-extract"><strong>Act 1 Scene 7:</strong> "If it were done when 'tis done, then 'twere well / It were done quickly."
<ul>
  <li><strong>Language:</strong> Repetition of "done" creates stuttering obsession - tangled syntax betrays uncertainty.</li>
  <li><strong>Form:</strong> Soliloquy gives direct access to tortured reasoning, building dramatic irony.</li>
  <li><strong>Structure:</strong> Placed before Lady Macbeth persuades him - juxtaposition highlights her as catalyst.</li>
</ul><div class="source">Annotated extract: WHAT-HOW-WHY</div></div>

<div class="examiner-tip"><strong>Top Tip:</strong> Do not just name a technique - explain the <em>effect</em>. "Shakespeare uses a metaphor" earns little; "the blood metaphor makes Macbeth's guilt a stain that no water can wash away" earns much more.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating language, form and structure as a checklist. The best responses integrate all three - e.g. prose in the sleepwalking scene reinforces fragmented imagery and mirrors structural collapse.</div>
`,
      quiz: [
        {
          id: 'edx-lt1-m4-q1',
          question:
            'Why do the witches speak in trochaic tetrameter rather than iambic pentameter?',
          options: [
            'Because they are lower-class characters',
            'The reversed rhythm and shorter line create an unsettling, chant-like quality that sets them apart from the human world',
            'Shakespeare made an error when writing their scenes',
            'It makes their lines easier for the actors to memorise',
          ],
          correct: 1,
          explanation:
            "The witches' trochaic tetrameter reverses the natural stress pattern and shortens the line length, producing an eerie, incantatory rhythm that signals their otherness and supernatural nature.",
        },
        {
          id: 'edx-lt1-m4-q2',
          question:
            'What is the significance of Lady Macbeth speaking in prose during the sleepwalking scene (Act 5 Scene 1)?',
          options: [
            'She has become a lower-status character by this point in the play',
            'It indicates that Shakespeare wanted to save time writing the scene',
            'The shift from her earlier commanding verse to prose signals that her rational mind has fractured',
            "Prose is always used in Act 5 of Shakespeare's tragedies",
          ],
          correct: 2,
          explanation:
            'Lady Macbeth previously spoke in controlled, powerful verse. The shift to prose reflects her psychological breakdown - she has lost the ordered, rational control she once exercised over both language and action.',
        },
        {
          id: 'edx-lt1-m4-q3',
          question:
            "In the WHAT-HOW-WHY framework, which element most directly addresses writer's methods (AO2)?",
          options: [
            'WHAT - describing what happens in the extract',
            "HOW - analysing Shakespeare's use of language, form and structure",
            'WHY - explaining the historical context',
            'All three elements equally address AO2',
          ],
          correct: 1,
          explanation:
            "Writer's methods (AO2) focuses on how writers create meaning - how language and structure are used to achieve effects. The HOW step directly addresses this by identifying techniques and analysing their impact.",
        },
        {
          id: 'edx-lt1-m4-q4',
          question: 'Which of the following best describes dramatic irony in Macbeth?',
          options: [
            'Macbeth says funny things that the audience laughs at',
            "The audience knows Duncan will be murdered when he praises Macbeth's castle as pleasant",
            "Shakespeare uses ironic metaphors in Macbeth's speeches",
            'The witches make ironic prophecies that are always wrong',
          ],
          correct: 1,
          explanation:
            "Dramatic irony occurs when the audience knows something the characters do not. Duncan praising the castle's pleasantness while the audience knows it will be the site of his murder is a classic example.",
        },
        {
          id: 'edx-lt1-m4-q5',
          question:
            'How do the opening battle (Act 1) and the final battle (Act 5) function structurally?',
          options: [
            'They show that nothing changes in the world of the play',
            "They are parallel scenes that frame Macbeth's tragic arc - he moves from hero in the first to villain in the last",
            'They prove that Scotland is always at war',
            'They are both examples of falling action in the five-act structure',
          ],
          correct: 1,
          explanation:
            'The two battles create a structural frame. In Act 1, Macbeth fights heroically for his king; in Act 5, he fights desperately as a tyrant. The parallel highlights the full extent of his moral fall.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5 - Shakespeare: Answering Parts (a) and (b)
    // ──────────────────────────────────────────────
    {
      // Rewritten 2 October 2026. This module taught the Shakespeare question as one 40-mark essay
      // moving from the extract to the wider play, about 60 per cent to 40, with all four AOs
      // marked and time kept to proofread for AO4. Pearson sets two parts, marked separately:
      // (a) the extract, AO2 20; (b) a theme elsewhere in the play, AO1 15 and AO3 5; AO4 is not
      // marked in Section A (see module 1). Two lines in its quotation bank, "I am settled: I will
      // rule in fear" and "There's none of my people know", are not in Macbeth; they are replaced
      // by lines checked against the held text (Project Gutenberg #1533).
      //
      // 9 October 2026: it still gave Section A about 50 minutes, 25 a part. The question paper
      // says about 55, divided equally between (a) and (b).
      id: 'edx-lt1-m5',
      title: 'Shakespeare: Answering Parts (a) and (b)',
      duration: '55 min',
      content: `
<h2>The Edexcel Shakespeare Question - Two Parts, Two Tasks</h2>

<p>Section A of Paper 1 is worth <strong>40 marks</strong>, and the question paper tells you to spend about <strong>55 minutes</strong> on it. It is <strong>one question in two parts</strong>, each worth 20 marks and each marked on its own, and you should divide your time equally between them:</p>
<ul>
  <li><strong>Part (a)</strong> prints an extract of about 30 lines and asks how Shakespeare presents a theme, character or idea <em>in the extract</em>. It is marked for writer's methods (AO2) alone: close analysis of language, form and structure.</li>
  <li><strong>Part (b)</strong> asks how a theme from the extract is explored <em>elsewhere in the play</em>. It is marked for personal response (AO1, 15 marks) and context (AO3, 5 marks).</li>
</ul>
<p>Spelling, punctuation and grammar (AO4) are not marked in Section A: they are marked in your Section B essay.</p>

<div class="key-term"><strong>Key Term: Two-Part Question</strong> - Part (a) is a close reading of the printed extract; part (b) follows the same theme into the rest of the play. The two are marked separately, for different assessment objectives, so answer each on its own terms.</div>

<h3>Part (a): Analysing the Extract (20 marks, AO2)</h3>
<ol>
  <li><strong>Read the question</strong> and underline its focus - a theme, character or idea.</li>
  <li><strong>Annotate the extract:</strong> key words, imagery, dramatic techniques, shifts in tone or structure.</li>
  <li><strong>Write 3-4 analytical paragraphs,</strong> each built on a short embedded quotation from the extract and what its language, form or structure does.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> In part (a), stay with the extract. The marks are for how closely you read Shakespeare's language, form and structure; context and the rest of the play belong in part (b).</div>

<h3>Part (b): Elsewhere in the Play (20 marks, AO1 and AO3)</h3>
<ol>
  <li><strong>Choose 3-4 moments</strong> from other parts of the play where the theme develops, complicates or resolves.</li>
  <li><strong>Build an argument across them,</strong> supported by short quotations you have memorised.</li>
  <li><strong>Bring in context</strong> where it explains why Shakespeare presents the theme as he does - it is worth 5 of the 20 marks.</li>
</ol>

<h3>The PETAL Framework</h3>
<ul>
  <li><strong>P - Point:</strong> A topic sentence making a claim relevant to the question.</li>
  <li><strong>E - Evidence:</strong> An embedded quotation from the text.</li>
  <li><strong>T - Technique:</strong> The literary or dramatic device used.</li>
  <li><strong>A - Analysis:</strong> The effect - what it suggests, implies, or reveals. Explore connotations.</li>
  <li><strong>L - Link to context:</strong> Connect to the social, historical or literary context - in part (b). In part (a), link back to the question instead.</li>
</ul>

<h3>Model Part (a) Paragraph - Grade 8-9</h3>
<div class="text-extract">Shakespeare uses the metaphor "vaulting ambition, which o'erleaps itself" to convey Macbeth's reckless desire. "O'erleaps" suggests a horseman jumping too far - foreshadowing his downfall. "Vaulting" carries connotations of arrogance, reinforcing that his aspirations have moved into hubris, and the soliloquy form lets the audience watch him reason his way towards a crime he knows is wrong.<div class="source">Model part (a) paragraph - Grade 8-9</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing everything you know without linking it to the question. Every paragraph must connect to the named theme or character. Narrative retelling will not reach the top bands.</div>

<h3>Quotation Bank for Macbeth</h3>
<div class="text-extract">
<strong>For Ambition:</strong> "Vaulting ambition, which o'erleaps itself" (Act 1.7) | "I have no spur / To prick the sides of my intent" (Act 1.7) | "none of woman born / Shall harm Macbeth" (Act 4.1, false security)<br><br>
<strong>For Guilt & Conscience:</strong> "Will all great Neptune's ocean wash this blood / Clean from my hand?" (Act 2.2) | "Out, damned spot!" (Act 5.1, Lady Macbeth sleepwalking)<br><br>
<strong>For Power & Masculinity:</strong> "When you durst do it, then you were a man" (Act 1.7, Lady Macbeth goads) | "I am settled, and bend up / Each corporal agent to this terrible feat" (Act 1.7)<br><br>
<strong>For Appearance vs Reality:</strong> "Look like the innocent flower, / But be the serpent under't" (Act 1.5) | "False face must hide what the false heart doth know" (Act 1.7)<br><br>
<strong>For the Supernatural:</strong> "Fair is foul, and foul is fair" (Act 1.1, witches) | "By the pricking of my thumbs, / Something wicked this way comes" (Act 4.1)
</div>

<h3>Grade 9 Insight: Making Part (b) an Argument</h3>
<div class="grade-9-insight"><strong>Grade 9 Approach:</strong> Don't just mention other scenes - show how they <em>develop, complicate, or culminate</em> the idea the extract raised. For example, if the extract shows Macbeth's hesitation about regicide, move to Act 2 (the murder), then Act 3 (paranoia), then Act 5 (nihilism). This progression demonstrates that you understand the thematic arc of the play and can integrate evidence strategically, with context where it explains Shakespeare's choices.</div>

<h3>Worked Example: Both Parts</h3>
<p><strong>Extract (Act 1.7):</strong> "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th'other."</p>
<p><strong>Questions:</strong> (a) "Explore how Shakespeare presents Macbeth's ambition in this extract." (b) "In this extract, Macbeth's ambition leads him towards murder. Explain how ambition leads to downfall elsewhere in the play."</p>
<div class="text-extract">
<strong>Part (a):</strong><br>
This soliloquy reveals Macbeth's moral awareness. The metaphor of "spur" (a rider's tool for motivating a horse) signals that legitimate motives (duty, honour) should drive action. Yet Macbeth finds only "ambition" - selfish desire. The verb "vaulting" (arching too far) and the paradox "o'erleaps itself / And falls on th'other" foreshadow inevitable collapse, and because Macbeth speaks alone, the audience hears him condemn the act before he commits it.<br><br>
<strong>Part (b):</strong><br>
The prophecy itself fuels this ambition. The witches' "All hail, Macbeth, that shalt be king hereafter" (Act 1.3) plants the idea; Lady Macbeth weaponises it with "When you durst do it, then you were a man" (Act 1.7). But the play demonstrates that this ambition cannot be sated. Post-murder, Macbeth's paranoia forces him to order Banquo's death ("We have scorch'd the snake, not kill'd it," Act 3.2), then Macduff's family's slaughter. By Act 5, the nihilistic soliloquy ("Tomorrow, and tomorrow, and tomorrow") shows that ambition has destroyed not just Macbeth's morality but his capacity for meaning. For a Jacobean audience who believed kings ruled by divine right, Malcolm's coronation restores a God-given order that the tyrant's ambition broke.
</div>

<h3>PETAL Framework: Worked Practice</h3>
<p><strong>Quotation:</strong> "By the pricking of my thumbs, / Something wicked this way comes" (Act 4.1)</p>
<div class="text-extract">
<strong>P - Point:</strong> Shakespeare uses the supernatural to externalise Macbeth's psychological corruption.<br><br>
<strong>E - Evidence:</strong> The witches' spellcraft ("By the pricking of my thumbs") creates an ominous atmosphere that precedes Macbeth's entry.<br><br>
<strong>T - Technique:</strong> Personification ("something wicked this way comes") treats evil as an external force approaching; supernatural imagery blurs reality and illusion.<br><br>
<strong>A - Analysis:</strong> For the audience, the witches' supernatural awareness suggests their manipulation of events. Yet Macbeth arrives immediately after, suggesting he is drawn by his own dark desires. The technique creates ambiguity: are the witches controlling Macbeth, or do they simply reveal what he already wants? This fits the play's thematic question of fate vs free will.<br><br>
<strong>L - Link to Context (part (b)):</strong> A Jacobean audience familiar with James I's <em>Daemonologie</em> would recognise witches as real threats. Yet Shakespeare makes their power ambiguous, perhaps suggesting Macbeth's own agency in his downfall.
</div>

<h3>Timing (about 55 minutes, split equally)</h3>
<ol>
  <li><strong>0-3 min:</strong> Read the extract and both questions. Annotate key words, literary devices and character tone.</li>
  <li><strong>3-27 min:</strong> Write part (a): 3-4 paragraphs on the extract, with short embedded quotations (3-6 words each).</li>
  <li><strong>27-30 min:</strong> Plan part (b): a one-sentence thesis and 3-4 moments from elsewhere in the play.</li>
  <li><strong>30-55 min:</strong> Write part (b), weaving in context where it explains Shakespeare's choices.</li>
</ol>

<h3>Model Opening for Part (b) - Grade 8-9</h3>
<div class="text-extract">
<strong>Question:</strong> "Explain how Shakespeare uses the witches to explore the theme of ambition elsewhere in the play."<br><br>
<strong>Model Introduction:</strong> Shakespeare presents the witches as agents of temptation who tap into Macbeth's latent ambition, raising the question of whether they cause his downfall or merely reveal his underlying desires. The witches' prophecies - particularly "All hail, Macbeth, that shalt be king hereafter" (Act 1.3) - plant ambition in Macbeth's mind, yet Lady Macbeth must drive him to act. Across the play, the supernatural becomes increasingly tied to Macbeth's psychological deterioration, suggesting that ambition, once awakened, becomes self-perpetuating. Ultimately, Shakespeare suggests that while external temptation exists, individuals remain responsible for their moral choices.
<div class="source">Grade 8-9: establishes a conceptualised argument and indicates the essay's direction</div>
</div>

<h3>Part (a) Paragraph Model (Grade 8-9)</h3>
<div class="text-extract">
<strong>From Act 1.7 - "I have no spur / To prick the sides of my intent, but only / Vaulting ambition"</strong><br><br>
Shakespeare's use of equestrian metaphor reveals Macbeth's moral self-awareness. The "spur" traditionally signifies duty or honour - legitimate reasons to act - yet Macbeth identifies only "ambition" as his motivator. The verb "vaulting" (leaping, arching) carries connotations of reckless overreach; the paradoxical "o'erleaps itself / And falls on th'other" foreshadows inevitable collapse. Notably, Macbeth does not excuse his ambition as imposed by fate or witches - he owns it. The metaphor's specificity - the concrete image of a horse and rider - makes abstract ambition visceral, inviting the audience to feel the tragedy of a man who recognises his own doom.
<div class="source">Grade 8-9 part (a) paragraph: writer's methods (AO2) - metaphor analysis, connotations, paradox</div>
</div>

<h3>Part (b) Paragraph Model (Grade 8-9)</h3>
<div class="text-extract">
<strong>Developing the theme into Acts 2-5:</strong><br><br>
Yet Macbeth's Act 1 self-awareness does not temper his ambition; instead, the play demonstrates how ambition mutates into paranoia and tyranny. Following Duncan's murder, Macbeth's language shifts from reflection to ruthlessness. "We have scorch'd the snake, not kill'd it" (Act 3.2) reveals that one murder cannot satiate ambition - Banquo remains a threat. This compulsion drives Macbeth to orchestrate Banquo's death and, by Act 4, to order the slaughter of Macduff's innocent family. By Act 5, the nihilistic "Tomorrow, and tomorrow, and tomorrow" soliloquy shows that ambition has consumed all meaning. For a Jacobean audience steeped in the Great Chain of Being, the restoration of order through Macduff's victory and Malcolm's coronation reasserts that the kingdom itself rejects the tyrant ambition produced.
<div class="source">Grade 8-9 part (b) paragraph: personal response (AO1) across several scenes, with context (AO3)</div>
</div>
`,
      quiz: [
        {
          id: 'edx-lt1-m5-q1',
          question: 'How many marks is the Edexcel Shakespeare question worth?',
          options: ['20 marks', '30 marks', '40 marks', '50 marks'],
          correct: 2,
          explanation:
            'Section A is worth 40 marks: 20 for part (a) on the extract and 20 for part (b) on the rest of the play. Spend about 55 minutes on it, divided equally between the parts.',
        },
        {
          id: 'edx-lt1-m5-q2',
          question: 'What does part (b) of the Shakespeare question ask you to write about?',
          options: [
            'The printed extract, in close detail',
            'How the theme from the extract is explored elsewhere in the play',
            'A comparison between two Shakespeare plays',
            'Your own experience of the theme',
          ],
          correct: 1,
          explanation:
            'Part (a) is about the extract; part (b) follows the same theme into the rest of the play, and is marked for your response (AO1) and context (AO3).',
        },
        {
          id: 'edx-lt1-m5-q3',
          question: 'What does the "L" in the PETAL framework stand for?',
          options: ['Language', 'Link to context', 'Literary device', 'Line reference'],
          correct: 1,
          explanation:
            'In PETAL, the L stands for "Link to context" - connecting your analysis to the social, historical, or literary context of the text (AO3). Context earns marks in part (b); in part (a), link back to the question instead.',
        },
        {
          id: 'edx-lt1-m5-q4',
          question: 'Which assessment objectives are tested in the Edexcel Shakespeare question?',
          options: [
            'AO2 in part (a); AO1 and AO3 in part (b)',
            'AO1, AO2, AO3 and AO4 in one essay',
            'AO1 and AO2 only',
            'AO2, AO3 and AO4',
          ],
          correct: 0,
          explanation:
            "Part (a) is marked for writer's methods (AO2, 20 marks); part (b) for personal response (AO1, 15) and context (AO3, 5). Technical accuracy (AO4) is marked in Section B, not here.",
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6 - Post-1914 Literature: Themes & Context (An Inspector Calls Focus)
    // ──────────────────────────────────────────────
    {
      // 2 October 2026: the Inspector's "Public men, Mr Birling, have responsibilities as well as
      // privileges" is quoted in full; "Mr Birling" had been dropped from its middle unmarked.
      // The quotation list also gave Mrs Birling "I was quite justified", which is Mr Birling's,
      // on sacking Eva in Act 1; hers, in Act 2, is "I was perfectly justified".
      id: 'edx-lt1-m6',
      title: 'Post-1914 Literature: Themes & Context (An Inspector Calls Focus)',
      duration: '55 min',
      content: `
<h2>An Inspector Calls - Themes and Context</h2>

<p><em>An Inspector Calls</em> by J.B. Priestley is the most popular Edexcel post-1914 text. It was <strong>written in 1945</strong> but <strong>set in 1912</strong> - this time gap drives its dramatic irony and political message.</p>

<div class="key-term"><strong>Key Term: Dramatic Irony</strong> - When the audience knows something the characters do not. The 1945 audience knew about the Titanic sinking, two World Wars and class-system collapse - all of which the Birlings dismiss.</div>

<h3>1912 vs 1945 - What the Audience Knows</h3>
<ul>
  <li><strong>"Absolutely unsinkable"</strong> - Mr Birling on the Titanic, which sank in April 1912.</li>
  <li><strong>"Nobody wants war"</strong> - WWI began in 1914; WWII followed in 1939.</li>
  <li><strong>"Steadily increasing prosperity"</strong> - the Great Depression hit in the 1930s.</li>
</ul>
<p>This irony undermines Birling's authority entirely, extending to his capitalist philosophy.</p>

<h3>Six Key Themes</h3>
<ul>
  <li><strong>Social responsibility:</strong> The Inspector's <em>"We are members of one body"</em> is Priestley's socialist message. Each Birling fails Eva Smith.</li>
  <li><strong>Class and inequality:</strong> Birling sacked Eva for requesting a fair wage; Sheila had her dismissed out of jealousy. The powerful destroy the vulnerable without consequence.</li>
  <li><strong>Generational divide:</strong> Sheila and Eric accept guilt; Mr and Mrs Birling refuse. Hope lies with the young.</li>
  <li><strong>Gender roles:</strong> Mrs Birling condemns Eva as an unmarried mother. Sheila grows into a morally independent woman.</li>
  <li><strong>Power and exploitation:</strong> Every family member exploits power over Eva - as employer, customer, lover or charity gatekeeper.</li>
  <li><strong>Guilt and morality:</strong> Sheila's journey to moral awakening is the play's emotional centre. Birling's refusal exposes moral bankruptcy.</li>
</ul>

<h3>Key Quotations with Analysis</h3>
<ul>
  <li><strong>"We are members of one body"</strong> - echoes Christian collectivism; "body" suggests harm to one part damages the whole.</li>
  <li><strong>"Fire and blood and anguish"</strong> - prophetic; the 1945 audience had lived through two wars.</li>
  <li><strong>"These girls aren't cheap labour - they're people"</strong> - Sheila rejects dehumanising language; the dash emphasises the correction.</li>
  <li><strong>"I was perfectly justified"</strong> - Mrs Birling measures behaviour by class, not compassion.</li>
  <li><strong>"We all helped to kill her"</strong> - "we all" distributes responsibility across the family.</li>
  <li><strong>"A man has to make his own way"</strong> - Birling's individualist creed, opposite to the Inspector's collectivism.</li>
  <li><strong>"Public men, Mr Birling, have responsibilities as well as privileges"</strong> - balanced syntax mirrors the balance Priestley demands.</li>
  <li><strong>"You're squiffy"</strong> - Eric's drinking hints at dysfunction beneath the respectable surface.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Do not simply state the play was written in 1945 - explain <em>how</em> context shapes interpretation: "A 1945 audience would recognise Birling's optimism as dangerously naive, reinforcing Priestley's argument against ignoring social responsibility."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating context as a bolt-on paragraph. Weave it into analysis throughout - the tension between what 1912 characters think and what a 1945 audience understands is where the marks are.</div>

<h3>Priestley's Purpose</h3>
<p>Priestley was a committed <strong>socialist</strong> who supported the <strong>Welfare State</strong>. He wrote the play as political theatre to persuade his audience that selfish, class-bound Edwardian attitudes must never return. The Inspector is his mouthpiece - a moral force delivering a message directly to the audience.</p>
`,
      quiz: [
        {
          id: 'edx-lt1-m6-q1',
          question: 'When was An Inspector Calls written, and when is it set?',
          options: [
            'Written in 1912, set in 1945',
            'Written in 1945, set in 1912',
            'Written in 1945, set in 1945',
            'Written in 1912, set in 1912',
          ],
          correct: 1,
          explanation:
            'The play was written in 1945 but set in 1912. This time gap creates dramatic irony - the audience knows about events (the Titanic, two World Wars) that the characters cannot foresee.',
        },
        {
          id: 'edx-lt1-m6-q2',
          question: 'Which character says "We are members of one body"?',
          options: ['Mr Birling', 'Sheila Birling', 'The Inspector', 'Eric Birling'],
          correct: 2,
          explanation:
            "The Inspector delivers this line in his final speech. It encapsulates Priestley's socialist message about collective social responsibility.",
        },
        {
          id: 'edx-lt1-m6-q3',
          question:
            'What is the significance of Mr Birling calling the Titanic "absolutely unsinkable"?',
          options: [
            'It shows he is well-informed about current affairs',
            'It creates dramatic irony that undermines his authority and judgement',
            'It demonstrates his concern for public safety',
            "It foreshadows the Inspector's arrival",
          ],
          correct: 1,
          explanation:
            'The 1945 audience knew the Titanic sank in 1912. This dramatic irony immediately marks Birling as foolish and unreliable, undermining his capitalist philosophy by extension.',
        },
        {
          id: 'edx-lt1-m6-q4',
          question: 'Which pair of characters represent hope for change in the play?',
          options: [
            'Mr and Mrs Birling',
            'Gerald and Mrs Birling',
            'Sheila and Eric',
            'The Inspector and Gerald',
          ],
          correct: 2,
          explanation:
            'Sheila and Eric - the younger generation - accept responsibility and show genuine remorse. Priestley suggests the hope for a fairer post-war society lies with the young.',
        },
        {
          id: 'edx-lt1-m6-q5',
          question: 'Why did Priestley set the play in 1912 rather than 1945?',
          options: [
            'Because he preferred writing historical drama',
            'So the characters could discuss World War I',
            'To create dramatic irony and expose the failures of pre-war capitalist attitudes',
            'Because the Welfare State did not exist in 1945',
          ],
          correct: 2,
          explanation:
            "Setting the play in 1912 allowed Priestley to use dramatic irony: the 1945 audience could see how wrong the Birlings' confident, self-serving predictions were, reinforcing his argument against individualism and class privilege.",
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 7 - Post-1914 Literature: Character Analysis
    // ──────────────────────────────────────────────
    {
      // 2 October 2026: Sheila's "That's a beautiful dress! Isn't it, Mummy? I love it!" is not in
      // the play (in Act 1 she says of her engagement ring "isn't it a beauty?"), nor is "You're
      // pretending everything's all right" (Act 3 has "you're pretending everything's just as it
      // was before"). Section B does not assess writer's methods (AO2); see module 1. Later the
      // same day: Sheila's "But these girls aren't cheap labour - they're people" was dated to
      // Act 2, and both analyses had her say it after learning her part in Eva's dismissal from
      // Milwards. She says it in Act 1, on hearing how her father sacked Eva, before her own part
      // comes out.
      id: 'edx-lt1-m7',
      title: 'Post-1914 Literature: Character Analysis',
      duration: '55 min',
      content: `
<h2>An Inspector Calls - Character Analysis</h2>

<p>Every character in <em>An Inspector Calls</em> is a <strong>mouthpiece for ideas</strong>. Priestley uses them to dramatise a political argument about responsibility, class, and social justice.</p>

<div class="key-term"><strong>Key Term: Mouthpiece Character</strong> - A character who exists primarily to voice the playwright's own views or to embody a particular ideology so the audience can judge it.</div>

<h3>The Characters</h3>

<ul>
  <li><strong>Mr Birling</strong> - Capitalist, pompous, refuses responsibility. His dramatic irony about the Titanic undermines his authority. Key quote: <em>"a man has to mind his own business and look after himself and his own."</em> He does <strong>not</strong> change - making the final phone call a moment of dramatic justice.</li>
  <li><strong>Mrs Birling</strong> - Classist, cold, hypocritical. Refuses Eva charity because Eva used the name "Mrs Birling." Key quote: <em>"Girls of that class-"</em> reveals ingrained class snobbery. Like her husband, she is incapable of change.</li>
  <li><strong>Sheila</strong> - Starts shallow and materialistic, but undergoes the play's most visible transformation. Key quote: <em>"But these girls aren't cheap labour - they're people."</em> Arc: shallow → genuine remorse → challenges parents → moral voice by Act 3. Represents Priestley's <strong>hope for the younger generation</strong>.</li>
  <li><strong>Eric</strong> - Weak but redeemable. Mirrors Sheila's journey, reinforcing the generational divide. Key quote: <em>"You're not the kind of father a chap could go to when he's in trouble"</em> - exposes the family's emotional coldness.</li>
  <li><strong>Inspector Goole</strong> - Priestley's mouthpiece: omniscient, supernatural, a <strong>socialist conscience</strong>. Key quote: <em>"We are members of one body. We are responsible for each other."</em> His ambiguity (ghost? time traveller?) keeps the audience thinking.</li>
  <li><strong>Gerald</strong> - Upper class, represents patriarchy. His affair with Daisy Renton is built on power imbalance. Key quote: <em>"intensely grateful"</em> reveals the transactional nature. Sides with the older Birlings by Act 3, closing ranks.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Sheila is the safest exam choice - her clear arc naturally generates personal response (AO1) and context (AO3) marks in a single paragraph. Eric is equally strong but slightly weaker because his motivation is less clear.</div>

<h3>Quotation Bank: Key Character Moments with Analysis</h3>
<div class="text-extract">
<strong>Mr Birling (Capitalist resistance):</strong> "A man has to mind his own business and look after himself and his own" - Shows his refusal of collective responsibility. The selfish pronouns "his own" emphasise atomisation.<br><br>
<strong>Mrs Birling (Class snobbery):</strong> "Girls of that class-" - Truncated speech reveals her discomfort with even naming Eva's class. Shows ingrained snobbery.<br><br>
<strong>Sheila (Moral awakening):</strong> "But these girls aren't cheap labour - they're people" - Simple language, powerful recognition of shared humanity. Shows transformation from complicity to conscience.<br><br>
<strong>Eric (Guilt recognition):</strong> "You're not the kind of father a chap could go to when he's in trouble" - Exposes family's emotional coldness. Shows he has moved beyond self-interest to recognise systemic failure.<br><br>
<strong>Inspector Goole (Socialist conscience):</strong> "We are members of one body. We are responsible for each other" - Directly voices Priestley's collectivist philosophy. Aphorismatic, memorable, prescriptive.
</div>

<h3>Grade 9 Insight: Character as Ideological Vehicle</h3>
<div class="grade-9-insight"><strong>Grade 9 Approach:</strong> Avoid treating characters as psychologically realistic people. Instead, recognise that Priestley constructs each character to embody a political position: Birling = capitalist individualism; Mrs Birling = aristocratic snobbery; Sheila/Eric = socialist potential; Inspector = moral authority. Show how their dialogue and stage actions express these ideologies. For instance, Sheila's early delight in her engagement ring ("isn't it a beauty?") contrasts with her later recognition of workers' humanity. This ideological shift is Priestley's argument for social change, not a realistic character "journey." Top-band responses will frame characters as constructs that dramatise political debate.</div>

<h3>Worked Example: Sheila's Transformation</h3>
<p><strong>Act 1, on her engagement ring:</strong> "Oh - it's wonderful! Look - mummy - isn't it a beauty?"</p>
<p><strong>Later in Act 1, on Eva's sacking:</strong> "But these girls aren't cheap labour - they're people."</p>
<div class="text-extract">
<strong>Analysis:</strong> Priestley constructs Sheila as the play's moral barometer, moving from shallow materialism to ethical consciousness. In Act 1, her delight in her engagement ring - and the stage direction "very pleased with life" - shows her isolation in bourgeois comfort. She has never considered the labour or ethics behind her possessions. Yet when she hears how her father sacked Eva, her protest that girls "aren't cheap labour - they're people" employs the simple plural noun "people" to assert a shared humanity her parents cannot acknowledge. The deliberate simplicity - no fancy adjectives, no hedging - makes the statement all the more powerful. When she then learns that her own vanity cost Eva her job at Milwards (out of jealousy at a pretty girl in the shop), that sympathy becomes guilt, and Sheila undergoes radical reorientation. By Act 3, Sheila has become the family's moral conscience, openly challenging her parents: "you're pretending everything's just as it was before." The present continuous "pretending" shows her refusal of moral amnesia. For Priestley, writing in 1945 after World War II, Sheila embodies the younger generation's capacity for social conscience - a hopeful vision that post-war Britain could be rebuilt on principles of collective responsibility rather than pre-war class complacency.
</div>

<h3>Character Comparison Grid</h3>
<table style="width:100%; border-collapse: collapse;">
<tr style="border-bottom: 2px solid #333;">
<th style="text-align: left; padding: 6px;"><strong>Character</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Social Position</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Ideological Stance</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Capacity for Change</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Priestley's Purpose</strong></th>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Mr Birling</strong></td>
<td style="padding: 6px;">Upper-middle class; industrialist</td>
<td style="padding: 6px;">Capitalist individualism; "mind his own business"</td>
<td style="padding: 6px;">None - refuses responsibility even at play's end</td>
<td style="padding: 6px;">Expose the bankruptcy of pre-war individualism; show that capitalist logic is immoral</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Mrs Birling</strong></td>
<td style="padding: 6px;">Upper-middle class; matriarch</td>
<td style="padding: 6px;">Class snobbery; "girls of that class"</td>
<td style="padding: 6px;">None - closes ranks with husband at end</td>
<td style="padding: 6px;">Critique ingrained, unthinking class prejudice; show how privilege insulates from empathy</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Sheila</strong></td>
<td style="padding: 6px;">Upper-middle class; young woman</td>
<td style="padding: 6px;">Initially complicit; evolves to socialist conscience</td>
<td style="padding: 6px;"><strong>Complete transformation</strong> - recognises complicity, accepts responsibility</td>
<td style="padding: 6px;">Embody the younger generation's capacity for moral growth and social conscience</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Eric</strong></td>
<td style="padding: 6px;">Upper-middle class; young man</td>
<td style="padding: 6px;">Initially self-interested; grows to recognise systemic failure</td>
<td style="padding: 6px;"><strong>Significant transformation</strong> - accepts responsibility, breaks from parents</td>
<td style="padding: 6px;">Show that younger men, despite patriarchal training, can develop conscience and challenge authority</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Gerald</strong></td>
<td style="padding: 6px;">Upper class; fiancé</td>
<td style="padding: 6px;">Patriarchal entitlement; exploitative ("intensely grateful")</td>
<td style="padding: 6px;">Minimal - reverts to Birlings' position by act 3</td>
<td style="padding: 6px;">Show that upper-class men prioritise class loyalty over moral responsibility</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Inspector Goole</strong></td>
<td style="padding: 6px;">Ambiguous; possibly supernatural</td>
<td style="padding: 6px;">Collectivist socialism; collective responsibility</td>
<td style="padding: 6px;">N/A - serves as moral voice, not character</td>
<td style="padding: 6px;">Priestley's mouthpiece; voice of the audience's conscience; embody post-war social justice ideals</td>
</tr>
</table>

<h3>Exam Technique: Constructing Character Paragraphs</h3>
<p><strong>Weak (character-focused, non-analytical):</strong> "Sheila changes her mind about Eva. She realises that poor girls are people too. This shows she is a better person than her parents."</p>
<p><strong>Strong (purpose-focused, analytical):</strong> "Priestley uses Sheila to embody the younger generation's capacity for moral conscience. Her recognition that Eva's girls 'aren't cheap labour - they're people' demonstrates a shift from bourgeois complicity to ethical awareness. The simplicity of 'people' - rejecting her mother's qualifying phrase 'girls of that class' - shows Sheila transcending class ideology. Priestley's hopeful vision is that post-war Britain could be rebuilt on principles of collective responsibility, with young people like Sheila leading moral renewal."</p>

<h3>Model Paragraph: Sheila's Development (Grade 8-9)</h3>

<div class="text-extract">Priestley constructs Sheila as the play's central moral barometer, dramatising the younger generation's capacity for ethical awakening. In Act 1, the stage directions describe her as "a pretty girl in her early twenties, very pleased with life," a phrase heavy with irony - her pleasure is naive, rooted in material comfort and social privilege. Her delight in her engagement ring - "isn't it a beauty?" - reveals a mind focused on possessions. Yet when she hears how her father sacked Eva, her assertion that girls "aren't cheap labour - they're people" employs deliberate simplicity to assert a shared humanity her parents cannot acknowledge. The noun "people" carries moral weight precisely because it refuses euphemism or qualification (unlike Mrs Birling's hedging "girls of that class"). Once she learns that her own jealousy led to Eva Smith's dismissal from Milwards, that sympathy becomes guilt, and Sheila undergoes a radical reorientation. By Act 3, Sheila has become the family's moral conscience, openly challenging her parents with "you're pretending everything's just as it was before." The present continuous verb "pretending" shows her refusal to return to pre-war moral amnesia. For Priestley, writing in the aftermath of World War II, Sheila embodies his hope that the younger generation - having witnessed collective catastrophe - could build a post-war society founded on principles of collective responsibility. She becomes Priestley's spokesman for social justice, suggesting that moral growth, once achieved, cannot be reversed.<div class="source">Grade 8-9 paragraph: ~240 words, demonstrating personal response (AO1, interpretation of generational change, supported by stage directions, word choice and dramatic action) and context (AO3, post-war)</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as if they are real people. Always frame analysis around Priestley's purpose - e.g. "Priestley uses Sheila to suggest that younger people can develop moral conscience" not "Sheila feels bad because she caused Eva's death." The first is an argument about the writer's purpose, which is what personal response (AO1) rewards; the second is paraphrase.</div>
`,
      quiz: [
        {
          id: 'edx-lt1-m7-q1',
          question: "Which character serves as Priestley's primary mouthpiece for socialist ideas?",
          options: ['Mr Birling', 'Sheila Birling', 'Inspector Goole', 'Gerald Croft'],
          correct: 2,
          explanation:
            'Inspector Goole functions as Priestley\'s mouthpiece. His final speech - "We are members of one body. We are responsible for each other" - directly voices Priestley\'s collectivist, socialist message to the audience.',
        },
        {
          id: 'edx-lt1-m7-q2',
          question: "What is the significance of Mr Birling's dramatic irony about the Titanic?",
          options: [
            'It shows he is well-read and informed about current affairs',
            'It undermines his authority and judgement in the eyes of the audience',
            'It foreshadows that the family will experience a disaster at sea',
            'It demonstrates his concern for working-class passengers',
          ],
          correct: 1,
          explanation:
            'The audience knows the Titanic sank, so Birling\'s confident prediction that it is "unsinkable" immediately marks him as foolish and unreliable. Priestley uses this dramatic irony to ensure the audience distrusts Birling\'s capitalist philosophy from the outset.',
        },
        {
          id: 'edx-lt1-m7-q3',
          question:
            'Which two characters mirror each other in accepting responsibility by the end of the play?',
          options: [
            'Mr Birling and Mrs Birling',
            'Gerald and the Inspector',
            'Sheila and Eric',
            'Mrs Birling and Sheila',
          ],
          correct: 2,
          explanation:
            "Sheila and Eric both undergo a moral transformation - they accept their guilt and challenge their parents' refusal to take responsibility. This generational divide is central to Priestley's message of hope for social change.",
        },
        {
          id: 'edx-lt1-m7-q4',
          question:
            'Why should exam responses refer to "Priestley" rather than treating characters as real people?',
          options: [
            'Because markers prefer formal language',
            'Because it demonstrates awareness that characters are constructs used to convey ideas, which strengthens your personal response (AO1)',
            'Because it adds to the word count',
            'Because the marking guide only rewards biographical context',
          ],
          correct: 1,
          explanation:
            "Referring to Priestley's intentions shows markers that you understand characters are deliberate constructs - tools the writer uses to explore themes and influence the audience. This strengthens your personal response (AO1), and links naturally to context (AO3).",
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 8 - Post-1914 Literature: Writer's Methods & Effects
    // ──────────────────────────────────────────────
    {
      // 2 October 2026: Section B does not assess writer's methods (AO2) - it is marked for AO1, AO3
      // and AO4 - so this module now teaches methods as evidence for the argument. Its 60-word
      // block quotation of the Inspector's last speech, from a play in copyright, is cut to the
      // three short phrases its notes analyse.
      id: 'edx-lt1-m8',
      title: "Post-1914 Literature: Writer's Methods & Effects",
      duration: '55 min',
      content: `
<h2>An Inspector Calls - Writer's Methods and Effects</h2>

<p>Section B does not award marks for writer's methods (AO2) on their own: it is marked for your argument (AO1), context (AO3) and accuracy (AO4). But knowing <em>how</em> Priestley builds meaning through <strong>language, form, and structure</strong> gives your argument its best evidence. In drama, this means going beyond dialogue to examine Priestley's full toolkit as a playwright.</p>

<div class="key-term"><strong>Key Term: Writer's Methods</strong> - <em>How</em> a writer creates meaning through language, structure, and form. In Section B, use them as evidence for your argument about the play and its context.</div>

<h3>Dramatic Methods</h3>

<ul>
  <li><strong>Stage directions:</strong> Lighting shifts from <em>"pink and intimate"</em> to <em>"brighter and harder"</em> - comfortable illusion gives way to harsh scrutiny.</li>
  <li><strong>Dramatic irony:</strong> The audience knows the Titanic sank - Birling's confidence discredits his worldview immediately.</li>
  <li><strong>Unity of time, place, action:</strong> One room, one evening, one investigation - claustrophobic and inescapable.</li>
  <li><strong>Entrances and exits:</strong> The Inspector interrupts Birling's capitalist speech; each exit isolates a character.</li>
</ul>

<h3>Key Structural Methods</h3>

<p>The play uses a <strong>"well of truth"</strong> - each interrogation digs deeper, escalating from dismissal to pregnancy, intensifying moral judgement.</p>

<ul>
  <li><strong>Cliffhangers between acts</strong> - Act 1 ends with Gerald's affair about to surface; Act 2 with Eric revealed as the father.</li>
  <li><strong>Cyclical structure</strong> - The phone rings again: a girl has died and an inspector is coming. The Birlings must relive the lesson they refused to learn.</li>
  <li><strong>Morality play form</strong> - Characters embody virtues and vices; a supernatural figure guides them toward reckoning. Priestley modernises the medieval tradition for a political message.</li>
</ul>

<h3>Avoiding Feature-Spotting</h3>

<p>Always follow: <strong>Technique → Effect → Priestley's purpose</strong>.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> "Priestley uses dramatic irony" identifies the technique but says nothing about effect. Always push further: "…to discredit Birling's confidence, ensuring the audience distrusts his philosophy before the Inspector arrives."</div>

<h3>Annotated Moment - The Inspector's Final Speech (Act 3)</h3>

<p>Before he leaves, the Inspector widens Eva's story to everyone like her and warns the family what will happen if the lesson is not learned. Three short quotations carry the speech:</p>

<ul>
  <li><strong>Tripling</strong> - <em>"millions and millions and millions"</em> hammers home the scale of inequality.</li>
  <li><strong>Short declaratives</strong> - <em>"We are members of one body."</em> Blunt simplicity gives prophetic authority.</li>
  <li><strong>Foreshadowing</strong> - <em>"fire and blood and anguish"</em> refers to two World Wars; for the 1945 audience, already fulfilled.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> When writing about structure, think in terms of audience experience: "What does the audience feel, and how has Priestley engineered it?"</div>

<h3>Model Paragraph: Methods as Evidence</h3>

<div class="text-extract">Priestley uses the cyclical structure to reinforce his message. The telephone announces a girl has died and an inspector is coming - mirroring the opening. The Birlings' dismissal of the Inspector as a hoax is immediately punished; the comfortable resolution is snatched away. The audience must recognise that ignoring responsibility has consequences. Just as the Birlings relive the interrogation, post-war Britain must not repeat the inequalities that led to war.<div class="source">Model paragraph - technique, effect and purpose, in service of the argument and its 1945 context</div></div>
`,
      quiz: [
        {
          id: 'edx-lt1-m8-q1',
          question:
            'What does the change in lighting from "pink and intimate" to "brighter and harder" symbolise?',
          options: [
            'The time of day shifting from evening to night',
            'The transition from comfortable illusion to harsh moral scrutiny',
            'The Inspector turning on an interrogation lamp',
            'Sheila becoming more confident as the play progresses',
          ],
          correct: 1,
          explanation:
            'Priestley uses the lighting change as a symbolic stage direction. "Pink and intimate" represents the Birlings\' comfortable self-deception; "brighter and harder" signals the arrival of truth and moral accountability through the Inspector.',
        },
        {
          id: 'edx-lt1-m8-q2',
          question:
            'Why is the unity of time, place, and action significant in An Inspector Calls?',
          options: [
            'It was required by the theatre company that first performed the play',
            'It makes the play cheaper to produce with a single set',
            'It creates a claustrophobic, pressurised atmosphere from which the characters cannot escape',
            'It proves that Priestley admired ancient Greek drama above all other forms',
          ],
          correct: 2,
          explanation:
            'By confining the action to one room, one evening, and one investigation, Priestley traps the Birling family - and the audience - in an inescapable confrontation with guilt. The unity intensifies the dramatic pressure throughout.',
        },
        {
          id: 'edx-lt1-m8-q3',
          question: "What is the strongest way to use Priestley's methods in a Section B essay?",
          options: [
            'Quote → Terminology → Context',
            "Technique → Effect → Writer's purpose",
            'Point → Evidence → Explanation',
            'Context → Quote → Personal response',
          ],
          correct: 1,
          explanation:
            "Section B does not mark methods (AO2) on their own, but a method becomes strong evidence when you identify it, explain its effect on the audience, and link it to the writer's purpose - which feeds your argument (AO1) and context (AO3).",
        },
        {
          id: 'edx-lt1-m8-q4',
          question:
            'What does the phrase "fire and blood and anguish" foreshadow in the Inspector\'s final speech?',
          options: [
            'The fire that will destroy the Birling factory',
            'A future revolution by the working class',
            'The two World Wars - a prophecy already fulfilled for the 1945 audience',
            "The Inspector's supernatural punishment of the family",
          ],
          correct: 2,
          explanation:
            'The play is set in 1912 but was first performed in 1945. The 1945 audience had already lived through two World Wars, so the Inspector\'s warning about "fire and blood and anguish" lands as a fulfilled prophecy - making Priestley\'s message about social responsibility devastatingly urgent.',
        },
        {
          id: 'edx-lt1-m8-q5',
          question:
            "Why is the cyclical structure (the phone ringing again at the end) Priestley's most powerful structural device?",
          options: [
            'It allows the actors to perform the play twice in one evening',
            'It suggests the Inspector was a real police officer who will return',
            'It snatches away the comfortable resolution, showing that ignoring responsibility has inescapable consequences',
            'It proves that Mr Birling was correct to be suspicious of the Inspector',
          ],
          correct: 2,
          explanation:
            'The cyclical ending destroys any sense of relief the Birlings (or the audience) might feel. By returning to the beginning, Priestley shows that those who refuse to learn the lesson of social responsibility will be forced to confront it again - a structural warning aimed directly at post-war Britain.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 9 - Post-1914 Literature: Essay Writing Techniques
    // ──────────────────────────────────────────────
    {
      // Rewritten 2 October 2026. This module said Section B prints an extract to analyse with
      // the wider text, for AO1 to AO4, and called AO4 "evaluation". Section B is ONE essay
      // question from a choice of two, opened by a short quotation, with no extract: AO1 16, AO3
      // 16 and AO4 8, where AO4 is spelling, punctuation, grammar and range of vocabulary. Its
      // worked essay also continued Birling's interrupted speech with words he never says ("and
      // if he doesn't he's not worth much"), had him sack Eva "from Milwards" (she was sacked
      // from his works; Milwards is Sheila's shop), and quoted "say nothing" and "it's all over
      // now", which are not in the play. Quotations are checked against a published script.
      id: 'edx-lt1-m9',
      title: 'Post-1914 Literature: Essay Writing Techniques',
      duration: '55 min',
      content: `
<h2>Writing the Post-1914 Literature Essay (40 Marks)</h2>

<p>Section B gives you a choice of <strong>two essay questions</strong> on your post-1914 text, and you answer <strong>one</strong>, for <strong>40 marks</strong>. There is no extract: each question opens with a <strong>short quotation</strong> from the text as a stimulus, then asks you to explore a character, theme, setting or the plot across the whole text, in relation to its context. It is marked for personal response (AO1, 16 marks), context (AO3, 16 marks) and technical accuracy (AO4, 8 marks).</p>

<div class="key-term"><strong>Key Term: Stimulus Quotation</strong> - The short quotation printed before each Section B question. It is a starting point, not an extract to analyse line by line: the question is about the text as a whole.</div>

<h3>Planning in 5 Minutes</h3>
<ol>
  <li><strong>Choose your question.</strong> Read both questions and their quotations, and pick the one you can argue best - power, guilt, responsibility, class?</li>
  <li><strong>Brainstorm 4-5 moments</strong> across the text where the theme or character appears, focusing on <em>development</em> or <em>contrast</em>.</li>
  <li><strong>Choose quotations.</strong> 4-6 short quotes you have memorised (3-6 words each), and a contextual point for each moment.</li>
</ol>

<h3>Essay Structure: The Six-Part Framework</h3>
<ol>
  <li><strong>Thesis Introduction:</strong> State your argument - e.g. <em>"Priestley uses Sheila to expose the generational divide in attitudes towards responsibility."</em></li>
  <li><strong>Argument Paragraph 1:</strong> Where the idea is introduced. Embed a quotation, explain what it shows, and link it to context.</li>
  <li><strong>Argument Paragraph 2:</strong> A moment that <em>develops</em> or intensifies the idea.</li>
  <li><strong>Argument Paragraph 3:</strong> A contrasting moment or character, showing the idea from another angle.</li>
  <li><strong>Argument Paragraph 4:</strong> A climactic or closing moment. Integrate contextual knowledge naturally.</li>
  <li><strong>Conclusion:</strong> Link to the writer's overall message and context. Do not repeat your introduction.</li>
</ol>

<h3>Covering AO1, AO3 and AO4</h3>
<ul>
  <li><strong>AO1 (Argument and reference):</strong> <em>"Priestley presents Birling as wilfully ignorant of social responsibility."</em></li>
  <li><strong>Supporting evidence:</strong> <em>"The repeated 'I' in 'I say there isn't a chance of war' reveals an egocentric worldview."</em> Methods are not marked separately in Section B, but close reference like this strengthens your argument.</li>
  <li><strong>AO3 (Context):</strong> <em>"Setting the play in 1912 but writing in 1945, Priestley uses dramatic irony to expose Edwardian complacency."</em></li>
  <li><strong>AO4 (Technical accuracy):</strong> 8 marks for spelling, punctuation, grammar and a range of vocabulary and sentence structures. Leave time to proofread.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a separate "context paragraph" disconnected from analysis. Weave context into every paragraph - show <em>why</em> the writer made choices, not a standalone history lesson.</div>

<h3>Grade 5 vs Grade 9 Comparison</h3>
<p><strong>Grade 5:</strong> <em>"Sheila says 'I'll never, never do it again.' This shows she feels guilty."</em> - Paraphrases meaning only.</p>
<p><strong>Grade 9:</strong> <em>"The emphatic repetition in 'never, never' signals a moral awakening, positioning Sheila as the younger generation's conscience. Priestley embodies his socialist argument that accountability must extend beyond the individual."</em> - Interprets, conceptualises meaning, integrates purpose.</p>

<h3>Quotation Bank: Grade 8-9 Transitions & Linking Phrases</h3>
<div class="text-extract">
<strong>Across-the-Text Transitions:</strong><br>
"This moment is crystallised when…" / "The pattern established here develops further…" / "This theme reaches its climax when…" / "Conversely, Priestley complicates this idea through…" / "Elsewhere in the play, this dynamic reverses when…"<br><br>
<strong>Context Integration Transitions:</strong><br>
"Writing in the immediate aftermath of…" / "For a 1945 audience, recently emerged from wartime…" / "The historical context illuminates…" / "This reflects the contemporary anxiety about…" / "In the context of post-war social debate…"<br><br>
<strong>Analytical Development Transitions:</strong><br>
"This technique illuminates the underlying argument that…" / "The effect of this method is to position the audience as…" / "What emerges from this analysis is that…" / "The cumulative impact of such moments suggests…"
</div>

<h3>Grade 9 Insight: Conceptualised Interpretation</h3>
<div class="grade-9-insight"><strong>Grade 9 Conceptualisation:</strong> Move beyond listing points to building a unified argument. Rather than "Priestley criticises capitalism (point 1), Priestley criticises class (point 2), Priestley criticises patriarchy (point 3)," argue something like: "Priestley presents social injustice as systemic - rooted in interconnected failures of capitalism, class hierarchy, and patriarchal power. Each character's moral blindness stems from their investment in these systems. Only the Inspector (and Sheila/Eric) recognise that these systems are inseparable. This interconnection is why collective responsibility - not individual charity - is necessary." This is conceptualisation: a unified argument that brings the play's parts into coherent relation.</div>

<h3>Worked Example: Building Arguments Within Paragraphs</h3>
<p><strong>Question:</strong> "Explore how Priestley presents the theme of class in An Inspector Calls. You must refer to the context of the play in your answer."</p>
<p><strong>Weak response (list-like):</strong></p>
<div class="text-extract">
"Mrs Birling is snobbish about Eva because she is poor. Gerald is upper class and treats Daisy Renton disrespectfully. The Inspector criticises their class attitudes. This shows that Priestley thinks class is a problem."<br><br>
(Problems: No exploration of how Priestley conveys his meaning; no context; statements are obvious restatements of plot.)
</div>
<p><strong>Strong response (argument-driven):</strong></p>
<div class="text-extract">
"Priestley critiques class not as individual snobbery but as a structural system that dehumanises the working classes. Mrs Birling's truncated phrase 'Girls of that class-' reveals her discomfort even naming Eva's status; she cannot complete the thought because naming enforces the gap between herself and Eva. This failure of language mirrors moral failure: she cannot extend empathy across class lines because the system teaches her that class determines human worth. Similarly, Gerald treats his affair with Daisy Renton as a kindness he was free to end, a relationship conducted entirely on his terms. Priestley's dramatic irony is that both characters believe themselves moral within their class framework. The Inspector's intervention - "We are members of one body. We are responsible for each other" - directly contradicts the class ideology that has structured the Birlings' world. In the play's final moments, when Mr and Mrs Birling refuse the Inspector's lesson and close ranks with Gerald, Priestley shows that pre-war class hierarchy was reinforced precisely through such collective refusals. Writing in 1945, after the Second World War, Priestley argues that societies that ignore collective responsibility face catastrophic consequences. Class ideology is thus not merely a prejudice to be overcome through individual goodwill but a structural barrier to the collective consciousness necessary for post-war reconstruction."<br><br>
(Strengths: Unified argument; precise reference; integration of context; understanding of Priestley's purpose; demonstrates how multiple scenes build towards a thematic conclusion.)
</div>

<h3>Model Six-Paragraph Essay Structure (c. 500 words for 40-mark question)</h3>
<table style="width:100%; border-collapse: collapse;">
<tr style="border-bottom: 2px solid #333;">
<th style="text-align: left; padding: 6px;"><strong>Paragraph</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Content Focus</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Key Technique</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Word Count</strong></th>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>1. Thesis Introduction</strong></td>
<td style="padding: 6px;">State your unified argument about the theme</td>
<td style="padding: 6px;">One clear claim; context reference; indicate structure</td>
<td style="padding: 6px;">~60-80 words</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>2. Argument 1</strong></td>
<td style="padding: 6px;">Where the theme or character is introduced</td>
<td style="padding: 6px;">Embed short quotations (3-6 words); link to context</td>
<td style="padding: 6px;">~100-120 words</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>3. Argument 2</strong></td>
<td style="padding: 6px;">A moment that <em>develops</em> the idea</td>
<td style="padding: 6px;">Show how the idea grows; weave in brief context</td>
<td style="padding: 6px;">~100-120 words</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>4. Argument 3</strong></td>
<td style="padding: 6px;">A contrasting moment or character</td>
<td style="padding: 6px;">Compare attitudes; integrate context naturally</td>
<td style="padding: 6px;">~100-120 words</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>5. Argument 4</strong></td>
<td style="padding: 6px;">A moment that <em>complicates</em> or <em>culminates</em> the theme</td>
<td style="padding: 6px;">Build to highest conceptual point; show thematic arc across play</td>
<td style="padding: 6px;">~100-120 words</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>6. Conclusion</strong></td>
<td style="padding: 6px;">Link to Priestley's overall purpose and contemporary context</td>
<td style="padding: 6px;">Do NOT repeat introduction; offer evaluative judgment</td>
<td style="padding: 6px;">~60-80 words</td>
</tr>
</table>

<h3>Worked Example: A Full Section B Essay (c. 450 words)</h3>
<p><strong>Stimulus:</strong> "a man has to mind his own business and look after himself and his own" (Mr Birling, Act 1)</p>
<p><strong>Question:</strong> "How does Priestley use the character of Mr Birling to explore ideas about responsibility? You must refer to the context of the play in your answer."</p>

<div class="text-extract">
<strong>THESIS:</strong> Priestley uses Mr Birling to embody the capitalist individualism that Priestley sees as morally bankrupt. Birling's assertion that a man need look after only "himself and his own" encapsulates a pre-war worldview that Priestley, writing in 1945, presents as culpable in social injustice and, implicitly, in the catastrophe of the war. Across the play, Birling's refusal of collective responsibility is contrasted with the Inspector's socialist ethic, positioning the audience to reject Birling's philosophy and embrace the play's message: that societies must be built on the principle "we are members of one body."<br><br>

<strong>THE OPENING SPEECH:</strong> Priestley introduces this philosophy in the speech the Inspector's arrival interrupts. Birling scorns the idea that everybody should look after everybody else as "community and all that nonsense", and the repetition of "his own" reveals an obsessive focus on personal and family benefit. Priestley's dramatic irony is acute: Birling lectures the younger generation on looking after themselves moments before learning that a girl he sacked from his works has died. A 1945 audience would recognise in his individualism the pre-war ideology Priestley blamed for social inequality.<br><br>

<strong>FALSE CERTAINTY:</strong> Priestley undermines Birling's authority before the Inspector arrives. His confident claim that the Titanic is "unsinkable, absolutely unsinkable", and that war will not come, is exposed by history the audience already knows. We recognise him as a man whose certainty masks ignorance, and whose self-interest prevents moral foresight. Even when the Inspector's questioning reveals his part in Eva's story, his concern is for a public scandal and his hoped-for knighthood rather than for the girl.<br><br>

<strong>THE YOUNGER GENERATION:</strong> Contrasted with Sheila and Eric, Birling's intransigence becomes Priestley's critique of his generation's moral failure. Where Sheila recognises "these girls aren't cheap labour - they're people," Birling doubles down on individualism. Even Eva's story - a narrative designed to produce empathy - fails to move him, positioning the audience to embrace the younger generation's emerging collectivism.<br><br>

<strong>THE ENDING:</strong> When it seems the Inspector may not have been a real police inspector, Birling celebrates as if nothing has happened, and treats the evening as a hoax. Priestley's darkest point is that without systemic change, moral appeals alone cannot overcome self-interest. The final telephone call - a girl has died and a police inspector is on his way - suggests that societies ignoring collective responsibility cycle through catastrophe.<br><br>

<strong>CONCLUSION:</strong> Through Mr Birling, Priestley exposes capitalist individualism as not merely ethically insufficient but actively destructive. Birling's refusal of growth embodies Priestley's conviction that pre-war society was culpable in its own catastrophes. Only societies founded on the principle of collective responsibility can avoid tragedy. Priestley's play is thus a call to post-war Britain: choose Sheila's conscience or Birling's blindness.
<div class="source">~450 words; demonstrates Grade 8-9 standard: unified argument, precise reference, integrated context, thematic coherence</div>
</div>

<h3>Transition Phrases (Grade 8-9)</h3>
<ul>
  <li><strong>Across the text:</strong> "This moment is crystallised when…" / "The pattern established here develops further…" / "This tension reaches its climax when…" / "Conversely, Priestley complicates this idea when…"</li>
  <li><strong>Contrast:</strong> "In contrast to Birling's refusal…" / "Yet where Act 1 establishes…, by Act 2 Priestley shows…"</li>
  <li><strong>Context:</strong> "Writing in 1945, emerging from…" / "For a contemporary audience, this would…" / "The historical context of post-war reconstruction illuminates…"</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Avoid mechanical transitions like "This links to context because…" or "Another example is…" Instead, weave context and evidence into flowing analytical sentences. Compare: "The Birlings' moral blindness reflects pre-war capitalist ideology" (integrated) vs. "This is an example of capitalism. Capitalism is bad" (bolted-on).</div>

<h3>Grade 5 vs Grade 9 Response Comparison</h3>
<table style="width:100%; border-collapse: collapse;">
<tr style="border-bottom: 2px solid #333;">
<th style="text-align: left; padding: 6px;"><strong>Feature</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Grade 5 Response</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Grade 8-9 Response</strong></th>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Thesis</strong></td>
<td style="padding: 6px;">"Priestley thinks responsibility is important."</td>
<td style="padding: 6px;">"Priestley presents collective responsibility as the moral foundation for post-war society, contrasting Birling's capitalist individualism with the Inspector's socialist ethic to argue that societies ignoring interdependence cycle through catastrophe."</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Evidence Use</strong></td>
<td style="padding: 6px;">Long quotations paraphrased; only surface meaning extracted.</td>
<td style="padding: 6px;">Short quotations (3-6 words) embedded in analytical sentences; precise focus on word choice and dramatic effect.</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Structure</strong></td>
<td style="padding: 6px;">Plot retold in order, then a separate "context paragraph".</td>
<td style="padding: 6px;">Thesis, four argument paragraphs ranging across the play, conclusion. Context woven throughout.</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Analysis Depth</strong></td>
<td style="padding: 6px;">"Sheila changes her mind and realises girls are people."</td>
<td style="padding: 6px;">"Priestley constructs Sheila's recognition that girls 'aren't cheap labour - they're people' as a moment of ideological rupture. The simplicity of 'people' - rejecting her mother's qualifying 'girls of that class' - shows Sheila transcending the linguistic-ideological framework of her class."</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Context Integration</strong></td>
<td style="padding: 6px;">Separate, disconnected paragraph: "Priestley wrote this in 1945 after World War II."</td>
<td style="padding: 6px;">Context embedded: "Writing in 1945, post-World War II, Priestley argues that societies ignoring collective responsibility face catastrophic consequences. Birling's individualism is thus not merely personal moral failure but national culpability."</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Conceptualisation</strong></td>
<td style="padding: 6px;">Lists separate points: "Priestley criticises capitalism, Priestley criticises class, Priestley criticises patriarchy."</td>
<td style="padding: 6px;">Unified argument: "Priestley presents social injustice as systemic - rooted in interconnected failures of capitalism, class hierarchy, and patriarchal power structures. These systems are inseparable; only collective consciousness can address them."</td>
</tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a separate "context paragraph" disconnected from analysis. This turns context into background information rather than evidence. Instead, weave context into every paragraph - show <em>why</em> the writer made particular choices given their historical moment.</div>
`,
      quiz: [
        {
          id: 'edx-lt1-m9-q1',
          question: 'Each Section B question opens with a short quotation. How should you use it?',
          options: [
            'Analyse it line by line for most of the essay',
            'Treat it as a stimulus: a starting point for an argument that ranges across the whole text',
            'Ignore it - it is decoration',
            'Compare it with the Shakespeare extract',
          ],
          correct: 1,
          explanation:
            'The quotation is a stimulus, not an extract to analyse. The question asks about the text as a whole, in relation to its context, so build an argument that ranges across it.',
        },
        {
          id: 'edx-lt1-m9-q2',
          question: 'What is the main difference between a Grade 5 and a Grade 9 response?',
          options: [
            'Grade 9 responses are significantly longer',
            'Grade 9 responses use more quotations from the text',
            'Grade 9 responses explore specific details and integrate context with a conceptualised interpretation',
            'Grade 9 responses always disagree with the question statement',
          ],
          correct: 2,
          explanation:
            "A Grade 9 response stands out through precise reference, a conceptualised interpretation that goes beyond surface meaning, and seamless integration of context and writer's purpose.",
        },
        {
          id: 'edx-lt1-m9-q3',
          question: 'Why should you avoid writing a separate "context paragraph" in your essay?',
          options: [
            'Because context is not assessed in the Literature exam',
            'Because markers are looking for context woven into every paragraph, not isolated as an afterthought',
            'Because there is not enough time to write a dedicated context paragraph',
            'Because context is only relevant to the Shakespeare question',
          ],
          correct: 1,
          explanation:
            'Context (AO3) is worth 16 of the 40 marks in Section B, so it should run through your argument, showing why the writer made particular choices. A standalone context paragraph tends to become descriptive background that does not connect to the argument.',
        },
        {
          id: 'edx-lt1-m9-q4',
          question: 'How long should you spend planning your post-1914 literature essay?',
          options: [
            '2 minutes',
            '5 minutes',
            '10 minutes',
            'No planning is needed - start writing immediately',
          ],
          correct: 1,
          explanation:
            'Five minutes of focused planning - choosing your question, identifying moments across the text, and selecting quotations and context - prevents rambling and ensures your essay has a clear structure and argument.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 10 - Paper 1 Exam Strategy & Practice
    // ──────────────────────────────────────────────
    {
      // Rewritten 2 October 2026 for the paper Pearson sets (see module 1): Section A is two parts,
      // not one extract-to-whole essay; Section B has no extract; SPaG is marked on the Section B
      // essay. The timing plan, pitfalls, checklist, mock walkthrough and quiz all assumed two
      // extract-based essays split 50/50 between extract and wider text.
      //
      // 9 October 2026: the timing plan, its Top Tip, the timed-answers tip and quiz questions 1
      // and 2 still gave Section A 50 minutes and Section B 55. The question paper says about 55
      // minutes on Section A, divided equally between (a) and (b), and about 50 on Section B.
      id: 'edx-lt1-m10',
      title: 'Paper 1 Exam Strategy & Practice',
      duration: '60 min',
      content: `
<h2>Paper 1 Exam Strategy - Putting It All Together</h2>

<p>Paper 1 is <strong>1 hour 45 minutes</strong> and worth <strong>80 marks</strong>, split equally between Section A (Shakespeare, a two-part question) and Section B (one post-1914 essay).</p>

<div class="key-term"><strong>Key Term: Time-per-Mark</strong> - You have roughly 1.3 minutes per mark, but planning and proofreading time means writing windows are tighter than you think.</div>

<h3>Full Timing Plan</h3>
<p>The question paper tells you to spend about 55 minutes on Section A, dividing your time equally between parts (a) and (b), and about 50 minutes on Section B.</p>
<ol>
  <li><strong>0-3 min:</strong> Shakespeare - read the extract twice and both parts of the question.</li>
  <li><strong>3-27 min:</strong> Part (a) - write 3-4 paragraphs analysing the extract's language, form and structure.</li>
  <li><strong>27-30 min:</strong> Part (b) - plan 3-4 moments from elsewhere in the play, with context.</li>
  <li><strong>30-55 min:</strong> Part (b) - write.</li>
  <li><strong>55-60 min:</strong> Post-1914 - read both questions, choose one, plan.</li>
  <li><strong>60-100 min:</strong> Post-1914 - write. Do not let fatigue lower standards.</li>
  <li><strong>100-105 min:</strong> Proofread the post-1914 essay for spelling, punctuation and grammar (AO4), then a final check of name and candidate number.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> If running over on Section A, stop at about 55 minutes and move on. Two parts and an essay all attempted always beat one excellent answer and one rushed.</div>

<h3>Reading the Extract (Section A part (a))</h3>
<p><strong>First read:</strong> understand content, speaker, tone - do not write yet. <strong>Second read:</strong> annotate - underline key words, name techniques, note tone shifts. <strong>Then:</strong> highlight the question's instruction word; every paragraph must connect to it.</p>

<h3>Common Pitfalls</h3>
<ul>
  <li><strong>Narrative retelling:</strong> Analyse <em>how</em> and <em>why</em>, not <em>what</em> happens. Markers know the plot.</li>
  <li><strong>Context in the wrong place:</strong> Context (AO3) earns marks in Section A part (b) and in Section B, not in part (a). Integrate it into your argument where it counts.</li>
  <li><strong>Mixing the two parts:</strong> Part (a) is about the extract; part (b) is about the rest of the play. Answer each as it is asked.</li>
  <li><strong>Feature-spotting:</strong> Naming a metaphor is not enough - explain what it suggests and its effect.</li>
  <li><strong>Running out of time:</strong> Poor Section A management is the most common tactical error.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> "The writer uses 'dark' to show darkness" is circular. Instead: "'Dark' carries connotations of moral corruption, suggesting respectability masks a deeper failing."</div>

<h3>Revision Strategies</h3>
<ul>
  <li><strong>Quote banks:</strong> 20-30 quotations per text by theme, each with a one-sentence analysis.</li>
  <li><strong>Theme maps:</strong> Mind maps linking characters, moments, quotes, and context.</li>
  <li><strong>Timed answers:</strong> At least three per text: part (a) and part (b) in 55 minutes for Shakespeare, and the post-1914 essay in 50. Mark against the scheme.</li>
  <li><strong>Paragraph drills:</strong> 8-minute paragraphs - close analysis for part (a), argument with context for part (b) and Section B.</li>
</ul>

<h3>Mock Walkthrough</h3>
<p><strong>Shakespeare:</strong> (a) <em>"Explore how Shakespeare presents ambition in this extract."</em> - the language of ambition and conscience in the printed passage. (b) <em>"Explain how ambition is explored elsewhere in the play."</em> - the witches' prophecy, "unsex me here," the "tomorrow" soliloquy, with Jacobean anxieties about regicide.</p>
<p><strong>Post-1914:</strong> <em>"How does Priestley present social class? You must refer to the context of the play in your answer."</em> - Plan: Birling's "mind his own business" speech, "fire and blood and anguish," Sheila's transformation, with 1912 and 1945 as context.</p>

<h3>Final Checklist</h3>
<ul>
  <li>Section A part (a), part (b) and the Section B essay all answered?</li>
  <li>Part (a) closely analysing the extract, and part (b) ranging across the rest of the play?</li>
  <li>Context (AO3) woven into part (b) and the Section B essay?</li>
  <li>The Section B essay proofread for SPaG?</li>
</ul>

<p>Grade boundaries (rough guide, both papers): <strong>Grade 9</strong> ~70-75%, <strong>Grade 7</strong> ~55-60%, <strong>Grade 5</strong> ~42-48%, <strong>Grade 4</strong> ~35-40%.</p>

<div class="examiner-tip"><strong>Top Tip:</strong> The difference between Grade 8 and 9 is sophistication of argument and precision of analysis - not the amount you write. Quality over quantity.</div>
`,
      quiz: [
        {
          id: 'edx-lt1-m10-q1',
          question:
            'According to the recommended timing plan, how long should you spend writing part (a), the extract question?',
          options: ['15 minutes', '24 minutes', '35 minutes', '45 minutes'],
          correct: 1,
          explanation:
            'The timing plan allows about 24 minutes for writing part (a), after 3 minutes reading the extract and the questions. That gives part (a) about half of the 55 minutes the question paper suggests for Section A, and part (b) the other half.',
        },
        {
          id: 'edx-lt1-m10-q2',
          question: 'What should you do if you are running over time on Section A (Shakespeare)?',
          options: [
            'Skip proofreading and keep writing',
            'Stop at about the 55-minute mark and move on to Section B',
            'Write a shorter conclusion and continue for another 10 minutes',
            'Abandon Section B and focus entirely on Section A',
          ],
          correct: 1,
          explanation:
            'Stopping at about the 55-minute mark and moving to Section B is essential. Answering everything always earns more marks overall than one excellent answer and one rushed or incomplete one.',
        },
        {
          id: 'edx-lt1-m10-q3',
          question:
            'Which of the following is the most common tactical error students make on Paper 1?',
          options: [
            'Writing too many quotations',
            'Running out of time on the second essay due to poor time management',
            'Using bullet points instead of paragraphs',
            'Choosing the wrong question from the paper',
          ],
          correct: 1,
          explanation:
            'Running out of time on the second essay is the most common tactical error. Students spend too long on Section A, leaving insufficient time for Section B - which costs more marks than the extra detail in Section A would have gained.',
        },
        {
          id: 'edx-lt1-m10-q4',
          question: 'Where does context (AO3) earn marks on Paper 1?',
          options: [
            'Everywhere, including the extract question',
            'In Section A part (b) and in the Section B essay',
            'Only in the Shakespeare extract question',
            'Nowhere - it is only assessed on Paper 2',
          ],
          correct: 1,
          explanation:
            "Context is worth 5 marks in Section A part (b) and 16 in Section B. Part (a), the extract, is marked for writer's methods (AO2) alone.",
        },
      ],
    },
  ],
  assessmentQuestions: [
    {
      id: 'edx-lt1-a1',
      question:
        'How long is Edexcel Literature Paper 1 and what percentage of the GCSE does it represent?',
      options: [
        '1 hour 30 minutes, 40%',
        '1 hour 45 minutes, 50%',
        '2 hours, 50%',
        '2 hours 15 minutes, 60%',
      ],
      correct: 1,
      explanation:
        'Paper 1 is 1 hour 45 minutes long and worth 80 marks, accounting for 50% of the total GCSE.',
    },
    {
      id: 'edx-lt1-a2',
      question: "What is Macbeth's hamartia (tragic flaw)?",
      options: ['Cowardice', 'Vaulting ambition', 'Jealousy', 'Loyalty'],
      correct: 1,
      explanation:
        'Macbeth identifies his own flaw as "vaulting ambition, which o\'erleaps itself" in Act 1 Scene 7. It drives every destructive choice in the play.',
    },
    {
      id: 'edx-lt1-a3',
      question: 'How is the Edexcel Shakespeare question set?',
      options: [
        'One essay on the extract only',
        'Two parts: (a) the printed extract, then (b) a theme elsewhere in the play',
        'One essay on the whole play, with no extract',
        'Two extracts from different acts to compare',
      ],
      correct: 1,
      explanation:
        'Section A has two parts marked separately: part (a) analyses an extract of about 30 lines (AO2), and part (b) explores how a theme from it appears elsewhere in the play (AO1 and AO3).',
    },
    {
      id: 'edx-lt1-a4',
      question: 'Which assessment objective tests spelling, punctuation and grammar on Paper 1?',
      options: ['AO1', 'AO2', 'AO3', 'AO4'],
      correct: 3,
      explanation:
        'Technical accuracy (AO4) assesses SPaG. It is worth 8 marks and is marked on the post-1914 essay in Section B only.',
    },
    {
      id: 'edx-lt1-a5',
      question: "Why would Duncan's murder have been particularly shocking to a Jacobean audience?",
      options: [
        'Because murder was rare on stage',
        'Because they believed in the Divine Right of Kings, making regicide a sin against God',
        'Because Duncan was based on a real English king',
        'Because the audience sympathised with Lady Macbeth',
      ],
      correct: 1,
      explanation:
        'The Divine Right of Kings held that monarchs were appointed by God. Killing a king was not merely treason but a violation of the sacred, divinely ordained order.',
    },
    {
      id: 'edx-lt1-a6',
      question: 'What does the "L" in the PETAL framework stand for?',
      options: ['Language', 'Link to context', 'Literary device', 'Line reference'],
      correct: 1,
      explanation:
        'In PETAL, L stands for "Link to context" - connecting your analysis to the social, historical, or literary context of the text (AO3), which earns marks in Section A part (b) and in Section B.',
    },
    {
      id: 'edx-lt1-a7',
      question: 'When was An Inspector Calls written, and when is it set?',
      options: [
        'Written 1912, set 1945',
        'Written 1945, set 1912',
        'Written 1945, set 1945',
        'Written 1912, set 1912',
      ],
      correct: 1,
      explanation:
        'The play was written in 1945 but set in 1912. This time gap creates dramatic irony \u2014 the audience knows about events the characters cannot foresee.',
    },
    {
      id: 'edx-lt1-a8',
      question: "Which character serves as Priestley's primary mouthpiece for socialist ideas?",
      options: ['Mr Birling', 'Sheila Birling', 'Inspector Goole', 'Gerald Croft'],
      correct: 2,
      explanation:
        'Inspector Goole delivers the play\'s central message: "We are members of one body. We are responsible for each other." He functions as Priestley\'s socialist conscience.',
    },
    {
      id: 'edx-lt1-a9',
      question:
        'What does the lighting change from "pink and intimate" to "brighter and harder" symbolise?',
      options: [
        'The time of day changing',
        'The transition from comfortable illusion to harsh moral scrutiny',
        'The Inspector turning on a lamp',
        'Sheila becoming more confident',
      ],
      correct: 1,
      explanation:
        'Priestley uses lighting symbolically: "pink and intimate" represents the Birlings\' comfortable self-deception; "brighter and harder" signals the arrival of truth and moral accountability.',
    },
    {
      id: 'edx-lt1-a10',
      question: 'Where should your Section A answer deal with the printed extract?',
      options: [
        'In part (a), which is marked on the extract alone',
        'Throughout both parts equally',
        'Only in the conclusion',
        'Nowhere - the extract is just a reminder',
      ],
      correct: 0,
      explanation:
        'Part (a) is marked for your analysis of the extract (AO2). Part (b) asks about the rest of the play, so your answer there should range beyond it.',
    },
    {
      id: 'edx-lt1-a11',
      question: 'Why is the cyclical structure of An Inspector Calls significant?',
      options: [
        'It allows the play to be performed twice',
        'It snatches away comfortable resolution, showing ignoring responsibility has consequences',
        'It proves the Inspector was a real officer',
        'It shows Mr Birling was right to be suspicious',
      ],
      correct: 1,
      explanation:
        'The phone ringing again destroys any relief. Priestley shows that those who refuse to learn the lesson of social responsibility will be forced to confront it again.',
    },
    {
      // 9 October 2026: this said to stop at 50 minutes, and called the paper "two solid
      // essays". Section A is one question in two parts, with about 55 minutes (module 1).
      id: 'edx-lt1-a12',
      question: 'What should you do if you are running over time on Section A (Shakespeare)?',
      options: [
        'Skip the review and keep writing',
        'Stop at about the 55-minute mark and move on to Section B',
        'Write a shorter conclusion and continue for another 10 minutes',
        'Abandon Section B entirely',
      ],
      correct: 1,
      explanation:
        'Two parts and an essay, all answered, always earn more marks than one excellent answer and one rushed. Stop at about 55 minutes and move on.',
    },
  ],
}

const edexcelLitPaper2: CourseData = {
  id: 'edexcel-lit-paper2',
  title: 'Edexcel GCSE English Literature \u2013 Paper 2',
  subtitle: '19th-Century Novel & Poetry Anthology',
  tier: 'GCSE',
  board: 'Edexcel',
  // 9 October 2026: these read 1ET2 and 1ET2/02. Pearson's GCSE English Literature is 1ET0.
  specId: '1ET0',
  specCode: '1ET0/02',
  price: 0,
  duration: '14 weeks',
  level: 'GCSE (Years 10-11)',
  description:
    'Master Edexcel Literature Paper 2: 19th-Century Novel (A Christmas Carol) and Poetry Anthology. Extract responses, poetry analysis, and comparison essays.',
  color: '#d97706',
  moduleList: [
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
      // the assessment questions are corrected to match; modules 2 to 5, on the novel, were
      // corrected the same day not to teach context as if Section A assessed it.
      //
      // 9 October 2026: the timing plan said Pearson sets only the total time, and gave
      // Section A an hour and each poetry question 35 minutes, with 5 to review. Pearson's
      // 1ET0/02 question papers (May 2017, May 2025) say about 55 minutes on Section A,
      // divided equally between (a) and (b), 35 on Section B Part 1 and 45 on Part 2.
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
<p>The question paper tells you to spend about 55 minutes on Section A, dividing your time equally between parts (a) and (b), about 35 minutes on Section B Part 1, and about 45 minutes on Section B Part 2, where both poems are new to you. That is all 135 minutes, so check each answer in the last few minutes of its section.</p>
<ol>
  <li><strong>0-27 min:</strong> Section A part (a). Read the extract and the question, annotate key words and methods, and write about the extract (20 marks).</li>
  <li><strong>27-55 min:</strong> Section A part (b). Plan, then write about the novel as a whole (20 marks).</li>
  <li><strong>55-90 min:</strong> Section B Part 1. Read the named poem, choose the poem you will compare it with, plan three or four points of comparison and write (20 marks).</li>
  <li><strong>90-135 min:</strong> Section B Part 2. Read both unseen poems twice, annotate them, then plan and write your comparison (20 marks).</li>
</ol>
<p>In the last few minutes of each section, check quotation accuracy, the spelling of writers' names, and that every poetry paragraph compares.</p>

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
      // no prisons?" and "And the Union workhouses?" ("Are there no workhouses?" is the
      // Spirit's, in Stave Three), and the edition prints "grind-stone". On the same day the module stopped teaching
      // context (AO3) as if Section A marked it: on Paper 2 it does not. The first pass corrected
      // the module text but missed its quiz's first question, which still gave Scrooge the
      // Spirit's line in its answer and explanation; a second pass fixed it later that day.
      id: 'edx-lt2-m2',
      title: '19th-Century Novel: Context & Conventions (A Christmas Carol Focus)',
      duration: '55 min',
      content: `
<h2>A Christmas Carol - Context, Conventions &amp; Dickens's Purpose</h2>

<p><em>A Christmas Carol</em> is by far the most popular 19th-century novel choice on Edexcel Literature Paper 2. Section A of Paper 2 awards no marks for context (AO3), but knowing the world Dickens wrote for helps you understand the novel and explain his choices - and that understanding shows in your analysis of the extract (AO2) and your argument about the whole novel (AO1). This module gives you that knowledge and shows you how to <em>use</em> it inside an argument rather than bolting it on.</p>

<div class="key-term"><strong>Key Term: Novella</strong> - A prose narrative longer than a short story but shorter than a full novel, typically between 15,000 and 40,000 words. <em>A Christmas Carol</em> is a novella - its compact form allows Dickens to deliver a focused moral message with an allegorical structure divided into five staves (chapters).</div>

<h3>Historical Context: Victorian London in 1843</h3>
<p>When Chapman &amp; Hall published <em>A Christmas Carol</em> on 19 December 1843, Britain was in the grip of rapid industrial change. These contextual factors explain much of what Dickens is doing:</p>

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

<div class="examiner-tip"><strong>Top Tip:</strong> The best answers do not dump context in a separate paragraph. Instead, they weave it into analysis. Compare these two approaches:<br><br><strong>Weak:</strong> "In Victorian times, there were workhouses. Scrooge mentions workhouses."<br><strong>Strong:</strong> "Dickens, writing just nine years after the Poor Law Amendment Act of 1834, uses Scrooge's dismissive reference to workhouses to expose how institutionalised cruelty had become normalised among the wealthy. The audience would have recognised this attitude as commonplace - which makes its dramatic dismantling through the Spirits all the more powerful."<br><br>The second version integrates a specific date, names the legislation, and explains its <em>effect</em> on the reader - context put to work explaining the writer's choices.</div>

<h3>Dickens's Purpose: Social Reform</h3>
<p>Dickens did not write <em>A Christmas Carol</em> merely to entertain. He had a clear <strong>didactic purpose</strong> - to attack greed, expose the suffering of the poor, and champion generosity. Key points to remember:</p>
<ul>
  <li>He originally planned to write a political pamphlet after visiting Manchester's Field Lane Ragged School, but chose fiction as a more powerful vehicle for change.</li>
  <li>He insisted on keeping the price low (five shillings) so that working-class readers could afford it - sacrificing profit for reach.</li>
  <li>The novella's emotional power lies in its juxtaposition of wealth and poverty: the Cratchits' humble but loving Christmas dinner against Scrooge's cold, solitary existence.</li>
  <li>Dickens uses the character arc of Scrooge - from miser to philanthropist - to argue that <em>individual moral transformation</em> is possible and necessary.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "Dickens wanted to show that Christmas is important." This is far too vague for a Literature essay. Be specific: Dickens wanted to <em>challenge the Malthusian view that the poor were expendable</em>, to <em>expose the moral bankruptcy of laissez-faire capitalism</em>, and to <em>argue that personal generosity could remedy social injustice</em>. Always connect purpose to specific contextual knowledge.</div>

<h3>Sentence Starters for Using Context</h3>
<p>Practise using these phrases to integrate context naturally into your paragraphs:</p>
<ul>
  <li><em>"Dickens, writing in 1843, would have been aware that..."</em></li>
  <li><em>"A contemporary reader would have recognised this as..."</em></li>
  <li><em>"This reflects the prevailing Victorian attitude that..."</em></li>
  <li><em>"Dickens uses [character/event] to challenge the belief that..."</em></li>
  <li><em>"The reference to [specific detail] directly alludes to..."</em></li>
</ul>

<p>Each of these phrases anchors your contextual point to the text, so that it explains the writer's choices rather than standing apart from them. On Paper 2, use them sparingly: context earns no marks of its own in Section A.</p>
`,
      quiz: [
        {
          id: 'edx-lt2-m2-q1',
          question:
            'What was the Poor Law Amendment Act of 1834 designed to do, and how does Scrooge reflect its philosophy?',
          options: [
            "It abolished child labour; Scrooge exploits Bob Cratchit's children",
            'It created harsh workhouses to discourage the poor from seeking help; Scrooge dismisses the poor by asking "And the Union workhouses?"',
            'It introduced free education for all; Scrooge refuses to donate to schools',
            "It banned debtors' prisons; Scrooge threatens to imprison his debtors",
          ],
          correct: 1,
          explanation:
            'The Poor Law Amendment Act created workhouses designed to be so unpleasant that only the truly desperate would enter. Scrooge\'s questions "Are there no prisons?" and "And the Union workhouses?" show he has internalised this cruel philosophy - he sees the workhouse as an adequate solution to poverty.',
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
            'Which of the following uses context most effectively in an analytical sentence?',
          options: [
            '"In Victorian times, there were lots of poor people."',
            '"Dickens wrote A Christmas Carol in 1843."',
            '"Dickens, writing nine years after the Poor Law Amendment Act, uses Scrooge\'s dismissal of the poor to expose how institutional cruelty had been normalised."',
            '"The Victorians celebrated Christmas differently from us today."',
          ],
          correct: 2,
          explanation:
            "The third option integrates a specific date, names the legislation, connects it to a character's behaviour, and explains the effect - all in one sentence. Context used this way explains the writer's choices instead of standing in isolation - though on Paper 2 it earns no marks of its own.",
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
      // 2 October 2026: "I will honour Christmas in my heart, and try to keep it all the year" was
      // called a Stave 5 pledge. Scrooge makes it at his own grave, at the end of Stave Four
      // (held edition, src/data/full-texts/a-christmas-carol.ts); Stave Five shows him keeping it.
      id: 'edx-lt2-m3',
      title: '19th-Century Novel: Character Analysis',
      duration: '55 min',
      content: `
<h2>A Christmas Carol - Character Analysis</h2>

<p>Every character in <em>A Christmas Carol</em> serves a <strong>moral and social purpose</strong>. In the exam, show how characters embody ideas - an argument supported by references, which is what <strong>personal response (AO1)</strong> rewards in part (b).</p>

<h3>Ebenezer Scrooge</h3>

<p>Scrooge's transformation from miser to benefactor is the <strong>structural backbone</strong> of the novella - Dickens's argument that <em>anyone</em> can change, and therefore society itself can be reformed.</p>

<div class="key-term"><strong>Key Term: Redemption Arc</strong> - A narrative pattern in which a morally flawed character undergoes self-discovery and emerges transformed. Scrooge's arc spans all five staves.</div>

<p><strong>Key Quotes:</strong></p>
<ul>
  <li><em>"Oh! But he was a tight-fisted hand at the grind-stone, Scrooge!"</em> - Exclamatory tone establishes him as an extreme figure of avarice.</li>
  <li><em>"Are there no prisons? ... And the Union workhouses?"</em> - Echoes Malthusian economics; reveals callousness toward the poor.</li>
  <li><em>"I will honour Christmas in my heart, and try to keep it all the year."</em> - Made at his own grave in Stave 4, the pledge marks complete moral reversal; Stave 5 shows him keeping it.</li>
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

<div class="examiner-tip"><strong>Top Tip:</strong> Connect each Ghost's supernatural role to Dickens's social message. They are instruments of moral education aimed at Scrooge <em>and</em> the reader.</div>

<h3>Fred &amp; Fezziwig</h3>

<p>Fred is Scrooge's <strong>foil</strong> - warm and generous despite less wealth. Fezziwig and Scrooge represent <strong>two models of capitalism</strong>: Fezziwig spends little yet creates enormous happiness. <em>"The happiness he gives, is quite as great as if it cost a fortune."</em> Employers have a <strong>moral duty</strong> beyond the financial.</p>

<h3>Model Paragraph</h3>

<div class="text-extract">Dickens presents Scrooge's transformation as both personal redemption and social argument. "Solitary as an oyster" suggests he is sealed off from humanity, yet hints at hidden potential. By Stave 5, he "knew how to keep Christmas well, if any man alive possessed the knowledge" - superlative phrasing positions him as a model. If even the most hardened miser can change, so can a society that tolerates poverty.<div class="source">Model paragraph - personal response (AO1) across the novel</div></div>

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

<p>Part (a) of the novel question rewards you for showing how Dickens uses <strong>language, form, and structure</strong> (AO2) to present ideas in the printed extract.</p>

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

<div class="examiner-tip"><strong>Top Tip:</strong> Never write "Dickens uses a simile" and stop. Always push to <em>why</em>: what does the method make the reader think or feel? Link method to theme and context.</div>

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
      // Rewritten 2 October 2026. This module taught the novel question as one 40-mark essay moving
      // between extract and whole text, every paragraph hitting AO1, AO2 and AO3. Pearson sets two
      // parts, marked separately: (a) the extract, AO2 20; (b) the novel as a whole, AO1 20; context
      // (AO3) is not assessed in Section A (see module 1). It also said A Christmas Carol came out
      // in "the year a Parliamentary report exposed child labour in mines": the mines report was
      // 1842; in 1843 Dickens read the commission's second report, on children in trades and
      // manufactures.
      id: 'edx-lt2-m5',
      title: '19th-Century Novel: Extract & Essay Response',
      duration: '55 min',
      content: `
<h2>The Novel Question - Extract, then Essay</h2>

<p>Section A on Edexcel Paper 2 is worth <strong>40 marks</strong>, half the paper. It is <strong>one question in two parts</strong>, each worth 20 marks and each marked on its own:</p>
<ul>
  <li><strong>Part (a)</strong> prints an extract of about 400 words and asks you to explore how the writer presents a theme, character or idea <em>in the extract</em>. It is marked for writer's methods (AO2): close analysis of language, form and structure.</li>
  <li><strong>Part (b)</strong> is an essay on the novel <em>as a whole</em> - its plot, settings, characters or themes. It is marked for personal response (AO1): an informed argument supported by references to the text.</li>
</ul>
<p>Context (AO3) earns no marks in Section A, and spelling, punctuation and grammar (AO4) are not marked on Paper 2.</p>

<div class="key-term"><strong>Key Term: Two-Part Question</strong> - Part (a) is a close reading of the printed passage; part (b) is an argument about the whole novel. Because they are marked separately, for different things, answer each on its own terms.</div>

<h3>Part (a): The Extract (20 marks, AO2)</h3>
<ol>
  <li><strong>Read the extract twice.</strong> First for content, then underline key quotations and note techniques.</li>
  <li><strong>Identify the focus.</strong> Circle the key word - theme (poverty, redemption) or character (Scrooge, the Ghost)?</li>
  <li><strong>Write 3-4 analytical paragraphs,</strong> each built on a short quotation from the extract: name the method, then explain its effect.</li>
</ol>

<h3>Part (b): The Whole Novel (20 marks, AO1)</h3>
<ol>
  <li><strong>Draft a thesis.</strong> E.g. <em>"Dickens uses Scrooge's transformation to argue that compassion is a social duty."</em></li>
  <li><strong>Range across the novel.</strong> Jot three or four moments - opening, middle, ending - to show you know the narrative arc.</li>
  <li><strong>Write an argument,</strong> one moment per paragraph, quoting from memory and returning to your thesis in a short conclusion.</li>
</ol>

<h3>Model Part (a) Paragraph - Grade 8-9</h3>

<div class="text-extract">Dickens presents Scrooge's encounter with the Ghost of Christmas Present as a moral turning point. The imperative "Come in! and know me better, man!" signals warmth, the exclamations and direct address contrasting with the clipped, cold speech Scrooge used to dismiss others. The Ghost's invitation turns a frightening visitation into hospitality, preparing the reader for the change it will bring.<div class="source">Model part (a) paragraph - writer's methods (AO2)</div></div>

<div class="examiner-tip"><strong>Top Tip:</strong> Markers look for a sustained argument, not a set number of paragraphs. The structures above are scaffolds. Quality of analysis always beats quantity.</div>

<h3>Common Mistakes to Avoid</h3>

<div class="common-mistake"><strong>Retelling the Plot:</strong> "Scrooge is visited by three ghosts and then he changes" earns very few marks. Every sentence should analyse <em>how</em> or <em>why</em> the writer makes a choice, not describe <em>what</em> happens.</div>

<div class="common-mistake"><strong>Leaving the Extract in Part (a):</strong> Some students leap straight to the wider novel. Part (a) is marked only on your analysis of the printed passage - it is there for a reason. Save the rest of the novel for part (b).</div>

<div class="common-mistake"><strong>Bolting on Context:</strong> Section A has no marks for context. "This was written in Victorian times when life was hard" adds nothing. Knowing the period can help you explain the text - Dickens wrote <em>A Christmas Carol</em> in 1843, the year he read a Parliamentary report on children's working lives - but use it only where it sharpens your analysis or your argument.</div>
`,
      quiz: [
        {
          id: 'edx-lt2-m5-q1',
          question: 'How many marks is the 19th-century novel question worth on Edexcel Paper 2?',
          options: ['20 marks', '30 marks', '40 marks', '50 marks'],
          correct: 2,
          explanation:
            'The 19th-century novel question is worth 40 marks, half the paper, in two parts of 20: (a) analysis of the printed extract and (b) an essay on the novel as a whole.',
        },
        {
          id: 'edx-lt2-m5-q2',
          question: 'What is part (a) of the novel question marked for?',
          options: [
            'Your knowledge of the whole novel',
            "The writer's methods in the printed extract (AO2)",
            'Context (AO3)',
            'Spelling, punctuation and grammar (AO4)',
          ],
          correct: 1,
          explanation:
            "Part (a) is marked for writer's methods (AO2) alone: how the writer's language, form and structure create meaning in the extract. The whole novel belongs to part (b).",
        },
        {
          id: 'edx-lt2-m5-q3',
          question: 'How many marks does context (AO3) earn in Section A of Paper 2?',
          options: ['None', '4 marks', '5 marks', '10 marks'],
          correct: 0,
          explanation:
            "None. Section A is marked for AO2 in part (a) and AO1 in part (b). Knowing the novel's context can still help you explain the writer's choices, but it earns no marks of its own here; on Paper 2, context is marked only in the anthology poetry comparison.",
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
            'Retelling the plot is one of the most common mistakes. Markers know the story - every sentence should focus on how or why the writer makes a particular choice, not what happens.',
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
      // 9 October 2026: the time-management table gave both comparisons 35 minutes. The
      // 1ET0/02 question paper suggests about 35 for Part 1 and 45 for Part 2.
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

<p>The question paper suggests about <strong>35 minutes</strong> for Part 1 and about <strong>45 minutes</strong> for Part 2, where both poems are new to you. Divide your time like this:</p>

<table>
  <tr><th>Phase</th><th>Part 1</th><th>Part 2</th><th>What to do</th></tr>
  <tr><td>Read &amp; Plan</td><td>7 min</td><td>10 min</td><td>Part 1: read the named poem and the question, choose your second poem, and jot down 3-4 comparison points with a contextual link for each poem. Part 2: read both poems twice, annotate them, and jot down 3-4 comparison points.</td></tr>
  <tr><td>Write</td><td>25 min</td><td>32 min</td><td>Introduction + 3-4 PETER paragraphs + conclusion.</td></tr>
  <tr><td>Review</td><td>3 min</td><td>3 min</td><td>Check that every paragraph compares both poems. Fix any missing connectives or unclear analysis.</td></tr>
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
            'According to the recommended timing, how long should you spend writing the Part 1 anthology comparison (excluding reading and review)?',
          options: ['20 minutes', '25 minutes', '30 minutes', '35 minutes'],
          correct: 1,
          explanation:
            'The recommended writing phase for Part 1 is 25 of its 35 minutes, with 7 minutes for reading and planning and 3 for reviewing. Part 2, on two unseen poems, has about 45 minutes, so its writing phase is longer.',
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
      // 9 October 2026: the timing table gave Section A 60 minutes, each poetry comparison 35
      // and a 5-minute final review, and said Pearson sets only the total. The 1ET0/02
      // question paper says about 55 on Section A, divided equally between (a) and (b), 35 on
      // Section B Part 1 and 45 on Part 2: all 135 minutes. Quiz question 2 follows.
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
  <tr><td>A (a)</td><td>The extract</td><td>20</td><td>27 min</td><td>4 min read and annotate, 21 min write, 2 min check</td></tr>
  <tr><td>A (b)</td><td>The novel as a whole</td><td>20</td><td>28 min</td><td>4 min plan, 22 min write, 2 min check</td></tr>
  <tr><td>B Part 1</td><td>Anthology comparison (named poem + one of your choice)</td><td>20</td><td>35 min</td><td>7 min read and plan, 25 min write, 3 min check</td></tr>
  <tr><td>B Part 2</td><td>Unseen comparison (two unseen poems)</td><td>20</td><td>45 min</td><td>10 min read both poems twice and plan, 32 min write, 3 min check</td></tr>
</table>

<p>This totals <strong>135 minutes</strong> - exactly the time available. The split is the question paper's own: about 55 minutes on Section A, divided equally between its parts, 35 on Section B Part 1 and 45 on Section B Part 2, where both poems are new to you. There is no spare time built in, which is why discipline with the plan is critical.</p>

<div class="examiner-tip"><strong>Top Tip:</strong> Wear a watch or position yourself to see a clock. Write your target finish times at the top of each section before you begin. For example, for a 9:00 start: "Extract - 9:27. Whole novel - 9:55. Anthology comparison - 10:30. Unseen comparison - 11:15."</div>

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
  <li>In the last few minutes of each section: re-read that answer. Fix slips, add missing connectives, and check that every paragraph includes analysis - not just quotation.</li>
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
          options: ['3 minutes', '5 minutes', '10 minutes', '15 minutes'],
          correct: 2,
          explanation:
            "The recommended plan allocates 10 of Part 2's 45 minutes to reading both unseen poems twice, annotating them, and planning your comparison points before you begin writing.",
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
          options: [
            'Quotation flash cards',
            'Theme grids',
            'Timed practice',
            'Quotation reduction',
          ],
          correct: 1,
          explanation:
            'Theme grids list poems along one axis and themes along the other, allowing you to quickly identify comparison pairs for any theme the exam might ask about.',
        },
      ],
    },
  ],
  assessmentQuestions: [
    {
      id: 'edx-lt2-a1',
      question: 'How long is Edexcel Literature Paper 2?',
      options: ['1 hour 45 minutes', '2 hours', '2 hours 15 minutes', '2 hours 30 minutes'],
      correct: 2,
      explanation:
        'Paper 2 is 2 hours 15 minutes (135 minutes), covering the 19th-century novel, a comparison of two anthology poems and a comparison of two unseen poems.',
    },
    {
      id: 'edx-lt2-a2',
      question: 'What was the Poor Law Amendment Act of 1834 designed to do?',
      options: [
        'Abolish child labour',
        'Create harsh workhouses to discourage the poor from seeking help',
        'Introduce free education',
        "Ban debtors' prisons",
      ],
      correct: 1,
      explanation:
        'The Act created workhouses designed to be so unpleasant that only the truly desperate would enter. Scrooge\'s questions "Are there no prisons?" and "And the Union workhouses?" show he has internalised this cruel philosophy.',
    },
    {
      id: 'edx-lt2-a3',
      question: 'What does the simile "solitary as an oyster" suggest about Scrooge?',
      options: [
        'He is physically small',
        'He is hard-shelled and closed off, yet contains hidden potential',
        'He lives near the sea',
        'He is slow-moving and lazy',
      ],
      correct: 1,
      explanation:
        "The oyster simile conveys Scrooge's hard exterior and isolation. However, oysters contain pearls, hinting at the goodness hidden within him that the Ghosts will bring to the surface.",
    },
    {
      id: 'edx-lt2-a4',
      question: 'Why does Dickens call his chapters "staves" rather than "chapters"?',
      options: [
        'To make the novella seem longer',
        'Because "stave" means "ghost" in Victorian English',
        'Because a stave is a musical term, reinforcing that the novella is a carol',
        'To confuse the reader',
      ],
      correct: 2,
      explanation:
        'A "stave" is a set of lines in music. Dickens reinforces the title \u2014 the text is a carol, a song of joy \u2014 and the structure mirrors the journey from discord to harmony.',
    },
    {
      id: 'edx-lt2-a5',
      question: 'How many marks is the 19th-century novel question worth on Paper 2?',
      options: ['20 marks', '30 marks', '40 marks', '50 marks'],
      correct: 2,
      explanation:
        'Section A, the novel, is worth 40 marks, half the paper, in two parts of 20: (a) exploring the printed extract and (b) an essay on the novel as a whole.',
    },
    {
      id: 'edx-lt2-a6',
      question: 'In the SMILE framework for poetry, what does the "I" stand for?',
      options: ['Intention', 'Imagery', 'Interpretation', 'Irony'],
      correct: 1,
      explanation:
        'The "I" stands for Imagery \u2014 identifying similes, metaphors, personification, and symbols the poet uses to create vivid pictures and convey meaning.',
    },
    {
      id: 'edx-lt2-a7',
      question: 'What does AO2 require you to analyse in poetry?',
      options: [
        "The poet's biography",
        'Language, form and structure and their effects on meaning',
        'Historical context only',
        'Your personal feelings about the poem',
      ],
      correct: 1,
      explanation:
        "Writer's methods (AO2) focuses on analysing how writers use language, form and structure to create meanings and effects. It is the key skill tested in the poetry questions.",
    },
    {
      id: 'edx-lt2-a8',
      question: 'What does "integrated comparison" mean in a poetry essay?',
      options: [
        'Writing about Poem A then Poem B separately',
        'Discussing both poems within the same paragraphs, moving between them fluidly',
        'Analysing only shared techniques',
        'Quoting from both poems in your introduction only',
      ],
      correct: 1,
      explanation:
        'An integrated comparison discusses both poems within each paragraph, weaving between them with comparative vocabulary \u2014 not two separate mini-essays.',
    },
    {
      id: 'edx-lt2-a9',
      question: 'What does the R in the PETER comparison framework stand for?',
      options: ['Repetition', 'Response / Comparison', 'Review', 'Reference to context'],
      correct: 1,
      explanation:
        'R stands for Response / Comparison \u2014 the crucial step where you draw both poems together and make an explicit comparative judgement about their effects or approaches.',
    },
    {
      id: 'edx-lt2-a10',
      question: 'What is the most common timing mistake on Paper 2?',
      options: [
        'Spending too long on the anthology comparison',
        'Spending too long on the novel and rushing the poetry',
        'Spending too long on the comparison',
        'Spending too long reading the unseen poems',
      ],
      correct: 1,
      explanation:
        'The novel (40 marks) tempts students to overwrite, but the two poetry questions are also worth 40 marks combined. Keep Section A to about an hour.',
    },
    {
      id: 'edx-lt2-a11',
      question: 'What narrative function does Tiny Tim serve in A Christmas Carol?',
      options: [
        'Comic relief',
        'A symbol of innocence whose fate exposes the consequences of social neglect',
        'A plot device for conflict with Scrooge',
        "A representation of Scrooge's childhood",
      ],
      correct: 1,
      explanation:
        "Tiny Tim is a symbol of innocence and consequence. His potential death makes both Scrooge and the reader complicit in poverty's toll \u2014 Dickens's most emotionally compelling argument.",
    },
    {
      id: 'edx-lt2-a12',
      question: 'Can you take the poetry anthology into the Paper 2 exam?',
      options: [
        'Yes, a clean copy is provided for Section B',
        'Yes, your own annotated copy',
        'No: the paper is closed book, and prints only the named poem and the two unseen poems',
        'Only for Section B Part 2',
      ],
      correct: 2,
      explanation:
        'Paper 2 is closed book: texts are not allowed in the exam. In Section B Part 1 the named poem is printed on the paper, and you quote your second poem from memory; Part 2 prints the two unseen poems.',
    },
  ],
}

export const edexcelLitCourses: CourseData[] = [edexcelLitPaper1, edexcelLitPaper2]
