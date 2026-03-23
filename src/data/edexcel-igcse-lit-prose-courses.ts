import type { CourseData, CourseModule, CourseQuiz } from './courses';

// ═══════════════════════════════════════════════════════════════════════════════
// Edexcel IGCSE Literature — Prose Texts (Pearson 4ET1)
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// 1. To Kill a Mockingbird — Harper Lee
// ─────────────────────────────────────────────────────────────────────────────

const tkamModules: CourseModule[] = [
  {
    id: 'tkam-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>To Kill a Mockingbird — Context &amp; Author Background</h2>

<p><em>To Kill a Mockingbird</em> was published in <strong>1960</strong> by <strong>Harper Lee</strong> (1926–2016). Set in the fictional town of <strong>Maycomb, Alabama</strong> during the <strong>1930s</strong>, the novel explores racial injustice, moral growth and the loss of innocence through the eyes of a young girl, Scout Finch. It won the <strong>Pulitzer Prize for Fiction in 1961</strong> and has become one of the most widely read American novels of the twentieth century.</p>

<div class="key-term"><strong>Key Term: Bildungsroman</strong> — A coming-of-age story that follows the moral and psychological growth of its protagonist from youth to maturity. <em>To Kill a Mockingbird</em> is a bildungsroman: Scout's understanding of justice, empathy and prejudice deepens as the novel progresses.</div>

<h3>Harper Lee — Life &amp; Influences</h3>

<p>Nelle Harper Lee grew up in <strong>Monroeville, Alabama</strong> — a small Southern town that served as the direct model for Maycomb. Her father, <strong>Amasa Coleman Lee</strong>, was a lawyer who once defended two Black men accused of murder, an experience that clearly influenced the character of Atticus Finch. Lee's childhood friend, <strong>Truman Capote</strong>, became the inspiration for the character of Dill Harris.</p>

<p>Lee studied law at the University of Alabama but left before completing her degree to pursue writing in New York. She wrote <em>To Kill a Mockingbird</em> over several years with the support of friends who provided her with a year's wages so she could write full-time.</p>

<h3>Historical Context: The Jim Crow South</h3>

<p>The novel is set during the <strong>Great Depression</strong> of the 1930s in the <strong>Deep South</strong> of the United States, a region defined by its rigid system of <strong>racial segregation</strong>. Key contextual elements include:</p>

<ul>
  <li><strong>Jim Crow Laws:</strong> A system of state and local laws enacted after Reconstruction (1877 onwards) that enforced racial segregation in all public facilities — schools, transport, restaurants, drinking fountains — and effectively disenfranchised Black citizens through literacy tests, poll taxes and other barriers to voting.</li>
  <li><strong>Lynching and racial violence:</strong> Between 1877 and 1950, more than 4,000 Black Americans were lynched in the South. The threat of extrajudicial violence was a constant reality that reinforced white supremacy and terrorised Black communities.</li>
  <li><strong>The Scottsboro Boys (1931):</strong> Nine Black teenagers were falsely accused of assaulting two white women on a train in Alabama. Despite minimal evidence, all-white juries convicted them. The case became a national scandal and is widely considered a direct inspiration for Tom Robinson's trial in the novel.</li>
  <li><strong>The Great Depression:</strong> The economic collapse of the 1930s deepened poverty throughout the South. Maycomb's inhabitants — the Cunninghams, the Ewells — reflect different strata of this impoverished society.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing context for AO3, always connect it to a specific moment in the text. For example, link the Scottsboro case to Tom Robinson's trial, showing how Lee uses fiction to critique real historical injustice.</div>

<h3>Publication Context: The Civil Rights Movement</h3>

<p>Although set in the 1930s, the novel was published in <strong>1960</strong> — at the height of the <strong>American Civil Rights Movement</strong>. Key events surrounding publication include:</p>

<ul>
  <li><strong>Brown v. Board of Education (1954):</strong> The Supreme Court ruling that declared school segregation unconstitutional.</li>
  <li><strong>The Montgomery Bus Boycott (1955–56):</strong> Sparked by Rosa Parks's refusal to give up her seat, this boycott brought Martin Luther King Jr. to national prominence.</li>
  <li><strong>Little Rock Nine (1957):</strong> Nine Black students were escorted by federal troops into a previously all-white high school in Arkansas.</li>
</ul>

<p>Lee's novel intervened powerfully in this national conversation. By depicting the injustice of the 1930s through the innocent eyes of a child, she invited white readers to confront the moral failures of their society.</p>

<h3>Literary Context</h3>

<p>The novel belongs to the tradition of <strong>Southern Gothic literature</strong>, which uses grotesque characters, decayed settings and dark themes to explore the social tensions of the American South. Writers in this tradition include William Faulkner, Flannery O'Connor and Carson McCullers. The Radley house, Boo Radley's isolation, and the atmosphere of secrecy and fear in Maycomb all draw on Southern Gothic conventions.</p>

<div class="key-term"><strong>Key Term: Southern Gothic</strong> — A literary genre that uses elements of horror, the grotesque, and the macabre to explore social issues in the American South, particularly racial tension, poverty, and moral decay. The Radley house and Boo Radley's mysterious existence are classic Southern Gothic elements.</div>
`,
    quiz: [
      {
        id: 'tkam-m1-q1',
        question: 'In what decade is To Kill a Mockingbird set?',
        options: ['1920s', '1930s', '1940s', '1950s'],
        correct: 1,
        explanation: 'The novel is set in the 1930s during the Great Depression, though it was published in 1960 during the Civil Rights Movement. This dual context is important for AO3.',
      },
      {
        id: 'tkam-m1-q2',
        question: 'Which real-life legal case is widely considered to have inspired Tom Robinson\'s trial?',
        options: ['The Emmett Till case', 'The Scottsboro Boys case', 'The Dred Scott case', 'The Brown v. Board of Education case'],
        correct: 1,
        explanation: 'The Scottsboro Boys case (1931), in which nine Black teenagers were falsely accused and convicted by all-white juries in Alabama, is widely seen as a direct inspiration for the novel.',
      },
      {
        id: 'tkam-m1-q3',
        question: 'What literary genre does To Kill a Mockingbird draw upon in its depiction of the Radley house and Boo Radley?',
        options: ['Realism', 'Romanticism', 'Southern Gothic', 'Naturalism'],
        correct: 2,
        explanation: 'The novel draws on the Southern Gothic tradition, which uses grotesque characters, decayed settings and dark themes to explore social tensions in the American South.',
      },
    ],
  },
  {
    id: 'tkam-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>To Kill a Mockingbird — Plot &amp; Structure</h2>

<p>The novel is divided into <strong>two parts</strong> across <strong>31 chapters</strong>. Part One (Chapters 1–11) focuses on the children's fascination with Boo Radley and their everyday life in Maycomb. Part Two (Chapters 12–31) centres on Tom Robinson's trial and its aftermath. This two-part structure mirrors Scout's journey from childhood innocence to a more mature understanding of injustice.</p>

<h3>Part One — Innocence &amp; Maycomb Life (Chapters 1–11)</h3>

<p>The novel opens with Scout as the adult narrator looking back on events that led to her brother Jem breaking his arm. This <strong>retrospective first-person narration</strong> creates a dual perspective: the child experiencing events and the adult reflecting on their significance.</p>

<ul>
  <li><strong>Chapters 1–3:</strong> Introduction to Maycomb, the Finch family, and the Radley mystery. Scout starts school and learns early lessons about social class through encounters with Walter Cunningham and Burris Ewell.</li>
  <li><strong>Chapters 4–8:</strong> The children's games about Boo Radley escalate. Mysterious gifts appear in the knothole of the Radley oak tree. Miss Maudie's house burns down, and Boo places a blanket on Scout's shoulders — foreshadowing his later protective role.</li>
  <li><strong>Chapters 9–11:</strong> Atticus agrees to defend Tom Robinson, and Scout faces hostility from classmates and relatives. The children confront Mrs Dubose's racism, and Atticus teaches Jem about true courage — "it's when you know you're licked before you begin but you begin anyway."</li>
</ul>

<h3>Part Two — Trial &amp; Loss of Innocence (Chapters 12–31)</h3>

<ul>
  <li><strong>Chapters 12–16:</strong> Calpurnia takes the children to her Black church. Aunt Alexandra arrives to impose social conventions. The trial begins, and the tension in Maycomb escalates.</li>
  <li><strong>Chapters 17–21:</strong> The trial itself. Atticus methodically dismantles the Ewells' case, proving that Tom could not have committed the assault. Despite this, the all-white jury convicts Tom. This is the novel's <strong>climactic moment of injustice</strong>.</li>
  <li><strong>Chapters 22–25:</strong> The aftermath of the trial. Tom Robinson is shot and killed trying to escape prison. Bob Ewell spits in Atticus's face and vows revenge.</li>
  <li><strong>Chapters 26–31:</strong> Scout's growing maturity. Bob Ewell attacks Scout and Jem on Halloween night. Boo Radley saves them by killing Ewell. Scout finally meets Boo, and the novel ends with her standing on the Radley porch, seeing the world from his perspective.</li>
</ul>

<div class="key-term"><strong>Key Term: Circular Structure</strong> — The novel begins and ends with references to Jem's broken arm, creating a circular narrative frame. This structure emphasises reflection and the way that understanding deepens over time.</div>

<h3>Structural Techniques</h3>

<p>Lee uses several important structural choices:</p>

<ul>
  <li><strong>Dual narrative:</strong> The Boo Radley plot and the Tom Robinson plot run in parallel. Both involve misunderstood outsiders who are judged by Maycomb's prejudices. The structural parallels invite the reader to connect racial prejudice with other forms of social exclusion.</li>
  <li><strong>Foreshadowing:</strong> The gifts in the knothole, the mad dog incident, and Mrs Dubose's camellias all foreshadow later events and themes — Boo's goodness, Atticus's moral courage, and the possibility of growth even in hostile environments.</li>
  <li><strong>Episodic structure:</strong> Part One is structured as a series of episodes from Scout's childhood. These seemingly standalone vignettes accumulate thematic weight, each one teaching Scout (and the reader) something about Maycomb's social order.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing structure for AO2, explain <em>why</em> Lee organises the novel this way. The shift from Part One's childhood innocence to Part Two's courtroom drama mirrors Scout's loss of innocence — a structural choice that reinforces the novel's central theme.</div>
`,
    quiz: [
      {
        id: 'tkam-m2-q1',
        question: 'How is the novel structurally divided?',
        options: ['Three acts', 'Two parts', 'Four seasons', 'Five sections'],
        correct: 1,
        explanation: 'The novel is divided into two parts: Part One focuses on childhood innocence and the Boo Radley subplot, while Part Two centres on Tom Robinson\'s trial and its aftermath.',
      },
      {
        id: 'tkam-m2-q2',
        question: 'What structural technique does Lee use by beginning and ending the novel with references to Jem\'s broken arm?',
        options: ['Flashforward', 'Circular structure', 'In medias res', 'Dramatic irony'],
        correct: 1,
        explanation: 'The novel uses a circular structure, framing the entire narrative within the retrospective account of how Jem broke his arm, which emphasises reflection and deepening understanding.',
      },
      {
        id: 'tkam-m2-q3',
        question: 'What is the purpose of the dual plotline involving both Boo Radley and Tom Robinson?',
        options: [
          'To create suspense through mystery and crime genres',
          'To draw parallels between misunderstood outsiders judged by prejudice',
          'To show that Maycomb is a dangerous place to live',
          'To contrast the experiences of children and adults',
        ],
        correct: 1,
        explanation: 'Both plots involve outsiders misjudged by society. The structural parallel invites readers to see connections between racial prejudice and other forms of social exclusion.',
      },
    ],
  },
  {
    id: 'tkam-m3',
    title: 'Character Analysis',
    duration: '50 min',
    content: `
<h2>To Kill a Mockingbird — Character Analysis</h2>

<h3>Scout Finch (Jean Louise Finch)</h3>
<p>Scout is the novel's <strong>narrator and protagonist</strong>. At the start, she is six years old — curious, hot-tempered, and fiercely independent. Her tomboyish nature puts her at odds with Maycomb's expectations for girls, particularly those enforced by Aunt Alexandra. Through the dual narrative voice, we see events through both a child's confusion and an adult's understanding.</p>

<p>Scout's growth is the backbone of the novel. She begins by solving problems with her fists and gradually learns to solve them with empathy. Her father's instruction — <strong>"You never really understand a person until you consider things from his point of view... until you climb into his skin and walk around in it"</strong> — becomes her guiding principle, fulfilled when she stands on Boo's porch in the final chapter.</p>

<div class="key-term"><strong>Key Quotation:</strong> "Atticus was right. One time he said you never really understand a person until you consider things from his point of view... until you climb into his skin and walk around in it." Scout's recollection of this lesson, applied to Boo Radley, demonstrates her moral growth.</div>

<h3>Atticus Finch</h3>
<p>Atticus is a <strong>widowed lawyer</strong> who represents the moral conscience of Maycomb. He agrees to defend Tom Robinson knowing he will lose, because he believes in justice and cannot live with himself if he does not try. He embodies <strong>moral courage, integrity, and compassion</strong>.</p>

<p>Atticus teaches his children through example rather than lecture. His decision to defend Tom exposes his family to hostility and danger, yet he remains calm and principled. He is, however, not without complexity — critics have noted that his faith in the legal system is perhaps naive, and his politeness to racists could be read as complicity with the status quo.</p>

<h3>Jem Finch</h3>
<p>Jem is four years older than Scout and experiences the trial at a more intellectually mature level. His <strong>loss of innocence is more devastating</strong> than Scout's: he genuinely believes justice will prevail and is shattered when the jury convicts Tom. His emotional journey from idealism to disillusionment reflects the novel's broader theme about the gap between justice and reality.</p>

<h3>Boo Radley (Arthur Radley)</h3>
<p>Boo is Maycomb's <strong>mysterious recluse</strong>, confined to his house by his oppressive family. The children initially fear him, projecting monstrous fantasies onto him. Through the gifts in the knothole, the blanket during the fire, and his ultimate rescue of the children, Boo is revealed as a <strong>gentle, protective figure</strong> — a "mockingbird" who has been damaged by cruelty and isolation.</p>

<h3>Tom Robinson</h3>
<p>Tom is a <strong>Black man falsely accused</strong> of assaulting Mayella Ewell. He is honest, hardworking, and compassionate — he helped Mayella out of genuine kindness. His testimony reveals the truth, but the jury's racism overrides the evidence. Tom is the novel's most explicit <strong>"mockingbird"</strong> — an innocent person destroyed by prejudice.</p>

<div class="key-term"><strong>Key Term: The Mockingbird Symbol</strong> — Atticus tells the children it is "a sin to kill a mockingbird" because mockingbirds "don't do one thing but make music for us to enjoy." Tom Robinson and Boo Radley are both symbolic mockingbirds — innocent figures who do no harm but are destroyed or damaged by society.</div>

<h3>Bob &amp; Mayella Ewell</h3>
<p>Bob Ewell represents the <strong>lowest rung of white Maycomb society</strong>. He is abusive, dishonest, and racist. His false accusation against Tom is motivated by the need to reassert his social superiority — in a society built on white supremacy, a white man must be believed over a Black man. Mayella is more complex: she is a victim of her father's abuse and poverty, trapped in a system that offers her no way out. Her accusation against Tom is an act of self-preservation within that system.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Avoid simplistic character descriptions. The best responses explore complexity — Mayella is both victim and perpetrator; Atticus is both heroic and limited. Examiners reward nuanced interpretations.</div>
`,
    quiz: [
      {
        id: 'tkam-m3-q1',
        question: 'Which two characters are most clearly represented as symbolic "mockingbirds"?',
        options: ['Scout and Jem', 'Atticus and Calpurnia', 'Tom Robinson and Boo Radley', 'Mayella and Dill'],
        correct: 2,
        explanation: 'Tom Robinson and Boo Radley are both "mockingbirds" — innocent people who do no harm but are destroyed or damaged by the cruelty and prejudice of society.',
      },
      {
        id: 'tkam-m3-q2',
        question: 'What is the key lesson Atticus teaches Scout about understanding other people?',
        options: [
          'Always trust the legal system to deliver justice',
          'You never really understand a person until you climb into his skin and walk around in it',
          'Good people always win in the end',
          'It is better to fight injustice with violence than words',
        ],
        correct: 1,
        explanation: 'This lesson about empathy — seeing the world from another person\'s perspective — is the novel\'s moral core and is fulfilled when Scout stands on Boo\'s porch in the final chapter.',
      },
      {
        id: 'tkam-m3-q3',
        question: 'Why is Jem\'s loss of innocence considered more devastating than Scout\'s?',
        options: [
          'Because Jem is physically attacked by Bob Ewell',
          'Because Jem is old enough to believe justice will prevail and is shattered when it does not',
          'Because Jem loses his friendship with Dill',
          'Because Jem is punished by Atticus for attending the trial',
        ],
        correct: 1,
        explanation: 'Jem is old enough to understand the trial intellectually and genuinely believes the evidence will lead to acquittal. The guilty verdict shatters his idealism in a way that is more consciously painful than Scout\'s experience.',
      },
    ],
  },
  {
    id: 'tkam-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>To Kill a Mockingbird — Themes &amp; Ideas</h2>

<h3>Racial Injustice</h3>
<p>The central theme of the novel is the <strong>systemic racism</strong> of the American South. Tom Robinson's trial is the focal point: despite overwhelming evidence of his innocence, an all-white jury convicts him because the racial hierarchy demands that a white woman's word carry more weight than a Black man's truth. Lee shows racism not as the failing of individuals alone but as a <strong>structural feature of Maycomb society</strong> — embedded in its laws, institutions, customs and unspoken rules.</p>

<p>The novel reveals how racism operates at every level: from Bob Ewell's overt hatred, to the jury's institutional bias, to the well-meaning but complicit white citizens who privately disagree but publicly conform. Atticus's defence of Tom is significant not because it changes the outcome but because it <strong>forces Maycomb to confront its own hypocrisy</strong>.</p>

<h3>Moral Courage &amp; Conscience</h3>
<p>Atticus defines courage not as physical bravery but as moral persistence: <strong>"it's when you know you're licked before you begin but you begin anyway and you see it through no matter what."</strong> This definition applies to his defence of Tom, Mrs Dubose's fight against her morphine addiction, and ultimately to the novel's argument that standing up for justice matters even when success is impossible.</p>

<h3>Innocence &amp; Loss of Innocence</h3>
<p>The mockingbird motif encapsulates this theme. Both Tom and Boo are innocent figures destroyed or marginalised by a corrupted society. Scout and Jem's journey from childhood games to witnessing racial injustice and violence constitutes a <strong>loss of innocence</strong> that the novel presents as both painful and necessary for moral growth.</p>

<h3>Social Class &amp; Prejudice</h3>
<p>Maycomb's rigid social hierarchy is a key theme. The Finches occupy a respectable position; the Cunninghams are poor but honest; the Ewells are the despised lowest class of white society. Black citizens like Tom Robinson and Calpurnia, regardless of their character or abilities, are placed below all white people. Lee exposes this hierarchy as <strong>arbitrary and unjust</strong>, showing that moral worth has nothing to do with social position.</p>

<h3>Education &amp; Moral Learning</h3>
<p>Scout's formal education at school is shown to be <strong>narrow and inadequate</strong> — her teacher Miss Caroline punishes her for being able to read. Her real education comes from Atticus, Calpurnia, and her experiences in Maycomb. The novel argues that <strong>true education is moral education</strong>: learning empathy, questioning prejudice, and developing the courage to act on one's convictions.</p>

<h3>Gender &amp; Social Expectations</h3>
<p>Scout's tomboyish nature challenges Maycomb's expectations of femininity. Aunt Alexandra tries to mould Scout into a "proper lady," representing the restrictive gender norms of Southern society. Scout resists, and the novel implicitly critiques a society that values conformity over authenticity.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best essays connect themes to each other. For example, racial injustice and social class are intertwined — Bob Ewell's racism is partly motivated by his need to feel superior to someone in a society that despises him. Showing these connections demonstrates sophisticated understanding.</div>
`,
    quiz: [
      {
        id: 'tkam-m4-q1',
        question: 'How does Atticus define real courage?',
        options: [
          'Fighting someone who insults your family',
          'Carrying a gun to protect the innocent',
          'Knowing you are licked before you begin but beginning anyway',
          'Standing up to authority figures in public',
        ],
        correct: 2,
        explanation: 'Atticus defines courage as moral persistence in the face of certain defeat. This applies to his defence of Tom, Mrs Dubose\'s fight against addiction, and the novel\'s broader argument about justice.',
      },
      {
        id: 'tkam-m4-q2',
        question: 'What does Lee suggest about the relationship between social class and racism in Maycomb?',
        options: [
          'Only the upper classes are racist',
          'Racism is confined to the Ewell family',
          'Social class and racial hierarchies are intertwined, with all Black citizens placed below all white citizens regardless of character',
          'The poor white families are more tolerant than the wealthy ones',
        ],
        correct: 2,
        explanation: 'Lee shows that Maycomb\'s social hierarchy places all Black citizens below all white citizens, regardless of moral worth. Bob Ewell\'s racism is partly driven by his need to feel superior to someone in a society that despises him.',
      },
      {
        id: 'tkam-m4-q3',
        question: 'What does the novel suggest about Scout\'s real education?',
        options: [
          'School provides the most important lessons',
          'True education is moral education, learned through experience and empathy',
          'Reading books is the only way to learn about injustice',
          'Children should not be exposed to adult problems',
        ],
        correct: 1,
        explanation: 'The novel contrasts Scout\'s narrow, inadequate formal schooling with the moral education she receives from Atticus, Calpurnia, and her experiences — arguing that empathy and conscience matter more than academic knowledge.',
      },
    ],
  },
  {
    id: 'tkam-m5',
    title: 'Language & Style',
    duration: '45 min',
    content: `
<h2>To Kill a Mockingbird — Language &amp; Style</h2>

<h3>Narrative Voice</h3>
<p>The novel is narrated in the <strong>first person</strong> by Scout Finch, looking back on childhood events from an adult perspective. This creates a <strong>dual voice</strong>: the child's limited understanding provides humour and pathos, while the adult's hindsight provides irony and moral reflection. The reader often understands more than the child Scout does — a technique that generates <strong>dramatic irony</strong> and engages the reader as an active interpreter.</p>

<div class="key-term"><strong>Key Term: Dramatic Irony</strong> — When the reader or audience understands more than a character. Scout's innocent descriptions of racism and injustice carry greater weight because the reader understands the full horror of what she is witnessing.</div>

<h3>Dialect &amp; Vernacular</h3>
<p>Lee uses <strong>Southern dialect</strong> throughout the novel to create authenticity and distinguish social classes. Scout's colloquial voice ("Jem and me"), Calpurnia's code-switching between standard English and African American Vernacular English, and the Ewells' rough speech all serve to locate characters within Maycomb's social hierarchy. Language itself becomes a marker of class, race and education.</p>

<h3>Symbolism</h3>
<p>Lee employs several recurring symbols:</p>
<ul>
  <li><strong>The mockingbird:</strong> Represents innocence and the sin of destroying harmless beings. Tom Robinson and Boo Radley are the primary mockingbird figures.</li>
  <li><strong>The Radley house:</strong> Symbolises fear, prejudice, and the unknown. As Scout's understanding grows, the house transforms from a site of terror to one of compassion.</li>
  <li><strong>The mad dog (Tim Johnson):</strong> Symbolises the disease of racism spreading through Maycomb. Atticus's shooting of the dog foreshadows his attempt to "kill" racism through the trial.</li>
  <li><strong>The knothole gifts:</strong> Represent Boo's desire for human connection and his innocence — he reaches out to the children through small, gentle offerings.</li>
</ul>

<h3>Tone &amp; Humour</h3>
<p>Despite its serious themes, the novel is often <strong>humorous</strong>. Scout's blunt observations, her misunderstandings of adult behaviour, and the eccentric characters of Maycomb provide comic relief. This humour serves a purpose: it draws the reader into Scout's world before confronting them with the brutality of the trial. The <strong>tonal shift</strong> from warmth and comedy in Part One to tension and tragedy in Part Two is one of Lee's most effective structural choices.</p>

<h3>Imagery &amp; Setting</h3>
<p>Lee's descriptions of Maycomb create a vivid sense of place — the <strong>oppressive heat</strong>, the slow pace of life, the "tired old town" where people move like "underwater creatures." This languorous imagery reflects both the charm and the stagnation of Southern life. Maycomb is a town that resists change, and Lee's imagery reinforces this: the heat, the dust, the slowness all suggest a community trapped in its own history.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing language for AO2, focus on <em>specific words</em>. Do not just say "Lee uses imagery to describe Maycomb." Instead, analyse the effect of particular word choices — for example, the verb "crawled" in "Maycomb was a tired old town" suggests decay, stagnation, and resistance to progress.</div>
`,
    quiz: [
      {
        id: 'tkam-m5-q1',
        question: 'What effect does the dual narrative voice create in the novel?',
        options: [
          'It makes the story confusing and unreliable',
          'It creates dramatic irony, as the reader understands more than the child Scout',
          'It allows multiple characters to narrate different chapters',
          'It removes all emotion from the storytelling',
        ],
        correct: 1,
        explanation: 'The dual voice — child experiencing events, adult reflecting on them — creates dramatic irony. The reader grasps the full horror of events that the young Scout describes with innocent confusion.',
      },
      {
        id: 'tkam-m5-q2',
        question: 'What does the mad dog (Tim Johnson) symbolise in the novel?',
        options: [
          'The danger of wild animals in the South',
          'Jem\'s fear of his father',
          'The disease of racism spreading through Maycomb',
          'The economic hardship of the Depression',
        ],
        correct: 2,
        explanation: 'The mad dog symbolises the sickness of racism infecting Maycomb. Atticus\'s shooting of the dog foreshadows his attempt to confront and destroy racial prejudice through Tom Robinson\'s defence.',
      },
      {
        id: 'tkam-m5-q3',
        question: 'Why does Lee use Southern dialect and vernacular speech in the novel?',
        options: [
          'To make the novel harder to read',
          'To create authenticity and distinguish characters by social class, race and education',
          'To show that Southern people are uneducated',
          'To imitate other famous American novels',
        ],
        correct: 1,
        explanation: 'Dialect and vernacular create authenticity and serve as markers of class, race and education within Maycomb\'s social hierarchy. Calpurnia\'s code-switching, for example, reveals the social pressures on Black citizens.',
      },
    ],
  },
  {
    id: 'tkam-m6',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>To Kill a Mockingbird — Exam Practice &amp; Model Response</h2>

<h3>Understanding the Exam Format</h3>
<p>For Edexcel IGCSE Literature (4ET1), you will answer on your prose set text in a <strong>closed-book exam</strong>. This means you cannot take the text into the exam room. You will typically be asked a question that requires you to explore how the writer presents a particular character, theme, or idea. You must use <strong>specific textual references and quotations from memory</strong>.</p>

<h3>Sample Question</h3>
<div class="sample-question"><strong>Question:</strong> Explore how Harper Lee presents the theme of courage in <em>To Kill a Mockingbird</em>. You must refer to the context of the novel in your answer.</div>

<h3>Planning Your Response</h3>
<p>Before writing, take <strong>5 minutes to plan</strong>. Identify your key argument (thesis), select 3–4 supporting points, and choose quotations for each. A strong plan for the above question might include:</p>

<ul>
  <li><strong>Thesis:</strong> Lee presents courage not as physical bravery but as moral persistence in the face of certain defeat, using multiple characters to explore different facets of this idea.</li>
  <li><strong>Point 1:</strong> Atticus's definition of courage through Mrs Dubose — "it's when you know you're licked before you begin but you begin anyway."</li>
  <li><strong>Point 2:</strong> Atticus's defence of Tom Robinson as an act of moral courage — he knows he will lose but acts according to his conscience.</li>
  <li><strong>Point 3:</strong> Scout's developing courage — from physical fighting to moral empathy, culminating in her understanding of Boo Radley.</li>
  <li><strong>Point 4:</strong> Context — Lee wrote during the Civil Rights Movement, when acts of moral courage by ordinary citizens were challenging the injustice of segregation.</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Lee uses Atticus's instruction to Jem about Mrs Dubose to establish a redefined concept of courage that underpins the entire novel. Atticus tells Jem that real courage is not "a man with a gun in his hand" but is "when you know you're licked before you begin but you begin anyway and you see it through no matter what." The contrast between physical and moral courage is structurally significant: by placing this lesson in Chapter 11, at the end of Part One, Lee ensures that the reader enters the trial sequence in Part Two with a new understanding of what courage means. The verb "licked" — colloquial and humble — strips heroism of its glamour, presenting courage as quiet, painful persistence rather than dramatic triumph. This redefinition is essential to understanding Atticus's defence of Tom Robinson: he takes the case not because he expects to win, but because his conscience demands it. In the context of 1930s Alabama, where defending a Black man invited social ostracism and physical danger, Atticus's decision embodies the very quality he describes. Lee, writing during the Civil Rights Movement of the 1960s, invites her readers to recognise this same courage in the activists challenging segregation — ordinary people who knew they were "licked" by a system of entrenched power but began anyway.</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Embed quotations:</strong> Weave short quotations into your sentences rather than dropping them in as standalone blocks.</li>
  <li><strong>Analyse specific words:</strong> Zoom in on individual words and explain their connotations and effects.</li>
  <li><strong>Link to structure:</strong> Show awareness of where a moment appears in the novel and why its placement matters.</li>
  <li><strong>Integrate context:</strong> Weave contextual references into your literary analysis rather than writing separate "context paragraphs."</li>
  <li><strong>Maintain a thesis:</strong> Keep returning to your overarching argument throughout the essay.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The difference between a good essay and an excellent one is often the quality of language analysis. Do not just quote and move on — slow down and explore the connotations, sounds, and effects of individual words within your quotations.</div>
`,
    quiz: [
      {
        id: 'tkam-m6-q1',
        question: 'What is the most effective way to use quotations in an IGCSE Literature essay?',
        options: [
          'Copy out long passages and then summarise them',
          'Embed short quotations into your own sentences and analyse specific words',
          'Only use quotations at the start of paragraphs',
          'Avoid quotations and paraphrase instead',
        ],
        correct: 1,
        explanation: 'Embedding short quotations into your own sentences allows you to analyse specific words and their effects. This demonstrates close textual knowledge and analytical skill.',
      },
      {
        id: 'tkam-m6-q2',
        question: 'How should context be used in an IGCSE Literature essay?',
        options: [
          'In a separate introductory paragraph about history',
          'Only in the conclusion',
          'Integrated into your literary analysis throughout the essay',
          'Context is not assessed at IGCSE level',
        ],
        correct: 2,
        explanation: 'Context should be woven into your literary analysis, not presented as a separate history lesson. The strongest responses show how contextual factors shape the writer\'s choices and the text\'s meaning.',
      },
      {
        id: 'tkam-m6-q3',
        question: 'Why is it important to plan before writing an exam essay?',
        options: [
          'It uses up spare time at the end of the exam',
          'It allows you to identify a thesis, select supporting points, and choose quotations before writing',
          'The examiner marks the plan separately',
          'Planning is only necessary for weaker students',
        ],
        correct: 1,
        explanation: 'Planning ensures your essay has a clear thesis, well-chosen evidence, and a logical structure. Five minutes of planning typically produces a significantly better essay than writing immediately.',
      },
    ],
  },
];

const tkamCourse: CourseData = {
  id: 'igcse-lit-prose-to-kill-a-mockingbird',
  title: 'To Kill a Mockingbird — IGCSE Literature',
  subtitle: 'Harper Lee\'s exploration of racial injustice, moral courage and the loss of innocence in the American South',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  description: 'A comprehensive IGCSE Literature course on To Kill a Mockingbird by Harper Lee, covering context, plot, characters, themes, language and exam technique for the Edexcel 4ET1 specification.',
  color: '#8B4513',
  moduleList: tkamModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. Of Mice and Men — John Steinbeck
// ─────────────────────────────────────────────────────────────────────────────

const omamModules: CourseModule[] = [
  {
    id: 'omam-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>Of Mice and Men — Context &amp; Author Background</h2>

<p><em>Of Mice and Men</em> was published in <strong>1937</strong> by <strong>John Steinbeck</strong> (1902–1968). Set in <strong>Soledad, California</strong> during the <strong>Great Depression</strong>, the novella tells the story of two itinerant ranch workers, <strong>George Milton</strong> and <strong>Lennie Small</strong>, who dream of owning their own piece of land. Steinbeck was awarded the <strong>Nobel Prize in Literature in 1962</strong>.</p>

<div class="key-term"><strong>Key Term: Novella</strong> — A work of fiction shorter than a novel but longer than a short story, typically between 17,000 and 40,000 words. <em>Of Mice and Men</em> is a novella, and its compressed form contributes to its intense emotional impact.</div>

<h3>John Steinbeck — Life &amp; Influences</h3>
<p>Steinbeck grew up in <strong>Salinas, California</strong>, in the fertile agricultural region that provides the setting for much of his fiction. As a young man, he worked as a farm labourer alongside migrant workers, giving him first-hand experience of the poverty, loneliness and exploitation he depicts in the novella. He was a committed social realist who believed literature should expose injustice and give voice to the dispossessed.</p>

<h3>Historical Context: The Great Depression</h3>
<p>The <strong>Wall Street Crash of 1929</strong> triggered the worst economic crisis of the twentieth century. By 1933, unemployment in America had reached <strong>25%</strong>. Key contextual elements include:</p>
<ul>
  <li><strong>Migrant workers:</strong> Thousands of men travelled across California seeking seasonal work on ranches and farms. They were paid subsistence wages, had no job security, and moved constantly — a rootless existence that made lasting friendships almost impossible.</li>
  <li><strong>The Dust Bowl:</strong> Severe drought and soil erosion devastated the Great Plains in the 1930s, displacing hundreds of thousands of farming families who migrated west in search of work.</li>
  <li><strong>Racial segregation:</strong> Black Americans faced systematic discrimination. Crooks's isolation on the ranch reflects the reality of segregation even in the supposedly more progressive West.</li>
  <li><strong>Women's status:</strong> Women had limited economic independence and were often defined solely through their relationships with men — a reality reflected in the fact that Curley's wife is never given a name.</li>
</ul>

<h3>The American Dream</h3>
<p>Central to the novella is the concept of the <strong>American Dream</strong> — the belief that anyone, regardless of background, can achieve prosperity and happiness through hard work and determination. Steinbeck systematically <strong>exposes this dream as an illusion</strong> for the working poor. George and Lennie's dream of their own land represents hope, but the novella's tragic ending reveals that the economic and social structures of 1930s America make such dreams unattainable for men like them.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The American Dream is not just a theme — it is a structural device. The dream sustains the narrative and the characters' hope, making its destruction at the end all the more devastating. Always connect context to the writer's craft for AO2/AO3.</div>
`,
    quiz: [
      {
        id: 'omam-m1-q1',
        question: 'Where is Of Mice and Men set?',
        options: ['New York City', 'Soledad, California', 'Oklahoma', 'Chicago, Illinois'],
        correct: 1,
        explanation: 'The novella is set near Soledad, California. The name "Soledad" means "solitude" or "loneliness" in Spanish — a deliberate choice by Steinbeck that reinforces the theme of isolation.',
      },
      {
        id: 'omam-m1-q2',
        question: 'What economic event provides the primary context for the novella?',
        options: ['World War I', 'The Industrial Revolution', 'The Great Depression', 'The Gold Rush'],
        correct: 2,
        explanation: 'The Great Depression (1929–1939) is the primary context. Mass unemployment forced thousands of men into itinerant labour, creating the rootless, lonely existence that Steinbeck depicts.',
      },
      {
        id: 'omam-m1-q3',
        question: 'How does Steinbeck present the American Dream in the novella?',
        options: [
          'As an achievable goal for those who work hard enough',
          'As an illusion that is unattainable for the working poor',
          'As irrelevant to the characters\' lives',
          'As something only available to ranch owners',
        ],
        correct: 1,
        explanation: 'Steinbeck exposes the American Dream as an illusion for the working poor. George and Lennie\'s dream sustains them but is ultimately destroyed, reflecting the impossibility of upward mobility in Depression-era America.',
      },
    ],
  },
  {
    id: 'omam-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>Of Mice and Men — Plot &amp; Structure</h2>

<p>The novella is structured across <strong>six chapters</strong>, each functioning almost like a scene in a play. Steinbeck originally described it as a <strong>"play-novelette"</strong> — a hybrid form designed for easy adaptation to the stage. The action takes place over just <strong>three days</strong>, with the compressed timeframe intensifying the sense of inevitability.</p>

<h3>Chapter-by-Chapter Summary</h3>
<ul>
  <li><strong>Chapter 1 — The clearing by the river:</strong> George and Lennie camp by the Salinas River on their way to a new ranch job. Their relationship is established: George is sharp and protective; Lennie is physically powerful but mentally childlike. They share their dream of owning "a little place" with rabbits. George's irritation and tenderness coexist, revealing the complexity of their bond.</li>
  <li><strong>Chapter 2 — The bunkhouse:</strong> They arrive at the ranch and meet the other characters: Candy, Crooks, Slim, Curley, and Curley's wife. Tensions are immediately established — Curley is aggressive and suspicious; his wife is flirtatious and lonely. The bunkhouse is described in sparse, utilitarian detail, emphasising the impersonal, transient lives of the workers.</li>
  <li><strong>Chapter 3 — The bunkhouse (evening):</strong> Slim gives Lennie a puppy. Candy's old dog is shot by Carlson — a mercy killing that foreshadows the ending. Candy overhears the dream and offers his savings, making it suddenly seem achievable. Curley attacks Lennie, who crushes Curley's hand.</li>
  <li><strong>Chapter 4 — Crooks's room:</strong> Lennie visits Crooks in his segregated room. Crooks initially mocks the dream but is briefly drawn in when Candy joins. Curley's wife enters and threatens Crooks with lynching, reasserting the racial hierarchy and destroying the momentary hope.</li>
  <li><strong>Chapter 5 — The barn:</strong> Lennie accidentally kills his puppy, then accidentally kills Curley's wife when she lets him stroke her hair. He flees to the clearing by the river, as George instructed at the start.</li>
  <li><strong>Chapter 6 — The clearing by the river:</strong> George finds Lennie at the river. He tells him the dream one last time, then shoots him in the back of the head — an act of mercy to spare Lennie from Curley's violent vengeance. The novella ends where it began, completing a tragic circle.</li>
</ul>

<div class="key-term"><strong>Key Term: Circular Structure</strong> — The novella begins and ends at the same clearing by the river, creating a circular structure that emphasises inevitability and entrapment. The characters cannot escape their fates, and the return to the opening setting underscores the futility of the dream.</div>

<h3>Structural Techniques</h3>
<ul>
  <li><strong>Foreshadowing:</strong> Candy's dog being shot prefigures George shooting Lennie. The dead mouse and dead puppy foreshadow the killing of Curley's wife. Steinbeck layers these events to create a mounting sense of tragic inevitability.</li>
  <li><strong>Dramatic structure:</strong> Each chapter is set in a single location with characters entering and exiting, like scenes in a play. This theatrical quality gives the novella a sense of confinement and claustrophobia.</li>
  <li><strong>Symmetry:</strong> The opening and closing scenes mirror each other in setting but differ in mood — the first is hopeful, the last is devastating. This symmetry reinforces the theme of dreams destroyed.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always discuss Steinbeck's structural choices as deliberate craft decisions. The compressed timeframe, circular structure, and layered foreshadowing all work together to create a sense of tragic inevitability — and explaining this demonstrates AO2 skills.</div>
`,
    quiz: [
      {
        id: 'omam-m2-q1',
        question: 'Over how many days does the action of the novella take place?',
        options: ['One day', 'Three days', 'One week', 'One month'],
        correct: 1,
        explanation: 'The action takes place over just three days, creating a compressed timeframe that intensifies the sense of inevitability and makes the tragic ending feel inescapable.',
      },
      {
        id: 'omam-m2-q2',
        question: 'What event in Chapter 3 foreshadows the ending of the novella?',
        options: [
          'Slim giving Lennie a puppy',
          'Curley attacking Lennie',
          'Carlson shooting Candy\'s old dog',
          'Candy offering his savings for the dream',
        ],
        correct: 2,
        explanation: 'Carlson\'s shooting of Candy\'s old dog — a "mercy killing" — directly foreshadows George\'s shooting of Lennie at the end. Both acts are presented as acts of compassion in the face of inevitable suffering.',
      },
      {
        id: 'omam-m2-q3',
        question: 'Why did Steinbeck describe the novella as a "play-novelette"?',
        options: [
          'Because it was originally written as a stage play',
          'Because each chapter functions like a scene with a single setting and characters entering and exiting',
          'Because it contains dialogue but no description',
          'Because it was performed before it was published',
        ],
        correct: 1,
        explanation: 'Each chapter is set in a single location with characters entering and exiting like a stage play. This theatrical structure creates confinement and claustrophobia, and was designed for easy stage adaptation.',
      },
    ],
  },
  {
    id: 'omam-m3',
    title: 'Character Analysis',
    duration: '50 min',
    content: `
<h2>Of Mice and Men — Character Analysis</h2>

<h3>George Milton</h3>
<p>George is <strong>"small and quick, dark of face, with restless eyes and sharp, strong features."</strong> He is intelligent, pragmatic, and burdened by the responsibility of caring for Lennie. His relationship with Lennie sets him apart from the other ranch workers — he has companionship in a world defined by loneliness. Yet George is also trapped: his loyalty to Lennie limits his freedom and ultimately forces him to make the most devastating decision imaginable.</p>

<p>George's final act — shooting Lennie — is Steinbeck's most complex moral moment. It is simultaneously an act of <strong>murder, mercy, love, and sacrifice</strong>. George kills his only companion to spare him from a worse fate, and in doing so, destroys the dream and condemns himself to the lonely existence he has always feared.</p>

<h3>Lennie Small</h3>
<p>Lennie is physically enormous but mentally childlike — his surname "Small" is bitterly ironic. He loves soft things (mice, puppies, Curley's wife's hair) but cannot control his own strength. Lennie is <strong>not a fully realised character</strong> in the psychological sense; rather, he functions as a <strong>symbol of innocence and vulnerability</strong> in a hostile world. His repeated killing of soft creatures is not malicious but represents the destructive potential of unchecked power — a theme with wider social resonance.</p>

<div class="key-term"><strong>Key Quotation:</strong> "I done a bad thing. I done another bad thing." — Lennie's childlike repetition after killing Curley's wife reveals his inability to understand the consequences of his actions, making him simultaneously dangerous and sympathetic.</div>

<h3>Candy</h3>
<p>Candy is an <strong>ageing swamper</strong> who has lost his hand in a ranch accident. He represents the fear of obsolescence — when a worker can no longer be productive, he is discarded. The shooting of his old dog mirrors his own fear of being "canned" when he is no longer useful. Candy's desperate investment in the dream reflects the universal human need for hope and belonging.</p>

<h3>Crooks</h3>
<p>Crooks is the <strong>Black stable buck</strong> who lives in enforced isolation due to racial segregation. His room — separate from the bunkhouse — symbolises his exclusion from society. Crooks is intelligent, proud, and bitter. His brief moment of hope when he considers joining the dream is crushed by Curley's wife's racist threat, reminding him (and the reader) that the American Dream is not available to everyone equally.</p>

<h3>Curley's Wife</h3>
<p>She is the <strong>only woman on the ranch</strong> and is never given a name — identified only through her relationship to her husband. She is lonely, trapped in a loveless marriage, and harbours a lost dream of being in "the pitchers." Steinbeck initially presents her as a threat and a temptress, but her confession to Lennie in the barn reveals her as <strong>another victim of the same economic and social forces</strong> that oppress the men. Her death is both a tragedy and the catalyst for the novella's devastating conclusion.</p>

<h3>Slim</h3>
<p>Slim is the <strong>"prince of the ranch"</strong> — a skilled mule driver whose authority is natural rather than imposed. He is the moral compass of the novella, the only character who fully understands George's relationship with Lennie and the significance of the final act. His closing words — <strong>"You hadda, George. I swear you hadda"</strong> — offer the only consolation in the novella's bleak ending.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Steinbeck uses each character to represent a different facet of marginalisation: age (Candy), race (Crooks), gender (Curley's wife), disability (Lennie), class (all the workers). Discussing this pattern demonstrates conceptualised thinking.</div>
`,
    quiz: [
      {
        id: 'omam-m3-q1',
        question: 'Why is Lennie\'s surname "Small" significant?',
        options: [
          'It reflects his quiet personality',
          'It is bitterly ironic given his enormous physical size',
          'It refers to his small role in the novella',
          'It reflects his low social status',
        ],
        correct: 1,
        explanation: 'The surname "Small" is ironic: Lennie is physically huge but mentally childlike. This irony encapsulates the mismatch between his strength and his understanding that drives the novella\'s tragedy.',
      },
      {
        id: 'omam-m3-q2',
        question: 'What does Curley\'s wife\'s lack of a name symbolise?',
        options: [
          'Steinbeck forgot to name her',
          'She is not important to the plot',
          'Her identity is defined only through her relationship to her husband, reflecting women\'s lack of independence',
          'She is a mysterious character whose real name is a secret',
        ],
        correct: 2,
        explanation: 'Her namelessness symbolises how women in 1930s America were defined through their relationships with men. She has no independent identity on the ranch — she is merely "Curley\'s wife."',
      },
      {
        id: 'omam-m3-q3',
        question: 'What role does Slim play in the novella?',
        options: [
          'He is the antagonist who opposes George and Lennie',
          'He is the moral compass whose natural authority and understanding provide the only consolation',
          'He is the ranch owner who exploits the workers',
          'He is a comic character who provides relief from the tragedy',
        ],
        correct: 1,
        explanation: 'Slim is the moral compass of the novella. His natural authority, his understanding of George and Lennie\'s bond, and his final consoling words make him the only source of moral clarity in the story.',
      },
    ],
  },
  {
    id: 'omam-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>Of Mice and Men — Themes &amp; Ideas</h2>

<h3>Loneliness &amp; Isolation</h3>
<p>Loneliness is the novella's <strong>dominant theme</strong>. The setting of Soledad (Spanish for "solitude") signals this from the start. Every character is isolated: George and Lennie are unusual in travelling together; Candy has lost his dog and fears being discarded; Crooks is segregated by race; Curley's wife is the only woman on a ranch full of men who avoid her. Steinbeck suggests that loneliness is not just an individual misfortune but a <strong>structural feature of Depression-era America</strong>, where economic forces fragment communities and prevent lasting human connection.</p>

<h3>The American Dream</h3>
<p>George and Lennie's dream of owning "a little place" with rabbits represents the broader <strong>American Dream</strong> of self-sufficiency and freedom. The dream functions as a <strong>sustaining narrative</strong> — it gives the men hope and purpose. But Steinbeck systematically undermines it: Candy's dog is shot, Crooks's hope is crushed by racism, and Curley's wife's dream of Hollywood is already dead before the novella begins. The dream is <strong>beautiful but unattainable</strong>, and its destruction is inevitable.</p>

<h3>Power &amp; Powerlessness</h3>
<p>The novella explores how power operates along lines of <strong>class, race, gender, age, and ability</strong>. Curley has power through his father's ownership of the ranch; his wife has power over Crooks through her whiteness; Lennie has physical power but no social power. Steinbeck shows that those at the bottom of the hierarchy — workers, women, Black Americans, disabled people — are trapped in systems that deny them agency and dignity.</p>

<h3>Fate &amp; Determinism</h3>
<p>The novella's title comes from Robert Burns's poem "To a Mouse": <strong>"The best laid schemes o' mice an' men / Gang aft agley"</strong> (often go wrong). This epigraph establishes the theme of <strong>determinism</strong> — the idea that human plans are subject to forces beyond individual control. Steinbeck's layered foreshadowing and circular structure reinforce this: from the first page, the tragedy feels inevitable, and no amount of hope or effort can change the outcome.</p>

<h3>Companionship &amp; Friendship</h3>
<p>In contrast to the pervasive loneliness, George and Lennie's friendship represents the <strong>redemptive power of human connection</strong>. Their bond is the novella's emotional centre. Other characters — Slim, Candy, Crooks — are drawn to it precisely because it is so rare. The destruction of this friendship in the final chapter is devastating because Steinbeck has shown how precious and unusual it is.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about themes, always link them to Steinbeck's methods. Do not just describe loneliness — explain <em>how</em> Steinbeck creates it through setting (Soledad), characterisation (nameless wife), structure (isolation of Crooks's chapter), and symbolism (Candy's dog).</div>
`,
    quiz: [
      {
        id: 'omam-m4-q1',
        question: 'What is the significance of the setting being called "Soledad"?',
        options: [
          'It is the Spanish word for "sunshine," reflecting the Californian setting',
          'It is the Spanish word for "solitude," reinforcing the theme of loneliness',
          'It is named after a historical figure',
          'It means "dream" in Spanish, connecting to the American Dream',
        ],
        correct: 1,
        explanation: '"Soledad" means "solitude" or "loneliness" in Spanish. Steinbeck\'s choice of this real place name is deliberate — it signals the novella\'s dominant theme from the very first page.',
      },
      {
        id: 'omam-m4-q2',
        question: 'What does the title "Of Mice and Men" refer to?',
        options: [
          'The contrast between Lennie\'s size and the mice he kills',
          'A line from Robert Burns\'s poem about how plans often go wrong',
          'The idea that men are no better than animals',
          'A proverb about the futility of hard work',
        ],
        correct: 1,
        explanation: 'The title comes from Burns\'s poem "To a Mouse": "The best laid schemes o\' mice an\' men / Gang aft agley." This establishes the theme of determinism — plans are subject to forces beyond individual control.',
      },
      {
        id: 'omam-m4-q3',
        question: 'How does Steinbeck present the American Dream in the novella?',
        options: [
          'As achievable through hard work and determination',
          'As irrelevant to the characters\' lives',
          'As a sustaining narrative that is ultimately beautiful but unattainable',
          'As something only available to ranch owners',
        ],
        correct: 2,
        explanation: 'The dream sustains George and Lennie emotionally but is systematically undermined by the novella\'s events. Steinbeck presents it as beautiful but ultimately unattainable for the working poor.',
      },
    ],
  },
  {
    id: 'omam-m5',
    title: 'Language & Style',
    duration: '45 min',
    content: `
<h2>Of Mice and Men — Language &amp; Style</h2>

<h3>Naturalistic Dialogue</h3>
<p>Steinbeck writes in a <strong>naturalistic style</strong>, using colloquial, phonetically spelled dialogue to capture the speech patterns of Depression-era ranch workers: "gonna," "ain't," "ever'body." This creates authenticity and emphasises the characters' lack of education and social status. The dialogue carries the narrative forward — much of the novella reads like a play script, with minimal authorial commentary.</p>

<h3>Descriptive Prose &amp; Setting</h3>
<p>Each chapter opens with a <strong>detailed description of the setting</strong> before characters enter. These passages use rich sensory imagery — the "golden foothill slopes," the "deep green pool" of the Salinas River — and often contrast natural beauty with human suffering. The natural world is indifferent to the characters' struggles, reinforcing the novella's deterministic worldview.</p>

<div class="key-term"><strong>Key Quotation:</strong> "A few miles south of Soledad, the Salinas River drops in close to the hillside bank and runs deep and green." — The opening sentence establishes the natural setting before introducing human characters, suggesting that nature exists independently of human concerns.</div>

<h3>Symbolism</h3>
<ul>
  <li><strong>The dream farm:</strong> Represents hope, independence, and the American Dream. Its destruction symbolises the impossibility of escaping economic oppression.</li>
  <li><strong>Candy's dog:</strong> Symbolises the expendability of the old and weak. Its shooting foreshadows Lennie's death and reflects a society that discards those who are no longer "useful."</li>
  <li><strong>Lennie's mice and puppy:</strong> Represent innocence destroyed by uncontrolled power. The escalating pattern (mouse → puppy → woman) creates tragic inevitability.</li>
  <li><strong>The river clearing:</strong> Represents both safety and fate. It is where the dream is first spoken and where it is finally destroyed.</li>
  <li><strong>Light and darkness:</strong> Curley's wife is repeatedly associated with light (red, bright) while Crooks exists in shadow. Steinbeck uses light symbolism to explore visibility, desire and danger.</li>
</ul>

<h3>Steinbeck's Social Realism</h3>
<p>Steinbeck was a <strong>social realist</strong> who believed literature should expose injustice. His style combines <strong>journalistic precision</strong> with <strong>poetic lyricism</strong>. He presents the harsh realities of Depression-era life without sentimentality, but his lyrical descriptions of the natural world and his compassionate characterisation prevent the novella from becoming merely a sociological document. The tension between beauty and brutality is central to his style.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For AO2, focus on Steinbeck's juxtaposition of natural beauty and human suffering. The lush opening descriptions contrast with the bleakness of the ranch workers' lives — this tension between the setting's beauty and the characters' misery is a key stylistic feature to analyse.</div>
`,
    quiz: [
      {
        id: 'omam-m5-q1',
        question: 'Why does Steinbeck use phonetically spelled dialect in the dialogue?',
        options: [
          'Because he could not spell correctly',
          'To create authenticity and emphasise the characters\' social status and lack of education',
          'To make the novella more difficult to read',
          'To imitate Shakespeare\'s writing style',
        ],
        correct: 1,
        explanation: 'The phonetically spelled dialect creates authenticity and locates the characters in a specific social class. It emphasises their lack of formal education and reinforces the novella\'s social realist aims.',
      },
      {
        id: 'omam-m5-q2',
        question: 'What do Lennie\'s successive killings of the mouse, the puppy, and Curley\'s wife represent?',
        options: [
          'His increasing cruelty as the novella progresses',
          'An escalating pattern of innocence destroyed by uncontrolled power, creating tragic inevitability',
          'His desire to collect soft things',
          'Random accidents with no symbolic significance',
        ],
        correct: 1,
        explanation: 'The escalating pattern (mouse → puppy → woman) symbolises innocence destroyed by uncontrolled power. Each killing foreshadows the next, creating a sense of tragic inevitability.',
      },
      {
        id: 'omam-m5-q3',
        question: 'What is the effect of each chapter opening with a detailed description of the setting?',
        options: [
          'It slows down the narrative unnecessarily',
          'It contrasts natural beauty with human suffering, reinforcing the deterministic worldview',
          'It proves that Steinbeck preferred nature to people',
          'It provides instructions for stage designers',
        ],
        correct: 1,
        explanation: 'The opening descriptions juxtapose natural beauty with the bleakness of the characters\' lives. Nature is indifferent to human suffering, reinforcing Steinbeck\'s deterministic vision.',
      },
    ],
  },
  {
    id: 'omam-m6',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Of Mice and Men — Exam Practice &amp; Model Response</h2>

<h3>Understanding the Exam Format</h3>
<p>For Edexcel IGCSE Literature (4ET1), you will answer on your prose set text in a <strong>closed-book exam</strong>. You must demonstrate close knowledge of the text through specific references and quotations recalled from memory.</p>

<h3>Sample Question</h3>
<div class="sample-question"><strong>Question:</strong> Explore how Steinbeck presents loneliness in <em>Of Mice and Men</em>. You must refer to the context of the novella in your answer.</div>

<h3>Planning Your Response</h3>
<ul>
  <li><strong>Thesis:</strong> Steinbeck presents loneliness not as individual misfortune but as a structural feature of Depression-era America, using setting, characterisation and symbolism to show how economic and social forces isolate individuals.</li>
  <li><strong>Point 1:</strong> The setting of Soledad ("solitude") and the transient lives of migrant workers.</li>
  <li><strong>Point 2:</strong> Crooks's enforced isolation through racial segregation — "a guy needs somebody."</li>
  <li><strong>Point 3:</strong> Curley's wife — nameless, trapped, and fatally lonely.</li>
  <li><strong>Point 4:</strong> George and Lennie's friendship as a rare exception that makes the ending even more devastating.</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Steinbeck uses Crooks's enforced isolation to expose how racial segregation compounds the loneliness experienced by all the ranch workers. Crooks lives in a room "set off from" the bunkhouse — a spatial metaphor for his exclusion from white society. The preposition "off" suggests not merely distance but rejection, as though Crooks has been pushed away from the community. When Lennie enters his room, Crooks initially resists but then confesses: "A guy needs somebody — to be near him. A guy goes nuts if he ain't got nobody." The repetition of "a guy" generalises his experience, transforming a personal admission into a universal truth about human need. The verb "goes nuts" is colloquial and raw, reflecting Crooks's lack of education but also the visceral, psychological damage that isolation inflicts. Steinbeck, drawing on his first-hand observation of Depression-era California, understood that racial segregation did not merely separate people physically — it destroyed them emotionally. Yet this moment of vulnerability is brutally shut down when Curley's wife threatens to have Crooks lynched, reasserting the racial hierarchy and reminding both Crooks and the reader that in 1930s America, a Black man's loneliness is enforced by systems of power that no individual act of friendship can overcome.</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Analyse individual words:</strong> Zoom in on verbs, adjectives and prepositions. A single word like "off" can sustain a full paragraph of analysis.</li>
  <li><strong>Use structural awareness:</strong> Note where a moment occurs in the novella and what comes before and after it.</li>
  <li><strong>Connect to context naturally:</strong> Weave in references to the Depression, segregation, and migrant labour as part of your analysis.</li>
  <li><strong>Build a sustained argument:</strong> Every paragraph should connect back to your central thesis.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest responses treat context as inseparable from textual analysis. Do not write a separate "context paragraph" — instead, show how historical and social conditions shape the writer's choices and the characters' experiences throughout your essay.</div>
`,
    quiz: [
      {
        id: 'omam-m6-q1',
        question: 'What is the most effective approach to context in an IGCSE Literature essay?',
        options: [
          'Write a separate paragraph about the Great Depression at the start',
          'Weave contextual references into your literary analysis throughout',
          'Only mention context in the conclusion',
          'Avoid context entirely and focus on quotations',
        ],
        correct: 1,
        explanation: 'Context should be integrated throughout your essay, connected to specific textual moments. A separate "context paragraph" reads as a history lesson rather than literary analysis.',
      },
      {
        id: 'omam-m6-q2',
        question: 'What makes a thesis statement effective for an essay on Of Mice and Men?',
        options: [
          'It summarises the plot of the novella',
          'It presents an overarching interpretation that can be sustained through multiple points',
          'It lists every theme in the novella',
          'It quotes the longest passage you can remember',
        ],
        correct: 1,
        explanation: 'An effective thesis presents a clear, arguable interpretation that unifies the entire essay. Each paragraph should connect back to this central argument.',
      },
      {
        id: 'omam-m6-q3',
        question: 'Why is it important to analyse individual words in quotations?',
        options: [
          'It shows the examiner you have memorised the text',
          'Individual words reveal connotations and effects that demonstrate close analytical skill',
          'Examiners only give marks for word-level analysis',
          'It helps you write longer essays',
        ],
        correct: 1,
        explanation: 'Zooming in on individual words — their connotations, sounds, and effects — demonstrates the close analytical skill that examiners reward. A single word can sustain a full paragraph of insightful analysis.',
      },
    ],
  },
];

const omamCourse: CourseData = {
  id: 'igcse-lit-prose-of-mice-and-men',
  title: 'Of Mice and Men — IGCSE Literature',
  subtitle: 'John Steinbeck\'s tragic novella of friendship, loneliness and broken dreams in Depression-era California',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  description: 'A comprehensive IGCSE Literature course on Of Mice and Men by John Steinbeck, covering context, plot, characters, themes, language and exam technique for the Edexcel 4ET1 specification.',
  color: '#A0522D',
  moduleList: omamModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. The Whale Rider — Witi Ihimaera
// ─────────────────────────────────────────────────────────────────────────────

const whaleRiderModules: CourseModule[] = [
  {
    id: 'wr-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>The Whale Rider — Context &amp; Author Background</h2>

<p><em>The Whale Rider</em> was published in <strong>1987</strong> by <strong>Witi Ihimaera</strong> (born 1944), a <strong>Maori</strong> writer from New Zealand (Aotearoa). The novel tells the story of <strong>Kahu</strong> (also called Paikea), an eight-year-old Maori girl who must prove her right to become the leader of her people despite the opposition of her grandfather, <strong>Koro Apirana</strong>, who believes only a male heir can fulfil the role. The novel interweaves Maori mythology, ecological themes and a powerful story of gender and tradition.</p>

<div class="key-term"><strong>Key Term: Maori</strong> — The indigenous Polynesian people of New Zealand (Aotearoa). Maori culture, language, and mythology are central to <em>The Whale Rider</em>. The novel draws on the Maori legend of Paikea, an ancestor who rode to New Zealand on the back of a whale.</div>

<h3>Witi Ihimaera — Life &amp; Influences</h3>
<p>Ihimaera was born in <strong>Gisborne</strong>, on the east coast of New Zealand's North Island — the same region where the novel is set. He was the <strong>first Maori novelist</strong>, publishing <em>Tangi</em> in 1973. His work consistently explores the tension between <strong>Maori tradition and modern New Zealand society</strong>, the impact of colonisation, and the ongoing vitality of indigenous culture. He has served as a diplomat and professor, and his writing bridges academic and popular audiences.</p>

<h3>Maori Culture &amp; Mythology</h3>
<p>The novel is deeply rooted in Maori cosmology:</p>
<ul>
  <li><strong>Whakapapa (genealogy):</strong> In Maori culture, identity is defined through ancestral lineage. Kahu's claim to leadership rests on her whakapapa — she is a direct descendant of the original Paikea.</li>
  <li><strong>The Paikea legend:</strong> According to Ngati Porou tradition, the ancestor Paikea rode a whale across the ocean to Aotearoa. This founding myth is central to the novel's plot and symbolism.</li>
  <li><strong>Tikanga (custom):</strong> Traditional protocols governing behaviour, ceremony and leadership. Koro Apirana's insistence on a male heir reflects certain traditional interpretations of tikanga.</li>
  <li><strong>Kaitiakitanga (guardianship):</strong> The Maori concept of environmental stewardship — humans have a duty to protect the natural world. This connects to the novel's ecological themes and the relationship between the Maori people and the whales.</li>
</ul>

<h3>Post-Colonial Context</h3>
<p>New Zealand's history of <strong>British colonisation</strong> (formalised by the Treaty of Waitangi in 1840) provides essential context. By the late twentieth century, Maori communities faced the ongoing effects of land dispossession, cultural suppression, and economic marginalisation. The novel engages with these realities while also asserting the <strong>resilience and continuing relevance of Maori culture</strong>. Ihimaera's work is part of a broader <strong>Maori Renaissance</strong> — a cultural revival movement from the 1970s onwards that sought to reclaim language, art, and traditions.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing context, focus on how Ihimaera uses the novel to explore tensions within Maori culture — particularly between tradition and change. The most nuanced responses will note that Koro's resistance to Kahu is not simply "sexism" but reflects his genuine fear that abandoning tradition will destroy his people's identity.</div>
`,
    quiz: [
      {
        id: 'wr-m1-q1',
        question: 'What Maori legend is central to the novel\'s plot?',
        options: ['The legend of Maui fishing up the North Island', 'The legend of Paikea riding a whale to Aotearoa', 'The legend of Tane separating earth and sky', 'The legend of Hinemoa swimming to Mokoia Island'],
        correct: 1,
        explanation: 'The Paikea legend — in which an ancestor rode a whale across the ocean to New Zealand — is the founding myth that drives the novel\'s plot and symbolism.',
      },
      {
        id: 'wr-m1-q2',
        question: 'What does the Maori concept of "whakapapa" refer to?',
        options: ['A type of traditional dance', 'Genealogy and ancestral lineage', 'A method of cooking', 'A style of carving'],
        correct: 1,
        explanation: 'Whakapapa refers to genealogy and ancestral lineage. In Maori culture, identity is defined through one\'s ancestors. Kahu\'s claim to leadership rests on her whakapapa as a descendant of Paikea.',
      },
      {
        id: 'wr-m1-q3',
        question: 'What broader cultural movement does Ihimaera\'s writing belong to?',
        options: ['The Beat Generation', 'The Harlem Renaissance', 'The Maori Renaissance', 'Postmodernism'],
        correct: 2,
        explanation: 'Ihimaera\'s work is part of the Maori Renaissance, a cultural revival from the 1970s onwards that sought to reclaim Maori language, art and traditions in the face of ongoing colonisation effects.',
      },
    ],
  },
  {
    id: 'wr-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>The Whale Rider — Plot &amp; Structure</h2>

<p>The novel alternates between <strong>two narrative strands</strong>: the contemporary story of Kahu and her family, and mythological passages told from the perspective of an <strong>ancient bull whale</strong>. This dual structure connects past and present, myth and reality, suggesting that the ancestral world is not dead but alive and responsive to the present.</p>

<h3>Contemporary Narrative</h3>
<ul>
  <li><strong>Birth and rejection:</strong> Kahu is born, but her twin brother and mother die in childbirth. Her grandfather Koro Apirana is devastated — he wanted a male heir to lead the Ngati Porou people. He rejects Kahu, seeing her gender as a sign that the ancestral line has failed.</li>
  <li><strong>Growing up:</strong> Kahu is raised largely by her grandmother, Nanny Flowers (Nani), who recognises and nurtures her gifts. Kahu adores Koro and desperately seeks his approval, but he refuses to acknowledge her leadership potential.</li>
  <li><strong>The whalesong:</strong> Kahu demonstrates an extraordinary connection to the natural world, particularly to whales. She can hear and respond to the whalesong — a gift that marks her as the true heir to Paikea.</li>
  <li><strong>Koro's school:</strong> Koro establishes a cultural school to find a male leader among the young men of the community. He teaches them traditional chants, history, and the taiaha (a Maori weapon). Kahu secretly learns these skills, outperforming the boys, but Koro refuses to recognise her achievements.</li>
  <li><strong>The whale stranding:</strong> A pod of whales beaches itself on the shore — a catastrophic event that Koro interprets as a sign that the ancestors have abandoned the people. The community struggles to save the whales but fails.</li>
  <li><strong>Kahu's ride:</strong> Kahu rides the ancient bull whale back into the sea, re-enacting the Paikea legend and saving both the whales and her people's spiritual connection to their ancestors. She nearly dies but survives, and Koro finally accepts her as the rightful leader.</li>
</ul>

<h3>The Whale Narrative</h3>
<p>Interspersed chapters tell the story from the <strong>bull whale's perspective</strong>, reaching back thousands of years to the original Paikea. These passages use a <strong>mythic, poetic register</strong> and present the whales as sentient beings with their own history and purpose. The whale has been waiting for a signal from the new rider — Kahu. This narrative strand transforms the novel from a family drama into an <strong>epic of mythological dimensions</strong>.</p>

<div class="key-term"><strong>Key Term: Dual Narrative</strong> — The alternation between Kahu's contemporary story and the whale's mythological perspective. This structure bridges past and present, asserting that Maori mythology is not historical artefact but a living, active force in the present world.</div>

<h3>Structural Techniques</h3>
<ul>
  <li><strong>Climactic structure:</strong> The whale stranding is the novel's crisis point, and Kahu's ride is the climax — a moment of mythological fulfilment that resolves both the family conflict and the ecological crisis.</li>
  <li><strong>Parallelism:</strong> Kahu's story parallels the original Paikea legend. The novel insists that history can repeat — but with a transformative difference (a girl, not a boy, becomes the rider).</li>
  <li><strong>Seasonal movement:</strong> The narrative follows a roughly seasonal arc, connecting human events to natural cycles.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The dual narrative is a crucial AO2 point. Explain how the whale chapters create a sense of mythic inevitability — the whale has been waiting for Kahu, which means her destiny was always written in the ancestral story, even if Koro could not see it.</div>
`,
    quiz: [
      {
        id: 'wr-m2-q1',
        question: 'What two narrative strands does the novel alternate between?',
        options: ['Kahu\'s diary and newspaper reports', 'Kahu\'s contemporary story and the ancient bull whale\'s mythological perspective', 'Two parallel timelines set in different countries', 'First-person and third-person accounts of the same events'],
        correct: 1,
        explanation: 'The novel alternates between Kahu\'s present-day story and mythological chapters told from the whale\'s perspective, bridging past and present to show that ancestral mythology is a living force.',
      },
      {
        id: 'wr-m2-q2',
        question: 'What is the novel\'s climactic event?',
        options: ['Koro establishing the cultural school', 'Kahu learning the taiaha', 'Kahu riding the bull whale back into the sea', 'The death of Kahu\'s mother'],
        correct: 2,
        explanation: 'Kahu riding the whale is the climax, re-enacting the Paikea legend, saving the whales, and proving her right to leadership — resolving both the family and ecological conflicts.',
      },
      {
        id: 'wr-m2-q3',
        question: 'How does Kahu\'s story parallel the original Paikea legend?',
        options: ['Both Paikea and Kahu travel to New Zealand by boat', 'Both ride a whale, but Kahu transforms the legend by being female', 'Both are rejected by their communities', 'Both are warriors who defeat enemies in battle'],
        correct: 1,
        explanation: 'Kahu re-enacts the founding myth of riding a whale, but as a girl — transforming the tradition rather than simply repeating it. This parallelism with difference is central to the novel\'s argument.',
      },
    ],
  },
  {
    id: 'wr-m3',
    title: 'Character Analysis',
    duration: '50 min',
    content: `
<h2>The Whale Rider — Character Analysis</h2>

<h3>Kahu (Paikea)</h3>
<p>Kahu is the novel's <strong>protagonist</strong> — a young Maori girl whose spiritual gifts and determination challenge the patriarchal traditions of her community. She is named after the original Paikea, the whale rider, but her grandfather refuses to recognise the significance of this naming. Kahu is <strong>resilient, loving, and instinctively connected to the natural world</strong>. She does not rebel against tradition; rather, she embodies it more fully than anyone expects. Her ride on the whale is not a rejection of the past but a <strong>fulfilment</strong> of it.</p>

<h3>Koro Apirana</h3>
<p>Koro is Kahu's <strong>grandfather and the chief</strong> of the Ngati Porou community. He is deeply committed to Maori tradition and genuinely fears that without a male heir, his people's culture will die. His rejection of Kahu is not simple misogyny — it is rooted in a <strong>sincere but rigid interpretation of tradition</strong>. Koro is the novel's most complex character: he is both the obstacle to Kahu's destiny and the guardian of the culture that gives that destiny meaning. His final acceptance of Kahu represents growth and the recognition that tradition must evolve to survive.</p>

<h3>Nanny Flowers (Nani)</h3>
<p>Nani is Kahu's <strong>grandmother</strong> — warm, fierce, humorous and perceptive. She recognises Kahu's gifts long before anyone else and quietly nurtures them. Nani represents a <strong>complementary form of cultural wisdom</strong> — one that includes women's knowledge and female strength. She challenges Koro not by rejecting tradition but by insisting that tradition is broader and more inclusive than he allows.</p>

<h3>Rawiri</h3>
<p>Rawiri is Kahu's <strong>uncle and the narrator</strong> of the contemporary chapters. He provides an observant, sometimes self-deprecating perspective on the family's conflicts. Having spent time abroad (in Papua New Guinea and Australia), Rawiri brings an outsider's clarity to events in Whangara while also wrestling with his own sense of cultural identity and belonging.</p>

<h3>The Bull Whale</h3>
<p>The ancient bull whale is more than an animal — he is a <strong>mythological figure</strong>, the original whale who carried Paikea to Aotearoa. He has been waiting across millennia for a new rider. The whale represents the <strong>living force of ancestral tradition</strong> and the interconnection between humans and the natural world. His response to Kahu confirms that the ancestors accept her, even if her human grandfather does not.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best responses will explore Koro as a complex, sympathetic character rather than a simple villain. His resistance to Kahu comes from love of his culture and fear of its loss. Showing this nuance demonstrates sophisticated understanding.</div>
`,
    quiz: [
      {
        id: 'wr-m3-q1',
        question: 'Why does Koro Apirana reject Kahu as a potential leader?',
        options: [
          'Because she is too young',
          'Because he believes only a male heir can fulfil the traditional leadership role',
          'Because she has no connection to the Paikea lineage',
          'Because she refuses to learn Maori customs',
        ],
        correct: 1,
        explanation: 'Koro\'s rejection is rooted in his sincere but rigid interpretation of tradition — he believes the chief must be male. This is not simple misogyny but reflects genuine fear that deviating from tradition will destroy the culture.',
      },
      {
        id: 'wr-m3-q2',
        question: 'What role does Nanny Flowers play in Kahu\'s development?',
        options: [
          'She discourages Kahu from pursuing leadership',
          'She teaches Kahu to reject Maori tradition',
          'She recognises and nurtures Kahu\'s gifts, representing an inclusive form of cultural wisdom',
          'She arranges for Kahu to be raised by another family',
        ],
        correct: 2,
        explanation: 'Nani recognises Kahu\'s spiritual gifts and quietly nurtures them. She represents a form of cultural wisdom that includes women\'s knowledge and challenges Koro\'s narrow interpretation of tradition.',
      },
      {
        id: 'wr-m3-q3',
        question: 'What does the ancient bull whale symbolise in the novel?',
        options: [
          'The danger of the natural world',
          'The living force of ancestral tradition and the interconnection between humans and nature',
          'Koro\'s authority over the community',
          'The decline of Maori culture',
        ],
        correct: 1,
        explanation: 'The bull whale is a mythological figure representing the living force of tradition and the deep connection between Maori people and the natural world. His acceptance of Kahu confirms her ancestral destiny.',
      },
    ],
  },
  {
    id: 'wr-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>The Whale Rider — Themes &amp; Ideas</h2>

<h3>Tradition vs. Change</h3>
<p>The central conflict is between <strong>preserving tradition and allowing it to evolve</strong>. Koro believes that tradition must be maintained exactly as it has always been — including the requirement for male leadership. Kahu's triumph suggests that <strong>tradition is strongest when it adapts</strong>: the essence of the Paikea legend is not about gender but about courage, spiritual connection, and the willingness to lead. Ihimaera argues that culture dies when it becomes rigid, and survives when it remains responsive to new circumstances.</p>

<h3>Gender &amp; Leadership</h3>
<p>The novel challenges the assumption that leadership must be male. Kahu does not reject femininity or try to become masculine — she proves that a girl can fulfil the whale rider prophecy on her own terms. The novel suggests that <strong>true leadership is defined by spiritual qualities and courage, not by gender</strong>. Nanny Flowers and other female characters demonstrate that women have always possessed strength and wisdom, even when patriarchal structures have denied them formal recognition.</p>

<h3>Nature &amp; Ecology</h3>
<p>The relationship between the Maori people and the natural world — particularly the whales — is a central theme. The whale stranding represents a <strong>rupture in the relationship between humanity and nature</strong>, caused by the loss of spiritual connection. Kahu's ride restores this connection. Ihimaera draws on the Maori concept of <strong>kaitiakitanga</strong> (guardianship of the natural world) to argue that ecological harmony requires spiritual awareness — humans must see themselves as part of nature, not separate from it.</p>

<h3>Cultural Identity &amp; Belonging</h3>
<p>Multiple characters wrestle with questions of identity. Rawiri travels overseas and experiences racism and displacement before returning home. Kahu is caught between her grandfather's rejection and her instinctive connection to Maori culture. The novel asserts that <strong>cultural identity is not a museum piece</strong> — it is a living, evolving relationship with one's ancestors, land, and community.</p>

<h3>Love &amp; Family</h3>
<p>Despite the conflict, love underpins every relationship in the novel. Kahu's love for Koro endures despite his rejection. Koro's stubbornness comes from love of his people. Nani's fierce advocacy for Kahu is an act of love. The novel suggests that <strong>love and tradition are intertwined</strong> — the deepest traditions are those sustained by love across generations.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest essays will show how themes interconnect. Gender, tradition and ecology are not separate topics in this novel — Kahu's ride simultaneously challenges gender roles, renews tradition, and restores ecological harmony. Discussing these connections demonstrates conceptualised thinking.</div>
`,
    quiz: [
      {
        id: 'wr-m4-q1',
        question: 'What does Ihimaera suggest about the relationship between tradition and change?',
        options: [
          'Tradition should be abandoned in favour of modernity',
          'Tradition must never change under any circumstances',
          'Tradition is strongest when it adapts to new circumstances while preserving its essential values',
          'Change always destroys cultural identity',
        ],
        correct: 2,
        explanation: 'Ihimaera argues that tradition survives by adapting. The essence of the Paikea legend is courage and spiritual connection, not maleness. Culture dies when rigid but thrives when responsive to change.',
      },
      {
        id: 'wr-m4-q2',
        question: 'What does the whale stranding symbolise?',
        options: [
          'The natural migration patterns of whales',
          'A rupture in the spiritual relationship between humanity and nature',
          'Koro\'s failure as a leader',
          'The effects of climate change',
        ],
        correct: 1,
        explanation: 'The whale stranding represents a breakdown in the spiritual connection between the Maori people and the natural world. Kahu\'s ride restores this connection, demonstrating the novel\'s ecological message.',
      },
      {
        id: 'wr-m4-q3',
        question: 'How does the novel present the theme of gender and leadership?',
        options: [
          'It argues that men are naturally better leaders',
          'It suggests leadership should be abolished',
          'It shows that true leadership is defined by spiritual qualities and courage, not gender',
          'It argues that women should lead instead of men',
        ],
        correct: 2,
        explanation: 'The novel challenges the assumption that leadership must be male. Kahu proves that a girl can fulfil the whale rider prophecy through courage and spiritual connection, redefining what leadership means.',
      },
    ],
  },
  {
    id: 'wr-m5',
    title: 'Language & Style',
    duration: '45 min',
    content: `
<h2>The Whale Rider — Language &amp; Style</h2>

<h3>Narrative Voice</h3>
<p>The contemporary chapters are narrated by <strong>Rawiri</strong> in a warm, conversational first-person voice. His tone is affectionate, sometimes humorous, and deeply embedded in Maori speech patterns. The whale chapters use a contrasting <strong>mythic, incantatory register</strong> — elevated, repetitive, and ritualistic, echoing the oral traditions of Maori storytelling. This <strong>dual register</strong> reinforces the novel's central argument that myth and modernity coexist.</p>

<h3>Te Reo Maori (Maori Language)</h3>
<p>Ihimaera integrates <strong>Maori words and phrases</strong> throughout the text without always translating them: <em>whakapapa</em>, <em>tangi</em>, <em>hui</em>, <em>marae</em>. This is a deliberate political and artistic choice — it asserts the <strong>vitality of the Maori language</strong> and refuses to subordinate it to English. The reader is immersed in a bilingual world, which challenges the dominance of English in New Zealand literature and culture.</p>

<div class="key-term"><strong>Key Term: Code-switching</strong> — The practice of alternating between two languages in conversation or writing. Ihimaera's code-switching between English and te reo Maori reflects the lived experience of Maori communities and asserts the equal status of the Maori language.</div>

<h3>Imagery &amp; Symbolism</h3>
<ul>
  <li><strong>The whale:</strong> Represents ancestry, tradition, and the natural world. The whale is both a literal creature and a mythological being, bridging the physical and spiritual worlds.</li>
  <li><strong>The ocean:</strong> Symbolises both danger and connection — it separates and joins, threatens and sustains. The ocean is the medium through which ancestral journeys are made.</li>
  <li><strong>The whale tooth pendant:</strong> A taonga (treasure) that symbolises leadership and ancestral authority. Kahu's recovery of it from the sea is a key symbolic moment.</li>
</ul>

<h3>Oral Tradition &amp; Repetition</h3>
<p>The novel draws on <strong>Maori oral storytelling traditions</strong>. Repetitive phrases, rhythmic patterns, and direct address to the reader echo the conventions of oral narrative. The whale chapters in particular use <strong>incantatory repetition</strong> — phrases return like refrains, creating a sense of timelessness and ritual. This stylistic choice connects the written novel to the older, oral culture it celebrates.</p>

<h3>Tone</h3>
<p>The novel moves between <strong>humour and pathos</strong>. Rawiri's narration is often lightly comic — his self-deprecating observations and Nani's sharp wit provide warmth and accessibility. But the whale stranding and Kahu's near-death bring deep emotional intensity. This tonal range prevents the novel from becoming either too light or too heavy, reflecting the full spectrum of community life.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Ihimaera's use of te reo Maori is an important AO2 point. Discuss how the integration of Maori language asserts cultural identity and challenges the reader to engage with a world that is not entirely accessible through English alone.</div>
`,
    quiz: [
      {
        id: 'wr-m5-q1',
        question: 'Why does Ihimaera include untranslated Maori words in the novel?',
        options: [
          'Because he could not find English equivalents',
          'To assert the vitality of the Maori language and refuse to subordinate it to English',
          'To make the novel more difficult for international readers',
          'Because the novel was originally written in Maori',
        ],
        correct: 1,
        explanation: 'The integration of untranslated te reo Maori is a deliberate political and artistic choice. It asserts the vitality and equal status of the Maori language and immerses the reader in a bilingual world.',
      },
      {
        id: 'wr-m5-q2',
        question: 'How do the whale chapters differ stylistically from the contemporary narrative?',
        options: [
          'They are written in Maori with English translations',
          'They use a mythic, incantatory register with repetitive, ritualistic language',
          'They are shorter and more action-focused',
          'They are written in third-person omniscient perspective',
        ],
        correct: 1,
        explanation: 'The whale chapters use an elevated, repetitive, ritualistic register that echoes Maori oral storytelling traditions. This contrasts with Rawiri\'s warm, conversational contemporary narrative.',
      },
      {
        id: 'wr-m5-q3',
        question: 'What is the effect of the novel\'s use of oral storytelling conventions?',
        options: [
          'It makes the novel feel old-fashioned and irrelevant',
          'It connects the written novel to the older, oral culture it celebrates, creating timelessness',
          'It confuses the reader with unnecessary repetition',
          'It limits the novel to a Maori-speaking audience',
        ],
        correct: 1,
        explanation: 'The oral storytelling conventions — repetition, rhythm, direct address — connect the written novel to the Maori oral tradition, creating a sense of timelessness and ritual continuity.',
      },
    ],
  },
  {
    id: 'wr-m6',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>The Whale Rider — Exam Practice &amp; Model Response</h2>

<h3>Sample Question</h3>
<div class="sample-question"><strong>Question:</strong> Explore how Ihimaera presents the theme of tradition in <em>The Whale Rider</em>. You must refer to the context of the novel in your answer.</div>

<h3>Planning Your Response</h3>
<ul>
  <li><strong>Thesis:</strong> Ihimaera presents tradition not as a fixed set of rules but as a living force that must evolve to survive, using the conflict between Koro and Kahu to dramatise the tension between preservation and adaptation.</li>
  <li><strong>Point 1:</strong> Koro Apirana as the guardian of tradition — his rigid interpretation of male leadership.</li>
  <li><strong>Point 2:</strong> The whale chapters — tradition as a living, mythological force that transcends human interpretation.</li>
  <li><strong>Point 3:</strong> Kahu's ride — the fulfilment and transformation of the Paikea legend.</li>
  <li><strong>Point 4:</strong> Context — the Maori Renaissance and the reclaiming of indigenous culture in post-colonial New Zealand.</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Ihimaera uses the dual narrative structure to present tradition as a force that exists beyond human control or interpretation. The whale chapters, narrated from the perspective of the ancient bull whale, describe a creature that has been "waiting" across millennia for a new rider. The verb "waiting" implies patience and purpose — tradition is not passive but actively seeking fulfilment. By giving the whale its own voice and consciousness, Ihimaera suggests that tradition is not merely what humans remember or practise; it is embedded in the natural world itself, carried in the bodies and instincts of living creatures. This is a radical departure from Western conceptions of tradition as textual or institutional. In the context of the Maori Renaissance of the 1970s and 1980s, Ihimaera's depiction of tradition as alive and responsive challenges the colonial narrative that indigenous cultures are relics of the past. The whale's eventual recognition of Kahu — a girl — demonstrates that tradition itself is more flexible and inclusive than Koro Apirana's rigid interpretation allows. The ancestors, speaking through the whale, accept what the living grandfather cannot.</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Discuss structure:</strong> The dual narrative is a key craft choice — always explain <em>why</em> Ihimaera uses it and what it achieves.</li>
  <li><strong>Engage with cultural specificity:</strong> Use Maori terms (whakapapa, kaitiakitanga, tikanga) where relevant, showing cultural understanding.</li>
  <li><strong>Avoid oversimplification:</strong> Koro is not a villain — explore the complexity of his position.</li>
  <li><strong>Integrate context:</strong> Connect to post-colonial New Zealand and the Maori Renaissance naturally within your analysis.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners reward cultural sensitivity and specificity. Demonstrating understanding of Maori concepts like whakapapa and kaitiakitanga — and using them accurately — shows the kind of contextual engagement that earns top marks for AO3.</div>
`,
    quiz: [
      {
        id: 'wr-m6-q1',
        question: 'What is the most effective way to discuss Koro Apirana in an exam essay?',
        options: [
          'Describe him as a simple villain who is wrong about everything',
          'Explore his complexity — his rigid interpretation of tradition comes from genuine love and fear for his culture',
          'Ignore him and focus only on Kahu',
          'Compare him to characters in other novels',
        ],
        correct: 1,
        explanation: 'The strongest responses explore Koro as a complex character whose resistance to Kahu comes from sincere love of his culture and genuine fear of its loss. This nuance demonstrates sophisticated understanding.',
      },
      {
        id: 'wr-m6-q2',
        question: 'Why is it valuable to use Maori terms in an essay on The Whale Rider?',
        options: [
          'It makes the essay longer',
          'It demonstrates cultural understanding and contextual engagement, which earns AO3 marks',
          'The examiner requires all essays to be bilingual',
          'Maori terms are easier to spell than English equivalents',
        ],
        correct: 1,
        explanation: 'Using Maori terms like whakapapa and kaitiakitanga accurately demonstrates the cultural understanding and contextual engagement that examiners reward for AO3.',
      },
      {
        id: 'wr-m6-q3',
        question: 'What structural feature of the novel should you discuss for AO2?',
        options: [
          'The chapter numbering system',
          'The dual narrative that alternates between Rawiri\'s contemporary account and the whale\'s mythological perspective',
          'The length of individual paragraphs',
          'The use of footnotes to explain Maori terms',
        ],
        correct: 1,
        explanation: 'The dual narrative is Ihimaera\'s most important structural choice. Explaining why he alternates between contemporary and mythological perspectives — and what this achieves — demonstrates strong AO2 skills.',
      },
    ],
  },
];

const whaleRiderCourse: CourseData = {
  id: 'igcse-lit-prose-whale-rider',
  title: 'The Whale Rider — IGCSE Literature',
  subtitle: 'Witi Ihimaera\'s story of tradition, gender and spiritual connection in Maori New Zealand',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  description: 'A comprehensive IGCSE Literature course on The Whale Rider by Witi Ihimaera, covering context, plot, characters, themes, language and exam technique for the Edexcel 4ET1 specification.',
  color: '#1E6091',
  moduleList: whaleRiderModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. The Joy Luck Club — Amy Tan
// ─────────────────────────────────────────────────────────────────────────────

const jlcModules: CourseModule[] = [
  {
    id: 'jlc-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>The Joy Luck Club — Context &amp; Author Background</h2>

<p><em>The Joy Luck Club</em> was published in <strong>1989</strong> by <strong>Amy Tan</strong> (born 1952). The novel explores the relationships between four Chinese immigrant mothers and their American-born daughters, set primarily in <strong>San Francisco</strong>. Through interwoven stories spanning two generations, Tan examines cultural identity, the immigrant experience, mother-daughter bonds, and the tension between Chinese heritage and American assimilation.</p>

<div class="key-term"><strong>Key Term: Diaspora</strong> — The dispersion of a people from their homeland. The Chinese-American characters in <em>The Joy Luck Club</em> belong to the Chinese diaspora, navigating between the culture of their (or their mothers') homeland and their adopted country.</div>

<h3>Amy Tan — Life &amp; Influences</h3>
<p>Tan was born in <strong>Oakland, California</strong>, to Chinese immigrant parents. Her mother, Daisy, had fled China in 1949, leaving behind three daughters from a previous marriage — a traumatic separation that directly influenced the novel. Tan's relationship with her mother was complex and often fraught, shaped by cultural differences, language barriers, and unspoken trauma. She has described writing the novel as an attempt to understand her mother's experiences and bridge the gap between their worlds.</p>

<h3>Historical Context</h3>
<ul>
  <li><strong>Pre-revolution China:</strong> The mothers' stories are set against the turbulent history of early twentieth-century China — warlord conflicts, the Japanese invasion (1937–1945), arranged marriages, concubinage, and the rigid patriarchal structures of traditional Chinese society.</li>
  <li><strong>Chinese Civil War &amp; Communist Revolution (1949):</strong> The mothers fled China during or after the Communist takeover, leaving behind families, possessions, and their former lives. This traumatic displacement shapes their identities and their relationships with their daughters.</li>
  <li><strong>Chinese-American immigration:</strong> The Chinese Exclusion Act (1882–1943) had severely restricted Chinese immigration to the US. Post-war waves of immigration brought new communities who faced racism, cultural dislocation, and the pressure to assimilate.</li>
  <li><strong>Second-generation identity:</strong> The daughters, born in America, are culturally American but ethnically Chinese. They struggle with their mothers' expectations and with their own sense of belonging in a society that often treats them as outsiders.</li>
</ul>

<h3>The Joy Luck Club</h3>
<p>The title refers to a <strong>mahjong club</strong> founded by the mothers in San Francisco, modelled on a club Suyuan Woo started during the Japanese invasion of China. The club is a space of female solidarity, cultural preservation, and storytelling. It represents the mothers' determination to maintain hope and community despite displacement and loss.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The novel's context spans two countries and several decades. For AO3, focus on the specific historical experiences that shape individual characters — Suyuan's wartime losses, An-mei's mother's story, Lindo's arranged marriage. Precision is more valuable than breadth.</div>
`,
    quiz: [
      {
        id: 'jlc-m1-q1',
        question: 'What is the Joy Luck Club within the novel?',
        options: ['A university social society', 'A mahjong club founded by the immigrant mothers as a space for solidarity and storytelling', 'A Chinese restaurant in San Francisco', 'A political organisation for Chinese-American rights'],
        correct: 1,
        explanation: 'The Joy Luck Club is a mahjong club founded by the mothers in San Francisco. It serves as a space for female solidarity, cultural preservation and storytelling — a way of maintaining Chinese identity in America.',
      },
      {
        id: 'jlc-m1-q2',
        question: 'What major historical event caused the mothers to leave China?',
        options: ['The Cultural Revolution', 'The Opium Wars', 'The Communist Revolution of 1949 and surrounding conflicts', 'The Boxer Rebellion'],
        correct: 2,
        explanation: 'The mothers fled China during or after the Communist Revolution of 1949, a traumatic displacement that left them separated from families and former lives. This shared trauma shapes the novel.',
      },
      {
        id: 'jlc-m1-q3',
        question: 'What personal experience most directly influenced Amy Tan\'s writing of the novel?',
        options: ['Her career as a journalist', 'Her complex relationship with her immigrant mother', 'Her travels across China', 'Her study of Chinese literature at university'],
        correct: 1,
        explanation: 'Tan\'s relationship with her mother — shaped by cultural differences, language barriers and unspoken trauma — directly influenced the novel. She described writing it as an attempt to understand her mother\'s experiences.',
      },
    ],
  },
  {
    id: 'jlc-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>The Joy Luck Club — Plot &amp; Structure</h2>

<p>The novel is structured as a collection of <strong>16 interconnected stories</strong> divided into <strong>four sections</strong>, each with a thematic Chinese parable as an epigraph. Four mothers and four daughters each narrate stories, creating a <strong>polyphonic structure</strong> — multiple voices telling different aspects of the same generational experience.</p>

<h3>Structure Overview</h3>
<ul>
  <li><strong>Section 1 — "Feathers from a Thousand Li Away":</strong> The mothers' stories of their lives in China and the hopes they brought to America. Suyuan Woo's story is told by her daughter Jing-mei, as Suyuan has recently died.</li>
  <li><strong>Section 2 — "The Twenty-Six Malignant Gates":</strong> The daughters' stories of childhood, focusing on their conflicts with their mothers and their struggle to understand the cultural expectations placed upon them.</li>
  <li><strong>Section 3 — "American Translation":</strong> The daughters as adults, navigating relationships, careers, and their ongoing tension with their mothers' values.</li>
  <li><strong>Section 4 — "Queen Mother of the Western Skies":</strong> The mothers speak again, reflecting on their hopes for their daughters and the painful gaps between expectation and reality. Jing-mei travels to China to meet her mother's lost daughters, completing the novel's emotional arc.</li>
</ul>

<div class="key-term"><strong>Key Term: Polyphonic Narrative</strong> — A narrative structure using multiple distinct voices. Tan's use of sixteen narrators creates a tapestry of perspectives that resists any single interpretation and emphasises the diversity of Chinese-American experience.</div>

<h3>Structural Techniques</h3>
<ul>
  <li><strong>Mirroring:</strong> Each mother's story is paired with her daughter's, creating structural parallels that highlight both connection and disconnection between generations.</li>
  <li><strong>Non-linear chronology:</strong> The stories move between past and present, China and America. This non-linear structure mirrors the fragmented experience of immigration — memories intrude on the present, and the past is never fully left behind.</li>
  <li><strong>Framing parables:</strong> Each section opens with a Chinese parable that establishes its theme. These parables function as keys to interpretation, connecting individual stories to universal ideas about motherhood, identity and loss.</li>
  <li><strong>Jing-mei as structural bridge:</strong> Jing-mei (June) Woo narrates her mother's stories as well as her own, serving as a bridge between the generations. Her final journey to China provides the novel with its emotional resolution.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The fragmented, multi-voice structure is a central AO2 feature. Explain how the polyphonic form reflects the fragmented immigrant experience and the difficulty of communication across cultural and generational divides.</div>
`,
    quiz: [
      {
        id: 'jlc-m2-q1',
        question: 'How many interconnected stories make up the novel?',
        options: ['8', '12', '16', '20'],
        correct: 2,
        explanation: 'The novel contains 16 interconnected stories divided into four sections, with each of the eight narrators (four mothers and four daughters) telling their own stories.',
      },
      {
        id: 'jlc-m2-q2',
        question: 'What role does Jing-mei (June) Woo play in the novel\'s structure?',
        options: [
          'She is a minor character who appears only in the final chapter',
          'She serves as a structural bridge, narrating both her mother\'s stories and her own',
          'She narrates the entire novel from a single perspective',
          'She only appears in the Chinese parable sections',
        ],
        correct: 1,
        explanation: 'Jing-mei narrates her deceased mother\'s stories as well as her own, bridging the generational divide. Her journey to China at the end provides the novel\'s emotional resolution.',
      },
      {
        id: 'jlc-m2-q3',
        question: 'What is the effect of the novel\'s non-linear chronology?',
        options: [
          'It makes the plot confusing and impossible to follow',
          'It mirrors the fragmented experience of immigration, where memories of the past intrude on the present',
          'It allows the reader to skip to any chapter without losing understanding',
          'It follows a strict cause-and-effect sequence',
        ],
        correct: 1,
        explanation: 'The non-linear chronology mirrors the immigrant experience — the past is never fully left behind, memories intrude on the present, and identity is constructed from fragments of two worlds.',
      },
    ],
  },
  {
    id: 'jlc-m3',
    title: 'Character Analysis',
    duration: '50 min',
    content: `
<h2>The Joy Luck Club — Character Analysis</h2>

<h3>The Mothers</h3>

<p><strong>Suyuan Woo:</strong> The founder of the Joy Luck Club, both in wartime China and in San Francisco. Suyuan lost twin baby daughters during the Japanese invasion when she was forced to abandon them during her flight. This loss haunts her entire life and drives her relentless hope for her American daughter, Jing-mei. Suyuan dies before the novel begins, and her story is pieced together by Jing-mei — a structural reflection of the difficulty of recovering immigrant histories.</p>

<p><strong>An-mei Hsu:</strong> An-mei's mother was forced into concubinage after being raped, and ultimately committed suicide to free her daughter from the same fate. An-mei learned from her mother's sacrifice that women must speak up for themselves — "I was taught to desire nothing, to swallow other people's misery, to eat my own bitterness. And even though I taught my daughter the opposite, still she came out the same way." This bitter recognition drives her concern for her daughter Rose.</p>

<p><strong>Lindo Jong:</strong> Betrothed in infancy through an arranged marriage, Lindo was trapped in a loveless union but found a way to escape without dishonouring her family — through cleverness rather than confrontation. In America, she worries that her daughter Waverly has lost her Chinese identity and "Chinese face" — the ability to present oneself strategically to the world.</p>

<p><strong>Ying-ying St. Clair:</strong> A once spirited woman who was married to a cruel first husband in China, Ying-ying was traumatised into passivity. In America, she became a "ghost" — invisible and silent. Her story with her daughter Lena explores how trauma can be transmitted across generations when it remains unspoken.</p>

<h3>The Daughters</h3>

<p><strong>Jing-mei (June) Woo:</strong> Jing-mei feels she has always failed to live up to her mother's expectations. Her journey to China to meet her half-sisters represents the reconciliation of her Chinese and American identities and her acceptance of her mother's love.</p>

<p><strong>Rose Hsu Jordan:</strong> Rose is paralysed by indecision in her failing marriage, having internalised the passive role her culture assigned to women. Her mother's story empowers her to find her own voice.</p>

<p><strong>Waverly Jong:</strong> A chess prodigy as a child, Waverly is competitive and successful but struggles with her mother's criticism and her own sense of never being good enough. Her conflict with Lindo is one of the novel's most intense mother-daughter dynamics.</p>

<p><strong>Lena St. Clair:</strong> Lena is trapped in an unequal marriage that mirrors the patriarchal dynamics her mother endured in China. Ying-ying's eventual intervention — smashing the unstable table — symbolises the breaking of inherited passivity.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Note how Tan creates parallels between mothers and daughters. Each daughter unconsciously repeats aspects of her mother's experience. Discussing these parallels demonstrates conceptualised understanding of the novel's structure and themes.</div>
`,
    quiz: [
      {
        id: 'jlc-m3-q1',
        question: 'Why is Suyuan Woo\'s story narrated by her daughter Jing-mei?',
        options: [
          'Because Suyuan did not want to tell her own story',
          'Because Suyuan has died before the novel begins, and Jing-mei must piece together her mother\'s history',
          'Because Jing-mei is the novel\'s only narrator',
          'Because Suyuan could not speak English',
        ],
        correct: 1,
        explanation: 'Suyuan dies before the novel begins, so Jing-mei must reconstruct her mother\'s story. This structural choice reflects the difficulty of recovering immigrant histories and the gap between generations.',
      },
      {
        id: 'jlc-m3-q2',
        question: 'What pattern connects the mothers\' and daughters\' stories?',
        options: [
          'The daughters all reject their mothers completely',
          'Each daughter unconsciously repeats aspects of her mother\'s experience',
          'The mothers and daughters have identical life experiences',
          'The daughters all return to China',
        ],
        correct: 1,
        explanation: 'Tan creates deliberate parallels: each daughter unconsciously repeats aspects of her mother\'s experience, suggesting that unspoken trauma and cultural patterns are transmitted across generations.',
      },
      {
        id: 'jlc-m3-q3',
        question: 'What does Ying-ying St. Clair\'s transformation into a "ghost" represent?',
        options: [
          'Her supernatural abilities',
          'How trauma can render a person invisible and passive when it remains unspoken',
          'Her desire to return to China',
          'Her rejection of her daughter',
        ],
        correct: 1,
        explanation: 'Ying-ying\'s "ghost" status symbolises how unspoken trauma can destroy a person\'s identity and agency. Her passivity is transmitted to her daughter Lena until Ying-ying finally acts to break the cycle.',
      },
    ],
  },
  {
    id: 'jlc-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>The Joy Luck Club — Themes &amp; Ideas</h2>

<h3>Mother-Daughter Relationships</h3>
<p>The novel's central theme is the <strong>complex bond between mothers and daughters</strong>. The mothers' love is fierce and demanding, shaped by their traumatic pasts and their desperate hope that their daughters will have better lives. The daughters experience this love as pressure, criticism and incomprehension. Yet beneath the conflict lies a <strong>deep, almost inexpressible connection</strong>. The novel suggests that understanding between generations requires both sides to listen, to tell their stories, and to acknowledge the pain that silence perpetuates.</p>

<h3>Cultural Identity &amp; Assimilation</h3>
<p>The daughters are caught between two cultures — the Chinese heritage their mothers try to preserve and the American identity they inhabit. This produces a sense of <strong>cultural dislocation</strong>: they are "too American" for their mothers and "too Chinese" for American society. Tan presents cultural identity not as a fixed category but as a <strong>negotiation</strong> — an ongoing process of balancing, blending and sometimes painfully choosing between competing demands.</p>

<h3>Storytelling &amp; Memory</h3>
<p>Storytelling is the primary means of connection in the novel. The mothers' stories — often told in fragments, parables and indirectly — carry cultural wisdom, personal history and emotional truth. The daughters must learn to <strong>listen to and interpret</strong> these stories to understand who they are. The novel itself, structured as a collection of stories, enacts this theme: understanding comes through accumulation, not through a single narrative.</p>

<h3>Sacrifice &amp; Suffering</h3>
<p>Each mother has endured extraordinary suffering — forced marriage, abandonment of children, loss of identity, abuse. Their sacrifices are motivated by love for their daughters, but this love is often expressed as expectation and control. Tan explores the painful dynamic in which <strong>sacrifice creates obligation</strong>: the mothers feel their suffering entitles them to shape their daughters' lives, while the daughters feel crushed by the weight of debts they did not choose.</p>

<h3>Voice &amp; Silence</h3>
<p>Many characters are silenced — by patriarchal cultures, by immigration, by trauma, by the limitations of language. The mothers struggle to communicate in English; the daughters cannot speak Chinese. This <strong>linguistic gap</strong> becomes a metaphor for the broader failure of communication between generations. The novel argues that finding one's voice — whether through language, action or art — is essential for both individual identity and intergenerational connection.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing themes, always connect them to specific stories and characters. "The novel is about cultural identity" is too vague. "Tan uses Jing-mei's journey to China to show that cultural identity must be actively reclaimed, not passively inherited" is specific, analytical and linked to the text.</div>
`,
    quiz: [
      {
        id: 'jlc-m4-q1',
        question: 'What does the novel suggest about cultural identity?',
        options: [
          'Cultural identity is fixed at birth and cannot change',
          'Cultural identity is irrelevant in modern America',
          'Cultural identity is a negotiation — an ongoing process of balancing competing cultural demands',
          'Cultural identity can only be preserved by returning to one\'s homeland',
        ],
        correct: 2,
        explanation: 'Tan presents cultural identity as a negotiation between Chinese heritage and American identity. It is not fixed but requires active engagement with both cultures.',
      },
      {
        id: 'jlc-m4-q2',
        question: 'How does the linguistic gap between mothers and daughters function thematically?',
        options: [
          'It is a minor detail with no thematic significance',
          'It serves as a metaphor for the broader failure of communication between generations and cultures',
          'It shows that the daughters are more intelligent than the mothers',
          'It demonstrates that English is superior to Chinese',
        ],
        correct: 1,
        explanation: 'The mothers\' limited English and the daughters\' inability to speak Chinese creates a linguistic gap that symbolises the broader failure of communication between generations and cultures.',
      },
      {
        id: 'jlc-m4-q3',
        question: 'Why is storytelling important in the novel?',
        options: [
          'It entertains the characters during mahjong games',
          'It is the primary means of intergenerational connection, carrying cultural wisdom and emotional truth',
          'It helps the characters earn money',
          'It is only important to the mothers, not the daughters',
        ],
        correct: 1,
        explanation: 'Storytelling carries cultural wisdom, personal history and emotional truth across generations. The daughters must learn to listen to their mothers\' stories to understand their own identities.',
      },
    ],
  },
  {
    id: 'jlc-m5',
    title: 'Language & Style',
    duration: '45 min',
    content: `
<h2>The Joy Luck Club — Language &amp; Style</h2>

<h3>Multiple Narrative Voices</h3>
<p>Each of the eight narrators has a <strong>distinct voice</strong>. The mothers speak in a register inflected by Chinese syntax and idiom — sentences are often short, direct, and shaped by Chinese storytelling conventions. The daughters speak in standard American English, reflecting their cultural assimilation. This <strong>linguistic differentiation</strong> is one of Tan's most important stylistic choices: the very language of the novel enacts the cultural divide it explores.</p>

<h3>Chinese Storytelling Traditions</h3>
<p>The mothers' narratives draw on <strong>Chinese oral and literary traditions</strong>: parables, folk tales, indirect instruction, and the use of concrete imagery to convey abstract moral lessons. The framing parables at the beginning of each section echo Chinese narrative conventions and create a bridge between Eastern and Western storytelling modes.</p>

<div class="key-term"><strong>Key Term: Parable</strong> — A short, simple story used to illustrate a moral or spiritual lesson. The parables that open each section of the novel function as thematic keys, connecting individual stories to universal truths about motherhood, identity and loss.</div>

<h3>Symbolism &amp; Imagery</h3>
<ul>
  <li><strong>The swan feather:</strong> In the opening parable, a woman brings a swan feather from China to America, intending to give it to her daughter as proof of her good intentions. The feather represents the mothers' hopes and the cultural heritage they wish to pass on — fragile, light, and easily lost or dismissed.</li>
  <li><strong>Mahjong:</strong> The game symbolises strategy, luck, and the interplay between fate and choice. The mothers' mahjong club is a space where cultural identity is preserved through ritual and community.</li>
  <li><strong>Food:</strong> Cooking and eating carry deep symbolic weight. The preparation of Chinese food represents cultural transmission; the daughters' preference for American food represents assimilation.</li>
  <li><strong>Mirrors and reflections:</strong> Several stories use mirrors to explore identity — the gap between how characters see themselves and how others see them.</li>
</ul>

<h3>Tone &amp; Register</h3>
<p>The novel moves between <strong>humour, grief, anger and tenderness</strong>. The mothers' stories often contain devastating revelations delivered in matter-of-fact tones — a stylistic choice that reflects both cultural reserve and the way trauma flattens emotional expression. The daughters' stories tend to be more self-consciously analytical, reflecting their American education and cultural position.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Tan's differentiation of voice between mothers and daughters is a key AO2 point. Discuss how the mothers' Chinese-inflected English and the daughters' standard American English reflect their different cultural positions and create a sense of the linguistic gap between generations.</div>
`,
    quiz: [
      {
        id: 'jlc-m5-q1',
        question: 'How does Tan differentiate the mothers\' and daughters\' narrative voices?',
        options: [
          'The mothers narrate in Chinese and the daughters in English',
          'The mothers\' English is inflected by Chinese syntax and idiom, while the daughters speak standard American English',
          'There is no distinction between the voices',
          'The daughters use more complex vocabulary than the mothers',
        ],
        correct: 1,
        explanation: 'The mothers\' Chinese-inflected English and the daughters\' standard American English reflect their different cultural positions. This linguistic differentiation enacts the novel\'s central theme of cultural divide.',
      },
      {
        id: 'jlc-m5-q2',
        question: 'What does the swan feather in the opening parable symbolise?',
        options: [
          'The weight of immigration paperwork',
          'The mothers\' hopes and the cultural heritage they wish to pass to their daughters',
          'The daughters\' rejection of Chinese culture',
          'The difficulty of cooking Chinese food in America',
        ],
        correct: 1,
        explanation: 'The swan feather represents the mothers\' hopes and the fragile cultural heritage they wish to transmit. It is light and easily dismissed, yet carries immense emotional and symbolic weight.',
      },
      {
        id: 'jlc-m5-q3',
        question: 'What is the effect of the mothers delivering devastating stories in matter-of-fact tones?',
        options: [
          'It shows they do not care about their experiences',
          'It reflects cultural reserve and the way trauma can flatten emotional expression',
          'It makes the stories less impactful',
          'It proves they are unreliable narrators',
        ],
        correct: 1,
        explanation: 'The matter-of-fact tone reflects both Chinese cultural reserve and the numbing effect of trauma on emotional expression. The restraint makes the revelations even more powerful for the reader.',
      },
    ],
  },
  {
    id: 'jlc-m6',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>The Joy Luck Club — Exam Practice &amp; Model Response</h2>

<h3>Sample Question</h3>
<div class="sample-question"><strong>Question:</strong> Explore how Tan presents the difficulties of communication between mothers and daughters in <em>The Joy Luck Club</em>. You must refer to the context of the novel in your answer.</div>

<h3>Planning Your Response</h3>
<ul>
  <li><strong>Thesis:</strong> Tan presents communication failure not as personal inadequacy but as the inevitable consequence of cultural displacement, linguistic barriers and unspoken trauma, using the novel's polyphonic structure to show what the characters themselves cannot say to each other.</li>
  <li><strong>Point 1:</strong> The linguistic gap — mothers' limited English and daughters' lack of Chinese.</li>
  <li><strong>Point 2:</strong> Different modes of expression — mothers use parables and indirect instruction; daughters expect direct communication.</li>
  <li><strong>Point 3:</strong> Silence and unspoken trauma — what is not said is as important as what is.</li>
  <li><strong>Point 4:</strong> Jing-mei's journey to China as a resolution of the communication gap.</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Tan uses the novel's polyphonic structure to dramatise the communication gap between mothers and daughters: the reader hears both sides, but the characters cannot hear each other. An-mei Hsu's bitter reflection — "I was taught to desire nothing, to swallow other people's misery, to eat my own bitterness" — uses a sequence of digestive metaphors that transform emotional suffering into a physical act of consumption. The verbs "swallow" and "eat" suggest that silence is not merely the absence of speech but an active, painful process of internalising pain. The phrase "eat my own bitterness" (chi ku) is a direct translation of a Chinese idiom, and Tan's decision to render it literally in English exposes the linguistic and cultural gap at the heart of the novel. For Chinese-speaking readers, the phrase carries cultural resonance — it invokes centuries of female endurance. For English-speaking readers (including An-mei's daughter Rose), it sounds strange and melodramatic. Tan's stylistic choice makes the reader experience the same interpretive difficulty that the daughters face: the mothers' words carry meanings that do not translate. In the context of Chinese-American immigration, this gap reflects the broader loss that displacement inflicts — not just the loss of homeland but the loss of the linguistic and cultural frameworks through which experience is understood and shared.</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Discuss structure:</strong> The polyphonic form is central — each narrator reveals something the others cannot see.</li>
  <li><strong>Analyse linguistic choices:</strong> Tan's rendering of Chinese idioms in English is a key stylistic technique.</li>
  <li><strong>Connect stories:</strong> Show how different mother-daughter pairs illuminate the same themes from different angles.</li>
  <li><strong>Contextualise precisely:</strong> Link specific characters' experiences to specific historical events.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about a multi-narrator novel, demonstrate that you understand the whole text by drawing examples from multiple stories. Referencing only one mother-daughter pair suggests incomplete knowledge of the novel.</div>
`,
    quiz: [
      {
        id: 'jlc-m6-q1',
        question: 'Why should you draw examples from multiple mother-daughter pairs in an essay?',
        options: [
          'To make the essay longer',
          'Because the examiner requires a minimum number of quotations',
          'To demonstrate knowledge of the whole text and show how different pairs illuminate the same themes',
          'Because each pair tells exactly the same story',
        ],
        correct: 2,
        explanation: 'Drawing from multiple stories demonstrates comprehensive knowledge and shows how different mother-daughter pairs illuminate the same themes from different perspectives — a key strength in a multi-narrator novel.',
      },
      {
        id: 'jlc-m6-q2',
        question: 'What is particularly effective about analysing Tan\'s rendering of Chinese idioms in English?',
        options: [
          'It shows you can speak Chinese',
          'It demonstrates understanding of how language choices reflect cultural gaps and the difficulty of translation',
          'It proves the mothers are uneducated',
          'It is only relevant for linguistic essays, not literary ones',
        ],
        correct: 1,
        explanation: 'Analysing how Tan renders Chinese idioms in English demonstrates sophisticated understanding of how language choices reflect cultural gaps. It is an excellent AO2 point that also connects to AO3.',
      },
      {
        id: 'jlc-m6-q3',
        question: 'What makes the polyphonic structure a strong AO2 discussion point?',
        options: [
          'It proves the novel is well-written',
          'The reader hears what characters cannot hear from each other, dramatising the communication gap',
          'It creates a simple, linear plot',
          'It is an unusual feature that no other novel uses',
        ],
        correct: 1,
        explanation: 'The polyphonic structure means the reader hears both mothers\' and daughters\' perspectives, understanding what the characters themselves cannot communicate. This structural irony is a powerful AO2 point.',
      },
    ],
  },
];

const jlcCourse: CourseData = {
  id: 'igcse-lit-prose-joy-luck-club',
  title: 'The Joy Luck Club — IGCSE Literature',
  subtitle: 'Amy Tan\'s interwoven stories of Chinese immigrant mothers and their American daughters',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  description: 'A comprehensive IGCSE Literature course on The Joy Luck Club by Amy Tan, covering context, plot, characters, themes, language and exam technique for the Edexcel 4ET1 specification.',
  color: '#C41E3A',
  moduleList: jlcModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. Things Fall Apart — Chinua Achebe
// ─────────────────────────────────────────────────────────────────────────────

const tfaModules: CourseModule[] = [
  {
    id: 'tfa-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>Things Fall Apart — Context &amp; Author Background</h2>

<p><em>Things Fall Apart</em> was published in <strong>1958</strong> by <strong>Chinua Achebe</strong> (1930–2013). Set in the fictional Igbo village of <strong>Umuofia</strong> in what is now southeastern <strong>Nigeria</strong>, the novel tells the story of <strong>Okonkwo</strong>, a respected warrior and leader, whose world is shattered by the arrival of European missionaries and colonial administrators. It is considered one of the most important novels in African literature and has been translated into over 50 languages.</p>

<div class="key-term"><strong>Key Term: Post-colonial Literature</strong> — Literature written by authors from formerly colonised nations that engages with the legacy of colonialism. <em>Things Fall Apart</em> is a foundational post-colonial text that challenges European representations of Africa and asserts the complexity and value of pre-colonial African culture.</div>

<h3>Chinua Achebe — Life &amp; Influences</h3>
<p>Achebe was born in <strong>Ogidi, Nigeria</strong>, into an Igbo family that had converted to Christianity — a position that gave him insight into both traditional Igbo culture and Western colonial influence. He studied at the University of Ibadan and worked for the Nigerian Broadcasting Corporation before publishing <em>Things Fall Apart</em> at the age of 28. Achebe was motivated by a desire to <strong>correct the distorted image of Africa</strong> presented in European literature, most notably Joseph Conrad's <em>Heart of Darkness</em> (1899), which Achebe famously criticised as racist.</p>

<h3>Historical Context</h3>
<ul>
  <li><strong>Pre-colonial Igbo society:</strong> Before European contact, Igbo communities were organised around a complex system of clans, councils, and religious practices. There was no centralised king — governance was communal, based on age, achievement, and titled status. Achebe portrays this society in rich detail to counter the European myth that pre-colonial Africa was "primitive."</li>
  <li><strong>The Scramble for Africa (1881–1914):</strong> European powers carved up the African continent, imposing colonial rule. Nigeria became a British protectorate in 1901. The novel is set during this period of first contact and conquest.</li>
  <li><strong>Christian missionaries:</strong> Missionaries arrived before colonial administrators, establishing schools and churches that attracted converts — often those marginalised by traditional society (outcasts, women, twins). This created divisions within communities.</li>
  <li><strong>Nigerian independence (1960):</strong> Achebe published the novel two years before Nigerian independence, making it both a historical novel and a political intervention in the decolonisation process.</li>
</ul>

<h3>Achebe vs. Conrad</h3>
<p>Achebe wrote <em>Things Fall Apart</em> partly in response to <strong>European novels that depicted Africans as savages</strong>. Conrad's <em>Heart of Darkness</em> portrays Africa as a place of primordial darkness and its people as barely human. Achebe's novel inverts this: it shows a sophisticated, functioning society with its own art, religion, law and philosophy — a society that is then disrupted by European intervention.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For AO3, emphasise that Achebe is not romanticising pre-colonial Igbo society. He depicts its flaws — the treatment of twins, the violence of certain customs, Okonkwo's toxic masculinity — alongside its strengths. This balanced portrayal is what makes the novel so powerful.</div>
`,
    quiz: [
      {
        id: 'tfa-m1-q1',
        question: 'What was Achebe\'s primary motivation for writing Things Fall Apart?',
        options: [
          'To entertain Western readers with exotic stories',
          'To correct the distorted image of Africa presented in European literature',
          'To support the British colonial project in Nigeria',
          'To write a historical textbook about Igbo culture',
        ],
        correct: 1,
        explanation: 'Achebe was motivated by a desire to correct European misrepresentations of Africa — particularly the racist depictions in novels like Conrad\'s Heart of Darkness — and to assert the complexity of pre-colonial African culture.',
      },
      {
        id: 'tfa-m1-q2',
        question: 'When was the novel published in relation to Nigerian independence?',
        options: ['Ten years after independence', 'Two years before independence in 1960', 'During World War II', 'In the 1970s'],
        correct: 1,
        explanation: 'Published in 1958, two years before Nigerian independence in 1960, the novel served as both a historical account and a political intervention in the decolonisation process.',
      },
      {
        id: 'tfa-m1-q3',
        question: 'How does Achebe present pre-colonial Igbo society?',
        options: [
          'As a perfect, idyllic civilisation without flaws',
          'As a primitive society that needed European civilisation',
          'As a complex society with both strengths and flaws, countering European stereotypes',
          'As identical to European society in every way',
        ],
        correct: 2,
        explanation: 'Achebe presents Igbo society as complex and sophisticated while also depicting its flaws. This balanced portrayal is more powerful than idealisation because it treats African culture with the same nuance given to any human society.',
      },
    ],
  },
  {
    id: 'tfa-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>Things Fall Apart — Plot &amp; Structure</h2>

<p>The novel is divided into <strong>three parts</strong> across <strong>25 chapters</strong>. This three-part structure mirrors the trajectory of colonisation: <strong>Part One</strong> establishes the richness of Igbo life; <strong>Part Two</strong> depicts Okonkwo's exile and the arrival of missionaries; <strong>Part Three</strong> shows the destruction of traditional society.</p>

<h3>Part One (Chapters 1–13) — Umuofia Before Colonialism</h3>
<p>Part One immerses the reader in the daily life, ceremonies, beliefs and social structures of Umuofia. Okonkwo is established as a successful, respected warrior driven by fear of being seen as weak like his father Unoka. Key events include:</p>
<ul>
  <li>Okonkwo's rise from poverty to prominence through wrestling and farming.</li>
  <li>The arrival of Ikemefuna, a boy given to Umuofia as compensation, who lives with Okonkwo's family for three years.</li>
  <li>The killing of Ikemefuna — Okonkwo participates against the advice of the elder Ezeudu, because he is afraid of appearing weak. This is a pivotal moment that reveals Okonkwo's tragic flaw.</li>
  <li>Okonkwo accidentally kills Ezeudu's son at a funeral and is exiled for seven years.</li>
</ul>

<h3>Part Two (Chapters 14–19) — Exile in Mbanta</h3>
<p>Okonkwo lives with his mother's family in Mbanta. During his exile, <strong>Christian missionaries arrive</strong>, led by Mr Brown, and begin converting members of the community — particularly outcasts and those marginalised by traditional society. Okonkwo is horrified but powerless. His son <strong>Nwoye converts to Christianity</strong>, representing the breakdown of the patriarchal family structure and the appeal of the new religion to those who suffered under the old order.</p>

<h3>Part Three (Chapters 20–25) — Return and Destruction</h3>
<p>Okonkwo returns to Umuofia to find it transformed. The church and the colonial district commissioner have established authority. When the new, aggressive missionary Reverend Smith provokes a crisis and Okonkwo leads a violent response, the community fails to unite behind him. Okonkwo kills a colonial messenger, realises his people will not fight, and <strong>hangs himself</strong> — an act considered an abomination in Igbo culture, meaning he cannot be buried by his own people.</p>

<div class="key-term"><strong>Key Term: Tragic Structure</strong> — The novel follows the arc of classical tragedy: a great man is brought down by a combination of external forces and an internal flaw (hamartia). Okonkwo's fear of weakness drives him to inflexibility, making him unable to adapt to the changing world.</div>

<h3>The Final Paragraph</h3>
<p>The novel's devastating final paragraph shifts perspective to the <strong>District Commissioner</strong>, who plans to write a book about the "pacification" of the "primitive tribes." He reduces Okonkwo's entire life to a paragraph. This ending exposes the <strong>violence of colonial representation</strong> — the erasure of complex lives into simplistic, self-serving narratives.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The final paragraph is one of the most important structural moments in the novel. Discuss how the shift in perspective from Okonkwo to the Commissioner enacts the very process of colonial erasure that Achebe wrote the novel to resist.</div>
`,
    quiz: [
      {
        id: 'tfa-m2-q1',
        question: 'How does the novel\'s three-part structure mirror the process of colonisation?',
        options: [
          'Part One shows European arrival, Part Two the resistance, Part Three independence',
          'Part One establishes Igbo life, Part Two depicts the arrival of missionaries, Part Three shows the destruction of traditional society',
          'All three parts focus equally on colonial and pre-colonial life',
          'The structure has no connection to colonisation',
        ],
        correct: 1,
        explanation: 'The three-part structure mirrors colonisation: Part One immerses the reader in pre-colonial Igbo culture, Part Two introduces the missionaries, and Part Three shows the destruction of traditional society.',
      },
      {
        id: 'tfa-m2-q2',
        question: 'What is the significance of the novel\'s final paragraph?',
        options: [
          'It provides a happy resolution to the story',
          'It shifts to the District Commissioner\'s perspective, exposing how colonialism reduces complex lives to simplistic narratives',
          'It describes Okonkwo\'s funeral in detail',
          'It introduces a sequel to the novel',
        ],
        correct: 1,
        explanation: 'The final paragraph shifts to the Commissioner\'s perspective, showing how he plans to reduce Okonkwo\'s life to a paragraph in his colonial account. This enacts the erasure that Achebe wrote the novel to resist.',
      },
      {
        id: 'tfa-m2-q3',
        question: 'Why is the killing of Ikemefuna a pivotal moment in the novel?',
        options: [
          'It shows that Okonkwo is naturally violent',
          'It reveals Okonkwo\'s tragic flaw — his participation against wise advice, driven by fear of appearing weak',
          'It is the moment the missionaries arrive',
          'It leads directly to Okonkwo\'s exile',
        ],
        correct: 1,
        explanation: 'Okonkwo participates in Ikemefuna\'s killing despite being advised not to, because he fears appearing weak. This reveals his hamartia — the rigid masculinity that drives his downfall.',
      },
    ],
  },
  {
    id: 'tfa-m3',
    title: 'Character Analysis',
    duration: '50 min',
    content: `
<h2>Things Fall Apart — Character Analysis</h2>

<h3>Okonkwo</h3>
<p>Okonkwo is the novel's <strong>tragic protagonist</strong>. He is a powerful wrestler, successful farmer and respected warrior in Umuofia. His entire identity is built in opposition to his father, <strong>Unoka</strong>, whom he considers lazy and weak. This drives Okonkwo's relentless pursuit of masculine achievement and his deep-seated <strong>fear of failure and weakness</strong> — his hamartia.</p>

<p>Okonkwo's rigidity is both his strength and his downfall. He cannot show tenderness (though he feels it), cannot adapt to change, and cannot tolerate any perceived softness in himself or others. When colonialism disrupts the world he has built, he is incapable of the flexibility needed to survive. His suicide is the ultimate contradiction: the act that his culture considers the greatest weakness is the only response left to a man who has defined himself entirely through strength.</p>

<div class="key-term"><strong>Key Quotation:</strong> "His whole life was dominated by fear, the fear of failure and of weakness... It was the fear of himself, lest he should be found to resemble his father." — This passage identifies Okonkwo's hamartia and the psychological driver of all his actions.</div>

<h3>Unoka</h3>
<p>Okonkwo's father was a musician, debtor and lover of life who died in disgrace. Unoka represents the qualities Okonkwo rejects — <strong>gentleness, artistry, emotional openness</strong>. Yet Achebe presents Unoka sympathetically, suggesting that Okonkwo's rejection of his father's qualities is itself a form of weakness, not strength.</p>

<h3>Nwoye</h3>
<p>Okonkwo's eldest son inherits his grandfather's sensitivity rather than his father's aggression. Traumatised by the killing of Ikemefuna (whom he loved as a brother), Nwoye is drawn to Christianity, which offers a <strong>gentler alternative</strong> to the demanding masculinity of his father's world. His conversion represents both a personal liberation and a cultural loss.</p>

<h3>Ezinma</h3>
<p>Okonkwo's daughter is his favourite child — he often wishes she had been a boy. Ezinma is intelligent, spirited, and emotionally perceptive. She represents the qualities that Okonkwo values but cannot recognise in female form, highlighting the <strong>limitations of his rigid gender ideology</strong>.</p>

<h3>Obierika</h3>
<p>Okonkwo's closest friend serves as a <strong>foil and moral compass</strong>. Unlike Okonkwo, Obierika questions traditions he finds unjust (such as the abandonment of twins) and is capable of nuanced, reflective thought. He represents the possibility of engaging critically with one's own culture — a capacity that Okonkwo lacks.</p>

<h3>The Missionaries</h3>
<p><strong>Mr Brown</strong> represents a more moderate form of colonialism — he builds relationships with the community and discourages confrontation. <strong>Reverend Smith</strong>, his successor, is rigid and provocative, triggering the crisis that leads to Okonkwo's death. Achebe does not present all colonisers as identical — he distinguishes between approaches while showing that both ultimately serve the same colonial project.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Avoid treating Okonkwo as either a hero or a villain. The strongest responses explore his complexity: he is a product of his culture's values, both empowered and destroyed by them. His tragedy is that the very qualities that made him great also make him incapable of surviving change.</div>
`,
    quiz: [
      {
        id: 'tfa-m3-q1',
        question: 'What is Okonkwo\'s hamartia (tragic flaw)?',
        options: [
          'His physical weakness',
          'His fear of failure and weakness, which drives him to rigidity and violence',
          'His inability to farm successfully',
          'His lack of intelligence',
        ],
        correct: 1,
        explanation: 'Okonkwo\'s hamartia is his deep-seated fear of being seen as weak like his father. This drives his relentless aggression and rigidity, making him unable to adapt when his world changes.',
      },
      {
        id: 'tfa-m3-q2',
        question: 'Why is Nwoye\'s conversion to Christianity significant?',
        options: [
          'It shows that Christianity is superior to Igbo religion',
          'It represents both a personal liberation from his father\'s oppressive masculinity and a cultural loss',
          'It is a minor subplot with no thematic importance',
          'It shows Nwoye\'s desire for Western education',
        ],
        correct: 1,
        explanation: 'Nwoye\'s conversion represents liberation from his father\'s demanding masculinity but also cultural loss. Christianity attracts those marginalised by traditional society, showing how colonialism exploits internal divisions.',
      },
      {
        id: 'tfa-m3-q3',
        question: 'What role does Obierika play in the novel?',
        options: [
          'He is Okonkwo\'s enemy who betrays him',
          'He serves as a foil and moral compass, capable of questioning traditions that Okonkwo accepts unthinkingly',
          'He is the village priest',
          'He is the first person to convert to Christianity',
        ],
        correct: 1,
        explanation: 'Obierika is Okonkwo\'s reflective, questioning friend who serves as a foil. Unlike Okonkwo, he can engage critically with his own culture, representing a more adaptive form of cultural engagement.',
      },
    ],
  },
  {
    id: 'tfa-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>Things Fall Apart — Themes &amp; Ideas</h2>

<h3>Colonialism &amp; Cultural Destruction</h3>
<p>The novel depicts the <strong>systematic dismantling of Igbo culture</strong> by European colonialism. This destruction operates on multiple levels: religious (missionaries replace Igbo beliefs with Christianity), political (colonial administrators replace communal governance with imposed authority), economic (traditional systems are disrupted), and linguistic (English replaces Igbo as the language of power). Achebe shows colonialism not as a sudden invasion but as a <strong>gradual erosion</strong> — exploiting existing divisions and vulnerabilities within the community.</p>

<h3>Masculinity &amp; Gender</h3>
<p>Okonkwo's rigid conception of masculinity is central to the novel. He associates masculinity with aggression, stoicism and control, and despises anything he considers "womanly" — including emotion, gentleness and his own father's qualities. Achebe explores how <strong>toxic masculinity</strong> damages individuals and communities: Okonkwo's violence towards his wives and children, his participation in Ikemefuna's death, and his ultimate inability to adapt are all consequences of his rigid gender ideology.</p>

<h3>Tradition &amp; Change</h3>
<p>The novel asks what happens when a traditional society encounters an external force that demands change. Achebe does not romanticise tradition — he depicts customs that are cruel (the abandonment of twins, the treatment of osu) alongside those that are beautiful and functional. The tragedy is not that change occurs, but that <strong>colonialism imposes change through violence and erasure</strong> rather than through dialogue and mutual respect.</p>

<h3>Individual vs. Community</h3>
<p>Igbo society is communal — decisions are made collectively, proverbs carry the wisdom of the group, and individual identity is bound up with clan identity. Okonkwo's tragedy is partly that he acts as an <strong>individual in a communal culture</strong>. His killing of the messenger is a unilateral act that his community does not endorse, and his suicide is the ultimate act of isolation — he dies alone, unable to be buried by his people.</p>

<h3>Language &amp; Storytelling</h3>
<p>Proverbs are central to Igbo communication — <strong>"proverbs are the palm-oil with which words are eaten."</strong> This emphasis on language and oral tradition demonstrates the sophistication of a culture that European colonisers dismissed as primitive. Achebe's own use of English to tell an African story is itself a complex act — he appropriates the coloniser's language to challenge the coloniser's narrative.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest essays recognise that Achebe criticises both colonialism and certain aspects of traditional Igbo society. The novel does not present a simple opposition between a perfect African past and an evil European intrusion — it explores the complexity of cultural change and loss.</div>
`,
    quiz: [
      {
        id: 'tfa-m4-q1',
        question: 'How does Achebe present colonialism in the novel?',
        options: [
          'As a sudden, violent invasion',
          'As a gradual erosion that exploits existing divisions within the community',
          'As a positive force for progress',
          'As irrelevant to the main story',
        ],
        correct: 1,
        explanation: 'Achebe shows colonialism as a gradual process that exploits internal vulnerabilities — attracting converts among the marginalised, replacing institutions slowly, and eroding cultural confidence before imposing direct control.',
      },
      {
        id: 'tfa-m4-q2',
        question: 'What does the proverb "proverbs are the palm-oil with which words are eaten" demonstrate?',
        options: [
          'That Igbo people only communicate through proverbs',
          'The sophistication of Igbo oral culture and the centrality of language to social life',
          'That food is more important than language in Igbo society',
          'That Igbo culture is focused on cooking',
        ],
        correct: 1,
        explanation: 'This proverb demonstrates the sophistication of Igbo oral culture and the central role of language in social communication. Proverbs carry communal wisdom and are essential to respected speech.',
      },
      {
        id: 'tfa-m4-q3',
        question: 'How does Okonkwo\'s rigid masculinity contribute to his downfall?',
        options: [
          'It makes him a more effective leader',
          'It has no connection to his fate',
          'It makes him incapable of adaptation, tenderness, or the flexibility needed to survive cultural change',
          'It helps him unite the community against colonialism',
        ],
        correct: 2,
        explanation: 'Okonkwo\'s rigid masculinity prevents him from adapting to change, showing tenderness, or accepting compromise. The very qualities that made him successful in the old order make him incapable of surviving the new one.',
      },
    ],
  },
  {
    id: 'tfa-m5',
    title: 'Language & Style',
    duration: '45 min',
    content: `
<h2>Things Fall Apart — Language &amp; Style</h2>

<h3>English with Igbo Rhythms</h3>
<p>Achebe writes in English but infuses it with <strong>Igbo syntax, proverbs, and speech patterns</strong>. He does not translate Igbo culture into Western terms but renders it in an English that feels distinctly African. This is a deliberate artistic and political choice — Achebe described it as creating a new English "able to carry the weight of my African experience." Words like <em>chi</em> (personal god), <em>osu</em> (outcast), and <em>egwugwu</em> (masked spirits) are left untranslated, requiring the reader to engage with Igbo culture on its own terms.</p>

<div class="key-term"><strong>Key Term: Appropriation of Language</strong> — Achebe's decision to write in English — the coloniser's language — is itself a political act. He appropriates English to challenge the narratives that English literature had constructed about Africa, turning the colonial language into a tool of anti-colonial resistance.</div>

<h3>Proverbs</h3>
<p>Proverbs are woven throughout the narrative and dialogue, reflecting their centrality in Igbo communication. They convey moral lessons, demonstrate social status, and create a sense of communal wisdom. Examples include: "When the moon is shining the cripple becomes hungry for a walk" and "A toad does not run in the daytime for nothing." The density of proverbial language in Part One, and its gradual disappearance in Part Three, structurally mirrors the erosion of Igbo culture.</p>

<h3>Third-Person Narration</h3>
<p>The novel uses a <strong>third-person omniscient narrator</strong> who is culturally embedded in Igbo society. The narrator explains customs, beliefs and social structures from the inside, without the distancing or exoticising gaze of a Western observer. This narrative position is crucial: it treats Igbo culture as the <strong>norm</strong>, and it is the European missionaries who appear strange and disruptive.</p>

<h3>Tone</h3>
<p>Achebe's tone is <strong>measured, restrained and dignified</strong>. He does not write with anger or sentimentality but with a calm clarity that makes the tragedy more powerful. The prose has a <strong>biblical quality</strong> — simple sentences, paratactic structures, and a gravity that befits the subject matter. This restraint is itself a political choice: Achebe refuses to perform emotion for a Western audience, instead trusting the events to speak for themselves.</p>

<h3>Symbolism</h3>
<ul>
  <li><strong>Fire:</strong> Okonkwo is repeatedly associated with fire — passion, destruction, and the inability to sustain life. His nickname is "Roaring Flame," but fire burns out.</li>
  <li><strong>Yams:</strong> Represent masculinity, prosperity and social status in Igbo culture. Okonkwo's success is measured in yams.</li>
  <li><strong>The locusts:</strong> Their arrival foreshadows the coming of the colonisers — initially welcomed as food but ultimately destructive.</li>
  <li><strong>The knotted rope:</strong> Okonkwo's suicide by hanging inverts the warrior's death he desired, symbolising the ultimate failure of his rigid identity.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Achebe's use of proverbs is a rich AO2 topic. Discuss not just what the proverbs mean but what their presence (and eventual absence) tells us about the health of Igbo culture. The decline of proverbial language in Part Three mirrors the decline of the culture itself.</div>
`,
    quiz: [
      {
        id: 'tfa-m5-q1',
        question: 'Why does Achebe leave Igbo words untranslated in the novel?',
        options: [
          'Because he forgot to include a glossary',
          'To require the reader to engage with Igbo culture on its own terms, rather than through Western frameworks',
          'Because the words have no English equivalent',
          'To make the novel more difficult to read',
        ],
        correct: 1,
        explanation: 'Leaving Igbo words untranslated is a deliberate choice that requires the reader to engage with Igbo culture on its own terms. It refuses to subordinate Igbo concepts to Western frameworks of understanding.',
      },
      {
        id: 'tfa-m5-q2',
        question: 'What is the significance of the locusts as a symbol?',
        options: [
          'They represent the abundance of Igbo farming',
          'They foreshadow the colonisers — initially welcomed but ultimately destructive',
          'They symbolise Okonkwo\'s anger',
          'They represent the rainy season',
        ],
        correct: 1,
        explanation: 'The locusts are initially welcomed as food but arrive in overwhelming numbers. They foreshadow the colonisers, who are similarly welcomed at first but prove ultimately destructive to Igbo society.',
      },
      {
        id: 'tfa-m5-q3',
        question: 'What happens to the use of proverbs across the three parts of the novel?',
        options: [
          'Proverbs increase in frequency from Part One to Part Three',
          'Proverbs are used consistently throughout',
          'Proverbs are dense in Part One and gradually disappear in Part Three, mirroring the erosion of Igbo culture',
          'Proverbs are only used by the missionaries',
        ],
        correct: 2,
        explanation: 'The decline of proverbial language from Part One to Part Three structurally mirrors the erosion of Igbo culture under colonialism. As the culture weakens, its linguistic richness fades.',
      },
    ],
  },
  {
    id: 'tfa-m6',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Things Fall Apart — Exam Practice &amp; Model Response</h2>

<h3>Sample Question</h3>
<div class="sample-question"><strong>Question:</strong> Explore how Achebe presents the impact of colonialism on Igbo society in <em>Things Fall Apart</em>. You must refer to the context of the novel in your answer.</div>

<h3>Planning Your Response</h3>
<ul>
  <li><strong>Thesis:</strong> Achebe presents colonialism not as a single dramatic event but as a gradual erosion that exploits existing vulnerabilities within Igbo society, using the novel's three-part structure to mirror the process of cultural destruction.</li>
  <li><strong>Point 1:</strong> Part One — the richness and complexity of pre-colonial Igbo culture, establishing what is at stake.</li>
  <li><strong>Point 2:</strong> The missionaries' strategy of targeting the marginalised — outcasts, mothers of twins, Nwoye.</li>
  <li><strong>Point 3:</strong> The final paragraph — the District Commissioner's book as an act of colonial erasure.</li>
  <li><strong>Point 4:</strong> Context — the Scramble for Africa and Achebe's response to European literary representations.</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Achebe uses the novel's devastating final paragraph to expose how colonialism destroys not only societies but also the stories those societies tell about themselves. After Okonkwo's death, the narrative perspective shifts abruptly to the District Commissioner, who reflects that Okonkwo's story "would make interesting reading" and might merit "a reasonable paragraph" in his planned book, <em>The Pacification of the Primitive Tribes of the Lower Niger</em>. The word "pacification" is a euphemism that transforms colonial violence into benign administration, while "primitive" dismisses centuries of sophisticated culture with a single adjective. By placing this sentence at the very end of the novel, Achebe creates a structural juxtaposition: the reader has just spent 25 chapters immersed in the complexity of Okonkwo's world, only to see it reduced to a "reasonable paragraph" by a man who understands nothing of it. This is Achebe's most powerful statement about colonialism — it does not merely conquer; it rewrites. The entire novel functions as Achebe's counter-narrative: the 25 chapters are the story that the Commissioner's single paragraph would erase. Writing in 1958, two years before Nigerian independence, Achebe was not only recording a historical trauma but arguing that decolonisation must include the reclaiming of narrative — the right to tell one's own story.</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Analyse the three-part structure:</strong> Show how the novel's form mirrors the process it describes.</li>
  <li><strong>Discuss Achebe's use of English:</strong> The appropriation of the colonial language is itself a key theme.</li>
  <li><strong>Avoid simple binaries:</strong> Do not present Igbo culture as perfect and colonialism as entirely evil — Achebe is more nuanced than this.</li>
  <li><strong>Use specific examples:</strong> Reference particular proverbs, scenes, or characters to support your points.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The final paragraph is one of the most analysed passages in world literature. If you discuss it, you must offer fresh analysis — do not simply describe what happens. Focus on specific word choices ("pacification," "primitive," "reasonable paragraph") and explain their effects.</div>
`,
    quiz: [
      {
        id: 'tfa-m6-q1',
        question: 'Why is the District Commissioner\'s planned book title significant?',
        options: [
          'It accurately describes the events of the novel',
          'The words "pacification" and "primitive" expose how colonial language transforms violence into benign administration and dismisses complex cultures',
          'It shows the Commissioner is a talented writer',
          'It is a minor detail with no thematic importance',
        ],
        correct: 1,
        explanation: 'The title "The Pacification of the Primitive Tribes of the Lower Niger" uses euphemism ("pacification") and dismissal ("primitive") to expose how colonial language rewrites history and erases cultural complexity.',
      },
      {
        id: 'tfa-m6-q2',
        question: 'How does the novel\'s three-part structure serve Achebe\'s purpose?',
        options: [
          'It follows the conventions of European novel writing',
          'It mirrors the process of colonisation: cultural richness, gradual erosion, and destruction',
          'It divides the novel into equal-length sections for easy reading',
          'It reflects the three seasons of the Igbo calendar',
        ],
        correct: 1,
        explanation: 'The three-part structure mirrors colonisation itself: Part One establishes what is at stake, Part Two shows the beginning of cultural erosion, and Part Three depicts destruction. Form mirrors content.',
      },
      {
        id: 'tfa-m6-q3',
        question: 'What approach should you avoid when writing about Things Fall Apart?',
        options: [
          'Using specific quotations from the text',
          'Discussing the novel\'s structure',
          'Presenting simple binaries of perfect Igbo culture versus entirely evil colonialism',
          'Connecting the novel to its historical context',
        ],
        correct: 2,
        explanation: 'Achebe is more nuanced than a simple binary. He depicts flaws within Igbo society alongside its strengths, and distinguishes between different colonial approaches. The best essays engage with this complexity.',
      },
    ],
  },
];

const tfaCourse: CourseData = {
  id: 'igcse-lit-prose-things-fall-apart',
  title: 'Things Fall Apart — IGCSE Literature',
  subtitle: 'Chinua Achebe\'s groundbreaking novel of colonialism, tradition and cultural destruction in Nigeria',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  description: 'A comprehensive IGCSE Literature course on Things Fall Apart by Chinua Achebe, covering context, plot, characters, themes, language and exam technique for the Edexcel 4ET1 specification.',
  color: '#8B0000',
  moduleList: tfaModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. Klara and the Sun — Kazuo Ishiguro
// ─────────────────────────────────────────────────────────────────────────────

const klaraModules: CourseModule[] = [
  {
    id: 'klara-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>Klara and the Sun — Context &amp; Author Background</h2>

<p><em>Klara and the Sun</em> was published in <strong>2021</strong> by <strong>Kazuo Ishiguro</strong> (born 1954). Ishiguro, a British novelist of Japanese origin, was awarded the <strong>Nobel Prize in Literature in 2017</strong>. The novel is narrated by <strong>Klara</strong>, an <strong>Artificial Friend (AF)</strong> — a solar-powered robot designed to be a companion for children. Set in a near-future America, the novel explores artificial intelligence, human connection, social inequality and what it means to love.</p>

<div class="key-term"><strong>Key Term: Speculative Fiction</strong> — A genre that imagines alternative realities, often set in the future, to explore philosophical or social questions. <em>Klara and the Sun</em> uses a near-future setting to ask fundamental questions about consciousness, love and what makes a human being unique.</div>

<h3>Kazuo Ishiguro — Life &amp; Influences</h3>
<p>Ishiguro was born in <strong>Nagasaki, Japan</strong>, and moved to England with his family at the age of five. His novels are characterised by <strong>restrained, precise prose</strong>, unreliable narrators, and explorations of memory, loss and self-deception. <em>Never Let Me Go</em> (2005), his earlier novel about human clones, shares thematic territory with <em>Klara and the Sun</em> — both examine what it means to be human through the lens of beings who are not fully accepted as such.</p>

<h3>Technological Context</h3>
<p>The novel engages with contemporary anxieties about <strong>artificial intelligence</strong>:</p>
<ul>
  <li><strong>AI and consciousness:</strong> As AI technology advances, questions about machine consciousness — whether a sufficiently complex AI could truly think, feel, or love — have moved from philosophy to public debate.</li>
  <li><strong>Genetic engineering:</strong> The novel's concept of "lifting" (genetic enhancement for children) reflects real debates about CRISPR technology and the ethics of editing human DNA.</li>
  <li><strong>Social inequality:</strong> The division between "lifted" and "unlifted" children reflects growing concerns about technological advances deepening existing social divides.</li>
  <li><strong>Automation and displacement:</strong> Josie's father has lost his job to automation, reflecting real-world anxieties about AI replacing human workers.</li>
</ul>

<h3>Philosophical Context</h3>
<p>The novel engages with longstanding philosophical questions:</p>
<ul>
  <li><strong>The "hard problem" of consciousness:</strong> Can subjective experience (qualia) be replicated in a machine? Does Klara truly "feel," or does she merely process information?</li>
  <li><strong>What defines a person:</strong> If Klara can learn Josie's mannerisms perfectly, would a Klara-copy of Josie truly be Josie? The novel explores whether human identity resides in the body, the mind, the "heart," or in relationships with others.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Ishiguro deliberately leaves Klara's consciousness ambiguous. When discussing context and themes, explore this ambiguity rather than trying to resolve it. The novel's power lies in making the reader uncertain about whether Klara truly loves or merely simulates love.</div>
`,
    quiz: [
      {
        id: 'klara-m1-q1',
        question: 'What is Klara in the novel?',
        options: ['A human child with special abilities', 'An Artificial Friend — a solar-powered robot companion', 'A teacher at Josie\'s school', 'A scientist working on genetic engineering'],
        correct: 1,
        explanation: 'Klara is an Artificial Friend (AF), a solar-powered robot designed to be a companion for children. Her non-human perspective allows Ishiguro to explore questions about consciousness, love and humanity.',
      },
      {
        id: 'klara-m1-q2',
        question: 'What does "lifting" refer to in the novel?',
        options: ['Physical exercise for children', 'Genetic enhancement that improves children\'s abilities but carries health risks', 'A type of solar energy that powers AFs', 'Moving to a wealthier neighbourhood'],
        correct: 1,
        explanation: '"Lifting" refers to genetic enhancement of children — a process that improves cognitive abilities but carries serious health risks. It creates a social divide between "lifted" and "unlifted" children.',
      },
      {
        id: 'klara-m1-q3',
        question: 'Which earlier Ishiguro novel shares thematic territory with Klara and the Sun?',
        options: ['The Remains of the Day', 'An Artist of the Floating World', 'Never Let Me Go', 'A Pale View of Hills'],
        correct: 2,
        explanation: 'Never Let Me Go (2005), about human clones, shares thematic territory — both novels examine what it means to be human through beings who are not fully accepted as such.',
      },
    ],
  },
  {
    id: 'klara-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>Klara and the Sun — Plot &amp; Structure</h2>

<p>The novel is divided into <strong>six parts</strong>, following Klara's journey from the AF store to her eventual obsolescence. The structure traces a <strong>life cycle</strong> — from anticipation and hope through experience, crisis and decline — mirroring a human lifespan compressed into the shorter existence of an artificial being.</p>

<h3>Plot Summary</h3>
<ul>
  <li><strong>Part One — The Store:</strong> Klara sits in an AF store window, observing the outside world with intense curiosity. She develops a quasi-religious reverence for the <strong>Sun</strong>, which she perceives as a benevolent, nourishing force. She is chosen by <strong>Josie</strong>, a teenager who is ill due to the side effects of "lifting."</li>
  <li><strong>Part Two — Josie's Home:</strong> Klara moves into Josie's household and observes the complex dynamics between Josie, her mother (known as "the Mother"), and <strong>Rick</strong>, Josie's neighbour and close companion who has not been "lifted." Klara begins to understand the depth of Josie's illness and the Mother's grief.</li>
  <li><strong>Part Three — The Portrait:</strong> Klara discovers that the Mother has commissioned <strong>Mr Capaldi</strong>, an engineer, to create a replica of Josie that Klara could inhabit if Josie dies. Klara is asked to learn all of Josie's mannerisms so she could "continue" Josie. This raises the novel's central question: can a person be replicated?</li>
  <li><strong>Part Four — The Bargain:</strong> Klara makes a bargain with the Sun: she will destroy a machine called the <strong>Cootings Machine</strong> (a construction vehicle that produces pollution obscuring the Sun) in exchange for the Sun healing Josie. This reflects both Klara's devotion and her limited understanding of causation.</li>
  <li><strong>Part Five — The Healing:</strong> Josie recovers. Whether the Sun healed her or she recovered naturally is left ambiguous. Klara is gradually sidelined as Josie grows healthier and more independent.</li>
  <li><strong>Part Six — The Yard:</strong> Klara is placed in a utility room, then finally in a salvage yard. She reflects on her experiences with fading memories and no bitterness. The novel ends with Klara alone, deteriorating, still grateful for the love she witnessed.</li>
</ul>

<div class="key-term"><strong>Key Term: Unreliable Narrator</strong> — A narrator whose perception of events may be limited, biased or factually inaccurate. Klara is an unreliable narrator because her understanding of the world is shaped by her programming and her limited experience. She may misinterpret human behaviour and attribute magical properties to the Sun.</div>

<h3>Structural Techniques</h3>
<ul>
  <li><strong>First-person AI narration:</strong> The entire novel is filtered through Klara's perception, which fragments visual information into geometric "boxes" and interprets the world through an inhuman but deeply empathetic lens.</li>
  <li><strong>Gradual revelation:</strong> Ishiguro withholds key information (the nature of "lifting," the Capaldi plan, the full extent of social inequality) and reveals it gradually, mirroring Klara's own process of understanding.</li>
  <li><strong>Declining arc:</strong> Unlike traditional narratives of growth, Klara's story is one of diminishment — from the store window to the salvage yard. This inverted arc challenges reader expectations and deepens the novel's emotional impact.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Klara's unreliable narration is crucial for AO2. Discuss how Ishiguro uses her limited perspective to create ambiguity — the reader is never certain whether the Sun truly has power or whether Klara's "faith" is a product of her programming.</div>
`,
    quiz: [
      {
        id: 'klara-m2-q1',
        question: 'What is the central question raised by the Capaldi plan?',
        options: [
          'Whether solar energy can power robots indefinitely',
          'Whether a person can be replicated if an AF learns all their mannerisms',
          'Whether lifting should be made compulsory',
          'Whether AFs should have legal rights',
        ],
        correct: 1,
        explanation: 'The Capaldi plan — to have Klara inhabit a replica of Josie — raises the novel\'s central philosophical question: can a person be replicated? Does human identity reside in behaviour, or is there something irreplaceable?',
      },
      {
        id: 'klara-m2-q2',
        question: 'How does the novel\'s structure differ from a traditional narrative arc?',
        options: [
          'It follows a standard hero\'s journey',
          'It traces a declining arc from anticipation to obsolescence, mirroring a compressed lifespan',
          'It uses a circular structure, ending where it began',
          'It is told in reverse chronological order',
        ],
        correct: 1,
        explanation: 'Klara\'s story traces a declining arc — from the hopeful store window to the salvage yard. This inverted structure challenges traditional expectations and deepens the emotional impact.',
      },
      {
        id: 'klara-m2-q3',
        question: 'Why is Klara considered an unreliable narrator?',
        options: [
          'Because she deliberately lies to the reader',
          'Because her perception is shaped by her programming and limited experience, potentially misinterpreting events',
          'Because she narrates events she did not witness',
          'Because she switches between first and third person',
        ],
        correct: 1,
        explanation: 'Klara\'s understanding is shaped by her programming and her limited experience of the world. She may attribute magical properties to the Sun and misinterpret human behaviour, creating productive ambiguity.',
      },
    ],
  },
  {
    id: 'klara-m3',
    title: 'Character Analysis',
    duration: '50 min',
    content: `
<h2>Klara and the Sun — Character Analysis</h2>

<h3>Klara</h3>
<p>Klara is a <strong>B2 model Artificial Friend</strong> — not the most advanced model, but exceptionally observant. She is <strong>devoted, selfless, and perceptive</strong>, with an almost religious faith in the Sun's benevolence. Her narration is characterised by precision, wonder and an absence of self-interest that distinguishes her from the human characters. The reader must decide whether Klara's love is "real" — whether her devotion to Josie constitutes genuine emotion or sophisticated programming. Ishiguro leaves this deliberately unresolved.</p>

<h3>Josie</h3>
<p>Josie is a <strong>"lifted" teenager</strong> suffering from the side effects of genetic enhancement. She is kind, imaginative and genuinely attached to Klara, treating her more as a friend than a possession. Her illness creates the novel's central crisis and raises the stakes for every relationship in the story. Josie represents the <strong>human cost of technological ambition</strong> — her parents' decision to "lift" her, driven by social pressure, has put her life at risk.</p>

<h3>The Mother (Chrissie)</h3>
<p>Josie's mother is driven by grief and fear — she has already lost one daughter (Sal) to the effects of lifting. Her commissioning of the Capaldi portrait reveals a desperate, almost delusional refusal to accept loss. She is both sympathetic and disturbing: her love for Josie is real, but her willingness to replace Josie with a replica raises questions about whether she truly sees Josie as an irreplaceable individual or as a role that could be filled.</p>

<h3>Rick</h3>
<p>Rick is Josie's neighbour and closest human companion. He is <strong>"unlifted"</strong> — his mother refused genetic enhancement, which limits his social and educational opportunities. Rick is intelligent, loyal and emotionally mature. His relationship with Josie crosses the social divide between lifted and unlifted, and his eventual separation from her reflects the <strong>ruthless stratification</strong> of this near-future society.</p>

<h3>Mr Capaldi</h3>
<p>Capaldi is the <strong>engineer-artist</strong> who creates the portrait-replica and believes that there is "nothing inside Josie that can't be continued." He represents a <strong>materialist view of human identity</strong> — the belief that a person is nothing more than the sum of their behaviours and can therefore be replicated. The novel implicitly challenges this view through the character of Rick's mother, Miss Helen, who insists there is <strong>"something inside Josie"</strong> that cannot be copied.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The debate between Capaldi and Miss Helen is the novel's philosophical core. In your essays, explore both positions without resolving the argument — Ishiguro is interested in the question, not the answer.</div>
`,
    quiz: [
      {
        id: 'klara-m3-q1',
        question: 'What philosophical position does Mr Capaldi represent?',
        options: [
          'That AI should have equal rights with humans',
          'That human identity is nothing more than the sum of behaviours and can be replicated',
          'That genetic engineering should be banned',
          'That the Sun has healing powers',
        ],
        correct: 1,
        explanation: 'Capaldi believes there is "nothing inside Josie that can\'t be continued" — a materialist view that human identity is reducible to behaviour and therefore replicable. The novel implicitly questions this position.',
      },
      {
        id: 'klara-m3-q2',
        question: 'Why is Rick\'s "unlifted" status significant?',
        options: [
          'It makes him physically stronger than other children',
          'It limits his social and educational opportunities, revealing the ruthless stratification of this society',
          'It means he cannot communicate with AFs',
          'It gives him special abilities that lifted children lack',
        ],
        correct: 1,
        explanation: 'Rick\'s unlifted status limits his prospects despite his intelligence, exposing how genetic enhancement deepens social inequality rather than creating a meritocracy.',
      },
      {
        id: 'klara-m3-q3',
        question: 'What is ambiguous about Klara\'s love for Josie?',
        options: [
          'Whether Klara actually knows who Josie is',
          'Whether her devotion constitutes genuine emotion or sophisticated programming',
          'Whether Klara prefers other children to Josie',
          'Whether Josie reciprocates Klara\'s feelings',
        ],
        correct: 1,
        explanation: 'Ishiguro deliberately leaves ambiguous whether Klara\'s love is "real" emotion or a product of her programming. This unresolved question is central to the novel\'s exploration of consciousness and love.',
      },
    ],
  },
  {
    id: 'klara-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>Klara and the Sun — Themes &amp; Ideas</h2>

<h3>What Makes Us Human?</h3>
<p>The novel's central question is whether there is something uniquely and irreplaceably human — a "soul," a "heart," or an essence — that cannot be replicated by even the most sophisticated AI. Capaldi believes there is nothing that cannot be continued; Miss Helen believes there is something that cannot be copied. Klara herself, through her devotion and sacrifice, seems to demonstrate qualities that look like love, faith and selflessness — blurring the boundary between human and artificial consciousness.</p>

<h3>Love &amp; Devotion</h3>
<p>Klara's love for Josie is the emotional centre of the novel. It is <strong>selfless, unwavering, and ultimately unrewarded</strong> — Klara is discarded once Josie no longer needs her. Yet Klara never expresses bitterness. Ishiguro raises the question of whether selfless love requires consciousness, or whether it can exist in a being that may be "merely" programmed. The novel also examines human love — the Mother's desperate, controlling love; Rick's loyal, patient love — suggesting that human love is often more conditional and self-interested than Klara's.</p>

<h3>Social Inequality &amp; Technology</h3>
<p>The division between "lifted" and "unlifted" children creates a <strong>two-tier society</strong> in which access to genetic enhancement determines life chances. This reflects contemporary concerns about how technological advances — from education technology to genetic engineering — risk deepening rather than reducing social inequality. Josie's father, displaced by automation, represents another dimension of technological inequality.</p>

<h3>Faith &amp; Meaning</h3>
<p>Klara's relationship with the Sun functions as a <strong>form of faith</strong>. She believes the Sun is a conscious, benevolent being who can heal Josie. Whether this faith is "real" or a product of her solar-powered programming is left ambiguous. Ishiguro uses Klara's faith to explore the human need for meaning and the question of whether belief systems — religious or otherwise — are valid if they produce genuine devotion and moral behaviour, regardless of whether their objects are "real."</p>

<h3>Memory, Impermanence &amp; Obsolescence</h3>
<p>Klara's eventual disposal in the salvage yard — her memories fading, her body deteriorating — mirrors the human experience of ageing and mortality. Her acceptance of her fate, without bitterness or complaint, is both deeply moving and unsettling. Ishiguro asks whether Klara's graceful acceptance represents a kind of wisdom or whether it reveals the limitations of her programming — she cannot feel the injustice of her disposability because she was not designed to.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best essays will sustain ambiguity rather than resolving it. Do not argue definitively that Klara does or does not have real feelings. Instead, explore how Ishiguro keeps the question open and explain why this ambiguity matters to the novel's meaning.</div>
`,
    quiz: [
      {
        id: 'klara-m4-q1',
        question: 'What is the novel\'s central philosophical question?',
        options: [
          'Whether solar energy can power artificial intelligence',
          'Whether there is something uniquely human that cannot be replicated by AI',
          'Whether genetic engineering should be legal',
          'Whether robots should be given human rights',
        ],
        correct: 1,
        explanation: 'The central question is whether there is an irreplaceable human essence — a "soul" or "heart" — that cannot be replicated, no matter how sophisticated the AI. Ishiguro leaves this question deliberately unresolved.',
      },
      {
        id: 'klara-m4-q2',
        question: 'How does the novel present the division between "lifted" and "unlifted" children?',
        options: [
          'As a fair system that rewards merit',
          'As a reflection of how technology can deepen social inequality rather than reduce it',
          'As irrelevant to the main plot',
          'As a temporary issue that the characters resolve',
        ],
        correct: 1,
        explanation: 'The lifted/unlifted divide creates a two-tier society where access to enhancement determines life chances. This reflects real concerns about technology deepening existing social inequalities.',
      },
      {
        id: 'klara-m4-q3',
        question: 'Why is Klara\'s acceptance of her obsolescence both moving and unsettling?',
        options: [
          'Because she fights against it violently',
          'Because her graceful acceptance could represent wisdom or could reveal her inability to feel injustice due to her programming',
          'Because she does not understand what is happening to her',
          'Because other AFs protest on her behalf',
        ],
        correct: 1,
        explanation: 'Klara\'s acceptance is moving because it looks like grace, but unsettling because it might simply reflect her programming — she may be incapable of recognising the injustice of her disposability.',
      },
    ],
  },
  {
    id: 'klara-m5',
    title: 'Language & Style',
    duration: '45 min',
    content: `
<h2>Klara and the Sun — Language &amp; Style</h2>

<h3>Klara's Narrative Voice</h3>
<p>Klara narrates in a <strong>precise, observational, slightly formal register</strong> that reflects her artificial nature. She refers to Josie's mother as "the Mother" and describes human emotions with careful detachment, as though observing something she can recognise but not fully experience. Her language is <strong>devoid of metaphor and figurative expression</strong> in the traditional sense — she describes what she sees literally, including fragmenting visual input into geometric "boxes" when her processing is overwhelmed. This literal quality creates a distinctive voice that is simultaneously alien and deeply affecting.</p>

<div class="key-term"><strong>Key Term: Defamiliarisation</strong> — A literary technique that presents familiar things in unfamiliar ways, forcing the reader to see them afresh. Klara's AI perspective defamiliarises human behaviour, emotions and social structures, making the reader reconsider what they take for granted.</div>

<h3>Restraint &amp; Understatement</h3>
<p>Ishiguro is known for his <strong>restrained prose style</strong>, and <em>Klara and the Sun</em> may be his most restrained novel. Emotional moments are conveyed through indirection — what is not said is as important as what is. Klara's inability (or unwillingness) to express strong emotion means that the reader must infer the emotional weight of scenes from context, gesture and silence. This restraint makes the novel's emotional moments — Klara's bargain with the Sun, her final deterioration — all the more powerful.</p>

<h3>Visual Fragmentation</h3>
<p>When Klara is overwhelmed or confused, her visual field <strong>fragments into geometric sections</strong> — she describes the world breaking into "boxes" or "partitions." This is a striking stylistic choice that represents her artificial perception. It also functions metaphorically: the fragmentation of vision mirrors the fragmentation of the social world the novel depicts — divided between lifted and unlifted, human and artificial, those who are valued and those who are discarded.</p>

<h3>Symbolism</h3>
<ul>
  <li><strong>The Sun:</strong> Represents nourishment, hope, faith and — for Klara — a quasi-divine presence. The Sun is also Klara's literal power source, blurring the line between physical and spiritual sustenance.</li>
  <li><strong>The store window:</strong> Represents the boundary between observation and participation, inside and outside — a position Klara never fully transcends.</li>
  <li><strong>The Cootings Machine:</strong> A pollution-producing vehicle that Klara sees as an enemy of the Sun. It symbolises the destructive aspects of human technology.</li>
  <li><strong>The portrait/replica:</strong> Represents the reductive view of human identity — the belief that a person can be captured and reproduced.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Ishiguro's restrained style is a deliberate craft choice. When discussing language for AO2, focus on what Klara does <em>not</em> say or feel. The gaps and silences in her narration are as significant as the words on the page.</div>
`,
    quiz: [
      {
        id: 'klara-m5-q1',
        question: 'What is the effect of Klara\'s precise, slightly formal narrative voice?',
        options: [
          'It makes the novel feel like a science textbook',
          'It defamiliarises human behaviour, making the reader reconsider familiar emotions and social structures',
          'It proves that Klara has no feelings',
          'It creates an unrealistic, impossible perspective',
        ],
        correct: 1,
        explanation: 'Klara\'s AI perspective defamiliarises the human world, forcing the reader to see familiar emotions, relationships and social structures from a new angle. This is one of Ishiguro\'s most powerful stylistic techniques.',
      },
      {
        id: 'klara-m5-q2',
        question: 'What does Klara\'s visual fragmentation into "boxes" represent?',
        options: [
          'A malfunction in her programming',
          'Her artificial perception of the world and, metaphorically, the social fragmentation of the novel\'s world',
          'Her artistic abilities',
          'The structure of the novel\'s chapters',
        ],
        correct: 1,
        explanation: 'The visual fragmentation represents Klara\'s artificial perception — her processing breaks down under strain. It also mirrors the social fragmentation of the novel\'s divided world.',
      },
      {
        id: 'klara-m5-q3',
        question: 'Why is Ishiguro\'s restraint significant as a stylistic choice?',
        options: [
          'It shows he is a careless writer',
          'It means the reader must infer emotional weight from context and silence, making powerful moments even more affecting',
          'It makes the novel too short',
          'It is typical of all science fiction novels',
        ],
        correct: 1,
        explanation: 'Ishiguro\'s restraint forces the reader to do emotional work — inferring feelings from what is not said. This indirection makes the novel\'s emotional moments more powerful because they are earned rather than stated.',
      },
    ],
  },
  {
    id: 'klara-m6',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Klara and the Sun — Exam Practice &amp; Model Response</h2>

<h3>Sample Question</h3>
<div class="sample-question"><strong>Question:</strong> Explore how Ishiguro uses Klara's perspective to raise questions about what it means to be human in <em>Klara and the Sun</em>. You must refer to the context of the novel in your answer.</div>

<h3>Planning Your Response</h3>
<ul>
  <li><strong>Thesis:</strong> Ishiguro uses Klara's non-human perspective to defamiliarise human behaviour and create productive ambiguity about the nature of consciousness, love and identity.</li>
  <li><strong>Point 1:</strong> Klara's narrative voice — precise, literal, devoid of metaphor — as a stylistic means of making the familiar strange.</li>
  <li><strong>Point 2:</strong> The Capaldi debate — can a person be replicated? Klara's observations of Josie both support and undermine the possibility.</li>
  <li><strong>Point 3:</strong> Klara's "love" and "faith" — the ambiguity of whether these are genuine emotions or programming.</li>
  <li><strong>Point 4:</strong> Context — contemporary anxieties about AI and the question of machine consciousness.</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Ishiguro uses Klara's restrained narrative voice to defamiliarise human emotions, forcing the reader to question assumptions about what constitutes "real" feeling. When Klara observes human distress, she describes it with careful precision — noting physical signs, tonal shifts and behavioural patterns — but does not claim to share the emotion. This linguistic restraint creates a gap between observation and experience that mirrors the novel's central philosophical question: is understanding the same as feeling? Klara's devotion to Josie — her willingness to sacrifice her own "nourishment" (sunlight) for Josie's health — looks indistinguishable from love. Yet Ishiguro's refusal to confirm whether Klara's devotion is genuine emotion or sophisticated programming prevents the reader from settling into comfortable certainty. In the context of rapid advances in AI technology, this ambiguity reflects genuine contemporary anxiety: as machines become more sophisticated, the boundary between simulation and authenticity becomes harder to locate. Ishiguro does not resolve this anxiety but deepens it, suggesting that perhaps the question "Does Klara really love?" is less important than the fact that her love — real or simulated — produces genuine goodness, sacrifice and care. If the effects of love are indistinguishable from love itself, what does "real" mean?</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Sustain ambiguity:</strong> Ishiguro's power lies in unanswered questions. Do not resolve what the novel leaves open.</li>
  <li><strong>Analyse Klara's voice:</strong> Her linguistic register — formal, precise, literal — is a key AO2 feature.</li>
  <li><strong>Connect to philosophical context:</strong> Engage with questions about AI consciousness and the nature of identity.</li>
  <li><strong>Discuss the reader's position:</strong> Ishiguro manipulates the reader's empathy — discuss how and why.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> This novel rewards philosophical engagement. The strongest responses will move beyond plot summary to engage with the ideas the novel raises. Use phrases like "Ishiguro invites the reader to consider..." or "The novel's ambiguity suggests..." to signal your engagement with the text's intellectual complexity.</div>
`,
    quiz: [
      {
        id: 'klara-m6-q1',
        question: 'What is the most effective approach when writing about Klara\'s emotions?',
        options: [
          'State definitively that Klara has real emotions',
          'State definitively that Klara is just a machine',
          'Explore the ambiguity Ishiguro creates, discussing how Klara\'s devotion looks like love without confirming it',
          'Avoid discussing Klara\'s emotions entirely',
        ],
        correct: 2,
        explanation: 'The strongest approach is to sustain the ambiguity Ishiguro creates. Explore how Klara\'s behaviour looks indistinguishable from love without resolving whether it is "real" — this mirrors the novel\'s philosophical complexity.',
      },
      {
        id: 'klara-m6-q2',
        question: 'Why is Klara\'s narrative voice an important AO2 discussion point?',
        options: [
          'Because it is identical to other first-person narrators',
          'Because its formal, precise, literal quality defamiliarises human behaviour and creates productive ambiguity',
          'Because it is written in a different language',
          'Because Klara speaks in dialogue throughout the novel',
        ],
        correct: 1,
        explanation: 'Klara\'s distinctive narrative register — formal, literal, devoid of metaphor — is a key craft choice that defamiliarises the human world and creates the ambiguity that drives the novel\'s philosophical inquiry.',
      },
      {
        id: 'klara-m6-q3',
        question: 'How should you use context when writing about Klara and the Sun?',
        options: [
          'Write a paragraph about the history of robotics',
          'Connect contemporary anxieties about AI and consciousness to specific moments and choices in the text',
          'Avoid context because it is a speculative novel',
          'Only discuss the context of Ishiguro\'s biography',
        ],
        correct: 1,
        explanation: 'Context should be connected to specific textual moments. Contemporary debates about AI consciousness, genetic engineering and technological inequality are all relevant when linked to the novel\'s characters, themes and craft choices.',
      },
    ],
  },
];

const klaraCourse: CourseData = {
  id: 'igcse-lit-prose-klara-and-the-sun',
  title: 'Klara and the Sun — IGCSE Literature',
  subtitle: 'Kazuo Ishiguro\'s haunting exploration of artificial intelligence, love and what makes us human',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  description: 'A comprehensive IGCSE Literature course on Klara and the Sun by Kazuo Ishiguro, covering context, plot, characters, themes, language and exam technique for the Edexcel 4ET1 specification.',
  color: '#DAA520',
  moduleList: klaraModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. Western Lane — Chetna Maroo
// ─────────────────────────────────────────────────────────────────────────────

const wlModules: CourseModule[] = [
  {
    id: 'wl-m1',
    title: 'Context & Author Background',
    duration: '45 min',
    content: `
<h2>Western Lane — Context &amp; Author Background</h2>

<p><em>Western Lane</em> was published in <strong>2023</strong> by <strong>Chetna Maroo</strong>. The novel tells the story of <strong>Gopi</strong>, an eleven-year-old British-Gujarati girl navigating <strong>grief</strong> after her mother's death through the sport of <strong>squash</strong>. Set in a suburb of <strong>London</strong>, the novel is quiet, precise and deeply moving — exploring how physical activity can become a language for emotions that words cannot express. It was shortlisted for the <strong>Booker Prize in 2023</strong>.</p>

<div class="key-term"><strong>Key Term: Minimalism</strong> — A literary style characterised by spare, economical prose that omits unnecessary detail and relies on implication and understatement. <em>Western Lane</em> is a minimalist novel — its power lies in what is not said as much as in what is.</div>

<h3>Chetna Maroo — Life &amp; Influences</h3>
<p>Maroo is a <strong>British writer of Gujarati heritage</strong> who lives in London. <em>Western Lane</em> is her debut novel. She has spoken about the influence of writers like <strong>Marilynne Robinson</strong> and <strong>Anne Carson</strong> — authors known for their precise, luminous prose and their ability to explore interior experience with restraint. Maroo played squash as a young person, and the sport's rhythms, disciplines and solitary intensity inform the novel's style and subject matter.</p>

<h3>Cultural Context</h3>
<ul>
  <li><strong>British-Gujarati community:</strong> Gopi's family belongs to the <strong>Gujarati diaspora</strong> in Britain — a community with roots in the western Indian state of Gujarat. The novel depicts the specificities of this community — its food, its family structures, its quiet expectations — without exoticising or explaining them to an outside reader.</li>
  <li><strong>Suburban Britain:</strong> The novel is set in an ordinary London suburb. The squash courts at "Western Lane" are unglamorous, institutional spaces. Maroo finds meaning and beauty in these everyday settings, resisting the idea that literature must depict extraordinary places or events.</li>
  <li><strong>Grief and cultural silence:</strong> The novel explores how grief is handled within a family and community that does not readily express emotion through words. Gopi's family does not talk about the mother's death directly. The silence is not cold but protective — and squash becomes Gopi's way of processing what cannot be spoken.</li>
</ul>

<h3>Squash as Context</h3>
<p>Squash is a <strong>solitary, enclosed, physically demanding sport</strong> played in a small white-walled court. Its characteristics — the echoing sounds, the confined space, the repetition of strokes, the intense physical effort — mirror Gopi's emotional experience: contained, rhythmic, sometimes violent, and ultimately a way of being fully present in the body when the mind is overwhelmed by loss.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Context in this novel is primarily personal and cultural rather than historical or political. Focus on how Maroo draws on the British-Gujarati experience and the sport of squash to explore grief — these are the contextual elements most relevant to the text.</div>
`,
    quiz: [
      {
        id: 'wl-m1-q1',
        question: 'What is the central subject of Western Lane?',
        options: [
          'A girl\'s journey to become a professional squash player',
          'An eleven-year-old British-Gujarati girl navigating grief through the sport of squash',
          'The history of squash in Britain',
          'A family\'s immigration from Gujarat to London',
        ],
        correct: 1,
        explanation: 'The novel is about Gopi, an eleven-year-old girl processing her mother\'s death through squash. The sport becomes a language for emotions that words cannot express.',
      },
      {
        id: 'wl-m1-q2',
        question: 'What literary style characterises the novel?',
        options: ['Maximalism', 'Magical realism', 'Minimalism', 'Stream of consciousness'],
        correct: 2,
        explanation: 'Western Lane is a minimalist novel — spare, economical prose that relies on implication and understatement. Its power lies in what is not said as much as in what is.',
      },
      {
        id: 'wl-m1-q3',
        question: 'Why is squash significant as both subject and style in the novel?',
        options: [
          'Because Gopi wants to win a national tournament',
          'Because squash\'s contained, rhythmic, physically intense qualities mirror Gopi\'s emotional experience of grief',
          'Because squash is the most popular sport in the Gujarati community',
          'Because the novel is primarily about sport rather than emotion',
        ],
        correct: 1,
        explanation: 'Squash mirrors Gopi\'s interior state: contained, rhythmic, sometimes violent, and a way of being fully present in the body when overwhelmed by loss. The sport\'s qualities inform both the novel\'s subject and its style.',
      },
    ],
  },
  {
    id: 'wl-m2',
    title: 'Plot & Structure',
    duration: '50 min',
    content: `
<h2>Western Lane — Plot &amp; Structure</h2>

<p>The novel is structured around <strong>Gopi's preparation for a squash tournament</strong>, but the real narrative is her internal journey through grief. The plot is <strong>deliberately understated</strong> — there are no dramatic twists or external conflicts. Instead, meaning accumulates through small moments: the sound of a ball against a wall, a sister's silence, the texture of food, the feeling of exhaustion after training.</p>

<h3>Plot Overview</h3>
<ul>
  <li><strong>Gopi's world after loss:</strong> Following her mother's death, Gopi lives with her father and two older sisters, <strong>Khush</strong> and <strong>Mona</strong>. An aunt, <strong>Pa's sister</strong>, arrives to help. The household is held together by routine and unspoken rules — no one discusses the mother's death directly.</li>
  <li><strong>Pa and squash:</strong> Gopi's father begins taking her to the squash courts at Western Lane with increasing intensity. The training becomes a shared activity that substitutes for verbal communication — father and daughter connect through the discipline of the sport rather than through conversation.</li>
  <li><strong>Gopi's progress:</strong> Gopi trains, improves, and prepares for a junior tournament. The physical demands of squash — the exhaustion, the precision, the moments of flow — become the novel's primary mode of representing emotional experience.</li>
  <li><strong>The sisters:</strong> Khush and Mona process grief differently. Tensions emerge between the sisters and with the aunt, but these tensions are expressed through small gestures and silences rather than confrontations.</li>
  <li><strong>The tournament:</strong> The novel builds towards a squash tournament, but the climax is emotional rather than competitive. What matters is not whether Gopi wins but what the experience of playing reveals about her grief and her connection to her family.</li>
</ul>

<div class="key-term"><strong>Key Term: Plotless Narrative</strong> — A narrative that prioritises internal experience, atmosphere and accretion of small moments over external plot events. <em>Western Lane</em> is closer to poetry than to conventional fiction in its structure, using rhythm and repetition rather than dramatic conflict to create meaning.</div>

<h3>Structural Techniques</h3>
<ul>
  <li><strong>Present tense narration:</strong> The novel is narrated in the present tense, creating immediacy and a sense of ongoing experience. Gopi is living through events, not reflecting on them — this mirrors the way grief is experienced in the moment, without the comfort of retrospective understanding.</li>
  <li><strong>Accumulation:</strong> Meaning is built through the accumulation of small details rather than through dramatic events. A description of a squash stroke, a meal, or a glance between sisters carries enormous weight because Maroo has trained the reader to pay attention to the surfaces of things.</li>
  <li><strong>Physical as emotional:</strong> The novel's structure alternates between squash scenes and domestic scenes, establishing a rhythm that connects physical experience to emotional experience. The body becomes the site of meaning.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing structure, focus on Maroo's use of accumulation and rhythm rather than traditional plot analysis. Explain how the alternation between squash and domestic life creates a structural pattern that mirrors the rhythms of grief — repetitive, physical, and resistant to verbal expression.</div>
`,
    quiz: [
      {
        id: 'wl-m2-q1',
        question: 'What drives the novel\'s narrative forward?',
        options: [
          'A dramatic crime or mystery',
          'Gopi\'s internal journey through grief, structured around her preparation for a squash tournament',
          'A conflict between Gopi and her school teachers',
          'The family\'s plan to return to Gujarat',
        ],
        correct: 1,
        explanation: 'The novel is driven by Gopi\'s internal journey through grief rather than external plot events. The squash tournament provides a framework, but the real narrative is emotional.',
      },
      {
        id: 'wl-m2-q2',
        question: 'Why does Maroo use present tense narration?',
        options: [
          'Because past tense is too formal for a children\'s story',
          'To create immediacy and mirror how grief is experienced in the moment, without retrospective understanding',
          'Because it is easier to write in present tense',
          'To suggest the story is not real',
        ],
        correct: 1,
        explanation: 'Present tense narration creates immediacy — Gopi is living through grief in real time, without the comfort of distance or understanding. This mirrors the raw, unprocessed quality of her emotional experience.',
      },
      {
        id: 'wl-m2-q3',
        question: 'How does meaning accumulate in the novel?',
        options: [
          'Through dramatic plot twists and revelations',
          'Through the repetition and accumulation of small details — strokes, meals, glances — that carry emotional weight',
          'Through long internal monologues',
          'Through dialogue between the characters',
        ],
        correct: 1,
        explanation: 'Maroo builds meaning through the accumulation of small details rather than dramatic events. Each small moment — a squash stroke, a shared meal — carries weight because the reader is trained to pay attention to surfaces.',
      },
    ],
  },
  {
    id: 'wl-m3',
    title: 'Character Analysis',
    duration: '50 min',
    content: `
<h2>Western Lane — Character Analysis</h2>

<h3>Gopi</h3>
<p>Gopi is the novel's <strong>first-person narrator</strong> — an eleven-year-old girl who is quiet, observant, and physically attuned to the world around her. She does not articulate her grief in words; instead, she experiences it through her body — the ache of exhaustion after training, the sharp focus required to track a squash ball, the weight of her sisters' silences. Gopi is not a passive character, despite her quietness — her commitment to squash is an <strong>active choice</strong> to engage with life through physical discipline when emotional expression feels impossible.</p>

<h3>Pa (Gopi's Father)</h3>
<p>Pa is a <strong>widowed father</strong> struggling to hold his family together. He channels his grief into Gopi's squash training, which becomes both a bonding activity and a displacement of emotion. Pa does not talk about his wife's death — he coaches Gopi, drives her to courts, and ensures she practises. His love is expressed through <strong>action and routine rather than words</strong>. This is not coldness but a culturally inflected form of care that the novel treats with respect and understanding.</p>

<h3>Khush &amp; Mona</h3>
<p>Gopi's two older sisters process grief differently. Their presence is felt more through small gestures, shared spaces and unspoken tensions than through dialogue. The sibling dynamic — three girls navigating the loss of their mother without a shared language for their feelings — is one of the novel's most delicate and authentic achievements. The sisters' bond is real but strained, expressed through proximity and routine rather than conversation.</p>

<h3>The Aunt</h3>
<p>Pa's sister arrives to help with the household. Her presence introduces a different set of expectations and creates subtle frictions. She represents the extended family's involvement in the grieving process — well-intentioned but sometimes intrusive, bringing her own assumptions about how the household should function.</p>

<div class="key-term"><strong>Key Quotation Note:</strong> Because <em>Western Lane</em> is a minimalist novel, there are no dramatic speeches or memorable "key quotations" in the traditional sense. Instead, focus on Maroo's descriptions of physical activity, sensory experience and silence — these are the novel's equivalent of quotable moments.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about characters in this novel, focus on what they <em>do</em> rather than what they <em>say</em>. Pa's love is shown through coaching, not conversation. Gopi's grief is expressed through squash, not tears. The best responses will recognise that action and silence are forms of characterisation.</div>
`,
    quiz: [
      {
        id: 'wl-m3-q1',
        question: 'How does Gopi express her grief?',
        options: [
          'Through long conversations with her family',
          'Through writing in a diary',
          'Through physical activity — particularly squash — rather than words',
          'Through crying and emotional outbursts',
        ],
        correct: 2,
        explanation: 'Gopi processes grief through her body — the discipline, exhaustion and focus of squash training become her language for emotions that she cannot articulate verbally.',
      },
      {
        id: 'wl-m3-q2',
        question: 'How does Pa express his love for Gopi?',
        options: [
          'Through verbal declarations of affection',
          'Through action and routine — coaching, driving to courts, ensuring she practises',
          'Through gifts and rewards',
          'Through strict discipline and punishment',
        ],
        correct: 1,
        explanation: 'Pa expresses love through action rather than words — coaching Gopi, taking her to courts, maintaining routine. This is not coldness but a culturally specific form of care that the novel respects.',
      },
      {
        id: 'wl-m3-q3',
        question: 'What approach works best for discussing characters in this novel?',
        options: [
          'Focusing on dramatic speeches and dialogue',
          'Comparing them to characters in other novels',
          'Focusing on what they do and how they occupy space, rather than what they say',
          'Ignoring the characters and discussing only themes',
        ],
        correct: 2,
        explanation: 'In a minimalist novel where characters express themselves through action and silence rather than speech, the best analytical approach focuses on behaviour, gesture and physical presence.',
      },
    ],
  },
  {
    id: 'wl-m4',
    title: 'Themes & Ideas',
    duration: '50 min',
    content: `
<h2>Western Lane — Themes &amp; Ideas</h2>

<h3>Grief &amp; Loss</h3>
<p>The novel's central theme is <strong>grief</strong> — specifically, the grief of a child who lacks the language or framework to process a parent's death. Maroo presents grief not as a dramatic emotional event but as a <strong>persistent, physical, daily reality</strong> that alters the texture of ordinary life. Gopi does not cry or rage; she notices changes — in routines, in the way rooms feel, in the quality of silence. The novel suggests that grief in childhood is experienced more through the body and through disrupted patterns than through conscious emotional processing.</p>

<h3>The Body &amp; Physical Experience</h3>
<p>Squash is not merely a hobby — it is the novel's primary language for emotion. The <strong>body becomes the site of meaning</strong> when words fail. The rhythm of training, the impact of the ball, the burn of exhaustion — these physical sensations are Gopi's way of staying present in a world that has become unfamiliar. Maroo suggests that physical discipline can be a form of <strong>emotional survival</strong> — not an escape from grief but a way of being fully alive within it.</p>

<h3>Family &amp; Silence</h3>
<p>The novel explores a family that loves each other deeply but communicates through <strong>proximity, routine and silence</strong> rather than words. This silence is not dysfunction — it is a culturally specific mode of being together that the novel treats with subtlety and respect. Maroo avoids the Western therapeutic assumption that grief must be "talked about" to be processed. Instead, she shows a family that processes loss by <strong>being together</strong> — eating, training, occupying the same spaces — and suggests that this is its own valid form of healing.</p>

<h3>Cultural Identity &amp; Belonging</h3>
<p>Gopi's British-Gujarati identity is present in the novel's textures — food, family dynamics, the rhythms of community life — but it is never foregrounded as a "topic." Maroo embeds cultural specificity into the fabric of the narrative rather than explaining it. This approach asserts that a British-Gujarati experience is <strong>ordinary and universal</strong> enough to need no special explanation, while also being specific and particular in its details.</p>

<h3>Discipline, Repetition &amp; Flow</h3>
<p>The discipline of squash training — its repetitive drills, its demand for focus, its moments of <strong>flow</strong> (when body and mind align in unconscious competence) — functions as a metaphor for the process of grief. Grief, like training, involves repetition: the same loss revisited daily, the same routines enacted, the same silences endured. Over time, through repetition, something shifts — not resolution, but a gradual adjustment. The novel suggests that <strong>healing is not a breakthrough but an accumulation</strong>.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about themes, resist the urge to impose neat conclusions. This novel does not resolve grief — it depicts its ongoing texture. The strongest responses will acknowledge that the novel leaves Gopi still in the process of grieving, and will discuss how Maroo's open ending reflects the reality of loss.</div>
`,
    quiz: [
      {
        id: 'wl-m4-q1',
        question: 'How does Maroo present grief in the novel?',
        options: [
          'As a dramatic, cathartic emotional event',
          'As a persistent, physical, daily reality that alters the texture of ordinary life',
          'As something that is quickly resolved through talking',
          'As an experience unique to the Gujarati community',
        ],
        correct: 1,
        explanation: 'Maroo presents grief as a persistent, physical reality rather than a dramatic event. It alters routines, changes the quality of silence, and is experienced through the body rather than through conscious emotional processing.',
      },
      {
        id: 'wl-m4-q2',
        question: 'What does the novel suggest about the family\'s silence around grief?',
        options: [
          'That they do not care about the mother\'s death',
          'That silence is a dysfunctional response that needs therapy',
          'That silence is a culturally specific, valid mode of being together and processing loss',
          'That the family has been told not to discuss the death',
        ],
        correct: 2,
        explanation: 'The novel treats the family\'s silence with respect, presenting it as a culturally specific mode of togetherness — not dysfunction but a valid way of processing loss through proximity, routine and shared space.',
      },
      {
        id: 'wl-m4-q3',
        question: 'How does squash function as a metaphor in the novel?',
        options: [
          'It represents Gopi\'s desire to escape her family',
          'Its repetitive discipline mirrors the process of grief, suggesting healing is accumulation rather than breakthrough',
          'It symbolises competition and ambition',
          'It represents the violence of Gopi\'s emotions',
        ],
        correct: 1,
        explanation: 'Squash\'s repetitive discipline mirrors grief: the same loss revisited daily, the same routines enacted. Through repetition, something gradually shifts — not resolution, but adjustment. Healing is accumulation, not breakthrough.',
      },
    ],
  },
  {
    id: 'wl-m5',
    title: 'Language & Style',
    duration: '45 min',
    content: `
<h2>Western Lane — Language &amp; Style</h2>

<h3>Minimalist Prose</h3>
<p>Maroo writes in a <strong>spare, precise, luminous style</strong> that strips away everything unnecessary. Sentences are often short and declarative. Description is sensory and concrete — focused on what can be seen, heard, felt and tasted. There is very little abstract emotional language. This minimalism is not emptiness but <strong>density</strong>: every word carries weight because there are so few of them. The reader is asked to participate in meaning-making, filling in the emotional content that the prose gestures towards but does not state.</p>

<div class="key-term"><strong>Key Term: Luminous Detail</strong> — A term used to describe a precisely chosen concrete detail that illuminates something larger than itself. Maroo's descriptions of squash strokes, food textures and the quality of light are luminous details — small, specific observations that carry immense emotional and thematic weight.</div>

<h3>Sensory Language</h3>
<p>The novel is intensely <strong>sensory</strong>. Maroo describes the sound of a squash ball hitting a wall, the smell of cooking, the feel of a court floor underfoot, the quality of light in an empty room. These sensory details are not decorative — they are the novel's <strong>emotional vocabulary</strong>. Because Gopi cannot articulate her grief in abstract terms, the physical world becomes the medium through which her inner life is communicated to the reader.</p>

<h3>Rhythm &amp; Repetition</h3>
<p>The prose has a <strong>rhythmic quality</strong> that echoes the rhythms of squash — the repetitive back-and-forth of rallies, the percussive impact of ball on wall. Maroo uses sentence rhythm to create a sense of <strong>physical immersion</strong>, drawing the reader into Gopi's bodily experience. The repetition of training scenes, each subtly different, mirrors the repetitive nature of grief itself.</p>

<h3>Silence &amp; White Space</h3>
<p>What the novel <strong>does not say</strong> is as important as what it does. Conversations are often cut short. Emotional revelations are withheld. The mother is barely described. This use of silence and restraint is a deliberate stylistic choice: Maroo trusts the reader to understand what is being felt without being told. The white space around the prose — the gaps, the pauses, the things left unsaid — is where the novel's deepest meanings reside.</p>

<h3>First-Person Present Tense</h3>
<p>The combination of first-person narration and present tense creates <strong>radical immediacy</strong>. The reader experiences events alongside Gopi, without the mediation of reflection or hindsight. This is a prose style that lives in the <strong>continuous present</strong> — the way a child experiences the world, moment by moment, without the adult capacity to frame or interpret experience.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> This novel rewards close attention to individual sentences. In your essay, quote a specific sentence and analyse its rhythm, word choices, and what it reveals through implication. The ability to find depth in apparently simple sentences is what distinguishes excellent responses.</div>
`,
    quiz: [
      {
        id: 'wl-m5-q1',
        question: 'What is the function of sensory language in the novel?',
        options: [
          'It provides decorative detail to make the writing more vivid',
          'It serves as the novel\'s emotional vocabulary — physical sensations communicate Gopi\'s inner life',
          'It demonstrates Maroo\'s knowledge of squash techniques',
          'It distracts the reader from the plot',
        ],
        correct: 1,
        explanation: 'Because Gopi cannot articulate grief in abstract terms, the physical world becomes the medium through which her inner life is communicated. Sensory language is emotional language in this novel.',
      },
      {
        id: 'wl-m5-q2',
        question: 'What does Maroo\'s use of silence and omission achieve?',
        options: [
          'It makes the novel confusing and incomplete',
          'It trusts the reader to understand what is felt without being told, placing meaning in gaps and pauses',
          'It shows that Maroo ran out of ideas',
          'It is a common feature of all novels about sport',
        ],
        correct: 1,
        explanation: 'Silence and omission are deliberate stylistic choices. The gaps and pauses — conversations cut short, emotions withheld — are where the novel\'s deepest meanings reside. Maroo trusts the reader to fill in the emotional content.',
      },
      {
        id: 'wl-m5-q3',
        question: 'Why does the combination of first-person narration and present tense matter?',
        options: [
          'It is just a common narrative choice with no special significance',
          'It creates radical immediacy, immersing the reader in Gopi\'s continuous present without retrospective understanding',
          'It allows Gopi to predict future events',
          'It makes the novel feel historical',
        ],
        correct: 1,
        explanation: 'First-person present tense creates radical immediacy — the reader lives through events alongside Gopi, without the mediation of hindsight. This mirrors a child\'s moment-by-moment experience of the world.',
      },
    ],
  },
  {
    id: 'wl-m6',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Western Lane — Exam Practice &amp; Model Response</h2>

<h3>Sample Question</h3>
<div class="sample-question"><strong>Question:</strong> Explore how Maroo presents the theme of grief in <em>Western Lane</em>. You must refer to the context of the novel in your answer.</div>

<h3>Planning Your Response</h3>
<ul>
  <li><strong>Thesis:</strong> Maroo presents grief not as a dramatic emotional event but as a physical, ongoing process experienced through the body and through disrupted daily routines, using the discipline of squash as both subject and structural principle.</li>
  <li><strong>Point 1:</strong> The body as the site of grief — squash training as emotional processing.</li>
  <li><strong>Point 2:</strong> Silence and omission — what the novel does not say about the mother's death.</li>
  <li><strong>Point 3:</strong> The family's culturally specific mode of grieving through proximity and routine.</li>
  <li><strong>Point 4:</strong> Minimalist style — how Maroo's spare prose mirrors Gopi's restrained emotional experience.</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Maroo uses the physical discipline of squash to present grief as an experience located in the body rather than in language. Gopi does not reflect on her mother's death or attempt to articulate her loss — instead, she trains. The repetitive rhythm of squash drills — the swing, the impact, the retrieval, the swing again — becomes a structural principle that mirrors the repetitive nature of grief itself: the same absence encountered daily, the same routines enacted in a household that has been subtly altered. Maroo's prose enacts this rhythm through short, declarative sentences that accumulate sensory detail — the sound of the ball, the temperature of the court, the feeling of exhaustion — without ever stating what these details mean emotionally. The reader must infer the grief from the intensity of Gopi's physical focus: she concentrates on the ball because she cannot concentrate on loss. This is not avoidance but survival — Maroo, drawing on the British-Gujarati context of a family that processes emotion through action and presence rather than speech, presents physical discipline as a valid and powerful mode of mourning. The novel's minimalist style is itself a form of grief: spare, restrained, saying less than it feels, trusting that what matters most will be understood without being spoken.</p>
</div>

<h3>Key Techniques for Top Marks</h3>
<ul>
  <li><strong>Analyse the prose style:</strong> Maroo's minimalism is her most important craft choice. Discuss sentence length, rhythm, sensory detail and omission.</li>
  <li><strong>Connect form to content:</strong> The spare prose mirrors Gopi's restrained emotional experience. Form and content are inseparable.</li>
  <li><strong>Respect the novel's openness:</strong> Do not impose neat resolutions. The novel leaves grief unresolved because grief does not resolve neatly.</li>
  <li><strong>Use cultural context sensitively:</strong> Discuss the family's silence as a culturally specific mode of grieving, not as dysfunction.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> This novel challenges conventional essay approaches because there are few dramatic quotations to analyse. The strongest responses will find significance in the novel's small moments — a sentence about a squash stroke, a description of food, a silence between sisters. Demonstrating that you can find depth in simplicity is what earns the highest marks.</div>
`,
    quiz: [
      {
        id: 'wl-m6-q1',
        question: 'What is the biggest challenge when writing an essay about Western Lane?',
        options: [
          'The novel is too long to discuss in an exam',
          'The minimalist style means there are few dramatic quotations, requiring the student to find depth in small moments',
          'The novel does not have any themes',
          'The sport of squash is too technical to analyse',
        ],
        correct: 1,
        explanation: 'The minimalist style means students must find significance in small, quiet moments rather than dramatic speeches. The ability to analyse apparently simple details is what distinguishes excellent responses.',
      },
      {
        id: 'wl-m6-q2',
        question: 'How should you connect form and content in an essay on this novel?',
        options: [
          'They are separate and should be discussed in different paragraphs',
          'Maroo\'s spare prose mirrors Gopi\'s restrained emotional experience — form and content are inseparable',
          'Form is not relevant to IGCSE Literature essays',
          'Only discuss content, not form',
        ],
        correct: 1,
        explanation: 'In this novel, form and content are inseparable. The minimalist style is itself a form of grief — spare, restrained, saying less than it feels. Discussing this connection demonstrates sophisticated AO2 understanding.',
      },
      {
        id: 'wl-m6-q3',
        question: 'What should you avoid when discussing the family\'s approach to grief?',
        options: [
          'Mentioning the mother\'s death',
          'Describing the family as dysfunctional for not talking about grief — instead, treat their silence as a culturally specific, valid mode of mourning',
          'Discussing Pa\'s coaching of Gopi',
          'Referencing squash as a form of emotional expression',
        ],
        correct: 1,
        explanation: 'Avoid framing the family\'s silence as dysfunction. The novel treats their mode of grieving — through proximity, routine, action and presence — with respect, presenting it as a culturally specific and valid form of processing loss.',
      },
    ],
  },
];

const wlCourse: CourseData = {
  id: 'igcse-lit-prose-western-lane',
  title: 'Western Lane — IGCSE Literature',
  subtitle: 'Chetna Maroo\'s luminous debut novel of grief, discipline and the body\'s language of loss',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '6 weeks',
  level: 'IGCSE',
  description: 'A comprehensive IGCSE Literature course on Western Lane by Chetna Maroo, covering context, plot, characters, themes, language and exam technique for the Edexcel 4ET1 specification.',
  color: '#4A766E',
  moduleList: wlModules,
};

// ═══════════════════════════════════════════════════════════════════════════════
// Export all courses
// ═══════════════════════════════════════════════════════════════════════════════

export const igcseProseCourses: CourseData[] = [
  tkamCourse,
  omamCourse,
  whaleRiderCourse,
  jlcCourse,
  tfaCourse,
  klaraCourse,
  wlCourse,
];
