import type { CourseModule } from './courses';

export const litP1Modules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Paper 1 Overview & Assessment Objectives
  // ──────────────────────────────────────────────
  {
    id: 'edx-lt1-m1',
    title: 'Paper 1 Overview & Assessment Objectives',
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

<h3>Assessment Objectives</h3>
<p>Four AOs are tested across Paper 1, but they carry different weight depending on the section:</p>
<ul>
  <li><strong>AO1</strong> — Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations.</li>
  <li><strong>AO2</strong> — Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.</li>
  <li><strong>AO3</strong> — Show understanding of the relationships between texts and the contexts in which they were written.</li>
  <li><strong>AO4</strong> — Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. <em>This is assessed on one essay only</em> (typically the Shakespeare section) and is worth up to 4 marks.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> AO4 (SPaG) marks are easy to lose through carelessness. Because they are only assessed on one essay, every spelling slip and missing full stop in that response costs you. Leave two minutes at the end of your Shakespeare essay purely for proofreading.</div>

<h3>How Marks Break Down</h3>
<p>Each 40-mark section is typically weighted as follows:</p>
<ul>
  <li><strong>AO1:</strong> approximately 15 marks per section — rewarding your ideas and use of references.</li>
  <li><strong>AO2:</strong> approximately 15 marks per section — rewarding analysis of the writer's craft.</li>
  <li><strong>AO3:</strong> approximately 10 marks per section — rewarding contextual understanding.</li>
  <li><strong>AO4:</strong> up to 4 additional marks on the Shakespeare essay only.</li>
</ul>

<h3>Recommended Timing Plan</h3>
<ol>
  <li><strong>0–5 min:</strong> Read the Shakespeare extract carefully. Annotate key words, literary devices and contextual links.</li>
  <li><strong>5–50 min:</strong> Write your Shakespeare essay (40 marks + 4 SPaG marks). Spend roughly 5 minutes planning and 40 minutes writing.</li>
  <li><strong>50–55 min:</strong> Read the Post-1914 extract. Annotate in the same way.</li>
  <li><strong>55–95 min:</strong> Write your Post-1914 essay (40 marks). Again, 5 minutes planning and 35 minutes writing.</li>
  <li><strong>95–105 min:</strong> Review both essays. Prioritise checking the Shakespeare response for SPaG (AO4).</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing only about the printed extract and ignoring the wider text. Both sections ask you to use the extract as a <em>starting point</em>. At least a third of your essay should discuss moments, themes, or character development from elsewhere in the text, otherwise you cannot access the top mark bands.</div>

<h3>What "Top Band" Responses Look Like</h3>
<p>Examiners describe the highest-level answers as <strong>critical, exploratory</strong> responses that:</p>
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
          'Which assessment objective tests spelling, punctuation and grammar (SPaG)?',
        options: ['AO1', 'AO2', 'AO3', 'AO4'],
        correct: 3,
        explanation:
          'AO4 assesses SPaG and is worth up to 4 additional marks. It is tested on one essay only — typically the Shakespeare response.',
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

<p><em>Macbeth</em> is the most widely studied Shakespeare text for Edexcel GCSE English Literature. This module maps the play's <strong>seven major themes</strong> onto the historical context you need for AO3 — and shows you how to weave context into your analysis without "bolting it on".</p>

<div class="key-term"><strong>Key Term: Jacobean</strong> — Relating to the reign of King James I of England (1603–1625). <em>Macbeth</em> was written c. 1606, shortly after James came to the throne. Understanding Jacobean beliefs and politics is essential for AO3.</div>

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
<p>Do the witches cause Macbeth's actions, or merely reveal what he already desired? This ambiguity is central to Shakespeare's design and gives candidates a rich line of argument for AO1.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest responses treat themes as <em>interconnected</em>. For example, link ambition to masculinity — Lady Macbeth equates manliness with murderous ambition, which shows how toxic definitions of masculinity fuel the play's violence.</div>

<h3>Historical Context for AO3</h3>
<ul>
  <li><strong>James I &amp; the Divine Right of Kings:</strong> James believed monarchs were appointed by God. Killing a king (regicide) was therefore not just treason but a sin against the divine order. This makes Duncan's murder doubly horrifying to a Jacobean audience.</li>
  <li><strong>The Gunpowder Plot (1605):</strong> The failed Catholic conspiracy to blow up Parliament occurred just a year before <em>Macbeth</em> was written. Themes of treason, hidden plots, and divine punishment would have resonated powerfully.</li>
  <li><strong>The Great Chain of Being:</strong> Elizabethan and Jacobean society believed in a strict natural hierarchy — God, king, nobles, commoners. Macbeth's regicide disrupts this chain, and nature itself responds with storms and unnatural events.</li>
  <li><strong>Witch Trials:</strong> Between 1560 and 1700, thousands of people (mostly women) were tried and executed for witchcraft across Britain. James I's <em>Daemonologie</em> fuelled persecutions. The witches in <em>Macbeth</em> tapped directly into contemporary fears.</li>
</ul>

<div class="key-term"><strong>Key Term: The Great Chain of Being</strong> — A Jacobean belief that all of creation existed in a fixed, divinely ordained hierarchy. Disrupting this order — for example, by killing a king — was thought to cause chaos in nature itself.</div>

<h3>Embedding Context — Not Bolting It On</h3>
<p>A common weakness in GCSE essays is writing a detached paragraph of context that does not connect to the text. Instead, <strong>embed</strong> context into your analysis:</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "In Jacobean times people believed in witches. James I wrote a book about them." as a stand-alone sentence with no link to the text. This is "bolted-on" context and will not score highly for AO3.</div>

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
          'A detached statement of historical fact with no link to the text — it scores poorly for AO3',
          'Using too many quotations instead of context — it is penalised under AO2',
          'Referring to a different Shakespeare play for comparison — it is irrelevant',
        ],
        correct: 1,
        explanation:
          'Bolted-on context means dropping in a historical fact (e.g. "James I believed in witches") without connecting it to the text\'s language, themes, or effects. To score well for AO3, you must embed context into your analysis.',
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

<p>For the Shakespeare question on Paper 1, go beyond describing what a character does — explain <em>how</em> Shakespeare constructs them (AO2) and <em>why</em> they matter thematically and contextually (AO3).</p>

<div class="key-term"><strong>Key Term: Character Arc</strong> — The transformation a character undergoes across a text. In tragedy, the protagonist's arc traces a rise followed by a catastrophic fall.</div>

<h3>Major Character Arcs</h3>

<h4>Macbeth</h4>
<ul>
  <li><strong>Brave warrior</strong> — Praised as "brave Macbeth" who "unseamed" the rebel "from the nave to the chops" (Act 1).</li>
  <li><strong>Ambitious but conflicted</strong> — His Act 1 Scene 7 soliloquy reveals moral horror at regicide yet inability to resist power.</li>
  <li><strong>Tyrant</strong> — Orders the murders of Banquo and Macduff's family; becomes isolated and paranoid.</li>
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

<h3>Writing About Character: AO2 Language</h3>
<p>Show awareness that characters are <em>constructs</em>. Use: "Shakespeare <strong>presents</strong> Macbeth as…", "Shakespeare <strong>portrays</strong> Lady Macbeth through…", "Shakespeare <strong>constructs</strong> Banquo as a foil to…"</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Treat characters as <em>vehicles for themes</em>. Macbeth is Shakespeare's exploration of unchecked ambition and the divine right of kings. Link character analysis to bigger ideas for top-band marks.</div>

<h3>Characters and Jacobean Anxieties</h3>
<ul>
  <li><strong>Macbeth's regicide</strong> violated the divine right of kings — a belief James I held deeply.</li>
  <li><strong>Lady Macbeth's ambition</strong> transgressed expected female roles, reinforcing fears about unnatural female influence.</li>
  <li><strong>Banquo's lineage</strong> was believed to lead to James I, so his nobility was politically significant.</li>
</ul>

<h3>Model Character Paragraph</h3>
<div class="text-extract">Shakespeare presents Macbeth's deterioration through blood imagery. Initially blood symbolises bravery, but after Duncan's murder it becomes guilt: "Will all great Neptune's ocean wash this blood / Clean from my hand?" By Act 3, blood is a metaphor for moral entrapment. This evolving imagery shows ambition corrupting absolutely — a warning for a Jacobean audience who feared political instability.<div class="source">Model paragraph: AO1 + AO2 + AO3</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as real people. Avoid "Macbeth feels angry" — instead write "Shakespeare presents Macbeth as consumed by paranoia, reflecting the consequences of tyranny."</div>
`,
    quiz: [
      {
        id: 'edx-lt1-m3-q1',
        question:
          'Which phrase best demonstrates AO2-focused writing about character?',
        options: [
          'Macbeth is a bad person who makes terrible choices',
          'Shakespeare constructs Macbeth as a vehicle for exploring unchecked ambition',
          'Macbeth kills Duncan because he is greedy for power',
          'I think Macbeth is the villain of the play',
        ],
        correct: 1,
        explanation:
          'AO2 requires you to analyse the writer\'s methods. "Shakespeare constructs Macbeth as a vehicle for…" shows awareness that the character is a deliberate authorial construction used to explore a theme.',
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

<p>AO2 requires you to analyse <em>how</em> writers use language and structure to achieve effects — not just what is said, but how and why.</p>

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

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not just name a technique — explain the <em>effect</em>. "Shakespeare uses a metaphor" earns little; "the blood metaphor conveys guilt, reflecting Jacobean beliefs about divine punishment" earns much more.</div>

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
          'In the WHAT–HOW–WHY framework, which element most directly addresses AO2?',
        options: [
          'WHAT — describing what happens in the extract',
          'HOW — analysing Shakespeare\'s use of language, form and structure',
          'WHY — explaining the historical context',
          'All three elements equally address AO2',
        ],
        correct: 1,
        explanation:
          'AO2 focuses on the writer\'s methods — how language and structure are used to achieve effects. The HOW step directly addresses this by identifying techniques and analysing their impact.',
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

<p>The Shakespeare question on Edexcel Paper 1 is worth <strong>40 marks</strong> and you should spend approximately <strong>50 minutes</strong> on it. You are given a printed extract alongside a question about a <strong>theme or character</strong>. You must discuss <strong>both the extract and the wider play</strong> — candidates who only analyse the extract will cap their mark severely. All four AOs are assessed: <strong>AO1</strong> (response and references), <strong>AO2</strong> (language/form/structure), <strong>AO3</strong> (context), and <strong>AO4</strong> (technical accuracy).</p>

<div class="key-term"><strong>Key Term: Extract-to-Whole</strong> — The Edexcel requirement that your response moves from close analysis of the given passage outward to the rest of the play, showing how the theme or character develops across the full text.</div>

<h3>Recommended Response Structure</h3>
<ol>
  <li><strong>Introduction (3–4 sentences):</strong> State a clear thesis addressing the question. Reference context briefly.</li>
  <li><strong>Extract paragraphs (2–3):</strong> Close analysis — embed quotations, analyse language, imagery and dramatic techniques.</li>
  <li><strong>Wider play paragraphs (2–3):</strong> Link to other scenes showing how the idea evolves. Weave in context.</li>
  <li><strong>Conclusion (2–3 sentences):</strong> A final evaluative statement on Shakespeare's purpose or the audience's response.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Aim for roughly 60% on the extract and 40% on the wider play. The extract is your launchpad, but the wider play paragraphs lift you into the top bands.</div>

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

<h3>Timing (50 minutes)</h3>
<ol>
  <li><strong>0–5 min:</strong> Read and annotate the extract.</li>
  <li><strong>5–8 min:</strong> Plan — thesis, extract points, wider play points.</li>
  <li><strong>8–42 min:</strong> Write your response.</li>
  <li><strong>42–50 min:</strong> Proofread for AO4 (spelling, punctuation, grammar).</li>
</ol>
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
          'What must candidates discuss in their response to the Shakespeare question?',
        options: [
          'Only the given extract in close detail',
          'Only the wider play with brief reference to the extract',
          'Both the extract and the wider play',
          'A comparison between two Shakespeare plays',
        ],
        correct: 2,
        explanation:
          'The Edexcel question requires candidates to analyse both the given extract and the wider play. Focusing on only one will limit the mark significantly.',
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
          'Which assessment objectives are tested in the Edexcel Shakespeare question?',
        options: [
          'AO1 and AO2 only',
          'AO1, AO2, and AO3 only',
          'AO1, AO2, AO3, and AO4',
          'AO2, AO3, and AO4 only',
        ],
        correct: 2,
        explanation:
          'All four AOs are assessed: AO1 (response and references), AO2 (language, form and structure analysis), AO3 (context), and AO4 (technical accuracy of your own writing).',
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

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not simply state the play was written in 1945 — explain <em>how</em> context shapes interpretation: "A 1945 audience would recognise Birling's optimism as dangerously naive, reinforcing Priestley's argument against ignoring social responsibility."</div>

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

<div class="examiner-tip"><strong>Examiner Tip:</strong> Sheila is the safest exam choice — her clear arc naturally generates AO1, AO2, and AO3 marks in a single paragraph.</div>

<h3>Model Paragraph: Sheila's Development</h3>

<div class="text-extract">Priestley presents Sheila's development as central to the play's moral argument. In Act 1, the stage directions describe her as "a pretty girl in her early twenties, very pleased with life," suggesting a sheltered existence. After learning of Eva's dismissal from Milwards, her language shifts: "But these girls aren't cheap labour — they're people." The noun "people" is deliberately simple yet powerful — Priestley shows Sheila recognising a shared humanity her parents never acknowledge. By Act 3, she tells her parents: "You're pretending everything's all right." The present continuous verb "pretending" shows her refusal to return to ignorance. Priestley uses Sheila to embody his hope that the younger generation could build a more equal post-war society.<div class="source">Model analytical paragraph — AO1, AO2, AO3</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as if they are real people. Always frame analysis around Priestley's purpose — e.g. "Priestley uses Sheila to suggest…" not "Sheila feels bad because…"</div>
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
          'Because the examiner prefers formal language',
          'Because it demonstrates awareness that characters are constructs used to convey ideas (AO1/AO2)',
          'Because it adds to the word count',
          'Because the mark scheme only rewards biographical context',
        ],
        correct: 1,
        explanation:
          'Referring to Priestley\'s intentions shows the examiner that you understand characters are deliberate constructs — tools the writer uses to explore themes and influence the audience. This is essential for AO1 (interpretation) and AO2 (analysis of methods).',
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
<h2>An Inspector Calls — Writer's Methods &amp; Effects (AO2)</h2>

<p><strong>AO2</strong> asks you to analyse how writers use <strong>language, form, and structure</strong> to achieve effects. In drama, this means going beyond dialogue to examine Priestley's full toolkit as a playwright.</p>

<div class="key-term"><strong>Key Term: AO2</strong> — The assessment objective that rewards analysis of <em>how</em> a writer creates meaning through language, structure, and form.</div>

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

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about structure, think in terms of audience experience: "What does the audience feel, and how has Priestley engineered it?"</div>

<h3>Model AO2-Focused Paragraph</h3>

<div class="text-extract">Priestley uses the cyclical structure to reinforce his message. The telephone announces a girl has died and an inspector is coming — mirroring the opening. The Birlings' dismissal of the Inspector as a hoax is immediately punished; the comfortable resolution is snatched away. The audience must recognise that ignoring responsibility has consequences. Just as the Birlings relive the interrogation, post-war Britain must not repeat the inequalities that led to war.<div class="source">Model AO2 paragraph — technique, effect, purpose</div></div>
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

<div class="key-term"><strong>Key Term: Extract-to-Whole-Text Approach</strong> — Begin with close analysis of the given extract, then broaden to the rest of the text, mirroring the mark scheme requirement to address both the passage and the wider work.</div>

<h3>Planning in 5 Minutes</h3>
<ol>
  <li><strong>Identify the key theme.</strong> Read the extract twice, underline significant words. What is the examiner asking about — power, guilt, responsibility, conflict?</li>
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

<h3>Transition Phrases</h3>
<ul>
  <li><strong>Extract to wider text:</strong> "This idea is developed further when…" / "Elsewhere, [author] reinforces this…"</li>
  <li><strong>Contrast:</strong> "Conversely…" / "An alternative reading suggests…"</li>
  <li><strong>Context:</strong> "Writing in the aftermath of…" / "For a [year] audience, this would…"</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Avoid "This links to context because…" — embed context naturally so it feels like part of the argument.</div>
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
          'Because the examiner wants context woven into every paragraph, not isolated as an afterthought',
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

<div class="examiner-tip"><strong>Examiner Tip:</strong> If running over on Section A, stop at 50 minutes and move on. Two solid essays always beat one excellent and one rushed.</div>

<h3>Reading the Extract</h3>
<p><strong>First read:</strong> understand content, speaker, tone — do not write yet. <strong>Second read:</strong> annotate — underline key words, name techniques, note tone shifts. <strong>Then:</strong> highlight the question's instruction word; every paragraph must connect to it.</p>

<h3>Common Pitfalls</h3>
<ul>
  <li><strong>Narrative retelling:</strong> Analyse <em>how</em> and <em>why</em>, not <em>what</em> happens. The examiner knows the plot.</li>
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
  <li>Context (AO3) and language analysis (AO2) throughout?</li>
  <li>SPaG and handwriting checked?</li>
</ul>

<p>Grade boundaries (rough guide, both papers): <strong>Grade 9</strong> ~70–75%, <strong>Grade 7</strong> ~55–60%, <strong>Grade 5</strong> ~42–48%, <strong>Grade 4</strong> ~35–40%.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The difference between Grade 8 and 9 is sophistication of argument and precision of analysis — not the amount you write. Quality over quantity.</div>
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
  },
];
