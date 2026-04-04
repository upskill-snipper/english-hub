import type {
  BoardExamGuide,
  SetTextAnalysis,
  GenericOverview,
} from '../exam-guides/types';

// ─── Set Text Study Guides ────────────────────────────────────────────────────

export const ofMiceAndMenGuide: SetTextAnalysis = {
  title: 'Of Mice and Men',
  author: 'John Steinbeck',
  themes: [
    'The American Dream',
    'Loneliness and isolation',
    'Friendship and loyalty',
    'Power and powerlessness',
    'Prejudice and discrimination',
    'Nature and fate',
    'Dreams vs. reality',
  ],
  context:
    'Set during the Great Depression in 1930s California, the novella reflects the economic hardship and social instability of the era. Migrant ranch workers — predominantly poor, itinerant men — travelled from farm to farm seeking seasonal employment. Steinbeck drew on his own experience working on ranches in the Salinas Valley. The title alludes to Robert Burns\'s poem "To a Mouse" — "The best laid schemes o\' mice an\' men / Gang aft agley" — foreshadowing the destruction of George and Lennie\'s dream. The novella also explores the marginalisation of women, Black Americans, the elderly, and those with disabilities in Depression-era America.',
  characters: [
    {
      name: 'George Milton',
      description:
        'Small, quick-witted, and sharp-featured. George is Lennie\'s protector and companion, carrying the burden of responsibility for a man he loves but who constantly endangers them both. He represents the pragmatic realist who nevertheless clings to the dream of owning land. His final act — shooting Lennie — is simultaneously an act of mercy and the death of his own dream.',
    },
    {
      name: 'Lennie Small',
      description:
        'Physically enormous but mentally childlike. Lennie\'s love of petting soft things drives the plot toward its tragic conclusion. He is both innocent and dangerous — his strength, uncontrolled by understanding, makes him a threat to everything he touches. Steinbeck uses Lennie to expose society\'s failure to protect the vulnerable.',
    },
    {
      name: 'Curley\'s Wife',
      description:
        'The only woman on the ranch and never given a name — she is defined entirely by her relationship to her husband. She is lonely, dismissed as a "tart", and dreams of a life in Hollywood. Her death is the catalyst for the novella\'s tragic climax. Steinbeck uses her to explore the intersection of gender, power, and the American Dream.',
    },
    {
      name: 'Candy',
      description:
        'An ageing, disabled swamper whose old dog is shot by Carlson. The parallel between Candy and his dog foreshadows the novella\'s ending. Candy represents the fear of obsolescence — when you are no longer useful, you are discarded. His eagerness to join George and Lennie\'s dream reflects desperate hope.',
    },
    {
      name: 'Crooks',
      description:
        'The Black stable buck, isolated by racial segregation. His room in the barn — separate from the bunkhouse — physically enacts his exclusion. Crooks is intelligent and bitter, his cynicism born of experience. His brief moment of hope (wanting to join the dream) is crushed when Curley\'s wife threatens him, reasserting the racial hierarchy.',
    },
    {
      name: 'Slim',
      description:
        'The "jerkline skinner" — the most respected man on the ranch. Slim is the moral compass of the novella: perceptive, calm, and authoritative. He is the only character who fully understands George\'s relationship with Lennie and the significance of the final act.',
    },
    {
      name: 'Curley',
      description:
        'The boss\'s son — small, aggressive, and insecure. Curley embodies toxic masculinity and abuses his position of power. His aggression toward Lennie (targeting someone bigger) and his possessive treatment of his wife reveal deep inadequacy. He represents the corruption of power.',
    },
  ],
  quotations: [
    {
      quote: '"Guys like us, that work on ranches, are the loneliest guys in the world."',
      analysis:
        'George articulates the central theme of isolation. The universal "guys like us" suggests this loneliness is systemic — built into the economic structure of migrant labour — rather than personal. This line also establishes what makes George and Lennie exceptional: they have each other.',
    },
    {
      quote: '"I could get you strung up on a tree so easy it ain\'t even funny."',
      analysis:
        'Curley\'s wife threatens Crooks with lynching, invoking the real history of racial violence in the American South. In a single line, Steinbeck reveals the power hierarchy: even the most marginalised white woman holds power over a Black man. Crooks\'s response — he "reduced himself to nothing" — is devastating.',
    },
    {
      quote: '"A guy needs somebody — to be near him. A guy goes nuts if he ain\'t got nobody."',
      analysis:
        'Crooks\'s confession to Lennie expresses the psychological damage of enforced isolation. The colloquial register makes the insight feel raw and unmediated. This is one of the novella\'s most explicit statements of theme.',
    },
    {
      quote: '"I ought to of shot that dog myself, George. I shouldn\'t ought to of let no stranger shoot my dog."',
      analysis:
        'Candy\'s regret foreshadows George\'s decision to shoot Lennie himself rather than let Curley\'s mob do it. The parallel is deliberate: Steinbeck asks the reader to consider whether George\'s act is one of love or cruelty — or both.',
    },
    {
      quote: '"We\'d just live there. We\'d belong there."',
      analysis:
        'The dream of the farm represents not just economic independence but belonging — a home, stability, identity. The simplicity of the language ("just live there") underscores how modest the dream is, making its impossibility all the more tragic.',
    },
    {
      quote: '"I seen hundreds of men come by on the road an\' on the ranches... an\' every damn one of \'em\'s got a little piece of land in his head."',
      analysis:
        'Crooks deconstructs the American Dream as a collective delusion. The image of the dream existing only "in his head" — never realised — is Steinbeck\'s most direct critique of the myth.',
    },
  ],
  examStrategy:
    'Focus on Steinbeck\'s methods rather than retelling the plot. The examiner rewards analysis of how Steinbeck uses setting (the Salinas Valley, the bunkhouse, Crooks\'s room), symbolism (the dream farm, Lennie\'s mice and puppy, Candy\'s dog), and cyclical structure (the novel opens and closes at the pool) to convey his themes. Always embed context — the Great Depression, racial segregation, gender roles — but link it to the writer\'s purpose, not as background information. For character questions, explore how characters function as vehicles for Steinbeck\'s social criticism.',
};

export const anInspectorCallsGuide: SetTextAnalysis = {
  title: 'An Inspector Calls',
  author: 'J. B. Priestley',
  themes: [
    'Social responsibility',
    'Class and inequality',
    'Gender and generational divide',
    'Guilt and conscience',
    'Capitalism vs. socialism',
    'Appearance vs. reality',
    'Power and privilege',
  ],
  context:
    'Written in 1945 but set in 1912, the play exploits dramatic irony — the audience knows what the Birling family does not: two World Wars, the sinking of the Titanic, and the collapse of the class system are all imminent. Priestley, a committed socialist, uses the play as a vehicle for his political message: that society must move away from selfish individualism toward collective responsibility. The 1945 audience, having lived through the devastation of WWII and the promise of the welfare state, would have been receptive to this message. The play premiered in Moscow before London, reflecting Priestley\'s socialist sympathies.',
  characters: [
    {
      name: 'Inspector Goole',
      description:
        'The Inspector functions as Priestley\'s mouthpiece and moral authority. His name — "Goole" (ghoul) — hints at the supernatural. He systematically dismantles the Birling family\'s complacency, revealing their complicity in Eva Smith\'s death. He speaks with authority that transcends social class, challenging the established hierarchy. His final speech is Priestley\'s manifesto: a warning that selfishness will lead to destruction.',
    },
    {
      name: 'Mr Arthur Birling',
      description:
        'A prosperous manufacturer, "heavy-looking" and self-important. Birling represents the capitalist establishment — confident, complacent, and wrong. His dramatic irony speeches ("the Titanic — unsinkable, absolutely unsinkable") mark him as foolish. He is concerned only with reputation and profit. He learns nothing from the Inspector\'s visit, making him the primary target of Priestley\'s critique.',
    },
    {
      name: 'Sheila Birling',
      description:
        'Sheila undergoes the most significant character arc. She moves from a "pretty girl" enjoying her engagement to a morally awakened young woman who accepts responsibility. She recognises her jealousy-driven cruelty and refuses to retreat into comfortable denial. Sheila represents Priestley\'s hope — the younger generation\'s capacity for change.',
    },
    {
      name: 'Eric Birling',
      description:
        'The Birlings\' son — heavy-drinking, awkward, and guilt-ridden. Eric forced himself on Eva/Daisy, got her pregnant, and stole money from his father\'s business to support her. His guilt is genuine but his behaviour is indefensible. Eric represents the destructive consequences of privilege without accountability.',
    },
    {
      name: 'Mrs Sybil Birling',
      description:
        'Cold, imperious, and class-conscious. Mrs Birling refused Eva\'s appeal for charity help because Eva had used the name "Mrs Birling". Her rigid adherence to class hierarchy blinds her to basic humanity. She is arguably the most culpable character because her refusal was the final act that left Eva with no options. She remains unrepentant.',
    },
    {
      name: 'Gerald Croft',
      description:
        'Sheila\'s fiance and son of a rival manufacturer. Gerald\'s affair with Daisy Renton is complex — he showed genuine kindness but ultimately abandoned her. Gerald represents the ambiguity of the upper class: capable of compassion but unwilling to sacrifice comfort for principle. He is the first to suggest the Inspector may be a fraud, eager to return to normality.',
    },
    {
      name: 'Eva Smith / Daisy Renton',
      description:
        'Never appears on stage but is the moral centre of the play. She represents the working class — exploited, silenced, and destroyed by those with power. By giving her two names, Priestley suggests she is everywoman: her story is the story of thousands.',
    },
  ],
  quotations: [
    {
      quote: '"We are members of one body. We are responsible for each other."',
      analysis:
        'The Inspector\'s final speech is Priestley\'s thesis statement. The organic metaphor ("one body") insists that society is interconnected — harm to one is harm to all. This directly challenges Birling\'s earlier individualism and echoes socialist principles of collective welfare.',
    },
    {
      quote: '"If we don\'t learn that lesson, then we\'ll be taught it in fire and blood and anguish."',
      analysis:
        'A prophetic warning that the 1945 audience recognises as fulfilled — two World Wars have indeed punished society\'s failure to care for its most vulnerable. The apocalyptic language ("fire and blood") gives the Inspector an almost biblical authority.',
    },
    {
      quote: '"The Titanic — she sails next week... unsinkable, absolutely unsinkable."',
      analysis:
        'Birling\'s confidence is devastatingly ironic — the audience knows the Titanic sank. Priestley uses dramatic irony to destroy Birling\'s credibility, so that when he dismisses social responsibility, the audience knows he is equally wrong about that too.',
    },
    {
      quote: '"But these girls aren\'t cheap labour — they\'re people."',
      analysis:
        'Sheila\'s transformation is encapsulated here. She rejects the dehumanising language of capitalism ("cheap labour") and insists on common humanity. This marks her break from her father\'s worldview and aligns her with the Inspector\'s message.',
    },
    {
      quote: '"You\'re not the kind of father a chap could go to when he\'s in trouble."',
      analysis:
        'Eric exposes the failure of the patriarchal family structure. Birling\'s authority is hollow — his son cannot trust him, his daughter defies him. The generational conflict mirrors Priestley\'s argument that the old order must give way.',
    },
    {
      quote: '"I\'m ashamed of you as well — yes both of you."',
      analysis:
        'Sheila turns the moral hierarchy upside down — the child shames the parents. This reversal of authority is central to Priestley\'s message: moral authority belongs to those who accept responsibility, regardless of age or social position.',
    },
  ],
  examStrategy:
    'The key to a strong response on An Inspector Calls is understanding Priestley\'s purpose and methods. Every character, event, and structural choice serves his socialist message. Analyse the play as a piece of political theatre: the use of dramatic irony (1912 setting, 1945 writing), the well-made play structure (unities of time, place, action), the Inspector as a dramatic device, and the cyclical ending (the phone call). For character questions, always link the character to Priestley\'s message — characters are vehicles for ideas, not just people. Context should focus on 1945 (when Priestley wrote and what he wanted to achieve) rather than 1912 (which is the setting, not the context).',
};

export const macbethGuide: SetTextAnalysis = {
  title: 'Macbeth',
  author: 'William Shakespeare',
  themes: [
    'Ambition and its consequences',
    'Power and corruption',
    'Guilt and conscience',
    'The supernatural',
    'Masculinity and gender',
    'Appearance vs. reality',
    'Kingship and tyranny',
    'Order and disorder',
  ],
  context:
    'Written around 1606, shortly after the Gunpowder Plot (1605) — an attempt to assassinate King James I. Shakespeare wrote the play partly to flatter James, who was Scottish (Macbeth is set in Scotland), believed in witchcraft (the witches), and traced his lineage to Banquo. The play explores the Divine Right of Kings — the belief that monarchs were God\'s appointed rulers and that regicide was therefore the ultimate sin against God and nature. The Jacobean audience would have understood Macbeth\'s murder of Duncan as a violation of divine order, explaining why nature itself rebels (storms, darkness, animals behaving unnaturally). Shakespeare draws on Holinshed\'s Chronicles but dramatically compresses and darkens the historical material.',
  characters: [
    {
      name: 'Macbeth',
      description:
        'A tragic hero whose fatal flaw is ambition. He begins as a loyal, courageous thane — "brave Macbeth" — but the witches\' prophecy awakens latent ambition. His psychological deterioration from hesitant murderer to paranoid tyrant is the play\'s central arc. Shakespeare explores whether Macbeth is a victim of fate (the witches) or free will (his own choices). His soliloquies reveal a man tormented by conscience yet unable to stop — "I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er."',
    },
    {
      name: 'Lady Macbeth',
      description:
        'One of Shakespeare\'s most complex female characters. She calls on dark spirits to "unsex" her — to remove femininity so she can act with masculine ruthlessness. She is the driving force behind Duncan\'s murder, manipulating Macbeth by questioning his manhood. Yet her apparent strength conceals fragility: she cannot kill Duncan herself ("Had he not resembled / My father as he slept, I had done\'t") and eventually breaks down into madness and suicide. The sleepwalking scene reverses the power dynamic — she who was fearless is now destroyed by guilt.',
    },
    {
      name: 'The Witches (Weird Sisters)',
      description:
        'Agents of chaos who speak in trochaic tetrameter, setting them apart from the iambic pentameter of the court. They embody ambiguity — do they cause Macbeth\'s downfall or merely reveal what is already within him? Their prophecies are equivocal: technically true but deliberately misleading. They represent the dangers of the supernatural and the corruption of natural order. For James I\'s audience, they would have been genuinely terrifying.',
    },
    {
      name: 'Banquo',
      description:
        'Macbeth\'s foil — he hears the same prophecy but resists temptation. Banquo represents the path Macbeth could have taken. His ghost at the banquet is a physical manifestation of Macbeth\'s guilt and the inescapability of conscience. Historically, Banquo was James I\'s ancestor, so Shakespeare presents him as honourable.',
    },
    {
      name: 'Macduff',
      description:
        'The agent of justice and retribution. Macduff\'s grief at his family\'s murder ("All my pretty ones? / Did you say all?") is one of the play\'s most human moments. He is "not of woman born" (delivered by Caesarean section), fulfilling the witches\' prophecy. Macduff represents legitimate masculine honour — he feels deeply but acts decisively.',
    },
    {
      name: 'Duncan',
      description:
        'The rightful, divinely appointed king — generous, trusting, and noble. His murder is not just a political act but a sin against God and nature. Shakespeare makes Duncan almost saintly to maximise the horror of the regicide. Duncan\'s goodness contrasts sharply with Macbeth\'s subsequent tyranny.',
    },
    {
      name: 'Malcolm',
      description:
        'Duncan\'s son and the rightful heir. Malcolm\'s testing of Macduff in Act 4 demonstrates political wisdom — he has learned from his father\'s misplaced trust. His restoration to the throne at the play\'s end symbolises the return of divine order. He represents the hope of good governance.',
    },
  ],
  quotations: [
    {
      quote: '"Fair is foul, and foul is fair."',
      analysis:
        'The witches\' opening chant establishes the play\'s central motif: the inversion of moral order. Nothing is as it seems — loyal thanes become traitors, trusted hosts become murderers. The chiasmus (reversal of word order) enacts the confusion of values that Macbeth\'s ambition will cause.',
    },
    {
      quote: '"Look like th\'innocent flower, / But be the serpent under\'t."',
      analysis:
        'Lady Macbeth advises Macbeth to deceive Duncan. The biblical allusion to the serpent in the Garden of Eden casts the murder as a fall from grace. The imperative verbs reveal Lady Macbeth\'s dominance in the relationship at this stage.',
    },
    {
      quote: '"Is this a dagger which I see before me?"',
      analysis:
        'Macbeth\'s hallucination before Duncan\'s murder dramatises his internal conflict. The dagger — real or imagined — represents the temptation of ambition. The interrogative form shows Macbeth questioning his own sanity, foreshadowing his psychological disintegration.',
    },
    {
      quote: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand?"',
      analysis:
        'Immediately after the murder, Macbeth recognises the permanence of his guilt. The hyperbolic reference to Neptune (Roman god of the sea) suggests that no amount of water — no act of cleansing — can undo what he has done. This directly anticipates Lady Macbeth\'s obsessive hand-washing in Act 5.',
    },
    {
      quote: '"Out, damned spot! out, I say!"',
      analysis:
        'Lady Macbeth\'s sleepwalking reveals that guilt, suppressed by willpower, has erupted through the unconscious. The imagined blood — invisible to the Doctor and Gentlewoman — shows that psychological guilt is more permanent than physical evidence. The fragmented prose (replacing her earlier confident verse) signals her mental collapse.',
    },
    {
      quote: '"Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage."',
      analysis:
        'Macbeth\'s nihilistic soliloquy after Lady Macbeth\'s death reduces life to meaningless performance. The theatrical metaphor ("poor player", "stage") is deeply self-aware — Shakespeare has his character describe the futility of the very medium in which he exists. This is Macbeth\'s darkest moment: he has lost everything, including the capacity to feel.',
    },
  ],
  examStrategy:
    'For Macbeth, examiners want to see analysis of Shakespeare\'s methods: his use of soliloquy to reveal interiority, dramatic irony, the structural arc from order to chaos and back, the motifs of blood, darkness, and sleep, and the role of the supernatural. Context should focus on Jacobean beliefs — the Divine Right of Kings, attitudes to witchcraft, patriarchal gender roles — and Shakespeare\'s relationship with James I. Avoid narrative retelling; instead, trace how Shakespeare shapes the audience\'s response through language and structure. For character questions, consider the character\'s dramatic function — what does Shakespeare use them to explore or argue?',
};

// ─── Poetry Anthology Overview ────────────────────────────────────────────────

export const poetryAnthologyOverview: GenericOverview = {
  title: 'Edexcel IGCSE Poetry Anthology Overview',
  sections: [
    {
      heading: 'Structure and Scope',
      content:
        'The Edexcel IGCSE anthology contains <strong>45 poems</strong> organised into <strong>six thematic clusters</strong>: Culture and Identity, Belonging, Conflict, War and its Aftermath, Time and Place, and The Natural World. This is the largest anthology at IGCSE level. The exam may draw the named poem from <em>any</em> cluster, so selective revision is extremely risky.',
    },
    {
      heading: 'The Examination Task',
      content:
        'Paper 2, Section A presents an <strong>unseen poem</strong> alongside a <strong>named poem from the anthology</strong>. You must analyse both and compare them. The named poem must be quoted <strong>from memory</strong> — the anthology is not provided in the exam. This means you need secure knowledge of key quotations from every poem you study.',
    },
    {
      heading: 'Assessment Focus',
      content:
        'AO2 (analysis of writer\'s methods) is the dominant assessment objective in the poetry question. The examiner wants to see detailed analysis of how poets use language, form, and structure — not just what the poems are about. AO1 (knowledge and reference) and AO4 (personal response) also contribute. The comparison element (AO3) requires you to weave analysis of both poems together.',
    },
    {
      heading: 'Revision Strategy',
      content:
        'Create a revision grid for each poem: poet, era, key themes, form and structure, 2-3 key quotations with analysis, and a top comparison partner. Practise writing timed comparative paragraphs (8-10 minutes per point). Group poems across clusters by shared themes — for example, poems about power (Ozymandias, Hawk Roosting, Half-Caste), poems about memory (Piano, Once Upon a Time), or poems about conflict (Exposure, Dulce et Decorum Est, War Photographer). This builds flexible comparison skills regardless of which poem the exam names.',
    },
    {
      heading: 'Approaching the Unseen Poem',
      content:
        'Read the unseen poem at least twice. On first reading, identify subject, tone, and overall meaning. On second reading, annotate specific techniques: imagery, word choices, structural features, rhyme/rhythm, shifts in tone. Then identify connections with the named anthology poem — these might be thematic (both about loss), methodological (both use first person), or contrastive (one celebrates nature, the other fears it). The strongest responses treat the unseen poem with the same analytical depth as the anthology poem.',
    },
  ],
};

// ─── Revision Strategies ──────────────────────────────────────────────────────

export const revisionStrategies: GenericOverview = {
  title: 'IGCSE Revision Strategies and Exam Technique',
  sections: [
    {
      heading: 'Topic-by-Topic Revision Checklist',
      content: `
        <h4>Paper 1: Non-fiction Reading</h4>
        <ul>
          <li>Retrieval and inference from non-fiction texts (Q1)</li>
          <li>Language analysis — identifying and explaining effects of word choices, imagery, figurative language (Q2, Q4)</li>
          <li>Structural analysis — openings, endings, shifts, paragraph organisation, sentence variety</li>
          <li>Comparison of writers\' ideas and perspectives across two texts (Q3)</li>
          <li>Understanding non-fiction forms: articles, speeches, letters, travel writing, autobiography, diary, blog</li>
        </ul>
        <h4>Paper 1: Transactional Writing</h4>
        <ul>
          <li>Letter conventions (formal and informal)</li>
          <li>Article conventions (headline, subheading, opening hook)</li>
          <li>Speech conventions (rhetorical devices, direct address, varied tone)</li>
          <li>Report and review conventions</li>
          <li>Matching form, audience, and purpose (FAP)</li>
          <li>Technical accuracy: spelling, punctuation, grammar (SPaG)</li>
        </ul>
        <h4>Paper 2: Poetry</h4>
        <ul>
          <li>All 45 anthology poems — key quotations memorised</li>
          <li>Unseen poetry analysis technique</li>
          <li>Comparative writing skills</li>
          <li>Poetic terminology: form, metre, rhyme scheme, enjambment, caesura, volta, stanza</li>
          <li>Contextual knowledge for each poem</li>
        </ul>
        <h4>Paper 2: Imaginative Writing</h4>
        <ul>
          <li>Narrative writing: plot structure, characterisation, dialogue, pacing</li>
          <li>Descriptive writing: imagery, sensory detail, atmosphere, varied sentence structures</li>
          <li>Crafting techniques: cyclical structure, symbolism, pathetic fallacy, in medias res</li>
          <li>Technical accuracy under timed conditions</li>
        </ul>
      `,
    },
    {
      heading: 'Exam Technique Mnemonics',
      content: `
        <h4>PEEL — for analytical paragraphs</h4>
        <p><strong>P</strong>oint — state your argument clearly<br/>
        <strong>E</strong>vidence — embed a short quotation<br/>
        <strong>E</strong>xplain — analyse the effect of the language/structure<br/>
        <strong>L</strong>ink — connect back to the question or to a wider theme</p>

        <h4>FAP — for transactional writing</h4>
        <p><strong>F</strong>orm — What are you writing? (letter, article, speech, report, review)<br/>
        <strong>A</strong>udience — Who are you writing for? (headteacher, teenagers, general public)<br/>
        <strong>P</strong>urpose — Why are you writing? (argue, persuade, advise, inform, explain)</p>

        <h4>SMILE — for poetry analysis</h4>
        <p><strong>S</strong>tructure — How is the poem organised? (stanzas, volta, enjambment)<br/>
        <strong>M</strong>eaning — What is the poem about? (surface and deeper meanings)<br/>
        <strong>I</strong>magery — What pictures does the poet create? (metaphor, simile, personification)<br/>
        <strong>L</strong>anguage — What specific word choices stand out? (connotations, tone)<br/>
        <strong>E</strong>ffect — What impact does this have on the reader?</p>

        <h4>DAFOREST — for persuasive/rhetorical techniques</h4>
        <p><strong>D</strong>irect address<br/>
        <strong>A</strong>lliteration<br/>
        <strong>F</strong>acts<br/>
        <strong>O</strong>pinions<br/>
        <strong>R</strong>hetorical questions<br/>
        <strong>E</strong>motive language<br/>
        <strong>S</strong>tatistics<br/>
        <strong>T</strong>ricolon (rule of three)</p>
      `,
    },
    {
      heading: 'Common Pitfalls and How to Avoid Them',
      content: `
        <table>
          <thead><tr><th>Pitfall</th><th>Solution</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Feature-spotting without analysis</strong> — identifying a metaphor but not explaining its effect</td>
              <td>Always ask "So what?" after identifying a technique. The effect on the reader is where the marks are.</td>
            </tr>
            <tr>
              <td><strong>Narrative retelling</strong> — summarising the plot instead of analysing methods</td>
              <td>Focus on HOW the writer achieves effects, not WHAT happens. Use the formula: "[Writer] uses [technique] to [effect]."</td>
            </tr>
            <tr>
              <td><strong>Ignoring one text in a comparison</strong> — writing extensively about Text A then briefly about Text B</td>
              <td>Structure comparatively from the start. Each paragraph should address both texts using connectives (similarly, whereas, in contrast).</td>
            </tr>
            <tr>
              <td><strong>Mismatching form in transactional writing</strong> — writing a speech that reads like an essay</td>
              <td>Learn the conventions of each form before the exam. Practise at least one example of each form type.</td>
            </tr>
            <tr>
              <td><strong>Running out of time</strong> — spending too long on earlier questions</td>
              <td>Use the marks-per-minute guide: roughly 1.5 minutes per mark on Paper 1, 1.5 minutes per mark on Paper 2. Set checkpoint times.</td>
            </tr>
            <tr>
              <td><strong>Weak technical accuracy</strong> — losing AO5 marks through careless SPaG errors</td>
              <td>Reserve 3-5 minutes at the end of each paper for proofreading. Focus on common errors: apostrophes, comma splices, homophones.</td>
            </tr>
            <tr>
              <td><strong>Vague quotations from the anthology</strong> — paraphrasing instead of quoting precisely</td>
              <td>Memorise 2-3 key quotations per poem. Short, embedded quotations are more effective than long block quotes.</td>
            </tr>
            <tr>
              <td><strong>Context dumping</strong> — writing a paragraph of background information disconnected from analysis</td>
              <td>Integrate context into your analysis: "[Writer] uses X, reflecting the [contextual point], which..."</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      heading: 'Last-Minute Revision Guide — Paper 1',
      content: `
        <ol>
          <li><strong>Re-read your best practice responses</strong> — remind yourself what a strong answer looks like</li>
          <li><strong>Review the question types:</strong> Q1 (retrieval, 10 marks), Q2 (language/structure, 10 marks), Q3 (comparison, 15 marks), Q4 (language analysis, 10 marks), Q5 (transactional writing, 20 marks), Q6 (transactional writing, 25 marks)</li>
          <li><strong>Practise identifying techniques in a non-fiction extract</strong> — 10 minutes of active annotation</li>
          <li><strong>Write one opening paragraph for a speech and one for a letter</strong> — ensure you can nail the conventions under pressure</li>
          <li><strong>Review your SPaG checklist:</strong> apostrophes, semicolons, paragraph signposting, sentence variety</li>
          <li><strong>Time check:</strong> 55 min reading, 65 min writing, 15 min planning/checking = 135 min total</li>
        </ol>
      `,
    },
    {
      heading: 'Last-Minute Revision Guide — Paper 2',
      content: `
        <ol>
          <li><strong>Review your anthology revision grid</strong> — skim every poem, focusing on key quotations and comparison partners</li>
          <li><strong>Test yourself:</strong> pick a random poem and write down 3 quotations from memory. Repeat for 5 poems.</li>
          <li><strong>Practise unseen poetry analysis:</strong> read a poem you haven\'t seen before and annotate for technique, tone, and meaning in 5 minutes</li>
          <li><strong>Review your best imaginative writing piece</strong> — remind yourself of the techniques that earned high marks</li>
          <li><strong>Plan a narrative and a descriptive piece in 3 minutes each</strong> — practise planning under pressure</li>
          <li><strong>Time check:</strong> 45 min poetry, 45 min writing = 90 min total. Do not overrun on Section A.</li>
        </ol>
      `,
    },
  ],
};

// ─── IAL English Language Overview ────────────────────────────────────────────

export const ialEnglishOverview: GenericOverview = {
  title: 'Edexcel IAL English Language (YEN0) Overview',
  sections: [
    {
      heading: 'Specification Summary',
      content:
        'The Pearson Edexcel International Advanced Level (IAL) in English Language (<strong>YEN0</strong>) is a modular qualification designed for international centres. It comprises <strong>four units</strong> across AS and A2. The qualification is graded <strong>A*–E</strong> at A Level and <strong>A–E</strong> at AS. It provides a pathway for students who have completed IGCSE English Language and wish to pursue English Language study at an advanced level. The IAL shares the Edexcel emphasis on analysing language in use — examining how speakers and writers make choices shaped by context, audience, and purpose.',
    },
    {
      heading: 'Unit 1: Language, the Individual and Society (WEN01)',
      content:
        'An examined unit (AS level). The paper tests students\' ability to analyse language data and apply language frameworks (lexis, semantics, grammar, phonology, pragmatics, discourse) to spoken and written texts. Students explore how language varies according to context (mode, field, tenor) and how language shapes and reflects identity, power, and social relationships. Candidates analyse unseen texts — which may include transcripts, advertisements, articles, social media, and multimodal texts — using linguistic terminology with precision. The paper is <strong>2 hours</strong> and carries <strong>80 marks</strong>.',
    },
    {
      heading: 'Unit 2: Language in Transition (WEN02)',
      content:
        'A coursework unit (AS level). Students produce <strong>two pieces of coursework</strong>: one analytical essay exploring a language topic (e.g. language and gender, language and power, language change) and one piece of original writing for a specified audience and purpose. The coursework is internally assessed and externally moderated. It carries <strong>80 marks</strong> and accounts for <strong>50%</strong> of the AS qualification (25% of the full A Level). This unit allows students to pursue independent research on a language topic that interests them.',
    },
    {
      heading: 'Unit 3: Crafting Language (WEN03)',
      content:
        'An examined unit (A2 level). This paper focuses on the relationship between reading and writing — students analyse how professional writers craft language for specific effects and then produce their own crafted writing in response. Section A requires close analysis of a prose extract. Section B presents a writing task where students must demonstrate conscious, sophisticated language choices. The paper is <strong>2 hours 30 minutes</strong> and carries <strong>80 marks</strong>.',
    },
    {
      heading: 'Unit 4: Investigating Language (WEN04)',
      content:
        'A coursework unit (A2 level). Students conduct an <strong>independent language investigation</strong> (approximately 2,500-3,000 words) and produce a <strong>piece of original writing with a commentary</strong>. The investigation requires students to collect and analyse their own language data using appropriate linguistic frameworks and methodologies. Topics might include analysis of a specific discourse community, language and social media, code-switching, or language and advertising. The unit is internally assessed and externally moderated, carrying <strong>80 marks</strong>.',
    },
    {
      heading: 'Assessment Overview',
      content: `
        <table>
          <thead>
            <tr><th>Unit</th><th>Title</th><th>Assessment</th><th>Marks</th><th>% of A Level</th></tr>
          </thead>
          <tbody>
            <tr><td>Unit 1 (WEN01)</td><td>Language, the Individual and Society</td><td>Exam (2 hours)</td><td>80</td><td>25%</td></tr>
            <tr><td>Unit 2 (WEN02)</td><td>Language in Transition</td><td>Coursework</td><td>80</td><td>25%</td></tr>
            <tr><td>Unit 3 (WEN03)</td><td>Crafting Language</td><td>Exam (2 hours 30 min)</td><td>80</td><td>25%</td></tr>
            <tr><td>Unit 4 (WEN04)</td><td>Investigating Language</td><td>Coursework</td><td>80</td><td>25%</td></tr>
          </tbody>
        </table>
        <p>
          The qualification is evenly split between examination (50%) and coursework (50%), providing a balanced assessment model. Students may sit AS units (1 and 2) as a standalone qualification or continue to the full A Level by adding Units 3 and 4.
        </p>
      `,
    },
    {
      heading: 'Coursework vs. Exam Balance',
      content:
        'The IAL English Language is unusual among A Level English qualifications in offering a <strong>50/50 split</strong> between examination and coursework. This benefits students who produce their best work with time for research, drafting, and refinement. However, both coursework units require rigorous linguistic analysis — simply writing well is not enough. The analytical coursework (Unit 2) demands engagement with language theory and research, while the investigation (Unit 4) requires independent data collection and methodology. Students should begin coursework early and use formative feedback effectively. The examined units reward students who can apply linguistic frameworks under timed conditions to unseen data.',
    },
  ],
};

// ─── Main Exam Guide (matches BoardExamGuide type) ────────────────────────────

export const edexcelIgcseExamGuide: BoardExamGuide = {
  boardId: 'IGCSE',
  boardName: 'Edexcel IGCSE',
  boardColor: '#8B5CF6',

  overview: `
    <p>
      Pearson Edexcel International GCSE English Language A (<strong>4EA1</strong>) is one of the most widely sat
      international qualifications in British schools overseas, international schools, and independent schools in
      the UK. It is graded <strong>9-1</strong>, mirroring the domestic GCSE scale, and is recognised by universities
      and employers worldwide. The qualification is structured across <strong>two papers</strong>: Paper 1 focuses on
      non-fiction reading and transactional writing, while Paper 2 combines poetry from a set anthology with
      imaginative/creative writing.
    </p>
    <p>
      The most distinctive feature of the IGCSE English Language A specification is its <strong>45-poem anthology</strong>,
      organised into <strong>six thematic clusters</strong> — the largest anthology of any English qualification at this
      level. The clusters are: <em>Culture and Identity</em>, <em>Belonging</em>, <em>Conflict</em>,
      <em>War and its Aftermath</em>, <em>Time and Place</em>, and <em>The Natural World</em>. Students study poems
      from all six clusters, and the examination may draw from any of them.
    </p>
    <p>
      Paper 1 carries <strong>60%</strong> of the total marks and Paper 2 carries <strong>40%</strong>, making Paper 1
      the critical paper for overall grade outcomes. The specification shares Edexcel's emphasis on
      <strong>"Reading as a Writer"</strong> — the principle that students should analyse how writers craft language
      for deliberate effect, rather than simply identifying techniques. Unlike the domestic Edexcel GCSE, the IGCSE
      has <strong>no spoken language endorsement</strong> — assessment is entirely through written examinations.
    </p>
    <p>
      This curriculum-aligned guide provides paper-by-paper breakdowns, complete set text study guides for the most
      commonly studied texts (Of Mice and Men, An Inspector Calls, Macbeth), poetry anthology revision material,
      mark scheme descriptors, grade boundary data, and targeted revision strategies. It is designed to support both
      independent revision and structured teaching programmes.
    </p>
  `,

  specCodes: [
    { subject: 'English Language A', code: '4EA1' },
    { subject: 'English Language B', code: '4EB1' },
    { subject: 'English Literature', code: '4ET1' },
    { subject: 'IAL English Language', code: 'YEN0' },
  ],

  // ─── Language Assessment Objectives ──────────────────────────────────────────
  languageAOs: [
    {
      code: 'AO1',
      description:
        'Read and understand a variety of texts, selecting and interpreting information, ideas and perspectives.',
      weighting: '~25%',
    },
    {
      code: 'AO2',
      description:
        'Understand and analyse how writers use linguistic and structural devices to achieve their effects, using relevant terminology to support their views.',
      weighting: '~25%',
    },
    {
      code: 'AO3',
      description:
        'Explore links and connections between writers\' ideas and perspectives, as well as how these are conveyed.',
      weighting: '~10%',
    },
    {
      code: 'AO4',
      description:
        'Communicate effectively and imaginatively, adapting form, tone and register for different purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion.',
      weighting: '~25%',
    },
    {
      code: 'AO5',
      description:
        'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '~15%',
    },
  ],

  // ─── Literature Assessment Objectives ────────────────────────────────────────
  literatureAOs: [
    {
      code: 'AO1',
      description:
        'A close knowledge of the content of the poetry anthology and the ability to refer to it in detail.',
      weighting: '~30%',
    },
    {
      code: 'AO2',
      description:
        'Understanding and analysis of how writers use linguistic, structural and presentational devices to achieve their effects, with appropriate use of terminology.',
      weighting: '~40%',
    },
    {
      code: 'AO4',
      description:
        'A personal and informed response to the poems studied, showing engagement with and understanding of the writers\' ideas and attitudes.',
      weighting: '~30%',
    },
  ],

  // ─── Language Papers ─────────────────────────────────────────────────────────
  languagePapers: [
    // ── Paper 1: Non-fiction Texts & Transactional Writing ──
    {
      title: 'Paper 1: Non-fiction Texts and Transactional Writing',
      code: '4EA1/01',
      time: '2 hours 15 minutes',
      marks: 90,
      weighting: '60%',
      textType: 'Non-fiction extracts (e.g. articles, letters, speeches, travel writing, autobiography)',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 45,
          questions: [
            {
              question: 'Q1 — Short-answer comprehension questions on a non-fiction extract',
              marks: 10,
              ao: 'AO1',
              skill: 'Information retrieval and inference',
              time: '10-12 minutes',
              advice:
                'Read the extract carefully before answering. These questions test your ability to locate explicit information and make simple inferences. Keep answers concise and use evidence from the text. Do not over-elaborate — a clear, precise answer with a short supporting reference is all that is needed. Budget no more than 12 minutes here to protect time for higher-tariff questions.',
            },
            {
              question: 'Q2 — Explain how the writer uses language and structure to achieve effects',
              marks: 10,
              ao: 'AO2',
              skill: 'Language and structure analysis',
              time: '12-15 minutes',
              advice:
                'Focus on specific word choices, imagery, and structural decisions. Embed short quotations and analyse the <em>effect</em> of each technique rather than simply naming it. The "Reading as a Writer" principle applies here — think about <em>why</em> the writer made these choices. Structure your response as a series of developed analytical points, each with embedded evidence and explored effect.',
            },
            {
              question: 'Q3 — Compare writers\' ideas and perspectives across two non-fiction texts',
              marks: 15,
              ao: 'AO1 + AO3',
              skill: 'Comparison and synthesis',
              time: '18-20 minutes',
              advice:
                'You must address <strong>both</strong> texts with equal depth. Structure your response comparatively — do not write about one text then the other. Identify similarities and differences in the writers\' viewpoints and the methods they use to convey them. Use connectives like "whereas", "similarly", "in contrast". This is the highest-tariff reading question — give it appropriate time and depth.',
            },
            {
              question: 'Q4 — Analyse how language is used in a specified section of the text',
              marks: 10,
              ao: 'AO2',
              skill: 'Close language analysis',
              time: '12-15 minutes',
              advice:
                'This question demands detailed, word-level analysis. Select precise quotations and explore connotations, figurative language, and tone. Avoid feature-spotting — every technique identified must be linked to its effect on the reader. Consider the writer\'s purpose and how individual word choices contribute to it.',
            },
          ],
        },
        {
          title: 'Section B: Transactional Writing',
          marks: 45,
          questions: [
            {
              question: 'Q5 — Transactional writing task (e.g. letter, article, speech, report, review)',
              marks: 20,
              ao: 'AO4 (15) + AO5 (5)',
              skill: 'Transactional writing',
              time: '25-30 minutes',
              advice:
                'Match form, audience, and purpose precisely. Use rhetorical techniques (tricolon, anaphora, direct address) with control. A strong opening and clear paragraphing are essential. Proofread for accuracy — AO5 marks reward correct spelling, punctuation, and grammar. Plan for 3 minutes before writing.',
            },
            {
              question: 'Q6 — Second transactional writing task (different form from Q5)',
              marks: 25,
              ao: 'AO4 (19) + AO5 (6)',
              skill: 'Transactional writing',
              time: '30-35 minutes',
              advice:
                'This is the higher-tariff writing question — allocate more time here than for Q5. Adapt your style confidently to the specified form. Demonstrate range — varied sentence structures, ambitious vocabulary, and conscious structural choices. Plan for 3-5 minutes before writing. Accuracy remains critical — leave 3 minutes for proofreading.',
            },
          ],
        },
      ],
    },

    // ── Paper 2: Poetry & Prose Texts & Imaginative Writing ──
    {
      title: 'Paper 2: Poetry and Prose Texts and Imaginative Writing',
      code: '4EA1/02',
      time: '1 hour 30 minutes',
      marks: 60,
      weighting: '40%',
      textType: 'Poetry from the Edexcel IGCSE anthology (45 poems across 6 clusters) + unseen poem',
      sections: [
        {
          title: 'Section A: Poetry',
          marks: 30,
          questions: [
            {
              question: 'Q1 — Respond to an unseen poem and compare it with a named poem from the anthology',
              marks: 30,
              ao: 'AO1 + AO2 + AO4',
              skill: 'Poetry analysis and comparison',
              time: '45 minutes',
              advice:
                'This question is the centrepiece of Paper 2 and the most challenging question on the IGCSE. You are given an unseen poem and asked to compare it with a named poem from the anthology. Read the unseen poem at least twice. Identify thematic and stylistic connections. Structure your response comparatively — weave analysis of both poems together rather than writing about them separately. AO2 is dominant: analyse language, form, and structure in both poems. Your anthology knowledge must be secure — you need to quote from memory. Aim for 4-5 developed comparative points.',
            },
          ],
        },
        {
          title: 'Section B: Imaginative Writing',
          marks: 30,
          questions: [
            {
              question: 'Q2 — Imaginative/creative writing from a choice of prompts',
              marks: 30,
              ao: 'AO4 (24) + AO5 (6)',
              skill: 'Imaginative/creative writing',
              time: '40-45 minutes',
              advice:
                'Choose the prompt that plays to your strengths. Plan for 5 minutes — a clear narrative arc or descriptive structure will score higher than unplanned writing. Use varied sentence lengths for effect, ambitious vocabulary, and conscious techniques (e.g. cyclical structure, symbolism, pathetic fallacy). Proofread carefully — AO5 rewards spelling and punctuation accuracy. Aim for quality over quantity: a shorter, carefully crafted piece always outscores a long, unfocused one.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Literature Papers (IGCSE Language A is Language-only; left empty) ──────
  literaturePapers: [],

  // ─── Mark Bands ──────────────────────────────────────────────────────────────
  markBands: [
    {
      level: 5,
      descriptor: 'Exceptional, Conceptualised',
      ao1: 'Assured, perceptive interpretation with judicious and precise textual references integrated fluently',
      ao2: 'Sophisticated analysis of writer\'s craft with precise, assured use of subject terminology; nuanced exploration of effects on the reader',
    },
    {
      level: 4,
      descriptor: 'Perceptive, Detailed',
      ao1: 'Critical, exploratory response demonstrating a secure understanding of the text with well-chosen references',
      ao2: 'Detailed analysis of writer\'s methods with confident use of relevant subject terminology; clear exploration of effects on the reader',
    },
    {
      level: 3,
      descriptor: 'Clear, Relevant',
      ao1: 'Clear, sustained response with effective use of references to support interpretation',
      ao2: 'Clear explanation of writer\'s methods with appropriate use of subject terminology; clear understanding of effects on the reader',
    },
    {
      level: 2,
      descriptor: 'Supported, Some',
      ao1: 'Some understanding demonstrated with references used to support a range of statements',
      ao2: 'Some identification and comment on writer\'s methods with some use of subject terminology; some reference to effect on the reader',
    },
    {
      level: 1,
      descriptor: 'Simple, Limited',
      ao1: 'Simple, limited comment with occasional references that rarely support interpretation',
      ao2: 'Simple awareness of writer\'s methods with limited use of subject terminology; little or no reference to effect',
    },
  ],

  // ─── Grade Boundaries ────────────────────────────────────────────────────────
  gradeBoundaries: [
    {
      year: '2025 (4EA1)',
      max: 150,
      grade9: 127,
      grade8: 118,
      grade7: 109,
      grade6: 97,
      grade5: 85,
      grade4: 74,
    },
    {
      year: '2024 (4EA1)',
      max: 150,
      grade9: 125,
      grade8: 116,
      grade7: 107,
      grade6: 95,
      grade5: 84,
      grade4: 73,
    },
    {
      year: '2023 (4EA1)',
      max: 150,
      grade9: 123,
      grade8: 114,
      grade7: 105,
      grade6: 93,
      grade5: 82,
      grade4: 71,
    },
  ],

  // ─── Examiner Tips ───────────────────────────────────────────────────────────
  examinerTips: [
    {
      question: 'Paper 1, Q1 — Retrieval and Inference',
      tips: [
        'These are the most straightforward marks on the paper. Keep answers concise — one clear point with a brief textual reference per mark.',
        'Read the question carefully — "identify" means find it in the text; "explain" means make an inference beyond the surface meaning.',
        'Do not waste time over-elaborating. Efficiency here protects time for the higher-tariff questions that follow.',
        'If the question asks for a specific number of points (e.g. "Give two reasons"), ensure you provide exactly that number.',
      ],
    },
    {
      question: 'Paper 1, Q2 — Language and Structure Analysis',
      tips: [
        'Focus on specific word choices, imagery, and structural decisions. Embed short quotations within your sentences.',
        'Analyse the <em>effect</em> of techniques — naming a metaphor without exploring its impact will not access the higher mark bands.',
        'Consider structural features: how does the opening engage the reader? How does the writer build or shift the argument? How does the conclusion reinforce the message?',
        'The "Reading as a Writer" principle is key: think about <em>why</em> the writer made these choices, not just <em>what</em> they did.',
      ],
    },
    {
      question: 'Paper 1, Q3 — Comparison of Writers\' Ideas and Perspectives',
      tips: [
        'This is the highest-tariff reading question (15 marks). Give it proportionate time and depth.',
        'Structure comparatively from the outset — do not write about one text then the other.',
        'Address both <em>ideas</em> (what the writers think) and <em>perspectives</em> (how they convey those ideas through language and structure).',
        'Examiners consistently report that weaker responses focus too heavily on one text. Ensure genuine balance across both sources.',
        'Use comparative connectives throughout: "whereas", "similarly", "in contrast", "both writers", "unlike Text A, the writer of Text B".',
      ],
    },
    {
      question: 'Paper 1, Q4 — Close Language Analysis',
      tips: [
        'This question targets a specified section of the text — read only that section carefully and select precise quotations.',
        'Explore connotations of individual words. The strongest responses analyse at word level, not just sentence or paragraph level.',
        'Consider tone and how it is created through language choices.',
        'Avoid feature-spotting: every technique identified must be linked to its effect on the reader and/or the writer\'s purpose.',
      ],
    },
    {
      question: 'Paper 1, Q5 and Q6 — Transactional Writing',
      tips: [
        'Q6 carries more marks than Q5 (25 vs. 20) — allocate your time accordingly and do not rush the second task.',
        'Match the conventions of the specified form precisely. A speech should use rhetorical devices and direct address; a letter needs appropriate opening/closing; an article needs a headline and subheading.',
        'Accuracy is heavily rewarded. Proofread every response — common errors in spelling, apostrophes, and sentence demarcation cost marks across both AO4 and AO5.',
        'Plan before you write. A well-structured response with a clear opening, developed middle, and purposeful conclusion will always outscore a longer but rambling answer.',
        'Demonstrate range: varied sentence structures (short sentences for impact, complex sentences for nuance), ambitious vocabulary, and conscious paragraphing.',
      ],
    },
    {
      question: 'Paper 2, Section A — Poetry Comparison',
      tips: [
        '<strong>This is the single most challenging question on the IGCSE.</strong> You must analyse an unseen poem and compare it with a named anthology poem — all from memory.',
        'Read the unseen poem at least twice before writing. Annotate it for key techniques, tone, and themes.',
        'Your anthology knowledge must be secure. You need to quote from the named poem from memory — vague paraphrasing will not access the higher mark bands.',
        'Structure comparatively throughout. The strongest responses weave analysis of both poems together, using connectives such as "similarly", "in contrast", "both poets employ".',
        'AO2 dominates — focus on <em>how</em> poets use language, form, and structure rather than simply <em>what</em> the poems are about.',
        'Aim for 4-5 developed comparative points rather than many superficial ones.',
      ],
    },
    {
      question: 'Paper 2, Section B — Imaginative Writing',
      tips: [
        'Choose the prompt that allows you to demonstrate your best writing. If you are stronger at narrative, choose a story prompt; if descriptive writing is your strength, choose accordingly.',
        'Conscious crafting scores higher than length. A shorter, carefully structured piece with deliberate language choices will outscore a long, unfocused response.',
        'Use techniques you have studied in the poetry anthology — imagery, symbolism, varied sentence structures, shifts in tone — to elevate your own writing.',
        'Leave 3-5 minutes to proofread. AO5 accuracy marks are the easiest to secure and the easiest to lose through carelessness.',
        'Plan a clear structure: for narrative, think beginning-complication-climax-resolution; for description, think spatial or temporal progression with a controlling mood.',
      ],
    },
    {
      question: 'General — Anthology Revision Strategy',
      tips: [
        'With 45 poems across 6 clusters, you cannot afford to revise selectively. The named poem in the exam could come from any cluster.',
        'Create a revision grid: for each poem, note the poet, era, key themes, form/structure, 2-3 key quotations, and a top comparison partner.',
        'Practise writing comparative paragraphs under timed conditions — aim for a developed comparison point in 8-10 minutes.',
        'Group poems thematically across clusters (e.g. all poems about loss, all poems using nature imagery) to build flexible comparison skills.',
        'Test yourself regularly: pick a random poem and write down 3 quotations from memory. If you cannot, that poem needs more revision.',
      ],
    },
    {
      question: 'General — Time Management',
      tips: [
        'Paper 1 is 2 hours 15 minutes for 90 marks. Budget roughly 1.5 minutes per mark: ~55 minutes for reading, ~65 minutes for writing, ~15 minutes for planning and checking.',
        'Paper 2 is 1 hour 30 minutes for 60 marks. Budget ~45 minutes for the poetry question and ~45 minutes for the writing task.',
        'The most common examiner complaint is incomplete responses. Pace yourself and ensure every question receives a full answer.',
        'Set checkpoint times at the start of each paper. Write them on the question paper so you can monitor your progress.',
      ],
    },
  ],

  // ─── Set Texts ───────────────────────────────────────────────────────────────
  setTexts: [
    ofMiceAndMenGuide,
    anInspectorCallsGuide,
    macbethGuide,
  ],

  // ─── Key Changes ─────────────────────────────────────────────────────────────
  keyChanges: [
    {
      year: '2017',
      change:
        'Pearson confirmed 9-1 grading for all Edexcel International GCSEs, replacing the legacy A*-G scale. First teaching of the revised 4EA1 specification began.',
    },
    {
      year: '2019',
      change:
        'The IGCSE English Language A specification (4EA1) was revised with updated anthology content and a move to the 9-1 grading scale, aligning with the domestic GCSE reform.',
    },
    {
      year: '2024',
      change:
        'Updated poetry anthology with refreshed selection across all six clusters, maintaining the 45-poem structure but introducing several new contemporary voices.',
    },
  ],

  // ─── Poetry Anthology (representative selection across all 6 clusters) ──────
  poems: [
    // ── Cluster 1: Culture and Identity ──
    {
      title: 'Search For My Tongue',
      poet: 'Sujata Bhatt',
      era: 'Contemporary',
      themes: ['Cultural identity', 'Language', 'Belonging', 'Displacement'],
      topComparison: 'Half-Caste',
      formAnalysis:
        'Bilingual poem incorporating Gujarati script. The extended metaphor of the tongue as a plant — dying, then regrowing — enacts the poem\'s central argument about the resilience of mother tongue.',
      keyQuotation: '"I thought I spit it out / but overnight while I dream, / it grows back"',
    },
    {
      title: 'Half-Caste',
      poet: 'John Agard',
      era: 'Contemporary',
      themes: ['Racial identity', 'Prejudice', 'Language and labelling', 'Humour as resistance'],
      topComparison: 'Search For My Tongue',
      formAnalysis:
        'Caribbean dialect and phonetic spelling challenge Standard English conventions. The poem\'s structure — a series of absurd hypotheticals — dismantles the logic of the term "half-caste" through reductio ad absurdum.',
      keyQuotation: '"Explain yuself / wha yu mean / when yu say half-caste"',
    },

    // ── Cluster 2: Belonging ──
    {
      title: 'Piano',
      poet: 'D. H. Lawrence',
      era: '20th Century',
      themes: ['Nostalgia', 'Childhood', 'Memory', 'Loss of innocence'],
      topComparison: 'Once Upon a Time',
      formAnalysis:
        'Three quatrains with a regular AABB rhyme scheme. The musical imagery (piano, singing) mirrors the poem\'s exploration of how sound triggers involuntary memory.',
      keyQuotation: '"In spite of myself, the insidious mastery of song / Betrays me back"',
    },
    {
      title: 'Once Upon a Time',
      poet: 'Gabriel Okara',
      era: '20th Century',
      themes: ['Authenticity vs. performance', 'Colonialism', 'Loss of innocence', 'Father-child bond'],
      topComparison: 'Piano',
      formAnalysis:
        'Seven stanzas of free verse with a conversational, confessional tone. The father addresses his son directly, creating an intimate dramatic monologue that shifts from cynicism to hope.',
      keyQuotation: '"So show me, son, / how to laugh; show me how / I used to laugh and smile"',
    },

    // ── Cluster 3: Conflict ──
    {
      title: 'The Class Game',
      poet: 'Mary Casey',
      era: 'Contemporary',
      themes: ['Class division', 'Social prejudice', 'Identity', 'Defiance'],
      topComparison: 'Half-Caste',
      formAnalysis:
        'Confrontational dramatic monologue in colloquial, working-class dialect. Rhetorical questions drive the poem\'s challenge to class-based assumptions. The irregular form mirrors the speaker\'s raw energy.',
      keyQuotation: '"How can you tell what class I\'m from? / Can you tell what class I\'m from?"',
    },
    {
      title: 'Exposure',
      poet: 'Wilfred Owen',
      era: 'World War I',
      themes: ['Suffering', 'Futility of war', 'Nature as enemy', 'Hopelessness'],
      topComparison: 'Dulce et Decorum Est',
      formAnalysis:
        'Eight stanzas of pararhyme (half-rhyme) with a shortened final line in each stanza, creating a sense of incompleteness and exhaustion. The present tense places the reader in the trenches.',
      keyQuotation: '"But nothing happens" — the refrain that encapsulates the futile waiting',
    },

    // ── Cluster 4: War and its Aftermath ──
    {
      title: 'Dulce et Decorum Est',
      poet: 'Wilfred Owen',
      era: 'World War I',
      themes: ['Horror of war', 'Propaganda', 'Suffering', 'Truth vs. lies'],
      topComparison: 'Exposure',
      formAnalysis:
        'Loosely sonnet-like structure subverted by the horror of its content. The shift from exhausted march to gas attack to bitter address demonstrates masterful structural control. Iambic pentameter fragments under the violence.',
      keyQuotation: '"If you could hear, at every jolt, the blood / Come gargling from the froth-corrupted lungs"',
    },
    {
      title: 'War Photographer',
      poet: 'Carol Ann Duffy',
      era: 'Contemporary',
      themes: ['Conflict', 'Guilt', 'Apathy', 'Suffering vs. comfort'],
      topComparison: 'Poppies',
      formAnalysis:
        'Four regular sestets with a near-rhyme scheme. The controlled form mirrors the photographer\'s professional detachment, while the content reveals his inner turmoil.',
      keyQuotation: '"A hundred agonies in black and white / from which his editor will pick out five or six"',
    },

    // ── Cluster 5: Time and Place ──
    {
      title: 'Ozymandias',
      poet: 'Percy Bysshe Shelley',
      era: 'Romantic',
      themes: ['Power and its transience', 'Hubris', 'Art vs. time', 'Empire'],
      topComparison: 'London',
      formAnalysis:
        'Irregular sonnet with an unusual rhyme scheme that breaks from both Petrarchan and Shakespearean conventions — the fractured form mirrors the shattered statue it describes.',
      keyQuotation: '"Look on my Works, ye Mighty, and despair! / Nothing beside remains"',
    },
    {
      title: 'London',
      poet: 'William Blake',
      era: 'Romantic',
      themes: ['Oppression', 'Poverty', 'Corruption', 'Social injustice'],
      topComparison: 'Ozymandias',
      formAnalysis:
        'Four quatrains with an ABAB rhyme scheme. The relentless regularity mirrors the inescapable systems of control the speaker observes. Anaphora of "In every" hammers the universality of suffering.',
      keyQuotation: '"In every cry of every Man, / In every Infant\'s cry of fear"',
    },

    // ── Cluster 6: The Natural World ──
    {
      title: 'Hawk Roosting',
      poet: 'Ted Hughes',
      era: '20th Century',
      themes: ['Power', 'Nature', 'Violence', 'Control', 'God complex'],
      topComparison: 'Ozymandias',
      formAnalysis:
        'Six quatrains of free verse spoken in the hawk\'s voice — a dramatic monologue of absolute authority. The lack of enjambment and end-stopped lines reflect the hawk\'s total self-assurance.',
      keyQuotation: '"I kill where I please because it is all mine"',
    },
    {
      title: 'Storm on the Island',
      poet: 'Seamus Heaney',
      era: 'Contemporary',
      themes: ['Nature\'s power', 'Fear', 'Vulnerability', 'Community resilience'],
      topComparison: 'Exposure',
      formAnalysis:
        'Blank verse (unrhymed iambic pentameter) in a single stanza. The conversational opening ("We are prepared") gives way to increasingly violent imagery as the storm asserts its dominance.',
      keyQuotation: '"It is a huge nothing that we fear"',
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    'Largest poetry anthology of any English qualification at this level — 45 poems across 6 thematic clusters (Culture and Identity, Belonging, Conflict, War and its Aftermath, Time and Place, The Natural World)',
    'International curriculum designed for British schools overseas, international schools, and independent schools — recognised globally alongside domestic GCSEs',
    'No spoken language endorsement — assessment is entirely through written examinations, simplifying the qualification structure',
    'Shares the Edexcel "Reading as a Writer" philosophy with the domestic specification — students are expected to analyse how writers craft language for deliberate effect, not simply identify techniques',
    'Paper 2 poetry question requires comparison of an unseen poem with a named anthology poem, demanding both flexible analytical skills and secure memorisation of the anthology',
    'Two transactional writing tasks on Paper 1 (unlike some boards which offer only one), testing adaptability across different forms, audiences, and purposes',
    'Graded 9-1, fully aligned with the domestic GCSE grading scale, ensuring equivalence in university and employer recognition',
    'The 60/40 paper weighting heavily favours Paper 1 — strategic revision should prioritise non-fiction reading and transactional writing skills',
    'Comprehensive set text study guides available for the most commonly examined texts: Of Mice and Men, An Inspector Calls, and Macbeth',
    'Curriculum-aligned guide includes revision strategies, exam technique mnemonics (PEEL, FAP, SMILE, DAFOREST), and common pitfall analysis',
    'IAL English Language (YEN0) pathway available for post-IGCSE study with a 50/50 exam-coursework split across four modular units',
  ],
};

// ─── Re-export everything for convenience ─────────────────────────────────────
export {
  type BoardExamGuide,
  type SetTextAnalysis,
  type GenericOverview,
};
