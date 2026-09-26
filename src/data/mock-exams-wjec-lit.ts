// @ts-nocheck

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * Six extracts from public-domain works were printed as the authors' words
 * and were not. None carried a label; each was attributed only by its
 * question. The comment that stood here since the FC20 audit of 28 April 2026
 * called the Macbeth and A Christmas Carol extracts "substantially accurate",
 * which is what let them stand:
 *   - Macbeth 1.7: the first twelve lines of the soliloquy with "If th'
 *     assassination" to "surcease success" cut out silently and other words
 *     changed, so neither sentence was Shakespeare's;
 *   - Romeo and Juliet 3.1: Mercutio's "dost thou make us minstrels?" given
 *     to Tybalt, and Benvolio's "I pray thee, good Mercutio, let's retire"
 *     rewritten and given to Romeo. The model answer built its case on
 *     "Romeo attempts peace (\"let's retire\")", which Romeo never says;
 *   - A Christmas Carol, Stave 4: Scrooge's question reworded and followed
 *     by a sentence and a reply from the Spirit ("Who can say?") that are
 *     not in the text. This Spirit never speaks. The model answer misquoted
 *     the question again ("Are these shadows of things that Will be");
 *   - Silas Marner: none of its four sentences is in the text ("She's come
 *     to me a gift", "Goodness can grow out of trouble"), and the model
 *     answer quoted both as Eliot's;
 *   - The Merchant of Venice: opened with "I am not merry; but I do beguile
 *     the thing I am by seeming otherwise", which is Desdemona's, in Othello
 *     2.1, not Shylock's, then spliced fragments of 3.1 and 4.1, with the
 *     3.1 wish that his daughter were dead at his foot reworded. The model
 *     answer called it Shylock's "opening confession";
 *   - Jane Eyre, Chapter 23: two moments of the chapter in reverse order,
 *     repunctuated, and one sentence reworded ("I should make it" for "I
 *     should have made it").
 *
 * Each is replaced by a genuine passage from the same scene, stave or
 * chapter, on the same subject, cut by script and never retyped: the plays
 * with playPassage() and the prose with passage() (src/lib/study-guides/
 * passage.ts) from the held editions in src/data/full-texts, and Jane Eyre
 * with passage() from Project Gutenberg #1260, which is not held (the
 * checker's cached copy, split at its CHAPTER headings and blank lines).
 * Each question's extractSource names the edition. In the two passages with
 * more than one speaker, each speech starts a new line: playPassage() joins
 * speeches with the same " / " as verse lines, and the checker, like a
 * reader, finds a speaker's name only at the start of a line, so
 * "villain. / ROMEO: Tybalt" was measured as one sentence containing the
 * word ROMEO. Verse lines keep the " / " mark. To re-cut one, the section
 * and the first and last phrases are:
 *   - Macbeth, acti-scenevii, "If it were done when" to "And falls on th"
 *     (the whole soliloquy; a speech is one paragraph in the edition);
 *   - Romeo and Juliet, actiii-scenei, "Romeo, the love I bear thee" to
 *     "O calm, dishonourable, vile submission". Tybalt's challenge and
 *     Romeo's refusal to fight carry the question about the families better
 *     than the scene's opening lines would, and are what the model answer
 *     was trying to describe;
 *   - A Christmas Carol, section-4, "Before I draw nearer to that stone" to
 *     "read upon the stone of the neglected grave";
 *   - Silas Marner, section-16, "that 'ud ha' been hard" to "there's
 *     dealings with us" (curly apostrophes in the edition). The invented
 *     lines were a paraphrase of this conversation with Dolly Winthrop;
 *   - The Merchant of Venice, actiii-scenei, "Your daughter spent in Genoa"
 *     to "wilderness of monkeys", as prose;
 *   - Jane Eyre, CHAPTER XXIII, "I tell you I must go" to "which I now exert
 *     to leave you".
 * The passages are longer than the invented ones (110 to 327 words by the
 * checker's count, against 40 to 98), because a genuine passage has to run
 * from where the moment begins to where it ends, and the edition's
 * paragraph, or the whole speech, is the smallest unit passage() cuts.
 *
 * Each question now says where its extract comes from, and its mark scheme
 * and model answer were rewritten to the new extract: every quotation in
 * them is in the extract, other parts of the work are described rather than
 * quoted, and the analysis was checked against the words it quotes. Errors
 * in the old answers that did not depend on the extracts went with them:
 * "judgement here" read as divine judgement (Macbeth means this world), a
 * funeral Scrooge never sees and a Christmas dinner with the Cratchits he
 * never has, and American spelling. Four Romeo and Juliet entries in
 * quotationBanks did not match the held edition ("A plague on both your
 * houses", "Death-marked love", "O Romeo, Romeo! Wherefore", and "The
 * ancient grudge", which is Shylock's phrase in The Merchant of Venice; the
 * Prologue has "From ancient grudge") and now do.
 *
 * NOT CHANGED. The An Inspector Calls, Blood Brothers and Lord of the Flies
 * extracts are of works in UK copyright. Their texts are not held, so the
 * checker measures only their length (50 to 86 words each, all far over the
 * house limit for a quotation), and whether they are even the authors'
 * words is not verified. The FC20 audit found the Blood Brothers extract
 * invented: Russell treats the theme in song, not in the prose printed
 * here. Their model answers quote them. They are reported for a decision,
 * not rewritten. The poetry answers q2-003 and q5-003 name poems and quote
 * lines from works in copyright that nothing here can check.
 *
 * The papers are not served: nothing imports wjecLitMockExams, and
 * src/data/teacher-toolkit-index.ts names the file only as a string
 * (checked 27 September 2026). The repository is public, though, and a bank
 * that is wired in later prints what is here.
 */
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
  /** Author, work, place in it and the edition the extract was cut from. */
  extractSource?: string
  bulletPoints?: string[]
  markScheme: string
  modelAnswer?: string
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
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q1-001',
            questionNumber: 1,
            marks: 40,
            questionText:
              'In this extract, from Act 1 Scene 7, Macbeth is alone, weighing whether to murder King Duncan, who is a guest in his castle. Explore how Shakespeare presents the theme of ambition in Macbeth. You must refer to the extract below and to other parts of the play.',
            extract:
              'MACBETH: If it were done when ’tis done, then ’twere well / It were done quickly. If th’ assassination / Could trammel up the consequence, and catch / With his surcease success; that but this blow / Might be the be-all and the end-all—here, / But here, upon this bank and shoal of time, / We’d jump the life to come. But in these cases / We still have judgement here; that we but teach / Bloody instructions, which being taught, return / To plague th’ inventor. This even-handed justice / Commends th’ ingredience of our poison’d chalice / To our own lips. He’s here in double trust: / First, as I am his kinsman and his subject, / Strong both against the deed; then, as his host, / Who should against his murderer shut the door, / Not bear the knife myself. Besides, this Duncan / Hath borne his faculties so meek, hath been / So clear in his great office, that his virtues / Will plead like angels, trumpet-tongued, against / The deep damnation of his taking-off; / And pity, like a naked new-born babe, / Striding the blast, or heaven’s cherubin, hors’d / Upon the sightless couriers of the air, / Shall blow the horrid deed in every eye, / That tears shall drown the wind.—I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o’erleaps itself / And falls on th’ other—',
            extractSource: 'William Shakespeare, Macbeth, Act 1, Scene 7 (Project Gutenberg #1533)',
            markScheme:
              "AO1 (12 marks): Identify and interpret ideas about ambition; analyse the soliloquy's structure, from the wish for a deed without consequences, through the reasons against it, to the admission that only ambition drives him. AO2 (12 marks): Explore how language and form reveal Macbeth's inner conflict: the conditional opening that never names the murder, the images of the poisoned chalice, the pleading angels and the new-born babe, and the horse-riding image of vaulting ambition. AO3 (16 marks): Consider the significance of regicide and broken hospitality for a Jacobean audience; the divine right of kings; how Lady Macbeth's challenge to his manhood overturns his decision later in the scene.",
            modelAnswer:
              'Shakespeare presents ambition as a force Macbeth can see through and still cannot resist. The soliloquy opens with a conditional, "If it were done when \'tis done, then \'twere well / It were done quickly", in which the murder is never named: "it" and "done" hold the deed at arm\'s length, as though Macbeth cannot yet say what he means to do. He wishes the killing could "trammel up the consequence", catching every result in a net, so that one blow would be "the be-all and the end-all". His ambition wants an act without an aftermath.\n\nHis reasoning then turns against him. He would "jump the life to come", gambling his soul in the next world, but admits that "We still have judgement here": the danger he fears most is in this life. Violence teaches "Bloody instructions" that "return / To plague th\' inventor", and the image of "even-handed justice" offering "our poison\'d chalice / To our own lips" makes the murderer drink what he has prepared for another. The image foreshadows the play\'s structure: Macbeth kills to gain the crown and must go on killing, first Banquo and then Macduff\'s wife and children, to keep it.\n\nThe middle of the speech sets out the moral case against the murder. Duncan is "here in double trust": Macbeth is "his kinsman and his subject" and also "his host", who "should against his murderer shut the door, / Not bear the knife myself". The king\'s virtues "Will plead like angels" against "The deep damnation of his taking-off", and the simile of "pity, like a naked new-born babe" gives the most helpless figure imaginable the power to move the whole world to tears. Shakespeare lets Macbeth see the crime with complete clarity.\n\nThe soliloquy ends by naming the only motive left: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself". His intent is a horse he cannot spur on, and ambition is a rider who leaps so eagerly into the saddle that he falls on the other side; the sentence itself breaks off unfinished, as if the fall had already begun. Macbeth recognises his ambition as self-defeating at the moment he is still free to refuse it, which is why the play is a tragedy rather than a story of fate. Later in the same scene he tells Lady Macbeth that they will go no further, and only her taunts about his courage and manhood turn him back.\n\nFor a Jacobean audience, killing a king who was also a guest and a kinsman broke the bonds of loyalty, hospitality and divinely sanctioned order at once, and King James, who had survived the Gunpowder Plot of 1605, would have seen regicide as the gravest of crimes. Shakespeare\'s achievement is to make ambition understandable from the inside while leaving no doubt about its cost.',
          },
          {
            id: 'q1-002',
            questionNumber: 2,
            marks: 40,
            questionText:
              'How does Shakespeare use the witches to explore the theme of fate versus free will in Macbeth?',
            markScheme:
              "AO1 (12 marks): Analyse dramatic techniques (supernatural elements, prophecies, paradox); examine Macbeth's responses. AO2 (12 marks): Explore language patterns; ellipsis and riddles in witches' speech; Macbeth's interpretation. AO3 (16 marks): Historical context of witchcraft beliefs; Renaissance philosophy of predestination; ambiguity in Shakespeare's treatment.",
            modelAnswer:
              'The witches represent the intersection of fate and free will in Macbeth. Their prophecies do not determine action but trigger Macbeth\'s own ambition. The witches never explicitly command him to murder Duncan; instead, their equivocal pronouncements ("Hail to thee, thane of Glamis") awaken his latent desires. Shakespeare\'s genius lies in this ambiguity.\n\nThe paradoxical nature of their prophecies ("None of woman born / Shall harm Macbeth") suggests that fate operates through human interpretation. Macbeth\'s misinterpretation of these riddles leads to his downfall. This structure implies that Macbeth is simultaneously the agent of his own destruction and a victim of circumstance.\n\nIn Jacobean context, this ambiguity reflects contemporary anxieties about witchcraft, demonic influence, and moral responsibility. Shakespeare avoids resolving whether the witches control Macbeth or merely reflect his inner nature, leaving audiences to consider whether humans are masters of their fate.',
          },
        ],
      },
      {
        id: 'section-1b',
        title: 'Section B: Poetry',
        instructions:
          'Answer one question from this section. You should refer to two poems, at least one of which must be from a different cluster.',
        questions: [
          {
            id: 'q1-003',
            questionNumber: 3,
            marks: 40,
            questionText:
              'Compare how poets present the intensity of emotion in the poems you have studied. You should refer to at least two poems.',
            markScheme:
              'AO1 (12 marks): Select relevant poems; identify emotional intensity; analyse language and structural choices. AO2 (12 marks): Compare poetic techniques (imagery, rhythm, tone); explore how form conveys emotion. AO3 (16 marks): Historical context of emotions; genre conventions; thematic development across poems.',
            modelAnswer:
              'Poets deploy distinctive linguistic and structural techniques to convey emotional intensity. In "Ozymandias," Shelley\'s narrative framework creates emotional distance-emotion emerges not from passionate outpouring but from the irony of decay. The volta marked by "Look on my Works, ye Mighty, and despair!" presents emotional intensity through arrogance now rendered pathetic by time. Conversely, in "Porphyria\'s Lover," Browning captures intensity through dramatic monologue, allowing the speaker\'s disturbing passion to emerge through unfiltered syntax.\n\nShelley\'s Petrarchan sonnet structure imposes formal control that paradoxically emphasizes emotional loss. Browning\'s conversational lines and irregular rhythm create psychological realism. Where Shelley contemplates emotion intellectually, Browning inhabits it viscerally.\n\nHistorically, both poems respond to their era\'s interest in psychological states and power dynamics. Shelley interrogates ambition and legacy during revolutionary ferment; Browning explores obsessive love in an age of increasing psychological interest. Both poets use emotional intensity as thematic inquiry.',
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q2-001',
            questionNumber: 1,
            marks: 40,
            questionText:
              'In this extract, from Act 3 Scene 1, Tybalt, a Capulet, challenges Romeo, who has just married Juliet in secret. Examine how Shakespeare presents the relationship between the Montague and Capulet families. You must refer to the extract below and to other parts of the play.',
            extract:
              'TYBALT: Romeo, the love I bear thee can afford / No better term than this: Thou art a villain.\nROMEO: Tybalt, the reason that I have to love thee / Doth much excuse the appertaining rage / To such a greeting. Villain am I none; / Therefore farewell; I see thou know’st me not.\nTYBALT: Boy, this shall not excuse the injuries / That thou hast done me, therefore turn and draw.\nROMEO: I do protest I never injur’d thee, / But love thee better than thou canst devise / Till thou shalt know the reason of my love. / And so good Capulet, which name I tender / As dearly as mine own, be satisfied.\nMERCUTIO: O calm, dishonourable, vile submission! / [Draws.] Alla stoccata carries it away. / Tybalt, you rat-catcher, will you walk?',
            extractSource:
              'William Shakespeare, Romeo and Juliet, Act 3, Scene 1 (Project Gutenberg #1513)',
            markScheme:
              "AO1 (12 marks): Analyse the exchange as a clash between the code of honour and Romeo's attempt at peace; the dramatic irony of Romeo's secret marriage, which makes Tybalt his kinsman. AO2 (12 marks): Examine language choices: Tybalt's formal insult \"villain\" and dismissive \"Boy\", Romeo's repeated \"love\" and his tender use of the name Capulet, Mercutio's scorn for \"submission\"; how the exchange builds tension towards the fight. AO3 (16 marks): Honour, reputation and duelling in Shakespeare's time; how the feud reaches every level of Verona, from the servants' brawl to the Prince's warnings; the reconciliation bought by the lovers' deaths.",
            modelAnswer:
              'Shakespeare presents the feud between the Montagues and Capulets as a code of honour that no one can step out of, even by choice. In this extract Tybalt, a Capulet, tries to provoke a duel: "the love I bear thee can afford / No better term than this: Thou art a villain." The mock-courteous opening turns "love" into its opposite, and "villain", a grave insult in a society built on rank and reputation, is a formal challenge. The "injuries" Tybalt goes on to claim are never named; he needs no more than that Romeo is a Montague who came uninvited to the Capulet feast.\n\nRomeo\'s reply tries to end the quarrel with words. He answers the insult with "the reason that I have to love thee", denies the charge ("Villain am I none") and says farewell rather than draw. The dramatic irony is sharp: the audience knows that Romeo has just married Juliet, so Tybalt is now his kinsman, and "good Capulet, which name I tender / As dearly as mine own" is literally true in a way no one on stage can understand. Tybalt hears only weakness. Calling Romeo "Boy" belittles him, and the command "turn and draw" shows that the feud allows only one answer to an insult.\n\nMercutio, who belongs to neither family, is the one who fights. His outburst "O calm, dishonourable, vile submission" presents peace-making as shameful, and his mocking name for Tybalt, "rat-catcher" (Tybalt shares his name with the cat in the fables of Reynard the Fox), turns a quarrel into sport. The feud infects even those outside it: Mercutio\'s death moments later drives Romeo to kill Tybalt, and Mercutio\'s dying curse falls on both houses alike.\n\nElsewhere the play shows the feud reaching every level of Verona: the servants\' brawl in the opening scene, old Capulet and old Montague calling for their swords, and the Prince\'s warning that any further fighting will cost lives. Romeo and Juliet\'s secret marriage is an attempt to love across the division, and the extract shows why it cannot be made public, since the code of honour reads Romeo\'s peace-making as cowardice. Only the lovers\' deaths bring the two fathers to take each other\'s hands.\n\nFor an Elizabethan audience, a gentleman\'s honour depended on his readiness to defend his name, and duelling was a real and much-condemned practice. Shakespeare presents that code as the true enemy: the families\' relationship is not a quarrel between individuals but a system that turns love into provocation and restraint into dishonour.',
          },
          {
            id: 'q2-002',
            questionNumber: 2,
            marks: 40,
            questionText:
              'How does Shakespeare use religious imagery to develop themes of love and death in Romeo and Juliet?',
            markScheme:
              'AO1 (12 marks): Identify religious references (holy/shrine/saint); trace patterns across play. AO2 (12 marks): Analyse how religious language elevates romantic love; examine oxymoron and paradox. AO3 (16 marks): Reformation context; treatment of physical love in religious society; sacrilege implications.',
            modelAnswer:
              'Shakespeare sacralizes Romeo and Juliet\'s love through persistent religious imagery, presenting romantic passion as spiritual transcendence. In their first meeting, Romeo addresses Juliet as "holy shrine" and describes his lips as "pilgrims"-religious language that elevates their connection to spiritual devotion. This linguistic choice is radical: Shakespeare presents physical attraction through the vocabulary of religious faith.\n\nThe sacred language creates poignant irony given the ultimate tragedy. Their love is described in terms suggesting eternity and salvation, yet it concludes with literal death. The private marriage ceremony lacks religious sanction, suggesting their spiritual union exists outside institutional religion. When Romeo stands before Juliet\'s apparently lifeless body, he drinks poison in a grotesque inversion of communion.\n\nIn Reformation England, this treatment of romantic love as competing with religious devotion would have seemed provocative. Shakespeare presents love as redemptive yet destructive, sacred yet transgressive. The religious imagery emphasizes that Romeo and Juliet\'s bond transcends earthly social structures, yet cannot transcend death.',
          },
        ],
      },
      {
        id: 'section-2b',
        title: 'Section B: Poetry',
        instructions:
          'Answer one question from this section. You should refer to two poems, at least one of which must be from a different cluster.',
        questions: [
          {
            id: 'q2-003',
            questionNumber: 3,
            marks: 40,
            questionText:
              'How do poets use form and structure to explore their subject matter? Refer to at least two poems in your answer.',
            markScheme:
              'AO1 (12 marks): Identify structural features (stanza form, rhyme, length); explain relationship to content. AO2 (12 marks): Analyse how structure creates meaning; compare different poetic forms. AO3 (16 marks): Historical conventions; innovative use of form; genre expectations.',
            modelAnswer:
              "Poetic form is not merely decorative but fundamental to meaning-making. Dylan Thomas's \"Do Not Go Gentle Into That Good Night\" employs a villanelle-a highly restrictive form with repeated refrains-to capture obsessive, cyclical grief. The form's requirement that lines recur mirrors the speaker's psychological loop of exhortation and despair. The villanelle's formal constraints paradoxically create emotional intensity; repetition captures the compulsive nature of grief.\n\nContrast this with deliberate fragmentation in contemporary poets like Carol Ann Duffy. Her \"The Thin Time\" uses short lines and broken syntax to convey emotional rupture. Where Thomas uses formal architecture to contain emotion, Duffy uses structural dissolution to express emotional fragmentation. Thomas's form suggests rigorous control can channel grief; Duffy's form suggests some experiences cannot be formally contained.\n\nBoth approaches demonstrate that form is ideological-the choice of structure reveals the poet's philosophical position toward their subject. Thomas's villanelle insists on the possibility of dignified resistance; Duffy's fragmentation insists on the authenticity of incompleteness. Modernist poets increasingly abandoned traditional forms to match modern consciousness's fragmented nature, yet formalist poets never abandoned the belief that constraint enables expression.",
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q3-001',
            questionNumber: 1,
            marks: 50,
            questionText:
              'Examine how Priestley uses the Inspector as a dramatic device to explore social responsibility in An Inspector Calls. You must refer to the extract below and to other parts of the play.',
            extract:
              "INSPECTOR: But just remember this. One Eva Smith has gone - but there are millions and millions and millions of Eva Smiths and John Smiths still in the world, and as long as there is, and you're not sorry or ashamed of anything you've done, then they have nothing to do but to wait for the end... if you mess with us, the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish.",
            markScheme:
              "AO1 (15 marks): Analyse the Inspector's function (catalyst, moral voice, mysterious figure); trace his impact on each character. AO2 (15 marks): Examine rhetorical techniques (repetition, metaphor of \"fire and blood\"), prophetic tone; dramatic irony given historical context. AO3 (20 marks): Historical context of post-war social reform; Priestley's didactic purpose; the Inspector's ambiguous identity.",
            modelAnswer:
              "The Inspector functions as both dramatic agent and moral conscience, operating simultaneously as investigator and prophet. Priestley's characterization is deliberately ambiguous-the Inspector may be a supernatural force, a communist agitator, or simply a remarkable individual. This ambiguity is central to his dramatic power; audiences cannot dismiss him through conventional categorization.\n\nThrough interrogation, the Inspector progressively reveals each character's complicity in Eva's death, moving from Mrs. Birling's casual dismissal to Mr. Birling's economic rationalization to the younger generation's more intimate betrayals. Yet the Inspector's method transcends mere detective work; he functions as a Brechtian alienation device, forcing audiences to confront uncomfortable truths about culpability and social structures.\n\nThe climactic speech employs repetition (\"millions and millions\") to displace individual guilt onto systemic injustice, then pivots to apocalyptic warning. The metaphor of \"fire and blood and anguish\" carries prophetic weight given the play was written in 1945, after the Holocaust and atomic bombing. Audiences, knowing history's trajectory, recognize the prophecy's accuracy: the world must learn social responsibility or face destruction. Priestley transforms the Inspector from a character within dramatic fiction to a voice addressing contemporary society directly.\n\nThe final revelation-that the Inspector may not be a \"real\" inspector-destabilizes the play's dramatic logic. If he is fabricated, how can his moral insights be dismissed? Priestley suggests that the Inspector's truthfulness transcends his identity; what matters is the moral imperative he articulates. The play's ultimate message emerges: each generation must accept responsibility for social justice.",
          },
          {
            id: 'q3-002',
            questionNumber: 2,
            marks: 50,
            questionText:
              'How does Priestley present the character of Mr. Birling? What do his actions and attitudes reveal about Edwardian society and values?',
            markScheme:
              'AO1 (15 marks): Character analysis of Mr. Birling\'s methods, values, resistance; trace character development. AO2 (15 marks): Examine language (jargon, imperatives), dramatic irony of his "unsinkable" metaphors. AO3 (20 marks): Edwardian capitalism; business ethics; dramatic irony of pre-war optimism; social class entitlement.',
            modelAnswer:
              "Mr. Birling embodies pre-war capitalist confidence and moral complacency. His opening speech reveals a man intoxicated by prosperity and utterly convinced of his social position's permanence. His assertion that the Titanic is \"unsinkable\" becomes iconic irony-the audience knows of the ship's destruction within weeks of the play's 1912 setting, yet Birling remains oblivious to contingency. This dramatic irony applies to his broader worldview: he believes in inevitable progress, stable hierarchies, and that economic success justifies any means.\n\nBirling's treatment of Eva Smith reveals his utilitarian calculus: her dismissal from his factory is business necessity, not moral wrong. He paid standard wages (he believes), and if she chose prostitution, that reflects her character, not his responsibility. His logic epitomizes what Priestley critiques: the severing of economic action from moral consequence. Birling conceives business as amoral competition where sentiment is luxury only the wealthy can afford.\n\nThroughout the play, Birling exemplifies defensive resistance-attempting to discredit the Inspector, appeal to class solidarity with the Chief Constable, assert his status. His determination to keep the scandal private reveals his fundamental concern: reputation rather than guilt. Priestley suggests that such men constructed the conditions for social catastrophe; their refusal to recognize collective responsibility enabled fascism and war.\n\nIn Edwardian context, Birling represents the industrial bourgeoisie at historical transition. His world is ending (though he doesn't know it), and his values-profit-maximization, class hierarchy, male dominance-will be challenged by war and economic collapse. Priestley uses Birling's blindness as critique: post-war audiences can see that pre-war complacency enabled catastrophe. The play implicitly asks: will the post-war generation learn what Birling never will?",
          },
        ],
      },
      {
        id: 'section-3b',
        title: 'Section B: 19th Century Prose - A Christmas Carol',
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q3-003',
            questionNumber: 3,
            marks: 50,
            questionText:
              'In this extract, from Stave 4, the Ghost of Christmas Yet to Come has led Scrooge to a churchyard. Examine how Dickens uses supernatural elements to explore themes of redemption and social responsibility in A Christmas Carol. You must refer to the extract below and to other parts of the text.',
            extract:
              '"Before I draw nearer to that stone to which you point," said Scrooge, "answer me one question. Are these the shadows of the things that Will be, or are they shadows of things that May be, only?"\n\nStill the Ghost pointed downward to the grave by which it stood.\n\n"Men\'s courses will foreshadow certain ends, to which, if persevered in, they must lead," said Scrooge. "But if the courses be departed from, the ends will change. Say it is thus with what you show me!"\n\nThe Spirit was immovable as ever.\n\nScrooge crept towards it, trembling as he went; and following the finger, read upon the stone of the neglected grave his own name, EBENEZER SCROOGE.',
            extractSource:
              'Charles Dickens, A Christmas Carol (1843), Stave 4 (Project Gutenberg #46)',
            markScheme:
              'AO1 (15 marks): Analyse the function of the silent, pointing Spirit; place the churchyard scene in Scrooge\'s transformation across the five staves. AO2 (15 marks): Explore the language of possibility ("shadows", "Will be", "May be"); Scrooge\'s reasoning about "courses" and "ends"; the building of suspense through short paragraphs and the delayed revelation of the name on the stone. AO3 (20 marks): Dickens\'s social criticism in the 1840s; the Poor Law and the conditions of the poor; the Christian framework of repentance and redemption.',
            modelAnswer:
              'Dickens uses the supernatural as a means of forcing Scrooge to face the consequences of his own life, and the extract shows the last and most frightening of those confrontations. The Ghost of Christmas Yet to Come never speaks. When Scrooge asks, "Are these the shadows of the things that Will be, or are they shadows of things that May be, only?", the only reply is that "Still the Ghost pointed downward to the grave by which it stood." The silence makes the Spirit less a character than an embodiment of consequence: it cannot be bargained with, so Scrooge must answer his own question.\n\nThe capitals on "Will" and "May" mark the question on which the whole story turns: is the future fixed or conditional? Scrooge argues the case himself, that "Men\'s courses will foreshadow certain ends, to which, if persevered in, they must lead", but that "if the courses be departed from, the ends will change." The balanced, logical phrasing is the reasoning of a man of business, yet the plea that follows, "Say it is thus with what you show me", turns argument into entreaty. That he now wants the future to be changeable shows how far the earlier visits have moved him.\n\nThe Spirit\'s response, that it "was immovable as ever", refuses him comfort, and Dickens builds suspense through that short paragraph and the slow approach, as Scrooge "crept towards it, trembling as he went". The revelation is held back to the final words, "his own name, EBENEZER SCROOGE", set in capitals like the letters cut into a headstone. The phrase "the neglected grave" names the logical end of a life without charity: the man who would give nothing has no one to mourn him.\n\nAcross the novella each spirit has a different function. The Ghost of Christmas Past reawakens feeling by showing Scrooge the lonely schoolboy and the happy apprentice at Fezziwig\'s; the Ghost of Christmas Present shows him the Cratchits\' Christmas and, beneath its robe, the children Ignorance and Want; this last Spirit shows him where his course leads. Stave 5 answers the question in the extract: the future does change. Scrooge raises Bob Cratchit\'s salary and becomes a second father to Tiny Tim, who does not die.\n\nDickens wrote A Christmas Carol in 1843, when the New Poor Law and the conditions of the urban poor were matters of fierce public debate, and the ghosts allow him to present social responsibility as a question of personal salvation. The supernatural is not decoration: it shows readers, as it shows Scrooge, that the consequences of indifference can still be altered by a changed life.',
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q4-001',
            questionNumber: 1,
            marks: 50,
            questionText:
              'Explore how Russell uses class and social mobility to shape the tragic narrative of Blood Brothers. You must refer to the extract below and to other parts of the play.',
            extract:
              "MRS. JOHNSTONE: I should have known that the working classes were built to be chained, not to be freed. That we were never meant to rise above our station, that something would always pull us back down again. I couldn't see it-even when it was staring me in the face.",
            markScheme:
              "AO1 (15 marks): Analyse Russell's presentation of class determinism; examine separation's impact on brothers' development. AO2 (15 marks): Explore linguistic restraint and resignation; examine dramatic irony of maternal separation. AO3 (20 marks): Post-1950s social mobility in Britain; economic determinism; Marxist critique in Russell's work.",
            modelAnswer:
              "Russell's fundamental argument is that class structures are self-perpetuating and fundamentally unjust. Mrs. Johnstone's resignation-\"working classes were built to be chained\"-represents not inevitable truth but the internalized oppression that prevents resistance. Russell suggests that capitalism systematically ensures that working-class individuals cannot escape their position through talent, hard work, or virtue; external forces constantly push them downward.\n\nThe separation of the twins becomes the play's central mechanism for exploring class determinism. Mickey, raised as working-class, and Edward, raised as upper-class, have identical genetic inheritances yet profoundly divergent life trajectories. Mickey's trajectory descends: unemployment, imprisonment, drug addiction, murder. Edward's ascends: education, professional success, political aspirations. Russell argues that these divergent outcomes reveal social structures' power, not individual differences.\n\nYet Russell complicates simple environmental determinism. Even as Mickey spirals into criminality, we witness his genuine warmth, humor, and capacity for love. He is destroyed not by personal inadequacy but by systematic denial of opportunity. Russell forces audiences to confront how capitalism wastes human potential through structural exclusion. The play's ending-murder-suicide at birth-literalizes Russell's argument: the system cannot tolerate the threat posed by two identical individuals with access to different class positions.\n\nMrs. Johnstone's final resignation is not affirmation but indictment. She has internalized the ideology of her own oppression, believing that working-class people are naturally subordinate. Russell invites audiences to reject this fatalism; the tragedy emerges not from inevitable natural law but from changeable social arrangements. The play functions as implicit call for social transformation: if class systems are constructed, they can be reconstructed.",
          },
          {
            id: 'q4-002',
            questionNumber: 2,
            marks: 50,
            questionText:
              'How does Russell use the Narrator as a dramatic device? What effect does the Narrator create in the audience?',
            markScheme:
              "AO1 (15 marks): Analyse the Narrator's functions (prophet, chorus, alienation effect); examine relationship to other characters. AO2 (15 marks): Explore linguistic patterns (rhyme, song, direct address); examine tonal shifts. AO3 (20 marks): Brechtian dramaturgy; relationship to Greek chorus; contemporary theatrical conventions.",
            modelAnswer:
              "The Narrator operates as a Brechtian alienation device, deliberately preventing audience emotional absorption in the drama. Russell employs the Narrator not to facilitate narrative clarity but to obstruct easy sympathy and create critical distance. The Narrator's frequent interventions-stepping outside the dramatic action, addressing audiences directly, singing-fracture naturalistic illusion.\n\nThe Narrator functions as malevolent fate-figure, yet also as manifestation of social forces. When the Narrator comments on outcomes we haven't yet witnessed (\"By tomorrow morning, they'll both be dead\"), the effect is prophetic inevitability mixed with critique. Audiences recognize that the deaths are not genuinely inevitable but rather the predictable outcome of social structures the Narrator embodies or represents.\n\nThe Narrator's rhyming couplets and song create theatrical artificiality that prevents audiences from inhabiting characters' emotional lives as in conventional drama. Just when emotional investment deepens, the Narrator's interruption yanks audiences back into critical awareness. This formal estrangement is ideologically purposeful: Russell refuses to offer emotional catharsis because catharsis would suggest the tragedy is inevitable and individual rather than social and changeable.\n\nThe Narrator's presence also creates audience complicity. By speaking directly to audiences, the Narrator implicates them in the social system that destroys the brothers. We are not innocent observers of distant tragedy but participants in the structures that create such outcomes. This direct address method makes Blood Brothers politically activist theater rather than merely entertainment.",
          },
        ],
      },
      {
        id: 'section-4b',
        title: 'Section B: 19th Century Prose - Silas Marner',
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q4-003',
            questionNumber: 3,
            marks: 50,
            questionText:
              'In this extract, from Chapter 16, Silas has told Dolly Winthrop how he was falsely accused of theft at Lantern Yard, and Dolly has said that he should have kept his trust; the conversation takes place while Eppie is still a young child. Examine how Eliot presents the transformation of Silas Marner through his relationship with Eppie. You must refer to the extract below and to other parts of the text.',
            extract:
              '“Ah, but that ’ud ha’ been hard,” said Silas, in an under-tone; “it ’ud ha’ been hard to trusten then.”\n\n“And so it would,” said Dolly, almost with compunction; “them things are easier said nor done; and I’m partly ashamed o’ talking.”\n\n“Nay, nay,” said Silas, “you’re i’ the right, Mrs. Winthrop—you’re i’ the right. There’s good i’ this world—I’ve a feeling o’ that now; and it makes a man feel as there’s a good more nor he can see, i’ spite o’ the trouble and the wickedness. That drawing o’ the lots is dark; but the child was sent to me: there’s dealings with us—there’s dealings.”',
            extractSource: 'George Eliot, Silas Marner (1861), Chapter 16 (Project Gutenberg #550)',
            markScheme:
              'AO1 (15 marks): Trace Silas\'s arc from the betrayal at Lantern Yard and fifteen years of isolation to trust and belonging; analyse how the extract shows the change in his own words. AO2 (15 marks): Examine the language of trust and providence ("trusten", "good i\' this world", "sent", "dealings"); the use of dialect for both speakers; the contrast between "dark" and the child. AO3 (20 marks): Eliot\'s humanism and her view of religion as fellow-feeling; community and custom in the rural village; the contrast between the gold and the child; the novel as a moral fable.',
            modelAnswer:
              'Eliot presents Silas\'s transformation as a recovery of trust: the man who lost his faith in God and in other people through a false accusation finds both again through his care for Eppie. In this extract Silas looks back to Lantern Yard, where his friend William Dane framed him for theft and the drawing of lots declared him guilty, and admits that "it \'ud ha\' been hard to trusten then." The dialect verb "trusten" keeps the idea in his own plain, spoken voice; the loss of trust is presented as something lived rather than argued.\n\nHis reply to Dolly shows how far he has changed. "There\'s good i\' this world", he says, and adds "I\'ve a feeling o\' that now": the word "now" marks the distance between the withdrawn weaver of the opening chapters and the father speaking here. He describes "a good more nor he can see, i\' spite o\' the trouble and the wickedness", a faith that does not deny suffering but looks past it. Eliot does not pretend the injustice has been explained, since "That drawing o\' the lots is dark", but she sets against it the plain statement "the child was sent to me". The passive "was sent" implies a giver, and the repeated "there\'s dealings with us" suggests a providence at work in ordinary lives.\n\nThe extract also presents the change as shared. Dolly is "partly ashamed o\' talking", and Silas reassures her: "you\'re i\' the right, Mrs. Winthrop". The isolated man who once spoke to almost no one now reasons with a neighbour and accepts her view. Eliot shows that the relationship with Eppie has drawn Silas back into Raveloe, into its church, its customs and its friendships.\n\nElsewhere, Eliot makes the change concrete through the contrast between the gold and the child. For fifteen years Silas wove and hoarded coins; soon after the gold is stolen, Eppie toddles into his cottage, and her golden curls at first look to his short-sighted eyes like his lost money returned. Where the gold asked nothing of him, the child makes constant claims, and meeting them brings him back to life. When Godfrey Cass later claims her as his daughter, Eppie chooses to stay with the man who raised her.\n\nThe novel\'s larger argument, typical of Eliot\'s humanism, is that goodness grows through human bonds and duties rather than through doctrine. In a period of rapid industrial change, the village and the handloom weaver become the setting for a quiet redemption, in which love for a child is what restores a man to faith and to his community.',
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the play as a whole.',
        questions: [
          {
            id: 'q5-001',
            questionNumber: 1,
            marks: 40,
            questionText:
              "In this extract, from Act 3 Scene 1, Shylock's friend Tubal brings him news from Genoa of his daughter Jessica, who has run away with a Christian and taken his money and jewels, and of Antonio, who owes him a bond. How does Shakespeare present Shylock as a complex character? You must refer to the extract below and to other parts of the play.",
            extract:
              'TUBAL: Your daughter spent in Genoa, as I heard, one night, fourscore ducats.\nSHYLOCK: Thou stick’st a dagger in me. I shall never see my gold again. Fourscore ducats at a sitting! Fourscore ducats!\nTUBAL: There came divers of Antonio’s creditors in my company to Venice that swear he cannot choose but break.\nSHYLOCK: I am very glad of it. I’ll plague him, I’ll torture him. I am glad of it.\nTUBAL: One of them showed me a ring that he had of your daughter for a monkey.\nSHYLOCK: Out upon her! Thou torturest me, Tubal. It was my turquoise, I had it of Leah when I was a bachelor. I would not have given it for a wilderness of monkeys.',
            extractSource:
              'William Shakespeare, The Merchant of Venice, Act 3, Scene 1 (Project Gutenberg #1515)',
            markScheme:
              "AO1 (12 marks): Analyse Shylock's complexity in the exchange: grief, greed, rage at his daughter and delight at Antonio's ruin, and the memory of his wife; relate it to his grievances and his treatment elsewhere in the play. AO2 (12 marks): Explore how the structure of the exchange, with Tubal alternating news of Jessica and of Antonio, swings Shylock between pain and glee; the images of wounding and torture; repetition; the personal value of the ring against its price. AO3 (16 marks): The representation of Jewish characters on the Elizabethan stage; the expulsion of Jews from England in 1290; Shylock as outsider in Christian Venice; how modern audiences respond to the play.",
            modelAnswer:
              'Shakespeare makes Shylock complex by showing several feelings at war within him in a single exchange. In this extract Tubal brings news from Genoa, and each piece of news pulls Shylock in a different direction. When he hears that Jessica spent "fourscore ducats" in one night, he cries "Thou stick\'st a dagger in me": the loss of money is felt as a physical wound. The repetition in "Fourscore ducats at a sitting" and "Fourscore ducats" shows him counting the loss over and over, and the audience could take it either as a miser\'s obsession or as the only way a betrayed father can express his hurt.\n\nMoments later, news of Antonio\'s losses produces the opposite emotion: "I am very glad of it. I\'ll plague him, I\'ll torture him." The short, repeated clauses show grief turning into a wish for revenge. Shylock\'s hatred of Antonio has a history: earlier in the play he reminds Antonio that he has spat on him and called him a dog in public, and Antonio replies that he is likely to do so again. The bond for a pound of flesh, proposed as a joke in Act 1, becomes the outlet for everything Shylock has suffered.\n\nThen comes the ring. Tubal reports that Jessica traded it "for a monkey", and Shylock\'s response is the most humanising moment in the scene: "Thou torturest me, Tubal. It was my turquoise, I had it of Leah when I was a bachelor. I would not have given it for a wilderness of monkeys." Leah, presumably his dead wife, is mentioned nowhere else in the play. The ring\'s value to him is sentimental, not commercial, and the absurd "wilderness of monkeys" measures something that cannot be priced. For a moment the man the Christians treat as a devil is a widower grieving over a keepsake.\n\nThe structure of the scene makes the audience watch Shylock\'s grief and vindictiveness feed each other, with Tubal alternating bad news about Jessica and good news about Antonio. Earlier in the same scene Shylock says he wishes his daughter dead at his feet with the jewels in her ear, and in his speech on the shared humanity of Jews and Christians he argues that revenge is what Christian example has taught him. In the trial scene his insistence on the bond turns him into the villain the Christians say he is, and he leaves ruined and forced to convert.\n\nWhen the play was written, Jews had been banished from England for three hundred years, since 1290, and the stage Jew was a figure of greed and cruelty, as in Marlowe\'s The Jew of Malta. Shakespeare draws on that stereotype, yet gives Shylock reasons, memories and a voice. That is why he is complex: the play invites both condemnation and sympathy, and it cannot settle which he deserves.',
          },
          {
            id: 'q5-002',
            questionNumber: 2,
            marks: 40,
            questionText:
              'Examine how Shakespeare explores the relationship between love and money in The Merchant of Venice.',
            markScheme:
              'AO1 (12 marks): Identify patterns of love/money exchange; analyse character relationships. AO2 (12 marks): Explore commercial language applied to romance; examine paradoxes of valuation. AO3 (16 marks): Renaissance commerce and marriage; ideology of love versus economic reality; gender and exchange.',
            modelAnswer:
              "The Merchant of Venice fundamentally explores whether love can be separated from economic exchange. The plot machinery-Portia's suitors competing through casket choice, Bassanio's need for capital to \"win\" Portia, Jessica's elopement with valuable dowry-suggests that love and commerce are inseparably entangled. Shakespeare presents Renaissance Venice as a society where all relationships are mediated through economic calculation.\n\nBassanio's courtship of Portia is explicitly commercial: he requires a loan to outfit himself attractively enough to compete with wealthier suitors. His language oscillates between romantic and commercial registers. He is not cynical-he clearly loves Portia-yet his ability to pursue that love depends on Antonio's capital and, ultimately, on the wealth Portia brings. Marriage becomes transaction even as characters insist on romantic feeling.\n\nPortia's position is particularly complex. She is wealthy (valuable), witty, virtuous (more valuable), yet trapped within patriarchal systems that valuate women primarily as matrimonial commodities. Her casket test attempts to transcend commerce by requiring suitors to choose based on wisdom rather than wealth, yet even this test reproduces economic logic: the casket test is mechanism for sorting valuable from worthless suitors.\n\nJessica's elopement complicates the picture further. Her flight with Lorenzo and Shylock's money represents romantic escape from paternal control, yet her ability to escape depends entirely on theft of patriarchal property. She gains freedom through theft but requires that theft; she cannot simply love and be loved.\n\nShakespeare's ultimate vision is neither cynical nor romantic. Love genuinely exists in the play-Antonio's devotion, Portia's intelligence, Jessica's passion-yet it exists within economic structures that shape, enable, and constrain it. The play suggests that Venice's commercial society has so thoroughly penetrated all relationships that love must simultaneously be economic transaction. The final comedic resolution requires that all characters accept this paradox: they can love genuinely and participate in systems that commodify love simultaneously.",
          },
        ],
      },
      {
        id: 'section-5b',
        title: 'Section B: Poetry',
        instructions:
          'Answer one question from this section. You should refer to two poems, at least one of which must be from a different cluster.',
        questions: [
          {
            id: 'q5-003',
            questionNumber: 3,
            marks: 40,
            questionText:
              'How do poets explore memory and loss in the poems you have studied? Refer to at least two poems in your answer.',
            markScheme:
              'AO1 (12 marks): Identify thematic focus on memory/loss; select relevant textual evidence. AO2 (12 marks): Analyse linguistic and formal choices expressing remembrance; examine temporal structures. AO3 (16 marks): Philosophical treatment of memory; genre conventions of elegy and memorial; historical specificity.',
            modelAnswer:
              "Poets employ distinctive strategies for capturing how memory both preserves and distorts the past. Philip Larkin's \"Days\" presents memory as perpetually deferred-the poem's repeated question structure mirrors consciousness searching through memory without arrival at meaning. Memory in Larkin is fragmented, uncertain, resistant to coherence. The poem's short lines and stripped language reflect emotional numbness in confronting mortality.\n\nContrast this with more elegiac traditions where memory is recuperative. Seamus Heaney's \"Bogland\" uses archaeological metaphor to suggest that memory operates like excavation, with deeper layers revealing historical and personal significance. The bog's preservation of ancient matter becomes metaphor for how poetry recovers lost experience. Where Larkin emphasizes memory's inadequacy, Heaney emphasizes poetry's power to resurrect what seemed lost.\n\nWider patterns emerge: Romantic poets (Wordsworth) celebrated memory as consolatory access to transcendent experience; modernist poets questioned whether memory could be trustworthy or meaningful. Carol Ann Duffy's \"Stafford Afternoons\" uses specific detail-\"your tea grew cold\"-to anchor memory in sensory particularity, suggesting that emotional truth emerges through concrete recollection rather than abstract philosophy.\n\nHistorically, the 20th century's catastrophes-World War II, the Holocaust-forced poets to confront whether poetry could adequately memorialize atrocity. Ted Hughes and Sylvia Plath responded with visceral, disturbing imagery that refused sentimentality. Their work suggests that some losses resist conventional memorial and require formal innovation. The diversity of poetic approaches to memory reveals ongoing uncertainty about whether remembrance honors or distorts the past.",
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q6-001',
            questionNumber: 1,
            marks: 50,
            questionText:
              'Examine how Golding presents the gradual descent from civilization to barbarism on the island. You must refer to the extract below and to other parts of the text.',
            extract:
              'The beast was harmless and horrible; and the news must reach every ear. But by bit, one inquisitive savage and then another began edging away from the tribe, and they left him-pausing, screwing up their faces, half-inclined to return. Then, one of them gave a wild whoop and leaped down to the beach and began to hunt among the scattered rocks.',
            markScheme:
              'AO1 (15 marks): Trace civilization/barbarism trajectory; analyse role of fear, mob psychology, loss of rational authority. AO2 (15 marks): Examine language of transformation ("inquisitive savage," "whoop," "hunt became real"); analyse narrative distance and irony. AO3 (20 marks): Post-WWII anxieties about human nature; Freudian psychology; British public school culture; allegory of political systems.',
            modelAnswer:
              "Golding's narrative structure traces the gradual erosion of civilized behavior through accumulating losses: Piggy's conch authority, Jack's competitive split from Ralph's authority, the hunt's sensual seduction, the beast's psychological power, Simon's murder. This descent is not sudden rupture but gradual psychological drift toward violence.\n\nThe extract captures transition moment where mob dynamics overtake individual moral judgment. The boys initially hesitate-\"half-inclined to return\"-suggesting conscience still operates. Yet the \"wild whoop\" (animalistic sound replacing rational speech) becomes contagious; rationality collapses instantly. Golding suggests that barbarism is not dormant essence suddenly released but potential always present in human psychology, activated by specific conditions: isolation from adult authority, collective fear, sensual thrill of violence.\n\nThe phrase \"hunt became real\" is philosophically significant. The hunt was already real-the boys were already chasing a child. Yet Golding suggests that subjective investment transforms the hunt's meaning. Once the boys fully commit to hunting, it becomes real in psychological register; moral dimension collapses and predatory logic dominates. The transformation occurs not in behavior but in consciousness: the boys begin to believe in their own barbarism.\n\nGolding's implicit argument is deeply pessimistic about human nature. These are English schoolboys, product of civilization's highest institutions, yet violence emerges effortlessly. The novel suggests that civilization is thin veneer over innate savagery, that rational order depends entirely on external coercion. Remove that coercion, and barbarism emerges naturally.\n\nIn post-1945 context, this pessimism responds to WWII's revelation that civilized nations could commit atrocity. Golding wrote during Cold War anxieties about atomic destruction and scientific barbarism. Lord of the Flies argues that human psychology has not evolved beyond tribalism and violence; technology merely amplifies innate destructive impulses. The novel's refusal of redemption-Ralph's rescue comes only through continued violence-suggests that civilization perpetuates barbarism at larger scale.",
          },
          {
            id: 'q6-002',
            questionNumber: 2,
            marks: 50,
            questionText:
              'How does Golding use symbols to explore themes of power, order, and morality in Lord of the Flies?',
            markScheme:
              "AO1 (15 marks): Identify key symbols (conch, pig's head, beast); analyse symbolic transformations. AO2 (15 marks): Examine how symbols' meanings shift; explore relationship between symbolic and literal. AO3 (20 marks): Allegorical dimensions; symbolic systems in political theory; Jungian psychology.",
            modelAnswer:
              "The conch functions as primary symbol of democratic authority and rational order. Initially, possession of the conch grants speaking right and legitimacy; its authority derives from collective agreement to honor it. As civilization erodes, the conch's power diminishes until, when Piggy holds it and is murdered, the conch shatters simultaneously. The symbolic destruction of both conch and Piggy literalizes the collapse of democratic authority and intellectual rationality.\n\nThe pig's head-\"Lord of the Flies\"-becomes symbol of death, corruption, and the boys' inner darkness. Yet its meaning is unstable: to the boys, the head appears to speak, to offer wisdom, to represent threatening power. Golding suggests that symbols derive meaning from psychological investment rather than inherent property. The head is literally dead matter; yet the boys' terror makes it symbolically alive and powerful.\n\nThe beast functions similarly-it is simultaneously unreal (invented through fear), partially real (possibly the parachutist), and metaphorically real (representing innate savagery). The beast's undefined nature makes it powerfully symbolic: each boy projects his fears onto it. The beast becomes container for psychological terror that actually originates internally. Simon's recognition that \"the beast is part of us\" articulates Golding's thesis: the external threat is symbolic externalization of internal impulses.\n\nFire symbolizes civilization's presence or absence: Ralph's need to maintain the signal fire represents commitment to rescue and return to civilization. As the fire dies, civilization recedes. Yet fire also destroys-the final hunt occurs amid burning island. Golding suggests ambivalence about civilization: it requires fire (heat, energy, purification) yet fire consumes indiscriminately.\n\nGolding's symbolic system operates through Jungian psychology: the conch represents superego (rational conscience), the beast represents shadow (repressed impulses), and the pig's head represents the id's triumph over conscience. The novel charts psychic collapse in symbolic rather than purely psychological terms, suggesting that individual psychology and social order are structurally analogous-both depend on conscious constraint of destructive impulses.",
          },
        ],
      },
      {
        id: 'section-6b',
        title: 'Section B: 19th Century Prose - Jane Eyre',
        instructions:
          'Answer one question from this section. You should refer closely to the extract provided and to your knowledge of the text as a whole.',
        questions: [
          {
            id: 'q6-003',
            questionNumber: 3,
            marks: 50,
            questionText:
              "In this extract, from Chapter 23, Jane believes that Mr Rochester is about to marry Blanche Ingram and has found her a post as a governess in Ireland. Examine how Charlotte Brontë presents Jane's struggle for independence and self-determination. You must refer to the extract below and to other parts of the text.",
            extract:
              '“I tell you I must go!” I retorted, roused to something like passion. “Do you think I can stay to become nothing to you? Do you think I am an automaton?—a machine without feelings? and can bear to have my morsel of bread snatched from my lips, and my drop of living water dashed from my cup? Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!—I have as much soul as you,—and full as much heart! And if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me, as it is now for me to leave you. I am not talking to you now through the medium of custom, conventionalities, nor even of mortal flesh;—it is my spirit that addresses your spirit; just as if both had passed through the grave, and we stood at God’s feet, equal,—as we are!”\n\n“As we are!” repeated Mr. Rochester—“so,” he added, enclosing me in his arms, gathering me to his breast, pressing his lips on my lips: “so, Jane!”\n\n“Yes, so, sir,” I rejoined: “and yet not so; for you are a married man—or as good as a married man, and wed to one inferior to you—to one with whom you have no sympathy—whom I do not believe you truly love; for I have seen and heard you sneer at her. I would scorn such a union: therefore I am better than you—let me go!”\n\n“Where, Jane? To Ireland?”\n\n“Yes—to Ireland. I have spoken my mind, and can go anywhere now.”\n\n“Jane, be still; don’t struggle so, like a wild frantic bird that is rending its own plumage in its desperation.”\n\n“I am no bird; and no net ensnares me; I am a free human being with an independent will, which I now exert to leave you.”',
            extractSource:
              'Charlotte Brontë, Jane Eyre (1847), Chapter 23 (Project Gutenberg #1260)',
            markScheme:
              "AO1 (15 marks): Analyse Jane's assertions of selfhood and equality; place the scene in her development from Gateshead and Lowood to her independence at the end of the novel. AO2 (15 marks): Examine the rhetoric of the speech (rhetorical questions, lists, the conditional, the build to a climax); Rochester's bird simile and Jane's reversal of it; the dramatic irony of \"a married man\". AO3 (20 marks): The governess's uncertain place in the class system; women's legal and economic position in marriage; religion and spiritual equality; the novel's reception in 1847 and 1848.",
            modelAnswer:
              'Brontë presents Jane\'s independence as something she must claim in words, against the pull of her own feelings and the weight of her social position. In this extract Jane believes that Rochester is about to marry Blanche Ingram and send her away to Ireland. Her speech builds through a run of rhetorical questions, "Do you think I am an automaton?" and "a machine without feelings?", which insist on the inner life her position as a paid governess is supposed to deny. The images of "my morsel of bread snatched from my lips" and "my drop of living water dashed from my cup" present Rochester\'s company as nourishment she is to be refused, and the biblical echo of living water makes her need a spiritual one.\n\nThe heart of the speech is a claim to equality that cuts across class and gender. Jane lists the terms on which the world judges her, "poor, obscure, plain, and little", and rejects the conclusion drawn from them: "I have as much soul as you", and "full as much heart". The conditional "if God had gifted me with some beauty and much wealth" admits that money and looks give a woman power in the marriage market while denying that they measure anything essential. The climax, "it is my spirit that addresses your spirit", imagines the two of them standing "at God\'s feet, equal", beyond "custom, conventionalities" and "mortal flesh".\n\nRochester answers with an embrace, but Jane does not yield. She tells him that "you are a married man", or as good as one, to a woman she believes he does not love, and concludes "I would scorn such a union: therefore I am better than you": a governess claiming moral superiority over her master. The reader later learns the dramatic irony of her words, since Rochester is already married, to Bertha Mason, whose existence halts their wedding in Chapter 26.\n\nThe bird imagery shows the struggle most clearly. Rochester compares her to "a wild frantic bird that is rending its own plumage in its desperation", casting her resistance as self-destructive panic. Jane turns the image back on him: "I am no bird; and no net ensnares me; I am a free human being with an independent will, which I now exert to leave you." The semicolons build the sentence into a declaration, and its final clause turns freedom from an idea into an action.\n\nThe same pattern runs through the novel. As a child at Gateshead Jane defies Mrs Reed; at Lowood she learns endurance from Helen Burns; after the wedding is stopped she leaves Thornfield rather than live as Rochester\'s mistress, and later refuses St John Rivers\'s offer of a loveless marriage. She returns to Rochester only when she has an inheritance of her own and he has lost his sight and a hand, so that they meet on more equal terms. In 1847, when a married woman\'s property passed to her husband, Brontë\'s heroine insists that love must not cost her self-respect, and some early reviewers found her dangerously rebellious for exactly that reason.',
          },
        ],
      },
    ],
  },
]
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
    descriptors: [
      'Sophisticated analysis',
      'Integrated context',
      'Multiple interpretations',
      'Sustained argument',
    ],
  },
  band2: {
    label: 'Upper-Mid (75-86)',
    descriptors: [
      'Secure understanding',
      'Explicit context',
      'Developed analysis',
      'Clear structure',
    ],
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
}

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
    name: "Demonstrate understanding of writer's methods in appropriate contexts",
    shortForm: 'Understanding of historical, cultural, and literary context',
  },
}

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
}

// Quotation banks for revision - key quotations from each text
export const quotationBanks = {
  macbeth: {
    ambition: [
      "If it were done when 'tis done",
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
      'O Romeo, Romeo, wherefore art thou Romeo?',
      "What's in a name? That which we call a rose",
      'This holy shrine',
      "death-mark'd love",
    ],
    feud: [
      'Two households, both alike in dignity',
      'From ancient grudge break to new mutiny',
      "A plague o' both your houses",
    ],
  },
}

// Common thematic frameworks for analysis
export const thematicFrameworks = {
  powerAndAuthority: [
    'Political hierarchies',
    'Gender and dominance',
    'Class structures',
    'Institutional control',
  ],
  love: ['Romantic passion', 'Familial bonds', 'Spiritual transcendence', 'Economic exchange'],
  moralResponsibility: [
    'Individual culpability',
    'Systemic injustice',
    'Redemption possibilities',
    'Social reform',
  ],
  transformation: [
    'Psychological change',
    'Spiritual regeneration',
    'Character development',
    'Ideological shift',
  ],
  nature: [
    'Natural order',
    'Human civilization',
    'Wilderness versus society',
    'Primordial impulses',
  ],
}

export default wjecLitMockExams
