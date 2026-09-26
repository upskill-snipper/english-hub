// @ts-nocheck
/**
 * AQA GCSE English Literature Paper 1, second set: one paper on The Tempest,
 * Frankenstein, Pride and Prejudice and The Sign of Four, and a bank of
 * extracts from those works and from Much Ado About Nothing and The Merchant
 * of Venice. Nothing imports this file, so no page serves the paper.
 *
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs). All eighteen extracts were labelled
 * as the named work, and none was that work's text:
 * - The three labelled "Mary Shelley, Frankenstein (1818)" were 0 to 27%
 *   verbatim, most of their sentences in no edition. The one the paper
 *   printed (Question 3) had the creature claim a "far greater degree of
 *   sensibility than man" and swear "unrelenting war", and the model answers
 *   analysed both invented lines as Shelley's.
 * - The Sign of Four extracts were 0 to 4% verbatim. The printed one
 *   (Question 5) was built round "You see, but you do not observe", which is
 *   from "A Scandal in Bohemia", not this novel, and its model answer quoted
 *   an invented line of Watson's.
 * - The Pride and Prejudice extracts were 20 to 67%. The printed one
 *   (Question 4) gave Elizabeth a question she never asks and had her refuse
 *   Darcy by citing his letter, which he gives her the next day; the model
 *   answers repeated both.
 * - The Shakespeare extracts were 0 to 59%: lines rewritten, speeches
 *   invented (a Claudio speech in Much Ado, Act 5, Scene 2), a Tempest 3.2
 *   passage padded with a song and dialogue from 2.2, and the passage printed
 *   for Question 2, labelled Act 4, Scene 1, made of lines from Acts 1, 2 and
 *   5, some given to the wrong speaker, and lines in no edition. Where every
 *   word was right, the punctuation was no edition's.
 * - Question 1's model answer had Prospero threaten Caliban with "I will
 *   rend an oak", a threat he makes to Ariel in Act 1, Scene 2, and
 *   Question 2's misquoted "This island's mine".
 *
 * WHAT WAS DONE (27 September 2026). Each extract was replaced with a passage
 * cut by passage() (src/lib/study-guides/passage.ts), run by a script and
 * never typed, from the held editions in src/data/full-texts (The Tempest,
 * Project Gutenberg #1540; Much Ado About Nothing, #1519; The Merchant of
 * Venice, #1515; Frankenstein, the 1831 text, #42324; The Sign of Four,
 * #2097) and, for Pride and Prejudice, which is not held, from Project
 * Gutenberg #1342 (the George Allen edition illustrated by Hugh Thomson),
 * its wrapped lines rejoined and its illustrations dropped. Where an old
 * label named a scene, the new passage is from that scene; each is on the
 * old passage's subject, and each label names its chapter and edition. Most
 * are of a similar length to the old; three are about twice as long or more
 * (TEMPEST_EXTRACT_03, 126 words to 433; FRANKENSTEIN_EXTRACT_03 and
 * SIGN_OF_FOUR_EXTRACT_03, about 190 to about 390), and none is over 440.
 * The only departures from the edition are layout: a play's stage
 * directions are bracketed, the plain-text editions' italic underscores are
 * dropped, and #1342's "--" is printed as the dash it stands for (the 1831
 * Frankenstein's "--" is left as the held edition prints it). The five
 * questions, mark schemes and model answers were rewritten for the new
 * passages. Every quotation in a model answer is in its extract, apart from
 * eight, each of which is in the edition where the answer places it (an act
 * and scene, "earlier in the chapter", "at the end", or the character and
 * episode it names).
 *
 * To cut a passage again, passage(text, section, from, to):
 *   TEMPEST_EXTRACT_01   the-tempest activ-scenei, "You do look, my son" to "Even to roaring"
 *   TEMPEST_EXTRACT_02   the-tempest actiii-sceneii, "I am full of pleasure" to "Exeunt"
 *   TEMPEST_EXTRACT_03   the-tempest activ-scenei, "my King, be quiet" to "hunted soundly"
 *   MUCH_ADO_EXTRACT_01  much-ado-about-nothing actv-sceneii, "Yea, signior; and depart" to "It appears not in this confession"
 *   MUCH_ADO_EXTRACT_02  much-ado-about-nothing actii-sceneiii, "but I would have thee hence" to "kid-fox"
 *   MUCH_ADO_EXTRACT_03  much-ado-about-nothing actiii-scenei, "the only man of Italy" to "What fire is in mine ears"
 *   MERCHANT_EXTRACT_01  the-merchant-of-venice actiii-scenei, "thou wilt not take his flesh" to "better the instruction"
 *   MERCHANT_EXTRACT_02  the-merchant-of-venice activ-scenei, "Then must the Jew be merciful" to "quality of mercy"
 *   MERCHANT_EXTRACT_03  the-merchant-of-venice acti-scenei, "In sooth I know not why" to "had I such venture"
 *   FRANKENSTEIN_EXTRACT_01  frankenstein section-7 (Chapter I), "I am by birth a Genevese" to "As the circumstances of his marriage"
 *   FRANKENSTEIN_EXTRACT_02  frankenstein section-19 (Chapter XIII), "The words induced me to turn towards myself" to "Of what a strange nature is knowledge"
 *   FRANKENSTEIN_EXTRACT_03  frankenstein section-11 (Chapter V), the paragraph "The different accidents of life"
 *   PRIDE_AND_PREJUDICE_EXTRACT_01  #1342 Chapter 1, "It is a truth universally acknowledged" to "Design? Nonsense"
 *   PRIDE_AND_PREJUDICE_EXTRACT_02  #1342 Chapter 34, "In vain have I struggled" to "In such cases as this"
 *   PRIDE_AND_PREJUDICE_EXTRACT_03  #1342 Chapter 19, "It was absolutely necessary to interrupt him" to "Upon my word, sir"
 *   SIGN_OF_FOUR_EXTRACT_01  the-sign-of-four section-1, "from the H. W. upon the back" to "Ah, that is good luck"
 *   SIGN_OF_FOUR_EXTRACT_02  the-sign-of-four section-6, "This is all very well" to "Of course he did. He must have"
 *   SIGN_OF_FOUR_EXTRACT_03  the-sign-of-four section-12, "the end of our little drama" to "remains the cocaine-bottle"
 *
 * WHY STRINGS, NOT passage() CALLS. The study guides call passage() when
 * they load, so their passages cannot drift from the edition. Here the cut
 * text is written out, because scripts/check-mock-exam-extracts.mjs reads
 * each extract from this file as a string literal: a constant set by a call
 * would not be read at all, and the check that found these extracts would
 * report nothing about them. Pride and Prejudice is not held, so it could
 * not be cut on load in any case. Nothing ran that checker mechanically, so
 * src/__tests__/aqa-lit-p1-set2-quotes-the-real-text.test.ts cuts every held
 * extract here again and fails on any difference, and checks the answers'
 * quotations; it runs in the pre-push gate.
 *
 * SECOND PASS (27 September 2026, a review of the above).
 * - Marks. The paper gave 48 marks a section, 96 in all, and 8702/1 is 34
 *   (30, plus 4 for AO4) and 30, 64 in all, as mock-exams-aqa-lit-p1.ts has
 *   it. The Shakespeare questions now say so and their mark schemes carry the
 *   AO4 line. The timings (55 and 50 minutes) add up to the paper's 1 hour
 *   45 minutes and are unchanged.
 * - Grade bands. The answers were keyed "Grade 7-9", "5-6" and "3-4". The
 *   mock-exam page (src/app/dashboard/mock-exam/page.tsx) looks up only
 *   "Grade 4-5", "Grade 6-7" and "Grade 8-9", so had this paper been served
 *   every band would have shown "Model answer not available". They are now
 *   keyed by the page's bands, 7-9 as 8-9, 5-6 as 6-7 and 3-4 as 4-5, so the
 *   two lower answers are labelled about a grade above the one they were
 *   written for.
 * - Question 4 asked only about "this extract", while its mark scheme and
 *   answers rewarded the rest of the novel. It now asks for both, as AQA does.
 * - Question 4's answers had Elizabeth's pity turn to anger when she sees
 *   Darcy expects to be accepted. In the extract it is his "subsequent
 *   language" that angers her; his certainty can "only exasperate farther".
 *   The Grade 4-5 answer read "I have never desired your good opinion" as
 *   indifference to his wealth; it is about his regard, not his money.
 * - The reverse test in scripts/check-mock-exam-extracts.mjs read this file
 *   to prove the checker fails the invented Frankenstein extracts. Once they
 *   were replaced it failed four of its checks, so the invented extracts and
 *   the question that printed them are kept, labelled as invented, in
 *   scripts/fixtures/check-mock-exam-extracts/, and the test reads them there.
 */
import type { MockExamPaper } from './mock-exams'

// ─── The Tempest Extracts ──────────────────────────────────────────────────

const TEMPEST_EXTRACT_01 = `PROSPERO
You do look, my son, in a mov’d sort,
As if you were dismay’d: be cheerful, sir:
Our revels now are ended. These our actors,
As I foretold you, were all spirits and
Are melted into air, into thin air:
And, like the baseless fabric of this vision,
The cloud-capp’d towers, the gorgeous palaces,
The solemn temples, the great globe itself,
Yea, all which it inherit, shall dissolve,
And, like this insubstantial pageant faded,
Leave not a rack behind. We are such stuff
As dreams are made on, and our little life
Is rounded with a sleep. Sir, I am vex’d:
Bear with my weakness; my old brain is troubled.
Be not disturb’d with my infirmity.
If you be pleas’d, retire into my cell
And there repose: a turn or two I’ll walk,
To still my beating mind.

FERDINAND, MIRANDA
We wish your peace.

[Exeunt.]

PROSPERO
Come, with a thought. I thank thee, Ariel. Come!

[Enter Ariel.]

ARIEL
Thy thoughts I cleave to. What’s thy pleasure?

PROSPERO
Spirit,
We must prepare to meet with Caliban.

ARIEL
Ay, my commander. When I presented Ceres,
I thought to have told thee of it; but I fear’d
Lest I might anger thee.

PROSPERO
Say again, where didst thou leave these varlets?

ARIEL
I told you, sir, they were red-hot with drinking;
So full of valour that they smote the air
For breathing in their faces; beat the ground
For kissing of their feet; yet always bending
Towards their project. Then I beat my tabor;
At which, like unback’d colts, they prick’d their ears,
Advanc’d their eyelids, lifted up their noses
As they smelt music: so I charm’d their ears,
That calf-like they my lowing follow’d through
Tooth’d briers, sharp furzes, pricking goss, and thorns,
Which enter’d their frail shins: at last I left them
I’ th’ filthy-mantled pool beyond your cell,
There dancing up to th’ chins, that the foul lake
O’erstunk their feet.

PROSPERO
This was well done, my bird.
Thy shape invisible retain thou still:
The trumpery in my house, go bring it hither
For stale to catch these thieves.

ARIEL
I go, I go.

[Exit.]

PROSPERO
A devil, a born devil, on whose nature
Nurture can never stick; on whom my pains,
Humanely taken, all, all lost, quite lost;
And as with age his body uglier grows,
So his mind cankers. I will plague them all,
Even to roaring.`

const TEMPEST_EXTRACT_01_SOURCE =
  'William Shakespeare, The Tempest, Act 4, Scene 1 (Project Gutenberg text)'

const TEMPEST_EXTRACT_02 = `CALIBAN
Thou mak’st me merry. I am full of pleasure.
Let us be jocund: will you troll the catch
You taught me but while-ere?

STEPHANO
At thy request, monster, I will do reason, any reason. Come on,
Trinculo, let us sing.

[Sings.]

Flout ’em and cout ’em,
and scout ’em and flout ’em:
    Thought is free.

CALIBAN
That’s not the tune.

[Ariel plays the tune on a tabor and pipe.]

STEPHANO
What is this same?

TRINCULO
This is the tune of our catch, played by the picture of Nobody.

STEPHANO
If thou beest a man, show thyself in thy likeness: if thou beest a
devil, take ’t as thou list.

TRINCULO
O, forgive me my sins!

STEPHANO
He that dies pays all debts: I defy thee. Mercy upon us!

CALIBAN
Art thou afeard?

STEPHANO
No, monster, not I.

CALIBAN
Be not afeard. The isle is full of noises,
Sounds, and sweet airs, that give delight, and hurt not.
Sometimes a thousand twangling instruments
Will hum about mine ears; and sometimes voices,
That, if I then had wak’d after long sleep,
Will make me sleep again: and then, in dreaming,
The clouds methought would open and show riches
Ready to drop upon me; that, when I wak’d,
I cried to dream again.

STEPHANO
This will prove a brave kingdom to me, where I shall have my music for
nothing.

CALIBAN
When Prospero is destroyed.

STEPHANO
That shall be by and by: I remember the story.

TRINCULO
The sound is going away. Let’s follow it, and after do our work.

STEPHANO
Lead, monster: we’ll follow. I would I could see this taborer! he lays
it on. Wilt come?

TRINCULO
I’ll follow, Stephano.

[Exeunt.]`

const TEMPEST_EXTRACT_02_SOURCE =
  'William Shakespeare, The Tempest, Act 3, Scene 2 (Project Gutenberg text)'

const TEMPEST_EXTRACT_03 = `CALIBAN
Prithee, my King, be quiet. Seest thou here,
This is the mouth o’ th’ cell: no noise, and enter.
Do that good mischief which may make this island
Thine own for ever, and I, thy Caliban,
For aye thy foot-licker.

STEPHANO
Give me thy hand. I do begin to have bloody thoughts.

TRINCULO
O King Stephano! O peer! O worthy Stephano!
Look what a wardrobe here is for thee!

CALIBAN
Let it alone, thou fool; it is but trash.

TRINCULO
O, ho, monster! we know what belongs to a frippery. O King Stephano!

STEPHANO
Put off that gown, Trinculo; by this hand, I’ll have that gown.

TRINCULO
Thy Grace shall have it.

CALIBAN
The dropsy drown this fool! What do you mean
To dote thus on such luggage? Let’t alone,
And do the murder first. If he awake,
From toe to crown he’ll fill our skins with pinches,
Make us strange stuff.

STEPHANO
Be you quiet, monster. Mistress line, is not this my jerkin? Now is the
jerkin under the line: now, jerkin, you are like to lose your hair, and
prove a bald jerkin.

TRINCULO
Do, do: we steal by line and level, an’t like your Grace.

STEPHANO
I thank thee for that jest. Here’s a garment for ’t: wit shall not go
unrewarded while I am King of this country. “Steal by line and level,”
is an excellent pass of pate. There’s another garment for ’t.

TRINCULO
Monster, come, put some lime upon your fingers, and away with the rest.

CALIBAN
I will have none on’t. We shall lose our time,
And all be turn’d to barnacles, or to apes
With foreheads villainous low.

STEPHANO
Monster, lay-to your fingers: help to bear this away where my hogshead
of wine is, or I’ll turn you out of my kingdom. Go to, carry this.

TRINCULO
And this.

STEPHANO
Ay, and this.

[A noise of hunters heard. Enter divers Spirits, in shape of dogs and hounds, and hunt them about; Prospero and Ariel setting them on.]

PROSPERO
Hey, Mountain, hey!

ARIEL
Silver! there it goes, Silver!

PROSPERO
Fury, Fury! There, Tyrant, there! hark, hark!

[Caliban, Stephano and Trinculo are driven out.]

Go, charge my goblins that they grind their joints
With dry convulsions; shorten up their sinews
With aged cramps, and more pinch-spotted make them
Than pard, or cat o’ mountain.

ARIEL
Hark, they roar.

PROSPERO
Let them be hunted soundly. At this hour
Lies at my mercy all mine enemies.
Shortly shall all my labours end, and thou
Shalt have the air at freedom. For a little
Follow, and do me service.`

const TEMPEST_EXTRACT_03_SOURCE =
  'William Shakespeare, The Tempest, Act 4, Scene 1 (Project Gutenberg text)'

// ─── Much Ado About Nothing Extracts ────────────────────────────────────────

const MUCH_ADO_EXTRACT_01 = `BEATRICE
Yea, signior; and depart when you bid me.

BENEDICK
O, stay but till then!

BEATRICE
‘Then’ is spoken; fare you well now: and yet, ere I
go, let me go with that I came for; which is, with knowing what hath
passed between you and Claudio.

BENEDICK
Only foul words; and thereupon I will kiss thee.

BEATRICE
Foul words is but foul wind, and foul wind is but foul breath,
and foul breath is noisome; therefore I will depart unkissed.

BENEDICK
Thou hast frighted the word out of his right sense, so forcible
is thy wit. But I must tell thee plainly, Claudio undergoes my challenge,
and either I must shortly hear from him, or I will subscribe him a coward.
And, I pray thee now, tell me, for which of my bad parts didst thou first
fall in love with me?

BEATRICE
For them all together; which maintained so politic a state
of evil that they will not admit any good part to intermingle with
them. But for which of my good parts did you first suffer love for me?

BENEDICK
‘Suffer love,’ a good epithet! I do suffer love
indeed, for I love thee against my will.

BEATRICE
In spite of your heart, I think. Alas, poor heart! If you spite
it for my sake, I will spite it for yours; for I will never love that
which my friend hates.

BENEDICK
Thou and I are too wise to woo peaceably.

BEATRICE
It appears not in this confession: there’s not one wise
man among twenty that will praise himself.`

const MUCH_ADO_EXTRACT_01_SOURCE =
  'William Shakespeare, Much Ado About Nothing, Act 5, Scene 2 (Project Gutenberg text)'

const MUCH_ADO_EXTRACT_02 = `BENEDICK
I know that; but I would have thee hence, and here again.

[Exit Boy.]

I do much wonder that one man, seeing how much another man is a fool when
he dedicates his behaviours to love, will, after he hath laughed at such
shallow follies in others, become the argument of his own scorn by falling
in love: and such a man is Claudio. I have known, when there was no music
with him but the drum and the fife; and now had he rather hear the tabor
and the pipe: I have known when he would have walked ten mile afoot to see
a good armour; and now will he lie ten nights awake, carving the fashion
of a new doublet. He was wont to speak plain and to the purpose, like an
honest man and a soldier; and now is he turned orthography; his words are
a very fantastical banquet, just so many strange dishes. May I be so
converted, and see with these eyes? I cannot tell; I think not: I will not
be sworn but love may transform me to an oyster; but I’ll take my
oath on it, till he have made an oyster of me, he shall never make me such
a fool. One woman is fair, yet I am well; another is wise, yet I am well;
another virtuous, yet I am well; but till all graces be in one woman, one
woman shall not come in my grace. Rich she shall be, that’s certain;
wise, or I’ll none; virtuous, or I’ll never cheapen her; fair,
or I’ll never look on her; mild, or come not near me; noble, or not
I for an angel; of good discourse, an excellent musician, and her hair
shall be of what colour it please God. Ha! the Prince and Monsieur Love! I
will hide me in the arbour.

[Withdraws.]

[Enter Don Pedro, Leonato and Claudio, followed by Balthasar and Musicians.]

DON PEDRO
Come, shall we hear this music?

CLAUDIO
Yea, my good lord. How still the evening is,
As hush’d on purpose to grace harmony!

DON PEDRO
See you where Benedick hath hid himself?

CLAUDIO
O! very well, my lord: the music ended,
We’ll fit the kid-fox with a penny-worth.`

const MUCH_ADO_EXTRACT_02_SOURCE =
  'William Shakespeare, Much Ado About Nothing, Act 2, Scene 3 (Project Gutenberg text)'

const MUCH_ADO_EXTRACT_03 = `HERO
He is the only man of Italy,
Always excepted my dear Claudio.

URSULA
I pray you, be not angry with me, madam,
Speaking my fancy: Signior Benedick,
For shape, for bearing, argument and valour,
Goes foremost in report through Italy.

HERO
Indeed, he hath an excellent good name.

URSULA
His excellence did earn it, ere he had it.
When are you married, madam?

HERO
Why, every day, tomorrow. Come, go in:
I’ll show thee some attires, and have thy counsel
Which is the best to furnish me tomorrow.

URSULA
She’s lim’d, I warrant you,
We have caught her, madam.

HERO
If it prove so, then loving goes by haps:
Some Cupid kills with arrows, some with traps.

[Exeunt Hero and Ursula.]

BEATRICE
[Advancing.] What fire is in mine ears? Can this be true?
Stand I condemn’d for pride and scorn so much?
Contempt, farewell! and maiden pride, adieu!
No glory lives behind the back of such.
And, Benedick, love on; I will requite thee,
Taming my wild heart to thy loving hand:
If thou dost love, my kindness shall incite thee
To bind our loves up in a holy band;
For others say thou dost deserve, and I
Believe it better than reportingly.`

const MUCH_ADO_EXTRACT_03_SOURCE =
  'William Shakespeare, Much Ado About Nothing, Act 3, Scene 1 (Project Gutenberg text)'

// ─── The Merchant of Venice Extracts ──────────────────────────────────────

const MERCHANT_EXTRACT_01 = `SALARINO
Why, I am sure if he forfeit, thou wilt not take his flesh! What’s that
good for?

SHYLOCK
To bait fish withal; if it will feed nothing else, it will feed my
revenge. He hath disgrac’d me and hind’red me half a million, laugh’d
at my losses, mock’d at my gains, scorned my nation, thwarted my
bargains, cooled my friends, heated mine enemies. And what’s his
reason? I am a Jew. Hath not a Jew eyes? Hath not a Jew hands, organs,
dimensions, senses, affections, passions? Fed with the same food, hurt
with the same weapons, subject to the same diseases, healed by the same
means, warmed and cooled by the same winter and summer as a Christian
is? If you prick us, do we not bleed? If you tickle us, do we not
laugh? If you poison us, do we not die? And if you wrong us, shall we
not revenge? If we are like you in the rest, we will resemble you in
that. If a Jew wrong a Christian, what is his humility? Revenge. If a
Christian wrong a Jew, what should his sufferance be by Christian
example? Why, revenge! The villainy you teach me I will execute, and it
shall go hard but I will better the instruction.`

const MERCHANT_EXTRACT_01_SOURCE =
  'William Shakespeare, The Merchant of Venice, Act 3, Scene 1 (Project Gutenberg text)'

const MERCHANT_EXTRACT_02 = `PORTIA
Then must the Jew be merciful.

SHYLOCK
On what compulsion must I? Tell me that.

PORTIA
The quality of mercy is not strain’d,
It droppeth as the gentle rain from heaven
Upon the place beneath. It is twice blest,
It blesseth him that gives and him that takes.
’Tis mightiest in the mightiest; it becomes
The throned monarch better than his crown.
His sceptre shows the force of temporal power,
The attribute to awe and majesty,
Wherein doth sit the dread and fear of kings;
But mercy is above this sceptred sway,
It is enthroned in the hearts of kings,
It is an attribute to God himself;
And earthly power doth then show likest God’s
When mercy seasons justice. Therefore, Jew,
Though justice be thy plea, consider this,
That in the course of justice none of us
Should see salvation. We do pray for mercy,
And that same prayer doth teach us all to render
The deeds of mercy. I have spoke thus much
To mitigate the justice of thy plea,
Which if thou follow, this strict court of Venice
Must needs give sentence ’gainst the merchant there.`

const MERCHANT_EXTRACT_02_SOURCE =
  'William Shakespeare, The Merchant of Venice, Act 4, Scene 1 (Project Gutenberg text)'

const MERCHANT_EXTRACT_03 = `ANTONIO
In sooth I know not why I am so sad,
It wearies me, you say it wearies you;
But how I caught it, found it, or came by it,
What stuff ’tis made of, whereof it is born,
I am to learn.
And such a want-wit sadness makes of me,
That I have much ado to know myself.

SALARINO
Your mind is tossing on the ocean,
There where your argosies, with portly sail
Like signiors and rich burghers on the flood,
Or as it were the pageants of the sea,
Do overpeer the petty traffickers
That curtsy to them, do them reverence,
As they fly by them with their woven wings.

SOLANIO
Believe me, sir, had I such venture forth,
The better part of my affections would
Be with my hopes abroad. I should be still
Plucking the grass to know where sits the wind,
Peering in maps for ports, and piers and roads;
And every object that might make me fear
Misfortune to my ventures, out of doubt
Would make me sad.`

const MERCHANT_EXTRACT_03_SOURCE =
  'William Shakespeare, The Merchant of Venice, Act 1, Scene 1 (Project Gutenberg text)'

// ─── Frankenstein Extracts ──────────────────────────────────────────────────

const FRANKENSTEIN_EXTRACT_01 = `I am by birth a Genevese; and my family is one of the most distinguished of that republic. My ancestors had been for many years counsellors and syndics; and my father had filled several public situations with honour and reputation. He was respected by all who knew him, for his integrity and indefatigable attention to public business. He passed his younger days perpetually occupied by the affairs of his country; a variety of circumstances had prevented his marrying early, nor was it until the decline of life that he became a husband and the father of a family.

As the circumstances of his marriage illustrate his character, I cannot refrain from relating them. One of his most intimate friends was a merchant, who, from a flourishing state, fell, through numerous mischances, into poverty. This man, whose name was Beaufort, was of a proud and unbending disposition, and could not bear to live in poverty and oblivion in the same country where he had formerly been distinguished for his rank and magnificence. Having paid his debts, therefore, in the most honourable manner, he retreated with his daughter to the town of Lucerne, where he lived unknown and in wretchedness. My father loved Beaufort with the truest friendship, and was deeply grieved by his retreat in these unfortunate circumstances. He bitterly deplored the false pride which led his friend to a conduct so little worthy of the affection that united them. He lost no time in endeavouring to seek him out, with the hope of persuading him to begin the world again through his credit and assistance.`

const FRANKENSTEIN_EXTRACT_01_SOURCE = 'Mary Shelley, Frankenstein, Chapter 1 (1831 text)'

const FRANKENSTEIN_EXTRACT_02 = `"The words induced me to turn towards myself. I learned that the possessions most esteemed by your fellow-creatures were, high and unsullied descent united with riches. A man might be respected with only one of these advantages; but, without either, he was considered, except in very rare instances, as a vagabond and a slave, doomed to waste his powers for the profits of the chosen few! And what was I? Of my creation and creator I was absolutely ignorant; but I knew that I possessed no money, no friends, no kind of property. I was, besides, endued with a figure hideously deformed and loathsome; I was not even of the same nature as man. I was more agile than they, and could subsist upon coarser diet; I bore the extremes of heat and cold with less injury to my frame; my stature far exceeded theirs. When I looked around, I saw and heard of none like me. Was I then a monster, a blot upon the earth, from which all men fled, and whom all men disowned?

"I cannot describe to you the agony that these reflections inflicted upon me: I tried to dispel them, but sorrow only increased with knowledge. Oh, that I had for ever remained in my native wood, nor known nor felt beyond the sensations of hunger, thirst, and heat!

"Of what a strange nature is knowledge! It clings to the mind, when it has once seized on it, like a lichen on the rock. I wished sometimes to shake off all thought and feeling; but I learned that there was but one means to overcome the sensation of pain, and that was death--a state which I feared yet did not understand. I admired virtue and good feelings, and loved the gentle manners and amiable qualities of my cottagers; but I was shut out from intercourse with them, except through means which I obtained by stealth, when I was unseen and unknown, and which rather increased than satisfied the desire I had of becoming one among my fellows. The gentle words of Agatha, and the animated smiles of the charming Arabian, were not for me. The mild exhortations of the old man, and the lively conversation of the loved Felix, were not for me. Miserable, unhappy wretch!`

const FRANKENSTEIN_EXTRACT_02_SOURCE = 'Mary Shelley, Frankenstein, Chapter 13 (1831 text)'

const FRANKENSTEIN_EXTRACT_03 = `The different accidents of life are not so changeable as the feelings of human nature. I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart. Unable to endure the aspect of the being I had created, I rushed out of the room, and continued a long time traversing my bedchamber, unable to compose my mind to sleep. At length lassitude succeeded to the tumult I had before endured; and I threw myself on the bed in my clothes, endeavouring to seek a few moments of forgetfulness. But it was in vain: I slept, indeed, but I was disturbed by the wildest dreams. I thought I saw Elizabeth, in the bloom of health, walking in the streets of Ingolstadt. Delighted and surprised, I embraced her; but as I imprinted the first kiss on her lips, they became livid with the hue of death; her features appeared to change, and I thought that I held the corpse of my dead mother in my arms; a shroud enveloped her form, and I saw the grave-worms crawling in the folds of the flannel. I started from my sleep with horror; a cold dew covered my forehead, my teeth chattered, and every limb became convulsed: when, by the dim and yellow light of the moon, as it forced its way through the window shutters, I beheld the wretch--the miserable monster whom I had created. He held up the curtain of the bed; and his eyes, if eyes they may be called, were fixed on me. His jaws opened, and he muttered some inarticulate sounds, while a grin wrinkled his cheeks. He might have spoken, but I did not hear; one hand was stretched out, seemingly to detain me, but I escaped, and rushed down stairs. I took refuge in the courtyard belonging to the house which I inhabited; where I remained during the rest of the night, walking up and down in the greatest agitation, listening attentively, catching and fearing each sound as if it were to announce the approach of the demoniacal corpse to which I had so miserably given life.`

const FRANKENSTEIN_EXTRACT_03_SOURCE = 'Mary Shelley, Frankenstein, Chapter 5 (1831 text)'

// ─── Pride and Prejudice Extracts ──────────────────────────────────────────

const PRIDE_AND_PREJUDICE_EXTRACT_01 = `It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.

“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”

Mr. Bennet replied that he had not.

“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”

Mr. Bennet made no answer.

“Do not you want to know who has taken it?” cried his wife, impatiently.

“You want to tell me, and I have no objection to hearing it.”

This was invitation enough.

“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.”

“What is his name?”

“Bingley.”

“Is he married or single?”

“Oh, single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!”

“How so? how can it affect them?”

“My dear Mr. Bennet,” replied his wife, “how can you be so tiresome? You must know that I am thinking of his marrying one of them.”

“Is that his design in settling here?”

“Design? Nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes.”`

const PRIDE_AND_PREJUDICE_EXTRACT_01_SOURCE =
  'Jane Austen, Pride and Prejudice, Chapter 1 (Project Gutenberg text)'

const PRIDE_AND_PREJUDICE_EXTRACT_02 = `“In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.”

Elizabeth’s astonishment was beyond expression. She stared, coloured, doubted, and was silent. This he considered sufficient encouragement, and the avowal of all that he felt and had long felt for her immediately followed. He spoke well; but there were feelings besides those of the heart to be detailed, and he was not more eloquent on the subject of tenderness than of pride. His sense of her inferiority, of its being a degradation, of the family obstacles which judgment had always opposed to inclination, were dwelt on with a warmth which seemed due to the consequence he was wounding, but was very unlikely to recommend his suit.

In spite of her deeply-rooted dislike, she could not be insensible to the compliment of such a man’s affection, and though her intentions did not vary for an instant, she was at first sorry for the pain he was to receive; till roused to resentment by his subsequent language, she lost all compassion in anger. She tried, however, to compose herself to answer him with patience, when he should have done. He concluded with representing to her the strength of that attachment which in spite of all his endeavours he had found impossible to conquer; and with expressing his hope that it would now be rewarded by her acceptance of his hand. As he said this she could easily see that he had no doubt of a favourable answer. He spoke of apprehension and anxiety, but his countenance expressed real security. Such a circumstance could only exasperate farther; and when he ceased the colour rose into her cheeks and she said,—

“In such cases as this, it is, I believe, the established mode to express a sense of obligation for the sentiments avowed, however unequally they may be returned. It is natural that obligation should be felt, and if I could feel gratitude, I would now thank you. But I cannot—I have never desired your good opinion, and you have certainly bestowed it most unwillingly. I am sorry to have occasioned pain to anyone. It has been most unconsciously done, however, and I hope will be of short duration. The feelings which you tell me have long prevented the acknowledgment of your regard can have little difficulty in overcoming it after this explanation.”`

const PRIDE_AND_PREJUDICE_EXTRACT_02_SOURCE =
  'Jane Austen, Pride and Prejudice, Chapter 34 (Project Gutenberg text)'

const PRIDE_AND_PREJUDICE_EXTRACT_03 = `It was absolutely necessary to interrupt him now.

“You are too hasty, sir,” she cried. “You forget that I have made no answer. Let me do it without further loss of time. Accept my thanks for the compliment you are paying me. I am very sensible of the honour of your proposals, but it is impossible for me to do otherwise than decline them.”

“I am not now to learn,” replied Mr. Collins, with a formal wave of the hand, “that it is usual with young ladies to reject the addresses of the man whom they secretly mean to accept, when he first applies for their favour; and that sometimes the refusal is repeated a second or even a third time. I am, therefore, by no means discouraged by what you have just said, and shall hope to lead you to the altar ere long.”

“Upon my word, sir,” cried Elizabeth, “your hope is rather an extraordinary one after my declaration. I do assure you that I am not one of those young ladies (if such young ladies there are) who are so daring as to risk their happiness on the chance of being asked a second time. I am perfectly serious in my refusal. You could not make me happy, and I am convinced that I am the last woman in the world who would make you so. Nay, were your friend Lady Catherine to know me, I am persuaded she would find me in every respect ill qualified for the situation.”`

const PRIDE_AND_PREJUDICE_EXTRACT_03_SOURCE =
  'Jane Austen, Pride and Prejudice, Chapter 19 (Project Gutenberg text)'

// ─── The Sign of Four Extracts ───────────────────────────────────────────────

const SIGN_OF_FOUR_EXTRACT_01 = `“That you gather, no doubt, from the H. W. upon the back?”

“Quite so. The W. suggests your own name. The date of the watch is nearly fifty years back, and the initials are as old as the watch: so it was made for the last generation. Jewelry usually descends to the eldest son, and he is most likely to have the same name as the father. Your father has, if I remember right, been dead many years. It has, therefore, been in the hands of your eldest brother.”

“Right, so far,” said I. “Anything else?”

“He was a man of untidy habits,—very untidy and careless. He was left with good prospects, but he threw away his chances, lived for some time in poverty with occasional short intervals of prosperity, and finally, taking to drink, he died. That is all I can gather.”

I sprang from my chair and limped impatiently about the room with considerable bitterness in my heart.

“This is unworthy of you, Holmes,” I said. “I could not have believed that you would have descended to this. You have made inquires into the history of my unhappy brother, and you now pretend to deduce this knowledge in some fanciful way. You cannot expect me to believe that you have read all this from his old watch! It is unkind, and, to speak plainly, has a touch of charlatanism in it.”

“My dear doctor,” said he, kindly, “pray accept my apologies. Viewing the matter as an abstract problem, I had forgotten how personal and painful a thing it might be to you. I assure you, however, that I never even knew that you had a brother until you handed me the watch.”

“Then how in the name of all that is wonderful did you get these facts? They are absolutely correct in every particular.”

“Ah, that is good luck. I could only say what was the balance of probability. I did not at all expect to be so accurate.”`

const SIGN_OF_FOUR_EXTRACT_01_SOURCE =
  'Arthur Conan Doyle, The Sign of Four, Chapter 1 (Project Gutenberg text)'

const SIGN_OF_FOUR_EXTRACT_02 = `“This is all very well,” said I, “but the thing becomes more unintelligible than ever. How about this mysterious ally? How came he into the room?”

“Yes, the ally!” repeated Holmes, pensively. “There are features of interest about this ally. He lifts the case from the regions of the commonplace. I fancy that this ally breaks fresh ground in the annals of crime in this country,—though parallel cases suggest themselves from India, and, if my memory serves me, from Senegambia.”

“How came he, then?” I reiterated. “The door is locked, the window is inaccessible. Was it through the chimney?”

“The grate is much too small,” he answered. “I had already considered that possibility.”

“How then?” I persisted.

“You will not apply my precept,” he said, shaking his head. “How often have I said to you that when you have eliminated the impossible whatever remains, however improbable, must be the truth? We know that he did not come through the door, the window, or the chimney. We also know that he could not have been concealed in the room, as there is no concealment possible. Whence, then, did he come?”

“He came through the hole in the roof,” I cried.

“Of course he did. He must have done so. If you will have the kindness to hold the lamp for me, we shall now extend our researches to the room above,—the secret room in which the treasure was found.”`

const SIGN_OF_FOUR_EXTRACT_02_SOURCE =
  'Arthur Conan Doyle, The Sign of Four, Chapter 6 (Project Gutenberg text)'

const SIGN_OF_FOUR_EXTRACT_03 = `“Well, and there is the end of our little drama,” I remarked, after we had set some time smoking in silence. “I fear that it may be the last investigation in which I shall have the chance of studying your methods. Miss Morstan has done me the honour to accept me as a husband in prospective.”

He gave a most dismal groan. “I feared as much,” said he. “I really cannot congratulate you.”

I was a little hurt. “Have you any reason to be dissatisfied with my choice?” I asked.

“Not at all. I think she is one of the most charming young ladies I ever met, and might have been most useful in such work as we have been doing. She had a decided genius that way: witness the way in which she preserved that Agra plan from all the other papers of her father. But love is an emotional thing, and whatever is emotional is opposed to that true cold reason which I place above all things. I should never marry myself, lest I bias my judgment.”

“I trust,” said I, laughing, “that my judgment may survive the ordeal. But you look weary.”

“Yes, the reaction is already upon me. I shall be as limp as a rag for a week.”

“Strange,” said I, “how terms of what in another man I should call laziness alternate with your fits of splendid energy and vigour.”

“Yes,” he answered, “there are in me the makings of a very fine loafer and also of a pretty spry sort of fellow. I often think of those lines of old Goethe,—

Schade dass die Natur nur einen Mensch aus Dir schuf, Denn zum würdigen Mann war und zum Schelmen der Stoff.

“By the way, à propos of this Norwood business, you see that they had, as I surmised, a confederate in the house, who could be none other than Lal Rao, the butler: so Jones actually has the undivided honour of having caught one fish in his great haul.”

“The division seems rather unfair,” I remarked. “You have done all the work in this business. I get a wife out of it, Jones gets the credit, pray what remains for you?”

“For me,” said Sherlock Holmes, “there still remains the cocaine-bottle.” And he stretched his long white hand up for it.`

const SIGN_OF_FOUR_EXTRACT_03_SOURCE =
  'Arthur Conan Doyle, The Sign of Four, Chapter 12 (Project Gutenberg text)'

// ─── Mock Exam 1: The Tempest ──────────────────────────────────────────────

export const aqaLitP1MocksSet2: MockExamPaper[] = [
  {
    id: 'aqa-lit-p1-set2-tempest',
    board: 'AQA',
    paperNumber: 1,
    title: 'GCSE English Literature Paper 1',
    subtitle: 'Shakespeare and the 19th Century Novel',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'section-1-shakespeare',
        title: 'Section A: Shakespeare',
        description: 'Answer one question from this section on your studied Shakespeare play.',
        totalMarks: 34,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'tempest-q1',
            questionNumber: 1,
            questionText:
              "Read the extract from Act 4, Scene 1 of The Tempest below. At this point in the play, Prospero has just ended the masque he staged for Ferdinand and Miranda, because he has remembered Caliban's plot against his life. How does Shakespeare present Prospero's power and control in this extract and elsewhere in the play? [30 marks, plus 4 marks for AO4: spelling, punctuation, grammar and vocabulary]",
            marks: 34,
            suggestedTimeMinutes: 55,
            questionType: 'analysis',
            extract: TEMPEST_EXTRACT_01,
            extractSource: TEMPEST_EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Shakespeare opens the extract with Prospero\'s power at its fullest and most fragile at once. He has just dissolved the masque he conjured for the lovers, and he treats his own spectacle as a model of the world: "the great globe itself" shall "dissolve" and "Leave not a rack behind". The pun on "globe" lets the magician who stages illusions stand for the playwright whose theatre bore that name, so control over others is presented as a performance that must end. Yet the speech turns from command to confession: "Sir, I am vex\'d: / Bear with my weakness; my old brain is troubled". The man whose spirits act out his fancies cannot still his own "beating mind". The exchange with Ariel shows how that power works in practice. "Come, with a thought" presents obedience as instantaneous, and Ariel\'s reply, "Thy thoughts I cleave to", makes the servant an extension of the master\'s mind; "cleave" can mean both to cling and to split, which hints that the bond is less simple than it looks. Ariel admits that he "fear\'d / Lest I might anger thee", so this control rests partly on fear, as it did in Act 1, Scene 2, when Prospero threatened to "rend an oak / And peg thee in his knotty entrails" if Ariel complained again. Even the praise "my bird" is affectionate and possessive at once. The final speech exposes the limit of his authority. Caliban is "A devil, a born devil, on whose nature / Nurture can never stick", and Prospero concedes that his "pains, / Humanely taken" are "all, all lost, quite lost". The repetition sounds like grief as much as anger, and the vow to "plague them all, / Even to roaring" shows control collapsing into punishment. A Jacobean audience might have accepted Prospero\'s right to rule the island and its native, but a modern audience is likely to notice that he rules Caliban by force because he has failed to win him. Elsewhere Prospero raises the storm, arranges the lovers\' meeting and humbles his enemies, yet in Act 5 he promises to break his staff and drown his book. The extract prepares for that choice: a man who knows that "our little life / Is rounded with a sleep" is beginning to see that power over others is only lent.',
              'Grade 6-7':
                'Shakespeare presents Prospero as powerful but troubled. At the start of the extract he ends the masque and tells Ferdinand that the actors "were all spirits", which reminds the audience that he commands the spirits of the island. However, he also admits that "my old brain is troubled", so his power does not give him peace. His control over Ariel is clear when he says "Come, with a thought" and Ariel arrives at once. Ariel reports how he led the drunken plotters through "Tooth\'d briers, sharp furzes" into a "filthy-mantled pool", which shows Prospero using his servant to punish his enemies. His words about Caliban, "A devil, a born devil", show contempt, but they also show that he has failed to change him. Elsewhere in the play Prospero controls the storm and the other characters, but at the end he gives up his magic, which suggests that Shakespeare questions whether this kind of power is worth having.',
              'Grade 4-5':
                'Prospero is shown as a powerful character. He says "Come, with a thought" and Ariel comes straight away, which shows that Ariel obeys him. Ariel tells him how he led the drunken plotters into a "filthy-mantled pool", so Prospero uses magic to punish people. Prospero calls Caliban "A devil, a born devil" and says he will "plague them all", which shows he is angry. He also says "my old brain is troubled", so he is not calm. At the end of the play he gives up his magic.',
            },
            markScheme: [
              'Analyse the methods Shakespeare uses to present power and control, including language, dramatic structure and symbolism',
              "Interpret the extract in context, considering Prospero's supernatural authority, his mastery of Ariel and Caliban, and colonial readings of the island",
              "Compare other moments where Prospero's power is established, challenged or given up, such as his threat to Ariel in Act 1, Scene 2 and his renunciation of magic in Act 5",
              "Evaluate the extent to which Shakespeare endorses or criticises Prospero's exercise of power over others",
              'Use precise quotations woven into analytical points',
              'AO4 (4 marks): a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation',
            ],
          },
          {
            id: 'tempest-q2',
            questionNumber: 2,
            questionText:
              "Read the extract from Act 4, Scene 1 of The Tempest below. Caliban has led Stephano and Trinculo to Prospero's cell to kill him. How far do you agree that Shakespeare presents Caliban as a tragic figure? Write about Caliban in this extract and in the play as a whole. [30 marks, plus 4 marks for AO4: spelling, punctuation, grammar and vocabulary]",
            marks: 34,
            suggestedTimeMinutes: 55,
            questionType: 'evaluation',
            extract: TEMPEST_EXTRACT_03,
            extractSource: TEMPEST_EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Caliban can be read as a tragic figure, but Shakespeare keeps that reading in tension with comedy and with Caliban\'s own violence. In this extract he is the only conspirator with a clear purpose. While Trinculo marvels at "what a wardrobe here is for thee", Caliban sees the finery for what it is: "Let it alone, thou fool; it is but trash." His urgency, "Let\'t alone, / And do the murder first", shows a clarity the drunkards lack, and his warning that they will "all be turn\'d to barnacles, or to apes / With foreheads villainous low" shows how well he knows Prospero\'s power. Yet the language of his hope is the language of servitude. He promises Stephano that the murder will make "this island / Thine own for ever, and I, thy Caliban, / For aye thy foot-licker". The rebel who resents one master offers himself to another, and the self-abasing "foot-licker" is painful to hear from a character who, in Act 1, Scene 2, claimed "This island\'s mine, by Sycorax my mother, / Which thou tak\'st from me." The distance between the island\'s heir and a drunken butler\'s servant is where the tragic reading is strongest. The end of the extract is brutal. Spirits "in shape of dogs and hounds" hunt the conspirators, and Prospero orders his goblins to "grind their joints / With dry convulsions". Caliban is chased like an animal, and "Let them be hunted soundly" makes the punishment sound like sport. However, a tragic hero usually falls from greatness, and Caliban\'s plan is to murder a sleeping man. In Act 1, Scene 2 Prospero accuses him of seeking to violate Miranda, and Caliban does not deny it. His companions are clowns, and the scene invites laughter as well as pity. In Act 5 he resolves to "be wise hereafter, / And seek for grace", calling himself a "thrice-double ass" for worshipping a drunkard, which could be growth or simply defeat. A Jacobean audience may have seen a savage rightly ruled; many modern audiences, reading the play in the light of colonialism, see a dispossessed native. Caliban is tragic in his situation more than in his stature: Shakespeare gives him grievance, intelligence and poetry, but not the dignity of a hero.',
              'Grade 6-7':
                'Caliban can be seen as tragic in this extract. He wants to win back his island, but he has to rely on Stephano and Trinculo, who are drunk and foolish. He calls himself Stephano\'s "foot-licker", which shows how low he has sunk: he escapes one master only to serve another. He is also the only one who sees that the clothes are "but trash", so he seems wiser than his companions. At the end he is hunted by spirits shaped like dogs, and Prospero says "Let them be hunted soundly", which makes Caliban seem like an animal being chased. Elsewhere in the play Caliban says the island was his mother\'s and that Prospero took it from him, which makes him sympathetic. However, he also plans a murder and earlier tried to attack Miranda, so it is hard to see him as a hero. He is tragic because he is powerless, but Shakespeare also makes him a comic figure.',
              'Grade 4-5':
                'Caliban is tragic because he has lost his island and is a slave. In the extract he wants Stephano to kill Prospero so that the island will be Stephano\'s, and he calls himself "thy foot-licker", which shows he is still a servant. He tells the others to leave the clothes because they are "but trash", but they do not listen. At the end he is chased by spirits that look like dogs. This makes the audience feel sorry for him. However, Caliban also wants to murder Prospero, so maybe he is not a completely sympathetic character.',
            },
            markScheme: [
              'Analyse the methods used to present Caliban, including language, dramatic positioning and his interaction with Stephano and Trinculo',
              "Develop an argument about whether the tragic reading is supported by the text or complicated by the play's comedy and by Caliban's own violence",
              'Consider Jacobean and modern, including postcolonial, interpretations of Caliban',
              'Refer to the extract and to evidence from the rest of the play, such as his claim to the island in Act 1, Scene 2 and his resolution in Act 5',
              'Evaluate the complexity of the characterisation without resorting to simplistic judgements',
              'AO4 (4 marks): a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation',
            ],
          },
        ],
      },
      {
        id: 'section-2-19th-century',
        title: 'Section B: The 19th Century Novel',
        description: 'Answer one question from this section on your studied 19th century novel.',
        totalMarks: 30,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'frankenstein-q1',
            questionNumber: 3,
            questionText:
              'Read the extract from Chapter 13 of Frankenstein below. The creature is telling Victor what he learned about himself while he secretly watched the De Lacey family. Explore how Shelley presents the theme of isolation and its destructive effects on the creature and on Victor Frankenstein, in this extract and in the novel as a whole.',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: FRANKENSTEIN_EXTRACT_02,
            extractSource: FRANKENSTEIN_EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Shelley presents isolation as something the creature learns, and the learning itself wounds him. The extract opens with his discovery that people value "high and unsullied descent united with riches", and his question, "And what was I?", turns social knowledge into self-knowledge. The answer is a list of absences: "no money, no friends, no kind of property". Every clause measures him against a society he cannot enter, until he concludes, "I was not even of the same nature as man." Shelley complicates this by giving him physical advantages. He is "more agile than they" and can "subsist upon coarser diet", yet superiority brings no comfort, because "When I looked around, I saw and heard of none like me." The rhetorical question "Was I then a monster, a blot upon the earth, from which all men fled, and whom all men disowned?" shows him adopting the verdict of the people who reject him. Isolation is presented as the source of his monstrousness rather than its result. The next paragraphs make knowledge itself painful: "sorrow only increased with knowledge." He wishes he had "for ever remained in my native wood", a longing for ignorance that reverses the faith in learning which also drives Victor. The simile of knowledge clinging "like a lichen on the rock" makes it a growth that cannot be scraped away, and his realisation that death is the "one means to overcome the sensation of pain" shows isolation turning towards destruction. The repeated "were not for me" places the loving family just out of reach, and the extract ends in self-condemnation: "Miserable, unhappy wretch". Victor\'s isolation mirrors the creature\'s. He works alone in a "solitary chamber, or rather cell", and after William\'s murder and Justine\'s execution he keeps his secret from everyone, so guilt cuts him off from the family he loves. By the end he pursues the creature across the Arctic ice, the two bound together and yet each alone. Shelley suggests that neither is born evil: rejection, secrecy and solitude make both of them destructive.',
              'Grade 6-7':
                'In this extract Shelley shows how isolation makes the creature suffer. He asks "And what was I?" and realises that he has "no money, no friends, no kind of property". He calls himself "a monster, a blot upon the earth", which shows that he has started to see himself the way humans see him. Learning makes him unhappier: he says that "sorrow only increased with knowledge" and wishes he had stayed in the woods. He watches the cottagers\' family life, but their kind words "were not for me", which shows he is shut out from love. This isolation leads him to think of death as the only escape from pain. Victor is isolated too, because he works on his experiment alone and then keeps it secret, which makes him ill and guilty. Shelley suggests that isolation is destructive for both characters and that people need love and company to be good.',
              'Grade 4-5':
                'Shelley shows that isolation makes the creature very unhappy. He says he has "no money, no friends" and he wonders whether he is a monster. He watches a family from his hiding place but cannot join them, so he feels left out. He cries "Miserable, unhappy wretch", which shows how sad he is. Victor is also alone because he keeps his experiment secret. Isolation is bad for both of them.',
            },
            markScheme: [
              "Analyse Shelley's language and structure to convey isolation and psychological suffering, such as rhetorical questions, lists and the creature's description of himself",
              'Explore the relationship between isolation and moral degeneration for both Victor and the creature',
              'Consider how Shelley presents isolation as a social as well as an individual problem',
              'Reference specific quotations to support analysis of the theme',
              "Evaluate the extent to which isolation determines the characters' actions and fates",
            ],
          },
          {
            id: 'pride-prejudice-q1',
            questionNumber: 4,
            questionText:
              "Read the extract from Chapter 34 of Pride and Prejudice below. Mr Darcy has called on Elizabeth, who is alone at the Parsonage at Hunsford, and proposes to her. How does Austen present Elizabeth Bennet's character and her views on marriage in this extract and in the novel as a whole?",
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: PRIDE_AND_PREJUDICE_EXTRACT_02,
            extractSource: PRIDE_AND_PREJUDICE_EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Austen presents Elizabeth as a woman whose judgement cannot be bought, and she shows it by letting us hear Darcy\'s proposal largely through Elizabeth. His opening, "In vain have I struggled. It will not do. My feelings will not be repressed", is a speech about himself: the short sentences sound passionate, but they present his love as something that has defeated his better judgement. Austen then moves his words into reported speech, filtered through Elizabeth\'s view: "He spoke well; but there were feelings besides those of the heart to be detailed". His "sense of her inferiority" and "the family obstacles" are "dwelt on", and the irony is that a proposal becomes a list of reasons not to marry her. Elizabeth\'s response is emotionally honest. She is not "insensible to the compliment of such a man\'s affection", and she is "at first sorry for the pain he was to receive", so Austen does not make her cold. But her "intentions did not vary for an instant", and "his subsequent language" turns her pity to anger: she "lost all compassion in anger". When she then sees that "he had no doubt of a favourable answer", it can "only exasperate farther". That certainty is the point: Darcy assumes that a woman of her position will accept wealth and rank. Her reply exposes the conventions of courtship. She observes that "it is, I believe, the established mode to express a sense of obligation", and then declines to perform it: "if I could feel gratitude, I would now thank you. But I cannot". The balanced, formal syntax shows self-control, while "I have never desired your good opinion" coolly rejects the idea that she should feel flattered. The extract reveals Elizabeth\'s belief that marriage should rest on respect and affection, not gratitude, rank or security. She has already refused Mr Collins, whose offer would have made her mistress of Longbourn, the family home that is entailed on him, and she accepts Darcy only when both have changed: he has learned humility and she has recognised her own prejudice. Charlotte Lucas, who marries Collins for "a comfortable home", shows the choice Elizabeth will not make. Austen\'s heroine is radical not because she rejects marriage, but because she insists on choosing it.',
              'Grade 6-7':
                'Elizabeth is presented as honest and independent. Darcy tells her "how ardently I admire and love you", but he also dwells on "her inferiority" and her family, so his proposal is insulting as well as loving. Elizabeth is not heartless: at first she is "sorry for the pain he was to receive". However, his "subsequent language" makes her angry, and she is angrier still when she sees that he has "no doubt of a favourable answer", because he assumes that she will accept a rich man. In her reply she says that if she "could feel gratitude" she would thank him, "But I cannot". This shows that she will not pretend to feel something she does not. The extract shows that Elizabeth thinks marriage should be based on love and respect, not money or status. She would rather refuse a wealthy man than marry someone she does not respect, which was a brave choice for a woman of her time.',
              'Grade 4-5':
                'Elizabeth is shown as brave because she refuses Darcy\'s proposal. Darcy says he loves her, but he also thinks her family is beneath him. Elizabeth gets angry because he talks about her family being beneath him and is sure she will say yes. She tells him "I have never desired your good opinion", which shows she is not flattered by his proposal. She thinks marriage should be about love and respect, not money. Most women would accept a rich man, but she refuses.',
            },
            markScheme: [
              "Analyse Austen's presentation of Elizabeth through dialogue, narrative voice and the move from Darcy's own words to reported speech",
              "Explore how the extract reflects Elizabeth's values and her agency as a woman without fortune",
              "Consider Austen's critique of marriage for money, rank or obligation in the context of the period",
              "Reference specific quotations that reveal Elizabeth's character and views",
              "Evaluate the significance of the refusal in the context of the novel's broader themes, including her refusal of Mr Collins and her later acceptance of Darcy",
            ],
          },
          {
            id: 'sign-of-four-q1',
            questionNumber: 5,
            questionText:
              'Read the extract from Chapter 1 of The Sign of Four below. Watson has handed Holmes a watch that recently came into his possession and asked him what it reveals about its late owner. Starting with this extract, explore how Conan Doyle presents the relationship between Sherlock Holmes and Dr Watson. To what extent does their relationship strengthen the novel as a whole?',
            marks: 30,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            extract: SIGN_OF_FOUR_EXTRACT_01,
            extractSource: SIGN_OF_FOUR_EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Conan Doyle uses this extract to show that the partnership depends on a difference of temperament as much as of intellect. Watson has handed over the watch as a test, meant, he admits earlier in the chapter, as "a lesson against the somewhat dogmatic tone" Holmes sometimes takes. Holmes\'s deductions arrive as calm, confident statements, such as "The date of the watch is nearly fifty years back" and "Jewelry usually descends to the eldest son", and the brother\'s decline is delivered in the same level tone: "taking to drink, he died. That is all I can gather." Watson\'s reaction turns the scene: "I sprang from my chair and limped impatiently about the room with considerable bitterness in my heart." The limp recalls the Jezail bullet wound from Afghanistan that he mentions earlier in the chapter, a reminder that Watson is a man with a body and a history, and his accusation is unusually sharp: "It is unkind, and, to speak plainly, has a touch of charlatanism in it." Because Watson narrates, we feel his hurt from the inside, and Holmes is seen, for once, from the position of someone he has wounded. Holmes\'s reply is the key to their relationship. He answers "kindly", apologises and explains: "Viewing the matter as an abstract problem, I had forgotten how personal and painful a thing it might be to you." Conan Doyle presents Holmes not as cruel but as a mind so absorbed in reasoning that feeling has to be supplied from outside, and Watson supplies it. Even Holmes\'s modesty, "I could only say what was the balance of probability", reminds Watson and the reader that his method is reasoning, not magic. This dynamic strengthens the whole novel. Watson\'s admiration and occasional resentment give the reader someone to identify with, and because he understands less than Holmes, Conan Doyle can withhold solutions until Holmes explains them. Watson also carries the novel\'s romance: his love for Mary Morstan is set against Holmes\'s view, at the end, that love is "opposed to that true cold reason which I place above all things". Holmes supplies the reasoning, Watson the feeling and the telling, and the novel needs both.',
              'Grade 6-7':
                'Holmes and Watson\'s relationship is important in this extract. Holmes reads the watch like a puzzle and states that its owner, Watson\'s brother, was untidy and, "taking to drink, he died". Watson is hurt and angry, calls this "unkind" and even accuses Holmes of "charlatanism". This shows that Watson has strong feelings while Holmes thinks only about the problem. Holmes then apologises "kindly" and admits he had "forgotten how personal and painful a thing it might be". This shows that he does care about Watson, even if he does not always show it. Because Watson tells the story, readers share his reactions and learn about the case as he does. Their different personalities make the narrative more interesting: Holmes gives the clever reasoning and Watson gives the human feeling.',
              'Grade 4-5':
                'Holmes and Watson are friends, but they are very different. Holmes works out that the watch belonged to Watson\'s brother, who drank too much. Watson gets upset and says Holmes is being "unkind". Holmes says sorry and explains that he was thinking of it as a problem. This shows that Holmes is clever but forgets about people\'s feelings, while Watson is more emotional. Watson tells the story, so readers find things out when he does. Their friendship makes the story more interesting.',
            },
            markScheme: [
              'Analyse how Conan Doyle develops the relationship between Holmes and Watson through dialogue, action and first-person narration',
              'Explore the narrative functions of their relationship, including perspective, emotional engagement and control of information',
              'Consider how Watson serves as narrator and how this affects the presentation of both men',
              'Evaluate whether their relationship is one of dependence or of complementary strengths',
              "Reference specific textual evidence to support claims about the relationship's effect on the narrative",
            ],
          },
        ],
      },
    ],
  },
]
