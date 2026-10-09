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
 * SET AS AQA SETS IT, 9 OCTOBER 2026. AQA's June 2023 question paper and mark
 * scheme for 8702/1 set 64 marks in 1 hour 45 minutes: Section A, one question
 * on a printed Shakespeare extract and the play as a whole, 30 marks and 4 for
 * AO4; Section B, one question on a printed extract from the 19th-century
 * novel and the novel as a whole, 30 marks; AO1 12, AO2 12 and AO3 6 in each,
 * marked in six levels. These papers said 68 marks, Section A said 38 for its
 * one 34-mark question, and Section B was a whole-novel essay with no extract.
 * Each Section B now prints an extract cut from the held edition by passage()
 * and asks AQA's question about it and the novel as a whole, and its model
 * answers were rewritten round the extract and checked against the edition:
 *   a  Stave 1, the narrator's portrait of Scrooge: Scrooge as a character
 *      who changes
 *   b  Chapter 1, the by-street and the door: duality
 *   c  Stave 3, Ignorance and Want: poverty and wealth
 *   d  Chapter 1, Enfield's and Utterson's bargain never to speak of it again:
 *      reputation
 *   e  Stave 3, the Cratchits' goose and pudding: the Cratchit family
 * Every mark scheme gives AQA's weighting and its six levels, and in Section A
 * its AO4 grid; each keeps its own notes on the methods and contexts an answer
 * may draw on. The questions use AQA's wording ("Starting with this extract",
 * "in the novel as a whole", "[30 marks] AO4 [4 marks]") and its numbering,
 * which calls the staves of A Christmas Carol chapters. AQA's paper gives no
 * advice on time per section, so the sections say that 55 and 50 minutes
 * divide its 105 by the marks rather than presenting them as AQA's.
 *
 * The three 100-mark Paper 1s that src/data/mock-exams-aqa-lit.ts served as
 * aqa-lit-p1-01 to 03 (Macbeth 40, A Christmas Carol 40 and a 20-mark
 * comparison essay AQA does not set) were retired the same day and that bank
 * removed. No saved attempt referred to them.
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

// ─── Section B extracts, cut from the held editions ────────────────────────

// Cut with passage(aChristmasCarolText, 'section-1', "Oh! But he was a tight-fisted hand", "nuts").
const NOVEL_EXTRACT_A = `Oh! But he was a tight-fisted hand at the grind-stone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.

External heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill him. No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty. Foul weather didn't know where to have him. The heaviest rain, and snow, and hail, and sleet, could boast of the advantage over him in only one respect. They often "came down" handsomely, and Scrooge never did.

Nobody ever stopped him in the street to say, with gladsome looks, "My dear Scrooge, how are you? When will you come to see me?" No beggars implored him to bestow a trifle, no children asked him what it was o'clock, no man or woman ever once in all his life inquired the way to such and such a place, of Scrooge. Even the blind men's dogs appeared to know him; and when they saw him coming on, would tug their owners into doorways and up courts; and then would wag their tails as though they said, "No eye at all is better than an evil eye, dark master!"

But what did Scrooge care! It was the very thing he liked. To edge his way along the crowded paths of life, warning all human sympathy to keep its distance, was what the knowing ones call "nuts" to Scrooge.`

const NOVEL_EXTRACT_A_SOURCE =
  'Charles Dickens, A Christmas Carol, Stave 1 (Project Gutenberg eBook #46)'

// Cut with passage(jekyllAndHydeText, 'section-1', "It chanced on one of these rambles", "very odd story").
const NOVEL_EXTRACT_B = `It chanced on one of these rambles that their way led them down a by-street in a busy quarter of London. The street was small and what is called quiet, but it drove a thriving trade on the weekdays. The inhabitants were all doing well, it seemed, and all emulously hoping to do better still, and laying out the surplus of their gains in coquetry; so that the shop fronts stood along that thoroughfare with an air of invitation, like rows of smiling saleswomen. Even on Sunday, when it veiled its more florid charms and lay comparatively empty of passage, the street shone out in contrast to its dingy neighbourhood, like a fire in a forest; and with its freshly painted shutters, well-polished brasses, and general cleanliness and gaiety of note, instantly caught and pleased the eye of the passenger.

Two doors from one corner, on the left hand going east the line was broken by the entry of a court; and just at that point a certain sinister block of building thrust forward its gable on the street. It was two storeys high; showed no window, nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper; and bore in every feature, the marks of prolonged and sordid negligence. The door, which was equipped with neither bell nor knocker, was blistered and distained. Tramps slouched into the recess and struck matches on the panels; children kept shop upon the steps; the schoolboy had tried his knife on the mouldings; and for close on a generation, no one had appeared to drive away these random visitors or to repair their ravages.

Mr. Enfield and the lawyer were on the other side of the by-street; but when they came abreast of the entry, the former lifted up his cane and pointed.

“Did you ever remark that door?” he asked; and when his companion had replied in the affirmative, “It is connected in my mind,” added he, “with a very odd story.”`

const NOVEL_EXTRACT_B_SOURCE =
  'Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde, Chapter 1 (Project Gutenberg eBook #43)'

// Cut with passage(aChristmasCarolText, 'section-3', "Forgive me if I am not justified", "Are there no workhouses?").
const NOVEL_EXTRACT_C = `"Forgive me if I am not justified in what I ask," said Scrooge, looking intently at the Spirit's robe, "but I see something strange, and not belonging to yourself, protruding from your skirts. Is it a foot or a claw?"

"It might be a claw, for the flesh there is upon it," was the Spirit's sorrowful reply. "Look here."

From the foldings of its robe, it brought two children; wretched, abject, frightful, hideous, miserable. They knelt down at its feet, and clung upon the outside of its garment.

"Oh, Man! look here. Look, look, down here!" exclaimed the Ghost.

They were a boy and girl. Yellow, meagre, ragged, scowling, wolfish; but prostrate, too, in their humility. Where graceful youth should have filled their features out, and touched them with its freshest tints, a stale and shrivelled hand, like that of age, had pinched, and twisted them, and pulled them into shreds. Where angels might have sat enthroned, devils lurked, and glared out menacing. No change, no degradation, no perversion of humanity, in any grade, through all the mysteries of wonderful creation, has monsters half so horrible and dread.

Scrooge started back, appalled. Having them shown to him in this way, he tried to say they were fine children, but the words choked themselves, rather than be parties to a lie of such enormous magnitude.

"Spirit! are they yours?" Scrooge could say no more.

"They are Man's," said the Spirit, looking down upon them. "And they cling to me, appealing from their fathers. This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom, unless the writing be erased. Deny it!" cried the Spirit, stretching out its hand towards the city. "Slander those who tell it ye! Admit it for your factious purposes, and make it worse. And bide the end!"

"Have they no refuge or resource?" cried Scrooge.

"Are there no prisons?" said the Spirit, turning on him for the last time with his own words. "Are there no workhouses?"`

const NOVEL_EXTRACT_C_SOURCE =
  'Charles Dickens, A Christmas Carol, Stave 3 (Project Gutenberg eBook #46)'

// Cut with passage(jekyllAndHydeText, 'section-1', "The pair walked on again for a while", "With all my heart").
const NOVEL_EXTRACT_D = `The pair walked on again for a while in silence; and then “Enfield,” said Mr. Utterson, “that’s a good rule of yours.”

“Yes, I think it is,” returned Enfield.

“But for all that,” continued the lawyer, “there’s one point I want to ask. I want to ask the name of that man who walked over the child.”

“Well,” said Mr. Enfield, “I can’t see what harm it would do. It was a man of the name of Hyde.”

“Hm,” said Mr. Utterson. “What sort of a man is he to see?”

“He is not easy to describe. There is something wrong with his appearance; something displeasing, something down-right detestable. I never saw a man I so disliked, and yet I scarce know why. He must be deformed somewhere; he gives a strong feeling of deformity, although I couldn’t specify the point. He’s an extraordinary looking man, and yet I really can name nothing out of the way. No, sir; I can make no hand of it; I can’t describe him. And it’s not want of memory; for I declare I can see him this moment.”

Mr. Utterson again walked some way in silence and obviously under a weight of consideration. “You are sure he used a key?” he inquired at last.

“My dear sir...” began Enfield, surprised out of himself.

“Yes, I know,” said Utterson; “I know it must seem strange. The fact is, if I do not ask you the name of the other party, it is because I know it already. You see, Richard, your tale has gone home. If you have been inexact in any point you had better correct it.”

“I think you might have warned me,” returned the other with a touch of sullenness. “But I have been pedantically exact, as you call it. The fellow had a key; and what’s more, he has it still. I saw him use it not a week ago.”

Mr. Utterson sighed deeply but said never a word; and the young man presently resumed. “Here is another lesson to say nothing,” said he. “I am ashamed of my long tongue. Let us make a bargain never to refer to this again.”

“With all my heart,” said the lawyer. “I shake hands on that, Richard.”`

const NOVEL_EXTRACT_D_SOURCE =
  'Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde, Chapter 1 (Project Gutenberg eBook #43)'

// Cut with passage(aChristmasCarolText, 'section-3', "Such a bustle ensued", "a small pudding for a large family").
const NOVEL_EXTRACT_E = `Such a bustle ensued that you might have thought a goose the rarest of all birds; a feathered phenomenon, to which a black swan was a matter of course--and in truth it was something very like it in that house. Mrs. Cratchit made the gravy (ready beforehand in a little saucepan) hissing hot; Master Peter mashed the potatoes with incredible vigour; Miss Belinda sweetened up the apple-sauce; Martha dusted the hot plates; Bob took Tiny Tim beside him in a tiny corner at the table; the two young Cratchits set chairs for everybody, not forgetting themselves, and mounting guard upon their posts, crammed spoons into their mouths, lest they should shriek for goose before their turn came to be helped. At last the dishes were set on, and grace was said. It was succeeded by a breathless pause, as Mrs. Cratchit, looking slowly all along the carving-knife, prepared to plunge it in the breast; but when she did, and when the long expected gush of stuffing issued forth, one murmur of delight arose all round the board, and even Tiny Tim, excited by the two young Cratchits, beat on the table with the handle of his knife, and feebly cried Hurrah!

There never was such a goose. Bob said he didn't believe there ever was such a goose cooked. Its tenderness and flavour, size and cheapness, were the themes of universal admiration. Eked out by apple-sauce and mashed potatoes, it was a sufficient dinner for the whole family; indeed, as Mrs. Cratchit said with great delight (surveying one small atom of a bone upon the dish), they hadn't ate it all at last! Yet every one had had enough, and the youngest Cratchits in particular, were steeped in sage and onion to the eyebrows! But now, the plates being changed by Miss Belinda, Mrs. Cratchit left the room alone--too nervous to bear witnesses--to take the pudding up and bring it in.

Suppose it should not be done enough! Suppose it should break in turning out! Suppose somebody should have got over the wall of the back-yard, and stolen it, while they were merry with the goose--a supposition at which the two young Cratchits became livid! All sorts of horrors were supposed.

Hallo! A great deal of steam! The pudding was out of the copper. A smell like a washing-day! That was the cloth. A smell like an eating-house and a pastrycook's next door to each other, with a laundress's next door to that! That was the pudding! In half a minute Mrs. Cratchit entered--flushed, but smiling proudly--with the pudding, like a speckled cannon-ball, so hard and firm, blazing in half of half-a-quartern of ignited brandy, and bedight with Christmas holly stuck into the top.

Oh, a wonderful pudding! Bob Cratchit said, and calmly too, that he regarded it as the greatest success achieved by Mrs. Cratchit since their marriage. Mrs. Cratchit said that now the weight was off her mind, she would confess she had had her doubts about the quantity of flour. Everybody had something to say about it, but nobody said or thought it was at all a small pudding for a large family. It would have been flat heresy to do so. Any Cratchit would have blushed to hint at such a thing.`

const NOVEL_EXTRACT_E_SOURCE =
  'Charles Dickens, A Christmas Carol, Stave 3 (Project Gutenberg eBook #46)'

// ─── Mark schemes ────────────────────────────────────────────────────────────

/** AQA's six levels for a 30-mark question, from its June 2023 8702/1 mark scheme. */
const LEVELS = [
  'Level 6 (26-30): convincing, critical analysis and exploration',
  'Level 5 (21-25): thoughtful, developed consideration',
  'Level 4 (16-20): clear understanding',
  'Level 3 (11-15): explained, structured comments',
  'Level 2 (6-10): supported, relevant comments',
  'Level 1 (1-5): simple, explicit comments',
]

const WEIGHTING = [
  'AO1: Read, understand and respond - use textual references to support interpretation (12 marks)',
  'AO2: Analyse language, form and structure using subject terminology (12 marks)',
  'AO3: Show understanding of context (6 marks)',
]

// ─── Papers ──────────────────────────────────────────────────────────────────

export const aqaLitP1Papers: MockExamPaper[] = [
  {
    id: 'aqa-lit-p1-a',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'aqa-lit-p1-a-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its Shakespeare plays; this paper sets Macbeth. AO4 is assessed in this section: 4 marks for vocabulary, sentence structures, spelling and punctuation, in addition to the 30 for the answer. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 55 minutes here.",
        totalMarks: 34,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-a-q1',
            questionNumber: 1,
            questionText:
              "Read the following extract from Act 2 Scene 1 of Macbeth and then answer the question that follows.\n\nAt this point in the play Banquo has just left Macbeth, who is waiting for Lady Macbeth's signal that it is time to murder King Duncan.\n\nStarting with this extract, how does Shakespeare present the theme of ambition and its consequences?\n\nWrite about:\n• how Shakespeare presents ambition in this extract\n• how Shakespeare presents ambition in the play as a whole.\n\n[30 marks]\nAO4 [4 marks]",
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
              ...WEIGHTING,
              'AO4: SPaG - spelling, punctuation, grammar, vocabulary (4 marks)',
              "AO2 here: analysis of Shakespeare's methods (language, form, structure) including soliloquy, the dagger as an image of ambition, euphemism, personification, allusion and the closing couplet",
              'AO3 here: understanding of relevant context - Jacobean attitudes to kingship, the Divine Right of Kings, the Great Chain of Being, the Gunpowder Plot',
              ...LEVELS,
              'AO4: high performance 4 marks, intermediate 2-3, threshold 1',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-a-sec-b',
        title: 'Section B: The 19th-Century Novel - A Christmas Carol',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its 19th-century novels; this paper sets A Christmas Carol. AQA's question papers call the staves of A Christmas Carol chapters, so Chapter 1 is the first stave. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 50 minutes here.",
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-a-q2',
            questionNumber: 2,
            questionText:
              'Read the following extract from Chapter 1 of A Christmas Carol and then answer the question that follows.\n\nIn this extract, the narrator introduces Scrooge.\n\nStarting with this extract, explore how Dickens presents Scrooge as a character who changes in A Christmas Carol.\n\nWrite about:\n• how Dickens presents Scrooge in this extract\n• how Dickens presents Scrooge as a character who changes in the novel as a whole.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: NOVEL_EXTRACT_A,
            extractSource: NOVEL_EXTRACT_A_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Dickens presents Scrooge as a cold, mean and lonely man, which makes his change later in the novel more surprising. The narrator calls him "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner". This long list of describing words, most of which are about taking and holding on to things, shows how greedy he is. The word "sinner" makes him sound wicked, but it also suggests that he needs to be saved.\n\nDickens uses similes to show that Scrooge is hard and shut off from people. He is "Hard and sharp as flint" and "solitary as an oyster". An oyster stays shut tight inside its shell, just as Scrooge keeps himself away from everyone. Dickens also uses cold imagery: "The cold within him froze his old features". The cold is "within him", so it is part of his personality and not just the weather. He even "iced his office in the dog-days", which means he kept it cold in the hottest days of summer.\n\nThe extract also shows that everyone avoids Scrooge. "Nobody ever stopped him in the street" to say hello, and "No beggars implored him to bestow a trifle". Even "the blind men\'s dogs" pull their owners out of his way. This is funny, but it shows how lonely he is. However, Scrooge does not mind, because "It was the very thing he liked."\n\nIn the novel as a whole, Scrooge changes because of the ghosts. In Stave I he tells the charity collectors that if the poor would rather die, they "had better do it, and decrease the surplus population". This phrase echoes the economist Thomas Malthus. In Stave II the Ghost of Christmas Past takes him back to his school, where he was "A solitary child, neglected by his friends", and Scrooge sobs. This is one of the first signs that he is changing, because he feels pity again. In Stave III he says to the Ghost of Christmas Present, "tell me if Tiny Tim will live", which shows that he now cares about his clerk\'s family. In Stave IV he sees his own grave and cries, "I am not the man I was."\n\nIn Stave V Scrooge is completely different. He is "as merry as a schoolboy", he sends the Cratchits a turkey "twice the size of Tiny Tim" and he raises Bob\'s salary. The man who kept his office icy now tells Bob to "buy another coal-scuttle". The narrator says that he became "as good a friend, as good a master, and as good a man" as any in the city, and the repeated "good" shows how complete his change is. Dickens published the novel in December 1843, and he shows Scrooge changing so that readers who think like Scrooge will want to change too.',
              'Grade 6-7':
                'Dickens introduces Scrooge in this extract as a man so cold and isolated that change seems impossible, yet the language he chooses leaves room for the transformation the rest of the novel shows. The narrator\'s exclamatory opening, "Oh! But he was a tight-fisted hand at the grind-stone, Scrooge!", sounds like a storyteller talking to an audience, and the idiom "tight-fisted" turns meanness into a physical gesture: a clenched hand that never opens. The list that follows, "squeezing, wrenching, grasping, scraping, clutching, covetous", is asyndetic, so the words pile up without a pause, and every one describes taking, holding or wanting rather than giving. It ends with "old sinner", a religious term that condemns Scrooge but also implies that, like any sinner, he might repent.\n\nThe similes present Scrooge as hard and closed, but each contains a hint of something more. He is "Hard and sharp as flint", a stone "from which no steel had ever struck out generous fire". Flint gives off sparks when it is struck with steel, so the image suggests that warmth could be struck out of Scrooge, even though nobody has yet managed it. In the same way, "solitary as an oyster" shows him shut inside a hard shell, but an oyster can hide a pearl. The sibilance of "secret, and self-contained, and solitary" creates a cold, hissing sound, while the repeated "and" stretches out his isolation.\n\nThe cold imagery is the extract\'s most developed method. "The cold within him froze his old features" places the cold inside Scrooge, so that winter becomes a metaphor for his character, and the verbs "nipped", "shrivelled" and "stiffened" show it damaging his body. He "iced his office in the dog-days" and "didn\'t thaw it one degree at Christmas". The verb "thaw" is significant, because the novel will show Scrooge himself thawing at exactly that season. The pun that rain and snow "came down" handsomely, "and Scrooge never did", turns the cold into a joke about money: he never pays out generously.\n\nThe last two paragraphs show that everyone avoids Scrooge and that he prefers it. Nobody greets him "with gladsome looks", "No beggars implored him", and even the blind men\'s dogs pull their owners away from his "evil eye". The comedy makes him seem almost a pantomime villain, but the narrator insists that this "was the very thing he liked". Because Scrooge chooses to warn "all human sympathy to keep its distance", Dickens must show him choosing to let it back in.\n\nThe spirits make that choice possible by working on his feelings. In Stave II he weeps "to see his poor forgotten self as he used to be", wishes he had given something to the boy who sang a carol at his door, and after Fezziwig\'s party admits that he would like to "say a word or two to my clerk just now". These small moments show that the change is gradual. Belle\'s words, "You are changed", also reveal that Scrooge has changed once before, for the worse, when "the master-passion, Gain" took hold of him, so his hardness was learned and can be unlearned.\n\nIn Stave III the Ghost of Christmas Present throws Scrooge\'s own words back at him. In Stave I Scrooge had said that if the poor would rather die, they had better do it "and decrease the surplus population", a phrase that echoes the economist Thomas Malthus. When the Ghost applies it to Tiny Tim, Scrooge is "overcome with penitence and grief". In Stave IV the sight of his own name on a neglected grave completes the process, and he pleads, "I am not the man I was."\n\nStave V reverses the extract\'s images. The man of "low temperature" is now "glowing with his good intentions", and he orders Bob to "Make up the fires". The children and beggars who avoided him in the extract are now people he approaches, for he "patted children on the head, and questioned beggars", and the "dark master" becomes "as good a master" as the city knew. Published in December 1843, nine years after the Poor Law Amendment Act of 1834 set up the Union workhouses for the poor, the novel uses Scrooge\'s change to suggest that readers who share his attitudes can change too.',
              'Grade 8-9':
                'Dickens builds his first full portrait of Scrooge out of negatives. "No warmth could warm", "No beggars implored him", "Nobody ever stopped him": the extract defines Scrooge by what he refuses and by what others refuse him, so that he seems fixed beyond any possibility of change. Yet its imagery is more double-edged than it first appears, and the rest of the novel answers the extract almost point by point. The transformation, I would argue, is written into Scrooge\'s introduction from the start.\n\nThe opening, "a tight-fisted hand at the grind-stone", fuses Scrooge with his work: he is not so much a man at a grindstone as a "hand", a worker reduced to part of the machinery of money-making, and "tight-fisted" closes that hand into a fist. The asyndetic list of participles, "squeezing, wrenching, grasping, scraping, clutching", gives his greed a relentless, mechanical rhythm, and the violence of "wrenching" suggests that what he holds has been taken from others. Yet the list resolves into "old sinner", a noun from the language of religion rather than commerce, and a sinner, unlike a stone, can repent. From its first sentence the extract frames Scrooge\'s story as one of possible redemption.\n\nThe similes work in the same way. "Hard and sharp as flint" seems to confirm that Scrooge is stone, but the relative clause, "from which no steel had ever struck out generous fire", reminds the reader that flint is the very stone that gives fire when it is struck. The fire is latent; it has simply never been struck out, and the spirits will be the steel. The simile "solitary as an oyster" is similarly ambiguous, since a closed shell may guard something precious. Even the cold imagery contains a future: Scrooge "didn\'t thaw it one degree at Christmas", where "it" is his office, yet the novel is the story of the Christmas on which Scrooge himself thaws.\n\nThe narrator\'s comic voice shapes how we judge him. The weather is personified as a rival that "didn\'t know where to have him", and the pun that rain and snow "came down" handsomely, "and Scrooge never did", makes his meanness a joke about money. When the blind men\'s dogs seem to say "No eye at all is better than an evil eye, dark master!", the description tips into comic fantasy. Because Scrooge is a caricature, larger than life and absurd, the reader is invited to laugh at him rather than despair of him, and a comic figure can be reformed in a way that a tragic villain cannot.\n\nCrucially, the extract presents his isolation as a choice. The metaphor of edging along "the crowded paths of life" while "warning all human sympathy to keep its distance" pictures him threading through humanity without touching it, and this "was the very thing he liked". If Scrooge\'s coldness is chosen, the novel\'s question is whether he can choose differently, and Stave II reveals that he once did. Belle tells his younger self "You are changed", and says that "the master-passion, Gain" now engrosses him. The frozen miser of the extract is the product of an earlier change for the worse, which makes a change back credible.\n\nDickens makes that second change gradual rather than sudden. In Stave II Scrooge speaks "with an unusual catching in his voice", regrets not giving the carol singer anything, and wishes he could say "a word or two to my clerk". In Stave III he tells the Ghost "I learnt a lesson which is working now", a phrase that presents change as a continuing process. He asks after Tiny Tim "with an interest he had never felt before", and when the Ghost quotes back his own earlier phrase, "decrease the surplus population", which echoes the economist Thomas Malthus, he is "overcome with penitence and grief". In Stave IV the body lying "unwatched, unwept, uncared for" shows him the logical end of the solitary life the extract describes: the man who warned sympathy away receives none. Faced with his own name on the gravestone, he declares, "I am not the man I was."\n\nStave V then rewrites the extract. The man of "low temperature" is "glowing with his good intentions", and the weather that "didn\'t know where to have him" becomes "clear, bright, jovial". The greeting nobody offered, "My dear Scrooge, how are you? When will you come to see me?", Scrooge now offers himself: he greets the charity collector as "My dear sir" and asks, "Will you come and see me?" He "patted children on the head, and questioned beggars", reversing the children and beggars who avoided him, and the "dark master" becomes "as good a master" as the city knew. Even the pun is answered, for the man who never "came down" handsomely now gives a sum that includes "A great many back-payments".\n\nThis structure serves Dickens\'s purpose. Published in December 1843, nine years after the Poor Law Amendment Act of 1834 set up the Union workhouses for the poor, the novel gives Scrooge the language of his age: in Stave I he asks after the "Union workhouses" and speaks of the "surplus population". Dickens, who had worked in a blacking factory as a child while his father was in a debtors\' prison, knew something of the lives that such phrases ignore. By making Scrooge\'s introduction so extreme and his reversal so complete, he argues that nobody who shares Scrooge\'s views is beyond change. If the "old sinner" can become "as good a man, as the good old city knew", so can the reader.',
            },
            markScheme: [
              ...WEIGHTING,
              'AO1 here: Scrooge in the extract as a man defined by refusal and isolation, "solitary as an oyster" and keeping "all human sympathy" at a distance; his change across the novel, gradual through Staves II to IV and complete in Stave V, where he becomes "as good a friend, as good a master, and as good a man" as the city knew.',
              'AO2 here: Methods in the extract: the narrator\'s exclamatory voice, the asyndetic list "squeezing, wrenching, grasping, scraping, clutching, covetous", the similes "Hard and sharp as flint" and "solitary as an oyster", the cold imagery of "The cold within him froze his old features", the pun on "came down" and the comic blind men\'s dogs.',
              'AO2 here: Structure: signs of change along the way, such as "I learnt a lesson which is working now" in Stave III and "I am not the man I was" in Stave IV; the extract\'s images reversed in Stave V, where Scrooge is "glowing with his good intentions", "patted children on the head, and questioned beggars" and asks "Will you come and see me?"',
              'AO3 here: Context: published in December 1843; Scrooge\'s "surplus population" in Stave I echoes the economist Thomas Malthus, and the "Union workhouses" he asks about recall the workhouses set up by the Poor Law Amendment Act of 1834; Dickens\'s childhood in a blacking factory while his father was in a debtors\' prison; Scrooge\'s change as a model for readers who share his views.',
              ...LEVELS,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lit-p1-b',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'aqa-lit-p1-b-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its Shakespeare plays; this paper sets Macbeth. AO4 is assessed in this section: 4 marks for vocabulary, sentence structures, spelling and punctuation, in addition to the 30 for the answer. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 55 minutes here.",
        totalMarks: 34,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-b-q1',
            questionNumber: 1,
            questionText:
              'Read the following extract from Act 1 Scene 7 of Macbeth and then answer the question that follows.\n\nAt this point in the play Macbeth has told Lady Macbeth that they will not murder Duncan, and she has accused him of cowardice.\n\nStarting with this extract, how does Shakespeare present ideas about gender and power?\n\nWrite about:\n• how Shakespeare presents gender and power in this extract\n• how Shakespeare presents gender and power in the play as a whole.\n\n[30 marks]\nAO4 [4 marks]',
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
              ...WEIGHTING,
              'AO4: SPaG - spelling, punctuation, grammar, vocabulary (4 marks)',
              'AO2 here: analysis of Shakespeare\'s methods - the argument over the word "man", rhetorical questions and imperatives, the infanticide image, the shape of the dialogue, the closing couplet, structural reversal across the play',
              'AO3 here: understanding of context - Jacobean gender roles, patriarchal ideology, the household as a little kingdom, James I and witchcraft, the Great Chain of Being',
              ...LEVELS,
              'AO4: high performance 4 marks, intermediate 2-3, threshold 1',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-b-sec-b',
        title: 'Section B: The 19th-Century Novel - The Strange Case of Dr Jekyll and Mr Hyde',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its 19th-century novels; this paper sets The Strange Case of Dr Jekyll and Mr Hyde. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 50 minutes here.",
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-b-q2',
            questionNumber: 2,
            questionText:
              'Read the following extract from Chapter 1 (Story of the Door) of The Strange Case of Dr Jekyll and Mr Hyde and then answer the question that follows.\n\nIn this extract, Mr Utterson and Mr Enfield walk down a London by-street and come to a door.\n\nStarting with this extract, explore how Stevenson presents ideas about duality in The Strange Case of Dr Jekyll and Mr Hyde.\n\nWrite about:\n• how Stevenson presents duality in this extract\n• how Stevenson presents duality in the novel as a whole.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: NOVEL_EXTRACT_B,
            extractSource: NOVEL_EXTRACT_B_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Stevenson presents duality through the setting, by placing a smart, busy street next to a neglected building. The by-street "drove a thriving trade" and its shop fronts have "an air of invitation, like rows of smiling saleswomen." This simile makes the street seem friendly and welcoming, as if it is smiling at the people walking past. The "freshly painted shutters" and "well-polished brasses" show that the people who live there take care of how things look. Stevenson also compares the street to "a fire in a forest" because it "shone out in contrast to its dingy neighbourhood", so even this bright street stands out against something darker.\n\nThen the mood changes completely. The building is "sinister" and "thrust forward its gable on the street", which makes it sound aggressive, as if it is pushing into the street. It "showed no window" and has "a blind forehead of discoloured wall", so it is like a face with no eyes. This suggests secrecy, because nobody can see inside. The door has "neither bell nor knocker", which suggests that visitors are not welcome, and it is "blistered and distained". Stevenson puts the clean street and the neglected building side by side to show that good and bad can exist together.\n\nAt the end of the extract Enfield points at the door with his cane and says it is connected "with a very odd story." This makes the reader curious and shows that the door will be important.\n\nIn the novel as a whole, the door turns out to be the back way into Jekyll\'s laboratory. In Chapter 2 we learn that round the corner there is "a square of ancient, handsome houses", and Jekyll\'s front door has "a great air of wealth and comfort". So the same house has a respectable front and a neglected back door, just as Jekyll has a respectable side and a hidden side, Hyde. In Chapter 3 Jekyll is described as "a large, well-made, smooth-faced man", while in Chapter 2 Hyde is "pale and dwarfish", which shows how different the two sides look.\n\nIn his statement in Chapter 10, Jekyll explains that "man is not truly one, but truly two." He admits, "I concealed my pleasures", because he wanted people to respect him. Stevenson is showing that everyone has a good side and a bad side. When the novel was published in 1886, Victorians cared a great deal about respectability and self-control, so Stevenson suggests that hiding the bad side of yourself, like the neglected door hidden round the corner from the smart houses, could be dangerous.',
              'Grade 6-7':
                'Stevenson introduces duality through the setting before the reader has met either Jekyll or Hyde. The extract places a bright, prosperous by-street next to a neglected building, so the novel\'s central idea, that respectability and something darker can exist side by side, is shown in bricks and paint.\n\nThe street is presented through images of display. Its shops stand "with an air of invitation, like rows of smiling saleswomen", a simile that gives the street a polite, welcoming face. The details "freshly painted shutters, well-polished brasses" emphasise carefully kept surfaces, and the street "instantly caught and pleased the eye of the passenger". Yet Stevenson hints that this is partly a performance. The street is only "what is called quiet", and the inhabitants were doing well, "it seemed". On Sunday it "veiled its more florid charms", and the verb "veiled" suggests that something is covered rather than removed. Even the simile "like a fire in a forest" is double-edged, because fire is bright and warming but can also destroy what surrounds it.\n\nThe second paragraph breaks this picture, which Stevenson signals with the phrase "the line was broken". The building is "sinister" and "thrust forward its gable on the street", an aggressive verb that contrasts with the street\'s polite invitation. Stevenson personifies it as a face without eyes: it "showed no window" and has "a blind forehead of discoloured wall". Where the shops are designed to be looked at, this building can neither see nor be seen into, which makes it a symbol of secrecy. Its door, "equipped with neither bell nor knocker", is not meant for visitors, and the list of "Tramps", "children" and "the schoolboy" who use it as they please shows that "for close on a generation" nobody has cared for it. The phrase "prolonged and sordid negligence" suggests something ignored for so long that it has decayed.\n\nThe extract ends with Enfield pointing his cane at the door and connecting it "with a very odd story". This understatement is typical of the gentlemen in the novel, who avoid saying too much, and it turns the door into the entrance to the whole mystery.\n\nAcross the novel, Stevenson reveals that this door is the back way into Jekyll\'s laboratory. In Chapter 2 we learn that round the corner is "a square of ancient, handsome houses", and that Jekyll\'s front door "wore a great air of wealth and comfort". The respectable front and the shabby back belong to the same property, which mirrors Jekyll himself. In Chapter 3 he is "a large, well-made, smooth-faced man", while in Chapter 2 Hyde, who uses the back door, is "pale and dwarfish" and gives "an impression of deformity without any nameable malformation". Like the building, Hyde is wrong in a way that nobody can quite name.\n\nStevenson also shows duality through handwriting. In Chapter 5 Utterson\'s clerk, Guest, notices that Hyde\'s letter and Jekyll\'s note are "in many points identical: only differently sloped." In Chapter 10 Jekyll explains that "by sloping my own hand backward" he gave Hyde a signature. The two selves are not strangers but the same hand tilted another way.\n\nJekyll\'s statement in Chapter 10 makes the theme explicit: "man is not truly one, but truly two." He insists "I was in no sense a hypocrite", because "both sides of me were in dead earnest", so Hyde is not a mask but a real part of Jekyll. When he first sees Hyde in the mirror, he admits, "This, too, was myself."\n\nThe novel was published in 1886, when Victorian respectability prized reputation and self-control, and Stevenson suggests that the harder the darker side is pushed out of sight, the more dangerous it becomes. As Jekyll admits in his statement, "My devil had been long caged, he came out roaring." Hyde\'s "ape-like fury" when he kills Sir Danvers Carew in Chapter 4 also draws on fears that followed Darwin\'s On the Origin of Species (1859), that humans might degenerate. Like the polished street and the neglected door, the civilised gentleman and the primitive creature share one address.',
              'Grade 8-9':
                'In this extract Stevenson presents duality through a place, and the passage works almost as a map of the divided self that the rest of the novel explores. Before Jekyll or Hyde has appeared in the story, the idea that respectability and corruption live side by side has already been built into the setting.\n\nWhat is striking is that even the respectable street is not simply good. It is "small and what is called quiet, but it drove a thriving trade", and the phrase "what is called" quietly separates the name from the reality. The inhabitants spend their surplus on "coquetry", so that the shop fronts stand with an "air of invitation", like "rows of smiling saleswomen": prosperity becomes a performance staged for "the eye of the passenger". On Sunday the street "veiled its more florid charms", a verb of concealment which implies that the charms are hidden for the day, not given up. Even the simile "like a fire in a forest" carries two meanings: the street glows against "its dingy neighbourhood", but a fire in a forest also threatens everything around it.\n\nThe second paragraph opens with a structural rupture, "the line was broken", and at the point where the row breaks stands the street\'s dark reflection. Its adjective, "sinister", comes from the Latin word for left, and the building stands "on the left hand going east", so the word is almost literal as well as moral. Where the shops display themselves, this block "thrust forward its gable", an intrusive verb that replaces invitation with aggression. Stevenson personifies it as a face deprived of sight, with "no window" and "a blind forehead of discoloured wall", and the phrase "bore in every feature" anticipates the novel\'s obsession with faces, above all Hyde\'s, which witnesses struggle to describe. A door with "neither bell nor knocker" offers no social greeting; it belongs to a world of private keys rather than public calls. Most suggestive is the detail that "children kept shop upon the steps": their game copies, in miniature, the trade of the respectable street, so the two halves of the by-street mirror each other even here.\n\nStevenson positions his observers just as carefully. Enfield and Utterson are "on the other side of the by-street", looking across at the door, and Enfield\'s understatement, "a very odd story", is the restrained language of gentlemen who view the darker side of life from a safe distance. Yet Utterson himself is divided in a small way. In the opening paragraph of the novel, he "drank gin when he was alone, to mortify a taste for vintages": he denies himself a pleasure in private, a harmless version of the self-restraint that Jekyll finds impossible to keep up.\n\nAcross the novel the door\'s meaning deepens, because it is the back way into Jekyll\'s own laboratory. Chapter 2 reveals that round the corner stands "a square of ancient, handsome houses", where Jekyll\'s front door "wore a great air of wealth and comfort". The respectable doctor and the neglected door are one property, and when Jekyll first makes his way through his house as Hyde, in Chapter 10, he is "a stranger in my own house". The setting has been a portrait of its owner all along.\n\nJekyll\'s statement in Chapter 10 puts the theme directly, "man is not truly one, but truly two", and calls the two selves "polar twins". Yet Stevenson complicates any neat balance. The potion does not divide Jekyll into a good man and a bad man: Hyde is "pure evil", while what remains is "still the old Henry Jekyll, that incongruous compound". Duality in the novel is therefore lopsided, because in Jekyll\'s experiment evil is separated and set free while goodness stays mixed. This is why his claim that "both sides of me were in dead earnest" is so unsettling. Hyde is not a disguise worn over the real man; on first seeing him in the mirror, Jekyll admits, "This, too, was myself."\n\nStevenson also blurs the boundary between the selves through physical detail. In Chapter 5 Guest finds the two handwritings "in many points identical: only differently sloped", and in Chapter 8 Utterson discovers a "pious work" annotated "in his own hand with startling blasphemies". Reverence and blasphemy share one page and one hand, just as the polished shops and the blistered door share one by-street.\n\nPublished in 1886, the novel examines a society in which Victorian respectability prized reputation and self-control, and in Chapter 10 Jekyll admits that he hid his faults "with an almost morbid sense of shame". Stevenson suggests that such pressure deepens the split rather than healing it, and Jekyll\'s own image is of a caged animal: "My devil had been long caged, he came out roaring." Hyde\'s "ape-like fury" in Chapter 4 and Utterson\'s sense of "Something troglodytic" in Chapter 2 draw on the fear of some Victorians, after Darwin\'s On the Origin of Species (1859), that humans might degenerate, so the primitive is imagined not in some distant place but behind the extract\'s door, in "a busy quarter of London".\n\nStructurally, the novel moves from outside the door to inside it, from two gentlemen looking at a blank wall in Chapter 1 to Jekyll\'s written confession. In Chapter 10 Jekyll recalls how, after the murder, he "ground the key under my heel", trying to shut the door between his two lives for ever. It fails because the door was never really between two men. The neglected building in the extract is a warning that the part of a person no one tends does not disappear; it waits.',
            },
            markScheme: [
              ...WEIGHTING,
              'AO1 here: A clear, developed response to the extract\'s divided setting, the prosperous by-street that "drove a thriving trade" set against the "sinister block of building", linked to the divided Jekyll in the novel as a whole',
              'AO2 here: Methods in the extract: the simile "like rows of smiling saleswomen", the personification of "a blind forehead of discoloured wall", the structural break "the line was broken" and the contrast between polished surfaces and "prolonged and sordid negligence"',
              'AO1 here: Whole-novel references: the door as the back way into Jekyll\'s laboratory; Jekyll as "a large, well-made, smooth-faced man" (Chapter 3) against Hyde, "pale and dwarfish" (Chapter 2); the handwritings "only differently sloped" (Chapter 5); Jekyll\'s statement that "man is not truly one, but truly two" (Chapter 10)',
              'AO3 here: Context used relevantly: published in 1886, when Victorian respectability prized reputation and self-control; the fear among some Victorians, after Darwin\'s On the Origin of Species (1859), that humans might degenerate, as in Hyde\'s "ape-like fury" (Chapter 4); the London setting, where a polished street and a neglected building stand side by side',
              ...LEVELS,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lit-p1-c',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'aqa-lit-p1-c-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its Shakespeare plays; this paper sets Macbeth. AO4 is assessed in this section: 4 marks for vocabulary, sentence structures, spelling and punctuation, in addition to the 30 for the answer. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 55 minutes here.",
        totalMarks: 34,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-c-q1',
            questionNumber: 1,
            questionText:
              "Read the following extract from Act 5 Scene 5 of Macbeth and then answer the question that follows.\n\nAt this point in the play Malcolm's army is marching on Macbeth's castle at Dunsinane.\n\nStarting with this extract, how does Shakespeare present Macbeth as a character who has lost hope?\n\nWrite about:\n• how Shakespeare presents Macbeth's despair in this extract\n• how Shakespeare presents Macbeth's changing state of mind in the play as a whole.\n\n[30 marks]\nAO4 [4 marks]",
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
              ...WEIGHTING,
              'AO4: SPaG - spelling, punctuation, grammar, vocabulary (4 marks)',
              "AO2 here: analysis of Shakespeare's methods - soliloquy, the move from public bravado to private despair, imperatives and the conditional, feasting and sensory imagery, repetition, the theatre metaphor, the trajectory of Macbeth's psychological decline",
              'AO3 here: understanding of context - the Great Chain of Being, Jacobean divine punishment, Aristotelian tragedy, Christian despair, the psychology of tyranny',
              ...LEVELS,
              'AO4: high performance 4 marks, intermediate 2-3, threshold 1',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-c-sec-b',
        title: 'Section B: The 19th-Century Novel - A Christmas Carol',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its 19th-century novels; this paper sets A Christmas Carol. AQA's question papers call the staves of A Christmas Carol chapters, so Chapter 3 is the third stave. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 50 minutes here.",
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-c-q2',
            questionNumber: 2,
            questionText:
              'Read the following extract from Chapter 3 of A Christmas Carol and then answer the question that follows.\n\nIn this extract, the Ghost of Christmas Present shows Scrooge two children hidden in its robe.\n\nStarting with this extract, explore how Dickens presents ideas about poverty and wealth in A Christmas Carol.\n\nWrite about:\n• how Dickens presents poverty and wealth in this extract\n• how Dickens presents poverty and wealth in the novel as a whole.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: NOVEL_EXTRACT_C,
            extractSource: NOVEL_EXTRACT_C_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Dickens presents poverty as something shocking that is hidden from the rich. Scrooge notices something under the Ghost\'s robe and asks if it is "a foot or a claw". The Ghost replies, "It might be a claw, for the flesh there is upon it". This shows that the children are so thin that they hardly look human.\n\nDickens describes the children with a list of adjectives: "wretched, abject, frightful, hideous, miserable". The list shows how terrible their lives are. They are also "Yellow, meagre, ragged, scowling, wolfish". The word "wolfish" compares them to wild animals, which suggests that poverty can make people dangerous. Dickens personifies poverty as "a stale and shrivelled hand, like that of age" that has "pinched, and twisted them". This shows that poverty has taken away their childhood.\n\nThe Ghost says the children are "Man\'s", which means that all of society is responsible for them. The boy is "Ignorance" and the girl is "Want". The Ghost tells Scrooge to "beware this boy", which suggests that ignorance about the poor is the most dangerous problem. At the end the Ghost repeats Scrooge\'s own words from Stave I, "Are there no prisons?" Scrooge used them when he refused to give money to the poor, but now he hears how cruel they sound.\n\nIn the novel as a whole Dickens contrasts Scrooge\'s wealth with the poverty around him. Scrooge is rich, but his clerk\'s fire is so small "that it looked like one coal". He tells the charity collectors that if the poor would rather die, they "had better do it, and decrease the surplus population", a phrase that echoes the economist Thomas Malthus. Money does not make Scrooge happy either. In Stave II Belle tells him "Another idol has displaced me", and when he asks what idol, she answers, "A golden one."\n\nThe Cratchit family are poor but happy. In Stave III their Christmas pudding is small, but nobody in the family would call it "a small pudding for a large family". However, Tiny Tim is ill, and the Ghost warns that "the child will die" if nothing changes. In Stave IV Scrooge sees a rich man who has died alone, with his bed-curtains stolen and sold, and realises that "The case of this unhappy man might be my own." In Stave V he uses his wealth to help others, sending the Cratchits a turkey and raising Bob\'s salary.\n\nDickens published the novel in December 1843. The Poor Law Amendment Act of 1834 had set up the Union workhouses for the poor, and Dickens had worked in a blacking factory as a child while his father was in a debtors\' prison. He wanted wealthy readers to help the poor instead of ignoring them as Scrooge does at the start.',
              'Grade 6-7':
                'In this extract Dickens turns poverty from an abstract problem into two children whom Scrooge, and the reader, are forced to look at. It comes at the end of Stave III, after the Ghost of Christmas Present has shown Scrooge a world of plenty. The Ghost first appeared sitting on "a kind of throne" made of food, yet from "the foldings of its robe" it now brings out "two children; wretched, abject, frightful, hideous, miserable". By hiding the children beneath the robe of plenty, Dickens suggests that poverty lies hidden underneath the wealth and celebration of society.\n\nThe language is designed to shock. The asyndetic list of adjectives hits the reader word by word, and the second list, "Yellow, meagre, ragged, scowling, wolfish", moves from sickness to menace: "wolfish" suggests that children left to starve will become dangerous. Dickens personifies want as "a stale and shrivelled hand, like that of age", which has "pinched, and twisted them, and pulled them into shreds". The polysyndeton makes the damage sound slow and repeated, and the simile shows children made old before their time. The antithesis "Where angels might have sat enthroned, devils lurked" uses religious imagery to show that poverty corrupts innocence, so that society, not the children, is to blame for the "monsters" it creates.\n\nThe Ghost\'s speech turns the scene into an argument about responsibility. "They are Man\'s" insists that the children belong to everyone, and the short sentences "This boy is Ignorance. This girl is Want." turn them into allegorical figures. The warning to "beware this boy" suggests that ignorance is the greater danger, perhaps because the ignorance of the wealthy about the poor is what allows want to continue. Most powerfully, when Scrooge asks "Have they no refuge or resource?", the Ghost answers with his own words from Stave I: "Are there no prisons?" Scrooge had asked this when the charity collectors came, and had also asked whether the "Union workhouses" were still "in operation". The repetition exposes the cruelty of his old answer, and his new question shows that he now cares.\n\nAcross the novel Dickens contrasts Scrooge\'s wealth with the poverty he ignores. In Stave I he keeps the coal-box in his own room, so that his clerk\'s fire looks "like one coal", and he tells the collectors that if the poor would rather die, they had better "decrease the surplus population", a phrase that echoes the economist Thomas Malthus. His nephew points out the paradox of his wealth: "What right have you to be dismal? ... You\'re rich enough." Marley\'s chain, made of "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses", shows that wealth gathered selfishly becomes a burden after death.\n\nDickens also shows that happiness does not depend on money. In Stave II the Ghost points out that Fezziwig has spent "but a few pounds" on his party, and Scrooge, speaking like his younger self, replies that the happiness Fezziwig gives is "quite as great as if it cost a fortune". In Stave III Bob earns only fifteen shillings a week, yet the Cratchits are "happy, grateful, pleased with one another". Their poverty still has a cost, however: the Ghost sees "a crutch without an owner" if Tiny Tim\'s future is not changed.\n\nStave IV shows the emptiness of hoarded wealth. The rich man\'s body lies "unwatched, unwept, uncared for", his belongings are sold to old Joe, and the charwoman laughs that he frightened everyone away "to profit us when he was dead". In Stave V Scrooge finally uses his money well: he gives the charity collector a sum that includes "A great many back-payments", and he offers Bob a higher salary and help for his "struggling family".\n\nDickens published the novel in December 1843, nine years after the Poor Law Amendment Act of 1834 set up the Union workhouses for the poor. He had worked in a blacking factory as a child while his father was in a debtors\' prison, so the debt and imprisonment that Scrooge treats as other people\'s business had been part of his own childhood. The Ghost\'s command, "Look, look, down here!", is aimed at readers as much as at Scrooge.',
              'Grade 8-9':
                'This extract is the moment at which A Christmas Carol stops being only the story of one miser and becomes an indictment of a society. Much of Stave III is a pageant of plenty: the Ghost of Christmas Present is "a jolly Giant, glorious to see", enthroned on heaped-up food and carrying a torch "in shape not unlike Plenty\'s horn". By drawing two starving children "From the foldings of its robe", Dickens reveals what that plenty conceals. Poverty is not elsewhere; it is hidden inside abundance itself, and the reader, like Scrooge, has been admiring the robe rather than looking beneath it.\n\nScrooge\'s question establishes the extract\'s central anxiety, the line between human and animal. He asks whether he sees "a foot or a claw", and the Ghost\'s "sorrowful" reply, "It might be a claw, for the flesh there is upon it", turns hunger into a question of species: starvation strips away the flesh that makes a limb human. The two asyndetic lists, "wretched, abject, frightful, hideous, miserable" and "Yellow, meagre, ragged, scowling, wolfish", move from pity to fear, and "wolfish" warns that neglected children will become predators. The form also recalls Stave I, where Scrooge was introduced in a similar list, "squeezing, wrenching, grasping, scraping, clutching, covetous". Dickens uses the same device for the man who hoards and the children who go without, as if one produced the other. The personification sharpens the link, for "a stale and shrivelled hand, like that of age" has "pinched, and twisted them", just as in Stave I the cold within Scrooge "nipped his pointed nose, shrivelled his cheek". The miser\'s coldness reappears on the bodies of the poor.\n\nThe antithesis "Where angels might have sat enthroned, devils lurked" echoes the Ghost\'s own throne: abundance sits enthroned, while in these children devils have taken the angels\' place. Dickens insists that their menace is made, not born, since the narrator declares that nothing in creation "has monsters half so horrible and dread". Even Scrooge\'s language fails him. He tries to call them "fine children", but the personified words "choked themselves" rather than tell the lie, and the comfortable vocabulary of Stave I is no longer available to him.\n\nThe Ghost\'s speech then moves from allegory to accusation. "They are Man\'s" makes the children the property, and the responsibility, of humanity, while "appealing from their fathers" implies that those responsible have disowned them. The naming has a history in the novel. In Stave I the charity collector said that Christmas is a time "when Want is keenly felt, and Abundance rejoices"; Scrooge ignored the abstraction, and here Want has a body. The emphasis on Ignorance as the greater danger, "most of all beware this boy", makes the extract an argument about knowledge. The wealthy tolerate want by not knowing it, as Scrooge did when, told that many of the poor would rather die, he replied "I don\'t know that" and was told "But you might know it". The warning that "Doom" is written on the boy\'s brow "unless the writing be erased" is conditional, like the novel\'s visions of the future, and in Stave IV Scrooge will beg to "sponge away the writing on this stone".\n\nThe final exchange is circular and judicial. Scrooge, who in Stave I asked "Are there no prisons?" to dismiss the poor, now asks "Have they no refuge or resource?" as a genuine question, and the Ghost answers with his own words, "turning on him for the last time". He is sentenced by his own testimony, and the gesture of "stretching out its hand towards the city" widens the charge from one man to a whole society.\n\nAcross the novel Dickens condemns not wealth but the refusal to use it. Fezziwig spends, in the Ghost\'s words, "but a few pounds of your mortal money", and Scrooge himself insists that the happiness he gives is "quite as great as if it cost a fortune". In Stave III Fred observes that Scrooge\'s "wealth is of no use to him". In Stave IV hoarded wealth leads to a "rich end": the dead man\'s bed-curtains are sold to old Joe, and a couple in debt are relieved to be free of "so merciless a creditor". Dickens does not sentimentalise poverty here, for the thieves who rob the dead are degraded, and they suggest what Want becomes when nobody heeds it. The Cratchits show the opposite possibility, a family "happy, grateful, pleased with one another" although their clothes are "scanty". When the Ghost turns Scrooge\'s phrase "decrease the surplus population", which echoes the economist Thomas Malthus, against Tiny Tim, an abstraction becomes a particular child, just as Want becomes a girl in the extract.\n\nDickens published the novel in December 1843, nine years after the Poor Law Amendment Act of 1834 set up the Union workhouses that Scrooge praises. He had worked in a blacking factory as a child while his father was in a debtors\' prison, so for him "prisons" were not an abstract answer to poverty but part of his own family\'s history. Some readers may find Stave V\'s solution too private, since one rich man\'s turkey and donation cannot cure what Ignorance and Want represent. But the extract has already pointed beyond Scrooge, towards the city, and his donation, which includes "A great many back-payments", is offered as a model for the wider change that Dickens asks of his readers.',
            },
            markScheme: [
              ...WEIGHTING,
              'AO1 here: Poverty in the extract as two starving children, Ignorance and Want, drawn from the robe of the Ghost of plenty and declared to be "Man\'s"; across the novel, wealth that is hoarded (Scrooge in Stave I, the dead man in Stave IV) set against wealth that is shared (Fezziwig in Stave II, Scrooge in Stave V), and the Cratchits\' poverty in Stave III.',
              'AO2 here: Methods in the extract: the asyndetic lists "wretched, abject, frightful, hideous, miserable" and "Yellow, meagre, ragged, scowling, wolfish", the personification of "a stale and shrivelled hand, like that of age", the antithesis "Where angels might have sat enthroned, devils lurked", allegorical naming and the Ghost\'s imperatives.',
              'AO2 here: Structure: the Ghost turns Scrooge\'s words from Stave I, "Are there no prisons?", back on him, as it did earlier in Stave III with "decrease the surplus population"; the conditional "unless the writing be erased" looks forward to Scrooge\'s plea in Stave IV to "sponge away the writing on this stone".',
              'AO3 here: Context: published in December 1843; the Union workhouses set up by the Poor Law Amendment Act of 1834, which Scrooge supports in Stave I; "surplus population" as an echo of the economist Thomas Malthus; Dickens\'s childhood in a blacking factory while his father was in a debtors\' prison.',
              ...LEVELS,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lit-p1-d',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'aqa-lit-p1-d-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its Shakespeare plays; this paper sets Macbeth. AO4 is assessed in this section: 4 marks for vocabulary, sentence structures, spelling and punctuation, in addition to the 30 for the answer. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 55 minutes here.",
        totalMarks: 34,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-d-q1',
            questionNumber: 1,
            questionText:
              'Read the following extract from Act 1 Scene 3 of Macbeth and then answer the question that follows.\n\nAt this point in the play Macbeth and Banquo, on their way back from battle, meet the three witches on a heath.\n\nStarting with this extract, how does Shakespeare present the role of the supernatural in the play?\n\nWrite about:\n• how Shakespeare presents the supernatural in this extract\n• how Shakespeare presents the supernatural in the play as a whole.\n\n[30 marks]\nAO4 [4 marks]',
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
              ...WEIGHTING,
              'AO4: SPaG - spelling, punctuation, grammar, vocabulary (4 marks)',
              "AO2 here: analysis of Shakespeare's methods - Banquo's questions, the witches' threefold greetings and paradoxes, equivocation, dramatic irony, the contrast between Macbeth's and Banquo's responses, the echo of \"Fair is foul\" in Macbeth's first line",
              'AO3 here: understanding of context - James I and Daemonologie, the North Berwick witch trials, Jacobean witchcraft beliefs, the Stuart claim of descent from Banquo, the Great Chain of Being',
              ...LEVELS,
              'AO4: high performance 4 marks, intermediate 2-3, threshold 1',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-d-sec-b',
        title: 'Section B: The 19th-Century Novel - The Strange Case of Dr Jekyll and Mr Hyde',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its 19th-century novels; this paper sets The Strange Case of Dr Jekyll and Mr Hyde. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 50 minutes here.",
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-d-q2',
            questionNumber: 2,
            questionText:
              'Read the following extract from Chapter 1 (Story of the Door) of The Strange Case of Dr Jekyll and Mr Hyde and then answer the question that follows.\n\nIn this extract, Mr Utterson and Mr Enfield talk about the man who trampled the child.\n\nStarting with this extract, explore how Stevenson presents the importance of reputation in The Strange Case of Dr Jekyll and Mr Hyde.\n\nWrite about:\n• how Stevenson presents reputation in this extract\n• how Stevenson presents the importance of reputation in the novel as a whole.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: NOVEL_EXTRACT_D,
            extractSource: NOVEL_EXTRACT_D_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Stevenson shows that reputation matters so much to the gentlemen that they would rather stay silent than risk harming someone\'s good name. The extract begins with Utterson praising Enfield: "that’s a good rule of yours." Earlier in Chapter 1, Enfield explained that he does not like asking questions, because a question is "like starting a stone" that rolls on until "the family have to change their name." This shows that the gentlemen believe gossip can ruin a family\'s reputation, so it is safer not to ask.\n\nUtterson does ask for the name of "that man who walked over the child." Enfield gives it only once he "can’t see what harm it would do", which shows that he thinks carefully before naming anyone. He names Hyde easily, but earlier in the chapter he would not say who signed the cheque, calling it "a name that I can’t mention". This suggests that he protects the respectable man\'s name but not Hyde\'s, because Hyde has no good name to lose. The name Hyde also sounds like hide, which hints that he is linked to something hidden.\n\nEnfield struggles to describe Hyde. He says there is "something wrong with his appearance" and uses the word "something" three times, which shows that he cannot explain what is wrong. He admits, "I never saw a man I so disliked", but he does not know why. Hyde\'s bad reputation comes from the way people feel when they see him.\n\nUtterson says he already knows "the name of the other party", but he still does not say it. This shows that he is protecting his friend Jekyll, even in a private conversation. At the end Enfield says, "I am ashamed of my long tongue", and suggests "a bargain never to refer to this again." Utterson answers, "With all my heart", and says, "I shake hands on that, Richard." The handshake is like a gentlemen\'s agreement to keep quiet, which shows how Victorian gentlemen protected one another\'s good names.\n\nIn the novel as a whole, Jekyll\'s wish to protect his reputation helps to explain why he creates Hyde. In Chapter 10 he explains that he wanted to "carry my head high", so he "concealed my pleasures". As Hyde, he can do what he likes without damaging Jekyll\'s good name. Utterson also keeps protecting Jekyll\'s reputation. After Sir Danvers Carew is murdered, Utterson warns Jekyll in Chapter 5 that "your name might appear" if there is a trial, and near the end of Chapter 8 he hopes that they can "save his credit".\n\nThe novel was published in 1886, when respectability and self-control mattered greatly in Victorian society. Stevenson shows that caring too much about reputation can be dangerous, because the silence of the characters lets Hyde carry on.',
              'Grade 6-7':
                'Stevenson presents reputation in this extract as something the gentlemen protect through silence. The conversation is framed by pauses: it opens as "The pair walked on again for a while in silence", and later Utterson "walked some way in silence" and "said never a word". For men like Utterson and Enfield, what is left unsaid matters as much as what is said.\n\nThe first line refers back to Enfield\'s rule about not asking questions. Earlier in Chapter 1, Enfield explains that a question "partakes too much of the style of the day of judgment" and can roll on until "the family have to change their name". To these men, asking a question feels like passing sentence on someone, and the consequence they fear most is not a hidden crime but a family losing its good name. Utterson\'s approval, "that’s a good rule of yours", repeats his earlier "A very good rule, too", which stresses how firmly he believes in it.\n\nYet Utterson immediately bends the rule: "But for all that ... there’s one point I want to ask." The tension between curiosity and discretion that drives his investigation begins here. Even so, his wording is careful, as he describes Hyde as "that man who walked over the child", a mild phrase for what Enfield earlier described as trampling.\n\nNames are treated as dangerous. Enfield gives Hyde\'s name only after deciding that it would do no "harm", yet earlier in the chapter he refused to reveal the name on the cheque, "a name that I can’t mention". The difference is revealing: the respectable signature is protected, while Hyde, who has no standing to lose, is named at once. Utterson refers to Jekyll only as "the other party", a lawyer\'s cautious phrase, and does not say his name aloud. The name Hyde, which sounds like hide, adds to the sense that this story is built on concealment.\n\nEnfield\'s description of Hyde shows that a reputation can be formed by instinct rather than evidence. The repetition in "something displeasing, something down-right detestable" and the admission "I can’t describe him" show that Hyde\'s bad name rests on a feeling. This contrasts with Jekyll, whose reputation is supported by his appearance: in Chapter 3 he has "every mark of capacity and kindness".\n\nThe extract closes with a pact of silence. Enfield is "ashamed of my long tongue", as if speaking were the real fault, and proposes "a bargain never to refer to this again". The noun "bargain" makes silence sound like a contract, and Utterson\'s "I shake hands on that, Richard" seals it as a gentlemen\'s agreement, with the first name showing the trust between the two kinsmen.\n\nAcross the novel, this pattern repeats. Jekyll explains in Chapter 10 that his "imperious desire to carry my head high" meant that "I concealed my pleasures". He says that other men had hired people to commit their crimes "while their own person and reputation sat under shelter", but that he was "the first that ever did so for his pleasures". Hyde is a way of keeping Jekyll\'s reputation clean. Utterson, too, keeps protecting it. In Chapter 5 he fears that "the good name of another" will be pulled into "the eddy of the scandal", and when Guest notices the likeness between the two handwritings, he locks the note in his safe. Even in Chapter 8, with Hyde\'s body in the room, his instinct is to "save his credit".\n\nPublished in 1886, the novel reflects a Victorian society that prized respectability and self-control, in which gentlemen protected one another\'s good names. Stevenson suggests that this loyalty has a cost: by keeping quiet to protect Jekyll\'s name, his friends allow Hyde to carry on. The handshake at the end of this extract seems honourable, but it is one of many silences that leave Jekyll alone with his secret.',
              'Grade 8-9':
                'Stevenson presents reputation in this extract as a code by which the gentlemen live, and the short conversation enacts each stage of it: a rule, a breach of the rule, a name withheld and finally a pact of silence. On the surface the exchange is calm and courteous, but beneath its politeness Stevenson shows how much these men will give up to keep a good name intact.\n\nThe opening line approves a rule that is really about reputation. Earlier in Chapter 1, Enfield explains that questioning "partakes too much of the style of the day of judgment" and that a single question, like a stone set rolling, can end in disaster: "the family have to change their name". What he fears is not that wrongdoing might stay hidden but that a name might be ruined. When Utterson says "that’s a good rule of yours", repeating his earlier "A very good rule, too", the lawyer affirms a principle of not knowing. The irony is that Utterson, whose profession depends on evidence, is gathering it even as he praises the rule: "But for all that ... there’s one point I want to ask."\n\nNames carry enormous weight. Enfield releases Hyde\'s name only once he "can’t see what harm it would do", and the formula "a man of the name of Hyde" holds it at arm\'s length. Yet earlier in the chapter he refused to reveal the signature on the cheque, "a name that I can’t mention", although it was "very well known and often printed". The two names are handled in opposite ways because they carry opposite reputations: Jekyll\'s is precious, while Hyde\'s, which sounds like hide, belongs to someone with no standing to lose. Utterson\'s legal phrase "the other party" goes further, letting him discuss Jekyll without naming him even to his own kinsman.\n\nEnfield\'s attempt to describe Hyde shows reputation working through instinct. The tricolon "something wrong with his appearance; something displeasing, something down-right detestable" moves from vagueness to strong condemnation without ever finding a fact, and the repeated "and yet" in "and yet I scarce know why" and "and yet I really can name nothing out of the way" shows judgement running ahead of evidence. Hyde is condemned on sight, whereas Jekyll is protected by his appearance: in Chapter 3 he has "every mark of capacity and kindness". Stevenson implies that a Victorian good name rested on surfaces, which is precisely what makes Jekyll\'s double life possible.\n\nThe ending turns silence into a contract. Enfield\'s "touch of sullenness" and his confession "I am ashamed of my long tongue" make talking the offence rather than the cruelty he witnessed. His proposal of "a bargain never to refer to this again" borrows the language of trade, and Utterson seals it formally: "With all my heart ... I shake hands on that, Richard." The handshake is the gesture by which gentlemen protected one another\'s good names, and its sincerity is what makes it troubling, because it binds two decent men to say nothing more about a man who trampled a child.\n\nAcross the novel, Stevenson shows that reputation is both a weapon and a trap. In Enfield\'s story, told earlier in Chapter 1, Enfield and the doctor threaten to "make his name stink from one end of London to the other", and Hyde\'s reply, as Enfield reports it, "No gentleman but wishes to avoid a scene", borrows the very language of respectability that he exists to escape. Later, the code of silence isolates Jekyll instead of saving him. In Chapter 5 Utterson warns him that "your name might appear" at a trial, and Jekyll admits that he is "thinking of my own character". When Guest finds the two handwritings "only differently sloped", Utterson locks the note in his safe, concealing evidence that his friend may have forged a letter for a murderer. Lanyon also withholds the truth: of what Jekyll told him, he writes in Chapter 9, "I cannot bring my mind to set on paper." Even in Chapter 8, with Hyde\'s body in the cabinet, Utterson\'s instinct is to "save his credit".\n\nJekyll\'s statement in Chapter 10 reveals that reputation is not only a theme but a cause of the tragedy. He was "fond of the respect of the wise and good" and had an "imperious desire to carry my head high", so he "concealed my pleasures", which the novel never specifies. Crucially, he blames "the exacting nature of my aspirations" rather than "any particular degradation in my faults". Stevenson locates the problem in the standard of respectability more than in the faults themselves. Jekyll describes his public life as a "load of genial respectability", a noun that presents a good name as a burden he could set down only by becoming Hyde. When that protection fails, the fall is total: Jekyll goes from "safe of all men’s respect, wealthy, beloved" to "the common quarry of mankind".\n\nPublished in 1886, the novel examines a Victorian society that prized respectability and self-control, in which gentlemen protected one another\'s good names. Stevenson\'s structure carries his criticism. The first chapter ends with a bargain never to speak, and the novel ends with written confessions read only after Lanyon\'s death and Jekyll\'s disappearance, as if the truth can be told only when there is no longer a reputation to protect. The handshake in this extract looks like honour, but Stevenson leaves the reader to ask whether the silence of good men helped Hyde to flourish.',
            },
            markScheme: [
              ...WEIGHTING,
              'AO1 here: A clear, developed response to how the extract presents reputation: Enfield\'s rule, Utterson\'s refusal to name the man he calls "the other party" and the pact "never to refer to this again", linked to Jekyll\'s double life in the novel as a whole',
              'AO2 here: Methods in the extract: the framing silences, the vague repetition in "something displeasing, something down-right detestable", Utterson\'s legal phrase "the other party" and the contractual "bargain" sealed with "I shake hands on that, Richard"',
              'AO1 here: Whole-novel references: the cheque signed with "a name that I can’t mention" (Chapter 1); Utterson\'s warning that "your name might appear" (Chapter 5) and his wish to "save his credit" (Chapter 8); Jekyll\'s "imperious desire to carry my head high" (Chapter 10)',
              "AO3 here: Context used relevantly: published in 1886, the novel reflects a Victorian society that prized respectability and self-control, in which gentlemen protected one another's good names; Stevenson suggests that this code of silence lets Hyde go unchecked",
              ...LEVELS,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aqa-lit-p1-e',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and the 19th-Century Novel',
    subtitle: 'English Literature 8702/1',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'aqa-lit-p1-e-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its Shakespeare plays; this paper sets Macbeth. AO4 is assessed in this section: 4 marks for vocabulary, sentence structures, spelling and punctuation, in addition to the 30 for the answer. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 55 minutes here.",
        totalMarks: 34,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'aqa-lit-p1-e-q1',
            questionNumber: 1,
            questionText:
              'Read the following extract from Act 2 Scene 2 of Macbeth and then answer the question that follows.\n\nAt this point in the play Macbeth has just murdered King Duncan and has come back to Lady Macbeth.\n\nStarting with this extract, how does Shakespeare present the theme of guilt?\n\nWrite about:\n• how Shakespeare presents guilt in this extract\n• how Shakespeare presents guilt in the play as a whole.\n\n[30 marks]\nAO4 [4 marks]',
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
              ...WEIGHTING,
              'AO4: SPaG - spelling, punctuation, grammar, vocabulary (4 marks)',
              "AO2 here: analysis of Shakespeare's methods - stichomythia, euphemism, the imagery of hands, blood and sleep, dramatic irony, the contrast between Macbeth and Lady Macbeth, the reversal of guilt between them across the play",
              'AO3 here: understanding of context - Reformation theology and the loss of confessional absolution, Jacobean conceptions of conscience, the relationship between guilt and kingship, divine right',
              ...LEVELS,
              'AO4: high performance 4 marks, intermediate 2-3, threshold 1',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p1-e-sec-b',
        title: 'Section B: The 19th-Century Novel - A Christmas Carol',
        description:
          "Answer one question from this section on your chosen text. AQA sets a question on each of its 19th-century novels; this paper sets A Christmas Carol. AQA's question papers call the staves of A Christmas Carol chapters, so Chapter 3 is the third stave. AQA's paper gives no advice on time per section; dividing its 1 hour 45 minutes by the marks gives about 50 minutes here.",
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p1-e-q2',
            questionNumber: 2,
            questionText:
              "Read the following extract from Chapter 3 of A Christmas Carol and then answer the question that follows.\n\nIn this extract, the Ghost of Christmas Present shows Scrooge the Cratchit family's Christmas dinner.\n\nStarting with this extract, explore how Dickens presents the Cratchit family in A Christmas Carol.\n\nWrite about:\n• how Dickens presents the Cratchit family in this extract\n• how Dickens presents the Cratchit family in the novel as a whole.\n\n[30 marks]",
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: NOVEL_EXTRACT_E,
            extractSource: NOVEL_EXTRACT_E_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract Dickens presents the Cratchit family as poor but loving, happy and united. The goose is treated as if it were incredibly rare, "a feathered phenomenon". This exaggeration is funny, but the narrator adds that "in truth it was something very like it in that house", which shows that the family can hardly ever afford a meal like this.\n\nAlmost everyone in the family helps with the dinner. "Mrs. Cratchit made the gravy", "Master Peter mashed the potatoes with incredible vigour", "Miss Belinda sweetened up the apple-sauce" and "Martha dusted the hot plates". The long sentence lists their jobs one after another, separated by semicolons, which shows that they work together as a team. Bob takes "Tiny Tim beside him", which shows that he is a caring father.\n\nWhen the goose is carved, "one murmur of delight arose all round the board". The word "one" suggests that the family is united. Even Tiny Tim "feebly cried Hurrah". The word "feebly" reminds the reader that he is weak and ill, so we feel sympathy for him. The family then worry about the pudding. The narrator repeats "Suppose" three times, imagining that it might not be cooked or might even be stolen, which shows how much this treat matters to them. When it arrives, Mrs Cratchit is "smiling proudly" and the pudding is "like a speckled cannon-ball". The narrator tells us that nobody thought "it was at all a small pudding for a large family", so we realise that it is small, but the family are too loyal to say so.\n\nIn the rest of the novel the Cratchits show the effects of Scrooge\'s meanness. In Stave I Bob works in "a dismal little cell" and his fire is so small "that it looked like one coal". Scrooge complains about "my clerk, with fifteen shillings a week, and a wife and family", which shows how little he pays him. Even so, Bob is cheerful and goes "down a slide on Cornhill" because it is Christmas Eve.\n\nTiny Tim is the most important member of the family. In Stave III he says "God bless us every one!", which shows his kindness, and Scrooge asks the Ghost if he will live. In Stave IV the family mourn his death, and Bob cries "My little, little child!" In Stave V Scrooge sends them a huge turkey, raises Bob\'s salary and becomes "a second father" to Tiny Tim, "who did NOT die".\n\nDickens published the novel in December 1843. As a child he had worked in a blacking factory while his father was in a debtors\' prison, so he knew how hard life could be for struggling families. He uses the Cratchits to show his readers that poor people are good and loving and deserve help.',
              'Grade 6-7':
                'Dickens presents the Cratchits\' Christmas dinner as a celebration in which love and shared effort turn a modest meal into a feast, and the comedy of the scene never quite hides the poverty beneath it. The opening hyperbole, which makes the goose "a feathered phenomenon, to which a black swan was a matter of course", is mock-heroic: an ordinary bird is treated as a marvel. The narrator then admits that "in truth it was something very like it in that house", so the joke depends on the reader knowing that a goose is a rare luxury for this family.\n\nThe long second sentence, divided by semicolons, shows the family working as one. Each member has a task, from the gravy made "hissing hot" to the potatoes mashed "with incredible vigour", and the formal titles "Master Peter" and "Miss Belinda" give the children a comic dignity. Even the youngest Cratchits have a part, cramming spoons into their mouths "lest they should shriek for goose". The structure creates a sense of busy, cooperative noise, while Bob\'s decision to take "Tiny Tim beside him in a tiny corner" shows his protectiveness.\n\nDickens builds suspense around the food as if it were a drama. The "breathless pause" before Mrs Cratchit carves ends in "one murmur of delight", and the word "one" suggests that the family share a single feeling. The adverb "feebly", used of Tiny Tim\'s cheer, is a reminder of his weakness at the very moment of joy. The pudding section develops this. The anaphora of "Suppose" turns ordinary worries into comic "horrors", and the short exclamations, "Hallo! A great deal of steam!", make the narration as excited as the family.\n\nBehind the joy, the narrator lets the reader see their poverty. The goose is admired for its "size and cheapness", and it has to be "Eked out by apple-sauce and mashed potatoes" to make "a sufficient dinner". The brandy is measured as "half of half-a-quartern", a tiny amount, and Mrs Cratchit is seen "surveying one small atom of a bone upon the dish". The final paragraph\'s irony is the clearest: nobody thought it "a small pudding for a large family", because "It would have been flat heresy to do so". The religious metaphor "heresy" suggests that the family\'s loyalty to one another is almost a faith, and their refusal to complain is what makes them admirable.\n\nAcross the novel the Cratchits show the human cost of Scrooge\'s meanness. In Stave I the clerk works in "a dismal little cell" beside a fire so small "that it looked like one coal", yet the narrator says that, "cold as he was", he "was warmer than Scrooge". Scrooge sneers at "my clerk, with fifteen shillings a week, and a wife and family", reducing a family to a figure. Stave III shows what that wage means: Mrs Cratchit is "dressed out but poorly in a twice-turned gown", and Bob\'s clothes are "threadbare".\n\nTiny Tim makes the family central to Scrooge\'s change. His "God bless us every one!" extends his father\'s toast to everyone, and when Scrooge asks "with an interest he had never felt before" whether Tim will live, the Ghost turns Scrooge\'s own words, "decrease the surplus population", against him. The phrase echoes the economist Thomas Malthus, and Dickens shows how cruel it sounds when applied to a child we have just watched cheer. In Stave IV the "noisy little Cratchits" are "as still as statues", the opposite of the bustle in the extract, and Bob\'s cry, "My little, little child!", shows the future that awaits them if Scrooge does not change.\n\nIn Stave V Scrooge sends them a turkey "twice the size of Tiny Tim", raises Bob\'s salary and orders him to "buy another coal-scuttle", undoing the single coal of Stave I. Tiny Tim "did NOT die", and Scrooge becomes "a second father" to him. Dickens published the novel in December 1843, nine years after the Poor Law Amendment Act of 1834 set up the Union workhouses for the poor, and he had worked in a blacking factory as a child while his father was in a debtors\' prison. By giving a poor family names, voices and a pudding to worry about, he makes it impossible for his readers to think of them as a "surplus population".',
              'Grade 8-9':
                'The Christmas dinner in this extract is Dickens\'s reply to a sneer. In Stave I Scrooge reduces the Cratchits to "my clerk, with fifteen shillings a week, and a wife and family"; the dinner takes that faceless "wife and family" and gives its members names and parts to play, so that the household Scrooge dismissed becomes the warm centre of the novel. Dickens\'s method in the extract is a kind of double vision. The narrator shares the family\'s delight while letting the reader see the poverty they refuse to notice, and the gap between the two is where the reader\'s sympathy is made.\n\nThe opening hyperbole sets up this doubleness. The goose is "a feathered phenomenon, to which a black swan was a matter of course", a mock-heroic flourish that elevates a common bird into a marvel, but the narrator\'s qualification, "in truth it was something very like it in that house", converts the joke into a fact: in this home a goose really is a rarity. The second sentence then becomes a list of clauses separated by semicolons, and in each a Cratchit is the subject of an active verb: "Mrs. Cratchit made the gravy", "Master Peter mashed the potatoes", "Miss Belinda sweetened up the apple-sauce", "Martha dusted the hot plates". The family that Scrooge\'s sneer treats as mere dependants are shown as agents, each contributing to a shared effort. The titles "Master Peter" and "Miss Belinda" borrow the polite forms of address of a grander household and give the children a dignity that is comic but not mocking. Bob takes "Tiny Tim beside him in a tiny corner", and the doubled smallness of "Tiny" and "tiny" places the weakest member of the family at the edge of the table and under his father\'s protection.\n\nThe carving is staged as melodrama: a "breathless pause", Mrs Cratchit "looking slowly all along the carving-knife", then the release of "one murmur of delight". The numeral "one" turns the family into a single voice. But Dickens lets a discordant adverb into the climax, as Tiny Tim "feebly cried Hurrah". The adverb "feebly" is the one word in the celebration that the family cannot transform, and it anticipates the "vacant seat" the Ghost will foresee later in the stave.\n\nThe pudding passage moves the narration inside the family\'s nerves. The anaphora of "Suppose" escalates from the plausible to the absurd, a thief climbing "the wall of the back-yard", and "All sorts of horrors were supposed" borrows the vocabulary of Gothic fiction for a kitchen worry. Free indirect style then merges narrator and family: "Hallo! A great deal of steam!" The similes come from everyday working life, "A smell like a washing-day!" and "like an eating-house and a pastrycook\'s next door to each other", and the pudding itself, "like a speckled cannon-ball", arrives like a trophy of war. The precise measure of "half of half-a-quartern of ignited brandy" is a fraction of a fraction, the arithmetic of a household that counts every penny, and the archaic "bedight" dresses this thrift in ceremonial language.\n\nThe final paragraph widens the gap between the family\'s view and the reader\'s. Bob calls the pudding "the greatest success achieved by Mrs. Cratchit since their marriage", and Mrs Cratchit confesses her "doubts about the quantity of flour", a glimpse of the worries of a tight budget. Then the narrator says what the family will not: "nobody said or thought it was at all a small pudding for a large family". The family see a triumph; the reader is shown a small pudding. "It would have been flat heresy to do so" makes their loyalty a kind of faith, and their contentment becomes a moral achievement rather than proof that poverty is bearable.\n\nDickens is careful not to let that achievement become naivety. Later in the stave Mrs Cratchit calls Scrooge "such an odious, stingy, hard, unfeeling man", and the narrator admits that "Scrooge was the Ogre of the family". The narrator\'s sober inventory, "their shoes were far from being water-proof; their clothes were scanty", restores the material facts that the dinner obscures. Tiny Tim\'s "God bless us every one!" gives the family\'s generosity its fullest expression, and when the Ghost turns Scrooge\'s phrase "decrease the surplus population", which echoes the economist Thomas Malthus, against Tim, the dinner has already made a statistic into a child.\n\nAcross the novel the Cratchits measure Scrooge\'s moral state. In Stave I the clerk\'s fire "looked like one coal", although, "cold as he was", he "was warmer than Scrooge". In Stave IV the bustle of the extract has become silence: "The noisy little Cratchits were as still as statues", and the words Peter must have read out, of a child set "in the midst of them", place Tim at the centre of the family even in his absence. In Stave V the prize turkey, "twice the size of Tiny Tim", answers the rare goose with comic excess, Scrooge promises help for Bob\'s "struggling family", and Tim "did NOT die". The novel\'s last words give Tim the final say: "as Tiny Tim observed, God bless Us, Every One!"\n\nDickens\'s own history explains the urgency. He published the novel in December 1843, nine years after the Poor Law Amendment Act of 1834 set up the Union workhouses for the poor, and he had worked in a blacking factory as a child while his father was in a debtors\' prison, so he knew from experience what money troubles could do to a family. The Cratchits are his answer to Scrooge\'s statistics: a household for whom a few shillings decide whether there is a goose on the table, and whose generosity shames the rich man who could easily have given more.',
            },
            markScheme: [
              ...WEIGHTING,
              'AO1 here: The Cratchits as poor but loving, united and grateful; the dinner as a shared effort that turns "a small pudding for a large family" into a triumph; the family\'s importance at each stage of Scrooge\'s change, especially through Tiny Tim.',
              'AO2 here: Methods in the extract: mock-heroic hyperbole in "a feathered phenomenon", the list of tasks separated by semicolons, the anaphora of "Suppose", homely similes such as "like a speckled cannon-ball", the adverb "feebly" and the narrator\'s irony in "It would have been flat heresy to do so".',
              'AO2 here: The family across the novel: the clerk\'s fire that "looked like one coal" in Stave I; Tiny Tim\'s "God bless us every one!" and the toast to "the Founder of the Feast" in Stave III; the family "as still as statues" in Stave IV; the turkey, the pay rise and "a second father" in Stave V.',
              "AO3 here: Context: published in December 1843, nine years after the Poor Law Amendment Act of 1834 set up the Union workhouses for the poor; Scrooge's \"surplus population\", echoing the economist Thomas Malthus, turned against Tiny Tim; Dickens's childhood in a blacking factory while his father was in a debtors' prison.",
              ...LEVELS,
            ],
          },
        ],
      },
    ],
  },
]
