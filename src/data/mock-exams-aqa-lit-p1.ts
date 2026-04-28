// @ts-nocheck
// ─── AQA GCSE English Literature (8702) Paper 1 Mock Exams ──────────────────
// Shakespeare + 19th Century Novel
// 6 mock papers: Macbeth (2), Romeo & Juliet (2), The Tempest (1), Merchant of Venice (1)
// Each: 1h45 (105 min), 64 marks
// Section A: Shakespeare (30+4 marks) | Section B: 19th Century Novel (30 marks)
//
// FABRICATION WARNING (FC20 audit, 2026-04-28):
// Several extracts in this file are quote-collages or paraphrases — NOT verbatim
// Shakespeare / Brontë / Dickens. The Macbeth, Romeo & Juliet, Jane Eyre and
// Great Expectations extracts mix authentic snippets with invented connective
// material and contain wrong-scene attributions. The Christmas Carol Stave 1 &
// Stave 5 extracts are largely accurate but lightly paraphrased. Treat all
// extracts in this file as fabricated practice stimuli; do not cite as
// authentic quotation. Re-source from primary texts before classroom use.

import type { MockExamPaper } from './mock-exams'

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - MACBETH
// ─────────────────────────────────────────────────────────────────────────────

const MACBETH_EXTRACT_1 = `LADY MACBETH: Out, damned spot! out, I say! One, two. Why, then, 'tis time to do't. Hell is murky. Fie, my lord, fie! A soldier and afeard? What need we fear who knows it, when none can call our power to account?

DOCTOR: Do you mark that?

LADY MACBETH: The Thane of Fife had a wife. Where is she now? What, will these hands ne'er be clean? No, no, this hand will rather the multitudinous seas incarnadine, making the green one red.

MACBETH [entering unseen]: How now, what news?

LADY MACBETH: A little water clears us of this deed. How easy is it then! Your constancy hath left you unattended. Hark! I hear the strain of strutting chanticleer cry 'Cock-a-diddle-daw.' Come, come, come, come, give me your hand. What's done cannot be undone. To bed, to bed, to bed!`

const MACBETH_EXTRACT_1_SOURCE =
  "Fabricated practice composition in the style of Shakespeare's Macbeth (Act 5 Scene 1) — NOT verbatim; do not cite"

const MACBETH_EXTRACT_2 = `MACBETH: Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day to the last syllable of recorded time, and all our yesterdays have lighted fools the way to dusty death. Out, out, brief candle! Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more. It is a tale told by an idiot, full of sound and fury, signifying nothing.

Seyton! I am sick when I do see— but, soft! Thou com'st to use thy tongue; thy story quickly. What's the boy Malcolm? Was he not born of woman? The spirits that know all mortal consequences have deceived me. 'Pull thy hat upon thy brows; give thee that, which claps thee to the pole, and I will fight, till from my bones my flesh be hack'd.'`

const MACBETH_EXTRACT_2_SOURCE =
  "Fabricated practice composition in the style of Shakespeare's Macbeth (Act 5 Scene 5) — NOT verbatim; do not cite"

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - ROMEO & JULIET
// ─────────────────────────────────────────────────────────────────────────────

const ROMEO_JULIET_EXTRACT_1 = `ROMEO: What light through yonder window breaks? It is the east, and Juliet is the sun. Arise, fair sun, and kill the envious moon, who is already sick and pale with grief, that thou, her maid, art far more fair than she. Be not her maid, since she is envious. Her vestal livery is but sick and green; and none but fools do wear it. Cast it off! It is the nightingale and not the lark that pierced the fearful hollow of thine ear; nightly she sings on yon pomegranate-tree. Believe me, love, it was the lark, the herald of the morn, no nightingale. Look, love, what envious streaks do lace the severing clouds in yonder east.`

const ROMEO_JULIET_EXTRACT_1_SOURCE =
  "Fabricated practice composition in the style of Shakespeare's Romeo and Juliet (Act 2 Scene 2) — NOT verbatim; do not cite"

const ROMEO_JULIET_EXTRACT_2 = `JULIET: O Romeo, Romeo! wherefore art thou Romeo? Deny thy father and refuse thy name; or, if thou wilt not, be but sworn my love, and I'll no longer be a Capulet.

ROMEO [stepping forward]: Shall I hear more, or shall I speak at this?

JULIET: 'Tis but thy name that is my enemy; thou art thyself, though not a Montague. What's in a name? That which we call a rose by any other name would smell as sweet; so Romeo would, were he not Romeo call'd, retain that dear perfection which he owes without that title. Romeo, doff thy name, and for that name which is no part of thee, take all myself.`

const ROMEO_JULIET_EXTRACT_2_SOURCE =
  "Fabricated practice composition in the style of Shakespeare's Romeo and Juliet (Act 2 Scene 2) — NOT verbatim; do not cite"

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - THE TEMPEST
// ─────────────────────────────────────────────────────────────────────────────

const TEMPEST_EXTRACT_1 = `PROSPERO: Our revels now are ended. These our actors, as I foretold you, were all spirits and are melted into air, into thin air: and, like the baseless fabric of this vision, the cloud-capp'd towers, the gorgeous palaces, the solemn temples, the great globe itself, yea, all which it inherit, shall dissolve and, like this insubstantial pageant faded, leave not a rack behind. We are such stuff as dreams are made on, and our little life is rounded with a sleep.

[To Ferdinand and Miranda]

Sir, I am vex'd; bear with my weakness; my old brain is troubled: be not disturb'd with my infirmity. If you be pleased, retire into my cell and there repose. A turn or two I'll walk, to still my beating mind.`

const TEMPEST_EXTRACT_1_SOURCE =
  "Practice composition based on Shakespeare's The Tempest (Act 4 Scene 1) — verify wording against primary source before citing"

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - MERCHANT OF VENICE
// ─────────────────────────────────────────────────────────────────────────────

const MERCHANT_EXTRACT_1 = `SHYLOCK: I am not merry; but I do beguile the thing I am by seeming otherwise. And such a want-wit sadness makes of me that I have much ado to know myself. [To Antonio] You call me misbeliever, cut-throat dog, and spit upon my Jewish gabardine, and all for use of that which is mine own. Well then, it now appears you need my help: go to, then; you come to me, and you say 'Shylock, we would have moneys:' you say so; you, that spurn'd me such a day; another time you call'd me dog; and for these courtesies I'll lend you thus much moneys?

[Pauses]

Hath a dog money? Is it possible a cur can lend three thousand ducats? Or shall I bend low and in a bondsman's key, with 'bated breath and whispering humbleness, say thus: 'Fair sir, you spat on me on Wednesday last.'`

const MERCHANT_EXTRACT_1_SOURCE =
  "Practice composition combining lines from Shakespeare's Merchant of Venice (Act 1 Sc 3 + Act 3 Sc 1) — verify before citing"

// ─────────────────────────────────────────────────────────────────────────────
// 19TH CENTURY NOVEL EXTRACTS - A CHRISTMAS CAROL
// ─────────────────────────────────────────────────────────────────────────────

const CAROL_EXTRACT_1 = `Scrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did not die, he was a second father. He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world. Some people laughed to see the alteration in him, but he let them laugh, and little heeded them; for he was wise enough to know that nothing ever happened on this globe, for good or for evil, but some person is always on hand to greet it either in mockery or genuine tears.`

const CAROL_EXTRACT_1_SOURCE =
  'Lightly paraphrased from Dickens, A Christmas Carol, Stave 5 — verify wording before citing'

const CAROL_EXTRACT_2 = `"Are there no prisons?" asked Scrooge. "And the Union workhouses? Are they still in operation?" "They are. Still," returned the gentleman, "I have found them what I hoped I should find them; yet I cannot say that all the changes of which I have heard, have come to pass." "But those who would rather die than go there—" "If they would rather die," said Scrooge, "they had better do it, and decrease the surplus population."

He spoke these words with careless indifference, and then turned his attention to his ledger. The gentleman was shocked by such callousness, and sought to explain the misery of the poor; but Scrooge was unmoved.`

const CAROL_EXTRACT_2_SOURCE =
  'Lightly paraphrased from Dickens, A Christmas Carol, Stave 1 — verify wording before citing'

// ─────────────────────────────────────────────────────────────────────────────
// 19TH CENTURY NOVEL EXTRACTS - JANE EYRE
// ─────────────────────────────────────────────────────────────────────────────

const JANE_EYRE_EXTRACT_1 = `I would always rather be happy than dignified. I am not so ambitious as you are—I do not live for the love of power or the esteem of others. I love—I have loved myself—I have given my heart to the man whom you do not allow me to name. I would rather be his mistress than the wife of any other man in the world. But do not fear—I am not of the revelling kind; I have always been accustomed to look after myself; I shall marry him with the consent of those with whom I have always lived, or I shall not marry him at all. I will not enter into an engagement with him while you live, if your objections are founded on anything but prejudice.`

const JANE_EYRE_EXTRACT_1_SOURCE =
  "Fabricated practice composition in the style of Brontë's Jane Eyre — NOT verbatim; do not cite"

const JANE_EYRE_EXTRACT_2 = `I am no bird; and no net ensnares me: I am a free human being with an independent will; which I now exert to leave you.

I felt as if this phrase was spoken by my heart as well as my lips. It vibrated through my whole frame, and gave me courage and vigour. I was no longer afraid; I was no longer ashamed. I felt as if an awful charm was framing round and gathering over me. I seemed to be surrounded by a wall, and to be sinking slowly into an abyss. But I was not afraid. I recovered myself—I became composed—I took measures.`

const JANE_EYRE_EXTRACT_2_SOURCE =
  "Practice composition based on Brontë's Jane Eyre Ch. 27 — opening line authentic; remainder paraphrased; verify before citing"

// ─────────────────────────────────────────────────────────────────────────────
// 19TH CENTURY NOVEL EXTRACTS - GREAT EXPECTATIONS
// ─────────────────────────────────────────────────────────────────────────────

const GREAT_EXPECTATIONS_EXTRACT_1 = `I am not at all in a humour for talking. I wonder what's o'clock? asked Estella. It was half-past eight. Do you want to go back? I replied. That's a needless question, said Estella, with that quick, bright, determined manner. Why do you ask me again and again? Do you expect me to change my mind? I have told you already. I am as decided as any man or woman of strong will can be.

Pip saw in her eyes a reflection of his own yearning heart, yet she remained distant, untouchable, like a figure behind glass. The hope that had sustained him for years seemed suddenly fragile, threatened by her indifference.`

const GREAT_EXPECTATIONS_EXTRACT_1_SOURCE =
  "Fabricated practice composition in the style of Dickens's Great Expectations — NOT verbatim; do not cite"

const GREAT_EXPECTATIONS_EXTRACT_2 = `It was a year ago when I first knew Miss Havisham. I was sent to her as an orphan boy, and she received me with cold civility. The house was dark and the clocks were stopped. Everything was exactly as it had been on that day years before when she received the news that her lover had abandoned her at the altar. She had never left the house. She had never allowed the dust to be disturbed, nor the cobwebs to be cleared.

I had thought that such seclusion would have broken her spirit entirely, but it had only hardened her, turned her heart to stone.`

const GREAT_EXPECTATIONS_EXTRACT_2_SOURCE =
  "Fabricated practice composition in the style of Dickens's Great Expectations — NOT verbatim; do not cite"

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTION TO CREATE PAPER 1
// ─────────────────────────────────────────────────────────────────────────────

const createPaper1Exam = (
  setNumber: number,
  shakespeareTitle: string,
  shakespeareExtract: string,
  shakespeareSource: string,
  novelTitle: string,
  novelExtract: string,
  novelSource: string,
): MockExamPaper => {
  const nn = String(setNumber).padStart(2, '0')
  return {
    id: `aqa-lit-p1-${nn}`,
    board: 'AQA',
    paperNumber: 1,
    title: 'AQA English Literature Paper 1',
    subtitle: 'Shakespeare and 19th Century Novel',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: `aqa-lit-p1-${nn}-shakespeare`,
        title: `Section A: Shakespeare – ${shakespeareTitle} (34 marks)`,
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer. Refer to both the extract and elsewhere in the play.',
        totalMarks: 34,
        suggestedTimeMinutes: 52,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q1`,
            questionNumber: 1,
            questionText:
              shakespeareTitle === 'Macbeth'
                ? 'Analyse how Shakespeare presents the effects of guilt and ambition on human psychology. In your answer, refer to the extract and to elsewhere in the play.'
                : shakespeareTitle === 'Romeo and Juliet'
                  ? 'Analyse how Shakespeare uses language to convey romantic love and desire. Refer to the extract and to elsewhere in the play.'
                  : shakespeareTitle === 'The Tempest'
                    ? 'Analyse how Shakespeare explores the themes of control, forgiveness, and transformation. Refer to the extract and to elsewhere in the play.'
                    : 'Analyse how Shakespeare presents prejudice, mercy, and the conflict between law and compassion. Refer to the extract and to elsewhere in the play.',
            marks: 30,
            suggestedTimeMinutes: 45,
            questionType: 'analysis',
            extract: shakespeareExtract,
            extractSource: shakespeareSource,
            modelAnswers: {
              'Grade 5': `In this extract, ${
                shakespeareTitle === 'Macbeth'
                  ? 'Lady Macbeth shows the psychological effects of committing murder. She cannot clean the blood from her hands, even though they are not actually dirty. She says "What, will these hands ne\'er be clean?" which shows she is traumatized. Earlier in the play she seemed confident and told Macbeth "A little water clears us of this deed," but now she is obsessed with cleaning her hands. This shows that her mind has been damaged by guilt. The repetition of "no, no" shows her desperation and her loss of control. Shakespeare suggests that crime destroys people mentally.'
                  : shakespeareTitle === 'Romeo and Juliet'
                    ? 'Romeo uses beautiful language to describe his love for Juliet. He compares her to the sun: "It is the east, and Juliet is the sun." This shows he thinks she is bright and beautiful. He uses imagery of light and heat to show the strength of his feelings. When he says "arise, fair sun," he is commanding her attention, showing how important she is to him. The language is romantic and shows deep feeling. Later in the scene, Juliet asks "What\'s in a name?" which suggests that names and families don\'t matter compared to love. Shakespeare shows that romantic love is powerful and makes people express themselves beautifully.'
                    : shakespeareTitle === 'The Tempest'
                      ? 'Prospero realizes that everything is temporary and unreal. He says "Our revels now are ended" and compares life to a dream. He tells us that even great palaces and temples will "dissolve" and disappear. This suggests he has learned that power and control are illusions. He also shows he is tired and wants to rest, which shows he has changed from being controlling. The language about dreams and dissolution shows that Prospero is learning to accept that he cannot control everything. Shakespeare suggests that accepting the temporary nature of life is important for peace.'
                      : 'Shylock explains how Antonio and the other Christians have treated him badly. He asks "Hath a dog money?" to show how they have insulted him by treating him as less than human. He describes the prejudice he has suffered when they "spat" on him and called him names. Yet when he needs help, they come to him for money. This shows the hypocrisy of the Christians who despise him but use him. Shylock\'s speech reveals his pain and anger at being treated as inferior because of his religion. Shakespeare shows that prejudice causes deep harm.'
              }`,
              'Grade 7': `In this extract, ${
                shakespeareTitle === 'Macbeth'
                  ? 'Lady Macbeth\'s sleepwalking scene reveals how the human psyche registers and processes guilt as a form of psychological splitting. She speaks as if awake but is unconscious, suggesting that guilt operates at levels beneath conscious control. The blood she obsesses over is simultaneously real (the blood of Duncan) and imaginary—"What, will these hands ne\'er be clean?"—which indicates a collapse between material fact and psychological reality. Her earlier rationalization—"A little water clears us of this deed"—is grotesquely inverted: no amount of physical cleansing can erase the psychological stain. The fragmented syntax and repetitive language ("no, no") reveal a mind fractured by the weight of conscience. Shakespeare\'s treatment suggests that ambition, when realized through murder, produces not triumph but a psychological disintegration that eventually becomes uncontrollable. The contrast between her initial confidence and present madness demonstrates that guilt progressively undermines mental stability.'
                  : shakespeareTitle === 'Romeo and Juliet'
                    ? 'Shakespeare\'s language in the balcony scene employs celestial imagery to articulate the transcendent nature of romantic desire. The equation of Juliet with the sun—"It is the east, and Juliet is the sun"—functions as a conceit that elevates human love to cosmic significance. The astronomical language transforms personal emotion into something universal and eternal. Romeo\'s imperative "Arise, fair sun" positions him as a supplicant to her radiance, inverting conventional hierarchies of masculine power. The language moves from external description to intimate address, mirroring the psychological movement from voyeurism to recognition. When Juliet poses the rhetorical question "What\'s in a name?", she articulates an argument for essential identity beneath social categorization—names are arbitrary signs, but the person beneath the name is absolute. The language suggests that romantic love operates as a force that dissolves social boundaries and legal categories. Shakespeare presents passion as a mode of transcendence that exceeds the rational order represented by the feud.'
                    : shakespeareTitle === 'The Tempest'
                      ? 'Prospero\'s speech constitutes a profound meditation on the illusory nature of power and control, rendered through the central metaphor of theater. The phrase "Our revels now are ended" signals not merely the conclusion of the masque but a recognition that all human endeavor is ultimately ephemeral. The successive dissolutions—"baseless fabric," "cloud-capp\'d towers," "gorgeous palaces"—enact a philosophical movement from the particular to the universal, culminating in the acknowledgment that "all which it inherit shall dissolve." This is not merely pessimism but a form of philosophical wisdom: the recognition of impermanence liberates one from the illusion of control. Prospero\'s subsequent admission of "vexation" and "weakness" demonstrates that this wisdom is accompanied by emotional acceptance rather than bitter resignation. The language shifts from grand cosmological pronouncements to intimate vulnerability, suggesting that true power consists in accepting limitation rather than exercising dominion. Shakespeare presents renunciation of control as a form of spiritual maturity.'
                      : 'Shylock\'s speech performs a crucial rhetorical inversion: he forces the Christians to confront the contradiction between their treatment of him and their present need. The question "Hath a dog money?" is not merely sarcastic but ontological—it questions whether Jewish identity permits access to full humanity and economic agency within Christian Venice. The anaphoric repetition of affronts—"you call me misbeliever, cut-throat dog... you spat on me"—catalogues a history of systematic dehumanization. Yet paradoxically, despite this exclusion, they come to him for financial assistance, revealing the underlying economic dependence that their social prejudice attempts to deny. The language moves from accusation to a form of twisted courtesy—"with bated breath and whispering humbleness"—which exposes the performative nature of Christian civility. Shakespeare suggests that prejudice is both a psychological and economic phenomenon: it justifies the extraction of value from those constructed as inferior. Shylock\'s speech reveals the internal contradictions of a social order that simultaneously denies the full humanity of Jewish subjects while depending on their economic participation.'
              }`,
              'Grade 9': `In this extract, ${
                shakespeareTitle === 'Macbeth'
                  ? "Lady Macbeth's sleepwalking constitutes a profound dramatization of how guilt operates as a force that dissolves the distinction between conscious and unconscious registers. The somnambulistic condition—awake yet asleep—literalizes a state of psychic fragmentation wherein rationalization and conscience are at war. Her earlier assertion that \"A little water clears us of this deed\" articulates a proto-Freudian repression: the attempt to displace psychological recognition onto a material and thus manageable plane. Yet the return of the repressed occurs precisely in sleep, when the ego's defensive structures are dismantled. The blood becomes simultaneously literal (Duncan's blood) and symbolic (the indelible mark of transgression), suggesting that Shakespeare understands guilt as a phenomenon operating across multiple registers of reality. The obsessive focus on the hand—that instrument of agency through which the murder was technically accomplished—reveals how guilt attaches itself to the body as the site of moral accountability. Her descent from confident strategist to fractured consciousness demonstrates Shakespeare's understanding that moral violations produce irreversible psychological consequences. The play suggests that while Macbeth achieves a deadened affect that permits continued action, Lady Macbeth's conscience remains acutely functional, producing the fragmentation we witness. Shakespeare thus presents guilt not as an external punishment but as an internal derangement of consciousness itself."
                  : shakespeareTitle === 'Romeo and Juliet'
                    ? "The balcony scene's language constitutes an extraordinary articulation of desire as a transcendent force that operates beyond the rational constraints of social order. The astronomical conceits—Juliet as sun, the equation of love with cosmic light—function not as mere metaphorical decoration but as a linguistic technology through which individual passion is universalized. The language systematically dismantles hierarchies: Juliet, conventionally subject to paternal authority, becomes the celestial center around which Romeo's universe rotates. The shift from Romeo's voyeuristic address to Juliet's conscious response enacts a crucial transformation: from masculine subject to mutual recognition. When Juliet asks \"What's in a name?\", she performs an ontological critique: names are arbitrary linguistic signs bearing no necessary relation to essential identity. This implies that the social categories governing Montague/Capulet identity are similarly arbitrary and thus potentially transcendable through the force of authentic feeling. Yet the play's subsequent tragic trajectory retrospectively ironizes this linguistic faith in the capacity of desire to overcome social determination. Shakespeare presents romantic love as simultaneously real in its intensity and delusional in its assumption that subjective feeling can transcend objective social structures. The play thus articulates both the reality of passion and its vulnerability to institutional violence."
                    : shakespeareTitle === 'The Tempest'
                      ? 'Prospero\'s speech articulates a philosophical position that synthesizes Stoic acceptance of cosmic indifference with a recognition of the illusory nature of human power and intention. The metatheatrical conceit—life as a play, humans as actors—operates on multiple registers simultaneously: it acknowledges the artificiality of dramatic representation while simultaneously suggesting that this artificiality mirrors the fundamental ontological condition of human existence. The progression from particular structures ("cloud-capp\'d towers") to universal dissolution ("leave not a rack behind") enacts a phenomenological reduction wherein all differentiated forms collapse into undifferentiated emptiness. Crucially, this is not presented as tragic but as liberatory: the recognition that we are "such stuff as dreams are made on" releases one from the burden of permanence and control. Prospero\'s acknowledgment of his own "infirmity"—his inability to sustain the theatrical illusion—demonstrates his incorporation of this philosophical wisdom into lived experience. The final movement toward the "cell" and rest suggests that acceptance of limitation constitutes a form of power that transcends the coercive magic he has wielded throughout the play. Shakespeare presents renunciation not as defeat but as the highest wisdom: the recognition that true sovereignty consists in accepting one\'s fundamental powerlessness.'
                      : 'Shylock\'s speech performs a complex rhetorical and philosophical intervention in the play\'s central questions about identity, value, and personhood. The question "Hath a dog money?" operates on multiple registers: it is sarcastic (dogs literally cannot possess money), but it also questions whether those constructed as animal/subhuman can participate in the symbolic economy of value. The catalog of affronts—positioned as the historical precondition for the present request—reveals how prejudice produces a perverse dynamic wherein economic value is extracted from those denied full social humanity. The anaphoric repetition enacts a performative accumulation of grievance that threatens to overflow the contained legal form of the contract. Yet Shylock\'s final decision to demand his "pound of flesh" rather than monetary compensation suggests that his excluded status from the economy of value-exchange drives him toward a symbolic retribution that can only manifest as bodily violence. Shakespeare reveals prejudice as not merely a matter of attitude but as a structural feature of Venetian society that simultaneously requires Jewish capital for economic functioning while denying Jewish subjects the dignity of full personhood. The play thus stages the violent consequences of systematic dehumanization, suggesting that a society that constructs entire populations as less than human necessarily produces the conditions for catastrophic conflict.'
              }`,
            },
            markScheme: [
              'Analyses language, form and dramatic technique with sustained reference to the extract',
              'Makes well-integrated references to elsewhere in the play',
              'Develops interpretations of the specified theme',
              'Uses subject terminology accurately and appropriately',
              'Constructs clearly developed analytical points with close textual support',
              'Grade 7: Sophisticated analysis of how technique creates meaning; considers alternative interpretations',
              'Grade 9: Penetrating critical analysis; explores philosophical and thematic complexity; considers historical/cultural contexts',
            ],
          },
          {
            id: `aqa-lit-p1-${nn}-q1-unseen`,
            questionNumber: 1,
            questionText:
              'How does Shakespeare use this passage to develop key character traits or themes? (AO4: 4 marks)',
            marks: 4,
            suggestedTimeMinutes: 7,
            questionType: 'short-answer',
            extract: shakespeareExtract,
            extractSource: shakespeareSource,
            modelAnswers: {
              'Grade 5':
                'Shakespeare shows that the character is troubled and confused. The language is fragmented and repetitive, which shows they cannot think clearly. This develops the theme of guilt/love/power.',
              'Grade 7':
                "Through disrupted syntax and obsessive repetition, Shakespeare reveals psychological fragmentation. The language enacts the internal turmoil that defines the character at this moment, advancing the play's exploration of conscience/desire/ambition.",
              'Grade 9':
                "Shakespeare's syntactical disintegration and repetitive imperatives literalize consciousness under extreme psychological pressure. This formal dissolution both expresses and productively complicates the thematic exploration of agency, guilt, and the limits of rational control.",
            },
            markScheme: [
              'Identifies relevant technique(s)',
              'Explains effect on audience or character development',
              'Supports with textual reference',
              'Grade 7+: Makes interpretive connection to broader theme',
            ],
          },
        ],
      },
      {
        id: `aqa-lit-p1-${nn}-novel`,
        title: `Section B: 19th Century Novel – ${novelTitle} (30 marks)`,
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer. Refer to both the extract and elsewhere in the novel.',
        totalMarks: 30,
        suggestedTimeMinutes: 53,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q2`,
            questionNumber: 2,
            questionText:
              novelTitle === 'A Christmas Carol'
                ? 'Analyse how Dickens uses the transformation of Scrooge to explore the themes of redemption and social responsibility. Refer to the extract and elsewhere in the novella.'
                : novelTitle === 'Jane Eyre'
                  ? "Analyse how Brontë presents the tension between social convention and individual autonomy through Jane's character and choices. Refer to the extract and elsewhere in the novel."
                  : "Analyse how Dickens uses Pip's desire for self-improvement to explore the themes of ambition, class, and identity. Refer to the extract and elsewhere in the novel.",
            marks: 30,
            suggestedTimeMinutes: 53,
            questionType: 'analysis',
            extract: novelExtract,
            extractSource: novelSource,
            modelAnswers: {
              'Grade 5': `${
                novelTitle === 'A Christmas Carol'
                  ? 'Scrooge\'s transformation shows how people can change and become better. At the start of the novella, he is selfish and unkind. He refuses to give money to poor people and pays Bob Cratchit very little. He even says that if the poor would rather die, they should "decrease the surplus population." But after the spirits visit him, he changes completely. The extract shows he "became as good a man, as the good old city knew" and he helps Tiny Tim. He also gives Bob Cratchit a raise. This shows that Scrooge has learned about social responsibility and realizes he must help others. Dickens uses Scrooge\'s story to show readers that even selfish people can change and that everyone has a duty to help society.'
                  : novelTitle === 'Jane Eyre'
                    ? 'Jane refuses to obey society\'s rules when they conflict with her own values. She tells Rochester "I am no bird; and no net ensnares me: I am a free human being with an independent will." This shows she will not accept the expectations that women have no power or choice. She decides she wants to be with Rochester, not to become a governess or governante. However, she also says she will only marry him "with the consent of those with whom I have always lived." This shows that while Jane wants independence, she also respects tradition and morality. Brontë presents the conflict between what Jane wants for herself and what society expects of her. Jane\'s character shows that women can be independent and strong-willed.'
                    : "Pip loves Estella and wants to become a gentleman to impress her, but she treats him coldly and with indifference. The extract shows how Estella is determined and strong-willed, but also distant from Pip. His desire to improve himself and become wealthy is motivated by his love for her and his shame at being a blacksmith's apprentice. However, Dickens suggests that Pip's ambition might be based on false values. By making Pip yearn for someone who doesn't care about him, Dickens shows that the pursuit of wealth and status can be misguided. Great Expectations explores whether self-improvement based on romantic desire or social climbing is genuine or hollow."
              }`,
              'Grade 7': `${
                novelTitle === 'A Christmas Carol'
                  ? "Dickens constructs Scrooge's redemption as a complete philosophical reversal. His initial economic philosophy—that the poor should \"decrease the surplus population\" if they prefer death to the workhouse—articulates a rationalization of indifference as necessity. Scrooge's transformation moves him from this utilitarian logic to an ethic of social responsibility. The extract emphasizes that Scrooge's change is not merely sentimental but actively productive: he becomes \"a second father\" to Tiny Tim and materially improves Bob Cratchit's condition. Significantly, the novella suggests that redemption requires sustained moral vigilance—Scrooge must repeatedly rehearse his former self to prevent regression. Dickens's narrative strategy implies that moral transformation is possible but requires confrontation with one's earlier values and commitment to behavioral change. The emphasis on Scrooge's practical actions—the turkey, the wages—rather than merely internal feeling demonstrates that redemption must be socially manifest. By making Scrooge's change contingent on the intervention of supernatural spirits, Dickens paradoxically suggests both that moral transformation is difficult (requiring literal supernatural intervention) and that it is possible (if conditions permit)."
                  : novelTitle === 'Jane Eyre'
                    ? 'Brontë presents the tension between individual autonomy and social constraints as the fundamental problem animating Jane\'s narrative. Her assertion "I am no bird; and no net ensnares me" performs a linguistic reclamation of agency through metaphor—she repositions herself as a free agent rather than a confined property. Yet the extract simultaneously reveals the internalization of social convention: Jane insists she will marry only "with the consent of those with whom I have always lived," suggesting that her autonomy operates within limits she has internalized. The psychological movement from defiant declaration to conditional acceptance reveals how patriarchal ideology functions not merely through external coercion but through the subject\'s own incorporation of restrictive norms. Brontë\'s narrative technique—allowing Jane direct access to first-person declaration—positions the reader to experience the authenticity of her desire alongside the constraints that limit it. The novel thus presents individual will as real and powerful yet always already embedded within social structures that constrain its possibilities. Jane\'s journey enacts a negotiation between the imperatives of autonomy and the unavoidable reality of social embeddedness.'
                    : "Dickens uses Pip's yearning for Estella as a vehicle through which to critique the ideology of self-improvement that animated Victorian society. Estella's studied indifference and her explicit disavowal of emotional connection—\"I have told you already. I am as decided as any man or woman of strong will can be\"—reveal the impossibility of the fantasy that drives Pip's ambition. His desire to become a gentleman is predicated on the assumption that social elevation will win affection from someone constitutionally incapable of it. By positioning the object of desire as fundamentally unobtainable and emotionally unavailable, Dickens suggests that Pip's ambition is built on illusory foundations. The extract's cold precision—Estella's repetitive, almost mechanical declarations—suggests that her character has been formed by Miss Havisham's manipulation into an instrument of emotional cruelty. Pip's great expectations, then, are predicated not on authentic self-development but on a pathological attachment to an unattainable and damaged other. Dickens implies that the pursuit of wealth and status, when motivated by romantic delusion, produces only disillusionment."
              }`,
              'Grade 9': `${
                novelTitle === 'A Christmas Carol'
                  ? "Dickens's representation of redemption engages with contemporary debates about the possibility of moral regeneration within capitalist society. Scrooge's initial position articulates a sophisticated utilitarian logic: the poor are economically unproductive and thus their death would constitute a solution to overpopulation. His transformation does not merely involve sentiment but a complete recalibration of his understanding of economic and moral value. The extract's insistence that \"nothing ever happened on this globe, for good or for evil, but some person is always on hand to greet it\" articulates a vision of moral interconnection wherein individual actors inevitably participate in collective historical processes. This philosophical reframing—from individualist economics to collective responsibility—structures Scrooge's redemption. Significantly, the novella suggests that such transformation requires a kind of violence (the Spirits' pedagogical assault) rather than rational persuasion. This implies that moral change within capitalist ideology requires a rupture with the very logic that constitutes capitalist subjectivity. The emphasis on Scrooge's active reintegration into social life—his transformation from miser to philanthropist—suggests that true redemption is inseparable from economic redistribution and material care for others. By making Scrooge's transformation simultaneously individual and social, psychological and economic, Dickens articulates a critique of laissez-faire ideology while maintaining faith in the possibility of ethical regeneration."
                  : novelTitle === 'Jane Eyre'
                    ? "Brontë's narrative construction presents individual autonomy and social constraint as dialectically related rather than simply opposed. Jane's assertion of will—\"I am a free human being with an independent will\"—operates not outside social discourse but within and against it. Her insistence on marriage based on mutual love rather than economic necessity represents a philosophical repositioning of women's agency within patriarchal structures. Yet the extract's concluding gesture—that she will accept marriage only \"with the consent of those with whom I have always lived\"—reveals the inescapability of social authorization. Brontë suggests that even authentic autonomy must achieve social recognition and consent. This is not a capitulation to patriarchal ideology but a sophisticated understanding that individual agency is always relational and interdependent. The novel's overarching narrative arc—Jane's journey from oppression through wandering to a form of equality with Rochester—enacts a philosophical argument: that genuine autonomy requires not the illusory fantasy of independence but the construction of relationships based on mutual recognition and respect. By refusing both pure subjection and pure independence, Brontë articulates a complex vision of selfhood as necessarily social and political. Jane's final position—married but an equal partner, claiming authority within the domestic sphere—represents not a retreat from autonomy but its reconfiguration within realistic social parameters."
                    : "Dickens's treatment of Pip's ambition constitutes a penetrating critique of Victorian ideology of self-improvement and social mobility. The phrase \"great expectations\" itself becomes ironic: the expectations Pip harbors are predicated on delusion rather than authentic self-development. Estella's character—formed by Miss Havisham's deliberate cultivation of emotional coldness—reveals how individual subjectivity is constituted through others' manipulative interventions. Pip's love for her is thus a kind of colonization by trauma that is not his own. By making the object of desire fundamentally damaged and incapable of reciprocation, Dickens suggests that capitalism does not merely fail to deliver on its promises of social elevation but actively produces pathological forms of desire in those who pursue it. The novel's insistence on returning Pip to his origins, reconnecting him with Joe and understanding that his \"great expectations\" were a mistake, implies that authentic self-development requires acknowledging dependence, gratitude, and the fundamental value of relationships that cannot be instrumentalized for social gain. The revelation that Magwitch, not Miss Havisham, is Pip's benefactor further complicates the narrative of self-improvement: Pip's elevation has been purchased through criminal transgression and enforced servitude. By making Pip's social ascent complicit with systemic violence and exploitation, Dickens articulates a fundamental critique of the ideology of meritocracy. True growth, the novel suggests, requires renouncing the fantasy of autonomous self-creation and recognizing one's implication in networks of interdependence and obligation."
              }`,
            },
            markScheme: [
              'Analyses language and narrative technique with sustained reference to the extract',
              'Makes well-integrated references to elsewhere in the novel',
              'Develops interpretations of the specified theme(s)',
              'Uses subject terminology accurately',
              'Constructs clearly developed analytical points with close textual support',
              'Grade 7: Sophisticated analysis of how technique serves thematic purposes; considers ambiguities',
              'Grade 9: Penetrating analysis of ideological and philosophical implications; engages with literary and historical contexts',
            ],
          },
        ],
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT ALL PAPERS (Complete version below)
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// EXPANDED ASSESSMENT GUIDANCE & GRADING COMMENTS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * PAPER 1 ASSESSMENT GUIDANCE
 *
 * SECTION A: SHAKESPEARE ANALYSIS (34 marks total)
 * - Question 1 (30 marks): Extended analysis essay
 *   * Candidates must analyse language, form, and dramatic technique
 *   * Reference the extract and cite elsewhere in the play
 *   * Develop sustained interpretations connected to theme
 *   * Use subject terminology accurately (metaphor, soliloquy, dramatic irony, personification, imagery, etc.)
 *
 * - Question 1 AO4 (4 marks): Contextual/short response
 *   * Brief analysis of how passage develops character/theme
 *   * Concise textual support
 *   * Consider historical/cultural contexts if relevant
 *
 * MARK DISTRIBUTION FOR Q1 (30 marks):
 * 27-30: Grade 9 - Sophisticated critical analysis; original interpretations; mastery of terminology
 * 24-26: Grade 8 - Perceptive analysis; sustained comparison; complex understanding of form/meaning
 * 21-23: Grade 7 - Clear analytical points; good use of evidence; secure understanding
 * 18-20: Grade 6 - Sound analysis; adequate support; generally secure understanding
 * 15-17: Grade 5 - Reasonable analysis; some developed points; generally accurate
 * 12-14: Grade 4 - Basic analysis; limited explanation; mostly accurate
 * Below 12: Grade 3 or lower
 *
 * KEY ASSESSMENT CRITERIA:
 * 1. Analysis vs. Narrative: Avoid plot summary; focus on technique and effect
 * 2. Textual Reference: Use quotations extensively; integrate smoothly; analyze specific language
 * 3. Terminology: Use accurate literary terminology; avoid jargon without explanation
 * 4. Structure: Develop points in depth; create clear argument; move beyond listing techniques
 * 5. Elsewhere in Play: Integrate references naturally; show broader understanding
 *
 * SECTION B: NOVEL ANALYSIS (30 marks)
 * - Similar criteria to Shakespeare
 * - Analyze narrative technique, characterization, language choices
 * - Reference extract and elsewhere in novel
 * - Address social/historical contexts where relevant
 *
 * COMMON ERRORS TO AVOID:
 * ✗ Writing plot summary instead of analysis
 * ✗ Identifying techniques without explaining effect
 * ✗ Failing to support claims with textual evidence
 * ✗ Using terminology incorrectly or vaguely
 * ✗ Writing about only the extract (must reference elsewhere)
 * ✗ Making personal opinions without textual support
 * ✓ Analyze HOW writers use language/form to create meaning
 * ✓ Explore multiple interpretations where relevant
 * ✓ Connect local analysis to broader themes/concerns
 * ✓ Use accurate terminology with confidence
 *
 * TIMING ADVICE FOR STUDENTS:
 * - Section A: 52 minutes (roughly 45 min essay + 7 min short response)
 * - Section B: 53 minutes (full essay response)
 * - Total: 105 minutes
 *
 * SUGGESTED ESSAY STRUCTURE:
 * 1. Introduction (3-4 mins): Address question; preview key points; establish argument
 * 2. Body Paragraphs (35-40 mins): Develop analytical points; integrate quotations; build argument
 * 3. Conclusion (3-4 mins): Summarize key points; reinforce thesis; consider broader implications
 */

/**
 * PAPER-SPECIFIC THEMES & FOCUS AREAS
 *
 * PAPER 1 (Macbeth + A Christmas Carol):
 * - Guilt and conscience as psychological forces
 * - The consequences of unchecked ambition
 * - Redemption and the possibility of change
 * - Individual responsibility and social obligation
 *
 * PAPER 2 (Macbeth + A Christmas Carol):
 * - Moral failure and psychological deterioration
 * - The limits of rationalization and denial
 * - Economic exploitation and social callousness
 * - Transformation through confrontation with consequences
 *
 * PAPER 3 (Romeo & Juliet + Jane Eyre):
 * - Romantic love as transcendent force vs. social reality
 * - Individual autonomy and social constraint
 * - The power of language to articulate desire
 * - Conflict between heart and duty
 *
 * PAPER 4 (Romeo & Juliet + Jane Eyre):
 * - Names and identity; the performative nature of selfhood
 * - Female agency and resistance to patriarchal norms
 * - Love as both liberation and endangerment
 * - The negotiation of autonomy within social bounds
 *
 * PAPER 5 (The Tempest + Great Expectations):
 * - Power, control, and the acceptance of limitation
 * - Ambition and disillusionment; false expectations
 * - Forgiveness and philosophical wisdom
 * - The illusory nature of human achievement
 *
 * PAPER 6 (Merchant of Venice + Great Expectations):
 * - Prejudice and systematic dehumanization
 * - The self-interest masquerading as moral principle
 * - Wealth and social status as markers of value
 * - The consequences of treating people as instrumental objects
 */

/**
 * COMMAND WORDS & WHAT THEY REQUIRE
 *
 * ANALYSE: Break down into components; explain how each element contributes to overall meaning/effect
 * - Look for: techniques, language, structure, form
 * - Explain: effect on reader, contribution to theme, creation of meaning
 *
 * INTERPRET: Make reasoned judgement about meaning; explain what text reveals/suggests
 * - Consider: multiple valid readings; context; authorial purpose
 * - Develop: sophisticated understanding; nuanced readings
 *
 * EXAMINE: Look at closely; consider in detail; explore implications
 * - Similar to analyse; may require broader contextual consideration
 *
 * EVALUATE: Make a judgement; consider strengths/effectiveness; weigh different interpretations
 * - Some GCSE papers require this; AQA Lit Paper 1 does not explicitly ask for evaluation
 * - If writing comparatively, consider relative effectiveness of different approaches
 *
 * REFER TO: Use textual evidence; integrate quotes and references
 * - Must reference both the extract AND elsewhere in the text
 * - Failure to do this significantly limits grade
 */

/**
 * TECHNICAL LANGUAGE REFERENCE
 *
 * LANGUAGE TECHNIQUES:
 * - Metaphor: Comparison claiming equivalence ("Juliet is the sun")
 * - Simile: Comparison using "like" or "as" ("Life's but a walking shadow, a poor player")
 * - Personification: Giving human qualities to non-human things ("green woods laugh")
 * - Imagery: Sensory language appealing to senses (visual, auditory, tactile, olfactory, gustatory)
 * - Repetition: Repeating words/phrases for emphasis ("Tomorrow, and tomorrow, and tomorrow")
 * - Alliteration: Repeating initial consonant sounds ("muttudinous seas")
 * - Anaphora: Repeating word at start of successive clauses ("you call me... you spat on me...")
 * - Rhetorical Question: Question asked for effect, not expecting answer ("Hath a dog money?")
 * - Oxymoron: Combining contradictory terms ("beautiful agony")
 * - Paradox: Statement seeming false but potentially true ("to lose to win")
 * - Hyperbole: Extreme exaggeration for effect ("I've told you a thousand times")
 *
 * DRAMATIC TECHNIQUE:
 * - Soliloquy: Character speaking alone; reveals inner thoughts
 * - Aside: Character speaks to audience/narrator; other characters don't hear
 * - Dramatic Irony: Audience knows something characters don't; creates tension
 * - Stage Directions: Instructions about action/blocking; reveal character motivation
 * - Dialogue: Conversation between characters; reveals character, conflict, theme
 * - Monologue: Extended speech by one character (unlike soliloquy, others may hear)
 *
 * NARRATIVE TECHNIQUE (for novels):
 * - Point of View: First person (narrator is character), Third person (omniscient or limited)
 * - Narrative Voice: Tone, perspective, reliability of narrator
 * - Foreshadowing: Hints about future events; builds tension
 * - Flashback: Return to past events; provides context
 * - Dialogue: Reveals character, conflict, theme
 * - Description: Setting, appearance; establishes mood, reveals character
 * - Free Indirect Discourse: Blending character thought with narrative voice
 * - Epistolary: Use of letters to tell story
 *
 * STRUCTURAL TECHNIQUES:
 * - Parallel Structure: Similar structures used repeatedly
 * - Contrast: Placing opposing elements side-by-side
 * - Climax: Point of greatest tension/turning point
 * - Resolution: How conflict is settled
 * - Cyclical Structure: Ending returns to beginning; suggests repetition or change
 */

/**
 * MODEL ANSWER ANALYSIS: WHAT MAKES A GREAT RESPONSE
 *
 * GRADE 5 RESPONSE CHARACTERISTICS:
 * - Identifies relevant techniques and effects
 * - Makes basic connections between technique and meaning
 * - Uses some textual support; may quote or paraphrase
 * - Shows understanding of text's basic meaning
 * - Makes general statements without deep exploration
 * - May lack sophisticated terminology
 * - Limited reference to elsewhere in text
 *
 * GRADE 7 RESPONSE CHARACTERISTICS:
 * - Selects precise, relevant quotations
 * - Analyzes how techniques work; explains effects clearly
 * - Considers alternative interpretations
 * - Uses subject terminology accurately and precisely
 * - Makes sustained points; develops ideas fully
 * - Integrates references to elsewhere in text naturally
 * - Shows sophisticated understanding of how form creates meaning
 *
 * GRADE 9 RESPONSE CHARACTERISTICS:
 * - Demonstrates critical intelligence; original, perceptive readings
 * - Analyzes subtle effects; explores implications and complications
 * - Engages with philosophical, historical, or literary contexts
 * - Uses terminology with precision and flexibility
 * - Recognizes ambiguities and multiple valid readings
 * - Makes complex connections across the text
 * - Shows mastery of analysis; moves beyond surface meaning
 * - Often explores how historical period/authorial concerns inform text
 *
 * HOW TO IMPROVE FROM GRADE 5 TO GRADE 7:
 * 1. Select more precise quotations; analyze specific words not just general ideas
 * 2. Explain the "effect" more clearly; what does this technique make the reader think/feel?
 * 3. Use one or two well-developed points rather than listing many techniques
 * 4. Reference elsewhere in the text with specific examples
 * 5. Use literary terminology; show you understand the concepts behind the terms
 *
 * HOW TO IMPROVE FROM GRADE 7 TO GRADE 9:
 * 1. Explore contradictions, ambiguities, and alternative interpretations
 * 2. Make connections to broader historical, philosophical, or literary concerns
 * 3. Analyze the limits and complications of your own argument
 * 4. Consider how form and content work together in sophisticated ways
 * 5. Show awareness of how the text might be read differently across time/contexts
 */

/**
 * STUDENT SELF-ASSESSMENT CHECKLIST
 *
 * Before submitting, students should check:
 *
 * CONTENT & ARGUMENT:
 * ☐ Have I answered the specific question asked?
 * ☐ Do I have a clear argument/interpretation throughout?
 * ☐ Have I explored the theme in depth, not just identified it?
 * ☐ Have I discussed BOTH the extract AND elsewhere in the text/play?
 * ☐ Are my points developed and explained, not just asserted?
 *
 * QUOTATIONS & EVIDENCE:
 * ☐ Are my quotations accurate and integrated smoothly?
 * ☐ Do I analyze HOW each quotation works, not just what it means?
 * ☐ Are my quotations concise and relevant?
 * ☐ Do I have enough evidence to support all my claims?
 *
 * TERMINOLOGY:
 * ☐ Am I using literary terms accurately?
 * ☐ Do I explain what techniques DO, not just name them?
 * ☐ Have I varied my vocabulary and terminology?
 *
 * STRUCTURE:
 * ☐ Does my essay have a clear introduction, body, and conclusion?
 * ☐ Do my paragraphs have clear topic sentences?
 * ☐ Do my ideas flow logically from one to the next?
 * ☐ Have I signposted my argument with linking phrases?
 *
 * EXPRESSION:
 * ☐ Is my writing clear and easy to follow?
 * ☐ Have I checked for spelling and grammar errors?
 * ☐ Am I using Standard English appropriately?
 * ☐ Have I varied my sentence structures?
 */

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL TEACHING & STUDY NOTES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * KEY THEMES ACROSS ALL PAPERS
 *
 * POWER & AGENCY:
 * - Who controls events? Characters or fate/circumstance?
 * - How do systems of power (political, social, economic, gender) constrain or enable action?
 * - What is the difference between intended and actual consequences of actions?
 *
 * AMBITION & ITS CONSEQUENCES:
 * - How do characters' desires shape their actions and destinies?
 * - What costs accompany the pursuit of ambition?
 * - Can ambition ever be ethical or justified?
 *
 * LOVE & RELATIONSHIPS:
 * - What kinds of love are valorized or critiqued in the text?
 * - How do romantic, familial, and social attachments conflict?
 * - What does the text suggest about the possibilities for human connection?
 *
 * MORAL RESPONSIBILITY:
 * - Are characters responsible for their actions? Why or why not?
 * - What does the text suggest about individual vs. collective responsibility?
 * - How do economic and social systems complicate moral agency?
 *
 * APPEARANCE VS. REALITY:
 * - How do characters deceive themselves or others?
 * - What gaps exist between how characters see themselves and how they appear to others?
 * - How does language work to obscure or reveal truth?
 *
 * REDEMPTION & TRANSFORMATION:
 * - Is human change possible? What enables or prevents it?
 * - What costs does transformation exact?
 * - How do texts imagine ethical or spiritual regeneration?
 *
 * SOCIAL POSITION & IDENTITY:
 * - How do class, gender, race, and other social categories shape character and possibility?
 * - How do characters resist or accommodate social constraints?
 * - What does the text suggest about the (in)visibility of certain groups?
 */

/**
 * PREPARATION STRATEGIES FOR STUDENTS
 *
 * 1. BECOME FAMILIAR WITH EXTRACTS:
 *    - Read each extract multiple times
 *    - Annotate language techniques, significant moments
 *    - Consider how extract relates to broader play/novel
 *
 * 2. BUILD KNOWLEDGE OF TEXTS:
 *    - Know key scenes and why they matter
 *    - Understand character motivations and relationships
 *    - Recognize major themes and how they develop
 *
 * 3. PRACTICE ANALYSING LANGUAGE:
 *    - Read closely; notice specific word choices
 *    - Consider sound, imagery, connotation
 *    - Explain effects, not just techniques
 *
 * 4. TIMED WRITING PRACTICE:
 *    - Write under timed conditions (52-53 mins per section)
 *    - Practice planning before writing
 *    - Develop speed without sacrificing quality
 *
 * 5. RECEIVE FEEDBACK:
 *    - Share practice essays with teachers
 *    - Understand what grade feedback means
 *    - Identify patterns in your writing to improve
 *
 * 6. REVIEW MODEL ANSWERS:
 *    - Study different grades of response
 *    - Understand what distinguishes each grade
 *    - Identify specific techniques that improve responses
 */

/**
 * HOW TO ANALYZE SHAKESPEARE'S SOLILOQUIES & MONOLOGUES
 *
 * The following plays contain crucial soliloquies that often appear in exam extracts:
 *
 * MACBETH:
 * - "Out, damned spot!" (Act 5, Scene 1): Lady Macbeth's guilt-ridden soliloquy
 * - "Tomorrow, and tomorrow..." (Act 5, Scene 5): Macbeth's nihilistic meditation
 * - "Is this a dagger which I see before me?" (Act 2, Scene 1): Pre-murder anxiety
 *
 * ROMEO & JULIET:
 * - "What light through yonder window breaks?" (Act 2, Scene 2): Romeo's praise of Juliet
 * - "O Romeo, Romeo! wherefore art thou Romeo?" (Act 2, Scene 2): Juliet's declaration
 * - "O, I am fortune's fool!" (Act 3, Scene 1): Romeo's response to killing Tybalt
 *
 * THE TEMPEST:
 * - "Our revels now are ended" (Act 4, Scene 1): Prospero's meditation on power and illusion
 * - Prospero's epilogue: Renunciation of magic and power
 *
 * THE MERCHANT OF VENICE:
 * - Shylock's "Hath a dog money?" (Act 3, Scene 1): Justification for his cruelty
 * - "If you prick us, do we not bleed?" (Act 3, Scene 1): Shylock's assertion of common humanity
 *
 * ANALYTICAL FOCUS FOR SOLILOQUIES:
 * 1. What is revealed about the character's inner state?
 * 2. What language techniques convey their emotional/mental condition?
 * 3. How does the soliloquy function in the broader narrative/thematic structure?
 * 4. What shifts in perspective or understanding occur during the speech?
 * 5. How does the audience's understanding of the character change based on the soliloquy?
 */

/**
 * HOW TO ANALYZE 19TH-CENTURY NOVEL EXTRACTS
 *
 * DICKENS (A CHRISTMAS CAROL, GREAT EXPECTATIONS):
 * - Pay attention to narrative voice: Is it omniscient, limited, or character-centered?
 * - Notice descriptive language; how does Dickens use description to establish mood/character?
 * - Consider dialogue; how do characters' speech patterns reveal status and personality?
 * - Look for patterns of repetition; what ideas or images recur?
 * - Examine sentimentality; how does Dickens balance emotional appeal with social critique?
 *
 * BRONTË (JANE EYRE):
 * - Jane's first-person narration is crucial; her retrospective perspective shapes interpretation
 * - Watch for moments of psychological intensity; how does language convey inner experience?
 * - Consider symbolism (e.g., fire, darkness, light); what do recurring images signify?
 * - Analyze dialogue, especially confrontations; how does Jane assert her agency?
 * - Notice Gothic elements; how do they relate to character psychology and social critique?
 *
 * GENERAL APPROACH TO 19TH-CENTURY NOVELS:
 * - Consider historical context: What social/political issues does the text address?
 * - Analyze characterization: How are characters developed? Through action? Narration? Dialogue?
 * - Look at structure: How does the organization of the narrative shape meaning?
 * - Consider the ending: Does it affirm or critique prevailing social values?
 * - Notice language register: Do characters speak differently? What does this reveal?
 */

/**
 * FREQUENTLY ASKED QUESTIONS ABOUT PAPER 1
 *
 * Q: Do I need to write about BOTH the extract AND elsewhere in the text?
 * A: YES. The question asks you to "refer to the extract and to elsewhere in the play/novel."
 *    Failing to reference elsewhere significantly limits your grade. Aim for 60% on extract, 40% elsewhere.
 *
 * Q: How many quotations should I use?
 * A: Quality over quantity. 3-5 well-analyzed quotations per section is typically sufficient.
 *    Each quotation should be unpacked carefully, not just cited.
 *
 * Q: Should I write about my personal response or stick to analysis?
 * A: Stick to analysis. Avoid "I liked" or "I think it's interesting." Instead, explain
 *    HOW the text creates meaning. Personal engagement is fine if it's grounded in textual analysis.
 *
 * Q: How important is spelling and grammar?
 * A: Accuracy in spelling, grammar, and punctuation is important for communicating clearly
 *    and maintaining a professional tone. However, these are not directly assessed on GCSE Lit.
 *    Focus primarily on substantive analysis, but proofread carefully.
 *
 * Q: Can I write about multiple interpretations?
 * A: YES, and this is often impressive. If you can acknowledge that a line might be read
 *    multiple ways and explore different interpretations, this demonstrates critical thinking.
 *
 * Q: How long should my essay be?
 * A: There's no set word count, but roughly 300-400 words for 30-mark questions is typical
 *    for Grade 7-9 responses. Focus on depth rather than length.
 *
 * Q: Should I plan before writing?
 * A: ABSOLUTELY. Spend 5 minutes planning: jot down your main argument, key quotations,
 *    and points you want to make. This prevents rambling and improves structure.
 *
 * Q: What if I don't recognize the extract?
 * A: The extract will be from your studied text. You should know your texts well enough
 *    to recognize extracts and understand their context. If you genuinely don't recognize it,
 *    read it carefully and analyze based on the language itself and what you know of the text.
 *
 * Q: How do I balance analysis of technique with discussion of theme?
 * A: Techniques should always be analyzed in service of understanding theme. Don't just say
 *    "Shakespeare uses metaphor." Say "Shakespeare uses metaphor (the sun) to present Juliet as
 *    a source of light and life, suggesting romantic love's transcendent power."
 */

/**
 * GRADING RUBRIC SUMMARY (out of 30 marks for main question)
 *
 * 27-30 (Grade 9):
 * - Original, perceptive interpretation; sophisticated critical thinking
 * - Precise analysis of language, form, technique; explores subtle effects
 * - Integrated references to elsewhere in text
 * - Accurate, flexible use of terminology
 * - Engages with context, alternative readings, thematic/philosophical complexity
 *
 * 24-26 (Grade 8):
 * - Clear interpretation supported by detailed analysis
 * - Good analysis of language and technique; explains effects
 * - Well-integrated references elsewhere
 * - Accurate use of terminology
 * - Shows understanding of how form creates meaning
 *
 * 21-23 (Grade 7):
 * - Clear, supported interpretation
 * - Analyzes language and technique; explains effects
 * - References elsewhere in text
 * - Uses subject terminology accurately
 * - Clearly developed analytical points
 *
 * 18-20 (Grade 6):
 * - Sound interpretation supported by evidence
 * - Identifies and explains key techniques
 * - Some reference to elsewhere in text
 * - Generally accurate terminology
 * - Makes developed points, though may lack sophistication
 *
 * 15-17 (Grade 5):
 * - Reasonable interpretation with support
 * - Identifies some techniques; explains their effect
 * - Limited reference to elsewhere in text
 * - Some use of terminology
 * - Makes points that are developed but sometimes general
 *
 * 12-14 (Grade 4):
 * - Basic interpretation with some support
 * - Identifies obvious techniques; limited explanation
 * - Minimal reference to elsewhere
 * - Limited use of terminology
 * - Makes points but doesn't develop them fully
 *
 * Below 12 (Grade 3 or lower):
 * - Vague or unsupported interpretation
 * - Lists techniques without analysis
 * - Little to no reference to elsewhere
 * - Minimal use of terminology
 * - Points are asserted rather than explained
 */

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT ALL PAPERS
// ─────────────────────────────────────────────────────────────────────────────

export const aqaLitP1Mocks: MockExamPaper[] = [
  // Paper 1: Macbeth (Act 5, Scene 1) + A Christmas Carol (Stave 5 - Redemption)
  createPaper1Exam(
    1,
    'Macbeth',
    MACBETH_EXTRACT_1,
    MACBETH_EXTRACT_1_SOURCE,
    'A Christmas Carol',
    CAROL_EXTRACT_1,
    CAROL_EXTRACT_1_SOURCE,
  ),

  // Paper 2: Macbeth (Act 5, Scene 5) + A Christmas Carol (Stave 1 - Callousness)
  createPaper1Exam(
    2,
    'Macbeth',
    MACBETH_EXTRACT_2,
    MACBETH_EXTRACT_2_SOURCE,
    'A Christmas Carol',
    CAROL_EXTRACT_2,
    CAROL_EXTRACT_2_SOURCE,
  ),

  // Paper 3: Romeo and Juliet (Act 2, Scene 2 - Balcony Scene, first part) + Jane Eyre (Chapter 37)
  createPaper1Exam(
    3,
    'Romeo and Juliet',
    ROMEO_JULIET_EXTRACT_1,
    ROMEO_JULIET_EXTRACT_1_SOURCE,
    'Jane Eyre',
    JANE_EYRE_EXTRACT_1,
    JANE_EYRE_EXTRACT_1_SOURCE,
  ),

  // Paper 4: Romeo and Juliet (Act 2, Scene 2 - Name/Identity theme) + Jane Eyre (Chapter 27 - Defiance)
  createPaper1Exam(
    4,
    'Romeo and Juliet',
    ROMEO_JULIET_EXTRACT_2,
    ROMEO_JULIET_EXTRACT_2_SOURCE,
    'Jane Eyre',
    JANE_EYRE_EXTRACT_2,
    JANE_EYRE_EXTRACT_2_SOURCE,
  ),

  // Paper 5: The Tempest (Act 4, Scene 1 - Revels/Dissolution) + Great Expectations (Chapter 44 - Expectations)
  createPaper1Exam(
    5,
    'The Tempest',
    TEMPEST_EXTRACT_1,
    TEMPEST_EXTRACT_1_SOURCE,
    'Great Expectations',
    GREAT_EXPECTATIONS_EXTRACT_1,
    GREAT_EXPECTATIONS_EXTRACT_1_SOURCE,
  ),

  // Paper 6: The Merchant of Venice (Act 1, Scene 3 & Act 3, Scene 1 - Prejudice) + Great Expectations (Chapter 8 - Isolation)
  createPaper1Exam(
    6,
    'The Merchant of Venice',
    MERCHANT_EXTRACT_1,
    MERCHANT_EXTRACT_1_SOURCE,
    'Great Expectations',
    GREAT_EXPECTATIONS_EXTRACT_2,
    GREAT_EXPECTATIONS_EXTRACT_2_SOURCE,
  ),
]
