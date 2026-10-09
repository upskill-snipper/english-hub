// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * Five OCR GCSE English Literature mock papers, each set as OCR sets J352/02,
 * Exploring poetry and Shakespeare. All five are live: ocrLitPapers is in
 * allMockExamPapers and the mock-exam pages serve them.
 *
 * REBUILT 9 OCTOBER 2026. WHAT WAS WRONG. Each paper was labelled J352/01, the
 * other component, and ran 120 minutes for 120 marks in three sections:
 * Macbeth as two 20-mark questions; a 40-mark "Poetry Across Time" comparison
 * of two poems the site had written itself and labelled "Original
 * composition"; and an unseen section of 24 and 16 marks. OCR sets none of it.
 *   - The J352 specification, Version 3.0 (November 2025), page 16: J352/02 is
 *     a closed-text paper of 2 hours and 80 marks. Section A, Poetry across
 *     time, 40 marks: the student studies one themed cluster of OCR's
 *     anthology, Towards a World Unknown, and answers one question in two
 *     parts, (a) comparing a named poem from the anthology with an unseen poem
 *     and (b) a related question on a different anthology poem of their own
 *     choice. Section B, Shakespeare, 40 marks: one question on the set play,
 *     from a choice of an extract-based question, making links to the whole
 *     text, or a discursive one.
 *   - OCR's J352/02 mark scheme, June 2018, gives each question's weighting as
 *     a share of the GCSE; on this 80-mark paper 1% is 1.6 marks. Part (a) is
 *     AO1 8 and AO2 12, AO2 dominant; part (b) AO1 10 and AO2 10; Section B
 *     AO1 14, AO2 14, AO3 8 and AO4 4, with AO1 to AO3 marked together out of
 *     36 and AO4 on a grid of its own. Section A assesses no AO3 and no AO4.
 *     Its question 8 is an extract-based Macbeth question in the form used
 *     here: "Explore how Shakespeare presents ... Refer to this extract from
 *     Act 1 Scene 7 and elsewhere in the play", for 36 marks and 4 for SPaG.
 * The marking corpus's ocr-lit-component02 (src/lib/marking/mark-schemes/
 * ocr-lit.ts) has the same three questions and tariffs, and the inline
 * feedback now marks each answer here against its own question there. Under
 * the J352/01 label the papers resolved to the other component's scheme,
 * matched none of its questions, and every answer got general feedback.
 *
 * WHAT EACH PAPER NOW IS. Code J352/02, 120 minutes, 80 marks, two sections.
 *   - Section A, Poetry across time, one cluster. Part (a), 20 marks, prints a
 *     named poem from the anthology and an unseen poem and asks for a
 *     comparison; its extract carries both poems, because the mock-exam page
 *     shows only a section's first extract. Part (b), 20 marks, asks about one
 *     other poem from the same cluster, chosen by the student and quoted from
 *     memory, so the paper prints nothing for it.
 *   - Section B, Shakespeare: one extract-based Macbeth question of 40 marks,
 *     4 of them for spelling, punctuation and grammar, on the extract each
 *     paper already printed. The extracts are unchanged (see 27 September
 *     below). Each paper's two Macbeth questions became this one, and their
 *     model answers were reworked into one essay per grade.
 *   Paper 01, Love and Relationships: Bright Star (John Keats) with Snow Globe;
 *     the part (b) answers choose Now (Robert Browning).
 *   Paper 02, Conflict: The Destruction of Sennacherib (Lord Byron) with The
 *     Demolition; part (b), Envy (Mary Lamb).
 *   Paper 03, Youth and Age: Midnight on the Great Western (Thomas Hardy) with
 *     Kitchen at Five AM; part (b), Holy Thursday (William Blake).
 *   Paper 04, Love and Relationships: A Song (Helen Maria Williams) with Tidal;
 *     part (b), Bright Star.
 *   Paper 05, Conflict: Envy with February, Walking the Dog; part (b), The
 *     Destruction of Sennacherib.
 *
 * THE ANTHOLOGY POEMS. All seven are in the anthology as OCR revised it for
 * first teaching in September 2022 (src/lib/board/ocr-anthology.ts records
 * the revision; none of the seven was removed), and every poet died before
 * 1956, so each poem is out of UK copyright and may be reproduced whole: the
 * five named poems are printed here, and the two that are only ever chosen in
 * part (b) are held whole in the test named below, which checks the answers'
 * quotations of them. The text is OCR's, because that is what the student is
 * given: Towards a World Unknown, updated edition, September 2020, the only
 * edition held. The 2022 revision kept these poems; whether it reprinted any
 * with a change of punctuation could not be checked. On 9 October 2026 each
 * was read from the PDF's text layer, character by character, and from images
 * of its page for the stanza breaks, checked again line by line against a
 * second extraction (xpdf's pdftotext), and compared with Project Gutenberg:
 *   - Bright Star (PDF page 10): Sidney Colvin, Life of John Keats (#36356),
 *     word for word; OCR ends line 1 with a dash where Colvin has a comma.
 *   - The Destruction of Sennacherib (page 23): The Works of Lord Byron, Vol. 3
 *     (#21811), word for word; OCR has commas for that edition's dashes in
 *     lines 12, 19 and 20. The repository's other copy, on the Edexcel revision
 *     page, is Pearson's printing ("wither'd", "pass'd"), and was not used.
 *   - Midnight on the Great Western (page 37): Moments of Vision (#3255), the
 *     same in every word and stop.
 *   - A Song (page 9): Poems (1786), Vol. I (#11054); OCR modernises
 *     "gen'rous", "ask'd" and "dang'rous", and puts a semicolon after "flies"
 *     for a colon.
 *   - Envy (page 21): The Works of Charles and Mary Lamb, Vol. 3 (#10130) and
 *     Poetry for Children (#68359); every word is in one or the other, and OCR
 *     modernises "wish'd" and "smell'd".
 *   - Now (page 10, a part (b) choice): Complete Poetic and Dramatic Works
 *     (#50954), word for word; OCR has no comma after "ignore" in line 3.
 *   - Holy Thursday (page 34, a part (b) choice): Songs of Innocence and of
 *     Experience (#1934), word for word; OCR has three commas fewer in line 2,
 *     and opens "‘Twas" with a turned mark where Gutenberg has an apostrophe.
 * Where they differ these papers follow OCR. A Song keeps its stanza
 * numerals; indentation is not reproduced, because the page does not render
 * it. Holy Thursday is a part (b) choice and never printed, because
 * scripts/check-mock-exam-extracts.mjs holds any passage labelled as Songs of
 * Innocence to Gutenberg's punctuation, which OCR's line 2 does not follow.
 * Not used: Emily Brontë's Love and Friendship and Anne Brontë's The Bluebell,
 * which are in the anthology and out of copyright but on neither Project
 * Gutenberg nor this repository, so OCR's text could not be cross-checked;
 * and Dickinson's There's a Certain Slant of Light, which OCR prints from
 * Johnson's edition, under Harvard's copyright.
 *
 * THE UNSEEN POEMS are five of the ten this file already printed, written for
 * these papers and attributed to no one; each is paired with a named poem on a
 * shared subject. The other five, the five "anthology" compositions of the old
 * Section B, and Section C are removed.
 *
 * THE SUGGESTED TIMES are OCR's: its June 2019 J352/02 question paper advises
 * "about 45 minutes on part a) and 30 minutes on part b)" under each cluster's
 * question, and "about 45 minutes on this section" for Shakespeare (checked 9
 * October 2026; they also match OCR_POETRY_EXAM in
 * src/lib/board/ocr-anthology.ts). NOT VERIFIED: the level wording in the mark
 * schemes is the site's own paraphrase; only the bands' marks are OCR's.
 *
 * src/__tests__/ocr-lit-a-quotes-the-real-text.test.ts pins each paper's
 * shape, holds every named and chosen poem to OCR's cluster lists and to a poet
 * who died before 1956, and holds every quotation to the words, stops and line
 * breaks of what it quotes: the printed poems, the chosen poem as OCR prints
 * it, the Macbeth extract, or one scene of the held edition. Run node
 * scripts/check-mock-exam-extracts.mjs --file ocr-lit-a after any change here,
 * and that test.
 *
 * THE MACBETH EXTRACTS, AND WHAT WAS FIXED ON 27 SEPTEMBER 2026. Kept as the
 * record of what broke. It describes the papers as they then were, with two
 * Macbeth questions each and fifteen specially written poems.
 *
 * The five Macbeth extracts were typed in, not cut from an edition, and the
 * labels named none. scripts/check-mock-exam-extracts.mjs (26 September 2026)
 * found that no line was invented, but that none of the five was the text of
 * the edition this site holds: only 20% (Act 1 Scene 5), 25% (5.5), 41.7%
 * (2.1), 46.2% (5.3) and 60% (1.7) of their sentences were word for word the
 * held edition's.
 *
 *   - The rest were another modern edition's punctuation, elisions and
 *     accents ("heat-oppressèd", "o' th'", "curtained", "Alarumed",
 *     "Prithee", "do 't"), and two readings differed: "you murd'ring
 *     ministers", where the held edition reads "your" (the site follows it,
 *     as the Macbeth guide does), and Seyton's "What's your gracious
 *     pleasure?" printed as "What is".
 *   - The Act 5 Scene 3 extract dropped Macbeth's last call of "Seyton!" and
 *     Seyton's entrance with no mark of the cut, joining the end of the
 *     speech straight to Seyton's first line.
 *   - The model answers quoted the extracts in those forms ("wither'd" as
 *     "withered", "hack'd" as "hacked", "dress'd", "honour'd"), and quoted
 *     the rest of the play in words it does not use: "unseamed ... th'
 *     chops", "they placed a fruitless crown", "look like th' innocent
 *     flower", "wash this blood clean?". One gave Lady Macbeth's "A little
 *     water clears us of this deed" to Macbeth. One read the dagger as
 *     "sensible / To feeling as to sight", which is the question Macbeth asks
 *     because it is not. The Act 5 Scene 5 answers quoted "Liar and slave!",
 *     which the extract did not contain, while calling Macbeth "beyond
 *     caring" and resigned at the news that provokes it. Others called
 *     Tarquin a king, had "the guards" pray in Act 2 Scene 2 (two sleepers
 *     in the castle do), said Macbeth tells himself "False face must hide
 *     what the false heart doth know" (he says it to his wife), and heard a
 *     feminine ending leave "nothing" unstressed. One mark scheme described
 *     AO4 as exploring interpretations; AO4 is spelling, punctuation,
 *     vocabulary and sentence structures.
 *
 * Every extract is now cut by script from the held edition,
 * src/data/full-texts/macbeth.ts (Project Gutenberg #1533), with playPassage()
 * from src/lib/study-guides/passage.ts, never typed; the call that cut each
 * one is in the comment above it, so it can be cut again. playPassage() joins
 * lines and speeches with " / "; here each speech is set out as this file
 * always set them, the speaker's name on a line of its own and a verse line to
 * a line, and only those separators were changed. Each extract comes from the
 * scene its label named, on the same subject, and runs to whole speeches, so
 * no cut is hidden: the dagger soliloquy runs on to the bell, Act 1 Scene 7
 * to "Have done to this", Act 5 Scene 5 opens on the Queen's death and ends
 * at "a moving grove", and Act 5 Scene 3 keeps the calls of "Seyton!". Each
 * label now names the edition.
 *
 * Every quotation in the Macbeth model answers was then checked by script: a
 * quotation from the extract is the extract's words, and one from the rest of
 * the play (the second question on each paper then asked about the whole
 * play) is the held edition's words, in the scene the answer names. The only
 * differences left are the ones any essay makes: a capital changed at the
 * start of a quotation, straight apostrophes for curly, and single marks for
 * the edition's double around a quotation inside a quotation. The analysis was
 * corrected where it was not true of the words quoted, and the answers now
 * use what the longer extracts add (the bell, the Queen's death, "Liar, and
 * slave!", the calls of "Seyton!", "had I so sworn as you / Have done to
 * this").
 *
 * A SECOND READING, the same day, found what that pass left:
 *
 *   - The Macbeth answers still said things the words do not. Tarquin was
 *     still one of the "rulers destroyed by their own appetites" (he was a
 *     king's son; his crime ended the monarchy). "Moves like a ghost" was read
 *     as Macbeth's own movement; it is the personified murder's. Banquo's
 *     "why do you start" was called suspicion. Macbeth's "Liar, and slave!"
 *     was called a threat, and his "Well, say, sir" resignation. "Nothing"
 *     was said to come at the end of the extract, which now runs on to the
 *     Messenger. Lady Macbeth's "What beast was't, then" was said to argue that
 *     his ambition was the beastly thing, when her next line is "When you
 *     durst do it, then you were a man". "I have given suck" was called the
 *     couple's hypothetical future. Ambition was "a horse" in "I have no spur"
 *     (the horse is his intent). Each is now what the text says.
 *   - The poetry answers, which nothing had checked, misquoted the poems: a
 *     line dropped from the middle of "shadows wore the brighter face",
 *     "A syllable. / A colour." as "a syllable, / a colour", "I read the lack"
 *     as "reads the lack", "built over" as if the poem ran so ("what we've
 *     built our brightness over"), and three quotations across a line or
 *     stanza break with none marked.
 *     Two answers called lines a "final couplet" that are not the last two.
 *   - Every Section B extract printed each poem's title twice, because the
 *     poem constants already begin with their titles.
 *
 * The test then held every quotation in all 25 questions to the words, stops
 * and line breaks of the text it quotes, and compared the Macbeth extracts
 * with the edition speaker by speaker. The fifteen poems were labelled as
 * original compositions and attributed to no one, so there was no text to
 * check them against; only the answers' quotations of them were checked.
 */

// ─── Shakespeare Extracts (Macbeth, Project Gutenberg #1533, held) ─────────

// Act 2 Scene 1, the dagger soliloquy, from the servant's dismissal to the bell. Cut with
// playPassage(macbethText, 'actii-scenei', 'Go bid thy mistress', 'heaven or to hell').
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
  'William Shakespeare, Macbeth, Act 2 Scene 1 (text: Project Gutenberg #1533)'

// Act 1 Scene 5, Lady Macbeth dismisses the messenger and calls on the spirits. Cut with
// playPassage(macbethText, 'acti-scenev', 'Give him tending', 'Hold, hold').
const MACBETH_EXTRACT_02 = `LADY MACBETH
Give him tending.
He brings great news.

[Exit Messenger.]

The raven himself is hoarse
That croaks the fatal entrance of Duncan
Under my battlements. Come, you spirits
That tend on mortal thoughts, unsex me here,
And fill me, from the crown to the toe, top-full
Of direst cruelty! make thick my blood,
Stop up th’ access and passage to remorse,
That no compunctious visitings of nature
Shake my fell purpose, nor keep peace between
Th’ effect and it! Come to my woman’s breasts,
And take my milk for gall, your murd’ring ministers,
Wherever in your sightless substances
You wait on nature’s mischief! Come, thick night,
And pall thee in the dunnest smoke of hell
That my keen knife see not the wound it makes,
Nor heaven peep through the blanket of the dark
To cry, “Hold, hold!”`

const MACBETH_EXTRACT_02_SOURCE =
  'William Shakespeare, Macbeth, Act 1 Scene 5 (text: Project Gutenberg #1533)'

// Act 5 Scene 5, from the Queen's death to the moving wood. Cut with
// playPassage(macbethText, 'actv-scenev', 'The Queen, my lord, is dead', 'a moving grove').
const MACBETH_EXTRACT_03 = `SEYTON
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
Signifying nothing.

[Enter a Messenger.]

Thou com’st to use thy tongue; thy story quickly.

MESSENGER
Gracious my lord,
I should report that which I say I saw,
But know not how to do’t.

MACBETH
Well, say, sir.

MESSENGER
As I did stand my watch upon the hill,
I look’d toward Birnam, and anon, methought,
The wood began to move.

MACBETH
Liar, and slave!

MESSENGER
Let me endure your wrath, if’t be not so.
Within this three mile may you see it coming;
I say, a moving grove.`

const MACBETH_EXTRACT_03_SOURCE =
  'William Shakespeare, Macbeth, Act 5 Scene 5 (text: Project Gutenberg #1533)'

// Act 5 Scene 3, Macbeth, Seyton and the armour. Cut with
// playPassage(macbethText, 'actv-sceneiii', 'Take thy face hence', 'How does your patient').
const MACBETH_EXTRACT_04 = `MACBETH
Take thy face hence.

[Exit Servant.]

Seyton!—I am sick at heart,
When I behold—Seyton, I say!—This push
Will cheer me ever or disseat me now.
I have liv’d long enough: my way of life
Is fall’n into the sere, the yellow leaf;
And that which should accompany old age,
As honour, love, obedience, troops of friends,
I must not look to have; but, in their stead,
Curses, not loud but deep, mouth-honour, breath,
Which the poor heart would fain deny, and dare not.
Seyton!—

[Enter Seyton.]

SEYTON
What’s your gracious pleasure?

MACBETH
What news more?

SEYTON
All is confirm’d, my lord, which was reported.

MACBETH
I’ll fight till from my bones my flesh be hack’d.
Give me my armour.

SEYTON
’Tis not needed yet.

MACBETH
I’ll put it on.
Send out more horses, skirr the country round;
Hang those that talk of fear. Give me mine armour.—
How does your patient, doctor?`

const MACBETH_EXTRACT_04_SOURCE =
  'William Shakespeare, Macbeth, Act 5 Scene 3 (text: Project Gutenberg #1533)'

// Act 1 Scene 7, Macbeth's refusal and Lady Macbeth's answer. Cut with
// playPassage(macbethText, 'acti-scenevii', 'We will proceed no further', 'Have done to this').
const MACBETH_EXTRACT_05 = `MACBETH
We will proceed no further in this business:
He hath honour’d me of late; and I have bought
Golden opinions from all sorts of people,
Which would be worn now in their newest gloss,
Not cast aside so soon.

LADY MACBETH
Was the hope drunk
Wherein you dress’d yourself? Hath it slept since?
And wakes it now, to look so green and pale
At what it did so freely? From this time
Such I account thy love. Art thou afeard
To be the same in thine own act and valour
As thou art in desire? Wouldst thou have that
Which thou esteem’st the ornament of life,
And live a coward in thine own esteem,
Letting “I dare not” wait upon “I would,”
Like the poor cat i’ th’ adage?

MACBETH
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
Have done to this.`

const MACBETH_EXTRACT_05_SOURCE =
  'William Shakespeare, Macbeth, Act 1 Scene 7 (text: Project Gutenberg #1533)'

// ─── Anthology poems, as OCR prints them ─────────────────────────────────────
//
// Added 9 October 2026 (see the docblock above). Each is copied from Towards a
// World Unknown, updated edition, September 2020, line for line and mark for
// mark: the dashes, curly apostrophes and stanza breaks are OCR's. The first
// line is the title and the second the poet, as the extract shows them. Each
// poet died before 1956, so each poem is out of UK copyright and printed whole.
// The label names the poet's dates as OCR prints them under the poem.

// Paper 1, Love and Relationships. PDF page 10. Keats died in 1821.
const BRIGHT_STAR = `Bright Star
by John Keats

Bright star, would I were stedfast as thou art–
Not in lone splendour hung aloft the night
And watching, with eternal lids apart,
Like nature’s patient, sleepless Eremite,
The moving waters at their priestlike task
Of pure ablution round earth’s human shores,
Or gazing on the new soft-fallen mask
Of snow upon the mountains and the moors–
No – yet still stedfast, still unchangeable,
Pillow’d upon my fair love’s ripening breast,
To feel for ever its soft fall and swell,
Awake for ever in a sweet unrest,
Still, still to hear her tender-taken breath,
And so live ever – or else swoon to death.`

const BRIGHT_STAR_SOURCE =
  'John Keats (1795-1821), "Bright Star", as printed in Towards a World Unknown, OCR\'s GCSE English Literature poetry anthology (updated edition, September 2020), Love and Relationships cluster. Out of UK copyright.'

// Paper 2, Conflict. PDF page 23. Byron died in 1824.
const SENNACHERIB = `The Destruction of Sennacherib
by Lord Byron

The Assyrian came down like the wolf on the fold,
And his cohorts were gleaming in purple and gold;
And the sheen of their spears was like stars on the sea,
When the blue wave rolls nightly on deep Galilee.

Like the leaves of the forest when Summer is green,
That host with their banners at sunset were seen:
Like the leaves of the forest when Autumn hath blown,
That host on the morrow lay withered and strown.

For the Angel of Death spread his wings on the blast,
And breathed in the face of the foe as he passed;
And the eyes of the sleepers waxed deadly and chill,
And their hearts but once heaved, and for ever grew still!

And there lay the steed with his nostril all wide,
But through it there rolled not the breath of his pride;
And the foam of his gasping lay white on the turf,
And cold as the spray of the rock-beating surf.

And there lay the rider distorted and pale,
With the dew on his brow, and the rust on his mail:
And the tents were all silent, the banners alone,
The lances unlifted, the trumpet unblown.

And the widows of Ashur are loud in their wail,
And the idols are broke in the temple of Baal;
And the might of the Gentile, unsmote by the sword,
Hath melted like snow in the glance of the Lord!`

const SENNACHERIB_SOURCE =
  'Lord Byron (1788-1824), "The Destruction of Sennacherib", as printed in Towards a World Unknown, OCR\'s GCSE English Literature poetry anthology (updated edition, September 2020), Conflict cluster. Out of UK copyright.'

// Paper 3, Youth and Age. PDF page 37. Hardy died in 1928.
const MIDNIGHT = `Midnight on the Great Western
by Thomas Hardy

In the third-class seat sat the journeying boy,
And the roof-lamp’s oily flame
Played down on his listless form and face,
Bewrapt past knowing to what he was going,
Or whence he came.

In the band of his hat the journeying boy
Had a ticket stuck; and a string
Around his neck bore the key of his box,
That twinkled gleams of the lamp’s sad beams
Like a living thing.

What past can be yours, O journeying boy
Towards a world unknown,
Who calmly, as if incurious quite
On all at stake, can undertake
This plunge alone?

Knows your soul a sphere, O journeying boy,
Our rude realms far above,
Whence with spacious vision you mark and mete
This region of sin that you find you in,
But are not of?`

const MIDNIGHT_SOURCE =
  'Thomas Hardy (1840-1928), "Midnight on the Great Western", as printed in Towards a World Unknown, OCR\'s GCSE English Literature poetry anthology (updated edition, September 2020), Youth and Age cluster. Out of UK copyright.'

// Paper 4, Love and Relationships. PDF page 9. Williams died in 1827.
const A_SONG = `A Song
by Helen Maria Williams

I
No riches from his scanty store
My lover could impart;
He gave a boon I valued more —
He gave me all his heart!

II
His soul sincere, his generous worth,
Might well this bosom move;
And when I asked for bliss on earth,
I only meant his love.

III
But now for me, in search of gain
From shore to shore he flies;
Why wander riches to obtain,
When love is all I prize?

IV
The frugal meal, the lowly cot
If blest my love with thee!
That simple fare, that humble lot,
Were more than wealth to me.

V
While he the dangerous ocean braves,
My tears but vainly flow:
Is pity in the faithless waves
To which I pour my woe?

VI
The night is dark, the waters deep,
Yet soft the billows roll;
Alas! at every breeze I weep —
The storm is in my soul.`

const A_SONG_SOURCE =
  'Helen Maria Williams (1761-1827), "A Song", as printed in Towards a World Unknown, OCR\'s GCSE English Literature poetry anthology (updated edition, September 2020), Love and Relationships cluster. Out of UK copyright.'

// Paper 5, Conflict. PDF page 21. Mary Lamb died in 1847.
const ENVY = `Envy
by Mary Lamb

This rose-tree is not made to bear
The violet blue, nor lily fair,
Nor the sweet mignionet:
And if this tree were discontent,
Or wished to change its natural bent,
It all in vain would fret.

And should it fret, you would suppose
It ne’er had seen its own red rose,
Nor after gentle shower
Had ever smelled its rose’s scent,
Or it could ne’er be discontent
With its own pretty flower.

Like such a blind and senseless tree
As I’ve imagined this to be,
All envious persons are:
With care and culture all may find
Some pretty flower in their own mind,
Some talent that is rare.`

const ENVY_SOURCE =
  'Mary Lamb (1764-1847), "Envy", as printed in Towards a World Unknown, OCR\'s GCSE English Literature poetry anthology (updated edition, September 2020), Conflict cluster. Out of UK copyright.'

// ─── Unseen poems, written for these papers ──────────────────────────────────
//
// Five of the ten unseen poems these papers printed before 9 October 2026, kept
// word for word, each now paired with a named poem in part (a). They were
// written for the site, are attributed to no one, and their labels say so.

const UNSEEN_POEM_02 = `February, Walking the Dog

The field is a page someone has erased.
Snow has rubbed out every path,
every hedge-line, every ditch,
and left a blankness I could almost believe

was permanent. The dog runs on ahead,
printing her signature in dots and dashes,
a morse code I will never learn to read,
across the unimproved, immaculate expanse.

I follow. My boots leave their slow vocabulary.
Behind us, two scripts - hers excitable,
mine plodding - narrate different walks
through the same white.

At the stile she waits,
breath clouding, tail metronoming.
She does not care about the emptiness.
She reads the wind. I read the lack.`

const UNSEEN_POEM_02_SOURCE =
  '"February, Walking the Dog": an original composition written for these practice papers. It is not a published poem and has no named poet.'

const UNSEEN_POEM_03 = `Kitchen at Five AM

Before the house wakes I have this -
the kettle's slow ascent to fury,
the window dark enough to hold
my face between the garden and the worry.

The tap drips its patient morse.
The fridge exhales. The clock
does what clocks do: reminds you
that time is not a river but a lock

through which you pass in increments,
each gate a year, a choice, a child.
I made my choices in rooms like this,
half-lit, half-dressed, half-wild

with something I couldn't name then
and still can't now. Ambition? Fear?
The need to be the first awake,
the last to sleep, the one still here.`

const UNSEEN_POEM_03_SOURCE =
  '"Kitchen at Five AM": an original composition written for these practice papers. It is not a published poem and has no named poet.'

const UNSEEN_POEM_04 = `The Demolition

They brought the tower down on a Tuesday,
and we stood in the car park opposite
holding our phones like candles at a vigil,
recording what we couldn't quite commit

to memory alone. The charges blew
in sequence - a necklace of small fires -
and for a moment nothing happened.
Then the building folded. Floors conspired

with gravity, and what had taken years
to build came down in thirteen seconds flat.
The dust rose like a soul departing.
Nobody spoke. We stood. And that was that.

Except it wasn't. For weeks I dreamt
of rooms I'd never entered, hallways lit
by someone else's memory, the slow
percussion of a building learning how to sit.`

const UNSEEN_POEM_04_SOURCE =
  '"The Demolition": an original composition written for these practice papers. It is not a published poem and has no named poet.'

const UNSEEN_POEM_05 = `Tidal

We measure everything against the sea -
the pull of it, the patience, the refusal
to remain where it is placed. My mother
called the ocean "God's rehearsal"

for eternity: the same phrase coming back
and back, reworded every time,
the meaning always just beyond the reach
of anyone who stood along the line

where water meets the land and neither wins.
I sit here in her chair, her blanket on my knees,
and watch the tide erase the afternoon
in slow, considerate degrees.

She said the sea forgives. I think it just forgets.
But either way, the shoreline reappears,
and either way the waves keep coming in
like years, like years, like years.`

const UNSEEN_POEM_05_SOURCE =
  '"Tidal": an original composition written for these practice papers. It is not a published poem and has no named poet.'

const UNSEEN_COMP_02 = `Snow Globe

Inside this dome of glass, a village sleeps
beneath a sky that never clears.
Shake it and the blizzard starts again -
the same storm, circling for years.

My daughter holds it to the light
and marvels at the weather she creates,
the tiny church, the frozen pond,
the figures standing patient at their gates.

She does not know that I bought this
in Prague, the winter everything went wrong -
your hands around a different cup,
your silence lasting just a beat too long.

She shakes it. Snow falls. The village endures.
Some worlds are small enough to save.
I watch the flakes settle on the steeple
and think of all the storms I never gave

a name to. She puts it down. Moves on.
The snow keeps falling after she has gone.`

const UNSEEN_COMP_02_SOURCE =
  '"Snow Globe": an original composition written for these practice papers. It is not a published poem and has no named poet.'

// ─── Papers ──────────────────────────────────────────────────────────────────

export const ocrLitPapers: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1 - Love and Relationships: Bright Star with Snow Globe; Macbeth, Act 2 Scene 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-lit-01',
    board: 'OCR',
    paperNumber: 2,
    title: 'Exploring poetry and Shakespeare',
    subtitle: 'English Literature J352/02',
    code: 'J352/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-lit-01-sec-a',
        title: 'Section A: Poetry across time - Love and Relationships',
        description:
          "Answer BOTH parts of the question. In the exam there is a question on each of the three clusters in OCR's anthology, Towards a World Unknown, and you answer the one you have studied; this practice paper sets Love and Relationships. Part (a) compares a poem from the cluster with an unseen poem, and both are printed below. In part (b) you choose one other poem from the cluster and write about it from memory, because the exam is closed book. You are advised to spend about 45 minutes on part (a) and 30 minutes on part (b).",
        totalMarks: 40,
        suggestedTimeMinutes: 75,
        questions: [
          {
            id: 'ocr-lit-01-q1a',
            questionNumber: 1,
            questionText:
              'Read "Bright Star" by John Keats and "Snow Globe", printed above. "Snow Globe" is an unseen poem written for this paper.\n\n(a) Compare how these poems present the wish to hold on to something precious.\n\nYou should consider:\n- the ideas and attitudes in each poem\n- the tone and atmosphere of each poem\n- the effects of the language and structure the poets use.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            extract: `${BRIGHT_STAR}\n\n---\n\n${UNSEEN_COMP_02}`,
            extractSource: `${BRIGHT_STAR_SOURCE} / ${UNSEEN_COMP_02_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                'Both poems are about wanting to hold on to something. In "Bright Star", Keats wishes he could be as "stedfast" as a star, so that he could stay with the woman he loves for ever. In "Snow Globe", the speaker keeps a snow globe from a time in Prague when "everything went wrong", and watches their daughter play with it.\n\nKeats begins by speaking to the star, which makes it seem like a person he admires. But he does not want to be like the star in every way, because it hangs "in lone splendour" and keeps watch "with eternal lids apart", like a "sleepless Eremite", which is a hermit. He wants to be "still stedfast, still unchangeable" while he is "Pillow’d upon my fair love’s ripening breast". The repetition of "still" shows how badly he wants the moment to last.\n\nIn "Snow Globe", the thing that stays the same is the little world inside the glass. Its village sleeps "beneath a sky that never clears", and when the globe is shaken "the same storm" starts again. The globe is like a memory that keeps coming back. The speaker remembers "your hands around a different cup" and "your silence lasting just a beat too long", details that suggest a relationship going wrong.\n\nThe tone of the two poems is different. Keats sounds passionate and full of longing. The speaker of "Snow Globe" is quiet and sad, and keeps the memory private, because the daughter "does not know" where the globe came from. She only "marvels at the weather she creates", so she enjoys the storm without knowing what it means.\n\nBoth poems end with a couplet. Keats ends "And so live ever – or else swoon to death", which shows he would rather die than lose the moment. "Snow Globe" ends "The snow keeps falling after she has gone", which suggests that the memory goes on even after the daughter has moved on. Keats wants to hold on for ever, but "Snow Globe" shows that holding on to the past can be painful.',
              'Grade 6-7':
                'Both poets present the wish to hold on to something precious, but they see it differently. Keats longs to make a moment of love last for ever, while the speaker of "Snow Globe" holds on to a painful memory and watches a child who can let go.\n\n"Bright Star" opens with an apostrophe to the star: "Bright star, would I were stedfast as thou art". The star stands for permanence, but Keats immediately qualifies his wish. He does not want its "lone splendour" or its endless watching "with eternal lids apart, / Like nature’s patient, sleepless Eremite". The star is constant but isolated, a hermit observing the world from far away. The things it watches are themselves images of purity and change: the sea\'s "priestlike task / Of pure ablution" and the "new soft-fallen mask / Of snow". Keats wants the star\'s constancy without its loneliness.\n\nThe turn comes at "No – yet still stedfast, still unchangeable". The dash and the repeated "still" show him rejecting one kind of permanence and insisting on another. He wants to be "Pillow’d upon my fair love’s ripening breast" for ever, "Awake for ever in a sweet unrest". The oxymoron "sweet unrest" captures the paradox of the wish: love is restless and alive, yet he wants it fixed.\n\n"Snow Globe" presents permanence as something smaller and sadder. The village inside the glass lies "beneath a sky that never clears", and when the globe is shaken "the blizzard starts again - / the same storm, circling for years". The image suggests a memory the speaker cannot escape. The third stanza explains it: the globe was bought "in Prague, the winter everything went wrong", and the details "your hands around a different cup" and "your silence lasting just a beat too long" hint at a love that was failing. Where Keats imagines love held still, this poet shows a love that could not be saved.\n\nThe daughter adds a contrast. She "marvels at the weather she creates" and treats the storm as play. The line "Some worlds are small enough to save" suggests that the speaker can protect the toy village, and perhaps the child\'s innocence, even though a larger world was lost.\n\nStructure supports these ideas. "Bright Star" is a sonnet, and the whole poem is one sentence that reaches its end only in the final couplet, "And so live ever – or else swoon to death": the alternative to lasting love is death. "Snow Globe" breaks into short sentences: "She shakes it. Snow falls. The village endures." The sentence about "storms I never gave / a name to" runs over a stanza break, as if the speaker hesitates to name them, and the final couplet, "The snow keeps falling after she has gone", shows the memory going on after the daughter has moved on. Keats wants to stop time in a moment of love; "Snow Globe" shows a moment that has stopped and goes on repeating, whether the speaker wants it to or not.',
              'Grade 8-9':
                'Both poems imagine something held still, but they reach opposite conclusions about it. For Keats permanence is the highest wish, so long as it is shared; for the speaker of "Snow Globe" it is already a fact, sealed in glass, and closer to a burden. The comparison shows how the same image of the unchanging can be a dream of love or the shape of a memory that will not let go.\n\nKeats\'s sonnet is built on a careful distinction. The opening apostrophe, "Bright star, would I were stedfast as thou art", sets up the star as a model, and the octave then examines what kind of steadfastness the star has. It hangs "in lone splendour", watching "with eternal lids apart, / Like nature’s patient, sleepless Eremite". The religious vocabulary ("Eremite", "priestlike", "ablution") makes the star a hermit performing an endless devotion, but a solitary one. Everything it observes is in motion: the "moving waters" washing "earth’s human shores", the "new soft-fallen mask / Of snow". The star is constant only by standing apart from a world that changes, and that is the steadfastness Keats rejects.\n\nThe turn arrives at the start of line 9: "No – yet still stedfast, still unchangeable". The dash makes the rejection audible, and "still", used twice, means both "always" and "motionless", which is exactly what he asks for. The sestet moves the wish from the sky to the body: "Pillow’d upon my fair love’s ripening breast, / To feel for ever its soft fall and swell". "Ripening" admits that the beloved is growing and changing even as he asks for the moment to stop, and the oxymoron "sweet unrest" concedes that love is restless by nature. One detail turns the octave inside out: the star\'s sleeplessness, which he refused in the "sleepless Eremite", returns as a gift, "Awake for ever", once it is spent on love. Because the whole sonnet is a single sentence, the wish never pauses until the couplet, and the couplet ends in an ultimatum: "And so live ever – or else swoon to death." If the moment cannot last, he would rather it ended him.\n\n"Snow Globe" begins where Keats\'s wish ends, with a world already made permanent. The village lies "beneath a sky that never clears", and shaking the dome only restarts "the same storm, circling for years". Even its people are fixed in waiting: "the figures standing patient at their gates". The word "patient" links them with Keats\'s "patient, sleepless Eremite", but here patience is not devotion; it is the condition of being trapped. The globe works as an image of memory, and the third stanza reveals which memory: it was bought "in Prague, the winter everything went wrong". The two details that follow, "your hands around a different cup" and "your silence lasting just a beat too long", are understated, as if the speaker can still approach the loss only sideways.\n\nThe daughter gives the poem its second perspective. She "marvels at the weather she creates", treating the storm as her own power and pleasure, and the short sentences of the fourth stanza, "She shakes it. Snow falls. The village endures.", are as untroubled as the snow. The line "Some worlds are small enough to save" carries the poem\'s quiet grief: the speaker can keep this miniature world, and perhaps the child\'s innocence, because the world that mattered was not small enough to save. The sentence about "the storms I never gave / a name to" runs across a stanza break, so the unnamed storms spill out of the form that should contain them.\n\nThe endings bring the comparison into focus. Keats\'s couplet imagines permanence or death; the couplet of "Snow Globe" lets the child go free while the memory continues without her: "She puts it down. Moves on. / The snow keeps falling after she has gone." The rhyme of "on" and "gone" sounds final, but the falling snow refuses to finish. Keats asks for a moment that will never change; the speaker of "Snow Globe" has one, and it is a moment not of love but of loss.',
            },
            markScheme: [
              'AO2 (12 marks), the dominant objective: analysis of how each poet uses language, form and structure to create meaning - in these answers, Keats\'s apostrophe to the star, the turn at "No – yet still stedfast" and the sonnet\'s single sentence; the sealed globe, the short sentences and the closing couplet of "Snow Globe"',
              'AO1 (8 marks): an informed personal response to both poems and to the question, with references from both chosen to support it',
              'The two poems must be compared: an answer that discusses only one of them will rarely rise above Level 2 (4-6 marks) and can go no higher than Level 3 (7-10). Part (a) assesses neither context (AO3) nor spelling, punctuation and grammar (AO4)',
              "Top band (18-20): close and finely judged analysis of both poets' methods, with terminology used accurately and to the point; a perceptive, coherent argument; quotations chosen precisely and built into it; and a comparison kept up from beginning to end",
            ],
          },
          {
            id: 'ocr-lit-01-q1b',
            questionNumber: 1,
            questionText:
              '(b) Explore in detail how one other poem from your anthology presents a moment of intense love.\n\nYour poem must come from the Love and Relationships cluster and must not be "Bright Star".\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "Now" by Robert Browning, which is about one intense moment between two lovers.\n\nThe poem begins with a command: "Out of your whole life give but a moment!" The speaker asks the person they love to give just one moment, and to ignore "All of your life that has gone before, / All to come after it". This shows that for the speaker the moment matters more than the whole of the rest of life.\n\nBrowning shows how intense the moment is through his choice of words. The speaker wants everything to be "Merged in a moment", and the list "Thought and feeling and soul and sense" uses "and" again and again to pile up everything a person is. The phrase "In a rapture of rage" is surprising, because rage is usually a negative feeling, but here it shows how strong and wild the love is.\n\nThe speaker knows that the moment is short. It is only "This tick of our life-time’s one moment", like one tick of a clock, and the speaker asks "How long such suspension may linger?" The answer is "The moment eternal – just that and no more", which is a paradox, because a moment cannot normally be eternal. It suggests that love can make a short moment feel as if it lasts for ever.\n\nThe poem is full of dashes, which make it sound breathless and excited, as if the speaker cannot stop to finish a sentence. The last line is a list of physical actions, "While cheeks burn, arms open, eyes shut and lips meet!", which builds up to a kiss.\n\nOverall, Browning presents a moment of intense love as something so powerful that it seems to stop time, even though the speaker knows it cannot last.',
              'Grade 6-7':
                'In "Now", Robert Browning presents a moment of intense love as something that tries to defeat time. The speaker asks the beloved to give up past and future for a single instant, and the poem\'s breathless form makes that instant feel overwhelming, while also admitting that it cannot last.\n\nThe opening line is an imperative: "Out of your whole life give but a moment!" The word "but" (meaning "only") makes the request sound modest, yet the next lines show how much it costs. The beloved must set aside "All of your life that has gone before, / All to come after it", so that "you make perfect the present". Browning presents love as a way of escaping time: the moment is made "perfect" because nothing before or after it is allowed to matter.\n\nThe language of the middle of the poem is extreme. The moment is reached "In a rapture of rage, for perfection’s endowment", an unexpected phrase that joins ecstasy with fury, and everything the beloved is gets "Merged in a moment": "Thought and feeling and soul and sense". The polysyndeton piles up mind, emotion, spirit and body until they cannot be separated. The physical intimacy is described directly, "You around me for once, you beneath me, above me", where the prepositions surround the speaker as completely as the beloved does.\n\nBrowning keeps reminding the reader of time even while the speaker tries to forget it. The speaker is "sure that despite of time future, time past" the beloved loves them for "This tick of our life-time’s one moment". The "tick" of a clock is tiny compared with a whole "life-time", which makes the moment both precious and fragile. The question "How long such suspension may linger?" shows the speaker knows it will end, and the answer is a paradox: "The moment eternal – just that and no more". It is eternal, and yet "no more" than a moment.\n\nThe form suits the subject. The poem is fourteen lines long, like a sonnet, but its rhymes are irregular and it is broken up by dashes, so it reads as if the speaker is out of breath. The last line is a rush of short clauses, "While cheeks burn, arms open, eyes shut and lips meet!", ending on the kiss. The verb "clutch" in "When ecstasy’s utmost we clutch at the core" suggests holding on desperately, which sums up the poem: the lovers grab at the centre of the moment because they know they cannot keep it.',
              'Grade 8-9':
                'Browning\'s "Now" presents a moment of intense love as an act of defiance against time, and also as an admission of time\'s power. The speaker demands a single instant in which past and future are cancelled, and the poem\'s form strains to make that instant last; yet almost every image of the moment is also an image of its brevity. Love here is intense precisely because it is momentary.\n\nThe poem opens on an imperative that is also a bargain: "Out of your whole life give but a moment!" The modest "but" disguises an enormous demand, which the following lines spell out. The beloved is to set aside "All of your life that has gone before, / All to come after it", so that "you make perfect the present". The present can be "perfect", in the old sense of complete, only if it is cut off from everything else. Browning presents intense love not as a feeling that grows over a life but as an instant that sacrifices the life around it.\n\nThe language of the second movement makes the moment almost violent. It is entered "In a rapture of rage, for perfection’s endowment", where alliteration joins "rapture" and "rage" as if ecstasy and fury were one force. The whole self is then "Merged in a moment": "Thought and feeling and soul and sense". The polysyndeton refuses to rank intellect, emotion, spirit and the senses, and the alliterating "soul and sense" fuses the highest and the most physical of them. The embrace that follows, "You around me for once, you beneath me, above me", is built from prepositions alone, so that the beloved occupies every position around the speaker; "for once" quietly concedes that this has not happened before and may not happen again.\n\nAt the centre of the poem is a single sentence that runs from the second line to the tenth and resolves only on its exclamation: "This tick of our life-time’s one moment you love me!" Its syntax has been held in suspense by dashes and qualifications, so the reader experiences the delay that makes the arrival intense. The image of the "tick" sets the smallest unit of measured time against the span of a "life-time", and the clause "despite of time future, time past" names time even as it defies it.\n\nThe final movement turns this tension into paradox. The speaker asks, "How long such suspension may linger?", and "suspension" is exact: the moment hangs, like the long sentence, outside the ordinary flow. The answer, "The moment eternal – just that and no more", claims eternity and limits it in the same breath. The grasping in "When ecstasy’s utmost we clutch at the core" suggests the lovers know they hold the moment only by holding on hard.\n\nForm enacts all of this. The poem has fourteen lines, the length of a sonnet, the traditional form of love poetry, but it abandons the sonnet\'s order: its rhymes return irregularly ("moment" with "endowment", "before" and "ignore" with "more" and "core"), and the dashes interrupt the lines until they read like breathing. The final line accelerates into four short clauses, "While cheeks burn, arms open, eyes shut and lips meet!", with the kiss placed last, as the climax towards which the poem has been moving. Browning\'s moment of intense love is therefore both triumphant and fragile: it can feel eternal only because it is, in his own words, "just that and no more".',
            },
            markScheme: [
              'AO1 (10 marks): an informed personal response to the chosen poem and to the question, supported by references quoted from memory',
              'AO2 (10 marks): analysis of how the poet uses language, form and structure - in these answers, Browning\'s opening imperative, the polysyndeton of "Thought and feeling and soul and sense", the paradox of "The moment eternal", and the dashes and irregular rhymes of his fourteen lines',
              'AO1 and AO2 carry equal weight. The poem must come from the Love and Relationships cluster and must not be "Bright Star": a poem from another cluster earns no marks. Part (b) assesses neither context (AO3) nor AO4',
              "Top band (18-20): a perceptive, coherent reading of the chosen poem as a whole, precise references built into the argument, and detailed analysis of the poet's methods in accurate terminology",
            ],
          },
        ],
      },
      {
        id: 'ocr-lit-01-sec-b',
        title: 'Section B: Shakespeare - Macbeth',
        description:
          'Answer ONE question. In the exam there are two questions on each set play, one based on an extract and one discursive, and you answer one of them; this practice paper sets the extract-based question on Macbeth. Read the extract below. The exam is closed book: the extract is printed, but you quote the rest of the play from memory. Four of the 40 marks are for spelling, punctuation and grammar, and for your vocabulary and sentence structures. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-lit-01-q2',
            questionNumber: 2,
            questionText:
              "Read the extract from Act 2 Scene 1, printed above. Macbeth is alone, waiting for the bell that will be the signal to murder Duncan.\n\nExplore how Shakespeare presents Macbeth's disturbed state of mind. Refer to this extract from Act 2 Scene 1 and elsewhere in the play.\n\n[40 marks, including 4 marks for spelling, punctuation and grammar]",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_01,
            extractSource: MACBETH_EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents Macbeth\'s mind as disturbed by the murder he is about to commit. In this extract he is alone at night, waiting for the bell that will tell him to kill King Duncan, and he sees a dagger that is not really there.\n\nThe rhetorical question "Is this a dagger which I see before me" shows that he is confused about what is real. He tries to grab it, saying "Come, let me clutch thee", but he cannot, and he calls it "A dagger of the mind, a false creation". This shows he knows it might be a hallucination from his "heat-oppressed brain". When "gouts of blood" appear on the blade, it suggests that his guilt has begun even before the murder.\n\nShakespeare also uses dark imagery to show his state of mind. Macbeth says "Nature seems dead" and talks about "wicked dreams" and "wither’d murder", which creates an evil atmosphere that matches his thoughts. At the end of the extract the bell rings and he says "The bell invites me", as if the bell, like the dagger, is leading him on.\n\nMacbeth\'s mind is disturbed before this scene too. When the witches first greet him as the future king, Banquo asks him "why do you start", which shows that the prophecy has shaken him, perhaps because he has already thought about becoming king. In the same scene he admits that the thought of murder "Shakes so my single state of man".\n\nAfter the murder his mind gets worse. He thinks he heard a voice cry "Sleep no more!", and in Act 3 he tells his wife "O, full of scorpions is my mind, dear wife!" The metaphor of scorpions suggests his thoughts are poisonous and keep stinging him. At the banquet he sees Banquo\'s ghost, another sign that his guilt is affecting what he sees. By the end of the play he says life is "a tale / Told by an idiot", which shows that his mind has become empty and hopeless.\n\nA Jacobean audience believed that a king was chosen by God, so killing one was a terrible sin. Shakespeare\'s company were the King\'s Men, and their patron, James I, had survived the Gunpowder Plot in 1605. The audience would see Macbeth\'s disturbed mind as the result of planning a crime against God and the king. Shakespeare shows that ambition and murder can destroy a person\'s mind.',
              'Grade 6-7':
                'Shakespeare presents Macbeth\'s disturbed state of mind as the product of an ambition he cannot quite admit to himself. In this soliloquy, spoken just before he murders Duncan, his imagination turns his intention into a vision, and the rest of the play traces how that disturbance grows into torment and finally into emptiness.\n\nThe soliloquy opens with a rhetorical question, "Is this a dagger which I see before me", which establishes a crisis of perception: Macbeth can no longer trust his senses. The imperative "Come, let me clutch thee" is desperate and futile, addressed to an absence. He asks whether the vision is "sensible / To feeling as to sight", and the question exposes the problem, because he can see the dagger but cannot touch it. He then diagnoses it himself as "A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain", a moment of lucidity within the hallucination. The blood that appears on the blade ("gouts of blood, / Which was not so before") is a physical image of guilt, as if the murder were already staining the weapon before the act.\n\nThe dagger also reveals Macbeth\'s ambition. "Thou marshall’st me the way that I was going" shows that the vision does not create his purpose; it leads him where he already meant to go. Shakespeare then widens the focus from his mind to the world: "Now o’er the one half-world / Nature seems dead". Macbeth personifies murder, which moves "With Tarquin’s ravishing strides". Tarquin was the Roman king\'s son who raped Lucrece, so the allusion links Macbeth\'s crime with violation and tyranny. The soliloquy ends with a rhyming couplet that turns the bell into a summons: "it is a knell / That summons thee to heaven or to hell". The neatness of the rhyme suggests he has stopped arguing with himself.\n\nMacbeth\'s ambition troubles his mind from his first meeting with the witches. Banquo\'s "why do you start" shows him reacting to the prophecy with something like fear, and in Act 1 Scene 7 he admits that he has "no spur / To prick the sides of my intent, but only / Vaulting ambition". The image presents his intent as a horse with nothing to drive it on except an ambition that leaps too far. After the murder his mind is punished: he thinks he heard a voice cry "Sleep no more! / Macbeth does murder sleep", and he cannot pray, because "Amen" sticks in his throat. In Act 3 he realises that "To be thus is nothing, / But to be safely thus", which shows that the crown has brought him no peace, and he tells his wife "O, full of scorpions is my mind, dear wife!"\n\nBy Act 5 the disturbance has burned itself out into despair. Macbeth has "almost forgot the taste of fears", and he describes life as "a walking shadow" and "a tale / Told by an idiot, full of sound and fury, / Signifying nothing". The vivid hallucination of the dagger has become a mind that feels almost nothing at all.\n\nShakespeare\'s audience would have understood this decline in religious terms. Under the divine right of kings, a monarch was God\'s representative, so regicide was a sin against God as well as a crime. James I, the patron of Shakespeare\'s company, had written about witchcraft in Daemonologie and had survived the Gunpowder Plot in 1605. For a Jacobean audience, Macbeth\'s disturbed mind would be the natural consequence of rebelling against the order of God and nature.',
              'Grade 8-9':
                'Shakespeare constructs the dagger soliloquy as a theatrical study of a mind divided against itself, and the rest of the play shows the consequences of that division. Macbeth\'s disturbance is never simply madness: it is the visible form of an ambition he will not fully own, and its course through the play, from hallucination to sleeplessness to a final numbness, is Shakespeare\'s measure of what the murder costs.\n\nThe soliloquy begins in the interrogative, "Is this a dagger which I see before me", and never fully resolves its own question, so its form enacts the uncertainty it describes. The competing claims of sight and touch are staged in his question to the vision, "Art thou not, fatal vision, sensible / To feeling as to sight?": it is visible and intangible, and the question is asked precisely because the answer is no. Macbeth can still analyse his own state, calling it "A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain", yet the analysis changes nothing. "Mine eyes are made the fools o’ the other senses, / Or else worth all the rest" leaves both possibilities open, and the appearance of "gouts of blood, / Which was not so before" collapses time, as if the consequence had arrived before the act.\n\nCrucially, the hallucination externalises his will. "Thou marshall’st me the way that I was going" attributes his purpose to a spectral guide while admitting that the purpose was already his. This is consistent with his pattern throughout the play: in Act 1 Scene 3 he hopes that "If chance will have me king, why, chance may crown me / Without my stir", and in Act 1 Scene 7 he admits that he has "no spur / To prick the sides of my intent, but only / Vaulting ambition, which o’erleaps itself". Ambition is always present, but he prefers to imagine something else driving him: chance, his wife\'s persuasion, the dagger.\n\nThe second half of the soliloquy shifts from the psychological to the cosmic. "Now o’er the one half-world / Nature seems dead" aligns Macbeth\'s crime with the suspension of nature, a theme the play develops through the storms and unnatural portents of the night of the murder. Murder itself is personified, moving "With Tarquin’s ravishing strides". The allusion is precise: Tarquin was the son of a Roman king, and his rape of Lucrece, which Shakespeare had told in his own poem, led to the end of the Roman monarchy. A royal appetite that destroys a dynasty is an ominous model for a man about to kill a king. The simile "Moves like a ghost" belongs to the personified murder, but its "stealthy pace" is the one Macbeth is about to take, and the play will make him spectral too, a man who in Act 5 can describe life as "a walking shadow". The closing couplet, "it is a knell / That summons thee to heaven or to hell", hands the decision to a signal outside him: "The bell invites me", as though the bell, like the dagger, were doing the deed.\n\nAfter the murder the play turns the disturbed mind into punishment. Macbeth believes he heard a voice cry "Sleep no more! / Macbeth does murder sleep", and his inability to say "Amen" shows guilt cutting him off from prayer as well as rest. In Act 3 he discovers that the crown cannot quiet him: "To be thus is nothing, / But to be safely thus." The fear now attaches to Banquo, whose descendants the witches promised the throne: "Upon my head they plac’d a fruitless crown". His exclamation "O, full of scorpions is my mind, dear wife!" turns his mind into a nest of stinging creatures, and the ghost of Banquo at the feast is the dagger\'s successor, a vision that this time appears in public.\n\nBy the end the disturbance has exhausted itself. "I have almost forgot the taste of fears," he says in Act 5 Scene 5, and "I have supp’d full with horrors". The vivid, terrified imagination of Act 2 has been replaced by numbness, and his response to his wife\'s death is the nihilism of "a tale / Told by an idiot, full of sound and fury, / Signifying nothing". The soliloquy that began with a vision too vivid to trust ends, three acts later, in a world that means nothing at all.\n\nA Jacobean audience would have read this trajectory theologically. Regicide violated the divine right of kings and the order of nature, and the Gunpowder Plot of 1605 had shown how real the threat of killing a king could be. James I, the patron of Shakespeare\'s company, had written Daemonologie, a book on witchcraft, so the supernatural in the play would not have seemed fanciful. Shakespeare\'s achievement is to make the audience share the murderer\'s perspective, through the intimacy of soliloquy, while showing that his disturbed mind is the first part of his punishment.',
            },
            markScheme: [
              "AO1 (14 marks): a critical, personal response to Macbeth's state of mind, supported by well-chosen references to this extract and to the rest of the play",
              'AO2 (14 marks): analysis of Shakespeare\'s language, form and structure - here the soliloquy and its rhetorical questions, the personified "wither’d murder" and the couplet on the bell',
              'AO3 (8 marks): context that sharpens the reading, such as Jacobean beliefs about kingship, regicide and the supernatural, rather than facts added for their own sake',
              'AO4 (4 marks), marked on its own: spelling, punctuation, vocabulary and sentence structures - 1 mark if reasonably accurate, 2-3 if accurate with a good range, 4 if consistently accurate, with vocabulary and sentences controlled for effect',
              'AO1 to AO3 are marked together out of 36. An answer that stays inside the extract cannot go above Level 3 (13-18), and one that touches on the rest of the play only briefly cannot go above Level 4 (19-24)',
              "Top band (31-36): a sustained, perceptive argument, precise references from the extract and the whole play built into it, detailed analysis of Shakespeare's methods, and context used with insight to inform the reading",
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2 - Conflict: The Destruction of Sennacherib with The Demolition; Macbeth, Act 1 Scene 5
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-lit-02',
    board: 'OCR',
    paperNumber: 2,
    title: 'Exploring poetry and Shakespeare',
    subtitle: 'English Literature J352/02',
    code: 'J352/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-lit-02-sec-a',
        title: 'Section A: Poetry across time - Conflict',
        description:
          "Answer BOTH parts of the question. In the exam there is a question on each of the three clusters in OCR's anthology, Towards a World Unknown, and you answer the one you have studied; this practice paper sets Conflict. Part (a) compares a poem from the cluster with an unseen poem, and both are printed below. In part (b) you choose one other poem from the cluster and write about it from memory, because the exam is closed book. You are advised to spend about 45 minutes on part (a) and 30 minutes on part (b).",
        totalMarks: 40,
        suggestedTimeMinutes: 75,
        questions: [
          {
            id: 'ocr-lit-02-q1a',
            questionNumber: 1,
            questionText:
              'Read "The Destruction of Sennacherib" by Lord Byron and "The Demolition", printed above. "The Demolition" is an unseen poem written for this paper.\n\n(a) Compare how these poems present the sudden destruction of something powerful.\n\nYou should consider:\n- the ideas and attitudes in each poem\n- the tone and atmosphere of each poem\n- the effects of the language and structure the poets use.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            extract: `${SENNACHERIB}\n\n---\n\n${UNSEEN_POEM_04}`,
            extractSource: `${SENNACHERIB_SOURCE} / ${UNSEEN_POEM_04_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                'Both poems describe something powerful being destroyed very suddenly. In "The Destruction of Sennacherib", Byron describes a huge Assyrian army that is killed in one night by "the Angel of Death". In "The Demolition", a crowd watches a tower block being brought down with explosives.\n\nAt the start of Byron\'s poem the army looks strong and frightening. The simile "The Assyrian came down like the wolf on the fold" makes the soldiers sound like a predator attacking sheep. They are "gleaming in purple and gold", colours of royalty and wealth, and their spears are "like stars on the sea". In "The Demolition" the tower is not described as beautiful, but the poet shows how big it was by saying that "what had taken years / to build came down in thirteen seconds flat".\n\nBoth poems show how quick the destruction is. Byron uses two similes about leaves: at sunset the army is "Like the leaves of the forest when Summer is green", but the next morning it "lay withered and strown". In one night it changes from summer to autumn. In "The Demolition" "the building folded", and the short sentences "Nobody spoke. We stood. And that was that." show the shock of the people watching.\n\nBoth poets describe silence afterwards. Byron writes that "the tents were all silent" and that "the trumpet unblown" makes no sound. In "The Demolition" nobody speaks. The silence makes the destruction feel final.\n\nBoth poems use religious images. Byron\'s army is killed by an angel, and at the end the might of the enemy "Hath melted like snow in the glance of the Lord!" This shows that God is more powerful than any army. In "The Demolition" the people hold their phones "like candles at a vigil", and "The dust rose like a soul departing", as if the building has died.\n\nThe endings are different. Byron ends with "the widows of Ashur" grieving and with God\'s victory. "The Demolition" ends with the speaker dreaming for weeks "of rooms I\'d never entered", which shows that the loss of the building stays in people\'s minds.',
              'Grade 6-7':
                'Both poems present the sudden destruction of something powerful, but Byron celebrates the destruction of an enemy as the work of God, while "The Demolition" records the planned destruction of a building and the uneasy grief it leaves behind.\n\nByron builds up the Assyrian army\'s power before destroying it. The opening simile, "The Assyrian came down like the wolf on the fold", presents the army as a predator falling on helpless sheep, and the colours "purple and gold" suggest royal wealth and pride. The simile "the sheen of their spears was like stars on the sea" makes the army beautiful as well as dangerous. In "The Demolition" the tower\'s power is measured in time: "what had taken years / to build came down in thirteen seconds flat". The contrast between "years" and "thirteen seconds" shows how quickly something substantial can disappear.\n\nSuddenness is central to both. Byron\'s second stanza uses parallel similes: the army is "Like the leaves of the forest when Summer is green" at sunset, but by morning "That host on the morrow lay withered and strown". The repeated "Like the leaves of the forest" makes the change from summer to autumn happen overnight. "The Demolition" slows the moment down: after the charges "for a moment nothing happened", and then "the building folded". The pause makes the collapse more shocking.\n\nBoth poems present the destruction through religious imagery. In Byron\'s poem it is not human soldiers who win but "the Angel of Death", who "breathed in the face of the foe as he passed", and the final line gives the victory to God: the enemy\'s might "Hath melted like snow in the glance of the Lord!" In "The Demolition" the religious images are about mourning rather than triumph. The crowd hold their phones "like candles at a vigil", and "The dust rose like a soul departing", as if the building were a person who had died.\n\nThe aftermath is presented differently. Byron lingers on the dead in his fourth and fifth stanzas, repeating "And there lay": the horse through whose nostril "there rolled not the breath of his pride", the rider "distorted and pale", and the "tents were all silent". The silence emphasises how complete God\'s judgement is. In "The Demolition" the silence belongs to the witnesses: "Nobody spoke. We stood. And that was that." The short sentences suggest shock, and the final stanza undoes the certainty of "And that was that" with "Except it wasn\'t", as the speaker dreams for weeks of "rooms I\'d never entered".\n\nForm shapes the tone. Byron uses rhyming couplets and a galloping rhythm that sounds like an army on the move, and his ending is confident. "The Demolition" uses looser rhymes and sentences that run on across the stanza breaks, which gives it a quieter, more uncertain tone. Byron presents destruction as justice; the modern poet presents it as a loss that lives on in memory.',
              'Grade 8-9':
                'Both poems present the sudden destruction of something powerful, and both are concerned as much with what destruction means as with how it happens. Byron\'s poem is a hymn of judgement in which the might of an empire is unmade by God in a single night; "The Demolition" describes a modern, deliberate act of destruction and finds in it something that resists being understood. One poem ends in certainty, the other in an afterlife of dreams.\n\nByron constructs power in order to destroy it. The first stanza is spectacle: the predatory simile "like the wolf on the fold", the regal "purple and gold", and the extended image of spears "like stars on the sea, / When the blue wave rolls nightly on deep Galilee". The Assyrians are dazzling, even sublime, which makes their fall more complete. The second stanza compresses that fall into two parallel similes: the host is "Like the leaves of the forest when Summer is green" at sunset and "Like the leaves of the forest when Autumn hath blown" on the morrow. By repeating the image and changing only the season, Byron makes a year\'s decay happen between dusk and dawn, so the syntax itself performs the suddenness.\n\n"The Demolition" also measures power against time, but its power is architectural and its witnesses are human. The contrast "what had taken years / to build came down in thirteen seconds flat" sets slow construction against instant collapse, and the colloquial "flat" both states the time and describes the result. Where Byron moves swiftly, this poem suspends the moment: the charges blow "in sequence - a necklace of small fires -", an image that makes the explosives briefly decorative, "and for a moment nothing happened." The pause is followed by personification, "Floors conspired / with gravity", which makes the building complicit in its own end, and the sentence falls across the stanza break as the floors do.\n\nBoth poets turn to the sacred, but to opposite effect. Byron\'s agent is "the Angel of Death", who "spread his wings on the blast, / And breathed in the face of the foe as he passed". Destruction is a breath, effortless and divine, and the final couplet makes the theology explicit: "the might of the Gentile, unsmote by the sword, / Hath melted like snow in the glance of the Lord!" "Unsmote by the sword" insists that no human weapon was needed, and a single "glance" dissolves an empire like snow. In "The Demolition" religious imagery becomes the language of mourning. The crowd hold their phones "like candles at a vigil", and "The dust rose like a soul departing", treating the building as a body whose spirit leaves it. Byron\'s angel takes life; the modern poem imagines a death and grieves for it.\n\nThe aftermath shows the deepest difference. Byron dwells on the dead with cold precision, through the anaphora "And there lay": the steed through whose nostril "there rolled not the breath of his pride", and the rider "distorted and pale, / With the dew on his brow, and the rust on his mail". Dew and rust are signs of nature already reclaiming the soldiers, and "The lances unlifted, the trumpet unblown" lists military objects robbed of their purpose. Even the mourning is placed within the judgement: "the widows of Ashur are loud in their wail, / And the idols are broke in the temple of Baal". The galloping anapaestic couplets never falter, and they carry the reader to a triumphant close.\n\n"The Demolition" refuses such closure. Its third stanza ends in flat, short sentences, "Nobody spoke. We stood. And that was that.", which imitate the numbness of the witnesses and pretend to finality. The final stanza overturns them at once: "Except it wasn\'t." The speaker dreams "of rooms I\'d never entered, hallways lit / by someone else\'s memory", so the building\'s destruction releases lives the speaker never knew, and the last image, "the slow / percussion of a building learning how to sit", gives the ruin a strange, continuing life. The half-rhymes of the early stanzas ("opposite" with "commit", "fires" with "conspired") are less certain than Byron\'s full rhymes, and the poem ends unresolved.\n\nRead together, the poems present destruction as meaning or as mystery. For Byron, sudden destruction proves that human power is nothing before God; for the modern poet, it shows how much of a place\'s meaning lies in the lives it held, and how that meaning outlasts the building.',
            },
            markScheme: [
              'AO2 (12 marks), the dominant objective: analysis of how each poet uses language, form and structure to create meaning - in these answers, Byron\'s similes, the parallel "Like the leaves of the forest" and his galloping couplets; the pause, the personified floors and the overturned ending of "The Demolition"',
              'AO1 (8 marks): an informed personal response to both poems and to the question, with references from both chosen to support it',
              'The two poems must be compared: an answer that discusses only one of them will rarely rise above Level 2 (4-6 marks) and can go no higher than Level 3 (7-10). Part (a) assesses neither context (AO3) nor spelling, punctuation and grammar (AO4)',
              "Top band (18-20): close and finely judged analysis of both poets' methods, with terminology used accurately and to the point; a perceptive, coherent argument; quotations chosen precisely and built into it; and a comparison kept up from beginning to end",
            ],
          },
          {
            id: 'ocr-lit-02-q1b',
            questionNumber: 1,
            questionText:
              '(b) Explore in detail how one other poem from your anthology presents a conflict within a person\'s own mind.\n\nYour poem must come from the Conflict cluster and must not be "The Destruction of Sennacherib".\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "Envy" by Mary Lamb. It presents envy as a conflict inside a person, who is unhappy with who they are and wishes they were someone else.\n\nLamb uses an extended metaphor of a rose-tree to explain this. She says "This rose-tree is not made to bear / The violet blue, nor lily fair". A rose-tree can only grow roses, just as a person can only be themselves. If the tree "wished to change its natural bent, / It all in vain would fret". The word "fret" means to worry, and "in vain" shows that the worry is pointless, because the tree can never change its nature.\n\nIn the second stanza Lamb shows what envy does. If the tree fretted, you would think "It ne’er had seen its own red rose". This means envy makes people forget the good things they already have. The rose\'s scent after a "gentle shower" is a pleasant image of the tree\'s own gifts, which the envious tree would ignore.\n\nIn the last stanza Lamb explains her metaphor directly: "Like such a blind and senseless tree", "All envious persons are". The words "blind and senseless" are harsh, and suggest that envy stops people from seeing clearly. The conflict is inside the person: nobody else is attacking them, but they make themselves unhappy.\n\nThe poem ends on a hopeful note: "With care and culture all may find / Some pretty flower in their own mind". This suggests that everyone has "Some talent that is rare" if they look after themselves as a gardener looks after a plant. The word "culture" fits the gardening metaphor, because it can mean growing plants.\n\nThe poem has a regular rhyme scheme and short lines, which makes it sound simple, like a lesson for children. This suits its message, that people should be content with their own talents instead of envying others.',
              'Grade 6-7':
                'I have chosen "Envy" by Mary Lamb, which presents envy as a conflict between what a person is and what they wish to be. Unlike most poems about conflict, it has no enemy except the self, and Lamb suggests that the conflict can be ended only by accepting one\'s own nature.\n\nThe whole poem is built on an extended metaphor. "This rose-tree is not made to bear / The violet blue, nor lily fair, / Nor the sweet mignionet": the list of other flowers shows how many things the tree is not, and the negatives pile up. The conflict comes when the tree is "discontent" and "wished to change its natural bent". "Natural bent" means a person\'s inclinations, but it also describes the way a plant grows, so the image fits both the tree and the human. Lamb\'s verdict is that "It all in vain would fret": the struggle is pointless, because nature cannot be changed.\n\nThe second stanza shows that envy is a kind of blindness to oneself. If the tree fretted, "you would suppose / It ne’er had seen its own red rose, / Nor after gentle shower / Had ever smelled its rose’s scent". The sensory details, the colour of the rose and its scent after rain, are the pleasures envy throws away, and the repeated "ne’er" stresses that the envious tree behaves as if it had never enjoyed its own gifts.\n\nIn the final stanza Lamb turns from the metaphor to its meaning: "Like such a blind and senseless tree / As I’ve imagined this to be, / All envious persons are". "Blind and senseless" picks up the second stanza, since the tree has neither seen its rose nor smelled it, but it also means foolish. The speaker admits that the tree is "imagined", which makes the poem feel like a fable with a moral. The resolution is gentle: "With care and culture all may find / Some pretty flower in their own mind, / Some talent that is rare." "Culture" means cultivation as well as education, so the gardening image continues, and the conflict is resolved by tending what one already has.\n\nThe form supports the message. Each stanza has six lines: two rhyming couplets, each followed by a shorter line, and the short lines rhyme with each other ("mignionet" and "fret", "shower" and "flower", "are" and "rare"). The regular pattern makes the poem sound calm and certain, like a lesson. The short lines carry key ideas, such as "It all in vain would fret" and "Some talent that is rare", so the form itself moves from conflict to contentment.',
              'Grade 8-9':
                'I have chosen Mary Lamb\'s "Envy", which presents conflict on the smallest scale in the cluster: a struggle inside one person, between their nature and their desire to be someone else. Lamb treats envy as a war that cannot be won, because the enemy is the self, and her poem ends not with victory but with a cure.\n\nThe extended metaphor is announced with the demonstrative "This rose-tree", as if the speaker were pointing to a real plant in a real garden. The first stanza defines the tree by what it is "not made to bear": "The violet blue, nor lily fair, / Nor the sweet mignionet". Each rejected flower comes with an attractive adjective, so the reader feels the pull of what the tree cannot have, and the accumulating negatives enact the frustration of envy. The conflict is then stated as a hypothesis: "if this tree were discontent, / Or wished to change its natural bent". "Natural bent" is precisely chosen, meaning both a plant\'s habit of growth and a person\'s disposition, so that the botanical and the moral fuse. The stanza closes on its short line, "It all in vain would fret", where "fret" suggests both anxious worry and wearing away, as if envy erodes the person who feels it.\n\nThe second stanza reframes envy as a failure of perception. If the tree fretted, "you would suppose / It ne’er had seen its own red rose, / Nor after gentle shower / Had ever smelled its rose’s scent". The details are sensual and tender, the rose\'s colour and its scent after rain, and they show what envy destroys: not the gifts themselves but the capacity to enjoy them. The direct address ("you would suppose") draws the reader in as a judge of the tree, a position the final stanza will turn back on us.\n\nThat turn comes when the metaphor is interpreted: "Like such a blind and senseless tree / As I’ve imagined this to be, / All envious persons are". "Blind and senseless" precisely echoes the second stanza: the envious tree has not seen its rose or smelled it, so it lacks the very senses through which it could be content. The word also carries its everyday meaning of foolishness, and the generalisation "All envious persons" allows no exception, including the reader who had been judging the tree. The admission that the tree is "imagined" exposes the poem as a fable, and its moral is a remedy rather than a punishment: "With care and culture all may find / Some pretty flower in their own mind, / Some talent that is rare." The pun on "culture", as cultivation and as education, extends the garden into the mind, and "all may find" turns the earlier "all envious persons" into a promise.\n\nForm makes this conflict feel resolvable. Each six-line stanza pairs two rhyming couplets with two short lines that rhyme with each other ("mignionet" and "fret", "shower" and "flower", "are" and "rare"), so each stanza ends on a line that answers an earlier one. The short final lines trace the poem\'s movement from conflict to resolution: "It all in vain would fret", then "With its own pretty flower", then "Some talent that is rare". The steady four-beat lines and simple diction give the poem the clarity of a lesson for the young, and that clarity is part of its argument: envy is a confusion that clear sight can dispel.\n\nLamb\'s poem is quieter than the poems of war in the cluster, but it presents the root of conflict rather than its consequences. Envy is a person at war with their own nature, and the only peace available is the acceptance that, like the rose-tree, they were made to bear their own flower.',
            },
            markScheme: [
              'AO1 (10 marks): an informed personal response to the chosen poem and to the question, supported by references quoted from memory',
              'AO2 (10 marks): analysis of how the poet uses language, form and structure - in these answers, Lamb\'s extended metaphor of the rose-tree, the echo of "blind and senseless", the pun on "culture" and the six-line stanzas whose short lines rhyme',
              'AO1 and AO2 carry equal weight. The poem must come from the Conflict cluster and must not be "The Destruction of Sennacherib": a poem from another cluster earns no marks. Part (b) assesses neither context (AO3) nor AO4',
              "Top band (18-20): a perceptive, coherent reading of the chosen poem as a whole, precise references built into the argument, and detailed analysis of the poet's methods in accurate terminology",
            ],
          },
        ],
      },
      {
        id: 'ocr-lit-02-sec-b',
        title: 'Section B: Shakespeare - Macbeth',
        description:
          'Answer ONE question. In the exam there are two questions on each set play, one based on an extract and one discursive, and you answer one of them; this practice paper sets the extract-based question on Macbeth. Read the extract below. The exam is closed book: the extract is printed, but you quote the rest of the play from memory. Four of the 40 marks are for spelling, punctuation and grammar, and for your vocabulary and sentence structures. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-lit-02-q2',
            questionNumber: 2,
            questionText:
              "Read the extract from Act 1 Scene 5, printed above. Lady Macbeth has just been told that Duncan will stay at her castle tonight.\n\nExplore how Shakespeare presents Lady Macbeth's desire for power. Refer to this extract from Act 1 Scene 5 and elsewhere in the play.\n\n[40 marks, including 4 marks for spelling, punctuation and grammar]",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_02,
            extractSource: MACBETH_EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents Lady Macbeth as desperate for power. In this extract she has just heard that King Duncan is coming to stay at her castle, and she calls on evil spirits to help her murder him.\n\nShe begins with the image of a raven, a bird linked with death, which "croaks the fatal entrance of Duncan / Under my battlements". The possessive "my battlements" shows that she already thinks of the castle, and the plan, as hers. She then commands, "Come, you spirits / That tend on mortal thoughts, unsex me here". She wants to stop being a woman because she thinks women are too gentle to kill. The imperatives "Come", "fill me" and "make thick my blood" show her taking control, and a Jacobean audience, who believed in witchcraft, would have been shocked that she was calling on evil spirits.\n\nShe wants to be filled "from the crown to the toe, top-full / Of direst cruelty", and she asks for her breast milk to be taken "for gall", a bitter poison. This shows she is rejecting motherhood and kindness to gain power. She also calls on "thick night" to hide the murder, so that heaven cannot "peep through the blanket of the dark / To cry, \'Hold, hold!\'", which suggests she knows that what she plans is wrong.\n\nElsewhere in the play, Lady Macbeth\'s desire for power drives her husband. When she reads his letter, she worries that he is "too full o’ th’ milk of human kindness", and in Act 1 Scene 7 she attacks his courage, saying "When you durst do it, then you were a man". She tells him to "look like the innocent flower, / But be the serpent under’t", which shows that she is good at deception.\n\nAfter the murder she seems in control at first, saying "A little water clears us of this deed". But the power she wanted does not make her happy. In Act 3 she says "Naught’s had, all’s spent", meaning they have gained nothing. Macbeth stops sharing his plans with her, telling her to "Be innocent of the knowledge, dearest chuck". In Act 5 she sleepwalks, rubbing her hands as if washing them, and cries "Out, damned spot!" The water that was supposed to clean them is not enough.\n\nShakespeare shows that Lady Macbeth\'s desire for power goes against nature and against God. In Jacobean times women were expected to be gentle and obedient to their husbands, so her wish to lose her womanhood would have seemed unnatural. At the end Malcolm calls her a "fiend-like queen", and her destruction shows the audience the danger of wanting power so badly.',
              'Grade 6-7':
                'Shakespeare presents Lady Macbeth\'s desire for power as so intense that it requires her to violate nature, and the rest of the play shows that the power she gains destroys her. In this soliloquy she prepares herself for murder alone, before her husband has even arrived home.\n\nThe extract opens with an omen: "The raven himself is hoarse / That croaks the fatal entrance of Duncan / Under my battlements." The raven, a bird of ill omen, has croaked so much it is hoarse, and the possessive "my battlements" shows that she already sees the castle, and Duncan\'s fate, as hers to control. The invocation that follows, "Come, you spirits / That tend on mortal thoughts, unsex me here", asks not merely for courage but for a transformation of her identity: she believes her womanhood is an obstacle to power.\n\nHer speech treats the body as something to be emptied of feeling. She asks to be filled "from the crown to the toe, top-full / Of direst cruelty", where "crown" hints at the royal crown she wants, and she asks the spirits to "Stop up th’ access and passage to remorse", as though compassion were a flow that could be dammed. Offering her milk "for gall" inverts the mother\'s body, turning nourishment into poison. The "murd’ring ministers" she addresses belong to the same world as the witches, which a Jacobean audience, who feared witchcraft, would have found deeply disturbing.\n\nThe speech\'s imperatives ("Come", "fill me", "make thick", "Stop up") are relentless, and they culminate in a call for darkness: "Come, thick night, / And pall thee in the dunnest smoke of hell". Her final fear is that heaven might "peep through the blanket of the dark / To cry, \'Hold, hold!\'". Heaven is reduced to something that peeps and cries, and for a moment her will seems stronger than God\'s.\n\nThe rest of the play tests that will. In Act 1 Scene 5 she fears that Macbeth is "too full o’ th’ milk of human kindness / To catch the nearest way", and in Act 1 Scene 7 she uses the language of manhood to drive him on: "When you durst do it, then you were a man". She even claims that she would have "dash’d the brains out" of her own baby rather than break such an oath. After the murder she remains practical, telling him that "A little water clears us of this deed".\n\nYet power brings her nothing. In Act 3 Scene 2 she admits, alone, "Naught’s had, all’s spent, / Where our desire is got without content", and Macbeth now plans Banquo\'s murder without her, telling her to "Be innocent of the knowledge, dearest chuck". The partnership she imagined has become exclusion. In the sleepwalking scene the woman who called on "thick night" now keeps a light by her continually, and the woman who said a little water would clean them cries "Out, damned spot! out, I say!" and finds that "all the perfumes of Arabia" cannot sweeten her hand. Her desire for power has turned against her own mind.\n\nShakespeare\'s audience lived in a patriarchal society that expected women to be obedient and gentle, and the play\'s final verdict, Malcolm\'s "fiend-like queen", reflects that view. But Shakespeare makes her more complex than a villain: her collapse suggests that the nature she tried to suppress was real, and that it returns, as guilt, to destroy her.',
              'Grade 8-9':
                'Shakespeare constructs Lady Macbeth\'s invocation as a systematic inversion of the Jacobean feminine ideal, staging her desire for power as a ritual of self-annihilation. The rest of the play shows that the transformation she demands is never completed: the nature she tries to stop up returns, and the power she seizes empties her life of meaning.\n\nThe soliloquy opens with an omen she makes her own. The raven "is hoarse / That croaks the fatal entrance of Duncan / Under my battlements", and the possessive claims the castle, the night and the king\'s death in a single word. Macbeth\'s letter has just called her "my dearest partner of greatness", a phrase of equality, but she prepares for murder alone, and the solitude of the soliloquy suggests that, even at their closest, each partner negotiates privately with evil.\n\nThe imperative "unsex me here" is the speech\'s ideological centre. It acknowledges that her society genders power as male, and her response is not to challenge that order but to remake her own body to fit it. The anatomy of the speech is precise: "from the crown to the toe", "my blood", "my woman’s breasts", "my milk". The body is itemised as a series of sites to be occupied and repurposed, from a vessel of nurture into an instrument of violence. "Stop up th’ access and passage to remorse" treats compassion as a channel that can be blocked, and "compunctious visitings of nature" presents pity as an unwelcome visitor rather than part of her, which raises the question of whether the nature she suppresses is truly hers to suppress. The darkness she summons is material, "thick night" wrapped in "the dunnest smoke of hell", and her last fear is of being watched: that heaven might "peep through the blanket of the dark / To cry, \'Hold, hold!\'" The domestic "blanket" makes divine judgement something a covering could shut out.\n\nThe rest of the play shows her desire for power working through her husband. She diagnoses his weakness as being "too full o’ th’ milk of human kindness", the same milk she has just offered the spirits for gall, and in Act 1 Scene 7 she redefines manhood as daring: "When you durst do it, then you were a man". Her most terrible argument offers the child she once nursed as the measure of her resolve: "I have given suck, and know / How tender ’tis to love the babe that milks me", yet she would have "dash’d the brains out, had I so sworn as you / Have done to this". She weaponises maternal love to prove that she can destroy it, and so proves her fitness to destroy another man\'s future. Her instruction to "look like the innocent flower, / But be the serpent under’t" completes her strategy: power is to be taken by deception.\n\nWhat follows is the play\'s study of power without satisfaction. Immediately after the murder she insists that "A little water clears us of this deed", but in Act 3 Scene 2 she confesses, alone, that "Naught’s had, all’s spent, / Where our desire is got without content". The crown has been gained and nothing has been had. Macbeth now acts without her, "Be innocent of the knowledge, dearest chuck", an endearment that is also a dismissal, and at the banquet she can only try to contain his public collapse, asking "Are you a man?" in the language she once used to drive him on.\n\nThe sleepwalking scene is the reversal of the invocation. The woman who called for "thick night" now keeps a light by her continually; the woman who said water would clean them cannot stop washing, and her cry "Out, damned spot! out, I say!" returns compulsively to the blood of Act 2. She wonders who "would have thought the old man to have had so much blood in him", and "all the perfumes of Arabia" cannot sweeten her hand. Her sleeping mind speaks the remorse her waking will had stopped up. Malcolm\'s epitaph, "this dead butcher, and his fiend-like queen", gives the official verdict, though even he reports her death only "as ’tis thought".\n\nFor a Jacobean audience, a woman who rejected maternal feeling and called on spirits would have embodied fears about witchcraft and female disobedience, and King James\'s own writing on witches gave those fears royal authority. But Shakespeare\'s achievement is to make her desire for power intelligible: she understands exactly what it costs, demands it anyway, and is destroyed by the part of herself she could not unmake.',
            },
            markScheme: [
              "AO1 (14 marks): a critical, personal response to Lady Macbeth's desire for power, supported by well-chosen references to this extract and to the rest of the play",
              'AO2 (14 marks): analysis of Shakespeare\'s language, form and structure - here the invocation and its imperatives, the imagery of the body, milk and gall, and the personified heaven that might "peep through the blanket of the dark"',
              'AO3 (8 marks): context that sharpens the reading, such as Jacobean expectations of women and wives, and fears of witchcraft, rather than facts added for their own sake',
              'AO4 (4 marks), marked on its own: spelling, punctuation, vocabulary and sentence structures - 1 mark if reasonably accurate, 2-3 if accurate with a good range, 4 if consistently accurate, with vocabulary and sentences controlled for effect',
              'AO1 to AO3 are marked together out of 36. An answer that stays inside the extract cannot go above Level 3 (13-18), and one that touches on the rest of the play only briefly cannot go above Level 4 (19-24)',
              "Top band (31-36): a sustained, perceptive argument, precise references from the extract and the whole play built into it, detailed analysis of Shakespeare's methods, and context used with insight to inform the reading",
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 3 - Youth and Age: Midnight on the Great Western with Kitchen at Five AM; Macbeth, Act 5 Scene 5
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-lit-03',
    board: 'OCR',
    paperNumber: 2,
    title: 'Exploring poetry and Shakespeare',
    subtitle: 'English Literature J352/02',
    code: 'J352/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-lit-03-sec-a',
        title: 'Section A: Poetry across time - Youth and Age',
        description:
          "Answer BOTH parts of the question. In the exam there is a question on each of the three clusters in OCR's anthology, Towards a World Unknown, and you answer the one you have studied; this practice paper sets Youth and Age. Part (a) compares a poem from the cluster with an unseen poem, and both are printed below. In part (b) you choose one other poem from the cluster and write about it from memory, because the exam is closed book. You are advised to spend about 45 minutes on part (a) and 30 minutes on part (b).",
        totalMarks: 40,
        suggestedTimeMinutes: 75,
        questions: [
          {
            id: 'ocr-lit-03-q1a',
            questionNumber: 1,
            questionText:
              'Read "Midnight on the Great Western" by Thomas Hardy and "Kitchen at Five AM", printed above. "Kitchen at Five AM" is an unseen poem written for this paper.\n\n(a) Compare how these poems present life as a journey.\n\nYou should consider:\n- the ideas and attitudes in each poem\n- the tone and atmosphere of each poem\n- the effects of the language and structure the poets use.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            extract: `${MIDNIGHT}\n\n---\n\n${UNSEEN_POEM_03}`,
            extractSource: `${MIDNIGHT_SOURCE} / ${UNSEEN_POEM_03_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                'Both poems present life as a journey. In "Midnight on the Great Western", Hardy describes a boy travelling alone on a train at night and wonders where he has come from and where he is going. In "Kitchen at Five AM", an adult sits in the kitchen early in the morning and thinks about the choices they have made in life.\n\nHardy\'s journey is a real train journey, but it also stands for the boy\'s life. The boy is travelling "Towards a world unknown", which suggests his future is uncertain. Hardy says he is "Bewrapt past knowing to what he was going, / Or whence he came", which means he does not seem to know where he is going or where he came from. The speaker calls it "This plunge alone", and the word "plunge" makes the journey sound sudden and frightening.\n\nIn "Kitchen at Five AM" the journey is described through a metaphor. The poet writes that "time is not a river but a lock / through which you pass in increments". A river flows smoothly, but a lock moves a boat up or down in stages. The stages are "each gate a year, a choice, a child", so life is made of separate steps that cannot be undone.\n\nBoth poems are set in the dark. Hardy\'s boy sits under "the roof-lamp’s oily flame", and the lamp\'s "sad beams" create a gloomy atmosphere. In the kitchen, "the window dark enough to hold / my face between the garden and the worry" shows the speaker\'s reflection, which suggests they are looking at themselves and their worries.\n\nThe boy and the speaker are very different ages. The boy seems calm, "as if incurious quite / On all at stake", which means he does not seem worried about his future. The adult in "Kitchen at Five AM" is full of worry and still unsure why they made their choices: "Ambition? Fear?"\n\nHardy\'s poem ends with a question, asking whether the boy\'s soul is above "This region of sin that you find you in, / But are not of?", which suggests the boy is too innocent for the world. The last stanza of "Kitchen at Five AM" asks questions too, but it ends with the speaker\'s need to be "the one still here", which suggests they have kept going on life\'s journey even though it has been hard.',
              'Grade 6-7':
                'Both poems present life as a journey whose destination is unknown, but they view it from opposite ends. Hardy\'s speaker watches a child at the start of the journey and wonders about him; the speaker of "Kitchen at Five AM" is an adult in the middle of it, looking back at the choices that brought them here.\n\nIn "Midnight on the Great Western" the journey is literal and symbolic at once. The boy sits in "the third-class seat", travelling alone, with "a ticket stuck" in his hat and the key of his box hung round his neck on "a string". These details make him seem like a parcel being sent somewhere, and they suggest he has little say in where he is going. Hardy describes him as "Bewrapt past knowing to what he was going, / Or whence he came", and the speaker\'s question, "What past can be yours, O journeying boy / Towards a world unknown", turns the train journey into the journey into adult life. The phrase "journeying boy", which appears in the first line of every stanza, keeps the focus on him while the speaker\'s questions grow larger.\n\n"Kitchen at Five AM" uses an extended metaphor to present life as a journey. The clock "reminds you / that time is not a river but a lock / through which you pass in increments, / each gate a year, a choice, a child." The lock replaces a natural flow with a mechanical one: you are held in each stage before you can move to the next, and the gate closes behind you. The list "a year, a choice, a child" grows from time to decisions to people, suggesting that life\'s stages become heavier as you pass through them. The sentence also crosses a stanza break after "lock", so the reader passes through a gap just as the boat does.\n\nBoth poems use light and darkness to create a lonely atmosphere. Hardy\'s "roof-lamp’s oily flame" plays "down on his listless form and face", and its "sad beams" make the scene melancholy, though the key twinkles "Like a living thing", the only lively detail beside the listless boy. In the kitchen, "the window dark enough to hold / my face between the garden and the worry" shows the speaker literally reflecting, caught between the outside world and their anxieties.\n\nThe poems differ in how much their travellers understand. Hardy\'s boy is calm, "as if incurious quite / On all at stake", and the speaker wonders whether his soul belongs to a higher sphere, above "This region of sin that you find you in, / But are not of". Youth is presented as innocent and untouched by the world. The adult in "Kitchen at Five AM" made choices "half-lit, half-dressed, half-wild", and the repetition of "half" suggests a life lived without full awareness. They still cannot name what drove them: "Ambition? Fear?" The questions are left unanswered.\n\nThe structures reflect these differences. Each of Hardy\'s four five-line stanzas ends on a short line, and the last two end on questions, so the poem closes in wonder. "Kitchen at Five AM" ends with a statement of endurance: "The need to be the first awake, / the last to sleep, the one still here." Hardy imagines the beginning of life\'s journey as a mystery; the unseen poem shows that, well into the journey, it is still not fully understood.',
              'Grade 8-9':
                'Both poems present life as a journey whose destination cannot be known, and both find in an ordinary, half-lit scene a meditation on what carries a person forward. Hardy observes a child at the threshold of the journey and turns him into an emblem of innocence; "Kitchen at Five AM" speaks from inside the journey, from an adult who has passed through many of its gates and still cannot name the force that moved them.\n\nHardy\'s poem is an act of observation that becomes an act of imagination. Its first two stanzas are almost entirely description, and the details are telling: the boy sits in "the third-class seat", with "a ticket stuck" in the band of his hat and a key hung on "a string / Around his neck", as though he were luggage labelled for delivery. The lamp\'s light falls on his "listless form and face", and the archaic "Bewrapt" suggests both being wrapped up and being rapt, so that the boy is enclosed in his own absorption, "past knowing to what he was going, / Or whence he came". The journey has neither an origin nor a destination that he can see. Only the key is animated, twinkling "Like a living thing", which makes the boy seem less alive than the object that will open his box at the journey\'s end.\n\nThe second half turns from description to direct address. "What past can be yours, O journeying boy / Towards a world unknown" makes the train journey a figure for the passage into adult life, and "This plunge alone" gives it the force of a fall into deep water. The boy\'s calm, "as if incurious quite / On all at stake", is presented as a mystery rather than a failing. The final stanza offers a visionary explanation: perhaps his soul belongs to "a sphere ... Our rude realms far above", from which he can "mark and mete / This region of sin that you find you in, / But are not of". Innocence is imagined as a vantage point outside the fallen world the adult speaker inhabits. Form supports the wonder: each stanza ends on a short line rhymed with its second ("came", "thing", "alone", "of"), and the two final stanzas end as questions, so the poem closes without knowledge, in the same state as the boy.\n\n"Kitchen at Five AM" presents the journey from the far side of that innocence. Its controlling metaphor is mechanical rather than natural: the clock "reminds you / that time is not a river but a lock / through which you pass in increments". A river implies continuous, unchosen flow; a lock implies stages, waiting, and gates that close behind you. The sentence itself passes through a stanza break after "lock", so the form enacts the passage it describes. The increments are then named in an escalating list, "each gate a year, a choice, a child", moving from measured time to agency to another life, which makes the journey heavier with every gate.\n\nWhere Hardy\'s boy is untouched by the world, this speaker is formed by it. The kitchen\'s objects are personified with quiet menace: the kettle\'s "slow ascent to fury", the tap\'s "patient morse", the fridge that "exhales". The window, "dark enough to hold / my face between the garden and the worry", places the speaker\'s reflection between the outer world and the inner one. The speaker made their choices "half-lit, half-dressed, half-wild", and the triple "half" suggests a journey taken without full sight, like that of Hardy\'s "Bewrapt" boy, but remembered with an adult\'s unease. The force behind it is still unknown: "something I couldn\'t name then / and still can\'t now. Ambition? Fear?"\n\nThe two poems share a structure of uncertainty but locate it differently. Hardy\'s questions are addressed outward, to a child whose inner life the speaker cannot reach, and they idealise his not-knowing. The kitchen poem\'s questions are addressed inward, and its ending, "The need to be the first awake, / the last to sleep, the one still here", presents the adult\'s journey as endurance rather than wonder. Read together, they suggest that the "world unknown" Hardy\'s boy travels towards is the world of the kitchen at five in the morning: a place of choices, worry and vigilance, where the traveller still does not know quite why they set out.',
            },
            markScheme: [
              'AO2 (12 marks), the dominant objective: analysis of how each poet uses language, form and structure to create meaning - in these answers, the refrain "journeying boy", Hardy\'s details of the ticket and the key, and his closing questions; the metaphor of the lock, the stanza break it crosses and the triple "half" of "Kitchen at Five AM"',
              'AO1 (8 marks): an informed personal response to both poems and to the question, with references from both chosen to support it',
              'The two poems must be compared: an answer that discusses only one of them will rarely rise above Level 2 (4-6 marks) and can go no higher than Level 3 (7-10). Part (a) assesses neither context (AO3) nor spelling, punctuation and grammar (AO4)',
              "Top band (18-20): close and finely judged analysis of both poets' methods, with terminology used accurately and to the point; a perceptive, coherent argument; quotations chosen precisely and built into it; and a comparison kept up from beginning to end",
            ],
          },
          {
            id: 'ocr-lit-03-q1b',
            questionNumber: 1,
            questionText:
              '(b) Explore in detail how one other poem from your anthology presents the relationship between the young and the old.\n\nYour poem must come from the Youth and Age cluster and must not be "Midnight on the Great Western".\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "Holy Thursday" by William Blake. It describes a crowd of poor children walking into St Paul\'s Cathedral on a holy day, led and watched over by old men.\n\nBlake presents the young as innocent and beautiful. The poem begins by describing "their innocent faces clean", and the children walk "two and two in red and blue and green". The bright colours make them sound cheerful and lively. Blake calls them "these flowers of London town" and "multitudes of lambs", metaphors which suggest they are young, fresh and innocent. Lambs are also a symbol of Jesus, so the children seem holy.\n\nThe old are presented differently. The "Grey-headed beadles walked before, with wands as white as snow". The beadles are in charge of the children, and their wands are sticks that show their authority. This suggests that the old control the young and keep them in order, walking in neat lines.\n\nBut in the last stanza the children become powerful. Their singing is compared to "a mighty wind" and to "harmonious thunderings", which shows how loud and strong their voices are when they sing together. The old men now sit "Beneath them", which suggests that in some ways the children have risen above the adults.\n\nBlake calls the old men "wise guardians of the poor". This could mean they really are kind and wise, because they look after poor children. But some readers think Blake is being ironic, because the children are being paraded through the city.\n\nThe poem ends with a message to the reader: "Then cherish pity, lest you drive an angel from your door." This means we should care for children like these, because they might be angels. Blake suggests that the old have a duty to look after the young with kindness.\n\nThe poem is written in rhyming couplets with long lines, which makes it sound like a song or a hymn, suiting the children\'s singing.',
              'Grade 6-7':
                'I have chosen William Blake\'s "Holy Thursday", which presents the relationship between the young and the old through a procession of children into St Paul\'s Cathedral. On the surface the old guide and protect the young, but the poem\'s structure gradually raises the children above the adults who lead them.\n\nThe first stanza establishes order and authority. The children are "walking two and two in red and blue and green", an image of neat lines and bright uniforms, while "Grey-headed beadles walked before, with wands as white as snow". The beadles\' grey heads and wands (staffs of office) mark them as old and powerful, and the simile "as white as snow" suggests purity, though it could also suggest coldness. The children are presented as innocent from the first line, with "their innocent faces clean", and the simile "they like Thames waters flow" makes them a natural force, like a river channelled into the "high dome of Paul’s".\n\nThe second stanza moves to the children themselves: "O what a multitude they seemed, these flowers of London town!" The exclamation and the metaphor of flowers express wonder at their number and beauty. Blake then qualifies the image: "The hum of multitudes was there, but multitudes of lambs". A crowd might be threatening, but these are lambs, gentle and innocent, and the lamb is also a Christian symbol of Christ. "Thousands of little boys and girls raising their innocent hands" repeats "innocent", insisting on their goodness.\n\nIn the final stanza the relationship is reversed. The children\'s song rises "like a mighty wind" and "like harmonious thunderings the seats of heaven among", similes of natural power that place them almost in heaven. The old men are now below them: "Beneath them sit the aged men, wise guardians of the poor." The verb "sit" is passive beside the children\'s rising song. Whether "wise guardians" is sincere or ironic is left open, but "Beneath" makes the old physically lower than the young.\n\nThe poem ends with a moral addressed to the reader: "Then cherish pity, lest you drive an angel from your door." The relationship Blake wants between old and young is one of pity and care, because a poor child might be an angel. The long rhyming couplets give the poem the sound of a hymn, which suits a poem about children singing in church, and the regular form reflects the order of the procession, while the content shows the children\'s spirit overflowing it.',
              'Grade 8-9':
                'I have chosen William Blake\'s "Holy Thursday", from Songs of Innocence, which presents the relationship between the young and the old as one of guardianship that the poem gradually unsettles. The old lead, display and oversee the children, yet by the end the children\'s voices have risen far above them, and the final line turns from description to an urgent moral about how the old should treat the young.\n\nThe first stanza is a picture of control. The children walk "two and two in red and blue and green", a line whose plain, repeated "and" lists the colours of their uniforms as though the procession were drilled. Ahead of them, "Grey-headed beadles walked before, with wands as white as snow": the contrast between grey heads and bright clothes sets age against youth, and the wands are emblems of office, instruments of order. The simile "as white as snow" is ambiguous, suggesting both purity and coldness. Blake\'s verb for the children, though, is fluid: "into the high dome of Paul’s they like Thames waters flow". The simile makes them a river, a natural force that the beadles can direct but did not create.\n\nThe second stanza turns from the managers to the managed, and the language becomes rapturous: "O what a multitude they seemed, these flowers of London town!" The metaphor of flowers suggests beauty and brief, vulnerable life, and the crowd\'s sound is redefined in the next lines: "The hum of multitudes was there, but multitudes of lambs". The conjunction "but" overturns the threat a multitude might carry, and "lambs", with its echo of the Lamb of God, makes the children both innocent and sacred. The stanza ends with "Thousands of little boys and girls raising their innocent hands", repeating "innocent" from the first line, so that innocence frames the whole description of the young.\n\nThe final stanza reverses the opening hierarchy. The children\'s song rises "like a mighty wind" and "like harmonious thunderings the seats of heaven among", similes that give the young the power of weather and place them, figuratively, among the seats of heaven. The old, who "walked before" the children in the first stanza, now occupy the lowest position: "Beneath them sit the aged men, wise guardians of the poor." The static verb "sit" and the preposition "Beneath" invert the procession, and "wise guardians of the poor" can be read sincerely or ironically. Its ambiguity is the heart of the poem\'s view of the relationship: the old may be protectors, or officials displaying the poor children they manage.\n\nThe last line resolves the ambiguity into an instruction: "Then cherish pity, lest you drive an angel from your door." The direct address includes the reader among the "aged men", and the image of an angel at the door, which echoes the biblical idea of entertaining angels unawares, suggests that the young poor deserve compassion because they may be more than they appear. The word "Then" presents pity as the logical conclusion of everything the poem has shown.\n\nForm reinforces this structure. Three quatrains of long rhyming couplets give the poem a hymn-like regularity, matching the order of the procession and the song in the cathedral, while the movement from "walked before" to "Beneath them" carries the reversal within that orderly frame. Blake presents a relationship in which the old hold authority over the young but owe them pity, and in which the young, singing together, possess a spiritual power that their guardians do not.',
            },
            markScheme: [
              'AO1 (10 marks): an informed personal response to the chosen poem and to the question, supported by references quoted from memory',
              'AO2 (10 marks): analysis of how the poet uses language, form and structure - in these answers, Blake\'s metaphors of flowers and lambs, the similes of the river, the wind and the thunder, the reversal from "walked before" to "Beneath them", and the closing moral',
              'AO1 and AO2 carry equal weight. The poem must come from the Youth and Age cluster and must not be "Midnight on the Great Western": a poem from another cluster earns no marks. Part (b) assesses neither context (AO3) nor AO4',
              "Top band (18-20): a perceptive, coherent reading of the chosen poem as a whole, precise references built into the argument, and detailed analysis of the poet's methods in accurate terminology",
            ],
          },
        ],
      },
      {
        id: 'ocr-lit-03-sec-b',
        title: 'Section B: Shakespeare - Macbeth',
        description:
          'Answer ONE question. In the exam there are two questions on each set play, one based on an extract and one discursive, and you answer one of them; this practice paper sets the extract-based question on Macbeth. Read the extract below. The exam is closed book: the extract is printed, but you quote the rest of the play from memory. Four of the 40 marks are for spelling, punctuation and grammar, and for your vocabulary and sentence structures. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-lit-03-q2',
            questionNumber: 2,
            questionText:
              "Read the extract from Act 5 Scene 5, printed above. Macbeth is preparing Dunsinane for a siege when he hears that the Queen is dead.\n\nExplore how Shakespeare presents Macbeth's despair. Refer to this extract from Act 5 Scene 5 and elsewhere in the play.\n\n[40 marks, including 4 marks for spelling, punctuation and grammar]",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_03,
            extractSource: MACBETH_EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents Macbeth as full of despair in this extract. He has just heard that his wife is dead, and his response is to say that life is meaningless.\n\nHis first words, "She should have died hereafter", sound cold, as if he has no time to feel sad. Then the repetition of "tomorrow" three times shows how he feels life is dull and pointless, the same thing over and over. The verb "Creeps" suggests that time moves slowly. He uses the metaphor of a "brief candle" for life, suggesting it is short and can easily be blown out. Calling life "a walking shadow" makes it seem unreal, and comparing it to "a poor player" (an actor) suggests it is just a performance. When he says life is "a tale / Told by an idiot, full of sound and fury, / Signifying nothing", he is saying that nothing has any meaning.\n\nWhen the messenger tells him that Birnam Wood seems to be moving, his despair turns to anger. He shouts "Liar, and slave!" at the Messenger, which shows that the witches\' prophecy can still frighten him.\n\nMacbeth\'s despair grows through the play. After killing Duncan he thinks he heard a voice cry "Sleep no more!", which shows he will never be at peace. In Act 3 he says "O, full of scorpions is my mind, dear wife!" He also realises he cannot turn back: "I am in blood / Stepp’d in so far that, should I wade no more, / Returning were as tedious as go o’er." This metaphor shows he feels he is wading through a river of blood.\n\nIn Act 5 Scene 3 he says "I have liv’d long enough", and he knows he cannot expect "honour, love, obedience, troops of friends". Just before this extract he admits "I have supp’d full with horrors", which means he is so used to terrible things that nothing scares him any more.\n\nThe witches\' prophecies add to his despair. An apparition told him he would never be defeated until "Great Birnam wood to high Dunsinane hill / Shall come against him", which seemed impossible. When the wood seems to move, he begins to realise that the witches tricked him.\n\nA Jacobean audience would see Macbeth\'s despair as his punishment for killing a king, which was seen as a sin against God. Despair was also thought to be a sin in itself, because it meant giving up hope in God. Shakespeare shows that Macbeth\'s crimes have left him with nothing to live for.',
              'Grade 6-7':
                'Shakespeare presents Macbeth\'s despair as the end point of a process that began with the murder of Duncan. In this extract it reaches its climax in a speech that denies life any meaning, yet the arrival of the Messenger shows that Macbeth has not quite stopped caring.\n\nHis reply to the news of the Queen\'s death, "She should have died hereafter. / There would have been a time for such a word", can be heard as numbness or as grief with no time left to feel it. The speech that follows turns one death into a verdict on all life. The triple repetition of "tomorrow" enacts the mechanical passage of time, and the verb "Creeps" suggests time is not just slow but furtive. The metaphors then degrade life step by step: a "brief candle", small but still giving light; "a walking shadow", insubstantial; "a poor player, / That struts and frets his hour upon the stage", artificial; and finally "a tale / Told by an idiot, full of sound and fury, / Signifying nothing". Each removes another layer of meaning. "Signifying nothing" is a short line, so the speech stops short and trails into the silence it describes.\n\nThe structure then tests his despair. Macbeth\'s curt "Well, say, sir" to the Messenger is flat and impatient, but when he hears that "The wood began to move", the flatness breaks: "Liar, and slave!" The prophecy coming true can still shake him into rage, which suggests that his nihilism is a defence against fear rather than true indifference.\n\nElsewhere, Shakespeare traces how Macbeth reached this point. The first sign is his guilt after the murder: he believes a voice cried "Sleep no more! / Macbeth does murder sleep". Sleep, a symbol of peace, is lost to him. In Act 3 he finds that power brings no security: "To be thus is nothing, / But to be safely thus." After the banquet he feels trapped: "I am in blood / Stepp’d in so far that, should I wade no more, / Returning were as tedious as go o’er." He continues killing not from hope but because turning back seems as hard as going on.\n\nThe witches\' equivocation feeds his despair. The play opens with their paradox, "Fair is foul, and foul is fair", and Macbeth\'s first line, "So foul and fair a day I have not seen", echoes it. In Act 4 an apparition tells him he will not be defeated until "Great Birnam wood to high Dunsinane hill / Shall come against him", a promise that sounds like safety but turns out to be a trap. When Malcolm\'s soldiers carry branches cut from the wood, appearance and reality come apart, and Macbeth\'s confidence collapses.\n\nEarlier in Act 5 he says "I have liv’d long enough: my way of life / Is fall’n into the sere, the yellow leaf", knowing that he "must not look to have" "honour, love, obedience, troops of friends". In this scene he admits "I have supp’d full with horrors", so that horror no longer startles him.\n\nFor a Jacobean audience, despair was a sin as well as a feeling: to despair was to give up hope of God\'s mercy. Macbeth\'s speech would have sounded like the voice of a damned man, which makes the end of the play, with Malcolm restoring order, feel like the natural world reasserting itself.',
              'Grade 8-9':
                'Shakespeare stages Macbeth\'s despair as both the play\'s philosophical climax and its most theatrically self-conscious moment, and he makes it the end of a long process: the gradual exhaustion of a mind that has destroyed everything that could give its life meaning. Yet the extract also shows the limits of that despair, because the world Macbeth declares meaningless is at that very moment fulfilling a prophecy against him.\n\nThe speech is Macbeth\'s answer to Seyton\'s "The Queen, my lord, is dead". "She should have died hereafter" can be heard as numbness or as grief with no time left to feel it, and "There would have been a time for such a word" suggests a man who has lost the capacity to mourn rather than the wish to. The "Tomorrow" soliloquy then turns one death into a verdict on all life. The triple "tomorrow" enacts monotonous recurrence, and "Creeps in this petty pace" makes time furtive and small. The metaphors degrade life in stages: a "brief candle", material and finite; "a walking shadow", immaterial and derivative; "a poor player, / That struts and frets his hour upon the stage", artificial; and finally "a tale / Told by an idiot, full of sound and fury, / Signifying nothing", not merely artificial but incoherent. Each removes a layer of substance until existence is reduced to noise, and the short final line, "Signifying nothing", stops before the verse line is complete, trailing into silence.\n\nThe theatrical metaphor is the play\'s most self-conscious moment. Macbeth, played by an actor on a stage, declares that life is a player\'s hour upon the stage, and the audience is invited to wonder whether the performance it is watching signifies anything. Yet the speech is also deeply ironic: Macbeth claims that life signifies nothing at the moment when the witches\' prophecy is being fulfilled, and the Messenger\'s report that "The wood began to move" proves that his world is full of meaning, all of it against him. His response reveals the limits of his nihilism. He still commands ("thy story quickly"), he is curt and impatient ("Well, say, sir"), and he still rages ("Liar, and slave!"). The despair is a posture adopted in the interval between expecting death and facing it.\n\nShakespeare prepares this collapse throughout the play, and ties it to the theme of appearance and reality. The witches\' "Fair is foul, and foul is fair" dissolves the difference between surface and substance, and Macbeth\'s first line, "So foul and fair a day I have not seen", unconsciously echoes it. The apparition\'s promise in Act 4, that he will never be vanquished "until / Great Birnam wood to high Dunsinane hill / Shall come against him", is an equivocation that sounds like safety. The moving grove of the extract is that equivocation made literal: soldiers carrying branches create an illusion that Macbeth first calls a lie and then cannot deny. The man who began the play as a manipulator of appearances, telling his wife that "False face must hide what the false heart doth know", ends as the victim of one.\n\nThe despair also grows out of guilt. Immediately after the murder he believes a voice cried "Sleep no more! / Macbeth does murder sleep", and sleep, the "Balm of hurt minds", is denied him. In Act 3 he discovers that the crown brings no security, "To be thus is nothing, / But to be safely thus", and after the banquet he sees no way back: "I am in blood / Stepp’d in so far that, should I wade no more, / Returning were as tedious as go o’er." By Act 5 the process is complete. "I have liv’d long enough", he says in Scene 3, and in this scene, moments before the extract, "I have supp’d full with horrors". A mind that once hallucinated a dagger now cannot be startled at all.\n\nFor a Jacobean audience, despair carried theological weight: it was the sin of abandoning hope in God\'s mercy, the condition of the damned. Macbeth\'s nihilism would therefore sound less like philosophy than like the voice of a soul that has cut itself off from grace. Shakespeare\'s achievement is to make that voice so eloquent that the audience feels its force, while the action around it, the moving wood and the advancing army, shows that the universe is not meaningless at all. It is moving, quite literally, towards justice.',
            },
            markScheme: [
              "AO1 (14 marks): a critical, personal response to Macbeth's despair, supported by well-chosen references to this extract and to the rest of the play",
              "AO2 (14 marks): analysis of Shakespeare's language, form and structure - here the soliloquy's descending metaphors, the short line \"Signifying nothing\", and the Messenger's news that breaks the speech's calm",
              'AO3 (8 marks): context that sharpens the reading, such as the Christian view of despair, equivocation and Jacobean theatre, rather than facts added for their own sake',
              'AO4 (4 marks), marked on its own: spelling, punctuation, vocabulary and sentence structures - 1 mark if reasonably accurate, 2-3 if accurate with a good range, 4 if consistently accurate, with vocabulary and sentences controlled for effect',
              'AO1 to AO3 are marked together out of 36. An answer that stays inside the extract cannot go above Level 3 (13-18), and one that touches on the rest of the play only briefly cannot go above Level 4 (19-24)',
              "Top band (31-36): a sustained, perceptive argument, precise references from the extract and the whole play built into it, detailed analysis of Shakespeare's methods, and context used with insight to inform the reading",
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 4 - Love and Relationships: A Song with Tidal; Macbeth, Act 5 Scene 3
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-lit-04',
    board: 'OCR',
    paperNumber: 2,
    title: 'Exploring poetry and Shakespeare',
    subtitle: 'English Literature J352/02',
    code: 'J352/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-lit-04-sec-a',
        title: 'Section A: Poetry across time - Love and Relationships',
        description:
          "Answer BOTH parts of the question. In the exam there is a question on each of the three clusters in OCR's anthology, Towards a World Unknown, and you answer the one you have studied; this practice paper sets Love and Relationships. Part (a) compares a poem from the cluster with an unseen poem, and both are printed below. In part (b) you choose one other poem from the cluster and write about it from memory, because the exam is closed book. You are advised to spend about 45 minutes on part (a) and 30 minutes on part (b).",
        totalMarks: 40,
        suggestedTimeMinutes: 75,
        questions: [
          {
            id: 'ocr-lit-04-q1a',
            questionNumber: 1,
            questionText:
              'Read "A Song" by Helen Maria Williams and "Tidal", printed above. "Tidal" is an unseen poem written for this paper.\n\n(a) Compare how these poems present the pain of being separated from someone loved.\n\nYou should consider:\n- the ideas and attitudes in each poem\n- the tone and atmosphere of each poem\n- the effects of the language and structure the poets use.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            extract: `${A_SONG}\n\n---\n\n${UNSEEN_POEM_05}`,
            extractSource: `${A_SONG_SOURCE} / ${UNSEEN_POEM_05_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                'Both poems present a speaker who is separated from someone they love and who looks to the sea while they suffer. In "A Song", the speaker\'s lover has sailed away to make money, and the speaker is left weeping. In "Tidal", the speaker sits in their mother\'s chair watching the tide, and it seems that the mother has died.\n\nIn "A Song" the speaker explains that they never wanted riches. The lover "gave me all his heart", and "when I asked for bliss on earth, / I only meant his love". The problem is that he has left "in search of gain", sailing "From shore to shore". The rhetorical question "Why wander riches to obtain, / When love is all I prize?" shows the speaker\'s frustration that he has gone for something they do not care about.\n\nIn "Tidal" the separation seems permanent. The speaker sits "in her chair, her blanket on my knees", so the mother\'s things are still there but she is not. Remembering her words, "She said the sea forgives", shows that the speaker is still thinking about her.\n\nBoth poems use the sea to show their pain. In "A Song" the sea is dangerous: the lover "the dangerous ocean braves", and the speaker asks "Is pity in the faithless waves / To which I pour my woe?" The speaker is talking to the sea, but it cannot feel pity. In "Tidal" the speaker disagrees with the mother\'s belief that the sea forgives: "I think it just forgets." Both speakers feel that the sea does not care about their suffering.\n\nThe endings show the pain continuing. "A Song" ends "The storm is in my soul", a metaphor which shows that even though the sea is calm, the speaker\'s feelings are stormy. "Tidal" ends with the repetition "like years, like years, like years", which sounds like waves coming in again and again and suggests that the pain of loss goes on as time passes.\n\nThe forms are different. "A Song" has six short stanzas with a regular rhyme scheme, which makes it sound like a song. "Tidal" has longer, looser lines, which make it sound more like someone thinking aloud.',
              'Grade 6-7':
                'Both poems present the pain of separation through a speaker who watches the sea, but the separations are different. In "A Song" the lover has gone to sea in search of wealth and may return, so the pain is mixed with fear; in "Tidal" the mother appears to have died, and the pain is the long work of grief.\n\nWilliams builds her poem as an argument against the reason for the separation. The first two stanzas establish what the speaker valued: the lover had "No riches from his scanty store", but "He gave me all his heart!" The speaker claims that "when I asked for bliss on earth, / I only meant his love." The third stanza turns with "But now": the lover has gone "in search of gain", and the phrase "for me" suggests that he goes for the speaker\'s sake, believing that wealth will bring happiness. The rhetorical question "Why wander riches to obtain, / When love is all I prize?" shows the frustration of being left for something unwanted. In the fourth stanza the speaker even turns to address the lover directly, "If blest my love with thee!", as if the separation makes the speaker reach across the distance.\n\n"Tidal" presents separation as absence in a familiar place. The speaker sits "in her chair, her blanket on my knees", inheriting the mother\'s position without her presence. The poem recalls the mother\'s words, calling the ocean "God\'s rehearsal / for eternity", and her faith that "the sea forgives". The speaker\'s reply, "I think it just forgets", is the poem\'s emotional turning point: the speaker cannot share the mother\'s comfort.\n\nBoth poets use the sea to express pain, and both question whether it can feel. Williams\'s speaker asks, "Is pity in the faithless waves / To which I pour my woe?" The adjective "faithless" makes the sea untrustworthy, and the image of pouring woe into the waves suggests tears adding to the sea. The final stanza contrasts the calm sea with the speaker\'s feelings: "The night is dark, the waters deep, / Yet soft the billows roll", but "The storm is in my soul." The storm has moved from the weather into the self. In "Tidal" the sea is gentle too, erasing the afternoon "in slow, considerate degrees", but its gentleness is indifference rather than kindness.\n\nForm reflects the difference between the separations. "A Song" uses six numbered quatrains with alternating rhyme and short, song-like lines, a controlled form for a feeling that is still hopeful and fearful. "Tidal" uses looser quatrains and long sentences that run across lines and stanzas, like the tide itself. Its ending, "like years, like years, like years", uses repetition to imitate the waves and to show that grief is measured in time that keeps returning. Williams\'s speaker fears that the sea will take the lover; the speaker of "Tidal" has already lost the mother and must live with the sea\'s endless return.',
              'Grade 8-9':
                'Both poems present a speaker on the edge of the sea, separated from someone loved, and both ask whether the sea, which seems to govern their loss, can feel anything at all. The difference lies in the kind of separation: "A Song" is suspended between hope and fear, because the lover is alive but at sea, while "Tidal" is a poem of aftermath, in which the mother\'s absence has become part of the furniture of the speaker\'s life.\n\nWilliams structures her poem as a case against the separation. The first stanza sets love against wealth in a neat antithesis: the lover had "No riches from his scanty store", yet "He gave a boon I valued more". The second stanza turns the claim into a definition of happiness, "when I asked for bliss on earth, / I only meant his love", where "only" is pointed: the speaker never asked for more. The third stanza\'s "But now" begins the pain, and with it the poem\'s central irony. The lover goes "in search of gain", "From shore to shore", and "for me" suggests that he goes for the speaker\'s sake, pursuing the very wealth the speaker has just disowned. The rhetorical question "Why wander riches to obtain, / When love is all I prize?" turns grief into reproach. The fourth stanza imagines the alternative, "The frugal meal, the lowly cot", and here the speaker breaks into direct address, "If blest my love with thee!", as if speech could cross the separation for a moment, before the fifth stanza returns to "he".\n\nThe sea is where the separation becomes painful. "While he the dangerous ocean braves, / My tears but vainly flow": "vainly" admits that weeping changes nothing, and the question "Is pity in the faithless waves / To which I pour my woe?" makes the waves both the danger and the confidant. "Faithless" is precise, since the sea\'s lack of faith is set against the lovers\' fidelity. The final stanza inverts the pathetic fallacy the reader expects. The scene is dark and deep, "Yet soft the billows roll", and the storm the speaker fears is located inside: "The storm is in my soul." The pain of separation is so complete that the speaker carries the weather the lover may meet.\n\n"Tidal" begins not with the beloved but with the sea as a measure of all things: "We measure everything against the sea - / the pull of it, the patience, the refusal / to remain where it is placed." The qualities given to the sea are quietly human, and they anticipate the absent mother. Her presence survives in reported speech and in objects: she "called the ocean \'God\'s rehearsal\' / for eternity", and the speaker now sits "in her chair, her blanket on my knees". The separation is figured as inheritance, the speaker occupying the mother\'s place, and "the line / where water meets the land and neither wins" suggests a boundary that is never resolved, like the boundary between the living and the dead.\n\nThe turning point is a disagreement conducted after one party has gone: "She said the sea forgives. I think it just forgets." Forgiveness requires memory and intention; forgetting requires neither. The speaker\'s scepticism withdraws the comfort the mother found in the sea, which makes the separation lonelier, because the speaker cannot share her faith. Yet the poem does not end in argument. "But either way, the shoreline reappears" concedes that the tide\'s return does not depend on belief, and the final line, "like years, like years, like years", repeats its simile until it sounds like waves and like time itself. The pain of separation is not dramatic, as in Williams\'s storm, but cumulative.\n\nBoth speakers therefore turn to the sea and find no pity in it. Williams\'s question about "the faithless waves" is answered, in a modern voice, by a speaker who thinks the sea "just forgets". The forms suit the difference. Williams\'s six numbered quatrains, with their alternating rhymes and short song-like lines, contain a passionate and immediate fear. "Tidal" runs its sentences across lines and stanzas, as the tide crosses the shore, and its feeling is slower, subdued and ongoing. One poem is a cry from the middle of separation, the other a meditation on living after it.',
            },
            markScheme: [
              'AO2 (12 marks), the dominant objective: analysis of how each poet uses language, form and structure to create meaning - in these answers, Williams\'s antithesis of love and wealth, the question to "the faithless waves" and the inner storm of the last line; the mother\'s reported words, the disagreement about forgiving and forgetting, and the repetition that ends "Tidal"',
              'AO1 (8 marks): an informed personal response to both poems and to the question, with references from both chosen to support it',
              'The two poems must be compared: an answer that discusses only one of them will rarely rise above Level 2 (4-6 marks) and can go no higher than Level 3 (7-10). Part (a) assesses neither context (AO3) nor spelling, punctuation and grammar (AO4)',
              "Top band (18-20): close and finely judged analysis of both poets' methods, with terminology used accurately and to the point; a perceptive, coherent argument; quotations chosen precisely and built into it; and a comparison kept up from beginning to end",
            ],
          },
          {
            id: 'ocr-lit-04-q1b',
            questionNumber: 1,
            questionText:
              '(b) Explore in detail how one other poem from your anthology presents a longing to be close to someone loved.\n\nYour poem must come from the Love and Relationships cluster and must not be "A Song".\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "Bright Star" by John Keats, a sonnet in which the speaker longs to stay close to the woman he loves for ever.\n\nThe poem begins by speaking to a star: "Bright star, would I were stedfast as thou art". "Stedfast" means steady and unchanging, so Keats wishes he could be as constant as a star. But he does not want to be like the star in every way. The star is "in lone splendour", which means it is alone, and it watches the world from far away "Like nature’s patient, sleepless Eremite", which is a hermit. Keats does not want to be alone and far away; he wants to be close.\n\nThe turn comes in line 9 with "No – yet still stedfast, still unchangeable". Now he describes what he really wants: to be "Pillow’d upon my fair love’s ripening breast". This image is close and physical. He wants "To feel for ever its soft fall and swell", which means feeling her breathe as he lies against her.\n\nThe phrase "for ever" is repeated, in "To feel for ever" and "Awake for ever", which shows that he wants the closeness to last. He also wants "Still, still to hear her tender-taken breath". The repetition of "still" emphasises how much he wants the moment to stay the same.\n\nThe ending is dramatic: "And so live ever – or else swoon to death." He would rather die than lose this closeness. The dash creates a pause before the alternative, as if he is shocked by his own thought.\n\nThe poem is a sonnet, a form often used for love poems, and it is written as one long sentence, which makes the longing sound continuous. Keats presents the longing for closeness as so strong that it is worth more than life itself.',
              'Grade 6-7':
                'I have chosen John Keats\'s sonnet "Bright Star", which presents a longing to be close to the person he loves so intense that he can imagine only two outcomes: closeness for ever, or death.\n\nKeats begins by addressing a star, "Bright star, would I were stedfast as thou art", and the apostrophe makes the star a model of constancy. Yet the rest of the octave explains why he does not want to be like it. The star is "in lone splendour hung aloft the night", distant and solitary, keeping watch "with eternal lids apart, / Like nature’s patient, sleepless Eremite". An eremite is a hermit, so the star\'s constancy is the constancy of someone who has withdrawn from others. The things it watches, "The moving waters" and the "new soft-fallen mask / Of snow upon the mountains and the moors", are beautiful but seen from a cold distance. By describing the star at such length, Keats makes the reader feel the loneliness he wants to avoid.\n\nThe volta in line 9, "No – yet still stedfast, still unchangeable", rejects the star\'s distance but keeps its constancy. The dash after "No" is like a sharp intake of breath. The sestet then brings the reader as close as possible to the beloved: "Pillow’d upon my fair love’s ripening breast, / To feel for ever its soft fall and swell". The movement from the sky to a pillowed head shows that his longing is for physical, intimate closeness, not admiration from afar, and the word "ripening" suggests youth, growth and sensuality.\n\nKeats presents the longing as restless. He wants to be "Awake for ever in a sweet unrest", an oxymoron that captures how love is both peaceful and exciting. The sleeplessness he rejected in the "sleepless Eremite" becomes desirable when it means being awake beside the beloved. "Still, still to hear her tender-taken breath" uses repetition and soft sounds to slow the line, as if he is holding his breath to listen to hers.\n\nThe final line, "And so live ever – or else swoon to death", ends the sonnet\'s single sentence with an ultimatum. To "swoon" can mean to faint with emotion, so even death is imagined as a kind of overwhelming feeling. The form supports the longing: the whole sonnet is one sentence, with no full stop until the very end, so the longing seems to continue without a break, and the rhyming couplet gives the ending the force of a final decision.',
              'Grade 8-9':
                'I have chosen Keats\'s "Bright Star", a sonnet that presents the longing to be close to someone loved as a longing to escape time itself. Its argument turns on two kinds of steadfastness, the star\'s remote and lonely constancy and the constancy of lovers, and its final line shows that such longing is close to a wish for death.\n\nThe poem is a single sentence, and its opening apostrophe, "Bright star, would I were stedfast as thou art", is immediately qualified. The dash at the end of that line opens a long description of what the speaker does not want: the star "in lone splendour hung aloft the night", watching "with eternal lids apart, / Like nature’s patient, sleepless Eremite". The religious diction of the octave ("Eremite", "priestlike", "ablution") makes the star a hermit performing an endless rite, purifying "earth’s human shores" without ever touching them. The star is close to nothing; its constancy depends on distance. Keats spends eight lines on this image so that its loneliness is fully felt before he rejects it.\n\nThe volta, "No – yet still stedfast, still unchangeable", is the hinge of the poem\'s longing. "No" refuses the star\'s isolation, and "yet" keeps its constancy, so the speaker wants the impossible combination of permanence and intimacy. The sestet then moves from cosmic distance to the closest possible human contact: "Pillow’d upon my fair love’s ripening breast, / To feel for ever its soft fall and swell". The sibilance and gentle rhythm of "soft fall and swell" imitate the breathing he wants to feel, and "ripening" admits that the beloved is changing even as he asks to hold the moment still. The longing for closeness contains its own contradiction: the body he longs to be near is alive precisely because it changes.\n\nThe paradoxes accumulate. He wishes to be "Awake for ever in a sweet unrest", where "sweet unrest" fuses pleasure and agitation, and the sleeplessness he refused in the star becomes desirable when it is spent beside her. "Still, still to hear her tender-taken breath" is a line that seems to listen: the repeated "still" means both "always" and "motionless", and the compound "tender-taken" makes even her breathing an act of gentleness. The closeness Keats longs for is not dramatic but quiet, attentive and endless.\n\nThe final line confronts the cost of that wish. "And so live ever – or else swoon to death" places the two possibilities either side of a dash, as if the poem holds its breath before the alternative. "Swoon" belongs to the language of emotional intensity, so death is imagined as an excess of feeling rather than its absence. The rhyme of "breath" and "death" in the closing couplet binds the beloved\'s living breath to the speaker\'s dying, suggesting that the longing for closeness is so absolute that anything less than permanence would be unbearable.\n\nForm gives the longing its shape. Keats uses the sonnet, the traditional form of love poetry, but turns its usual address to the beloved into an address to a star, so the beloved is never spoken to directly. The single sentence that runs the length of the poem makes the longing feel unbroken, and the turn from octave to sestet carries the reader from the distant sky to the beloved\'s breast. Keats presents a longing to be close that is tender and physical, but also impossible, because what he wants is closeness without change.',
            },
            markScheme: [
              'AO1 (10 marks): an informed personal response to the chosen poem and to the question, supported by references quoted from memory',
              'AO2 (10 marks): analysis of how the poet uses language, form and structure - in these answers, Keats\'s apostrophe to the star, the volta at "No – yet still stedfast", the oxymoron "sweet unrest" and the sonnet\'s single sentence ending in its couplet',
              'AO1 and AO2 carry equal weight. The poem must come from the Love and Relationships cluster and must not be "A Song": a poem from another cluster earns no marks. Part (b) assesses neither context (AO3) nor AO4',
              "Top band (18-20): a perceptive, coherent reading of the chosen poem as a whole, precise references built into the argument, and detailed analysis of the poet's methods in accurate terminology",
            ],
          },
        ],
      },
      {
        id: 'ocr-lit-04-sec-b',
        title: 'Section B: Shakespeare - Macbeth',
        description:
          'Answer ONE question. In the exam there are two questions on each set play, one based on an extract and one discursive, and you answer one of them; this practice paper sets the extract-based question on Macbeth. Read the extract below. The exam is closed book: the extract is printed, but you quote the rest of the play from memory. Four of the 40 marks are for spelling, punctuation and grammar, and for your vocabulary and sentence structures. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-lit-04-q2',
            questionNumber: 2,
            questionText:
              "Read the extract from Act 5 Scene 3, printed above. Macbeth is at Dunsinane, waiting for the English army.\n\nExplore how Shakespeare presents the consequences of Macbeth's crimes. Refer to this extract from Act 5 Scene 3 and elsewhere in the play.\n\n[40 marks, including 4 marks for spelling, punctuation and grammar]",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_04,
            extractSource: MACBETH_EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents the consequences of Macbeth\'s crimes as terrible. By this point in the play he has murdered Duncan and had Banquo and Macduff\'s family killed, and in this extract he is waiting for the English army to attack.\n\nThe metaphor "my way of life / Is fall’n into the sere, the yellow leaf" compares his life to a dying autumn leaf, which shows that he feels old and close to death. He lists the things an old man should have, "honour, love, obedience, troops of friends", but says he "must not look to have" them. This shows he knows that his crimes have cost him everything good. Instead he has "Curses, not loud but deep" and "mouth-honour", which means people only pretend to respect him because they are afraid.\n\nHe is also isolated. He keeps calling "Seyton!", but no one comes until the end of the speech, which makes him seem lonely even in his own castle. He sends the servant away with "Take thy face hence", which suggests that he is angry and frightened.\n\nDespite all this, Macbeth still decides to fight, saying "I’ll fight till from my bones my flesh be hack’d", and he demands his armour even though Seyton says "’Tis not needed yet". This shows he is stubborn and desperate.\n\nElsewhere in the play the consequences of his crimes begin straight after the murder of Duncan. He thinks he heard a voice cry "Sleep no more!", and he cannot say "Amen", which shows that guilt has cut him off from rest and from God. He looks at his bloody hands and asks "Will all great Neptune’s ocean wash this blood / Clean from my hand?", showing that he feels his guilt can never be washed away. At the banquet he sees Banquo\'s ghost, which shames him in front of his lords.\n\nLady Macbeth suffers too. At first she says "A little water clears us of this deed", but in Act 5 she sleepwalks and cries "Out, damned spot!", as if trying to wash blood from her hands.\n\nA Jacobean audience believed that killing a king went against God and the natural order, so they would expect Macbeth to be punished. Shakespeare shows that his crimes have left him lonely, hated and without hope, which warns the audience about the cost of ambition.',
              'Grade 6-7':
                'Shakespeare presents the consequences of Macbeth\'s crimes as both inward and outward: guilt destroys his peace of mind, and tyranny destroys his place in the world. By this extract in Act 5 Scene 3, Macbeth sees those consequences with devastating clarity.\n\nThe autumnal metaphor "my way of life / Is fall’n into the sere, the yellow leaf" signals the approach of death, the loss of vitality ("sere" means withered), and the natural cycle that Macbeth has violated by seizing power unnaturally. The list of what he has forfeited, "honour, love, obedience, troops of friends", moves from abstract virtues to companionship, suggesting that he understands his losses both morally and personally. In their place he has "Curses, not loud but deep, mouth-honour, breath", a mirror image of what he should have had: "mouth-honour" is respect spoken but not felt, and "breath" reduces his subjects\' loyalty to empty air. The phrase "Which the poor heart would fain deny, and dare not" shows that his people wish to refuse him but are too frightened.\n\nHis isolation is also staged. The speech is broken by calls of "Seyton!" that go unanswered until it is over, and he dismisses the servant who brought bad news with "Take thy face hence." He then turns abruptly from reflection to violence: "I’ll fight till from my bones my flesh be hack’d." The armour he demands, although Seyton tells him "’Tis not needed yet", is practical preparation and also a defence against the vulnerability his speech has exposed.\n\nThe consequences begin at the very moment of the first crime. After killing Duncan, Macbeth believes he heard a voice cry "Sleep no more! / Macbeth does murder sleep", and when he tries to pray, "Amen" sticks in his throat. Guilt attacks the two things that should comfort him, rest and prayer. The blood on his hands becomes the play\'s central image of guilt: "Will all great Neptune’s ocean wash this blood / Clean from my hand?" Lady Macbeth answers that "A little water clears us of this deed", but she is wrong. In Act 5 Scene 1 she relives the night in her sleep, crying "Out, damned spot! out, I say!", and finds that "all the perfumes of Arabia" cannot sweeten her hand.\n\nFurther crimes bring further consequences. Banquo\'s murder produces his ghost at the banquet, where Macbeth\'s guilt becomes visible to his lords: "Thou canst not say I did it. Never shake / Thy gory locks at me." His tyranny also turns Scotland against him, so that by Act 5 his enemies are gathering, and at the end Malcolm can call him "this dead butcher".\n\nShakespeare\'s treatment reflects Jacobean beliefs. Killing a king was thought to break the Great Chain of Being, the God-given order of the universe, so the punishment is cosmic as well as personal: Macbeth loses sleep, loses his wife, loses his people\'s love and finally his life. The extract shows him understanding this fully, which makes him a tragic figure as well as a villain.',
              'Grade 8-9':
                'Shakespeare grants Macbeth in this extract a devastating lucidity: he sees exactly what his crimes have cost him, and the seeing changes nothing. The consequences the play has traced since the night of Duncan\'s murder, the loss of sleep, of prayer, of his wife and of his people\'s love, are gathered here into a single inventory, spoken by a man who has become a stranger in his own castle.\n\nThe extract opens with dismissal and isolation. "Take thy face hence" drives away the servant who brought bad news, and the speech that follows is broken by calls for "Seyton!" that no one answers until it is over: a king reduced to shouting for a single officer. "This push / Will cheer me ever or disseat me now" stakes everything on the battle to come, but the reflection that follows suggests he already knows the answer.\n\nThe autumnal metaphor "my way of life / Is fall’n into the sere, the yellow leaf" is significant for its passivity. "Fall’n" implies something that has happened to Macbeth rather than something he has done, a habit of placing responsibility outside himself that runs through the play, from the dagger that "marshall’st" him to the prophecies he trusts at the end. Yet the catalogue that follows is strikingly honest: "honour, love, obedience, troops of friends" are what "should accompany old age", and he admits he "must not look to have" them. The antithetical structure, what he should have against what he has, creates a balance sheet of ambition\'s costs. "Curses, not loud but deep" is psychologically acute: he knows his people curse him quietly, and the depth of their hatred is measured by its restraint. "Mouth-honour" compresses the political reality of tyranny into one compound, honour that exists only in speech, "Which the poor heart would fain deny, and dare not."\n\nThe turn from reflective despair to martial aggression is not a change of subject but its consequence. Having acknowledged that nothing worth preserving remains, Macbeth is free to embrace destruction: "I’ll fight till from my bones my flesh be hack’d." His insistence on his armour, though Seyton says "’Tis not needed yet", is an act of impatient self-definition, as if he could rebuild an identity through action when every other form of selfhood has been stripped away.\n\nShakespeare has prepared this moment since the first crime. Immediately after Duncan\'s murder, guilt attacks the boundaries of Macbeth\'s being. The voice that cries "Sleep no more! / Macbeth does murder sleep" attacks the boundary between waking and sleeping; the blood that will not wash, "Will all great Neptune’s ocean wash this blood / Clean from my hand?", attacks the boundary between body and world; and the "Amen" that "Stuck in my throat" severs him from God. Each consequence strikes a different part of human existence: biological, physical and spiritual. Lady Macbeth\'s confidence that "A little water clears us of this deed" proves the play\'s most tragic misjudgement: in Act 5 Scene 1 the blood has migrated from her hands into her mind, and "Out, damned spot! out, I say!" returns compulsively to the night her waking self dismissed.\n\nThe later crimes add public consequences to private ones. Banquo\'s murder produces the ghost at the banquet, where Macbeth\'s guilt ruptures his performance of kingship in front of his lords: "Never shake / Thy gory locks at me." The slaughter of Macduff\'s family turns Macduff into his nemesis, and the "Curses, not loud but deep" of the extract are the quiet sound of a kingdom in which, as Macduff says, "New widows howl, new orphans cry". Malcolm\'s final verdict, "this dead butcher", reduces the king to the deeds that defined him.\n\nFor a Jacobean audience these consequences had theological force. Regicide broke a divinely ordained order, and the play\'s insistence on sleeplessness, blood and damnation would have read as divine justice working through the mind. Yet Shakespeare distinguishes between awareness and absolution. Macbeth catalogues his losses with forensic precision, and the knowledge brings no relief, only the resolve to fight. The deepest consequence of his crimes is not punishment from outside but the hollowing of the self from within, until, as the extract shows, he can see his life clearly and find nothing left in it to save.',
            },
            markScheme: [
              "AO1 (14 marks): a critical, personal response to the consequences of Macbeth's crimes, supported by well-chosen references to this extract and to the rest of the play",
              'AO2 (14 marks): analysis of Shakespeare\'s language, form and structure - here the autumnal metaphor, the list of what he "must not look to have", the unanswered calls of "Seyton!" and the turn to violence',
              'AO3 (8 marks): context that sharpens the reading, such as Jacobean ideas of kingship, divine order and damnation, rather than facts added for their own sake',
              'AO4 (4 marks), marked on its own: spelling, punctuation, vocabulary and sentence structures - 1 mark if reasonably accurate, 2-3 if accurate with a good range, 4 if consistently accurate, with vocabulary and sentences controlled for effect',
              'AO1 to AO3 are marked together out of 36. An answer that stays inside the extract cannot go above Level 3 (13-18), and one that touches on the rest of the play only briefly cannot go above Level 4 (19-24)',
              "Top band (31-36): a sustained, perceptive argument, precise references from the extract and the whole play built into it, detailed analysis of Shakespeare's methods, and context used with insight to inform the reading",
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 5 - Conflict: Envy with February, Walking the Dog; Macbeth, Act 1 Scene 7
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-lit-05',
    board: 'OCR',
    paperNumber: 2,
    title: 'Exploring poetry and Shakespeare',
    subtitle: 'English Literature J352/02',
    code: 'J352/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-lit-05-sec-a',
        title: 'Section A: Poetry across time - Conflict',
        description:
          "Answer BOTH parts of the question. In the exam there is a question on each of the three clusters in OCR's anthology, Towards a World Unknown, and you answer the one you have studied; this practice paper sets Conflict. Part (a) compares a poem from the cluster with an unseen poem, and both are printed below. In part (b) you choose one other poem from the cluster and write about it from memory, because the exam is closed book. You are advised to spend about 45 minutes on part (a) and 30 minutes on part (b).",
        totalMarks: 40,
        suggestedTimeMinutes: 75,
        questions: [
          {
            id: 'ocr-lit-05-q1a',
            questionNumber: 1,
            questionText:
              'Read "Envy" by Mary Lamb and "February, Walking the Dog", printed above. "February, Walking the Dog" is an unseen poem written for this paper.\n\n(a) Compare how these poems present feelings of discontent.\n\nYou should consider:\n- the ideas and attitudes in each poem\n- the tone and atmosphere of each poem\n- the effects of the language and structure the poets use.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            extract: `${ENVY}\n\n---\n\n${UNSEEN_POEM_02}`,
            extractSource: `${ENVY_SOURCE} / ${UNSEEN_POEM_02_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                'Both poems are about discontent, the feeling of being unhappy with what you have. In "Envy", Mary Lamb uses a rose-tree to teach that envious people are foolish because they cannot see their own good qualities. In "February, Walking the Dog", the speaker walks across a snowy field and feels a sense of emptiness, while the dog is happy.\n\nLamb presents discontent as pointless. A rose-tree is "not made to bear / The violet blue, nor lily fair", and if it "wished to change its natural bent, / It all in vain would fret". "In vain" means the effort would be wasted. Lamb says an unhappy tree would act as if it "ne’er had seen its own red rose", so discontent makes you forget what is good about yourself.\n\nIn "February, Walking the Dog" the discontent is the speaker\'s mood. The snowy field is "a page someone has erased", a metaphor that makes the landscape seem empty. The speaker says "I read the lack", which means they see only what is missing.\n\nBoth poems compare a contented creature with a discontented one. In "Envy" the rose-tree should be happy "With its own pretty flower". In "February" the dog is content: she "runs on ahead" and "She does not care about the emptiness". The dog "reads the wind", enjoying the smells, while the speaker reads "the lack". The two lines of footprints, "hers excitable, / mine plodding", show that they experience the same walk very differently.\n\nThe tone of the poems is different. "Envy" is confident and teaches the reader a lesson: "All envious persons are" "blind and senseless". It ends hopefully, saying that "With care and culture all may find / Some pretty flower in their own mind". "February" is quieter and sadder, and it ends without solving the speaker\'s feeling.\n\nThe forms are different too. "Envy" has a regular rhyme scheme and rhythm, which makes it sound like a lesson. "February" does not rhyme, and its uneven lines make it sound like someone\'s thoughts. Both poems show that discontent comes from the way a person sees things rather than from what they actually have.',
              'Grade 6-7':
                'Both poems present discontent as a way of seeing, and both set a discontented mind beside a creature that is content with its own nature. But "Envy" treats discontent as a fault that a moral lesson can cure, while "February, Walking the Dog" presents it as a mood the speaker can describe but not escape.\n\nLamb\'s poem is an extended metaphor. "This rose-tree is not made to bear / The violet blue, nor lily fair, / Nor the sweet mignionet", so a tree that "wished to change its natural bent" would fret "in vain". Discontent here is the desire to be something else, and Lamb presents it as useless because nature cannot be changed. The second stanza shows what discontent costs: a fretting tree would behave as if it "ne’er had seen its own red rose, / Nor after gentle shower / Had ever smelled its rose’s scent". The pleasures of sight and smell are there to be enjoyed, but discontent makes the tree ignore them.\n\n"February, Walking the Dog" presents discontent through an extended metaphor of writing. The snow-covered field is "a page someone has erased", and the snow "has rubbed out every path, / every hedge-line, every ditch", leaving "a blankness". The dog writes on this page with excitement, "printing her signature in dots and dashes", while the speaker\'s boots "leave their slow vocabulary". The "two scripts", "hers excitable, / mine plodding", show two responses to the same scene. The speaker\'s discontent is never explained, but it colours everything.\n\nThe contrast between contentment and discontent is clearest at the end of each poem. Lamb turns from the tree to people: "Like such a blind and senseless tree / As I’ve imagined this to be, / All envious persons are". The envious are blind because they cannot see their own gifts. In "February" the speaker is not blind but sees only absence: "She reads the wind. I read the lack." The parallel sentences make the dog\'s pleasure in the scents on the wind and the speaker\'s sense of emptiness equal in grammar but opposite in meaning, and "She does not care about the emptiness" suggests the dog is content because she does not look for what is missing.\n\nThe tones are very different. Lamb\'s speaker is a confident teacher who addresses the reader ("you would suppose") and offers a cure: "With care and culture all may find / Some pretty flower in their own mind". The pun on "culture", meaning cultivation as well as learning, continues the gardening image. "February" offers no cure; its final line leaves the speaker reading "the lack".\n\nForm reinforces the difference. "Envy" uses regular six-line stanzas in which two rhyming couplets are each followed by a shorter line, and the short lines rhyme with each other; the order of the form matches the certainty of its moral. "February" is unrhymed, with lines of different lengths and sentences that run across stanzas, such as "a blankness I could almost believe / was permanent", which makes the blankness spill over the gap between the first and second stanzas. Lamb presents discontent as a mistake; the modern poet presents it as an experience.',
              'Grade 8-9':
                'Both poems present discontent as a failure of perception rather than of circumstance: in each, the world offers enough, but the discontented mind cannot see it. Each sets a creature content with its own nature, a rose-tree or a dog, beside a mind that dwells on what it lacks. Yet the poems reach opposite conclusions. Lamb\'s fable diagnoses discontent and prescribes its cure with the confidence of a moralist; the speaker of "February, Walking the Dog" knows exactly what their discontent is, and that knowledge does not cure it.\n\nLamb\'s rose-tree is defined first by what it cannot be. "This rose-tree is not made to bear / The violet blue, nor lily fair, / Nor the sweet mignionet": each rejected flower carries an attractive epithet, so the reader feels the temptation even as the syntax denies it. Discontent is then framed hypothetically, "if this tree were discontent, / Or wished to change its natural bent", and "natural bent", meaning both a plant\'s growth and a person\'s disposition, fuses the botanical with the moral. The verdict, "It all in vain would fret", falls on the stanza\'s short final line, so the form itself cuts the fretting short.\n\n"February, Walking the Dog" builds its discontent from an extended metaphor of writing and erasure. "The field is a page someone has erased": the snow has "rubbed out every path, / every hedge-line, every ditch", and the repetition of "every" enacts the thoroughness of the erasure. What remains is "a blankness I could almost believe / was permanent", and the sentence runs across the stanza break, so the blankness seems to extend beyond the stanza that should contain it. "Almost" is crucial: the speaker half-knows that the emptiness is not permanent, which makes the mood more painful, not less.\n\nBoth poems then stage the contrast with a contented creature. Lamb\'s second stanza imagines the fretting tree behaving as if it "ne’er had seen its own red rose, / Nor after gentle shower / Had ever smelled its rose’s scent", so discontent is presented as the loss of the senses\' pleasures. In "February" the dog has those pleasures fully. She runs ahead "printing her signature in dots and dashes", "a morse code I will never learn to read", and her contentment is expressed in a language the speaker cannot share. The "two scripts", "hers excitable, / mine plodding", "narrate different walks / through the same white": the scene is identical, the experience opposite.\n\nThe endings show the difference between the poems most sharply. Lamb\'s third stanza interprets the fable, "Like such a blind and senseless tree / As I’ve imagined this to be, / All envious persons are", and "blind and senseless" names exactly what the second stanza showed: the envious tree has neither seen nor smelled its rose. Discontent is ignorance, and the cure is cultivation: "With care and culture all may find / Some pretty flower in their own mind, / Some talent that is rare." "February" ends on parallel sentences that refuse any cure: "She reads the wind. I read the lack." The speaker is not blind; the speaker reads, attentively, but what they read is absence. The syntax gives the dog and the speaker equal weight, and the full stops close each reading off from the other. "She does not care about the emptiness" is the only explanation offered, and it explains the dog\'s contentment, not the speaker\'s discontent.\n\nThe forms embody these attitudes. Lamb\'s regular six-line stanzas, two rhyming couplets each answered by a shorter rhyming line, give each stanza a sense of resolution, and her direct address ("you would suppose") draws the reader into a lesson. "February" is unrhymed, its lines uneven, and its final stanza shrinks to short, separate observations ("At the stile she waits, / breath clouding, tail metronoming."), as if the speaker can only record what is in front of them. Lamb presents discontent as a moral error that care can correct; the modern poet presents it as a state of mind clear-sighted enough to describe itself and still unable to change.',
            },
            markScheme: [
              'AO2 (12 marks), the dominant objective: analysis of how each poet uses language, form and structure to create meaning - in these answers, Lamb\'s extended metaphor, the echo of "blind and senseless" and her rhyming six-line stanzas; the metaphor of writing and erasure, the stanza-crossing sentence and the parallel last line of "February, Walking the Dog"',
              'AO1 (8 marks): an informed personal response to both poems and to the question, with references from both chosen to support it',
              'The two poems must be compared: an answer that discusses only one of them will rarely rise above Level 2 (4-6 marks) and can go no higher than Level 3 (7-10). Part (a) assesses neither context (AO3) nor spelling, punctuation and grammar (AO4)',
              "Top band (18-20): close and finely judged analysis of both poets' methods, with terminology used accurately and to the point; a perceptive, coherent argument; quotations chosen precisely and built into it; and a comparison kept up from beginning to end",
            ],
          },
          {
            id: 'ocr-lit-05-q1b',
            questionNumber: 1,
            questionText:
              '(b) Explore in detail how one other poem from your anthology presents the effects of conflict.\n\nYour poem must come from the Conflict cluster and must not be "Envy".\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "The Destruction of Sennacherib" by Lord Byron. It describes an Assyrian army that attacks and is then destroyed in a single night, and it shows the effects of conflict on the soldiers, their horses and their families.\n\nAt first the army seems powerful. "The Assyrian came down like the wolf on the fold" is a simile which makes the army sound like a hungry animal attacking sheep. The soldiers are "gleaming in purple and gold", which suggests wealth and power. But the second stanza shows how quickly this changes. The army is "Like the leaves of the forest when Summer is green" at sunset, but in the morning it "lay withered and strown". The army has died overnight, like leaves falling in autumn.\n\nByron shows the effects of conflict on the dead. "The Angel of Death" kills the soldiers in their sleep: "the eyes of the sleepers waxed deadly and chill". He describes a horse lying dead, with the foam of its gasping "white on the turf", and a rider "distorted and pale", with "the rust on his mail". These images show that war leaves only death and decay.\n\nThe poem also shows how quiet the camp becomes: "And the tents were all silent, the banners alone, / The lances unlifted, the trumpet unblown." The weapons and instruments are useless now, because there is no one left to use them.\n\nThe effects of the conflict also reach the families at home. "And the widows of Ashur are loud in their wail" shows the women grieving for the dead soldiers, and their loud crying contrasts with the silence of the camp.\n\nThe poem ends by showing that God is more powerful than any army: "the might of the Gentile, unsmote by the sword, / Hath melted like snow in the glance of the Lord!" The army was not defeated by human weapons but by God.\n\nByron uses rhyming couplets and a fast, galloping rhythm, like horses charging, which makes the destruction of the army seem even more dramatic. Overall, he presents the effects of conflict as total destruction, death and grief.',
              'Grade 6-7':
                'I have chosen Lord Byron\'s "The Destruction of Sennacherib", which presents the effects of conflict as sudden, total and willed by God. The poem moves from the splendour of an invading army to its silent ruin and the grief it leaves behind.\n\nThe first stanza shows the army before its fate. The simile "The Assyrian came down like the wolf on the fold" makes the invaders predators and their victims sheep, and the army\'s "cohorts were gleaming in purple and gold", colours of wealth and royalty. The simile "the sheen of their spears was like stars on the sea" makes the army beautiful and vast. This splendour makes its destruction more striking.\n\nThe second stanza compresses the effects of conflict into two parallel similes. At sunset the host is "Like the leaves of the forest when Summer is green"; on the morrow it is "Like the leaves of the forest when Autumn hath blown" and "lay withered and strown". The repeated opening shows the same army transformed overnight from living to dead, as a forest changes from summer to autumn.\n\nByron then shows how the destruction happened and what it left. "For the Angel of Death spread his wings on the blast, / And breathed in the face of the foe as he passed": the army is killed by a breath, not a battle. The fourth and fifth stanzas begin with the anaphora "And there lay", which leads the reader across the battlefield from body to body. The horse lies "with his nostril all wide, / But through it there rolled not the breath of his pride", and the rider lies "distorted and pale, / With the dew on his brow, and the rust on his mail". The dew and rust suggest that nature is already reclaiming the dead.\n\nConflict\'s effects extend to sound and to the people at home. "And the tents were all silent, the banners alone, / The lances unlifted, the trumpet unblown" lists objects that have lost their purpose, and the negative prefixes of "unlifted" and "unblown" stress absence. The silence is broken by grief: "the widows of Ashur are loud in their wail, / And the idols are broke in the temple of Baal". The effects of the conflict reach the women of Assyria and even their gods.\n\nThe final couplet states the poem\'s meaning: "the might of the Gentile, unsmote by the sword, / Hath melted like snow in the glance of the Lord!" "Unsmote by the sword" stresses that no human weapon was needed; God\'s glance alone was enough. The anapaestic rhythm and rhyming couplets give the poem a galloping energy, like the cavalry it describes, but by the end that energy carries the reader towards the stillness of the dead. Byron presents conflict as producing death, silence and grief, and as proof that human power is nothing before God.',
              'Grade 8-9':
                'I have chosen Byron\'s "The Destruction of Sennacherib", which presents the effects of conflict through a reversal so complete that the poem becomes a meditation on the emptiness of human power. Its subject is a biblical catastrophe, the overnight destruction of the Assyrian army besieging Jerusalem, but Byron\'s interest is in what destruction leaves: bodies, silence, grief and the collapse of the faith that drove the invaders.\n\nThe first stanza creates power in order to destroy it. "The Assyrian came down like the wolf on the fold" uses a predatory simile in which "came down" carries the rush of an army descending, and the singular "The Assyrian" turns a host into a single beast. The army is made beautiful: "gleaming in purple and gold", with spears whose sheen is "like stars on the sea, / When the blue wave rolls nightly on deep Galilee". The images are of beauty, wealth and cosmic scale, and they make the effects of conflict, when they come, all the more absolute.\n\nThe second stanza is the poem\'s structural hinge, and it enacts the suddenness of destruction through parallelism. "Like the leaves of the forest when Summer is green" and "Like the leaves of the forest when Autumn hath blown" share their first seven words, so only the season changes, and a whole year\'s decline is compressed between sunset and morning, when the host "lay withered and strown". The effect of conflict is not gradual attrition but instant reversal.\n\nThe agent of that reversal is supernatural, and Byron describes it with eerie gentleness. "For the Angel of Death spread his wings on the blast, / And breathed in the face of the foe as he passed": death is a breath, and the soldiers die asleep, "the eyes of the sleepers waxed deadly and chill, / And their hearts but once heaved, and for ever grew still!" A single heartbeat stands for the end of a life. The effects of this conflict fall on men who never fought.\n\nByron then catalogues the aftermath through the anaphora "And there lay", which moves the reader from body to body like a witness crossing the field. The steed lies "with his nostril all wide, / But through it there rolled not the breath of his pride", where "pride" belongs to the horse but also to the army it carried. The rider lies "distorted and pale, / With the dew on his brow, and the rust on his mail": dew and rust are slow, natural processes already at work on bodies and armour, as if nature were reclaiming the instruments of war. The camp\'s silence is conveyed through objects stripped of purpose, "The lances unlifted, the trumpet unblown", where the negative prefixes register absence as a kind of sound.\n\nThe final stanza widens the effects beyond the battlefield. "The widows of Ashur are loud in their wail" brings grief home to Assyria, and their noise contrasts with the silence of the camp. "And the idols are broke in the temple of Baal" extends the defeat to belief itself: the invaders\' gods have failed them. The concluding couplet gives the theological meaning: "the might of the Gentile, unsmote by the sword, / Hath melted like snow in the glance of the Lord!" "Unsmote by the sword" insists that no human agency was involved, and the simile of melting snow makes imperial might as transient as weather.\n\nThe form intensifies these effects. The anapaestic rhythm drives every line forward with the energy of a cavalry charge, and the rhyming couplets close each idea firmly, yet the subject of most of the poem is stillness. The tension between galloping form and silent content makes the destruction feel like momentum stopped dead. Byron presents the effects of conflict as total: on the soldiers, on the families who mourn them, on the faith that sent them, and on the very idea that human power can secure anything.',
            },
            markScheme: [
              'AO1 (10 marks): an informed personal response to the chosen poem and to the question, supported by references quoted from memory',
              'AO2 (10 marks): analysis of how the poet uses language, form and structure - in these answers, Byron\'s predatory and seasonal similes, the anaphora of "And there lay", the negative prefixes of the silent camp and the galloping couplets that end in stillness',
              'AO1 and AO2 carry equal weight. The poem must come from the Conflict cluster and must not be "Envy": a poem from another cluster earns no marks. Part (b) assesses neither context (AO3) nor AO4',
              "Top band (18-20): a perceptive, coherent reading of the chosen poem as a whole, precise references built into the argument, and detailed analysis of the poet's methods in accurate terminology",
            ],
          },
        ],
      },
      {
        id: 'ocr-lit-05-sec-b',
        title: 'Section B: Shakespeare - Macbeth',
        description:
          'Answer ONE question. In the exam there are two questions on each set play, one based on an extract and one discursive, and you answer one of them; this practice paper sets the extract-based question on Macbeth. Read the extract below. The exam is closed book: the extract is printed, but you quote the rest of the play from memory. Four of the 40 marks are for spelling, punctuation and grammar, and for your vocabulary and sentence structures. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-lit-05-q2',
            questionNumber: 2,
            questionText:
              'Read the extract from Act 1 Scene 7, printed above. Macbeth has decided not to murder Duncan, and tells his wife so.\n\nExplore how Shakespeare presents ideas about masculinity. Refer to this extract from Act 1 Scene 7 and elsewhere in the play.\n\n[40 marks, including 4 marks for spelling, punctuation and grammar]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_05,
            extractSource: MACBETH_EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents masculinity as something the characters argue about and use to control each other. In this extract Macbeth decides not to murder Duncan, and Lady Macbeth attacks his manhood to change his mind.\n\nMacbeth begins firmly: "We will proceed no further in this business". He gives reasons, saying Duncan "hath honour’d me of late" and that he has won "Golden opinions from all sorts of people". But Lady Macbeth immediately questions his courage. She asks "Was the hope drunk / Wherein you dress’d yourself?", suggesting his earlier ambition was like being drunk, and that now he is like someone the morning after, "green and pale". She asks if he will "live a coward in thine own esteem", comparing him to "the poor cat i’ th’ adage", a cat that wants fish but will not get its feet wet.\n\nMacbeth defends himself: "I dare do all that may become a man; / Who dares do more is none." He means a real man knows where to stop. But Lady Macbeth replies "When you durst do it, then you were a man", which suggests that being a man means being brave enough to act on your desires, even if that means murder. She controls the conversation, and Macbeth can only defend himself.\n\nShe even says she would kill her own baby rather than break a promise: she would have "dash’d the brains out, had I so sworn as you / Have done to this". This shocking image shows how far she will go, and it makes Macbeth\'s hesitation seem weak.\n\nElsewhere in the play, masculinity is linked with violence. At the start, a captain praises Macbeth for killing a rebel, describing how he "unseam’d him from the nave to the chops". This violence is celebrated because it serves the king. Later, Macbeth uses his wife\'s tactic when he persuades murderers to kill Banquo, telling them "in the catalogue ye go for men", as if they have to prove that they are real men.\n\nBut Shakespeare also shows a different idea of masculinity. When Macduff hears that his wife and children have been murdered, Malcolm tells him to "Dispute it like a man", but Macduff replies "I must also feel it as a man". This suggests that real men can show grief and love.\n\nIn Jacobean times men were expected to be strong and to lead, and women to obey. Shakespeare shows that when masculinity is linked only with violence, it can be used to manipulate people into terrible actions.',
              'Grade 6-7':
                'Shakespeare presents masculinity as a contested idea that characters define to suit their purposes, and he shows that the definition which links manhood with violence is the one that drives the tragedy. In this extract the argument is staged directly, as Lady Macbeth overturns Macbeth\'s decision not to kill Duncan.\n\nMacbeth opens with a declarative, "We will proceed no further in this business", but the euphemism "business" betrays his discomfort even in refusing. His reasons concern reputation, not morality: Duncan "hath honour’d me of late", and he has "bought / Golden opinions from all sorts of people", which he wants to wear "in their newest gloss". Lady Macbeth\'s reply targets his manhood. The metaphor "Was the hope drunk / Wherein you dress’d yourself?" presents his ambition as drunken courage that now wakes "green and pale" with shame. Her question, "Art thou afeard / To be the same in thine own act and valour / As thou art in desire?", identifies a gap between wanting and doing, and the proverb of "the poor cat i’ th’ adage" reduces the warrior to a timid animal.\n\nMacbeth\'s defence offers a different idea of masculinity: "I dare do all that may become a man; / Who dares do more is none." Manhood here has a limit, set by what is fitting. Lady Macbeth\'s counter-question, "What beast was’t, then, / That made you break this enterprise to me?", turns his distinction against him: if no man would dare more, some beast must have proposed the murder, and she answers herself, "When you durst do it, then you were a man". Daring, in her terms, is what made him a man, so it is his retreat that becomes unmanly. She completes the argument with her most violent image: she would have "dash’d the brains out" of her own baby "had I so sworn as you / Have done to this". By rejecting maternal tenderness, she claims a ruthlessness she presents as greater than his.\n\nThis equation of manhood with violence is established from the start of the play. The Captain\'s report of Macbeth\'s heroism, "Till he unseam’d him from the nave to the chops", describes tearing a man open, and it wins Macbeth a title. Violence is admired when it serves the king. Later, Macbeth uses his wife\'s strategy on the men he hires to kill Banquo: when they say "We are men, my liege", he replies "Ay, in the catalogue ye go for men", meaning that they are men only in name unless they prove it by killing. At the banquet, Lady Macbeth asks "Are you a man?" when he is terrified by Banquo\'s ghost.\n\nShakespeare offers an alternative through Macduff. When he learns of his family\'s murder, Malcolm urges "Dispute it like a man", but Macduff answers, "I shall do so; / But I must also feel it as a man". Masculinity here includes grief and tenderness. Even so, the play ends with a military idea of manhood: Ross reports that Young Siward "only liv’d but till he was a man", and that "like a man he died".\n\nIn Jacobean England, a man\'s honour was closely tied to courage in battle, and wives were expected to obey their husbands. Lady Macbeth\'s control of the debate inverts that hierarchy and would have disturbed an audience. Shakespeare suggests that a society which defines manhood by violence creates men like Macbeth, who can be persuaded that murder is proof of courage.',
              'Grade 8-9':
                'Shakespeare presents masculinity in Macbeth as a constructed category whose definition is perpetually contested, and violence as the means by which the contest is decided. This extract stages the play\'s central argument about manhood in concentrated form, and its outcome, Lady Macbeth\'s victory over her husband\'s scruple, sets in motion a tragedy that ends only when the play has found, at great cost, another way of being a man.\n\nMacbeth\'s opening assertion, "We will proceed no further in this business", performs decisive authority, but its language undermines it. "Business" domesticates regicide, and "proceed" implies a process already under way. His reasons are revealingly mercantile: he has "bought / Golden opinions from all sorts of people", which he would wear "in their newest gloss". Reputation is a purchase and virtue a garment. Lady Macbeth attacks not his argument but the self it rests on. The metaphor "Was the hope drunk / Wherein you dress’d yourself?" turns his earlier ambition into drunken bravado and his present hesitation into a "green and pale" morning after. Her question, "Art thou afeard / To be the same in thine own act and valour / As thou art in desire?", identifies a fracture between wanting and doing, and she names it as cowardice: he would "live a coward in thine own esteem".\n\nMacbeth\'s reply proposes a model of manhood bounded by propriety: "I dare do all that may become a man; / Who dares do more is none." Courage is limited by what is fitting, and to exceed it is to stop being human. Lady Macbeth\'s counter-question collapses the model by turning it on him: "What beast was’t, then, / That made you break this enterprise to me?" By his own measure, the man who first proposed the murder was no man, so either he was a beast then or he is a coward now. She then redefines manhood as daring itself: "When you durst do it, then you were a man; / And, to be more than what you were, you would / Be so much more the man." Her final move makes the broken oath, not the deed, the measure of a man: she would have destroyed what she loves most, "dash’d the brains out, had I so sworn as you / Have done to this". She offers her own suppressed tenderness ("I have given suck, and know / How tender ’tis to love the babe that milks me") as evidence of a resolve greater than his. The scene inverts the expected hierarchy of husband and wife, and it does so by defining masculinity more ruthlessly than any man in the play.\n\nThe play embeds this argument in a culture that already rewards male violence. The Captain\'s report in Act 1 Scene 2 celebrates Macbeth for having "unseam’d him from the nave to the chops", a description of literally opening a human body, and the reward is a title. The political order depends on channelling male violence outward against enemies, and regicide is that violence turned inward against the king. Having learned the equation of manhood with violence, Macbeth weaponises it himself. When the murderers protest "We are men, my liege", he answers "Ay, in the catalogue ye go for men", comparing them to dogs that share a name but differ in worth: they must kill to prove they are more than men in name. At the banquet the roles of Act 1 return, as Lady Macbeth asks "Are you a man?", and Macbeth answers the ghost with a boast, "What man dare, I dare". By Act 5 his manhood rests on a prophecy: when Macduff reveals that he "was from his mother’s womb / Untimely ripp’d", Macbeth curses the tongue that has "cow’d my better part of man".\n\nAgainst this, Macduff offers the play\'s most radical redefinition. Told of his family\'s murder, he is urged by Malcolm to "Dispute it like a man", and replies: "I shall do so; / But I must also feel it as a man". Masculinity here includes grief, and "also" refuses to choose between feeling and action. Yet the play does not simply endorse it. The final scenes return to the martial ideal: Ross reports that Young Siward "only liv’d but till he was a man", and that "like a man he died". Manhood is confirmed, again, by a violent death.\n\nFor a Jacobean audience, raised in a culture of honour and patriarchal authority, Lady Macbeth\'s mastery of the debate would have been disturbing: a woman controlling the definition of the very quality that was supposed to make men rule. But Shakespeare\'s deeper point is that the definition itself is the danger. A society that defines a man by what he dares to do will produce men who can be shamed into murder, and the play suggests that only through catastrophic loss, as with Macduff, can a fuller idea of manhood be spoken.',
            },
            markScheme: [
              "AO1 (14 marks): a critical, personal response to the play's ideas about masculinity, supported by well-chosen references to this extract and to the rest of the play",
              'AO2 (14 marks): analysis of Shakespeare\'s language, form and structure - here the questions with which Lady Macbeth takes control of the scene, the contested phrase "become a man" and the image of the "babe that milks me"',
              'AO3 (8 marks): context that sharpens the reading, such as Jacobean codes of honour and the expected obedience of wives, rather than facts added for their own sake',
              'AO4 (4 marks), marked on its own: spelling, punctuation, vocabulary and sentence structures - 1 mark if reasonably accurate, 2-3 if accurate with a good range, 4 if consistently accurate, with vocabulary and sentences controlled for effect',
              'AO1 to AO3 are marked together out of 36. An answer that stays inside the extract cannot go above Level 3 (13-18), and one that touches on the rest of the play only briefly cannot go above Level 4 (19-24)',
              "Top band (31-36): a sustained, perceptive argument, precise references from the extract and the whole play built into it, detailed analysis of Shakespeare's methods, and context used with insight to inform the reading",
            ],
          },
        ],
      },
    ],
  },
]
