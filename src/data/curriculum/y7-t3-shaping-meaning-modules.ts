import type { CourseModule } from '../courses';

export const y7T3ShapingMeaningModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Narrative Conventions
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m1',
    title: 'Narrative Conventions',
    duration: '40 min',
    content: `
<h2>What Makes a Story Work?</h2>

<p>Every story you have ever read, watched, or listened to relies on the same fundamental building blocks. These building blocks are called <strong>narrative conventions</strong> — the tools and techniques writers use to shape a story from beginning to end. Understanding these conventions will help you read more critically, write more effectively, and recognise how writers manipulate your expectations.</p>

<div class="key-term"><strong>Key Term: Narrative Convention</strong> — A commonly used technique, structure, or element that readers recognise and expect in storytelling. These include plot, character, setting, point of view, and conflict.</div>

<h3>The Five Core Elements</h3>

<p>Most narratives are built from five interconnected elements. Think of them as the ingredients of a recipe — leave one out and the story will not work properly.</p>

<ol>
  <li><strong>Plot</strong> — The sequence of events that make up the story. A strong plot creates tension by introducing problems, complications, and resolutions.</li>
  <li><strong>Character</strong> — The people (or creatures) in the story. Memorable characters have clear motivations, flaws, and desires that drive the plot forward.</li>
  <li><strong>Setting</strong> — Where and when the story takes place. Setting is never just a backdrop — it shapes mood, creates atmosphere, and can even function as a character in its own right.</li>
  <li><strong>Point of View (Narrative Voice)</strong> — Who is telling the story. First person ("I") creates intimacy; third person ("he/she/they") allows a wider perspective.</li>
  <li><strong>Conflict</strong> — The central problem or struggle. Without conflict, there is no story. Conflict can be external (character vs. another force) or internal (character vs. themselves).</li>
</ol>

<h3>Freytag's Pyramid: Story Structure</h3>

<p>In the nineteenth century, the German writer Gustav Freytag identified a pattern that appears in most Western narratives. This five-stage structure is still taught today because it describes how tension rises and falls in a story:</p>

<ol>
  <li><strong>Exposition</strong> — The opening. Characters, setting, and situation are introduced.</li>
  <li><strong>Rising Action</strong> — Complications develop. The conflict intensifies and the stakes increase.</li>
  <li><strong>Climax</strong> — The turning point. This is the moment of highest tension, where the central conflict reaches its peak.</li>
  <li><strong>Falling Action</strong> — The consequences of the climax unfold. Loose ends begin to be tied up.</li>
  <li><strong>Resolution (Denouement)</strong> — The story reaches its conclusion. The conflict is resolved — or deliberately left unresolved.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When you are asked to analyse how a writer structures a story, refer to these stages by name. Saying "the climax occurs when..." demonstrates precise subject terminology, which examiners reward.</div>

<h3>Types of Conflict</h3>

<p>Conflict is the engine that drives every narrative. There are four main types:</p>

<ul>
  <li><strong>Character vs. Character</strong> — A protagonist against an antagonist. Example: Harry Potter vs. Voldemort.</li>
  <li><strong>Character vs. Nature</strong> — A character struggles against the natural world. Example: a sailor battling a storm.</li>
  <li><strong>Character vs. Society</strong> — A character challenges the rules, expectations, or injustices of their community. Example: a child standing up to unfair school rules.</li>
  <li><strong>Character vs. Self</strong> — An internal struggle with fear, doubt, guilt, or conflicting desires. This is often the most emotionally powerful type of conflict.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Students often describe the plot when asked about conflict. Plot is what happens; conflict is the underlying struggle that makes those events meaningful. Always identify the type of conflict and explain why it matters.</div>

<h3>Openings and Endings</h3>

<p>The way a story begins and ends is a deliberate choice. Writers use different techniques to hook readers at the start and leave a lasting impression at the end.</p>

<p><strong>Common opening techniques:</strong></p>
<ul>
  <li><strong>In medias res</strong> — Starting in the middle of the action to create immediate excitement.</li>
  <li><strong>Description of setting</strong> — Building atmosphere before introducing characters.</li>
  <li><strong>Dialogue</strong> — Dropping the reader straight into a conversation.</li>
  <li><strong>A question or mystery</strong> — Provoking curiosity that makes the reader want to continue.</li>
</ul>

<div class="key-term"><strong>Key Term: In Medias Res</strong> — A Latin phrase meaning "in the middle of things." A story that begins in medias res drops the reader into the middle of the action, then fills in the background later. This technique creates immediate tension and engagement.</div>

<p><strong>Common ending techniques:</strong></p>
<ul>
  <li><strong>Resolution</strong> — All loose ends are tied up. The reader feels satisfied.</li>
  <li><strong>Cliffhanger</strong> — The story ends at a moment of suspense, leaving the reader wanting more.</li>
  <li><strong>Circular structure</strong> — The story returns to where it began, giving a sense of completeness or showing how things have changed.</li>
  <li><strong>Ambiguous ending</strong> — The reader must decide for themselves what happens next.</li>
</ul>

<div class="model-answer"><strong>Model Answer — Analysing a Story Opening:</strong> The writer opens in medias res with the line "Run," which immediately creates a sense of urgency and danger. The imperative verb places the reader directly into the action, and the one-word sentence increases the pace, forcing the reader to feel the same panic as the character. This technique is effective because it bypasses exposition entirely, hooking the reader from the very first word.</div>

<h3>Narrative Voice and Perspective</h3>

<p>The narrative voice determines how close the reader feels to the characters and events. Each perspective creates a different effect:</p>

<ul>
  <li><strong>First person ("I")</strong> — Intimate and personal, but limited to one viewpoint. The reader can only know what the narrator knows, which creates opportunities for dramatic irony or unreliable narration.</li>
  <li><strong>Third person limited</strong> — The story follows one character closely using "he/she/they," but the reader only sees events from that character's perspective.</li>
  <li><strong>Third person omniscient</strong> — The narrator knows everything about every character. This allows the writer to reveal information strategically, building suspense or irony.</li>
</ul>

<div class="text-extract"><strong>Text Extract:</strong> "I pressed my back against the cold stone wall and tried to slow my breathing. Footsteps echoed somewhere below — heavy, deliberate, getting closer. I knew I should run, but my legs would not move."<br><br>This first-person extract uses sensory detail ("cold stone wall"), short sentences, and the narrator's internal thoughts to create suspense. The reader shares the narrator's fear because we are trapped inside their perspective.</div>
`,
    quiz: [
      { id: 'y7t3-m1-q1', question: 'What is a narrative convention?', options: ['A type of poem', 'A commonly used technique or element in storytelling', 'A grammar rule for writing stories', 'A meeting where authors discuss their work'], correct: 1, explanation: 'A narrative convention is a recognised storytelling technique or element — such as plot, character, setting, conflict, and point of view — that writers use to shape their stories.' },
      { id: 'y7t3-m1-q2', question: 'Which stage of Freytag\'s Pyramid represents the moment of highest tension?', options: ['Exposition', 'Rising action', 'Climax', 'Resolution'], correct: 2, explanation: 'The climax is the turning point of the story where the central conflict reaches its peak intensity. It is the moment of highest tension.' },
      { id: 'y7t3-m1-q3', question: 'What does "in medias res" mean?', options: ['At the end of the story', 'In the middle of things', 'Once upon a time', 'In a different language'], correct: 1, explanation: 'In medias res is a Latin phrase meaning "in the middle of things." It describes a story that opens in the middle of the action rather than at the beginning.' },
      { id: 'y7t3-m1-q4', question: 'A character struggling with their own guilt is an example of which type of conflict?', options: ['Character vs. Character', 'Character vs. Nature', 'Character vs. Society', 'Character vs. Self'], correct: 3, explanation: 'A character battling internal feelings like guilt, fear, or doubt is an example of Character vs. Self conflict — an internal struggle rather than an external one.' },
      { id: 'y7t3-m1-q5', question: 'What is the difference between plot and conflict?', options: ['They mean the same thing', 'Plot is the sequence of events; conflict is the underlying struggle', 'Conflict is the sequence of events; plot is the theme', 'Plot only exists in novels, not short stories'], correct: 1, explanation: 'Plot is what happens — the sequence of events. Conflict is the underlying struggle that drives those events and gives them meaning. A plot without conflict would be a list of things that happen with no tension.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Moral Themes in Folk Tales
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m2',
    title: 'Moral Themes in Folk Tales',
    duration: '40 min',
    content: `
<h2>Messages and Meanings in Traditional Stories</h2>

<p>For thousands of years, humans have told stories not just to entertain, but to teach. Folk tales, fables, myths, and legends all carry <strong>moral themes</strong> — lessons about right and wrong, wisdom and foolishness, kindness and cruelty. Understanding how these stories communicate their messages will help you analyse any text that explores moral ideas.</p>

<div class="key-term"><strong>Key Term: Moral Theme</strong> — The underlying message or lesson a story conveys about human behaviour, values, or society. A moral theme answers the question: "What does this story want us to learn?"</div>

<h3>What Is a Folk Tale?</h3>

<p>A folk tale is a traditional story that has been passed down through generations, usually by word of mouth. Folk tales exist in every culture in the world. They share several key features:</p>

<ul>
  <li><strong>Simple characters</strong> — Often representing types rather than individuals: the wise old woman, the cunning trickster, the brave youngest child.</li>
  <li><strong>Clear moral lessons</strong> — Good is rewarded; evil is punished. The lesson is often stated directly or implied through the outcome.</li>
  <li><strong>Magical or supernatural elements</strong> — Talking animals, enchanted objects, transformations, and impossible tasks.</li>
  <li><strong>Repetition</strong> — The rule of three is extremely common: three wishes, three brothers, three tasks.</li>
  <li><strong>Universal themes</strong> — Justice, kindness, honesty, courage, and the dangers of greed or vanity.</li>
</ul>

<h3>Fables vs. Folk Tales vs. Myths</h3>

<p>It is important to understand the differences between these related types of traditional story:</p>

<ul>
  <li><strong>Fables</strong> — Short stories, usually featuring animals, with an explicit moral stated at the end. Example: Aesop's "The Tortoise and the Hare" teaches that slow and steady wins the race.</li>
  <li><strong>Folk tales</strong> — Longer traditional stories with a moral lesson woven into the narrative. Example: "Cinderella" rewards kindness and punishes cruelty.</li>
  <li><strong>Myths</strong> — Stories that explain how the world works, often involving gods and supernatural forces. Example: The Greek myth of Icarus warns against recklessness and pride.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about moral themes, always explain HOW the theme is communicated, not just WHAT it is. For example: "The theme of greed is communicated through the character's downfall — he loses everything because he wanted more than he needed. This shows the reader that..."</div>

<h3>Common Moral Themes in Folk Tales</h3>

<ol>
  <li><strong>Kindness is rewarded</strong> — Characters who show compassion to strangers, animals, or the less fortunate are rewarded with wealth, love, or magical help.</li>
  <li><strong>Greed leads to ruin</strong> — Characters who are greedy, selfish, or ungrateful always lose what they have. The moral: be content with enough.</li>
  <li><strong>Cleverness defeats strength</strong> — The smallest or weakest character often wins through intelligence rather than force. This teaches that brains matter more than brawn.</li>
  <li><strong>Honesty is the best policy</strong> — Liars and deceivers are exposed and punished; truthful characters earn trust and respect.</li>
  <li><strong>Appearances are deceptive</strong> — The beautiful character may be wicked inside; the ugly one may be noble. This theme challenges prejudice and encourages looking beneath the surface.</li>
</ol>

<div class="text-extract"><strong>Text Extract — From a West African folk tale:</strong> "The spider asked the sky god for all the world's stories. 'You are too small,' laughed the sky god. 'Bring me the python, the hornets, and the leopard, and the stories shall be yours.' The spider was small, but he was clever. One by one, he captured all three — not by strength, but by wit."<br><br>This extract illustrates the theme that cleverness defeats strength. The spider succeeds not because he is powerful, but because he is resourceful and intelligent.</div>

<h3>How Writers Communicate Moral Themes</h3>

<p>Writers do not simply state their message. They embed it in the story using various techniques:</p>

<ul>
  <li><strong>Characterisation</strong> — The protagonist embodies the moral value (e.g., kindness) while the antagonist represents the opposite (e.g., cruelty).</li>
  <li><strong>Consequences</strong> — Good actions lead to rewards; bad actions lead to punishment. The outcome teaches the lesson.</li>
  <li><strong>Symbolism</strong> — Objects, animals, or settings represent abstract ideas. A dark forest might symbolise danger or the unknown.</li>
  <li><strong>Repetition and pattern</strong> — The rule of three reinforces the message: two characters fail because of a flaw, and the third succeeds because of a virtue.</li>
  <li><strong>Direct statement</strong> — Some stories, especially fables, state the moral explicitly at the end.</li>
</ul>

<div class="model-answer"><strong>Model Answer — Identifying a Moral Theme:</strong> The folk tale conveys the moral theme that greed leads to destruction. The fisherman's wife repeatedly demands more — a cottage, a castle, a palace — and each time the sea grows darker and more violent, symbolising the growing danger of her greed. When she finally demands to be ruler of the universe, everything is taken away and they are returned to their humble hut. The writer uses the escalating pattern of wishes to show the reader that wanting too much will cost you everything you already have.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply stating "the moral is that greed is bad" without explaining how the writer communicates this. You must always link the moral theme to specific techniques: characterisation, consequences, symbolism, or structure.</div>

<h3>Why Folk Tales Still Matter</h3>

<p>Folk tales may seem simple, but their themes appear in modern literature, film, and everyday life. The Harry Potter series explores the same themes as ancient folk tales: the power of love, the danger of seeking immortality, and the idea that our choices define us. By studying folk tales, you learn to identify moral themes in any text — a skill that is central to English literature analysis at every level.</p>
`,
    quiz: [
      { id: 'y7t3-m2-q1', question: 'What is a moral theme?', options: ['The main character in a story', 'The setting of a folk tale', 'The underlying message or lesson a story conveys', 'The climax of the plot'], correct: 2, explanation: 'A moral theme is the underlying message or lesson about human behaviour, values, or society that a story conveys. It answers the question: "What does this story want us to learn?"' },
      { id: 'y7t3-m2-q2', question: 'What is the main difference between a fable and a folk tale?', options: ['Fables are longer than folk tales', 'Fables have an explicit moral stated at the end', 'Folk tales never include animals', 'There is no difference'], correct: 1, explanation: 'Fables are short stories (usually featuring animals) with a moral explicitly stated at the end. Folk tales are longer traditional stories where the moral is woven into the narrative.' },
      { id: 'y7t3-m2-q3', question: 'In the West African folk tale extract, what theme does the spider story illustrate?', options: ['Honesty is the best policy', 'Appearances are deceptive', 'Cleverness defeats strength', 'Greed leads to ruin'], correct: 2, explanation: 'The spider succeeds in capturing much larger and more dangerous creatures through wit and resourcefulness rather than physical strength, illustrating the theme that cleverness defeats strength.' },
      { id: 'y7t3-m2-q4', question: 'How do writers typically communicate moral themes in folk tales?', options: ['Only through dialogue', 'Through characterisation, consequences, symbolism, and pattern', 'By writing the moral in the title', 'Through footnotes at the bottom of the page'], correct: 1, explanation: 'Writers communicate moral themes through characterisation (good vs. bad characters), consequences (rewards and punishments), symbolism (objects representing ideas), and patterns like the rule of three.' },
      { id: 'y7t3-m2-q5', question: 'Why is simply stating "the moral is greed is bad" considered a weak response?', options: ['Because greed is not actually a theme in folk tales', 'Because you should never mention morals in an essay', 'Because it does not explain how the writer communicates the theme', 'Because examiners prefer longer sentences'], correct: 2, explanation: 'A strong response explains HOW the writer communicates the moral theme using techniques such as characterisation, consequences, symbolism, or structural patterns. Simply stating the moral without analysis shows limited understanding.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Setting as Symbol
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m3',
    title: 'Setting as Symbol',
    duration: '40 min',
    content: `
<h2>When Places Mean More Than They Seem</h2>

<p>In everyday life, a forest is just a forest and a storm is just a storm. But in literature, settings are rarely neutral. Writers choose locations, weather, seasons, and times of day to create mood, reflect a character's emotions, and communicate deeper meanings. When a setting represents something beyond itself, it becomes a <strong>symbol</strong>.</p>

<div class="key-term"><strong>Key Term: Symbolism</strong> — The use of an object, place, colour, or element to represent an abstract idea or concept. In literature, a dark forest might symbolise danger, the unknown, or a character's fear.</div>

<h3>Setting Is Never Just a Backdrop</h3>

<p>Many students describe settings as if they are stage scenery — nice to look at but not important to the story. This is a mistake. In skilled writing, the setting is woven into the meaning of the text. Consider these questions when analysing any setting:</p>

<ul>
  <li><strong>What mood or atmosphere does the setting create?</strong> A crumbling house creates unease; a sunlit meadow creates calm.</li>
  <li><strong>How does the setting reflect the characters?</strong> A lonely character might live in an isolated cottage; a trapped character might be surrounded by walls.</li>
  <li><strong>What does the setting symbolise?</strong> A journey through a dark tunnel might symbolise a difficult period in someone's life. Emerging into light might symbolise hope.</li>
  <li><strong>How does the setting change?</strong> If the weather shifts from sunshine to storm as the plot darkens, the writer is using the setting to mirror the narrative.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing setting, always connect it to character and theme. Never just describe what the setting looks like. Explain what it means and why the writer chose it. The question is always: "What effect does this have on the reader?"</div>

<h3>The Pathetic Fallacy</h3>

<p>One of the most important techniques related to setting is the <strong>pathetic fallacy</strong> — when the weather or environment reflects the emotions of a character or the mood of the narrative.</p>

<div class="key-term"><strong>Key Term: Pathetic Fallacy</strong> — A literary technique where the weather or natural environment reflects human emotions. "Pathetic" comes from the Greek word pathos, meaning emotion or suffering. It is NOT the same as personification, though both give human qualities to non-human things. Pathetic fallacy specifically links nature to mood.</div>

<p>Examples of pathetic fallacy:</p>
<ul>
  <li>A thunderstorm during a dramatic argument — the violence of the weather mirrors the anger of the characters.</li>
  <li>Sunshine breaking through clouds after a character overcomes their problem — nature reflects their emotional relief.</li>
  <li>Fog obscuring a character's path when they face a difficult decision — the unclear weather mirrors their uncertainty.</li>
</ul>

<h3>Common Symbolic Settings</h3>

<p>Certain settings appear again and again in literature because they carry powerful symbolic weight:</p>

<ul>
  <li><strong>The forest or wilderness</strong> — Danger, the unknown, transformation, or a journey of self-discovery. In fairy tales, characters enter the forest as one person and emerge as another.</li>
  <li><strong>The sea or ocean</strong> — Freedom, vastness, the subconscious, uncontrollable power, or emotional depth.</li>
  <li><strong>The city</strong> — Civilisation, progress, corruption, anonymity, or social inequality.</li>
  <li><strong>A locked room or prison</strong> — Entrapment, powerlessness, or psychological confinement.</li>
  <li><strong>A garden</strong> — Innocence, paradise, growth, or (when neglected) decay and lost potential.</li>
  <li><strong>A crossroads or bridge</strong> — A moment of decision, transition, or change.</li>
</ul>

<div class="text-extract"><strong>Text Extract:</strong> "The garden had not been tended for years. Weeds choked the flowerbeds, and the gate hung from a single rusted hinge. Through the tangled undergrowth, the remains of a stone path could just be seen — cracked, overgrown, leading nowhere."<br><br>This neglected garden symbolises abandonment and decay. The "cracked" path that leads "nowhere" suggests lost direction and broken connections. The fact that the garden was once cultivated but is now wild implies something beautiful that has been neglected and ruined.</div>

<h3>Analysing Setting: A Step-by-Step Approach</h3>

<ol>
  <li><strong>Identify key details</strong> — What specific words describe the setting? List them.</li>
  <li><strong>Consider connotations</strong> — What ideas does each word suggest? "Crumbling" suggests decay and neglect; "gleaming" suggests wealth or purity.</li>
  <li><strong>Link to mood</strong> — What atmosphere do these details create? Is it threatening, peaceful, melancholy, or oppressive?</li>
  <li><strong>Link to character</strong> — How does the setting reflect what the character is feeling or experiencing?</li>
  <li><strong>Link to theme</strong> — Does the setting connect to a bigger idea in the text, such as isolation, power, loss, or change?</li>
</ol>

<div class="model-answer"><strong>Model Answer — Analysing Setting as Symbol:</strong> The writer uses the setting of the abandoned garden to symbolise the protagonist's emotional state. The "weeds" that have "choked the flowerbeds" suggest that negative feelings — perhaps grief or depression — have overwhelmed what was once healthy and beautiful. The verb "choked" is particularly effective because it implies violence and suffocation, as if the neglect is actively destroying the garden. Furthermore, the path that leads "nowhere" mirrors the character's sense of purposelessness. The writer uses this symbolic setting to externalise the character's internal turmoil, allowing the reader to see their emotional landscape reflected in the physical world around them.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing pathetic fallacy with personification. Personification gives human qualities to any non-human thing ("the trees danced"). Pathetic fallacy specifically uses nature or weather to reflect human emotions ("the sky wept as she grieved"). All pathetic fallacy involves nature, but not all personification is pathetic fallacy.</div>
`,
    quiz: [
      { id: 'y7t3-m3-q1', question: 'What is symbolism in literature?', options: ['When a character speaks in riddles', 'When an object or place represents an abstract idea', 'When the writer uses long sentences', 'When the narrator is unreliable'], correct: 1, explanation: 'Symbolism is the use of an object, place, colour, or element to represent a deeper abstract idea or concept. A dark forest, for example, might symbolise danger or the unknown.' },
      { id: 'y7t3-m3-q2', question: 'What is pathetic fallacy?', options: ['A logical error in an argument', 'When a character makes a mistake', 'When weather or environment reflects human emotions', 'When a story has a sad ending'], correct: 2, explanation: 'Pathetic fallacy is a literary technique where the weather or natural environment mirrors the emotions of a character or the mood of the narrative.' },
      { id: 'y7t3-m3-q3', question: 'In the text extract, what does the neglected garden symbolise?', options: ['The character\'s wealth', 'Abandonment and decay', 'The arrival of spring', 'A journey to a new place'], correct: 1, explanation: 'The neglected garden with its weeds, rusted gate, and cracked path symbolises abandonment, decay, and lost direction. It reflects something once beautiful that has been left to ruin.' },
      { id: 'y7t3-m3-q4', question: 'Why is it a mistake to describe settings as "just a backdrop"?', options: ['Because backdrops are only used in theatre', 'Because settings create mood, reflect characters, and carry symbolic meaning', 'Because settings are always more important than characters', 'Because examiners do not like the word "backdrop"'], correct: 1, explanation: 'In literature, settings are carefully chosen to create mood, reflect characters\' emotions, and communicate deeper symbolic meanings. Treating them as just a backdrop misses these layers of meaning.' },
      { id: 'y7t3-m3-q5', question: 'What is the difference between pathetic fallacy and personification?', options: ['They are exactly the same technique', 'Pathetic fallacy only uses weather/nature to reflect emotions; personification gives human qualities to anything non-human', 'Personification only applies to animals', 'Pathetic fallacy is used in poetry only'], correct: 1, explanation: 'Pathetic fallacy specifically uses weather or the natural environment to mirror human emotions. Personification is broader — it gives human qualities to any non-human thing, not necessarily linked to mood or emotion.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Comparing Stories
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m4',
    title: 'Comparing Stories',
    duration: '40 min',
    content: `
<h2>Finding Similarities and Differences</h2>

<p>Comparing texts is one of the most important skills in English. It is not enough to write about one text and then write about another — you must actively compare them, identifying where they are similar, where they differ, and what effect those similarities and differences have. Comparison shows that you can think analytically across texts, which is a higher-order skill.</p>

<div class="key-term"><strong>Key Term: Comparison</strong> — The process of examining two or more texts to identify similarities and differences in their themes, characters, language, structure, or techniques. Effective comparison goes beyond surface observations to analyse why writers make different choices.</div>

<h3>What Can You Compare?</h3>

<p>When comparing two stories, you can focus on any of the following areas:</p>

<ul>
  <li><strong>Theme</strong> — Do the stories explore the same ideas (e.g., loss, courage, injustice)? Do they reach the same conclusions about those ideas?</li>
  <li><strong>Character</strong> — Are the protagonists similar or different? Do they face the same challenges? How do they respond differently?</li>
  <li><strong>Setting</strong> — How do the settings differ? What effect does each setting create? Do both writers use setting symbolically?</li>
  <li><strong>Structure</strong> — Do both stories follow a linear structure, or does one use flashbacks? How do the openings and endings compare?</li>
  <li><strong>Language and technique</strong> — Do both writers use similar methods (e.g., metaphor, short sentences), or do they take different approaches?</li>
  <li><strong>Narrative voice</strong> — Is one told in first person and the other in third? How does this affect the reader's connection to the characters?</li>
</ul>

<h3>Comparison Language</h3>

<p>Using the right connectives and phrases makes your comparison clear and sophisticated:</p>

<p><strong>For similarities:</strong></p>
<ul>
  <li>Similarly, ... / In the same way, ... / Like [Text A], [Text B] also ...</li>
  <li>Both writers ... / Both texts explore ...</li>
  <li>This parallels ... / This mirrors the way ...</li>
</ul>

<p><strong>For differences:</strong></p>
<ul>
  <li>However, ... / In contrast, ... / Whereas ...</li>
  <li>On the other hand, ... / Unlike [Text A], [Text B] ...</li>
  <li>While [Text A] ..., [Text B] ...</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best comparisons are integrated — you discuss both texts in the same paragraph rather than writing about them separately. Use connectives like "similarly," "however," and "whereas" to weave both texts together in every paragraph.</div>

<h3>The Alternating Method vs. the Block Method</h3>

<p>There are two main ways to organise a comparative essay:</p>

<p><strong>Block Method (weaker):</strong></p>
<ol>
  <li>Write everything about Text A.</li>
  <li>Write everything about Text B.</li>
  <li>Hope the examiner spots the connections.</li>
</ol>

<p><strong>Alternating Method (stronger):</strong></p>
<ol>
  <li>Make a point about Text A.</li>
  <li>Compare it directly with Text B in the same paragraph.</li>
  <li>Analyse the similarities and/or differences.</li>
  <li>Repeat for each point.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Text A in the first half of your response and Text B in the second half, with no comparison in between. This is the block method, and it scores poorly because it shows description rather than comparison. Always integrate both texts in every paragraph.</div>

<div class="text-extract"><strong>Text Extract A:</strong> "The forest closed around them like a fist. Branches scraped at their faces and the ground squelched beneath their boots. There was no path. There was no sky. Only the endless, suffocating dark."<br><br><strong>Text Extract B:</strong> "The hills stretched out before her, golden in the late afternoon sun. The air tasted of heather and freedom. She had never been so far from home, and she had never felt so alive."<br><br>Both settings accompany characters on a journey, but the writers create opposing atmospheres. Extract A uses oppressive imagery — "closed like a fist" and "suffocating dark" — to suggest danger and entrapment. Extract B, in contrast, uses expansive language — "stretched out" and "freedom" — to create a sense of liberation and joy.</div>

<h3>Building a Comparative Paragraph</h3>

<p>A strong comparative paragraph follows this pattern:</p>

<ol>
  <li><strong>Comparative point</strong> — State the similarity or difference you will explore.</li>
  <li><strong>Evidence from Text A</strong> — Provide a quotation from the first text.</li>
  <li><strong>Analysis of Text A</strong> — Explain the effect of this evidence.</li>
  <li><strong>Link to Text B</strong> — Use a comparison connective (similarly / however / whereas).</li>
  <li><strong>Evidence from Text B</strong> — Provide a quotation from the second text.</li>
  <li><strong>Analysis of Text B</strong> — Explain the effect and compare it to Text A.</li>
</ol>

<div class="model-answer"><strong>Model Answer — Comparative Paragraph:</strong> Both writers use setting to reflect their characters' emotional states, but they create contrasting atmospheres. In Extract A, the forest is described as closing "like a fist," a simile that creates a sense of entrapment and threat. The personification suggests the setting itself is hostile, mirroring the character's fear. In contrast, Extract B presents the hills as "golden in the late afternoon sun," using warm colour imagery to convey safety and happiness. While Extract A's character is trapped in "suffocating dark," Extract B's character experiences "freedom," suggesting she has escaped something the first character has not. The opposing settings allow each writer to externalise their character's inner world through the landscape.</div>
`,
    quiz: [
      { id: 'y7t3-m4-q1', question: 'What does effective comparison require?', options: ['Writing about each text separately', 'Identifying similarities and differences between texts', 'Only focusing on one text at a time', 'Copying quotations from both texts'], correct: 1, explanation: 'Effective comparison requires actively identifying similarities and differences between texts and explaining why those similarities and differences matter.' },
      { id: 'y7t3-m4-q2', question: 'Which is a stronger approach: the block method or the alternating method?', options: ['The block method', 'The alternating method', 'They are equally effective', 'Neither — you should only write about one text'], correct: 1, explanation: 'The alternating method is stronger because it integrates both texts in every paragraph, showing direct comparison rather than leaving the reader to make connections themselves.' },
      { id: 'y7t3-m4-q3', question: 'Which connective would you use to introduce a difference between two texts?', options: ['Similarly', 'Both writers', 'In the same way', 'However'], correct: 3, explanation: '"However" introduces a contrast or difference between two texts. "Similarly," "Both writers," and "In the same way" all introduce similarities.' },
      { id: 'y7t3-m4-q4', question: 'What can you compare in two stories?', options: ['Only the characters', 'Only the language', 'Theme, character, setting, structure, language, and narrative voice', 'Only the plot events'], correct: 2, explanation: 'You can compare any aspect of two stories: their themes, characters, settings, structural choices, language techniques, and narrative voice. The best comparisons focus on the areas that reveal the most interesting similarities or differences.' },
      { id: 'y7t3-m4-q5', question: 'In the text extracts, what is the key difference between the two settings?', options: ['Both are forests', 'Extract A creates entrapment while Extract B creates liberation', 'Extract B is set at night', 'They are in the same location'], correct: 1, explanation: 'Extract A uses oppressive imagery ("closed like a fist," "suffocating dark") to create entrapment, while Extract B uses expansive imagery ("stretched out," "freedom") to create a sense of liberation and joy.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Structured Analytical Paragraphs
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m5',
    title: 'Structured Analytical Paragraphs',
    duration: '40 min',
    content: `
<h2>Comparing Two Texts in a Structured Paragraph</h2>

<p>Writing a clear, well-organised analytical paragraph is the single most important skill in English Literature. Every essay you will ever write — at KS3, GCSE, and beyond — is built from analytical paragraphs. If you can write one excellent paragraph, you can write an excellent essay. This module teaches you the structure, language, and thinking that makes a paragraph effective when comparing two texts.</p>

<div class="key-term"><strong>Key Term: Analytical Paragraph</strong> — A paragraph that makes a clear point, supports it with evidence, and explains how and why the evidence works. Analysis means examining how a writer creates effects — it goes beyond describing what happens to explaining why and how.</div>

<h3>The PEEL Structure for Comparison</h3>

<p>PEEL stands for Point, Evidence, Explain, Link. When comparing two texts, the structure expands slightly:</p>

<ol>
  <li><strong>P — Point</strong> — State the comparison you are making. What similarity or difference are you going to explore?</li>
  <li><strong>E — Evidence from Text A</strong> — Provide a short, embedded quotation from the first text.</li>
  <li><strong>E — Explain Text A</strong> — Analyse the evidence. What technique is used? What effect does it create? How does it relate to the writer's purpose?</li>
  <li><strong>E — Evidence from Text B</strong> — Use a comparative connective and provide a quotation from the second text.</li>
  <li><strong>E — Explain Text B</strong> — Analyse this evidence and compare it to Text A.</li>
  <li><strong>L — Link</strong> — Connect your analysis back to the question or to a wider theme.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The quality of your explanation is what earns the most marks. Identifying a technique is worth something, but explaining its effect on the reader is what pushes your response into the higher mark bands. Always ask yourself: "So what? What effect does this have?"</div>

<h3>Embedding Quotations</h3>

<p>Strong paragraphs embed quotations into sentences rather than bolting them on. Compare these approaches:</p>

<p><strong>Bolted on (weaker):</strong> The writer uses a metaphor. "The road stretched before her like a silver ribbon." This shows the road is long.</p>

<p><strong>Embedded (stronger):</strong> The writer presents the road as "a silver ribbon," a metaphor that creates a sense of beauty and possibility, as if the journey ahead is something precious and inviting.</p>

<div class="key-term"><strong>Key Term: Embedded Quotation</strong> — A quotation woven into your own sentence so that it reads fluently as part of your argument. Embedding shows confidence and allows you to analyse specific words rather than quoting long chunks of text.</div>

<h3>Analytical Verbs and Phrases</h3>

<p>Using sophisticated analytical vocabulary elevates your writing. Here are phrases to replace basic language:</p>

<ul>
  <li>Instead of "this shows" — try: <strong>this suggests / implies / conveys / reveals / emphasises / highlights / reinforces</strong></li>
  <li>Instead of "the writer uses" — try: <strong>the writer employs / utilises / deploys / crafts / constructs</strong></li>
  <li>Instead of "this makes the reader feel" — try: <strong>this evokes / creates a sense of / compels the reader to / positions the reader to</strong></li>
</ul>

<div class="text-extract"><strong>Text Extract A (from a modern short story):</strong> "His room was a cage — four white walls and a window too high to reach. He had counted the cracks in the ceiling so many times he could draw them from memory."<br><br><strong>Text Extract B (from a Victorian novel):</strong> "The schoolroom was cold and bare, furnished with nothing but hard benches and a blackboard on which the rules of conduct were written in capital letters that seemed to shout."</div>

<div class="model-answer"><strong>Model Answer — Comparative Analytical Paragraph:</strong> Both writers use setting to convey a sense of confinement, but they achieve this through different techniques. In Extract A, the protagonist's room is described as "a cage," a metaphor that dehumanises the character by comparing his living space to an animal enclosure. The detail that the window is "too high to reach" reinforces his powerlessness — he can see the possibility of freedom but cannot access it. Similarly, Extract B presents the schoolroom as "cold and bare," using sparse adjectives to create a sterile, unwelcoming atmosphere. However, whereas Extract A focuses on physical entrapment, Extract B emphasises psychological control: the rules "written in capital letters that seemed to shout" personify the text itself as an authority figure, suggesting the children are controlled not by walls but by rigid discipline. Both writers use their settings to criticise the treatment of young people, but Extract A presents a more extreme, prison-like confinement while Extract B reveals a subtler institutional oppression.</div>

<h3>Common Pitfalls to Avoid</h3>

<ul>
  <li><strong>Feature spotting</strong> — Naming a technique without explaining its effect. "The writer uses a metaphor" scores almost nothing on its own.</li>
  <li><strong>Retelling</strong> — Describing what happens in the text instead of analysing how the writer creates meaning.</li>
  <li><strong>Vague analysis</strong> — Phrases like "this makes it interesting" or "this makes the reader want to read on" are too generic. Be specific about the effect.</li>
  <li><strong>Quoting too much</strong> — Keep quotations short. One to five words is usually enough. If you cannot analyse every word in your quotation, it is too long.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "the writer uses a simile to make it more descriptive." This is feature spotting — you have identified the technique but not explained its specific effect. Instead, explain what the simile suggests, what feelings it creates, and how it connects to the writer's wider purpose.</div>
`,
    quiz: [
      { id: 'y7t3-m5-q1', question: 'What does PEEL stand for?', options: ['Plot, Event, Explain, Language', 'Point, Evidence, Explain, Link', 'Paragraph, Example, Effect, List', 'Purpose, Evidence, Evaluate, Learn'], correct: 1, explanation: 'PEEL stands for Point, Evidence, Explain, Link. It is a structure for writing analytical paragraphs that ensures every point is supported by evidence and analysis.' },
      { id: 'y7t3-m5-q2', question: 'What is an embedded quotation?', options: ['A very long quotation', 'A quotation placed at the end of an essay', 'A quotation woven into your own sentence', 'A quotation from the examiner'], correct: 2, explanation: 'An embedded quotation is woven into your own sentence so it reads fluently as part of your argument. It shows confidence and allows you to analyse specific words.' },
      { id: 'y7t3-m5-q3', question: 'What is "feature spotting"?', options: ['Finding hidden features in a text', 'Naming a technique without explaining its effect', 'Writing about every technique in the text', 'Using a magnifying glass to read closely'], correct: 1, explanation: 'Feature spotting means identifying a technique (such as a metaphor or simile) without explaining what effect it has on the reader. It scores poorly because analysis requires explanation, not just identification.' },
      { id: 'y7t3-m5-q4', question: 'Which analytical phrase is more sophisticated than "this shows"?', options: ['This tells us', 'This means', 'This suggests / implies / conveys', 'This is'], correct: 2, explanation: '"This suggests," "implies," and "conveys" are more sophisticated alternatives to "this shows" because they indicate interpretation and analysis rather than simple description.' },
      { id: 'y7t3-m5-q5', question: 'In the model answer, how does the writer of Extract B create a sense of control?', options: ['By using a cage metaphor', 'By personifying the rules as shouting', 'By describing a locked door', 'By using first-person narration'], correct: 1, explanation: 'In Extract B, the rules are "written in capital letters that seemed to shout," which personifies the text as an authority figure. This suggests the children are controlled by rigid discipline rather than physical barriers.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Introduction to Poetry
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m6',
    title: 'Introduction to Poetry',
    duration: '40 min',
    content: `
<h2>What Makes a Poem a Poem?</h2>

<p>Poetry is one of the oldest forms of literature. Long before people could read or write, they used poetry to tell stories, pass on knowledge, and express powerful emotions. But what actually makes a poem different from a piece of prose? Why does a poet choose to write in lines rather than paragraphs? Understanding the answer to this question is the foundation of everything you will learn about poetry.</p>

<h3>Poetry vs. Prose</h3>

<p>Prose is the ordinary form of written language — sentences organised into paragraphs. Novels, newspaper articles, and essays are all written in prose. Poetry is different in several key ways:</p>

<ul>
  <li><strong>Line breaks</strong> — A poem is arranged in lines, and the poet deliberately chooses where each line ends. This creates rhythm, emphasis, and sometimes surprise.</li>
  <li><strong>Condensed language</strong> — Every word in a poem carries more weight than in prose. Poets choose words for their sound, rhythm, connotation, and multiple meanings.</li>
  <li><strong>Sound patterns</strong> — Poetry often uses rhyme, rhythm, alliteration, and other sound devices to create a musical quality.</li>
  <li><strong>Imagery</strong> — Poems rely heavily on imagery and figurative language to create vivid pictures and emotional responses.</li>
  <li><strong>Form and structure</strong> — The shape of a poem on the page is a deliberate choice. Sonnets have 14 lines; haikus have 3. The form itself contributes to the meaning.</li>
</ul>

<div class="key-term"><strong>Key Term: Line Break</strong> — The point where a line of poetry ends and a new line begins. Line breaks are a poet's most basic tool for controlling pace, emphasis, and meaning. A line break can create a pause, force the reader to consider a word more carefully, or create surprise when the next line changes direction.</div>

<h3>Stanzas: The Building Blocks of Poetry</h3>

<p>Just as prose is divided into paragraphs, poetry is divided into <strong>stanzas</strong>. A stanza is a group of lines separated from other groups by a space. Different stanza lengths have different names:</p>

<ul>
  <li><strong>Couplet</strong> — 2 lines</li>
  <li><strong>Tercet</strong> — 3 lines</li>
  <li><strong>Quatrain</strong> — 4 lines (the most common stanza form)</li>
  <li><strong>Sestet</strong> — 6 lines</li>
  <li><strong>Octave</strong> — 8 lines</li>
</ul>

<div class="key-term"><strong>Key Term: Stanza</strong> — A group of lines in a poem, separated from other groups by a blank line. Stanzas are the poetic equivalent of paragraphs. Each stanza often explores a different idea, image, or stage of the poem's argument.</div>

<h3>Common Poetry Forms</h3>

<p>Some poems follow strict rules about length, rhyme, and structure. These are called <strong>fixed forms</strong>:</p>

<ul>
  <li><strong>Sonnet</strong> — 14 lines, usually about love or deep emotion. Shakespeare's sonnets follow a specific rhyme scheme (ABAB CDCD EFEF GG).</li>
  <li><strong>Haiku</strong> — 3 lines with a syllable pattern of 5-7-5. A Japanese form that captures a single moment, often in nature.</li>
  <li><strong>Ballad</strong> — A narrative poem that tells a story, often with a regular rhyme scheme and rhythm. Originally designed to be sung.</li>
  <li><strong>Limerick</strong> — 5 lines with an AABBA rhyme scheme. Usually humorous.</li>
  <li><strong>Free verse</strong> — Poetry with no regular rhyme or metre. The poet has complete freedom over line length and structure.</li>
</ul>

<div class="text-extract"><strong>Text Extract — A short poem:</strong><br>"I wandered lonely as a cloud<br>That floats on high o'er vales and hills,<br>When all at once I saw a crowd,<br>A host, of golden daffodils."<br><br>This quatrain uses a regular ABAB rhyme scheme ("cloud/crowd," "hills/daffodils"), a simile ("lonely as a cloud"), and visual imagery ("golden daffodils") to create a peaceful, reflective mood. The regular rhythm mirrors the gentle movement of clouds and flowers.</div>

<h3>How to Approach a Poem for the First Time</h3>

<p>Reading poetry can feel intimidating, but these steps make it manageable:</p>

<ol>
  <li><strong>Read it aloud</strong> — Poetry is meant to be heard. Reading aloud helps you feel the rhythm and hear the sound patterns.</li>
  <li><strong>Read it again</strong> — No one understands a poem fully on the first reading. Read it at least three times.</li>
  <li><strong>What is it about?</strong> — Summarise the content in one sentence. What is the poem describing or exploring?</li>
  <li><strong>Who is speaking?</strong> — Identify the speaker (not the poet, unless it is clearly autobiographical). What is their tone? What do they feel?</li>
  <li><strong>What stands out?</strong> — Which words, images, or techniques catch your attention? Why?</li>
  <li><strong>What is the deeper meaning?</strong> — What theme or message does the poem explore beneath the surface?</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Never say "the poet says" when you mean "the speaker says." The speaker of a poem is a character created by the poet — they are not necessarily the same person. Distinguishing between poet and speaker shows sophisticated understanding.</div>

<div class="model-answer"><strong>Model Answer — Responding to a Poem:</strong> The speaker describes a moment of unexpected beauty, comparing themselves to "a cloud" drifting aimlessly through the landscape. The simile creates a sense of solitude and detachment — the speaker is alone and directionless. However, the tone shifts when they encounter the daffodils, described as "a crowd" and "a host," language that personifies the flowers as a welcoming group of people. This contrast between the speaker's loneliness and the abundance of nature suggests that beauty can provide comfort and companionship even in moments of isolation.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming that every poem rhymes or that free verse is not "real" poetry. Free verse is one of the most common and respected forms of modern poetry. What makes it poetry is not rhyme, but the deliberate use of line breaks, imagery, and condensed language.</div>
`,
    quiz: [
      { id: 'y7t3-m6-q1', question: 'What is the main difference between poetry and prose?', options: ['Poetry is always about nature', 'Poetry uses line breaks, condensed language, and sound patterns', 'Prose is always fictional', 'Poetry must always rhyme'], correct: 1, explanation: 'Poetry is distinguished from prose by its use of line breaks, condensed language where every word carries extra weight, sound patterns like rhyme and rhythm, and deliberate structural choices.' },
      { id: 'y7t3-m6-q2', question: 'What is a stanza?', options: ['A type of poem', 'A rhyming couplet', 'A group of lines separated by a blank line', 'The title of a poem'], correct: 2, explanation: 'A stanza is a group of lines in a poem, separated from other groups by a blank line. Stanzas are the poetic equivalent of paragraphs.' },
      { id: 'y7t3-m6-q3', question: 'How many lines does a sonnet have?', options: ['10', '12', '14', '16'], correct: 2, explanation: 'A sonnet has 14 lines. It is one of the most well-known fixed forms of poetry, often used to explore themes of love, beauty, or deep emotion.' },
      { id: 'y7t3-m6-q4', question: 'Why should you distinguish between the "poet" and the "speaker"?', options: ['Because they always disagree', 'Because the speaker is a character created by the poet — they may not be the same person', 'Because the poet never appears in the poem', 'Because the speaker always lies'], correct: 1, explanation: 'The speaker of a poem is a character or voice created by the poet. They are not necessarily the same person. Distinguishing between them shows sophisticated understanding of how poetry works.' },
      { id: 'y7t3-m6-q5', question: 'What is free verse?', options: ['Poetry that is given away for free', 'Poetry with no regular rhyme or metre', 'Poetry written in a foreign language', 'Poetry that must be performed on stage'], correct: 1, explanation: 'Free verse is poetry that does not follow a regular rhyme scheme or metrical pattern. The poet has complete freedom over line length and structure, using line breaks and imagery to create meaning.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 — Poetic Methods: Rhyme and Rhythm
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m7',
    title: 'Poetic Methods: Rhyme and Rhythm',
    duration: '40 min',
    content: `
<h2>The Music of Poetry</h2>

<p>Before poetry was written down, it was spoken and sung. Rhyme and rhythm helped people remember long poems and stories, and they gave poetry its musical quality. Even today, these sonic devices are central to how poems create meaning. Understanding how rhyme and rhythm work will help you analyse poetry with precision and confidence.</p>

<h3>Rhyme</h3>

<p>Rhyme occurs when two or more words share the same end sound. It creates a sense of pattern, satisfaction, and connection between ideas. But rhyme does much more than just sound pleasant — it links words together, drawing the reader's attention to their relationship.</p>

<div class="key-term"><strong>Key Term: Rhyme Scheme</strong> — The pattern of rhymes at the end of each line, labelled using letters of the alphabet. The first end sound is A, the second is B, and so on. For example, ABAB means the first and third lines rhyme, and the second and fourth lines rhyme.</div>

<p><strong>Types of rhyme:</strong></p>
<ul>
  <li><strong>Full rhyme (perfect rhyme)</strong> — Words that rhyme completely: "moon/June," "night/light."</li>
  <li><strong>Half rhyme (slant rhyme)</strong> — Words that nearly rhyme but not quite: "moon/mine," "love/move." This creates a sense of unease or imperfection.</li>
  <li><strong>Internal rhyme</strong> — Rhyme that occurs within a single line rather than at the end: "I bring fresh showers for the thirsting flowers."</li>
  <li><strong>Eye rhyme</strong> — Words that look like they should rhyme but do not: "love/move," "cough/through."</li>
</ul>

<h3>Rhythm and Metre</h3>

<p>Rhythm in poetry is created by the pattern of <strong>stressed</strong> (emphasised) and <strong>unstressed</strong> (soft) syllables. When this pattern is regular and repeated, it is called <strong>metre</strong>.</p>

<div class="key-term"><strong>Key Term: Metre</strong> — The regular pattern of stressed and unstressed syllables in a line of poetry. Metre gives poetry its beat, like the rhythm of a drum. The most common metre in English poetry is iambic pentameter — five pairs of unstressed/stressed syllables per line.</div>

<p><strong>Common metrical patterns:</strong></p>
<ul>
  <li><strong>Iamb</strong> (da-DUM) — An unstressed syllable followed by a stressed one. Example: "a-WAKE," "to-DAY." Iambic rhythm sounds natural because it mirrors the rhythm of ordinary English speech.</li>
  <li><strong>Trochee</strong> (DUM-da) — A stressed syllable followed by an unstressed one. Example: "NIGH-tmare," "GAR-den." Trochaic rhythm sounds more forceful and insistent.</li>
  <li><strong>Spondee</strong> (DUM-DUM) — Two consecutive stressed syllables. Example: "HEART-BREAK," "DEAD-LOCK." Spondees create emphasis and slow the rhythm down.</li>
</ul>

<h3>Why Rhythm Matters</h3>

<p>Rhythm is not just decoration. It creates specific effects:</p>

<ul>
  <li><strong>Regular rhythm</strong> can create a sense of calm, order, control, or inevitability.</li>
  <li><strong>Irregular rhythm</strong> can create tension, unease, surprise, or a sense of something breaking down.</li>
  <li><strong>A sudden change in rhythm</strong> draws attention to that moment — the poet is telling you to pay attention.</li>
  <li><strong>Fast rhythm</strong> (short syllables, few pauses) creates excitement, urgency, or panic.</li>
  <li><strong>Slow rhythm</strong> (long syllables, many pauses) creates gravity, sadness, or reflection.</li>
</ul>

<div class="text-extract"><strong>Text Extract:</strong> "Tyger Tyger, burning bright,<br>In the forests of the night;<br>What immortal hand or eye,<br>Could frame thy fearful symmetry?"<br><br>The trochaic rhythm (DUM-da, DUM-da) creates a pounding, insistent beat that mirrors the power and energy of the tiger. The regular rhythm also gives the poem a chant-like, almost ritualistic quality, as if the speaker is performing an incantation.</div>

<h3>Enjambment and Caesura</h3>

<p>Two techniques that control the rhythm within a poem:</p>

<div class="key-term"><strong>Key Term: Enjambment</strong> — When a sentence or phrase runs over from one line to the next without punctuation. This creates a sense of momentum, urgency, or overflow — the idea cannot be contained within a single line.</div>

<div class="key-term"><strong>Key Term: Caesura</strong> — A pause in the middle of a line of poetry, usually created by punctuation (a comma, full stop, dash, or semicolon). Caesura breaks the flow and can create hesitation, reflection, or dramatic tension.</div>

<p>Example of enjambment: "I wandered lonely as a cloud / That floats on high o'er vales and hills" — the sentence flows across the line break, creating a gentle, drifting movement.</p>

<p>Example of caesura: "I met a traveller. From an antique land" — the full stop creates a sharp pause, breaking the rhythm and creating a moment of reflection.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When you identify enjambment or caesura, always explain the effect. Enjambment usually creates flow, momentum, or a sense of continuation. Caesura usually creates a pause for reflection, emphasis, or a shift in tone. Naming the technique without explaining its effect is feature spotting.</div>

<div class="model-answer"><strong>Model Answer — Analysing Rhyme and Rhythm:</strong> The poet uses a regular AABB rhyme scheme, creating a sense of order and predictability that mirrors the controlled, measured nature of the speaker's argument. However, the final couplet breaks this pattern with a half-rhyme ("love/move"), introducing a note of discord that undermines the surface calm. This subtle disruption suggests that beneath the speaker's composed exterior, there is emotional uncertainty. The contrast between the regular rhyme scheme and the final imperfect rhyme is deeply effective because it allows the poet to communicate inner turmoil without stating it directly.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply stating "the poem has an ABAB rhyme scheme" without explaining what effect this creates. Always connect rhyme and rhythm to meaning: does the regularity create calm, control, or predictability? Does a break in the pattern signal a shift in emotion or meaning?</div>
`,
    quiz: [
      { id: 'y7t3-m7-q1', question: 'What is a rhyme scheme?', options: ['A type of poem', 'The pattern of rhymes at the end of each line, labelled with letters', 'A plan for writing poetry', 'The title of a poetry collection'], correct: 1, explanation: 'A rhyme scheme is the pattern of end rhymes in a poem, labelled with letters of the alphabet. ABAB means the first and third lines rhyme, and the second and fourth lines rhyme.' },
      { id: 'y7t3-m7-q2', question: 'What is iambic pentameter?', options: ['Five pairs of stressed/unstressed syllables per line', 'Five pairs of unstressed/stressed syllables per line', 'Ten lines in a stanza', 'A type of rhyme'], correct: 1, explanation: 'Iambic pentameter consists of five iambs (da-DUM) per line — five pairs of an unstressed syllable followed by a stressed syllable. It is the most common metre in English poetry.' },
      { id: 'y7t3-m7-q3', question: 'What is enjambment?', options: ['A rhyme at the end of a line', 'When a sentence runs over from one line to the next without punctuation', 'A pause in the middle of a line', 'A type of stanza'], correct: 1, explanation: 'Enjambment occurs when a sentence or phrase continues past the end of a line and into the next line without any punctuation. It creates momentum and a sense of overflow.' },
      { id: 'y7t3-m7-q4', question: 'What effect does caesura typically create?', options: ['It speeds up the rhythm', 'It makes the poem rhyme', 'It creates a pause for reflection, emphasis, or dramatic tension', 'It makes the poem longer'], correct: 2, explanation: 'Caesura is a pause in the middle of a line, usually created by punctuation. It breaks the flow and creates a moment of hesitation, reflection, or dramatic tension.' },
      { id: 'y7t3-m7-q5', question: 'What is half rhyme?', options: ['Words that rhyme perfectly', 'Rhyme in the middle of a line', 'Words that nearly rhyme but not quite', 'A rhyme that only appears once'], correct: 2, explanation: 'Half rhyme (also called slant rhyme) occurs when words nearly rhyme but do not match perfectly — for example, "moon/mine" or "love/move." It creates a sense of unease or imperfection.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Poetic Methods: Imagery and Figurative Language
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m8',
    title: 'Poetic Methods: Imagery and Figurative Language',
    duration: '40 min',
    content: `
<h2>Painting Pictures with Words</h2>

<p>If rhyme and rhythm are the music of poetry, then imagery and figurative language are its art. Imagery is any language that creates a vivid picture in the reader's mind or appeals to their senses. Figurative language goes further — it says one thing but means another, creating unexpected connections that make the reader see the world in a new way.</p>

<div class="key-term"><strong>Key Term: Imagery</strong> — Language that appeals to the senses — sight, sound, smell, taste, and touch — to create vivid mental pictures. Imagery helps the reader experience what the poet is describing rather than just understanding it intellectually.</div>

<h3>Types of Imagery</h3>

<p>Imagery can appeal to any of the five senses:</p>

<ul>
  <li><strong>Visual imagery</strong> — What we see: "The lake was a sheet of glass under the pale moon."</li>
  <li><strong>Auditory imagery</strong> — What we hear: "The leaves whispered secrets to the wind."</li>
  <li><strong>Tactile imagery</strong> — What we feel (touch): "The rough bark scraped against her palms."</li>
  <li><strong>Olfactory imagery</strong> — What we smell: "The air was thick with the scent of lavender and rain."</li>
  <li><strong>Gustatory imagery</strong> — What we taste: "She tasted salt and iron on her cracked lips."</li>
</ul>

<h3>Figurative Language: Saying One Thing, Meaning Another</h3>

<p>Figurative language uses words in non-literal ways to create powerful comparisons and associations. The most important types are:</p>

<h4>Simile</h4>
<p>A comparison using "like" or "as." Similes draw a clear, explicit comparison between two things.</p>
<p>Example: "Her voice was like a bell, clear and bright." The comparison helps the reader hear the quality of the voice.</p>

<h4>Metaphor</h4>
<p>A comparison that states one thing IS another, without using "like" or "as." Metaphors are stronger and more direct than similes.</p>
<p>Example: "Time is a thief." Time does not literally steal, but the metaphor captures how it takes things from us without asking.</p>

<div class="key-term"><strong>Key Term: Extended Metaphor</strong> — A metaphor that is developed across several lines or an entire poem. Rather than a single comparison, the poet builds a sustained image. For example, comparing life to a journey and then describing hills (challenges), crossroads (decisions), and horizons (the future).</div>

<h4>Personification</h4>
<p>Giving human qualities to something non-human. This makes abstract or inanimate things feel alive and relatable.</p>
<p>Example: "The wind howled in fury." Wind cannot literally howl or feel fury, but personification creates a vivid, threatening image.</p>

<h4>Oxymoron</h4>
<p>Two contradictory words placed together. This creates tension and suggests complexity.</p>
<p>Example: "Bittersweet," "living death," "deafening silence."</p>

<h4>Hyperbole</h4>
<p>Extreme exaggeration used for emphasis or emotional effect.</p>
<p>Example: "I have told you a million times." Not literally true, but it conveys frustration powerfully.</p>

<div class="text-extract"><strong>Text Extract:</strong> "The fog comes<br>on little cat feet.<br>It sits looking<br>over harbor and city<br>on silent haunches<br>and then moves on."<br><br>This short poem uses an extended metaphor, comparing fog to a cat. The fog arrives on "little cat feet" (quietly, softly), "sits" and looks out (as a cat might perch on a windowsill), and then "moves on" (independently, without warning). The metaphor captures the silent, unpredictable, graceful nature of fog through the familiar image of a cat.</div>

<h3>Sound Devices</h3>

<p>Poets also use the sound of words to create effects:</p>

<ul>
  <li><strong>Alliteration</strong> — Repetition of consonant sounds at the start of words: "Peter Piper picked a peck." Creates rhythm and emphasis.</li>
  <li><strong>Sibilance</strong> — Repetition of "s" sounds: "the snake slithered silently." Creates a hissing, sinister effect.</li>
  <li><strong>Assonance</strong> — Repetition of vowel sounds within words: "the rain in Spain stays mainly." Creates musicality and mood.</li>
  <li><strong>Onomatopoeia</strong> — Words that sound like what they describe: "buzz," "crash," "whisper," "hiss." Creates immediacy and sensory impact.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing imagery, do not just name the type. Explain what picture it creates, what feelings it evokes, and how it connects to the poem's meaning. "The poet uses visual imagery" is worth almost nothing. "The image of the lake as 'a sheet of glass' creates stillness and fragility, suggesting the calm could shatter at any moment" is much stronger.</div>

<div class="model-answer"><strong>Model Answer — Analysing Figurative Language:</strong> The poet personifies the wind as something that "howled in fury," transforming a natural phenomenon into an aggressive, emotional being. The verb "howled" has connotations of pain and wildness, suggesting the storm is not just powerful but angry — as if nature itself is in distress. This personification creates a threatening atmosphere and positions the reader to feel vulnerable, as if the natural world has turned hostile. The technique is particularly effective because it shifts the wind from a passive force into an active antagonist, making the storm feel deliberate and targeted.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing simile and metaphor. A simile uses "like" or "as" to compare ("brave as a lion"). A metaphor states that something IS something else ("he was a lion in battle"). Metaphors are generally more powerful because they make the comparison direct and immediate.</div>
`,
    quiz: [
      { id: 'y7t3-m8-q1', question: 'What is imagery?', options: ['A type of poem', 'Language that appeals to the senses to create vivid mental pictures', 'A photograph inside a book', 'The title of a poem'], correct: 1, explanation: 'Imagery is language that appeals to the five senses — sight, sound, smell, taste, and touch — to create vivid mental pictures. It helps the reader experience what is being described.' },
      { id: 'y7t3-m8-q2', question: 'What is the difference between a simile and a metaphor?', options: ['Similes are longer than metaphors', 'A simile uses "like" or "as"; a metaphor says one thing IS another', 'There is no difference', 'Metaphors only appear in poetry'], correct: 1, explanation: 'A simile makes a comparison using "like" or "as" (brave as a lion). A metaphor states that something IS something else directly (he was a lion). Metaphors are more direct and often more powerful.' },
      { id: 'y7t3-m8-q3', question: 'What is personification?', options: ['Giving human qualities to something non-human', 'Describing a person in detail', 'Using someone\'s real name in a poem', 'Writing in first person'], correct: 0, explanation: 'Personification gives human qualities, emotions, or actions to non-human things. For example, "the wind howled" gives the human ability to howl to the wind.' },
      { id: 'y7t3-m8-q4', question: 'What is sibilance?', options: ['Repetition of vowel sounds', 'Repetition of "s" sounds', 'A type of rhyme', 'A long pause in a poem'], correct: 1, explanation: 'Sibilance is the repetition of "s" sounds in words close together. It often creates a hissing, whispering, or sinister effect.' },
      { id: 'y7t3-m8-q5', question: 'In the fog poem extract, what type of figurative language is used?', options: ['Simile', 'Hyperbole', 'Extended metaphor', 'Oxymoron'], correct: 2, explanation: 'The poem uses an extended metaphor, comparing fog to a cat throughout the entire poem. The fog comes on "little cat feet," "sits looking" on "silent haunches," and "moves on" — all qualities of a cat sustained across the whole piece.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 — Analysing a Poem
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m9',
    title: 'Analysing a Poem',
    duration: '45 min',
    content: `
<h2>Step by Step: How to Analyse a Poem</h2>

<p>Analysing a poem can feel overwhelming because there is so much to notice — language, structure, form, imagery, tone, and theme. The key is to have a clear, systematic approach that you follow every time. This module gives you a step-by-step method that works for any poem, from a simple nursery rhyme to the most complex GCSE text.</p>

<h3>Step 1: Read and Re-read</h3>

<p>Read the poem at least three times before you begin analysing:</p>
<ol>
  <li><strong>First reading</strong> — Get the gist. What is the poem about on the surface? Who is speaking? What is happening?</li>
  <li><strong>Second reading</strong> — Read aloud. Listen to the sounds, rhythm, and tone. Notice where the poem speeds up, slows down, or pauses.</li>
  <li><strong>Third reading</strong> — Annotate. Underline key words, circle techniques, and write notes in the margins about effects and meanings.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In an exam, always read the poem at least twice before you start writing. Students who rush into their answer without fully understanding the poem almost always miss key meanings and misinterpret the text. Two minutes of careful reading saves ten minutes of confused writing.</div>

<h3>Step 2: Identify the Subject and Speaker</h3>

<p>Ask yourself these questions:</p>
<ul>
  <li><strong>What is the poem about?</strong> Summarise it in one sentence.</li>
  <li><strong>Who is the speaker?</strong> Are they the poet, a character, or an unnamed voice?</li>
  <li><strong>Who are they speaking to?</strong> A lover, God, the reader, themselves?</li>
  <li><strong>What is the tone?</strong> Angry, reflective, joyful, sorrowful, defiant, nostalgic?</li>
</ul>

<div class="key-term"><strong>Key Term: Tone</strong> — The attitude or emotion conveyed by the speaker's voice. Tone in poetry works like tone of voice in speech — it tells you how the speaker feels about their subject. A poem about war might have a bitter tone, a celebratory tone, or a mournful tone, depending on the poet's perspective.</div>

<h3>Step 3: Analyse Language</h3>

<p>This is where you examine the poet's word choices and figurative language:</p>
<ul>
  <li><strong>What key words stand out?</strong> Why did the poet choose these specific words?</li>
  <li><strong>What connotations do they carry?</strong> (Connotations are the associations a word carries beyond its literal meaning.)</li>
  <li><strong>What figurative language is used?</strong> Similes, metaphors, personification, imagery?</li>
  <li><strong>What sound devices appear?</strong> Alliteration, sibilance, onomatopoeia?</li>
</ul>

<h3>Step 4: Analyse Structure and Form</h3>

<p>Structure is how the poem is organised; form is its shape and type:</p>
<ul>
  <li><strong>What form does it take?</strong> Sonnet, ballad, free verse, or something else?</li>
  <li><strong>How many stanzas are there?</strong> Are they regular or irregular?</li>
  <li><strong>Is there a rhyme scheme?</strong> What effect does it create?</li>
  <li><strong>Where does the poet use enjambment or caesura?</strong> What effect do these create?</li>
  <li><strong>Is there a volta (turning point)?</strong> Where does the poem shift in tone, mood, or argument?</li>
</ul>

<div class="key-term"><strong>Key Term: Volta</strong> — A turning point in a poem where the tone, mood, argument, or perspective shifts. In a sonnet, the volta traditionally occurs before the final couplet or between the octave and sestet. Identifying the volta shows sophisticated structural analysis.</div>

<h3>Step 5: Identify the Theme</h3>

<p>The theme is the deeper meaning or message of the poem. Common themes in poetry include:</p>
<ul>
  <li>Love and relationships</li>
  <li>Loss and grief</li>
  <li>Nature and the environment</li>
  <li>Power and conflict</li>
  <li>Identity and belonging</li>
  <li>Time and mortality</li>
  <li>Memory and nostalgia</li>
</ul>

<div class="text-extract"><strong>Text Extract:</strong> "Do not go gentle into that good night,<br>Old age should burn and rave at close of day;<br>Rage, rage against the dying of the light."<br><br>The speaker addresses someone (their father) who is dying, urging them to fight against death rather than accept it quietly. The metaphor of death as "the dying of the light" presents life as brightness and death as darkness. The repetition of "rage" creates an insistent, almost desperate tone. The villanelle form, with its repeating lines, reinforces the speaker's refusal to let go.</div>

<h3>Step 6: Write Your Analysis</h3>

<p>Use the PEEL structure to write your analytical paragraphs. Each paragraph should focus on one technique or idea and follow this pattern:</p>

<ol>
  <li><strong>Point</strong> — What does the poet do?</li>
  <li><strong>Evidence</strong> — Quote from the poem.</li>
  <li><strong>Explain</strong> — How does this technique work? What effect does it create?</li>
  <li><strong>Link</strong> — How does this connect to the poem's overall theme or message?</li>
</ol>

<div class="model-answer"><strong>Model Answer — Full Poem Analysis Paragraph:</strong> The poet uses an extended metaphor of light and darkness to explore the theme of death and resistance. Death is described as "that good night," a euphemism that presents death as peaceful and gentle — something the speaker passionately rejects. The command "Do not go gentle" positions the speaker as defiant, refusing to accept the inevitability of loss. The repeated imperative "Rage, rage" intensifies this defiance; the repetition mirrors the speaker's desperate insistence, as if saying it once is not enough. The metaphor of "the dying of the light" equates life with brightness and energy, making death seem like an extinguishing of everything meaningful. The poem's villanelle form, with its cyclical repetitions, structurally enacts the speaker's refusal to let go — the same phrases return again and again, just as the speaker returns to the same desperate plea.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing the poem line by line from start to finish. This approach often leads to repetition and a lack of focus. Instead, organise your analysis by technique or theme, selecting the most powerful examples from across the entire poem.</div>
`,
    quiz: [
      { id: 'y7t3-m9-q1', question: 'How many times should you read a poem before beginning your analysis?', options: ['Once is enough', 'At least three times', 'It depends on the poem\'s length', 'You should not read it — just skim it'], correct: 1, explanation: 'You should read a poem at least three times: first for the gist, second aloud for sound and rhythm, and third with annotation for detailed analysis.' },
      { id: 'y7t3-m9-q2', question: 'What is a volta?', options: ['The first line of a poem', 'A type of rhyme', 'A turning point where the tone or argument shifts', 'The final word of a poem'], correct: 2, explanation: 'A volta is a turning point in a poem where the tone, mood, argument, or perspective shifts. Identifying the volta demonstrates sophisticated structural understanding.' },
      { id: 'y7t3-m9-q3', question: 'What is tone in poetry?', options: ['The volume at which you read the poem', 'The attitude or emotion conveyed by the speaker\'s voice', 'The number of syllables in a line', 'The colour of the text'], correct: 1, explanation: 'Tone is the attitude or emotion conveyed by the speaker\'s voice — it tells the reader how the speaker feels about their subject. It works like tone of voice in speech.' },
      { id: 'y7t3-m9-q4', question: 'Why should you avoid analysing a poem line by line?', options: ['Because poems should be read backwards', 'Because it leads to repetition and lack of focus', 'Because examiners prefer short answers', 'Because only the first and last lines matter'], correct: 1, explanation: 'Analysing line by line often leads to repetition and unfocused writing. It is better to organise your analysis by technique or theme, selecting the most powerful examples from across the poem.' },
      { id: 'y7t3-m9-q5', question: 'In the text extract, what does "the dying of the light" metaphorically represent?', options: ['A sunset', 'A broken lamp', 'Death', 'Sleep'], correct: 2, explanation: 'In this metaphor, "the dying of the light" represents death. Life is equated with light and brightness, and death is presented as the extinguishing of that light.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Comparing Poems
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m10',
    title: 'Comparing Poems',
    duration: '45 min',
    content: `
<h2>Thematic Connections Across Poems</h2>

<p>Comparing poems is a skill you will use throughout KS3 and into GCSE. It requires you to see beyond the surface of individual poems and identify deeper connections — shared themes, contrasting attitudes, similar techniques used to different effect. The ability to compare poems with precision and insight is one of the most impressive things you can do in English Literature.</p>

<h3>Why Compare Poems?</h3>

<p>Comparing two poems does several things:</p>
<ul>
  <li>It shows that you can think about literature in relation to other literature, not just in isolation.</li>
  <li>It reveals how different poets approach the same theme in different ways, which deepens your understanding of both poems.</li>
  <li>It demonstrates analytical thinking — the ability to identify patterns, differences, and nuances.</li>
</ul>

<div class="key-term"><strong>Key Term: Thematic Connection</strong> — A link between two or more texts based on the ideas they explore rather than their surface content. Two poems might be about completely different subjects but share a thematic connection if they both explore, for example, the passage of time or the nature of power.</div>

<h3>What to Compare in Poems</h3>

<p>When comparing two poems, you should focus on these areas:</p>

<ol>
  <li><strong>Theme</strong> — What ideas does each poem explore? Do they reach similar or different conclusions?</li>
  <li><strong>Tone and attitude</strong> — How does each speaker feel about their subject? Is one angry and the other reflective? One celebratory and the other mournful?</li>
  <li><strong>Language and imagery</strong> — Do both poets use similar techniques (metaphor, personification) but create different effects? Or do they use contrasting methods?</li>
  <li><strong>Form and structure</strong> — Is one a sonnet and the other free verse? Does one use regular stanzas while the other is fragmented? How do these structural choices reflect the poem's meaning?</li>
  <li><strong>Speaker and perspective</strong> — Who is speaking in each poem? First person or third? How does the perspective shape the reader's experience?</li>
</ol>

<h3>Structuring a Comparative Poetry Essay</h3>

<p>The most effective structure for comparing poems is the <strong>alternating method</strong> — discussing both poems in every paragraph. Here is a template:</p>

<p><strong>Paragraph 1: Introduction</strong></p>
<ul>
  <li>Name both poems and poets.</li>
  <li>State the thematic connection.</li>
  <li>Briefly indicate the key similarity or difference you will explore.</li>
</ul>

<p><strong>Paragraphs 2-4: Comparative analytical paragraphs</strong></p>
<ul>
  <li>Each paragraph focuses on one point of comparison (e.g., how each poet uses imagery to present nature).</li>
  <li>Use the PEEL structure with evidence from both poems.</li>
  <li>Use comparative connectives: "similarly," "however," "whereas," "in contrast."</li>
</ul>

<p><strong>Paragraph 5: Conclusion</strong></p>
<ul>
  <li>Summarise the key similarities and differences.</li>
  <li>Make a judgement: which poem do you find more effective, and why?</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always lead with your strongest point of comparison. If you run out of time, the examiner will have already read your best analysis. Put your weakest or most general point last.</div>

<div class="text-extract"><strong>Text Extract — Poem A:</strong> "I remember the long homeward ride, the singing in the dark,<br>The miles of moonlit road, the stars, the whisper of the trees..."<br><br><strong>Text Extract — Poem B:</strong> "I do not think of you. I do not think of you.<br>But when the sky grows pale and the wind is cold,<br>I find my hands have made your name in the dust."<br><br>Both poems explore memory, but with different tones. Poem A presents memory as warm and comforting — "singing," "moonlit," and "stars" create a gentle, nostalgic atmosphere. Poem B, in contrast, presents memory as involuntary and painful — the repetition of "I do not think of you" protests too much, and the detail of writing a name "in the dust" suggests the memory persists despite the speaker's denial.</div>

<h3>Advanced Comparison: Evaluating Effectiveness</h3>

<p>At the highest level, comparative analysis includes evaluation — making a judgement about which poem is more effective and why. This does not mean which poem you prefer, but which one communicates its ideas more powerfully through its use of language, structure, and form.</p>

<p>When evaluating, consider:</p>
<ul>
  <li>Which poem's imagery is more vivid and original?</li>
  <li>Which poem's structure supports its meaning more effectively?</li>
  <li>Which poem creates a stronger emotional response in the reader, and how?</li>
  <li>Which poem surprises or challenges the reader more?</li>
</ul>

<div class="model-answer"><strong>Model Answer — Comparative Paragraph:</strong> Both poems explore the theme of memory, but they present it in fundamentally different ways. In Poem A, the speaker recalls a journey with warmth and affection; the "moonlit road" and "whisper of the trees" create a peaceful, dreamlike atmosphere, as if the memory is a source of comfort that the speaker willingly returns to. In contrast, Poem B's speaker insists "I do not think of you," a repeated denial that paradoxically reveals the opposite — the memory is so persistent that they must actively resist it. While Poem A's memory is gentle and voluntary, Poem B's is involuntary and almost threatening: the hands have "made your name in the dust" without the speaker's conscious decision, suggesting the memory has a physical power the speaker cannot control. Poem B is arguably more powerful because the tension between denial and truth creates a deeper emotional complexity than Poem A's straightforward nostalgia.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Comparing poems only at the surface level — "Both poems are about nature" or "Both poems use metaphors." This is too vague. Always dig deeper: HOW does each poet present nature differently? What different EFFECTS do their metaphors create? The depth of your comparison is what earns marks.</div>
`,
    quiz: [
      { id: 'y7t3-m10-q1', question: 'What is a thematic connection?', options: ['When two poems have the same title', 'A link between texts based on the ideas they explore', 'When two poems are written by the same poet', 'When two poems are the same length'], correct: 1, explanation: 'A thematic connection is a link between two or more texts based on the ideas or themes they explore, rather than their surface content. Two poems about different subjects might share a theme like loss, power, or identity.' },
      { id: 'y7t3-m10-q2', question: 'What is the best way to structure a comparative poetry essay?', options: ['Write about Poem A first, then Poem B', 'Discuss both poems in every paragraph using the alternating method', 'Only write about the poem you prefer', 'Write one sentence about each poem'], correct: 1, explanation: 'The alternating method is the most effective structure because it integrates both poems in every paragraph, showing direct comparison rather than separate descriptions.' },
      { id: 'y7t3-m10-q3', question: 'In the text extracts, how does Poem B present memory differently from Poem A?', options: ['Poem B presents memory as warm and comforting', 'Poem B presents memory as involuntary and painful', 'Both poems present memory the same way', 'Poem B does not mention memory at all'], correct: 1, explanation: 'Poem B presents memory as involuntary and painful. The speaker denies thinking about the person, but their hands unconsciously write the name in the dust, suggesting the memory persists against their will.' },
      { id: 'y7t3-m10-q4', question: 'What does "evaluating effectiveness" mean in poetry comparison?', options: ['Deciding which poem is longer', 'Making a judgement about which poem communicates its ideas more powerfully', 'Counting the number of techniques in each poem', 'Choosing the poem with better rhymes'], correct: 1, explanation: 'Evaluating effectiveness means making a judgement about which poem communicates its ideas more powerfully through its use of language, structure, and form. It is the highest level of comparative analysis.' },
      { id: 'y7t3-m10-q5', question: 'Why is "both poems use metaphors" a weak comparison?', options: ['Because metaphors are not important', 'Because it is too vague — you need to explain what different effects the metaphors create', 'Because only one poem can use metaphors', 'Because comparisons should avoid mentioning techniques'], correct: 1, explanation: 'Simply stating that both poems use the same technique is too vague. A strong comparison explains HOW each poet uses metaphors differently and what different EFFECTS they create.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 11 — Subject Terminology
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m11',
    title: 'Subject Terminology',
    duration: '35 min',
    content: `
<h2>The Language of English</h2>

<p>To write about English Literature and Language with confidence and precision, you need to know the correct terminology. Subject terminology means the specific words used to describe techniques, structures, and effects in literary analysis. Using it correctly shows the examiner that you understand the subject at a technical level — and it makes your analysis sharper and more convincing.</p>

<div class="key-term"><strong>Key Term: Subject Terminology</strong> — The specialist vocabulary used to discuss literature and language. Terms like "metaphor," "enjambment," "protagonist," and "pathetic fallacy" are all subject terminology. Using these terms accurately demonstrates knowledge and enhances the quality of your analysis.</div>

<h3>Language Techniques — Your Essential Toolkit</h3>

<p>Here is a comprehensive reference list of the key techniques you should know and use:</p>

<h4>Figurative Language</h4>
<ul>
  <li><strong>Simile</strong> — A comparison using "like" or "as." "The moon hung like a lantern."</li>
  <li><strong>Metaphor</strong> — A direct comparison where one thing IS another. "Life is a journey."</li>
  <li><strong>Extended metaphor</strong> — A metaphor sustained over several lines or a whole text.</li>
  <li><strong>Personification</strong> — Giving human qualities to non-human things. "The wind screamed."</li>
  <li><strong>Pathetic fallacy</strong> — Weather or environment reflecting human emotions.</li>
  <li><strong>Hyperbole</strong> — Deliberate exaggeration for effect.</li>
  <li><strong>Oxymoron</strong> — Two contradictory words placed together. "Bittersweet."</li>
  <li><strong>Symbolism</strong> — Using an object or image to represent a deeper idea.</li>
</ul>

<h4>Sound Devices</h4>
<ul>
  <li><strong>Alliteration</strong> — Repetition of consonant sounds at the start of words.</li>
  <li><strong>Sibilance</strong> — Repetition of "s" sounds.</li>
  <li><strong>Assonance</strong> — Repetition of vowel sounds within words.</li>
  <li><strong>Onomatopoeia</strong> — Words that imitate sounds. "Crash," "buzz," "whisper."</li>
  <li><strong>Rhyme</strong> — Matching end sounds. Types: full, half, internal, eye.</li>
</ul>

<h4>Structural Techniques</h4>
<ul>
  <li><strong>Enjambment</strong> — A line running into the next without punctuation.</li>
  <li><strong>Caesura</strong> — A pause in the middle of a line, created by punctuation.</li>
  <li><strong>Stanza</strong> — A group of lines in a poem (like a paragraph in prose).</li>
  <li><strong>Volta</strong> — A turning point where tone or argument shifts.</li>
  <li><strong>Refrain</strong> — A repeated line or phrase across the poem.</li>
  <li><strong>Juxtaposition</strong> — Placing two contrasting ideas side by side for effect.</li>
  <li><strong>Anaphora</strong> — Repetition of a word or phrase at the start of consecutive lines or sentences.</li>
</ul>

<h4>Narrative Techniques</h4>
<ul>
  <li><strong>First person</strong> — Narrated using "I." Creates intimacy and subjectivity.</li>
  <li><strong>Third person</strong> — Narrated using "he/she/they." Can be limited or omniscient.</li>
  <li><strong>Foreshadowing</strong> — Hints about what will happen later in the text.</li>
  <li><strong>Flashback</strong> — A scene set earlier than the main narrative.</li>
  <li><strong>In medias res</strong> — Starting in the middle of the action.</li>
  <li><strong>Dramatic irony</strong> — When the reader knows something a character does not.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Quality over quantity. It is better to use three terms precisely and with detailed analysis than to list ten terms without explanation. Feature spotting (naming techniques without analysing effects) is one of the most common weaknesses in student responses. Every time you name a technique, ask yourself: "So what? What effect does this create?"</div>

<h3>How to Use Subject Terminology Effectively</h3>

<p>There is a difference between <em>using</em> terminology and <em>using it well</em>. Compare these examples:</p>

<p><strong>Weak:</strong> "The writer uses alliteration and a metaphor. There is also some personification."</p>

<p><strong>Strong:</strong> "The alliterative phrase 'silent, silver sea' creates a soft, soothing atmosphere through the repeated sibilance, while the metaphor of the sea as 'a sheet of glass' reinforces the sense of stillness, suggesting a moment of perfect calm before the storm."</p>

<div class="text-extract"><strong>Text Extract:</strong> "Half a league, half a league,<br>Half a league onward,<br>All in the valley of Death<br>Rode the six hundred."<br><br>This extract demonstrates several techniques: <strong>anaphora</strong> (the repetition of "half a league" at the start of three consecutive lines), which creates a relentless, marching rhythm; <strong>personification</strong> of the valley as "Death" (capitalised as if it were a living entity); and a <strong>short, declarative final line</strong> that contrasts with the repetition above, emphasising the soldiers' obedience and unity.</div>

<div class="model-answer"><strong>Model Answer — Using Subject Terminology:</strong> The poet uses anaphora — the repetition of "half a league" at the opening of three consecutive lines — to create a relentless, drum-like rhythm that mirrors the soldiers' march into battle. The repetition is hypnotic, suggesting the riders are locked into their course with no possibility of turning back. The valley is personified as "Death" with a capital D, transforming an abstract concept into a living, waiting presence. This personification makes the danger feel deliberate and personal, as if Death is actively expecting the soldiers. The final line, "Rode the six hundred," is strikingly short and declarative, breaking the rhythmic pattern of the preceding lines. This structural shift creates a powerful contrast: the long, rolling repetition suggests the vastness of their journey, while the abrupt final line reduces them to a number, emphasising both their unity and their vulnerability.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using terminology incorrectly. For example, calling any comparison a "metaphor" (some are similes), or calling any repeated sound "alliteration" (it might be sibilance or assonance). If you are unsure, describe the effect without naming the technique — this is better than using the wrong term.</div>
`,
    quiz: [
      { id: 'y7t3-m11-q1', question: 'What is subject terminology?', options: ['The title of a poem', 'Specialist vocabulary used to discuss literature and language', 'The subject of a sentence', 'A type of exam question'], correct: 1, explanation: 'Subject terminology is the specialist vocabulary used to discuss literary and linguistic techniques — terms like metaphor, enjambment, protagonist, and pathetic fallacy.' },
      { id: 'y7t3-m11-q2', question: 'What is anaphora?', options: ['A type of rhyme', 'Repetition of a word or phrase at the start of consecutive lines', 'A pause in the middle of a line', 'A comparison using "like"'], correct: 1, explanation: 'Anaphora is the repetition of a word or phrase at the beginning of consecutive lines or sentences. It creates emphasis, rhythm, and a sense of building intensity.' },
      { id: 'y7t3-m11-q3', question: 'What is the difference between alliteration and sibilance?', options: ['They are the same thing', 'Alliteration repeats any consonant sound at the start of words; sibilance specifically repeats "s" sounds', 'Sibilance is louder than alliteration', 'Alliteration only occurs in poetry'], correct: 1, explanation: 'Alliteration is the repetition of any consonant sound at the start of nearby words. Sibilance is a specific type that focuses on the repetition of "s" sounds, often creating a hissing or whispering effect.' },
      { id: 'y7t3-m11-q4', question: 'What is feature spotting?', options: ['Finding features in a landscape poem', 'Naming techniques without explaining their effects', 'A way to get top marks', 'Reading a poem for the first time'], correct: 1, explanation: 'Feature spotting means identifying and naming techniques without explaining what effect they have on the reader. It scores poorly because analysis requires explanation, not just identification.' },
      { id: 'y7t3-m11-q5', question: 'What is juxtaposition?', options: ['A type of metaphor', 'Placing two contrasting ideas side by side for effect', 'The last line of a poem', 'A way of writing in paragraphs'], correct: 1, explanation: 'Juxtaposition is placing two contrasting ideas, images, or words side by side to highlight their differences and create a striking effect.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 12 — Assessment: Poetry and Prose Analysis
  // ──────────────────────────────────────────────
  {
    id: 'y7t3-m12',
    title: 'Assessment: Poetry and Prose Analysis',
    duration: '50 min',
    content: `
<h2>Putting It All Together</h2>

<p>This final module is your assessment — a chance to apply everything you have learned across the Shaping Meaning unit. You will practise analysing both prose (stories) and poetry, demonstrating your ability to identify techniques, analyse their effects, compare texts, and use subject terminology with precision. Think of this as a rehearsal for your end-of-year assessment.</p>

<h3>Part 1: Prose Analysis</h3>

<p>Read the following extract and answer the analysis questions that follow:</p>

<div class="text-extract"><strong>Text Extract — Prose:</strong> "The house at the end of Marsh Lane had stood empty for eleven years. Its windows were dark hollows, like the eye sockets of a skull, and the front door hung open at an angle that suggested it had given up trying to keep anyone out. Weeds had conquered the front garden with the patience of an invading army, and somewhere inside, a tap dripped with metronomic regularity — the only sign that the house remembered it had once been alive.<br><br>Mara stood at the gate. She had promised herself she would not come back, but promises, she had learned, were fragile things. The wind picked up, carrying the smell of damp wood and decay. She pushed the gate open. It did not creak. That was worse, somehow — a creaking gate would have been familiar, expected. The silence was something new."</div>

<h4>Analysis Focus: Setting and Atmosphere</h4>

<p>This extract demonstrates many of the techniques you have studied:</p>

<ul>
  <li><strong>Simile</strong> — The windows are "like the eye sockets of a skull," comparing the house to death and creating a macabre, threatening image.</li>
  <li><strong>Personification</strong> — The door "had given up trying," as if it is a tired, defeated person. The house "remembered it had once been alive," suggesting it was once a living, warm home.</li>
  <li><strong>Metaphor</strong> — The weeds "conquered" with "the patience of an invading army," a military metaphor suggesting nature is slowly, deliberately reclaiming the space.</li>
  <li><strong>Symbolism</strong> — The dripping tap symbolises the persistence of memory. The silence of the gate represents the unsettling unfamiliarity of returning to a changed place.</li>
  <li><strong>Pathetic fallacy</strong> — The wind carries "the smell of damp wood and decay," reflecting the atmosphere of loss and deterioration.</li>
</ul>

<div class="model-answer"><strong>Model Answer — Prose Analysis:</strong> The writer creates an atmosphere of decay and unease through the sustained personification of the house as a dying figure. The windows are compared to "the eye sockets of a skull," a simile that transforms the building into a corpse — not merely abandoned but dead. This macabre imagery is reinforced by the personification of the front door that "had given up trying to keep anyone out," which suggests exhaustion and defeat, as if the house itself has lost the will to resist its decline. The military metaphor of weeds that have "conquered" with "the patience of an invading army" introduces a sense of slow, inevitable takeover — nature is not simply growing but waging war on the human world. Perhaps most effective is the dripping tap, described with "metronomic regularity," which symbolises the relentless passing of time. It is "the only sign that the house remembered it had once been alive," a poignant detail that bridges the present desolation with a past vitality. Through these layered techniques, the writer constructs a setting that is not merely a backdrop but a reflection of loss, memory, and the futility of trying to preserve what time will inevitably reclaim.</div>

<h3>Part 2: Poetry Analysis</h3>

<div class="text-extract"><strong>Text Extract — Poetry:</strong> "My mother's hands were landscapes —<br>rivers of blue beneath thin soil,<br>mountains of bone at every knuckle,<br>and in the valleys between her fingers,<br>the soft, dark earth where seeds were sown.<br><br>I held them once and felt the years<br>mapped out like contour lines,<br>each crease a path she'd walked<br>before I learned to walk at all."</div>

<h4>Analysis Focus: Imagery and Theme</h4>

<p>This poem uses an <strong>extended metaphor</strong>, comparing the mother's hands to a landscape. Every detail builds this comparison:</p>

<ul>
  <li><strong>Veins</strong> are described as "rivers of blue beneath thin soil" — the skin is the earth, and the veins are waterways running through it.</li>
  <li><strong>Knuckles</strong> become "mountains of bone," giving the hands a rugged, geographical quality.</li>
  <li><strong>The spaces between fingers</strong> are "valleys" with "soft, dark earth where seeds were sown," suggesting nurture and creation.</li>
  <li><strong>The lines on the hands</strong> are "contour lines" — each wrinkle represents a path, a journey, a life lived.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When you spot an extended metaphor, do not just identify it — trace how it develops. Show how each element of the comparison builds on the last. This demonstrates sustained analysis, which is the hallmark of high-level responses.</div>

<h3>Part 3: Comparison</h3>

<p>Now compare the prose extract and the poetry extract. Consider:</p>

<ul>
  <li><strong>Theme:</strong> Both texts deal with time and memory. The prose explores loss and decay; the poem explores love, ageing, and the desire to understand a parent's life.</li>
  <li><strong>Imagery:</strong> Both use extended comparisons — the house as a skull/corpse, the hands as a landscape. But the prose imagery is dark and threatening, while the poem's imagery is warm and respectful.</li>
  <li><strong>Tone:</strong> The prose creates unease and melancholy. The poem creates tenderness and reverence.</li>
  <li><strong>Structure:</strong> The prose uses paragraphs and narrative (Mara approaching the house). The poem uses stanzas and an intimate, reflective voice.</li>
</ul>

<div class="model-answer"><strong>Model Answer — Comparative Paragraph:</strong> Both texts explore the theme of time through extended comparisons, but they present it with contrasting emotions. In the prose extract, time is a destructive force: the house has been "conquered" by weeds and its windows are "like the eye sockets of a skull," suggesting that time reduces human spaces to death and decay. In contrast, the poem presents time as something to be read and cherished. The mother's wrinkles are "contour lines" on a map, suggesting that her years have created a landscape worth exploring. While the prose positions the reader to feel unease at the passage of time, the poem invites admiration and love. Both writers use personification — the house "remembered" its past life, and the hands contain "paths she'd walked" — but the prose personification emphasises loss, whereas the poem's personification celebrates a life fully lived. The contrasting tones reveal fundamentally different attitudes to time: the prose sees it as an enemy, the poem as a storyteller.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> In assessment, students often write everything they know about one text and then everything about the other, without making direct comparisons. Remember: the comparison IS the analysis. Every paragraph should discuss both texts and use connectives like "similarly," "however," or "whereas" to make the comparison explicit.</div>

<h3>Self-Assessment Checklist</h3>

<p>Before finishing any analysis, check your work against these criteria:</p>

<ul>
  <li>Have I identified techniques by name using subject terminology?</li>
  <li>Have I embedded short, relevant quotations?</li>
  <li>Have I explained the EFFECT of each technique, not just named it?</li>
  <li>Have I linked my analysis to the text's theme or message?</li>
  <li>If comparing, have I discussed both texts in every paragraph?</li>
  <li>Have I used comparative connectives (similarly, however, whereas)?</li>
  <li>Have I avoided retelling or feature spotting?</li>
</ul>
`,
    quiz: [
      { id: 'y7t3-m12-q1', question: 'In the prose extract, what technique is used in "windows were like the eye sockets of a skull"?', options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'], correct: 1, explanation: 'This is a simile because it uses "like" to compare the dark windows to the eye sockets of a skull. It creates a macabre, death-like image of the abandoned house.' },
      { id: 'y7t3-m12-q2', question: 'What type of figurative language does the poem use to describe the mother\'s hands?', options: ['Simile', 'Oxymoron', 'Extended metaphor', 'Hyperbole'], correct: 2, explanation: 'The poem uses an extended metaphor, comparing the mother\'s hands to a landscape throughout both stanzas. Veins become rivers, knuckles become mountains, and wrinkles become contour lines on a map.' },
      { id: 'y7t3-m12-q3', question: 'How do the prose and poetry extracts differ in their presentation of time?', options: ['Both present time as destructive', 'The prose presents time as destructive; the poem presents it as something to be read and cherished', 'Both present time positively', 'Neither text mentions time'], correct: 1, explanation: 'The prose presents time as a destructive force that reduces human spaces to decay and death. The poem presents time as something beautiful and meaningful — the mother\'s ageing is a landscape worth exploring.' },
      { id: 'y7t3-m12-q4', question: 'What is the most important thing to remember in a comparison?', options: ['Write about both texts in every paragraph', 'Only write about the text you prefer', 'Use as many long quotations as possible', 'Retell the plot of both texts'], correct: 0, explanation: 'The most important thing in comparison is to discuss both texts in every paragraph, using connectives like "similarly," "however," and "whereas" to make the comparison explicit and integrated.' },
      { id: 'y7t3-m12-q5', question: 'Which of these is an example of feature spotting?', options: ['"The metaphor of the house as a skull creates a macabre atmosphere of death and decay"', '"The writer uses a metaphor and some personification"', '"The simile suggests the house is dead, reflecting the theme of loss"', '"The personification of the door as having given up conveys exhaustion and defeat"'], correct: 1, explanation: '"The writer uses a metaphor and some personification" is feature spotting because it names techniques without explaining their effects. The other options all identify techniques AND analyse what effect they create.' },
    ],
  },
];
