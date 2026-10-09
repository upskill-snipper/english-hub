// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * Five Eduqas (WJEC) GCSE English Literature mock papers, each set as Eduqas
 * sets C720. All five are live: wjecLitPapers is in allMockExamPapers and the
 * mock-exam pages serve them.
 *
 * REBUILT 9 OCTOBER 2026. WHAT WAS WRONG. Every section was two 20-mark
 * questions, a tariff no Eduqas question has, so the inline feedback matched
 * none of the questions in src/lib/marking/mark-schemes/eduqas-lit.ts and gave
 * every answer general feedback. Component 1's poetry section set three poems
 * the site had written itself, in place of Eduqas's anthology. Component 2
 * (04 and 05) ran 120 minutes for 80 marks in two sections, each on a passage
 * the site had written ("Original literary fiction") rather than a set text,
 * with no unseen poetry. Eduqas sets none of that:
 *   - Its specification (C720QS, Version 4, August 2024), its Summer 2024
 *     Component 1 question paper and mark scheme (C720U10-1) and its Summer
 *     2024 Component 2 mark scheme (C720U20-1) set Component 1, Shakespeare
 *     and Poetry, as 2 hours and 80 marks. Section A, on one play: a question
 *     on a printed extract, 15 marks, about 20 minutes, AO1 and AO2; then an
 *     essay on the whole play, 25 marks, about 40 minutes, 5 of them for AO4
 *     (spelling, punctuation, vocabulary and sentence structures). Section B,
 *     the anthology: a printed poem, 15 marks, about 20 minutes; then a
 *     comparison with a second anthology poem the student chooses and quotes
 *     from memory, 25 marks, about 40 minutes; both on AO1, AO2 and AO3.
 *     Component 2 is 2 hours 30 and 120 marks: Section A, a post-1914 text,
 *     40 marks with 5 for AO4, on a printed extract and the text as a whole,
 *     about 45 minutes; Section B, a 19th-century novel, 40 marks on AO1 to
 *     AO3, about 45 minutes; Section C, two unseen poems, 15 marks on the
 *     first and 25 comparing them, AO1 and AO2, about an hour.
 *   - The questions use Eduqas's wording from those papers ("Look at how the
 *     characters speak and behave here. How do you think an audience might
 *     respond to this part of the play?", "and how it is presented at
 *     different points in the play", "Choose one other poem from the
 *     anthology in which the poet also writes about", "and its effect on
 *     you", "Now compare"), and every mark scheme gives Eduqas's weighting and
 *     its five band ranges for that tariff.
 *
 * THE ANTHOLOGY. Eduqas replaced its anthology between the summer 2026 and
 * summer 2027 series (src/lib/board/eduqas-anthology.ts), so these papers set
 * the new one, the WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology
 * (C720), for first assessment in 2027. Each paper prints a poem by a poet who
 * died before 1956, and its part (b) answers choose another such poem, so both
 * are out of UK copyright and quoted as freely as the answers need:
 *   01 Drummer Hodge (Thomas Hardy), with Disabled (Wilfred Owen);
 *   02 Cousin Kate (Christina Rossetti), with Sonnet 29 (Elizabeth Barrett
 *      Browning);
 *   03 I Wandered Lonely as a Cloud (William Wordsworth), with I Shall Return
 *      (Claude McKay).
 * The text is Eduqas's, because that is what the student is given, read from
 * its PDF on 9 October 2026 with the line and stanza breaks taken from images
 * of the pages. Boards print different texts: Eduqas has "Grow up some
 * Southern tree" where Hardy wrote "Grow to", and a Cousin Kate with "silken
 * knot" and "Your father would give lands". The site's own Eduqas page for
 * Cousin Kate prints "--" for two of the anthology's dashes, so the printed
 * poems here come from the PDF, not from the pages.
 *
 * COMPONENT 2 now sets Eduqas set texts. Section A is An Inspector Calls in
 * both papers, Sheila Birling in 04 and Mrs Birling in 05: of Eduqas's ten
 * post-1914 texts it is the one whose quotations could be checked, against a
 * published script read for checking only. It is in copyright, so these
 * papers cannot print the extract Eduqas prints: each question says where the
 * extract falls in the student's own copy, and the answers quote the play
 * within the house limits (src/lib/study-guides/fair-dealing.ts). Section B is
 * A Christmas Carol in 04 (the Cratchits) and Jekyll and Hyde in 05 (Mr Hyde),
 * each extract cut from the held edition by passage() in
 * src/lib/study-guides/passage.ts. Section C sets the three poems the site
 * wrote, which had stood in for the anthology, as unseen poems: they are
 * labelled as written for these papers and attributed to no poet, and their
 * answers, already checked (see below), carry over, each with a sentence on
 * the poem's effect on the reader, which Eduqas's question asks for. The four
 * prose passages are gone.
 *
 * MACBETH is unchanged in its extracts and essays. Each extract answer now
 * also says how an audience might respond, which is the question Eduqas asks,
 * and the essays are 20 marks and 5 for AO4. Eduqas does not assess context on
 * the play, so the essays' context is credited only where it serves the
 * reading, and the mark schemes say so.
 *
 * The inline feedback now marks each answer against its own question in
 * eduqas-lit-comp1 or eduqas-lit-comp2, which
 * src/lib/marking/__tests__/essay-feedback-targets.test.ts pins.
 * src/__tests__/wjec-lit-a-quotes-the-real-text.test.ts pins the shape, the
 * set texts, the printed texts and every quotation.
 *
 * EARLIER: 26 AND 27 SEPTEMBER 2026. Before the rebuild, the Macbeth extracts
 * and the answers on the site's own poems and passages were corrected as
 * follows. The passages have since gone, and the poems moved to Section C.
 *
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * The three Macbeth extracts, printed as Shakespeare's on the live papers
 * wjec-lit-01 to 03, had been typed in rather than cut from an edition, and
 * none of them was the edition's text:
 *   - 01, Act 1 Scene 7: the first sixteen lines of the soliloquy with
 *     "ingredience" changed to "ingredients", the elisions spelt out
 *     ("poisoned") and the punctuation redone. 40% of its sentences were
 *     verbatim;
 *   - 02, Act 2 Scene 2: Lady Macbeth told Macbeth to "wash this filthy
 *     witness from your hands", where the held edition (and Folger) have
 *     "hand", with "murder'd" and "ravell'd" spelt out and the punctuation
 *     redone: 33% verbatim. The Grade 4-5 answer to wjec-lit-02-q1a quoted
 *     the altered line as Shakespeare's;
 *   - 03, Act 5 Scene 5: the edition's words, but not its punctuation,
 *     capitals or elisions ("The queen", "cooled", "supped"): 55% verbatim.
 *     It stopped at "heard no more", yet all three answers to
 *     wjec-lit-03-q1a went on to the idiot's tale, and the Grade 4-5 answer
 *     quoted "a tale / Told by an idiot", which the extract did not print.
 * The model answers had errors of their own. Quotation marks around words
 * that are not the play's: "if it were right" (offered as what Macbeth does
 * not say), Edward the Confessor's "healing touch" (the play has "The
 * healing benediction"), Duncan's "plants" and "labours" (he says "plant"
 * and "labour"), and Ross's "shrieks that rend the air / Are made, not
 * marked" (the edition has "rent" and "mark'd"). Silent cuts: "wash this
 * blood clean", which drops the line break and "from my hand", and "the
 * earth was feverous and did shake", which joins two lines of Lennox's.
 * And analysis the words did not bear out: a "tripartite listing" and a
 * "triple bond" where Macbeth says "double trust"; Seyton's six-syllable
 * "The Queen, my lord, is dead" called a single iambic pentameter line;
 * "nothing" called unstressed at the end of the speech; the crown, rather
 * than life, said to be "signifying nothing"; Lady Macbeth's suicide stated
 * as fact, where Malcolm says only "as 'tis thought"; and "Macbeth's
 * compulsive speech about his crimes", when it is Lady Macbeth who gives the
 * murder away in her sleep. In Component 2 (wjec-lit-04), whose passages
 * are the site's own, one answer quoted "This estate is not us. We live
 * here." as one speech with the dialogue tag between them cut out, another
 * put "you can be anything" in quotation marks though the passage never
 * says it, and one called the third-person narration a "teenage narrator".
 *
 * WHAT IT IS NOW. Each Macbeth extract is a genuine passage of the scene and
 * moment the old one claimed, cut from the held edition, src/data/full-texts/
 * macbeth.ts (Project Gutenberg #1533), by playPassage() in
 * src/lib/study-guides/passage.ts and written into this file by script,
 * never typed; the call that cut each is in the comment above it. It is set
 * out as src/data/mock-exams/aqa-lit-p1-a.ts and ocr-lit-a.ts set theirs:
 * the speaker's name on its own line, a line break per verse line, stage
 * directions bracketed without the edition's italic underscores, and only
 * those separators changed. They are literals rather than calls for the
 * reasons aqa-lit-p1-a.ts gives: the checker reads a bank's passages from
 * its source, and this module is the chunk the browser downloads for one
 * paper, so importing the whole play to print three speeches would be a
 * poor trade. A speech is one paragraph in the edition and the smallest unit
 * passage() cuts, so each extract runs to whole speeches:
 *   - 01 is now the whole soliloquy, to "And falls on th' other", which also
 *     gives the moral-conflict question the pleading angels, the new-born
 *     babe and "Vaulting ambition";
 *   - 02 is the same exchange as before, "Methought I heard a voice" to
 *     "Look on't again I dare not";
 *   - 03 runs from "I have almost forgot the taste of fears" to "Signifying
 *     nothing", so the speech ends where Shakespeare ends it.
 * Each extractSource names the edition, and each part (a) question now says
 * where its extract falls. The questions themselves are unchanged. Every
 * quotation in the Macbeth answers was checked by script: in part (a)
 * against its extract, in the whole-play essays against the held edition;
 * the analysis was corrected where it was not true of the words quoted.
 *
 * NOT CHANGED. The three poems and four prose passages are the site's own, labelled
 * as original compositions and attributed to no one, so there is no text to
 * check them against; only answers that misquoted or misdescribed them were
 * corrected.
 *
 * WHAT A REVIEW ADDED (27 September 2026). The first fix corrected the
 * Component 2 answers of wjec-lit-04 and left the rest to the checker, which
 * reads only quotations of four words or more and cannot judge a claim.
 * Reading every answer against its extract found more a student would learn
 * wrong. Quotations altered: "travel" and "survive" for the poem's "travels"
 * and "survives"; "a recipe and a suitcase and a stubbornness" with its line
 * break dropped; "Macbeth shall sleep no more," for the extract's "!", and
 * Ross's "stage:" printed as "stage.". Claims the words do not bear out:
 * "They took the hill apart" (active) and "restructuring its operational
 * model" (active) each called passive; "if you didn't look down" called an
 * injunction; an "as though" clause called parenthetical; both poems of
 * wjec-lit-01 said to span three generations, where "The Quarry" has two;
 * the third of four stanzas called the middle one; the cook in "Diwali,
 * Coventry", the speaker's "my mother", taken for the speaker; the estate's
 * lifts called broken (they smell); a thought of Eleanor's reported as
 * something she says; Daniel said to go to work for "three days", where the
 * passage says only that he went on working until he told Margaret on
 * Sunday; and "India", "the wealthier parts of the
 * city", "the final paragraph", "Macbeth poisons", a male consultant and a
 * female Diwali speaker, none of which the words give. One answer, on a site
 * many children use, cited a book by its profane title; it now describes
 * Graeber's argument instead. And each comparison extract printed its first
 * poem's title twice, because the poem constants already begin with their
 * titles. src/__tests__/wjec-lit-a-quotes-the-real-text.test.ts now cuts the
 * three extracts again and holds every quotation, single words included, to
 * the words, stops and line breaks of the text it quotes.
 *
 * To check: node scripts/check-mock-exam-extracts.mjs --file wjec-lit-a
 */

// ─── Component 1 Extracts: Shakespeare (Macbeth) ────────────────────────────

// Act 1 Scene 7: the whole soliloquy, alone, before Lady Macbeth enters. Cut with
// playPassage(macbethText, 'acti-scenevii', 'If it were done when', 'And falls on th').
const WJEC_MACBETH_01 = `MACBETH
If it were done when ’tis done, then ’twere well
It were done quickly. If th’ assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all—here,
But here, upon this bank and shoal of time,
We’d jump the life to come. But in these cases
We still have judgement here; that we but teach
Bloody instructions, which being taught, return
To plague th’ inventor. This even-handed justice
Commends th’ ingredience of our poison’d chalice
To our own lips. He’s here in double trust:
First, as I am his kinsman and his subject,
Strong both against the deed; then, as his host,
Who should against his murderer shut the door,
Not bear the knife myself. Besides, this Duncan
Hath borne his faculties so meek, hath been
So clear in his great office, that his virtues
Will plead like angels, trumpet-tongued, against
The deep damnation of his taking-off;
And pity, like a naked new-born babe,
Striding the blast, or heaven’s cherubin, hors’d
Upon the sightless couriers of the air,
Shall blow the horrid deed in every eye,
That tears shall drown the wind.—I have no spur
To prick the sides of my intent, but only
Vaulting ambition, which o’erleaps itself
And falls on th’ other—`

const WJEC_MACBETH_01_SOURCE =
  'William Shakespeare, Macbeth, Act 1, Scene 7. Text: Project Gutenberg #1533.'

// Act 2 Scene 2, just after the murder: from the voice that cried "Sleep no more" to
// Macbeth's refusal to take the daggers back. Cut with playPassage(macbethText,
// 'actii-sceneii', 'Methought I heard a voice', 'Look on').
const WJEC_MACBETH_02 = `MACBETH
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

const WJEC_MACBETH_02_SOURCE =
  'William Shakespeare, Macbeth, Act 2, Scene 2. Text: Project Gutenberg #1533.'

// Act 5 Scene 5, after the cry of women: to the end of "Tomorrow, and tomorrow". Cut
// with playPassage(macbethText, 'actv-scenev', 'I have almost forgot the taste',
// 'Signifying nothing').
const WJEC_MACBETH_03 = `MACBETH
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

const WJEC_MACBETH_03_SOURCE =
  'William Shakespeare, Macbeth, Act 5, Scene 5. Text: Project Gutenberg #1533.'

// ─── Component 1, Section B: the Eduqas anthology for 2027 ──────────────────

const DRUMMER_HODGE = `Drummer Hodge

They throw in Drummer Hodge, to rest
Uncoffined — just as found:
His landmark is a kopje-crest
That breaks the veldt around:
And foreign constellations west
Each night above his mound.

Young Hodge the drummer never knew —
Fresh from his Wessex home —
The meaning of the broad Karoo,
The Bush, the dusty loam,
And why uprose to nightly view
Strange stars amid the gloam.

Yet portion of that unknown plain
Will Hodge for ever be;
His homely Northern breast and brain
Grow up some Southern tree,
And strange-eyed constellations reign
His stars eternally.`

const DRUMMER_HODGE_SOURCE =
  'Thomas Hardy (1840-1928). Text as printed in the Eduqas GCSE English Literature Poetry Anthology, for first assessment in 2027, page 9.'

const COUSIN_KATE = `Cousin Kate

I was a cottage maiden
Hardened by sun and air,
Contented with my cottage mates,
Not mindful I was fair.
Why did a great lord find me out,
And praise my flaxen hair?
Why did a great lord find me out
To fill my heart with care?

He lured me to his palace home—
Woe’s me for joy thereof—
To lead a shameless shameful life,
His plaything and his love.
He wore me like a silken knot,
He changed me like a glove;
So now I moan, an unclean thing,
Who might have been a dove.

O Lady Kate, my cousin Kate,
You grew more fair than I:
He saw you at your father’s gate,
Chose you, and cast me by.
He watched your steps along the lane,
Your work among the rye;
He lifted you from mean estate
To sit with him on high.

Because you were so good and pure
He bound you with his ring:
The neighbours call you good and pure,
Call me an outcast thing.
Even so I sit and howl in dust,
You sit in gold and sing:
Now which of us has tenderer heart?
You had the stronger wing.

O cousin Kate, my love was true,
Your love was writ in sand:
If he had fooled not me but you,
If you stood where I stand,
He’d not have won me with his love
Nor bought me with his land;
I would have spit into his face
And not have taken his hand.

Yet I’ve a gift you have not got,
And seem not like to get:
For all your clothes and wedding-ring
I’ve little doubt you fret.
My fair-haired son, my shame, my pride,
Cling closer, closer yet:
Your father would give lands for one
To wear his coronet.`

const COUSIN_KATE_SOURCE =
  'Christina Rossetti (1830-1894). Text as printed in the Eduqas GCSE English Literature Poetry Anthology, for first assessment in 2027, page 6.'

const I_WANDERED = `I Wandered Lonely as a Cloud

I wandered lonely as a cloud
That floats on high o’er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`

const I_WANDERED_SOURCE =
  'William Wordsworth (1770-1850). Text as printed in the Eduqas GCSE English Literature Poetry Anthology, for first assessment in 2027, page 5.'

// ─── Component 2, Section B: 19th century prose ─────────────────────────────

// Cut with passage(aChristmasCarolText, 'section-3', "At last the dinner was all done", "hungry brothers in the dust"),
// with the edition's italic underscores dropped.
const A_CHRISTMAS_CAROL = `At last the dinner was all done, the cloth was cleared, the hearth swept, and the fire made up. The compound in the jug being tasted, and considered perfect, apples and oranges were put upon the table, and a shovel-full of chestnuts on the fire. Then all the Cratchit family drew round the hearth, in what Bob Cratchit called a circle, meaning half a one; and at Bob Cratchit's elbow stood the family display of glass. Two tumblers, and a custard-cup without a handle.

These held the hot stuff from the jug, however, as well as golden goblets would have done; and Bob served it out with beaming looks, while the chestnuts on the fire sputtered and cracked noisily. Then Bob proposed:

"A Merry Christmas to us all, my dears. God bless us!"

Which all the family re-echoed.

"God bless us every one!" said Tiny Tim, the last of all.

He sat very close to his father's side upon his little stool. Bob held his withered little hand in his, as if he loved the child, and wished to keep him by his side, and dreaded that he might be taken from him.

"Spirit," said Scrooge, with an interest he had never felt before, "tell me if Tiny Tim will live."

"I see a vacant seat," replied the Ghost, "in the poor chimney-corner, and a crutch without an owner, carefully preserved. If these shadows remain unaltered by the Future, the child will die."

"No, no," said Scrooge. "Oh, no, kind Spirit! say he will be spared."

"If these shadows remain unaltered by the Future, none other of my race," returned the Ghost, "will find him here. What then? If he be like to die, he had better do it, and decrease the surplus population."

Scrooge hung his head to hear his own words quoted by the Spirit, and was overcome with penitence and grief.

"Man," said the Ghost, "if man you be in heart, not adamant, forbear that wicked cant until you have discovered What the surplus is, and Where it is. Will you decide what men shall live, what men shall die? It may be, that in the sight of Heaven, you are more worthless and less fit to live than millions like this poor man's child. Oh God! to hear the Insect on the leaf pronouncing on the too much life among his hungry brothers in the dust!"`

const A_CHRISTMAS_CAROL_SOURCE =
  'Charles Dickens, A Christmas Carol, Stave 3. Text: Project Gutenberg #46.'

// Cut with passage(jekyllAndHydeText, 'section-2', "Will you let me see your face?", "your new friend"),
// with the edition's italic underscores dropped.
const JEKYLL_AND_HYDE = `“Will you let me see your face?” asked the lawyer.

Mr. Hyde appeared to hesitate, and then, as if upon some sudden reflection, fronted about with an air of defiance; and the pair stared at each other pretty fixedly for a few seconds. “Now I shall know you again,” said Mr. Utterson. “It may be useful.”

“Yes,” returned Mr. Hyde, “it is as well we have met; and à propos, you should have my address.” And he gave a number of a street in Soho.

“Good God!” thought Mr. Utterson, “can he, too, have been thinking of the will?” But he kept his feelings to himself and only grunted in acknowledgment of the address.

“And now,” said the other, “how did you know me?”

“By description,” was the reply.

“Whose description?”

“We have common friends,” said Mr. Utterson.

“Common friends,” echoed Mr. Hyde, a little hoarsely. “Who are they?”

“Jekyll, for instance,” said the lawyer.

“He never told you,” cried Mr. Hyde, with a flush of anger. “I did not think you would have lied.”

“Come,” said Mr. Utterson, “that is not fitting language.”

The other snarled aloud into a savage laugh; and the next moment, with extraordinary quickness, he had unlocked the door and disappeared into the house.

The lawyer stood awhile when Mr. Hyde had left him, the picture of disquietude. Then he began slowly to mount the street, pausing every step or two and putting his hand to his brow like a man in mental perplexity. The problem he was thus debating as he walked, was one of a class that is rarely solved. Mr. Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation, he had a displeasing smile, he had borne himself to the lawyer with a sort of murderous mixture of timidity and boldness, and he spoke with a husky, whispering and somewhat broken voice; all these were points against him, but not all of these together could explain the hitherto unknown disgust, loathing and fear with which Mr. Utterson regarded him. “There must be something else,” said the perplexed gentleman. “There is something more, if I could find a name for it. God bless me, the man seems hardly human! Something troglodytic, shall we say? or can it be the old story of Dr. Fell? or is it the mere radiance of a foul soul that thus transpires through, and transfigures, its clay continent? The last, I think; for, O my poor old Harry Jekyll, if ever I read Satan’s signature upon a face, it is on that of your new friend.”`

const JEKYLL_AND_HYDE_SOURCE =
  'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde, Chapter 2. Text: Project Gutenberg #43.'

// ─── Component 2, Section C: unseen poems, written for these papers ────────

const QUARRY = `The Quarry

They took the hill apart, stone by stone,
and left this wound - a basin of grey water
where the rock face drops sheer to nothing,
where even echoes sound like they've been taught
to come back smaller than they left.

My grandfather worked here forty years.
His lungs are full of what they took.
His hands remember every charge he set,
every tremor travelling up his arms
like a small earthquake saying: here, and here.

Now the developers are coming.
They'll fill it in with something - flats, perhaps,
a leisure centre, one of those cafés
where everything costs four pounds fifty
and the menu says "artisan."

He stands at the edge and looks down.
The water is the colour of his eyes.
I hold his arm. He does not speak.
Some places are not places any more.
They are the spaces people leave behind.`

const DIWALI = `Diwali, Coventry

The car park of the community centre
is strung with lights that almost -
but not quite - recall another sky,
another city, another life.

Inside, my mother fries gulab jamun
in oil that spits and sings,
her hands moving with the certainty
of someone following instructions
written in a language older than her bones.

My daughter asks me why we celebrate.
I say: because the light comes back.
But what I mean is: because your grandmother
crossed an ocean with nothing
but a recipe and a suitcase
and a stubbornness that could weather
any winter this grey island threw at her.

The fireworks go up. We clap.
The lights are not the same lights.
The sky is not the same sky.
But the sweetness - that travels.
That survives.`

const DIAGNOSIS = `After the Diagnosis

The consultant speaks in careful paragraphs,
each sentence weighted, qualified,
as though the words themselves might do the damage
that the cells have already done.

You nod. You ask the questions
you rehearsed in the car park,
your voice steady as a surgeon's hand
while underneath the table
your fingers find my fingers
and hold on like a child crossing a road.

We drive home through the ordinary world -
the petrol station, the school run traffic,
the man walking his dog past the allotments -
and none of it has changed, and all of it has changed,
and the radio plays a song we used to love
and neither of us reaches to turn it up.`

// ─── Mark schemes ────────────────────────────────────────────────────────────

/**
 * Eduqas's five bands for a question worth `marks`, as its Summer 2024 mark
 * schemes set them (C720U10-1 for Component 1, C720U20-1 for Component 2).
 * The words paraphrase Eduqas's band descriptors for AO1 and AO2, as
 * src/lib/marking/mark-schemes/eduqas-lit.ts does; `context` adds AO3 where
 * the question assesses it. AO4, where a question carries it, has its own grid.
 */
function bands(marks, context) {
  const ranges = {
    15: ['13-15', '10-12', '7-9', '4-6', '1-3'],
    20: ['17-20', '13-16', '9-12', '5-8', '1-4'],
    25: ['21-25', '16-20', '11-15', '6-10', '1-5'],
    35: ['29-35', '22-28', '15-21', '8-14', '1-7'],
    40: ['33-40', '25-32', '17-24', '9-16', '1-8'],
  }[marks]
  const words = [
    [
      'a sensitive and evaluative approach, a perceptive understanding of the text and pertinent references, including quotation',
      "analysis and appreciation of the writer's language, form and structure, with assured comment on meanings and effects and precise terminology",
      'an assured understanding of how the text relates to its contexts',
    ],
    [
      'a thoughtful approach, a secure understanding of the text and well-chosen references, including quotation',
      "thoughtful discussion and increasing analysis of the writer's methods and their effects, with apt terminology",
      'a secure understanding of how the text relates to its contexts',
    ],
    [
      'a straightforward approach, an understanding of key aspects of the text and appropriate references, including quotation',
      "comment on the writer's methods and some evaluation of their effects, with relevant terminology",
      'an understanding of how the text relates to its contexts',
    ],
    [
      'a limited approach, some understanding of key aspects and some direct reference',
      "simple comment on the writer's methods and their effects",
      'some awareness of the contexts of the text',
    ],
    [
      'a simple approach, a basic understanding and general reference to the text',
      "limited comment on the writer's methods",
      'limited awareness of the contexts of the text',
    ],
  ]
  return ranges.map(
    (range, i) =>
      `Band ${5 - i} (${range}): ${words[i][0]}; ${words[i][1]}${context ? `; ${words[i][2]}` : ''}`,
  )
}

// ─── Papers ──────────────────────────────────────────────────────────────────

export const wjecLitPapers: MockExamPaper[] = [
  {
    id: 'wjec-lit-01',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: Shakespeare and Poetry',
    subtitle: 'C720/01',
    code: 'C720/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-lit-01-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer both questions on Macbeth. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. 5 of the second question's marks are for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-01-q1a',
            questionNumber: 1,
            questionText:
              'Read the extract below, from Act 1 Scene 7. Macbeth is alone, deciding whether to murder King Duncan, who is a guest in his castle.\n\nLook at how Macbeth speaks and behaves here. How do you think an audience might respond to this part of the play?\n\nRefer closely to details from the extract to support your answer.\n\n[15]',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: WJEC_MACBETH_01,
            extractSource: WJEC_MACBETH_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'An audience is likely to feel both horror and some sympathy here, because Shakespeare presents Macbeth as deeply conflicted about murdering Duncan. The opening, "If it were done when \'tis done, then \'twere well / It were done quickly", shows that he wishes the murder could be over quickly and have no consequences; in that first sentence he calls the murder only "it". The image of "our poison\'d chalice" being returned "To our own lips" suggests that evil deeds come back to harm the person who commits them. Macbeth then gives the reasons not to kill Duncan: he is "his kinsman and his subject", and he is also "his host", who "should against his murderer shut the door, / Not bear the knife myself". This shows he understands the moral rules he would be breaking. He even imagines "pity, like a naked new-born babe" making the whole world weep at the deed. By the end he admits that nothing drives him on except "Vaulting ambition, which o\'erleaps itself". His conflict comes from knowing what is right while being tempted to do what is wrong. An audience may pity him for this struggle, but they also know that he has not stopped thinking about murder.',
              'Grade 6-7':
                'An audience is drawn into Macbeth\'s mind here, and their response is divided: Shakespeare dramatises his moral conflict through a soliloquy structured as an argument against murder that reveals, as it goes, how strongly he is tempted. The opening - "If it were done when \'tis done, then \'twere well / It were done quickly" - is a tangle of conditionals that enacts his confusion. The repetition of "done" gives it a circular, trapped quality, and the "if" shows that his first concern is not whether to act but whether the act could be contained: whether it could "trammel up the consequence", catching every result in a net, so that "this blow / Might be the be-all and the end-all". He would "jump the life to come", risking his soul, but admits that "We still have judgement here": in this life, violence teaches "Bloody instructions" that "return / To plague th\' inventor". The image of "even-handed justice" offering "our poison\'d chalice / To our own lips" establishes a principle of moral reciprocity: the poisoner drinks from his own cup.\n\nThe moral case follows. Duncan is "here in double trust": Macbeth is "his kinsman and his subject", and he is "his host", who "should against his murderer shut the door, / Not bear the knife myself". The king\'s virtues "Will plead like angels, trumpet-tongued", and "pity, like a naked new-born babe" will "blow the horrid deed in every eye". Shakespeare gives Macbeth complete clarity about why the murder is wrong, which makes his eventual decision more disturbing: it is knowledge, not ignorance, that is overridden. The speech ends by naming his only motive, "Vaulting ambition, which o\'erleaps itself / And falls on th\' other", and the sentence breaks off unfinished. With neither Lady Macbeth nor the witches present, Macbeth confronts the moral case alone and finds it overwhelming; his conscience is intact even as his ambition prepares to override it. That is what makes the moment so tense for an audience: they hope the argument will win, and suspect that it will not.',
              'Grade 8-9':
                'An audience is likely to respond to this soliloquy with a mixture of sympathy and dread, because Shakespeare constructs Macbeth\'s moral conflict as self-aware reasoning in which the speaker assembles the case against murder while revealing that his first objections are practical rather than moral, a distinction that condemns him more thoroughly than unthinking villainy would. The opening knot of conditionals ("If it were done when \'tis done") exposes the nature of his hesitation: he asks not whether the murder would be right but whether it would be finished, whether it could "trammel up the consequence" and so be "the be-all and the end-all". The subjunctive mood ("If it were done", "Might be") marks this as a negotiation with possibility rather than a moral reckoning. Consequence is pictured as something physical that can be netted and held, and the lines that follow show why it cannot: "even-handed justice / Commends th\' ingredience of our poison\'d chalice / To our own lips". The chalice may recall the communion cup, turning a sacrament into an instrument of death, and the syntax makes the poisoner his own victim.\n\nOnly then does Macbeth turn to what the murder would violate. Duncan is "here in double trust": the first bond is that of "his kinsman and his subject", the second that of "his host", and the host who "should against his murderer shut the door, / Not bear the knife myself" is the speech\'s moral centre. The imagery then grows beyond Macbeth\'s control. Duncan\'s virtues "Will plead like angels, trumpet-tongued, against / The deep damnation of his taking-off", and "pity, like a naked new-born babe, / Striding the blast" gives the most helpless figure imaginable the power to "blow the horrid deed in every eye, / That tears shall drown the wind". Conscience speaks in images of judgement that the calculating opening could not contain.\n\nThe last sentence names the one motive left: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on th\' other". His intent is a horse he cannot spur, and ambition a rider who vaults so eagerly into the saddle that he falls on the far side; the sentence is left unfinished, as if the fall had begun. Shakespeare\'s deepest irony is that the argument will prove insufficient: Macbeth sets out every reason not to kill Duncan and then kills him, so the soliloquy becomes not a defence but an indictment, proof that he knew exactly what he was destroying. The audience, having heard every reason, is left to watch him act against all of them.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted in this question.',
              "AO1: Macbeth's divided response to the murder he is considering, and how an audience might respond to it: sympathy for a man who sees clearly why the deed is wrong, and dread because he is still thinking of it",
              'AO2: the soliloquy\'s conditionals; the poisoned chalice returned to the poisoner\'s lips; Duncan "here in double trust"; the pleading angels and the "naked new-born babe"; "Vaulting ambition" and the unfinished last line',
              ...bands(15, false),
            ],
          },
          {
            id: 'wjec-lit-01-q1b',
            questionNumber: 2,
            questionText:
              "Write about the supernatural in Macbeth and how it is presented at different points in the play.\n\n[25]\n\n*5 of this question's marks are allocated for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'evaluation',
            extract: WJEC_MACBETH_01,
            extractSource: WJEC_MACBETH_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The supernatural is very significant in Macbeth. The three witches start the whole plot by telling Macbeth he will become king, which plants the idea of murder. Banquo's ghost appears at the banquet, representing Macbeth's guilt. Lady Macbeth calls on \"spirits\" to make her cruel. The hallucination of the dagger before Duncan's murder shows Macbeth's disturbed mind. The witches' prophecies in Act 4 - about Birnam Wood and \"none of woman born\" - give Macbeth false confidence. A Jacobean audience would have believed in witches, especially after the witch trials and King James's own book on witchcraft. Shakespeare uses the supernatural to show that evil forces can tempt people but the choice to act is still human.",
              'Grade 6-7':
                "The supernatural operates in Macbeth as both a dramatic catalyst and a theological argument about the nature of evil. The witches' \"Fair is foul, and foul is fair\" establishes an inverted moral universe in the play's opening moments, and their prophecy functions ambiguously - it is unclear whether they predict Macbeth's future or create it, a distinction that goes to the heart of the play's exploration of free will versus fate. The Jacobean context is essential: James I authored Daemonologie (1597), which argued for the reality of witchcraft, making the audience's engagement with the supernatural elements of the play not metaphorical but literal. The supernatural manifestations track Macbeth's moral descent: the witches operate externally (temptation), the dagger appears as internal hallucination (psychological dissolution), Banquo's ghost manifests publicly (guilt made visible), and Lady Macbeth's sleepwalking represents the supernatural internalised as madness. Each manifestation is more intimate than the last, suggesting that evil, once invited, progressively colonises the self. The equivocal prophecies of Act 4 - \"none of woman born\" and Birnam Wood - demonstrate the supernatural's relationship to language: the witches speak truth in forms designed to deceive, making them practitioners of the same inversion of fair and foul that they announced at the start. Shakespeare uses the supernatural to argue that evil is real, external, and active, but that its power depends on human complicity - the witches tempt, but Macbeth chooses.",
              'Grade 8-9':
                "The supernatural in Macbeth functions on three interlocking registers - dramatic, psychological, and political - and its significance lies in Shakespeare's refusal to resolve the tension between them. Dramatically, the witches provide the inciting prophecy, but Shakespeare meticulously avoids clarifying whether they are agents of fate or merely catalysts for latent desire. Banquo's \"why do you start and seem to fear / Things that do sound so fair?\" suggests that the prophecy activates something already present in Macbeth, making the supernatural a mirror rather than a cause. This ambiguity is politically significant in the Jacobean context: James I's Daemonologie (1597) argued that witches were real agents of Satan, and the play appears to endorse this theology, yet the consistent association of supernatural agency with Macbeth's pre-existing psychological states (ambition, guilt, despair) subtly undermines the externality of evil. The supernatural manifests progressively throughout the play: the witches are communal and external (three figures in a public space), the dagger is individual and internal (visible only to Macbeth), Banquo's ghost is individual but publicly disruptive (visible to Macbeth at a state function), and Lady Macbeth's sleepwalking is internal and involuntary (the unconscious manifesting what the conscious mind suppressed). This progression from external to internal suggests that the supernatural is not an invasion from without but an eruption from within - that evil is native to the human psyche and merely given a name and a form by the witches. The equivocal prophecies of Act 4 are the play's most sophisticated engagement with the supernatural: \"none of woman born\" and Birnam Wood moving are true in a literal sense that Macbeth fails to anticipate, demonstrating that the supernatural's power lies not in falsehood but in the exploitation of language's instability. The supernatural in Macbeth ultimately argues that evil is real, but its reality is linguistic and psychological rather than (or as well as) metaphysical - it operates through the gap between what words say and what they mean, which is also the space in which drama itself operates.",
            },
            markScheme: [
              'AO1 and AO2 are equally weighted (20 marks); AO4, accuracy in spelling, punctuation and the use of vocabulary and sentence structures, is marked on a grid of its own (5 marks). Context (AO3) is not assessed on this question.',
              "AO1: the witches, the dagger, Banquo's ghost, the apparitions and Lady Macbeth's invocation of spirits, traced across the play",
              'AO2: equivocation ("Fair is foul, and foul is fair"); how far the supernatural causes events or reveals what the characters already want; its movement from the public heath to the inside of Macbeth\'s mind',
              ...bands(20, false),
              'AO4 (5 marks): high performance 4-5 marks, intermediate performance 2-3, threshold performance 1.',
            ],
          },
        ],
      },
      {
        id: 'wjec-lit-01-sec-b',
        title: 'Section B: Poetry',
        description:
          'Answer both questions. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. The poems are from the Eduqas poetry anthology for first assessment in 2027: the first question prints one of them; for the second, choose another and write about it from memory, as in the exam.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-01-q2a',
            questionNumber: 3,
            questionText:
              'Read the poem below, Drummer Hodge, by Thomas Hardy.\n\nDrummer Hodge is a poem about war. How does Thomas Hardy present war in the poem?\n\nRefer to the contexts of the poem in your answer.\n\n[15]',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: DRUMMER_HODGE,
            extractSource: DRUMMER_HODGE_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Hardy presents war as something that takes ordinary young men far from home and forgets them. The poem opens with "They throw in Drummer Hodge", and the verb "throw" makes the burial sound careless, as if he is an object rather than a person. He is buried "Uncoffined", so he does not get a proper funeral, and his only "landmark is a kopje-crest", a small hill, instead of a gravestone.\n\nHardy wrote the poem about the Boer War, which Britain fought in South Africa from 1899 to 1902. "Hodge" was a name often used to look down on farm labourers, which suggests he was an ordinary young man from the countryside. Hardy says Hodge "never knew" the meaning of "the broad Karoo" or "The Bush". These South African words show how foreign the place was to someone "Fresh from his Wessex home", which is Hardy\'s name for the south-west of England.\n\nThe poem has three stanzas of six lines with a regular ABABAB rhyme scheme, which makes it sound calm, like a song. Each stanza ends with an image of the stars, such as "Strange stars amid the gloam", which shows that even the sky was unfamiliar to him. At the end Hodge will "for ever be" part of the land, so war has made him part of a foreign country. Hardy presents war as sad and wasteful.',
              'Grade 6-7':
                'Hardy presents war through what it leaves behind rather than through fighting: the poem never shows a battle, but begins with the careless burial of a young soldier far from home. The opening line, "They throw in Drummer Hodge, to rest", sets the tone. The pronoun "They" leaves the burial party anonymous, and the verb "throw" is brutally casual, clashing with the gentle phrase "to rest" that we expect at a funeral. He is "Uncoffined — just as found", and the dash creates a pause that emphasises the lack of ceremony.\n\nThe context of the Second Boer War (1899-1902) explains much of the language. Hardy uses South African words, "kopje-crest", "veldt" and "Karoo", which sound strange beside "his Wessex home", Hardy\'s name for the south-west of England. "Hodge" was a common, often condescending name for a farm labourer, so Hardy suggests that the soldiers sent to fight were ordinary rural men whom society barely valued. Putting the name in the title gives some dignity to a man who would usually be overlooked.\n\nThe structure follows Hodge through time. The first stanza is in the present tense as he is buried, the second looks back to what he "never knew", and the third moves into the future: "Yet portion of that unknown plain / Will Hodge for ever be". War takes a man who never understood where he was and makes him part of that place permanently.\n\nEach stanza ends with an image of the stars. They begin as "foreign constellations" and "Strange stars", showing how alien the land was to him, but in the final lines the "strange-eyed constellations reign / His stars eternally". The verb "reign" suggests power over him, and the possessive "His" is ironic: the only thing Hodge comes to own is a sky he never understood. Hardy presents war as something that wastes young lives and leaves them forgotten.',
              'Grade 8-9':
                'Hardy presents war not through fighting but through what it leaves behind: a young drummer buried without ceremony in a landscape he never understood. Writing about the Second Boer War, Hardy never mentions the enemy, the cause or victory, and that silence is itself a judgement, since none of those things matters to the man in the grave.\n\nThe opening line is quietly savage. "They throw in Drummer Hodge, to rest" sets the funeral euphemism "to rest" against the careless verb "throw", and the anonymous "They" turns burial into a routine task. The dash in "Uncoffined — just as found" isolates the indignity, and "just as found" suggests that nobody even prepared the body. Instead of a headstone, "His landmark is a kopje-crest", a South African word for a small hill that Hodge himself could hardly have known.\n\nThe name sharpens the point. "Hodge" was a common, often condescending, name for an English farm labourer, so the title turns a stereotype into an individual while reminding us how little such men were valued. In the second stanza the dashes push "Fresh from his Wessex home" into the middle of a sentence about "the broad Karoo", as though his English home survives only as an interruption, and the inverted syntax of "why uprose to nightly view / Strange stars amid the gloam" mirrors his disorientation: even the sky is arranged differently.\n\nThe final stanza turns on "Yet" and moves into the future tense. Hodge becomes "portion of that unknown plain", and "His homely Northern breast and brain / Grow up some Southern tree". The word "homely" suggests both plainness and home, while the capitalised "Northern" and "Southern" set the two hemispheres against each other, so that war transplants an English body into African soil. The last image is the most ironic: the "strange-eyed constellations reign / His stars eternally". The possessive "His" grants him ownership only in death, and "reign" hints at the imperial power that sent him there, now exercised over him by the stars.\n\nThe form reinforces this. Three regular six-line stanzas rhymed ABABAB, with lines alternating between eight and six syllables, give the poem the steady movement of a ballad, the music of ordinary people, and each stanza closes on the stars, moving from "foreign constellations" to "His stars". Hardy presents war as a vast imperial machine that uses up anonymous young men and leaves them under someone else\'s sky.',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              'AO1: Responses may explore how Hardy presents war through its aftermath rather than through battle, focusing on the careless burial of an ordinary young soldier who lies "Uncoffined — just as found".',
              'AO2: the casual verb in "They throw in Drummer Hodge, to rest"; the contrast between South African words such as "kopje-crest", "veldt" and "Karoo" and "his Wessex home"; the stars that close each stanza, from "foreign constellations" to "His stars eternally".',
              'AO2: the three regular six-line stanzas rhymed ABABAB, and the movement from present burial to past ignorance to the future of "Will Hodge for ever be".',
              'AO3: the Second Boer War (1899-1902), fought by Britain in South Africa; "Hodge" as a common, often condescending name for a rural English farm labourer; Wessex as Hardy\'s name for the south-west of England.',
              ...bands(15, true),
            ],
          },
          {
            id: 'wjec-lit-01-q2b',
            questionNumber: 4,
            questionText:
              'Choose one other poem from the anthology in which the poet also writes about war. Compare the way the poet presents war in your chosen poem with the way Thomas Hardy presents war in Drummer Hodge.\n\nIn your answer you should:\n• compare the content and structure of the poems - what they are about and how they are organised\n• compare how the writers create effects, using appropriate terminology where relevant\n• compare the contexts of the poems, and how these may have influenced the ideas in them.\n\n[25]',
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "Disabled" by Wilfred Owen. Both poems present war as something that destroys young men, but Hardy writes about a soldier who has died, while Owen writes about a soldier who has survived but is "Legless, sewn short at elbow".\n\nBoth soldiers are young and did not understand war. Hardy says "Young Hodge the drummer never knew" the meaning of the land where he died, and Owen\'s soldier joined without thinking: "Germans he scarcely thought of". He joined because "Someone had said he’d look a god in kilts", which shows he wanted to look good rather than fight for a cause. In the same way, "Hodge" was a name often used to look down on farm labourers, so Hardy\'s soldier was an ordinary country man. Both poets show that war uses ordinary young men.\n\nBoth poems also show how alone the soldiers are. Hodge is thrown into a grave "Uncoffined" under "Strange stars" in a foreign land. Owen\'s soldier is ignored by women, whose eyes "Passed from him to the strong men that were whole". The poem ends with the question "Why don’t they come?", which shows he is helpless and has to wait for someone to put him to bed.\n\nThe structures are different. "Drummer Hodge" has three regular six-line stanzas with an ABABAB rhyme scheme, which makes it calm, like a song. "Disabled" has stanzas of different lengths and irregular rhyme, and it jumps between the present and his memories, for example "Now he is old". This shows how broken his life now is.\n\nThe contexts are different too. Hardy wrote about the Boer War, fought by Britain in South Africa, and South African words like "veldt" show how far Hodge was from home. Owen served as an officer in the First World War and wrote "Disabled" at Craiglockhart War Hospital, where he was treated for shell shock, so he had seen suffering like this. His soldier was under age: "Smiling they wrote his lie; aged nineteen years". This shows the recruiters did not care. Both poets show that war is not glorious but sad and wasteful.',
              'Grade 6-7':
                'I will compare "Drummer Hodge" with "Disabled" by Wilfred Owen. Both poems present war through what happens to one young soldier rather than through battle. Hardy\'s drummer is dead and buried in South Africa, while Owen\'s soldier has survived but has lost his legs and his future. Both poets suggest that war takes ordinary, naive young men and then discards them.\n\nBoth soldiers are presented as anonymous. "Hodge" was a common, often condescending, name for a rural labourer, so Hardy\'s title presents him almost as a type rather than a person, and Owen never names his soldier at all, calling him only "He". The opening lines of both poems show how little these men now matter. Hardy\'s "They throw in Drummer Hodge" uses a careless verb for a burial, and he lies "Uncoffined". Owen\'s soldier sits "in a wheeled chair, waiting for dark", "Legless, sewn short at elbow". The past participle "sewn" makes him sound like a piece of clothing that has been altered by someone else, just as Hodge is handled like an object.\n\nBoth poets stress how little the soldiers understood. Hodge "never knew" the meaning of "the broad Karoo", and Owen\'s soldier joined after a football match because "Someone had said he’d look a god in kilts". Owen lists what the soldier imagined, "jewelled hilts", "smart salutes" and "pay arrears", separated by semicolons, so they sound like a shallow checklist. The inversion in "Germans he scarcely thought of" puts the enemy first only to dismiss them, while Hardy never mentions the enemy at all.\n\nThe structures are very different. Hardy uses three tightly controlled six-line stanzas rhymed ABABAB, and the poem moves steadily from present to past to future, ending with Hodge part of the land "for ever". Owen\'s stanzas are uneven, the rhyme is irregular and the poem keeps jumping between the present and memories, marked by "Now he is old" and "Now he will never feel again". This reflects a mind haunted by the past, whereas Hardy\'s calm form suits a story that is already over. The endings show this most clearly: Hardy ends with "His stars eternally", a strange kind of belonging, but Owen ends with the unanswered question "Why don’t they come?", leaving his soldier helpless.\n\nContext explains their different perspectives. Owen served as an officer in the First World War and wrote "Disabled" at Craiglockhart War Hospital in 1917, so he had seen injuries like these. His soldier was under age, "Smiling they wrote his lie; aged nineteen years", which criticises recruiters who exploited young men\'s pride. Hardy wrote about the Second Boer War, fought far away in South Africa, and words such as "kopje-crest" and "veldt" emphasise the distance between Hodge and "his Wessex home". Both poets reject the idea that war is glorious, but Owen\'s anger is sharper, perhaps because he knew the reality from the inside.',
              'Grade 8-9':
                'Thomas Hardy\'s "Drummer Hodge" and Wilfred Owen\'s "Disabled" both refuse to show war as heroic combat. Each fixes instead on one young soldier after the fighting is over: Hardy\'s drummer lies dead in South Africa, while Owen\'s soldier is alive but, in every way that matters to him, cut off from life. Both poets expose the gap between the nation that sends young men to war and the indifference that meets them afterwards, but Hardy measures that gap in cosmic terms, while Owen measures it in the small humiliations of a single evening.\n\nBoth soldiers are stripped of individuality. "Hodge" was a common, often condescending, name for an English farm labourer, so Hardy\'s title presents a stereotype, the kind of man whose death would barely be noticed. Owen goes further: his soldier is never named and is only "He", although even "his Meg" is given a name. Both openings treat these men as objects. In "They throw in Drummer Hodge, to rest", the careless verb "throw" undercuts the funeral euphemism "to rest", and the dash in "Uncoffined — just as found" lingers on the lack of ceremony. Owen\'s soldier is defined by what has been done to him, "Legless, sewn short at elbow", where the past participle "sewn" makes him sound like a garment altered by others.\n\nBoth poems present ignorance as the condition that made these fates possible. Hodge "never knew" the meaning of "the broad Karoo", and the dashes around "Fresh from his Wessex home" interrupt the sentence as the war interrupted his life. Owen\'s soldier joined after football because "Someone had said he’d look a god in kilts", and the inversion in "Germans he scarcely thought of" puts the enemy at the front of the line only to dismiss it. The enjambment in "no fears / Of Fear" makes the reader wait for the capitalised, personified "Fear", which the soldier had yet to meet. Hardy never mentions the enemy at all, which suggests that for both men the war was never really theirs.\n\nStructure is where the poems differ most. Hardy\'s three six-line stanzas rhymed ABABAB, with lines alternating between eight and six syllables, move steadily from present burial to past ignorance to future permanence, and each closes on the stars, as orderly as the "constellations" that "reign / His stars eternally". Owen\'s poem refuses that order. Its stanzas are uneven, its rhymes irregular, and it lurches between memory and present, marked by the repeated "Now", as in "Now he is old". Hardy grants Hodge eternity; Owen grants his soldier only "a few sick years in Institutes", where the capital letter makes care sound impersonal and official.\n\nThe poems also set departure against return. Owen\'s soldier "was drafted out with drums and cheers", a detail that recalls Hardy\'s drummer, but "Some cheered him home, but not as crowds cheer Goal". Hodge has no homecoming at all. The final images are opposite: Hodge is absorbed into the landscape, his "homely Northern breast and brain" becoming "some Southern tree", a kind of peace, while Owen ends on the repeated question "Why don’t they come?", closing on the same word rather than a rhyme, as if his soldier is trapped in waiting.\n\nContext explains these differences of tone. Hardy wrote about the Second Boer War, fought by Britain in South Africa, and his South African vocabulary, "kopje-crest", "veldt" and "Karoo", shows how far an imperial war carried men from places like Wessex. Owen, unlike Hardy, had been a soldier: he served as an officer in the First World War and wrote "Disabled" while being treated for shell shock at Craiglockhart War Hospital in 1917. His anger at recruitment that played on young men\'s pride is direct: "Smiling they wrote his lie; aged nineteen years" shows adults knowingly accepting an under-age boy. Owen was killed a week before the Armistice, which gives his poem a terrible authority. Hardy grieves at a distance; Owen accuses from the inside.',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              'These model answers choose Disabled by Wilfred Owen; any poem from the anthology in which the poet writes about war would do, written about from memory.',
              'Responses may compare a soldier buried abroad in "Drummer Hodge" with a soldier who survives, "Legless, sewn short at elbow", in "Disabled", and how both poets present young men who did not understand the war they joined.',
              'AO2: Hardy\'s "Young Hodge the drummer never knew" set against Owen\'s "Germans he scarcely thought of"; the anonymity of "Hodge" and of Owen\'s unnamed "He"; the contrasting endings, "His stars eternally" and "Why don’t they come?".',
              'AO2: Hardy\'s three regular six-line stanzas rhymed ABABAB compared with Owen\'s uneven stanzas, irregular rhyme and shifts between the present ("Now he is old") and memory.',
              'AO3: the Second Boer War and the condescending name "Hodge"; Owen\'s service as an officer, his treatment at Craiglockhart War Hospital in 1917 and recruitment that played on young men\'s pride: "Smiling they wrote his lie; aged nineteen years".',
              ...bands(25, true),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wjec-lit-02',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: Shakespeare and Poetry',
    subtitle: 'C720/01',
    code: 'C720/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-lit-02-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer both questions on Macbeth. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. 5 of the second question's marks are for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-02-q1a',
            questionNumber: 1,
            questionText:
              'Read the extract below, from Act 2 Scene 2. Macbeth has just murdered Duncan and has come back to Lady Macbeth still carrying the daggers.\n\nLook at how the characters speak and behave here. How do you think an audience might respond to this part of the play?\n\nRefer closely to details from the extract to support your answer.\n\n[15]',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: WJEC_MACBETH_02,
            extractSource: WJEC_MACBETH_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'An audience is likely to feel tense and horrified here, because Shakespeare presents the aftermath of the murder as chaotic and terrifying. Macbeth hears a voice cry "Sleep no more!" which shows his immediate guilt. Sleep is described with beautiful images - "the innocent sleep", "Balm of hurt minds" - to show how precious the thing is that Macbeth has destroyed. The contrast between Macbeth\'s fear and Lady Macbeth\'s practical response is clear: he is falling apart while she tells him to "Go get some water, / And wash this filthy witness from your hand." She says he thinks "So brainsickly of things" and tries to be calm and logical, ordering him to take the daggers back and "smear / The sleepy grooms with blood". But Macbeth refuses to go back to the murder scene - "I\'ll go no more: / I am afraid to think what I have done" - showing that the murder has already begun to destroy him. The blood on his hands is both real and symbolic of guilt. An audience might pity Macbeth\'s terror, but they may also be shocked by how coldly Lady Macbeth takes control.',
              'Grade 6-7':
                'An audience is likely to watch this scene with horror and fascination, as Shakespeare constructs the murder\'s aftermath as a psychological inversion of the couple\'s pre-murder dynamic. Macbeth, who was persuaded to act by Lady Macbeth\'s forceful rhetoric, is now paralysed by what he has done, while she who called on spirits to fill her with cruelty is forced to manage his disintegration. The hallucinated voice crying "Sleep no more" is Shakespeare\'s most concentrated expression of guilt\'s immediacy: it arrives not as slow-building remorse but as an instantaneous, supernatural pronouncement. The catalogue of sleep\'s qualities - "the innocent sleep", "The death of each day\'s life, sore labour\'s bath, / Balm of hurt minds" - is a eulogy for what Macbeth has murdered alongside Duncan. Sleep is associated with innocence, healing, and nourishment, and by declaring "Macbeth shall sleep no more!", the voice condemns him to permanent wakefulness - a living death. Lady Macbeth\'s response - "You do unbend your noble strength to think / So brainsickly of things" - attempts to dismiss his experience as mental weakness, but the verb "unbend" implies that his masculine identity, like a bow, is being loosened by guilt. Her pragmatism - "Go get some water, / And wash this filthy witness" - introduces the blood-washing motif that will consume her in Act 5, a devastating dramatic irony: she who now prescribes washing as a simple solution will later be unable to stop washing. Macbeth\'s final admission - "I am afraid to think what I have done; / Look on\'t again I dare not" - marks the moment where action and its consequences become permanently unbearable. An audience may see in this exchange the beginning of both characters\' destruction.',
              'Grade 8-9':
                'For an audience this scene is gripping, because Shakespeare stages the murder\'s immediate aftermath as a reversal of agency that exposes the fundamental asymmetry of the Macbeths\' partnership. Before the murder, Lady Macbeth was the rhetorician and Macbeth the reluctant actor; after it, Macbeth becomes the emotionally articulate one and Lady Macbeth is reduced to damage control. The voice that cries "Sleep no more" is significant for its progressive personalisation. The first time, it accuses him directly: "Macbeth does murder sleep". The second time, it moves from the general cry "to all the house" to his first title in "Glamis hath murder\'d sleep", then to his second, "Cawdor", and ends with his own name: "Macbeth shall sleep no more!" This trajectory traces the murder\'s consequences through every title he holds and down to the man himself, suggesting that regicide contaminates every identity he has. The interrupting catalogue of sleep\'s blessings is formally remarkable: it is a parenthetical lyric erupting within the narrative of horror, and its beauty - "great nature\'s second course, / Chief nourisher in life\'s feast" - is Shakespeare\'s method of making the audience feel the value of what has been destroyed. Lady Macbeth\'s dismissal of his experience as "brainsickly" is multiply ironic: she pathologises in Macbeth the very condition she will herself succumb to, and her prescription of water to wash the "filthy witness" - her confidence that physical cleansing can address moral contamination - is the foundational error that her sleepwalking will relentlessly correct. Macbeth\'s refusal to return - "I\'ll go no more: / I am afraid to think what I have done" - introduces the concept of a threshold that cannot be re-crossed, a moral point of no return. The tragedy is compressed into his admission that he "dare not" look again: the man who dared to kill a king does not dare to look at what he has done, and this disproportion between the courage required for the act and the courage required to face its consequences is Shakespeare\'s most devastating commentary on the nature of violence. An audience is left appalled by the murder and unsettled by how quickly it has begun to destroy the murderer.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted in this question.',
              "AO1: the reversal of the Macbeths' roles just after the murder, and how an audience might respond: horror at the deed, pity or contempt for Macbeth's terror, shock at Lady Macbeth's control",
              'AO2: the voice crying "Sleep no more!"; the list of sleep\'s blessings; "brainsickly"; the "filthy witness" to be washed away; Macbeth\'s refusal to go back',
              ...bands(15, false),
            ],
          },
          {
            id: 'wjec-lit-02-q1b',
            questionNumber: 2,
            questionText:
              "Write about guilt in Macbeth and how it is presented at different points in the play.\n\n[25]\n\n*5 of this question's marks are allocated for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'evaluation',
            extract: WJEC_MACBETH_02,
            extractSource: WJEC_MACBETH_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Guilt is very significant in Macbeth because it drives the characters to madness and death. In the extract, Macbeth's guilt is immediate - he hears voices and cannot go back to look at Duncan's body. His hands covered in blood symbolise guilt throughout the play. When he says \"Will all great Neptune's ocean wash this blood / Clean from my hand?\" it shows guilt is permanent and cannot be removed. Banquo's ghost at the banquet is another sign of Macbeth's guilt. Lady Macbeth's guilt appears later - she sleepwalks, trying to wash imaginary blood from her hands and saying \"Out, damned spot!\" At the end of the play Malcolm reports that she is thought to have taken her own life. Shakespeare shows that guilt is an unavoidable punishment for evil actions, which would reflect Jacobean beliefs about divine justice.",
              'Grade 6-7':
                "Guilt in Macbeth functions as the mechanism through which divine justice operates on the human psyche. Shakespeare presents it not as a single emotion but as a progressive condition that attacks the body, mind, and social functioning of the guilty. In the extract, guilt manifests immediately as hallucinated sound - the voice crying \"Sleep no more\" - and as physical inability (Macbeth cannot return to the scene). This instantaneity is significant: Shakespeare does not allow even a moment of post-murder relief, positioning guilt as co-extensive with the act itself. The blood imagery establishes guilt's physical dimension: \"Will all great Neptune's ocean wash this blood / Clean from my hand?\" rhetorically equates the infinity of the ocean with the impossibility of absolution. Banquo's ghost at the banquet translates private guilt into public spectacle, exposing Macbeth's inner torment to the court and shattering the performance of legitimate kingship. Lady Macbeth's guilt follows an inverted trajectory: she begins the play apparently impervious (\"A little water clears us of this deed\") and ends it destroyed. Her sleepwalking revisits the murder night - the blood, the old man, the knocking at the gate - demonstrating that guilt preserves what the conscious mind tries to forget. Contextually, the Jacobean understanding of guilt was theological: conscience was God's voice within the individual, and its torments were evidence of divine judgement operating before death. Shakespeare's treatment aligns with this framework while also presenting guilt as psychologically realistic - the characters' symptoms (insomnia, hallucination, compulsive behaviour) constitute a recognisable clinical picture. Guilt in Macbeth is both divine punishment and human psychology, and Shakespeare's genius is in refusing to separate the two.",
              'Grade 8-9':
                'Shakespeare presents guilt in Macbeth as an ontological transformation rather than a psychological symptom - it does not merely afflict the characters but fundamentally restructures their relationship to reality, time, and language. The play\'s guilt architecture is asymmetric: Macbeth experiences acute, immediate guilt that gradually desensitises (his trajectory moves from hallucinated voices in Act 2 to "I have supp\'d full with horrors" in Act 5), while Lady Macbeth experiences delayed guilt that gradually intensifies (from confident pragmatism to somnambulistic obsession). This structural inversion suggests that guilt cannot be avoided, only redistributed in time. In the extract, the voice that murders sleep functions on multiple theological levels: sleep is "great nature\'s second course" (it belongs to the natural order), and by murdering Duncan, Macbeth has violated nature itself, meaning the punishment - sleeplessness - is not arbitrary but organically connected to the crime. The blood that "all great Neptune\'s ocean" cannot wash establishes a crucial principle: in Shakespeare\'s moral universe, there is no solvent for guilt because guilt is not a substance adhering to the surface but a transformation of the substance itself. The hands are not dirty; they have become different hands. Lady Macbeth\'s sleepwalking scene inverts her earlier confidence with devastating precision: "A little water clears us of this deed" becomes "all the perfumes of Arabia will not sweeten this little hand." The progression from "A little water" to "all the perfumes of Arabia" charts the exponential growth of guilt over time. Contextually, the play engages with both Catholic and Protestant theologies of conscience: the Catholic practice of confession (which Scotland would have known before the Reformation) is implicitly invoked when the Doctor, hearing Lady Macbeth give away the murder in her sleep, says "More needs she the divine than the physician", yet no priest comes to absolve her, and the Protestant emphasis on individual conscience before God is embodied in the voices and visions that function as private, inescapable tribunals. Guilt in Macbeth ultimately serves Shakespeare\'s argument that moral law is self-enforcing: the Macbeths do not need to be caught or punished by external authority, because guilt is a more thorough and relentless prosecutor than any human institution.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted (20 marks); AO4, accuracy in spelling, punctuation and the use of vocabulary and sentence structures, is marked on a grid of its own (5 marks). Context (AO3) is not assessed on this question.',
              'AO1: guilt in Macbeth and Lady Macbeth at different points: the dagger, the murder, the banquet, the sleepwalking scene, the ending',
              'AO2: blood and water imagery ("Will all great Neptune\'s ocean wash this blood / Clean from my hand?" against "A little water clears us of this deed"); sleeplessness; the guilty mind made visible on stage',
              ...bands(20, false),
              'AO4 (5 marks): high performance 4-5 marks, intermediate performance 2-3, threshold performance 1.',
            ],
          },
        ],
      },
      {
        id: 'wjec-lit-02-sec-b',
        title: 'Section B: Poetry',
        description:
          'Answer both questions. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. The poems are from the Eduqas poetry anthology for first assessment in 2027: the first question prints one of them; for the second, choose another and write about it from memory, as in the exam.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-02-q2a',
            questionNumber: 3,
            questionText:
              'Read the poem below, Cousin Kate, by Christina Rossetti.\n\nCousin Kate is a poem about love. How does Christina Rossetti present love in the poem?\n\nRefer to the contexts of the poem in your answer.\n\n[15]',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: COUSIN_KATE,
            extractSource: COUSIN_KATE_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Rossetti presents love as something that can trap and hurt a woman. The speaker was a happy "cottage maiden" until "a great lord" noticed her. The verb "lured" suggests he tricked her, like a hunter. She became "His plaything and his love", which suggests his love was not real, because a plaything is a toy that is thrown away.\n\nThe similes "He wore me like a silken knot" and "He changed me like a glove" show he treated her like clothing. He then married her cousin Kate instead, and the speaker calls herself "an unclean thing".\n\nIn Victorian times a woman who had a relationship outside marriage was judged as fallen, while men were hardly judged at all. Rossetti volunteered at a refuge for women like this in Highgate, so she knew how unfair this was. In the poem the neighbours call Kate "good and pure" but call the speaker an "outcast thing", and they say nothing about the lord.\n\nThe poem has six stanzas of eight lines with a regular rhyme, so it sounds like a ballad telling a story. At the end the speaker turns to her son: "My fair-haired son, my shame, my pride". This shows that the truest love in the poem is a mother\'s love for her child, even though she also calls him "my shame" because of how society sees him.',
              'Grade 6-7':
                'Rossetti presents love as unequal and dangerous for women, because a man could treat love as a game while a woman paid the price. The speaker begins as a contented "cottage maiden", "Not mindful I was fair", which shows her innocence. The repeated question "Why did a great lord find me out" suggests she still cannot understand why he chose her, and "find me out" makes him sound like a hunter tracking prey.\n\nThe lord\'s love is presented as possession. He "lured" her to "his palace home" to be "His plaything and his love", and placing "plaything" before "love" suggests she was a toy first. The similes "He wore me like a silken knot" and "He changed me like a glove" compare her to accessories that a rich man wears and replaces. Even his marriage to Kate is described with the verb "bound", which hints that marriage is a kind of captivity too.\n\nRossetti exposes Victorian hypocrisy about love outside marriage. The neighbours call Kate "good and pure" but call the speaker "an outcast thing", and say nothing about the lord. A woman in her position was judged as fallen while men faced little judgement, and Rossetti, who volunteered at a refuge for such women in Highgate, gives one of them a voice. The parallel lines "I sit and howl in dust" and "You sit in gold and sing" show their opposite fates.\n\nThe structure follows the speaker\'s changing relationships. After the first two stanzas she addresses Kate directly, "O Lady Kate, my cousin Kate", and accuses her: "my love was true, / Your love was writ in sand". Writing in sand suggests that Kate\'s love will not last. Finally she turns to her son, "My fair-haired son, my shame, my pride", and the juxtaposition of "shame" and "pride" captures the conflict between how society sees him and how she feels. Rossetti suggests that the only lasting love in the poem is a mother\'s love for her child.',
              'Grade 8-9':
                'Rossetti presents love as a force that Victorian society allowed men to use and women to suffer for. The speaker\'s story moves from innocence to exploitation and finally to a defiant love for her child, and in telling it Rossetti gives a voice to the kind of woman her society called fallen and preferred not to hear.\n\nAt first love is something done to the speaker. The repeated question "Why did a great lord find me out" turns the opening into a lament, and "find me out" makes the lord a hunter rather than a suitor. He is the subject of the poem\'s most forceful verbs: he "lured", "wore", "changed", "lifted" and "bound". The similes "He wore me like a silken knot" and "He changed me like a glove" reduce her to an accessory, beautiful but disposable, and in "His plaything and his love" the word "plaything" comes first, as if love were only a game to him. The phrase "a shameless shameful life" is especially sharp: the life was shameless while she lived it and shameful once society judged it, so the repeated root "shame" shows her caught between her own feelings and the verdict of others.\n\nRossetti exposes the double standard that punished women for love outside marriage while excusing men. The neighbours "call you good and pure, / Call me an outcast thing", repeating "good and pure" from two lines earlier as though echoing the lord\'s choice, while nothing is said against him. The antithesis of "I sit and howl in dust" and "You sit in gold and sing" divides the cousins into animal and songbird, dust and gold, and the rhetorical question "Now which of us has tenderer heart?" asks the reader to judge love by feeling rather than reputation. Rossetti\'s work at the St Mary Magdalene Penitentiary in Highgate, a refuge for such women, makes this sympathy pointed rather than sentimental.\n\nThe structure turns lament into argument. Six eight-line stanzas, in each of which the even-numbered lines share one rhyme, give the poem the steady storytelling movement of a ballad, but its focus shifts: from the lord, described in the third person, to Kate, addressed directly as "Lady Kate", and finally to her son. "Yet I’ve a gift you have not got" reverses the hierarchy, and "My fair-haired son, my shame, my pride" holds the public verdict and the private feeling together in one line. Since the lord "would give lands for one / To wear his coronet", his wealth cannot buy him what the speaker already has. Published in Goblin Market and Other Poems in 1862, the poem presents love at its worst as possession and at its best as a mother\'s fierce attachment: "Cling closer, closer yet".',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              'AO1: Responses may explore how Rossetti presents love as exploitation by a powerful man, "His plaything and his love", and as betrayal by a cousin whose "love was writ in sand".',
              'AO2: the similes "He wore me like a silken knot" and "He changed me like a glove"; the antithesis of "I sit and howl in dust" and "You sit in gold and sing"; the bird imagery of "dove" and "the stronger wing".',
              'AO2: the six eight-line stanzas, the shift from describing the lord to addressing Kate directly, and the final turn to the son: "My fair-haired son, my shame, my pride".',
              "AO3: the Victorian double standard that judged women who had relationships outside marriage as fallen while men faced little judgement; Rossetti's volunteer work at the St Mary Magdalene Penitentiary in Highgate; publication in Goblin Market and Other Poems (1862).",
              ...bands(15, true),
            ],
          },
          {
            id: 'wjec-lit-02-q2b',
            questionNumber: 4,
            questionText:
              'Choose one other poem from the anthology in which the poet also writes about love. Compare the way the poet presents love in your chosen poem with the way Christina Rossetti presents love in Cousin Kate.\n\nIn your answer you should:\n• compare the content and structure of the poems - what they are about and how they are organised\n• compare how the writers create effects, using appropriate terminology where relevant\n• compare the contexts of the poems, and how these may have influenced the ideas in them.\n\n[25]',
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "Sonnet 29" by Elizabeth Barrett Browning. Both poems are about love and both were written by Victorian women, but "Cousin Kate" shows love that ends in betrayal, while "Sonnet 29" shows a happy and passionate love.\n\nIn "Cousin Kate" the speaker is used by "a great lord" who treats her as "His plaything and his love". He leaves her for her cousin, and she becomes "an outcast thing". In "Sonnet 29" Barrett Browning describes her thoughts growing around the person she loves "as wild vines, about a tree". This simile shows her love is natural but also wild and overwhelming.\n\nBoth poets use nature imagery. Rossetti says the speaker "might have been a dove", a symbol of purity, but Kate "had the stronger wing". Barrett Browning calls her lover "my palm-tree", which suggests he is strong and tall. However, in "Cousin Kate" the woman has no power, but in "Sonnet 29" the speaker gives orders, such as "Renew thy presence", which shows she is in control.\n\nThe structures are different. "Cousin Kate" has six stanzas of eight lines and tells a story like a ballad. "Sonnet 29" is a Petrarchan sonnet, a form that male poets traditionally used to write about women they loved, so Barrett Browning, as a woman, turns the tradition around. The poem starts with "I think of thee" and its last line begins "I do not think of thee", which shows that being close to him has replaced thinking about him.\n\nThe contexts are important. Rossetti wrote when a woman who had a relationship outside marriage was judged as fallen, but men were not, which is why the neighbours call Kate "good and pure" and the speaker an "outcast thing". Barrett Browning wrote her sonnets during her courtship with Robert Browning. Her father forbade his children to marry, so they married secretly in 1846. Both poets show that love could be difficult for women in their time, but Barrett Browning\'s love is joyful while Rossetti\'s is painful.',
              'Grade 6-7':
                'I will compare "Cousin Kate" with "Sonnet 29" by Elizabeth Barrett Browning. Both poems were written by Victorian women and explore love through nature imagery, but Rossetti presents love as a trap for which society punishes women, while Barrett Browning presents it as an overwhelming joy in which the speaker has power.\n\nThe poems open very differently. Rossetti\'s speaker looks back to when she was "Contented with my cottage mates", until "a great lord" found her, so love arrives as an intrusion. Barrett Browning begins with an exclamation, "I think of thee!", and her thoughts "twine and bud / About thee, as wild vines, about a tree". The verbs "twine" and "bud" suggest love that is alive and growing, but the vines grow so thick that there is nothing left to see except "the straggling green which hides the wood". Her thoughts about her lover are in danger of replacing the lover himself.\n\nThe key difference is power. In "Cousin Kate" the lord controls the verbs: he "lured" her, "wore" her and "changed" her "like a glove", so she becomes an object. In "Sonnet 29" the speaker uses imperatives: "Renew thy presence" and "Rustle thy boughs and set thy trunk all bare". She tells her lover what to do, and the violent list "burst, shattered, everywhere" shows her willingness to destroy her own fantasies in order to see him clearly. Barrett Browning\'s speaker has the control that Rossetti\'s is denied.\n\nBoth poets use nature imagery to present love. Rossetti uses bird imagery: the speaker "might have been a dove", but Kate "had the stronger wing", so love becomes a competition that the more worldly woman wins. Barrett Browning calls her lover "my palm-tree" and compares him to "a strong tree", which suggests admiration and security.\n\nThe forms reflect these ideas. "Cousin Kate" has six eight-line stanzas that tell a story like a ballad, moving from the lord to Kate and finally to the speaker\'s son. "Sonnet 29" is a Petrarchan sonnet, with an octave rhymed ABBAABBA and a sestet rhymed CDCDCD. This form was traditionally used by male poets to praise an idealised woman, so Barrett Browning, writing as a woman about the man she loved, reverses the tradition. It ends with the paradox "I do not think of thee—I am too near thee", where closeness replaces thought.\n\nContext shapes both poems. Rossetti wrote when a woman who had a sexual relationship outside marriage was condemned as fallen, which is why the neighbours "Call me an outcast thing" while saying nothing about the lord. She volunteered at a refuge for such women in Highgate. Barrett Browning wrote during her courtship with Robert Browning, although her father forbade his children to marry, and the couple married secretly in 1846. Both poets show women asserting their feelings against social pressure: Rossetti\'s speaker through anger and her love for her son, "my shame, my pride", and Barrett Browning through confident command.',
              'Grade 8-9':
                'Christina Rossetti\'s "Cousin Kate" and Elizabeth Barrett Browning\'s "Sonnet 29" were published twelve years apart by two Victorian women, yet they present love from opposite positions. Rossetti\'s speaker has been used and abandoned, and love has left her with a child and a ruined reputation; Barrett Browning\'s speaker is so possessed by love that her own thoughts threaten to smother the one she loves. Both poets use nature imagery and direct address to explore the same question: who holds power in love?\n\nIn "Cousin Kate" power at first belongs entirely to the man. The lord is the subject of the most forceful verbs, "lured", "wore", "changed", "lifted" and "bound", and the similes "He wore me like a silken knot" and "He changed me like a glove" turn the speaker into an accessory. "Sonnet 29" reverses this grammar. Its speaker issues imperatives to the beloved, "Renew thy presence" and "Rustle thy boughs and set thy trunk all bare", so that the poet commands and the beloved, figured as "a strong tree", is told to act. This matters in context: the Petrarchan sonnet was traditionally the form of a male poet addressing an idealised woman, and Barrett Browning, writing during her courtship with Robert Browning, takes the poet\'s role for herself.\n\nBoth poets turn to the natural world, with very different effects. Rossetti\'s imagery is of birds and dust: the speaker "might have been a dove", a traditional symbol of innocence, yet Kate "had the stronger wing", and the antithesis of "I sit and howl in dust" and "You sit in gold and sing" divides the cousins into wild animal and songbird, as if Kate sings in a gilded cage. Barrett Browning\'s central metaphor is the vine and the tree. Her thoughts "twine and bud / About thee, as wild vines, about a tree", until nothing is left but "the straggling green which hides the wood". Love here is not a trap set by someone else but something her own mind produces in excess, and her remedy is violent: "Drop heavily down,—burst, shattered, everywhere!" The plosive, broken list enacts the destruction of her own fantasies.\n\nThe structures enact these different experiences. "Cousin Kate" is a narrative in six eight-line stanzas, its even-numbered lines rhyming, which moves like a ballad from the lord to Kate to the speaker\'s son. Its argument hardens through the rhetorical question "Now which of us has tenderer heart?" and the conditional "I would have spit into his face", before the final stanza reverses everything: "Yet I’ve a gift you have not got". "Sonnet 29" is compressed into one fourteen-line Petrarchan block, rhymed ABBAABBA and CDCDCD. The "Yet" of line 5 turns the argument early, and the sentence beginning "Rather, instantly" runs on past the end of the octave, as though her urgency cannot wait for the traditional turn. Three lines of the sestet end on "thee", so the beloved is placed at the end of alternate lines, and the poem closes on a paradox that answers its opening: "I think of thee!" becomes "I do not think of thee—I am too near thee".\n\nContext sharpens the contrast. Rossetti, who volunteered at the St Mary Magdalene Penitentiary in Highgate, a refuge for women judged to have fallen, exposes a double standard in which the neighbours "call you good and pure, / Call me an outcast thing" while the lord escapes all comment. Barrett Browning\'s love was also defiant, since her father forbade his children to marry and she married Robert Browning secretly in 1846 before leaving for Italy. Yet her final sentence speaks of "deep joy", whereas Rossetti\'s speaker ends by urging the son who is both "my shame" and "my pride" to "Cling closer". Both present love as something women must fight for; only Barrett Browning\'s speaker is allowed to win on her own terms.',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              'These model answers choose Sonnet 29 by Elizabeth Barrett Browning; any poem from the anthology in which the poet writes about love would do, written about from memory.',
              'Responses may compare love as betrayal and exploitation in "Cousin Kate" with love as overwhelming joy in "Sonnet 29", and consider who holds power in each relationship.',
              'AO2: the lord\'s controlling verbs ("lured", "wore", "changed") compared with Barrett Browning\'s imperatives ("Renew thy presence", "Rustle thy boughs"); Rossetti\'s dove and wing imagery compared with the vines and "my palm-tree" in "Sonnet 29".',
              'AO2: Rossetti\'s six eight-line stanzas compared with the Petrarchan sonnet (octave ABBAABBA, sestet CDCDCD); the reversal from "I think of thee" to "I do not think of thee".',
              "AO3: the fallen woman and the Victorian double standard; Barrett Browning's courtship with Robert Browning, her father's opposition to his children marrying and the secret marriage of 1846; the Petrarchan sonnet as traditionally a male poet's form.",
              ...bands(25, true),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wjec-lit-03',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: Shakespeare and Poetry',
    subtitle: 'C720/01',
    code: 'C720/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-lit-03-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          "Answer both questions on Macbeth. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. 5 of the second question's marks are for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-03-q1a',
            questionNumber: 1,
            questionText:
              "Read the extract below, from Act 5 Scene 5. Macbeth is preparing to defend his castle at Dunsinane against Malcolm's army when he hears women crying out.\n\nLook at how Macbeth speaks and behaves here. How do you think an audience might respond to this part of the play?\n\nRefer closely to details from the extract to support your answer.\n\n[15]",
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: WJEC_MACBETH_03,
            extractSource: WJEC_MACBETH_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'An audience might feel shocked, and perhaps a little sorry for Macbeth, because Shakespeare presents him as numb and despairing. When told the queen is dead, he responds "She should have died hereafter", which could mean he thinks she should have died later or that death was inevitable anyway. He says he has "supp\'d full with horrors", which is a metaphor comparing horrors to a meal - he has consumed so many that nothing frightens him any more. The "Tomorrow" speech presents life as meaningless through several metaphors: life is a "brief candle" that can be easily blown out, a "walking shadow" with no substance, and a "poor player" who acts on stage briefly then is forgotten. The most powerful image is life as "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." This suggests everything is pointless and meaningless. An audience may feel that this emptiness is the punishment he has earned, but the speech is still sad to hear.',
              'Grade 6-7':
                'An audience is likely to respond to this moment with a mixture of horror and pity, as Shakespeare constructs Macbeth\'s response to Lady Macbeth\'s death through a progression from emotional numbness to existential nihilism. The opening speech - "I have almost forgot the taste of fears" - uses the gustatory metaphor of fear as something tasted and now forgotten, suggesting that Macbeth\'s emotional palate has been deadened by overexposure to horror. "I have supp\'d full with horrors" extends this: he has consumed a feast of atrocity that has left him sated and incapable of further feeling. When Seyton announces "The Queen, my lord, is dead", the news takes six plain syllables in answer to Macbeth\'s "Wherefore was that cry?", and its bareness dramatises the inadequacy of language to convey the magnitude of loss. Macbeth\'s response - "She should have died hereafter" - is famously ambiguous: it could express postponement (she should have died at a more convenient time), inevitability (she would have died eventually), or genuine grief compressed into understatement. The "Tomorrow" soliloquy that follows moves beyond personal grief to universal nihilism. The triple repetition of "tomorrow" enacts temporal monotony, and the verb "Creeps" personifies time as furtive and miserable. The metaphors for life systematically strip existence of authenticity: the candle is real but brief, the shadow is extended but insubstantial, the player is present but performing, and the idiot\'s tale is vocal but meaningless. The speech ends on a short line of two words, "Signifying nothing", so the verse falls silent before the line is complete, and its form enacts the void it describes. An audience may condemn the tyrant, but it is hard not to feel the desolation of the man.',
              'Grade 8-9':
                'An audience\'s response here is likely to be divided, because Shakespeare grants Macbeth in this speech a terrible eloquence that is simultaneously the pinnacle of his rhetorical power and the nadir of his emotional life. The speech preceding the "Tomorrow" soliloquy - "I have almost forgot the taste of fears" - is not merely a description of numbness but a diagnosis of moral anaesthesia. The qualifier "almost" is crucial: Macbeth has not fully forgotten, meaning some residual capacity for feeling persists, making his nihilism a choice rather than a condition. "I have supp\'d full with horrors" is grotesque in its domesticity: the banquet metaphor (recalling the feast disrupted by Banquo\'s ghost) transforms atrocity into nutrition, something the body has processed and absorbed. Seyton\'s announcement of the queen\'s death arrives with devastating dramatic economy - no rhetoric, no circumlocution, just factual statement - and Macbeth\'s "She should have died hereafter" has been debated for centuries precisely because its ambiguity is Shakespeare\'s point: Macbeth is no longer capable of unambiguous emotional response. The soliloquy that follows is the play\'s philosophical summit. The triple "tomorrow" creates a rhythmic treadmill, each repetition draining the word of futurity until it becomes a mere syllable. The metaphors descend through orders of being: a candle (material, finite), a shadow (immaterial, dependent), a player (artificial, performative), an idiot\'s tale (incoherent, meaningless). This is not random accumulation but systematic philosophical demolition, each metaphor removing a layer of ontological substance. The theatrical metaphor - "a poor player, / That struts and frets his hour upon the stage" - is Shakespeare\'s most explicit meta-dramatic moment: an actor on a stage declares that life is acting on a stage, creating a vertigo of self-reference that either validates the metaphor (all is indeed performance) or transcends it (the art of declaring everything meaningless generates meaning). This unresolvable paradox is the speech\'s deepest achievement: it uses language at its most beautiful to declare language meaningless. That is why an audience may feel something close to pity for a man they have watched become a tyrant.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted in this question.',
              "AO1: Macbeth's numbness and despair at the news of the Queen's death, and how an audience might respond: judgement of a tyrant, and pity for a man who now finds life meaningless",
              'AO2: "supp\'d full with horrors"; Seyton\'s bare announcement; "She should have died hereafter"; the repetition of "Tomorrow"; the candle, the shadow, the player and the idiot\'s tale; the short last line',
              ...bands(15, false),
            ],
          },
          {
            id: 'wjec-lit-03-q1b',
            questionNumber: 2,
            questionText:
              "Write about kingship in Macbeth and how it is presented at different points in the play.\n\n[25]\n\n*5 of this question's marks are allocated for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'evaluation',
            extract: WJEC_MACBETH_03,
            extractSource: WJEC_MACBETH_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents two types of kingship in Macbeth: good and bad. Duncan is a good king who rewards loyalty and is described using positive language. Macbeth is a tyrant who rules through fear, receiving only "mouth-honour" from his subjects. Edward the Confessor of England is described as curing the sick by touching them and passing on "The healing benediction" to the kings after him, contrasting with Macbeth who brings only death and disease. In the extract, Macbeth\'s nihilism shows he has failed as a king because he no longer values anything. Malcolm represents hope for the future of Scotland. Shakespeare was writing for King James I, who believed in the divine right of kings, so the play shows that legitimate kings are blessed by God while usurpers are cursed.',
              'Grade 6-7':
                'Shakespeare presents kingship in Macbeth as both a political institution and a cosmic principle, using the contrast between legitimate and illegitimate rule to explore what constitutes good governance. Duncan embodies the ideal of beneficent monarchy: he rewards loyalty (granting Macbeth the title of Cawdor), speaks in the language of natural abundance ("I have begun to plant thee, and will labour / To make thee full of growing"), and his arrival at Macbeth\'s castle is described in terms of fertility and welcome - the martlet nesting on the castle walls. His murder disrupts not merely political order but natural order: Lennox reports that "the earth / Was feverous, and did shake", and Ross that "the heavens, as troubled with man\'s act, / Threatens his bloody stage". Macbeth\'s kingship is systematically contrasted: where Duncan planted, Macbeth destroys; where Duncan trusted, Macbeth spies; where Duncan\'s subjects served willingly, Macbeth\'s obey through fear. The extract dramatises the endpoint of tyrannical kingship: Macbeth has achieved the crown only to find life itself a tale "Signifying nothing." Edward the Confessor\'s "healing benediction" in Act 4 operates as a theological corrective, demonstrating that legitimate kingship confers divine healing power - the exact inverse of Macbeth\'s Scotland, which Ross describes as a place "Where sighs, and groans, and shrieks, that rent the air, / Are made, not mark\'d". Shakespeare\'s treatment reflects James I\'s political theology: the divine right of kings means that regicide is not merely murder but sacrilege, and the usurper\'s inevitable failure demonstrates God\'s active protection of legitimate rule.',
              'Grade 8-9':
                'Shakespeare constructs kingship in Macbeth as the nexus of several interconnected systems - political, theological, natural, and linguistic - and presents its violation as producing cascading failures across all of them. Duncan\'s kingship is characterised by the language of organic growth: he has "begun to plant" Macbeth and will "labour" to make him "full of growing", positioning the monarch as gardener of the body politic. This horticultural vocabulary aligns with the early modern theory of the king\'s two bodies: the mortal, natural body and the immortal, political body. When Macbeth kills Duncan, he destroys both - the man and the principle - and the natural disturbances that follow (unnatural darkness, cannibalistic horses, screaming owls) register the cosmic disruption at the level of nature. In the extract, Macbeth\'s nihilistic "Signifying nothing" represents the complete exhaustion of monarchical meaning: having seized the crown through violence, he discovers that kingship without legitimacy is an empty form, a "poor player" performing authority without embodying it. Edward the Confessor provides the theological counterpoint: his touch cures scrofula, which Malcolm says is "call\'d the evil", through the laying on of hands, demonstrating that legitimate monarchy literally channels divine grace through the royal body. Shakespeare juxtaposes two models of the king\'s body: Edward\'s, which heals by touch, and Macbeth\'s, which destroys. The play\'s resolution in Malcolm\'s accession is significantly tentative: his final speech promises to do "what needful else / That calls upon us, by the grace of Grace," but the play has demonstrated how fragile legitimate succession is, and Malcolm\'s youth and inexperience complicate any straightforward restoration narrative. For James I\'s audience, the play argues simultaneously for the sanctity of legitimate kingship and the ever-present danger of its violation - a politically useful message for a monarch who had survived the Gunpowder Plot just a year before the play\'s probable composition.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted (20 marks); AO4, accuracy in spelling, punctuation and the use of vocabulary and sentence structures, is marked on a grid of its own (5 marks). Context (AO3) is not assessed on this question.',
              'AO1: Duncan, Macbeth, Edward the Confessor and Malcolm as different kinds of king, at different points in the play',
              'AO2: the language of planting and growth around Duncan; the disorder in nature after his murder; the "healing benediction" of England\'s king; Macbeth\'s kingship as an ill-fitting performance',
              ...bands(20, false),
              'AO4 (5 marks): high performance 4-5 marks, intermediate performance 2-3, threshold performance 1.',
            ],
          },
        ],
      },
      {
        id: 'wjec-lit-03-sec-b',
        title: 'Section B: Poetry',
        description:
          'Answer both questions. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. The poems are from the Eduqas poetry anthology for first assessment in 2027: the first question prints one of them; for the second, choose another and write about it from memory, as in the exam.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-03-q2a',
            questionNumber: 3,
            questionText:
              'Read the poem below, I Wandered Lonely as a Cloud, by William Wordsworth.\n\nI Wandered Lonely as a Cloud is a poem about nature. How does William Wordsworth present nature in the poem?\n\nRefer to the contexts of the poem in your answer.\n\n[15]',
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: I_WANDERED,
            extractSource: I_WANDERED_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Wordsworth presents nature as beautiful, joyful and able to make people happy. At the start the speaker is "lonely as a cloud", a simile that shows he is part of nature but also on his own. Then he suddenly sees "a crowd, / A host, of golden daffodils". The word "golden" makes the flowers sound precious, like treasure.\n\nWordsworth personifies the daffodils, which are "Fluttering and dancing in the breeze" and "Tossing their heads in sprightly dance". This makes nature seem alive and full of energy, like a crowd of people dancing. He also uses hyperbole in "Ten thousand saw I at a glance" to show how amazed he was.\n\nThe poem has four stanzas rhymed ABABCC, which gives it a regular, cheerful sound. The first three stanzas are in the past tense, but the last changes to the present. When he lies "In vacant or in pensive mood", the daffodils "flash upon that inward eye", meaning he sees them in his memory, and his "heart with pleasure fills, / And dances with the daffodils".\n\nWordsworth was a Romantic poet, and the Romantics valued nature, feeling and the imagination. The poem came from a walk with his sister Dorothy in the Lake District in 1802, and it shows that nature stays with us and makes us happy long after we have seen it.',
              'Grade 6-7':
                'Wordsworth presents nature as a source of joy that is powerful in the moment but even more valuable as a memory. The opening simile, "I wandered lonely as a cloud", places the speaker within nature, but "lonely" suggests he is isolated and aimless until nature changes his mood. The word "host" can suggest an army or even a heavenly host of angels, giving the daffodils a sense of the divine.\n\nThe daffodils are personified throughout. They are "Fluttering and dancing in the breeze" and "Tossing their heads in sprightly dance", and a form of the word "dance" appears in every stanza, so the poem seems to move with them. The simile "Continuous as the stars that shine / And twinkle on the milky way" gives the flowers a cosmic scale, and the hyperbole "Ten thousand saw I at a glance" conveys his amazement.\n\nNature is also joyful company. The speaker admits that "A poet could not but be gay, / In such a jocund company", using "gay" in its older sense of cheerful. The repetition in "I gazed—and gazed" slows the line as if he is lost in the sight, but he "little thought / What wealth the show to me had brought". The metaphor of "wealth" suggests that nature\'s riches are worth more than money.\n\nThe structure supports this. The four six-line stanzas are rhymed ABABCC, each ending in a couplet, and the first three are in the past tense, but the last moves into the present: "For oft, when on my couch I lie". The daffodils "flash upon that inward eye / Which is the bliss of solitude", reflecting the Romantic belief in feeling and the imagination. Although the poem came from a walk with his sister Dorothy beside Ullswater in 1802, Wordsworth presents himself as alone, and loneliness has become "the bliss of solitude". In the final line his heart "dances with the daffodils", so nature has not only pleased him but changed him.',
              'Grade 8-9':
                'Wordsworth presents nature not simply as a beautiful scene but as a living presence that transforms the human mind, both at the moment of seeing and, more importantly, in memory. The poem\'s real subject is the relationship between nature and the imagination, which places it at the heart of Romantic thinking.\n\nThe opening simile, "I wandered lonely as a cloud", is quietly paradoxical: the speaker likens himself to part of nature, yet a cloud that "floats on high o’er vales and hills" is detached from the landscape below. Nature then interrupts "all at once" with "a crowd, / A host, of golden daffodils". The word "crowd" is social, while "host" can suggest an army or a heavenly host of angels, so the flowers gain both human warmth and something close to the sacred. The adjective "golden" anticipates the later language of "wealth".\n\nPersonification makes the landscape a community. The daffodils are "Tossing their heads in sprightly dance", and they "Out-did the sparkling waves in glee", so even the lake joins a contest of joy. A form of "dance" appears in every stanza, and the cosmic simile "Continuous as the stars that shine / And twinkle on the milky way" stretches the scene beyond the earthly, while the inversion "Ten thousand saw I at a glance" places the overwhelming number first.\n\nThe turning point is the couplet that ends the third stanza. In "I gazed—and gazed" the dashes and repetition suspend the moment, yet he "little thought / What wealth the show to me had brought", and the past perfect "had brought" points to a value he had not yet understood. The final stanza shifts into the present tense to reveal it: the daffodils "flash upon that inward eye / Which is the bliss of solitude". The "inward eye" is the imagination, and the move from "lonely" in the first line to "solitude" here shows that being alone has become a blessing once nature lives in the mind.\n\nThis structure dramatises Wordsworth\'s belief, set out in his Preface to Lyrical Ballads, that poetry begins in strong feeling remembered later, in calm. The poem grew from a walk with his sister Dorothy beside Ullswater in April 1802 and was published in 1807, yet Dorothy has vanished from it: Wordsworth reshapes a shared walk into a solitary meeting between one mind and nature. The regular ABABCC stanzas, each settling on a couplet, give a sense of completion, and the final couplet resolves the poem: "And then my heart with pleasure fills, / And dances with the daffodils". The last word echoes the end of the first stanza\'s fourth line, so the daffodils that once danced before him now dance within him.',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              'AO1: Responses may explore how Wordsworth presents nature as joyful and alive in the moment, and as a lasting source of comfort in memory.',
              'AO2: the simile "lonely as a cloud"; personification in "Fluttering and dancing in the breeze" and "Tossing their heads in sprightly dance"; hyperbole in "Ten thousand saw I at a glance"; the metaphor of "wealth".',
              'AO2: four six-line stanzas rhymed ABABCC, each closing on a couplet; the shift from past tense to present in the final stanza; the move from "lonely" to "the bliss of solitude".',
              "AO3: the Romantic valuing of nature, feeling and the imagination; the walk with Dorothy beside Ullswater in April 1802; Wordsworth's view, in his Preface to Lyrical Ballads, that poetry begins in strong feeling remembered later, in calm.",
              ...bands(15, true),
            ],
          },
          {
            id: 'wjec-lit-03-q2b',
            questionNumber: 4,
            questionText:
              'Choose one other poem from the anthology in which the poet also writes about nature. Compare the way the poet presents nature in your chosen poem with the way William Wordsworth presents nature in I Wandered Lonely as a Cloud.\n\nIn your answer you should:\n• compare the content and structure of the poems - what they are about and how they are organised\n• compare how the writers create effects, using appropriate terminology where relevant\n• compare the contexts of the poems, and how these may have influenced the ideas in them.\n\n[25]',
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5':
                'I have chosen "I Shall Return" by Claude McKay. Both poems present nature as beautiful and comforting, but Wordsworth describes nature he has actually seen and remembers, while McKay describes nature he longs to go back to.\n\nIn "I Wandered Lonely as a Cloud" the daffodils are personified as "Fluttering and dancing in the breeze", which makes nature seem happy and alive. McKay also makes nature lively, with "waters rushing down the mountain passes". Both poets describe nature as if it were treasure: Wordsworth\'s daffodils are "golden", and McKay describes "golden noon" and "sapphire skies".\n\nBoth poems are about memory. Wordsworth says that the daffodils "flash upon that inward eye" when he is lying on his couch, so the memory still makes him happy. McKay remembers "Stray melodies of dim remembered runes", which suggests his memories are fading. His poem ends with "long, long years of pain", which shows that for him nature is linked to sadness because he is far away from it.\n\nThe structures are different. Wordsworth\'s poem has four stanzas rhymed ABABCC, and the last stanza changes to the present tense to show he is remembering, ending with his heart that "dances with the daffodils". McKay\'s poem is a sonnet of fourteen lines with a rhyming couplet at the end. He repeats "I shall return" six times, which shows how determined he is, and the future tense shows he has not gone back yet.\n\nContext helps explain the differences. Wordsworth was a Romantic poet, and the Romantics valued nature, feeling and the imagination. He wrote the poem after a walk with his sister Dorothy in the Lake District. McKay was born in Jamaica and moved to the United States in 1912. His poem voices a longing to return to the homeland he left, although it never names the place. So for Wordsworth nature is a happy memory, but for McKay it is something he has lost and wants back.',
              'Grade 6-7':
                'I will compare "I Wandered Lonely as a Cloud" with "I Shall Return" by Claude McKay. Both poems present nature as a source of joy that lives on in memory, but for Wordsworth memory brings comfort, while for McKay it brings longing and pain.\n\nBoth poets present nature as alive and full of movement. Wordsworth personifies the daffodils, "Tossing their heads in sprightly dance", and a form of the word "dance" appears in every stanza. McKay\'s landscape is also active: the "forest fires burn", streams "bathe the brown blades of the bending grasses", and waters go "rushing down the mountain passes". The repeated b sounds in "brown blades of the bending grasses" create a gentle rhythm, like grass moving. However, McKay also links nature to people: he wants to hear "the fiddle and fife / Of village dances". For McKay, nature and community belong together, whereas Wordsworth finds joy in being alone with nature.\n\nBoth poets use the language of riches. Wordsworth\'s flowers are "golden daffodils", and he later realises "What wealth the show to me had brought". McKay\'s "golden noon" and "sapphire skies" also turn nature into treasure. For both, the value of nature is emotional rather than financial.\n\nThe most important difference is in time and structure. Wordsworth\'s four stanzas, each rhymed ABABCC, move from the past tense to the present in the final stanza, where the daffodils "flash upon that inward eye / Which is the bliss of solitude". The memory is complete and brings peace. McKay\'s poem is a sonnet rhymed ABAB CDCD EFEF GG and is written in the future tense: "I shall return" begins each quatrain and the final couplet, showing his determination but also that the return has not happened yet. He hopes to "realize once more my thousand dreams", and the word "dreams" suggests that for now the landscape exists only in his imagination. The final couplet ends with the hope "To ease my mind of long, long years of pain", which reveals that his memories are mixed with suffering, and the repetition of "long, long" slows the line to stress how much time has passed.\n\nContext explains these differences. Wordsworth was a Romantic poet who valued nature, feeling and imagination, and the poem came from a walk with his sister Dorothy beside Ullswater in 1802. His "inward eye" reflects the Romantic faith in the imagination. McKay was born in Jamaica and moved to the United States in 1912, where he became a leading writer of the Harlem Renaissance. Although the poem does not name Jamaica, it voices a longing for the homeland he left, so the "native life" he describes becomes a symbol of identity. Both poets value nature deeply, but Wordsworth possesses it in memory, while McKay can only hope to reach it again.',
              'Grade 8-9':
                'Wordsworth\'s "I Wandered Lonely as a Cloud" and Claude McKay\'s "I Shall Return" both present nature as something that lives most powerfully in the mind, but they look in opposite directions. Wordsworth looks back on a scene he possesses and can summon at will; McKay looks forward to a landscape he has lost and can only promise to regain. One poem presents nature as consolation, the other as the object of an exile\'s longing.\n\nBoth poets present nature as animated and joyful. Wordsworth\'s daffodils are "Fluttering and dancing in the breeze", and their personified "glee" outdoes even "the sparkling waves". McKay\'s landscape is just as alive: streams "bathe the brown blades of the bending grasses", where the soft alliteration and the verb "bathe" make nature tender and nurturing, and the "forest fires burn" at "golden noon", an image of destruction made beautiful. Both use the language of treasure: Wordsworth\'s flowers are "golden" and bring "wealth", while McKay\'s smoke drifts to "sapphire skies". Yet the poets differ over whether nature includes people. Wordsworth\'s speaker begins "lonely" and finds "the bliss of solitude", and the only "company" he finds is made of flowers. McKay\'s nature is inseparable from community: he longs for "the fiddle and fife / Of village dances" that "stir the hidden depths of native life". Both poems include dancing, but Wordsworth\'s dancers are daffodils, while McKay\'s are villagers.\n\nThe crucial contrast lies in time and memory. Wordsworth\'s first three stanzas are in the past tense, and the final stanza shifts to the present, where the daffodils "flash upon that inward eye". This enacts his belief, from his Preface to Lyrical Ballads, that poetry begins in strong feeling remembered later, in calm: the memory arrives suddenly and completes the experience, so that his "heart with pleasure fills, / And dances with the daffodils". McKay\'s poem, by contrast, is framed throughout as a promise about the future. The anaphora of "I shall return", which opens each quatrain and the final couplet, has the force of a vow but also admits that the return has not happened. His memories are fragile, "Stray melodies of dim remembered runes", where "Stray" and "dim" suggest a past slipping away. Wordsworth\'s "inward eye" is a source of bliss; McKay\'s "wonder-eyes" belong to a future self he can only imagine.\n\nForm reinforces this. Wordsworth\'s four six-line stanzas rhymed ABABCC each settle on a closing couplet, giving a sense of contentment and completion. McKay uses the fourteen-line Shakespearean sonnet form, rhymed ABAB CDCD EFEF GG, a form long associated with love, which suits what is in effect a love poem to a place. Only the final couplet reveals the suffering beneath the celebration, as the vow "I shall return again" is followed by its purpose: "To ease my mind of long, long years of pain". The repeated "long, long", separated by a comma, slows the line so that the years are felt.\n\nContext explains why the same subject produces such different feelings. Wordsworth, a leading Romantic, wrote of a walk with his sister Dorothy beside Ullswater in the Lake District, where he lived, in April 1802, and published the poem in 1807. McKay was born in Jamaica, moved to the United States in 1912 and became a leading writer of the Harlem Renaissance in New York. The poem never names Jamaica, but read alongside his life, its "native life" and "village dances" suggest a homeland remembered from far away. For Wordsworth, nature is a store of joy he can return to whenever he likes; for McKay, nature is what he must return to in order to heal.',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              'These model answers choose I Shall Return by Claude McKay; any poem from the anthology in which the poet writes about nature would do, written about from memory.',
              'Responses may compare nature remembered with joy in "I Wandered Lonely as a Cloud" with nature longed for from a distance in "I Shall Return".',
              'AO2: the personified daffodils "Fluttering and dancing in the breeze" compared with McKay\'s "brown blades of the bending grasses" and "the fiddle and fife / Of village dances"; the shared language of treasure in "golden" and "sapphire skies".',
              'AO2: Wordsworth\'s ABABCC stanzas and shift into the present tense compared with McKay\'s Shakespearean sonnet form (ABAB CDCD EFEF GG), the anaphora of "I shall return" and the closing couplet\'s "long, long years of pain".',
              "AO3: Romanticism and the walk with Dorothy in the Lake District in 1802; McKay's move from Jamaica to the United States in 1912 and the Harlem Renaissance, remembering that the poem itself does not name Jamaica.",
              ...bands(25, true),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wjec-lit-04',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
    subtitle: 'C720/02',
    code: 'C720/02',
    totalTimeMinutes: 150,
    totalMarks: 120,
    sections: [
      {
        id: 'wjec-lit-04-sec-a',
        title: 'Section A: Post-1914 Prose/Drama - An Inspector Calls',
        description:
          'Answer the question on An Inspector Calls. You are advised to spend about 45 minutes on this section. 5 of its marks are for accuracy in spelling, punctuation and the use of vocabulary and sentence structures. In the exam the question prints an extract from the play. An Inspector Calls is still in copyright, so this practice paper cannot; the question says where the extract is in your own copy.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-lit-04-q1',
            questionNumber: 1,
            questionText:
              "Read the extract in your own copy of the play. Act One. The extract begins soon after Sheila comes back into the dining room, looking as if she has been crying, with Eric's question \"But what did Sheila do?\", and it ends with the Inspector's harsh reply to her wish that she could help the girl now: \"It's too late. She's dead.\"\n\nWrite about Sheila Birling in An Inspector Calls and how she is important to the play as a whole.\n\nIn your response you should:\n• refer to the extract and the play as a whole\n• show your understanding of characters and events in the play.\n\n[40]\n\n*5 of this question's marks are allocated for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5':
                'Sheila Birling is important in "An Inspector Calls" because she is the character who changes the most. At the start of Act One the stage directions describe her as "very pleased with life and rather excited". She is celebrating her engagement to Gerald and calls her mother "mummy", which makes her seem young and sheltered. She is so delighted with her engagement ring that she promises never to let it out of her sight, but by Act Two she has given it back.\n\nIn the extract Sheila tells the Inspector what she did to Eva Smith at Milwards. She admits she was "in a furious temper" and says "It was my own fault". This shows she is honest, unlike her father, who refused to accept any responsibility. She also agrees that she was jealous because the girl was pretty, and she says "I couldn\'t be sorry for her". This makes her seem vain and selfish, and it shows how easily a rich customer could take away a working girl\'s job. The stage direction "she almost breaks down, but just controls herself" shows that she really does feel guilty. The Inspector tells her "you used the power you had", which makes the audience think about the power the rich have over the poor. When she says she would help the girl now if she could, the Inspector answers "It\'s too late. She\'s dead". These short, blunt sentences show that being sorry cannot change what has happened.\n\nFor the rest of the play Sheila mostly supports the Inspector. In Act Two she warns her mother not to build "a kind of wall between us and that girl", because she can see that the Inspector will find out the truth anyway. She also gives Gerald back the ring after hearing about his affair with Daisy Renton. This shows she is becoming more mature and independent.\n\nIn Act Three Sheila is very different from her parents. When they decide the Inspector was a fake, they want to carry on as if nothing has happened, but Sheila points out that "Everything we said had happened really had happened". She is bitter and sarcastic when she says "I suppose we\'re all nice people now", because she knows her parents have not changed. She even repeats the Inspector\'s warning about "Fire and blood and anguish", which shows that she has really listened to him.\n\nOverall, Sheila is important because Priestley uses her to show that young people can learn to take responsibility. The audience is meant to agree with her rather than her parents, especially when the telephone call at the end proves that she was right to take the Inspector seriously.',
              'Grade 6-7':
                'Sheila is important to "An Inspector Calls" because she is the character in whom the Inspector\'s message takes hold most fully. Priestley uses her change, from a sheltered and rather spoilt daughter to the conscience of the family, to show that people can learn to accept responsibility, and her reactions guide the audience\'s.\n\nAt the start of Act One Sheila is "very pleased with life and rather excited", and her childish word "mummy" suggests that she has never had to think beyond her own comfortable world. However, Priestley hints that she is not simply her mother\'s daughter. When Mrs Birling tells her that a wife must get used to a husband who is busy with work, Sheila replies "I don\'t believe I will". It sounds playful, but it prepares for the independence she shows later.\n\nThe extract is the turning point. Unlike her father, who justified himself, Sheila accepts the blame: she admits she was "in a furious temper" and states plainly "It was my own fault". When Gerald looks at her as she confesses, she turns on him and insists that at least she is trying to tell the truth, which shows that honesty already matters to her. Yet Priestley does not make her innocent. Her reasons are vain and petty: the dress suited the girl "just as I was the wrong type", and she admits "I couldn\'t be sorry for her" because the girl was pretty. The Inspector\'s questions turn this private jealousy into a social issue when he says "you used the power you had". A wealthy customer\'s bad mood was enough to cost a working girl her job, which is exactly the kind of inequality Priestley wanted his audience to notice. The stage direction "she almost breaks down, but just controls herself" shows real shame, and her question "How could I know what would happen afterwards?" shows her beginning to see how one action leads to another. The extract ends brutally, as the Inspector\'s short sentences "It\'s too late. She\'s dead" cut across her wish to help, reminding the audience that remorse cannot undo harm.\n\nIn Act Two Sheila becomes almost the Inspector\'s assistant. He remarks that the young are "more impressionable", and she proves it by understanding his methods before anyone else. She warns her mother not to build "a kind of wall between us and that girl", and she realises that he is "giving us the rope" so that the family will condemn themselves. When her mother calls Gerald\'s affair disgusting, Sheila\'s reminder that "you didn\'t come into this" is full of dramatic irony, because the audience is about to discover how deeply Mrs Birling is involved. Sheila also grows more independent: she insists "I\'m not a child, don\'t forget", and she hands Gerald back the ring she had promised never to let out of her sight.\n\nIn Act Three her importance becomes clear when the family divides. Her parents, relieved that the Inspector may have been a fake, want to carry on as before, but Sheila insists that "Everything we said had happened really had happened". Her bitter "I suppose we\'re all nice people now" mocks their relief, and she alone repeats the Inspector\'s warning of "Fire and blood and anguish". When Gerald offers her the ring again she answers "It\'s too soon. I must think", showing that she will not simply slip back into her old life. The final telephone call proves her right, so the audience is left on her side rather than her parents\'.\n\nOverall, Sheila matters because she shows that the Inspector\'s lesson can be learned. Priestley, a socialist writing in 1945, places the play\'s hope in the young, and Sheila\'s journey from vanity to responsibility is the clearest sign of that hope.',
              'Grade 8-9':
                'Sheila is important because she is Priestley\'s clearest proof that the Inspector\'s lesson can actually be learned. Without her, "An Inspector Calls" would be a far bleaker indictment of a complacent family; with her, it becomes a play about the possibility of change. Yet Priestley never makes her a simple heroine. Her offence is the most personal and petty of all, and her change is presented as a painful, incomplete process rather than a sudden conversion, which is exactly what makes it convincing.\n\nPriestley first establishes her as a product of her class. The opening stage direction calls her "very pleased with life and rather excited", her baby-talk ("mummy") belongs to a protected daughter, and her father treats her engagement partly as a merger between two firms. Her entrance into the interrogation is carefully staged: she comes in "gaily", asking "What\'s this about streets?", so that her careless high spirits collide with the darkest part of the girl\'s story.\n\nThe extract dramatises confession as a moral act. Sheila admits "It was my own fault", a sentence of stark monosyllables that contrasts with her father\'s evasions earlier in the act. But Priestley makes her motives uncomfortable. The girl suited the dress "just as I was the wrong type", and Sheila concedes that she would not have acted against "some miserable plain little creature": her spite, and her pity, depend on appearance. Her admission "I couldn\'t be sorry for her" is the most revealing line in the extract, because the whole play argues that compassion should not be conditional. The Inspector\'s role is to translate her vanity into the language of class: "you used the power you had" turns a tantrum in a shop into an abuse of social privilege. The stage direction "she almost breaks down, but just controls herself" captures her divided state, while her plea "How could I know what would happen afterwards?" exposes the gap between a careless act and its consequences. The extract closes with a structural lesson. Her conditional "if I could help her now" is cut off by the Inspector\'s blunt reply, "It\'s too late. She\'s dead", so her remorse meets a finality it cannot alter. Responsibility, Priestley implies, has to come before the act, not after it.\n\nWhat follows complicates her further. Once she has worked out Gerald\'s secret, she tells him that the Inspector already knows and looks at him "almost in triumph": having been exposed, she takes some pleasure in exposing someone else, and Priestley lets us wonder whether her new insight is pure conscience or partly wounded pride. In Act Two, however, she becomes the Inspector\'s interpreter. He tells Mrs Birling that the young are "more impressionable", and Sheila proves him right, warning her mother against building "a kind of wall between us and that girl", an image of the class barrier that the Inspector has come to break down. Even her vocabulary has changed. In Act One she told the manager that the girl had been "very impertinent"; in Act Two, when her mother uses the same word, she remarks that "impertinent is such a silly word", as if the snobbish language that cost Eva her job now sounds absurd to her. She insists "I\'m not a child, don\'t forget" and hands back the ring, yet at the end of the act her mother is still dismissing her as "an hysterical child". Priestley shows a young woman claiming a moral voice in a household that still treats her as a child.\n\nAct Three tests her change against the family\'s attempt to escape. When her mother calls her childish, she turns the word back on her parents: "it\'s you two who are being childish". When her father denies that the man was an inspector at all, she answers with a pun, "he inspected us all right", insisting that his authority was moral rather than official. Yet when Gerald argues that nobody can prove the photographs were the same, she concedes "I see what you mean now": she is not infallible, and for a moment the hoax theory works on her too. Her recovery is therefore more significant. After the call to the Infirmary she holds on to what cannot be argued away, that "Everything we said had happened really had happened". She alone repeats the Inspector\'s prophecy of "Fire and blood and anguish", which carries a grim dramatic irony for an audience who knew that the First World War began in 1914, only two years after the play is set. Even her answer to Gerald, "It\'s too soon. I must think", is thoughtful rather than theatrical: she does not reject him, but she will not slip back into the old arrangement.\n\nUltimately, Sheila matters because she turns the audience\'s judgement into self-examination. Mrs Birling\'s "Well, why shouldn\'t we?" shows the older generation choosing to forget; Sheila shows that remembering is possible, though painful. In 1912 a young woman like her could not vote in parliamentary elections, yet by the end she is the one who speaks most clearly for responsibility to others. When the final telephone call leaves the family staring "guiltily and dumbfounded", her refusal to treat the evening as a joke is vindicated, and Priestley leaves us, like her, unable to say that nothing happened.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted (35 marks); AO4, accuracy in spelling, punctuation and the use of vocabulary and sentence structures, is marked on a grid of its own (5 marks). Context (AO3) is not assessed on this question.',
              'AO1: Sheila\'s change from the excited, sheltered daughter of the opening to the conscience of the family in Act Three, with the extract as the turning point: her honest confession ("It was my own fault") alongside the jealousy and vanity that caused her to act.',
              "AO1: Her importance to the play as a whole: she grasps the Inspector's methods before the others, warns her mother in Act Two, returns the ring, and refuses to let the hoax excuse the family, so that the final telephone call vindicates her.",
              'AO2: Priestley\'s methods: stage directions (her reaction to the photograph; "she almost breaks down, but just controls herself"), the Inspector\'s probing questions and blunt short sentences, dramatic irony, and the contrast between Sheila and her parents at the end.',
              ...bands(35, false),
              'AO4 (5 marks): high performance 4-5 marks, intermediate performance 2-3, threshold performance 1.',
            ],
          },
        ],
      },
      {
        id: 'wjec-lit-04-sec-b',
        title: 'Section B: 19th Century Prose - A Christmas Carol',
        description:
          'Answer the question on A Christmas Carol. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-lit-04-q2',
            questionNumber: 2,
            questionText:
              'You should use the extract below and your knowledge of the whole novel to answer this question.\n\nWrite about the Cratchit family in A Christmas Carol and how Dickens presents their importance to the novel as a whole.\n\nIn your response you should:\n• refer to the extract and the novel as a whole\n• show your understanding of characters and events in the novel\n• refer to the contexts of the novel.\n\n[40]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'evaluation',
            extract: A_CHRISTMAS_CAROL,
            extractSource: A_CHRISTMAS_CAROL_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Dickens presents the Cratchit family as important to the novel because they show Scrooge, and the reader, what life is like for a family who are poor but loving. In the extract the family has very little. After dinner they drink from "Two tumblers, and a custard-cup without a handle", but Dickens says these held the drink "as well as golden goblets would have done". This shows that the Cratchits are happy with what they have and that love matters more to them than money. They are the opposite of Scrooge, who is rich but lonely and miserable.\n\nTiny Tim is the most important member of the family. After Bob\'s toast, Tiny Tim says "God bless us every one!" The word "every" shows that he wants good things for everybody, even though he is ill himself. Dickens makes the reader feel sympathy for him when Bob holds his "withered little hand". The adjective "withered" makes Tim sound like a dying plant. Bob "dreaded that he might be taken from him", which hints that Tim might die.\n\nThe extract is also important because it changes Scrooge. He says to the Ghost, "tell me if Tiny Tim will live", and Dickens says he asks this "with an interest he had never felt before". This shows that Scrooge is starting to care about the poor. The Ghost replies that "the child will die" unless the future changes, and then uses Scrooge\'s own words, saying that Tim had better "decrease the surplus population". Scrooge said this in Stave I about poor people who would rather die than go to the prisons and workhouses. Now he has to think about a real child, and he is "overcome with penitence and grief".\n\nThe Cratchits appear at other points in the novel too. In Stave I Bob is Scrooge\'s clerk, and his fire is so small "that it looked like one coal". In Stave IV the Ghost of Christmas Yet To Come shows Scrooge the family after Tiny Tim has died, and Bob cries "My little, little child!" At the end of the novel Scrooge sends the Cratchits a huge turkey, raises Bob\'s salary and becomes "a second father" to Tiny Tim, who does not die. This shows that Scrooge has really changed.\n\nA Christmas Carol was published in December 1843. The Poor Law Amendment Act of 1834 had set up workhouses for the poor, which is what Scrooge means when he asks about the "Union workhouses" in Stave I. Dickens knew about poverty because as a child he worked in a blacking factory while his father was in a debtors\' prison. He uses the Cratchits to show his readers that poor families are real people who deserve kindness and help.',
              'Grade 6-7':
                'Dickens presents the Cratchit family as the moral heart of A Christmas Carol. They are poor, but they are loving, grateful and generous, and Dickens uses them to show Scrooge, and his readers, the human cost of the attitudes Scrooge holds at the start of the novel.\n\nIn the extract Dickens emphasises how little the family owns while showing that they do not feel poor. The "family display of glass" turns out to be "Two tumblers, and a custard-cup without a handle", so the grand phrase is undercut by the list that follows it. The humour is affectionate rather than mocking, because the narrator insists that these held the drink "as well as golden goblets would have done". The reference to gold is pointed. In Stave II, Belle tells Scrooge\'s younger self that another idol has displaced her: "A golden one." Gold stands for what Scrooge loves, while the Cratchits find their wealth in each other. Even Bob\'s "circle" round the fire is "half a one", a small joke that shows the family making the best of what they have.\n\nTiny Tim is central to this. His words, "God bless us every one!", widen his father\'s blessing to include everybody, and because they come from the weakest member of the family they carry moral authority. Dickens then shifts the mood from comfort to anxiety. Bob holds Tim\'s "withered little hand", and the polysyndeton in "and wished to keep him by his side, and dreaded" piles up Bob\'s feelings until the fear of losing him overtakes the love. The verb "dreaded" foreshadows Tim\'s death in Stave IV.\n\nStructurally, the extract is a turning point for Scrooge. He speaks "with an interest he had never felt before", and he names the child, whereas in Stave I he refers to Bob only as "my clerk". The Ghost\'s reply, "a crutch without an owner, carefully preserved", is a powerful image of absence, but it is conditional: "If these shadows remain unaltered by the Future". This gives Scrooge, and the reader, hope that the future can still be changed. The Ghost then throws Scrooge\'s own words from Stave I back at him: Tim had better "decrease the surplus population". The phrase echoes the economist Thomas Malthus, and Dickens shows how cruel such language becomes when it is applied to one particular child. The rhetorical question "Will you decide what men shall live, what men shall die?" challenges Scrooge directly, and the image of "the Insect on the leaf" makes the rich man who judges the poor seem tiny and arrogant.\n\nThe Cratchits matter because Dickens returns to them at each stage of Scrooge\'s journey. In Stave I Bob works in "a dismal little cell" beside a fire so small "that it looked like one coal", yet the narrator says that, "cold as he was", he "was warmer than Scrooge". In Stave IV the Ghost of Christmas Yet To Come shows Scrooge the family in mourning. The younger children are "as still as statues", and Bob cries "My little, little child!" before breaking down. The vacant seat in the extract has become real. In Stave V Scrooge sends the prize turkey to the Cratchits, raises Bob\'s salary and tells him to "buy another coal-scuttle", reversing the freezing office of Stave I. Most importantly, Tiny Tim "did NOT die", and Scrooge becomes "a second father" to him, so the family\'s fate is the clearest proof that Scrooge has changed.\n\nDickens\'s own childhood gives this weight. He worked in a blacking factory while his father was in a debtors\' prison, so he knew what poverty did to families. Published in December 1843, after the Poor Law Amendment Act of 1834 had set up workhouses for the poor, the novel uses the Cratchits to make readers see the poor as families rather than as a burden. The narrator ends the novel by repeating Tiny Tim\'s blessing, "God bless Us, Every One!", which shows how central the family is to Dickens\'s message of generosity.',
              'Grade 8-9':
                'For Dickens, the Cratchits are less a subplot than the novel\'s moral measuring stick. Scrooge\'s abstractions about the poor are tested against one particular family, and his redemption is finally judged by what becomes of them. Dickens makes them ordinary, hard-working and vulnerable, so that neither Scrooge nor the reader can keep them at a comfortable distance.\n\nThe extract opens in a mood of comic tenderness. The mock-grand "family display of glass" collapses into bathos with "Two tumblers, and a custard-cup without a handle", yet the joke is never at the family\'s expense, because the next sentence insists that they served "as well as golden goblets would have done". The hyperbole turns poverty into a kind of dignity, and the reference to gold quietly indicts Scrooge, whose new idol, Belle told him in Stave II, was "A golden one". Bob\'s "circle" that is "half a one" works in the same way: the family\'s lack is acknowledged and then cheerfully dismissed. Value here is measured in affection rather than money.\n\nTiny Tim\'s "God bless us every one!" turns that domestic warmth into something larger. Bob blesses "us all, my dears", meaning the family; Tim, "the last of all", extends the blessing to "every one", so that the most physically fragile character voices the novel\'s most generous idea. The narrator\'s "as if he loved the child" is a gentle understatement, but the polysyndeton that follows ("and wished to keep him by his side, and dreaded") lets anxiety accumulate until "dreaded" eclipses love. The adjective "withered" suggests a plant dying before its season, an image of a life cut short by want.\n\nThe second half of the extract puts Scrooge on trial. He asks his question "with an interest he had never felt before", and the specificity of the name matters: in Stave I neither Scrooge nor the narrator names the clerk at all, and Scrooge calls him only "my clerk". The Ghost\'s answer works through metonymy, "a crutch without an owner, carefully preserved", so that the object outlives the child, while "carefully" reminds us that love, not neglect, will keep it. Yet the prophecy is grammatically conditional: "If these shadows remain unaltered by the Future". That conditional is the novel\'s moral premise, and Scrooge returns to it in Stave IV when he asks whether the shadows are of things that "May be, only". The Ghost then quotes Scrooge\'s own words, "decrease the surplus population", and the echo is crushing. A phrase that echoed the economist Thomas Malthus in a counting-house is now applied to a child the reader has come to love. The capitalised "What the surplus is, and Where it is" and the image of "the Insect on the leaf" judging "his hungry brothers in the dust" shrink the comfortable judge to an insect while dignifying the poor as his "brothers", and the narrator\'s word "penitence" makes Scrooge\'s response a religious one.\n\nAcross the novel Dickens uses the Cratchits as a structural barometer. In Stave I the unnamed clerk sits in "a dismal little cell" by a fire so small "that it looked like one coal", but, "cold as he was", he "was warmer than Scrooge". In Stave IV the vacant seat becomes real. The "noisy little Cratchits" are "as still as statues", and the Bible verse Peter has been reading, "And He took a child, and set him in the midst of them", places Tim at the centre of the family. Bob\'s cry of "My little, little child!" is perhaps the most painful moment in the book, all the more so because he has just been "very cheerful" with his family. In Stave V, Scrooge\'s pay rise and his order to "buy another coal-scuttle" reverse the hoarded coal-box of Stave I, and the narrator\'s capitalised "did NOT die" announces that the shadows have been altered after all.\n\nDickens is also careful not to make the family a simple chorus of gratitude. When Bob toasts "the Founder of the Feast", Mrs Cratchit calls Scrooge "such an odious, stingy, hard, unfeeling man", and the narrator admits that he "was the Ogre of the family". This lets Scrooge see himself as the poor see him. Even so, the narrator\'s verdict that they were "happy, grateful, pleased with one another, and contented with the time" idealises them. A modern reader might feel that Dickens makes poverty almost cosy, and that Tim is saved by one rich man\'s change of heart rather than by any change in the law. Dickens seems aware of this limit: at the end of Stave III the Ghost shows Scrooge the children Ignorance and Want, who are far less appealing than Tim, and turns "Are there no workhouses?" back on him. The Cratchits win the reader\'s sympathy; Ignorance and Want warn of what happens to those whom sympathy does not reach.\n\nA Christmas Carol was published in December 1843, nine years after the Poor Law Amendment Act of 1834 had set up workhouses for the poor, and Dickens had known poverty himself, working in a blacking factory as a child while his father was in a debtors\' prison. His novel shows how a phrase like Scrooge\'s can make suffering invisible, and the Cratchits are his answer: a family with names, a pudding and a crutch. That the narrator ends the novel with Tim\'s blessing, "God bless Us, Every One!", shows that the family is not peripheral to Scrooge\'s story but the means by which Dickens asks his readers to change as well.',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              'AO1: The Cratchits at each stage of the novel: the clerk in "a dismal little cell" in Stave I, the Christmas dinner and Tiny Tim in Stave III, the family\'s grief in Stave IV, and the prize turkey and pay rise in Stave V; their fortunes measure Scrooge\'s change.',
              'AO2: Methods in the extract: affectionate bathos ("Two tumblers, and a custard-cup without a handle"), Tiny Tim\'s "God bless us every one!", the Ghost\'s conditional prophecy ("If these shadows remain unaltered by the Future") and Scrooge\'s own words turned against him ("decrease the surplus population"); the warm, intrusive narrative voice.',
              "AO3: Dickens's purpose in a novel published in December 1843: the workhouses set up by the Poor Law Amendment Act of 1834, Scrooge's \"surplus population\" as an echo of Thomas Malthus, and Dickens's own childhood poverty; the Cratchits give the poor names and faces.",
              'Higher bands: evaluation of the family as an idealised picture of poverty, set beside Ignorance and Want, and of the novel ending on Tiny Tim\'s blessing, "God bless Us, Every One!"',
              ...bands(40, true),
            ],
          },
        ],
      },
      {
        id: 'wjec-lit-04-sec-c',
        title: 'Section C: Unseen Poetry',
        description:
          'Answer both questions. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. Both poems were written for these practice papers and are attributed to no poet.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-04-q3a',
            questionNumber: 3,
            questionText:
              "Read the two poems, The Quarry and Diwali, Coventry. Both poems are about places, and what they mean to the people who belong to them.\n\nWrite about the poem The Quarry, and its effect on you.\n\nYou may wish to:\n• consider what the poem is about and how it is organised\n• consider the ideas the poet may have wanted us to think about\n• consider the poet's choice of words, phrases and images and the effects they create\n• consider how you respond to the poem.\n\n[15]",
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: `${QUARRY}\n\n---\n\n${DIWALI}`,
            extractSource: 'Two poems written for these practice papers and attributed to no poet.',
            modelAnswers: {
              'Grade 4-5':
                'The poet presents the loss of the quarry as a loss of identity. The grandfather worked there "forty years" and his body has been shaped by the work - "His lungs are full of what they took" and "His hands remember every charge he set." The quarry being filled in with flats or a leisure centre represents how industrial places are replaced by consumer culture. The phrase "one of those cafés / where everything costs four pounds fifty" is sarcastic, showing resentment at gentrification. The ending is emotional - the grandfather looks down at the water that is "the colour of his eyes," suggesting he is part of this place. The final lines, "Some places are not places any more. / They are the spaces people leave behind," suggest that when a place changes, the people connected to it also lose something. The poem made me feel sad for the grandfather, because the place that shaped his whole life is about to disappear.',
              'Grade 6-7':
                'The poet presents loss of place and identity as inseparable, constructing the quarry as simultaneously a geographical feature and an extension of the grandfather\'s body. The opening - "They took the hill apart, stone by stone" - uses the impersonal "they" to characterise industrial extraction as both methodical and anonymous. The quarry is described as "this wound," a metaphor that positions the landscape as injured body, establishing a parallel with the grandfather whose "lungs are full of what they took." The reciprocity is striking: the hill was emptied of its stone, and the grandfather was filled with its dust. The vibrations travelling up his arms "like a small earthquake saying: here, and here" personify the land as communicating through his body, his hands functioning as seismographic instruments that record the earth\'s disturbance. The third stanza introduces gentrification through satirical specificity: "everything costs four pounds fifty" and "the menu says \'artisan\'" deploy the language of consumer culture as a form of violence against industrial memory. The word "artisan" is particularly loaded - it claims the craftsmanship that the quarry workers actually practised while erasing them from the narrative. The image in the last stanza - the water "the colour of his eyes" - is both literal description and metaphysical claim: the grandfather and the quarry have exchanged properties, each marked by the other. The closing aphorism distinguishes between "places" and "spaces people leave behind," proposing that a place becomes a space when the community that defined it is dispersed. Its effect on me is a quiet anger as well as sadness: the poem makes the loss feel like something done to people, not something that simply happened.',
              'Grade 8-9':
                'The poem constructs an economy of exchange between body and landscape in which industrial labour is the medium of mutual transformation: the quarry shaped the grandfather as much as he shaped it. The opening line\'s unnamed subject - "They took the hill apart, stone by stone" - is deceptively simple: "they" encompasses both the workers and the industry that employed them, and the comma-separated "stone by stone" enacts the incremental nature of extraction, each monosyllable a small removal. The resulting "wound" is geological and corporeal simultaneously, the "basin of grey water" a body cavity exposed by surgery. The echoes that "come back smaller than they left" function as a sonic metaphor for diminished returns - the quarry, and by extension the community it sustained, has been reduced. The grandfather\'s body is the poem\'s most complex site of meaning: his lungs contain the quarry\'s dust (the land has literally entered him), his hands remember charges (his body stores industrial knowledge as physical memory), and the tremors travelling his arms register the earth\'s response to its own violation. The gentrification stanza shifts register from elegiac to satirical with controlled fury. The word "artisan" is the poem\'s most politically charged moment - it appropriates the concept of skilled manual labour for a consumer aesthetic that has erased actual labourers from the landscape. The last stanza\'s central image - "The water is the colour of his eyes" - is a chromatic identity between person and place that operates as both observed detail and symbolic fusion. The concluding distinction between "places" and "spaces people leave behind" proposes that place is constituted by presence, by the accumulated labour and memory of a community, and that when this community is displaced, the geographical feature persists but the place is destroyed - an argument with profound implications for deindustrialised communities where identity and industry were synonymous. Its effect on me is unsettling: the poem never raises its voice, and that restraint makes the grandfather\'s silence at the edge of the water harder to forget.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted in this question.',
              "AO1: the poem's ideas about a place and the people it shaped, and a personal response to them",
              'AO2: the hill as a "wound"; the grandfather\'s body as a record of the work; the satire of the "artisan" café; the closing distinction between places and "spaces"',
              ...bands(15, false),
            ],
          },
          {
            id: 'wjec-lit-04-q3b',
            questionNumber: 4,
            questionText:
              "Now compare The Quarry and Diwali, Coventry.\n\nYou should:\n• compare what the poems are about and how they are organised\n• compare the ideas the poets may have wanted us to think about\n• compare the poets' choice of words, phrases and images and the effects they create\n• compare how you respond to the poems.\n\n[25]",
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'comparison',
            extract: `${QUARRY}\n\n---\n\n${DIWALI}`,
            extractSource: 'Two poems written for these practice papers and attributed to no poet.',
            modelAnswers: {
              'Grade 4-5':
                'Both poems explore how place shapes who people are. In "The Quarry," the grandfather\'s identity is completely tied to the quarry where he worked for forty years - his body has been physically changed by the place. The loss of the quarry through redevelopment threatens his identity. In "Diwali, Coventry," the grandmother brought her identity from another country and recreated it in England through food and celebration. Both poems use more than one generation to show how identity changes over time. In "The Quarry," the generations lose their connection to place. In "Diwali," the generations maintain connection through cultural practice. Both poems end with something that endures: the quarry becomes "the spaces people leave behind" while in Diwali "the sweetness - that travels. / That survives." I found "Diwali, Coventry" more hopeful and "The Quarry" sadder, because one ends with something carried on and the other with something left behind.',
              'Grade 6-7':
                'Both poems examine how identity is produced by the interaction between people and places, but they present opposing trajectories: loss and persistence. "The Quarry" charts the progressive erasure of an identity that was physically embedded in landscape. The grandfather\'s body is a record of the quarry - lungs full of dust, hands remembering charges - making him a living archive of a place that is about to be destroyed. The generational structure is one of diminishment: the grandfather worked the quarry, the speaker visits it, and the developers will erase it. "Diwali, Coventry" charts the opposite trajectory: cultural identity transplanted across continents and sustained through ritual. The grandmother "crossed an ocean with nothing / but a recipe and a suitcase" - the recipe functioning as a portable version of the homeland that can be enacted anywhere. The lights in the car park "almost - / but not quite - recall another sky," and this "almost" is the poem\'s emotional centre: displacement means that cultural practice is always a partial recreation, but the partiality does not negate its power. Both poems use specificity to anchor identity in material practice: the quarry\'s stone dust and explosive charges, the gulab jamun and fireworks. The crucial difference is mobility: the quarry identity is fixed to a single location and cannot survive its destruction, while the Diwali identity is portable, carried in recipes and rituals, like the sweetness that "travels" and "survives". "The Quarry" presents place-based identity as vulnerable to economic forces, while "Diwali" presents diasporic identity as resilient precisely because it has already survived displacement. I respond to "The Quarry" with sadness and some anger, and to "Diwali, Coventry" with something closer to hope, though both poems leave me aware of what has been lost.',
              'Grade 8-9':
                'These poems present two fundamentally different models of place-identity relation: one in which identity is produced by and inseparable from a specific location ("The Quarry"), and one in which identity is carried across locations through cultural practice ("Diwali, Coventry"). The quarry identity is geological - it enters the body through lungs and hands, making the grandfather a geological formation in his own right, his body a sedimentary record of forty years\' labour. This identity cannot be relocated; it exists only in the reciprocal relationship between a particular landscape and a particular body. The gentrification that threatens the quarry therefore threatens not merely a place but a form of personhood, and the poem\'s anger at "artisan" cafés is an anger at the replacement of embodied, place-specific identity with consumer identity, which is generic, portable, and evacuated of material history. "Diwali, Coventry" presents identity as a technology of transmission. The grandmother\'s recipe is a cultural algorithm - a set of instructions that, when followed, produces not merely food but continuity. The mother\'s hands move "with the certainty / of someone following instructions / written in a language older than her bones," and this formulation positions cultural practice as a form of pre-linguistic knowledge, older than the individual body, transmitted through gesture rather than text. The lights that "almost - / but not quite - recall another sky" acknowledge the irreducible gap between origin and diaspora: the recreation is imperfect, but the imperfection does not constitute failure. The final claim - "the sweetness - that travels. / That survives" - identifies taste as the most resilient vector of cultural memory, and the syntactical isolation of "That survives" grants it the weight of a declaration. Read together, these poems argue that there are two kinds of identity loss: the destruction of the place that produced the identity ("The Quarry"), and the distance from the place of origin ("Diwali"). The first is catastrophic and final; the second is ongoing but survivable, because the diasporic community carries its place within its practices. As a reader I find the contrast moving rather than neat: "The Quarry" made me grieve for a place I have never seen, while "Diwali, Coventry" made me notice how much of a home can be carried in a recipe.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted in this question.',
              'AO1: two relationships between people and place, one bound to a single spot and one carried across an ocean, and a personal response to both',
              'AO2: the quarry\'s language of injury and the grandfather\'s body against the recipe, the lights and the "sweetness" that "travels"; each poem\'s ending',
              ...bands(25, false),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wjec-lit-05',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
    subtitle: 'C720/02',
    code: 'C720/02',
    totalTimeMinutes: 150,
    totalMarks: 120,
    sections: [
      {
        id: 'wjec-lit-05-sec-a',
        title: 'Section A: Post-1914 Prose/Drama - An Inspector Calls',
        description:
          'Answer the question on An Inspector Calls. You are advised to spend about 45 minutes on this section. 5 of its marks are for accuracy in spelling, punctuation and the use of vocabulary and sentence structures. In the exam the question prints an extract from the play. An Inspector Calls is still in copyright, so this practice paper cannot; the question says where the extract is in your own copy.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-lit-05-q1',
            questionNumber: 1,
            questionText:
              "Read the extract in your own copy of the play. Act Two. The extract begins when Mrs Birling tells the Inspector that the girl first called herself Mrs Birling when she came to the committee, and it ends with the Inspector's reply to Sheila's distress, revealing that the girl \"was going to have a child\".\n\nWrite about Mrs Birling in An Inspector Calls and how she is important to the play as a whole.\n\nIn your response you should:\n• refer to the extract and the play as a whole\n• show your understanding of characters and events in the play.\n\n[40]\n\n*5 of this question's marks are allocated for accuracy in spelling, punctuation and the use of vocabulary and sentence structures.",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5':
                'Mrs Birling is important in "An Inspector Calls" because she shows the snobbish attitudes of the upper class and refuses to accept any responsibility for what happened to Eva Smith. The stage directions describe her as "a rather cold woman and her husband\'s social superior", so from the start Priestley shows that she cares about status. In Act One she tells her husband off for praising the dinner, saying "you\'re not supposed to say such things", which suggests that she cares more about manners than about people.\n\nIn the extract the Inspector questions her about her charity committee. She is offended that the girl called herself Mrs Birling, which she calls "a piece of gross impertinence". When the Inspector asks if she was "prejudiced against her case", she simply says "Yes", which shows that her pride decided whether a desperate girl got help. She also says "she had only herself to blame", which shows that she has no sympathy at all. When the Inspector keeps pushing her, she admits "I didn\'t like her manner", as if that were a good reason to refuse help. She thinks she is better than the others who have been questioned, saying "Unlike the other three, I did nothing I\'m ashamed of", and she claims "I consider I did my duty". The Inspector tells her that she did something "terribly wrong", and then he reveals that the girl "was going to have a child". This shocks Sheila and makes Mrs Birling\'s actions seem even crueller.\n\nMrs Birling is also important because of dramatic irony. At the end of Act Two she blames the father of the child, imagining him as "some drunken young idler", and says "He should be made an example of". The audience begins to realise that the young man is her own son, Eric. Then Eric walks in and the curtain falls, which leaves the audience in suspense.\n\nIn Act Three Eric blames his mother for the death of the girl and the child she was expecting, and tells her "You don\'t understand anything". After the Inspector leaves, the stage directions say "Mrs Birling has collapsed into a chair", but she soon recovers. When Sheila protests that they are all going to behave just as they did before, Mrs Birling replies "Well, why shouldn\'t we?" This shows that she has learned nothing.\n\nOverall, Mrs Birling is important because she represents the older generation who will not change. Priestley wants the audience to see how cruel her attitudes are, and the telephone call at the end suggests that she cannot escape from what she has done.',
              'Grade 6-7':
                'Mrs Birling is important to "An Inspector Calls" because she is the character who resists the Inspector most completely. Priestley uses her to expose the snobbery and self-righteousness of the wealthy, and he uses dramatic irony to make her condemn her own son, so that her pride leads to her own humiliation.\n\nFrom the beginning she is defined by status. The stage directions call her "her husband\'s social superior", and in Act One she corrects Birling for praising the food: "you\'re not supposed to say such things". She also tells Sheila that a wife must put up with a husband who is absorbed in business, "just as I had". She accepts a world in which women give way to men, yet she enforces its rules strictly on everyone else. She then leaves the dining room, so she misses the questioning of her husband and daughter. When she returns in Act Two "briskly and self-confidently", she is out of step with the shaken mood of the others, and she begins to explain the death away with "Girls of that class" until Sheila stops her.\n\nThe extract is the heart of her role. She is outraged that the girl used the name Mrs Birling, calling it "a piece of gross impertinence", and when the Inspector asks whether she was "prejudiced against her case" she simply answers "Yes". This blunt admission shows that she sees nothing wrong in judging a desperate woman by her manners. The Inspector\'s repeated question, "was it or was it not your influence?", drives her past the evasive "possibly", and the stage direction "stung" shows that his persistence has pierced her composure. Even so, her answer, "I didn\'t like her manner", reveals that her charity depended on whether she approved of the person asking for it. Her long speech is full of self-justification: she claims "Unlike the other three, I did nothing I\'m ashamed of" and insists "I consider I did my duty". The word "duty" is important, because she treats the committee as a way of guarding respectability rather than helping people. Priestley ends the extract with the Inspector\'s revelation that the girl "was going to have a child", which makes her refusal seem even crueller, especially when the Inspector later reminds her "You\'ve had children".\n\nHer importance to the structure becomes clear at the end of Act Two. She insists that the father of the child "should be made an example of" and wants him "compelled to confess in public". The audience, and Sheila, begin to realise that the young man is Eric, so every word she says rebounds on her. The Inspector turns her own language against her when he replies "I shall do my duty", and the act ends as Eric walks in and the curtain falls. This cliffhanger makes her interview the hinge between the second and third acts.\n\nIn Act Three Priestley shows what her attitudes have cost. Eric accuses her of killing "your own grandchild", and when the Inspector sums up what each of them did, he names her first: "You turned her away". The stage direction "Mrs Birling has collapsed into a chair" suggests that, for a moment, she is broken. Yet she recovers quickly. She boasts "He certainly didn\'t make me confess", and when Sheila protests that the family will go on behaving just as before, she replies "Well, why shouldn\'t we?" Her refusal to learn makes her the opposite of Sheila, and it is answered by the final telephone call, which brings news that a girl has died and that a police inspector is on his way.\n\nOverall, Mrs Birling is important because she represents an older generation too proud to change. Through her, Priestley criticises a society in which help for the poor depended on the approval of the rich, and he leaves the audience to judge whether people like her can ever learn.',
              'Grade 8-9':
                'Mrs Birling is the play\'s immovable object. Like her husband she refuses to accept blame, but where he is at least shaken into offering money, she insists to the end that she did her duty. Priestley builds his structure around that immovability: her interview turns the play\'s dramatic irony into its climax, and her recovery in Act Three is what makes the final telephone call necessary. Through her, Priestley attacks not just one woman\'s snobbery but a whole idea of charity, in which help is rationed by people who sit in judgement on the poor.\n\nAct One establishes her as the guardian of appearances. The stage direction describes "a rather cold woman and her husband\'s social superior", and her rebuke when Birling praises the dinner, "you\'re not supposed to say such things", shows that etiquette matters more to her than warmth. More revealing is her advice that Sheila must accept a husband absorbed in business, "just as I had". The irony is sharp, since Gerald\'s busy summer at the works was partly a cover for his affair: Mrs Birling is unknowingly teaching her daughter to accept deception. Priestley then removes her from the stage for the rest of the act, so that she enters Act Two "briskly and self-confidently", unshaken, and makes her mistakes after Sheila has warned her not to build "a kind of wall" between the family and the girl.\n\nThe extract shows her speaking the language of judgement. She is outraged that the girl called herself Mrs Birling, "a piece of gross impertinence", and the irony is profound: the child the girl was carrying was a Birling, so her use of the name was closer to the truth than Mrs Birling could imagine. Asked whether she was "prejudiced against her case", she answers simply "Yes", as though prejudice were a reasonable qualification for the woman in the chair. The Inspector\'s insistent "was it or was it not your influence?" forces her from the evasive "possibly" into an admission, and the stage direction "stung" marks a crack in her composure. Her vocabulary is telling: the girl was "not a good case", a phrase that reduces a desperate young woman to a file. When she says the Inspector knows why the girl "wanted" help, he corrects her: he knows why she "needed" it, and that single verb separates her suspicion from his compassion. Her claim "Unlike the other three, I did nothing I\'m ashamed of" sets her apart even from her husband and daughter, and "I consider I did my duty" turns a moral word into a social one. Priestley places the revelation that the girl "was going to have a child" just after her most confident assertions, so the structure punishes her pride.\n\nThe end of Act Two completes the trap. Imagining the father as "some drunken young idler", she demands that he "should be made an example of" and be "compelled to confess in public", precisely the public confession she refuses to make herself. The Inspector\'s reply, "I shall do my duty", reclaims the word she has misused, and the stage direction that he looks at his watch suggests that he knows exactly when Eric will return, almost as if he were directing the scene. Her recognition is marked by the direction "understanding now", and her words "I don\'t believe it. I won\'t believe it" move from disbelief to refusal: denial becomes an act of will. The curtain falls on Eric\'s entrance, so the act ends at her lowest point.\n\nIn Act Three Priestley shows both her collapse and her recovery. When Eric accuses her of killing "your own grandchild", she can only stammer that she did not know, and his reply, "You don\'t understand anything", identifies her real failing as a failure of imagination. The Inspector\'s last words to her, that she refused the girl even the "pitiable little bit" of charity in her power, belittle the institution she was so proud of, and the stage direction "Mrs Birling has collapsed into a chair" shows her defeated. Yet she is "coming to life" again the moment she can condemn Eric, and even before Gerald returns with news that the Inspector may have been a fake, she is rewriting the evening: "He certainly didn\'t make me confess". Later she says that, "like a fool", she admitted seeing the girl, so it is her admission, not her action, that she regrets. Her complacent "Well, why shouldn\'t we?" and her prediction that in the morning the young will be "as amused as we are" recall her advice to Sheila in Act Two to go to bed: her answer to conscience is always sleep and forgetting.\n\nMrs Birling is therefore important as the hardest test of the Inspector\'s message and its most direct target. In 1912 she could not vote in parliamentary elections, yet she used a public role open to a woman of her class to sit in judgement on poorer women, so she is both limited by her society\'s hierarchy and complicit in it. Priestley, a socialist writing in 1945, presents her charity as a substitute for justice, and her refusal to change is why the play cannot end with the Inspector\'s exit. When the final telephone call leaves the family staring "guiltily and dumbfounded", she is caught again, and the audience is left to wonder whether a second inspector will reach her when the first could not.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted (35 marks); AO4, accuracy in spelling, punctuation and the use of vocabulary and sentence structures, is marked on a grid of its own (5 marks). Context (AO3) is not assessed on this question.',
              'AO1: Mrs Birling\'s snobbery and self-righteousness: in the extract she admits being prejudiced against the girl\'s case, refuses all blame and insists "I consider I did my duty".',
              'AO1: Her importance to the play as a whole: she misses the earlier questioning, condemns the father of the child at the end of Act Two without realising that he is her own son, collapses after the Inspector leaves, then recovers and wants the family to carry on as before.',
              'AO2: Priestley\'s methods: dramatic irony and the Act Two curtain on Eric\'s entrance; the Inspector\'s persistent questioning and timed revelations; stage directions ("stung"; "Mrs Birling has collapsed into a chair"); the contrast with Sheila and the final telephone call.',
              ...bands(35, false),
              'AO4 (5 marks): high performance 4-5 marks, intermediate performance 2-3, threshold performance 1.',
            ],
          },
        ],
      },
      {
        id: 'wjec-lit-05-sec-b',
        title: 'Section B: 19th Century Prose - The Strange Case of Dr Jekyll and Mr Hyde',
        description:
          'Answer the question on The Strange Case of Dr Jekyll and Mr Hyde. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-lit-05-q2',
            questionNumber: 2,
            questionText:
              'You should use the extract below and your knowledge of the whole novel to answer this question.\n\nWrite about Mr Hyde and how Stevenson presents him at different points in the novel.\n\nIn your response you should:\n• refer to the extract and the novel as a whole\n• show your understanding of characters and events in the novel\n• refer to the contexts of the novel.\n\n[40]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'evaluation',
            extract: JEKYLL_AND_HYDE,
            extractSource: JEKYLL_AND_HYDE_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Stevenson presents Mr Hyde as a frightening and mysterious character who seems evil to everyone who meets him. In the extract, Utterson, who has been watching the door for a long time, finally sees Hyde\'s face. Hyde shows it "with an air of defiance", which suggests he is not afraid of being looked at. When Utterson suggests that Jekyll described him, Hyde gets angry and says "I did not think you would have lied." Then he "snarled aloud into a savage laugh". The verb "snarled" is animal imagery, as if Hyde is a dog or a wolf rather than a man.\n\nAfter Hyde has gone, Utterson tries to work out why he feels such disgust. Hyde is "pale and dwarfish" and has "a displeasing smile", but these details cannot explain the "disgust, loathing and fear" Utterson feels. Utterson says that "the man seems hardly human" and wonders if he is "troglodytic", which means like a caveman. This links to Darwin\'s On the Origin of Species, published in 1859, which led some Victorians to fear that humans might degenerate and become more like animals. Utterson also says that if he ever read "Satan’s signature upon a face", it is on Hyde\'s, which presents Hyde as devilish.\n\nHyde is presented in a similar way at the start of the novel, through Enfield\'s story. Hyde runs into a young girl at a street corner, and the man "trampled calmly over the child’s body". The word "calmly" is shocking because it shows that Hyde feels no guilt. Enfield also struggles to describe him and says "He must be deformed somewhere". Like Utterson, he cannot say exactly what is wrong with Hyde, which makes Hyde even more mysterious.\n\nLater in the novel Hyde becomes more violent. In Chapter 4 a maid sees him murder Sir Danvers Carew "with ape-like fury". The adjective "ape-like" makes Hyde seem like an animal again. In the last chapter, Jekyll\'s own statement explains that Hyde is his evil side, let loose by a drug, and he says that Hyde "was pure evil". By the end of the novel Hyde has taken over Jekyll completely.\n\nThe novel was published in 1886, when Victorian gentlemen were expected to be respectable and to control themselves. Hyde is everything a respectable gentleman should not be: violent, selfish and out of control. Stevenson uses him to show that even a respected man like Jekyll can have a hidden evil side.',
              'Grade 6-7':
                'Stevenson presents Mr Hyde as a figure of instinctive horror whom other characters struggle to describe, and as the novel goes on he becomes both more violent and, eventually, more pitiable. Because most of the novel follows Utterson, we see Hyde from the outside, through the reactions of respectable men, until Jekyll\'s statement reveals what he really is.\n\nIn the extract, Stevenson shows Hyde\'s mixture of control and savagery. He "fronted about with an air of defiance", letting Utterson study his face, and he even offers his address, which makes Utterson wonder whether he has been "thinking of the will". Yet his composure soon breaks. He repeats "Common friends" "a little hoarsely", and when Utterson names Jekyll he cries out "with a flush of anger". His accusation, "I did not think you would have lied", is ironic: the violent outsider accuses the respectable lawyer of lying, and the reader later realises that he is right, because Hyde and Jekyll are the same man. Finally he "snarled aloud into a savage laugh" and disappears "with extraordinary quickness". The animal verb "snarled" and the adjective "savage" present him as less than human.\n\nThe final paragraph of the extract shows Stevenson making Hyde frightening through what cannot be explained. Utterson lists the facts: Hyde is "pale and dwarfish", has "a displeasing smile" and speaks with "a husky, whispering and somewhat broken voice". The long list sounds like a lawyer gathering evidence, but the evidence fails, because Hyde gives "an impression of deformity without any nameable malformation". Utterson\'s questions then search for a category. "Something troglodytic" suggests a primitive cave-dweller, which links to the fear after Darwin\'s On the Origin of Species (1859) that humans might degenerate. "Satan’s signature upon a face" turns instead to religion. Stevenson never settles on one explanation, so Hyde remains a mystery.\n\nThis pattern begins in Chapter 1, where Enfield tells Utterson the story of the door. Hyde "trampled calmly over the child’s body", and the adverb "calmly" makes the cruelty worse than if it had been done in a rage. Like Utterson, Enfield cannot pin him down: "He must be deformed somewhere", although "I couldn’t specify the point". The building whose door Hyde uses is part of the presentation too, with its "blind forehead of discoloured wall" and "the marks of prolonged and sordid negligence", as if Hyde belongs to the neglected back of a respectable house. In Chapter 2, Utterson\'s pun, "I shall be Mr. Seek", turns the search into a game of hide and seek, which reminds us that Hyde is something hidden.\n\nAs the novel progresses, Hyde becomes more violent. In Chapter 4 a maid sees him attack Sir Danvers Carew "with ape-like fury", and the animal imagery returns. In Chapter 8 Poole describes the masked figure as "like a monkey" and says it cried out "like a rat". Yet the same chapter gives Hyde pathos, because Poole once heard it "Weeping like a woman or a lost soul". By the time Poole and Utterson break down the cabinet door, Hyde is dead, in clothes "far too large for him".\n\nJekyll\'s statement finally explains Hyde. After the first transformation Jekyll felt "younger, lighter, happier in body", and when he saw Hyde in the mirror he felt "a leap of welcome". He says, "This, too, was myself", which suggests that Hyde is not a stranger but a hidden part of Jekyll. He also says that "Edward Hyde, alone in the ranks of mankind, was pure evil", while ordinary people are a mixture of good and evil. Hyde is smaller than Jekyll because, Jekyll suggests, his evil side had been "much less exercised" than his good side.\n\nThe novel was published in 1886, when respectability, reputation and self-control mattered greatly to Victorian gentlemen. Hyde allows Jekyll to enjoy his pleasures without damaging his reputation, so Hyde represents everything respectable London tried to hide. Stevenson suggests that this hidden side does not disappear simply because it is kept out of sight.',
              'Grade 8-9':
                'Stevenson presents Hyde less as a character than as an effect: for most of the novel we meet him only through the shocked reactions of respectable men who cannot find words for him. Because the narrative follows Utterson and withholds Jekyll\'s own account until the final chapter, the reader\'s view of Hyde changes across the novel, from an inexplicable monster to something more disturbing, a part of Jekyll himself.\n\nThe extract dramatises this through an act of looking. Utterson\'s request, "Will you let me see your face?", reflects his belief that the mystery would "lighten" once he had seen Hyde, yet seeing explains nothing. Hyde\'s behaviour is the "murderous mixture of timidity and boldness" that Utterson later names: he faces Utterson "with an air of defiance" and volunteers his address, then turns suspicious, repeating "Common friends" "a little hoarsely", and finally "snarled aloud into a savage laugh". The verb "snarled" and the adjective "savage" make him bestial, while "with extraordinary quickness" gives him a predator\'s speed. There is also a sharp irony. Hyde\'s "I did not think you would have lied" sounds like the outrage of a gentleman, and on a second reading we realise that he is right: Utterson implies that Jekyll described him, and Hyde, who is Jekyll, knows this is untrue. The monster catches the respectable lawyer in a polite deception.\n\nThe final paragraph shows Utterson\'s lawyerly mind failing. He lists the evidence in a long sentence of parallel clauses, "pale and dwarfish", "a displeasing smile", "a husky, whispering and somewhat broken voice", and weighs them as "points against him", as if preparing a case. But the evidence cannot account for "the hitherto unknown disgust, loathing and fear", and the paradox of "deformity without any nameable malformation" makes Hyde\'s wrongness something sensed rather than seen. Utterson then moves through a series of questions, each offering a different explanation. "Something troglodytic" is evolutionary, suggesting a creature from before civilisation, and it draws on the fear, after Darwin\'s On the Origin of Species (1859), that humans might degenerate. The "radiance of a foul soul" shining through the body is spiritual, and his conclusion, "Satan’s signature upon a face", is religious. The word "signature" is telling, because the mystery turns on signatures: the cheque in Chapter 1 carries a respectable man\'s name, and Jekyll later reveals that he gave Hyde a signature by "sloping my own hand backward". Utterson reads Satan\'s handwriting in Hyde\'s face, but the signature Hyde actually uses is Jekyll\'s own hand, sloped backwards.\n\nThe same pattern of failed description frames the novel. In Chapter 1 Enfield tells Utterson how Hyde "trampled calmly over the child’s body", and the adverb "calmly" is more chilling than rage would be. Enfield admits that "It sounds nothing to hear, but it was hellish to see", as though language cannot carry Hyde, and later confesses, "I can’t describe him." Even here Hyde borrows the codes of respectability, insisting that "No gentleman but wishes to avoid a scene", and he pays his way out with gold and a cheque signed in another man\'s name. In Chapter 4 the violence escalates from a child who was "not much the worse" to murder: Hyde clubs Sir Danvers Carew to the ground and tramples him "with ape-like fury". The repeated trampling links the two scenes, and "ape-like" sharpens the fear of degeneration. Yet even this sighting is filtered through a maid who "was romantically given", so Hyde is still seen at a distance.\n\nFrom Chapter 8 onwards Stevenson complicates our response. Poole\'s "masked thing like a monkey" continues the animal imagery, but his report of it "Weeping like a woman or a lost soul", and Hyde\'s own cry, "for God’s sake, have mercy!", invite pity for a creature who showed none. Lanyon, the man of science, still finds "something abnormal and misbegotten in the very essence of the creature", but Jekyll\'s statement finally gives Hyde an inner life. Jekyll greeted his reflection with "a leap of welcome", insisting "This, too, was myself", and his claim that Hyde "alone in the ranks of mankind, was pure evil" is complicated by the excuse he admits making at the time: "It was Hyde, after all, and Hyde alone, that was guilty." Stevenson lets us see that Hyde is also Jekyll\'s scapegoat. Jekyll suggests that Hyde was smaller at first because his evil side had been "much less exercised", but Hyde\'s body seems to grow "in stature" as Jekyll indulges him, and when Jekyll tries to cage him, "My devil had been long caged, he came out roaring." Even so, Jekyll admits near the end of his statement, "I find it in my heart to pity him."\n\nPublished in 1886, the novel exposes a society in which respectability prized reputation and self-control, and in which a gentleman\'s public face could hide his private life. Jekyll\'s house, with its handsome front on a square and its neglected back door on a by-street, gives that division a London setting. Hyde is therefore presented not simply as an evil outsider but as what respectable London hides behind its doors, and the novel\'s final horror is that he was never a stranger at all.',
            },
            markScheme: [
              'AO1, AO2 and AO3 are equally weighted in this question.',
              "AO1: Hyde at different points: Enfield's account of the trampled child (Chapter 1), Utterson's meeting with him in the extract (Chapter 2), the murder of Sir Danvers Carew (Chapter 4), the last night (Chapter 8), and Lanyon's and Jekyll's narratives in the final two chapters.",
              'AO2: Methods: animal imagery ("snarled aloud into a savage laugh", "with ape-like fury"); description that fails ("deformity without any nameable malformation"); religious imagery ("Satan’s signature upon a face"); a mystery narrated from Utterson\'s viewpoint and explained by first-person documents.',
              'AO3: Published in 1886: Victorian respectability, reputation and self-control; fears after Darwin\'s On the Origin of Species (1859) that humans might degenerate ("Something troglodytic"); the London setting, from the respectable square to the neglected door.',
              'Higher bands: evaluation of how far Hyde is "pure evil" and how far he is Jekyll\'s hidden self ("This, too, was myself") and his scapegoat.',
              ...bands(40, true),
            ],
          },
        ],
      },
      {
        id: 'wjec-lit-05-sec-c',
        title: 'Section C: Unseen Poetry',
        description:
          'Answer both questions. You are advised to spend about 20 minutes on the first question and about 40 minutes on the second. Both poems were written for these practice papers and are attributed to no poet.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-lit-05-q3a',
            questionNumber: 3,
            questionText:
              "Read the two poems, After the Diagnosis and The Quarry. Both poems are about loss, and about the ordinary world that goes on around it.\n\nWrite about the poem After the Diagnosis, and its effect on you.\n\nYou may wish to:\n• consider what the poem is about and how it is organised\n• consider the ideas the poet may have wanted us to think about\n• consider the poet's choice of words, phrases and images and the effects they create\n• consider how you respond to the poem.\n\n[15]",
            marks: 15,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: `${DIAGNOSIS}\n\n---\n\n${QUARRY}`,
            extractSource: 'Two poems written for these practice papers and attributed to no poet.',
            modelAnswers: {
              'Grade 4-5':
                'The poet presents receiving bad news as a moment that changes everything without changing anything visible. The consultant speaks "in careful paragraphs" as if the consultant\'s words were written essays, showing how medical language is formal and distant. The person being diagnosed has rehearsed questions "in the car park," showing they tried to prepare themselves. Under the table, "your fingers find my fingers / and hold on like a child crossing a road" - this simile shows vulnerability and the need for human connection when facing fear. The final stanza describes the "ordinary world" they drive through - petrol stations, school traffic - and says "none of it has changed, and all of it has changed," showing the gap between the world looking the same and feeling completely different. The poem made me feel how lonely bad news can be, even when two people face it together.',
              'Grade 6-7':
                'The poet constructs the diagnosis scene through a series of carefully observed disconnections between surface and depth. The consultant\'s speech in "careful paragraphs" introduces the theme of mediated language - the diagnosis is delivered in a register that prioritises institutional protection over emotional truth. The "careful" applies to legal and professional caution rather than tenderness, and the subordinate clause "as though the words themselves might do the damage / that the cells have already done" identifies the absurd temporal displacement of medical language: it treats speech as dangerous when the physical reality has already occurred. The second stanza\'s shift to the second person ("You nod. You ask") creates intimacy while simultaneously performing the disembodied quality of trauma - the speaker observes their partner from a slight distance, as though shock has produced a mild dissociation. The hand-holding simile - "like a child crossing a road" - is devastating in its precision: it reduces a sophisticated adult to a child\'s instinctive fear of danger, and the road-crossing context introduces mortality (traffic as threat) within a framework of protective love. The final stanza\'s catalogue of mundane details - "the petrol station, the school run traffic, / the man walking his dog past the allotments" - presents the world\'s indifference to private catastrophe. The paradox "none of it has changed, and all of it has changed" is the poem\'s philosophical core: the external world is unchanged, but the perceptual framework through which it is experienced has been permanently altered. The unturned radio - a song "we used to love" - enacts silence as a new shared language between two people for whom the old music no longer applies. Its effect on me is a kind of stillness: the poem is so quiet that I found myself reading it slowly, as if not to disturb the two people in it.',
              'Grade 8-9':
                'The poem stages the diagnosis as an event that ruptures the relationship between language and experience, creating a gap that the poem itself attempts to occupy. The opening image of the consultant speaking "in careful paragraphs" is a meta-linguistic observation: medical language is structured (paragraphs, not sentences), qualified ("weighted, qualified"), and designed to manage rather than communicate. The "as though" clause, suggesting that "the words themselves might do the damage / that the cells have already done", identifies a temporal paradox at the heart of diagnosis: the condition exists before its naming, yet the naming feels like the event. The poem\'s use of second person ("You nod") performs dual work: it addresses the partner directly (creating intimacy) and invites the reader into the experience (creating universality). The rehearsed questions represent the impossible preparation for bad news - the attempt to script spontaneity, to maintain agency in a situation defined by its removal. The hands meeting under the table - hidden from the consultant, invisible to the institution - constitute a private counter-language, touch communicating what speech cannot. The simile "like a child crossing a road" collapses adult composure into infantile vulnerability, and the road functions as a threshold metaphor: they are crossing from one reality to another, and the danger is real. The final stanza\'s listing of ordinary details is formally precise: each item (petrol station, school run, dog walker) represents a life continuing in ignorance of the speaker\'s catastrophe. The paradox "none of it has changed, and all of it has changed" is not a rhetorical flourish but an exact description of how diagnosis operates: it adds knowledge without altering physics. The unturned radio is the poem\'s most restrained and devastating image: the song "we used to love" belongs to a pre-diagnosis world, and the verb "used" - normally innocuous - now carries the weight of all future tense lost. The silence that replaces the song is not absence but a new condition of being together in knowledge that cannot be undone. Its effect on me is that the ordinary details of my own day seemed briefly strange after reading it, which may be the poem\'s point.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted in this question.',
              'AO1: the experience of hearing bad news and its effect on two people, and a personal response to it',
              'AO2: the consultant\'s "careful paragraphs"; the shift to "You"; the simile of the child crossing a road; the list of ordinary places; the paradox in "none of it has changed, and all of it has changed"',
              ...bands(15, false),
            ],
          },
          {
            id: 'wjec-lit-05-q3b',
            questionNumber: 4,
            questionText:
              "Now compare After the Diagnosis and The Quarry.\n\nYou should:\n• compare what the poems are about and how they are organised\n• compare the ideas the poets may have wanted us to think about\n• compare the poets' choice of words, phrases and images and the effects they create\n• compare how you respond to the poems.\n\n[25]",
            marks: 25,
            suggestedTimeMinutes: 40,
            questionType: 'comparison',
            extract: `${DIAGNOSIS}\n\n---\n\n${QUARRY}`,
            extractSource: 'Two poems written for these practice papers and attributed to no poet.',
            modelAnswers: {
              'Grade 4-5':
                'Both poems deal with loss within ordinary settings. "After the Diagnosis" presents the loss of health and the future through the ordinary details of driving home - petrol stations, traffic, a dog walker. "The Quarry" presents the loss of a place and way of life through familiar landscape. Both poems use specific, concrete details to make loss feel real. In "Diagnosis," the untouched radio represents the change in the couple\'s emotional world. In "The Quarry," the developers\' plans represent the change in the grandfather\'s physical world. Both poems show people being silent in the face of loss - the couple not turning up the radio, the grandfather who "does not speak." Both poems made me feel sad, but "After the Diagnosis" felt more frightening to me because its loss is still to come.',
              'Grade 6-7':
                'Both poems present loss as something that transforms the ordinary without visibly altering it, though they address different scales: personal mortality in "After the Diagnosis" and community displacement in "The Quarry." "After the Diagnosis" presents the ordinary world as continuing in cruel indifference: "the petrol station, the school run traffic" are unchanged, but the couple\'s relationship to them has been permanently altered. The poem\'s power lies in the gap between external normality and internal catastrophe. "The Quarry" presents the ordinary as being actively replaced: the quarry, which was ordinary to the grandfather (his workplace for forty years), is being converted into a different kind of ordinariness - "flats, perhaps, / a leisure centre." The loss here is not that the ordinary continues but that one form of ordinary is being substituted by another. Both poems use silence to express what language cannot: the couple\'s failure to turn up the radio and the grandfather\'s speechlessness both indicate losses that exceed verbal expression. However, the poems differ in their temporal orientation: "Diagnosis" is about loss of future (the couple\'s assumed tomorrow), while "The Quarry" is about loss of past (the grandfather\'s accumulated history). Both converge on the present moment - the drive home, the standing at the edge - as the point where loss becomes real. I respond more strongly to "After the Diagnosis", because its loss lies ahead and the couple cannot yet know its size, while "The Quarry" mourns something already gone.',
              'Grade 8-9':
                'These poems examine how loss reconfigures the ordinary, presenting two distinct phenomenologies of devastation: the suddenly-altered present ("After the Diagnosis") and the progressively-erased past ("The Quarry"). In "After the Diagnosis," the ordinary world - petrol stations, school run traffic, allotments - is presented as a system of signs that has been catastrophically re-encoded by the diagnosis. Nothing has changed physically, but every object now functions as a reminder of the life that has been placed under threat: the school run implies children\'s futures, the allotments imply seasons of growth, the dog walker implies the mundane continuity that the couple can no longer take for granted. The paradox "none of it has changed, and all of it has changed" is a precise description of how diagnosis operates as a hermeneutic event: it adds no new physical reality but transforms the interpretive framework through which all reality is experienced. In "The Quarry," the ordinary is threatened not by reinterpretation but by physical replacement. The quarry was mundane to the grandfather - his workplace, his daily reality - and the developers\' plans to install "artisan" cafés replace one ordinariness with another. But the new ordinariness erases the old, and with it the labour, the injuries, and the identity that the old ordinariness sustained. Both poems use silence as the signifier of inexpressible loss: the unturned radio and the grandfather\'s refusal to speak are symmetrical gestures of retreat from a language that has proven inadequate. The poems\' conclusions propose different relationships to loss: "After the Diagnosis" ends with an act of shared silence (the couple together in their altered world), while "The Quarry" ends with a philosophical redefinition ("Some places are not places any more. / They are the spaces people leave behind"). Both argue that loss is experienced most acutely not in dramatic moments but in the sudden estrangement from the ordinary - when the familiar becomes unbearable precisely because it remains familiar. My own responses differ: "The Quarry" moves me to anger at what was done to a place, but "After the Diagnosis" leaves nothing to be angry at, only two people in a car, and I find that harder to bear.',
            },
            markScheme: [
              'AO1 and AO2 are equally weighted in this question.',
              'AO1: loss within an ordinary world in both poems, of a future in one and a past in the other, and a personal response to both',
              "AO2: the drive home and the radio against the developers' plans and the grandfather's silence; how each poem ends",
              ...bands(25, false),
            ],
          },
        ],
      },
    ],
  },
]
