// @ts-nocheck
import type { CourseData } from './courses';

const edexcelLitPaper1: CourseData = {
  id: 'edexcel-lit-paper1',
  title: 'Edexcel GCSE English Literature \u2013 Paper 1',
  subtitle: 'Shakespeare & Post-1914 Literature',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: '1ET2',
  specCode: '1ET2/01',
  price: 0,
  duration: '14 weeks',
  level: 'GCSE (Years 10-11)',
  description: 'Master Edexcel Literature Paper 1: Shakespeare (Macbeth) and Post-1914 Literature (An Inspector Calls). Extract-based responses with context, character analysis, and writer\'s methods.',
  color: '#e11d48',
  moduleList: [
// ──────────────────────────────────────────────
  // MODULE 1 — Paper 1 Overview & what markers look for
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m1',
    title: 'Paper 1 Overview & what markers look for',
    duration: '45 min',
    content: `
<h2>Edexcel GCSE English Literature — Paper 1</h2>

<p>Paper 1 is titled <strong>Shakespeare and Post-1914 Literature</strong>. It is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of the total GCSE. You have <strong>1 hour and 45 minutes</strong> to complete two sections, each worth equal marks.</p>

<div class="key-term"><strong>Key Term: Extract-Based Question</strong> — A question that prints a passage from the studied text and asks you to use it as a starting point for your response. You must refer to the extract <em>and</em> the wider text in your answer.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A — Shakespeare (40 marks):</strong> One extract-based essay on your studied Shakespeare play. You are given a passage and a question that asks you to explore a theme, character, or idea within the extract and the play as a whole.</li>
  <li><strong>Section B — Post-1914 Literature (40 marks):</strong> One extract-based essay on your studied post-1914 text. The same format applies — respond to the printed extract and then range across the wider text.</li>
</ul>

<h3>what markers look for</h3>
<p>Four AOs are tested across Paper 1, but they carry different weight depending on the section:</p>
<ul>
  <li><strong>Personal response (AO1)</strong> — Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations.</li>
  <li><strong>Writer's methods (AO2)</strong> — Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.</li>
  <li><strong>Context (AO3)</strong> — Show understanding of the relationships between texts and the contexts in which they were written.</li>
  <li><strong>Technical accuracy (AO4)</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. <em>This is assessed on one essay only</em> (typically the Shakespeare section) and is worth up to 4 marks.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Technical accuracy (AO4) marks are easy to lose through carelessness. Because they are only assessed on one essay, every spelling slip and missing full stop in that response costs you. Leave two minutes at the end of your Shakespeare essay purely for proofreading.</div>

<h3>How Marks Break Down</h3>
<p>Each 40-mark section is typically weighted as follows:</p>
<ul>
  <li><strong>Personal response (AO1):</strong> approximately 15 marks per section — rewarding your ideas and use of references.</li>
  <li><strong>Writer's methods (AO2):</strong> approximately 15 marks per section — rewarding analysis of the writer's craft.</li>
  <li><strong>Context (AO3):</strong> approximately 10 marks per section — rewarding contextual understanding.</li>
  <li><strong>Technical accuracy (AO4):</strong> up to 4 additional marks on the Shakespeare essay only.</li>
</ul>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0–5 min:</strong> Read the Shakespeare extract carefully. Annotate key words, literary devices and contextual links.</li>
  <li><strong>5–50 min:</strong> Write your Shakespeare essay (40 marks + 4 SPaG marks). Spend roughly 5 minutes planning and 40 minutes writing.</li>
  <li><strong>50–55 min:</strong> Read the Post-1914 extract. Annotate in the same way.</li>
  <li><strong>55–95 min:</strong> Write your Post-1914 essay (40 marks). Again, 5 minutes planning and 35 minutes writing.</li>
  <li><strong>95–105 min:</strong> Review both essays. Prioritise checking the Shakespeare response for technical accuracy (AO4).</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing only about the printed extract and ignoring the wider text. Both sections ask you to use the extract as a <em>starting point</em>. At least a third of your essay should discuss moments, themes, or character development from elsewhere in the text, otherwise you cannot access the top mark bands.</div>

<h3>What "Top Band" Responses Look Like</h3>
<p>Markers describe the highest-level answers as <strong>critical, exploratory</strong> responses that:</p>
<ul>
  <li>Offer a <strong>conceptualised</strong> argument — not just a list of points, but an overarching thesis.</li>
  <li>Analyse the writer's methods using precise subject terminology (e.g. <em>soliloquy</em>, <em>dramatic irony</em>, <em>motif</em>).</li>
  <li>Embed context so that it illuminates meaning rather than appearing as a separate paragraph.</li>
  <li>Use <strong>judiciously selected</strong> quotations — short, punchy references woven into sentences.</li>
</ul>

<div class="key-term"><strong>Key Term: Conceptualised Response</strong> — An essay built around a central argument or interpretation, rather than working through the extract line by line. For example, arguing that Lady Macbeth's apparent strength is Shakespeare's device for exploring the destructive nature of unchecked ambition.</div>
`,
    quiz: [
      {
        id: 'edx-lt1-m1-q1',
        question:
          'How long do students have to complete Edexcel English Literature Paper 1?',
        options: [
          '1 hour 30 minutes',
          '1 hour 45 minutes',
          '2 hours',
          '2 hours 15 minutes',
        ],
        correct: 1,
        explanation:
          'Paper 1 is 1 hour and 45 minutes long. This must be split carefully between the Shakespeare section (approximately 50 minutes) and the Post-1914 Literature section (approximately 50 minutes), with 5 minutes for review.',
      },
      {
        id: 'edx-lt1-m1-q2',
        question:
          'Which what markers look for tests spelling, punctuation and grammar (SPaG)?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 3,
        explanation:
          'Technical accuracy (AO4) assesses SPaG and is worth up to 4 additional marks. It is tested on one essay only — typically the Shakespeare response.',
      },
      {
        id: 'edx-lt1-m1-q3',
        question:
          'What does it mean that both Paper 1 questions are "extract-based"?',
        options: [
          'You must only write about the printed extract',
          'You are given a passage as a starting point but must also discuss the wider text',
          'You choose your own extract to write about',
          'The question prints two extracts for comparison',
        ],
        correct: 1,
        explanation:
          'Extract-based means a passage is printed for you to use as a starting point. You must analyse the extract and then range across the wider text to access the higher mark bands.',
      },
      {
        id: 'edx-lt1-m1-q4',
        question:
          'How many marks is each section of Paper 1 worth?',
        options: [
          '20 marks each',
          '30 marks each',
          '40 marks each',
          '50 marks each',
        ],
        correct: 2,
        explanation:
          'Each section — Shakespeare (Section A) and Post-1914 Literature (Section B) — is worth 40 marks, giving a total of 80 marks for the whole paper.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Shakespeare: Themes & Context (Macbeth Focus)
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m2',
    title: 'Shakespeare: Themes & Context (Macbeth Focus)',
    duration: '55 min',
    content: `
<h2>Macbeth — Themes &amp; Jacobean Context</h2>

<p><em>Macbeth</em> is the most widely studied Shakespeare text for Edexcel GCSE English Literature. This module maps the play's <strong>seven major themes</strong> onto the historical context you need for context (AO3) — and shows you how to weave context into your analysis without "bolting it on".</p>

<div class="key-term"><strong>Key Term: Jacobean</strong> — Relating to the reign of King James I of England (1603–1625). <em>Macbeth</em> was written c. 1606, shortly after James came to the throne. Understanding Jacobean beliefs and politics is essential for context (AO3).</div>

<h3>The Seven Key Themes</h3>

<h4>1. Ambition</h4>
<p>Ambition is the engine of the play. Macbeth's desire for the crown, stoked by the witches' prophecy and Lady Macbeth's goading, drives every act of violence that follows.</p>
<div class="text-extract">"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th'other."<div class="source">Act 1, Scene 7</div></div>
<p>Here Macbeth acknowledges that his sole motivation is ambition — and the verb <strong>"o'erleaps"</strong> foreshadows his downfall, suggesting ambition that exceeds its proper bounds will inevitably collapse.</p>

<h4>2. Power &amp; Corruption</h4>
<p>Shakespeare presents power as inherently corrupting. Macbeth moves from loyal thane to tyrannical king; the more power he gains, the more paranoid and violent he becomes.</p>
<div class="text-extract">"For mine own good, / All causes shall give way."<div class="source">Act 3, Scene 4</div></div>

<h4>3. Guilt &amp; Conscience</h4>
<p>Guilt manifests physically: Macbeth sees a phantom dagger, hears voices, and is haunted by Banquo's ghost. Lady Macbeth sleepwalks, compulsively washing imaginary blood from her hands.</p>
<div class="text-extract">"Will all great Neptune's ocean wash this blood / Clean from my hand?"<div class="source">Act 2, Scene 2</div></div>
<p>The hyperbole of <strong>"all great Neptune's ocean"</strong> conveys that Macbeth's guilt is cosmic in scale — no physical act can undo a moral transgression.</p>

<h4>4. The Supernatural</h4>
<p>The witches, the floating dagger, Banquo's ghost and the apparitions all blur the line between reality and the demonic. A Jacobean audience would have taken witchcraft seriously — James I himself wrote <em>Daemonologie</em> (1597).</p>
<div class="text-extract">"Fair is foul, and foul is fair."<div class="source">Act 1, Scene 1</div></div>

<h4>5. Masculinity</h4>
<p>Lady Macbeth weaponises gender to manipulate her husband, questioning his manhood whenever he hesitates. Shakespeare interrogates what it truly means to be "manly" — is it ruthlessness, or moral courage?</p>
<div class="text-extract">"When you durst do it, then you were a man."<div class="source">Act 1, Scene 7</div></div>

<h4>6. Appearance vs Reality</h4>
<p>Deception saturates the play. Duncan calls Macbeth's castle "pleasant"; Macbeth plays the loyal host while planning regicide. The motif is crystallised by Lady Macbeth's instruction:</p>
<div class="text-extract">"Look like th'innocent flower, / But be the serpent under't."<div class="source">Act 1, Scene 5</div></div>

<h4>7. Fate vs Free Will</h4>
<p>Do the witches cause Macbeth's actions, or merely reveal what he already desired? This ambiguity is central to Shakespeare's design and gives you a rich line of argument for personal response (AO1).</p>

<div class="examiner-tip"><strong>Top Tip:</strong> The strongest responses treat themes as <em>interconnected</em>. For example, link ambition to masculinity — Lady Macbeth equates manliness with murderous ambition, which shows how toxic definitions of masculinity fuel the play's violence.</div>

<h3>Historical Context for the Context Skill (AO3)</h3>
<ul>
  <li><strong>James I &amp; the Divine Right of Kings:</strong> James believed monarchs were appointed by God. Killing a king (regicide) was therefore not just treason but a sin against the divine order. This makes Duncan's murder doubly horrifying to a Jacobean audience.</li>
  <li><strong>The Gunpowder Plot (1605):</strong> The failed Catholic conspiracy to blow up Parliament occurred just a year before <em>Macbeth</em> was written. Themes of treason, hidden plots, and divine punishment would have resonated powerfully.</li>
  <li><strong>The Great Chain of Being:</strong> Elizabethan and Jacobean society believed in a strict natural hierarchy — God, king, nobles, commoners. Macbeth's regicide disrupts this chain, and nature itself responds with storms and unnatural events.</li>
  <li><strong>Witch Trials:</strong> Between 1560 and 1700 thousands of people (mostly women) were tried and executed for witchcraft across Britain. James I's <em>Daemonologie</em> fuelled persecutions. The witches in <em>Macbeth</em> tapped directly into contemporary fears.</li>
</ul>

<div class="key-term"><strong>Key Term: The Great Chain of Being</strong> — A Jacobean belief that all of creation existed in a fixed, divinely ordained hierarchy. Disrupting this order — for example, by killing a king — was thought to cause chaos in nature itself.</div>

<h3>Embedding Context — Not Bolting It On</h3>
<p>A common weakness in GCSE essays is writing a detached paragraph of context that does not connect to the text. Instead, <strong>embed</strong> context into your analysis:</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "In Jacobean times people believed in witches. James I wrote a book about them." as a stand-alone sentence with no link to the text. This is "bolted-on" context and will not score highly for context (AO3).</div>

<p><strong>Weak:</strong> "In Jacobean times, people believed in the Divine Right of Kings. Macbeth kills Duncan."</p>
<p><strong>Strong:</strong> "Shakespeare makes Duncan's murder especially transgressive for a Jacobean audience who believed in the Divine Right of Kings — by killing God's appointed ruler, Macbeth does not merely commit treason but violates the sacred order, which is why nature itself convulses in response."</p>
<p>Notice how the strong version fuses the contextual point (Divine Right) with the text's events and effects in a single flowing sentence.</p>

<h3>Key Quotation Bank</h3>
<p>Memorise these short, versatile quotations. Each can be used across multiple themes:</p>
<ol>
  <li><strong>"Stars, hide your fires; / Let not light see my black and deep desires"</strong> (Act 1, Scene 4) — ambition, appearance vs reality.</li>
  <li><strong>"Full of scorpions is my mind"</strong> (Act 3, Scene 2) — guilt, psychological torment, power corrupting.</li>
  <li><strong>"Out, damned spot!"</strong> (Act 5, Scene 1) — guilt, supernatural, the inescapability of conscience.</li>
  <li><strong>"Is this a dagger which I see before me?"</strong> (Act 2, Scene 1) — supernatural, guilt, fate vs free will.</li>
  <li><strong>"Unsex me here"</strong> (Act 1, Scene 5) — masculinity, supernatural, ambition.</li>
  <li><strong>"By the pricking of my thumbs, / Something wicked this way comes"</strong> (Act 4, Scene 1) — supernatural, moral decline: even the witches now call Macbeth "wicked".</li>
</ol>
`,
    quiz: [
      {
        id: 'edx-lt1-m2-q1',
        question:
          'What does "Jacobean" refer to in the context of Macbeth?',
        options: [
          'The Elizabethan period under Queen Elizabeth I',
          'The reign of King James I (1603–1625)',
          'The medieval period before the Tudors',
          'The Restoration period under Charles II',
        ],
        correct: 1,
        explanation:
          'Jacobean relates to the reign of James I. Macbeth was written c. 1606, early in James\'s rule, and reflects his interests in witchcraft, kingship, and the divine right of monarchs.',
      },
      {
        id: 'edx-lt1-m2-q2',
        question:
          'Why would Duncan\'s murder have been particularly shocking to a Jacobean audience?',
        options: [
          'Because Duncan was a popular character in earlier plays',
          'Because the Jacobean audience believed in the Divine Right of Kings, making regicide a sin against God',
          'Because murder was not commonly depicted on stage at the time',
          'Because Duncan was based on a real English king',
        ],
        correct: 1,
        explanation:
          'The Divine Right of Kings held that monarchs were appointed by God. Killing a king was not merely treason but a violation of the sacred, divinely ordained order — making it deeply transgressive for a Jacobean audience.',
      },
      {
        id: 'edx-lt1-m2-q3',
        question:
          'Which quotation best illustrates the theme of guilt in Macbeth?',
        options: [
          '"Fair is foul, and foul is fair"',
          '"Look like th\'innocent flower, but be the serpent under\'t"',
          '"Will all great Neptune\'s ocean wash this blood clean from my hand?"',
          '"When you durst do it, then you were a man"',
        ],
        correct: 2,
        explanation:
          'Macbeth\'s rhetorical question about Neptune\'s ocean conveys the overwhelming, cosmic scale of his guilt — no amount of water can cleanse the moral stain of murder.',
      },
      {
        id: 'edx-lt1-m2-q4',
        question:
          'What is "bolted-on" context, and why should you avoid it?',
        options: [
          'Context placed at the end of an essay for emphasis — it is fine to use',
          'A detached statement of historical fact with no link to the text — it scores poorly for context (AO3)',
          'Using too many quotations instead of context — it is penalised under writer\'s methods (AO2)',
          'Referring to a different Shakespeare play for comparison — it is irrelevant',
        ],
        correct: 1,
        explanation:
          'Bolted-on context means dropping in a historical fact (e.g. "James I believed in witches") without connecting it to the text\'s language, themes, or effects. To score well for context (AO3), you must embed context into your analysis.',
      },
      {
        id: 'edx-lt1-m2-q5',
        question:
          'Which historical event, occurring just a year before Macbeth was written, intensified the play\'s themes of treason and hidden plots?',
        options: [
          'The English Civil War',
          'The Spanish Armada',
          'The Gunpowder Plot of 1605',
          'The Act of Union 1707',
        ],
        correct: 2,
        explanation:
          'The Gunpowder Plot (1605) was a failed conspiracy to blow up Parliament. It occurred just before Macbeth was written (c. 1606), making the play\'s themes of treason, concealment, and divine retribution especially topical.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 3 — Shakespeare: Character Analysis & Development
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m3',
    title: 'Shakespeare: Character Analysis & Development',
    duration: '55 min',
    content: `
<h2>Character Analysis &amp; Development in <em>Macbeth</em></h2>

<p>For the Shakespeare question on Paper 1, go beyond describing what a character does — explain <em>how</em> Shakespeare constructs them (writer's methods, AO2) and <em>why</em> they matter thematically and contextually (context, AO3).</p>

<div class="key-term"><strong>Key Term: Character Arc</strong> — The transformation a character undergoes across a text. In tragedy, the protagonist's arc traces a rise followed by a catastrophic fall.</div>

<h3>Major Character Arcs</h3>

<h4>Macbeth</h4>
<ul>
  <li><strong>Brave warrior</strong> — Praised as "brave Macbeth" who "unseamed" the rebel "from the nave to the chops" (Act 1).</li>
  <li><strong>Ambitious but conflicted</strong> — His Act 1 Scene 7 soliloquy reveals moral horror at regicide yet inability to resist power.</li>
  <li><strong>Tyrant</strong> — Orders Banquo's and Macduff's family's murders; becomes isolated and paranoid.</li>
  <li><strong>Desperate</strong> — The nihilistic "Tomorrow and tomorrow" soliloquy (Act 5) shows fatalistic defiance.</li>
</ul>
<p><strong>Key quote:</strong> <em>"I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er."</em> — Blood as a metaphor for moral entrapment beyond the point of no return.</p>

<h4>Lady Macbeth</h4>
<ul>
  <li><strong>Ambitious</strong> — Calls on spirits to "unsex me here" (Act 1 Scene 5), rejecting femininity for power.</li>
  <li><strong>Controlling</strong> — Goads Macbeth: "When you durst do it, then you were a man."</li>
  <li><strong>Guilt-ridden</strong> — Struggles to manage Macbeth's breakdown at the banquet (Act 3 Scene 4).</li>
  <li><strong>Mad</strong> — Sleepwalking scene: "Out, damned spot!" (Act 5 Scene 1). Death reported off-stage.</li>
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
  <li><strong>Macbeth's regicide</strong> violated the divine right of kings — a belief James I held deeply.</li>
  <li><strong>Lady Macbeth's ambition</strong> transgressed expected female roles, reinforcing fears about unnatural female influence.</li>
  <li><strong>Banquo's lineage</strong> was believed to lead to James I, so his nobility was politically significant.</li>
</ul>

<h3>Quotation Bank: Macbeth's Deterioration with Analysis</h3>
<div class="text-extract">
<strong>Act 1, Scene 2 (Warrior):</strong> "For brave Macbeth — well he deserves that name" — Initial heroism and martial honour.<br><br>
<strong>Act 1, Scene 7 (Conflicted):</strong> "I have no spur / To prick the sides of my intent, but only / Vaulting ambition" — Awareness of moral transgression; inability to resist. "Vaulting" suggests ambition overleaping proper bounds.<br><br>
<strong>Act 2, Scene 2 (Guilt):</strong> "Will all great Neptune's ocean wash this blood / Clean from my hand?" — Hyperbole conveys guilt as cosmic, indelible. No physical act can undo moral transgression.<br><br>
<strong>Act 3, Scene 2 (Isolation):</strong> "We have scotch'd the snake, not kill'd it" — Paranoia. Macbeth recognises that Banquo remains a threat, forcing further murders.<br><br>
<strong>Act 5, Scene 5 (Despair):</strong> "To-morrow, and to-morrow, and to-morrow, / Creeps in this petty pace from day to day" — Nihilism. Meaning dissolves; life becomes meaningless repetition.
</div>

<div class="grade-9-insight"><strong>Grade 9 Insight:</strong> Trace a single image's evolution across the entire play. Blood begins as honour ("brave Macbeth"), becomes transgression (Duncan's murder), then guilt ("Will all great Neptune's ocean wash this blood / Clean from my hand?"), and finally numbness ("Out, damned spot!" in Lady Macbeth's mad scene). This unified analysis demonstrates sophisticated writer's methods (AO2) understanding and conceptual mastery of the play's psychological arc.</div>

<h3>Worked Example: Lady Macbeth's Transgression</h3>
<p><strong>Extract:</strong> "Come, you spirits / That tend on mortal thoughts, unsex me here"</p>
<div class="text-extract">
<strong>Analysis:</strong> The imperative "Come" shows Lady Macbeth actively summoning supernatural forces — she is not passive but drives her own ambition. "Unsex me" is particularly transgressive for a Jacobean audience: she explicitly rejects femininity as weakness, calling for masculine ruthlessness instead. The verb "tend" positions spirits as servants to her will, suggesting her desire supersedes natural order. For a Jacobean audience conditioned to believe women should be obedient and nurturing, this rejection of gender itself was alarming. The witch trials of the era and fears of female autonomy make this speech especially provocative. Shakespeare's point: ambition that rejects natural constraints (gender, conscience, loyalty) inevitably leads to madness and destruction, as Lady Macbeth's sleepwalking later proves.
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
<td style="padding: 6px;">Shakespeare presents Lady Macbeth's descent into madness as poetic justice — her conscious rejection of conscience in Act 1 leads inevitably to its violent eruption in her sleepwalking. The return of repressed guilt becomes irresistible.</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;">Banquo is loyal and doesn't kill the king.</td>
<td style="padding: 6px;">Shakespeare positions Banquo as a moral foil to Macbeth, resisting supernatural temptation through prayer and conscience. This emphasises Macbeth's free choice to transgress, not mere fate.</td>
</tr>
</table>

<h3>Model Answer: Full Grade 8–9 Paragraph on Character Development</h3>
<div class="text-extract">
<strong>Sample Question:</strong> "Explore how Shakespeare presents Macbeth's change from loyal warrior to paranoid tyrant."<br><br>
<strong>Model Response (c. 280 words):</strong> Shakespeare's presentation of Macbeth's moral descent is central to the tragedy's exploration of ambition's corrupting nature. In Act 1 Scene 2, the bleeding sergeant hails "brave Macbeth," establishing him as a loyal warrior whose violence serves rightful order — blood here symbolises martial honour. Yet by Act 1 Scene 7, Macbeth's soliloquy reveals internal fracture: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition." The noun "spur" traditionally signified duty or honour, but Macbeth finds only "ambition" — selfish desire divorced from legitimate cause. The verb "vaulting" (arching, overleaping) suggests ambition that exceeds its proper bounds and will inevitably collapse, foreshadowing his downfall. Lady Macbeth's manipulation — "When you durst do it, then you were a man" — weaponises masculinity against him, forcing the murder. Following Duncan's death, blood's imagery inverts. The hyperbolic "Will all great Neptune's ocean wash this blood / Clean from my hand?" reveals Macbeth's recognition that moral transgression cannot be undone by physical action. This psychological unraveling accelerates through Acts 3–5. By Act 3, Macbeth orders further murders to feel secure ("We have scotch'd the snake, not kill'd it"), revealing paranoia and moral numbness. The Act 5 soliloquy sees meaning itself dissolve: "To-morrow, and to-morrow, and to-morrow." Shakespeare's arc demonstrates that unchecked ambition doesn't elevate; it destroys, leaving the protagonist isolated and nihilistic. For a Jacobean audience steeped in the divine right of kings, Macbeth's fall would serve as a cosmic warning: those who violate God's ordained order face not mere earthly punishment but psychological annihilation.
<div class="source">Grade 8–9 exemplar: ~320 words integrating personal response (AO1), writer's methods (AO2, language analysis of "vaulting," "spur," hyperbole), and context (AO3, divine right)</div>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as real people. Avoid "Macbeth feels angry" — instead write "Shakespeare presents Macbeth as consumed by paranoia, reflecting the consequences of tyranny."</div>
`,
    quiz: [
      {
        id: 'edx-lt1-m3-q1',
        question:
          'Which phrase best demonstrates writer\'s methods (AO2)-focused writing about character?',
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
        question:
          'What is the correct order of Macbeth\'s character arc?',
        options: [
          'Tyrant → warrior → desperate → conflicted',
          'Brave warrior → ambitious but conflicted → tyrant → desperate and fatalistic',
          'Ambitious → brave → guilty → mad',
          'Loyal thane → conflicted king → tyrannical ruler → ghost',
        ],
        correct: 1,
        explanation:
          'Macbeth\'s arc moves from brave warrior, through ambition and moral conflict, into tyranny, and finally into fatalistic despair — a classic tragic trajectory.',
      },
      {
        id: 'edx-lt1-m3-q3',
        question:
          'Why would a Jacobean audience have found Lady Macbeth\'s behaviour particularly shocking?',
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
        question:
          'What dramatic function does Banquo\'s ghost serve at the banquet?',
        options: [
          'It proves that the supernatural is real in the world of the play',
          'It acts as a physical manifestation of Macbeth\'s guilt and the inescapability of his crimes',
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
  // MODULE 4 — Shakespeare: Language, Form & Structure
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m4',
    title: 'Shakespeare: Language, Form & Structure',
    duration: '55 min',
    content: `
<h2>Language, Form &amp; Structure in <em>Macbeth</em></h2>

<p>Writer's methods (AO2) requires you to analyse <em>how</em> writers use language and structure to achieve effects — not just what is said, but how and why.</p>

<div class="key-term"><strong>Key Term: Writer's Methods</strong> — Deliberate choices in language, form and structure to shape meaning: verse form, imagery, soliloquy, dramatic irony, structural patterning.</div>

<h3>Language</h3>

<h4>Iambic Pentameter &amp; When It Breaks</h4>
<p><strong>Iambic pentameter</strong> (da-DUM x5) creates rhythm linked to order. When it <strong>breaks</strong>, it signals disorder. The witches' <strong>trochaic tetrameter</strong> ("Double, double, toil and trouble") reverses the stress, creating an eerie chant.</p>

<h4>Prose vs Verse</h4>
<p><strong>Verse</strong> is for noble characters; <strong>prose</strong> for lower status or loss of control. Lady Macbeth's sleepwalking scene shifts to prose, signalling her fractured mind.</p>

<h4>Imagery Patterns</h4>
<ul>
  <li><strong>Blood</strong> — Bravery to guilt to entrapment: "Will all great Neptune's ocean wash this blood / Clean from my hand?"</li>
  <li><strong>Darkness</strong> — Evil and concealment: "thick night", "hide your fires."</li>
  <li><strong>Clothing</strong> — Ill-fitting garments symbolise stolen titles: "like our strange garments."</li>
</ul>

<h4>Soliloquies and Dramatic Irony</h4>
<p><strong>Soliloquies</strong> reveal inner thoughts — Macbeth's chart his disintegration. <strong>Dramatic irony:</strong> Duncan praises the castle while the audience knows murder awaits.</p>

<h3>Form: Tragedy Conventions</h3>
<ul>
  <li><strong>Tragic hero</strong> with <em>hamartia</em> (fatal flaw) — Macbeth's "vaulting ambition."</li>
  <li><strong>Peripeteia</strong> — Rise to king, fall to tyrant and death.</li>
  <li><strong>Anagnorisis</strong> — "Tomorrow and tomorrow" — bleak recognition.</li>
  <li><strong>Catharsis</strong> — Emotional release as Malcolm restores order.</li>
</ul>

<h3>Structure</h3>
<ul>
  <li><strong>Five-act structure:</strong> Exposition (Act 1) → Rising action (Act 2) → Climax (Act 3) → Falling action (Act 4) → Resolution (Act 5).</li>
  <li><strong>Parallel scenes:</strong> Opening battle mirrors the final battle — Macbeth moves from hero to villain.</li>
  <li><strong>Juxtaposition:</strong> Banquo and Macbeth hear the same prophecy; opposing reactions highlight personal choice.</li>
  <li><strong>Asides:</strong> Macbeth's aside (Act 1 Scene 3) reveals secret ambition, drawing the audience into complicity.</li>
</ul>

<h3>Analysing an Extract: WHAT–HOW–WHY</h3>
<ol>
  <li><strong>WHAT</strong> — What is happening?</li>
  <li><strong>HOW</strong> — What techniques does Shakespeare use? Quote precisely.</li>
  <li><strong>WHY</strong> — What effect on the audience? How does it connect to themes and context?</li>
</ol>

<div class="text-extract"><strong>Act 1 Scene 7:</strong> "If it were done when 'tis done, then 'twere well / It were done quickly."
<ul>
  <li><strong>Language:</strong> Repetition of "done" creates stuttering obsession — tangled syntax betrays uncertainty.</li>
  <li><strong>Form:</strong> Soliloquy gives direct access to tortured reasoning, building dramatic irony.</li>
  <li><strong>Structure:</strong> Placed before Lady Macbeth persuades him — juxtaposition highlights her as catalyst.</li>
</ul><div class="source">Annotated extract: WHAT–HOW–WHY</div></div>

<div class="examiner-tip"><strong>Top Tip:</strong> Do not just name a technique — explain the <em>effect</em>. "Shakespeare uses a metaphor" earns little; "the blood metaphor conveys guilt, reflecting Jacobean beliefs about divine punishment" earns much more.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating language, form and structure as a checklist. The best responses integrate all three — e.g. prose in the sleepwalking scene reinforces fragmented imagery and mirrors structural collapse.</div>
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
          'The witches\' trochaic tetrameter reverses the natural stress pattern and shortens the line length, producing an eerie, incantatory rhythm that signals their otherness and supernatural nature.',
      },
      {
        id: 'edx-lt1-m4-q2',
        question:
          'What is the significance of Lady Macbeth speaking in prose during the sleepwalking scene (Act 5 Scene 1)?',
        options: [
          'She has become a lower-status character by this point in the play',
          'It indicates that Shakespeare wanted to save time writing the scene',
          'The shift from her earlier commanding verse to prose signals that her rational mind has fractured',
          'Prose is always used in Act 5 of Shakespeare\'s tragedies',
        ],
        correct: 2,
        explanation:
          'Lady Macbeth previously spoke in controlled, powerful verse. The shift to prose reflects her psychological breakdown — she has lost the ordered, rational control she once exercised over both language and action.',
      },
      {
        id: 'edx-lt1-m4-q3',
        question:
          'In the WHAT–HOW–WHY framework, which element most directly addresses writer\'s methods (AO2)?',
        options: [
          'WHAT — describing what happens in the extract',
          'HOW — analysing Shakespeare\'s use of language, form and structure',
          'WHY — explaining the historical context',
          'All three elements equally address AO2',
        ],
        correct: 1,
        explanation:
          'Writer\'s methods (AO2) focuses on how writers create meaning — how language and structure are used to achieve effects. The HOW step directly addresses this by identifying techniques and analysing their impact.',
      },
      {
        id: 'edx-lt1-m4-q4',
        question:
          'Which of the following best describes dramatic irony in Macbeth?',
        options: [
          'Macbeth says funny things that the audience laughs at',
          'The audience knows Duncan will be murdered when he praises Macbeth\'s castle as pleasant',
          'Shakespeare uses ironic metaphors in Macbeth\'s speeches',
          'The witches make ironic prophecies that are always wrong',
        ],
        correct: 1,
        explanation:
          'Dramatic irony occurs when the audience knows something the characters do not. Duncan praising the castle\'s pleasantness while the audience knows it will be the site of his murder is a classic example.',
      },
      {
        id: 'edx-lt1-m4-q5',
        question:
          'How do the opening battle (Act 1) and the final battle (Act 5) function structurally?',
        options: [
          'They show that nothing changes in the world of the play',
          'They are parallel scenes that frame Macbeth\'s tragic arc — he moves from hero in the first to villain in the last',
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
  // MODULE 5 — Shakespeare: Writing the Extract-Based Response
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m5',
    title: 'Shakespeare: Writing the Extract-Based Response',
    duration: '55 min',
    content: `
<h2>The Edexcel Shakespeare Question — Extract to Whole Play</h2>

<p>The Shakespeare question on Edexcel Paper 1 is worth <strong>40 marks</strong> and you should spend approximately <strong>50 minutes</strong> on it. You are given a printed extract alongside a question about a <strong>theme or character</strong>. You must discuss <strong>both the extract and the wider play</strong> — students who only analyse the extract will cap their mark severely. All four AOs are assessed: <strong>personal response (AO1)</strong>, <strong>writer's methods (AO2)</strong>, <strong>context (AO3)</strong>, and <strong>technical accuracy (AO4)</strong>.</p>

<div class="key-term"><strong>Key Term: Extract-to-Whole</strong> — The Edexcel requirement that your response moves from close analysis of the given passage outward to the rest of the play, showing how the theme or character develops across the full text.</div>

<h3>Recommended Response Structure</h3>
<ol>
  <li><strong>Introduction (3–4 sentences):</strong> State a clear thesis addressing the question. Reference context briefly.</li>
  <li><strong>Extract paragraphs (2–3):</strong> Close analysis — embed quotations, analyse language, imagery and dramatic techniques.</li>
  <li><strong>Wider play paragraphs (2–3):</strong> Link to other scenes showing how the idea evolves. Weave in context.</li>
  <li><strong>Conclusion (2–3 sentences):</strong> A final evaluative statement on Shakespeare's purpose or the audience's response.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> Aim for roughly 60% on the extract and 40% on the wider play. The extract is your launchpad, but the wider play paragraphs lift you into the top bands.</div>

<h3>The PETAL Framework</h3>
<ul>
  <li><strong>P — Point:</strong> A topic sentence making a claim relevant to the question.</li>
  <li><strong>E — Evidence:</strong> An embedded quotation from the text.</li>
  <li><strong>T — Technique:</strong> The literary or dramatic device used.</li>
  <li><strong>A — Analysis:</strong> The effect — what it suggests, implies, or reveals. Explore connotations.</li>
  <li><strong>L — Link to context:</strong> Connect to the social, historical or literary context.</li>
</ul>

<h3>Model Opening — Grade 8–9</h3>
<div class="text-extract">Shakespeare presents Macbeth's ambition as a corrosive force that dismantles his moral identity. In this extract from Act 1 Scene 7, Macbeth's soliloquy reveals a man aware of the transgression he contemplates, yet unable to resist his desire for power. Across the play, unchecked ambition — fuelled by supernatural manipulation and spousal pressure — leads to tyranny, resonating with a Jacobean audience alert to regicide and divine right.<div class="source">Model introduction — Grade 8–9</div></div>

<h3>Model Body Paragraph — Grade 8–9</h3>
<div class="text-extract">Shakespeare uses the metaphor "vaulting ambition, which o'erleaps itself" to convey Macbeth's reckless desire. "O'erleaps" suggests a horseman jumping too far — foreshadowing his downfall. "Vaulting" carries connotations of arrogance, reinforcing that his aspirations have moved into hubris. For a Jacobean audience steeped in the Great Chain of Being, this signals disruption of the divinely ordained social order.<div class="source">Model extract paragraph — Grade 8–9</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing everything you know without linking it to the question. Every paragraph must connect to the named theme or character. Narrative retelling will not reach the top bands.</div>

<h3>Quotation Bank for Macbeth Extract Questions</h3>
<div class="text-extract">
<strong>For Ambition:</strong> "Vaulting ambition, which o'erleaps itself" (Act 1.7) | "I have no spur / To prick the sides of my intent" (Act 1.7) | "None of woman born shall harm Macbeth" (Act 4.1, false security)<br><br>
<strong>For Guilt & Conscience:</strong> "Will all great Neptune's ocean wash this blood / Clean from my hand?" (Act 2.2) | "Out, damned spot!" (Act 5.1, Lady Macbeth sleepwalking)<br><br>
<strong>For Power & Masculinity:</strong> "When you durst do it, then you were a man" (Act 1.7, Lady Macbeth goads) | "I am settled: I will rule in fear" (Act 4.1, post-witches)<br><br>
<strong>For Appearance vs Reality:</strong> "Look like th'innocent flower, / But be the serpent under't" (Act 1.5) | "There's none of my people know" (Act 3.2, before Banquo murder)<br><br>
<strong>For the Supernatural:</strong> "Fair is foul, and foul is fair" (Act 1.1, witches) | "By the pricking of my thumbs, / Something wicked this way comes" (Act 4.1)
</div>

<h3>Grade 9 Insight: Moving Beyond the Extract</h3>
<div class="grade-9-insight"><strong>Grade 9 Approach:</strong> Spend roughly 60% of your essay on close analysis of the printed extract (writer's methods (AO2): language techniques, dramatic effects). However, the final 40% must move decisively into the wider play. Don't just mention other scenes — show how they <em>develop, complicate, or culminate</em> the idea from the extract. For example, if the extract shows Macbeth's hesitation about regicide, move to Act 2 (the murder), then Act 3 (paranoia), then Act 5 (nihilism). This progression demonstrates that you understand the thematic arc of the play and can integrate evidence strategically.</div>

<h3>Worked Example: Extractto-Whole Analysis</h3>
<p><strong>Extract (Act 1.7):</strong> "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th'other."</p>
<p><strong>Question:</strong> "How does Shakespeare present the role of ambition in leading to downfall?"</p>
<div class="text-extract">
<strong>Extract Analysis (2 paragraphs):</strong><br>
This soliloquy reveals Macbeth's moral awareness. The metaphor of "spur" (a rider's tool for motivating a horse) signals that legitimate motives (duty, honour) should drive action. Yet Macbeth finds only "ambition" — selfish desire. The verb "vaulting" (arching too far) and the paradox "o'erleaps itself / And falls on th'other" foreshadow inevitable collapse. For a Jacobean audience, this self-awareness makes the subsequent regicide doubly damning: Macbeth knows his transgression violates divine order.<br><br>
<strong>Wider Play Integration (2 paragraphs):</strong><br>
The prophecy itself fuels this ambition. The witches' "All hail, Macbeth, that shalt be king hereafter" (Act 1.3) plants the idea; Lady Macbeth weaponises it with "When you durst do it, then you were a man" (Act 1.7). But the play demonstrates that this ambition cannot be sated. Post-murder, Macbeth's paranoia forces him to order Banquo's death ("We have scotch'd the snake, not kill'd it," Act 3.2), then Macduff's family's slaughter. Each crime deepens isolation and psychological decay. By Act 5, the nihilistic soliloquy ("To-morrow, and to-morrow, and to-morrow") shows that ambition has destroyed not just Macbeth's morality but his capacity for meaning. Shakespeare's point: ambition as isolated personal desire, unchecked by conscience or loyalty, is self-consuming. Macduff's eventual victory and Malcolm's restoration of order reassert that the kingdom itself rejects the tyranny ambition produced.
</div>

<h3>PETAL Framework: Worked Practice</h3>
<p><strong>Question Extract:</strong> "By the pricking of my thumbs, / Something wicked this way comes" (Act 4.1)</p>
<div class="text-extract">
<strong>P — Point:</strong> Shakespeare uses the supernatural to externalise Macbeth's psychological corruption.<br><br>
<strong>E — Evidence:</strong> The witches' spellcraft ("By the pricking of my thumbs") creates an ominous atmosphere that precedes Macbeth's entry.<br><br>
<strong>T — Technique:</strong> Personification ("something wicked this way comes") treats evil as an external force approaching; supernatural imagery blurs reality and illusion.<br><br>
<strong>A — Analysis:</strong> For the audience, the witches' supernatural awareness suggests their manipulation of events. Yet Macbeth arrives immediately after, suggesting he is drawn by his own dark desires. The technique creates ambiguity: are the witches controlling Macbeth, or do they simply reveal what he already wants? This fits the play's thematic question of fate vs free will.<br><br>
<strong>L — Link to Context:</strong> A Jacobean audience familiar with James I's <em>Daemonologie</em> would recognise witches as real threats. Yet Shakespeare makes their power ambiguous, perhaps suggesting Macbeth's own agency in his downfall. This subtlety may reflect anxieties about witchcraft trials' reliability.
</div>

<h3>Timing (50 minutes)</h3>
<ol>
  <li><strong>0–5 min:</strong> Read extract carefully. Annotate key words, literary devices, character tone.</li>
  <li><strong>5–8 min:</strong> Plan — write a one-sentence thesis, 3–4 extract points (using PETAL), 3–4 wider-play moments (showing development).</li>
  <li><strong>8–42 min:</strong> Write response. Aim for 2–3 extract-focused paragraphs (60%), then 2–3 wider-play paragraphs (40%). Use embedded quotations (3–6 words each).</li>
  <li><strong>42–50 min:</strong> Proofread for technical accuracy (AO4). Check for SPaG errors that lose easy marks.</li>
</ol>

<h3>Model Opening — Extract-to-Whole (Grade 8–9)</h3>
<div class="text-extract">
<strong>Question:</strong> "Explore how Shakespeare uses the witches to explore the theme of ambition."<br><br>
<strong>Model Introduction:</strong> Shakespeare presents the witches as agents of temptation who tap into Macbeth's latent ambition, raising the question of whether they cause his downfall or merely reveal his underlying desires. The witches' prophecies — particularly "All hail, Macbeth, that shalt be king hereafter" (Act 1.3) — plant ambition in Macbeth's mind, yet Lady Macbeth must drive him to act. Across the play, the supernatural becomes increasingly tied to Macbeth's psychological deterioration, suggesting that ambition, once awakened, becomes self-perpetuating. Ultimately, Shakespeare suggests that while external temptation exists, individuals remain responsible for their moral choices.
<div class="source">Grade 8–9: Establishes a conceptualised argument, references context (James I's beliefs about witchcraft), and indicates the essay's direction</div>
</div>

<h3>Extract Paragraph Model (Grade 8–9)</h3>
<div class="text-extract">
<strong>From Act 1.7 — "I have no spur / To prick the sides of my intent, but only / Vaulting ambition"</strong><br><br>
Shakespeare's use of equestrian metaphor reveals Macbeth's moral self-awareness. The "spur" traditionally signifies duty or honour — legitimate reasons to act — yet Macbeth identifies only "ambition" as his motivator. The verb "vaulting" (leaping, arching) carries connotations of reckless overreach; the paradoxical "o'erleaps itself / And falls on th'other" foreshadows inevitable collapse. Notably, Macbeth does not excuse his ambition as imposed by fate or witches — he owns it. For a Jacobean audience steeped in the Great Chain of Being, this self-aware transgression is damning: Macbeth understands the cosmic disorder his actions will produce, yet cannot resist. The metaphor's specificity — the concrete image of a horse and rider — makes abstract ambition visceral, inviting the audience to feel the tragedy of a man who recognises his own doom.
<div class="source">Grade 8–9 Extract Paragraph: ~180 words, demonstrating AO2 (metaphor analysis, connotations, paradox), personal response (AO1), context (AO3, Jacobean)</div>
</div>

<h3>Wider Play Paragraph Model (Grade 8–9)</h3>
<div class="text-extract">
<strong>Developing the theme into Acts 2–5:</strong><br><br>
Yet Macbeth's Act 1 self-awareness does not temper his ambition; instead, the play demonstrates how ambition mutates into paranoia and tyranny. Following Duncan's murder, Macbeth's language shifts from reflection to ruthlessness. "We have scotch'd the snake, not kill'd it" (Act 3.2) reveals that one murder cannot satiate ambition — Banquo remains a threat. This compulsion drives Macbeth to orchestrate Banquo's death and, by Act 4, to order the slaughter of Macduff's innocent family. Each crime distances him further from his initial moral awareness. By Act 5, the nihilistic "To-morrow, and to-morrow, and to-morrow" soliloquy shows that ambition has consumed all meaning — Macbeth is no longer driven by desire but hollowed by it. Shakespeare's arc demonstrates that unchecked ambition does not elevate; it destroys the ambition-driven self. The restoration of order through Macduff's victory and Malcolm's coronation reasserts that the kingdom itself rejects the tyrant ambition produced.
<div class="source">Grade 8–9 Wider Play Paragraph: ~200 words, integrating multiple scenes to show thematic development and providing conceptualised interpretation</div>
</div>
`,
    quiz: [
      {
        id: 'edx-lt1-m5-q1',
        question:
          'How many marks is the Edexcel Shakespeare question worth?',
        options: ['20 marks', '30 marks', '40 marks', '50 marks'],
        correct: 2,
        explanation:
          'The Edexcel Shakespeare question is worth 40 marks and should take approximately 50 minutes to complete.',
      },
      {
        id: 'edx-lt1-m5-q2',
        question:
          'What must you discuss in their response to the Shakespeare question?',
        options: [
          'Only the given extract in close detail',
          'Only the wider play with brief reference to the extract',
          'Both the extract and the wider play',
          'A comparison between two Shakespeare plays',
        ],
        correct: 2,
        explanation:
          'The Edexcel question requires you to analyse both the given extract and the wider play. Focusing on only one will limit the mark significantly.',
      },
      {
        id: 'edx-lt1-m5-q3',
        question:
          'What does the "L" in the PETAL framework stand for?',
        options: [
          'Language',
          'Link to context',
          'Literary device',
          'Line reference',
        ],
        correct: 1,
        explanation:
          'In PETAL, the L stands for "Link to context" — connecting your analysis to the social, historical, or literary context of the text (AO3).',
      },
      {
        id: 'edx-lt1-m5-q4',
        question:
          'Which what markers look for are tested in the Edexcel Shakespeare question?',
        options: [
          'AO1 and AO2 only',
          'AO1, AO2, and AO3 only',
          'AO1, AO2, AO3, and AO4',
          'AO2, AO3, and AO4 only',
        ],
        correct: 2,
        explanation:
          'All four AOs are assessed: personal response (AO1), writer\'s methods (AO2), context (AO3), and technical accuracy (AO4).',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Post-1914 Literature: Themes & Context (An Inspector Calls Focus)
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m6',
    title: 'Post-1914 Literature: Themes & Context (An Inspector Calls Focus)',
    duration: '55 min',
    content: `
<h2>An Inspector Calls — Themes and Context</h2>

<p><em>An Inspector Calls</em> by J.B. Priestley is the most popular Edexcel post-1914 text. It was <strong>written in 1945</strong> but <strong>set in 1912</strong> — this time gap drives its dramatic irony and political message.</p>

<div class="key-term"><strong>Key Term: Dramatic Irony</strong> — When the audience knows something the characters do not. The 1945 audience knew about the Titanic sinking, two World Wars and class-system collapse — all of which the Birlings dismiss.</div>

<h3>1912 vs 1945 — What the Audience Knows</h3>
<ul>
  <li><strong>"Absolutely unsinkable"</strong> — Mr Birling on the Titanic, which sank in April 1912.</li>
  <li><strong>"Nobody wants war"</strong> — WWI began in 1914; WWII followed in 1939.</li>
  <li><strong>"Steadily increasing prosperity"</strong> — the Great Depression hit in the 1930s.</li>
</ul>
<p>This irony undermines Birling's authority entirely, extending to his capitalist philosophy.</p>

<h3>Six Key Themes</h3>
<ul>
  <li><strong>Social responsibility:</strong> The Inspector's <em>"We are members of one body"</em> is Priestley's socialist message. Each Birling fails Eva Smith.</li>
  <li><strong>Class and inequality:</strong> Birling sacked Eva for requesting a fair wage; Sheila had her dismissed out of jealousy. The powerful destroy the vulnerable without consequence.</li>
  <li><strong>Generational divide:</strong> Sheila and Eric accept guilt; Mr and Mrs Birling refuse. Hope lies with the young.</li>
  <li><strong>Gender roles:</strong> Mrs Birling condemns Eva as an unmarried mother. Sheila grows into a morally independent woman.</li>
  <li><strong>Power and exploitation:</strong> Every family member exploits power over Eva — as employer, customer, lover or charity gatekeeper.</li>
  <li><strong>Guilt and morality:</strong> Sheila's journey to moral awakening is the play's emotional centre. Birling's refusal exposes moral bankruptcy.</li>
</ul>

<h3>Key Quotations with Analysis</h3>
<ul>
  <li><strong>"We are members of one body"</strong> — echoes Christian collectivism; "body" suggests harm to one part damages the whole.</li>
  <li><strong>"Fire and blood and anguish"</strong> — prophetic; the 1945 audience had lived through two wars.</li>
  <li><strong>"These girls aren't cheap labour — they're people"</strong> — Sheila rejects dehumanising language; the dash emphasises the correction.</li>
  <li><strong>"I was quite justified"</strong> — Mrs Birling measures behaviour by class, not compassion.</li>
  <li><strong>"We all helped to kill her"</strong> — "we all" distributes responsibility across the family.</li>
  <li><strong>"A man has to make his own way"</strong> — Birling's individualist creed, opposite to the Inspector's collectivism.</li>
  <li><strong>"Public men have responsibilities as well as privileges"</strong> — balanced syntax mirrors the balance Priestley demands.</li>
  <li><strong>"You're squiffy"</strong> — Eric's drinking hints at dysfunction beneath the respectable surface.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Do not simply state the play was written in 1945 — explain <em>how</em> context shapes interpretation: "A 1945 audience would recognise Birling's optimism as dangerously naive, reinforcing Priestley's argument against ignoring social responsibility."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating context as a bolt-on paragraph. Weave it into analysis throughout — the tension between what 1912 characters think and what a 1945 audience understands is where the marks are.</div>

<h3>Priestley's Purpose</h3>
<p>Priestley was a committed <strong>socialist</strong> who supported the <strong>Welfare State</strong>. He wrote the play as political theatre to persuade his audience that selfish, class-bound Edwardian attitudes must never return. The Inspector is his mouthpiece — a moral force delivering a message directly to the audience.</p>
`,
    quiz: [
      {
        id: 'edx-lt1-m6-q1',
        question:
          'When was An Inspector Calls written, and when is it set?',
        options: [
          'Written in 1912, set in 1945',
          'Written in 1945, set in 1912',
          'Written in 1945, set in 1945',
          'Written in 1912, set in 1912',
        ],
        correct: 1,
        explanation:
          'The play was written in 1945 but set in 1912. This time gap creates dramatic irony — the audience knows about events (the Titanic, two World Wars) that the characters cannot foresee.',
      },
      {
        id: 'edx-lt1-m6-q2',
        question:
          'Which character says "We are members of one body"?',
        options: [
          'Mr Birling',
          'Sheila Birling',
          'The Inspector',
          'Eric Birling',
        ],
        correct: 2,
        explanation:
          'The Inspector delivers this line in his final speech. It encapsulates Priestley\'s socialist message about collective social responsibility.',
      },
      {
        id: 'edx-lt1-m6-q3',
        question:
          'What is the significance of Mr Birling calling the Titanic "absolutely unsinkable"?',
        options: [
          'It shows he is well-informed about current affairs',
          'It creates dramatic irony that undermines his authority and judgement',
          'It demonstrates his concern for public safety',
          'It foreshadows the Inspector\'s arrival',
        ],
        correct: 1,
        explanation:
          'The 1945 audience knew the Titanic sank in 1912. This dramatic irony immediately marks Birling as foolish and unreliable, undermining his capitalist philosophy by extension.',
      },
      {
        id: 'edx-lt1-m6-q4',
        question:
          'Which pair of characters represent hope for change in the play?',
        options: [
          'Mr and Mrs Birling',
          'Gerald and Mrs Birling',
          'Sheila and Eric',
          'The Inspector and Gerald',
        ],
        correct: 2,
        explanation:
          'Sheila and Eric — the younger generation — accept responsibility and show genuine remorse. Priestley suggests the hope for a fairer post-war society lies with the young.',
      },
      {
        id: 'edx-lt1-m6-q5',
        question:
          'Why did Priestley set the play in 1912 rather than 1945?',
        options: [
          'Because he preferred writing historical drama',
          'So the characters could discuss World War I',
          'To create dramatic irony and expose the failures of pre-war capitalist attitudes',
          'Because the Welfare State did not exist in 1945',
        ],
        correct: 2,
        explanation:
          'Setting the play in 1912 allowed Priestley to use dramatic irony: the 1945 audience could see how wrong the Birlings\' confident, self-serving predictions were, reinforcing his argument against individualism and class privilege.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 7 — Post-1914 Literature: Character Analysis
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m7',
    title: 'Post-1914 Literature: Character Analysis',
    duration: '55 min',
    content: `
<h2>An Inspector Calls — Character Analysis</h2>

<p>Every character in <em>An Inspector Calls</em> is a <strong>mouthpiece for ideas</strong>. Priestley uses them to dramatise a political argument about responsibility, class, and social justice.</p>

<div class="key-term"><strong>Key Term: Mouthpiece Character</strong> — A character who exists primarily to voice the playwright's own views or to embody a particular ideology so the audience can judge it.</div>

<h3>The Characters</h3>

<ul>
  <li><strong>Mr Birling</strong> — Capitalist, pompous, refuses responsibility. His dramatic irony about the Titanic undermines his authority. Key quote: <em>"a man has to mind his own business and look after himself and his own."</em> He does <strong>not</strong> change — making the final phone call a moment of dramatic justice.</li>
  <li><strong>Mrs Birling</strong> — Classist, cold, hypocritical. Refuses Eva charity because Eva used the name "Mrs Birling." Key quote: <em>"Girls of that class—"</em> reveals ingrained class snobbery. Like her husband, she is incapable of change.</li>
  <li><strong>Sheila</strong> — Starts shallow and materialistic, but undergoes the play's most visible transformation. Key quote: <em>"But these girls aren't cheap labour — they're people."</em> Arc: shallow → genuine remorse → challenges parents → moral voice by Act 3. Represents Priestley's <strong>hope for the younger generation</strong>.</li>
  <li><strong>Eric</strong> — Weak but redeemable. Mirrors Sheila's journey, reinforcing the generational divide. Key quote: <em>"You're not the kind of father a chap could go to when he's in trouble"</em> — exposes the family's emotional coldness.</li>
  <li><strong>Inspector Goole</strong> — Priestley's mouthpiece: omniscient, supernatural, a <strong>socialist conscience</strong>. Key quote: <em>"We are members of one body. We are responsible for each other."</em> His ambiguity (ghost? time traveller?) keeps the audience thinking.</li>
  <li><strong>Gerald</strong> — Upper class, represents patriarchy. His affair with Daisy Renton is built on power imbalance. Key quote: <em>"intensely grateful"</em> reveals the transactional nature. Sides with the older Birlings by Act 3, closing ranks.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Sheila is the safest exam choice — her clear arc naturally generates personal response (AO1), writer's methods (AO2), and context (AO3) marks in a single paragraph. Eric is equally strong but slightly weaker because his motivation is less clear.</div>

<h3>Quotation Bank: Key Character Moments with Analysis</h3>
<div class="text-extract">
<strong>Mr Birling (Capitalist resistance):</strong> "A man has to mind his own business and look after himself and his own" — Shows his refusal of collective responsibility. The selfish pronouns "his own" emphasise atomisation.<br><br>
<strong>Mrs Birling (Class snobbery):</strong> "Girls of that class—" — Truncated speech reveals her discomfort with even naming Eva's class. Shows ingrained snobbery.<br><br>
<strong>Sheila (Moral awakening):</strong> "But these girls aren't cheap labour — they're people" — Simple language, powerful recognition of shared humanity. Shows transformation from complicity to conscience.<br><br>
<strong>Eric (Guilt recognition):</strong> "You're not the kind of father a chap could go to when he's in trouble" — Exposes family's emotional coldness. Shows he has moved beyond self-interest to recognise systemic failure.<br><br>
<strong>Inspector Goole (Socialist conscience):</strong> "We are members of one body. We are responsible for each other" — Directly voices Priestley's collectivist philosophy. Aphorismatic, memorable, prescriptive.
</div>

<h3>Grade 9 Insight: Character as Ideological Vehicle</h3>
<div class="grade-9-insight"><strong>Grade 9 Approach:</strong> Avoid treating characters as psychologically realistic people. Instead, recognise that Priestley constructs each character to embody a political position: Birling = capitalist individualism; Mrs Birling = aristocratic snobbery; Sheila/Eric = socialist potential; Inspector = moral authority. Show how their dialogue and stage actions express these ideologies. For instance, Sheila's early consumerism ("That's a beautiful dress") contrasts with her later recognition of workers' humanity. This ideological shift is Priestley's argument for social change, not a realistic character "journey." Top-band responses will frame characters as constructs that dramatise political debate.</div>

<h3>Worked Example: Sheila's Transformation</h3>
<p><strong>Extract (Act 1):</strong> "That's a beautiful dress! Isn't it, Mummy? I love it!"</p>
<p><strong>Later (Act 2):</strong> "But these girls aren't cheap labour — they're people."</p>
<div class="text-extract">
<strong>Analysis:</strong> Priestley constructs Sheila as the play's moral barometer, moving from shallow materialism to ethical consciousness. In Act 1, her enthusiasm for her dress — infantilised by stage direction "very pleased with life" — shows her isolation in bourgeois comfort. She has never considered the labour or ethics behind her possessions. However, when she learns that her vanity led to Eva's dismissal from Milwards (out of jealousy at a pretty girl in the shop), Sheila undergoes radical reorientation. Her assertion that girls "aren't cheap labour — they're people" employs the simple plural noun "people" to assert a shared humanity her parents cannot acknowledge. The deliberate simplicity — no fancy adjectives, no hedging — makes the statement all the more powerful. By Act 3, Sheila has become the family's moral conscience, openly challenging her parents: "You're pretending everything's all right." The present continuous "pretending" shows her refusal of moral amnesia. For Priestley, writing in 1945 after World War II, Sheila embodies the younger generation's capacity for social conscience — a hopeful vision that post-war Britain could be rebuilt on principles of collective responsibility rather than pre-war class complacency.
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
<td style="padding: 6px;">None — refuses responsibility even at play's end</td>
<td style="padding: 6px;">Expose the bankruptcy of pre-war individualism; show that capitalist logic is immoral</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Mrs Birling</strong></td>
<td style="padding: 6px;">Upper-middle class; matriarch</td>
<td style="padding: 6px;">Class snobbery; "girls of that class"</td>
<td style="padding: 6px;">None — closes ranks with husband at end</td>
<td style="padding: 6px;">Critique ingrained, unthinking class prejudice; show how privilege insulates from empathy</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Sheila</strong></td>
<td style="padding: 6px;">Upper-middle class; young woman</td>
<td style="padding: 6px;">Initially complicit; evolves to socialist conscience</td>
<td style="padding: 6px;"><strong>Complete transformation</strong> — recognises complicity, accepts responsibility</td>
<td style="padding: 6px;">Embody the younger generation's capacity for moral growth and social conscience</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Eric</strong></td>
<td style="padding: 6px;">Upper-middle class; young man</td>
<td style="padding: 6px;">Initially self-interested; grows to recognise systemic failure</td>
<td style="padding: 6px;"><strong>Significant transformation</strong> — accepts responsibility, breaks from parents</td>
<td style="padding: 6px;">Show that younger men, despite patriarchal training, can develop conscience and challenge authority</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Gerald</strong></td>
<td style="padding: 6px;">Upper class; fiancé</td>
<td style="padding: 6px;">Patriarchal entitlement; exploitative ("intensely grateful")</td>
<td style="padding: 6px;">Minimal — reverts to Birlings' position by act 3</td>
<td style="padding: 6px;">Show that upper-class men prioritise class loyalty over moral responsibility</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Inspector Goole</strong></td>
<td style="padding: 6px;">Ambiguous; possibly supernatural</td>
<td style="padding: 6px;">Collectivist socialism; collective responsibility</td>
<td style="padding: 6px;">N/A — serves as moral voice, not character</td>
<td style="padding: 6px;">Priestley's mouthpiece; voice of the audience's conscience; embody post-war social justice ideals</td>
</tr>
</table>

<h3>Exam Technique: Constructing Character Paragraphs</h3>
<p><strong>Weak (character-focused, non-analytical):</strong> "Sheila changes her mind about Eva. She realises that poor girls are people too. This shows she is a better person than her parents."</p>
<p><strong>Strong (purpose-focused, analytical):</strong> "Priestley uses Sheila to embody the younger generation's capacity for moral conscience. Her recognition that Eva's girls 'aren't cheap labour — they're people' demonstrates a shift from bourgeois complicity to ethical awareness. The simplicity of 'people' — rejecting her mother's qualifying phrase 'girls of that class' — shows Sheila transcending class ideology. Priestley's hopeful vision is that post-war Britain could be rebuilt on principles of collective responsibility, with young people like Sheila leading moral renewal."</p>

<h3>Model Paragraph: Sheila's Development (Grade 8–9)</h3>

<div class="text-extract">Priestley constructs Sheila as the play's central moral barometer, dramatising the younger generation's capacity for ethical awakening. In Act 1, the stage directions describe her as "a pretty girl in her early twenties, very pleased with life," a phrase heavy with irony — her pleasure is naive, rooted in material comfort and social privilege. Her comment on the Inspector's dress — "That's a beautiful dress! Isn't it, Mummy? I love it!" — reveals a mind focused entirely on consumption. However, once she learns that her own jealousy led to Eva Smith's dismissal from Milwards, Sheila undergoes a radical reorientation. Her assertion that girls "aren't cheap labour — they're people" employs deliberate simplicity to assert a shared humanity her parents cannot acknowledge. The noun "people" carries moral weight precisely because it refuses euphemism or qualification (unlike Mrs Birling's hedging "girls of that class"). By Act 3, Sheila has become the family's moral conscience, openly challenging her parents with "You're pretending everything's all right." The present continuous verb "pretending" shows her refusal to return to pre-war moral amnesia. For Priestley, writing in the aftermath of World War II, Sheila embodies his hope that the younger generation — having witnessed collective catastrophe — could build a post-war society founded on principles of collective responsibility. She becomes Priestley's spokesman for social justice, suggesting that moral growth, once achieved, cannot be reversed.<div class="source">Grade 8–9 paragraph: ~280 words, demonstrating personal response (AO1, interpretation of generational change), writer's methods (AO2, analysis of stage direction, word choice, dramatic action), context (AO3, post-war)</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as if they are real people. Always frame analysis around Priestley's purpose — e.g. "Priestley uses Sheila to suggest that younger people can develop moral conscience" not "Sheila feels bad because she caused Eva's death." The first is writer's methods analysis (AO2); the second is paraphrase.</div>
`,
    quiz: [
      {
        id: 'edx-lt1-m7-q1',
        question:
          'Which character serves as Priestley\'s primary mouthpiece for socialist ideas?',
        options: [
          'Mr Birling',
          'Sheila Birling',
          'Inspector Goole',
          'Gerald Croft',
        ],
        correct: 2,
        explanation:
          'Inspector Goole functions as Priestley\'s mouthpiece. His final speech — "We are members of one body. We are responsible for each other" — directly voices Priestley\'s collectivist, socialist message to the audience.',
      },
      {
        id: 'edx-lt1-m7-q2',
        question:
          'What is the significance of Mr Birling\'s dramatic irony about the Titanic?',
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
          'Sheila and Eric both undergo a moral transformation — they accept their guilt and challenge their parents\' refusal to take responsibility. This generational divide is central to Priestley\'s message of hope for social change.',
      },
      {
        id: 'edx-lt1-m7-q4',
        question:
          'Why should exam responses refer to "Priestley" rather than treating characters as real people?',
        options: [
          'Because markers prefer formal language',
          'Because it demonstrates awareness that characters are constructs used to convey ideas (personal response (AO1) and writer\'s methods (AO2))',
          'Because it adds to the word count',
          'Because the marking guide only rewards biographical context',
        ],
        correct: 1,
        explanation:
          'Referring to Priestley\'s intentions shows markers that you understand characters are deliberate constructs — tools the writer uses to explore themes and influence the audience. This is essential for personal response (AO1) and writer\'s methods (AO2).',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Post-1914 Literature: Writer's Methods & Effects
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m8',
    title: "Post-1914 Literature: Writer's Methods & Effects",
    duration: '55 min',
    content: `
<h2>An Inspector Calls — Writer's Methods and Effects (AO2)</h2>

<p><strong>writer's methods (AO2)</strong> asks you to analyse how writers use <strong>language, form, and structure</strong> to achieve effects. In drama, this means going beyond dialogue to examine Priestley's full toolkit as a playwright.</p>

<div class="key-term"><strong>Key Term: Writer's Methods (AO2)</strong> — The what markers look for that rewards analysis of <em>how</em> a writer creates meaning through language, structure, and form.</div>

<h3>Dramatic Methods</h3>

<ul>
  <li><strong>Stage directions:</strong> Lighting shifts from <em>"pink and intimate"</em> to <em>"brighter and harder"</em> — comfortable illusion gives way to harsh scrutiny.</li>
  <li><strong>Dramatic irony:</strong> The audience knows the Titanic sank — Birling's confidence discredits his worldview immediately.</li>
  <li><strong>Unity of time, place, action:</strong> One room, one evening, one investigation — claustrophobic and inescapable.</li>
  <li><strong>Entrances and exits:</strong> The Inspector interrupts Birling's capitalist speech; each exit isolates a character.</li>
</ul>

<h3>Key Structural Methods</h3>

<p>The play uses a <strong>"well of truth"</strong> — each interrogation digs deeper, escalating from dismissal to pregnancy, intensifying moral judgement.</p>

<ul>
  <li><strong>Cliffhangers between acts</strong> — Act 1 ends with Gerald's affair about to surface; Act 2 with Eric revealed as the father.</li>
  <li><strong>Cyclical structure</strong> — The phone rings again: a girl has died and an inspector is coming. The Birlings must relive the lesson they refused to learn.</li>
  <li><strong>Morality play form</strong> — Characters embody virtues and vices; a supernatural figure guides them toward reckoning. Priestley modernises the medieval tradition for a political message.</li>
</ul>

<h3>Avoiding Feature-Spotting</h3>

<p>Always follow: <strong>Technique → Effect → Priestley's purpose</strong>.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> "Priestley uses dramatic irony" identifies the technique but says nothing about effect. Always push further: "…to discredit Birling's confidence, ensuring the audience distrusts his philosophy before the Inspector arrives."</div>

<h3>Annotated Extract — Act 3</h3>

<div class="text-extract"><strong>INSPECTOR:</strong> One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths and John Smiths still left with us… We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish.<div class="source">J.B. Priestley, <em>An Inspector Calls</em>, Act 3</div></div>

<ul>
  <li><strong>Tripling</strong> — <em>"millions and millions and millions"</em> hammers home the scale of inequality.</li>
  <li><strong>Short declaratives</strong> — <em>"We are members of one body."</em> Blunt simplicity gives prophetic authority.</li>
  <li><strong>Foreshadowing</strong> — <em>"fire and blood and anguish"</em> refers to two World Wars; for the 1945 audience, already fulfilled.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> When writing about structure, think in terms of audience experience: "What does the audience feel, and how has Priestley engineered it?"</div>

<h3>Model Writer's Methods (AO2)-Focused Paragraph</h3>

<div class="text-extract">Priestley uses the cyclical structure to reinforce his message. The telephone announces a girl has died and an inspector is coming — mirroring the opening. The Birlings' dismissal of the Inspector as a hoax is immediately punished; the comfortable resolution is snatched away. The audience must recognise that ignoring responsibility has consequences. Just as the Birlings relive the interrogation, post-war Britain must not repeat the inequalities that led to war.<div class="source">Model writer's methods (AO2) paragraph — technique, effect, purpose</div></div>
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
          'By confining the action to one room, one evening, and one investigation, Priestley traps the Birling family — and the audience — in an inescapable confrontation with guilt. The unity intensifies the dramatic pressure throughout.',
      },
      {
        id: 'edx-lt1-m8-q3',
        question:
          'What is the correct chain for a strong AO2 response?',
        options: [
          'Quote → Terminology → Context',
          'Technique → Effect → Writer\'s purpose',
          'Point → Evidence → Explanation',
          'Context → Quote → Personal response',
        ],
        correct: 1,
        explanation:
          'AO2 rewards analysis of methods. The strongest responses identify the technique, explain its effect on the audience, and then link this to the writer\'s broader purpose — moving well beyond simple feature-spotting.',
      },
      {
        id: 'edx-lt1-m8-q4',
        question:
          'What does the phrase "fire and blood and anguish" foreshadow in the Inspector\'s final speech?',
        options: [
          'The fire that will destroy the Birling factory',
          'A future revolution by the working class',
          'The two World Wars — a prophecy already fulfilled for the 1945 audience',
          'The Inspector\'s supernatural punishment of the family',
        ],
        correct: 2,
        explanation:
          'The play is set in 1912 but was first performed in 1945. The 1945 audience had already lived through two World Wars, so the Inspector\'s warning about "fire and blood and anguish" lands as a fulfilled prophecy — making Priestley\'s message about social responsibility devastatingly urgent.',
      },
      {
        id: 'edx-lt1-m8-q5',
        question:
          'Why is the cyclical structure (the phone ringing again at the end) Priestley\'s most powerful structural device?',
        options: [
          'It allows the actors to perform the play twice in one evening',
          'It suggests the Inspector was a real police officer who will return',
          'It snatches away the comfortable resolution, showing that ignoring responsibility has inescapable consequences',
          'It proves that Mr Birling was correct to be suspicious of the Inspector',
        ],
        correct: 2,
        explanation:
          'The cyclical ending destroys any sense of relief the Birlings (or the audience) might feel. By returning to the beginning, Priestley shows that those who refuse to learn the lesson of social responsibility will be forced to confront it again — a structural warning aimed directly at post-war Britain.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 9 — Post-1914 Literature: Essay Writing Techniques
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m9',
    title: 'Post-1914 Literature: Essay Writing Techniques',
    duration: '55 min',
    content: `
<h2>Writing the Post-1914 Literature Essay (40 Marks)</h2>

<p>Section B provides a short <strong>extract</strong> from your post-1914 text and asks you to analyse both the extract and the <strong>wider text</strong> for <strong>40 marks</strong> (AO1–AO4). The extract-to-whole-text approach — the same method used for Shakespeare — is essential.</p>

<div class="key-term"><strong>Key Term: Extract-to-Whole-Text Approach</strong> — Begin with close analysis of the given extract, then broaden to the rest of the text, mirroring the marking guide requirement to address both the passage and the wider work.</div>

<h3>Planning in 5 Minutes</h3>
<ol>
  <li><strong>Identify the key theme.</strong> Read the extract twice, underline significant words. What is markers asking about — power, guilt, responsibility, conflict?</li>
  <li><strong>Brainstorm 3–4 wider-text moments</strong> where this theme appears, focusing on <em>development</em> or <em>contrast</em>.</li>
  <li><strong>Choose quotations.</strong> 2–3 short quotes from the extract and 2–3 memorised from wider text (3–6 words each).</li>
</ol>

<h3>Essay Structure: The Six-Part Framework</h3>
<ol>
  <li><strong>Thesis Introduction:</strong> State your argument — e.g. <em>"Priestley uses Sheila to expose the generational divide in attitudes towards responsibility."</em></li>
  <li><strong>Extract Paragraph 1:</strong> Close-read the first key moment. Embed a quotation, analyse at word level, link to theme and context.</li>
  <li><strong>Extract Paragraph 2:</strong> Analyse a second moment using a different technique (structure, dramatic device, imagery).</li>
  <li><strong>Wider Text Paragraph 1:</strong> A moment that <em>develops</em> the theme — where the idea is introduced or intensified.</li>
  <li><strong>Wider Text Paragraph 2:</strong> A contrasting or climactic moment. Integrate contextual knowledge naturally.</li>
  <li><strong>Conclusion:</strong> Link to the writer's overall message and context. Do not repeat your introduction.</li>
</ol>

<h3>Hitting All AOs in One Paragraph</h3>
<ul>
  <li><strong>AO1 (Point):</strong> <em>"Priestley presents Birling as wilfully ignorant of social responsibility."</em></li>
  <li><strong>AO2 (Analysis):</strong> <em>"The repeated 'I' in 'I say there isn't a chance of war' reveals egocentric worldview."</em></li>
  <li><strong>AO3 (Context):</strong> <em>"Setting the play in 1912 but writing in 1945, Priestley uses dramatic irony to expose Edwardian complacency."</em></li>
  <li><strong>AO4 (Evaluation):</strong> <em>"This makes Birling morally culpable — his refusal to see beyond himself enables exploitation."</em></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a separate "context paragraph" disconnected from analysis. Weave context into every paragraph — show <em>why</em> the writer made choices, not a standalone history lesson.</div>

<h3>Grade 5 vs Grade 9 Comparison</h3>
<p><strong>Grade 5:</strong> <em>"Sheila says 'I'll never, never do it again.' This shows she feels guilty."</em> — Paraphrases meaning only.</p>
<p><strong>Grade 9:</strong> <em>"The emphatic repetition in 'never, never' signals a moral awakening. The contracted 'll' suggests instinctive promise, positioning Sheila as the younger generation's conscience. Priestley embodies his socialist argument that accountability must extend beyond the individual."</em> — Analyses language, conceptualises meaning, integrates purpose.</p>

<h3>Quotation Bank: Grade 8–9 Transitions & Linking Phrases</h3>
<div class="text-extract">
<strong>Extract-to-Wider-Text Transitions:</strong><br>
"This moment is crystallised when…" / "The pattern established here develops further…" / "This theme reaches its climax when…" / "Conversely, Priestley complicates this idea through…" / "Elsewhere in the play, this dynamic reverses when…"<br><br>
<strong>Context Integration Transitions:</strong><br>
"Writing in the immediate aftermath of…" / "For a 1945 audience, recently emerged from wartime…" / "The historical context illuminates…" / "This reflects the contemporary anxiety about…" / "In the context of post-war social debate…"<br><br>
<strong>Analytical Development Transitions:</strong><br>
"This technique illuminates the underlying argument that…" / "The effect of this method is to position the audience as…" / "What emerges from this analysis is that…" / "The cumulative impact of such moments suggests…"
</div>

<h3>Grade 9 Insight: Conceptualised Interpretation</h3>
<div class="grade-9-insight"><strong>Grade 9 Conceptualisation:</strong> Move beyond listing points to building a unified argument. Rather than "Priestley criticises capitalism (point 1), Priestley criticises class (point 2), Priestley criticises patriarchy (point 3)," argue something like: "Priestley presents social injustice as systemic — rooted in interconnected failures of capitalism, class hierarchy, and patriarchal power. Each character's moral blindness stems from their investment in these systems. Only the Inspector (and Sheila/Eric) recognise that these systems are inseparable. This interconnection is why collective responsibility — not individual charity — is necessary." This is conceptualisation: a unified argument that brings the play's parts into coherent relation.</div>

<h3>Worked Example: Building Arguments Within Paragraphs</h3>
<p><strong>Question:</strong> "Explore how Priestley presents the theme of class in An Inspector Calls."</p>
<p><strong>Weak response (list-like):</strong></p>
<div class="text-extract">
"Mrs Birling is snobbish about Eva because she is poor. Gerald is upper class and treats Daisy Renton disrespectfully. The Inspector criticises their class attitudes. This shows that Priestley thinks class is a problem."<br><br>
(Problems: No analysis of how language or dramatic action conveys meaning; no context; statements are obvious restatements of plot.)
</div>
<p><strong>Strong response (argument-driven):</strong></p>
<div class="text-extract">
"Priestley critiques class not as individual snobbery but as a structural system that dehumanises the working classes. Mrs Birling's truncated phrase 'Girls of that class—' reveals her linguistic discomfort even naming Eva's status; she cannot complete the thought because naming enforces the gap between herself and Eva. This linguistic failure mirrors moral failure: she cannot extend empathy across class lines because the system teaches her that class is determinative of human worth. Similarly, Gerald's upper-class seduction of Daisy Renton ('intensely grateful') treats working-class female sexuality as a commodity to be obtained through superficial kindness. Priestley's dramatic irony is that both characters believe themselves moral within their class framework. The Inspector's intervention — "We are members of one body. We are responsible for each other" — directly contradicts the class ideology that has structured the Birlings' world. In the play's final moments, when Mr and Mrs Birling refuse the Inspector's lesson and close ranks with Gerald, Priestley shows that pre-war class hierarchy was reinforced precisely through such collective refusals to acknowledge systemic interdependence. Writing in 1945, post-World War II, Priestley argues that societies that ignore collective responsibility face catastrophic consequences. Class ideology is thus not merely a prejudice to be overcome through individual goodwill but a structural barrier to the collective consciousness necessary for post-war reconstruction."<br><br>
(Strengths: Unified argument; precise language analysis; integration of context; understanding of Priestley's purpose; demonstrates how multiple scenes build towards a thematic conclusion.)
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
<td style="padding: 6px;">~60–80 words</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>2. Extract Analysis 1</strong></td>
<td style="padding: 6px;">First key moment from printed extract; analyse language closely</td>
<td style="padding: 6px;">PETAL framework; embed short quotations (3–6 words)</td>
<td style="padding: 6px;">~120–150 words</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>3. Extract Analysis 2</strong></td>
<td style="padding: 6px;">Second key moment from printed extract; use different technique (structure, dialogue, stage direction)</td>
<td style="padding: 6px;">Compare/contrast techniques; weave in brief context</td>
<td style="padding: 6px;">~120–150 words</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>4. Wider Play 1</strong></td>
<td style="padding: 6px;">A moment that <em>develops</em> the theme introduced in extract</td>
<td style="padding: 6px;">Show how theme evolves; integrate context naturally</td>
<td style="padding: 6px;">~120–150 words</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>5. Wider Play 2</strong></td>
<td style="padding: 6px;">A moment that <em>complicates</em> or <em>culminates</em> the theme</td>
<td style="padding: 6px;">Build to highest conceptual point; show thematic arc across play</td>
<td style="padding: 6px;">~120–150 words</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>6. Conclusion</strong></td>
<td style="padding: 6px;">Link to Priestley's overall purpose and contemporary context</td>
<td style="padding: 6px;">Do NOT repeat introduction; offer evaluative judgment</td>
<td style="padding: 6px;">~60–80 words</td>
</tr>
</table>

<h3>Worked Example: Extract-Based Response (Full Essay, c. 550 words)</h3>
<p><strong>Question:</strong> "How does Priestley use the character of Mr Birling to explore ideas about responsibility?"</p>
<p><strong>Extract (Act 1):</strong> "A man has to mind his own business and look after himself and his own — and if he doesn't he's not worth much."</p>

<div class="text-extract">
<strong>THESIS:</strong> Priestley uses Mr Birling to embody the capitalist individualism that Priestley sees as morally bankrupt. Birling's assertion that men owe nothing to those beyond their immediate family encapsulates a pre-war worldview that Priestley, writing in 1945, presents as culpable in social injustice and, implicitly, in the catastrophe of the war. Across the play, Birling's refusal of collective responsibility is contrasted with the Inspector's socialist ethic, positioning the audience to reject Birling's philosophy and embrace the play's message: that societies must be built on the principle "we are members of one body."<br><br>

<strong>EXTRACT ANALYSIS 1:</strong> Priestley's characterisation of Birling emphasises the self-interested basis of his philosophy. The repetition of "his own" (appearing twice in a single sentence) reveals an obsessive focus on familial and personal benefit. The stark pronoun "he" in "if he doesn't he's not worth much" strips away sentiment — for Birling, moral worth is entirely contingent on economic self-interest. No allowance is made for circumstance, disability, or systemic inequality. Priestley's dramatic irony is acute: Birling voices this philosophy immediately after firing Eva Smith from Milwards, having just profited from her labour. His blindness to the connection between his profit and Eva's destitution exposes the moral hazard embedded in capitalist logic. A contemporary audience would recognise in Birling's individualism the pre-war ideology Priestley blames for social inequality and, by extension, for World War II's devastation.<br><br>

<strong>EXTRACT ANALYSIS 2:</strong> Priestley embeds this philosophy into Birling's broader dramatic characterisation, particularly through his pomposity and false certainty. Birling's confident prediction that the Titanic is "unsinkable" and that war is unlikely immediately precedes the Inspector's arrival — the play's dramatic hinge. Priestley uses dramatic irony: the audience knows both the Titanic sank and war came. This irony undermines Birling's authority. We recognise him as a man whose certainty masks ignorance and whose self-interest prevents moral foresight. By Act 3, when Birling refuses the Inspector's lesson and reverts to his philosophy ("it's all over now"), Priestley shows Birling incapable of growth. He remains imprisoned in ideology.<br><br>

<strong>WIDER PLAY 1:</strong> Contrasted with Sheila and Eric, Birling's intransigence becomes Priestley's critique of his generation's moral failure. Where Sheila recognises "these girls aren't cheap labour — they're people," Birling doubles down on individualism. Even witnessing Eva/Daisy's story — a narrative designed to produce empathy — fails to move him. This contrast positions the audience to reject Birling's philosophy and embrace the younger generation's emerging collectivism.<br><br>

<strong>WIDER PLAY 2:</strong> The play's ending, when the Inspector departs and a police inspector arrives, leaves ambiguous whether the Inspector was supernatural. This ambiguity forces each character to choose: will they internalise the lesson (responsibility to all), or will they revert to prior ideology? Birling's choice to "say nothing" and return to business as usual represents Priestley's darkest assessment: without systemic change, moral appeals alone cannot overcome self-interest. The final ringing telephone — potentially announcing another crisis — suggests that societies ignoring collective responsibility cycle through catastrophe.<br><br>

<strong>CONCLUSION:</strong> Through Mr Birling, Priestley exposes capitalist individualism as not merely ethically insufficient but actively destructive. Birling's arc—or rather, his non-arc, his absolute refusal of growth—embodies Priestley's conviction that pre-war society was culpable in its own catastrophes. Only societies founded on the principle of collective responsibility can avoid tragedy. Priestley's play is thus a call to post-war Britain: choose Sheila's conscience or Birling's blindness.
<div class="source">~550 words; demonstrates Grade 8–9 standard: unified argument, precise analysis, integrated context, thematic coherence</div>
</div>

<h3>Planning in 5 Minutes</h3>
<ol>
  <li><strong>Read the extract twice.</strong> Underline the 2–3 most significant words or phrases.</li>
  <li><strong>Identify the theme.</strong> What is markers asking about — responsibility, class, morality, gender?</li>
  <li><strong>Brainstorm wider-play moments:</strong> List 4–5 scenes where this theme appears (different from the extract). Include one moment that <em>develops</em> the theme and one that <em>culminates</em> it.</li>
  <li><strong>Select quotations:</strong> 2–3 from the extract; 2–3 from memory (3–6 words each — brevity is strength).</li>
  <li><strong>Write a one-sentence thesis:</strong> "Priestley uses [character/technique] to argue that [thematic claim] because [evidence of why this matters]."</li>
</ol>

<h3>Transition Phrases (Grade 8–9)</h3>
<ul>
  <li><strong>Extract to wider text:</strong> "This moment is crystallised when…" / "The pattern established here develops further…" / "This tension reaches its climax when…" / "Conversely, Priestley complicates this idea when…"</li>
  <li><strong>Contrast:</strong> "In contrast to Birling's refusal…" / "Yet where Act 1 establishes…, by Act 2 Priestley shows…"</li>
  <li><strong>Context:</strong> "Writing in 1945, emerging from…" / "For a contemporary audience, this would…" / "The historical context of post-war reconstruction illuminates…"</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Avoid mechanical transitions like "This links to context because…" or "Another example is…" Instead, weave context and evidence into flowing analytical sentences. Compare: "The Birlings' moral blindness reflects pre-war capitalist ideology" (integrated) vs. "This is an example of capitalism. Capitalism is bad" (bolted-on).</div>

<h3>Grade 5 vs Grade 9 Response Comparison</h3>
<table style="width:100%; border-collapse: collapse;">
<tr style="border-bottom: 2px solid #333;">
<th style="text-align: left; padding: 6px;"><strong>Feature</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Grade 5 Response</strong></th>
<th style="text-align: left; padding: 6px;"><strong>Grade 8–9 Response</strong></th>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Thesis</strong></td>
<td style="padding: 6px;">"Priestley thinks responsibility is important."</td>
<td style="padding: 6px;">"Priestley presents collective responsibility as the moral foundation for post-war society, contrasting Birling's capitalist individualism with the Inspector's socialist ethic to argue that societies ignoring interdependence cycle through catastrophe."</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Evidence Use</strong></td>
<td style="padding: 6px;">Long quotations paraphrased; only surface meaning extracted.</td>
<td style="padding: 6px;">Short quotations (3–6 words) embedded in analytical sentences; precise focus on word choice, connotations, techniques.</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Structure</strong></td>
<td style="padding: 6px;">Extract analysis, then separate "context paragraph," then random wider-play moments.</td>
<td style="padding: 6px;">Integrated six-part structure: thesis, extract 1, extract 2, wider 1, wider 2, conclusion. Context woven throughout.</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Analysis Depth</strong></td>
<td style="padding: 6px;">"Sheila changes her mind and realises girls are people."</td>
<td style="padding: 6px;">"Priestley constructs Sheila's recognition that girls 'aren't cheap labour — they're people' as a moment of ideological rupture. The simplicity of 'people' — rejecting her mother's qualifying 'girls of that class' — shows Sheila transcending the linguistic-ideological framework of her class."</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="padding: 6px;"><strong>Context Integration</strong></td>
<td style="padding: 6px;">Separate, disconnected paragraph: "Priestley wrote this in 1945 after World War II."</td>
<td style="padding: 6px;">Context embedded: "Writing in 1945, post-World War II, Priestley argues that societies ignoring collective responsibility face catastrophic consequences. Birling's individualism is thus not merely personal moral failure but national culpability."</td>
</tr>
<tr>
<td style="padding: 6px;"><strong>Conceptualisation</strong></td>
<td style="padding: 6px;">Lists separate points: "Priestley criticises capitalism, Priestley criticises class, Priestley criticises patriarchy."</td>
<td style="padding: 6px;">Unified argument: "Priestley presents social injustice as systemic — rooted in interconnected failures of capitalism, class hierarchy, and patriarchal power structures. These systems are inseparable; only collective consciousness can address them."</td>
</tr>
</table>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a separate "context paragraph" disconnected from analysis. This turns context into background information rather than evidence. Instead, weave context into every paragraph — show <em>why</em> the writer made particular choices given their historical moment.</div>
`,
    quiz: [
      {
        id: 'edx-lt1-m9-q1',
        question:
          'In the six-part essay framework, what should come immediately after the two extract analysis paragraphs?',
        options: [
          'A conclusion summarising all key points',
          'A context paragraph covering historical background',
          'Two wider-text paragraphs showing thematic development',
          'A comparison paragraph linking the extract to a different text',
        ],
        correct: 2,
        explanation:
          'After analysing the extract in two paragraphs, you move to the wider text with two paragraphs that show how the theme develops or contrasts elsewhere in the text, before writing your conclusion.',
      },
      {
        id: 'edx-lt1-m9-q2',
        question:
          'What is the main difference between a Grade 5 and a Grade 9 response?',
        options: [
          'Grade 9 responses are significantly longer',
          'Grade 9 responses use more quotations from the text',
          'Grade 9 responses analyse specific language features and integrate context with conceptualised interpretation',
          'Grade 9 responses always disagree with the question statement',
        ],
        correct: 2,
        explanation:
          'A Grade 9 response stands out through close language analysis (word-level, not just phrase-level), conceptualised interpretation that goes beyond surface meaning, and seamless integration of context and writer\'s purpose.',
      },
      {
        id: 'edx-lt1-m9-q3',
        question:
          'Why should you avoid writing a separate "context paragraph" in your essay?',
        options: [
          'Because context is not assessed in the Literature exam',
          'Because markers are looking for context woven into every paragraph, not isolated as an afterthought',
          'Because there is not enough time to write a dedicated context paragraph',
          'Because context is only relevant to the Shakespeare question',
        ],
        correct: 1,
        explanation:
          'Context (AO3) should be integrated into your analytical paragraphs, showing why the writer made particular choices. A standalone context paragraph tends to become descriptive background that does not connect to the argument.',
      },
      {
        id: 'edx-lt1-m9-q4',
        question:
          'How long should you spend planning your post-1914 literature essay?',
        options: [
          '2 minutes',
          '5 minutes',
          '10 minutes',
          'No planning is needed — start writing immediately',
        ],
        correct: 1,
        explanation:
          'Five minutes of focused planning — identifying the theme, brainstorming wider-text moments, and selecting quotations — prevents rambling and ensures your essay has a clear structure and argument.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Paper 1 Exam Strategy & Practice
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m10',
    title: 'Paper 1 Exam Strategy & Practice',
    duration: '60 min',
    content: `
<h2>Paper 1 Exam Strategy — Putting It All Together</h2>

<p>Paper 1 is <strong>1 hour 45 minutes</strong> and worth <strong>80 marks</strong>, split equally between Section A (Shakespeare) and Section B (Post-1914).</p>

<div class="key-term"><strong>Key Term: Time-per-Mark</strong> — You have roughly 1.3 minutes per mark, but planning and review time means writing windows are tighter than you think.</div>

<h3>Full Timing Plan</h3>
<ol>
  <li><strong>0–5 min:</strong> Shakespeare — read extract twice, plan (theme, moments, quotes).</li>
  <li><strong>5–45 min:</strong> Shakespeare — write (intro, 2 extract, 2 wider-text paragraphs, conclusion).</li>
  <li><strong>45–50 min:</strong> Shakespeare — review for errors and balance.</li>
  <li><strong>50–55 min:</strong> Post-1914 — read and plan.</li>
  <li><strong>55–95 min:</strong> Post-1914 — write. Do not let fatigue lower standards.</li>
  <li><strong>95–100 min:</strong> Post-1914 — review.</li>
  <li><strong>100–105 min:</strong> Final check — scan both essays, verify name and candidate number.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> If running over on Section A, stop at 50 minutes and move on. Two solid essays always beat one excellent and one rushed.</div>

<h3>Reading the Extract</h3>
<p><strong>First read:</strong> understand content, speaker, tone — do not write yet. <strong>Second read:</strong> annotate — underline key words, name techniques, note tone shifts. <strong>Then:</strong> highlight the question's instruction word; every paragraph must connect to it.</p>

<h3>Common Pitfalls</h3>
<ul>
  <li><strong>Narrative retelling:</strong> Analyse <em>how</em> and <em>why</em>, not <em>what</em> happens. Markers know the plot.</li>
  <li><strong>Forgetting context:</strong> No AO3 = capped grade. Integrate context into analytical paragraphs.</li>
  <li><strong>Unbalanced answers:</strong> Aim for 50/50 — two paragraphs extract, two wider text.</li>
  <li><strong>Feature-spotting:</strong> Naming a metaphor is not enough — explain what it suggests and its effect.</li>
  <li><strong>Running out of time:</strong> Poor Section A management is the most common tactical error.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> "The writer uses 'dark' to show darkness" is circular. Instead: "'Dark' carries connotations of moral corruption, suggesting respectability masks a deeper failing."</div>

<h3>Revision Strategies</h3>
<ul>
  <li><strong>Quote banks:</strong> 20–30 quotations per text by theme, each with a one-sentence analysis.</li>
  <li><strong>Theme maps:</strong> Mind maps linking characters, moments, quotes, and context.</li>
  <li><strong>Timed essays:</strong> At least three per text, 45 minutes. Mark against the scheme.</li>
  <li><strong>Paragraph drills:</strong> 8-minute paragraphs integrating all four AOs.</li>
</ul>

<h3>Mock Walkthrough</h3>
<p><strong>Shakespeare:</strong> <em>"How does Shakespeare present ambition in Macbeth?"</em> — ambition vs conscience in extract; wider text — witches' prophecy, "unsex me here," "tomorrow" soliloquy. Link to Jacobean regicide anxieties.</p>
<p><strong>Post-1914:</strong> <em>"How does Priestley present social class?"</em> — Plan: Birling detachment in extract; wider text — "mind his own business," "fire and blood," Sheila's transformation.</p>

<h3>Final Checklist</h3>
<ul>
  <li>Two complete essays — Shakespeare and Post-1914?</li>
  <li>Each addresses both extract and wider text?</li>
  <li>Context (AO3) and language writer's methods analysis (AO2) throughout?</li>
  <li>SPaG and handwriting checked?</li>
</ul>

<p>Grade boundaries (rough guide, both papers): <strong>Grade 9</strong> ~70–75%, <strong>Grade 7</strong> ~55–60%, <strong>Grade 5</strong> ~42–48%, <strong>Grade 4</strong> ~35–40%.</p>

<div class="examiner-tip"><strong>Top Tip:</strong> The difference between Grade 8 and 9 is sophistication of argument and precision of analysis — not the amount you write. Quality over quantity.</div>
`,
    quiz: [
      {
        id: 'edx-lt1-m10-q1',
        question:
          'According to the recommended timing plan, how long should you spend writing your Shakespeare essay (excluding planning and review)?',
        options: [
          '30 minutes',
          '35 minutes',
          '40 minutes',
          '45 minutes',
        ],
        correct: 2,
        explanation:
          'The timing plan allocates 40 minutes for writing the Shakespeare essay, with 5 minutes for planning beforehand and 5 minutes for review afterwards — totalling 50 minutes for the entire section.',
      },
      {
        id: 'edx-lt1-m10-q2',
        question:
          'What should you do if you are running over time on Section A (Shakespeare)?',
        options: [
          'Skip the review stage and keep writing',
          'Stop at the 50-minute mark and move on to Section B',
          'Write a shorter conclusion and continue for another 10 minutes',
          'Abandon Section B and focus entirely on Section A',
        ],
        correct: 1,
        explanation:
          'Stopping at the 50-minute mark and moving to Section B is essential. Two solid essays always earn more marks overall than one excellent essay and one rushed or incomplete essay.',
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
          'Running out of time on the second essay is the most common tactical error. Students spend too long on Section A, leaving insufficient time for Section B — which costs more marks than the extra detail in Section A would have gained.',
      },
      {
        id: 'edx-lt1-m10-q4',
        question:
          'What is the ideal balance between extract analysis and wider-text analysis in a Paper 1 essay?',
        options: [
          '80% extract, 20% wider text',
          '70% extract, 30% wider text',
          '50% extract, 50% wider text',
          '30% extract, 70% wider text',
        ],
        correct: 2,
        explanation:
          'Aim for a roughly 50/50 split — two paragraphs on the extract and two on the wider text. Students who focus almost entirely on the extract miss marks for demonstrating knowledge of the whole text.',
      },
    ],
  }
  ],
  assessmentQuestions: [
    { id: 'edx-lt1-a1', question: 'How long is Edexcel Literature Paper 1 and what percentage of the GCSE does it represent?', options: ['1 hour 30 minutes, 40%', '1 hour 45 minutes, 50%', '2 hours, 50%', '2 hours 15 minutes, 60%'], correct: 1, explanation: 'Paper 1 is 1 hour 45 minutes long and worth 80 marks, accounting for 50% of the total GCSE.' },
    { id: 'edx-lt1-a2', question: 'What is Macbeth\'s hamartia (tragic flaw)?', options: ['Cowardice', 'Vaulting ambition', 'Jealousy', 'Loyalty'], correct: 1, explanation: 'Macbeth identifies his own flaw as "vaulting ambition, which o\'erleaps itself" in Act 1 Scene 7. It drives every destructive choice in the play.' },
    { id: 'edx-lt1-a3', question: 'What does "extract-to-whole" mean in the Edexcel Shakespeare question?', options: ['Only analyse the extract', 'Analyse the extract first, then discuss the wider play', 'Ignore the extract and write about the whole play', 'Compare two extracts from different acts'], correct: 1, explanation: 'Extract-to-whole means starting with detailed analysis of the printed passage, then broadening to show how the theme or character develops across the full text.' },
    { id: 'edx-lt1-a4', question: 'Which what markers look for tests spelling, punctuation and grammar on Paper 1?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 3, explanation: 'Technical accuracy (AO4) assesses SPaG and is worth up to 4 additional marks. It is tested on one essay only \u2014 typically the Shakespeare response.' },
    { id: 'edx-lt1-a5', question: 'Why would Duncan\'s murder have been particularly shocking to a Jacobean audience?', options: ['Because murder was rare on stage', 'Because they believed in the Divine Right of Kings, making regicide a sin against God', 'Because Duncan was based on a real English king', 'Because the audience sympathised with Lady Macbeth'], correct: 1, explanation: 'The Divine Right of Kings held that monarchs were appointed by God. Killing a king was not merely treason but a violation of the sacred, divinely ordained order.' },
    { id: 'edx-lt1-a6', question: 'What does the "L" in the PETAL framework stand for?', options: ['Language', 'Link to context', 'Literary device', 'Line reference'], correct: 1, explanation: 'In PETAL, L stands for "Link to context" \u2014 connecting your analysis to the social, historical, or literary context of the text (AO3).' },
    { id: 'edx-lt1-a7', question: 'When was An Inspector Calls written, and when is it set?', options: ['Written 1912, set 1945', 'Written 1945, set 1912', 'Written 1945, set 1945', 'Written 1912, set 1912'], correct: 1, explanation: 'The play was written in 1945 but set in 1912. This time gap creates dramatic irony \u2014 the audience knows about events the characters cannot foresee.' },
    { id: 'edx-lt1-a8', question: 'Which character serves as Priestley\'s primary mouthpiece for socialist ideas?', options: ['Mr Birling', 'Sheila Birling', 'Inspector Goole', 'Gerald Croft'], correct: 2, explanation: 'Inspector Goole delivers the play\'s central message: "We are members of one body. We are responsible for each other." He functions as Priestley\'s socialist conscience.' },
    { id: 'edx-lt1-a9', question: 'What does the lighting change from "pink and intimate" to "brighter and harder" symbolise?', options: ['The time of day changing', 'The transition from comfortable illusion to harsh moral scrutiny', 'The Inspector turning on a lamp', 'Sheila becoming more confident'], correct: 1, explanation: 'Priestley uses lighting symbolically: "pink and intimate" represents the Birlings\' comfortable self-deception; "brighter and harder" signals the arrival of truth and moral accountability.' },
    { id: 'edx-lt1-a10', question: 'What is the ideal balance between extract analysis and wider-text analysis in a Paper 1 essay?', options: ['80% extract, 20% wider text', '70% extract, 30% wider text', '50% extract, 50% wider text', '30% extract, 70% wider text'], correct: 2, explanation: 'Aim for roughly 50/50 \u2014 two paragraphs on the extract and two on the wider text. Students who focus almost entirely on the extract miss marks for whole-text knowledge.' },
    { id: 'edx-lt1-a11', question: 'Why is the cyclical structure of An Inspector Calls significant?', options: ['It allows the play to be performed twice', 'It snatches away comfortable resolution, showing ignoring responsibility has consequences', 'It proves the Inspector was a real officer', 'It shows Mr Birling was right to be suspicious'], correct: 1, explanation: 'The phone ringing again destroys any relief. Priestley shows that those who refuse to learn the lesson of social responsibility will be forced to confront it again.' },
    { id: 'edx-lt1-a12', question: 'What should you do if you are running over time on Section A (Shakespeare)?', options: ['Skip the review and keep writing', 'Stop at the 50-minute mark and move on to Section B', 'Write a shorter conclusion and continue for another 10 minutes', 'Abandon Section B entirely'], correct: 1, explanation: 'Two solid essays always earn more marks than one excellent and one rushed essay. Stop at 50 minutes and move on.' },
  ],
};

const edexcelLitPaper2: CourseData = {
  id: 'edexcel-lit-paper2',
  title: 'Edexcel GCSE English Literature \u2013 Paper 2',
  subtitle: '19th-Century Novel & Poetry Anthology',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: '1ET2',
  specCode: '1ET2/02',
  price: 0,
  duration: '14 weeks',
  level: 'GCSE (Years 10-11)',
  description: 'Master Edexcel Literature Paper 2: 19th-Century Novel (A Christmas Carol) and Poetry Anthology. Extract responses, poetry analysis, and comparison essays.',
  color: '#d97706',
  moduleList: [
// ──────────────────────────────────────────────
  // MODULE 1 — Paper 2 Overview & what markers look for
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m1',
    title: 'Paper 2 Overview & what markers look for',
    duration: '45 min',
    content: `
<h2>Edexcel GCSE English Literature — Paper 2</h2>

<p>Paper 2 is worth <strong>80 marks</strong> and accounts for <strong>50%</strong> of your total Literature GCSE. You have <strong>2 hours and 15 minutes</strong> to complete two sections covering the 19th-century novel and the poetry anthology. This paper tests your ability to write analytically about prose fiction and poetry, respond to an extract, sustain a longer essay argument, and compare poems — all under timed conditions.</p>

<div class="key-term"><strong>Key Term: Open Book (Poetry Anthology)</strong> — In Section B, you are provided with a clean copy of the Edexcel poetry anthology. You may refer to it during the exam, but it must not contain any annotations, highlights, or notes. This means you do not need to memorise poems word-for-word, but you <em>must</em> know them well enough to navigate them quickly.</div>

<h3>Paper Structure at a Glance</h3>
<ul>
  <li><strong>Section A — 19th-Century Novel (40 marks):</strong> One question on your studied text. You are given an extract and must write an essay that analyses the extract <em>and</em> explores the wider novel. This section is <strong>closed book</strong> — no text is provided beyond the printed extract.</li>
  <li><strong>Section B Part 1 — Poetry Anthology (20 marks):</strong> One named poem from the anthology. You write an analytical response exploring how the poet presents a theme or idea.</li>
  <li><strong>Section B Part 2 — Unseen Poetry Comparison (20 marks):</strong> You are given an unseen poem and must compare it with one poem from the anthology. The comparison must cover both content and method.</li>
</ul>

<h3>what markers look for Tested</h3>
<ul>
  <li><strong>AO1 (Section A &amp; B)</strong> — Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.</li>
  <li><strong>AO2 (Section A &amp; B)</strong> — Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</li>
  <li><strong>AO3 (Section A only)</strong> — Show understanding of the relationships between texts and the contexts in which they were written.</li>
  <li><strong>technical accuracy (AO4, Section B Part 2)</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. <em>4 of the 20 marks in the comparison question are awarded for technical accuracy (AO4).</em></li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Section A is worth half the paper, so it deserves half your time. A common error is spending too long on the novel and rushing the poetry. Stick to the timing plan below — practise it under timed conditions before the exam so it becomes automatic.</div>

<h3>Mark Distribution by AO</h3>
<ul>
  <li><strong>Section A (Novel):</strong> AO1 — 20 marks, Writer's methods (AO2) — 20 marks, Context (AO3) — woven throughout (no separate allocation; Markers reward context where it enhances analysis).</li>
  <li><strong>Section B Part 1 (Single Poem):</strong> AO1 — 10 marks, Writer's methods (AO2) — 10 marks.</li>
  <li><strong>Section B Part 2 (Comparison):</strong> AO1 — 6 marks, Writer's methods (AO2) — 6 marks, Context (AO3) — 4 marks, AO4 — 4 marks.</li>
</ul>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0–5 min:</strong> Read the novel extract carefully. Annotate key words, literary devices, and links to wider themes.</li>
  <li><strong>5–55 min:</strong> Write your Section A essay (40 marks). Spend roughly half on the extract and half on the wider novel.</li>
  <li><strong>55–60 min:</strong> Read the named anthology poem in Section B Part 1. Plan three or four analytical points.</li>
  <li><strong>60–85 min:</strong> Write your single-poem response (20 marks).</li>
  <li><strong>85–90 min:</strong> Read the unseen poem. Identify points of comparison with the anthology poem.</li>
  <li><strong>90–125 min:</strong> Write your comparison essay (20 marks). Structure around similarities and differences in theme, language, and form.</li>
  <li><strong>125–135 min:</strong> Review all answers. Check quotation accuracy, spelling of authors' names, and paragraph coherence.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Section A as two separate tasks — one on the extract and one on the rest of the novel. markers are looking for a <em>unified</em> essay that moves fluidly between the extract and the wider text. Use the extract as your launchpad, then broaden your argument with references from elsewhere in the novel, before returning to the extract to reinforce your points.</div>

<h3>What "Explore" and "Analyse" Mean on This Paper</h3>
<p>The command words on Paper 2 are precise. <strong>"Explore"</strong> means you should investigate the text in depth, considering multiple interpretations and layers of meaning. <strong>"Analyse"</strong> means you should break down the writer's choices — examining <em>how</em> language, structure, and form create specific effects on the reader. Both require you to go beyond description and engage critically with the text.</p>

<p>In Section B Part 2, the word <strong>"compare"</strong> is critical. You must write about both poems throughout your response — not one and then the other. Integrated comparison is what distinguishes a top-band answer from a mid-range one.</p>
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
          'Which what markers look for is tested ONLY in Section A (the 19th-century novel)?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 2,
        explanation:
          'context (AO3) is assessed in Section A, where students must show understanding of the relationship between the novel and the context in which it was written. AO1 and AO2 appear across both sections, and AO4 appears only in Section B Part 2.',
      },
      {
        id: 'edx-lt2-m1-q3',
        question:
          'In Section B Part 2 (the comparison question), how many of the 20 marks are awarded for technical accuracy (AO4, quality of written expression)?',
        options: ['0 marks', '2 marks', '4 marks', '8 marks'],
        correct: 2,
        explanation:
          'Four of the 20 marks on the comparison question are awarded for AO4: vocabulary, sentence structure, spelling, and punctuation. This is the only place on Paper 2 where the quality of your written English is separately assessed.',
      },
      {
        id: 'edx-lt2-m1-q4',
        question:
          'Which section of Paper 2 is "open book", and what does that mean in practice?',
        options: [
          'Section A — you receive the full novel text',
          'Section B — you receive a clean, unannotated copy of the poetry anthology',
          'Both sections — you may bring your own annotated texts',
          'Neither section — the entire paper is closed book',
        ],
        correct: 1,
        explanation:
          'Section B is open book: you are given a clean copy of the Edexcel poetry anthology with no annotations. Section A (the novel) is closed book — you only see the printed extract.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — 19th-Century Novel: Context & Conventions (A Christmas Carol Focus)
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m2',
    title: '19th-Century Novel: Context & Conventions (A Christmas Carol Focus)',
    duration: '55 min',
    content: `
<h2>A Christmas Carol — Context, Conventions &amp; Dickens's Purpose</h2>

<p><em>A Christmas Carol</em> is by far the most popular 19th-century novel choice on Edexcel Literature Paper 2. Understanding its historical context is not optional — Context (AO3) requires you to show how the text relates to the time in which it was written. This module equips you with the contextual knowledge Markers reward and, crucially, teaches you how to <em>integrate</em> it into analytical paragraphs rather than bolting it on.</p>

<div class="key-term"><strong>Key Term: Novella</strong> — A prose narrative longer than a short story but shorter than a full novel, typically between 15,000 and 40,000 words. <em>A Christmas Carol</em> is a novella — its compact form allows Dickens to deliver a focused moral message with an allegorical structure divided into five staves (chapters).</div>

<h3>Historical Context: Victorian London in 1843</h3>
<p>When Dickens published <em>A Christmas Carol</em> in December 1843, Britain was in the grip of rapid industrial change. The following contextual factors are essential for a strong context (AO3) response:</p>

<ul>
  <li><strong>The Poor Law Amendment Act (1834):</strong> This law created workhouses where the destitute were sent to labour in appalling conditions. The philosophy was deliberate harshness — poverty was seen as a moral failing, and relief was made as unpleasant as possible to discourage dependency. Scrooge directly echoes this attitude when he asks, <em>"Are there no prisons? Are there no workhouses?"</em></li>
  <li><strong>Malthusian Economics:</strong> Thomas Malthus argued that population growth would inevitably outstrip food supply, and that helping the poor only encouraged overpopulation. Scrooge channels Malthus when he refers to the poor dying to <em>"decrease the surplus population"</em> — a phrase Dickens uses to expose the cruelty of this ideology.</li>
  <li><strong>Industrial Capitalism:</strong> Factory owners and businessmen accumulated enormous wealth while workers — including children — endured poverty wages, long hours, and dangerous conditions. Dickens saw this inequality first-hand during a visit to Manchester's cotton mills in October 1843, just weeks before he began writing the novella.</li>
  <li><strong>Workhouse Conditions:</strong> Families were separated, food was minimal, and inmates wore uniforms. The Andover workhouse scandal of 1845 (where starving inmates gnawed on bones) was still two years away, but conditions were already notorious. Dickens had experienced poverty himself as a child, working in Warren's Blacking Factory at the age of twelve.</li>
  <li><strong>Christmas Traditions:</strong> The modern Christmas — centred on family, generosity, and feasting — was still taking shape in the 1840s. Prince Albert had popularised the Christmas tree; Christmas cards were first commercially produced in 1843. Dickens's novella played a significant role in defining the Victorian Christmas as a time of charity and goodwill.</li>
</ul>

<div class="text-extract">"If they would rather die," said Scrooge, "they had better do it, and decrease the surplus population. Besides — excuse me — I don't know that." "But you might know it," observed the gentleman. "It's not my business," Scrooge returned. "It's enough for a man to understand his own business, and not to interfere with other people's."<div class="source">Charles Dickens, <em>A Christmas Carol</em>, Stave One</div></div>

<h3>Genre and Form: Allegory, Parable, Moral Tale</h3>
<p>Understanding <em>what kind</em> of text <em>A Christmas Carol</em> is will strengthen your AO2 analysis:</p>
<ul>
  <li><strong>Allegory:</strong> The characters and events represent broader moral truths. Scrooge is not just one miser — he stands for all of industrial capitalism's selfish indifference.</li>
  <li><strong>Parable:</strong> Like a Biblical parable, the story teaches a simple moral lesson through narrative. The structure mirrors a sermon: sin (Stave One), warning (Staves Two–Four), redemption (Stave Five).</li>
  <li><strong>Ghost Story:</strong> Dickens uses the supernatural — Marley's ghost, the three Spirits — as a narrative device to compress time. The ghosts allow Scrooge (and the reader) to witness past, present, and future in a single night, making transformation feel urgent and dramatic.</li>
  <li><strong>Five Staves:</strong> Dickens calls his chapters "staves" — a musical term — reinforcing the idea that the novella is a <em>carol</em>, a song of celebration and joy. The structure itself mirrors the thematic journey from discord to harmony.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> The best answers do not dump context in a separate paragraph. Instead, they weave it into analysis. Compare these two approaches:<br><br><strong>Weak:</strong> "In Victorian times, there were workhouses. Scrooge mentions workhouses."<br><strong>Strong:</strong> "Dickens, writing just nine years after the Poor Law Amendment Act of 1834, uses Scrooge's dismissive reference to workhouses to expose how institutionalised cruelty had become normalised among the wealthy. The audience would have recognised this attitude as commonplace — which makes its dramatic dismantling through the Spirits all the more powerful."<br><br>The second version integrates a specific date, names the legislation, and explains its <em>effect</em> on the reader — this is what context (AO3) at the top band looks like.</div>

<h3>Dickens's Purpose: Social Reform</h3>
<p>Dickens did not write <em>A Christmas Carol</em> merely to entertain. He had a clear <strong>didactic purpose</strong> — to attack greed, expose the suffering of the poor, and champion generosity. Key points to remember:</p>
<ul>
  <li>He originally planned to write a political pamphlet after visiting Manchester's Field Lane Ragged School, but chose fiction as a more powerful vehicle for change.</li>
  <li>He insisted on keeping the price low (five shillings) so that working-class readers could afford it — sacrificing profit for reach.</li>
  <li>The novella's emotional power lies in its juxtaposition of wealth and poverty: the Cratchits' humble but loving Christmas dinner against Scrooge's cold, solitary existence.</li>
  <li>Dickens uses the character arc of Scrooge — from miser to philanthropist — to argue that <em>individual moral transformation</em> is possible and necessary.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "Dickens wanted to show that Christmas is important." This is far too vague for a Literature essay. Be specific: Dickens wanted to <em>challenge the Malthusian view that the poor were expendable</em>, to <em>expose the moral bankruptcy of laissez-faire capitalism</em>, and to <em>argue that personal generosity could remedy social injustice</em>. Always connect purpose to specific contextual knowledge.</div>

<h3>Context (AO3) Sentence Starters That Markers Reward</h3>
<p>Practise using these phrases to integrate context naturally into your paragraphs:</p>
<ul>
  <li><em>"Dickens, writing in 1843, would have been aware that..."</em></li>
  <li><em>"A contemporary reader would have recognised this as..."</em></li>
  <li><em>"This reflects the prevailing Victorian attitude that..."</em></li>
  <li><em>"Dickens uses [character/event] to challenge the belief that..."</em></li>
  <li><em>"The reference to [specific detail] directly alludes to..."</em></li>
</ul>

<p>Each of these phrases anchors your contextual point to the text and the time period simultaneously, which is precisely what context (AO3) demands.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m2-q1',
        question:
          'What was the Poor Law Amendment Act of 1834 designed to do, and how does Scrooge reflect its philosophy?',
        options: [
          'It abolished child labour; Scrooge exploits Bob Cratchit\'s children',
          'It created harsh workhouses to discourage the poor from seeking help; Scrooge dismisses the poor by asking "Are there no workhouses?"',
          'It introduced free education for all; Scrooge refuses to donate to schools',
          'It banned debtors\' prisons; Scrooge threatens to imprison his debtors',
        ],
        correct: 1,
        explanation:
          'The Poor Law Amendment Act created workhouses designed to be so unpleasant that only the truly desperate would enter. Scrooge\'s question "Are there no workhouses?" shows he has internalised this cruel philosophy — he sees the workhouse as an adequate solution to poverty.',
      },
      {
        id: 'edx-lt2-m2-q2',
        question:
          'Why does Dickens call the chapters of A Christmas Carol "staves" rather than "chapters"?',
        options: [
          'To make the novella seem longer than it is',
          'Because the word "stave" means "ghost" in Victorian English',
          'Because a stave is a musical term, reinforcing that the novella is a carol — a song of celebration',
          'To confuse the reader and create a sense of mystery',
        ],
        correct: 2,
        explanation:
          'A "stave" is a set of lines in music. By using this term, Dickens reinforces the title — the text is a carol, a song of joy. The structural choice mirrors the thematic journey from discord (Scrooge\'s misery) to harmony (his redemption).',
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
          'The third option integrates a specific date, names the legislation, connects it to a character\'s behaviour, and explains the effect — all in one sentence. This is what top-band context (AO3) looks like: context woven into analysis, not stated in isolation.',
      },
      {
        id: 'edx-lt2-m2-q4',
        question:
          'What was Dickens\'s primary purpose in writing A Christmas Carol?',
        options: [
          'To create an entertaining ghost story for children',
          'To popularise the Christmas tree tradition in England',
          'To challenge Malthusian economics and laissez-faire capitalism by championing personal generosity and social responsibility',
          'To write a biography of a real Victorian businessman',
        ],
        correct: 2,
        explanation:
          'Dickens had a didactic purpose: to attack greed, expose the suffering caused by Malthusian and laissez-faire attitudes, and argue that individual moral transformation — choosing generosity over selfishness — could remedy social injustice.',
      },
      {
        id: 'edx-lt2-m2-q5',
        question:
          'Which literary form best describes A Christmas Carol?',
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
  // MODULE 3 — 19th-Century Novel: Character Analysis
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m3',
    title: '19th-Century Novel: Character Analysis',
    duration: '55 min',
    content: `
<h2>A Christmas Carol — Character Analysis</h2>

<p>Every character in <em>A Christmas Carol</em> serves a <strong>moral and social purpose</strong>. In the exam, show how characters embody ideas — linking <strong>personal response (AO1)</strong> (response with references) to <strong>context (AO3)</strong>.</p>

<h3>Ebenezer Scrooge</h3>

<p>Scrooge's transformation from miser to benefactor is the <strong>structural backbone</strong> of the novella — Dickens's argument that <em>anyone</em> can change, and therefore society itself can be reformed.</p>

<div class="key-term"><strong>Key Term: Redemption Arc</strong> — A narrative pattern in which a morally flawed character undergoes self-discovery and emerges transformed. Scrooge's arc spans all five staves.</div>

<p><strong>Key Quotes:</strong></p>
<ul>
  <li><em>"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"</em> — Exclamatory tone establishes him as an extreme figure of avarice.</li>
  <li><em>"Are there no prisons? Are there no workhouses?"</em> — Echoes Malthusian economics; reveals callousness toward the poor.</li>
  <li><em>"I will honour Christmas in my heart, and try to keep it all the year."</em> — Stave 5 pledge marks complete moral reversal.</li>
  <li><em>"Solitary as an oyster"</em> — Hard-shelled and closed off, yet containing hidden value (the pearl within).</li>
  <li><em>"He became as good a friend, as good a master, and as good a man"</em> — Superlative repetition reinforces total transformation.</li>
</ul>

<h3>Bob Cratchit &amp; Tiny Tim</h3>

<p>Bob represents the <strong>suffering working poor</strong> — dignified and uncomplaining despite appalling conditions. His toast to <em>"Mr Scrooge, the Founder of the Feast!"</em> shows generosity even toward his oppressor. Tiny Tim is a <strong>symbol of innocence and consequence</strong>: <em>"God bless us, every one!"</em> His potential death — <em>"if these shadows remain unaltered… the child will die"</em> — makes Scrooge (and the reader) complicit in poverty's toll.</p>

<h3>The Three Ghosts</h3>

<p>Each Ghost represents a <strong>stage of moral awakening</strong>:</p>
<ul>
  <li><strong>Christmas Past</strong> — Memory and lost opportunity. Its flickering light symbolises truth Scrooge tries to extinguish.</li>
  <li><strong>Christmas Present</strong> — Abundance and joy, but also Ignorance and Want beneath its robe — Dickens's most overt social allegory.</li>
  <li><strong>Christmas Yet to Come</strong> — Silent and shrouded, evoking death. Fear achieves what nostalgia and compassion could not.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Connect each Ghost's supernatural role to Dickens's social message. They are instruments of moral education aimed at Scrooge <em>and</em> the reader.</div>

<h3>Fred &amp; Fezziwig</h3>

<p>Fred is Scrooge's <strong>foil</strong> — warm and generous despite less wealth. Fezziwig and Scrooge represent <strong>two models of capitalism</strong>: Fezziwig spends little yet creates enormous happiness. <em>"The happiness he gives, is quite as great as if it cost a fortune."</em> Employers have a <strong>moral duty</strong> beyond the financial.</p>

<h3>Model Paragraph</h3>

<div class="text-extract">Dickens presents Scrooge's transformation as both personal redemption and social argument. "Solitary as an oyster" suggests he is sealed off from humanity, yet hints at hidden potential. By Stave 5, he "knew how to keep Christmas well, if any man alive possessed the knowledge" — superlative phrasing positions him as a model. If even the most hardened miser can change, so can a society that tolerates poverty.<div class="source">Model paragraph — AO1, AO2, AO3 integrated</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as real people. Always frame analysis around what <em>Dickens</em> does: "Dickens presents Scrooge as…" not "Scrooge is a mean man who…"</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m3-q1',
        question:
          'What narrative function does Tiny Tim primarily serve in A Christmas Carol?',
        options: [
          'Comic relief to lighten the darker themes',
          'A symbol of innocence whose fate exposes the consequences of social neglect',
          'A plot device to create conflict between Bob Cratchit and Scrooge',
          'A representation of Scrooge\'s childhood self',
        ],
        correct: 1,
        explanation:
          'Tiny Tim is a symbol of innocence and consequence. His potential death is directly linked to poverty and Scrooge\'s neglect, making him Dickens\'s tool for compelling both Scrooge and the reader to confront the human cost of greed.',
      },
      {
        id: 'edx-lt2-m3-q2',
        question:
          'Why is the contrast between Fezziwig and Scrooge as employers significant?',
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
          'Which of the following best describes Scrooge\'s redemption arc as a structural feature?',
        options: [
          'A subplot that runs alongside the main story of the Cratchit family',
          'A circular narrative that ends where it began',
          'The central organising principle of the novella, spanning all five staves',
          'A flashback sequence confined to Staves 2 and 3',
        ],
        correct: 2,
        explanation:
          'Scrooge\'s transformation is the structural backbone of the entire novella. It spans all five staves — from introduction of his flaws, through the three visitations, to his complete moral reversal — making it the central organising principle.',
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
          'The oyster simile conveys Scrooge\'s hard exterior and self-imposed isolation. However, oysters contain pearls, hinting at the goodness hidden within him — goodness the Ghosts will eventually bring to the surface.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — 19th-Century Novel: Themes & Writer's Methods
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m4',
    title: "19th-Century Novel: Themes & Writer's Methods",
    duration: '55 min',
    content: `
<h2>A Christmas Carol — Themes &amp; Writer's Methods</h2>

<p>The Edexcel exam rewards you for showing how Dickens uses <strong>language, form, and structure</strong> (AO2) to present ideas, connected to <strong>context</strong> (AO3).</p>

<h3>Key Themes</h3>

<ul>
  <li><strong>Social Responsibility</strong> — The wealthy have a moral obligation to the poor. Ignorance and Want, <em>"children of Man"</em>, make neglect a collective sin.</li>
  <li><strong>Redemption</strong> — The novella argues people can change. If Scrooge can, what is the reader's excuse?</li>
  <li><strong>Poverty &amp; Wealth</strong> — The Cratchits celebrate with almost nothing; Scrooge has everything yet lives in darkness. Reflects the punitive New Poor Law of 1834.</li>
  <li><strong>Family</strong> — Cratchit dinner, Fred's party, Fezziwig's ball centre on togetherness. Belle leaves Scrooge because greed replaced love.</li>
  <li><strong>Christmas &amp; Generosity</strong> — A moral benchmark. Fred: <em>"a kind, forgiving, charitable, pleasant time."</em></li>
  <li><strong>Isolation</strong> — Both cause and consequence of greed. In Stave 4, Scrooge's death prompts no grief — only indifference.</li>
</ul>

<div class="key-term"><strong>Key Term: Allegory</strong> — A narrative where characters and events represent abstract ideas. Here, Scrooge = selfish capitalism; the Ghosts = moral education; his transformation = the possibility of societal reform.</div>

<h3>Language Methods (AO2)</h3>
<ul>
  <li><strong>Pathetic Fallacy:</strong> Cold weather in Stave 1 mirrors Scrooge's emotional state; warmth returns as he transforms.</li>
  <li><strong>Listing:</strong> Creates abundance — <em>"turkeys, geese, game, poultry, brawn, great joints of meat…"</em></li>
  <li><strong>Hyperbole:</strong> <em>"a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner"</em> — seven adjectives intensify villainy.</li>
  <li><strong>Contrast:</strong> Warmth/cold, light/dark, plenty/poverty side by side make the moral argument unmistakable.</li>
  <li><strong>The Supernatural:</strong> Ghosts function as moral teachers, not mere spectacle.</li>
  <li><strong>Naming:</strong> "Scrooge" echoes "squeeze" and "screw" — the name encodes character before any action.</li>
</ul>

<h3>Structural Methods</h3>
<ul>
  <li><strong>Time Manipulation:</strong> One night = a whole lifetime. Compression creates urgency — change must happen <em>now</em>.</li>
  <li><strong>Five-Stave Structure:</strong> "Staves" mirror a musical carol, reinforcing community — a carol is sung together, not alone.</li>
  <li><strong>Climactic Withholding (Stave 4):</strong> The gravestone delayed until the final moment builds suspense and forces confrontation with mortality.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Never write "Dickens uses a simile" and stop. Always push to <em>why</em>: what does the method make the reader think or feel? Link method to theme and context.</div>

<h3>Annotated Passage: Stave 3 (Cratchit Dinner)</h3>

<div class="text-extract"><em>"Its tenderness and flavour, size and cheapness, were the themes of universal admiration… as Mrs Cratchit said with great delight (surveying one small atom of a bone upon the dish), they hadn't ate it all at last!"</em><div class="source">Charles Dickens, <em>A Christmas Carol</em>, Stave 3</div></div>

<p><strong>"size and cheapness"</strong> — Paired nouns find abundance in scarcity; "cheapness" as a virtue dignifies poverty. <strong>"one small atom of a bone"</strong> — Hyperbolic diminution reveals how little food there was. Mrs Cratchit's "great delight" creates dramatic irony: the reader sees deprivation the family ignores.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating themes and methods as separate tasks. Weave them together: every thematic point should analyse <em>how</em> Dickens presents it. Theme = the <em>what</em>; method = the <em>how</em>.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m4-q1',
        question:
          'Why does Dickens label his chapters "staves" rather than "chapters"?',
        options: [
          'Because the novella was originally published as a musical score',
          'To mirror the title — a carol is a song, and staves are sections of music, reinforcing themes of harmony and community',
          'To make the text seem shorter and more accessible to children',
          'Because Victorian publishers required this formatting for Christmas publications',
        ],
        correct: 1,
        explanation:
          'The five-stave structure mirrors the musical form of a carol. A carol is communal — sung together — and Dickens uses this structural choice to reinforce his themes of togetherness and shared social responsibility.',
      },
      {
        id: 'edx-lt2-m4-q2',
        question:
          'Which of the following best explains the significance of the name "Scrooge"?',
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
          'What is the key difference between feature-spotting and genuine analysis of a writer\'s method?',
        options: [
          'Feature-spotting uses quotations; analysis does not',
          'Feature-spotting identifies a technique without exploring its effect, whereas analysis explains why the method is used and what it makes the reader think or feel',
          'Feature-spotting focuses on structure; analysis focuses on language',
          'There is no meaningful difference — both are acceptable in the exam',
        ],
        correct: 1,
        explanation:
          'Feature-spotting names a technique ("Dickens uses a simile") but stops there. Genuine analysis pushes further to explain the effect on the reader, connect the method to a theme, and consider why the writer made that choice.',
      },
      {
        id: 'edx-lt2-m4-q4',
        question:
          'How does Dickens use time in A Christmas Carol as a structural method?',
        options: [
          'The novella unfolds in real time over five consecutive days',
          'The events span a full year, from one Christmas to the next',
          'The entire story takes place in a single night, yet Scrooge experiences a whole lifetime — creating urgency for change',
          'Time moves backwards, starting with Scrooge\'s death and ending with his youth',
        ],
        correct: 2,
        explanation:
          'Dickens compresses Scrooge\'s past, present, and future into a single night. This time manipulation creates urgency — Scrooge must change now, not later — and mirrors Dickens\'s broader argument that society cannot afford to delay social reform.',
      },
      {
        id: 'edx-lt2-m4-q5',
        question:
          'In the Cratchit dinner passage, why does Dickens describe Mrs Cratchit surveying "one small atom of a bone"?',
        options: [
          'To show that Mrs Cratchit is a poor cook who has overcooked the goose',
          'To use hyperbolic diminution that reveals how little food the family actually had, creating dramatic irony between their delight and their deprivation',
          'To suggest that the Cratchit family is ungrateful for what they have',
          'To foreshadow Tiny Tim\'s illness through imagery of smallness',
        ],
        correct: 1,
        explanation:
          'The phrase "one small atom of a bone" uses hyperbolic diminution to expose the reality beneath the family\'s cheerful celebration. Mrs Cratchit\'s "great delight" at having leftovers creates dramatic irony — the reader sees the deprivation the family willingly overlooks, which is both touching and a pointed critique of poverty.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 5 — 19th-Century Novel: Extract & Essay Response
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m5',
    title: '19th-Century Novel: Extract & Essay Response',
    duration: '55 min',
    content: `
<h2>The 40-Mark Novel Question — Extract + Essay</h2>

<p>The 19th-century novel question on Edexcel Paper 2 is worth <strong>40 marks</strong> and is the highest-tariff question on the paper. You are given a <strong>printed extract</strong> from your set text — typically 30–40 lines — and asked to explore a theme or character both <em>in the extract</em> and <em>across the whole text</em>.</p>

<div class="key-term"><strong>Key Term: Extract-to-Whole-Text Question</strong> — A format requiring close reading of a passage followed by discussion of how the same idea appears elsewhere in the text. Markers reward answers that move fluently between the two.</div>

<h3>Planning (5 Minutes)</h3>
<ol>
  <li><strong>Read the extract twice.</strong> First for content, then underline key quotations and note techniques.</li>
  <li><strong>Identify the focus.</strong> Circle the key word — theme (poverty, redemption) or character (Scrooge, the Ghost)?</li>
  <li><strong>Link outward.</strong> Jot three moments elsewhere — opening, middle, ending — to show you know the narrative arc.</li>
  <li><strong>Draft a thesis.</strong> E.g. <em>"Dickens uses Scrooge's transformation to argue that compassion is a social duty."</em></li>
</ol>

<h3>Essay Structure</h3>
<ol>
  <li><strong>Introduction:</strong> Thesis, writer and text named, question focus referenced.</li>
  <li><strong>Extract Paragraph 1:</strong> Close-read a quotation — AO2 (technique), AO1 (argument), context (AO3).</li>
  <li><strong>Extract Paragraph 2:</strong> Second quotation, different technique or contrasting idea, context woven in.</li>
  <li><strong>Wider-Text Paragraph 1:</strong> A moment elsewhere in the novel. Quote from memory and analyse.</li>
  <li><strong>Wider-Text Paragraph 2:</strong> Another moment showing how the theme develops or resolves.</li>
  <li><strong>Conclusion:</strong> Return to thesis. Link to the writer's purpose for his contemporary audience.</li>
</ol>

<h3>Hitting AO1 + AO2 + AO3 Together</h3>
<p>The marking guide rewards <strong>integration</strong>. In every paragraph: open with an analytical point and quotation (<strong>personal response (AO1)</strong>), zoom in on a word or technique and explain its effect (<strong>writer's methods (AO2)</strong>), then connect to 19th-century context in one sentence (<strong>context (AO3)</strong>). Never bolt context on as a separate block.</p>

<h3>Model Grade 8–9 Opening</h3>

<div class="text-extract">Dickens presents Scrooge's encounter with the Ghost of Christmas Present as a moral turning point. The imperative "Come in! and know me better, man!" signals warmth contrasting Scrooge's cold language earlier. Writing in 1843 amid urban poverty, Dickens uses the Ghost as a mouthpiece for charity the wealthy owed the poor — a shift in empathy developed across the narrative to champion social responsibility.<div class="source">Model paragraph — Grade 8–9</div></div>

<div class="examiner-tip"><strong>Top Tip:</strong> markers look for a sustained argument, not a set number of paragraphs. The structure above is a scaffold. Quality of analysis always beats quantity.</div>

<h3>Common Mistakes to Avoid</h3>

<div class="common-mistake"><strong>Retelling the Plot:</strong> "Scrooge is visited by three ghosts and then he changes" earns very few marks. Every sentence should analyse <em>how</em> or <em>why</em> the writer makes a choice, not describe <em>what</em> happens.</div>

<div class="common-mistake"><strong>Ignoring the Extract:</strong> Some students leap straight to the wider text. You must analyse the printed passage in detail — it is there for a reason and the marking guide rewards close reading of it.</div>

<div class="common-mistake"><strong>Weak Context:</strong> Avoid "This was written in Victorian times when life was hard." Be specific: "Dickens published <em>A Christmas Carol</em> in 1843, the year a Parliamentary report exposed child labour in mines." Context should explain <em>why</em> the writer made a choice.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m5-q1',
        question:
          'How many marks is the 19th-century novel question worth on Edexcel Paper 2?',
        options: ['20 marks', '30 marks', '40 marks', '50 marks'],
        correct: 2,
        explanation:
          'The 19th-century novel question is worth 40 marks, making it the highest-tariff question on the paper. It requires analysis of both the printed extract and the wider text.',
      },
      {
        id: 'edx-lt2-m5-q2',
        question:
          'In the recommended essay structure, how many paragraphs should focus on close reading of the printed extract?',
        options: [
          'One paragraph',
          'Two paragraphs',
          'Three paragraphs',
          'Four paragraphs',
        ],
        correct: 1,
        explanation:
          'The recommended structure includes two close-reading paragraphs on the extract and two wider-text paragraphs, ensuring you address both parts of the question.',
      },
      {
        id: 'edx-lt2-m5-q3',
        question:
          'Which of the following best describes how context (AO3) should appear in a paragraph?',
        options: [
          'As a separate paragraph at the end of the essay',
          'As a one-line footnote after each quotation',
          'Woven into the analysis to explain why the writer made a particular choice',
          'Only in the introduction and conclusion',
        ],
        correct: 2,
        explanation:
          'Context (AO3) is most effective when integrated into your analysis — it should deepen your point by explaining the social, historical, or biographical reasons behind the writer\'s choices.',
      },
      {
        id: 'edx-lt2-m5-q4',
        question:
          'Which of these is a common mistake students make on the 19th-century novel question?',
        options: [
          'Using short embedded quotations',
          'Retelling the plot instead of analysing the writer\'s choices',
          'Writing a one-sentence thesis in the introduction',
          'Referring to the writer by name',
        ],
        correct: 1,
        explanation:
          'Retelling the plot is one of the most common mistakes. Markers know the story — every sentence should focus on how or why the writer makes a particular choice, not what happens.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Poetry Anthology: Approaching Anthology Poems
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m6',
    title: 'Poetry Anthology: Approaching Anthology Poems',
    duration: '55 min',
    content: `
<h2>The Edexcel Poetry Anthology — How It Works</h2>

<p>Section B tests your <strong>poetry anthology</strong>. Your school chooses one cluster — <strong>Relationships</strong> or <strong>Conflict</strong>. In the exam you analyse <strong>one named poem</strong> for <strong>20 marks</strong>. The poem is <em>not</em> printed; you must know it from memory.</p>

<div class="key-term"><strong>Key Term: Poetry Cluster</strong> — A thematic grouping of poems where each poet approaches the theme differently in form, voice, and perspective.</div>

<h3>The Two Clusters (12 Poems Each)</h3>

<p><strong>Relationships:</strong> Sonnet 43, London, The Farmer's Bride, Walking Away, Letters from Yorkshire, Eden Rock, Follower, Mother any distance, Before You Were Mine, Winter Swans, Singh Song!, Climbing My Grandfather.</p>

<p><strong>Conflict:</strong> The Charge of the Light Brigade, Exposure, Storm on the Island, Bayonet Charge, Remains, Poppies, War Photographer, Tissue, The Emigrée, Kamikaze, Checking Out Me History, My Last Duchess.</p>

<h3>The SMILE Framework</h3>
<ol>
  <li><strong>S — Structure:</strong> Stanza length, rhyme scheme, enjambment, caesura. Does form mirror meaning?</li>
  <li><strong>M — Meaning:</strong> Literal summary first, then deeper ideas beneath the surface.</li>
  <li><strong>I — Imagery:</strong> Similes, metaphors, personification, symbols — how do they connect to themes?</li>
  <li><strong>L — Language:</strong> Word choices, register, semantic fields, repetition, connotation.</li>
  <li><strong>E — Effect:</strong> What response is the poet provoking — sympathy, anger, admiration, unease?</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> Always start with literal meaning. If you misread the poem, every analytical point crumbles. Spend the first minute understanding the surface story.</div>

<h3>Annotating a Poem</h3>
<p>Three passes: first write a one-sentence summary, then circle images and note techniques in the margin, finally connect ideas with arrows and mark tone shifts.</p>

<h3>Practice — "Sonnet 43" (Relationships)</h3>

<div class="text-extract"><em>How do I love thee? Let me count the ways.<br/>
I love thee to the depth and breadth and height<br/>
My soul can reach, when feeling out of sight<br/>
For the ends of being and ideal grace.</em><div class="source">Barrett Browning, <em>Sonnets from the Portuguese</em> (1850)</div></div>

<p><strong>S:</strong> Petrarchan sonnet; iambic pentameter mirrors certainty. <strong>I:</strong> "Depth and breadth and height" — spatial imagery fills every dimension. <strong>L:</strong> Anaphora ("I love thee") creates prayer-like incantation; religious register ("soul", "grace"). <strong>Context:</strong> Written during Barrett Browning's secret courtship, defying her father.</p>

<h3>Practice — "The Charge of the Light Brigade" (Conflict)</h3>

<div class="text-extract"><em>Half a league, half a league,<br/>
Half a league onward,<br/>
All in the valley of Death<br/>
Rode the six hundred.</em><div class="source">Tennyson (1854), stanza 1</div></div>

<p><strong>S:</strong> Dactylic rhythm mimics galloping; repetition propels the reader forward. <strong>I:</strong> "Valley of Death" alludes to Psalm 23; capitalised "Death" personifies a waiting presence. <strong>L:</strong> "Half a league" repeated — relentless motion; "onward" reinforces duty. <strong>Context:</strong> Written weeks after Balaclava (1854). Tennyson turned a military blunder into a celebration of courage.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating every poem identically. Some are best approached through imagery, others through voice or structure. Use SMILE as a checklist, but let the poem guide your focus.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m6-q1',
        question:
          'How many marks is the single-poem anthology question worth on Edexcel Paper 2?',
        options: ['10 marks', '15 marks', '20 marks', '30 marks'],
        correct: 2,
        explanation:
          'The anthology question is worth 20 marks. You are given the name of one poem and must analyse it from memory — the poem is not printed in the exam booklet.',
      },
      {
        id: 'edx-lt2-m6-q2',
        question:
          'In the SMILE framework, what does the "I" stand for?',
        options: ['Intention', 'Imagery', 'Interpretation', 'Irony'],
        correct: 1,
        explanation:
          'The "I" in SMILE stands for Imagery — identifying similes, metaphors, personification, and symbols that the poet uses to create vivid pictures and convey meaning.',
      },
      {
        id: 'edx-lt2-m6-q3',
        question:
          'Which cluster does "Sonnet 43" by Elizabeth Barrett Browning belong to?',
        options: [
          'Conflict',
          'Relationships',
          'Power and Identity',
          'Time and Place',
        ],
        correct: 1,
        explanation:
          '"Sonnet 43" is part of the Relationships cluster. It is a Petrarchan sonnet exploring the depth and nature of romantic love, written during Barrett Browning\'s courtship with Robert Browning.',
      },
      {
        id: 'edx-lt2-m6-q4',
        question:
          'When annotating a poem, what should you do on the very first read?',
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
  // MODULE 7 — Poetry: Language, Form & Structure
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m7',
    title: 'Poetry: Language, Form & Structure',
    duration: '55 min',
    content: `
<h2>Poetry: Language, Form &amp; Structure — AO2</h2>

<p>Writer's methods (AO2) asks you to <strong>analyse how writers use language, form and structure to create meanings and effects</strong>. Markers reward students who explain <em>why</em> a poet made a choice and <em>how</em> it shapes the reader's experience — not those who spot features.</p>

<div class="key-term"><strong>Key Term: Writer's Methods (AO2)</strong> — Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</div>

<h3>Language: The Poet's Toolkit</h3>

<p><strong>Imagery</strong> appeals to the senses — <strong>visual</strong> ("sun bled crimson"), <strong>auditory</strong> ("bells clanged"), <strong>tactile</strong> ("calloused fingers traced the bark"). <strong>Figurative language</strong> (simile, metaphor, personification) draws unexpected connections — ask: <em>what is being compared, and what does it suggest?</em></p>

<p><strong>Tone and diction:</strong> diction is word choice; tone is the attitude those choices create. Watch for <strong>connotation</strong> — associations beyond literal meaning.</p>

<h3>Sound Devices</h3>
<ul>
  <li><strong>Alliteration</strong> — repeated initial consonants ("blazing bright") — emphasis or musical harmony.</li>
  <li><strong>Sibilance</strong> — repeated 's'/'sh' sounds — whispering, sinister, or soothing.</li>
  <li><strong>Assonance</strong> — repeated vowel sounds ("the low moan of the old road") — creates internal rhyme.</li>
  <li><strong>Onomatopoeia</strong> — words imitating sounds ("crackle", "hiss") — the reader <em>hears</em> the poem.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> Never just name a device — explain its effect. "The sibilance in 'softly she slipped away' creates a hushed tone mirroring stealth." Without effect, you are describing, not analysing.</div>

<h3>Form: How the Poem Is Shaped</h3>
<ul>
  <li><strong>Sonnet</strong> — 14 lines with a volta. Traditionally love, but poets subvert this for irony.</li>
  <li><strong>Dramatic monologue</strong> — one speaker addresses a silent listener, creating dramatic irony.</li>
  <li><strong>Free verse</strong> — no regular rhyme or metre. Reflects freedom, chaos, or natural speech.</li>
  <li><strong>Ballad</strong> — narrative poem with regular stanzas and refrain; oral tradition.</li>
  <li><strong>Elegy</strong> — poem of mourning, moving from grief towards acceptance.</li>
</ul>

<h3>Structure</h3>
<ul>
  <li><strong>Enjambment vs end-stopping</strong> — enjambment creates urgency; end-stopping gives control and finality.</li>
  <li><strong>Caesura</strong> — a mid-line pause suggesting hesitation, thought-shift, or impact.</li>
  <li><strong>Volta</strong> — the "turn" where argument or mood shifts. Line 9 (Petrarchan) or before the final couplet (Shakespearean). Often the key to unlocking a poem.</li>
  <li><strong>Stanza breaks</strong> — signal changes in time, place, or mood.</li>
  <li><strong>Repetition/refrain</strong> — emphasis and a sense of obsession or inevitability.</li>
</ul>

<h3>Metre</h3>

<p><strong>Iambic pentameter</strong> (da-DUM x5) mirrors natural speech. When a poet <em>breaks</em> the pattern — a stressed opening or extra beat — the irregularity signals heightened emotion or disruption.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> "The poet uses alliteration, enjambment and a metaphor" — feature-spotting. Select one or two techniques and explore their effect in depth, connecting to meaning.</div>

<h3>Practice: Annotate This Extract</h3>

<div class="text-extract">Half-caste? Explain yuself,<br/>wha yu mean<br/>when yu say half-caste —<br/>yu mean when Picasso<br/>mix red an green<br/>is a half-caste canvas?<div class="source">John Agard, 'Half-Caste'</div></div>

<p>Consider: the rhetorical questions' effect; how phonetic dialect creates voice; the Picasso analogy; enjambment across short lines building confrontational rhythm.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m7-q1',
        question:
          'What does AO2 require you to do when writing about poetry?',
        options: [
          'Retell the poem\'s story in your own words',
          'Analyse language, form and structure and their effects on meaning',
          'Compare two poems from the anthology',
          'Evaluate how far you agree with the poet\'s viewpoint',
        ],
        correct: 1,
        explanation:
          'Writer\'s methods (AO2) focuses on analysing how writers use language, form and structure to create meanings and effects. It is the key skill tested in the poetry questions on Paper 2.',
      },
      {
        id: 'edx-lt2-m7-q2',
        question:
          'Which of the following best describes a "volta" in poetry?',
        options: [
          'A repeated line or phrase at the end of each stanza',
          'A pause in the middle of a line created by punctuation',
          'A turn or shift in the poem\'s argument, mood, or perspective',
          'The use of iambic pentameter to create a regular rhythm',
        ],
        correct: 2,
        explanation:
          'A volta is the "turn" in a poem — the point where the direction of thought, emotion, or argument shifts. In sonnets it typically appears at line 9 (Petrarchan) or before the final couplet (Shakespearean).',
      },
      {
        id: 'edx-lt2-m7-q3',
        question:
          'What effect does enjambment typically create in a poem?',
        options: [
          'A sense of finality and control',
          'A whispering, secretive tone',
          'Urgency, momentum, or breathlessness',
          'A regular, heartbeat-like rhythm',
        ],
        correct: 2,
        explanation:
          'Enjambment — where a sentence runs over the line break without punctuation — propels the reader forward, creating a sense of urgency, momentum, or breathlessness that contrasts with the deliberate pause of end-stopping.',
      },
      {
        id: 'edx-lt2-m7-q4',
        question:
          'Why is "feature-spotting" considered a weak approach in poetry analysis?',
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
        question:
          'Which of the following is an example of sibilance?',
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
  // MODULE 8 — Poetry: Comparison Techniques
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m8',
    title: 'Poetry: Comparison Techniques',
    duration: '55 min',
    content: `
<h2>Poetry: Comparison Techniques — The 20-Mark Question</h2>

<p>This <strong>20-mark</strong> question asks you to compare a <strong>named anthology poem</strong> with an <strong>unseen poem</strong>. You must analyse a poem you have never seen, then build an integrated comparison under timed conditions.</p>

<div class="key-term"><strong>Key Term: Integrated Comparison</strong> — Discussing both poems within the same paragraphs, moving fluently between them, rather than writing about each separately.</div>

<h3>Approaching the Unseen Poem</h3>

<p>Spend <strong>3–4 minutes reading</strong> before you plan or write:</p>
<ol>
  <li><strong>First read — meaning:</strong> What is this about? What is the speaker's situation and mood? Do not worry about techniques yet.</li>
  <li><strong>Second read — technique:</strong> Underline key choices — imagery, tone shifts, structural features, sound patterns. Note connections to the named poem.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> If a phrase puzzles you, move on and analyse what you <em>can</em>. Markers are looking for thoughtful analysis, not a perfect paraphrase.</div>

<h3>Comparison Frameworks</h3>

<p><strong>Thematic Threads:</strong> Identify 2–3 shared themes. For each, compare <em>how</em> the poets explore it — different methods, different effects.</p>

<p><strong>Point-by-Point Methods:</strong> Choose a shared method (imagery, structure, tone), compare how each poet uses it, then move to the next.</p>

<p>Either works. The key rule: <strong>both poems must appear in every paragraph</strong>.</p>

<h3>Comparative Vocabulary</h3>
<ul>
  <li><strong>Similarity:</strong> similarly, both poets, likewise, this is mirrored in...</li>
  <li><strong>Contrast:</strong> in contrast, whereas, unlike X who..., while, conversely...</li>
  <li><strong>Nuance:</strong> although both poets explore..., they differ in...; while X presents..., Y instead suggests...</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Vague comparisons — "Both poems are about nature." Be specific: "Both use natural imagery, but Wordsworth presents renewal while Hughes depicts predation." Compare <em>treatment</em>, not topic.</div>

<h3>Integrated Paragraph Structure</h3>
<ol>
  <li><strong>Comparative topic sentence</strong> — "Both poets explore separation, but through contrasting structures."</li>
  <li><strong>Evidence + analysis, Poem A</strong> — embed a quotation, analyse method and effect.</li>
  <li><strong>Pivot to Poem B</strong> — "In contrast, the unseen poet..."</li>
  <li><strong>Evidence + analysis, Poem B</strong> — quotation, method, different or similar effect.</li>
  <li><strong>Concluding comment</strong> — what does the comparison reveal?</li>
</ol>

<div class="text-extract"><strong>Model:</strong> Both poets present memory as haunting. Armitage repeats "probably armed, possibly not" — uncertainty suggests guilt festers because truth cannot be confirmed. Similarly, the unseen poet's "photograph curling at the edges" implies memories deteriorate, yet "cannot stop turning it over" uses enjambment to propel the reader forward. While Armitage's torment stems from a single violent act, the unseen poet's grief is quieter, rooted in slow erosion.<div class="source">Grade 8/9 model comparison paragraph</div></div>

<h3>Planning in 5 Minutes</h3>

<p><strong>Venn Diagram:</strong> Left = anthology poem, right = unseen, overlap = shared themes/methods. Paragraphs draw from the overlap; unique features highlight contrasts.</p>

<p><strong>Comparison Grid:</strong> Columns: <strong>Aspect</strong> | <strong>Poem A</strong> | <strong>Poem B</strong>. List 3–4 aspects (imagery, tone, structure) with brief notes — a ready-made plan.</p>

<div class="examiner-tip"><strong>Top Tip:</strong> Aim for 3–4 developed paragraphs, not 5–6 thin ones. Depth outscores breadth. Each paragraph needs a quotation from each poem and a clear comparative point.</div>
`,
    quiz: [
      {
        id: 'edx-lt2-m8-q1',
        question:
          'What does "integrated comparison" mean in a poetry essay?',
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
        question:
          'What should your first reading of the unseen poem focus on?',
        options: [
          'Identifying every poetic technique used',
          'Understanding the overall meaning, situation, and mood',
          'Finding quotations that link to the named poem',
          'Counting the number of stanzas and working out the rhyme scheme',
        ],
        correct: 1,
        explanation:
          'Your first reading should focus on grasping the poem\'s overall meaning — who is speaking, what the situation is, and what the general mood or tone feels like. Technical analysis comes on the second, more detailed reading.',
      },
      {
        id: 'edx-lt2-m8-q3',
        question:
          'Which of the following is the strongest comparative sentence?',
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
          '1–2 very long paragraphs',
          '3–4 well-developed paragraphs',
          '6–8 short paragraphs',
          'As many as possible in the time available',
        ],
        correct: 1,
        explanation:
          'Aim for 3–4 well-developed comparative paragraphs. Depth of analysis always scores higher than breadth. Each paragraph should contain quotations from both poems and a clear comparative point.',
      },
    ],
  },

// ──────────────────────────────────────────────
  // MODULE 9 — Poetry: Writing the Comparison Essay
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m9',
    title: 'Poetry: Writing the Comparison Essay',
    duration: '55 min',
    content: `
<h2>Writing the 20-Mark Comparison Essay</h2>

<p>The comparison question on Edexcel GCSE English Literature Paper 2 is worth <strong>20 marks</strong> and asks you to compare an anthology poem you have studied with an <strong>unseen poem</strong> printed on the paper. This is the question that separates competent responses from truly impressive ones — and it all comes down to <strong>structure, balance, and genuine comparison</strong>.</p>

<div class="key-term"><strong>Key Term: Comparison</strong> — A comparison essay does not simply analyse two poems one after the other. It identifies points of similarity and difference and weaves both poems together throughout every paragraph.</div>

<h3>Essay Structure: The Blueprint</h3>

<p>A strong comparison essay follows a clear, efficient structure:</p>

<ol>
  <li><strong>Brief introduction (2–3 sentences):</strong> Name both poems, identify the shared theme or subject, and offer a thesis statement about how the poets approach the subject similarly or differently. For example: <em>"Both 'War Photographer' and the unseen poem explore the aftermath of conflict, yet Duffy focuses on the psychological toll on a civilian observer while the unseen poet foregrounds the physical landscape of destruction."</em></li>
  <li><strong>3–4 comparative paragraphs:</strong> Each paragraph tackles one point of comparison (e.g. tone, imagery, structure, perspective) and draws evidence from <strong>both</strong> poems. This is where most of your marks are earned.</li>
  <li><strong>Brief conclusion (2–3 sentences):</strong> Summarise how the poets' approaches differ or align, and offer a final evaluative comment about the overall effect on the reader.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> Do not write a long introduction. Two or three sentences are enough. markers are looking for comparison and analysis, not scene-setting. Get into your first comparative point by the end of the first third of a page.</div>

<h3>The PETER Framework for Comparison</h3>

<p>Use the <strong>PETER</strong> framework to build each comparative paragraph:</p>

<ul>
  <li><strong>P — Point:</strong> State your comparative point clearly. <em>"Both poets use natural imagery to convey loss, but they do so to very different effect."</em></li>
  <li><strong>E — Evidence from Poem 1:</strong> Embed a quotation from the anthology poem. <em>"In 'Remains', Armitage describes the soldier's memory as 'his bloody life in my bloody hands', where the repetition of 'bloody' shifts from literal to metaphorical."</em></li>
  <li><strong>T — Technique:</strong> Identify and analyse the method. <em>"The pun on 'bloody' creates a dual meaning that mirrors the soldier's inability to separate the physical act from its psychological aftermath."</em></li>
  <li><strong>E — Evidence from Poem 2:</strong> Now bring in the unseen poem with a quotation and analysis. <em>"By contrast, the unseen poet writes of 'petals falling like shrapnel', using a simile that inverts expectations — beauty becomes violence."</em></li>
  <li><strong>R — Response / Comparison:</strong> Draw the two together. <em>"While Armitage's language traps the reader inside the soldier's guilt, the unseen poet externalises destruction through the landscape, creating a more detached but equally haunting effect."</em></li>
</ul>

<div class="key-term"><strong>Key Term: Connectives of Comparison</strong> — Use linking phrases to signal comparison: <em>similarly, likewise, in the same way, both poets</em> (for similarity); <em>however, by contrast, whereas, conversely, on the other hand</em> (for difference). These words are the glue that holds a comparison essay together.</div>

<h3>Balancing the Known and the Unseen</h3>

<p>One of the biggest challenges is balancing your <strong>anthology poem</strong> (where you have prepared quotations and context) with the <strong>unseen poem</strong> (which you are reading for the first time). Here is how to manage it:</p>

<ul>
  <li><strong>Anthology poem:</strong> You can deploy pre-learned quotations and contextual knowledge. Use this confidence to anchor each paragraph — start with the poem you know, then pivot to the unseen.</li>
  <li><strong>Unseen poem:</strong> Read it twice before writing. On the first read, identify the subject and tone. On the second, underline striking words, images, and structural features. You do not need to identify every technique — two or three well-analysed quotations are enough.</li>
  <li><strong>Aim for roughly equal coverage.</strong> If you write fifteen lines on the anthology poem and three lines on the unseen, markers will see an unbalanced response. Each PETER paragraph should give comparable space to both texts.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing two separate mini-essays — one on each poem — and calling it a comparison. This "poem A then poem B" approach will cap your mark. Every paragraph must discuss both poems and make explicit comparative points.</div>

<h3>Time Management</h3>

<p>You have approximately <strong>40 minutes</strong> for this question. Divide your time like this:</p>

<table>
  <tr><th>Phase</th><th>Time</th><th>What to do</th></tr>
  <tr><td>Read &amp; Plan</td><td>5 min</td><td>Read the unseen poem twice. Annotate both poems. Jot down 3–4 comparison points.</td></tr>
  <tr><td>Write</td><td>30 min</td><td>Introduction + 3–4 PETER paragraphs + conclusion.</td></tr>
  <tr><td>Review</td><td>5 min</td><td>Check that every paragraph compares both poems. Fix any missing connectives or unclear analysis.</td></tr>
</table>

<h3>Grade 5 vs Grade 9: What Is the Difference?</h3>

<p>Understanding the grade boundaries helps you target your revision:</p>

<ul>
  <li><strong>Grade 5</strong> responses identify similarities and differences and support points with quotations, but the comparison may feel mechanical — "Poem A does this. Poem B does that." Analysis tends to name techniques without fully exploring their effects.</li>
  <li><strong>Grade 7</strong> responses integrate comparison throughout, use the PETER structure fluently, and begin to explore how context and form shape meaning. Connectives of comparison appear naturally rather than being bolted on.</li>
  <li><strong>Grade 9</strong> responses offer a <strong>conceptualised</strong> comparison — a sophisticated argument about how and why the poets' approaches differ. They explore ambiguity, alternative interpretations, and the effect of structural choices. The comparison feels like a genuine conversation between the two poems, not a checklist.</li>
</ul>

<div class="examiner-tip"><strong>Top Tip:</strong> To push from Grade 7 to Grade 9, try opening a paragraph with a conceptual point rather than a technique: <em>"Both poets interrogate the idea that memory is a burden, yet they arrive at opposing conclusions."</em> This shows markers you are thinking about the poems as whole texts, not just hunting for devices.</div>

<h3>Quick Practice</h3>

<p>Take any anthology poem you have studied and imagine comparing it with a poem on a similar theme. Write a single PETER paragraph in no more than eight minutes. Check: does your paragraph mention both poems? Does it include at least one quotation from each? Does it end with a genuine comparative statement? If all three answers are yes, you are on the right track.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m9-q1',
        question:
          'What does the R in the PETER framework stand for?',
        options: [
          'Repetition',
          'Response / Comparison',
          'Review',
          'Reference to context',
        ],
        correct: 1,
        explanation:
          'R stands for Response / Comparison — the crucial step where you draw both poems together and make an explicit comparative judgement about their effects or approaches.',
      },
      {
        id: 'edx-lt2-m9-q2',
        question:
          'What is the biggest structural mistake students make in the comparison essay?',
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
        question:
          'What distinguishes a Grade 9 comparison from a Grade 5 comparison?',
        options: [
          'A Grade 9 response uses longer quotations',
          'A Grade 9 response analyses only the unseen poem in detail',
          'A Grade 9 response offers a conceptualised argument exploring ambiguity and alternative interpretations',
          'A Grade 9 response always includes historical context for both poems',
        ],
        correct: 2,
        explanation:
          'Grade 9 responses are conceptualised — they present a sophisticated argument about how and why the poets\' approaches differ, explore ambiguity, and treat the comparison as a genuine conversation between the two texts.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Paper 2 Exam Strategy & Practice
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt2-m10',
    title: 'Paper 2 Exam Strategy & Practice',
    duration: '60 min',
    content: `
<h2>Paper 2 Exam Strategy &amp; Practice</h2>

<p>Edexcel GCSE English Literature Paper 2 lasts <strong>2 hours 15 minutes</strong> and covers your 19th-century novel, the poetry anthology, and an unseen poem comparison. With <strong>96 marks</strong> across three distinct tasks, time management is everything. This module gives you a complete timing plan, open-book strategy, common pitfalls, and a revision toolkit to take into exam season.</p>

<h3>Full Paper 2 Timing Plan</h3>

<div class="key-term"><strong>Key Principle:</strong> The paper is long, but every minute is accounted for. Stick to the plan and you will have time for every question — deviate and you risk losing marks on the section you rush.</div>

<table>
  <tr><th>Section</th><th>Task</th><th>Marks</th><th>Time</th><th>Breakdown</th></tr>
  <tr><td>A — Novel</td><td>19th-century novel response</td><td>40</td><td>55 min</td><td>5 min plan, 45 min write, 5 min check</td></tr>
  <tr><td>B Part 1</td><td>Single anthology poem</td><td>20</td><td>30 min</td><td>5 min read/plan, 22 min write, 3 min check</td></tr>
  <tr><td>B Part 2</td><td>Comparison (anthology + unseen)</td><td>20</td><td>40 min</td><td>8 min read unseen + plan, 28 min write, 4 min check</td></tr>
  <tr><td colspan="3"><strong>Final review</strong></td><td>10 min</td><td>Re-read all three responses; fix SPaG errors and add missing analysis</td></tr>
</table>

<p>This totals <strong>135 minutes</strong> — exactly the time available. There is no spare time built in, which is why discipline with the plan is critical.</p>

<div class="examiner-tip"><strong>Top Tip:</strong> Wear a watch or position yourself to see a clock. Write your target finish times at the top of each section before you begin. For example: "Novel — finish by 10:20. Single poem — finish by 10:50. Comparison — finish by 11:30."</div>

<h3>Open-Book Strategy</h3>

<p>Paper 2 is an <strong>open-book exam</strong> for the poetry section — you will have the anthology in front of you. This is a double-edged sword: it removes the pressure of memorising every quotation, but it can also waste your time if you are not strategic.</p>

<ul>
  <li><strong>Bookmark key poems</strong> with small sticky tabs before the exam. If your school allows annotation, highlight your most versatile quotations in advance.</li>
  <li><strong>Do not re-read familiar poems line by line.</strong> You should already know them well enough to locate quotations quickly. A quick scan to refresh is fine — a full re-read is wasted time.</li>
  <li><strong>Use the anthology as a reference, not a crutch.</strong> The best responses demonstrate that you have internalised the poems. Glancing down to check a word or line number is efficient; hunting for quotations you have never noticed before is not.</li>
  <li><strong>For the unseen poem,</strong> you have no prior knowledge — read it twice, annotate heavily, and trust your analytical instincts.</li>
</ul>

<h3>Section A: Novel — Getting It Right</h3>

<p>The 19th-century novel question is worth <strong>40 marks</strong> — the single biggest chunk of the paper. You will be given an extract and asked to analyse a character, theme, or relationship, then extend your discussion to the wider novel.</p>

<ul>
  <li><strong>Start with the extract:</strong> Spend your first two paragraphs on close language analysis of the printed passage. Embed quotations and analyse methods.</li>
  <li><strong>Move to the wider novel:</strong> Your next two or three paragraphs should explore how the theme or character develops elsewhere. Reference specific moments — chapter, scene, key quotation.</li>
  <li><strong>Context matters:</strong> Weave in relevant social, historical, or literary context where it illuminates the text. Do not bolt on context as a separate paragraph — integrate it naturally.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on the novel and rushing the poetry. The novel is worth 40 marks, but the two poetry questions together are worth 40 marks too. If you spend 70 minutes on the novel, you have only 55 minutes for two poetry essays — a recipe for underperformance.</div>

<h3>Common Mistakes to Avoid</h3>

<ul>
  <li><strong>Unbalanced comparisons:</strong> In the comparison essay, writing extensively about the anthology poem and barely mentioning the unseen poem (or vice versa). Aim for roughly equal coverage in every paragraph.</li>
  <li><strong>Feature-spotting without analysis:</strong> Identifying a metaphor or simile but not explaining its effect on the reader. Always ask: <em>so what? What does this make the reader think or feel?</em></li>
  <li><strong>Ignoring structure:</strong> Students often focus on language and forget about structural features — enjambment, stanza breaks, volta, narrative arc. These are easy marks if you address them.</li>
  <li><strong>Running out of time on the final question:</strong> The comparison essay is last, and fatigued students often write half a response. Stick to the timing plan.</li>
  <li><strong>Retelling the story:</strong> In the novel section, narrating the plot instead of analysing how the writer creates meaning. Markers know the story — they want to see your analytical skill.</li>
</ul>

<h3>Revision Techniques</h3>

<p>The weeks before the exam should be focused and strategic:</p>

<ol>
  <li><strong>Quotation flash cards:</strong> For each anthology poem, create cards with 5–6 key quotations on one side and analysis (technique + effect) on the other. For the novel, create cards for key themes with supporting quotations.</li>
  <li><strong>Theme grids:</strong> Draw a grid with poems along the top and themes down the side (power, conflict, identity, nature, loss). Tick where each poem connects. This makes it easy to find comparison pairs for any theme the exam might ask about.</li>
  <li><strong>Timed practice:</strong> Write at least two full Paper 2 responses under timed conditions before exam day. Mark them against the marking guide or swap with a study partner.</li>
  <li><strong>Marker reports:</strong> Read the published marker reports for past Edexcel Literature papers. They tell you exactly what students did well and where they lost marks — this is insider knowledge freely available.</li>
  <li><strong>Quotation reduction:</strong> Can you express your analysis of a poem in just three quotations? Forcing yourself to select the most versatile quotations builds the kind of focused thinking the exam rewards.</li>
</ol>

<div class="examiner-tip"><strong>Top Tip:</strong> The single most effective revision activity is <strong>timed practice under exam conditions</strong>. Reading notes and highlighting textbooks feels productive, but it does not prepare you for the pressure of writing three essays in 135 minutes. Practise the way you will perform.</div>

<h3>Final Exam Day Checklist</h3>

<ul>
  <li>Black ink pen (plus a spare), a watch, and your annotated poetry anthology (if permitted).</li>
  <li>Write your timing targets at the top of the answer booklet before the exam starts.</li>
  <li>Read every question fully before you begin writing — underline command words and key terms.</li>
  <li>For the novel: start with the extract, then move to the wider text. Do not skip the extract.</li>
  <li>For the single poem: plan before you write. Identify 3–4 key points and supporting quotations.</li>
  <li>For the comparison: read the unseen poem twice. Annotate it. Plan your comparison points before writing.</li>
  <li>In the final 10 minutes: re-read all three responses. Fix spelling errors, add missing connectives, and check that every paragraph includes analysis — not just quotation.</li>
  <li>If you finish early, add an extra analytical point to your weakest response rather than sitting idle.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Leaving the exam hall early. Use every minute. Even five minutes of proofreading can catch errors that cost marks — a missing comparative connective, a misspelled character name, or an incomplete sentence at the end of a paragraph.</div>

<p>You have studied the texts, practised the skills, and learned the frameworks. Trust your preparation, manage your time, and show markers what you know. Good luck.</p>
`,
    quiz: [
      {
        id: 'edx-lt2-m10-q1',
        question:
          'How long is Edexcel Literature Paper 2 in total?',
        options: [
          '1 hour 45 minutes',
          '2 hours',
          '2 hours 15 minutes',
          '2 hours 30 minutes',
        ],
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
        question:
          'What is the most common timing mistake students make on Paper 2?',
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
  }
  ],
  assessmentQuestions: [
    { id: 'edx-lt2-a1', question: 'How long is Edexcel Literature Paper 2?', options: ['1 hour 45 minutes', '2 hours', '2 hours 15 minutes', '2 hours 30 minutes'], correct: 2, explanation: 'Paper 2 is 2 hours 15 minutes (135 minutes), covering the 19th-century novel, anthology poetry, and an unseen poem comparison.' },
    { id: 'edx-lt2-a2', question: 'What was the Poor Law Amendment Act of 1834 designed to do?', options: ['Abolish child labour', 'Create harsh workhouses to discourage the poor from seeking help', 'Introduce free education', 'Ban debtors\' prisons'], correct: 1, explanation: 'The Act created workhouses designed to be so unpleasant that only the truly desperate would enter. Scrooge\'s question "Are there no workhouses?" shows he has internalised this cruel philosophy.' },
    { id: 'edx-lt2-a3', question: 'What does the simile "solitary as an oyster" suggest about Scrooge?', options: ['He is physically small', 'He is hard-shelled and closed off, yet contains hidden potential', 'He lives near the sea', 'He is slow-moving and lazy'], correct: 1, explanation: 'The oyster simile conveys Scrooge\'s hard exterior and isolation. However, oysters contain pearls, hinting at the goodness hidden within him that the Ghosts will bring to the surface.' },
    { id: 'edx-lt2-a4', question: 'Why does Dickens call his chapters "staves" rather than "chapters"?', options: ['To make the novella seem longer', 'Because "stave" means "ghost" in Victorian English', 'Because a stave is a musical term, reinforcing that the novella is a carol', 'To confuse the reader'], correct: 2, explanation: 'A "stave" is a set of lines in music. Dickens reinforces the title \u2014 the text is a carol, a song of joy \u2014 and the structure mirrors the journey from discord to harmony.' },
    { id: 'edx-lt2-a5', question: 'How many marks is the 19th-century novel question worth on Paper 2?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'The novel question is worth 40 marks \u2014 the single biggest chunk of the paper. It requires analysis of both the printed extract and the wider text.' },
    { id: 'edx-lt2-a6', question: 'In the SMILE framework for poetry, what does the "I" stand for?', options: ['Intention', 'Imagery', 'Interpretation', 'Irony'], correct: 1, explanation: 'The "I" stands for Imagery \u2014 identifying similes, metaphors, personification, and symbols the poet uses to create vivid pictures and convey meaning.' },
    { id: 'edx-lt2-a7', question: 'What does AO2 require you to analyse in poetry?', options: ['The poet\'s biography', 'Language, form and structure and their effects on meaning', 'Historical context only', 'Your personal feelings about the poem'], correct: 1, explanation: 'Writer\'s methods (AO2) focuses on analysing how writers use language, form and structure to create meanings and effects. It is the key skill tested in the poetry questions.' },
    { id: 'edx-lt2-a8', question: 'What does "integrated comparison" mean in a poetry essay?', options: ['Writing about Poem A then Poem B separately', 'Discussing both poems within the same paragraphs, moving between them fluidly', 'Analysing only shared techniques', 'Quoting from both poems in your introduction only'], correct: 1, explanation: 'An integrated comparison discusses both poems within each paragraph, weaving between them with comparative vocabulary \u2014 not two separate mini-essays.' },
    { id: 'edx-lt2-a9', question: 'What does the R in the PETER comparison framework stand for?', options: ['Repetition', 'Response / Comparison', 'Review', 'Reference to context'], correct: 1, explanation: 'R stands for Response / Comparison \u2014 the crucial step where you draw both poems together and make an explicit comparative judgement about their effects or approaches.' },
    { id: 'edx-lt2-a10', question: 'What is the most common timing mistake on Paper 2?', options: ['Spending too long on the single poem', 'Spending too long on the novel and rushing the poetry', 'Spending too long on the comparison', 'Spending too long reading the unseen poem'], correct: 1, explanation: 'The novel (40 marks) tempts students to overwrite, but the two poetry questions are also worth 40 marks combined. Sticking to the 55-minute novel allocation is essential.' },
    { id: 'edx-lt2-a11', question: 'What narrative function does Tiny Tim serve in A Christmas Carol?', options: ['Comic relief', 'A symbol of innocence whose fate exposes the consequences of social neglect', 'A plot device for conflict with Scrooge', 'A representation of Scrooge\'s childhood'], correct: 1, explanation: 'Tiny Tim is a symbol of innocence and consequence. His potential death makes both Scrooge and the reader complicit in poverty\'s toll \u2014 Dickens\'s most emotionally compelling argument.' },
    { id: 'edx-lt2-a12', question: 'Which section of Paper 2 is open book?', options: ['Section A \u2014 the full novel text is provided', 'Section B \u2014 a clean, unannotated copy of the poetry anthology', 'Both sections', 'Neither section \u2014 the entire paper is closed book'], correct: 1, explanation: 'Section B is open book: you receive a clean copy of the Edexcel poetry anthology with no annotations. Section A (the novel) is closed book \u2014 you only see the printed extract.' },
  ],
};

export const edexcelLitCourses: CourseData[] = [edexcelLitPaper1, edexcelLitPaper2];
