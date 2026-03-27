// @ts-nocheck
export interface MockExamPaper {
  id: string;
  title: string;
  board: string;
  subject: string;
  tier?: string;
  duration: number; // minutes
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

export const edexcelLitMockExams: MockExamPaper[] = [
  {
    id: 'edexcel-lit-001',
    title: 'Paper 1: Shakespeare and Post-1914 Literature (Romeo and Juliet)',
    board: 'Edexcel',
    subject: 'English Literature',
    duration: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'section-1',
        title: 'Section A: Shakespeare',
        instructions: 'Answer one question from this section. You should spend approximately 45 minutes on this question. You should refer closely to the extract provided and to other parts of the play.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 40,
            questionText: 'Read the following extract from Act 3, Scene 1 of Romeo and Juliet, where Romeo kills Tybalt. Explore how Shakespeare presents violence and its consequences in this scene. In your answer, you should consider the dramatic impact of the language and action on the audience.',
            extract: `TYBALT: Thou, wretched boy, that didst consort him here,
Shalt with him hence.

ROMEO: This shall determine that.
[They fight. TYBALT falls.]

ROMEO: O, I am fortune's fool!
Why dost thou stay?

Enter BENVOLIO.

BENVOLIO: Romeo, away, be gone!
The citizen keep up; the Montagues and Capulets are abroad,
And all the streets filled with these tragic broils.
Romeo, the Prince expressly hath forbidden fighting in Verona streets.
Come, man, the watch approaches.

ROMEO: O, I am fortune's fool!`,
            markScheme: `Band 5 (32-40 marks): Sustained exploration of how Shakespeare presents violence and its consequences. Perceptive analysis of language (e.g. "fortune's fool" as tragic irony, imperative verbs showing violence, spondaic rhythms). Develops interpretations considering dramatic impact. Detailed textual references integrated seamlessly. Shows understanding of context (Prince's law, feudal consequences).

Band 4 (24-31 marks): Clear exploration with good analysis. Identifies language techniques and their effects. Makes links between language and consequences. Mostly well-integrated textual support. Shows understanding of dramatic impact.

Band 3 (16-23 marks): Relevant exploration with some analysis. Identifies some techniques (imperatives, repetition). Makes general points about consequences. Adequate textual references. Some attempt at dramatic impact.

Band 2 (8-15 marks): Limited exploration. Identifies some features. Makes basic points about violence. Limited textual support. Minimal analysis.

Band 1 (0-7 marks): Very limited or no relevant response.`,
            modelAnswer: `Shakespeare presents violence in this scene as both immediate and catastrophic in its consequences, using dramatic action and evocative language to show how quickly youthful impulse becomes tragic fate. The violence is shocking in its brevity: "This shall determine that" - a single line precedes Tybalt's death. This abruptness emphasizes how the play's central conflict erupts into bloodshed without warning, particularly significant because Romeo has just married Juliet and attempted to make peace.

The language after the killing reveals the internal consequence of violence on Romeo himself. His repetition of "O, I am fortune's fool!" demonstrates shock and self-awareness. The word "fool" is particularly significant - it suggests Romeo recognises he has been played by fate, that his own actions have sealed his doom. The exclamation mark creates urgency and desperation, showing how the violence immediately transforms Romeo from lover to outlaw. Shakespeare uses this linguistic shift to dramatize the psychological impact of killing.

The entrance of Benvolio, with his urgency - "Romeo, away, be gone!" - and the reference to the Prince's law establish the external consequences. The repetition of "streets filled with these tragic broils" emphasises the dangerous environment created by the feud. By naming the Prince and his decree, Shakespeare reminds the audience that Romeo has not merely committed a murder in personal terms - he has directly violated the Prince's edict that "If ever you disturb our streets again, your lives shall pay the forfeit." This detail makes Romeo's fate legally sealed as well as personally tragic.

The dramatic impact on the audience is profound because Shakespeare shows violence as the inevitable outcome of the feud's toxic atmosphere, yet also as the moment when love becomes disaster. Romeo's brief moment of peace - just hours as Juliet's husband - is shattered by the obligation to avenge Mercutio. This scene teaches the audience that in Verona, violence is not simply wrong; it is the mechanism by which the feud destroys love itself.`
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 40,
            questionText: 'Explore the relationship between Romeo and Juliet and how it is presented throughout the play. Consider how Shakespeare uses language, dramatic irony, and significant moments to show the development and impact of their love.',
            bulletPoints: [
              'You should consider the rapid development of their relationship',
              'The imagery and language Shakespeare uses to describe their love',
              'How other characters view their relationship',
              'The tragic consequences of their love within the context of the feud'
            ],
            markScheme: `Band 5 (32-40 marks): Sustained, perceptive exploration of the relationship's presentation. Analyzes key scenes with sophisticated understanding of how Shakespeare develops the relationship through language and imagery. Strong grasp of dramatic irony (e.g., their love accelerating their deaths). Excellent integration of textual references. Shows awareness of thematic significance.

Band 4 (24-31 marks): Clear exploration with good analysis of key scenes. Identifies language patterns and imagery. Makes connections between love and the feud. Good textual support. Shows understanding of dramatic irony.

Band 3 (16-23 marks): Relevant exploration of the relationship. Identifies some key scenes and language choices. Makes some connections. Adequate textual references.

Band 2 (8-15 marks): Limited exploration. Basic points about their love. Limited textual support.

Band 1 (0-7 marks): Very limited response.`,
            modelAnswer: `Shakespeare presents the relationship between Romeo and Juliet as simultaneously transcendent and doomed, using poetic language and dramatic irony to explore how love becomes both redemptive and destructive within the context of the feud. The relationship develops with astonishing rapidity - they meet, fall in love, marry, and consummate their marriage within 24 hours of the play's beginning. This speed is not presented as recklessness but as a force beyond their control, suggested by Shakespeare's use of religious imagery when they first meet.

Their initial exchange at the feast employs the extended metaphor of pilgrimage, with Romeo as pilgrim and Juliet as holy shrine. This language elevates their meeting beyond mere attraction to something spiritual and transcendent: "My lips, two blushing pilgrims, ready stand / To smooth that rough touch with a tender kiss." The religious framework suggests their love operates on a higher plane than the material world of the feud. Juliet responds with equal spiritual intensity, and together they complete a Shakespearean sonnet, suggesting their love is poetry made flesh - perfect, balanced, complete.

The balcony scene develops their love through imagery of light and stars. Romeo describes Juliet as the sun ("O speak again, bright angel!"), and Juliet worries that Romeo is "too quickly won." Yet her concern is immediately overridden by the power of their mutual attraction. Shakespeare uses the language of permanence and commitment - "What's in a name?" becomes Juliet's declaration that their love transcends the feud entirely. Their dialogue moves from passionate metaphor to practical planning; they decide to marry, demonstrating that their love is not mere infatuation but a serious commitment.

The dramatic irony intensifies as Shakespeare shows their love accelerating events toward tragedy. The audience understands what Romeo and Juliet cannot: that their passionate love, born from the feud, can only end in death. Other characters sense this darkness. The Friar agrees to marry them hoping their union will end the feud, yet his action paradoxically ensures their destruction. When Romeo kills Tybalt hours after marrying Juliet, the structural inevitability becomes clear - the feud will not permit their love to flourish.

Shakespeare's final presentation of their love occurs in the tomb scene, where Romeo and Juliet are reunited only in death. The poetry here reaches its height of intensity, yet it is poetry spoken over a corpse. Romeo's final words - "Thus with a kiss I die" - recalls their spiritual first meeting but now represents the ultimate tragic consequence of love born within hatred. Shakespeare presents their love as genuine, beautiful, and ultimately more powerful than the feud - but only in death.`
          },
          {
            id: 'q3',
            questionNumber: 3,
            marks: 40,
            questionText: 'Read the extract below from Act 2, Scene 2 (the balcony scene). How does Shakespeare use language to convey Romeo\'s passion and Juliet\'s complexity in this moment?',
            extract: `ROMEO: But soft, what light through yonder window breaks?
It is the east, and Juliet is the sun.
Arise, fair sun, and kill the envious moon,
Who is already sick and pale with grief,
That thou her maid art far more fair than she.

JULIET: O Romeo, Romeo! wherefore art thou Romeo?
Deny thy father and refuse thy name;
Or, if thou wilt not, be but sworn my love,
And I'll no longer be a Capulet.

ROMEO: Shall I hear more, or shall I speak at this?

JULIET: 'Tis but thy name that is my enemy.
What's in a name? that which we call a rose
By any other name would smell as sweet.`,
            markScheme: `Band 5 (32-40 marks): Perceptive analysis of language effects. Explores metaphor (sun/moon, rose), apostrophe, and imperative language. Shows how language conveys passion and emotional complexity. Excellent integration of quotations. Discusses dramatic significance.

Band 4 (24-31 marks): Clear analysis of language techniques. Identifies metaphor and apostrophe. Makes connections to emotion and character. Good textual support.

Band 3 (16-23 marks): Identifies some techniques. Makes points about passion and emotion. Adequate quotation support.

Band 2 (8-15 marks): Limited analysis. Basic identification of features.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Shakespeare uses richly poetic language in this scene to convey Romeo's passionate intensity while simultaneously revealing Juliet's more pragmatic and intellectually engaged complexity. The contrast between their voices establishes the dynamic of their relationship and their different approaches to the same overwhelming emotion.

Romeo's passion is conveyed through elaborate metaphorical language, particularly his comparison of Juliet to the sun. The metaphor "It is the east, and Juliet is the sun" elevates her beyond human into celestial beauty. The subsequent imperatives - "Arise, fair sun" - transform her into a cosmic force. The extended metaphor of the moon being "envious" and "pale with grief" creates a competitive hierarchy where Juliet's beauty literally outshines the heavens. This hyperbolic language suggests Romeo's passion has overwhelmed his rational mind; he sees Juliet in transcendent terms that border on worship rather than human love.

Juliet's response introduces a more grounded, intellectual perspective. Her famous question "What's in a name?" demonstrates philosophical sophistication. While Romeo speaks in extravagant celestial imagery, Juliet cuts through to the logical heart of the matter: names are arbitrary social constructs that should not determine human connection. The simile "that which we call a rose / By any other name would smell as sweet" is characteristically elegant and pragmatic. While romantic, it suggests Juliet is thinking clearly about the absurdity of their situation - their love is real and genuine regardless of the names Montague and Capulet.

The dramatic irony embedded in Juliet's language heightens the scene's complexity. When she says "'Tis but thy name that is my enemy," she attempts to minimize the feud as merely nomenclature. Yet the audience understands that names carry weight - the names Montague and Capulet will ultimately prove to be far more than superficial labels. Juliet's intellectual confidence in this moment becomes tragic in retrospect.`
          }
        ]
      },
      {
        id: 'section-2',
        title: 'Section B: Post-1914 Literature',
        instructions: 'Answer one question from this section. You should spend approximately 45 minutes on this question.',
        questions: [
          {
            id: 'q4',
            questionNumber: 4,
            marks: 40,
            questionText: 'Choose one text from the post-1914 literature anthology. Explain how the writer presents a significant theme or character. You should consider language, structure, and the writer\'s methods.',
            bulletPoints: [
              'Identify your chosen text clearly',
              'Explain the theme or character in detail',
              'Analyze the writer\'s language and structure',
              'Consider the effect on the reader'
            ],
            markScheme: `Band 5 (32-40 marks): Excellent understanding of text. Detailed analysis of language and structure. Sustained exploration of theme/character. Sophisticated understanding of writer's methods and their effects.

Band 4 (24-31 marks): Clear understanding. Good analysis of language/structure. Clear exploration of theme/character.

Band 3 (16-23 marks): Adequate understanding. Some analysis of techniques. Basic exploration of theme/character.

Band 2 (8-15 marks): Limited understanding. Basic identification of features.

Band 1 (0-7 marks): Minimal response.`
          }
        ]
      }
    ]
  },
  {
    id: 'edexcel-lit-002',
    title: 'Paper 1: Shakespeare and Post-1914 Literature (Macbeth)',
    board: 'Edexcel',
    subject: 'English Literature',
    duration: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'section-1',
        title: 'Section A: Shakespeare',
        instructions: 'Answer one question from this section. You should spend approximately 45 minutes on this question. You should refer closely to the extract provided and to other parts of the play.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 40,
            questionText: 'Read the extract below from Act 5, Scene 5 of Macbeth, where Macbeth responds to news of his wife\'s death. Explore how Shakespeare presents Macbeth\'s psychological state at this moment and how his language reflects his spiritual and emotional collapse.',
            extract: `MACBETH: She should have died hereafter;
There would have been a time for such a word.
To-morrow, and to-morrow, and to-morrow,
Creeps in this petty pace from day to day
To the last syllable of recorded time,
And all our yesterdays have lighted fools
The way to dusty death. Out, out, brief candle!
Life's but a walking shadow, a poor player
That struts and frets his hour upon the stage
And then is heard no more: it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.`,
            markScheme: `Band 5 (32-40 marks): Perceptive exploration of Macbeth's psychological collapse. Detailed analysis of language: repetition (Tomorrow x3), metaphors (candle, shadow, player, tale), and rhythm. Shows understanding of how language reflects spiritual emptiness and nihilism. Excellent context of his journey from ambition to despair. Sophisticated analysis of dramatic effect.

Band 4 (24-31 marks): Clear exploration of Macbeth's state. Good identification of language techniques. Makes connections to his emotional collapse. Solid textual support. Good understanding of dramatic impact.

Band 3 (16-23 marks): Relevant exploration. Identifies some techniques (repetition, metaphor). Makes points about his despair. Adequate quotation support.

Band 2 (8-15 marks): Limited exploration. Basic identification of features. Simple points about despair.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Shakespeare presents Macbeth's psychological state in this soliloquy as one of complete spiritual and emotional annihilation. His response to his wife's death is not grief but existential nihilism - he has become so morally hollowed by his crimes that human death, even his wife's, registers only as meaningless. The language reveals a mind that has journeyed from ambitious hope to total despair.

The opening couplet establishes Macbeth's emotional detachment: "She should have died hereafter; / There would have been a time for such a word." The conditional "should have" and "would have been" suggest he views her death with cold resignation. He cannot muster appropriate grief because his moral capacity has been corrupted. This emotional numbness is more chilling than overt despair.

The famous repetition "To-morrow, and to-morrow, and to-morrow" creates a hypnotic rhythm that echoes the witches' prophecies and suggests time as repetitive, purposeless. Shakespeare's use of the spondaic meter in these three stressed syllables slows the pace dramatically, forcing the audience to experience the crushing weight of endless, identical days. This is not the rushing time of Act 1, when Macbeth eagerly anticipated the witches' prophecies. Now time is a burden, moving with "petty pace" - the word "petty" betraying his contempt for life itself.

The extended metaphor that follows constitutes Shakespeare's most profound nihilistic statement. Life is not glorious, not meaningful, but "a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more." The theatrical metaphor is particularly appropriate for a play; Macbeth recognizes life as mere performance, sound without substance. The final image - "a tale / Told by an idiot, full of sound and fury, / Signifying nothing" - represents complete meaninglessness. After murdering his way to the crown, Macbeth has achieved nothing. All his actions have been sound and fury, performed by an idiot (himself) who failed to understand the witches' equivocal prophecies.

The image of the "brief candle" summarizes Macbeth's understanding: human life, which once burned with ambition and hope, is a mere flicker extinguished by darkness. Shakespeare uses this soliloquy to show how ambition and evil corrode the soul, leaving only nihilistic emptiness. Macbeth has lost not merely his wife, but his capacity for meaning itself.`
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 40,
            questionText: 'Explore how Shakespeare presents ambition as a destructive force in Macbeth. Consider the consequences of Macbeth\'s actions throughout the play and the methods Shakespeare uses to show ambition\'s corrupting influence.',
            bulletPoints: [
              'How ambition drives Macbeth\'s initial decision to murder Duncan',
              'The psychological consequences of pursuing power through evil',
              'How other characters are affected by Macbeth\'s ambition',
              'The ultimate consequences of ambition by the play\'s end'
            ],
            markScheme: `Band 5 (32-40 marks): Sustained, perceptive exploration of ambition as destructive. Analyzes progression from initial ambition to complete moral collapse. Sophisticated understanding of psychological degradation. Excellent analysis of key scenes and language. Shows understanding of thematic development.

Band 4 (24-31 marks): Clear exploration with good analysis. Traces development of ambition's effects. Good textual support. Shows understanding of consequences.

Band 3 (16-23 marks): Relevant exploration of ambition and consequences. Identifies key scenes. Basic analysis.

Band 2 (8-15 marks): Limited exploration. Basic points about ambition.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Shakespeare presents ambition as the primary destructive force in Macbeth, using the protagonist's trajectory from respected general to paranoid tyrant to demonstrate how unchecked desire for power systematically corrupts the soul, destroys relationships, and ultimately leads to self-destruction. The play charts ambition's progression from external temptation to internal compulsion that overrides all moral considerations.

The initial manifestation of ambition is sparked by the witches' prophecy, but Shakespeare makes clear that the ambition itself dwells within Macbeth. His soliloquy after hearing their words reveals his dark mind: "If chance will have me king, why, none / Shall ever be. I have no spur / To prick the sides of my intent, but only / Vaulting ambition." The personification of ambition as a horse that "vaults" beyond reason shows Shakespeare's understanding that ambition is not rational desire but an overwhelming, almost physical compulsion. Macbeth recognizes this as a character flaw even as he surrenders to it.

The murder of Duncan demonstrates how ambition overrides human bonds and natural law. Duncan is Macbeth's king, his kinsman, and his guest - multiple sacred relationships that should be inviolable. Yet ambition erases these considerations. Lady Macbeth, herself corrupted by ambition, manipulates Macbeth by questioning his manhood: "What beast was't then / That made you break this enterprise to me?" The irony is profound - true manhood would resist the temptation, but ambition has redefined it as weakness. The murder itself, framed as a courageous act, is actually spiritual suicide. Macbeth has "Murder'd sleep" not merely for Duncan but for himself; his ambition has barred him from peace forever.

The psychological consequences unfold relentlessly. Once Macbeth has secured the throne through murder, ambition does not diminish but intensifies. He becomes consumed with the fear that Banquo's descendants, not his own, will inherit the crown. This fear drives him to commit additional murders - Banquo and Macduff's family. Each murder is committed not for power (he already possesses the crown) but to secure it against imagined threats. Ambition has become pathological, a paranoid obsession that no amount of bloodshed can satisfy. The banquet scene reveals Macbeth's psychological disintegration; he sees Banquo's ghost and responds with barely contained hysteria, his language fragmenting into broken syntax that mirrors his fractured mind.

Other characters suffer profoundly from Macbeth's ambition. Lady Macbeth, who encouraged his ambition, is ultimately destroyed by her conscience. Her sleepwalking scene shows complete psychological collapse - "Out, damned spot!" she cries, unable to wash the imagined blood from her hands. Her suicide (reported offstage) is directly caused by her complicity in Macbeth's ambitious murders. Macduff loses his entire family because Macbeth's paranoid ambition extends to murdering innocent women and children. The witches' prophecy that "none of woman born shall harm Macbeth" proves ironically true only because Macduff was born through Caesarean section, but it is Macbeth's ambition to prevent this harm that drives him to massacre Macduff's family, ensuring his own defeat.

By the final acts, ambition has transformed Macbeth into a hollow tyrant. He speaks of life as meaningless precisely because ambition has stripped his life of all meaning except power. The tragic culmination shows that ambition has not brought him satisfaction but has instead led to his downfall - he dies not as a great king but as a despised tyrant, killed by the very man whose family his ambition drove him to murder. Shakespeare's ultimate statement about ambition is that it promises everything but delivers only destruction, and that the most ambitious may ultimately achieve everything except the contentment or legacy they sought.`
          }
        ]
      },
      {
        id: 'section-2',
        title: 'Section B: Post-1914 Literature',
        instructions: 'Answer one question from this section. You should spend approximately 45 minutes on this question.',
        questions: [
          {
            id: 'q4',
            questionNumber: 4,
            marks: 40,
            questionText: 'Choose one text from the post-1914 literature anthology. Explain how the writer uses a particular technique or device to develop meaning. You should consider the effect on the reader and the significance of this technique to the text as a whole.',
            bulletPoints: [
              'Clearly identify your chosen text',
              'Name the specific technique or literary device',
              'Analyze how it develops meaning',
              'Consider its significance to the overall narrative or theme'
            ],
            markScheme: `Band 5 (32-40 marks): Excellent analysis of technique and its effects. Sophisticated understanding of how technique develops meaning. Sustained focus on significance. Excellent integration of textual evidence.

Band 4 (24-31 marks): Clear analysis of technique. Good understanding of meaning development. Good textual support.

Band 3 (16-23 marks): Adequate analysis. Some understanding of technique and effects.

Band 2 (8-15 marks): Limited analysis. Basic understanding.

Band 1 (0-7 marks): Minimal response.`
          }
        ]
      }
    ]
  },
  {
    id: 'edexcel-lit-003',
    title: 'Paper 2: 19th Century Novel and Poetry (A Christmas Carol + Anthology)',
    board: 'Edexcel',
    subject: 'English Literature',
    duration: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'section-1',
        title: 'Section A: 19th Century Novel',
        instructions: 'Answer one question from this section. You should spend approximately 60 minutes on this question. You should refer closely to the extract provided and to other parts of the novel.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 48,
            questionText: 'Read the extract below from Stave 1 of A Christmas Carol, where the Ghost of Marley appears to Scrooge. Explore how Dickens uses language, imagery, and the supernatural to establish Marley\'s role as a warning and messenger. Consider how this moment begins Scrooge\'s transformation.',
            extract: `MARLEY: I am here to-night to warn you, that you have yet a chance and hope of escaping my fate. You will be haunted by Three Spirits. Without their visits, you cannot hope to shun the path I tread. Expect the first to-morrow, when the bell tolls One.

SCROOGE: Couldn't I take them all at once, and have it over, Jacob?

MARLEY: I have wandered far and wide—and watched with wide-wandering eyes—the broad field of my profession—

SCROOGE: Our profession.

MARLEY: I came not here in life to visit you. Why do I come in death? Because I cannot rest.

[The phantom's chains are described as long, forged link by link, and yard by yard. He wraps them about himself, and with gesture and voice conveys their terrible weight.]

MARLEY: This chain I forged in life. Link by link, yard by yard. I girded it on of my own free will, or rather with every thought I chose. Every man is bound up in some such chain. Every man must justify his existence—or sink into oblivion.`,
            markScheme: `Band 5 (40-48 marks): Perceptive analysis of how Dickens establishes Marley's warning role. Sophisticated understanding of supernatural imagery and its symbolic significance. Detailed analysis of language (imperatives, repetition, metaphor). Excellent exploration of chain metaphor and its connection to moral consequence. Shows how this initiates Scrooge's transformation. Insightful contextual understanding.

Band 4 (32-39 marks): Clear exploration of Marley's role as messenger. Good analysis of supernatural elements and language. Makes connections between chain imagery and moral accountability. Good understanding of the scene's significance to Scrooge's journey.

Band 3 (24-31 marks): Relevant exploration. Identifies some language techniques and imagery. Makes points about warning and transformation. Adequate textual support.

Band 2 (16-23 marks): Limited exploration. Basic identification of features. Simple points about the supernatural.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens uses this scene with remarkable symbolic and psychological sophistication to establish Marley not merely as a ghost but as a personification of conscience and consequence, using the supernatural as a vehicle for moral instruction. The scene is pivotal because it both warns Scrooge and provides the mechanism for his potential redemption - the three spirits.

The language Dickens employs for Marley's warning is authoritative and urgent. "You will be haunted by Three Spirits" - the word "will" is not conditional but absolute, establishing the inevitability of Scrooge's transformation. There is no escape; the three visits are non-negotiable. Marley's insistence that Scrooge "cannot hope to shun the path I tread" creates a terrifying parallel - if Scrooge does not change, he will suffer Marley's eternal torment. The urgency of the time frame - "Expect the first to-morrow, when the bell tolls One" - suggests that redemption has a finite window. Scrooge's impatient response, asking to "take them all at once," reveals his character: even facing supernatural warning, he seeks efficiency, wishing to process salvation as quickly as business.

The chain imagery is extraordinary in its symbolic power. Marley's chains are not imposed externally but "forged" by his own choices: "I girded it on of my own free will, or rather with every thought I chose." This demonstrates Dickens's moral philosophy: consequences are self-inflicted through daily choices. Each "link" represents a moment when Marley chose profit over compassion, accumulation over charity. The repetition of "link by link, yard by yard" creates a grinding, claustrophobic rhythm that conveys how moral compromise accumulates incrementally until it becomes an unbearable burden.

The physical description of the chains - their terrible weight and length - makes the abstract concrete and terrifying. Dickens describes them in ways that force visualization: the phantom "wraps them about himself," and the mention of "their terrible weight" suggests palpable suffering. This is not metaphorical punishment but psychological and spiritual agony made tangible. Marley's question to Scrooge - "Why do I come in death?" - and his answer, "Because I cannot rest," reveal the true punishment: not physical torment but the inability to find peace. The spirit is bound by his own choices, doomed to wander and witness suffering he can no longer alleviate.

The philosophical pronouncement - "Every man is bound up in some such chain... Every man must justify his existence—or sink into oblivion" - universalizes the warning. Dickens is not suggesting Marley's fate applies only to him; every human is forging chains through their choices. This elevates the scene beyond personal narrative into social commentary: Dickens is warning all readers, particularly wealthy readers like Scrooge, that their choices have eternal consequences. To "sink into oblivion" is perhaps worse than damnation - it is complete meaninglessness, the erasure of any positive legacy.

The supernatural framework is essential to Dickens's purpose. A living man confronting Scrooge could be ignored or dismissed; a ghost, particularly one Scrooge knew and respects, forces acknowledgment. The supernatural operates as the language of revelation - it breaks through Scrooge's rational defenses to reach his conscience. The appearance of Marley initiates Scrooge's transformation not through argument but through terror and recognition. Scrooge sees what he might become: a man whose life was meaningful only in acquisition, whose chains will bind him eternally because he failed to "justify his existence" through compassion and human connection.`
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 48,
            questionText: 'Explore how Dickens presents the theme of social responsibility in A Christmas Carol. Consider how different characters embody different responses to this theme and how Dickens uses their portrayal to comment on Victorian society.',
            bulletPoints: [
              'How Scrooge initially represents a rejection of social responsibility',
              'The contrast with characters like the Cratchits and Fred',
              'Dickens\'s use of the Spirits and their lessons to communicate social values',
              'The significance of Scrooge\'s transformation in the context of social responsibility'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent, sustained exploration of social responsibility as theme. Sophisticated analysis of character contrasts and their symbolic significance. Perceptive understanding of how Dickens uses supernatural framework to teach social values. Excellent integration of textual references. Strong contextual awareness of Victorian social issues.

Band 4 (32-39 marks): Clear exploration with good analysis of character contrasts. Good understanding of theme and its development. Solid textual support. Good contextual awareness.

Band 3 (24-31 marks): Relevant exploration of theme. Identifies character contrasts. Some analysis of Dickens's methods.

Band 2 (16-23 marks): Limited exploration. Basic points about characters and responsibility.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens presents social responsibility as a central moral obligation, using A Christmas Carol to argue that the wealthy have a duty to alleviate poverty and suffering, and that the refusal to acknowledge this duty leads to spiritual and social decay. The novel is structured around Scrooge's journey from callous indifference to compassionate responsibility, embodying Dickens's belief that individual transformation can catalyze social change.

Scrooge's initial characterization is defined by his complete rejection of social responsibility. His famous response to the charity collectors - "If they would rather die, they had better do it, and decrease the surplus population" - reveals a man who views the poor as economic problem rather than human beings deserving compassion. His refusal to contribute even to the workhouse demonstrates his philosophy: the poor are responsible for their own destitution through laziness or moral failing. This perspective was not uncommon in Victorian England, where the Poor Laws were designed to punish poverty rather than alleviate it. Scrooge's worldview reflects the most callous strand of Victorian capitalist philosophy.

His interaction with Fred, his nephew, provides immediate contrast. Fred, though not wealthy, embodies genuine social responsibility through warmth, generosity of spirit, and family connection. His invitation to Christmas dinner is an offer of community and belonging, not charity but genuine human connection. Fred's faith in Christmas - "I have always thought of Christmas time as a good time; a kind, forgiving, charitable, pleasant time" - directly opposes Scrooge's view of it as a "humbug." The contrast shows that social responsibility is not contingent on wealth but on spiritual orientation.

The Cratchit family represents the virtuous poor. Despite their poverty, they maintain dignity, integrity, and love. Tiny Tim's illness provides the novel's most poignant moral moment: a child's suffering is presented not as deserved punishment but as an injustice that society (through figures like Scrooge) has failed to address. The Ghost of Christmas Present explicitly makes this moral argument: when Scrooge suggests the poor surplus population should die, the spirit responds by quoting Scrooge's own words back to him - "If he would rather die, he had better do it, and decrease the surplus population!" This devastating moment forces Scrooge (and the reader) to confront the cruelty embedded in his philosophy.

Dickens uses the three spirits to teach progressive lessons about social responsibility. The Ghost of Christmas Past shows Scrooge his own losses - how his choice of money over Bella, his beloved, reveals the corrupting influence of greed. The Ghost of Christmas Present shows him the actual lives of the poor with journalistic specificity - the Cratchits' small joy, Tiny Tim's approaching death, Scrooge's nephew Fred's genuine happiness despite less wealth. This spirit insists Scrooge see human reality, not economic abstraction. The Ghost of Christmas Yet to Come presents the consequences of continued indifference: Tiny Tim dies, Scrooge's own death is barely noted, and his possessions are picked over by grave robbers and poor people. This final spirit dramatizes the ultimate isolation of the selfish.

Scrooge's transformation is presented as regeneration through recognition of social responsibility. His famous conclusion - "I will honour Christmas in my heart, and keep it all the year" - translates into specific actions: he raises Cratchit's wage, he helps the poor, he becomes "as good a friend, as good a master, and as good a man, as the good old city knew." These concrete commitments show that Dickens does not present social responsibility as sentiment but as practice. The novel concludes: "And so, as Tiny Tim observed, God bless Us, Every One!" This benediction suggests that salvation - spiritual, moral, and social - comes through mutual responsibility and compassion.

In the context of Victorian society, Dickens's novel is a direct challenge to laissez-faire capitalism and the doctrine that poverty is deserved. By showing that the poor (Cratchits) maintain virtue and dignity while the wealthy (Scrooge) become spiritually deformed through selfishness, Dickens inverts the moral hierarchy of his society. He suggests that wealth without compassion is not success but failure of the highest order. The novel's enduring power lies in its argument that individuals can transform society through choices to exercise social responsibility, and that such transformation is both spiritually necessary and morally imperative.`
          }
        ]
      },
      {
        id: 'section-2',
        title: 'Section B: Poetry',
        instructions: 'Answer one question from this section. You should spend approximately 75 minutes on this question. You may choose to write about one poem in detail or compare two poems. You should consider form, language, and the poet\'s methods.',
        questions: [
          {
            id: 'q3',
            questionNumber: 3,
            marks: 48,
            questionText: 'Choose one poem from the anthology. Explore how the poet uses language and form to create meaning. Consider the effects of specific poetic devices such as imagery, rhythm, and word choice.',
            bulletPoints: [
              'Identify your chosen poem clearly, with poet\'s name',
              'Discuss the form of the poem (rhyme scheme, meter, structure)',
              'Analyze specific language choices and imagery',
              'Consider the cumulative effect of the poet\'s techniques'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent understanding of poem and its techniques. Sophisticated analysis of form and language. Detailed discussion of imagery and word choice. Excellent understanding of cumulative effects. Insightful interpretation.

Band 4 (32-39 marks): Clear understanding. Good analysis of form and language. Identifies imagery and word choice effects. Good textual support.

Band 3 (24-31 marks): Adequate understanding. Some analysis of techniques. Basic discussion of effects.

Band 2 (16-23 marks): Limited understanding. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`
          },
          {
            id: 'q4',
            questionNumber: 4,
            marks: 48,
            questionText: 'Compare two poems from the anthology. Explore how both poets present a similar theme or emotion. Consider their language, form, and methods, and evaluate which poem you find more effective in conveying its meaning.',
            bulletPoints: [
              'Clearly identify both poems and poets',
              'Establish the shared theme or emotion',
              'Analyze both poems\' approaches to this theme',
              'Make a judgment about effectiveness'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent comparative analysis. Sophisticated understanding of both poems. Detailed analysis of language and form in each. Perceptive evaluation of effectiveness. Sustained focus on comparison.

Band 4 (32-39 marks): Clear comparison. Good analysis of both poems. Makes connections and differences clear. Reasonable evaluation of effectiveness.

Band 3 (24-31 marks): Adequate comparison. Identifies similarities and differences. Some analysis.

Band 2 (16-23 marks): Limited comparison. Basic points about both poems.

Band 1 (0-15 marks): Minimal response.`
          }
        ]
      }
    ]
  },
  {
    id: 'edexcel-lit-004',
    title: 'Paper 2: 19th Century Novel and Poetry (Jekyll & Hyde + Anthology)',
    board: 'Edexcel',
    subject: 'English Literature',
    duration: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'section-1',
        title: 'Section A: 19th Century Novel',
        instructions: 'Answer one question from this section. You should spend approximately 60 minutes on this question. You should refer closely to the extract provided and to other parts of the novel.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 48,
            questionText: 'Read the extract below from "Dr Jekyll and Mr Hyde" which depicts Jekyll\'s transformation. Explore how Stevenson uses language, sensory imagery, and scientific language to convey both the horror and allure of the transformation.',
            extract: `I felt younger, lighter, happier in body; within I was conscious of a heady recklessness, a current of disordered sensual images running like a millrace through the chambers of my brain; yet the hand of Henry Jekyll... as I lay in bed that morning after the experiment, I was amazed at the violence of imitation. But I had accepted my fate as a chemist accepts the inevitable effect upon the composition of matter. I made my preparations. I purchased at utter risk of my life and fame a great quantity of a particular salt which I knew, by my experiment, to be the last ingredient required; and which I could now recognise by the smell. I was already committed.`,
            markScheme: `Band 5 (40-48 marks): Perceptive analysis of how Stevenson presents the transformation. Sophisticated analysis of language: sensory imagery (heady, current, millrace), juxtaposition of physical and moral change, scientific vocabulary. Excellent understanding of dual perspective - both allure and horror. Shows how this moment reveals Jekyll's psychological state and foreshadows tragedy.

Band 4 (32-39 marks): Clear analysis of language and imagery. Good understanding of sensory effects. Makes connections between scientific language and moral consequences. Good textual support.

Band 3 (24-31 marks): Relevant analysis. Identifies some language techniques and imagery. Basic understanding of transformation's significance.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Stevenson uses strikingly paradoxical language in this extract to convey the allure and horror of Jekyll's transformation simultaneously, employing sensory imagery and scientific vocabulary to suggest that the transformation is simultaneously liberating and enslaving, both chemically inevitable and morally catastrophic.

The language of liberation opens the passage: "I felt younger, lighter, happier in body" - these adjectives create an impression of freedom, rejuvenation, escape from the constraints of middle age and respectability. The rhythm of the three parallel adjectives creates a lyrical quality that makes the transformation initially appealing. Yet Stevenson immediately complicates this with "within I was conscious of a heady recklessness, a current of disordered sensual images running like a millrace through the chambers of my brain."

The shift from physical lightness to moral recklessness is conveyed through language that becomes increasingly uncontrolled. "Disordered sensual images" suggests thoughts that violate the rational, orderly mind that Jekyll has cultivated. The simile "like a millrace" is particularly effective - it evokes powerful, rushing water that cannot be controlled or diverted, suggesting the transformation unleashes forces beyond rational governance. The water that powers a mill typically serves an ordered industrial purpose; here, applied to thought, it suggests chaos breaking through the machinery of civilization.

Stevenson's use of third-person reference - "the hand of Henry Jekyll" - creates a disturbing disassociation. Jekyll observes his own hand as though it belongs to someone else, suggesting that the transformation separates his consciousness from his body. This linguistic dissociation foreshadows the complete splitting that will eventually occur.

The scientific language is crucial to understanding Stevenson's argument about the nature of transformation. Jekyll speaks of "the violence of imitation" and presents himself as "a chemist" who accepts "the inevitable effect upon the composition of matter." This language normalizes and rationalizes what is actually a violation of natural law. The transformation is presented as chemically inevitable, following scientific laws as surely as matter follows physical principles. Yet Stevenson's irony is profound: Jekyll uses scientific rationalism to justify something that is fundamentally irrational and transgressive. The "inevitability" of the chemical reaction mirrors the psychological inevitability of the transformation - once begun, it cannot be stopped.

The final sentence reveals Jekyll's willing complicity in his doom: "I was already committed." The word "committed" operates on multiple levels - committed to the experiment, committed to the path, and potentially committed (as to an asylum) to a fate he cannot escape. The grammatical structure of this short, definitive statement conveys the weight of commitment; there is no way back. Stevenson suggests that Jekyll has made a Faustian bargain, trading control for freedom, rationality for sensation, and ultimately his identity for the satisfaction of his darker impulses.`
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 48,
            questionText: 'Explore how Stevenson presents the theme of duality - the conflict between respectability and forbidden desire - in "Dr Jekyll and Mr Hyde". Consider how different characters perceive Jekyll and Hyde, and how Stevenson uses this to comment on Victorian society.',
            bulletPoints: [
              'How Jekyll\'s respectable persona conflicts with his hidden desires',
              'How others perceive Jekyll and Hyde differently',
              'What Stevenson\'s portrayal suggests about Victorian hypocrisy',
              'The ultimate consequences of attempting to separate good from evil'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent exploration of duality theme. Sophisticated understanding of how Stevenson presents respectability versus desire. Excellent analysis of how different characters perceive Jekyll/Hyde. Perceptive commentary on Victorian hypocrisy and social values. Strong textual support.

Band 4 (32-39 marks): Clear exploration with good analysis. Makes connections between duality and Victorian society. Good understanding of character perspectives. Solid textual references.

Band 3 (24-31 marks): Relevant exploration. Identifies conflicts and contrasts. Some analysis of Victorian context.

Band 2 (16-23 marks): Limited exploration. Basic points about duality.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Stevenson presents duality as the fundamental human condition, using Jekyll and Hyde to argue that the split between respectable public identity and forbidden private desire is not unique to Jekyll but endemic to Victorian society itself. The novel suggests that attempting to maintain this separation - to be entirely respectable while repressing all transgressive impulse - is not virtuous but neurotic and ultimately dangerous.

Jekyll's respectability is presented as armor and prison simultaneously. As a respected physician and gentleman, Jekyll has achieved social standing, professional success, and moral reputation. Yet beneath this facade, he experiences desires he views as shameful and incompatible with his public identity: sexuality, aggression, the impulses toward cruelty that he associates with his darker nature. The tragedy is that Jekyll does not merely experience these impulses but views them as evidence of a fundamentally evil second self rather than as aspects of his unified personality.

Stevenson's genius is showing that others perceive Jekyll and Hyde not as different people but as variations on the same man. Utterson repeatedly comments that Hyde seems "younger" than Jekyll, and indeed, Hyde appears to be Jekyll's repressed younger self - impulsive, sexual, unconstrained by social propriety. The fact that Hyde is physically smaller and somehow "deformed" suggests that Stevenson views him not as objectively evil but as the monstrous creation of Jekyll's self-repression. Hyde is the inevitable result of attempting to excise half of one's humanity.

The different perceptions of Jekyll are revealing. To society, he is a respectable physician and gentleman. To Utterson, he is a mystery - the lawyer senses something conflicted in Jekyll's behavior and grows increasingly suspicious. To Hyde's victims, he is a monster. Yet Stevenson demonstrates through Lanyon's horror and eventual death that the real monster may be the respectable Jekyll who, in his arrogance, believed himself capable of separating his moral nature from his animal instincts. Lanyon's death from witnessing the transformation suggests that the true horror is not the existence of evil impulses but the delusion that one can partition oneself.

Stevenson's commentary on Victorian society is damning. The novel suggests that Victorian respectability is built on systematic hypocrisy - the suppression of human impulses deemed inappropriate for public acknowledgment. Men of means and education were expected to maintain absolute propriety while their actual desires, sexuality, and darker impulses were compartmentalized. Stevenson implies that this cultural demand for compartmentalization does not eliminate the suppressed desires but intensifies them, making them more dangerous and more likely to erupt in violence.

The transformation of Jekyll into Hyde and the eventual dominance of Hyde represents the psychological cost of this sustained hypocrisy. Jekyll's initial ability to control the transformations gradually diminishes; Hyde becomes increasingly dominant. Stevenson suggests that repression cannot be maintained indefinitely - the repressed will return, and with violent force. Jekyll's final confession reveals the tragedy of the duality: he has treated his own shadow self with such revulsion that he cannot integrate it, reabsorb it, or coexist with it. Instead, he chooses death.

The ultimate message is that Stevenson rejects the Victorian attempt to perfect social respectability through the denial of human nature. True integration, psychological wholeness, and moral development require acknowledging and integrating all aspects of oneself, not attempting to split them into separate personas. The novel is both a psychological tragedy and a social critique - a warning that societies built on systematic hypocrisy, where people are forced to hide essential aspects of themselves, create conditions for psychological fragmentation and moral catastrophe.`
          }
        ]
      },
      {
        id: 'section-2',
        title: 'Section B: Poetry',
        instructions: 'Answer one question from this section. You should spend approximately 75 minutes on this question.',
        questions: [
          {
            id: 'q3',
            questionNumber: 3,
            marks: 48,
            questionText: 'Choose one poem from the anthology. Analyze how the poet uses form and language to explore a significant theme or emotion. Consider the effect on the reader of the poet\'s specific choices.',
            bulletPoints: [
              'Clearly identify poem and poet',
              'Discuss the form (meter, rhyme, stanza structure)',
              'Analyze language, imagery, and word choice',
              'Evaluate the overall effect on the reader'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent analysis of form and language. Sophisticated understanding of how technical choices create meaning. Detailed analysis of imagery and word choice. Insightful understanding of reader effect.

Band 4 (32-39 marks): Clear analysis of form and language. Good discussion of technical choices and effects. Solid textual support.

Band 3 (24-31 marks): Adequate analysis. Some discussion of form and language.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`
          }
        ]
      }
    ]
  },
  {
    id: 'edexcel-lit-005',
    title: 'Paper 1: Shakespeare and Post-1914 Literature (An Inspector Calls)',
    board: 'Edexcel',
    subject: 'English Literature',
    duration: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'section-1',
        title: 'Section A: Shakespeare',
        instructions: 'Answer one question from this section. You should spend approximately 45 minutes on this question.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 40,
            questionText: 'Answer on one of the set Shakespeare texts. You should refer closely to the extract provided and to other parts of the play.',
            bulletPoints: [
              'Write about your chosen Shakespeare text',
              'Analyze language and dramatic techniques',
              'Consider characterization and relationships',
              'Discuss the play\'s themes and ideas'
            ],
            markScheme: `Band 5 (32-40 marks): Excellent understanding and analysis. Sophisticated discussion of language, characterization, and thematic significance. Excellent integration of textual references.

Band 4 (24-31 marks): Clear understanding with good analysis. Good discussion of techniques and their effects.

Band 3 (16-23 marks): Adequate understanding. Some analysis of key features.

Band 2 (8-15 marks): Limited understanding. Basic analysis.

Band 1 (0-7 marks): Minimal response.`
          }
        ]
      },
      {
        id: 'section-2',
        title: 'Section B: Post-1914 Literature',
        instructions: 'Answer one question from this section. You should spend approximately 45 minutes on this question. You should refer closely to the extract provided and to other parts of the play.',
        questions: [
          {
            id: 'q2',
            questionNumber: 2,
            marks: 40,
            questionText: 'Read the extract below from An Inspector Calls where Inspector Goole questions Sheila about her role in Eva Smith\'s dismissal. Explore how Priestley uses language, dramatic tension, and Sheila\'s response to reveal character and develop the play\'s themes about social responsibility.',
            extract: `INSPECTOR: Miss Sheila, did you know this girl—Eva Smith?

SHEILA: No—that is—not to know very well.

INSPECTOR: But you knew her?

SHEILA: Yes. Yes, I did know her. She used to work in Milwards.

INSPECTOR: And this girl, Eva Smith, was given the sack—was dismissed from her job there—because of something you did?

SHEILA: [startled]: Me? But I don't see—I didn't—

INSPECTOR: It wasn't a case of the girl exceeding her duties. It wasn't anything to do with the usual sticky-fingered customer or showing off or anything of that kind. It was simply and solely because you were annoyed by the girl's appearance and manner.

SHEILA: [stormily]: Well, she was impertinent to me—

INSPECTOR: In what way was she impertinent?

SHEILA: She—smirked at me—yes, she did—

INSPECTOR: Did she? Are you sure about that?

SHEILA: [less stormily]: I—it isn't a pleasant thing to remember—but she was impertinent—`,
            markScheme: `Band 5 (32-40 marks): Perceptive analysis of how Priestley uses interrogation, language shifts, and dramatic tension. Excellent understanding of Sheila's character development and psychological realism. Sophisticated analysis of how her discomfort reveals the play's themes about social responsibility. Excellent textual analysis showing how the Inspector's questioning technique works.

Band 4 (24-31 marks): Clear analysis of language and dramatic technique. Good understanding of Sheila's character and the themes. Good textual support.

Band 3 (16-23 marks): Relevant analysis. Identifies some techniques. Makes points about character and themes.

Band 2 (8-15 marks): Limited analysis. Basic identification of features.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Priestley uses this interrogation scene to reveal Sheila's capacity for conscience and moral development, employing the Inspector's persistent questioning to strip away her initial defensiveness and reveal the uncomfortable truth about her callous actions. The scene is crucial because Sheila becomes the only family member capable of genuine moral awakening.

The language shifts in this exchange are telling. Sheila's initial response - "No—that is—not to know very well" - shows hesitation and equivocation. The fragmented syntax reflects her discomfort with memory. The Inspector's short, direct questions ("But you knew her?" "And this girl...was dismissed...because of something you did?") use minimal language but maximum effect. His questions are not aggressive but relentlessly logical, each one narrowing the scope for evasion.

Sheila's defensive response - "Well, she was impertinent to me" - attempts to justify her actions through perceived offense. Yet her justification grows progressively weaker. She claims Eva "smirked" at her, but the Inspector's simple question "Did she? Are you sure about that?" forces her to confront the uncertainty of her memory. Her eventual admission - "it isn't a pleasant thing to remember - but she was impertinent" - is psychologically revealing. The acknowledgment that this is "not pleasant to remember" suggests that Sheila's conscience is beginning to function; she is uncomfortable with her past behavior.

Priestley's dramatic technique in this scene is subtle but powerful. Rather than dramatic confrontation, he uses the Inspector's calm, methodical questioning to create tension. The audience watches Sheila gradually realize the implications of her actions - that her petty spite, motivated by nothing more substantial than how a shop girl looked at her, resulted in someone losing their livelihood. Sheila moves from defensive indignation to uncomfortable acknowledgment.

The scene develops Priestley's central theme about social responsibility through Sheila's emotional journey. Initially, she cannot conceive of herself as responsible for Eva's dismissal - in her view, Eva deserved to be sacked for "impertinence." The Inspector's questioning forces her to recognize that Eva was a human being dependent on her job, and that Sheila's actions had serious consequences for someone of lower social status. This marks the beginning of Sheila's moral education. Unlike her father, who refuses to accept responsibility, or her mother, who remains obtuse, Sheila begins to understand the interconnectedness of social classes and the moral implications of her privilege.

Priestley suggests through this scene that responsibility is not primarily a matter of intention but of action and consequence. Sheila did not set out to ruin Eva deliberately, but her casual cruelty had devastating effects. The play uses her growing discomfort as a moral compass - she is beginning to feel shame, and that shame is the catalyst for genuine change. By the play's end, Sheila will be the only family member prepared to accept full responsibility and consider how she might live differently.`
          },
          {
            id: 'q3',
            questionNumber: 3,
            marks: 40,
            questionText: 'Explore how Priestley presents the Inspector\'s role in An Inspector Calls. Consider how he functions as a moral voice and the effect he has on different family members. What does this suggest about Priestley\'s own views on social responsibility?',
            bulletPoints: [
              'The Inspector\'s methods and manner',
              'His effect on each family member',
              'The mystery surrounding his identity',
              'What his role suggests about Priestley\'s social philosophy'
            ],
            markScheme: `Band 5 (32-40 marks): Excellent analysis of the Inspector as moral voice and dramatic device. Sophisticated understanding of his psychological manipulation and its effects on different characters. Excellent analysis of how his ambiguous identity functions. Perceptive discussion of Priestley's social philosophy and critique of capitalism.

Band 4 (24-31 marks): Clear analysis of the Inspector's role. Good understanding of his effects on characters. Makes connections to social responsibility themes.

Band 3 (16-23 marks): Adequate analysis. Identifies the Inspector's methods and their effects.

Band 2 (8-15 marks): Limited analysis. Basic points about the Inspector.

Band 1 (0-7 marks): Minimal response.`
          }
        ]
      }
    ]
  },
  {
    id: 'edexcel-lit-006',
    title: 'Paper 2: 19th Century Novel and Poetry (Great Expectations + Anthology)',
    board: 'Edexcel',
    subject: 'English Literature',
    duration: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'section-1',
        title: 'Section A: 19th Century Novel',
        instructions: 'Answer one question from this section. You should spend approximately 60 minutes on this question. You should refer closely to the extract provided and to other parts of the novel.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 48,
            questionText: 'Read the extract below from Great Expectations where Pip encounters the convict Magwitch in the marshes. Explore how Dickens uses setting, language, and atmosphere to create a powerful first impression and to foreshadow Magwitch\'s later significance to Pip\'s story.',
            extract: `A fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared and growled; and whose teeth chattered in his head as he took me by both arms.

"O! Don't cut my throat, sir," I pleaded in terror. "Pray don't do it!"

"Tell us your name!" said the man. "Quick!"

"Pip, sir."

"Once more," said the man, staring at me. "Give it mouth!"

"Pip. Pip, sir."

"Show me the way up. Quick!" And he limped towards the low church down in the hollow, and the mist had all solemnly risen now, and there was a moon behind it.`,
            markScheme: `Band 5 (40-48 marks): Excellent analysis of how Dickens creates atmosphere and foreshadowing. Sophisticated understanding of language accumulation (catalog of descriptors), setting as reflection of character's state. Excellent analysis of how this first meeting establishes the novel's major themes about social inequality, judgment based on appearance, and redemption. Shows understanding of dramatic irony.

Band 4 (32-39 marks): Clear analysis of setting and language. Good understanding of atmosphere creation. Makes connections to later developments in the novel. Good textual support.

Band 3 (24-31 marks): Relevant analysis. Identifies descriptive techniques and atmospheric effects. Makes some connections to plot.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens uses this first encounter between Pip and Magwitch to establish both the novel's Gothic atmosphere and its central moral concern: the danger of judging people by appearance and social status. The passage demonstrates how environmental hardship is inscribed on the body, and how Pip's first fear-based judgment of Magwitch will later be revealed as tragically inadequate.

The cumulative description of Magwitch's appearance works through exhausting specificity - "no hat, and with broken shoes, and with an old rag tied round his head...soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars." Dickens uses polysyndeton (the repetition of "and") to create an overwhelming catalog of damage and deprivation. Each detail accumulates, suggesting not merely poverty but complete destitution. The marshes have literally destroyed Magwitch's appearance and dignity. Yet Dickens's specificity also creates a paradoxical effect: in detailing the injuries to Magwitch's body, Dickens makes him not a monster but a pitiable figure who has suffered profoundly.

The iron on Magwitch's leg is particularly significant. It immediately identifies him as a convict, someone society has literally shackled. For young Pip, the iron triggers terror; a man in chains is dangerous, criminal, subhuman. Yet the iron also evokes pathos - this man is incarcerated, enslaved by the state, reduced to an animal struggling for survival in the marshes. Dickens invites the reader to feel the contradiction: Magwitch appears monstrous to Pip, yet he is a victim of systematic cruelty.

The setting amplifies the Gothic atmosphere. The opening mist, the "low church down in the hollow," and the moon "behind" the mist create an eerie, liminal space where normal social rules seem suspended. The marshes are neither civilized nor fully wild, and Magwitch appears as a creature of this liminal space - neither fully human nor fully animal, neither lawful nor entirely outlaw. Dickens uses setting to externalize Magwitch's social position as someone outside respectable society.

Magwitch's urgent demand - "Quick!" repeated multiple times - conveys desperation rather than menace. He is not interested in harming Pip but in escaping his pursuers. His command to "Show me the way up" suggests both literal and metaphorical meaning; he needs physical escape but also seeks, however unconsciously, a way toward redemption and social elevation.

The dramatic irony is profound. Young Pip, terrified by Magwitch's appearance, judges him as dangerous and criminal. The novel's entire trajectory becomes a revelation of how wrong this first judgment is. Magwitch, though technically guilty of crime, is revealed to be more morally sensitive and generous than many of the respectable characters Pip encounters. His transformation from frightening convict to beloved benefactor becomes possible precisely because of the novel's insistence that we look beyond appearance and social status to the human reality beneath.

Dickens uses this scene to establish the novel's central concern: that Victorian society's rigid class distinctions and judgment based on appearance do profound damage, both to individuals like Magwitch and to the moral development of characters like Pip. The mist that shrouds both the marshes and Magwitch represents the obscurity imposed by poverty and criminality - it literally obscures clear moral vision. Only by moving beyond first impressions can the truth about Magwitch, and more broadly about human nature, be perceived.`
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 48,
            questionText: 'Explore how Dickens presents the theme of social class and social aspiration in Great Expectations. Consider how Pip\'s desire to become a gentleman reflects the novel\'s critique of Victorian values and class consciousness. How does Dickens use other characters to develop this theme?',
            bulletPoints: [
              'Pip\'s initial shame about his origins and working-class status',
              'The sources of Pip\'s "great expectations" and what this reveals about class',
              'How characters like Magwitch, Estella, and Miss Havisham embody different relationships to class',
              'Dickens\'s final statement about the value of self-improvement versus inherited status'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent, sustained exploration of class as central theme. Sophisticated analysis of Pip's psychology and moral development. Excellent analysis of how supporting characters illuminate the theme. Strong understanding of Dickens's critique of social hierarchy. Excellent contextual awareness of Victorian class obsession.

Band 4 (32-39 marks): Clear exploration with good analysis. Makes connections between Pip's aspirations and social critique. Good analysis of character parallels. Solid textual support.

Band 3 (24-31 marks): Adequate exploration. Identifies class concerns. Some analysis of Pip's development and character contrasts.

Band 2 (16-23 marks): Limited exploration. Basic points about class and aspiration.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens presents social class in Great Expectations not as a fixed or meaningful hierarchy but as a destructive illusion that damages individual moral development and social cohesion. Through Pip's journey from pride in his origins to shame to eventual wisdom, Dickens critiques the Victorian obsession with gentility and inherited status.

Pip's initial shame about his working-class background is presented as a form of moral corruption. As a young boy, Pip is content with his status as the blacksmith's apprentice; he respects Joe and views his future without resentment. Yet once he meets Estella and becomes aware that gentlemen exist in a realm above him, shame infects his consciousness. Estella's casual cruelty - suggesting that Pip's hands are coarse, his manner uncouth - produces in him an agonizing sense of inadequacy. Dickens makes clear that this shame is not innate but socially constructed; Estella, herself damaged by Miss Havisham's twisted training, transmits class consciousness to Pip as a weapon of humiliation.

Pip's "great expectations" originate from a misunderstanding: he assumes his mysterious benefactor is Miss Havisham, intending to make him a gentleman so he can marry Estella. This assumption reveals Dickens's critique of gentility: Pip believes that becoming a gentleman involves acquiring surface refinement - fashionable clothes, polished manner, exclusion from work. In fact, Pip's pursuit of gentility involves abandoning the qualities that made him admirable: his loyalty to Joe, his contentment with honest labor, his natural kindness.

Magwitch's revelation that he, a convict, is Pip's benefactor is the novel's most devastating commentary on class. Pip's "great expectations" come from the lowest possible source; the gentleman Pip has become owes everything to a criminal transported to Australia. This reversal demonstrates that class status is arbitrary and unstable. A convict can achieve financial success through hard work; a gentleman can be morally corrupt. Estella, herself the product of criminal parentage, is revealed to be Pip's equal through birth despite her refined manners. Dickens suggests that "gentlemen" and "convicts" are not ontologically different kinds of beings but individuals differentiated only by social circumstance and individual moral choice.

Miss Havisham embodies the destructive nature of class consciousness. Wealthy enough to be a "lady," she has channeled her wealth into creating a decaying shrine to herself, using Estella as an instrument to exact vengeance on men for her own class-based shame. Her locked room, with its clocks stopped at the moment of her abandonment, represents the way that class obsession can freeze a life into sterility and revenge.

Estella represents those damaged by the class system itself. Neither fully criminal (she is Magwitch's daughter) nor fully genteel (despite her refined training), she cannot find authentic identity or genuine love. Her suffering is produced by Miss Havisham's attempt to instrumentalize her as a class weapon. By the novel's end, Estella remains incomplete, beautiful and socially perfect but emotionally dead. Dickens suggests that those who treat others as means to class advancement destroy both themselves and their victims.

Joe Gargery represents the novel's alternative value system. Honest, loyal, humble, and kind, Joe possesses genuine gentility - the refinement of character that should be more valued than acquired polish. Pip's eventual reconciliation with Joe, and his recognition that Joe is "better than I had thought him," represents his moral education. Pip learns that true gentility is not about appearance or status but about integrity and compassion.

Dickens's final statement about class comes through Pip's realization that his "great expectations" were misguided. The novel does not dismiss the possibility of improvement or aspiration, but it distinguishes between self-improvement through honest education and moral development versus advancement through class climbing and the rejection of one's origins. Pip's greatest achievement is not becoming a gentleman but becoming genuinely good - learning to see beyond social appearances to human worth.

The novel is ultimately both a critique of rigid Victorian class hierarchy and a subtle warning about the dangers of aspiration based on shame. Dickens argues for a society in which birth and status matter less than character, and in which people are valued for their moral qualities rather than their gentility. Magwitch's transformation through love for Pip, and Pip's transformation through suffering and moral awakening, suggest that society's redemption lies in transcending the class system that produces such damaged and limiting identities.`
          }
        ]
      },
      {
        id: 'section-2',
        title: 'Section B: Poetry',
        instructions: 'Answer one question from this section. You should spend approximately 75 minutes on this question.',
        questions: [
          {
            id: 'q3',
            questionNumber: 3,
            marks: 48,
            questionText: 'Choose one poem from the anthology. Explore how the poet uses language and form to convey a particular emotion or idea. Consider the effects of specific poetic techniques on the reader.',
            bulletPoints: [
              'Clearly identify the poem and poet',
              'Discuss the form of the poem (meter, stanza structure, rhyme)',
              'Analyze language choices and their effects',
              'Consider the cumulative emotional or intellectual impact'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent analysis of form and language. Sophisticated understanding of how technical choices create meaning. Detailed analysis of specific techniques and their effects. Excellent understanding of cumulative impact.

Band 4 (32-39 marks): Clear analysis of form and language. Good discussion of techniques. Good textual support. Clear understanding of effects.

Band 3 (24-31 marks): Adequate analysis. Some discussion of form and language techniques.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`
          },
          {
            id: 'q4',
            questionNumber: 4,
            marks: 48,
            questionText: 'Compare two poems from the anthology. Explore how both poets present a similar theme, emotion, or human experience. Evaluate which poem you find more effective in conveying its meaning, referring closely to language and form.',
            bulletPoints: [
              'Clearly identify both poems and poets',
              'Establish the shared theme or experience',
              'Analyze both poems\' treatment with specific textual references',
              'Make a supported judgment about effectiveness'
            ],
            markScheme: `Band 5 (40-48 marks): Excellent comparative analysis. Sophisticated analysis of both poems. Detailed discussion of form and language in each. Perceptive evaluation of effectiveness with clear reasoning.

Band 4 (32-39 marks): Clear comparison with good analysis. Makes meaningful connections and contrasts. Good evaluation of effectiveness.

Band 3 (24-31 marks): Adequate comparison. Identifies similarities and differences. Some analysis.

Band 2 (16-23 marks): Limited comparison. Basic points about both poems.

Band 1 (0-15 marks): Minimal response.`
          }
        ]
      }
    ]
  }
];
