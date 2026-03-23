import type { CourseData, CourseModule, CourseQuiz } from './courses';

// ─── AQA GCSE English Literature: A Christmas Carol ─────────────────────────

const accModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Novel Overview & Context
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m1',
    title: 'Novel Overview & Context',
    duration: '50 min',
    content: `
<h2>A Christmas Carol — Overview &amp; Victorian Context</h2>

<p><em>A Christmas Carol</em> was published in December 1843 and became an instant bestseller. Charles Dickens wrote it in just six weeks, driven by outrage at the exploitation of the poor and a passionate desire to change the hearts of his middle- and upper-class readers. The novella is not merely a ghost story — it is a carefully crafted <strong>social polemic</strong> wrapped in a festive narrative, designed to move Victorian society towards greater compassion and collective responsibility.</p>

<div class="key-term"><strong>Key Term: Polemic</strong> — A strong, often aggressive argument against something. Dickens uses <em>A Christmas Carol</em> as a polemic against Victorian greed and indifference to the poor. For AO1, showing awareness of Dickens's polemical intent demonstrates a sophisticated personal response.</div>

<h3>Dickens's Life &amp; Motivation</h3>

<p>Charles Dickens (1812–1870) experienced poverty first-hand. When he was twelve, his father was imprisoned in the Marshalsea debtors' prison, and the young Dickens was sent to work in Warren's Blacking Factory, pasting labels onto bottles of boot polish. This traumatic episode haunted him for life and fuelled his passionate advocacy for the poor. In <em>A Christmas Carol</em>, Scrooge's cold dismissal of charity directly echoes the attitudes that Dickens witnessed among the wealthy industrialists and politicians of his day.</p>

<p>In early 1843, Dickens visited the tin mines of Cornwall and was horrified by the child labour he witnessed. He also read a parliamentary report — the <strong>Second Report of the Children's Employment Commission</strong> — detailing the abuse of children in factories and mines. He initially planned to write a political pamphlet, but decided that a story told at Christmas would reach a far wider audience and have a more lasting emotional impact. This decision produced <em>A Christmas Carol</em>.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO3):</strong> When writing about context, always connect it to Dickens's <em>purpose</em>. Do not simply state facts about Victorian poverty — explain how Dickens uses the novella to challenge or critique those conditions. For example: "Dickens presents the Cratchit family's modest Christmas dinner to shame wealthy readers who, like Scrooge, regard the poor as undeserving."</div>

<h3>Victorian Poverty &amp; the Poor Law</h3>

<p>The 1830s and 1840s — sometimes called the "Hungry Forties" — saw extreme poverty across industrial Britain. Rapid urbanisation packed families into overcrowded slums with no sanitation. Life expectancy for a working-class child in Manchester was just seventeen years. Against this backdrop, the government's response was not compassion but punishment.</p>

<p>The <strong>Poor Law Amendment Act of 1834</strong> established <strong>workhouses</strong> — institutions where the destitute could receive food and shelter, but only in exchange for gruelling labour under deliberately harsh conditions. The principle of "less eligibility" meant that workhouse life had to be <em>worse</em> than the worst conditions outside, to discourage people from seeking help. Families were separated, meals were meagre, and inmates wore uniforms. Dickens despised the workhouse system, and Scrooge's infamous line — "Are there no prisons? Are there no workhouses?" — is a direct attack on those who saw these institutions as adequate provision for the poor.</p>

<div class="key-term"><strong>Key Term: Less Eligibility</strong> — The principle behind the 1834 Poor Law that conditions in workhouses should be worse than the lowest standard of living outside, to deter all but the truly desperate from entering. Dickens regarded this as deliberately cruel.</div>

<h3>Malthusian Economics</h3>

<p>Thomas Malthus (1766–1834) argued that population growth would always outstrip food supply, and that poverty was a natural — even necessary — check on overpopulation. His followers believed that helping the poor only encouraged them to have more children, worsening the problem. This philosophy directly influenced the harsh Poor Law and gave the wealthy a convenient moral justification for ignoring suffering.</p>

<p>Scrooge parrots Malthusian thinking when he says the poor should die and "decrease the surplus population". Dickens has the Ghost of Christmas Present throw these words back at Scrooge when he asks whether Tiny Tim will live — a devastating moment that exposes the cruelty of reducing human lives to economic statistics. For AO3, this connection between Scrooge's language and Malthusian ideology is essential evidence of Dickens's social critique.</p>

<h3>Charity &amp; Christian Duty</h3>

<p>Victorian Britain was deeply religious, yet many churchgoers failed to practise the Christian charity they preached. Dickens saw this hypocrisy clearly. The charity collectors who visit Scrooge in Stave 1 represent the compassionate minority who tried to alleviate suffering through voluntary donations. Scrooge's refusal to contribute — and his suggestion that prisons and workhouses are sufficient — exposes the moral bankruptcy of a society that claims Christian values while allowing children to starve.</p>

<p>The novella's central message — that individuals have a duty to help their fellow human beings — is rooted in Christian teaching but presented in a way that transcends religion. Dickens appeals to basic human empathy, using the ghosts as a mechanism to force Scrooge (and the reader) to <em>see</em> the consequences of indifference.</p>

<h3>Christmas Traditions &amp; the "Christmas Spirit"</h3>

<p>By 1843, Christmas was being revived as a major celebration after decades of decline. Prince Albert had popularised the Christmas tree; Christmas cards were first produced that same year. Dickens's novella both reflected and accelerated this cultural shift. His vision of Christmas as a time of generosity, family, and social unity became the defining template for the modern celebration. The phrase "Merry Christmas" gained enormous popularity after the book's publication.</p>

<p>Dickens uses Christmas strategically: it is the one time of year when even the hardest hearts might be softened. By setting the story at Christmas, he maximises the emotional contrast between Scrooge's cold isolation and the warmth of communal celebration. The festive setting also carries a Christian subtext of redemption and rebirth — just as Christmas celebrates the birth of Christ, Scrooge is spiritually "reborn" on Christmas morning.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing that Dickens "invented Christmas" or "created all Christmas traditions." He did not. However, his novella played a significant role in shaping the modern secular idea of Christmas as a time of generosity, family, and goodwill. Be precise in your claims for AO3.</div>

<h3>The Novella Form</h3>

<p><em>A Christmas Carol</em> is structured as a novella — a short novel — divided into five "staves." A stave is a verse of a song or hymn, and Dickens's choice of this musical term reinforces the title's reference to a Christmas carol. The compact structure gives the narrative a relentless pace: Scrooge's transformation takes place over the course of a single night, creating dramatic urgency. Each stave functions like a movement in a piece of music, building towards the joyful crescendo of Stave 5.</p>

<div class="key-term"><strong>Key Term: Stave</strong> — A section or chapter of <em>A Christmas Carol</em>. The word literally means a verse of a song, linking the novella's structure to its title and reinforcing the idea of harmony and communal celebration that Dickens promotes.</div>

<h3>AQA Assessment: What You Need to Know</h3>

<p>On AQA GCSE English Literature Paper 1, <em>A Christmas Carol</em> appears in <strong>Section B: The 19th-century novel</strong>. You will be given a short <strong>extract</strong> from the novella and asked a question in the format: <em>"Starting with this extract, how does Dickens present..."</em>. You must write about the extract <strong>and</strong> the novella as a whole. The question is worth <strong>30 marks</strong> (plus 4 marks for SPaG), and you should spend approximately <strong>50 minutes</strong> on it.</p>

<p>The four assessment objectives are:</p>
<ul>
  <li><strong>AO1 (12 marks):</strong> Read, understand and respond to texts with a critical personal response, using textual references including quotations.</li>
  <li><strong>AO2 (12 marks):</strong> Analyse language, form and structure used by the writer to create meanings and effects.</li>
  <li><strong>AO3 (6 marks):</strong> Show understanding of the relationship between texts and their contexts.</li>
  <li><strong>AO4 (4 marks):</strong> Use a range of vocabulary and sentence structures with accurate spelling and punctuation.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> AO3 is worth 6 marks on the 19th-century novel question. Do not write a separate "context paragraph" — instead, weave contextual understanding into every analytical point. For example, when analysing Scrooge's language, connect it to Malthusian ideology; when discussing the Cratchits, link their struggles to the realities of Victorian working-class life.</div>
`,
    quiz: [
      {
        id: 'aqa-acc-m1-q1',
        question: 'What personal experience motivated Dickens to write about poverty?',
        options: [
          'He grew up in a wealthy family and felt guilty',
          'His father was imprisoned for debt and Dickens worked in a blacking factory as a child',
          'He trained as a social worker before becoming a writer',
          'He lived in a workhouse for two years as a teenager',
        ],
        correct: 1,
        explanation:
          'Dickens\'s father was imprisoned in the Marshalsea debtors\' prison, and the twelve-year-old Dickens was sent to Warren\'s Blacking Factory. This traumatic childhood experience fuelled his lifelong advocacy for the poor.',
      },
      {
        id: 'aqa-acc-m1-q2',
        question: 'What is the principle of "less eligibility" in the context of the 1834 Poor Law?',
        options: [
          'The poor were less eligible for government positions',
          'Workhouse conditions had to be worse than the worst conditions outside to deter people from entering',
          'Only those with fewer than five children were eligible for workhouse admission',
          'Workers in factories were less eligible for pay rises than those in agriculture',
        ],
        correct: 1,
        explanation:
          'Less eligibility meant that life inside a workhouse was deliberately made worse than the harshest conditions outside, to discourage all but the truly desperate from seeking help. Dickens saw this as institutionalised cruelty.',
      },
      {
        id: 'aqa-acc-m1-q3',
        question: 'Why does Dickens use the word "stave" instead of "chapter"?',
        options: [
          'To show the novella is based on a true story',
          'Because the book was originally published as a series of pamphlets',
          'To link the structure to a Christmas carol (song), reinforcing themes of harmony and celebration',
          'Because Victorian novels always used musical terminology',
        ],
        correct: 2,
        explanation:
          'A stave is a verse of a song. By calling his chapters "staves," Dickens connects the novella\'s structure to its title — A Christmas Carol — reinforcing themes of communal joy and musical harmony.',
      },
      {
        id: 'aqa-acc-m1-q4',
        question: 'How is A Christmas Carol assessed on AQA Paper 1?',
        options: [
          'A closed-book essay with no extract provided',
          'Two short-answer questions and one essay',
          'An extract-based question worth 30 marks (+4 SPaG): "Starting with this extract, how does Dickens present..."',
          'A comparison essay linking the novella to a poem',
        ],
        correct: 2,
        explanation:
          'AQA provides an extract and asks a question in the format "Starting with this extract, how does Dickens present..." worth 30 marks plus 4 for SPaG. You must write about the extract and the wider novella.',
      },
      {
        id: 'aqa-acc-m1-q5',
        question: 'Which economic theory does Scrooge echo when he says the poor should "decrease the surplus population"?',
        options: [
          'Keynesian economics',
          'Marxist theory',
          'Malthusian economics',
          'Adam Smith\'s free market theory',
        ],
        correct: 2,
        explanation:
          'Thomas Malthus argued that population growth would outstrip food supply and that poverty was a natural check on overpopulation. Scrooge\'s language directly echoes this cold, utilitarian thinking, which Dickens despised.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Stave 1: Marley's Ghost
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m2',
    title: "Stave 1: Marley's Ghost",
    duration: '55 min',
    content: `
<h2>Stave 1 — Marley's Ghost</h2>

<p>The opening stave of <em>A Christmas Carol</em> is a masterclass in characterisation, tone-setting, and thematic exposition. Dickens introduces Scrooge as a figure of almost comic heartlessness, establishes the cold, oppressive atmosphere of Victorian avarice, and then shatters that world with the terrifying visitation of Jacob Marley's ghost. Every element — from the famous opening line to Marley's agonised warning — serves Dickens's moral purpose.</p>

<h3>"Marley was dead: to begin with."</h3>

<p>The novella's opening sentence is one of the most celebrated in English literature. Its blunt, matter-of-fact tone establishes the narrator's direct, conversational voice. The phrase "to begin with" is a narrative aside — the narrator is speaking directly to the reader, as if telling a story by the fireside. This creates an intimate, oral quality that echoes the tradition of Christmas storytelling. More importantly, the emphasis on Marley's death is essential: Dickens must convince us that Marley is truly dead so that his ghostly return will be genuinely shocking.</p>

<div class="key-term"><strong>Key Term: Authorial Intrusion</strong> — When the narrator breaks into the story to address the reader directly. Dickens uses authorial intrusion frequently in <em>A Christmas Carol</em>, creating a warm, conspiratorial relationship with the audience. This technique helps Dickens guide the reader's moral response.</div>

<h3>Scrooge's Introduction: A Portrait of Misanthropy</h3>

<p>Dickens introduces Scrooge through a barrage of negative adjectives and similes. He is described as "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!" The list structure — with its piling up of harsh, monosyllabic participles — creates a relentless rhythm that mirrors Scrooge's obsessive accumulation of wealth. Each word tightens like a fist, physically enacting the greed it describes.</p>

<p>The famous simile "hard and sharp as flint" associates Scrooge with cold, lifeless stone — incapable of warmth or human connection. Yet flint also produces sparks when struck, which subtly foreshadows the possibility of transformation: even the hardest material can generate light. Dickens further describes Scrooge as "solitary as an oyster," a simile that conveys isolation but also carries a submerged metaphor — oysters contain pearls, hinting at the goodness hidden within Scrooge's hard exterior.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> When analysing Dickens's language choices, always consider <em>multiple layers of meaning</em>. The "oyster" simile is an excellent example: on the surface it conveys isolation, but a more sophisticated reading identifies the pearl metaphor and links it to Scrooge's latent capacity for goodness. This kind of layered analysis will push your response into the top mark bands.</div>

<p>The weather mirrors Scrooge's character through <strong>pathetic fallacy</strong>. The fog is "cold, bleak, biting"; it seeps into the counting house just as Scrooge's coldness infects everything around him. Dickens writes that "no warmth could warm" him — a deliberate tautology that emphasises the absoluteness of Scrooge's emotional frigidity. External cold and internal cold become indistinguishable.</p>

<h3>The Counting House</h3>

<p>Scrooge's counting house is a physical manifestation of his values. It is dark, cold, and unwelcoming. His clerk, Bob Cratchit, shivers over a single coal because Scrooge will not allow him to replenish the fire. The coal box is kept in Scrooge's room — a symbol of his desire to control and hoard even the most basic comforts. This small domestic detail carries enormous thematic weight: Dickens shows that greed does not merely affect the miser himself but causes real, physical suffering to those around him.</p>

<p>The contrast between Scrooge and Bob Cratchit — employer and employee, rich and poor — establishes one of the novella's central dynamics. Cratchit is powerless, dependent, and yet maintains his humanity and warmth. Scrooge has all the power but is spiritually impoverished. Dickens asks his Victorian readers: who is truly the poorer man?</p>

<h3>Fred's Visit</h3>

<p>Scrooge's nephew Fred arrives to invite him to Christmas dinner, and the exchange between them crystallises the novella's central debate. Fred declares that Christmas is "a kind, forgiving, charitable, pleasant time" — the only time when people "open their shut-up hearts freely." His language of openness, warmth, and generosity directly contrasts with the imagery of closure, cold, and greed associated with Scrooge.</p>

<p>Scrooge's response — "every idiot who goes about with 'Merry Christmas' on his lips should be boiled with his own pudding and buried with a stake of holly through his heart" — is both blackly comic and deeply revealing. The violence of the imagery (boiling, impalement) shows that Scrooge sees Christmas generosity as a genuine threat to his worldview. His famous retort, "Bah! Humbug!" dismisses Christmas as fraud — the word "humbug" literally means deception or nonsense.</p>

<div class="key-term"><strong>Key Term: Humbug</strong> — Deception, nonsense, or fraudulent behaviour. Scrooge uses it to dismiss Christmas as a sham. Ironically, it is Scrooge's own worldview — that money is all that matters — that is the true humbug.</div>

<h3>The Charity Collectors</h3>

<p>Two gentlemen arrive seeking donations for the poor. This scene is crucial for AO3 because Scrooge's response directly echoes real Victorian attitudes. When told that many would rather die than enter a workhouse, Scrooge replies: "If they would rather die, they had better do it, and decrease the surplus population." This line parrots <strong>Malthusian economics</strong> and reveals the dehumanising logic of laissez-faire capitalism.</p>

<p>Dickens uses Scrooge as a mouthpiece for the attitudes he despises, so that when the ghosts transform Scrooge, the reader too is compelled to reject those attitudes. The charity collectors represent Dickens's own position — that voluntary compassion and social responsibility are moral imperatives, not optional extras.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Scrooge as simply a "bad character." Dickens creates Scrooge as a <em>representative figure</em> — he embodies the attitudes of an entire class. Your essay should discuss what Scrooge represents (Victorian capitalist indifference) as well as who he is as an individual.</div>

<h3>Marley's Ghost</h3>

<p>The arrival of Marley's ghost shifts the novella from social realism into the <strong>supernatural</strong>. Marley appears wrapped in a chain made of "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel." This chain is the physical manifestation of a lifetime spent prioritising money over humanity. Each link represents a missed opportunity for kindness — the chain is both literal (in the ghost story tradition) and allegorical (representing the spiritual consequences of greed).</p>

<p>Marley's anguished cry — "Mankind was my business!" — is the novella's moral thesis statement. The word "business" is deliberately ironic: Marley spent his life in business (commerce), but his true business (duty to humanity) was neglected. Dickens uses this pun to argue that no amount of commercial success can compensate for a failure of compassion.</p>

<p>Marley warns Scrooge that he wears a chain even longer than Marley's own — "you were my partner" — and that three spirits will visit him. The supernatural framework gives Dickens a mechanism to show Scrooge (and the reader) the past, present, and future consequences of greed. It also taps into the Victorian fascination with ghosts and the afterlife, ensuring the story would grip its audience.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> The chain is one of the most important symbols in the novella. In an exam, you could analyse how Dickens uses it to make an abstract concept (spiritual punishment for greed) concrete and visible. This links form and meaning — the ghost story genre allows Dickens to <em>literalise</em> metaphors that would otherwise remain abstract.</div>

<h3>The Window Scene</h3>

<p>Before Marley departs, he leads Scrooge to the window, where Scrooge sees the air "filled with phantoms, wandering hither and thither in restless haste, and moaning as they went." Many wear chains like Marley's. Some are recognisable as former businessmen. They try to help the living — reaching out to a homeless woman and her baby — but cannot intervene. Their punishment is to see suffering they could have alleviated in life but are now powerless to help.</p>

<p>This scene extends Dickens's critique beyond Scrooge. The phantoms represent an entire class of wealthy Victorians who ignored their social duty. Their eternal torment is not fire and brimstone but <em>impotence</em> — the agony of recognising too late what they should have done. Dickens implies that indifference to suffering is itself a form of damnation.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the window scene in essays about social responsibility. Many students focus only on Scrooge's dialogue with the charity collectors, but the phantom scene broadens Dickens's message from one man's failing to an entire society's moral crisis.</div>
`,
    quiz: [
      {
        id: 'aqa-acc-m2-q1',
        question: 'What is the effect of Dickens describing Scrooge as "solitary as an oyster"?',
        options: [
          'It shows Scrooge lives by the sea',
          'It conveys isolation on the surface, but an oyster contains a pearl — hinting at hidden goodness',
          'It suggests Scrooge is slimy and untrustworthy',
          'It is simply a humorous comparison with no deeper meaning',
        ],
        correct: 1,
        explanation:
          'The simile conveys Scrooge\'s isolation, but the submerged metaphor of the pearl hints at the goodness hidden within his hard exterior — foreshadowing his eventual transformation.',
      },
      {
        id: 'aqa-acc-m2-q2',
        question: 'What does Marley\'s chain symbolise?',
        options: [
          'His imprisonment in the afterlife for committing crimes',
          'The spiritual burden of a lifetime spent prioritising money over humanity',
          'The physical weight of Victorian industrial machinery',
          'His unfinished legal contracts with Scrooge',
        ],
        correct: 1,
        explanation:
          'Marley\'s chain — made of cash-boxes, keys, padlocks, and ledgers — symbolises the spiritual consequences of a life devoted to greed at the expense of compassion. Each link represents a missed opportunity for kindness.',
      },
      {
        id: 'aqa-acc-m2-q3',
        question: 'Why is the phrase "Mankind was my business" ironic?',
        options: [
          'Because Marley was a politician, not a businessman',
          'Because the word "business" puns on commercial business vs. moral duty — Marley pursued the former but neglected the latter',
          'Because Marley never actually ran a business',
          'Because mankind did not want Marley\'s help',
        ],
        correct: 1,
        explanation:
          'Dickens uses the double meaning of "business" — Marley spent his life in commerce (business) but neglected his true business (duty to humanity). This pun encapsulates the novella\'s moral argument.',
      },
      {
        id: 'aqa-acc-m2-q4',
        question: 'What technique does Dickens use when the fog and cold weather mirror Scrooge\'s personality?',
        options: [
          'Dramatic irony',
          'Pathetic fallacy',
          'Onomatopoeia',
          'Foreshadowing',
        ],
        correct: 1,
        explanation:
          'Pathetic fallacy is the attribution of human emotions to the natural world. Dickens uses the cold, bleak weather to mirror Scrooge\'s emotional frigidity, making the physical environment an extension of his character.',
      },
      {
        id: 'aqa-acc-m2-q5',
        question: 'What is the significance of the phantoms Scrooge sees through the window?',
        options: [
          'They show that ghosts are common in Victorian London',
          'They broaden Dickens\'s critique from one man to an entire class of wealthy people who ignored their social duty',
          'They are simply added for a frightening effect',
          'They represent the charity collectors returning in ghostly form',
        ],
        correct: 1,
        explanation:
          'The phantoms — many recognisable as former businessmen — extend Dickens\'s message beyond Scrooge. They represent an entire class punished for indifference, broadening the novella from personal redemption story to social critique.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Stave 2: The Ghost of Christmas Past
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m3',
    title: 'Stave 2: The Ghost of Christmas Past',
    duration: '55 min',
    content: `
<h2>Stave 2 — The Ghost of Christmas Past</h2>

<p>Stave 2 takes Scrooge — and the reader — on an emotional journey through memory. The Ghost of Christmas Past reveals the experiences that shaped Scrooge, transforming him from a lonely, vulnerable child into the cold miser of Stave 1. Dickens uses this stave to generate <strong>sympathy</strong> for Scrooge: we see that his cruelty is not innate but learned, the product of neglect, loss, and a gradual substitution of money for love. This is essential for making his redemption believable.</p>

<h3>The Ghost's Appearance</h3>

<p>The Ghost of Christmas Past is described as "a strange figure — like a child: yet not so like a child as like an old man." This paradoxical description — simultaneously young and old — reflects the nature of memory itself, which belongs to the past but lives in the present. The ghost carries a "bright clear jet of light" from its head, symbolising the illuminating power of memory and truth. Scrooge later asks the ghost to extinguish the light with the cap it carries — a powerful metaphor for his desire to suppress painful memories and the self-knowledge they bring.</p>

<div class="key-term"><strong>Key Term: Symbolism</strong> — The use of objects, figures, or colours to represent abstract ideas. The Ghost's light symbolises truth and memory; Scrooge's attempt to extinguish it represents his desire to avoid self-reflection. For AO2, analysing symbolism demonstrates understanding of Dickens's craft.</div>

<h3>Scrooge's Childhood: The Lonely Schoolboy</h3>

<p>The first vision shows young Scrooge alone at boarding school while other children go home for Christmas. He is described as "a solitary child, neglected by his friends." The word "neglected" carries enormous weight — it implies not just loneliness but abandonment. Dickens reveals that Scrooge's isolation as an adult has its roots in childhood rejection. The reading audience, who moments ago despised Scrooge, now begin to understand him.</p>

<p>When Scrooge sees his younger self, he weeps — a dramatic shift from the man who "no warmth could warm" in Stave 1. The tears show that beneath the flint-like exterior, feeling still exists. Dickens writes that Scrooge "said he wished" he had given something to the carol singer he turned away the previous evening. This is the first crack in Scrooge's armour — the first acknowledgement that his behaviour has been wrong — and it is triggered entirely by reconnection with his own suffering.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO1):</strong> When analysing Scrooge's response to his childhood self, make a clear link to his behaviour in Stave 1. His regret about the carol singer shows that memory is already beginning to work on his conscience. This is evidence of Dickens structuring the novella so that transformation is gradual and psychologically convincing, not sudden.</div>

<p>The vision also reveals that Scrooge found solace in books — characters like Ali Baba and Robinson Crusoe were his companions. Dickens, himself a voracious childhood reader, uses this detail to show that Scrooge once had imagination and emotional capacity. His later obsession with money has starved these qualities.</p>

<h3>Fan — Scrooge's Sister</h3>

<p>Scrooge's sister Fan arrives at the school to take him home, declaring "Father is so much kinder than he used to be." This line implies a history of domestic harshness — Scrooge's father was cruel or distant, which explains both the boarding school abandonment and Scrooge's difficulty with emotional connection. Fan is described as having "a large heart" — the direct opposite of the "hard and sharp as flint" Scrooge of Stave 1.</p>

<p>Fan's early death (she dies giving birth to Fred) adds another layer of loss. When the Ghost mentions Fred, Scrooge becomes "uneasy" — the memory of his beloved sister connects to his cold treatment of her son. Dickens implies that Scrooge's rejection of Fred is not mere grumpiness but a defence mechanism: Fred is a living reminder of the sister he lost, and engaging with Fred means engaging with grief.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Overlooking Fan's significance. She is not just a minor character — she explains why Scrooge treats Fred badly and shows that Scrooge was once capable of deep love. Always connect Fan to the wider theme of family and to Scrooge's relationship with Fred.</div>

<h3>Fezziwig's Christmas Party</h3>

<p>The vision of Fezziwig's warehouse is one of the novella's most joyful scenes and serves as a direct counterpoint to Scrooge's own counting house. Fezziwig is everything Scrooge is not: generous, warm, and alive to the happiness of those around him. He spends "a few pounds" on a Christmas party that fills his employees with genuine joy. Dickens emphasises that the monetary cost is small — it is the spirit of generosity that matters.</p>

<p>Scrooge watches Fezziwig and unconsciously speaks "like his former, not his latter, self" — declaring that Fezziwig had "the power to render us happy or unhappy; to make our service light or burdensome." This is a crucial moment of self-awareness. Scrooge recognises that an employer's power extends beyond wages to the emotional wellbeing of their workers. The Spirit asks pointedly whether the praise is deserved for spending "a few pounds," and Scrooge — "heated by the Ghost's remark" — begins to understand that he himself has failed as an employer.</p>

<div class="key-term"><strong>Key Term: Foil</strong> — A character who contrasts with another to highlight particular qualities. Fezziwig is a foil for Scrooge: both are employers, but Fezziwig uses his wealth to spread joy while Scrooge hoards it. The comparison sharpens Dickens's critique of miserly employers.</div>

<p>Again, Scrooge thinks of Bob Cratchit and wishes he could say something to him "right now." This is the second crack — another moment where memory triggers conscience and Scrooge connects his past experience (being treated well by Fezziwig) to his present failure (treating Bob Cratchit badly).</p>

<div class="examiner-tip"><strong>Examiner Tip (AO3):</strong> Fezziwig embodies Dickens's ideal of the benevolent employer — a direct response to the exploitative factory owners and businessmen of Victorian England. When writing about Fezziwig, link him to Dickens's belief that the wealthy have a moral duty to use their resources to improve the lives of those who depend on them.</div>

<h3>Belle: The Loss of Love</h3>

<p>The final — and most painful — vision shows Belle, Scrooge's former fiancee, releasing him from their engagement. She tells him that "a golden idol has displaced me" — money has replaced love in Scrooge's heart. The metaphor of the "golden idol" carries biblical resonance (the Golden Calf of Exodus), suggesting that Scrooge's worship of wealth is a form of idolatry — a sin against the divine.</p>

<p>Belle's accusation is gentle but devastating: "You fear the world too much." She recognises that Scrooge's greed is rooted not in malice but in <strong>fear</strong> — fear of poverty, fear of the vulnerability he experienced as a child. Dickens humanises Scrooge even as he condemns his choices, ensuring the reader understands that greed is a response to trauma, not an inherent character flaw.</p>

<p>The Ghost then shows Scrooge a later scene: Belle, now married to another man, surrounded by happy, boisterous children in a warm home. This is the life Scrooge could have had — the love, family, and belonging he sacrificed for money. The pain is unbearable: Scrooge begs the Spirit to "remove me from this place" and seizes the ghost's cap, pressing it down to extinguish the light. But the light — like truth, like memory — cannot be fully suppressed. It streams out from under the cap, showing that Scrooge cannot escape self-knowledge.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing Belle as simply "Scrooge's ex-girlfriend." Belle is a thematic device — she represents the life of love and family that Scrooge traded for wealth. Her presence in Stave 2 makes Scrooge's later redemption more powerful because we see exactly what he lost and could potentially regain through changed behaviour.</div>

<h3>Structure of Stave 2</h3>

<p>Dickens structures the visions chronologically, tracing Scrooge's decline from innocent child to lonely miser. Each scene adds another layer of sympathy and understanding. The stave moves from public settings (school, Fezziwig's party) to the intensely private scene with Belle, mirroring the way the ghost strips away Scrooge's defences to reach his most vulnerable memories. By the end of Stave 2, Scrooge is emotionally raw — perfectly primed for the revelations of Staves 3 and 4.</p>
`,
    quiz: [
      {
        id: 'aqa-acc-m3-q1',
        question: 'What does the Ghost of Christmas Past\'s light symbolise?',
        options: [
          'The warmth of a Christmas fire',
          'The illuminating power of memory and truth',
          'The wealth Scrooge has accumulated',
          'The light of Heaven judging Scrooge',
        ],
        correct: 1,
        explanation:
          'The ghost\'s light symbolises the truth that memory reveals. Scrooge\'s attempt to extinguish it with the cap represents his desire to suppress painful self-knowledge — but truth cannot be fully hidden.',
      },
      {
        id: 'aqa-acc-m3-q2',
        question: 'Why is Fezziwig significant as a character?',
        options: [
          'He is Scrooge\'s father and provides context for Scrooge\'s childhood',
          'He is a foil for Scrooge — a generous employer who uses his wealth to spread joy, contrasting with Scrooge\'s miserliness',
          'He is the Ghost of Christmas Past in human form',
          'He represents the greed of Victorian factory owners',
        ],
        correct: 1,
        explanation:
          'Fezziwig is a foil for Scrooge — both are employers, but Fezziwig spends generously on his workers\' happiness. The contrast highlights Scrooge\'s failure as an employer and embodies Dickens\'s ideal of benevolent capitalism.',
      },
      {
        id: 'aqa-acc-m3-q3',
        question: 'What does Belle mean when she says "a golden idol has displaced me"?',
        options: [
          'Scrooge has replaced her with a golden statue',
          'Money has replaced love in Scrooge\'s heart — the biblical allusion suggests his worship of wealth is a form of idolatry',
          'Scrooge has begun worshipping a new religion',
          'Belle has been fired from her job at a goldsmith\'s shop',
        ],
        correct: 1,
        explanation:
          'Belle uses the metaphor of a "golden idol" (echoing the biblical Golden Calf) to show that Scrooge now worships money instead of valuing love. This frames his greed as a spiritual sin, not just a personality flaw.',
      },
      {
        id: 'aqa-acc-m3-q4',
        question: 'What is the first sign that Scrooge\'s conscience is awakening in Stave 2?',
        options: [
          'He attacks the Ghost of Christmas Past',
          'He weeps at seeing his lonely childhood self and wishes he had given something to the carol singer he turned away',
          'He offers money to Fezziwig',
          'He apologises to Belle for his past behaviour',
        ],
        correct: 1,
        explanation:
          'When Scrooge sees his childhood self, he cries and expresses regret about the carol singer — the first crack in his armour. Dickens shows transformation beginning gradually through the power of memory.',
      },
      {
        id: 'aqa-acc-m3-q5',
        question: 'Why does Dickens reveal that Scrooge\'s father was harsh and that Fan died young?',
        options: [
          'To make the story more dramatic and entertaining',
          'To generate sympathy for Scrooge by showing that his coldness is rooted in childhood neglect and loss, not innate cruelty',
          'To explain why Scrooge became a successful businessman',
          'To introduce a subplot about Scrooge\'s family inheritance',
        ],
        correct: 1,
        explanation:
          'Dickens reveals Scrooge\'s painful backstory to generate sympathy and show that greed is a learned response to trauma. This makes Scrooge\'s redemption psychologically convincing — he is recovering his original nature, not gaining a new one.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Stave 3: The Ghost of Christmas Present
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m4',
    title: 'Stave 3: The Ghost of Christmas Present',
    duration: '55 min',
    content: `
<h2>Stave 3 — The Ghost of Christmas Present</h2>

<p>If Stave 2 looked inward — exploring the private memories that shaped Scrooge — Stave 3 looks outward, forcing Scrooge to confront the <strong>present-day reality</strong> of poverty and its human cost. The Ghost of Christmas Present shows Scrooge what is happening <em>right now</em> in the homes of those he has dismissed as undeserving. This is Dickens at his most persuasive, using emotional realism to dismantle every argument for indifference.</p>

<h3>The Ghost's Appearance</h3>

<p>The Ghost of Christmas Present is a giant, "jolly" figure dressed in a green robe bordered with white fur, sitting atop a throne of Christmas food — turkeys, geese, sausages, mince pies, plum puddings, and bowls of punch. The abundance is overwhelming. Dickens uses this imagery to represent the generosity and plenty that Christmas <em>should</em> bring — a direct contrast to Scrooge's barren, fireless counting house.</p>

<p>The ghost carries a torch shaped like "Plenty's horn" (the cornucopia), which it uses to sprinkle a blessing on the food of the poor. This detail is significant: the Spirit does not create wealth but spreads the <strong>spirit of generosity</strong>. Dickens implies that there is enough for everyone — the problem is not scarcity but unequal distribution and lack of compassion.</p>

<div class="key-term"><strong>Key Term: Cornucopia</strong> — A horn-shaped container overflowing with food and flowers, symbolising abundance and plenty. The Ghost's torch resembles a cornucopia, reinforcing the message that generosity — not hoarding — is the route to prosperity and happiness.</div>

<h3>The Cratchit Family Christmas</h3>

<p>The centrepiece of Stave 3 is the Cratchit family's Christmas dinner. Dickens describes it in loving, sensory detail — the smell of the goose, the excitement of the Christmas pudding, the warmth of the family gathered together. Yet he also makes clear that this is a <strong>modest</strong> celebration. The goose is small. The pudding is "a small one for a large family." The children's clothes are threadbare but clean. Martha, the eldest daughter, works long hours in a hatmaker's shop for a pittance.</p>

<p>The brilliance of this scene is its <strong>juxtaposition</strong>: the Cratchits have almost nothing in material terms, yet they possess everything that Scrooge lacks — love, warmth, gratitude, and togetherness. Dickens inverts the expected hierarchy: the "poor" family is spiritually rich, while the "wealthy" Scrooge is spiritually bankrupt. This structural contrast is central to the novella's moral argument and provides excellent material for AO2 analysis.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> When writing about the Cratchits, focus on Dickens's use of <strong>contrast and juxtaposition</strong>. Compare the Cratchit household (small, warm, full of love) with Scrooge's counting house (large, cold, devoid of human connection). This structural technique — placing opposites side by side — is one of Dickens's most powerful methods of persuasion.</div>

<h3>Tiny Tim</h3>

<p>Tiny Tim is simultaneously a character and a <strong>symbol</strong>. As a character, he is Bob Cratchit's youngest son, disabled and reliant on a crutch. As a symbol, he represents all the vulnerable, innocent children whose lives are endangered by Victorian society's indifference to poverty. His famous line — "God bless us, every one!" — encapsulates the novella's message of universal goodwill and Christian charity.</p>

<p>When Scrooge asks whether Tiny Tim will live, the Ghost responds with devastating irony: "If these shadows remain unaltered by the Future, the child will die." He then turns Scrooge's own words against him: "If he be like to die, he had better do it, and decrease the surplus population." This is one of the novella's most powerful moments. By throwing Scrooge's Malthusian language back at him in the context of a specific, lovable child, Dickens forces both Scrooge and the reader to confront the human reality behind abstract economic arguments.</p>

<p>Scrooge is "overcome with penitence and grief" — the word "penitence" carries religious connotations of confession and repentance, positioning Scrooge's transformation as a spiritual awakening. Dickens shows that empathy — the ability to see another person's suffering as real and urgent — is the antidote to the cold rationalism of Malthusian thinking.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing Tiny Tim as simply "cute" or "sweet." He is a calculated rhetorical device — Dickens creates him to be maximally sympathetic so that the reader cannot dismiss him as "surplus population." Always analyse Tiny Tim in terms of Dickens's <em>purpose</em>: to personalise poverty and make indifference impossible.</div>

<h3>Fred's Christmas Party</h3>

<p>The Ghost also takes Scrooge to Fred's Christmas party, where warmth, laughter, and games fill the house. Fred defends Scrooge even in his absence, saying "I mean to give him the same chance every year, whether he likes it or not, for I pity him." Fred's persistent kindness — offering invitation after invitation despite repeated rejection — embodies the novella's message that compassion should be unconditional.</p>

<p>Fred's use of the word "pity" is significant. He does not condemn Scrooge but feels sorry for him — recognising that Scrooge's miserliness is its own punishment. Fred sees what Scrooge cannot: that by refusing human connection, Scrooge is the one who suffers most. The party scene also provides another contrast — Fred's house is full of light, laughter, and community, while Scrooge sits alone in darkness.</p>

<h3>Ignorance and Want</h3>

<p>The stave's climax is one of the most disturbing images in Victorian literature. The Ghost reveals two children hidden beneath his robe: a boy named <strong>Ignorance</strong> and a girl named <strong>Want</strong>. They are described as "wretched, abject, frightful, hideous, miserable" — a list of adjectives as relentless as the one that introduced Scrooge in Stave 1, but now applied to innocent children. They are "yellow, meagre, ragged, scowling, wolfish" — the adjective "wolfish" suggesting that deprivation has stripped them of their humanity.</p>

<p>These children are <strong>allegorical figures</strong> — they represent abstract social ills made visible. Ignorance is the failure to educate the poor; Want is the failure to provide for them. The Ghost warns Scrooge to "beware them both" but especially "this boy" — Ignorance — because "on his brow I see that written which is Doom." Dickens argues that a society that keeps its poorest citizens uneducated and hungry is dooming itself to destruction.</p>

<div class="key-term"><strong>Key Term: Allegory</strong> — A narrative in which characters, events, and settings represent abstract ideas or moral concepts. Ignorance and Want are allegorical figures representing the social consequences of neglecting the poor. The entire novella can be read as an allegory for Victorian society's need for moral reform.</div>

<p>When Scrooge asks "Have they no refuge or resource?", the Ghost echoes his own words once more: "Are there no prisons? Are there no workhouses?" This repetition is devastating — Scrooge's earlier dismissal of the poor is turned into an indictment of his own callousness. Dickens makes it impossible for the reader to hear those words without shame.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO1):</strong> Ignorance and Want are among the most frequently examined moments in the novella. If asked about social responsibility, poverty, or Dickens's message, this scene should feature prominently. Always connect the allegory to Dickens's wider purpose — he is arguing that Victorian society must address poverty and education to avoid its own destruction.</div>

<h3>The Ghost's Departure</h3>

<p>The Ghost of Christmas Present ages rapidly during the course of the stave, and by midnight his hair has turned grey. He tells Scrooge that his life span is just one day — this Christmas Day. The transience of the ghost reminds the reader that the present is fleeting; the opportunity to act with generosity exists only in the now. Scrooge cannot change the past or control the future, but he can choose how to behave in the present moment.</p>
`,
    quiz: [
      {
        id: 'aqa-acc-m4-q1',
        question: 'What do Ignorance and Want allegorically represent?',
        options: [
          'Scrooge\'s two worst personality traits',
          'The failure to educate and provide for the poor — social ills that will doom society if unaddressed',
          'Two orphans that Scrooge must adopt to complete his redemption',
          'The ghosts of children who died in workhouses',
        ],
        correct: 1,
        explanation:
          'Ignorance and Want are allegorical figures representing society\'s failure to educate and feed its poorest members. The Ghost warns that Ignorance especially will lead to "Doom" — Dickens argues that neglecting the poor threatens social stability itself.',
      },
      {
        id: 'aqa-acc-m4-q2',
        question: 'How does Dickens use the Cratchit family to challenge Scrooge\'s worldview?',
        options: [
          'By showing they are wealthier than Scrooge realises',
          'By showing they are materially poor but spiritually rich — inverting the expected hierarchy of wealth and happiness',
          'By having them directly confront Scrooge about his behaviour',
          'By revealing that Bob Cratchit is secretly stealing from Scrooge',
        ],
        correct: 1,
        explanation:
          'The Cratchits have almost nothing materially but possess love, warmth, and togetherness — everything Scrooge lacks. This juxtaposition inverts the expected hierarchy: the "poor" family is spiritually wealthy, while the rich miser is spiritually bankrupt.',
      },
      {
        id: 'aqa-acc-m4-q3',
        question: 'Why does the Ghost repeat Scrooge\'s own words — "decrease the surplus population" and "Are there no prisons?"?',
        options: [
          'The Ghost has a poor memory and can only repeat things it has heard',
          'To throw Scrooge\'s callous words back at him, forcing him to confront their cruelty in a new context',
          'To show that the Ghost agrees with Scrooge\'s earlier views',
          'To test whether Scrooge remembers what he said in Stave 1',
        ],
        correct: 1,
        explanation:
          'By echoing Scrooge\'s words in contexts that reveal their cruelty (Tiny Tim\'s potential death, Ignorance and Want), the Ghost forces Scrooge — and the reader — to recognise the human cost of such attitudes.',
      },
      {
        id: 'aqa-acc-m4-q4',
        question: 'What is the significance of the Ghost of Christmas Present ageing during the stave?',
        options: [
          'It shows that ghosts are mortal like humans',
          'It reminds the reader that the present is fleeting — the opportunity to act with generosity exists only now',
          'It symbolises Scrooge\'s own ageing process',
          'It creates a horror effect typical of ghost stories',
        ],
        correct: 1,
        explanation:
          'The Ghost\'s rapid ageing and one-day lifespan emphasise the transience of the present moment. Dickens implies that the time to act with compassion is always now — delay risks permanent consequences.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Stave 4: The Ghost of Christmas Yet to Come
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m5',
    title: 'Stave 4: The Ghost of Christmas Yet to Come',
    duration: '55 min',
    content: `
<h2>Stave 4 — The Ghost of Christmas Yet to Come</h2>

<p>Stave 4 is the novella's darkest movement. Where the previous ghosts offered warmth, conversation, and even moments of joy, the Ghost of Christmas Yet to Come is utterly silent, robed in black, and terrifying. Dickens strips away all comfort and forces Scrooge to confront the ultimate consequence of his unchanged life: a lonely, unmourned death. This is the stave that completes Scrooge's psychological transformation — the fear of this future is what finally breaks through his defences.</p>

<h3>The Ghost's Appearance</h3>

<p>The Ghost of Christmas Yet to Come is described as a "solemn Phantom, draped and hooded" in a "deep black garment." Unlike the previous spirits, it does not speak — it communicates only by pointing with a spectral hand. Dickens writes that it fills Scrooge with "a solemn dread" and that "the very air through which this Spirit moved seemed to scatter gloom and mystery."</p>

<p>The ghost's silence is a masterful structural choice. The first two spirits engaged Scrooge in dialogue, guiding his interpretation of what he saw. The third offers no guidance — Scrooge must interpret the visions himself. This forces him into active moral reasoning rather than passive observation. The ghost also evokes the figure of the <strong>Grim Reaper</strong>, and its silence conveys the implacability of death — it cannot be argued with, bargained with, or charmed.</p>

<div class="key-term"><strong>Key Term: Motif</strong> — A recurring image, symbol, or idea that develops a theme across a text. Death is a motif that runs through Stave 4, appearing in the shrouded ghost, the stolen death-clothes, the bare corpse, and Tiny Tim's empty chair. Dickens uses the death motif to create urgency — change must happen <em>now</em> or it will be too late.</div>

<h3>The Businessmen's Reaction</h3>

<p>The first vision shows a group of businessmen discussing a recent death with casual indifference. One says he will only attend the funeral "if a lunch is provided." Another jokes that the dead man has finally done something useful — "made the cheapest funeral he could." Their callousness mirrors Scrooge's own attitude towards the poor in Stave 1. Dickens holds up a mirror: <em>this is how the world treats those who lived without love or generosity</em>.</p>

<p>Scrooge does not yet realise the dead man is himself. This dramatic irony intensifies the horror — the reader may guess what Scrooge cannot, creating suspense and a sense of dread.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> Dickens uses <strong>dramatic irony</strong> throughout Stave 4 — the audience suspects the dead man is Scrooge before he does. This technique generates suspense and deepens the emotional impact when the truth is finally revealed. Always name the technique and explain its effect on the reader.</div>

<h3>Old Joe's Shop: The Stolen Possessions</h3>

<p>The Ghost takes Scrooge to Old Joe's rag-and-bone shop, where three people — a laundress, a charwoman, and an undertaker's assistant — have come to sell items stolen from the dead man. The charwoman, Mrs Dilber, has taken his bed curtains, blankets, and even the shirt from his corpse. The laundress has stolen his sheets. They laugh and joke as they haggle over their plunder.</p>

<p>This scene is a grotesque inversion of the Cratchit family's generous sharing. Where the Cratchits shared their meagre resources out of love, these characters strip a dead man for profit. The dead man's possessions — bed curtains, blankets, a shirt — are domestic items associated with comfort and care. Their theft symbolises the complete absence of care in the dead man's life and death. Nobody mourns him; nobody watches over his body; his very clothes are taken.</p>

<p>Scrooge is horrified: "The case of this unhappy man might be my own." The conditional "might" shows he is still resisting the truth. Dickens delays the revelation to maximise its psychological impact.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply describing what happens at Old Joe's shop without analysing Dickens's purpose. The scene is designed to show the consequences of a life lived without generosity or human connection — in death, such a person is treated as nothing more than a source of material goods. Link this to Dickens's moral argument about the importance of relationships over wealth.</div>

<h3>The Shrouded Corpse</h3>

<p>The Ghost points Scrooge towards a bed on which a body lies beneath a sheet. Dickens writes: "The room was very dark, too dark to be observed with any accuracy." The darkness is both literal and metaphorical — it represents the moral and spiritual darkness of a life wasted on greed. Scrooge cannot bring himself to pull back the sheet. This reluctance is psychologically astute: on some level, Scrooge already knows whose face he will see.</p>

<p>The corpse is described as "plundered and bereft, unwatched, unwept, uncared for." The triple negative construction — "unwatched, unwept, uncared for" — creates a rhythm of absolute desolation. Each "un-" prefix strips away another human connection. Dickens is showing the ultimate destination of Scrooge's current path: total isolation, even in death.</p>

<h3>Tiny Tim's Death</h3>

<p>In devastating contrast to the uncared-for corpse, Dickens shows the Cratchit household after Tiny Tim's death. The family is grief-stricken but united. Bob Cratchit kisses his dead child's face, promising "my little child, my little child!" The repetition conveys overwhelming parental love. The house is described as "quiet. Very quiet." The short sentences mirror the family's stunned, breathless grief.</p>

<p>The empty chair by the fire and the crutch "without an owner, carefully preserved" are among the novella's most poignant symbols. The chair represents absence — what should be there but is not. The preserved crutch suggests that Tiny Tim's memory will endure in this loving household, in stark contrast to the dead businessman whom nobody remembers with affection.</p>

<div class="key-term"><strong>Key Term: Pathos</strong> — A quality that evokes pity or sadness. Dickens creates intense pathos through Tiny Tim's death, using sensory detail, short sentences, and objects associated with the absent child. Pathos is one of Dickens's primary tools for persuading his readers to care about the plight of the poor.</div>

<p>Dickens juxtaposes two deaths: one mourned deeply by a loving family, the other met with indifference and theft. The message is clear — the value of a life is measured not by wealth but by the love it generated. Tiny Tim, who had nothing, is infinitely richer in death than the miser who had everything.</p>

<h3>The Gravestone</h3>

<p>The final revelation comes in the churchyard. The Ghost points to a neglected grave, and Scrooge reads his own name on the stone: <strong>EBENEZER SCROOGE</strong>. The moment is the novella's climax — everything has been building to this shattering self-recognition. Scrooge falls to his knees and begs: "Are these the shadows of the things that Will be, or are they shadows of the things that May be, only?"</p>

<p>The distinction between "Will" and "May" is crucial. Scrooge is asking whether the future is fixed or changeable — whether redemption is still possible. This question reflects a key tension in the novella between determinism and free will. Dickens's answer — delivered through Scrooge's transformation in Stave 5 — is emphatically optimistic: the future can be changed through moral choice and action.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO1):</strong> Scrooge's question at the gravestone — "Will be" or "May be" — is one of the novella's most quotable moments. Use it in essays about redemption, free will, or Dickens's message. It shows Scrooge taking responsibility for his own future, which is the turning point of the entire narrative.</div>

<p>Scrooge pledges to "honour Christmas in my heart, and try to keep it all the year." The verb "try" is realistic — Dickens does not promise perfection, only effort. The phrase "all the year" extends the novella's message beyond the festive season: compassion is not a once-a-year obligation but a daily practice.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Saying that Scrooge changes because he is "scared of dying." His transformation is more nuanced — he is horrified not by death itself but by dying <em>unloved and unmourned</em>. The fear is not of mortality but of a meaningless existence. This distinction matters for a sophisticated AO1 response.</div>
`,
    quiz: [
      {
        id: 'aqa-acc-m5-q1',
        question: 'Why is the Ghost of Christmas Yet to Come silent throughout Stave 4?',
        options: [
          'Because it is angry with Scrooge',
          'Because silence evokes death\'s implacability and forces Scrooge to interpret the visions himself, shifting him from passive observer to active moral reasoner',
          'Because Victorian ghosts were traditionally depicted as mute',
          'Because the Ghost has no mouth beneath its hood',
        ],
        correct: 1,
        explanation:
          'The silence serves multiple purposes: it evokes the Grim Reaper, conveys the finality of death, and — crucially — forces Scrooge to actively interpret what he sees rather than being guided by the Spirit\'s commentary.',
      },
      {
        id: 'aqa-acc-m5-q2',
        question: 'What is the significance of Tiny Tim\'s empty chair and preserved crutch?',
        options: [
          'They show the Cratchits are too poor to afford new furniture',
          'They symbolise absence and enduring love — Tim\'s memory is cherished, contrasting with the unmourned dead businessman',
          'They are simply realistic details of a Victorian household',
          'They foreshadow that another Cratchit child will become ill',
        ],
        correct: 1,
        explanation:
          'The empty chair and carefully preserved crutch symbolise the absence of a beloved child whose memory endures in a loving family. This contrasts sharply with the dead businessman (Scrooge) whom nobody mourns, reinforcing Dickens\'s message that love, not wealth, gives life meaning.',
      },
      {
        id: 'aqa-acc-m5-q3',
        question: 'What is the importance of Scrooge\'s question: "Are these the shadows of things that Will be, or May be?"',
        options: [
          'It shows Scrooge is confused about how ghosts work',
          'It reveals Scrooge asking whether the future is fixed or changeable — whether redemption is still possible',
          'It is a rhetorical question that Scrooge does not expect an answer to',
          'It shows Scrooge doubting the Ghost\'s authority',
        ],
        correct: 1,
        explanation:
          'The "Will be" vs "May be" distinction is crucial — Scrooge is asking whether he can still change his fate through moral action. This is the turning point where Scrooge takes responsibility for his future.',
      },
      {
        id: 'aqa-acc-m5-q4',
        question: 'What structural technique does Dickens use by having Scrooge not realise the dead man is himself?',
        options: [
          'Unreliable narration',
          'Dramatic irony — the reader suspects the truth before Scrooge does, creating suspense and deepening the emotional impact',
          'Stream of consciousness',
          'Non-linear chronology',
        ],
        correct: 1,
        explanation:
          'Dramatic irony occurs when the audience knows something a character does not. The reader likely guesses the dead man is Scrooge before he does, building suspense and making the gravestone revelation more powerful.',
      },
      {
        id: 'aqa-acc-m5-q5',
        question: 'How does Dickens juxtapose the two deaths in Stave 4?',
        options: [
          'He compares a natural death with a murder',
          'He contrasts the businessman\'s unmourned death (met with indifference and theft) with Tiny Tim\'s deeply mourned death (met with love and grief)',
          'He shows that rich people have better funerals than poor people',
          'He contrasts a peaceful death with a violent one',
        ],
        correct: 1,
        explanation:
          'Dickens places the two deaths side by side: the wealthy miser is robbed and forgotten, while the poor child is mourned with overwhelming love. The juxtaposition argues that life\'s value is measured by love, not wealth.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Stave 5: The Transformation
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m6',
    title: 'Stave 5: The Transformation',
    duration: '50 min',
    content: `
<h2>Stave 5 — The End of It: Scrooge's Transformation</h2>

<p>Stave 5, titled "The End of It," is the novella's joyful resolution. Scrooge wakes on Christmas morning a changed man, and the narrative explodes with energy, humour, and warmth. Dickens mirrors the reader's relief — after the darkness of Stave 4, the light of redemption feels like emerging from a long winter. The stave is short but structurally vital: it proves that transformation is possible and shows <em>what it looks like in practice</em>.</p>

<h3>Scrooge's Awakening</h3>

<p>Scrooge wakes in his own bed, alive, and bursts into an ecstasy of joy: "I don't know what to do! I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy." The triple simile structure — feather, angel, schoolboy — traces an arc from physical lightness to spiritual joy to youthful innocence. The simile "as merry as a schoolboy" is especially significant: it recalls the lonely schoolboy of Stave 2, suggesting that Scrooge has recovered his lost innocence.</p>

<p>His language is transformed. The man who spoke in clipped, dismissive phrases — "Bah! Humbug!" — now speaks in <strong>exclamatory sentences</strong> full of energy and emotion: "I don't know what day of the month it is! I don't know how long I've been among the Spirits! I don't know anything! I'm quite a baby!" The exclamation marks, the repetition of "I don't know," and the self-deprecating humour show a man completely freed from the rigid, controlling persona of Stave 1.</p>

<div class="key-term"><strong>Key Term: Exclamatory Sentence</strong> — A sentence that expresses strong emotion, ending with an exclamation mark. Dickens uses a flood of exclamatory sentences in Stave 5 to convey Scrooge's overwhelming joy and to create a dramatic tonal shift from the darkness of Stave 4.</div>

<h3>The Turkey</h3>

<p>Scrooge's first act of generosity is sending an enormous prize turkey to the Cratchit family — anonymously. The turkey is "twice the size of Tiny Tim," a detail that links Scrooge's generosity directly to the child whose potential death haunted him in Staves 3 and 4. By choosing a turkey rather than the Cratchits' usual goose, Scrooge provides them with a luxury they could never afford, demonstrating that true generosity means giving <em>more</em> than the minimum.</p>

<p>The anonymity of the gift is equally significant. Scrooge does not seek recognition or gratitude — his generosity is genuinely selfless, motivated by compassion rather than a desire for social approval. This contrasts with the performative charity of some Victorians, who gave publicly to enhance their reputation. Dickens implies that the purest form of giving expects nothing in return.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO3):</strong> The anonymous turkey can be linked to Dickens's critique of Victorian charity. Many wealthy Victorians gave to charity publicly for social prestige. By making Scrooge's gift anonymous, Dickens presents an ideal of selfless giving that challenges performative philanthropy.</div>

<h3>Meeting the Charity Collectors</h3>

<p>Scrooge encounters one of the charity collectors he rudely dismissed in Stave 1. He whispers a large donation in the man's ear, and the collector is astonished: "Lord bless me! My dear Mr Scrooge, are you serious?" The scene directly reverses the earlier encounter, providing structural symmetry. Where Stave 1 showed Scrooge refusing to help, Stave 5 shows him giving extravagantly. This mirroring reinforces the completeness of his transformation.</p>

<p>Scrooge's whispered donation is another private act — he does not announce it publicly. The collector's shock highlights how radically Scrooge has changed. Dickens uses this reaction to show the social impact of individual transformation: one person's change of heart can ripple outward, inspiring surprise, gratitude, and hope in others.</p>

<h3>Fred's Party</h3>

<p>Scrooge goes to Fred's Christmas party — the invitation he so coldly rejected in Stave 1. He is nervous, standing at the door for some time before summoning the courage to enter. This small detail humanises him: transformation does not eliminate anxiety or awkwardness, but it gives Scrooge the courage to push through it. Fred welcomes him with open arms, and Scrooge feels "at home in five minutes."</p>

<p>Fred's unconditional welcome fulfils the promise he made in Stave 3 — to offer Scrooge "the same chance every year." Dickens shows that compassion is rewarded: Fred's patience and persistence have paid off. The scene also completes the arc of Scrooge's relationship with Fan — by embracing Fred, Scrooge is finally reconnecting with the sister he loved and lost.</p>

<h3>Bob Cratchit &amp; the Promise of a Better Future</h3>

<p>On Boxing Day, Scrooge plays a prank on Bob Cratchit, pretending to scold him for arriving late before revealing that he intends to raise his salary. The humour of this scene — Scrooge feigning anger before breaking into warmth — shows that the "new" Scrooge has a playful, generous spirit. Dickens writes that Scrooge becomes "as good a friend, as good a master, and as good a man, as the good old city knew."</p>

<p>The repetition of "good" in this description emphasises the totality of Scrooge's moral renovation. He fulfils multiple social roles — friend, employer, citizen — with equal virtue. This is important for AO3: Dickens is arguing that moral transformation is not just a personal matter but has social consequences. A good employer (like Fezziwig) creates a better world for those who depend on him.</p>

<div class="key-term"><strong>Key Term: Redemption</strong> — The act of being saved from sin, error, or evil. In <em>A Christmas Carol</em>, Scrooge achieves secular redemption through moral transformation. Dickens presents redemption as possible for anyone, regardless of how deeply they have fallen — a message of profound optimism.</div>

<h3>Tiny Tim's Survival</h3>

<p>Dickens tells us that Scrooge became "a second father" to Tiny Tim, "who did NOT die." The capitalised "NOT" breaks the narrative voice — it is a shout of triumph, an authorial intrusion expressing Dickens's own joy at the outcome he has created. Tiny Tim's survival is the ultimate proof that the future shown in Stave 4 was not fixed — it was a warning, not a prophecy. Scrooge's changed behaviour has literally saved a child's life.</p>

<p>This outcome carries a powerful social message: if the wealthy use their resources to help the poor, lives can be saved. Dickens extends this from the individual (Scrooge helping Tim) to the collective (Victorian society helping its most vulnerable members). The novella ends as it began — with a direct address that bridges the gap between fiction and reality.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Stave 5 as less important than the other staves because it is short. In fact, it is structurally essential — it proves that Dickens's message of redemption is practical, not just theoretical. Without Stave 5, the novella would be a ghost story about fear; with it, it becomes a story about hope and the possibility of change.</div>

<h3>The Social Message</h3>

<p>The novella's final line — "and it was always said of him, that he knew how to keep Christmas well, if any man alive possessed the knowledge" — extends the definition of "keeping Christmas" beyond one day. To "keep Christmas well" means to live with generosity, compassion, and awareness of one's social duty <em>every day</em>. Dickens addresses the reader directly in the final words: "may that be truly said of us, and all of us!" The shift from "him" to "us" is deliberate — Dickens turns the spotlight from Scrooge to the reader, making the moral demand personal and inescapable.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO1):</strong> The ending is rich material for any essay. The shift from third person ("him") to first person plural ("us") is a deliberate rhetorical move — Dickens breaks the fictional frame to challenge every reader to follow Scrooge's example. Analysing this technique shows awareness of Dickens as a conscious craftsman, not just a storyteller.</div>
`,
    quiz: [
      {
        id: 'aqa-acc-m6-q1',
        question: 'What is the significance of Scrooge comparing himself to "a schoolboy" in Stave 5?',
        options: [
          'He is mocking his own old age',
          'It recalls the lonely schoolboy of Stave 2, suggesting Scrooge has recovered his lost innocence and capacity for joy',
          'It shows that Scrooge wants to return to school',
          'It is a random simile with no deeper meaning',
        ],
        correct: 1,
        explanation:
          'The "schoolboy" simile connects to Stave 2\'s vision of young Scrooge. His transformation involves recovering the innocence and emotional capacity he lost during his descent into greed.',
      },
      {
        id: 'aqa-acc-m6-q2',
        question: 'Why does Dickens capitalise "NOT" in "Tiny Tim, who did NOT die"?',
        options: [
          'It was a printing error in the first edition',
          'It is an authorial intrusion — a shout of triumph that breaks the narrative voice, expressing Dickens\'s joy at the changed outcome',
          'It emphasises that Tiny Tim was never really ill',
          'It follows standard Victorian punctuation conventions',
        ],
        correct: 1,
        explanation:
          'The capitalised "NOT" is a deliberate authorial intrusion — Dickens breaks his own narrative voice to celebrate Tiny Tim\'s survival, proving that the dark future of Stave 4 was a warning, not a fixed fate.',
      },
      {
        id: 'aqa-acc-m6-q3',
        question: 'Why does the novella\'s final line shift from "him" to "us"?',
        options: [
          'It is a grammatical error',
          'Dickens breaks the fictional frame to challenge every reader to follow Scrooge\'s example, making the moral demand personal',
          'It refers to a different character who joins Scrooge at the end',
          'It shows that the narrator is one of the characters in the story',
        ],
        correct: 1,
        explanation:
          'The shift from third person ("him") to first person plural ("us") is a rhetorical device — Dickens directly addresses the reader, turning the spotlight from fiction to reality and making the moral challenge personal.',
      },
      {
        id: 'aqa-acc-m6-q4',
        question: 'How does the turkey sent to the Cratchits link to Tiny Tim?',
        options: [
          'Tiny Tim asked for a turkey in Stave 3',
          'The turkey is described as "twice the size of Tiny Tim," directly linking Scrooge\'s generosity to the child whose death haunted him',
          'The turkey is a Christmas tradition that Tiny Tim introduced',
          'There is no connection between the turkey and Tiny Tim',
        ],
        correct: 1,
        explanation:
          'Dickens describes the turkey as "twice the size of Tiny Tim," creating a direct physical connection between Scrooge\'s first act of generosity and the vulnerable child whose potential death motivated his transformation.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 — Character Studies
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m7',
    title: 'Character Studies',
    duration: '55 min',
    content: `
<h2>Character Studies — Scrooge, Bob Cratchit, Tiny Tim, Fred &amp; The Ghosts</h2>

<p>AQA's extract-based question will always focus on how Dickens <strong>presents</strong> a character, theme, or idea. "Presents" is the key word — it directs you to analyse the writer's methods (AO2) alongside your interpretation (AO1) and contextual understanding (AO3). This module provides detailed character analysis for the novella's most important figures, with a focus on quotation, technique, and purpose.</p>

<h3>Ebenezer Scrooge</h3>

<p>Scrooge is the novella's protagonist and the vehicle for Dickens's entire moral argument. His character arc — from misanthropic miser to generous benefactor — is the structural backbone of the text. For AO2, you must analyse <em>how</em> Dickens constructs this transformation; for AO1, you should offer a personal interpretation of <em>what</em> drives it.</p>

<h4>Scrooge in Stave 1: The Miser</h4>
<p>Dickens introduces Scrooge through accumulated negative imagery: "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner." The six present participles create a sense of relentless, mechanical grasping — Scrooge is reduced to a series of acquisitive actions, barely human. The simile "cold within him" suggests that his emotional frigidity is internal, not imposed from outside — he has chosen to close himself off.</p>

<p><strong>Key quotation:</strong> "The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait." — The verbs "froze," "nipped," "shrivelled," "stiffened" are all associated with death, suggesting that Scrooge is spiritually dead even while physically alive.</p>

<h4>Scrooge's Transformation: Gradual, Not Sudden</h4>
<p>A common misconception is that Scrooge changes overnight. In fact, Dickens structures the transformation as a gradual process with identifiable stages:</p>
<ol>
  <li><strong>Stave 2:</strong> Regret about the carol singer; recognition that Fezziwig was a better employer; pain at losing Belle.</li>
  <li><strong>Stave 3:</strong> "Penitence and grief" at Tiny Tim's potential death; shame when his own words are quoted back at him.</li>
  <li><strong>Stave 4:</strong> Horror at his lonely death; desperate plea at the gravestone.</li>
  <li><strong>Stave 5:</strong> Joy, generosity, and active moral behaviour.</li>
</ol>
<p>This graduated structure makes the transformation psychologically credible. Each ghost addresses a different aspect of Scrooge's psychology: the Past awakens memory and empathy; the Present shows him the current cost of his behaviour; the Future terrifies him into action.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> Tracking Scrooge's transformation across all five staves shows understanding of Dickens's <em>structural</em> methods — a key component of AO2 that many students neglect. Do not just analyse language; analyse how the novella's five-part structure shapes Scrooge's arc.</div>

<h4>Scrooge's Name</h4>
<p>The name "Ebenezer" comes from Hebrew, meaning "stone of help" — a reference to a biblical monument commemorating God's assistance. Dickens may have chosen this name ironically (Scrooge is no help to anyone in Stave 1) or prophetically (he becomes a "stone of help" after his transformation). "Scrooge" itself has become a common English word meaning "miser," showing the character's cultural impact.</p>

<h3>Bob Cratchit</h3>

<p>Bob Cratchit is Scrooge's underpaid, overworked clerk. He earns fifteen shillings a week — barely enough to feed his large family. Yet he is patient, loyal, and unfailingly cheerful. Dickens presents him as the embodiment of the <strong>deserving poor</strong> — hardworking, moral, and devoted to his family. Bob's goodness despite his circumstances is an implicit rebuke to those who blamed the poor for their own poverty.</p>

<p><strong>Key quotation:</strong> Bob toasts Scrooge as "the Founder of the Feast" at Christmas dinner, despite Mrs Cratchit's angry response that Scrooge is "an odious, stingy, hard, unfeeling man." Bob's insistence on civility even towards his oppressor shows extraordinary moral generosity — and subtly shames Scrooge (and the reader) by contrast.</p>

<div class="key-term"><strong>Key Term: The Deserving Poor</strong> — A Victorian concept distinguishing between those who were poor through no fault of their own (the "deserving") and those whose poverty was blamed on laziness or vice (the "undeserving"). Dickens challenges this distinction by showing that poverty is a systemic problem, not a personal failing.</div>

<h3>Tiny Tim</h3>

<p>Tiny Tim operates on two levels: as a realistic character (a disabled child in a loving family) and as a <strong>symbolic device</strong> (representing all innocent children endangered by poverty). His disability — he requires a crutch and is carried on Bob's shoulder — makes him physically dependent on others, which in turn makes society's failure to help the Cratchits especially cruel.</p>

<p>Tiny Tim's catchphrase — "God bless us, every one!" — is the novella's most famous line. The word "every" is key: Tim does not bless only his own family but all of humanity, including (implicitly) Scrooge. His generosity of spirit, despite his suffering, is a moral rebuke to those who have much but give nothing.</p>

<p>For AO3, Tiny Tim reflects the reality of child mortality in Victorian Britain. One in five children died before their fifth birthday. Dickens uses Tiny Tim to personalise this statistic — transforming a number into a face, a voice, a character the reader cares about — to make indifference impossible.</p>

<h3>Fred</h3>

<p>Fred, Scrooge's nephew, represents the <strong>Christmas spirit</strong> and the persistence of unconditional love. He is warm, generous, and refuses to give up on Scrooge despite repeated rejection. His function in the novella is twofold: he provides a living contrast to Scrooge (warm vs cold, generous vs miserly, sociable vs isolated), and he embodies the idea that compassion should be offered without expectation of return.</p>

<p><strong>Key quotation:</strong> "I have always thought of Christmas time as a good time; a kind, forgiving, charitable, pleasant time." Fred's list of adjectives directly opposes the negative adjectives associated with Scrooge. The word "forgiving" is especially important — it foreshadows Fred's willingness to forgive Scrooge in Stave 5.</p>

<p>Fred is also Fan's son, and his warmth echoes his mother's "large heart." Dickens implies that generosity can be inherited — or at least that growing up in a loving environment (Fan's influence) produces compassionate adults, while neglect (Scrooge's childhood) produces misers.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring Fred in essays about character or theme. Fred is more than Scrooge's cheerful nephew — he is a structural counterpoint to Scrooge, a representative of unconditional love, and a link to Fan and the theme of family. Always consider his thematic function.</div>

<h3>The Three Ghosts</h3>

<p>The ghosts are not merely plot devices — each is carefully designed to reflect the nature of the time period it represents:</p>

<h4>The Ghost of Christmas Past</h4>
<p>Simultaneously old and young, bright and flickering. Its paradoxical appearance reflects memory — which is both past and present, clear and elusive. The light it carries symbolises truth and self-knowledge. It is gentle but relentless, forcing Scrooge to confront memories he has suppressed.</p>

<h4>The Ghost of Christmas Present</h4>
<p>A giant robed in green, surrounded by abundance. Its warmth and generosity contrast with Scrooge's coldness. The holly wreath it wears has no thorns — a symbol of Christmas joy without pain. Its ageing during the stave reminds us that the present is always passing and must be seized.</p>

<h4>The Ghost of Christmas Yet to Come</h4>
<p>Silent, black-robed, faceless. It resembles the Grim Reaper and is the most frightening of the three. Its refusal to speak forces Scrooge into independent moral reasoning. It represents not just the future but the <em>consequences</em> of present choices — the most terrifying prospect of all.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> Compare the three ghosts' appearances and communication styles. The progression from warm and conversational (Past) to gentle but challenging (Present) to silent and terrifying (Future) mirrors the escalating pressure on Scrooge's conscience. This structural escalation is a key method worth analysing.</div>

<h3>Jacob Marley</h3>

<p>Marley functions as both a warning and a mirror. He was Scrooge's business partner and equal in greed — "Scrooge was his sole executor, his sole administrator, his sole assign, his sole residuary legatee, his sole friend, and sole mourner." The repetition of "sole" emphasises the absolute isolation of both men. Marley's chain — forged in life, worn in death — is the novella's central symbol for the spiritual consequences of selfishness. His anguished cry, "Mankind was my business!", provides the moral thesis.</p>
`,
    quiz: [
      {
        id: 'aqa-acc-m7-q1',
        question: 'How does Dickens structure Scrooge\'s transformation across the novella?',
        options: [
          'It happens suddenly in Stave 5 with no prior warning',
          'It is gradual — each ghost addresses a different psychological need (memory, empathy, fear), creating a credible arc across all five staves',
          'Scrooge changes in Stave 3 and the remaining staves are unnecessary',
          'The transformation is entirely driven by Marley\'s ghost in Stave 1',
        ],
        correct: 1,
        explanation:
          'Dickens structures the transformation gradually: the Past awakens memory and regret, the Present shows the human cost of Scrooge\'s behaviour, and the Future terrifies him into action. Each stage builds on the last, making the change psychologically convincing.',
      },
      {
        id: 'aqa-acc-m7-q2',
        question: 'Why does Bob Cratchit toast Scrooge as "the Founder of the Feast"?',
        options: [
          'Because Scrooge paid for the Cratchits\' Christmas dinner',
          'Because Bob\'s moral generosity leads him to be civil even to his oppressor — his goodness implicitly shames Scrooge',
          'Because Mrs Cratchit insists on it',
          'Because Bob is being sarcastic',
        ],
        correct: 1,
        explanation:
          'Bob toasts Scrooge despite Scrooge\'s cruelty, showing extraordinary moral generosity. Mrs Cratchit\'s angry refusal highlights how remarkable Bob\'s civility is. The contrast subtly shames Scrooge and the reader.',
      },
      {
        id: 'aqa-acc-m7-q3',
        question: 'What is the function of the three ghosts\' escalating severity?',
        options: [
          'It adds variety to the plot',
          'It mirrors the escalating pressure on Scrooge\'s conscience — from gentle memory to empathic challenge to terrifying consequences',
          'It reflects the fact that ghosts get angrier over time',
          'It shows that each ghost is more powerful than the last',
        ],
        correct: 1,
        explanation:
          'The ghosts\' progression — from warm and conversational to challenging to silent and terrifying — structurally mirrors the escalating pressure needed to break through Scrooge\'s defences. This is a key structural method for AO2.',
      },
      {
        id: 'aqa-acc-m7-q4',
        question: 'How does Tiny Tim function as both character and symbol?',
        options: [
          'He is a character because he appears in the story and a symbol because he is named after a real person',
          'As a character, he is a disabled child in a loving family; as a symbol, he represents all vulnerable children endangered by poverty and society\'s indifference',
          'He is a character in the present scenes and a symbol in the future scenes',
          'He functions only as a character — calling him a symbol is too simplistic',
        ],
        correct: 1,
        explanation:
          'Tiny Tim works on two levels: he is a realistic, lovable child (character) and a representation of all innocent children threatened by Victorian poverty (symbol). Dickens creates him to personalise suffering and make indifference impossible.',
      },
      {
        id: 'aqa-acc-m7-q5',
        question: 'What does the repetition of "sole" in the description of Scrooge and Marley\'s relationship emphasise?',
        options: [
          'That Scrooge was legally responsible for Marley\'s estate',
          'The absolute isolation of both men — they had no one else in their lives, highlighting the loneliness that greed creates',
          'That Scrooge stole Marley\'s possessions after his death',
          'That Marley\'s soul was the only thing Scrooge could not possess',
        ],
        correct: 1,
        explanation:
          'The repetition of "sole" (executor, administrator, friend, mourner) emphasises total isolation — neither man had anyone else. This drives home Dickens\'s point that a life devoted to money produces profound loneliness.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Key Themes
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m8',
    title: 'Key Themes',
    duration: '55 min',
    content: `
<h2>Key Themes — Redemption, Social Responsibility, Christmas Spirit, Poverty, Family &amp; Isolation</h2>

<p>AQA examiners reward responses that treat themes as <strong>interconnected</strong> rather than isolated. A top-band essay about redemption, for example, will also touch on social responsibility, family, and isolation. This module maps the six major themes, provides key quotations for each, and shows you how to weave them together in an exam response.</p>

<h3>1. Redemption</h3>

<p>Redemption is the novella's central arc: Scrooge moves from spiritual damnation (represented by Marley's chains) to salvation (represented by his joyful generosity in Stave 5). Dickens presents redemption as available to everyone — no matter how far they have fallen — provided they are willing to change. This is a profoundly optimistic message, rooted in Christian theology (the possibility of repentance and forgiveness) but presented in secular, humanist terms.</p>

<p><strong>Key quotation:</strong> "I will honour Christmas in my heart, and try to keep it all the year." — The verb "try" is crucial: Dickens does not promise perfection, only sincere effort. Redemption is a process, not an event.</p>

<p><strong>Key quotation:</strong> "He became as good a friend, as good a master, and as good a man, as the good old city knew." — The fourfold repetition of "good" signals the completeness of Scrooge's transformation across every social role.</p>

<div class="key-term"><strong>Key Term: Secular Redemption</strong> — Salvation achieved through moral action rather than religious ritual. Scrooge is not redeemed by prayer or churchgoing but by changing his behaviour towards others. Dickens suggests that goodness is measured by deeds, not beliefs.</div>

<h3>2. Social Responsibility</h3>

<p>Dickens's most urgent theme. He argues that the wealthy have a <strong>moral duty</strong> to help the poor — not through impersonal institutions like workhouses, but through personal generosity and compassion. This theme is embodied in Marley's cry ("Mankind was my business!"), the Ghost of Christmas Present's revelation of Ignorance and Want, and Scrooge's practical generosity in Stave 5.</p>

<p><strong>Key quotation:</strong> "Are there no prisons? Are there no workhouses?" — Scrooge's rhetorical questions in Stave 1 represent the callous attitude Dickens wants to destroy. When the Ghost of Christmas Present echoes these words in Stave 3, their cruelty is fully exposed.</p>

<p>For AO3, connect this theme to the <strong>1834 Poor Law</strong>, Malthusian economics, and the vast wealth gap in Victorian Britain. Dickens was not advocating revolution — he was advocating <strong>individual moral action</strong> by the middle and upper classes. He believed that if enough Scrooges changed, society would follow.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO3):</strong> Do not reduce social responsibility to "Dickens wanted rich people to be nicer." Be specific: link it to the workhouse system, Malthusian theory, the 1834 Poor Law, and Dickens's own experiences of poverty. Specificity is what distinguishes a top-band contextual response from a generic one.</div>

<h3>3. The Christmas Spirit</h3>

<p>Christmas in the novella is more than a holiday — it is a <strong>moral principle</strong>. Dickens defines the Christmas spirit as generosity, forgiveness, warmth, and social unity. Fred articulates this in Stave 1: Christmas is the one time when people "think of people below them as if they really were fellow-passengers to the grave, and not another race of creatures bound on other journeys." This extraordinary line argues that Christmas breaks down social barriers, reminding the wealthy that the poor are fellow human beings.</p>

<p><strong>Key quotation:</strong> "It is a time for being kind, forgiving, charitable, pleasant." — Fred's adjective list defines the Christmas spirit and serves as a checklist against which Scrooge's behaviour is measured and found wanting.</p>

<p>Dickens extends Christmas beyond a single day. Scrooge pledges to keep it "all the year," and the narrator's final blessing — "may that be truly said of us" — universalises the message. The Christmas spirit is not seasonal goodwill but a permanent moral stance.</p>

<h3>4. Poverty</h3>

<p>Poverty is the social reality against which the novella's moral arguments play out. Dickens does not romanticise poverty — the Cratchits' dinner is described in detail that emphasises its inadequacy as well as its warmth. Tiny Tim's illness is a direct consequence of poverty: the family cannot afford proper medical care. Ignorance and Want are "wretched" and "wolfish," showing that extreme deprivation strips children of their humanity.</p>

<p><strong>Key quotation:</strong> "This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy, for on his brow I see that written which is Doom." — The Ghost's warning links poverty to social catastrophe. Dickens argues that an uneducated, starving underclass will eventually threaten the stability of the entire society.</p>

<p>For AO3, note that Dickens was writing during a period of genuine social unrest. Chartism — a working-class political movement — was demanding reform, and many in the establishment feared revolution. Dickens's novella offers an alternative: moral reform from within, driven by individual compassion rather than political upheaval.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about poverty as if it only appears in the Cratchit scenes. Poverty is present throughout the novella — in the charity collectors' plea, in the phantoms' inability to help the homeless, in Ignorance and Want, in the debtors who feel "relief" at Scrooge's death. Map the theme across the whole text.</div>

<h3>5. Family</h3>

<p>Family is presented as the greatest source of human happiness and the most effective defence against the dehumanising effects of poverty. The Cratchit family's love sustains them through hardship. Fred's warmth comes from his mother Fan's influence. Scrooge's transformation involves reconnecting with family — attending Fred's party, becoming a "second father" to Tiny Tim.</p>

<p><strong>Key quotation:</strong> "A great deal of steam! ... Mrs Cratchit, flushed, but smiling proudly" — The Cratchit Christmas dinner scene is saturated with domestic warmth. The steam, the smiles, the gathered family — all convey the emotional richness that money cannot buy.</p>

<p>Conversely, the absence of family is linked to moral decline. Scrooge's childhood was marked by abandonment; his adult life is defined by solitude. Dickens implies that human beings need love and connection to remain morally healthy — without it, they become cold and acquisitive.</p>

<h3>6. Isolation</h3>

<p>Isolation is both Scrooge's defining characteristic and his self-imposed punishment. He is "solitary as an oyster," lives alone, eats alone, works alone. The description "secret, and self-contained, and solitary as an oyster" uses sibilance and tricolon to create a sense of hermetic enclosure — each "s" sound seals Scrooge further inside himself.</p>

<p><strong>Key quotation:</strong> "Darkness is cheap, and Scrooge liked it." — This line connects isolation to miserliness: Scrooge chooses darkness because light costs money. But "darkness" also symbolises moral and spiritual blindness — Scrooge cannot see the suffering around him because he has chosen not to look.</p>

<p>Isolation is ultimately what Scrooge overcomes. His transformation in Stave 5 is marked by reconnection — with Fred, with Bob Cratchit, with Tiny Tim, with the community. Dickens argues that human beings are fundamentally social creatures, and that cutting oneself off from others is a form of spiritual death.</p>

<div class="key-term"><strong>Key Term: Sibilance</strong> — The repetition of "s" sounds to create a particular effect. In "secret, and self-contained, and solitary as an oyster," the sibilance creates a hissing, enclosed quality that mirrors Scrooge's sealed-off, hermetic existence.</div>

<h3>Linking Themes Together</h3>

<p>The strongest exam responses treat themes as a web, not a list. Here are some connections to practise:</p>
<ul>
  <li><strong>Redemption + Social Responsibility:</strong> Scrooge's personal redemption is expressed through social action — he does not just "feel better" but actively helps others.</li>
  <li><strong>Poverty + Family:</strong> The Cratchits show that love can sustain a family through poverty, but Dickens never pretends that love alone is enough — Tiny Tim still needs material help to survive.</li>
  <li><strong>Isolation + Christmas Spirit:</strong> Scrooge's isolation is the opposite of the Christmas spirit. His transformation is specifically marked by joining communal celebrations (Fred's party, Christmas dinner).</li>
  <li><strong>Social Responsibility + Poverty:</strong> Dickens argues that poverty is not inevitable but the result of collective moral failure — if the wealthy fulfilled their social responsibility, poverty could be alleviated.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip (AO1):</strong> AQA rewards "exploratory" responses that make connections between themes. In your essay, do not write about one theme in isolation — show how it connects to at least one other. This creates a "conceptualised" response, which is the hallmark of top-band work.</div>
`,
    quiz: [
      {
        id: 'aqa-acc-m8-q1',
        question: 'What does Dickens mean by Scrooge achieving "secular redemption"?',
        options: [
          'Scrooge is saved by going to church more often',
          'Scrooge is saved through changed moral behaviour (deeds), not through religious ritual — Dickens measures goodness by action',
          'Scrooge rejects religion entirely',
          'Scrooge is saved by the ghosts, who are religious figures',
        ],
        correct: 1,
        explanation:
          'Secular redemption means salvation through moral action rather than religious ritual. Scrooge is redeemed by changing his behaviour towards others — giving generously, reconnecting with family, helping Tiny Tim. Dickens measures goodness by deeds.',
      },
      {
        id: 'aqa-acc-m8-q2',
        question: 'How does Fred define the Christmas spirit?',
        options: [
          'As a time for exchanging expensive gifts',
          'As a time for religious worship only',
          'As "a kind, forgiving, charitable, pleasant time" when people recognise the poor as "fellow-passengers to the grave"',
          'As a time for eating and drinking to excess',
        ],
        correct: 2,
        explanation:
          'Fred defines Christmas as a time of kindness, forgiveness, and charity — and crucially, as a time when social barriers dissolve and the wealthy recognise the poor as fellow human beings. This defines the novella\'s moral compass.',
      },
      {
        id: 'aqa-acc-m8-q3',
        question: 'Why does the Ghost warn Scrooge to beware Ignorance "most of all"?',
        options: [
          'Because ignorant people are more dangerous than hungry people',
          'Because Dickens argues that failing to educate the poor leads to social catastrophe — "Doom" is written on the boy\'s brow',
          'Because Scrooge is particularly ignorant compared to other characters',
          'Because the Ghost is biased against Want',
        ],
        correct: 1,
        explanation:
          'The Ghost warns that Ignorance — the failure to educate the poor — leads to "Doom." Dickens argues that an uneducated underclass threatens the stability of the whole society. This links poverty to social responsibility and collective consequences.',
      },
      {
        id: 'aqa-acc-m8-q4',
        question: 'How does Dickens link isolation to moral decline in the novella?',
        options: [
          'He shows that isolated people commit more crimes',
          'He presents Scrooge\'s self-imposed isolation as both a symptom and cause of his moral failure — cutting himself off from others leads to spiritual death',
          'He argues that only married people can be morally good',
          'He shows that isolation is healthy in moderation',
        ],
        correct: 1,
        explanation:
          'Scrooge\'s isolation is both a symptom of his greed (he pushes people away) and a cause of his moral decline (without human connection, he loses empathy). His transformation is marked by reconnection with others.',
      },
      {
        id: 'aqa-acc-m8-q5',
        question: 'Which thematic connection would strengthen an essay about redemption?',
        options: [
          'Linking redemption to the supernatural — Scrooge is redeemed by magic',
          'Linking redemption to social responsibility — Scrooge\'s personal transformation is expressed through practical action to help others',
          'Linking redemption to weather — the cold represents sin',
          'Linking redemption to food — Scrooge starts eating better',
        ],
        correct: 1,
        explanation:
          'Linking redemption to social responsibility shows that Scrooge\'s transformation is not just internal but expressed through concrete action — sending the turkey, donating to charity, raising Bob\'s salary. This creates the interconnected, conceptualised response that AQA rewards.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 — Writer's Methods
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m9',
    title: "Writer's Methods",
    duration: '55 min',
    content: `
<h2>Writer's Methods — Language, Form &amp; Structure</h2>

<p>AO2 asks you to analyse <strong>the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate</strong>. This module equips you with a toolkit of Dickens's key methods in <em>A Christmas Carol</em>, with examples and analysis you can deploy in any exam question.</p>

<h3>Form: The Novella Structure (Five Staves)</h3>

<p>Dickens structures <em>A Christmas Carol</em> as five "staves" — the verses of a song — rather than chapters. This musical metaphor is central to the text's design. Like a carol, the novella follows a pattern: it begins with a solemn introduction (Stave 1), moves through variations of mood and key (Staves 2–4), and resolves in a joyful chorus (Stave 5). The five-part structure creates a sense of inevitability and musical satisfaction — the reader instinctively feels that the story is moving towards harmonic resolution.</p>

<p>The compact novella form — approximately 30,000 words — means there is no room for subplot or digression. Every scene, every image, every line of dialogue serves the central narrative of transformation. This economy of storytelling makes the text ideal for exam analysis: you can trace themes, motifs, and character development across the entire text in a single essay.</p>

<div class="key-term"><strong>Key Term: Form</strong> — The type or genre of a text and the conventions it follows. <em>A Christmas Carol</em> blends multiple forms: the novella (compact narrative), the ghost story (supernatural framework), the allegory (moral message), and the carol (musical structure with a joyful resolution). For AO2, discussing form shows sophisticated understanding of Dickens's craft.</div>

<h3>The Supernatural Framework</h3>

<p>The ghost story framework is not merely decorative — it is structurally essential to Dickens's moral project. The supernatural allows Dickens to do three things that realistic fiction cannot:</p>
<ol>
  <li><strong>Literalise metaphors:</strong> Marley's chain makes the abstract concept of spiritual punishment concrete and visible. Ignorance and Want make social ills into physical presences.</li>
  <li><strong>Compress time:</strong> Three ghosts show past, present, and future in a single night, creating dramatic urgency impossible in a conventional narrative.</li>
  <li><strong>Bypass Scrooge's defences:</strong> A human character could not force Scrooge to confront his past or witness others' suffering. Only supernatural power can penetrate his walls.</li>
</ol>

<p>The Victorian audience would also have enjoyed the ghost story as entertainment — Dickens chose a popular genre to ensure the widest possible readership for his social message. This is itself a strategic choice: the moral lesson is delivered inside a compelling narrative wrapper.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> Many students analyse the ghosts only as characters. For AO2, also discuss them as <em>structural devices</em> — mechanisms that allow Dickens to compress time, literalise metaphors, and bypass Scrooge's psychological defences. This shows understanding of form and structure, not just character.</div>

<h3>Contrast &amp; Juxtaposition</h3>

<p>Contrast is Dickens's most pervasive structural method. The entire novella is built on juxtapositions:</p>
<ul>
  <li><strong>Scrooge vs Fred:</strong> Cold vs warm, isolated vs sociable, miserly vs generous.</li>
  <li><strong>Scrooge's counting house vs Fezziwig's warehouse:</strong> Oppressive vs joyful workplaces.</li>
  <li><strong>The Cratchit dinner vs Scrooge's solitary meal:</strong> Communal warmth vs lonely affluence.</li>
  <li><strong>The unmourned corpse vs Tiny Tim's mourned death:</strong> Isolation in death vs love in death.</li>
  <li><strong>Stave 1 Scrooge vs Stave 5 Scrooge:</strong> "Bah! Humbug!" vs "I am as merry as a schoolboy!"</li>
</ul>

<p>Juxtaposition forces the reader to compare and evaluate — Dickens does not tell us that generosity is better than greed; he <em>shows</em> us the consequences of each, side by side, and lets the comparison speak for itself. This makes the moral argument more persuasive than direct instruction.</p>

<h3>Pathetic Fallacy</h3>

<p>Dickens uses weather and environment to mirror emotional states. In Stave 1, the fog is "cold, bleak, biting" — reflecting Scrooge's emotional frigidity. In Stave 5, Christmas morning is bright and clear — reflecting Scrooge's renewed joy. The warmth of the Cratchit home contrasts with the darkness of Scrooge's chambers. The Ghost of Christmas Yet to Come moves through shadow and gloom.</p>

<p><strong>Key quotation:</strong> "The cold became intense... Fog came pouring in at every chink and keyhole." — The fog is invasive, penetrating even sealed spaces, just as Scrooge's coldness affects everyone around him.</p>

<div class="key-term"><strong>Key Term: Pathetic Fallacy</strong> — The attribution of human emotions to weather, landscape, or objects. Dickens uses pathetic fallacy to externalise internal states — Scrooge's emotional coldness becomes literal cold; his transformation is reflected in bright, warm weather.</div>

<h3>Exclamatory Sentences &amp; Tonal Shift</h3>

<p>One of Dickens's most effective techniques is the dramatic tonal shift between Stave 4 (dark, silent, terrifying) and Stave 5 (bright, noisy, joyful). This shift is achieved largely through syntax — specifically, the flood of <strong>exclamatory sentences</strong> that marks Scrooge's awakening:</p>

<p>"I don't know what to do! I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy. I am as giddy as a drunken man!"</p>

<p>The exclamation marks, the anaphoric "I am as," and the rapid succession of similes create a sense of breathless, almost childlike excitement. The sentence structure mirrors the emotional content — short, punchy clauses convey spontaneous joy, replacing the longer, more measured prose of the earlier staves.</p>

<h3>Allegory</h3>

<p>The entire novella can be read as an <strong>allegory</strong> for Victorian society. Scrooge represents the wealthy industrialist class; the Cratchits represent the working poor; Ignorance and Want represent the social consequences of neglect; the ghosts represent the forces (memory, empathy, fear) that can drive moral reform. Dickens's allegorical intent is made explicit by Ignorance and Want — named, capitalised abstractions that signal the text's didactic purpose.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Using technical terms without explaining their effect. Identifying "pathetic fallacy" or "juxtaposition" is not enough — you must explain <em>how</em> the technique creates meaning. For example: "Dickens uses pathetic fallacy to externalise Scrooge's internal state, making his emotional coldness visible and tangible for the reader."</div>

<h3>The Narrative Voice</h3>

<p>Dickens's narrator is warm, conspiratorial, and morally engaged. The narrator frequently addresses the reader directly — "Oh! But he was a tight-fisted hand at the grindstone, Scrooge!" — creating an intimate, fireside storytelling quality. This authorial intrusion allows Dickens to guide the reader's moral response, ensuring that his critique of Victorian society is unmistakable.</p>

<p>The narrative voice shifts register throughout the text: comic in Stave 1 (the door-knocker transforming into Marley's face), lyrical in Stave 2 (the Fezziwig party), sombre in Stave 4 (the shrouded corpse), and exuberant in Stave 5 (Scrooge's awakening). These shifts in register mirror the emotional journey of the protagonist and the reader.</p>

<h3>Listing &amp; Accumulation</h3>

<p>Dickens frequently uses lists and accumulated detail to build effect. Scrooge's introduction piles up negative adjectives; the Ghost of Christmas Present sits among an overflowing feast; Marley's chain is made of "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses." The listing technique creates a sense of excess — whether excess of greed (Scrooge's adjectives), generosity (the feast), or spiritual burden (the chain). It is a versatile device that appears across the whole novella.</p>

<div class="examiner-tip"><strong>Examiner Tip (AO2):</strong> When analysing a passage, try to identify at least one <strong>language</strong> technique (e.g. simile, metaphor, sibilance), one <strong>structural</strong> technique (e.g. contrast, the five-stave form, dramatic irony), and one <strong>form</strong> point (e.g. allegory, ghost story conventions, the novella form). This ensures balanced AO2 coverage.</div>
`,
    quiz: [
      {
        id: 'aqa-acc-m9-q1',
        question: 'Why does Dickens call his chapters "staves" rather than "chapters"?',
        options: [
          'Because the book was originally a play',
          'Because a stave is a verse of a song, linking the structure to the title "A Christmas Carol" and reinforcing themes of harmony and communal celebration',
          'Because Victorian publishers preferred musical terminology',
          'Because each chapter was published in a different newspaper',
        ],
        correct: 1,
        explanation:
          'A stave is a verse of a song. The musical terminology connects the structure to the title and reinforces the idea of a carol — a song of communal joy. The novella moves towards harmonic resolution, like a piece of music.',
      },
      {
        id: 'aqa-acc-m9-q2',
        question: 'How does the supernatural framework serve Dickens\'s moral purpose?',
        options: [
          'It makes the story scarier and more entertaining',
          'It allows Dickens to literalise metaphors (Marley\'s chain), compress time (past/present/future in one night), and bypass Scrooge\'s psychological defences',
          'It reflects Dickens\'s personal belief in ghosts',
          'It was required by Victorian publishing conventions',
        ],
        correct: 1,
        explanation:
          'The supernatural framework is structurally essential: it makes abstract concepts visible (the chain), compresses an entire life into one night, and uses supernatural force to penetrate defences that no human character could breach.',
      },
      {
        id: 'aqa-acc-m9-q3',
        question: 'What is the effect of the exclamatory sentences in Stave 5?',
        options: [
          'They show that Scrooge is confused',
          'They convey breathless, spontaneous joy and create a dramatic tonal shift from the darkness of Stave 4',
          'They indicate that Scrooge is shouting at his servants',
          'They are a sign of poor grammar',
        ],
        correct: 1,
        explanation:
          'The flood of exclamatory sentences ("I am as light as a feather! I am as happy as an angel!") conveys Scrooge\'s overwhelming joy and creates a dramatic shift from Stave 4\'s darkness. The short, punchy syntax mirrors spontaneous, childlike excitement.',
      },
      {
        id: 'aqa-acc-m9-q4',
        question: 'Which of the following correctly analyses a technique rather than just identifying it?',
        options: [
          '"Dickens uses pathetic fallacy in Stave 1."',
          '"Dickens uses pathetic fallacy in Stave 1 to externalise Scrooge\'s emotional coldness, making the fog and freezing weather a physical manifestation of his inner frigidity."',
          '"The weather in Stave 1 is cold, which is pathetic fallacy."',
          '"Pathetic fallacy is when nature reflects emotions. Dickens uses it."',
        ],
        correct: 1,
        explanation:
          'Option B not only identifies the technique but explains its effect — showing how pathetic fallacy makes Scrooge\'s internal state visible and tangible. AO2 requires analysis of effect, not just identification of technique.',
      },
      {
        id: 'aqa-acc-m9-q5',
        question: 'How does Dickens use the narrative voice to influence the reader?',
        options: [
          'He uses a distant, objective voice to let readers draw their own conclusions',
          'He uses a warm, conspiratorial narrator who addresses the reader directly (authorial intrusion), guiding moral responses and creating an intimate storytelling quality',
          'He uses multiple narrators to show different perspectives',
          'He uses Scrooge as the narrator throughout',
        ],
        correct: 1,
        explanation:
          'Dickens\'s narrator is warm, direct, and morally engaged — frequently addressing the reader to guide their interpretation. This authorial intrusion creates an intimate, fireside quality and ensures the social message is unmistakable.',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Exam Technique: AQA Extract-Based Essay
  // ──────────────────────────────────────────────
  {
    id: 'aqa-acc-m10',
    title: 'Exam Technique: AQA Extract-Based Essay',
    duration: '55 min',
    content: `
<h2>Exam Technique — AQA Extract-Based Essay Practice</h2>

<p>The AQA GCSE English Literature exam requires a specific approach. Unlike Edexcel, which splits its questions across two papers with different formats, AQA places <em>A Christmas Carol</em> in <strong>Paper 1, Section B: The 19th-Century Novel</strong>. The question is worth <strong>30 marks</strong> plus <strong>4 marks for SPaG (AO4)</strong>, and you should spend approximately <strong>50 minutes</strong> on it. Understanding the question format, mark scheme, and examiner expectations is essential for maximising your grade.</p>

<h3>The AQA Question Format</h3>

<p>Every AQA question follows the same pattern:</p>
<ol>
  <li>An <strong>extract</strong> from the novella is printed on the exam paper (typically 15–25 lines).</li>
  <li>The question reads: <em>"Starting with this extract, how does Dickens present [character/theme/idea]?"</em></li>
  <li>A bullet-pointed instruction follows: <em>"Write about: how Dickens presents [X] in this extract; how Dickens presents [X] in the novella as a whole."</em></li>
</ol>

<p>The word <strong>"present"</strong> is crucial. It directs you to write about <em>how</em> Dickens constructs meaning (AO2), not just <em>what</em> happens. You must analyse language, form, and structure — not simply retell the story.</p>

<div class="key-term"><strong>Key Term: "How does Dickens present..."</strong> — The standard AQA question stem. "Present" means "construct" or "create for the reader." It directs you to analyse the writer's methods (language, form, structure) and their effects, not just describe events or characters.</div>

<h3>Planning Your Response (5 Minutes)</h3>

<p>Before writing, spend five minutes planning. An effective plan ensures a coherent, structured essay and prevents you from running out of ideas mid-paragraph. Use this method:</p>

<ol>
  <li><strong>Read the extract twice.</strong> First for understanding, second to annotate key words, techniques, and contextual links.</li>
  <li><strong>Identify 2–3 points from the extract.</strong> For each, note a quotation and a technique.</li>
  <li><strong>Identify 2–3 points from the wider novella.</strong> Choose moments from different staves to show knowledge of the whole text.</li>
  <li><strong>Think about context (AO3).</strong> What Victorian social issues, beliefs, or conditions are relevant? How do they connect to Dickens's purpose?</li>
  <li><strong>Draft a thesis.</strong> Write one sentence that captures your overall argument — e.g., "Dickens presents Scrooge's isolation as both a consequence of his greed and a self-imposed prison from which only empathy can free him."</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A clear thesis at the start of your essay signals a "conceptualised response" — the hallmark of top-band AO1. Examiners are trained to look for an overarching argument, not just a series of disconnected points.</div>

<h3>Essay Structure: The AQA-Optimised Approach</h3>

<p>Use this structure for a 50-minute response:</p>

<h4>Opening (3–4 sentences)</h4>
<p>State your thesis. Briefly address the question and indicate the direction of your argument. Avoid generic introductions ("In this essay I will discuss..."). Instead, begin with a confident analytical statement.</p>
<p><strong>Example:</strong> "Throughout <em>A Christmas Carol</em>, Dickens presents poverty not as a personal failing but as a systemic injustice perpetuated by those, like Scrooge, who possess the power to alleviate it. In this extract, Dickens uses [technique] to [effect], establishing [argument point] that he develops across the wider novella."</p>

<h4>Extract Paragraphs (2–3 paragraphs)</h4>
<p>Analyse the extract closely, using the <strong>WHAT–HOW–WHY</strong> framework:</p>
<ul>
  <li><strong>WHAT:</strong> What does Dickens present? (AO1 — your interpretation, supported by a short embedded quotation)</li>
  <li><strong>HOW:</strong> How does he present it? (AO2 — identify and analyse a specific technique: language choice, structural device, form)</li>
  <li><strong>WHY:</strong> Why does he present it this way? (AO3 — connect to context, purpose, and reader response)</li>
</ul>

<div class="key-term"><strong>Key Term: WHAT–HOW–WHY</strong> — A framework for structuring analytical paragraphs. WHAT = your point/interpretation (AO1). HOW = the writer's technique and its effect (AO2). WHY = the contextual purpose and reader response (AO3). This ensures every paragraph addresses all three main AOs.</div>

<h4>Wider Novella Paragraphs (2–3 paragraphs)</h4>
<p>Move beyond the extract to discuss the theme/character across the whole text. Choose moments from <strong>different staves</strong> to demonstrate breadth of knowledge. Maintain the WHAT–HOW–WHY framework. Always link back to the question.</p>

<h4>Conclusion (2–3 sentences)</h4>
<p>Briefly summarise your argument and offer a final evaluative comment. This is your last chance to impress — end with a strong, confident statement about Dickens's purpose or effect.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on the extract and running out of time for the wider novella. AQA's mark scheme requires you to write about <em>both</em>. Aim for roughly 50% extract, 50% wider text. If you only write about the extract, you cannot access the top mark bands.</div>

<h3>Embedding Quotations</h3>

<p>AQA rewards embedded quotations — short phrases woven into your own sentences — rather than long block quotes. Compare:</p>
<p><strong>Weak:</strong> Dickens writes: "Old Marley was as dead as a door-nail." This shows that Marley is dead.</p>
<p><strong>Strong:</strong> Dickens's insistence that Marley was "as dead as a door-nail" establishes narrative certainty through a colloquial simile, grounding the supernatural premise in everyday language that the reader instinctively trusts.</p>

<p>The strong version embeds the quotation within analysis, identifies the technique (colloquial simile), and explains its effect. This is what AO1 and AO2 look like working together.</p>

<h3>Addressing AO3: Context Without "Bolting On"</h3>

<p>The most common AO3 error is writing a separate "context paragraph" that does not connect to the text. Instead, embed context into your analytical points:</p>
<p><strong>Weak:</strong> "In Victorian times, there were workhouses. The Poor Law of 1834 made conditions harsh."</p>
<p><strong>Strong:</strong> "Scrooge's dismissive question — 'Are there no workhouses?' — would have resonated with Victorian readers familiar with the deliberate cruelty of the 1834 Poor Law, which enforced the principle of 'less eligibility' to deter the poor from seeking help. Dickens places these real institutional failures in Scrooge's mouth to expose the moral bankruptcy of a system that punished poverty rather than relieving it."</p>

<div class="examiner-tip"><strong>Examiner Tip (AO3):</strong> The best AO3 responses connect context to <em>Dickens's purpose</em>. Do not just state a historical fact — explain how Dickens uses it to critique, challenge, or persuade. The formula is: "Dickens [verb — uses/presents/critiques/exposes] [textual detail] to [purpose/effect], reflecting [contextual knowledge]."</div>

<h3>AQA Mark Bands: What Examiners Look For</h3>

<p>Understanding the mark bands helps you target the top:</p>
<ul>
  <li><strong>Band 6 (26–30 marks):</strong> Critical, exploratory, conceptualised response. Judicious use of precise references. Sophisticated analysis of methods. Context integrated convincingly.</li>
  <li><strong>Band 5 (21–25 marks):</strong> Thoughtful, developed response. Apt references. Examination of methods with subject terminology. Context used to illuminate understanding.</li>
  <li><strong>Band 4 (16–20 marks):</strong> Clear, explained response. Effective references. Clear understanding of methods. Context relevant to the question.</li>
  <li><strong>Band 3 (11–15 marks):</strong> Some explained points. Some references. Identifies some methods. Some awareness of context.</li>
</ul>

<p>The jump from Band 4 to Band 5/6 typically depends on three things: (1) a clear overarching argument (conceptualised response), (2) analysis of <em>how</em> techniques create effects (not just identification), and (3) embedded, purposeful context.</p>

<h3>Common AQA Question Topics</h3>

<p>While you cannot predict the exact question, these topics appear frequently:</p>
<ul>
  <li>How does Dickens present Scrooge's transformation/change?</li>
  <li>How does Dickens present the theme of social responsibility?</li>
  <li>How does Dickens present the importance of family?</li>
  <li>How does Dickens present poverty and its effects?</li>
  <li>How does Dickens use the supernatural in the novella?</li>
  <li>How does Dickens present the character of [Scrooge/Bob Cratchit/Fred]?</li>
  <li>How does Dickens present the Christmas spirit?</li>
  <li>How does Dickens present the theme of redemption?</li>
</ul>

<h3>Timed Practice: Sample Question</h3>

<p>Use this question for timed practice (50 minutes):</p>
<p><em>Read the following extract from Stave 1, where the charity collectors visit Scrooge.</em></p>
<p><em>"Starting with this extract, how does Dickens present ideas about social responsibility?"</em></p>
<p><em>Write about:</em></p>
<ul>
  <li><em>how Dickens presents ideas about social responsibility in this extract</em></li>
  <li><em>how Dickens presents ideas about social responsibility in the novella as a whole.</em></li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing everything you know about the novella regardless of the question. Every sentence must be relevant to the specific question asked. If asked about social responsibility, do not write extensively about the supernatural unless you are connecting it to the theme of responsibility (e.g. the supernatural framework allows Dickens to literalise the consequences of social irresponsibility through Marley's chain).</div>

<h3>SPaG (AO4): The Free 4 Marks</h3>

<p>AO4 awards up to 4 marks for spelling, punctuation, grammar, and vocabulary. These marks are easy to secure with care:</p>
<ul>
  <li>Spell character names correctly: <strong>Scrooge</strong>, <strong>Cratchit</strong>, <strong>Marley</strong>, <strong>Fezziwig</strong>, <strong>Ebenezer</strong>.</li>
  <li>Use semi-colons and colons to vary sentence structure.</li>
  <li>Employ subject terminology accurately: <em>pathetic fallacy</em>, <em>allegory</em>, <em>juxtaposition</em>, <em>motif</em>.</li>
  <li>Leave 2 minutes at the end to proofread your response.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip (AO4):</strong> The SPaG marks reward ambitious vocabulary and varied sentence structure as well as accuracy. Use literary terminology, vary your sentence lengths, and demonstrate control over complex sentences. Do not play it safe with simple prose — AO4 rewards sophistication.</div>
`,
    quiz: [
      {
        id: 'aqa-acc-m10-q1',
        question: 'What does the word "present" mean in the AQA question "How does Dickens present..."?',
        options: [
          'What gifts does Dickens give to his characters',
          'How does Dickens construct or create meaning for the reader through his methods (language, form, structure)',
          'What is happening in the present tense of the novella',
          'How does Dickens introduce characters at the start',
        ],
        correct: 1,
        explanation:
          '"Present" means "construct" or "create for the reader" — it directs you to analyse Dickens\'s methods (language, form, structure) and their effects, not just describe what happens.',
      },
      {
        id: 'aqa-acc-m10-q2',
        question: 'What is the WHAT-HOW-WHY paragraph framework?',
        options: [
          'WHAT happened in the plot, HOW it ends, WHY the reader should care',
          'WHAT Dickens presents (AO1 interpretation), HOW he presents it (AO2 technique/effect), WHY he presents it that way (AO3 context/purpose)',
          'WHAT the question asks, HOW long your answer should be, WHY marks are awarded',
          'WHAT quotation to use, HOW to spell it, WHY it is important',
        ],
        correct: 1,
        explanation:
          'WHAT = your interpretation (AO1). HOW = the writer\'s technique and its effect (AO2). WHY = the contextual purpose and reader response (AO3). This framework ensures every paragraph addresses the three main assessment objectives.',
      },
      {
        id: 'aqa-acc-m10-q3',
        question: 'What distinguishes a Band 6 response from a Band 4 response?',
        options: [
          'Band 6 is longer than Band 4',
          'Band 6 offers a conceptualised argument with sophisticated analysis of methods and convincingly integrated context, while Band 4 gives clear but more straightforward explanation',
          'Band 6 uses more quotations',
          'Band 6 writes about all five staves while Band 4 writes about fewer',
        ],
        correct: 1,
        explanation:
          'The jump to top bands requires three things: a conceptualised overarching argument (not just a list of points), sophisticated analysis of how techniques create effects (not just identification), and embedded contextual understanding (not bolted-on facts).',
      },
      {
        id: 'aqa-acc-m10-q4',
        question: 'What is "bolted-on" context, and why should you avoid it?',
        options: [
          'Context added at the end of an essay — it is fine for AO3',
          'A detached historical fact with no connection to the text\'s language, themes, or effects — it scores poorly for AO3',
          'Context taken from a different text — it is considered plagiarism',
          'Context about Dickens\'s biography — it is irrelevant to the exam',
        ],
        correct: 1,
        explanation:
          'Bolted-on context means dropping in a historical fact ("In Victorian times there were workhouses") without connecting it to the text\'s language, themes, or Dickens\'s purpose. To score well for AO3, embed context into analysis.',
      },
      {
        id: 'aqa-acc-m10-q5',
        question: 'How should you divide your time between the extract and the wider novella?',
        options: [
          '80% extract, 20% wider novella',
          'Approximately 50% extract, 50% wider novella — both are required to access the top mark bands',
          '100% extract — the wider novella is optional',
          '20% extract, 80% wider novella',
        ],
        correct: 1,
        explanation:
          'AQA requires you to write about both the extract and the novella as a whole. Aim for roughly equal coverage. If you only write about the extract, you cannot access the top mark bands.',
      },
    ],
  },
];

// ─── Assessment Questions ────────────────────────────────────────────────────

const assessmentQuestions: CourseQuiz[] = [
  {
    id: 'aqa-acc-aq1',
    question: 'What year was A Christmas Carol published?',
    options: ['1837', '1840', '1843', '1848'],
    correct: 2,
    explanation:
      'A Christmas Carol was published in December 1843. Dickens wrote it in just six weeks, driven by outrage at the treatment of the poor.',
  },
  {
    id: 'aqa-acc-aq2',
    question: 'Which parliamentary report partly inspired Dickens to write A Christmas Carol?',
    options: [
      'The Factory Act of 1833',
      'The Second Report of the Children\'s Employment Commission',
      'The Corn Laws Report of 1842',
      'The Public Health Act Report',
    ],
    correct: 1,
    explanation:
      'The Second Report of the Children\'s Employment Commission detailed the abuse of children in factories and mines. Dickens initially planned a pamphlet but chose a Christmas story to reach a wider audience.',
  },
  {
    id: 'aqa-acc-aq3',
    question: 'What does Scrooge\'s line "decrease the surplus population" echo?',
    options: [
      'Darwinian natural selection',
      'Marxist class theory',
      'Malthusian economics — the idea that poverty is a natural check on overpopulation',
      'Utilitarian philosophy of Jeremy Bentham',
    ],
    correct: 2,
    explanation:
      'Thomas Malthus argued that population growth outstrips food supply and poverty is a natural check. Scrooge\'s language echoes this ideology, which Dickens despised and sought to expose as cruel.',
  },
  {
    id: 'aqa-acc-aq4',
    question: 'What literary technique does Dickens employ when the cold weather mirrors Scrooge\'s personality?',
    options: ['Dramatic irony', 'Pathetic fallacy', 'Onomatopoeia', 'Hyperbole'],
    correct: 1,
    explanation:
      'Pathetic fallacy is the attribution of human emotions or qualities to the natural world. The cold, fog, and darkness in Stave 1 externalise Scrooge\'s emotional frigidity.',
  },
  {
    id: 'aqa-acc-aq5',
    question: 'What is the deeper significance of Marley\'s chain?',
    options: [
      'It represents his criminal record',
      'It symbolises the spiritual burden of a life spent prioritising money over compassion — each link a missed opportunity for kindness',
      'It represents the debts Scrooge owes Marley',
      'It symbolises the chains of the workhouse system',
    ],
    correct: 1,
    explanation:
      'Marley\'s chain — made of cash-boxes, keys, padlocks, and ledgers — is an allegory for the spiritual consequences of greed. Dickens literalises the metaphor of being "weighed down" by selfishness.',
  },
  {
    id: 'aqa-acc-aq6',
    question: 'Why is the simile "solitary as an oyster" more complex than it first appears?',
    options: [
      'Because oysters are actually social creatures',
      'Because it conveys isolation on the surface but an oyster contains a pearl — hinting at hidden goodness within Scrooge',
      'Because Dickens was known to dislike seafood',
      'Because oysters were expensive in Victorian times, suggesting Scrooge\'s wealth',
    ],
    correct: 1,
    explanation:
      'The simile works on two levels: the surface meaning conveys isolation, but the pearl metaphor subtly foreshadows Scrooge\'s latent capacity for goodness. This layered analysis demonstrates sophisticated AO2 skills.',
  },
  {
    id: 'aqa-acc-aq7',
    question: 'What role does Fan play in explaining Scrooge\'s treatment of Fred?',
    options: [
      'Fan told Scrooge to avoid Fred',
      'Fan\'s early death (giving birth to Fred) means Fred is a living reminder of the sister Scrooge lost — his rejection of Fred is a defence against grief',
      'Fan and Fred never met, so there is no connection',
      'Fan asked Scrooge to raise Fred, which he refused to do',
    ],
    correct: 1,
    explanation:
      'Fan died giving birth to Fred. Dickens implies that Scrooge\'s cold treatment of his nephew is not mere grumpiness but a defence mechanism — engaging with Fred means confronting the grief of losing his beloved sister.',
  },
  {
    id: 'aqa-acc-aq8',
    question: 'What is the significance of Fezziwig spending only "a few pounds" on his party?',
    options: [
      'It shows Fezziwig is almost as miserly as Scrooge',
      'It demonstrates that generosity is measured by spirit, not expense — a small monetary outlay creates immense happiness',
      'It suggests the party was poorly planned',
      'It highlights Victorian inflation',
    ],
    correct: 1,
    explanation:
      'Dickens emphasises the modest cost to show that generosity is about attitude, not amount. Fezziwig uses his position as employer to spread joy — a direct contrast to Scrooge, who uses his position to oppress.',
  },
  {
    id: 'aqa-acc-aq9',
    question: 'What do Ignorance and Want represent as allegorical figures?',
    options: [
      'Scrooge\'s two worst fears',
      'Society\'s failure to educate and provide for its poorest members — social ills that will doom civilisation if unaddressed',
      'The two children Scrooge never had',
      'The orphans from Dickens\'s personal life',
    ],
    correct: 1,
    explanation:
      'Ignorance and Want are named allegorical figures representing the collective failure to educate and feed the poor. The Ghost warns that Ignorance especially leads to "Doom" — Dickens argues neglect threatens all of society.',
  },
  {
    id: 'aqa-acc-aq10',
    question: 'Why is the Ghost of Christmas Yet to Come silent?',
    options: [
      'Because it is not a real ghost but a hallucination',
      'Because silence evokes death\'s implacability and forces Scrooge into active moral reasoning rather than passive observation',
      'Because Dickens ran out of dialogue ideas',
      'Because Victorian tradition held that future ghosts could not speak',
    ],
    correct: 1,
    explanation:
      'The Ghost\'s silence serves multiple purposes: it evokes the Grim Reaper, conveys the finality of death, and forces Scrooge to interpret the visions himself — shifting from passive observation to active moral engagement.',
  },
  {
    id: 'aqa-acc-aq11',
    question: 'What does the triple negative "unwatched, unwept, uncared for" convey about Scrooge\'s death?',
    options: [
      'That Scrooge died peacefully',
      'That his death was unexpected',
      'Absolute desolation — each "un-" prefix strips away another human connection, showing total isolation in death',
      'That the funeral was poorly organised',
    ],
    correct: 2,
    explanation:
      'The triple negative construction creates a rhythm of desolation. Each "un-" removes another form of human care — watching, weeping, caring — showing that a life of greed ends in absolute isolation.',
  },
  {
    id: 'aqa-acc-aq12',
    question: 'What is the significance of the distinction between "Will be" and "May be" at the gravestone?',
    options: [
      'It shows Scrooge is confused about grammar',
      'Scrooge asks whether the future is fixed or changeable — whether redemption is still possible — marking the turning point of the entire narrative',
      'It is a philosophical question with no practical significance',
      'It shows Scrooge doubting the Ghost\'s powers',
    ],
    correct: 1,
    explanation:
      'The "Will be" vs "May be" question is the novella\'s climactic turning point. Scrooge asks whether he can still change his fate — and Dickens\'s answer, delivered through Stave 5, is emphatically yes.',
  },
  {
    id: 'aqa-acc-aq13',
    question: 'Why does Dickens capitalise "NOT" in "Tiny Tim, who did NOT die"?',
    options: [
      'It was a Victorian typographical convention',
      'It is an authorial intrusion — a shout of triumph that proves the dark future was a warning, not a prophecy',
      'It emphasises that Tim was never really ill',
      'It was a printing error',
    ],
    correct: 1,
    explanation:
      'The capitalised "NOT" breaks the narrative voice in a deliberate authorial intrusion. Dickens shouts the word to celebrate Tiny Tim\'s survival and prove that moral action can change the future.',
  },
  {
    id: 'aqa-acc-aq14',
    question: 'How does Dickens use the five-stave structure to mirror a Christmas carol (song)?',
    options: [
      'Each stave is meant to be sung aloud',
      'The novella moves from a solemn introduction through variations of mood to a joyful resolution, like a piece of music reaching its harmonic climax',
      'The staves correspond to the five days of Christmas',
      'Each stave uses a different narrator, like different voices in a choir',
    ],
    correct: 1,
    explanation:
      'Like a carol, the novella begins solemnly (Stave 1), varies in mood (Staves 2-4), and resolves in joy (Stave 5). The musical structure creates a sense of inevitability and harmonic satisfaction.',
  },
  {
    id: 'aqa-acc-aq15',
    question: 'What is the effect of the novella\'s final line shifting from "him" to "us"?',
    options: [
      'It is a grammatical error',
      'Dickens breaks the fictional frame to challenge every reader to follow Scrooge\'s example — the moral demand becomes personal and inescapable',
      'It refers to the other characters joining Scrooge',
      'It shows the narrator revealing his identity',
    ],
    correct: 1,
    explanation:
      'The shift from third person ("him") to first person plural ("us") is a deliberate rhetorical move. Dickens turns the spotlight from Scrooge to the reader, making the moral challenge personal.',
  },
  {
    id: 'aqa-acc-aq16',
    question: 'What is a "conceptualised response" in AQA terms?',
    options: [
      'An essay that uses diagrams and concept maps',
      'An essay built around a central argument or thesis rather than a list of disconnected points — it is the hallmark of Band 5/6 work',
      'An essay that only discusses abstract concepts',
      'An essay written from memory without referring to the extract',
    ],
    correct: 1,
    explanation:
      'A conceptualised response has an overarching argument that threads through every paragraph. It interprets rather than describes, connecting points into a coherent thesis. AQA examiners identify this as a key feature of top-band work.',
  },
  {
    id: 'aqa-acc-aq17',
    question: 'How should AO3 context be integrated into an AQA essay?',
    options: [
      'In a separate "context paragraph" at the start of the essay',
      'Embedded into analytical points — connecting historical facts to Dickens\'s language, purpose, and effects rather than bolting them on separately',
      'Only in the conclusion',
      'Context is not required for the 19th-century novel question',
    ],
    correct: 1,
    explanation:
      'AO3 context should be woven into analysis, not bolted on. Connect contextual knowledge to specific textual moments and Dickens\'s purpose — e.g., linking Scrooge\'s language to Malthusian economics while analysing its effect on the reader.',
  },
  {
    id: 'aqa-acc-aq18',
    question: 'Which technique does Dickens use in "secret, and self-contained, and solitary as an oyster"?',
    options: [
      'Onomatopoeia and alliteration',
      'Sibilance and tricolon — the repeated "s" sounds create a sealed, hissing quality, and the three-part list builds rhythmic emphasis',
      'Hyperbole and metaphor',
      'Personification and assonance',
    ],
    correct: 1,
    explanation:
      'The phrase uses sibilance (repeated "s" sounds: secret, self-contained, solitary) creating a sealed, enclosed quality, and tricolon (three-part structure) building rhythmic emphasis. Both techniques reinforce Scrooge\'s hermetic isolation.',
  },
  {
    id: 'aqa-acc-aq19',
    question: 'Why is Belle\'s phrase "You fear the world too much" significant for understanding Scrooge?',
    options: [
      'It shows Belle is afraid of Scrooge',
      'It reveals that Scrooge\'s greed is rooted in fear — fear of poverty and vulnerability — humanising him even as it condemns his choices',
      'It suggests Scrooge should travel less',
      'It shows that Scrooge was once a brave person',
    ],
    correct: 1,
    explanation:
      'Belle identifies that Scrooge\'s greed is a fear response — fear of the poverty and vulnerability he experienced as a child. This humanises Scrooge and suggests his greed is a learned defence mechanism, not an innate flaw.',
  },
  {
    id: 'aqa-acc-aq20',
    question: 'How should you divide your AQA essay between the extract and the wider novella?',
    options: [
      '80% extract, 20% wider novella',
      'Approximately 50% extract, 50% wider novella — AQA requires both to access the top mark bands',
      '100% extract — the wider novella is optional extra credit',
      '30% extract, 70% wider novella',
    ],
    correct: 1,
    explanation:
      'AQA explicitly requires you to write about the extract and the novella as a whole. Aim for roughly equal coverage. Writing only about the extract limits you to the lower mark bands.',
  },
];

// ─── Course Export ───────────────────────────────────────────────────────────

export const christmasCarolCourse: CourseData = {
  id: 'aqa-lit-christmas-carol',
  title: 'AQA GCSE English Literature: A Christmas Carol',
  subtitle: 'Complete novella study with AQA exam technique',
  tier: 'GCSE',
  board: 'AQA',
  specCode: '8702',
  price: 0,
  duration: '9 hours',
  level: 'GCSE',
  description:
    'A comprehensive 10-module course covering Charles Dickens\'s A Christmas Carol for AQA GCSE English Literature. Includes detailed stave-by-stave analysis, character studies, thematic exploration, writer\'s methods, and AQA-specific exam technique with extract-based essay practice.',
  color: '#b91c1c',
  moduleList: accModules,
  assessmentQuestions,
};
