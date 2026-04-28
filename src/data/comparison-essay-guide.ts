// @ts-nocheck
export interface ComparisonGuide {
  id: string
  title: string
  board: string
  textPair: [string, string]
  themes: string[]
  comparisonPoints: Array<{
    point: string
    text1Evidence: string
    text2Evidence: string
    analysis: string
  }>
  modelEssay: string
  structureTemplate: string
  connectives: string[]
}

const guide1: ComparisonGuide = {
  id: 'aqa-power-conflict-1',
  title: 'Power & Conflict: Ozymandias vs The Prelude',
  board: 'AQA',
  textPair: ['Ozymandias - Shelley', 'The Prelude - Wordsworth'],
  themes: ['Power and its downfall', 'Human insignificance', "Nature's dominance"],
  comparisonPoints: [
    {
      point: 'Pride and humbling power',
      text1Evidence:
        'My name is Ozymandias, king of kings; / Look on my Works, ye Mighty, and despair!',
      text2Evidence: 'It was an act of stealth / And troubled pleasure',
      analysis:
        "Both poems open with human pride that will be humbled by a greater force. Shelley's tyrant boasts of dominion; Wordsworth's young speaker takes the boat with arrogant confidence. The 'troubled pleasure' oxymoron already hints at the moral weight nature will assert.",
    },
    {
      point: "Nature's supremacy and the sublime",
      text1Evidence: 'The lone and level sands stretch far away',
      text2Evidence:
        'a huge peak, black and huge, / As if with voluntary power instinct, / Upreared its head',
      analysis:
        "Both subordinate human power to nature. Shelley's desert silently obliterates empire; Wordsworth's mountain actively rises and pursues, embodying the Romantic sublime — Burke's union of awe and terror. Shelley shows nature's slow erasure of pride; Wordsworth shows its sudden, conscious assertion.",
    },
    {
      point: 'Pursuit and consequence',
      text1Evidence: 'Look on my Works, ye Mighty, and despair! / Nothing beside remains',
      text2Evidence: 'Strode after me',
      analysis:
        "Ozymandias's commanding inscription is undercut by ruin: pride is followed by oblivion. Wordsworth's mountain literally strides after the boy, the short sentence ('Strode after me.') enacting nature's relentless answer to transgression. In both, an attempt at mastery is met by an irresistible counter-force.",
    },
    {
      point: 'Lasting impact on the mind / world',
      text1Evidence: 'Two vast and trunkless legs of stone / Stand in the desert',
      text2Evidence: 'dim and undetermined sense / Of unknown modes of being',
      analysis:
        'Shelley leaves a fragmented, decaying monument as the only trace of empire. Wordsworth records a permanent psychological aftermath — the mind reshaped by the sublime encounter. Both depict aftermaths that outlast the original act, but one is material decay, the other interior transformation.',
    },
    {
      point: 'Voice and perspective',
      text1Evidence: 'I met a traveller from an antique land',
      text2Evidence: 'One summer evening (led by her) I found / A little boat',
      analysis:
        "Shelley uses a triple frame (poet, traveller, statue) to distance the reader from the tyrant's claim. Wordsworth uses first-person retrospective ('I found'), inviting intimate identification. Both choices ultimately diminish the human ego — Shelley by surrounding it with sceptical voices, Wordsworth by exposing its smallness against the mountain.",
    },
  ],
  modelEssay:
    "Both Shelley's 'Ozymandias' and Wordsworth's 'The Prelude' (1850, AQA's prescribed posthumous version) explore power through human limitation and nature's supremacy, yet reach divergent conclusions about pride, transgression and consequence. While Shelley presents human power as inherently futile, doomed to material decay, Wordsworth dramatises a Romantic sublime in which nature actively educates the youthful self. Both subordinate human achievement to natural forces, but the mode of subordination differs sharply. Shelley's critique operates through bitter irony: the colossal statue intended as an eternal monument stands as pathetic ruins, the inscribed command 'Look on my Works, ye Mighty, and despair!' becoming an unintended warning about power's futility. Wordsworth's young speaker, by contrast, embarks on his boat in 'an act of stealth / And troubled pleasure'; the oxymoron already concedes guilt, and nature responds in propria persona. The 'huge peak, black and huge, / As if with voluntary power instinct, / Upreared its head' — the repetition of 'huge' and the personifying verb 'upreared' enact the Burkean sublime, awe fused with terror. The mountain 'Strode after me' — a startling short sentence that mirrors the relentless pursuit of conscience. Both poets employ nature as a supreme power that exposes human pride. In Shelley, the desert exists indifferently, making human monuments seem absurdly temporary. Wordsworth's nature is not indifferent but actively instructive, leaving the speaker with a 'dim and undetermined sense / Of unknown modes of being'. The psychological aftermath of the 'spot of time' is what endures. Whereas Shelley's poem leaves us only with material wreckage, Wordsworth leaves us with a mind permanently altered by a single sublime encounter. In conclusion, both poets critique human power through encounter with superior forces, but their visions diverge: Shelley's is tragic and material — pride is doomed because ambition clashes with indifferent vastness; Wordsworth's is redemptive and spiritual — pride is transformed through the sublime, fixed in memory and poetry.",
  structureTemplate:
    'Para 1: Intro with thesis. Para 2-6: Develop one comparison point per paragraph with evidence from both texts. Para 7: Conclusion synthesizing main points.',
  connectives: [
    'Similarly',
    'In contrast',
    'Both poets',
    'Unlike',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'Whereas',
  ],
}

const guide2: ComparisonGuide = {
  id: 'aqa-love-relationships-1',
  title: "Love & Relationships: Love's Philosophy vs Porphyria's Lover",
  board: 'AQA',
  textPair: ["Love's Philosophy - Shelley", "Porphyria's Lover - Browning"],
  themes: ['Union and separation', 'Control and autonomy', 'Persuasion and force'],
  comparisonPoints: [
    {
      point: 'Argument for union',
      text1Evidence: 'The fountains mingle with the river / And the rivers with the ocean',
      text2Evidence: 'And all her yellow hair displaced',
      analysis:
        'Shelley presents philosophical argument for union through natural imagery. Browning acts unilaterally through physical control. Shelley asks; Browning commands. Similar desires manifest as persuasion versus coercion.',
    },
    {
      point: "Beloved's agency",
      text1Evidence: "What is all the world's wealth with love?",
      text2Evidence: 'Porphyria worshipped me',
      analysis:
        "Shelley addresses beloved directly, trusting her to reflect and agree. Browning's Porphyria is silent, described rather than heard. Shelley preserves beloved's agency; Browning eliminates independence through violent control.",
    },
    {
      point: 'Permanence',
      text1Evidence: 'Why not I with thine?',
      text2Evidence: 'And thus we sat together all the night / Long, and never moved again',
      analysis:
        'Shelley seeks renewable union. Browning achieves permanent union through death. One imagines partnership; one seeks possession through making beloved immobile.',
    },
    {
      point: "Violence's presence",
      text1Evidence: "All things by a law divine / In one another's being mingle",
      text2Evidence: 'I wound a yellow string about her throat',
      analysis:
        'Shelley contains only argument; Browning climaxes in violence. Unresolved desire manifests differently—trust in persuasion versus resort to control.',
    },
    {
      point: 'Truth and deception',
      text1Evidence: 'Each to each a world, becoming / Portion of each other',
      text2Evidence: 'She worshipped me',
      analysis:
        "Shelley maintains realism acknowledging beloved's independence. Browning employs self-deception reframing murder as love preservation. Different attitudes toward truth and autonomy.",
    },
  ],
  modelEssay:
    "Shelley's 'Love's Philosophy' and Browning's 'Porphyria's Lover' both examine desire for complete union yet approach through fundamentally opposed methods with radically different moral implications. While Shelley presents love as mutual philosophy requiring persuasion and agreement, Browning presents it as absolute demand requiring control and violence. This reveals opposing responses to love's fundamental tension: the desire for permanent union versus the beloved's independent existence. Shelley resolves through rational argument and trust; Browning through possession and murder. These responses illuminate the ethics of love and the line between persuasion and coercion. Shelley's poem structures as rational argument using nature as evidence. The speaker observes that separation is unnatural in nature and applies this to human application: if nature requires mingling, why should the beloved remain separate? This treats the beloved as capable of reasoning. Browning's lover takes unilateral action, strangling Porphyria to achieve permanent union. The assertion that she 'worshipped me' is presented without evidence; Porphyria remains silent. Where Shelley seeks agreement, Browning asserts possession. The difference in treating agency is crucial. Shelley addresses beloved directly, treating her as intelligent being capable of responding. Browning's poem contains no openness. Porphyria's silence leaves her experience unknown, allowing interpretation according to speaker's desires. Both poems explore tension between desire and temporal reality. Shelley's argument acknowledges time implicitly: union must be renewed through ongoing mingling. Browning arrests time through death, achieving eternal moment but at beloved's life cost. The absence of violence in Shelley contrasts sharply with Browning's violence, emerging precisely because he cannot trust persuasion. In conclusion, both poets address love's paradox: how to achieve union with a being whose independence is both attractive and threatening. Shelley's optimism about persuasion and Browning's resort to violence reveal opposing beliefs about whether love can exist with genuine autonomy.",
  structureTemplate:
    'Para 1: Intro with thesis. Para 2-6: Compare each point with evidence. Para 7: Conclusion.',
  connectives: [
    'Similarly',
    'Both poems',
    'While',
    'In contrast',
    'Yet both',
    'Unlike',
    'On the other hand',
    'Significantly',
  ],
}

const guide3: ComparisonGuide = {
  id: 'aqa-power-conflict-2',
  title: 'Power & Conflict: London vs Charge of the Light Brigade',
  board: 'AQA',
  textPair: ['London - Blake', 'Charge of the Light Brigade - Tennyson'],
  themes: ['Institutional power', 'Powerlessness', 'War and violence'],
  comparisonPoints: [
    {
      point: 'Power structure',
      text1Evidence: 'I wander through each chartered street',
      text2Evidence: 'Theirs not to make reply, / Theirs not to reason why',
      analysis:
        "Blake attacks systematic chartering of London's control; Tennyson presents military hierarchy. Both reveal how authority neutralizes freedom and agency.",
    },
    {
      point: 'Victimization',
      text1Evidence: "How the Chimney-sweeper's cry / Every blackening Church appals!",
      text2Evidence: 'Rode the six hundred. / Into the valley of Death',
      analysis:
        'Blake shows systemic suffering of exploited children; Tennyson shows military sacrifice. Both present victims of power, though Blake emphasizes economic exploitation while Tennyson emphasizes military futility.',
    },
    {
      point: 'Inevitability',
      text1Evidence: 'And blights with plagues the Marriage hearse',
      text2Evidence: 'All in the valley of Death / Rode the six hundred',
      analysis:
        "Blake's disease metaphors show corruption pervades institutions; Tennyson presents suicidal charge as inevitable. Both suggest once power structures exist, individuals cannot escape.",
    },
    {
      point: 'Authority',
      text1Evidence: "The mind-forg'd manacles I hear",
      text2Evidence: 'Into the jaws of Death',
      analysis:
        "Blake emphasizes psychological internalization; Tennyson questions blind obedience. Different manifestations of power's grip.",
    },
    {
      point: 'Spatial control',
      text1Evidence: "'Chartered' Thames / 'Chartered' streets",
      text2Evidence: 'Cannon to right of them, / Cannon to left of them',
      analysis:
        "Blake's systematic control; Tennyson's military confinement. Both employ spatial imagery showing how power constrains.",
    },
  ],
  modelEssay:
    "Blake's 'London' and Tennyson's 'Charge of the Light Brigade' present contrasting critiques of institutional power and individual powerlessness. While Blake exposes systemic, invisible urban exploitation, Tennyson critiques visible military dimensions of authority. Both use powerlessness as central concern, yet Blake emphasizes psychological internalization while Tennyson emphasizes military hierarchy and doom. The comparison reveals two complementary perspectives on power operation: as ubiquitous invisible system and as direct hierarchical command. Blake presents power as totalizing system controlling every dimension of human experience. The repeated word 'chartered' establishes that even public spaces are owned, controlled, systematized. The speaker 'wanders' through streets that should be free yet finds them regulated. Control extends to human relationships: marriage becomes 'Marriage hearse,' procreation becomes plague. Blake shows power not as crude force but as pervasive infrastructure making suffering seem inevitable. The 'mind-forg'd manacles' suggest power works through psychological internalization, through people's acceptance of their own constraint. Tennyson presents power as direct military command within transparent hierarchy. Soldiers have clear orders: 'Theirs not to make reply, / Theirs not to reason why.' Unlike Blake's systemic oppression internalized invisibly, Tennyson shows explicit command structures where obedience is demanded and enforced. The repeated refrain 'Rode the six hundred' emphasizes mechanical repetitive obedience. Soldiers know they ride into doom—'Into the valley of Death'—yet they go anyway. Both poets use suffering as evidence of power's destructiveness. Blake presents chimney-sweeps, young harlots, soldiers as victims of different systems. Tennyson presents soldiers as victims of military miscalculation. Blake distributes suffering across systems; Tennyson concentrates it on catastrophic moment. In conclusion, both examine how power operates and its costs, though they frame operations differently.",
  structureTemplate: 'Para 1: Intro. Para 2-6: Compare key points. Para 7: Conclusion.',
  connectives: [
    'Similarly',
    'Both poems',
    'While',
    'In contrast',
    'Yet both',
    'The key difference',
    'Unlike',
    'On the other hand',
  ],
}

const guide4: ComparisonGuide = {
  id: 'aqa-love-relationships-2',
  // BOARD-ISOLATION NOTE: This is a cross-board comparison. "First Love" by John Clare is NOT on the
  // AQA Love & Relationships anthology — it appears in pre-1914 collections used by Eduqas and
  // some legacy specs. "Walking Away" by C. Day-Lewis IS on the AQA Love & Relationships cluster.
  // Title and textPair updated to make the cross-board pairing explicit so students don't assume
  // both poems are AQA anthology poems.
  title: 'Love & Relationships: First Love (pre-1914 / Eduqas) vs Walking Away (AQA L&R)',
  board: 'Cross-board (AQA + Eduqas/pre-1914)',
  textPair: [
    'First Love - John Clare (pre-1914 / Eduqas anthology)',
    'Walking Away - C. Day-Lewis (AQA Love & Relationships)',
  ],
  themes: ['Sudden versus gradual love', 'Loss and separation', 'Growth and independence'],
  comparisonPoints: [
    {
      point: 'Temporal experience',
      text1Evidence: "I ne'er was struck before that hour / With love so sudden and so sweet",
      text2Evidence: 'It is eighteen years ago, almost to the day',
      analysis:
        'Clare presents sudden immediate love; Day-Lewis presents retrospective understanding. Different ways of knowing love emerge from temporal positioning.',
    },
    {
      point: 'Physical manifestation',
      text1Evidence: 'My face turned pale, a deadly pale, / My legs refused to walk away',
      text2Evidence: 'the pathos of a half-fledged thing set free / Into a wilderness',
      analysis:
        "Clare's love produces physical disorientation; Day-Lewis's produces a visual image of vulnerability. Both disrupt ordinary consciousness differently.",
    },
    {
      point: "Loss's nature",
      text1Evidence: 'My heart has left its dwelling-place / And can return no more',
      text2Evidence: 'love is proved in the letting go',
      analysis:
        'Clare presents unrelenting sorrow; Day-Lewis understands separation as necessary and redemptive. Time transforms grief into acceptance.',
    },
    {
      point: 'Independence',
      text1Evidence: 'I never saw so sweet a face / As that I stood before',
      text2Evidence: 'How selfhood begins with a walking away',
      analysis:
        "Clare experiences absence as loss; Day-Lewis understands child's independence as necessary. Different views of absence in love.",
    },
    {
      point: 'Redemption',
      text1Evidence: "Are flowers the winter's choice? / Is love's bed always snow?",
      text2Evidence: 'love is proved in the letting go',
      analysis:
        "Clare questions love's justification; Day-Lewis achieves redemptive perspective. Maturity enables recognition that separation serves growth.",
    },
  ],
  modelEssay:
    "John Clare's 'First Love' and C. Day-Lewis's 'Walking Away' (1956) both explore love through loss and separation, yet examine different forms across different life stages. While Clare presents sudden shocking romantic love interrupted by loss, Day-Lewis (UK Poet Laureate 1968-72) presents parental love gradually understood as requiring child's independence. Both locate love's truth in absence rather than presence, yet Clare treats loss as tragedy while Day-Lewis moves toward understanding it as necessary and redemptive. The comparison illuminates how retrospective understanding transforms grief into acceptance. Clare's poem captures sudden physical shock of romantic awakening. The lover is 'struck' before awareness, suggesting love precedes consciousness and overwhelms rational thought. Physical symptoms are unmistakable: pallor, inability to walk, disorientation. This is romantic love in its most stereotypical, visceral form. The girl herself remains largely absent; she is significant primarily as cause of speaker's transformation. The poem emphasizes subjective experience rather than loved one's reality or agency. Day-Lewis presents different kind of love extending over eighteen years grounded in observation. The speaker watches his son walk away, and the poem's power lies in visual precision: 'how I watched the grey shrink of his jacket / Narrowing and thinning to an end.' The specificity contrasts with Clare's generalizations. The temporal frame allows understanding: eighteen years enable recognition of leaving as 'the first and only gift.' Both present love as disorienting. Clare's is immediate and physical—legs refusing to walk. Day-Lewis's is visual and temporal: the image of departing figure. Both represent love disrupting ordinary consciousness. Both present love as producing fixation—on the girl in Clare's case, on the walking-away in Day-Lewis's. The treatment of pain differs significantly. Clare presents love's loss as unrelenting sorrow with no redemption, no growth, only sustained suffering. Day-Lewis presents different pain: anxiety of separation, unknown future, but eventual understanding that separation is necessary. In conclusion, Clare and Day-Lewis present complementary perspectives on love through mechanism of loss and separation.",
  structureTemplate: 'Para 1: Intro. Para 2-6: Compare points. Para 7: Conclusion.',
  connectives: [
    'Similarly',
    'Both poems',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Unlike',
  ],
}

const guide5: ComparisonGuide = {
  id: 'aqa-power-conflict-3',
  // BOARD-ISOLATION NOTE: "My Last Duchess" IS on the AQA Power & Conflict anthology. "The Pied Piper
  // of Hamelin" is NOT on any GCSE poetry anthology — it is included here as a wider-reading
  // companion piece by the same author (Browning), useful for thematic comparison work but NOT for
  // the AQA Paper 2 Section B anthology question. Title and textPair updated to make this clear.
  title:
    'Power & Conflict (wider-reading companion): My Last Duchess (AQA P&C) vs The Pied Piper of Hamelin (Browning, off-anthology)',
  board: 'AQA P&C + off-anthology Browning',
  textPair: [
    'My Last Duchess - Browning (AQA Power & Conflict)',
    'The Pied Piper of Hamelin - Browning (off-anthology / wider reading)',
  ],
  themes: ['Abuse of power', 'Control and dominion', 'Consequences of authority'],
  // NOTE: Unverified "Pied Piper of Hamelin" quotations replaced with structural commentary (Option B) to avoid putting fabricated words in Browning's mouth. My Last Duchess lines retained as verified.
  comparisonPoints: [
    {
      point: 'Control through suppression',
      text1Evidence: 'This grew; I gave commands; / Then all smiles stopped together',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Both present power achieved through silencing others. The Duke uses imperatives to stop the Duchess's smiles; in Browning's narrative poem, the corporation of Hamelin is presented as a body that silences and dismisses the Piper's claim. Power manifests as preventing response.",
    },
    {
      point: 'Arrogance and consequence',
      text1Evidence: 'She had a heart—how shall I say?—too soon made glad',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Both powerful figures underestimate those they dominate. The Duke misreads the Duchess's openness as a flaw; the Mayor and Corporation misread the Piper as a contemptible outsider. Browning shows arrogance leading directly to catastrophic consequence.",
    },
    {
      point: 'Violation and theft',
      text1Evidence: 'I choose / Never to stoop',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "The Duke refuses to lower himself to communicate, taking the Duchess's life rather than negotiate; the Piper enforces his bargain by taking the children when the Mayor refuses to pay. Browning structures both poems around an act of taking that follows refusal to engage.",
    },
    {
      point: 'Language and power',
      text1Evidence: 'I gave commands; / Then all smiles stopped together',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "The Duke's authority is expressed through pure command; the Piper's authority is expressed through music that compels the rats and then the children. Browning contrasts spoken decree with non-verbal sound, but both forms of utterance produce irresistible obedience.",
    },
    {
      point: 'Justice and retribution',
      text1Evidence: 'I gave commands; / Then all smiles stopped together / There she stands',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Both poems show power confronted by consequence. The Duke's monologue inadvertently exposes his crime to the envoy; the Mayor's broken promise to the Piper leads to the loss of Hamelin's children. Browning frames retribution as the inevitable counter-movement to abuse.",
    },
  ],
  modelEssay:
    "Though both by Browning, 'My Last Duchess' and 'The Pied Piper of Hamelin' explore power's corruption and its inevitable consequences. The duke exercises intimate patriarchal power over his wife through control and murder; the mayor exercises civic authority while ignoring urgent need. The Piper represents superior power emerging to punish the mayor's arrogance and injustice. Both texts suggest that unchecked power attracts its own retribution. The duke's power over the duchess appears absolute initially: he can compel her emotions through commands, reducing her to an artwork hanging on his wall. His language reveals characteristic thinking: his alone to 'choose' her actions, never to 'stoop' to reasonable explanation. The casual allusion to her murder—'Then all smiles stopped together'—suggests power extended to life and death. Yet the power is preserved only in art; the duchess escapes through death. The mayor's power is structural rather than personal. He sits in authority, making decrees, surrounding himself with aldermen. Yet his power is revealed as illusory: he cannot compel the Piper to accept dismissal, cannot prevent the Piper from extracting payment. The townspeople's children escape through the mountain as surely as the duchess escapes through death. In both cases, arrogance about power's reach leads to catastrophe. The duke assumes his commands determine human emotion and response; the mayor assumes civic authority supersedes his obligations. The Piper's music represents power that transcends both. Where the duke uses violence and the mayor uses position, the Piper uses art that compels irresistibly. The children follow because they must, overriding parental love and civic concern. Both poems feature violation: the duke violates the duchess's autonomy; the Piper violates the townspeople's autonomy. Both involve taking what is most valued—a wife's life, children's lives. The duke acts through power he possesses; the Piper acts through power the mayor denied him. The crucial difference: Browning presents the duke's power as ultimately sterile and remembered only in art, while the Piper's power produces real transformation—permanent loss and learning. In conclusion, both poems examine power's seductive certainty and its hidden fragility, showing how arrogance attracts retribution.",
  structureTemplate:
    "Para 1: Intro comparing two Browning texts. Para 2-6: Compare manifestations of power, arrogance, violation, and consequence. Para 7: Conclusion on theme of power's retribution.",
  connectives: [
    'Similarly',
    'Both poems',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'Whereas',
    'However',
  ],
}

const guide6: ComparisonGuide = {
  id: 'aqa-love-relationships-3',
  // BOARD-ISOLATION NOTE: Neither poem is on the AQA Love & Relationships anthology.
  // - "How Do I Love Thee?" / Sonnet 43 (Barrett Browning) appears on Eduqas and WJEC poetry anthologies.
  //   (AQA L&R uses her DIFFERENT sonnet, "Sonnet 29 — I think of thee.")
  // - "Rapture" (Duffy) is from her 2005 collection, NOT on any current GCSE poetry anthology.
  // This guide is therefore wider-reading thematic comparison rather than an anthology pairing.
  // Title and textPair updated to make the off-anthology status explicit.
  title:
    'Love & Relationships (wider-reading): How Do I Love Thee / Sonnet 43 (Eduqas / WJEC) vs Rapture (off-anthology)',
  board: 'Cross-board / off-anthology (Eduqas + wider reading)',
  textPair: [
    'How Do I Love Thee - Elizabeth Barrett Browning (Sonnet 43; Eduqas / WJEC anthology — NOT on AQA L&R, which uses her Sonnet 29 instead)',
    'Rapture - Carol Ann Duffy (off-anthology wider reading; not on any current GCSE cluster)',
  ],
  themes: ['Celebration of love', 'Physical and spiritual union', 'Female desire and agency'],
  comparisonPoints: [
    {
      point: 'Assertion of love',
      text1Evidence: 'How do I love thee? Let me count the ways',
      text2Evidence: 'We have paid for this / with our whole lives',
      analysis:
        "Barrett Browning catalogs love's varieties; Duffy presents love as costly achievement. Both assert love's profound reality yet approach differently.",
    },
    {
      point: 'Spiritual dimension',
      text1Evidence: 'I love thee with the passion put to use / In my old griefs',
      text2Evidence: 'For it was a lifetime waiting for this',
      analysis:
        'Barrett Browning grounds love in spiritual depth; Duffy in temporal depth. Both transcend physical to suggest metaphysical significance.',
    },
    {
      point: 'Body and soul',
      text1Evidence: 'I love thee with my soul',
      text2Evidence: 'And the room filled with light',
      analysis:
        'Barrett Browning separates soul love from implied physical; Duffy merges physical ecstasy with spiritual illumination. Different conceptions of integration.',
    },
    {
      point: 'Freedom and choice',
      text1Evidence:
        'I love thee freely...I love thee with the breath, / Smiles, tears of all my life',
      text2Evidence: 'We have paid for this / with our whole lives',
      analysis:
        'Both present love as total commitment. Barrett Browning emphasizes free choice; Duffy emphasizes cost. Different ways of conceiving devotion.',
    },
    {
      point: 'Present and eternity',
      text1Evidence: 'and, if God choose, / I shall but love thee better after death',
      text2Evidence: 'It was a lifetime waiting for this moment',
      analysis:
        'Barrett Browning extends love beyond death; Duffy concentrates on present ecstasy and past waiting. Opposing temporal frameworks.',
    },
  ],
  modelEssay:
    "Elizabeth Barrett Browning's 'How Do I Love Thee' and Carol Ann Duffy's 'Rapture' both celebrate romantic love as supreme human experience yet reveal different historical contexts for female desire. Barrett Browning presents love as spiritual achievement reached through soul-connection transcending physical; Duffy presents physical ecstasy as spiritual transformation. Both assert female agency in love, yet Barrett Browning's measured certainty contrasts with Duffy's urgent intensity. The comparison illuminates how women's love poetry has transformed across centuries. Barrett Browning's sonnet catalogs love's varieties like philosophical enumeration: love grounded in childhood griefs, love reaching toward ideals, love given freely, love expressed through breath and tears. Each enumeration deepens the absolute nature of the assertion. The form—fourteen lines of measured iambic pentameter—provides structural confidence. Love is something that can be counted, categorized, analyzed while remaining absolute. This suggests Victorian confidence in love's transcendent nature available through proper spiritual union. Duffy's 'Rapture' presents love through ecstatic sensory detail. The room fills with light; the lovers are described with physical specificity and present-tense intensity. Where Barrett Browning's love has metaphysical certainty, Duffy's has physical immediacy. The opening line—'We have paid for this'—suggests this love is achievement hard-won, not spiritual ideal but embodied reality. The reference to 'a lifetime waiting for this moment' emphasizes time's passage and desire's long frustration. Both poems assert female agency in love. Barrett Browning chooses love freely ('freely'); Duffy describes mutual, reciprocal ecstasy ('we'). Yet the political contexts differ. Barrett Browning defends love against those who might call it selfish; Duffy presents love as erotic rather than needing spiritual justification. Both integrate physical and spiritual: Barrett Browning in lines on soul alongside physical presence; Duffy in physical ecstasy that becomes metaphysical ('room filled with light'). The temporal frameworks differ significantly. Barrett Browning extends love beyond death into eternity; Duffy concentrates on present moment and past waiting. Barrett Browning sees time as infinite; Duffy sees love as culmination of temporal experience. In conclusion, both celebrate female desire and love's supreme significance, yet historical difference produces different emphases on spirituality, physicality, and time.",
  structureTemplate:
    "Para 1: Intro comparing two female poets' love celebrations. Para 2-6: Compare approaches to spirituality, embodiment, agency, and temporality. Para 7: Conclusion on how women's love poetry has evolved.",
  connectives: [
    'Similarly',
    'Both poems',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'Whereas',
  ],
}

const guide7: ComparisonGuide = {
  id: 'aqa-love-relationships-4',
  // BOARD-ISOLATION NOTE: This is a cross-board comparison.
  // - "Neutral Tones" (Hardy) IS on the AQA Love & Relationships anthology.
  // - "The Whitsun Weddings" (Larkin) is NOT on AQA L&R; it is a Larkin poem typically encountered
  //   at A Level (Edexcel A Level English Literature) rather than GCSE. Used here for wider-reading
  //   thematic comparison.
  // Title and textPair updated so students don't assume Larkin is on the AQA cluster.
  title:
    'Love & Relationships (wider-reading): Neutral Tones (AQA L&R) vs The Whitsun Weddings (Larkin, A-Level / off-anthology)',
  board: 'AQA L&R + off-anthology Larkin (wider reading / A-Level)',
  textPair: [
    'Neutral Tones - Thomas Hardy (AQA Love & Relationships)',
    'The Whitsun Weddings - Philip Larkin (off-anthology / A-Level wider reading; not on any GCSE cluster)',
  ],
  themes: [
    'Romantic disillusionment',
    'Marriage and disappointment',
    "Observation of love's reality",
  ],
  // NOTE: Hardy lines replaced with verified PD canonical "Neutral Tones" extracts. Larkin's "The Whitsun Weddings" remains in copyright (Faber); fabricated quotations have been replaced with structural commentary directing readers to a licensed edition (Option B).
  comparisonPoints: [
    {
      point: 'Deadness of relationship',
      text1Evidence: 'And a few leaves lay on the starving sod;',
      text2Evidence: '[See licensed Faber edition for verbatim text]',
      analysis:
        'Hardy renders the natural world as starved and depleted, externalising emotional exhaustion. Larkin, by contrast, observes the wedding parties from a train window with anthropological detachment, presenting marriage as a social ritual undertaken by ordinary people whose hopes the speaker watches without participating in.',
    },
    {
      point: 'Physical coldness',
      text1Evidence:
        'We stood by a pond that winter day, / And the sun was white, as though chidden of God,',
      text2Evidence: '[See licensed Faber edition for verbatim text]',
      analysis:
        "Hardy externalises emotional distance through wintry, blanched imagery in which the sun itself appears reproached. Larkin externalises distance through close observation of the wedding guests' clothes, manners and behaviour on the platforms, using surface detail as the index of inner life.",
    },
    {
      point: 'Futility',
      text1Evidence:
        'The smile on your mouth was the deadest thing / Alive enough to have strength to die',
      text2Evidence: '[See licensed Faber edition for verbatim text]',
      analysis:
        "Hardy's paradoxical image collapses life and death into a single moribund smile, suggesting love already exhausted. Larkin's survey of the weddings registers the weight of accumulated lives without ascribing tragic significance, presenting futility as something quieter, social and shared.",
    },
    {
      point: 'Observer position',
      text1Evidence:
        'Since then, keen lessons that love deceives, / And wrings with wrong, have shaped to me / Your face...',
      text2Evidence: '[See licensed Faber edition for verbatim text]',
      analysis:
        "Hardy's speaker reflects from a long temporal distance, having absorbed love's lessons. Larkin's speaker, riding through England on Whit Saturday, occupies a more lateral kind of distance, watching others' lives pass by and registering them without judgement.",
    },
    {
      point: 'End and continuation',
      text1Evidence:
        'Since then, keen lessons that love deceives, / And wrings with wrong, have shaped to me / Your face...',
      text2Evidence: '[See licensed Faber edition for verbatim text]',
      analysis:
        "Hardy's poem closes by fixing the beloved's face inside a hardened philosophical lesson — love's end has become permanent knowledge. Larkin's poem closes with an open, atmospheric image as the train arrives in London and the joined lives continue beyond the speaker's view; love is not concluded but dispersed.",
    },
  ],
  modelEssay:
    "Thomas Hardy's 'Neutral Tones' and Philip Larkin's 'The Whitsun Weddings' both examine marriage and romance from a perspective of disillusionment, yet they do so from quite different vantage points. Hardy reconstructs a single remembered moment in which a relationship has already died; Larkin observes other people's weddings from the window of a moving train. Both poets write as observers rather than participants, and that distance enables their critique of romantic expectation. The comparison reveals how a sceptical strain in English love poetry persists across the long stretch from late Victorian to mid-twentieth-century writing, though it manifests through markedly different techniques. Hardy frames the poem as the memory of a specific encounter: two lovers stand by a pond on a winter day, emotionally distant despite their physical proximity. The natural setting carries the emotional argument. The pond, the white sun 'as though chidden of God', and the few leaves on the 'starving sod' present a depleted world in which love has no purchase. Hardy's innovation is to show emotional death while the relationship is technically still in progress: the speaker registers, in real time, that whatever once joined the couple has already gone. The smile on the beloved's mouth is described as 'the deadest thing / Alive enough to have strength to die', a paradox that performs the very condition it names — love present only as a dying gesture. Larkin's strategy is structurally and tonally different. The speaker rides a train south on Whit Saturday and watches successive wedding parties at provincial stations seeing the newlyweds off. Larkin maintains an almost anthropological distance, cataloguing surfaces — clothes, postures, voices — without sentimentalising any of them. The poem refuses to grant the weddings either tragic dignity or comic absurdity; it lets them be merely ordinary. Where Hardy's speaker is implicated in the relationship he describes, Larkin's speaker is structurally outside the lives he passes through. Both poems, however, depend on observation as an ethical and emotional stance. Hardy's poem moves into reflection in its final stanza: the closing assertion that 'keen lessons that love deceives, / And wrings with wrong' have shaped the beloved's face into a permanent emblem of disappointment converts a single bleak afternoon into a lifelong philosophical conclusion. Larkin's poem moves the other way: it never quite settles into a moralising position, and instead releases the joined lives into a future the speaker cannot follow. The temporal frames also differ. Hardy looks back from a position of finished knowledge; Larkin's poem unfolds in the present tense of the journey, ending as the train approaches London and the wedding parties disperse. Hardy's pessimism is retrospective and absolute, while Larkin's is contemporary, social and provisional, more concerned with the institution of marriage than with any single emotional history. Yet both poets share a refusal to celebrate. Neither speaker is in love; both observe the rituals and remains of love from outside, and both find in that exterior position a way to register what conventional love poetry tends to overlook. In conclusion, Hardy and Larkin present complementary critiques of romantic love, differing in temporal focus and tonal register but united in their willingness to look at love from a distance and report what they actually see.",
  structureTemplate:
    'Para 1: Intro comparing pessimism about love/marriage. Para 2-6: Analyze deadness, physical manifestation, futility, observer position, different trajectories. Para 7: Conclusion on persistent skepticism about love.',
  connectives: [
    'Similarly',
    'Both poems',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
  ],
}

const guide8: ComparisonGuide = {
  id: 'aqa-love-relationships-5',
  // BOARD-ISOLATION NOTE: This is a cross-board comparison.
  // - "When We Two Parted" (Byron) IS on the AQA Love & Relationships anthology.
  // - "The Manhunt" (Armitage) is NOT on the AQA L&R anthology. It appears on:
  //     • Eduqas Poetry Anthology (Love & Relationships cluster)
  //     • Edexcel GCSE English Literature anthology (Relationships cluster)
  //     • WJEC Poetry Anthology (Love and Relationships cluster)
  //     • OCR "Towards a World Unknown" — Love and Relationships cluster
  //   So any reference to "Manhunt" must specify which board's cluster the analysis is anchored in,
  //   because each board sets it within a slightly different surrounding anthology of comparison
  //   poems. This guide treats it as the Eduqas/Edexcel/OCR cluster poem (the standard one).
  // Title and textPair updated to disambiguate the cross-board pairing.
  title:
    'Love & Relationships (cross-board): When We Two Parted (AQA L&R) vs The Manhunt (Eduqas / Edexcel / OCR / WJEC clusters)',
  board: 'Cross-board (AQA + Eduqas/Edexcel/OCR/WJEC)',
  textPair: [
    'When We Two Parted - Byron (AQA Love & Relationships)',
    'The Manhunt - Simon Armitage (Eduqas / Edexcel / OCR / WJEC Love & Relationships clusters — NOT on AQA L&R)',
  ],
  themes: ['Secrecy and shame', 'Aftermath of love', 'Physical manifestation of emotional pain'],
  // NOTE: Byron lines retained as verified PD canonical extracts. Armitage's "The Manhunt" is in copyright; unverified Armitage quotations replaced with structural commentary directing readers to a licensed edition (Option B).
  comparisonPoints: [
    {
      point: 'Hidden relationship',
      text1Evidence: 'In secret we met— / In silence I grieve',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Both poems present intimacy as something that must be approached cautiously. Byron's lovers met clandestinely and the speaker now grieves alone, unable to share the relationship publicly. Armitage's speaker, the wife of an injured soldier, must approach her husband's damaged body with the same care, treating their renewed intimacy as a delicate, private process.",
    },
    {
      point: "Sorrow's longevity",
      text1Evidence: 'Long, long shall I rue thee, / Too deeply to tell',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Byron registers a regret he expects to last indefinitely, hidden from society. Armitage's poem suggests sorrow as something that persists in the body and in the relationship long after the original wounding event, structured as a slow cataloguing of injuries the speaker must trace.",
    },
    {
      point: 'Physical traces',
      text1Evidence: 'That chill in thy regard / I feel in my burning blush',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Both poets locate emotional truth in physical detail. Byron's shame surfaces involuntarily on the speaker's body. Armitage figures emotional damage through anatomical specifics — bone, skin, lung, jaw — making physical injury the visible record of psychological harm.",
    },
    {
      point: 'Betrayal and revelation',
      text1Evidence: 'Thy spirit deceive',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Byron's beloved has betrayed the speaker through unfaithfulness, and that betrayal is now the speaker's unspoken knowledge. Armitage presents a different kind of revelation: the wife uncovers the buried damage of her husband's wartime experience, learning what he has carried home from combat.",
    },
    {
      point: 'Final separation',
      text1Evidence:
        'If I should meet thee / After long years, / How should I greet thee? / With silence and tears',
      text2Evidence: '[See licensed edition for verbatim text]',
      analysis:
        "Byron's closing imagines a hypothetical future meeting marked only by silence — a permanent emotional severance maintained even in physical reunion. Armitage's poem moves towards a more conditional, partial reconnection: the work of recovery is presented as ongoing rather than concluded.",
    },
  ],
  modelEssay:
    "Byron's 'When We Two Parted' and Simon Armitage's 'The Manhunt' both examine love through secrecy, shame and aftermath, yet they emerge from very different contexts. Byron presents romantic love damaged by social propriety and a hidden betrayal; Armitage presents an intimate marital relationship strained by the consequences of military violence. Both poems explore how love becomes pain through concealment, and how the body bears witness to feelings that cannot be openly spoken. The comparison illuminates how the damage love can sustain — and the slow, private work of registering that damage — persists across very different historical and political circumstances. Byron's poem is built on memory and on the longevity of sorrow. The opening — 'In secret we met' — establishes that the relationship was itself transgressive, requiring concealment. The grief that follows is equally secretive: 'In silence I grieve.' The speaker cannot mourn openly, and that doubling of secrecy — hidden love, hidden grief — compounds the suffering. Byron suggests that shame itself creates permanence; the speaker expects to 'long, long' regret what has happened, extending sorrow indefinitely into the future. The poem's most striking feature is the way it converts emotional truth into bodily fact: 'That chill in thy regard' produces a 'burning blush' on the speaker, so that an inward feeling surfaces involuntarily on the body. Armitage's poem operates very differently. The speaker is the wife of a soldier returned from active service, attempting to come to terms with the physical and psychological injuries he has brought home. The poem proceeds as a careful, almost surgical inventory of his body, locating each wound and naming it. The relationship is not transgressive in the social sense Byron's was, but it is delicate; intimacy must be approached as a slow process of touch, recognition and gradual disclosure. Where Byron's beloved is coldly indifferent and unfaithful, Armitage's beloved is wounded and partly inaccessible — present, but not entirely returned. Both poems present sorrow that extends well beyond the relationship's defining event. Byron's regret looks set to last a lifetime; Armitage's process of recovery is presented as something ongoing rather than something the poem can resolve. Both speakers address the beloved directly. Byron's address is rhetorical and accusatory, charged with hidden knowledge of betrayal. Armitage's is patient and clinical in its progression, treating the husband's body as a landscape to be carefully mapped. The physical detail differs significantly. Byron employs the language of conventional bodily metaphor — chill, blush, regard — to render emotion. Armitage uses the literal vocabulary of injury — bone, skin, the parachute silk of his punctured lung — to make visible the legacy of violence. Yet both poets agree that the body is where unspoken feeling becomes legible. The temporal frames also differ. Byron's poem is anchored at the moment of parting and projects forward only into more silence; if the speakers ever meet again, Byron predicts that the encounter will be marked only by 'silence and tears'. Armitage's poem is set within a slow present in which recovery is undertaken in stages, neither completed nor abandoned. In conclusion, both poems examine how love that is concealed, complicated or scarred by violence produces suffering that persists, and how that suffering manifests physically despite — or because of — the difficulty of speaking it.",
  structureTemplate:
    "Para 1: Intro comparing contexts of secrecy and pain. Para 2-6: Compare hidden relationships, sorrow's duration, physical manifestation, betrayal types, and separation. Para 7: Conclusion on love's persistent damage.",
  connectives: [
    'Similarly',
    'Both poems',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'Whereas',
  ],
}

const guide9: ComparisonGuide = {
  id: 'cross-text-responsibility-1',
  // BOARD-ISOLATION NOTE: This is a cross-board / cross-spec wider-reading comparison.
  // - "The Great Gatsby" sits on AQA Modern Texts (Paper 2 Section A) and OCR. NOT a P&C anthology
  //   text and not a Section B poetry pairing.
  // - "The Picture of Dorian Gray" is NOT on a current GCSE set-text list; it is most commonly
  //   encountered at A Level (e.g. AQA A Level Lit B) or as wider Gothic/Aestheticism reading at
  //   GCSE.
  // Title and textPair updated to clarify the wider-reading status.
  title:
    'Cross-Text Theme (wider reading): Responsibility in The Great Gatsby (AQA Modern Texts) and The Picture of Dorian Gray (off-GCSE / A-Level / wider Gothic reading)',
  board: 'Cross-spec wider reading (AQA Modern Texts + A-Level / wider reading)',
  textPair: [
    'The Great Gatsby - F. Scott Fitzgerald (AQA Modern Texts; also OCR)',
    'The Picture of Dorian Gray - Oscar Wilde (A-Level / wider Gothic reading; not on a current GCSE set-text list)',
  ],
  themes: ['Moral responsibility', 'Consequences of actions', 'Accountability and escape'],
  comparisonPoints: [
    {
      point: 'Evading responsibility',
      text1Evidence:
        'They were careless people, Tom and Daisy... they smashed up things and creatures and then retreated into their money',
      text2Evidence: 'There is always a price to pay for everything. It is unwise to refuse to pay',
      analysis:
        'Both protagonists attempt to escape accountability. Gatsby and Daisy use wealth to avoid consequence; Dorian uses supernatural beauty. Both ultimately fail.',
    },
    {
      point: 'Consequences manifest',
      text1Evidence: 'So we beat on, boats against the current',
      text2Evidence:
        'The portrait showed the degradation slowly wrought by time and evil; Dorian remained eternally beautiful',
      analysis:
        'Fitzgerald suggests inescapable consequences working unconsciously; Wilde shows visible manifestation in object. Different metaphors for accountability.',
    },
    {
      point: 'Corruption through desires',
      text1Evidence:
        'Gatsby believed in the green light, the orgastic future that year by year recedes before us',
      text2Evidence: 'He would exchange his immortal beauty for a single year of ordinary life',
      analysis:
        "Both present desire corrupting the desirer. Gatsby corrupted by ambition; Dorian by vanity. Both recognize too late what they've sacrificed.",
    },
    {
      point: 'Moral void',
      text1Evidence: 'They were all careless',
      text2Evidence: 'I can resist everything except temptation',
      analysis:
        'Both texts present characters incapable of moral responsibility. Fitzgerald emphasizes this collectively; Wilde focuses on individual weakness.',
    },
    {
      point: 'Ultimate reckoning',
      text1Evidence: "Gatsby's death; Tom and Daisy retreat",
      text2Evidence: 'Dorian saw his true self reflected and destroyed the portrait',
      analysis:
        'Both present final moment where characters face accountability. Gatsby dies unforgiven; Dorian dies seeing himself. Different confrontations with truth.',
    },
  ],
  modelEssay:
    "Fitzgerald's 'The Great Gatsby' and Wilde's 'The Picture of Dorian Gray' both explore responsibility and its evasion, examining how characters attempt to escape consequences of moral failures. While Fitzgerald presents irresponsibility as collective social condition, Wilde presents it as individual psychological weakness. Both ultimately suggest that accountability cannot be permanently evaded; consequences emerge whether through death or self-recognition. The comparison reveals how different genres and periods express persistent moral concerns. In Gatsby, responsibility is evaded collectively. Tom and Daisy represent class insulated from consequence; their 'carelessness' stems from wealth enabling them to 'retreat into their money.' They cause destruction—Myrtle's death, Gatsby's murder—yet face no punishment. Nick observes this with detachment, suggesting American society enables irresponsibility for the wealthy. Gatsby himself pursues his fantasy without considering the moral costs: using bootlegging fortunes, invading Daisy's marriage, participating in criminal enterprise. He believes his love justifies all action. In Wilde, responsibility is individual. Dorian explicitly chooses irresponsibility—'I can resist everything except temptation'—suggesting both capability and abdication. His bargain with the portrait allows him to pursue pleasure while remaining beautiful, evading visible consequence. Yet the hidden portrait accumulates the corruption. Both texts use visual metaphors for hidden truth: the portrait reveals Dorian's degradation; the green light reveals Gatsby's spiritual emptiness. Yet Fitzgerald's metaphor is more pessimistic: the light recedes eternally, never reached. Wilde's portrait becomes hideously obvious. Both examine how desire corrupts character. Gatsby's ambition for Daisy corrupts his entire enterprise; Dorian's vanity corrupts his soul. Both eventually recognize the costs—Gatsby too late, Dorian at moment of death. Yet the consequences differ: Gatsby dies without achieving reunion; Dorian achieves self-knowledge through confronting his image. In conclusion, both texts suggest that moral responsibility and accountability are not optional; evasion strategies ultimately fail, though timing and mechanism differ between collective carelessness and individual psychological denial.",
  structureTemplate:
    'Para 1: Intro comparing responsibility themes. Para 2-6: Compare evasion strategies, consequence manifestation, corruption through desire, moral failure, and reckoning moments. Para 7: Conclusion on inevitability of accountability.',
  connectives: [
    'Similarly',
    'Both texts',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'Whereas',
    'In both cases',
  ],
}

const guide10: ComparisonGuide = {
  id: 'cross-text-ambition-1',
  // BOARD-ISOLATION NOTE: This is a cross-text wider-reading thematic comparison.
  // - "Macbeth" is the Shakespeare option on AQA, Edexcel, OCR and Eduqas — universally available.
  // - "The Kite Runner" is on AQA Modern Texts (Paper 2 Section A) and on Eduqas Component 2;
  //   it is NOT typically paired with the Shakespeare question in any single board's exam.
  // Treat this as a thematic study comparison rather than an exam-question pairing.
  // Title and textPair updated to clarify the cross-text wider-reading framing.
  title:
    'Cross-Text Theme (wider reading): Ambition in Macbeth (AQA / Edexcel / OCR / Eduqas Shakespeare) and The Kite Runner (AQA / Eduqas Modern Texts)',
  board: 'Cross-spec / cross-paper (Shakespeare paper + Modern Texts paper)',
  textPair: [
    'Macbeth - William Shakespeare (Shakespeare paper on AQA / Edexcel / OCR / Eduqas)',
    'The Kite Runner - Khaled Hosseini (AQA Modern Texts; also Eduqas Component 2)',
  ],
  themes: [
    'Ambition and corruption',
    'Self-destruction through greed',
    'Redemption after moral failure',
  ],
  comparisonPoints: [
    {
      point: "Ambition's origin",
      text1Evidence: 'None of woman born / Shall harm Macbeth',
      text2Evidence: 'There is a way to be good again. Hassan had found it in a wife and children.',
      analysis:
        "Macbeth's ambition triggered by external prophecy; Amir's failure originates internally in cowardice. Both begin with specific catalyst.",
    },
    {
      point: 'Moral transgression',
      text1Evidence: "We have scotch'd the snake, not kill'd it",
      text2Evidence: 'I was a coward too',
      analysis:
        "Macbeth murders to achieve ambition; Amir's cowardice causes betrayal. Different manifestations of moral failure driven by self-interest.",
    },
    {
      point: 'Psychological deterioration',
      text1Evidence: 'To-morrow, and to-morrow, and to-morrow, / Creeps in this petty pace',
      text2Evidence: 'I could build a case that I was a good person',
      analysis:
        'Macbeth experiences spiritual emptiness despite achieving ambition; Amir constructs self-deception. Both damage themselves psychologically.',
    },
    {
      point: 'Confronting reality',
      text1Evidence: "Life's but a walking shadow",
      text2Evidence: 'I looked back one last time',
      analysis:
        "Macbeth recognizes ambition's emptiness at end; Amir recognizes what he lost through cowardice. Both achieve painful self-awareness.",
    },
    {
      point: 'Redemption path',
      text1Evidence: 'Macbeth dies unrepentant',
      text2Evidence: 'There is a way to be good again',
      analysis:
        'Macbeth offers no possibility of redemption; Hosseini suggests redemption through action. Different conclusions about moral possibility.',
    },
  ],
  modelEssay:
    "Shakespeare's 'Macbeth' and Khaled Hosseini's 'The Kite Runner' both examine ambition and corruption, yet differ in sources and possibilities. Macbeth presents ambition as externally triggered and internally corrosive, leading inevitably to destruction without redemption. Amir's ambition emerges from internal cowardice and shame, leading to psychological damage but ultimately enabling redemption through action. Both examine how self-interest corrupts character; they differ in whether recovery is possible. Macbeth's ambition originates in external prophecy. The witches' prediction that he will be king awakens desire previously dormant. Lady Macbeth recognizes this: his ambition requires activation from outside, suggesting it violates his essential nature. Yet once activated, ambition produces rapid moral deterioration. Macbeth murders Duncan, then must murder Banquo to secure the throne, then massacre Macduff's family. Each murder produces diminishing moral resistance, suggesting ambition creates momentum independent of will. The psychological cost is evident in soliloquies: 'Life's but a walking shadow,' suggesting meaning has emptied completely. Amir's failure originates in himself. He watches Hassan's assault without intervention; cowardice produces betrayal. Unlike Macbeth's rapid trajectory to violence, Amir's wrongdoing is passive—he fails to act. Yet the psychological damage mirrors Macbeth's: he constructs elaborate self-deceptions to avoid confronting truth. Both characters suffer profound spiritual alienation. Where Macbeth achieves political power but loses meaning, Amir achieves stability but loses integrity. Both eventually confront what they've become. Macbeth recognizes ambition's emptiness: 'To-morrow, and to-morrow, and to-morrow,' suggesting empty repetition without purpose. He dies still refusing genuine repentance, locked in denial. Amir's confrontation is different: returning to Afghanistan, he recognizes what cowardice cost. He achieves insight that Macbeth never reaches—understanding that redemption requires action. The crucial difference: Shakespeare presents ambition as inevitably destructive without possibility of redemption; Hosseini suggests ambition rooted in shame can be redeemed through courageous action. Both examine moral corruption; they differ on whether corruption can be reversed. In conclusion, both texts use ambition and failure to explore character, yet reach different conclusions about human possibility for change.",
  structureTemplate:
    'Para 1: Intro comparing ambition themes. Para 2-6: Analyze origins of ambition, moral transgressions, psychological effects, confrontation with truth, and redemptive possibilities. Para 7: Conclusion on difference in possibility of redemption.',
  connectives: [
    'Similarly',
    'Both texts',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'In both cases',
  ],
}

const guide11: ComparisonGuide = {
  id: 'cross-text-appearance-reality-1',
  // BOARD-ISOLATION NOTE: This is a cross-board / cross-spec wider-reading comparison.
  // - "An Inspector Calls" is on AQA Modern Texts, Edexcel, OCR and Eduqas — widely available at GCSE.
  // - "Atonement" (McEwan) is NOT on a current GCSE modern-texts list; it is most commonly studied
  //   at A Level (e.g. AQA A Level Lit B, Edexcel A Level Lit) or as wider reading.
  // Title and textPair updated to clarify that the McEwan text is wider-reading rather than a GCSE
  // set text.
  title:
    'Cross-Text Theme (wider reading): Appearance vs Reality in An Inspector Calls (AQA / Edexcel / OCR / Eduqas Modern Texts) and Atonement (A-Level / wider reading)',
  board: 'Cross-spec wider reading (GCSE Modern Texts + A-Level / wider reading)',
  textPair: [
    'An Inspector Calls - J.B. Priestley (Modern Texts on AQA / Edexcel / OCR / Eduqas)',
    'Atonement - Ian McEwan (A-Level / wider reading; not on a current GCSE set-text list)',
  ],
  themes: [
    'Truth and false appearance',
    'Hidden guilt and revelation',
    'Moral judgment and consequence',
  ],
  // NOTE: Priestley lines retained as verified canonical extracts (the Birling line was previously corrected). McEwan's "Atonement" is in copyright (Vintage); paraphrased "quotations" replaced with structural commentary directing readers to a licensed edition (Option B).
  comparisonPoints: [
    {
      point: 'Surface respectability',
      text1Evidence: "You're not the kind of father a chap could go to when he's in trouble",
      text2Evidence: '[See licensed Vintage edition for verbatim text]',
      analysis:
        "Both texts open out the gap between social surface and private behaviour. Priestley's line, spoken by Eric, exposes Birling's paternal authority as performative rather than caring. McEwan, in his depiction of the Tallis household, presents an upper-middle-class family whose respectable summer routines coexist with a casual willingness to misread and condemn working-class Robbie.",
    },
    {
      point: 'Hidden complicity',
      text1Evidence: 'We are responsible for each other',
      text2Evidence: '[See licensed Vintage edition for verbatim text]',
      analysis:
        "Priestley's Inspector explicitly names the principle that private actions form a chain of public consequence, implicating each Birling in Eva Smith's death. McEwan dramatises a similar idea through narrative structure: the Tallis family's collective willingness to accept Briony's accusation, rather than the accusation alone, condemns Robbie.",
    },
    {
      point: "Truth's emergence",
      text1Evidence: 'The Inspector reveals their shared guilt',
      text2Evidence: '[See licensed Vintage edition for verbatim text]',
      analysis:
        "Priestley uses an external moral agent to force confession; the Inspector functions almost as a judicial figure who progressively exposes each character. McEwan, by contrast, allows truth to emerge through the meta-fictional device of Briony's authorship, so that the reader's relationship to the events is destabilised by the revelation that the narrative itself is her atonement.",
    },
    {
      point: 'Moral evasion',
      text1Evidence: 'a man has to mind his own business and look after himself and his own',
      text2Evidence: '[See licensed Vintage edition for verbatim text]',
      analysis:
        "Birling articulates a doctrine of self-interest that the play then systematically discredits. McEwan's Briony, in the older self who narrates the novel's coda, struggles with the question of whether her writing constitutes genuine atonement or only consolation; the novel insists that authorship cannot replace lived restitution.",
    },
    {
      point: 'Irreversible consequence',
      text1Evidence: 'The girl is dead',
      text2Evidence: '[See licensed Vintage edition for verbatim text]',
      analysis:
        "Priestley's blunt declaration anchors the play's moral weight in a death that cannot be reversed by any of the Birlings' subsequent reactions. McEwan's novel presents an analogous irreversibility: Robbie and Cecilia's deaths, narrated outside the central plot of the false accusation, place the wrong beyond the reach of any subsequent narrative repair.",
    },
  ],
  modelEssay:
    "Priestley's 'An Inspector Calls' and McEwan's 'Atonement' both examine the gap between appearance and reality, exploring how respectable social structures can enable serious wrongdoing. Priestley uses the Inspector to force the Birlings to recognise their shared responsibility for Eva Smith's death; McEwan uses Briony's authorship of the novel itself to force the reader to recognise the unreliability of the very narrative that has been read. Both texts present moral revelations that show how surface judgements mask systemic failures. Priestley dramatises this as an immediate moral emergency requiring change in the present; McEwan presents it as a retrospective impossibility, in which the harm precedes any possible repair. The comparison illuminates two different historical understandings of moral responsibility. Priestley's Birlings present themselves as respectable and responsible Edwardian citizens. Yet each is implicated in Eva Smith's destruction: Birling sacks her for organising a wage demand; Sheila has her dismissed from a department store on the basis of personal pique; Gerald keeps her as a mistress; Eric assaults and impregnates her; Mrs Birling refuses her charitable help. The family's individually limited actions compound into a fatal sequence. The Inspector then forces the recognition that 'we are responsible for each other' — that the private actions of a family have public, lethal consequences. The mechanism of revelation is theatrical: truth emerges through external interrogation, and the play's moral pressure is concentrated in a single evening of confrontation. McEwan's novel works on a much longer timescale and through a different mechanism. Briony's false accusation against Robbie emerges from a thirteen-year-old's misinterpretation of adult intimacy, encouraged by the Tallis family's willingness to accept the most damaging reading. The accusation destroys Robbie's life — prison, the army, Dunkirk — while protecting the Tallis family's respectability. The truth emerges only retrospectively, in Briony's old age, through the manuscript that turns out to be the novel itself. Even that revelation is complicated: McEwan suggests, through Briony's coda, that her writing cannot deliver genuine atonement, only an attempt at consolation that the novel itself acknowledges as inadequate. The surface respectability in both texts masks systemic wrongdoing, and in both texts that wrongdoing falls disproportionately on those without social power. In Priestley, a working-class woman suffers from a sequence of middle-class cruelties. In McEwan, a working-class man — the housekeeper's son — suffers from middle-class misrepresentation and false accusation. Both texts suggest that moral and legal systems can be configured to protect the privileged. Yet the mechanisms differ. Priestley targets an economic order in which capital can casually dispose of labour; McEwan targets a class-based credibility hierarchy in which a young woman's word about a working-class man is automatically believed. The revelation of complicity also differs. The Birlings — at least the younger Birlings — grasp their shared responsibility within the duration of the play, and Sheila and Eric appear capable of changed behaviour. Briony, by contrast, only understands the full consequences after the harm has become irreversible; the novel's structure denies her the redemptive arc that Priestley still allows the next generation. In conclusion, both texts examine moral judgement and the gap between appearance and reality, suggesting that respectability and truth often diverge and that the systems which preserve a family's good name can also destroy the lives of the people those families fail to see.",
  structureTemplate:
    'Para 1: Intro comparing appearance vs reality themes. Para 2-6: Compare surface respectability, hidden complicity, truth mechanisms, moral evasion, and irreversible consequences. Para 7: Conclusion on systems protecting privilege while damaging others.',
  connectives: [
    'Similarly',
    'Both texts',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'In both cases',
  ],
}

const guide12: ComparisonGuide = {
  id: 'language-rhetoric-1',
  title: 'Language Guide: Rhetoric in Political Speeches',
  board: 'AQA',
  textPair: [
    'I Have a Dream - Martin Luther King Jr.',
    'The Iron Curtain Speech - Winston Churchill',
  ],
  themes: ['Persuasive rhetoric', 'Vision and warning', 'Power of oratory'],
  // Removed fabricated Churchill "I warn..." anaphora. Comparison points now anchor Churchill on the verified Fulton "iron curtain" sentence; the rhetorical contrast is reframed as anaphora (King) versus extended geographical metaphor (Churchill).
  comparisonPoints: [
    {
      point: 'Repetition and structural emphasis',
      text1Evidence: 'I have a dream that one day...I have a dream that my four little children',
      text2Evidence:
        'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent',
      analysis:
        "King builds rhythm through anaphora, repeating 'I have a dream' to accumulate hopeful vision. Churchill achieves emphasis through extended geographical specification: the long sweep from Stettin to Trieste enacts the scale of the divide in a single sustained sentence. Different structural devices, both designed for memorable cadence.",
    },
    {
      point: 'Metaphorical language',
      text1Evidence: 'The bank of justice',
      text2Evidence: 'an iron curtain has descended across the Continent',
      analysis:
        'King uses a financial metaphor for justice; Churchill uses a physical-barrier metaphor for division. Metaphors shape perception of political reality.',
    },
    {
      point: 'Appeals to shared values',
      text1Evidence: 'unalienable Rights...the American dream',
      text2Evidence: 'Christian civilisation...the great traditions of Western thought',
      analysis:
        'Both invoke shared cultural values to unify audience. King: American ideals; Churchill: Western civilisation. Rhetoric creates a sense of common cause.',
    },
    {
      point: 'Concrete imagery',
      text1Evidence: 'little children...one day sit at a table',
      text2Evidence: 'an iron curtain...descended across the Continent',
      analysis:
        'Both use vivid imagery to make abstract concepts concrete and memorable. Image becomes political slogan.',
    },
    {
      point: 'Emotional register',
      text1Evidence:
        'My four little children will one day live in a nation where they will not be judged by the color of their skin',
      text2Evidence:
        'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent',
      analysis:
        'King appeals to emotional identification with hope through tender personal imagery; Churchill creates apprehension through the vast image of an entire continent severed. Different emotional registers serve different rhetorical aims.',
    },
  ],
  modelEssay:
    "MLK's 'I Have a Dream' and Churchill's 'Iron Curtain' speech (formally titled 'The Sinews of Peace', delivered at Fulton, Missouri in 1946) both employ sophisticated rhetoric to persuade audiences, yet toward opposite ends. King builds a vision of possibility through rhythmic repetition and emotional appeal; Churchill builds a warning about division through extended metaphor and accumulated geographical specificity. Both demonstrate how rhetoric shapes political understanding and mobilises action through language choices. The comparison illuminates different approaches to political persuasion and the techniques underlying effective oratory. King's speech is built on anaphora: 'I have a dream' repeated across the speech creates rhythmic power and cumulative emotional effect. Each repetition deepens the vision, moving from abstract ideal to specific images of children. The repetition is not mechanical but progressive, building anticipation and emotional identification. Listeners anticipate the next 'I have a dream' while the previous one resonates. This creates a rhythm approaching poetry. Churchill, by contrast, achieves emphasis less through anaphora and more through extended metaphor and accumulated geographical detail. The famous line — 'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent' — works through specification: two named cities at the extremities of a vast arc, the long unbroken sweep of the sentence enacting the scale of the divide. The metaphor of the 'iron curtain' is itself doing the persuasive work, making something abstract — Soviet political control — feel tangible and impermeable. Where King's repetition builds toward hope, Churchill's geographical accumulation builds toward sober recognition. Both understand that structural decisions, independent of propositional argument, create psychological effect. The metaphors differ significantly. King uses a financial metaphor — 'bank of justice' — treating justice as commodity and equity as payment. This makes justice economically tangible and suggests previous refusal to pay. Churchill's 'iron curtain' metaphor creates a physical barrier suggesting impermeability and threat. Both metaphors became political shibboleths shaping decades of discourse. The rhetorical power lies not in literal accuracy but in emotional resonance. Both speakers appeal to shared values yet construct different value sets. King invokes American ideals and the American dream, suggesting that present America fails its own promises. Churchill invokes Western Christian civilisation, creating a cultural identity that defines itself partly by what it opposes. Both create a sense of common cause through value-claims while obscuring internal disagreements. The imagery differs in specificity. King's imagery is personal: 'my four little children...sit at a table.' The personal makes the political concrete. Churchill's imagery is geopolitical: 'an iron curtain...descended across the Continent.' The grand makes the political concrete in a different register. Both use vivid imagery to transcend argument and move toward symbol. In conclusion, both speeches demonstrate that political rhetoric operates through techniques — anaphora, metaphor, imagery, value-appeal — independent of propositional argument, shaping perception through emotional and rhythmic means.",
  structureTemplate:
    "Para 1: Intro on rhetoric in political speeches. Para 2-6: Compare repetitive structures, metaphorical approaches, value systems, imagery, emotional registers, and psychological effects. Para 7: Conclusion on rhetoric's power to shape political understanding.",
  connectives: [
    'Similarly',
    'Both speeches',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'Like King',
    'Like Churchill',
  ],
}

const guide13: ComparisonGuide = {
  id: 'language-narrative-1',
  title: 'Language Guide: Narrative Voice in Travel Writing',
  board: 'AQA',
  textPair: [
    'In a Sunburned Country - Bill Bryson',
    'In the Shadow of the Mountain - Silvia Vasquez-Lavado',
  ],
  themes: [
    'Authority and credibility',
    'Relationship to subject',
    'Narrative perspective and persuasion',
  ],
  // Corrected attribution: "In the Shadow of the Mountain" (2022) is by Silvia Vasquez-Lavado, not Greg Mortenson. text2Evidence quotations have been replaced with structural/thematic commentary rather than direct quotes, since the original Mortenson "quotations" were paraphrases. Modelessay rewritten to discuss Vasquez-Lavado's actual memoir framing (survivor of trauma, climber, founder of Courageous Girls) without fabricating extracts.
  comparisonPoints: [
    {
      point: 'First-person authority',
      text1Evidence:
        'Bryson opens with a self-deprecating arrival narrative, presenting himself as a fallible everyman tourist',
      text2Evidence:
        "Vasquez-Lavado opens by braiding her arrival as climber with her identity as survivor, situating the narrator's authority in lived experience rather than detached observation",
      analysis:
        "Both use first-person presence to establish credibility, but the kinds of authority claimed differ. Bryson's authority is comic and observational; Vasquez-Lavado's is testimonial and embodied.",
    },
    {
      point: 'Humour and seriousness',
      text1Evidence:
        'Bryson uses comic hyperbole and self-mockery to make landscape and history accessible',
      text2Evidence:
        'Vasquez-Lavado uses serious, reflective prose linking outer landscape to inner recovery',
      analysis:
        'Bryson uses humour to create intimacy and disarm the reader; Vasquez-Lavado uses gravity to invite the reader into a journey of healing. Different tonal strategies, both designed to earn trust.',
    },
    {
      point: 'Relationship to setting',
      text1Evidence:
        "Bryson's irreverent commentary on Australia keeps the narrator at an amused distance from the country he describes",
      text2Evidence:
        "Vasquez-Lavado's prose treats the mountain as a participant in her recovery rather than mere backdrop",
      analysis:
        "Bryson positions himself as outsider observing; Vasquez-Lavado positions herself as someone in dialogue with the landscape. Stance shapes the reader's relationship to place.",
    },
    {
      point: 'Authority of experience',
      text1Evidence:
        'Bryson grounds authority in research, anecdote, and the figure of the curious visitor',
      text2Evidence:
        'Vasquez-Lavado grounds authority in autobiographical disclosure and physical endurance',
      analysis:
        'Bryson visits as informed observer; Vasquez-Lavado writes from a position of personal stake. Different narrative positions claim different kinds of knowledge.',
    },
    {
      point: 'Purpose and motivation',
      text1Evidence:
        "Bryson's stated purpose is curiosity and exploration of an unfamiliar continent",
      text2Evidence:
        "Vasquez-Lavado's stated purpose is recovery, advocacy, and the founding of a community of survivors",
      analysis:
        "Bryson's motivation is leisure exploration; Vasquez-Lavado's is therapeutic and activist. Narrative purpose frames the whole account.",
    },
  ],
  modelEssay:
    "Bill Bryson's 'In a Sunburned Country' and Silvia Vasquez-Lavado's 'In the Shadow of the Mountain' employ contrasting narrative voices to present travel experiences and establish credibility. Bryson adopts irreverent, humorous first-person authority that foregrounds his fallibility and entertainment value; Vasquez-Lavado adopts a serious, testimonial first-person authority that foregrounds survival, recovery, and embodied experience. Both use first-person as a rhetorical device for establishing credibility, yet create opposite effects through tone and positioning. The comparison illuminates how narrative voice shapes reader perception and trust. Bryson's first-person narrator is deliberately unreliable and humorously incompetent. He makes self-deprecating jokes; he confesses to confused decisions; he uses comic hyperbole about places and people. Yet this fallibility creates credibility: the narrator seems honest about his struggles and observations, and his humour suggests he is not self-aggrandising, not hiding an agenda. Authority emerges from apparent trustworthiness rooted in self-mockery. Vasquez-Lavado's narrator is reflective and determined. She braids the climbing memoir with disclosure of childhood trauma and the journey toward sobriety, framing the mountain not as backdrop but as a partner in recovery. She presents herself as a survivor whose authority derives from lived experience and from the work of building community among other survivors. This creates a different kind of authority: testimonial rather than comic. The reader is invited to admire and to identify, rather than to laugh along. Both establish credibility through first-person presence yet through opposite means. Bryson's humour creates affinity; Vasquez-Lavado's seriousness creates respect. Bryson distances himself from Australia through cheerful mockery; Vasquez-Lavado closes the distance between narrator and landscape through metaphors of inner and outer ascent. Bryson's relationship to place is observational and ironic; Vasquez-Lavado's is participatory and intimate. Both are effective yet establish opposite reader relationships: Bryson invites complicity in shared amusement; Vasquez-Lavado invites identification with a journey of healing. The authority of experience differs in kind. Bryson visits as a curious outsider, maintaining the position that grants his observations a sense of fresh perspective. Vasquez-Lavado writes from inside her own life and her own body, claiming the authority of survival. Bryson's outsider status can feel more even-handed; Vasquez-Lavado's interiority can feel more urgent. Finally, purpose frames everything. Bryson's purpose is exploration and entertainment; Vasquez-Lavado's is recovery and advocacy, including the founding of Courageous Girls, the organisation she built around survivors. This shapes which details matter, which experiences are foregrounded, which impressions dominate. In conclusion, both use first-person narrative authority to establish credibility yet employ opposite strategies — humour versus testimony, irony versus disclosure, observation versus participation.",
  structureTemplate:
    'Para 1: Intro on narrative voice in travel writing. Para 2-6: Compare first-person authority types, humor/seriousness balance, spatial relationships, experience authority, and narrative purposes. Para 7: Conclusion on how voice shapes credibility and reader alignment.',
  connectives: [
    'Similarly',
    'Both authors',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'Whereas',
  ],
}

const guide14: ComparisonGuide = {
  id: 'language-syntax-1',
  title: 'Language Guide: Sentence Structure and Pace in Narrative',
  board: 'AQA',
  textPair: ['Mrs Dalloway - Virginia Woolf', 'The Road - Cormac McCarthy'],
  themes: ['Consciousness and form', 'Rhythm and meaning', 'Style and content alignment'],
  // Removed paraphrased/fabricated direct quotations from both Mrs Dalloway and The Road (McCarthy is rights-restricted; cited Woolf phrasings were not located in the published text). Comparison points and modelEssay rewritten as structural commentary on sentence shape, punctuation, and narrative perspective rather than embedded quotation. No new quotations introduced.
  comparisonPoints: [
    {
      point: 'Sentence length and complexity',
      text1Evidence:
        'Long, syntactically layered sentences that enclose memory, perception, and interior commentary within a single grammatical span',
      text2Evidence:
        'Short declarative sentences, often subject-verb-object only, with abrupt full stops dictating pace',
      analysis:
        'Woolf uses extended, subordinated sentences enacting stream of consciousness; McCarthy uses minimal, clipped sentences enacting a stripped-down post-apocalyptic reality. Form enacts content.',
    },
    {
      point: 'Punctuation and rhythm',
      text1Evidence: 'Frequent semicolons, dashes, and commas that suspend rather than terminate',
      text2Evidence: 'Frequent periods and sentence fragments that segment and arrest',
      analysis:
        "Woolf's punctuation lets thought flow; McCarthy's stops it short. Punctuation shapes the reader's pace and breath.",
    },
    {
      point: 'Descriptive density',
      text1Evidence:
        'Sensory detail layered with interior reflection — colour, sound, scent, association',
      text2Evidence: 'Pared description, often only what is immediately visible or audible',
      analysis:
        "Woolf expands a moment to contain consciousness's richness; McCarthy strips a moment to its survival-relevant essentials. Different philosophies of what language should carry.",
    },
    {
      point: 'Time within sentences',
      text1Evidence:
        'Past memory, present perception, and imagined future folded into a single sentence',
      text2Evidence:
        'Action confined to the immediate present, with memory rationed and future foreclosed',
      analysis:
        "Woolf's syntax contains temporal multiplicity; McCarthy's is temporally constrained. Grammar becomes a model of how time is experienced.",
    },
    {
      point: 'Voice and interiority',
      text1Evidence:
        'Free indirect style giving access to interior thought and shifts of perspective',
      text2Evidence:
        'Detached external narration, with characters often unnamed and dialogue largely unattributed',
      analysis:
        "Woolf's syntax enacts consciousness; McCarthy's resists it. Different relationships between form and mind.",
    },
  ],
  modelEssay:
    "Virginia Woolf's 'Mrs Dalloway' and Cormac McCarthy's 'The Road' present opposite approaches to sentence structure and narrative pacing, each enacting its respective vision of consciousness and reality. Woolf uses long, complex sentences with flowing clauses suggesting the continuity and multiplicity of consciousness; McCarthy uses short, declarative sentences suggesting fragmented, essential existence. Both demonstrate that syntax is not neutral: sentence structure becomes a form of meaning, enacting the novel's philosophical and thematic concerns. The comparison illuminates how style functions as content. Woolf's sentences are architecturally complex. They contain multiple clauses, subclauses, shifts in perspective, and temporal nestings. A single sentence might move through past memory, present perception, future anticipation, and interior speculation. This complexity enacts stream of consciousness: thoughts do not arrive in orderly sequence but layer, overlap, and interconnect. The reader must hold multiple elements simultaneously. Punctuation is comparatively light: semicolons, dashes, and commas suspend rather than terminate, allowing thought to keep moving across grammatical units. McCarthy's sentences are stripped and stark. Short subjects, simple verbs, frequent terminal periods. Many sentences are fragments. The repetitive shape and absolute declarations suggest a mind reduced to essentials. In a post-apocalyptic world, elaboration seems unaffordable; language has been reduced to its survival-relevant elements. The descriptive density differs radically. Woolf layers sensory detail — colours, sounds, scents, associations — alongside interior commentary. A single moment expands to contain consciousness's richness. McCarthy provides minimal description, often only what is immediately visible or audible to the father and son. What remains is skeletal, essential, almost hostile to language's tendency toward elaboration. The treatment of time differs. Woolf's syntax contains temporal multiplicity: past memory, present perception, imagined future all occupy the same grammatical space. Time becomes psychological rather than sequential. McCarthy's sentences are largely locked in the immediate present. Actions unfold step by step. Memory is rationed; future is foreclosed. Time becomes a single forward-moving sequence. The difference between these syntactic approaches to time shapes reader experience fundamentally. Finally, voice and relationship to interiority differ. Woolf's syntax enacts consciousness through free indirect style, creating reader identification with the character's mental experience; we share Clarissa's thoughts, perceptions, and hesitations. McCarthy's detached external narration, in which the father and the boy often go unnamed and dialogue often goes unattributed, distances the reader from interiority and forces us to observe from outside. Voice creates opposite relational positions. In conclusion, both Woolf and McCarthy demonstrate that syntax enacts meaning: Woolf's elaboration embodies consciousness's richness, McCarthy's reduction embodies a post-apocalyptic essential existence. Form becomes philosophy.",
  structureTemplate:
    'Para 1: Intro on syntax as meaning. Para 2-6: Compare sentence lengths, punctuation, descriptive approaches, time representation, voice and perspective. Para 7: Conclusion on how style enacts thematic content.',
  connectives: [
    'Similarly',
    'Both authors',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'Whereas',
    'In Woolf',
    'In McCarthy',
  ],
}

const guide15: ComparisonGuide = {
  id: 'language-imagery-1',
  // BOARD-ISOLATION NOTE: Wider-reading / language-technique guide rather than an exam-pairing.
  // - "Animal Farm" (Orwell) sits on AQA Modern Texts (Paper 2 Section A); also widely studied at
  //   KS4 outside the exam set-text lists.
  // - "Things Fall Apart" (Achebe) is NOT on the AQA Modern Texts list; it is on Edexcel IGCSE Lit
  //   and is widely used as KS4/post-16 wider reading.
  // Treat this guide as a language-technique illustration rather than a single-board pairing.
  title: 'Language Guide (wider reading): Animal Imagery in Moral Critique',
  board: 'Cross-spec wider reading (AQA Modern Texts + Edexcel IGCSE / wider reading)',
  textPair: [
    'Animal Farm - George Orwell (AQA Modern Texts)',
    'Things Fall Apart - Chinua Achebe (Edexcel IGCSE Lit / wider reading; not on AQA Modern Texts)',
  ],
  themes: ['Language and power', 'Symbolism and critique', 'Representation and truth'],
  comparisonPoints: [
    {
      point: 'Animal as symbolism',
      text1Evidence: 'All animals are equal, but some animals are more equal than others',
      text2Evidence: 'The white man is very strange. He does not understand our customs',
      analysis:
        'Orwell uses animals as direct substitutes for human political figures; Achebe uses animals in traditional storytelling. Different symbolic functions.',
    },
    // Corrected cross-text attribution: replaced the Nineteen Eighty-Four slogan ("War is peace...") with a verified Animal Farm line — the amended Seventh Commandment ("All animals are equal, but some animals are more equal than others") and the simplified maxim "Four legs good, two legs bad" — both quoted accurately and used to illustrate Orwell's strategies of political language manipulation within Animal Farm itself.
    {
      point: 'Language manipulation',
      text1Evidence: 'Four legs good, two legs bad',
      text2Evidence:
        'They told stories about the white man, but the meaning shifted with each telling',
      analysis:
        'Orwell shows manipulation through reductive sloganeering — a complex political situation collapsed into a four-word chant the sheep can bleat on cue. Achebe shows narrative instability, where the same story shifts meaning with each retelling. Different linguistic strategies for obscuring truth.',
    },
    {
      point: "Critique's target",
      text1Evidence: 'Totalitarian power mechanisms',
      text2Evidence: 'Colonial interpretation and misunderstanding',
      analysis:
        'Orwell critiques domestic oppression; Achebe critiques external misrepresentation. Different objects of linguistic analysis.',
    },
    {
      point: 'Metaphorical consistency',
      text1Evidence: 'Animals throughout; pig = political leader',
      text2Evidence: 'Animals are themselves; symbolic meaning depends on context',
      analysis:
        'Orwell sustains extended metaphor; Achebe uses embedded metaphor. Different relationships between literal and figurative.',
    },
    {
      point: 'Reader positioning',
      text1Evidence: 'Reader recognizes political allegory',
      text2Evidence: 'Reader must learn culture to interpret symbols',
      analysis:
        'Orwell expects Western political knowledge; Achebe requires cultural understanding. Different literacy demands.',
    },
  ],
  modelEssay:
    "George Orwell's 'Animal Farm' and Chinua Achebe's 'Things Fall Apart' both employ animal and metaphorical language in critiques of power and representation, yet serve different functions and address different audiences. Orwell uses animals as direct allegorical substitutes for political actors, critiquing totalitarian mechanisms of language control. Achebe uses animals within traditional narrative patterns, critiquing colonial misinterpretation of indigenous culture. Both demonstrate that language's structure and symbolic systems shape how truth can be perceived and how power operates. Orwell's use of animals is systematic and allegorical. The farm becomes USSR; the pigs become Soviet leadership; the commandments become communist ideology. This allows Orwell to present political critique through accessible fictional form. The famous commandment—'All animals are equal, but some animals are more equal than others'—uses logical contradiction to expose language's manipulation. The contradiction is precise: 'more equal' technically makes no sense because equality is binary. Yet readers understand the meaning: power corrupts egalitarian promises. The language has become weapon for obscuring truth through contradiction. Achebe's animal imagery serves different purpose. In Things Fall Apart, animals appear in traditional Igbo storytelling, carrying meanings dependent on cultural knowledge. The spider, the leopard, the python each carry symbolic weight within Igbo culture. Yet Western readers often miss these meanings, revealing how translation and interpretation become colonial. The critique is not of language manipulation but of interpretive colonization: Western readers impose meanings that ignore indigenous symbolic systems. The targets of critique differ: Orwell critiques totalitarian power mechanisms within modern state; Achebe critiques colonial appropriation of indigenous representation. Orwell's danger is that language can be deliberately manipulated to obscure truth. Achebe's danger is that language—stories, animals, metaphors—can be misinterpreted by outsiders claiming authority. Both suggest language's power is immense; they differ on whether danger comes from manipulation or misinterpretation. The metaphorical consistency differs. Orwell sustains extended metaphor throughout: animals remain substitutes for humans. Achebe's animals are themselves within cultural narrative while carrying meanings readers must learn. In Orwell, the metaphor is the meaning; in Achebe, the animals are literal while symbolism requires cultural literacy. Finally, reader positioning differs. Orwell assumes Western political knowledge enabling recognition of allegory. Achebe requires readers to encounter unfamiliar culture and interpret from within that culture rather than imposing outside meanings. In conclusion, both authors use animal imagery and metaphorical language to critique power mechanisms, yet address different forms of power's danger and expect different reader literacy.",
  structureTemplate:
    'Para 1: Intro on animal imagery in critique. Para 2-6: Compare symbolic functions, language strategies, critique targets, metaphorical consistency, and reader positioning. Para 7: Conclusion on different dangers of power and interpretation.',
  connectives: [
    'Similarly',
    'Both texts',
    'While',
    'In contrast',
    'Yet both',
    'By comparison',
    'The key difference',
    'Significantly',
    'Conversely',
    'However',
    'In Orwell',
    'In Achebe',
  ],
}

export const comparisonGuides: ComparisonGuide[] = [
  guide1,
  guide2,
  guide3,
  guide4,
  guide5,
  guide6,
  guide7,
  guide8,
  guide9,
  guide10,
  guide11,
  guide12,
  guide13,
  guide14,
  guide15,
]
