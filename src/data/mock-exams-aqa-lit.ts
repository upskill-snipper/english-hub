// @ts-nocheck
// ─── AQA GCSE English Literature (8702) Mock Exam Papers ─────────────────────
// 3 Paper 1 (Shakespeare + 19th Century Novel) + 3 Paper 2 (Modern Text + Poetry)
// Paper 1: Macbeth + A Christmas Carol
// Paper 2: An Inspector Calls + Power & Conflict Poetry

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
// POETRY EXTRACTS (PAPER 2)
// ─────────────────────────────────────────────────────────────────────────────
//
// Section A, An Inspector Calls, prints no extract; see INSPECTOR_Q_1 below.

// Cut from Project Gutenberg eBook #4800 by its first and last lines, with the
// edition's line numbers ("_5", "_10") removed; see the docblock.
const POWER_CONFLICT_POEM_1 = `I met a traveller from an antique land
Who said: Two vast and trunkless legs of stone
Stand in the desert...Near them, on the sand,
Half sunk, a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed:
And on the pedestal these words appear:
‘My name is Ozymandias, king of kings:
Look on my works, ye Mighty, and despair!’
Nothing beside remains. Round the decay
Of that colossal wreck, boundless and bare
The lone and level sands stretch far away.`

const POWER_CONFLICT_POEM_1_SOURCE =
  "Percy Bysshe Shelley, 'Ozymandias' (1818), in the text of The Complete Poetical Works of Percy Bysshe Shelley, ed. Thomas Hutchinson (the Oxford edition), Project Gutenberg eBook #4800"

// Cut from Project Gutenberg eBook #79363 by its first and last lines.
const POWER_CONFLICT_POEM_2 = `I wander through each chartered street,
Near where the chartered Thames does flow,
And mark in every face I meet
Marks of weakness, marks of woe.

In every cry of every man,
In every infant’s cry of fear,
In every voice, in every ban,
The mind-forged manacles I hear:

How the chimney-sweeper’s cry
Every blackening church appals,
And the hapless soldier’s sigh
Runs in blood down palace-walls.

But most, through midnight streets I hear
How the youthful harlot’s curse
Blasts the new-born infant’s tear,
And blights with plagues the marriage-hearse.`

const POWER_CONFLICT_POEM_2_SOURCE =
  "William Blake, 'London', from Songs of Experience (1794), in the text of Blake's Poems, ed. Alice Meynell, Project Gutenberg eBook #79363, which modernises Blake's spelling (your anthology may print \"charter'd\" for \"chartered\")"

// poemLines(myLastDuchessText), the whole poem, from the held edition.
const POWER_CONFLICT_POEM_3 = `That's my last Duchess painted on the wall,
Looking as if she were alive.   I call
That piece a wonder, now: Fra Pandolf's hands
Worked busily a day, and there she stands.
Will't please you sit and look at her? I said
"Fra Pandolf" by design, for never read
Strangers like you that pictured countenance,
The depth and passion of its earnest glance,
But to myself they turned (since none puts by
The curtain I have drawn for you, but I)
And seemed as they would ask me, if they durst,
How such a glance came there; so, not the first
Are you to turn and ask thus. Sir, 'twas not
Her husband's presence only, called that spot
Of joy into the Duchess' cheek; perhaps
Fra Pandolf chanced to say, "Her mantle laps
Over my lady's wrist too much," or "Paint
Must never hope to reproduce the faint
Half-flush that dies along her throat"; such stuff
Was courtesy, she thought, and cause enough
For calling up that spot of joy. She had
A heart--how shall I say?--too soon made glad,
Too easily impressed; she liked whate'er
She looked on, and her looks went everywhere.
Sir, 'twas all one! My favor at her breast,
The dropping of the daylight in the West,
The bough of cherries some officious fool
Broke in the orchard for her, the white mule
She rode with round the terrace--all and each
Would draw from her alike the approving speech,
Or blush, at least. She thanked men--good! but thanked
Somehow--I know not how--as if she ranked
My gift of a nine-hundred-years-old name
With anybody's gift. Who'd stoop to blame
This sort of trifling? Even had you skill
In speech--(which I have not)--to make your will
Quite clear to such an one, and say, "Just this
Or that in you disgusts me; here you miss,
Or there exceed the mark"--and if she let
Herself be lessoned so, nor plainly set
Her wits to yours, forsooth, and made excuse,
--E'en then would be some stooping; and I choose
Never to stoop. Oh, sir, she smiled, no doubt,
Whene'er I passed her; but who passed without
Much the same smile? This grew; I gave commands;
Then all smiles stopped together. There she stands
As if alive. Will't please you rise? We'll meet
The company below, then. I repeat,
The Count your master's known munificence
Is ample warrant that no just pretense
Of mine for dowry will be disallowed;
Though his fair daughter's self, as I avowed
At starting, is my object. Nay, we'll go
Together down, sir. Notice Neptune, though,
Taming a sea-horse, thought a rarity,
Which Claus of Innsbruck cast in bronze for me!`

const POWER_CONFLICT_POEM_3_SOURCE =
  "Robert Browning, 'My Last Duchess' (1842), in the text of Selections from the Poems and Plays of Robert Browning, Project Gutenberg eBook #28041"

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
// PAPER 2, SECTION A: AN INSPECTOR CALLS, ONE ESSAY QUESTION PER PAPER
// ─────────────────────────────────────────────────────────────────────────────
//
// Until 27 September 2026 each paper printed a "practice composition in the
// style of" Priestley and asked about "this extract and elsewhere in the
// play", which presented invented lines as the play's; one was headed
// "PRIESTLEY'S STAGE DIRECTION" though Priestley wrote none of it. The play is
// in UK copyright until the end of 2054 and is not held here, so no genuine
// passage of that length can be printed. The real AQA paper sets no extract
// for this section either: it asks an essay question on the whole play, as
// these now do. The mark schemes name no quotation, because none can be
// checked against a text this site holds, and there are no model answers
// until someone writes them with the play in front of them. The old ones
// quoted the invented lines and were keyed by grade bands the page never
// shows, so the mock-exam page never displayed them.

const INSPECTOR_Q_1 = {
  question:
    "How does Priestley present ideas about responsibility in An Inspector Calls?\n\nWrite about:\n• how the Birlings and Gerald respond to the idea that they share responsibility for Eva Smith's death\n• how Priestley presents these ideas by the ways he writes.",
  markScheme: [
    "Responds to the whole play, since there is no extract: each character's part in Eva Smith's story and how each responds to the Inspector's questions",
    "Contrasts Mr Birling's view that a man should look after himself and his own with the Inspector's insistence that people are responsible for one another",
    "Analyses Priestley's methods, for example the Inspector's questioning of one character at a time, exits and entrances that bring new information, dramatic irony and the final telephone call",
    "Shows understanding of context: the play was written in 1945 and is set in 1912, before two world wars, and reflects Priestley's socialist beliefs",
    'Uses subject terminology accurately (dramatic irony, stage directions, structure, mouthpiece)',
    'Grade 8-9: a sophisticated, sustained argument about how Priestley uses the whole play to persuade his audience',
  ],
}

const INSPECTOR_Q_2 = {
  question:
    'How does Priestley use the character of the Inspector to present his ideas about society in An Inspector Calls?\n\nWrite about:\n• what the Inspector says and does, and how the other characters respond to him\n• how Priestley uses the Inspector to present his ideas by the ways he writes.',
  markScheme: [
    "Responds to the whole play, since there is no extract: the Inspector's arrival, his questioning of each character, his final speech and the doubts about him after he has gone",
    "Analyses Priestley's methods, for example the timing of the Inspector's arrival while Mr Birling is telling Gerald and Eric that a man must look after himself, the change of lighting the opening stage directions ask for when he arrives, and his control of the questioning",
    'Considers the Inspector as a dramatic device: his name, how much he seems to know, and the question of whether he is a real police inspector at all',
    "Shows understanding of context: Priestley's socialist beliefs and the play's first audiences, just after the Second World War",
    'Uses subject terminology accurately (dramatic device, mouthpiece, dramatic irony, stage directions)',
    "Grade 8-9: a sophisticated, sustained argument about the Inspector's purpose in the play and for its audience",
  ],
}

const INSPECTOR_Q_3 = {
  question:
    'How does Priestley present the differences between the older and the younger generations in An Inspector Calls?\n\nWrite about:\n• how Mr and Mrs Birling, and Sheila and Eric, respond to what the Inspector reveals\n• how Priestley presents these differences by the ways he writes.',
  markScheme: [
    'Responds to the whole play, since there is no extract: how Sheila and Eric change, how their parents do not, and what each generation does after the Inspector has gone',
    "Analyses Priestley's methods, for example Sheila's warnings to her mother, Mrs Birling's condemnation of the father of Eva's child before she learns that he is Eric, and the family's responses to the final telephone call",
    'Considers where Gerald stands between the generations, and why Priestley places him there',
    "Shows understanding of context: Priestley's hope, writing in 1945, that the young would build a fairer society",
    'Uses subject terminology accurately (contrast, dramatic irony, character development, structure)',
    "Grade 8-9: a sophisticated, sustained argument about how the contrast between the generations carries Priestley's message",
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// PAPER 2: POETRY QUESTIONS, MARK SCHEMES AND MODEL ANSWERS, ONE SET PER PAPER
// ─────────────────────────────────────────────────────────────────────────────
//
// Each Section C pairing compares the paper's own poem with another poem that
// is in the anthology and printed on another paper here, so every quotation
// can be checked against a text printed in this file.

const POEM_Q_1 = {
  passage: POWER_CONFLICT_POEM_1,
  passageSource: POWER_CONFLICT_POEM_1_SOURCE,
  question:
    "Analyse how Shelley uses language and imagery to present the theme of power in 'Ozymandias'.",
  answers: {
    'Grade 4-5': `In "Ozymandias" Shelley shows that even the most powerful rulers are forgotten in the end. The statue of the king is broken: only "Two vast and trunkless legs of stone" are left standing, and the face lies "Half sunk" in the sand. This shows that his power has not lasted.

The king's face has a "frown" and a "sneer of cold command", which suggests that he was proud and cruel. The words on the pedestal say "Look on my works, ye Mighty, and despair!" He wanted other kings to feel that they could never match him. But Shelley tells us "Nothing beside remains.", so the words are now ironic, because there are no works left to see.

The poem ends with "The lone and level sands stretch far away." The desert is empty and huge, which makes the broken statue seem small. Shelley suggests that nature and time are more powerful than any human ruler.`,
    'Grade 6-7': `Shelley presents power as arrogant and temporary, and he uses the ruined statue as an extended image of its decline. The poem is a sonnet, but it is told at second hand: the speaker reports what "a traveller from an antique land" said. This distance makes Ozymandias seem far away in time and place, and undermines his claim to be remembered.

The statue is described in fragments, like the statue itself. "Two vast and trunkless legs of stone" sets the size of the ruler's ambition ("vast") against his present state ("trunkless"), and the "shattered visage" lies "Half sunk" in the sand. Even so, his expression survives: "frown, / And wrinkled lip, and sneer of cold command". The harsh sounds of "sneer" and "cold command" suggest a tyrant who ruled through fear.

Shelley also shows the power of art. The sculptor "well those passions read", and his work has outlasted the king, since those passions are still "stamped on these lifeless things". The line "The hand that mocked them, and the heart that fed" suggests that the sculptor mocked the king's pride even as he copied it.

The inscription is the poem's central irony: "My name is Ozymandias, king of kings: / Look on my works, ye Mighty, and despair!" The imperative was meant to make other rulers despair at his greatness; now it makes them despair because all power ends like this. The short sentence "Nothing beside remains." is blunt after the grand boast, and the alliteration of "boundless and bare" and "lone and level sands" makes the desert stretch out endlessly. Time and nature have the last word.`,
    'Grade 8-9': `Shelley's sonnet presents political power as a claim that time disproves, and he builds that argument through layers of voice. The poem passes from a speaker to a traveller to a sculptor and finally to the king himself, so that Ozymandias's words reach us only at third or fourth hand. The structure enacts his loss of control: the ruler who issued commands is now quoted by strangers.

The imagery of ruin is precise and ironic. "Two vast and trunkless legs of stone / Stand in the desert" gives the fragments a verb of endurance, but "trunkless" removes the body, and the "shattered visage" is "Half sunk". The face still shows its "sneer of cold command", but the sneer has become evidence against him. Shelley gives the real power in the poem to the sculptor, who "well those passions read / Which yet survive, stamped on these lifeless things". The verb "stamped" suggests both artistic shaping and the impression on a coin, and the paradox that passions "survive" on "lifeless things" shows that art outlives the man. "The hand that mocked them, and the heart that fed" turns on the double sense of "mocked", which means both imitated and ridiculed, so that the portrait is also a satire.

The inscription is the turning point. "My name is Ozymandias, king of kings" borrows a title of divine and imperial authority, and "Look on my works, ye Mighty, and despair!" is an imperative addressed to future rulers. Its meaning reverses: the "works" have gone, so the Mighty should despair not at his greatness but at their own fate. The blunt "Nothing beside remains." follows, and the closing alliteration, "boundless and bare" and "The lone and level sands stretch far away.", draws the eye to a horizon without a single human structure. Even the sonnet form is unsettled, since its rhyme scheme mixes Petrarchan and Shakespearean patterns, as if order itself were breaking down.

Written in 1817, when Shelley opposed the power of monarchs in Britain and Europe, the poem can be read as a warning to every tyrant. Power that rests on fear, it suggests, leaves only fragments, while the desert, which answers to nobody, is the true image of what lasts.`,
  },
  markScheme: [
    "Analyses Shelley's language and imagery with precise reference to the poem, for example the ruined statue and the inscription",
    'Comments on the effects of irony, contrast and sound, such as the alliteration of the final lines',
    'Considers form and structure: the sonnet, its unusual rhyme scheme and the layers of narration',
    'Uses subject terminology accurately (irony, imagery, sonnet, imperative, alliteration)',
    'Develops a sustained argument about power and its limits, with textual support',
    'Grade 8-9: perceptive, sustained analysis of how form and language create meaning',
  ],
}

const POEM_Q_2 = {
  passage: POWER_CONFLICT_POEM_2,
  passageSource: POWER_CONFLICT_POEM_2_SOURCE,
  question:
    "Analyse how Blake uses language and imagery to present the theme of power and its effects in 'London'.",
  answers: {
    'Grade 4-5': `In "London" Blake describes a walk through the city and shows how the people there suffer because of the powerful. The word "chartered" is repeated, which suggests that everything in London is owned and controlled by the rich, even the River Thames.

Blake says he sees "Marks of weakness, marks of woe" in every face he meets. The repetition of "marks" shows that everyone is unhappy. In the second stanza he repeats "In every" to show that the suffering is everywhere, even in the "infant's cry of fear".

Blake criticises the powerful institutions of his time. The church is described as "blackening", which could suggest that it is dirty or that it has done wrong by letting children work as chimney-sweepers. The soldier's sigh "Runs in blood down palace-walls", which suggests that the king and the government are responsible for soldiers dying in war.

The poem ends with the "marriage-hearse", which joins a happy thing, marriage, with death. This shows that Blake thinks life in London is ruined for everybody.`,
    'Grade 6-7': `Blake presents power in "London" as something that controls every part of city life, and he uses the speaker's walk to show its effects. The poem opens "I wander through each chartered street, / Near where the chartered Thames does flow". "Chartered" means mapped out, owned and licensed for trade, and applying it to the river, which should be natural and free, suggests that the powerful have claimed even nature.

The speaker notices the effects on people: "And mark in every face I meet / Marks of weakness, marks of woe." The verb "mark" (to notice) is repeated as the noun "Marks" (scars), which shows that power leaves its imprint on people. The second stanza uses anaphora, "In every cry of every man, / In every infant's cry of fear", to make suffering universal. The metaphor "The mind-forged manacles I hear" is the heart of the poem: people are chained by the ideas and fears they have accepted, not only by laws.

In the third stanza Blake names those responsible. The "chimney-sweeper's cry" is set against the "blackening church", suggesting that the Church is stained by the child labour it ignores. "And the hapless soldier's sigh / Runs in blood down palace-walls" turns a sigh into blood, blaming the monarchy for the deaths of soldiers.

The final stanza is the bleakest. The "youthful harlot's curse" is said to blast "the new-born infant's tear", and "marriage-hearse" is an oxymoron that joins the start of family life with death. The regular quatrains and steady rhyme scheme make the poem feel like a relentless march through a city where there is no escape from power.`,
    'Grade 8-9': `Blake's "London" presents power as a system that has entered not only the city's streets but its people's minds, and each stanza moves closer to the source and the cost of that power.

The opening stanza is about ownership. The repeated adjective "chartered" suggests streets, and even "the chartered Thames", parcelled out by charter for commerce, an ironic word in an age when charters were also meant to guarantee liberty. The speaker's "wander" suggests freedom, but everything he passes is owned. His act of looking is itself a response to power: "And mark in every face I meet / Marks of weakness, marks of woe." The shift from the verb "mark" to the noun "Marks" makes observation a record of damage, and the doubled phrase "Marks of weakness, marks of woe" sounds like a chant.

The second stanza moves from sight to sound, and the anaphora of "In every" builds until it lands on the poem's central image: "The mind-forged manacles I hear". The paradox that manacles can be heard suggests the clink of chains in every voice and every "ban", a word that means both a curse and a legal prohibition. Blake's point is that oppression works best when people imprison themselves.

The third stanza names Church and State. The "chimney-sweeper's cry / Every blackening church appals": the child's cry both horrifies and darkens the church, whose soot-blackened walls stand for its failure towards the children it should protect. "And the hapless soldier's sigh / Runs in blood down palace-walls" turns breath into blood, a startling image that makes the monarchy guilty of the deaths of the soldiers it sends to war. Written in the early 1790s and published in 1794, during the French Revolution, the image also hints at the violence that might come to palaces that ignore their people.

The final stanza shifts to "midnight streets" and the most disturbing image in the poem. The "youthful harlot's curse" blasts "the new-born infant's tear" and "blights with plagues the marriage-hearse". The oxymoron joins the wedding carriage to the hearse, so that marriage, birth and death are poisoned together. The short, regular quatrains with alternate rhymes give the poem the sound of a song, as its place in Songs of Experience suggests, but its content refuses comfort. Blake suggests that the effects of power are total: they reach the body, the mind and the future.`,
  },
  markScheme: [
    'Analyses Blake\'s language and imagery with precise reference to the poem, for example "chartered", the manacles and the palace walls',
    'Comments on the effects of repetition and anaphora, sound and oxymoron',
    'Considers form and structure: the regular quatrains and the movement from street to midnight',
    'Uses subject terminology accurately (anaphora, metaphor, oxymoron, quatrain)',
    'Develops a sustained argument about power and its effects, with textual support and relevant context',
    'Grade 8-9: perceptive, sustained analysis of how form and language create meaning',
  ],
}

const POEM_Q_3 = {
  passage: POWER_CONFLICT_POEM_3,
  passageSource: POWER_CONFLICT_POEM_3_SOURCE,
  question:
    "Analyse how Browning uses language and imagery to present the themes of power and conflict in 'My Last Duchess'.",
  answers: {
    'Grade 4-5': `In "My Last Duchess" a Duke shows a visitor a painting of his dead wife. The Duke has a lot of power, and Browning shows that he uses it to control people. He says "That's my last Duchess painted on the wall", and the word "my" shows that he thinks of her as something he owns.

The Duke did not like the way the Duchess was friendly to everyone. He says "her looks went everywhere", and he was angry that she seemed to value small kindnesses as much as his "nine-hundred-years-old name". This shows that he is very proud of his family and status.

The most shocking lines are "I gave commands; / Then all smiles stopped together." This suggests that he had her killed. The conflict between them was really about his jealousy and pride.

At the end, the Duke points out a bronze statue of "Neptune ... Taming a sea-horse". This shows that he likes things that are controlled, just as he controlled his wife.`,
    'Grade 6-7': `Browning presents the Duke as a man whose power depends on control, and the dramatic monologue lets him reveal more than he means to. The opening line, "That's my last Duchess painted on the wall", uses the possessive "my" and the word "last", which suggests that she was one in a series and can be replaced. He also controls who sees her: "none puts by / The curtain I have drawn for you, but I". The brackets around this aside make his control of the painting sound casual, which makes it more sinister.

The conflict between the Duke and the Duchess is revealed through his complaints. She had "A heart ... too soon made glad, / Too easily impressed", and "her looks went everywhere". What he describes as faults are really kindness and innocence. He is offended that she ranked "My gift of a nine-hundred-years-old name / With anybody's gift". The hyphenated adjective emphasises his pride in inherited status.

The Duke refuses to discuss the problem with her, because "I choose / Never to stoop." Instead, "I gave commands; / Then all smiles stopped together." The euphemism hides a murder, and the short, flat sentence shows his coldness.

Browning uses rhyming couplets, but the enjambment hides the rhymes, so the Duke's speech sounds natural while being tightly controlled, like the Duke himself. The poem ends with the bronze of "Neptune ... Taming a sea-horse", an image of a god taming a creature, which suggests how the Duke sees his own power over women.`,
    'Grade 8-9': `Browning's dramatic monologue presents power as the ability to control how others are seen and heard, and the poem's conflict, between the Duke's need to possess and the Duchess's free and generous nature, is told entirely by the winner.

The Duke's control begins with the frame. "That's my last Duchess painted on the wall, / Looking as if she were alive" makes her both an object of art and a ghost; "as if" reminds us that she is not. He decides who sees her, "none puts by / The curtain I have drawn for you, but I", and the bracketed aside shows how naturally he assumes that right. The painting is the one version of her he can fully command.

His account of the conflict condemns him. The Duchess's fault was that she had "A heart ... too soon made glad, / Too easily impressed; she liked whate'er / She looked on, and her looks went everywhere." The list of things that pleased her, "The dropping of the daylight in the West, / The bough of cherries some officious fool / Broke in the orchard for her", sets his rank against her delight in ordinary things, and he cannot bear that she "ranked / My gift of a nine-hundred-years-old name / With anybody's gift." His pride in lineage is the source of the conflict, and his refusal to speak to her, "I choose / Never to stoop.", shows that he would rather destroy than negotiate.

The turning point is the poem's most understated moment: "I gave commands; / Then all smiles stopped together. There she stands / As if alive." The line break after "commands;" and the caesura after "stopped together" enact the sudden ending of a life, while "There she stands" returns at once to the portrait, as if the Duchess matters only as a possession. The echo of the opening's "as if she were alive" completes her change from woman to object.

Browning then reveals the dramatic situation. The Duke is arranging his next marriage with the envoy of a Count, speaking of "dowry" and calling the new bride his "object". The final image, "Neptune, though, / Taming a sea-horse, thought a rarity, / Which Claus of Innsbruck cast in bronze for me!", is a last display of power: a god taming a creature, owned by a man who collects works of art and wives in the same way. The rhyming couplets, disguised by enjambment, mirror the Duke himself, whose polished manners conceal absolute control.`,
  },
  markScheme: [
    "Analyses Browning's language and imagery with precise reference to the poem, for example the portrait, the curtain and the Duke's complaints",
    "Comments on the effects of euphemism, possessive language and the Duke's asides",
    'Considers form and structure: the dramatic monologue, rhyming couplets and enjambment',
    'Uses subject terminology accurately (dramatic monologue, euphemism, enjambment, caesura)',
    'Develops a sustained argument about power and conflict, with textual support',
    'Grade 8-9: perceptive, sustained analysis of how form and language create meaning',
  ],
}

const POEM_COMPARISON_1 = {
  'Grade 4-5': `Two poems from the Power & Conflict anthology that deal with power are "Ozymandias" by Percy Bysshe Shelley and "London" by William Blake. Both poets criticise people who abuse power.

In "Ozymandias" the power belongs to one king, who was proud and cruel, with a "sneer of cold command". His statue is now broken, and "Nothing beside remains." This shows that his power did not last.

In "London" the power belongs to institutions such as the Church and the palace. Blake describes "Marks of weakness, marks of woe" on everyone's faces, which shows that ordinary people are suffering. The "hapless soldier's sigh" suggests that soldiers suffer in wars fought for the rulers in the palace.

The poems are different in form. "Ozymandias" is a sonnet told as a story by a traveller, while "London" is written in the first person, in four regular stanzas that feel like a walk through the city. In "Ozymandias" time defeats the powerful, but in "London" the powerful are still in control. Neither poem shows much resilience, but in "London" the people's cries are at least heard by the speaker.`,
  'Grade 6-7': `Shelley's "Ozymandias" and Blake's "London" both attack abuses of power, but they locate power in different places and give it different futures. In "Ozymandias" power belongs to one ruler, and Shelley exposes it through irony. The inscription "Look on my works, ye Mighty, and despair!" was meant to show his lasting might, but "Nothing beside remains.", so the conflict is between human pride and time, and time wins. In "London" power belongs to institutions, and it is still at work. The repetition of "chartered" in the first two lines suggests that even the streets and the river are owned and controlled, and "The mind-forged manacles I hear" suggests that people are imprisoned by ideas as well as by laws.

Both poets use images of marks and impressions. Shelley's sculptor leaves the king's passions "stamped on these lifeless things", preserving the tyrant's cruelty in stone, while Blake's speaker sees "Marks of weakness, marks of woe" in every face, as if power leaves its imprint on living people.

Their forms also differ. "Ozymandias" is a sonnet, a traditional form, but its unusual rhyme scheme and the voice passed from speaker to traveller to king make it feel unstable, like the ruined statue. "London" uses four regular quatrains with a steady rhythm, like the speaker's walking pace, and the relentless repetition of "In every" makes suffering seem universal and inescapable.

On resilience, the poems disagree. Shelley suggests that art and nature endure while tyranny fades, which offers a kind of hope. Blake offers little: the chimney-sweeper's cry, the soldier's sigh and the harlot's curse are the only resistance, and the final image of the "marriage-hearse" suggests that even love and new life are poisoned from the start.`,
  'Grade 8-9': `Both "Ozymandias" and "London" are Romantic protests against power, but Shelley views it across thousands of years while Blake views it at street level, and that difference in distance shapes their attitudes to conflict and endurance.

Shelley locates power in a single tyrant and defeats him through time. The framing, "I met a traveller from an antique land", pushes Ozymandias into a remote past, and his own words survive only as quoted speech. The irony of "Look on my works, ye Mighty, and despair!" depends on the desert that follows: "Nothing beside remains." The conflict is between the will to dominate and the indifference of nature, and the alliteration of "The lone and level sands stretch far away." makes that indifference feel limitless. Resilience belongs to the sculptor, whose art records the "sneer of cold command" and so outlives the man it mocks.

Blake finds power everywhere and gives it no ending. The adjective "chartered", applied even to the Thames, suggests a city owned, measured and sold, and the verb "mark" becomes the noun "Marks" in the next line, turning the speaker's act of noticing into the scars power leaves on people. The anaphora of "In every" builds to "The mind-forged manacles I hear", Blake's claim that oppression is internalised: people accept the chains that bind them. The third stanza names the institutions directly. The chimney-sweeper's cry "Every blackening church appals", and the "hapless soldier's sigh / Runs in blood down palace-walls", images of guilt staining the buildings of Church and State.

The forms mirror the attitudes. Shelley's sonnet, with its hybrid rhyme scheme and nested voices, is a form of order that seems to be crumbling, like the statue. Blake's quatrains, with their insistent rhythm and simple rhymes, sound like a song or a chant, which makes the suffering feel repeated and unending. The final stanza, where "the youthful harlot's curse / Blasts the new-born infant's tear, / And blights with plagues the marriage-hearse", compresses birth, marriage and death into one image of contamination.

Shelley therefore offers a consolation, that tyranny is temporary and that art and nature endure, while Blake refuses one: his speaker can only hear and record. Yet recording is itself a kind of resilience. Both poems survive as testimony against the powerful, which is exactly what the sculptor's work does in "Ozymandias".`,
}

const POEM_COMPARISON_2 = {
  'Grade 4-5': `Two poems about power are "London" by William Blake and "My Last Duchess" by Robert Browning. In "London" the powerful are institutions like the Church and the monarchy, and the people who suffer are ordinary Londoners with "Marks of weakness, marks of woe" on their faces. In "My Last Duchess" the power belongs to one man, a Duke, who controls his wife and then has her killed.

The Duke shows his power over the Duchess when he says "I gave commands; / Then all smiles stopped together." This suggests that he had her killed because she smiled at other people. He still controls her now, because only he can open "The curtain I have drawn for you" in front of her portrait.

The forms are different. "London" is spoken by someone walking through the city who notices everyone's suffering. "My Last Duchess" is a dramatic monologue, where the Duke talks the whole time and the Duchess never speaks. In both poems the people without power are silenced or can only cry or sigh. This shows that both poets criticise people who abuse their power.`,
  'Grade 6-7': `Blake's "London" and Browning's "My Last Duchess" both show power silencing people, but Blake presents the power of institutions over a whole city while Browning presents the power of one man over one woman.

In "London" power is everywhere and impersonal. The repetition of "chartered" suggests that the streets and even the Thames are owned, and "The mind-forged manacles I hear" suggests that people are trapped by the ideas that rule them. The victims, the chimney-sweeper, the soldier and the harlot, are given sounds but not words: a "cry", a "sigh" and a "curse".

In "My Last Duchess" power is personal and possessive. The Duke's opening, "That's my last Duchess painted on the wall", treats his wife as one of a series of possessions, and he controls who sees her: "none puts by / The curtain I have drawn for you, but I". His complaint that she was "too soon made glad" and that "her looks went everywhere" shows that he wanted her joy to belong only to him. The chilling "I gave commands; / Then all smiles stopped together." hints at murder without admitting it.

The forms show different attitudes. Blake uses a first-person witness and regular quatrains, and his anger is plain. Browning uses a dramatic monologue in rhyming couplets, and the enjambment makes the rhymes almost invisible, just as the Duke's cruelty hides behind polite speech. Blake's speaker condemns power openly; Browning lets the Duke condemn himself.

As for resilience, the victims in both poems have only a little. Blake's people still cry out, and the Duchess's spirit survives in the painting, where she looks "as if she were alive", but in both poems the powerful are still in control at the end.`,
  'Grade 8-9': `Both poems are studies of power that silences, but Blake exposes a system from outside while Browning lets a single tyrant expose himself from within, and their forms are central to the difference.

Blake's London is a city in which power has become the environment. The adjective "chartered", repeated for the streets and for "the chartered Thames", turns public space into property, and the "mind-forged manacles" make oppression a state of mind. Power has no face in the poem; it is present only through its buildings, the "blackening church" and the "palace-walls", and through its victims. The chimney-sweeper, the soldier and the harlot are reduced to sounds, a cry, a sigh and a curse, but the speaker hears them and records them, and his witness is the poem's act of resistance.

Browning's Duke is power with a face and a voice, and nobody else speaks. The dramatic monologue lets him control the conversation as he controls the curtain over the portrait: "none puts by / The curtain I have drawn for you, but I". His objections to the Duchess reveal more about him than about her: she had "A heart ... too soon made glad", and "her looks went everywhere". His hesitation, "how shall I say?", suggests how hard he finds it to name a fault that is really only kindness. He will not "stoop" to correct her, and the euphemism "I gave commands; / Then all smiles stopped together." disguises murder as administration. The rhyming couplets, blurred by constant enjambment, give his speech the polish of a courtier while the rhyme keeps him in complete control.

In both poems power turns people into objects. Blake's Londoners carry "Marks of weakness, marks of woe", as if stamped; the Duchess becomes a painting and the next Duchess a bargain, since the Duke is discussing a "dowry" with the envoy he is addressing. Even the closing "Neptune ... Taming a sea-horse" shows him admiring an image of control.

The poems differ most in resilience. Blake's cries are a kind of protest, and the "marriage-hearse" of the final stanza is an accusation hurled at the powerful. Browning's Duchess has no voice left, yet the poem keeps her alive: "The depth and passion of its earnest glance" survives in the portrait, and the reader, unlike the envoy, can judge the Duke. Both poets suggest that literature itself can outlast and expose the powerful.`,
}

const POEM_COMPARISON_3 = {
  'Grade 4-5': `Two poems about the power of rulers are "My Last Duchess" by Robert Browning and "Ozymandias" by Percy Bysshe Shelley. Both poems show proud, powerful men.

The Duke in "My Last Duchess" is proud of his "nine-hundred-years-old name", and he has his wife killed when she does not treat him as special: "I gave commands; / Then all smiles stopped together." The king in "Ozymandias" is also proud. His statue has a "sneer of cold command" and the words "Look on my works, ye Mighty, and despair!"

Both poems use art to show power. The Duke keeps a painting of his wife and a statue of "Neptune ... Taming a sea-horse". In "Ozymandias" there is a broken statue of the king.

The endings are different. The Duke is still powerful at the end of the poem and is planning his next marriage. Ozymandias has lost everything: "Nothing beside remains." Shelley shows that power does not last, while Browning shows how frightening power can be while it is still in control.`,
  'Grade 6-7': `Both Browning's "My Last Duchess" and Shelley's "Ozymandias" present arrogant rulers, and both use works of art to reveal them, but the poems take different views of whether power lasts.

The Duke's power is present and personal. His opening, "That's my last Duchess painted on the wall", shows possession, and his pride in "My gift of a nine-hundred-years-old name" explains his anger at a wife who treated everyone kindly. The conflict ends with his power absolute: "I gave commands; / Then all smiles stopped together." Ozymandias's power is past. His statue's "sneer of cold command" shows the same pride, but "Nothing beside remains.", and the "lone and level sands" have outlasted his empire.

Art plays a different role in each poem. For the Duke, art is another way to control: he keeps the Duchess behind a curtain and admires "Neptune ... Taming a sea-horse". In "Ozymandias" art exposes the ruler. The sculptor "well those passions read" and left them "stamped on these lifeless things", so the statue records the king's cruelty.

The forms suit these ideas. Browning's dramatic monologue lets the Duke speak without interruption, which reflects his control, and the rhyming couplets hidden by enjambment suggest cruelty hidden by good manners. Shelley's sonnet is passed from speaker to traveller to king, so Ozymandias has lost control even of his own words.

On resilience, Shelley suggests that time and nature defeat tyranny, which is a kind of hope. Browning offers less comfort, although the Duchess's smile survives in the painting, and the reader can see the Duke for what he is.`,
  'Grade 8-9': `Browning and Shelley both examine the pride of rulers through works of art, but one poem catches power at its height and the other at its ruin, and the form of each is shaped by that difference.

Browning's Duke speaks from inside his power. The dramatic monologue gives him the only voice, and he uses it to curate: the Duchess is "painted on the wall", hidden by "The curtain I have drawn for you", and shown when he chooses. His conflict with her arose because she would not rank "My gift of a nine-hundred-years-old name" above "anybody's gift", and he ended it with the euphemism "I gave commands; / Then all smiles stopped together." The poem closes on "Neptune ... Taming a sea-horse", cast in bronze "for me", an image of mastery that the Duke admires without irony. Power here is intact, and the next marriage is already being arranged.

Shelley's king speaks only through an inscription relayed by a traveller. "My name is Ozymandias, king of kings: / Look on my works, ye Mighty, and despair!" has the same absolute self-regard as the Duke's pride in his name, but its setting destroys it: "Nothing beside remains." Where Browning's art serves its owner, Shelley's serves the truth. The sculptor "well those passions read / Which yet survive, stamped on these lifeless things", and "The hand that mocked them" suggests an artist who imitated and ridiculed the king in the same act.

Both poems depend on dramatic irony. The Duke believes he is displaying taste, but the reader hears a confession; Ozymandias believes he is displaying greatness, but the reader sees a ruin. Their forms reinforce this. Browning's couplets, with enjambment that hides the rhyme, give a polished surface to a violent story, while Shelley's sonnet, with its irregular rhyme scheme and layered narration, is a traditional form unsettled from within.

On resilience the poems differ. Shelley places endurance in nature and art: the "lone and level sands" and the sculptor's work outlast the tyrant. Browning places it, more fragilely, in the painting itself, where the Duchess's "earnest glance" and her smile survive the man who stopped them. In both poems art outlives the moment of power, and the reader becomes the judge the rulers never faced.`,
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
// PAPER 2: MODERN TEXT & POETRY ANTHOLOGY (100 MARKS, 2 HOURS 15 MINUTES)
// ─────────────────────────────────────────────────────────────────────────────

const createPaper2 = (setNumber: number, inspector, poem, comparisonAnswers): MockExamPaper => {
  const nn = String(setNumber).padStart(2, '0')
  return {
    id: `aqa-lit-p2-${nn}`,
    board: 'AQA',
    paperNumber: 2,
    title: 'AQA English Literature Paper 2',
    subtitle: 'Modern Text and Poetry',
    code: '8702/2',
    totalTimeMinutes: 135,
    totalMarks: 100,
    sections: [
      {
        id: `aqa-lit-p2-${nn}-inspector`,
        title: 'Section A: Modern Text - An Inspector Calls (40 marks)',
        description:
          'Answer the question on your studied text. There is no extract in this section: write about the play as a whole, in full sentences, supporting your points with references to it and quotations you remember.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p2-${nn}-q1`,
            questionNumber: 1,
            questionText: inspector.question,
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            markScheme: inspector.markScheme,
          },
        ],
      },
      {
        id: `aqa-lit-p2-${nn}-poetry`,
        title: 'Section B: Poetry Anthology - Power & Conflict (40 marks)',
        description:
          'Answer the question on the poem printed below, which is in the Power & Conflict anthology.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p2-${nn}-q2`,
            questionNumber: 2,
            questionText: poem.question,
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: poem.passage,
            extractSource: poem.passageSource,
            modelAnswers: poem.answers,
            markScheme: poem.markScheme,
          },
        ],
      },
      {
        id: `aqa-lit-p2-${nn}-comparative-poetry`,
        title: 'Section C: Comparative Poetry Essay (20 marks)',
        description:
          'Write about the following question. You should compare at least two poems from the Power & Conflict anthology.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: `aqa-lit-p2-${nn}-q3`,
            questionNumber: 3,
            questionText:
              'Compare how two poems from the Power & Conflict anthology present different attitudes to power, conflict, and human resilience. In your answer, compare both language and form.',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            modelAnswers: comparisonAnswers,
            markScheme: [
              'Makes relevant comparisons between poems',
              'Analyses language with specific textual evidence',
              'Considers form and structure',
              'Develops ideas about power, conflict, and resilience',
              "Grade 6-7 and above: sophisticated comparison of the poets' attitudes and methods",
              'Grade 8-9: complex engagement with historical and political context',
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
  // Paper 2 - Set 1
  createPaper2(1, INSPECTOR_Q_1, POEM_Q_1, POEM_COMPARISON_1),
  // Paper 2 - Set 2
  createPaper2(2, INSPECTOR_Q_2, POEM_Q_2, POEM_COMPARISON_2),
  // Paper 2 - Set 3
  createPaper2(3, INSPECTOR_Q_3, POEM_Q_3, POEM_COMPARISON_3),
]
