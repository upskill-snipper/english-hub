// @ts-nocheck
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'
import { jekyllAndHydeText } from '@/data/full-texts/jekyll-and-hyde'
import { macbethText } from '@/data/full-texts/macbeth'
import { romeoAndJulietText } from '@/data/full-texts/romeo-and-juliet'
import { passage, playPassage } from '@/lib/study-guides/passage'

/**
 * Six Edexcel GCSE English Literature mock papers. None is served by the site:
 * they are not in allMockExamPapers in src/data/mock-exams.ts, and only the
 * teacher toolkit index names this file.
 *
 * WHAT WAS WRONG (the FC20 audit of 28 April 2026 flagged it, and
 * scripts/check-mock-exam-extracts.mjs measured it on 26 September 2026). The
 * extracts were typed in, not cut from any edition, and four of the seven put
 * words under an author's name that the author never wrote; a fifth, An
 * Inspector Calls, is believed to (below):
 *   - Romeo and Juliet 3.1 (paper 001, q1): three of nine sentences are in no
 *     edition. Benvolio's closing warning was assembled from pieces of the
 *     scene moved and altered (the Capulets "abroad" is his line from its
 *     opening, the Prince's ban on fighting is Romeo's) around a line about
 *     the watch that is not in it. His "Why dost thou stay?" was given to
 *     Romeo, and "O, I am fortune's fool" was printed twice, so the model
 *     answer analysed a repetition Shakespeare did not write.
 *   - A Christmas Carol, Stave 1 (003, q1): two of fourteen sentences were
 *     Dickens's as he wrote them. Marley's speeches were rewritten and given a
 *     moral Dickens did not write ("Every man must justify his existence"),
 *     which the model answer read as Dickens's philosophy.
 *   - Jekyll and Hyde (004, q1): none of six sentences as Stevenson wrote
 *     them. The millrace sentence was altered, and "the violence of
 *     imitation" and Jekyll accepting his fate "as a chemist" were invented;
 *     the model answer analysed both.
 *   - Great Expectations, chapter 1 (006, q1): four of nine sentences are not
 *     as Dickens wrote them. The ending was invented: Magwitch never says
 *     "Show me the way up", and the last sentence joined the chapter's "low
 *     church" to the risen mists of chapter 19 under a moon that is in
 *     neither; the model answer analysed all three. Earlier, Magwitch "took me
 *     by both arms" where Dickens has him seize Pip by the chin, and Pip's
 *     plea lost its "sir".
 *   - Romeo and Juliet 2.2 (001, q3) and Macbeth 5.5 (002, q1) had the right
 *     words in another edition's punctuation, and the 2.2 extract joined five
 *     lines of Romeo's first speech to Juliet's speech nearly thirty lines later,
 *     and cut four lines from the middle of hers, with no mark of either cut.
 *   - An Inspector Calls (005, q2): 147 words of the play, which is in UK
 *     copyright, printed as "the extract below from An Inspector Calls", far
 *     over the house limit of fewer than 15 words a quotation
 *     (src/lib/study-guides/fair-dealing.ts). The text is not held, so
 *     it cannot be checked word for word, but it is believed not to be
 *     Priestley's: in the play Sheila recognises the photograph, leaves the
 *     room and on her return tells the story of Milwards herself, which is not
 *     the cross-examination printed here. The model answer analysed its lines
 *     as Priestley's, and twice said Sheila was the only member of the family
 *     to accept responsibility, which forgets Eric.
 * The essay answers misquoted as well: Macbeth's aside in 1.3 and his
 * soliloquy in 1.7 were run together as one speech, three Christmas Carol
 * lines were reworded and Belle was called "Bella", and Pip's "better than I
 * had thought him" is in no edition of Great Expectations. Paper 005, q1 asked
 * the student to read an extract the paper does not print.
 *
 * WHAT WAS DONE (27 September 2026). Each passage from a held text is cut from
 * src/data/full-texts when this module loads, by passage() or playPassage(),
 * which throw rather than drift, so it cannot differ from the edition; asScript
 * only sets a play passage out in lines. Great Expectations is not held, so its
 * passage is Project Gutenberg #1400, whole paragraphs cut by script from
 * "Ours was the marsh country" to the bread and pasted, not typed. Each
 * replacement sits in the scene or chapter its question names and keeps the
 * question's focus, and each model answer was rewritten so that every
 * quotation is in its extract and every claim is true of the words quoted. The
 * essay answers were corrected against the same editions. Paper 005, q1 is now
 * an essay question.
 *
 * A review the same day found what that pass left. The Great Expectations cut
 * began at "Hold your noise", so a question on setting and a "first
 * impression" had almost no setting to read; it now opens with the marsh
 * paragraph, which is about exactly that, and the answer reads it. Two
 * answers claimed more than the words: Romeo's "eight lines" of praise are
 * seven, and "too untimely" means too soon, not needless. The An Inspector
 * Calls question (005, q2), which the first pass reported and left, is now an
 * essay question like the real Edexcel paper's in this section: an extract
 * over the copyright limit and believed not to be the author's is not left
 * under his name because a licence might one day allow a real one. Its answer
 * quotes nothing, because nothing here can check a quotation of the play.
 *
 * scripts/check-mock-exam-extracts.mjs reads extracts as string literals, so
 * it checks the passages cut here only through the quotations in the answers.
 * src/__tests__/edexcel-lit-mock-exams-quote-the-real-text.test.ts is what
 * checks them: it finds each one, without passage(), in the section its label
 * names, and holds every quotation in the answers to its extract or its work.
 *
 * If this bank is ever served: the mock-exam page prints only the first
 * question's extract in a section, so paper 001's balcony-scene extract (q3)
 * would never be shown, and q3 would sit under the Act 3 extract.
 */

/**
 * A passage from playPassage() set out as a paper prints it: a speech or stage
 * direction to a paragraph, a verse line to a line. playPassage() joins lines
 * and speeches alike with " / ", the mark a study guide prints; the mock-exam
 * page keeps line breaks, so they are put back here. Only the separators
 * change: every word and stop is the edition's.
 */
function asScript(cut: string): string {
  const opens = /^(?:[A-Z][A-Z’' .-]+: |\[)/
  return cut
    .split(' / ')
    .map((line, i, all) =>
      i > 0 && (opens.test(line) || all[i - 1].startsWith('[')) ? `\n${line}` : line,
    )
    .join('\n')
}

export interface MockExamPaper {
  id: string
  title: string
  board: string
  subject: string
  tier?: string
  duration: number // minutes
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
  /** Where the extract is from, and the edition it was cut from. */
  extractSource?: string
  bulletPoints?: string[]
  markScheme: string
  modelAnswer?: string
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
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question. You should refer closely to the extract provided and to other parts of the play.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 40,
            questionText:
              'Read the following extract from Act 3, Scene 1 of Romeo and Juliet, where Romeo learns that Mercutio is dead and kills Tybalt. Explore how Shakespeare presents violence and its consequences in this scene. In your answer, you should consider the dramatic impact of the language and action on the audience.',
            // From Benvolio's news of Mercutio to Romeo's exit: the fight, and
            // the consequences on either side of it.
            extract: asScript(
              playPassage(romeoAndJulietText, 'actiii-scenei', 'brave Mercutio', 'Exit Romeo'),
            ),
            extractSource:
              'William Shakespeare, Romeo and Juliet, Act 3, Scene 1. Text: Project Gutenberg #1513.',
            markScheme: `Band 5 (32-40 marks): Sustained exploration of how Shakespeare presents violence and its consequences. Perceptive analysis of language (e.g. "fire-ey'd fury" as Romeo's surrender to rage, "fortune's fool" as tragic self-recognition, the imperatives of Benvolio's warnings, the shared verse line of the fight). Develops interpretations considering dramatic impact. Detailed textual references integrated seamlessly. Shows understanding of context (the Prince's edict, the feud).

Band 4 (24-31 marks): Clear exploration with good analysis. Identifies language techniques and their effects. Makes links between language and consequences. Mostly well-integrated textual support. Shows understanding of dramatic impact.

Band 3 (16-23 marks): Relevant exploration with some analysis. Identifies some techniques (imperatives, repetition). Makes general points about consequences. Adequate textual references. Some attempt at dramatic impact.

Band 2 (8-15 marks): Limited exploration. Identifies some features. Makes basic points about violence. Limited textual support. Minimal analysis.

Band 1 (0-7 marks): Very limited or no relevant response.`,
            modelAnswer: `Shakespeare presents violence in this scene as sudden, self-perpetuating and ruinous, showing how quickly grief becomes rage and rage becomes a sentence of exile. The extract opens not with a fight but with the consequence of one: Benvolio's "O Romeo, Romeo, brave Mercutio's dead". The audience has just seen Mercutio carried off wounded, and the euphemism "That gallant spirit hath aspir'd the clouds" softens his death for only a moment before "too untimely" insists that it came far too soon.

Romeo sees at once that this violence will breed more. His rhyming couplet, "This day's black fate on mo days doth depend; / This but begins the woe others must end", sounds like a prophecy: the "black fate" of one day will hang over the days to come. The rhyme gives the lines the finality of a sentence being passed, and an audience told in the Prologue that the lovers are doomed hears Romeo name the tragedy before he acts in it.

The return of "the furious Tybalt" turns foreboding into action. Romeo abandons the peace he offered only minutes before: "Away to heaven respective lenity, / And fire-ey'd fury be my conduct now!" He banishes mercy to heaven and chooses "fury" as his guide, and the compound "fire-ey'd" makes rage something that burns and blinds. He even takes back the insult he had refused to answer, telling Tybalt to "take the 'villain' back again", and he pictures Mercutio's soul waiting "a little way above our heads" for Tybalt's. The line "Either thou or I, or both, must go with him" is chillingly balanced: Romeo accepts that the fight may kill him too, which shows how completely violence has overtaken the young man who, earlier in the scene, refused to fight Tybalt at all.

The fight itself is brief. Tybalt's contempt, "Thou wretched boy", ends in the half-line "Shalt with him hence", and Romeo's "This shall determine that" completes the verse line, so that insult and blow follow each other without a pause. The stage direction "They fight; Tybalt falls" replaces any further speech. Shakespeare shows how little time it takes to kill, and how final it is.

The consequences follow at once. Benvolio's imperatives, "Romeo, away, be gone!" and "Hence, be gone, away!", press on Romeo, and his reasons are public and legal: "The citizens are up, and Tybalt slain" and "The Prince will doom thee death / If thou art taken." The audience remembers the Prince's warning in the first scene that the families will pay with their lives if they disturb the streets again, so Romeo's life is now forfeit in law as well as in grief.

Romeo's single line "O, I am fortune's fool!" is the turning point of the extract. He sees himself as the plaything of chance, and the exclamation carries shock and despair. Yet the line also shifts responsibility away from him, since it was his own "fury" that killed Tybalt. Benvolio's "Why dost thou stay?" shows Romeo frozen by what he has done, until the stage direction "Exit Romeo" sends him towards the exile that will part him from Juliet.

The dramatic impact is profound because the audience knows what Benvolio does not: Romeo has married Juliet, Tybalt's cousin, that same day. The violence of this extract wrecks that marriage within hours of its making, and Shakespeare shows that in Verona the feud can turn even a peacemaker into a killer.`,
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 40,
            questionText:
              'Explore the relationship between Romeo and Juliet and how it is presented throughout the play. Consider how Shakespeare uses language, dramatic irony, and significant moments to show the development and impact of their love.',
            bulletPoints: [
              'You should consider the rapid development of their relationship',
              'The imagery and language Shakespeare uses to describe their love',
              'How other characters view their relationship',
              'The tragic consequences of their love within the context of the feud',
            ],
            markScheme: `Band 5 (32-40 marks): Sustained, perceptive exploration of the relationship's presentation. Analyses key scenes with sophisticated understanding of how Shakespeare develops the relationship through language and imagery. Strong grasp of dramatic irony (e.g., their love accelerating their deaths). Excellent integration of textual references. Shows awareness of thematic significance.

Band 4 (24-31 marks): Clear exploration with good analysis of key scenes. Identifies language patterns and imagery. Makes connections between love and the feud. Good textual support. Shows understanding of dramatic irony.

Band 3 (16-23 marks): Relevant exploration of the relationship. Identifies some key scenes and language choices. Makes some connections. Adequate textual references.

Band 2 (8-15 marks): Limited exploration. Basic points about their love. Limited textual support.

Band 1 (0-7 marks): Very limited response.`,
            modelAnswer: `Shakespeare presents the relationship between Romeo and Juliet as simultaneously transcendent and doomed, using poetic language and dramatic irony to explore how love becomes both redemptive and destructive within the context of the feud. The relationship develops with astonishing rapidity - they meet, fall in love, marry, and consummate their marriage within about a day of meeting. This speed is not presented as recklessness but as a force beyond their control, suggested by Shakespeare's use of religious imagery when they first meet.

Their initial exchange at the feast employs the extended metaphor of pilgrimage, with Romeo as pilgrim and Juliet as holy shrine. This language elevates their meeting beyond mere attraction to something spiritual and transcendent: "My lips, two blushing pilgrims, ready stand / To smooth that rough touch with a tender kiss." The religious framework suggests their love operates on a higher plane than the material world of the feud. Juliet responds with equal spiritual intensity, and together they complete a Shakespearean sonnet, suggesting their love is poetry made flesh - perfect, balanced, complete.

The balcony scene develops their love through imagery of light and heaven. Romeo describes Juliet as the sun and then as a "bright angel", and Juliet worries that Romeo will think her "too quickly won". Yet her concern is immediately overridden by the power of their mutual attraction. Shakespeare uses the language of permanence and commitment - "What's in a name?" becomes Juliet's declaration that their love transcends the feud entirely. Their dialogue moves from passionate metaphor to practical planning; they decide to marry, demonstrating that their love is not mere infatuation but a serious commitment.

The dramatic irony intensifies as Shakespeare shows their love accelerating events towards tragedy. The audience understands what Romeo and Juliet cannot: that their passionate love, born from the feud, can only end in death. Other characters sense this darkness. The Friar agrees to marry them hoping their union will end the feud, yet his action paradoxically ensures their destruction. When Romeo kills Tybalt hours after marrying Juliet, the structural inevitability becomes clear - the feud will not permit their love to flourish.

Shakespeare's final presentation of their love occurs in the tomb scene, where Romeo and Juliet are reunited only in death. The poetry here reaches its height of intensity, yet it is poetry spoken over a corpse. Romeo's final words, "Thus with a kiss I die", recall their spiritual first meeting but now represent the ultimate tragic consequence of love born within hatred. Shakespeare presents their love as genuine, beautiful, and ultimately more powerful than the feud - but only in death.`,
          },
          {
            id: 'q3',
            questionNumber: 3,
            marks: 40,
            questionText:
              "Read the extract below from Act 2, Scene 2 (the balcony scene). How does Shakespeare use language to convey Romeo's passion and Juliet's complexity in this moment?",
            // One unbroken run of the scene, from Juliet's first words to Romeo's
            // answer to her: his passion and her reasoning side by side.
            extract: asScript(
              playPassage(romeoAndJulietText, 'actii-sceneii', 'Ay me', 'never will be Romeo'),
            ),
            extractSource:
              'William Shakespeare, Romeo and Juliet, Act 2, Scene 2. Text: Project Gutenberg #1513.',
            markScheme: `Band 5 (32-40 marks): Perceptive analysis of language effects. Explores imagery (the angel and "winged messenger of heaven", the rose), apostrophe, and imperative language. Shows how language conveys passion and emotional complexity. Excellent integration of quotations. Discusses dramatic significance.

Band 4 (24-31 marks): Clear analysis of language techniques. Identifies metaphor and apostrophe. Makes connections to emotion and character. Good textual support.

Band 3 (16-23 marks): Identifies some techniques. Makes points about passion and emotion. Adequate quotation support.

Band 2 (8-15 marks): Limited analysis. Basic identification of features.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Shakespeare uses richly poetic language in this scene to convey Romeo's passionate intensity while revealing a Juliet who is more questioning and clear-sighted. Because Juliet does not know she is overheard, the contrast between their voices shows the audience two different responses to the same overwhelming feeling.

Romeo's passion is conveyed through religious and celestial imagery. Juliet's two words, "Ay me", are enough to make him cry "O speak again bright angel". He goes on to compare her to "a winged messenger of heaven" seen from below by "the white-upturned wondering eyes / Of mortals that fall back to gaze on him". Romeo places Juliet above him, on her balcony and in the heavens, and places himself among the awestruck mortals looking up. The angel who "bestrides the lazy-puffing clouds / And sails upon the bosom of the air" moves without effort or weight, which suggests how completely Romeo idealises her. His language borders on worship rather than conversation: he answers a sigh with a single sentence of praise seven lines long.

Juliet's speech introduces a more reasoning voice. Her question "O Romeo, Romeo, wherefore art thou Romeo?" asks why he must be Romeo, a Montague, not where he is. She follows it with imperatives, "Deny thy father and refuse thy name", and then offers to make the sacrifice herself: "Or if thou wilt not, be but sworn my love, / And I'll no longer be a Capulet." Her complexity lies in this readiness to argue and bargain; she is thinking through what their love will cost.

Romeo's aside, "Shall I hear more, or shall I speak at this?", shows him torn between listening and declaring himself, and it builds tension, because the audience knows that Juliet's private thoughts are being overheard.

Juliet then reasons almost like a philosopher. "'Tis but thy name that is my enemy" separates the man from his family, and her list "It is nor hand nor foot, / Nor arm, nor face, nor any other part / Belonging to a man" strips the name away from the body to show that it is no part of him. The image of the rose, "What's in a name? That which we call a rose / By any other name would smell as sweet", argues that names are only labels and that the thing itself is unchanged. She ends with an imperative that is also a gift: "Romeo, doff thy name, / And for thy name, which is no part of thee, / Take all myself." The offer of her whole self shows that her clear thinking does not make her love any less intense.

Romeo's reply takes up her words: "I take thee at thy word. / Call me but love, and I'll be new baptis'd". The religious image of baptism shows him ready to be reborn under a new name, and "Henceforth I never will be Romeo" is spoken as a vow. Yet the dramatic irony is sharp, because names cannot be put off so easily. When Juliet says "'Tis but thy name that is my enemy", she hopes the feud is merely a matter of words, but the audience knows the names Montague and Capulet will cost both lovers their lives.`,
          },
        ],
      },
      {
        id: 'section-2',
        title: 'Section B: Post-1914 Literature',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question.',
        questions: [
          {
            id: 'q4',
            questionNumber: 4,
            marks: 40,
            questionText:
              "Choose one text from the post-1914 literature anthology. Explain how the writer presents a significant theme or character. You should consider language, structure, and the writer's methods.",
            bulletPoints: [
              'Identify your chosen text clearly',
              'Explain the theme or character in detail',
              "Analyse the writer's language and structure",
              'Consider the effect on the reader',
            ],
            markScheme: `Band 5 (32-40 marks): Excellent understanding of text. Detailed analysis of language and structure. Sustained exploration of theme/character. Sophisticated understanding of writer's methods and their effects.

Band 4 (24-31 marks): Clear understanding. Good analysis of language/structure. Clear exploration of theme/character.

Band 3 (16-23 marks): Adequate understanding. Some analysis of techniques. Basic exploration of theme/character.

Band 2 (8-15 marks): Limited understanding. Basic identification of features.

Band 1 (0-7 marks): Minimal response.`,
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question. You should refer closely to the extract provided and to other parts of the play.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 40,
            questionText:
              "Read the extract below from Act 5, Scene 5 of Macbeth, where Macbeth responds to news of his wife's death. Explore how Shakespeare presents Macbeth's psychological state at this moment and how his language reflects his spiritual and emotional collapse.",
            // From Macbeth's answer to the women's cry to the end of the
            // soliloquy: his numbness before the news as well as his reply to it.
            extract: asScript(
              playPassage(
                macbethText,
                'actv-scenev',
                'almost forgot the taste of fears',
                'Signifying nothing',
              ),
            ),
            extractSource:
              'William Shakespeare, Macbeth, Act 5, Scene 5. Text: Project Gutenberg #1533.',
            markScheme: `Band 5 (32-40 marks): Perceptive exploration of Macbeth's psychological collapse. Detailed analysis of language: his loss of fear ("supp'd full with horrors"), repetition (Tomorrow x3), metaphors (candle, shadow, player, tale), and rhythm. Shows understanding of how language reflects spiritual emptiness and nihilism. Excellent context of his journey from ambition to despair. Sophisticated analysis of dramatic effect.

Band 4 (24-31 marks): Clear exploration of Macbeth's state. Good identification of language techniques. Makes connections to his emotional collapse. Solid textual support. Good understanding of dramatic impact.

Band 3 (16-23 marks): Relevant exploration. Identifies some techniques (repetition, metaphor). Makes points about his despair. Adequate quotation support.

Band 2 (8-15 marks): Limited exploration. Basic identification of features. Simple points about despair.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Shakespeare presents Macbeth's psychological state in this extract as one of numbness and despair. His response to his wife's death is not grief but a bleak conclusion that life itself means nothing: he has become so hollowed out by his crimes that even her death barely touches him. The language reveals a mind that has travelled from ambitious hope to total emptiness.

Before he hears the news, Macbeth tells the audience that he has lost the capacity to be afraid: "I have almost forgot the taste of fears." He remembers a time when "my senses would have cool'd / To hear a night-shriek", and when his "fell of hair" would rise at a frightening story, but now "I have supp'd full with horrors". The image of eating his fill of horrors suggests that his crimes have become his daily food, and "Direness, familiar to my slaughterous thoughts, / Cannot once start me" admits that nothing can shock a man whose own thoughts are "slaughterous". This emotional numbness prepares the audience for his response.

When Seyton reports "The Queen, my lord, is dead", Macbeth's first words are flat: "She should have died hereafter. / There would have been a time for such a word." The lines can mean that she would have died at some time anyway, or that she should have died later, when there would have been time to mourn her. Either way, he cannot find the grief the moment demands.

The repetition "Tomorrow, and tomorrow, and tomorrow" creates a slow, dragging rhythm, and the future becomes a sequence of identical days that "Creeps in this petty pace from day to day, / To the last syllable of recorded time". The verb "Creeps" and the adjective "petty" show his contempt for the time he once hurried towards, when the witches' promises lay ahead of him. "And all our yesterdays have lighted fools / The way to dusty death" makes the past no better than the future: every day has only lit people towards the grave.

The metaphors that follow are the play's bleakest statement about life. "Out, out, brief candle!" treats a life as a flame that is easily snuffed out, and Macbeth may be thinking of his wife's life as well as his own. "Life's but a walking shadow; a poor player, / That struts and frets his hour upon the stage, / And then is heard no more" turns life into a bad actor's performance: "struts" suggests empty pride and "frets" anxious fuss, both forgotten once the hour is over. The theatrical metaphor is especially striking in a play, since the actor who speaks the lines is himself a player on a stage. The final image, "a tale / Told by an idiot, full of sound and fury, / Signifying nothing", reduces all human effort to noise without meaning, and the short line "Signifying nothing" leaves a silence where the verse should continue.

After murdering his way to the crown, Macbeth concludes that nothing he has done means anything. Shakespeare uses this soliloquy to show how ambition and guilt corrode the soul, leaving only emptiness: Macbeth has lost not merely his wife, but his capacity to find meaning in anything.`,
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 40,
            questionText:
              "Explore how Shakespeare presents ambition as a destructive force in Macbeth. Consider the consequences of Macbeth's actions throughout the play and the methods Shakespeare uses to show ambition's corrupting influence.",
            bulletPoints: [
              "How ambition drives Macbeth's initial decision to murder Duncan",
              'The psychological consequences of pursuing power through evil',
              "How other characters are affected by Macbeth's ambition",
              "The ultimate consequences of ambition by the play's end",
            ],
            markScheme: `Band 5 (32-40 marks): Sustained, perceptive exploration of ambition as destructive. Analyses progression from initial ambition to complete moral collapse. Sophisticated understanding of psychological degradation. Excellent analysis of key scenes and language. Shows understanding of thematic development.

Band 4 (24-31 marks): Clear exploration with good analysis. Traces development of ambition's effects. Good textual support. Shows understanding of consequences.

Band 3 (16-23 marks): Relevant exploration of ambition and consequences. Identifies key scenes. Basic analysis.

Band 2 (8-15 marks): Limited exploration. Basic points about ambition.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Shakespeare presents ambition as the primary destructive force in Macbeth, using the protagonist's trajectory from respected general to paranoid tyrant to demonstrate how unchecked desire for power systematically corrupts the soul, destroys relationships, and ultimately leads to self-destruction. The play charts ambition's progression from external temptation to internal compulsion that overrides all moral considerations.

The initial manifestation of ambition is sparked by the witches' prophecy, but Shakespeare makes clear that the ambition itself dwells within Macbeth. His aside after hearing their words shows him imagining murder and then drawing back to leave it to fortune: "If chance will have me king, why, chance may crown me / Without my stir." By the time he weighs the killing of Duncan in Act 1, Scene 7, he admits that nothing but ambition drives him: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th' other". His intent is pictured as a horse he has no spur to urge on, and ambition as a rider who vaults so eagerly into the saddle that he falls on the other side. The image shows Shakespeare's understanding that ambition is not rational desire but an overwhelming, almost physical compulsion that carries its own fall within it. Macbeth recognises this as a flaw even as he surrenders to it.

The murder of Duncan demonstrates how ambition overrides human bonds and natural law. Duncan is Macbeth's king, his kinsman, and his guest - multiple sacred relationships that should be inviolable. Yet ambition erases these considerations. Lady Macbeth, herself corrupted by ambition, manipulates Macbeth by questioning his manhood: "What beast was't, then, / That made you break this enterprise to me?" The irony is profound - true manhood would resist the temptation, but ambition has redefined it as weakness. The murder itself, framed as a courageous act, is actually spiritual suicide. Macbeth has "murder'd sleep" not merely for Duncan but for himself; his ambition has barred him from peace forever.

The psychological consequences unfold relentlessly. Once Macbeth has secured the throne through murder, ambition does not diminish but intensifies. He becomes consumed with the fear that Banquo's descendants, not his own, will inherit the crown. This fear drives him to commit additional murders - Banquo and Macduff's family. Each murder is committed not for power (he already possesses the crown) but to secure it against imagined threats. Ambition has become pathological, a paranoid obsession that no amount of bloodshed can satisfy. The banquet scene reveals Macbeth's psychological disintegration; he sees Banquo's ghost and responds with barely contained hysteria, his language fragmenting into broken syntax that mirrors his fractured mind.

Other characters suffer profoundly from Macbeth's ambition. Lady Macbeth, who encouraged his ambition, is ultimately destroyed by her conscience. Her sleepwalking scene shows complete psychological collapse - "Out, damned spot!" she cries, unable to wash the imagined blood from her hands. Her suicide (reported offstage) is directly caused by her complicity in Macbeth's ambitious murders. Macduff loses his entire family because Macbeth's paranoid ambition extends to murdering innocent women and children. The apparition's prophecy that "none of woman born / Shall harm Macbeth" proves ironically true only because Macduff was born by Caesarean section, yet it is Macbeth's fear of Macduff, bred by his ambition to keep the crown, that drives him to massacre Macduff's family and so turns Macduff into the avenger who kills him.

By the final acts, ambition has transformed Macbeth into a hollow tyrant. He speaks of life as meaningless precisely because ambition has stripped his life of all meaning except power. The tragic culmination shows that ambition has not brought him satisfaction but has instead led to his downfall - he dies not as a great king but as a despised tyrant, killed by the very man whose family his ambition drove him to murder. Shakespeare's ultimate statement about ambition is that it promises everything but delivers only destruction, and that the most ambitious may ultimately achieve everything except the contentment or legacy they sought.`,
          },
        ],
      },
      {
        id: 'section-2',
        title: 'Section B: Post-1914 Literature',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question.',
        questions: [
          {
            id: 'q4',
            questionNumber: 4,
            marks: 40,
            questionText:
              'Choose one text from the post-1914 literature anthology. Explain how the writer uses a particular technique or device to develop meaning. You should consider the effect on the reader and the significance of this technique to the text as a whole.',
            bulletPoints: [
              'Clearly identify your chosen text',
              'Name the specific technique or literary device',
              'Analyse how it develops meaning',
              'Consider its significance to the overall narrative or theme',
            ],
            markScheme: `Band 5 (32-40 marks): Excellent analysis of technique and its effects. Sophisticated understanding of how technique develops meaning. Sustained focus on significance. Excellent integration of textual evidence.

Band 4 (24-31 marks): Clear analysis of technique. Good understanding of meaning development. Good textual support.

Band 3 (16-23 marks): Adequate analysis. Some understanding of technique and effects.

Band 2 (8-15 marks): Limited analysis. Basic understanding.

Band 1 (0-7 marks): Minimal response.`,
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should spend approximately 60 minutes on this question. You should refer closely to the extract provided and to other parts of the novel.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 48,
            questionText:
              "Read the extract below from Stave 1 of A Christmas Carol, where the Ghost of Marley appears to Scrooge. Explore how Dickens uses language, imagery, and the supernatural to establish Marley's role as a warning and messenger. Consider how this moment begins Scrooge's transformation.",
            // From Scrooge on his knees to "a ponderous chain": the law Marley
            // brings and the chain that shows it, and the warning that Scrooge
            // is forging one of his own.
            extract: passage(
              aChristmasCarolText,
              'section-1',
              'Scrooge fell upon his knees',
              'ponderous chain',
            ),
            extractSource:
              'Charles Dickens, A Christmas Carol (1843), Stave 1. Text: Project Gutenberg #46.',
            markScheme: `Band 5 (40-48 marks): Perceptive analysis of how Dickens establishes Marley's warning role. Sophisticated understanding of supernatural imagery and its symbolic significance. Detailed analysis of language (imperatives, repetition, metaphor). Excellent exploration of chain metaphor and its connection to moral consequence. Shows how this initiates Scrooge's transformation. Insightful contextual understanding.

Band 4 (32-39 marks): Clear exploration of Marley's role as messenger. Good analysis of supernatural elements and language. Makes connections between chain imagery and moral accountability. Good understanding of the scene's significance to Scrooge's journey.

Band 3 (24-31 marks): Relevant exploration. Identifies some language techniques and imagery. Makes points about warning and transformation. Adequate textual support.

Band 2 (16-23 marks): Limited exploration. Basic identification of features. Simple points about the supernatural.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens uses this scene to establish Marley not merely as a ghost but as a personification of conscience and consequence, using the supernatural as a vehicle for moral instruction. The scene is pivotal because it both warns Scrooge and begins to break down the defences of a man who, moments earlier, dismissed the Ghost as indigestion.

The extract opens with Scrooge's collapse: "Scrooge fell upon his knees, and clasped his hands before his face." The posture is one of prayer, and it shows how completely the supernatural has overpowered his scepticism. His cry of "Mercy!" and his plea, "Dreadful apparition, why do you trouble me?", are the first time in the story that Scrooge begs instead of scoffing. The Ghost's reply, "Man of the worldly mind!", names Scrooge's fault in five words: he has lived for the world of money alone. Scrooge's answer, "I must", marks the moment belief is forced on him, and his transformation begins with that admission.

Marley's role as a messenger is clearest in his answer to "why do they come to me?" His words "It is required of every man," turn a private haunting into a universal law. Every man's spirit "should walk abroad among his fellowmen, and travel far and wide", and if it does not go out "in life, it is condemned to do so after death." The language of law and judgement ("required", "condemned", "doomed") presents kindness to others as a duty, not a choice. The punishment is to "wander through the world" and "witness what it cannot share, but might have shared on earth, and turned to happiness!" Marley's torment is to see the good he could have done, and the interjection "oh, woe is me!" gives the lesson the sound of a lament.

The chain is the extract's central image. Scrooge's "You are fettered" invites the explanation: "I wear the chain I forged in life". The verb "forged" makes Marley the blacksmith of his own punishment, and the steady rhythm of "I made it link by link, and yard by yard" suggests each selfish act adding to it, slowly and deliberately. "I girded it on of my own free will, and of my own free will I wore it" insists, through the repeated "of my own free will", that no one forced this on him: the consequences of greed are chosen.

The warning then turns on Scrooge himself. Marley's question "Is its pattern strange to you?" hints that Scrooge will recognise the pattern because he is forging the same chain. The Ghost then says so outright: "the weight and length of the strong coil you bear yourself" was "full as heavy and as long as this, seven Christmas Eves ago. You have laboured on it, since. It is a ponderous chain!" The phrase "seven Christmas Eves ago" dates Scrooge's chain to the night Marley died, and "You have laboured on it" turns Scrooge's lifetime of work into labour on his own punishment. The final exclamation leaves Scrooge, and the reader, with the weight of the warning.

The supernatural is essential to Dickens's purpose. A living man confronting Scrooge could be ignored; a ghost that brings him to his knees cannot. Dickens charts Scrooge's rising fear, from "trembling" to "Scrooge trembled more and more", so that terror opens the way for conscience. Later in the stave Marley tells him that three spirits will visit him and that he still has a chance of escaping Marley's fate, but this extract lays the foundation for that hope: Scrooge is shown what he might become, a spirit bound by the chain of a life spent on business rather than on other people.`,
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 48,
            questionText:
              'Explore how Dickens presents the theme of social responsibility in A Christmas Carol. Consider how different characters embody different responses to this theme and how Dickens uses their portrayal to comment on Victorian society.',
            bulletPoints: [
              'How Scrooge initially represents a rejection of social responsibility',
              'The contrast with characters like the Cratchits and Fred',
              "Dickens's use of the Spirits and their lessons to communicate social values",
              "The significance of Scrooge's transformation in the context of social responsibility",
            ],
            markScheme: `Band 5 (40-48 marks): Excellent, sustained exploration of social responsibility as theme. Sophisticated analysis of character contrasts and their symbolic significance. Perceptive understanding of how Dickens uses supernatural framework to teach social values. Excellent integration of textual references. Strong contextual awareness of Victorian social issues.

Band 4 (32-39 marks): Clear exploration with good analysis of character contrasts. Good understanding of theme and its development. Solid textual support. Good contextual awareness.

Band 3 (24-31 marks): Relevant exploration of theme. Identifies character contrasts. Some analysis of Dickens's methods.

Band 2 (16-23 marks): Limited exploration. Basic points about characters and responsibility.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens presents social responsibility as a central moral obligation, using A Christmas Carol to argue that the wealthy have a duty to alleviate poverty and suffering, and that the refusal to acknowledge this duty leads to spiritual and social decay. The novel is structured around Scrooge's journey from callous indifference to compassionate responsibility, embodying Dickens's belief that individual transformation can catalyse social change.

Scrooge's initial characterisation is defined by his complete rejection of social responsibility. His famous response to the charity collectors, "If they would rather die," he says, "they had better do it, and decrease the surplus population", reveals a man who views the poor as an economic problem rather than as human beings deserving compassion. His refusal to give anything, on the grounds that the prisons and workhouses he already pays for are enough, demonstrates his philosophy: the poor are responsible for their own destitution through laziness or moral failing. This perspective was not uncommon in Victorian England, where the Poor Laws were designed to punish poverty rather than alleviate it. Scrooge's worldview reflects the most callous strand of Victorian capitalist philosophy.

His interaction with Fred, his nephew, provides immediate contrast. Fred, though not wealthy, embodies genuine social responsibility through warmth, generosity of spirit, and family connection. His invitation to Christmas dinner is an offer of community and belonging, not charity but genuine human connection. Fred's faith in Christmas as "a good time; a kind, forgiving, charitable, pleasant time" directly opposes Scrooge's view of it as a "humbug". The contrast shows that social responsibility is not contingent on wealth but on spiritual orientation.

The Cratchit family represents the virtuous poor. Despite their poverty, they maintain dignity, integrity, and love. Tiny Tim's illness provides the novel's most poignant moral moment: a child's suffering is presented not as deserved punishment but as an injustice that society (through figures like Scrooge) has failed to address. The Ghost of Christmas Present explicitly makes this moral argument: when Scrooge begs the spirit to say that Tiny Tim will be spared, it answers with Scrooge's own words: "If he be like to die, he had better do it, and decrease the surplus population." This devastating moment forces Scrooge (and the reader) to confront the cruelty embedded in his philosophy.

Dickens uses the three spirits to teach progressive lessons about social responsibility. The Ghost of Christmas Past shows Scrooge his own losses: his love of money cost him Belle, the young woman he was to marry, which reveals the corrupting influence of greed. The Ghost of Christmas Present shows him the actual lives of the poor with journalistic specificity - the Cratchits' small joy, Tiny Tim's approaching death, Scrooge's nephew Fred's genuine happiness despite less wealth. This spirit insists Scrooge see human reality, not economic abstraction. The Ghost of Christmas Yet to Come presents the consequences of continued indifference: Tiny Tim dies, Scrooge's own death is barely noted, and his belongings, down to his bed-curtains and the shirt he was to be buried in, are taken by his charwoman, his laundress and the undertaker's man and sold to a dealer in rags and bones. This final spirit dramatises the ultimate isolation of the selfish.

Scrooge's transformation is presented as regeneration through recognition of social responsibility. His vow at the graveside, "I will honour Christmas in my heart, and try to keep it all the year", translates into specific actions: he raises Cratchit's wage, he helps the poor, he becomes "as good a friend, as good a master, and as good a man, as the good old city knew". These concrete commitments show that Dickens does not present social responsibility as sentiment but as practice. The novel concludes: "And so, as Tiny Tim observed, God bless Us, Every One!" This benediction suggests that salvation - spiritual, moral, and social - comes through mutual responsibility and compassion.

In the context of Victorian society, Dickens's novel is a direct challenge to laissez-faire capitalism and the doctrine that poverty is deserved. By showing that the poor (Cratchits) maintain virtue and dignity while the wealthy (Scrooge) become spiritually deformed through selfishness, Dickens inverts the moral hierarchy of his society. He suggests that wealth without compassion is not success but failure of the highest order. The novel's enduring power lies in its argument that individuals can transform society through choices to exercise social responsibility, and that such transformation is both spiritually necessary and morally imperative.`,
          },
        ],
      },
      {
        id: 'section-2',
        title: 'Section B: Poetry',
        instructions:
          "Answer one question from this section. You should spend approximately 75 minutes on this question. You may choose to write about one poem in detail or compare two poems. You should consider form, language, and the poet's methods.",
        questions: [
          {
            id: 'q3',
            questionNumber: 3,
            marks: 48,
            questionText:
              'Choose one poem from the anthology. Explore how the poet uses language and form to create meaning. Consider the effects of specific poetic devices such as imagery, rhythm, and word choice.',
            bulletPoints: [
              "Identify your chosen poem clearly, with poet's name",
              'Discuss the form of the poem (rhyme scheme, meter, structure)',
              'Analyse specific language choices and imagery',
              "Consider the cumulative effect of the poet's techniques",
            ],
            markScheme: `Band 5 (40-48 marks): Excellent understanding of poem and its techniques. Sophisticated analysis of form and language. Detailed discussion of imagery and word choice. Excellent understanding of cumulative effects. Insightful interpretation.

Band 4 (32-39 marks): Clear understanding. Good analysis of form and language. Identifies imagery and word choice effects. Good textual support.

Band 3 (24-31 marks): Adequate understanding. Some analysis of techniques. Basic discussion of effects.

Band 2 (16-23 marks): Limited understanding. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`,
          },
          {
            id: 'q4',
            questionNumber: 4,
            marks: 48,
            questionText:
              'Compare two poems from the anthology. Explore how both poets present a similar theme or emotion. Consider their language, form, and methods, and evaluate which poem you find more effective in conveying its meaning.',
            bulletPoints: [
              'Clearly identify both poems and poets',
              'Establish the shared theme or emotion',
              "Analyse both poems' approaches to this theme",
              'Make a judgement about effectiveness',
            ],
            markScheme: `Band 5 (40-48 marks): Excellent comparative analysis. Sophisticated understanding of both poems. Detailed analysis of language and form in each. Perceptive evaluation of effectiveness. Sustained focus on comparison.

Band 4 (32-39 marks): Clear comparison. Good analysis of both poems. Makes connections and differences clear. Reasonable evaluation of effectiveness.

Band 3 (24-31 marks): Adequate comparison. Identifies similarities and differences. Some analysis.

Band 2 (16-23 marks): Limited comparison. Basic points about both poems.

Band 1 (0-15 marks): Minimal response.`,
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should spend approximately 60 minutes on this question. You should refer closely to the extract provided and to other parts of the novel.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 48,
            questionText:
              'Read the extract below from the final chapter of "Dr Jekyll and Mr Hyde", Jekyll\'s own statement of the case, in which he describes his first transformation. Explore how Stevenson uses language, sensory imagery, and scientific language to convey both the horror and allure of the transformation.',
            // The two paragraphs of Jekyll's first transformation: the
            // experiment, then what it did to him.
            extract: passage(
              jekyllAndHydeText,
              'section-10',
              'I hesitated long before I put this theory',
              'lost in stature',
            ),
            extractSource:
              'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), Chapter 10. Text: Project Gutenberg #43.',
            markScheme: `Band 5 (40-48 marks): Perceptive analysis of how Stevenson presents the transformation. Sophisticated analysis of language: sensory imagery (heady, current, millrace), juxtaposition of physical and moral change, scientific vocabulary (tincture, salt, ebullition, solution). Excellent understanding of dual perspective - both allure and horror. Shows how this moment reveals Jekyll's psychological state and foreshadows tragedy.

Band 4 (32-39 marks): Clear analysis of language and imagery. Good understanding of sensory effects. Makes connections between scientific language and moral consequences. Good textual support.

Band 3 (24-31 marks): Relevant analysis. Identifies some language techniques and imagery. Basic understanding of transformation's significance.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Stevenson uses strikingly paradoxical language in this extract to convey the allure and the horror of Jekyll's transformation at once, moving from the careful vocabulary of the laboratory to the violence of the body and then to Jekyll's delight in knowing himself wicked.

The first paragraph presents the experiment in the language of science and risk. Jekyll admits that he "hesitated long" before putting his theory "to the test of practice", and he knows the danger: the drug "shook the very fortress of identity" and might "utterly blot out that immaterial tabernacle which I looked to it to change". The metaphors of a "fortress" and a "tabernacle", a sacred tent, present the self as something defended and holy, which makes his decision to assault it seem a kind of sacrilege. The scientific detail of "my tincture", "a firm of wholesale chemists", "a particular salt" and "the last ingredient required" gives the reader the sense of a rational man following a method. Yet the method is carried out on "one accursed night", and the adjective "accursed", written with hindsight, tells the reader that the experiment is damned before it begins. The sensory image of the elements that "boil and smoke together in the glass", with the technical "ebullition", makes the potion look like a small eruption, and he drinks it "with a strong glow of courage", as if bravery rather than temptation drove him.

The horror of the transformation is physical and extreme: "The most racking pangs succeeded: a grinding in the bones, deadly nausea, and a horror of the spirit that cannot be exceeded at the hour of birth or death." The list moves from the bones to the stomach to the spirit, so that the pain spreads through every level of the self, and the comparison with birth and death suggests that one man is dying while another is being born.

Then comes the allure. The agonies "began swiftly to subside", and the new sensations are "something indescribably new and, from its very novelty, incredibly sweet." The rhythm of "I felt younger, lighter, happier in body" is buoyant, and the three adjectives make the change seem a release from age and responsibility. The next clause turns inward: "within I was conscious of a heady recklessness, a current of disordered sensual images running like a millrace in my fancy". A millrace is the fast channel of water that drives a mill wheel, so the simile suggests thoughts rushing beyond control. The phrase "a solution of the bonds of obligation" joins the chemist's language to the moral one: the potion has dissolved Jekyll's sense of duty as a liquid dissolves a salt. The words "an unknown but not an innocent freedom of the soul" admit that the freedom is guilty even as he enjoys it.

The most disturbing sentence reveals Jekyll's complicity. He knows himself "to be more wicked, tenfold more wicked, sold a slave to my original evil", yet "the thought, in that moment, braced and delighted me like wine." The simile of wine makes evil intoxicating and pleasurable, and the image of being "sold a slave" hints that this freedom is really a new bondage. The paragraph ends with a physical detail that is quietly frightening: "I was suddenly aware that I had lost in stature." Hyde's smallness, which the other narrators have already noticed with revulsion, is felt here from the inside.

Stevenson therefore makes the reader share both the attraction and the dread. Jekyll's careful, scientific narration cannot hide the Faustian bargain he has made: he has traded control for sensation, and the delight he feels is the first sign of the enslavement to come.`,
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 48,
            questionText:
              'Explore how Stevenson presents the theme of duality - the conflict between respectability and forbidden desire - in "Dr Jekyll and Mr Hyde". Consider how different characters perceive Jekyll and Hyde, and how Stevenson uses this to comment on Victorian society.',
            bulletPoints: [
              "How Jekyll's respectable persona conflicts with his hidden desires",
              'How others perceive Jekyll and Hyde differently',
              "What Stevenson's portrayal suggests about Victorian hypocrisy",
              'The ultimate consequences of attempting to separate good from evil',
            ],
            markScheme: `Band 5 (40-48 marks): Excellent exploration of duality theme. Sophisticated understanding of how Stevenson presents respectability versus desire. Excellent analysis of how different characters perceive Jekyll/Hyde. Perceptive commentary on Victorian hypocrisy and social values. Strong textual support.

Band 4 (32-39 marks): Clear exploration with good analysis. Makes connections between duality and Victorian society. Good understanding of character perspectives. Solid textual references.

Band 3 (24-31 marks): Relevant exploration. Identifies conflicts and contrasts. Some analysis of Victorian context.

Band 2 (16-23 marks): Limited exploration. Basic points about duality.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Stevenson presents duality as the fundamental human condition, using Jekyll and Hyde to argue that the split between respectable public identity and forbidden private desire is not unique to Jekyll but endemic to Victorian society itself. The novel suggests that attempting to maintain this separation - to be entirely respectable while repressing all transgressive impulse - is not virtuous but neurotic and ultimately dangerous.

Jekyll's respectability is presented as armour and prison simultaneously. As a respected physician and gentleman, Jekyll has achieved social standing, professional success, and moral reputation. Yet beneath this facade, he experiences desires he views as shameful and incompatible with his public identity: sexuality, aggression, the impulses towards cruelty that he associates with his darker nature. The tragedy is that Jekyll does not merely experience these impulses but views them as evidence of a fundamentally evil second self rather than as aspects of his unified personality.

Stevenson's genius is to show that Jekyll and Hyde are not different people but variations on the same man. Jekyll's own statement describes Hyde as "smaller, slighter and younger than Henry Jekyll", and indeed, Hyde appears to be Jekyll's repressed younger self - impulsive, sexual, unconstrained by social propriety. The fact that Hyde is physically smaller and somehow "deformed" suggests that Stevenson views him not as objectively evil but as the monstrous creation of Jekyll's self-repression. Hyde is the inevitable result of attempting to excise half of one's humanity.

The different perceptions of Jekyll are revealing. To society, he is a respectable physician and gentleman. To Utterson, he is a mystery - the lawyer senses something conflicted in Jekyll's behaviour and grows increasingly suspicious. To Hyde's victims, he is a monster. Yet Stevenson demonstrates through Lanyon's horror and eventual death that the real monster may be the respectable Jekyll who, in his arrogance, believed himself capable of separating his moral nature from his animal instincts. Lanyon's death from witnessing the transformation suggests that the true horror is not the existence of evil impulses but the delusion that one can partition oneself.

Stevenson's commentary on Victorian society is damning. The novel suggests that Victorian respectability is built on systematic hypocrisy - the suppression of human impulses deemed inappropriate for public acknowledgment. Men of means and education were expected to maintain absolute propriety while their actual desires, sexuality, and darker impulses were compartmentalised. Stevenson implies that this cultural demand for compartmentalisation does not eliminate the suppressed desires but intensifies them, making them more dangerous and more likely to erupt in violence.

The transformation of Jekyll into Hyde and the eventual dominance of Hyde represents the psychological cost of this sustained hypocrisy. Jekyll's initial ability to control the transformations gradually diminishes; Hyde becomes increasingly dominant. Stevenson suggests that repression cannot be maintained indefinitely - the repressed will return, and with violent force. Jekyll's final confession reveals the tragedy of the duality: he has treated his own shadow self with such revulsion that he cannot integrate it, reabsorb it, or coexist with it. Instead, he chooses death.

The ultimate message is that Stevenson rejects the Victorian attempt to perfect social respectability through the denial of human nature. True integration, psychological wholeness, and moral development require acknowledging and integrating all aspects of oneself, not attempting to split them into separate personas. The novel is both a psychological tragedy and a social critique - a warning that societies built on systematic hypocrisy, where people are forced to hide essential aspects of themselves, create conditions for psychological fragmentation and moral catastrophe.`,
          },
        ],
      },
      {
        id: 'section-2',
        title: 'Section B: Poetry',
        instructions:
          'Answer one question from this section. You should spend approximately 75 minutes on this question.',
        questions: [
          {
            id: 'q3',
            questionNumber: 3,
            marks: 48,
            questionText:
              "Choose one poem from the anthology. Analyse how the poet uses form and language to explore a significant theme or emotion. Consider the effect on the reader of the poet's specific choices.",
            bulletPoints: [
              'Clearly identify poem and poet',
              'Discuss the form (meter, rhyme, stanza structure)',
              'Analyse language, imagery, and word choice',
              'Evaluate the overall effect on the reader',
            ],
            markScheme: `Band 5 (40-48 marks): Excellent analysis of form and language. Sophisticated understanding of how technical choices create meaning. Detailed analysis of imagery and word choice. Insightful understanding of reader effect.

Band 4 (32-39 marks): Clear analysis of form and language. Good discussion of technical choices and effects. Solid textual support.

Band 3 (24-31 marks): Adequate analysis. Some discussion of form and language.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`,
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 40,
            questionText:
              // Until 27 September 2026 this asked the student to refer to "the
              // extract provided", and the paper prints none.
              'Answer on one of the set Shakespeare texts. Explore how Shakespeare presents a significant character, relationship or theme in the play you have studied, referring closely to its language and to key moments across the play.',
            bulletPoints: [
              'Write about your chosen Shakespeare text',
              'Analyse language and dramatic techniques',
              'Consider characterisation and relationships',
              "Discuss the play's themes and ideas",
            ],
            markScheme: `Band 5 (32-40 marks): Excellent understanding and analysis. Sophisticated discussion of language, characterisation, and thematic significance. Excellent integration of textual references.

Band 4 (24-31 marks): Clear understanding with good analysis. Good discussion of techniques and their effects.

Band 3 (16-23 marks): Adequate understanding. Some analysis of key features.

Band 2 (8-15 marks): Limited understanding. Basic analysis.

Band 1 (0-7 marks): Minimal response.`,
          },
        ],
      },
      {
        id: 'section-2',
        title: 'Section B: Post-1914 Literature',
        instructions:
          'Answer one question from this section. You should spend approximately 45 minutes on this question.',
        questions: [
          {
            id: 'q2',
            questionNumber: 2,
            marks: 40,
            // Until 27 September 2026 this printed 147 words as "the extract
            // below from An Inspector Calls": an interrogation of Sheila that is
            // believed not to be Priestley's (see the header), from a play in UK
            // copyright, and the model answer analysed its lines as his. It is
            // now an essay question, as the real Edexcel paper sets in this
            // section, and the answer paraphrases because the play is not held
            // and no quotation of it could be checked.
            questionText:
              "Explore how Priestley presents Sheila Birling's response to the Inspector and the way she changes during An Inspector Calls. In your answer, consider how Priestley uses her to develop the play's ideas about social responsibility, and refer to the context of the play.",
            bulletPoints: [
              'Sheila at the start of the play, before the Inspector arrives',
              "How she reacts when she learns her part in Eva Smith's story",
              "How her response differs from her parents' and Gerald's",
              'What Priestley suggests through her about the younger generation',
            ],
            markScheme: `Band 5 (32-40 marks): Perceptive, sustained exploration of how Priestley presents Sheila's response to the Inspector and her development across the play. Precise reference to key moments (her part in Eva Smith's dismissal from Milwards, her reaction to the photograph, the return of the engagement ring, her refusal at the end to act as if nothing has happened). Sophisticated analysis of Priestley's methods, such as the contrast between the generations and the structure of the Inspector's questioning. Perceptive understanding of context: the 1912 setting, the post-war audience and Priestley's views on social responsibility.

Band 4 (24-31 marks): Clear exploration of Sheila's response and development, with well-chosen references. Clear analysis of Priestley's methods and their effects. Relevant use of context.

Band 3 (16-23 marks): Some exploration of Sheila's response and how she changes. Some relevant references. Some comment on methods and context.

Band 2 (8-15 marks): Limited, mostly narrative comments on Sheila. Limited references.

Band 1 (0-7 marks): Minimal response.`,
            modelAnswer: `Priestley presents Sheila as the character who responds most fully to the Inspector, and he uses the change in her to show that people can learn to accept responsibility for others. The play was written in 1945 but set in 1912, and Sheila, young enough to change, carries Priestley's hope for the generation that would rebuild Britain after the Second World War.

At the start of the play Sheila is excited about her engagement to Gerald and pleased with her comfortable life. Her teasing reminder that Gerald hardly came near her the previous summer hints that she is less naive than she seems, but she has not yet thought about the people whose work pays for that comfort. Her first response to Eva Smith's story is sympathy: when she learns that her father sacked Eva as one of the leaders of a strike for higher wages, she insists that such girls are people, not cheap labour.

The turning point comes when the Inspector shows her the photograph. Sheila recognises the girl, cries out and runs from the room, and Priestley holds back her confession until she returns. What she then admits is petty and ugly. At Milwards, jealous because a dress suited the shop girl better than it suited her, and angry at what she took for the girl's amusement, she complained to the manager and threatened to persuade her mother to close their account unless the girl was dismissed. The Inspector makes her see that she used the power of her family's position against someone who had none. Sheila does not hide behind excuses for long: she admits that she is to blame and promises never to behave like that again. Unlike her father, who defends his sacking of Eva as good business, she accepts that what she did was wrong.

Her response then changes the way she sees the rest of her family. She understands before the others that the Inspector already knows what they have done, and she warns her mother that trying to shut the girl out of the conversation will fail, because the Inspector will break down any wall they put up. After Gerald admits his affair with Daisy Renton, Sheila gives him back the engagement ring. She is honest rather than spiteful about it: she recognises that neither of them is the person who sat down to dinner that evening, and that they would have to start again. She also sees before her mother does where Mrs Birling's condemnation of the young man responsible is leading, and tries to stop her before she condemns her own son.

The ending shows the difference between Sheila and her parents most sharply. When it seems that Goole was not a real inspector and that no girl has died, Mr and Mrs Birling and Gerald are relieved and ready to carry on as before. Sheila refuses. She argues that what each of them did is unchanged whether or not he was a police inspector, and she is frightened by how quickly the others want to forget. Eric stands with her, so the family divides by generation rather than by degree of guilt. The final telephone call, announcing that a girl has died and that an inspector is on his way, proves the young people right and leaves the older generation to face the lesson again.

Through Sheila, Priestley suggests that responsibility begins with admitting one's own part in another person's suffering. Her journey from comfortable thoughtlessness through shame to understanding is the journey he wanted his audience to make. The Birlings of 1912 did not learn, and the audience knew that two world wars followed; Sheila, with Eric, stands for a generation that might. Priestley presents her change as proof that people are not fixed by their class or upbringing, and that a society can become more responsible if its members, like Sheila, are willing to learn.`,
          },
          {
            id: 'q3',
            questionNumber: 3,
            marks: 40,
            questionText:
              "Explore how Priestley presents the Inspector's role in An Inspector Calls. Consider how he functions as a moral voice and the effect he has on different family members. What does this suggest about Priestley's own views on social responsibility?",
            bulletPoints: [
              "The Inspector's methods and manner",
              'His effect on each family member',
              'The mystery surrounding his identity',
              "What his role suggests about Priestley's social philosophy",
            ],
            markScheme: `Band 5 (32-40 marks): Excellent analysis of the Inspector as moral voice and dramatic device. Sophisticated understanding of his psychological manipulation and its effects on different characters. Excellent analysis of how his ambiguous identity functions. Perceptive discussion of Priestley's social philosophy and critique of capitalism.

Band 4 (24-31 marks): Clear analysis of the Inspector's role. Good understanding of his effects on characters. Makes connections to social responsibility themes.

Band 3 (16-23 marks): Adequate analysis. Identifies the Inspector's methods and their effects.

Band 2 (8-15 marks): Limited analysis. Basic points about the Inspector.

Band 1 (0-7 marks): Minimal response.`,
          },
        ],
      },
    ],
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
        instructions:
          'Answer one question from this section. You should spend approximately 60 minutes on this question. You should refer closely to the extract provided and to other parts of the novel.',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            marks: 48,
            questionText:
              "Read the extract below from Chapter 1 of Great Expectations, where Pip encounters the convict Magwitch in the churchyard on the marshes. Explore how Dickens uses setting, language, and atmosphere to create a powerful first impression and to foreshadow Magwitch's later significance to Pip's story.",
            // Great Expectations is not held in src/data/full-texts. This is
            // Project Gutenberg #1400, the eleven paragraphs from "Ours was the
            // marsh country" to the bread, cut by script and pasted, not typed:
            // scripts/check-mock-exam-extracts.mjs checks it against #1400. The
            // marsh paragraph is there because the question asks about setting
            // and a "first impression", which is that paragraph's own subject;
            // without it the extract held almost no setting to write about.
            extract: `Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.

“Hold your noise!” cried a terrible voice, as a man started up from among the graves at the side of the church porch. “Keep still, you little devil, or I’ll cut your throat!”

A fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared, and growled; and whose teeth chattered in his head as he seized me by the chin.

“Oh! Don’t cut my throat, sir,” I pleaded in terror. “Pray don’t do it, sir.”

“Tell us your name!” said the man. “Quick!”

“Pip, sir.”

“Once more,” said the man, staring at me. “Give it mouth!”

“Pip. Pip, sir.”

“Show us where you live,” said the man. “Pint out the place!”

I pointed to where our village lay, on the flat in-shore among the alder-trees and pollards, a mile or more from the church.

The man, after looking at me for a moment, turned me upside down, and emptied my pockets. There was nothing in them but a piece of bread. When the church came to itself,—for he was so sudden and strong that he made it go head over heels before me, and I saw the steeple under my feet,—when the church came to itself, I say, I was seated on a high tombstone, trembling while he ate the bread ravenously.`,
            extractSource:
              'Charles Dickens, Great Expectations (1861), Chapter 1. Text: Project Gutenberg #1400.',
            markScheme: `Band 5 (40-48 marks): Excellent analysis of how Dickens creates atmosphere and foreshadowing. Sophisticated understanding of language accumulation (catalogue of descriptors), setting as reflection of character's state. Excellent analysis of how this first meeting establishes the novel's major themes about social inequality, judgement based on appearance, and redemption. Shows understanding of dramatic irony.

Band 4 (32-39 marks): Clear analysis of setting and language. Good understanding of atmosphere creation. Makes connections to later developments in the novel. Good textual support.

Band 3 (24-31 marks): Relevant analysis. Identifies descriptive techniques and atmospheric effects. Makes some connections to plot.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens uses this first encounter between Pip and Magwitch to establish both the novel's Gothic atmosphere and its central moral concern: the danger of judging people by appearance and social status. The passage shows how hardship is written on the body, and how Pip's first, fear-based judgement of Magwitch will later be revealed as tragically inadequate.

Dickens builds the setting before Magwitch appears, and he builds it through a child's eyes. The first paragraph describes Pip's "first most vivid and broad impression of the identity of things", gained on "a memorable raw afternoon towards evening", so the setting is itself a first impression. One long sentence, held together by the repeated "and that", moves outwards from the graves to "the dark flat wilderness beyond the churchyard", to "the low leaden line beyond", which is the river, and to "the distant savage lair from which the wind was rushing", which is the sea. The adjectives "bleak", "dark", "flat" and "leaden" make the landscape cold and colourless, and the metaphor of a "lair" turns the sea into the den of a wild animal, with the wind rushing out of it. In the same sentence Pip learns that his parents and his five infant brothers are "dead and buried", so the churchyard is a place of loss as well as cold. The sentence ends with the child himself, "the small bundle of shivers growing afraid of it all and beginning to cry", and only its last word, "Pip", tells the reader who he is. He is one more small thing in the landscape, and the setting reflects his state: he is afraid before anyone has spoken.

The encounter then bursts in without warning. Magwitch's first words are the command "Hold your noise!", described as "a terrible voice", from "a man started up from among the graves at the side of the church porch". The setting makes him seem to rise from the dead, and his threat, "Keep still, you little devil, or I'll cut your throat!", is shocking in its violence towards a child.

The description of Magwitch is built from accumulating fragments. "A fearful man, all in coarse grey, with a great iron on his leg." The sentence has no main verb, as if the frightened child can register only images. Then comes the list: "A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars". Dickens uses polysyndeton, the repeated "and", to create an overwhelming catalogue of injury, and each verb is passive: the man has been soaked, smothered, lamed, cut, stung and torn. The marshes have done these things to him, and the grammar makes him a victim before he is a villain. When Dickens adds that he "limped, and shivered, and glared, and growled", the reader sees both a savage animal and a suffering man.

The iron on his leg is particularly significant. It identifies him as a convict, someone society has literally shackled. For young Pip the iron triggers terror, yet it also evokes pity: this man is hunted and starving, as the end of the extract shows when he eats "the bread ravenously".

The dialogue shows the gap between them. Pip's "Oh! Don't cut my throat, sir," and "Pray don't do it, sir." are desperate and polite, while Magwitch's "Tell us your name!" and "Quick!" are clipped commands. When he demands "Give it mouth!", the child repeats "Pip. Pip, sir." The name that opens the novel is the first thing Magwitch takes from him, and it foreshadows how closely their lives will be bound. Pip's home, "a mile or more from the church", stresses how alone he is with this stranger.

The setting then turns literally upside down. Magwitch "turned me upside down, and emptied my pockets", and the church goes "head over heels before me, and I saw the steeple under my feet". The image is comic and frightening at once, and it foreshadows how Magwitch will overturn Pip's world a second time, when he is revealed as the source of Pip's fortune. The extract ends with Pip "seated on a high tombstone, trembling" in the churchyard where his parents are buried, while the convict eats.

The dramatic irony is profound. Young Pip, terrified by Magwitch's appearance, judges him as dangerous and criminal. The novel's entire trajectory becomes a revelation of how wrong this first judgement is. Magwitch, though guilty of crime, proves more loyal and generous than many of the respectable characters Pip meets. By showing the man's hunger and injuries as closely as his menace, Dickens invites the reader to look beyond appearance and social status to the human reality beneath.`,
          },
          {
            id: 'q2',
            questionNumber: 2,
            marks: 48,
            questionText:
              "Explore how Dickens presents the theme of social class and social aspiration in Great Expectations. Consider how Pip's desire to become a gentleman reflects the novel's critique of Victorian values and class consciousness. How does Dickens use other characters to develop this theme?",
            bulletPoints: [
              "Pip's initial shame about his origins and working-class status",
              'The sources of Pip\'s "great expectations" and what this reveals about class',
              'How characters like Magwitch, Estella, and Miss Havisham embody different relationships to class',
              "Dickens's final statement about the value of self-improvement versus inherited status",
            ],
            markScheme: `Band 5 (40-48 marks): Excellent, sustained exploration of class as central theme. Sophisticated analysis of Pip's psychology and moral development. Excellent analysis of how supporting characters illuminate the theme. Strong understanding of Dickens's critique of social hierarchy. Excellent contextual awareness of Victorian class obsession.

Band 4 (32-39 marks): Clear exploration with good analysis. Makes connections between Pip's aspirations and social critique. Good analysis of character parallels. Solid textual support.

Band 3 (24-31 marks): Adequate exploration. Identifies class concerns. Some analysis of Pip's development and character contrasts.

Band 2 (16-23 marks): Limited exploration. Basic points about class and aspiration.

Band 1 (0-15 marks): Minimal response.`,
            modelAnswer: `Dickens presents social class in Great Expectations not as a fixed or meaningful hierarchy but as a destructive illusion that damages individual moral development and social cohesion. Through Pip's journey from pride in his origins to shame to eventual wisdom, Dickens critiques the Victorian obsession with gentility and inherited status.

Pip's initial shame about his working-class background is presented as a form of moral corruption. As a young boy, Pip is content with the prospect of being apprenticed to Joe, the blacksmith; he respects Joe and views his future without resentment. Yet once he meets Estella and becomes aware that gentlemen exist in a realm above him, shame infects his consciousness. Estella's casual cruelty - suggesting that Pip's hands are coarse, his manner uncouth - produces in him an agonising sense of inadequacy. Dickens makes clear that this shame is not innate but socially constructed; Estella, herself damaged by Miss Havisham's twisted training, transmits class consciousness to Pip as a weapon of humiliation.

Pip's "great expectations" originate from a misunderstanding: he assumes his mysterious benefactor is Miss Havisham, intending to make him a gentleman so he can marry Estella. This assumption reveals Dickens's critique of gentility: Pip believes that becoming a gentleman involves acquiring surface refinement - fashionable clothes, polished manner, exclusion from work. In fact, Pip's pursuit of gentility involves abandoning the qualities that made him admirable: his loyalty to Joe, his contentment with honest labour, his natural kindness.

Magwitch's revelation that he, a convict, is Pip's benefactor is the novel's most devastating commentary on class. Pip's "great expectations" come from the lowest possible source; the gentleman Pip has become owes everything to a criminal transported to Australia. This reversal demonstrates that class status is arbitrary and unstable. A convict can achieve financial success through hard work; a gentleman can be morally corrupt. Estella, herself the product of criminal parentage, is revealed to be Pip's equal through birth despite her refined manners. Dickens suggests that "gentlemen" and "convicts" are not ontologically different kinds of beings but individuals differentiated only by social circumstance and individual moral choice.

Miss Havisham embodies the destructive nature of class consciousness. Wealthy enough to be a "lady," she has channelled her wealth into creating a decaying shrine to herself, using Estella as an instrument to exact vengeance on men for her own humiliation at being jilted. Her shut-up house, with its clocks stopped at the moment of her abandonment, represents the way that class obsession can freeze a life into sterility and revenge.

Estella represents those damaged by the class system itself. Neither fully criminal (she is Magwitch's daughter) nor fully genteel (despite her refined training), she cannot find authentic identity or genuine love. Her suffering is produced by Miss Havisham's attempt to instrumentalise her as a class weapon. For most of the novel Estella is beautiful and socially perfect but emotionally dead, and only the suffering of her marriage to Drummle teaches her to feel. Dickens suggests that those who treat others as means to class advancement destroy both themselves and their victims.

Joe Gargery represents the novel's alternative value system. Honest, loyal, humble, and kind, Joe possesses genuine gentility - the refinement of character that should be more valued than acquired polish. Pip's eventual reconciliation with Joe, when he begs "Don't be so good to me!" and prays "O God bless this gentle Christian man!", represents his moral education. Pip learns that true gentility is not about appearance or status but about integrity and compassion.

Dickens's final statement about class comes through Pip's realisation that his "great expectations" were misguided. The novel does not dismiss the possibility of improvement or aspiration, but it distinguishes between self-improvement through honest education and moral development versus advancement through class climbing and the rejection of one's origins. Pip's greatest achievement is not becoming a gentleman but becoming genuinely good - learning to see beyond social appearances to human worth.

The novel is ultimately both a critique of rigid Victorian class hierarchy and a subtle warning about the dangers of aspiration based on shame. Dickens argues for a society in which birth and status matter less than character, and in which people are valued for their moral qualities rather than their gentility. Magwitch's transformation through love for Pip, and Pip's transformation through suffering and moral awakening, suggest that society's redemption lies in transcending the class system that produces such damaged and limiting identities.`,
          },
        ],
      },
      {
        id: 'section-2',
        title: 'Section B: Poetry',
        instructions:
          'Answer one question from this section. You should spend approximately 75 minutes on this question.',
        questions: [
          {
            id: 'q3',
            questionNumber: 3,
            marks: 48,
            questionText:
              'Choose one poem from the anthology. Explore how the poet uses language and form to convey a particular emotion or idea. Consider the effects of specific poetic techniques on the reader.',
            bulletPoints: [
              'Clearly identify the poem and poet',
              'Discuss the form of the poem (meter, stanza structure, rhyme)',
              'Analyse language choices and their effects',
              'Consider the cumulative emotional or intellectual impact',
            ],
            markScheme: `Band 5 (40-48 marks): Excellent analysis of form and language. Sophisticated understanding of how technical choices create meaning. Detailed analysis of specific techniques and their effects. Excellent understanding of cumulative impact.

Band 4 (32-39 marks): Clear analysis of form and language. Good discussion of techniques. Good textual support. Clear understanding of effects.

Band 3 (24-31 marks): Adequate analysis. Some discussion of form and language techniques.

Band 2 (16-23 marks): Limited analysis. Basic identification of features.

Band 1 (0-15 marks): Minimal response.`,
          },
          {
            id: 'q4',
            questionNumber: 4,
            marks: 48,
            questionText:
              'Compare two poems from the anthology. Explore how both poets present a similar theme, emotion, or human experience. Evaluate which poem you find more effective in conveying its meaning, referring closely to language and form.',
            bulletPoints: [
              'Clearly identify both poems and poets',
              'Establish the shared theme or experience',
              "Analyse both poems' treatment with specific textual references",
              'Make a supported judgement about effectiveness',
            ],
            markScheme: `Band 5 (40-48 marks): Excellent comparative analysis. Sophisticated analysis of both poems. Detailed discussion of form and language in each. Perceptive evaluation of effectiveness with clear reasoning.

Band 4 (32-39 marks): Clear comparison with good analysis. Makes meaningful connections and contrasts. Good evaluation of effectiveness.

Band 3 (24-31 marks): Adequate comparison. Identifies similarities and differences. Some analysis.

Band 2 (16-23 marks): Limited comparison. Basic points about both poems.

Band 1 (0-15 marks): Minimal response.`,
          },
        ],
      },
    ],
  },
]
