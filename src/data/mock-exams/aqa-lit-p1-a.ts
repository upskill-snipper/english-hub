// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * AQA English Literature Paper 1 (8702/1): five practice papers, each a
 * Macbeth extract question followed by an essay on A Christmas Carol or Jekyll
 * and Hyde. All five papers are live.
 *
 * WHAT WAS WRONG (found 26 September 2026, fixed 27 September 2026). The five
 * Macbeth extracts were written for this bank "in the style of" the play and
 * labelled "Original composition", yet every question introduced its extract
 * with "Read the following extract from Macbeth", so a student revising for
 * the exam was handed invented verse as Shakespeare's. The inventions were
 * stitched round real lines (9 of the 22 sentences of the fifth were
 * verbatim), which made them harder to spot: the first opened "Is this a
 * purpose that I see before me, / The crown yet floating just beyond my
 * reach?" where the dagger soliloquy should be. The model answers analysed
 * the invented lines, one quoted an image ("coiled beneath the sweetest
 * flowers") from another paper's extract, and others misquoted the play
 * ("feeling it as a man" for "feel it as a man"; "their sense is shut" for
 * "their sense are shut"). The essay answers misquoted the novels as well:
 * Jekyll and Hyde ("let the name of Hyde be unmentioned", in no edition;
 * "could not specify the point" for "couldn't"; "concealed his pleasures" for
 * Jekyll's own "I concealed my pleasures"; "If he be Mr Hyde, I shall be Mr
 * Seek" run together across Utterson's "he had thought") and A Christmas
 * Carol ("a throne of turkeys, geese, game, poultry"; Belle's "golden idol",
 * where she says "Another idol" and "A golden one"; "a vacant chair" for "a
 * vacant seat"; "fifteen bob a week"; "the expected sheet of gravy", which
 * Dickens never wrote; the Field Lane Ragged School visit dated a year early,
 * when it was September 1843). Several more were right in their words but
 * not their case or commas, and are now as the editions print them. None of
 * this was checked by anything until scripts/check-mock-exam-extracts.mjs.
 *
 * WHAT IT IS NOW. Each extract is a genuine passage of the scene its
 * invention imitated, cut from the held edition, src/data/full-texts/
 * macbeth.ts (Project Gutenberg eBook #1533), by passage() in
 * src/lib/study-guides/passage.ts and written into this file by script, never
 * typed. It is set out as the bank prints a play: the speaker's name on its
 * own line, a line break per verse line, and stage directions bracketed
 * without the edition's italic underscores, as playPassage() prints them. The
 * cuts, from the paragraph holding the first phrase to the one holding the
 * second:
 *
 *   01  Act 2, Scene 1  "Go bid thy mistress"    to "summons thee to heaven"
 *   02  Act 1, Scene 7  "I dare do all"          to "false heart doth know"
 *   03  Act 5, Scene 5  "Hang out our banners"   to "Signifying nothing"
 *   04  Act 1, Scene 3  "So foul and fair"       to "Speak, I charge you"
 *   05  Act 2, Scene 2  "I have done the deed"   to "dare not"
 *
 * They are literals rather than passage() calls for two reasons: the checker
 * reads a bank's passages from its source, and this module is the chunk the
 * browser downloads for one paper, so importing the whole play (about 130 KB)
 * to print five speeches would be a poor trade. Each question now names its
 * act and scene and says where the extract falls, as AQA's papers do; the
 * questions themselves (ambition, gender and power, lost hope, the
 * supernatural, guilt) are unchanged. Every Macbeth model answer was
 * rewritten against the real passage. Every quotation of a set text in the
 * file, from an extract or from elsewhere in the work, now follows the held
 * edition's wording ("wither'd murder", "Pr'ythee", "Tomorrow, and tomorrow,
 * and tomorrow"); the few quoted phrases that are not the texts' words are a
 * chapter title ("Full Statement"), a gloss on Macbeth's "become", a coinage
 * and the 1885 Act's "gross indecency".
 *
 * ON REVIEW (27 September 2026). Right quotations can sit inside wrong claims,
 * and no quotation check reads the claims. A second pass against the held
 * texts found these in claims the rewrite had not checked, and corrected
 * them: Lanyon was credited with a "Full Statement", which is the title of
 * Jekyll's chapter; the front door of Jekyll's house was said to be "never
 * locked", which the novel never says; Hyde's by-street was "a dark,
 * neglected lane" where Stevenson makes it a thriving, clean street with one
 * neglected door; the servants were said to "say nothing", though Poole goes
 * to Utterson; Hyde's cheque was for "one hundred pounds" where Enfield says ten
 * pounds in gold and a cheque for the balance; the Ghost of Christmas
 * Present's torch was "non-discriminating" when it blesses "a poor one most";
 * Mrs Cratchit was said to fear the pudding "will be insufficient" when she
 * fears it is underdone, broken or stolen, and the pudding was "tiny" where
 * the narrator only lets it be small; Bob's rise, given the day after
 * Christmas, was put on Christmas morning; a Grade 6-7 answer called
 * Scrooge's "own low temperature" pathetic fallacy, which it reverses; and a
 * mark scheme called Utterson an unreliable narrator, when he narrates
 * nothing. The first question's note said the servant had already been sent
 * to bed, which is the extract's first line.
 *
 * To check: node scripts/check-mock-exam-extracts.mjs --file aqa-lit-p1-a
 */

// ─── Macbeth extracts, cut from the held edition (see above) ───────────────

const MACBETH_EXTRACT_01 = `MACBETH
Go bid thy mistress, when my drink is ready,
She strike upon the bell. Get thee to bed.

[Exit Servant.]

Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch thee:—
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible
To feeling as to sight? or art thou but
A dagger of the mind, a false creation,
Proceeding from the heat-oppressed brain?
I see thee yet, in form as palpable
As this which now I draw.
Thou marshall’st me the way that I was going;
And such an instrument I was to use.
Mine eyes are made the fools o’ the other senses,
Or else worth all the rest: I see thee still;
And on thy blade and dudgeon, gouts of blood,
Which was not so before.—There’s no such thing.
It is the bloody business which informs
Thus to mine eyes.—Now o’er the one half-world
Nature seems dead, and wicked dreams abuse
The curtain’d sleep. Witchcraft celebrates
Pale Hecate’s off’rings; and wither’d murder,
Alarum’d by his sentinel, the wolf,
Whose howl’s his watch, thus with his stealthy pace,
With Tarquin’s ravishing strides, towards his design
Moves like a ghost.—Thou sure and firm-set earth,
Hear not my steps, which way they walk, for fear
Thy very stones prate of my whereabout,
And take the present horror from the time,
Which now suits with it.—Whiles I threat, he lives.
Words to the heat of deeds too cold breath gives.

[A bell rings.]

I go, and it is done. The bell invites me.
Hear it not, Duncan, for it is a knell
That summons thee to heaven or to hell.`

const MACBETH_EXTRACT_01_SOURCE =
  'William Shakespeare, Macbeth, Act 2, Scene 1 (Project Gutenberg eBook #1533)'

const MACBETH_EXTRACT_02 = `MACBETH
Pr’ythee, peace!
I dare do all that may become a man;
Who dares do more is none.

LADY MACBETH
What beast was’t, then,
That made you break this enterprise to me?
When you durst do it, then you were a man;
And, to be more than what you were, you would
Be so much more the man. Nor time nor place
Did then adhere, and yet you would make both:
They have made themselves, and that their fitness now
Does unmake you. I have given suck, and know
How tender ’tis to love the babe that milks me:
I would, while it was smiling in my face,
Have pluck’d my nipple from his boneless gums
And dash’d the brains out, had I so sworn as you
Have done to this.

MACBETH
If we should fail?

LADY MACBETH
We fail?
But screw your courage to the sticking-place,
And we’ll not fail. When Duncan is asleep
(Whereto the rather shall his day’s hard journey
Soundly invite him), his two chamberlains
Will I with wine and wassail so convince
That memory, the warder of the brain,
Shall be a fume, and the receipt of reason
A limbeck only: when in swinish sleep
Their drenched natures lie as in a death,
What cannot you and I perform upon
Th’ unguarded Duncan? what not put upon
His spongy officers; who shall bear the guilt
Of our great quell?

MACBETH
Bring forth men-children only;
For thy undaunted mettle should compose
Nothing but males. Will it not be receiv’d,
When we have mark’d with blood those sleepy two
Of his own chamber, and us’d their very daggers,
That they have done’t?

LADY MACBETH
Who dares receive it other,
As we shall make our griefs and clamour roar
Upon his death?

MACBETH
I am settled, and bend up
Each corporal agent to this terrible feat.
Away, and mock the time with fairest show:
False face must hide what the false heart doth know.`

const MACBETH_EXTRACT_02_SOURCE =
  'William Shakespeare, Macbeth, Act 1, Scene 7 (Project Gutenberg eBook #1533)'

const MACBETH_EXTRACT_03 = `MACBETH
Hang out our banners on the outward walls;
The cry is still, “They come!” Our castle’s strength
Will laugh a siege to scorn: here let them lie
Till famine and the ague eat them up.
Were they not forc’d with those that should be ours,
We might have met them dareful, beard to beard,
And beat them backward home.

[A cry of women within.]

What is that noise?

SEYTON
It is the cry of women, my good lord.

[Exit.]

MACBETH
I have almost forgot the taste of fears.
The time has been, my senses would have cool’d
To hear a night-shriek; and my fell of hair
Would at a dismal treatise rouse and stir
As life were in’t. I have supp’d full with horrors;
Direness, familiar to my slaughterous thoughts,
Cannot once start me.

[Enter Seyton.]

Wherefore was that cry?

SEYTON
The Queen, my lord, is dead.

MACBETH
She should have died hereafter.
There would have been a time for such a word.
Tomorrow, and tomorrow, and tomorrow,
Creeps in this petty pace from day to day,
To the last syllable of recorded time;
And all our yesterdays have lighted fools
The way to dusty death. Out, out, brief candle!
Life’s but a walking shadow; a poor player,
That struts and frets his hour upon the stage,
And then is heard no more: it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.`

const MACBETH_EXTRACT_03_SOURCE =
  'William Shakespeare, Macbeth, Act 5, Scene 5 (Project Gutenberg eBook #1533)'

const MACBETH_EXTRACT_04 = `MACBETH
So foul and fair a day I have not seen.

BANQUO
How far is’t call’d to Forres?—What are these,
So wither’d, and so wild in their attire,
That look not like the inhabitants o’ th’ earth,
And yet are on’t?—Live you? or are you aught
That man may question? You seem to understand me,
By each at once her choppy finger laying
Upon her skinny lips. You should be women,
And yet your beards forbid me to interpret
That you are so.

MACBETH
Speak, if you can;—what are you?

FIRST WITCH
All hail, Macbeth! hail to thee, Thane of Glamis!

SECOND WITCH
All hail, Macbeth! hail to thee, Thane of Cawdor!

THIRD WITCH
All hail, Macbeth! that shalt be king hereafter!

BANQUO
Good sir, why do you start and seem to fear
Things that do sound so fair?—I’ th’ name of truth,
Are ye fantastical, or that indeed
Which outwardly ye show? My noble partner
You greet with present grace and great prediction
Of noble having and of royal hope,
That he seems rapt withal. To me you speak not.
If you can look into the seeds of time,
And say which grain will grow, and which will not,
Speak then to me, who neither beg nor fear
Your favours nor your hate.

FIRST WITCH
Hail!

SECOND WITCH
Hail!

THIRD WITCH
Hail!

FIRST WITCH
Lesser than Macbeth, and greater.

SECOND WITCH
Not so happy, yet much happier.

THIRD WITCH
Thou shalt get kings, though thou be none:
So all hail, Macbeth and Banquo!

FIRST WITCH
Banquo and Macbeth, all hail!

MACBETH
Stay, you imperfect speakers, tell me more.
By Sinel’s death I know I am Thane of Glamis;
But how of Cawdor? The Thane of Cawdor lives,
A prosperous gentleman; and to be king
Stands not within the prospect of belief,
No more than to be Cawdor. Say from whence
You owe this strange intelligence? or why
Upon this blasted heath you stop our way
With such prophetic greeting?—Speak, I charge you.`

const MACBETH_EXTRACT_04_SOURCE =
  'William Shakespeare, Macbeth, Act 1, Scene 3 (Project Gutenberg eBook #1533)'

const MACBETH_EXTRACT_05 = `MACBETH
I have done the deed.—Didst thou not hear a noise?

LADY MACBETH
I heard the owl scream and the crickets cry.
Did not you speak?

MACBETH
When?

LADY MACBETH
Now.

MACBETH
As I descended?

LADY MACBETH
Ay.

MACBETH
Hark!—Who lies i’ th’ second chamber?

LADY MACBETH
Donalbain.

MACBETH
This is a sorry sight.

[Looking on his hands.]

LADY MACBETH
A foolish thought, to say a sorry sight.

MACBETH
There’s one did laugh in’s sleep, and one cried, “Murder!”
That they did wake each other: I stood and heard them.
But they did say their prayers, and address’d them
Again to sleep.

LADY MACBETH
There are two lodg’d together.

MACBETH
One cried, “God bless us!” and, “Amen,” the other,
As they had seen me with these hangman’s hands.
List’ning their fear, I could not say “Amen,”
When they did say, “God bless us.”

LADY MACBETH
Consider it not so deeply.

MACBETH
But wherefore could not I pronounce “Amen”?
I had most need of blessing, and “Amen”
Stuck in my throat.

LADY MACBETH
These deeds must not be thought
After these ways; so, it will make us mad.

MACBETH
Methought I heard a voice cry, “Sleep no more!
Macbeth does murder sleep,”—the innocent sleep;
Sleep that knits up the ravell’d sleave of care,
The death of each day’s life, sore labour’s bath,
Balm of hurt minds, great nature’s second course,
Chief nourisher in life’s feast.

LADY MACBETH
What do you mean?

MACBETH
Still it cried, “Sleep no more!” to all the house:
“Glamis hath murder’d sleep, and therefore Cawdor
Shall sleep no more. Macbeth shall sleep no more!”

LADY MACBETH
Who was it that thus cried? Why, worthy thane,
You do unbend your noble strength to think
So brainsickly of things. Go get some water,
And wash this filthy witness from your hand.—
Why did you bring these daggers from the place?
They must lie there: go carry them, and smear
The sleepy grooms with blood.

MACBETH
I’ll go no more:
I am afraid to think what I have done;
Look on’t again I dare not.`

const MACBETH_EXTRACT_05_SOURCE =
  'William Shakespeare, Macbeth, Act 2, Scene 2 (Project Gutenberg eBook #1533)'

// ─── Papers ──────────────────────────────────────────────────────────────────

export const aqaLitP1Papers: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER A - Macbeth (Ambition) + A Christmas Carol
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p1-a',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 68,
    sections: [
      {
        id: 'aqa-lit-p1-a-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer one question from this section. You are advised to spend about 55 minutes on this section.',
        totalMarks: 38,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-a-q1',
            questionNumber: 1,
            questionText:
              "Read the following extract from Act 2 Scene 1 of Macbeth and then answer the question that follows.\n\nAt this point in the play Banquo has just left Macbeth, who is waiting for Lady Macbeth's signal that it is time to murder King Duncan.\n\nStarting with this extract, how does Shakespeare present the theme of ambition and its consequences?\n\nWrite about:\n- how Shakespeare presents ambition in this extract\n- how Shakespeare presents ambition in the play as a whole.\n\n[30 marks + 4 marks for AO4 (SPaG)]",
            marks: 34,
            suggestedTimeMinutes: 55,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_01,
            extractSource: MACBETH_EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Shakespeare shows Macbeth\'s ambition at the moment it turns into murder. At the start he sends his servant to bed with a message for Lady Macbeth: she is to "strike upon the bell" when his drink is ready. This sounds like an ordinary household instruction, but the bell is really the signal for the murder, which shows how ambition has made Macbeth secretive and deceitful.\n\nAlone on stage, Macbeth sees a dagger in the air: "Is this a dagger which I see before me, / The handle toward my hand?" The handle points towards him as if the dagger is offering itself, which suggests that his ambition is pulling him towards the murder. He tries to grab it, "Come, let me clutch thee", but cannot, so he wonders whether it is "A dagger of the mind", something his own thoughts have made. This shows that ambition has taken over his imagination.\n\nThen the dagger seems to change, and he sees "gouts of blood" on it. This shows he knows that the consequence of his ambition will be bloodshed. He describes the night as a time when "Nature seems dead" and "wicked dreams" trouble people\'s sleep, which creates an evil atmosphere and suggests the murder goes against nature.\n\nWhen the bell rings, Macbeth says "I go, and it is done." The short, simple words show that he has made his decision. The extract ends with a rhyming couplet: the bell is "a knell / That summons thee to heaven or to hell". A knell is the bell rung for a death, so Macbeth is already treating Duncan as dead.\n\nIn the play as a whole, ambition has terrible consequences. The witches\' prophecy puts the idea of being king into Macbeth\'s mind, and Lady Macbeth pushes him on. Before the murder he admits that he has nothing to drive him on except "Vaulting ambition, which o\'erleaps itself / And falls on th\' other", which predicts his own fall. Once he is king he never feels safe, so he has Banquo murdered and later Macduff\'s wife and children. By the end his wife is dead, his thanes have deserted him and Macduff kills him. Shakespeare shows that ambition without a conscience destroys the person who has it.',
              'Grade 6-7':
                'Shakespeare presents this soliloquy as the point at which Macbeth\'s ambition stops being a thought and becomes an act, and the extract is shaped to show both the pull of that ambition and the horror of where it leads. It opens with deception: Macbeth tells his servant that Lady Macbeth should "strike upon the bell" when his "drink is ready", disguising the signal for murder as a domestic routine. From the start, ambition depends on a false surface.\n\nThe dagger is the extract\'s central image. Macbeth\'s opening question, "Is this a dagger which I see before me, / The handle toward my hand?", presents the weapon as offering itself to him: the handle, not the blade, points his way, as if murder were being made easy. The line "Thou marshall\'st me the way that I was going" is revealing. "Marshall\'st" is a military verb, so the soldier praised in Act 1 is now being commanded by his own desire; yet "the way that I was going" admits that the dagger only confirms a path Macbeth had already chosen. Shakespeare leaves open whether the vision is supernatural or "A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain", but either way it is the shape his ambition takes.\n\nThe consequences of that ambition appear inside the vision itself. The dagger acquires "gouts of blood, / Which was not so before", as though the more firmly Macbeth resolves, the more clearly the violence shows. He tries to dismiss it ("There\'s no such thing") and renames the murder "the bloody business", a euphemism that recalls Lady Macbeth\'s "This night\'s great business" in Act 1 Scene 5 and shows ambition needing softer words for what it plans.\n\nThe second half of the soliloquy widens from Macbeth\'s mind to the whole world: "Now o\'er the one half-world / Nature seems dead, and wicked dreams abuse / The curtain\'d sleep". Night, witchcraft and "wither\'d murder" gather round him, and Murder moves "With Tarquin\'s ravishing strides, towards his design". Tarquin was the Roman prince whose crime brought down his family\'s monarchy, so the allusion quietly predicts the consequence: a crime committed to gain a throne will lose it. Macbeth even asks the "sure and firm-set earth" not to hear his steps, for fear that its "very stones prate of my whereabout", which shows that ambition has made him fear exposure by nature itself.\n\nThe ending is abrupt. "Whiles I threat, he lives" admits that talk delays the deed, and after the bell rings Macbeth says "I go, and it is done", monosyllables that treat the murder as finished before it has begun. The final couplet, "a knell / That summons thee to heaven or to hell", closes the scene like a sentence being passed, although it is Macbeth\'s soul, more than Duncan\'s, that is in danger.\n\nAcross the play, ambition brings Macbeth everything he wanted and nothing he hoped for. He knows in Act 1 Scene 7 that "Vaulting ambition, which o\'erleaps itself / And falls on th\' other" will ruin him. As king he discovers that "To be thus is nothing, / But to be safely thus", and the need for safety drives him to murder Banquo and Macduff\'s family. For an audience that had lived through the Gunpowder Plot of 1605, the killing of an anointed king was the worst of crimes, and Shakespeare shows ambition that ignores God\'s order ending in a life "Signifying nothing".',
              'Grade 8-9':
                'Shakespeare presents ambition in this extract less as a desire than as a way of seeing. The soliloquy dramatises a mind in which wanting the crown has begun to reshape perception, language and the natural world, and every stage of that reshaping carries its own consequence.\n\nThe extract begins with a small act of concealment. Macbeth\'s instruction that his wife should "strike upon the bell" when his "drink is ready" is a coded signal dressed as household routine, and it establishes the double language the Macbeths have adopted since Lady Macbeth urged him to "look like the innocent flower, / But be the serpent under\'t". Ambition has already cost Macbeth plain speech.\n\nThe dagger is the play\'s most famous image of ambition because it is so precisely ambiguous. "Is this a dagger which I see before me, / The handle toward my hand?" frames the weapon as an offer: it is presented handle first, as a servant presents a tool. Macbeth moves from invitation ("Come, let me clutch thee") to the frustration of "I have thee not, and yet I see thee still", which is a fair description of ambition itself, an object always visible and never held. When he calls it a "fatal vision", the adjective carries both its senses, sent by fate and bringing death, so the question of whether the witches\' prophecy has fixed Macbeth\'s course is folded into a single word. His rational explanation, "A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain", does not dissolve the vision; knowing it may be false does not make it vanish. Ambition, once admitted, is not controlled by being understood.\n\nThe most revealing line is "Thou marshall\'st me the way that I was going". The military verb recalls the soldier of Act 1 Scene 2, but the relationship is inverted: the dagger commands and Macbeth follows. Yet "the way that I was going" concedes that the vision leads nowhere he had not already chosen to go, so the line holds the play\'s central question about agency in balance: the supernatural may prompt, but the will consents. When he adds "And such an instrument I was to use", the dagger becomes an "instrument", the word Banquo used in Act 1 Scene 3 when he warned that "The instruments of darkness tell us truths" in order "to win us to our harm". The man who means to use an instrument is himself being used as one.\n\nThe consequence of ambition then becomes visible within the hallucination: "on thy blade and dudgeon, gouts of blood, / Which was not so before". The blood appears as the resolve hardens, so the violence is not an accident that follows ambition but something ambition contained from the outset. Macbeth\'s attempt to neutralise the sight, "It is the bloody business which informs / Thus to mine eyes", turns murder into "business", the word of a man who needs to describe the act without naming it.\n\nThe soliloquy then widens into a nocturne in which the whole natural order is recruited. "Nature seems dead", "Witchcraft celebrates / Pale Hecate\'s off\'rings", and "wither\'d murder" moves "With Tarquin\'s ravishing strides, towards his design". Macbeth never says "I" in these lines; he has become the personified figure of Murder, as if ambition had dissolved his identity into the role he is about to play. The Tarquin allusion, a story Shakespeare had told at length in The Rape of Lucrece, recalls a crime by a king\'s son that ended the Roman monarchy, and it foreshadows the consequence Macbeth discovers in Act 3 Scene 1: "Upon my head they plac\'d a fruitless crown, / And put a barren sceptre in my gripe". A crown taken by crime cannot be passed on.\n\nThe final movement returns to action with brutal economy. The couplet "Whiles I threat, he lives: / Words to the heat of deeds too cold breath gives" rejects reflection itself, as if conscience were only a delay. "I go, and it is done" collapses the present into the completed deed, and "The bell invites me" gives agency to an object once more. The closing couplet, "Hear it not, Duncan, for it is a knell / That summons thee to heaven or to hell", ends the scene in the language of judgement, and the dramatic irony is that the soul whose destination is really in question is the speaker\'s.\n\nAcross the play, Shakespeare makes ambition a structure of diminishing returns. Every fulfilled prophecy produces fresh fear rather than satisfaction: "To be thus is nothing, / But to be safely thus". By Act 3 Scene 4 Macbeth is "in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er", and the crown he reaches for in this extract ends as "a tale / Told by an idiot, full of sound and fury, / Signifying nothing". In its Jacobean context this is also a political argument. Macduff calls Duncan\'s body "The Lord\'s anointed temple", and Shakespeare, writing for a king who traced his line to Banquo and had survived the Gunpowder Plot, presents regicidal ambition as a violation of a divinely sanctioned order that brings its own punishment. Macbeth\'s ambition is tragic in Aristotle\'s sense because it grows from qualities the play admires, courage and imagination, and the same imagination that conjures the dagger is what makes his punishment so complete.',
            },
            markScheme: [
              'AO1: Perceptive, developed response to extract and whole text with judicious textual references',
              "AO2: Analysis of Shakespeare's methods (language, form, structure) including soliloquy, the dagger as an image of ambition, euphemism, personification, allusion and the closing couplet",
              'AO3: Understanding of relevant context - Jacobean attitudes to kingship, the Divine Right of Kings, the Great Chain of Being, the Gunpowder Plot',
              'AO4: Accurate spelling, punctuation, and grammar with use of specialist terminology',
              "Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise, well-integrated references; analysis of writer's methods with subject terminology used judiciously; exploration of ideas/context convincingly integrated",
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-a-sec-b',
        title: 'Section B: The 19th-Century Novel - A Christmas Carol',
        description:
          'Answer one question from this section. You are advised to spend about 50 minutes on this section.',
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-a-q2',
            questionNumber: 2,
            questionText:
              "How does Dickens present Scrooge's transformation throughout A Christmas Carol?\n\nWrite about:\n- how Dickens presents Scrooge at different points in the novella\n- how Dickens uses Scrooge's transformation to convey his message about social responsibility.\n\n[30 marks]",
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'At the beginning of A Christmas Carol, Dickens presents Scrooge as a cold and mean character. He is described as a "squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner" which uses lots of negative adjectives to show how horrible he is. He refuses to give money to charity and says the poor should go to prisons and workhouses, showing he has no sympathy. He also treats his clerk, Bob Cratchit, badly by making him work in the cold.\n\nThe three ghosts gradually change Scrooge. The Ghost of Christmas Past shows him happy memories from his childhood and his relationship with Belle, reminding him that he was not always cold-hearted. The Ghost of Christmas Present shows him the Cratchit family and how they are happy despite being poor, especially Tiny Tim who is ill. The Ghost of Christmas Yet to Come shows him his own death where nobody cares, and Tiny Tim\'s death, which is the final thing that changes him.\n\nBy the end, Scrooge is completely transformed. He buys a huge turkey for the Cratchits, gives money to charity, and raises Bob\'s salary. Dickens uses this transformation to show that anyone can change and that rich people have a responsibility to help the poor.',
              'Grade 6-7':
                'Dickens constructs Scrooge\'s initial characterisation through an accumulation of dehumanising imagery that strips him of human warmth. The celebrated list of present participles - "squeezing, wrenching, grasping" - reduces Scrooge to a series of actions, all of which involve taking rather than giving. The imagery of cold reinforces this and reverses the pathetic fallacy: the weather does not mirror Scrooge\'s mood, he imposes his mood on the weather, carrying "his own low temperature always about with him," which makes him a localised force of cold in a narrative where warmth consistently symbolises human connection. His declaration that the poor should avail themselves of "prisons" and "workhouses" directly echoes the utilitarian philosophy that Dickens opposed - Scrooge is not merely a miser but the embodiment of a political ideology that Dickens sought to dismantle.\n\nThe transformation is carefully structured through the three spirits. The Ghost of Christmas Past works through memory and nostalgia, showing Scrooge\'s younger self at Fezziwig\'s party - significantly, a scene where an employer chooses generosity. Belle\'s departure functions as a moral watershed: she leaves because "Another idol has displaced me", and when Scrooge asks which, she answers "A golden one." The Ghost of Christmas Present confronts Scrooge with the consequences of his philosophy through the Cratchit family, where Tiny Tim\'s illness becomes a direct indictment of a society that allows poverty to kill children. The allegorical children beneath the Ghost\'s robe - Ignorance and Want - make Dickens\'s didactic purpose explicit.\n\nScrooge\'s redemption, on Christmas morning and the morning after, is deliberately excessive - the enormous turkey, the charitable donations, the raised salary - because Dickens wants to model generosity as joyful rather than dutiful. Contextually, the novella was written in 1843 during a period of intense debate about the Poor Law, and Dickens uses Scrooge\'s transformation as a direct appeal to his middle-class readership to exercise personal charity and social conscience.',
              'Grade 8-9':
                'Dickens\'s presentation of Scrooge\'s transformation operates simultaneously on psychological, social, and allegorical levels, constructing a character whose journey from misanthropy to benevolence serves as both individual redemption narrative and systematic critique of Victorian capitalism. The opening characterisation is notable for its rhetorical excess: the accumulative listing - "squeezing, wrenching, grasping, scraping, clutching, covetous" - functions not merely as description but as incantation, the rhythmic repetition suggesting that greed has become compulsive, mechanical, inhuman. The simile "Hard and sharp as flint" associates Scrooge with geological imagery, implying that his emotional petrifaction is the result of slow, long-term processes rather than a single moral failure.\n\nCritically, Dickens establishes that Scrooge\'s coldness is ideological as well as temperamental. His invocation of "prisons" and "workhouses" as sufficient provision for the poor directly ventriloquises the utilitarian rhetoric of the 1834 New Poor Law, which sought to make poverty so uncomfortable that the poor would be motivated to work. Dickens positions Scrooge as the human face of this institutional cruelty, and the novella\'s project is to dismantle that ideology through affective experience - to force Scrooge (and, by extension, the reader) to feel what statistics cannot convey.\n\nThe three-spirit structure enacts a temporal logic of moral education. Christmas Past works through anamnesis - the recovery of forgotten selfhood. The Fezziwig scene is pivotal because it demonstrates that generosity is a choice available to employers: Fezziwig spends only "a few pounds" yet creates immeasurable happiness, directly refuting the economic rationalism that Scrooge has internalised. Belle\'s farewell introduces the motif of substitution - "Another idol has displaced me," she tells him, and it is "A golden one," a living woman replaced by money, anticipating Marx\'s concept of commodity fetishism. Christmas Present shifts the moral register from personal loss to social consequence: Tiny Tim exists at the intersection of sentimentality and polemic, his potential death functioning as both emotional lever and political argument. The allegorical children, Ignorance and Want, rupture the novella\'s realist surface to deliver Dickens\'s most explicit warning: "Beware them both... but most of all beware this boy" - Ignorance, Dickens suggests, is more dangerous than poverty itself.\n\nThe transformation\'s climactic moment - Scrooge\'s encounter with his own ungrieved death - works through the logic of the memento mori, but Dickens subverts the tradition: what horrifies Scrooge is not death itself but death without connection, without having mattered to anyone. This is the novella\'s most psychologically acute insight - that the punishment for selfishness is not suffering but irrelevance. Scrooge\'s Christmas morning redemption is often criticised as too sudden, but this misreads Dickens\'s form: the novella operates within the conventions of the parable and the fairy tale, where transformation is instantaneous precisely because it is spiritual rather than developmental. The final image of Scrooge as "as good a friend, as good a master, and as good a man, as the good old city knew" uses the fourfold repetition of "good" to perform a kind of linguistic exorcism, overwriting the opening\'s negative accumulations with positive ones. Dickens\'s message is ultimately radical in its simplicity: that individual moral change, multiplied across a class, constitutes social reform.',
            },
            markScheme: [
              'AO1: Perceptive, developed response with judicious use of textual references integrated into interpretation',
              "AO2: Analysis of Dickens's methods - allegorical structure, characterisation through imagery, the novella form, narrative voice, symbolism",
              "AO3: Understanding of Victorian context - the Poor Law, industrial capitalism, Malthusian economics, Dickens's social reform agenda, the condition of the working poor",
              "Top band (Level 6, 26-30): Critical, exploratory, conceptualised response with precise references; analysis of writer's methods with judicious use of subject terminology; context convincingly integrated into argument",
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER B - Macbeth (Gender/Power) + Jekyll & Hyde
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p1-b',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 68,
    sections: [
      {
        id: 'aqa-lit-p1-b-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer one question from this section. You are advised to spend about 55 minutes on this section.',
        totalMarks: 38,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-b-q1',
            questionNumber: 1,
            questionText:
              'Read the following extract from Act 1 Scene 7 of Macbeth and then answer the question that follows.\n\nAt this point in the play Macbeth has told Lady Macbeth that they will not murder Duncan, and she has accused him of cowardice.\n\nStarting with this extract, how does Shakespeare present ideas about gender and power?\n\nWrite about:\n- how Shakespeare presents gender and power in this extract\n- how Shakespeare presents gender and power in the play as a whole.\n\n[30 marks + 4 marks for AO4 (SPaG)]',
            marks: 34,
            suggestedTimeMinutes: 55,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_02,
            extractSource: MACBETH_EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Shakespeare shows a power struggle between Macbeth and Lady Macbeth, and the weapon Lady Macbeth uses is the idea of what it means to be a man. Macbeth has just decided not to kill Duncan, and he defends himself: "I dare do all that may become a man; / Who dares do more is none." He means that a real man knows where to stop, and that anyone who goes further is not really a man at all.\n\nLady Macbeth turns this around. She asks "What beast was\'t, then, / That made you break this enterprise to me?", suggesting that if he was not being a man when he first talked about the murder, he must have been an animal. Then she says "When you durst do it, then you were a man". For her, being a man means daring to kill. This shows how she uses ideas about gender to control him.\n\nHer most shocking image is about her own baby. She says she knows "How tender \'tis to love the babe that milks me", but that she would have "dash\'d the brains out" if she had sworn to do it. This violent image shows that she is willing to reject the gentle, motherly role expected of women in Shakespeare\'s time. It also shames Macbeth, because she is saying that she would keep her promise even at such a cost, while he is breaking his.\n\nWhen Macbeth asks "If we should fail?", she takes charge: "screw your courage to the sticking-place, / And we\'ll not fail." She then explains the whole plan, including getting Duncan\'s two chamberlains drunk so that they can be blamed. By the end Macbeth has changed his mind. He admires her, saying "Bring forth men-children only", and agrees: "I am settled". Lady Macbeth has won the argument.\n\nIn the rest of the play the power between them changes. Earlier, Lady Macbeth asks evil spirits to "unsex me here" so that she can be cruel. After the murder, though, Macbeth stops telling her his plans: when he arranges Banquo\'s murder he tells her to "Be innocent of the knowledge, dearest chuck". By Act 5 she is sleepwalking and trying to wash imaginary blood off her hands, and she dies offstage. In Jacobean times men were expected to rule and women to obey, so Lady Macbeth taking control would have seemed unnatural, and Shakespeare shows it destroying her.',
              'Grade 6-7':
                'Shakespeare presents gender and power in this extract as a contest over the meaning of one word, "man", and whoever controls that meaning controls the action. Macbeth opens by setting a moral limit on masculinity: "I dare do all that may become a man; / Who dares do more is none." The verb "become" means both "suit" and "turn into", so manhood for him is a matter of fitting conduct, and to exceed it is to stop being human.\n\nLady Macbeth\'s reply redefines the word. Her question "What beast was\'t, then, / That made you break this enterprise to me?" pushes Macbeth\'s logic back at him: if he was not a man when he proposed the murder, he was a "beast". She then fuses masculinity with action and with rank: "When you durst do it, then you were a man; / And, to be more than what you were, you would / Be so much more the man." To be "more than what you were" is to be king, so she presents the crown as an increase in manhood, and gender and political power become the same thing.\n\nShe also accuses him of being undone by circumstance. When the murder was only an idea, "Nor time nor place / Did then adhere, and yet you would make both"; now the opportunity has arrived, and "They have made themselves, and that their fitness now / Does unmake you." The verb "unmake" recalls her own prayer in Act 1 Scene 5 to be unsexed: she asked to be unmade as a woman, and now accuses Macbeth of being unmade as a man.\n\nHer most powerful rhetorical move is the image of infanticide. She begins with tenderness, "I have given suck, and know / How tender \'tis to love the babe that milks me", which makes what follows more shocking: she would have "pluck\'d my nipple from his boneless gums, / And dash\'d the brains out". The harsh verbs "pluck\'d" and "dash\'d" contrast with the softness of "boneless gums", and the violence is conditional: she would do it "had I so sworn as you / Have done to this". The image rejects the nurturing role her society gave to mothers, but its real target is Macbeth\'s honour. In the world of the play a man keeps his oath.\n\nThe balance of power is visible in the shape of the dialogue. Macbeth\'s "If we should fail?" is a single short line. Lady Macbeth answers with an incredulous echo, "We fail?", then an imperative, "screw your courage to the sticking-place", and then the plan: the chamberlains overcome "with wine and wassail", Duncan left "unguarded", the guilt laid on "His spongy officers". She plans; he listens.\n\nHis surrender is expressed in her terms. "Bring forth men-children only; / For thy undaunted mettle should compose / Nothing but males" is praise that accepts her definition of masculinity as fearlessness, and the pun on "mettle" and metal makes her sound forged rather than born. He then adds his own detail to the plot, using the grooms\' "very daggers", and closes the scene by echoing her advice from Act 1 Scene 5 to look innocent while plotting: "False face must hide what the false heart doth know."\n\nIn the play as a whole this balance is reversed. After the murder Macbeth acts alone, keeping the plan to kill Banquo from her ("Be innocent of the knowledge, dearest chuck"), and at the banquet her challenge "Are you a man?" no longer steadies him. By Act 5 the woman who scorned his fear is sleepwalking, unable to clean her hands. Macduff offers a different model of masculinity when he answers Malcolm\'s "Dispute it like a man" with "I must also feel it as a man". A Jacobean audience, taught that a wife should be subject to her husband and that female power was unnatural, would have found Lady Macbeth\'s domination disturbing, but Shakespeare shows that the Macbeths\' narrow definition of manhood destroys them both.',
              'Grade 8-9':
                'Shakespeare\'s treatment of gender and power in this extract turns on a single contested word. The scene is an argument about what a "man" is, and the character who fixes that definition decides whether Duncan lives. What makes the extract so unsettling is that Lady Macbeth wins not by force but by redefinition: she takes the moral vocabulary of manhood and empties it of morality.\n\nMacbeth\'s position is stated with the balance of a proverb: "I dare do all that may become a man; / Who dares do more is none." "Become" means both "befit" and "turn into", so masculinity here is bounded by propriety, and the second line implies that to transgress those bounds is to cease to be human at all. It is one of the clearest moral statements Macbeth makes in the play, and it survives for two lines.\n\nLady Macbeth\'s counter-argument works by inversion. "What beast was\'t, then, / That made you break this enterprise to me?" accepts Macbeth\'s opposition between man and beast and reverses its application: the bestial act was to propose the murder and then retreat from it. She then relocates manhood from restraint to daring and binds it to status: "When you durst do it, then you were a man; / And, to be more than what you were, you would / Be so much more the man." The comparative "more" slides from rank to masculinity within a single sentence, so that kingship and manhood become measures of the same quantity. This is the extract\'s central equation of gender with power, and it is Lady Macbeth\'s invention.\n\nHer claim that the moment "Does unmake you" is carefully chosen. In Act 1 Scene 5 she called on spirits to "unsex me here, / And fill me, from the crown to the toe, top-full / Of direst cruelty". She has asked to be unmade as a woman; she now charges her husband with being unmade as a man, so that both of them are defined by the gender each is failing to perform.\n\nThe infanticide image is the rhetorical climax, and its force depends on its first half. "I have given suck, and know / How tender \'tis to love the babe that milks me" is the only moment in the extract where Lady Macbeth speaks of tenderness, and she does so in order to show how completely she would destroy it. The present participle in "while it was smiling in my face" keeps the child alive and trusting up to the instant of violence, and the plosive verbs "pluck\'d" and "dash\'d" break the soft sounds of "boneless gums". Yet the image is conditional, "had I so sworn as you / Have done to this", and its logic is that of the oath: the true test of manhood she offers is fidelity to one\'s word, pushed to the point of monstrosity. The line also opens a question the play never answers: Lady Macbeth has "given suck", yet no child of the Macbeths appears. The absence matters, because the couple who stake everything on a crown will have no heir to inherit it.\n\nThe dialogue\'s shape stages the transfer of power. Macbeth\'s "If we should fail?" is four words; Lady Macbeth\'s reply opens with a two-word echo, "We fail?", that treats the question as absurd, and then becomes a plan delivered in confident future tenses. The chamberlains will be overcome "with wine and wassail", so that "memory, the warder of the brain, / Shall be a fume", and the guilt will fall on "His spongy officers". She has the whole scene in her head; he has a doubt.\n\nMacbeth\'s capitulation is revealing precisely because it is phrased as praise. "Bring forth men-children only; / For thy undaunted mettle should compose / Nothing but males" adopts her definition of manhood as fearlessness, while the mettle/metal pun makes her into a thing forged rather than born. The irony is dynastic: he imagines sons at the moment he commits himself to a crime that will leave him with "a barren sceptre". He then contributes to the plot, proposing to use the grooms\' "very daggers", and the scene ends with his couplet "Away, and mock the time with fairest show: / False face must hide what the false heart doth know." He now speaks her language of disguise, and gives the orders; the power she has won passes back to him on her terms, and from here he will increasingly act without her.\n\nAcross the play Shakespeare develops this into a chiasmus. Lady Macbeth\'s authority depends on Macbeth\'s need to prove himself; once he has killed, he no longer needs her. He hides the plot against Banquo from her ("Be innocent of the knowledge, dearest chuck"), her taunt "Are you a man?" at the banquet fails, and her suppressed conscience returns in the sleepwalking scene. Against the Macbeths\' definition, Shakespeare sets Macduff. Told by Malcolm to "Dispute it like a man", he answers "I must also feel it as a man", and his grief, "I cannot but remember such things were, / That were most precious to me", redefines manhood as the capacity to feel as well as to fight. In a culture that thought of the household as a little kingdom, a wife who governs her husband mirrors a subject who overthrows a king, and a Jacobean audience would have seen the two usurpations as one. Shakespeare\'s final judgement, though, falls less on female power than on the definition of manhood the Macbeths share, one in which power is proved by the willingness to destroy.',
            },
            markScheme: [
              'AO1: Perceptive, developed response to extract and whole text with judicious textual references',
              'AO2: Analysis of Shakespeare\'s methods - the argument over the word "man", rhetorical questions and imperatives, the infanticide image, the shape of the dialogue, the closing couplet, structural reversal across the play',
              'AO3: Understanding of context - Jacobean gender roles, patriarchal ideology, the household as a little kingdom, James I and witchcraft, the Great Chain of Being',
              'AO4: Accurate spelling, punctuation, and grammar with specialist terminology',
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-b-sec-b',
        title: 'Section B: The 19th-Century Novel - The Strange Case of Dr Jekyll and Mr Hyde',
        description:
          'Answer one question from this section. You are advised to spend about 50 minutes on this section.',
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-b-q2',
            questionNumber: 2,
            questionText:
              'How does Stevenson present the theme of duality in The Strange Case of Dr Jekyll and Mr Hyde?\n\nWrite about:\n- how Stevenson presents duality through characters and settings\n- how Stevenson uses the theme of duality to explore wider ideas about Victorian society.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Stevenson presents duality mainly through Jekyll and Hyde, who are two sides of the same person. Jekyll is a respectable doctor who is described as a "large, well-made, smooth-faced man" while Hyde is "pale and dwarfish" and gives people a feeling of "deformity." This shows the contrast between good and evil existing in the same person.\n\nThe settings also show duality. Jekyll\'s house has a respectable front door on a square of "ancient, handsome houses", but the back entrance - which Hyde uses - is a neglected door on a side street. The door is "blistered and distained" which contrasts with the wealthy front of the house. This symbolises how Victorian gentlemen had a public, respectable image but might hide darker secrets.\n\nStevenson also uses duality to criticise Victorian society. People like Jekyll were expected to be perfect and suppress any bad urges. Jekyll admits "I concealed my pleasures" because of society\'s strict rules. The fact that Hyde is smaller than Jekyll could suggest that the evil side has been suppressed for so long that it hasn\'t grown properly. Stevenson is showing that repressing part of your nature is dangerous because it will eventually break free.',
              'Grade 6-7':
                "Stevenson constructs duality as the novella's organising principle, embedding it in characterisation, setting, narrative structure, and the very form of the text. Jekyll and Hyde are not simply good and evil counterparts but represent a more disturbing proposition: that respectability and depravity coexist within every individual, separated only by the fragile mechanism of social convention.\n\nPhysically, Hyde is repeatedly described through the language of the uncanny - Enfield says that Hyde \"gives a strong feeling of deformity, although I couldn't specify the point.\" This inability to articulate Hyde's wrongness is crucial: Stevenson suggests that evil defies rational categorisation, which is deeply threatening to the Victorian empiricist worldview embodied by the lawyer Utterson and the scientist Lanyon. Hyde's small stature - he is \"Particularly small and particularly wicked-looking\", as the police officer reports the maid's description - has been read as representing the underdeveloped nature of Jekyll's repressed desires: having been denied expression, the dark self has been stunted.\n\nThe setting of London itself functions as a dual space. The fog that pervades the novella creates a liminal environment where moral boundaries dissolve. Jekyll's house physically enacts duality: the elegant facade faces one street while the \"sinister block of building\" with its door bearing \"marks of prolonged and sordid negligence\" faces another. This architectural duality mirrors the psychological architecture of Jekyll himself.\n\nStevenson's narrative structure embodies duality through its refusal of a single, authoritative perspective. The story is told through Utterson's limited viewpoint, Lanyon's horrified account, and finally Jekyll's own confession. Each narrative layer reveals more of the truth, structurally enacting the process of uncovering what lies beneath the surface.\n\nContextually, the novella engages with Darwinian anxiety about humanity's animal origins - Hyde's \"ape-like fury\" and association with regression suggest that evolution could reverse, and that civilisation is a thin veneer. It also reflects Victorian anxiety about the double lives of respectable gentlemen, many of whom frequented opium dens and prostitutes while maintaining impeccable public reputations.",
              'Grade 8-9':
                "Stevenson's presentation of duality in Jekyll and Hyde transcends simple moral allegory to interrogate the epistemological and ontological foundations of Victorian selfhood. The novella's central insight - articulated in Jekyll's \"Full Statement\" - is that \"man is not truly one, but truly two,\" a proposition that pre-empts Freud's structural model of the psyche and challenges the Enlightenment concept of unified rational identity. Crucially, Jekyll does not claim that one half is authentic and the other false; \"both sides of me were in dead earnest,\" he says, which means that duality is not a pathology but a fundamental condition of human consciousness.\n\nStevenson's formal choices embed duality into the text's DNA. The novella's structure - third-person limited narration, followed by two first-person testimonies - enacts the multiplicity of perspective that the content thematises. Utterson's narrative is characterised by restraint and suppression: the first chapter ends with Enfield proposing that they \"make a bargain never to refer to this again\" and Utterson agreeing \"With all my heart,\" performing the same repressive mechanism that creates Hyde in the first place. That the truth only emerges in documents read after death suggests that Victorian society can only confront its shadow self posthumously.\n\nHyde's physical indescribability is the novella's most sophisticated device. Every witness struggles to articulate what is wrong with him - there is \"something wrong with his appearance; something displeasing, something down-right detestable\" - the triple \"something\" performing a linguistic failure that mirrors the ideological impossibility of acknowledging evil within the respectable self. If Hyde could be described, he could be categorised and contained; his resistance to language makes him epistemologically threatening.\n\nThe geographical duality of London - respectable Cavendish Square against the squalid back lanes, the fog that transforms familiar streets into alien territory - draws on the journalism that had exposed London's poverty and vice, from Henry Mayhew's London Labour and the London Poor (1851) to W. T. Stead's articles of 1885. Stevenson's genius is to locate this darkness not in the East End slums but within the West End gentleman's own house: the back door is not in another neighbourhood but belongs to the same property, across a yard from the front door. The horror is proximity, not distance.\n\nDarwin's theory of evolution haunts the text: Hyde's \"ape-like fury,\" his \"troglodytic\" nature, and his physical smallness suggest atavistic regression - the fear that humanity's animal past is not safely behind us but dormant within us. The chemical potion that effects the transformation parodies the Victorian faith in scientific progress, suggesting that science might unleash rather than contain the primitive. Stevenson ultimately presents duality not as Jekyll's individual problem but as the defining condition of a society built on the systematic suppression of desire. The tragedy is not that Jekyll becomes Hyde, but that the structure of Victorian respectability made Hyde's creation inevitable.",
            },
            markScheme: [
              'AO1: Perceptive, developed response with judicious, well-integrated textual references',
              "AO2: Analysis of Stevenson's methods - narrative structure, characterisation, setting as symbolism, the novella form, Gothic conventions, the significance of names",
              'AO3: Understanding of context - Victorian respectability, Darwin and evolution, Freudian duality, urban poverty, the double lives of Victorian gentlemen, scientific anxiety',
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER C - Macbeth (Fate/Despair) + A Christmas Carol
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p1-c',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 68,
    sections: [
      {
        id: 'aqa-lit-p1-c-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer one question from this section. You are advised to spend about 55 minutes on this section.',
        totalMarks: 38,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-c-q1',
            questionNumber: 1,
            questionText:
              "Read the following extract from Act 5 Scene 5 of Macbeth and then answer the question that follows.\n\nAt this point in the play Malcolm's army is marching on Macbeth's castle at Dunsinane.\n\nStarting with this extract, how does Shakespeare present Macbeth as a character who has lost hope?\n\nWrite about:\n- how Shakespeare presents Macbeth's despair in this extract\n- how Shakespeare presents Macbeth's changing state of mind in the play as a whole.\n\n[30 marks + 4 marks for AO4 (SPaG)]",
            marks: 34,
            suggestedTimeMinutes: 55,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_03,
            extractSource: MACBETH_EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Shakespeare shows that Macbeth has lost hope even though he still talks like a confident king. He begins by giving orders, "Hang out our banners on the outward walls", and boasts that "Our castle\'s strength / Will laugh a siege to scorn". But his plan is only to wait until "famine and the ague" kill the enemy soldiers. He also admits that the enemy has been joined by men "that should be ours", which means his own thanes and soldiers have gone over to the other side. Without them he cannot meet the enemy "beard to beard", so his confidence is hollow.\n\nWhen he hears women crying, Macbeth says "I have almost forgot the taste of fears." He explains that once a scream in the night would have terrified him, but now "I have supp\'d full with horrors". This metaphor makes horror sound like food he has eaten so much of that he cannot taste it any more. He has done so many terrible things that nothing can frighten him, which shows he has lost his feelings as well as his hope.\n\nThen Seyton tells him "The Queen, my lord, is dead." Macbeth does not cry or grieve. He only says "She should have died hereafter", which suggests she would have died at some point anyway, or that now is the wrong time to mourn. This is shocking, because at the start of the play she was his "dearest partner of greatness".\n\nIn the famous speech that follows, Macbeth repeats "tomorrow" three times, which makes time sound slow and endless. He calls life "a walking shadow" and "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." He now believes that life has no meaning at all.\n\nAt the beginning of the play Macbeth is a hero, called "brave Macbeth" for his courage in battle. After the witches\' prophecies he becomes ambitious and murders Duncan, and afterwards he cannot sleep and his mind is "full of scorpions". He keeps killing to stay safe, but it only makes him more alone. In Act 5 Scene 3 he says his life "Is fall\'n into the sere, the yellow leaf", like a dying leaf in autumn, and that he cannot expect "honour, love, obedience, troops of friends" in his old age. Even so, he fights to the end. Shakespeare shows that Macbeth\'s crimes have taken away everything that gave his life meaning.',
              'Grade 6-7':
                'Shakespeare presents Macbeth in this extract as a man whose outward defiance barely covers an inner emptiness, and the extract moves from one to the other: from the public voice of a king preparing for a siege to the private voice of a man who can find no meaning in anything.\n\nThe opening is full of military confidence. The imperative "Hang out our banners on the outward walls" and the personification of a castle that "Will laugh a siege to scorn" present Macbeth as the warrior he was in Act 1. But the strategy is passive: he will let the enemy "lie / Till famine and the ague eat them up", relying on hunger and disease rather than his own sword. The conditional that follows is more revealing still: "Were they not forc\'d with those that should be ours, / We might have met them dareful, beard to beard". The enemy has been reinforced by "those that should be ours", Macbeth\'s own subjects, and "We might have met them" describes a battle that cannot now happen. The king of Scotland has lost his people.\n\nThe offstage cry of women prompts Macbeth\'s most chilling self-analysis. "I have almost forgot the taste of fears" treats fear as a flavour he can no longer detect, and he measures the change against his past: "The time has been, my senses would have cool\'d / To hear a night-shriek". The phrase "As life were in\'t" implies that he himself is no longer fully alive. The metaphor "I have supp\'d full with horrors" suggests a man who has eaten horror until he is numb to it, and it recalls the banquet of Act 3 Scene 4, which Banquo\'s ghost ruined. "Direness, familiar to my slaughterous thoughts, / Cannot once start me" shows how far he has come: in Act 1 Scene 3 Banquo asked him "why do you start", but now nothing can make him flinch.\n\nSeyton\'s plain sentence, "The Queen, my lord, is dead", meets an answer that is hard to read. "She should have died hereafter" may mean that she would have died some day anyway, or that she ought to have died at a time when he could mourn her. Either way, the partner of Act 1 draws no tears, and the thought of her death leads straight into despair about time itself.\n\nThe soliloquy that follows is built on repetition and images of emptiness. In "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day", the repeated word and the verb "Creeps" slow the verse down, so that time seems to drag. The line "all our yesterdays have lighted fools / The way to dusty death" makes the past a light that only leads to the grave, and recalls the Bible\'s reminder that people return to dust. The "brief candle", the "walking shadow" and the "poor player, / That struts and frets his hour upon the stage" all present life as short, insubstantial and performed, and the final image, "a tale / Told by an idiot, full of sound and fury, / Signifying nothing", ends on a half-line, as if there is nothing left to say.\n\nAcross the play, Shakespeare traces Macbeth\'s decline from the "brave Macbeth" of Act 1 Scene 2 to this state. His ambition is first stirred by the witches, and after Duncan\'s murder he loses his peace of mind: "O, full of scorpions is my mind, dear wife!" In Act 3 Scene 4 he decides that he is "in blood / Stepp\'d in so far" that going back would be as hard as going on, and in Act 5 Scene 3 he says "I have liv\'d long enough". Only the witches\' apparitions still give him something to trust, and when Macduff reveals that he was "from his mother\'s womb / Untimely ripp\'d", that last hope goes too. For a Christian audience despair was itself a sin, a loss of faith in God\'s mercy, so Macbeth\'s hopelessness is presented as part of his damnation.',
              'Grade 8-9':
                'Shakespeare presents Macbeth in this extract as a man who has lost hope in a double sense: he no longer expects anything from the future, and he no longer feels anything in the present. The extract is structured to expose that loss gradually, moving from the public rhetoric of a besieged king, through a moment of self-diagnosis, to the most complete statement of meaninglessness in the play.\n\nThe opening lines sound like defiance. Macbeth speaks in imperatives, "Hang out our banners on the outward walls", and personifies his fortress as a figure that "Will laugh a siege to scorn". Yet the strategy he announces is the opposite of the heroic combat that made his name: the enemy will "lie / Till famine and the ague eat them up". The warrior who in Act 1 Scene 2 "unseam\'d" a rebel "from the nave to the chops" now relies on starvation and fever. The conditional exposes the reason: "Were they not forc\'d with those that should be ours, / We might have met them dareful, beard to beard, / And beat them backward home." The phrase "those that should be ours" is a quiet admission that his thanes and soldiers have deserted him, and "We might have met them" is the grammar of a hope already abandoned. The royal "we" and "our" are now largely a fiction.\n\nThe offstage cry of women is an ironic reversal of Act 2 Scene 2, where every sound terrified him ("Didst thou not hear a noise?"). Here "What is that noise?" is almost idle, and his reflection on it is a clinical account of his own numbness. "I have almost forgot the taste of fears" turns fear into a sense he has lost, and the memory of how "my fell of hair / Would at a dismal treatise rouse and stir / As life were in\'t" makes the key point: his hair once moved "As life were in\'t", as if even his body used to be more alive than he is now. "I have supp\'d full with horrors" develops the play\'s recurring imagery of feasting. Sleep was the "Chief nourisher in life\'s feast" in Act 2 Scene 2, and Banquo\'s ghost broke up the banquet of Act 3 Scene 4; now the only meal left to Macbeth is horror, and he has eaten until he is sated. "Direness, familiar to my slaughterous thoughts, / Cannot once start me" completes the diagnosis. "Familiar" suggests something domestic and habitual, and the verb "start" recalls the moment in Act 1 Scene 3 when Banquo saw him flinch at the prophecies and asked "why do you start". The man who once started at a promise of the crown can no longer be startled by anything.\n\nSeyton\'s report takes six words, "The Queen, my lord, is dead", and Macbeth\'s response is famously ambiguous. "She should have died hereafter" can mean that she would have died at some point anyway, a shrug of indifference, or that she ought to have died later, when there would be time to mourn, a grief deferred because there is no future in which to feel it. "There would have been a time for such a word" supports the second reading, and it is the more desolate: Macbeth cannot grieve because he has no "hereafter". The woman he once called "my dearest partner of greatness" dies offstage, and "such a word" is all the mourning she receives.\n\nThat loss of a future is the subject of the soliloquy. The word has a history in the play: in Act 1 Scene 5 Macbeth told his wife that Duncan would leave "Tomorrow, as he purposes", and Duncan never saw that day. Now the triple "Tomorrow, and tomorrow, and tomorrow" becomes a sentence of endless, meaningless repetition. The verb "Creeps" and the adjective "petty" shrink time to a crawl, while "To the last syllable of recorded time" imagines history as a book whose final word is still to be written. The movement from "tomorrow" to "all our yesterdays" completes the circle: the past has only "lighted fools / The way to dusty death", an image that recalls the burial service and the biblical teaching that man returns to dust. "Out, out, brief candle!" may also recall Lady Macbeth, who, as the Gentlewoman reported in Act 5 Scene 1, "has light by her continually"; her candle is out.\n\nThe final images are theatrical. "Life\'s but a walking shadow; a poor player, / That struts and frets his hour upon the stage, / And then is heard no more" is spoken by an actor on a stage, so the metaphor takes in the audience: the tragedy they are watching is itself a brief performance. The last image, "a tale / Told by an idiot, full of sound and fury, / Signifying nothing", reduces all human narrative, Macbeth\'s own included, to noise without meaning, and the verse falls short on the half-line "Signifying nothing".\n\nAcross the play this is the endpoint of a trajectory Shakespeare builds carefully. The "brave Macbeth" of Act 1 Scene 2 has a rich inner life, visible in his terror that "Present fears / Are less than horrible imaginings" and in the dagger soliloquy. The murder costs him sleep ("Macbeth does murder sleep"), then peace ("O, full of scorpions is my mind, dear wife!"), then the possibility of return ("I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er"). In Act 5 Scene 3 he knows that "honour, love, obedience, troops of friends" are lost to him, and later in this scene he admits that he has begun "to be aweary of the sun". Even so, his last hope rests on the witches\' promises, and when Macduff reveals that he was "from his mother\'s womb / Untimely ripp\'d", Macbeth calls them "juggling fiends" that "palter with us in a double sense". In Christian terms despair is the sin that refuses God\'s mercy, and a Jacobean audience would have understood Macbeth\'s conviction that life signifies "nothing" as the last stage of damnation. Yet Shakespeare denies him the escape of the "Roman fool" who kills himself: he chooses to fight, "lay on, Macduff", and the courage that remains when hope has gone is part of what keeps him tragic rather than merely monstrous.',
            },
            markScheme: [
              'AO1: Perceptive, developed response to extract and whole text with judicious textual references',
              "AO2: Analysis of Shakespeare's methods - soliloquy, the move from public bravado to private despair, imperatives and the conditional, feasting and sensory imagery, repetition, the theatre metaphor, the trajectory of Macbeth's psychological decline",
              'AO3: Understanding of context - the Great Chain of Being, Jacobean divine punishment, Aristotelian tragedy, Christian despair, the psychology of tyranny',
              'AO4: Accurate spelling, punctuation, and grammar with specialist terminology',
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-c-sec-b',
        title: 'Section B: The 19th-Century Novel - A Christmas Carol',
        description:
          'Answer one question from this section. You are advised to spend about 50 minutes on this section.',
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-c-q2',
            questionNumber: 2,
            questionText:
              'How does Dickens use the Ghost of Christmas Present to convey his ideas about poverty and wealth?\n\nWrite about:\n- how Dickens presents the Ghost of Christmas Present and what it shows Scrooge\n- how Dickens uses the Ghost to explore ideas about poverty and responsibility.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Dickens uses the Ghost of Christmas Present to show Scrooge what life is like for people who are less fortunate. The Ghost is described as a giant figure sitting on a throne of food, wearing a green robe with white fur. This makes the Ghost look generous and abundant, which contrasts with Scrooge who is mean with his money.\n\nThe Ghost takes Scrooge to see the Cratchit family having their Christmas dinner. They are poor - they can only afford a small goose and a small pudding - but they are happy and grateful. Tiny Tim says "God bless us every one!" which shows how good-natured the family is despite their poverty. The Ghost tells Scrooge that Tiny Tim will die if "these shadows remain unaltered," which directly challenges Scrooge to change.\n\nDickens also uses the Ghost to show two children hidden under the Ghost\'s robe - Ignorance and Want. These represent the real problems in society. The Ghost warns Scrooge to "Beware them both" but especially Ignorance. This is Dickens\'s message to Victorian society: that poverty is caused by the ignorance of rich people who refuse to help the poor.',
              'Grade 6-7':
                "The Ghost of Christmas Present is Dickens's most overtly didactic creation, serving as both supernatural guide and mouthpiece for the author's social critique. Its physical appearance - a \"jolly Giant, glorious to see,\" sitting \"In easy state\" on food heaped up \"to form a kind of throne\" - embodies abundance and generosity, creating a visual antithesis to Scrooge's parsimony. The green robe, bordered with white fur, evokes both the traditional figure of Father Christmas and the natural world's fertility, associating generosity with organic, natural impulses and implicitly framing Scrooge's miserliness as unnatural.\n\nThe Cratchit scenes function as an affective argument for social responsibility. Dickens presents the family's poverty with precise material detail - the \"small pudding\" that nobody in the family will call small, the goose that is barely adequate - while simultaneously showing their emotional richness. The strategic effect is to demonstrate that poverty does not diminish human dignity or love, thereby dismantling the utilitarian argument that the poor are morally inferior. Tiny Tim is the scene's emotional centre: his disability, his cheerfulness, and the Ghost's prophecy of his death create a figure designed to penetrate even the most hardened reader's defences. When the Ghost throws Scrooge's own words back at him - \"surplus population\" - Dickens weaponises dramatic irony, forcing both Scrooge and the reader to confront the human cost of Malthusian economics.\n\nThe allegorical children, Ignorance and Want, represent Dickens's most explicit political statement. Their emergence from beneath the Ghost's robe is structurally significant - they have been present throughout but hidden, just as poverty is present in Victorian society but concealed beneath the surface of respectability. The Ghost's injunction to \"beware this boy\" (Ignorance) carries a prophetic urgency that extends beyond the novella to address Dickens's readership directly. Contextually, the novella was published in 1843, a year after the Commission for Inquiring into the Employment of Children in Mines and Manufactories revealed appalling conditions of child labour, and Dickens channels this social outrage through the Ghost's warning.",
              'Grade 8-9':
                'The Ghost of Christmas Present functions as the fulcrum of Dickens\'s rhetorical strategy, occupying the structural centre of the novella and performing the essential task of converting abstract economic critique into visceral emotional experience. Where the Ghost of Christmas Past works through individual memory, the Present works through social witness - it forces Scrooge to see what his ideology of self-interest has rendered invisible.\n\nThe Ghost\'s physical characterisation is carefully coded. Its "capacious breast" open and bare, its posture of generous display, and its cornucopia-like throne of food construct it as an embodiment of plenty - but crucially, of shared plenty. The torch from which it sprinkles "incense" on the dinners of the poor favours them openly: its blessing is for "any kindly given", but for "a poor one most." This detail encodes Dickens\'s central argument: that generosity should flow downward, and that the moral health of a society is measured by its treatment of its weakest members.\n\nThe Cratchit household scenes perform a sophisticated ideological intervention. By presenting the family as simultaneously impoverished and joyful, Dickens refuses both the patronising narrative of abject suffering and the conservative narrative of deserving contentment. The Cratchits are not passive recipients of pity; they are active agents of love, celebration, and domestic ritual. Mrs Cratchit\'s anxiety about the pudding - "Suppose it should not be done enough... Suppose somebody should have got over the wall of the back-yard, and stolen it" - is both comic and poignant, and its specificity grounds the scene in material reality.\n\nTiny Tim operates as what we might now call an "empathy technology." His famous benediction - "God bless us every one" - is universal in scope and selfless in character, shaming Scrooge\'s particularist self-interest. The Ghost\'s prophecy of Tim\'s death - "I see a vacant seat... in the poor chimney-corner, and a crutch without an owner, carefully preserved" - deploys metonymy with devastating efficiency: the empty seat and ownerless crutch make absence present, transforming an abstract statistical probability into an imaginable domestic tragedy. When the Ghost deploys Scrooge\'s own phrase - "surplus population" - the recycling of language enacts the moral argument: words designed to depersonalise the poor are placed in the context of a specific, lovable child, exposing their cruelty.\n\nThe Ignorance and Want sequence is generically distinct from the rest of the stave, shifting from social realism to overt allegory. The children are "wretched, abject, frightful, hideous, miserable" - the accumulative adjectives recall the opening description of Scrooge himself, creating a structural echo that implies causation. These children are what Scrooge\'s philosophy produces. Dickens\'s decision to personify social conditions as children is strategically brilliant: it makes systemic problems into figures that demand parental responsibility, and it implicates every adult - every reader - in their neglect. The prioritisation of Ignorance over Want constitutes Dickens\'s most sophisticated political claim: that poverty is sustained not by material scarcity but by epistemological failure - by the refusal of the privileged to know what they are complicit in. The Ghost\'s warning, delivered "stretching out its hand towards the city" - "Slander those who tell it ye! Admit it for your factious purposes, and make it worse. And bide the end!" - reaches past Scrooge to the city itself, and so to the reader, the voter, the policy-maker, in a direct rhetorical assault that transforms the novella from Christmas entertainment into political pamphlet.',
            },
            markScheme: [
              'AO1: Perceptive, developed response with judicious, well-integrated textual references',
              "AO2: Analysis of Dickens's methods - allegory, characterisation, symbolism, narrative voice, structural positioning of the Ghost within the novella's five-stave form",
              "AO3: Understanding of context - Malthusian economics, the 1834 Poor Law, child labour, Victorian philanthropy, Dickens's social reform agenda",
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER D - Macbeth (Supernatural/Fate) + Jekyll & Hyde
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p1-d',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 68,
    sections: [
      {
        id: 'aqa-lit-p1-d-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer one question from this section. You are advised to spend about 55 minutes on this section.',
        totalMarks: 38,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-d-q1',
            questionNumber: 1,
            questionText:
              'Read the following extract from Act 1 Scene 3 of Macbeth and then answer the question that follows.\n\nAt this point in the play Macbeth and Banquo, on their way back from battle, meet the three witches on a heath.\n\nStarting with this extract, how does Shakespeare present the role of the supernatural in the play?\n\nWrite about:\n- how Shakespeare presents the supernatural in this extract\n- how Shakespeare presents the supernatural in the play as a whole.\n\n[30 marks + 4 marks for AO4 (SPaG)]',
            marks: 34,
            suggestedTimeMinutes: 55,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_04,
            extractSource: MACBETH_EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Shakespeare presents the supernatural as strange, frightening and powerful. Macbeth\'s first words, "So foul and fair a day I have not seen", echo the witches\' chant in Act 1 Scene 1, "Fair is foul, and foul is fair". Macbeth has not met them yet, but he already speaks like them, which suggests a link between him and the forces of evil.\n\nBanquo describes the witches as "So wither\'d, and so wild in their attire, / That look not like the inhabitants o\' th\' earth". They are on the earth but do not seem to belong to it, which shows they are unnatural. He also says "You should be women, / And yet your beards forbid me to interpret / That you are so", so they seem to be neither women nor men. This makes them mysterious and disturbing.\n\nThe witches greet Macbeth three times, each time beginning "All hail, Macbeth!" The titles build up from Thane of Glamis, which he already is, to Thane of Cawdor, to "king hereafter". The pattern of three sounds like a spell. The audience already knows from Act 1 Scene 2 that Duncan has given Macbeth the title of Thane of Cawdor, so the second prophecy is true even though Macbeth does not know it yet.\n\nMacbeth\'s reaction is important. Banquo asks "why do you start and seem to fear / Things that do sound so fair?" Macbeth jumps as if he is afraid, which suggests he has already thought about becoming king. Banquo, on the other hand, says he will "neither beg nor fear" what the witches offer. The witches tell Banquo "Thou shalt get kings, though thou be none", which is a riddle. Macbeth then orders them: "Stay, you imperfect speakers, tell me more." He wants to know more, which shows the prophecy has already caught hold of him.\n\nIn the rest of the play the supernatural keeps appearing. Macbeth sees a dagger before he kills Duncan, and Banquo\'s ghost appears at the feast. In Act 4 the witches show him apparitions which tell him that "none of woman born / Shall harm Macbeth", and this makes him overconfident. At the end he finds out that Macduff was not born in the normal way, and he realises he has been tricked. In Shakespeare\'s time many people, including King James I, believed in witches, so the audience would have found these scenes frightening.',
              'Grade 6-7':
                'Shakespeare presents the supernatural in this extract as a force that works through uncertainty, and he shows it through two contrasting witnesses: Banquo, who observes and questions, and Macbeth, who is caught.\n\nMacbeth\'s first line, "So foul and fair a day I have not seen", echoes the witches\' "Fair is foul, and foul is fair" from Act 1 Scene 1 before he has even met them. The antithesis probably refers to the foul weather and the fair victory, but for the audience it links Macbeth\'s language to the witches\', suggesting that the supernatural already has access to him.\n\nBanquo\'s speech is made of questions, which is how Shakespeare conveys the witches\' strangeness. They are "So wither\'d, and so wild in their attire, / That look not like the inhabitants o\' th\' earth, / And yet are on\'t": they are physically present but do not belong to the natural world. "Live you? or are you aught / That man may question?" asks whether they are alive at all. Their gesture of silence, "her choppy finger laying / Upon her skinny lips", suggests secrecy, and the beards that "forbid me to interpret / That you are so" make them neither clearly women nor men. The verb "interpret" matters, because the play will be full of supernatural signs that have to be interpreted, and are often interpreted wrongly.\n\nMacbeth\'s terse "Speak, if you can" and "what are you?" receive no answer about what the witches are. Instead they tell him who he is and will be, in three parallel greetings that build from "Thane of Glamis" to "Thane of Cawdor" to "king hereafter". The anaphora of "All hail" gives the greetings the feel of a ritual, and "that shalt be" sounds certain. Dramatic irony sharpens the effect: the audience knows from Act 1 Scene 2 that the title of Cawdor has already been given to Macbeth, so the witches seem to know what he does not.\n\nBanquo notices Macbeth\'s reaction: "Good sir, why do you start and seem to fear / Things that do sound so fair?" The word "start" (flinch) suggests that the prophecy has touched a thought Macbeth already had, and "sound so fair" returns to the fair and foul paradox. Banquo then asks the play\'s key question about the witches: "Are ye fantastical, or that indeed / Which outwardly ye show?" Are they imaginary, or real? He also sees that Macbeth is "rapt withal", lost in thought.\n\nThe prophecies to Banquo are paradoxes: "Lesser than Macbeth, and greater", "Not so happy, yet much happier" and "Thou shalt get kings, though thou be none". They are true in ways the listeners cannot yet understand, and this equivocation is how the witches work throughout the play. The farewells, "So all hail, Macbeth and Banquo!" and "Banquo and Macbeth, all hail!", swap the order of the names, hinting that Banquo\'s line will replace Macbeth\'s.\n\nMacbeth\'s final speech shows the supernatural taking hold. "Stay, you imperfect speakers, tell me more" is an order, as if he could command them, and "imperfect" means that their message is incomplete. He reasons carefully about Cawdor and the crown, yet he ends with "Speak, I charge you", an order the witches answer by vanishing, which shows that the supernatural cannot be controlled.\n\nIn the play as a whole, Shakespeare keeps the supernatural ambiguous. Banquo warns later in this scene that "The instruments of darkness tell us truths" in order to betray us; the dagger in Act 2 may be "A dagger of the mind"; and Banquo\'s ghost is seen only by Macbeth. In Act 4 the apparitions promise that "none of woman born / Shall harm Macbeth", and in Act 5 he calls the witches "juggling fiends" who deceive with double meanings. James I had written Daemonologie (1597) and had questioned accused witches himself in Scotland, so Shakespeare\'s audience, and the king himself, would have taken the witches\' power seriously.',
              'Grade 8-9':
                'Shakespeare\'s presentation of the supernatural in this extract depends less on spectacle than on language. In this extract the witches do little but speak; they are frightening because of how their words enter Macbeth\'s mind, and the extract is built to show that process through the contrast between two listeners.\n\nThe link is made before the witches speak. Macbeth\'s first line in the play, "So foul and fair a day I have not seen", repeats the paradox the witches chanted in Act 1 Scene 1, "Fair is foul, and foul is fair". The audience hears Macbeth using the witches\' vocabulary before he has met them, an unconscious kinship that raises the question the whole play asks: do the witches put the idea of murder into Macbeth\'s head, or do they find it already there?\n\nBanquo\'s speech is an attempt to classify what cannot be classified. His questions accumulate, "What are these", "Live you? or are you aught / That man may question?", and each description contains a contradiction: they "look not like the inhabitants o\' th\' earth, / And yet are on\'t"; "You should be women, / And yet your beards forbid me to interpret / That you are so." The repeated "And yet" is the grammar of the uncanny. The witches exist on the boundary of every category the play\'s world depends on (living and dead, earthly and unearthly, female and male), and in a drama so concerned with gender the beards are not a grotesque detail but a sign that the witches stand outside the order the other characters live in. Banquo\'s verb "interpret" names the problem the witches pose for everyone who meets them.\n\nMacbeth\'s question "what are you?" asks for their nature, and the answer he receives is his own future. The three greetings climb from the past (Glamis, which he holds "By Sinel\'s death"), to a present he does not know (Cawdor, already given to him in Act 1 Scene 2), to the future ("that shalt be king hereafter"). The structure turns time itself into a staircase. Because the audience knows that the second title is true, the third acquires a false credibility, and dramatic irony aligns the audience\'s expectations with Macbeth\'s desire.\n\nBanquo\'s observation, "Good sir, why do you start and seem to fear / Things that do sound so fair?", is the extract\'s pivotal moment. The fear is evidence: a man with no thought of the crown would hear good news, not a threat. The phrase "sound so fair" picks up the fair and foul paradox once more, and Banquo\'s question, "Are ye fantastical, or that indeed / Which outwardly ye show?", states the play\'s central uncertainty about whether the supernatural is imagined or real. Shakespeare never settles it. Banquo sees the witches too, so they are not simply Macbeth\'s projection, yet only Macbeth is "rapt withal".\n\nThe contrast with Banquo matters. He asks them to "look into the seeds of time, / And say which grain will grow, and which will not", an image of the future as seed, and he claims to "neither beg nor fear / Your favours nor your hate". The prophecies he receives are paradoxes, "Lesser than Macbeth, and greater", "Not so happy, yet much happier", "Thou shalt get kings, though thou be none", and they model the equivocation that will destroy Macbeth: statements that are true, but not in the way the hearer assumes. The farewells form a chiasmus, "So all hail, Macbeth and Banquo!" and "Banquo and Macbeth, all hail!", in which Banquo\'s name moves to the front, a verbal shadow of the succession that will pass to his descendants.\n\nMacbeth\'s final speech shows the prophecies at work. "Stay, you imperfect speakers, tell me more" commands beings he has just failed to understand, and "imperfect" (incomplete) confesses that he wants the rest of the story. His reasoning is orderly (Glamis he knows, the Thane of Cawdor "lives, / A prosperous gentleman", and kingship "Stands not within the prospect of belief"), but the very care of the calculation shows the crown being weighed as a possibility. The phrase "this blasted heath" presents a landscape blighted as if by lightning, and "Speak, I charge you" ends the extract on an order the witches ignore. They vanish, and the balance of power is clear: Macbeth can question the supernatural, but he cannot command it.\n\nAcross the play, Shakespeare keeps the supernatural poised between external reality and inner projection. Banquo warns later in this scene that "The instruments of darkness tell us truths, / Win us with honest trifles, to betray\'s / In deepest consequence", an exact description of what follows, while Macbeth\'s "This supernatural soliciting / Cannot be ill; cannot be good" shows him already arguing with himself. The dagger of Act 2 is possibly "A dagger of the mind"; Banquo\'s ghost, seen only by Macbeth, may be guilt made visible; and the apparitions of Act 4 offer truths ("none of woman born / Shall harm Macbeth") that hold only in a double sense. When Macduff reveals his birth, Macbeth finally recognises these "juggling fiends" that "palter with us in a double sense". The context gives this ambiguity a political edge. James I, patron of Shakespeare\'s company, the King\'s Men, had written Daemonologie (1597) and had questioned accused witches himself during the North Berwick trials, in which witches were charged with raising storms against his ship. The Stuart kings also claimed descent from Banquo, so "Thou shalt get kings, though thou be none" was a prophecy the first audience saw fulfilled in their own king. Shakespeare\'s witches tell truths that are also traps, and the play suggests that the danger lies less in the prophecy than in the mind that hears it.',
            },
            markScheme: [
              'AO1: Perceptive, developed response to extract and whole text with judicious textual references',
              "AO2: Analysis of Shakespeare's methods - Banquo's questions, the witches' threefold greetings and paradoxes, equivocation, dramatic irony, the contrast between Macbeth's and Banquo's responses, the echo of \"Fair is foul\" in Macbeth's first line",
              'AO3: Understanding of context - James I and Daemonologie, the North Berwick witch trials, Jacobean witchcraft beliefs, the Stuart claim of descent from Banquo, the Great Chain of Being',
              'AO4: Accurate spelling, punctuation, and grammar with specialist terminology',
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-d-sec-b',
        title: 'Section B: The 19th-Century Novel - The Strange Case of Dr Jekyll and Mr Hyde',
        description:
          'Answer one question from this section. You are advised to spend about 50 minutes on this section.',
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-d-q2',
            questionNumber: 2,
            questionText:
              "How does Stevenson present the importance of reputation in The Strange Case of Dr Jekyll and Mr Hyde?\n\nWrite about:\n- how Stevenson presents characters' concerns about reputation\n- how Stevenson uses the theme of reputation to explore ideas about Victorian society.\n\n[30 marks]",
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Stevenson shows that reputation is very important to the characters in the novella. Utterson is a lawyer who is described as "lean, long, dusty, dreary" but who is liked by everyone. He keeps other people\'s secrets and is very careful about his own behaviour. When he suspects something is wrong with Jekyll, he investigates privately rather than causing a public scandal, showing how much reputation matters.\n\nJekyll himself creates Hyde partly because he wants to protect his reputation. He admits "I concealed my pleasures" because they did not fit with the image of a respectable doctor. By becoming Hyde, he can do bad things without it affecting his public image. The potion lets him separate his two sides so his reputation stays clean.\n\nEnfield even has a rule against asking questions: "the more it looks like Queer Street, the less I ask." When Enfield first tells the story about Hyde trampling the girl, he refuses to name the person whose cheque Hyde used, showing that protecting someone\'s name is more important than telling the truth.\n\nStevenson uses reputation to criticise Victorian society. He shows that people were more concerned with appearing good than actually being good. Jekyll\'s problems come from trying to maintain a perfect public image while hiding his true nature, which suggests that Victorian standards of respectability were damaging.',
              'Grade 6-7':
                'Stevenson constructs reputation as both the organising principle of his characters\' lives and the mechanism of their destruction, using it to expose the pathology of Victorian respectability. The novella\'s male professional world - lawyers, doctors, scientists - is governed by an unwritten code in which reputation is maintained through silence, discretion, and the deliberate refusal to investigate what lies beneath the surface.\n\nUtterson embodies this code. His determination to protect Jekyll is driven not by curiosity about the truth but by anxiety about scandal. His investigation is paradoxically shaped by the desire not to discover: he walks the streets at night hoping to encounter Hyde, yet when he does, his questioning is restrained to the point of ineffectuality. His resolution, "If he be Mr. Hyde," ... "I shall be Mr. Seek," transforms the investigation into a game, but it is a game whose rules forbid the player from reaching the conclusion. Enfield and Utterson\'s agreement - "the more it looks like Queer Street, the less I ask" - explicitly codifies the relationship between reputation and ignorance: respectability depends on not knowing.\n\nJekyll\'s "Full Statement" reveals that his creation of Hyde was motivated specifically by the desire to separate his respectable self from his shameful impulses. He describes a life of "profound duplicity" in which, as he says, "I concealed my pleasures" - and crucially, these pleasures are never specified. Stevenson\'s refusal to name Jekyll\'s transgressions mirrors the Victorian code itself: the unspeakable must remain unspoken. This lacuna has generated extensive critical interpretation - homosexuality, opium use, sexual violence - and it is the ambiguity itself that makes the novella\'s point. Whatever Jekyll\'s sins are, they are less dangerous than the social system that makes them unspeakable.\n\nThe cheque scene in the opening chapter crystallises the economics of reputation. Hyde tramples a child - a physical act of violence - and the resolution is financial: a hundred pounds for the child\'s family, most of it paid by cheque. The substitution of money for justice reveals that reputation can be purchased, and that Victorian society\'s moral framework is ultimately transactional. That the cheque bears a respectable man\'s signature but is presented by a disreputable figure perfectly encodes the novella\'s central anxiety: that respectability and corruption are financially and personally intertwined.\n\nContextually, the novella reflects the intense pressure placed on professional men in late-Victorian society to maintain an unblemished public persona. The Cleveland Street scandal of 1889 (though post-publication) illustrates the culture Stevenson depicts: a world in which men of high standing patronised a male brothel, and the subsequent cover-up prioritised reputation over justice.',
              'Grade 8-9':
                'Stevenson\'s treatment of reputation in Jekyll and Hyde constitutes a forensic anatomy of Victorian respectability as a system of organised hypocrisy that ultimately produces the very monstrosity it seeks to prevent. Reputation in the novella is not merely a social concern but an epistemological regime: it determines what can be known, said, investigated, and even thought.\n\nThe narrative structure itself is shaped by the imperatives of reputation. The novella is told primarily through Utterson, whose professional identity as a lawyer depends on confidentiality. His investigation of Jekyll proceeds according to a paradoxical logic: he pursues knowledge while simultaneously operating within a code that prohibits its acquisition. His conversations with Enfield establish this code explicitly - "the more it looks like Queer Street, the less I ask" - using the suggestive phrase "Queer Street" (Victorian slang for financial or moral irregularity) that names transgression while refusing to specify it. The narrative form - third-person limited, with two appended first-person documents - enacts the archaeology of reputation: the public narrative (Utterson\'s perspective) gives way to the private testimonies (Lanyon\'s and Jekyll\'s) only posthumously, suggesting that truth and reputation are fundamentally incompatible and can coexist only when one of them is dead.\n\nJekyll\'s creation of Hyde is the logical conclusion of a culture that demands the separation of public virtue from private impulse. His statement that he was "in no sense a hypocrite" because "both sides of me were in dead earnest" is the novella\'s most philosophically provocative claim: it redefines hypocrisy not as the gap between appearance and reality but as the social system that necessitates that gap. Jekyll argues, in effect, that Victorian respectability forces everyone into hypocrisy by defining respectability so narrowly that no complete human being can meet its standards. Hyde is not an aberration but a structural necessity - the repository for everything that reputation cannot accommodate.\n\nThe physicality of reputation is encoded in the novella\'s architecture. Jekyll\'s house - respectable front on the square, disreputable rear entrance on the by-street - is the built environment of Victorian duplicity. Visitors are received at the front door by Poole; Hyde lets himself in at the back with his own key. This architectural metaphor extends to the body itself: Hyde is physically smaller because the desires he embodies have been spatially compressed by a lifetime of suppression. Stevenson\'s genius is to make reputation literally visible in the urban landscape, transforming London into a map of concealment.\n\nThe novella\'s most radical insight is that the maintenance of reputation requires collective complicity. Every character participates in the conspiracy of silence: Utterson suppresses his suspicions, Enfield refuses to name names, the servants live with their fear for a week before Poole goes to Utterson, and even Lanyon, whose narrative sets down the transformation he watched, will not write down what Jekyll then told him ("I cannot bring my mind to set on paper") and dies of the shock. Reputation, Stevenson suggests, is not an individual achievement but a social contract in which everyone agrees not to see what is plainly visible. The destruction of this contract - Hyde\'s increasingly public violence, culminating in the murder of Carew - represents not the failure of reputation but its inevitable collapse: a system built on suppression must eventually produce an explosion.\n\nContextually, Stevenson wrote during a period when the boundaries of respectable masculinity were being intensely policed. The Criminal Law Amendment Act of 1885, which criminalised "gross indecency" between men, had been passed the year before publication, and the Labouchere Amendment specifically targeted private behaviour - the very domain that Jekyll seeks to protect. The novella can be read as a prescient warning that the criminalisation of private life does not eliminate transgression but drives it underground, creating the conditions for the emergence of something far more dangerous than the impulses it sought to suppress.',
            },
            markScheme: [
              'AO1: Perceptive, developed response with judicious, well-integrated textual references',
              "AO2: Analysis of Stevenson's methods - narrative structure and perspective, setting as symbolism, the significance of unnamed transgressions, Utterson as the restrained point of view through which most of the story is told",
              'AO3: Understanding of context - Victorian respectability, professional masculinity, the Criminal Law Amendment Act 1885, the culture of silence and complicity, urban geography as moral map',
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER E - Macbeth (Guilt/Conscience) + A Christmas Carol
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p1-e',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 68,
    sections: [
      {
        id: 'aqa-lit-p1-e-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer one question from this section. You are advised to spend about 55 minutes on this section.',
        totalMarks: 38,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-e-q1',
            questionNumber: 1,
            questionText:
              'Read the following extract from Act 2 Scene 2 of Macbeth and then answer the question that follows.\n\nAt this point in the play Macbeth has just murdered King Duncan and has come back to Lady Macbeth.\n\nStarting with this extract, how does Shakespeare present the theme of guilt?\n\nWrite about:\n- how Shakespeare presents guilt in this extract\n- how Shakespeare presents guilt in the play as a whole.\n\n[30 marks + 4 marks for AO4 (SPaG)]',
            marks: 34,
            suggestedTimeMinutes: 55,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_05,
            extractSource: MACBETH_EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Shakespeare presents guilt as something that takes hold of Macbeth the moment Duncan is dead. His first words are "I have done the deed". He does not say that he has killed Duncan, which suggests he cannot bear to name what he has done. He is also jumpy and afraid, asking "Didst thou not hear a noise?"\n\nThe conversation between Macbeth and Lady Macbeth is broken into very short lines: "When?", "Now.", "As I descended?", "Ay." These quick, nervous exchanges build tension and show how frightened they both are of being discovered.\n\nMacbeth looks at his bloody hands and says "This is a sorry sight." The blood on his hands is a symbol of his guilt. Lady Macbeth dismisses his feelings, calling it "A foolish thought, to say a sorry sight." She seems calm and practical, which contrasts with Macbeth\'s panic.\n\nMacbeth tells her that he heard one of the sleeping men say "God bless us!" but that he could not answer "Amen", because the word "Stuck in my throat". This shows that his guilt has cut him off from God, because he cannot even pray. He also says he heard a voice cry "Sleep no more! / Macbeth does murder sleep". Duncan was murdered in his sleep, so Macbeth feels he has destroyed sleep itself and will never rest peacefully again.\n\nLady Macbeth tells him to "Go get some water, / And wash this filthy witness from your hand." She thinks guilt can be washed away like dirt. She also tells him to take the daggers back, but he refuses: "I am afraid to think what I have done; / Look on\'t again I dare not." He cannot face the murder.\n\nIn the rest of the play guilt destroys both of them. Straight after this, Macbeth wonders whether "all great Neptune\'s ocean" could wash the blood from his hand, while Lady Macbeth says "A little water clears us of this deed". But later it is Lady Macbeth who cannot escape her guilt. In Act 5 she sleepwalks and tries to wash imaginary blood from her hands, saying "Out, damned spot! out, I say!" and "all the perfumes of Arabia will not sweeten this little hand." Macbeth says his mind is "full of scorpions", and later sees Banquo\'s ghost. In Shakespeare\'s time killing a king was seen as a terrible sin against God, so the audience would expect the Macbeths to be punished by their guilt.',
              'Grade 6-7':
                'Shakespeare presents guilt in this extract as immediate, physical and spiritual, and he shows it through the contrast between Macbeth, who is overwhelmed by what he has done, and Lady Macbeth, who tries to manage it as a practical problem.\n\nMacbeth\'s first sentence, "I have done the deed", avoids the word "murder". The euphemism suggests that guilt begins as an inability to name the act. His next question, "Didst thou not hear a noise?", shows guilt sharpening his senses into fear. The dialogue that follows is stichomythia broken into fragments: "When?" "Now." "As I descended?" "Ay." The rapid exchange of short lines conveys panic and whispering, and shows the two of them listening for discovery. Even Lady Macbeth\'s answer, "I heard the owl scream and the crickets cry", fills the night with omens, since the owl was traditionally a bird of death.\n\nThe stage direction "Looking on his hands" makes the hands the focus of the scene. "This is a sorry sight" is an understatement, and its inadequacy is itself a sign of guilt: the language available to Macbeth is too small for what he has done. Lady Macbeth\'s reply, "A foolish thought, to say a sorry sight", repeats his words in a dismissive rhyme, showing her attempt to control his feelings by controlling his language.\n\nMacbeth\'s account of the two sleepers shows that his guilt is religious as well as psychological. One cried "God bless us!" and the other "Amen", "As they had seen me with these hangman\'s hands", an image that makes him an executioner. His inability to answer is devastating: "But wherefore could not I pronounce \'Amen\'? / I had most need of blessing, and \'Amen\' / Stuck in my throat." The murder has cut him off from prayer, and so from God\'s mercy. Lady Macbeth\'s warning, "These deeds must not be thought / After these ways; so, it will make us mad", is full of dramatic irony, because she is the one who will be driven mad.\n\nThe voice crying "Sleep no more! / Macbeth does murder sleep" turns guilt into a curse. Macbeth killed Duncan as he slept, so he believes he has murdered sleep itself. His list of metaphors for sleep, which "knits up the ravell\'d sleave of care" and is the "Balm of hurt minds" and "Chief nourisher in life\'s feast", shows how much he has lost, since sleep heals exactly the kind of damage he has done to himself. The voice names him three times, "Glamis hath murder\'d sleep, and therefore Cawdor / Shall sleep no more. Macbeth shall sleep no more!", turning the three titles the witches promised into three names for a condemned man.\n\nLady Macbeth\'s response is practical. She calls his thinking "brainsickly", tells him to "wash this filthy witness from your hand", and spots his mistake with the daggers at once. To her, the blood is a "witness", evidence that can be removed. Macbeth\'s refusal ends the extract: "I\'ll go no more: / I am afraid to think what I have done; / Look on\'t again I dare not." He is afraid not of being caught but of his own thoughts.\n\nAcross the play, guilt moves between the two characters. Moments later Macbeth fears that "all great Neptune\'s ocean" could not clean his hand, while Lady Macbeth insists "A little water clears us of this deed". Macbeth\'s guilt turns into fear and further violence: his mind is "full of scorpions", and he sees Banquo\'s ghost at the feast. Lady Macbeth\'s guilt stays hidden until it breaks out in the sleepwalking scene, where she tries to wash away a "damned spot" and admits "What\'s done cannot be undone", and the Doctor concludes that "More needs she the divine than the physician". For a Jacobean audience, regicide was a sin against God, who was believed to have appointed the king, so the Macbeths\' guilt would have been seen as the working of conscience and of divine justice.',
              'Grade 8-9':
                'Shakespeare presents guilt in this extract as arriving at the very moment the crime is complete, and he dramatises it through its effects on perception, language and faith. The scene\'s power lies in the contrast between two responses to the same act: Macbeth experiences guilt as a sensory and spiritual catastrophe, while Lady Macbeth treats it as a problem of management and evidence.\n\nThe first sentence, "I have done the deed", is a euphemism, and "deed" becomes the scene\'s word for the murder: Lady Macbeth later says "These deeds must not be thought / After these ways". Neither of them can say what the deed is. Guilt, from its first moment, is a failure of naming.\n\nThe stichomythia that follows ("When?" "Now." "As I descended?" "Ay.") breaks the verse into fragments shared between speakers, so that the form enacts the characters\' fractured composure and the whispered urgency of the moment. Macbeth\'s senses are over-alert: "Didst thou not hear a noise?", "Who lies i\' th\' second chamber?" Every sound becomes a potential accusation. Lady Macbeth\'s "I heard the owl scream and the crickets cry" adds omens to the soundscape, since the owl was the traditional messenger of death, and just before Macbeth\'s entrance she called it "the fatal bellman".\n\nThe stage direction "Looking on his hands" makes the hands the emblem of guilt that they will remain for the rest of the play. "This is a sorry sight" is so understated that the understatement becomes the point: the only word Macbeth can find, "sorry", belongs to the language of regret rather than horror, and it cannot contain what he has done. Lady Macbeth\'s reply, "A foolish thought, to say a sorry sight", mockingly repeats his phrase as a rhyme; she tries to master his guilt by mastering his words.\n\nMacbeth\'s account of the sleeping men moves guilt into the religious sphere. They pray, "God bless us!" and "Amen", "As they had seen me with these hangman\'s hands": he sees himself through their imagined eyes as an executioner, whose hands were bloody from his trade. His failure to answer them is the extract\'s theological crisis: "But wherefore could not I pronounce \'Amen\'? / I had most need of blessing, and \'Amen\' / Stuck in my throat." The man who most needs grace cannot ask for it. In Christian terms this is the beginning of damnation: not the sin itself, which could be repented, but the inability to pray for forgiveness.\n\nThe voice that cries "Sleep no more! / Macbeth does murder sleep" gives guilt the force of a prophecy, answering the witches\' prophecies of Act 1. Macbeth\'s metaphors for sleep ("the ravell\'d sleave of care", "sore labour\'s bath", "Balm of hurt minds", "Chief nourisher in life\'s feast") present it as the healer of the ordinary damage of living, so that murdering a sleeping king becomes a crime against the natural order of rest and renewal. The voice\'s final sentence is devastating in its structure: "Glamis hath murder\'d sleep, and therefore Cawdor / Shall sleep no more. Macbeth shall sleep no more!" The three titles with which the witches greeted him in Act 1 Scene 3 return as three names for one sleepless man, and the prophecy of greatness becomes a sentence of punishment.\n\nLady Macbeth\'s reply shows her suppression of guilt at work. "You do unbend your noble strength to think / So brainsickly of things" treats conscience as weakness and as illness, and "unbend" recalls Macbeth\'s promise in Act 1 Scene 7 to "bend up / Each corporal agent to this terrible feat": his resolve is a bow that has gone slack. Her imperatives, "Go get some water, / And wash this filthy witness from your hand", show how she understands guilt. The blood is a "witness", evidence that might testify, and so it can be washed away. Her sharp eye for the misplaced daggers confirms that she is thinking about discovery, not sin.\n\nMacbeth\'s refusal closes the extract: "I\'ll go no more: / I am afraid to think what I have done; / Look on\'t again I dare not." The verb "dare" recalls his "I dare do all that may become a man" in Act 1 Scene 7; the man who dared to kill does not dare to look. What he fears is not exposure but his own mind, and "I am afraid to think" anticipates his words a few lines later: "To know my deed, \'twere best not know myself."\n\nAcross the play, Shakespeare distributes guilt between the Macbeths in a chiasmus. In this scene Macbeth asks "Will all great Neptune\'s ocean wash this blood / Clean from my hand?" while Lady Macbeth insists "A little water clears us of this deed". Macbeth\'s guilt then hardens into fear and further murder ("O, full of scorpions is my mind, dear wife!") and finally into numbness: by Act 5 he has "supp\'d full with horrors". Lady Macbeth\'s suppressed guilt returns in sleep, the very thing Macbeth said they had murdered. The Doctor observes "You see, her eyes are open", and the Gentlewoman replies "Ay, but their sense are shut"; she washes her hands, cries "Out, damned spot! out, I say!", admits that "all the perfumes of Arabia will not sweeten this little hand" and that "What\'s done cannot be undone". The Doctor\'s diagnosis, "More needs she the divine than the physician", confirms that the guilt is spiritual. For a Protestant Jacobean audience, without the Catholic rite of confession and absolution, conscience was a matter between the sinner and God alone, and the Macbeths, who cannot pray and will not confess, dramatise what happens when guilt has nowhere to go.',
            },
            markScheme: [
              'AO1: Perceptive, developed response to extract and whole text with judicious textual references',
              "AO2: Analysis of Shakespeare's methods - stichomythia, euphemism, the imagery of hands, blood and sleep, dramatic irony, the contrast between Macbeth and Lady Macbeth, the reversal of guilt between them across the play",
              'AO3: Understanding of context - Reformation theology and the loss of confessional absolution, Jacobean conceptions of conscience, the relationship between guilt and kingship, divine right',
              'AO4: Accurate spelling, punctuation, and grammar with specialist terminology',
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-e-sec-b',
        title: 'Section B: The 19th-Century Novel - A Christmas Carol',
        description:
          'Answer one question from this section. You are advised to spend about 50 minutes on this section.',
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-e-q2',
            questionNumber: 2,
            questionText:
              'How does Dickens present the Cratchit family and their significance in A Christmas Carol?\n\nWrite about:\n- how Dickens presents the Cratchit family and their way of life\n- how Dickens uses the Cratchit family to convey his ideas about society.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Dickens presents the Cratchit family as poor but loving and happy. Bob Cratchit works for Scrooge and earns very little money - Scrooge sneers at "my clerk, with fifteen shillings a week, and a wife and family" - yet he is always cheerful and grateful. His family cannot afford much food: their Christmas goose is small and so is the pudding, but they celebrate it as though it were a feast.\n\nTiny Tim is the most important member of the family. He is a young boy with a disability who uses a crutch, and he says the famous line "God bless us every one!" This shows he is kind and unselfish despite his illness. The Ghost of Christmas Present tells Scrooge that Tim will die if nothing changes, which makes Scrooge feel guilty and sad.\n\nMrs Cratchit works hard to make their Christmas special. She is proud and wants the best for her family even though they have very little. The children all help and are excited about the small amount of food they have.\n\nDickens uses the Cratchit family to show that poor people are just as good as rich people - maybe even better - because they have love and togetherness. He wants to make readers like Scrooge feel responsible for helping families like the Cratchits. The family shows that happiness comes from love, not money.',
              'Grade 6-7':
                'Dickens constructs the Cratchit family as a strategic counterpoint to Scrooge, using their warmth, resilience, and mutual devotion to mount a sustained argument against utilitarian economics and the commodification of human worth. They function simultaneously as realistic characters and as idealised emblems of working-class virtue.\n\nBob Cratchit\'s characterisation is carefully calibrated. His salary of "fifteen shillings a week" locates him precisely within the Victorian economic hierarchy, and his working conditions - the "dismal little cell" of his office, the single coal - establish Scrooge\'s exploitation as a material reality rather than an abstraction. Yet Dickens refuses to make Bob angry or resentful: he slides down Cornhill "in honour of its being Christmas Eve," displaying the child-like joy that Scrooge has lost. This is both psychologically generous and politically strategic - Dickens presents the working poor as deserving not of pity but of respect.\n\nThe Christmas dinner scene is an exercise in affective economics. Every item - the goose ("a feathered phenomenon"), the pudding, the punch - is lovingly described in proportion to its scarcity, creating an inverse relationship between material abundance and emotional value. Mrs Cratchit\'s anxiety about the pudding is both comic and poignant: "Suppose it should break in turning out!" The subjunctive mood expresses a precariousness that is material (they cannot afford a replacement) and emotional (the pudding symbolises her self-worth as a provider).\n\nTiny Tim operates as the novella\'s most powerful rhetorical instrument. His disability, his smallness, his goodness, and his potential death create a figure designed to overwhelm the reader\'s defences. The Ghost\'s projection of the "vacant seat" and "crutch without an owner, carefully preserved" deploys metonymy to make absence tangible. When the Ghost recycles Scrooge\'s phrase - "surplus population" - in the context of Tim\'s potential death, Dickens forces the reader to confront the human cost of economic abstraction.\n\nContextually, the Cratchit family embodies Dickens\'s belief in the moral superiority of the hearth. His idealisation of domestic life as a space of redemption draws on the Victorian cult of domesticity, but Dickens radicalises it by locating this ideal in a working-class home rather than a middle-class parlour. The family\'s toast to Scrooge - initiated by Bob, resisted by Mrs Cratchit - is thematically significant: even the exploited maintain generosity toward their exploiter, which functions as both a model of Christian forgiveness and an implicit rebuke to Scrooge\'s meanness.',
              'Grade 8-9':
                "The Cratchit family constitutes Dickens's most carefully engineered piece of social rhetoric, functioning as a living refutation of every argument that Victorian capitalism deployed to justify the immiseration of the poor. Their presentation operates on three interconnected levels: as psychologically credible characters, as emblems of an alternative value system, and as instruments of the reader's moral transformation.\n\nDickens's realism in depicting the Cratchits is precise and purposeful. The specificity of Bob's salary (\"fifteen shillings a week\"), the dimensions of the family's economic precariousness (the threadbare clothes, the small goose, the pudding no one will admit is \"a small pudding for a large family\"), and the domestic labour required to produce the Christmas dinner - Mrs Cratchit's exertions, the children's contributions - ground the family in material reality. This empirical precision is strategically important: it pre-empts the objection that the Cratchits are sentimental fictions by anchoring them in verifiable economic conditions. Dickens had, in September 1843, weeks before he began the novella, visited the Field Lane Ragged School and been horrified by the conditions he witnessed; the Cratchits represent his attempt to translate that horror into a form that would penetrate the complacency of his middle-class readership.\n\nThe family's emotional economy is constructed as an explicit inversion of Scrooge's financial economy. Where Scrooge hoards capital, the Cratchits spend love; where Scrooge's interactions are transactional, the Cratchits' are communal; where Scrooge exists in solitary self-sufficiency, the Cratchits derive identity from mutual dependence. The Christmas dinner is the set piece in which this alternative economy is most fully displayed: each dish is inadequate by bourgeois standards yet treated as magnificent, not through delusion but through the transformative power of collective gratitude. The goose is \"Eked out by apple-sauce and mashed potatoes\" - the verb \"eked\" acknowledges scarcity while the following abundance of detail (the gravy \"hissing hot\", the potatoes mashed \"with incredible vigour\") performs the alchemy of love converting poverty into plenitude.\n\nTiny Tim is the family's - and the novella's - most controversial element, frequently dismissed as sentimental excess. But this reading misunderstands Dickens's rhetorical method. Tim is deliberately constructed as an irresistible emotional appeal: his smallness, his crutch, his illness, his uncomplaining sweetness, and his benediction (\"God bless us every one!\") constitute a cumulative assault on the reader's capacity for detachment. Dickens understood that rational argument alone - the kind deployed in parliamentary reports and reform pamphlets - had failed to change policy. Tim is his weapon of emotional mass destruction, designed to achieve through feeling what fact had been unable to accomplish. The Ghost's prophecy of Tim's death transforms the reader's position from observer to potential accomplice: if you know Tim will die and do nothing, you become complicit in his death.\n\nMrs Cratchit is underexamined but crucial. Her reluctant toast to Scrooge - she calls him \"an odious, stingy, hard, unfeeling man\" before grudgingly participating - is the only moment in which the Cratchit household expresses anger toward its exploiter. Dickens includes this moment to prevent the family from appearing implausibly forgiving, but he also contains it: the anger is expressed and then subsumed by the ritual of the toast, the collective smoothing-over that preserves domestic harmony. This containment is politically ambivalent: it models Christian charity, but it also dramatises the working class's socialised reluctance to challenge the structures that oppress them.\n\nContextually, the Cratchits must be read against the ideological backdrop of the 1834 New Poor Law, which sought to make relief so unpleasant (through the workhouse system) that the poor would accept any available employment. Scrooge's assertion that the poor should resort to \"prisons\" and \"workhouses\" directly echoes this policy's logic, and the Cratchits' dignified, joyful domesticity refutes it: here is a family that, despite earning a pittance, maintains moral and emotional richness that the wealthy Scrooge cannot access. Dickens's most radical claim, embedded in the Cratchits' characterisation, is that poverty is not a moral failing but a systemic injustice - and that the poor, far from being the architects of their own misery, possess virtues that the economic system they inhabit has failed to reward.",
            },
            markScheme: [
              'AO1: Perceptive, developed response with judicious, well-integrated textual references',
              "AO2: Analysis of Dickens's methods - characterisation, the novella form, symbolism (food, the hearth, Tiny Tim), narrative voice, use of contrast",
              'AO3: Understanding of context - the 1834 New Poor Law, Victorian attitudes to poverty, the cult of domesticity, Dickens\'s social reform agenda, Malthusian "surplus population" ideology',
              'Top band (Level 6, 26-30): Critical, exploratory, conceptualised response; precise references; judicious subject terminology; context convincingly integrated',
            ],
          },
        ],
      },
    ],
  },
]
