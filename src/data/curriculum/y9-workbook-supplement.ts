// ─────────────────────────────────────────────────────────────
// Year 9 Workbook Supplement
// Additional exercises and homework tasks for:
//   T1: A Christmas Carol (supplementing y9-workbook-data.ts)
//   T3: Of Mice and Men (supplementing y9-workbook-data.ts)
// ─────────────────────────────────────────────────────────────

// Interfaces are re-declared here for file-level self-containment.
// They are identical to the interfaces in y9-workbook-data.ts.

export interface WorkbookExercise {
  id: string
  title: string
  termUnit: string
  type:
    | 'analysis'
    | 'context'
    | 'creative'
    | 'transactional'
    | 'essay'
    | 'exam-technique'
    | 'comprehension'
    | 'planning'
  instructions: string
  modelAnswer: string
  marks: number
  difficulty: 'foundation' | 'intermediate' | 'higher' | 'extension'
  keywords: string[]
  linkedObjectives: string[]
}

export interface HomeworkTask {
  id: string
  title: string
  termUnit: string
  type:
    | 'analysis'
    | 'context'
    | 'creative'
    | 'transactional'
    | 'essay'
    | 'exam-technique'
    | 'comprehension'
    | 'planning'
  instructions: string
  modelAnswer: string
  marks: number
  difficulty: 'foundation' | 'intermediate' | 'higher' | 'extension'
  keywords: string[]
  linkedObjectives: string[]
  estimatedTime: string
  dueWeek: number
}

// ===============================================================
// TERM 1 SUPPLEMENT -- A CHRISTMAS CAROL (8 workbook exercises)
// ===============================================================

export const y9Term1WorkbookExercises: WorkbookExercise[] = [
  // ── 1. Comprehension ─────────────────────────────────────────
  {
    id: 'y9t1-wb-01',
    title: 'Comprehension: Key Events in A Christmas Carol',
    termUnit: 'T1-U1',
    type: 'comprehension',
    instructions: `<h3>Comprehension: Key Events in <em>A Christmas Carol</em></h3>
<p>Answer each question in a full sentence. Use evidence from the text where asked.</p>
<ol>
<li>What is Marley's warning to Scrooge, and what does he carry with him when he appears?</li>
<li>What does the Ghost of Christmas Past show Scrooge about his school years?</li>
<li>Name TWO things the Ghost of Christmas Present reveals to Scrooge during their journey.</li>
<li>What does Scrooge see in the vision of Christmas Yet to Come that finally persuades him to change?</li>
<li>List THREE acts of generosity that Scrooge performs on Christmas morning after his transformation.</li>
</ol>`,
    modelAnswer: `1. Marley warns Scrooge that he will be haunted by three spirits and that, without change, Scrooge faces the same fate of endless wandering in chains. Marley appears dragging a long chain made of "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel."

2. The Ghost of Christmas Past shows young Scrooge alone at his school during the holidays, abandoned by his father. The memory establishes that Scrooge's coldness is rooted in childhood neglect rather than innate wickedness.

3. The Ghost of Christmas Present takes Scrooge to the Cratchit family's modest Christmas celebration, showing him Tiny Tim and the warmth of a poor but loving household. The ghost also carries Scrooge to his nephew Fred's Christmas party, revealing how happily Fred speaks of his uncle despite Scrooge's contempt.

4. Scrooge sees his own neglected grave, learns that nobody mourns his death, and hears people speak of him with relief or mockery. The sight of his name on the headstone forces him to confront that his life, if unchanged, will end in meaninglessness.

5. On Christmas morning, Scrooge sends an enormous turkey to the Cratchit family, gives a generous donation to the charity collectors he dismissed the day before, and raises Bob Cratchit's salary while promising to help his struggling family.`,
    marks: 10,
    difficulty: 'foundation',
    keywords: [
      'Marley',
      'chain',
      'three spirits',
      'transformation',
      'Cratchit',
      'Tiny Tim',
      'gravestone',
    ],
    linkedObjectives: ['AO1-comprehension', 'AO1-textual-reference'],
  },

  // ── 2. Analysis ──────────────────────────────────────────────
  {
    id: 'y9t1-wb-02',
    title: "Analysis: Dickens's Presentation of Fred",
    termUnit: 'T1-U1',
    type: 'analysis',
    instructions: `<h3>Character Analysis: Fred as a Foil to Scrooge</h3>
<p>In Stave One, Scrooge's nephew Fred visits the counting house to invite his uncle to Christmas dinner. Scrooge refuses. Consider this exchange:</p>
<blockquote>"Christmas a humbug, uncle! You don't mean that, I am sure?" / "I do. Merry Christmas! What right have you to be merry? What reason have you to be merry? You're poor enough."</blockquote>
<p><strong>Task:</strong> Analyse how Dickens uses Fred to challenge Scrooge's values. In your answer consider:</p>
<ul>
<li>What Fred's warmth and generosity of spirit represent</li>
<li>How Fred's response to Scrooge's rudeness reveals his character</li>
<li>Why Dickens uses Fred as a structural device throughout the novella</li>
</ul>
<p>Write two analytical paragraphs using PEA structure.</p>`,
    modelAnswer: `Fred functions as Scrooge's moral opposite — a man of modest means who chooses joy, connection, and generosity over accumulation. When Scrooge asks what right Fred has to be merry given his poverty, Fred's reply is devastating in its simplicity: "What right have you to be dismal? What reason have you to be morose? You're rich enough." By inverting Scrooge's logic, Fred exposes how ridiculous it is to measure happiness by wealth. Fred represents Dickens's central argument that spiritual richness — the capacity for love, laughter, and fellowship — is the only kind of wealth that truly matters. His cheerfulness is not naive; it is a deliberate, principled choice.

Structurally, Dickens uses Fred as a bookend device. He appears in Stave One, rejected by Scrooge, and again in Stave Five when the transformed Scrooge turns up at his Christmas dinner, finally accepting the invitation. This structural repetition measures the distance of Scrooge's journey. Fred's consistent warmth throughout -- he never abandons his good feeling toward his uncle despite years of rejection -- also serves as a quiet challenge to the reader: if Fred can maintain such generosity toward someone as unpleasant as Scrooge, what excuse do we have for withholding compassion from anyone? Dickens gives Fred the final laugh precisely because his values, not Scrooge's, are presented as the correct way to live.`,
    marks: 12,
    difficulty: 'intermediate',
    keywords: [
      'foil',
      'Fred',
      'moral opposite',
      'inversion',
      'structure',
      'bookend',
      'spiritual wealth',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO2-structural-analysis', 'AO3-writer-purpose'],
  },

  // ── 3. Analysis ──────────────────────────────────────────────
  {
    id: 'y9t1-wb-03',
    title: 'Analysis: Light and Dark Imagery',
    termUnit: 'T1-U2',
    type: 'analysis',
    instructions: `<h3>Imagery Tracking: Light and Darkness in <em>A Christmas Carol</em></h3>
<p>Dickens uses light and dark imagery extensively throughout the novella to reflect moral states.</p>
<p><strong>Task:</strong> Identify and analyse THREE examples of light or dark imagery from anywhere in the novella. For each example:</p>
<ul>
<li>Quote the relevant word or phrase</li>
<li>Explain what the image suggests about a character or theme</li>
<li>Comment on Dickens's purpose in choosing this image</li>
</ul>
<p>Write one focused paragraph for each example (6-8 sentences each).</p>`,
    modelAnswer: `The opening description of Scrooge's workplace uses darkness as a moral indicator: "the fog came pouring in at every chink and keyhole, and was so dense without, that although the court was of the narrowest, the houses opposite were mere phantoms." The fog that engulfs Scrooge's counting house is not merely atmospheric -- it is a symbol of moral blindness and spiritual obscurity. Scrooge cannot see clearly in any sense: he cannot perceive the suffering of those around him, and the world outside his mean little office is rendered phantasmal, as if it barely exists for him. Dickens uses this pervasive darkness to suggest that selfishness does not just harm others -- it impoverishes the miser's own world, reducing reality to a grey, featureless blur.

The Ghost of Christmas Past carries "a bright clear jet of light" from its crown, which Scrooge eventually tries to smother with a large cap. This light symbolises the illuminating power of memory and self-knowledge. Scrooge attempts to extinguish it because honest recollection is painful: the memories the ghost shows him reveal how his choices gradually destroyed his capacity for happiness. Dickens's use of light here is deeply symbolic -- truth is radiant and uncomfortable, and the instinct to suppress it is the instinct to remain trapped in moral darkness. The fact that the cap cannot fully smother the light is a structural hint that transformation remains possible.

In Stave Five, after Scrooge's transformation, Dickens describes the morning as "clear, bright, jovial, stirring, cold; cold, piping for the blood to dance to." The repeated adjectives, particularly "bright" and "clear," function as a moral weather report: the world that was foggy and dim in Stave One is now luminous and sharp. The change is not in the weather but in Scrooge's perception -- he now sees the world with open eyes, and it is beautiful. Dickens uses the imagery of a crisp winter dawn to suggest that moral regeneration brings a heightened experience of being alive, as if the world itself celebrates alongside the reformed miser.`,
    marks: 15,
    difficulty: 'higher',
    keywords: [
      'light imagery',
      'darkness',
      'fog',
      'moral blindness',
      'jet of light',
      'transformation',
      'symbolism',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO1-interpretation', 'AO3-writer-purpose'],
  },

  // ── 4. Analysis ──────────────────────────────────────────────
  {
    id: 'y9t1-wb-04',
    title: 'Analysis: The Gothic Elements of Stave Four',
    termUnit: 'T1-U4',
    type: 'analysis',
    instructions: `<h3>Genre Analysis: Gothic Conventions in Stave Four</h3>
<p>Stave Four -- the vision of Christmas Yet to Come -- draws heavily on Gothic literary conventions to create fear and moral urgency.</p>
<p><strong>Task:</strong> Analyse how Dickens uses Gothic conventions in Stave Four. You should discuss:</p>
<ul>
<li>The appearance and silence of the third spirit -- what effect does this create?</li>
<li>The graveyard setting and its symbolic significance</li>
<li>The scavengers who steal Scrooge's belongings -- what do they represent?</li>
<li>How Dickens uses the Gothic to reinforce his moral message</li>
</ul>
<p>Write 250-300 words.</p>`,
    modelAnswer: `Stave Four is the most overtly Gothic section of A Christmas Carol, and Dickens deploys the genre's conventions deliberately to create maximum dread and moral impact. The Ghost of Christmas Yet to Come is described as a dark, hooded phantom that "seemed to scatter gloom and mystery" -- it speaks no words, offers no comfort, and merely points. Its silence is more terrifying than any speech because it denies Scrooge the comfort of dialogue or negotiation. Gothic literature frequently uses the mute or faceless figure to represent inevitability and death, and the spirit functions here as a death omen: it shows Scrooge not what might happen but what will happen if nothing changes.

The graveyard setting at the climax of Stave Four deploys classic Gothic imagery -- neglected grave, overgrown weeds, looming darkness -- to convey a life that ended without meaning. When Scrooge reads his own name on the headstone, the moment is structured as a Gothic revelation: the horror the reader has anticipated is finally confirmed. The graveyard also literalises the novella's central argument; a life devoted to hoarding rather than living leads, quite literally, to a cold grave nobody visits.

The scavengers -- the charwoman, the laundress, and Joe the pawnbroker -- who cheerfully divide Scrooge's stolen belongings are perhaps the most disturbing Gothic detail. Their laughter over the dead man's possessions strips death of all dignity and shows the logical endpoint of treating people as economic units: when you die, others treat your possessions the same way you treated theirs. Dickens uses the Gothic not for mere sensation but as a moral amplifier: the horror of this stave is the horror of a wasted life, and the reader is meant to feel it viscerally.`,
    marks: 15,
    difficulty: 'higher',
    keywords: [
      'Gothic',
      'Stave Four',
      'silent phantom',
      'graveyard',
      'scavengers',
      'dread',
      'moral urgency',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO2-genre-conventions', 'AO3-writer-purpose'],
  },

  // ── 5. Quotation Practice ────────────────────────────────────
  {
    id: 'y9t1-wb-05',
    title: 'Quotation Practice: Embedding Evidence',
    termUnit: 'T1-U1',
    type: 'analysis',
    instructions: `<h3>Skill Builder: Embedding Quotations</h3>
<p>Embedding quotations means weaving them into your own sentences rather than dropping them in as standalone blocks. Compare these two approaches:</p>
<p><strong>Dropped:</strong> "Scrooge is cold. 'Hard and sharp as flint.' This shows he is cold-hearted."</p>
<p><strong>Embedded:</strong> "Dickens presents Scrooge as dangerous through the simile 'hard and sharp as flint', suggesting he is not merely cold but capable of wounding those around him."</p>
<p><strong>Task:</strong> Rewrite each of the following clumsy quotation uses into a fluent, embedded analytical sentence. Then add a second sentence extending the analysis.</p>
<ol>
<li>"Scrooge hated Christmas. 'Every idiot who goes about with Merry Christmas on his lips should be boiled with his own pudding.' He is mean."</li>
<li>"Tiny Tim says something nice. 'God bless us, every one!' This is a good quote."</li>
<li>"The Ghost of Christmas Past is weird. 'Like a child: yet not so like a child as like an old man.' It is confusing."</li>
<li>"Scrooge changes at the end. 'I am as light as a feather.' He is happy now."</li>
</ol>`,
    modelAnswer: `1. Dickens uses savage hyperbole when Scrooge declares that anyone who goes about with "Merry Christmas on his lips should be boiled with his own pudding," presenting his contempt for Christmas as almost violent in its extremity. The grotesque cooking imagery turns festive language into a threat, revealing that Scrooge does not merely dislike celebration -- he despises it with an irrational ferocity that borders on cruelty.

2. Tiny Tim's blessing -- "God bless us, every one!" -- is entirely unqualified and universal, making no exception for those who are unkind or unworthy. The inclusivity of the phrase is precisely what gives it such moral force; this dying child wishes well upon everyone without reservation, making him a direct embodiment of the Christian compassion that Dickens argues society must adopt.

3. Dickens presents the Ghost of Christmas Past as a paradox, describing it as "like a child: yet not so like a child as like an old man," to capture the nature of memory itself. Memories belong to the past and are therefore ancient, yet when they surface they carry all the immediacy of childhood experience -- the ghost's contradictory form embodies this duality of age and freshness that defines recollection.

4. The simile "I am as light as a feather" marks Scrooge's transformation by inverting the physical metaphors used to describe him at the novel's opening, when he was associated with cold, hard, and heavy materials. The lightness suggests that generosity and connection do not weigh a person down but liberate them -- that the emotional armour Scrooge wore was itself the burden.`,
    marks: 12,
    difficulty: 'intermediate',
    keywords: [
      'embedding quotations',
      'PEA',
      'analytical sentence',
      'fluency',
      'evidence',
      'zoom in',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO1-textual-reference', 'AO1-writing-skill'],
  },

  // ── 6. Evaluation ───────────────────────────────────────────
  {
    id: 'y9t1-wb-06',
    title: "Evaluation: Is Scrooge's Transformation Convincing?",
    termUnit: 'T1-U4',
    type: 'essay',
    instructions: `<h3>Critical Evaluation: Scrooge's Redemption</h3>
<p>Some critics argue that Scrooge's transformation at the end of the novella is too sudden and too complete to be psychologically convincing. Others argue that it is entirely believable given what the ghosts reveal about his past.</p>
<p><strong>Task:</strong> Write a structured evaluation in response to the following statement:</p>
<blockquote>"Scrooge's transformation in <em>A Christmas Carol</em> is satisfying but not entirely believable."</blockquote>
<p>You should argue both sides before reaching your own judgement. Use evidence from the text to support each point. Write 350-450 words.</p>`,
    modelAnswer: `Dickens's presentation of Scrooge's transformation raises a genuine question about psychological realism versus moral allegory. To evaluate whether the change is believable, we need to consider both the evidence that supports the critic's concern and the evidence that argues against it.

Those who find the transformation unconvincing point to its speed. In the space of a single night -- three supernatural visits -- a man who has spent decades cultivating his miserliness undergoes a complete reversal of character. The Scrooge who wakes on Christmas morning, laughing and leaping out of bed, seems a different person entirely from the man who told charity collectors that the poor should "decrease the surplus population." Real people who have hardened themselves against the world over many years do not change overnight, and the near-comic exuberance of the reformed Scrooge -- buying the prize turkey, dancing in the street -- can feel more like pantomime than psychology.

However, there are strong arguments for the transformation's coherence. The Ghost of Christmas Past crucially reveals that Scrooge was not always cold: he was a warm, laughing young man capable of love, as his relationship with Belle demonstrates. This means he is not transforming his fundamental nature but recovering it -- the compassion was always there, buried under decades of disappointment and self-defence. Furthermore, the three spirits function not as arbitrary magic but as a structured therapeutic process: confronting his past, examining its present consequences, and facing his future death. Grief counsellors and therapists would recognise this as a form of radical emotional reckoning.

My own view is that Dickens never intended the transformation to be read as naturalistic psychology. A Christmas Carol is a moral fable -- its structure is allegorical and its characters are archetypes as much as they are individuals. The relevant question is not "would this happen in real life?" but "does it work as a story?" And it does: Scrooge's change is earned because the reader understands precisely what he is recovering from and why. The tears he sheds at the sight of his lonely schoolboy self, the anguish he feels at Belle's departure -- these moments establish that the capacity for feeling was never truly extinguished. Dickens gives us enough emotional truth to make the leap feel spiritually, if not clinically, convincing.`,
    marks: 20,
    difficulty: 'extension',
    keywords: [
      'evaluation',
      'transformation',
      'psychological realism',
      'allegory',
      'fable',
      'counterargument',
      'judgement',
    ],
    linkedObjectives: ['AO1-evaluation', 'AO2-language-analysis', 'AO3-writer-purpose'],
  },

  // ── 7. Language Analysis ─────────────────────────────────────
  {
    id: 'y9t1-wb-07',
    title: "Language Analysis: The Narrator's Voice",
    termUnit: 'T1-U1',
    type: 'analysis',
    instructions: `<h3>Analysing Narrative Voice in <em>A Christmas Carol</em></h3>
<p>Dickens's narrator is unusually intrusive -- he interrupts the story to make jokes, offer opinions, and address the reader directly. Read this passage from Stave One:</p>
<blockquote>"Mind! I don't mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail. I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery in the trade. But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb it, or the Country's done for."</blockquote>
<p><strong>Task:</strong> Analyse how Dickens uses narrative voice in this passage. Consider:</p>
<ul>
<li>The effect of "Mind!" as an opening word</li>
<li>The self-deprecating humour and what it achieves</li>
<li>The phrase "the Country's done for" -- what register is this and why?</li>
<li>How this narrative style positions the reader</li>
</ul>
<p>Write 200-250 words.</p>`,
    modelAnswer: `Dickens opens this aside with the emphatic interjection "Mind!" -- a colloquial command that immediately establishes the narrator as a conversational presence rather than an omniscient, distant observer. It is as if the narrator has just grabbed the reader by the arm to clarify something, which creates an atmosphere of intimacy and shared confidence. The reader is not merely an audience but a companion invited into the narrator's thought process.

The self-deprecating comedy that follows -- the narrator's admission that he cannot actually explain why a door-nail is particularly dead -- is an act of deliberate disarmament. By professing ignorance on a trivial point, Dickens creates a narrator who is humorous, unpretentious, and approachable. This matters because it builds trust: a narrator who laughs at himself is unlikely to be pompous or preachy, which makes his moral arguments later in the novella feel earned rather than lectured.

The hyperbolic final joke, "or the Country's done for," deploys an inflated register -- the language of national crisis -- to describe the risk of tampering with a cliche about door-nails. The bathetic gap between the grandiose phrasing and the trivial subject is the source of the humour, and it also signals Dickens's satirical sensibility. By using the language of political urgency for something absurd, he gently mocks the pomposity of those who speak in such terms about genuinely important matters. This narrative voice positions the reader as a knowing, intelligent companion -- not someone being preached at, but someone in on the joke.`,
    marks: 12,
    difficulty: 'higher',
    keywords: [
      'narrative voice',
      'intrusive narrator',
      'bathos',
      'register',
      'self-deprecation',
      'humour',
      'reader positioning',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO1-interpretation', 'AO3-writer-purpose'],
  },

  // ── 8. Creative Writing (Victorian pastiche) ─────────────────
  {
    id: 'y9t1-wb-08',
    title: 'Creative Writing: Victorian Pastiche',
    termUnit: 'T1-U4',
    type: 'creative',
    instructions: `<h3>Creative Writing: Write in the Style of Dickens</h3>
<p>A <strong>pastiche</strong> is a creative work that imitates the style of another writer. To write convincingly in Dickens's style, you need to deploy:</p>
<ul>
<li>An intrusive, opinionated narrator who addresses the reader directly</li>
<li>Vivid, exaggerated character description using lists and similes</li>
<li>Victorian diction and sentence rhythms -- longer, more elaborate sentences than modern prose</li>
<li>Moral commentary woven into the narrative</li>
<li>Atmospheric setting that reflects character or theme</li>
</ul>
<p><strong>Task:</strong> Write the opening 250-300 words of a short story set in Victorian London. Your narrator should introduce a character who is the opposite of Scrooge -- extraordinarily generous, perhaps to a fault. Use at least THREE recognisably Dickensian techniques, labelling them in the margin or brackets.</p>`,
    modelAnswer: `Now, it is a truth universally acknowledged among those who knew him -- and a great many people knew him, for he was not a man who could be confined to narrow acquaintance -- that Mr. Cornelius Blatch was the most catastrophically generous soul in all of Cheapside. [INTRUSIVE NARRATOR -- DIRECT ADDRESS]

Generous as a spring flood! Generous as a banker's error in your favour! Generous as the English weather is wet! [LIST OF SIMILES -- COMIC EXAGGERATION] He had been known to press shillings into the hands of strangers who had not asked for them. He had dispatched hampers of preserved fruit to neighbours he had never spoken to, on the grounds that a face glimpsed at a window had struck him as possessing "a certain look of want." He had once, it was whispered, given his overcoat to a horse that appeared chilly, though this last story cannot be verified and the horse in question has not been found to comment. [COMIC DIGRESSION -- INTRUSIVE NARRATOR]

He lived in a tall, crooked house in Bread Street, three floors of generosity piled atop one another like a good-natured architectural accident, every room in which contained some object that Mr. Blatch had intended to give away and had not yet found time to deliver. [ATMOSPHERIC SETTING -- CHARACTER REFLECTED IN PLACE] The hallway alone contained four umbrellas belonging to other people, a tin of biscuits earmarked for an invalid in Southwark, and a small spaniel whose owner's name Mr. Blatch had unfortunately forgotten.

Reader, he was a problem. But he was a magnificent one. [MORAL COMMENTARY -- DIRECT ADDRESS]`,
    marks: 20,
    difficulty: 'extension',
    keywords: [
      'pastiche',
      'Victorian style',
      'intrusive narrator',
      'Dickensian',
      'character description',
      'comic exaggeration',
      'atmosphere',
    ],
    linkedObjectives: ['AO5-creative-writing', 'AO5-style-and-register', 'AO6-accuracy'],
  },
]

// ===============================================================
// TERM 3 SUPPLEMENT -- OF MICE AND MEN (8 workbook exercises)
// ===============================================================

export const y9Term3WorkbookExercises: WorkbookExercise[] = [
  // ── 1. Comprehension ─────────────────────────────────────────
  {
    id: 'y9t3-wb-01',
    title: 'Comprehension: Key Events in Of Mice and Men',
    termUnit: 'T3-U1',
    type: 'comprehension',
    instructions: `<h3>Comprehension: Key Events in <em>Of Mice and Men</em></h3>
<p>Answer each question in a full sentence. Use evidence from the text where asked.</p>
<ol>
<li>Why are George and Lennie forced to leave their previous job in Weed?</li>
<li>Describe the dream that George and Lennie share. What does each of them want from it?</li>
<li>How does Candy become involved in the dream, and why is this significant?</li>
<li>What happens between Lennie and Curley's wife in the barn? Give specific details.</li>
<li>Why does George shoot Lennie himself rather than allowing the other men to find him?</li>
</ol>`,
    modelAnswer: `1. George and Lennie were forced to flee Weed after Lennie grabbed a woman's red dress because he liked the feel of it. She screamed and accused him of assault, and the men of the town formed a mob to chase them, forcing them to hide in an irrigation ditch until nightfall.

2. George and Lennie dream of owning a small farm of their own -- "a little house and a couple of acres." For George, the dream represents freedom from the transient, lonely life of a ranch hand: nobody can fire him or order him around on his own land. For Lennie, the dream is focused almost entirely on the rabbits he will be allowed to tend and stroke, representing the safe, simple happiness he craves.

3. Candy offers to contribute nearly three hundred dollars -- his life savings from a compensation payment for his lost hand -- to buy the farm. His investment makes the dream feel suddenly real and achievable. Candy's involvement is significant because it transforms the dream from fantasy into a genuine plan, which makes its eventual destruction all the more devastating.

4. Lennie accidentally kills Curley's wife in the barn while stroking her hair. She panics at his strength and begins to scream, and Lennie, terrified of getting in trouble and losing the dream, shakes her to make her stop. He breaks her neck without intending to. He does not fully understand what he has done.

5. George shoots Lennie himself to spare him a violent and terrifying death at the hands of Curley, who has promised to "shoot him in the guts." By doing it himself, George ensures Lennie dies painlessly, while talking about the farm dream, believing in it -- a final act of love and mercy.`,
    marks: 10,
    difficulty: 'foundation',
    keywords: [
      'Weed',
      'the dream',
      'Candy',
      "Curley's wife",
      'barn',
      'mercy killing',
      'George',
      'Lennie',
    ],
    linkedObjectives: ['AO1-comprehension', 'AO1-textual-reference'],
  },

  // ── 2. Analysis ──────────────────────────────────────────────
  {
    id: 'y9t3-wb-02',
    title: "Analysis: George and Lennie's Relationship",
    termUnit: 'T3-U1',
    type: 'analysis',
    instructions: `<h3>Character Analysis: The Relationship Between George and Lennie</h3>
<p>The relationship between George Milton and Lennie Small is central to the novel's emotional impact.</p>
<p><strong>Task:</strong> Analyse how Steinbeck presents the relationship between George and Lennie. In your answer, consider:</p>
<ul>
<li>How George's frustration with Lennie is presented -- and why it is important that we see this alongside his care</li>
<li>The significance of the repeated telling of the dream</li>
<li>What their relationship suggests about Steinbeck's theme of loneliness</li>
</ul>
<p>Write two PEA paragraphs, each 8-10 sentences.</p>`,
    modelAnswer: `Steinbeck presents George's relationship with Lennie as a deeply ambivalent one: a bond of genuine love that is simultaneously a source of frustration, obligation, and constraint. In the novel's opening chapter, George tells Lennie: "God, you're a lot of trouble. I could get along so easy and so nice if I didn't have you on my tail." This complaint reveals that George is not simply a selfless carer -- he experiences Lennie as a burden that limits his freedom and complicates his life at every turn. By showing this frustration honestly, Steinbeck avoids sentimentalising the relationship. George's love for Lennie is real precisely because it survives and persists despite the difficulty. He stays not because it is easy but because abandoning Lennie would be a moral impossibility.

The repeated ritual of the dream is one of the novel's most structurally significant elements. George tells the story of the farm not once but multiple times throughout the novel, and each time Lennie prompts him with "Tell me about the rabbits, George." The repetition suggests that the story functions less as a practical plan and more as a shared liturgy -- a form of comfort and meaning that binds the two men together. For Lennie, the story provides reassurance and hope; for George, the act of telling it is an affirmation that he is not alone. Steinbeck uses this motif to explore his central theme of loneliness: in a world where, as Crooks observes, "a guy goes nuts if he ain't got nobody," the simple act of dreaming together is a form of profound companionship. When George tells the story for the last time, seconds before he shoots Lennie, the ritual becomes almost unbearably elegiac -- a final gift of hope before the world's cruelty makes hope impossible.`,
    marks: 15,
    difficulty: 'higher',
    keywords: [
      'George',
      'Lennie',
      'ambivalence',
      'dream',
      'ritual',
      'loneliness',
      'companionship',
      'obligation',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO2-structural-analysis', 'AO3-writer-purpose'],
  },

  // ── 3. Analysis ──────────────────────────────────────────────
  {
    id: 'y9t3-wb-03',
    title: "Analysis: Curley's Wife as a Tragic Figure",
    termUnit: 'T3-U2',
    type: 'analysis',
    instructions: `<h3>Character Analysis: Curley\'s Wife</h3>
<p>Curley's wife is never given a name in the novel. She is variously described by the ranch hands as a "tart," a "looloo," and a cause of trouble.</p>
<p><strong>Task:</strong> Analyse how Steinbeck presents Curley's wife as a complex and tragic character. Consider:</p>
<ul>
<li>How the male characters describe and perceive her -- and why Steinbeck presents these attitudes</li>
<li>The significance of the conversation she has with Lennie in the barn before her death</li>
<li>What her lack of a name suggests about her position in the novel's world</li>
<li>How Steinbeck uses her death to develop the novel's themes</li>
</ul>
<p>Write 300-350 words.</p>`,
    modelAnswer: `Steinbeck presents Curley's wife as the victim of a society that denies women identity, voice, and agency. Her lack of a name is not merely an oversight but a structural statement: she exists in the novel's world only in relation to her husband, defined entirely by possession ("Curley's wife") rather than personhood. The ranch hands' dismissal of her as a "tart" reflects their fear and desire more than any truth about her character -- they avoid her not because she is bad but because association with her threatens their precarious positions on the ranch.

The conversation she has with Lennie in the barn is the most humanising scene in the novel and functions as a kind of tragic irony: the only person she can speak to honestly is the one man on the ranch who cannot understand her. She tells Lennie about her lost dream of becoming a Hollywood actress, how a man at a dance promised her a letter that never arrived, and how she blames her mother for stealing the opportunity. The audience she has been denied all her life is finally given to her -- by someone incapable of truly hearing her. Steinbeck uses this scene to reveal that behind the provocative posturing is a lonely young woman trapped in a loveless marriage, grieving a life unlived.

Her death is the fulcrum on which the novel's themes of powerlessness and thwarted dreams turn. She is, in many ways, as much a victim of the American Dream's broken promises as George and Lennie themselves. After her death, Steinbeck describes her as young and peaceful, the "meanness and the plannings and the discontent" gone from her face, as if death alone has restored her innocence. It is a deeply compassionate image that implicitly condemns the world that reduced her to this -- a world in which women, like migrant workers, are ultimately disposable.`,
    marks: 15,
    difficulty: 'higher',
    keywords: [
      "Curley's wife",
      'nameless',
      'tragic figure',
      'Hollywood dream',
      'powerlessness',
      'male gaze',
      'identity',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO1-character-analysis', 'AO3-context'],
  },

  // ── 4. Comparison ────────────────────────────────────────────
  {
    id: 'y9t3-wb-04',
    title: 'Comparison: Loneliness -- Crooks and Candy',
    termUnit: 'T3-U2',
    type: 'essay',
    instructions: `<h3>Comparative Essay: Loneliness in <em>Of Mice and Men</em></h3>
<p>Steinbeck presents loneliness as a defining feature of life for many characters on the ranch.</p>
<p><strong>Task:</strong> Compare how Steinbeck presents loneliness through the characters of Crooks and Candy. In your essay consider:</p>
<ul>
<li>The cause of each character's isolation -- how are their situations similar and different?</li>
<li>How each character responds to the possibility of joining the dream</li>
<li>What each character's eventual position suggests about Steinbeck's view of the world</li>
</ul>
<p>Write a structured comparative essay of 350-450 words. Use connectives of comparison: "both," "whereas," "similarly," "by contrast," "however."</p>`,
    modelAnswer: `Both Crooks and Candy are men who have been marginalised by society and stripped of agency, though the causes of their isolation differ significantly. Crooks is excluded because of his race: as the only Black man on the ranch, he is forbidden from sleeping in the bunkhouse and is confined to the stable. His isolation is systemic, enforced by law and custom. Candy's loneliness, by contrast, stems from age and physical vulnerability: with his hand amputated and his dog shot, he is acutely aware that he will soon be discarded by the ranch as too old to be useful. Whereas Crooks is excluded by a society that refuses to see him as fully human, Candy is excluded by an economic system that values people only while they can work.

Both men, however, respond similarly to the possibility of joining George and Lennie's dream: with a desperate, almost painful eagerness. When Candy offers his savings to buy the farm, Steinbeck describes the change in his manner -- suddenly animated, suddenly forward, suddenly alive with the idea that there might be a future worth having. Crooks's response in the bunkhouse scene is similarly revealing: he initially dismisses the dream as foolish but gradually leans toward it, asking "If you guys would want a hand to work for nothing -- just his keep, why I'd come and lend a hand." Both men understand that belonging somewhere -- owning something, mattering to someone -- is the one thing that can defeat loneliness.

The tragedy is that both are denied it. Crooks withdraws his request the moment Curley's wife reminds him of his powerlessness in the most brutal terms, telling him that she could have him lynched with a single word. His brief hope collapses under the weight of the racism that governs every aspect of his life. Candy is left alive after Lennie's death, with his savings invested in a dream that will never be realised.

Steinbeck uses both characters to argue that loneliness in 1930s America was not an individual failing but a social condition imposed upon those whom society deemed expendable. The cruelty is not that these men lack the capacity for connection -- both demonstrate profound hunger for it -- but that the world they inhabit is structured to deny them that connection at every turn.`,
    marks: 20,
    difficulty: 'extension',
    keywords: [
      'Crooks',
      'Candy',
      'loneliness',
      'comparison',
      'race',
      'age',
      'the dream',
      'American society',
    ],
    linkedObjectives: ['AO1-comparison', 'AO2-language-analysis', 'AO3-context'],
  },

  // ── 5. Language Analysis ─────────────────────────────────────
  {
    id: 'y9t3-wb-05',
    title: 'Language Analysis: The Setting of the Bunkhouse',
    termUnit: 'T3-U1',
    type: 'analysis',
    instructions: `<h3>Analysing Setting: The Bunkhouse</h3>
<p>Read Steinbeck's description of the bunkhouse from Chapter Two:</p>
<blockquote>"The bunk house was a long, rectangular building. Against the walls were eight bunks... Over each bunk there was nailed an apple box with the opening forward so that it made two shelves for the personal belongings of the occupant of the bunk. And these shelves were loaded with little articles, soap and talcum powder, razors and those Western magazines ranch men love to read and scoff at and secretly wonder about."</blockquote>
<p><strong>Task:</strong> Analyse how Steinbeck uses the bunkhouse setting to convey ideas about the lives of migrant workers. Consider:</p>
<ul>
<li>What the bare, functional description of the building suggests</li>
<li>The significance of the "personal belongings" on the shelves</li>
<li>How the final clause about the Western magazines extends the theme of the American Dream</li>
</ul>
<p>Write 200-250 words.</p>`,
    modelAnswer: `Steinbeck's description of the bunkhouse is deliberately plain and functional: "a long, rectangular building" with eight bunks against the walls. The neutral, architectural language strips the space of any warmth or personality, presenting it as a place of pure utility -- somewhere men sleep before they work again, not somewhere they live. The simplicity of the description reflects the simplicity of the lives lived within it: these men have no permanence, no ownership, and no investment in a place they will leave when the season ends.

The detail of the apple-box shelves, however, introduces a note of pathos. These improvised shelves hold "soap and talcum powder, razors" -- the basic tools of self-maintenance -- and suggest that even within this impersonal space, men assert small dignities. They keep themselves clean, they maintain themselves as individuals, they resist complete erasure. The apple boxes are not furniture; they are evidence of human need given temporary form.

The final clause is the richest: the men read Western magazines and "scoff at and secretly wonder about" them. Westerns are the mythology of the American frontier dream -- stories of open land, independence, and self-determination. The detail that the men scoff at them publicly but wonder at them privately is an image of the entire novel in miniature. They know the dream is probably a lie. They need it anyway. Steinbeck uses this single observation to establish that the desire for something better -- land, freedom, dignity -- is not naive but deeply human, and its denial is the novel's central tragedy.`,
    marks: 12,
    difficulty: 'intermediate',
    keywords: [
      'bunkhouse',
      'setting',
      'migrant workers',
      'personal belongings',
      'Western magazines',
      'American Dream',
      'pathos',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO2-structural-analysis', 'AO3-context'],
  },

  // ── 6. Evaluation ────────────────────────────────────────────
  {
    id: 'y9t3-wb-06',
    title: 'Evaluation: Is the Ending of Of Mice and Men Inevitable?',
    termUnit: 'T3-U3',
    type: 'essay',
    instructions: `<h3>Critical Evaluation: The Ending of <em>Of Mice and Men</em></h3>
<p>Steinbeck uses foreshadowing extensively throughout the novel to prepare the reader for the ending.</p>
<p><strong>Task:</strong> Write a structured evaluation responding to this critical statement:</p>
<blockquote>"By the time George shoots Lennie, the reader has been so thoroughly prepared for this ending that it feels inevitable rather than tragic."</blockquote>
<p>Consider evidence on both sides of the argument before reaching your own judgement. Write 350-400 words.</p>`,
    modelAnswer: `Steinbeck's extensive use of foreshadowing does mean that the reader is well prepared for the ending -- but preparation and inevitability are not the same thing, and the emotional power of the final scene suggests that foreknowledge does not diminish the tragedy but deepens it.

The case that the ending feels inevitable is strong. The novel is structured around a pattern of escalating destruction: Lennie accidentally kills the mouse, then the puppy, and finally Curley's wife. Each incident follows the same pattern -- Lennie handles something fragile with too much strength and panics when it reacts. The repetition creates an inexorable logic. Furthermore, George explicitly warns Lennie at the opening of the novel to "not say nothing" if they get in trouble at the new ranch, and his fearful instruction to Lennie to meet him "by the river" if anything goes wrong plants the location of the ending in the reader's mind chapters before it arrives. Candy's dog, shot by Carlson to spare it a painful death, is the clearest structural parallel: the reader understands what mercy killing means in this world long before George must perform it.

However, to say the ending feels "merely inevitable" rather than tragic misses what Steinbeck achieves. Knowing something will happen and feeling it happen are different experiences. When George begins telling Lennie about the farm for the last time -- "Guys like us, that work on ranches, are the loneliest guys in the world... But not us" -- the scene accumulates an almost unbearable tension precisely because the reader knows these words are the last kindness George can offer. The foreshadowing does not blunt the tragedy; it sharpens it. Every gentle word George speaks in those final moments carries the weight of everything Lennie will never know or experience.

My view is that Steinbeck deliberately uses inevitability as a structural tool to argue that the tragedy is not an accident but a product of systemic forces -- poverty, transience, intellectual disability, a world with no safety net. The ending was always going to come. That is the point. The novel mourns not just Lennie but the countless ways in which the American dream fails the people who need it most.`,
    marks: 20,
    difficulty: 'extension',
    keywords: [
      'foreshadowing',
      'inevitability',
      'tragedy',
      'structural pattern',
      'mercy killing',
      "Candy's dog",
      'American Dream',
    ],
    linkedObjectives: ['AO1-evaluation', 'AO2-structural-analysis', 'AO3-writer-purpose'],
  },

  // ── 7. Quotation Practice ────────────────────────────────────
  {
    id: 'y9t3-wb-07',
    title: 'Quotation Practice: Key Quotes from Of Mice and Men',
    termUnit: 'T3-U1',
    type: 'analysis',
    instructions: `<h3>Skill Builder: Analysing Key Quotations</h3>
<p>Below are six important quotations from <em>Of Mice and Men</em>. For each one, write a focused analytical sentence that embeds the quote and explains its significance. Then add a second sentence that comments on a specific word or technique.</p>
<ol>
<li>"Guys like us, that work on ranches, are the loneliest guys in the world. They got no family. They don't belong no place." (George, Chapter One)</li>
<li>"A guy needs somebody -- to be near him." (Crooks, Chapter Four)</li>
<li>"I ought to of shot that dog myself, George. I shouldn't ought to of let no stranger shoot my dog." (Candy, Chapter Three)</li>
<li>"I seen hundreds of men come by on the road an' on the ranches, with their bindles on their back an' that same damn thing in their heads... and not one of 'em ever gets it." (Crooks, Chapter Four)</li>
<li>"She was very pretty and simple, and her face was sweet and young." (Narrator, describing Curley's wife after her death)</li>
<li>"An' you... an' I... We gonna go an' get a little place an' live on the fatta the lan'." (Lennie, retelling the dream)</li>
</ol>`,
    modelAnswer: `1. George's declaration that ranch workers are "the loneliest guys in the world" who "don't belong no place" establishes loneliness not as a personal failing but as a structural condition of the migrant life. The triple parallelism of "no family... don't belong no place... no future" accumulates the dimensions of this loneliness, suggesting it permeates every area of identity.

2. Crooks's observation that "a guy needs somebody -- to be near him" is the novel's most direct statement of its central theme, and its power lies in its simplicity. The dash before "to be near him" slows the sentence to a pause that feels almost like vulnerability -- a moment of rare honesty from a man who has learned to protect himself from disappointment.

3. Candy's regret that he "ought to of shot that dog" himself rather than allowing a stranger to do it is not merely about the dog but about dignity and love -- the idea that when something you love must die, the act of ending its suffering is an expression of care, not cruelty. Steinbeck places this thought in Candy's mind pages before George must make the same choice, preparing the reader to understand George's final act as love rather than betrayal.

4. Crooks's dismissal of the dream -- "not one of 'em ever gets it" -- carries the authority of long experience and, in his case, the additional weight of being excluded from the dream by race as well as poverty. His cynicism is not bitterness for its own sake but an earned, protective realism; he has seen too many men break themselves against hope to allow himself to be fooled again.

5. The narrator's description of Curley's wife after death -- "sweet and young," "pretty and simple" -- is in stark contrast to the way the living men describe her. In death she recovers the innocence she never lost; Steinbeck uses this moment to indict the men who reduced a young woman to a threat or a temptation rather than a person.

6. Lennie's parroted retelling of the dream -- "live on the fatta the lan'" -- is rendered in his phonetic dialect, which both characterises his limited speech and underscores that for him the dream is pure, uncomplicated feeling rather than practical planning. His repetition of it is not stupidity but faith.`,
    marks: 12,
    difficulty: 'intermediate',
    keywords: [
      'embedding quotations',
      'loneliness',
      'Crooks',
      'Candy',
      'dream',
      "Curley's wife",
      'close analysis',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO1-textual-reference', 'AO1-writing-skill'],
  },

  // ── 8. Extended Essay Practice ───────────────────────────────
  {
    id: 'y9t3-wb-08',
    title: 'Extended Essay: How Does Steinbeck Present the American Dream?',
    termUnit: 'T3-U3',
    type: 'essay',
    instructions: `<h3>Extended Essay: The American Dream in <em>Of Mice and Men</em></h3>
<p>This is a full GCSE-style essay question. You have 45 minutes.</p>
<p><strong>Question:</strong> How does Steinbeck present the idea of the American Dream in <em>Of Mice and Men</em>?</p>
<p>Write a full essay response. You should:</p>
<ul>
<li>Write a brief introduction that defines the American Dream and positions Steinbeck's argument</li>
<li>Write 3-4 detailed analytical paragraphs, each with a clear point supported by embedded evidence</li>
<li>Consider how different characters relate to the dream differently</li>
<li>Include contextual understanding of 1930s America and the Great Depression</li>
<li>Write a conclusion that sums up Steinbeck's overall message</li>
</ul>
<p>Aim for 500-600 words. Use PEA structure throughout.</p>`,
    modelAnswer: `The American Dream -- the belief that any individual can achieve success, independence, and prosperity through hard work -- is the central organising idea of Of Mice and Men, and Steinbeck presents it as a dream that is psychologically essential but structurally impossible for those at the bottom of society. Written in 1937 during the Great Depression, the novel uses the doomed aspirations of migrant ranch workers to argue that the Dream was never designed to include everyone.

The dream of "a little house an' a couple of acres" that George and Lennie share is the purest expression of this longing. George's version of the dream is about freedom and self-determination: "we'd just go to her... Nobody could can us. If we don't like a guy we can say, 'Get the hell out.'" The repetition of "we" throughout the dream's telling is significant: this is not just a fantasy of property but of belonging, of mattering to someone, of not being "the loneliest guys in the world." Steinbeck presents the dream as a psychological necessity rather than mere greed -- it is the story these men tell to make their lives bearable.

The reaction of other characters to the dream reveals how universal the hunger is. Candy invests his life savings the moment he hears it, and even Crooks -- who dismisses it as impossible -- momentarily leans toward it, asking if they would "want a hand to work for nothing." Steinbeck uses these responses to show that the desire for dignity and belonging transcends age, race, and disability. Every marginalised person on the ranch is drawn to the dream because every one of them lacks what it promises. This universality is both moving and tragic: it demonstrates that the need is real while the opportunity is a fiction.

Steinbeck's context matters enormously here. The 1930s Great Depression left millions of Americans homeless, unemployed, and moving from place to place in search of work -- exactly the life George and Lennie live. The Hoover administration's insistence that hard work guaranteed success was exposed by the Depression as a cruel mythology: men worked hard all their lives and still ended up with nothing. Crooks's line -- "I seen hundreds of men come by... and not one of 'em ever gets it" -- reflects the historical reality that the American Dream functioned as a mechanism of control, keeping workers productive and compliant through the promise of a future they would never reach.

The ending of the novel destroys not just Lennie's life but the dream itself. Candy's anguished question after Curley's wife's death -- "you an' me can still get that little place, can't we, George?" -- and George's inability to answer confirm what the novel has been building toward: the dream was inseparable from Lennie. Without Lennie's faith, George cannot sustain it. The dream dies with the dreamer.

Steinbeck's overall message is both compassionate and unsentimental. He does not mock the men who dream -- he grieves with them. But he insists that we see clearly why their dreams fail: not because they lack effort or intelligence but because a society structured around inequality will always ensure that those at the bottom remain there. The American Dream, in Of Mice and Men, is less a promise than a consolation -- and a false one at that.`,
    marks: 30,
    difficulty: 'extension',
    keywords: [
      'American Dream',
      'Great Depression',
      'Crooks',
      'Candy',
      'George',
      'Lennie',
      'inequality',
      'aspiration',
      'failure',
    ],
    linkedObjectives: [
      'AO1-extended-essay',
      'AO2-language-analysis',
      'AO3-context',
      'AO1-evaluation',
    ],
  },
]

// ===============================================================
// TERM 1 HOMEWORK TASKS -- A CHRISTMAS CAROL (10 tasks)
// ===============================================================

export const y9Term1HomeworkTasks: HomeworkTask[] = [
  {
    id: 'y9t1-hw-01',
    title: 'HW1: Victorian Christmas Research',
    termUnit: 'T1-U1',
    type: 'context',
    instructions: `<h3>Homework: Victorian Christmas Traditions</h3>
<p>Charles Dickens is often credited with helping to invent the modern Christmas. Research how Christmas was celebrated in Victorian England and write a 250-word factsheet covering:</p>
<ul>
<li>At least FOUR traditions that originated or were popularised in the Victorian era</li>
<li>How Dickens's novella contributed to shaping Christmas culture</li>
<li>One specific fact about how Christmas was celebrated differently in the 1840s compared to today</li>
</ul>
<p>Include a bibliography with at least one reliable source.</p>`,
    modelAnswer: `**Victorian Christmas Traditions**

Many of the Christmas customs we think of as ancient are, in fact, Victorian inventions or revivals. The exchange of Christmas cards began in 1843 -- the same year A Christmas Carol was published -- when Henry Cole commissioned the first commercially printed card. Prince Albert, Queen Victoria's German-born husband, popularised the Christmas tree in Britain after an image of the royal family around a decorated tree was published in the Illustrated London News in 1848.

Carolling as a public activity was revived in the Victorian period after declining in the early nineteenth century; collections of traditional carols were published and distributed, making communal singing a feature of Christmas again. Christmas crackers were invented in the 1840s by confectioner Tom Smith, who was inspired by the French bon-bon. Gift giving became increasingly formalised, particularly among the middle classes.

Dickens's contribution was to give Christmas an emotional and moral identity. A Christmas Carol argued that the holiday should be defined by generosity, family, and compassion for the poor -- not just religious observance or private celebration. His influence is evident in the way "the Christmas spirit" became a phrase associated with these values rather than specifically Christian ones.

One interesting contrast: in the 1840s, Christmas Day was not a public holiday, and many working people -- including Bob Cratchit -- worked until Christmas Eve and returned on 26 December. It was not until the Bank Holidays Act of 1871 that Christmas Day became a statutory day off.

**Source:** Hewitt, M. (ed.), *The Victorian World* (2012).`,
    marks: 15,
    difficulty: 'foundation',
    keywords: [
      'Victorian Christmas',
      'traditions',
      'Christmas card',
      'Christmas tree',
      'Dickens influence',
    ],
    linkedObjectives: ['AO3-context', 'AO1-research-skills'],
    estimatedTime: '40 mins',
    dueWeek: 2,
  },
  {
    id: 'y9t1-hw-02',
    title: 'HW2: Stave Two Close Reading',
    termUnit: 'T1-U2',
    type: 'analysis',
    instructions: `<h3>Homework: Analysing Scrooge at the Fezziwig Party</h3>
<p>Reread the Fezziwig party scene from Stave Two. Focus on how Scrooge reacts as a spectator.</p>
<p><strong>Task:</strong> Write an analytical paragraph (150-200 words) exploring how Dickens shows that Scrooge's capacity for joy has not been entirely destroyed. You must:</p>
<ul>
<li>Use at least TWO embedded quotations</li>
<li>Comment on the effect of at least ONE specific word</li>
<li>Link your analysis to Dickens's purpose</li>
</ul>`,
    modelAnswer: `Dickens reveals that Scrooge retains a dormant capacity for warmth in his reaction to the Fezziwig party, even as he watches it as a ghost. Steinbeck describes how Scrooge's "heart and soul were in the scene, and with his former self." The phrase "heart and soul" suggests a total, unguarded emotional investment -- this is not the cynical observer we met in Stave One but a man moved to the core by the sight of happiness freely shared. The possessive construction "his former self" is significant: Dickens reminds us that the laughing young man at the party is not a different person but an earlier version of Scrooge, implying that his warmth was not invented by the ghost but merely buried. Most powerfully, Scrooge spontaneously wishes he could speak to his clerk Bob Cratchit -- "he had a small matter he should like to say to Bob Cratchit just then." This unplanned impulse toward generosity, emerging without the ghost's prompting, demonstrates that transformation has already begun: Scrooge's conscience has been stirred, and Dickens uses this moment to suggest that genuine change must come from within rather than being imposed from without.`,
    marks: 12,
    difficulty: 'intermediate',
    keywords: [
      'Fezziwig',
      'close reading',
      'joy',
      'transformation',
      'heart and soul',
      'embedded quotation',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO1-textual-reference', 'AO3-writer-purpose'],
    estimatedTime: '35 mins',
    dueWeek: 3,
  },
  {
    id: 'y9t1-hw-03',
    title: 'HW3: Planning a Theme Essay',
    termUnit: 'T1-U2',
    type: 'planning',
    instructions: `<h3>Homework: Essay Planning -- The Theme of Family</h3>
<p>Before you can write a good essay, you need a strong plan. Plan an essay responding to this question:</p>
<blockquote>How does Dickens present family as a source of moral strength in <em>A Christmas Carol</em>?</blockquote>
<p>Your plan should include:</p>
<ul>
<li>A brief introduction (2-3 bullet points: your argument, key characters, context)</li>
<li>THREE body paragraph outlines, each with: main point, evidence, analysis note, context link</li>
<li>A brief conclusion point</li>
</ul>
<p>You do not need to write the full essay -- a detailed plan only. Present it as a bullet-point structure.</p>`,
    modelAnswer: `**Introduction:**
- Thesis: Dickens presents family as the primary source of moral worth and human resilience -- those with loving families (Cratchits, Fred) are morally superior to the isolated Scrooge.
- Key characters: the Cratchit family, Fred and his wife, young Scrooge (absent father / Belle scene).
- Context: Victorian family values; Dickens's own difficult childhood; rise of the middle-class domestic ideal.

**Paragraph 1 -- The Cratchit Family:**
- Point: The Cratchits represent the ideal of family as an emotional resource that wealth cannot buy.
- Evidence: "They were not a handsome family; they were not well dressed; their shoes were far from being waterproof... But they were happy, grateful, pleased with one another."
- Analysis: The list of negatives ("not... not... far from") followed by the pivot "But" makes the point structurally: material poverty is irrelevant to the richness of family life.
- Context: Dickens argues against the Malthusian idea that poor families should have fewer children; the Cratchits' love for each other is his evidence.

**Paragraph 2 -- Fred's Family:**
- Point: Fred models a joyful, inclusive version of family that deliberately extends beyond blood relations -- he keeps inviting Scrooge, even when repeatedly rejected.
- Evidence: Fred says Christmas is "the only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely."
- Analysis: "Open their shut-up hearts freely" is an image of chosen family over obligation; Fred's Christmas philosophy is about expansion and inclusion.
- Context: Dickens's belief in the social function of Christmas as a force for communal bonds.

**Paragraph 3 -- Scrooge's Absence of Family:**
- Point: Scrooge's isolation is presented not as a virtue but as a wound; the scene showing young Scrooge abandoned by his father explains rather than excuses his coldness.
- Evidence: "A solitary child, neglected by his friends, was left there still" -- the young Scrooge at school.
- Analysis: "Neglected" is the key word -- Scrooge was failed by family before he failed others; Dickens asks the reader to see causation, not just condemnation.
- Context: Dickens's own experience of abandonment at the blacking factory gives this scene autobiographical weight.

**Conclusion:**
- Dickens ultimately argues that family -- and the capacity for compassion it teaches -- is the only true measure of moral worth, and that Scrooge's salvation lies in rejoining the human community by becoming part of a family again.`,
    marks: 10,
    difficulty: 'intermediate',
    keywords: ['essay planning', 'family', 'Cratchits', 'Fred', 'structure', 'thesis'],
    linkedObjectives: ['AO1-planning', 'AO3-context', 'AO2-language-analysis'],
    estimatedTime: '40 mins',
    dueWeek: 4,
  },
  {
    id: 'y9t1-hw-04',
    title: 'HW4: Stave Three Analysis',
    termUnit: 'T1-U3',
    type: 'analysis',
    instructions: `<h3>Homework: The Ghost of Christmas Present\'s Final Warning</h3>
<p>At the end of Stave Three, the Ghost of Christmas Present reveals two emaciated children beneath its robe. Dickens writes:</p>
<blockquote>"This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom, unless the writing be erased."</blockquote>
<p><strong>Task:</strong> Write two analytical paragraphs (total 250-300 words) exploring how Dickens uses Ignorance and Want to deliver his social message. Consider the allegorical significance of each figure, why Ignorance is described as more dangerous than Want, and what Dickens is asking his Victorian readers to do.</p>`,
    modelAnswer: `Dickens uses the allegorical figures of Ignorance and Want to transform A Christmas Carol's social critique from abstract argument into visceral image. The two children -- described as "yellow, meagre, ragged, scowling, wolfish" -- literalise the consequences of society's indifference to the poor. They are not symbolic in a remote, cerebral sense; they are physically present, hideous, and threatening. The reversal of their origin is important: they emerge from beneath the robes of a spirit of abundance, suggesting that poverty and ignorance are not separate from prosperity but are produced by it. They are the shadow side of Scrooge's world -- what his selfishness helps to create.

The ghost's distinction between the two children is central to Dickens's argument: Want (poverty) is terrible, but Ignorance is worse. The "Doom" written on the boy's brow points toward revolution -- Dickens was acutely aware, as were many Victorian reformers, that an uneducated, desperate underclass was a social time bomb. The ghost warns that if the writing is not "erased" -- if education and compassion are not extended to the poor -- the consequences will be catastrophic for everyone, including the wealthy. Dickens is making a pragmatic as well as a moral argument: addressing poverty and educating the poor is not merely a matter of charity but of self-preservation. By placing this warning in the mouth of a festive spirit who has just shown Scrooge scenes of innocent joy, Dickens makes the contrast between what Christmas should be and what society allows it to become inescapably clear.`,
    marks: 15,
    difficulty: 'higher',
    keywords: [
      'Ignorance',
      'Want',
      'allegory',
      'social message',
      'Victorian reform',
      'children',
      'doom',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO3-context', 'AO3-writer-purpose'],
    estimatedTime: '45 mins',
    dueWeek: 5,
  },
  {
    id: 'y9t1-hw-05',
    title: "HW5: Creative -- Scrooge's Diary Entry",
    termUnit: 'T1-U2',
    type: 'creative',
    instructions: `<h3>Homework: Creative Writing -- Scrooge\'s Diary</h3>
<p>Write a diary entry from Scrooge's perspective, written on the morning of 26 December -- the day after his transformation. He has just returned from his nephew Fred's Christmas dinner.</p>
<p>Your diary entry should:</p>
<ul>
<li>Be written in first person, capturing Scrooge's voice (use the language of a Victorian businessman)</li>
<li>Reflect on at least TWO of the ghost visions he experienced</li>
<li>Show how his feelings about money, people, and Christmas have changed</li>
<li>Include some humour -- Scrooge in Stave Five is almost giddy with joy</li>
</ul>
<p>Write 250-300 words.</p>`,
    modelAnswer: `26th December, 1843.

I confess I am not entirely certain how to use this journal for anything other than the recording of accounts. But today I have no accounts to record -- or rather, I have only the account of my own extraordinary conduct, and I am compelled to set it down before the memory fades, if indeed it ever shall.

I have given away a turkey. A prize turkey. The largest poultry in the shop, which the proprietor assured me was "twice the size of Tiny Tim" -- though I confess I do not know what the boy's dimensions have to do with poultry. It seemed amusing at the time. Everything seems amusing. This is very strange.

I spent the evening at my nephew Fred's house. Fred, who has invited me faithfully for as many years as I spent refusing him. His wife is charming. I do not know why I did not notice this before. His friends played games and laughed and pressed me to participate, and I played, and I laughed, and I believe I won a round of Yes and No. I have not laughed like that since... since a Christmas party, many years ago. Since Fezziwig.

I find myself thinking about Bob Cratchit. About his boy. I intend to speak with him tomorrow -- to raise his salary considerably, to ensure the family has coal and medical attention. I have been wasting money for forty years. It appears I must now work twice as hard to spend it properly.

I do not know what came over me last night. I know only this: whatever it was, I hope it never leaves.

E. Scrooge`,
    marks: 15,
    difficulty: 'intermediate',
    keywords: [
      'creative writing',
      'diary',
      'Scrooge',
      'first person',
      'Victorian voice',
      'transformation',
      'humour',
    ],
    linkedObjectives: ['AO5-creative-writing', 'AO5-voice-and-register', 'AO6-accuracy'],
    estimatedTime: '40 mins',
    dueWeek: 6,
  },
  {
    id: 'y9t1-hw-06',
    title: 'HW6: Exam Question Practice (AQA-style)',
    termUnit: 'T1-U3',
    type: 'exam-technique',
    instructions: `<h3>Homework: Timed Exam Question</h3>
<p>This question is written in the style of an AQA GCSE English Literature paper. You have <strong>45 minutes</strong>.</p>
<p>Starting with this extract, how does Dickens present Scrooge as a changed man in <em>A Christmas Carol</em>?</p>
<blockquote>"He went to church, and walked about the streets, and watched the people hurrying to and fro, and patted the children on the head, and questioned beggars, and looked down into the kitchens of houses, and up to the windows, and found that everything could yield him pleasure. He had never dreamed that any walk -- that anything -- could give him so much happiness."</blockquote>
<p>Write about:</p>
<ul>
<li>How Dickens presents the transformed Scrooge in this extract</li>
<li>How Dickens presents transformation elsewhere in the novella</li>
</ul>`,
    modelAnswer: `In this extract from Stave Five, Dickens presents the transformed Scrooge through a striking change in his relationship with the physical world. The list of activities -- "went to church... walked about... patted the children... questioned beggars... looked down... looked up" -- creates a sense of restless, joyful engagement with a world that he previously held at arm's length. The variety of the list is important: Scrooge does not simply perform one good deed but opens himself to everything around him. Most revealing is the verb "questioned beggars" -- a man who once refused to acknowledge the poor as human beings now initiates conversation with them. Dickens uses this simple detail to show that transformation is not merely internal but manifests in the most ordinary social interactions.

The final sentence of the extract -- "He had never dreamed that any walk -- that anything -- could give him so much happiness" -- is significant for what it reveals about the nature of the change. The em-dash expands "any walk" into "anything," suggesting that Scrooge's astonishment is total: the entire world has become a source of joy. The word "dreamed" is carefully chosen; in a novella structured around visions, dreams, and supernatural journeys, it connects the transformed Scrooge to the process of imaginative awakening that the ghosts initiated.

Elsewhere in the novella, Dickens traces the stages of Scrooge's transformation with structural precision. In Stave Two, the Ghost of Christmas Past shows that Scrooge was not always cold: the young man who danced at Fezziwig's party and loved Belle was capable of warmth, and his tears at these memories signal that this capacity was dormant rather than dead. By Stave Three, the Ghost of Christmas Present's revelation of Ignorance and Want forces Scrooge to confront the human cost of his indifference -- the scene inverts his own callous phrase "decrease the surplus population" by placing it alongside Tiny Tim's face. The transformation is therefore not instantaneous but cumulative: each spirit peels back a layer of Scrooge's self-imposed armour until the emotional truth beneath is exposed.

Dickens presents the completed transformation in Stave Five with deliberate exuberance -- Scrooge laughs, dances, and describes himself as "as giddy as a drunken man." This apparent excess is purposeful: Dickens wants the reader to feel the release as much as Scrooge does. After four staves of moral darkness, the brightness of Stave Five is a structural reward, and Scrooge's joy is presented as infectious and deserved. His final transformation into the second father of Tiny Tim completes the pattern: the man who once refused to acknowledge the poor as human now takes personal responsibility for their welfare.`,
    marks: 30,
    difficulty: 'higher',
    keywords: [
      'AQA-style',
      'exam technique',
      'Stave Five',
      'transformation',
      'extract',
      'whole text',
      'timed',
    ],
    linkedObjectives: [
      'AO1-extended-response',
      'AO2-language-analysis',
      'AO2-structural-analysis',
      'AO3-context',
    ],
    estimatedTime: '45 mins',
    dueWeek: 7,
  },
  {
    id: 'y9t1-hw-07',
    title: "HW7: Character Web -- Scrooge's Relationships",
    termUnit: 'T1-U3',
    type: 'planning',
    instructions: `<h3>Homework: Mapping Scrooge\'s Relationships</h3>
<p>Create a character web for Scrooge that maps his relationship to every significant character in the novella.</p>
<p>For each relationship, provide:</p>
<ul>
<li>The name of the character and their role</li>
<li>A quotation that illustrates the relationship</li>
<li>One sentence explaining what this relationship reveals about Scrooge's character or Dickens's message</li>
</ul>
<p>Characters to include: Bob Cratchit, Fred, Marley, Belle, Fezziwig, Tiny Tim, the Ghost of Christmas Present. You may add others.</p>
<p>Present your web as a table or annotated diagram.</p>`,
    modelAnswer: `| Character | Role | Key Quotation | Significance |
|---|---|---|---|
| Bob Cratchit | Employee / moral contrast | "I'll raise your salary, and endeavour to assist your struggling family" (Stave Five) | Bob represents the worker Scrooge has exploited; his patient suffering without resentment makes him a moral exemplar, and Scrooge's final act of generosity toward him measures the full distance of his transformation. |
| Fred | Nephew / foil | "I mean to give him the same chance every year, whether he likes it or not." (Stave One) | Fred's unconditional generosity toward his uncle challenges the reader to adopt the same attitude toward those who seem to refuse kindness; his persistence models the novel's argument that compassion should not be conditional on reciprocation. |
| Marley | Dead partner / warning | "I wear the chain I forged in life." (Stave One) | Marley is Scrooge's possible future self -- a warning of what happens when a life of selfishness reaches its natural conclusion; their shared history makes the warning personal and impossible to dismiss. |
| Belle | Former fiancee / lost love | "Another idol has displaced me... a golden one." (Stave Two) | Belle's departure reveals that Scrooge chose money over love and that this choice was conscious; her scene is the emotional hinge on which the reader's sympathy for Scrooge first turns toward compassion. |
| Fezziwig | Former employer / ideal model | "He has the power to render us happy or unhappy; to make our service light or burdensome." (Stave Two) | Fezziwig represents the kind of employer Scrooge could have been; the Ghost uses him to awaken Scrooge's conscience by showing him the good he himself is failing to do. |
| Tiny Tim | Symbol of innocent suffering | "God bless us, every one!" (Stave Three) | Tim's potential death is the emotional climax of the Ghost of Christmas Present's journey; his unconditional blessing of everyone, including those who oppress his family, embodies the Christian compassion Dickens argues society must adopt. |
| Ghost of Christmas Present | Supernatural guide / social conscience | "Are there no prisons? Are there no workhouses?" -- echoing Scrooge's words back at him (Stave Three) | The ghost's use of Scrooge's own words as a weapon against him is one of the novella's most devastating structural choices, forcing Scrooge to hear his callousness from the outside. |`,
    marks: 14,
    difficulty: 'intermediate',
    keywords: [
      'character web',
      'relationships',
      'Scrooge',
      'Bob Cratchit',
      'Fred',
      'Belle',
      'Marley',
      'planning',
    ],
    linkedObjectives: ['AO1-character-analysis', 'AO2-language-analysis', 'AO3-writer-purpose'],
    estimatedTime: '40 mins',
    dueWeek: 8,
  },
  {
    id: 'y9t1-hw-08',
    title: 'HW8: Context -- Dickens as Social Reformer',
    termUnit: 'T1-U1',
    type: 'context',
    instructions: `<h3>Homework: Dickens and Social Reform</h3>
<p>Dickens was not only a novelist but an active campaigner for social change. Research his life and write a 300-word response to this question:</p>
<blockquote>How did Dickens's personal experiences shape his social message in <em>A Christmas Carol</em>?</blockquote>
<p>You should include:</p>
<ul>
<li>His childhood experience of the blacking factory and the Marshalsea prison</li>
<li>His journalism and campaigning on behalf of the poor</li>
<li>How these experiences are reflected in specific elements of the novella</li>
</ul>`,
    modelAnswer: `Dickens's anger at Victorian poverty was not an abstract political position but a deeply personal response to his own suffering. When he was twelve years old, his father John Dickens was imprisoned for debt in the Marshalsea debtor's prison. During this period, Charles was sent to work in Warren's Blacking Factory, pasting labels onto pots of shoe polish for ten hours a day. This experience of child labour, humiliation, and abandonment by his parents left a lifelong wound -- and a lifelong fury at any system that allowed children to be treated as expendable.

These experiences are directly visible in A Christmas Carol. The scene in Stave Two where the Ghost of Christmas Past shows young Scrooge alone at his boarding school during the holidays -- abandoned by his father, reading by a feeble fire -- draws on Dickens's own memories of isolation and parental rejection. Bob Cratchit's struggle to keep his family warm on a tiny salary reflects Dickens's intimate understanding of what genuine poverty felt like, not as an economic abstraction but as cold hands and hungry children.

As an adult, Dickens used his fame to campaign for reform. He visited ragged schools -- free schools for destitute children -- and wrote about them in his journalism to raise awareness. He was appalled by the conditions of the New Poor Law workhouses and drew on them repeatedly in his fiction. He intended A Christmas Carol partly as a counterblast to a report by the Children's Employment Commission, which had documented the appalling conditions of child labour in factories and mines. By writing a popular story rather than a tract, he reached a far wider audience than any pamphlet could -- and ensured his arguments would be read, remembered, and felt.`,
    marks: 15,
    difficulty: 'intermediate',
    keywords: [
      'Dickens',
      'blacking factory',
      'Marshalsea',
      'social reform',
      'ragged schools',
      'context',
      'autobiography',
    ],
    linkedObjectives: ['AO3-context', 'AO3-writer-intentions', 'AO1-research-skills'],
    estimatedTime: '45 mins',
    dueWeek: 9,
  },
  {
    id: 'y9t1-hw-09',
    title: 'HW9: Comparative Paragraph -- Scrooge Before and After',
    termUnit: 'T1-U4',
    type: 'analysis',
    instructions: `<h3>Homework: Comparative Paragraph -- Scrooge in Stave One vs Stave Five</h3>
<p>Write a single comparative paragraph (200-250 words) comparing how Dickens presents Scrooge in Stave One with how he presents him in Stave Five.</p>
<p>Your paragraph should:</p>
<ul>
<li>Use comparative connectives ("whereas," "by contrast," "however," "similarly")</li>
<li>Include an embedded quotation from each stave</li>
<li>Comment on a specific technique in each quotation</li>
<li>End with a sentence about Dickens's overall purpose</li>
</ul>`,
    modelAnswer: `In Stave One, Dickens presents Scrooge through a relentless accumulation of negative images: he is described as "hard and sharp as flint, from which no steel had ever struck out generous fire," a simile that presents him as not merely cold but actively dangerous -- capable of wounding anyone who comes close. The phrase "no steel had ever struck out generous fire" suggests that attempts to reach him have always failed, framing his isolation as impenetrable. By contrast, in Stave Five, Dickens presents the reformed Scrooge through images of lightness and movement: he is "as giddy as a drunken man," laughing, dancing, and rushing into the street to greet a world he previously locked out. Whereas the Stave One Scrooge was defined by what he refused -- warmth, connection, generosity -- the Stave Five Scrooge is defined by what he embraces. The shift from the static, mineral imagery of flint to the kinetic, almost childlike energy of Stave Five is Dickens's structural reward to the reader: having endured Scrooge's coldness for four staves, we are invited to celebrate his release from it. Dickens's purpose throughout is to demonstrate that transformation is possible at any stage of life, and that the capacity for compassion, however deeply buried, can always be recovered.`,
    marks: 12,
    difficulty: 'higher',
    keywords: [
      'comparison',
      'Stave One',
      'Stave Five',
      'flint',
      'giddy',
      'transformation',
      'structure',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO2-structural-analysis', 'AO3-writer-purpose'],
    estimatedTime: '35 mins',
    dueWeek: 10,
  },
  {
    id: 'y9t1-hw-10',
    title: 'HW10: Full Essay -- How Does Dickens Present Redemption?',
    termUnit: 'T1-U4',
    type: 'essay',
    instructions: `<h3>Homework: Full Essay (timed, 50 minutes)</h3>
<p>Write a full essay response to the following question:</p>
<blockquote>How does Dickens present the theme of redemption in <em>A Christmas Carol</em>?</blockquote>
<p>Your essay should:</p>
<ul>
<li>Open with a clear thesis that defines redemption in the context of the novella</li>
<li>Develop 3-4 analytical paragraphs with embedded evidence</li>
<li>Include contextual understanding of Christianity, Victorian society, or Dickens's intentions</li>
<li>Conclude with a judgement about what Dickens ultimately argues about the possibility of change</li>
</ul>
<p>Aim for 500-600 words.</p>`,
    modelAnswer: `Redemption -- the recovery of moral worth through acknowledgement of fault and genuine change -- is the structural and thematic backbone of A Christmas Carol. Dickens uses the story of Scrooge's overnight transformation not merely as entertainment but as a theological and social argument: that no one is beyond salvation, and that the willingness to feel compassion is available to everyone, regardless of how thoroughly they have suppressed it.

The foundation of Scrooge's redemption is the revelation of his past self through the Ghost of Christmas Past. In Stave Two, Scrooge revisits memories that he has evidently spent decades suppressing: his lonely childhood at boarding school, his warm apprenticeship under Fezziwig, and most painfully, his loss of Belle, who leaves him when she recognises that "a golden idol" has "displaced" her. These memories are not merely nostalgic; they establish that Scrooge's coldness is a response to pain rather than a fixed character trait. When Scrooge weeps at the sight of his abandoned younger self, the reader's attitude shifts decisively from contempt to compassion. Dickens's purpose here is crucial: redemption cannot begin without self-knowledge, and self-knowledge requires the courage to look at the past honestly.

The catalyst for Scrooge's final change is his confrontation with his own death in Stave Four. The Ghost of Christmas Yet to Come shows him his unmourned grave, his stolen possessions, and the relief of those who were freed by his death. The vision works not through guilt but through terror: Scrooge sees not what he has done to others but what he has done to himself. A life of isolation leads to a death of total meaninglessness. The Gothic horror of this stave is Dickens's most direct argument that selfishness destroys the self, and that the only way to matter is to connect. Scrooge's desperate promise to "honour Christmas in my heart, and try to keep it all the year" is the moment at which desire for change becomes commitment.

The redemption Dickens presents is thoroughly practical rather than merely spiritual. In Stave Five, Scrooge does not simply feel differently -- he acts differently. He raises Bob Cratchit's salary, sends an enormous turkey to the Cratchit family, and donates generously to the charity collectors he dismissed the previous morning. Dickens makes clear that genuine redemption must manifest in material generosity: good intentions are worthless without good actions. The Christian resonance of the Christmas setting reinforces this point -- Dickens draws on the theology of grace (the idea that transformation is always possible through divine mercy) while insisting that the evidence of grace lies in how we treat the vulnerable around us.

Dickens ultimately argues that redemption is not only possible but necessary -- and that its possibility is what makes the story worth telling at all. The novella is a ghost story structured as a moral fable: the supernatural machinery exists not to entertain but to accelerate what therapy, grief, and honest self-reflection can achieve over years. Scrooge's transformation is both extraordinary and ordinary. Extraordinary because it happens overnight; ordinary because the ingredients -- memory, empathy, fear of meaninglessness, desire to matter -- are available to every human being. Dickens's final word is one of radical hope: it is never too late to become the person we were always capable of being.`,
    marks: 30,
    difficulty: 'extension',
    keywords: [
      'redemption',
      'transformation',
      'self-knowledge',
      'compassion',
      'Christianity',
      'ghost story',
      'moral fable',
    ],
    linkedObjectives: [
      'AO1-extended-essay',
      'AO2-language-analysis',
      'AO2-structural-analysis',
      'AO3-context',
    ],
    estimatedTime: '50 mins',
    dueWeek: 12,
  },
]

// ===============================================================
// TERM 3 HOMEWORK TASKS -- OF MICE AND MEN (10 tasks)
// ===============================================================

export const y9Term3HomeworkTasks: HomeworkTask[] = [
  {
    id: 'y9t3-hw-01',
    title: 'HW1: The Great Depression -- Context Research',
    termUnit: 'T3-U1',
    type: 'context',
    instructions: `<h3>Homework: The Great Depression and Migrant Workers</h3>
<p>Of Mice and Men is set in California in the 1930s during the Great Depression. Research the historical context and write a 250-word factsheet that covers:</p>
<ul>
<li>What caused the Great Depression and when it began</li>
<li>How it affected ordinary Americans -- particularly farm workers and migrants</li>
<li>The role of the Dust Bowl in creating migration to California</li>
<li>How Steinbeck's own experience informed the novel</li>
</ul>
<p>Include at least one reliable source in a bibliography.</p>`,
    modelAnswer: `**The Great Depression and Migrant Workers in 1930s America**

The Great Depression began in October 1929 with the Wall Street Crash, in which the United States stock market collapsed catastrophically, wiping out the savings of millions of investors overnight. Banks failed across the country, unemployment rose to 25% at its peak, and millions of Americans who had believed in the promise of prosperity found themselves destitute.

The situation was made worse in the early 1930s by the Dust Bowl -- a series of devastating droughts and dust storms that struck the agricultural heartland of Oklahoma, Texas, and the surrounding states. Topsoil that had been stripped of natural grass cover by decades of intensive farming was blasted away by winds, destroying crops and farms. Hundreds of thousands of families -- known as "Okies" -- were forced to abandon their land and migrate west to California in search of work as agricultural labourers.

In California, they found not opportunity but exploitation. Landowners hired migrant workers for seasonal fruit-picking and harvesting at poverty wages, with no job security and no rights. Workers lived in camps and moved constantly from ranch to ranch. This is the world George and Lennie inhabit in the novel.

Steinbeck witnessed this migration firsthand. He worked alongside migrant labourers in the Salinas Valley, stayed in their camps, and reported on their conditions for a San Francisco newspaper. This direct experience gave Of Mice and Men its documentary authenticity -- the details of bunkhouse life, ranch work, and the transient economy are drawn from observation rather than imagination.

**Source:** Kennedy, D. *Freedom from Fear: The American People in Depression and War* (1999).`,
    marks: 15,
    difficulty: 'foundation',
    keywords: [
      'Great Depression',
      'Dust Bowl',
      'migrant workers',
      'California',
      'Okies',
      'Steinbeck',
      'context',
    ],
    linkedObjectives: ['AO3-context', 'AO1-research-skills'],
    estimatedTime: '40 mins',
    dueWeek: 2,
  },
  {
    id: 'y9t3-hw-02',
    title: 'HW2: Chapter One Close Reading',
    termUnit: 'T3-U1',
    type: 'analysis',
    instructions: `<h3>Homework: Analysing Steinbeck\'s Opening</h3>
<p>Reread the opening two pages of Chapter One, from "A few miles south of Soledad" to the first arrival of George and Lennie.</p>
<p><strong>Task:</strong> Write an analytical paragraph (150-200 words) exploring how Steinbeck uses the natural setting to create mood and foreshadow events. You must:</p>
<ul>
<li>Comment on at least TWO specific details of setting or imagery</li>
<li>Use at least ONE embedded quotation</li>
<li>Explain how the setting connects to the novel's themes</li>
</ul>`,
    modelAnswer: `Steinbeck opens Of Mice and Men with a detailed, almost painterly description of the natural world that functions both as setting and as foreshadowing. The Salinas Valley is described as warm, golden, and abundant -- "the water is warm too, for it has slipped twinkling over the yellow sands in the sunlight" -- but this Edenic quality is immediately shadowed by hints of danger. The sycamore tree by the pool, the ash pile, and the "beaten hard" path all suggest a place where human beings come regularly but do not stay: it is a resting place, not a home. Most significantly, Steinbeck places a dead ash pile at the spot where George and Lennie will camp -- an image of extinguished fire that quietly anticipates the extinguishing of their dream. The overall mood created is one of fragile, temporary peace: nature here is beautiful but indifferent, capable of sustaining life briefly but not permanently. This tension between natural beauty and underlying precariousness reflects the novel's central argument about the American Dream -- it is visible and tantalising but, for men like George and Lennie, ultimately out of reach.`,
    marks: 12,
    difficulty: 'intermediate',
    keywords: [
      'Chapter One',
      'setting',
      'foreshadowing',
      'Salinas Valley',
      'Edenic',
      'mood',
      'natural imagery',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO2-structural-analysis', 'AO1-textual-reference'],
    estimatedTime: '35 mins',
    dueWeek: 3,
  },
  {
    id: 'y9t3-hw-03',
    title: "HW3: Exploring Crooks's Bunkhouse Scene",
    termUnit: 'T3-U2',
    type: 'analysis',
    instructions: `<h3>Homework: Crooks and Racial Isolation</h3>
<p>In Chapter Four, Lennie wanders into Crooks's room in the stable. Crooks initially tries to send him away.</p>
<p>Read from "Crooks said suddenly, 'You got no right to come in my room'" to "Lennie was on his feet in an instant."</p>
<p><strong>Task:</strong> Write two analytical paragraphs (total 250-300 words) exploring how Steinbeck presents Crooks's experience of racial discrimination and how his attitude toward Lennie changes during the scene. Include embedded quotations and contextual reference to 1930s race relations in the American South.</p>`,
    modelAnswer: `Steinbeck presents Crooks's initial response to Lennie's intrusion as a defence mechanism built from years of humiliation. His declaration that Lennie has "no right to come in my room" is a direct inversion of the racial injustice he suffers: Crooks is forbidden from the bunkhouse because he is Black, yet here he asserts the same principle of exclusion to protect the one private space he possesses. Steinbeck structures this moment with quiet irony -- Crooks is using the language of rights denied to him to enforce a boundary of his own. The description of his room reinforces his separateness: he sleeps alone in the harness room, surrounded by tools and leather, among things rather than people. In 1930s California, legal segregation and informal racist custom meant that Black workers like Crooks were routinely excluded from white social spaces; Steinbeck presents this not through polemic but through the meticulous accumulation of detail.

As the scene progresses, Crooks's defensiveness gradually softens in Lennie's company, partly because Lennie is incapable of social cruelty and partly because isolation has made Crooks desperate for conversation. He begins to speak more freely, sharing his philosophy about loneliness: "a guy needs somebody -- to be near him... a guy goes nuts if he ain't got nobody." This confession is the emotional centre of the scene. The repetition of "a guy" universalises the experience -- Crooks is not speaking only for himself but for every man on the ranch, including those who exclude him. His intelligence and capacity for reflection are evident throughout, making the cruelty of his marginalisation all the more visible and damning.`,
    marks: 15,
    difficulty: 'higher',
    keywords: [
      'Crooks',
      'racial discrimination',
      'segregation',
      '1930s America',
      'isolation',
      'harness room',
      'Lennie',
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO3-context', 'AO1-character-analysis'],
    estimatedTime: '45 mins',
    dueWeek: 5,
  },
  {
    id: 'y9t3-hw-04',
    title: 'HW4: Essay Planning -- The Theme of Power',
    termUnit: 'T3-U2',
    type: 'planning',
    instructions: `<h3>Homework: Plan an Essay on Power</h3>
<p>Plan an essay in response to the following question:</p>
<blockquote>How does Steinbeck present power and powerlessness in <em>Of Mice and Men</em>?</blockquote>
<p>Your plan must include:</p>
<ul>
<li>A thesis statement (one sentence defining your argument)</li>
<li>THREE body paragraph outlines, each with: main point, evidence, analysis note, context link</li>
<li>A note on your conclusion</li>
</ul>
<p>You do not need to write the full essay. Present as a structured bullet-point plan.</p>`,
    modelAnswer: `**Thesis:** Steinbeck presents power as something that is almost always used to oppress the vulnerable, arguing that the structures of 1930s American society -- based on race, gender, age, and economic position -- systematically deny dignity to those at the bottom.

**Paragraph 1 -- Curley's Power and Its Limits:**
- Point: Curley wields power through aggression and his position as the boss's son, but Steinbeck reveals this power as insecure and compensatory.
- Evidence: "He's alla time picking scraps with big guys. Kind of like he's mad at 'em because he ain't a big guy." (Candy, Chapter Two)
- Analysis: Candy's observation suggests Curley's aggression is driven by inadequacy; his power over others is a substitute for genuine authority. When Lennie crushes his hand, the power is literally reversed.
- Context: In Depression-era America, the son of a ranch boss held real economic power over workers with no employment rights -- but Steinbeck complicates this by showing Curley's personal insecurity.

**Paragraph 2 -- Crooks's Powerlessness:**
- Point: Crooks occupies the lowest position in the ranch's social hierarchy, not because of character or competence but because of race.
- Evidence: Curley's wife tells him: "I could get you strung up on a tree so easy it ain't even funny." (Chapter Four)
- Analysis: This threat -- a reference to lynching -- reminds the reader that Crooks's powerlessness is ultimately backed by the threat of violence. His withdrawal of interest in the dream immediately after this conversation shows power operating to crush hope.
- Context: Despite being set in California, the racial attitudes on the ranch reflect the Jim Crow culture that governed much of America in the 1930s.

**Paragraph 3 -- Curley's Wife's Power and Powerlessness:**
- Point: Curley's wife is simultaneously powerless (she has no name, no freedom, no respect) and dangerous (she can destroy a man with a word).
- Evidence: "I never get to talk to nobody. I get awful lonely." (Chapter Five) vs "I could get you strung up."
- Analysis: Her power is purely destructive -- she can harm others but cannot help herself. Steinbeck shows her exercising the only form of power available to her, which requires humiliating those beneath her.
- Context: Women in 1930s rural America had very limited legal and social rights; marriage to Curley gives her status but not freedom, making her both privileged and trapped.

**Conclusion:** Steinbeck presents power as a corrupting and ultimately self-defeating force -- those who wield it do so out of insecurity, and those who lack it are denied the dignity and freedom necessary for a meaningful life. The novel's tragedy is not just individual but systemic.`,
    marks: 10,
    difficulty: 'intermediate',
    keywords: [
      'power',
      'powerlessness',
      'Curley',
      'Crooks',
      "Curley's wife",
      'hierarchy',
      'essay planning',
    ],
    linkedObjectives: ['AO1-planning', 'AO3-context', 'AO2-language-analysis'],
    estimatedTime: '40 mins',
    dueWeek: 6,
  },
  {
    id: 'y9t3-hw-05',
    title: 'HW5: Creative -- Candy After the Ending',
    termUnit: 'T3-U3',
    type: 'creative',
    instructions: `<h3>Homework: Creative Writing -- Candy\'s Perspective</h3>
<p>At the end of the novel, when the other men run past Candy to find Curley's wife's body, Candy is left alone in the barn.</p>
<p>Write a 250-300 word interior monologue from Candy's perspective immediately after he realises Lennie has killed Curley's wife and the dream is over. Your writing should:</p>
<ul>
<li>Capture Candy's voice and his sense of loss</li>
<li>Refer to his dead dog as well as the dead dream -- make a connection between the two</li>
<li>Convey his understanding that he will now grow old and be "canned"</li>
<li>Use imagery that connects to the novel's themes of loneliness and futility</li>
</ul>`,
    modelAnswer: `She's there still. I can see her hair from here, the way it's gone soft around her face. She looks young like that.

I knew it. Somewhere I knew it, soon as I started thinking about the place. You don't get to have a thing like that, not at my age, not with a hand like mine. I should've known.

I keep thinking about Carlson shooting my old dog. I didn't even go with him. I stayed in the bunkhouse and listened and the sound came and I just lay there. I ought to have gone. I ought to have held him at the end. George always said -- no, that was Candy's own thought. Nobody said that to me.

Three hundred dollars. Three hundred dollars and I thought that was enough to make something real out of a story. George telling it over and over by the fire -- guys like us, he'd say, guys like us. And now there's no more us. There's just me again. Just old Candy with his stump of a wrist and no dog and nowhere to be.

They'll let me go, end of the month. I'm slow and I'm one-handed and there's a hundred young men coming off the road who can do anything I can do and more besides. The boss won't say it mean. He never does. He'll just look at the ground and say times are hard.

I should've gone with my dog when I had the chance. That's the truth of it. I should've gone while there was still someone who knew my name.`,
    marks: 15,
    difficulty: 'intermediate',
    keywords: [
      'creative writing',
      'Candy',
      'interior monologue',
      'the dream',
      'loneliness',
      'futility',
      'dog',
    ],
    linkedObjectives: ['AO5-creative-writing', 'AO5-voice-and-register', 'AO6-accuracy'],
    estimatedTime: '40 mins',
    dueWeek: 7,
  },
  {
    id: 'y9t3-hw-06',
    title: 'HW6: Exam Question Practice (AQA-style)',
    termUnit: 'T3-U3',
    type: 'exam-technique',
    instructions: `<h3>Homework: Timed Exam Question (45 minutes)</h3>
<p>This question is written in the style of an AQA GCSE English Literature paper.</p>
<p>Starting with this extract, how does Steinbeck present loneliness in <em>Of Mice and Men</em>?</p>
<blockquote>"A guy sets alone out here at night, maybe readin' books or thinkin' or stuff like that. Sometimes he gets thinkin', an' he got nothing to tell him what's so an' what ain't so. Maybe if he sees somethin', he don't know whether it's right or not. He can't turn to some other guy and ask him if he sees it too. He can't tell. He ain't got nothing to measure by... I seen things out here. I wasn't drunk. I don't know if I was asleep. If some guy was with me, he could tell me I was asleep, an' then it would be all right."</blockquote>
<p>(Crooks, Chapter Four)</p>
<p>Write about:</p>
<ul>
<li>How Steinbeck presents loneliness in this extract</li>
<li>How Steinbeck presents loneliness elsewhere in the novel</li>
</ul>`,
    modelAnswer: `In this extract, Steinbeck presents loneliness as a form of epistemological crisis -- a state in which the isolated person cannot be certain of their own perceptions because there is nobody to confirm or deny them. Crooks's observation that "he ain't got nothing to measure by" is the most precise formulation of this condition: without another human being to check reality against, the isolated man becomes unable to trust his own senses. Steinbeck presents this not as a philosophical problem but as a physical one -- "he sees somethin'... he don't know whether it's right or not." The concrete language strips the experience of abstraction and makes the terror of isolation visceral. The repetition of "he" throughout the passage creates a distancing effect, as if Crooks is describing a third person rather than himself; this suggests he has learned to discuss his suffering in the third person as a protective mechanism, to hold it at arm's length.

The final sentence of the extract is devastating in its simplicity: "if some guy was with me, he could tell me I was asleep, an' then it would be all right." The conditional tense ("if") signals impossibility -- there is no "some guy." The qualification "an' then it would be all right" reveals what Crooks actually wants: not freedom, not equality in the abstract, but the small, ordinary human comfort of someone to tell him he was dreaming. Steinbeck uses this moment to argue that the fundamental human need is not for wealth or success but for witness -- for someone who knows you are there.

Elsewhere in the novel, loneliness is the condition that defines every significant character. George, despite having Lennie, describes ranch workers as "the loneliest guys in the world" who "don't belong no place" -- the irony being that even the man with a companion feels the structural loneliness of the migrant life. The dream of the farm is primarily a dream of belonging: a place where nobody can "can" you, where you are not a unit of labour but a person with a stake in the land. The fact that every character who hears the dream is immediately drawn to it -- Candy, Crooks, and briefly even Curley's wife -- demonstrates that Steinbeck sees loneliness not as individual pathology but as a collective wound inflicted by a society that treats human beings as disposable.

Steinbeck ultimately presents loneliness as the defining tragedy of the novel's world, more devastating than poverty because it strikes at the need for meaning. Candy's desolation after the dream is destroyed, Crooks's retreat into bitter self-sufficiency, George's final silence -- all of these endings point toward a world in which genuine human connection is systematically denied to those who need it most. The novel's most radical claim is that this denial is not inevitable but chosen, and that the choice belongs to the society that makes it.`,
    marks: 30,
    difficulty: 'higher',
    keywords: [
      'AQA-style',
      'exam technique',
      'loneliness',
      'Crooks',
      'extract',
      'whole text',
      'timed',
      'epistemological',
    ],
    linkedObjectives: [
      'AO1-extended-response',
      'AO2-language-analysis',
      'AO2-structural-analysis',
      'AO3-context',
    ],
    estimatedTime: '45 mins',
    dueWeek: 8,
  },
  {
    id: 'y9t3-hw-07',
    title: 'HW7: Comparing Of Mice and Men and A Christmas Carol',
    termUnit: 'T3-U3',
    type: 'essay',
    instructions: `<h3>Homework: Cross-text Comparison</h3>
<p>Both <em>A Christmas Carol</em> and <em>Of Mice and Men</em> explore the lives of people who are marginalised and overlooked by society.</p>
<p><strong>Task:</strong> Write a comparative paragraph (200-250 words) exploring how Dickens and Steinbeck present the suffering of marginalised people in their respective texts. Use:</p>
<ul>
<li>At least one quotation from each text</li>
<li>Comparative connectives</li>
<li>A comment on how each writer's context shapes their portrayal</li>
</ul>`,
    modelAnswer: `Both Dickens and Steinbeck use specific, humanising detail to present the suffering of marginalised people in ways that challenge readers to confront social injustice rather than look away. Dickens uses the Cratchit family -- particularly Tiny Tim -- to make poverty personal and emotionally unbearable: when the Ghost of Christmas Present warns that Tim will die if "these shadows remain unaltered," Dickens weaponises the reader's attachment to a child to force a moral reckoning with the consequences of indifference. Similarly, Steinbeck humanises Crooks by showing not just his exclusion but his intelligence, articulating his loneliness through the quietly devastating observation that "a guy needs somebody -- to be near him." Whereas Dickens writes within a broadly optimistic framework -- suffering can be alleviated through individual transformation and social compassion -- Steinbeck's vision is considerably darker: Crooks briefly hopes for a future and then has it snatched away when reminded of his powerlessness. Both writers are responding to the political realities of their time: Dickens to the New Poor Law of 1834 and the industrial exploitation of the working class; Steinbeck to the racial segregation and economic devastation of 1930s Depression-era America. Despite these contextual differences, both share a conviction that the suffering of the marginalised is not inevitable but the product of choices made by those with power -- and that literature can and should make those choices visible.`,
    marks: 15,
    difficulty: 'extension',
    keywords: [
      'comparison',
      'A Christmas Carol',
      'Of Mice and Men',
      'Dickens',
      'Steinbeck',
      'marginalised',
      'context',
    ],
    linkedObjectives: ['AO1-comparison', 'AO3-context', 'AO2-language-analysis'],
    estimatedTime: '40 mins',
    dueWeek: 9,
  },
  {
    id: 'y9t3-hw-08',
    title: 'HW8: Character Analysis -- Slim',
    termUnit: 'T3-U2',
    type: 'analysis',
    instructions: `<h3>Homework: The Significance of Slim</h3>
<p>Slim is often described as a figure of natural authority and moral wisdom in <em>Of Mice and Men</em>.</p>
<p><strong>Task:</strong> Write an analytical paragraph (200-250 words) exploring how Steinbeck presents Slim and what role he plays in the novel. Consider:</p>
<ul>
<li>How Slim is described when he is first introduced -- what language does Steinbeck use?</li>
<li>His relationship with George -- why is it significant that Slim is the first person George talks to honestly?</li>
<li>His role at the ending -- what does his final gesture toward George suggest?</li>
</ul>`,
    modelAnswer: `Steinbeck introduces Slim with an authority that marks him out immediately from the other ranch hands. He is described as moving "with a majesty only achieved by royalty and master craftsmen" -- an unexpected simile that places natural skill on the same level as social rank, suggesting that Slim's authority is earned and inherent rather than conferred by money or status. His face is called **ageless**, and Steinbeck adds that his "slow speech had overtones not of thought, but of understanding beyond thought" -- a quality of perceptiveness that makes him seem almost supernatural. This characterisation positions Slim as the novel's moral arbiter: when he gives his verdict on a situation -- whether it is the shooting of Candy's dog or the complexity of George's relationship with Lennie -- his judgement carries the weight of truth, and Steinbeck tells us "his authority was so great that his word was taken on any subject".

His role at the ending is particularly significant. After George shoots Lennie, it is Slim who comes to him and says, "You hadda, George. I swear you hadda." This simple absolution matters enormously in the context of the novel's bleak world: nobody else offers comfort or understanding, and Curley's men are already treating Lennie's death as a cause for satisfaction. Slim's recognition of what George has done -- the mercy and love that it required -- is the only form of human witness that the ending provides. That he is the one to offer it, and that he takes George away "up to the highway," suggests that in Steinbeck's world, genuine compassion is rare but real, and that even in the most brutal circumstances, one person can choose to acknowledge another's suffering.`,
    marks: 12,
    difficulty: 'intermediate',
    keywords: [
      'Slim',
      'natural authority',
      'moral arbiter',
      'absolution',
      'ageless',
      'majesty',
      'ending',
      'compassion',
    ],
    linkedObjectives: [
      'AO2-language-analysis',
      'AO1-character-analysis',
      'AO2-structural-analysis',
    ],
    estimatedTime: '35 mins',
    dueWeek: 10,
  },
  {
    id: 'y9t3-hw-09',
    title: 'HW9: Quotation Bank -- Build Your Own',
    termUnit: 'T3-U1',
    type: 'exam-technique',
    instructions: `<h3>Homework: Building a Quotation Bank</h3>
<p>A strong quotation bank is an essential revision tool. Compile a bank of quotations for <em>Of Mice and Men</em> covering five key themes or characters.</p>
<p>For each category, find THREE quotations. For each quotation, provide:</p>
<ul>
<li>The quotation itself (keep it short -- under 15 words)</li>
<li>Who says it and when</li>
<li>One analytical sentence explaining its significance</li>
</ul>
<p>Categories: 1. The American Dream, 2. Loneliness, 3. George and Lennie's friendship, 4. Power/Powerlessness, 5. Women (Curley's wife)</p>`,
    modelAnswer: `**1. The American Dream**
- "We'd have our own place where we belonged and not sleep in no bunk house." -- George, Ch.1. The emphasis on belonging ("where we belonged") reveals that the dream is less about property than about identity and permanence.
- "I seen hundreds of men come by on the road... and not one of 'em ever gets it." -- Crooks, Ch.4. Crooks's experience-weighted cynicism positions the dream as a collective delusion that the system perpetuates to keep workers compliant.
- "They all want it." -- Crooks, Ch.4. The brevity of this admission -- about the universality of the dream -- undercuts his cynicism and reveals the depth of the shared longing.

**2. Loneliness**
- "Guys like us, that work on ranches, are the loneliest guys in the world." -- George, Ch.1. This self-aware declaration establishes loneliness as a structural condition of migrant life, not a personal failing.
- "A guy needs somebody -- to be near him." -- Crooks, Ch.4. The dash before "to be near him" slows the sentence to a pause of vulnerability, suggesting this admission cost Crooks something to make.
- "I never get to talk to nobody. I get awful lonely." -- Curley's wife, Ch.5. Her confession exposes the gap between her provocative performance and her actual need, making her a figure of pathos rather than threat.

**3. George and Lennie's Friendship**
- "I got you to look after me, and you got me to look after you." -- Lennie, Ch.1. The parallel structure of the sentence embodies the balance of the relationship -- mutual need, mutual protection.
- "If I was alone I could live so easy... but I won't tell nobody." -- George, Ch.1. The self-contradiction in this speech -- complaining and then refusing to change -- reveals that George's connection to Lennie is chosen, not merely endured.
- "Le's do it now. Le's get that place now." -- Lennie, Ch.6. Lennie's last words, asking for the dream, mean George's final act of mercy requires him to speak it one more time -- making the ending an act of love.

**4. Power/Powerlessness**
- "I could get you strung up on a tree so easy it ain't even funny." -- Curley's wife to Crooks, Ch.4. The casual brutality of this threat exposes the hierarchy beneath the surface of ranch life -- power here is ultimately backed by racial violence.
- "You ain't wanted here. We told you you ain't." -- Curley, Ch.3. Curley's repeated assertion of authority over those physically larger than him reveals that power in this world is claimed through aggression rather than earned through respect.
- "I ought to of shot that dog myself." -- Candy, Ch.3. Candy's regret about surrendering his dog to another man captures the powerlessness of the aged and marginalised -- the inability to exercise agency even over what you love.

**5. Women (Curley's Wife)**
- "She had full, rouged lips and wide-spaced eyes." -- Narrator, Ch.2. The physical description focuses on surface appearance, mirroring the way all the men on the ranch reduce her to spectacle rather than person.
- "I coulda been in the movies." -- Curley's wife, Ch.5. Her belief in the lost Hollywood opportunity represents the American Dream's specific failure for women: the promise of glamour and escape that was always, for most, a fantasy.
- "The meanness and the plannings and the discontent and the ache for attention were all gone from her face." -- Narrator, Ch.5. The post-death description is the novel's most compassionate view of her; it implicates the world that put those qualities in her face while she lived.`,
    marks: 15,
    difficulty: 'intermediate',
    keywords: [
      'quotation bank',
      'revision',
      'American Dream',
      'loneliness',
      'friendship',
      'power',
      "Curley's wife",
    ],
    linkedObjectives: ['AO2-language-analysis', 'AO1-textual-reference', 'AO1-revision-skill'],
    estimatedTime: '50 mins',
    dueWeek: 11,
  },
  {
    id: 'y9t3-hw-10',
    title: 'HW10: Full Essay -- How Does Steinbeck Present the Theme of Friendship?',
    termUnit: 'T3-U3',
    type: 'essay',
    instructions: `<h3>Homework: Full Essay (timed, 50 minutes)</h3>
<p>Write a full essay response to the following question:</p>
<blockquote>How does Steinbeck present the theme of friendship in <em>Of Mice and Men</em>?</blockquote>
<p>Your essay should:</p>
<ul>
<li>Open with a clear thesis defining what Steinbeck's novel argues about friendship</li>
<li>Develop 3-4 analytical paragraphs with embedded evidence</li>
<li>Include contextual understanding of 1930s American society and the migrant experience</li>
<li>Consider the way friendship both sustains and ultimately cannot save the characters</li>
<li>Conclude with a judgement about Steinbeck's overall message</li>
</ul>
<p>Aim for 500-600 words.</p>`,
    modelAnswer: `In Of Mice and Men, Steinbeck presents friendship as both the only genuine protection against the dehumanising forces of 1930s American society and as a bond that is ultimately powerless against those same forces. The relationship between George and Lennie is the emotional and structural centre of the novel, and Steinbeck uses it to argue that genuine human connection is precious, rare, and -- in the world he depicts -- fragile to the point of impossibility.

The friendship between George and Lennie is presented as exceptional in the context of migrant labour. George himself emphasises this: "Guys like us, that work on ranches, are the loneliest guys in the world... But not us." The pivot of "But not us" is structurally important -- it separates George and Lennie from the bleak norm of isolated, transient workers. Their friendship is not sentimental: George frequently expresses frustration with Lennie, and the opening of the novel makes clear that Lennie's limitations make George's life substantially harder. Steinbeck is careful not to idealise the relationship, because its value lies precisely in the fact that it persists despite difficulty. George stays with Lennie not because it is easy but because the alternative -- the loneliness of "having no place to go" -- is worse.

The dream of the farm is inseparable from the friendship. George tells the story of the little house and the rabbits not because it is a realistic plan but because the telling of it is a form of intimacy: it is something they share and nobody else can take away. The repeated ritual of the story -- Lennie asking for it, George performing it with the same words each time -- functions as a kind of private liturgy. In a world of constant movement and impermanence, this shared narrative is the only form of home these two men possess. Steinbeck uses this to argue that friendship creates meaning in a world that otherwise offers none: it gives men "something to look forward to," and without it, as Crooks observes, "a guy gets too lonely an' he gets sick."

The friendship is tested most severely in the novel's final chapter. When George finds Lennie by the river after Curley's wife's death, the choice he faces is between two unbearable options: surrender Lennie to Curley's mob and a violent, degrading death, or kill him himself and spare him that. George's decision to tell the dream one final time before shooting Lennie is the most devastating expression of love in the novel. He ensures that Lennie's last moment is one of happiness and hope rather than fear, and in doing so he demonstrates that friendship, at its most profound, is the willingness to put another person's peace of mind above your own wellbeing. The cost to George is immeasurable.

Steinbeck's overall argument is one of profound compassion tempered by clear-eyed realism. Friendship, he argues, is the most human thing we possess -- more sustaining than money, more valuable than land, more essential than the American Dream itself. But it cannot survive indefinitely in a world structured to destroy the conditions in which it can flourish. The tragedy of Of Mice and Men is not George's loss of Lennie alone but the loss of what their friendship represented: the proof that even in the hardest circumstances, two people could choose to matter to each other. Steinbeck presents this as something worth mourning -- and worth fighting to preserve.`,
    marks: 30,
    difficulty: 'extension',
    keywords: [
      'friendship',
      'George',
      'Lennie',
      'the dream',
      'loneliness',
      'migrant workers',
      'mercy',
      'compassion',
    ],
    linkedObjectives: [
      'AO1-extended-essay',
      'AO2-language-analysis',
      'AO2-structural-analysis',
      'AO3-context',
    ],
    estimatedTime: '50 mins',
    dueWeek: 12,
  },
]
