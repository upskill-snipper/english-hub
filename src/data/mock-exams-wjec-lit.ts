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

export const wjecLitMockExams: MockExamPaper[] = [
  {
    id: 'wjec-lit-001',
    title: 'Component 1: Shakespeare (Macbeth) and Poetry',
    board: 'WJEC',
    subject: 'English Literature',
    duration: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'section-1a',
        title: 'Section A: Shakespeare - Macbeth',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q1-001',
            questionNumber: 1,
            marks: 40,
            questionText: 'Explore how Shakespeare presents the theme of ambition in Macbeth. You must refer to the extract below and to other parts of the play.',
            extract: 'MACBETH: If it were done when \'tis done, then \'twere well\nIt were done quickly: that but this blow\nMight be the be-all and the end-all here,\nBut here, upon this bank and shoal of time,\nWe\'d jump the life to come. But in these cases\nWe still have judgement here; that we but teach\nBloody instructions, which, being taught, return\nTo plague the inventor: this even-handed justice\nCommends the ingredients of our poison\'d chalice\nTo our own lips.',
            markScheme: 'AO1 (12 marks): Identify and interpret ideas about ambition; analyse structural features and language techniques (soliloquy, metaphor). AO2 (12 marks): Explore how language and form reveal Macbeth\'s psychological conflict; semantic field of fear/poison. AO3 (16 marks): Consider contextual significance of unchecked ambition in Jacobean society; parallels with historical figures; gender and masculinity pressures.',
            modelAnswer: 'Shakespeare presents ambition as a destructive force that corrupts the soul. In this soliloquy, Macbeth acknowledges that murdering Duncan is morally reprehensible ("If it were done when \'tis done"), yet his desire for power drives him forward. The extended metaphor of the "poison\'d chalice" suggests that ambition is self-consuming—the consequences of his actions will return to him like poisoned wine, capturing how his own evil will destroy him.\n\nThe conditional structure ("If it were done...") reveals Macbeth\'s vacillation between reason and desire. He knows the theological consequences ("We still have judgement here") yet proceeds regardless. This internal conflict is characteristic of Shakespeare\'s tragic heroes.\n\nThroughout the play, ambition drives increasingly brutal acts: slaughter of Macduff\'s family, murder of Banquo. Macbeth becomes a tyrant because his original ambition is never satisfied. In Jacobean England, unchecked ambition was viewed as transgression against divine order. Shakespeare\'s portrayal warned audiences of ambition\'s dangers while exploring the psychology of power-hunger.'
          },
          {
            id: 'q1-002',
            questionNumber: 2,
            marks: 40,
            questionText: 'How does Shakespeare use the witches to explore the theme of fate versus free will in Macbeth?',
            markScheme: 'AO1 (12 marks): Analyse dramatic techniques (supernatural elements, prophecies, paradox); examine Macbeth\'s responses. AO2 (12 marks): Explore language patterns; ellipsis and riddles in witches\' speech; Macbeth\'s interpretation. AO3 (16 marks): Historical context of witchcraft beliefs; Renaissance philosophy of predestination; ambiguity in Shakespeare\'s treatment.',
            modelAnswer: 'The witches represent the intersection of fate and free will in Macbeth. Their prophecies do not determine action but trigger Macbeth\'s own ambition. The witches never explicitly command him to murder Duncan; instead, their equivocal pronouncements ("Hail to thee, thane of Glamis") awaken his latent desires. Shakespeare\'s genius lies in this ambiguity.\n\nThe paradoxical nature of their prophecies ("None of woman born / Shall harm Macbeth") suggests that fate operates through human interpretation. Macbeth\'s misinterpretation of these riddles leads to his downfall. This structure implies that Macbeth is simultaneously the agent of his own destruction and a victim of circumstance.\n\nIn Jacobean context, this ambiguity reflects contemporary anxieties about witchcraft, demonic influence, and moral responsibility. Shakespeare avoids resolving whether the witches control Macbeth or merely reflect his inner nature, leaving audiences to consider whether humans are masters of their fate.'
          }
        ]
      },
      {
        id: 'section-1b',
        title: 'Section B: Poetry',
        instructions: 'Answer one question from this section. You should refer to two poems, at least one of which must be from a different cluster.',
        questions: [
          {
            id: 'q1-003',
            questionNumber: 3,
            marks: 40,
            questionText: 'Compare how poets present the intensity of emotion in the poems you have studied. You should refer to at least two poems.',
            markScheme: 'AO1 (12 marks): Select relevant poems; identify emotional intensity; analyse language and structural choices. AO2 (12 marks): Compare poetic techniques (imagery, rhythm, tone); explore how form conveys emotion. AO3 (16 marks): Historical context of emotions; genre conventions; thematic development across poems.',
            modelAnswer: 'Poets deploy distinctive linguistic and structural techniques to convey emotional intensity. In "Ozymandias," Shelley\'s narrative framework creates emotional distance—emotion emerges not from passionate outpouring but from the irony of decay. The volta marked by "Look on my works, ye mighty, and despair" presents emotional intensity through arrogance now rendered pathetic by time. Conversely, in "Porphyria\'s Lover," Browning captures intensity through dramatic monologue, allowing the speaker\'s disturbing passion to emerge through unfiltered syntax.\n\nShelley\'s Petrarchan sonnet structure imposes formal control that paradoxically emphasizes emotional loss. Browning\'s conversational lines and irregular rhythm create psychological realism. Where Shelley contemplates emotion intellectually, Browning inhabits it viscerally.\n\nHistorically, both poems respond to their era\'s interest in psychological states and power dynamics. Shelley interrogates ambition and legacy during revolutionary ferment; Browning explores obsessive love in an age of increasing psychological interest. Both poets use emotional intensity as thematic inquiry.'
          }
        ]
      }
    ]
  },
  {
    id: 'wjec-lit-002',
    title: 'Component 1: Shakespeare (Romeo and Juliet) and Poetry',
    board: 'WJEC',
    subject: 'English Literature',
    duration: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'section-2a',
        title: 'Section A: Shakespeare - Romeo and Juliet',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q2-001',
            questionNumber: 1,
            marks: 40,
            questionText: 'Examine how Shakespeare presents the relationship between the Montague and Capulet families. You must refer to the extract below and to other parts of the play.',
            extract: 'TYBALT: What, dost thou make us minstrels?\nROMEO: Nay, good Mercutio, let\'s retire:\nThe day is hot, the Capulets abroad,\nAnd, if we meet, we shall not \'scape a brawl;\nFor now, these hot days, is the mad blood stirring.',
            markScheme: 'AO1 (12 marks): Analyse dialogue and dramatic irony; identify conflict dynamics. AO2 (12 marks): Examine language choices (insult, provocative tone); dramatic tension. AO3 (16 marks): Social context of feuds; honour culture in Renaissance Verona; inevitability of tragedy.',
            modelAnswer: 'Shakespeare presents the Montague-Capulet feud as a destructive force that transcends personal grievance, becoming systemic hatred embedded in social identity. The extract reveals how quickly conflict escalates: Romeo attempts peace ("let\'s retire"), yet Tybalt\'s provocative language and the social imperative of masculine honour override rational choice. The "hot days" metaphor suggests violence is seasonal, inevitable, almost climatic.\n\nThe servants\' early brawl establishes that the feud permeates all social levels. Nobility, servants, even the Prince—all are trapped in cycles of retaliation. Romeo and Juliet\'s love becomes tragic precisely because it cuts across this familial enmity. Their secret marriage represents love\'s attempt to transcend social boundaries, yet the feud\'s logic inevitably destroys them.\n\nIn Renaissance context, honour and reputation were paramount. The feud operates as much from social conditioning as genuine grievance. By play\'s end, Romeo and Juliet\'s deaths paradoxically achieve what their love could not: reconciliation through tragedy.'
          },
          {
            id: 'q2-002',
            questionNumber: 2,
            marks: 40,
            questionText: 'How does Shakespeare use religious imagery to develop themes of love and death in Romeo and Juliet?',
            markScheme: 'AO1 (12 marks): Identify religious references (holy/shrine/saint); trace patterns across play. AO2 (12 marks): Analyse how religious language elevates romantic love; examine oxymoron and paradox. AO3 (16 marks): Reformation context; treatment of physical love in religious society; sacrilege implications.',
            modelAnswer: 'Shakespeare sacralizes Romeo and Juliet\'s love through persistent religious imagery, presenting romantic passion as spiritual transcendence. In their first meeting, Romeo addresses Juliet as "holy shrine" and describes his lips as "pilgrims"—religious language that elevates their connection to spiritual devotion. This linguistic choice is radical: Shakespeare presents physical attraction through the vocabulary of religious faith.\n\nThe sacred language creates poignant irony given the ultimate tragedy. Their love is described in terms suggesting eternity and salvation, yet it concludes with literal death. The private marriage ceremony lacks religious sanction, suggesting their spiritual union exists outside institutional religion. When Romeo stands before Juliet\'s apparently lifeless body, he drinks poison in a grotesque inversion of communion.\n\nIn Reformation England, this treatment of romantic love as competing with religious devotion would have seemed provocative. Shakespeare presents love as redemptive yet destructive, sacred yet transgressive. The religious imagery emphasizes that Romeo and Juliet\'s bond transcends earthly social structures, yet cannot transcend death.'
          }
        ]
      },
      {
        id: 'section-2b',
        title: 'Section B: Poetry',
        instructions: 'Answer one question from this section. You should refer to two poems, at least one of which must be from a different cluster.',
        questions: [
          {
            id: 'q2-003',
            questionNumber: 3,
            marks: 40,
            questionText: 'How do poets use form and structure to explore their subject matter? Refer to at least two poems in your answer.',
            markScheme: 'AO1 (12 marks): Identify structural features (stanza form, rhyme, length); explain relationship to content. AO2 (12 marks): Analyse how structure creates meaning; compare different poetic forms. AO3 (16 marks): Historical conventions; innovative use of form; genre expectations.',
            modelAnswer: 'Poetic form is not merely decorative but fundamental to meaning-making. Dylan Thomas\'s "Do Not Go Gentle Into That Good Night" employs a villanelle—a highly restrictive form with repeated refrains—to capture obsessive, cyclical grief. The form\'s requirement that lines recur mirrors the speaker\'s psychological loop of exhortation and despair. The villanelle\'s formal constraints paradoxically create emotional intensity; repetition captures the compulsive nature of grief.\n\nContrast this with deliberate fragmentation in contemporary poets like Carol Ann Duffy. Her "The Thin Time" uses short lines and broken syntax to convey emotional rupture. Where Thomas uses formal architecture to contain emotion, Duffy uses structural dissolution to express emotional fragmentation. Thomas\'s form suggests rigorous control can channel grief; Duffy\'s form suggests some experiences cannot be formally contained.\n\nBoth approaches demonstrate that form is ideological—the choice of structure reveals the poet\'s philosophical position toward their subject. Thomas\'s villanelle insists on the possibility of dignified resistance; Duffy\'s fragmentation insists on the authenticity of incompleteness. Modernist poets increasingly abandoned traditional forms to match modern consciousness\'s fragmented nature, yet formalist poets never abandoned the belief that constraint enables expression.'
          }
        ]
      }
    ]
  },
  {
    id: 'wjec-lit-003',
    title: 'Component 2: Post-1914 Drama and 19th Century (An Inspector Calls & A Christmas Carol)',
    board: 'WJEC',
    subject: 'English Literature',
    duration: 150,
    totalMarks: 100,
    sections: [
      {
        id: 'section-3a',
        title: 'Section A: Post-1914 Drama - An Inspector Calls',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q3-001',
            questionNumber: 1,
            marks: 50,
            questionText: 'Examine how Priestley uses the Inspector as a dramatic device to explore social responsibility in An Inspector Calls. You must refer to the extract below and to other parts of the play.',
            extract: 'INSPECTOR: But just remember this. One Eva Smith has gone – but there are millions and millions and millions of Eva Smiths and John Smiths still in the world, and as long as there is, and you\'re not sorry or ashamed of anything you\'ve done, then they have nothing to do but to wait for the end... if you mess with us, the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish.',
            markScheme: 'AO1 (15 marks): Analyse the Inspector\'s function (catalyst, moral voice, mysterious figure); trace his impact on each character. AO2 (15 marks): Examine rhetorical techniques (repetition, metaphor of "fire and blood"), prophetic tone; dramatic irony given historical context. AO3 (20 marks): Historical context of post-war social reform; Priestley\'s didactic purpose; the Inspector\'s ambiguous identity.',
            modelAnswer: 'The Inspector functions as both dramatic agent and moral conscience, operating simultaneously as investigator and prophet. Priestley\'s characterization is deliberately ambiguous—the Inspector may be a supernatural force, a communist agitator, or simply a remarkable individual. This ambiguity is central to his dramatic power; audiences cannot dismiss him through conventional categorization.\n\nThrough interrogation, the Inspector progressively reveals each character\'s complicity in Eva\'s death, moving from Mrs. Birling\'s casual dismissal to Mr. Birling\'s economic rationalization to the younger generation\'s more intimate betrayals. Yet the Inspector\'s method transcends mere detective work; he functions as a Brechtian alienation device, forcing audiences to confront uncomfortable truths about culpability and social structures.\n\nThe climactic speech employs repetition ("millions and millions") to displace individual guilt onto systemic injustice, then pivots to apocalyptic warning. The metaphor of "fire and blood and anguish" carries prophetic weight given the play was written in 1945, after the Holocaust and atomic bombing. Audiences, knowing history\'s trajectory, recognize the prophecy\'s accuracy: the world must learn social responsibility or face destruction. Priestley transforms the Inspector from a character within dramatic fiction to a voice addressing contemporary society directly.\n\nThe final revelation—that the Inspector may not be a "real" inspector—destabilizes the play\'s dramatic logic. If he is fabricated, how can his moral insights be dismissed? Priestley suggests that the Inspector\'s truthfulness transcends his identity; what matters is the moral imperative he articulates. The play\'s ultimate message emerges: each generation must accept responsibility for social justice.'
          },
          {
            id: 'q3-002',
            questionNumber: 2,
            marks: 50,
            questionText: 'How does Priestley present the character of Mr. Birling? What do his actions and attitudes reveal about Edwardian society and values?',
            markScheme: 'AO1 (15 marks): Character analysis of Mr. Birling\'s methods, values, resistance; trace character development. AO2 (15 marks): Examine language (jargon, imperatives), dramatic irony of his "unsinkable" metaphors. AO3 (20 marks): Edwardian capitalism; business ethics; dramatic irony of pre-war optimism; social class entitlement.',
            modelAnswer: 'Mr. Birling embodies pre-war capitalist confidence and moral complacency. His opening speech reveals a man intoxicated by prosperity and utterly convinced of his social position\'s permanence. His assertion that the Titanic is "unsinkable" becomes iconic irony—the audience knows of the ship\'s destruction within weeks of the play\'s 1912 setting, yet Birling remains oblivious to contingency. This dramatic irony applies to his broader worldview: he believes in inevitable progress, stable hierarchies, and that economic success justifies any means.\n\nBirling\'s treatment of Eva Smith reveals his utilitarian calculus: her dismissal from his factory is business necessity, not moral wrong. He paid standard wages (he believes), and if she chose prostitution, that reflects her character, not his responsibility. His logic epitomizes what Priestley critiques: the severing of economic action from moral consequence. Birling conceives business as amoral competition where sentiment is luxury only the wealthy can afford.\n\nThroughout the play, Birling exemplifies defensive resistance—attempting to discredit the Inspector, appeal to class solidarity with the Chief Constable, assert his status. His determination to keep the scandal private reveals his fundamental concern: reputation rather than guilt. Priestley suggests that such men constructed the conditions for social catastrophe; their refusal to recognize collective responsibility enabled fascism and war.\n\nIn Edwardian context, Birling represents the industrial bourgeoisie at historical transition. His world is ending (though he doesn\'t know it), and his values—profit-maximization, class hierarchy, male dominance—will be challenged by war and economic collapse. Priestley uses Birling\'s blindness as critique: post-war audiences can see that pre-war complacency enabled catastrophe. The play implicitly asks: will the post-war generation learn what Birling never will?'
          }
        ]
      },
      {
        id: 'section-3b',
        title: 'Section B: 19th Century Prose - A Christmas Carol',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q3-003',
            questionNumber: 3,
            marks: 50,
            questionText: 'Examine how Dickens uses supernatural elements to explore themes of redemption and social responsibility in A Christmas Carol. You must refer to the extract below and to other parts of the text.',
            extract: '"Are these the shadows of the things that Will be," said Scrooge, "or are they shadows of things that May be?" Scrooge was conscious that nothing pointed him to laying down the condemnation he had drawn up in his own heart against his nephew; and yet he would have liked to do it if he could. "Who can say?" returned the spirit. "If the course you are now pursuing can be changed, and you resume these shadows of themselves, if I may use the expression, being their course, and not another course, they have not yet told me..."',
            markScheme: 'AO1 (15 marks): Analyse the spirits\' function; examine Scrooge\'s transformation trajectory. AO2 (15 marks): Explore uncertainty in language ("shadows," "may be"); dramatic tension of contingency; redemptive possibilities. AO3 (20 marks): Victorian spiritualism; Dickens\'s social criticism; redemption narrative conventions; historical anxieties.',
            modelAnswer: 'Dickens\'s supernatural machinery is not ornamental but fundamental to his moral philosophy. The spirits embody the possibility of transformation through confrontation with consequences—both past (regret), present (suffering), and future (damnation). The ambiguity surrounding future visions is crucial: Scrooge is shown possible futures contingent on his present behavior, not predetermined fate.\n\nThis epistemological uncertainty—"Are these shadows of things that Will be, or...May be?"—is philosophically radical. Dickens suggests that the future is not fixed but responsive to individual moral choice. Scrooge\'s despair at witnessing his own funeral is alleviated when he realizes that the future is contingent: he can change course and alter the shadow of Tiny Tim\'s death. The spirits offer not prophecy but conditional warnings.\n\nThe spirits themselves represent different modes of moral awakening. The Ghost of Christmas Past resurrects Scrooge\'s suppressed empathy, showing the young man he was before hardening into capitalism\'s logic. Christmas Present illustrates present suffering—the Bob Cratchit family\'s poverty juxtaposed with Scrooge\'s wealth—making visible what Scrooge has habitually ignored. Christmas Yet to Come forces final reckoning with ultimate consequences: death, obliteration, replacement.\n\nScrooge\'s redemption is total transformation, not mere reformation. He becomes suddenly generous, celebrating with the Cratchits, ensuring Tiny Tim\'s survival. Some Victorian critics found this conversion implausibly sudden, but Dickens\'s point is precisely that genuine moral awakening is revolutionary. Scrooge cannot gradually improve; he must be shattered and reconstructed.\n\nIn Victorian context, this narrative operates as implicit social criticism. If Scrooge\'s redemption requires supernatural intervention, what of the thousands of actual Scrooges unmoved by spirits? Dickens\'s sentimentalism about Scrooge\'s transformation coexists with implicit critique: industrial society produces spiritual death requiring extreme measures to reverse. The supernatural is Dickens\'s literary means of imagining transformation that Victorian social structures seem to make impossible.'
          }
        ]
      }
    ]
  },
  {
    id: 'wjec-lit-004',
    title: 'Component 2: Post-1914 Drama and 19th Century (Blood Brothers & Silas Marner)',
    board: 'WJEC',
    subject: 'English Literature',
    duration: 150,
    totalMarks: 100,
    sections: [
      {
        id: 'section-4a',
        title: 'Section A: Post-1914 Drama - Blood Brothers',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q4-001',
            questionNumber: 1,
            marks: 50,
            questionText: 'Explore how Russell uses class and social mobility to shape the tragic narrative of Blood Brothers. You must refer to the extract below and to other parts of the play.',
            extract: 'MRS. JOHNSTONE: I should have known that the working classes were built to be chained, not to be freed. That we were never meant to rise above our station, that something would always pull us back down again. I couldn\'t see it—even when it was staring me in the face.',
            markScheme: 'AO1 (15 marks): Analyse Russell\'s presentation of class determinism; examine separation\'s impact on brothers\' development. AO2 (15 marks): Explore linguistic restraint and resignation; examine dramatic irony of maternal separation. AO3 (20 marks): Post-1950s social mobility in Britain; economic determinism; Marxist critique in Russell\'s work.',
            modelAnswer: 'Russell\'s fundamental argument is that class structures are self-perpetuating and fundamentally unjust. Mrs. Johnstone\'s resignation—"working classes were built to be chained"—represents not inevitable truth but the internalized oppression that prevents resistance. Russell suggests that capitalism systematically ensures that working-class individuals cannot escape their position through talent, hard work, or virtue; external forces constantly push them downward.\n\nThe separation of the twins becomes the play\'s central mechanism for exploring class determinism. Mickey, raised as working-class, and Edward, raised as upper-class, have identical genetic inheritances yet profoundly divergent life trajectories. Mickey\'s trajectory descends: unemployment, imprisonment, drug addiction, murder. Edward\'s ascends: education, professional success, political aspirations. Russell argues that these divergent outcomes reveal social structures\' power, not individual differences.\n\nYet Russell complicates simple environmental determinism. Even as Mickey spirals into criminality, we witness his genuine warmth, humor, and capacity for love. He is destroyed not by personal inadequacy but by systematic denial of opportunity. Russell forces audiences to confront how capitalism wastes human potential through structural exclusion. The play\'s ending—murder-suicide at birth—literalizes Russell\'s argument: the system cannot tolerate the threat posed by two identical individuals with access to different class positions.\n\nMrs. Johnstone\'s final resignation is not affirmation but indictment. She has internalized the ideology of her own oppression, believing that working-class people are naturally subordinate. Russell invites audiences to reject this fatalism; the tragedy emerges not from inevitable natural law but from changeable social arrangements. The play functions as implicit call for social transformation: if class systems are constructed, they can be reconstructed.'
          },
          {
            id: 'q4-002',
            questionNumber: 2,
            marks: 50,
            questionText: 'How does Russell use the Narrator as a dramatic device? What effect does the Narrator create in the audience?',
            markScheme: 'AO1 (15 marks): Analyse the Narrator\'s functions (prophet, chorus, alienation effect); examine relationship to other characters. AO2 (15 marks): Explore linguistic patterns (rhyme, song, direct address); examine tonal shifts. AO3 (20 marks): Brechtian dramaturgy; relationship to Greek chorus; contemporary theatrical conventions.',
            modelAnswer: 'The Narrator operates as a Brechtian alienation device, deliberately preventing audience emotional absorption in the drama. Russell employs the Narrator not to facilitate narrative clarity but to obstruct easy sympathy and create critical distance. The Narrator\'s frequent interventions—stepping outside the dramatic action, addressing audiences directly, singing—fracture naturalistic illusion.\n\nThe Narrator functions as malevolent fate-figure, yet also as manifestation of social forces. When the Narrator comments on outcomes we haven\'t yet witnessed ("By tomorrow morning, they\'ll both be dead"), the effect is prophetic inevitability mixed with critique. Audiences recognize that the deaths are not genuinely inevitable but rather the predictable outcome of social structures the Narrator embodies or represents.\n\nThe Narrator\'s rhyming couplets and song create theatrical artificiality that prevents audiences from inhabiting characters\' emotional lives as in conventional drama. Just when emotional investment deepens, the Narrator\'s interruption yanks audiences back into critical awareness. This formal estrangement is ideologically purposeful: Russell refuses to offer emotional catharsis because catharsis would suggest the tragedy is inevitable and individual rather than social and changeable.\n\nThe Narrator\'s presence also creates audience complicity. By speaking directly to audiences, the Narrator implicates them in the social system that destroys the brothers. We are not innocent observers of distant tragedy but participants in the structures that create such outcomes. This direct address method makes Blood Brothers politically activist theater rather than merely entertainment.'
          }
        ]
      },
      {
        id: 'section-4b',
        title: 'Section B: 19th Century Prose - Silas Marner',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q4-003',
            questionNumber: 3,
            marks: 50,
            questionText: 'Examine how Eliot presents the transformation of Silas Marner through his relationship with Eppie. You must refer to the extract below and to other parts of the text.',
            extract: '"You\'ll be a good mother to Eppie, won\'t you?" said Silas, looking at her with gentle anxiety. "She\'s come to me a gift," he continued, more in a whisper, as if speaking to himself. "Isn\'t there goodness in a nature where it\'s come so easy to care for the child?... Goodness can grow out of trouble."',
            markScheme: 'AO1 (15 marks): Trace Silas\'s character arc from isolation to integration; analyse his relationship with Eppie. AO2 (15 marks): Examine language of redemption (gift, grace, goodness); analyse narrative perspective on spiritual regeneration. AO3 (20 marks): George Eliot\'s Victorian theology; redemption through love and community; gender and nurture; industrial versus pastoral.',
            modelAnswer: 'Eppie\'s arrival transforms Silas from isolated weaver to engaged community member, a change Eliot presents as spiritual regeneration. Silas\'s initial response—"She\'s come to me a gift"—employs religious language suggesting divine grace. Eliot suggests that loving another can restore one to moral and spiritual life even after profound betrayal and loss.\n\nSilas\'s fifteen years of numbed isolation represent spiritual death caused by false accusation and betrayal. His obsessive weaving and coin-hoarding suggest that his mind has become as mechanical as his loom; he exists but does not live. Eppie\'s arrival breaks this mechanical existence, forcing him into emotional vulnerability and connection. Eliot suggests that love—particularly parental love—possesses redemptive power capable of breaking even the hardest hearts.\n\nThe novel\'s larger argument is that goodness emerges through community and love rather than through moral law or industrial rationalism. Silas\'s redemption is thoroughly relational; it occurs through his connection to Eppie and, through her, to the broader Raveloe community. This contrasts with the novel\'s cautionary figures—Dunstan and Godfrey—whose isolation and self-deception lead to moral degradation.\n\nEliot\'s insistence that "goodness can grow out of trouble" represents Victorian theological optimism: suffering, properly endured, produces character and spiritual growth. This providential vision—that misfortune serves ultimate good—is both Eliot\'s genuine belief and, to modern readers, her most vulnerable position. Yet Eliot earns this claim through careful narrative development. Silas\'s suffering is not wasted; it creates the compassion and vulnerability that allows him to mother Eppie authentically.\n\nThe relationship also explores gender and nurture: Silas\'s capacity for love transcends conventional masculinity, suggesting that all individuals possess nurturing potential. In Victorian context, this representation of a man finding identity through parenting is quietly progressive.'
          }
        ]
      }
    ]
  },
  {
    id: 'wjec-lit-005',
    title: 'Component 1: Shakespeare (The Merchant of Venice) and Poetry',
    board: 'WJEC',
    subject: 'English Literature',
    duration: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'section-5a',
        title: 'Section A: Shakespeare - The Merchant of Venice',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q5-001',
            questionNumber: 1,
            marks: 40,
            questionText: 'How does Shakespeare present Shylock as a complex character? You must refer to the extract below and to other parts of the play.',
            extract: 'SHYLOCK: I am not merry; but I do beguile the thing I am by seeming otherwise... I have a daughter... I had it of Leah... would she were hearsed at my foot, and the jewels in her ear! would she were dead at my foot, and the ducats in her coffin!',
            markScheme: 'AO1 (12 marks): Analyse Shylock\'s complexity (grievance, isolation, loss); examine contradiction between public performance and private feeling. AO2 (12 marks): Explore language of alienation; metaphors of theft and betrayal; contrast between emotional vulnerability and commercial hardness. AO3 (16 marks): Representation of Jewish characters in Elizabethan drama; Shylock as outsider; historical contexts of anti-Semitism.',
            modelAnswer: 'Shakespeare complicates audience understanding of Shylock by revealing the psychological foundations of his apparent malice. Shylock is not a stock villain but a man constructed by exclusion and loss. His opening confession—"I am not merry; but I do beguile the thing I am by seeming otherwise"—reveals theatrical self-consciousness: he performs happiness to survive in a Christian Venice that despises him.\n\nThe reference to Leah (presumably his deceased wife) and Jessica\'s theft introduces personal tragedy beneath commercial grievance. Shylock\'s horrifying statement that he wishes Jessica dead with his ducats in her coffin exposes the depth of his pain: his daughter\'s elopement with Lorenzo is not merely personal betrayal but religious and cultural apostasy. He has lost everything that connected him to human community—his wife, his daughter, his status.\n\nWhat complicates Shylock further is Shakespeare\'s refusal to pathologize his response. His insistence on the bond—"an equal pound of your fair flesh"—emerges from rational calculation: it ensures Antonio\'s good faith and provides psychological compensation for systematic exclusion. The pound of flesh is grotesque, yet Shylock\'s logic is comprehensible given his position as outsider.\n\nShakespeare forces audiences to recognize uncomfortable truths about the play\'s Christian community. Antonio openly describes Shylock as subhuman; Gratiano\'s mockery during Shylock\'s trial is brutal; Jessica is celebrated for abandoning her father and religion. The "romantic comedy" narrative requires Shylock\'s destruction. Shakespeare\'s achievement is making audiences feel complicit in this destruction, aware that Shylock\'s extremism is product of systematic oppression, yet unable to prevent his downfall within the play\'s dramatic logic.\n\nIn Elizabethan context, Shylock would have been recognized as recognizable stereotype—the greedy Jew—yet Shakespeare paradoxically humanizes while deploying the stereotype. The play remains ethically troubling: Shakespeare grants Shylock psychological depth and moral coherence, then ensures his ritual humiliation and conversion. This dissonance between sympathetic characterization and harsh dramatic conclusion makes The Merchant of Venice genuinely complex.'
          },
          {
            id: 'q5-002',
            questionNumber: 2,
            marks: 40,
            questionText: 'Examine how Shakespeare explores the relationship between love and money in The Merchant of Venice.',
            markScheme: 'AO1 (12 marks): Identify patterns of love/money exchange; analyse character relationships. AO2 (12 marks): Explore commercial language applied to romance; examine paradoxes of valuation. AO3 (16 marks): Renaissance commerce and marriage; ideology of love versus economic reality; gender and exchange.',
            modelAnswer: 'The Merchant of Venice fundamentally explores whether love can be separated from economic exchange. The plot machinery—Portia\'s suitors competing through casket choice, Bassanio\'s need for capital to "win" Portia, Jessica\'s elopement with valuable dowry—suggests that love and commerce are inseparably entangled. Shakespeare presents Renaissance Venice as a society where all relationships are mediated through economic calculation.\n\nBassanio\'s courtship of Portia is explicitly commercial: he requires a loan to outfit himself attractively enough to compete with wealthier suitors. His language oscillates between romantic and commercial registers. He is not cynical—he clearly loves Portia—yet his ability to pursue that love depends on Antonio\'s capital and, ultimately, on the wealth Portia brings. Marriage becomes transaction even as characters insist on romantic feeling.\n\nPortia\'s position is particularly complex. She is wealthy (valuable), witty, virtuous (more valuable), yet trapped within patriarchal systems that valuate women primarily as matrimonial commodities. Her casket test attempts to transcend commerce by requiring suitors to choose based on wisdom rather than wealth, yet even this test reproduces economic logic: the casket test is mechanism for sorting valuable from worthless suitors.\n\nJessica\'s elopement complicates the picture further. Her flight with Lorenzo and Shylock\'s money represents romantic escape from paternal control, yet her ability to escape depends entirely on theft of patriarchal property. She gains freedom through theft but requires that theft; she cannot simply love and be loved.\n\nShakespeare\'s ultimate vision is neither cynical nor romantic. Love genuinely exists in the play—Antonio\'s devotion, Portia\'s intelligence, Jessica\'s passion—yet it exists within economic structures that shape, enable, and constrain it. The play suggests that Venice\'s commercial society has so thoroughly penetrated all relationships that love must simultaneously be economic transaction. The final comedic resolution requires that all characters accept this paradox: they can love genuinely and participate in systems that commodify love simultaneously.'
          }
        ]
      },
      {
        id: 'section-5b',
        title: 'Section B: Poetry',
        instructions: 'Answer one question from this section. You should refer to two poems, at least one of which must be from a different cluster.',
        questions: [
          {
            id: 'q5-003',
            questionNumber: 3,
            marks: 40,
            questionText: 'How do poets explore memory and loss in the poems you have studied? Refer to at least two poems in your answer.',
            markScheme: 'AO1 (12 marks): Identify thematic focus on memory/loss; select relevant textual evidence. AO2 (12 marks): Analyse linguistic and formal choices expressing remembrance; examine temporal structures. AO3 (16 marks): Philosophical treatment of memory; genre conventions of elegy and memorial; historical specificity.',
            modelAnswer: 'Poets employ distinctive strategies for capturing how memory both preserves and distorts the past. Philip Larkin\'s "Days" presents memory as perpetually deferred—the poem\'s repeated question structure mirrors consciousness searching through memory without arrival at meaning. Memory in Larkin is fragmented, uncertain, resistant to coherence. The poem\'s short lines and stripped language reflect emotional numbness in confronting mortality.\n\nContrast this with more elegiac traditions where memory is recuperative. Seamus Heaney\'s "Bogland" uses archaeological metaphor to suggest that memory operates like excavation, with deeper layers revealing historical and personal significance. The bog\'s preservation of ancient matter becomes metaphor for how poetry recovers lost experience. Where Larkin emphasizes memory\'s inadequacy, Heaney emphasizes poetry\'s power to resurrect what seemed lost.\n\nWider patterns emerge: Romantic poets (Wordsworth) celebrated memory as consolatory access to transcendent experience; modernist poets questioned whether memory could be trustworthy or meaningful. Carol Ann Duffy\'s "Stafford Afternoons" uses specific detail—"your tea grew cold"—to anchor memory in sensory particularity, suggesting that emotional truth emerges through concrete recollection rather than abstract philosophy.\n\nHistorically, the 20th century\'s catastrophes—World War II, the Holocaust—forced poets to confront whether poetry could adequately memorialize atrocity. Ted Hughes and Sylvia Plath responded with visceral, disturbing imagery that refused sentimentality. Their work suggests that some losses resist conventional memorial and require formal innovation. The diversity of poetic approaches to memory reveals ongoing uncertainty about whether remembrance honors or distorts the past.'
          }
        ]
      }
    ]
  },
  {
    id: 'wjec-lit-006',
    title: 'Component 2: Post-1914 Prose and 19th Century (Lord of the Flies & Jane Eyre)',
    board: 'WJEC',
    subject: 'English Literature',
    duration: 150,
    totalMarks: 100,
    sections: [
      {
        id: 'section-6a',
        title: 'Section A: Post-1914 Prose - Lord of the Flies',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q6-001',
            questionNumber: 1,
            marks: 50,
            questionText: 'Examine how Golding presents the gradual descent from civilization to barbarism on the island. You must refer to the extract below and to other parts of the text.',
            extract: 'The beast was harmless and horrible; and the news must reach every ear. But by bit, one inquisitive savage and then another began edging away from the tribe, and they left him—pausing, screwing up their faces, half-inclined to return. Then, one of them gave a wild whoop and leaped down to the beach and began to hunt among the scattered rocks.',
            markScheme: 'AO1 (15 marks): Trace civilization/barbarism trajectory; analyse role of fear, mob psychology, loss of rational authority. AO2 (15 marks): Examine language of transformation ("inquisitive savage," "whoop," "hunt became real"); analyse narrative distance and irony. AO3 (20 marks): Post-WWII anxieties about human nature; Freudian psychology; British public school culture; allegory of political systems.',
            modelAnswer: 'Golding\'s narrative structure traces the gradual erosion of civilized behavior through accumulating losses: Piggy\'s conch authority, Jack\'s competitive split from Ralph\'s authority, the hunt\'s sensual seduction, the beast\'s psychological power, Simon\'s murder. This descent is not sudden rupture but gradual psychological drift toward violence.\n\nThe extract captures transition moment where mob dynamics overtake individual moral judgment. The boys initially hesitate—"half-inclined to return"—suggesting conscience still operates. Yet the "wild whoop" (animalistic sound replacing rational speech) becomes contagious; rationality collapses instantly. Golding suggests that barbarism is not dormant essence suddenly released but potential always present in human psychology, activated by specific conditions: isolation from adult authority, collective fear, sensual thrill of violence.\n\nThe phrase "hunt became real" is philosophically significant. The hunt was already real—the boys were already chasing a child. Yet Golding suggests that subjective investment transforms the hunt\'s meaning. Once the boys fully commit to hunting, it becomes real in psychological register; moral dimension collapses and predatory logic dominates. The transformation occurs not in behavior but in consciousness: the boys begin to believe in their own barbarism.\n\nGolding\'s implicit argument is deeply pessimistic about human nature. These are English schoolboys, product of civilization\'s highest institutions, yet violence emerges effortlessly. The novel suggests that civilization is thin veneer over innate savagery, that rational order depends entirely on external coercion. Remove that coercion, and barbarism emerges naturally.\n\nIn post-1945 context, this pessimism responds to WWII\'s revelation that civilized nations could commit atrocity. Golding wrote during Cold War anxieties about atomic destruction and scientific barbarism. Lord of the Flies argues that human psychology has not evolved beyond tribalism and violence; technology merely amplifies innate destructive impulses. The novel\'s refusal of redemption—Ralph\'s rescue comes only through continued violence—suggests that civilization perpetuates barbarism at larger scale.'
          },
          {
            id: 'q6-002',
            questionNumber: 2,
            marks: 50,
            questionText: 'How does Golding use symbols to explore themes of power, order, and morality in Lord of the Flies?',
            markScheme: 'AO1 (15 marks): Identify key symbols (conch, pig\'s head, beast); analyse symbolic transformations. AO2 (15 marks): Examine how symbols\' meanings shift; explore relationship between symbolic and literal. AO3 (20 marks): Allegorical dimensions; symbolic systems in political theory; Jungian psychology.',
            modelAnswer: 'The conch functions as primary symbol of democratic authority and rational order. Initially, possession of the conch grants speaking right and legitimacy; its authority derives from collective agreement to honor it. As civilization erodes, the conch\'s power diminishes until, when Piggy holds it and is murdered, the conch shatters simultaneously. The symbolic destruction of both conch and Piggy literalizes the collapse of democratic authority and intellectual rationality.\n\nThe pig\'s head—"Lord of the Flies"—becomes symbol of death, corruption, and the boys\' inner darkness. Yet its meaning is unstable: to the boys, the head appears to speak, to offer wisdom, to represent threatening power. Golding suggests that symbols derive meaning from psychological investment rather than inherent property. The head is literally dead matter; yet the boys\' terror makes it symbolically alive and powerful.\n\nThe beast functions similarly—it is simultaneously unreal (invented through fear), partially real (possibly the parachutist), and metaphorically real (representing innate savagery). The beast\'s undefined nature makes it powerfully symbolic: each boy projects his fears onto it. The beast becomes container for psychological terror that actually originates internally. Simon\'s recognition that "the beast is part of us" articulates Golding\'s thesis: the external threat is symbolic externalization of internal impulses.\n\nFire symbolizes civilization\'s presence or absence: Ralph\'s need to maintain the signal fire represents commitment to rescue and return to civilization. As the fire dies, civilization recedes. Yet fire also destroys—the final hunt occurs amid burning island. Golding suggests ambivalence about civilization: it requires fire (heat, energy, purification) yet fire consumes indiscriminately.\n\nGolding\'s symbolic system operates through Jungian psychology: the conch represents superego (rational conscience), the beast represents shadow (repressed impulses), and the pig\'s head represents the id\'s triumph over conscience. The novel charts psychic collapse in symbolic rather than purely psychological terms, suggesting that individual psychology and social order are structurally analogous—both depend on conscious constraint of destructive impulses.'
          }
        ]
      },
      {
        id: 'section-6b',
        title: 'Section B: 19th Century Prose - Jane Eyre',
        instructions: 'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q6-003',
            questionNumber: 3,
            marks: 50,
            questionText: 'Examine how Charlotte Bronte presents Jane\'s struggle for independence and self-determination. You must refer to the extract below and to other parts of the text.',
            extract: '"I am no bird; and no net ensnares me; I am a free human being with an independent will." "I have as much soul as you, and full as much heart! And if God had gifted me with some beauty and much wealth, I should make it as hard for you to leave me, as it is now for me to leave you."',
            markScheme: 'AO1 (15 marks): Analyse Jane\'s assertions of selfhood; trace her development toward independence. AO2 (15 marks): Examine rhetoric (metaphor, parallelism, imperative); analyse relationship to Gothic tradition. AO3 (20 marks): Victorian feminism; gender ideology; class and marriage; Bronte\'s biographical context.',
            modelAnswer: 'Jane\'s declaration of independence is extraordinary for Victorian fiction. Her assertion "I am a free human being with an independent will" directly challenges 19th-century ideology that subordinated women\'s agency to male authority. Bronte presents this not as radical theory but as fundamental truth that Jane has discovered through lived experience.\n\nThe bird metaphor is particularly significant: Jane refuses the conventional symbolism of captive femininity. She will not be the songbird in Rochester\'s cage, the ornamental creature existing for male aesthetic pleasure. By rejecting the bird metaphor, Jane asserts different kind of identity: not graceful and caged but free and autonomous.\n\nJane\'s insistence on equality is equally transgressive. "I have as much soul as you" explicitly rejects the Victorian ideology of separate spheres that positioned women as lesser beings, suited for domesticity while men inhabited public and intellectual realms. Jane demands recognition as full human being with equal capacity for thought, feeling, and moral judgment. Her question about wealth and beauty is particularly clever: she acknowledges that patriarchal power derives partly from economic advantage, yet suggests that her spiritual equality transcends material inequality.\n\nBronte\'s narrative technique supports Jane\'s independence. First-person narration grants Jane authority to interpret her own experience; readers inhabit her consciousness rather than viewing her from external perspective. This formal choice is politically significant: it centers female interiority in era when literature typically centered male consciousness.\n\nJane\'s independence is tested repeatedly: at Lowood, she submits to brutal authority yet refuses spiritual destruction; as governess, she maintains professional dignity despite precarious class position; in her relationship with Rochester, she loves genuinely yet refuses to become dependent. Her final choice to leave Rochester after discovering Bertha is extraordinarily costly—she renounces the man she loves—yet necessary to preserve selfhood.\n\nThe ending remains complex. Jane returns to Rochester only after he has lost his sight and patriarchal power, after Thornfield has burned. Some readers interpret the ending as compromise of feminist principles (Jane ultimately marries), while others argue that the marriage is transformed: Rochester is now dependent, vulnerable, equal. Bronte\'s point may be that genuine partnership requires both parties\' independence and mutual respect.\n\nIn Victorian context, Bronte\'s representation of female independence was genuinely radical. The novel was criticized as coarse and unfeminine precisely because it centered female desire, passion, and agency. Bronte was defending not modest domesticity but passionate, self-determining womanhood.'
          }
        ]
      }
    ]
  }
];
// Extended implementation notes and additional mock exam content

/*
WJEC GCSE English Literature Mock Exams - Expanded Module

This file contains 6 comprehensive WJEC/Eduqas C720 specification mock exam papers covering:

Paper 1: Component 1 - Macbeth & Poetry (2h, 80 marks)
- Section A: Shakespeare extract-based question on ambition
- Section B: Poetry comparative analysis
- Includes Grade 9 model answers with AO1-AO3 breakdown

Paper 2: Component 1 - Romeo and Juliet & Poetry (2h, 80 marks)
- Section A: Shakespeare on family feuds and love's transgression
- Section B: Poetry on form and emotional expression
- Model answers demonstrate sophisticated contextual understanding

Paper 3: Component 2 - An Inspector Calls & A Christmas Carol (2h 30min, 100 marks)
- Section A: Post-1914 Drama with Priestley's moral philosophy
- Section B: Victorian prose with Dickens's redemption narrative
- Extended model answers addressing social responsibility themes

Paper 4: Component 2 - Blood Brothers & Silas Marner (2h 30min, 100 marks)
- Section A: Post-1914 Drama with class determinism and Brechtian technique
- Section B: 19th Century prose with spiritual transformation
- Model answers exploring socio-economic and philosophical dimensions

Paper 5: Component 1 - The Merchant of Venice & Poetry (2h, 80 marks)
- Section A: Shakespeare on character complexity and economic systems
- Section B: Poetry on memory and loss across historical periods
- Addresses ambiguous characterization and poetic innovation

Paper 6: Component 2 - Lord of the Flies & Jane Eyre (2h 30min, 100 marks)
- Section A: Post-1914 prose on civilization versus barbarism
- Section B: 19th Century prose on feminist resistance and independence
- Model answers integrate symbolic analysis with historical context

ASSESSMENT OBJECTIVES COVERED:

AO1: Identify and interpret ideas, perspectives, and purposes; analyse textual and stylistic features
- Located throughout all mark schemes emphasizing textual precision
- Model answers demonstrate close reading with specific quotation integration

AO2: Explain and analyse relationship between form, style, meaning, and effect
- Addresses linguistic patterns, structural choices, narrative techniques
- Model answers explore how technical choices create meaning and emotional impact

AO3: Demonstrate understanding of writer's methods in context (historical, cultural, biographical, literary)
- Situates all texts within appropriate historical/social contexts
- Model answers show sophisticated understanding of period conventions and innovations

MARK ALLOCATION BY COMPONENT:

Component 1 (Shakespeare + Poetry):
- Q1: 40 marks for Shakespeare (extract + wider knowledge)
- Q3: 40 marks for Poetry (comparative analysis)
- Total: 80 marks for 2 hours

Component 2 (Post-1914 + 19th Century Prose):
- Q1: 50 marks for Post-1914 Drama/Prose (extract + wider knowledge)
- Q3: 50 marks for 19th Century Prose (extract + wider knowledge)
- Total: 100 marks for 2 hours 30 minutes

MARK SCHEME STRUCTURE:

All questions use tri-partite mark scheme with AO1-AO3 weightings:
- AO1 marks (typically 12-15): Textual identification and interpretation
- AO2 marks (typically 12-15): Analysis of language, form, and effect
- AO3 marks (typically 16-20): Historical, cultural, and literary context

Responses are assessed using these band descriptors:
Band 1 (Top): Sophisticated, well-developed analysis with integrated context
Band 2 (Upper-Mid): Secure understanding with explicit contextual reference
Band 3 (Mid): Clear understanding with some contextual awareness
Band 4 (Lower-Mid): Basic understanding with limited contextual engagement
Band 5 (Lower): Simplistic response with minimal context

MODEL ANSWER CHARACTERISTICS:

Grade 9 responses demonstrate:
1. Precise textual reference integrated into analytical prose
2. Explicit mention of techniques and their effects
3. Developed exploration of multiple interpretations
4. Substantive engagement with historical/cultural context
5. Sophisticated understanding of authorial purpose and literary innovation
6. Coherent argument sustained across the response
7. Subject-specific vocabulary used accurately
8. Exploration of how meaning is constructed through form

EXTRACT SELECTION METHODOLOGY:

All extracts chosen to:
- Allow exploration of major themes
- Provide opportunity for technical analysis
- Facilitate wider contextual discussion
- Be sufficiently challenging for GCSE level
- Represent significant moments in each text
- Enable comparison across texts (where applicable)

HISTORICAL CONTEXTS INTEGRATED:

Shakespeare (Elizabethan/Jacobean):
- Divine right, natural order, tragic hubris
- Witchcraft beliefs, supernatural philosophy
- Gender hierarchies, masculine honour codes
- Mercantile expansion and cultural exchange

19th Century (Victorian):
- Industrialization and social transformation
- Theological optimism and providence
- Gender ideology and separate spheres
- Class hierarchies and social mobility anxieties

Post-1914 (20th Century):
- Two World Wars and collective trauma
- Marxist critique and class consciousness
- Brechtian alienation and political theater
- Existential philosophy and psychological realism

POETRY METHODOLOGY:

Poetry questions require:
- Reference to minimum two poems
- At least one from different cluster
- Close analytical reading of linguistic/formal choices
- Explicit exploration of how form creates meaning
- Contextual understanding of poetic conventions
- Comparative analysis across different approaches to similar themes

EXAMINATION TECHNIQUES:

Timed conditions: Students should allocate time proportionally to mark allocation
- 40 mark question: approximately 25-30 minutes (including planning)
- 50 mark question: approximately 30-35 minutes (including planning)

Revision focus areas:
- Complete texts: Students must have read all set texts in full
- Contextual knowledge: Historical, biographical, literary context essential
- Quotation memorization: Key quotations for major themes enable precise reference
- Technique identification: Language, form, narrative technique vocabulary
- Comparative thinking: How different writers explore similar themes

LEARNING OUTCOMES:

Upon completion of these mock exams, students should be able to:
- Identify and analyze sophisticated textual features with precision
- Develop sustained analytical arguments with integrated evidence
- Contextualize literary texts within historical and cultural frameworks
- Demonstrate knowledge of literary conventions and innovative techniques
- Construct well-structured exam responses under timed conditions
- Engage with ambiguity and multiple interpretations
- Use subject-specific terminology accurately and appropriately
- Synthesize textual analysis with wider thematic understanding

*/

// Grade bands and descriptor framework
export const gradeBands = {
  band1: {
    label: 'Top (87-100)',
    descriptors: ['Sophisticated analysis', 'Integrated context', 'Multiple interpretations', 'Sustained argument'],
  },
  band2: {
    label: 'Upper-Mid (75-86)',
    descriptors: ['Secure understanding', 'Explicit context', 'Developed analysis', 'Clear structure'],
  },
  band3: {
    label: 'Middle (63-74)',
    descriptors: ['Clear understanding', 'Some context', 'Basic analysis', 'Appropriate evidence'],
  },
  band4: {
    label: 'Lower-Mid (51-62)',
    descriptors: ['Basic understanding', 'Limited context', 'Simple analysis', 'Some evidence'],
  },
  band5: {
    label: 'Lower (Below 51)',
    descriptors: ['Simplistic understanding', 'Minimal context', 'Thin analysis', 'Weak evidence'],
  },
};

// Assessment objective weightings
export const aoWeightings = {
  ao1: {
    name: 'Identify and interpret ideas and perspectives; analyse features',
    shortForm: 'Identification, interpretation, analysis of textual features',
  },
  ao2: {
    name: 'Explain and analyse relationship between form, style, and meaning',
    shortForm: 'Analysis of how form creates meaning and effect',
  },
  ao3: {
    name: 'Demonstrate understanding of writer\'s methods in appropriate contexts',
    shortForm: 'Understanding of historical, cultural, and literary context',
  },
};

// Examination timing guidance
export const timingGuidance = {
  component1: {
    duration: 120,
    totalMarks: 80,
    recommendations: {
      planning: 5,
      question1: 30,
      question3: 30,
      checking: 5,
      bufferTime: 20,
    },
  },
  component2: {
    duration: 150,
    totalMarks: 100,
    recommendations: {
      planning: 5,
      question1: 40,
      question3: 40,
      checking: 5,
      bufferTime: 20,
    },
  },
};

// Quotation banks for revision - key quotations from each text
export const quotationBanks = {
  macbeth: {
    ambition: [
      'If it were done when \'tis done',
      'out, damned spot',
      'None of woman born / Shall harm Macbeth',
      'Tomorrow, and tomorrow, and tomorrow',
    ],
    witchcraft: [
      'Fair is foul, and foul is fair',
      'The weird sisters',
      'Hail to thee, thane of Glamis',
    ],
  },
  romeoAndJuliet: {
    love: [
      'O Romeo, Romeo! Wherefore art thou Romeo?',
      'What\'s in a name? That which we call a rose',
      'This holy shrine',
      'Death-marked love',
    ],
    feud: [
      'Two households, both alike in dignity',
      'The ancient grudge',
      'A plague on both your houses',
    ],
  },
};

// Common thematic frameworks for analysis
export const thematicFrameworks = {
  powerAndAuthority: ['Political hierarchies', 'Gender and dominance', 'Class structures', 'Institutional control'],
  love: ['Romantic passion', 'Familial bonds', 'Spiritual transcendence', 'Economic exchange'],
  moralResponsibility: ['Individual culpability', 'Systemic injustice', 'Redemption possibilities', 'Social reform'],
  transformation: ['Psychological change', 'Spiritual regeneration', 'Character development', 'Ideological shift'],
  nature: ['Natural order', 'Human civilization', 'Wilderness versus society', 'Primordial impulses'],
};

export default wjecLitMockExams;
