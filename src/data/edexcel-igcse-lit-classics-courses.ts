import type { CourseData, CourseModule, CourseQuiz } from './courses';

// ═══════════════════════════════════════════════════════════════════════════════
// Edexcel IGCSE Literature — Classic Novel Texts (Pearson 4ET1)
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// 1. Pride and Prejudice — Jane Austen
// ─────────────────────────────────────────────────────────────────────────────

const prideAndPrejudiceModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Context & Author Background
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-pp-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>Jane Austen and the World of <em>Pride and Prejudice</em></h2>

<p>Understanding the context in which Jane Austen wrote <em>Pride and Prejudice</em> (1813) is essential for achieving the highest marks in your IGCSE Literature exam, particularly for <strong>AO3</strong> — demonstrating understanding of the relationships between texts and the contexts in which they were written. However, context must never be bolted on; it must be woven seamlessly into your analysis of character, theme, and language.</p>

<h3>Jane Austen: Life and Influences</h3>
<p>Jane Austen (1775–1817) was born in Steventon, Hampshire, the seventh of eight children in a close-knit, literate family. Her father was a clergyman, and the household valued reading, writing, and intellectual conversation. Austen began writing as a teenager, producing satirical sketches and parodies that reveal the sharp wit that would define her mature work.</p>

<p>Austen never married, despite receiving at least one proposal. She lived within a narrow social sphere — the rural gentry of southern England — and her novels draw almost exclusively from this world. This apparent limitation is, in fact, a strength: Austen's <strong>microscopic focus</strong> on a small section of society allows her to dissect its values, hypocrisies, and power structures with extraordinary precision.</p>

<div class="key-term"><strong>Key Term: The Regency Period</strong> — The era in which Austen wrote, broadly 1795–1820, characterised by strict social hierarchies, the importance of landed wealth, and limited opportunities for women. Understanding this period is crucial for interpreting the choices and constraints faced by Austen's characters.</div>

<h3>The Social World of the Novel</h3>
<p>Austen's England was a society obsessed with <strong>rank, property, and respectability</strong>. The landed gentry — families who derived income from estates rather than trade — sat below the aristocracy but above the professional and merchant classes. Social mobility was possible but fraught with anxiety, and marriage was the primary mechanism through which families consolidated or improved their status.</p>

<p>For women, the stakes were even higher. With no right to inherit property under the laws of entail, no access to higher education, and limited career options, marriage was not merely a romantic choice but an <strong>economic necessity</strong>. The Bennet sisters' predicament — five daughters with no male heir to inherit their father's estate — is not a plot contrivance but a realistic depiction of the vulnerability women faced.</p>

<h3>The Marriage Market</h3>
<p>Austen understood that marriage in her society functioned as a <strong>market</strong>. A woman's value was measured by her beauty, accomplishments, connections, and dowry; a man's by his income, estate, and social standing. The novel's famous opening line — <em>"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"</em> — is deeply ironic, exposing the mercenary logic that underpins the apparently civilised rituals of courtship.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing context in your exam response, always connect it to Austen's methods. Do not simply state facts about the Regency period — show how Austen uses irony, free indirect discourse, or dialogue to critique or expose these social realities.</div>

<h3>Literary Context</h3>
<p>Austen wrote during the Romantic period, yet her style is strikingly different from contemporaries like Wordsworth or Byron. While the Romantics celebrated emotion, nature, and individual rebellion, Austen favoured <strong>reason, social observation, and moral discernment</strong>. Her prose style is neoclassical — balanced, precise, and controlled — but beneath its polished surface lies a radical critique of her society's values.</p>

<p><em>Pride and Prejudice</em> also engages with the tradition of the <strong>novel of manners</strong>, a genre that examines the behaviour, values, and social codes of a particular class. Austen elevates this form by combining social comedy with genuine moral seriousness, creating characters who must learn and grow in order to achieve happiness.</p>

<h3>The Publication of <em>Pride and Prejudice</em></h3>
<p>The novel was originally drafted as <em>First Impressions</em> in 1796–97, when Austen was just twenty-one. It was rejected by a publisher without being read. Austen revised it extensively before it was published in 1813 by Thomas Egerton. The novel was an immediate success, praised for its wit and characterisation, and it remains one of the most widely read English novels.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Austen as a simple romance writer. While the novel ends with marriages, it is fundamentally a work of social criticism. The romance plot is the vehicle through which Austen explores class, gender, morality, and self-knowledge. Examiners will reward responses that recognise this complexity.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-pp-m1-q1',
        question: 'Why is the entail on the Bennet estate significant in the context of the novel?',
        options: [
          'It shows that Mr Bennet is a poor manager of his finances',
          'It illustrates how inheritance laws left women economically vulnerable',
          'It proves that the Bennets belong to the lower classes',
          'It is a minor legal detail with no thematic importance',
        ],
        correct: 1,
        explanation: 'The entail means the estate will pass to Mr Collins rather than the Bennet daughters, illustrating how property laws disadvantaged women and made marriage an economic necessity — a central concern of the novel.',
      },
      {
        id: 'igcse-classic-pp-m1-q2',
        question: 'What is ironic about the novel\'s famous opening line?',
        options: [
          'It states a fact that everyone in the novel agrees with',
          'It pretends to state a universal truth while actually exposing the mercenary logic of the marriage market',
          'It is spoken by Elizabeth as a joke',
          'It contradicts the plot because no wealthy men appear in the novel',
        ],
        correct: 1,
        explanation: 'The opening line is ironic because it presents a social assumption — that wealthy men must want wives — as if it were universal truth, when in fact it exposes how society views marriage as an economic transaction rather than a matter of genuine affection.',
      },
      {
        id: 'igcse-classic-pp-m1-q3',
        question: 'How does Austen\'s style differ from her Romantic contemporaries?',
        options: [
          'She favours reason, social observation, and moral discernment over emotion and individual rebellion',
          'She writes exclusively about the aristocracy',
          'She uses highly ornate, poetic language throughout',
          'She avoids any form of social criticism',
        ],
        correct: 0,
        explanation: 'While Romantic writers like Wordsworth and Byron celebrated emotion, nature, and rebellion, Austen\'s neoclassical style prioritises reason, precise social observation, and moral discernment — though her controlled prose conceals a sharp critique of society.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Plot & Structure
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-pp-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>Plot and Structure in <em>Pride and Prejudice</em></h2>

<p>A strong understanding of the novel's plot and structure is essential for <strong>AO1</strong> (close knowledge of the text) and <strong>AO2</strong> (analysis of form and structure). Austen's plotting is precise and deliberate — every scene advances the themes of the novel and develops the central relationship between Elizabeth and Darcy.</p>

<h3>The Three-Volume Structure</h3>
<p><em>Pride and Prejudice</em> was published in three volumes, and Austen carefully structured the narrative to build tension across this format:</p>
<ul>
  <li><strong>Volume I (Chapters 1–23):</strong> Introduction and first impressions. The Bennet family is introduced; Darcy and Elizabeth meet and form negative opinions of each other; Wickham appears and poisons Elizabeth's view of Darcy further; the volume ends with Charlotte's pragmatic acceptance of Mr Collins.</li>
  <li><strong>Volume II (Chapters 24–42):</strong> Deepening complications. Elizabeth visits Hunsford and receives Darcy's first proposal and letter; the letter begins her process of self-recognition; she visits Pemberley and sees Darcy in a new light.</li>
  <li><strong>Volume III (Chapters 43–61):</strong> Crisis and resolution. Lydia's elopement with Wickham creates a family crisis; Darcy intervenes secretly; the misunderstandings are resolved; both Elizabeth and Darcy achieve moral growth and are united.</li>
</ul>

<h3>Parallel Plots</h3>
<p>Austen uses <strong>parallel courtship plots</strong> to illuminate her central themes. Each romantic pairing reflects a different model of marriage:</p>
<ul>
  <li><strong>Jane and Bingley:</strong> Genuine mutual affection, but both are too passive; external interference (Darcy, Miss Bingley) can easily separate them. This pairing shows that goodness alone is not enough — one must also have the courage to act.</li>
  <li><strong>Charlotte and Collins:</strong> A pragmatic, loveless match. Charlotte marries for security, not affection. This pairing represents the harsh economic reality that underlies the marriage market.</li>
  <li><strong>Lydia and Wickham:</strong> A reckless union driven by physical attraction and vanity. This pairing shows the dangers of marrying without judgment or moral foundation.</li>
  <li><strong>Elizabeth and Darcy:</strong> The ideal — a marriage founded on mutual respect, intellectual equality, and genuine love, achieved only after both partners overcome their flaws.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In your exam response, comparing two courtship plots is an excellent way to demonstrate structural awareness (AO2). For instance, you might argue that Austen positions the Charlotte–Collins match as a foil to Elizabeth and Darcy, using the contrast to highlight what Elizabeth risks by refusing to marry for convenience.</div>

<h3>Key Structural Turning Points</h3>
<p>Identifying and analysing turning points is a powerful structural skill:</p>

<h4>The Meryton Assembly (Chapter 3)</h4>
<p>The first meeting between Elizabeth and Darcy establishes the central conflict. Darcy's dismissive remark — <em>"She is tolerable, but not handsome enough to tempt me"</em> — wounds Elizabeth's pride and sets the tone for their antagonistic relationship. Structurally, this scene creates the <strong>initial misunderstanding</strong> that the entire novel will work to dismantle.</p>

<h4>Darcy's First Proposal (Chapter 34)</h4>
<p>The dramatic centrepiece of the novel. Darcy's proposal is arrogant and insulting; Elizabeth's refusal is fierce and accusatory. This scene is the <strong>climactic confrontation</strong> of Volume II, and it forces both characters to confront their flaws. Structurally, it marks the end of the rising action and the beginning of the transformation.</p>

<h4>Darcy's Letter (Chapter 35)</h4>
<p>Perhaps the most important structural device in the novel. The letter provides Elizabeth — and the reader — with new information that overturns previous assumptions. It is the mechanism through which <strong>prejudice begins to dissolve</strong>, and it initiates Elizabeth's painful process of self-examination.</p>

<h4>The Visit to Pemberley (Chapters 43–44)</h4>
<p>Elizabeth sees Darcy in his own environment and receives the housekeeper's glowing testimony. This scene allows Austen to show rather than tell Darcy's transformation, and it marks a shift in Elizabeth's feelings from grudging respect to genuine attraction.</p>

<h4>Lydia's Elopement (Chapters 46–50)</h4>
<p>The crisis that tests all the novel's values. Lydia's reckless behaviour threatens to destroy the entire family's reputation. Darcy's secret intervention demonstrates his genuine transformation. Structurally, this crisis removes the last barriers to the central union.</p>

<div class="key-term"><strong>Key Term: Structural Foil</strong> — A character or subplot that contrasts with the main plot to highlight key themes. The Charlotte–Collins match is a structural foil to the Elizabeth–Darcy romance, and Wickham is a character foil to Darcy.</div>

<h3>Austen's Use of Irony in Structure</h3>
<p>The novel's structure itself is ironic. It begins with the assertion that wealthy men "must be in want of a wife" and ends with two marriages — yet the journey between these points systematically dismantles the superficial values that drive the marriage market. The happy ending is earned not through wealth or beauty but through <strong>moral growth and self-knowledge</strong>.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the plot as a simple love story. The exam rewards candidates who can discuss how Austen structures the narrative to explore ideas about class, gender, and morality. Focus on why events are placed where they are, not just what happens.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-pp-m2-q1',
        question: 'Why is Darcy\'s letter (Chapter 35) considered the most important structural device in the novel?',
        options: [
          'It is the longest chapter in the book',
          'It provides new information that overturns Elizabeth\'s assumptions and initiates her self-examination',
          'It is written in a different style from the rest of the novel',
          'It reveals that Wickham is secretly wealthy',
        ],
        correct: 1,
        explanation: 'Darcy\'s letter is the structural pivot of the novel because it provides Elizabeth — and the reader — with information that completely reverses previous judgments. It forces Elizabeth to recognise her own prejudice and begins the process of transformation for both protagonists.',
      },
      {
        id: 'igcse-classic-pp-m2-q2',
        question: 'What function does the Charlotte–Collins marriage serve in the novel\'s structure?',
        options: [
          'It provides comic relief to lighten the tone of the novel',
          'It acts as a structural foil to the Elizabeth–Darcy relationship, highlighting the economic realities of marriage',
          'It demonstrates that all marriages in Austen\'s world are happy',
          'It has no connection to the main plot',
        ],
        correct: 1,
        explanation: 'Charlotte\'s pragmatic, loveless marriage to Collins serves as a structural foil to Elizabeth and Darcy. It represents the harsh economic reality that Elizabeth risks by refusing to marry for convenience, and it illuminates the theme of marriage as a financial transaction.',
      },
      {
        id: 'igcse-classic-pp-m2-q3',
        question: 'How does Lydia\'s elopement function structurally in the novel?',
        options: [
          'It serves as the climax that tests the novel\'s values and removes the last barriers to Elizabeth and Darcy\'s union',
          'It is a subplot with no connection to the main romance',
          'It is used primarily for comic effect',
          'It demonstrates that Wickham is a good husband',
        ],
        correct: 0,
        explanation: 'Lydia\'s elopement is the structural crisis of Volume III. It threatens the family\'s reputation, tests Darcy\'s transformation through his secret intervention, and removes the final obstacles to the central relationship — proving that Darcy has genuinely changed.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Character Analysis
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-pp-m3',
    title: 'Character Analysis',
    duration: '55 min',
    content: `
<h2>Character Analysis in <em>Pride and Prejudice</em></h2>

<p>Austen's characters are among the most celebrated in English literature. For the IGCSE exam, you must go beyond describing what characters do and focus on <strong>how Austen constructs them</strong> — through dialogue, free indirect discourse, narrative commentary, and the contrast between characters. This addresses <strong>AO1</strong> (personal response) and <strong>AO2</strong> (analysis of the writer's methods).</p>

<h3>Elizabeth Bennet</h3>
<p>Elizabeth is the novel's protagonist and moral centre. Austen constructs her as intelligent, witty, and independent — qualities that set her apart from the conventional heroines of the period. However, Elizabeth is also flawed: her <strong>quick judgments and intellectual vanity</strong> lead her to misjudge both Darcy and Wickham.</p>

<p>Elizabeth's defining characteristic is her <em>"liveliness of mind"</em> — a phrase Darcy uses to describe what first attracted him to her. This intellectual vitality is both her greatest strength and her greatest vulnerability. She prides herself on her ability to read people, yet she reads Darcy and Wickham completely wrong.</p>

<p>Her arc is one of <strong>self-recognition</strong>. After reading Darcy's letter, she exclaims: <em>"Till this moment I never knew myself."</em> This is the emotional and moral climax of her journey — the moment she recognises that her prejudice has been as damaging as Darcy's pride.</p>

<div class="key-term"><strong>Key Term: Free Indirect Discourse</strong> — A narrative technique in which the narrator's voice merges with a character's thoughts. Austen uses this extensively with Elizabeth, allowing us to share her perceptions while also recognising, through subtle irony, when those perceptions are wrong.</div>

<h3>Mr Darcy</h3>
<p>Darcy is initially presented as proud, aloof, and socially dismissive. His remark at the Meryton Assembly — <em>"She is tolerable, but not handsome enough to tempt me"</em> — establishes him as arrogant. However, Austen gradually reveals that Darcy's apparent pride is partly <strong>shyness and social awkwardness</strong>, and that his behaviour conceals genuine integrity.</p>

<p>Darcy's transformation is demonstrated through <strong>action rather than declaration</strong>. He does not simply apologise for his behaviour — he changes it. His secret intervention to save Lydia, his generosity to Wickham, and his altered manner at Pemberley all demonstrate genuine moral growth. Austen shows that true change is proven by deeds, not words.</p>

<h3>Mr Bennet</h3>
<p>Mr Bennet is one of Austen's most complex creations. He is witty, intelligent, and perceptive — qualities that make him entertaining to read — but he is also <strong>fundamentally irresponsible</strong>. He has retreated from his marriage and his duties as a father, using irony and detachment as shields against a life of disappointment.</p>

<p>The Lydia crisis exposes the consequences of his negligence. His failure to discipline his younger daughters or to save for their futures leaves them all vulnerable. Austen uses Mr Bennet to argue that <strong>intelligence without responsibility is morally insufficient</strong>.</p>

<h3>Mrs Bennet</h3>
<p>Mrs Bennet is often dismissed as merely comic, but Austen's presentation is more nuanced. Her <em>"poor nerves"</em> and relentless pursuit of husbands for her daughters are exaggerated, but her anxiety is <strong>rooted in genuine economic fear</strong>. She understands, even if she cannot articulate it elegantly, that her daughters' futures depend entirely on marriage.</p>

<h3>Wickham</h3>
<p>Wickham is Austen's study of <strong>surface versus substance</strong>. He is charming, handsome, and socially adept — everything Darcy initially is not. Yet his appearance conceals moral bankruptcy: he is a liar, a gambler, and a seducer. Wickham functions as a <strong>foil to Darcy</strong>, demonstrating that agreeable manners can disguise vicious character, just as reserved manners can disguise genuine worth.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing characters, always focus on Austen's methods. How does she use dialogue, narrative voice, or contrast to construct your understanding of a character? Saying "Darcy is proud" is description; saying "Austen uses Darcy's clipped dialogue at the Meryton Assembly to construct an impression of arrogance that she will systematically dismantle" is analysis.</div>

<h3>Charlotte Lucas</h3>
<p>Charlotte represents the <strong>pragmatic alternative</strong> to Elizabeth's idealism. Her decision to marry Collins — <em>"I am not romantic, you know; I never was. I ask only a comfortable home"</em> — is presented without judgment by Austen. Charlotte is intelligent enough to understand her situation but realistic enough to accept it. She forces the reader to confront an uncomfortable question: is Elizabeth's refusal to compromise admirable or merely privileged?</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating characters as real people rather than constructions. In the exam, always remember that characters are created by the writer to serve thematic purposes. Ask "Why has Austen created this character?" and "What does this character reveal about the novel's themes?"</div>
`,
    quiz: [
      {
        id: 'igcse-classic-pp-m3-q1',
        question: 'What is the significance of Elizabeth\'s statement "Till this moment I never knew myself"?',
        options: [
          'She realises she has forgotten important personal details',
          'It marks the climax of her self-recognition, acknowledging that her prejudice has been as damaging as Darcy\'s pride',
          'She is commenting on a change in her physical appearance',
          'She is being sarcastic about Darcy\'s letter',
        ],
        correct: 1,
        explanation: 'This line is the emotional and moral turning point of Elizabeth\'s arc. She recognises that her pride in her own judgment has led her to misjudge both Darcy and Wickham, and that her prejudice has been as significant a flaw as Darcy\'s pride.',
      },
      {
        id: 'igcse-classic-pp-m3-q2',
        question: 'How does Wickham function as a foil to Darcy?',
        options: [
          'He is wealthier than Darcy but less attractive',
          'His charming exterior conceals moral bankruptcy, contrasting with Darcy\'s reserved manner concealing genuine worth',
          'He and Darcy are essentially identical characters',
          'He serves no function in relation to Darcy\'s characterisation',
        ],
        correct: 1,
        explanation: 'Wickham is Darcy\'s structural foil. His charming, agreeable surface hides lies and moral corruption, while Darcy\'s reserved, seemingly arrogant exterior conceals integrity and genuine worth. This contrast reinforces the novel\'s theme that appearances are unreliable.',
      },
      {
        id: 'igcse-classic-pp-m3-q3',
        question: 'Why is Mr Bennet a morally complex character despite his wit and intelligence?',
        options: [
          'He is secretly in league with Wickham',
          'His intelligence is combined with irresponsibility — he has retreated from his duties as a father, leaving his daughters vulnerable',
          'He is the least intelligent character in the novel',
          'He is presented without any flaws',
        ],
        correct: 1,
        explanation: 'Mr Bennet\'s wit and intelligence make him entertaining, but Austen shows that his ironic detachment is a form of irresponsibility. His failure to discipline his daughters or plan for their futures leaves them economically and socially vulnerable, as the Lydia crisis reveals.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Themes & Ideas
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-pp-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>Themes and Ideas in <em>Pride and Prejudice</em></h2>

<p>The IGCSE exam frequently asks you to discuss how a writer presents a particular theme. Strong responses do not simply list examples — they trace how a theme is <strong>developed, complicated, and resolved</strong> across the text. This module examines the major themes in <em>Pride and Prejudice</em> and provides the analytical frameworks you need.</p>

<h3>Pride</h3>
<p>The title announces this as a central concern. Austen explores multiple forms of pride:</p>
<ul>
  <li><strong>Social pride:</strong> Darcy's initial contempt for those below his social rank, exemplified by his behaviour at the Meryton Assembly and in his first proposal, where he dwells on Elizabeth's <em>"inferiority"</em> of connections.</li>
  <li><strong>Intellectual pride:</strong> Elizabeth's confidence in her own judgment, which leads her to form opinions too quickly and cling to them too stubbornly.</li>
  <li><strong>Family pride:</strong> Lady Catherine de Bourgh's obsessive concern with bloodlines and social status represents pride at its most absurd and rigid.</li>
</ul>
<p>Austen argues that pride in moderation — self-respect, dignity, awareness of one's worth — is not a flaw. What is dangerous is <strong>pride that prevents self-knowledge</strong> or empathy for others. Both Elizabeth and Darcy must learn to distinguish between justified self-respect and blinding arrogance.</p>

<h3>Prejudice</h3>
<p>Prejudice in the novel takes the form of <strong>premature judgment</strong> — forming opinions based on insufficient evidence. Elizabeth's prejudice against Darcy is rooted in his initial slight and reinforced by Wickham's lies. Darcy's prejudice against Elizabeth's family is rooted in their lack of social standing and Mrs Bennet's embarrassing behaviour.</p>
<p>The novel demonstrates that prejudice is not merely an intellectual error but a <strong>moral failure</strong>. It prevents genuine understanding and leads to injustice. Elizabeth's recognition of her own prejudice — <em>"How despicably I have acted! ... I, who have prided myself on my discernment!"</em> — is presented as a moment of moral awakening.</p>

<h3>Marriage</h3>
<p>Marriage is the novel's dominant structural and thematic concern. Austen presents a <strong>spectrum of marriages</strong>:</p>
<ul>
  <li><strong>Mr and Mrs Bennet:</strong> A cautionary example — a marriage based on physical attraction alone, leading to mutual contempt and dysfunction.</li>
  <li><strong>Charlotte and Collins:</strong> A pragmatic arrangement offering security without affection or intellectual companionship.</li>
  <li><strong>Lydia and Wickham:</strong> A reckless union based on lust and vanity, destined for unhappiness.</li>
  <li><strong>Jane and Bingley:</strong> A genuinely affectionate match, though both partners lack the force of character to overcome external obstacles alone.</li>
  <li><strong>Elizabeth and Darcy:</strong> The ideal — combining love, mutual respect, intellectual equality, and moral growth.</li>
</ul>
<p>Through these contrasts, Austen argues that the <strong>best marriages combine emotional, intellectual, and moral compatibility</strong>, and that marrying for money or status alone is as dangerous as marrying for passion alone.</p>

<h3>Class and Social Mobility</h3>
<p>Austen interrogates the rigid class structure of Regency England. Characters like Lady Catherine and Miss Bingley cling to social hierarchies, while Elizabeth's wit, intelligence, and moral integrity challenge the idea that worth is determined by birth. Darcy's eventual recognition that Elizabeth is his equal — despite her lower social standing — represents Austen's argument that <strong>true gentility is a matter of character, not class</strong>.</p>

<h3>Appearance versus Reality</h3>
<p>The novel is structured around the gap between how things appear and how they are. Wickham appears gentlemanly but is morally corrupt; Darcy appears proud but is fundamentally honourable; the Meryton Assembly creates first impressions that the rest of the novel systematically overturns. Austen warns that <strong>surface judgments are unreliable</strong> and that true understanding requires patience, humility, and willingness to revise one's opinions.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best exam responses discuss themes in relation to the writer's methods. Do not simply say "the theme of pride is important in the novel" — show how Austen uses specific techniques (irony, parallel plots, dialogue, narrative voice) to explore and develop the theme.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating themes as separate from each other. The strongest responses recognise that themes are interconnected — pride feeds prejudice, prejudice distorts perceptions of class, and class anxiety drives the marriage market. Weaving themes together shows sophisticated understanding.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-pp-m4-q1',
        question: 'How does Austen use the spectrum of marriages to develop the theme of marriage in the novel?',
        options: [
          'She shows that all marriages are equally happy',
          'She contrasts different models of marriage to argue that the best unions combine love, respect, intellectual equality, and moral growth',
          'She suggests that marriage should always be avoided',
          'She presents only two types of marriage: happy and unhappy',
        ],
        correct: 1,
        explanation: 'Austen presents a range of marriages — from the dysfunctional Bennets to the pragmatic Charlotte–Collins match to the ideal Elizabeth–Darcy union — to argue that genuine happiness in marriage requires emotional, intellectual, and moral compatibility, not merely wealth or passion.',
      },
      {
        id: 'igcse-classic-pp-m4-q2',
        question: 'What does Austen suggest about the relationship between pride and self-knowledge?',
        options: [
          'Pride is always a positive quality that should be encouraged',
          'Excessive pride prevents self-knowledge and empathy, but justified self-respect is not a flaw',
          'Pride and self-knowledge are completely unrelated',
          'Only lower-class characters suffer from pride',
        ],
        correct: 1,
        explanation: 'Austen distinguishes between justified self-respect and blinding arrogance. Both Elizabeth and Darcy must learn that excessive pride — whether social or intellectual — prevents self-knowledge and empathy. The novel argues that pride becomes destructive only when it blocks honest self-examination.',
      },
      {
        id: 'igcse-classic-pp-m4-q3',
        question: 'How does the theme of appearance versus reality function in the novel?',
        options: [
          'It is limited to the physical appearance of characters',
          'It only applies to Wickham',
          'It structures the entire novel, as first impressions are systematically overturned through deeper understanding',
          'Austen argues that first impressions are always accurate',
        ],
        correct: 2,
        explanation: 'The gap between appearance and reality structures the entire novel. From the misleading first impressions at the Meryton Assembly to Wickham\'s false charm and Darcy\'s concealed integrity, Austen demonstrates that surface judgments are unreliable and true understanding requires patience and humility.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Language & Style
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-pp-m5',
    title: 'Language & Style',
    duration: '50 min',
    content: `
<h2>Language and Style in <em>Pride and Prejudice</em></h2>

<p>Austen's language is one of her most distinctive and examinable qualities. For <strong>AO2</strong>, you must be able to analyse how she uses specific techniques to create meaning and effect. This module focuses on the key linguistic and stylistic features of the novel.</p>

<h3>Irony</h3>
<p>Irony is Austen's primary tool. She employs several types:</p>

<h4>Verbal Irony</h4>
<p>Characters say the opposite of what they mean, or the narrator presents information with a tone that undercuts its surface meaning. The opening line is the most famous example: <em>"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."</em> The sentence presents social convention as if it were natural law, exposing its absurdity.</p>

<h4>Dramatic Irony</h4>
<p>The reader knows something a character does not. When Elizabeth trusts Wickham and condemns Darcy, the reader may suspect — and eventually confirms — that her judgments are reversed. This creates tension and invites the reader to question their own assumptions alongside Elizabeth's.</p>

<h4>Situational Irony</h4>
<p>Events turn out contrary to expectations. The man Elizabeth despises becomes her husband; the man she trusts proves to be a villain. Lady Catherine's attempt to prevent the match between Elizabeth and Darcy actually accelerates it, as her report of Elizabeth's refusal to promise not to accept Darcy gives him hope.</p>

<div class="key-term"><strong>Key Term: Free Indirect Discourse (FID)</strong> — A technique where the narrator's voice blends with a character's thoughts, allowing us to see the world through the character's eyes while the narrator retains the ability to signal irony. Austen is one of the earliest and most sophisticated practitioners of this technique.</div>

<h3>Free Indirect Discourse</h3>
<p>This is perhaps Austen's most important stylistic innovation. Consider this passage describing Elizabeth's reaction to Darcy's letter:</p>
<p><em>"She grew absolutely ashamed of herself. Of neither Darcy nor Wickham could she think without feeling she had been blind, partial, prejudiced, absurd."</em></p>
<p>This is not direct speech (Elizabeth does not say these words aloud) nor is it pure narration (the emotional intensity belongs to Elizabeth). The narrator and character merge, creating a uniquely intimate and yet critically distanced perspective. FID allows Austen to <strong>simultaneously convey and evaluate</strong> a character's thoughts.</p>

<h3>Dialogue</h3>
<p>Austen's dialogue is sharply individualised. Each character has a distinctive voice:</p>
<ul>
  <li><strong>Elizabeth:</strong> Witty, quick, often ironic. Her dialogue reveals intelligence but also occasional over-confidence.</li>
  <li><strong>Mr Bennet:</strong> Sardonic and detached. His dry wit entertains but also reveals his emotional withdrawal.</li>
  <li><strong>Mrs Bennet:</strong> Exclamatory, repetitive, hyperbolic. Her dialogue is comic but also reveals genuine anxiety.</li>
  <li><strong>Mr Collins:</strong> Pompous, long-winded, and obsequious. His speeches are masterclasses in self-important absurdity.</li>
  <li><strong>Darcy:</strong> Initially clipped and formal, becoming warmer and more open as the novel progresses. His changing speech patterns mirror his emotional development.</li>
</ul>

<h3>Narrative Voice</h3>
<p>Austen's third-person narrator is <strong>omniscient but selective</strong>. The narrator can enter any character's mind but chooses to remain closest to Elizabeth, creating a perspective that is intimate but not unlimited. This selectivity means that the reader shares Elizabeth's misjudgments, making the revelations about Darcy and Wickham as surprising for us as they are for her.</p>

<h3>Satire</h3>
<p>Austen uses satire to expose the follies of her society. Characters like Mr Collins and Lady Catherine are <strong>satirical portraits</strong> — exaggerated enough to be comic but realistic enough to make serious points about snobbery, sycophancy, and the absurdity of rigid social hierarchies. The satire is always controlled; Austen mocks but never becomes cruel.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing Austen's language, always connect technique to meaning. For example: "Austen uses free indirect discourse to align the reader with Elizabeth's perspective, making us complicit in her misjudgments and forcing us to share her uncomfortable moment of self-recognition — thereby reinforcing the novel's argument that prejudice is a universal human tendency, not merely Elizabeth's personal failing."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Overlooking Austen's irony. If you read the novel at face value, you will miss much of its meaning. Always ask: "Is the narrator being ironic here? Is there a gap between what is said and what is meant?" Identifying and analysing irony is one of the fastest routes to high marks.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-pp-m5-q1',
        question: 'What is free indirect discourse and why is it significant in the novel?',
        options: [
          'It is a type of dialogue used only by minor characters',
          'It is a technique where the narrator\'s voice blends with a character\'s thoughts, allowing Austen to simultaneously convey and evaluate a character\'s perceptions',
          'It is Austen\'s term for chapters written in first person',
          'It refers to the letters exchanged between characters',
        ],
        correct: 1,
        explanation: 'Free indirect discourse merges the narrator\'s voice with a character\'s thoughts, creating an intimate yet critically distanced perspective. Austen uses it to align the reader with Elizabeth\'s perceptions while subtly signalling, through irony, when those perceptions are mistaken.',
      },
      {
        id: 'igcse-classic-pp-m5-q2',
        question: 'How does Lady Catherine\'s attempt to prevent Elizabeth and Darcy\'s match demonstrate situational irony?',
        options: [
          'Lady Catherine succeeds in preventing the match',
          'Her intervention actually accelerates the match by giving Darcy hope that Elizabeth might accept him',
          'Lady Catherine never meets Elizabeth in the novel',
          'It is an example of verbal irony, not situational irony',
        ],
        correct: 1,
        explanation: 'This is situational irony because events turn out contrary to Lady Catherine\'s intentions. Her report of Elizabeth\'s refusal to promise not to accept Darcy actually gives him hope, accelerating the very outcome she sought to prevent.',
      },
      {
        id: 'igcse-classic-pp-m5-q3',
        question: 'How does Austen use Mr Collins\'s dialogue to create satirical effect?',
        options: [
          'His speeches are short and direct, contrasting with other characters',
          'His pompous, long-winded, obsequious speeches are masterclasses in self-important absurdity that satirise sycophancy and social pretension',
          'He speaks in dialect to indicate his lower social status',
          'His dialogue is identical to Darcy\'s, creating a parallel',
        ],
        correct: 1,
        explanation: 'Mr Collins\'s dialogue is characterised by its pomposity, excessive length, and obsequiousness — particularly towards Lady Catherine. Austen uses his speeches as satirical portraits of sycophancy and self-importance, exposing the absurdity of rigid social hierarchies.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Exam Practice & Model Response
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-pp-m6',
    title: 'Exam Practice & Model Response',
    duration: '55 min',
    content: `
<h2>Exam Practice for <em>Pride and Prejudice</em></h2>

<p>This module brings together everything you have learned and applies it to exam-style questions. The Edexcel IGCSE Literature exam (4ET1) tests your ability to write sustained, analytical responses under timed conditions. Success requires not just knowledge of the text but the ability to <strong>construct a coherent argument, integrate evidence, and analyse the writer's methods</strong>.</p>

<h3>Understanding the Question</h3>
<p>IGCSE Literature questions typically take one of two forms:</p>
<ul>
  <li><strong>Extract-based questions:</strong> You are given a passage and asked to analyse it in detail, then connect your analysis to the wider text.</li>
  <li><strong>Discursive essay questions:</strong> You are asked to discuss a theme, character, or technique across the whole novel.</li>
</ul>
<p>In both cases, the question will usually focus on <strong>how the writer presents</strong> something — a character, theme, relationship, or idea. The word "how" is crucial: it directs you to analyse Austen's methods, not simply describe what happens.</p>

<h3>Sample Question</h3>
<div class="text-extract"><strong>Question:</strong> How does Austen present the theme of pride in <em>Pride and Prejudice</em>?<br><br>You should consider:<br>• how pride is shown through different characters<br>• how Austen uses language and structure to explore pride<br>• the significance of pride in the novel as a whole</div>

<h3>Planning Your Response</h3>
<p>Before writing, spend 5 minutes planning. A strong plan for this question might include:</p>
<ol>
  <li><strong>Introduction:</strong> Thesis — Austen presents pride as a complex quality that ranges from destructive arrogance to justified self-respect, arguing that the distinction depends on self-knowledge.</li>
  <li><strong>Darcy's social pride:</strong> Meryton Assembly, first proposal — language analysis of his dismissive dialogue; contrast with his later behaviour at Pemberley.</li>
  <li><strong>Elizabeth's intellectual pride:</strong> Her confidence in her own judgment; the irony of her being wrong about both Darcy and Wickham; the moment of self-recognition after the letter.</li>
  <li><strong>Lady Catherine's rigid pride:</strong> Satirical presentation; her confrontation with Elizabeth as a clash of different types of pride.</li>
  <li><strong>Conclusion:</strong> Austen uses the parallel journeys of Elizabeth and Darcy to argue that pride must be tempered by self-knowledge and empathy.</li>
</ol>

<h3>Model Response Extract</h3>
<p>Here is an example of how a top-band response might begin:</p>

<div class="model-response">
<p>Austen presents pride as a multifaceted quality that, depending on its nature and degree, can either corrupt or dignify. Through the parallel arcs of Elizabeth and Darcy, she constructs an argument that pride becomes destructive only when it prevents self-knowledge — and that the remedy for destructive pride is not humility but honest self-examination.</p>

<p>Darcy's pride is initially presented as social arrogance. At the Meryton Assembly, his dismissal of Elizabeth — "She is tolerable, but not handsome enough to tempt me" — reveals a man who evaluates others purely by their social utility. The adjective "tolerable" is devastatingly reductive, reducing Elizabeth to an object of assessment rather than recognising her as a person. Austen's use of reported speech here is significant: by having Darcy's words overheard by Elizabeth, she ensures that his pride has immediate social consequences, wounding Elizabeth and setting the novel's central conflict in motion.</p>

<p>However, Austen complicates the reader's initial judgment of Darcy — just as she complicates Elizabeth's. Through the structural device of Darcy's letter in Chapter 35, Austen provides information that forces both Elizabeth and the reader to re-evaluate their assumptions. The letter reveals that Darcy's pride, while real, coexists with genuine integrity: his treatment of Wickham has been honourable, and his interference in Jane and Bingley's relationship, though misguided, was motivated by concern rather than malice. Austen thus uses the epistolary form to dismantle prejudice, demonstrating that pride cannot be accurately judged from a single encounter.</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Embed quotations:</strong> Weave short quotations into your sentences rather than presenting them as standalone blocks. This demonstrates fluency and confidence.</li>
  <li><strong>Analyse individual words:</strong> Zoom in on specific word choices — adjectives, verbs, imagery — and explain why Austen chose them.</li>
  <li><strong>Discuss structure:</strong> Show awareness of where events occur in the novel and why their placement matters.</li>
  <li><strong>Integrate context:</strong> Connect your analysis to the social and literary context without interrupting the flow of your argument.</li>
  <li><strong>Maintain a conceptualised argument:</strong> Every paragraph should advance your overarching thesis, not just make isolated points.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners consistently report that the difference between a good response and an excellent one is the quality of analysis at word and phrase level. Candidates who zoom in on individual words — explaining why "tolerable" is more revealing than "attractive" would have been, for instance — consistently achieve the highest marks.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing everything you know about the novel rather than answering the specific question. Every sentence in your response must relate directly to the question focus. If the question asks about pride, do not spend a paragraph discussing the marriage plot unless you can directly connect it to the theme of pride.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-pp-m6-q1',
        question: 'What does the word "how" signal in an IGCSE Literature question like "How does Austen present the theme of pride?"',
        options: [
          'You should describe the plot in chronological order',
          'You should focus on analysing the writer\'s methods — language, structure, and form — not simply describe content',
          'You should compare the novel with another text',
          'You should write about your personal experience of pride',
        ],
        correct: 1,
        explanation: 'The word "how" directs you to focus on the writer\'s craft — the specific techniques Austen uses to present, develop, and explore the theme. Responses that describe what happens without analysing how Austen constructs meaning will not access the top mark bands.',
      },
      {
        id: 'igcse-classic-pp-m6-q2',
        question: 'Why is word-level analysis important for achieving top marks?',
        options: [
          'It fills space in the essay',
          'Examiners report that zooming in on individual word choices and explaining their significance is a key differentiator between good and excellent responses',
          'It is only necessary for poetry questions, not prose',
          'It is less important than retelling the plot accurately',
        ],
        correct: 1,
        explanation: 'Examiners consistently highlight word-level analysis as a distinguishing feature of top-band responses. Explaining why a specific word choice is significant — such as why "tolerable" is more revealing than a neutral alternative — demonstrates sophisticated analytical skill.',
      },
      {
        id: 'igcse-classic-pp-m6-q3',
        question: 'What is the most important quality of a conceptualised argument in a Literature essay?',
        options: [
          'It should mention as many literary devices as possible',
          'It should retell the plot in detail',
          'It should provide an overarching thesis that unifies the entire essay, with every paragraph advancing that interpretation',
          'It should avoid making any specific claims about the text',
        ],
        correct: 2,
        explanation: 'A conceptualised argument is an overarching thesis or interpretation that threads through the entire essay. Every paragraph should advance this thesis, creating a coherent, unified response rather than a list of disconnected points.',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. Great Expectations — Charles Dickens
// ─────────────────────────────────────────────────────────────────────────────

const greatExpectationsModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Context & Author Background
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-ge-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>Charles Dickens and the World of <em>Great Expectations</em></h2>

<p>Charles Dickens (1812–1870) is arguably the most important English novelist of the Victorian era. Understanding his life, his social concerns, and the world he wrote about is essential for <strong>AO3</strong> and will enrich every aspect of your analysis of <em>Great Expectations</em> (1860–61).</p>

<h3>Dickens's Early Life</h3>
<p>Dickens's childhood experiences profoundly shaped his writing. When he was twelve, his father was imprisoned in the Marshalsea debtors' prison, and the young Charles was sent to work in a blacking factory, pasting labels on bottles of boot polish. This traumatic period — which Dickens kept secret for most of his life — left him with a <strong>lifelong empathy for the poor and a visceral understanding of the shame and humiliation of poverty</strong>.</p>

<p>These experiences are directly reflected in <em>Great Expectations</em>. Pip's shame about his humble origins, his desperate desire for social advancement, and the crushing discovery that his wealth comes from a convict all echo Dickens's own complex relationship with class and respectability.</p>

<div class="key-term"><strong>Key Term: Bildungsroman</strong> — A novel that traces the moral and psychological development of a protagonist from youth to maturity. <em>Great Expectations</em> is one of the finest examples of this genre in English literature, following Pip's journey from innocent child to disillusioned gentleman to morally reawakened adult.</div>

<h3>Victorian Society and Class</h3>
<p>Victorian England was characterised by extreme social inequality. The Industrial Revolution had created vast wealth for the middle and upper classes while leaving the working poor in appalling conditions. Social class was determined not just by income but by <strong>birth, accent, manners, and education</strong> — making genuine social mobility extremely difficult.</p>

<p>Dickens was fascinated by the <strong>moral corruption</strong> that wealth and social aspiration could produce. In <em>Great Expectations</em>, he explores how the pursuit of gentility can destroy authentic human connections and lead to moral bankruptcy. Pip's transformation from a kind, loyal boy into a snobbish, ungrateful young man is Dickens's most sustained critique of the Victorian obsession with class.</p>

<h3>The Criminal Justice System</h3>
<p>Dickens was a fierce critic of the Victorian legal and penal system. Transportation — sending convicts to penal colonies in Australia — features prominently in the novel through Magwitch. Dickens portrays Magwitch with <strong>sympathy and humanity</strong>, challenging the Victorian assumption that criminals were irredeemably wicked and arguing that criminality was often a product of poverty and social neglect.</p>

<h3>Serial Publication</h3>
<p><em>Great Expectations</em> was published in weekly instalments in Dickens's literary magazine <em>All the Year Round</em> from December 1860 to August 1861. This format influenced the novel's structure: each instalment needed to end with a <strong>cliffhanger or moment of tension</strong> to keep readers buying the next issue. The episodic structure creates a distinctive rhythm of revelation, surprise, and suspense.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing context, always connect it to Dickens's methods. For instance: "Dickens draws on his own childhood experience of the blacking factory to create Pip's visceral shame at the forge, using sensory language — the heat, the soot, the heavy labour — to make the reader feel the social stigma that Pip internalises." This integrates context with analysis of language and effect.</div>

<h3>The Two Endings</h3>
<p>Dickens originally wrote a bleak ending in which Pip and Estella do not reunite. On the advice of his friend Edward Bulwer-Lytton, he revised it to a more ambiguous, cautiously hopeful conclusion. The existence of two endings is significant: it reveals Dickens's own uncertainty about whether his characters — and his society — are capable of genuine redemption.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Presenting context as a separate block of information disconnected from the text. Context should always serve your literary argument. Instead of writing "In Victorian times, there was a lot of poverty," write "Dickens uses Magwitch's criminal past to challenge Victorian assumptions about the moral inferiority of the poor, presenting him as more genuinely generous than the respectable characters who exploit Pip."</div>
`,
    quiz: [
      {
        id: 'igcse-classic-ge-m1-q1',
        question: 'How did Dickens\'s childhood experience of the blacking factory influence Great Expectations?',
        options: [
          'It inspired the character of Miss Havisham',
          'It gave him a lifelong empathy for the poor and a visceral understanding of the shame of poverty, reflected in Pip\'s class anxiety',
          'It had no influence on the novel',
          'It inspired the novel\'s happy ending',
        ],
        correct: 1,
        explanation: 'Dickens\'s traumatic childhood experience of poverty and menial labour directly shaped Pip\'s shame about his humble origins, his desperate desire for gentility, and the novel\'s central critique of class snobbery.',
      },
      {
        id: 'igcse-classic-ge-m1-q2',
        question: 'What is a Bildungsroman and how does Great Expectations fit this genre?',
        options: [
          'A novel about crime — the novel fits because it features convicts',
          'A novel tracing a protagonist\'s moral and psychological development from youth to maturity — the novel follows Pip\'s journey from innocence through disillusionment to moral reawakening',
          'A novel set in a specific historical period — the novel fits because it is set in Victorian England',
          'A novel written in first person — the novel fits because Pip narrates',
        ],
        correct: 1,
        explanation: 'A Bildungsroman traces a protagonist\'s moral and psychological growth from youth to maturity. Great Expectations is a classic example, following Pip from innocent childhood through his corrupting experience of wealth and social ambition to his eventual moral reawakening.',
      },
      {
        id: 'igcse-classic-ge-m1-q3',
        question: 'Why is the serial publication format significant to the novel\'s structure?',
        options: [
          'It meant the novel could not have a plot',
          'It required each instalment to end with a cliffhanger or moment of tension, creating a distinctive rhythm of revelation and suspense',
          'It had no effect on the novel\'s structure',
          'It meant the novel was very short',
        ],
        correct: 1,
        explanation: 'Weekly serial publication required Dickens to end each instalment with a hook to keep readers engaged. This format shaped the novel\'s episodic structure, creating its distinctive rhythm of suspense, revelation, and surprise.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Plot & Structure
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-ge-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>Plot and Structure in <em>Great Expectations</em></h2>

<p>Dickens structures <em>Great Expectations</em> in three distinct stages, each representing a phase of Pip's moral development. Understanding this tripartite structure and how Dickens uses foreshadowing, parallelism, and revelation is essential for <strong>AO2</strong>.</p>

<h3>The Three Stages</h3>

<h4>Stage One (Chapters 1–19): Innocence and Aspiration</h4>
<p>Pip lives at the forge with Joe and Mrs Joe. Key events include:</p>
<ul>
  <li><strong>The graveyard encounter with Magwitch</strong> — the novel's explosive opening, establishing the motifs of guilt, crime, and unexpected human connection.</li>
  <li><strong>Visits to Satis House</strong> — Pip meets Miss Havisham and Estella, who awaken his shame about his social class and ignite his desire for gentility.</li>
  <li><strong>The announcement of great expectations</strong> — Pip learns he has a secret benefactor and will become a gentleman. He assumes it is Miss Havisham, a crucial misreading that drives the plot.</li>
</ul>
<p>Stage One establishes the <strong>moral baseline</strong> from which Pip will fall. At the forge, despite hardship, Pip is fundamentally good — loyal to Joe, compassionate even to the convict. His corruption begins when he encounters Satis House and starts to measure himself by the standards of class rather than character.</p>

<h4>Stage Two (Chapters 20–39): Corruption and Disillusionment</h4>
<p>Pip moves to London and lives as a gentleman. Key events include:</p>
<ul>
  <li><strong>Pip's snobbery towards Joe</strong> — he is ashamed of Joe's visit to London, treating his loyal friend with condescension. This is the moral low point of Pip's journey.</li>
  <li><strong>His relationship with Herbert Pocket</strong> — Herbert is a genuine gentleman in character if not in wealth, serving as a moral counterpoint to Pip's superficial gentility.</li>
  <li><strong>The revelation of Magwitch as benefactor</strong> — the dramatic climax of Stage Two and the novel's most devastating structural twist. Everything Pip believed about his expectations is overturned.</li>
</ul>

<h4>Stage Three (Chapters 40–59): Redemption</h4>
<p>Pip must confront the truth about his expectations and find moral redemption. Key events include:</p>
<ul>
  <li><strong>Pip's growing affection for Magwitch</strong> — as he learns Magwitch's story, Pip begins to see past social surfaces to the human being beneath.</li>
  <li><strong>The unravelling of Miss Havisham's story</strong> — the connections between Magwitch, Estella, Miss Havisham, and Compeyson are revealed, creating a web of interconnected fates.</li>
  <li><strong>Pip's illness and Joe's nursing</strong> — Pip is physically and morally broken, and Joe tends him without reproach. This scene reverses the power dynamics of their relationship and marks Pip's return to moral health.</li>
</ul>

<div class="key-term"><strong>Key Term: Structural Irony</strong> — When the overall structure of the narrative creates ironic meaning. In <em>Great Expectations</em>, the three-stage structure is deeply ironic: Pip's "rise" in social terms (Stage Two) coincides with his moral fall, while his "fall" from wealth (Stage Three) coincides with his moral recovery.</div>

<h3>Foreshadowing and Parallelism</h3>
<p>Dickens uses foreshadowing extensively. The leg iron that Magwitch files off in Chapter 1 reappears as the weapon used to attack Mrs Joe. Pip's compassion for the convict in the graveyard foreshadows his eventual love for Magwitch. The mists on the marshes — which clear and return throughout the novel — symbolise Pip's fluctuating moral clarity.</p>

<p>Structural parallels reinforce the novel's themes. Pip's first encounter with Magwitch in the graveyard is paralleled by their final parting at the river. The forge, which Pip despises and abandons, becomes the symbol of everything he has lost and must recover.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Discussing the three-stage structure and its ironic significance is an excellent way to demonstrate structural awareness. You might write: "Dickens structures the novel so that Pip's social ascent in Stage Two coincides with his moral descent, creating a powerful structural irony that challenges the Victorian assumption that gentility equates to moral worth."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Narrating the plot without explaining its structural significance. Do not simply list events — explain why Dickens places them where he does and how the structure creates meaning.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-ge-m2-q1',
        question: 'What structural irony is created by the three-stage structure of the novel?',
        options: [
          'Each stage is the same length, creating symmetry',
          'Pip\'s social rise in Stage Two coincides with his moral fall, while his loss of wealth in Stage Three coincides with moral recovery',
          'The three stages correspond to three different narrators',
          'There is no irony in the novel\'s structure',
        ],
        correct: 1,
        explanation: 'The tripartite structure creates a powerful structural irony: as Pip rises socially, he falls morally, and as he loses his wealth and status, he recovers his moral compass. This challenges the Victorian equation of social status with moral worth.',
      },
      {
        id: 'igcse-classic-ge-m2-q2',
        question: 'Why is the revelation of Magwitch as Pip\'s benefactor the novel\'s most important structural twist?',
        options: [
          'It is surprising but has no thematic significance',
          'It overturns everything Pip believed about his expectations and forces him to confront his own snobbery and self-deception',
          'It confirms Pip\'s belief that Miss Havisham is his benefactor',
          'It occurs at the beginning of the novel',
        ],
        correct: 1,
        explanation: 'The Magwitch revelation is devastating because it demolishes Pip\'s entire self-narrative. His gentlemanly status — which he believed came from the respectable Miss Havisham — actually derives from a convict. This forces Pip to confront his snobbery and begins his moral recovery.',
      },
      {
        id: 'igcse-classic-ge-m2-q3',
        question: 'How does Joe\'s nursing of Pip in Stage Three function structurally?',
        options: [
          'It is a minor episode with no structural importance',
          'It reverses the power dynamics of their relationship and marks Pip\'s return to moral health, paralleling the caring relationship of Stage One',
          'It shows that Joe has become wealthier than Pip',
          'It introduces a new character into the novel',
        ],
        correct: 1,
        explanation: 'Joe\'s selfless nursing of Pip reverses the social dynamic — the "gentleman" is now dependent on the blacksmith. This structural parallel with Stage One, where Joe cared for the young Pip, marks Pip\'s moral recovery and return to authentic values.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Character Analysis
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-ge-m3',
    title: 'Character Analysis',
    duration: '55 min',
    content: `
<h2>Character Analysis in <em>Great Expectations</em></h2>

<p>Dickens creates characters who embody social types while also possessing individual complexity. For the IGCSE exam, focus on <strong>how Dickens constructs characters</strong> through language, imagery, narrative perspective, and contrast (<strong>AO2</strong>), and what they reveal about his themes (<strong>AO1</strong>).</p>

<h3>Pip</h3>
<p>Pip is both the novel's narrator and its most flawed character. Dickens makes the daring choice of having an adult Pip narrate his own moral failings, creating a <strong>double perspective</strong>: we experience events through the younger Pip's distorted perceptions while the older, wiser Pip provides ironic commentary.</p>

<p>Pip's central flaw is his <strong>susceptibility to shame</strong>. His encounter with Estella at Satis House transforms his self-image: <em>"I took the opportunity of being alone in the courtyard to look at my coarse hands and my common boots. My opinion of those accessories was not favourable. They had never troubled me before, but they troubled me now."</em> The shift from unselfconscious contentment to agonised self-awareness is the moment Pip begins to measure himself by external, class-based standards rather than by his own moral compass.</p>

<p>Pip's redemption is gradual and painful. It requires him to abandon his fantasies of gentility and recognise the genuine worth of those — Joe, Magwitch — whom he has despised or neglected. Dickens suggests that true gentility is defined by <strong>compassion, loyalty, and moral courage</strong>, not by wealth or manners.</p>

<div class="key-term"><strong>Key Term: Retrospective Narration</strong> — A narrative technique where an older, wiser version of the protagonist tells the story of their younger self. This creates dramatic irony, as the narrator can signal meanings and connections that the younger self did not understand at the time.</div>

<h3>Joe Gargery</h3>
<p>Joe is the novel's moral touchstone — the standard against which all other characters are measured. He is uneducated and socially awkward, but he possesses <strong>unwavering kindness, loyalty, and integrity</strong>. Dickens uses Joe to argue that true gentility has nothing to do with social class.</p>

<p>Joe's most powerful moments come when he is contrasted with the "gentlemen" around him. His visit to Pip in London — during which Pip is embarrassed by him — exposes the superficiality of Pip's acquired values. Joe's quiet dignity in the face of Pip's condescension makes Pip's snobbery painfully visible.</p>

<h3>Miss Havisham</h3>
<p>Miss Havisham is one of Dickens's most extraordinary creations — a gothic figure frozen in time, still wearing her decayed wedding dress decades after being jilted at the altar. She is both <strong>victim and perpetrator</strong>: betrayed by Compeyson, she has in turn twisted Estella into an instrument of revenge against all men.</p>

<p>Dickens uses Miss Havisham as a study in <strong>the destructive power of arrested development</strong>. By refusing to move beyond her moment of trauma, she has corrupted herself and everyone around her. Her late recognition of the damage she has caused — <em>"What have I done!"</em> — is one of the novel's most tragic moments.</p>

<h3>Estella</h3>
<p>Estella is Miss Havisham's weapon — <em>"raised to wreak revenge on all the male sex."</em> She is beautiful but emotionally frozen, trained to attract men and then destroy them. Dickens presents her as both a <strong>victim of Miss Havisham's manipulation</strong> and a character who must eventually find her own humanity.</p>

<p>The revelation that Estella is Magwitch's daughter is one of the novel's most powerful ironies: the woman Pip idolises as the pinnacle of gentility is the child of a convict, just as Pip's own gentility is funded by that same convict.</p>

<h3>Magwitch (Abel Magwitch / Provis)</h3>
<p>Magwitch's transformation from terrifying convict to devoted benefactor is one of the novel's most moving arcs. Dickens uses him to challenge the Victorian equation of criminality with moral depravity. Magwitch's generosity to Pip — <em>"I've made a gentleman on you!"</em> — is more genuine than any act of Miss Havisham's, despite being tainted by his own desire to create a social revenge.</p>

<h3>Wemmick</h3>
<p>Wemmick embodies Dickens's critique of how Victorian society <strong>compartmentalises morality</strong>. In Jaggers's office, he is cold and mechanical; at his miniature castle in Walworth, he is warm, generous, and eccentric. The phrase <em>"the office is one thing, and private life is another"</em> encapsulates the Victorian tendency to separate public and private ethics.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about characters, use the language of construction. Say "Dickens presents Magwitch as..." or "Dickens uses Joe to argue that..." rather than treating characters as real people. This demonstrates critical awareness and helps you focus on the writer's methods.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing characters without analysing how Dickens constructs them. Stating that "Pip is ashamed of Joe" is plot summary. Analysing how Dickens uses Pip's retrospective narration to expose the gap between his younger self's snobbery and his older self's regret is literary analysis.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-ge-m3-q1',
        question: 'How does Dickens\'s use of retrospective narration create dramatic irony in the novel?',
        options: [
          'The older Pip narrates events he has already understood, allowing him to signal meanings his younger self missed',
          'It eliminates any irony from the narrative',
          'It means the story is told in the present tense',
          'It means multiple characters share the narration',
        ],
        correct: 0,
        explanation: 'Retrospective narration allows the older, wiser Pip to tell the story of his younger, more foolish self. This creates dramatic irony because the narrator can signal connections and moral failings that the younger Pip did not recognise at the time.',
      },
      {
        id: 'igcse-classic-ge-m3-q2',
        question: 'Why is the revelation that Estella is Magwitch\'s daughter structurally and thematically significant?',
        options: [
          'It has no connection to the novel\'s themes',
          'It is a minor plot detail',
          'It ironically reveals that the woman Pip idolises as the pinnacle of gentility is a convict\'s daughter, demolishing the class distinctions Pip has accepted',
          'It proves that Estella is morally superior to all other characters',
        ],
        correct: 2,
        explanation: 'The revelation creates powerful irony: Estella, whom Pip worships as the embodiment of refined gentility, is the daughter of the convict whose money funds Pip\'s own gentlemanly status. This demolishes the artificial class distinctions that have driven Pip\'s aspirations.',
      },
      {
        id: 'igcse-classic-ge-m3-q3',
        question: 'What does Wemmick\'s dual personality reveal about Victorian society?',
        options: [
          'It shows that all Victorians had multiple personalities',
          'It critiques how Victorian society compartmentalised morality, separating public professional coldness from private warmth and generosity',
          'It is played purely for comic effect',
          'It shows that Wemmick is dishonest',
        ],
        correct: 1,
        explanation: 'Wemmick\'s split between his cold office persona and his warm domestic self at the "Castle" critiques the Victorian tendency to separate public from private morality. Dickens uses this duality to expose how institutional life could suppress genuine human compassion.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Themes & Ideas
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-ge-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>Themes and Ideas in <em>Great Expectations</em></h2>

<p>Dickens uses <em>Great Expectations</em> to mount a sustained critique of Victorian values, particularly the equation of wealth with worth. This module examines the novel's central themes and shows how to discuss them analytically in your exam responses.</p>

<h3>Class and Social Ambition</h3>
<p>This is the novel's dominant theme. Dickens explores how the <strong>pursuit of gentility can corrupt authentic human values</strong>. Pip's journey from forge to London is a journey from genuine worth to hollow pretension. At the forge, Pip is kind, loyal, and compassionate; as a "gentleman," he becomes snobbish, ungrateful, and morally blind.</p>

<p>Dickens does not simply invert the class hierarchy. He does not argue that all poor people are good and all rich people are bad. Instead, he argues that <strong>moral worth is independent of social class</strong>. Joe is morally superior to most of the novel's "gentlemen," but Herbert Pocket — genuinely wellborn — is also generous and kind. The novel's critique targets not wealth itself but the <strong>worship of wealth and status as measures of human value</strong>.</p>

<h3>Crime and Justice</h3>
<p>Dickens presents the criminal justice system as <strong>unjust and hypocritical</strong>. Magwitch is sentenced to transportation for crimes committed partly out of desperation, while Compeyson — a more calculating and dangerous criminal — receives a lighter sentence because he appears to be a gentleman. The system punishes poverty as much as it punishes crime.</p>

<p>The novel also blurs the boundary between criminality and respectability. Pip's gentlemanly lifestyle is funded by a convict; Jaggers, the most successful lawyer, works at the intersection of crime and law; Miss Havisham, seemingly respectable, has committed a moral crime by twisting Estella into an emotional weapon.</p>

<h3>Guilt and Conscience</h3>
<p>Guilt pervades the novel. Pip feels guilty for helping the convict, guilty for being ashamed of Joe, guilty for his ingratitude. This guilt is both <strong>paralysing and redemptive</strong>: it prevents Pip from fully enjoying his ill-gotten gentility, but it also keeps his moral compass alive, eventually driving him back to the values he has abandoned.</p>

<p>Dickens suggests that the capacity to feel guilt is itself a moral quality. Characters who feel no guilt — Compeyson, Drummle, the young Estella — are the most morally impoverished. Pip's persistent guilt, painful as it is, marks him as fundamentally capable of redemption.</p>

<h3>Loyalty and Betrayal</h3>
<p>The novel tests loyalty at every turn. Joe's loyalty to Pip is unconditional — he does not reproach Pip for his snobbery. Magwitch's loyalty to Pip is fierce and enduring. Pip's loyalty, by contrast, is tested and found wanting: he betrays Joe's love and abandons his roots. His journey toward redemption is a journey back to <strong>the loyalty he has violated</strong>.</p>

<h3>Appearance versus Reality</h3>
<p>Like <em>Pride and Prejudice</em>, <em>Great Expectations</em> is structured around the gap between how things appear and how they are. Miss Havisham appears to be Pip's benefactor but is not. Estella appears to be the pinnacle of gentility but is a convict's daughter. Magwitch appears to be a brute but is the most genuinely generous character. Dickens systematically dismantles surface appearances to reveal the <strong>moral reality beneath</strong>.</p>

<div class="key-term"><strong>Key Term: Social Critique</strong> — The use of literature to examine and challenge the values, institutions, and power structures of society. Dickens uses <em>Great Expectations</em> as a vehicle for social critique, targeting the Victorian class system, the criminal justice system, and the equation of wealth with moral worth.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing themes, always show how they connect to each other. Class anxiety fuels Pip's guilt; guilt enables his eventual redemption; redemption requires him to reject the class values that corrupted him. This interconnection demonstrates sophisticated thematic understanding.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Discussing themes in isolation. The strongest responses show how themes are interwoven — for example, how the theme of class intersects with the theme of crime (Magwitch as gentleman-maker) and the theme of appearance versus reality (the gap between social surface and moral substance).</div>
`,
    quiz: [
      {
        id: 'igcse-classic-ge-m4-q1',
        question: 'What is Dickens\'s central argument about class and social ambition in the novel?',
        options: [
          'All wealthy people are morally corrupt',
          'All poor people are morally superior',
          'Moral worth is independent of social class, and the worship of wealth as a measure of human value is corrupting',
          'Social ambition is always a positive quality',
        ],
        correct: 2,
        explanation: 'Dickens does not simply invert the class hierarchy. He argues that moral worth is independent of social status, and that the pursuit of gentility becomes destructive when it replaces genuine human values — compassion, loyalty, and integrity — with superficial markers of class.',
      },
      {
        id: 'igcse-classic-ge-m4-q2',
        question: 'How does Dickens present guilt as both paralysing and redemptive?',
        options: [
          'Guilt has no function in the novel',
          'Pip\'s guilt prevents him from enjoying his false gentility but also keeps his moral compass alive, eventually driving him back to authentic values',
          'Only minor characters experience guilt',
          'Guilt is presented as entirely negative throughout the novel',
        ],
        correct: 1,
        explanation: 'Pip\'s persistent guilt serves a dual function: it prevents him from fully embracing his snobbish lifestyle, acting as an uncomfortable reminder of his moral failings, but it also preserves his capacity for moral growth — ultimately driving his journey toward redemption.',
      },
      {
        id: 'igcse-classic-ge-m4-q3',
        question: 'How does the novel blur the boundary between criminality and respectability?',
        options: [
          'All characters are criminals',
          'Pip\'s gentlemanly life is funded by a convict, Jaggers works between crime and law, and Miss Havisham commits moral crimes while appearing respectable',
          'There is no connection between crime and respectability in the novel',
          'Only Magwitch is connected to crime',
        ],
        correct: 1,
        explanation: 'Dickens systematically blurs the line between criminal and respectable: Pip\'s gentility is funded by Magwitch, Jaggers inhabits both worlds, Compeyson\'s genteel appearance earns him lenience, and Miss Havisham\'s outward respectability masks her moral corruption. This challenges simplistic Victorian distinctions.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Language & Style
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-ge-m5',
    title: 'Language & Style',
    duration: '50 min',
    content: `
<h2>Language and Style in <em>Great Expectations</em></h2>

<p>Dickens's language is rich, varied, and highly crafted. For <strong>AO2</strong>, you must be able to analyse how he uses specific techniques — imagery, symbolism, dialogue, narrative voice — to create meaning and effect.</p>

<h3>First-Person Retrospective Narration</h3>
<p>The novel is narrated by the adult Pip looking back on his younger self. This creates a distinctive <strong>double voice</strong>: the naive, emotional perspective of the young Pip is filtered through the wiser, more ironic perspective of the older narrator. This technique allows Dickens to generate <strong>sympathy and critique simultaneously</strong> — we feel young Pip's emotions while recognising, through the narrator's tone, where those emotions are misguided.</p>

<p>For example, when Pip describes his shame at Joe's visit to London, the older narrator's tone conveys regret and self-condemnation even as he recreates the scene with vivid immediacy. This dual perspective is one of the novel's most powerful stylistic features.</p>

<h3>Gothic Elements</h3>
<p>Dickens draws on the <strong>Gothic tradition</strong> to create atmosphere and convey psychological states. Satis House is the novel's most sustained Gothic image:</p>
<ul>
  <li>The stopped clocks and decaying wedding feast symbolise <strong>time arrested</strong> — Miss Havisham's refusal to move beyond her trauma.</li>
  <li>The darkness, cobwebs, and decay create an atmosphere of <strong>moral corruption</strong> — the physical environment mirrors the psychological damage within.</li>
  <li>Miss Havisham herself — in her rotting wedding dress, surrounded by faded splendour — is a <strong>living ghost</strong>, embodying the destructive power of unresolved grief.</li>
</ul>

<h3>Imagery and Symbolism</h3>
<p>Dickens uses imagery with great precision:</p>
<ul>
  <li><strong>The marshes:</strong> Wild, flat, and misty, the marshes represent Pip's origins — humble but honest. The mists symbolise moral confusion; when they clear, moments of clarity follow.</li>
  <li><strong>The forge:</strong> Heat, fire, and honest labour. The forge symbolises authentic work and genuine human connection — everything Pip abandons and must eventually reclaim.</li>
  <li><strong>Chains and imprisonment:</strong> Literal chains (Magwitch's leg iron) and metaphorical ones (Pip's bondage to his expectations, Miss Havisham's self-imprisonment) run throughout the novel, connecting the themes of crime, guilt, and entrapment.</li>
  <li><strong>Hands:</strong> Pip's "coarse hands" become a symbol of class shame. Throughout the novel, hands indicate character: Joe's strong, honest hands; Estella's "pretty" but cold hands; Jaggers obsessively washing his hands to cleanse himself of moral contamination.</li>
</ul>

<div class="key-term"><strong>Key Term: Pathetic Fallacy</strong> — The attribution of human emotions to natural phenomena or inanimate objects. Dickens uses pathetic fallacy extensively — storms accompany moments of crisis, mists signal moral confusion, and the decay of Satis House mirrors Miss Havisham's psychological state.</div>

<h3>Dialogue and Dialect</h3>
<p>Dickens uses dialogue to individualise characters and signal social class. Joe's dialect — <em>"What larks!"</em> — marks him as uneducated but also conveys warmth and authenticity. Magwitch's rough speech contrasts with the polished but morally hollow language of characters like Compeyson. Estella's cold, precise diction reflects her emotional training by Miss Havisham.</p>

<h3>Humour and Satire</h3>
<p>Despite its serious themes, the novel contains passages of brilliant comedy. Characters like Pumblechook — sycophantic, self-important, and hypocritical — are satirical portraits that expose social pretension. Wemmick's miniature castle, complete with drawbridge and cannon, is simultaneously comic and touching — a tiny fortress of private humanity in a dehumanising world.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing Dickens's language, zoom in on individual words and images. For example, when Pip describes his hands as "coarse," analyse what that single adjective reveals about his internalised class shame, how it contrasts with the language he uses to describe Estella, and how it connects to the novel's wider symbolism of hands.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Only discussing plot events and neglecting Dickens's language. The exam rewards detailed analysis of how Dickens writes, not just what he writes about. Always include close analysis of specific words, images, and techniques.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-ge-m5-q1',
        question: 'How does Dickens use Satis House as a Gothic device?',
        options: [
          'It is a cheerful setting that contrasts with the dark themes',
          'Its stopped clocks, decay, and darkness symbolise arrested time and moral corruption, with Miss Havisham as a living ghost',
          'It is described in realistic, non-atmospheric language',
          'It functions solely as a love interest\'s home with no symbolic significance',
        ],
        correct: 1,
        explanation: 'Satis House is the novel\'s most sustained Gothic image. Its stopped clocks symbolise arrested time, its decay mirrors Miss Havisham\'s psychological damage, and her spectral presence in her rotting wedding dress embodies the destructive power of unresolved trauma.',
      },
      {
        id: 'igcse-classic-ge-m5-q2',
        question: 'What is the significance of the recurring hand imagery in the novel?',
        options: [
          'It is a coincidence with no thematic purpose',
          'Hands symbolise class identity and moral character — Pip\'s "coarse hands" represent class shame, while different characters\' hands reveal their moral nature',
          'Only Joe\'s hands are described in the novel',
          'Hand imagery is used exclusively for comic effect',
        ],
        correct: 1,
        explanation: 'Hands function as a recurring symbol throughout the novel. Pip\'s "coarse hands" embody his class shame; Joe\'s strong hands represent honest labour; Estella\'s cold hands reflect her emotional training; Jaggers\'s hand-washing suggests moral contamination. The motif connects class, guilt, and character.',
      },
      {
        id: 'igcse-classic-ge-m5-q3',
        question: 'How does the double voice of first-person retrospective narration function in the novel?',
        options: [
          'It means two characters share the narration',
          'The naive young Pip\'s perspective is filtered through the wiser older narrator, generating sympathy and critique simultaneously',
          'It eliminates any irony from the narrative',
          'It means the novel is written in the present tense',
        ],
        correct: 1,
        explanation: 'The retrospective narration creates a double voice: we experience events through the younger Pip\'s emotions while the older narrator\'s tone signals regret and self-awareness. This allows Dickens to make us sympathise with Pip while also recognising his moral failings.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Exam Practice & Model Response
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-ge-m6',
    title: 'Exam Practice & Model Response',
    duration: '55 min',
    content: `
<h2>Exam Practice for <em>Great Expectations</em></h2>

<p>This module applies your knowledge of <em>Great Expectations</em> to exam-style questions, demonstrating how to construct sophisticated analytical responses under timed conditions.</p>

<h3>Sample Question</h3>
<div class="text-extract"><strong>Question:</strong> How does Dickens present the theme of social class in <em>Great Expectations</em>?<br><br>You should consider:<br>• how different characters represent different attitudes to class<br>• how Dickens uses language and structure to explore class<br>• the significance of class in the novel as a whole</div>

<h3>Planning Your Response</h3>
<p>A strong plan for this question might include:</p>
<ol>
  <li><strong>Introduction:</strong> Thesis — Dickens presents social class as a destructive illusion, arguing that the pursuit of gentility corrodes authentic human values and that true worth is measured by character, not status.</li>
  <li><strong>Pip's class shame:</strong> Analyse the "coarse hands" passage — how Dickens uses imagery and the retrospective narrator's ironic tone to expose the internalisation of class prejudice.</li>
  <li><strong>Joe as moral counterpoint:</strong> Analyse how Dickens presents Joe's dialect and behaviour to argue that genuine gentility is defined by compassion rather than social polish.</li>
  <li><strong>The Magwitch revelation:</strong> Analyse the structural irony of a convict funding a gentleman — how Dickens uses this twist to demolish the class hierarchy.</li>
  <li><strong>Conclusion:</strong> Dickens uses the three-stage structure to argue that moral growth requires rejecting the worship of class and returning to the values of loyalty and compassion that Pip abandoned.</li>
</ol>

<h3>Model Response Extract</h3>
<div class="model-response">
<p>Dickens presents social class as a corrosive illusion that destroys authentic human connections and corrupts moral judgment. Through Pip's journey from the forge to London and back, he constructs a devastating critique of the Victorian equation of social status with human worth, arguing that true gentility is defined by compassion and integrity rather than wealth, manners, or birth.</p>

<p>The moment at which Pip's class consciousness is awakened is presented with painful precision. After his first visit to Satis House, Pip examines himself with new, hostile eyes: "I took the opportunity of being alone in the courtyard to look at my coarse hands and my common boots." The adjectives "coarse" and "common" — words that belong to the vocabulary of social judgment rather than personal experience — reveal that Pip has internalised Estella's contempt. Dickens's use of the retrospective narrator is crucial here: the older Pip recounts this moment with an ironic awareness that these "coarse" hands were the hands of a kind, honest boy, and that the gentlemanly hands he will acquire will be used far less worthily. The reader is thus invited to recognise what the younger Pip cannot: that his shame is not a natural response but a social construction imposed upon him.</p>

<p>Against Pip's class anxiety, Dickens positions Joe Gargery as a moral counterpoint whose worth is entirely independent of social status. Joe's dialect — "What larks, Pip!" — marks him as uneducated, yet Dickens consistently associates him with the novel's most profound moral qualities: selflessness, loyalty, and unconditional love. When Joe visits Pip in London and is met with condescension, Dickens uses the contrast between Joe's quiet dignity and Pip's awkward snobbery to expose the hollowness of Pip's acquired gentility. The scene is structured so that the reader's sympathy lies entirely with Joe, forcing us to recognise that the blacksmith possesses a natural grace that the "gentleman" conspicuously lacks.</p>
</div>

<h3>Examiner Feedback on Top Responses</h3>
<p>Examiners consistently reward responses that:</p>
<ul>
  <li><strong>Maintain a clear thesis:</strong> Every paragraph should advance a central argument, not just list points.</li>
  <li><strong>Analyse at word level:</strong> Zoom in on specific words — "coarse," "common," "gentleman" — and explain their significance.</li>
  <li><strong>Discuss structure:</strong> Show awareness of where events are placed and how the narrative arc creates meaning.</li>
  <li><strong>Integrate context smoothly:</strong> Weave contextual understanding into your analysis without interrupting the flow.</li>
  <li><strong>Use the language of construction:</strong> Write "Dickens presents" or "Dickens uses" rather than treating characters as real people.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest responses to questions about class in <em>Great Expectations</em> recognise that Dickens's critique is nuanced. He does not argue that poverty is noble or that wealth is always corrupting — he argues that using class as a measure of human worth is the fundamental error. Make sure your thesis reflects this complexity.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a general essay about class in Victorian England without closely analysing Dickens's text. Your response must be anchored in specific quotations and close analysis of Dickens's language, structure, and narrative technique.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-ge-m6-q1',
        question: 'Why is it important to use the "language of construction" when writing about characters?',
        options: [
          'It makes your essay longer',
          'Saying "Dickens presents" rather than treating characters as real people demonstrates critical awareness and keeps the focus on the writer\'s methods',
          'Examiners prefer informal language',
          'It is only necessary for poetry questions',
        ],
        correct: 1,
        explanation: 'Using the language of construction — "Dickens presents," "Dickens uses," "Dickens constructs" — demonstrates awareness that characters are created by a writer to serve thematic purposes. This keeps your focus on the writer\'s craft (AO2) rather than on plot retelling.',
      },
      {
        id: 'igcse-classic-ge-m6-q2',
        question: 'What makes the "coarse hands" passage effective for an essay on social class?',
        options: [
          'It is the longest passage in the novel',
          'It reveals Pip\'s internalisation of class prejudice through specific adjectives that belong to the vocabulary of social judgment',
          'It describes Joe\'s hands',
          'It is written in dialect',
        ],
        correct: 1,
        explanation: 'The "coarse hands" passage is rich for analysis because the adjectives "coarse" and "common" reveal Pip\'s internalisation of class-based judgment. These words belong to social evaluation, not personal experience, showing how external class prejudice has been absorbed into Pip\'s self-image.',
      },
      {
        id: 'igcse-classic-ge-m6-q3',
        question: 'How should context be integrated into a response about Great Expectations?',
        options: [
          'Write a separate introductory paragraph about Victorian society',
          'Avoid mentioning context entirely',
          'Weave contextual understanding into your literary analysis without interrupting the flow of your argument',
          'Only mention context in the conclusion',
        ],
        correct: 2,
        explanation: 'Context should be integrated smoothly into your analysis, not presented as a separate block of historical information. The best responses connect contextual details directly to Dickens\'s methods and themes — for instance, linking Magwitch\'s treatment by the justice system to Dickens\'s critique of class-based law.',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. The Scarlet Letter — Nathaniel Hawthorne
// ─────────────────────────────────────────────────────────────────────────────

const scarletLetterModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Context & Author Background
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-sl-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>Nathaniel Hawthorne and the World of <em>The Scarlet Letter</em></h2>

<p>Nathaniel Hawthorne (1804–1864) published <em>The Scarlet Letter</em> in 1850, but the novel is set two centuries earlier, in the Puritan Massachusetts Bay Colony of the 1640s. Understanding both the historical setting and Hawthorne's own complex relationship with his Puritan ancestors is essential for <strong>AO3</strong>.</p>

<h3>Hawthorne's Puritan Heritage</h3>
<p>Hawthorne was born in Salem, Massachusetts, into a family with deep roots in American Puritanism. His ancestor William Hathorne was a magistrate involved in the persecution of Quakers, and his great-great-grandfather John Hathorne was one of the judges in the Salem witch trials of 1692. Hawthorne was <strong>haunted by his family's history of intolerance and persecution</strong>, and he reportedly added the "w" to his surname to distance himself from this legacy.</p>

<p>This ancestral guilt pervades <em>The Scarlet Letter</em>. The novel is, in part, Hawthorne's attempt to <strong>reckon with the moral authoritarianism</strong> of his forebears — to examine how a community that prized righteousness could inflict such cruelty in its name.</p>

<div class="key-term"><strong>Key Term: Puritanism</strong> — A strict Protestant religious movement that emphasised the authority of the Bible, the sinfulness of human nature, and the importance of moral discipline. The Puritans who settled in New England sought to create a "godly" society, but their rigid moral codes often led to harsh punishment and social exclusion for those who transgressed.</div>

<h3>The Puritan Community</h3>
<p>The Puritan settlements of 17th-century Massachusetts were <strong>theocracies</strong> — communities governed by religious law. Church and state were inseparable; sin was not merely a spiritual matter but a civil offence. Adultery, the crime at the centre of <em>The Scarlet Letter</em>, was punishable by death in some colonies, and public shaming was a standard judicial tool.</p>

<p>The Puritans believed in <strong>predestination</strong> — the idea that God had already determined who would be saved and who would be damned. This belief created intense anxiety about one's spiritual state and a tendency to police not only behaviour but the inner lives of community members. The scarlet letter itself is a materialisation of this impulse: an attempt to make invisible sin permanently visible.</p>

<h3>Hawthorne's Ambivalence</h3>
<p>Hawthorne's attitude toward his Puritan ancestors is <strong>deeply ambivalent</strong>. He admires their seriousness and moral conviction but condemns their intolerance and cruelty. This ambivalence shapes the novel's moral complexity: Hester is both a sinner and a saint; the community is both righteous and tyrannical; Dimmesdale is both cowardly and sympathetically human.</p>

<h3>The Custom-House Preface</h3>
<p>The novel opens with "The Custom-House," a semi-autobiographical introduction in which Hawthorne describes finding the scarlet letter among old documents. This frame narrative establishes the novel as a <strong>recovered history</strong> — a story dug up from the past — and positions Hawthorne as a mediator between the Puritan world and the modern reader. It also introduces the themes of <strong>hidden sin and public scrutiny</strong> that dominate the novel.</p>

<h3>American Romanticism</h3>
<p>Hawthorne is classified as an <strong>American Romantic</strong>, though his work is darker and more psychologically complex than the label might suggest. He shares with other Romantics an interest in the individual's relationship with society, the power of nature, and the importance of emotion and imagination. However, his writing is also deeply influenced by <strong>allegory and symbolism</strong>, giving it a layered, multi-interpretive quality that distinguishes it from the realism of his contemporaries.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing the Puritan context, always connect it to Hawthorne's methods. For example: "Hawthorne uses the scaffold scenes as structural anchors to explore how Puritan public shaming functions as a mechanism of social control, revealing the community's desire to make invisible sin permanently visible." This integrates context with structural and thematic analysis.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing Puritanism at length without connecting it to Hawthorne's artistic choices. Context must serve your literary argument. Every contextual detail should lead to an observation about the text's language, structure, or themes.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-sl-m1-q1',
        question: 'How does Hawthorne\'s ancestral guilt shape The Scarlet Letter?',
        options: [
          'It has no influence on the novel',
          'His ancestors\' involvement in religious persecution drove him to examine how a community prizing righteousness could inflict cruelty in its name',
          'He writes the novel to celebrate his Puritan ancestors',
          'It only affects the Custom-House preface, not the main narrative',
        ],
        correct: 1,
        explanation: 'Hawthorne was haunted by his family\'s participation in Puritan persecution, including the Salem witch trials. The Scarlet Letter is partly his reckoning with this legacy, examining how moral authoritarianism can produce cruelty and hypocrisy.',
      },
      {
        id: 'igcse-classic-sl-m1-q2',
        question: 'Why is the Puritan belief in predestination significant to the novel?',
        options: [
          'It created anxiety about spiritual status and a tendency to police inner lives, explaining the community\'s impulse to make sin publicly visible',
          'It is mentioned only in passing and has no thematic importance',
          'It made the Puritans tolerant of individual sin',
          'It only affected wealthy members of the community',
        ],
        correct: 0,
        explanation: 'The doctrine of predestination created intense anxiety about spiritual status, driving the Puritans to monitor both behaviour and inner lives obsessively. The scarlet letter itself — making invisible sin visible — is a direct expression of this impulse to expose and control.',
      },
      {
        id: 'igcse-classic-sl-m1-q3',
        question: 'What is Hawthorne\'s attitude toward his Puritan ancestors?',
        options: [
          'He entirely admires them',
          'He is completely critical of them',
          'He is deeply ambivalent — admiring their moral seriousness but condemning their intolerance and cruelty',
          'He ignores them in his writing',
        ],
        correct: 2,
        explanation: 'Hawthorne\'s ambivalence toward Puritanism is central to the novel\'s moral complexity. He respects the Puritans\' seriousness of purpose but condemns their rigid intolerance, and this dual perspective creates the nuanced moral world of the novel.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Plot & Structure
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-sl-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>Plot and Structure in <em>The Scarlet Letter</em></h2>

<p>Hawthorne structures <em>The Scarlet Letter</em> with remarkable precision. The novel's architecture — particularly the three scaffold scenes, the interplay of public and private spaces, and the symbolic use of setting — creates a framework of meaning that you must be able to analyse for <strong>AO2</strong>.</p>

<h3>The Three Scaffold Scenes</h3>
<p>The scaffold — the raised platform on which public punishments are carried out — is the novel's most important structural device. Three scaffold scenes anchor the narrative:</p>

<h4>First Scaffold Scene (Chapter 2): Public Shame</h4>
<p>Hester stands on the scaffold holding baby Pearl, forced to display her scarlet letter to the entire community. Dimmesdale stands above her among the town's leaders, urging her to reveal her lover's identity. This scene establishes the novel's central conflict: the tension between <strong>public exposure and private concealment</strong>. Hester bears her shame openly while Dimmesdale hides his.</p>

<h4>Second Scaffold Scene (Chapter 12): Midnight Confession</h4>
<p>Dimmesdale ascends the scaffold at midnight, in darkness, joined by Hester and Pearl. He screams into the night but is heard by no one who matters. This scene is a <strong>failed confession</strong> — Dimmesdale performs the ritual of exposure without the substance of it. The darkness protects him from genuine accountability. A meteor streaks across the sky, forming what appears to be the letter "A" — a symbol that different characters interpret differently, demonstrating how meaning is constructed by the observer.</p>

<h4>Third Scaffold Scene (Chapter 23): Public Confession</h4>
<p>Dimmesdale finally confesses publicly, revealing (in some interpretations) a scarlet letter branded on his own chest. He dies in Hester's arms. This scene resolves the tension between concealment and exposure: <strong>genuine confession, even at the cost of death, is presented as liberating</strong>.</p>

<div class="key-term"><strong>Key Term: Structural Symmetry</strong> — The deliberate use of parallel or repeated structural elements to create meaning. The three scaffold scenes create a structural symmetry — opening, middle, and close — that charts Dimmesdale's movement from concealment to partial exposure to full confession.</div>

<h3>Public versus Private Space</h3>
<p>Hawthorne structures the novel around a tension between <strong>public and private</strong> spaces. The scaffold, the marketplace, and the church are public spaces where the community exercises moral authority. The forest, Hester's cottage, and the interior of Dimmesdale's study are private spaces where characters can express their true selves.</p>

<p>The forest scene (Chapters 16–18), where Hester and Dimmesdale plan their escape, is the novel's most important private moment. Hester removes her scarlet letter and lets down her hair — a symbolic liberation — but this freedom is temporary. When they return to the community, the constraints of public morality reassert themselves.</p>

<h3>Chronological Structure and Compression</h3>
<p>The novel covers approximately seven years but compresses time unevenly. Long periods pass between key scenes, while individual moments — the scaffold scenes, the forest meeting, the final procession — are rendered in <strong>intense, slow-motion detail</strong>. This compression creates a sense of psychological intensity, focusing the reader's attention on the moments of greatest moral significance.</p>

<h3>The Role of the Custom-House Preface</h3>
<p>The Custom-House preface frames the novel as a <strong>discovered document</strong>, adding a layer of narrative distance. This framing device creates the impression that the story is being excavated from history, lending it an archaeological quality that reinforces its themes of buried sin and hidden truth.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The three scaffold scenes are an excellent structural feature to discuss in any exam response about <em>The Scarlet Letter</em>. They demonstrate the novel's structural architecture, chart Dimmesdale's moral journey, and embody the central tension between public and private identity. Discussing them shows sophisticated structural awareness.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Summarising the plot without analysing its structural significance. Do not simply describe what happens at the scaffold — explain why Hawthorne returns to the same location three times, how each scene develops the themes differently, and what the structural symmetry reveals about the novel's moral argument.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-sl-m2-q1',
        question: 'What is the structural significance of the three scaffold scenes?',
        options: [
          'They are incidental settings with no structural importance',
          'They create a structural symmetry that charts Dimmesdale\'s journey from concealment through failed confession to genuine public exposure',
          'They only involve Hester',
          'They are all set at the same time of day',
        ],
        correct: 1,
        explanation: 'The three scaffold scenes create a deliberate structural architecture: the first establishes concealment versus exposure, the second shows Dimmesdale\'s failed midnight confession, and the third resolves the tension through genuine public confession. This symmetry charts his moral journey.',
      },
      {
        id: 'igcse-classic-sl-m2-q2',
        question: 'How does Hawthorne use the contrast between public and private spaces?',
        options: [
          'Public spaces like the scaffold represent community moral authority, while private spaces like the forest allow characters to express their true selves',
          'There is no distinction between public and private spaces in the novel',
          'All important scenes occur in public spaces',
          'Private spaces are presented as morally superior in every case',
        ],
        correct: 0,
        explanation: 'Hawthorne structures the novel around a tension between public spaces (scaffold, marketplace, church) where community authority operates, and private spaces (forest, cottage) where authentic feeling can be expressed. The forest scene, where Hester removes her letter, is the key private moment.',
      },
      {
        id: 'igcse-classic-sl-m2-q3',
        question: 'Why does Hawthorne compress time unevenly in the novel?',
        options: [
          'He forgot to include certain time periods',
          'Compressing long periods while rendering key moments in slow-motion detail focuses attention on moments of greatest moral significance',
          'The novel is meant to be read very quickly',
          'All events are given equal narrative time',
        ],
        correct: 1,
        explanation: 'Hawthorne skips over long periods while rendering scaffold scenes, the forest meeting, and the final procession in intense, slow-motion detail. This uneven compression focuses the reader\'s attention on the moments of greatest psychological and moral significance.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Character Analysis
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-sl-m3',
    title: 'Character Analysis',
    duration: '55 min',
    content: `
<h2>Character Analysis in <em>The Scarlet Letter</em></h2>

<p>Hawthorne's characters operate on both <strong>realistic and allegorical</strong> levels. They are psychologically complex individuals, but they also embody abstract ideas — sin, hypocrisy, revenge, innocence. For the IGCSE exam, you must analyse both dimensions, focusing on how Hawthorne constructs characters through symbolism, imagery, and narrative technique (<strong>AO2</strong>).</p>

<h3>Hester Prynne</h3>
<p>Hester is one of the most compelling female protagonists in American literature. Condemned to wear the scarlet "A" for adultery, she responds with <strong>quiet dignity, resilience, and creative transformation</strong>. Rather than accepting the letter as a mark of shame, Hester embroiders it beautifully — transforming a punishment into a work of art and, implicitly, asserting her identity against the community that seeks to define her.</p>

<p>Hester's strength is expressed through action rather than speech. She supports herself and Pearl through her needlework, cares for the sick and poor, and gradually transforms the letter's meaning in the community's eyes. By the novel's end, some interpret the "A" as standing for "Able" rather than "Adulteress" — a testament to Hester's quiet moral revolution.</p>

<p>However, Hester is not presented as faultless. Her decision to conceal Chillingworth's identity from Dimmesdale enables his persecution. And her passionate nature — symbolised by the luxuriant hair she must hide beneath her cap — is presented ambiguously: is it a source of strength or a dangerous quality that led to her transgression?</p>

<div class="key-term"><strong>Key Term: Ambiguity</strong> — Hawthorne deliberately resists providing definitive moral judgments. Hester can be read as a heroic rebel against unjust authority, a repentant sinner, or a morally complex figure who defies simple categorisation. This ambiguity is a key feature of the novel's literary art.</div>

<h3>Arthur Dimmesdale</h3>
<p>Dimmesdale is the novel's most psychologically tormented character. As the community's beloved minister, he is expected to embody moral perfection — yet he carries the secret of his adultery. This contradiction between <strong>public saintliness and private sin</strong> produces unbearable guilt that manifests physically: he grows pale, places his hand over his heart, and (in some interpretations) develops a self-inflicted scarlet letter on his chest.</p>

<p>Dimmesdale is both sympathetic and culpable. His suffering is genuine, and Hawthorne conveys it with compassion. Yet his failure to confess publicly — while Hester bears the full weight of shame alone — reveals a <strong>fundamental moral cowardice</strong>. He chooses his reputation over truth, his public image over his partner. His final scaffold confession is both redemptive and tragic: it liberates him spiritually but kills him physically.</p>

<h3>Roger Chillingworth</h3>
<p>Chillingworth is the novel's most explicitly allegorical character. Hester's elderly husband, he arrives in Boston to find her on the scaffold and devotes himself to discovering and tormenting her lover. Hawthorne traces his transformation from a <strong>cold but rational scholar into a figure of demonic malice</strong>.</p>

<p>Chillingworth represents the <strong>sin of revenge</strong> — which Hawthorne presents as more destructive than the original sin of adultery. While Hester and Dimmesdale's sin was born of passion and human weakness, Chillingworth's revenge is deliberate, calculated, and sustained. His physical transformation — he becomes increasingly hunched and twisted — externalises his moral corruption. Hawthorne names him "Chillingworth" to signal his cold, life-denying nature.</p>

<h3>Pearl</h3>
<p>Pearl is simultaneously a realistic child and a <strong>living symbol</strong>. She is the product of Hester and Dimmesdale's sin — the scarlet letter made flesh. She is wild, perceptive, and uncanny, often seeming to possess knowledge beyond her years.</p>

<p>Pearl functions as a <strong>moral mirror</strong>. She repeatedly draws attention to the scarlet letter, refuses to let Hester forget her transgression, and demands that Dimmesdale acknowledge her publicly. In the forest scene, she insists Hester replace the letter she has removed. Pearl will not allow concealment or denial — she demands truth.</p>

<h3>The Community</h3>
<p>The Puritan community functions almost as a character in its own right. It is <strong>both judge and hypocrite</strong> — condemning Hester's visible sin while harbouring its own hidden transgressions. Hawthorne uses the community to explore how societies use public punishment not merely to deter sin but to reinforce their own sense of righteousness.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about Hawthorne's characters, address both their realistic and symbolic dimensions. For example: "Hawthorne constructs Pearl as both a vividly realised child — wild, perceptive, and demanding — and a living emblem of her parents' transgression. Her refusal to let Hester remove the scarlet letter in the forest scene demonstrates her symbolic function as the embodiment of truth that cannot be denied."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating characters as purely allegorical. While symbolism is important, the best responses recognise that Hawthorne's characters are psychologically complex as well as symbolically resonant. Discuss both dimensions for the strongest marks.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-sl-m3-q1',
        question: 'How does Hester transform the scarlet letter from a mark of shame?',
        options: [
          'She destroys it immediately',
          'She embroiders it beautifully, transforming punishment into art and asserting her identity; eventually some read it as "Able" rather than "Adulteress"',
          'She hides it under her clothing',
          'She gives it to Pearl',
        ],
        correct: 1,
        explanation: 'Hester\'s beautiful embroidery of the letter transforms a mark of shame into a work of art, implicitly asserting her creative identity against the community\'s attempt to define her. Over time, her charitable deeds lead some to reinterpret the "A" as "Able" — a quiet moral revolution.',
      },
      {
        id: 'igcse-classic-sl-m3-q2',
        question: 'Why does Hawthorne present Chillingworth\'s revenge as worse than the original sin of adultery?',
        options: [
          'Because revenge is illegal in Puritan law',
          'Because while adultery arose from passion and human weakness, revenge is deliberate, calculated, and sustained — a cold violation of another human being',
          'Because Chillingworth is physically stronger than the other characters',
          'Hawthorne does not make any such comparison',
        ],
        correct: 1,
        explanation: 'Hawthorne distinguishes between sins of passion (Hester and Dimmesdale\'s adultery) and sins of cold calculation (Chillingworth\'s revenge). The deliberate, sustained nature of Chillingworth\'s torment — and his physical transformation into something monstrous — marks revenge as the novel\'s most destructive sin.',
      },
      {
        id: 'igcse-classic-sl-m3-q3',
        question: 'How does Pearl function as a "moral mirror" in the novel?',
        options: [
          'She reflects the physical appearance of other characters',
          'She repeatedly draws attention to the scarlet letter and demands truth, refusing to allow concealment or denial',
          'She has no symbolic function in the novel',
          'She mirrors Chillingworth\'s desire for revenge',
        ],
        correct: 1,
        explanation: 'Pearl acts as a moral mirror by persistently drawing attention to the scarlet letter, demanding that Dimmesdale acknowledge her publicly, and refusing to let Hester remove the letter in the forest. She is the living embodiment of truth that cannot be suppressed or denied.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Themes & Ideas
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-sl-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>Themes and Ideas in <em>The Scarlet Letter</em></h2>

<p>Hawthorne explores his themes with a complexity and ambiguity that makes <em>The Scarlet Letter</em> one of the richest texts for literary analysis. This module examines the major themes and provides analytical frameworks for discussing them in your exam responses.</p>

<h3>Sin and Guilt</h3>
<p>Sin is the novel's central subject, but Hawthorne is more interested in <strong>the effects of sin</strong> than in the sin itself. The act of adultery occurs before the novel begins; what Hawthorne explores is how different characters respond to their transgressions.</p>
<ul>
  <li><strong>Hester</strong> bears her sin publicly and, through suffering and service, achieves a kind of redemption. Public shame is painful but ultimately liberating.</li>
  <li><strong>Dimmesdale</strong> conceals his sin, and the secret guilt destroys him from within. Hidden sin is more corrosive than exposed sin.</li>
  <li><strong>Chillingworth</strong> commits the sin of revenge, which Hawthorne presents as the most destructive of all because it is deliberate and sustained.</li>
</ul>
<p>Hawthorne suggests that <strong>concealed sin is more damaging than open transgression</strong>. Hester, who bears her shame publicly, grows stronger; Dimmesdale, who hides his, is consumed. The novel argues that truth — however painful — is necessary for moral health.</p>

<div class="context-box"><strong>Grade 9 Insight:</strong> The novel's treatment of sin challenges Puritan theology itself. The Puritans believed sin could be expiated through sufficient suffering and moral discipline. Hawthorne complicates this: he shows that public confession and community involvement in redemption matter more than private guilt. Hester's redemption comes through her actions and the community's evolving perception of her — not through internal torment. This is a radical argument for 1850.</div>

<div class="quotation-bank"><strong>Key Quotations on Sin and Guilt:</strong>
<p><em>"The scarlet letter had not done its office."</em> — Explains how Hester's public shame, rather than destroying her, becomes the vehicle for her transformation.</p>
<p><em>"She grew ashamed of the shame upon her bosom."</em> — Internal psychological shift: Hester moves from accepting the letter's meaning to questioning it.</p>
<p><em>"Keep, therefore, the secret, as thou valuest thy life!"</em> — Dimmesdale's plea to Hester shows how he has internalised the logic of secrecy as self-preservation.</p>
<p><em>"Thou and I never knew what we might be to one another."</em> — Suggests that concealment prevents genuine human connection and growth.</p>
</div>

<div class="context-box"><strong>Grade 9 Insight:</strong> The novel's treatment of sin challenges Puritan theology itself. The Puritans believed sin could be expiated through sufficient suffering and moral discipline. Hawthorne complicates this: he shows that public confession and community involvement in redemption matter more than private guilt. Hester's redemption comes through her actions and the community's evolving perception of her — not through internal torment. This is a radical argument for 1850.</div>

<h3>Hypocrisy and Public Morality</h3>
<p>The Puritan community prides itself on moral purity, yet its most respected minister is secretly an adulterer. This central irony exposes the <strong>hypocrisy at the heart of theocratic governance</strong>. The community punishes visible sin while remaining blind to — or complicit in — hidden transgression.</p>

<p>Hawthorne extends this critique to the nature of public morality itself. The scaffold and the scarlet letter are instruments of <strong>social control</strong>, designed not merely to punish the sinner but to reinforce the community's collective sense of righteousness. By shaming Hester, the community reassures itself of its own virtue — even as its most admired leader conceals the same sin.</p>

<div class="character-analysis"><strong>Hypocrisy Tracking Across Characters:</strong>
<ul>
<li><strong>The Puritan Community:</strong> Condemns Hester's visible sin while remaining blind to or complicit in hidden transgression. Their self-righteousness is built on her public shame.</li>
<li><strong>Dimmesdale:</strong> The supreme hypocrite — counsels Hester to name her lover while concealing that he is the lover himself. His public sermons grow more passionate and eloquent as his private guilt deepens, a masterful irony by Hawthorne.</li>
<li><strong>Chillingworth:</strong> Pretends to be Dimmesdale's friend and physician while actively poisoning him. His external civility masks demonic intent.</li>
<li><strong>Hester:</strong> Initially appears complicit in the system (wears the letter, performs repentance) but gradually reveals herself as the novel's moral centre through quiet resistance and genuine service.</li>
</ul>
</div>

<div class="quotation-bank"><strong>Hypocrisy and Public Morality — Key Quotations:</strong>
<p><em>"He began to feel, indeed, that the burden of his own hypocrisy was almost unendurable."</em> — Direct statement of Dimmesdale's psychological torment from living a double life.</p>
<p><em>"Hester would fain have been at peace."</em> — The community's demand for Hester's public shame while Dimmesdale escapes accountability encapsulates the hypocrisy.</p>
<p><em>"Do I feel affection for this man who is so kind to me? Or do I lie about it to myself?"</em> — Dimmesdale's confusion about his own feelings reveals how hypocrisy corrupts authentic emotion.</p>
</div>

<h3>Identity and Self-Definition</h3>
<p>The scarlet letter is an attempt by the community to <strong>fix Hester's identity</strong> — to define her permanently as "Adulteress." Hester's response — embroidering the letter, living with quiet dignity, serving the community — constitutes a <strong>sustained act of self-definition</strong> against externally imposed shame.</p>

<p>The novel asks whether identity is determined by society or by the individual. Hester's journey suggests that, while social forces are powerful, the individual retains the capacity to <strong>redefine the meaning of imposed labels</strong>. The letter's shifting meaning — from "Adulteress" to "Able" — demonstrates the power of sustained moral action to transform public perception.</p>

<div class="context-box"><strong>Grade 9 Insight — Self-Definition and Agency:</strong> Hawthorne presents Hester's transformation as a pioneering example of individual agency resisting social determinism. She takes a mark of shame and through artistry and moral action converts it into something beautiful and meaningful. This was a radical idea in 1850, predating modern feminist theory. Hester essentially argues (through her actions rather than words) that a person is not defined by a single past act but by the totality of their moral choices.</div>

<div class="quotation-bank"><strong>Identity and Self-Definition — Key Quotations:</strong>
<p><em>"Hester Prynne had cloven the secret of her estrangement in the scarlet letter."</em> — The letter becomes the means through which Hester understands and ultimately transcends her isolation.</p>
<p><em>"Let the black flower blossom as it may."</em> — Hester's metaphorical acceptance of her situation while maintaining hope for growth — black flowers can still bloom.</p>
<p><em>"She became the general symbol of society's shame."</em> — But then she transcends this by proving her worth through action, not words or appearance.</p>
</div>

<h3>Nature versus Society</h3>
<p>Hawthorne contrasts the <strong>oppressive, judgmental space of the Puritan settlement</strong> with the <strong>free, amoral space of the forest</strong>. In the forest, Hester removes her letter, lets down her hair, and speaks freely with Dimmesdale. Nature offers a temporary escape from social constraint — but it is only temporary. The characters must return to society and face its demands.</p>

<p>This contrast reflects a Romantic tension between individual freedom and social obligation. Hawthorne does not simply endorse the natural over the social; he recognises that both realms have moral implications and that human beings must navigate between them.</p>

<div class="context-box"><strong>Grade 9 Insight — Hawthorne and Romanticism:</strong> While Hawthorne is classified as an American Romantic, his use of nature/wilderness differs from Wordsworth or Emerson. He does not present nature as inherently redemptive or morally superior. The forest offers freedom but is also described as "dark," "wild," and potentially dangerous. When Hester removes the letter and lets down her hair in the forest, her liberation is incomplete — she must eventually return and re-embrace the letter. Hawthorne suggests that full human development requires integrating natural freedom with social responsibility, not choosing one over the other.</div>

<div class="character-analysis"><strong>Forest vs. Settlement — Spatial Analysis:</strong>
<ul>
<li><strong>The Settlement (Public Space):</strong> Scaffold, marketplace, church — places of judgment, conformity, surveillance. Hester is visible, exposed, defined by community standards.</li>
<li><strong>Hester's Cottage (Liminal Space):</strong> At the edge of town, neither fully inside nor outside. She is accessible to the community but partially removed from it.</li>
<li><strong>The Forest (Private/Natural Space):</strong> Where Hester removes the letter and speaks freely. Yet Hawthorne shows this is temporary — the forest is also described as wild, uncivilized, even demonic.</li>
<li><strong>Dimmesdale's Study (Interior Private Space):</strong> Where he torments himself alone. Privacy here leads to self-destruction rather than liberation.</li>
</ul>
</div>

<h3>Isolation and Community</h3>
<p>All four main characters experience forms of isolation. Hester is physically and socially ostracised; Dimmesdale is isolated by his secret; Chillingworth isolates himself through obsessive revenge; Pearl is isolated by her illegitimacy and strangeness. Hawthorne explores how <strong>moral transgressions sever individuals from community</strong> and what is required for reintegration.</p>

<div class="character-analysis"><strong>Isolation Across Characters — Theme Tracking:</strong>
<ul>
<li><strong>Hester Prynne:</strong> Public isolation yet private agency. She is physically isolated on the edge of society but paradoxically becomes the community's conscience. Her isolation is punishment but also empowerment.</li>
<li><strong>Arthur Dimmesdale:</strong> Invisible isolation. He is at the centre of the community but psychologically alone with his secret. His isolation is internal, self-imposed through concealment.</li>
<li><strong>Roger Chillingworth:</strong> Chosen isolation. He deliberately isolates himself through obsessive revenge, becoming increasingly monstrous as he withdraws from human connection.</li>
<li><strong>Pearl:</strong> Natural isolation — born of transgression, she is inherently separated from normal community belonging. Yet she also serves as a bridge, demanding connection between her parents.</li>
</ul>
</div>

<div class="quotation-bank"><strong>Isolation and Community — Key Quotations:</strong>
<p><em>"In all her intercourse with society, however, there was nothing that made her feel as if she belonged to it."</em> — Hester's physical presence masking her psychological separation from community values.</p>
<p><em>"He became aware that he had perchance been deprived of the spiritual company of a man of genuine religious faith."</em> — Dimmesdale's realisation that his isolation has prevented true spiritual communion.</p>
<p><em>"Pearl was a born outcast of the infantile world."</em> — She exists in a different order of being, unable to conform to normal childhood patterns.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing themes in <em>The Scarlet Letter</em>, always acknowledge Hawthorne's ambiguity. He does not provide simple moral answers — instead, he presents multiple perspectives and leaves interpretation to the reader. The best exam responses embrace this complexity rather than trying to reduce the novel to a simple moral message.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Claiming that Hawthorne simply condemns Puritanism. His critique is more nuanced: he recognises the value of moral seriousness while condemning the intolerance and hypocrisy that can accompany it. Show this nuance in your response.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-sl-m4-q1',
        question: 'What does Hawthorne suggest about the relative destructiveness of concealed versus public sin?',
        options: [
          'Public sin is always more destructive',
          'Concealed sin is more corrosive — Hester grows stronger through public shame while Dimmesdale is consumed by hidden guilt',
          'All sin is equally destructive regardless of whether it is concealed',
          'Hawthorne does not address this distinction',
        ],
        correct: 1,
        explanation: 'Hawthorne demonstrates that concealed sin is more destructive than public transgression. Hester, who bears her shame openly, grows in strength and moral stature. Dimmesdale, who hides his sin, deteriorates physically and psychologically. Truth, however painful, is necessary for moral health.',
      },
      {
        id: 'igcse-classic-sl-m4-q2',
        question: 'How does Hawthorne use the contrast between settlement and forest?',
        options: [
          'The forest is always a place of danger and evil',
          'There is no significant contrast between the two settings',
          'The oppressive settlement represents social constraint while the forest offers temporary freedom, reflecting a Romantic tension between individual liberty and social obligation',
          'The settlement is always presented as morally superior',
        ],
        correct: 2,
        explanation: 'Hawthorne contrasts the judgmental Puritan settlement with the free, amoral forest where Hester can remove her letter and speak honestly. However, he does not simply endorse nature over society — characters must return to the community, and both realms have moral implications.',
      },
      {
        id: 'igcse-classic-sl-m4-q3',
        question: 'What does the shifting meaning of the scarlet letter reveal about identity?',
        options: [
          'Identity is permanently fixed by society and cannot be changed',
          'The letter\'s transformation from "Adulteress" to "Able" shows that sustained moral action can redefine externally imposed labels',
          'The letter never changes its meaning',
          'Only religious authority can determine identity',
        ],
        correct: 1,
        explanation: 'The scarlet letter\'s shifting meaning — from a mark of shame to a sign of ability — demonstrates Hawthorne\'s argument that while society attempts to fix identity through labels, the individual retains the power to redefine those labels through sustained moral action.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Language & Style
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-sl-m5',
    title: 'Language & Style',
    duration: '50 min',
    content: `
<h2>Language and Style in <em>The Scarlet Letter</em></h2>

<p>Hawthorne's prose is dense, symbolic, and deliberately ambiguous. For <strong>AO2</strong>, you must analyse how his distinctive style — his use of symbolism, allegory, narrative perspective, and imagery — creates the novel's layered meanings.</p>

<h3>Symbolism</h3>
<p>Symbolism is the dominant feature of Hawthorne's style. The novel's central symbol — the scarlet letter "A" — is perhaps the most analysed symbol in American literature. Its meaning is <strong>unstable and multivalent</strong>:</p>
<ul>
  <li><strong>"Adulteress"</strong> — the community's intended meaning, a mark of shame.</li>
  <li><strong>"Able"</strong> — the meaning it acquires through Hester's good works and resilience.</li>
  <li><strong>"Angel"</strong> — the meaning some assign when the letter appears in the sky during the midnight scaffold scene.</li>
  <li><strong>"Arthur"</strong> — a possible reference to Dimmesdale, connecting the letter to his hidden identity.</li>
</ul>
<p>The letter's shifting meaning demonstrates Hawthorne's argument that <strong>symbols do not have fixed meanings</strong> — they are interpreted differently by different observers, and their significance changes over time. This instability is itself a key part of the novel's message about the difficulty of moral judgment.</p>

<h3>Light and Darkness Imagery</h3>
<p>Hawthorne uses light and darkness as a pervasive symbolic framework:</p>
<ul>
  <li><strong>Sunlight</strong> — associated with truth, innocence, and natural freedom. In the forest, sunlight plays on Pearl but seems to avoid Hester until she removes the letter. This suggests that truth and natural innocence recoil from the concealment that the letter represents.</li>
  <li><strong>Darkness and shadow</strong> — associated with concealment, sin, and the interior world. Dimmesdale's study, the midnight scaffold scene, and Chillingworth's investigations all take place in darkness or shadow.</li>
  <li><strong>The meteor</strong> — a burst of light in the midnight sky that different characters interpret differently, demonstrating how meaning is projected onto ambiguous phenomena.</li>
</ul>

<div class="context-box"><strong>Grade 9 Insight — Light/Darkness Symbolism:</strong> Hawthorne's use of light and darkness operates on multiple levels. On a realist level, the midnight scaffold scene is literally dark. But symbolically, darkness represents the private, interior, hidden realm of sin and guilt, while light represents the public, exposed, accountable realm. The meteor that appears during the midnight scene creates what students often miss: a moment of ambiguous illumination — darkness broken by light but only temporarily, and interpreted differently by each observer. This matches Hawthorne's broader technique of using potentially fixed symbols (light = good, dark = evil) but complicating them through ambiguity.</div>

<div class="quotation-bank"><strong>Light and Darkness — Key Quotations:</strong>
<p><em>"The Puritan had darkened the world. She had clomb from that pit into a brighter day."</em> — Suggests movement from internal darkness to the light of public acknowledgment and self-understanding.</p>
<p><em>"The meteor displayed the same red dullness that it always wears."</em> — The ambiguous light that different characters interpret as a sign, showing how meaning depends on the observer's perspective.</p>
<p><em>"She felt or fancied that the scarlet letter had endowed her with a new sense."</em> — The letter that marks shame becomes paradoxically the source of illumination and insight into the human heart.</p>
</div>

<div class="key-term"><strong>Key Term: Allegory</strong> — A narrative in which characters, events, and settings represent abstract ideas or moral qualities. <em>The Scarlet Letter</em> operates partially as an allegory — Hester can represent individual freedom, Dimmesdale the anguish of hidden guilt, Chillingworth the destructiveness of revenge — but Hawthorne's characters are too psychologically complex to be reduced to simple allegorical figures.</div>

<h3>Narrative Voice and Ambiguity</h3>
<p>Hawthorne's narrator is <strong>omniscient but deliberately evasive</strong>. Rather than providing definitive interpretations, the narrator frequently offers multiple possible readings of events, using phrases like <em>"it was whispered"</em> or <em>"some affirmed"</em>. This technique creates <strong>interpretive ambiguity</strong>, forcing the reader to make their own moral judgments rather than accepting the narrator's authority.</p>

<p>The most famous example of this ambiguity is the question of whether Dimmesdale has a scarlet letter on his chest. The narrator reports various accounts — some say they saw a letter, others say they saw nothing — and refuses to adjudicate between them. This refusal to provide certainty is a deliberate artistic choice that mirrors the novel's broader argument about the <strong>impossibility of fixed moral judgment</strong>.</p>

<div class="context-box"><strong>Grade 9 Insight — Narrative Unreliability:</strong> Hawthorne's narrator is omniscient (able to enter any character's mind) yet paradoxically evasive. This unusual combination creates an unreliable narrator — not because they lie, but because they refuse to assert authority over ambiguous phenomena. Consider: the narrator can tell us Dimmesdale's internal thoughts but cannot or will not definitively say what appears on his chest. This is a sophisticated narrative technique that makes the reader feel the same uncertainty the characters do. It's not modern unreliable narration, but it serves a similar purpose: to immerse the reader in the epistemological problems the novel explores.</div>

<div class="quotation-bank"><strong>Narrative Ambiguity — Key Quotations:</strong>
<p><em>"It was so minutely done as to have required several months of labour and exquisite skill. The needle was a well-known fact of those times."</em> — The narrator includes details that seem to be proving narrative truth, yet leaves the ultimate truth ambiguous.</p>
<p><em>"Whether or no there was a scarcely visible flush upon his cheek, I cannot determine."</em> — Direct admission of narrative limitation, emphasising that some things resist certain knowledge.</p>
</div>

<h3>The Scaffold as Recurring Motif</h3>
<p>The scaffold functions not just as a structural device but as a <strong>linguistic and symbolic motif</strong>. Each time it appears, Hawthorne loads it with new layers of meaning. In the first scene, it represents public punishment; in the second, failed private confession; in the third, genuine redemption. The scaffold's recurring presence creates a sense of <strong>moral gravity</strong> — a place where truth is demanded and deception exposed.</p>

<div class="context-box"><strong>Grade 9 Insight — The Scaffold as Moral Testing Ground:</strong> The scaffold appears three times at key moments: Hester's public shaming, Dimmesdale's failed private confession, and the final true confession. Hawthorne uses this recurring location to chart the novel's moral argument: each appearance tests whether characters will choose concealment or confession. The scaffold is never neutral — it is always a site of potential redemption or damnation. By returning to it three times, Hawthorne emphasises that moral truth-telling is not a single act but an ongoing struggle. The scaffold becomes not just a physical location but a metaphor for the public sphere where private sin must ultimately be acknowledged.</div>

<div class="quotation-bank"><strong>The Scaffold — Key Quotations:</strong>
<p><em>"The scaffold of the pillory had served its purpose; but it was no longer necessary that Hester should stand upon it."</em> — Initial assumption of closure, yet the scaffold will reappear twice more, showing that moral issues cannot be permanently resolved.</p>
<p><em>"He was exhausted with the struggle which that exercise had cost him; and when the rumour of his illness reached the ears of the people, they seemed to regard it as a visitation from Providence."</em> — The community misinterprets Dimmesdale's internal guilt as spiritual dedication, showing the gap between internal and external morality.</p>
</div>

<h3>Names as Symbolism</h3>
<p>Hawthorne uses character names symbolically:</p>
<ul>
  <li><strong>Hester Prynne:</strong> "Hester" may evoke Esther, the biblical queen who saved her people through courage. "Prynne" recalls William Prynne, a Puritan who was branded for his beliefs.</li>
  <li><strong>Dimmesdale:</strong> The "dim" in his name suggests obscurity and concealment — appropriate for a character defined by hidden sin.</li>
  <li><strong>Chillingworth:</strong> His name contains "chilling" — suggesting coldness, lack of warmth, and emotional frigidity.</li>
  <li><strong>Pearl:</strong> In the Bible, a pearl of great price is something precious obtained at great cost — Pearl is the living consequence of Hester's transgression.</li>
</ul>

<div class="context-box"><strong>Grade 9 Insight — Onomastics and Character:</strong> Hawthorne's names function as compressed character summaries that readers decode as the novel unfolds. "Dimmesdale" is remarkable because it combines a place name (dale/valley) with "dim" (obscure), suggesting a character who exists in shadows and hollow spaces. "Chillingworth" similarly combines archaic "worth" (estate/value) with "chilling," so he is a man whose worth comes from coldness and distance. These names are not just poetic — they function as early markers of psychological truth that the narrative will explore. Pearl's name has similar multiplicity: a pearl is created through irritation in an oyster, suggesting she is born from the irritation/sin at the novel's centre. Modern readers often miss these linguistic layers.</div>

<div class="quotation-bank"><strong>Names and Symbolic Meaning — Analysis Examples:</strong>
<p><em>"Arthur Dimmesdale" — Arthur: bearing of a noble name in darkness; Dimmesdale: light that is dim, partial, obscured.</em></p>
<p><em>"Roger Chillingworth" — Roger: suggests authority/rule; Chillingworth: the worth derived from chilling, freezing, coldness.</em></p>
<p><em>"She had clomb from that pit into a brighter day" — Hester's movement from darkness into light is reflected in how her name moves from mark of shame to marker of "Able."</em></p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing Hawthorne's symbolism, always discuss how the symbols create ambiguity rather than certainty. Saying "the scarlet letter symbolises adultery" is a starting point; saying "Hawthorne uses the letter's shifting meaning to argue that moral symbols are unstable and that interpretation depends on the observer's perspective" is sophisticated analysis.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Assigning a single, fixed meaning to Hawthorne's symbols. The whole point of his symbolic technique is that meanings are multiple and shifting. Always discuss the ambiguity and multiple interpretations of key symbols.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-sl-m5-q1',
        question: 'Why is the scarlet letter\'s instability of meaning significant?',
        options: [
          'It is a flaw in Hawthorne\'s writing',
          'It demonstrates his argument that symbols do not have fixed meanings and that moral judgment is inherently complex',
          'It shows that the Puritans were confused about its purpose',
          'It only has one clear meaning throughout the novel',
        ],
        correct: 1,
        explanation: 'The letter\'s shifting meaning — from "Adulteress" to "Able" to possibly "Angel" — is central to Hawthorne\'s argument that symbols are interpreted differently by different observers and that moral judgment is complex and unstable. This instability is a deliberate artistic choice, not a flaw.',
      },
      {
        id: 'igcse-classic-sl-m5-q2',
        question: 'How does Hawthorne\'s narrative technique create ambiguity?',
        options: [
          'The narrator provides clear, definitive moral judgments throughout',
          'The narrator frequently offers multiple possible interpretations using phrases like "some affirmed" and refuses to adjudicate, forcing readers to make their own judgments',
          'The novel is narrated by Hester in the first person',
          'There is no ambiguity in the novel\'s narration',
        ],
        correct: 1,
        explanation: 'Hawthorne\'s narrator is deliberately evasive, offering multiple possible readings of events rather than providing definitive interpretations. This technique creates interpretive ambiguity that mirrors the novel\'s argument about the impossibility of fixed moral judgment.',
      },
      {
        id: 'igcse-classic-sl-m5-q3',
        question: 'How does Hawthorne use character names symbolically?',
        options: [
          'Character names are chosen randomly with no symbolic intent',
          'Names like "Dimmesdale" (suggesting obscurity), "Chillingworth" (suggesting coldness), and "Pearl" (something precious obtained at great cost) reinforce characterisation through symbolism',
          'Only Pearl\'s name has symbolic significance',
          'The names are historically accurate and have no symbolic function',
        ],
        correct: 1,
        explanation: 'Hawthorne deliberately chooses names that reinforce characterisation: Dimmesdale\'s "dim" suggests concealment; Chillingworth\'s "chilling" suggests coldness and emotional frigidity; Pearl is the precious thing obtained at great cost. These symbolic names add layers of meaning to the characters.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Exam Practice & Model Response
  // ──────────────────────────────────────────────
  {
    id: 'igcse-classic-sl-m6',
    title: 'Exam Practice & Model Response',
    duration: '55 min',
    content: `
<h2>Exam Practice for <em>The Scarlet Letter</em></h2>

<p>This module applies your knowledge of <em>The Scarlet Letter</em> to exam-style questions, demonstrating how to construct responses that achieve the highest marks by combining close textual analysis with thematic sophistication.</p>

<h3>Understanding the Question Type</h3>
<p>IGCSE Literature questions typically ask "How does [writer] present [theme/character/idea]?" The word "how" is crucial — it directs you to analyse methods (language, structure, form) rather than simply describe content. Strong responses weave together three elements: <strong>what is presented</strong>, <strong>how it is presented</strong>, and <strong>why it matters thematically</strong>.</p>

<div class="context-box"><strong>Grade 9 Question-Handling Strategy:</strong> Before writing, spend 2 minutes identifying three things: (1) What is the question asking about? (2) Which characters/scenes best illustrate this? (3) What Hawthorne techniques can you analyse (symbolism, narrative voice, imagery, structure)? For a question on guilt, you'd identify: characters with different guilt experiences (Hester, Dimmesdale, Chillingworth), key scenes (scaffold scenes, forest scene), and techniques (physical imagery for Dimmesdale, light/dark symbolism for Hester, the narrator's ambiguity). This preparation ensures every paragraph advances your argument rather than simply summarising plot.</div>

<h3>Sample Question 1: Effects of Guilt</h3>
<div class="text-extract"><strong>Question:</strong> How does Hawthorne present the effects of guilt in <em>The Scarlet Letter</em>?<br><br>You should consider:<br>• how different characters experience guilt differently<br>• how Hawthorne uses language and symbolism to present guilt<br>• the significance of guilt in the novel as a whole</div>

<h3>Planning Your Response</h3>
<p>A strong plan for this question might include:</p>
<ol>
  <li><strong>Introduction:</strong> Thesis — Hawthorne presents guilt as a force that either destroys or redeems depending on whether it is concealed or confronted, arguing that honest acknowledgment of transgression is necessary for moral health.</li>
  <li><strong>Hester's public guilt:</strong> The scarlet letter as externalised guilt; how bearing shame openly enables growth. Analyse the imagery of the letter and its transformation.</li>
  <li><strong>Dimmesdale's hidden guilt:</strong> Physical deterioration as internalised guilt made visible; the hand over the heart as a gestural symbol. Analyse how concealed guilt is more destructive than public shame.</li>
  <li><strong>Chillingworth's guiltless revenge:</strong> The absence of guilt as its own form of moral corruption. Analyse his physical transformation as a symbol of what happens when conscience is suppressed entirely.</li>
  <li><strong>Conclusion:</strong> The three scaffold scenes as a structural argument about guilt — moving from imposed shame, through failed confession, to genuine liberating acknowledgment.</li>
</ol>

<h3>Model Response Extract</h3>
<div class="model-response">
<p>Hawthorne presents guilt as a paradoxically constructive force: when confronted honestly, it becomes the foundation for moral growth; when concealed, it becomes a corrosive agent that destroys from within. Through the contrasting fates of Hester and Dimmesdale, he argues that the way a society and an individual respond to transgression determines whether guilt becomes redemptive or fatal.</p>

<p>Hester's guilt is made material in the scarlet letter — an external symbol that the Puritan community intends as a permanent mark of shame. Yet Hawthorne subverts this intention through his description of the letter itself: it is "so fantastically embroidered and illuminated upon her bosom" that it transforms from a badge of punishment into an assertion of creative identity. The verb "illuminated" is particularly significant, suggesting not shame but radiance — as though the letter, rather than diminishing Hester, has paradoxically elevated her. Hawthorne uses this transformation to argue that guilt, when borne openly and with dignity, can become a source of strength rather than destruction.</p>

<p>By contrast, Dimmesdale's concealed guilt manifests as physical self-destruction. Hawthorne constructs a powerful pattern of bodily imagery: the minister grows pale, emaciated, and weak, clutching his hand to his chest as though pressing on a hidden wound. The repeated gesture — placing "his hand over his heart" — functions as a gestural symbol, drawing the reader's attention to the very secret Dimmesdale is desperate to hide. Hawthorne's technique here is deeply ironic: the minister's attempt to conceal his guilt actually advertises it, suggesting that hidden sin inevitably seeks expression, even through the body of the sinner who tries to suppress it.</p>

<p>Finally, Chillingworth presents an inverse case: guilt without acknowledgment. Rather than suffering from his own sin, Chillingworth transforms guilt into a project of revenge, becoming increasingly demonic as he divorces himself from human sympathy. The novel's final revelation — "He has been eaten by demons," the narrator informs us — suggests that the complete suppression of guilt and conscience leads not to escape but to spiritual annihilation. Through these three cases, Hawthorne argues that guilt is inescapable: whether one bears it openly (Hester), hides it (Dimmesdale), or suppresses it entirely (Chillingworth), it shapes one's destiny. The difference lies in whether one responds with redemptive acknowledgment or destructive denial.</p>
</div>

<div class="character-analysis"><strong>Guilt Response Framework — Application to Other Questions:</strong>
<ul>
<li>If asked about character development: trace how guilt changes each character across the novel</li>
<li>If asked about relationships: analyse how shared guilt binds characters while hidden guilt isolates them</li>
<li>If asked about symbolism: discuss how the scarlet letter, the meteor, and other symbols represent different characters' relationships to guilt</li>
<li>If asked about the ending: consider whether the conclusion suggests redemption through confession is possible</li>
</ul>
</div>

<h3>Sample Question 2: The Scarlet Letter as Symbol</h3>
<div class="text-extract"><strong>Question:</strong> How does the scarlet letter function as a symbol in <em>The Scarlet Letter</em>? In your response you should consider: how the letter's meaning changes throughout the novel; how different characters interpret it; what this shifting meaning reveals about the novel's themes.</div>

<h3>Planning Question 2</h3>
<ol>
  <li><strong>Introduction:</strong> Thesis — The scarlet letter is not a fixed symbol but an unstable one whose meaning shifts based on observer and context, reflecting Hawthorne's argument that moral judgment is subjective and that individuals can resist imposed meanings.</li>
  <li><strong>Initial meaning (community/Hester's internalization):</strong> "Adulteress" — examine how the letter functions as social control through shame.</li>
  <li><strong>Hester's resistance/transformation:</strong> The letter becomes transformed through her embroidery and charitable works; meaning shifts to "Able."</li>
  <li><strong>The meteor interpretation:</strong> Different observers see different meanings (Angel, A for Arthur) — demonstrates how symbols are interpreted through the observer's lens.</li>
  <li><strong>Connection to broader themes:</strong> The letter's instability mirrors the novel's broader argument about the impossibility of fixed moral judgment.</li>
</ol>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Analyse Hawthorne's ambiguity:</strong> Do not reduce the novel to simple moral lessons. Acknowledge that Hawthorne deliberately refuses easy answers.</li>
  <li><strong>Discuss symbolism in depth:</strong> The scarlet letter, light and darkness, the scaffold, the forest — all offer rich material for close analysis.</li>
  <li><strong>Use structural awareness:</strong> The three scaffold scenes, the contrast between public and private spaces, and the novel's compression of time are all excellent structural features to discuss.</li>
  <li><strong>Integrate character names:</strong> Discussing the symbolic significance of names demonstrates sophisticated awareness of Hawthorne's craft.</li>
  <li><strong>Connect to context without bolting it on:</strong> Weave Puritan theology and social practices into your analysis of character and theme.</li>
</ul>

<div class="context-box"><strong>Grade 9 Exam Technique — Word Count and Time Management:</strong>
<p>In a timed exam, you typically have 45-50 minutes to write a full response on a single question. Allocate time strategically: 5 minutes planning, 35-40 minutes writing, 5 minutes proofreading. Each paragraph should take approximately 7-8 minutes. Aim for 3-4 substantial body paragraphs, which allows you to explore ideas in depth rather than rushing through multiple shallow points. For <em>The Scarlet Letter</em>, three strong paragraphs on guilt (Hester's public guilt enabling growth, Dimmesdale's hidden guilt destroying him, Chillingworth's suppressed guilt leading to damnation) are stronger than five rushed paragraphs on multiple themes.</p>

<p><strong>Quotation Strategy:</strong> Embed 1-2 quotations per paragraph, but keep them brief (5-10 words ideally). A short, powerful quotation followed by detailed analysis is superior to long block quotations. Analyse individual word choices — explain why "illuminated" matters more than "decorated" would have been.</p>

<p><strong>Topic Sentence Excellence:</strong> Begin each paragraph with a topic sentence that directly addresses the question. Example: "Hawthorne presents Dimmesdale's guilt as a force of internal destruction, using bodily imagery to show how concealed sin manifests as physical deterioration." This sentence establishes what you're arguing about, which character you're discussing, and what techniques you'll analyse.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> <em>The Scarlet Letter</em> rewards responses that engage with its complexity. Examiners are looking for candidates who can navigate Hawthorne's moral ambiguity rather than imposing simplistic judgments. Show that you understand the novel resists easy interpretation — this is a sign of genuine literary maturity.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the novel as a straightforward tale of a wronged woman. While Hester is sympathetic, Hawthorne's moral vision is more complex than simple victim-and-villain dynamics. The best responses recognise that all characters are morally complicated and that the novel asks questions rather than providing answers.</div>
`,
    quiz: [
      {
        id: 'igcse-classic-sl-m6-q1',
        question: 'Why is it important to acknowledge Hawthorne\'s moral ambiguity in exam responses?',
        options: [
          'It is not important — examiners prefer simple moral conclusions',
          'Hawthorne deliberately refuses easy answers, and engaging with this complexity demonstrates genuine literary maturity and analytical sophistication',
          'Ambiguity is a flaw that candidates should criticise',
          'Only higher-level students need to discuss ambiguity',
        ],
        correct: 1,
        explanation: 'Hawthorne\'s deliberate moral ambiguity is a defining feature of the novel. Engaging with this complexity — showing that the novel resists simple interpretation — demonstrates the kind of literary maturity and analytical sophistication that examiners reward with the highest marks.',
      },
      {
        id: 'igcse-classic-sl-m6-q2',
        question: 'How does the model response use word-level analysis to discuss Hester\'s guilt?',
        options: [
          'It does not include any word-level analysis',
          'It analyses the word "illuminated" in the description of the scarlet letter, arguing that it suggests radiance rather than shame',
          'It focuses only on plot summary',
          'It analyses only dialogue, not narrative description',
        ],
        correct: 1,
        explanation: 'The model response zooms in on the word "illuminated" to argue that Hawthorne subverts the community\'s intention — the letter that should diminish Hester actually suggests radiance and elevation. This kind of word-level analysis is precisely what examiners reward.',
      },
      {
        id: 'igcse-classic-sl-m6-q3',
        question: 'What structural feature does the model plan use to frame its argument about guilt?',
        options: [
          'The chronological order of events',
          'The three scaffold scenes, charting movement from imposed shame through failed confession to genuine liberating acknowledgment',
          'The chapter numbers',
          'The number of characters in each scene',
        ],
        correct: 1,
        explanation: 'The plan uses the three scaffold scenes as a structural framework, showing how they chart a progression from externally imposed shame (first scaffold) through failed private confession (midnight scaffold) to genuine public acknowledgment (final scaffold). This demonstrates strong structural awareness.',
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Course Definitions
// ═══════════════════════════════════════════════════════════════════════════════

const prideAndPrejudiceCourse: CourseData = {
  id: 'igcse-lit-classic-pride-and-prejudice',
  title: 'IGCSE Literature — Pride and Prejudice',
  subtitle: 'Jane Austen — Pride and Prejudice (Edexcel 4ET1)',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  color: '#8b5cf6',
  description:
    'A comprehensive study of Jane Austen\'s Pride and Prejudice for Edexcel IGCSE English Literature (4ET1). Covers context and author background, plot and structure, character analysis, themes and ideas, language and style, and exam practice with model responses — equipping you to write confident, analytical responses on this classic novel.',
  moduleList: prideAndPrejudiceModules,
};

const greatExpectationsCourse: CourseData = {
  id: 'igcse-lit-classic-great-expectations',
  title: 'IGCSE Literature — Great Expectations',
  subtitle: 'Charles Dickens — Great Expectations (Edexcel 4ET1)',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  color: '#7c3aed',
  description:
    'A comprehensive study of Charles Dickens\'s Great Expectations for Edexcel IGCSE English Literature (4ET1). Covers context and author background, plot and structure, character analysis, themes and ideas, language and style, and exam practice with model responses — equipping you to write confident, analytical responses on this classic novel.',
  moduleList: greatExpectationsModules,
};

const scarletLetterCourse: CourseData = {
  id: 'igcse-lit-classic-the-scarlet-letter',
  title: 'IGCSE Literature — The Scarlet Letter',
  subtitle: 'Nathaniel Hawthorne — The Scarlet Letter (Edexcel 4ET1)',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  color: '#6d28d9',
  description:
    'A comprehensive study of Nathaniel Hawthorne\'s The Scarlet Letter for Edexcel IGCSE English Literature (4ET1). Covers context and author background, plot and structure, character analysis, themes and ideas, language and style, and exam practice with model responses — equipping you to write confident, analytical responses on this classic novel.',
  moduleList: scarletLetterModules,
};

export const igcseClassicsCourses: CourseData[] = [
  prideAndPrejudiceCourse,
  greatExpectationsCourse,
  scarletLetterCourse,
];
