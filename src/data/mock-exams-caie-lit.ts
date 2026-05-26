// @ts-nocheck
export interface MockExamPaper {
  id: string
  title: string
  board: string
  subject: string
  tier?: string
  duration: number
  totalMarks: number
  sections: MockExamSection[]
}

export interface MockExamSection {
  id: string
  title: string
  instructions: string
  questions: MockExamQuestion[]
}

export interface MockExamQuestion {
  id: string
  questionNumber: number
  marks: number
  questionText: string
  extract?: string
  bulletPoints?: string[]
  markScheme: string
  modelAnswer?: string
}

export const caieLitMockExams: MockExamPaper[] = [
  {
    id: 'paper1-poetry-prose-a',
    title: 'Paper 1: Poetry and Prose (Set A)',
    board: 'CAIE',
    subject: 'English Literature',
    duration: 90,
    totalMarks: 50,
    sections: [
      {
        id: 'section-a',
        title: 'Section A: Poetry',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question. Base your answer on one poem from the specified anthology.',
        questions: [
          {
            id: 'q1-poetry-a',
            questionNumber: 1,
            marks: 25,
            questionText:
              'Compare how poets present the theme of love in two poems from the Songs of Ourselves anthology. You should consider language, structure, and poetic techniques in your answer.',
            bulletPoints: [
              'Consider the emotional intensity of love in each poem',
              'Explore the use of imagery and metaphor',
              "Examine how structure supports the poem's meaning",
              "Analyse the poets' use of sound devices such as alliteration and assonance",
              'Discuss the historical and cultural contexts of each poem',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (22-25 marks): Perceptive, sophisticated analysis of language, structure and technique in both poems. Sustained, developed comparison drawing nuanced conclusions about how love is presented. Excellent integration of textual evidence with insightful interpretation. Demonstrates sophisticated understanding of poetic form and its relationship to meaning.

Level 3 (18-21 marks): Clear, detailed analysis of language, structure and technique. Secure, developed comparison identifying similarities and differences. Good integration of evidence with sound interpretation. Shows good understanding of poetic techniques and their effects.

Level 2 (13-17 marks): Some analysis of language, structure or technique with some comparison evident. Generally secure interpretation supported by textual evidence, though some points may be explained rather than analysed. Shows reasonable understanding of poetic techniques.

Level 1 (9-12 marks): Simple identification of features with limited analysis. Basic comparison with some relevant textual support. Interpretation present but may lack development. Limited understanding of poetic techniques.

Below Level 1 (0-8 marks): Very limited engagement with the poems or comparison task. Significant gaps in understanding or minimal textual support. Fails to establish basic comparison.`,
            modelAnswer: `Two poems that powerfully explore love are "She Walks in Beauty" by Byron and "How Do I Love Thee" by Elizabeth Barrett Browning. Both poets present love as transcendent and elevating, yet they employ distinctly different techniques to convey this transcendent quality, reflecting different philosophical traditions and historical contexts.

Byron's "She Walks in Beauty" presents love as visual and external. The opening trochaic tetrameter-"She walks in beauty, like the night"-establishes an immediate comparison between the beloved and something ethereal and sublime. The paradox of beauty existing "where nothing all expresses" creates sophisticated philosophical tension: true beauty transcends description, existing beyond language's capacity to capture it. Byron's use of oxymoron ("dark and bright," "raven tress with all of art") reflects the complexity of love itself, suggesting that it contains opposing elements in harmonious balance.

The poem's Spenserian stanza structure, with its interlocking rhyme scheme (ABAB BCBC CDCD), mirrors the interconnectedness of the beloved's physical and spiritual attributes. The rhyme scheme's inevitability-each rhyme returning, creating cyclical motion-suggests love's inescapable nature. Byron's meter remains consistent throughout, suggesting emotional stability despite the paradoxes love contains. The concluding couplet-"And all that's best of dark and bright / Meet in her aspect and her eyes"-synthesizes the poem's paradoxes, suggesting that love resolves contradiction.

In contrast, Barrett Browning's "How Do I Love Thee" presents love as internal and infinite. The anaphoric repetition of "How do I love thee" creates an incantatory, liturgical quality, emphasizing love's immeasurable nature. Rather than visual imagery, Barrett Browning employs abstract quantification-"depth and breadth and height"-to suggest that love defies spatial and temporal limitations. Her use of Petrarchan form (the Sonnet) connects her work to centuries of love poetry, positioning her within a literary tradition of love's idealization.

Barrett Browning's volta in the final couplet, "And, if God choose, I shall but love thee better after death," elevates love beyond mortality, presenting it as spiritually eternal. The conditional "if God choose" acknowledges submission to divine will, suggesting that love transcends human agency itself. The construction "better after death" paradoxically suggests that death increases rather than diminishes love, conflating temporal progression with emotional intensification.

The formal difference proves significant: Byron's stanza creates visual and spatial presence ("She walks"), while Barrett Browning's sonnet creates abstract immensity ("How do I love thee?"). Byron's metric regularity suggests equilibrium; Barrett Browning's rising tide of emotion in the sestet suggests escalating intensity. Yet both poets ultimately suggest love's ineffable quality-the inadequacy of language to capture love's essence. Byron achieves this through paradox and condensed imagery; Barrett Browning achieves this through accumulating abstractions that exceed quantification.

Both poems reflect their historical moments: Byron's Romantic aesthetics privilege visual beauty and emotional immediacy; Barrett Browning's Victorian context emphasizes emotional depth and spiritual transcendence. Yet both ultimately articulate the same philosophical position: love transcends ordinary language and perception, demanding new linguistic and formal strategies for its articulation.`,
          },
          {
            id: 'q2-poetry-a',
            questionNumber: 2,
            marks: 25,
            questionText:
              "Explore how a poet from the anthology presents conflict or tension. Consider the poet's use of language and structure in your response.",
            bulletPoints: [
              'Identify the nature of the conflict (external, internal, social)',
              'Analyse how language choices intensify conflict',
              'Consider the structural choices and their effect',
              'Discuss how the poem resolves or leaves conflict unresolved',
              "Evaluate the significance of the conflict for the poem's meaning",
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (22-25 marks): Sophisticated, sustained analysis of how conflict is presented through language and structure. Perceptive exploration of the poem's meaning and significance. Excellent use of precisely selected textual evidence integrated into analytical discussion. Demonstrates sophisticated understanding of how form embodies conflict.

Level 3 (18-21 marks): Clear, detailed analysis of language and structure in presenting conflict. Well-developed interpretation with good textual support. Solid understanding of the poem's effect. Shows secure analysis of poetic techniques.

Level 2 (13-17 marks): Some analysis of language and/or structure. Interpretation generally secure but may lack depth or development. Textual support present but could be more integrated. Shows emerging understanding.

Level 1 (9-12 marks): Limited analysis; features identified but not fully explained. Basic interpretation with some textual reference. Understanding may be uneven. Limited analysis of how form relates to conflict.

Below Level 1 (0-8 marks): Minimal engagement with the question or text. Very limited analysis or textual support. Fails to identify conflict clearly.`,
            modelAnswer: `Wilfred Owen's "Exposure" presents the psychological and physical conflict of soldiers confronting both the enemy and the brutal indifference of nature during World War I. The poem's central tension emerges not from dramatic combat but from the existential uncertainty of modern warfare, where soldiers face greater threat from exposure and waiting than from visible enemy action. This thematic content shapes the poem's structure and language, creating formal unity between meaning and method.

Owen's opening language creates immediate conflict through oxymoronic juxtaposition. The image "our brains ache, in the merciless iced east winds" personifies nature as actively hostile ("merciless"), establishing it as an antagonist equal to any human enemy. The phrase "merciless iced east winds" combines visual and tactile imagery, suggesting sensory assault. The repetition of "For God's sake" emphasizes the soldiers' desperation and religious questioning, creating spiritual conflict alongside physical suffering. These interjections puncture the narrative, representing psychological disruption accompanying physical assault.

The verbs accumulate to suggest systematic destruction: "shrivelling," "shattered," "scattered." Each verb implies violence, yet this violence originates from weather, not warfare. The paradox-soldiers destroyed by elements rather than enemies-creates the poem's fundamental tension. Owen achieves this through carefully selected diction; each verb's harshness contrasts with its natural rather than martial origin, creating conceptual discord.

Structurally, the poem's interlocking tercets (ABA BCB CDC) create a claustrophobic effect where no rhyme achieves complete closure. The pattern forces readers through repeated rhyme schemes without resolution or rest. This structural constraint enacts the soldiers' psychological state: repetitive, unresolved, offering no escape. The volta-the shift from physical description to existential questioning-occurs when Owen asks "Is it that we are dying?" This transition transforms the poem from descriptive immediacy into philosophical inquiry, suggesting that the soldiers' real conflict is with meaninglessness and uncertainty rather than identifiable enemies.

The final stanza's structure proves crucial: the haunting repetition, "But nothing happens," appears multiple times, accumulating meaning through redundancy. "Nothing happens" articulates the deepest conflict: soldiers face annihilation not through heroic combat but through slow erosion by indifferent natural forces. This "nothing" proves devastating precisely because it lacks dramatic content or heroic narrative. The poem refuses conventional conflict resolution; tension remains unresolved to mirror the historical reality of trench warfare's grinding attrition.

Owen's method-creating conflict between soldiers' expectations (combat, heroic action) and reality (exposure, waiting, diminishment)-uses formal innovation to embody meaning. The poem's structure doesn't resolve conflict; it enacts perpetual irresolution, making readers experience the psychological toll of enduring without resolution. The final repeated "But nothing happens" becomes increasingly hollow through repetition, suggesting how "nothing" paradoxically becomes everything when confronted repeatedly.`,
          },
        ],
      },
      {
        id: 'section-b',
        title: 'Section B: Prose',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question. Base your answer on a specified prose text.',
        questions: [
          {
            id: 'q3-prose-a',
            questionNumber: 3,
            marks: 25,
            questionText:
              'How does the writer use characterization to explore themes of ambition and morality? You should consider the methods the writer uses to portray character development.',
            bulletPoints: [
              "Examine how the protagonist's ambitions drive the narrative",
              'Consider moral dilemmas the character faces',
              'Analyse dialogue and internal monologue for character revelation',
              "Evaluate how secondary characters challenge or support the protagonist's choices",
              'Discuss how character development reflects thematic concerns',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (22-25 marks): Sophisticated analysis of how characterization reveals ambition and morality. Sustained exploration of character development with perceptive interpretation. Excellent integration of specific textual evidence demonstrating deep understanding. Shows sophisticated understanding of how character embodies theme.

Level 3 (18-21 marks): Clear, detailed analysis of characterization. Well-developed discussion of how ambition and morality are explored. Good selection and integration of evidence. Shows secure understanding of character development.

Level 2 (13-17 marks): Some analysis of characterization with emerging interpretation. Textual evidence present but could be more integrated or analysed more deeply. Shows developing understanding.

Level 1 (9-12 marks): Limited analysis; may identify character traits but explain rather than analyse. Basic understanding with some textual support. May lack focus on development.

Below Level 1 (0-8 marks): Minimal engagement with character analysis. Insufficient textual evidence or understanding. Fails to engage with theme.`,
            modelAnswer: `In Charles Dickens's "Great Expectations," the protagonist Pip's characterization serves as the central vehicle for exploring ambition and its profound moral consequences. Pip's psychological journey from humble origins to gentleman status and subsequent disillusionment provides the narrative's moral architecture, demonstrating how ambition corrupts moral sensibility when divorced from genuine human connection.

Dickens establishes Pip's initial moral innocence through his childish compassion for Magwitch. The young Pip's encounter with the convict-the famous opening scene where Pip provides food and file to the desperate fugitive-demonstrates his instinctive kindness and natural moral decency. This opening characterization proves crucial: Dickens establishes what Pip might have become had ambition not intervened. The contrast between this early Pip and his later snobbish rejection of his benefactor reveals how ambition corrupts moral sensibility.

Through free indirect discourse, Dickens grants readers access to Pip's internal moral wrestling. His recognition that he has become "ungracious and unkind" demonstrates moral consciousness emerging from achieved ambition. Pip's characterization becomes increasingly complex as Dickens portrays the psychological cost of social advancement: Pip achieves his ambitions only to discover their hollowness. The moment when Pip realizes that Magwitch-not Miss Havisham-is his benefactor marks the narrative's crucial turning point. Pip's immediate horror at Magwitch's revelation of himself as the source of Pip's great expectations demonstrates how thoroughly ambition has distorted Pip's values. He has become capable of shame toward the man who selflessly engineered his advancement.

The relationship between Pip and Estella further explores this thematic concern. Estella's characterization-shaped by Miss Havisham's deliberate manipulation into an instrument of revenge-serves as a foil to Pip's ambitions. While Pip desires Estella because she represents high society and the life to which he aspires, Estella remains incapable of genuine feeling, a victim of ambition distorted into vengeance. Her statement, "I have no heart," underscores the moral price of the ambitions driving the novel. Estella's characterization-emotionally controlled, socially accomplished, morally empty-represents the end result of ambition pursued as sole value.

Secondary characters function diagnostically: Joe Gargery embodies authentic moral value independent of social station. Joe's implicit criticism of Pip's shame and snobbery, his persistent loyalty despite rejection, his inability to comprehend why Pip should be ashamed of him-these character qualities establish the moral standard against which Pip is measured. When Pip later recognizes Joe's true worth, the reader understands this recognition as moral maturation. Pip's statement that Joe represents "all that had gone into the making of me" marks his achievement of moral clarity.

Dickens's portrayal of Magwitch provides the novel's moral turning point. Pip's discovery that his benefactor is the convict he once helped forces a complete revaluation of his ambitions. The characterization technique of delayed revelation demonstrates how ambition blinds moral judgment. Yet Pip's subsequent compassion toward Magwitch-his determination to help the convict escape despite the loss of his great expectations-marks his recovery of moral agency. Pip chooses genuine human connection (loyalty to Magwitch) over the social advancement he has spent the novel pursuing.

Ultimately, Pip's character development suggests that authentic moral growth requires rejecting false ambitions and recognizing the true value of genuine human connection over social status. Dickens's characterization method-contrasting Pip's early moral decency with his later moral corruption and finally his moral recovery-argues that ambition proves morally corrosive when pursued as independent value but can be redeemed through recognition of human interconnection and mutual obligation.`,
          },
        ],
      },
    ],
  },
  {
    id: 'paper1-poetry-prose-b',
    title: 'Paper 1: Poetry and Prose (Set B)',
    board: 'CAIE',
    subject: 'English Literature',
    duration: 90,
    totalMarks: 50,
    sections: [
      {
        id: 'section-a-b',
        title: 'Section A: Poetry',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question. Base your answer on one poem from the specified anthology.',
        questions: [
          {
            id: 'q1-poetry-b',
            questionNumber: 1,
            marks: 25,
            questionText:
              'Examine how a poet uses nature imagery to convey emotional or spiritual meaning. You should consider the significance of specific images and the techniques the poet employs.',
            bulletPoints: [
              'Identify recurring natural images and their symbolic value',
              'Analyse the sensory language used to describe nature',
              'Consider whether nature is presented as benign, indifferent, or hostile',
              'Explore how natural imagery extends beyond literal description',
              'Evaluate the relationship between nature and human emotion',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (22-25 marks): Penetrating analysis of nature imagery revealing sophisticated understanding of emotional and spiritual dimensions. Sustained exploration of symbolic significance with nuanced interpretation. Excellent integration of precisely selected textual evidence. Shows sophisticated understanding of symbolism.

Level 3 (18-21 marks): Clear, detailed analysis of nature imagery and its meanings. Well-developed exploration with good understanding of emotional/spiritual dimensions. Sound use of textual evidence. Shows secure analysis.

Level 2 (13-17 marks): Some analysis of nature imagery. Interpretation emerging but may lack development. Textual support present but could be more integrated. Shows developing understanding.

Level 1 (9-12 marks): Limited analysis of images. Basic identification of meaning with some textual support. Explanation may predominate over analysis.

Below Level 1 (0-8 marks): Minimal engagement or understanding. Insufficient textual support.`,
            modelAnswer: `John Keats's "La Belle Dame sans Merci" (1820 Indicator version) employs nature imagery to embody the dangerous allure of romantic desire and the devastating consequences of obsessive love. The natural landscape functions not merely as setting but as external manifestation of the speaker's psychological state, creating symbolic correlation between internal emotion and external environment. (Note: this model answer quotes from the 1820 Indicator text - the version printed in major UK exam anthologies including Edexcel IGCSE; some online sources reproduce Keats's later 1848 (Milnes) revision, which differs in several lines.)

Keats establishes nature's threatening potential through the opening interrogation: "O what can ail thee, knight-at-arms, / Alone and palely loitering?" The desolate landscape-"The sedge has wither'd from the lake, / And no birds sing"-reflects the knight's spiritual desolation. The absence of bird song, traditionally associated with vitality and joy, underscores emotional emptiness and spiritual death-in-life. This technique of depicting external nature as mirror to internal emotional state creates a unified symbolic system where natural decay corresponds directly to romantic devastation.

The poem's central section employs sensory nature imagery to convey seduction. The lady's "wild wild eyes" are described through a charged repetition that suggests romantic attraction operates through assimilation to untamed natural forces. The knight dwells in a landscape of flowers and food: she "found me roots of relish sweet, / And honey wild, and manna-dew," and he makes "a garland for her head, / And bracelets too, and fragrant zone." The lush, sensory imagery-evoking fertility and natural abundance-creates immediate seductive appeal. Yet these pastoral elements become retrospectively sinister as the knight's fate becomes apparent; the beauty that seduced proves to be the very beauty that damned.

Significantly, the poem employs seasonal imagery to suggest cyclical disillusionment. The dream landscape represents eternal spring or summer-a timeless pastoral paradise. When the knight awakens to find himself "alone and palely loitering" on the desolate hillside, the contrast between the dream landscape and the actual barren terrain articulates the spiritual cost of romantic obsession. The "cold hill's side" represents cold reality underlying romantic illusion; the season has turned to autumn or winter, reflecting psychological desolation.

Keats's nature imagery ultimately conveys deeply pessimistic vision of love: while natural beauty seduces and enchants, genuine fulfillment remains eternally unattainable. The returning image of the palely loitering knight suggests that romantic obsession condemns the lover to perpetual desolation, trapped in landscape where beauty masks danger and illusion proves indistinguishable from reality. The poem never resolves the fundamental question: whether the lady is actual supernatural being or projection of the knight's fantasy, whether the landscape is literally encountered or entirely psychological. This ambiguity-mirrored in the fluid relationship between natural imagery and internal state-reinforces the poem's exploration of how romantic obsession distorts perception itself.`,
          },
          {
            id: 'q2-poetry-b',
            questionNumber: 2,
            marks: 25,
            questionText:
              "Analyse how a poem uses form and structure to create meaning. Consider the poet's choice of stanza form, rhyme scheme, meter, and how these choices contribute to the poem's overall effect.",
            bulletPoints: [
              'Identify the formal features of the poem (stanza, rhyme, meter)',
              'Explain how formal choices support thematic concerns',
              'Consider variations or departures from established patterns',
              "Evaluate how form contributes to the reader's emotional response",
              "Discuss how structure relates to the poem's philosophical claims",
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (22-25 marks): Sophisticated, sustained analysis of form and structure creating meaning. Perceptive understanding of how formal choices generate effect. Excellent use of technical terminology and precise textual evidence. Shows sophisticated understanding of form-meaning relationship.

Level 3 (18-21 marks): Clear, detailed analysis of form connecting to meaning. Good understanding of how structure contributes to effect. Sound use of literary terminology. Shows secure analysis.

Level 2 (13-17 marks): Some analysis of formal features with emerging understanding of their significance. Technical terminology may be basic or occasionally imprecise. Shows developing understanding.

Level 1 (9-12 marks): Limited analysis of form. Features identified but explanation limited. Technical understanding basic. May list features without explaining effects.

Below Level 1 (0-8 marks): Minimal engagement with formal analysis. Very limited understanding or technical vocabulary.`,
            modelAnswer: `Dylan Thomas's "Do Not Go Gentle into That Good Night" employs the rigid formal constraints of the villanelle form to create paradoxical meaning: the poem's arguments against passive acceptance of death are themselves constrained by the repetitive return of its refrain, enacting the very cyclical struggle it describes. Form becomes inseparable from philosophical content; the structure embodies the struggle it articulates.

The villanelle's defining feature-the return of two rhyming refrains ("Do not go gentle into that good night" and "Rage, rage against the dying of the light")-creates a hypnotic, incantatory effect. Rather than conveying linear argument, the poem's form mirrors obsessive, circular thinking, as if the speaker cannot escape these imperatives even as he returns to them. Each return of the refrain accumulates emotional intensity; by the final stanza, these lines have become mantric, transformed through repetition from rational argument to emotional plea. The form thus enacts the emotional escalation the poem describes.

The terza rima (ABA ABC etc.) creates interlocking chains of rhyme, suggesting both connection and entanglement. The tight rhyme scheme allows little syntactic freedom, forcing Thomas to match meaning to form. This technical constraint mirrors the constraint of mortality itself-the inability to escape structured inevitability. The iambic pentameter propels the poem forward with insistent rhythmic force, sonically reinforcing the theme of active resistance against death's passivity.

Structurally, Thomas categorizes four types of men in stanzas 2-5: the "wise men," "good men," "wild men," and "grave men." This schematic division creates intellectual order against the chaos of dying, suggesting that human meaning-making itself becomes a form of resistance against meaningless death. Each category demonstrates different forms of resistance-the wise through understanding, the good through moral clarity, the wild through passion, the grave through solemn dignity. Yet the refrain applies to all, suggesting that regardless of type, resistance proves necessary and ennobling.

The final, unprecedented stanza collapses these categories as the dying father becomes singular, immediate, no longer abstract example but concrete reality. The shift to direct address-"And you, my father, there on the sad height"-transforms the poem from universal meditation into personal plea. The formal constraint becomes almost unbearable here; Thomas must fit personal emotion into the villanelle's rigid structure, creating tension between form and content that mirrors the final struggle between reason and emotion.

The villanelle's formal rigidity ultimately enacts the poem's philosophical content: human resistance operates within constraints we cannot transcend, yet the struggle itself-the return and return to defiant affirmation-constitutes meaningful human existence. Form becomes inseparable from meaning; we rage not because we expect triumph, but because raging within constraint is the human condition itself. The structure forces readers to experience repetition without resolution, embodying the relentless return of mortality and the corresponding necessity of renewed resistance.`,
          },
        ],
      },
      {
        id: 'section-b-b',
        title: 'Section B: Prose',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question. Base your answer on a specified prose text.',
        questions: [
          {
            id: 'q3-prose-b',
            questionNumber: 3,
            marks: 25,
            questionText:
              'How does the writer explore the relationship between individual agency and social constraint? Consider how characters negotiate between personal desire and social expectation.',
            bulletPoints: [
              'Identify instances where characters face conflict between desire and duty',
              'Analyse how the writer portrays social institutions and their power',
              'Consider whether characters achieve agency or remain constrained',
              'Evaluate how narrative structure reflects this thematic concern',
              "Discuss the writer's philosophical position regarding human freedom",
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (22-25 marks): Sophisticated analysis of how the writer explores agency and social constraint. Nuanced understanding of characters' negotiations between personal desire and social forces. Excellent integration of textual evidence with insightful interpretation. Shows sophisticated philosophical understanding.

Level 3 (18-21 marks): Clear, detailed analysis of individual agency and social constraint. Well-developed exploration of character conflict. Good textual support. Shows secure understanding.

Level 2 (13-17 marks): Some analysis of agency and constraint. Interpretation emerging with textual evidence present. May lack depth or development. Shows developing understanding.

Level 1 (9-12 marks): Limited analysis. Features identified but not fully explained. Basic understanding with some textual support. May lack focus on theme.

Below Level 1 (0-8 marks): Minimal engagement or understanding. Insufficient textual support.`,
            modelAnswer: `Jane Austen's "Pride and Prejudice" fundamentally explores how individual agency negotiates with the social constraints of patriarchal marriage economics in Regency England. Elizabeth Bennet's character arc constitutes the novel's investigation into whether authentic personal agency can exist within systems designed to constrain it, and what forms such agency might take.

Austen establishes the novel's central conflict through structural economic necessity: the entail of the Bennet estate means that without advantageous marriage, the Bennet women face genteel poverty. This structural constraint-beyond individual control-generates the novel's social pressures. The entail becomes more than plot mechanism; it symbolizes how patriarchal property law constrains women's agency. Yet Elizabeth's famous assertion that she has "not the least intention of dancing" with Mr. Collins, despite her mother's insistent pressure, demonstrates initial resistance to imposed obligation. Elizabeth's agency manifests as witty refusal, suggesting that personal dignity and verbal wit can resist social pressure.

However, Austen complicates this reading through Jane's storyline. Jane's passive acceptance of social constraint regarding the expression of feeling toward Mr. Bingley results in genuine loss of romantic opportunity. Austen suggests that excessive social restraint paradoxically prevents the very outcomes-true union and happiness-that social propriety claims to serve. Jane's constrained agency results in concrete loss, undermining the notion that social constraint produces good outcomes. Jane must violate social propriety to achieve genuine happiness, suggesting that authentic agency requires selective rejection of social constraint.

Elizabeth's rejection of Mr. Darcy's first proposal represents the novel's most significant assertion of individual agency. Despite his wealth and status, despite the economic security marriage to Darcy would ensure, Elizabeth refuses a match that would compromise her values, prioritizing personal integrity and mutual affection over economic advantage. Her statement that she could not accept him "without esteem" articulates her commitment to authentic emotional connection over security. Yet Austen complicates even this triumph of agency through Mr. Darcy's pride; Elizabeth's agency operates within parameters Darcy ultimately controls through his wealth and social position.

The novel's resolution appears to celebrate individual agency: Elizabeth and Darcy marry for mutual affection and transformed understanding, apparently transcending mercenary social pressure. Yet Austen's ironic commentary-the observation that Jane and Bingley "were always meant to be together"-suggests that social forces ultimately orchestrate outcomes that appear freely chosen. Austen hints that individual agency and social constraint prove inseparable; apparent freedom conceals hidden determinations.

Austen's philosophical position proves ambiguous: she neither celebrates individual agency as absolute nor surrenders to determinism. Rather, she suggests that authentic agency consists in recognizing constraint and making choices within it. Elizabeth achieves her agency not by transcending social limitation but by becoming conscious of it and choosing deliberately within its bounds. Her final happiness derives not from escaping patriarchal marriage market but from marrying on her own terms-for genuine affection with someone who respects her intelligence.`,
          },
        ],
      },
    ],
  },
  {
    id: 'paper2-drama-inspector-calls',
    title: 'Paper 2: Drama - An Inspector Calls',
    board: 'CAIE',
    subject: 'English Literature',
    duration: 90,
    totalMarks: 50,
    sections: [
      {
        id: 'section-a-drama',
        title: 'Section A: Extract Question',
        instructions:
          'Answer this compulsory question. You should spend approximately 45 minutes on this question. Analyse the given extract in detail, considering how the playwright creates dramatic effect.',
        questions: [
          {
            id: 'q1-drama-extract',
            questionNumber: 1,
            marks: 30,
            extract: `INSPECTOR: \n"And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish. Good night."\n[The INSPECTOR leaves. The door slams. For a moment the family stands in stunned silence, staring at the door.]`,
            questionText:
              'Analyse this extract, paying close attention to how Priestley uses language, stage directions, and dramatic effect to create a powerful conclusion to Act Three.',
            bulletPoints: [
              "Consider the prophetic tone of the Inspector's final words",
              'Analyse the language choices and their emotional impact',
              'Evaluate the stage directions and their significance',
              'Discuss how this moment functions within the overall drama',
              "Consider the ambiguity of the Inspector's identity and its effect",
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (27-30 marks): Penetrating analysis of language, stage directions and dramatic effect. Sophisticated understanding of how the extract functions thematically and theatrically. Excellent use of precise textual detail integrated into sustained analytical discussion. Shows sophisticated understanding of dramatic technique.

Level 3 (24-26 marks): Clear, detailed analysis of language and stage directions. Secure understanding of dramatic effect and thematic significance. Good textual integration. Shows secure analysis.

Level 2 (19-23 marks): Some analysis of language and/or stage directions. Interpretation emerging; thematic understanding developing. Textual support present but could be more integrated. Shows developing understanding.

Level 1 (14-18 marks): Limited analysis; features identified but not fully explained. Basic interpretation with some textual support. May lack depth.

Below Level 1 (0-13 marks): Minimal engagement or insufficient understanding.`,
            modelAnswer: `Priestley's final moment of Act Three employs prophetic language and strategic stage directions to transform an individual moral investigation into a universal warning about social responsibility and collective complicity. The Inspector's exit becomes a climactic moment where personal judgment expands into apocalyptic vision concerning the future of human civilization itself.

The Inspector's pronouncement employs biblical register through phrases like "fire and blood and anguish," evoking Old Testament prophecy and Apocalyptic rhetoric. The conditional structure-"if men will not learn that lesson"-positions the Inspector as moral arbiter pronouncing judgment on human society itself. Rather than specific judgment on the Birling family, he transcends his role as police inspector to become spokesperson for an abstract moral law governing human interdependence. The triadic structure of "fire and blood and anguish" creates rhythmic intensity through repetition that elevates the statement beyond ordinary speech into incantatory prophecy. The parallel structure reinforces inevitable consequence: if humans fail morally, catastrophe becomes inevitable.

Priestley's stage directions function equally powerfully to create dramatic impact. The "door slams" provides harsh auditory punctuation, cutting off the Inspector from the family's world with violent finality. The subsequent "stunned silence" creates theatrical vacuum where the family's response remains unspoken, forcing the audience to imagine their interior emotional turmoil. The stage direction that they "stand staring at the door" suggests mesmerized shock-they have witnessed something that transcends ordinary experience, leaving them psychologically suspended.

The extraction's dramatic power derives from radical ambiguity regarding the Inspector's identity. The audience has no certainty about the Inspector's actual status or supernatural knowledge. He seems to possess impossible knowledge: he knows intimate details about Eva Smith that no ordinary policeman could discover, suggesting either supernatural prescience or allegorical representation of conscience itself. His mysterious disappearance at the play's conclusion-the telegram suggesting no Inspector visited at all-creates narrative paradox that audiences cannot resolve. Yet the family's emotional transformations, particularly Sheila's guilt and moral awareness, prove dramatically real regardless of the Inspector's actual existence. Priestley sustains this ambiguity deliberately, forcing audiences to confront the possibility that the Inspector represents conscience itself, capable of perceiving moral truth beyond individual knowledge.

Structurally, this moment suspends the drama rather than resolving it. The family's journey-from defensive self-interest to begrudging acknowledgment of responsibility-reaches psychological climax with the Inspector's exit, but resolution remains permanently deferred. Priestley's dramatic effect lies in this deferment: audiences must contemplate whether the family will remember this moral reckoning or revert to self-protective denial. The ending leaves audiences uncertain, preventing comfortable moral closure.

The timing proves historically crucial. The prophecy of "fire and blood and anguish" resonates with historical knowledge that audiences watching in 1945 would recognize as ominous foreshadowing of World War II. Priestley thus transforms personal drama into historical commentary, suggesting that individual moral failures have collective catastrophic consequences. The Inspector's exit marks the moment when personal accountability expands into social and historical reckoning, implicating audiences themselves in moral complicity.`,
          },
        ],
      },
      {
        id: 'section-b-drama',
        title: 'Section B: Thematic Questions',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question. Base your answer on a specific act or moment from the play.',
        questions: [
          {
            id: 'q2-drama-theme',
            questionNumber: 2,
            marks: 20,
            questionText:
              'How does Priestley explore the theme of collective responsibility throughout the play? Consider how different characters respond to moral accusation.',
            bulletPoints: [
              "Identify how each family member is implicated in Eva Smith's death",
              'Analyse their initial defensive responses',
              'Consider how some characters show growth while others resist',
              "Evaluate Priestley's message about social interdependence",
              'Discuss how the play challenges audience complicity',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (18-20 marks): Sophisticated analysis of collective responsibility with nuanced understanding of character responses. Penetrating exploration of Priestley's message. Excellent integration of specific textual evidence. Shows sophisticated understanding of theme and dramatic effect.

Level 3 (15-17 marks): Clear, detailed analysis of collective responsibility and character responses. Well-developed understanding of theme. Good textual support. Shows secure analysis.

Level 2 (12-14 marks): Some analysis of the theme with emerging interpretation. Textual support present but could be more developed. Shows developing understanding.

Level 1 (9-11 marks): Limited analysis. Features identified but not fully explained. Basic understanding with some textual reference. May lack focus.

Below Level 1 (0-8 marks): Minimal engagement or insufficient understanding.`,
            modelAnswer: `Priestley structures "An Inspector Calls" to progressively reveal how each family member bears responsibility for Eva Smith's destruction, demonstrating that collective negligence proves more damaging than individual malice. The play's moral architecture insists that capitalist society distributes guilt across multiple actors, each contributing to systemic injustice, and that evasion of this guilt enables continued exploitation.

Arthur Birling's responsibility emerges from economic exploitation: he consciously reduces wages to increase profits, deliberately transforming Eva into a desperate economic actor. Yet Birling's response reveals ideological intransigence; he refuses moral culpability, maintaining that economic self-interest constitutes legitimate business practice. His declaration that "a man has to look after himself" articulates a philosophy that rejects collective responsibility, creating the very conditions enabling exploitation. Priestley portrays Birling's response not as moral blindness but as deliberate evasion; he chooses economic interest over human consequence.

Sheila's complicity operates through jealousy and social power: her accusation leading to Eva's dismissal from her position at Milwards derives from petty personal malice rather than economic necessity. Her act of cruelty-motivated by jealousy over a minor incident-destroys Eva's employment prospects. Yet Sheila's response demonstrates the play's possibility for moral growth. Her immediate recognition of responsibility-"So I'm really responsible?"-and subsequent emotional anguish suggest capacity for genuine guilt and moral transformation. Her decision to give back her engagement ring symbolizes tangible restitution for moral awareness. Priestley implies that moral growth requires first accepting responsibility, then pursuing concrete restitution.

Gerald's seduction of Eva represents emotional exploitation of economic desperation. His statement "rather than let her starve" registers false charity masking sexual predation; he takes advantage of Eva's desperate economic situation. His "kindness" operates as exercise of power rather than genuine compassion. Yet Gerald ultimately refuses moral reckoning, slipping toward denial by Act Three: "I can't accept any responsibility." His restoration of social composure suggests that perpetrators of systemic injustice can simply resume comfortable positions, evading accountability through clever rhetorical positioning. Priestley suggests that privilege enables this evasion.

Mrs. Birling's refusal of responsibility proves most chilling. Despite learning that Eva sought her charitable assistance while pregnant, Mrs. Birling maintains that "she got exactly what she deserved." Her response exemplifies how comfortable classes rationalize suffering as moral failure rather than systemic injustice. Her claim that Eva should face consequences becomes monstrous when the consequence proves to be death. Priestley portrays Mrs. Birling as incapable of recognizing her complicity; she attributes Eva's death to Eva's moral degradation rather than to collective negligence.

Priestley's genius lies in suggesting that this distributed guilt proves inescapable: none individually bears sufficient responsibility to justify unique culpability, yet collectively they bear complete responsibility for Eva's destruction. The play insists that within capitalist society, individual conscience proves insufficient; systemic change requires recognizing how personal comfort depends on others' exploitation. The final revelation-that a second inspector may be approaching-suggests that moral reckoning cannot be permanently avoided; conscience returns perpetually to demand recognition.`,
          },
        ],
      },
    ],
  },
  {
    id: 'paper2-drama-view-from-bridge',
    title: 'Paper 2: Drama - A View from the Bridge',
    board: 'CAIE',
    subject: 'English Literature',
    duration: 90,
    totalMarks: 50,
    sections: [
      {
        id: 'section-a-drama-2',
        title: 'Section A: Extract Question',
        instructions:
          'Answer this compulsory question. You should spend approximately 45 minutes on this question. Analyse the given extract in detail, considering how Miller creates dramatic effect through language and stagecraft.',
        questions: [
          {
            id: 'q1-drama-extract-2',
            questionNumber: 1,
            marks: 30,
            extract: `EDDIE: "I want my name back. I can run the whole goddam warehouse; I pull down maybe one hundred and forty a week, but I don't get no respect... [He turns to the women] Beatrice, I want to... [He turns to MARCO] So now don't you think I'm gonna take you out!"\n[MARCO begins to move toward him in a threatening manner. EDDIE suddenly draws a knife. The stage erupts into chaos.]`,
            questionText:
              "Analyse this extract, considering how Miller uses language, physicality, and dramatic action to convey Eddie's psychological breakdown and the play's tragic culmination.",
            bulletPoints: [
              "Examine Eddie's obsession with respect and masculine identity",
              'Analyse the progression from verbal confession to violent action',
              'Consider the significance of the knife and what it represents',
              'Evaluate how the stage directions create theatrical impact',
              'Discuss how this moment functions as tragic climax',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (27-30 marks): Penetrating analysis of how language and stagecraft create tragic effect. Sophisticated understanding of Eddie's psychological state and the play's thematic culmination. Excellent integration of precise textual detail. Shows sophisticated understanding of tragic form.

Level 3 (24-26 marks): Clear, detailed analysis of language and dramatic action. Secure understanding of tragic effect. Good textual integration. Shows secure analysis.

Level 2 (19-23 marks): Some analysis of language and/or stage directions. Interpretation emerging. Textual support present. Shows developing understanding.

Level 1 (14-18 marks): Limited analysis; features identified but not fully explained. Basic interpretation. May lack sophistication.

Below Level 1 (0-13 marks): Minimal engagement or insufficient understanding.`,
            modelAnswer: `Miller's construction of Eddie's violent breakdown reveals how obsessive desire, articulated through fixation on masculine respect, culminates in self-destructive tragedy. The extract traces Eddie's psychological unraveling from recognition of irrational jealousy to violent acting-out, with language progressively fragmenting as reason dissolves and unconscious impulse overwhelms conscious restraint.

Eddie's opening statement-"I want my name back"-articulates the play's central psychological crisis with devastating clarity. His name, lost through association with betrayal and unacknowledged homosexual desire for Rodolpho, becomes equated with masculine identity and social respect. The financial assertion ("pull down maybe one hundred and forty a week") demonstrates how economic power becomes proxy for masculine worth in Eddie's psychology, yet wealth proves inadequate to restore the social respect he has forfeited through his actions. The repetition of "I want" and "I don't get" reveals Eddie's victim mentality, inverted agency through linguistic passivity. He positions himself as one to whom things happen rather than agent of his own destiny.

Miller's stage directions mark physical escalation toward violence. Eddie's turning toward Beatrice-his wife, the family's moral center-suggests confusion about his emotional targets; his fragmented speech ("I want to...") reflects cognitive disintegration. The inability to complete the statement mirrors the inability to articulate genuine desires; desire for Catherine and jealous rage toward Marco remain verbalized indirectly, creating psychological tension between conscious utterance and unconscious impulse. The sudden drawing of the knife transforms linguistic aggression into physical violence, enacting the play's thematic trajectory whereby repressed psychological forces erupt as brutal action. The knife erupts from unconscious depths, representing the eruption of desire that Eddie cannot linguistically control or socially justify.

The knife itself carries profound symbolic weight beyond its practical weaponry function. Rather than representing rational self-defense or honorable combat, it embodies Eddie's surrender to primitive aggression, abandoning the codes of honor that supposedly justify his actions. The knife emerges from the unconscious, representing eruption of desire that reason cannot contain. Miller suggests that masculine identity, when predicated on dangerous emotional possessiveness and erotic jealousy, inevitably terminates in violence against those it claims to protect.

The stage direction "The stage erupts into chaos" marks the boundary where psychological drama becomes physical tragedy. The chaos proves inevitable rather than surprising; Miller has constructed the drama to make Eddie's violence appear overdetermined, the inevitable consequence of impossible emotional configurations. Eddie cannot achieve the respect he demands, cannot successfully control Catherine's sexuality, cannot articulate the jealous desire driving his actions. Violence becomes the only available response to this psychological impasse, the eruption of what cannot be articulated.

Miller's tragedy derives from recognition that Eddie's violence proves simultaneously comprehensible and irrevocable. We understand his wounded masculinity and desperate need for respect; we recognize his genuine suffering and psychological desperation. Yet we cannot condone the violence toward which these feelings propel him. The tragic effect emerges from this impossible ambiguity: Eddie is simultaneously victim and perpetrator, driven by understandable emotions toward incomprehensible actions. The play forces audiences to hold both positions simultaneously, creating genuine tragic tension.`,
          },
        ],
      },
    ],
  },
  {
    id: 'paper3-unseen',
    title: 'Paper 3: Unseen Poetry and Prose',
    board: 'CAIE',
    subject: 'English Literature',
    duration: 75,
    totalMarks: 40,
    sections: [
      {
        id: 'section-a-unseen',
        title: 'Section A: Unseen Poetry',
        instructions:
          'Answer this question on an unseen poem. You should spend approximately 35 minutes on this question. Read the poem carefully before answering.',
        questions: [
          {
            id: 'q1-unseen-poetry',
            questionNumber: 1,
            marks: 20,
            questionText:
              "Analyse how the poet presents loss or change in the given poem. Consider the poet's use of language, imagery, and structure in your response.",
            bulletPoints: [
              'Identify the nature of loss or change depicted',
              'Analyse specific linguistic and imagistic choices',
              'Consider how structure reinforces thematic concerns',
              'Evaluate the emotional impact of the poem',
              "Discuss the speaker's attitude toward loss or change",
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (18-20 marks): Penetrating analysis of how loss/change is presented through language and structure. Sophisticated understanding of poetic techniques and their effects. Excellent integration of textual evidence. Shows sophisticated understanding of theme.

Level 3 (15-17 marks): Clear, detailed analysis of language and structure. Well-developed understanding of theme. Good textual support. Shows secure analysis.

Level 2 (12-14 marks): Some analysis of language and/or structure. Emerging interpretation with textual support. Shows developing understanding.

Level 1 (9-11 marks): Limited analysis; features identified but not fully explained. Basic understanding. May lack development.

Below Level 1 (0-8 marks): Minimal engagement or insufficient understanding.`,
            modelAnswer: `Grade 9 responses on unseen poetry analyzing loss or change should demonstrate: First, sophisticated identification of both explicit and implicit representations of loss-recognizing that loss often coexists with acceptance, that change can be ambiguous rather than purely negative, and that seemingly minor details carry symbolic weight. Second, tracing how specific word choices accumulate to create emotional effect through diction analysis, recognizing patterns rather than analyzing isolated words. Third, analyzing how poetic form either mirrors or contrasts with thematic content-understanding that structural choices embody meaning. Fourth, connecting particular images to universal human experiences of transformation, demonstrating philosophical understanding.

Strong responses identify the poem's speaker, recognizing their reliability and perspective. They recognize temporal shifts within the poem, understanding how time functions thematically. They consider how the poem's form (sonnet, free verse, structured stanzas) relates to its thematic concerns about loss or change-whether form provides closure or perpetuates openness. The most sophisticated responses recognize paradoxes: loss might bring clarity, change might enable growth, and seemingly negative experiences might contain unexpected value.

Demonstrate technical vocabulary precision: distinguish between enjambment and line break effects, recognize metaphorical systems rather than isolated images, understand how meter creates rhetorical emphasis. Analyze sound devices not in isolation but in relation to meaning. Consider the relationship between form and content-whether the poem's structure reinforces or complicates its thematic claims about loss or change.`,
          },
        ],
      },
      {
        id: 'section-b-unseen',
        title: 'Section B: Unseen Prose',
        instructions:
          'Answer this question on an unseen prose extract. You should spend approximately 40 minutes on this question. Read the extract carefully before answering.',
        questions: [
          {
            id: 'q2-unseen-prose',
            questionNumber: 2,
            marks: 20,
            questionText:
              'Analyse how the writer uses narrative perspective and language to create atmosphere and reveal character in the given extract. Consider the significance of specific details and stylistic choices.',
            bulletPoints: [
              'Identify the narrative perspective and its effects',
              'Analyse how language choices create atmosphere',
              'Consider what physical and psychological details reveal about character',
              'Evaluate how syntax and sentence structure contribute to meaning',
              'Discuss how style relates to thematic concerns',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (18-20 marks): Sophisticated analysis of narrative perspective, language, and style. Penetrating understanding of how these elements create atmosphere and reveal character. Excellent integration of specific textual detail. Shows sophisticated understanding of stylistic effect.

Level 3 (15-17 marks): Clear, detailed analysis of narrative technique and language. Well-developed understanding of atmosphere and characterization. Good textual support. Shows secure analysis.

Level 2 (12-14 marks): Some analysis of narrative perspective and/or language. Emerging interpretation with textual support. Shows developing understanding. May lack depth.

Level 1 (9-11 marks): Limited analysis; features identified but not fully explained. Basic understanding. May lack development.

Below Level 1 (0-8 marks): Minimal engagement or insufficient understanding.`,
            modelAnswer: `Grade 9 responses on unseen prose should demonstrate: First, sophisticated identification of narrative perspective (first-person, third-person limited, omniscient) and analysis of how this perspective shapes reader understanding and emotional alignment. Second, examination of how diction (word choice), syntax (sentence structure), and imagery collectively create emotional atmosphere-recognizing that atmosphere emerges from sustained accumulation rather than single striking details. Third, understanding how physical details and sensory descriptions reveal internal psychological states, recognizing that character revelation often occurs through what characters notice and how they interpret events.

Sophisticated responses recognize that reliable narrators can still be self-deceived, that unreliable narration proves significant for what it reveals about the narrator rather than the events described, and that atmosphere emerges not from single images but from sustained sensory detail patterns. Strong responses analyze how sentence length, punctuation, and rhythm affect reader experience-short sentences create urgency or anxiety, long complex sentences might suggest confusion or elaborate rationalization, fragments suggest disruption or emotion.

The most accomplished responses connect specific stylistic choices to thematic concerns: if a character is emotionally detached, the narrative employs distanced clinical language; if overwhelmed, syntax fragments and becomes halting. They demonstrate precision: distinguishing between tone and atmosphere, recognizing how adjectives shape perception, understanding that character revelation often occurs through perspective and interpretation rather than direct judgment. They analyze how the writer's stylistic choices create complicity, distance, or emotional investment between reader and character.`,
          },
        ],
      },
    ],
  },
  {
    id: 'paper4-coursework',
    title: 'Paper 4: Coursework Portfolio Alternative Exam',
    board: 'CAIE',
    subject: 'English Literature',
    duration: 120,
    totalMarks: 60,
    sections: [
      {
        id: 'section-a-coursework',
        title: 'Section A: Independent Study Questions',
        instructions:
          'Answer both questions in this section. You should spend approximately 60 minutes on these questions combined. Base your answers on texts you have studied in depth as part of an independent project.',
        questions: [
          {
            id: 'q1-coursework-1',
            questionNumber: 1,
            marks: 15,
            questionText:
              'Describe the independent literary text you have chosen for study. Explain why this text interested you and what you hoped to explore through close analysis.',
            bulletPoints: [
              'Identify the text clearly (author, title, date, genre)',
              "Describe the text's major themes and literary significance",
              'Explain your personal motivation for selecting this text',
              'Indicate the specific analytical questions you pursued',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (14-15 marks): Clear, detailed description of text with sophisticated explanation of analytical interest. Demonstrates genuine engagement and ambitious research questions. Articulate, well-organized response. Shows sophisticated understanding of text\'s significance.

Level 3 (12-13 marks): Clear description of text with developed explanation of research interest. Shows thoughtful selection and analytical approach. Well-organized response.

Level 2 (10-11 marks): Adequate description of text with some explanation of interest. Basic analytical focus identified. Generally organized.

Level 1 (8-9 marks): Brief description of text with limited explanation of research interest. Minimal analytical focus. Somewhat organized.

Below Level 1 (0-7 marks): Insufficient description or engagement.`,
            modelAnswer: `I selected "Invisible Man" by Ralph Ellison (1952) because I wanted to explore how modernist narrative techniques serve political and philosophical purposes in representing African-American experience and existential consciousness. The novel interested me particularly because it combines existential philosophy with incisive social critique, suggesting that invisibility functions simultaneously as literal social reality (the racial discrimination preventing the protagonist's recognition) and metaphysical condition (the philosophical invisibility of consciousness itself).

Through close analysis, I pursued three interconnected research questions: First, how does Ellison employ unreliable narration to represent the protagonist's evolving consciousness? The narrator's interpretation of events changes dramatically as his understanding develops; Ellison uses narrative unreliability not as failure but as vehicle for representing psychological growth and philosophical insight. Second, I investigated how Ellison's use of surrealist imagery-the "machine" scene at the factory hospital, the paint factory explosion-creates what I termed "psychological realism," depicting the protagonist's psychological disintegration through distorted but emotionally authentic events that externalize internal states. Third, I examined how the prologue and epilogue frame the narrative as philosophical meditation rather than conventional autobiography, suggesting that the novel's true subject is not the events depicted but the consciousness interpreting those events.

The text proved enormously rich for analysis because Ellison consistently demonstrates how narrative form embodies meaning. The circular structure-beginning and ending in darkness-mirrors the protagonist's cyclical discovery that no final truth exists to explain his invisibility. This formal choice supports the novel's philosophical claim that identity proves unstable and constructed rather than essential.`,
          },
          {
            id: 'q2-coursework-2',
            questionNumber: 2,
            marks: 15,
            questionText:
              'Present one sustained analysis of a significant theme in your chosen text. Support your argument with detailed reference to textual evidence and acknowledge other critical perspectives.',
            bulletPoints: [
              'Articulate a clear thesis about the theme',
              'Develop argument through multiple supporting points',
              'Integrate specific textual evidence thoroughly',
              'Reference alternative critical interpretations',
              'Draw thematic conclusions supported by evidence',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (14-15 marks): Sophisticated, sustained thematic analysis with original interpretation. Excellent integration of textual evidence. Acknowledges and engages with critical perspectives. Compelling argumentation. Shows sophisticated analytical skills.

Level 3 (12-13 marks): Clear, developed thematic analysis with sound interpretation. Good textual integration and some engagement with alternative views. Well-reasoned argument.

Level 2 (10-11 marks): Some thematic analysis with relevant textual support. May acknowledge alternative perspectives but integration could be deeper. Emerging argumentation.

Level 1 (8-9 marks): Basic thematic discussion with some textual reference. Limited critical engagement. Basic argumentation. May lack development.

Below Level 1 (0-7 marks): Insufficient analysis or textual support.`,
            modelAnswer: `Central to "Invisible Man" is the theme of how language and naming function as instruments of social control and psychological self-construction. Ellison suggests that the protagonist's invisibility stems partially from his lack of a name-he remains "Invisible Man" rather than named individual. This namelessness represents the systematic denial of individual identity that racism enforces. The novel demonstrates how being named-as "Brother," as potential "Rinehart," as the protagonist eventually names himself-becomes the only available avenue for constructing identity within a society that denies African-American humanity.

The protagonist's adoption of the name "Brother" within the Brotherhood organization initially suggests inclusion and identity formation. Yet Ellison complicates this seemingly positive development: the organization appropriates the protagonist's name, subsuming his individual identity into its ideological purposes. The protagonist's recognition that "my name [has become their property]" articulates how naming can become appropriation rather than identity-formation. The Brotherhood uses naming as mechanism of control, subsuming individual consciousness into organizational ideology.

The mysterious figure of Rinehart-who appears multiple times throughout the novel but never directly-represents alternative possibilities of naming and identity. Rinehart embodies the possibility of self-fashioning, of creating multiple identities and existing without fixed essence. Some critics, notably Houston Baker, read Rinehart as representing trickster tradition within African-American literature, a figure who survives through adaptive identity-shifting rather than pursuit of authentic self-expression.

Yet Ellison suggests risks inherent in Rinehart's approach: complete identity fluidity proves as damaging as forced social invisibility. When the protagonist momentarily becomes Rinehart, he experiences terrifying dissolution of self. Ellison's nuance lies in suggesting that authentic identity requires neither absolute social recognition nor complete self-construction, but rather conscious awareness of how language and naming constrain and enable subjectivity.

The novel concludes with the protagonist's decision to emerge from hibernation and engage with the world. This emergence implies neither revelation of authentic self nor complete submission to social naming, but rather conscious participation in ongoing self-construction. The final address to the reader-"Who knows but that, on the lower frequencies, I speak for you too?"-suggests that identity proves relational, constituted through communication and recognition rather than pre-existing essence. Ellison argues that in naming ourselves and being named by others, we navigate between individual authenticity and social determination.`,
          },
        ],
      },
      {
        id: 'section-b-coursework',
        title: 'Section B: Comparative Questions',
        instructions:
          'Answer both questions in this section. You should spend approximately 60 minutes on these questions combined. Draw on knowledge of multiple texts studied in your coursework.',
        questions: [
          {
            id: 'q3-coursework-comparison',
            questionNumber: 3,
            marks: 15,
            questionText:
              "Compare how two texts of different genres address a common theme or concern. Explain what each text's approach reveals about its form and historical context.",
            bulletPoints: [
              'Identify the common thematic concern clearly',
              "Analyse how genre shapes each text's treatment",
              'Consider historical and cultural contexts',
              'Evaluate what formal differences suggest about meaning',
              'Draw conclusions about the relationship between form and theme',
            ],
            markScheme: `ASSESSMENT CRITERIA:

Level 4 (14-15 marks): Sophisticated comparison revealing how genre shapes thematic treatment. Excellent understanding of formal differences and their significance. Strong historical contextualization. Original insights. Shows sophisticated analytical understanding.

Level 3 (12-13 marks): Clear, developed comparison with good analysis of generic differences. Sound contextual understanding. Well-supported argument. Shows secure analysis.

Level 2 (10-11 marks): Some comparative analysis with emerging understanding of generic impact. Textual support present; context acknowledged. Shows developing understanding.

Level 1 (8-9 marks): Basic comparison with limited analysis of generic differences. Some contextual awareness. May lack sophistication.

Below Level 1 (0-7 marks): Insufficient comparison or analysis.`,
            modelAnswer: `Both James Joyce's short story "Araby" and T.S. Eliot's poem "The Love Song of J. Alfred Prufrock" address the theme of desire's futility in urban modernity, yet their generic conventions shape radically different aesthetic responses to this shared concern. Joyce's narrative realism and Eliot's modernist fragmentation reveal how literary form embodies philosophical positions regarding meaning, desire, and selfhood in twentieth-century consciousness.

Joyce's "Araby" employs linear narrative progression toward inevitable disappointment. The story's structure-the boy's mounting anticipation, the delayed arrival at the bazaar, the climactic revelation that the bazaar disappoints-mimics narrative causality itself, suggesting that desire inevitably exhausts itself through temporal progression. The story's conclusion-"Gazing up into the darkness, I saw myself as a creature driven and derided by vanity"-articulates recognition through narrative completion. Joyce's realism suggests that meaning emerges through lived experience and retrospective understanding.

Eliot's "Prufrock," by contrast, employs fragmented monologue, nested quotations, and spatial rather than temporal movement. Rather than moving through time toward revelation, Prufrock repeatedly returns to the same psychological state: the inability to act. The poem's famous refrain-"Do I dare / Disturb the universe?"-articulates perpetual hesitation rather than narrative progression. Eliot's modernist form enacts psychological stasis; meaning proves inaccessible not through narrative completion but through consciousness's inability to move beyond repetitive self-questioning.

These formal differences reflect their historical moments. Joyce wrote "Araby" (1914) when realist conventions still possessed cultural authority; narrative progression toward epiphanic understanding seemed aesthetically viable. Eliot wrote "Prufrock" during World War I (1915), amid cultural crisis that undermined faith in progressive narrative and coherent selfhood. His fragmented form reflects modernist skepticism toward totalizing meaning.

The contrast suggests that generic form embodies historical consciousness: realism's linear causality articulates faith in knowable meaning through experience, while modernist fragmentation articulates skepticism toward such knowability. Both texts address desire's futility, yet their formal choices-narrative completion versus psychological circularity-suggest divergent philosophical positions regarding whether meaning remains accessible to human consciousness.`,
          },
        ],
      },
    ],
  },

  /* 
GRADING GUIDANCE FOR CAIE MOCK EXAM PAPERS:

All mark schemes employ four-level assessment framework (Level 4-1) aligned with Cambridge IGCSE grade descriptors. Level 4 represents Grade 9 work (90-100%), Level 3 represents Grade 7-8 work (80-89%), Level 2 represents Grade 5-6 work (70-79%), and Level 1 represents Grade 4 work (60-69%). Below Level 1 indicates work below Grade 4 standard.

Grade 9 responses demonstrate: sophisticated use of subject terminology, sustained analytical engagement with textual detail, perceptive interpretation revealing deeper meanings, and compelling argumentation. Responses integrate evidence seamlessly into analysis rather than listing quotations. They recognize ambiguity and complexity, avoiding simplistic interpretation. They demonstrate awareness of alternative perspectives and critical debates, engaging thoughtfully with different viewpoints.

Teachers should assess holistically, considering the quality of analysis, depth of textual engagement, relevance of evidence, clarity of expression, and sophistication of interpretation. A single sophisticated analytical point developed thoroughly with precise evidence exceeds multiple superficial observations. Award marks within the appropriate band based on overall quality, using the full range available.

Model answers provided represent exemplary Grade 9 responses. Student responses may achieve equivalent marks through different approaches, different textual selections (where choice permitted), or different organizational structures, provided the analytical quality and textual engagement reach Grade 9 standard.

ASSESSMENT NOTES:

These mock exam papers are designed to prepare students for Cambridge IGCSE English Literature (codes 0475 and 0992) final assessment. Papers 1-2 assess study of anthology texts and prescribed drama; Paper 3 assesses unseen poetry and prose comprehension; Paper 4 assesses independent literary study and comparative analysis. 

Total assessment time across all papers: 375 minutes (6 hours 15 minutes)
Total assessment marks: 200 marks

Students should complete each paper within the specified duration to develop examination technique and time management skills. These papers provide comprehensive coverage of all assessment objectives: reading and interpreting literature, understanding how writers create meaning through language and form, and making informed judgments about literary merit and significance.

Feedback should emphasize: (1) quality of textual engagement with precise evidence, (2) sophistication of analytical language demonstrating subject knowledge, (3) integration of evidence into developing argument rather than isolated quotation, (4) recognition of textual complexity and ambiguity, (5) awareness of alternative interpretations and critical perspectives.*/
]
