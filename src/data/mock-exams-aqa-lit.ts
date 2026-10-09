// @ts-nocheck
// ─── AQA GCSE English Literature (8702) Mock Exam Papers ─────────────────────
// 3 Paper 1 (Shakespeare + 19th Century Novel): Macbeth + A Christmas Carol.
// Its three Paper 2s were retired on 9 October 2026; see below.

/**
 * THE PAPER 2s, RETIRED 9 OCTOBER 2026. This bank built three Paper 2s,
 * aqa-lit-p2-01 to 03, in its own shape: 100 marks in three sections, an
 * An Inspector Calls essay of 40, an analysis of one anthology poem of 40
 * and a comparison of 20. AQA's 8702/2 is 96 marks: a modern text (30 + 4
 * for AO4), the anthology (30) and unseen poetry (24 + 8), according to its
 * June 2023 mark scheme. src/data/mock-exams/aqa-lit-p2-a.ts defines papers
 * with the same three ids in AQA's shape, but src/data/mock-exams.ts keeps the
 * first copy of an id and lists this bank first, so students were given these
 * and the AQA-shaped ones were never served. The three, and the code and
 * passages only they used, are removed, so the AQA-shaped papers are served
 * under the same ids. What they held (Ozymandias, London and My Last Duchess
 * printed whole, the essay questions and the answers on the poems) is in git
 * history before this change. This file now builds the three Paper 1s only.
 *
 * The record below describes all six papers as they were on 27 September.
 */

/**
 * WHAT WAS WRONG, AND WHAT WAS CHANGED (27 September 2026).
 *
 * These six papers are live: they are in allMockExamPapers, which the
 * mock-exam pages serve. scripts/check-mock-exam-extracts.mjs, the first
 * check ever run on the mock-exam banks, found the first three faults
 * below. A review of the fix found the fourth, which the script does not
 * report: it raises a composition presented as the real work only when the
 * work is out of copyright, and An Inspector Calls is not.
 *
 *   - The three Macbeth and three A Christmas Carol extracts were labelled
 *     "Fabricated practice composition in the style of ... NOT verbatim; do
 *     not cite", yet every question on them asked for an answer "With
 *     reference to this extract and elsewhere in the play" (or novella),
 *     which presents them as Shakespeare's and Dickens's words. They mixed the
 *     real and the invented. By that script's count, word for word, 11 of the
 *     first Macbeth extract's 20 sentences were in the play, 4 of the
 *     second's 11 and none of the third's; 2 of the first Carol extract's 9
 *     were in the novella, 4 of the second's 12 and none of the third's. A
 *     student revising from them would learn lines that are in neither the
 *     play nor the novella.
 *   - createPaper1 and createPaper2 gave all three papers of each kind the
 *     same questions and the same model answers, written for the first set's
 *     extracts. So papers 02 and 03 printed one passage and answered another:
 *     in their six Paper 1 and poetry questions, 33 different quotations of
 *     four words or more were in no passage their paper printed, and two
 *     Paper 2 answers analysed a poem their paper did not print.
 *   - The three Paper 2 "Power & Conflict" poems were not in the anthology.
 *     One was the first stanza of Blake's "Laughing Song" with a line changed
 *     and three invented stanzas after it; two were invented outright. The
 *     section still asked for "one of the Power & Conflict poems", and the
 *     comparison answers wrote about "Laughing Song" and a "Rise Up" that
 *     exists nowhere as if both were anthology poems.
 *   - The three An Inspector Calls extracts were "practice compositions in
 *     the style of" Priestley under the same "this extract and elsewhere in
 *     the play" question, the first fault again; one was headed "PRIESTLEY'S
 *     STAGE DIRECTION" though Priestley wrote none of it.
 *
 * Each extract is now a genuine passage from the scene, stave or subject the
 * old one claimed, cut by script and never typed. Paper 1: Macbeth 5.1 (the
 * sleepwalking scene), 5.5 ("Tomorrow, and tomorrow") and the end of 3.4
 * (after the banquet), from the held edition, src/data/full-texts/macbeth.ts
 * (Gutenberg #1533); and A Christmas Carol Stave 5 (the ending), Stave 1 (the
 * charity collectors) and Stave 2 (Belle releases Scrooge), from
 * src/data/full-texts/a-christmas-carol.ts (Gutenberg #46). Each was cut with
 * passage() from src/lib/study-guides/passage.ts, and a play's speeches are
 * set out one to a paragraph, as "NAME: line", with the speaker named where a
 * speech resumes after a stage direction. Paper 2: three poems that are in
 * the AQA Power and Conflict anthology and out of copyright, "Ozymandias",
 * "London" and "My Last Duchess", printed whole, each under a question that
 * names it.
 *
 * Each paper now has its own questions, mark scheme notes and model answers,
 * written for the passage it prints. Every quotation in them is in that
 * passage or, where an answer says it comes from elsewhere in the text, in the
 * held edition at the act, scene or stave the answer gives, and the analysis
 * was checked against the words quoted.
 * src/__tests__/aqa-lit-mock-exams-quote-the-real-text.test.ts cuts each held
 * passage again and checks every quotation of two words or more, so neither
 * can drift.
 *
 * Paper 2 Section A, An Inspector Calls, now prints no extract. Priestley died
 * in 1984, so the play is in UK copyright until the end of 2054 and is not
 * held here, and no genuine passage of that length can be printed. The real
 * AQA paper sets no extract for that section either, so each paper now asks
 * its own essay question on the whole play, as AQA does. Its mark scheme
 * notes name no quotation, since none could be checked, and it has no model
 * answers until someone writes them with the play in front of them. The old
 * answers quoted the invented lines; they were keyed by grade bands the page
 * never shows, so the page never displayed them, and they are gone.
 *
 * WHY THE EXTRACTS ARE STRINGS, NOT passage() CALLS. This module is the
 * 'aqa-lit' chunk that src/data/mock-exam-loader.ts downloads when a student
 * opens one of these papers. Calling passage() here would put the whole of
 * Macbeth and A Christmas Carol, about 300 KB, into that download. So a
 * script cut each passage with passage() and wrote it in, and the test above
 * re-cuts it on every run.
 *
 * The two poems this site does not hold were cut from Project Gutenberg
 * files by their first and last lines: "Ozymandias" from Hutchinson's Oxford
 * Shelley (#4800, with its line numbers removed) and "London" from Alice
 * Meynell's 1911 Blake (#79363). Gutenberg's other Blake, #1934, prints "A
 * mark in every face I meet" where Blake wrote "And mark", so it was not used.
 * No test can re-cut these two, since their texts are not held; they were
 * compared word for word with those files when cut.
 *
 * The old model answers were keyed "Grade 5", "Grade 7" and "Grade 9", which
 * the mock-exam page never shows: it asks for "Grade 4-5", "Grade 6-7" and
 * "Grade 8-9". The rewritten answers use those keys, so students see them.
 *
 * NOT CHANGED. The papers keep this bank's own shape (three sections, 100
 * marks, 135 minutes each, and a Paper 1 comparison essay), which
 * src/data/mock-exams/index-data.ts mirrors. The real 8702/1 is 64 marks in
 * 1 hour 45 minutes with no comparison essay, and the real 8702/2 is 96 marks
 * with a section on unseen poems; matching them is a separate decision.
 */

// QA 2026-08-23: repointed from the aggregator to the type-only leaf so this
// lazy loader source cannot reach `src/data/mock-exams.ts` (which statically
// imports every bank) if the `type` keyword is ever dropped here.
import type { MockExamPaper } from './mock-exams/types'

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE & 19TH CENTURY NOVEL EXTRACTS (PAPER 1)
// ─────────────────────────────────────────────────────────────────────────────
//
// Each was cut by script from the held edition with the passage() call named
// above it; see the docblock at the top of this file.

// passage(macbethText, 'actv-scenei', 'Yet here’s a spot', 'What’s done cannot be undone'), as prose
const MACBETH_EXTRACT_1 = `LADY MACBETH: Yet here’s a spot.

DOCTOR: Hark, she speaks. I will set down what comes from her, to satisfy my remembrance the more strongly.

LADY MACBETH: Out, damned spot! out, I say! One; two. Why, then ’tis time to do’t. Hell is murky! Fie, my lord, fie! a soldier, and afeard? What need we fear who knows it, when none can call our power to account? Yet who would have thought the old man to have had so much blood in him?

DOCTOR: Do you mark that?

LADY MACBETH: The Thane of Fife had a wife. Where is she now?—What, will these hands ne’er be clean? No more o’ that, my lord, no more o’ that: you mar all with this starting.

DOCTOR: Go to, go to. You have known what you should not.

GENTLEWOMAN: She has spoke what she should not, I am sure of that: heaven knows what she has known.

LADY MACBETH: Here’s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand. Oh, oh, oh!

DOCTOR: What a sigh is there! The heart is sorely charged.

GENTLEWOMAN: I would not have such a heart in my bosom for the dignity of the whole body.

DOCTOR: Well, well, well.

GENTLEWOMAN: Pray God it be, sir.

DOCTOR: This disease is beyond my practice: yet I have known those which have walked in their sleep, who have died holily in their beds.

LADY MACBETH: Wash your hands, put on your nightgown; look not so pale. I tell you yet again, Banquo’s buried; he cannot come out on’s grave.

DOCTOR: Even so?

LADY MACBETH: To bed, to bed. There’s knocking at the gate. Come, come, come, come, give me your hand. What’s done cannot be undone. To bed, to bed, to bed.`

const MACBETH_EXTRACT_1_SOURCE =
  'William Shakespeare, Macbeth, Act 5, Scene 1 (the text of Project Gutenberg eBook #1533)'

// passage(aChristmasCarolText, 'section-5', 'A merry Christmas, Bob', 'Every One')
const CHRISTMAS_CAROL_EXTRACT_1 = `"A merry Christmas, Bob!" said Scrooge, with an earnestness that could not be mistaken, as he clapped him on the back. "A merrier Christmas, Bob, my good fellow, than I have given you, for many a year! I'll raise your salary, and endeavour to assist your struggling family, and we will discuss your affairs this very afternoon, over a Christmas bowl of smoking bishop, Bob! Make up the fires, and buy another coal-scuttle before you dot another i, Bob Cratchit!"

Scrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did NOT die, he was a second father. He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world. Some people laughed to see the alteration in him, but he let them laugh, and little heeded them; for he was wise enough to know that nothing ever happened on this globe, for good, at which some people did not have their fill of laughter in the outset; and knowing that such as these would be blind anyway, he thought it quite as well that they should wrinkle up their eyes in grins, as have the malady in less attractive forms. His own heart laughed: and that was quite enough for him.

He had no further intercourse with Spirits, but lived upon the Total Abstinence Principle, ever afterwards; and it was always said of him, that he knew how to keep Christmas well, if any man alive possessed the knowledge. May that be truly said of us, and all of us! And so, as Tiny Tim observed, God bless Us, Every One!`

const CHRISTMAS_CAROL_EXTRACT_1_SOURCE =
  'Charles Dickens, A Christmas Carol (1843), Stave 5 (the text of Project Gutenberg eBook #46)'

// passage(macbethText, 'actv-scenev', 'Hang out our banners', 'Signifying nothing'), as verse.
// Two of Macbeth's speeches resume after a stage direction, where the edition
// leaves the speaker to be understood; they carry "MACBETH:" here so that a
// student can tell who asks "What is that noise?". Layout only, like the rest.
const MACBETH_EXTRACT_2 = `MACBETH: Hang out our banners on the outward walls;
The cry is still, “They come!” Our castle’s strength
Will laugh a siege to scorn: here let them lie
Till famine and the ague eat them up.
Were they not forc’d with those that should be ours,
We might have met them dareful, beard to beard,
And beat them backward home.

[A cry of women within.]

MACBETH: What is that noise?

SEYTON: It is the cry of women, my good lord.

[Exit.]

MACBETH: I have almost forgot the taste of fears.
The time has been, my senses would have cool’d
To hear a night-shriek; and my fell of hair
Would at a dismal treatise rouse and stir
As life were in’t. I have supp’d full with horrors;
Direness, familiar to my slaughterous thoughts,
Cannot once start me.

[Enter Seyton.]

MACBETH: Wherefore was that cry?

SEYTON: The Queen, my lord, is dead.

MACBETH: She should have died hereafter.
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

const MACBETH_EXTRACT_2_SOURCE =
  'William Shakespeare, Macbeth, Act 5, Scene 5 (the text of Project Gutenberg eBook #1533)'

// passage(aChristmasCarolText, 'section-1', 'At this festive season', 'Good afternoon, gentlemen')
const CHRISTMAS_CAROL_EXTRACT_2 = `"At this festive season of the year, Mr. Scrooge," said the gentleman, taking up a pen, "it is more than usually desirable that we should make some slight provision for the Poor and destitute, who suffer greatly at the present time. Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir."

"Are there no prisons?" asked Scrooge.

"Plenty of prisons," said the gentleman, laying down the pen again.

"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"

"They are. Still," returned the gentleman, "I wish I could say they were not."

"The Treadmill and the Poor Law are in full vigour, then?" said Scrooge.

"Both very busy, sir."

"Oh! I was afraid, from what you said at first, that something had occurred to stop them in their useful course," said Scrooge. "I'm very glad to hear it."

"Under the impression that they scarcely furnish Christian cheer of mind or body to the multitude," returned the gentleman, "a few of us are endeavouring to raise a fund to buy the Poor some meat and drink, and means of warmth. We choose this time, because it is a time, of all others, when Want is keenly felt, and Abundance rejoices. What shall I put you down for?"

"Nothing!" Scrooge replied.

"You wish to be anonymous?"

"I wish to be left alone," said Scrooge. "Since you ask me what I wish, gentlemen, that is my answer. I don't make merry myself at Christmas and I can't afford to make idle people merry. I help to support the establishments I have mentioned--they cost enough; and those who are badly off must go there."

"Many can't go there; and many would rather die."

"If they would rather die," said Scrooge, "they had better do it, and decrease the surplus population. Besides--excuse me--I don't know that."

"But you might know it," observed the gentleman.

"It's not my business," Scrooge returned. "It's enough for a man to understand his own business, and not to interfere with other people's. Mine occupies me constantly. Good afternoon, gentlemen!"`

const CHRISTMAS_CAROL_EXTRACT_2_SOURCE =
  'Charles Dickens, A Christmas Carol (1843), Stave 1 (the text of Project Gutenberg eBook #46)'

// passage(macbethText, 'actiii-sceneiv', 'It will have blood', 'young in deed'), as verse
const MACBETH_EXTRACT_3 = `MACBETH: It will have blood, they say, blood will have blood.
Stones have been known to move, and trees to speak;
Augurs, and understood relations, have
By magot-pies, and choughs, and rooks, brought forth
The secret’st man of blood.—What is the night?

LADY MACBETH: Almost at odds with morning, which is which.

MACBETH: How say’st thou, that Macduff denies his person
At our great bidding?

LADY MACBETH: Did you send to him, sir?

MACBETH: I hear it by the way; but I will send.
There’s not a one of them but in his house
I keep a servant fee’d. I will tomorrow
(And betimes I will) to the Weird Sisters:
More shall they speak; for now I am bent to know,
By the worst means, the worst. For mine own good,
All causes shall give way: I am in blood
Stepp’d in so far that, should I wade no more,
Returning were as tedious as go o’er.
Strange things I have in head, that will to hand,
Which must be acted ere they may be scann’d.

LADY MACBETH: You lack the season of all natures, sleep.

MACBETH: Come, we’ll to sleep. My strange and self-abuse
Is the initiate fear that wants hard use.
We are yet but young in deed.`

const MACBETH_EXTRACT_3_SOURCE =
  'William Shakespeare, Macbeth, Act 3, Scene 4 (the text of Project Gutenberg eBook #1533)'

// passage(aChristmasCarolText, 'section-2', 'It matters little', 'and can release you')
const CHRISTMAS_CAROL_EXTRACT_3 = `"It matters little," she said, softly. "To you, very little. Another idol has displaced me; and if it can cheer and comfort you in time to come, as I would have tried to do, I have no just cause to grieve."

"What Idol has displaced you?" he rejoined.

"A golden one."

"This is the even-handed dealing of the world!" he said. "There is nothing on which it is so hard as poverty; and there is nothing it professes to condemn with such severity as the pursuit of wealth!"

"You fear the world too much," she answered, gently. "All your other hopes have merged into the hope of being beyond the chance of its sordid reproach. I have seen your nobler aspirations fall off one by one, until the master-passion, Gain, engrosses you. Have I not?"

"What then?" he retorted. "Even if I have grown so much wiser, what then? I am not changed towards you."

She shook her head.

"Am I?"

"Our contract is an old one. It was made when we were both poor and content to be so, until, in good season, we could improve our worldly fortune by our patient industry. You are changed. When it was made, you were another man."

"I was a boy," he said impatiently.

"Your own feeling tells you that you were not what you are," she returned. "I am. That which promised happiness when we were one in heart, is fraught with misery now that we are two. How often and how keenly I have thought of this, I will not say. It is enough that I have thought of it, and can release you."`

const CHRISTMAS_CAROL_EXTRACT_3_SOURCE =
  'Charles Dickens, A Christmas Carol (1843), Stave 2 (the text of Project Gutenberg eBook #46)'

// ─────────────────────────────────────────────────────────────────────────────
// PAPER 1: QUESTIONS, MARK SCHEMES AND MODEL ANSWERS, ONE SET PER PAPER
// ─────────────────────────────────────────────────────────────────────────────
//
// Until 27 September 2026 createPaper1 held one question and one set of
// answers for all three papers, so papers 02 and 03 answered set 01's
// passages. Each set below is written for the passage its paper prints.

const MACBETH_Q_1 = {
  passage: MACBETH_EXTRACT_1,
  passageSource: MACBETH_EXTRACT_1_SOURCE,
  question:
    'With reference to this extract and elsewhere in the play, analyse how Shakespeare presents the theme of guilt and conscience in Macbeth.',
  answers: {
    'Grade 4-5': `In this extract Lady Macbeth is sleepwalking, and Shakespeare shows that her guilt has taken over her mind. She keeps trying to wash an imaginary spot of blood off her hands: "Out, damned spot! out, I say!" The command shows she is desperate, but the spot will not go, which suggests that guilt cannot be removed. Her question "What, will these hands ne'er be clean?" shows that she knows she will never feel innocent again.

She also talks about all of the murders: Duncan ("the old man"), Lady Macduff ("The Thane of Fife had a wife") and Banquo ("Banquo's buried"). This shows that every crime is still in her mind.

This is very different from earlier in the play. After Duncan's murder she told Macbeth "A little water clears us of this deed", but now she says "all the perfumes of Arabia will not sweeten this little hand." Macbeth feels guilty straight away in Act 2 Scene 2, when he says he heard a voice cry "Sleep no more!", and now Lady Macbeth cannot sleep peacefully either. Shakespeare shows that guilt catches up with both of them in the end.`,
    'Grade 6-7': `Shakespeare uses the sleepwalking scene to show that the guilt Lady Macbeth pushed down while awake returns when she can no longer control it. The scene is written in prose, not the verse she spoke earlier, and her sentences are broken and jump between moments: "One; two. Why, then 'tis time to do't. Hell is murky!" The fragments suggest a mind reliving the night of Duncan's murder without being able to put it in order.

Her language echoes and reverses her earlier words. In Act 2 Scene 2 she scorned Macbeth's fear with "A little water clears us of this deed"; now "all the perfumes of Arabia will not sweeten this little hand." The costly, exotic image of Arabian perfume set against the "little hand" makes her seem small and helpless, and the smell of blood suggests that guilt has become a physical sense she cannot escape. She even repeats the kind of taunt she used in Act 1 Scene 7 ("Art thou afeard"), asking "a soldier, and afeard?", but Macbeth is not there to hear it, which shows how isolated she has become.

Shakespeare uses the Doctor and the Gentlewoman as witnesses who judge her. The Doctor's "You have known what you should not" and the Gentlewoman's "heaven knows what she has known" give the scene a religious weight, and the Doctor admits "This disease is beyond my practice". Guilt is presented as a sickness of the soul rather than the body.

The final line, "What's done cannot be undone", echoes her advice to Macbeth in Act 3 Scene 2, "what's done is done". Then it was meant to stop him worrying; now it expresses despair. Shakespeare suggests that the conscience she tried to silence in Act 1, when she asked the spirits to "Stop up th' access and passage to remorse", cannot be blocked for ever.`,
    'Grade 8-9': `Shakespeare presents conscience in Macbeth as something that can be refused but not destroyed, and the sleepwalking scene is where Lady Macbeth's refusal fails. Her invocation in Act 1 Scene 5, "Stop up th' access and passage to remorse", imagined remorse as a road that could be blocked; here the road has reopened in the one state she cannot govern, sleep. The irony is that sleep, which Macbeth said he had destroyed ("Macbeth does murder sleep"), gives her no rest either, and the watching Doctor and Gentlewoman turn her private torment into a kind of trial with witnesses.

The form carries the meaning. A queen who spoke some of the play's most controlled verse now speaks in prose, the language the play gives to its drunken Porter, and in fragments that run three crimes together: Duncan's blood ("who would have thought the old man to have had so much blood in him?"), Lady Macduff ("The Thane of Fife had a wife. Where is she now?") and Banquo ("Banquo's buried; he cannot come out on's grave"). She had no part in the last two murders, yet her conscience takes them on, which suggests that guilt in the play belongs to the marriage as well as to the hand that struck.

Shakespeare also makes her recall her old certainties and hear them fail. "What need we fear who knows it, when none can call our power to account?" is the logic of tyranny, that power puts a ruler beyond judgement; the scene answers it, because she is being called to account by her own mind in front of witnesses. "What's done cannot be undone" turns her practical "what's done is done" (Act 3 Scene 2) into a statement of damnation, and the Doctor's verdict just after the extract, "More needs she the divine than the physician", places the problem in the soul, not the body.

The contrast with Macbeth sharpens this. He speaks his guilt early, in the dagger he imagines and the voice that cried "Sleep no more!", and then deadens it until he has "almost forgot the taste of fears" (Act 5 Scene 5). She suppresses hers early and it destroys her late. Shakespeare suggests two ways a conscience can be defeated, by numbness or by denial, and shows that neither brings peace.`,
  },
  markScheme: [
    "Analyses Shakespeare's language and dramatic methods in the sleepwalking scene, with sustained reference to the extract",
    'Refers to elsewhere in the play, for example Lady Macbeth in Act 1 Scene 5 and Act 2 Scene 2, and Macbeth after the murder of Duncan',
    'Develops an interpretation of guilt and conscience, for example guilt that is suppressed while awake and returns in sleep',
    'Uses subject terminology accurately (prose and verse, fragmented syntax, imagery, irony)',
    'Constructs clearly developed analytical points with quotations from the extract and the play',
    'Grade 8-9: a sophisticated, sustained argument that links the extract to the whole play',
  ],
}

const MACBETH_Q_2 = {
  passage: MACBETH_EXTRACT_2,
  passageSource: MACBETH_EXTRACT_2_SOURCE,
  question:
    'With reference to this extract and elsewhere in the play, analyse how Shakespeare presents the effects of guilt and conscience on Macbeth.',
  answers: {
    'Grade 4-5': `At the start of the extract Macbeth sounds confident. He says "Our castle's strength / Will laugh a siege to scorn", which shows that he still believes he is safe. But when he hears the women crying he says "I have almost forgot the taste of fears." This shows that he has done so many terrible things that nothing scares him any more. He says "I have supp'd full with horrors", as if he has eaten so much horror that he is full up.

When he hears that the Queen is dead, he does not seem to grieve. He says "She should have died hereafter", which sounds cold. Then he says that life is "a walking shadow" and "a tale / Told by an idiot", which means he thinks life has no meaning.

Earlier in the play Macbeth felt very guilty. After killing Duncan he asked "Will all great Neptune's ocean wash this blood / Clean from my hand?" He was scared and felt he could not sleep. Now he feels nothing. Shakespeare shows that ignoring your conscience can leave you empty inside.`,
    'Grade 6-7': `Shakespeare shows the effect of guilt on Macbeth through what is missing in this extract. The opening speech is defiant, full of confident future verbs ("Will laugh a siege to scorn") and violent images ("Till famine and the ague eat them up"), but the stage direction "A cry of women within" interrupts him, and his reaction reveals how far he has changed. "The time has been, my senses would have cool'd / To hear a night-shriek" looks back to a Macbeth who could still be frightened. The metaphor "I have supp'd full with horrors" presents crime as a meal he has eaten until he is full, and "Direness, familiar to my slaughterous thoughts, / Cannot once start me." admits that horror has become ordinary.

This is a deliberate contrast with Act 2. After Duncan's murder Macbeth's conscience was so alive that he could not say "Amen" and heard a voice cry "Sleep no more!". His question "Will all great Neptune's ocean wash this blood / Clean from my hand?" shows a man overwhelmed by what he has done. By Act 5 that sensitivity has gone.

The news of Lady Macbeth's death shows the cost. "She should have died hereafter" can be read as grief (she should have died at a better time) or as indifference (she would have died some time anyway), and the ambiguity shows how hard Macbeth's feelings have become to read. The soliloquy that follows turns his loss into despair about all life: "Life's but a walking shadow; a poor player, / That struts and frets his hour upon the stage". The theatrical metaphor suggests that his kingship was only a performance, and the final line, "Signifying nothing", is the conclusion of a man whose conscience has been silenced so completely that meaning itself has gone.`,
    'Grade 8-9': `Shakespeare presents Macbeth's conscience in Act 5 as something he has succeeded in killing, and the extract shows the price of that success. The scene is built on interruption. Macbeth's opening speech has the rhetoric of a commander ("Hang out our banners on the outward walls"), yet the cry of women breaks into it, and the stage directions split his lines around Seyton's exit and return, so that the soldier's certainty is repeatedly cut by the sound of a grief he cannot share.

His response to the cry is the moral centre of the extract. "I have almost forgot the taste of fears" measures his loss through the senses: fear was once a taste, and his "fell of hair" would "rouse and stir / As life were in't". The simile gives fear the quality of life itself, so to lose it is to lose part of being alive. "I have supp'd full with horrors" recalls the banquet of Act 3, which the ghost of Banquo destroyed; now horror is the only food and he has had his fill. The adjective in "familiar to my slaughterous thoughts" shows that murder is no longer an act he performs but the element his mind lives in.

This is the end point of a process the play traces. In Act 2 conscience speaks through hallucination ("Is this a dagger which I see before me") and through the voice that cried "Sleep no more!". In Act 3 his mind is still "full of scorpions", yet he tells Lady Macbeth "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er". Each murder makes the next easier, until in Act 4 he resolves that "The very firstlings of my heart shall be / The firstlings of my hand", the decision that destroys Macduff's family without a moment's thought.

The "Tomorrow" soliloquy is therefore less a lament for his wife than a verdict on the life he chose. Time becomes meaningless repetition ("Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day"), and the "poor player" who "struts and frets his hour upon the stage" makes his kingship a performance that ends in silence. Shakespeare suggests that a conscience can be silenced, but that what replaces it is not peace but emptiness: a tale "full of sound and fury, / Signifying nothing."`,
  },
  markScheme: [
    "Analyses Shakespeare's language and dramatic methods in Act 5 Scene 5, with sustained reference to the extract",
    "Refers to elsewhere in the play, for example Macbeth's guilt in Act 2 Scene 2 and his resolve in Act 3 Scene 4 and Act 4 Scene 1",
    "Develops an interpretation of how Macbeth's conscience changes, for example from terror to numbness",
    'Uses subject terminology accurately (soliloquy, metaphor, stage direction, ambiguity)',
    'Constructs clearly developed analytical points with quotations from the extract and the play',
    'Grade 8-9: a sophisticated, sustained argument that links the extract to the whole play',
  ],
}

const MACBETH_Q_3 = {
  passage: MACBETH_EXTRACT_3,
  passageSource: MACBETH_EXTRACT_3_SOURCE,
  question:
    'With reference to this extract and elsewhere in the play, analyse how Shakespeare presents the theme of guilt and conscience in Macbeth.',
  answers: {
    'Grade 4-5': `This extract comes straight after Macbeth has seen Banquo's ghost at the banquet. He is still shaken and says "It will have blood, they say, blood will have blood". This means he believes that murder will lead to more murder and that he will be found out. The repetition of "blood" shows that he cannot stop thinking about what he has done.

Macbeth then decides to visit the witches again and says "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er". He compares his crimes to a river of blood, and he thinks it would be as hard to go back as to keep going. This shows that he has decided to ignore his conscience and carry on killing.

Lady Macbeth tells him "You lack the season of all natures, sleep." Earlier, after Duncan's murder, Macbeth heard a voice say "Sleep no more!", and here we see that his guilt is stopping him sleeping. Later in the play Lady Macbeth cannot rest either and walks in her sleep, which shows that guilt affects both of them.`,
    'Grade 6-7': `In this extract Shakespeare shows Macbeth's conscience reaching a turning point. The opening line, "It will have blood, they say, blood will have blood", sounds like a proverb, and the repetition makes violence seem to breed itself. The vague pronoun "It" is unsettling: Macbeth does not name the murder, as if he cannot bear to. He then lists signs by which nature exposes killers, "Stones have been known to move, and trees to speak", which shows that he fears the natural world itself will reveal his guilt.

Yet his response is not repentance. He announces that he will go to "the Weird Sisters" because "now I am bent to know, / By the worst means, the worst." The repetition of "worst" shows that he knowingly chooses evil. His extended metaphor "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er" pictures his crimes as a river he is halfway across, and suggests that he now thinks of turning back only as a matter of effort, not of right and wrong.

Lady Macbeth's line "You lack the season of all natures, sleep." links guilt to sleeplessness, a pattern Shakespeare builds across the play, from "Macbeth does murder sleep" in Act 2 to her own sleepwalking in Act 5. Macbeth explains his terror at the ghost as inexperience: "My strange and self-abuse / Is the initiate fear that wants hard use." He believes practice will cure his fear. The chilling final line, "We are yet but young in deed.", tells the audience that more murders are coming, and the killing of Macduff's family in Act 4 proves it.`,
    'Grade 8-9': `Shakespeare places this extract at the moment when Macbeth's guilt could have become repentance and instead becomes policy. Lady Macbeth has sent the guests away, the banquet is ruined, and the ghost has shown him that murder does not end with the victim. His first response is almost religious in its fear: "It will have blood, they say, blood will have blood" has the ring of scripture, and the list of portents ("Augurs, and understood relations") imagines a universe in which "The secret'st man of blood" is always found out. At this point his conscience still recognises a moral order.

Then the verse turns. The abrupt question "What is the night?" pulls him back to practical time, and Lady Macbeth's answer, "Almost at odds with morning, which is which", captures a world in which night and day, and so evil and good, can no longer be told apart. From here Macbeth speaks as a tyrant: his spies ("There's not a one of them but in his house / I keep a servant fee'd") and his resolve to be "bent to know, / By the worst means, the worst" show a man using power to protect himself from what he fears.

The central metaphor, "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er", is the key to Shakespeare's presentation of conscience here. It treats guilt as a matter of distance, not of right and wrong: Macbeth weighs the effort of going back against the effort of going on, and "tedious" reduces murder to a chore. The rhyme of "hand" with "scann'd" in "Strange things I have in head, that will to hand, / Which must be acted ere they may be scann'd" shows him deciding to act before he thinks, deliberately outrunning his conscience.

Lady Macbeth's diagnosis, "You lack the season of all natures, sleep.", is richer than she knows. Sleep in this play is the gift of an innocent mind, and both of them lose it: after Duncan's murder he heard that he "shall sleep no more", and she will walk and talk in her sleep in Act 5. Macbeth's reading of his fear as "the initiate fear that wants hard use" treats conscience as a beginner's weakness to be trained out of him, and "We are yet but young in deed." lets the audience know what follows. By Act 5 the training has worked, and Macbeth has "almost forgot the taste of fears", which Shakespeare presents not as strength but as the death of what made him human.`,
  },
  markScheme: [
    "Analyses Shakespeare's language and dramatic methods at the end of the banquet scene, with sustained reference to the extract",
    "Refers to elsewhere in the play, for example Macbeth after Duncan's murder and Lady Macbeth's sleepwalking",
    'Develops an interpretation of guilt and conscience, for example guilt that becomes resolve to kill again',
    'Uses subject terminology accurately (extended metaphor, repetition, rhyming couplet, dramatic irony)',
    'Constructs clearly developed analytical points with quotations from the extract and the play',
    'Grade 8-9: a sophisticated, sustained argument that links the extract to the whole play',
  ],
}

const CAROL_Q_1 = {
  passage: CHRISTMAS_CAROL_EXTRACT_1,
  passageSource: CHRISTMAS_CAROL_EXTRACT_1_SOURCE,
  question:
    "With reference to this extract and elsewhere in the novella, examine how Dickens uses Scrooge's transformation to explore the theme of redemption and social responsibility.",
  answers: {
    'Grade 4-5': `In this extract Scrooge has completely changed. He tells Bob Cratchit "I'll raise your salary, and endeavour to assist your struggling family". This is the opposite of Stave 1, where he would not let Bob have enough coal for his fire and complained about giving him Christmas Day off. Now Scrooge tells Bob to "buy another coal-scuttle", which shows that he wants to look after the people who work for him.

Dickens says that Scrooge "became as good a friend, as good a master, and as good a man, as the good old city knew". The repetition of "good" emphasises how complete the change is. Scrooge also becomes "a second father" to Tiny Tim, "who did NOT die". This shows that his change saved a life.

At the start of the novella Scrooge said that poor people who would rather die should "decrease the surplus population". By the end he helps people instead. Dickens uses Scrooge's story to show readers that anyone can change, and that rich people have a responsibility to help the poor.`,
    'Grade 6-7': `Dickens presents Scrooge's redemption as something proved by action rather than feeling. The extract opens with his promise to Bob, "I'll raise your salary, and endeavour to assist your struggling family", and then insists "Scrooge was better than his word. He did it all, and infinitely more". The short sentences and the hyperbole of "infinitely more" show that his change goes beyond words. Even the practical order "Make up the fires, and buy another coal-scuttle before you dot another i, Bob Cratchit!" reverses Stave 1, where the clerk's fire was so small "that it looked like one coal". Warmth becomes a symbol of generosity.

The triple structure "as good a friend, as good a master, and as good a man" moves from private life to work to Scrooge's whole character, and "as good a master" matters most for Dickens's message about social responsibility: Scrooge's goodness is shown in how he treats the man he employs. The widening list "or any other good old city, town, or borough, in the good old world" makes him an example for everyone.

Dickens admits that the world does not always welcome change: "Some people laughed to see the alteration in him, but he let them laugh". Scrooge no longer needs the approval of others, since "His own heart laughed: and that was quite enough for him." This contrasts with Stave 1, where he told the charity collectors that the poor had better die "and decrease the surplus population". Tiny Tim, "who did NOT die", is the living answer to that remark. The ending, "God bless Us, Every One!", turns Tiny Tim's blessing into a message to the reader, suggesting that responsibility for the poor belongs to all of us.`,
    'Grade 8-9': `Dickens ends A Christmas Carol by measuring Scrooge's redemption in social terms. The first paragraph is dramatic: Scrooge "clapped him on the back", jokes about a "Christmas bowl of smoking bishop", and makes the practical promise "I'll raise your salary, and endeavour to assist your struggling family". The verb "endeavour" matters because it promises effort rather than charity from a distance, and the setting, the office where Stave 1 showed Bob working beside a fire of "one coal", makes the workplace the place where redemption is tested.

The narrator then moves from scene to summary, and the change of pace suggests permanence: "Scrooge was better than his word. He did it all, and infinitely more". Dickens's syntax does the persuading. The tricolon "as good a friend, as good a master, and as good a man" puts "master", the employer, at its centre, and the widening list "city, town, or borough, in the good old world" makes one man's reform a model for a nation. The capitals of "who did NOT die" are the novella's moral proof: Scrooge's choice has changed the future the Ghost of Christmas Present foresaw, of "a vacant seat" and "a crutch without an owner".

Dickens is careful not to present redemption as universally admired. "Some people laughed to see the alteration in him", and the narrator reflects that "nothing ever happened on this globe, for good, at which some people did not have their fill of laughter in the outset". This anticipates the reader's cynicism and disarms it: those who mock would be "blind anyway". Redemption does not depend on being approved of.

The final paragraph links personal and social change. Scrooge "knew how to keep Christmas well", which fulfils his promise in Stave 4 to "honour Christmas in my heart, and try to keep it all the year". Christmas in the novella stands for a way of treating others, the "kind, forgiving, charitable, pleasant time" that Fred describes in Stave 1. The move to "us, and all of us" and Tiny Tim's "God bless Us, Every One!" widens the frame to include the reader. Written in 1843, when the New Poor Law and the workhouse were among Dickens's targets, the novella ends by suggesting that society's redemption, like Scrooge's, is a choice each person can make.`,
  },
  markScheme: [
    "Analyses Dickens's language and structure in the ending of Stave 5, with sustained reference to the extract",
    "Refers to elsewhere in the novella, for example Scrooge's treatment of Bob and the charity collectors in Stave 1 and Tiny Tim's fate in Staves 3 and 4",
    'Develops an interpretation of redemption shown through action and of responsibility to others',
    'Uses subject terminology accurately (tricolon, hyperbole, symbolism, narrative voice)',
    'Shows understanding of context, for example the New Poor Law and Victorian attitudes to poverty',
    'Grade 8-9: a sophisticated, sustained argument that links the extract to the whole novella',
  ],
}

const CAROL_Q_2 = {
  passage: CHRISTMAS_CAROL_EXTRACT_2,
  passageSource: CHRISTMAS_CAROL_EXTRACT_2_SOURCE,
  question:
    "With reference to this extract and elsewhere in the novella, examine how Dickens presents Scrooge's attitude to the poor, and how his transformation explores the theme of social responsibility.",
  answers: {
    'Grade 4-5': `In this extract two gentlemen ask Scrooge to give money to the poor at Christmas. Scrooge is cold and unkind. When they tell him that "Many thousands are in want of common necessaries", he just asks "Are there no prisons?" This shows that he thinks poor people should be locked away rather than helped.

When the gentleman says that many poor people "would rather die" than go to the workhouse, Scrooge replies that "they had better do it, and decrease the surplus population." This is shocking because he talks about people dying as if they were just numbers. He also says "It's not my business", which shows that he does not think he has any responsibility for other people.

By the end of the novella Scrooge has changed completely. In Stave 5 he meets the same gentleman and promises him a large sum of money, and he raises Bob Cratchit's salary. Dickens uses this change to show that rich people should help the poor.`,
    'Grade 6-7': `Dickens uses this extract to present Scrooge's attitude to the poor as heartless and to connect it to the harsh thinking of his time. The gentleman's language is full of feeling: the poor "suffer greatly at the present time", and "Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts". The balanced repetition moves from "thousands" to "hundreds of thousands", emphasising the scale of need.

Scrooge answers with questions about institutions: "Are there no prisons?" and "And the Union workhouses?" His questions are cold and sarcastic, and when he is told that the Treadmill and the Poor Law are "Both very busy", he says he is "very glad to hear it". Dickens's irony is sharp here, since Scrooge talks about punishment and poverty as if they were thriving businesses.

The most shocking reply is to the gentleman's "Many can't go there; and many would rather die." Scrooge answers "If they would rather die," then "they had better do it, and decrease the surplus population." The phrase "surplus population" echoes the economist Thomas Malthus, and Dickens puts it in Scrooge's mouth to show how such theories turn human beings into numbers. Scrooge's "It's not my business" sums up his rejection of social responsibility.

Dickens later turns these words back on him. In Stave 3, when Scrooge asks if Tiny Tim will live, the Ghost of Christmas Present repeats his phrase about the surplus population and asks "Will you decide what men shall live, what men shall die?" When the Ghost shows him the children Ignorance and Want, it answers him with "Are there no prisons?" In Stave 5 his transformation is shown when he meets the same gentleman and promises money that includes "A great many back-payments". The structure of the novella shows that social responsibility is a lesson Scrooge learns, and one Dickens wants his readers to learn too.`,
    'Grade 8-9': `Dickens stages this exchange as a debate between two ideas of society, and Scrooge's side of it is built from the language of institutions. The gentleman speaks of people: those "who suffer greatly at the present time", the "Many thousands" who "are in want of common necessaries". Scrooge answers with buildings and systems: prisons, "the Union workhouses", "The Treadmill and the Poor Law". His mock relief, "I was afraid, from what you said at first, that something had occurred to stop them in their useful course", uses the vocabulary of efficiency for institutions designed to deter the poor. Dickens, writing in 1843 under the New Poor Law of 1834, is attacking a real policy through Scrooge's approval of it.

Scrooge's refusal is framed as a principle rather than a whim: "I don't make merry myself at Christmas and I can't afford to make idle people merry." The adjective "idle" assumes that poverty is a moral failing, and his point that he already pays for the workhouses ("they cost enough") shows a man who believes his responsibility ends with what the law makes him pay. When he hears "Many can't go there; and many would rather die", he replies "If they would rather die," then "they had better do it, and decrease the surplus population." The term from Malthus turns death into arithmetic. His final position, "It's enough for a man to understand his own business, and not to interfere with other people's", is the individualism of laissez-faire economics put as a rule for life.

The novella is designed to defeat this speech with its own words. Later that night Marley's ghost gives "business" its true meaning: "Mankind was my business. The common welfare was my business". In Stave 3 the Ghost of Christmas Present turns Scrooge's phrase about the surplus population against him, asking "Will you decide what men shall live, what men shall die?" and suggesting that in the sight of Heaven Scrooge may be "more worthless and less fit to live than millions like this poor man's child". The abstract "surplus" becomes Tiny Tim, a child with a name. In Stave 5 Scrooge seeks out "the portly gentleman" and pledges a sum of which "A great many back-payments are included in it". His redemption is social rather than private: it returns him to the community he said was not his business, and invites Dickens's middle-class readers to recognise their own reasoning in his and to change it.`,
  },
  markScheme: [
    "Analyses Dickens's language and methods in the charity collectors' scene in Stave 1, with sustained reference to the extract",
    "Refers to elsewhere in the novella, for example Marley's ghost, the Ghost of Christmas Present's answers in Stave 3 and Scrooge's pledge in Stave 5",
    "Develops an interpretation of Scrooge's attitude to the poor and of how his transformation answers it",
    'Uses subject terminology accurately (irony, dialogue, juxtaposition, structure)',
    'Shows understanding of context, for example the New Poor Law, the workhouses and Malthus',
    'Grade 8-9: a sophisticated, sustained argument that links the extract to the whole novella',
  ],
}

const CAROL_Q_3 = {
  passage: CHRISTMAS_CAROL_EXTRACT_3,
  passageSource: CHRISTMAS_CAROL_EXTRACT_3_SOURCE,
  question:
    'With reference to this extract and elsewhere in the novella, examine how Dickens presents what greed has cost Scrooge, and how his transformation explores the theme of redemption.',
  answers: {
    'Grade 4-5': `In this extract the Ghost of Christmas Past shows Scrooge the moment when Belle, the woman he was going to marry, ends their engagement. She says "Another idol has displaced me", and when Scrooge asks what idol, she answers "A golden one." This means that Scrooge now loves money more than her.

Belle says she has seen his "nobler aspirations fall off one by one, until the master-passion, Gain, engrosses you." This shows that Scrooge changed slowly, and that greed took over his life. She also says "When it was made, you were another man", which shows that Scrooge was once a kinder person.

This scene matters for Scrooge's redemption because it shows him what he lost. Later in Stave 2 he cannot bear to watch any more and begs the Spirit "Haunt me no longer!" By Stave 5 Scrooge becomes generous and kind again. Dickens shows that people can change for the worse, but that they can also change back.`,
    'Grade 6-7': `Dickens presents this scene as the moment when Scrooge's first transformation, into a miser, becomes visible. Belle's manner is gentle ("she said, softly"; "she answered, gently") but her judgement is severe. The metaphor "Another idol has displaced me" presents money as a false god, and the short reply "A golden one." makes the charge plain. Scrooge's defence, that the world is hardest on "poverty" and yet condemns "the pursuit of wealth", shows that he blames society for his choices rather than himself.

Belle's reply is the novella's explanation of how Scrooge became Scrooge: "You fear the world too much ... I have seen your nobler aspirations fall off one by one, until the master-passion, Gain, engrosses you." The image of aspirations falling "one by one" suggests a gradual loss, like leaves falling, and "master-passion" presents greed as a ruler. Giving "Gain" a capital letter makes it seem like a person who has taken her place.

Her statement "You are changed. When it was made, you were another man." is ironic, because the novella is about Scrooge becoming another man again. Their engagement was made when they were "both poor and content to be so", which contrasts with the wish to "improve our worldly fortune" that has become his only aim.

This matters for redemption because Scrooge must first remember who he was. Earlier in Stave 2 he wept for his lonely younger self and wished he had given something to a boy singing a carol, the first sign of change. At the end of the stave he begs the Spirit "Haunt me no longer!", which shows how much memory hurts. By Stave 5 he chooses the warm, human life Belle offered him, spending Christmas with his nephew's family and raising Bob's salary, which suggests that redemption means recovering the "nobler aspirations" he had lost.`,
    'Grade 8-9': `Dickens uses Belle to give the novella's most precise account of what greed has taken from Scrooge, and he does it through the language of worship and of contract. "Another idol has displaced me" is a religious metaphor: an idol is a false god, and Belle, whose name means beautiful, has been replaced by "A golden one.", an image that recalls the golden calf of Exodus. Scrooge's reply turns to social complaint: "There is nothing on which it is so hard as poverty; and there is nothing it professes to condemn with such severity as the pursuit of wealth!" His argument is not entirely wrong, and Dickens lets him make it, but it reveals a man who has let the fear of poverty decide his values.

Belle's answer, "You fear the world too much", names fear as the root of greed. "All your other hopes have merged into the hope of being beyond the chance of its sordid reproach" describes desire narrowing to a single aim, and "the master-passion, Gain, engrosses you" uses a verb with a double meaning: to engross is to absorb completely, and also, in the language of trade, to buy up the whole supply of a commodity. Scrooge has become the thing he trades in. The personified "Gain" is a master, as Scrooge will be to Bob Cratchit, and a hard one.

The scene is built around the idea of a contract. "Our contract is an old one." puts love in legal terms, perhaps because that is the only language Scrooge now understands, and the words that close the extract, "It is enough that I have thought of it, and can release you.", free him from a bond at the very time he is forging another: the chain that Marley tells him in Stave 1 is made "link by link". Her line "When it was made, you were another man." is the novella's key irony, because the redemption plot will make Scrooge another man again. In Stave 4 he insists "I am not the man I was."

Dickens presents redemption as the recovery of a lost self rather than the creation of a new one. The Ghost of Christmas Past has already made him weep for the lonely boy he was, and memory is the first step. His cry at the end of the stave, "Haunt me no longer!", shows how painful that recognition is. The transformation of Stave 5, which ends with Scrooge "a second father" to Tiny Tim and a good master to Bob, answers Belle's charge directly: the man who chose Gain over love learns that human connection is the only wealth worth having.`,
  },
  markScheme: [
    "Analyses Dickens's language and methods in the scene where Belle releases Scrooge in Stave 2, with sustained reference to the extract",
    "Refers to elsewhere in the novella, for example Scrooge's lonely childhood, Marley's chain and the ending of Stave 5",
    'Develops an interpretation of what greed has cost Scrooge and of redemption as the recovery of a lost self',
    'Uses subject terminology accurately (metaphor, personification, dialogue, irony)',
    'Shows understanding of context, for example Victorian ideas about wealth, poverty and respectability',
    'Grade 8-9: a sophisticated, sustained argument that links the extract to the whole novella',
  ],
}

// Section C has no extract, so one set of answers serves all three papers.
// Its quotations are checked against the held editions of both texts.
const PAPER_1_COMPARISON_ANSWERS = {
  'Grade 4-5': `Both Shakespeare and Dickens show that moral failure leads to destruction. Macbeth kills the king and then more people, and this destroys his mind and his life. He becomes paranoid and unhappy. Lady Macbeth goes mad from guilt. In A Christmas Carol, Scrooge's moral failure is his refusal to help poor people. He is cold and lonely because of his selfishness. Both writers suggest that you cannot commit evil acts without suffering consequences. However, the main difference is that Scrooge gets a chance to change, but Macbeth does not. Macbeth dies still guilty, while Scrooge becomes a good person. This shows that Dickens is more optimistic than Shakespeare about the possibility of redemption.`,
  'Grade 6-7': `Shakespeare and Dickens both present moral failure as something that damages the individual first and society second, but they differ over whether it can be undone. Macbeth's murder of Duncan starts a chain of psychological decline. At first his conscience is acute ("Will all great Neptune's ocean wash this blood / Clean from my hand?"), but by Act 5 he has become numb and sees life as "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." Lady Macbeth's guilt turns inward and destroys her in the sleepwalking scene. By contrast, Dickens presents Scrooge's moral failure, his indifference to the poor, as something that can be corrected once he is made to see its consequences. The difference lies in the form of each text: Macbeth is a tragedy, in which the hero's choices lead to his death, while the three spirits of A Christmas Carol give Scrooge the chance to change before it is too late. Socially, Macbeth's crime disturbs nature itself, as the "unnatural" events after Duncan's murder show, and Scotland suffers under a tyrant, whereas Scrooge's reform improves the lives of the Cratchits and others around him. Both writers insist that moral failure has real consequences, but Shakespeare emphasises that they cannot be reversed, while Dickens offers the hope of restoration.`,
  'Grade 8-9': `Macbeth and A Christmas Carol present moral failure through different forms, and the form decides whether the failure can be undone. Shakespeare's tragedy treats Macbeth's crime as a violation of an order that is political, natural and spiritual at once. The murder of the king is followed by disorder in nature, reported by Lennox the same morning: "The night has been unruly: where we lay, / Our chimneys were blown down". Macbeth himself says that he has given his "eternal jewel" to "the common enemy of man", so the consequence of his choice is damnation as well as death. Once he has decided that returning "were as tedious as go o'er", the form allows only one ending, and Malcolm's final verdict on "this dead butcher, and his fiend-like queen" comes only once both are dead.

Dickens, writing a festive ghost story for Victorian readers, presents Scrooge's failure as a failure of sympathy that can be corrected. His sin is to treat the poor as an abstraction, the "surplus population", and the spirits correct it by showing him particular lives: Belle, the Cratchits and Tiny Tim. The chain Marley made "link by link" shows what the unreformed Scrooge would suffer after death, so Dickens, like Shakespeare, suggests that moral failure has consequences beyond this world. The difference is that Marley's warning comes in time.

Socially, both writers link private failure to public harm. Under Macbeth, Scotland is a place where, as Ross says in Act 4, good men's lives "Expire before the flowers in their caps"; Scrooge's indifference leaves the Cratchits poor and Tiny Tim facing death. Shakespeare shows the damage repaired only by the removal of the tyrant, while Dickens shows it repaired by the reformed man himself, who becomes "a second father" to Tiny Tim. The fundamental distinction is that Shakespeare presents moral failure as a fall from which there is no return, while Dickens presents it as a failure of imagination within a society that can still be reformed.`,
}

// ─────────────────────────────────────────────────────────────────────────────
// PAPER 1: SHAKESPEARE & 19TH CENTURY NOVEL (100 MARKS, 2 HOURS 15 MINUTES)
// ─────────────────────────────────────────────────────────────────────────────

const createPaper1 = (setNumber: number, macbeth, carol): MockExamPaper => {
  const nn = String(setNumber).padStart(2, '0')
  return {
    id: `aqa-lit-p1-${nn}`,
    board: 'AQA',
    paperNumber: 1,
    title: 'AQA English Literature Paper 1',
    subtitle: 'Shakespeare and 19th Century Novel',
    code: '8702/1',
    totalTimeMinutes: 135,
    totalMarks: 100,
    sections: [
      {
        id: `aqa-lit-p1-${nn}-macbeth`,
        title: 'Section A: Shakespeare - Macbeth (40 marks)',
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q1`,
            questionNumber: 1,
            questionText: macbeth.question,
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: macbeth.passage,
            extractSource: macbeth.passageSource,
            modelAnswers: macbeth.answers,
            markScheme: macbeth.markScheme,
          },
        ],
      },
      {
        id: `aqa-lit-p1-${nn}-carol`,
        title: 'Section B: 19th Century Novel - A Christmas Carol (40 marks)',
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q2`,
            questionNumber: 2,
            questionText: carol.question,
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: carol.passage,
            extractSource: carol.passageSource,
            modelAnswers: carol.answers,
            markScheme: carol.markScheme,
          },
        ],
      },
      {
        id: `aqa-lit-p1-${nn}-comparison`,
        title: 'Section C: Comparison Essay (20 marks)',
        description:
          'Write about the following question. You should base your answer on both studied texts.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q3`,
            questionNumber: 3,
            questionText:
              'Compare the ways in which Shakespeare and Dickens present the consequences of moral failure. In your answer, you should consider the consequences for the individual characters and for society as a whole.',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            modelAnswers: PAPER_1_COMPARISON_ANSWERS,
            markScheme: [
              'Makes relevant comparisons between texts',
              'Considers both individual and social consequences',
              'Uses subject terminology accurately',
              'Develops ideas with textual evidence',
              'Grade 6-7 and above: sophisticated analysis of how different literary forms shape meaning',
              'Grade 8-9: complex engagement with philosophical and aesthetic implications',
            ],
          },
        ],
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT ALL PAPERS
// ─────────────────────────────────────────────────────────────────────────────

export const aqaLitMockExams: MockExamPaper[] = [
  // Paper 1 - Set 1
  createPaper1(1, MACBETH_Q_1, CAROL_Q_1),
  // Paper 1 - Set 2
  createPaper1(2, MACBETH_Q_2, CAROL_Q_2),
  // Paper 1 - Set 3
  createPaper1(3, MACBETH_Q_3, CAROL_Q_3),
]
