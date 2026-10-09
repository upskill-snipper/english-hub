// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * Five Edexcel GCSE English Literature mock papers: three Paper 1s (Macbeth
 * and a post-1914 text) and two Paper 2s (a nineteenth-century novel, an
 * anthology poem and two unseen poems). All five are live: they are in
 * allMockExamPapers in src/data/mock-exams.ts, which the mock-exam pages
 * serve.
 *
 * WHAT WAS WRONG (scripts/check-mock-exam-extracts.mjs, 26 September 2026).
 * The three Macbeth extracts were labelled "Original composition in the style
 * of Shakespeare's Macbeth", yet each question asked the student to explore
 * how Shakespeare presents what was in them, and every model answer analysed
 * the invented lines as Shakespeare's:
 *   - Paper 1A (Macbeth's paranoia) had no sentence of the play in it: one
 *     phrase was borrowed from Act 5 and the rest was invented. The answers
 *     built their readings on invented images (Macbeth as "the serpent in the
 *     garden" who "smiled and smiled and struck", daggers hiding in cloaks),
 *     part (b) quoted the serpent line back as Macbeth's, and the Grade 8-9
 *     answer read the invented smiling as an echo of Hamlet.
 *   - Paper 1B (the sleepwalking scene) had ten of its 24 sentences as the
 *     edition prints them and most of the rest right in their words but not
 *     their stops. What was changed was changed where the answers looked:
 *     "All the perfumes of Arabia" had become "all the perfumes / Of all the
 *     East", the Doctor was cut and his "God, God forgive us all" given to the
 *     Gentlewoman, and the answers analysed each change.
 *   - Paper 1C (the cauldron scene) had six of 16. Lines from across the scene
 *     were reordered and joined to invented ones, and the Grade 8-9 answer set
 *     a dictionary gloss of "conjure" in quotation marks as if it were a line.
 * The essay answers misquoted the play too. Ross's "shrieks, that rent the
 * air" had become "rend"; the Birnam Wood prophecy was quoted in words the
 * play does not use; Banquo's warning about "the instruments of darkness" was
 * quoted with its two halves reversed; his "I dreamt last night of the three
 * Weird Sisters", spoken to Macbeth in Act 2, was placed in his Act 3
 * soliloquy; one answer said the witches gave their prophecy to Macbeth and not
 * to Banquo, when they gave one to each; and the Old Man was credited with
 * portents that Ross reports. Two unseen-poetry answers misquoted their poems,
 * and a Lord of the Flies answer quoted Golding saying the war taught him "the
 * terrible truth about what men can become", which is not a sentence Golding
 * is known to have written.
 *
 * WHAT WAS DONE (27 September 2026). Each Macbeth extract is now a genuine
 * passage of the scene its invention imitated, cut from the held edition
 * (src/data/full-texts/macbeth.ts, Project Gutenberg #1533) by playPassage()
 * in src/lib/study-guides/passage.ts and written into this file by script,
 * never typed. It is set out as the Edexcel banks print a play: each speech a
 * paragraph opening with the speaker's name, each verse line a line, stage
 * directions bracketed. Each keeps its question's focus and is of a similar
 * length: 3.2 for Macbeth's fears on the evening of the feast, 5.1 for the
 * sleepwalking scene, and 4.1 from "By the pricking of my thumbs" to the
 * first apparition for the supernatural. Every part (a) answer was rewritten
 * so that each quotation is in its extract and each claim is true of the
 * words quoted, and part (b) of Paper 1A now quotes the new extract. The essay
 * answers were corrected against the same edition. The Golding quotation was
 * replaced by one from his essay "Fable" (in The Hot Gates, 1965; nine words,
 * within fair dealing); the answers no longer call the specially written
 * post-1914 passages the play's or the novel's own words, and their labels now
 * say plainly that they are not; the unseen poems lost the years in their
 * bylines and gained a label saying they were written for these papers (see
 * the note above them).
 *
 * WHAT A REVIEW OF THAT FIX FOUND (27 September 2026), all corrected here:
 *   - The first fix cut the extracts when this module loaded. The checker
 *     reads a bank's passages from its source, so it reported this file "ok"
 *     having read six extracts and none of the three it was written to catch,
 *     and this module is the chunk the browser downloads for one paper, so it
 *     carried the whole play (about 130 KB) to print three scenes. Hence the
 *     literals, as in ocr-lit-a.ts and aqa-lit-p1-a.ts beside this file.
 *     src/__tests__/edexcel-lit-a-quotes-the-real-text.test.ts cuts each one
 *     again and compares, and holds every quotation to its extract or play.
 *     Once it could read them, the checker called the Act 4 passage altered,
 *     having dropped Macbeth's "(Howe'er you come to know it)" as a stage
 *     direction; it now reads a play with its parentheses as well.
 *   - Rewritten answers still said things the new extracts do not bear out.
 *     All three Paper 1B answers said the extract ends on "What's done cannot
 *     be undone", which is followed by "To bed, to bed, to bed"; a Paper 1A
 *     answer called two sentences of Macbeth's one; a Paper 1C answer said
 *     his "answer me" was held back to the end of the speech, when it is in
 *     its second line and repeated at the end.
 *   - Essay quotations kept forms the edition does not print: "th' innocent
 *     flower" for "the innocent flower", "supped", "promised", "ripped" and
 *     "damned" for its "supp'd", "promis'd", "ripp'd" and "damn'd", "Lay on,
 *     Macduff," set as the start of a line it ends, and dropped stops in
 *     "Fair is foul, and foul is fair" and "a pleasant seat. The air". Four
 *     quotations ran verse lines together with no " / " where a line ends
 *     ("none of woman born / Shall harm Macbeth"), as a poem answer did once
 *     ("thing / they're really looking for").
 *   - Claims beyond the play: Henry Garnet was said to have argued that lying
 *     was permissible (he argued that equivocation was not lying); Lady
 *     Macbeth's faint was called certainly feigned, which the play leaves
 *     open; her death was stated as suicide, which Malcolm reports only "as
 *     'tis thought"; and the play of about 1606 was set against the
 *     "Calvinist/Arminian debate", a quarrel that reached England after it.
 *   - The unseen-poetry answers called the metaphor "a cross" a simile and the
 *     simile "like parts" a metaphor, placed stanzas wrongly (the sixth of
 *     seven called the final one, the third the central one), and counted
 *     "release" as a monosyllable.
 *   - The second unseen poem in each Paper 2 (Question 3) was never shown:
 *     the mock-exam page prints only the first question's extract in a
 *     section, and each poem was its own question's extract. Question 2's
 *     extract now prints both poems, as a paper does, so both are on screen;
 *     Question 3 keeps its own poem for anything that reads it alone. (Since 9
 *     October 2026 each Paper 2 sets one unseen question, a comparison, whose
 *     extract prints both poems.)
 *
 * NOT CHANGED, and why:
 *   - The two post-1914 passages (Section B of Papers 1A and 1B) are still the
 *     site's own, in the style of An Inspector Calls and Lord of the Flies, both
 *     in UK copyright. No real passage can replace them within fair dealing
 *     (quotations of 15 words or fewer). The real Edexcel paper sets an essay
 *     with no extract in this section, as Paper 1C does; whether to change them
 *     to that is a content decision, so it is reported rather than made here.
 *   - Part (b) of each Macbeth question says "In this extract" and prints no
 *     extract of its own. That is deliberate: the mock-exam page shows the
 *     first question's extract above every question in its section.
 *
 * PAPERS 2A AND 2B REBUILT (9 October 2026). They did not follow Pearson's
 * 1ET0/02 (specification Issue 2, PDF pages 23 and 26). Each was 96 marks: a
 * 30-mark comparison of any two anthology poems, an unseen section of a
 * 24-mark single poem and an 8-mark comparison, which is AQA's shape, and a
 * 34-mark "Section C: Nineteenth-Century Poetry" with 4 marks for SPaG, a
 * section the paper does not have. No nineteenth-century novel was set at
 * all. The real paper is 80 marks in four answers of 20: Section A, part (a)
 * on a printed novel extract of about 400 words (AO2) and part (b) on the
 * novel elsewhere (AO1); Section B Part 1, a named anthology poem, printed,
 * compared with one of the student's choice from the same collection (AO2 15,
 * AO3 5); Part 2, two unseen poems compared (AO1 8, AO2 12); no AO4. Each
 * paper now has that shape: 2A sets A Christmas Carol and Conflict, 2B Jekyll
 * and Hyde and Relationships, and each section says that the exam offers
 * every novel and every collection. The novel extracts are cut from the held
 * editions and the named poems copied from the anthology (see the note above
 * them); the unseen poems are the ones these papers already printed. Every
 * Paper 2 question, model answer and mark scheme is new. The test holds each
 * quotation in them to its text, the chosen poems' quotations included,
 * against the anthology's text of The Charge of the Light Brigade and La Belle
 * Dame sans Merci; the answers quote those two in phrases of three words or
 * fewer, because the checker cannot read a poem the paper does not print. The
 * top bands are Pearson's 17-20, the highest of five levels in its June 2024
 * mark scheme for this paper.
 */

// ─── Shakespeare extracts: Macbeth, cut from the held edition ───────────────

// Act 3, Scene 2, the evening of the feast: Lady Macbeth's couplets, then
// Macbeth's fears of Banquo and Fleance, whose murder he has already ordered.
// Paper 1A asks about his paranoia; his "make our faces vizards to our hearts"
// is the starting point for part (b), on deception. Cut from the paragraph
// holding "desire is got without content" to the one holding "full of
// scorpions", so it ends on "lives".
const MACBETH_EXTRACT_A = `LADY MACBETH: Naught’s had, all’s spent,
Where our desire is got without content:
’Tis safer to be that which we destroy,
Than by destruction dwell in doubtful joy.

[Enter Macbeth.]

How now, my lord, why do you keep alone,
Of sorriest fancies your companions making,
Using those thoughts which should indeed have died
With them they think on? Things without all remedy
Should be without regard: what’s done is done.

MACBETH: We have scorch’d the snake, not kill’d it.
She’ll close, and be herself; whilst our poor malice
Remains in danger of her former tooth.
But let the frame of things disjoint,
Both the worlds suffer,
Ere we will eat our meal in fear, and sleep
In the affliction of these terrible dreams
That shake us nightly. Better be with the dead,
Whom we, to gain our peace, have sent to peace,
Than on the torture of the mind to lie
In restless ecstasy. Duncan is in his grave;
After life’s fitful fever he sleeps well;
Treason has done his worst: nor steel, nor poison,
Malice domestic, foreign levy, nothing
Can touch him further.

LADY MACBETH: Come on,
Gently my lord, sleek o’er your rugged looks;
Be bright and jovial among your guests tonight.

MACBETH: So shall I, love; and so, I pray, be you.
Let your remembrance apply to Banquo;
Present him eminence, both with eye and tongue:
Unsafe the while, that we
Must lave our honours in these flattering streams,
And make our faces vizards to our hearts,
Disguising what they are.

LADY MACBETH: You must leave this.

MACBETH: O, full of scorpions is my mind, dear wife!
Thou know’st that Banquo, and his Fleance, lives.`

const MACBETH_EXTRACT_A_SOURCE =
  'William Shakespeare, Macbeth, Act 3, Scene 2. Text: Project Gutenberg #1533.'

// Act 5, Scene 1, the sleepwalking scene, which is prose: from the Doctor's
// "What is it she does now?" to Lady Macbeth's exit, cut with the prose
// option so the edition's line wraps are not printed as verse. Her last
// sentence is "To bed, to bed, to bed", not "What's done cannot be undone".
const MACBETH_EXTRACT_B = `DOCTOR: What is it she does now? Look how she rubs her hands.

GENTLEWOMAN: It is an accustomed action with her, to seem thus washing her hands. I have known her continue in this a quarter of an hour.

LADY MACBETH: Yet here’s a spot.

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

LADY MACBETH: To bed, to bed. There’s knocking at the gate. Come, come, come, come, give me your hand. What’s done cannot be undone. To bed, to bed, to bed.

[Exit.]`

const MACBETH_EXTRACT_B_SOURCE =
  'William Shakespeare, Macbeth, Act 5, Scene 1. Text: Project Gutenberg #1533.'

// Act 4, Scene 1, from "By the pricking of my thumbs" to the First Witch's
// promise of a second apparition ("More potent than the first"): Macbeth's
// demand of the witches and the first answer he gets.
const MACBETH_EXTRACT_C = `SECOND WITCH: By the pricking of my thumbs,
Something wicked this way comes.
Open, locks,
Whoever knocks!

[Enter Macbeth.]

MACBETH: How now, you secret, black, and midnight hags!
What is’t you do?

ALL: A deed without a name.

MACBETH: I conjure you, by that which you profess,
(Howe’er you come to know it) answer me:
Though you untie the winds, and let them fight
Against the churches; though the yesty waves
Confound and swallow navigation up;
Though bladed corn be lodg’d, and trees blown down;
Though castles topple on their warders’ heads;
Though palaces and pyramids do slope
Their heads to their foundations; though the treasure
Of nature’s germens tumble all together,
Even till destruction sicken, answer me
To what I ask you.

FIRST WITCH: Speak.

SECOND WITCH: Demand.

THIRD WITCH: We’ll answer.

FIRST WITCH: Say, if thou’dst rather hear it from our mouths,
Or from our masters?

MACBETH: Call ’em, let me see ’em.

FIRST WITCH: Pour in sow’s blood, that hath eaten
Her nine farrow; grease that’s sweaten
From the murderer’s gibbet throw
Into the flame.

ALL: Come, high or low;
Thyself and office deftly show!

[Thunder. An Apparition of an armed Head rises.]

MACBETH: Tell me, thou unknown power,—

FIRST WITCH: He knows thy thought:
Hear his speech, but say thou naught.

APPARITION: Macbeth! Macbeth! Macbeth! Beware Macduff;
Beware the Thane of Fife.—Dismiss me.—Enough.

[Descends.]

MACBETH: Whate’er thou art, for thy good caution, thanks;
Thou hast harp’d my fear aright.—But one word more.

FIRST WITCH: He will not be commanded. Here’s another,
More potent than the first.`

const MACBETH_EXTRACT_C_SOURCE =
  'William Shakespeare, Macbeth, Act 4, Scene 1. Text: Project Gutenberg #1533.'

// ─── Post-1914 Drama/Prose Extracts (original compositions) ─────────────────

const PRIESTLEY_STYLE_EXTRACT = `MR HARTLEY: (settling into his chair) Well, I think we can all agree it's been a perfectly pleasant evening. No need to dwell on unpleasant matters.

SHEILA: But that's exactly what we always do, isn't it? We have our pleasant evenings and our pleasant dinners and we never once stop to ask who's suffering so that we can be comfortable.

MR HARTLEY: Now, Sheila, there's no need to be dramatic -

SHEILA: I'm not being dramatic, Father. I'm being honest. Perhaps for the first time. That girl - she came to you for help and you turned her away because it was inconvenient. She came to Mother's committee and was refused because she'd had the audacity to ask for a living wage. Don't you see? We're all connected. We're all responsible.

MRS HARTLEY: (sharply) I really must protest. I acted entirely within the rules of the committee. If every girl who complained about her wages were to be -

SHEILA: Were to be what, Mother? Treated like a human being?

(There is a long, uncomfortable silence.)

INSPECTOR FIELD: Miss Hartley is right, of course. But the question is not whether you accept that now - in this room, tonight, with the evidence before you. The question is what you'll do tomorrow, when the morning comes and you can pretend that none of this ever happened.

MR HARTLEY: Now look here, Inspector, I don't like your tone -

INSPECTOR FIELD: I'm not concerned with whether you like my tone, Mr Hartley. I'm concerned with whether you'll remember Eva Mason's face when you next sit down to your pleasant dinner.`

const PRIESTLEY_STYLE_SOURCE =
  'Original composition in the style of J.B. Priestley - themes of social responsibility and class. Written for this practice paper: it is not a passage from An Inspector Calls, and its characters are invented.'

const GOLDING_STYLE_EXTRACT = `The assembly broke apart like a wave hitting rock. The littluns scattered first, drawn by the promise of fruit and the comfort of the beach, their attention spans no longer than the shadows they cast. Jack's hunters drifted away in a loose pack, already laughing about something, their painted faces cracking into grins that had nothing of civilisation in them.

Ralph sat on the platform alone. The conch lay beside him, and he picked it up and turned it over in his hands, feeling the smooth curve of it, the weight. It had seemed so important once - this shell, this beautiful, fragile thing that meant order and fairness and the right to speak. Now it was just a shell. The paint was wearing off, revealing the pale bone beneath, and a hairline crack ran from the lip almost to the tip.

"They don't care about the fire," he said, though there was nobody to hear. "They don't care about being rescued."

Piggy climbed up to the platform, wheezing. His spectacles had been repaired with a strip of vine and sat lopsided on his face.

"What are we going to do, Ralph?"

Ralph looked at the conch. Then he looked at the mountain, where the signal fire should have been burning but wasn't. A ship could pass at any moment. A ship could be passing right now. But the hunters were dancing on the beach and the fire was dead and nobody cared about the fire except him and Piggy, and what could two boys do against the pull of savagery when it felt so much easier to let go than to hold on?

"I don't know," he said. "I honestly don't know."

The darkness came quickly, as it always did on the island, and with it came the fear.`

const GOLDING_STYLE_SOURCE =
  "Original composition in the style of William Golding - themes of civilisation, savagery, and the loss of order. Written for this practice paper with the novel's characters: it is not a passage from Lord of the Flies, so do not quote it as Golding's words."

// ─── Poetry Extracts (original compositions for unseen) ─────────────────────
//
// All four poems were written for these papers; none is a published poem, and
// the poets named in their bylines are invented for the exercise. Until 27
// September 2026 each byline also carried a year, which dated a publication
// that never happened and was given to the student with nothing to say the
// poem was not real. The years are gone, and each question now carries an
// extractSource that says what the poems are.
//
// Question 2 in each unseen section prints BOTH poems. The mock-exam page
// shows only a section's first extract, so while Question 3's poem was
// Question 3's alone, the student was asked to compare it with the first and
// never shown it (found 27 September 2026).

const UNSEEN_PAIR_SOURCE =
  'Both poems in this section are original poems written for this practice paper. Neither is a published poem, and the poets named are invented for the exercise.'

const UNSEEN_POEM_SOURCE =
  'An original poem written for this practice paper. It is not a published poem, and the poet named is invented for the exercise.'

const UNSEEN_POEM_A1 = `The Checkpoint
by S. Kareem

They search my bag with latex hands,
unfolding shirts my mother pressed,
unwrapping gifts I chose with care -
a book, a scarf, a child's stuffed bear.

They hold each item to the light
as if the fabric hides a fuse,
as if the words between the pages
carry more than metaphor.

I stand with arms outstretched, a cross,
while fingers trace my collar, cuffs,
the inside seam along my thigh.
I've learned to keep my breathing slow,

to empty out my face of all
expression, since the wrong expression -
anger, fear, impatience, pride -
is just another kind of bomb.

My passport says I'm free to go.
My passport says I am a citizen.
My passport doesn't say the thing
they're really looking for.

Behind me in the queue, a man
with different papers, different skin,
walks through without a second glance.
I gather up my opened life

and zip it shut. The bear's ear pokes
out from the corner of my case.
My daughter will not know the hands
that held it before hers.`

const UNSEEN_POEM_A2 = `Border Country
by M. Okonkwo

At the crossing point the world divides:
on one side, language I can taste -
the vowels round as bread,
the consonants like doors that open both ways.

On the other side, a tongue of wire,
each syllable a checkpoint
where meaning must show papers
and intent is always suspect.

I carry two countries in my mouth,
switch between them like a radio
finding its frequency - static, then song,
static, then song.

My children speak only the new language.
They do not hear the old one
in my voice, the way it rises
on a question, falls on grief.

Between what I left and what I found
there is a country with no name,
populated only by people like me
who answer to two flags and belong to none.`

const UNSEEN_POEM_B1 = `Night Shift
by R. Okafor

The factory breathes at night - a long,
mechanical inhale that draws
the workers through its metal mouth
and swallows them till dawn.

My mother enters at eleven,
hair pinned beneath a paper cap,
her hands already knowing
the machine's insistent rhythm.

Eight hours of the same motion:
lift, press, turn, release.
Lift, press, turn, release.
The body learns to disappear

inside the repetition,
the mind to travel somewhere warm -
a kitchen, maybe, where the radio plays
and children do their homework at the table.

By morning she will smell of oil
and something chemical and sweet.
Her fingers will be stiff, her back
a sentence she cannot complete.

She'll sleep while I make toast,
then rise at two and wash and iron
the uniform that turns her
from my mother into Worker 4751.

I've never seen her cry. I've seen her
wince, and stretch, and sigh,
and fall asleep mid-sentence
with the television on.

Once, I found her standing
at the window in the dark,
watching nothing, holding nothing,
being no one's anything at all.`

const UNSEEN_POEM_B2 = `Assembly Line
by K. Draper

We are the hands that make the things
you hold without a thought -
the ones who know the weight of hours
that cannot be unwrought.

Each piece we touch moves down the belt,
anonymous and clean,
while we remain in place like parts
inside a larger machine.

The foreman counts us by our stations,
not our names, and when
one leaves or falls or fails to come
another fills the space again.

At break we sit beneath the strip lights,
tea in paper cups,
and talk of football, children, weather -
never what we've given up.

The clock moves differently in here:
it does not tick but hum,
a low vibration in the bones
that says the day is never done.

We punch out at the gate and blink
like creatures from a cave,
surprised by sky, surprised by trees,
surprised that light behaves

so carelessly, so freely spent
on everyone, on anything,
while we have counted every second
like a miser counts his coin.`

// ─── Paper 2: novel extracts and named anthology poems ──────────────────────
//
// Added 9 October 2026, when Papers 2A and 2B were rebuilt in the shape of
// Pearson's 1ET0/02 (see the docblock at the top of this file).
//
// The two novel extracts are cut from the held editions in src/data/full-texts
// and written in as strings, so scripts/check-mock-exam-extracts.mjs can read
// them; edexcel-lit-a-quotes-the-real-text.test.ts cuts them again and compares.
// Pearson prints about 400 words: these are 388 and 458.

// Stave 2: the Ghost of Christmas Past shows Scrooge the evening Belle ends their
// engagement. From "He was not alone" to her "Ah, no!".
const CAROL_EXTRACT = `He was not alone, but sat by the side of a fair young girl in a mourning-dress: in whose eyes there were tears, which sparkled in the light that shone out of the Ghost of Christmas Past.

"It matters little," she said, softly. "To you, very little. Another idol has displaced me; and if it can cheer and comfort you in time to come, as I would have tried to do, I have no just cause to grieve."

"What Idol has displaced you?" he rejoined.

"A golden one."

"This is the even-handed dealing of the world!" he said. "There is nothing on which it is so hard as poverty; and there is nothing it professes to condemn with such severity as the pursuit of wealth!"

"You fear the world too much," she answered, gently. "All your other hopes have merged into the hope of being beyond the chance of its sordid reproach. I have seen your nobler aspirations fall off one by one, until the master-passion, Gain, engrosses you. Have I not?"

"What then?" he retorted. "Even if I have grown so much wiser, what then? I am not changed towards you."

She shook her head.

"Am I?"

"Our contract is an old one. It was made when we were both poor and content to be so, until, in good season, we could improve our worldly fortune by our patient industry. You are changed. When it was made, you were another man."

"I was a boy," he said impatiently.

"Your own feeling tells you that you were not what you are," she returned. "I am. That which promised happiness when we were one in heart, is fraught with misery now that we are two. How often and how keenly I have thought of this, I will not say. It is enough that I have thought of it, and can release you."

"Have I ever sought release?"

"In words. No. Never."

"In what, then?"

"In a changed nature; in an altered spirit; in another atmosphere of life; another Hope as its great end. In everything that made my love of any worth or value in your sight. If this had never been between us," said the girl, looking mildly, but with steadiness, upon him; "tell me, would you seek me out and try to win me now? Ah, no!"`

const CAROL_EXTRACT_SOURCE =
  'Charles Dickens, A Christmas Carol, Stave 2. Text: Project Gutenberg #46.'

// Chapter 4, The Carew Murder Case: its first paragraph, the maid's account of
// the murder.
const JEKYLL_EXTRACT = `Nearly a year later, in the month of October, 18—, London was startled by a crime of singular ferocity and rendered all the more notable by the high position of the victim. The details were few and startling. A maid servant living alone in a house not far from the river, had gone upstairs to bed about eleven. Although a fog rolled over the city in the small hours, the early part of the night was cloudless, and the lane, which the maid’s window overlooked, was brilliantly lit by the full moon. It seems she was romantically given, for she sat down upon her box, which stood immediately under the window, and fell into a dream of musing. Never (she used to say, with streaming tears, when she narrated that experience), never had she felt more at peace with all men or thought more kindly of the world. And as she so sat she became aware of an aged beautiful gentleman with white hair, drawing near along the lane; and advancing to meet him, another and very small gentleman, to whom at first she paid less attention. When they had come within speech (which was just under the maid’s eyes) the older man bowed and accosted the other with a very pretty manner of politeness. It did not seem as if the subject of his address were of great importance; indeed, from his pointing, it sometimes appeared as if he were only inquiring his way; but the moon shone on his face as he spoke, and the girl was pleased to watch it, it seemed to breathe such an innocent and old-world kindness of disposition, yet with something high too, as of a well-founded self-content. Presently her eye wandered to the other, and she was surprised to recognise in him a certain Mr. Hyde, who had once visited her master and for whom she had conceived a dislike. He had in his hand a heavy cane, with which he was trifling; but he answered never a word, and seemed to listen with an ill-contained impatience. And then all of a sudden he broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on (as the maid described it) like a madman. The old gentleman took a step back, with the air of one very much surprised and a trifle hurt; and at that Mr. Hyde broke out of all bounds and clubbed him to the earth. And next moment, with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows, under which the bones were audibly shattered and the body jumped upon the roadway. At the horror of these sights and sounds, the maid fainted.`

const JEKYLL_EXTRACT_SOURCE =
  'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde, Chapter 4. Text: Project Gutenberg #43.'

// Section B Part 1 prints the named poem, as the exam does. Both are copied from
// the Pearson Edexcel GCSE English Literature Poetry Anthology, Issue 4 (January
// 2023): Exposure from PDF pages 31 and 32, Neutral Tones from PDF page 11. Each
// was compared line by line with the PDF's text and keeps its marks: the
// ellipses, the spaced dashes and the curly apostrophes. Owen died in 1918 and
// Hardy in 1928, so both poems are out of UK copyright and are printed whole.
const EXPOSURE = `Exposure
by Wilfred Owen

Our brains ache, in the merciless iced east winds that knive us…
Wearied we keep awake because the night is silent…
Low, drooping flares confuse our memories of the salient…
Worried by silence, sentries whisper, curious, nervous,
But nothing happens.

Watching, we hear the mad gusts tugging on the wire,
Like twitching agonies of men among its brambles.
Northward, incessantly, the flickering gunnery rumbles,
Far off, like a dull rumour of some other war.
What are we doing here?

The poignant misery of dawn begins to grow…
We only know war lasts, rain soaks, and clouds sag stormy.
Dawn massing in the east her melancholy army
Attacks once more in ranks on shivering ranks of grey,
But nothing happens.

Sudden successive flights of bullets streak the silence.
Less deadly than the air that shudders black with snow,
With sidelong flowing flakes that flock, pause, and renew,
We watch them wandering up and down the wind’s nonchalance,
But nothing happens.

Pale flakes with fingering stealth come feeling for our faces –
We cringe in holes, back on forgotten dreams, and stare, snow-dazed,
Deep into grassier ditches. So we drowse, sun-dozed,
Littered with blossoms trickling where the blackbird fusses.
Is it that we are dying?

Slowly our ghosts drag home: glimpsing the sunk fires, glozed
With crusted dark-red jewels; crickets jingle there;
For hours the innocent mice rejoice: The house is theirs;
Shutters and doors, all closed: on us the doors are closed, –
We turn back to our dying.

Since we believe not otherwise can kind fires burn;
Nor ever suns smile true on child, or field, or fruit.
For God’s invincible spring our love is made afraid;
Therefore, not loath, we lie out here; therefore were born,
For love of God seems dying.

Tonight, His frost will fasten on this mud and us,
Shrivelling many hands, puckering foreheads crisp.
The burying party, picks and shovels in the shaking grasp,
Pause over half-known faces. All their eyes are ice,
But nothing happens.`

const EXPOSURE_SOURCE =
  'Wilfred Owen, Exposure (1917), as printed in the Pearson Edexcel GCSE English Literature Poetry Anthology, Collection B: Conflict. Out of UK copyright.'

const NEUTRAL_TONES = `Neutral Tones
by Thomas Hardy

We stood by a pond that winter day,
And the sun was white, as though chidden of God,
And a few leaves lay on the starving sod;
– They had fallen from an ash, and were gray.

Your eyes on me were as eyes that rove
Over tedious riddles of years ago;
And some words played between us to and fro
On which lost the more by our love.

The smile on your mouth was the deadest thing
Alive enough to have strength to die;
And a grin of bitterness swept thereby
Like an ominous bird a-wing…

Since then, keen lessons that love deceives,
And wrings with wrong, have shaped to me
Your face, and the God-curst sun, and a tree,
And a pond edged with grayish leaves.`

const NEUTRAL_TONES_SOURCE =
  'Thomas Hardy, Neutral Tones (1898), as printed in the Pearson Edexcel GCSE English Literature Poetry Anthology, Collection A: Relationships. Out of UK copyright.'

// ─── Edexcel Literature Papers ──────────────────────────────────────────────

export const edexcelLitPapers: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1A - Macbeth (Paranoia/Tyranny) + An Inspector Calls style
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lit-p1-a',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and Post-1914 Literature',
    subtitle: 'English Literature 1ET0/01',
    code: '1ET0/01',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'edexcel-lit-p1-a-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer BOTH parts of the question. You are advised to spend about 55 minutes on this section. Read the extract below, then answer part (a) and part (b).',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-lit-p1-a-q1a',
            questionNumber: 1,
            questionText:
              "Explore how Shakespeare presents Macbeth's growing paranoia in this extract.\n\nGive examples from the extract to support your ideas.\n\n[20 marks]",
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_A,
            extractSource: MACBETH_EXTRACT_A_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents Macbeth as a man who has become king but cannot rest. Before he speaks, Lady Macbeth notices that he keeps "alone" with only his "sorriest fancies" for company. This shows that his fears are cutting him off from other people, and when she tells him that "what\'s done is done", it suggests that he keeps going back to the murder of Duncan.\n\nMacbeth compares the danger he still faces to a snake: "We have scorch\'d the snake, not kill\'d it." This means that killing Duncan has only injured the threat to him, and he fears it will "close, and be herself" and strike again. The snake stands for anyone who could take the crown from him, especially Banquo.\n\nHis fear affects his whole life. He says he eats "in fear" and suffers "terrible dreams / That shake us nightly". The word "nightly" shows that the fear comes back every night. He even says it would be "Better be with the dead" than to live with "the torture of the mind". He envies Duncan, who "sleeps well" in his grave, because nothing can hurt him any more. Macbeth killed Duncan to gain power, but he has lost his peace.\n\nMacbeth also knows he must hide his fear. He tells Lady Macbeth to honour Banquo at the feast and says they must "make our faces vizards to our hearts", meaning that their faces must be masks. The audience knows he has already arranged for Banquo to be murdered, so this shows how deceitful and dangerous he has become.\n\nAt the end of the extract he says "O, full of scorpions is my mind, dear wife!" Scorpions are small, poisonous and hidden, so the metaphor suggests that his thoughts are stinging him all the time. He then names the people he fears, "Banquo, and his Fleance", which shows that his paranoia has a target and will lead to more killing.',
              'Grade 6-7':
                'Shakespeare presents Macbeth\'s paranoia as the price of the crown: having killed to become king, he now sees threats everywhere and finds peace nowhere. The extract opens with Lady Macbeth alone, speaking in rhyming couplets: "Naught\'s had, all\'s spent, / Where our desire is got without content". The rhymes sound neat and final, but their meaning is bleak. The couple have everything they wanted and none of the "content" it was meant to bring, and the mood of the scene is set before Macbeth speaks. When she tells him that "what\'s done is done", she is trying to close a subject that he cannot close.\n\nMacbeth\'s first image turns his fear into a living enemy. "We have scorch\'d the snake, not kill\'d it" suggests that Duncan\'s murder has only wounded the danger, which will "close, and be herself" and threaten them again. A snake is a traditional symbol of treachery, but Macbeth now fears being bitten rather than admitting that he was the treacherous one. His paranoia makes him the victim in his own story.\n\nThe long sentence that follows shows a mind out of control. Macbeth would rather "let the frame of things disjoint, / Both the worlds suffer" than "eat our meal in fear". The hyperbole is extreme: he would see heaven and earth collapse rather than go on being afraid. His fear reaches into his sleep, where "these terrible dreams / That shake us nightly" torment him, and he ends up envying his victim. "Duncan is in his grave; / After life\'s fitful fever he sleeps well" makes life itself a fever, and the list "nor steel, nor poison, / Malice domestic, foreign levy" names every danger a king faces, dangers that Duncan is now safe from and Macbeth is not.\n\nParanoia also shapes how Macbeth behaves in public. He tells Lady Macbeth to "Present him eminence, both with eye and tongue", flattering Banquo at the feast, while admitting that they are "Unsafe the while" and must "make our faces vizards to our hearts". The audience knows he has already sent murderers after Banquo and Fleance, so this is dramatic irony: the guest to be honoured is meant to be dead before the meal. Macbeth does not even tell his wife.\n\nThe extract ends with the metaphor "O, full of scorpions is my mind, dear wife!" The scorpions are many, hidden and venomous, an image of thoughts that sting from within. The final line names his targets, "Banquo, and his Fleance", and ends on the word "lives", which suggests that his fear will only be quieted by their deaths. Shakespeare shows paranoia driving Macbeth on to further murder.\n\nFor a Jacobean audience, a king who had seized the throne by killing an anointed king could never feel secure, and Macbeth\'s sleepless fear would have seemed a fitting punishment.',
              'Grade 8-9':
                'Shakespeare presents Macbeth\'s paranoia as the logical consequence of usurpation: a king who took the crown by murder can trust no one, because he knows what a trusted man can do. The extract dramatises this through a contrast of voices. Lady Macbeth\'s short soliloquy is in closed rhyming couplets: "\'Tis safer to be that which we destroy, / Than by destruction dwell in doubtful joy." The echo of "destroy" in "destruction" traps her in the same words, and the neat rhyme sits oddly with what it admits, that the dead Duncan is safer than his killers. Yet she keeps this despair to herself. When Macbeth enters, her tone becomes brisk and practical: "Things without all remedy / Should be without regard: what\'s done is done." The couple are now isolated from each other as well as from the court. She reproaches him for keeping "alone" with his "sorriest fancies", and her claim that such thoughts "should indeed have died / With them they think on" is chilling, because the people those thoughts are about are the people they have killed.\n\nMacbeth\'s answer refuses her closure. "We have scorch\'d the snake, not kill\'d it" recasts the murder as unfinished work: the threat is wounded, not ended, and "She\'ll close, and be herself" imagines it healing and returning to strike. The image inverts the serpent of Eden. Macbeth, who murdered a king under his own roof, now casts himself as the one in danger of "her former tooth", and his paranoia depends on forgetting his own treachery. The phrase "our poor malice" is revealing: he calls his own enmity "poor", weak and in need of protection, as if he were the one under threat.\n\nThe syntax of his long speech enacts the disorder of his mind. Two long sentences run from "But let the frame of things disjoint" to "In restless ecstasy", each held open across line after line, piling hyperbole on hyperbole. He would let the universe "disjoint" and "Both the worlds suffer" rather than "eat our meal in fear", setting heaven and earth against his own comfort. The "terrible dreams / That shake us nightly" continue the play\'s pattern of lost sleep since Duncan\'s murder, and the oxymoron "restless ecstasy" (ecstasy here meaning a frenzy, a state outside oneself) describes a mind that cannot be still. His envy of Duncan then turns the murder upside down: "Duncan is in his grave; / After life\'s fitful fever he sleeps well." The victim has what the murderer cannot have. The list "nor steel, nor poison, / Malice domestic, foreign levy, nothing / Can touch him further" is a catalogue of a tyrant\'s fears, each of them a threat that Macbeth now lives with and Duncan has escaped.\n\nParanoia also turns every social act into a performance. Lady Macbeth\'s instruction to "sleek o\'er your rugged looks" and be "bright and jovial among your guests" is echoed by Macbeth\'s "make our faces vizards to our hearts, / Disguising what they are." A vizard is a mask, and the image recalls her earlier advice that he should look innocent while hiding the serpent beneath. The dramatic irony is severe. Macbeth asks her to "Present him eminence", honouring Banquo "with eye and tongue", when he has already hired Banquo\'s murderers and is keeping the plan from her. Even husband and wife are now separated by a mask. His admission that they must "lave our honours in these flattering streams" suggests that royal honour has to be washed in flattery to stay clean, a telling image for a man whose hands have already been washed of a king\'s blood.\n\nThe extract closes with its most concentrated image: "O, full of scorpions is my mind, dear wife!" The metaphor places the danger inside Macbeth\'s own mind: scorpions are numerous, hidden and venomous, and the tenderness of "dear wife" makes the confession more painful. The final line turns inner torment into a list of targets, "Banquo, and his Fleance", and ends on the verb "lives". Shakespeare shows how paranoia works. Fear seeks relief in further violence, and the only thing that will quiet it is another death.\n\nA Jacobean audience, under a king who had narrowly escaped the Gunpowder Plot and who was believed to be descended from Banquo, would have understood the lesson: a usurper who kills to be secure can never be secure.',
            },
            markScheme: [
              'AO1: Perceptive, detailed response with well-chosen textual references that are fully integrated',
              "AO2: Detailed analysis of Shakespeare's use of language, form, and structure - the snake and scorpion imagery, hyperbole, faces as masks, dramatic irony, the contrast between Lady Macbeth's couplets and Macbeth's long, disordered sentences",
              'Top band (17-20): Assured, personal response showing perceptive understanding; well-chosen references; detailed exploration of effects of language, form, and structure',
            ],
          },
          {
            id: 'edexcel-lit-p1-a-q1b',
            questionNumber: 2,
            questionText:
              'In this extract, Macbeth says that he and Lady Macbeth must "make our faces vizards to our hearts."\n\nExplain how the theme of deception is presented in the play as a whole.\n\nYou must refer to the context of the play in your answer.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Deception is a major theme in Macbeth from the very beginning. The witches say "fair is foul, and foul is fair" which sets up the idea that nothing in the play is what it seems. Macbeth appears to be a loyal and brave soldier, but he is secretly planning to murder the king. Lady Macbeth tells him to "look like the innocent flower, / But be the serpent under\'t," which means he should act kind and friendly while hiding his true murderous intentions.\n\nWhen Duncan arrives at their castle, both Macbeth and Lady Macbeth pretend to be welcoming hosts while planning his murder. This is dramatic irony because the audience knows what is going to happen but Duncan does not. After the murder, they deceive everyone by blaming the guards, and Lady Macbeth faints, perhaps only pretending to, which draws attention away from her husband.\n\nThe witches are also deceptive throughout the play. Their prophecies seem helpful but actually lead Macbeth to his destruction. They tell him "none of woman born / Shall harm Macbeth," which makes him feel invincible, but Macduff was born by caesarean section, so the prophecy was a trick.\n\nIn Shakespeare\'s time, deception was linked to the idea of the Devil, and Macbeth\'s deception of Duncan - who was God\'s anointed king - would have been seen as a deeply sinful act.',
              'Grade 6-7':
                'Shakespeare constructs deception as the play\'s dominant mode of operation, establishing it in the opening scene with the witches\' paradox "fair is foul, and foul is fair" - a chiasmus that collapses moral categories and prepares the audience for a world in which appearances are systematically unreliable. This principle infects every relationship in the play.\n\nMacbeth\'s deception operates on multiple levels. Before Duncan\'s murder, Lady Macbeth coaches him to "look like the innocent flower, / But be the serpent under\'t," deploying an Edenic metaphor that positions their treachery as a re-enactment of the Fall. The dramatic irony of Duncan\'s arrival at Inverness - "This castle hath a pleasant seat" - is devastating because the audience watches a man praising the beauty of the place where he will be murdered. Shakespeare uses dramatic irony here not merely for tension but to implicate the audience in the deception: we know, and we watch, and we do nothing.\n\nThe witches embody a more metaphysical form of deception: equivocation. Their prophecies are technically true but designed to mislead - "none of woman born" conceals the caesarean loophole, while "until / Great Birnam wood to high Dunsinane hill / Shall come" seems impossible until Malcolm\'s army uses branches as camouflage. This connects to the Jacobean context of the Gunpowder Plot (1605), after which "equivocation" became a politically charged term, particularly associated with the Jesuit Henry Garnet, who defended equivocation, a deliberately misleading answer that he argued was not a lie.\n\nBy the play\'s end, deception has consumed itself. Macbeth recognises that the witches are "juggling fiends" who "palter with us in a double sense," but this recognition comes too late. Shakespeare suggests that deception is ultimately self-defeating: the deceiver becomes the most deceived, trapped in a reality they can no longer read accurately.',
              'Grade 8-9':
                'Shakespeare presents deception in Macbeth not as an aberration within an otherwise honest world but as the foundational condition of political existence, arguing that the exercise of power inevitably requires - and is corroded by - the gap between appearance and reality. The play\'s opening establishes deception as ontological rather than merely strategic: "fair is foul, and foul is fair" does not simply mean that good things appear bad; it asserts that the categories themselves are unstable, that moral reality is constitutively ambiguous.\n\nThe Macbeths\' deception of Duncan is presented through dense layers of dramatic irony that implicate the audience in the epistemological problem the play poses. Duncan\'s response to Inverness - "This castle hath a pleasant seat. The air / Nimbly and sweetly recommends itself / Unto our gentle senses" - reads the castle through the lens of pastoral innocence, a misreading so catastrophic that it functions as a critique of empiricism itself: the evidence of the senses is worthless when the world has been deliberately constructed to deceive them. Lady Macbeth\'s instruction to "look like the innocent flower, / But be the serpent under\'t" explicitly frames deception through the iconography of the Fall, but Shakespeare complicates this: in Genesis, the serpent deceives Eve, whereas here it is a woman who instructs a man in serpentine behaviour, inverting the traditional gendered hierarchy of temptation.\n\nThe witches practise a form of deception that is philosophically distinct from lying: equivocation. Their prophecies are true in every literal sense - Birnam Wood does come to Dunsinane, no man "of woman born" does kill Macbeth - yet they are designed to produce false conclusions. This engages directly with the Jacobean debate about equivocation prompted by the trial of Henry Garnet, who defended the practice of mental reservation, a true statement completed silently in the mind, as morally permissible. Shakespeare\'s witches embody the terror of a world where truth itself can be weaponised, where factual accuracy is compatible with - and serves - deception. The Porter\'s drunken monologue about equivocators in Act II explicitly connects domestic treachery with this broader political and theological anxiety.\n\nCritically, Shakespeare demonstrates that sustained deception transforms the deceiver. Macbeth\'s trajectory from reluctant dissembler to practised tyrant - from "false face must hide what the false heart doth know" to the casual commissioning of Banquo\'s murder - charts the normalisation of duplicity. By Act V, Macbeth\'s bitterness about life as "a tale / Told by an idiot, full of sound and fury, / Signifying nothing" can be read as the terminal consequence of living in a deceptive reality: when you have lied to everyone, including yourself, meaning itself collapses. The restoration of Malcolm at the play\'s end promises a return to legible truth - but the audience, having witnessed how easily Duncan was deceived, must wonder whether this transparency is itself another performance.',
            },
            markScheme: [
              'AO1: Perceptive, developed response with well-chosen, integrated textual references',
              "AO2: Analysis of Shakespeare's methods - dramatic irony, equivocation, imagery, structural parallels",
              'AO3: Understanding of context - the Gunpowder Plot, equivocation, Divine Right of Kings, Jacobean politics, the Great Chain of Being',
              'Top band (17-20): Assured, exploratory response; judicious references; detailed analysis of methods; context effectively integrated',
            ],
          },
        ],
      },
      {
        id: 'edexcel-lit-p1-a-sec-b',
        title: 'Section B: Post-1914 British Play/Novel',
        description:
          'Answer the question on your studied text. You are advised to spend about 50 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-lit-p1-a-q2',
            questionNumber: 3,
            questionText:
              'Read the following extract and then answer the question.\n\nHow does the writer present ideas about social responsibility in this extract and in the text as a whole?\n\nYou must refer to the context of the text in your answer.\n\n[40 marks - includes 8 marks for the range and accuracy of spelling, punctuation and grammar]',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: PRIESTLEY_STYLE_EXTRACT,
            extractSource: PRIESTLEY_STYLE_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract, the writer presents social responsibility through the conflict between Sheila and her parents. Sheila says "We\'re all connected. We\'re all responsible," which directly states the message that people in society should care about each other, not just themselves. Her parents try to avoid responsibility - Mr Hartley dismisses it as "dramatic" and Mrs Hartley claims she "acted entirely within the rules of the committee", showing how privileged people make excuses for not helping others.\n\nInspector Field acts as the moral voice, challenging the family to remember their responsibility. He asks whether they will "pretend that none of this ever happened," suggesting that most people forget about social problems once they are out of sight.\n\nIn the play as a whole, the writer uses the structure of a detective investigation to gradually reveal how each family member contributed to a young woman\'s suffering. Each revelation increases the tension and the sense of collective guilt. The writer\'s message is that society cannot function properly if wealthy people ignore the suffering of those less fortunate.\n\nThis reflects the context of Britain after the wars, when there was a strong feeling that society needed to change and that the old class system had failed ordinary people.',
              'Grade 6-7':
                'The writer presents social responsibility as a moral imperative that the older generation refuses to acknowledge and the younger generation cannot ignore. The extract stages this generational divide through a tightly structured argument in which Sheila systematically dismantles her parents\' defences. Her anaphoric repetition - "She came to you... She came to Mother\'s committee" - constructs a chain of complicity, showing how multiple acts of institutional indifference combine to destroy an individual life. The phrase "the audacity to ask for a living wage" uses bitter irony to expose how the ruling class frames reasonable requests as impertinence.\n\nMr Hartley\'s responses are characterised by deflection: "no need to be dramatic" and "I don\'t like your tone" prioritise social decorum over moral substance, embodying the writer\'s critique of a class that values politeness above justice. Mrs Hartley\'s insistence that she "acted entirely within the rules of the committee" is equally damning - it reveals how institutional structures can provide moral cover for individual cruelty. The Inspector\'s function is to strip away these defences. His distinction between accepting responsibility "in this room, tonight" versus acting on it "tomorrow" addresses the ephemerality of guilt, suggesting that knowledge without action is morally worthless.\n\nThe stage direction "(There is a long, uncomfortable silence.)" is dramatically powerful - silence, in a play built on dialogue and interrogation, becomes the sound of moral reckoning. The writer uses the well-made play structure to create a sense of inevitability: each revelation is worse than the last, and the audience watches the family\'s comfortable self-image collapse.\n\nContextually, the play engages with post-war social conscience and the creation of the welfare state, arguing that collective responsibility is not optional but essential to a functioning society.',
              'Grade 8-9':
                "The writer presents social responsibility as the central moral question of a society stratified by class, using the dramatic form to create an inescapable confrontation between privilege and conscience. The extract is written as a moral climax, in which the Inspector's investigation shifts from uncovering facts to demanding transformation. Sheila's declaration - \"We're all connected. We're all responsible\" - operates as the extract's thesis statement, but its power derives from its dramatic context: spoken by the daughter against her parents, it stages social responsibility as requiring generational rupture, a willingness to break with the values that have sustained one's own comfort.\n\nThe writer constructs the parents' resistance through carefully differentiated rhetorical strategies. Mr Hartley's dismissals - \"no need to be dramatic,\" \"I don't like your tone\" - are exercises in what might be termed discursive power: he attempts to control the conversation by policing its emotional register, implicitly arguing that moral outrage is a breach of decorum rather than an appropriate response to injustice. Mrs Hartley's defence is institutional: \"I acted entirely within the rules of the committee\" invokes procedural legitimacy to foreclose moral inquiry, revealing how bureaucratic structures insulate individuals from the consequences of their collective decisions. The writer's insight here is sharp: evil does not always manifest as deliberate cruelty but can emerge from the rigid application of rules that were never designed to protect the vulnerable.\n\nThe Inspector's final intervention reframes responsibility as a question about temporality and consistency: \"what you'll do tomorrow, when the morning comes.\" This anticipates the play's structural device of cyclical repetition, suggesting that genuine social responsibility requires not a single moment of recognition but sustained, daily commitment. The reference to \"Eva Mason's face\" insists on the individual against the statistical, rejecting the abstraction that allows the privileged to discuss poverty without confronting its human reality.\n\nContextually, the play operates at the intersection of several historical moments: set in the Edwardian era of rigid class hierarchy, it speaks to a post-1945 audience that had experienced the collective sacrifice of war and the promise of the welfare state. The writer's argument is that the solidarity demanded by wartime - the recognition that society is \"all connected\" - must not be abandoned in peacetime. The Inspector functions as an almost supernatural agent of conscience, and his uncertain ontological status (is he a real policeman? a ghost? a collective hallucination?) makes the play's moral framework transcend realism: social responsibility is presented not as a political position but as a cosmic law, violation of which carries consequences that cannot be evaded.",
            },
            markScheme: [
              'AO1: Perceptive, detailed analytical response with well-chosen, integrated references',
              "AO2: Analysis of the writer's methods - dramatic structure, characterisation through dialogue, stage directions, dramatic irony, the Inspector as dramatic device",
              'AO3: Understanding of context - Edwardian class system, post-war social reform, the welfare state, collective vs individual responsibility',
              'AO4: Range and accuracy of spelling, punctuation, and grammar; use of specialist terminology',
              'Top band (33-40): Assured, personal response; perceptive understanding; well-chosen references; detailed exploration of methods; context convincingly integrated',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1B - Macbeth (Guilt) + Lord of the Flies style
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lit-p1-b',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and Post-1914 Literature',
    subtitle: 'English Literature 1ET0/01',
    code: '1ET0/01',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'edexcel-lit-p1-b-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer BOTH parts of the question. You are advised to spend about 55 minutes on this section. Read the extract below, then answer part (a) and part (b).',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-lit-p1-b-q1a',
            questionNumber: 1,
            questionText:
              'Explore how Shakespeare presents guilt and its effects on Lady Macbeth in this extract.\n\nGive examples from the extract to support your ideas.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_B,
            extractSource: MACBETH_EXTRACT_B_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents Lady Macbeth as a woman whose guilt has broken through in her sleep. She is sleepwalking, and the Gentlewoman says that rubbing her hands is "an accustomed action with her", which shows that she does it often. She is trying to wash away blood that is not there.\n\nHer words "Out, damned spot! out, I say!" show that she can still see Duncan\'s blood on her hands. The word "damned" suggests that she fears she will go to hell for what she has done. Earlier in the play she was calm about the blood, so this shows how much she has changed.\n\nShe remembers the murders in pieces. "Yet who would have thought the old man to have had so much blood in him?" shows that she cannot forget Duncan\'s murder, and "The Thane of Fife had a wife. Where is she now?" shows that she knows about the killing of Lady Macduff too. Her question "will these hands ne\'er be clean?" shows that she feels her guilt will never go away.\n\nShe says that "all the perfumes of Arabia will not sweeten this little hand." This means that nothing, not even the finest perfumes, can remove the smell of blood, so nothing can remove her guilt. The Doctor says "The heart is sorely charged", which means that her heart is heavy with what she has done.\n\nThe Doctor and the Gentlewoman are watching her, and the Gentlewoman says "She has spoke what she should not". This creates tension, because Lady Macbeth is giving away the secrets of the murders without knowing it.\n\nNear the end she says "What\'s done cannot be undone." This shows that she knows the murders can never be reversed. The audience may feel some sympathy for her, because the strong woman of the earlier acts has been broken by guilt.',
              'Grade 6-7':
                'Shakespeare presents Lady Macbeth\'s guilt as a force that has escaped her control, surfacing in sleep when the will that once held it down can no longer act. The scene is staged through witnesses. The Doctor and the Gentlewoman watch and comment, and the Doctor\'s "I will set down what comes from her" turns her confession into evidence, so the audience sees both the pitiful sight and its cause.\n\nHer first words, "Yet here\'s a spot", are followed by "Out, damned spot! out, I say!" The imperatives are useless, since there is no spot to obey them, and "damned" carries both its everyday force and its literal meaning: even asleep, she knows her soul is in danger. The Gentlewoman\'s remark that washing her hands is "an accustomed action with her" shows that this is a repeated compulsion, not a single breakdown.\n\nLady Macbeth now speaks in prose, which matters because she spoke in controlled verse earlier in the play. Her broken syntax moves between memories without warning: the night of the murder ("One; two. Why, then \'tis time to do\'t"), her scorn for Macbeth\'s fear ("a soldier, and afeard?"), Duncan\'s blood, Lady Macduff ("The Thane of Fife had a wife. Where is she now?") and Banquo ("Banquo\'s buried; he cannot come out on\'s grave"). Past and present have collapsed together, which suggests that guilt has no sense of time: every crime is happening now. Her boast that "none can call our power to account" becomes dramatic irony, because the Doctor is writing down her words as she speaks them.\n\nThe image of her hands dominates. "Will these hands ne\'er be clean?" and "all the perfumes of Arabia will not sweeten this little hand" reverse her confidence after Duncan\'s murder, when she claimed that a little water would clear them of the deed. The word "little" is poignant: the hand that helped to kill a king now seems small and helpless, and smell is added to sight, as if the blood has soaked into her. The Doctor\'s "The heart is sorely charged" and the Gentlewoman\'s refusal to have "such a heart in my bosom for the dignity of the whole body" show that not even a queen\'s rank could make such guilt worth bearing.\n\nAlmost her last words are "What\'s done cannot be undone". In Act 3 she told Macbeth that what is done is done, meaning that the deed was over and could be forgotten; now she knows it can never be taken back. A Jacobean audience would have seen conscience at work here, the belief that sin marks the soul and cannot be washed away by any outward act.',
              'Grade 8-9':
                'Shakespeare presents guilt in this extract as a force that works beneath conscious control, dramatising the collapse of the will that defined Lady Macbeth in the first half of the play. The form of the scene is part of its meaning. Lady Macbeth, who once commanded in verse, now speaks in broken prose, and her confession is framed by two observers. The Doctor\'s "I will set down what comes from her, to satisfy my remembrance the more strongly" turns her words into a written record, and the Gentlewoman\'s "She has spoke what she should not, I am sure of that: heaven knows what she has known" places her secret between earthly witnesses and divine knowledge. The audience watches people watching a woman reveal what she does not know she is revealing, and her most private guilt becomes public evidence.\n\nThe hand-washing is the extract\'s central symbol. The Gentlewoman\'s "an accustomed action with her" and "a quarter of an hour" establish repetition and duration: this is compulsion, the mind re-enacting what it cannot absorb. "Yet here\'s a spot" begins with "Yet", as though the scene continues an argument she has been having with herself for weeks. "Out, damned spot! out, I say!" is an exorcism that fails, since the spot exists only in her mind, and the theological weight of "damned" matters. For a Jacobean audience conscience was the voice of God within, and no outward act could wash away a sin that marked the soul.\n\nThe structural irony is severe. After Duncan\'s murder she dismissed the blood as something a little water would clear; now "will these hands ne\'er be clean?" and "all the perfumes of Arabia will not sweeten this little hand" admit that nothing can. The shift from sight to smell suggests that the guilt has entered her senses, and "little" changes register: the hand that took part in a king\'s murder is suddenly small and powerless against what it has done. The triple "Oh, oh, oh!" is barely language at all, and the Doctor\'s "The heart is sorely charged" names a weight that words cannot carry.\n\nThe syntax of her speeches breaks time apart. Within a few lines she moves from the murder night ("One; two. Why, then \'tis time to do\'t"), to her contempt for Macbeth\'s fear ("Fie, my lord, fie! a soldier, and afeard?"), to Duncan\'s blood, to Lady Macduff, whom she did not kill: "The Thane of Fife had a wife. Where is she now?" The jingling rhyme of that line, almost a nursery rhyme, is horrifying in its innocence, and it shows that she carries the guilt of her husband\'s crimes as well as her own. Guilt has become total, and every crime happens at once. She even rehearses an old defence, "What need we fear who knows it, when none can call our power to account?", which the scene itself answers, because the Doctor is at that moment writing it down.\n\nHer final speeches replay the aftermath of Duncan\'s murder in fragments: "Wash your hands, put on your nightgown; look not so pale", "There\'s knocking at the gate", "give me your hand". She is still managing Macbeth and still issuing orders, but to someone who is not there. The insistence that "Banquo\'s buried; he cannot come out on\'s grave" reveals a fear that the dead will not stay buried, the fear that the banquet scene made real. Between "give me your hand" and the "To bed, to bed, to bed" on which she leaves comes "What\'s done cannot be undone", and it is her epitaph. It reverses her own words in Act 3, when she told Macbeth that what is done is done: then she meant that the deed could be put aside, and now she knows it can never be undone.\n\nThe witnesses\' responses widen the scene\'s meaning. The Gentlewoman would not have "such a heart in my bosom for the dignity of the whole body", preferring her humble place to a queen\'s guilt, and the Doctor\'s "This disease is beyond my practice" suggests that the sickness is spiritual, not physical. Shakespeare shows that guilt is not a single feeling attached to one act but a condition that takes over the whole mind.',
            },
            markScheme: [
              'AO1: Perceptive, detailed response with fully integrated textual references',
              "AO2: Detailed analysis of Shakespeare's methods - dramatic irony, structural parallels, symbolism, fragmented syntax, the shift from verse to prose, the sleepwalking convention",
              'Top band (17-20): Assured, exploratory response; well-chosen references; detailed analysis of language, form, and structure',
            ],
          },
          {
            id: 'edexcel-lit-p1-b-q1b',
            questionNumber: 2,
            questionText:
              'In this extract, Lady Macbeth says "What\'s done cannot be undone."\n\nExplain how Shakespeare presents the consequences of violence in the play as a whole.\n\nYou must refer to the context of the play in your answer.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                "Shakespeare presents the consequences of violence as being very destructive for everyone involved. After killing Duncan, Macbeth becomes increasingly paranoid and violent, ordering the murders of Banquo and Macduff's family. Each violent act leads to more violence, creating a chain reaction that eventually destroys Macbeth himself.\n\nLady Macbeth also suffers consequences. Although she helped plan Duncan's murder, she is eventually overwhelmed by guilt and goes mad, and at the end Malcolm reports that she is thought to have taken her own life. This shows that violence has psychological consequences that cannot be escaped.\n\nThe whole of Scotland suffers because of the violence. Macduff says the country is suffering under Macbeth's rule, and people are afraid and unhappy. Nature is also affected - there are storms and strange events after Duncan's murder, which shows the violence has disrupted the natural order.\n\nIn Shakespeare's time, people believed in the Divine Right of Kings, which meant killing a king was a sin against God. The terrible consequences that follow Duncan's murder would have been seen as God's punishment. The play ends with Malcolm becoming king, which restores order, but the damage caused by violence cannot be completely undone.",
              'Grade 6-7':
                "Shakespeare presents the consequences of violence as operating across three interconnected domains: the psychological, the political, and the cosmic. This tripartite structure reflects the Jacobean worldview in which individual actions rippled outward through the social order to disturb the natural world itself.\n\nPsychologically, violence transforms both Macbeths. Macbeth's trajectory moves from agonised moral deliberation before Duncan's murder - \"If it were done when 'tis done, then 'twere well / It were done quickly\" - to the casual brutality of ordering Macduff's family killed, a progression that charts the desensitising effect of violence. Lady Macbeth's arc is the inverse: from cold pragmatism to psychological collapse. The structural irony of her sleepwalking scene - the woman who dismissed guilt with \"a little water\" now compulsively washes invisible blood - suggests that the psyche records what the conscious mind refuses to acknowledge.\n\nPolitically, Duncan's murder generates a cascade of further violence. Macbeth must kill Banquo to secure his throne, then Macduff's family in retribution. Shakespeare shows how political violence is self-perpetuating: each murder creates new enemies and new threats, requiring further murders. Ross's description of Scotland, where \"sighs, and groans, and shrieks, that rent the air, / Are made, not mark'd\", presents a nation so used to suffering that its cries go unnoticed.\n\nCosmically, the unnatural events that Ross and the Old Man report - darkness in the daytime, a falcon killed by a mousing owl, Duncan's horses eating each other - invoke the Great Chain of Being, the Jacobean belief that regicide would rupture the entire natural order. These pathetic fallacies are not merely atmospheric but theological: they dramatise the belief that violence against an anointed king is violence against God's order.\n\nThe play's resolution is deliberately ambiguous: Malcolm's accession restores legitimate rule, but the ease with which Scotland was plunged into chaos raises unsettling questions about the fragility of political order.",
              'Grade 8-9':
                "Shakespeare presents the consequences of violence in Macbeth as totalising and irreversible, constructing a dramatic world in which a single act of political murder metastasises into psychological disintegration, social collapse, and cosmic disorder. The play's structural logic is one of proliferation: violence generates not resolution but further violence, each killing necessitating the next in a chain that Lady Macbeth's despairing observation - \"What's done cannot be undone\" - identifies as fundamentally irreversible.\n\nThe psychological consequences are differentiated between the Macbeths with surgical precision. Macbeth's response to violence is progressive anaesthetisation: from the hyperactive moral imagination of Act I (\"his virtues / Will plead like angels, trumpet-tongued\") to the nihilistic exhaustion of Act V (\"I have supp'd full with horrors\"), Shakespeare traces the systematic destruction of moral sensibility through repeated exposure to violence. Critically, this is not liberation but emptiness - Macbeth does not become guiltless but incapable of guilt, which is presented as a more devastating consequence. Lady Macbeth's trajectory reverses this: the guilt she suppresses through conscious will resurfaces in sleep, suggesting that the psyche cannot permanently absorb violence without structural damage. Her compulsive handwashing anticipates what trauma theory would describe as repetition compulsion - the involuntary re-enactment of the originating event.\n\nPolitically, Shakespeare dramatises what might be called the paradox of tyrannical violence: each act of violence intended to secure power actually undermines it. Duncan's murder necessitates the framing of the grooms; Banquo's knowledge necessitates his assassination; the witches' prophecy about Banquo's line necessitates the murder of Fleance (which fails); Macduff's flight necessitates the slaughter of his family, which in turn galvanises the rebellion that destroys Macbeth. Shakespeare constructs a perfect demonstration of escalating, counter-productive violence - each murder intended to eliminate a threat instead multiplies threats exponentially.\n\nThe cosmic consequences engage directly with Jacobean political theology. The pathetic fallacy following Duncan's murder - the disruption of day and night, the unnatural behaviour of animals - invokes the Great Chain of Being, in which the king occupies a cosmically significant position linking human society to the divine order. Regicide is thus presented not as a political crime but as an act of metaphysical violence that ruptures the fabric of reality itself. The Porter's fancy that he is \"porter of hell gate\" is both comic and theologically precise: by murdering an anointed king, Macbeth has turned his own castle into a hell on earth.\n\nThe play's ending is often read as restorative, but Shakespeare's treatment of violence's consequences suggests a more ambiguous conclusion. Malcolm's accession promises the return of order, yet the very ease with which Duncan - described as a good king - was murdered raises an unresolvable question: if legitimate authority is so fragile, what prevents the cycle from beginning again? Lady Macbeth is right that \"what's done cannot be undone\" - not only because guilt is permanent, but because violence permanently damages the capacity for trust that political community requires.",
            },
            markScheme: [
              'AO1: Perceptive, developed response with well-chosen, integrated textual references across the whole play',
              "AO2: Analysis of Shakespeare's methods - structural irony, pathetic fallacy, soliloquy, dramatic pacing, cyclical structure",
              'AO3: Understanding of context - Divine Right of Kings, the Great Chain of Being, Jacobean political theology, regicide and its consequences',
              'Top band (17-20): Assured, exploratory, conceptualised response; judicious references; detailed analysis of methods; context effectively integrated into argument',
            ],
          },
        ],
      },
      {
        id: 'edexcel-lit-p1-b-sec-b',
        title: 'Section B: Post-1914 British Play/Novel',
        description:
          'Answer the question on your studied text. You are advised to spend about 50 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-lit-p1-b-q2',
            questionNumber: 3,
            questionText:
              'Read the following extract and then answer the question.\n\nHow does the writer present the conflict between civilisation and savagery in this extract and in the text as a whole?\n\nYou must refer to the context of the text in your answer.\n\n[40 marks - includes 8 marks for the range and accuracy of spelling, punctuation and grammar]',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: GOLDING_STYLE_EXTRACT,
            extractSource: GOLDING_STYLE_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'In this extract, the writer presents the conflict between civilisation and savagery through Ralph and the conch. The conch represents rules and order - "it had seemed so important once" - but now it is cracking and no one listens to it anymore. This shows that civilisation is breaking down on the island.\n\nRalph represents civilisation because he cares about the signal fire and being rescued, while Jack\'s hunters represent savagery because they prefer hunting and painting their faces. In this extract, the hunters are "laughing" and "dancing on the beach" while the fire has gone out, showing that having fun and being wild is easier than maintaining order.\n\nThe ending of the extract is dark - "the darkness came quickly... and with it came the fear." This suggests that without civilisation, people become afraid, and that the night represents the savagery taking over.\n\nThe writer was influenced by World War II and the terrible things that happened, which made him believe that all humans have the potential for evil. The island is like a small version of the whole world, showing that without rules and society, people will become savage.',
              'Grade 6-7':
                'The writer presents civilisation and savagery as asymmetric forces: civilisation requires constant, exhausting effort, while savagery is gravitational, exerting a pull that strengthens with every concession. The extract dramatises this through Ralph\'s isolation on the platform - the democratic space established at the novel\'s opening - which has become a place of solitude rather than community. The conch, the novel\'s central symbol of democratic order, is described in this extract with precise physical deterioration: "the paint was wearing off, revealing the pale bone beneath, and a hairline crack ran from the lip almost to the tip." This symbolism connects the shell\'s decay to the decay of the social order it represents; the crack is ominously near-total, foreshadowing the conch\'s eventual destruction.\n\nRalph\'s despairing question - "what could two boys do against the pull of savagery when it felt so much easier to let go than to hold on?" - articulates the extract\'s central idea. The metaphor of "pull" constructs savagery as a natural force, like gravity, while civilisation is figured as the strenuous act of resistance. The verb "let go" is particularly effective: it positions savagery not as an active choice but as the passive consequence of abandoning effort, suggesting that civilisation is inherently fragile because it demands what human nature finds difficult to sustain.\n\nThe hunters are characterised through dehumanising detail: their "painted faces cracking into grins that had nothing of civilisation in them" suggests that the face-paint - initially a hunting tool - has become a mask that enables moral transgression by obscuring individual identity. The verb "cracking" connects their grins to the cracking conch, suggesting that both civilised objects and civilised selves are breaking apart.\n\nContextually, the novel was published in 1954, and the writer\'s experience of World War II - particularly his service in the Royal Navy - profoundly shaped his belief that civilisation is a thin veneer. The island functions as a controlled experiment, stripping away social structures to reveal the human capacity for violence that the war had demonstrated on a global scale.',
              'Grade 8-9':
                'The writer presents civilisation and savagery not as binary opposites but as asymmetric conditions of human existence, constructing the former as a fragile, energy-intensive achievement and the latter as a default state to which individuals and societies inevitably gravitate when the structures of order are removed. The extract dramatises this asymmetry explicitly, staging Ralph\'s recognition that civilisation is losing not because savagery is stronger but because it requires nothing - no effort, no discipline, no self-denial - while civilisation demands everything.\n\nThe conch\'s physical deterioration in the extract works as a symbol of the decay of the order it stands for. The description is forensically precise: "the paint was wearing off, revealing the pale bone beneath, and a hairline crack ran from the lip almost to the tip." The exposure of "pale bone" beneath the surface beauty is a microcosm of the novel\'s argument: civilisation is a surface, aesthetically appealing but structurally vulnerable, overlaying something raw and organic. The "hairline crack" is a masterclass in symbolic precision - nearly invisible yet nearly total, suggesting that catastrophic failure can be preceded by imperceptible degradation.\n\nRalph\'s solitary position on the platform inverts the novel\'s opening assembly scene, where the conch\'s call gathered the boys into a democratic community. The space has not changed but its meaning has: the platform is now a place not of collective decision-making but of individual despair. This structural irony - same location, opposite significance - is characteristic of the writer\'s method throughout the novel, in which every symbol of civilisation (the fire, the shelters, the conch, the platform) undergoes progressive degradation.\n\nThe characterisation of the hunters through their "painted faces cracking into grins that had nothing of civilisation in them" is psychologically precise. The face-paint functions as the "mask" of the novel\'s fourth chapter, which liberates the wearer from the inhibitions of social identity. The verb "cracking" is deliberately ambiguous: the paint cracks into grins, but the word also suggests the cracking apart of the civilised self beneath.\n\nRalph\'s question - "what could two boys do against the pull of savagery when it felt so much easier to let go than to hold on?" - is the extract\'s philosophical centre. The metaphor of "pull" constructs savagery as entropic, a force of dissolution that requires no energy. Civilisation, by contrast, is negentropic - it fights against disorder and therefore requires continuous, willed effort. The writer\'s pessimism is not that humans are inherently evil but that goodness is inherently exhausting, and that in any contest between effort and ease, ease will eventually prevail.\n\nContextually, the novel must be read against the backdrop of the Second World War and its aftermath, particularly the Holocaust, which demonstrated that civilised, educated societies could perpetrate industrialised genocide. Golding served in the Royal Navy and took part in the D-Day landings, and in his essay "Fable" he wrote that anyone who lived through those years without understanding that "man produces evil as a bee produces honey" must have been blind. The island functions as an allegorical laboratory for testing Enlightenment optimism about human nature - and finding it wanting. Yet the novel\'s ending, in which a naval officer rescues the boys while failing to recognise that his own warship represents the same violence on a larger scale, refuses any comfortable resolution: civilisation does not defeat savagery but merely relocates it, hiding it behind uniforms and institutional authority.',
            },
            markScheme: [
              'AO1: Perceptive, detailed analytical response with well-chosen, integrated references',
              "AO2: Analysis of the writer's methods - symbolism, pathetic fallacy, structural irony, the island as allegory, characterisation through contrast",
              "AO3: Understanding of context - WWII, post-war disillusionment, Enlightenment optimism, the writer's naval service, Cold War anxieties",
              'AO4: Range and accuracy of spelling, punctuation, and grammar; use of specialist terminology',
              'Top band (33-40): Assured, exploratory response; perceptive understanding; judicious references; detailed analysis of methods; context convincingly integrated',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1C - Macbeth (Supernatural) + Post-1914 Prose (class/power)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lit-p1-c',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Shakespeare and Post-1914 Literature',
    subtitle: 'English Literature 1ET0/01',
    code: '1ET0/01',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'edexcel-lit-p1-c-sec-a',
        title: 'Section A: Shakespeare - Macbeth',
        description:
          'Answer BOTH parts of the question. You are advised to spend about 55 minutes on this section. Read the extract below, then answer part (a) and part (b).',
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-lit-p1-c-q1a',
            questionNumber: 1,
            questionText:
              'Explore how Shakespeare creates a sense of the supernatural and its power in this extract.\n\nGive examples from the extract to support your ideas.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analysis',
            extract: MACBETH_EXTRACT_C,
            extractSource: MACBETH_EXTRACT_C_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare creates a sense of the supernatural from the first lines. The Second Witch says "By the pricking of my thumbs, / Something wicked this way comes." The witches can sense Macbeth coming before he arrives, which shows that they have powers ordinary people do not have. Calling Macbeth "Something wicked" is ironic, because it suggests that even the witches now see him as evil.\n\nMacbeth calls them "secret, black, and midnight hags". These words link the witches with darkness and hidden knowledge. When he asks what they are doing, they answer "A deed without a name", which is mysterious and frightening because it suggests that their magic is too evil to be described.\n\nMacbeth\'s long speech shows how much power he believes the witches have. He lists the terrible things they could do, such as untying "the winds" to fight "Against the churches" and making "castles topple". He does not care if all this happens, as long as they "answer me". This shows that the supernatural could destroy the whole world, and that Macbeth is so desperate to know his future that he does not care.\n\nThe witches\' spell uses disgusting ingredients, such as "sow\'s blood" and grease from "the murderer\'s gibbet". They speak in short rhyming lines, such as "Come, high or low; / Thyself and office deftly show!", which sound like a chant and make them seem different from the human characters.\n\nThe stage direction "Thunder" and the Apparition of an armed Head make the scene dramatic and frightening. The Apparition warns "Beware Macduff", and when Macbeth tries to ask it more, the First Witch says "He will not be commanded." This shows that even though Macbeth is king, he has no power over the supernatural.',
              'Grade 6-7':
                'Shakespeare presents the supernatural in this extract as a power that Macbeth seeks out and tries to command, but cannot control. The extract opens with the Second Witch\'s couplet, "By the pricking of my thumbs, / Something wicked this way comes." The witches sense Macbeth before he appears, and the trochaic rhythm, falling from a stressed to an unstressed syllable, sets their speech apart from the iambic verse of the human characters. The irony is sharp: the "Something wicked" approaching is the King of Scotland, and even the witches now see him as evil.\n\nMacbeth\'s greeting, "How now, you secret, black, and midnight hags!", piles up adjectives of concealment and darkness, and his question "What is\'t you do?" receives the answer "A deed without a name." The witches refuse to name their act, which suggests that it lies beyond ordinary language, and therefore beyond ordinary moral judgement.\n\nMacbeth\'s speech beginning "I conjure you, by that which you profess" is the longest in the extract and shows the scale of the power he believes they have. It is built on the repetition of "Though" and "though", and each clause imagines a greater destruction: winds that "fight / Against the churches", "yesty waves" that "swallow navigation up", "castles" that "topple on their warders\' heads", until "destruction sicken". The build-up suggests that the witches can overturn nature, the Church and the state, and Macbeth accepts all of it so long as they "answer me / To what I ask you." His ambition is now willing to sacrifice the whole created world. The verb "conjure" is ironic, because it is the language of spells: in trying to command the witches, Macbeth takes part in their magic.\n\nThe witches\' brief replies, "Speak." "Demand." "We\'ll answer.", sound obliging but keep control, and their question, whether he would rather hear it "from our mouths, / Or from our masters", reveals greater powers behind them. Their ingredients, "sow\'s blood, that hath eaten / Her nine farrow" and grease from "the murderer\'s gibbet", draw on the unnatural (a sow that eats her young) and on the executed criminal, fitting ingredients for a charm raised for a murderer.\n\nThe Apparition is the supernatural made visible, and the stage direction "Thunder" signals its arrival. It speaks with the authority of prophecy, "Beware Macduff; / Beware the Thane of Fife", confirming what Macbeth already fears: "Thou hast harp\'d my fear aright." When he tries to question it further, the First Witch\'s "He will not be commanded" shows the limit of his power. Macbeth is a king who is used to giving orders, but here he can only ask.\n\nFor a Jacobean audience, witchcraft was a real threat. James I had written Daemonologie (1597), and the power of the witches here would have seemed genuinely dangerous.',
              'Grade 8-9':
                'Shakespeare constructs the supernatural in this extract as a power that answers only on its own terms. Macbeth comes to the witches as a king determined to command them, and the drama of the extract lies in the gap between his claims of authority and his actual helplessness.\n\nThe Second Witch\'s couplet "By the pricking of my thumbs, / Something wicked this way comes" establishes the witches\' knowledge before Macbeth arrives. Their trochaic tetrameter, a falling rhythm in rhymed couplets, marks their speech as incantation, different in sound from the blank verse of human speech. The couplet also contains the extract\'s central irony: the "Something wicked" is Macbeth. The witches now recognise him as one of their own kind, and "Open, locks, / Whoever knocks!" welcomes him as if their door opens by itself.\n\nMacbeth\'s greeting, "How now, you secret, black, and midnight hags!", is contemptuous in tone but reveals why he has come: "secret" is exactly what he wants, knowledge hidden from others. The witches\' reply, "A deed without a name", resists him at once. By refusing to name their act they place it outside language, and so outside human understanding and judgement.\n\nThe speech that follows is the extract\'s rhetorical centre. "I conjure you, by that which you profess" uses the vocabulary of ritual magic, since to conjure is to call on spirits by a solemn oath: in trying to command the witches, Macbeth adopts their practices. The speech is one long sentence. Its command, "answer me", comes in the second line, and then a pile of conditions ("Though you untie the winds", "though the yesty waves / Confound and swallow navigation up", "Though castles topple on their warders\' heads") holds back its repetition until the destruction has reached its limit: "Even till destruction sicken, answer me". The order of the images matters. The churches are assailed first, then ships, then crops, then castles, palaces and pyramids, and finally "the treasure / Of nature\'s germens", the seeds from which all life grows. Macbeth imagines creation undone and accepts it, provided that his question is answered. It is one of the most extreme statements of his ambition in the play: his need to know his future outweighs the survival of the world.\n\nThe witches\' answers deflate this rhetoric. "Speak." "Demand." "We\'ll answer." are single words, polite in form and completely in control. Their question, whether he would rather hear it "from our mouths, / Or from our masters", introduces higher powers, and Macbeth\'s hasty "Call \'em, let me see \'em" shows how eagerly he submits. The charm returns to the witches\' own metre and to images of perverted nature: the sow that "hath eaten / Her nine farrow" and grease from "the murderer\'s gibbet". A mother who devours her young and the remains of an executed murderer are fitting ingredients for a spell raised for a king who murders.\n\nThe Apparition makes the supernatural visible, arriving with "Thunder". Its triple "Macbeth! Macbeth! Macbeth!" recalls the witches\' three greetings in Act 1, and its warning, "Beware Macduff; / Beware the Thane of Fife", is simple and true. Macbeth\'s reply, "Thou hast harp\'d my fear aright", shows how the supernatural works on him: it does not create his fears but confirms and sharpens them. His attempt to continue, "But one word more", is met only by "He will not be commanded." The line defines the power relation of the whole scene. Macbeth, who commands Scotland, cannot command a spirit, and the First Witch\'s "Here\'s another, / More potent than the first" promises that the power on display will only grow.\n\nThe context sharpens the scene. James I\'s Daemonologie (1597) treated witchcraft as a real alliance with the devil, and Shakespeare\'s audience would have seen a king who seeks out witches as a king who has given himself to evil.',
            },
            markScheme: [
              'AO1: Perceptive, detailed response with well-chosen, integrated textual references',
              "AO2: Detailed analysis of Shakespeare's methods - verse form, stage directions, dramatic irony, the spectacle of ritual, linguistic register",
              'Top band (17-20): Assured, personal response showing perceptive understanding; well-chosen references; detailed exploration of effects of language, form, and structure',
            ],
          },
          {
            id: 'edexcel-lit-p1-c-q1b',
            questionNumber: 2,
            questionText:
              'In this extract, Macbeth demands to know his fate.\n\nExplain how Shakespeare presents ideas about fate and free will in the play as a whole.\n\nYou must refer to the context of the play in your answer.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Shakespeare presents fate and free will as an important debate throughout Macbeth. The witches\' prophecy seems to suggest that Macbeth\'s future is already decided - he "shalt be king hereafter." However, the question is whether Macbeth became king because it was fated to happen, or because he chose to murder Duncan after hearing the prophecy.\n\nSome characters seem to accept fate. Banquo hears the witches\' prophecy about his descendants but does not act on it, choosing to let fate take its course. Macbeth, on the other hand, decides to take control by murdering Duncan, which could be seen as exercising free will rather than waiting for fate.\n\nLady Macbeth also seems to believe in taking action rather than waiting. She says "What thou art promis\'d" as if the crown is already Macbeth\'s by right, and pushes him to seize it through murder.\n\nAt the end of the play, when Macbeth realises the witches have tricked him, he says "I will not yield" and chooses to fight Macduff even though he knows he will die. This could be seen as his final act of free will. Shakespeare might be suggesting that the witches\' prophecies were always going to come true, but that Macbeth chose the worst possible path to make them happen.',
              'Grade 6-7':
                'Shakespeare constructs the relationship between fate and free will as the play\'s central philosophical tension, refusing to resolve it definitively and instead presenting both as simultaneously operative. The witches\' prophecies function as the play\'s mechanism of ambiguity: they predict what will happen (Macbeth will be king) without prescribing how, leaving the "how" as the space in which free will operates.\n\nMacbeth\'s response to the prophecy is critical. His aside - "If chance will have me king, why, chance may crown me / Without my stir" - shows him initially contemplating a passive acceptance of fate. The shift from this position to active murder represents the play\'s most significant exercise of free will. Yet Shakespeare complicates this reading: the witches agree to meet "Upon the heath", "There to meet with Macbeth", before he has done anything, which suggests that his choice may itself have been foreseen and therefore possibly fated.\n\nBanquo provides the moral counterpoint. Receiving an equally enticing prophecy - that his descendants will be kings - he chooses not to pursue it, warning Macbeth that "oftentimes to win us to our harm, / The instruments of darkness tell us truths". Banquo exercises free will in the opposite direction, using reason and moral judgement to resist temptation. This contrast suggests that the prophecy itself is morally neutral; it is the human response that determines moral outcome.\n\nThe equivocal prophecies of Act IV deepen the problem. The promises that "none of woman born / Shall harm Macbeth" and that he "shall never vanquish\'d be, until / Great Birnam wood to high Dunsinane hill / Shall come against him" appear to guarantee safety but actually conceal the means of destruction. They are true in every literal sense but designed to produce false confidence - which raises the question of whether Macbeth\'s interpretation is freely chosen or supernaturally manipulated.\n\nContextually, the play engages with theological debates about predestination that were central to Jacobean Protestantism. Calvinist doctrine held that salvation and damnation were predetermined, while other theologians insisted on the reality of free choice. Shakespeare dramatises this tension without resolving it, creating a play that is simultaneously a study of human agency and a demonstration of its limits.',
              'Grade 8-9':
                "Shakespeare presents fate and free will in Macbeth not as binary alternatives but as co-constitutive forces, constructing a dramatic world in which prophecy and choice are inextricable - a position that makes the play profoundly disturbing because it denies the comfort of either pure determinism or pure agency.\n\nThe witches' prophecies establish the play's philosophical framework through their precise logical structure. They predict outcomes - \"shalt be king hereafter\" - but not processes, creating what might be called a determined destination with an undetermined route. This structure is the source of the play's tragic irony: Macbeth could have become king without murder (as he briefly hopes when the Cawdor title comes to him unsought: \"chance may crown me / Without my stir\"), but the very existence of the prophecy transforms his psychological landscape, making passivity impossible. Shakespeare thus suggests that foreknowledge is itself a form of causation: to know the future is to act on it, and to act on it is to bring it about through means that might otherwise never have occurred.\n\nBanquo's contrasting response illuminates this mechanism. His warning that \"the instruments of darkness tell us truths; / Win us with honest trifles, to betray's / In deepest consequence\" demonstrates genuine moral intelligence - he recognises that truth can be weaponised. Yet Banquo too is affected by the prophecy: he tells Macbeth in Act II that he has been thinking about it (\"I dreamt last night of the three Weird Sisters\"), his soliloquy in Act III asks \"May they not be my oracles as well, / And set me up in hope?\", and his failure to act on his suspicions about Duncan's murder may itself be influenced by the hope that his descendants will benefit from Macbeth's crime. Shakespeare refuses to create a simple moral binary between Macbeth's guilt and Banquo's innocence, suggesting that prophecy corrupts even those who resist it.\n\nThe Act IV apparitions represent Shakespeare's most sophisticated engagement with the fate/free will problem. The prophecies are technically true - Macduff was indeed \"Untimely ripp'd\" from his mother's womb, and Birnam Wood does \"move\" through Malcolm's stratagem. But their equivocal phrasing is designed to produce the false conclusion that Macbeth is invulnerable. The question is whether the witches are prescient or manipulative - whether they foresee Macbeth's misinterpretation or engineer it. Shakespeare leaves this deliberately unresolved, because resolution would simplify the play's philosophical complexity: if the witches are merely reporting fate, Macbeth is a victim; if they are manipulating him, he is a dupe; but if both are true simultaneously, he is something far more troubling - a free agent operating within a determined system, responsible for choices he was always going to make.\n\nMacbeth's final decision to fight Macduff - \"I will not yield ... lay on, Macduff; / And damn'd be him that first cries, 'Hold, enough!'\" - represents the play's last word on the subject. Having discovered that fate has betrayed him, Macbeth chooses defiance. This is free will at its most pure and most futile: he cannot change the outcome, but he can choose the manner of meeting it. Whether this constitutes genuine agency or merely the final performance of a script already written is a question Shakespeare deliberately leaves to the audience.\n\nContextually, the play engages with the debate over predestination that divided English Protestants in Shakespeare's time. Calvinist predestination held that God had predetermined each soul's salvation or damnation before birth - a doctrine with unsettling implications for moral responsibility. Shakespeare dramatises these implications without endorsing either position, creating a play that functions as a thought experiment about the conditions under which moral agency is meaningful.",
            },
            markScheme: [
              'AO1: Perceptive, developed response with well-chosen, integrated textual references across the whole play',
              "AO2: Analysis of Shakespeare's methods - prophecy as dramatic device, equivocation, dramatic irony, structural parallels between characters",
              'AO3: Understanding of context - Calvinist predestination, Jacobean theology, the Great Chain of Being, the role of the supernatural in Jacobean thought',
              'Top band (17-20): Assured, exploratory, conceptualised response; judicious references; detailed analysis; context effectively integrated',
            ],
          },
        ],
      },
      {
        id: 'edexcel-lit-p1-c-sec-b',
        title: 'Section B: Post-1914 British Play/Novel',
        description:
          'Answer the question on your studied text. You are advised to spend about 50 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-lit-p1-c-q2',
            questionNumber: 3,
            questionText:
              'How does the writer you have studied present ideas about power and who holds it?\n\nYou must refer to the context of the text in your answer.\n\n[40 marks - includes 8 marks for the range and accuracy of spelling, punctuation and grammar]',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5':
                "The writer presents power as something that is usually held by certain groups of people in society - usually the rich, the upper class, or those in authority. Throughout the text, we see that power is not shared equally, and those without it are often exploited or ignored.\n\nThe powerful characters in the text use their status to control others. They make decisions that affect other people's lives without considering the impact. For example, when workers or ordinary people try to stand up for themselves, they are often dismissed or punished. This shows how power can be abused when it goes unchecked.\n\nThe writer also shows that power can shift. Characters who seem powerless at the beginning of the text may gain a different kind of power - through knowledge, through solidarity with others, or through moral authority. The writer seems to suggest that real power comes not from wealth or social position but from standing up for what is right.\n\nIn the context of when the text was written, there were important debates about class and equality. The writer uses the text to argue that the power structures in society need to change so that ordinary people are treated fairly.",
              'Grade 6-7':
                'The writer presents power as structurally embedded in social institutions rather than residing in individual characters, arguing that the most dangerous form of power is that which appears natural and inevitable. Throughout the text, power operates through established hierarchies - class, gender, institutional authority - that the powerful characters treat as self-evident truths rather than constructed systems.\n\nThe writer uses characterisation to dramatise different modes of power. Those in authority exercise power through a combination of economic control, social convention, and the command of language - they define what is "reasonable," what is "appropriate," and what counts as legitimate knowledge. Those without power are not merely excluded from decisions but from the very frameworks within which decisions are made.\n\nSignificantly, the writer distinguishes between different types of power: economic power (control of resources and employment), social power (the ability to determine what is respectable), and moral power (the authority that comes from being right). The text\'s central argument is that these different forms of power do not always align: characters who hold economic and social power may be morally bankrupt, while those who are economically powerless may possess a moral clarity that the powerful lack.\n\nThe writer also explores how power is maintained through silence and complicity. Characters who witness injustice but choose not to speak - often because speaking up would threaten their own comfortable position - are presented as complicit in the exercise of unjust power.\n\nContextually, the text engages with twentieth-century debates about democracy, equality, and the responsibilities of those in power. The writer draws on a tradition of political literature that insists art should not merely reflect society but challenge it, asking audiences to examine the power structures they accept and participate in.',
              'Grade 8-9':
                'The writer presents power as a complex, multi-dimensional phenomenon that operates simultaneously through material conditions, social ideology, and the control of narrative. The text\'s most radical insight is that power is not merely possessed and exercised by individuals but is embedded in systems - institutional, linguistic, psychological - that reproduce inequality even in the absence of deliberate malice.\n\nEconomic power forms the text\'s material base: control of employment, housing, and resources gives certain characters the capacity to shape others\' lives. But the writer is alert to the ways in which economic power is naturalised through ideology. Characters in positions of authority do not typically present their power as power; instead, they invoke tradition, merit, responsibility, or "the way things are" to make their dominance appear inevitable rather than contingent. This ideological function of power - the transformation of historical arrangements into apparent natural facts - is what makes it so resistant to challenge.\n\nThe writer is equally interested in the power of language. Those with social authority control the terms of debate: they determine what counts as "reasonable" discourse, what constitutes "acceptable" behaviour, and - crucially - whose testimony is credible and whose is dismissed. The powerless are not merely denied resources but denied the capacity to articulate their experience in terms that the powerful will recognise. This linguistic dimension of power means that resistance requires not just material struggle but the creation of alternative vocabularies.\n\nThe text constructs a crucial distinction between power over others and power with others. The former is the mode of the dominant characters: hierarchical, coercive, ultimately isolating. The latter emerges in moments of solidarity, collective recognition, and shared moral purpose. The writer suggests that this second form of power - which might be called democratic or communal - is both more legitimate and more durable, though the text is honest about its fragility in the face of institutional violence.\n\nContextually, the text participates in a twentieth-century literary tradition that insists on the political function of art. Written in the aftermath of experiences that exposed the brutality underlying civilised institutions - war, economic depression, imperial exploitation - the text refuses the consolation of individual solutions to structural problems. Power, the writer insists, is not a personal attribute but a social relation, and it can only be meaningfully challenged through collective rather than individual action. The text\'s form reinforces this argument: by staging the exposure of hidden power structures, the writer creates an experience that demands the audience\'s active moral engagement rather than passive consumption.',
            },
            markScheme: [
              'AO1: Perceptive, detailed analytical response with well-chosen, integrated references to the studied text',
              "AO2: Analysis of the writer's methods - characterisation, structure, setting, dialogue, narrative perspective as vehicles for exploring power",
              "AO3: Understanding of context - twentieth-century political history, class structures, post-war social change, the writer's political commitments",
              'AO4: Range and accuracy of spelling, punctuation, and grammar; use of specialist terminology',
              'Top band (33-40): Assured, exploratory, conceptualised response; perceptive understanding; judicious references; detailed analysis; context convincingly integrated',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2A - A Christmas Carol + Conflict (Exposure) + Unseen Poetry (Identity)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lit-p2-a',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: 19th-century Novel and Poetry since 1789',
    subtitle: 'English Literature 1ET0/02',
    code: '1ET0/02',
    totalTimeMinutes: 135,
    totalMarks: 80,
    sections: [
      {
        id: 'edexcel-lit-p2-a-sec-a',
        title: 'Section A: 19th-century Novel - A Christmas Carol',
        description:
          'Answer BOTH parts of the question. In the exam there is a question on each of the seven set novels, and you answer the one you have studied; this practice paper sets A Christmas Carol. Read the extract below, from Stave 2: the Ghost of Christmas Past shows Scrooge the evening when Belle, the young woman he was engaged to, released him from their engagement. Part (a) is about the extract and part (b) about the rest of the novel. The exam is closed book: the extract is printed, but you quote the rest of the novel from memory. You are advised to spend about 60 minutes on this section, 30 on each part.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-lit-p2-a-q1a',
            questionNumber: 1,
            questionText:
              "(a) Explore how Dickens presents Scrooge's love of money in this extract.\n\nRefer closely to the extract in your answer.\n\n[20 marks]",
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            extract: CAROL_EXTRACT,
            extractSource: CAROL_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Dickens presents Scrooge\'s love of money as something that has taken the place of love itself. Belle tells him that "Another idol has displaced me", and when he asks what it is, she answers "A golden one." An idol is something people worship, so Dickens suggests that Scrooge now worships money in the way he once loved her. Her answer is very short, which makes it sound blunt and final.\n\nScrooge does not deny it. Instead he defends himself, saying "There is nothing on which it is so hard as poverty". This shows that his love of money comes from a fear of being poor, and Belle says so directly: "You fear the world too much." The way Dickens describes Scrooge speaking, for example "he said impatiently", makes him sound defensive and irritated, while Belle speaks "softly" and "gently". The contrast makes the reader sympathise with her.\n\nBelle describes how Scrooge has changed over time: "I have seen your nobler aspirations fall off one by one, until the master-passion, Gain, engrosses you." The phrase "fall off one by one" suggests that his good qualities have dropped away slowly, like leaves from a tree. "Gain" has a capital letter, as if it were a person or a god in control of him.\n\nEven their engagement is described in the language of business: "Our contract is an old one." This suggests that money has affected every part of Scrooge\'s life, even love.\n\nAt the end of the extract Belle asks whether he would choose her now, and answers her own question: "Ah, no!" The exclamation shows her sadness and her certainty. Dickens presents Scrooge\'s love of money as the reason he loses the woman he was going to marry.',
              'Grade 6-7':
                'Dickens presents Scrooge\'s love of money as a kind of false religion that has gradually replaced human feeling. The extract is built almost entirely from dialogue, and the contrast between the two voices shows the damage that money has done.\n\nBelle\'s opening accusation uses religious language: "Another idol has displaced me". An idol is a false god, and her reply to his question, "A golden one", recalls the golden calf of the Bible. Dickens suggests that Scrooge\'s love of money is a kind of worship, and that it has "displaced" Belle, a verb that suggests something pushed out of its rightful place. The personification of "the master-passion, Gain" develops this: the capital letter turns Gain into a ruler, and "master" makes Scrooge its servant. The verb "engrosses" suggests that greed has absorbed him completely, leaving room for nothing else.\n\nScrooge\'s reply shows that his greed grows out of fear. He complains about "the even-handed dealing of the world", claiming that "There is nothing on which it is so hard as poverty". The balanced structure of his sentence, which sets poverty against "the pursuit of wealth", makes his argument sound reasonable, but Belle\'s diagnosis, "You fear the world too much", exposes it as anxiety. His love of money is defensive: he wants to be "beyond the chance of its sordid reproach".\n\nDickens also shows how money has entered the language of feeling. Belle calls their engagement a "contract", made when they hoped to "improve our worldly fortune by our patient industry". The vocabulary of business has replaced the vocabulary of love, and even her farewell sounds like a legal act: she "can release you", as one might release someone from a debt.\n\nThe structure of the dialogue reinforces the change in Scrooge. His lines are short, defensive questions: "What then?", "Am I?", "In what, then?" Belle\'s speeches are longer and calmer, and the way she speaks ("softly", "gently", "looking mildly, but with steadiness") contrasts with the way he does ("retorted", "impatiently"). Her list, "In a changed nature; in an altered spirit; in another atmosphere of life", uses repetition to show how complete the change has been. Her final question, answered by her own "Ah, no!", leaves Scrooge with no reply, and his silence suggests that she is right.\n\nOverall, Dickens presents Scrooge\'s love of money as something that has slowly turned a young man capable of love into one ruled by Gain, and the extract shows the moment it costs him most.',
              'Grade 8-9':
                'Dickens presents Scrooge\'s love of money not as simple greed but as a slow conversion, in which a young man\'s fear of poverty hardens into something close to worship. The scene is one of the Ghost of Christmas Past\'s lessons, and its power lies in the fact that Scrooge\'s love of money is described almost entirely by the person it has cost him.\n\nThe extract opens with an image that frames everything after it. Belle sits "in a mourning-dress", her tears sparkling "in the light that shone out of the Ghost of Christmas Past". The mourning-dress foreshadows the loss the scene records: she is already grieving for the man Scrooge was. The light of the past falls on her tears, not on Scrooge, as if memory itself is exposing what his greed has done.\n\nBelle\'s diagnosis is religious. "Another idol has displaced me" casts money as a false god, and the curt answer to Scrooge\'s question, "A golden one", turns his ambition into idolatry, with the golden calf behind it. Dickens develops the metaphor through personification: "the master-passion, Gain, engrosses you". Capitalised, Gain becomes a deity or a feudal lord, and "master" makes Scrooge its servant. "Engrosses" is precise: it means to absorb completely, but it was also a trader\'s word for buying up the whole of a stock, so even the verb for Scrooge\'s obsession belongs to the counting-house.\n\nWhat makes Dickens\'s presentation subtle is that Scrooge\'s love of money is rooted in fear. His defence, "There is nothing on which it is so hard as poverty; and there is nothing it professes to condemn with such severity as the pursuit of wealth", is built on a careful parallel, and its logic is not absurd: the world punishes the poor, then sneers at those who try to escape poverty. Belle does not dispute his argument; she reinterprets it. "You fear the world too much" reveals his ambition as anxiety, and "All your other hopes have merged into the hope of being beyond the chance of its sordid reproach" shows his many hopes narrowing into one. The image of his "nobler aspirations" falling "off one by one" suggests not a sudden fall but a gradual stripping away, like a tree in autumn.\n\nThe dialogue itself enacts the change. Belle speaks in long, balanced sentences, and Dickens frames her with words of calm ("softly", "gently", "looking mildly, but with steadiness"). Scrooge speaks in clipped questions ("What then?", "Am I?", "In what, then?") and is given the reporting verbs of a man under attack: he "rejoined", "retorted" and spoke "impatiently". His insistence that "I am not changed towards you" is undercut by his own phrasing, "Even if I have grown so much wiser", which shows that he thinks of his greed as wisdom.\n\nMost damning is the way money has colonised the language of love. Belle can only describe their engagement as a "contract", and its terms are financial: they would "improve our worldly fortune by our patient industry". Even her ending is a legal act, for she "can release you". The anaphora of her final charge, "In a changed nature; in an altered spirit; in another atmosphere of life; another Hope as its great end", piles up the evidence clause by clause, and the capitalised Hope, like Gain, shows that Scrooge\'s hopes now have a single object. The extract ends with a rhetorical question she answers herself: "Ah, no!" Scrooge\'s silence concedes the point.\n\nDickens therefore presents Scrooge\'s love of money as a tragedy of substitution: an idol has taken the place of a person, and a young man\'s fear of poverty has become the ruling passion of his life. Because the scene is shown to Scrooge by a Ghost, it also prepares for the possibility of change, since a man who was once "another man" might become another again.',
            },
            markScheme: [
              'AO2 (20 marks): analysis of how Dickens uses language, form and structure in the extract and their effect on the reader, with subject terminology used to support it - here the religious language of the idol, the personification of Gain, the vocabulary of business, and the contrast between the two speakers',
              'Part (a) is marked for AO2 alone: there are no marks for context, and the rest of the novel belongs in part (b)',
              'Top band (17-20): a cohesive evaluation of how language, form and structure work together in the extract, with precise, integrated terminology',
            ],
          },
          {
            id: 'edexcel-lit-p2-a-q1b',
            questionNumber: 1,
            questionText:
              '(b) In this extract, Belle tells Scrooge that he has changed. Explain the importance of change elsewhere in the novel.\n\nIn your answer you must consider:\n- how Scrooge is presented before the spirits visit him\n- how and why he changes.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Change is the most important idea in A Christmas Carol, because the whole story is about Scrooge changing from a mean, lonely man into a generous one.\n\nAt the start of the novel, Scrooge is presented as cold and selfish. Dickens describes him as "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner". The long list of harsh describing words shows how greedy he is. He refuses to give money to the charity collectors and says that if the poor would rather die than go to the workhouse, they had better do it and "decrease the surplus population". He even tells his nephew to "keep Christmas in your own way, and let me keep it in mine", which shows that he wants to be left alone.\n\nScrooge begins to change when Marley\'s ghost visits him. Marley warns him by saying "I wear the chain I forged in life", which shows that Scrooge will suffer after death if he does not change. The three spirits then show him his past, present and future. The Ghost of Christmas Past shows him "A solitary child, neglected by his friends", which makes Scrooge feel sorry for his younger self. The Ghost of Christmas Present shows him the Cratchits and Tiny Tim, and he starts to care about other people.\n\nThe biggest change comes when the Ghost of Christmas Yet to Come shows him his own grave. Scrooge cries out "I am not the man I was" and promises "I will honour Christmas in my heart, and try to keep it all the year."\n\nAt the end of the novel, Scrooge is completely different. He says he is "as light as a feather" and "as happy as an angel". He tells Bob Cratchit that he will raise his salary, and he becomes "as good a friend, as good a master, and as good a man, as the good old city knew". Dickens shows that anyone can change if they are willing to learn.',
              'Grade 6-7':
                'Change is the central idea of A Christmas Carol: the novel\'s structure, its ghosts and its ending all exist to show that a hardened man can be transformed. Belle\'s words in the extract matter because they show that Scrooge has already changed once, for the worse, which makes his later change for the better believable.\n\nBefore the spirits arrive, Dickens presents Scrooge as a man who seems beyond change. He is "Hard and sharp as flint" and "solitary as an oyster", images of something closed and impenetrable. His treatment of others is just as cold. He tells the charity collectors that the poor, if they would rather die, "had better do it, and decrease the surplus population", and he rejects his nephew\'s invitation to Christmas dinner. "Darkness is cheap, and Scrooge liked it" sums him up: even his love of the dark is a saving.\n\nMarley\'s ghost introduces the idea that change is still possible, but urgent. His chain, which he "forged in life", shows that people make their own fate, and his cry "Mankind was my business" tells Scrooge what his business should have been. The three spirits then make Scrooge change by making him feel. The Ghost of Christmas Past reminds him of "A solitary child, neglected by his friends", and of Fezziwig, whose kindness Scrooge defends: "The happiness he gives, is quite as great as if it cost a fortune." This is an important moment, because Scrooge is starting to value something other than money. The Ghost of Christmas Present turns Scrooge\'s own words against him, asking "Are there no prisons?" and "Are there no workhouses?", so that he feels the shame of what he said.\n\nThe change is completed by fear. Facing his own neglected grave, Scrooge pleads "I am not the man I was" and promises "I will honour Christmas in my heart, and try to keep it all the year." The past, present and future all work together: Scrooge changes because he understands how he became who he is, sees who is suffering now, and fears what he will become.\n\nIn Stave Five the change is shown in action, not just in words. Scrooge is "as light as a feather" and "as merry as a schoolboy", and he raises Bob\'s salary. The narrator tells us that he "became as good a friend, as good a master, and as good a man, as the good old city knew". The repetition of "good" emphasises how complete the change is.\n\nChange matters so much because it carries Dickens\'s message: if even Scrooge can change, then so can the readers who share his attitudes. Belle\'s "You are changed" in the extract is the first step in a story that ends with Scrooge changed again, this time into a man who would have deserved her.',
              'Grade 8-9':
                'Change is the governing principle of A Christmas Carol. Dickens builds the novel as a sequence of visitations whose only purpose is to change one man, and he ends it with that change acted out. But Belle\'s words in the extract complicate the idea: Scrooge\'s story is not of a man changing once, but of a man who has already been changed for the worse, by fear and money, and who must now be changed back.\n\nDickens first presents Scrooge as a figure apparently immune to change. The narrator\'s opening portrait piles up participles, "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner", and then fixes him in images of hardness and enclosure: "Hard and sharp as flint", "secret, and self-contained, and solitary as an oyster". Even the weather cannot alter him: "No warmth could warm, no wintry weather chill him." This is a man defined by his resistance to influence, and his view of society matches his temperament. When he says the poor "had better do it, and decrease the surplus population", or tells the gentlemen that it is "enough for a man to understand his own business, and not to interfere with other people\'s", he denies that he is connected to anyone else at all.\n\nThe supernatural machinery of the novel exists to break that isolation, and Dickens makes change a matter of memory, sympathy and fear in turn. Marley\'s ghost redefines Scrooge\'s life in moral terms: "I wear the chain I forged in life", and "Mankind was my business". The Ghost of Christmas Past works on memory. Scrooge sobs for "A solitary child, neglected by his friends", the boy he was, and later defends Fezziwig with an argument that would once have been unthinkable to him: "The happiness he gives, is quite as great as if it cost a fortune." For the first time, value is measured in something other than money. Belle\'s scene, in this sequence, shows the turning point in reverse: the moment the young man chose Gain over love.\n\nThe Ghost of Christmas Present works on sympathy, and does so by turning Scrooge\'s language against him. "Are there no prisons?" and "Are there no workhouses?", spoken over the children Ignorance and Want, force him to hear his own words as the reader heard them. Change, Dickens suggests, begins with recognising yourself. The Ghost of Christmas Yet to Come completes the process with fear: before his own grave Scrooge insists "I am not the man I was" and vows "I will honour Christmas in my heart, and try to keep it all the year."\n\nThe final stave is crucial because Dickens refuses to let change remain a feeling. Scrooge\'s joy is comic and childlike, "as light as a feather", "as merry as a schoolboy", but it is also practical: he promises Bob a higher salary and to "assist your struggling family", and the narrator\'s measured summary insists on how far the change went: "He became as good a friend, as good a master, and as good a man, as the good old city knew". The list moves from private relationships to public role to moral character, and "good" is repeated until it becomes the measure of his whole life, replacing the Gain that Belle named.\n\nThe novel\'s treatment of change is therefore deliberately hopeful. Belle\'s "You are changed" and Scrooge\'s "I am not the man I was" are mirror images: the first records a decline, the second a recovery. By placing both in the same story, Dickens argues that character is not fixed, that a person shaped by fear can be reshaped by memory and fellow feeling, and that it is not too late, as long as the change is lived and not merely felt.',
            },
            markScheme: [
              'AO1 (20 marks): an informed personal response in a critical style, supported by references to the novel as a whole, including quotations from memory',
              'Part (b) is about the rest of the novel: an answer that stays in the printed extract misses its focus. Section A has no marks for context or for spelling, punctuation and grammar',
              'Top band (17-20): an assured, engaged response with a mature critical style, in which well-chosen references are an integral part of the argument',
            ],
          },
        ],
      },
      {
        id: 'edexcel-lit-p2-a-sec-b1',
        title: 'Section B, Part 1: Poetry Anthology - Conflict',
        description:
          'Answer ONE question. In the exam there is a question on each of the four anthology collections, and you answer the one you have studied; this practice paper sets the Conflict question. The named poem is printed below. You choose the second poem yourself, from the same collection, and quote it from memory. You are advised to spend about 35 minutes on this question.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'edexcel-lit-p2-a-q2',
            questionNumber: 2,
            questionText:
              'Re-read "Exposure" by Wilfred Owen, printed above. Choose one other poem from the Conflict collection.\n\nCompare how the poets present soldiers\' experience of war in the two poems.\n\nIn your answer, you should consider the:\n- language, form and structure used by the poets\n- influence of the contexts in which the poems were written.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            extract: EXPOSURE,
            extractSource: EXPOSURE_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I have chosen The Charge of the Light Brigade by Alfred, Lord Tennyson. Both poems are about soldiers in war, but they present their experience very differently. In Exposure, Owen shows soldiers suffering slowly from the cold while nothing happens, but in Tennyson\'s poem the soldiers ride bravely into a deadly battle.\n\nOwen presents the weather as the real enemy. He uses personification when he describes "the merciless iced east winds that knive us", which makes the wind sound like an attacker with a knife. Later he says the bullets are "Less deadly than the air that shudders black with snow", which shows that the cold is more dangerous than the enemy. In Tennyson\'s poem, the danger comes from the enemy\'s guns, and the soldiers ride into the "jaws of Death" and the "mouth of Hell". These metaphors make the battlefield sound like a monster.\n\nThe structure of the poems is different too. Owen ends four of his stanzas, including the last, with "But nothing happens." This shows that the soldiers are bored and frustrated, waiting with no action. Tennyson ends every stanza with the words "six hundred", which makes the soldiers sound like a group to be remembered. His poem has a fast rhythm like horses galloping, while Owen\'s long lines are slow, like the soldiers\' waiting.\n\nThe poets have different attitudes. Tennyson admits that "Some one" made a mistake, but he still tells the reader to "Honour the charge" and calls the soldiers "Noble". Owen does not celebrate war at all. His soldiers ask "What are we doing here?", which shows that they cannot see the point of it.\n\nThe contexts explain these differences. Tennyson was Poet Laureate when he wrote about the Crimean War in 1854, and his poem was written to honour the soldiers. Owen was a soldier himself in the First World War and wrote from his own experience of the trenches, so he shows the truth of what soldiers suffered.',
              'Grade 6-7':
                'My second poem is The Charge of the Light Brigade by Alfred, Lord Tennyson. Both poets present soldiers facing death, but where Tennyson presents a single heroic moment of action, Owen presents a long ordeal of waiting in which nothing happens and men die anyway. Their different purposes, a public tribute and a soldier\'s testimony, shape every choice they make.\n\nThe clearest contrast is in what threatens the soldiers. In Exposure, the enemy is the weather. Owen personifies the "merciless iced east winds that knive us", giving the wind cruelty and a weapon, and he presents dawn itself as a military force: "Dawn massing in the east her melancholy army / Attacks once more in ranks on shivering ranks of grey". Even the bullets are "Less deadly than the air that shudders black with snow". In Tennyson\'s poem the danger is human and visible: cannon on every side, "Volley’d and thunder’d", and the soldiers ride into the "jaws of Death" and the "mouth of Hell". Both poets use metaphor to make death monstrous, but Tennyson\'s monster can be charged at, while Owen\'s cannot be fought at all.\n\nForm and structure reflect this difference. Tennyson\'s short lines and driving dactylic rhythm imitate a cavalry charge, and the words "six hundred" close every stanza, so the soldiers become a collective body to be remembered. Owen\'s long, heavy lines slow the reader down, and his refrain "But nothing happens." deflates each stanza it ends. His pararhymes, "silent" with "salient" and "wire" with "war", are sounds that almost match but do not, creating a sense of unease, as if the world itself is out of tune.\n\nThe poets also differ in what the soldiers know. Tennyson\'s men do not question orders: it is not theirs "to reason why", only to "do and die". He admits that someone had "blunder’d", but the poem moves past the blunder to celebration: "Honour the charge" and "Noble six hundred". Owen\'s soldiers, by contrast, are full of questions: "What are we doing here?" and "Is it that we are dying?" Their thoughts drift home in dreams, only to find "on us the doors are closed", and the poem ends with a burial party pausing "over half-known faces". There is no glory, only exposure and death.\n\nContext explains the difference in purpose. Tennyson, as Poet Laureate, wrote in 1854 about a charge he had read about in the newspapers, and his poem honours the soldiers\' obedience for a public proud of its army. Owen was an officer on the Western Front, and Exposure comes out of the freezing winter he spent in the trenches. He was killed in 1918, a week before the Armistice, and his poems, published after his death, set out to tell the truth about war rather than to celebrate it. Read together, the poems show how far attitudes to war changed between the Crimean War and the First World War.',
              'Grade 8-9':
                'I am comparing Exposure with Tennyson\'s The Charge of the Light Brigade. Both poems present soldiers at the mercy of forces they cannot control, but they reach opposite conclusions about what that experience means. Tennyson turns a military disaster into a celebration of obedience and courage; Owen turns a night in which nothing happens into an indictment of war, in which the enemy is the weather, time and finally the soldiers\' own faith.\n\nTennyson\'s poem is built for momentum. Its dactylic rhythm drives forward like hooves, and the anaphora of "Cannon to right", "Cannon to left" and "Cannon in front" closes in on the riders from three sides, so that the form itself traps them. The soldiers are given no individual voices: they are always "the six hundred", a number that ends every stanza and turns them into a single heroic body. Even the admission that someone had "blunder’d" is absorbed into this. The rhyme of "reply", "why" and "die" makes their duty sound as inevitable as the rhyme, for theirs is to "do and die", not "to reason why".\n\nOwen\'s poem is built for stillness. Its long lines, slowed by commas and trailing ellipses, mimic the soldiers\' endless waiting, and its refrain, "But nothing happens.", returns four times like a verdict. Where Tennyson\'s rhymes are full and confident, Owen\'s are pararhymes, "silent" against "salient", "wire" against "war", sounds that almost match but do not, as if the world has been knocked out of tune. The enemy is not a line of guns but the weather, personified as an attacker: the "merciless iced east winds that knive us", and dawn "massing in the east her melancholy army". The bullets that do come are "Less deadly than the air that shudders black with snow". Owen inverts the language of military glory, giving the weather the ranks and attacks that Tennyson gives his cavalry.\n\nThe two poems also differ in what their soldiers are allowed to think. Tennyson\'s men do not question: the poem is told from outside, by a voice that commands the reader to "Honour the charge" and ends on "Noble six hundred". Owen\'s poem is told from inside, in the first person plural, and it is full of questions: "What are we doing here?", "Is it that we are dying?" The fifth and sixth stanzas drift into a dream of home, only for the door to shut: "on us the doors are closed". Owen then turns on the comfort of religion itself: "For love of God seems dying". The final stanza\'s burial party, pausing "over half-known faces", answers Tennyson\'s question about "their glory": these men will not be remembered as a heroic six hundred, but half-recognised as frozen bodies.\n\nThe contexts sharpen the contrast. Tennyson wrote as Poet Laureate in 1854, from newspaper reports of the charge at Balaclava in the Crimean War, for a public that wanted its soldiers honoured; his poem does that work, even while it admits the order was a mistake. Owen wrote as an officer who had lived through the freezing trench winter of 1917, for readers at home who, he believed, did not know the truth of the war. He was killed a week before the Armistice in 1918, and Exposure was published after his death. One poem asks the reader to honour the soldiers\' sacrifice; the other asks why it was made at all.',
            },
            markScheme: [
              'The answer compares the named poem with a second poem from the same collection throughout: an answer on only ONE poem cannot go above the top of Level 2 (8 marks)',
              "AO2 (15 marks): analysis of both poets' language, form and structure and their effects, with relevant subject terminology - in these answers, Owen's personified weather, pararhyme and refrain, and Tennyson's rhythm, anaphora and refrain",
              "AO3 (5 marks): the relationship between each poem and its context - here Owen's experience as an officer on the Western Front, and Tennyson writing as Poet Laureate about the Crimean War",
              "Top band (17-20): perceptive comparison across a wide range of similarities and differences, a cohesive evaluation of both poets' methods, and context integrated into the argument",
            ],
          },
        ],
      },
      {
        id: 'edexcel-lit-p2-a-sec-b2',
        title: 'Section B, Part 2: Unseen Poetry',
        description:
          'Answer the question. Read the two poems below, which you have not seen before, and compare them. You are advised to spend about 35 minutes on this question.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'edexcel-lit-p2-a-q3',
            questionNumber: 3,
            questionText:
              'Read the two poems, "The Checkpoint" by S. Kareem and "Border Country" by M. Okonkwo, printed above. In both poems, the speakers write about crossing a border.\n\nCompare the ways the poets present identity in "The Checkpoint" and "Border Country".\n\nIn your answer, you should compare:\n- the ideas in the poems\n- the poets\' use of language\n- the poets\' use of form and structure.\n\nUse evidence from both poems to support your comparison.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            extract: `${UNSEEN_POEM_A1}\n\n---\n\n${UNSEEN_POEM_A2}`,
            extractSource: UNSEEN_PAIR_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Both poems present identity as something that is tested or divided at a border. In "The Checkpoint", the speaker\'s identity is questioned by security officers, while in "Border Country" the speaker feels split between two languages and two countries.\n\nIn "The Checkpoint", the speaker is treated as a suspect. The officers search their bag "with latex hands", and they hold each item up "as if the fabric hides a fuse". The repetition of "as if" shows how unfair the suspicion is, because the items are only shirts, a book and a child\'s toy. The speaker has to hide their feelings: they have "learned to keep my breathing slow". In "Border Country", the speaker is also treated with suspicion, but by a language rather than by people. The new language is "a tongue of wire", with "each syllable a checkpoint". This links to the first poem, because speaking the new language feels like being searched.\n\nBoth poets use repetition. Kareem begins three lines with "My passport", to show the difference between what the passport says and how the speaker is treated. Okonkwo repeats "static, then song" to show the speaker switching between languages, like a radio.\n\nThe poems end in different ways. "The Checkpoint" ends with the speaker\'s daughter, who "will not know the hands / that held it before hers", which suggests that the speaker is protecting her from what happened. "Border Country" ends with a "country with no name" for people who "belong to none". This is sadder, because the speaker does not belong anywhere.\n\nBoth poems are written in the first person, in four-line stanzas, which makes them feel personal. Overall, both poets show that identity can be hurt by borders, but "The Checkpoint" shows prejudice from other people, while "Border Country" shows a feeling of being divided inside.',
              'Grade 6-7':
                'Both poems present identity as something defined at a border, but they locate the pressure in different places. Kareem\'s speaker has their identity judged from outside, by officials who see a threat; Okonkwo\'s speaker carries the border inside, in a divided language and a divided sense of home.\n\nIn "The Checkpoint", identity is something other people search for. The officers\' "latex hands" are clinical and impersonal, and the search moves from objects to the body: "fingers trace my collar, cuffs, / the inside seam along my thigh." The repeated conditional, "as if the fabric hides a fuse, / as if the words between the pages / carry more than metaphor", exposes how absurd the suspicion is. Okonkwo uses the same imagery of inspection but turns it on language: the new tongue is "a tongue of wire", with "each syllable a checkpoint / where meaning must show papers". The metaphor makes every sentence a border crossing, suggesting that for this speaker the checkpoint never ends.\n\nBoth poets use repetition to show a gap between official identity and lived identity. Kareem\'s anaphora, "My passport says I\'m free to go. / My passport says I am a citizen.", builds certainty and then breaks it: "My passport doesn\'t say the thing / they\'re really looking for." The poem leaves race unnamed, but the next stanza makes the meaning clear, as a man "with different papers, different skin" walks through. Okonkwo\'s repetition is gentler: "static, then song, / static, then song" uses the simile of a radio to suggest an identity that keeps slipping in and out of focus.\n\nThe poems also differ in tone. Kareem\'s speaker is controlled, having "learned to keep my breathing slow", and the list "anger, fear, impatience, pride" names the feelings they must hide, because the wrong expression "is just another kind of bomb". The calm tone makes the injustice more powerful. Okonkwo\'s tone is more openly sorrowful, especially when the speaker\'s children "speak only the new language" and cannot hear the old one rising "on a question" and falling "on grief".\n\nStructurally, both poems use quatrains and end on the next generation. Kareem\'s final image of the toy bear, and of the daughter who "will not know the hands / that held it before hers", suggests that the speaker will protect her from knowing what happened. Okonkwo ends with a "country with no name", for people "who answer to two flags and belong to none". Kareem\'s ending holds on to a private dignity; Okonkwo\'s suggests a loss that cannot be repaired. Together, the poems show that identity can be damaged both by how others see us and by how we are forced to divide ourselves.',
              'Grade 8-9':
                'Both poems present identity as a border that runs through a person, but they come at it from opposite directions. "The Checkpoint" shows identity imposed from outside, by a system that reads one kind of body as a threat; "Border Country" shows identity divided from within, by a speaker who carries two languages and is fully at home in neither. Read together, they suggest that a border is not only a place on a map but something people are made to live inside.\n\nKareem\'s poem is built on the gap between documents and bodies. The search is described in clinical, impersonal language, "latex hands", while the objects searched are intimate: "shirts my mother pressed", "gifts I chose with care". The officials\' suspicion is exposed through the repeated conditional: "as if the fabric hides a fuse, / as if the words between the pages / carry more than metaphor". The last phrase is quietly ironic, because a poem is exactly the place where words do carry more than their surface meaning. Okonkwo borrows the same vocabulary of inspection but internalises it: in the new language, "each syllable a checkpoint / where meaning must show papers / and intent is always suspect". Where Kareem\'s speaker is searched once, at one checkpoint, Okonkwo\'s is searched every time they speak.\n\nThe poems use form to enact control and division. Kareem\'s quatrains are regular and his syntax measured, the restraint of a speaker who has "learned to keep my breathing slow" and to "empty out my face". The sentence runs on across a stanza break and then breaks again mid-phrase, "to empty out my face of all / expression", so the effort of self-control is stretched over a gap. The list of forbidden feelings, "anger, fear, impatience, pride", ends in the shocking metaphor that the wrong expression "is just another kind of bomb": under suspicion, even emotion becomes a weapon. Okonkwo\'s lines are looser, and the repetition "static, then song, / static, then song" makes the poem itself flicker between two signals, like the radio in the simile. The first stanza\'s sensory language, vowels "round as bread" and consonants "like doors that open both ways", presents the old language as nourishing and open, in contrast to the "tongue of wire" of the new.\n\nBoth poets turn to repetition at their most important moment. Kareem\'s anaphora, "My passport says I\'m free to go. / My passport says I am a citizen.", is undercut by "My passport doesn\'t say the thing / they\'re really looking for", a refusal to name race that makes the reader name it, and then confirmed by the man "with different papers, different skin" who "walks through without a second glance". Okonkwo\'s equivalent is the paradox of the final line, people "who answer to two flags and belong to none", where the balance of "two" and "none" captures a double belonging that adds up to nothing.\n\nBoth poems end with children, and this is where they differ most. Kareem\'s speaker protects their daughter from knowledge: she "will not know the hands / that held it before hers". The bear carries the search silently into her life, but the speaker\'s dignity lies in not passing on the humiliation. Okonkwo\'s children have already lost something: they "speak only the new language" and cannot hear the old one in their parent\'s voice. Kareem\'s poem is angry at a system; Okonkwo\'s grieves for an inheritance. Together they show that identity can be threatened from both sides of a border: by the suspicion of others, and by the slow loss of what made a person who they were.',
            },
            markScheme: [
              'AO1 (8 marks): a critical, informed personal response that compares the two poems, with references from both',
              'AO2 (12 marks): analysis of how each poet uses language, form and structure to present identity - the imagery of inspection, the repetition, and the endings that turn to the next generation',
              'Comparison is required throughout: an answer on only ONE poem cannot go above the top of Level 2 (8 marks), and a heavily unbalanced answer cannot reach Level 3',
              'Top band (17-20): perceptive, sustained comparison of ideas and methods, with precise references from both poems',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2B - Jekyll and Hyde + Relationships (Neutral Tones) + Unseen Poetry (Work)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lit-p2-b',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: 19th-century Novel and Poetry since 1789',
    subtitle: 'English Literature 1ET0/02',
    code: '1ET0/02',
    totalTimeMinutes: 135,
    totalMarks: 80,
    sections: [
      {
        id: 'edexcel-lit-p2-b-sec-a',
        title: 'Section A: 19th-century Novel - Jekyll and Hyde',
        description:
          'Answer BOTH parts of the question. In the exam there is a question on each of the seven set novels, and you answer the one you have studied; this practice paper sets Jekyll and Hyde. Read the extract below, the opening of Chapter 4, The Carew Murder Case: a maid, sitting at her window late at night, sees a crime in the lane below. Part (a) is about the extract and part (b) about the rest of the novel. The exam is closed book: the extract is printed, but you quote the rest of the novel from memory. You are advised to spend about 60 minutes on this section, 30 on each part.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-lit-p2-b-q1a',
            questionNumber: 1,
            questionText:
              "(a) Explore how Stevenson presents Mr Hyde's violence in this extract.\n\nRefer closely to the extract in your answer.\n\n[20 marks]",
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            extract: JEKYLL_EXTRACT,
            extractSource: JEKYLL_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Stevenson presents Hyde\'s violence as sudden, extreme and animal-like. At the start of the extract, everything seems peaceful. The maid is sitting at her window in the moonlight, and she has never felt "more at peace with all men". The old gentleman is described as "an aged beautiful gentleman with white hair", who speaks with "a very pretty manner of politeness". This calm atmosphere makes Hyde\'s violence more shocking when it happens.\n\nHyde is shown to be impatient before he attacks. He listens "with an ill-contained impatience", which suggests that his anger is only just being held back. Then "all of a sudden he broke out in a great flame of anger". The metaphor of a flame shows how quickly his anger spreads and how dangerous it is. The maid says he behaved "like a madman", which shows that he is completely out of control.\n\nThe most violent part of the extract uses animal imagery. Stevenson writes that Hyde attacked "with ape-like fury". This makes Hyde seem less than human, like a wild animal. He is "trampling his victim under foot and hailing down a storm of blows". The word "storm" makes the attack sound like a force of nature that cannot be stopped. The detail that "the bones were audibly shattered" is horrifying, because the reader can imagine the sound.\n\nStevenson also shows that the attack has no clear reason. The old man seemed to be only "inquiring his way", and when Hyde first turns on him, he looks "very much surprised and a trifle hurt". This makes Hyde\'s violence seem even more evil, because the victim has done nothing wrong.\n\nAt the end of the extract, "the maid fainted". This shows how horrifying Hyde\'s violence is, because even a witness cannot cope with it.',
              'Grade 6-7':
                'Stevenson presents Hyde\'s violence as explosive and inhuman, and he heightens its horror by setting it against an atmosphere of peace and innocence. The extract is structured as a slow build-up followed by a sudden eruption, which makes the violence shocking even though the reader expects something terrible from Hyde.\n\nThe opening establishes a calm, almost romantic mood. The lane is "brilliantly lit by the full moon", and the maid, "romantically given", has never felt "more at peace with all men or thought more kindly of the world". The victim is idealised: he is "an aged beautiful gentleman with white hair", and his face seems "to breathe such an innocent and old-world kindness of disposition". By making the victim gentle and the witness peaceful, Stevenson makes the violence a violation of innocence.\n\nHyde is presented in contrast from the moment he is recognised. He is "very small", carries "a heavy cane, with which he was trifling", and listens "with an ill-contained impatience". The adjective "ill-contained" suggests violence pressing against a thin barrier, which fits the novel\'s idea of an evil side that is only just held in. The eruption is described through the metaphor of fire, "a great flame of anger", and a list of present participles, "stamping with his foot, brandishing the cane, and carrying on", which creates a sense of frantic, uncontrolled movement.\n\nThe climax is dominated by animal and natural imagery. Hyde attacks "with ape-like fury", a comparison that strips him of humanity and suggests something primitive. "Hailing down a storm of blows" turns his violence into a force of nature, relentless and impersonal. Stevenson does not spare the reader: "the bones were audibly shattered and the body jumped upon the roadway". The verb "jumped" is disturbing because it gives the body a grotesque movement of its own, as if the force of the blows has turned the man into an object.\n\nThe narrative perspective adds to the effect. The events are filtered through the maid, and Stevenson reminds us of this with comments in brackets: "(she used to say, with streaming tears, when she narrated that experience)" and "(as the maid described it)". The violence reaches us second-hand, like a story retold in the newspapers, which fits the opening description of "a crime of singular ferocity". Her fainting at the end, "At the horror of these sights and sounds", closes the scene with a human reaction that shows how far beyond normal experience Hyde\'s violence is.',
              'Grade 8-9':
                'Stevenson presents Hyde\'s violence as a sudden collapse from civilisation into savagery, and he makes it more disturbing by framing it within a scene of almost sentimental calm. The extract moves from stillness to frenzy and back to stillness, and that structure reproduces the shock of the crime for the reader.\n\nThe scene is staged with deliberate innocence. The moonlit lane, the maid "romantically given" and "at peace with all men", and the old man\'s face, which seems "to breathe such an innocent and old-world kindness of disposition", belong to a world of gentility. Even the victim\'s approach is courtly: he "bowed and accosted the other with a very pretty manner of politeness". Stevenson piles up the signs of respectability so that Hyde\'s violence reads not just as a crime against a man but as an assault on the social order itself, made worse by "the high position of the victim".\n\nAgainst this, Hyde is defined by smallness and suppressed force. He is "very small", toying with "a heavy cane", and he listens "with an ill-contained impatience", a phrase that anticipates the novel\'s central idea of a self that cannot be held in. When the eruption comes, it is described in a rising sequence: first the metaphor of "a great flame of anger", then the frantic present participles, "stamping with his foot, brandishing the cane, and carrying on (as the maid described it) like a madman", and finally total release, as Hyde "broke out of all bounds". The phrase "all bounds" is crucial: it suggests that nothing inside Hyde restrains him at all.\n\nThe language of the attack itself denies Hyde\'s humanity. "With ape-like fury" places him below the human, suggesting something primitive rather than merely wicked. "Hailing down a storm of blows" turns him into weather, an impersonal force without motive. The most horrifying detail is aural: "the bones were audibly shattered". By naming the sound rather than the sight, Stevenson forces the reader to imagine the attack through another sense, and the grotesque verb in "the body jumped upon the roadway" turns the victim from a person into an object moved by blows.\n\nCrucially, the violence is unmotivated. The old man seemed to be "only inquiring his way", and his reaction, "very much surprised and a trifle hurt", is almost comic in its understatement, which makes Hyde\'s response look monstrously out of proportion. Stevenson gives no reason, and the absence of a reason is itself the point: Hyde\'s violence needs none.\n\nFinally, the narrative method keeps the violence at one remove. Stevenson filters it through a witness, marked by brackets, "(as the maid described it)", and ends with her collapse: "At the horror of these sights and sounds, the maid fainted." The flatness of that final sentence, after the vivid horror before it, leaves a silence where the reader\'s own horror is meant to sit. Hyde\'s violence is presented as something that cannot be watched to the end.',
            },
            markScheme: [
              'AO2 (20 marks): analysis of how Stevenson uses language, form and structure in the extract and their effect on the reader, with subject terminology used to support it - here the calm before the attack, the imagery of fire, animals and weather, the sound of the blows, and the maid as witness',
              'Part (a) is marked for AO2 alone: there are no marks for context, and the rest of the novel belongs in part (b)',
              'Top band (17-20): a cohesive evaluation of how language, form and structure work together in the extract, with precise, integrated terminology',
            ],
          },
          {
            id: 'edexcel-lit-p2-b-q1b',
            questionNumber: 1,
            questionText:
              '(b) In this extract, Mr Hyde attacks an elderly gentleman for no clear reason. Explain the importance of violence elsewhere in the novel.\n\nIn your answer you must consider:\n- the violent acts the novel describes\n- what they show about Hyde and about Jekyll.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            modelAnswers: {
              'Grade 4-5':
                'Violence is important in Jekyll and Hyde because it shows the reader how evil Hyde is and what happens when the bad side of a person is set free.\n\nThe first violent act in the novel happens in Chapter 1, when Enfield tells Utterson about a man who collided with a young girl in the street. He says that "the man trampled calmly over the child\'s body and left her screaming on the ground". The word "calmly" is shocking, because it shows that Hyde does not care about hurting a child. Enfield says "it was hellish to see" and compares Hyde to "some damned Juggernaut", which makes him sound like an unstoppable machine.\n\nHyde\'s violence gets worse as the novel goes on. The murder of Sir Danvers Carew shows that he is now willing to kill. After the murder, Utterson takes the police to Hyde\'s house, but Hyde has disappeared, and the characters are afraid of what he will do next.\n\nAt the end of the novel, Jekyll\'s statement explains the violence. He says that Hyde was "pure evil", and he describes the murder from the inside: "I mauled the unresisting body, tasting delight from every blow." This shows that Hyde enjoys violence, which is the most frightening thing about him. Jekyll also says "My devil had been long caged, he came out roaring", which suggests that the more Jekyll tried to hide his bad side, the more violent it became when it got out.\n\nViolence is also important because it reveals Jekyll\'s secret. Jekyll is respected, but Hyde, who is part of him, does terrible things. Stevenson uses violence to show that even a respectable gentleman has a dangerous side, and that if this side is set free, it can destroy innocent people and the person himself.',
              'Grade 6-7':
                'Violence is central to the novel because it is the clearest evidence of what Hyde is, and therefore of what lies hidden in Jekyll. Stevenson uses a small number of violent acts, each worse than the last, to build the mystery and then to explain it.\n\nThe first act of violence, in Chapter 1, sets the pattern. Enfield describes how Hyde "trampled calmly over the child\'s body and left her screaming on the ground". The adverb "calmly" is chilling: the violence is not rage but indifference. Enfield struggles to describe it, saying "It sounds nothing to hear, but it was hellish to see", and turns to the image of "some damned Juggernaut", something mechanical and unstoppable. This violence creates the mystery that drives Utterson\'s investigation, because a respectable man\'s cheque has paid for Hyde\'s crime.\n\nThe murder of Carew in Chapter 4 shows the violence growing from cruelty to killing, and it changes the plot. Hyde becomes a hunted man, Utterson recognises the broken stick as one he gave Jekyll, and the link between the two men becomes impossible to ignore. Violence therefore pulls the respectable world and the criminal world together, which is exactly what Jekyll\'s double life had tried to keep apart.\n\nIn the final chapter, Jekyll\'s statement reveals the meaning of the violence. Hyde is "pure evil", the only person "alone in the ranks of mankind" without any good in him. Jekyll describes the murder from Hyde\'s point of view: "With a transport of glee, I mauled the unresisting body, tasting delight from every blow." The enjoyment is what makes it so disturbing. His explanation, "My devil had been long caged, he came out roaring", suggests that the violence grows out of repression: the longer Jekyll\'s darker desires were held in, the more violently they burst out.\n\nViolence also brings the story to its end. In Chapter 8, Poole and Utterson break down the cabinet door with an axe, and "A dismal screech, as of mere animal terror" comes from inside. The man of violence ends in terror, and Hyde\'s death is also Jekyll\'s.\n\nOverall, violence is important because it turns the novel\'s ideas into action. It shows that the hidden side of a respectable man is not just a private weakness but a danger to everyone around him.',
              'Grade 8-9':
                'Violence matters in Stevenson\'s novel because it is the point at which the hidden subject becomes visible. This is a world of locked doors, sealed letters and gentlemen who refuse to gossip; violence is what breaks through that surface, and each act of it brings the reader closer to the truth that Hyde is not a stranger but a part of Jekyll.\n\nThe novel opens with violence presented as a riddle. In Enfield\'s story, Hyde "trampled calmly over the child\'s body and left her screaming on the ground". What disturbs Enfield is the calm, not the collision, and his language fails him: "It sounds nothing to hear, but it was hellish to see." He reaches for the image of "some damned Juggernaut", a force that crushes without malice or thought. Crucially, the violence is paid for by a cheque from a man who is "the very pink of the proprieties", so from the first chapter Stevenson ties brutality to respectability, the connection the rest of the plot will expose.\n\nThe murder of Carew raises the stakes from cruelty to killing, and it marks a turning point in the structure. Before it, Hyde is a mystery that Utterson pursues out of curiosity and concern; after it, he is a fugitive, and the broken stick, which Utterson recognises as his own gift to Jekyll, makes the connection between the two men physical. By stressing "the high position of the victim", Stevenson shows violence threatening not only a child in the street but the respectable order itself.\n\nJekyll\'s full statement transforms how the reader understands everything before it. The murder is retold from inside: "With a transport of glee, I mauled the unresisting body, tasting delight from every blow." The sensual language of "glee" and "tasting delight" shows that the violence was never a loss of control in the ordinary sense; it was pleasure. Jekyll\'s explanation is psychological: "My devil had been long caged, he came out roaring." The image suggests that repression does not remove violence but intensifies it, so that Jekyll\'s "profound duplicity of life" is itself the cause of Hyde\'s ferocity. His claim that Hyde, "alone in the ranks of mankind, was pure evil", is therefore double-edged: Hyde may be pure evil, but he was made from Jekyll.\n\nFinally, violence brings the double life to its end. On the last night, Utterson and Poole take an axe to the cabinet door, and the "dismal screech, as of mere animal terror" from inside reverses the scene of the murder: the attacker is now the one in terror. The novel\'s violence turns, at last, on itself.\n\nStevenson therefore uses violence as both plot and argument. Each act moves the investigation forward, but together they make the case at the heart of the novel: that "man is not truly one, but truly two", and that the darker self, once released, cannot be reasoned with or contained.',
            },
            markScheme: [
              'AO1 (20 marks): an informed personal response in a critical style, supported by references to the novel as a whole, including quotations from memory',
              'Part (b) is about the rest of the novel: an answer that stays in the printed extract misses its focus. Section A has no marks for context or for spelling, punctuation and grammar',
              'Top band (17-20): an assured, engaged response with a mature critical style, in which well-chosen references are an integral part of the argument',
            ],
          },
        ],
      },
      {
        id: 'edexcel-lit-p2-b-sec-b1',
        title: 'Section B, Part 1: Poetry Anthology - Relationships',
        description:
          'Answer ONE question. In the exam there is a question on each of the four anthology collections, and you answer the one you have studied; this practice paper sets the Relationships question. The named poem is printed below. You choose the second poem yourself, from the same collection, and quote it from memory. You are advised to spend about 35 minutes on this question.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'edexcel-lit-p2-b-q2',
            questionNumber: 2,
            questionText:
              'Re-read "Neutral Tones" by Thomas Hardy, printed above. Choose one other poem from the Relationships collection.\n\nCompare how the poets present the pain that love can cause in the two poems.\n\nIn your answer, you should consider the:\n- language, form and structure used by the poets\n- influence of the contexts in which the poems were written.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            extract: NEUTRAL_TONES,
            extractSource: NEUTRAL_TONES_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I have chosen La Belle Dame sans Merci by John Keats. Both poems present love as something that causes pain, and both use images of nature to show it. In Neutral Tones, Hardy describes the end of a relationship, while Keats tells the story of a knight who is left alone after falling in love with a mysterious woman.\n\nHardy uses a bleak winter setting to reflect the dead relationship. The couple stand "by a pond that winter day", "the sun was white", and the leaves lie "on the starving sod". The word "starving" makes the ground seem to be dying, like their love. Keats also uses nature to show suffering: the knight is "palely loitering" beside a lake where the "sedge has withered" and "no birds sing". In both poems, nature has lost its life, just as the speakers have lost love.\n\nBoth poems show how a lover\'s face can change. Hardy describes his lover\'s smile as "the deadest thing / Alive enough to have strength to die", which is a paradox showing that her smile has no warmth left. In Keats\'s poem, the lady is at first "Full beautiful", and the knight remembers that her "eyes were wild", but at the end he dreams of "pale kings" with "starved lips" who warn him that he is "in thrall". Love has turned into a trap.\n\nThe structure of both poems is circular. Neutral Tones ends with the same images it began with: "Your face, and the God-curst sun, and a tree, / And a pond edged with grayish leaves." This shows that Hardy cannot escape the memory. Keats\'s poem also ends almost where it started, with the knight "palely loitering" where "no birds sing". Both speakers are stuck in their pain.\n\nThe contexts are different. Keats was a Romantic poet writing in 1819, and his poem is like a medieval ballad with a supernatural woman in it. Hardy\'s poem was published much later, in 1898, and it is more realistic and personal. He also mentions God in a negative way ("God-curst sun"), which may suggest that he has lost his religious faith.',
              'Grade 6-7':
                'My second poem is La Belle Dame sans Merci by John Keats. Both Hardy and Keats present love as something that leaves the lover damaged, and both use a desolate natural landscape to show it. However, Hardy\'s poem is a realistic memory of a failed relationship, while Keats\'s is a supernatural ballad in which love itself is a kind of enchantment.\n\nThe opening settings are strikingly similar. Hardy\'s lovers stand by a pond on a winter day, when "the sun was white, as though chidden of God", and the leaves lie "on the starving sod". The personification of the sun, scolded by God, and of the ground, "starving", drains the scene of warmth and life. Keats\'s knight is found in a similar wasteland, "palely loitering" where the "sedge has withered" and "no birds sing". In both poems pathetic fallacy makes the landscape reflect the speaker\'s feelings, but Hardy\'s landscape is remembered while Keats\'s is still present: the knight is trapped inside his.\n\nThe poets present the loved one differently. Hardy focuses on the woman\'s face at the moment love ended. Her eyes "rove / Over tedious riddles of years ago", suggesting boredom, and her smile is "the deadest thing / Alive enough to have strength to die". The paradox suggests a smile that is barely alive, and the simile that follows, "Like an ominous bird a-wing", gives it a sense of threat. Keats\'s lady is beautiful and mysterious, "a faery’s child" whose "eyes were wild", and she seems to declare her love ("love thee true"), but the dream of "pale kings" with "starved lips" reveals that she holds him "in thrall". Hardy\'s lover is cold; Keats\'s is enchanting and dangerous.\n\nBoth poems have circular structures, which suggest that the speakers cannot escape. Hardy\'s final stanza gathers the opening images, "Your face, and the God-curst sun, and a tree, / And a pond edged with grayish leaves", so that the memory is fixed for ever. The rhyme scheme of each stanza, ABBA, also encloses its middle lines, like the memory closing round him. Keats\'s final stanza repeats the images of the opening, "palely loitering" and "no birds sing", answering the opening question but leaving the knight where he was.\n\nContext shapes the poets\' attitudes. Keats wrote in 1819 as a Romantic, drawing on medieval ballads and the supernatural; the mysterious woman and the enchanted knight make love a strange and dangerous force. Hardy\'s poem, published in 1898, reflects his bleak, realistic view of life, and the bitter phrase "keen lessons that love deceives" turns one failed relationship into a general belief that love itself cannot be trusted.',
              'Grade 8-9':
                'I am comparing Neutral Tones with Keats\'s La Belle Dame sans Merci. Both poems present love as an experience that leaves the lover permanently marked, but they locate the damage differently. Hardy\'s poem dissects a single, ordinary moment when love died, and finds in it a lesson about love itself; Keats\'s turns love into an enchantment, so that the lover is not simply disappointed but drained of life. One is a realist\'s memory, the other a Romantic myth.\n\nBoth poets begin in a dead landscape, and both use it to externalise feeling. Hardy\'s scene is drained of colour: "the sun was white, as though chidden of God", the leaves lie "on the starving sod", and even they are "gray". The title "Neutral Tones" describes the colours as well as the emotion: not hatred, but an absence of feeling, which is worse. Keats\'s landscape is similarly emptied, the "sedge has withered" and "no birds sing", but his knight is "palely loitering" inside it, so that the wasteland and the lover are fused. Keats\'s late-autumn setting, where the harvest is in, suggests a world after its fulfilment; Hardy\'s winter suggests a world in which nothing will grow again.\n\nThe loved ones are presented through contrasting kinds of deception. Hardy\'s woman is seen in close-up, and every detail of her face is a sign of something dying: her eyes "rove / Over tedious riddles of years ago", and her smile is "the deadest thing / Alive enough to have strength to die". The oxymoron suggests that the smile\'s only life is its capacity to end, and "a grin of bitterness" sweeps across it "Like an ominous bird a-wing", a simile that turns her expression into an omen. Keats\'s lady deceives through enchantment rather than indifference: she is "a faery’s child", her "eyes were wild", and she speaks "in language strange", so that her declaration of love can never be checked. The dream of "pale kings" with "starved lips" exposes her as a figure who holds men "in thrall". Where Hardy\'s lover kills love by boredom, Keats\'s kills the lover by desire.\n\nBoth poems are formally circular, and in both the circle is a trap. Hardy\'s ABBA quatrains close each stanza on itself, and the final stanza gathers the opening images into a single, frozen list: "Your face, and the God-curst sun, and a tree, / And a pond edged with grayish leaves". The memory has become the lens through which he sees all love: "keen lessons that love deceives, / And wrings with wrong". Keats\'s ballad stanzas, with their shortened final lines, end each quatrain abruptly, as if cut off, and the last stanza returns the knight to the opening\'s "palely loitering" and "no birds sing". The question the poem began with is answered, but the knight is no freer for answering it.\n\nThe contexts explain the difference in mode. Keats wrote in 1819, in the Romantic revival of the medieval ballad, and his poem draws on that tradition\'s archaic language ("thee", "faery") and its supernatural temptress; love is mysterious, overwhelming and fatal. Hardy\'s poem, published in 1898 in his first collection, belongs to a later, more sceptical age: "chidden of God" and "God-curst" suggest a universe in which even the sun is under a curse, and love offers no consolation. Keats mythologises the pain of love; Hardy refuses to, and that refusal is what makes Neutral Tones so bleak.',
            },
            markScheme: [
              'The answer compares the named poem with a second poem from the same collection throughout: an answer on only ONE poem cannot go above the top of Level 2 (8 marks)',
              "AO2 (15 marks): analysis of both poets' language, form and structure and their effects, with relevant subject terminology - in these answers, the pathetic fallacy of both landscapes, the imagery of the loved one's face, and the circular structures",
              "AO3 (5 marks): the relationship between each poem and its context - here the Romantic ballad revival in Keats's 1819 poem, and the sceptical, unconsoled view of love and faith in Hardy's",
              "Top band (17-20): perceptive comparison across a wide range of similarities and differences, a cohesive evaluation of both poets' methods, and context integrated into the argument",
            ],
          },
        ],
      },
      {
        id: 'edexcel-lit-p2-b-sec-b2',
        title: 'Section B, Part 2: Unseen Poetry',
        description:
          'Answer the question. Read the two poems below, which you have not seen before, and compare them. You are advised to spend about 35 minutes on this question.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'edexcel-lit-p2-b-q3',
            questionNumber: 3,
            questionText:
              'Read the two poems, "Night Shift" by R. Okafor and "Assembly Line" by K. Draper, printed above. Both poems are about factory work.\n\nCompare the ways the poets present the effects of work on people in "Night Shift" and "Assembly Line".\n\nIn your answer, you should compare:\n- the ideas in the poems\n- the poets\' use of language\n- the poets\' use of form and structure.\n\nUse evidence from both poems to support your comparison.\n\n[20 marks]',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            extract: `${UNSEEN_POEM_B1}\n\n---\n\n${UNSEEN_POEM_B2}`,
            extractSource: UNSEEN_PAIR_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Both poems present factory work as something that takes away people\'s individuality and wears them down. "Night Shift" is about one worker, the speaker\'s mother, while "Assembly Line" is spoken by the workers themselves, as "we".\n\nBoth poets present the factory as more powerful than the people in it. In "Night Shift", the factory is personified as a monster: it "breathes", and it draws the workers "through its metal mouth" and "swallows them till dawn". In "Assembly Line", the workers say that they "remain in place like parts / inside a larger machine". In both poems, people become part of the machine.\n\nBoth poems show workers losing their names. In "Night Shift", the uniform "turns her / from my mother into Worker 4751". The number makes her sound like a product, not a person. In "Assembly Line", the foreman "counts us by our stations, / not our names". This shows that the workers can be replaced, because "another fills the space again".\n\nThe poets use repetition to show how dull the work is. Okafor repeats "lift, press, turn, release" twice, like the movements of the machine. Draper repeats "surprised" three times when the workers leave and see the sky, which shows how cut off they have been from the world outside.\n\nThe endings are different. "Night Shift" ends with the mother "watching nothing, holding nothing, / being no one\'s anything at all", which is very sad, because she seems to have lost herself. "Assembly Line" ends with the workers counting "every second / like a miser counts his coin", which shows how precious their time has become to them.\n\nBoth poems use four-line stanzas, but "Assembly Line" uses more rhyme, such as "thought" and "unwrought", which makes it sound like a song or a chant. Overall, both poems show the cost of factory work, but "Night Shift" is more personal and emotional, because it is about the speaker\'s own mother.',
              'Grade 6-7':
                'Both poems present factory work as a process that reduces people to parts of a machine, but they do this from different points of view. "Night Shift" is narrated by a child watching their mother, so the effects of work are seen from outside, with love and grief; "Assembly Line" is spoken by the workers as a collective "we", so the effects are described from inside, with quiet resentment.\n\nBoth poets use extended metaphors that make the factory more alive than the people. Okafor personifies the factory as a creature that "breathes" in a "long, / mechanical inhale" and "swallows" the workers "till dawn". The enjambment of "a long, / mechanical inhale" draws the phrase out across the line, imitating the breath. Draper reverses the metaphor: instead of the factory becoming human, the humans become machinery, remaining "in place like parts / inside a larger machine". Both suggest the same exchange, in which life passes from the workers to the factory.\n\nBoth poems show the loss of identity through numbers. Okafor\'s most striking image is the uniform that "turns her / from my mother into Worker 4751": the line break after "turns her" makes the reader wait for the transformation, and the next line moves in one breath from "my mother" to a number. Draper\'s foreman "counts us by our stations, / not our names", and the list "one leaves or falls or fails to come" suggests that illness or injury makes no difference, because "another fills the space again". The difference is that Okafor\'s mother has a private self the child can still see, while Draper\'s workers are interchangeable even to themselves.\n\nRepetition reflects the monotony of the work. Okafor\'s "lift, press, turn, release. / Lift, press, turn, release." uses short verbs and a repeated line to imitate the machine\'s rhythm, until "The body learns to disappear". Draper\'s regular quatrains and rhymes ("thought" and "unwrought", "clean" and "machine") create a steady, mechanical beat, and the clock that "does not tick but hum" turns time into a constant drone.\n\nThe poems\' endings show different kinds of loss. Draper\'s workers emerge "like creatures from a cave", "surprised by sky, surprised by trees", and the closing simile, "like a miser counts his coin", shows how work has taught them to hoard time. Okafor\'s ending is quieter and more painful: the mother stands at a window "watching nothing, holding nothing, / being no one\'s anything at all". The three phrases of emptiness suggest that work has drained her of everything, even her role as a mother. Draper presents a shared injustice; Okafor presents its cost to one family.',
              'Grade 8-9':
                'Both poems present industrial work as a quiet violence that turns people into functions, but they differ in where they stand to observe it. "Night Shift" is told by a child who watches the cost of work build up in a single body, their mother\'s; "Assembly Line" is spoken by the workers as a collective "we", addressing a "you" who uses what they make. One poem is an elegy for a person who is still alive; the other is a protest.\n\nThe central metaphors run in opposite directions. Okafor brings the factory to life: it "breathes at night" in a "long, / mechanical inhale" and "swallows" its workers through a "metal mouth", and the enjambment stretches the breath across the line break, so that the poem itself seems to breathe with the machine. Draper mechanises the people, who "remain in place like parts / inside a larger machine", while the products they make move on, "anonymous and clean". Between them, the two poems describe one transfer: life drains out of the workers and into the factory and its goods.\n\nBoth poets dramatise the loss of a name. Okafor\'s uniform "turns her / from my mother into Worker 4751"; the line break holds "turns her" in suspense before the transformation lands, and the bureaucratic number collides with the intimate "my mother" in a single line. Draper\'s foreman "counts us by our stations, / not our names", and the polysyndeton of "one leaves or falls or fails to come" runs illness, injury and absence together as if they were the same event, since "another fills the space again". Okafor insists on the individual the system erases; Draper shows the system\'s indifference to every individual.\n\nForm enacts the work. Okafor\'s repeated line, "lift, press, turn, release. / Lift, press, turn, release.", is the poem at its most mechanical, and it is followed by a chilling consequence: "The body learns to disappear / inside the repetition". The metaphor of her back as "a sentence she cannot complete" links physical damage to broken language, and is echoed when she falls "asleep mid-sentence". Draper\'s form is more regular, with quatrains and rhymes that click into place ("thought" and "unwrought", "clean" and "machine"), but the rhymes loosen in the last two stanzas as the workers glimpse a world outside. The clock that "does not tick but hum" turns time into a vibration "in the bones", something endured physically rather than measured.\n\nThe endings show what work has taken. Draper\'s workers emerge "like creatures from a cave", and the triple repetition, "surprised by sky, surprised by trees, / surprised that light behaves", shows how strange freedom has become. The final simile, "like a miser counts his coin", is bitter: the workers, who own little else, have become misers of their own time. Okafor\'s ending is more desolate. The mother stands at the window "watching nothing, holding nothing, / being no one\'s anything at all". The negatives build until even her relationships are cancelled, and the child, who has "never seen her cry", is left to witness a grief she cannot express. Draper\'s "we" can at least speak its protest; Okafor\'s mother has been silenced, and her child has to speak for her.',
            },
            markScheme: [
              'AO1 (8 marks): a critical, informed personal response that compares the two poems, with references from both',
              'AO2 (12 marks): analysis of how each poet uses language, form and structure to present the effects of work - the factory metaphors, the loss of names, repetition and rhyme, and the two endings',
              'Comparison is required throughout: an answer on only ONE poem cannot go above the top of Level 2 (8 marks), and a heavily unbalanced answer cannot reach Level 3',
              'Top band (17-20): perceptive, sustained comparison of ideas and methods, with precise references from both poems',
            ],
          },
        ],
      },
    ],
  },
]
