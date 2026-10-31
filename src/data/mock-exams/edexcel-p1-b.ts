// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * PEARSON EDEXCEL GCSE ENGLISH LANGUAGE PAPER 1 (1EN0/01), MOCKS 06 TO 10.
 *
 * WHAT WAS WRONG (found 24 October 2026, the day the AI marker was corrected
 * to mark each paper as its board does). These papers were not Pearson's
 * paper. Each set four reading questions worth 4, 16, 16 and 16 and two
 * compulsory writing tasks worth 16 and 24: 76 marks, where 1EN0/01 is 64.
 * Pearson sets 1, 2, 6 and 15 marks of reading on one extract, then one piece
 * of imaginative writing for 40, from a choice of two tasks. A student
 * practising them sat an exam that does not exist, and an answer handed to
 * the marker found no question of its worth, so it got general feedback with
 * no marks. Their extracts were passages written for the site, set in the
 * present day, where Pearson's Paper 1 is always an unseen extract of about
 * 650 words of nineteenth-century fiction.
 *
 * WHAT THEY ARE NOW. Each paper is set as Pearson sets 1EN0/01, as
 * src/data/mark-scheme-guides/edexcel-lang-paper1.ts describes it (checked
 * twice against Pearson's mark schemes, June 2023 to June 2025, and the
 * specification): Question 1 (1 mark) and Question 2 (2 marks) find
 * information in a named part of the extract, Question 3 (6 marks) analyses
 * language and structure in a shorter part, Question 4 (15 marks) evaluates
 * how successfully the whole extract creates an effect, and Questions 5 and 6
 * are one entry worth 40, labelled "Q5 or Q6", since a student answers only
 * one. The paper takes 1 hour 45 minutes: about an hour on Section A and 45
 * minutes on Section B, as Pearson's front cover advises. The minutes for
 * each question are our suggestion, taken from the guide. The wording is
 * ours, in Pearson's manner. Pearson prints two pictures with one writing
 * task; here they are described in words. Pearson names lines by number, but
 * the mock-exam page prints the extract as wrapped text, so Question 1 names
 * a sentence or paragraph, and Question 2 prints the part it asks about, as
 * Pearson's does. Question 3 prints its part too, unless the whole question
 * would then pass 1,400 characters: the marker refuses a question text over
 * 1,500 (MAX_QUESTION_TEXT in src/lib/validate-request.ts, held for every
 * mock question by src/__tests__/validate-request.test.ts), so a longer part
 * is named by its first and last words, as Pearson's earlier papers named
 * lines, and the student reads it in the extract printed above.
 *
 * THE EXTRACTS are cut by script from the held editions in
 * src/data/full-texts/ (each is named above its constant), never retyped:
 * whole paragraphs or whole sentences, with nothing changed but the edition's
 * underscores for italic type, which the page cannot print. Every quotation in
 * the reading answers and mark schemes was checked, by script, against the
 * extract it quotes, and scripts/check-mock-exam-extracts.mjs reads each
 * extract against its edition.
 *
 * The passages these papers printed until 24 October 2026 were the site's own
 * stories, labelled as such; the corrections recorded here on 27 September
 * 2026 were to their model answers, which went with them.
 *
 * SECOND READING, 31 October 2026: every question, scheme and answer read
 * against its extract and the held text around it, by a reader who did not
 * write them. Fixed:
 *   - 06 context had the brother driving down "a quiet lane"; the novel has
 *     him on foot, "leading the pony". Rewritten.
 *   - 06 Q3 answer said each stage of the journey was worse than the last; he
 *     passed Chalk Farm, the "riotous tumult", before Edgware. Now "outdoes".
 *   - 06 Q4 answer made the Martians "a terror that exists only in the crowd's
 *     minds", as if imagined. Now "known only through the crowd's terror".
 *   - 06 Q5 model answer had an exclamation mark ("Sami!"). Reworded.
 *   - 07 context called Dunstan "the younger son of the richest man"; he is
 *     "the second son" of Squire Cass, "The greatest man in Raveloe".
 *   - 07 Q1 scheme accepted "inviting", which names nothing. Now "fire".
 *   - 07 Q3 answer and scheme said the part "closes where it began, with the
 *     sand"; it begins with the hiding-places. Now: the floor is left as found.
 *   - 08 Q3 answer said the Ghost speaks "before we know what it looks like";
 *     the paragraph before describes "a jolly Giant". Now "In this part".
 *   - 08 Q3 answer quoted "living green" from outside the part. Now the
 *     "holly wreath", inside it.
 *   - 08 Q4 answer called the Ghost "clear and kind" (its eyes are), and the
 *     start dark (it is "a blaze of ruddy light"). Both fixed.
 *   - 08 Q4 scheme: "Light and life replace darkness" now replace the "dull
 *     petrification of a hearth", which is what the extract says.
 *   - 09 Q4 answer set Hester against "the dark crowd", which the extract
 *     never describes. Now against the beadle, the "black shadow".
 *   - 09 Q4 scheme said "The crowd" was "astonished"; the extract says those
 *     who had known her before.
 *   - 10 context glossed "Lantern Yard" and "presentiment", which are not in
 *     the extract. Removed.
 *   - 10 Q4 answer and scheme said the New Year itself "might bring his money
 *     back again"; the joke is that sitting up to hear it rung in might.
 */

// ─── How each question is marked ─────────────────────────────────────────────
// In the site's own words, from src/data/mark-scheme-guides/edexcel-lang-paper1.ts.

const SECTION_B_GUIDANCE =
  'Answer ONE question from this section: Question 5 or Question 6. You should spend about 45 minutes on it, including about 5 minutes planning and 5 minutes checking your work.'

const Q3_LEVELS = [
  'Level 1 (1 to 2 marks): a few comments on the writing, with suitable quotations, but the explanations stay brief. An answer on language only, or on structure only, or one that is unbalanced between them, cannot go above this level.',
  'Level 2 (3 to 4 marks): explains how both the language and the structure create effects, with well-matched quotations.',
  'Level 3 (5 to 6 marks): analyses closely how both the language and the structure work on the reader, with carefully picked quotations that sharpen every point.',
]

const Q4_LEVELS = [
  'Level 1 (1 to 3 marks): mostly describes what happens. Opinions are given without reasons, and there are few quotations.',
  'Level 2 (4 to 6 marks): comments on what happens and offers simple opinions, backed by quotations that fit but are not explored.',
  'Level 3 (7 to 9 marks): explains how the writing creates the effect and gives a reasoned view of how well it works, with suitable quotations.',
  'Level 4 (10 to 12 marks): analyses the extract and builds a well-argued judgement, with detailed quotations backing up every point.',
  'Level 5 (13 to 15 marks): evaluates the extract as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
  "From Level 2 up, comments on the writer's techniques earn credit only when they support the judgement of how successful the writing is.",
]

const WRITING_LEVELS = [
  'AO5, 24 marks, for content and organisation, on five levels: 1 to 4, some ideas but little sense of purpose or reader; 5 to 9, a clear purpose and a steady tone, with ideas in order and in paragraphs; 10 to 14, ideas and techniques chosen to suit the task, each building on the last; 15 to 19, shaped deliberately to affect the reader, with tone, style and structure under control; 20 to 24, a confident voice that steers the reader in subtle ways, with the whole piece holding together.',
  'AO6, 16 marks, for vocabulary, sentence structure, spelling and punctuation, on five levels: 1 to 4, simple words and frequent errors; 5 to 7, everyday words spelt correctly, punctuation mostly right, sentences beginning to vary; 8 to 10, good word choice, a mix of punctuation used correctly, sentences shaped for the purpose; 11 to 13, words chosen with care, only the odd slip, punctuation placed to make meaning clear; 14 to 16, ambitious vocabulary used with purpose, errors so rare they never get in the way, a full range of sentences each chosen for its effect.',
  'The two marks are added together. Answer one of the two tasks only.',
]

const WRITING_REWARDS = [
  'A clear purpose, and a voice that suits the task and the reader.',
  'A planned shape: an opening that draws the reader in, development, and a deliberate ending.',
  'Paragraphs and links that carry the reader through, and choices such as detail, dialogue or a shift in time made for effect.',
  'Varied, precise vocabulary and a range of sentence structures chosen for effect.',
  'Accurate spelling and punctuation, including commas, apostrophes and the punctuation of speech.',
]

// ─── Extracts ────────────────────────────────────────────────────────────────

// src/data/full-texts/the-war-of-the-worlds.ts, Book One, Chapter XVI: The Exodus from London: 14 paragraphs, 631 words.
const EXTRACT_06 = `My brother noticed a pale grey smoke or haze rising among the houses in front of them, and veiling the white façade of a terrace beyond the road that appeared between the backs of the villas. Mrs. Elphinstone suddenly cried out at a number of tongues of smoky red flame leaping up above the houses in front of them against the hot, blue sky. The tumultuous noise resolved itself now into the disorderly mingling of many voices, the gride of many wheels, the creaking of waggons, and the staccato of hoofs. The lane came round sharply not fifty yards from the crossroads.

“Good heavens!” cried Mrs. Elphinstone. “What is this you are driving us into?”

My brother stopped.

For the main road was a boiling stream of people, a torrent of human beings rushing northward, one pressing on another. A great bank of dust, white and luminous in the blaze of the sun, made everything within twenty feet of the ground grey and indistinct and was perpetually renewed by the hurrying feet of a dense crowd of horses and of men and women on foot, and by the wheels of vehicles of every description.

“Way!” my brother heard voices crying. “Make way!”

It was like riding into the smoke of a fire to approach the meeting point of the lane and road; the crowd roared like a fire, and the dust was hot and pungent. And, indeed, a little way up the road a villa was burning and sending rolling masses of black smoke across the road to add to the confusion.

Two men came past them. Then a dirty woman, carrying a heavy bundle and weeping. A lost retriever dog, with hanging tongue, circled dubiously round them, scared and wretched, and fled at my brother’s threat.

So much as they could see of the road Londonward between the houses to the right was a tumultuous stream of dirty, hurrying people, pent in between the villas on either side; the black heads, the crowded forms, grew into distinctness as they rushed towards the corner, hurried past, and merged their individuality again in a receding multitude that was swallowed up at last in a cloud of dust.

“Go on! Go on!” cried the voices. “Way! Way!”

One man’s hands pressed on the back of another. My brother stood at the pony’s head. Irresistibly attracted, he advanced slowly, pace by pace, down the lane.

Edgware had been a scene of confusion, Chalk Farm a riotous tumult, but this was a whole population in movement. It is hard to imagine that host. It had no character of its own. The figures poured out past the corner, and receded with their backs to the group in the lane. Along the margin came those who were on foot threatened by the wheels, stumbling in the ditches, blundering into one another.

The carts and carriages crowded close upon one another, making little way for those swifter and more impatient vehicles that darted forward every now and then when an opportunity showed itself of doing so, sending the people scattering against the fences and gates of the villas.

“Push on!” was the cry. “Push on! They are coming!”

In one cart stood a blind man in the uniform of the Salvation Army, gesticulating with his crooked fingers and bawling, “Eternity! Eternity!” His voice was hoarse and very loud so that my brother could hear him long after he was lost to sight in the dust. Some of the people who crowded in the carts whipped stupidly at their horses and quarrelled with other drivers; some sat motionless, staring at nothing with miserable eyes; some gnawed their hands with thirst, or lay prostrate in the bottoms of their conveyances. The horses’ bits were covered with foam, their eyes bloodshot.`

const EXTRACT_06_SOURCE =
  'H. G. Wells, The War of the Worlds (1898), Book One, from Chapter 16, The Exodus from London'

// src/data/full-texts/silas-marner.ts, Chapter IV: 1 paragraph, 728 words. Italic marks dropped: 2.
const EXTRACT_07 = `Nothing at that moment could be much more inviting to Dunsey than the bright fire on the brick hearth: he walked in and seated himself by it at once. There was something in front of the fire, too, that would have been inviting to a hungry man, if it had been in a different stage of cooking. It was a small bit of pork suspended from the kettle-hanger by a string passed through a large door-key, in a way known to primitive housekeepers unpossessed of jacks. But the pork had been hung at the farthest extremity of the hanger, apparently to prevent the roasting from proceeding too rapidly during the owner’s absence. The old staring simpleton had hot meat for his supper, then? thought Dunstan. People had always said he lived on mouldy bread, on purpose to check his appetite. But where could he be at this time, and on such an evening, leaving his supper in this stage of preparation, and his door unfastened? Dunstan’s own recent difficulty in making his way suggested to him that the weaver had perhaps gone outside his cottage to fetch in fuel, or for some such brief purpose, and had slipped into the Stone-pit. That was an interesting idea to Dunstan, carrying consequences of entire novelty. If the weaver was dead, who had a right to his money? Who would know where his money was hidden? Who would know that anybody had come to take it away? He went no farther into the subtleties of evidence: the pressing question, “Where is the money?” now took such entire possession of him as to make him quite forget that the weaver’s death was not a certainty. A dull mind, once arriving at an inference that flatters a desire, is rarely able to retain the impression that the notion from which the inference started was purely problematic. And Dunstan’s mind was as dull as the mind of a possible felon usually is. There were only three hiding-places where he had ever heard of cottagers’ hoards being found: the thatch, the bed, and a hole in the floor. Marner’s cottage had no thatch; and Dunstan’s first act, after a train of thought made rapid by the stimulus of cupidity, was to go up to the bed; but while he did so, his eyes travelled eagerly over the floor, where the bricks, distinct in the fire-light, were discernible under the sprinkling of sand. But not everywhere; for there was one spot, and one only, which was quite covered with sand, and sand showing the marks of fingers, which had apparently been careful to spread it over a given space. It was near the treddles of the loom. In an instant Dunstan darted to that spot, swept away the sand with his whip, and, inserting the thin end of the hook between the bricks, found that they were loose. In haste he lifted up two bricks, and saw what he had no doubt was the object of his search; for what could there be but money in those two leathern bags? And, from their weight, they must be filled with guineas. Dunstan felt round the hole, to be certain that it held no more; then hastily replaced the bricks, and spread the sand over them. Hardly more than five minutes had passed since he entered the cottage, but it seemed to Dunstan like a long while; and though he was without any distinct recognition of the possibility that Marner might be alive, and might re-enter the cottage at any moment, he felt an undefinable dread laying hold on him, as he rose to his feet with the bags in his hand. He would hasten out into the darkness, and then consider what he should do with the bags. He closed the door behind him immediately, that he might shut in the stream of light: a few steps would be enough to carry him beyond betrayal by the gleams from the shutter-chinks and the latch-hole. The rain and darkness had got thicker, and he was glad of it; though it was awkward walking with both hands filled, so that it was as much as he could do to grasp his whip along with one of the bags. But when he had gone a yard or two, he might take his time. So he stepped forward into the darkness.`

const EXTRACT_07_SOURCE = 'George Eliot, Silas Marner (1861), from Chapter 4'

// src/data/full-texts/a-christmas-carol.ts, Stave III: The Second of the Three Spirits: 7 paragraphs, 631 words.
const EXTRACT_08 = `Now, being prepared for almost anything, he was not by any means prepared for nothing; and, consequently, when the Bell struck One, and no shape appeared, he was taken with a violent fit of trembling. Five minutes, ten minutes, a quarter of an hour went by, yet nothing came. All this time, he lay upon his bed, the very core and centre of a blaze of ruddy light, which streamed upon it when the clock proclaimed the hour; and which, being only light, was more alarming than a dozen ghosts, as he was powerless to make out what it meant, or would be at; and was sometimes apprehensive that he might be at that very moment an interesting case of spontaneous combustion, without having the consolation of knowing it. At last, however, he began to think--as you or I would have thought at first; for it is always the person not in the predicament who knows what ought to have been done in it, and would unquestionably have done it too--at last, I say, he began to think that the source and secret of this ghostly light might be in the adjoining room, from whence, on further tracing it, it seemed to shine. This idea taking full possession of his mind, he got up softly and shuffled in his slippers to the door.

The moment Scrooge's hand was on the lock, a strange voice called him by his name, and bade him enter. He obeyed.

It was his own room. There was no doubt about that. But it had undergone a surprising transformation. The walls and ceiling were so hung with living green, that it looked a perfect grove; from every part of which, bright gleaming berries glistened. The crisp leaves of holly, mistletoe, and ivy reflected back the light, as if so many little mirrors had been scattered there; and such a mighty blaze went roaring up the chimney, as that dull petrification of a hearth had never known in Scrooge's time, or Marley's, or for many and many a winter season gone. Heaped up on the floor, to form a kind of throne, were turkeys, geese, game, poultry, brawn, great joints of meat, sucking-pigs, long wreaths of sausages, mince-pies, plum-puddings, barrels of oysters, red-hot chestnuts, cherry-cheeked apples, juicy oranges, luscious pears, immense twelfth-cakes, and seething bowls of punch, that made the chamber dim with their delicious steam. In easy state upon this couch, there sat a jolly Giant, glorious to see; who bore a glowing torch, in shape not unlike Plenty's horn, and held it up, high up, to shed its light on Scrooge, as he came peeping round the door.

"Come in!" exclaimed the Ghost. "Come in! and know me better, man!"

Scrooge entered timidly, and hung his head before this Spirit. He was not the dogged Scrooge he had been; and though the Spirit's eyes were clear and kind, he did not like to meet them.

"I am the Ghost of Christmas Present," said the Spirit. "Look upon me!"

Scrooge reverently did so. It was clothed in one simple green robe, or mantle, bordered with white fur. This garment hung so loosely on the figure, that its capacious breast was bare, as if disdaining to be warded or concealed by any artifice. Its feet, observable beneath the ample folds of the garment, were also bare; and on its head it wore no other covering than a holly wreath, set here and there with shining icicles. Its dark brown curls were long and free; free as its genial face, its sparkling eye, its open hand, its cheery voice, its unconstrained demeanour, and its joyful air. Girded round its middle was an antique scabbard; but no sword was in it, and the ancient sheath was eaten up with rust.`

const EXTRACT_08_SOURCE = 'Charles Dickens, A Christmas Carol (1843), from Stave 3'

// src/data/full-texts/the-scarlet-letter.ts, Chapter II: The Market-place: 3 paragraphs, 678 words.
const EXTRACT_09 = `The door of the jail being flung open from within there appeared, in the first place, like a black shadow emerging into sunshine, the grim and grisly presence of the town-beadle, with a sword by his side, and his staff of office in his hand. This personage prefigured and represented in his aspect the whole dismal severity of the Puritanic code of law, which it was his business to administer in its final and closest application to the offender. Stretching forth the official staff in his left hand, he laid his right upon the shoulder of a young woman, whom he thus drew forward, until, on the threshold of the prison-door, she repelled him, by an action marked with natural dignity and force of character, and stepped into the open air as if by her own free will. She bore in her arms a child, a baby of some three months old, who winked and turned aside its little face from the too vivid light of day; because its existence, heretofore, had brought it acquaintance only with the grey twilight of a dungeon, or other darksome apartment of the prison.

When the young woman—the mother of this child—stood fully revealed before the crowd, it seemed to be her first impulse to clasp the infant closely to her bosom; not so much by an impulse of motherly affection, as that she might thereby conceal a certain token, which was wrought or fastened into her dress. In a moment, however, wisely judging that one token of her shame would but poorly serve to hide another, she took the baby on her arm, and with a burning blush, and yet a haughty smile, and a glance that would not be abashed, looked around at her townspeople and neighbours. On the breast of her gown, in fine red cloth, surrounded with an elaborate embroidery and fantastic flourishes of gold thread, appeared the letter A. It was so artistically done, and with so much fertility and gorgeous luxuriance of fancy, that it had all the effect of a last and fitting decoration to the apparel which she wore, and which was of a splendour in accordance with the taste of the age, but greatly beyond what was allowed by the sumptuary regulations of the colony.

The young woman was tall, with a figure of perfect elegance on a large scale. She had dark and abundant hair, so glossy that it threw off the sunshine with a gleam; and a face which, besides being beautiful from regularity of feature and richness of complexion, had the impressiveness belonging to a marked brow and deep black eyes. She was ladylike, too, after the manner of the feminine gentility of those days; characterised by a certain state and dignity, rather than by the delicate, evanescent, and indescribable grace which is now recognised as its indication. And never had Hester Prynne appeared more ladylike, in the antique interpretation of the term, than as she issued from the prison. Those who had before known her, and had expected to behold her dimmed and obscured by a disastrous cloud, were astonished, and even startled, to perceive how her beauty shone out, and made a halo of the misfortune and ignominy in which she was enveloped. It may be true that, to a sensitive observer, there was some thing exquisitely painful in it. Her attire, which indeed, she had wrought for the occasion in prison, and had modelled much after her own fancy, seemed to express the attitude of her spirit, the desperate recklessness of her mood, by its wild and picturesque peculiarity. But the point which drew all eyes, and, as it were, transfigured the wearer—so that both men and women who had been familiarly acquainted with Hester Prynne were now impressed as if they beheld her for the first time—was that SCARLET LETTER, so fantastically embroidered and illuminated upon her bosom. It had the effect of a spell, taking her out of the ordinary relations with humanity, and enclosing her in a sphere by herself.`

const EXTRACT_09_SOURCE =
  'Nathaniel Hawthorne, The Scarlet Letter (1850), from Chapter 2, The Market-place'

// src/data/full-texts/silas-marner.ts, Chapter XII: 3 paragraphs, 756 words. Italic marks dropped: 1.
const EXTRACT_10 = `But where was Silas Marner while this strange visitor had come to his hearth? He was in the cottage, but he did not see the child. During the last few weeks, since he had lost his money, he had contracted the habit of opening his door and looking out from time to time, as if he thought that his money might be somehow coming back to him, or that some trace, some news of it, might be mysteriously on the road, and be caught by the listening ear or the straining eye. It was chiefly at night, when he was not occupied in his loom, that he fell into this repetition of an act for which he could have assigned no definite purpose, and which can hardly be understood except by those who have undergone a bewildering separation from a supremely loved object. In the evening twilight, and later whenever the night was not dark, Silas looked out on that narrow prospect round the Stone-pits, listening and gazing, not with hope, but with mere yearning and unrest.

This morning he had been told by some of his neighbours that it was New Year’s Eve, and that he must sit up and hear the old year rung out and the new rung in, because that was good luck, and might bring his money back again. This was only a friendly Raveloe-way of jesting with the half-crazy oddities of a miser, but it had perhaps helped to throw Silas into a more than usually excited state. Since the on-coming of twilight he had opened his door again and again, though only to shut it immediately at seeing all distance veiled by the falling snow. But the last time he opened it the snow had ceased, and the clouds were parting here and there. He stood and listened, and gazed for a long while—there was really something on the road coming towards him then, but he caught no sign of it; and the stillness and the wide trackless snow seemed to narrow his solitude, and touched his yearning with the chill of despair. He went in again, and put his right hand on the latch of the door to close it—but he did not close it: he was arrested, as he had been already since his loss, by the invisible wand of catalepsy, and stood like a graven image, with wide but sightless eyes, holding open his door, powerless to resist either the good or the evil that might enter there.

When Marner’s sensibility returned, he continued the action which had been arrested, and closed his door, unaware of the chasm in his consciousness, unaware of any intermediate change, except that the light had grown dim, and that he was chilled and faint. He thought he had been too long standing at the door and looking out. Turning towards the hearth, where the two logs had fallen apart, and sent forth only a red uncertain glimmer, he seated himself on his fireside chair, and was stooping to push his logs together, when, to his blurred vision, it seemed as if there were gold on the floor in front of the hearth. Gold!—his own gold—brought back to him as mysteriously as it had been taken away! He felt his heart begin to beat violently, and for a few moments he was unable to stretch out his hand and grasp the restored treasure. The heap of gold seemed to glow and get larger beneath his agitated gaze. He leaned forward at last, and stretched forth his hand; but instead of the hard coin with the familiar resisting outline, his fingers encountered soft warm curls. In utter amazement, Silas fell on his knees and bent his head low to examine the marvel: it was a sleeping child—a round, fair thing, with soft yellow rings all over its head. Could this be his little sister come back to him in a dream—his little sister whom he had carried about in his arms for a year before she died, when he was a small boy without shoes or stockings? That was the first thought that darted across Silas’s blank wonderment. Was it a dream? He rose to his feet again, pushed his logs together, and, throwing on some dried leaves and sticks, raised a flame; but the flame did not disperse the vision—it only lit up more distinctly the little round form of the child, and its shabby clothing. It was very much like his little sister.`

const EXTRACT_10_SOURCE = 'George Eliot, Silas Marner (1861), from Chapter 12'

// ─── Edexcel Paper 1 mock exams, 06 to 10 ────────────────────────────────────────

export const edexcelP1B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 06: H. G. Wells, The War of the Worlds, Book One, Chapter 16 (the flight from London)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-06',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-06-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, the narrator tells what happened to his brother as the people of London fled from the invading Martians. The brother is travelling with two women he has helped to escape, Mrs Elphinstone and her sister-in-law, in their small pony carriage, and is leading the pony along a lane north of London when they come to a main road.\n\nWords you may need: a villa is a large house in a suburb; gride is a harsh, grating noise; Londonward means towards London; a host is a huge crowd; Edgware and Chalk Farm are places the brother passed through earlier; conveyances are vehicles.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-06-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of the extract.\n\nGive one word or phrase from it which shows that something is burning ahead.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"tongues of smoky red flame"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "a pale grey smoke or haze"; "smoke or haze rising among the houses"; "tongues of smoky red flame"; "smoky red flame".',
            ],
          },
          {
            id: 'edexcel-p1-06-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nFor the main road was a boiling stream of people, a torrent of human beings rushing northward, one pressing on another. A great bank of dust, white and luminous in the blaze of the sun, made everything within twenty feet of the ground grey and indistinct and was perpetually renewed by the hurrying feet of a dense crowd of horses and of men and women on foot, and by the wheels of vehicles of every description.\n\n“Way!” my brother heard voices crying. “Make way!”\n\nIt was like riding into the smoke of a fire to approach the meeting point of the lane and road; the crowd roared like a fire, and the dust was hot and pungent. And, indeed, a little way up the road a villa was burning and sending rolling masses of black smoke across the road to add to the confusion.\n\nGive two ways in which this part of the extract shows how crowded the main road is. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The road was "a torrent of human beings rushing northward".\n2. The people were so close together that they were "one pressing on another".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: it is "a boiling stream of people"; it is "a torrent of human beings rushing northward"; people are "one pressing on another"; there is "a dense crowd of horses and of men and women on foot"; there are "vehicles of every description"; voices are crying "Make way!"; "the crowd roared like a fire".',
            ],
          },
          {
            id: 'edexcel-p1-06-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "One man’s hands pressed on the back of another" to the end of the extract.\n\nIn this part of the extract, how does the writer use language and structure to show the panic of the crowd?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer begins this part with a single, close detail, "One man\'s hands pressed on the back of another.", and then widens the view to the whole road. This zooming out makes the scale of the panic overwhelming. He compares the scene with earlier ones, "Edgware had been a scene of confusion, Chalk Farm a riotous tumult, but this was a whole population in movement", so that this scene outdoes everything the brother has already passed through, and the word "but" marks it as the climax. The narrator even admits that "It is hard to imagine that host", as though language can barely contain it.\n\nThe crowd is shown as a mass rather than as people. "It had no character of its own", and the participles "stumbling in the ditches, blundering into one another" create a sense of constant, clumsy movement without direction. The faster vehicles "darted forward", "sending the people scattering against the fences and gates of the villas", which shows how fear makes people careless of each other.\n\nThe one-line paragraph "Push on! They are coming!" breaks into the description, and because "They" are never named, the reader feels the same fear of an unseen enemy. The final paragraph turns back to individuals: a blind man in a cart, "gesticulating with his crooked fingers and bawling", and then a pattern of "some" that lists different kinds of despair: "some sat motionless, staring at nothing with miserable eyes; some gnawed their hands with thirst". The part ends on a short, stark sentence, "The horses\' bits were covered with foam, their eyes bloodshot.", which shows that even the animals are terrified and exhausted.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The narrator admits "It is hard to imagine that host", as if words can barely hold it.',
                '"It had no character of its own" turns the people into a single mass.',
                'The participles "stumbling in the ditches, blundering into one another" suggest constant, clumsy movement.',
                'The faster vehicles "darted forward", "sending the people scattering", which shows fear making people careless of each other.',
                'The pattern "some sat motionless ... some gnawed their hands with thirst" lists different kinds of despair, and the horses\' "eyes bloodshot" show that even the animals are terrified.',
              ],
              'Structure: points you might make': [
                'The part opens on one close detail, "One man’s hands pressed on the back of another.", then widens to "a whole population in movement".',
                'The comparison with earlier scenes ("Edgware had been a scene of confusion, Chalk Farm a riotous tumult, but this") makes this the climax.',
                'The one-line paragraph "Push on! They are coming!" breaks into the description, and the unnamed "They" adds fear.',
                'The last paragraph returns to individuals and ends on a short, stark sentence about the horses.',
              ],
            },
          },
          {
            id: 'edexcel-p1-06-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create a sense of chaos and fear as ordinary people flee for their lives.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer creates chaos and fear very successfully, largely because he makes the reader approach the crowd slowly, as the brother does, and then overwhelms us with it. The extract opens with warning signs rather than the thing itself: "a pale grey smoke or haze rising among the houses", then "tongues of smoky red flame", and then a noise that resolves into "the disorderly mingling of many voices, the gride of many wheels, the creaking of waggons, and the staccato of hoofs". This list of sounds builds tension before anything is seen. Mrs Elphinstone\'s frightened question, "What is this you are driving us into?", and the three-word paragraph "My brother stopped." act as a pause, like a held breath, before the reveal.\n\nWhen the main road appears, the writer describes the crowd as a force of nature. It is "a boiling stream of people, a torrent of human beings rushing northward, one pressing on another", and later "the crowd roared like a fire". These comparisons with water and fire suggest that the crowd is beyond anyone\'s control and dangerous in itself. The "great bank of dust" makes everything "grey and indistinct", so that individuals vanish: people rush past and then "merged their individuality again in a receding multitude that was swallowed up at last in a cloud of dust". This is one of the most frightening ideas in the extract, that in such a panic a person stops being a person.\n\nThe writer balances this with small, human details, which I find the most moving part. "a dirty woman, carrying a heavy bundle and weeping" and "A lost retriever dog, with hanging tongue", "scared and wretched", make the disaster personal. The reader can picture each of them, and the dog in particular shows that everything familiar has been turned upside down.\n\nThe cries in their short paragraphs, "Make way!", "Go on! Go on!" and "Push on! They are coming!", increase the pace and the fear. Because "They" are never seen in this extract, the Martians are known only through the crowd\'s terror, which is perhaps more powerful than a description of them would be. The brother himself is "Irresistibly attracted" and advances "pace by pace", which creates suspense, because the reader fears that he and the women will be swept into the torrent.\n\nSome readers might find the narrator\'s voice too distant. He is retelling what his brother saw, and he stops to comment, as in "It is hard to imagine that host" and "It had no character of its own", which could slow the action. However, these comments also give the feeling of a witness struggling to describe something that has never happened before, which makes the scene more believable. The final paragraph is especially effective, moving from the blind man "bawling" in his cart to the people who "sat motionless, staring at nothing with miserable eyes", and ending with "The horses\' bits were covered with foam, their eyes bloodshot." The last image, of exhausted animals, leaves the reader with a lasting sense of a whole society breaking down. Overall the extract is a powerful and convincing picture of mass panic.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The crowd is approached slowly: smoke, "tongues of smoky red flame" and a list of sounds come before the road is seen, and "My brother stopped." holds the moment.',
                'The crowd is a force of nature, "a boiling stream of people", which "roared like a fire".',
                'The dust swallows individuals: people "merged their individuality again in a receding multitude".',
                'Small human details, the weeping woman and the "lost retriever dog", make the disaster personal.',
                'The repeated cries, ending "Push on! They are coming!", raise the pace, and the unseen Martians are all the more frightening.',
                'The brother, "Irresistibly attracted", may be swept in. Some may find the narrator\'s comments ("It is hard to imagine that host") distancing; others that they make it read like a true record.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-06-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-06-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, were part of a huge crowd. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a packed railway station concourse, with every face turned up towards a departures board. Picture 2: a long, empty motorway at dawn, with a single car on it.\n\nWrite about a time when everyone had to leave. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThe fireworks were due to start at nine, and by half past eight the whole of the riverbank had become one enormous, breathing animal.\n\nI had been looking forward to it for weeks. It was the first year that Mum had let me take my little brother, Sami, without her, and I had promised, three times, with my hand on my heart, that I would not let go of him. He was seven, and he wore a glowing green bracelet on each wrist so that I could find him in the dark. He was so excited that he could not stand still. He hopped. He spun. He asked every thirty seconds whether it was nine o\'clock yet.\n\nThe crowd thickened around us like a tide coming in. At first there was room to breathe, room for families on folding chairs and couples sharing chips out of paper cones. Then the gaps began to close. Elbows pressed into my back. A pushchair rolled over my foot. The air smelt of onions and candyfloss and damp coats, and above it all, tinny music leaked from a dozen phones at once.\n\nAt nine exactly, the first rocket went up. It climbed in a thin gold line, paused, and burst into a huge chrysanthemum of light that hung over the water and then slowly began to fall. Ten thousand people breathed out together. "Oooh," said the crowd, as if it had one throat.\n\nThat was when the surge came.\n\nI never found out what started it. Perhaps someone at the back pushed forward to see better. Perhaps it was nothing at all. But suddenly the whole mass of us lurched, like passengers on a bus that brakes too hard, and I was carried three steps sideways without moving my feet. Sami\'s hand was ripped out of mine. One moment I could feel his small, hot fingers. The next there was nothing but somebody\'s coat sleeve.\n\nI shouted his name, but my voice disappeared into the noise. Above us the sky was exploding in red and silver, and every face around me was turned upwards, lit up and laughing, while I was looking down, down, at legs and bags and pushchair wheels. I could not see a single green light.\n\nI do not know how long it lasted. A minute, perhaps. It felt like a year. I pushed and apologised and pushed again, and the crowd let me through grudgingly, an inch at a time, the way a hedge lets you through. My heart was beating so hard that it seemed to shake my whole body.\n\nAnd then I saw it: a thin green circle, low down by the railings, waving frantically from side to side. Sami had climbed onto the bottom bar of the railings and was holding up both his arms, exactly as Mum had told him to, years ago, in case he ever got lost.\n\nI reached him just as the finale began. The sky filled with so much light that, for a moment, the river looked as though it were on fire. Sami was crying and laughing at the same time, and so was I. I lifted him onto my shoulders, although he was really too big, and held on to both his ankles very tightly.\n\n"You missed the best bit," he told me, wiping his nose on my hair.\n\n"No, I didn\'t," I said.\n\nWe never told Mum. But every year, when the fireworks start, Sami texts me a picture of a green glowing bracelet, and nothing else.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about a concert, a match, a festival or a march, or a crowd that turned frightening.',
                'Question 6 could use the station, the empty motorway, or neither picture: a fire alarm that was real, a flood, or a family leaving home for good.',
                'Like the extract, a strong piece might move between the whole crowd and single, telling details.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 07: George Eliot, Silas Marner, Chapter 4 (Dunstan in the weaver's cottage)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-07',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-07-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Dunstan Cass, the second son of Squire Cass, the greatest man in the village of Raveloe, is making his way home on foot through the rain and darkness after a hunting accident in which his brother's horse was killed. He has come to the cottage of Silas Marner, a lonely weaver who is said to keep a hoard of gold, hoping to make him lend some of it. The door is unfastened, and Silas is not there.\n\nWords you may need: Dunsey is Dunstan's nickname; a jack is a device for turning meat as it roasts, and the kettle-hanger is a hook above the fire; the Stone-pit is a flooded quarry beside the cottage; cupidity means greed; a felon is a criminal; the treddles are the foot pedals of a loom; leathern means made of leather; guineas are gold coins.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-07-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows what draws Dunstan into the cottage.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"the bright fire on the brick hearth"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "the bright fire on the brick hearth"; "the bright fire"; "fire".',
            ],
          },
          {
            id: 'edexcel-p1-07-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nDunstan’s own recent difficulty in making his way suggested to him that the weaver had perhaps gone outside his cottage to fetch in fuel, or for some such brief purpose, and had slipped into the Stone-pit. That was an interesting idea to Dunstan, carrying consequences of entire novelty. If the weaver was dead, who had a right to his money? Who would know where his money was hidden? Who would know that anybody had come to take it away? He went no farther into the subtleties of evidence: the pressing question, “Where is the money?” now took such entire possession of him as to make him quite forget that the weaver’s death was not a certainty.\n\nGive two ways in which this part of the extract shows that Dunstan is thinking only of the money. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. He thinks the weaver may be dead and at once asks "who had a right to his money?"\n2. The question "Where is the money?" takes "entire possession of him".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: he treats the weaver\'s possible death as just "an interesting idea"; he asks himself "who had a right to his money?"; he wonders "Who would know where his money was hidden?"; the question "Where is the money?" takes "entire possession of him"; he forgets "that the weaver’s death was not a certainty".',
            ],
          },
          {
            id: 'edexcel-p1-07-q3',
            questionNumber: 3,
            questionText:
              "Read again this part of the extract.\n\nThere were only three hiding-places where he had ever heard of cottagers’ hoards being found: the thatch, the bed, and a hole in the floor. Marner’s cottage had no thatch; and Dunstan’s first act, after a train of thought made rapid by the stimulus of cupidity, was to go up to the bed; but while he did so, his eyes travelled eagerly over the floor, where the bricks, distinct in the fire-light, were discernible under the sprinkling of sand. But not everywhere; for there was one spot, and one only, which was quite covered with sand, and sand showing the marks of fingers, which had apparently been careful to spread it over a given space. It was near the treddles of the loom. In an instant Dunstan darted to that spot, swept away the sand with his whip, and, inserting the thin end of the hook between the bricks, found that they were loose. In haste he lifted up two bricks, and saw what he had no doubt was the object of his search; for what could there be but money in those two leathern bags? And, from their weight, they must be filled with guineas. Dunstan felt round the hole, to be certain that it held no more; then hastily replaced the bricks, and spread the sand over them.\n\nIn this part of the extract, how does the writer use language and structure to show Dunstan's search for the money?\n\nRefer closely to the text to support your views.",
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer shows Dunstan\'s search as quick, practical and driven by greed. It begins with cold logic: there were "only three hiding-places", listed plainly as "the thatch, the bed, and a hole in the floor". The narrator then comments that his thought was "made rapid by the stimulus of cupidity", a formal phrase that judges him, since it is greed, not cleverness, that makes him quick. Even while he goes to the bed, "his eyes travelled eagerly over the floor", and the adverb "eagerly" shows how hungry he is for the money.\n\nThe structure narrows the search step by step, like a detective closing in. Marner\'s cottage "had no thatch", so the bed comes next, then the floor, and then the writer focuses on a single place with the repetition "one spot, and one only". The tiny detail of "sand showing the marks of fingers" shows how sharp his greed has made his eyes. A short sentence, "It was near the treddles of the loom.", holds the moment still before the action bursts out.\n\nThen the pace quickens through verbs and phrases of speed: "In an instant Dunstan darted to that spot, swept away the sand with his whip", and "In haste he lifted up two bricks". The question "for what could there be but money in those two leathern bags?" takes us inside his head, and its certainty shows that he has already decided the money is his. The part ends with him "hastily" replacing the bricks and spreading "the sand over them", so the floor looks just as he found it. The neat ending hides the crime, and the reader is left uneasy at how calmly it has been done.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The plain list "the thatch, the bed, and a hole in the floor" shows cold, practical reasoning.',
                'The narrator\'s phrase "made rapid by the stimulus of cupidity" judges him: greed, not cleverness, makes him quick.',
                'The adverb in "his eyes travelled eagerly over the floor" shows how hungry he is for the money.',
                'Verbs and phrases of speed ("In an instant Dunstan darted", "swept away", "In haste") quicken the pace.',
                'The question "for what could there be but money in those two leathern bags?" takes us inside his head.',
              ],
              'Structure: points you might make': [
                'The search narrows step by step, from three hiding-places to "one spot, and one only", like a detective closing in.',
                'The short sentence "It was near the treddles of the loom." holds the moment still before the action.',
                'The part ends with him spreading "the sand over them", leaving the floor as he found it and hiding the crime.',
              ],
            },
          },
          {
            id: 'edexcel-p1-07-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create tension as Dunstan steals the gold.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer creates tension very successfully, partly because she begins so calmly. Dunstan simply "walked in and seated himself" by "the bright fire on the brick hearth", and the narrator spends several sentences on Silas\'s supper, "a small bit of pork suspended from the kettle-hanger by a string passed through a large door-key". The detail is almost comic, and Dunstan\'s sneer, "The old staring simpleton had hot meat for his supper, then?", shows his contempt. Because the scene feels so ordinary, the turn towards crime is all the more disturbing.\n\nThe first real tension comes from a question: "But where could he be at this time, and on such an evening, leaving his supper in this stage of preparation, and his door unfastened?" The reader starts to wonder too. Dunstan\'s answer is chilling. He imagines that the weaver "had slipped into the Stone-pit", and instead of feeling alarm he finds this "an interesting idea". The questions that follow, "If the weaver was dead, who had a right to his money?" and "Who would know that anybody had come to take it away?", show his mind racing towards theft. By the time "the pressing question" of where the money is "took such entire possession of him", the reader knows what he will do, and the tension lies in waiting for it.\n\nAt this point the narrator steps in with a general comment: "A dull mind, once arriving at an inference that flatters a desire, is rarely able to retain the impression that the notion from which the inference started was purely problematic." Some readers may feel that this formal sentence slows the pace just when the tension is rising. However, I think it adds a different kind of tension. The narrator\'s scornful judgement that Dunstan\'s mind "was as dull as the mind of a possible felon usually is" makes us see the danger of a stupid, greedy man who acts without thinking.\n\nThe search itself is fast and exciting. It narrows from "three hiding-places" to "one spot, and one only", and verbs such as "darted" and phrases such as "In haste" speed up the action. The question "for what could there be but money in those two leathern bags?" puts us inside his excitement. Then the writer slows time down again: "Hardly more than five minutes had passed since he entered the cottage, but it seemed to Dunstan like a long while". This stretching of time makes the reader feel his nerves, and the phrase "an undefinable dread laying hold on him" suggests that some part of him knows he could be caught at any moment.\n\nThe ending is perhaps the most effective part. Dunstan shuts the door to "shut in the stream of light", and is "glad" that "The rain and darkness had got thicker", so the darkness becomes his accomplice. His hands are full, and he can barely hold his whip. The final short sentence, "So he stepped forward into the darkness.", is ominous: after telling us that the weaver might have fallen into the Stone-pit, the writer sends Dunstan into the same dark, wet night. The extract is written as one long paragraph, which might seem heavy, but its unbroken flow matches the unbroken action of the crime. Overall the writer builds tension skilfully, and the ending leaves the reader fearing what the darkness holds.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The opening is calm, even comic (the pork on a string, "The old staring simpleton"), which makes the turn to crime more shocking.',
                'The question "But where could he be at this time ...?" and the unfastened door bring unease.',
                'Dunstan treats the weaver\'s possible drowning as "an interesting idea", which is chilling.',
                'The narrator\'s comments ("A dull mind ...", "a possible felon") pause the action but sharpen our judgement of him.',
                'The search is fast and precise, and time stretches: "Hardly more than five minutes had passed ... but it seemed to Dunstan like a long while".',
                'He feels "an undefinable dread", and the last sentence, "So he stepped forward into the darkness.", leaves the tension unresolved. Some may find one long paragraph and the narrator\'s asides slow; others that the unbroken paragraph matches the unbroken action.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-07-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-07-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, were tempted to do something wrong. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a lit cottage window on a dark, rainy night, seen from outside. Picture 2: a small leather bag lying open on a stone floor, with coins spilling out of it.\n\nWrite a story with the title "The Open Door". Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThe purse was lying in the gutter outside the bus shelter, half hidden by a crisp packet, and the strange thing is that I almost walked straight past it.\n\nIt was a Thursday in November, the kind of grey afternoon that seems to get dark before it has properly got light. I was walking home from school with my hood up and my headphones in, thinking about nothing in particular, when something red caught the corner of my eye. I stopped. I bent down. It was a purse, an old-fashioned one with a gold clasp, soft and worn at the corners, as if someone had carried it every day for years.\n\nI looked up and down the street. A man was scraping ice off his windscreen at the far end. Apart from him, there was nobody.\n\nI opened it.\n\nInside, folded neatly into the back pocket, were four twenty-pound notes. Eighty pounds. I counted them twice, my fingers suddenly clumsy in my gloves. Eighty pounds was the price of the trainers I had been staring at in the shop window on the high street for three weeks. Eighty pounds was more money than I had ever held at once.\n\nA voice in my head began to talk, very calmly and reasonably. Nobody saw you, it said. Whoever lost it has probably given up already. If you hand it in, somebody at the police station will just keep it anyway. It is not stealing if you find it. Finders keepers. Everybody knows that.\n\nI put the notes back. Then I took them out again.\n\nThere was a card in the front pocket of the purse. Not a bank card, but a small, yellowing library card, with a name written on it in careful, old-fashioned handwriting: Mrs E. Morrison, 14 Alder Close. Alder Close was the next street to mine. I passed the end of it every single morning.\n\nBehind the library card there was a photograph, soft and creased with age. A young man in a soldier\'s uniform was squinting into the sun and smiling. Someone had written on the back, in the same careful hand: Jim, 1952.\n\nThe voice in my head went quiet.\n\nI stood in the bus shelter for a long time, while the street lights flickered on one after another and the man at the end of the road drove away. I thought about the trainers. Then I thought about a woman who had carried a photograph of Jim in her purse for seventy years, and who might at that very moment be turning her house upside down, looking for it.\n\nNumber 14 had a blue door and a brass knocker shaped like a fox. The woman who opened it was tiny, with white hair and red eyes, as if she had been crying. When she saw the purse in my hand, she put both her hands over her mouth.\n\n"Oh," she said. "Oh, my goodness. I thought I\'d lost him."\n\nShe meant the photograph. She did not even look at the money.\n\nShe tried to give me a twenty-pound note, and I said no, and she insisted, and I said no again, and in the end we compromised on a cup of tea and three slices of the best lemon cake I have ever eaten. She told me about Jim, who had been her husband for fifty-one years. She told me that he had always said that the most important things in life were the ones that could not be bought.\n\nI still have not got those trainers. But I go to Alder Close every Sunday now, and Mrs Morrison always has the kettle on.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about a moment of temptation, such as found money, a secret or a chance to cheat, and what happened next.',
                'Question 6 could use the window, the bag of coins, or neither picture.',
                "Like the extract, a strong piece might slow down time at the key moment and let the reader inside a character's racing thoughts.",
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 08: Charles Dickens, A Christmas Carol, Stave 3 (the Ghost of Christmas Present)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-08',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-08-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Ebenezer Scrooge, a mean and lonely old businessman, has been warned by the ghost of his dead partner, Jacob Marley, that three spirits will visit him. The first has already shown him scenes from his past. Now he lies awake in bed, waiting for the second.\n\nWords you may need: spontaneous combustion is bursting into flame for no reason; petrification means turning to stone; brawn is a cold meat dish; twelfth-cakes are rich cakes eaten at Twelfth Night; Plenty's horn is a horn overflowing with food, a sign of plenty; a scabbard, or sheath, is the case for a sword.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-08-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows how Scrooge reacts when no spirit appears.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"a violent fit of trembling"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "taken with a violent fit of trembling"; "a violent fit of trembling"; "trembling".',
            ],
          },
          {
            id: 'edexcel-p1-08-q2',
            questionNumber: 2,
            questionText:
              "Read again this part of the extract.\n\nIt was his own room. There was no doubt about that. But it had undergone a surprising transformation. The walls and ceiling were so hung with living green, that it looked a perfect grove; from every part of which, bright gleaming berries glistened. The crisp leaves of holly, mistletoe, and ivy reflected back the light, as if so many little mirrors had been scattered there; and such a mighty blaze went roaring up the chimney, as that dull petrification of a hearth had never known in Scrooge's time, or Marley's, or for many and many a winter season gone. Heaped up on the floor, to form a kind of throne, were turkeys, geese, game, poultry, brawn, great joints of meat, sucking-pigs, long wreaths of sausages, mince-pies, plum-puddings, barrels of oysters, red-hot chestnuts, cherry-cheeked apples, juicy oranges, luscious pears, immense twelfth-cakes, and seething bowls of punch, that made the chamber dim with their delicious steam. In easy state upon this couch, there sat a jolly Giant, glorious to see; who bore a glowing torch, in shape not unlike Plenty's horn, and held it up, high up, to shed its light on Scrooge, as he came peeping round the door.\n\nGive two ways in which Scrooge's room has changed. You may answer in your own words or with quotations.",
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The walls and ceiling are "hung with living green", so that it looks like a grove.\n2. Food is heaped up on the floor "to form a kind of throne".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: the walls and ceiling are "hung with living green"; it "looked a perfect grove", with "bright gleaming berries"; the leaves reflect the light "as if so many little mirrors had been scattered there"; "a mighty blaze went roaring up the chimney"; food is heaped up on the floor "to form a kind of throne"; a "jolly Giant" sits on the heap of food with a glowing torch.',
            ],
          },
          {
            id: 'edexcel-p1-08-q3',
            questionNumber: 3,
            questionText:
              'Read again this part of the extract.\n\n"Come in!" exclaimed the Ghost. "Come in! and know me better, man!"\n\nScrooge entered timidly, and hung his head before this Spirit. He was not the dogged Scrooge he had been; and though the Spirit\'s eyes were clear and kind, he did not like to meet them.\n\n"I am the Ghost of Christmas Present," said the Spirit. "Look upon me!"\n\nScrooge reverently did so. It was clothed in one simple green robe, or mantle, bordered with white fur. This garment hung so loosely on the figure, that its capacious breast was bare, as if disdaining to be warded or concealed by any artifice. Its feet, observable beneath the ample folds of the garment, were also bare; and on its head it wore no other covering than a holly wreath, set here and there with shining icicles. Its dark brown curls were long and free; free as its genial face, its sparkling eye, its open hand, its cheery voice, its unconstrained demeanour, and its joyful air. Girded round its middle was an antique scabbard; but no sword was in it, and the ancient sheath was eaten up with rust.\n\nIn this part of the extract, how does the writer use language and structure to present the Ghost of Christmas Present?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'In this part, the writer presents the Ghost first through what it says, and only then describes how it looks. Its exclamations, "Come in! and know me better, man!", are warm and commanding at the same time, and the invitation to "know me better" suggests that it wants a relationship with Scrooge, not just to frighten him. Scrooge\'s reaction is the opposite: he enters "timidly" and "hung his head", and the writer tells us that "He was not the dogged Scrooge he had been". Even though the Spirit\'s eyes are "clear and kind", Scrooge "did not like to meet them", which shows that kindness makes him feel ashamed.\n\nThe command "Look upon me!" leads straight into the description, so the reader looks at the Ghost as Scrooge does, from the robe down to the feet and up to the head. The language suggests openness and honesty. It wears "one simple green robe", and the colour green links it with growing things, like the "holly wreath" on its head. Its breast is bare, "as if disdaining to be warded or concealed by any artifice", which suggests that it has nothing to hide, unlike Scrooge.\n\nThe description then builds through repetition. "Its dark brown curls were long and free; free as its genial face" repeats the word "free", and it is followed by a list in which each item begins with "its": "its sparkling eye, its open hand, its cheery voice, its unconstrained demeanour, and its joyful air". The list itself feels generous and overflowing, like the Ghost. Finally the writer ends on an unexpected detail: "an antique scabbard; but no sword was in it, and the ancient sheath was eaten up with rust". Ending with an empty, rusted weapon suggests that this spirit comes in peace.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The Ghost\'s exclamations, "Come in! and know me better, man!", are warm and commanding, while Scrooge enters "timidly".',
                'Its eyes are "clear and kind", yet Scrooge "did not like to meet them", which shows his shame.',
                'Its "simple green robe" and bare breast, "disdaining to be warded or concealed by any artifice", suggest honesty and openness.',
                'The repeated word "free" and the list "its sparkling eye, its open hand, its cheery voice" build a picture of generosity and joy.',
                'The empty scabbard, "eaten up with rust", suggests peace.',
              ],
              'Structure: points you might make': [
                'The Ghost speaks before it is described, so its welcome comes first.',
                'Its command "Look upon me!" leads straight into the description, so the reader looks as Scrooge does.',
                'The description moves over the robe, the feet, the head and the face, and ends on the unexpected detail of the rusted sheath.',
              ],
            },
          },
          {
            id: 'edexcel-p1-08-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create a sense of wonder.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is extremely successful in creating a sense of wonder, and one reason is that he first makes us expect something quite different. The extract opens with Scrooge waiting for a ghost, and the narrator jokes that "being prepared for almost anything, he was not by any means prepared for nothing". The light that streams upon his bed is "more alarming than a dozen ghosts", and Scrooge worries that he might be "an interesting case of spontaneous combustion". This humour builds a kind of comic suspense, so that when the wonder comes, it comes as a delightful surprise rather than a fright.\n\nThe narrator also speaks directly to the reader, saying that Scrooge began to think "as you or I would have thought at first". This chatty voice makes us feel that we are in the room with him, peering round the door, and so we share his amazement when it opens.\n\nThe moment of transformation is cleverly structured. Three short sentences, "It was his own room. There was no doubt about that. But it had undergone a surprising transformation.", make the reader stop and look. Then the description pours out in long, rich sentences. The room is "so hung with living green, that it looked a perfect grove", and "bright gleaming berries glistened". The holly, mistletoe and ivy reflect the light "as if so many little mirrors had been scattered there", and "a mighty blaze went roaring up the chimney". These images of light, growth and warmth contrast sharply with what the hearth has been before, a "dull petrification", so the change seems almost magical. The adjective "dull" and the idea of turning to stone remind the reader of Scrooge\'s own cold heart, which makes the transformation of the room feel like a promise of what might happen to him.\n\nThe writer\'s list of food is perhaps the most wonderful part. "turkeys, geese, game, poultry, brawn, great joints of meat, sucking-pigs, long wreaths of sausages" goes on and on, through "red-hot chestnuts, cherry-cheeked apples, juicy oranges, luscious pears", until it ends in "seething bowls of punch, that made the chamber dim with their delicious steam". The length of the list is itself overwhelming, and the adjectives appeal to the senses of sight, taste and smell. On top of it all sits "a jolly Giant, glorious to see", holding a torch "high up". The Giant on a throne of food is a fairy-tale image, and it fills the reader with the same awe as Scrooge.\n\nSome readers might find the list too long, or feel that the jokes at the start take away from the mystery. However, I think the humour is exactly what makes this wonder so appealing. The Ghost is not terrifying: its eyes are "clear and kind", the narrator praises "its sparkling eye, its open hand, its cheery voice", and even its scabbard holds no sword. The wonder here is a joyful kind, full of light and warmth, and the writer achieves it brilliantly through the contrast with Scrooge\'s fear at the start.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The opening plays with suspense and humour ("prepared for almost anything, he was not by any means prepared for nothing"), so the wonder arrives after comic fear.',
                'The narrator talks to the reader ("as you or I would have thought at first"), drawing us into the room.',
                'Short sentences ("It was his own room. There was no doubt about that.") lead into "a surprising transformation".',
                'Light and life replace the "dull petrification of a hearth": "living green", berries that glisten, leaves like "so many little mirrors", a blaze "roaring up the chimney".',
                'The long list of food overwhelms the senses, ending in "delicious steam", and the "jolly Giant" sits on it as on a throne.',
                "The Ghost's description continues the wonder. Some may find the list too long or the jokes distracting; others that the humour makes the wonder warm rather than frightening.",
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-08-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-08-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, woke up to find that everything had changed. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a room lit by a roaring fire, its walls hung with holly and ivy. Picture 2: a child pressing their face to a frosty window at night.\n\nWrite about a celebration. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 6\n\nBy six o'clock the community hall smelt of cardamom, fried onions and floor polish, and my grandmother had already told me off twice for eating the decorations.\n\nThey were not really decorations. They were sweets: tiny squares of coconut barfi, golden and dusted with green pistachio, arranged on silver trays along the back table in rows so straight that they might have been measured with a ruler. Nani had been making them for three days. Her kitchen had become a factory, every surface covered in trays, and the whole family had been sworn to secrecy. Tonight was Nana's eightieth birthday, and he thought that we were taking him out for a quiet curry.\n\nThe hall itself was nothing special. It had a scuffed wooden floor, orange plastic chairs stacked against one wall and a noticeboard advertising yoga and a lost cat called Biscuit. But we had worked on it all afternoon, and now it glowed. Strings of fairy lights looped from the beams like slow golden rivers. On every table stood a jam jar filled with marigolds, and their colour was so bright that it almost hummed.\n\nPeople kept arriving. Aunties in silk saris the colours of tropical birds, kingfisher blue and parrot green and flamingo pink. Uncles in their best suits, pulling at their collars. Cousins I had not seen since I was small, who were suddenly taller than me. Nana's old friends from the bus depot, who had driven the number 42 together for thirty years and still argued about the best route through town. The noise rose and rose, a warm wave of laughter and greetings and a dozen languages at once, until the windows seemed to rattle with it.\n\nAt half past seven my uncle switched off the lights.\n\nInstantly, a hundred people went silent. In the darkness I could hear someone's bangles chiming softly, and the hiss of the urn in the kitchen, and my own heart. Then the door opened, and there was Nana, in his good grey jacket, blinking in confusion, with my mother holding his arm.\n\nThe lights blazed on. A hundred voices shouted together. Somebody let off a party popper, and a shower of glittering paper drifted down over Nana's white hair like bright snow.\n\nFor a moment he did not move. He simply stood there and looked: at the lights, at the marigolds, at the long tables, at all the faces he had known for eighty years. I watched his own face change. First surprise, then something that looked almost like fear, and then, slowly, a smile that started in his eyes and spread until it took up his whole face.\n\n\"All of you,\" he said quietly. \"All of you came.\"\n\nThen the music started, and the dancing began, and it did not stop until the caretaker came to lock up at midnight. Nana danced with every single person in the room, even the babies. Nani's barfi vanished in twenty minutes. I ate eleven pieces, and nobody told me off at all.\n\nLater, on the way home, Nana fell asleep in the back of the car, still wearing a paper crown. In his lap, clutched in both hands, he held a single marigold.",
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about snow overnight, a new home, a piece of news, or a change inside a person rather than a place.',
                'Question 6 could use the room by the fire, the child at the window, or neither picture: a festival, a family party, a wedding or a win.',
                'Like the extract, a strong piece might build up to a moment of revelation and fill it with detail for every sense.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 09: Nathaniel Hawthorne, The Scarlet Letter, Chapter 2 (Hester leaves the prison)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-09',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-09-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nThe Scarlet Letter is set in the 1640s, in the strict Puritan settlement of Boston, in New England. In this extract, a young woman, Hester Prynne, is led out of the town jail to be shown to the crowd as a punishment for breaking the settlement's moral laws. She has been sentenced to wear the letter A on her dress for the rest of her life.\n\nWords you may need: a beadle is an officer of the law; Puritanic means belonging to the Puritans, a strict religious group; heretofore means until now; abashed means made ashamed; the sumptuary regulations were laws limiting how richly people could dress; evanescent means fading quickly; ignominy means public shame.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-09-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows that the town-beadle is a frightening figure.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"the grim and grisly presence of the town-beadle"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "like a black shadow emerging into sunshine"; "a black shadow"; "the grim and grisly presence"; "grim and grisly"; "with a sword by his side".',
            ],
          },
          {
            id: 'edexcel-p1-09-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nStretching forth the official staff in his left hand, he laid his right upon the shoulder of a young woman, whom he thus drew forward, until, on the threshold of the prison-door, she repelled him, by an action marked with natural dignity and force of character, and stepped into the open air as if by her own free will. She bore in her arms a child, a baby of some three months old, who winked and turned aside its little face from the too vivid light of day; because its existence, heretofore, had brought it acquaintance only with the grey twilight of a dungeon, or other darksome apartment of the prison.\n\nGive two ways in which this part of the extract shows that Hester is strong-willed. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. When the beadle drew her forward, "she repelled him".\n2. She "stepped into the open air as if by her own free will", as though nobody were forcing her.',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: on the threshold "she repelled him", pushing the beadle away; her action is "marked with natural dignity and force of character"; she "stepped into the open air as if by her own free will".',
            ],
          },
          {
            id: 'edexcel-p1-09-q3',
            questionNumber: 3,
            questionText:
              "Read again this part of the extract.\n\nWhen the young woman—the mother of this child—stood fully revealed before the crowd, it seemed to be her first impulse to clasp the infant closely to her bosom; not so much by an impulse of motherly affection, as that she might thereby conceal a certain token, which was wrought or fastened into her dress. In a moment, however, wisely judging that one token of her shame would but poorly serve to hide another, she took the baby on her arm, and with a burning blush, and yet a haughty smile, and a glance that would not be abashed, looked around at her townspeople and neighbours. On the breast of her gown, in fine red cloth, surrounded with an elaborate embroidery and fantastic flourishes of gold thread, appeared the letter A. It was so artistically done, and with so much fertility and gorgeous luxuriance of fancy, that it had all the effect of a last and fitting decoration to the apparel which she wore, and which was of a splendour in accordance with the taste of the age, but greatly beyond what was allowed by the sumptuary regulations of the colony.\n\nIn this part of the extract, how does the writer use language and structure to show Hester's feelings as she faces the crowd?\n\nRefer closely to the text to support your views.",
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer shows that Hester\'s first feeling is shame. Her "first impulse" is to "clasp the infant closely to her bosom", and the narrator explains that this is "not so much by an impulse of motherly affection, as that she might thereby conceal a certain token". The vague phrase "a certain token" mirrors her wish to hide it, because even the narrator does not yet name what is on her dress.\n\nThe paragraph then turns at "In a moment, however", and her feelings change. She judges "that one token of her shame would but poorly serve to hide another", a bitter, almost wry thought that shows she knows the baby is itself a sign of what she has done. The list "with a burning blush, and yet a haughty smile, and a glance that would not be abashed" sets shame against pride. The "burning blush" shows that she still feels humiliated, but "and yet" marks a defiant turn, and the repeated "and" builds up her courage as she "looked around at her townspeople and neighbours".\n\nThe structure delays the reveal of the letter until the end of a long sentence: "On the breast of her gown, in fine red cloth, surrounded with an elaborate embroidery and fantastic flourishes of gold thread, appeared the letter A." The reader has to wait through the rich description, just as the crowd waits. The language of the description, "gorgeous luxuriance of fancy", makes the letter beautiful rather than shameful, which suggests that Hester has made her punishment into a challenge. The paragraph ends by saying that her dress went "greatly beyond what was allowed by the sumptuary regulations of the colony", so the last impression is of a woman who refuses to be humbled.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'Her "first impulse" is to "clasp the infant closely to her bosom" to "conceal a certain token", which shows her shame.',
                '"one token of her shame would but poorly serve to hide another" shows her bitter good sense: the baby is itself a sign of what she has done.',
                'The list "with a burning blush, and yet a haughty smile, and a glance that would not be abashed" sets shame against pride, and "and yet" marks her defiance.',
                'The letter is made beautiful, "an elaborate embroidery and fantastic flourishes of gold thread", which suggests that she has turned her punishment into a kind of challenge.',
              ],
              'Structure: points you might make': [
                'The paragraph turns at "In a moment, however", from hiding to facing the crowd.',
                'The letter is held back: first "a certain token", then, at the end of a long sentence, "appeared the letter A".',
                'It ends on how far her dress goes "beyond what was allowed", leaving the reader with her defiance.',
              ],
            },
          },
          {
            id: 'edexcel-p1-09-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to present Hester as a remarkable woman whom the crowd cannot ignore.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer presents Hester as remarkable very successfully, mainly through contrast. Before we see her, we see the town-beadle, who appears "like a black shadow emerging into sunshine", with "a sword by his side". He is described as "the grim and grisly presence" who represents "the whole dismal severity of the Puritanic code of law". By making the law so dark and grim, the writer prepares us to see Hester as its opposite.\n\nHer very first action proves it. When the beadle draws her forward, "she repelled him, by an action marked with natural dignity and force of character, and stepped into the open air as if by her own free will". This is a powerful moment, because it shows that even as a prisoner she refuses to be treated as one. The phrase "as if by her own free will" suggests that she is choosing to face the crowd rather than being dragged to it.\n\nThe writer also makes her human by showing her mixed feelings. She first wants to hide the letter behind her baby, but then, "with a burning blush, and yet a haughty smile, and a glance that would not be abashed", she looks around at the people. I find this the most convincing part of the portrait, because her courage is not effortless. The "burning blush" shows that she feels the shame, while the "haughty smile" shows that she will not give in to it, so the reader admires her more.\n\nHester\'s appearance is described through images of light, which set her apart from the beadle, that "black shadow". Her hair is "so glossy that it threw off the sunshine with a gleam", and she has "deep black eyes" and "a marked brow". The narrator tells us that "never had Hester Prynne appeared more ladylike" than as she left the prison, and that her beauty "made a halo of the misfortune and ignominy in which she was enveloped". The halo is a religious image that suggests a saint, which is a bold way to describe a woman the town is punishing. The crowd\'s reaction confirms her power: those who expected her to look "dimmed and obscured by a disastrous cloud" were "astonished, and even startled".\n\nThe writer ends by focusing on the letter itself, printed in capitals as "SCARLET LETTER", as though it were shouting from the page. It "transfigured the wearer", and people who had known her for years felt "as if they beheld her for the first time". The final image, that it "had the effect of a spell, taking her out of the ordinary relations with humanity, and enclosing her in a sphere by herself", is very effective, because it shows that the punishment has made her more remarkable, not less. Yet the word "enclosing" also hints at loneliness, and the narrator admits there was "some thing exquisitely painful in it", so the reader feels sympathy as well as admiration.\n\nSome readers may find the style difficult. The sentences are long and the vocabulary formal, with words such as "prefigured" and "evanescent", and this could make the scene feel slow. However, I think the slow, ceremonial style suits a solemn public occasion and builds Hester up gradually, so that by the end she seems larger than life. Overall the writer succeeds very well in presenting a woman whom nobody in the crowd, and no reader, can ignore.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The beadle, "like a black shadow emerging into sunshine", stands for "the whole dismal severity" of the law, a dark figure against whom Hester shines.',
                'Her first act is to push him away, "by an action marked with natural dignity and force of character".',
                'Her mixed feelings ("a burning blush, and yet a haughty smile") make her human as well as proud.',
                'Her beauty is described through light: hair "so glossy that it threw off the sunshine with a gleam", a beauty that "made a halo of the misfortune and ignominy".',
                'Those who had known her are "astonished, and even startled", and the capitalised SCARLET LETTER has "the effect of a spell", setting her apart "in a sphere by herself".',
                'Some may find the long sentences and difficult words ("prefigured", "evanescent") slow; others that the formal style suits a solemn public scene and builds her up slowly.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-09-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-09-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, had to face a crowd. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a young woman standing alone on a wooden platform, with a crowd gathered below her. Picture 2: a red letter A embroidered on dark cloth and edged with gold thread.\n\nWrite about a time when you, or someone you know, stood out from everyone else. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThere are four hundred and twelve seats in the main hall of Westfield Academy. I know, because I counted them, row by row, while I was waiting to make the speech that I had been dreading for a month.\n\nIt was the end-of-year assembly, and as head of the student council it was my job to say a few words. A few words. That was how Mrs Adeyemi had put it, smiling, as though a few words were nothing at all. I had written mine on six small cards, numbered in red pen, and by the morning of the assembly the cards were soft and curled at the edges from being shuffled in my sweaty hands.\n\nFrom my chair at the side of the stage, I could see the whole hall filling up. The Year 7s came first, small and noisy, their blazers still too big for them. Then the older years, slouching, laughing, scrolling through phones they were not supposed to have. The teachers lined the walls like guards. Somewhere near the back sat my mum, who had taken the morning off work and was wearing her bright yellow coat so that I could find her. I could not find her. Every face looked the same: a pale, blurred sea, rising and falling.\n\nThen the head teacher said my name, and the sea went quiet.\n\nThe walk to the lectern was only six steps, but it felt like a mile. My legs did not seem to belong to me. I put my cards down, and the first one slid straight off onto the floor. Somebody in Year 9 laughed, a short bark of a laugh, and my face burned so hot that I was sure everyone could see it glowing.\n\nFor a long moment, I said nothing at all. I looked down at the card on the floor. I looked at the microphone. I thought about running.\n\nAnd then, for some reason, I thought about my grandmother. She came to this country when she was nineteen, with one suitcase and almost no English, and she stood up in front of a whole factory floor of strangers on her first day and asked for a job. She told me once that her knees knocked so loudly that she was sure the foreman could hear them. "But I opened my mouth anyway," she said. "That is all courage is, my love. Opening your mouth anyway."\n\nSo I left the card where it was. I lifted my head, and I opened my mouth anyway.\n\nI did not say any of the things I had written down. I talked about the Year 7s, and how terrified we had all been once, in blazers that were too big for us. I talked about the boy who had laughed, and how laughing is what we do when we are nervous too. I talked about what it feels like to stand somewhere high, with everybody watching, and to decide not to hide.\n\nWhen I finished, there was a silence that lasted about a second. Then the applause began, at the back, and rolled forward through the hall like a wave reaching the shore.\n\nI found my mum then. She was standing up, in her yellow coat, clapping so hard that she was in danger of hurting herself. And I realised that my hands had stopped shaking.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about a performance, a speech, a first day, a match, or a moment of being judged by others.',
                'Question 6 could use the woman on the platform, the embroidered letter, or neither picture.',
                "Like the extract, a strong piece might show a character's mixed feelings and the moment they decide to face the watchers.",
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 10: George Eliot, Silas Marner, Chapter 12 (the child at the hearth)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-10',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-10-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nSilas Marner is a lonely weaver in the village of Raveloe whose hoard of gold was stolen some weeks ago. In this extract, it is New Year's Eve. A little girl, whose mother has collapsed in the snow outside, has toddled in through Silas's open door and fallen asleep by his fire.\n\nWords you may need: catalepsy is a kind of fit in which the body goes rigid and the mind blank; a graven image is a carved statue.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-10-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first two sentences of the extract.\n\nGive one word or phrase from them which shows that Silas has not noticed the child.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"he did not see the child"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "he did not see the child"; "did not see".',
            ],
          },
          {
            id: 'edexcel-p1-10-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nSince the on-coming of twilight he had opened his door again and again, though only to shut it immediately at seeing all distance veiled by the falling snow. But the last time he opened it the snow had ceased, and the clouds were parting here and there. He stood and listened, and gazed for a long while—there was really something on the road coming towards him then, but he caught no sign of it; and the stillness and the wide trackless snow seemed to narrow his solitude, and touched his yearning with the chill of despair.\n\nGive two things that Silas does or feels as he looks out of his door. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. He "stood and listened, and gazed for a long while".\n2. The empty, snowy night made him feel more alone, with "the chill of despair".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: he "had opened his door again and again"; he shut it "immediately" when he could see only falling snow; he "stood and listened, and gazed for a long while"; the stillness and the snow "seemed to narrow his solitude"; he felt "the chill of despair".',
            ],
          },
          {
            id: 'edexcel-p1-10-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "Turning towards the hearth, where the two logs had fallen apart" to the end of the extract.\n\nIn this part of the extract, how does the writer use language and structure to show Silas\'s feelings when he discovers the child?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer shows Silas\'s feelings by letting us share his mistake. With his "blurred vision", "it seemed as if there were gold on the floor", and the exclamation "Gold!—his own gold—brought back to him as mysteriously as it had been taken away!" shows his sudden, overwhelming joy. The dashes break up the sentence as if he is gasping. His body reacts first: "He felt his heart begin to beat violently", and for a moment he cannot even reach out. The gold "seemed to glow and get larger beneath his agitated gaze", which suggests that his longing is making it grow in his eyes.\n\nThe turning point comes in the middle of a sentence, which makes it a real surprise. "He leaned forward at last", and the phrase "at last" slows the moment down, but then the writer reverses everything: "instead of the hard coin with the familiar resisting outline, his fingers encountered soft warm curls". The contrast between "hard" and "soft", coin and "warm curls", sets cold wealth against warm life, and it hints that the child will mean more to him than money.\n\nHis feelings then change to wonder and confusion. "In utter amazement" he kneels to "examine the marvel", and the child, "a round, fair thing, with soft yellow rings all over its head", is described in a way that echoes the gold. The questions "Could this be his little sister come back to him in a dream" and "Was it a dream?" show that the discovery has woken memories of the sister he carried in his arms as a boy. The structure moves from the present to the past, and the part ends on a short, tender sentence: "It was very much like his little sister." After so much excitement, this quiet ending shows love beginning to return to his life.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                '"it seemed as if there were gold on the floor" shows how his longing shapes what he sees, and the exclamation "Gold!—his own gold" shows his joy.',
                '"He felt his heart begin to beat violently" and "his agitated gaze" show his excitement, and the gold "seemed to glow and get larger".',
                'The contrast between "the hard coin with the familiar resisting outline" and "soft warm curls" sets cold wealth against warm life.',
                '"In utter amazement" and "the marvel" show wonder, and "soft yellow rings" link the child\'s hair to the gold.',
                'The questions "Could this be his little sister come back to him in a dream" and "Was it a dream?" show his confusion and his memories.',
              ],
              'Structure: points you might make': [
                'The discovery turns in the middle of a sentence ("but instead of the hard coin"), so the reader shares his surprise.',
                '"He leaned forward at last" slows the moment down.',
                'After the discovery the focus moves from the present to the past, to his little sister.',
                'It ends on a short, tender sentence: "It was very much like his little sister."',
              ],
            },
          },
          {
            id: 'edexcel-p1-10-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to make the arrival of the child feel both mysterious and moving.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is highly successful, because she makes the reader feel both the mystery and the emotion of the moment, and links the two. The extract opens with a question from the narrator: "But where was Silas Marner while this strange visitor had come to his hearth?" The answer, "He was in the cottage, but he did not see the child", immediately creates suspense, because we know something that Silas does not. The child is called a "strange visitor", which makes her arrival seem like something out of a fairy tale.\n\nThe writer then makes us pity Silas before he finds her. Since his gold was stolen, he has been opening his door "as if he thought that his money might be somehow coming back to him", and the narrator says that his habit can hardly be understood "except by those who have undergone a bewildering separation from a supremely loved object". This is a moving comment, because it treats his loss of money as a real grief, and his gazing "not with hope, but with mere yearning and unrest" shows how lonely he is.\n\nThere are hints of fate throughout, which add to the mystery. The neighbours have told him, as a joke, that sitting up to hear the New Year rung in "might bring his money back again", and the reader soon sees the irony, because the New Year brings something far more precious. The narrator tells us that "there was really something on the road coming towards him then, but he caught no sign of it", and this dramatic irony makes the scene tense and strange. Then Silas falls into one of his fits and stands "like a graven image", holding the door open, "powerless to resist either the good or the evil that might enter there". The balance of "the good or the evil" makes the reader wonder what will come through the door.\n\nThe discovery itself is beautifully handled. When he sees what looks like gold, his joy is shown in "Gold!—his own gold—brought back to him as mysteriously as it had been taken away!" The word "mysteriously" is important, because the child seems to have arrived as mysteriously as the gold vanished, as if one has been exchanged for the other. When his fingers touch "soft warm curls" instead of "the hard coin", the shift from cold metal to warm life is both surprising and touching. The writer then deepens the emotion by linking the child with Silas\'s past: he wonders whether she is "his little sister come back to him in a dream", the sister "whom he had carried about in his arms for a year before she died". The extract ends quietly, "It was very much like his little sister.", which is very moving in its simplicity.\n\nSome readers may feel that the narrator\'s long explanations, such as the account of the neighbours\' "friendly Raveloe-way of jesting", slow down the pace, or that the coincidence of the child arriving at that moment is too convenient. However, I think the slow pace matches Silas\'s dreamlike state, and the coincidence is meant to feel mysterious, almost like a miracle. Overall the writer succeeds very well in creating a scene that is both mysterious and moving, and the reader finishes it sure that Silas\'s life is about to change.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The opening question, "But where was Silas Marner ...?", lets the reader know more than Silas, which creates suspense.',
                'His habit of looking out for his lost gold, and the narrator\'s sympathy for "a bewildering separation from a supremely loved object", make him pitiable.',
                'The neighbours\' joke that seeing the New Year in "might bring his money back again", and "there was really something on the road coming towards him", give the scene a hint of fate.',
                'His fit leaves the door open, "powerless to resist either the good or the evil that might enter there".',
                'The gold that turns into "soft warm curls" is both strange and touching, and the memory of his little sister deepens it.',
                "Some may find the narrator's explanations slow or the coincidence too neat; others that the slow pace matches Silas's trance and that the mystery is the point.",
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-10-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-10-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, found something precious in an unexpected place. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a small child asleep in front of a glowing fire. Picture 2: a line of footprints leading across deep snow towards a lit doorway.\n\nWrite about a new arrival. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nThe day my sister arrived, I was the only person in the family who was not pleased.\n\nI was nine, and I had been an only child for nine years, and I was very good at it. I knew exactly how much attention there was in our house, and I knew that all of it was mine. So when Mum and Dad sat me down at the kitchen table one evening in the spring and told me, with nervous, shining faces, that I was going to be a big sister, I said, "No, thank you," and went to my room.\n\nNobody listened, of course. All summer Mum grew rounder and slower, and the spare room filled up with mysterious objects: a cot that Dad assembled with a great deal of swearing, a changing mat printed with ducks, a mobile of felt stars that turned slowly in the draught from the window. Relatives I barely knew sent parcels of tiny clothes. Every conversation seemed to begin with "When the baby comes". I began to think of the baby as an invader, a small enemy army gathering its strength on the other side of a border.\n\nShe arrived at four in the morning in late October, in the middle of a storm. I was asleep at Gran\'s house, and Dad rang at breakfast. I heard Gran gasp and laugh and say, "Oh, a girl," and then I went into the garden and kicked the football against the shed for a very long time.\n\nThey brought her home two days later. I refused to go to the door. I sat on the stairs instead, with my arms folded, listening to the fuss in the hall: the rustle of coats, Gran\'s voice going high and soft, the creak of the car seat being set down.\n\n"Come and meet her," said Dad.\n\nI went, slowly, because I could not think of a good reason not to.\n\nShe was smaller than I had imagined. That was the first surprise. She was wrapped in a white blanket, and all I could see was a face no bigger than my hand, red and crumpled, like a rose that has not quite decided to open. Her eyes were shut tight. Her fists were curled up beside her ears as though she were about to box someone, and I remember thinking that, if she was an enemy army, she was not a very frightening one.\n\n"Do you want to hold her?" asked Mum.\n\nI did not. I said yes anyway.\n\nShe was heavier than she looked, and warm, and she smelt of milk and something sweet that I could not name. I held her very stiffly, the way you would hold a parcel that might explode. And then, without any warning, she opened her eyes.\n\nThey were dark and cloudy and enormous, and they looked straight at me. Not at Mum, not at Dad, not at Gran. At me. One tiny hand uncurled and drifted upwards until it found my finger, and closed round it with a grip so fierce that I gasped.\n\nNobody said anything. The rain went on drumming against the window, and the clock ticked in the hall, and my sister held on to my finger as though she had been waiting nine years to find it.\n\nThat was eleven years ago. She is in Year 6 now, and she borrows my clothes without asking, and she knows exactly how much attention there is in our house. But sometimes, when she is tired or frightened, she still reaches for my finger in the dark. And I still let her hold on.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about a lost object found, an unexpected friend, or a discovery that mattered more than money.',
                'Question 6 could use the sleeping child, the footprints in the snow, or neither picture: a baby, a pet, a new neighbour or a new student.',
                'Like the extract, a strong piece might build towards a single moment of discovery and show how one character changes.',
              ],
            },
          },
        ],
      },
    ],
  },
]
