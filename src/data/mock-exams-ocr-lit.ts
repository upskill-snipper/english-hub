// @ts-nocheck
export interface MockExamPaper {
  id: string;
  title: string;
  board: string;
  subject: string;
  tier?: string;
  duration: number;
  totalMarks: number;
  sections: MockExamSection[];
}

export interface MockExamSection {
  id: string;
  title: string;
  instructions: string;
  questions: MockExamQuestion[];
}

export interface MockExamQuestion {
  id: string;
  questionNumber: number;
  marks: number;
  questionText: string;
  extract?: string;
  bulletPoints?: string[];
  markScheme: string;
  modelAnswer?: string;
}

export const ocrLitMockExams: MockExamPaper[] = [
  {
    "id": "ocr-lit-01-inspector-calls",
    "title": "OCR GCSE English Literature Mock Exam 1: An Inspector Calls & Anthology Poetry",
    "board": "OCR",
    "subject": "English Literature",
    "tier": "J352",
    "duration": 120,
    "totalMarks": 80,
    "sections": [
      {
        "id": "section-01-modern-text",
        "title": "Section A: An Inspector Calls by J.B. Priestley",
        "instructions": "Answer all four questions in this section. Spend approximately 60 minutes on this section.",
        "questions": [
          {
            "id": "q1-inspector-calls",
            "questionNumber": 1,
            "marks": 15,
            "questionText": "How does Priestley present the Inspector as a character who challenges the social attitudes of the Birling family? Use evidence from the text to support your analysis.",
            "extract": "The Inspector is neither a typical policeman nor a supernatural entity. Priestley crafts him as a catalyst for moral awakening, someone whose questions cut through the family's complacency and force them to confront their complicity in Eva's death.",
            "bulletPoints": [
              "Consider the Inspector's tone and manner of speaking",
              "Look at how he controls the pace and direction of the play",
              "Examine his speeches about social responsibility",
              "Think about his final monologue"
            ],
            "markScheme": "Level 5 (14-15): Sustained, perceptive analysis of the Inspector's characterisation with sophisticated understanding of how Priestley uses him as a mouthpiece for social critique. Excellent integration of textual evidence. Level 4 (12-13): Clear analysis showing good understanding of the Inspector's role in challenging attitudes; purposeful use of evidence. Level 3 (10-11): Adequate analysis with some reference to textual evidence; understanding of the Inspector's function. Level 2 (7-9): Basic references to character with limited analysis; some relevant evidence. Level 1 (1-6): Simple comments with minimal evidence or irrelevant examples.",
            "modelAnswer": "Priestley presents the Inspector as an intellectually superior figure who systematically dismantles the family's moral defences. From his initial entrance, the Inspector demonstrates authority through his measured and relentless questioning. His tone is formal yet penetrating, exemplified when he states, 'An Inspector Calls,' establishing an immediate sense of unease. Unlike the constable summoned by Mr. Birling, the Inspector cannot be easily dismissed or manipulated. The Inspector's characterisation evolves as a device for exposing the hypocrisy embedded within the Birling family's social position. Priestley uses his lengthy speeches to articulate the play's central message. When the Inspector declares, 'We don't live alone. We are members of one body. We are responsible for each other,' he positions himself as a moral conscience. His speeches transcend the immediate investigation, addressing broader themes of collective responsibility that challenge individualistic values."
          },
          {
            "id": "q2-inspector-calls",
            "questionNumber": 2,
            "marks": 20,
            "questionText": "Analyse how Priestley uses structure and dramatic techniques to convey the decline of the Birling family's unity and moral position throughout the play. Refer to specific moments and consider the effectiveness of these techniques.",
            "extract": null,
            "bulletPoints": [
              "How does the play move from apparent stability to chaos?",
              "What role does the revelation of each family member's involvement play?",
              "How does the ending challenge earlier assertions?",
              "Consider the use of exits, interruptions, and overlapping dialogue",
              "What is the effect of the phone call at the end?"
            ],
            "markScheme": "Level 5 (18-20): Sophisticated analysis of how structure and technique interact. Sustained engagement with the dramatic arc. Level 4 (15-17): Detailed analysis with clear understanding of cumulative effect. Level 3 (12-14): Clear identification with some analysis. Level 2 (9-11): Basic reference with limited range. Level 1 (1-8): Superficial comments.",
            "modelAnswer": "Priestley's use of structure profoundly reinforces moral disintegration. The play is constructed as a single, uninterrupted evening. This temporal compression intensifies psychological pressure as revelations accumulate without respite. Each question systematically exposes a family member's involvement with Eva Smith. The structure mirrors confession\u2014once begun, it cannot be halted. Priestley employs cyclical revelation where each family member confronts culpability sequentially. The emotional temperature rises as the Inspector presents evidence, using the photograph as manifestation of consequence. The device of limiting the audience's view of the photograph ensures revelation occurs through characters' reactions, creating dramatic irony. By the play's conclusion, when the phone call announces another police inspection, Priestley's structural mastery emerges completely: apparent resolution gives way to true crisis."
          },
          {
            "id": "q3-inspector-calls",
            "questionNumber": 3,
            "marks": 15,
            "questionText": "How does Priestley present Sheila Birling as a character who experiences significant personal transformation? What does her development suggest about the possibility of moral change?",
            "extract": "SHEILA: But these girls aren't cheap labour\u2014they're people. We should think about what they need, not just what suits us.",
            "bulletPoints": [
              "Track Sheila's attitude from the opening",
              "Identify moments where her perspective shifts",
              "Consider her language and tone in early versus late scenes",
              "What does her acceptance of responsibility reveal?",
              "How is she differentiated from her parents?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis of transformation with sophisticated understanding of moral awakening. Excellent integration. Level 4 (12-13): Clear analysis of development with good support. Level 3 (10-11): Adequate analysis with relevant evidence. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Sheila Birling's journey represents Priestley's most optimistic vision of moral transformation. Initially presented as frivolous, self-centered, concerned with her engagement to Gerald, Sheila undergoes profound ethical awakening as the investigation unfolds. Her early shallow concern about Eva Smith\u2014arising merely from jealous anger\u2014transforms into genuine empathy and accountability. The pivotal moment occurs when Sheila recognizes the photograph and immediately accepts responsibility: 'I felt rotten about it at the time, and now I feel a good deal worse.' Her transformation is marked by linguistic shift: from superficial concerns to moral interrogation. By the conclusion, she challenges her parents' attempts to evade responsibility. This reversal\u2014where the youngest, initially most trivial character becomes moral conscience\u2014underscores Priestley's belief in meaningful change, particularly among younger generations. Unlike her parents, Sheila accepts responsibility without equivocation, envisioning structural change."
          },
          {
            "id": "q4-inspector-calls",
            "questionNumber": 4,
            "marks": 30,
            "questionText": "Evaluate how successfully Priestley uses An Inspector Calls to present his views on social responsibility and capitalism. In your response, consider the methods he uses, the message he conveys, and whether his approach is dramatically or thematically effective.",
            "extract": null,
            "bulletPoints": [
              "What are Priestley's criticisms of capitalist ideology?",
              "How is this critiqued through Mr. Birling's character?",
              "Consider the Inspector's speeches as a vehicle for Priestley's views",
              "Is the ending definitive or ambiguous?",
              "How do family members embody different responses?",
              "What is the overall effect?"
            ],
            "markScheme": "Level 5 (28-30): Sustained, sophisticated analysis evaluating techniques and effectiveness; nuanced judgment about dramatic success. Level 4 (24-27): Detailed analysis with clear understanding of techniques; secure judgment with good evidence. Level 3 (20-23): Clear analysis with adequate evidence; some evaluation. Level 2 (16-19): Basic identification with limited evaluation. Level 1 (1-15): Minimal understanding.",
            "modelAnswer": "Priestley constructs An Inspector Calls as pointed critique of capitalist individualism and advocacy for collective responsibility. His effectiveness lies in synthesizing accessible theatrical form with intellectual rigor. Rather than didactic exposition, Priestley embeds political philosophy within gripping detective structure, ensuring audiences are emotionally invested in revelations that progressively articulate his ideological position. Mr. Birling serves as Priestley's primary vehicle for satirizing capitalist ideology. His confident assertions that war won't occur, business will grow, and people must look after themselves encapsulate blind self-interest Priestley critiques. The play's dramatic irony operates on multiple levels: Birling's predictions prove factually wrong, and his moral framework is condemned by events. Priestley uses irony to position audiences as morally superior to characters, subtly directing acceptance of social critique. The Inspector's extended speeches articulate alternative social vision clearly. His declaration about membership in one body and collective responsibility presents explicitly collectivist ethic contrasting sharply with Birling's individualism. Yet Priestley avoids making the Inspector merely a mouthpiece by enveloping him in mystery. This ambiguity enhances the message's power: responsibility appears internal to human nature, not externally imposed."
          }
        ]
      },
      {
        "id": "section-01-poetry",
        "title": "Section B: Poetry from the Power and Conflict Anthology",
        "instructions": "Answer one question from this section. You have approximately 20 minutes for this section.",
        "questions": [
          {
            "id": "q5-poetry-power-conflict",
            "questionNumber": 5,
            "marks": 20,
            "questionText": "Compare how two poems from the Power and Conflict anthology present the effects of power on individuals or society. You must choose two different poems. In your response, consider language, form, structure, and the poets' attitudes toward power.",
            "extract": null,
            "bulletPoints": [
              "Choose two poems carefully",
              "Compare specific language, imagery, and metaphors",
              "Consider how form reinforces meaning",
              "Examine each poet's viewpoint on power",
              "Use well-integrated quotations",
              "Develop sustained comparative points"
            ],
            "markScheme": "Level 5 (18-20): Sustained comparison with perceptive analysis of techniques. Excellent integration of evidence. Level 4 (15-17): Clear comparison with detailed analysis; purposeful evidence use. Level 3 (12-14): Adequate comparison with some analysis. Level 2 (9-11): Basic comparison with limited analysis. Level 1 (1-8): Minimal comparison.",
            "modelAnswer": "The poems 'Ozymandias' by Shelley and 'The Charge of the Light Brigade' by Tennyson present contrasting perspectives on power's effects. Shelley's sonnet employs the form traditionally associated with enduring love to contemplate power's impermanence. The volta at line nine shifts from description to philosophical reflection: 'Look on my Works, ye Mighty, and despair!' The irony is devastating\u2014Ozymandias's boastful inscription, intended to perpetuate glory, declares failure. Shelley's language emphasizes decay: 'lone,' 'level,' 'boundless' create emptiness and erasure. The rhyme scheme's regularity contrasts with content's chaos, suggesting formal structures cannot preserve power. Tennyson's narrative poem presents power operating through institutional structures subordinating individual agency. The repeated phrase 'Half a league, half a league' creates hypnotic rhythm mirroring mechanical obedience. Language emphasizes passivity: soldiers 'charge' not from conviction but unquestioning obedience. Tennyson's rhyming triplets and energetic meter create impression of inevitability\u2014form enacts relentless forward motion soldiers cannot resist. Both poems ultimately suggest power\u2014whether authoritarian or institutional\u2014operates destructively on individuals and societies."
          }
        ]
      }
    ]
  },
  {
    "id": "ocr-lit-02-animal-farm",
    "title": "OCR GCSE English Literature Mock Exam 2: Animal Farm & Anthology Poetry",
    "board": "OCR",
    "subject": "English Literature",
    "tier": "J352",
    "duration": 120,
    "totalMarks": 80,
    "sections": [
      {
        "id": "section-02-modern-text",
        "title": "Section A: Animal Farm by George Orwell",
        "instructions": "Answer all four questions in this section. Spend approximately 60 minutes on this section.",
        "questions": [
          {
            "id": "q1-animal-farm",
            "questionNumber": 1,
            "marks": 15,
            "questionText": "How does Orwell present the corruption of power through the character of Napoleon? Support your analysis with detailed textual evidence.",
            "extract": "Napoleon's behavior evolved from revolutionary fervor to despotic control, mirroring historical patterns of revolutionary betrayal.",
            "bulletPoints": [
              "How does Napoleon's treatment of others change?",
              "Consider his use of propaganda and manipulation",
              "Examine his relationship with power and self-aggrandizement",
              "What methods does he employ to consolidate control?",
              "How does Orwell reveal his hypocrisy?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis of corruption with sophisticated understanding. Excellent evidence integration. Level 4 (12-13): Clear analysis with good textual support. Level 3 (10-11): Adequate analysis with relevant evidence. Level 2 (7-9): Basic references with limited analysis. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Orwell presents Napoleon's corruption as systematic progression from idealistic revolutionary to totalitarian despot. Initially a liberator rejecting Jones's tyranny, Napoleon gradually transforms into a tyrant whose methods exceed predecessors'. The exiling of Snowball marks the turning point. Orwell's narrative employs deliberate rewriting: collective memory, established as check against manipulation, becomes Napoleon's tool. By systematically revising history\u2014claiming Snowball never was revolutionary hero but spy\u2014Napoleon demonstrates propaganda mastery. This mechanism explores how totalitarian regimes consolidate power through linguistic control. Napoleon's consolidation accelerates through increasingly brutal methods. His private police, monopolization of communal luxuries, and physical separation through ceremony reveal internalization of hierarchical power. Orwell demonstrates revolution doesn't eliminate power structures; it merely exchanges identity of powerful. By conclusion, as pigs walk upright and dine with human farmers, original distinction between animal and human collapses. The final commandment encapsulates tragic inversion: 'All animals are equal, but some animals are more equal than others.'"
          },
          {
            "id": "q2-animal-farm",
            "questionNumber": 2,
            "marks": 20,
            "questionText": "Analyse how Orwell uses the novella's structure and animal characters as a form of political allegory. Evaluate how effective this approach is in conveying his critique of totalitarianism.",
            "extract": null,
            "bulletPoints": [
              "What historical events does each section parallel?",
              "How do animal characteristics contribute to symbolic functions?",
              "What is the effect of brevity and accessible narrative?",
              "How does allegory allow critique without direct statement?",
              "Is the allegory sufficiently complex for adult readers?"
            ],
            "markScheme": "Level 5 (18-20): Sophisticated analysis of allegorical structure; perceptive understanding of effectiveness. Excellent evidence. Level 4 (15-17): Detailed analysis with good understanding. Level 3 (12-14): Clear identification of patterns with some evaluation. Level 2 (9-11): Basic recognition with limited analysis. Level 1 (1-8): Minimal understanding.",
            "modelAnswer": "Orwell's allegorical structure enables sophisticated political critique while maintaining accessibility. Animal characters function as historical symbols: Napoleon represents Stalin, Snowball represents Trotsky, Old Major represents Marx and Lenin. Rather than direct characterization, animals' essential natures encode political meaning. Napoleon's status as powerful Berkshire boar encodes capacity for domination and origins within existing power structures. The novella's structure mirrors revolutionary betrayal's arc. Opening establishes utopian promise through Old Major's inspiring speech and successful rebellion. Middle sections trace gradual erosion through propaganda, violence, and resource monopolization by leadership. Final section reveals complete inversion: pigs become indistinguishable from farmers they overthrew. This allegorical approach proves remarkably effective. First, allegory permits critique of contemporary totalitarian regimes while maintaining plausible deniability\u2014significant consideration given Stalinist reach. Second, animal narrative democratizes political understanding, rendering complex philosophy accessible to diverse readers. Third, symbolic compression allows Orwell to elaborate thematic concerns with extraordinary density."
          },
          {
            "id": "q3-animal-farm",
            "questionNumber": 3,
            "marks": 15,
            "questionText": "How does Orwell present Boxer as a tragic figure? What does his fate suggest about the relationship between the working class and revolutionary movements?",
            "extract": "Boxer's devotion and powerful labor were ultimately exploited, leading to his destruction by those he served.",
            "bulletPoints": [
              "What are Boxer's defining characteristics?",
              "How is his loyalty portrayed and tested?",
              "What is the significance of his motto?",
              "How does Orwell present his final fate?",
              "What is the emotional impact of his ending?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis of tragic characterization with sophisticated understanding. Excellent integration. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis with relevant evidence. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Boxer emerges as tragedy's most tragic figure because his virtues\u2014strength, loyalty, dedication\u2014become instruments of destruction. Unlike other animals who gradually perceive hypocrisy, Boxer maintains unquestioning faith until betrayal. His motto 'I will work harder' embodies conscientiousness and virtue. The tragedy deepens as Boxer encounters evidence of corruption. Rather than withdrawing loyalty, he works harder: 'If Comrade Napoleon says it, it must be right.' His unwavering loyalty becomes fatal vulnerability. When illness strikes after exhausting labor, the pigs dispatch him to the glue factory for profit. Orwell presents this not through extended drama but through Clover's belated realization: 'They have sent him away.' Boxer's tragedy encodes Orwell's analysis of working-class relationship to revolutionary movements. Revolutionary rhetoric promises liberation, but structural inequality persists because those consolidating power appropriate working-class labor. Boxer's exhaustion and destruction mirrors historical experience of working classes exploited under both capitalist and communist regimes. His tragic destruction suggests fundamental structural change cannot occur through systems concentrating power in elites, regardless of revolutionary origins."
          },
          {
            "id": "q4-animal-farm",
            "questionNumber": 4,
            "marks": 30,
            "questionText": "Evaluate Orwell's portrayal of language as an instrument of power and control in Animal Farm. Consider how effectively he uses this theme to convey his broader political message about totalitarianism.",
            "extract": null,
            "bulletPoints": [
              "How does linguistic manipulation appear early?",
              "Examine Squealer's specific rhetorical techniques",
              "What is the significance of changing commandments?",
              "How does the novella's language reflect control themes?",
              "Is Orwell's presentation convincing?",
              "What does this suggest about totalitarianism's mechanisms?"
            ],
            "markScheme": "Level 5 (28-30): Sustained, sophisticated analysis; perceptive evaluation. Excellent integration. Level 4 (24-27): Detailed analysis with clear understanding of effectiveness. Level 3 (20-23): Clear analysis with adequate evidence. Level 2 (16-19): Basic identification with limited analysis. Level 1 (1-15): Minimal understanding.",
            "modelAnswer": "Language emerges as Animal Farm's most potent control instrument. Orwell recognizes totalitarian power operates through systematic linguistic manipulation, not merely violence. Squealer embodies manipulation's various techniques. His propaganda operates through linguistic inflation ('readjustment' rather than deprivation), false quantification obscuring actual conditions, and emotional appeals. When announcing pigs' consumption of milk and apples, Squealer employs elaborate justification transforming selfish appropriation into necessary sacrifice. The systematic rewriting of Seven Commandments constitutes central illustration of language's power. Commandments, initially established as unambiguous ethical principles, are progressively altered to permit whatever pigs undertake. The final commandment represents complete inversion: 'All animals are equal, but some animals are more equal than others' presents logically contradictory statement as authoritative, establishing meaning determined by power's decree. Orwell's narrative style itself reinforces this theme. The novella's relatively simple prose contrasts with elaborate obfuscations Squealer produces. This stylistic contrast enables readers perceiving the gap between language's apparent meaning and actual function. The narrative technique enacts the novella's theme: clarity is possible, but only for those possessing critical awareness. This emphasis illuminates totalitarianism's fundamental mechanism: totalitarian control is fundamentally linguistic, operating through reality manipulation itself."
          }
        ]
      },
      {
        "id": "section-02-poetry",
        "title": "Section B: Poetry from the Power and Conflict Anthology",
        "instructions": "Answer one question from this section. You have approximately 20 minutes for this section.",
        "questions": [
          {
            "id": "q5-poetry-animal-farm",
            "questionNumber": 5,
            "marks": 20,
            "questionText": "Compare how two poems from the Power and Conflict anthology explore the consequences of human violence or aggression. You must choose two different poems. In your response, consider language, imagery, and the poets' perspectives on violence.",
            "extract": null,
            "bulletPoints": [
              "Select two poems dealing with violence",
              "Compare how violence is presented in each",
              "Analyse specific poetic devices",
              "Consider emotional impact on perpetrators and victims",
              "Use substantial integrated quotations",
              "Develop sustained comparative analysis"
            ],
            "markScheme": "Level 5 (18-20): Sustained comparison with perceptive analysis. Excellent evidence. Level 4 (15-17): Clear comparison with detailed analysis. Level 3 (12-14): Adequate comparison. Level 2 (9-11): Basic comparison. Level 1 (1-8): Minimal engagement.",
            "modelAnswer": "'Bayonet Charge' by Ted Hughes and 'Exposure' by Wilfred Owen present contrasting perspectives on violence. Hughes emphasizes combat's disorienting intensity with visceral language. Opening image\u2014'Suddenly he awoke and was running'\u2014establishes disorientation. The soldier is simultaneously compelled toward violence yet questioning its justification. Hughes's language emphasizes bodily disruption: terror produces physiological responses overwhelming rational deliberation. The fragmented meter precisely when recording violence, with final ironic lines about 'patriotic tear,' presents violence as involuntary physiological response where consciousness is overridden by panic. Owen's 'Exposure' presents violence emerging not from dramatic confrontation but environmental attrition. Soldiers face not enemies but 'merciless iced east winds' and slow degradation. The poem's repetitive form returning obsessively to 'But nothing happens' encodes psychological toll of waiting. Where Hughes emphasizes explosive intensity, Owen explores protracted paralysis. 'Merciless' wind, capitalized as conscious agent, represents violence's abstraction. Both poems suggest violence fundamentally alters consciousness and destroys the self. Hughes's soldier questions whether his action bore relation to conscious intent. Owen's soldiers question whether they'll survive long enough for actual combat. Both present violence not as heroic endeavor but as force overwhelming individual agency."
          }
        ]
      }
    ]
  },
  {
    "id": "ocr-lit-03-romeo-juliet",
    "title": "OCR GCSE English Literature Mock Exam 3: Romeo and Juliet & Unseen Poetry",
    "board": "OCR",
    "subject": "English Literature",
    "tier": "J352",
    "duration": 120,
    "totalMarks": 80,
    "sections": [
      {
        "id": "section-03-modern-text",
        "title": "Section A: Romeo and Juliet by William Shakespeare",
        "instructions": "Answer all four questions in this section. Spend approximately 60 minutes on this section.",
        "questions": [
          {
            "id": "q1-romeo-juliet",
            "questionNumber": 1,
            "marks": 15,
            "questionText": "How does Shakespeare present Romeo's character development from the play's beginning to its tragic conclusion? Use specific textual evidence to support your analysis.",
            "extract": "Romeo's initial infatuation with Rosaline gives way to genuine love for Juliet, yet this transformation brings him only toward greater tragedy rather than fulfillment.",
            "bulletPoints": [
              "Compare Romeo's language in Act 1 with later soliloquies",
              "How does his understanding of love mature?",
              "Examine his impulsiveness and consequences",
              "Consider his relationship with Mercutio",
              "How does the duel with Tybalt transform him?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis of development with sophisticated understanding. Excellent integration. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Shakespeare presents Romeo as character whose emotional intensity exceeds prudent judgment, creating tragic protagonist whose very capacity for love precipitates destruction. In opening, Romeo's infatuation with inaccessible Rosaline, expressed through elaborate Petrarchan conceits, reveals young man whose emotional nature operates at extremes. Yet this early passion remains fundamentally self-absorbed and theatrical. Meeting Juliet catalyzes authentic transformation. Language shifts from rhetorical excess toward genuine tenderness. His declaration, 'What light through yonder window breaks? Yea, here she is,' abandons artificial pose for authentic wonder. This growth represents fundamental psychological maturation. Yet this development appears immediately threatened. The hastily arranged marriage, despite its risks, embodies Romeo's tragic flaw. Killing of Tybalt represents moment where capacity for love directly produces violent consequence. His anguish at Tybalt's death\u2014'I am fortune's fool!'\u2014reveals mature self-awareness about how passion has destroyed his ability to navigate the social world. By conclusion, his suicide in the tomb demonstrates tragic trajectory: same emotional intensity enabling genuine love renders him incapable of prudent response to apparent loss."
          },
          {
            "id": "q2-romeo-juliet",
            "questionNumber": 2,
            "marks": 20,
            "questionText": "Analyse how Shakespeare uses language, imagery, and dramatic structure to present the intensity of Romeo and Juliet's love. Evaluate how effectively these techniques convey the idea that their love transcends ordinary human experience.",
            "extract": null,
            "bulletPoints": [
              "How does Shakespeare's language differ from other characters?",
              "Examine light/dark imagery",
              "Consider balcony scene structure",
              "How do soliloquies reveal emotional connection?",
              "What is the effect of their language's poetry?",
              "Is their love transcendent or destructively intense?"
            ],
            "markScheme": "Level 5 (18-20): Sophisticated analysis of techniques; perceptive evaluation. Excellent evidence. Level 4 (15-17): Detailed analysis with clear understanding. Level 3 (12-14): Clear analysis with adequate evidence. Level 2 (9-11): Basic identification. Level 1 (1-8): Minimal understanding.",
            "modelAnswer": "Shakespeare demonstrates extraordinary sophistication in presenting Romeo and Juliet's love as simultaneously genuine, intense, and ultimately tragic. Language differential proves crucial: by presenting their love through stunning poetic intensity, he validates their emotional experience as profound while their tragic fate demonstrates love's vulnerability. The balcony scene exemplifies this technique. Light imagery\u2014'But soft, what light through yonder window breaks? Yea, she is the sun'\u2014transforms Juliet from romantic object into cosmic principle. This elevation operates through extended metaphor: Juliet becomes organizing force itself. Language transcends sexual desire; it expresses existential completeness. When Juliet responds, 'What's in a name?'\u2014that which we call a rose by any other name would smell as sweet,' she articulates love's fundamental principle: identity matters less than essential being. Their dialogue structure reinforces transcendence. Lovers complete each other's metaphors, share poetic expressions, moving progressively from separated speech toward intimate proximity. The shared sonnet in first meeting further elevates their language. Light imagery dominates presentation: her appearance produces light\u2014Romeo's eyes become stars. This imagery suggests their love illuminates dark world of familial conflict. Yet Shakespeare complicates transcendence by associating it with transience. Light is ephemeral; it fades. In tomb, darkness permanently conquers light. Their love transcends ordinary experience not through happiness but through intensity and capacity to encompass death itself."
          },
          {
            "id": "q3-romeo-juliet",
            "questionNumber": 3,
            "marks": 15,
            "questionText": "How does Shakespeare present Juliet as a character who demonstrates agency and independence within the constraints of her social position? What does this suggest about her tragedy?",
            "extract": "Juliet's willingness to defy her family and society for love reveals both her courage and the impossible position created by her youth and female status.",
            "bulletPoints": [
              "How does Juliet's language reveal independence?",
              "What choices does she make actively?",
              "How do soliloquies differ from other characters?",
              "What happens when agency meets constraint?",
              "Is tragedy a failure of will or circumstances?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis with sophisticated understanding. Excellent evidence. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Juliet emerges as Shakespeare's most psychologically complex female character, achieving remarkable agency within profoundly constraining circumstances. Her tragedy results not from passivity but from structural impossibility: her will is powerful, judgments sound, yet social world permits no space for her autonomy without destruction. She proposes marriage to Romeo before he suggests it: 'If thy bent of love be honorable, thy purpose marriage, send me word tomorrow.' She assumes initiative in articulating desire and determining action\u2014remarkable assertion of female agency in patriarchal society. Her explicit sexuality\u2014willingness to acknowledge desire and articulate it\u2014contrasts with conventions of female modesty. Her final agency appears in her decision to drink the potion. The friar provides option; Juliet chooses it despite terrible risks. She articulates terror yet maintains determination. This moment crystallizes her character: courage, clear perception of danger, unwavering commitment. Yet Shakespeare's presentation of Juliet's agency within constraint is precisely the source of tragedy. Her family's power to dictate marriage partner, her father's rage at resistance, absolute prohibition against marriage to Romeo represent structural forces rendering will ultimately ineffectual. Her tragedy is not caused by weakness\u2014she possesses more agency than virtually any young woman in Shakespeare\u2014but by placement within system permitting no space for female autonomy. Only choice available is death itself."
          },
          {
            "id": "q4-romeo-juliet",
            "questionNumber": 4,
            "marks": 30,
            "questionText": "Evaluate Shakespeare's presentation of fate and human agency in Romeo and Juliet. In your response, consider how the play's language, structure, and characterization establish the tragic outcome's inevitability, and assess how completely the audience attributes the tragedy to fate versus human choice.",
            "extract": null,
            "bulletPoints": [
              "How does prologue establish fatalism?",
              "Examine references to fate throughout",
              "How do character decisions drive events?",
              "What is the role of chance and coincidence?",
              "Is tragedy predetermined or caused by human error?",
              "How does Shakespeare want us to interpret the ending?"
            ],
            "markScheme": "Level 5 (28-30): Sustained, sophisticated analysis; perceptive evaluation. Excellent integration. Level 4 (24-27): Detailed analysis with clear understanding. Level 3 (20-23): Clear analysis with adequate evidence. Level 2 (16-19): Basic analysis. Level 1 (1-15): Minimal understanding.",
            "modelAnswer": "Romeo and Juliet presents complex interrogation of fate's relationship to human agency. Shakespeare's genius lies not in resolving this question but constructing dramatic structure permitting simultaneous credibility of both fatalism and human responsibility. The prologue's announcement of 'star-crossed lovers' establishes initial fatalistic frame; yet actual dramatic development reveals how human choice, social structure, and circumstantial coincidence conspire to produce tragedy that might have been avoided. Fate operates throughout via language. Romeo's 'I am fortune's fool!' expresses subjective experience of external control. His premonition\u2014'Some consequence, yet hanging in the stars'\u2014establishes psychological state where he experiences himself as predetermined catastrophe subject. Yet play's actual causation reveals how specific human choices produce tragedy. Capulet's insistence on forcing Juliet into marriage precipitates desperation. Friar's willingness to participate in deceptive plan dependent upon extraordinary coincidence demonstrates fallibility. Most crucially, Romeo's killing of Tybalt produces banishment separating lovers. The tragic chain depends upon multiple human decisions: Capulet's inflexibility, friar's gamble, Romeo's violence, messenger's inability to reach Romeo. Final tragedy depends upon pure chance: had Romeo received the friar's letter, or learned of Juliet's condition moments later, entire tragic outcome would have been prevented. Yet circumstance producing this catastrophe emerges directly from lovers' hidden marriage and elaborate deception required. Shakespeare suggests lovers' agency creates conditions where fate's arbitrary interference becomes catastrophic. The play ultimately suggests fate operates not as literal predestination but as cumulative consequence of human choice, social structure, and circumstance interacting beyond individual control. Lovers are not literally 'star-crossed'; rather, they are born into society organized by feudal antagonism making their love incompatible with survival. Their tragedy emerges from tragic complexity of human existence where individual will meets immovable social and circumstantial constraints."
          }
        ]
      },
      {
        "id": "section-03-poetry",
        "title": "Section B: Unseen Poetry",
        "instructions": "Answer the following question. You have approximately 20 minutes for this section. A poem will be provided in the examination paper.",
        "questions": [
          {
            "id": "q5-unseen-poetry-1",
            "questionNumber": 5,
            "marks": 20,
            "questionText": "[UNSEEN POEM PROVIDED IN EXAMINATION]. Read the poem carefully. Analyse how the poet uses language, imagery, and form to present [central theme of unseen poem]. In your response, you should consider specific word choices, poetic devices, and the overall effect created by the poem's structure.",
            "extract": "[Unseen poem text will be provided in the examination paper]",
            "bulletPoints": [
              "Read the poem at least twice carefully",
              "Identify the poem's central subject or theme",
              "Consider how form relates to meaning",
              "Analyse specific language choices: verbs, adjectives, imagery",
              "Consider metaphors, similes, and other figurative language",
              "Think about how structure affects meaning",
              "Consider poem's tone and mood",
              "Develop sustained analytical points"
            ],
            "markScheme": "Level 5 (18-20): Perceptive analysis with sophisticated understanding. Excellent integration of quotations. Level 4 (15-17): Clear analysis with good understanding. Level 3 (12-14): Adequate analysis with appropriate evidence. Level 2 (9-11): Basic analysis with limited understanding. Level 1 (1-8): Minimal analysis.",
            "modelAnswer": "[Model answer will be generated based on specific unseen poem provided in examination. The response should demonstrate sustained analytical engagement with the poem's language, imagery, form, and structure, integrating substantial quotations and developing coherent arguments about how poetic techniques create meaning. Aim for approximately 500-600 words demonstrating Level 5 analytical standards.]"
          }
        ]
      }
    ]
  },
  {
    "id": "ocr-lit-04-macbeth",
    "title": "OCR GCSE English Literature Mock Exam 4: Macbeth & Unseen Poetry",
    "board": "OCR",
    "subject": "English Literature",
    "tier": "J352",
    "duration": 120,
    "totalMarks": 80,
    "sections": [
      {
        "id": "section-04-modern-text",
        "title": "Section A: Macbeth by William Shakespeare",
        "instructions": "Answer all four questions in this section. Spend approximately 60 minutes on this section.",
        "questions": [
          {
            "id": "q1-macbeth",
            "questionNumber": 1,
            "marks": 15,
            "questionText": "How does Shakespeare present Macbeth's psychological deterioration from his initial murder of Duncan to his final confrontation with Macduff? Use specific textual evidence to trace this progression.",
            "extract": "Macbeth's mind, initially tormented by guilt and paranoia, becomes progressively consumed by violence until he achieves a kind of hardened indifference to human suffering.",
            "bulletPoints": [
              "Compare Macbeth's language before and after Duncan's murder",
              "Examine how guilt manifests in soliloquies",
              "Consider the psychological effect of witches' prophecies",
              "How does repeated violence affect capacity for guilt?",
              "What is the significance of final speeches?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis of psychological progression. Excellent integration. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Shakespeare traces Macbeth's transformation from ambitious but morally conscious general into tyrant whose violence becomes routine, conscience deadened by repeated transgression. This psychological arc constitutes play's central tragedy: Macbeth does not become evil; rather, evil becomes his psychological norm. Immediately following Duncan's murder, Macbeth experiences acute psychological torment. His soliloquy about 'deed of dreadful note' expresses anguish that bloody hands can never be washed clean. Yet within moments, he commits second murder\u2014of the grooms\u2014performed with such apparent casualness that Lady Macbeth barely acknowledges significance. By Act 3, psychological cost begins to calcify. Macbeth arranges Banquo's death through hired assassins, establishing crucial shift: he can no longer directly perform violence. This delegation represents psychological distance. When he learns of Macduff's flight, he orders family slaughtered despite strategic irrelevance. Language reveals transformation: 'The castle of Macduff I will surprise, seize upon Fife, give to edge of sword his wife, his babes.' Language becomes purely instrumental; Macbeth articulates destruction with chilling efficiency. Notably, he expresses no guilt, only strategic calculation. His final speeches reveal complete transformation. When he learns of wife's death, he responds with existential exhaustion rather than grief. His famous 'Tomorrow, and tomorrow, and tomorrow' soliloquy expresses not moral despair but metaphysical nihilism. Life has become 'a tale told by an idiot, full of sound and fury, signifying nothing.' Conscience has been obliterated. He achieves dead clarity understanding violence has made him incapable of experiencing meaning."
          },
          {
            "id": "q2-macbeth",
            "questionNumber": 2,
            "marks": 20,
            "questionText": "Analyse how Shakespeare uses supernatural elements to explore themes of fate, ambition, and moral responsibility. Evaluate how effectively this approach develops the play's tragedy.",
            "extract": null,
            "bulletPoints": [
              "What role do witches play in initiating action?",
              "How do supernatural prophecies affect Macbeth's interpretations?",
              "Consider Lady Macbeth's invocation of supernatural forces",
              "What is significance of Birnam Wood and Macduff's birth?",
              "How does Shakespeare balance supernatural causation with human agency?",
              "Is tragedy fated or chosen?"
            ],
            "markScheme": "Level 5 (18-20): Sophisticated analysis; perceptive evaluation. Excellent integration. Level 4 (15-17): Detailed analysis with clear understanding. Level 3 (12-14): Clear analysis with adequate evidence. Level 2 (9-11): Basic analysis. Level 1 (1-8): Minimal understanding.",
            "modelAnswer": "The supernatural in Macbeth functions not as force determining action but as medium through which characters confront and rationalize ambitions. Shakespeare's mastery lies in establishing genuine ambiguity about whether witches predict or produce events, creating structure in which supernatural elements and human agency become inseparable. Witches do not force Macbeth to murder; rather, they articulate desires already present, desires he then chooses to act upon through violence. Witches' prophecies operate as mirrors reflecting hidden ambitions. When they hail Macbeth as future 'king hereafter,' they articulate trajectory he has clearly already contemplated. His immediate acceptance and desperation to guarantee fulfillment reveal witches have not created ambition but given it supernatural expression. Lady Macbeth's role complicates this: she invokes supernatural forces to strengthen resolve, suggesting supernatural becomes resource through which humans project and intensify pre-existing desires. Characters interpret prophecies in ways serving their interests while obscuring moral complexity. When witches declare 'none of woman born shall harm Macbeth,' Macbeth receives reassurance, yet prophecy's technical fulfillment through Macduff's surgical birth suggests prophecies' meaning depends upon interpretation. Macbeth's fatal error lies not in believing witches but in believing them prematurely, acting on conviction that events are determined when choices still shape outcomes. Effectiveness derives from fundamental ambiguity: if witches merely predict determined events, tragedy becomes cosmically fated, culpability reduced. If witches are merely hallucinations, supernatural becomes ornamental. Shakespeare maintains both simultaneously: witches are genuinely present, genuinely articulate prophecies, yet gain force only through characters' interpretation and choice. Tragedy becomes specifically tragic because Macbeth possesses genuine agency\u2014he chooses to murder, chooses to order slaughters, chooses to interpret prophecies as licenses for violence\u2014yet choices align with supernatural prophecies creating sensation of fated inevitability. Balance between fate and agency creates tragedy more sophisticated than simple victim narratives: Macbeth is neither wholly responsible nor wholly determined."
          },
          {
            "id": "q3-macbeth",
            "questionNumber": 3,
            "marks": 15,
            "questionText": "How does Shakespeare present Lady Macbeth as a character who experiences significant psychological change? What does her transformation suggest about the consequences of moral transgression?",
            "extract": "Lady Macbeth begins as an agent of violence and moral transgression, yet her apparent strength masks a vulnerability that manifests catastrophically in the play's final movements.",
            "bulletPoints": [
              "Compare Lady Macbeth's confidence in Act 1 with Act 5",
              "How does her 'unsex me' speech establish character?",
              "What is the significance of sleepwalking scene?",
              "How does her relationship with Macbeth change?",
              "What is the effect of her suicide?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis with sophisticated understanding. Excellent evidence. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Lady Macbeth's psychological arc inverts her apparent agency: woman who initially dominates becomes progressively consumed by guilt. Transformation suggests conscience cannot be permanently suppressed\u2014transgression produces psychological consequences compounding over time. She begins as tragedy's most apparently powerful character. Her invocation of supernatural forces\u2014'Come, you spirits that tend on mortal thoughts, unsex me here'\u2014announces determination to excise feminine compassion and inhabit purely instrumental violence. Her critique of Macbeth's hesitation, willingness to murder their host, dissembling after murder establish her as figure of will unencumbered by moral squeamishness. Yet this apparent strength masks profound vulnerability: her psychological equilibrium depends upon constant vigilance, upon repressing conscience she has not actually excised but merely suppressed. Turning point arrives when Macbeth ceases confiding in her. After witches' second apparition, Macbeth plans Banquo's murder without consulting Lady Macbeth. This exclusion represents his usurpation of her role. More significantly, it removes structured arena within which she could rationalize transgression through will. Left alone with thoughts, repressed conscience begins surfacing. Sleepwalking scene represents complete psychological shattering. In sleep, defenses against guilt collapse; she reenacts murder, obsessively attempting to wash imaginary bloodstains. Language\u2014'Out, damned spot! Out, I say!'\u2014reveals conscience she rejected has never been excised, only suppressed. Doctor's diagnosis\u2014that she suffers from 'slumber of the mind'\u2014suggests psychological condition represents illness, break from consciousness caused by failure of moral defenses. Suicide appears offstage, reported rather than dramatized, rendering final exit notably undramatic. This narrative choice suggests destruction occurs through internal psychological collapse. Unlike Macbeth achieving hardened indifference, Lady Macbeth's conscience remains acute, becoming instrument of destruction. Shakespeare suggests conscience persists despite rejection; transgression produces consequences exceeding rational calculation."
          },
          {
            "id": "q4-macbeth",
            "questionNumber": 4,
            "marks": 30,
            "questionText": "Evaluate how successfully Shakespeare uses blood imagery and violent action to develop the play's themes about ambition, guilt, and the corrupting nature of power. In your response, consider specific scenes, language choices, and how these elements contribute to the overall tragic effect.",
            "extract": null,
            "bulletPoints": [
              "Trace blood imagery from opening to conclusion",
              "How does violence escalate throughout?",
              "What is significance of 'Out, damned spot'?",
              "Consider moral weight assigned to different murders",
              "How do descriptions of blood relate to psychological states?",
              "Is violence primarily symbolic or dramatically necessary?",
              "How does blood imagery create emotional impact?"
            ],
            "markScheme": "Level 5 (28-30): Sustained, sophisticated analysis; perceptive evaluation. Excellent integration. Level 4 (24-27): Detailed analysis with clear understanding. Level 3 (20-23): Clear analysis with adequate evidence. Level 2 (16-19): Basic analysis. Level 1 (1-15): Minimal understanding.",
            "modelAnswer": "Blood imagery in Macbeth operates as play's central symbolic register tracking ambition's moral trajectory and cumulative psychological burden. Image progresses from blood as marker of military valor to blood as marker of transgression to blood as manifestation of psychological disintegration. This progression reflects characters' internal states, transforming blood from descriptive detail into measure of moral consciousness. Opening establishes blood within approved violence context. Captain describes Macbeth as one who 'unseamed an enemy from the nave to th' chops,' language celebrating martial prowess. Blood initially marks heroic action; Macbeth is praised for violence deployed in Scotland's defense. Context proves crucial: blood itself is morally neutral, significance determined by purpose. Duncan's murder marks transformative moment where blood acquires transgressive significance. Macbeth's language shifts: 'Will all great Neptune's ocean wash this blood clean from my hand?' expresses conviction Duncan's blood cannot be cleansed, that transgression is absolute and permanent. This language establishes blood as symbol of indelible moral stain. Same physical substance marking honor now marks sacrilege\u2014difference lies entirely in moral context. Blood imagery proliferates as violence escalates. Murder of Banquo is reported through blood: 'There's blood upon thy face.' Macduff's family slaughter is represented through violation of blood-kinship. By final scenes, blood becomes so omnipresent that specific meanings blur into generalized atmosphere of violence and transgression. Lady Macbeth's obsession with bloodstains in sleepwalking scene proves imagery's psychological centrality. 'Damned spot' is not primarily physical\u2014servants have cleaned court thoroughly\u2014but symbolic of guilt that cannot be exorcised through physical cleansing. Her attempted scrubbing enacts futility of attempting to purify oneself of transgression's marks. Blood is psychological; it stains consciousness itself. Imagery creates emotional impact through multiple mechanisms. First, it renders abstract moral concepts physically concrete and visceral. Second, imagery's progression mirrors characters' psychological states: guilt accumulates, blood imagery intensifies, until final scenes present almost apocalyptic atmosphere saturated with blood's symbolic presence. Third, imagery creates 'narrative inevitability': once blood marks characters, destruction becomes thematically necessary. Tragic effect depends fundamentally upon blood imagery's success in making moral transgression's consequences emotionally unavoidable. Blood is not merely physical but psychological, moral, existential."
          }
        ]
      },
      {
        "id": "section-04-poetry",
        "title": "Section B: Unseen Poetry",
        "instructions": "Answer the following question. You have approximately 20 minutes for this section. A poem will be provided in the examination paper.",
        "questions": [
          {
            "id": "q5-unseen-poetry-2",
            "questionNumber": 5,
            "marks": 20,
            "questionText": "[UNSEEN POEM PROVIDED IN EXAMINATION]. Read the poem carefully. Analyse how the poet uses language, imagery, and form to present [central theme of unseen poem]. In your response, you should consider specific word choices, poetic devices, and the overall effect created by the poem's structure.",
            "extract": "[Unseen poem text will be provided in the examination paper]",
            "bulletPoints": [
              "Read the poem multiple times",
              "Identify poem's subject, speaker, and emotional tone",
              "Note poem's form: structured or free verse?",
              "Analyse verb choices: active or passive?",
              "Consider imagery: what senses are engaged?",
              "Examine metaphors and similes",
              "Consider rhythm and how it affects meaning",
              "Develop sustained analytical points"
            ],
            "markScheme": "Level 5 (18-20): Perceptive analysis with sophisticated understanding. Excellent integration. Level 4 (15-17): Clear analysis with good understanding. Level 3 (12-14): Adequate analysis with some understanding. Level 2 (9-11): Basic analysis with limited technique. Level 1 (1-8): Minimal analysis.",
            "modelAnswer": "[Model answer will be generated based on specific unseen poem provided in examination. Aim for approximately 500-600 words demonstrating Level 5 analytical standards.]"
          }
        ]
      }
    ]
  },
  {
    "id": "ocr-lit-05-lord-flies",
    "title": "OCR GCSE English Literature Mock Exam 5: Lord of the Flies & Anthology Poetry",
    "board": "OCR",
    "subject": "English Literature",
    "tier": "J352",
    "duration": 120,
    "totalMarks": 80,
    "sections": [
      {
        "id": "section-05-modern-text",
        "title": "Section A: Lord of the Flies by William Golding",
        "instructions": "Answer all four questions in this section. Spend approximately 60 minutes on this section.",
        "questions": [
          {
            "id": "q1-lord-flies",
            "questionNumber": 1,
            "marks": 15,
            "questionText": "How does Golding present the relationship between civilization and savagery through the characters of Ralph and Jack? Use evidence from the text to support your analysis.",
            "extract": "Ralph represents the fragile maintenance of civilized order, while Jack embodies the appeal of primordial power that ultimately overwhelms rational structures.",
            "bulletPoints": [
              "Compare Ralph's and Jack's initial approaches",
              "How do their priorities and values differ?",
              "Examine key scenes where civilization fails",
              "What attracts boys to Jack's leadership?",
              "How is this conflict resolved?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis with sophisticated understanding. Excellent integration. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Golding's central dichotomy between Ralph and Jack encodes fundamental conflict about whether civilization represents genuine progress or merely superficial restraint. Ralph advocates structures prioritizing collective survival: maintaining signal fire, establishing shelters, creating sanitation rules. These represent civilization apparatus\u2014rational planning, deferred gratification, collective responsibility. Jack embodies appeal of immediate power, sensory gratification, transgression excitement. Hunting expeditions, initially fulfilling genuine needs, become abstracted from necessity and increasingly valued as sources of excitement and dominance. Novel traces gradual triumph of Jack's vision through systematic demonstration boys' preference for excitement exceeds commitment to rational survival. Signal fire repeatedly goes out as hunters abandon posts for game, establishing civilization requires constant, unglamorous maintenance humans naturally resist. Rules Ralph establishes are consistently violated. Boys wander into jungle despite prohibition; they begin doubting whether rescue is desirable. Civilization proves fragile not because rationally indefensible but because demanding submission to collective discipline humans resist. Jack's triumph becomes complete when he explicitly offers alternative meaning: hunting community. Hunting ceremonies, face paint, chants create belonging and power Ralph's structures cannot match. When Jack declares 'We don't need Ralph anymore,' he articulates boys' recognition civilization's rational benefits matter less emotionally than visceral excitement of savagery. Golding's thesis appears to be civilization is not humanity's natural state but fragile construct constantly threatened by attractions of power, aggression, and sensory gratification."
          },
          {
            "id": "q2-lord-flies",
            "questionNumber": 2,
            "marks": 20,
            "questionText": "Analyse how Golding uses the conch, Piggy's glasses, and the Lord of the Flies as symbols. Evaluate how effectively these symbols develop the novel's themes about power, civilization, and human nature.",
            "extract": null,
            "bulletPoints": [
              "What does the conch represent?",
              "Why are Piggy's glasses particularly important?",
              "What is the Lord of the Flies' symbolic significance?",
              "How do these objects relate to each other?",
              "What is the effect of their destruction?",
              "Do these symbols feel integral or overwrought?"
            ],
            "markScheme": "Level 5 (18-20): Sophisticated analysis with perceptive understanding. Excellent evaluation. Level 4 (15-17): Detailed analysis with clear understanding. Level 3 (12-14): Clear analysis with adequate evidence. Level 2 (9-11): Basic symbol identification. Level 1 (1-8): Minimal understanding.",
            "modelAnswer": "The conch, Piggy's glasses, and the Lord of the Flies function as symbolic triumvirate through which Golding externally represents internal contests between civilization, intellect, and primitive power. Each object's trajectory\u2014initial establishment, gradual degradation, ultimate destruction\u2014parallels boys' psychological regression from rational community to savage tribalism. The conch initially represents democratic order and rational discourse. Whoever holds it possesses right to speak uninterrupted; power derives from consensual agreement rather than physical dominance. Yet as novel progresses, conch's authority erodes. Jack increasingly interrupts speakers, asserting conch 'doesn't count' on his island. Boys question conch's actual power: what prevents ignoring it? Conch's destruction\u2014occurring simultaneously with Piggy's death\u2014symbolizes civilization collapse. Piggy's glasses serve multiple functions: they represent intellectual capacity, technology's power, and individual vulnerability. Glasses provide fire-starting capability, demonstrating how intellect harnesses natural forces for collective benefit. Yet fragility proves significance. As lenses break, Golding symbolizes progressive destruction of rational thinking. Jack's theft represents appropriation of technology for violent purposes\u2014using Piggy's intelligence for hunting fire rather than rescue. Final destruction\u2014Piggy's literal inability to see\u2014precedes murder, suggesting loss of rational vision coincides with loss of civilized restraint. The Lord of the Flies represents novel's deepest symbolic statement about human nature and internal psychological forces. Pig's head, erected on stick and surrounded by flies, becomes veneration object within Jack's tribe. Simon's hallucinatory conversation suggests Lord is not merely external object but manifestation of internal psychological realities\u2014desire for power, attraction to savagery, forces civilization must continually suppress. Three symbols form coherent system: conch represents external order, Piggy's glasses represent internal rationality, Lord of the Flies represents internal savagery. Novel's trajectory involves progressive destruction of external order, loss of individual rationality, and triumph of internal savagery."
          },
          {
            "id": "q3-lord-flies",
            "questionNumber": 3,
            "marks": 15,
            "questionText": "How does Golding present Simon as a character who offers an alternative perspective to the other boys' experiences? What does his fate suggest about the novel's broader themes?",
            "extract": "Simon alone among the boys seeks to understand the island's realities with clarity, yet his truth-seeking results not in enlightenment but in destruction.",
            "bulletPoints": [
              "What distinguishes Simon's character?",
              "How does Simon interact with nature differently?",
              "What is significance of his conversation with the Lord of the Flies?",
              "Why do the other boys kill him?",
              "What is the effect of his death?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis with sophisticated understanding. Excellent integration. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Simon emerges as novel's moral consciousness, character whose psychological distance from boys' regression makes him increasingly alien and ultimately expendable. His isolation stems not from weakness but from superior moral insight: he perceives Beast not as external threat but psychological manifestation, understands Lord of the Flies as representation of human nature's savage dimension, and attempts to articulate truths community finds unbearable. His death represents inevitable destruction of truth-speaker in community committed to comforting illusions. Simon's distinctiveness appears immediately. While boys engage in group activities, Simon withdraws to private shelter where he contemplates alone. His fascination with nature\u2014particularly flowers and tropical plants\u2014suggests capacity for aesthetic appreciation and meditative peace others lack. His concern for younger children, pacifist instincts, skeptical responses to Beast narrative mark him as psychologically and morally superior. Yet this superiority is precisely what renders him threatening and doomed: communities prefer comforting falsehoods to uncomfortable truths. They eliminate dissidents challenging collective illusions. Simon's hallucinatory conversation with Lord of the Flies represents novel's most psychologically sophisticated moment. Simon achieves genuine psychological insight\u2014recognizing Beast is internal, savagery emerges from within human nature itself\u2014yet this insight cannot be communicated effectively because community's survival depends upon maintaining Beast as external enemy. If Beast is internal, then boys themselves are dangerous. Simon's truth is necessarily destructive to community's defensive mythology. His death occurs precisely as he attempts to communicate truth. Returning from his encounter to warn others, Simon is mistaken for Beast and murdered in collective frenzy. Killing emphasizes randomness and inevitability: boys do not consciously choose to murder Simon; rather, they become momentarily possessed by collective madness. Simon's death marks final point of no return: community has literally destroyed its moral voice, eliminating remaining possibility of rational reformation."
          },
          {
            "id": "q4-lord-flies",
            "questionNumber": 4,
            "marks": 30,
            "questionText": "Evaluate Golding's presentation of human nature and civilization in Lord of the Flies. In your response, consider how effectively he develops these themes through characterization, symbolism, and narrative structure, and assess whether his conclusions about human nature are convincing.",
            "extract": null,
            "bulletPoints": [
              "What is Golding's central thesis about human nature?",
              "How do characters embody different aspects?",
              "How does island setting affect the narrative argument?",
              "Is Golding's pessimism justified by narrative evidence?",
              "Are there counterarguments the novel doesn't address?",
              "How does ending support or complicate argument?",
              "What is the novel's ultimate perspective on human possibility?"
            ],
            "markScheme": "Level 5 (28-30): Sustained, sophisticated analysis evaluating themes and persuasiveness. Perceptive engagement. Excellent integration. Level 4 (24-27): Detailed analysis with clear evaluation. Level 3 (20-23): Clear analysis with adequate evidence. Level 2 (16-19): Basic analysis. Level 1 (1-15): Minimal understanding.",
            "modelAnswer": "Golding's fundamental thesis holds civilization represents thin, fragile veneer atop humanity's fundamentally savage nature. Given freedom from external constraints, humans naturally regress toward violence, domination, and tribalism based on force rather than reason. The novel develops this argument through carefully controlled experiment: removing boys from civilization and observing psychological development absent adult authority. Characterization serves argument through deliberate extremity. Ralph represents reason, Piggy represents intellect, Jack represents will-to-power, Simon represents morality. These figures embody philosophical principles rather than fully complex characters. This allegorical dimension strengthens argument's coherence but limits psychological realism. Island setting proves crucial to argumentative strategy. Isolation from adult authority, abundant resources, absence of immediate survival pressures create conditions uniquely conducive to psychological regression. Golding deliberately establishes boys are not starving or dying\u2014violence emerges from psychological and social factors rather than desperation. This is Golding's point: human savagery is not merely survival response but fundamental aspect of psychology. Yet island's particular conditions\u2014tropical abundance, geographic isolation, homogeneous population\u2014limit generalizability. Real societies operate under different constraints: scarcity, diversity, institutional structures. Whether Golding's conclusions would hold under these different conditions remains unclear. Novel's most powerful evidence supporting thesis involves Simon and Piggy's murders and escalating violence. Collective murder of Simon and Piggy presents regression not as individual pathology but community phenomenon. Contagious violence nature, psychological appeal of tribal belonging, progressive abandonment of rational discourse all support argument. Yet narrative presents counterevidence: Ralph maintains rational commitment throughout; Piggy never fully surrenders; littluns remain somewhat under civilized influence. These pockets of resistance suggest humans may possess capacity for rational transcendence that Golding's argument minimizes. Ending proves particularly significant. Boys' rescue by adult authority representing civilization suggests Golding's despair requires qualification. Yet naval officer's presence stems from his participation in naval war, suggesting adults engage in same savagery boys have regressed into. This ambiguity potentially undermines Golding's argument: if adult civilization is identical to boys' savagery, novel cannot clearly distinguish between civilized and savage states. Overall, Golding's presentation proves persuasive within carefully constructed parameters. His demonstration of how quickly ordered community fragments, how readily communities embrace comforting illusions, carries powerful conviction. Yet argument ultimately depends upon contestable assumptions: that island is representative, that psychology is destiny, that individual morality cannot significantly alter social trajectories. Humans' capacity for moral growth, institutional structures constraining savagery, and possibility of rational transcendence remain possibilities Golding's narrative does not adequately accommodate."
          }
        ]
      },
      {
        "id": "section-05-poetry",
        "title": "Section B: Poetry from the Power and Conflict Anthology",
        "instructions": "Answer one question from this section. You have approximately 20 minutes for this section.",
        "questions": [
          {
            "id": "q5-poetry-lord-flies",
            "questionNumber": 5,
            "marks": 20,
            "questionText": "Compare how two poems from the Power and Conflict anthology present conflict or tension between different groups or ideologies. You must choose two different poems. In your response, consider how language, form, and imagery convey the nature and consequences of these conflicts.",
            "extract": null,
            "bulletPoints": [
              "Select two poems presenting group conflict",
              "Consider how poets present competing perspectives",
              "Analyse language emphasizing conflict or division",
              "Examine form's contribution",
              "Use extensive integrated quotations",
              "Develop sustained comparative analysis"
            ],
            "markScheme": "Level 5 (18-20): Sustained comparison with perceptive analysis. Excellent integration. Level 4 (15-17): Clear comparison with detailed analysis. Level 3 (12-14): Adequate comparison. Level 2 (9-11): Basic comparison. Level 1 (1-8): Minimal engagement.",
            "modelAnswer": "'The Charge of the Light Brigade' by Tennyson and 'Dulce et Decorum Est' by Wilfred Owen present starkly contrasting perspectives on military conflict. Tennyson emphasizes military hierarchy and sacrificial glory, while Owen emphasizes individual suffering and falseness of patriotic rhetoric. Together these poems demonstrate how language and form can valorize or critique same historical phenomenon. Tennyson's poem celebrates military organization and transformative power of group identity. Opening establishes hierarchical order: 'Someone had blunder'd,' yet soldiers 'obey' despite recognizing command's error. Form\u2014regular meter, rhyming triplets, energetic rhythm\u2014creates impression of irresistible momentum: 'Forward, the Light Brigade! Forward!' Repetition of 'forward' becomes hypnotic, enacting soldiers' loss of individual agency. Language emphasizes group identity: 'theirs not to reason why, theirs but to do and die.' Individual reasoning is irrelevant; power emerges from unified action. Tennyson presents this group subordination not as tragic loss but noble sacrifice: 'Honour the light brigade, noble six hundred.' Soldiers achieve transcendence through group identity. Owen's 'Dulce et Decorum Est' directly challenges valorization of group sacrifice. Opening image\u2014soldiers 'bent double, like old beggars'\u2014emphasizes individual bodily suffering, reduction of humans to dehumanized forms. When soldier fails to don gas mask and begins suffocating, Owen presents vivid individual agony: 'white eyes writhing in his face, his hanging face, like a devil's sick of sin.' Contrast with Tennyson's abstract celebration is devastating. Form\u2014irregular meter, fragmented syntax, sensory overwhelm\u2014conveys psychological chaos rather than military order. Final lines directly attack mythology Tennyson exemplifies: 'It is sweet and fitting to die for one's country' (Horace quote) is explicitly labeled a 'lie' to be told to children. Poems' presentations of group dynamics differ fundamentally. Tennyson presents group membership as enabling, elevating individuals into something larger than themselves. Owen presents group dynamics as mechanism manipulating individuals into accepting death. Patriotic rhetoric transforms individual self-interest into collective sacrifice, making deaths appear meaningful rather than tragic waste."
          }
        ]
      }
    ]
  },
  {
    "id": "ocr-lit-06-much-ado",
    "title": "OCR GCSE English Literature Mock Exam 6: Much Ado About Nothing & Unseen Poetry",
    "board": "OCR",
    "subject": "English Literature",
    "tier": "J352",
    "duration": 120,
    "totalMarks": 80,
    "sections": [
      {
        "id": "section-06-modern-text",
        "title": "Section A: Much Ado About Nothing by William Shakespeare",
        "instructions": "Answer all four questions in this section. Spend approximately 60 minutes on this section.",
        "questions": [
          {
            "id": "q1-much-ado",
            "questionNumber": 1,
            "marks": 15,
            "questionText": "How does Shakespeare present Beatrice as a character who challenges conventional gender roles and social expectations? Use specific textual evidence to support your analysis.",
            "extract": "Beatrice's wit, independence, and refusal to conform to expectations of female submissiveness establish her as a transgressive figure whose eventual submission to love appears complex.",
            "bulletPoints": [
              "How does Beatrice's language differ from other characters?",
              "What does her 'merry war' with Benedick reveal?",
              "How does she respond to social pressure to marry?",
              "What is the significance of her 'hard heart' claim?",
              "How does her character develop across the play?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis with sophisticated understanding. Excellent integration. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Beatrice emerges as Shakespeare's most psychologically sophisticated representation of female agency, a woman whose linguistic wit, emotional independence, and refusal to conform establish her as fundamentally transgressive. Her assertion\u2014'I had rather hear my dog bark at a crow than a man swear he loves me'\u2014articulates rejection of romantic submission and conventional female roles. Shakespeare presents her not as character awaiting redemption through marriage but as person whose psychological wholeness remains intact regardless of romantic outcome. Yet her ultimate acceptance of Benedick's love suggests complexity: wit and independence do not eliminate capacity for genuine attachment. Beatrice's language establishes intellectual and social superiority. Her wit operates through rapid, complex wordplay most characters struggle to match. When Benedick declares, 'I would my horse had the speed of your tongue,' Beatrice responds, 'And comes behind with such grace.' The exchange demonstrates her linguistic dominance: Benedick attempts insult but Beatrice neutralizes and inverts it. Her 'merry war' represents not genuine enmity but intellectual play between equals\u2014fundamentally different from conventional courtship patterns. Her resistance to marriage articulates radical independence: 'I have no humor for marriage, and therefore never shall.' This declares authority over her future rather than accepting familial authority to arrange her life. Her assertion of emotional autonomy attempts to construct self-sufficient identity independent of romantic attachment. Yet Shakespeare complicates this through conclusion. When Beatrice discovers Benedick loves her, her response combines genuine emotion with maintained wit. She accepts his love while insisting conditional acceptance: she will love him, but 'not till God make men of some other metal than earth.' Final 'merry war' within love context preserves intellectual equality and mutual respect that characterized antagonism. Her love is compatible with independence precisely because Benedick respects her wit and agency."
          },
          {
            "id": "q2-much-ado",
            "questionNumber": 2,
            "marks": 20,
            "questionText": "Analyse how Shakespeare uses deception, misunderstanding, and witty language to develop the play's comic situations and romantic entanglements. Evaluate how effectively these techniques create both comedy and thematic meaning.",
            "extract": null,
            "bulletPoints": [
              "How do various deceptions set plot in motion?",
              "Compare malicious deception with benevolent deception",
              "What role does witty dialogue play?",
              "How do misunderstandings create comedy and potential tragedy?",
              "Is comedy sophisticated or merely situational?",
              "What does play suggest about language's reliability?"
            ],
            "markScheme": "Level 5 (18-20): Sophisticated analysis; perceptive evaluation. Excellent integration. Level 4 (15-17): Detailed analysis with clear understanding. Level 3 (12-14): Clear analysis with adequate evidence. Level 2 (9-11): Basic analysis. Level 1 (1-8): Minimal understanding.",
            "modelAnswer": "Shakespeare constructs Much Ado through elaborate architecture of deceptions, misunderstandings, and linguistic conceits where comedy emerges from disjunction between appearance and reality. Deception operates at multiple registers. Benevolent deceptions involve carefully constructed misunderstandings designed to produce genuine truth-telling. When Beatrice's friends deliberately speak loudly enough for her to overhear them discussing Benedick's love, they employ deception to make Beatrice consciously acknowledge truth she has been denying. This deception serves genuine truth-telling rather than falsification. Similarly, the plot to trick Benedick involves having men discuss Beatrice's supposed suffering from unrequited love, stimulating his transformation. These deceptions are comic yet thematically significant: they suggest love often requires permission to emerge, that social roles prevent authentic feeling from being expressed. Contrasting sharply with benevolent deceptions is Don John's malicious plot against Claudio and Hero. His staged seduction\u2014where Margaret is mistaken for Hero\u2014represents deception's destructive potential. Don John's deception differs fundamentally because it aims not at truth but destruction. The resulting tragedy\u2014Hero's public shaming, Claudio's apparent cruelty\u2014emerges directly from deception. Yet Shakespeare complicates tragedy's potential finality: the deception is revealed before actual permanent harm occurs. Witty dialogue functions as both obstacle and vehicle for romantic development. Beatrice and Benedick's elaborate verbal combat appears to prevent their union yet simultaneously demonstrates their intellectual equality. Their wit keeps them engaged in antagonism rather than affection, yet their ability to match each other demonstrates respect. When they finally acknowledge their feelings, wit does not cease but becomes redirected: 'I will be horribly in love with her' maintains comic tone while articulating commitment. Shakespeare suggests wit and love are not mutually exclusive but can coexist. The play's language proves sophisticated in exploring how words can both obscure and reveal reality. Characters frequently misinterpret what they hear, assuming witty banter indicates genuine enmity or formal courtesy indicates genuine feeling. Comedy emerges from these misalignments between apparent and actual meaning. Claudio's misinterpretation of Hero's innocence suggests language's meaning is never transparent. The public accusation scene hinges entirely on language's equivocal nature. The play's conclusion suggests ultimate faith in language's ability to serve truth despite its potential for deception. Deceptions are revealed, misunderstandings clarified, and couples unite based upon mutual understanding and authentic feeling."
          },
          {
            "id": "q3-much-ado",
            "questionNumber": 3,
            "marks": 15,
            "questionText": "How does Shakespeare present the tension between appearance and reality in Much Ado About Nothing? What does this theme suggest about social pretense and authentic identity?",
            "extract": "Characters frequently mistake appearance for reality, assuming that external presentation accurately reflects internal truth, only to discover that identity itself is far more complex and fluid.",
            "bulletPoints": [
              "How are characters defined by social roles?",
              "What happens when characters examine assumptions?",
              "How do costume and performance contribute to misunderstanding?",
              "What is the significance of masked ball scene?",
              "Do characters ultimately achieve authentic self-knowledge?"
            ],
            "markScheme": "Level 5 (14-15): Perceptive analysis with sophisticated understanding. Excellent integration. Level 4 (12-13): Clear analysis with good support. Level 3 (10-11): Adequate analysis. Level 2 (7-9): Basic comments. Level 1 (1-6): Minimal engagement.",
            "modelAnswer": "Much Ado systematically explores how social performance and external presentation obscure authentic identity, suggesting self is constructed through linguistic and behavioral repetition rather than representing some essential, unchanging truth. Characters adopt social roles\u2014Beatrice as scorned lover, Benedick as misogynist, Claudio as devoted lover\u2014and these performances become so habitual that distinguishing performance from reality becomes impossible. Beatrice's fundamental performance operates through assumption that her wit and sharp tongue represent true self, masking any capacity for genuine emotion. Her public persona of scorned woman who refuses romantic attachment becomes so established that when she actually loves Benedick, she must initially deny it. Deception involving overheard conversation forces her to confront gap between performed self and actual feelings. Similarly, Benedick's performed misogyny masks genuine capacity for romantic attachment. His public assertions of woman-hating appear thoroughgoing yet friends must use elaborate deception to convince him Beatrice loves him. Masked ball scene crystallizes play's exploration of appearance and identity. Physical masking creates space where characters escape established social roles. Yet masks prove ineffective: Claudio recognizes Don John despite disguise; Beatrice identifies Benedick despite attempted disguise. Masks do not actually transform identity; they merely conceal what remains visibly apparent. The broader suggestion is that identity itself is fundamentally constructed through social performance. Claudio's identity as devoted lover proves as contingent as Beatrice's scorned lover persona: when Don John provides apparent evidence of his understanding being mistaken, Claudio transforms into accuser with shocking speed. His willingness to believe Hero is sexually promiscuous despite prior evidence suggests his lover's devotion was never more than performed role, easily abandoned when challenged. Social roles, once adopted, become so habitual that distinguishing authentic feeling from performed convention becomes nearly impossible."
          },
          {
            "id": "q4-much-ado",
            "questionNumber": 4,
            "marks": 30,
            "questionText": "Evaluate Shakespeare's treatment of comedy in Much Ado About Nothing. In your response, consider how he uses wit, plot mechanics, and character development to create comedy, and assess how effectively the play balances comedy with darker thematic concerns about deception, accusation, and romantic commitment.",
            "extract": null,
            "bulletPoints": [
              "What makes the play's comedy distinctive?",
              "How does witty dialogue function as comedy?",
              "What is the relationship between comedy and potential tragedy?",
              "How does accusation scene complicate comedy?",
              "Does happy ending feel earned or forced?",
              "How does comedy serve thematic concerns?",
              "What does play suggest about happiness and relationships?"
            ],
            "markScheme": "Level 5 (28-30): Sustained, sophisticated analysis; perceptive evaluation. Excellent integration. Level 4 (24-27): Detailed analysis with clear understanding. Level 3 (20-23): Clear analysis with adequate evidence. Level 2 (16-19): Basic analysis. Level 1 (1-15): Minimal understanding.",
            "modelAnswer": "Much Ado represents Shakespeare's most intellectually sophisticated comedy, where wit itself becomes central mode of both dramatic action and thematic exploration. Shakespeare's comedy does not depend primarily on physical humor or absurd mechanics but rather on linguistic virtuosity where characters' capacity to manipulate language, create witty rejoinders, and engage in elaborate verbal combat defines characterization and dramatic drive. This linguistic emphasis creates distinctive comic texture simultaneously entertaining and articulating thematic concerns. Comedy of wit operates through multiple mechanisms. First, rapid-fire dialogue between Beatrice and Benedick creates comedy through intellectual superiority and mutual respect: we laugh because wit is genuinely clever, because neither dominates the other, because combat disguises genuine affection. Second, situational comedy of deceptions\u2014where characters are maneuvered into acknowledging truths they have denied\u2014generates comedy through gap between self-perception and external reality. Benedick's elaborate transformation, once he believes Beatrice loves him, is comic precisely because it reveals identity's contingency. Third, comedy emerges from exposure of pretense: when characters' performed identities are revealed as performance, exposure carries simultaneously comic and therapeutic function. Dark accusation scene significantly complicates comic mode. Claudio's public denunciation of Hero at altar\u2014his assertion that she is sexually promiscuous\u2014carries genuine brutality beneath comic setup. The scene threatens transformation from comedy into tragedy: Hero faints, appears to die, and Leonato articulates genuine rage. Accusation exploits same mechanisms as benevolent deceptions. Yet unlike Beatrice/Benedick deceptions aimed at truth-telling, Don John's deception aims at destruction. The scene suggests same language and performance mechanisms enabling witty comedy can equally enable devastating cruelty. Shakespeare's handling reveals sophisticated understanding of how comedy and tragedy operate through similar mechanisms. Difference lies not in events themselves but in how they are resolved and what they ultimately mean. Rapid revelation that Hero is innocent prevents darker potential from developing. Yet speed of resolution should not blind readers to underlying anxiety: social appearances can be manipulated, accusations once made are difficult to repair, romantic commitment proves shallower than believed. Play's famous final lines\u2014'Peace! I will stop your mouth'\u2014carry implications beyond simple romantic comedy. Benedick's silencing of Beatrice through kissing represents both triumphant climax and suppression of wit characterizing her. Dramatic irony is gentle rather than dark, yet it suggests romantic commitment may require surrender of linguistic independence that have enabled both characters' integrity. Balance between comedy and darker concerns proves remarkably effective. Shakespeare does not resolve tensions between individual autonomy and romantic commitment, between linguistic virtuosity and emotional authenticity. Rather, he maintains these tensions, suggesting happiness emerges not from resolution but from learning to live within them. Play's conclusion\u2014achieved through parallel courtships and Don John's exile\u2014suggests human flourishing involves accepting others as they are and trusting that beneath performance lies genuine capacity for feeling. Comedy ultimately serves serious purposes: it permits exploration of identity's contingency and language's power without requiring characters to confront these subjects with unrelenting seriousness."
          }
        ]
      },
      {
        "id": "section-06-poetry",
        "title": "Section B: Unseen Poetry",
        "instructions": "Answer the following question. You have approximately 20 minutes for this section. A poem will be provided in the examination paper.",
        "questions": [
          {
            "id": "q5-unseen-poetry-3",
            "questionNumber": 5,
            "marks": 20,
            "questionText": "[UNSEEN POEM PROVIDED IN EXAMINATION]. Read the poem carefully. Analyse how the poet uses language, imagery, and form to present [central theme of unseen poem]. In your response, you should consider specific word choices, poetic devices, and the overall effect created by the poem's structure.",
            "extract": "[Unseen poem text will be provided in the examination paper]",
            "bulletPoints": [
              "Read the poem carefully at least twice",
              "Identify poem's subject, central concern, and emotional tone",
              "Note poem's formal characteristics: rhyme scheme, meter, line breaks",
              "Analyse specific language choices: nouns, verbs, adjectives, adverbs",
              "Consider figurative language: metaphor, simile, personification, alliteration",
              "Examine how form relates to content and theme",
              "Consider poem's audience and speaker's relationship to audience",
              "Develop sustained analytical engagement with substantial quotations"
            ],
            "markScheme": "Level 5 (18-20): Perceptive analysis with sophisticated understanding. Excellent integration. Level 4 (15-17): Clear analysis with good understanding. Level 3 (12-14): Adequate analysis with some understanding. Level 2 (9-11): Basic analysis with limited coverage. Level 1 (1-8): Minimal analysis.",
            "modelAnswer": "[Model answer will be generated based on specific unseen poem provided in examination. Response should demonstrate sustained analytical engagement with poem's language, imagery, form, and overall structure. Aim for approximately 500-600 words demonstrating Level 5 analytical standards.]"
          }
        ]
      }
    ]
  }
];
